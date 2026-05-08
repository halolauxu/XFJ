import { LockedSubjectMeta, SubjectMeta } from "@/lib/types";

// 数据基于：辽宁省 2024 起统一命题样卷 + 2023-2025 大连/辽宁中考真题 + 教研机构解析
// 详细溯源见 /research 目录下各学科 markdown 文件

export const SUBJECTS: SubjectMeta[] = [
  {
    key: "chemistry",
    name: "化学",
    shortName: "化",
    current: 8,
    conservative: 20,
    optimistic: 28,
    fullScore: 60,
    conservativeGain: 12,
    oneLine:
      "选择 10 题（每题 1 分）+ 实验操作 4 项之一 = 你的主战场。难题不碰。",
    dontDo: [
      "不做应用大题第 13、14 题（主题学习 / 实验探究，难）",
      "不做复杂推断和复杂计算",
      "不背一大堆方程式（只背制 O₂ 和制 CO₂ 两个）",
      "不追求满分",
    ],
    todayOnly: [
      "选择题 1-6 题（每题 1 分）",
      "10 个高频元素符号",
      "2 个必背方程式（制 O₂ + 制 CO₂）",
      "实验操作模拟（过滤水 / CO₂ 制取 / 配 5%NaCl / 酸碱性质）",
    ],
    examTactics: [
      "选择 1-6 题是生活情境基础题，每天 6 道一年都做不完吗？",
      "实验操作分步打分：先报告'检查仪器'+'检查气密性'，结束清理实验台，每个动作值 1 分",
      "看到'生成新物质' = 化学变化",
      "实验题先写'现象 + 结论'模板",
      "方程式不会写也写出反应物和箭头给步骤分",
    ],
    color: "#5BC0BE",
  },
  {
    key: "politicsHistory",
    name: "道法 + 历史",
    shortName: "政史",
    current: 81,
    conservative: 95,
    optimistic: 105,
    fullScore: 140,
    conservativeGain: 14,
    oneLine:
      "开卷合卷 150 分钟。考点不是在脑子，是在'关键词→章→页'索引里。",
    dontDo: [
      "不死背整本书",
      "不临场乱翻（>2 分钟没找到先跳过）",
      "不抄一大段无关内容",
      "不强答历史论证题（评分严苛）",
      "不写道法压轴的开放性小论文 / 演讲稿",
    ],
    todayOnly: [
      "5 道关键词定位（找到'哪本书-哪一章-哪一页'）",
      "贴 1 本书的标签（每个 2-4 个字，用不同颜色）",
      "记 1 个高频答题模板（四件套 / 16 字真言 / 24 字）",
    ],
    examTactics: [
      "考前自建关键词→章→页索引卡库（最重要的一项）",
      "问意义答'有利于…'通用模板",
      "问做法答国家+社会+学校+个人四层（四件套）",
      "问启示答'我们要…我们应该…'",
      "找红色字 / 黑体字的 1-2 句、带'是''应'字的判断句 — 80% 是得分句",
      "翻书超过 2 分钟果断跳过",
    ],
    color: "#9F90FF",
  },
  {
    key: "english",
    name: "英语",
    shortName: "英",
    current: 31,
    conservative: 45,
    optimistic: 55,
    fullScore: 120,
    conservativeGain: 14,
    oneLine:
      "笔试 90 分（听力口语 30 分已 4-5 月考完）。教材外研版。作文以书信电邮为主，2024 真题就是'暑假飞机模型计划信'。",
    dontDo: [
      "不系统补语法",
      "不背超纲难词",
      "不硬啃长难句",
      "不优先做阅读推理 / 主旨题",
    ],
    todayOnly: [
      "阅读 A 篇 5 分钟做 4 题（必抢）",
      "1 个作文模板（暑期计划 / 中国文化 / 环保三选一）",
      "完形抢前 5 空 + 语法填空给词变形（看到 do→did/done/doing）",
      "10 个高频词组",
    ],
    examTactics: [
      "阅读 A 篇是应用文（广告/通知/课程表），全部回原文找关键词",
      "阅读还原（五选四）抓连接词 However / For example / Therefore / Finally",
      "不会的题最后全选 B",
      "作文先抄给定开头 + 结尾，凑够 80 词",
      "完形听到 but / however 要换思路",
    ],
    color: "#6FCF97",
  },
  {
    key: "chinese",
    name: "语文",
    shortName: "语",
    current: 58,
    conservative: 70,
    optimistic: 75,
    fullScore: 120,
    conservativeGain: 12,
    oneLine:
      "2024 起作文从 70 降到 50 分，新增非连续性文本 8 分。先抢默写、套现代文模板、作文不跑题。",
    dontDo: [
      "不临时读很多课外书",
      "不追求高级作文（用万能模板就行）",
      "不背空泛好词",
      "不答现代文阅读的开放探究题",
    ],
    todayOnly: [
      "古诗文默写 5 句（高频：沉舟侧畔、人生自古谁无死、出淤泥而不染等）",
      "1 个作文素材（亲情 / 成长 / 善意三选一）",
      "1 个阅读句式（内容上 / 结构上 / 修辞上三段论）",
      "1 个文言实词",
    ],
    examTactics: [
      "默写 8 分先把会写的全写完（人生自古谁无死、长风破浪会有时…）",
      "现代文优先选说明文（模板更明确）",
      "作文标题/开头/结尾必扣题至少 3 次",
      "作文写满 700-800 字（卷面看起来够分量）",
      "用 1 个具体小事例胜过宏大叙事",
      "字工整、涂改不超过 3 处",
    ],
    color: "#F4A261",
  },
  {
    key: "math",
    name: "数学",
    shortName: "数",
    current: 18,
    conservative: 30,
    optimistic: 40,
    fullScore: 120,
    conservativeGain: 12,
    oneLine:
      "选择 10×3 + 填空 5×3 + 解答 8 道 75 分。绝对不碰 22-23 题（压轴）。",
    dontDo: [
      "不做选择第 10 题（直接蒙 C）",
      "不做填空第 15 题（直接放）",
      "不做解答第 22 题（几何综合，只写'解：'）",
      "不做解答第 23 题（二次函数 / 新定义压轴）",
      "不在难题上耗时间，1 分钟没思路立刻跳",
    ],
    todayOnly: [
      "选择前 6 题（必抢）",
      "填空前 3 题（必抢）",
      "第 16 题化简求值（必背 6 个特殊值：sin30°/cos45°/tan60°/(-1)⁰/a⁻¹/|x|）",
      "第 17 题应用题模板：'设…+由题意得+解得+答'四步骨架",
    ],
    examTactics: [
      "不会超过 1 分钟立刻跳",
      "大题不会也写'解：'+ 公式 + 已知（2-3 分步骤分）",
      "第 17 题哪怕方程列错，写'设 x、y'+'答'就 2 分",
      "第 18 题（1）填表/算平均；（2）画树状图写 P=m/n",
      "选择第 7-10 题没把握全选 C（统计概率最高）",
    ],
    color: "#3FA7A5",
  },
  {
    key: "physics",
    name: "物理",
    shortName: "物",
    current: 36,
    conservative: 45,
    optimistic: 50,
    fullScore: 90,
    conservativeGain: 9,
    oneLine:
      "笔试 80（与化学合卷 6/22 上午 9:00-11:30）+ 实验 10（已考）。多选题没把握选 1 个稳的拿 1 分。",
    dontDo: [
      "不背超纲公式",
      "不死磕复杂电路",
      "不在压轴计算题上耗时间（写公式拿 1 分就走）",
      "多选题没把握不要乱选满（错选满盘清零）",
    ],
    todayOnly: [
      "5 个核心公式（v=s/t、ρ=m/V、p=F/S、I=U/R、P=UI）",
      "5 道选择前 6 题",
      "1 道实验题模板（控制变量法 / 多次实验目的）",
      "作图题模板（力示意图 / 光路图 / 电路图）",
    ],
    examTactics: [
      "多选 7-9 题没把握只选 1 个最稳的（错的 0 分，对的不全 1 分）",
      "大题先写公式 → 已知 → 代入（每行 1 分）",
      "控制变量答'除了…不同，其他相同'",
      "多次实验答'减小误差 / 使结论更普遍 / 寻找普遍规律'",
      "作图标好箭头方向（向下=重力、向上=支持力）= 1 分",
      "单位陷阱：cm² 不是 m²（差 10⁴）；mA 不是 A（差 10³）",
    ],
    color: "#BDB2FF",
  },
];

export const LOCKED_SUBJECTS: LockedSubjectMeta[] = [
  {
    key: "bioGeo",
    name: "地理 + 生物",
    current: 58,
    fullScore: 80,
    note: "已经考完，不再提分。",
  },
  {
    key: "pe",
    name: "体育",
    current: null,
    fullScore: 60,
    conservative: 50,
    optimistic: 55,
    note: "先确认实际得分（过程性 30 + 终结性 30），不能白丢。",
  },
];

export const TARGET_SCORE = 410;
export const DEFAULT_CURRENT = 335;
export const EXAM_DATE = "2026-06-21";

// 数据来源说明
export const DATA_SOURCE_NOTE =
  "内容基于辽宁省 2024 起统一命题样卷 + 2023-2025 大连/辽宁中考真题 + 教研机构解析。详见 /research 目录。涉及无法验证处已标'待确认'。";

export function getSubject(key: string): SubjectMeta | undefined {
  return SUBJECTS.find((s) => s.key === key);
}
