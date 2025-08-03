export const pageTitles = {
  main: {
    en: "Dug's Blog",
    ko: "더그의 블로그",
    ja: "ダグのブログ",
  },
  about: {
    en: "About",
    ko: "소개",
    ja: "紹介",
  },
  projects: {
    en: "Projects",
    ko: "프로젝트",
    ja: "プロジェクト",
  },
  blog: {
    en: "Blog",
    ko: "블로그",
    ja: "ブログ",
  },
  contact: {
    en: "Contact",
    ko: "문의",
    ja: "問い合わせ",
  },
  guestbook: {
    en: "Guestbook",
    ko: "방명록",
    ja: "ゲストブック",
  },
};

export const menus = {
  main: {
    en: "Main",
    ko: "메인",
    ja: "メイン",
    href: "/",
  },
  about: {
    en: "About",
    ko: "소개",
    ja: "紹介",
    href: "/about",
  },
  projects: {
    en: "Projects",
    ko: "프로젝트",
    ja: "プロジェクト",
    href: "/projects",
  },
  blog: {
    en: "Blog",
    ko: "블로그",
    ja: "ブログ",
    href: "/blog",
  },
  contact: {
    en: "Contact",
    ko: "문의",
    ja: "お問い合わせ",
    href: "/contact",
  },
  guestbook: {
    en: "Guestbook",
    ko: "방명록",
    ja: "ゲストブック",
    href: "/guestbook",
  },
};

export const main = {
  hello: {
    en: "Hello! I am",
    ko: "안녕하세요! 저는",
    ja: "こんにちは! 私は",
  },
  webDeveloper: {
    en: "Web developer",
    ko: "박수호입니다",
    ja: "朴 秀浩です",
  },
  name: {
    en: "Suho Park",
    ko: "웹 개발자",
    ja: "ウェブ開発者",
  },
  furigana: {
    en: "",
    ko: "",
    ja: "(パク スホ)",
  },
  saying: {
    en: "- slowly but steadily🐢",
    ko: "- 느리지만 꾸준히🐢",
    ja: "- 遅くても地道に🐢",
  },
};

export const skills = {
  title: {
    en: ["Skills"],
    ko: ["스킬"],
    ja: ["スキル"],
  },
  data: {
    frontend: {
      name: {
        en: "Frontend",
        ko: "프론트엔드",
        ja: "フロントエンド",
      },
      skills: [
        { id: 1, name: "html" },
        { id: 2, name: "css" },
        { id: 3, name: "astro" },
        { id: 4, name: "react" },
        { id: 5, name: "redux" },
        { id: 6, name: "vue" },
        { id: 7, name: "javascript" },
        { id: 8, name: "typescript" },
        { id: 9, name: "sass" },
        { id: 10, name: "tailwind" },
      ],
    },
    backend: {
      name: {
        en: "Backend",
        ko: "백엔드",
        ja: "バックエンド",
      },
      skills: [
        { id: 1, name: "nodejs" },
        { id: 2, name: "express" },
        { id: 3, name: "php" },
        { id: 4, name: "wordpress" },
        { id: 5, name: "py" },
        { id: 6, name: "mysql" },
        { id: 7, name: "mongodb" },
        { id: 8, name: "javascript" },
        { id: 9, name: "typescript" },
      ],
    },
    cloud: {
      name: {
        en: "Cloud",
        ko: "클라우드",
        ja: "クラウド",
      },
      skills: [
        { id: 1, name: "aws" },
        { id: 2, name: "netlify" },
      ],
    },
    misc: {
      name: {
        en: "Misc",
        ko: "기타",
        ja: "その他",
      },
      skills: [
        { id: 1, name: "linux" },
        { id: 2, name: "git" },
        { id: 3, name: "gulp" },
        { id: 4, name: "md" },
        { id: 5, name: "postman" },
        { id: 6, name: "vite" },
        { id: 7, name: "vitest" },
      ],
    },
  },
};

