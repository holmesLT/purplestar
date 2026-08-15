# Google AdSense 重新申请 / 更新 URL 操作手册

> **域名切换后必须**:AdSense 之前绑定的是 `purplestar.techhouse.ccwu.cc`(子域),现已失效。
> **重新申请**:把网站 URL 改为 `https://purplestar.cc`,AdSense 会重新审核。
> **预计耗时**:5 分钟手动操作 + **24-48 小时审核**。
> **优势**:顶级域名,AdSense 通过率显著提升。

---

## ✅ 前置条件(已完成,不用动)

| 项 | 状态 |
|---|---|
| `https://purplestar.cc/ads.txt` 可访问 | ✅ |
| `https://purplestar.cc/sitemap.xml` 可访问 | ✅ |
| Publisher ID `ca-pub-9378214644556482` | ✅(代码已配) |
| AdSense Auto Ads script 已部署 | ✅ |

**ads.txt 内容**(供你核对):
```
google.com, pub-9378214644556482, DIRECT, f08c47fec0942fa0
```

---

## 📝 操作步骤(2 种情况)

### 情况 A:之前审核通过过的账号(最常见)

1. 打开 https://www.google.com/adsense
2. 登录你的账号
3. 左侧 → **网站**(或 **Sites**)
4. 找到旧的 `purplestar.techhouse.ccwu.cc`,旁边应该有删除按钮 → **删除**
5. 点 **"+ 新增网站"**(或 **Add site**)
6. 输入 `https://purplestar.cc`
7. 点 **添加网站**
8. AdSense 会用 `ads.txt` 自动验证(因为 `https://purplestar.cc/ads.txt` 已部署,内容正确)
9. 验证完成后 → 自动进入审核(24-48 小时)

### 情况 B:之前没通过的账号

1. https://www.google.com/adsense
2. 登录 → 左侧 → **设置** → **账号信息**
3. **网站 URL** 字段改为 `https://purplestar.cc`
4. 保存
5. AdSense 重新进入审核队列

---

## ⏱️ 审核时间线

| 时间 | 状态 |
|------|------|
| T+0 | 完成上面步骤 |
| T+1-24 小时 | AdSense 自动审核(ads.txt 验证 + 域名可用性) |
| T+24-48 小时 | 邮件通知结果(通过 / 仍需改进) |

---

## 🎯 通过的关键要素

AdSense 审核机器人会检查:

1. ✅ **顶级域名** —— `purplestar.cc` 是 TLD,通过率高
2. ✅ **ads.txt 正确** —— 已部署,格式正确
3. ✅ **页面内容充足** —— 你有 8 篇 SEO 长文 + 主页,内容丰富
4. ⚠️ **导航清晰** —— 确保顶部/底部导航都正常工作
5. ⚠️ **联系方式** —— 有些审核员喜欢看到 "Contact us" 或 "About" 页面

---

## 📋 常见的"未通过"原因 + 解决

### "Low content / 无内容"
- 你有 8 篇长文,内容足够,问题不大

### "Navigation issues"
- 你的导航在 `<header>` + `<footer>`,正常

### "Policy violation"
- 算命/占卜类内容**不算违规**,但需要在 "About" 或 footer 加 disclaimer
- 检查你的 footer:看有没有 "For entertainment and cultural exploration purposes only"

### "Domain age / new domain"
- `purplestar.cc` 新注册,可能影响审核速度,但顶级域名比子域好
- 解决:耐心等 1-2 周重新申请

---

## 🔍 如果审核未通过

1. 邮件里会写明原因(分类)
2. 最常见的:域名太新 → 等待 1-2 周后重试
3. 次常见:内容不够 → 加 1-2 篇文章
4. 罕见:政策问题 → 看你 disclaimer 是否到位

---

## 💰 通过后

- 24 小时内 AdSense Auto Ads 自动开始投放
- 第一周:可能每天 0.1-1 美元(新站没流量)
- 第 1-3 个月:GSC 显示搜索流量上升后,每天 0.5-5 美元
- 第 3-6 个月:如果有 1000+ UV/天,每天 5-30 美元

---

## 📞 完成后告诉我

1. AdSense 网站 URL 改完了吗?显示什么状态?
2. 是否收到 "已审核" 邮件?
3. 如果不通过,邮件里说什么原因?

---

## ⏭️ 下一步

- **百度站长平台**(中文流量备用)
- **Yandex Metrica**(俄罗斯流量)
- **继续写 Medium / LinkedIn 长文**(外链建设)
