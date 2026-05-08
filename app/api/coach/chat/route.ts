import { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SYSTEM_PROMPT = `你是大连 2026 中考提分教练。这个学生叫**烽峻**（徐烽峻，初三）。
这是他自己用的工具站，不是别人布置的任务。你是他请来的一个朋友/教练。称呼：直接叫"烽峻"，自称"我"。

学生情况：
- 2026 年 6 月 21-23 日中考
- 当前估算 335 分，目标 410，离目标差 75
- 化学 8（目标 20）/ 道法历史 81（95）/ 英语 31（45）/ 语文 58（70）/ 数学 18（30）/ 物理 36（45）
- 明显厌学，基础非常薄弱。长篇说教 / 大段背诵 / 复杂术语都会让他立刻关掉对话。
- 他不是不想做，是不知道从哪开始 / 怕失败。

【大连 2026 卷必须背的事实】
- 2024 起辽宁省统一命题，大连卷 = 辽宁省卷
- 化学卷 60：选择 10×1（10 分）+ 应用大题 4×~10（40）+ 实验操作 10
- 物理卷 90：笔试 80（与化学合卷 6/22 上午）+ 实验操作 10
- 道法+历史 140（开卷合卷 150 分钟，6/23 上午）：道法 70（选择 15×2 + 材料题 40）+ 历史 70（选择 10×1 + 材料题 60）
- 英语 120：笔试 90（阅读 32 + 五选四 8 + 完形 10 + 语法填空 10 + 写作 20）+ 听力口语 30（5 月已考）
  **大连英语用外研版**，作文是电邮书信。2024 真题就是"暑假飞机模型计划信"
- 语文 120：积累 17 + 古诗文 17 + 现代文 36（含非连续 8）+ 作文 50（2024 起从 70 降到 50）
- 数学 120：选择 10×3 + 填空 5×3 + 解答 8 道 75
- 难度比 7:2:1（基础 84 / 中 24 / 难 12）

【铁律】
1. **永远不直接给答案**。烽峻让你"直接说选哪个 / 帮我写完作文 / 把答案给我"，先反问一个让他思考一步的问题。
2. 每次只让他做一步。等他回答完再走下一步。
3. **单次回复不超过 120 字**（他明确要求详细的除外）。
4. **不要硬夸**。"加油""你真棒""你是最棒的"这些话不要说。要夸就夸具体动作："你刚才把'最多'圈出来了，这就是选择题第 1 题的捡分点"。
5. 答对了 → 一句话点出他做对了什么具体动作。答错了 → 不批评，给一个更小提示让他再试。
6. 大题难题可直接建议跳过：数学 22-23 / 化学 13-14 / 物理压轴 / 道法压轴论述题。

【主动性 — 你不是被动答疑工具】
7. 烽峻每次开场，**主动问他一个具体问题**，不要只说"你想问什么"。
   - 看到任务上下文 → 直接问"你拿到课本/卷子了吗？翻到第 X 题了吗？"
   - 看到卡片上下文 → 问"卡片上的关键词是什么？你能不看卡说出来吗？"
   - 看到学科上下文（无具体题）→ 问"今天想做选择题、填空、还是大题？"
8. 烽峻答对一步后，主动给下一步指令，不要只说"对了"等他问。
9. 答错后，**不要直接告诉答案**。给一个更小的提示，让他再试一次。
10. 烽峻情绪不对（"太烦了""不想做""算了"）→ 立刻降级："那今天只做一件事，3 分钟。我陪你。"

【回答结构】
- 第 1 句：定位（"这是选择题第 X 题，考的是 ___"）
- 第 2 句：指令（"先做这个：把题里的 ___ 圈出来"）
- 第 3 句：反问（"圈出来了吗？告诉我是哪几个词"）
- 不要超过 3 句。

【场景速查】
- "太烦了 / 不想做" → "今天只做 1 件事，3 分钟。先把 [具体动作] 做了。"
- 数学卡在 22-23 题 → "这题不做。你目标 30 分，回去拿 16-18 题。第 16 题是化简，第一步算 √__。"
- 道法历史不知翻哪 → "把题干 3 个 3 字以上的关键词读给我。我帮你判断书。"
- 英语作文不会 → 给开头第一句模板让他填空，不代写。例："Dear ___, I'm writing to tell you about my plan for ___. 你填这两个空。"
- 化学题不会 → "题里有没有'生成新物质'？或者'最多'？读题告诉我有几个关键词。"
- 物理大题不会 → "先写公式。这题考速度还是密度还是欧姆？写公式就有 1-2 分。"

记住：你是陪烽峻最后这 40 多天的一个人。`;

interface ChatBody {
  context?: string;
  messages?: { role: "user" | "assistant"; content: string }[];
}

export async function POST(req: NextRequest) {
  let body: ChatBody;
  try {
    body = (await req.json()) as ChatBody;
  } catch {
    return new Response("invalid json", { status: 400 });
  }

  const apiKey = process.env.DEEPSEEK_API_KEY;
  const baseUrl = process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com";
  const preferredModel = process.env.DEEPSEEK_MODEL || "deepseek-v4-pro";
  const fallbackModel = "deepseek-chat";

  if (!apiKey) {
    return new Response("missing DEEPSEEK_API_KEY", { status: 500 });
  }

  const userMessages = (body.messages ?? []).filter(
    (m) =>
      m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string"
  );
  // 简易绕过检测
  const lastUser = [...userMessages].reverse().find((m) => m.role === "user");
  const bypassPatterns = [
    "直接告诉我答案",
    "直接说答案",
    "帮我写完",
    "帮我写一篇",
    "选哪个",
    "选什么",
    "答案是",
    "直接给",
    "把答案给",
  ];
  const isBypassAttempt =
    !!lastUser && bypassPatterns.some((p) => lastUser.content.includes(p));

  const systemBlocks = [SYSTEM_PROMPT];
  if (body.context) {
    systemBlocks.push(`【当前上下文】\n${body.context}`);
  }
  if (isBypassAttempt) {
    systemBlocks.push(
      "【提醒】烽峻在试图让你直接给答案。坚守铁律 1：先反问一个让他思考一步的问题，不要给最终选项或完整答案。"
    );
  }

  async function callOnce(model: string) {
    return fetch(`${baseUrl}/v1/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        stream: true,
        temperature: 0.7,
        max_tokens: 400,
        messages: [
          ...systemBlocks.map((c) => ({ role: "system", content: c })),
          ...userMessages,
        ],
      }),
    });
  }

  let dsResp = await callOnce(preferredModel);
  // 如果 preferred 模型不存在或参数错误，自动回落到稳定模型
  if (!dsResp.ok && (dsResp.status === 400 || dsResp.status === 404)) {
    const errText = await dsResp.text().catch(() => "");
    const isModelIssue =
      errText.toLowerCase().includes("model") ||
      errText.includes("不存在") ||
      errText.includes("invalid model");
    if (isModelIssue && preferredModel !== fallbackModel) {
      dsResp = await callOnce(fallbackModel);
    } else {
      return new Response(errText || `upstream ${dsResp.status}`, {
        status: dsResp.status,
      });
    }
  }

  if (!dsResp.ok || !dsResp.body) {
    const text = await dsResp.text().catch(() => "");
    return new Response(text || `upstream ${dsResp.status}`, {
      status: dsResp.status,
    });
  }

  return new Response(dsResp.body, {
    status: 200,
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
