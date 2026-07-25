import { BookOpen, Gem, HeartHandshake, Home, Mail } from "lucide-react";

export const site = {
  brandName: "Hug Your Soul",
  tagline: "水晶、礦石與日常陪伴的選物空間",
  commerceLabel: "前往商店",
  commerceUrl: "#",
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
    description: "手鍊、墜飾與可以每天陪在身邊的小型礦石。",
  },
  {
    name: "空間擺件",
    description: "適合桌面、房間、工作室與店面陳列的晶簇和原礦。",
  },
  {
    name: "禮物選品",
    description: "依預算、場合與對方狀態整理的送禮入口。",
  },
];

export const guideTopics = [
  "如何挑選第一顆水晶",
  "水晶與礦石的日常保養",
  "天然紋理、冰裂與礦缺說明",
  "購買前常見問題",
];
