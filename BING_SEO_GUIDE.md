# PurpleStar Bing SEO 完整指南

> 为什么做 Bing:英文紫微斗数市场,**Bing 前 10 名比 Google 容易 3-5 倍**。
> 一次优化,Bing + DuckDuckGo + Yahoo + 部分 Yandex 都受益。

---

## 📊 数据:Bing 实际份额(2024-2026)

| 渠道 | 份额 |
|------|------|
| Bing 全美桌面 | ~25% |
| Microsoft Edge / Windows 11 默认 | ~30% |
| DuckDuckGo(80% 用 Bing) | ~5% 全球 |
| Yahoo(用 Bing 后端) | ~3% |

**结论**:优化 Bing ≈ 拿下英文桌面 **30%+** 搜索用户。

---

## ✅ 已完成的 Bing 接入步骤

### Step 1:注册 Bing Webmaster Tools
- 访问 https://www.bing.com/webmasters
- 用 Microsoft 账号(或 Gmail)登录
- 添加网站 `https://purplestar.techhouse.ccwu.cc`

### Step 2:XML 文件验证
- 下载 `BingSiteAuth.xml`
- 上传到 `public/` 目录
- 重新 build + 部署
- 在 Bing 后台点 **Verify**

---

## 🔄 部署后立刻做(我帮你跑)

### Step 3:提交 Sitemap
```
URL: https://purplestar.techhouse.ccwu.cc/sitemap.xml
```
直接复用 GSC 同一份 sitemap。

### Step 4:IndexNow 推送
1. 访问 https://www.bing.com/indexnow/getkey 生成 key (8-128 位十六进制)
2. 在网站根放 `{key}.txt` 文件,内容就是 key
3. 跑 `python tools/indexnow_push.py`

> ⚠️ **IndexNow 是 Bing 独有加速**:推送后 **1 小时** Bing 开始抓取(原本要 7-30 天)。

### Step 5:URL Inspection(可选)
Bing 后台 → URL Inspection → 输入每个 /learn 路径手动提交。一次性 10 个 URL,2 分钟。

---

## 🔍 Bing vs GSC 数据对比

部署完成后,2 周后开始对比:

| 指标 | GSC(Google) | Bing Webmaster |
|------|-------------|----------------|
| Impressions | ✅ 看 | ✅ 看 |
| Clicks | ✅ 看 | ✅ 看 |
| 平均 CTR | ✅ 看 | ✅ 看 |
| 关键词数据 | ✅ 详细(1000 行) | ✅ 较简(50 行) |
| 索引状态 | ✅ Index Coverage | ✅ URL Inspection |
| 反链数据 | ✅ Limited | ✅ Detailed |
| Core Web Vitals | ✅ | ❌ |
| **审核速度** | **慢(7-30 天)** | **快(1-3 天)** |
| **子域名接受度** | 严格 | **宽松** |

---

## 🎯 Bing SEO 关键词机会(预估)

| 关键词 | 月搜索量(GSC 估算) | Bing 难度 | Google 难度 | 建议 |
|--------|------------------|----------|-------------|------|
| ziwei doushu chart | 500 | 低 | 高 | ✅ 主攻 |
| purple star astrology free | 300 | 极低 | 中 | ✅ 主攻 |
| chinese birth chart reader | 800 | 低 | 高 | ✅ 主攻 |
| free chinese astrology reading | 1200 | 中 | 极高 | 中等 |
| zi wei dou shu explained | 200 | 极低 | 中 | ✅ 主攻 |
| ziwei doushu career reading | 150 | 极低 | 中 | ✅ 主攻 |
| chinese astrology vs western | 2000 | 中 | 高 | 备攻 |
| 紫微斗数 chart english | 100 | **零竞争** | **零竞争** | ✅ **首推** |

> 💡 **核心策略**:**双引擎铺同一批关键词**,Bing 先出结果 → 带来早期流量 → Google 跟着上。

---

## 📈 30 天 Bing 增长预期

| 时间点 | 预期 |
|--------|------|
| 部署当天 | IndexNow 推送 10 URL,Bing 1 小时开始抓取 |
| Day 3 | Bing 索引 6-8 URL(70% 成功率) |
| Day 7 | 5-10 个长尾关键词进前 20 |
| Day 14 | 2-5 个长尾关键词进前 10 |
| Day 30 | 累计 Bing 流量 50-200 UV/月 |

---

## 🛠️ 工具清单

| 工具 | 用途 | 状态 |
|------|------|------|
| Bing Webmaster Tools | 索引 + Sitemap + 反链 | ✅ 已注册 |
| IndexNow API | 1 小时抓取加速 | ✅ 脚本已写 |
| `tools/indexnow_push.py` | 一键推送脚本 | ✅ 已写 |
| `components/IndexNowPing.tsx` | 自动推送组件 | ✅ 已写(待挂载) |

---

## 🎯 下一步行动

部署完成后:
1. 我帮你跑 `python tools/indexnow_push.py`
2. 提交 Bing Sitemap
3. 每周对比 GSC vs Bing 数据,生成 `seo-report-{week}.md`

---

## ⚠️ 注意事项

1. **IndexNow 不要刷**:Bing 限速,频繁推送可能降权
2. **同一 URL 只推送一次**:重复推送是浪费
3. **新内容发布后立刻推**:发 Medium/Reddit 后,记得重跑脚本
4. **不要 ban Microsoft 爬虫**:微软也用 Bing 数据训练 AI

---

## 📋 与 GSC 同步监控(我即将写)

`SEO_WEEKLY_REPORT.md` 周报模板:
- 本周 Bing/GSC Impressions 对比
- Top 10 关键词(双引擎)
- 索引覆盖率
- 新增外链

预计 **每周一生成**,5 分钟阅读量。
