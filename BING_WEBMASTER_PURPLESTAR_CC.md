# Bing Webmaster Tools 接入 purplestar.cc 操作手册

> **域名切换后必做**:旧的 `purplestar.techhouse.ccwu.cc` 不再维护,新顶级域名 `https://purplestar.cc` 必须在 Bing Webmaster 重新注册。
> **预计耗时**:5-10 分钟。**预计生效**:IndexNow 推送后 1 小时,Bing 审核后 1-3 天。

---

## ✅ 前置条件(已完成,不用动)

| 项 | 状态 |
|---|---|
| `https://purplestar.cc/BingSiteAuth.xml` 可访问 | ✅ 部署成功 |
| `https://purplestar.cc/sitemap.xml` 可访问 | ✅ |
| `https://purplestar.cc/{IndexNow-key}.txt` 可访问 | ✅ |
| IndexNow key 已配脚本(HOST=purplestar.cc) | ✅ |

**BingSiteAuth.xml 内容**(供你核对):
```xml
<users><user>EA4AEB907241507BA48762B36249A64C</user></users>
```

**IndexNow key**:`5a6d3b2fd71e485397beb74b986adccc`

---

## 📝 操作步骤(UI 手动)

### Step 1:添加新站点(2 分钟)

1. 打开 https://www.bing.com/webmasters
2. 用之前的 Microsoft/Gmail 账号登录
3. 右上角 **"+ Add a site"**
4. 输入 `https://purplestar.cc`(注意带 `https://`)
5. 点 **Add**
6. Bing 会列三种验证方式(选 **XML file**)

### Step 2:验证方式(三种,选一种)

> ⚠️ **重要**:Cloudflare 默认 Bot Fight Mode 可能拦截 Bing 验证爬虫 → 报 "Body tag not found"。
> **推荐:CNAME DNS 验证**,完全绕开 HTML 抓取。

#### 方式 A:CNAME DNS 验证 ⭐ 推荐

1. 在 Bing Webmaster 添加站点页面,点开 **"Add CNAME record to DNS"**
2. Bing 会给你一条 CNAME 记录,格式:
   ```
   Name:  <随机字符串>.purplestar.cc
   Value: verify.bing.com
   ```
3. 把这条 CNAME 加到 Cloudflare:
   - 打开 https://dash.cloudflare.com → 选 `purplestar.cc` zone
   - DNS → Records → Add record
   - Type: **CNAME**
   - Name: **Bing 给的随机字符串**(可能不需要带 `.purplestar.cc`,Cloudflare 会自动加)
   - Target: **verify.bing.com**
   - Proxy status: **DNS only**(灰色云朵,关键!)
4. 回到 Bing 点 **Verify** → 通过

#### 方式 B:HTML Meta Tag 验证(已部署但 Bing 抓不到)

如果 meta tag 已部署但 Bing 报 "Body tag not found",这是 Cloudflare Bot 拦截问题。

**解决方案**:
1. Cloudflare → Security → Bots → **Bot Fight Mode** 关掉
2. 等 30 秒生效
3. 回到 Bing 点 **Try Again**

> ⚠️ 关掉 Bot Fight Mode 会降低 Cloudflare 安全防护,但对紫微斗数这种小站点影响不大。

#### 方式 C:XML 文件验证

`https://purplestar.cc/BingSiteAuth.xml` 已部署,但 Cloudflare 也可能拦截 Bing 爬虫。和方式 B 同样解法。

### Step 3:提交 Sitemap(1 分钟)

1. 左侧菜单 → **Sitemaps**
2. 点 **Submit Sitemap**
3. 输入:`https://purplestar.cc/sitemap.xml`
4. 点 **Submit**
5. 几秒后看到 `Submitted` + URL count(应该是 10)

### Step 4:URL Inspection(批量提交 10 URL)(3 分钟)

1. 左侧菜单 → **URL Inspection**
2. 逐个粘贴下面 10 个 URL,每次按 Enter:

