# PurpleStar 紫宸阁 — 紫微斗数英文站

> **当前状态：Cloudflare 全家桶架构，代码完成待部署**

## ✅ 已完成

| 模块 | 文件 | 说明 |
|------|------|------|
| 落地页 | `app/page.tsx` | Hero + 表单 + 三步流程 |
| 排盘引擎 | `lib/ziwei.ts` | 客户端 iztro 集成 |
| 命盘可视化 | `components/ChartGrid.tsx` | 4×4 方格 + 14主星 + 12宫位 |
| 命盘详情 | `app/chart/[id]/page.tsx` | 12宫位详情 + 付费墙 |
| AI 报告页 | `app/report/page.tsx` | 流式 markdown 报告 |
| Workers API | `../purplestar-api/src/index.ts` | chart/checkout/interpret/webhook |
| D1 Schema | `../purplestar-api/schema.sql` | charts/orders/readings 表 |
| 部署文档 | `../DEPLOY_CLOUDFLARE.md` | 完整 Cloudflare 部署指南 |

## ⏳ 待部署

需要的账号/资源：
- [ ] Cloudflare 账号（已有，管 techweek）
- [ ] Anthropic API Key
- [ ] Stripe 账号（Test 或 Live）
- [ ] GitHub 仓库（推代码用）

部署步骤在 `../DEPLOY_CLOUDFLARE.md`。

## 💰 成本

**$0 固定成本**，$3/1000 次 AI 解读可变成本。Stripe 收 2.9% + $0.3。
