import { Technique } from "@/lib/types";

/**
 * 物理 技巧库
 * 学生现状：36/90 → 目标 45（+9 分）
 * 卷面：笔试 80 + 实验操作 10
 * 笔试 80 = 单选 6×2 + 多选 3×2 + 填空 12 + 作图 4 + 实验 24 + 计算 22
 */

export const PHYSICS_TECHNIQUES: Technique[] = [
  // ============ 选择题 + 填空（5 张）============
  {
    id: "phy-T1-five-formulas",
    subject: "physics",
    title: "5 大公式识别（电学 + 力学）",
    examType: "选择 + 填空 + 计算（每年必考）",
    estGain: "+4-6 分",
    priority: 0,
    oneLiner: "v=s/t；ρ=m/V；p=F/S；I=U/R；P=UI。背完 5 个公式 + 单位 = 抢分。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q5",
        topic: "电路问题（涉及 P=UI）",
        url: "https://zy.21cnjy.com/20856040",
      },
      {
        kind: "placeholder",
        note: "5 公式在每年真题里反复出现；明天补具体题号",
      },
    ],
    whyFits:
      "你 36 分。这 5 个公式覆盖物理 60% 以上的计算。背完抢 4-6 分稳如山。",
    steps: [
      "**速度** v = s/t（v 单位 m/s 或 km/h；s 单位 m 或 km；t 单位 s 或 h）",
      "**密度** ρ = m/V（ρ 单位 kg/m³ 或 g/cm³；水 ρ = 1.0×10³ kg/m³ = 1 g/cm³）",
      "**压强** p = F/S（p 单位 Pa；S 单位 m²；液体压强 p = ρgh）",
      "**欧姆定律** I = U/R（I 单位 A；U 单位 V；R 单位 Ω）",
      "**电功率** P = UI（也可 P = U²/R = I²R；单位 W）",
      "**阿基米德浮力** F浮 = ρ液 g V排（额外送）",
    ],
    example: {
      id: "phy-T1-ex",
      source: "predicted",
      stem:
        "导体两端电压 6V，通过电流 0.3A，导体电阻是（    ）",
      options: [
        { key: "A", text: "1.8Ω" },
        { key: "B", text: "2Ω" },
        { key: "C", text: "18Ω" },
        { key: "D", text: "20Ω" },
      ],
      answer: "D",
      whyCorrect: "R = U/I = 6 / 0.3 = 20 Ω。",
      whyFitsStudent: "标准欧姆定律。送分。",
      hint1: "欧姆定律 3 个量：U、I、R。求 R 用什么公式？",
      hint2: "R = U÷I = 6÷0.3 = 60÷3 = 20。",
      trap: "1.8 是 6×0.3 公式用错；2 是 6÷3 小数点错。",
    },
    trainingQuestions: [
      {
        id: "phy-T1-q1",
        source: "predicted",
        stem: "电压 U=10V，电阻 R=5Ω，则电流 I 等于（    ）",
        options: [
          { key: "A", text: "2 A" },
          { key: "B", text: "0.5 A" },
          { key: "C", text: "50 A" },
          { key: "D", text: "15 A" },
        ],
        answer: "A",
        hint1: "I = U/R。",
        hint2: "10/5 = 2。",
        whyCorrect: "I = 10/5 = 2 A。",
      },
      {
        id: "phy-T1-q2",
        source: "predicted",
        stem: "某物体质量 60 kg，体积 30 dm³，密度是（    ）",
        options: [
          { key: "A", text: "2 kg/dm³" },
          { key: "B", text: "2×10³ kg/m³" },
          { key: "C", text: "0.5 kg/dm³" },
          { key: "D", text: "1800 kg/m³" },
        ],
        answer: "B",
        hint1: "ρ = m/V = 60/30 = 2 kg/dm³。",
        hint2: "1 kg/dm³ = 1000 kg/m³，所以 2 kg/dm³ = 2000 = 2×10³ kg/m³。",
        trap: "A 单位不规范（应换算成 kg/m³ 或 g/cm³）。",
        whyCorrect: "ρ = m/V = 60/30 kg/dm³ = 2×10³ kg/m³。",
      },
      {
        id: "phy-T1-q3",
        source: "predicted",
        stem: "汽车 30 分钟行驶 36 km，平均速度是（    ）",
        options: [
          { key: "A", text: "72 km/h" },
          { key: "B", text: "1080 km/h" },
          { key: "C", text: "20 m/s" },
          { key: "D", text: "1.2 km/h" },
        ],
        answer: "A",
        hint1: "v = s/t = 36/0.5 = 72 km/h。",
        hint2: "30 min = 0.5 h。",
        whyCorrect: "36 km / 0.5 h = 72 km/h。",
      },
      {
        id: "phy-T1-q4",
        source: "predicted",
        stem:
          "灯泡两端电压 220 V，通过电流 0.5 A，灯泡的电功率是（    ）",
        options: [
          { key: "A", text: "440 W" },
          { key: "B", text: "110 W" },
          { key: "C", text: "11 W" },
          { key: "D", text: "44 W" },
        ],
        answer: "B",
        hint1: "P = UI。",
        hint2: "220 × 0.5 = 110。",
        whyCorrect: "P = 220 × 0.5 = 110 W。",
      },
      {
        id: "phy-T1-q5",
        source: "predicted",
        stem: "压力 100 N，受力面积 0.5 m²，压强是（    ）",
        options: [
          { key: "A", text: "50 Pa" },
          { key: "B", text: "200 Pa" },
          { key: "C", text: "0.005 Pa" },
          { key: "D", text: "100.5 Pa" },
        ],
        answer: "B",
        hint1: "p = F/S = 100/0.5。",
        hint2: "100/0.5 = 200。",
        trap: "F=100 看起来要除以 S，但小心 S = 0.5 不是 5。",
        whyCorrect: "p = 100/0.5 = 200 Pa。",
      },
      {
        id: "phy-T1-q6",
        source: "predicted",
        stem:
          "下列公式表达正确的是（    ）",
        options: [
          { key: "A", text: "v = t/s" },
          { key: "B", text: "ρ = V/m" },
          { key: "C", text: "I = R/U" },
          { key: "D", text: "P = UI" },
        ],
        answer: "D",
        hint1: "v=s/t；ρ=m/V；I=U/R；P=UI。",
        hint2: "其他三个分子分母都倒了。",
        whyCorrect: "P = UI 是电功率正确公式。",
      },
      {
        id: "phy-T1-q7",
        source: "predicted",
        stem:
          "已知水的密度 1.0×10³ kg/m³，求质量 2 kg 水的体积。",
        answer: "2 dm³（或 2×10⁻³ m³ 或 2 L）",
        hint1: "V = m/ρ = 2 / 1×10³ = 0.002 m³。",
        hint2: "0.002 m³ = 2 dm³ = 2 L。",
        whyCorrect: "V = m/ρ = 2/(1.0×10³) = 2×10⁻³ m³。",
      },
      {
        id: "phy-T1-q8",
        source: "predicted",
        stem:
          "电阻 R = 10 Ω，两端电压 U = 5V，通过电流 I = ____ A，1 分钟产生的电热 Q = ____ J。",
        answer: "0.5；15",
        hint1: "I = U/R = 5/10 = 0.5。",
        hint2: "Q = UIt = 5×0.5×60 = 150 J（修正：60 s 不是 1 min × 1）。",
        whyCorrect: "I=0.5 A；Q = UIt = 5×0.5×60 = 150 J（如题给 1 min = 60 s）。",
      },
      {
        id: "phy-T1-q9",
        source: "predicted",
        stem:
          "下列单位换算正确的是（    ）",
        options: [
          { key: "A", text: "1 m/s = 3.6 km/h" },
          { key: "B", text: "1 km/h = 1 m/s" },
          { key: "C", text: "1 g/cm³ = 1 kg/m³" },
          { key: "D", text: "1 kW = 100 W" },
        ],
        answer: "A",
        hint1: "1 m/s = 3.6 km/h（×3.6）。",
        hint2: "1 g/cm³ = 1000 kg/m³；1 kW = 1000 W。",
        whyCorrect: "速度换算关系：1 m/s = 3.6 km/h。",
      },
      {
        id: "phy-T1-q10",
        source: "predicted",
        stem:
          "电流 0.2 A 通过 10 Ω 的电阻，10 s 内电阻产生的热量是（    ）",
        options: [
          { key: "A", text: "4 J" },
          { key: "B", text: "20 J" },
          { key: "C", text: "0.4 J" },
          { key: "D", text: "200 J" },
        ],
        answer: "A",
        hint1: "Q = I²Rt（焦耳定律）。",
        hint2: "Q = (0.2)² × 10 × 10 = 0.04 × 100 = 4 J。",
        whyCorrect: "焦耳定律 Q = I²Rt = 0.04×10×10 = 4 J。",
      },
    ],
    masteryTest: {
      description: "默写 5 个公式 + 每个公式的物理量和单位",
      passThreshold: "5 公式 + 单位都对算掌握；4 个对算入门",
    },
    stuckResponses: {
      cant_memorize: "今天只背 2 个：v=s/t, I=U/R。明天再背 3 个。",
      no_start: "公式总有 3 个变量。题里给了 2 个，求第 3 个。",
    },
    coachPrompt:
      "让烽峻先看题里求什么物理量。再让他选对应公式。1 题 1 题来。",
  },

  {
    id: "phy-T2-state-change",
    subject: "physics",
    title: "物态变化 6 种判断（吸热/放热）",
    examType: "选择 + 填空（每年命中）",
    estGain: "+2-3 分",
    priority: 0,
    oneLiner:
      "熔化/汽化/升华 = 吸热（分散）；凝固/液化/凝华 = 放热（聚拢）。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q2",
        topic: "鸡蛋表面水汽化",
        url: "https://zy.21cnjy.com/20856040",
      },
    ],
    whyFits:
      "口诀'分散吸热聚拢放热'就够。每年命中。",
    steps: [
      "**3 种吸热**：熔化（固→液）/ 汽化（液→气）/ 升华（固→气）",
      "**3 种放热**：凝固（液→固）/ 液化（气→液）/ 凝华（气→固）",
      "**口诀**：分散吸热（变疏松），聚拢放热（变紧密）",
      "**常见现象**：",
      "  · 雾、露 = 液化（气→液）",
      "  · 霜、雪、雾凇 = 凝华（气→固）",
      "  · 冰化水 = 熔化（固→液）",
      "  · 水蒸发 = 汽化（液→气）",
      "  · 樟脑丸变小 = 升华（固→气）",
    ],
    example: {
      id: "phy-T2-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q2",
      },
      stem:
        "刚煮熟的鸡蛋从热水中取出后，表面的水很快不见了。这是发生了（    ）",
      options: [
        { key: "A", text: "汽化" },
        { key: "B", text: "凝华" },
        { key: "C", text: "熔化" },
        { key: "D", text: "升华" },
      ],
      answer: "A",
      whyCorrect: "液态水 → 水蒸气（气体）= 汽化。",
    },
    trainingQuestions: [
      {
        id: "phy-T2-q1",
        source: "predicted",
        stem:
          "冬天清晨树枝上挂满'雾凇'，雾凇形成的物态变化是（    ）",
        options: [
          { key: "A", text: "凝固" },
          { key: "B", text: "液化" },
          { key: "C", text: "凝华" },
          { key: "D", text: "升华" },
        ],
        answer: "C",
        whyFitsStudent: "雾凇 = 水蒸气直接变冰晶 = 凝华（气→固）。",
        hint1: "雾凇是固体（冰晶），从哪儿来？",
        hint2: "空气里的水蒸气直接变冰，不经过液态。",
        trap: "凝固是液→固（不是这里）。",
        whyCorrect: "气→固 = 凝华。",
      },
      {
        id: "phy-T2-q2",
        source: "predicted",
        stem:
          "夏天从冰箱里拿出可乐，瓶外有水珠。水珠形成的物态变化是（    ）",
        options: [
          { key: "A", text: "汽化" },
          { key: "B", text: "液化" },
          { key: "C", text: "升华" },
          { key: "D", text: "熔化" },
        ],
        answer: "B",
        hint1: "空气中水蒸气遇冷瓶 → 变水珠。",
        hint2: "气 → 液 = 液化。",
        whyCorrect: "空气中水蒸气在冷瓶外遇冷液化成水珠。",
      },
      {
        id: "phy-T2-q3",
        source: "predicted",
        stem: "下列现象中属于'升华'的是（    ）",
        options: [
          { key: "A", text: "雾的形成" },
          { key: "B", text: "湿衣服晾干" },
          { key: "C", text: "樟脑丸用一段时间变小" },
          { key: "D", text: "冰冻的衣服变干" },
        ],
        answer: "C",
        hint1: "升华 = 固→气，不经液态。",
        hint2: "樟脑丸（固）变小是直接挥发为气体。",
        trap: "C 和 D 都是升华，但 C 更典型。湿衣服晾干是汽化。",
        whyCorrect: "樟脑丸是典型升华现象。",
      },
      {
        id: "phy-T2-q4",
        source: "predicted",
        stem:
          "大连冬天-15℃的早晨，玻璃窗内侧出现冰花。冰花的形成属于（    ）",
        options: [
          { key: "A", text: "凝固" },
          { key: "B", text: "凝华" },
          { key: "C", text: "液化" },
          { key: "D", text: "升华" },
        ],
        answer: "B",
        whyFitsStudent: "大连冬天本地化情境，2026 高频背景题。",
        hint1: "室内水蒸气遇冷玻璃直接变冰晶。",
        hint2: "气→固 = 凝华。",
        whyCorrect: "室内水蒸气在冷玻璃内表面凝华为冰晶。",
      },
      {
        id: "phy-T2-q5",
        source: "predicted",
        stem:
          "下列物态变化属于吸热的是（    ）",
        options: [
          { key: "A", text: "雾的形成" },
          { key: "B", text: "雪化成水" },
          { key: "C", text: "结霜" },
          { key: "D", text: "下雪" },
        ],
        answer: "B",
        hint1: "口诀：分散吸热。",
        hint2: "熔化（雪化）= 吸热。",
        whyCorrect: "雪→水（固→液）= 熔化 = 吸热。",
      },
      {
        id: "phy-T2-q6",
        source: "predicted",
        stem:
          "夏天打开冰箱门，看到一团'白雾'。这团白雾是（    ）",
        options: [
          { key: "A", text: "冰箱里的水蒸气" },
          { key: "B", text: "空气中水蒸气液化形成的小水滴" },
          { key: "C", text: "汽化的水" },
          { key: "D", text: "凝华的冰" },
        ],
        answer: "B",
        hint1: "白雾 = 看得见的小水滴（液体）。",
        hint2: "冰箱冷气让室内水蒸气液化。",
        trap: "把白雾当水蒸气（其实水蒸气是无色透明的）。",
        whyCorrect: "B 描述准确：液化产生的小水滴。",
      },
      {
        id: "phy-T2-q7",
        source: "predicted",
        stem:
          "刚出锅的饺子表面冒出'白气'，'白气'是（    ）",
        options: [
          { key: "A", text: "饺子里的水蒸气" },
          { key: "B", text: "空气中水蒸气液化的小水滴" },
          { key: "C", text: "饺子里散出来的水蒸气液化形成的小水滴" },
          { key: "D", text: "气泡" },
        ],
        answer: "C",
        hint1: "白气 = 小水滴（看得见 = 液体）。",
        hint2: "饺子里水蒸气出来遇冷液化。",
        whyCorrect: "C 描述完整：水蒸气来源 + 液化过程。",
      },
      {
        id: "phy-T2-q8",
        source: "predicted",
        stem:
          "冬天人在户外说话呼出的'白气'，是因为发生了（    ）",
        options: [
          { key: "A", text: "汽化" },
          { key: "B", text: "升华" },
          { key: "C", text: "液化" },
          { key: "D", text: "熔化" },
        ],
        answer: "C",
        hint1: "呼出气体含水蒸气，遇冷外空气变成什么？",
        hint2: "气 → 液 = 液化。",
        whyCorrect: "呼出的水蒸气遇冷液化成小水滴 = 白气。",
      },
      {
        id: "phy-T2-q9",
        source: "predicted",
        stem:
          "下列物态变化都需要放热的一组是（    ）",
        options: [
          { key: "A", text: "熔化、汽化、升华" },
          { key: "B", text: "凝固、液化、凝华" },
          { key: "C", text: "汽化、凝固、升华" },
          { key: "D", text: "熔化、液化、凝华" },
        ],
        answer: "B",
        hint1: "聚拢放热 = 凝固 / 液化 / 凝华。",
        hint2: "B 三个都是聚拢。",
        whyCorrect: "凝固、液化、凝华都是放热（聚拢型）。",
      },
      {
        id: "phy-T2-q10",
        source: "predicted",
        stem:
          "舞台上常用干冰升华制造'白雾'。这里'白雾'的形成涉及的物态变化是（    ）",
        options: [
          { key: "A", text: "干冰升华" },
          { key: "B", text: "水蒸气液化" },
          { key: "C", text: "干冰升华和水蒸气液化" },
          { key: "D", text: "水汽化" },
        ],
        answer: "C",
        hint1: "白雾是水滴（液），不是干冰（固）也不是 CO₂（气）。",
        hint2: "干冰升华吸热 → 周围水蒸气遇冷液化 → 白雾。",
        trap: "只选 A（白雾不是 CO₂ 是水滴）。",
        whyCorrect: "两步：干冰升华吸热 + 周围水蒸气液化。",
      },
    ],
    masteryTest: {
      description: "4 题判物态变化（混合常见现象）",
      passThreshold: "对 3/4 算掌握",
    },
    stuckResponses: {
      cant_memorize: "口诀：6 字 → 熔汽升吸，凝液凝华放。",
      no_start: "看从什么态变到什么态。'分散'（固→液→气）= 吸热。",
    },
    coachPrompt:
      "让烽峻先说从什么态变到什么态。再判分散还是聚拢。",
  },

  {
    id: "phy-T3-estimation",
    subject: "physics",
    title: "估测题（时间 / 长度 / 质量）",
    examType: "选择题第 1 题（高频）",
    estGain: "+2 分",
    priority: 1,
    oneLiner: "靠生活经验。课间 / 身高 / 一杯水的常识。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q1",
        topic: "眼保健操约 5 分钟",
      },
    ],
    whyFits:
      "送分题，不需要物理知识。生活常识就行。",
    steps: [
      "**时间常识**：眼保健操 ≈ 5 min；课间 ≈ 10 min；一节课 ≈ 40-45 min",
      "**长度常识**：身高 ≈ 1.5-1.8 m = 150-180 cm；一指节 ≈ 1 cm；一拃 ≈ 18-20 cm",
      "**质量常识**：一个鸡蛋 ≈ 50 g；一个苹果 ≈ 150 g；初中生体重 ≈ 50 kg",
      "**速度常识**：步行 ≈ 1 m/s = 3.6 km/h；自行车 ≈ 5 m/s；汽车市区 ≈ 60 km/h",
    ],
    example: {
      id: "phy-T3-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q1",
      },
      stem: "做一遍眼保健操时间大约是（    ）",
      options: [
        { key: "A", text: "5 s" },
        { key: "B", text: "5 min" },
        { key: "C", text: "50 min" },
        { key: "D", text: "5 h" },
      ],
      answer: "B",
      whyCorrect: "4 节眼保健操约 5 分钟。",
    },
    trainingQuestions: [
      {
        id: "phy-T3-q1",
        source: "predicted",
        stem: "一名初中男生身高最接近的是（    ）",
        options: [
          { key: "A", text: "17 cm" },
          { key: "B", text: "170 cm" },
          { key: "C", text: "17 m" },
          { key: "D", text: "170 m" },
        ],
        answer: "B",
        whyFitsStudent: "你自己身高约 1.7 米 = 170 cm。",
        hint1: "你自己身高多少米？",
        hint2: "1 米 = 100 cm，1.7 米 = 170 cm。",
        trap: "C/D 单位是 m 但数字过大。",
        whyCorrect: "170 cm 是初中男生标准身高。",
      },
      {
        id: "phy-T3-q2",
        source: "predicted",
        stem: "一个普通鸡蛋的质量最接近的是（    ）",
        options: [
          { key: "A", text: "5 g" },
          { key: "B", text: "50 g" },
          { key: "C", text: "500 g" },
          { key: "D", text: "5 kg" },
        ],
        answer: "B",
        hint1: "鸡蛋约 50 g（半两）。",
        hint2: "5g 太轻，500g 半斤。",
        whyCorrect: "鸡蛋质量约 50 g。",
      },
      {
        id: "phy-T3-q3",
        source: "predicted",
        stem:
          "正常人步行的速度大约是（    ）",
        options: [
          { key: "A", text: "1 m/s" },
          { key: "B", text: "10 m/s" },
          { key: "C", text: "30 km/h" },
          { key: "D", text: "0.1 m/s" },
        ],
        answer: "A",
        hint1: "1 m/s = 3.6 km/h，正常步行就是这个速度。",
        hint2: "10 m/s 是百米运动员速度。",
        whyCorrect: "步行速度约 1 m/s。",
      },
      {
        id: "phy-T3-q4",
        source: "predicted",
        stem: "初中物理课的时间大约是（    ）",
        options: [
          { key: "A", text: "4 s" },
          { key: "B", text: "40 s" },
          { key: "C", text: "40 min" },
          { key: "D", text: "4 h" },
        ],
        answer: "C",
        hint1: "一节课 40-45 min。",
        whyCorrect: "一节课约 40 min。",
      },
      {
        id: "phy-T3-q5",
        source: "predicted",
        stem:
          "教室里日光灯的功率最接近的是（    ）",
        options: [
          { key: "A", text: "4 W" },
          { key: "B", text: "40 W" },
          { key: "C", text: "400 W" },
          { key: "D", text: "4 kW" },
        ],
        answer: "B",
        hint1: "日光灯约 30-40 W。",
        hint2: "400W 是大空调；4kW 是热水器。",
        whyCorrect: "日光灯约 40 W。",
      },
      {
        id: "phy-T3-q6",
        source: "predicted",
        stem: "一只苹果的质量大约是（    ）",
        options: [
          { key: "A", text: "15 g" },
          { key: "B", text: "150 g" },
          { key: "C", text: "1.5 kg" },
          { key: "D", text: "15 kg" },
        ],
        answer: "B",
        hint1: "苹果约 150 g。",
        whyCorrect: "苹果约 150 g。",
      },
      {
        id: "phy-T3-q7",
        source: "predicted",
        stem:
          "下列估测最接近实际的是（    ）",
        options: [
          { key: "A", text: "教室温度 50℃" },
          { key: "B", text: "成人步行速度 5 m/s" },
          { key: "C", text: "课桌高度 80 cm" },
          { key: "D", text: "1 节课 100 min" },
        ],
        answer: "C",
        hint1: "课桌高度约 80 cm。",
        hint2: "教室温度约 20℃；步行 1 m/s；课 40 min。",
        whyCorrect: "课桌高度约 80 cm。",
      },
      {
        id: "phy-T3-q8",
        source: "predicted",
        stem:
          "下列说法中不符合实际的是（    ）",
        options: [
          { key: "A", text: "初中生体重约 50 kg" },
          { key: "B", text: "教室长约 8 m" },
          { key: "C", text: "一瓶矿泉水容积约 5 L" },
          { key: "D", text: "电饭锅功率约 800 W" },
        ],
        answer: "C",
        hint1: "矿泉水瓶约 500 mL = 0.5 L。",
        hint2: "5 L 是大桶水。",
        whyCorrect: "C 不符合实际（矿泉水约 0.5 L）。",
      },
      {
        id: "phy-T3-q9",
        source: "predicted",
        stem:
          "下列对人体尺寸的估测合理的是（    ）",
        options: [
          { key: "A", text: "脚长约 25 cm" },
          { key: "B", text: "心跳约 1 次/秒" },
          { key: "C", text: "中指长约 10 cm" },
          { key: "D", text: "以上都合理" },
        ],
        answer: "D",
        hint1: "脚长 25 cm（约 7 寸）；心跳 60-100 次/分；中指 8-10 cm。",
        hint2: "三个估测都在合理范围内。",
        whyCorrect: "三个估测都接近实际。",
      },
      {
        id: "phy-T3-q10",
        source: "predicted",
        stem:
          "下列家电中功率最大的是（    ）",
        options: [
          { key: "A", text: "电视机（150 W）" },
          { key: "B", text: "电饭锅（800 W）" },
          { key: "C", text: "空调（1500 W）" },
          { key: "D", text: "手机（5 W）" },
        ],
        answer: "C",
        hint1: "比 4 个数。",
        hint2: "1500 最大。",
        whyCorrect: "空调 1500 W 最大。",
      },
    ],
    masteryTest: {
      description: "4 题估测",
      passThreshold: "对 3/4 算掌握",
    },
    stuckResponses: {
      cant_read: "用生活经验。你自己 / 你家 / 你身边能想起来的相似量。",
      no_start: "排除明显离谱的（如 5 h 做眼保健操、17 m 身高）。",
    },
    coachPrompt:
      "让烽峻用生活经验比较。如题问'桌子高度'，让他想自己课桌大概多高。",
  },

  {
    id: "phy-T4-optics",
    subject: "physics",
    title: "光学：反射 vs 折射 vs 凸透镜",
    examType: "选择 + 实验（每年命中）",
    estGain: "+2-3 分",
    priority: 1,
    oneLiner:
      "反射 = 同介质（镜子）；折射 = 不同介质（水中筷子）；凸透镜按 u 与 f 关系判 3 种像。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q3",
        topic: "斜插水中筷子弯折=光的折射",
      },
    ],
    whyFits:
      "光学每年必考 1 题。规则简单，背完就能判。",
    steps: [
      "**反射**：光从一种介质射到表面被弹回（镜子里的像 / 平静水面倒影）",
      "  · 入射角 = 反射角；三线共面分两侧",
      "  · 平面镜成像：等大 / 等距 / 虚像 / 左右相反",
      "**折射**：光从一种介质进入另一种（水中筷子弯折 / 海市蜃楼）",
      "  · 从水进空气：角变大",
      "  · 从空气进水：角变小",
      "**凸透镜**（按 u 与 f 关系判）：",
      "  · u > 2f：缩小实像（照相机）",
      "  · f < u < 2f：放大实像（投影仪）",
      "  · u < f：放大虚像（放大镜）",
    ],
    example: {
      id: "phy-T4-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q3",
      },
      stem: "斜插入水中的筷子，看起来弯折了的原因是（    ）",
      options: [
        { key: "A", text: "光沿直线传播" },
        { key: "B", text: "光的反射" },
        { key: "C", text: "光的色散" },
        { key: "D", text: "光的折射" },
      ],
      answer: "D",
      whyCorrect: "光从水里到空气里，介质变了，方向改变 = 折射。",
    },
    trainingQuestions: [
      {
        id: "phy-T4-q1",
        source: "predicted",
        stem: "平静水面映出岸边树木的倒影。下列分析正确的是（    ）",
        options: [
          { key: "A", text: "倒影是树木的实像" },
          { key: "B", text: "倒影由光的折射形成" },
          { key: "C", text: "倒影是光的反射形成的虚像" },
          { key: "D", text: "倒影比树木大" },
        ],
        answer: "C",
        whyFitsStudent: "水面像平面镜 → 反射 + 虚像 + 等大。",
        hint1: "水面像什么？",
        hint2: "水面像镜子。镜子里的像是实是虚？",
        trap: "B 是错的，倒影不是折射。",
        whyCorrect: "平面镜 = 反射形成虚像，物像等大。",
      },
      {
        id: "phy-T4-q2",
        source: "predicted",
        stem:
          "把铅笔斜着插入水中，看到铅笔在水中部分'弯折'。这是（    ）",
        options: [
          { key: "A", text: "光的反射" },
          { key: "B", text: "光的折射" },
          { key: "C", text: "光的色散" },
          { key: "D", text: "光的直线传播" },
        ],
        answer: "B",
        hint1: "铅笔从空气穿到水里——介质变了。",
        hint2: "穿介质 = 折射。",
        whyCorrect: "光从水到空气发生折射，看起来铅笔弯了。",
      },
      {
        id: "phy-T4-q3",
        source: "predicted",
        stem:
          "用照相机拍照时，镜头成的像是（    ）",
        options: [
          { key: "A", text: "正立、放大的虚像" },
          { key: "B", text: "倒立、放大的实像" },
          { key: "C", text: "倒立、缩小的实像" },
          { key: "D", text: "倒立、等大的实像" },
        ],
        answer: "C",
        hint1: "照相机 u > 2f → 倒立缩小实像。",
        hint2: "三个特点：倒立、缩小、实。",
        whyCorrect: "照相机使用 u>2f 区域 → 倒立缩小实像。",
      },
      {
        id: "phy-T4-q4",
        source: "predicted",
        stem:
          "用放大镜看书时，看到的是（    ）",
        options: [
          { key: "A", text: "正立、放大的虚像" },
          { key: "B", text: "倒立、放大的实像" },
          { key: "C", text: "正立、缩小的实像" },
          { key: "D", text: "倒立、缩小的虚像" },
        ],
        answer: "A",
        hint1: "放大镜 u<f → 正立放大虚像。",
        hint2: "虚像 = 看得见但屏幕接不到。",
        whyCorrect: "放大镜在 u<f 时成正立放大虚像。",
      },
      {
        id: "phy-T4-q5",
        source: "predicted",
        stem:
          "投影仪能在屏幕上呈现放大的图像，物体应放在（    ）",
        options: [
          { key: "A", text: "u > 2f" },
          { key: "B", text: "f < u < 2f" },
          { key: "C", text: "u = 2f" },
          { key: "D", text: "u < f" },
        ],
        answer: "B",
        hint1: "投影仪 = 放大实像。",
        hint2: "f<u<2f 区域。",
        whyCorrect: "投影仪在 f<u<2f 区域成倒立放大实像。",
      },
      {
        id: "phy-T4-q6",
        source: "predicted",
        stem:
          "下列关于平面镜成像说法错误的是（    ）",
        options: [
          { key: "A", text: "像与物大小相等" },
          { key: "B", text: "像与物到镜面的距离相等" },
          { key: "C", text: "像是实像" },
          { key: "D", text: "像与物左右相反" },
        ],
        answer: "C",
        hint1: "平面镜成虚像（屏幕接不到）。",
        hint2: "其他三条都对。",
        whyCorrect: "平面镜成虚像（不是实像）。",
      },
      {
        id: "phy-T4-q7",
        source: "predicted",
        stem:
          "凸透镜焦距 10 cm。将物体放在距透镜 5 cm 处，所成像的特征是（    ）",
        options: [
          { key: "A", text: "倒立缩小实像" },
          { key: "B", text: "倒立放大实像" },
          { key: "C", text: "正立放大虚像" },
          { key: "D", text: "正立等大虚像" },
        ],
        answer: "C",
        hint1: "u=5，f=10 → u<f。",
        hint2: "u<f 是放大镜区域。",
        whyCorrect: "u<f 区域成正立放大虚像。",
      },
      {
        id: "phy-T4-q8",
        source: "predicted",
        stem:
          "光从空气射入水中时，下列说法正确的是（    ）",
        options: [
          { key: "A", text: "折射角大于入射角" },
          { key: "B", text: "折射角小于入射角" },
          { key: "C", text: "折射角等于入射角" },
          { key: "D", text: "无折射" },
        ],
        answer: "B",
        hint1: "光从疏到密 → 折向法线（折射角变小）。",
        hint2: "记口诀'空气进水变小'。",
        whyCorrect: "光从空气（疏）入水（密）折射角小于入射角。",
      },
      {
        id: "phy-T4-q9",
        source: "predicted",
        stem:
          "下列现象属于光的反射的是（    ）",
        options: [
          { key: "A", text: "水中筷子弯折" },
          { key: "B", text: "海市蜃楼" },
          { key: "C", text: "看见自己在镜子中的像" },
          { key: "D", text: "彩虹" },
        ],
        answer: "C",
        hint1: "镜子 = 反射。",
        hint2: "其他三个都是折射（含色散）。",
        whyCorrect: "镜子里的像是反射形成。",
      },
      {
        id: "phy-T4-q10",
        source: "predicted",
        stem:
          "用焦距 15 cm 的凸透镜做实验，要在光屏上得到倒立放大的像，物体到透镜的距离应满足（    ）",
        options: [
          { key: "A", text: "u > 30 cm" },
          { key: "B", text: "15 < u < 30 cm" },
          { key: "C", text: "u = 30 cm" },
          { key: "D", text: "u < 15 cm" },
        ],
        answer: "B",
        hint1: "倒立放大实像 → f<u<2f。",
        hint2: "f=15 → 2f=30 → 15<u<30。",
        whyCorrect: "区间 f<u<2f 成倒立放大实像。",
      },
    ],
    masteryTest: {
      description: "3 道光学题（含反射、折射、凸透镜各 1 道）",
      passThreshold: "对 2/3 算入门；3/3 算掌握",
    },
    stuckResponses: {
      cant_memorize:
        "口诀：同介质 = 反射；穿介质 = 折射；u<f 是放大镜。",
      no_start: "看光在哪几个介质。1 个介质 = 反射；2 个介质 = 折射。",
    },
    coachPrompt:
      "让烽峻先说题里光在几个介质。1 个 = 反射；穿 2 个 = 折射。",
  },

  {
    id: "phy-T5-circuit-safety",
    subject: "physics",
    title: "串并联判断 + 安全用电常识",
    examType: "选择题（每年命中）",
    estGain: "+2-3 分",
    priority: 1,
    oneLiner:
      "电流只 1 条路 = 串联；多条路 = 并联。安全用电：不湿手 / 不靠近高压 / 三孔接地。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q5",
        topic: "手持小风扇电路",
      },
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q6",
        topic: "家庭电路 + 安全用电",
      },
    ],
    whyFits:
      "电学占物理大头。这 2 个高频考点必抢。",
    steps: [
      "**串并联判断**：",
      "  · 串联：电流只有 1 条路，开关控制全部，1 处坏全坏",
      "  · 并联：电流多条路，互不影响",
      "  · 串联 R = R₁ + R₂；I 相同；U 相加",
      "  · 并联 1/R = 1/R₁ + 1/R₂；U 相同；I 相加",
      "**安全用电 4 条**：",
      "  · 不湿手插拔插头",
      "  · 不在高压线下放风筝",
      "  · 雷雨天不躲大树下",
      "  · 三孔插座接地保命",
      "  · 着火先断电再灭火（水会导电！）",
      "  · 救触电者要先切电源（不能直接拉）",
    ],
    example: {
      id: "phy-T5-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q6",
      },
      stem: "关于家庭电路和安全用电，下列说法正确的是（    ）",
      options: [
        { key: "A", text: "用电器着火时直接用水灭火" },
        { key: "B", text: "电线绝缘皮破损应及时更换" },
        { key: "C", text: "发现有人触电直接用手拉开触电者" },
        { key: "D", text: "电能表是测量用电器两端电压的仪表" },
      ],
      answer: "B",
      whyCorrect:
        "B 正确；A 水会导电；C 直接拉自己也会触电；D 电能表测电能（kW·h）不是电压。",
    },
    trainingQuestions: [
      {
        id: "phy-T5-q1",
        source: "predicted",
        stem:
          "下列关于安全用电做法正确的是（    ）",
        options: [
          { key: "A", text: "用湿手扳开关" },
          { key: "B", text: "在高压线下放风筝" },
          { key: "C", text: "三脚插头中较长那个脚连接地线" },
          { key: "D", text: "用电器着火直接泼水" },
        ],
        answer: "C",
        hint1: "安全用电核心：远离水 / 远离高压。",
        hint2: "三孔插座中长脚是地线。",
        whyCorrect: "C 正确，其他三条都危险。",
      },
      {
        id: "phy-T5-q2",
        source: "predicted",
        stem:
          "电路中两灯泡 L₁、L₂ 串联，关闭其中 1 个开关后另 1 个灯泡也不亮。说明（    ）",
        options: [
          { key: "A", text: "L₁ 和 L₂ 串联" },
          { key: "B", text: "L₁ 和 L₂ 并联" },
          { key: "C", text: "L₁ 和 L₂ 短路" },
          { key: "D", text: "L₁ 和 L₂ 断路" },
        ],
        answer: "A",
        hint1: "串联：电流只 1 条路，1 处坏全坏。",
        hint2: "并联：互不影响。",
        whyCorrect: "1 处断全断 = 串联。",
      },
      {
        id: "phy-T5-q3",
        source: "predicted",
        stem:
          "下列家庭电路常识中错误的是（    ）",
        options: [
          { key: "A", text: "保险丝接在火线上" },
          { key: "B", text: "三孔插座地线接金属外壳" },
          { key: "C", text: "断路时先关总开关" },
          { key: "D", text: "电线越粗越容易着火" },
        ],
        answer: "D",
        hint1: "电线粗 → 电阻小 → 散热好。",
        hint2: "细电线容易过热着火。",
        whyCorrect: "D 错——粗电线更安全。",
      },
      {
        id: "phy-T5-q4",
        source: "predicted",
        stem:
          "若两个相同灯泡并联接入电路，下列说法正确的是（    ）",
        options: [
          { key: "A", text: "总电阻等于单个灯泡电阻" },
          { key: "B", text: "总电阻大于单个灯泡电阻" },
          { key: "C", text: "总电阻小于单个灯泡电阻" },
          { key: "D", text: "两灯不会同时亮" },
        ],
        answer: "C",
        hint1: "并联总电阻小于任一支路。",
        hint2: "两个相同电阻并联 = 一半。",
        whyCorrect: "并联减小总电阻。",
      },
      {
        id: "phy-T5-q5",
        source: "predicted",
        stem:
          "家用电压是 220 V。若家里同时使用空调（1500 W）+ 电视（150 W）+ 电饭锅（800 W），干路电流约为（    ）",
        options: [
          { key: "A", text: "5 A" },
          { key: "B", text: "11 A" },
          { key: "C", text: "20 A" },
          { key: "D", text: "30 A" },
        ],
        answer: "B",
        hint1: "总功率 = 1500+150+800 = 2450 W。",
        hint2: "I = P/U = 2450/220 ≈ 11 A。",
        whyCorrect: "P=UI → I = P/U ≈ 11 A。",
      },
      {
        id: "phy-T5-q6",
        source: "predicted",
        stem:
          "电路中两灯泡并联，若 L₁ 灯丝断了，L₂（    ）",
        options: [
          { key: "A", text: "也熄灭" },
          { key: "B", text: "亮度不变" },
          { key: "C", text: "亮度变亮" },
          { key: "D", text: "短路" },
        ],
        answer: "B",
        hint1: "并联各支路独立。",
        hint2: "L₁ 坏不影响 L₂。",
        whyCorrect: "并联互不影响。",
      },
      {
        id: "phy-T5-q7",
        source: "predicted",
        stem:
          "下列电路图中属于串联的是（用文字描述）（    ）",
        options: [
          { key: "A", text: "电流分两条路通过两个灯" },
          { key: "B", text: "电流只有一条路依次通过两个灯" },
          { key: "C", text: "两个灯共用一个电源各独立路径" },
          { key: "D", text: "两灯反向连接" },
        ],
        answer: "B",
        hint1: "串联只 1 条路。",
        whyCorrect: "B 描述串联特征。",
      },
      {
        id: "phy-T5-q8",
        source: "predicted",
        stem:
          "下列电器与家庭电路的关系叙述正确的是（    ）",
        options: [
          { key: "A", text: "家用电器之间是串联的" },
          { key: "B", text: "家用电器之间是并联的" },
          { key: "C", text: "电视机和空调电流相同" },
          { key: "D", text: "拉断开关相当于断电" },
        ],
        answer: "B",
        hint1: "家用电器并联 → 互不影响。",
        hint2: "如果串联，1 个坏全坏，无法实用。",
        whyCorrect: "家用电器并联是基本常识。",
      },
      {
        id: "phy-T5-q9",
        source: "predicted",
        stem:
          "下列做法符合安全用电原则的是（    ）",
        options: [
          { key: "A", text: "雷雨天在大树下避雨" },
          { key: "B", text: "电器着火立即用水扑灭" },
          { key: "C", text: "电线接头处缠绝缘胶布" },
          { key: "D", text: "用湿手摸开关" },
        ],
        answer: "C",
        hint1: "安全用电核心：绝缘 + 接地 + 远离水。",
        whyCorrect: "C 正确，其他都危险。",
      },
      {
        id: "phy-T5-q10",
        source: "predicted",
        stem:
          "电阻 R₁=4Ω, R₂=6Ω 串联接入电路，干路电流 0.5 A。R₂ 两端电压是（    ）",
        options: [
          { key: "A", text: "2 V" },
          { key: "B", text: "3 V" },
          { key: "C", text: "5 V" },
          { key: "D", text: "10 V" },
        ],
        answer: "B",
        hint1: "串联电流相同。",
        hint2: "U₂ = IR₂ = 0.5 × 6 = 3 V。",
        whyCorrect: "U₂ = 0.5 × 6 = 3 V。",
      },
    ],
    masteryTest: {
      description: "4 道（串并联 2 + 安全用电 2）",
      passThreshold: "对 3/4 算掌握",
    },
    stuckResponses: {
      no_start:
        "安全题永远选'最稳妥'的：不湿手 / 不近高压 / 不徒手救人。",
    },
    coachPrompt:
      "让烽峻判每个选项是不是危险动作。危险的就是错。",
  },

  // ============ 力学综合（2 张）============
  {
    id: "phy-T6-inertia",
    subject: "physics",
    title: "惯性 + 力的概念",
    examType: "选择题（高频）",
    estGain: "+2 分",
    priority: 1,
    oneLiner:
      "惯性 = 保持原状的'懒劲儿'。**惯性不是力**。运动状态变化 = 受到力。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q4",
        topic: "篮球离手后由于惯性继续运动",
      },
    ],
    whyFits:
      "惯性几乎每年命中。背 3 条规则就够。",
    steps: [
      "**惯性 = 物体保持原来运动状态的性质**（不是力）",
      "  · 静止物体保持静止；运动物体保持运动",
      "  · 一切物体都有惯性",
      "**生活例子**：",
      "  · 公交刹车人前倾 = 上半身惯性继续前进",
      "  · 篮球离手后还在飞 = 惯性",
      "  · 跳远要先助跑 = 利用惯性跳更远",
      "**力的常考点**：重力 G = mg（g 取 10 N/kg）；合力计算（同向相加 / 反向相减）",
    ],
    example: {
      id: "phy-T6-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q4",
      },
      stem: "比赛中运动员投出的篮球（    ）",
      options: [
        { key: "A", text: "离开手后由于惯性继续运动" },
        { key: "B", text: "上升过程中重力势能减小" },
        { key: "C", text: "到达最高点时不受力的作用" },
        { key: "D", text: "下落过程中运动状态保持不变" },
      ],
      answer: "A",
      whyCorrect:
        "A 正确；B 上升时重力势能增大；C 最高点仍受重力；D 下落时速度变快状态在变。",
    },
    trainingQuestions: [
      {
        id: "phy-T6-q1",
        source: "predicted",
        stem:
          "公交车突然刹车，乘客身体（    ）",
        options: [
          { key: "A", text: "向前倾" },
          { key: "B", text: "向后倒" },
          { key: "C", text: "原地不动" },
          { key: "D", text: "向左偏" },
        ],
        answer: "A",
        hint1: "原本运动 + 上半身惯性 → 继续向前。",
        hint2: "下半身随车减速，上半身保持运动。",
        whyCorrect: "上半身因惯性继续向前。",
      },
      {
        id: "phy-T6-q2",
        source: "predicted",
        stem:
          "下列说法中正确的是（    ）",
        options: [
          { key: "A", text: "运动的物体才有惯性" },
          { key: "B", text: "速度越大惯性越大" },
          { key: "C", text: "一切物体都有惯性" },
          { key: "D", text: "惯性是力" },
        ],
        answer: "C",
        hint1: "惯性是物体的属性，不分动静。",
        hint2: "惯性 ≠ 力。",
        trap: "把惯性当成力。",
        whyCorrect: "一切物体都有惯性，与运动状态无关。",
      },
      {
        id: "phy-T6-q3",
        source: "predicted",
        stem:
          "跳远比赛要先助跑，是为了（    ）",
        options: [
          { key: "A", text: "让自己更累" },
          { key: "B", text: "利用惯性使跳得更远" },
          { key: "C", text: "克服重力" },
          { key: "D", text: "增加摩擦力" },
        ],
        answer: "B",
        hint1: "助跑 → 起跳前已有水平速度。",
        hint2: "起跳后惯性继续保持速度。",
        whyCorrect: "助跑利用惯性使水平距离增大。",
      },
      {
        id: "phy-T6-q4",
        source: "predicted",
        stem:
          "下列不属于利用惯性的是（    ）",
        options: [
          { key: "A", text: "跳远助跑" },
          { key: "B", text: "拍打衣服除尘" },
          { key: "C", text: "汽车系安全带" },
          { key: "D", text: "锤头松了把锤柄向下撞" },
        ],
        answer: "C",
        hint1: "安全带 = 防止惯性危害（不是利用）。",
        hint2: "ABD 都是利用惯性。",
        whyCorrect: "C 是防止惯性，其他三个利用惯性。",
      },
      {
        id: "phy-T6-q5",
        source: "predicted",
        stem:
          "质量 5 kg 的物体所受重力是（    ）（g=10 N/kg）",
        options: [
          { key: "A", text: "5 N" },
          { key: "B", text: "10 N" },
          { key: "C", text: "50 N" },
          { key: "D", text: "0.5 N" },
        ],
        answer: "C",
        hint1: "G = mg = 5 × 10。",
        whyCorrect: "G = 5 × 10 = 50 N。",
      },
      {
        id: "phy-T6-q6",
        source: "predicted",
        stem:
          "用 100 N 的水平力推一个静止的箱子未动，箱子受到的摩擦力是（    ）",
        options: [
          { key: "A", text: "100 N" },
          { key: "B", text: "0 N" },
          { key: "C", text: "200 N" },
          { key: "D", text: "无法确定" },
        ],
        answer: "A",
        hint1: "未动 = 平衡状态 = 合力为 0。",
        hint2: "摩擦力 = 推力（方向相反）。",
        whyCorrect: "静止平衡：摩擦力 = 推力 = 100 N。",
      },
      {
        id: "phy-T6-q7",
        source: "predicted",
        stem:
          "两个力的合力大小可能是（    ）",
        options: [
          { key: "A", text: "F₁=3 N，F₂=4 N，合力 = 1 N（反向）" },
          { key: "B", text: "F₁=3 N，F₂=4 N，合力 = 7 N（同向）" },
          { key: "C", text: "F₁=3 N，F₂=4 N，合力可为 1-7 N" },
          { key: "D", text: "以上都对" },
        ],
        answer: "D",
        hint1: "同向相加 = 7；反向相减 = 1；夹角 → 1-7 之间。",
        whyCorrect: "合力范围在 |F₁-F₂| 到 F₁+F₂ 之间。",
      },
      {
        id: "phy-T6-q8",
        source: "predicted",
        stem:
          "下列现象中体现物体具有惯性的是（    ）",
        options: [
          { key: "A", text: "踢球后球继续向前运动" },
          { key: "B", text: "汽车刹车后停下" },
          { key: "C", text: "电梯上升" },
          { key: "D", text: "羽毛缓慢下落" },
        ],
        answer: "A",
        hint1: "踢球后没人推但球还在动 → 惯性。",
        hint2: "B 是受到摩擦减速；C 是受电机驱动；D 是阻力作用。",
        whyCorrect: "球离脚后无外力推 = 惯性。",
      },
      {
        id: "phy-T6-q9",
        source: "predicted",
        stem:
          "苹果在桌面上保持静止，下列分析正确的是（    ）",
        options: [
          { key: "A", text: "苹果不受重力" },
          { key: "B", text: "苹果只受重力" },
          { key: "C", text: "苹果受重力和支持力，二力平衡" },
          { key: "D", text: "苹果不受任何力" },
        ],
        answer: "C",
        hint1: "静止 = 二力平衡。",
        hint2: "重力和支持力大小相等方向相反。",
        whyCorrect: "二力平衡：重力（下）= 支持力（上）。",
      },
      {
        id: "phy-T6-q10",
        source: "predicted",
        stem:
          "对'力'的描述错误的是（    ）",
        options: [
          { key: "A", text: "力是物体对物体的作用" },
          { key: "B", text: "施力物体同时也是受力物体" },
          { key: "C", text: "力可以脱离物体单独存在" },
          { key: "D", text: "力的单位是牛顿（N）" },
        ],
        answer: "C",
        hint1: "力必须有施力和受力物体。",
        hint2: "力不能脱离物体。",
        whyCorrect: "C 错——力必须有物体。",
      },
    ],
    masteryTest: {
      description: "3 道惯性 / 力的题",
      passThreshold: "对 2/3 算入门",
    },
    stuckResponses: {
      cant_memorize: "记一句：'惯性不是力，是性质'。",
      no_start: "看物体是不是没人推也在动？是 = 惯性。",
    },
    coachPrompt:
      "让烽峻判：物体没人推还在动 → 因为什么？答：惯性。",
  },

  // ============ 实验题 + 大题（3 张）============
  {
    id: "phy-T7-experiment-template",
    subject: "physics",
    title: "实验探究答题模板",
    examType: "实验探究 24 分（前 1-2 小问）",
    estGain: "+3-5 分",
    priority: 0,
    oneLiner:
      "控制变量法 + 多次实验目的 + 改进建议。3 个标准句式包打天下。",
    sourceTrace: [
      {
        kind: "placeholder",
        note: "实验探究题每年必考；明天补具体题号",
      },
    ],
    whyFits:
      "实验题 24 分大头。前 2 小问通常考'实验方法'和'多次实验目的'，套模板抄就行。",
    steps: [
      "**问'实验方法'**：答 '**控制变量法**'（电学/力学/热学几乎都用这个）",
      "**问'多次实验目的'**：3 选 1：",
      "  · 减小误差",
      "  · 使结论更普遍 / 寻找普遍规律",
      "  · 避免实验偶然性",
      "**问'怎么控制变量'**：'**除了 ___ 不同，其他条件相同**'",
      "**问'改进建议'**：'多次实验取平均值减小误差' 或 '换不同条件重复实验'",
    ],
    example: {
      id: "phy-T7-ex",
      source: "predicted",
      stem:
        "为探究电流与电阻的关系，A 组用 5Ω 电阻，B 组用 10Ω 电阻，保持电压不变。\n\n该实验采用的方法是 ____。",
      answer: "控制变量法",
      whyFitsStudent: "套模板拿分。",
      hint1: "A、B 组只有电阻不同，电压相同。这是什么方法？",
      hint2: "改变 1 个量，控制其他 = 控制变量法。",
      trap: "写'对比实验''比较法'都不规范。",
      whyCorrect: "标准答案就是'控制变量法'。",
    },
    trainingQuestions: [
      {
        id: "phy-T7-q1",
        source: "predicted",
        stem:
          "实验探究'压力作用效果与受力面积的关系'，A 用大平面，B 用小平面，压力相同。该实验中改变的变量是 ____，控制相同的变量是 ____。",
        answer: "受力面积；压力（和接触表面）",
        hint1: "唯一不同 = 改变量。",
        hint2: "其他都相同 = 控制量。",
        whyCorrect: "改变受力面积，控制压力相同。",
      },
      {
        id: "phy-T7-q2",
        source: "predicted",
        stem:
          "做 5 次相同的电阻测量取平均值，目的是 ____。",
        answer: "减小（实验）误差，使测量结果更准确",
        hint1: "多次实验 → 减小偶然误差。",
        whyCorrect: "标准模板答法。",
      },
      {
        id: "phy-T7-q3",
        source: "predicted",
        stem:
          "测量小灯泡电阻的实验中，需要使用的器材是（    ）",
        options: [
          { key: "A", text: "电源 + 电流表 + 电压表 + 灯泡 + 开关" },
          { key: "B", text: "电源 + 电流表 + 灯泡" },
          { key: "C", text: "电压表 + 灯泡" },
          { key: "D", text: "电源 + 电压表 + 灯泡" },
        ],
        answer: "A",
        hint1: "R = U/I 需要测 U 和 I 两个值。",
        hint2: "电流表测 I，电压表测 U。",
        whyCorrect: "完整电路 = 电源 + 电压表 + 电流表 + 灯泡 + 开关。",
      },
      {
        id: "phy-T7-q4",
        source: "predicted",
        stem:
          "实验中发现电流表指针偏离 0 刻度但不动，可能的原因是 ____（写 1 条）",
        answer: "电路某处断路（或开关未闭合 / 导线接触不良）",
        hint1: "指针不动 = 没电流。",
        hint2: "可能原因：断路 / 开关坏 / 接触不良。",
        whyCorrect: "断路是常见故障原因。",
      },
      {
        id: "phy-T7-q5",
        source: "predicted",
        stem:
          "下列实验探究中体现控制变量思想的是（    ）",
        options: [
          { key: "A", text: "测电阻（同一个电阻多次测量）" },
          { key: "B", text: "探究电流与电压关系（保持 R 不变）" },
          { key: "C", text: "用刻度尺测长度" },
          { key: "D", text: "用天平称质量" },
        ],
        answer: "B",
        hint1: "控制变量 = 改 1 个量保持其他相同。",
        whyCorrect: "B 是典型控制变量实验。",
      },
      {
        id: "phy-T7-q6",
        source: "predicted",
        stem:
          "探究'凸透镜成像规律'，需要测量的物理量是 ____ 和 ____。",
        answer: "物距 u；像距 v",
        hint1: "凸透镜成像规律 = u 和 v 关系。",
        hint2: "u = 物到透镜距离；v = 像到透镜距离。",
        whyCorrect: "实验测量 u、v 探究规律。",
      },
      {
        id: "phy-T7-q7",
        source: "predicted",
        stem:
          "实验探究'欧姆定律'时，调节滑动变阻器多次得到不同的 U 和 I，目的是（    ）",
        options: [
          { key: "A", text: "为了多记录几组数据玩玩" },
          { key: "B", text: "排除偶然性，找普遍规律" },
          { key: "C", text: "看哪组数据准" },
          { key: "D", text: "无目的" },
        ],
        answer: "B",
        hint1: "多次实验 = 找普遍规律。",
        whyCorrect: "排除偶然性是多组数据的标准目的。",
      },
      {
        id: "phy-T7-q8",
        source: "predicted",
        stem:
          "下列叙述错误的是（    ）",
        options: [
          { key: "A", text: "实验前应先检查电路" },
          { key: "B", text: "电流表不能直接接电源" },
          { key: "C", text: "电压表正负接线柱可以接反" },
          { key: "D", text: "实验完成应整理器材" },
        ],
        answer: "C",
        hint1: "电压表正负接反 → 指针反偏可能损坏。",
        whyCorrect: "C 错——正负不能接反。",
      },
      {
        id: "phy-T7-q9",
        source: "predicted",
        stem:
          "在实验探究中，结论的得出应基于（    ）",
        options: [
          { key: "A", text: "1 次实验" },
          { key: "B", text: "多次实验取平均值或找规律" },
          { key: "C", text: "凭经验" },
          { key: "D", text: "随便取" },
        ],
        answer: "B",
        hint1: "结论需要数据支撑。",
        whyCorrect: "多次实验是科学方法。",
      },
      {
        id: "phy-T7-q10",
        source: "predicted",
        stem:
          "做对比实验时，控制变量法的目的是（    ）",
        options: [
          { key: "A", text: "节约时间" },
          { key: "B", text: "排除其他因素干扰，研究单一因素" },
          { key: "C", text: "记录更多数据" },
          { key: "D", text: "节省实验器材" },
        ],
        answer: "B",
        hint1: "控制变量 = 排除干扰。",
        whyCorrect: "控制变量法的核心目的。",
      },
    ],
    masteryTest: {
      description: "3 道实验小问（'实验方法''多次实验目的''改进建议'各 1）",
      passThreshold: "对 2/3 算入门；3/3 算掌握",
    },
    stuckResponses: {
      cant_memorize: "今天只背 1 句：'除了 ___ 不同，其他条件相同'。",
      no_start: "看 A、B 组哪里不一样。那个不一样的就是变量。",
    },
    coachPrompt:
      "让烽峻找 A、B 组的差别。再让他套'除了…不同'句式。",
  },

  {
    id: "phy-T8-calc-q1",
    subject: "physics",
    title: "计算题第 1 题 6 行格式",
    examType: "计算题第 1 题（约 8 分）",
    estGain: "+4-5 分",
    priority: 0,
    oneLiner:
      "**6 行**：解 / 已知 / 求 / 公式 / 代入 / 答。**只写公式 + 代入也能 2-3 分**。",
    sourceTrace: [
      {
        kind: "placeholder",
        note: "计算题第 1 题每年必考密度/欧姆/压强之一；明天补具体真题",
      },
    ],
    whyFits:
      "你 36 分。计算题第 1 题难度低，6 行写齐全 = 4-5 分稳拿。",
    steps: [
      "**6 行格式**：",
      "  1. **解：**",
      "  2. **已知：**……（抄题里给的）",
      "  3. **求：**……",
      "  4. **公式：**……（如 ρ = m/V 或 V = m/ρ）",
      "  5. **代入：**……（带单位！如 V = 500g ÷ 1.0g/cm³）",
      "  6. **答：**……（带单位！如 V = 500 cm³）",
      "**铁律**：每行单独写，每行都带单位",
    ],
    example: {
      id: "phy-T8-ex",
      source: "predicted",
      stem:
        "一空瓶质量 100g，装满水后总质量 600g。水密度 ρ = 1.0 g/cm³。求：(1) 水的质量；(2) 瓶子容积。",
      answer:
        "解：\n已知：m瓶 = 100g，m总 = 600g，ρ水 = 1.0 g/cm³\n求：m水 ; V瓶\n(1) m水 = m总 - m瓶 = 600g - 100g = 500g\n(2) 公式：V = m/ρ\n   代入：V = 500g ÷ 1.0g/cm³ = 500 cm³\n答：水的质量为 500g；瓶子容积为 500 cm³（即 500 mL）。",
      whyFitsStudent: "标准 6 行格式。每行 1-2 分，6 行齐全 8 分。",
      hint1: "已知 m瓶、m总，求 m水？",
      hint2: "m水 = m总 - m瓶 = ?",
      trap: "忘单位（500 不写 cm³）扣分。",
      whyCorrect: "6 行齐全 + 单位齐全 = 满分。",
    },
    trainingQuestions: [
      {
        id: "phy-T8-q1",
        source: "predicted",
        stem:
          "一段电阻 R = 20Ω 的导体两端加 4V 电压，求通过的电流。要求按 6 行格式答题。",
        answer:
          "解：\n已知：U = 4V，R = 20Ω\n求：I\n公式：I = U/R\n代入：I = 4V ÷ 20Ω = 0.2 A\n答：通过该导体的电流为 0.2 A。",
        hint1: "用欧姆定律 I = U/R。",
        hint2: "代入数值时带单位，结果带单位。",
        trap: "不写'解''已知''求''答'扣分。",
        whyCorrect: "标准 6 行格式。",
      },
      {
        id: "phy-T8-q2",
        source: "predicted",
        stem:
          "一物体质量 540 g，体积 60 cm³。求其密度。",
        answer:
          "解：\n已知：m = 540g, V = 60 cm³\n求：ρ\n公式：ρ = m/V\n代入：ρ = 540g ÷ 60cm³ = 9 g/cm³\n答：物体密度为 9 g/cm³。",
        hint1: "ρ = m/V。",
        hint2: "540 ÷ 60 = 9。",
        whyCorrect: "标准格式 + 单位齐全。",
      },
      {
        id: "phy-T8-q3",
        source: "predicted",
        stem:
          "一辆汽车 30 min 内行驶 36 km。求汽车速度（用 km/h 表示）。",
        answer:
          "解：\n已知：t = 30 min = 0.5 h，s = 36 km\n求：v\n公式：v = s/t\n代入：v = 36 km ÷ 0.5 h = 72 km/h\n答：汽车速度为 72 km/h。",
        hint1: "v = s/t。",
        hint2: "30 min 要换算成 0.5 h。",
        whyCorrect: "正确换算 + 6 行齐全。",
      },
      {
        id: "phy-T8-q4",
        source: "predicted",
        stem:
          "一灯泡上标'220V 60W'，求灯泡正常工作时通过的电流。",
        answer:
          "解：\n已知：U = 220V，P = 60W\n求：I\n公式：P = UI → I = P/U\n代入：I = 60W ÷ 220V ≈ 0.27 A\n答：通过灯泡的电流约为 0.27 A。",
        hint1: "P = UI → I = P/U。",
        whyCorrect: "标准应用 P=UI 推导。",
      },
      {
        id: "phy-T8-q5",
        source: "predicted",
        stem:
          "压力 F = 200 N，作用在 0.1 m² 面积上。求压强。",
        answer:
          "解：\n已知：F = 200N，S = 0.1 m²\n求：p\n公式：p = F/S\n代入：p = 200N ÷ 0.1m² = 2000 Pa\n答：压强为 2000 Pa。",
        hint1: "p = F/S。",
        whyCorrect: "标准压强计算。",
      },
      {
        id: "phy-T8-q6",
        source: "predicted",
        stem:
          "电阻 R₁=2Ω 与 R₂=3Ω 串联接到 10V 电源上。求干路电流。",
        answer:
          "解：\n已知：R₁=2Ω，R₂=3Ω，U总=10V\n求：I\n公式：R总 = R₁+R₂；I = U总/R总\n代入：R总 = 2+3 = 5Ω；I = 10/5 = 2 A\n答：干路电流为 2 A。",
        hint1: "串联总电阻 = 两个相加。",
        hint2: "I = U/R。",
        whyCorrect: "串联公式 + 欧姆定律。",
      },
      {
        id: "phy-T8-q7",
        source: "predicted",
        stem:
          "水的密度 1.0×10³ kg/m³。一个容积 0.5 m³ 的水箱装满水时水的质量是多少？",
        answer:
          "解：\n已知：ρ = 1.0×10³ kg/m³，V = 0.5 m³\n求：m\n公式：m = ρV\n代入：m = 1.0×10³ × 0.5 = 500 kg\n答：水的质量为 500 kg。",
        hint1: "m = ρV。",
        whyCorrect: "密度公式变形应用。",
      },
      {
        id: "phy-T8-q8",
        source: "predicted",
        stem:
          "电流 I = 0.5 A 通过电阻 R = 20Ω，10 s 内产生的热量是多少？",
        answer:
          "解：\n已知：I = 0.5A，R = 20Ω，t = 10s\n求：Q\n公式：Q = I²Rt\n代入：Q = 0.5² × 20 × 10 = 50 J\n答：产生的热量为 50 J。",
        hint1: "焦耳定律 Q = I²Rt。",
        hint2: "0.5² = 0.25，0.25×20×10 = 50。",
        whyCorrect: "焦耳定律应用。",
      },
      {
        id: "phy-T8-q9",
        source: "predicted",
        stem:
          "汽车以 20 m/s 的速度匀速行驶 5 min。求行驶距离。",
        answer:
          "解：\n已知：v = 20m/s，t = 5min = 300s\n求：s\n公式：s = vt\n代入：s = 20 × 300 = 6000 m = 6 km\n答：行驶距离为 6 km。",
        hint1: "s = vt。",
        hint2: "5 min = 300 s。",
        whyCorrect: "时间换算 + 速度公式。",
      },
      {
        id: "phy-T8-q10",
        source: "predicted",
        stem:
          "某热水器电阻 R = 50Ω，电压 220V，工作 10 min。求消耗的电能。",
        answer:
          "解：\n已知：R = 50Ω，U = 220V，t = 10min = 600s\n求：W\n公式：I = U/R；P = UI；W = Pt\n代入：I = 220/50 = 4.4A；P = 220×4.4 = 968W；W = 968×600 ≈ 580800 J\n答：消耗电能约 5.8×10⁵ J。",
        hint1: "电能 W = UIt 或 W = Pt。",
        hint2: "需要先求电流。",
        whyCorrect: "完整推导 I → P → W。",
      },
    ],
    masteryTest: {
      description: "1 道计算题，写出 6 行（哪怕公式错也写齐）",
      passThreshold: "6 行齐全 + 至少 4 行有内容算掌握",
    },
    stuckResponses: {
      no_start:
        "先抄'解：'。再把题里的数字一行一行抄到'已知'。",
      cant_read: "题里给了几个数字？分别是什么物理量？",
      annoyed: "今天只抄六行格式 5 遍。10 分钟搞定。",
    },
    coachPrompt:
      "让烽峻先写'解：'。再让他把题里的数字抄到'已知'。一行一行来。",
  },

  {
    id: "phy-T9-multi-choice",
    subject: "physics",
    title: "多选题策略（第 7-9 题）",
    examType: "多选题 3×2 = 6 分",
    estGain: "+2-3 分（防错损）",
    priority: 0,
    oneLiner:
      "**没把握只选 1 个最稳的拿 1 分**。错选满盘清零（0 分）。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q7",
        topic: "嫦娥六号多选（答 ACD）",
      },
    ],
    whyFits:
      "多选题评分规则：全对 2 分，对但不全 1 分，错选 0 分。**学会选少 = 防错损 = 多 2-3 分**。",
    steps: [
      "**评分规则**（必须背）：",
      "  · 全对 = 2 分",
      "  · 对但不全（漏选）= 1 分",
      "  · 错选 1 个 = 0 分（满盘清零！）",
      "**策略**：",
      "  · 4 个选项里只选你 100% 确定对的那 1 个（保 1 分）",
      "  · 不要贪 2 分多选，错选直接 0 分",
      "  · 排除法：先排除明显错的，剩下 2-3 个时只选最稳的 1 个",
    ],
    example: {
      id: "phy-T9-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "Q7",
      },
      stem:
        "关于嫦娥六号月球采样，下列说法正确的是（多选）（    ）",
      options: [
        { key: "A", text: "太阳、月球、探测器空间尺度依次减小" },
        { key: "B", text: "太阳能是不可再生能源" },
        { key: "C", text: "铝基复合材料密度比钢小" },
        { key: "D", text: "外钻杆与月壤之间有摩擦力" },
      ],
      answer: "ACD",
      whyCorrect:
        "B 错（太阳能是可再生）；A 太阳>月球>探测器对；C 铝<钢密度对；D 接触+相对运动有摩擦力对。",
    },
    trainingQuestions: [
      {
        id: "phy-T9-q1",
        source: "predicted",
        stem:
          "考场上多选题 4 个选项，你只能确定 A 是对的，B、C、D 不确定。最该怎么做？",
        options: [
          { key: "A", text: "只选 A（保 1 分）" },
          { key: "B", text: "选 A、B、C、D 全部（赌 2 分）" },
          { key: "C", text: "都不选（0 分）" },
          { key: "D", text: "随便选 2 个" },
        ],
        answer: "A",
        whyFitsStudent: "只选 A 保住 1 分。多选错一个就 0 分。",
        hint1: "多选题错选直接 0 分。",
        hint2: "保 1 分比赌 2 分更划算。",
        trap: "B 是错的策略。错选满盘清零。",
        whyCorrect: "稳健选少 = 防错损 = 总分更高。",
      },
      {
        id: "phy-T9-q2",
        source: "predicted",
        stem:
          "下列关于多选题评分规则正确的是（    ）",
        options: [
          { key: "A", text: "全对 = 满分；漏选 = 部分分；错选 = 0 分" },
          { key: "B", text: "全对 = 满分；漏选 = 满分；错选 = 部分分" },
          { key: "C", text: "都不选 = 半分" },
          { key: "D", text: "随便选都给分" },
        ],
        answer: "A",
        hint1: "多选评分核心。",
        whyCorrect: "标准评分规则。",
      },
      {
        id: "phy-T9-q3",
        source: "predicted",
        stem:
          "多选题中你判断 A、B 都对，C、D 都错。该怎么选？",
        options: [
          { key: "A", text: "只选 A" },
          { key: "B", text: "选 AB" },
          { key: "C", text: "选 ABC" },
          { key: "D", text: "都不选" },
        ],
        answer: "B",
        hint1: "AB 都确定对就选 AB。",
        whyCorrect: "AB 确定对就选 2 分。",
      },
      {
        id: "phy-T9-q4",
        source: "predicted",
        stem:
          "下列哪个不是多选题的稳妥策略？",
        options: [
          { key: "A", text: "只选 100% 确定的" },
          { key: "B", text: "排除明显错的" },
          { key: "C", text: "猜剩下的全选" },
          { key: "D", text: "宁缺勿错" },
        ],
        answer: "C",
        hint1: "猜全选 = 错选风险高。",
        whyCorrect: "C 风险大。",
      },
      {
        id: "phy-T9-q5",
        source: "predicted",
        stem:
          "对'多选题最优策略'描述正确的是（    ）",
        options: [
          { key: "A", text: "选越多越好" },
          { key: "B", text: "选越少越好" },
          { key: "C", text: "只选 100% 确定的，宁缺勿错" },
          { key: "D", text: "随机选" },
        ],
        answer: "C",
        whyCorrect: "标准策略。",
      },
      {
        id: "phy-T9-q6",
        source: "predicted",
        stem:
          "多选题 3 道每题 2 分共 6 分。如果每题只确定 1 个选项稳健选，理论最低拿（    ）分。",
        options: [
          { key: "A", text: "0 分" },
          { key: "B", text: "1 分" },
          { key: "C", text: "3 分" },
          { key: "D", text: "6 分" },
        ],
        answer: "C",
        hint1: "每题保 1 分 × 3 题 = 3 分。",
        whyCorrect: "保底 3 分。",
      },
      {
        id: "phy-T9-q7",
        source: "predicted",
        stem:
          "下列关于多选题中'错选 0 分'的理解正确的是（    ）",
        options: [
          { key: "A", text: "选错 1 个就全题 0 分" },
          { key: "B", text: "选错 1 个还能得分" },
          { key: "C", text: "选错不影响得分" },
          { key: "D", text: "选错给倒扣" },
        ],
        answer: "A",
        whyCorrect: "中考多选错选清零规则。",
      },
      {
        id: "phy-T9-q8",
        source: "predicted",
        stem:
          "你做完多选题，发现 4 个选项不能确定哪个对。最佳做法是（    ）",
        options: [
          { key: "A", text: "蒙 1 个" },
          { key: "B", text: "都选" },
          { key: "C", text: "都不选（0 分）" },
          { key: "D", text: "选 1 个最不像错的" },
        ],
        answer: "D",
        hint1: "选 1 个看着最对的赌一下。",
        hint2: "至少能保 0-1 分。",
        whyCorrect: "D 最稳。",
      },
      {
        id: "phy-T9-q9",
        source: "predicted",
        stem:
          "对一道多选题中的 4 个选项分析：A 正确，B 错误，C 正确，D 不能判断。最佳选法是（    ）",
        options: [
          { key: "A", text: "选 ACD" },
          { key: "B", text: "选 AC" },
          { key: "C", text: "选 ACBD 全部" },
          { key: "D", text: "什么都不选" },
        ],
        answer: "B",
        hint1: "AC 确定对，D 不确定不选。",
        whyCorrect: "保住 AC 2 分，避免赌 D。",
      },
      {
        id: "phy-T9-q10",
        source: "predicted",
        stem:
          "下列对'多选不贪，错选清零'的理解正确的是（    ）",
        options: [
          { key: "A", text: "宁可少选拿 1 分，也不贪 2 分错选 0 分" },
          { key: "B", text: "全部都选才能拿满分" },
          { key: "C", text: "随便选哪个" },
          { key: "D", text: "多选题都跳" },
        ],
        answer: "A",
        whyCorrect: "稳健保分原则。",
      },
    ],
    masteryTest: {
      description: "3 道多选题，要求每题只选最稳的 1-2 个",
      passThreshold: "3 题都没出现错选 = 掌握；任 1 题错选 = 重练",
    },
    stuckResponses: {
      no_start:
        "先排除你 100% 确定错的。剩下里选最稳的 1 个。",
      annoyed: "今天只记口诀：多选不贪，错选清零。",
    },
    coachPrompt:
      "考烽峻：多选题没把握选几个？答：1 个最稳的。",
  },

  {
    id: "phy-T10-drawing",
    subject: "physics",
    title: "作图题三类（力 / 光 / 电）",
    examType: "作图题 4 分",
    estGain: "+2-3 分",
    priority: 1,
    oneLiner:
      "力 = 标箭头方向；光 = 法线 + 等角；电 = 电流表串、电压表并。",
    sourceTrace: [
      { kind: "placeholder", note: "作图题每年必考；明天补具体真题" },
    ],
    whyFits:
      "作图 4 分。每类至少能拿 1 分（套路化的部分）。",
    steps: [
      "**力的示意图**：",
      "  · 用直尺画箭头",
      "  · 重力 G 向下；支持力 N 向上；拉力沿绳方向",
      "  · 起点（作用点）画在物体上",
      "  · **箭头方向对 = 1 分**",
      "**光路图**：",
      "  · 法线 = 垂直于反射面的虚线",
      "  · 入射光带箭头进，反射光带箭头出",
      "  · 入射角 = 反射角（角度对称）",
      "  · **法线 + 角度对称 = 1-2 分**",
      "**电路图**：",
      "  · 电流表 'A' 符号**串联**到电路里",
      "  · 电压表 'V' 符号**并联**到用电器两端",
      "  · 各元件依次连接",
    ],
    example: {
      id: "phy-T10-ex",
      source: "predicted",
      stem:
        "如图小球静止挂在轻绳上，请画出小球所受重力的示意图。",
      answer:
        "在小球中心画一个箭头：起点在球心，方向向下，标'G'。（重力永远向下）",
      whyFitsStudent: "标准重力示意图，箭头向下 + 标 G = 1 分。",
      hint1: "重力方向是？",
      hint2: "永远向下，无论什么物体。",
      trap: "箭头反向（向上）；忘标 G。",
      whyCorrect: "重力示意图：起点物体上、方向向下、字母 G。",
    },
    trainingQuestions: [
      {
        id: "phy-T10-q1",
        source: "predicted",
        stem:
          "桌面上一个静止的苹果，画出苹果所受重力示意图。描述你应该怎么画。",
        answer:
          "起点：苹果中心；方向：竖直向下；箭头长度按比例；标注'G'（或'重力 G = mg'）",
        hint1: "重力方向永远竖直向下。",
        hint2: "起点要在物体重心（中心）。",
        trap: "画到桌面上而不是从苹果中心。",
        whyCorrect: "重力示意图三要素：起点、方向、字母 G。",
      },
      {
        id: "phy-T10-q2",
        source: "predicted",
        stem:
          "光从空气斜射到水面发生反射和折射。描述如何画完整的光路图。",
        answer:
          "1. 画水面（横线）；2. 画法线（垂直水面虚线）；3. 入射光线（带箭头从空气入水面）；4. 反射光线（同侧弹回，反射角=入射角）；5. 折射光线（折入水中，折射角<入射角）",
        hint1: "5 个元素：水面、法线、入射、反射、折射。",
        hint2: "法线必须是虚线。",
        whyCorrect: "标准光路图作图法。",
      },
      {
        id: "phy-T10-q3",
        source: "predicted",
        stem:
          "画 2 个灯泡 L₁、L₂ 与开关 S 串联连接的电路图（用文字描述各元件位置）。",
        answer:
          "电源（左边 + 极 → 右边 - 极）→ 电流出 + 极 → 经过开关 S → 经过 L₁ → 经过 L₂ → 回到 - 极。整个电路只有 1 条路径。",
        hint1: "串联 = 1 条路。",
        hint2: "电流从 + 极出，依次经过所有元件，回到 - 极。",
        whyCorrect: "串联电路特征：单一路径。",
      },
      {
        id: "phy-T10-q4",
        source: "predicted",
        stem:
          "怎样画'两个力的示意图'？以 100 N 水平推力为例。",
        answer:
          "1. 在物体上选取作用点；2. 画箭头方向（水平向右）；3. 长度按比例（如 1 cm 表示 50 N）；4. 标 F = 100 N。",
        hint1: "作用点 + 方向 + 长度 + 标注。",
        whyCorrect: "力的示意图四要素。",
      },
      {
        id: "phy-T10-q5",
        source: "predicted",
        stem:
          "在凸透镜光路图中，画一束平行于主光轴的光线经凸透镜后的折射光线。",
        answer: "折射光线汇聚到焦点 F（透镜另一侧的焦点位置）",
        hint1: "凸透镜三条特殊光线之一：平行 → 焦点。",
        whyCorrect: "凸透镜将平行光会聚到焦点。",
      },
      {
        id: "phy-T10-q6",
        source: "predicted",
        stem:
          "画电流表串联在电路里时，应注意（    ）",
        options: [
          { key: "A", text: "电流表与用电器串联" },
          { key: "B", text: "电流从 - 极进 + 极出" },
          { key: "C", text: "随便接" },
          { key: "D", text: "电流表与用电器并联" },
        ],
        answer: "A",
        hint1: "电流表内阻很小，必须串联。",
        whyCorrect: "电流表与用电器串联。",
      },
      {
        id: "phy-T10-q7",
        source: "predicted",
        stem:
          "画电压表时应当（    ）",
        options: [
          { key: "A", text: "与用电器串联" },
          { key: "B", text: "与用电器并联" },
          { key: "C", text: "可串可并" },
          { key: "D", text: "与电源串联" },
        ],
        answer: "B",
        hint1: "电压表内阻很大，必须并联。",
        whyCorrect: "电压表与用电器并联。",
      },
      {
        id: "phy-T10-q8",
        source: "predicted",
        stem:
          "画'物体在斜面上'的受力分析示意图（包括重力和支持力）。",
        answer:
          "重力 G 竖直向下；支持力 N 垂直于斜面（斜上方）；标好两个箭头各自起点和方向；标注 G、N。",
        hint1: "重力总是向下，无论什么斜面。",
        hint2: "支持力垂直于接触面。",
        whyCorrect: "标准斜面受力分析。",
      },
      {
        id: "phy-T10-q9",
        source: "predicted",
        stem:
          "用尺子在试卷上画长度时，下列做法错误的是（    ）",
        options: [
          { key: "A", text: "尺与所画线段重合" },
          { key: "B", text: "笔与尺紧贴" },
          { key: "C", text: "随手画" },
          { key: "D", text: "看清刻度对零位" },
        ],
        answer: "C",
        hint1: "作图必须用尺。",
        whyCorrect: "随手画不是作图。",
      },
      {
        id: "phy-T10-q10",
        source: "predicted",
        stem:
          "下列作图题中作图必须使用'虚线'的是（    ）",
        options: [
          { key: "A", text: "光线" },
          { key: "B", text: "法线" },
          { key: "C", text: "电路连接线" },
          { key: "D", text: "力的方向" },
        ],
        answer: "B",
        hint1: "法线 = 辅助线 = 虚线。",
        hint2: "其他都是实线。",
        whyCorrect: "法线是辅助线，规范画法用虚线。",
      },
    ],
    masteryTest: {
      description: "3 道作图（力 1 + 光 1 + 电 1）",
      passThreshold: "至少 2 道画出关键部分（箭头 / 法线 / 串并联）算入门",
    },
    stuckResponses: {
      no_start: "看题哪一类。力 → 箭头；光 → 法线；电 → 串并联。",
      cant_memorize:
        "口诀：'力箭头 + 光法线 + 电流表串 + 电压表并'。",
    },
    coachPrompt:
      "让烽峻先判作图三类。再让他按对应规则画。",
  },

  {
    id: "phy-T11-experiment-operation",
    subject: "physics",
    title: "实验操作三选一（10 分加试）",
    examType: "实验操作加试 10 分（4-5 月已考完）",
    estGain: "若已考完不用练；若需补考 +5-7 分",
    priority: 2,
    oneLiner:
      "辽宁省 3 项目录：平面镜成像 / 天平测质量 / 测串联电流。死练就给分。",
    sourceTrace: [
      {
        kind: "placeholder",
        note: "辽宁省统一目录公开度低；明天向班主任索要学校发的目录",
      },
    ],
    whyFits:
      "你说实验操作可能已 5 月考完。如果还没考，本卡是 5-7 分送分。",
    steps: [
      "**平面镜成像**：玻璃板垂直桌面 + 两支等大蜡烛 + 改变物距重做 ≥3 次",
      "**天平测质量**：左物右码 + 用镊子夹砝码 + 先调平再测 + 读数 = 砝码 + 游码",
      "**测串联电流**：电流表串联 + 试触选量程（先大后小）+ '+' 接电源正极",
      "考前抽签后，**先口头报告'请检查仪器'**+'**检查气密性**'（这两句各 1 分）",
      "**结束清理实验台**（这步也 1 分）",
    ],
    example: {
      id: "phy-T11-ex",
      source: "predicted",
      stem:
        "实验操作中，下列做法**错误**的是（    ）",
      options: [
        { key: "A", text: "天平用镊子夹砝码" },
        { key: "B", text: "电流表与用电器串联" },
        { key: "C", text: "用手拿砝码" },
        { key: "D", text: "测量前先调平天平" },
      ],
      answer: "C",
      whyFitsStudent: "用手拿砝码 = 污染 + 增加误差。",
      hint1: "砝码能不能用手碰？",
      hint2: "用镊子夹是规范做法。",
      trap: "看清是问'错误'，不是'正确'。",
      whyCorrect: "C 是错误做法（要用镊子）。",
    },
    trainingQuestions: [
      {
        id: "phy-T11-q1",
        source: "predicted",
        stem: "用托盘天平称物体质量的标准做法是（    ）",
        options: [
          { key: "A", text: "左物右码" },
          { key: "B", text: "右物左码" },
          { key: "C", text: "用手拿砝码" },
          { key: "D", text: "看物体大小估测" },
        ],
        answer: "A",
        hint1: "天平基本规则：左物右码。",
        whyCorrect: "标准做法。",
      },
      {
        id: "phy-T11-q2",
        source: "predicted",
        stem:
          "做平面镜成像实验时，玻璃板必须（    ）",
        options: [
          { key: "A", text: "平躺在桌面" },
          { key: "B", text: "垂直于桌面" },
          { key: "C", text: "倾斜放置" },
          { key: "D", text: "贴在墙上" },
        ],
        answer: "B",
        hint1: "玻璃板要垂直 → 像才在桌面上。",
        whyCorrect: "垂直放置确保像位置正确。",
      },
      {
        id: "phy-T11-q3",
        source: "predicted",
        stem:
          "电流表使用时下列做法错误的是（    ）",
        options: [
          { key: "A", text: "串联在电路中" },
          { key: "B", text: "电流从 + 极进 - 极出" },
          { key: "C", text: "直接接电源（不接用电器）" },
          { key: "D", text: "试触选择量程" },
        ],
        answer: "C",
        hint1: "电流表直接接电源会烧坏。",
        whyCorrect: "电流表必须接用电器，不能直接接电源。",
      },
      {
        id: "phy-T11-q4",
        source: "predicted",
        stem: "实验前应做的两件事是 ____ 和 ____。",
        answer: "检查仪器（看仪器是否齐全完好）；检查气密性（如有气体实验）",
        hint1: "考前 2 句各 1 分。",
        whyCorrect: "实验加试评分项。",
      },
      {
        id: "phy-T11-q5",
        source: "predicted",
        stem: "实验结束后必须做的一步是（    ）",
        options: [
          { key: "A", text: "马上离开" },
          { key: "B", text: "整理实验台并清洗仪器" },
          { key: "C", text: "把废液倒在桌上" },
          { key: "D", text: "随便处理" },
        ],
        answer: "B",
        hint1: "整理 = 1 分。",
        whyCorrect: "标准收尾动作。",
      },
      {
        id: "phy-T11-q6",
        source: "predicted",
        stem:
          "测量串联电路中某一灯泡两端电压，电压表的接法是（    ）",
        options: [
          { key: "A", text: "与该灯泡串联" },
          { key: "B", text: "与该灯泡并联" },
          { key: "C", text: "与电源并联" },
          { key: "D", text: "与开关并联" },
        ],
        answer: "B",
        hint1: "电压表测谁的电压就并联到谁两端。",
        whyCorrect: "电压表测灯泡 → 与灯泡并联。",
      },
      {
        id: "phy-T11-q7",
        source: "predicted",
        stem:
          "用刻度尺测物体长度时，下列做法正确的是（    ）",
        options: [
          { key: "A", text: "尺面与被测物体不贴近" },
          { key: "B", text: "尺面紧贴物体，眼睛正视读数" },
          { key: "C", text: "凭目测" },
          { key: "D", text: "用尺斜放" },
        ],
        answer: "B",
        hint1: "刻度尺：紧贴 + 正视。",
        whyCorrect: "标准做法。",
      },
      {
        id: "phy-T11-q8",
        source: "predicted",
        stem:
          "天平称量物体质量为 56.7g，砝码 50g + 5g + 1g 各 1 个，游码读数应为（    ）",
        options: [
          { key: "A", text: "0.7g" },
          { key: "B", text: "1.7g" },
          { key: "C", text: "6.7g" },
          { key: "D", text: "0.07g" },
        ],
        answer: "A",
        hint1: "总质量 = 砝码 + 游码。",
        hint2: "56.7 - 50 - 5 - 1 = 0.7。",
        whyCorrect: "游码读数 = 总 - 砝码。",
      },
      {
        id: "phy-T11-q9",
        source: "predicted",
        stem:
          "实验探究的'多次测量取平均值'的目的是（    ）",
        options: [
          { key: "A", text: "凑数" },
          { key: "B", text: "减小误差" },
          { key: "C", text: "看哪次最准" },
          { key: "D", text: "练习" },
        ],
        answer: "B",
        hint1: "减小偶然误差。",
        whyCorrect: "标准答法。",
      },
      {
        id: "phy-T11-q10",
        source: "predicted",
        stem:
          "实验时电压表'+''-' 接线柱接错可能导致（    ）",
        options: [
          { key: "A", text: "指针反向偏转，可能损坏电表" },
          { key: "B", text: "指针不动" },
          { key: "C", text: "示数偏大" },
          { key: "D", text: "无影响" },
        ],
        answer: "A",
        hint1: "正负反接 → 指针反偏。",
        whyCorrect: "电压表接错正负会反偏甚至损坏。",
      },
    ],
    masteryTest: {
      description: "随机抽 1 项实验，口述 5 个评分动作",
      passThreshold: "5 个动作说出 4 个算入门；全部算掌握",
    },
    stuckResponses: {
      annoyed: "已考完就跳过本卡。还没考则今天只学 1 项'平面镜成像'。",
    },
    coachPrompt:
      "先问烽峻：实验操作考完没？没考再考他每项的关键动作。",
  },

  {
    id: "phy-T12-skip-strategy",
    subject: "physics",
    title: "物理考试时间分配 + 跳难题",
    examType: "全卷 75 分钟（化学合卷）",
    estGain: "+2-3 分（间接）",
    priority: 1,
    oneLiner:
      "笔试 80 分，与化学合卷 150 分钟。物理约 60-75 分钟。压轴计算不做。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "考试说明",
        topic: "物理化学合卷 150 分钟",
      },
    ],
    whyFits:
      "时间分配 = 多 2-3 分。压轴计算别浪费时间。",
    steps: [
      "**单选 1-6 题**：≤ 12 分钟必抢（12 分）",
      "**多选 7-9 题**：每题选 1 个最稳的（参考 T9）",
      "**填空 12 个**：≤ 15 分钟，前 6 个空必抢",
      "**作图 4 分**：≤ 5 分钟，3 类各 1 个套路",
      "**实验探究 24 分**：前 2 小问套模板必抢，后面写多少算多少",
      "**计算第 1 题 8 分**：6 行格式必抢",
      "**计算第 2-3 题（压轴）**：写公式拿 1 分就走，**不浪费时间**",
      "最后 5 分钟：回头检查多选题（最易出错）",
    ],
    example: {
      id: "phy-T12-ex",
      source: "predicted",
      stem:
        "考场上做到计算题第 3 题（压轴），花了 5 分钟还没思路。最该做什么？",
      options: [
        { key: "A", text: "继续硬想" },
        { key: "B", text: "写公式拿 1 分就走" },
        { key: "C", text: "完全放弃，留白" },
        { key: "D", text: "随便算一个数字" },
      ],
      answer: "B",
      whyFitsStudent: "压轴题写公式至少 1-2 分。继续耗就丢前面会的题。",
      hint1: "你目标 45 分。压轴题花 10 分钟最多 3 分，但耗时太多。",
      hint2: "写公式 1 分钟就 1 分。",
      trap: "C 是错的，留白 0 分；写公式 1 分。",
      whyCorrect: "B 是性价比最优解。",
    },
    trainingQuestions: [
      {
        id: "phy-T12-q1",
        source: "predicted",
        stem:
          "物理 80 分笔试 + 化学合卷 150 分钟。物理建议用时是（    ）",
        options: [
          { key: "A", text: "30 分钟" },
          { key: "B", text: "60-75 分钟" },
          { key: "C", text: "120 分钟" },
          { key: "D", text: "150 分钟" },
        ],
        answer: "B",
        hint1: "物理 80/170 分；化学 60/170 分。",
        hint2: "按比例分配 + 留 10 分钟检查。",
        whyCorrect: "物理 60-75 分钟合适。",
      },
      {
        id: "phy-T12-q2",
        source: "predicted",
        stem:
          "选择题 9 题（前 6 单选 + 后 3 多选），用时上限是（    ）",
        options: [
          { key: "A", text: "5 分钟" },
          { key: "B", text: "10-15 分钟" },
          { key: "C", text: "30 分钟" },
          { key: "D", text: "1 小时" },
        ],
        answer: "B",
        hint1: "1 题 1-2 分钟。",
        whyCorrect: "9 题约 10-15 分钟。",
      },
      {
        id: "phy-T12-q3",
        source: "predicted",
        stem:
          "考场上看到一道选择题花了 3 分钟还在纠结。最该做什么？",
        options: [
          { key: "A", text: "继续花 5 分钟想" },
          { key: "B", text: "凭直觉选 1 个标记返回" },
          { key: "C", text: "空着" },
          { key: "D", text: "放弃整科" },
        ],
        answer: "B",
        hint1: "选择题不能空（否则 0 分）。",
        hint2: "凭直觉选 + 标记 → 后回。",
        whyCorrect: "B 是性价比最优。",
      },
      {
        id: "phy-T12-q4",
        source: "predicted",
        stem:
          "做大计算题写不出公式时，争取的部分分是（    ）",
        options: [
          { key: "A", text: "0 分" },
          { key: "B", text: "1-2 分（写已知 + 求 + 公式）" },
          { key: "C", text: "全部分" },
          { key: "D", text: "扣分" },
        ],
        answer: "B",
        hint1: "中考计算题分步给分。",
        hint2: "写'解''已知''求''公式'就有过程分。",
        whyCorrect: "争取过程分。",
      },
      {
        id: "phy-T12-q5",
        source: "predicted",
        stem:
          "下列是物理考试时间分配建议错误的是（    ）",
        options: [
          { key: "A", text: "选择 + 填空 ≤ 25 分钟" },
          { key: "B", text: "实验 ≤ 20 分钟" },
          { key: "C", text: "压轴 30 分钟" },
          { key: "D", text: "留 5-10 分钟检查" },
        ],
        answer: "C",
        hint1: "压轴 30 分钟不够也不值。",
        hint2: "压轴最多 5-8 分钟。",
        whyCorrect: "C 错，压轴时间过多耽误前面。",
      },
      {
        id: "phy-T12-q6",
        source: "predicted",
        stem:
          "做物理实验题时，看到'多次测量取平均值'的目的，最稳的答法是 ____。",
        answer: "减小（实验）误差，使结果更准确",
        hint1: "标准答法。",
        whyCorrect: "中考标准模板答法。",
      },
      {
        id: "phy-T12-q7",
        source: "predicted",
        stem:
          "做实验探究题最关键的得分点是（    ）",
        options: [
          { key: "A", text: "全部做对" },
          { key: "B", text: "前 1-2 个空（实验方法 / 控制变量描述）" },
          { key: "C", text: "压轴小问" },
          { key: "D", text: "无所谓" },
        ],
        answer: "B",
        hint1: "实验题前 1-2 空套模板答。",
        whyCorrect: "B 是高 ROI 答题点。",
      },
      {
        id: "phy-T12-q8",
        source: "predicted",
        stem:
          "考前做最后一个实验题，看完发现完全不会。最该做什么？",
        options: [
          { key: "A", text: "继续硬看" },
          { key: "B", text: "写出'实验方法是控制变量法'+'多次实验为减小误差'" },
          { key: "C", text: "全空着" },
          { key: "D", text: "放弃" },
        ],
        answer: "B",
        hint1: "前 2 句基本是固定模板答。",
        whyCorrect: "套模板争取过程分。",
      },
      {
        id: "phy-T12-q9",
        source: "predicted",
        stem:
          "考前 5 分钟最重要的事是（    ）",
        options: [
          { key: "A", text: "蒙最难的题" },
          { key: "B", text: "检查选择题填涂" },
          { key: "C", text: "再多写两个字" },
          { key: "D", text: "睡一会儿" },
        ],
        answer: "B",
        hint1: "选择题没填涂 = 0 分。",
        whyCorrect: "检查填涂避免低级丢分。",
      },
      {
        id: "phy-T12-q10",
        source: "predicted",
        stem:
          "下列对'你的物理目标 45 分'的拆分合理的是（    ）",
        options: [
          { key: "A", text: "选择填空 18 + 计算 12 + 实验 12 + 作图 3" },
          { key: "B", text: "全靠选择填空（30 分）" },
          { key: "C", text: "全靠压轴（22 分）" },
          { key: "D", text: "全靠运气" },
        ],
        answer: "A",
        hint1: "拆分多个来源更稳。",
        whyCorrect: "A 是合理拆分。",
      },
    ],
    masteryTest: {
      description: "1 套真题模拟 75 分钟（物理部分），按本时间分配",
      passThreshold: "前面送分题不超时 + 压轴只用 ≤ 3 分钟",
    },
    stuckResponses: {
      annoyed: "今天不模考。只记口诀：压轴写公式拿 1 分就走。",
    },
    coachPrompt:
      "考烽峻：物理压轴计算题 5 分钟没思路怎么办？答：写公式拿 1 分就走。",
  },

  // ============ S1：选择题双策略 ============
  {
    id: "phy-S1-select-strategy",
    subject: "physics",
    title: "选择题双策略：审题划重点 + 排除法（含多选）",
    examType: "单选 6 道 + 多选 3 道",
    estGain: "+2-3 分",
    priority: 0,
    oneLiner:
      "审题先圈 5 类限定词；多选用排除法宁少勿多（错选清零）。",
    sourceTrace: [
      { kind: "placeholder", note: "通用应试 + 多选评分铁律" },
    ],
    whyFits:
      "你 36/90，多选题最容易丢分（错选清零）。审题 + 排除法 + 宁少勿多 = 防错损 +2-3 分。",
    steps: [
      "**审题 5 类必圈词**：",
      "  · '**正确**' / '**不正确**' / '**错误**'",
      "  · '**单选**' / '**多选**'（多选评分不同！）",
      "  · '**最大** / **最小**'",
      "  · '**变大** / **变小** / **不变**'",
      "  · '**所有** / **某些**'",
      "**多选题保命卡（评分铁律）**：",
      "  · 全对 = 2 分",
      "  · 对但不全（漏选）= 1 分",
      "  · **错选 1 个 = 0 分（满盘清零！）**",
      "  · 策略：只选 100% 确定的，宁少勿多",
      "**排除法步骤**：",
      "  · 先排明显错的",
      "  · 单选剩 2 选 1 时蒙 C（物理 C 略高）",
      "  · 多选剩 2-3 个时只选最稳的 1 个",
    ],
    example: {
      id: "phy-S1-ex",
      source: "predicted",
      stem: "多选题：你只确定 A 对，B、C、D 不确定。最该怎么选？",
      options: [
        { key: "A", text: "只选 A（保 1 分）" },
        { key: "B", text: "选 ABCD 全部（赌 2 分）" },
        { key: "C", text: "都不选（0 分）" },
        { key: "D", text: "随便选 2 个" },
      ],
      answer: "A",
      whyCorrect:
        "多选错选清零。只选 A = 保 1 分。选错任何 1 个 = 0 分。",
    },
    trainingQuestions: [
      {
        id: "phy-S1-q1",
        source: "predicted",
        stem: "多选评分规则下列说法正确的是（    ）",
        options: [
          { key: "A", text: "全对 = 满分；漏选 = 部分分；错选 = 0 分" },
          { key: "B", text: "全对 = 满分；漏选 = 满分" },
          { key: "C", text: "都不选 = 半分" },
          { key: "D", text: "随便选都给分" },
        ],
        answer: "A",
        whyCorrect: "标准规则。",
      },
      {
        id: "phy-S1-q2",
        source: "predicted",
        stem: "多选你判 A、B 都对，C、D 都错。该怎么选？",
        options: [
          { key: "A", text: "只选 A" },
          { key: "B", text: "选 AB" },
          { key: "C", text: "选 ABC" },
          { key: "D", text: "都不选" },
        ],
        answer: "B",
        whyCorrect: "AB 都确定对就选 AB 拿 2 分。",
      },
      {
        id: "phy-S1-q3",
        source: "predicted",
        stem: "下列**不是**多选题的稳妥策略？",
        options: [
          { key: "A", text: "只选 100% 确定的" },
          { key: "B", text: "排除明显错的" },
          { key: "C", text: "猜剩下的全选" },
          { key: "D", text: "宁缺勿错" },
        ],
        answer: "C",
        whyCorrect: "C 风险大。",
      },
      {
        id: "phy-S1-q4",
        source: "predicted",
        stem: "下列说法**不正确**的是（    ）",
        options: [
          { key: "A", text: "速度越大动能越大" },
          { key: "B", text: "质量越大动能越大" },
          { key: "C", text: "动能不是矢量" },
          { key: "D", text: "温度越高分子动能越大" },
        ],
        answer: "A",
        hint1: "审题：**不正确**。",
        hint2: "动能不仅和速度有关，还和质量有关。'越大' 不严谨。",
        whyCorrect: "A 表述不严谨。",
      },
      {
        id: "phy-S1-q5",
        source: "predicted",
        stem: "完全不会的物理单选题，蒙哪个字母概率较高？",
        options: [
          { key: "A", text: "A" },
          { key: "B", text: "B" },
          { key: "C", text: "C" },
          { key: "D", text: "D" },
        ],
        answer: "C",
        whyCorrect: "C 是物理选择'安全选项'。",
      },
      {
        id: "phy-S1-q6",
        source: "predicted",
        stem:
          "对一道多选题分析：A 对、B 错、C 对、D 不能判断。最佳选法？",
        options: [
          { key: "A", text: "选 ACD" },
          { key: "B", text: "选 AC" },
          { key: "C", text: "选 ABCD" },
          { key: "D", text: "什么都不选" },
        ],
        answer: "B",
        whyCorrect: "保住 AC 2 分，避免赌 D。",
      },
      {
        id: "phy-S1-q7",
        source: "predicted",
        stem: "审题 5 类必圈词包括什么？",
        answer:
          "①正确/不正确；②单选/多选；③最大/最小；④变大/变小/不变；⑤所有/某些。",
        whyCorrect: "5 类。",
      },
      {
        id: "phy-S1-q8",
        source: "predicted",
        stem: "考场看到选择题花 2 分钟还在纠结。最佳做法？",
        options: [
          { key: "A", text: "继续硬想" },
          { key: "B", text: "排除 + 凭直觉 + 标记返回" },
          { key: "C", text: "空着" },
          { key: "D", text: "随便选" },
        ],
        answer: "B",
        whyCorrect: "B 性价比最优。",
      },
      {
        id: "phy-S1-q9",
        source: "predicted",
        stem: "下列对'多选不贪，错选清零'的理解正确的是（    ）",
        options: [
          { key: "A", text: "宁可少选拿 1 分，也不贪 2 分错选 0 分" },
          { key: "B", text: "全选才能满分" },
          { key: "C", text: "随便选" },
          { key: "D", text: "多选都跳" },
        ],
        answer: "A",
        whyCorrect: "稳健保分原则。",
      },
      {
        id: "phy-S1-q10",
        source: "predicted",
        stem: "选择题双策略 + 多选保命铁律是？",
        answer:
          "①审题划重点；②排除法（单选）；③多选宁少勿多（错选清零）。",
        whyCorrect: "本卡核心。",
      },
    ],
    masteryTest: {
      description: "5 道单选 + 3 道多选先圈词再答",
      passThreshold: "8 题都圈对 + 多选无错选算掌握",
    },
    stuckResponses: {
      no_start: "拿到选择题第 1 件事：圈题干关键词，分清单选还是多选。",
      annoyed: "今天只练 1 件事：圈'正确/不正确'。",
    },
    coachPrompt:
      "给烽峻一道多选让他先判'你 100% 确定哪几个对'，再让他选。**不让他猜**。",
  },
];
