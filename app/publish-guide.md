# 文章发布全流程（Medium、LinkedIn、Pinterest、Reddit）

本文为快速把已写好的 8 篇 SEO 长文、5 条 Reddit 软推、5 篇 Medium、3 篇 LinkedIn 发布到对应平台的操作说明。

> 所有文章均已放在本地 `C:\AI\purplestar\app\publish-guide.md`，前面文件名为 `medium-xx`, `reddit-xx`, `linkedin-xx`, `pinterest-pin-xx`。

## 1️⃣ Medium（需先登录）

1. 开；打开 Medium `https://medium.com/journal`。  
2. 点击 **New story**。  
3. 复制 `medium-01-...md` 里的完整正文（不含 Markdown 语法)。**注意**：未做阴影；只粘贴正文。  
4. 右上角三点 → **Story settings**，勾选 **Canonical URL** 并填入对应 slug，例如 `https://purplestar.cc/learn/how-to-read-purple-star-astrology-chart/`。  
5. 置顶 Title、Tags、类别：
   - Title：原始标题（如 `How to Read a Ziwei Doushu Chart: A Step‑by‑Step Guide for Beginners`）
   - Tags：`Chinese Astrology`, `Ziwei Doushu`, `Purple Star Astrology`, `Astrology`, `Self Improvement`
6. 预览 & 发表。 用浏览器缓存可在编辑器右上方 Duplicate 以备改稿。 

> **Batch**：如果机器有 API 支持，可用 `Medium API` `POST /v3/machinery/archives` 批量提交；但常用手动更简单。

## 2️⃣ LinkedIn

1. 打开 `linkedin.com` → **Post** → **Write an article**。
2. 为每篇文章打开对应的 `linkedin-xx.txt` 文本。
3. 粘贴正文。顶部先加一句简短摘要，例如 “在这篇文章中，您可以了解如何通过 Ziwei Doushu 读取您自己的星图”。
4. 末尾添加链接：`Read my free Ziwei chart → https://purplestar.cc/`。
5. 关键字：`Chinese Astrology`, `Ziwei`, `Personal Development`, `Career`。
6. 点击 **Publish**。可以选 `Add to your articles` 在个人档案显示。

> **批量**：利用 LinkedIn 官方 `UGCPost` API，配合 `requests` 或 `node-fetch` 发送 JSON payload。

## 3️⃣ Pinterest

1. 登录 Pinterest → **Create pin**。
2. 上传 PNG：`
pinterest-pin-01.png` 和 `pinterest-pin-02.png`。
3. 标题：分别为 `The 12 Life Palaces of Ziwei Doushu Explained` 与 `How to Read Your Ziwei Chart in 5 Steps`。
4. 描述：
   - 第 1 款：`A quick glance at the 12 life palaces in Ziwei Doushu. Read the full guide here → https://purplestar.cc/learn/ziwei-doushu-12-palaces-explained/`。
   - 第 2 款：`Learn the 5️⃣ steps to read your Ziwei Doushu chart. View the full tutorial → https://purplestar.cc/learn/how-to-read-purple-star-astrology-chart/`。
5. 选择 Board，然后发布。

> **批量**：如果你熟悉 API，可以使用 `POST https://api.pinterest.com/v1/pins/`，携带 `image_url` 与 `link`。

## 4️⃣ Reddit（直接在讨论区发回复）

1. 在目标 subreddit 打开一个活跃主题（例如 r/ZodiacAstrology、r/astrology、r/AskAstrologers 等）。
2. 复制 `reddit-01-...md` 的内容，并粘贴到 **Reply** 文本框。
3. 只在结尾加上 **(链接)**：`
   (https://purplestar.cc/learn/ziwei-doushu-vs-western-astrology/)
`
4. 点击提交。

> **批量**：使用 Reddit 官方 PRAW（Python 版）或 `snoowrap`（Node 版）写脚本，把每个 `.md` 读成字符串，用 `reddit.subreddit('...').reply(...)` 即可。

## 5️⃣ 一键脚本示例（Python + Medium API）

如果你熟悉 Python，下面这段示例代码可一次性发布 Medium 文章。

```python
import os
import json
import requests
from pathlib import Path

# Medium access token（从 Medium 设置 -> Access tokens 获取）
TOKEN = "YOUR_MEDIUM_TOKEN"
BASE = "https://api.medium.com/v1"

headers = {
    "Authorization": f"Bearer {TOKEN}",
    "Content-Type": "application/json",
    "Accept": "application/json"
}

# 读取所有 medium-xxx.md 并发布
for md_file in Path('C:/AI/purplestar/app').glob('medium-*.md'):
    slug = md_file.stem.split('-')[1]  # e.g., '01'
    with open(md_file, 'r', encoding='utf-8') as f:
        body = f.read()
    data = {
        "title": f"Zidai {slug}",
        "tags": ["Chinese Astrology", "Ziwei Doushu",
                  "Purple Star Astrology", "Astrology", "Self Improvement"],
        "canonicalUrl": f"https://purplestar.cc/learn/{slug}/",
        "contentFormat": "html",  # 你可以把 markdown 转 html 先
        "contentValue": body
    }
    r = requests.post(f"{BASE}/articles", headers=headers, json=data)
    print(md_file.name, r.status_code, r.json().get('id'))
```

> 同理，可以写脚本发布 LinkedIn 或 Pinterest，将 lnk 或 image 等上传。

## 结束语

以上步骤可让你在几分钟内把所有内容推送到不同聚合平台。请先确保你拥有 **必要的 OAuth token** 并已在相应平台申请了 **API 访问**（可在设置 -> Developer Center 查询）。如果你要进行批量发布，建议先做口令安全检查。

如需进一步帮助（批量脚本、OAuth 授权、掉包检查），随时告知！
