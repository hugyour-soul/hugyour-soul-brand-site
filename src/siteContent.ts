import {
  BookOpen,
  Camera,
  Gem,
  HeartHandshake,
  Home,
  Instagram,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkle,
  Store,
  Tags,
  Truck,
} from "lucide-react";

export const site = {
  brandName: "Hug Your Soul",
  tagline: "水晶、礦石與日常陪伴的選物空間",
  commerceLabel: "查看現貨賣場",
  commerceUrl: "https://hug-your-soul.waca.ec/",
  instagramUrl: "https://www.instagram.com/hug_your.soul/",
  threadsUrl: "https://www.threads.com/@hug_your.soul",
};

export const navigation = [
  { label: "首頁", path: "/", icon: Home },
  { label: "關於品牌", path: "/about", icon: HeartHandshake },
  { label: "商品分類", path: "/collections", icon: Gem },
  { label: "選物紀錄", path: "/gallery", icon: Sparkle },
  { label: "水晶知識", path: "/guides", icon: BookOpen },
  { label: "聯絡購買", path: "/contact", icon: Mail },
];

// 選物紀錄：刻意「不是商品目錄」。
// 沒有價格、沒有庫存、沒有購物車；賣掉的不下架，改標「已找到主人」。
// 這樣網站不需要跟著賣場後台同步，維護成本才不會落到非技術者身上。
export const galleryIntro =
  "這裡放經手過的礦石長什麼樣子，不放價格和庫存。已經找到主人的也留著，那也是選物的一部分。";

export const galleryDisclaimer =
  "目前為版面示意，圖片取自 Wikimedia Commons 授權礦物標本照；正式上線會全數換成實拍。";

export const galleryItems = [
  {
    name: "白水晶簇",
    note: "光從側邊進來的時候會整片亮起來。",
    status: "available" as const,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Quartz-rhqtz-46d.jpg",
    imageCredit: {
      label: "Clear quartz cluster photo by Robert M. Lavinsky, CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Quartz-rhqtz-46d.jpg",
    },
  },
  {
    name: "紫水晶原礦",
    note: "顏色偏深，放桌上比想像中安靜。",
    status: "available" as const,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Amethyst-sample2.jpg",
    imageCredit: {
      label: "Amethyst photo by Jennifer M, CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Amethyst-sample2.jpg",
    },
  },
  {
    name: "透石英柱",
    note: "有一條斜斜的冰裂，我反而最喜歡那裡。",
    status: "adopted" as const,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Quartz-137772.jpg",
    imageCredit: {
      label: "Quartz specimen photo by Robert M. Lavinsky, CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Quartz-137772.jpg",
    },
  },
  {
    name: "紫晶洞小片",
    note: "尺寸不大，適合放在看得到的地方。",
    status: "adopted" as const,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Amethyst-sample2.jpg",
    imageCredit: {
      label: "Amethyst photo by Jennifer M, CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Amethyst-sample2.jpg",
    },
  },
  {
    name: "白水晶單尖",
    note: "邊角很乾淨，是那種第一眼就會拿起來的。",
    status: "available" as const,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Quartz-137772.jpg",
    imageCredit: {
      label: "Quartz specimen photo by Robert M. Lavinsky, CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Quartz-137772.jpg",
    },
  },
  {
    name: "共生水晶群",
    note: "底下還連著母岩，整塊有點重。",
    status: "adopted" as const,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Quartz-rhqtz-46d.jpg",
    imageCredit: {
      label: "Clear quartz cluster photo by Robert M. Lavinsky, CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Quartz-rhqtz-46d.jpg",
    },
  },
];

