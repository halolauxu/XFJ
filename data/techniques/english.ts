import { Technique } from "@/lib/types";

/**
 * 英语 技巧库
 * 学生现状：31/120 → 目标 45（+14 分）
 * 教材：外研版（大连特殊）
 * 路径：阅读 A 篇 + 作文不空 + 语法填空给词变形
 */

export const ENGLISH_TECHNIQUES: Technique[] = [
  {
    id: "en-T1-reading-A",
    subject: "english",
    title: "阅读 A 篇细节题（应用文）",
    examType: "阅读理解 A 篇 4 题 × 2 分 = 8 分",
    estGain: "+4-6 分",
    priority: 0,
    oneLiner: "原文搜索题，不靠词汇量。先看 4 题，回原文找关键词。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "阅读 A",
        topic: "英语口语比赛通知",
        url: "https://www.7cxk.com/p-3662331.html",
      },
      {
        kind: "real",
        year: 2023,
        region: "大连市",
        paper: "中考真题",
        qno: "阅读 A",
        topic: "图书馆通知",
        url: "https://wenku.docs.qq.com/detail?docId=Iqy1lDSq86",
      },
      {
        kind: "real",
        year: 2025,
        region: "辽宁省",
        paper: "中考真题",
        qno: "阅读 A",
        topic: "公园指南",
        url: "https://www.51jiaoxi.com/doc-17216216.html",
      },
    ],
    whyFits:
      "你 31 分。A 篇是 4 篇阅读里最简单的，全是通知 / 海报 / 课程表 / 指南。3 年都是应用文，2026 大概率延续。8 分必抢。",
    steps: [
      "**先看 4 题**（不读原文），把题干里的关键词圈出来：人名 / 时间 / 地点 / 数字",
      "回原文搜这些关键词或近义词",
      "答案就在那 1-2 行的前后",
      "选项不会的词不影响答题，看意思对不对就行",
    ],
    example: {
      id: "en-T1-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "阅读 A Q1",
      },
      stem:
        "[原文 Notice：The English Club will hold an English Speaking Competition. Time: Friday, May 24, 2:00 p.m. - 4:30 p.m. Place: School Hall.]\n\nWhen will the competition be held?",
      options: [
        { key: "A", text: "On May 20, 2:00 p.m." },
        { key: "B", text: "On May 24, 2:00 p.m." },
        { key: "C", text: "On May 24, 4:30 p.m." },
        { key: "D", text: "On May 20, 4:30 p.m." },
      ],
      answer: "B",
      whyCorrect: "原文 Time 那一行写明 Friday, May 24, 2:00 p.m. - 开始时间。",
    },
    trainingQuestions: [
      {
        id: "en-T1-q1",
        source: "real",
        citation: {
          kind: "real",
          year: 2023,
          region: "大连市",
          paper: "中考真题",
          qno: "阅读 A",
        },
        stem:
          "[原文 Sunshine Library：Mon-Fri 9-8pm; Sat&Sun 10-6pm; Borrow up to 3 books for 14 days; 0.5 yuan/day if late.]\n\nWhat should you pay if you return a book 4 days late?",
        options: [
          { key: "A", text: "0.5 yuan" },
          { key: "B", text: "1 yuan" },
          { key: "C", text: "2 yuan" },
          { key: "D", text: "4 yuan" },
        ],
        answer: "C",
        whyCorrect: "0.5 元/天 × 4 天 = 2 元。",
      },
      {
        id: "en-T1-q2",
        source: "predicted",
        stem:
          "[原文 Dalian Aquarium：Open 9am-5pm; Adult 80yuan; Child(under 12) 40yuan; Family Pack(2 adults + 2 children) 200yuan saves 40yuan.]\n\nHow much does a family of 2 adults and 2 children pay if they buy the family pack?",
        options: [
          { key: "A", text: "240 yuan" },
          { key: "B", text: "200 yuan" },
          { key: "C", text: "160 yuan" },
          { key: "D", text: "120 yuan" },
        ],
        answer: "B",
        hint1: "Look at 'Family Pack' line.",
        hint2: "200 yuan is the bundle price.",
        whyCorrect: "Family Pack = 200 yuan.",
      },
      {
        id: "en-T1-q3",
        source: "predicted",
        stem:
          "[原文：The new English Club meets every Tuesday from 4pm to 5:30pm in Room 305. Members must be in Grade 8 or 9.]\n\nHow long does the English Club last?",
        options: [
          { key: "A", text: "1 hour" },
          { key: "B", text: "1.5 hours" },
          { key: "C", text: "2 hours" },
          { key: "D", text: "3 hours" },
        ],
        answer: "B",
        hint1: "4pm to 5:30pm.",
        whyCorrect: "5:30 - 4 = 1.5 hours.",
      },
      {
        id: "en-T1-q4",
        source: "predicted",
        stem:
          "[原文 Sports Day：Mon - basketball; Tue - football; Wed - swimming; Thu - tennis; Fri - PE test.]\n\nWhich day will students take the PE test?",
        options: [
          { key: "A", text: "Monday" },
          { key: "B", text: "Wednesday" },
          { key: "C", text: "Thursday" },
          { key: "D", text: "Friday" },
        ],
        answer: "D",
        hint1: "Look at 'PE test'.",
        whyCorrect: "Friday - PE test.",
      },
      {
        id: "en-T1-q5",
        source: "predicted",
        stem:
          "[原文 Bus 13：First bus 6:00; Last bus 22:30; Stops every 15 minutes.]\n\nWhen does the last bus leave?",
        options: [
          { key: "A", text: "6:00" },
          { key: "B", text: "22:30" },
          { key: "C", text: "15:00" },
          { key: "D", text: "13:00" },
        ],
        answer: "B",
        hint1: "Look at 'Last bus'.",
        whyCorrect: "Last bus 22:30.",
      },
      {
        id: "en-T1-q6",
        source: "predicted",
        stem:
          "[原文 Volunteer Help Wanted：High school students aged 15-18 needed for community library on weekends. 4 hours per day, lunch provided.]\n\nWho can be a volunteer?",
        options: [
          { key: "A", text: "Children under 10" },
          { key: "B", text: "High school students aged 15-18" },
          { key: "C", text: "Anyone" },
          { key: "D", text: "Adults over 25" },
        ],
        answer: "B",
        hint1: "Look at 'aged 15-18'.",
        whyCorrect: "Volunteers must be high school students aged 15-18.",
      },
      {
        id: "en-T1-q7",
        source: "predicted",
        stem:
          "[原文 Movie Tickets: 3D movies 60yuan; 2D movies 40yuan; Discount 20% for students with ID.]\n\nHow much does a student pay for a 2D movie?",
        options: [
          { key: "A", text: "32 yuan" },
          { key: "B", text: "40 yuan" },
          { key: "C", text: "48 yuan" },
          { key: "D", text: "60 yuan" },
        ],
        answer: "A",
        hint1: "40 × 80% = 32.",
        whyCorrect: "学生打八折：40×0.8 = 32 yuan。",
      },
      {
        id: "en-T1-q8",
        source: "predicted",
        stem:
          "[原文：Tom is from Canada. He has been studying in Dalian for 3 years. He likes hot pot and dumplings.]\n\nWhich of the following is NOT mentioned about Tom?",
        options: [
          { key: "A", text: "He is from Canada." },
          { key: "B", text: "He likes hot pot." },
          { key: "C", text: "He has a sister." },
          { key: "D", text: "He has been in Dalian for 3 years." },
        ],
        answer: "C",
        hint1: "Find the option that's NOT in the text.",
        whyCorrect: "原文没提到姐妹。",
      },
      {
        id: "en-T1-q9",
        source: "predicted",
        stem:
          "[原文 School Concert：Date Friday June 21; Time 7pm; Place School Hall; Tickets free for students.]\n\nWhere will the concert be held?",
        options: [
          { key: "A", text: "City Hall" },
          { key: "B", text: "School Hall" },
          { key: "C", text: "Park" },
          { key: "D", text: "Stadium" },
        ],
        answer: "B",
        hint1: "Look at 'Place'.",
        whyCorrect: "School Hall.",
      },
      {
        id: "en-T1-q10",
        source: "predicted",
        stem:
          "[原文：The book fair will be held from May 1 to May 7. Over 1000 books will be on sale at half price.]\n\nWhat does 'half price' mean?",
        options: [
          { key: "A", text: "Books cost the same" },
          { key: "B", text: "50% off the original price" },
          { key: "C", text: "Books are free" },
          { key: "D", text: "Books cost double" },
        ],
        answer: "B",
        hint1: "Half = 1/2 = 50% off.",
        whyCorrect: "Half price = 50% 折扣。",
      },
    ],
    masteryTest: {
      description: "1 篇 A 篇 4 题",
      passThreshold: "对 3/4 算掌握；2/4 算入门",
    },
    stuckResponses: {
      cant_read:
        "看不懂没关系。题干里圈 2 个具体词（数字 / 人名 / 时间），回原文搜这 2 个词。",
      no_start: "先看题，再看原文。顺序不能反。",
      annoyed: "今天只做 1 题。2 分钟。",
    },
    coachPrompt:
      "反问烽峻：题里关键词是哪几个？回原文哪一行能找到？不让他先看原文。",
  },

  {
    id: "en-T2-five-pick-four",
    subject: "english",
    title: "阅读还原五选四（逻辑词法）",
    examType: "阅读还原 4 题 × 2 分 = 8 分",
    estGain: "+2-4 分",
    priority: 0,
    oneLiner:
      "靠 5 个连接词分类（However / For example / Therefore / In addition / Finally）就能选对一半。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "五选四",
        topic: "宠物健康",
        url: "https://www.7cxk.com/p-3662331.html",
      },
    ],
    whyFits:
      "8 分送分题。比阅读理解简单。靠连接词、人称代词、关键词重复就能选对。",
    steps: [
      "**先看 5 个选项**，把每个选项里的连接词圈出来",
      "看每个空前后两句的逻辑关系：因果 / 转折 / 举例 / 递进 / 总结",
      "选对应连接词的那一项",
      "做完读 1 遍看通不通顺",
    ],
    example: {
      id: "en-T2-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "五选四",
      },
      stem:
        "[原文片段：Some pets get too much food but don't move enough. ___ Pets often suffer from being overweight.]\n\n选项：A. Pets often suffer from being overweight.（已用）",
      answer: "B",
      whyCorrect:
        "上文说宠物吃太多不动，下文是结果 → 选'宠物常超重'B 项总结句。",
    },
    trainingQuestions: [
      {
        id: "en-T2-q1",
        source: "predicted",
        stem:
          "[空前: I really wanted to try skiing.] ____ [空后: After many falls, I finally learned how.]",
        options: [
          { key: "A", text: "However, my parents thought it was dangerous." },
          { key: "B", text: "For example, my sister loves skating." },
          { key: "C", text: "In addition, swimming is also fun." },
          { key: "D", text: "Therefore, I gave up immediately." },
        ],
        answer: "A",
        hint1: "空后说'摔了很多次终于学会' → 中间应是'但父母觉得危险'转折。",
        whyCorrect: "However 转折 + 后文克服。",
      },
      {
        id: "en-T2-q2",
        source: "predicted",
        stem:
          "[前: Pets need exercise to stay healthy.] ____ [后: A daily walk is good for both pet and owner.]",
        options: [
          { key: "A", text: "However, exercise costs nothing." },
          { key: "B", text: "For example, dogs need walking every day." },
          { key: "C", text: "Therefore, pets sleep most of the day." },
          { key: "D", text: "In contrast, cats hate water." },
        ],
        answer: "B",
        hint1: "前说宠物需要运动，后说每日散步好处 → 中间应是举例。",
        whyCorrect: "For example + 散步举例。",
      },
      {
        id: "en-T2-q3",
        source: "predicted",
        stem:
          "[前: Reading helps you learn new words.] ____ [后: It also makes your writing better.]",
        options: [
          { key: "A", text: "However, books are expensive." },
          { key: "B", text: "In addition, it improves imagination." },
          { key: "C", text: "Therefore, watching TV is bad." },
          { key: "D", text: "For example, novels are popular." },
        ],
        answer: "B",
        hint1: "前后都是阅读好处 → 递进。",
        whyCorrect: "In addition 递进。",
      },
      {
        id: "en-T2-q4",
        source: "predicted",
        stem:
          "[前: I studied hard for the test.] ____ [后: I felt very happy.]",
        options: [
          { key: "A", text: "However, I failed badly." },
          { key: "B", text: "For example, I read every night." },
          { key: "C", text: "Therefore, I passed with a high score." },
          { key: "D", text: "In contrast, my friend was lazy." },
        ],
        answer: "C",
        hint1: "认真学 + 高兴 → 因果关系（考好了）。",
        whyCorrect: "Therefore 因果。",
      },
      {
        id: "en-T2-q5",
        source: "predicted",
        stem:
          "[前: There are many ways to save energy.] ____",
        options: [
          { key: "A", text: "However, energy is unlimited." },
          { key: "B", text: "For example, you can turn off lights." },
          { key: "C", text: "Therefore, we waste energy." },
          { key: "D", text: "In contrast, energy is free." },
        ],
        answer: "B",
        hint1: "举例。",
        whyCorrect: "For example。",
      },
      {
        id: "en-T2-q6",
        source: "predicted",
        stem:
          "[前: Junk food is bad for health.] ____ [后: We should choose vegetables and fruits instead.]",
        options: [
          { key: "A", text: "However, it tastes good." },
          { key: "B", text: "Therefore, we should eat less of it." },
          { key: "C", text: "For example, hamburgers are tasty." },
          { key: "D", text: "In addition, it is cheap." },
        ],
        answer: "B",
        hint1: "因 → 果。",
        whyCorrect: "Therefore 因果连接。",
      },
      {
        id: "en-T2-q7",
        source: "predicted",
        stem:
          "[前: Smoking causes lung cancer.] ____ [后: It also causes heart disease.]",
        options: [
          { key: "A", text: "In addition," },
          { key: "B", text: "However," },
          { key: "C", text: "Therefore," },
          { key: "D", text: "For example," },
        ],
        answer: "A",
        hint1: "并列两个不良影响 → 递进。",
        whyCorrect: "In addition 添加。",
      },
      {
        id: "en-T2-q8",
        source: "predicted",
        stem:
          "[前: We can save water in many ways.] ____ [后: We can also collect rain water for plants.]",
        options: [
          { key: "A", text: "First, we can take shorter showers." },
          { key: "B", text: "However, we can't save water." },
          { key: "C", text: "Therefore, water is very expensive." },
          { key: "D", text: "Finally, water is precious." },
        ],
        answer: "A",
        hint1: "前说有多种方法 + 后举例 → 中间该是第 1 种举例。",
        whyCorrect: "First + 第 1 种节水方法。",
      },
      {
        id: "en-T2-q9",
        source: "predicted",
        stem:
          "[前: Online learning is becoming popular.] ____",
        options: [
          { key: "A", text: "However, students miss face-to-face class." },
          { key: "B", text: "Therefore, classrooms are useless." },
          { key: "C", text: "Finally, online is everything." },
          { key: "D", text: "In contrast, schools should close." },
        ],
        answer: "A",
        hint1: "在线学习流行 → 但学生想念面对面上课（转折）。",
        whyCorrect: "However 转折最自然。",
      },
      {
        id: "en-T2-q10",
        source: "predicted",
        stem:
          "[前段说运动好处；中间空；后段总结建议 30 分钟运动每天.] 该空最该填的连接词类是？",
        options: [
          { key: "A", text: "Finally, ..." },
          { key: "B", text: "First, ..." },
          { key: "C", text: "However, ..." },
          { key: "D", text: "For example, ..." },
        ],
        answer: "A",
        hint1: "前面已讲多个好处 + 后面是建议 → 此处应该是总结。",
        whyCorrect: "Finally 总结收尾。",
      },
    ],
    masteryTest: {
      description: "1 篇五选四 4 空",
      passThreshold: "对 2/4 算入门；3/4 算掌握",
    },
    stuckResponses: {
      cant_read: "不读全文。只看空前一句和空后一句的关系。",
      no_start: "先把 5 个选项的连接词圈出来。再回空里挑。",
    },
    coachPrompt:
      "让烽峻先说每个空前后两句什么关系（因果 / 转折 / 举例）。再让他选连接词对应的项。",
  },

  {
    id: "en-T3-cloze-front-5",
    subject: "english",
    title: "完形填空抢前 5 空",
    examType: "完形填空 10 题 × 1 分",
    estGain: "+3-4 分",
    priority: 0,
    oneLiner: "首段简单，5 空抓 3 空。看搭配 / 词性 / 时态。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "完形填空",
        topic: "校园友谊（老师送本子）",
      },
      {
        kind: "real",
        year: 2025,
        region: "辽宁省",
        paper: "中考真题",
        qno: "完形填空",
        topic: "Jack 生日海滩",
      },
    ],
    whyFits:
      "你 31 分，10 空全做太难。集中前 5 空（首段难度低），抢 3 空 = 3 分。",
    steps: [
      "**通读全文不填**，知道大概在讲什么",
      "前 5 空首段：常考固定搭配（look at / listen to / be good at）",
      "看时态（yesterday → ed; every day → s; now → ing）",
      "看词性（the+名词，very+形容词，副词修饰动词）",
      "不会就排除最离谱的 2 个，剩下 2 选 1。蒙就选 B",
    ],
    example: {
      id: "en-T3-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
      },
      stem:
        "When I was in Grade 7, I had a really hard time with my English. I couldn't ___ the lessons at all.",
      options: [
        { key: "A", text: "hear" },
        { key: "B", text: "follow" },
        { key: "C", text: "write" },
        { key: "D", text: "speak" },
      ],
      answer: "B",
      whyCorrect: "follow the lessons = 跟上 / 听懂课。固定搭配。",
    },
    trainingQuestions: [
      {
        id: "en-T3-q1",
        source: "predicted",
        stem: "Yesterday I ____ to the park with my family.",
        options: [
          { key: "A", text: "go" },
          { key: "B", text: "went" },
          { key: "C", text: "going" },
          { key: "D", text: "goes" },
        ],
        answer: "B",
        hint1: "Yesterday → 过去式。",
        whyCorrect: "go 的过去式 went。",
      },
      {
        id: "en-T3-q2",
        source: "predicted",
        stem: "There ____ many books in our school library.",
        options: [
          { key: "A", text: "is" },
          { key: "B", text: "are" },
          { key: "C", text: "be" },
          { key: "D", text: "am" },
        ],
        answer: "B",
        hint1: "books 复数 → are。",
        whyCorrect: "复数主语 + are。",
      },
      {
        id: "en-T3-q3",
        source: "predicted",
        stem: "He is good at ____ basketball.",
        options: [
          { key: "A", text: "play" },
          { key: "B", text: "plays" },
          { key: "C", text: "playing" },
          { key: "D", text: "played" },
        ],
        answer: "C",
        hint1: "be good at + Ving。",
        whyCorrect: "固定搭配 be good at + 动名词。",
      },
      {
        id: "en-T3-q4",
        source: "predicted",
        stem: "I ____ to school every day.",
        options: [
          { key: "A", text: "go" },
          { key: "B", text: "goes" },
          { key: "C", text: "going" },
          { key: "D", text: "went" },
        ],
        answer: "A",
        hint1: "every day → 一般现在时；I → go。",
        whyCorrect: "I + go。",
      },
      {
        id: "en-T3-q5",
        source: "predicted",
        stem: "She has ____ apple in her hand.",
        options: [
          { key: "A", text: "a" },
          { key: "B", text: "an" },
          { key: "C", text: "the" },
          { key: "D", text: "/" },
        ],
        answer: "B",
        hint1: "apple 元音开头 → an。",
        whyCorrect: "an apple。",
      },
      {
        id: "en-T3-q6",
        source: "predicted",
        stem: "I ____ my homework when my mom called me.",
        options: [
          { key: "A", text: "do" },
          { key: "B", text: "did" },
          { key: "C", text: "was doing" },
          { key: "D", text: "have done" },
        ],
        answer: "C",
        hint1: "正在做时被打断 → 过去进行时。",
        whyCorrect: "was doing + when 从句。",
      },
      {
        id: "en-T3-q7",
        source: "predicted",
        stem: "If it rains tomorrow, we ____ stay at home.",
        options: [
          { key: "A", text: "will" },
          { key: "B", text: "would" },
          { key: "C", text: "are" },
          { key: "D", text: "have" },
        ],
        answer: "A",
        hint1: "条件句主将从现 → If + 现在时, will + V。",
        whyCorrect: "will stay。",
      },
      {
        id: "en-T3-q8",
        source: "predicted",
        stem: "He is ____ than his brother.",
        options: [
          { key: "A", text: "tall" },
          { key: "B", text: "taller" },
          { key: "C", text: "tallest" },
          { key: "D", text: "more tall" },
        ],
        answer: "B",
        hint1: "than → 比较级。",
        whyCorrect: "taller。",
      },
      {
        id: "en-T3-q9",
        source: "predicted",
        stem: "____ you like a cup of tea?",
        options: [
          { key: "A", text: "Will" },
          { key: "B", text: "Would" },
          { key: "C", text: "Are" },
          { key: "D", text: "Do" },
        ],
        answer: "B",
        hint1: "Would you like = 客气问需要。",
        whyCorrect: "Would you like 是固定客气表达。",
      },
      {
        id: "en-T3-q10",
        source: "predicted",
        stem: "He ____ English for 5 years.",
        options: [
          { key: "A", text: "studies" },
          { key: "B", text: "studied" },
          { key: "C", text: "has studied" },
          { key: "D", text: "is studying" },
        ],
        answer: "C",
        hint1: "for 5 years → 现在完成时。",
        whyCorrect: "has studied。",
      },
    ],
    masteryTest: {
      description: "1 套完形前 5 空",
      passThreshold: "对 2/5 算入门；3/5 算掌握",
    },
    stuckResponses: {
      cant_read: "不要懂全文。只看这一空前后 1 句。",
      too_many_wrong: "降级版：只做前 3 空。",
    },
    coachPrompt:
      "让烽峻先排除明显错的 2 个，剩下 2 选 1 时给词性 / 时态提示。",
  },

  {
    id: "en-T4-grammar-tense",
    subject: "english",
    title: "语法填空时态判断（5 标志词）",
    examType: "语法填空 10 空 × 1 分（约 7 空给词变形）",
    estGain: "+3-4 分",
    priority: 0,
    oneLiner:
      "看时间标志词定时态：yesterday→过去；every day→现在；now→进行；already→完成。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "语法填空",
        topic: "北京暑期游",
        url: "https://www.7cxk.com/p-3662331.html",
      },
    ],
    whyFits:
      "外研版高频考点。给词变形 7 空里 3-4 空考时态。规则只有 5 条，背完稳拿。",
    steps: [
      "**5 个标志词**：",
      "  · yesterday / last / ago / in 1990 → 一般过去时（动词 +ed）",
      "  · every day / usually / often → 一般现在时（第三人称 +s）",
      "  · now / look / listen → 现在进行时（is/are/am + ing）",
      "  · already / yet / since / for + 时间 → 现在完成时（have/has + 过去分词）",
      "  · tomorrow / next → 一般将来时（will + 动词原形）",
      "看到 (do) 就找时间标志词，套对应规则",
    ],
    example: {
      id: "en-T4-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
      },
      stem:
        "Last summer, my family ___ (go) to Beijing for our holiday.",
      answer: "went",
      whyCorrect: "Last summer = 过去 → 用过去时 → go 的过去式 = went。",
    },
    trainingQuestions: [
      {
        id: "en-T4-q1-adapted",
        source: "adapted",
        basedOn: {
          kind: "real",
          year: 2024,
          region: "辽宁省",
          paper: "中考真题",
        },
        stem: "He ___ (watch) TV every evening.",
        answer: "watches",
        whyCorrect: "every evening = 一般现在时；主语 He 第三人称 → watches。",
      },
      {
        id: "en-T4-q2-adapted",
        source: "adapted",
        basedOn: {
          kind: "real",
          year: 2024,
          region: "辽宁省",
          paper: "中考真题",
        },
        stem: "Look! The children ___ (play) football.",
        answer: "are playing",
        whyCorrect: "Look! = 现在进行时 → are + ing → are playing。",
      },
      {
        id: "en-T4-q3",
        source: "predicted",
        stem: "She ___ (go) to Beijing last summer.",
        answer: "went",
        hint1: "last summer = 过去式。",
        whyCorrect: "go 的过去式 went。",
      },
      {
        id: "en-T4-q4",
        source: "predicted",
        stem: "We ___ (have) lunch at 12:00 every day.",
        answer: "have",
        hint1: "every day → 一般现在时；We → have。",
        whyCorrect: "We 一般现在时用 have。",
      },
      {
        id: "en-T4-q5",
        source: "predicted",
        stem: "By next year, my brother ___ (finish) middle school.",
        answer: "will have finished",
        hint1: "By next year = 将来完成时。",
        whyCorrect: "by + 将来时间 → 将来完成时。",
      },
      {
        id: "en-T4-q6",
        source: "predicted",
        stem: "He ___ (study) English for 3 years now.",
        answer: "has studied",
        hint1: "for 3 years → 现在完成时。",
        whyCorrect: "完成时 has studied。",
      },
      {
        id: "en-T4-q7",
        source: "predicted",
        stem: "I ___ (watch) TV when she came in.",
        answer: "was watching",
        hint1: "when 从句过去时 + 主句过去进行时。",
        whyCorrect: "过去进行时。",
      },
      {
        id: "en-T4-q8",
        source: "predicted",
        stem: "Tom ___ (do) his homework now.",
        answer: "is doing",
        hint1: "now → 现在进行时。",
        whyCorrect: "is doing。",
      },
      {
        id: "en-T4-q9",
        source: "predicted",
        stem: "She ___ (read) a book at 8 last night.",
        answer: "was reading",
        hint1: "at 8 last night → 过去某时刻 → 过去进行时。",
        whyCorrect: "was reading。",
      },
      {
        id: "en-T4-q10",
        source: "predicted",
        stem: "He often ___ (play) basketball after school.",
        answer: "plays",
        hint1: "often → 一般现在时；He → plays。",
        whyCorrect: "He plays。",
      },
    ],
    trainingPending: true,
    masteryTest: {
      description: "5 道动词变形题，5 个时态各 1 道",
      passThreshold: "对 3/5 算入门；4/5 算掌握",
    },
    stuckResponses: {
      cant_memorize: "今天只背 2 个：yesterday→ed；every day→s。",
      no_start: "先找时间词。没有时间词看主语单复数。",
    },
    coachPrompt:
      "让烽峻找句子里的时间词。再让他套对应时态规则。一道一道来。",
  },

  {
    id: "en-T5-grammar-other",
    subject: "english",
    title: "语法填空：词性 / 复数 / 比较级",
    examType: "语法填空 10 空 × 1 分（约 3-4 空考词性）",
    estGain: "+2-3 分",
    priority: 1,
    oneLiner:
      "看修饰对象：修饰名词 → 形容词；修饰动词 → 副词（+ly）。看 than → 比较级。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "语法填空",
      },
    ],
    whyFits:
      "时态学完后，词性变形是第二容易的考点。背 4 招覆盖大部分。",
    steps: [
      "**4 招**：",
      "  · 形容词 / 副词：修饰名词用形容词；修饰动词用副词（-ly 结尾）",
      "  · 名词复数：many / some 后面加 s；one 后面用单数",
      "  · 比较级：than 之前 → -er / more（amazing→more amazing）",
      "  · 序数词：the + 序数词（the first / the second）",
    ],
    example: {
      id: "en-T5-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
      },
      stem:
        "The Great Wall was ___ (amazing) than I expected.",
      answer: "more amazing",
      whyCorrect: "than 之前要用比较级。amazing 是多音节，用 more amazing。",
    },
    trainingQuestions: [
      {
        id: "en-T5-q1",
        source: "predicted",
        stem: "The boy runs very ___ (quick).",
        answer: "quickly",
        hint1: "修饰 runs（动词）用副词。",
        whyCorrect: "quick + ly → quickly。",
      },
      {
        id: "en-T5-q2",
        source: "predicted",
        stem: "There are many ___ (book) in the library.",
        answer: "books",
        hint1: "many 后面用名词复数。",
        whyCorrect: "books。",
      },
      {
        id: "en-T5-q3",
        source: "predicted",
        stem: "She is the ___ (tall) student in our class.",
        answer: "tallest",
        hint1: "the + 最高级。",
        whyCorrect: "tallest。",
      },
      {
        id: "en-T5-q4",
        source: "predicted",
        stem: "He sings ___ (good) than his sister.",
        answer: "better",
        hint1: "than → 比较级；good 的比较级 better。",
        whyCorrect: "better。",
      },
      {
        id: "en-T5-q5",
        source: "predicted",
        stem: "It is a ___ (sun) day today.",
        answer: "sunny",
        hint1: "形容词修饰 day。",
        whyCorrect: "sun + ny → sunny。",
      },
      {
        id: "en-T5-q6",
        source: "predicted",
        stem: "She has two ___ (child).",
        answer: "children",
        hint1: "child 复数 children。",
        whyCorrect: "children。",
      },
      {
        id: "en-T5-q7",
        source: "predicted",
        stem: "Today is the ___ (one) day of school.",
        answer: "first",
        hint1: "the + 序数词。",
        whyCorrect: "first。",
      },
      {
        id: "en-T5-q8",
        source: "predicted",
        stem: "He drives ___ (careful).",
        answer: "carefully",
        hint1: "修饰动词 drives。",
        whyCorrect: "carefully。",
      },
      {
        id: "en-T5-q9",
        source: "predicted",
        stem: "This book is ___ (interesting) than that one.",
        answer: "more interesting",
        hint1: "多音节比较级用 more。",
        whyCorrect: "more interesting。",
      },
      {
        id: "en-T5-q10",
        source: "predicted",
        stem: "The boy is wearing a ___ (red) shirt.",
        answer: "red",
        hint1: "形容词不变。",
        whyCorrect: "颜色形容词原形。",
      },
    ],
    masteryTest: {
      description: "5 道词性变形题",
      passThreshold: "对 3/5 算入门；4/5 算掌握",
    },
    stuckResponses: {
      cant_memorize: "口诀：'-ly 副，than 加 er，many 加 s'。3 个就够。",
    },
    coachPrompt:
      "让烽峻先看空前的'修饰对象'。修饰啥决定填啥。",
  },

  {
    id: "en-T6-essay-plan-letter",
    subject: "english",
    title: "邮件作文模板①：暑期计划信",
    examType: "写作 20 分（2024 真题就是这个题型）",
    estGain: "+8-12 分",
    priority: 0,
    oneLiner:
      "Dear ___ + I'm writing to tell you about ___ + First/Second/What's more + Looking forward。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
        qno: "书面表达",
        topic: "李辉给 Eric 写飞机模型计划信",
        url: "https://www.zhongkao.com/e/20240822/66c6e3bc81b12.shtml",
      },
    ],
    whyFits:
      "你 31 分，作文不空就 9 分起。背完模板填 80 词 = 12 分。这是英语提分性价比最高的一项。",
    steps: [
      "开头：Dear ___,",
      "第一句：I'm writing to tell you about ___ (主题).",
      "中间：First, I will ___. Second, I plan to ___. What's more, I want to ___.",
      "反问：What about you?",
      "结尾：I'm looking forward to your reply.",
      "签名：Yours, Li Hua. (大连考生统一用 Li Hua)",
    ],
    example: {
      id: "en-T6-ex",
      source: "real",
      citation: {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "中考真题",
      },
      stem:
        "[原题：假定你是李辉，社团暑假打算设计制作飞机模型，给英国朋友 Eric 写电邮：① 告知打算 ② 询问他的想法 ③ 期待回复。≥80 词]\n\n请用模板填空写一封 80 词邮件。",
      answer:
        "Dear Eric,\nI'm writing to tell you about my plan for the coming summer holiday. This summer, my club is going to design and make model planes. First, I will read books about planes and learn how they fly. Second, I plan to buy materials and tools online. What's more, I want to ask my father, who is good at making things, to help me put it together. It will take about two weeks.\nWhat about you? Do you have any plans?\nI'm looking forward to your reply.\nYours,\nLi Hui",
      whyCorrect:
        "三个内容点全覆盖。用 First/Second/What's more 串句。用 will / plan to / want to 表将来。约 80 词。",
    },
    trainingQuestions: [
      {
        id: "en-T6-q1",
        source: "predicted",
        stem:
          "[假设题：写邮件给 Mike 介绍你周末的计划 ≥80 词]\n\n用模板写一篇邮件，至少 80 词。",
        answer:
          "Dear Mike,\nI'm writing to tell you about my weekend plan. This Saturday, I will go to the library to study with my friends. First, we will read books about Chinese history. Second, we plan to do some math exercises. What's more, I want to watch an interesting movie at home in the evening.\nWhat about you? Do you have any plans?\nI'm looking forward to your reply.\nYours,\nLi Hua",
        hint1: "开头：I'm writing to tell you about ___。",
        hint2: "三件事：First / Second / What's more。",
        whyCorrect: "模板齐全 + 80 词 + 内容完整。",
      },
      {
        id: "en-T6-q2",
        source: "predicted",
        stem:
          "[假设题：邮件 Tom 介绍寒假打算 ≥80 词]",
        answer:
          "Dear Tom,\nI'm writing to tell you about my plans for the winter holiday. First, I will visit my grandparents in Shenyang and stay there for a week. Second, I plan to learn cooking from my mother. What's more, I want to read several English books to improve my English.\nWhat about you?\nLooking forward to your reply.\nYours,\nLi Hua",
        whyCorrect: "三个内容点 + 模板。",
      },
      {
        id: "en-T6-q3",
        source: "predicted",
        stem: "邮件中表达将来计划的关键句型有哪些？",
        answer:
          "I will + V (将)；I plan to + V (打算)；I am going to + V (准备)；I want to + V (想)；I'm looking forward to + Ving / N (期待)",
        hint1: "5 个常用句型。",
        whyCorrect: "5 个核心句型。",
      },
      {
        id: "en-T6-q4",
        source: "predicted",
        stem:
          "[假设题：邮件你的英国笔友介绍周末打算 ≥80 词]",
        answer:
          "Dear Helen,\nI'm writing to tell you about my weekend plan. This Saturday, my school will hold a sports meeting. First, I plan to take part in the 100-meter race. Second, my friend and I want to watch the basketball game. What's more, I will help my classmates by handing out water.\nWhat will you do this weekend?\nLooking forward to your reply.\nYours,\nLi Hua",
        whyCorrect: "完整 + 80 词。",
      },
      {
        id: "en-T6-q5",
        source: "predicted",
        stem:
          "邮件作文标准开头是什么？请写出 1 个标准开头。",
        answer: "Dear ___,\nI'm writing to tell you about ___ .",
        hint1: "称呼 + 开头主旨。",
        whyCorrect: "标准格式。",
      },
      {
        id: "en-T6-q6",
        source: "predicted",
        stem:
          "邮件作文标准结尾应包括什么？",
        answer:
          "1) 期待回信句：I'm looking forward to your reply.\n2) 客气结尾：Yours / Best wishes\n3) 签名：Li Hua",
        hint1: "三段式结尾。",
        whyCorrect: "标准三段式。",
      },
      {
        id: "en-T6-q7",
        source: "predicted",
        stem:
          "下列写邮件作文 80 词以下时最该删的是（    ）",
        options: [
          { key: "A", text: "开头 Dear" },
          { key: "B", text: "中间 3 件事中的 1-2 件" },
          { key: "C", text: "结尾签名" },
          { key: "D", text: "What about you 句" },
        ],
        answer: "D",
        hint1: "What about you 是可选句。",
        whyCorrect: "其他三个是必备结构。",
      },
      {
        id: "en-T6-q8",
        source: "predicted",
        stem:
          "[假设题：写邮件 Sam 介绍学习计划 ≥80 词]",
        answer:
          "Dear Sam,\nI'm writing to tell you about my study plan for the coming month. First, I will spend more time on math because I want to improve. Second, I plan to read English books for 30 minutes every day. What's more, I want to do my homework right after school instead of putting it off.\nDo you have any tips?\nLooking forward to your reply.\nYours,\nLi Hua",
        whyCorrect: "完整 80 词模板。",
      },
      {
        id: "en-T6-q9",
        source: "predicted",
        stem:
          "邮件作文中下列连接词使用错误的是（    ）",
        options: [
          { key: "A", text: "First, ... Second, ... What's more, ..." },
          { key: "B", text: "However, ... For example, ... Therefore, ..." },
          { key: "C", text: "And, ... But, ... So, ... So, ... So, ..." },
          { key: "D", text: "First, ... Then, ... Finally, ..." },
        ],
        answer: "C",
        hint1: "C 全用 And/But/So 重复且口语化。",
        whyCorrect: "C 不规范，重复使用基础词。",
      },
      {
        id: "en-T6-q10",
        source: "predicted",
        stem:
          "[完成句子] What's more, I want to ____ to improve my English.",
        answer:
          "watch English movies (or read English books / listen to English songs)",
        hint1: "和 improve English 相关的活动。",
        whyCorrect: "watch / read / listen 都合理。",
      },
    ],
    masteryTest: {
      description: "用本模板默写 1 篇 80 词作文（任选场景：暑期 / 周末 / 寒假）",
      passThreshold: "开头 + 中间 3 句 + 结尾全到位 + 词数 ≥ 75 算掌握",
    },
    stuckResponses: {
      cant_memorize: "今天只背开头 1 句和结尾 1 句。中间 3 句明天背。",
      no_start: "先抄一遍范文。再盖住自己写一遍。",
      too_hard: "降级版：只写 5 句话也算交卷（开头 + First + Second + 结尾 + 签名）。",
    },
    coachPrompt:
      "让烽峻先填开头：'I'm writing to tell you about ___'。再让他填中间 3 件事。一件一件来。",
  },

  {
    id: "en-T7-essay-culture",
    subject: "english",
    title: "邮件作文模板②：介绍中国文化 / 节日",
    examType: "写作 20 分（高频话题）",
    estGain: "+8-12 分（与 T6 互补）",
    priority: 1,
    oneLiner:
      "I'm glad to introduce ___ + 时间 + 习俗 + 邀请。覆盖春节 / 中秋。",
    sourceTrace: [
      {
        kind: "placeholder",
        note:
          "辽宁中考英语作文高频话题第二位（教研机构高频统计）；明天补具体真题命中",
      },
    ],
    whyFits:
      "2024 已考'计划信'，2026 大概率换'介绍中国文化'。一个备用模板，万一押中就 12 分。",
    steps: [
      "Dear ___,",
      "I'm glad to introduce ___ (the Spring Festival / Mid-Autumn Festival) to you.",
      "It is one of the most important festivals in China. It usually falls in ___ (January / September).",
      "On that day, people ___ (eat dumplings / watch the moon / set off fireworks).",
      "We also ___ (visit relatives / give lucky money).",
      "I hope you can come to China and feel it yourself one day.",
      "Yours, Li Hua",
    ],
    example: {
      id: "en-T7-ex",
      source: "predicted",
      stem: "[假设题面：Tom 想了解中国春节，请你写邮件介绍 ≥80 词]",
      answer:
        "Dear Tom,\nI'm glad to introduce the Spring Festival to you.\nIt is one of the most important festivals in China. It usually falls in January or February.\nOn that day, people eat dumplings, set off fireworks, and watch TV shows.\nWe also visit relatives and give children lucky money.\nI hope you can come to China and feel it yourself one day.\nYours,\nLi Hua",
      whyFitsStudent: "高频话题模板，套上具体节日即可。",
      hint1: "开头第一句：I'm glad to introduce ___",
      hint2: "中间 3 句：时间 / 习俗 / 我们也…",
      trap: "想写复杂语法（如定语从句），反而出错；用模板简单句最稳。",
      whyCorrect: "模板覆盖所有采分点。",
    },
    trainingQuestions: [
      {
        id: "en-T7-q1",
        source: "predicted",
        stem:
          "[假设题：Tom 想了解中国的中秋节，写邮件 ≥80 词]",
        answer:
          "Dear Tom,\nI'm glad to introduce the Mid-Autumn Festival to you.\nIt is one of the most important festivals in China. It usually falls in September or October.\nOn that day, people eat moon cakes, watch the bright full moon, and have dinner with their families.\nWe also tell stories about Chang'e who lives on the moon.\nI hope you can come to China and feel it yourself one day.\nYours,\nLi Hua",
        whyCorrect: "5 句模板 + 中秋节内容。",
      },
      {
        id: "en-T7-q2",
        source: "predicted",
        stem:
          "[假设题：邮件 Helen 介绍春节 ≥80 词]",
        answer:
          "Dear Helen,\nI'm glad to introduce the Spring Festival to you. It's the most important festival in China.\nIt usually falls in January or February. On that day, people eat dumplings, set off fireworks, and watch the Spring Festival Gala on TV.\nWe also visit relatives and give children lucky money in red envelopes.\nI hope you can come to China and join us next year.\nYours,\nLi Hua",
        whyCorrect: "春节内容 + 模板。",
      },
      {
        id: "en-T7-q3",
        source: "predicted",
        stem:
          "[假设题：邮件 Mike 介绍端午节 ≥80 词]",
        answer:
          "Dear Mike,\nI'm glad to introduce the Dragon Boat Festival to you.\nIt is a traditional Chinese festival that usually falls in June.\nOn that day, people eat zongzi (rice dumplings) and watch dragon boat races.\nWe also remember Qu Yuan, a famous ancient poet, on this day.\nI hope you can come and enjoy the festival with us.\nYours,\nLi Hua",
        whyCorrect: "端午节模板。",
      },
      {
        id: "en-T7-q4",
        source: "predicted",
        stem:
          "中秋节英文叫什么？端午节英文叫什么？春节英文叫什么？",
        answer:
          "中秋节 = Mid-Autumn Festival；端午节 = Dragon Boat Festival；春节 = Spring Festival",
        whyCorrect: "三大节日英文标准说法。",
      },
      {
        id: "en-T7-q5",
        source: "predicted",
        stem:
          "[完成句子]：On that day, people ___ (吃月饼). ",
        answer: "eat moon cakes",
        hint1: "中秋习俗。",
        whyCorrect: "中秋吃月饼。",
      },
      {
        id: "en-T7-q6",
        source: "predicted",
        stem:
          "下列关于中国节日描述错误的是（    ）",
        options: [
          { key: "A", text: "Spring Festival - eat dumplings" },
          { key: "B", text: "Mid-Autumn Festival - eat moon cakes" },
          { key: "C", text: "Dragon Boat Festival - eat moon cakes" },
          { key: "D", text: "Spring Festival - give lucky money" },
        ],
        answer: "C",
        hint1: "端午吃 zongzi，不是月饼。",
        whyCorrect: "C 错。",
      },
      {
        id: "en-T7-q7",
        source: "predicted",
        stem:
          "[假设题：邮件 Lisa 介绍清明节 ≥80 词]",
        answer:
          "Dear Lisa,\nI'm glad to introduce Tomb-Sweeping Day to you.\nIt is a traditional Chinese festival that falls in early April.\nOn that day, people visit their ancestors' tombs to clean and bring flowers.\nWe also enjoy outdoor activities like flying kites in the spring weather.\nI hope you can learn more about Chinese traditions.\nYours,\nLi Hua",
        whyCorrect: "清明节模板。",
      },
      {
        id: "en-T7-q8",
        source: "predicted",
        stem:
          "邮件作文中介绍中国传统文化常用的开头句是？",
        answer: "I'm glad to introduce ___ to you.",
        whyCorrect: "标准模板开头。",
      },
      {
        id: "en-T7-q9",
        source: "predicted",
        stem:
          "[完成句子]：The Spring Festival is one of the ___ (最重要) festivals in China.",
        answer: "most important",
        hint1: "the most + 多音节形容词。",
        whyCorrect: "最高级。",
      },
      {
        id: "en-T7-q10",
        source: "predicted",
        stem:
          "下列结尾句中最适合用于'介绍中国节日'邮件的是（    ）",
        options: [
          { key: "A", text: "Goodbye." },
          { key: "B", text: "I hope you can come to China and feel it yourself one day." },
          { key: "C", text: "That's all." },
          { key: "D", text: "OK." },
        ],
        answer: "B",
        hint1: "邀请来体验。",
        whyCorrect: "邀请性结尾最自然。",
      },
    ],
    masteryTest: {
      description: "套模板写 1 篇'介绍中秋节'80 词作文",
      passThreshold: "模板 5 句全到 + 词数 ≥ 75 算掌握",
    },
    stuckResponses: {
      cant_memorize: "重点记 4 句：introduce / important / On that day / I hope。",
    },
    coachPrompt:
      "让烽峻先选哪个节日（春节 / 中秋）。再让他用模板每句填空。",
  },

  {
    id: "en-T8-essay-environment",
    subject: "english",
    title: "邮件作文模板③：环保 / 健康倡议",
    examType: "写作 20 分（备用话题）",
    estGain: "+8-12 分（与 T6/T7 共三选一）",
    priority: 2,
    oneLiner:
      "It's our duty to ___ + First/Second/Third 三个具体行动 + If everyone ___ 升华。",
    sourceTrace: [
      { kind: "placeholder", note: "辽宁中考高频话题；明天补真题命中" },
    ],
    whyFits:
      "T6/T7 都不押中时的兜底。环保 / 健康话题简单，模板适用面广。",
    steps: [
      "Dear ___,",
      "As students, it's our duty to ___ (protect the environment / keep healthy).",
      "First, we should ___ (save water / take exercise).",
      "Second, we'd better ___ (walk or ride a bike / eat vegetables).",
      "Third, we can ___ (recycle paper / sleep early).",
      "If everyone does a little, our world / our body will ___",
      "Yours, Li Hua",
    ],
    example: {
      id: "en-T8-ex",
      source: "predicted",
      stem:
        "[假设题面：写一封倡议保护环境的信 ≥80 词]",
      answer:
        "Dear classmates,\nAs students, it's our duty to protect the environment.\nFirst, we should save water and electricity at home and at school.\nSecond, we'd better walk or ride bikes instead of driving.\nThird, we can recycle paper and bottles.\nIf everyone does a little, our world will become a much better place.\nYours,\nLi Hua",
      whyFitsStudent: "环保模板，词组都是熟词。",
      hint1: "开头：As students, it's our duty to...",
      hint2: "三个动作：should / better / can。",
      trap: "想用难词如 sustainability，简单词反而稳。",
      whyCorrect: "模板加 3 个具体动作，覆盖采分点。",
    },
    trainingQuestions: [
      {
        id: "en-T8-q1",
        source: "predicted",
        stem: "[假设题：写倡议节约用水 ≥80 词]",
        answer:
          "Dear classmates,\nAs students, it's our duty to save water.\nFirst, we should turn off the tap when we are brushing our teeth. Second, we'd better take shorter showers. Third, we can collect rain water for plants.\nIf everyone does a little, our world will become a much better place.\nYours,\nLi Hua",
        whyCorrect: "节水倡议模板。",
      },
      {
        id: "en-T8-q2",
        source: "predicted",
        stem: "[假设题：写倡议保护动物 ≥80 词]",
        answer:
          "Dear classmates,\nAs students, it's our duty to protect animals.\nFirst, we should not buy products made of animal fur. Second, we'd better not feed wild animals. Third, we can take part in animal protection activities.\nIf everyone does a little, our planet will be a happier home for all.\nYours,\nLi Hua",
        whyCorrect: "保护动物模板。",
      },
      {
        id: "en-T8-q3",
        source: "predicted",
        stem: "[假设题：写倡议保持健康 ≥80 词]",
        answer:
          "Dear classmates,\nAs students, it's important to stay healthy.\nFirst, we should eat more vegetables and fruits. Second, we'd better do exercise for at least 30 minutes every day. Third, we can sleep early and get up early.\nIf everyone does a little, our body will be strong and our mind will be sharp.\nYours,\nLi Hua",
        whyCorrect: "健康模板。",
      },
      {
        id: "en-T8-q4",
        source: "predicted",
        stem:
          "[完成句子] As students, it's our ___ (责任) to protect the environment.",
        answer: "duty (or responsibility)",
        hint1: "duty / responsibility 都对。",
        whyCorrect: "duty 简单。",
      },
      {
        id: "en-T8-q5",
        source: "predicted",
        stem:
          "环保倡议中常用三个动作动词，按从强到弱排序正确的是？",
        options: [
          { key: "A", text: "should > 'd better > can" },
          { key: "B", text: "can > should > 'd better" },
          { key: "C", text: "'d better > can > should" },
          { key: "D", text: "should > can > would" },
        ],
        answer: "A",
        hint1: "should = 应该（强）；'d better = 最好（中）；can = 可以（弱）。",
        whyCorrect: "递进强度。",
      },
      {
        id: "en-T8-q6",
        source: "predicted",
        stem: "[假设题：写倡议保护环境 ≥80 词]",
        answer:
          "Dear friends,\nAs students, it's our duty to protect the environment.\nFirst, we should save water and electricity at home and at school. Second, we'd better walk or ride bikes instead of driving. Third, we can recycle paper, bottles and plastic bags.\nIf everyone does a little, our world will become a much better place.\nYours,\nLi Hua",
        whyCorrect: "标准环保模板。",
      },
      {
        id: "en-T8-q7",
        source: "predicted",
        stem: "[完成句子] If everyone does a little, our world will ___ ",
        answer: "become a much better place (or be a beautiful planet)",
        whyCorrect: "条件结尾。",
      },
      {
        id: "en-T8-q8",
        source: "predicted",
        stem:
          "下列环保动作中不属于'students can do'的是（    ）",
        options: [
          { key: "A", text: "Plant trees" },
          { key: "B", text: "Save electricity" },
          { key: "C", text: "Build a power plant" },
          { key: "D", text: "Recycle paper" },
        ],
        answer: "C",
        whyCorrect: "建发电厂超出学生能力。",
      },
      {
        id: "en-T8-q9",
        source: "predicted",
        stem: "[完成句子] We'd better ___ (步行) to school instead of taking a car.",
        answer: "walk",
        hint1: "'d better + V。",
        whyCorrect: "walk。",
      },
      {
        id: "en-T8-q10",
        source: "predicted",
        stem: "[假设题：写倡议节约粮食 ≥80 词]",
        answer:
          "Dear classmates,\nAs students, it's our duty to save food.\nFirst, we should take only what we can eat. Second, we'd better not waste leftovers. Third, we can encourage our family to do the same.\nIf everyone does a little, we can fight hunger and protect our planet.\nYours,\nLi Hua",
        whyCorrect: "节粮模板。",
      },
    ],
    masteryTest: {
      description: "套模板写 1 篇'环保'或'健康'80 词作文",
      passThreshold: "模板 5 句全到算掌握",
    },
    stuckResponses: {
      cant_memorize: "记 3 个动词：save / walk / recycle。",
    },
    coachPrompt:
      "让烽峻选环保还是健康。再让他用 should / better / can 各填 1 个动作。",
  },

  {
    id: "en-T9-frequent-phrases",
    subject: "english",
    title: "高频词组 30 个（A/B/C 组）",
    examType: "完形 + 阅读 + 语法填空",
    estGain: "+3-5 分（间接通过提高完形 / 阅读理解率）",
    priority: 1,
    oneLiner:
      "30 个词组覆盖完形和阅读 80% 高频考点。比背单词性价比高 10 倍。",
    sourceTrace: [
      {
        kind: "placeholder",
        note: "外研版常用高频词组；明天扫描扫描课本补具体出处",
      },
    ],
    whyFits:
      "你 31 分，背超纲难词性价比低。30 个固定词组就能覆盖大部分阅读 / 完形。",
    steps: [
      "**A 组（动词搭配）**：be good at / be interested in / look forward to / pay attention to / make a difference / take part in / listen to / look at / agree with / depend on",
      "**B 组（连词 / 关联）**：as soon as / so that / not only ... but also / either ... or / both ... and / instead of / because of / thanks to / according to / with the help of",
      "**C 组（应试常见）**：at the same time / in the end / on the way / for example / by the way / on the other hand / no matter how / as well as / a number of / a piece of",
      "每天背 5 个，6 天背完",
    ],
    example: {
      id: "en-T9-ex",
      source: "predicted",
      stem: "She is ___ (擅长) singing.",
      answer: "good at",
      whyFitsStudent: "be good at = 擅长，固定搭配。",
      hint1: "'擅长'用什么动词词组？",
      hint2: "be ___ at + sth/doing",
      trap: "写 'good in' 或 'good for' 都错。",
      whyCorrect: "be good at + sth/Ving 是固定搭配。",
    },
    trainingQuestions: [
      {
        id: "en-T9-q1",
        source: "predicted",
        stem: "He is good ___ math.",
        options: [
          { key: "A", text: "at" },
          { key: "B", text: "in" },
          { key: "C", text: "for" },
          { key: "D", text: "to" },
        ],
        answer: "A",
        hint1: "be good at = 擅长。",
        whyCorrect: "at 是固定搭配。",
      },
      {
        id: "en-T9-q2",
        source: "predicted",
        stem: "I'm interested ___ history.",
        options: [
          { key: "A", text: "at" },
          { key: "B", text: "in" },
          { key: "C", text: "on" },
          { key: "D", text: "for" },
        ],
        answer: "B",
        hint1: "be interested in = 对...感兴趣。",
        whyCorrect: "in 是固定搭配。",
      },
      {
        id: "en-T9-q3",
        source: "predicted",
        stem: "I'm looking forward ___ your reply.",
        options: [
          { key: "A", text: "to" },
          { key: "B", text: "for" },
          { key: "C", text: "at" },
          { key: "D", text: "on" },
        ],
        answer: "A",
        hint1: "look forward to + N/Ving。",
        whyCorrect: "to 是固定搭配。",
      },
      {
        id: "en-T9-q4",
        source: "predicted",
        stem: "I will visit my grandparents ___ I finish exams.",
        options: [
          { key: "A", text: "as soon as" },
          { key: "B", text: "though" },
          { key: "C", text: "but" },
          { key: "D", text: "however" },
        ],
        answer: "A",
        hint1: "as soon as = 一...就...。",
        whyCorrect: "as soon as。",
      },
      {
        id: "en-T9-q5",
        source: "predicted",
        stem: "He runs faster ___ his brother.",
        options: [
          { key: "A", text: "than" },
          { key: "B", text: "as" },
          { key: "C", text: "to" },
          { key: "D", text: "for" },
        ],
        answer: "A",
        hint1: "比较级 + than。",
        whyCorrect: "than 标志比较级。",
      },
      {
        id: "en-T9-q6",
        source: "predicted",
        stem: "I take part ___ the school sports meeting.",
        options: [
          { key: "A", text: "at" },
          { key: "B", text: "in" },
          { key: "C", text: "of" },
          { key: "D", text: "on" },
        ],
        answer: "B",
        hint1: "take part in = 参加。",
        whyCorrect: "in。",
      },
      {
        id: "en-T9-q7",
        source: "predicted",
        stem: "Listen carefully ___ what the teacher says.",
        options: [
          { key: "A", text: "in" },
          { key: "B", text: "for" },
          { key: "C", text: "to" },
          { key: "D", text: "with" },
        ],
        answer: "C",
        hint1: "listen to。",
        whyCorrect: "to。",
      },
      {
        id: "en-T9-q8",
        source: "predicted",
        stem:
          "We need to pay attention ___ the safety rules.",
        options: [
          { key: "A", text: "to" },
          { key: "B", text: "for" },
          { key: "C", text: "on" },
          { key: "D", text: "of" },
        ],
        answer: "A",
        hint1: "pay attention to = 注意。",
        whyCorrect: "to。",
      },
      {
        id: "en-T9-q9",
        source: "predicted",
        stem: "She tries her best to make ___ in society.",
        options: [
          { key: "A", text: "a difference" },
          { key: "B", text: "a problem" },
          { key: "C", text: "a sentence" },
          { key: "D", text: "a question" },
        ],
        answer: "A",
        hint1: "make a difference = 起作用 / 有影响。",
        whyCorrect: "make a difference。",
      },
      {
        id: "en-T9-q10",
        source: "predicted",
        stem:
          "_____ he is young, he is very brave.",
        options: [
          { key: "A", text: "Although" },
          { key: "B", text: "Because" },
          { key: "C", text: "If" },
          { key: "D", text: "When" },
        ],
        answer: "A",
        hint1: "前后转折。",
        whyCorrect: "Although 表让步。",
      },
    ],
    masteryTest: {
      description: "30 个词组中文配对（中文→英文）",
      passThreshold: "对 24/30 算掌握；20/30 算入门",
    },
    stuckResponses: {
      cant_memorize: "今天只背 5 个 A 组。明天背 5 个 B 组。",
      annoyed: "今天只背 1 个：be good at。看 3 遍念 5 遍。",
    },
    coachPrompt:
      "随机考烽峻 1 个词组的中文。错了给提示（如'be ___ at'）不给答案。",
  },

  {
    id: "en-T10-test-strategy",
    subject: "english",
    title: "英语考试时间分配 + 跳难题",
    examType: "全卷",
    estGain: "+2-3 分（间接）",
    priority: 1,
    oneLiner:
      "笔试 90 分钟。优先序：作文 > 阅读 A > 语法填空 > 阅读还原 > 完形 > 阅读 B/C/D。",
    sourceTrace: [
      {
        kind: "real",
        year: 2024,
        region: "辽宁省",
        paper: "考试说明",
        topic: "笔试 90 分钟 + 写作 20 分",
      },
    ],
    whyFits:
      "你 31 分，全做完没必要。把会做的全做对，比硬啃推理题划算。",
    steps: [
      "**1. 先做作文**（最容易得分的 20 分）：开头先抄，中间套模板，15 分钟搞定",
      "**2. 阅读 A 篇** 8 分：5 分钟，必抢",
      "**3. 语法填空** 10 分：15 分钟，给词的 7 空必抢",
      "**4. 阅读还原（五选四）** 8 分：10 分钟，连接词法",
      "**5. 完形填空** 10 分：15 分钟，前 5 空必抢",
      "**6. 阅读 B/C/D** 24 分：剩余时间，做细节题不做推理题",
      "推理题、主旨题不会就全选 B（统计概率高）",
    ],
    example: {
      id: "en-T10-ex",
      source: "predicted",
      stem:
        "考场上时间到了 60 分钟，已经做完作文 + A 篇。剩 30 分钟。最该做哪个？",
      options: [
        { key: "A", text: "继续做完阅读 B/C/D 4 篇" },
        { key: "B", text: "先做语法填空 10 空，再做五选四" },
        { key: "C", text: "做完形填空 10 空" },
        { key: "D", text: "回头检查作文" },
      ],
      answer: "B",
      whyFitsStudent: "性价比最高的两块：语法填空 7-10 分 + 五选四 4-8 分 = 11-18 分。",
      hint1: "你目标 45 分。哪个区块单位时间分数最高？",
      hint2: "语法填空看时间词就能判，速度快。",
      trap: "A 太花时间但分数不高（推理题难拿）；C 完形难度中等。",
      whyCorrect: "B 性价比最优解。",
    },
    trainingQuestions: [
      {
        id: "en-T10-q1",
        source: "predicted",
        stem: "英语笔试 90 分钟，下列时间分配建议错误的是（    ）",
        options: [
          { key: "A", text: "作文先做（20 分钟）" },
          { key: "B", text: "阅读 A 必抢（10 分钟）" },
          { key: "C", text: "完形 + 语法 + 五选四（35 分钟）" },
          { key: "D", text: "阅读 B/C/D 全部做完（30 分钟）" },
        ],
        answer: "D",
        hint1: "BCD 难度高且推理多，全部做完性价比低。",
        whyCorrect: "D 错——只做 B 篇就够。",
      },
      {
        id: "en-T10-q2",
        source: "predicted",
        stem: "英语考试拿到卷子，第 1 件事是（    ）",
        options: [
          { key: "A", text: "作文（最稳的 20 分）" },
          { key: "B", text: "完形填空（10 题）" },
          { key: "C", text: "阅读 D 篇（推理题）" },
          { key: "D", text: "随便填涂答题卡" },
        ],
        answer: "A",
        hint1: "作文趁脑子清晰先写。",
        whyCorrect: "A 是性价比最优。",
      },
      {
        id: "en-T10-q3",
        source: "predicted",
        stem:
          "做阅读理解时不会的题最该做的是（    ）",
        options: [
          { key: "A", text: "继续硬看 5 分钟" },
          { key: "B", text: "随便选一个并标记返回" },
          { key: "C", text: "空着" },
          { key: "D", text: "全部跳过这篇" },
        ],
        answer: "B",
        hint1: "选择题不能空。",
        whyCorrect: "B 性价比最优。",
      },
      {
        id: "en-T10-q4",
        source: "predicted",
        stem:
          "下列是英语考试时间分配建议错误的是（    ）",
        options: [
          { key: "A", text: "作文先做" },
          { key: "B", text: "阅读 A 必抢" },
          { key: "C", text: "完形分批做" },
          { key: "D", text: "全部做完不留检查时间" },
        ],
        answer: "D",
        hint1: "考试要留检查时间。",
        whyCorrect: "D 错。",
      },
      {
        id: "en-T10-q5",
        source: "predicted",
        stem:
          "做完作文后，下一道最重要的是（    ）",
        options: [
          { key: "A", text: "阅读 D（最难）" },
          { key: "B", text: "阅读 A（最简单）" },
          { key: "C", text: "完形（中等难度）" },
          { key: "D", text: "什么都行" },
        ],
        answer: "B",
        hint1: "A 篇最容易拿分。",
        whyCorrect: "B。",
      },
      {
        id: "en-T10-q6",
        source: "predicted",
        stem:
          "下列对'你的英语目标 45 分'的拆分合理的是（    ）",
        options: [
          { key: "A", text: "作文 12 + 阅读 A 6 + 语法填空 7 + 完形 4 + 五选四 6 + 阅读 B 6 + 听力 4 = 45" },
          { key: "B", text: "全靠作文（45 分）" },
          { key: "C", text: "全靠阅读" },
          { key: "D", text: "全靠运气" },
        ],
        answer: "A",
        hint1: "拆分多个来源更稳。",
        whyCorrect: "A 合理。",
      },
      {
        id: "en-T10-q7",
        source: "predicted",
        stem:
          "考前 5 分钟最重要的是（    ）",
        options: [
          { key: "A", text: "再背 1 个单词" },
          { key: "B", text: "检查答题卡填涂 + 作文是否签名" },
          { key: "C", text: "试着做难题" },
          { key: "D", text: "吃零食" },
        ],
        answer: "B",
        hint1: "填涂错 = 0 分。",
        whyCorrect: "检查填涂避免低级丢分。",
      },
      {
        id: "en-T10-q8",
        source: "predicted",
        stem: "做完形填空一共 10 空，前 5 个简单后 5 个难。最佳策略是（    ）",
        options: [
          { key: "A", text: "前 5 必抢，后 5 随便填一个" },
          { key: "B", text: "全部硬做" },
          { key: "C", text: "全部空着" },
          { key: "D", text: "随机做" },
        ],
        answer: "A",
        hint1: "性价比最高。",
        whyCorrect: "A。",
      },
      {
        id: "en-T10-q9",
        source: "predicted",
        stem:
          "作文写到一半发现要超 80 词。最该做的是（    ）",
        options: [
          { key: "A", text: "继续写到 100 词" },
          { key: "B", text: "立即收尾，别超太多" },
          { key: "C", text: "重写" },
          { key: "D", text: "停笔" },
        ],
        answer: "B",
        hint1: "超太多反而出错率高。",
        whyCorrect: "B 适当收尾。",
      },
      {
        id: "en-T10-q10",
        source: "predicted",
        stem:
          "下列考试做题顺序中最不科学的是（    ）",
        options: [
          { key: "A", text: "作文 → A → 语法 → 五选四 → 完形 → BCD" },
          { key: "B", text: "完形 → 作文 → 阅读 → 语法 → 五选四" },
          { key: "C", text: "阅读 D → 阅读 C → 阅读 B → 阅读 A → 作文" },
          { key: "D", text: "作文 → 简单题 → 难题" },
        ],
        answer: "C",
        hint1: "倒着做太花时间，把简单的放最后会先碰难题耗时。",
        whyCorrect: "C 顺序错。",
      },
    ],
    masteryTest: {
      description: "1 套真题模拟 90 分钟，按本顺序做",
      passThreshold: "作文 + A 篇 + 语法填空全部完成 + 总用时 ≤ 90 分钟",
    },
    stuckResponses: {
      annoyed: "今天不做模考。只记口诀：作文先做，阅读 A 必抢。",
    },
    coachPrompt:
      "考烽峻：英语考场拿到卷子，第一道做什么？答：作文（最稳的 20 分）。",
  },

  {
    id: "en-T11-listening-recovery",
    subject: "english",
    title: "听力关键词陷阱（如要补考用）",
    examType: "听力口语 30 分（5 月已考）",
    estGain: "若已考完无需练；若需补考 +2-3 分",
    priority: 2,
    oneLiner:
      "听到 but / however / actually 答案在后；数字立刻写题号旁。",
    sourceTrace: [{ kind: "placeholder", note: "听力口语已 5 月考完" }],
    whyFits:
      "如果听力口语已考完，本技巧不用练。这一卡仅作为补考预备。",
    steps: [
      "听到 but / however / actually → 答案在后半句",
      "听到数字（时间 / 价格 / 人数）→ 立刻写在题号旁",
      "听到 Sorry / I'm afraid / Actually / Well → 是真实意图",
      "听不懂整句没关系，只抓数字 / 地点 / 人名 / 转折词",
    ],
    example: {
      id: "en-T11-ex",
      source: "predicted",
      stem:
        "对话片段：A: Are you free this weekend? B: I'd love to but I have to study for the test.\n\n问 B 周末有空吗？",
      options: [
        { key: "A", text: "Yes, free" },
        { key: "B", text: "No, busy" },
      ],
      answer: "B",
      whyFitsStudent: "'but' 后才是真实意图。",
      hint1: "'I'd love to' 表达什么？真实意思在哪？",
      hint2: "'but' 后面的 'have to study' = 没空。",
      trap: "只听 'I'd love to' 误以为是 yes。",
      whyCorrect: "but 是转折信号，听到后必须看后半句。",
    },
    trainingQuestions: [
      {
        id: "en-T11-q1",
        source: "predicted",
        stem:
          "对话片段：A: Are you hungry? B: I'd love to have something but I just had lunch.\n\nB 现在饿吗？",
        options: [
          { key: "A", text: "Yes, hungry" },
          { key: "B", text: "No, just ate" },
        ],
        answer: "B",
        hint1: "but 后是真意。",
        whyCorrect: "B 已吃饭不饿。",
      },
      {
        id: "en-T11-q2",
        source: "predicted",
        stem:
          "对话：A: Can you help me with my homework? B: Sorry, I'm busy now. Maybe later.\n\nB 现在能帮吗？",
        options: [
          { key: "A", text: "可以" },
          { key: "B", text: "不可以，现在忙" },
        ],
        answer: "B",
        hint1: "Sorry, busy 现在不行。",
        whyCorrect: "现在不行。",
      },
      {
        id: "en-T11-q3",
        source: "predicted",
        stem:
          "对话：A: How was the movie? B: Actually, it was boring.\n\n电影好看吗？",
        options: [
          { key: "A", text: "好看" },
          { key: "B", text: "无聊" },
        ],
        answer: "B",
        hint1: "Actually 标志真意。",
        whyCorrect: "boring。",
      },
      {
        id: "en-T11-q4",
        source: "predicted",
        stem: "对话：A: Where will you go this weekend? B: Probably to the museum.\n\nB 周末去哪？",
        options: [
          { key: "A", text: "Museum" },
          { key: "B", text: "Library" },
          { key: "C", text: "Stays at home" },
          { key: "D", text: "Park" },
        ],
        answer: "A",
        whyCorrect: "Museum。",
      },
      {
        id: "en-T11-q5",
        source: "predicted",
        stem: "对话：A: How much is the book? B: It's 25 yuan.\n\n书价多少钱？",
        options: [
          { key: "A", text: "15 yuan" },
          { key: "B", text: "25 yuan" },
          { key: "C", text: "35 yuan" },
          { key: "D", text: "50 yuan" },
        ],
        answer: "B",
        hint1: "数字立刻写。",
        whyCorrect: "25 yuan。",
      },
      {
        id: "en-T11-q6",
        source: "predicted",
        stem:
          "对话：A: Will you come to my party tomorrow? B: I'd love to. But I have to study for the exam.\n\nB 会来吗？",
        options: [
          { key: "A", text: "Yes" },
          { key: "B", text: "No, has to study" },
        ],
        answer: "B",
        hint1: "But 转折，后是真意。",
        whyCorrect: "B 不能来。",
      },
      {
        id: "en-T11-q7",
        source: "predicted",
        stem: "听到 'I'm afraid I can't help you' 含义最接近的是（    ）",
        options: [
          { key: "A", text: "我害怕" },
          { key: "B", text: "我恐怕帮不了你（婉拒）" },
          { key: "C", text: "我会帮" },
          { key: "D", text: "我有空" },
        ],
        answer: "B",
        hint1: "I'm afraid = 委婉拒绝。",
        whyCorrect: "B。",
      },
      {
        id: "en-T11-q8",
        source: "predicted",
        stem: "听到 'However, I think it's a good idea' 真意是（    ）",
        options: [
          { key: "A", text: "我反对" },
          { key: "B", text: "我赞成" },
          { key: "C", text: "我犹豫" },
          { key: "D", text: "我不知道" },
        ],
        answer: "B",
        hint1: "However 后是真意。",
        whyCorrect: "B 赞成。",
      },
      {
        id: "en-T11-q9",
        source: "predicted",
        stem: "听到 'Actually, I prefer tea to coffee' 真意是（    ）",
        options: [
          { key: "A", text: "更喜欢咖啡" },
          { key: "B", text: "更喜欢茶" },
          { key: "C", text: "都喜欢" },
          { key: "D", text: "都不喜欢" },
        ],
        answer: "B",
        whyCorrect: "prefer A to B = 更喜欢 A。",
      },
      {
        id: "en-T11-q10",
        source: "predicted",
        stem:
          "听到 'I'm sorry, the train is delayed by 30 minutes' 关键信息是什么？",
        options: [
          { key: "A", text: "火车准时" },
          { key: "B", text: "火车晚点 30 分钟" },
          { key: "C", text: "火车提前 30 分钟" },
          { key: "D", text: "火车取消" },
        ],
        answer: "B",
        hint1: "delayed = 晚点。",
        whyCorrect: "B。",
      },
    ],
    masteryTest: {
      description: "5 段听力对话辨真意",
      passThreshold: "对 3/5 算入门",
    },
    stuckResponses: {
      annoyed: "听力已考完就不用练。这卡跳过。",
    },
    coachPrompt:
      "听力已考完？是 → 跳过这卡。否 → 让烽峻识别 'I'd love to but...' 的真意。",
  },

  // ============ S1：选择题双策略 ============
  {
    id: "en-S1-select-strategy",
    subject: "english",
    title: "选择题双策略：先看题再读文 + 排除法",
    examType: "阅读 + 完形 + 语法填空",
    estGain: "+3-5 分",
    priority: 0,
    oneLiner:
      "阅读题先看题圈关键词，再回原文找；不会的题排除明显错的。",
    sourceTrace: [
      { kind: "placeholder", note: "通用阅读应试技巧" },
    ],
    whyFits:
      "你 31/90，阅读题 + 完形是英语丢分大头。'先看题再读文' = 节省时间 + 提高准确率。",
    steps: [
      "**阅读题双策略**：",
      "  · 第 1 步：**先看题**，把题里的关键词（人名/数字/时间/地名）圈出来",
      "  · 第 2 步：回原文搜这些词，找到所在段落",
      "  · 第 3 步：读那段附近 2-3 行，找答案",
      "  · 第 4 步：选项不会就排除明显错的（与原文矛盾的）",
      "**完形填空双策略**：",
      "  · 看空前后两句，判**词性**（名/动/形/副）",
      "  · 看上下文逻辑（因果/转折/并列）选连接词",
      "  · 排除拼写错或不常见的词",
      "**英语选择题蒙 B 概率最高**（不是 C，与中文学科不同）",
    ],
    example: {
      id: "en-S1-ex",
      source: "predicted",
      stem:
        "阅读理解题：'When did the first iPhone come out?'\nA. 2005  B. 2007  C. 2010  D. 2015\n\n[原文：'Steve Jobs unveiled the first iPhone on January 9, 2007.']",
      answer: "B",
      whyCorrect: "审题先圈'When'+'first iPhone'。回原文搜'first iPhone'找到 2007。",
    },
    trainingQuestions: [
      {
        id: "en-S1-q1",
        source: "predicted",
        stem:
          "阅读题最佳做题顺序是？",
        options: [
          { key: "A", text: "先读全文再看题" },
          { key: "B", text: "先看题圈关键词，再回原文搜" },
          { key: "C", text: "随便看" },
          { key: "D", text: "只看第一段" },
        ],
        answer: "B",
        whyCorrect: "B 性价比最优。",
      },
      {
        id: "en-S1-q2",
        source: "predicted",
        stem: "完全不会的英语阅读题，蒙哪个字母概率较高？",
        options: [
          { key: "A", text: "A" },
          { key: "B", text: "B" },
          { key: "C", text: "C" },
          { key: "D", text: "D" },
        ],
        answer: "B",
        hint1: "英语选择 B 概率最高（与数学不同）。",
        whyCorrect: "B 是英语'安全选项'。",
      },
      {
        id: "en-S1-q3",
        source: "predicted",
        stem:
          "完形填空看到空：'He ___ to school every day.' 最该判什么？",
        options: [
          { key: "A", text: "判时态：every day → 一般现在时" },
          { key: "B", text: "判主语：He → 第三人称单数" },
          { key: "C", text: "选 goes" },
          { key: "D", text: "都对" },
        ],
        answer: "D",
        whyCorrect: "三个步骤都对，最终选 goes。",
      },
      {
        id: "en-S1-q4",
        source: "predicted",
        stem:
          "阅读题问'When'，第一步该做什么？",
        options: [
          { key: "A", text: "通读全文" },
          { key: "B", text: "回原文找'年份/日期/时间'词" },
          { key: "C", text: "随便选" },
          { key: "D", text: "看选项" },
        ],
        answer: "B",
        whyCorrect: "When 类问题先找时间词。",
      },
      {
        id: "en-S1-q5",
        source: "predicted",
        stem:
          "阅读题问'Who'，第一步该做什么？",
        answer: "回原文找人名/称谓词。",
        whyCorrect: "Who → 找人名。",
      },
      {
        id: "en-S1-q6",
        source: "predicted",
        stem: "下列对'排除法'描述**正确**的是（    ）",
        options: [
          { key: "A", text: "排除与原文矛盾的选项" },
          { key: "B", text: "排除拼写错或不常见的词" },
          { key: "C", text: "排除明显反义的选项" },
          { key: "D", text: "都对" },
        ],
        answer: "D",
        whyCorrect: "三种排除策略都对。",
      },
      {
        id: "en-S1-q7",
        source: "predicted",
        stem:
          "完形填空看到 'I was very tired ___ I went to bed early.' 该选什么连接词？",
        options: [
          { key: "A", text: "but" },
          { key: "B", text: "so" },
          { key: "C", text: "or" },
          { key: "D", text: "if" },
        ],
        answer: "B",
        hint1: "前后是因果关系。",
        hint2: "tired → 早睡 = so（因果）。",
        whyCorrect: "so 表因果。",
      },
      {
        id: "en-S1-q8",
        source: "predicted",
        stem:
          "考场上看到一道阅读题花 2 分钟还纠结。最佳做法？",
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
        id: "en-S1-q9",
        source: "predicted",
        stem: "完形选择'词性判断' 5 类是？",
        answer:
          "①名词（the/a 后）；②动词（主语后）；③形容词（系动词后/名词前）；④副词（动词后/形容词前 -ly）；⑤代词（主语/宾语位置）。",
        whyCorrect: "5 大词性。",
      },
      {
        id: "en-S1-q10",
        source: "predicted",
        stem: "英语选择题双策略是？",
        answer:
          "①阅读：先看题圈关键词再回原文搜；②完形：判词性 + 看连接词逻辑；③不会蒙 B（不是 C）。",
        whyCorrect: "本卡核心。",
      },
    ],
    masteryTest: {
      description: "5 道阅读 + 5 道完形先圈关键词再答",
      passThreshold: "8/10 题都用对策略算掌握",
    },
    stuckResponses: {
      no_start: "拿到阅读题第 1 件事：先看题，圈关键词，再回原文。",
      annoyed: "今天只练 1 件事：先看题。",
    },
    coachPrompt:
      "给烽峻一道阅读题让他**只看题圈关键词**。圈完才让他读原文。",
  },
];
