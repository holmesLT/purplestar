#!/usr/bin/env python3
"""
PurpleStar SEO 周报生成器 v2

每周跑一次,自动从 GSC + Bing Webmaster + Yandex 拉数据,生成 markdown 周报。

依赖安装:
  pip install requests --break-system-packages

环境变量:
  GSC_CREDENTIALS          - Google Search Console 凭证 JSON 文件路径
  BING_API_KEY             - Bing Webmaster API Key
  YANDEX_OAUTH_TOKEN       - Yandex Metrica API Token

用法:
  python tools/seo_weekly_report.py

输出:
  seo-reports/seo-report-YYYY-MM-DD.md
"""

import os
import json
import urllib.request
import urllib.error
from datetime import datetime, timedelta
from pathlib import Path

REPORT_DIR = Path(__file__).parent.parent / "seo-reports"
REPORT_DIR.mkdir(exist_ok=True)

SITE_URL = "https://purplestar.cc"

# ============================================================
# GSC 配置(可选)
# ============================================================
GSC_AVAILABLE = False
try:
    from google.oauth2 import service_account
    from googleapiclient.discovery import build

    GSC_CREDENTIALS_FILE = os.environ.get("GSC_CREDENTIALS", "")
    GSC_SITE_URL = SITE_URL
    GSC_AVAILABLE = bool(GSC_CREDENTIALS_FILE and os.path.exists(GSC_CREDENTIALS_FILE))
except ImportError:
    pass


def fetch_gsc_data() -> dict | None:
    """从 Google Search Console API 拉过去 7 天数据。"""
    if not GSC_AVAILABLE:
        return None

    try:
        creds = service_account.Credentials.from_service_account_file(
            GSC_CREDENTIALS_FILE,
            scopes=["https://www.googleapis.com/auth/webmasters.readonly"],
        )
        service = build("searchconsole", "v1", credentials=creds)

        end_date = datetime.now() - timedelta(days=3)  # GSC 3 天延迟
        start_date = end_date - timedelta(days=7)

        request = {
            "startDate": start_date.strftime("%Y-%m-%d"),
            "endDate": end_date.strftime("%Y-%m-%d"),
            "dimensions": ["query", "page"],
            "rowLimit": 100,
        }

        response = service.searchanalytics().query(
            siteUrl=GSC_SITE_URL, body=request
        ).execute()

        return {
            "rows": response.get("rows", []),
            "start_date": start_date.strftime("%Y-%m-%d"),
            "end_date": end_date.strftime("%Y-%m-%d"),
        }
    except Exception as e:
        print(f"⚠️  GSC API 失败: {e}")
        return None


def fetch_bing_data() -> dict | None:
    """
    Bing Webmaster API — 拉过去 7 天的搜索词统计。
    API key 获取:Bing Webmaster → Settings → API Access
    """
    api_key = os.environ.get("BING_API_KEY", "")
    if not api_key:
        return None

    try:
        end_date = (datetime.now() - timedelta(days=3)).strftime("%Y-%m-%d")
        start_date = (datetime.now() - timedelta(days=10)).strftime("%Y-%m-%d")

        url = (
            f"https://ssl.bing.com/webmasters/api.svc/json/QueryStats?"
            f"apikey={api_key}&siteUrl={SITE_URL}&startDate={start_date}&endDate={end_date}"
        )

        req = urllib.request.Request(url, headers={"Accept": "application/json"})
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read().decode("utf-8"))

        # Bing 数据结构:
        # data["d"] 是数组,每个元素 {Date, Query, Impressions, Clicks, AvgPos, AvgClickPos}
        rows = data.get("d", [])

        total_clicks = sum(r.get("Clicks", 0) for r in rows)
        total_impressions = sum(r.get("Impressions", 0) for r in rows)

        return {
            "rows": rows,
            "total_clicks": total_clicks,
            "total_impressions": total_impressions,
            "start_date": start_date,
            "end_date": end_date,
        }
    except urllib.error.HTTPError as e:
        print(f"⚠️  Bing API HTTP {e.code}: {e.reason}")
        return None
    except Exception as e:
        print(f"⚠️  Bing API 失败: {e}")
        return None


