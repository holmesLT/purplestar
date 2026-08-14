#!/usr/bin/env python3
"""
PurpleStar SEO 周报生成器

每周跑一次,自动从 GSC 和 Bing Webmaster 拉数据,生成 markdown 周报。

依赖:pip install requests --break-system-packages
配置:在脚本顶部填入你的 GSC API 凭证(可选)

用法:
  python tools/seo_weekly_report.py

输出:seo-reports/seo-report-YYYY-MM-DD.md
"""

import os
import json
from datetime import datetime, timedelta
from pathlib import Path

REPORT_DIR = Path(__file__).parent.parent / "seo-reports"
REPORT_DIR.mkdir(exist_ok=True)

SITE_URL = "https://purplestar.techhouse.ccwu.cc"

# ============================================================
# GSC 配置(可选 - 需要 Google Search Console API 凭证)
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

        end_date = datetime.now() - timedelta(days=3)  # GSC 数据有 3 天延迟
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
    Bing Webmaster API(占位 - 需要 API key)。
    Bing 也提供类似 GSC 的 API。
    """
    return None  # TODO: 接 Bing Webmaster API


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

    # Top 10 关键词
    top_queries = sorted(rows, key=lambda r: r["clicks"], reverse=True)[:10]
    # Top 10 页面
    top_pages = sorted(
        [r for r in rows if "page" in r["keys"][1] if len(r["keys"]) > 1],
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


def generate_report(gsc_data: dict | None) -> Path:
    """生成 markdown 周报。"""
    metrics = aggregate_metrics(gsc_data)

    today = datetime.now().strftime("%Y-%m-%d")
    report_path = REPORT_DIR / f"seo-report-{today}.md"

    md = f"""# PurpleStar SEO 周报 — {today}

> 自动生成。覆盖过去 7 天(数据有 3 天延迟)。

## 📊 核心指标(GSC 数据)

| 指标 | 数值 | 行业基准 |
|------|------|---------|
| **总展示(Impressions)** | {metrics['total_impressions']:,} | - |
| **总点击(Clicks)** | {metrics['total_clicks']:,} | - |
| **平均 CTR** | {metrics['avg_ctr']:.2%} | 2-5% |
| **平均排名** | {metrics['avg_position']:.1f} | < 30 进首页 |

"""

    if not gsc_data:
        md += """> ⚠️ **GSC API 未配置**

要启用自动数据拉取:
1. 在 Google Cloud Console 启用 "Search Console API"
2. 创建 Service Account,下载 JSON 凭证
3. 把 JSON 文件路径设置到环境变量 `GSC_CREDENTIALS`
4. 在 GSC 设置里把 Service Account 邮箱添加为 "Full" 用户

**手动替代**:直接看 GSC Performance 页面,把数字填到上面。
"""
    else:
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

    md += """
## 🎯 本周行动建议

根据数据自动给出建议(可手动调整):

- [ ] 如果 impressions < 100:**多发外链**(Reddit/Medium/LinkedIn 软推)
- [ ] 如果 CTR < 2%:**优化 title 和 meta description**(前 3 名的关键字位置)
- [ ] 如果平均排名 > 30:**更新文章内容,加 internal links**
- [ ] 如果点击集中在 1-2 个页面:**优化其他 6 篇**(内链 + 图片)
- [ ] 重新跑 `python tools/indexnow_push.py` 推送新内容

## 🔗 Bing 数据(手动)

1. 打开 https://www.bing.com/webmasters
2. Performance → Search Keywords
3. 把数字填入下方:

- Bing Impressions: ___
- Bing Clicks: ___
- Bing Indexed URLs: ___

---

*下次运行:下周一同时*
"""

    report_path.write_text(md, encoding="utf-8")
    return report_path


def main():
    print("=" * 60)
    print("  PurpleStar SEO 周报生成器")
    print("=" * 60)
    print()

    print("📥 拉取 GSC 数据...")
    gsc_data = fetch_gsc_data()

    print("📥 拉取 Bing 数据...")
    bing_data = fetch_bing_data()

    print("📝 生成周报...")
    report_path = generate_report(gsc_data)
    print(f"✅ 周报已生成: {report_path}")
    print()
    print("💡 提示:")
    print("   • 打开报告手动填 Bing 数据")
    print("   • 每周一同时跑一次,记录趋势")


if __name__ == "__main__":
    main()