export const educationAndCareer = {
  title: {
    en: ["Education", "& Career"],
    ko: ["교육", "& 이력"],
    ja: ["教育", "＆ 履歴"],
  },
  data: [
    {
      period: "karabinerTechnology",
      image: "karabiner.png",
      data: [
        {
          language: "en",
          name: "karabiner.inc",
          date: "Jan 2024 - present",
          department: "Frontend development",
          duty: [
            "Working as a frontend web developer in Japan",
            "Mainly focused on static web pages and pages written in php",
            "Building variety fields' pages about fashion, financial groups, foods etc",
          ],
        },
        {
          language: "ko",
          name: "카라비너테크놀로지 주식회사",
          date: "2024. 01 - 현재",
          department: "프론트엔드개발",
          duty: [
            "일본에서 프론트엔드 개발자로서 일하고 있습니다",
            "정적 웹페이지와 php 페이지를 주로 담당하고 있습니다",
            "패션, 금융, 음식 등을 포함한 다양한 분야의 페이지들을 작성하고 있습니다",
          ],
        },
        {
          language: "ja",
          name: "カラビナテクノロジー株式会社",
          date: "2024. 01 - 現在",
          department: "フロントエンド開発",
          duty: [
            "日本でフロントエンド開発者として働いています",
            "静的ページとphpページを主に担当しています",
            "ファッション、金融、フードを含め、色んな分野のページを作成しています",
          ],
        },
      ],
    },
    {
      period: "selfTaught",
      image: "selftaught.png",
      data: [
        {
          language: "en",
          name: "Self Taught",
          date: "Jan 2023 - Jan 2024",
          department: "Frontend & Backend",
          duty: [
            "Studied web development by Udemy lectures and other articles",
            "Studied both Frontend and Backend to have wide view about web development",
            "Practiced to learn a variety of languages and skills quick",
          ],
        },
        {
          language: "ko",
          name: "독학",
          date: "2023. 01 - 2024. 01",
          department: "프론트엔드 & 백엔드",
          duty: [
            "Udemy 및 기타 자료를 통해 웹 개발을 공부하고 있습니다",
            "프론트엔드, 백엔드 지식을 모두 공부하여 웹 개발에 대해 넓은 시야를 가지려 노력합니다",
            "다양한 언어, 기술에 대해 빠르게 익히는 연습을 합니다",
          ],
        },
        {
          language: "ja",
          name: "独学",
          date: "2023. 01 - 2024. 01",
          department: "フロントエンド & バックエンド",
          duty: [
            "Udemy及び他の資料を通じてウェブ開発を勉強しています",
            "フルスタックを目指してウェブ開発について幅広い視野を持つ為にします",
            "色んな言語、技術を手早く習う練習をします",
          ],
        },
      ],
    },
    {
      period: "bootcamp",
      image: "justcode.png",
      data: [
        {
          language: "en",
          name: "Justcode",
          date: "Oct 2022 - Dec 2022",
          department: "Backend course",
          duty: [
            "Completed online bootcamp Justcode Backend course",
            "Learnt HTML, CSS, Javascript Node.js, Express, AWS, Git etc",
            "Experienced team project twice through Agile Methodology",
          ],
        },
        {
          language: "ko",
          name: "저스트코드",
          date: "2022. 10 - 2022. 12",
          department: "백엔드과정",
          duty: [
            "온라인 부트캠프 저스트코드에서 백엔드과정을 수료하였습니다",
            "HTML, CSS, Javascript, Node.js, Express, AWS, Git 등의 개념을 배웠습니다",
            "에자일방법론을 통한 팀 단위 개발을 두 차례 경험하였습니다",
          ],
        },
        {
          language: "ja",
          name: "ジャストコード",
          date: "2022. 10 - 2022. 12",
          department: "バックエンド過程",
          duty: [
            "オンラインブートキャンプジャストコードのバックエンド過程を修了しました",
            "HTML、CSS、Javascript、Node.js、Express、AWS、Gitの概念を習いました",
            "アジャイル手法を通じたチーム単位開発を2回経験しました",
          ],
        },
      ],
    },
    {
      period: "secondCompany",
      image: "ulvac.png",
      data: [
        {
          language: "en",
          name: "ULVAC KOREA, Ltd.",
          date: "Dec 2020 - Jun 2022",
          department: "Purchasing Department",
          duty: [
            "Worked at a semiconductor manufacturing machine company",
            "Managed mechanical parts' delivery, quaility and cooperate companies",
            "Managed communication to Japanese headquater",
          ],
        },
        {
          language: "ko",
          name: "한국알박(주)",
          date: "2020. 12 - 2022. 06",
          department: "구매파트",
          duty: [
            "일본계 반도체공정장비제조기업 구매부서에서 근무하였습니다",
            "기계품목들의 납기관리, 품질관리, 협력업체를 담당하였습니다",
            "일본 본사와의 커뮤니케이션을 담당하였습니다",
          ],
        },
        {
          language: "ja",
          name: "韓国アルバック(株)",
          date: "2020. 12 - 2022. 06",
          department: "購買パート",
          duty: [
            "日本系半導体工程装備製造企業の購買府署で勤務しました",
            "機械品目たちの納期管理、品質管理、協力企業を担当しました",
            "日本本社とのコミュニケーションを担当しました",
          ],
        },
      ],
    },
    {
      period: "firstCompany",
      image: "cfi.png",
      data: [
        {
          language: "en",
          name: "Clean Factomation, Inc.",
          date: "Jun 2017 - Feb 2020",
          department: "Design department",
          duty: [
            "Worked at a semiconductor handling machine company",
            "Designed mechanical parts of STK, RM, CONVEYOR, VHL etc",
            "Managed communication to Japanese headquater and American customer",
          ],
        },
        {
          language: "ko",
          name: "크린팩토메이션(주)",
          date: "2017. 06 - 2020. 02",
          department: "설계팀",
          duty: [
            "일본계 반도체반송장비제조기업 설계팀에서 근무하였습니다",
            "STK, RM, CONVEYOR, VHL등의 기계설계를 담당하였습니다",
            "미국 고객사 및 일본 본사와의 커뮤니케이션을 담당하였습니다",
          ],
        },
        {
          language: "ja",
          name: "Clean Factomation, Inc.",
          date: "2017. 06 - 2020. 02",
          department: "設計チーム",
          duty: [
            "日本系半導体搬送装備製造企業の設計チームで勤務しました",
            "STK、RM、CONVEYOR、VHLなどの機械設計を担当しました",
            "アメリカの客先及び日本本社とのコミュニケーションを担当しました",
          ],
        },
      ],
    },
    {
      period: "school",
      image: "pknu.png",
      data: [
        {
          language: "en",
          name: "Pukyong National University",
          date: "Mar 2008 - Feb 2015",
          department: "Ocean Engineering",
          duty: [
            "Majored in ocean engineering at Korea's Pukyong national university",
            "Studied dynamics about ocean and mechanics",
          ],
        },
        {
          language: "ko",
          name: "부경대학교",
          date: "2008. 03 - 2015. 02",
          department: "해양공학과",
          duty: [
            "대한민국 부산광역시 소재 국립부경대학교에서 해양공학을 전공하였습니다",
            "해양 및 기계관련 역학에 대해 공부하였습니다",
          ],
        },
        {
          language: "ja",
          name: "釜慶大学(ブギョンデハク)",
          date: "2008. 03 - 2015. 02",
          department: "海洋工学",
          duty: [
            "韓国の釜山広域市所在の国立釜慶大学で海洋工学を専攻しました",
            "海洋及び機械関連力学について勉強しました",
          ],
        },
      ],
    },
  ],
};

