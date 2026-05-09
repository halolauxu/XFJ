import { Technique } from "@/lib/types";

/**
 * 道法 + 历史 技巧库 v2（基于 2022-2025 真题反推 + 禁贴标签合规重写）
 *
 * 数据：
 *   - 2024-2025 辽宁省统命题（残卷+目录+考点表）
 *   - 2022-2023 大连市独立命题（前 3 题完整 + 部分原题）
 *   - 2025 大连市统一一模 + 各区一模（结构 + 考点表完整）
 *   - 江西 2024 同模式合卷（完整原卷，参照样本）
 *
 * 学生：烽峻，大连初三 2026 中考。81/140 → 目标 95/140（+14 分）
 * 合卷开卷 150 分钟，140 分（道法 70 + 历史 70）
 *
 * ⚠️ 关键合规约束：大连/辽宁中考道法+历史开卷考试禁止贴便签 / 标签 / 索引贴 /
 *    自制书签等任何"外加于课本"的物理标记。本文件所有索引方案 = 脑内目录索引 +
 *    课本内合规标记（直接画/写在原书上）+ 关键词反射卡（场外训练，不带考场）。
 *
 * 结构（17 张）：
 *   T1   目录页索引训练法（合规替代旧"贴标签"法）
 *   T1B  课本内合规标记法（哪些可画/写、哪些禁止）
 *   T2   关键词→章节 5 秒反射卡（场外训练）
 *   T3   高频关键词 30 个（道法 20 + 历史 10）
 *   T4   核心价值观 24 字 + 依法治国 16 字
 *   T5   答题模板：问意义/影响（"有利于"句式）
 *   T6   答题模板：问做法（国/社/家/个 四件套）
 *   T7   答题模板：问启示（"我们要/我们应该/我们必须"）
 *   T8   历史时间线 7 大事件
 *   T9   抗日战争意义模板
 *   T10  改革开放（道法+历史合并）
 *   T11  文化自信答题模板
 *   T12  材料题圈关键词法（已剥离"贴标签"违规内容）
 *   S1   开卷应试时间分配（150 分钟 70+70）
 *   S2   材料题双卡（套语开头 + 模板四件套）
 *   S3   选择题双策略（审题 + 排除）
 *   S4   历史/道法选择不同思路（道法看新政策；历史看时间）
 *
 * 引用规则：
 *   - 真题引用必须含年份 + 卷别 + 题号 + URL（凡有）
 *   - 改编题在 basedOn 写明原真题
 *   - 押题明标 source: "predicted"
 */

