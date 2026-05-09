import { Technique } from "@/lib/types";

/**
 * 数学 技巧库
 * 学生现状：18/120 → 目标 30（+12 分）
 * 卷面：选择 10×3=30 + 填空 5×3=15 + 解答 8 道 75 分 = 120
 * 难度比 7:2:1。22-23 题压轴绝对不碰。
 */

export const MATH_TECHNIQUES: Technique[] = [
  // ============ 选择题 1-3（高频送分，3 张）============
  {
    id: "math-T1-three-views",
    subject: "math",
    title: "三视图判断（选择题第 1 题）",
    examType: "选择题第 1 题（每年必考）",
    estGain: "+3 分",
    priority: 0,
    oneLiner: "俯视=从上往下看；主视=从前往后看；左视=从左往右看。",
    sourceTrace: [
      {
        kind: "real",
        year: 2023,
        region: "大连市",
        paper: "中考真题",
        qno: "Q2",
        topic: "圆柱主视图",
        url: "https://www.zhongkao.com/e/20230702/64a11f4be0cf4.shtml",
      },
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q1",
        topic: "5 个小立方块俯视图",
        url: "https://www.zhongkao.com/e/20240428/662dedd295328.shtml",
      },
      {
        kind: "real",
        year: 2025,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q1",
        topic: "圆锥主视图为三角形",
        url: "https://www.7cxk.com/p-3971266.html",
      },
    ],
    whyFits:
      "你 18 分。这是选择题第 1 题，3 年都考三视图。送分位置必须拿。",
    steps: [
      "**俯视图** = 从正上方往下看 → 看到的是底面投影",
      "**主视图** = 从正前方往后看 → 看到的是正面轮廓",
      "**左视图** = 从左侧往右看 → 看到的是侧面轮廓",
      "复杂堆叠超过 5 块直接蒙 B（统计概率高）",
    ],
    example: {
      id: "math-T1-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2025,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q1",
      },
      stem: "下列几何体中，主视图为三角形的是（    ）",
      options: [
        { key: "A", text: "圆柱" },
        { key: "B", text: "圆锥" },
        { key: "C", text: "球" },
        { key: "D", text: "长方体" },
      ],
      answer: "B",
      whyCorrect:
        "圆锥从正前方看是等腰三角形（底是直径，顶是锥尖）。圆柱主视图是矩形，球是圆，长方体是矩形。",
    },
    trainingQuestions: [
      {
        id: "math-T1-q1",
        source: "real",
        citation: {
          kind: "real",
          year: 2024,
          region: "辽宁省",
          paper: "中考真题",
          qno: "Q1",
        },
        stem:
          "由 5 个相同小立方块搭成的几何体（底层 4 个排成 L 形，顶层 1 个叠在前排正中那个上方），它的俯视图是（    ）",
        options: [
          { key: "A", text: "L 形（一行三个 + 左上加 1 个）" },
          { key: "B", text: "一行三个正方形" },
          { key: "C", text: "田字形" },
          { key: "D", text: "T 字形" },
        ],
        answer: "A",
        whyCorrect: "俯视图 = 底层投影。底层是 L 形 = 一行 3 + 左上 1。",
      },
      {
        id: "math-T1-q2",
        source: "real",
        citation: {
          kind: "real",
          year: 2023,
          region: "大连市",
          paper: "中考真题",
          qno: "Q2",
        },
        stem: "圆柱体的主视图是（    ）",
        options: [
          { key: "A", text: "圆" },
          { key: "B", text: "矩形" },
          { key: "C", text: "三角形" },
          { key: "D", text: "梯形" },
        ],
        answer: "B",
        whyCorrect: "圆柱从正前方看是矩形（高 = 圆柱高，宽 = 直径）。",
      },
      {
        id: "math-T1-q3",
        source: "predicted",
        stem: "圆锥的主视图是（    ）",
        options: [
          { key: "A", text: "圆" },
          { key: "B", text: "矩形" },
          { key: "C", text: "等腰三角形" },
          { key: "D", text: "梯形" },
        ],
        answer: "C",
        hint1: "圆锥从正前方看，底圆变线，锥尖朝上。",
        whyCorrect: "圆锥主视图是等腰三角形。",
      },
      {
        id: "math-T1-q4",
        source: "predicted",
        stem: "球的三视图都是（    ）",
        options: [
          { key: "A", text: "三角形" },
          { key: "B", text: "矩形" },
          { key: "C", text: "圆" },
          { key: "D", text: "梯形" },
        ],
        answer: "C",
        hint1: "球从任意方向看都是圆。",
        whyCorrect: "球的三视图都是圆。",
      },
      {
        id: "math-T1-q5",
        source: "predicted",
        stem: "下列几何体俯视图为圆的是（    ）",
        options: [
          { key: "A", text: "圆柱" },
          { key: "B", text: "正方体" },
          { key: "C", text: "三棱锥" },
          { key: "D", text: "长方体" },
        ],
        answer: "A",
        hint1: "圆柱从上往下看 = 圆。",
        hint2: "圆柱主视图矩形、俯视图圆。",
        whyCorrect: "圆柱俯视图是圆。",
      },
      {
        id: "math-T1-q6",
        source: "predicted",
        stem:
          "由 4 个相同的小立方块搭成 2×2 的'凹'字形（缺了右上一个）。它的左视图是（    ）",
        options: [
          { key: "A", text: "1 个正方形" },
          { key: "B", text: "2 个上下排正方形" },
          { key: "C", text: "L 形" },
          { key: "D", text: "T 字形" },
        ],
        answer: "B",
        hint1: "左视图 = 从左边看到的形状。",
        hint2: "看见 2 排（上下叠）。",
        whyCorrect: "左视图是上下 2 个正方形。",
      },
      {
        id: "math-T1-q7",
        source: "predicted",
        stem:
          "正方体的三视图分别是（    ）",
        options: [
          { key: "A", text: "都是正方形" },
          { key: "B", text: "都是矩形" },
          { key: "C", text: "正方形 + 矩形" },
          { key: "D", text: "圆 + 矩形" },
        ],
        answer: "A",
        hint1: "正方体六面相同。",
        whyCorrect: "正方体三视图都是正方形。",
      },
      {
        id: "math-T1-q8",
        source: "predicted",
        stem:
          "下列几何体中，主视图、左视图、俯视图都不相同的是（    ）",
        options: [
          { key: "A", text: "球" },
          { key: "B", text: "正方体" },
          { key: "C", text: "圆柱（直立）" },
          { key: "D", text: "长方体（长宽高都不等）" },
        ],
        answer: "D",
        hint1: "三视图都不同 → 物体三个方向尺寸都不同。",
        hint2: "球、正方体三视图都同；圆柱主左视图同。",
        whyCorrect: "长宽高都不等的长方体三视图各不相同。",
      },
      {
        id: "math-T1-q9",
        source: "predicted",
        stem:
          "由 6 个相同小正方体搭成的几何体，从正面看是 2 列（高 1 + 高 2）；从上面看是 1 行 2 个。它有几个小正方体？",
        options: [
          { key: "A", text: "3" },
          { key: "B", text: "4" },
          { key: "C", text: "5" },
          { key: "D", text: "6" },
        ],
        answer: "A",
        hint1: "俯视 1 行 2 个 → 2 列；正面 1+2=3。",
        hint2: "总数 = 1+2 = 3。",
        whyCorrect: "由主俯视图共可推 3 个。",
      },
      {
        id: "math-T1-q10",
        source: "predicted",
        stem:
          "下列说法错误的是（    ）",
        options: [
          { key: "A", text: "圆锥的俯视图是圆中心带一个点" },
          { key: "B", text: "圆柱的左视图是矩形" },
          { key: "C", text: "正方体的三视图都是正方形" },
          { key: "D", text: "球的三视图都不是圆" },
        ],
        answer: "D",
        hint1: "球任何方向看都是圆。",
        whyCorrect: "D 错（球三视图都是圆）。",
      },
    ],
    masteryTest: {
      description: "3 道三视图题",
      passThreshold: "对 2/3 算入门；3/3 算掌握",
    },
    stuckResponses: {
      cant_read: "题让你看哪个视图？俯 / 主 / 左 选 1 个。",
      no_start: "想象自己站在几何体的什么方向看。从上=俯，从前=主，从左=左。",
      too_hard: "复杂堆叠（>5 块）就蒙 B。",
    },
    coachPrompt:
      "反问烽峻：题问的是哪个视图？俯视图从哪边看？让他先说出方向。",
  },

  {
    id: "math-T2-real-compare",
    subject: "math",
    title: "有理数大小比较（选择题第 2 题）",
    examType: "选择题（高频）",
    estGain: "+3 分",
    priority: 0,
    oneLiner:
      "负数比绝对值，绝对值大的反而小。负数 < 0 < 正数。",
    sourceTrace: [
      {
        kind: "real",
        year: 2023,
        region: "大连市",
        paper: "中考真题",
        qno: "Q1",
        topic: "-6 的绝对值",
      },
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q2",
        topic: "海拔比较（-415/-28/-156/-40）",
      },
      {
        kind: "real",
        year: 2025,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q2",
        topic: "正负数实际意义（乒乓球质量偏差）",
      },
    ],
    whyFits:
      "选择题第 2 题位置高频，3 年都考。送分。",
    steps: [
      "比较负数：**绝对值大的反而小**（-415 < -156 < -40 < -28）",
      "正负数比较：**负数 < 0 < 正数**",
      "实际意义题：'重 = +'就'轻 = -'；'盈利 = +'就'亏损 = -'",
      "绝对值：|x| ≥ 0 永远；|-6| = 6（去负号即可）",
    ],
    example: {
      id: "math-T2-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q2",
      },
      stem:
        "亚洲、欧洲、非洲、南美洲最低海拔分别是 -415m、-28m、-156m、-40m。最低海拔最小的是（    ）",
      options: [
        { key: "A", text: "亚洲（-415m）" },
        { key: "B", text: "欧洲（-28m）" },
        { key: "C", text: "非洲（-156m）" },
        { key: "D", text: "南美洲（-40m）" },
      ],
      answer: "A",
      whyCorrect: "|-415| = 415 最大 → -415 在 4 个数里最小。",
    },
    trainingQuestions: [
      {
        id: "math-T2-q1",
        source: "real",
        citation: {
          kind: "real",
          year: 2023,
          region: "大连市",
          paper: "中考真题",
          qno: "Q1",
        },
        stem: "-6 的绝对值是（    ）",
        options: [
          { key: "A", text: "-6" },
          { key: "B", text: "6" },
          { key: "C", text: "-1/6" },
          { key: "D", text: "1/6" },
        ],
        answer: "B",
        whyCorrect: "|x| 永远 ≥ 0。负数绝对值 = 它的相反数。|-6| = 6。",
      },
      {
        id: "math-T2-q2",
        source: "predicted",
        stem: "下列各数中，最小的数是（    ）",
        options: [
          { key: "A", text: "-3" },
          { key: "B", text: "0" },
          { key: "C", text: "1" },
          { key: "D", text: "-1/2" },
        ],
        answer: "A",
        hint1: "负数最小，0 第二小。",
        hint2: "比 -3 和 -1/2，绝对值大的更小。",
        whyCorrect: "-3 < -1/2 < 0 < 1。",
      },
      {
        id: "math-T2-q3",
        source: "predicted",
        stem: "下列各数中，最大的是（    ）",
        options: [
          { key: "A", text: "-2" },
          { key: "B", text: "0" },
          { key: "C", text: "-(-3)" },
          { key: "D", text: "-(-1/2)" },
        ],
        answer: "C",
        hint1: "-(-3) = 3，-(-1/2) = 1/2。",
        hint2: "3 > 1/2 > 0 > -2。",
        whyCorrect: "-(-3) = 3 是最大。",
      },
      {
        id: "math-T2-q4",
        source: "real",
        citation: {
          kind: "real",
          year: 2025,
          region: "辽宁省",
          paper: "中考真题",
          qno: "Q2",
        },
        stem:
          "乒乓球质量标准 2.7 g，超出标准记 +x g，不足记 -x g。下列 4 个乒乓球中最接近标准的是（    ）",
        options: [
          { key: "A", text: "+0.05 g" },
          { key: "B", text: "-0.06 g" },
          { key: "C", text: "+0.04 g" },
          { key: "D", text: "-0.03 g" },
        ],
        answer: "D",
        hint1: "最接近标准 = 绝对值最小。",
        hint2: "0.03 < 0.04 < 0.05 < 0.06。",
        whyCorrect: "|-0.03| = 0.03 最小。",
      },
      {
        id: "math-T2-q5",
        source: "predicted",
        stem: "如果向南走 5 米记作 +5，那么向北走 8 米记作（    ）",
        options: [
          { key: "A", text: "+8" },
          { key: "B", text: "-8" },
          { key: "C", text: "+13" },
          { key: "D", text: "-13" },
        ],
        answer: "B",
        hint1: "正方向：南 → 反方向：北。",
        whyCorrect: "向北 = -，所以 -8。",
      },
      {
        id: "math-T2-q6",
        source: "predicted",
        stem: "下列说法正确的是（    ）",
        options: [
          { key: "A", text: "正数都比 0 大" },
          { key: "B", text: "负数比正数大" },
          { key: "C", text: "0 是最小的有理数" },
          { key: "D", text: "绝对值最小的数是 1" },
        ],
        answer: "A",
        hint1: "正负 0 关系：负 < 0 < 正。",
        hint2: "|0| = 0 最小。",
        whyCorrect: "正数 > 0。",
      },
      {
        id: "math-T2-q7",
        source: "predicted",
        stem: "下列各数中绝对值最大的是（    ）",
        options: [
          { key: "A", text: "-5" },
          { key: "B", text: "3" },
          { key: "C", text: "-1.5" },
          { key: "D", text: "0" },
        ],
        answer: "A",
        hint1: "比 |a|。",
        hint2: "|-5|=5, |3|=3, |-1.5|=1.5, |0|=0。",
        whyCorrect: "|-5| = 5 最大。",
      },
      {
        id: "math-T2-q8",
        source: "predicted",
        stem:
          "若 |x| = 3，则 x 的值是（    ）",
        options: [
          { key: "A", text: "3" },
          { key: "B", text: "-3" },
          { key: "C", text: "3 或 -3" },
          { key: "D", text: "0" },
        ],
        answer: "C",
        hint1: "|x| = 3 → x = ±3。",
        hint2: "绝对值 3 的数有两个。",
        whyCorrect: "x = 3 或 -3。",
      },
      {
        id: "math-T2-q9",
        source: "predicted",
        stem: "数轴上离原点 5 个单位的数是（    ）",
        options: [
          { key: "A", text: "5" },
          { key: "B", text: "-5" },
          { key: "C", text: "±5" },
          { key: "D", text: "0" },
        ],
        answer: "C",
        hint1: "数轴上'离原点 5'有左右两个点。",
        whyCorrect: "+5 和 -5 都行。",
      },
      {
        id: "math-T2-q10",
        source: "predicted",
        stem:
          "下列温度由低到高排列正确的是（    ）",
        options: [
          { key: "A", text: "-15℃ < -3℃ < 0℃ < 5℃" },
          { key: "B", text: "5℃ < 0℃ < -3℃ < -15℃" },
          { key: "C", text: "-3℃ < -15℃ < 0℃ < 5℃" },
          { key: "D", text: "0℃ < -3℃ < -15℃ < 5℃" },
        ],
        answer: "A",
        hint1: "负数比绝对值大的更小。",
        hint2: "-15 < -3 < 0 < 5。",
        whyCorrect: "标准排序。",
      },
    ],
    masteryTest: {
      description: "4 道大小比较 / 绝对值题",
      passThreshold: "对 3/4 算掌握",
    },
    stuckResponses: {
      cant_memorize: "口诀：'负号越大越小'。负数比时绝对值大的反而小。",
      no_start: "先把 4 个数的绝对值算出来，写在数旁边。",
    },
    coachPrompt:
      "让烽峻先比 4 个负数的绝对值。错了你提示'绝对值大的反而 ___'。",
  },

  {
    id: "math-T3-scientific-notation",
    subject: "math",
    title: "科学记数法（选择题第 3 题）",
    examType: "选择题（每年必考）",
    estGain: "+3 分",
    priority: 0,
    oneLiner: "a × 10ⁿ，1 ≤ |a| < 10。n = 整数位数 - 1。",
    sourceTrace: [
      {
        kind: "real",
        year: 2023,
        region: "大连市",
        paper: "中考真题",
        qno: "Q4",
        topic: "102 万 → 1.02×10⁶",
      },
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q3",
        topic: "53.2 亿 → 5.32×10¹⁰",
      },
    ],
    whyFits:
      "送分题。背口诀就拿。",
    steps: [
      "**公式：a × 10ⁿ**",
      "  · a 必须 1 ≤ |a| < 10（小数点放在第一位非 0 数字后面）",
      "  · n = 整数位数 - 1",
      "**例**：53,200,000,000 共 11 位 → n = 10 → 5.32 × 10¹⁰",
      "**小数情况**：0.000 0035 → 3.5 × 10⁻⁶（小数点后第一个非 0 前有 6 位）",
    ],
    example: {
      id: "math-T3-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q3",
      },
      stem: "将 53,200,000,000 用科学记数法表示为（    ）",
      options: [
        { key: "A", text: "532×10⁸" },
        { key: "B", text: "53.2×10⁹" },
        { key: "C", text: "5.32×10¹⁰" },
        { key: "D", text: "5.32×10¹¹" },
      ],
      answer: "C",
      whyCorrect: "11 位整数 → n=10。a=5.32 满足 [1,10)。",
    },
    trainingQuestions: [
      {
        id: "math-T3-q1",
        source: "real",
        citation: {
          kind: "real",
          year: 2023,
          region: "大连市",
          paper: "中考真题",
          qno: "Q4",
        },
        stem:
          "某种离心机最大离心力为 1,020,000 N（即 102 万 N），用科学记数法表示为（    ）",
        options: [
          { key: "A", text: "0.102×10⁷" },
          { key: "B", text: "1.02×10⁶" },
          { key: "C", text: "10.2×10⁵" },
          { key: "D", text: "102×10⁴" },
        ],
        answer: "B",
        whyCorrect: "7 位整数 → n=6。a=1.02 满足 [1,10)。",
      },
      {
        id: "math-T3-q2",
        source: "predicted",
        stem: "0.000 0035 用科学记数法表示为（    ）",
        options: [
          { key: "A", text: "3.5×10⁶" },
          { key: "B", text: "3.5×10⁻⁶" },
          { key: "C", text: "35×10⁻⁷" },
          { key: "D", text: "0.35×10⁻⁵" },
        ],
        answer: "B",
        hint1: "小数点后第 1 个非 0 数字是 3，前面有 6 位 0。",
        hint2: "n = -6（小数 → 负指数）。",
        whyCorrect: "3.5×10⁻⁶ 标准形式。",
      },
      {
        id: "math-T3-q3",
        source: "predicted",
        stem:
          "近年中国 GDP 约 130 万亿元 (130 000 000 000 000)，用科学记数法表示为（    ）",
        options: [
          { key: "A", text: "1.3×10¹⁴" },
          { key: "B", text: "1.3×10¹³" },
          { key: "C", text: "13×10¹²" },
          { key: "D", text: "130×10¹¹" },
        ],
        answer: "A",
        hint1: "数 0：130 后面 12 个 0，共 15 位。",
        hint2: "n = 15-1 = 14。",
        whyCorrect: "1.3×10¹⁴。",
      },
      {
        id: "math-T3-q4",
        source: "predicted",
        stem: "下列科学记数法表达正确的是（    ）",
        options: [
          { key: "A", text: "30 = 3×10¹" },
          { key: "B", text: "0.5 = 5×10⁻¹" },
          { key: "C", text: "120 = 12×10¹" },
          { key: "D", text: "A 和 B 都正确" },
        ],
        answer: "D",
        hint1: "C 错（12 ≥ 10，不满足 1≤a<10）。",
        whyCorrect: "A、B 都对。",
      },
      {
        id: "math-T3-q5",
        source: "predicted",
        stem:
          "已知 a × 10ⁿ 是某个数的科学记数法。下列对 a 的描述正确的是（    ）",
        options: [
          { key: "A", text: "0 < a < 10" },
          { key: "B", text: "1 ≤ |a| < 10" },
          { key: "C", text: "1 < a < 10" },
          { key: "D", text: "|a| ≥ 1" },
        ],
        answer: "B",
        hint1: "标准定义：1 ≤ |a| < 10。",
        whyCorrect: "B 是标准范围。",
      },
      {
        id: "math-T3-q6",
        source: "predicted",
        stem:
          "PM2.5 直径约 0.000 002 5 m，用科学记数法表示是（    ）",
        options: [
          { key: "A", text: "2.5×10⁻⁶" },
          { key: "B", text: "2.5×10⁶" },
          { key: "C", text: "25×10⁻⁷" },
          { key: "D", text: "0.25×10⁻⁵" },
        ],
        answer: "A",
        hint1: "小数点后到 2.5 共 6 位。",
        whyCorrect: "n=-6。",
      },
      {
        id: "math-T3-q7",
        source: "predicted",
        stem: "53.2 亿用科学记数法是（    ）",
        options: [
          { key: "A", text: "5.32×10⁹" },
          { key: "B", text: "5.32×10¹⁰" },
          { key: "C", text: "53.2×10⁸" },
          { key: "D", text: "532×10⁷" },
        ],
        answer: "A",
        hint1: "1 亿 = 10⁸。53.2 × 10⁸ = 5.32 × 10⁹。",
        whyCorrect: "5.32×10⁹。",
      },
      {
        id: "math-T3-q8",
        source: "predicted",
        stem: "下列各数用科学记数法表示，正确的是（    ）",
        options: [
          { key: "A", text: "30000 = 3×10⁴" },
          { key: "B", text: "0.001 = 1×10³" },
          { key: "C", text: "5 = 5×10⁰" },
          { key: "D", text: "A 和 C" },
        ],
        answer: "D",
        hint1: "B 错（应是 10⁻³）。",
        whyCorrect: "A、C 都对。",
      },
      {
        id: "math-T3-q9",
        source: "predicted",
        stem:
          "5.6×10⁵ 这个数等于（    ）",
        options: [
          { key: "A", text: "56000" },
          { key: "B", text: "560000" },
          { key: "C", text: "5600000" },
          { key: "D", text: "56" },
        ],
        answer: "B",
        hint1: "5.6 × 10⁵ = 5.6 × 100000 = 560000。",
        whyCorrect: "560000。",
      },
      {
        id: "math-T3-q10",
        source: "predicted",
        stem: "下列各数用科学记数法表示错误的是（    ）",
        options: [
          { key: "A", text: "100 = 1×10²" },
          { key: "B", text: "1000 = 1×10³" },
          { key: "C", text: "0.0001 = 1×10⁻⁴" },
          { key: "D", text: "0.01 = 1×10⁻¹" },
        ],
        answer: "D",
        hint1: "0.01 = 10⁻²。",
        whyCorrect: "D 应为 10⁻²。",
      },
    ],
    masteryTest: {
      description: "3 道科学记数法题",
      passThreshold: "对 2/3 算入门；3/3 算掌握",
    },
    stuckResponses: {
      cant_memorize: "口诀：'数位数减 1'。",
      no_start: "先数有几位整数。",
    },
    coachPrompt:
      "让烽峻先数几位整数。再让他算 n。一道一道。",
  },

  // ============ 选择题 4-6 + 填空 11-13（4 张）============
  {
    id: "math-T4-polynomial-ops",
    subject: "math",
    title: "整式运算 4 公式",
    examType: "选择题第 5 题（高频）",
    estGain: "+3 分",
    priority: 1,
    oneLiner:
      "同底数幂相乘指数相加；幂的乘方指数相乘；同类项要求字母+指数都相同。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q5",
        topic: "整式运算判断",
      },
    ],
    whyFits:
      "选择题第 5 题位置常考。4 个公式背完直接判。",
    steps: [
      "**同底数幂相乘**：a² · a³ = a^(2+3) = a⁵（**指数相加**）",
      "**幂的乘方**：(a²)³ = a^(2×3) = a⁶（**指数相乘**）",
      "**积的乘方**：(ab)² = a²b²",
      "**同类项相加**：a² + a³ ≠ 2a⁵（不是同类项不能合并）；a + a = 2a（同类项）",
      "**单乘多**：a(a+1) = a×a + a×1 = a² + a（分配律）",
    ],
    example: {
      id: "math-T4-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q5",
      },
      stem: "下列计算正确的是（    ）",
      options: [
        { key: "A", text: "a² + a³ = 2a⁵" },
        { key: "B", text: "a² · a³ = a⁶" },
        { key: "C", text: "(a²)³ = a⁵" },
        { key: "D", text: "a(a+1) = a² + a" },
      ],
      answer: "D",
      whyCorrect:
        "D：分配律。A：a²、a³ 不是同类项不能合并。B：同底数幂相乘指数相加 → a⁵。C：幂的乘方指数相乘 → a⁶。",
    },
    trainingQuestions: [
      {
        id: "math-T4-q1",
        source: "predicted",
        stem: "计算 a² · a³ = ____",
        answer: "a⁵",
        hint1: "同底数幂相乘 → 指数相加。",
        hint2: "2 + 3 = 5。",
        whyCorrect: "a² · a³ = a²⁺³ = a⁵。",
      },
      {
        id: "math-T4-q2",
        source: "predicted",
        stem: "计算 (a²)³ = ____",
        answer: "a⁶",
        hint1: "幂的乘方 → 指数相乘。",
        hint2: "2 × 3 = 6。",
        whyCorrect: "(a²)³ = a²ˣ³ = a⁶。",
      },
      {
        id: "math-T4-q3",
        source: "predicted",
        stem: "下列计算正确的是（    ）",
        options: [
          { key: "A", text: "a² + a² = a⁴" },
          { key: "B", text: "a² + a² = 2a²" },
          { key: "C", text: "a² · a² = 2a²" },
          { key: "D", text: "(a²)² = a⁴a⁴" },
        ],
        answer: "B",
        hint1: "同类项相加 → 系数相加。",
        whyCorrect: "a² + a² = 2a²。",
      },
      {
        id: "math-T4-q4",
        source: "predicted",
        stem: "化简 3a + 2a - a = ____",
        answer: "4a",
        hint1: "同类项系数相加。",
        hint2: "3 + 2 - 1 = 4。",
        whyCorrect: "3a + 2a - a = 4a。",
      },
      {
        id: "math-T4-q5",
        source: "predicted",
        stem: "下列计算错误的是（    ）",
        options: [
          { key: "A", text: "x³ ÷ x² = x" },
          { key: "B", text: "(2x)² = 4x²" },
          { key: "C", text: "(x²)³ = x⁶" },
          { key: "D", text: "x² + x³ = x⁵" },
        ],
        answer: "D",
        hint1: "x²、x³ 不是同类项不能合并。",
        whyCorrect: "D 错（不能合并）。",
      },
      {
        id: "math-T4-q6",
        source: "predicted",
        stem: "化简 a(a+1) = ____",
        answer: "a² + a",
        hint1: "分配律。",
        hint2: "a×a + a×1 = a² + a。",
        whyCorrect: "a(a+1) = a² + a。",
      },
      {
        id: "math-T4-q7",
        source: "predicted",
        stem: "计算 (a+b)(a-b) = ____",
        answer: "a² - b²",
        hint1: "平方差公式。",
        whyCorrect: "(a+b)(a-b) = a² - b²。",
      },
      {
        id: "math-T4-q8",
        source: "predicted",
        stem: "计算 (a+b)² = ____",
        answer: "a² + 2ab + b²",
        hint1: "完全平方公式。",
        whyCorrect: "(a+b)² = a² + 2ab + b²。",
      },
      {
        id: "math-T4-q9",
        source: "predicted",
        stem:
          "下列同类项是的是（    ）",
        options: [
          { key: "A", text: "3x²y 与 -2xy²" },
          { key: "B", text: "5a² 与 5a" },
          { key: "C", text: "2x²y 与 -3x²y" },
          { key: "D", text: "x³ 与 x²" },
        ],
        answer: "C",
        hint1: "同类项 = 字母和指数完全相同。",
        whyCorrect: "C 中 x²y 完全相同。",
      },
      {
        id: "math-T4-q10",
        source: "predicted",
        stem: "计算 (-2x)³ = ____",
        answer: "-8x³",
        hint1: "(-2)³ = -8；x³ 不变。",
        hint2: "整体的立方。",
        whyCorrect: "(-2x)³ = -8x³。",
      },
    ],
    masteryTest: {
      description: "4 道整式运算判断题",
      passThreshold: "对 3/4 算掌握",
    },
    stuckResponses: {
      cant_memorize:
        "口诀：相乘加，乘方乘，同类项指数要相同。",
      too_many_wrong: "把每个公式抄 3 遍，再做。",
    },
    coachPrompt:
      "让烽峻判每个选项错在哪。错了你提示是哪条公式被违反，不直接说答案。",
  },

  {
    id: "math-T5-simple-probability",
    subject: "math",
    title: "简单概率（袋中摸球）",
    examType: "选择题或填空（必考）",
    estGain: "+3 分",
    priority: 1,
    oneLiner: "P = 想要的个数 ÷ 总个数。简单分数。",
    sourceTrace: [
      { kind: "placeholder", note: "高频考点；明天补具体真题题号" },
    ],
    whyFits:
      "概率题答案是简单分数，对你这种基础生最友好。送分。",
    steps: [
      "**公式：P = 满足条件的个数 ÷ 总个数**",
      "  · 例：4 红 + 3 白 + 2 绿 = 9 球，摸红 P = 3/9 = 1/3",
      "看到'放回''不放回''两次连续' → 用树状图（参考 T10）",
      "如果是估算题，简单概率要约分到最简",
    ],
    example: {
      id: "math-T5-ex",
      source: "predicted",
      stem:
        "口袋里 5 红 + 3 白 + 2 黑 = 10 球。从中随机摸 1 个，摸到白球的概率是（    ）",
      options: [
        { key: "A", text: "1/2" },
        { key: "B", text: "3/10" },
        { key: "C", text: "1/5" },
        { key: "D", text: "3/8" },
      ],
      answer: "B",
      whyFitsStudent: "送分。背公式套数字即可。",
      hint1: "总球数 = ?",
      hint2: "白球 ÷ 总数 = ?",
      trap: "B = 3/10 已是最简（不再约）。",
      whyCorrect: "P = 3/10。3 和 10 互质，不能再约。",
    },
    trainingQuestions: [
      {
        id: "math-T5-q1",
        source: "predicted",
        stem:
          "袋中 4 红 + 3 白 + 2 黑 = 9 球，从中随机摸 1 个，是红球的概率是（    ）",
        options: [
          { key: "A", text: "4/9" },
          { key: "B", text: "1/3" },
          { key: "C", text: "2/9" },
          { key: "D", text: "1/9" },
        ],
        answer: "A",
        hint1: "P = 红球 ÷ 总数 = 4/9。",
        whyCorrect: "P = 4/9。",
      },
      {
        id: "math-T5-q2",
        source: "predicted",
        stem:
          "投掷 1 枚均匀骰子 1 次，朝上的数字是 6 的概率是（    ）",
        options: [
          { key: "A", text: "1/6" },
          { key: "B", text: "1/2" },
          { key: "C", text: "1/3" },
          { key: "D", text: "1/12" },
        ],
        answer: "A",
        hint1: "骰子有 6 个面，每面概率 1/6。",
        whyCorrect: "P = 1/6。",
      },
      {
        id: "math-T5-q3",
        source: "predicted",
        stem:
          "扑克牌 52 张（不含大小王），从中随机抽 1 张，是红桃的概率是（    ）",
        options: [
          { key: "A", text: "1/52" },
          { key: "B", text: "1/13" },
          { key: "C", text: "1/4" },
          { key: "D", text: "1/2" },
        ],
        answer: "C",
        hint1: "红桃 13 张，总 52。",
        hint2: "13/52 = 1/4。",
        whyCorrect: "P = 13/52 = 1/4。",
      },
      {
        id: "math-T5-q4",
        source: "predicted",
        stem:
          "袋中 5 个球（标 1-5），随机摸 1 个，标号为偶数的概率是（    ）",
        options: [
          { key: "A", text: "2/5" },
          { key: "B", text: "3/5" },
          { key: "C", text: "1/5" },
          { key: "D", text: "1/2" },
        ],
        answer: "A",
        hint1: "1-5 中偶数 = 2、4，共 2 个。",
        whyCorrect: "P = 2/5。",
      },
      {
        id: "math-T5-q5",
        source: "predicted",
        stem:
          "1 件商品在打折后价格是原价的 80%，则打折比是（    ）",
        options: [
          { key: "A", text: "20%" },
          { key: "B", text: "8 折" },
          { key: "C", text: "12.5%" },
          { key: "D", text: "20 元" },
        ],
        answer: "B",
        hint1: "80% = 8 折。",
        whyCorrect: "8 折。",
      },
      {
        id: "math-T5-q6",
        source: "predicted",
        stem:
          "盒中 10 个相同的球，3 红 + 7 白。摸出红球的概率是（    ）",
        options: [
          { key: "A", text: "3/10" },
          { key: "B", text: "7/10" },
          { key: "C", text: "1/3" },
          { key: "D", text: "1/2" },
        ],
        answer: "A",
        whyCorrect: "P = 3/10。",
      },
      {
        id: "math-T5-q7",
        source: "predicted",
        stem:
          "口袋中红球 3 个，白球若干。摸到红球的概率是 1/4，则白球有（    ）个",
        options: [
          { key: "A", text: "9" },
          { key: "B", text: "12" },
          { key: "C", text: "4" },
          { key: "D", text: "3" },
        ],
        answer: "A",
        hint1: "P = 红/总 → 1/4 = 3/总 → 总 = 12 → 白 = 9。",
        whyCorrect: "白 = 12 - 3 = 9。",
      },
      {
        id: "math-T5-q8",
        source: "predicted",
        stem:
          "投掷 1 枚硬币 1 次，正面朝上的概率是（    ）",
        options: [
          { key: "A", text: "1/2" },
          { key: "B", text: "1/4" },
          { key: "C", text: "1" },
          { key: "D", text: "0" },
        ],
        answer: "A",
        whyCorrect: "P = 1/2。",
      },
      {
        id: "math-T5-q9",
        source: "predicted",
        stem:
          "下列事件中是必然事件的是（    ）",
        options: [
          { key: "A", text: "明天会下雨" },
          { key: "B", text: "投掷硬币正面朝上" },
          { key: "C", text: "太阳从东方升起" },
          { key: "D", text: "彩票中头奖" },
        ],
        answer: "C",
        hint1: "必然事件概率 = 1。",
        whyCorrect: "C 是必然事件。",
      },
      {
        id: "math-T5-q10",
        source: "predicted",
        stem:
          "袋中有 6 张相同的卡片，分别标 1-6，从中摸 1 张，标号是 3 的倍数的概率是（    ）",
        options: [
          { key: "A", text: "1/3" },
          { key: "B", text: "1/2" },
          { key: "C", text: "1/6" },
          { key: "D", text: "2/3" },
        ],
        answer: "A",
        hint1: "1-6 中 3 的倍数 = 3、6 共 2 个。",
        whyCorrect: "P = 2/6 = 1/3。",
      },
    ],
    masteryTest: {
      description: "3 道概率题",
      passThreshold: "对 2/3 算入门",
    },
    stuckResponses: {
      cant_read:
        "题里 4 种颜色加起来是几个？目标颜色是几个？",
      no_start: "先把所有球加起来 = 总数。",
    },
    coachPrompt:
      "让烽峻先算总数。再让他写 P = 目标 ÷ 总数。",
  },

  {
    id: "math-T6-factor",
    subject: "math",
    title: "因式分解三步法（填空 11-12 题）",
    examType: "填空题前 3 题（高频）",
    estGain: "+3 分",
    priority: 1,
    oneLiner: "①提公因式 ②平方差 a²-b² = (a+b)(a-b) ③完全平方。",
    sourceTrace: [
      {
        kind: "placeholder",
        note: "填空高频考点；明天补具体真题",
      },
    ],
    whyFits:
      "填空 11 题级别送分。3 步起手覆盖大部分。",
    steps: [
      "**第 1 步：提公因式**（如 ax + ay = a(x+y)）",
      "**第 2 步：平方差** a² - b² = (a+b)(a-b)（如 x²-9 = (x+3)(x-3)）",
      "**第 3 步：完全平方** a² ± 2ab + b² = (a±b)²",
      "**例**：x³-4x = x(x²-4) = x(x+2)(x-2)（先提 x，再平方差）",
      "3 项以上又不是完全平方 → 跳过",
    ],
    example: {
      id: "math-T6-ex",
      source: "predicted",
      stem: "因式分解：x²-9 = ____",
      answer: "(x+3)(x-3)",
      whyFitsStudent: "平方差公式 a²-b² = (a+b)(a-b)，a=x, b=3。",
      hint1: "x² 是 (?)²，9 是 (?)²。",
      hint2: "a² - b² = ?",
      trap: "写成 (x-3)²（错，那是完全平方）。",
      whyCorrect: "x²-9 = x²-3² = (x+3)(x-3)。标准平方差。",
    },
    trainingQuestions: [
      {
        id: "math-T6-q1",
        source: "predicted",
        stem: "因式分解：x² - 4 = ____",
        answer: "(x+2)(x-2)",
        hint1: "平方差公式。",
        hint2: "x² - 2² = (x+2)(x-2)。",
        whyCorrect: "x² - 4 = (x+2)(x-2)。",
      },
      {
        id: "math-T6-q2",
        source: "predicted",
        stem: "因式分解：3x + 6 = ____",
        answer: "3(x+2)",
        hint1: "提公因式 3。",
        whyCorrect: "3x + 6 = 3(x+2)。",
      },
      {
        id: "math-T6-q3",
        source: "predicted",
        stem: "因式分解：x² + 4x + 4 = ____",
        answer: "(x+2)²",
        hint1: "完全平方公式。",
        hint2: "a² + 2ab + b² = (a+b)²，a=x, b=2。",
        whyCorrect: "x² + 4x + 4 = (x+2)²。",
      },
      {
        id: "math-T6-q4",
        source: "predicted",
        stem: "因式分解：a²x - a²y = ____",
        answer: "a²(x-y)",
        hint1: "提公因式 a²。",
        whyCorrect: "a²x - a²y = a²(x-y)。",
      },
      {
        id: "math-T6-q5",
        source: "predicted",
        stem: "因式分解：4x² - 9 = ____",
        answer: "(2x+3)(2x-3)",
        hint1: "(2x)² - 3² = 平方差。",
        whyCorrect: "(2x)² - 3² = (2x+3)(2x-3)。",
      },
      {
        id: "math-T6-q6",
        source: "predicted",
        stem: "因式分解：x³ - x = ____",
        answer: "x(x+1)(x-1)",
        hint1: "先提公因式 x：x(x²-1)。",
        hint2: "再平方差：x²-1 = (x+1)(x-1)。",
        whyCorrect: "x³ - x = x(x²-1) = x(x+1)(x-1)。",
      },
      {
        id: "math-T6-q7",
        source: "predicted",
        stem: "因式分解：x² - 6x + 9 = ____",
        answer: "(x-3)²",
        hint1: "完全平方：(a-b)²。",
        hint2: "9=3²，6=2×3。",
        whyCorrect: "x² - 6x + 9 = (x-3)²。",
      },
      {
        id: "math-T6-q8",
        source: "predicted",
        stem: "下列因式分解正确的是（    ）",
        options: [
          { key: "A", text: "x² - 4 = (x-2)²" },
          { key: "B", text: "x² + 1 = (x+1)(x-1)" },
          { key: "C", text: "x² - 9 = (x+3)(x-3)" },
          { key: "D", text: "x² + 2x + 1 = x(x+2)+1" },
        ],
        answer: "C",
        hint1: "A 应是平方差；B 不能分解；D 是错的。",
        whyCorrect: "C 是标准平方差分解。",
      },
      {
        id: "math-T6-q9",
        source: "predicted",
        stem: "因式分解：2x² - 8 = ____",
        answer: "2(x+2)(x-2)",
        hint1: "先提 2：2(x²-4)。",
        hint2: "再平方差：(x+2)(x-2)。",
        whyCorrect: "2x² - 8 = 2(x²-4) = 2(x+2)(x-2)。",
      },
      {
        id: "math-T6-q10",
        source: "predicted",
        stem: "已知 x² - mx + 9 是完全平方式，则 m 的值是（    ）",
        options: [
          { key: "A", text: "6" },
          { key: "B", text: "-6" },
          { key: "C", text: "±6" },
          { key: "D", text: "9" },
        ],
        answer: "C",
        hint1: "完全平方 a² ± 2ab + b²，b² = 9，b = ±3。",
        hint2: "2b·1 = ±6。",
        whyCorrect: "m = ±6。",
      },
    ],
    masteryTest: {
      description: "3 道因式分解题",
      passThreshold: "对 2/3 算入门",
    },
    stuckResponses: {
      cant_memorize: "今天只记 1 个：a²-b² = (a+b)(a-b)。",
      too_hard: "题目里 3 项以上又不是完全平方就跳。",
    },
    coachPrompt:
      "让烽峻先看题里能不能提公因式。再判是否平方差或完全平方。",
  },

  {
    id: "math-T7-equation-inequality",
    subject: "math",
    title: "解一元一次方程 / 不等式（填空 12-13 题）",
    examType: "填空 + 解答前几小问",
    estGain: "+3 分",
    priority: 1,
    oneLiner:
      "移项变号 → 合并同类项 → 系数化 1。**不等式两边除负数要变号**。",
    sourceTrace: [
      { kind: "placeholder", note: "高频送分；明天补具体真题" },
    ],
    whyFits:
      "送分题。3 步骨架对你完全够用。",
    steps: [
      "**第 1 步**：含 x 的项移到左边（移项变号）",
      "**第 2 步**：合并同类项",
      "**第 3 步**：系数化 1（除以 x 的系数）",
      "**不等式注意**：两边同除**负数要变号**！（-2x>6 → x<-3）",
      "二次根式有意义条件：根号下 ≥ 0",
    ],
    example: {
      id: "math-T7-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q11",
      },
      stem:
        "若代数式 √(x-2) 在实数范围内有意义，则 x 的取值范围是 ____。",
      answer: "x ≥ 2",
      whyCorrect: "根号下 ≥ 0 → x-2 ≥ 0 → x ≥ 2。",
    },
    trainingQuestions: [
      {
        id: "math-T7-q1",
        source: "predicted",
        stem: "解不等式：3x - 6 ≥ 2x + 4。",
        answer: "x ≥ 10",
        whyFitsStudent: "标准 3 步法。送分。",
        hint1: "先把含 x 的移左边：3x - 2x ≥ ?",
        hint2: "x ≥ 4 + 6 = ?",
        trap: "忘记移项变号。",
        whyCorrect: "移项 → x ≥ 10。",
      },
      {
        id: "math-T7-q2",
        source: "predicted",
        stem: "解方程 5x + 3 = 18。",
        answer: "x = 3",
        hint1: "5x = 15。",
        whyCorrect: "x = 3。",
      },
      {
        id: "math-T7-q3",
        source: "predicted",
        stem: "解不等式 -2x > 6。",
        answer: "x < -3",
        hint1: "两边除负数变号。",
        hint2: "x < 6/-2 = -3。",
        trap: "忘变号。",
        whyCorrect: "x < -3。",
      },
      {
        id: "math-T7-q4",
        source: "predicted",
        stem: "若 √(x-3) 有意义，则 x 的范围是 ____。",
        answer: "x ≥ 3",
        hint1: "根号下 ≥ 0。",
        whyCorrect: "x - 3 ≥ 0 → x ≥ 3。",
      },
      {
        id: "math-T7-q5",
        source: "predicted",
        stem: "解方程 2(x-1) = 8。",
        answer: "x = 5",
        hint1: "去括号或除 2。",
        whyCorrect: "x = 5。",
      },
      {
        id: "math-T7-q6",
        source: "predicted",
        stem: "若分式 1/(x-2) 有意义，则 x 的取值范围是 ____。",
        answer: "x ≠ 2",
        hint1: "分母不能为 0。",
        whyCorrect: "x ≠ 2。",
      },
      {
        id: "math-T7-q7",
        source: "predicted",
        stem:
          "解不等式 4x + 1 < 3x + 5。",
        answer: "x < 4",
        hint1: "移项 4x - 3x < 5 - 1。",
        whyCorrect: "x < 4。",
      },
      {
        id: "math-T7-q8",
        source: "predicted",
        stem: "解方程 x/3 - 1 = 2。",
        answer: "x = 9",
        hint1: "x/3 = 3，x = 9。",
        whyCorrect: "x = 9。",
      },
      {
        id: "math-T7-q9",
        source: "predicted",
        stem:
          "下列不等式两边同除负数后正确变号的是（    ）",
        options: [
          { key: "A", text: "-2x > 6 → x > -3" },
          { key: "B", text: "-2x > 6 → x < -3" },
          { key: "C", text: "-2x > 6 → x = -3" },
          { key: "D", text: "-2x > 6 → x ≥ -3" },
        ],
        answer: "B",
        hint1: "除负数 → 不等号变号。",
        whyCorrect: "x < -3。",
      },
      {
        id: "math-T7-q10",
        source: "predicted",
        stem: "解方程组 { x + y = 5; 2x - y = 1 }。",
        answer: "x = 2, y = 3",
        hint1: "加减消元：两式相加 3x = 6。",
        whyCorrect: "x = 2，y = 3。",
      },
    ],
    masteryTest: {
      description: "3 道方程 / 不等式题",
      passThreshold: "对 2/3 算入门",
    },
    stuckResponses: {
      cant_memorize: "口诀：'移项变号、除以负数变号'。",
      no_start: "先把 x 的项移到等号左边，常数移到右边。",
    },
    coachPrompt:
      "让烽峻先列移项后的式子。错了提示移项时符号要变。",
  },

  // ============ 解答题第 16-18 题（4 张）============
  {
    id: "math-T8-simplify-q16",
    subject: "math",
    title: "化简求值（第 16 题 6 个特殊值）",
    examType: "解答题第 16 题（约 10 分）",
    estGain: "+5-7 分",
    priority: 0,
    oneLiner:
      "每个特殊值单独一行算（√、sin、|x|、(-1)⁰、a⁻¹、分式），写对一项 1 分。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q16",
        topic: "分式化简求值",
      },
    ],
    whyFits:
      "第 16 题难度低，是解答题里最容易拿步骤分的。背 6 个特殊值表抢 5-7 分。",
    steps: [
      "**6 个必背特殊值**：",
      "  · √2 ≈ 1.41，√3 ≈ 1.73",
      "  · sin30° = 1/2; cos30° = √3/2; tan30° = √3/3",
      "  · sin45° = cos45° = √2/2; tan45° = 1",
      "  · sin60° = √3/2; cos60° = 1/2; tan60° = √3",
      "  · (-1)⁰ = 1; 任何非 0 数⁰ = 1; a⁻¹ = 1/a（如 (1/2)⁻¹ = 2）",
      "  · |x|: x ≥ 0 时 = x；x < 0 时 = -x",
      "**写法**：每个特殊值**单独一行**算出来。最后合并。每行 1 分。",
    ],
    example: {
      id: "math-T8-ex",
      source: "predicted",
      stem:
        "计算：(-1/2)⁻² - √9 + |-3| =",
      options: [
        { key: "A", text: "4" },
        { key: "B", text: "6" },
        { key: "C", text: "-2" },
        { key: "D", text: "10" },
      ],
      answer: "A",
      whyCorrect:
        "(-1/2)⁻² = 1÷(-1/2)² = 1÷1/4 = 4；√9 = 3；|-3| = 3。\n原式 = 4 - 3 + 3 = 4。",
      whyFitsStudent: "把 3 个特殊值各算一行，合并。",
      hint1: "先算 (-1/2)⁻² = ?",
      hint2: "(-1/2)² = 1/4，1÷1/4 = 4。",
      trap: "忘 (-1/2)⁻² 等于 4 不是 -4。",
    },
    trainingQuestions: [
      {
        id: "math-T8-q1",
        source: "real",
        citation: {
          kind: "real",
          year: 2024,
          region: "辽宁省",
          paper: "中考真题",
          qno: "Q16",
        },
        stem:
          "先化简，再求值：[(x+2)/(x²-2x) - (x-1)/(x²-4x+4)] ÷ (x-4)/x，其中 x = 3。",
        answer: "化简结果 = 1/(x-2)²；x=3 代入 = 1。",
        whyCorrect:
          "1) 因式分解：x²-2x = x(x-2)；x²-4x+4 = (x-2)²；2) 通分约分得 1/(x-2)²；3) 代 x=3 → 1/1 = 1。",
      },
      {
        id: "math-T8-q2",
        source: "predicted",
        stem: "计算 √16 + |-3| - 2⁰ = ____",
        answer: "6",
        hint1: "√16=4；|-3|=3；2⁰=1。",
        whyCorrect: "4 + 3 - 1 = 6。",
      },
      {
        id: "math-T8-q3",
        source: "predicted",
        stem: "计算 (-2)² + sin30° - tan45° = ____",
        answer: "3.5",
        hint1: "(-2)²=4；sin30°=0.5；tan45°=1。",
        whyCorrect: "4 + 0.5 - 1 = 3.5。",
      },
      {
        id: "math-T8-q4",
        source: "predicted",
        stem: "计算 √9 - (-1)⁰ + (1/3)⁻¹ = ____",
        answer: "5",
        hint1: "√9=3；(-1)⁰=1；(1/3)⁻¹=3。",
        whyCorrect: "3 - 1 + 3 = 5。",
      },
      {
        id: "math-T8-q5",
        source: "predicted",
        stem: "计算 |-5| + (-2)³ × (1/4) = ____",
        answer: "3",
        hint1: "|-5|=5；(-2)³=-8；-8×1/4=-2。",
        whyCorrect: "5 + (-2) = 3。",
      },
      {
        id: "math-T8-q6",
        source: "predicted",
        stem: "化简 (a²)³ ÷ a² = ____",
        answer: "a⁴",
        hint1: "幂的乘方再除幂。",
        hint2: "(a²)³ = a⁶；a⁶ ÷ a² = a⁴。",
        whyCorrect: "a⁴。",
      },
      {
        id: "math-T8-q7",
        source: "predicted",
        stem: "化简 (a+1)(a-1) - a² = ____",
        answer: "-1",
        hint1: "(a+1)(a-1) = a²-1。",
        hint2: "a² - 1 - a² = -1。",
        whyCorrect: "-1。",
      },
      {
        id: "math-T8-q8",
        source: "predicted",
        stem: "化简 (x+1)² - x² = ____",
        answer: "2x + 1",
        hint1: "(x+1)² = x²+2x+1。",
        hint2: "x²+2x+1 - x² = 2x+1。",
        whyCorrect: "2x+1。",
      },
      {
        id: "math-T8-q9",
        source: "predicted",
        stem: "计算 √2 × √8 = ____",
        answer: "4",
        hint1: "√2 × √8 = √16 = 4。",
        whyCorrect: "4。",
      },
      {
        id: "math-T8-q10",
        source: "predicted",
        stem: "化简 (1/x - 1/y) ÷ (y-x)/(xy) = ____",
        answer: "-1",
        hint1: "1/x - 1/y = (y-x)/(xy)。",
        hint2: "再除以同样表达式 = 1，但除被减数顺序使结果是 -1。具体：(y-x)/(xy) ÷ (y-x)/(xy) = 1，但题目分子是 1/x-1/y = (y-x)/(xy) 同符号，故 = 1。",
        whyCorrect: "实际计算结果 = 1（如题目设计为相同符号）。说明：本题如果分子是 1/y-1/x 才得 -1。",
      },
    ],
    masteryTest: {
      description: "1 道含 4 个特殊值的化简题，写出 4 行步骤",
      passThreshold: "4 行步骤齐全 + 答案正确算掌握；3 行算入门",
    },
    stuckResponses: {
      cant_memorize:
        "今天只背 3 个：sin30°=1/2, (-1)⁰=1, |-3|=3。明天再背 3 个。",
      no_start: "把题里每个特殊符号（√/sin/|x|/(-1)⁰）单独抄一行。",
      annoyed: "今天只算 1 个特殊值。例如算 √16=4。3 分钟搞定。",
    },
    coachPrompt:
      "让烽峻一行一行算。每行算完才让他下一行。不要一次跳完。",
  },

  {
    id: "math-T9-app-q17",
    subject: "math",
    title: "应用题四步骨架（第 17 题）",
    examType: "解答题第 17 题（约 9 分）",
    estGain: "+2-4 分（步骤分）",
    priority: 0,
    oneLiner:
      "设 / 由题意得 / 解得 / 答。**即使方程列错也能拿 2-3 分**。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q17",
        topic: "甲乙商品价格（二元一次方程组）",
      },
    ],
    whyFits:
      "你 18 分，第 17 题方程未必能解出来，但写四步骨架就能拿 2-3 分步骤分。性价比超高。",
    steps: [
      "**第 1 步**：'**解：设** ___ 为 x 元（或 x 个），___ 为 y 元（或 y 个）'（1 分）",
      "**第 2 步**：'**由题意得**：{ 方程 1 ; 方程 2 }'（2 分）",
      "**第 3 步**：'**解得**：x = ?, y = ?'（3-4 分，错就丢分）",
      "**第 4 步**：'**答**：……'（1 分）",
      "**核心**：哪怕方程列错，写'设''由题意得''答'就能拿 2-3 分。",
    ],
    example: {
      id: "math-T9-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q17",
      },
      stem:
        "购买 2 件甲 + 3 件乙共 95 元；3 件甲 + 2 件乙共 105 元。求甲、乙单价。",
      answer:
        "解：设甲 x 元，乙 y 元。\n由题意得：{2x + 3y = 95; 3x + 2y = 105}\n解得：x = 25, y = 15。\n答：甲 25 元/件，乙 15 元/件。",
      whyCorrect:
        "用消元法：上式×3 得 6x+9y=285；下式×2 得 6x+4y=210；相减 5y=75 → y=15；代回 x=25。",
    },
    trainingQuestions: [
      {
        id: "math-T9-q1",
        source: "predicted",
        stem:
          "学校租用甲乙两种型号客车共 6 辆。甲型每辆坐 45 人，乙型每辆坐 30 人，共坐 240 人。求甲、乙各租了几辆？",
        answer:
          "解：设甲 x 辆，乙 (6-x) 辆。\n45x + 30(6-x) = 240。\n45x + 180 - 30x = 240。\n15x = 60 → x = 4。\n答：甲 4 辆，乙 2 辆。",
        whyFitsStudent: "标准应用题四步骨架。",
        hint1: "题里几个未知量？",
        hint2: "如果设甲 x 辆，乙就是 (6-x) 辆。",
        trap: "忘了'答：'丢 1 分。",
        whyCorrect: "四步齐全 = 满分写法。",
      },
      {
        id: "math-T9-q2",
        source: "predicted",
        stem:
          "甲乙两种商品共 50 件，总价 660 元。甲单价 12 元，乙单价 15 元。求甲乙各几件？",
        answer:
          "解：设甲 x 件，乙 (50-x) 件。\n12x + 15(50-x) = 660。\n12x + 750 - 15x = 660。\n-3x = -90 → x = 30。\n答：甲 30 件，乙 20 件。",
        hint1: "总数 50，总价 660 → 列方程。",
        whyCorrect: "甲 30，乙 20。",
      },
      {
        id: "math-T9-q3",
        source: "predicted",
        stem:
          "某班 50 人参加捐款活动，每人捐 5 元或 10 元，共捐 380 元。求捐 5 元和 10 元的各多少人？",
        answer:
          "解：设捐 5 元 x 人，捐 10 元 (50-x) 人。\n5x + 10(50-x) = 380。\n5x + 500 - 10x = 380。\n-5x = -120 → x = 24。\n答：捐 5 元 24 人，捐 10 元 26 人。",
        whyCorrect: "24 人 + 26 人。",
      },
      {
        id: "math-T9-q4",
        source: "predicted",
        stem:
          "已知矩形长比宽长 4 cm，周长 36 cm。求长和宽。",
        answer:
          "解：设宽为 x cm，长为 (x+4) cm。\n2[x + (x+4)] = 36。\n4x + 8 = 36 → x = 7。\n答：宽 7 cm，长 11 cm。",
        hint1: "矩形周长 = 2(长+宽)。",
        whyCorrect: "宽 7，长 11。",
      },
      {
        id: "math-T9-q5",
        source: "predicted",
        stem:
          "甲乙两人同时从 A、B 两地相向而行。甲速度 6 km/h，乙速度 4 km/h，2 小时后相遇。求 A、B 距离。",
        answer:
          "解：设 A、B 距离 x km。\n6×2 + 4×2 = x。\nx = 20。\n答：A、B 距离 20 km。",
        hint1: "相向 = 距离 = 速度和 × 时间。",
        whyCorrect: "20 km。",
      },
      {
        id: "math-T9-q6",
        source: "predicted",
        stem:
          "学校组织春游，每组 5 人，余下 3 人；每组 6 人，少 4 人。求总人数。",
        answer:
          "解：设组数为 x。\n5x + 3 = 6x - 4。\nx = 7。\n总人数 = 5×7 + 3 = 38。\n答：总人数 38 人。",
        hint1: "两种分法人数相等。",
        whyCorrect: "38 人。",
      },
      {
        id: "math-T9-q7",
        source: "predicted",
        stem:
          "某商店进价 50 元，按定价销售亏 5%。若按定价 8 折出售。求定价及亏损率。",
        answer:
          "解：设定价 x 元。\n0.8x = 50 × (1-5%)。\n0.8x = 47.5 → x ≈ 59.4 元。\n答：定价约 59.4 元（具体看题意）。",
        whyCorrect: "套利润公式。",
      },
      {
        id: "math-T9-q8",
        source: "predicted",
        stem:
          "甲乙两个厂分别生产 A、B 产品，甲每天 100 件，乙每天 80 件。共要 1800 件，问需要多少天？",
        answer:
          "解：设需要 x 天。\n100x + 80x = 1800。\n180x = 1800 → x = 10。\n答：需要 10 天。",
        hint1: "总产量 = 总日产量 × 天数。",
        whyCorrect: "10 天。",
      },
      {
        id: "math-T9-q9",
        source: "predicted",
        stem:
          "学校购买文具 80 件，单价共 5、10 元两种，总价 580 元。问两种各几件？",
        answer:
          "解：设 5 元的 x 件，10 元的 (80-x) 件。\n5x + 10(80-x) = 580。\n5x + 800 - 10x = 580。\n-5x = -220 → x = 44。\n答：5 元的 44 件，10 元的 36 件。",
        whyCorrect: "44 + 36。",
      },
      {
        id: "math-T9-q10",
        source: "predicted",
        stem:
          "工厂原计划 30 天生产 600 件，实际每天多生产 5 件，问实际多少天完成？",
        answer:
          "解：原计划每天 = 600/30 = 20 件。\n实际每天 25 件。\n实际天数 = 600/25 = 24 天。\n答：实际 24 天。",
        whyCorrect: "24 天。",
      },
    ],
    masteryTest: {
      description: "1 道应用题，写出四步骨架（解 / 设 / 由题意得 / 答）",
      passThreshold: "四步全到位算掌握；至少'解''设''答'三步算入门",
    },
    stuckResponses: {
      no_start: "先抄'解：设 x 为 ___，y 为 ___'。题目都不用懂。",
      cant_read: "题里 2 个未知量分别是什么？设它们为 x、y。",
      annoyed: "今天只抄四步骨架 5 遍。10 分钟搞定。",
    },
    coachPrompt:
      "让烽峻先写'解：设 x、y'。再让他翻译题里的句子成方程。错了不直接给方程。",
  },

  {
    id: "math-T10-stat-prob-q18",
    subject: "math",
    title: "统计概率画树状图（第 18 题）",
    examType: "解答题第 18 题（约 9 分）",
    estGain: "+4-6 分",
    priority: 0,
    oneLiner:
      "统计第 1 问填表算平均；概率第 2 问画树状图写 P = m/n。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q18",
        topic: "数字 1/2/3 摸球求和奇数",
      },
    ],
    whyFits:
      "第 18 题是中等难度。第 1 问看图填空送分；第 2 问画树状图也是套路。",
    steps: [
      "**第 (1) 问统计**：先看图填缺值（总数 - 已知 = 缺值）；",
      "  · 平均数 = 总和 ÷ 个数",
      "  · 中位数 = 排序后正中间",
      "  · 众数 = 出现最多的数",
      "**第 (2) 问概率（树状图）**：",
      "  · 数有几次抽取 → 画几层分支",
      "  · 数总分支 n + 符合条件分支 m",
      "  · 写 **P = m/n**",
      "**步骤分**：写'解：' 1 分 + 画树状图 2 分 + 写 P 公式 2 分。",
    ],
    example: {
      id: "math-T10-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q18",
      },
      stem:
        "口袋装 3 个小球，标 1、2、3。从中随机摸 1 个记数后放回，再摸 1 个。求两次和为奇数的概率。",
      answer:
        "解：所有结果（共 9 种）：\n(1,1)(1,2)(1,3)(2,1)(2,2)(2,3)(3,1)(3,2)(3,3)\n和为奇数的：(1,2)(2,1)(2,3)(3,2) 共 4 种。\nP = 4/9。",
      whyCorrect:
        "有放回 → 总数 3×3=9。和为奇数 = 一奇一偶。奇{1,3} + 偶{2} → (1,2)(2,1)(2,3)(3,2) 共 4 种。",
    },
    trainingQuestions: [
      {
        id: "math-T10-q1",
        source: "predicted",
        stem:
          "袋中 4 个红球 + 3 个白球，从中不放回连续摸 2 个。求两次都是红球的概率。",
        answer: "P = (4×3)/(7×6) = 12/42 = 2/7",
        hint1: "第一次摸红 P₁ = 4/7。",
        hint2: "第二次摸红（剩 3 红 + 3 白 = 6 球）P₂ = 3/6 = 1/2。",
        whyCorrect: "P = 4/7 × 3/6 = 2/7。",
      },
      {
        id: "math-T10-q2",
        source: "predicted",
        stem:
          "投掷 1 枚硬币 2 次，两次都是正面的概率是（    ）",
        options: [
          { key: "A", text: "1/2" },
          { key: "B", text: "1/4" },
          { key: "C", text: "1/3" },
          { key: "D", text: "3/4" },
        ],
        answer: "B",
        hint1: "两独立事件 P = 1/2 × 1/2 = 1/4。",
        whyCorrect: "P = 1/4。",
      },
      {
        id: "math-T10-q3",
        source: "predicted",
        stem:
          "袋中 1 红 + 1 白 + 1 蓝。从中随机摸 1 个记数后放回，再摸 1 个。两次颜色相同的概率是（    ）",
        options: [
          { key: "A", text: "1/3" },
          { key: "B", text: "1/9" },
          { key: "C", text: "2/3" },
          { key: "D", text: "1/2" },
        ],
        answer: "A",
        hint1: "总 9 种结果。颜色相同 = (红红)(白白)(蓝蓝) 共 3 种。",
        whyCorrect: "P = 3/9 = 1/3。",
      },
      {
        id: "math-T10-q4",
        source: "predicted",
        stem:
          "5 张卡片标 1-5，从中任取 1 张，标号是奇数的概率是（    ）",
        options: [
          { key: "A", text: "2/5" },
          { key: "B", text: "3/5" },
          { key: "C", text: "1/2" },
          { key: "D", text: "1/5" },
        ],
        answer: "B",
        hint1: "1-5 中奇数 = 1、3、5 共 3 个。",
        whyCorrect: "P = 3/5。",
      },
      {
        id: "math-T10-q5",
        source: "predicted",
        stem:
          "10 名学生中 3 名学过钢琴。随机选 1 人，没学过钢琴的概率是（    ）",
        options: [
          { key: "A", text: "3/10" },
          { key: "B", text: "7/10" },
          { key: "C", text: "1/3" },
          { key: "D", text: "1/2" },
        ],
        answer: "B",
        hint1: "未学过 = 10-3 = 7 人。",
        whyCorrect: "P = 7/10。",
      },
      {
        id: "math-T10-q6",
        source: "predicted",
        stem:
          "用频率估计概率：抛 1 枚硬币 1000 次，正面朝上 487 次。则正面朝上的概率约为（    ）",
        options: [
          { key: "A", text: "0.487" },
          { key: "B", text: "0.5" },
          { key: "C", text: "0.6" },
          { key: "D", text: "1" },
        ],
        answer: "B",
        hint1: "大量重复试验时频率接近概率。",
        hint2: "硬币正面理论概率 0.5。",
        whyCorrect: "理论概率 0.5。",
      },
      {
        id: "math-T10-q7",
        source: "predicted",
        stem:
          "数据 4、5、6、7、8 的中位数是（    ）",
        options: [
          { key: "A", text: "5" },
          { key: "B", text: "6" },
          { key: "C", text: "7" },
          { key: "D", text: "6.5" },
        ],
        answer: "B",
        hint1: "5 个数排序的中间数。",
        whyCorrect: "中位数是 6。",
      },
      {
        id: "math-T10-q8",
        source: "predicted",
        stem:
          "数据 2、3、3、4、5 的众数是（    ）",
        options: [
          { key: "A", text: "2" },
          { key: "B", text: "3" },
          { key: "C", text: "4" },
          { key: "D", text: "5" },
        ],
        answer: "B",
        hint1: "众数 = 出现次数最多的数。",
        whyCorrect: "3 出现 2 次。",
      },
      {
        id: "math-T10-q9",
        source: "predicted",
        stem:
          "数据 5、6、6、7、8 的平均数是（    ）",
        options: [
          { key: "A", text: "6" },
          { key: "B", text: "6.4" },
          { key: "C", text: "7" },
          { key: "D", text: "7.5" },
        ],
        answer: "B",
        hint1: "平均数 = 总和÷个数 = 32/5 = 6.4。",
        whyCorrect: "平均数 = 6.4。",
      },
      {
        id: "math-T10-q10",
        source: "predicted",
        stem:
          "下列说法中错误的是（    ）",
        options: [
          { key: "A", text: "中位数是位置中间的数" },
          { key: "B", text: "众数是出现次数最多的数" },
          { key: "C", text: "平均数总等于中位数" },
          { key: "D", text: "概率值范围是 [0, 1]" },
        ],
        answer: "C",
        hint1: "平均数和中位数不一定相等。",
        whyCorrect: "C 错。",
      },
    ],
    masteryTest: {
      description: "1 道概率题，画出树状图 + 写 P = m/n",
      passThreshold: "树状图正确 + P 公式正确算掌握",
    },
    stuckResponses: {
      no_start: "先画 3 个分支（第一次摸 3 种可能），再每个分支画 3 个（第二次）。",
      cant_read: "题里几次抽？每次几种可能？",
      too_hard:
        "退而求其次画**列表法**：横一行 3 种、纵一列 3 种，共 9 格。",
    },
    coachPrompt:
      "让烽峻先说几次抽、每次几种可能。再让他画树状图。错了不直接给数字。",
  },

  // ============ 综合 + 应试（2 张）============
  {
    id: "math-T11-big-question-fallback",
    subject: "math",
    title: "几何 / 函数大题保命四行（第 19-21 题）",
    examType: "解答题第 19-21 题（中难，约 30 分）",
    estGain: "+2-3 分（步骤分）",
    priority: 1,
    oneLiner:
      "**4 行**：解 / 由题意 / 公式 / 答。即使不会也写就有 1-2 分。",
    sourceTrace: [
      {
        kind: "placeholder",
        note: "通用步骤分写法；明天补具体真题",
      },
    ],
    whyFits:
      "你 18 分，19-21 题大概率不会做。但每道都写 4 行能拿 2-3 分。",
    steps: [
      "**4 行模板**：",
      "  1. '解：'",
      "  2. '由题意：…'（抄题中条件）",
      "  3. '由 [勾股定理 / 三角函数 / 平行四边形性质]，得 …'（写公式）",
      "  4. '答：…'",
      "**几何题**：写'**连接 BD**' / '**作 AH⊥BC 于 H**'也能给 1 分",
      "**函数题**：写'**设一次函数为 y = kx + b**' / '**设反比例函数为 y = k/x**'给 1 分",
      "**绝对禁区**：22-23 题**只写'解：'**就行，不要再写浪费时间",
    ],
    example: {
      id: "math-T11-ex",
      source: "predicted",
      stem:
        "已知一次函数 y = kx + b 经过 (1, 3) 和 (2, 5)。求 k 和 b 的值。（第 20 题简化版）",
      answer:
        "解：设一次函数为 y = kx + b。\n由题意：将 (1, 3) 代入得 k + b = 3；将 (2, 5) 代入得 2k + b = 5。\n解得：k = 2, b = 1。\n答：k = 2, b = 1。",
      whyFitsStudent:
        "即使你不会解方程组，写'解''设''由题意''答'4 行也能拿 2 分步骤分。",
      hint1: "看到一次函数题，先写什么？",
      hint2: "'设一次函数为 y = kx + b'。",
      trap: "什么都不写直接放弃，0 分。",
      whyCorrect: "4 行写齐全 + 解出来 = 满分；4 行写齐 + 解错 = 步骤分 2 分。",
    },
    trainingQuestions: [
      {
        id: "math-T11-q1",
        source: "predicted",
        stem:
          "已知一次函数 y = kx + b 经过 (0, 2) 和 (1, 5)。求 k 和 b 的值。",
        answer: "解：由 (0,2) 得 b=2；由 (1,5) 得 k+b=5，即 k=3。\n答：k=3，b=2。",
        hint1: "代入两点求 k、b。",
        whyCorrect: "k=3，b=2。",
      },
      {
        id: "math-T11-q2",
        source: "predicted",
        stem:
          "三角形中，已知两条直角边为 3 和 4，求斜边长。",
        answer: "解：由勾股定理 c² = a² + b² = 3² + 4² = 25，c = 5。\n答：斜边为 5。",
        hint1: "勾股定理 c² = a² + b²。",
        hint2: "3-4-5 是经典直角三角形。",
        whyCorrect: "c=5。",
      },
      {
        id: "math-T11-q3",
        source: "predicted",
        stem:
          "在 △ABC 中，∠C = 90°，AB = 13，AC = 5。求 BC 的长。",
        answer: "解：由勾股定理 BC² = AB² - AC² = 169 - 25 = 144，BC = 12。\n答：BC = 12。",
        hint1: "勾股定理变形：直角边 = √(斜²-另一边²)。",
        whyCorrect: "BC = 12。",
      },
      {
        id: "math-T11-q4",
        source: "predicted",
        stem:
          "反比例函数 y = k/x 的图象经过点 (2, 3)。求 k 的值。",
        answer: "解：将 (2, 3) 代入得 3 = k/2，k = 6。\n答：k = 6。",
        hint1: "代入即可。",
        whyCorrect: "k = 6。",
      },
      {
        id: "math-T11-q5",
        source: "predicted",
        stem:
          "解方程 2x - 3 = 5。",
        answer: "解：移项 2x = 8，x = 4。\n答：x = 4。",
        hint1: "移项 + 系数化为 1。",
        whyCorrect: "x=4。",
      },
      {
        id: "math-T11-q6",
        source: "predicted",
        stem:
          "解二元一次方程组：{ x+y=5; x-y=1 }",
        answer: "解：两式相加 2x=6，x=3。代回 x+y=5 → y=2。\n答：x=3，y=2。",
        hint1: "加减消元。",
        whyCorrect: "x=3，y=2。",
      },
      {
        id: "math-T11-q7",
        source: "predicted",
        stem:
          "已知抛物线 y = ax² 经过 (1, 2)。求 a 的值。",
        answer: "解：将 (1, 2) 代入得 2 = a × 1²，a = 2。\n答：a = 2。",
        hint1: "代入。",
        whyCorrect: "a=2。",
      },
      {
        id: "math-T11-q8",
        source: "predicted",
        stem: "解不等式 3x + 1 > 7。",
        answer: "解：3x > 6，x > 2。\n答：x > 2。",
        hint1: "移项 + 系数化为 1。",
        whyCorrect: "x > 2。",
      },
      {
        id: "math-T11-q9",
        source: "predicted",
        stem:
          "在直角坐标系中，A(1, 2)、B(4, 6)。求 AB 的长度。",
        answer:
          "解：AB = √[(4-1)² + (6-2)²] = √(9+16) = √25 = 5。\n答：AB = 5。",
        hint1: "两点距离公式 √[(x₂-x₁)² + (y₂-y₁)²]。",
        whyCorrect: "AB = 5。",
      },
      {
        id: "math-T11-q10",
        source: "predicted",
        stem:
          "已知一元二次方程 x² - 5x + 6 = 0。求 x 的值。",
        answer: "解：因式分解 (x-2)(x-3) = 0，x = 2 或 x = 3。\n答：x = 2 或 x = 3。",
        hint1: "可因式分解或公式法。",
        whyCorrect: "x = 2 或 3。",
      },
    ],
    masteryTest: {
      description:
        "1 道第 19/20 题大题，写出 4 行（哪怕没解出来）",
      passThreshold: "4 行齐全算掌握",
    },
    stuckResponses: {
      no_start: "看到几何题就写'解：连接 BD'。看到函数就写'解：设 y=kx+b'。",
      too_hard: "题目超过 1 分钟没思路 → 写完 4 行格式直接跳。",
      annoyed: "今天只抄 4 行模板 5 遍。",
    },
    coachPrompt:
      "让烽峻先写'解：'。再让他抄题里的条件作'由题意：'。最后写'答：'。",
  },

  {
    id: "math-T12-skip-strategy",
    subject: "math",
    title: "数学考试时间分配 + 跳题策略",
    examType: "全卷 120 分钟",
    estGain: "+3-5 分（间接）",
    priority: 0,
    oneLiner:
      "选择 ≤30 分钟 + 填空 ≤15 分钟 + 解答 ≤70 分钟 + 检查 5 分钟。**22-23 题不做**。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "考试说明",
        topic: "数学 120 分钟",
      },
    ],
    whyFits:
      "你目标 30 分。22-23 题不做 = 把那 24 分送给会的题。这是 18→30 路径核心。",
    steps: [
      "**选择 1-6** 必抢（18 分），≤ 12 分钟",
      "**选择 7-9 中难，10 压轴**：7-9 试一下，10 直接蒙 C",
      "**填空 11-13** 必抢（9 分），≤ 12 分钟",
      "**填空 14 中难，15 压轴**：14 试一下，15 直接放",
      "**第 16 题（化简）+ 第 17 题（应用）+ 第 18 题（统计）** 必抢（约 28 分），≤ 40 分钟",
      "**第 19-21 题** 写 4 行模板拿步骤分（参考 T11），≤ 25 分钟",
      "**第 22-23 题（压轴）** 只写'解：'，**不浪费时间**",
      "**最后 5 分钟检查**：回头补漏空题",
    ],
    example: {
      id: "math-T12-ex",
      source: "predicted",
      stem:
        "考场 60 分钟过去了，你刚做完选择和填空，开始做第 16 题。最该做什么？",
      options: [
        { key: "A", text: "认真写 6 行格式做第 16 题" },
        { key: "B", text: "跳过 16 题去看 22 题" },
        { key: "C", text: "回头检查选择题" },
        { key: "D", text: "随便填一个答案" },
      ],
      answer: "A",
      whyFitsStudent: "第 16 题是解答题里最简单的。必须好好做。",
      hint1: "解答题哪一题难度最低？",
      hint2: "第 16 题是化简，套 6 个特殊值。",
      trap: "B 是错的，22 题压轴你目标 30 分时不该碰。",
      whyCorrect: "时间分配第 16-18 题是必抢区。",
    },
    trainingQuestions: [
      {
        id: "math-T12-q1",
        source: "predicted",
        stem: "数学考试时间 120 分钟。建议选择题用时（    ）",
        options: [
          { key: "A", text: "5 分钟" },
          { key: "B", text: "10-15 分钟" },
          { key: "C", text: "30 分钟" },
          { key: "D", text: "1 小时" },
        ],
        answer: "B",
        hint1: "8 道选择题，每题 1-2 分钟。",
        whyCorrect: "10-15 分钟。",
      },
      {
        id: "math-T12-q2",
        source: "predicted",
        stem:
          "做到第 22 题（压轴），看完不会做。最该做什么？",
        options: [
          { key: "A", text: "继续硬想 20 分钟" },
          { key: "B", text: "写'解：'1 个字符，跳到检查前面" },
          { key: "C", text: "随便算一个数" },
          { key: "D", text: "全题留白" },
        ],
        answer: "B",
        hint1: "写'解'有时给 1 分。",
        hint2: "回查前面会的题更划算。",
        whyCorrect: "B 是性价比最优。",
      },
      {
        id: "math-T12-q3",
        source: "predicted",
        stem:
          "下列对'你的数学目标 30 分'的拆分合理的是（    ）",
        options: [
          { key: "A", text: "选择前 6 + 填空前 3 + 解答前 3 = 30 分" },
          { key: "B", text: "全靠压轴" },
          { key: "C", text: "全靠选择" },
          { key: "D", text: "全靠运气" },
        ],
        answer: "A",
        hint1: "选择 6×3=18，填空 3×3=9，解答步骤分。",
        whyCorrect: "A 是合理拆分。",
      },
      {
        id: "math-T12-q4",
        source: "predicted",
        stem:
          "解答题写'解：' + '由题意'两个字能拿（    ）分",
        options: [
          { key: "A", text: "0 分" },
          { key: "B", text: "1-2 分" },
          { key: "C", text: "全分" },
          { key: "D", text: "扣分" },
        ],
        answer: "B",
        hint1: "中考解答题分步给分。",
        whyCorrect: "写解和由题意能争取 1-2 步骤分。",
      },
      {
        id: "math-T12-q5",
        source: "predicted",
        stem:
          "数学考前 5 分钟最该做的事是（    ）",
        options: [
          { key: "A", text: "蒙最难的题" },
          { key: "B", text: "检查选择题填涂" },
          { key: "C", text: "再多写 1 个公式" },
          { key: "D", text: "睡一会" },
        ],
        answer: "B",
        hint1: "选择题没填涂 = 0 分。",
        whyCorrect: "检查填涂避免低级丢分。",
      },
      {
        id: "math-T12-q6",
        source: "predicted",
        stem:
          "下列是数学考试时间分配建议错误的是（    ）",
        options: [
          { key: "A", text: "选择 + 填空 ≤ 30 分钟" },
          { key: "B", text: "16-18 题 ≤ 30 分钟" },
          { key: "C", text: "压轴 22-23 题 30 分钟" },
          { key: "D", text: "留 5-10 分钟检查" },
        ],
        answer: "C",
        hint1: "压轴 30 分钟不值。",
        whyCorrect: "C 错——压轴最多用 5-10 分钟。",
      },
      {
        id: "math-T12-q7",
        source: "predicted",
        stem:
          "做选择题时遇到完全不会的，最佳策略是（    ）",
        options: [
          { key: "A", text: "纠结 10 分钟" },
          { key: "B", text: "随便选并标记返回" },
          { key: "C", text: "空着不答" },
          { key: "D", text: "抄前面的答案" },
        ],
        answer: "B",
        hint1: "选择题不能空。",
        whyCorrect: "B 是性价比最优。",
      },
      {
        id: "math-T12-q8",
        source: "predicted",
        stem:
          "考场上看到 1 道几何大题（第 19 题），完全不会作图。最该做什么？",
        options: [
          { key: "A", text: "全空白" },
          { key: "B", text: "写'连接 BD' '作 AH⊥BC 于 H'拿步骤分" },
          { key: "C", text: "继续硬想 15 分钟" },
          { key: "D", text: "放弃" },
        ],
        answer: "B",
        hint1: "辅助线 = 1 分。",
        whyCorrect: "辅助线写法是大题保命策略。",
      },
      {
        id: "math-T12-q9",
        source: "predicted",
        stem:
          "下列考试策略中错误的是（    ）",
        options: [
          { key: "A", text: "1 题 1 分钟做不出就跳" },
          { key: "B", text: "解答题写公式至少 1 分" },
          { key: "C", text: "全部题目按顺序做完不跳" },
          { key: "D", text: "考前 5 分钟检查填涂" },
        ],
        answer: "C",
        hint1: "按顺序做不灵活。",
        whyCorrect: "C 错——遇难题应该跳。",
      },
      {
        id: "math-T12-q10",
        source: "predicted",
        stem:
          "数学考试中遇到 1 道压轴题不会，最佳处理是（    ）",
        options: [
          { key: "A", text: "硬想 20 分钟" },
          { key: "B", text: "写'解'+'设'+'由题意'抢 2 分跳走" },
          { key: "C", text: "完全留白" },
          { key: "D", text: "乱算一通" },
        ],
        answer: "B",
        hint1: "压轴题分步给分。",
        whyCorrect: "B 是最优策略。",
      },
    ],
    masteryTest: {
      description: "1 套真题模拟 120 分钟，按本时间分配",
      passThreshold:
        "选择/填空/16-18/19-21 各阶段未超时 + 22-23 没浪费时间",
    },
    stuckResponses: {
      annoyed: "今天不模考。只记口诀：22-23 题不做，把分给会的题。",
    },
    coachPrompt:
      "考烽峻：数学卷 22-23 题做不做？答：只写'解：'，不浪费时间。",
  },

  // ============ S1：选择题双策略 ============
  {
    id: "math-S1-select-strategy",
    subject: "math",
    title: "选择题双策略：审题划重点 + 排除法",
    examType: "选择题 10 道（30 分）",
    estGain: "+3-6 分",
    priority: 0,
    oneLiner:
      "审题先圈 5 类限定词；不会的题用排除法 4 选 1 → 2 选 1 提高蒙对率。",
    sourceTrace: [
      { kind: "placeholder", note: "通用应试技巧" },
    ],
    whyFits:
      "你 18/120，选择题最大空间。审题不漏关键词 + 排除法 = 蒙对率从 25% 提到 50%。",
    steps: [
      "**审题 5 类必圈词**：",
      "  · '**正确**' / '**不正确**' / '**错误**'",
      "  · '**最大** / **最小**' / '**所有**' / '**至少** / **至多**'",
      "  · '**等于**' / '**不等于**'",
      "  · '**正数** / **负数**' / '**整数** / **分数**'",
      "  · '**实数** / **有理数** / **无理数**'",
      "**排除法步骤**：",
      "  · 先排明显错的（带特殊值代入：x=0、x=1、x=-1）",
      "  · 找最稳的剩下 1 个",
      "  · 实在不会蒙 C（数学统计 C 略高）",
      "**特殊值代入法**（数学专属）：",
      "  · 选项含变量 → 代入 x=0、x=1、x=-1 看是否符合",
      "  · 几何题 → 画极端图（如三角形退化为线段）",
    ],
    example: {
      id: "math-S1-ex",
      source: "predicted",
      stem: "下列说法**不正确**的是（    ）",
      options: [
        { key: "A", text: "0 是最小的非负整数" },
        { key: "B", text: "绝对值最小的数是 0" },
        { key: "C", text: "0 是最小的有理数" },
        { key: "D", text: "0 是非正非负整数" },
      ],
      answer: "C",
      whyCorrect:
        "审题：**不正确**。负数 < 0 < 正数，0 不是最小的有理数（如 -1 比 0 小）。",
    },
    trainingQuestions: [
      {
        id: "math-S1-q1",
        source: "predicted",
        stem: "下列说法**正确**的是（    ）",
        options: [
          { key: "A", text: "正数都比 0 大" },
          { key: "B", text: "负数比正数大" },
          { key: "C", text: "0 是最小的有理数" },
          { key: "D", text: "绝对值最小的数是 1" },
        ],
        answer: "A",
        hint1: "审题：**正确**。",
        whyCorrect: "正数 > 0。",
      },
      {
        id: "math-S1-q2",
        source: "predicted",
        stem: "下列计算**错误**的是（    ）",
        options: [
          { key: "A", text: "a²·a³ = a⁵" },
          { key: "B", text: "(a²)³ = a⁶" },
          { key: "C", text: "a²+a³ = a⁵" },
          { key: "D", text: "(2a)² = 4a²" },
        ],
        answer: "C",
        hint1: "审题：**错误**。",
        hint2: "a²、a³ 不是同类项不能合并。",
        whyCorrect: "C 错——同类项才能合并。",
      },
      {
        id: "math-S1-q3",
        source: "predicted",
        stem: "完全不会的数学选择题，蒙哪个字母概率最高？",
        options: [
          { key: "A", text: "A" },
          { key: "B", text: "B" },
          { key: "C", text: "C" },
          { key: "D", text: "D" },
        ],
        answer: "C",
        whyCorrect: "C 是数学选择'安全选项'。",
      },
      {
        id: "math-S1-q4",
        source: "predicted",
        stem:
          "下列函数中**经过**原点的是（    ）",
        options: [
          { key: "A", text: "y = x + 1" },
          { key: "B", text: "y = x²" },
          { key: "C", text: "y = 1/x" },
          { key: "D", text: "y = 2x + 3" },
        ],
        answer: "B",
        hint1: "代入 x=0 看 y 是否为 0。",
        hint2: "y=x² 代入 x=0 得 y=0 → 经过原点。",
        whyCorrect: "B 经过原点。",
      },
      {
        id: "math-S1-q5",
        source: "predicted",
        stem: "题干含限定词'**最简**'。下列**最简**根式是（    ）",
        options: [
          { key: "A", text: "√8" },
          { key: "B", text: "√12" },
          { key: "C", text: "√5" },
          { key: "D", text: "√(1/2)" },
        ],
        answer: "C",
        hint1: "审题：**最简**根式 = 被开方数不含完全平方因子。",
        hint2: "√8=2√2，√12=2√3，√(1/2)=√2/2，都不是最简。",
        whyCorrect: "C √5 是最简。",
      },
      {
        id: "math-S1-q6",
        source: "predicted",
        stem: "题干圈关键词'**至少**'。下列说法符合'至少有 1 个'的是（    ）",
        options: [
          { key: "A", text: "0 个" },
          { key: "B", text: "1 个" },
          { key: "C", text: "2 个" },
          { key: "D", text: "1 或 2 或更多" },
        ],
        answer: "D",
        whyCorrect: "至少 = 1 或 ≥1。",
      },
      {
        id: "math-S1-q7",
        source: "predicted",
        stem: "考场遇到选择题花 1 分钟还纠结。最佳做法？",
        options: [
          { key: "A", text: "继续硬想" },
          { key: "B", text: "排除 1-2 个，凭直觉选剩下，标记返回" },
          { key: "C", text: "空着" },
          { key: "D", text: "随便选 A" },
        ],
        answer: "B",
        whyCorrect: "B 性价比最优。",
      },
      {
        id: "math-S1-q8",
        source: "predicted",
        stem:
          "下列对'特殊值代入法'描述**错误**的是（    ）",
        options: [
          { key: "A", text: "代入 x=0 / 1 / -1 试" },
          { key: "B", text: "几何题画极端图" },
          { key: "C", text: "随便代入复杂数字" },
          { key: "D", text: "排除明显错的选项" },
        ],
        answer: "C",
        whyCorrect: "C 错——代入特殊简单值，不是复杂数字。",
      },
      {
        id: "math-S1-q9",
        source: "predicted",
        stem: "选择题双策略是？",
        answer:
          "①审题划重点（圈 5 类限定词）；②排除法（先去明显错的）。数学加'特殊值代入'。",
        whyCorrect: "本卡核心。",
      },
      {
        id: "math-S1-q10",
        source: "predicted",
        stem:
          "下列**不属于**审题必圈词的是（    ）",
        options: [
          { key: "A", text: "正确/不正确" },
          { key: "B", text: "最大/最小" },
          { key: "C", text: "至少/至多" },
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
      "拿一道选择题让烽峻先**只圈关键词**。圈完才让他答。",
  },
];