```
https://purplestar.cc/
https://purplestar.cc/learn/
https://purplestar.cc/learn/ziwei-doushu-vs-bazi/
https://purplestar.cc/learn/how-to-read-purple-star-astrology-chart/
https://purplestar.cc/learn/ziwei-doushu-12-palaces-explained/
https://purplestar.cc/learn/ziwei-doushu-14-main-stars/
https://purplestar.cc/learn/ziwei-doushu-career-wealth-palace/
https://purplestar.cc/learn/ziwei-doushu-vs-western-astrology/
https://purplestar.cc/learn/is-ziwei-doushu-accurate/
https://purplestar.cc/learn/ziwei-doushu-four-transformations-sihua/
```

每次都点 **Request Indexing**。

> 💡 **IndexNow 已经推过这 10 个 URL,Bing 1 小时内会自己来抓**。所以这一步是锦上添花,不是必须。

### Step 5:禁用旧站点(1 分钟)

1. Bing Webmaster 主页 → 切到旧站点 `purplestar.techhouse.ccwu.cc`
2. 右上角齿轮 → **Settings** → **Verify ownership** 下拉到最下
3. 看到 **Remove site from Bing Webmaster** → 点确认
4. 提示:Bing 不会立即删除数据,只是停止抓取

---

## 🔍 验证清单

完成后,**2-3 小时后**回 Bing 看:

| 检查项 | 期望 |
|--------|------|
| Sitemaps | 状态 "Success" + 10 URLs discovered |
| URL Inspection | 至少 5-6 个显示 "Indexed" |
| Site Explorer → Pages | 列表中出现 8 个 /learn/ URL |
| Performance → Search Keywords | 0 数据(正常,要 3-7 天才有搜索词) |
| IndexNow 工具 | 显示 "10 URLs submitted on {date}" |

---

## 🚨 常见坑

### "Verification failed"
- 检查 Bing 能不能访问 `https://purplestar.cc/BingSiteAuth.xml`
- 直接浏览器访问验证 —— 内容应是 `<users><user>EA4AEB907241507BA48762B36249A64C</user></users>`

### "Sitemap 提交了但 0 URLs discovered"
- 等 10 分钟,Bing 抓取有延迟
- 检查 `https://purplestar.cc/sitemap.xml` 内容是否包含 `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

### "Bing 拒绝了某些 URL"
- 正常,Bing 会过滤掉 low-quality 页面
- 不需要修,Bing 30 天后还会重试

---

## 📊 与 Google Search Console 同步

| 任务 | Bing | GSC |
|------|------|-----|
| 添加站点 | ✅ 上面完成 | ⏳ 待做(用 `purplestar.cc` 验证) |
| 提交 sitemap | ✅ 上面完成 | ⏳ 待做 |
| URL Inspection | ✅ 上面完成 | (GSC 用 IndexNow 等同) |

---

## 🎯 完成时间线

| 时间 | 事件 |
|------|------|
| T+0 | 完成上面 5 步 |
| T+1h | IndexNow 推送的 URL 已被 Bing 抓取 |
| T+1-3 天 | Sitemap 完全被 Bing 处理 |
| T+3-7 天 | 出现第一批 Bing 索引 URL |
| T+7-14 天 | 出现第一批 Bing 搜索词数据 |

---

## 🔄 IndexNow 再推送(可选)

如果 Bing Webmaster Tools 进度太慢,可以重新跑 IndexNow 推送(最多每天 1 次):

```bash
cd /sessions/wizardly-exciting-tesla/mnt/AI/purplestar
python3 tools/indexnow_push.py
```

**注意**:同一 URL 重复推送是浪费,只在 Bing 没响应时再推。

---

## 📞 完成后告诉我

做完 Step 1-5 后,告诉我:
1. Bing Webmaster 是否成功添加 `purplestar.cc`(看到 ✅ Verified?)
2. Sitemap 显示几 URLs discovered(应该是 10)
3. 旧的 `purplestar.techhouse.ccwu.cc` 是否还显示在 Bing 站点列表里

下一步:Google Search Console 加 `purplestar.cc`(相似流程,5 分钟)。
