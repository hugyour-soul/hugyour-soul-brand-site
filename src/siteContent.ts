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
  brandName: "Hug Your Soul",
  tagline: "水晶、礦石與日常陪伴的選物空間",
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
    description: "手鍊、墜飾與能每天陪在身邊的小型礦石。官網負責整理風格，實際款式、手圍、價格與庫存以賣場後台為準。",
    image:
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=900&q=80",
    tags: ["手鍊", "墜飾", "隨身小礦"],
  },
  {
    name: "空間擺件",
    description: "晶簇、原礦與桌面陳列物。尺寸、重量、底部狀態與主要觀看面由商品賣場頁承接，避免官網與後台雙重維護。",
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=900&q=80",
    tags: ["晶簇", "原礦", "桌面陳列"],
  },
  {
    name: "禮物選品",
    description: "依預算、場合與對方喜好整理入口；是否有現貨、是否可預購、包裝與出貨時間仍交由外部賣場確認。",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
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
    title: "平台是營運真相",
    text: "商品上架、分類、庫存、價格、規格、訂單與物流都以好賣+ / 賣貨便後台為準。",
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
    text: "點進好賣+ 或賣貨便，由平台顯示現貨、規格、價格與庫存。",
    icon: Store,
  },
  {
    title: "平台結帳",
    text: "付款、物流、訂單通知與售後溝通都交給外部平台承接。",
    icon: Mail,
  },
];
