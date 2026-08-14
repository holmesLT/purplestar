#!/usr/bin/env python3
"""
IndexNow 推送脚本 - 一键推送所有 PurpleStar URL 到 Bing/Yandex/DuckDuckGo。

IndexNow 是 Bing 主导的协议,接受推送后 1 小时内 Bing/Yandex 开始抓取。
DuckDuckGo 80% 结果来自 Bing,所以一次推送覆盖三大引擎。

用法:
  1. 访问 https://www.bing.com/indexnow/getkey 生成 key (8-128 位十六进制)
  2. 在网站根目录放一个 {key}.txt 文件,内容就是 key 字符串
  3. 改本脚本的 INDEXNOW_KEY 常量
  4. python indexnow_push.py

成功后 Bing Webmaster Tools → IndexNow 会看到 "10 URLs submitted"。
"""

import json
import sys
import urllib.request
import urllib.error
from datetime import datetime

# ============================================================
# 配置
# ============================================================
INDEXNOW_KEY = "5a6d3b2fd71e485397beb74b986adccc"  # 32 位十六进制 key
HOST = "purplestar.cc"
KEY_LOCATION = f"https://{HOST}/{INDEXNOW_KEY}.txt"

# ============================================================
# URL 清单(与 sitemap.ts 保持一致)
# ============================================================
URLS = [
    f"https://{HOST}/",
    f"https://{HOST}/learn/",
    f"https://{HOST}/learn/ziwei-doushu-vs-bazi/",
    f"https://{HOST}/learn/how-to-read-purple-star-astrology-chart/",
    f"https://{HOST}/learn/ziwei-doushu-12-palaces-explained/",
    f"https://{HOST}/learn/ziwei-doushu-14-main-stars/",
    f"https://{HOST}/learn/ziwei-doushu-career-wealth-palace/",
    f"https://{HOST}/learn/ziwei-doushu-vs-western-astrology/",
    f"https://{HOST}/learn/is-ziwei-doushu-accurate/",
    f"https://{HOST}/learn/ziwei-doushu-four-transformations-sihua/",
]


def push_to_indexnow() -> int:
    """推送到 IndexNow API,返回 HTTP 状态码。"""
    if INDEXNOW_KEY == "REPLACE_ME_WITH_YOUR_KEY":
        print("❌ 请先在脚本顶部设置 INDEXNOW_KEY")
        print("   访问 https://www.bing.com/indexnow/getkey 生成 key")
        sys.exit(1)

    payload = {
        "host": HOST,
        "key": INDEXNOW_KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": URLS,
    }

    req = urllib.request.Request(
        "https://api.indexnow.org/indexnow",
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )

    print(f"📤 推送 {len(URLS)} 个 URL 到 IndexNow ...")
    print(f"   引擎覆盖: Bing + Yandex + DuckDuckGo + Naver + Seznam")
    print(f"   时间: {datetime.now().isoformat()}")
    print()

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            status = resp.status
            body = resp.read().decode("utf-8")
            print(f"✅ HTTP {status}")
            print(f"   响应: {body}")
            print()
            print("📊 预期效果:")
            print("   • Bing: 1 小时内开始抓取(原本要 7-30 天)")
            print("   • 24-48 小时后可在 Bing 搜索 site:purplestar.cc 看到")
            print("   • 7 天后检查 Bing Webmaster → IndexNow 工具的 URL 提交历史")
            return status
    except urllib.error.HTTPError as e:
        print(f"❌ HTTP {e.code}: {e.reason}")
        print(f"   响应: {e.read().decode('utf-8')}")
        print()
        print("🔧 排查:")
        print("   • 检查 INDEXNOW_KEY 是否正确")
        print(f"   • 确认 https://{HOST}/{INDEXNOW_KEY}.txt 可访问且内容 = key")
        print("   • 单次最多推送 10,000 个 URL,你只推了 10 个,没问题")
        return e.code
    except urllib.error.URLError as e:
        print(f"❌ 网络错误: {e.reason}")
        return -1


def main():
    print("=" * 60)
    print("  PurpleStar IndexNow Pusher")
    print("=" * 60)
    print()
    push_to_indexnow()


if __name__ == "__main__":
    main()
