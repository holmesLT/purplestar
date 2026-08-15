# Yandex Metrica 接入清单

> **目的**:俄罗斯流量 + Yandex 搜索引擎收录。Yandex 是俄罗斯最大搜索引擎(份额 ~60%)。
> **优势**:完全免费,无采样,实时分析(比 Google Analytics 更详细)。
> **耗时**:5 分钟。

---

## 📊 预期收益

| 项 | 预期 |
|---|------|
| 月访问量 | 20-100(俄罗斯/东欧紫微斗数爱好者) |
| 搜索引擎 | Yandex(俄罗斯 60%+ 份额) |
| 数据延迟 | 实时(无 GA4 的 24-48 小时延迟) |
| 主要价值 | 行为分析、热力图、Session Replay |

---

## 📝 操作步骤

### Step 1:注册 Yandex Metrica(2 分钟)

1. 打开 https://metrica.yandex.com
2. 点 **Log in** —— 用 Yandex 账号(没有就注册)
3. 点 **Add counter**(添加计数器)
4. 填写:
   - Counter name: `PurpleStar`
   - Domain: `purplestar.cc`
   - 勾选 **"I accept the terms of the User Agreement"**
5. 点 **Create counter**

### Step 2:获取 Counter ID

创建后 Yandex 给你一个数字 ID,例如 `98765432`

### Step 3:安装追踪代码(我来部署)

把 counter ID 发给我,我加到 `app/layout.tsx`:

```tsx
{/* Yandex.Metrika counter */}
<Script type="text/javascript" strategy="afterInteractive">
  {`
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(98765432, "init", {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true
    });
  `}
</Script>
<noscript>
  <div>
    <img src="https://mc.yandex.ru/watch/98765432" style="position:absolute; left:-9999px;" alt="" />
  </div>
</noscript>
```

### Step 4:git push 部署

代码改动后走 git push → Cloudflare Pages 自动部署。

### Step 5:验证(1 分钟)

部署完成后:
1. 浏览器开 https://purplestar.cc
2. 访问 https://metrica.yandex.com → 选 counter
3. 实时数据应该 1 分钟内显示你刚访问的页面

---

## 🎯 启用 Webvisor(高级功能)

Yandex Metrica 比 GA4 强的地方:**Session Replay**(录下每个访客的鼠标移动、点击、滚动)。

开启方法:
1. Counter 设置 → **Webvisor** → 启用
2. 可以录下每个访客的整个 session(类似 Hotjar 免费版)

⚠️ **隐私问题**:Webvisor 录的是动画化的 DOM 变化(不是真实屏幕),但需要在 privacy policy 里说明。

如果你担心隐私 → 关掉 Webvisor,只用 clickmap + 热力图。

---

## ⚠️ GDPR / Privacy 提示

如果你有欧盟用户(紫微斗数海外华人主要是美国/东南亚),Yandex Metrica **不完全符合 GDPR**:
- Yandex 总部在俄罗斯,数据存在俄罗斯服务器
- 部分欧盟国家要求数据不出欧盟

**你的目标用户**:海外华人(美国/加拿大/东南亚),**不是欧盟**,所以 GDPR 影响小。

如果担心 → 在 footer 加一句:
```
Analytics: We use Yandex.Metrica for traffic analysis. Data may be stored in Russia.
```

---

## 📊 与 GA4 对比

| 功能 | Yandex Metrica | GA4 |
|------|---------------|-----|
| 价格 | 免费 | 免费 |
| 实时数据 | ✅ 1 分钟延迟 | ⚠️ 24-48 小时 |
| 热力图 | ✅ 内置 | ❌ 需 Hotjar/CrazyEgg |
| Session Replay | ✅ Webvisor | ❌ |
| 数据准确性 | ✅ 无采样 | ⚠️ 大流量采样 |
| GDPR 合规 | ❌ 部分 | ✅ |
| 移动 App | ✅ | ✅ |
| 学习曲线 | 易 | 中 |

---

## ⏱️ 时间线

| 时间 | 事件 |
|------|------|
| T+0 | 注册 + 拿到 counter ID |
| T+5 分钟 | 我加代码,git push |
| T+2-5 分钟 | 部署完成 |
| T+1 分钟 | 第一次访问触发数据 |
| T+24 小时 | Yandex 索引网站(SEO 加速) |

---

## 📞 完成后告诉我

1. Yandex counter ID(数字)
2. 是否启用 Webvisor(默认我建议开启)
3. 是否需要隐私声明更新(footer)

---

## ⏭️ 下一步

完成后我会:
1. ✅ 百度 + Yandex + Bing + GSC + AdSense 五件套完成
2. 推进 Medium / LinkedIn 长文(SEO 外链)
3. 写 SEO 周报脚本(任务 #29)