def fetch_yandex_data() -> dict | None:
    """
    Yandex Metrica API — 拉过去 7 天的访客数。
    需要 OAuth token。
    """
    token = os.environ.get("YANDEX_OAUTH_TOKEN", "")
    counter_id = os.environ.get("NEXT_PUBLIC_YANDEX_METRICA_ID", "")

    if not (token and counter_id):
        return None

    try:
        end_date = datetime.now().strftime("%Y-%m-%d")
        start_date = (datetime.now() - timedelta(days=7)).strftime("%Y-%m-%d")

        url = (
            f"https://api-metrika.yandex.net/stat/v1/data?"
            f"ids={counter_id}&metrics=ym:s:visits,ym:s:users,ym:s:pageviews"
            f"&date1={start_date}&date2={end_date}"
            f"&oauth_token={token}"
        )

        req = urllib.request.Request(url, headers={"Accept": "application/json"})
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read().decode("utf-8"))

        # Yandex 返回结构:
        # data["data"] - 数组,data["data"][0]["metrics"] - 数值数组
        rows = data.get("data", [])
        if rows and rows[0].get("metrics"):
            metrics = rows[0]["metrics"]
            return {
                "visits": int(metrics[0]) if len(metrics) > 0 else 0,
                "users": int(metrics[1]) if len(metrics) > 1 else 0,
                "pageviews": int(metrics[2]) if len(metrics) > 2 else 0,
                "start_date": start_date,
                "end_date": end_date,
            }
        return None
    except Exception as e:
        print(f"⚠️  Yandex API 失败: {e}")
        return None


def aggregate_metrics(gsc_data: dict | None) -> dict:
    """从 GSC 数据汇总指标。"""
    if not gsc_data or not gsc_data.get("rows"):
        return {
            "total_clicks": 0,
            "total_impressions": 0,
            "avg_ctr": 0,
            "avg_position": 0,
            "top_queries": [],
            "top_pages": [],
        }

    rows = gsc_data["rows"]
    total_clicks = sum(r["clicks"] for r in rows)
    total_impressions = sum(r["impressions"] for r in rows)
    avg_ctr = total_clicks / total_impressions if total_impressions else 0
    avg_position = (
        sum(r["position"] * r["impressions"] for r in rows) / total_impressions
        if total_impressions
        else 0
    )

    # Top 10 关键词(按点击)
    top_queries = sorted(rows, key=lambda r: r["clicks"], reverse=True)[:10]
    # Top 10 页面(按点击)
    top_pages = sorted(
        [r for r in rows if len(r["keys"]) > 1],
        key=lambda r: r["clicks"],
        reverse=True,
    )[:10]

    return {
        "total_clicks": total_clicks,
        "total_impressions": total_impressions,
        "avg_ctr": avg_ctr,
        "avg_position": avg_position,
        "top_queries": top_queries,
        "top_pages": top_pages,
    }


def generate_action_items(metrics: dict, bing: dict | None, yandex: dict | None) -> list:
    """根据数据自动给出行动建议。"""
    actions = []

    if metrics["total_impressions"] < 100:
        actions.append("**展示 < 100**:多发外链(Reddit / Medium / LinkedIn 软推)")
    if metrics["avg_ctr"] < 0.02 and metrics["total_impressions"] > 50:
        actions.append("**CTR < 2%**:优化 title 和 meta description(把主关键词放在前 30 字符)")
    if metrics["avg_position"] > 30:
        actions.append("**平均排名 > 30**:更新文章内容 + 加 internal links 到其他 /learn 页面")
    if metrics["total_clicks"] > 0 and len(metrics["top_pages"]) >= 3:
        top_page_clicks = metrics["top_pages"][0]["clicks"]
        total = metrics["total_clicks"]
        if top_page_clicks / total > 0.7:
            actions.append(
                "**流量集中 1 个页面**({:.0%}):优化其他 7 篇 /learn 文章,加内链".format(
                    top_page_clicks / total
                )
            )

    # 总是推荐
    actions.append("重新跑 `python tools/indexnow_push.py` 推送新内容(若本周有发布)")

    return actions


