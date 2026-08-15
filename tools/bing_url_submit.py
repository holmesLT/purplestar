#!/usr/bin/env python3
"""
Bing URL Submission API 批量提交脚本

Bing Webmaster 提供 URL Submission API:
  https://www.bing.com/webmasters/url-submission-api

用法:
  1. 打开 https://www.bing.com/webmasters
  2. Settings -> API Access -> Generate API Key
  3. 把 API key 填到 BING_API_KEY
  4. python bing_url_submit.py

限制:
  - 每月 10000 URL 免费
  - 单次最多 500 URL
  - 同一 URL 一天不要重复提交
"""

import json
import sys
import urllib.request
import urllib.error
from datetime import datetime

# ============================================================
# 配置(填你的 Bing Webmaster API key)
# ============================================================
BING_API_KEY = "REPLACE_ME_WITH_BING_API_KEY"  # Settings -> API Access
SITE_URL = "https://purplestar.cc"

# ============================================================
# URL 清单
# ============================================================
URLS = [
    f"{SITE_URL}/",
    f"{SITE_URL}/learn/",
    f"{SITE_URL}/learn/ziwei-doushu-vs-bazi/",
    f"{SITE_URL}/learn/how-to-read-purple-star-astrology-chart/",
    f"{SITE_URL}/learn/ziwei-doushu-12-palaces-explained/",
    f"{SITE_URL}/learn/ziwei-doushu-14-main-stars/",
    f"{SITE_URL}/learn/ziwei-doushu-career-wealth-palace/",
    f"{SITE_URL}/learn/ziwei-doushu-vs-western-astrology/",
    f"{SITE_URL}/learn/is-ziwei-doushu-accurate/",
    f"{SITE_URL}/learn/ziwei-doushu-four-transformations-sihua/",
]


def submit_to_bing() -> int:
    """推送到 Bing URL Submission API,返回 HTTP 状态码。"""
    if BING_API_KEY == "REPLACE_ME_WITH_BING_API_KEY":
        print("❌ 请先设置 BING_API_KEY")
        print("   1. 打开 https://www.bing.com/webmasters")
        print("   2. Settings -> API Access -> Generate API Key")
        print("   3. 把 key 填到脚本顶部")
        sys.exit(1)

    payload = json.dumps(URLS).encode("utf-8")

    req = urllib.request.Request(
        f"https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey={BING_API_KEY}",
        data=payload,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )

    print(f"📤 推送 {len(URLS)} 个 URL 到 Bing ...")
    print(f"   Site: {SITE_URL}")
    print(f"   Time: {datetime.now().isoformat()}")
    print()

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            status = resp.status
            body = resp.read().decode("utf-8")
            print(f"✅ HTTP {status}")
            print(f"   响应: {body}")
            return status
    except urllib.error.HTTPError as e:
        print(f"❌ HTTP {e.code}: {e.reason}")
        body = e.read().decode("utf-8")
        print(f"   响应: {body}")
        if e.code == 400:
            print()
            print("🔧 排查:")
            print("   • API key 错误?重新生成一个")
            print("   • Site URL 格式?必须包含 https://")
        elif e.code == 403:
            print()
            print("🔧 排查:")
            print("   • 检查 Bing Webmaster 该站点是否还在 Verified 状态")
        return e.code
    except urllib.error.URLError as e:
        print(f"❌ 网络错误: {e.reason}")
        return -1


def main():
    print("=" * 60)
    print("  Bing URL Submission API Pusher")
    print("=" * 60)
    print()
    submit_to_bing()


if __name__ == "__main__":
    main()
