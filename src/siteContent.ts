import { BookOpen, Camera, Gem, HeartHandshake, Home, Instagram, Mail, MessageCircle } from "lucide-react";

export const site = {
  brandName: "Hug Your Soul",
  tagline: "水晶、礦石與日常陪伴的選物空間",
  commerceLabel: "私訊詢問現貨",
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
    description: "手鍊、墜飾與能每天陪在身邊的小型礦石，優先看色階、珠徑與配戴感。",
    image:
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=900&q=80",
    tags: ["手鍊", "墜飾", "隨身小礦"],
  },
  {
    name: "空間擺件",
    description: "晶簇、原礦與桌面陳列物，會標示尺寸、重量、底部狀態與主要觀看面。",
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=900&q=80",
    tags: ["晶簇", "原礦", "桌面陳列"],
  },
  {
    name: "禮物選品",
    description: "依預算、場合與對方喜好整理，不只看寓意，也看好不好保存、好不好配戴。",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    tags: ["生日", "入厝", "自我照顧"],
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
    title: "看照片",
    text: "先從 IG / Threads 看近期現貨、光感與尺寸比例。",
    icon: Camera,
  },
  {
    title: "問細節",
    text: "可私訊確認礦缺、色差、手圍、底座與包裝。",
    icon: MessageCircle,
  },
  {
    title: "再購買",
    text: "確認商品狀態、付款與出貨後，再導向正式交易流程。",
    icon: Mail,
  },
];
