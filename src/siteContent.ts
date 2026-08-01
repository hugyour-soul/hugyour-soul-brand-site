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
  ShoppingBag,
  Store,
  Tags,
  Truck,
} from "lucide-react";

export const site = {
  brandName: "Hug Your Soul｜好格",
  tagline: "擁抱生活，美好格調的水晶礦礦飾品",
  commerceLabel: "查看現貨賣場",
  commerceUrl: "https://www.instagram.com/hug_your.soul/",
  instagramUrl: "https://www.instagram.com/hug_your.soul/",
  threadsUrl: "https://www.threads.com/@hug_your.soul",
};

export const navigation = [
  { label: "首頁", path: "/", icon: Home },
  { label: "關於品牌", path: "/about", icon: HeartHandshake },
  { label: "商品分類", path: "/collections", icon: Gem },
  { label: "水晶知識", path: "/guides", icon: BookOpen },
  { label: "聯絡購買", path: "/contact", icon: Mail },
];

export const collections = [
  {
    name: "日常配戴",
    description: "手鍊、墜飾與能每天陪在身邊的小礦礦。先看眼緣與直覺，再確認尺寸、手圍、材質與配戴習慣。",
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
    description: "晶簇、原礦與桌面陳列。每顆天然紋理都不一樣，適合放在日常會看見的角落，慢慢建立自己的生活節奏。",
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
    description: "送給在意的人，也送給正在照顧自己的你。依預算、場合與對方喜好挑選，讓對方遇到屬於自己的那朵玫瑰。",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Quartz-rhqtz-46d.jpg",
    imageCredit: {
      label: "Clear quartz cluster photo by Robert M. Lavinsky, CC BY-SA 3.0",
      url: "https://commons.wikimedia.org/wiki/File:Quartz-rhqtz-46d.jpg",
    },
    tags: ["生日", "入厝", "自我照顧"],
  },
];

export const commerceChannels = [
  {
    label: "全家好賣+",
    role: "主要商品後台",
    url: "",
    status: "賣場連結待設定",
    icon: Store,
    text: "適合承接主要現貨賣場、商品分類、庫存、規格、折扣、會員溝通與訂單處理。",
    bullets: ["商品分類與上架", "庫存、價格、規格維護", "聊聊、黑名單與會員標籤"],
  },
  {
    label: "7-11 賣貨便",
    role: "備用 / 快速結帳通路",
    url: "",
    status: "賣場連結待設定",
    icon: ShoppingBag,
    text: "適合單品導購、社群談妥後快速開單，或給偏好 7-11 取貨付款的買家使用。",
    bullets: ["一般賣場與快速結帳", "取貨付款", "商品連結分享"],
  },
];

export const handoffPrinciples = [
  {
    title: "現貨以賣場為準",
    text: "商品上架、庫存、價格、規格、訂單與物流都以好賣+ / 賣貨便後台為準。",
    icon: ShieldCheck,
  },
  {
    title: "官網負責陪你挑",
    text: "官網整理品牌調性、分類入口、購買前提醒與外部賣場連結，不取代正式商品頁。",
    icon: Tags,
  },
  {
    title: "少一點來回確認",
    text: "先把眼緣、尺寸、天然紋理與出貨須知說清楚，私訊時就能更快找到適合的那顆。",
    icon: Truck,
  },
];

export const guideTopics = [
  {
    title: "如何挑選第一顆水晶",
    text: "眼緣第一、功效其次。先相信自己的直覺，再回頭確認尺寸、重量、預算與保養難度。",
  },
  {
    title: "天然紋理、冰裂與礦缺",
    text: "每個水晶都是獨一無二的，你也是。紋理、棉絮、共生礦與小礦缺都是購買前需要看清楚的細節。",
  },
  {
    title: "日常配戴保養",
    text: "避開長時間潮濕、香水與劇烈碰撞；不同礦物硬度不同，不能全用同一套保養法。",
  },
  {
    title: "私訊購買前確認",
    text: "邀請前先看出貨須知，購買前確認自然光照片、尺寸比例、瑕疵近照、付款方式與出貨時間。",
  },
];

export const socialLinks = [
  {
    label: "Instagram",
    url: site.instagramUrl,
    icon: Instagram,
    text: "看最新現貨、礦礦細節、開箱短片與邀請須知。",
  },
  {
    label: "Threads",
    url: site.threadsUrl,
    icon: MessageCircle,
    text: "看日常更新、補貨消息、闆娘碎念與選物想法。",
  },
];

export const curationNotes = [
  "眼緣第一，功效其次",
  "每顆天然紋理都不一樣",
  "邀請前先看出貨與購買須知",
];

export const processSteps = [
  {
    title: "看分類",
    text: "先從官網感受風格、用途與購買前注意事項，找到第一眼有感覺的方向。",
    icon: Camera,
  },
  {
    title: "進賣場",
    text: "點進好賣+ 或賣貨便，由平台顯示現貨、規格、價格、庫存與活動。",
    icon: Store,
  },
  {
    title: "平台結帳",
    text: "付款、物流、訂單通知與售後溝通都交給外部平台承接，流程清楚一點也比較安心。",
    icon: Mail,
  },
];