export const skillsFilter = {
  title: {
    en: "Skills filter",
    ko: "스킬 필터",
    ja: "スキルフィルター",
  },
  heading: {
    en: "Click skills to filter projects",
    ko: "관련된 프로젝트를 보기위해 스킬들을 클릭하세요",
    ja: "関連のプロジェクトを見る為、スキルをクリックしてください",
  },
  counts: {
    en: ["\u00A0of\u00A0 ", "project(s) selected"],
    ko: ["개 중\u00A0", "개의 프로젝트 선택됨"],
    ja: ["個中", "個のプロジェクト選択"],
  },
};

export const projects = {
  title: {
    en: "Projects",
    ko: "프로젝트",
    ja: "プロジェクト",
  },
  repository: {
    en: "Click here",
    ko: "저장소로 이동",
    ja: "コード確認",
  },
  deployment: {
    en: "Deployment URL :\u00A0",
    ko: "배포주소 :\u00A0",
    ja: "配布URL :\u00A0",
  },
  frontend: {
    en: "Frontend Repository :\u00A0",
    ko: "프론트엔드저장소 :\u00A0",
    ja: "フロントエンドリポジトリ :\u00A0",
  },
  backend: {
    en: "Backend Repository :\u00A0",
    ko: "백엔드저장소 :\u00A0",
    ja: "バックエンドリポジトリ :\u00A0",
  },
  skills: {
    en: "Related Skills",
    ko: "관련 스킬",
    ja: "関連スキル",
  },
};