def generate_report(gsc_data: dict | None, bing: dict | None, yandex: dict | None) -> Path:
    """生成 markdown 周报。"""
    metrics = aggregate_metrics(gsc_data)
    actions = generate_action_items(metrics, bing, yandex)

    today = datetime.now().strftime("%Y-%m-%d")
    report_path = REPORT_DIR / f"seo-report-{today}.md"

    md = f"""# PurpleStar SEO 周报 — {today}

> 自动生成。覆盖过去 7 天。

## 📊 核心指标 — GSC

| 指标 | 数值 | 行业基准 |
|------|------|---------|
| **总展示 (Impressions)** | {metrics['total_impressions']:,} | - |
| **总点击 (Clicks)** | {metrics['total_clicks']:,} | - |
| **平均 CTR** | {metrics['avg_ctr']:.2%} | 2-5% |
| **平均排名** | {metrics['avg_position']:.1f} | < 30 进首页 |

"""

    if gsc_data:
        md += f"""**时间范围**: {gsc_data['start_date']} → {gsc_data['end_date']}

### Top 10 关键词(按点击)

| 关键词 | 点击 | 展示 | CTR | 排名 |
|--------|------|------|-----|------|
"""
        for row in metrics["top_queries"]:
            if len(row["keys"]) >= 1:
                query = row["keys"][0]
                md += f"| {query} | {row['clicks']} | {row['impressions']} | {row['ctr']:.2%} | {row['position']:.1f} |\n"

        md += """
### Top 10 页面(按点击)

| 页面 | 点击 | 展示 | CTR | 排名 |
|------|------|------|-----|------|
"""
        for row in metrics["top_pages"]:
            if len(row["keys"]) >= 2:
                page = row["keys"][1].replace(SITE_URL, "")
                md += f"| {page} | {row['clicks']} | {row['impressions']} | {row['ctr']:.2%} | {row['position']:.1f} |\n"
    else:
        md += """> ⚠️ **GSC API 未配置**

启用:
1. Google Cloud Console → 启用 "Search Console API"
2. 创建 Service Account,下载 JSON 凭证
3. 环境变量: `export GSC_CREDENTIALS=/path/to/creds.json`
4. GSC → Settings → Users → 添加 Service Account 邮箱为 Full 用户

**手动替代**:GSC Performance 页面填入上面的数字。
"""

    # Bing 数据
    md += "\n## 🔍 Bing 数据\n\n"
    if bing:
        md += f"""- **Impressions**: {bing['total_impressions']:,}
- **Clicks**: {bing['total_clicks']:,}
- **时间范围**: {bing['start_date']} → {bing['end_date']}

"""
    else:
        md += """> ⚠️ **Bing API 未配置**

启用:
1. https://www.bing.com/webmasters → Settings → API Access → Generate API Key
2. 环境变量: `export BING_API_KEY=xxxxx`

**手动替代**:Bing Webmaster → Performance → Search Keywords,填入上方。

"""

    # Yandex 数据
    md += "\n## 🇷🇺 Yandex Metrica\n\n"
    if yandex:
        md += f"""- **Visits**: {yandex['visits']:,}
- **Users**: {yandex['users']:,}
- **Pageviews**: {yandex['pageviews']:,}
- **时间范围**: {yandex['start_date']} → {yandex['end_date']}

"""
    else:
        md += """> ⚠️ **Yandex API 未配置**

启用:
1. https://metrica.yandex.com → 你的 counter → Settings → API access
2. 创建 OAuth token
3. 环境变量: `export YANDEX_OAUTH_TOKEN=xxxxx`

**手动替代**:Yandex Metrica → Reports → 标准报告,填入上方。

"""

    # 行动建议
    md += "\n## 🎯 本周行动建议\n\n"
    for action in actions:
        md += f"- [ ] {action}\n"

    md += f"""
## 📅 趋势对比(本周 vs 上周)

> 💡 跑两次脚本(中间隔 7 天)就能看出趋势。

## 🔧 工具状态

| 工具 | 状态 |
|------|------|
| GSC API | {'✅ 已配置' if gsc_data else '❌ 未配置'} |
| Bing API | {'✅ 已配置' if bing else '❌ 未配置'} |
| Yandex API | {'✅ 已配置' if yandex else '❌ 未配置'} |
| IndexNow | ✅ 手动跑 `python tools/indexnow_push.py` |

---

*下次运行:下周一同时。报告保存至 `seo-reports/`*
"""

    report_path.write_text(md, encoding="utf-8")
    return report_path


def main():
    print("=" * 60)
    print("  PurpleStar SEO 周报生成器 v2")
    print("=" * 60)
    print()

    print("📥 拉取 GSC 数据...")
    gsc_data = fetch_gsc_data()
    print(f"   {'✅ 成功' if gsc_data else '⚠️  跳过(未配置)'}")

    print("📥 拉取 Bing 数据...")
    bing_data = fetch_bing_data()
    print(f"   {'✅ 成功' if bing_data else '⚠️  跳过(未配置)'}")

    print("📥 拉取 Yandex 数据...")
    yandex_data = fetch_yandex_data()
    print(f"   {'✅ 成功' if yandex_data else '⚠️  跳过(未配置)'}")

    print()
    print("📝 生成周报...")
    report_path = generate_report(gsc_data, bing_data, yandex_data)
    print(f"✅ 周报已生成: {report_path}")
    print()
    print("💡 提示:")
    print("   • 打开报告手动填未配置的 API 数据")
    print("   • 每周一同时跑一次,记录趋势")
    print("   • 配置 API key 后下周可以全自动")


if __name__ == "__main__":
    main()
