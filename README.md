# 烽峻提分技巧库

为一位大连初三学生在 2026 年中考前定做的实战提分技巧库。
围绕 6 科分科技巧，每个技巧含真题溯源、训练题、卡点应对、教练提示。

## 快速开始

```bash
# 1. 装依赖
npm install

# 2. 配置 DeepSeek（提分教练用）
cp .env.example .env.local
# 把 DEEPSEEK_API_KEY 改成你自己的

# 3. 跑起来（默认端口 6601）
npm run dev
```

打开 http://localhost:6601 即可。

升学报告入口：http://localhost:6601/zhongkao-32-report

## 功能

- 首页 Dashboard：倒计时 / 目标 410 / 6 科现在→保守→乐观分数表 / 分科技巧入口
- 3+2 升学报考规划报告：`/zhongkao-32-report`
- 6 科分科技巧库（化学 / 道法历史 / 英语 / 语文 / 数学 / 物理）：每科 11-13 个技巧
- 每个技巧含：标题 + 考点 + 真题溯源 + 适用学生 + 步骤 + 例题 + ≥10 道训练题 + 掌握测试 + 卡点应对 + 教练提示
- 训练题分 3 类源：real（真题，含年份/卷别/题号）、adapted（改编自真题）、predicted（押题，明标"非真题"）
- DeepSeek 提分教练：抽屉式聊天，铁律是不直接给答案，永远先反问一步
- 进度：每科技巧掌握情况，状态管理（未开始 / 入门 / 已掌握）
- PWA：可"添加到主屏幕"

## 数据存储

- 全部数据在浏览器本地（`localStorage`）。换设备时用进度页的"导出 JSON"备份。
- 教练 API key 只在后端环境变量，前端不会暴露。

## 关键文件

```
app/
  page.tsx                              首页
  subjects/page.tsx                     学科列表
  subjects/[subject]/page.tsx           分科页
  techniques/[id]/page.tsx              单个技巧页
  progress/page.tsx                     进度
  api/coach/chat/route.ts               DeepSeek 代理（SSE 流式）
components/                             UI 组件
data/
  subjects.ts                           6 科口径
  techniques/                           6 个学科 ts 文件
store/                                  Zustand store + localStorage 持久化
lib/                                    类型 + 工具
```

## 修改内容

- 技巧库：编辑 `data/techniques/<subject>.ts`
- 学科口径 / 文案：编辑 `data/subjects.ts`
- 教练系统 prompt / 防作弊：编辑 `app/api/coach/chat/route.ts`
- 颜色 / 字体：编辑 `tailwind.config.ts`

## 部署

- 默认端口 6601
- 服务器部署：

```bash
npm install
npm run build
npm run start          # 启动到 6601
```

- 或用 PM2 守护：

```bash
pm2 start npm --name "fengjun-tips" -- run start
pm2 save
```

- 环境变量 `DEEPSEEK_API_KEY`、`DEEPSEEK_BASE_URL`、`DEEPSEEK_MODEL` 写在 `.env.local` 或服务器环境里。