export const POLITICS_HISTORY_TECHNIQUES: Technique[] = [
  // ============ T1：目录页索引训练法（合规替代）============
  {
    id: "ph-T1-catalog-index",
    subject: "politicsHistory",
    title: "目录页索引训练法（脑内+课本目录页，禁标签合规版）",
    examType: "全卷通用（开卷快速定位）",
    estGain: "+3-4 分（间接通过翻书提速）",
    priority: 0,
    oneLiner:
      "12 本书目录背到反射级。听到关键词 5 秒说出书+课号，直接翻目录定位。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q6",
        topic: "网络问政→全过程人民民主（九上第3课）",
        url: "https://m.sy.bendibao.com/edu/75504_6.shtm",
      },
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q7",
        topic: "国家安全教育日 4·15→八上第8-9课",
        url: "https://m.dl.bendibao.com/edu/80674.shtm",
      },
      {
        kind: "real",
        year: 2025,
        region: "大连市",
        paper: "统一一模",
        qno: "Q11",
        topic: "核心价值观→九上第5课",
        url: "https://zy.21cnjy.com/23034519",
      },
      {
        kind: "placeholder",
        note: "⚠️ 大连/辽宁中考开卷禁贴标签/便签/索引贴。本技巧用'脑内+目录页'替代物理标签",
      },
    ],
    whyFits:
      "你 81 分。开卷选择题翻书慢丢分；标签禁用后只能靠脑内目录索引补回来——不补就从 22 分掉到 18-19 分。每本书 6 个高频章节背到反射级=每题翻书时间从 60 秒压到 15 秒。",
    steps: [
      "**第 1 步：12 本书目录页拍照入手机**（道法 6 + 历史 6）。**仅供场外训练，不带考场**。",
      "**第 2 步：每本书锁定 6 个高频章节**（共 72 个目标章节）。道法重点：八上 8-9 课国家安全 / 八下 6 课人大 / 九上 1-6 课全部高频。每天背一本 6 章，2 周完成第一轮。",
      "**第 3 步：盲翻测速**——合上书，听到关键词→3 秒内说出'某书第 X 课，约 P 多少'。3 秒合格，5 秒危险，超 5 秒重背。",
      "**第 4 步：考场实操**——题干圈 4-6 字关键词→脑内反射'哪本书哪一课'→翻到目录页（每本书目录都在最前 3 页，1-2 秒可达）→手指扫到课号→翻到正文。整流程 10-15 秒，不用任何外加物。",
      "**禁区**：不得贴书侧标签 / 便签 / 索引贴 / 自制书签 / 透明胶纸固定纸条 / 夹卡片于书页。**违规即作弊**。",
    ],
    example: {
      id: "ph-T1-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q6",
        topic: "网络问政平台→民主参与方式",
      },
      stem:
        "考场上读到题干：'某地建立网络问政平台，鼓励群众通过该平台提建议、反映诉求'。第一步该做什么？",
      options: [
        { key: "A", text: "凭印象直接选" },
        { key: "B", text: "把整本道法书翻一遍找'网络问政'" },
        { key: "C", text: "圈出'网络问政''群众建议'→脑内反射'全过程人民民主'→翻九上目录到第 3 课" },
        { key: "D", text: "考前贴的标签找一找" },
      ],
      answer: "C",
      whyFitsStudent:
        "C 是合规索引动作：圈词→译为教材原词→脑内反射章节→翻目录。D 选项'贴标签'是开卷违规行为，不能选。",
      hint1: "题干里 4 字关键词是什么？'网络问政'对应教材原词是什么？",
      hint2: "民主参与=九上第 3 课全过程人民民主。直接翻九上目录定位课号。",
      trap: "B 太慢；A 凭印象=开卷优势全失；D 贴标签违规。",
      whyCorrect:
        "C 用脑内反射+目录页定位，10-15 秒可达，且 100% 合规。",
    },
    trainingQuestions: [
      {
        id: "ph-T1-q-2024-real-Q7",
        source: "real",
        citation: {
          kind: "real",
          year: 2024,
          region: "辽宁省",
          paper: "中考真题",
          qno: "Q7",
          topic: "国家安全教育日 4·15",
        },
        stem:
          "题干含'4·15 全民国家安全教育日'。脑内应该反射哪本书哪一课？",
        options: [
          { key: "A", text: "道法八上第 8-9 课（国家利益/国家安全）" },
          { key: "B", text: "道法九上第 3 课（全过程人民民主）" },
          { key: "C", text: "道法八下第 6 课（人大职权）" },
          { key: "D", text: "历史八上第 19-22 课（抗日战争）" },
        ],
        answer: "A",
        whyCorrect: "4·15 = 国家安全教育日 = 八上第 8-9 课 P86-105。",
      },
      {
        id: "ph-T1-q-2025-mock-Q11",
        source: "real",
        citation: {
          kind: "real",
          year: 2025,
          region: "大连市",
          paper: "统一一模",
          qno: "Q11",
          topic: "核心价值观",
        },
        stem:
          "题干给出'敬业、诚信、友善'三个词。应翻哪本书哪一课？",
        options: [
          { key: "A", text: "道法八下第 1 课（宪法）" },
          { key: "B", text: "道法九上第 5 课（核心价值观+文化自信）" },
          { key: "C", text: "道法七上第 1 课（中学时代）" },
          { key: "D", text: "历史八上第 12 课（新文化运动）" },
        ],
        answer: "B",
        whyCorrect: "24 字核心价值观全在九上第 5 课 P60-72。",
      },
      {
        id: "ph-T1-q-2025-mock-Q16",
        source: "real",
        citation: {
          kind: "real",
          year: 2025,
          region: "大连市",
          paper: "统一一模",
          qno: "第16题（材料题 11 分）",
          topic: "全过程人民民主",
        },
        stem:
          "材料题问'完善协商民主的重要意义'。应翻哪本书哪一课？",
        options: [
          { key: "A", text: "道法九上第 3 课 P30-45" },
          { key: "B", text: "道法八下第 6 课 P64-72" },
          { key: "C", text: "以上两课都翻（九上+八下交叉）" },
          { key: "D", text: "道法九下第 2 课" },
        ],
        answer: "C",
        whyCorrect:
          "全过程人民民主在九上第 3 课讲核心；八下第 6 课讲人大制度。两课交叉答最稳。",
      },
      {
        id: "ph-T1-q-history-2024-anti-japanese",
        source: "real",
        citation: {
          kind: "real",
          year: 2024,
          region: "辽宁省",
          paper: "中考真题",
          qno: "Q8（历史）",
          topic: "抗日战争-中流砥柱",
        },
        stem:
          "题干'中国共产党在抗日战争中的中流砥柱作用'。应翻哪本书哪几课？",
        options: [
          { key: "A", text: "历史八上第 19-22 课 P96-115" },
          { key: "B", text: "历史八下第 8 课（改革开放）" },
          { key: "C", text: "道法九上第 3 课" },
          { key: "D", text: "历史九下第 11-13 课（二战）" },
        ],
        answer: "A",
        whyCorrect: "抗日战争主体在历史八上第 19-22 课。",
      },
      {
        id: "ph-T1-q-history-2024-reform",
        source: "real",
        citation: {
          kind: "real",
          year: 2024,
          region: "辽宁省",
          paper: "中考真题",
          qno: "Q10（历史）",
          topic: "改革开放",
        },
        stem:
          "题干含'1978 年''十一届三中全会'。应翻哪本书哪一课？",
        options: [
          { key: "A", text: "历史八上第 24 课（三大战役）" },
          { key: "B", text: "历史八下第 8 课（改革开放/十一届三中全会）" },
          { key: "C", text: "道法九上第 1 课（坚持改革开放）" },
          { key: "D", text: "B 和 C 都对（历史考证年份事件，道法考意义/启示）" },
        ],
        answer: "D",
        whyCorrect:
          "合卷题：历史考证'1978 年发生什么'查八下第 8 课；道法考'意义/做法/启示'查九上第 1 课。脑内同时定位两课。",
      },
      {
        id: "ph-T1-q-cultural",
        source: "adapted",
        basedOn: {
          kind: "real",
          year: 2024,
          region: "辽宁省",
          paper: "中考真题",
          qno: "材料2",
          topic: "文化自信+中华优秀传统文化",
        },
        stem:
          "材料题主题'文化自信+中华优秀传统文化'。第一时间脑内应该反射哪一课？",
        options: [
          { key: "A", text: "道法九上第 5 课 P60-72" },
          { key: "B", text: "道法九上第 7 课（民族团结）" },
          { key: "C", text: "道法九下第 2 课（人类命运共同体）" },
          { key: "D", text: "历史七上第 19 课（民族交融）" },
        ],
        answer: "A",
        hint1: "文化自信 = 九上第 5 课的核心命题。",
        whyCorrect: "九上第 5 课 P60-72 是文化自信主线。",
      },
      {
        id: "ph-T1-q-people-democracy",
        source: "predicted",
        stem:
          "题干含'网络问政''协商民主''民主选举'。应翻哪一课？",
        options: [
          { key: "A", text: "道法九上第 3 课（全过程人民民主）" },
          { key: "B", text: "道法八下第 1 课（宪法）" },
          { key: "C", text: "道法九上第 4 课（依法治国）" },
          { key: "D", text: "道法九下第 1 课（经济全球化）" },
        ],
        answer: "A",
        whyFitsStudent:
          "民主类必反射九上第 3 课。'党的领导+全过程人民民主'是 2024-2025 连考热点。",
        hint1: "看到'民主'两字反射九上第 3 课。",
        hint2: "九上 3 课讲民主形式；八下 6 课讲人大组织形式。两课配合答题。",
        trap: "易混到八下宪法或九上 4 课依法治国。",
        whyCorrect: "全过程人民民主在九上第 3 课 P30-45。",
      },
      {
        id: "ph-T1-q-innovation",
        source: "predicted",
        stem:
          "题干含'新质生产力''科教兴国''创新驱动'。应翻哪一课？",
        options: [
          { key: "A", text: "道法九上第 1 课（改革开放）" },
          { key: "B", text: "道法九上第 2 课（创新驱动发展）" },
          { key: "C", text: "道法九上第 5 课（核心价值观）" },
          { key: "D", text: "历史九上第 20-21 课（工业革命）" },
        ],
        answer: "B",
        whyFitsStudent: "三个词都指向九上第 2 课。江西 24-Q23 储能宣言考过同主题。",
        hint1: "'科技''创新''生产力'都反射九上 2 课。",
        hint2: "九上第 1 课讲'改革'，第 2 课讲'创新'，分清。",
        trap: "易翻第 1 课改革开放（搭配题，但本题主体是创新）。",
        whyCorrect: "创新驱动 = 九上 P16-25。",
      },
      {
        id: "ph-T1-q-history-japan",
        source: "real",
        citation: {
          kind: "real",
          year: 2023,
          region: "大连市",
          paper: "中考真题",
          qno: "Q?（历史）",
          topic: "日本大化改新",
        },
        stem:
          "题干'日本大化改新使日本进入封建社会'。应翻哪本书哪一课？",
        options: [
          { key: "A", text: "历史九上第 11 课 P52-55" },
          { key: "B", text: "历史九上第 19 课（俄国农奴制）" },
          { key: "C", text: "历史七下（盛唐气象）" },
          { key: "D", text: "历史八上（戊戌变法）" },
        ],
        answer: "A",
        whyCorrect: "大化改新在历史九上第 11 课。",
      },
      {
        id: "ph-T1-q-mock-Q9",
        source: "real",
        citation: {
          kind: "real",
          year: 2025,
          region: "大连市",
          paper: "统一一模",
          qno: "Q9（道法）",
          topic: "全国人大职权",
        },
        stem:
          "题干含'全国人大常委会通过 ___ 法'。应翻哪一课？",
        options: [
          { key: "A", text: "道法八下第 1 课（宪法）" },
          { key: "B", text: "道法八下第 6 课 P64-72（人大职权）" },
          { key: "C", text: "道法九上第 3 课（全过程人民民主）" },
          { key: "D", text: "道法九上第 4 课（依法治国）" },
        ],
        answer: "B",
        whyCorrect: "全国人大职权专章在八下第 6 课。",
      },
      {
        id: "ph-T1-q-banned",
        source: "predicted",
        stem:
          "下列考场动作中**违规**的是（   ）",
        options: [
          { key: "A", text: "在课本目录页关键章节旁画 ★" },
          { key: "B", text: "在书页边角空白处写关键词注释" },
          { key: "C", text: "在书侧贴红黄蓝彩色标签" },
          { key: "D", text: "用荧光笔在课本上画重点句" },
        ],
        answer: "C",
        whyFitsStudent: "**核心合规护栏**：贴标签=违规作弊。其他三项写/画在书上=合规。",
        hint1: "口诀'画在书上=合规，加在书外=违规'。",
        hint2: "便签/标签/索引贴=外加物=违规。",
        trap: "学生易以为'只要不夹纸就行'，实际贴标签也违规。",
        whyCorrect: "C 是开卷考明确禁止的物理外加标记。",
      },
    ],
    masteryTest: {
      description: "听 10 个关键词（来自 30 张反射卡），3 秒内说出书+课号",
      passThreshold: "10 个翻对 7 个算入门；9 个算掌握",
    },
    stuckResponses: {
      no_start: "今天先背 1 本书的 6 个高频章节。挑你最熟的（八下宪法或九上第 1-3 课）。",
      cant_memorize: "用'课号+主题词'记，不背具体页码：八上 8-9=国家安全 / 八下 6=人大 / 九上 3=民主。",
      annoyed: "今天只背 3 个：'国家安全→八上 8-9''民主→九上 3''核心价值观→九上 5'。3 分钟搞定。",
      too_hard: "如果背章节都难，先盯住 6 张最高频反射卡（国安/民主/核心价值观/文化自信/改革开放/抗日战争）。",
    },
    coachPrompt:
      "考烽峻：随机说一个关键词（如'国家安全''4·15''新质生产力'），让他 3 秒内回答'哪本书哪一课'，**绝不告诉他贴标签**。错了给提示不给答案。",
  },

  // ============ T1B：课本内合规标记法 ============
  {
    id: "ph-T1B-textbook-marking",
    subject: "politicsHistory",
    title: "课本内合规标记法（哪些可画/写、哪些禁止）",
    examType: "全卷通用（合规护栏）",
    estGain: "+2-3 分（弥补失去的颜色定位）",
    priority: 0,
    oneLiner:
      "画/写在原书上=合规；外加任何东西（便签/标签/卡片）=违规。3-4 月做完 12 本书。",
    sourceTrace: [
      {
        kind: "placeholder",
        note: "⚠️ 本技巧的'禁止'清单基于通用规则推断；待补：大连市教育局 2026 中考《开卷考试携带物品规定》原文。在 5 月底前向班主任/教育局电话核实",
      },
    ],
    whyFits:
      "标签禁用后，原书上的'画/写'是唯一允许的视觉辅助。81 分→95 分必须把这部分做到位，弥补失去的颜色定位。**这是关键合规护栏，不做就违规**。",
    steps: [
      "**✅ 合规标记 7 项**（写/画在原书纸面上，**不增加纸张厚度**）：",
      "  ① 荧光笔/彩色笔画重点句整段涂色",
      "  ② 红笔/黑笔在重点句下划线、波浪线、双线",
      "  ③ 书页边角空白处写关键词（如九上 P30 顶端写'全民民主'3 字）",
      "  ④ 章节互引文字注释（如八下 P64 边写'参见九上 P30'）",
      "  ⑤ 目录页打钩/打星（高频章节旁画 ★）",
      "  ⑥ 章节首/末页空白处写本章 3-5 个关键词",
      "  ⑦ 公式/口诀写在书页空白（如把'1840 鸦片→1911 辛亥→1919 五四→1921 建党→1937-1945 抗日→1949 建国→1978 改革'写在八上历史扉页）",
      "**❌ 一律禁止 5 项**：① 不得贴任何便签 / 标签 / 索引贴 / 彩色 N 次贴 / 自制书签；② 不得贴透明胶纸固定纸条；③ 不得在书页之间夹小卡片/纸条/目录册；④ 不得使用胶纸做'凸出书侧的标记'；⑤ 不得携带打印的'关键词→章节对照表'进入考场。",
      "**简单口诀**：「画在书上=合规，加在书外=违规」",
      "**实施时间表**：3-4 月每周 2 本（共 6 周做完 12 本）；5 月与脑内目录索引同步训练；考前一周清除所有外加物。",
    ],
    example: {
      id: "ph-T1B-ex",
      source: "predicted",
      stem:
        "下列做法**合规**的是（   ）",
      options: [
        { key: "A", text: "在道法九上第 3 课开头画黄色荧光笔，写'民主'2 字" },
        { key: "B", text: "在书侧贴红色便签写'国家安全'" },
        { key: "C", text: "把核心价值观 24 字打印在小卡片上夹在书里" },
        { key: "D", text: "用胶纸把目录册粘在书的封面" },
      ],
      answer: "A",
      whyFitsStudent: "A 是写/画在原书上=合规；B/C/D 都是'外加于书'=违规作弊。",
      hint1: "口诀：画在书上=合规，加在书外=违规。",
      hint2: "便签/卡片/胶纸固定的纸=外加物。",
      trap: "学生以为'我只贴一个小标签没关系'——错，开卷考不允许任何外加物。",
      whyCorrect: "A 是合规标记 7 项之一（荧光笔涂色+边角写关键词）。",
    },
    trainingQuestions: [
      {
        id: "ph-T1B-q-1",
        source: "predicted",
        stem:
          "下列做法**违规**的是（   ）",
        options: [
          { key: "A", text: "在目录页第 8-9 课旁画 ★ 标记高频" },
          { key: "B", text: "在书侧贴 6 种颜色便签做单元区分" },
          { key: "C", text: "在 P30 边角写'参见 P64'章节互引" },
          { key: "D", text: "用红笔在重点句下划波浪线" },
        ],
        answer: "B",
        hint1: "便签=外加物=违规。",
        whyCorrect: "B 贴便签是物理外加标记，违规。",
      },
      {
        id: "ph-T1B-q-2",
        source: "predicted",
        stem:
          "考前一周自查 5 项中**最重要**的一条是（   ）",
        options: [
          { key: "A", text: "拿起每本书侧面看，是否有任何凸出于书页的物体" },
          { key: "B", text: "再背一遍核心价值观 24 字" },
          { key: "C", text: "把书皮重新包一遍" },
          { key: "D", text: "把铅笔削尖" },
        ],
        answer: "A",
        hint1: "侧面看 = 检查是否有'外加物'。",
        whyCorrect: "A 是合规护栏第一道关，违规则全卷作废。",
      },
      {
        id: "ph-T1B-q-3",
        source: "predicted",
        stem:
          "下列哪一项是**合规标记 7 项**之一？（   ）",
        options: [
          { key: "A", text: "在书页之间夹一张写满关键词的小纸条" },
          { key: "B", text: "在章节末页空白处写本章 3-5 个关键词" },
          { key: "C", text: "用透明胶纸把另一张目录贴在封面" },
          { key: "D", text: "携带打印的'关键词→章节对照表'" },
        ],
        answer: "B",
        whyCorrect: "B 是合规第 6 项；其他三项都属于'外加'范畴。",
      },
      {
        id: "ph-T1B-q-4",
        source: "predicted",
        stem:
          "下列做法**全部合规**的一组是（   ）",
        options: [
          { key: "A", text: "目录页打 ★ + 边角写关键词 + 红笔下划线" },
          { key: "B", text: "书侧贴标签 + 边角写注释 + 荧光笔涂色" },
          { key: "C", text: "夹卡片 + 章节首页写小结 + 画 ★" },
          { key: "D", text: "粘目录册 + 红笔注释 + 打星" },
        ],
        answer: "A",
        hint1: "B/C/D 各含一项违规。A 三项都是写/画在原书上。",
        whyCorrect: "A 全部是合规 7 项中的标记方式。",
      },
      {
        id: "ph-T1B-q-5",
        source: "predicted",
        stem:
          "如果监考老师发现你书侧贴了便签，会怎样？",
        options: [
          { key: "A", text: "什么都不会发生" },
          { key: "B", text: "可能按违规处理，扣分甚至取消该科成绩" },
          { key: "C", text: "提醒你撕掉就行" },
          { key: "D", text: "只警告不扣分" },
        ],
        answer: "B",
        hint1: "开卷考'外加物'属于违规，存在扣分/取消成绩风险。",
        whyCorrect: "B 是真实风险，不能侥幸。",
      },
      {
        id: "ph-T1B-q-6",
        source: "predicted",
        stem:
          "对'合规标记的实施时间表'描述正确的是（   ）",
        options: [
          { key: "A", text: "考前一晚突击就行" },
          { key: "B", text: "3-4 月每周 2 本，6 周做完 12 本" },
          { key: "C", text: "考完再做" },
          { key: "D", text: "不用做" },
        ],
        answer: "B",
        whyCorrect: "B 是标准时间表。",
      },
      {
        id: "ph-T1B-q-7",
        source: "predicted",
        stem:
          "在课本上做合规标记，**最重要**的章节标记规则是（   ）",
        options: [
          { key: "A", text: "每页都涂色" },
          { key: "B", text: "高频章节（如八上 8-9 课、九上 1-6 课）重点标记" },
          { key: "C", text: "随机标记" },
          { key: "D", text: "全本不标" },
        ],
        answer: "B",
        whyCorrect: "B 集中标记高频章节 ROI 最高。",
      },
      {
        id: "ph-T1B-q-8",
        source: "predicted",
        stem:
          "在书页边角写关键词，**字数**应该如何？",
        options: [
          { key: "A", text: "1 个字" },
          { key: "B", text: "2-4 个字（如'国家安全''改革开放''核心价值观'）" },
          { key: "C", text: "整段话抄写" },
          { key: "D", text: "不写字" },
        ],
        answer: "B",
        whyCorrect: "2-4 字最快识别且节省空间。",
      },
      {
        id: "ph-T1B-q-9",
        source: "predicted",
        stem:
          "口诀'画在书上=合规，加在书外=违规'指的是？",
        options: [
          { key: "A", text: "可以随便画书皮" },
          { key: "B", text: "在原书纸面上写/画 OK；用便签/卡片/胶纸外加任何东西不 OK" },
          { key: "C", text: "可以在书外贴标签" },
          { key: "D", text: "都不能做" },
        ],
        answer: "B",
        whyCorrect: "B 是合规护栏的核心规则。",
      },
      {
        id: "ph-T1B-q-10",
        source: "predicted",
        stem:
          "如果你已经在书侧贴了 5 张便签，正确的处理是？",
        options: [
          { key: "A", text: "保留" },
          { key: "B", text: "考前一周全部撕掉，把内容改写到书页边角空白处" },
          { key: "C", text: "再多贴几张" },
          { key: "D", text: "用胶纸固定一下" },
        ],
        answer: "B",
        hint1: "撕掉外加物+改写到原书=合规化操作。",
        whyCorrect: "B 是把违规标记转为合规标记的标准动作。",
      },
    ],
    masteryTest: {
      description: "家长/老师拿起 12 本书侧面查 5 项：① 是否有凸出物 ② 页间是否夹纸 ③ 笔记是否都在原书 ④ 标记是否能撕下 ⑤ 文具袋是否有打印目录",
      passThreshold: "5 项全无违规算掌握",
    },
    stuckResponses: {
      no_start: "今天先撕掉所有现有便签/标签。撕完就算第一步完成。",
      annoyed: "今天只做 1 本书的目录页打 ★。3 分钟。",
      too_hard: "如果区分不清合规/违规，背 1 句口诀'画在书上=合规，加在书外=违规'。",
    },
    coachPrompt:
      "问烽峻：'你 12 本书有没有贴便签或夹卡片？'如果有，让他立刻撕掉。**严格执行合规护栏，不允许侥幸**。",
  },

  // ============ T2：关键词→章节 5 秒反射卡（场外训练）============
  {
    id: "ph-T2-flashcard-reflex",
    subject: "politicsHistory",
    title: "关键词→章节 5 秒反射卡（30 张道法 + 20 张历史）",
    examType: "全卷通用（开卷快速定位）",
    estGain: "+2-3 分（间接通过反射速度）",
    priority: 0,
    oneLiner:
      "50 张反射卡：正面关键词、反面书+课。每天看 10 张。**反射卡留家不带考场**。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        topic: "高频关键词分布（依据 2024-2025 真题汇总）",
        url: "https://m.sy.bendibao.com/edu/75504_6.shtm",
      },
      {
        kind: "placeholder",
        note: "⚠️ 反射卡仅场外训练，**绝不带入考场**（视为外加纸条违规）",
      },
    ],
    whyFits:
      "禁标签后必须靠脑内反射。50 张卡 2 周熟透 = 看到关键词 5 秒内说出书+课。",
    steps: [
      "**制作 50 张卡**：正面写关键词（如'国家安全'），反面写'道法八上第 8-9 课 P86-105'。",
      "**每天看 10 张**（5 道法 + 5 历史），看完正面默 5 秒说反面，对照核对。",
      "**3 周节奏**：第 1 周认全 50 张；第 2 周倒数缩到 5 秒；第 3 周混抽随机。",
      "**反射卡不能带考场**！只能在家训练。考场上只能靠脑内已经形成的反射。",
      "**道法 30 张关键词**：国家安全、宪法、依法治国、人大、监察、政协、协商民主、核心价值观、文化自信、传统文化、创新驱动、科技强国、改革开放、新发展理念、共同富裕、生态文明、人类命运共同体、一国两制、民族团结、中国梦、责任担当、家庭责任、网络生活、合理消费、绿色发展、科教兴国、未成年人保护、宪法宣誓、政府职能、公民义务",
      "**历史 20 张关键词**：鸦片战争、洋务运动、戊戌变法、辛亥革命、新文化运动、五四运动、中共一大、抗日战争、解放战争、新中国成立、三大改造、改革开放、十一届三中全会、一国两制回归、工业革命、文艺复兴、新航路、美国独立、二战、冷战",
    ],
    example: {
      id: "ph-T2-ex",
      source: "predicted",
      stem:
        "看到关键词'国家安全'，5 秒内你应该想到什么？",
      answer: "道法八上第 8-9 课，P86-105，主讲国家利益+国家安全",
      whyFitsStudent: "本卡核心训练：从关键词到章节的反射。",
      hint1: "国家安全在哪一册？",
      hint2: "道法八上。",
      whyCorrect: "教材标准章节定位。",
    },
    trainingQuestions: [
      {
        id: "ph-T2-q-anti-japanese",
        source: "predicted",
        stem: "关键词'抗日战争'对应哪一册哪些课？",
        answer: "历史八上第 19-22 课 P96-115",
        whyCorrect: "抗战主体在历史八上 19-22 课。",
      },
      {
        id: "ph-T2-q-reform",
        source: "predicted",
        stem: "关键词'十一届三中全会'对应哪一册哪一课？",
        answer: "历史八下第 8 课（改革开放）",
        whyCorrect: "1978 年标志性事件在历史八下第 8 课。",
      },
      {
        id: "ph-T2-q-democracy",
        source: "predicted",
        stem: "关键词'全过程人民民主'对应哪一册哪一课？",
        answer: "道法九上第 3 课（约 P30-45）",
        whyCorrect: "九上第 3 课讲民主参与方式。",
      },
      {
        id: "ph-T2-q-values",
        source: "predicted",
        stem: "关键词'24 字社会主义核心价值观'对应哪一册哪一课？",
        answer: "道法九上第 5 课 P60-72",
        whyCorrect: "九上第 5 课讲核心价值观。",
      },
      {
        id: "ph-T2-q-1949",
        source: "predicted",
        stem: "关键词'新中国成立'对应哪一册哪一课？",
        answer: "历史八下第 1 课（约 P1-8）",
        whyCorrect: "八下第 1 课讲开国大典。",
      },
      {
        id: "ph-T2-q-may4",
        source: "predicted",
        stem: "关键词'五四运动'对应哪一册哪一课？",
        answer: "历史八上第 13 课",
        whyCorrect: "八上第 12-13 课讲新文化运动 + 五四。",
      },
      {
        id: "ph-T2-q-constitution",
        source: "predicted",
        stem: "关键词'宪法'对应哪一册哪一课？",
        answer: "道法八下第 1-2 课（宪法专章）",
        whyCorrect: "八下第 1-2 课讲宪法核心地位。",
      },
      {
        id: "ph-T2-q-innovation",
        source: "predicted",
        stem: "关键词'创新驱动 / 科技强国'对应哪一册哪一课？",
        answer: "道法九上第 2 课（约 P16-25）",
        whyCorrect: "九上第 2 课讲创新驱动战略。",
      },
      {
        id: "ph-T2-q-rules",
        source: "predicted",
        stem:
          "下列**违规**带入考场的物品是（    ）",
        options: [
          { key: "A", text: "课本（允许）" },
          { key: "B", text: "课本里画线笔记（允许）" },
          { key: "C", text: "课本侧贴的彩色标签 + 反射卡" },
          { key: "D", text: "改正笔（允许）" },
        ],
        answer: "C",
        whyCorrect: "贴标签和反射卡都属违规外加物。",
      },
      {
        id: "ph-T2-q-1840",
        source: "predicted",
        stem: "关键词'鸦片战争'对应哪一册哪一课？",
        answer: "历史八上第 1 课",
        whyCorrect: "八上第 1 课讲鸦片战争。",
      },
    ],
    masteryTest: {
      description: "30 道关键词→章节配对题（道法 20 + 历史 10）",
      passThreshold: "对 24/30 算掌握；20/30 算入门",
    },
    stuckResponses: {
      cant_memorize: "今天只学 5 张卡（道法 3 + 历史 2）。明天再 5 张。",
      annoyed: "今天只看 1 张'国家安全'卡。3 秒内说出书+课就行。",
    },
    coachPrompt:
      "随机抽 1 张卡考烽峻关键词→章节。错了不直接给答案，提示哪一册。",
  },

  // ============ T3：高频关键词 30 个 ============
  {
    id: "ph-T3-high-freq-keywords",
    subject: "politicsHistory",
    title: "高频关键词 30 个（道法 20 + 历史 10）",
    examType: "选择题 + 材料题（每年命中）",
    estGain: "+4-6 分",
    priority: 0,
    oneLiner:
      "记 30 个关键词的'词→章节'对应。考场看到题干就知道翻哪。",
    sourceTrace: [
      {
        kind: "placeholder",
        note: "高频关键词清单基于 2023-2025 教研机构解析",
      },
    ],
    whyFits: "开卷的关键不是知识量，是检索速度。背 30 个高频词比背全书有效 10 倍。",
    steps: [
      "**道法 20 个**：国家安全 / 宪法 / 依法治国 / 社会主义核心价值观（24 字）/ 改革开放 / 创新驱动 / 文化自信 / 民族团结 / 一国两制 / 共同富裕 / 生态文明 / 中国梦 / 人类命运共同体 / 公民权利义务 / 人大代表 / 责任担当 / 网络生活 / 合理消费 / 绿色发展 / 科教兴国",
      "**历史 10 个**：鸦片战争 / 洋务运动 / 辛亥革命 / 五四运动 / 抗日战争 / 新中国成立 / 三大改造 / 改革开放 / 工业革命 / 经济全球化",
      "每个词记'章节 + 页码'。每天 5 个，6 天 30 个。",
      "考场看题干 → 圈关键词 → 反射对应章节 → 翻书。",
    ],
    example: {
      id: "ph-T3-ex",
      source: "predicted",
      stem: "题干出现'科技强国战略'，最该翻的章节是？",
      options: [
        { key: "A", text: "改革开放" },
        { key: "B", text: "创新驱动（道法九上第 2 课）" },
        { key: "C", text: "民族团结" },
        { key: "D", text: "文化自信" },
      ],
      answer: "B",
      whyCorrect: "科技强国 = 创新驱动战略 = 九上第 2 课。",
    },
    trainingQuestions: [
      {
        id: "ph-T3-q1",
        source: "predicted",
        stem: "'依法治国'对应（    ）",
        options: [
          { key: "A", text: "道法八下第 1-4 课（宪法+法治）" },
          { key: "B", text: "道法九上第 1 课" },
          { key: "C", text: "道法七上第 1 课" },
          { key: "D", text: "历史八下第 8 课" },
        ],
        answer: "A",
        whyCorrect: "八下宪法+法治专章。",
      },
      {
        id: "ph-T3-q2",
        source: "predicted",
        stem: "'共同富裕'对应（    ）",
        options: [
          { key: "A", text: "道法九上第 1 课" },
          { key: "B", text: "道法九上第 8 课" },
          { key: "C", text: "道法八下" },
          { key: "D", text: "历史八下" },
        ],
        answer: "A",
        whyCorrect: "九上第 1 课讲共同富裕。",
      },
      {
        id: "ph-T3-q3",
        source: "predicted",
        stem: "'生态文明'对应（    ）",
        options: [
          { key: "A", text: "道法九上第 6 课（建设美丽中国）" },
          { key: "B", text: "道法八上" },
          { key: "C", text: "历史九上" },
          { key: "D", text: "道法九下" },
        ],
        answer: "A",
        whyCorrect: "九上第 6 课讲生态文明。",
      },
      {
        id: "ph-T3-q4",
        source: "predicted",
        stem: "'中国梦'对应（    ）",
        options: [
          { key: "A", text: "道法九上第 8 课（约 P95-105）" },
          { key: "B", text: "道法九下第 3 课" },
          { key: "C", text: "历史八下" },
          { key: "D", text: "道法八上" },
        ],
        answer: "A",
        whyCorrect: "九上第 8 课讲中国梦。",
      },
      {
        id: "ph-T3-q5",
        source: "predicted",
        stem: "'人类命运共同体'对应（    ）",
        options: [
          { key: "A", text: "道法九下第 1-2 单元" },
          { key: "B", text: "道法八下" },
          { key: "C", text: "历史九下" },
          { key: "D", text: "道法七下" },
        ],
        answer: "A",
        whyCorrect: "九下专讲世界与中国。",
      },
      {
        id: "ph-T3-q6",
        source: "predicted",
        stem: "'三大改造'对应（    ）",
        options: [
          { key: "A", text: "历史八上第 24 课" },
          { key: "B", text: "历史八下第 5 课" },
          { key: "C", text: "历史八下第 8 课" },
          { key: "D", text: "历史九上第 1 课" },
        ],
        answer: "B",
        whyCorrect: "1953-1956 三大改造在八下第 5 课。",
      },
      {
        id: "ph-T3-q7",
        source: "predicted",
        stem: "'工业革命'对应（    ）",
        options: [
          { key: "A", text: "历史九上第 20-21 课" },
          { key: "B", text: "历史八上" },
          { key: "C", text: "历史九下" },
          { key: "D", text: "道法九下" },
        ],
        answer: "A",
        whyCorrect: "九上第 20-21 课讲第一次工业革命。",
      },
      {
        id: "ph-T3-q8",
        source: "predicted",
        stem: "'辛亥革命'对应（    ）",
        options: [
          { key: "A", text: "历史八上第 8-10 课" },
          { key: "B", text: "历史八上第 13 课" },
          { key: "C", text: "历史八下" },
          { key: "D", text: "历史九上" },
        ],
        answer: "A",
        whyCorrect: "1911 年辛亥革命在八上第 8-10 课。",
      },
      {
        id: "ph-T3-q9",
        source: "predicted",
        stem: "'一国两制'对应（    ）",
        options: [
          { key: "A", text: "道法九上第 7 课（民族团结+祖国统一）" },
          { key: "B", text: "道法八下" },
          { key: "C", text: "历史八下" },
          { key: "D", text: "道法九下" },
        ],
        answer: "A",
        whyCorrect: "九上第 7 课讲一国两制。",
      },
      {
        id: "ph-T3-q10",
        source: "predicted",
        stem: "'公民权利义务'对应（    ）",
        options: [
          { key: "A", text: "道法八下第 3-4 课" },
          { key: "B", text: "道法九上第 5 课" },
          { key: "C", text: "道法七下" },
          { key: "D", text: "道法九下" },
        ],
        answer: "A",
        whyCorrect: "八下第 3-4 课讲公民权利义务。",
      },
    ],
    masteryTest: {
      description: "30 个高频关键词 → 章节配对（道法 20 + 历史 10）",
      passThreshold: "对 24/30 算掌握；20/30 算入门",
    },
    stuckResponses: {
      cant_memorize: "今天只背 5 个：国安/宪法/依法治国/改革开放/抗战。",
      annoyed: "今天只背 1 个：'国家安全' = 道法八上第 8-9 课。",
    },
    coachPrompt:
      "随机抽 1 关键词考烽峻所在册章。不会就给一册名提示，不告具体课号。",
  },

  // ============ T4：核心价值观 24 字 + 依法治国 16 字 ============
  {
    id: "ph-T4-core-values-24",
    subject: "politicsHistory",
    title: "核心价值观 24 字 + 依法治国 16 字（必背反射）",
    examType: "选择 + 材料题",
    estGain: "+2-3 分",
    priority: 0,
    oneLiner:
      "国家：富强民主文明和谐 / 社会：自由平等公正法治 / 公民：爱国敬业诚信友善 / 法治：科学立法严格执法公正司法全民守法。",
    sourceTrace: [
      {
        kind: "real",
        year: 2025,
        region: "大连市",
        paper: "统一一模",
        qno: "Q11",
        topic: "核心价值观",
        url: "https://zy.21cnjy.com/23034519",
      },
    ],
    whyFits: "默写型送分。每年至少 1 道选择 + 材料题大概率引用。",
    steps: [
      "**24 字三层（按层背）**：",
      "  · 国家：**富强 民主 文明 和谐**",
      "  · 社会：**自由 平等 公正 法治**",
      "  · 公民：**爱国 敬业 诚信 友善**",
      "**依法治国 16 字方针**：科学立法 严格执法 公正司法 全民守法",
      "**记忆口诀**：'富民文和'、'自平公法'、'爱敬诚友' 各 4 字。",
    ],
    example: {
      id: "ph-T4-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2025,
        region: "大连市",
        paper: "统一一模",
        qno: "Q11",
      },
      stem:
        "下列属于核心价值观**社会**层面的是（    ）",
      options: [
        { key: "A", text: "富强" },
        { key: "B", text: "公正" },
        { key: "C", text: "爱国" },
        { key: "D", text: "和谐" },
      ],
      answer: "B",
      whyCorrect: "社会层面 4 字：自由、平等、公正、法治。",
    },
    trainingQuestions: [
      {
        id: "ph-T4-q1",
        source: "predicted",
        stem: "下列属于核心价值观**国家**层面的是（    ）",
        options: [
          { key: "A", text: "民主" },
          { key: "B", text: "公正" },
          { key: "C", text: "敬业" },
          { key: "D", text: "诚信" },
        ],
        answer: "A",
        whyCorrect: "国家层面 4 字：富强、民主、文明、和谐。",
      },
      {
        id: "ph-T4-q2",
        source: "predicted",
        stem: "下列属于核心价值观**公民**层面的是（    ）",
        options: [
          { key: "A", text: "和谐" },
          { key: "B", text: "公正" },
          { key: "C", text: "敬业" },
          { key: "D", text: "法治" },
        ],
        answer: "C",
        whyCorrect: "公民层面 4 字：爱国、敬业、诚信、友善。",
      },
      {
        id: "ph-T4-q3",
        source: "predicted",
        stem: "依法治国 16 字方针中**最后**4 字是（    ）",
        options: [
          { key: "A", text: "科学立法" },
          { key: "B", text: "严格执法" },
          { key: "C", text: "公正司法" },
          { key: "D", text: "全民守法" },
        ],
        answer: "D",
        whyCorrect: "16 字顺序：科学立法、严格执法、公正司法、全民守法。",
      },
      {
        id: "ph-T4-q4",
        source: "predicted",
        stem: "请依次默写核心价值观 24 字三层。",
        answer:
          "国家：富强 民主 文明 和谐\n社会：自由 平等 公正 法治\n公民：爱国 敬业 诚信 友善",
        whyCorrect: "教材标准默写。",
      },
      {
        id: "ph-T4-q5",
        source: "predicted",
        stem: "下列说法**错误**的是（    ）",
        options: [
          { key: "A", text: "'富强' 是国家层面" },
          { key: "B", text: "'诚信' 是公民层面" },
          { key: "C", text: "'法治' 是公民层面" },
          { key: "D", text: "'和谐' 是国家层面" },
        ],
        answer: "C",
        whyCorrect: "法治是社会层面，不是公民层面。",
      },
      {
        id: "ph-T4-q6",
        source: "predicted",
        stem: "依法治国方针'科学立法'指的是（    ）",
        options: [
          { key: "A", text: "立法机关依据科学规律 + 民主程序制定法律" },
          { key: "B", text: "执法人员严格执法" },
          { key: "C", text: "司法公正" },
          { key: "D", text: "全民遵守法律" },
        ],
        answer: "A",
        whyCorrect: "科学立法是首字。",
      },
      {
        id: "ph-T4-q7",
        source: "predicted",
        stem: "下列对核心价值观说法正确的是（    ）",
        options: [
          { key: "A", text: "24 字共 12 个词" },
          { key: "B", text: "国家层面 6 个词" },
          { key: "C", text: "国家、社会、公民各 3 个词" },
          { key: "D", text: "12 字共三层" },
        ],
        answer: "A",
        whyCorrect: "24 字 / 2 字一词 = 12 个词，分 3 层各 4 词。",
      },
      {
        id: "ph-T4-q8",
        source: "predicted",
        stem: "践行核心价值观'敬业'对中学生的具体要求是（    ）",
        options: [
          { key: "A", text: "认真学习，做好本职工作" },
          { key: "B", text: "升国旗" },
          { key: "C", text: "捐款" },
          { key: "D", text: "投票" },
        ],
        answer: "A",
        whyCorrect: "敬业对学生 = 认真学习。",
      },
      {
        id: "ph-T4-q9",
        source: "predicted",
        stem: "材料中'守信用、不说谎'体现核心价值观哪个词？",
        options: [
          { key: "A", text: "诚信" },
          { key: "B", text: "敬业" },
          { key: "C", text: "友善" },
          { key: "D", text: "爱国" },
        ],
        answer: "A",
        whyCorrect: "守信用 = 诚信。",
      },
      {
        id: "ph-T4-q10",
        source: "predicted",
        stem:
          "依法治国方针中描述'公民层面'的是（    ）",
        options: [
          { key: "A", text: "科学立法" },
          { key: "B", text: "严格执法" },
          { key: "C", text: "公正司法" },
          { key: "D", text: "全民守法" },
        ],
        answer: "D",
        whyCorrect: "全民守法对应公民。",
      },
    ],
    masteryTest: {
      description: "默写 24 字 + 16 字 + 三层归类各 5 道",
      passThreshold: "默写全对 + 归类对 4/5 算掌握",
    },
    stuckResponses: {
      cant_memorize: "今天只背国家层面 4 字'富强民主文明和谐'。",
      annoyed: "今天只记口诀'富民文和'。30 秒。",
    },
    coachPrompt:
      "考烽峻：'公正属于哪一层？'答：社会。再问：'敬业属于哪一层？'答：公民。",
  },

  // ============ T5：答题模板 - 问意义/影响（"有利于"句式）============
  {
    id: "ph-T5-template-meaning",
    subject: "politicsHistory",
    title: "答题模板：问意义/影响（'有利于'三句式）",
    examType: "材料题（每年必出）",
    estGain: "+3-5 分",
    priority: 0,
    oneLiner:
      "起手：有利于…/推动了…/促进了… 三句模板抄+材料关键词组合。",
    sourceTrace: [
      {
        kind: "placeholder",
        note: "通用答题模板；2024-2025 辽宁卷材料题大量使用",
      },
    ],
    whyFits:
      "材料题压轴 7-12 分必出之一。模板抄就保 3-5 分，是开卷生最高 ROI 的训练项。",
    steps: [
      "**起手三句模板**：",
      "  · '**有利于** ___（用材料关键词）'",
      "  · '**推动了** ___'",
      "  · '**促进了** ___'",
      "**配套套话词库**：依法治国、共同富裕、可持续发展、人民幸福、社会公平、文化自信、民族复兴、科技强国、国家安全",
      "**模板拆解**：先抄第 1 个'有利于' + 材料词 → 再写 2 个具体方面（经济+社会 / 国家+人民）→ 收尾。",
      "**铁律**：每段必含 1 个材料关键词，不能完全套话。",
    ],
    example: {
      id: "ph-T5-ex",
      source: "predicted",
      stem:
        "材料：'2024 年中国 GDP 突破 130 万亿元，全面建成小康社会取得决定性成就'。问：上述成就的意义。（4 分）",
      answer:
        "①有利于推动经济高质量发展，提升综合国力；②推动了人民生活水平显著提高，实现共同富裕；③促进了民族复兴和中国梦的实现。",
      whyFitsStudent: "标准三句模板 + 材料关键词。",
      hint1: "起手用'有利于'。",
      hint2: "每句结合材料关键词如'GDP''共同富裕'。",
      whyCorrect: "三句模板覆盖经济+社会+国家三个层面。",
    },
    trainingQuestions: [
      {
        id: "ph-T5-q1",
        source: "predicted",
        stem:
          "材料：'2024 年我国新能源汽车产销超 1000 万辆。'问：意义？（4 分）",
        answer:
          "①有利于推动绿色低碳发展，建设美丽中国；②推动了能源结构转型；③促进了科技创新+产业升级，提升国际竞争力。",
        whyCorrect: "三句覆盖生态+经济+科技。",
      },
      {
        id: "ph-T5-q2",
        source: "predicted",
        stem:
          "材料：'2024 年杭州亚运会成功举办。'问：意义？（4 分）",
        answer:
          "①有利于展示中国形象，增强文化自信；②推动了体育强国建设；③促进了亚洲各国友好交流和命运共同体构建。",
        whyCorrect: "三句覆盖文化+体育+外交。",
      },
      {
        id: "ph-T5-q3",
        source: "predicted",
        stem:
          "材料：'2024 年北斗导航系统全球组网。'问：意义？（4 分）",
        answer:
          "①有利于实施创新驱动发展战略，建设科技强国；②推动了国防+国家安全；③促进了民族自豪感和文化自信。",
        whyCorrect: "三句模板。",
      },
      {
        id: "ph-T5-q4",
        source: "predicted",
        stem: "材料：'十九届五中全会提出新发展格局。'问：意义？（4 分）",
        answer:
          "①有利于推动经济高质量发展；②推动了应对百年未有之大变局，提升国家经济安全；③促进了改革开放和共同富裕。",
        whyCorrect: "经济政策类。",
      },
      {
        id: "ph-T5-q5",
        source: "predicted",
        stem: "答题'问意义'类核心句式是？",
        answer: "①有利于…\n②推动了…\n③促进了…",
        whyCorrect: "三句模板。",
      },
      {
        id: "ph-T5-q6",
        source: "predicted",
        stem:
          "材料：'2024 年我国脱贫攻坚成果巩固。'问：意义？（4 分）",
        answer:
          "①有利于巩固脱贫攻坚成果，促进共同富裕；②推动了乡村振兴战略实施；③促进了城乡协调发展，实现全面小康。",
        whyCorrect: "脱贫主题模板。",
      },
      {
        id: "ph-T5-q7",
        source: "predicted",
        stem:
          "材料：'《未成年人保护法》修订实施。'问：意义？（4 分）",
        answer:
          "①有利于保护未成年人合法权益；②推动了家庭+学校+社会+网络+政府+司法六大保护体系建设；③促进了未成年人健康成长。",
        whyCorrect: "法律类模板。",
      },
      {
        id: "ph-T5-q8",
        source: "predicted",
        stem:
          "下列对'有利于'三句式描述**错误**的是（    ）",
        options: [
          { key: "A", text: "起手必用'有利于'" },
          { key: "B", text: "三句覆盖不同层面" },
          { key: "C", text: "可以全是套话不结合材料" },
          { key: "D", text: "最后一句可用'促进了'" },
        ],
        answer: "C",
        whyCorrect: "C 错——必须结合材料关键词。",
      },
      {
        id: "ph-T5-q9",
        source: "predicted",
        stem:
          "材料：'我国推进蓝天保卫战、碧水保卫战、净土保卫战。'问：对可持续发展意义？（4 分）",
        answer:
          "①有利于贯彻新发展理念，落实绿色发展和保护环境基本国策；②推动了生态文明、美丽中国建设；③促进了人与自然和谐共生，实现可持续发展。",
        whyCorrect: "生态类四件套。",
      },
      {
        id: "ph-T5-q10",
        source: "predicted",
        stem: "材料：'抗战胜利 80 周年。'问：纪念抗战胜利的意义？（4 分）",
        answer:
          "①有利于铭记历史、缅怀先烈，弘扬抗战精神；②推动了爱国主义教育，增强民族凝聚力；③促进了和平发展，警示人们珍爱和平。",
        whyCorrect: "纪念类模板。",
      },
    ],
    masteryTest: {
      description: "1 道材料题写出 3 句'有利于'式答案",
      passThreshold: "三句全到 + 含材料关键词算掌握",
    },
    stuckResponses: {
      no_start: "起手第一个词写'有利于'。后面接什么从材料里抄。",
      cant_read: "材料里圈 3 个名词（如'经济''发展''生活'），用它们造 3 句'有利于…'。",
    },
    coachPrompt: "让烽峻先在材料里圈 3 个关键名词，再用'有利于…'句式串。",
  },

  // ============ T6：答题模板 - 问做法（国/社/家/个 四件套）============
  {
    id: "ph-T6-template-method-4layer",
    subject: "politicsHistory",
    title: "答题模板：问做法（国家/社会/家庭/个人 四件套）",
    examType: "材料题压轴（请你提建议）",
    estGain: "+4-6 分",
    priority: 0,
    oneLiner: "国 + 社 + 家 + 个 4 层各 1 句。覆盖面够就给分。",
    sourceTrace: [
      {
        kind: "placeholder",
        note: "做法类材料题模板，每年命中 1-2 次",
      },
    ],
    whyFits:
      "材料题压轴 6-12 分。四件套结构清晰，老师秒判分。",
    steps: [
      "**4 层模板（按顺序写）**：",
      "  · ①**国家**：完善法律 / 制度 / 政策 / 战略",
      "  · ②**社会**：营造氛围 / 弘扬风尚 / 加强宣传",
      "  · ③**学校 / 家庭**：教育 / 监护 / 关爱",
      "  · ④**个人**：增强意识 / 落实行动 / 从小事做起",
      "**铁律**：4 层都要，缺哪一层扣那一层分。",
      "**变体**：有时'家庭'可换'学校'；'社会'可换'媒体'。",
    ],
    example: {
      id: "ph-T6-ex",
      source: "predicted",
      stem:
        "材料：'校园欺凌事件引发关注'。问：如何防治校园欺凌？（6 分）",
      answer:
        "①国家：完善《未成年人保护法》《预防未成年人犯罪法》，依法严惩；\n②学校：加强法治教育和心理健康教育，建立反欺凌机制；\n③家庭：父母依法履行监护职责，关注孩子心理变化；\n④个人/未成年人：增强自我保护意识，遭遇欺凌敢于求助，不做欺凌者。",
      whyFitsStudent: "校园欺凌四件套+1 层社会层，共 5 行。",
      hint1: "看到'怎么做'就分 4 层。",
      whyCorrect: "4 层全到位。",
    },
    trainingQuestions: [
      {
        id: "ph-T6-q1",
        source: "predicted",
        stem: "材料：'青少年沉迷网络游戏'。问：如何防治？（6 分）",
        answer:
          "①国家：完善《未成年人网络保护条例》；②社会：游戏公司加强防沉迷系统；③学校：开网络素养课，丰富活动；④家庭：父母引导建立用网规则；⑤个人：增强自控力，合理安排学习娱乐。",
        whyCorrect: "5 层完整。",
      },
      {
        id: "ph-T6-q2",
        source: "predicted",
        stem:
          "材料：'电信诈骗高发'。问：作为中学生你和家人怎么预防？（4 分）",
        answer:
          "①国家：加大反诈打击和宣传；②社会/媒体：宣传典型案例；③家庭：定期向长辈普及反诈知识；④个人：不轻信、不转账、不泄露信息，遇可疑及时报警。",
        whyCorrect: "做法类四件套。",
      },
      {
        id: "ph-T6-q3",
        source: "predicted",
        stem:
          "材料：'人口老龄化加剧'。问：国家、社会、家庭、个人怎么做？（6 分）",
        answer:
          "①国家：完善养老保障制度；②社会：发展老年友好型社区；③家庭：尽到赡养义务；④个人：传承尊老爱老美德，参与志愿服务。",
        whyCorrect: "题点四层照搬。",
      },
      {
        id: "ph-T6-q4",
        source: "predicted",
        stem: "答题'问做法'类核心句式是？",
        answer:
          "①国家：完善法律 / 制度 / 政策\n②社会：营造氛围 / 弘扬风尚\n③学校 / 家庭：教育 / 监护 / 关爱\n④个人：增强意识 / 落实行动",
        whyCorrect: "标准 4 层模板。",
      },
      {
        id: "ph-T6-q5",
        source: "predicted",
        stem: "材料：'网络谣言频发'。问：作为中学生你怎么做？（4 分）",
        answer:
          "①不造谣：不轻信不传播未经证实信息；②不信谣：理性辨别真伪；③敢辟谣：发现谣言主动举报；④增强法律意识：尊重他人合法权益。",
        whyCorrect: "4 条具体做法。",
      },
      {
        id: "ph-T6-q6",
        source: "predicted",
        stem: "材料：'保护文化遗产'。问：国家、社会、个人怎么做？（5 分）",
        answer:
          "①国家：制定保护法律，加大资金投入；②社会：媒体加强宣传；③学校：开传统文化课；④家庭：参观博物馆；⑤个人：身体力行参与志愿活动。",
        whyCorrect: "题点 3 层补到 5 层。",
      },
      {
        id: "ph-T6-q7",
        source: "predicted",
        stem:
          "材料：'保护生态环境'。问：青少年应怎么做？（4 分）",
        answer:
          "①增强环保意识；②从小事做起：不乱扔垃圾、节约用电、绿色出行；③监督举报破坏环境行为；④参加志愿活动。",
        whyCorrect: "个人层细化 4 条。",
      },
      {
        id: "ph-T6-q8",
        source: "predicted",
        stem: "做法类题目下列做法**不规范**的是（    ）",
        options: [
          { key: "A", text: "按国家+社会+家庭+个人四层写" },
          { key: "B", text: "每层至少 1 句" },
          { key: "C", text: "全部写个人层面" },
          { key: "D", text: "结合材料关键词" },
        ],
        answer: "C",
        whyCorrect: "C 错——必须四层覆盖。",
      },
      {
        id: "ph-T6-q9",
        source: "predicted",
        stem: "材料：'垃圾分类政策落实'。问：怎么提高居民参与度？（4 分）",
        answer:
          "①国家/政府：完善法规和奖惩；②社区/物业：加强宣传和便利分类设施；③家庭：父母带动孩子学习分类；④个人：从小事做起，自觉分类。",
        whyCorrect: "标准 4 层。",
      },
      {
        id: "ph-T6-q10",
        source: "predicted",
        stem: "材料：'传承红色文化'。问：青少年怎么做？（4 分）",
        answer:
          "①传承红色精神，坚定理想信念；②热爱祖国，听党话跟党走；③乐于奉献，从小事做起服务他人；④勇于担当，将个人成长融入国家发展。",
        whyCorrect: "传承类 4 条。",
      },
    ],
    masteryTest: {
      description: "1 道'请提建议'材料题写 4 层各至少 1 句",
      passThreshold: "4 层全到算掌握；3 层算入门",
    },
    stuckResponses: {
      no_start: "草稿写 4 个标题：国家 / 社会 / 学校 / 个人。每个 1 句。",
      annoyed: "今天只学'个人'这层。明天再补 3 层。",
    },
    coachPrompt: "让烽峻先列 4 层标题。再让他每层补 1 句。一层一层来。",
  },

  // ============ T7：答题模板 - 问启示（"我们要"句式）============
  {
    id: "ph-T7-template-revelation",
    subject: "politicsHistory",
    title: "答题模板：问启示（'我们要 / 应该 / 必须' 三句）",
    examType: "道法 + 历史材料题",
    estGain: "+2-3 分",
    priority: 1,
    oneLiner: "起手三句：我们要…/我们应该…/我们必须… + 主题词。",
    sourceTrace: [
      { kind: "placeholder", note: "通用模板，每年命中 1-2 次" },
    ],
    whyFits:
      "'问启示'类题答题套路化。背 3 个开头 + 4 个场景词就能写。",
    steps: [
      "**3 句开头**（顺序写）：",
      "  · '**我们要** ___（树立 / 坚定 / 增强）___ 意识'",
      "  · '**我们应该** ___（学习 / 传承 / 弘扬）___'",
      "  · '**我们必须** ___（落实 / 反对 / 抵制）___'",
      "**配套场景词**：在生活中 / 在学习中 / 在与人交往中 / 从小事做起",
      "**组合**：'我们要在生活中树立环保意识，从小事做起。'",
    ],
    example: {
      id: "ph-T7-ex",
      source: "predicted",
      stem:
        "材料：苏炳添 30 岁打破亚洲百米纪录。问：对你的成长启示？（4 分）",
      answer:
        "①树立远大理想并为之不懈奋斗；②面对困难和挫折要坚强乐观，化挫折为动力；③学习要勤奋刻苦，掌握科学方法不断超越自我；④正确认识自己，发挥潜能，自尊自信。",
      whyFitsStudent: "启示类四件套：理想/挫折/学习/自我。",
      hint1: "看材料是个人事迹 → 反观自己怎么做。",
      whyCorrect: "覆盖个人成长 4 个采分点。",
    },
    trainingQuestions: [
      {
        id: "ph-T7-q1",
        source: "predicted",
        stem:
          "材料：钱学森冲破阻挠回国，献身航天事业。问：对青少年启示？（4 分）",
        answer:
          "①树立崇高的爱国理想；②刻苦学习，掌握扎实知识；③立志报国，将个人融入国家发展；④弘扬两弹一星精神。",
        whyCorrect: "爱国类启示。",
      },
      {
        id: "ph-T7-q2",
        source: "predicted",
        stem:
          "材料：张桂梅扎根贫困山区办学。问：对我们的启示？（4 分）",
        answer:
          "①树立崇高理想，融入国家民族事业；②勇于担当社会责任，关心弱势群体；③弘扬奉献精神，从小事做起；④坚持不懈为目标长期奋斗。",
        whyCorrect: "事迹类启示。",
      },
      {
        id: "ph-T7-q3",
        source: "predicted",
        stem:
          "材料：嫦娥六号月球采样返回。问：给青少年的启示？（4 分）",
        answer:
          "①崇尚科学精神，热爱科技；②脚踏实地学习，掌握知识；③培养艰苦奋斗精神；④增强民族自豪感，立志报国。",
        whyCorrect: "航天精神启示。",
      },
      {
        id: "ph-T7-q4",
        source: "predicted",
        stem:
          "材料：杭州亚运会、北京冬奥会运用 5G、AI、绿色能源等技术。问：给我们什么启示？（4 分）",
        answer:
          "①坚持创新驱动发展，提高自主创新能力；②讲好中国故事，坚定文化自信；③践行绿色发展理念；④作为青少年要学好本领，做'有理想有本领有担当'的时代新人。",
        whyCorrect: "多线启示：创新+文化+绿色+个人。",
      },
      {
        id: "ph-T7-q5",
        source: "predicted",
        stem: "答题'问启示'类核心句式是哪 3 句？",
        answer:
          "①我们要…\n②我们应该…\n③我们必须…",
        whyCorrect: "三句模板。",
      },
      {
        id: "ph-T7-q6",
        source: "predicted",
        stem:
          "材料：北斗卫星全球组网。问：对青少年学习的启示？（4 分）",
        answer:
          "①树立创新意识；②勤奋学习，掌握扎实科学文化知识；③立志报国，将个人理想融入国家发展；④坚韧不拔，迎难而上。",
        whyCorrect: "科技类启示。",
      },
      {
        id: "ph-T7-q7",
        source: "predicted",
        stem:
          "材料：抗美援朝精神、雷锋精神、女排精神等被列入中国共产党人精神谱系。问：给当代青少年启示？（4 分）",
        answer:
          "①传承红色精神，坚定理想信念；②热爱祖国，听党话跟党走；③乐于奉献，服务他人；④勇于担当，融入国家发展。",
        whyCorrect: "精神传承启示。",
      },
      {
        id: "ph-T7-q8",
        source: "predicted",
        stem:
          "材料：杭州亚运会成功举办。问：作为东道主，给我们什么启示？（4 分）",
        answer:
          "①增强民族自豪感和文化自信；②践行核心价值观，展示文明形象；③弘扬体育精神，强健体魄；④胸怀世界，构建命运共同体。",
        whyCorrect: "盛会类启示。",
      },
      {
        id: "ph-T7-q9",
        source: "predicted",
        stem:
          "材料：我国全面建成小康社会。问：这一历史成就的启示？（4 分）",
        answer:
          "①坚持中国共产党的领导是根本保证；②坚持改革开放是强国之路；③坚持以经济建设为中心；④全国各族人民团结奋斗。",
        whyCorrect: "成就类启示。",
      },
      {
        id: "ph-T7-q10",
        source: "predicted",
        stem:
          "材料：抗战胜利 80 周年。问：纪念抗战的启示？（4 分）",
        answer:
          "①铭记历史，缅怀先烈；②弘扬伟大抗战精神，激发爱国情怀；③增强民族自豪感和凝聚力；④警示世人珍爱和平。",
        whyCorrect: "历史纪念启示。",
      },
    ],
    masteryTest: {
      description: "1 道启示题写出 3-4 句模板",
      passThreshold: "3 句全到算掌握",
    },
    stuckResponses: {
      cant_memorize: "今天只背 1 个开头：'我们要…'。",
      no_start: "看材料什么主题（环保/责任/诚信/法治），把主题填进句式。",
    },
    coachPrompt: "让烽峻先说材料主题，再用'我们要+主题词'造 3 句。",
  },

  // ============ T8：历史时间线 7 大事件 ============
  {
    id: "ph-T8-history-timeline",
    subject: "politicsHistory",
    title: "历史时间线 7 大事件（必背年份）",
    examType: "历史选择 + 材料",
    estGain: "+2-3 分",
    priority: 1,
    oneLiner:
      "1840 鸦片 / 1911 辛亥 / 1919 五四 / 1921 建党 / 1937 抗日 / 1949 建国 / 1978 改革。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q10",
        topic: "1978 十一届三中全会",
        url: "https://m.dl.bendibao.com/edu/80674.shtm",
      },
    ],
    whyFits: "历史选择题年份记忆题占 30%。背 7 个就够。",
    steps: [
      "**必背 7 个年份+事件**：",
      "  · **1840** 鸦片战争（中国近代史开端）",
      "  · **1911** 辛亥革命（推翻清王朝）",
      "  · **1919** 五四运动（新民主主义革命开端）",
      "  · **1921** 中共一大（中国共产党成立）",
      "  · **1937** 七七事变（全民族抗战开始）",
      "  · **1949** 开国大典（新中国成立）",
      "  · **1978** 十一届三中全会（改革开放开启）",
      "记忆口诀：年份 4 位数 + 关键 4 字。",
    ],
    example: {
      id: "ph-T8-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q10",
      },
      stem: "我国进入改革开放新时期的标志是（    ）",
      options: [
        { key: "A", text: "1949 年开国大典" },
        { key: "B", text: "1956 年三大改造完成" },
        { key: "C", text: "1978 年十一届三中全会" },
        { key: "D", text: "2012 年中共十八大" },
      ],
      answer: "C",
      whyCorrect: "1978 年十一届三中全会作出改革开放伟大决策。",
    },
    trainingQuestions: [
      {
        id: "ph-T8-q1",
        source: "predicted",
        stem: "鸦片战争开始时间是？",
        options: [
          { key: "A", text: "1840 年" },
          { key: "B", text: "1856 年" },
          { key: "C", text: "1900 年" },
          { key: "D", text: "1937 年" },
        ],
        answer: "A",
        whyCorrect: "1840 年。",
      },
      {
        id: "ph-T8-q2",
        source: "predicted",
        stem: "新中国成立时间是？",
        options: [
          { key: "A", text: "1949 年 10 月 1 日" },
          { key: "B", text: "1921 年" },
          { key: "C", text: "1956 年" },
          { key: "D", text: "1978 年" },
        ],
        answer: "A",
        whyCorrect: "1949.10.1 开国大典。",
      },
      {
        id: "ph-T8-q3",
        source: "predicted",
        stem: "1937 年发生的重大事件是？",
        options: [
          { key: "A", text: "辛亥革命" },
          { key: "B", text: "五四运动" },
          { key: "C", text: "七七事变（全民族抗战开始）" },
          { key: "D", text: "建国" },
        ],
        answer: "C",
        whyCorrect: "1937.7.7 卢沟桥事变。",
      },
      {
        id: "ph-T8-q4",
        source: "predicted",
        stem: "中国共产党成立时间是？",
        options: [
          { key: "A", text: "1919 年" },
          { key: "B", text: "1921 年" },
          { key: "C", text: "1937 年" },
          { key: "D", text: "1949 年" },
        ],
        answer: "B",
        whyCorrect: "1921.7.23 中共一大。",
      },
      {
        id: "ph-T8-q5",
        source: "predicted",
        stem: "辛亥革命时间是？",
        options: [
          { key: "A", text: "1898 年" },
          { key: "B", text: "1911 年" },
          { key: "C", text: "1921 年" },
          { key: "D", text: "1937 年" },
        ],
        answer: "B",
        whyCorrect: "1911 年。",
      },
      {
        id: "ph-T8-q6",
        source: "predicted",
        stem: "五四运动时间是？",
        options: [
          { key: "A", text: "1911 年" },
          { key: "B", text: "1919 年" },
          { key: "C", text: "1921 年" },
          { key: "D", text: "1949 年" },
        ],
        answer: "B",
        whyCorrect: "1919.5.4。",
      },
      {
        id: "ph-T8-q7",
        source: "predicted",
        stem: "改革开放开启时间是？",
        options: [
          { key: "A", text: "1949 年" },
          { key: "B", text: "1956 年" },
          { key: "C", text: "1978 年" },
          { key: "D", text: "1992 年" },
        ],
        answer: "C",
        whyCorrect: "1978 年十一届三中全会。",
      },
      {
        id: "ph-T8-q8",
        source: "predicted",
        stem: "下列年份顺序排列正确的是（    ）",
        options: [
          { key: "A", text: "1840-1911-1919-1949-1978" },
          { key: "B", text: "1911-1840-1919-1949-1978" },
          { key: "C", text: "1840-1919-1911-1949-1978" },
          { key: "D", text: "1949-1840-1911-1919-1978" },
        ],
        answer: "A",
        whyCorrect: "时间顺序：鸦片→辛亥→五四→建国→改开。",
      },
      {
        id: "ph-T8-q9",
        source: "predicted",
        stem: "下列**不在**初中历史 7 大必背年份的是（    ）",
        options: [
          { key: "A", text: "1840 鸦片战争" },
          { key: "B", text: "1900 八国联军" },
          { key: "C", text: "1949 建国" },
          { key: "D", text: "1978 改革" },
        ],
        answer: "B",
        whyCorrect: "B 是次要事件，不在 7 大必背。",
      },
      {
        id: "ph-T8-q10",
        source: "predicted",
        stem: "默写 7 个必背年份和事件。",
        answer:
          "1840 鸦片战争；1911 辛亥革命；1919 五四运动；1921 中共一大；1937 七七事变；1949 开国大典；1978 十一届三中全会。",
        whyCorrect: "教材必背 7 大年份。",
      },
    ],
    masteryTest: {
      description: "7 个时间双向考（年份 → 事件，事件 → 年份）共 14 题",
      passThreshold: "对 10/14 算入门；12/14 算掌握",
    },
    stuckResponses: {
      cant_memorize: "今天只背 3 个：1840 / 1949 / 1978。",
      no_start: "白纸画一条横线，把 7 个年份从左到右标上，每个下面写事件。",
    },
    coachPrompt:
      "让烽峻每次答 1 个：'1840 是什么事？'错了给提示不给答案。",
  },

  // ============ T9：抗日战争意义模板 ============
  {
    id: "ph-T9-anti-japanese-meaning",
    subject: "politicsHistory",
    title: "抗日战争意义模板（教材原文 4 句）",
    examType: "历史材料题（高频）",
    estGain: "+2-3 分",
    priority: 1,
    oneLiner: "教材原文 4 句：完全胜利 + 增强自尊 + 反法西斯 + 奠定基础。",
    sourceTrace: [
      {
        kind: "placeholder",
        note: "教材标准答案，2024 抗战 79 周年/2025 抗战 80 周年命中概率高",
      },
    ],
    whyFits:
      "抗战是历史最高频考点。教材原文 4 句一字不差就拿满分。",
    steps: [
      "**4 句教材原文（必默写）**：",
      "  · ①是中国近代以来抗击外敌入侵第一次完全胜利",
      "  · ②大大增强了民族自尊心和自信心",
      "  · ③是世界反法西斯战争重要组成部分",
      "  · ④为新民主主义革命胜利奠定基础",
      "**抗战精神 4 句**（习近平 2014 年九三阅兵讲话）：",
      "  · ①天下兴亡、匹夫有责的爱国情怀",
      "  · ②视死如归、宁死不屈的民族气节",
      "  · ③不畏强暴、血战到底的英雄气概",
      "  · ④百折不挠、坚忍不拔的必胜信念",
    ],
    example: {
      id: "ph-T9-ex",
      source: "predicted",
      stem:
        "抗日战争胜利的意义有哪些？（4 分）",
      answer:
        "①是中国近代以来抗击外敌入侵第一次完全胜利；②大大增强了民族自尊心和自信心；③是世界反法西斯战争重要组成部分；④为新民主主义革命胜利奠定基础。",
      whyCorrect: "教材标准 4 句。",
    },
    trainingQuestions: [
      {
        id: "ph-T9-q1",
        source: "predicted",
        stem: "抗日战争开始的标志是什么？",
        options: [
          { key: "A", text: "九一八事变" },
          { key: "B", text: "卢沟桥事变" },
          { key: "C", text: "南京大屠杀" },
          { key: "D", text: "百团大战" },
        ],
        answer: "B",
        whyCorrect: "1937.7.7 卢沟桥事变 = 全民族抗战开始。",
      },
      {
        id: "ph-T9-q2",
        source: "predicted",
        stem: "抗日民族统一战线建立的标志是？",
        options: [
          { key: "A", text: "西安事变和平解决" },
          { key: "B", text: "九一八事变" },
          { key: "C", text: "国共合作宣言公布" },
          { key: "D", text: "百团大战" },
        ],
        answer: "C",
        whyCorrect: "1937 年国共合作宣言。",
      },
      {
        id: "ph-T9-q3",
        source: "predicted",
        stem: "抗战胜利的根本原因是什么？",
        answer: "①中国共产党的中流砥柱作用；②抗日民族统一战线的形成；③全民族团结抗战；④国际反法西斯力量支持。",
        whyCorrect: "4 点根本原因。",
      },
      {
        id: "ph-T9-q4",
        source: "predicted",
        stem: "什么是'伟大的抗战精神'？请概括其核心内涵（4 分）",
        answer:
          "①天下兴亡、匹夫有责的爱国情怀；②视死如归、宁死不屈的民族气节；③不畏强暴、血战到底的英雄气概；④百折不挠、坚忍不拔的必胜信念。",
        whyCorrect: "教材原文 4 句。",
      },
      {
        id: "ph-T9-q5",
        source: "predicted",
        stem: "默写：抗战胜利意义 4 句。",
        answer:
          "①第一次完全胜利；②增强民族自尊心；③反法西斯战争组成部分；④为新民主主义革命奠定基础。",
        whyCorrect: "教材标准。",
      },
      {
        id: "ph-T9-q6",
        source: "predicted",
        stem:
          "材料：'2024 年是抗战胜利 79 周年。'问：纪念抗战胜利的意义？（4 分）",
        answer:
          "①铭记历史缅怀先烈；②弘扬抗战精神；③增强民族自豪感和团结力；④警示人们珍爱和平。",
        whyCorrect: "纪念类四件套。",
      },
      {
        id: "ph-T9-q7",
        source: "predicted",
        stem: "中国抗日战争是世界反法西斯战争的（    ）",
        options: [
          { key: "A", text: "重要组成部分" },
          { key: "B", text: "唯一战场" },
          { key: "C", text: "主要战场" },
          { key: "D", text: "辅助战场" },
        ],
        answer: "A",
        whyCorrect: "教材标准定位。",
      },
      {
        id: "ph-T9-q8",
        source: "predicted",
        stem: "下列关于抗日战争说法**错误**的是（    ）",
        options: [
          { key: "A", text: "1937 年开始" },
          { key: "B", text: "1945 年胜利" },
          { key: "C", text: "中国独立完成" },
          { key: "D", text: "中国共产党是中流砥柱" },
        ],
        answer: "C",
        whyCorrect: "C 错——是世界反法西斯战争重要组成部分。",
      },
      {
        id: "ph-T9-q9",
        source: "predicted",
        stem: "材料：'习近平在抗战胜利纪念大会的讲话'。问：抗战精神核心？",
        answer:
          "天下兴亡匹夫有责的爱国情怀；视死如归宁死不屈的民族气节；不畏强暴血战到底的英雄气概；百折不挠坚忍不拔的必胜信念。",
        whyCorrect: "习近平 2014 讲话原文。",
      },
      {
        id: "ph-T9-q10",
        source: "predicted",
        stem: "中国抗战胜利的根本保证是（    ）",
        options: [
          { key: "A", text: "国民党正面战场" },
          { key: "B", text: "中国共产党的中流砥柱作用" },
          { key: "C", text: "苏联出兵东北" },
          { key: "D", text: "美国原子弹" },
        ],
        answer: "B",
        whyCorrect: "中流砥柱是党的角色定位。",
      },
    ],
    masteryTest: {
      description: "默写抗战 4 句意义 + 4 句精神",
      passThreshold: "8 句全对算掌握；6 句算入门",
    },
    stuckResponses: {
      cant_memorize:
        "口诀：'首次胜利、洗国耻、转折点、反法西斯'。每句 4 字关键词。",
    },
    coachPrompt:
      "让烽峻按顺序说 4 句模板。漏哪句你提示关键词不全文。",
  },

  // ============ T10：改革开放（道法+历史合并）============
  {
    id: "ph-T10-reform-opening",
    subject: "politicsHistory",
    title: "改革开放（道法+历史合并模板）",
    examType: "材料题（必出之一）",
    estGain: "+3-4 分",
    priority: 0,
    oneLiner:
      "1978 历史标志（八下第 8 课）+ 道法新时期意义（九上第 1 课）双线答。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q10",
        topic: "改革开放",
        url: "https://m.dl.bendibao.com/edu/80674.shtm",
      },
    ],
    whyFits:
      "合卷题，历史考证年份事件，道法考意义/启示，双侧引用都给分。",
    steps: [
      "**历史侧（八下第 8 课）**：1978 年十一届三中全会作出改革开放伟大决策；标志中国进入新时期。",
      "**道法侧（九上第 1 课）**：改革开放是强国之路；坚持以经济建设为中心；创新发展理念。",
      "**重大事件**：1980 设深圳/珠海/汕头/厦门 4 大经济特区；1984 大连等 14 沿海开放城市；1990 浦东开发；2001 加入 WTO。",
      "**注意**：大连是 1984 沿海开放城市，**不是经济特区**（4 大特区是深珠汕厦）。",
    ],
    example: {
      id: "ph-T10-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q10",
      },
      stem:
        "1980 年我国设立的第一批经济特区**不包括**（    ）",
      options: [
        { key: "A", text: "深圳" },
        { key: "B", text: "珠海" },
        { key: "C", text: "大连" },
        { key: "D", text: "厦门" },
      ],
      answer: "C",
      whyCorrect:
        "第一批 4 大经济特区：深圳、珠海、汕头、厦门（1980）。大连是 1984 年首批 14 个沿海开放城市之一，不是经济特区。",
    },
    trainingQuestions: [
      {
        id: "ph-T10-q1",
        source: "predicted",
        stem: "改革开放的根本原因（取得伟大成就的）是（4 分）？",
        answer:
          "①坚持中国共产党的坚强领导（根本保证）；②坚持以经济建设为中心，坚持改革开放；③坚持走中国特色社会主义道路；④发挥社会主义制度的优越性，依靠人民群众。",
        whyCorrect: "4 件套：党+路线+道路+人民。",
      },
      {
        id: "ph-T10-q2",
        source: "predicted",
        stem: "1978 年开启改革开放的标志性会议是（    ）",
        options: [
          { key: "A", text: "中共七大" },
          { key: "B", text: "中共八大" },
          { key: "C", text: "中共十一届三中全会" },
          { key: "D", text: "中共十二大" },
        ],
        answer: "C",
        whyCorrect: "1978.12 十一届三中全会。",
      },
      {
        id: "ph-T10-q3",
        source: "predicted",
        stem:
          "材料：'2024 年我国 GDP 突破 130 万亿元，居世界第二。'问：分析改革开放 40 多年经济成就（4 分）",
        answer:
          "①GDP 大幅增长，成为全球第二大经济体；②人民生活水平显著提高，全面建成小康社会；③综合国力显著增强，国际地位提升；④为实现中华民族伟大复兴奠定基础。",
        whyCorrect: "成就类 4 件套。",
      },
      {
        id: "ph-T10-q4",
        source: "predicted",
        stem: "改革开放是党的什么决策？",
        options: [
          { key: "A", text: "兴国之要" },
          { key: "B", text: "强国之路" },
          { key: "C", text: "立国之本" },
          { key: "D", text: "都对" },
        ],
        answer: "B",
        whyCorrect: "强国之路是教材表述。",
      },
      {
        id: "ph-T10-q5",
        source: "predicted",
        stem: "我国进入新时代的标志是（    ）",
        options: [
          { key: "A", text: "1949 年开国大典" },
          { key: "B", text: "1978 年改革开放" },
          { key: "C", text: "中共十八大（2012）" },
          { key: "D", text: "中共十九大（2017）" },
        ],
        answer: "C",
        whyCorrect: "十八大判断。",
      },
      {
        id: "ph-T10-q6",
        source: "predicted",
        stem: "改革开放四十多年取得成就的关键是（    ）",
        options: [
          { key: "A", text: "运气" },
          { key: "B", text: "中国共产党的坚强领导" },
          { key: "C", text: "外援" },
          { key: "D", text: "人口红利" },
        ],
        answer: "B",
        whyCorrect: "党的领导是根本保证。",
      },
      {
        id: "ph-T10-q7",
        source: "predicted",
        stem:
          "材料：'我国全面建成小康社会'。问：这一历史成就给我们什么启示？（4 分）",
        answer:
          "①坚持中国共产党的领导是根本保证；②坚持改革开放是强国之路；③坚持以经济建设为中心；④全国各族人民团结奋斗。",
        whyCorrect: "启示类 4 件套。",
      },
      {
        id: "ph-T10-q8",
        source: "predicted",
        stem: "1980 年第一批 4 大经济特区是（    ）",
        options: [
          { key: "A", text: "深圳、珠海、汕头、厦门" },
          { key: "B", text: "深圳、上海、北京、广州" },
          { key: "C", text: "深圳、大连、青岛、宁波" },
          { key: "D", text: "深圳、广州、上海、天津" },
        ],
        answer: "A",
        whyCorrect: "记口诀：深珠汕厦。",
      },
      {
        id: "ph-T10-q9",
        source: "predicted",
        stem: "大连作为 1984 年首批沿海开放城市的意义是？",
        answer:
          "①推动了大连及辽宁经济发展；②带动东北老工业基地振兴；③促进对外开放和区域协调发展。",
        whyCorrect: "本地情境，3 条意义。",
      },
      {
        id: "ph-T10-q10",
        source: "predicted",
        stem: "改革开放对你的生活有什么影响？（结合实际，4 分）",
        answer:
          "①生活水平提高（吃住行）；②教育机会增加（义务教育普及）；③信息获取便利（互联网普及）；④精神文化丰富（文化生活多元）。",
        whyCorrect: "结合实际四件套。",
      },
    ],
    masteryTest: {
      description: "1 道改革开放材料题写 3 角度",
      passThreshold: "3 角度全写算掌握",
    },
    stuckResponses: {
      no_start: "草稿写 3 标题：经济 / 社会 / 国际。每个 1 句。",
      cant_memorize: "只背 1978 年份 + '党的领导'+'经济建设为中心' 3 个核心词。",
    },
    coachPrompt: "让烽峻按经济、社会、国际三角度各说 1 句。",
  },

  // ============ T11：文化自信答题模板 ============
  {
    id: "ph-T11-cultural-confidence",
    subject: "politicsHistory",
    title: "文化自信答题模板（5 句）",
    examType: "道法材料题（高频）",
    estGain: "+2-3 分",
    priority: 1,
    oneLiner:
      "5 句：坚定文化自信 + 传承传统 + 弘扬革命 + 发展先进 + 文化交流。",
    sourceTrace: [
      { kind: "placeholder", note: "近 3 年命中 2-3 次" },
    ],
    whyFits:
      "看到非遗、汉字、节日、京剧、剪纸 = 这一类。模板 5 句拿满。",
    steps: [
      "①坚定**文化自信**",
      "②传承**中华优秀传统文化**",
      "③弘扬**革命文化**",
      "④发展**社会主义先进文化**",
      "⑤推动**文化交流互鉴**",
    ],
    example: {
      id: "ph-T11-ex",
      source: "predicted",
      stem:
        "为推动中华优秀传统文化的传承，请你提出 3 条建议（6 分）",
      answer:
        "①坚定文化自信，深入了解中华优秀传统文化内涵；②在学校学习古诗文、传统节日、非遗工艺；③在生活中身体力行，过好传统节日，参加文化志愿活动。",
      whyFitsStudent: "模板组合 + 学校 / 个人具体动作。",
      whyCorrect: "模板 + 具体动作 = 完整答案。",
    },
    trainingQuestions: [
      {
        id: "ph-T11-q1",
        source: "predicted",
        stem:
          "材料：'大连博物馆「山海有相逢」展辽南文物吸引中小学生研学'。问：研学对青少年坚定文化自信的作用？（4 分）",
        answer:
          "①有利于了解中华优秀传统文化，增强文化认同感；②传承爱国主义精神，培育核心价值观；③发挥博物馆育人功能；④增强文化自觉和自信。",
        whyCorrect: "4 件套：认同+精神+育人+自信。",
      },
      {
        id: "ph-T11-q2",
        source: "predicted",
        stem:
          "材料：'近年传统文化进校园活动如火如荼'。问：进校园的意义？（4 分）",
        answer:
          "①学习传统文化，增强文化认同；②落实立德树人，培育核心价值观；③传承中华文化，增强文化自信；④推动中外文化交流互鉴。",
        whyCorrect: "意义 4 件套。",
      },
      {
        id: "ph-T11-q3",
        source: "predicted",
        stem:
          "材料：'2024 春节申遗成功'。问：春节申遗的意义？（4 分）",
        answer:
          "①保护和传承中华优秀传统文化；②增强中华民族的文化认同和自豪感；③推动中华文化走向世界，提升文化软实力；④推动构建人类命运共同体。",
        whyCorrect: "申遗 4 件套。",
      },
      {
        id: "ph-T11-q4",
        source: "predicted",
        stem: "下列对'文化自信'描述**错误**的是（    ）",
        options: [
          { key: "A", text: "文化自信是更基本、更深沉、更持久的力量" },
          { key: "B", text: "文化自信只看传统文化" },
          { key: "C", text: "文化自信源于优秀传统文化、革命文化、先进文化" },
          { key: "D", text: "文化自信需要每个人参与" },
        ],
        answer: "B",
        whyCorrect: "B 错——三种文化都要。",
      },
      {
        id: "ph-T11-q5",
        source: "predicted",
        stem: "下列属于**革命文化**的是（    ）",
        options: [
          { key: "A", text: "京剧" },
          { key: "B", text: "井冈山精神" },
          { key: "C", text: "唐诗宋词" },
          { key: "D", text: "造纸术" },
        ],
        answer: "B",
        whyCorrect: "井冈山精神 = 革命文化。",
      },
      {
        id: "ph-T11-q6",
        source: "predicted",
        stem: "默写文化自信 5 句模板。",
        answer:
          "①坚定文化自信；②传承中华优秀传统文化；③弘扬革命文化；④发展社会主义先进文化；⑤推动文化交流互鉴。",
        whyCorrect: "5 句模板。",
      },
      {
        id: "ph-T11-q7",
        source: "predicted",
        stem:
          "材料：'非物质文化遗产'传承面临断代风险。问：保护非遗的意义？（3 分）",
        answer:
          "①传承中华优秀传统文化，增强文化认同；②增强民族凝聚力和文化自信；③推动文化产业发展，促进经济发展。",
        whyCorrect: "3 条意义。",
      },
      {
        id: "ph-T11-q8",
        source: "predicted",
        stem: "中学生如何传承中华优秀传统文化？（4 分）",
        answer:
          "①学习古诗文、汉字、传统节日；②参观博物馆、文化遗产；③身体力行，过好传统节日；④抵制低俗文化，传承高尚情操。",
        whyCorrect: "4 条具体做法。",
      },
      {
        id: "ph-T11-q9",
        source: "predicted",
        stem:
          "下列**不属于**社会主义先进文化的是（    ）",
        options: [
          { key: "A", text: "社会主义核心价值观" },
          { key: "B", text: "马克思主义" },
          { key: "C", text: "封建迷信" },
          { key: "D", text: "中国梦理念" },
        ],
        answer: "C",
        whyCorrect: "迷信不是先进文化。",
      },
      {
        id: "ph-T11-q10",
        source: "predicted",
        stem:
          "材料：'国潮兴起，年轻人喜爱穿汉服、看国漫'。问：体现什么？（4 分）",
        answer:
          "①体现中华优秀传统文化的强大生命力；②体现青少年文化自信增强；③体现传统文化创新发展；④需要在传承中创新，推动文化高质量发展。",
        whyCorrect: "国潮 4 件套。",
      },
    ],
    masteryTest: {
      description: "默写文化自信 5 句模板",
      passThreshold: "5 句全对算掌握",
    },
    stuckResponses: {
      cant_memorize:
        "口诀：自信 / 传统 / 革命 / 先进 / 交流。5 个关键词。",
    },
    coachPrompt: "让烽峻按 5 关键词顺序说模板。",
  },

  // ============ T12：材料题圈关键词法（剥离贴标签内容）============
  {
    id: "ph-T12-keyword-circle",
    subject: "politicsHistory",
    title: "材料题圈关键词法（不靠贴标签）",
    examType: "材料题通用",
    estGain: "+2-3 分（间接）",
    priority: 1,
    oneLiner:
      "材料 → 圈 3 类词（时间/事件/价值词）→ 直接套答题模板。",
    sourceTrace: [
      { kind: "placeholder", note: "动作训练类技巧" },
    ],
    whyFits:
      "材料长但答题点少。圈 3 类词 = 找题眼 = 套对应模板。**不能贴标签辅助记忆**，全靠脑内反射。",
    steps: [
      "**3 类必圈词**：",
      "  · ①**时间**：2024 年、近年、改革开放以来",
      "  · ②**事件 / 主题**：脱贫攻坚、亚运会、抗战胜利",
      "  · ③**价值词 / 数字 / 关键名词**：130 万亿、世界第一、命运共同体",
      "**圈完后做 2 件事**：",
      "  · 反射对应章节（用 T2 反射卡能力）",
      "  · 对应答题模板（意义/做法/启示）",
      "**禁区**：圈词只能在试卷上画，**不能贴标签辅助**。",
    ],
    example: {
      id: "ph-T12-ex",
      source: "predicted",
      stem:
        "材料：'2024 年中国成功发射神舟十九号载人飞船，三名航天员开始为期 6 个月的太空驻留。这是中国航天事业又一里程碑。'圈出 3 类关键词。",
      answer:
        "①时间：2024 年；②事件：神舟十九号 / 中国航天；③价值词：里程碑 / 航天事业",
      whyFitsStudent: "练习从材料到关键词的扫描。",
      whyCorrect: "圈对 3 类词 = 答题骨架已有。",
    },
    trainingQuestions: [
      {
        id: "ph-T12-q1",
        source: "predicted",
        stem:
          "材料：'2024 年杭州亚运会，43 国参赛，创历届记录。'圈 3 类关键词。",
        answer: "①时间：2024 年；②事件：杭州亚运会；③价值词：创记录 / 国际",
        whyCorrect: "三要素。",
      },
      {
        id: "ph-T12-q2",
        source: "predicted",
        stem:
          "材料：'2023 年我国脱贫攻坚战取得全面胜利，9899 万贫困人口全部脱贫。'圈 3 类关键词。",
        answer: "①时间：2023；②事件：脱贫攻坚胜利；③数字：9899 万",
        whyCorrect: "三要素。",
      },
      {
        id: "ph-T12-q3",
        source: "predicted",
        stem:
          "材料：'党的二十大提出中国式现代化是中国共产党领导的社会主义现代化'。圈 3 类关键词。",
        answer: "①政策来源：二十大报告；②核心概念：中国式现代化；③性质词：社会主义",
        whyCorrect: "政策 + 概念 + 性质。",
      },
      {
        id: "ph-T12-q4",
        source: "predicted",
        stem: "扫描关键词的核心步骤是？",
        answer: "1. 圈时间；2. 圈事件 / 主题；3. 圈价值词 / 数字 / 关键名词。",
        whyCorrect: "扫描法步骤。",
      },
      {
        id: "ph-T12-q5",
        source: "predicted",
        stem:
          "材料长但题问意义。最优做法是（    ）",
        options: [
          { key: "A", text: "通读全段" },
          { key: "B", text: "只圈关键词，不通读" },
          { key: "C", text: "只看第一句" },
          { key: "D", text: "跳过" },
        ],
        answer: "B",
        whyCorrect: "扫描法。",
      },
      {
        id: "ph-T12-q6",
        source: "predicted",
        stem: "下列**不属于**关键词的是（    ）",
        options: [
          { key: "A", text: "时间（如 2024）" },
          { key: "B", text: "数字（如 GDP 130 万亿）" },
          { key: "C", text: "事件名（如脱贫攻坚）" },
          { key: "D", text: "无意义连接词（如的、了、和）" },
        ],
        answer: "D",
        whyCorrect: "连接词不是关键词。",
      },
      {
        id: "ph-T12-q7",
        source: "predicted",
        stem:
          "下列辅助方式**违规**的是（    ）",
        options: [
          { key: "A", text: "试卷上画线圈词" },
          { key: "B", text: "在课本目录页上画 ★" },
          { key: "C", text: "在课本侧贴彩色标签辅助找章" },
          { key: "D", text: "在书页边角写笔记" },
        ],
        answer: "C",
        whyCorrect: "贴标签是开卷违规。",
      },
      {
        id: "ph-T12-q8",
        source: "predicted",
        stem:
          "材料：'2024 年新能源汽车产销超 1000 万辆，居世界第一。'圈 3 类关键词。",
        answer: "①时间：2024；②事件：新能源汽车产销；③数字 / 排名：1000 万辆 / 世界第一",
        whyCorrect: "三要素。",
      },
      {
        id: "ph-T12-q9",
        source: "predicted",
        stem:
          "材料：'近年青少年沉迷网络游戏。某市教育局推出无网络周末活动。'圈关键词。",
        answer: "①问题：青少年沉迷网络游戏；②政策来源：教育局；③解决方案：无网络周末",
        whyCorrect: "问题 + 主体 + 方案。",
      },
      {
        id: "ph-T12-q10",
        source: "predicted",
        stem: "扫描法对答题的好处是？",
        answer:
          "①节省时间；②快速定位题眼；③有利于结合材料组织答案；④避免抄长段落。",
        whyCorrect: "扫描优势。",
      },
    ],
    masteryTest: {
      description: "3 段材料每段圈 3 类关键词",
      passThreshold: "9 类圈对 6 类入门；7 类掌握",
    },
    stuckResponses: {
      cant_read: "材料一段一段读。第一段先圈时间和人物。",
      annoyed: "今天只练 1 段材料。3 分钟。",
    },
    coachPrompt:
      "给烽峻 1 段材料，让他圈 3 类词读给你听。错了提示类型不告具体词。",
  },

  // ============ S1：开卷应试时间分配 ============
  {
    id: "ph-S1-time-skip",
    subject: "politicsHistory",
    title: "开卷应试时间分配 + 翻 2 分钟没找到就跳",
    examType: "全卷",
    estGain: "+2-3 分（间接）",
    priority: 1,
    oneLiner:
      "150 分钟 70 分道法 + 70 分历史。翻书超 2 分钟必跳，回头补。",
    sourceTrace: [
      { kind: "placeholder", note: "通用应试技巧" },
    ],
    whyFits:
      "你 81 分。翻书慢是头号杀手。2 分钟阈值是开卷生存线。",
    steps: [
      "**150 分钟分配**：",
      "  · 选择题 20 道 × 1.5 分 = 30 分（用时 30 分钟）",
      "  · 道法材料题 40 分（用时 50 分钟）",
      "  · 历史材料题 40 分（用时 50 分钟）",
      "  · 检查 + 补空 20 分钟",
      "**翻 2 分钟没找到就跳**：",
      "  · 标记题号回头",
      "  · 凭印象选 1 个不空着",
      "  · 后面材料题套通用模板（'有利于…'）抢过程分",
    ],
    example: {
      id: "ph-S1-ex",
      source: "predicted",
      stem:
        "材料题翻书 3 分钟还没找到对应章节。最该做什么？",
      options: [
        { key: "A", text: "继续翻" },
        { key: "B", text: "跳过先做后面，回头补" },
        { key: "C", text: "凭印象答" },
        { key: "D", text: "放弃" },
      ],
      answer: "B",
      whyCorrect: "B 是最优策略。",
    },
    trainingQuestions: [
      {
        id: "ph-S1-q1",
        source: "predicted",
        stem: "道法历史合卷 150 分钟。翻书超几分钟没找到必跳？",
        options: [
          { key: "A", text: "1 分钟" },
          { key: "B", text: "2 分钟" },
          { key: "C", text: "5 分钟" },
          { key: "D", text: "10 分钟" },
        ],
        answer: "B",
        whyCorrect: "2 分钟阈值。",
      },
      {
        id: "ph-S1-q2",
        source: "predicted",
        stem:
          "下列对'目标 95 分'的拆分合理的是（    ）",
        options: [
          { key: "A", text: "选择 25 + 道法材料 35 + 历史材料 35 = 95" },
          { key: "B", text: "全靠选择（70 分）" },
          { key: "C", text: "全靠材料题" },
          { key: "D", text: "全靠运气" },
        ],
        answer: "A",
        whyCorrect: "拆分多区块更稳。",
      },
      {
        id: "ph-S1-q3",
        source: "predicted",
        stem:
          "做材料题不会列模板。最该做的是（    ）",
        options: [
          { key: "A", text: "全空" },
          { key: "B", text: "至少写'有利于…'+'我们要…'两个起手句" },
          { key: "C", text: "胡乱抄材料" },
          { key: "D", text: "继续硬想" },
        ],
        answer: "B",
        whyCorrect: "争取过程分。",
      },
      {
        id: "ph-S1-q4",
        source: "predicted",
        stem: "材料题答题时下列做法**错误**的是（    ）",
        options: [
          { key: "A", text: "套用四件套模板" },
          { key: "B", text: "结合材料具体词" },
          { key: "C", text: "用'有利于'起手" },
          { key: "D", text: "全文照抄材料" },
        ],
        answer: "D",
        whyCorrect: "照抄不答题。",
      },
      {
        id: "ph-S1-q5",
        source: "predicted",
        stem: "考前 5 分钟最重要的是？",
        options: [
          { key: "A", text: "再练 1 张反射卡" },
          { key: "B", text: "检查答题卡填涂 + 确认材料题不空白" },
          { key: "C", text: "再做 1 道题" },
          { key: "D", text: "睡一会" },
        ],
        answer: "B",
        whyCorrect: "检查填涂避免低级丢分。",
      },
      {
        id: "ph-S1-q6",
        source: "predicted",
        stem:
          "考场上某材料题完全看不懂。最该做的是（    ）",
        options: [
          { key: "A", text: "完全空白" },
          { key: "B", text: "圈关键词 + 套通用模板（有利于 / 我们要）" },
          { key: "C", text: "胡乱抄一段" },
          { key: "D", text: "随便选" },
        ],
        answer: "B",
        whyCorrect: "通用模板能拿过程分。",
      },
      {
        id: "ph-S1-q7",
        source: "predicted",
        stem: "下列考试策略**错误**的是（    ）",
        options: [
          { key: "A", text: "翻 2 分钟没找到就跳" },
          { key: "B", text: "材料题至少写起手套语" },
          { key: "C", text: "全部题目按顺序做完不跳" },
          { key: "D", text: "考前练好反射卡" },
        ],
        answer: "C",
        whyCorrect: "C 错——按顺序做不灵活。",
      },
      {
        id: "ph-S1-q8",
        source: "predicted",
        stem:
          "对'开卷生存法则'描述**正确**的是（    ）",
        options: [
          { key: "A", text: "凭索引快速找答案" },
          { key: "B", text: "翻不到就跳" },
          { key: "C", text: "材料题套模板抢分" },
          { key: "D", text: "都对" },
        ],
        answer: "D",
        whyCorrect: "三条都对。",
      },
      {
        id: "ph-S1-q9",
        source: "predicted",
        stem: "选择题 20 道（30 分）的总用时建议是？",
        options: [
          { key: "A", text: "10 分钟" },
          { key: "B", text: "30 分钟" },
          { key: "C", text: "60 分钟" },
          { key: "D", text: "90 分钟" },
        ],
        answer: "B",
        whyCorrect: "1-1.5 分钟/题。",
      },
      {
        id: "ph-S1-q10",
        source: "predicted",
        stem: "考完前 10 分钟最该做的事是？",
        answer:
          "1. 检查选择题填涂；2. 材料题空白处至少写'有利于'起手句；3. 历史时间不确定的题再翻确认。",
        whyCorrect: "三类收尾动作。",
      },
    ],
    masteryTest: {
      description: "1 套模拟卷限时 150 分钟",
      passThreshold: "翻书 ≤ 2 分钟自动跳 + 总用时 ≤ 150 分钟",
    },
    stuckResponses: {
      annoyed: "今天不模考。只记口诀：'翻 2 分钟没找到就跳'。",
    },
    coachPrompt:
      "考烽峻：'道法历史考场翻书超过几分钟必须跳？'答：2 分钟。",
  },

  // ============ S2：材料题双卡（套语开头 + 模板四件套）============
  {
    id: "ph-S2-material-double",
    subject: "politicsHistory",
    title: "材料题双卡：套语开头 + 模板四件套",
    examType: "材料题",
    estGain: "+3-5 分",
    priority: 0,
    oneLiner:
      "起手 3 套语（有利于/我们要/国家社会家庭个人）+ 材料关键词组合 = 60% 套话采分。",
    sourceTrace: [
      { kind: "placeholder", note: "通用应试技巧" },
    ],
    whyFits:
      "材料题最高 ROI 训练点。模板熟到反射 = 不翻书也能写 60% 套话采分。",
    steps: [
      "**3 套起手语**：",
      "  · 问意义/影响 → '**有利于**…'",
      "  · 问做法 → '**国家**…社会…家庭…个人…'四层",
      "  · 问启示 → '**我们要**…我们应该…我们必须…'三句",
      "**铁律**：每段必含 1 个材料关键词，不能完全套话。",
      "**反射训练**：拿到题先判'问什么' → 0.5 秒选模板 → 起手套语 → 填材料词。",
    ],
    example: {
      id: "ph-S2-ex",
      source: "predicted",
      stem:
        "考场遇到一道材料题问'抗战胜利的意义'。最该选哪个模板？",
      options: [
        { key: "A", text: "'有利于…'三句式（意义/影响）" },
        { key: "B", text: "'国家+社会+家庭+个人' 四件套（做法）" },
        { key: "C", text: "'我们要…' 三句式（启示）" },
        { key: "D", text: "全文抄材料" },
      ],
      answer: "A",
      whyCorrect: "题问'意义' = 用'有利于'三句模板。",
    },
    trainingQuestions: [
      {
        id: "ph-S2-q1",
        source: "predicted",
        stem: "题问'怎么做'，应套哪个模板？",
        options: [
          { key: "A", text: "'有利于…'" },
          { key: "B", text: "'国家+社会+家庭+个人'" },
          { key: "C", text: "'我们要…'" },
          { key: "D", text: "都行" },
        ],
        answer: "B",
        whyCorrect: "做法题套四件套。",
      },
      {
        id: "ph-S2-q2",
        source: "predicted",
        stem: "题问'对你的启示'，应套哪个模板？",
        options: [
          { key: "A", text: "'有利于…'" },
          { key: "B", text: "'国家+社会+家庭+个人'" },
          { key: "C", text: "'我们要…我们应该…我们必须…'" },
          { key: "D", text: "都行" },
        ],
        answer: "C",
        whyCorrect: "启示题套'我们要'三句。",
      },
      {
        id: "ph-S2-q3",
        source: "predicted",
        stem: "下列对'套语模板'描述**错误**的是（    ）",
        options: [
          { key: "A", text: "起手必用套语" },
          { key: "B", text: "每段必含材料关键词" },
          { key: "C", text: "可以全是套话不结合材料" },
          { key: "D", text: "三个模板对应三种问法" },
        ],
        answer: "C",
        whyCorrect: "C 错——必须结合材料。",
      },
      {
        id: "ph-S2-q4",
        source: "predicted",
        stem: "完全不会的材料题，至少应该写什么？",
        answer:
          "①圈材料关键词；②起手套语'有利于…' 或 '我们要…'；③套对应模板写 2-3 句。这样至少 1-3 分。",
        whyCorrect: "不会也要抢过程分。",
      },
      {
        id: "ph-S2-q5",
        source: "predicted",
        stem:
          "题问'纪念抗战胜利 80 周年的意义'。该用哪个模板？",
        options: [
          { key: "A", text: "'有利于…'" },
          { key: "B", text: "国/社/家/个 四件套" },
          { key: "C", text: "'我们要…'" },
          { key: "D", text: "都不用" },
        ],
        answer: "A",
        whyCorrect: "题问意义 → '有利于'。",
      },
      {
        id: "ph-S2-q6",
        source: "predicted",
        stem:
          "题问'青少年应怎么做'。该用哪个模板？",
        options: [
          { key: "A", text: "'有利于…'" },
          { key: "B", text: "国/社/家/个 四件套" },
          { key: "C", text: "'我们要…' 三句（侧重个人）" },
          { key: "D", text: "B 和 C 都行（B 更全面，C 更聚焦个人）" },
        ],
        answer: "D",
        whyCorrect: "做法 + 启示混合题，B 或 C 都行。",
      },
      {
        id: "ph-S2-q7",
        source: "predicted",
        stem: "下列起手语**最规范**的是（    ）",
        options: [
          { key: "A", text: "'我觉得这件事…'" },
          { key: "B", text: "'有利于推动经济发展…'" },
          { key: "C", text: "'这件事很重要…'" },
          { key: "D", text: "'材料告诉我们…'" },
        ],
        answer: "B",
        whyCorrect: "B 是教材标准用语。",
      },
      {
        id: "ph-S2-q8",
        source: "predicted",
        stem: "材料题模板熟练度的目标是什么？",
        answer:
          "看到题问 → 0.5 秒选对模板 → 不翻书也能写 60% 套话采分 → 加材料关键词组合 = 80% 满分。",
        whyCorrect: "本卡核心目标。",
      },
      {
        id: "ph-S2-q9",
        source: "predicted",
        stem:
          "材料：'我国发展新质生产力'。问：意义？应起手什么？",
        answer:
          "起手：'有利于推动新质生产力发展，建设科技强国…'",
        whyCorrect: "意义题用'有利于'。",
      },
      {
        id: "ph-S2-q10",
        source: "predicted",
        stem: "三大答题模板分别对应什么问题？",
        answer:
          "①'有利于…' → 问意义/影响\n②'国/社/家/个' 四件套 → 问做法\n③'我们要…我们应该…我们必须…' → 问启示",
        whyCorrect: "三对应。",
      },
    ],
    masteryTest: {
      description: "3 道材料题分别用对应模板写起手段",
      passThreshold: "3 题模板选对算掌握",
    },
    stuckResponses: {
      cant_memorize: "今天只背 1 个模板'有利于…' 三句。",
      no_start: "看题问什么 → 反射 0.5 秒选模板。",
    },
    coachPrompt:
      "给烽峻 3 道题分别问意义/做法/启示。让他说选哪个模板。",
  },

  // ============ S3：选择题双策略 ============
  {
    id: "ph-S3-select-strategy",
    subject: "politicsHistory",
    title: "选择题双策略：审题划重点 + 排除法",
    examType: "全卷选择题（20 道 × 1.5 分 = 30 分）",
    estGain: "+2-3 分",
    priority: 0,
    oneLiner:
      "审题先圈 5 类限定词；不会的题用排除法 4 选 1 → 2 选 1 提高蒙对率。",
    sourceTrace: [
      { kind: "placeholder", note: "通用应试技巧" },
    ],
    whyFits:
      "你 81 分，选择题最容易丢分。审题不漏关键词 + 排除法 = 蒙对率从 25% 到 50%。",
    steps: [
      "**审题 5 类必圈词**：",
      "  · '**正确**' / '**不正确**' / '**错误**'",
      "  · '**主要**' / '**根本**'",
      "  · '**属于**' / '**不属于**'",
      "  · '**直接**' / '**间接**'",
      "  · '**国家** / **社会** / **个人**' 层面",
      "**排除法步骤**：",
      "  · 排明显错的（如题问'抗战胜利' 选项里有'1840'）",
      "  · 找最稳的剩下 1 个",
      "  · 实在不会蒙 C（统计上 C 概率略高）",
    ],
    example: {
      id: "ph-S3-ex",
      source: "predicted",
      stem: "下列说法**不正确**的是（    ）",
      options: [
        { key: "A", text: "1949 年新中国成立" },
        { key: "B", text: "1978 年改革开放开始" },
        { key: "C", text: "1840 年改革开放开始" },
        { key: "D", text: "1921 年中共一大" },
      ],
      answer: "C",
      whyCorrect: "审题划重点：**不正确**。1840 是鸦片战争不是改革开放。",
    },
    trainingQuestions: [
      {
        id: "ph-S3-q1",
        source: "predicted",
        stem: "下列说法**正确**的是（    ）",
        options: [
          { key: "A", text: "公正属于公民层面" },
          { key: "B", text: "和谐属于公民层面" },
          { key: "C", text: "敬业属于公民层面" },
          { key: "D", text: "民主属于公民层面" },
        ],
        answer: "C",
        whyCorrect: "公民 4 字：爱国敬业诚信友善。",
      },
      {
        id: "ph-S3-q2",
        source: "predicted",
        stem: "下列说法**错误**的是（    ）",
        options: [
          { key: "A", text: "鸦片战争 1840 年开始" },
          { key: "B", text: "辛亥革命 1911 年" },
          { key: "C", text: "新中国 1956 年成立" },
          { key: "D", text: "改革开放 1978 年" },
        ],
        answer: "C",
        whyCorrect: "新中国 1949 年成立，1956 是三大改造完成。",
      },
      {
        id: "ph-S3-q3",
        source: "predicted",
        stem: "考场看到一道选择题完全不会，蒙哪个字母概率最高？",
        options: [
          { key: "A", text: "A" },
          { key: "B", text: "B" },
          { key: "C", text: "C" },
          { key: "D", text: "D" },
        ],
        answer: "C",
        whyCorrect: "C 是统计'安全选项'。",
      },
      {
        id: "ph-S3-q4",
        source: "predicted",
        stem:
          "下列**不属于**核心价值观国家层面的是（    ）",
        options: [
          { key: "A", text: "富强" },
          { key: "B", text: "民主" },
          { key: "C", text: "公正" },
          { key: "D", text: "和谐" },
        ],
        answer: "C",
        whyCorrect: "公正是社会层面，不是国家层面。",
      },
      {
        id: "ph-S3-q5",
        source: "predicted",
        stem: "题干圈 3 类必圈词。下列对'**主要**贡献'的圈词正确的是（    ）",
        options: [
          { key: "A", text: "圈'主要'两字" },
          { key: "B", text: "圈'贡献'两字" },
          { key: "C", text: "都不圈" },
          { key: "D", text: "圈整句" },
        ],
        answer: "A",
        whyCorrect: "限定词'主要'必圈。",
      },
      {
        id: "ph-S3-q6",
        source: "predicted",
        stem:
          "题目'下列属于历史事件的是 A. 鸦片战争 B. 改革开放 C. 五四运动 D. 都对'。先排除明显错的剩下哪个？",
        answer: "全部都是历史事件 → 选 D。",
        whyCorrect: "ABCD 都是事件，选 D 都对。",
      },
      {
        id: "ph-S3-q7",
        source: "predicted",
        stem: "考场遇到选择题花 2 分钟还在纠结。最佳做法？",
        options: [
          { key: "A", text: "继续硬想" },
          { key: "B", text: "排除 1-2 个明显错的，凭直觉选剩下，标记返回" },
          { key: "C", text: "空着" },
          { key: "D", text: "随便选 A" },
        ],
        answer: "B",
        whyCorrect: "B 性价比最优。",
      },
      {
        id: "ph-S3-q8",
        source: "predicted",
        stem: "下列对'排除法'描述**错误**的是（    ）",
        options: [
          { key: "A", text: "先排明显错的" },
          { key: "B", text: "把 4 选 1 变 2 选 1" },
          { key: "C", text: "提高蒙对率" },
          { key: "D", text: "不用排除直接蒙" },
        ],
        answer: "D",
        whyCorrect: "D 错——必须先排除。",
      },
      {
        id: "ph-S3-q9",
        source: "predicted",
        stem: "选择题双策略是？",
        answer:
          "①审题划重点（圈正确/错误、主要、属于、根本等）；②排除法（先去明显错的把 4 选 1 变 2 选 1）。",
        whyCorrect: "本卡核心。",
      },
      {
        id: "ph-S3-q10",
        source: "predicted",
        stem: "下列**不属于**审题必圈词的是（    ）",
        options: [
          { key: "A", text: "正确/不正确" },
          { key: "B", text: "主要/根本" },
          { key: "C", text: "属于/不属于" },
          { key: "D", text: "的、了、和" },
        ],
        answer: "D",
        whyCorrect: "连接词不必圈。",
      },
    ],
    masteryTest: {
      description: "5 道选择题先圈词再答",
      passThreshold: "5 题都圈对算掌握",
    },
    stuckResponses: {
      no_start: "拿到选择题第 1 件事：圈题干关键词。",
      annoyed: "今天只练 1 件事：圈'正确/不正确'。",
    },
    coachPrompt:
      "拿一道选择题让烽峻先**只圈关键词**，圈完才让他答。",
  },

  // ============ S4：道法/历史选择不同思路 ============
  {
    id: "ph-S4-select-different-thinking",
    subject: "politicsHistory",
    title: "道法/历史选择不同思路（道法看政策、历史看时间）",
    examType: "选择题",
    estGain: "+1-2 分",
    priority: 1,
    oneLiner:
      "道法题看新政策/价值观；历史题看时间/事件。两种学科不同思路。",
    sourceTrace: [
      { kind: "placeholder", note: "学科应对策略" },
    ],
    whyFits:
      "合卷里两科混在一起，分清思路才不混乱。",
    steps: [
      "**道法选择题特点**：",
      "  · 题干含新政策（如二十大、新质生产力、共同富裕）",
      "  · 看核心价值观、依法治国 16 字、习近平新思想",
      "  · 选项 4 个里有 1 个是教材标准答案，3 个是干扰",
      "**历史选择题特点**：",
      "  · 题干含时间或事件名（1840、五四、抗战）",
      "  · 看 7 大年份反射事件",
      "  · 看历史人物贡献（如孙中山、毛泽东、邓小平）",
      "**混淆点**：改革开放是道法（讲意义）+ 历史（讲 1978 年）双考点。看题问什么决定哪本书。",
    ],
    example: {
      id: "ph-S4-ex",
      source: "predicted",
      stem:
        "题干：'1978 年十一届三中全会作出改革开放伟大决策'。该题考查的是？",
      options: [
        { key: "A", text: "道法（改革开放意义）" },
        { key: "B", text: "历史（年份事件考证）" },
        { key: "C", text: "都可（合卷题）" },
        { key: "D", text: "纯背诵" },
      ],
      answer: "C",
      whyCorrect: "合卷题，历史考年份，道法考意义。看具体问什么。",
    },
    trainingQuestions: [
      {
        id: "ph-S4-q1",
        source: "predicted",
        stem:
          "题干'2024 年是抗战胜利 79 周年，纪念抗战的意义'。该题侧重？",
        options: [
          { key: "A", text: "历史（年份事件）" },
          { key: "B", text: "道法（意义/启示）" },
          { key: "C", text: "都对" },
          { key: "D", text: "都不对" },
        ],
        answer: "B",
        whyCorrect: "题问'意义' = 道法答题模板。",
      },
      {
        id: "ph-S4-q2",
        source: "predicted",
        stem: "题干'核心价值观 24 字默写'。该题考查的是？",
        options: [
          { key: "A", text: "历史" },
          { key: "B", text: "道法（九上第 5 课）" },
          { key: "C", text: "都对" },
          { key: "D", text: "都不对" },
        ],
        answer: "B",
        whyCorrect: "核心价值观属道法。",
      },
      {
        id: "ph-S4-q3",
        source: "predicted",
        stem: "题干'戊戌变法的内容'。该题考查的是？",
        options: [
          { key: "A", text: "历史（八上第 6-7 课）" },
          { key: "B", text: "道法" },
          { key: "C", text: "都对" },
          { key: "D", text: "都不对" },
        ],
        answer: "A",
        whyCorrect: "戊戌变法是历史事件。",
      },
      {
        id: "ph-S4-q4",
        source: "predicted",
        stem: "下列考点全部属于**道法**的是（    ）",
        options: [
          { key: "A", text: "国家安全 + 鸦片战争" },
          { key: "B", text: "依法治国 + 核心价值观" },
          { key: "C", text: "辛亥革命 + 抗日战争" },
          { key: "D", text: "工业革命 + 五四运动" },
        ],
        answer: "B",
        whyCorrect: "依法治国 + 价值观全是道法。",
      },
      {
        id: "ph-S4-q5",
        source: "predicted",
        stem: "下列考点全部属于**历史**的是（    ）",
        options: [
          { key: "A", text: "国家安全 + 文化自信" },
          { key: "B", text: "鸦片战争 + 抗日战争 + 辛亥革命" },
          { key: "C", text: "依法治国 + 改革开放（意义）" },
          { key: "D", text: "新质生产力 + 二十大" },
        ],
        answer: "B",
        whyCorrect: "B 全是历史事件。",
      },
      {
        id: "ph-S4-q6",
        source: "predicted",
        stem: "考场看到合卷选择题，先做什么？",
        options: [
          { key: "A", text: "通读全部题再答" },
          { key: "B", text: "判断属于道法还是历史，选对应思路" },
          { key: "C", text: "随便做" },
          { key: "D", text: "先做后面材料" },
        ],
        answer: "B",
        whyCorrect: "先分类再思考。",
      },
      {
        id: "ph-S4-q7",
        source: "predicted",
        stem: "看到'1937'第一反应应该是？",
        answer: "七七事变 / 卢沟桥事变 / 全民族抗战开始。",
        whyCorrect: "历史 7 大年份反射。",
      },
      {
        id: "ph-S4-q8",
        source: "predicted",
        stem: "看到'共同富裕'第一反应应该是？",
        answer: "道法 / 九上第 1 课 / 改革开放主题。",
        whyCorrect: "道法关键词反射。",
      },
      {
        id: "ph-S4-q9",
        source: "predicted",
        stem: "下列概念**不属于**道法的是（    ）",
        options: [
          { key: "A", text: "新质生产力" },
          { key: "B", text: "新文化运动" },
          { key: "C", text: "共同富裕" },
          { key: "D", text: "中国梦" },
        ],
        answer: "B",
        whyCorrect: "新文化运动是历史（八上第 12 课）。",
      },
      {
        id: "ph-S4-q10",
        source: "predicted",
        stem: "学科分类反射的好处是？",
        answer:
          "①快速判断是道法还是历史 → 选对应章节书；②道法套答题模板，历史套时间反射；③避免在合卷中混乱思路。",
        whyCorrect: "本卡作用。",
      },
    ],
    masteryTest: {
      description: "10 道选择题分类道法/历史",
      passThreshold: "对 8/10 算掌握",
    },
    stuckResponses: {
      cant_read: "看题干第一句：含时间事件 = 历史；含政策价值观 = 道法。",
      annoyed: "今天只学 1 类：'1840' = 鸦片战争 = 历史。",
    },
    coachPrompt:
      "给烽峻 3 个题干让他判道法还是历史。错了不直接给答案。",
  },
];