export const componentTitles = {
  skills: {
    en: "Skills",
    ko: "스킬",
    ja: "スキル",
  },
  educationAndCareer: {
    en: "Education & Career",
    ko: "교육 & 이력",
    ja: "教育＆履歴",
  },
  skillsFilter: {
    en: "Skills filter",
    ko: "기술 필터",
    ja: "スキル絞り込み",
  },
  contact: {
    en: "Contact",
    ko: "문의처",
    ja: "問い合わせ",
  },
  guestbook: {
    en: "Guestbook",
    ko: "방명록",
    ja: "ゲストブック",
  },
};

export const contactForm = {
  name: {
    en: "Name",
    ko: "이름",
    ja: "お名前",
  },
  namePlaceholder: {
    en: "Your name",
    ko: "이름을 입력해주세요",
    ja: "お名前を入力してください",
  },
  nameError: {
    en: "Please enter your name",
    ko: "이름이 필요합니다",
    ja: "お名前が必要です",
  },
  email: {
    en: "Email",
    ko: "이메일",
    ja: "メール",
  },
  emailPlaceholder: {
    en: "Your email",
    ko: "이메일을 입력해주세요",
    ja: "メールを入力してください",
  },
  emailInvalidError: {
    en: "Please enter a valid email",
    ko: "유효한 이메일을 입력해주세요",
    ja: "有効なメールが必要です",
  },
  emailEmptyError: {
    en: "Please enter your email",
    ko: "이메일을 입력해주세요",
    ja: "メールが必要です",
  },
  message: {
    en: "Message",
    ko: "메세지",
    ja: "メッセージ",
  },
  messagePlaceholder: {
    en: "Your message",
    ko: "메세지를 입력해주세요",
    ja: "メッセージを入力してください",
  },
  messageError: {
    en: "Please enter your message",
    ko: "메세지를 입력해주세요",
    ja: "メッセージが必要です",
  },
  submit: {
    en: "Submit",
    ko: "제출",
    ja: "提出",
  },
};

export const guestbook = {
  name: {
    en: "Name",
    ko: "이름",
    ja: "お名前",
  },
  namePlaceholder: {
    en: "Your name",
    ko: "이름을 입력해주세요",
    ja: "お名前を入力してください",
  },
  nameError: {
    en: "Please enter your name",
    ko: "이름이 필요합니다",
    ja: "お名前が必要です",
  },
  password: {
    en: "Password",
    ko: "비밀번호",
    ja: "パスワード",
  },
  passwordDescription: {
    en: "required to delete the message",
    ko: "메세지 삭제에 필요",
    ja: "メッセージ削除に必要",
  },
  passwordPlaceholder: {
    en: "Your password",
    ko: "비밀번호를 입력해주세요",
    ja: "パスワードを入力してかださい",
  },
  passwordError: {
    en: "Please enter password",
    ko: "비밀번호가 필요합니다",
    ja: "パスワードが必要です",
  },
  message: {
    en: "Message",
    ko: "메세지",
    ja: "メッセージ",
  },
  messagePlaceholder: {
    en: "Your message",
    ko: "메세지를 입력해주세요",
    ja: "メッセージを入力してください",
  },
  messageError: {
    en: "Please enter your message",
    ko: "메세지를 입력해주세요",
    ja: "メッセージが必要です",
  },
  submit: {
    en: "Submit",
    ko: "제출",
    ja: "提出",
  },
};

export const error = {
  en: {
    oops: "Oops!",
    texts: ["An error has occurred!", "Please contact Dug!"],
  },
  ko: {
    oops: "이런!",
    texts: ["문제가 발생했습니다!", "Dug에게 연락해주세요!"],
  },
  ja: {
    oops: "おおっと!",
    texts: ["問題が発生しました！", "Dugに連絡してください！"],
  },
};
