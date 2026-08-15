# Google Search Console 接入 purplestar.cc 操作手册

> **域名切换后必做**:GSC 是英文 SEO 数据最权威来源,**AdSense 也要用 GSC 验证域名**。
> **预计耗时**:8-12 分钟。**预计生效**:验证立即,sitemap 提交后 1-3 天开始有数据。

---

## ✅ 前置条件(已完成)

| 项 | 状态 |
|---|---|
| `https://purplestar.cc` 可访问 | ✅ |
| `https://purplestar.cc/sitemap.xml` 可访问 | ✅ |
| Cloudflare DNS 可访问 | ✅ |

---

## 📝 操作步骤

### Step 1:添加新 property(2 分钟)

1. 打开 https://search.google.com/search-console
2. 用 Google 账号登录(AdSense 同一个账号)
3. 左上角 property 切换器 → **"+ Add property"**
4. 选 **URL prefix** 类型
5. 输入:`https://purplestar.cc`
6. 点 **Continue**

### Step 2:验证方式(选 **HTML tag** —— 最快)

GSC 提供多种验证方式,推荐 HTML tag:

1. 选 **HTML tag** 选项卡
2. 你会看到一段:
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXXXXXXXXXXXX" />
   ```
3. 把 `content` 那一长串字符发给我(例如 `abcdEFG1234567890_-xyz`)

我会帮你:
- 加到 `app/layout.tsx` 的 `<head>` 里(跟 Bing meta tag 一起)
- 部署
- 让你回 GSC 点 Verify → 通过

> 为什么不用 DNS TXT:虽然稳,但需要加 DNS 记录,5-10 分钟生效。HTML tag 改代码就行,2 分钟部署。

### Step 3:提交 Sitemap(1 分钟)

验证通过后:
1. 左侧菜单 → **Sitemaps**
2. 在 "Add a new sitemap" 输入框填 `sitemap.xml`
3. 点 **Submit**
4. 立即看到 "Success" + "Discovered pages" 开始计数

> ⚠️ 不需要加 `https://purplestar.cc/sitemap.xml` —— GSC 自动加站点 URL 前缀。

### Step 4:URL Inspection(1 分钟)

1. 左侧 → **URL Inspection**
2. 顶部输入 `https://purplestar.cc/`
3. 点 **Request Indexing**
4. 等 30 秒 → 看到 "Indexing requested"
5. 重复粘贴另外 9 个 /learn URL

### Step 5:关联 AdSense(1 分钟)

1. AdSense 后台 → https://www.google.com/adsense
2. 左侧 → **Settings** → **Account information**
3. 把网站 URL 改成 `https://purplestar.cc`
4. AdSense 会通过 `ads.txt` 自动验证(`https://purplestar.cc/ads.txt` 已部署)

---

## ⏱️ 完成后时间线

| 时间 | 事件 |
|------|------|
| T+0 | 完成上面 5 步 |
| T+1-3 天 | GSC 第一次抓取 + 索引 |
| T+3-7 天 | 出现第一批搜索词数据 |
| T+7-14 天 | 索引覆盖率稳定 |
| T+14-30 天 | AdSense 审核通过,开始有广告收入 |

---

## 🔍 验证清单

| 检查项 | 期望 |
|--------|------|
| Property 列表 | 看到 `https://purplestar.cc`,状态 "Verified" |
| Sitemaps | 显示 sitemap,Discovered pages > 0 |
| URL Inspection | 至少 5 个 URL 显示 "Indexed" |
| Coverage | 24-48 小时后显示 Valid / Excluded |

---

## ⚠️ 常见坑

### "Verification failed"
- HTML tag 加错地方?必须 `<head>` 里,不在 `<body>` 里
- Cloudflare 缓存?清 Cloudflare Cache 后等 2 分钟

### "Couldn't fetch sitemap"
- 直接访问 `https://purplestar.cc/sitemap.xml`,看到内容
- 不是 GSC 报错,是 Cloudflare 抓取问题 —— 等 5 分钟重试

### "Discovered pages = 0"
- 正常,Google 还在抓取,要 24-48 小时才有数据
- URL Inspection 手动提交可以加速

---

## 📞 完成后告诉我

做完 Step 1-5 后,告诉我:
1. GSC property 是否 Verified
2. Sitemap 显示几个 Discovered pages
3. AdSense 网站 URL 改完是否审核通过

---

## ⏭️ 完成后下一步

- 注册 **百度站长平台**(针对中文流量,虽然英文为主,但有备无患)
- Yandex Metrica(俄罗斯流量)
- 监控 GSC Performance 数据(7 天后看趋势)