export const collections = [
  {
    name: "日常配戴",
    description: "手鍊、墜飾與能每天陪在身邊的小型礦石。官網負責整理風格，實際款式、手圍、價格與庫存以賣場後台為準。",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/Quartz-137772.jpg",
    imageCredit: {
      label: "Quartz specimen photo by Robert M. Lavinsky, CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Quartz-137772.jpg",
    },
    tags: ["手鍊", "墜飾", "隨身小礦"],
  },
  {
    name: "空間擺件",
    description: "晶簇、原礦與桌面陳列物。尺寸、重量、底部狀態與主要觀看面由商品賣場頁承接，避免官網與後台雙重維護。",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Amethyst-sample2.jpg",
    imageCredit: {
      label: "Amethyst photo by Jennifer M, CC BY 2.0",
      url: "https://commons.wikimedia.org/wiki/File:Amethyst-sample2.jpg",
    },
    tags: ["晶簇", "原礦", "桌面陳列"],
  },
  {
    name: "禮物選品",
    description: "依預算、場合與對方喜好整理入口；是否有現貨、是否可預購、包裝與出貨時間仍交由外部賣場確認。",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Quartz-rhqtz-46d.jpg",
    imageCredit: {
      label: "Clear quartz cluster photo by Robert M. Lavinsky, CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Quartz-rhqtz-46d.jpg",
    },
    tags: ["生日", "入厝", "自我照顧"],
  },
];

// 目前實際營運的通路只有 WACA 官方賣場。
// 好賣+ / 賣貨便曾列為候選但未啟用，先移除避免站上出現點不進去的死連結；
// 之後要開再照同樣結構加回來即可。
export const commerceChannels = [
  {
    label: "Hug Your Soul 官方賣場",
    role: "商品與訂單後台",
    url: site.commerceUrl,
    status: "已上線",
    icon: Store,
    text: "WACA 開店平台。商品上架、分類、價格、庫存、結帳與訂單都在這裡，官網只負責把人帶過來。",
    bullets: ["商品分類與現貨狀態", "線上結帳與物流", "訂單與售後溝通"],
  },
];

export const handoffPrinciples = [
  {
    title: "平台是營運真相",
    text: "商品上架、分類、庫存、價格、規格、訂單與物流都以官方賣場後台為準。",
    icon: ShieldCheck,
  },
  {
    title: "官網只做導購",
    text: "官網保留品牌分類、選物故事、購買前提醒與外部賣場入口，不複製完整商品資料。",
    icon: Tags,
  },
  {
    title: "非技術者可維護",
    text: "未來主要處理者只需要管理外部平台；網站只在新增分類、調整品牌內容或替換賣場連結時更新。",
    icon: Truck,
  },
];

export const guideTopics = [
  {
    title: "如何挑選第一顆水晶",
    text: "先看喜歡的色感與使用情境，再看尺寸、重量、預算與保養難度。",
  },
  {
    title: "天然紋理、冰裂與礦缺",
    text: "天然礦石不是壓克力，紋理、棉絮、共生礦與小礦缺都需要購買前說清楚。",
  },
  {
    title: "日常配戴保養",
    text: "避開長時間潮濕、香水與劇烈碰撞；不同礦物硬度不同，不能全用同一套保養法。",
  },
  {
    title: "私訊購買前確認",
    text: "購買前建議確認自然光照片、尺寸比例、瑕疵近照、付款方式與出貨時間。",
  },
];

export const socialLinks = [
  {
    label: "Instagram",
    url: site.instagramUrl,
    icon: Instagram,
    text: "看最新現貨、短影片與礦石細節照。",
  },
  {
    label: "Threads",
    url: site.threadsUrl,
    icon: MessageCircle,
    text: "看日常更新、補貨消息與選物想法。",
  },
];

export const curationNotes = [
  "自然光與近拍細節比濾鏡重要",
  "標示尺寸、重量、瑕疵與礦物特性",
  "以私訊確認現貨狀態與出貨方式",
];

export const processSteps = [
  {
    title: "看分類",
    text: "先從官網確認風格、用途與購買前注意事項。",
    icon: Camera,
  },
  {
    title: "進賣場",
    text: "點進官方賣場，由平台顯示現貨、規格、價格與庫存。",
    icon: Store,
  },
  {
    title: "平台結帳",
    text: "付款、物流、訂單通知與售後溝通都交給外部平台承接。",
    icon: Mail,
  },
];
