# 百度站长平台(Zhanzhang)接入清单

> **目的**:百度搜索中文流量备用入口。英文紫微斗数市场百度份额小(可能 1-2%),
> 但有备无患,挂了之后**百度收录**会带来一部分海外华裔搜索流量。

---

## 📊 预期收益

| 项 | 预期 |
|---|------|
| 月搜索量 | 50-500(海外华人 / 中文学习者) |
| 收录时间 | 7-14 天 |
| 流量贡献 | < 5%(主体英文流量还是 Google/Bing) |

**结论**:**必须做,但优先级低**。15 分钟搞定就放着。

---

## 📝 操作步骤

### Step 1:注册百度站长平台(2 分钟)

1. 打开 https://ziyuan.baidu.com
2. 点 **登录**(用百度账号,没有就注册一个)
3. 登录后 → **站点管理** → **添加网站**
4. 输入 `https://purplestar.cc`
5. 选 **站点属性**:实际看你定位,建议选 "其他" 或 "文化娱乐"
6. 点 **下一步**

### Step 2:验证网站(3 种方式)

百度提供 3 种,推荐 **HTML tag**(跟 GSC 一样):

1. 选 **HTML meta 标签** 验证
2. 你会看到:
   ```html
   <meta name="baidu-site-verification" content="XXXX" />
   ```
3. 把 `content` 那串发给我
4. 我加到 `app/layout.tsx`(Bing、GSC 都加过,再加一行百度)
5. git push 部署
6. 回百度点 **完成验证**

或者选 **CNAME 验证**:
1. 百度给一条 CNAME 记录
2. 加到 Cloudflare DNS

### Step 3:提交 Sitemap(1 分钟)

1. 百度后台 → **链接提交** → **sitemap**
2. 输入:`https://purplestar.cc/sitemap.xml`
3. 点 **提交**

> 百度只接受 xml 格式,你的 sitemap 完全符合。

### Step 4:链接提交 - 自动推送(2 分钟)

百度还支持**主动推送**:每次发新内容,主动告诉百度。

1. 百度后台 → **链接提交** → **自动推送** → **添加站点**
2. 复制百度给你的推送 token URL,格式:
   ```
   http://data.zz.baidu.com/urls?site=https://purplestar.cc&token=XXXX
   ```
3. 发给我
4. 我帮你建一个 serverless 推送 endpoint(每次有 chart 生成就推百度)

### Step 5:提交 robots(可选)

百度后台 → **Robots** → 检查你的 robots.txt 是否合规(应该会自动检测到)

---

## ⏱️ 时间线

| 时间 | 事件 |
|------|------|
| T+0 | 完成上面步骤 |
| T+1-3 天 | 百度第一次抓取 |
| T+7-14 天 | 收录 5-10 个 URL |
| T+30 天 | 索引稳定 |

---

## ⚠️ 注意事项

### 百度不喜欢 JS
- 百度爬虫对 JS 渲染支持很差
- 你的 Next.js 是 SSR 输出 HTML(Next.js 静态导出),**这个问题不大**
- 验证方法:`view-source:https://purplestar.cc` 看 HTML 内容是否完整

### 备案要求
- 百度站长平台不强制要 ICP 备案(其他平台如微信小程序要)
- 顶级域名 `.cc` 海外站点 OK

### 链接提交额度
- 普通账号每天 1000 个 URL 主动推送额度
- 紫微斗数站一天也写不了 1000 篇,**够用**

---

## 🎯 完成后收益

- 中文搜索:`site:purplestar.cc` 在 baidu.com 搜得到
- 偶尔中文用户搜"紫微斗数"看到你的英文站
- 长尾:海外华人(美国/加拿大)用百度搜索

---

## 📞 完成后告诉我

- HTML tag 的 content 字符串(如果选 HTML tag)
- 自动推送的 token URL(如果启用)
- 是否验证通过

---

## ⏭️ 完成后下一步

Yandex Metrica(俄罗斯流量)
