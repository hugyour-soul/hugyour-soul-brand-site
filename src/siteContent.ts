import { Instagram, MessageCircle, Store } from "lucide-react";

/**
 * 設計約束（2026-08-15 定案，羽燕鋒拍板）
 *
 * 背景：品牌已改用 WACA 開店平台（hug-your-soul.waca.ec）承接商品、庫存與結帳，
 * 且決定不購買自訂域名。沒有域名代表 SEO 與「可以貼在名片上的門面」這兩個
 * 理由都不成立，這個站唯一的流量來源是闆娘私訊時手動把連結丟給人。
 *
 * 因此定位改為「一張放在網路上的名片」，而不是要持續經營的網站：
 *   1. 單頁。頁數越少，越不會有某一頁默默爛掉。
 *   2. 只放寫一次就永遠正確的內容（保養方式、天然特徵），
 *      不放「最新」「本月」「新到貨」這類會過期的字眼 —— 那些交給 IG。
 *   3. 商品的價格、庫存、規格只在 WACA 寫一次，官網不複製第二份。
 *   4. 目標是就算三年不更新，看起來也不像倒店。
 */

export const site = {
  brandName: "Hug Your Soul",
  brandNameZh: "好格",
  tagline: "水晶、礦石與日常陪伴的選物空間",
  commerceLabel: "查看現貨賣場",
  commerceUrl: "https://hug-your-soul.waca.ec/",
  instagramUrl: "https://www.instagram.com/hug_your.soul/",
  threadsUrl: "https://www.threads.com/@hug_your.soul",
};

// 單頁錨點。不做路由，捲動即可看完整站。
export const sections = [
  { id: "about", label: "關於好格" },
  { id: "gallery", label: "選物紀錄" },
  { id: "care", label: "保養方式" },
  { id: "buy", label: "購買與聯絡" },
];

export const aboutParagraphs = [
  "好格是以水晶、礦石與日常陪伴為主的選物空間。挑東西的時候，眼緣通常比功效重要。",
  "天然礦石不是壓克力。棉絮、冰裂、色帶、共生礦與小礦缺都是它本來的樣子，我們不會把它修飾成完美無瑕，也不希望任何人只憑一句寓意就下單。",
];

// 選物紀錄：刻意「不是商品目錄」。
// 沒有價格、沒有庫存、沒有日期；賣掉的不下架，改標「已找到主人」。
// 沒有日期，這頁就永遠不會顯得舊；不同步庫存，就不需要有人回來維護。
export const galleryIntro =
  "這裡放經手過的礦石長什麼樣子，不放價格和庫存。已經找到主人的也留著，那也是選物的一部分。";

export const galleryDisclaimer =
  "目前為版面示意，圖片取自 Wikimedia Commons 授權礦物標本照；換上實拍照後即為正式內容。";

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

// 保養速查：這個站唯一會被重複用到的東西 —— 闆娘私訊時可以直接丟連結。
// 只寫礦物本身的物理性質，寫一次就永遠正確，不需要跟著商品更新。
export const careRows = [
  {
    topic: "碰水",
    safe: "石英家族（白水晶、紫水晶、粉晶、黃水晶、茶晶）短暫沖洗沒問題，擦乾就好。",
    careful: "孔雀石、青金石、方解石、螢石、天使石避免泡水 —— 硬度低或結構較鬆，長時間浸泡容易失去光澤。用乾布或微濕布擦拭即可。",
  },
  {
    topic: "日曬",
    safe: "白水晶、黑曜石、瑪瑙相對耐光。",
    careful: "紫水晶、粉晶、黃水晶、螢石、海藍寶長期直曬會褪色。別放在整天照得到太陽的窗邊。",
  },
  {
    topic: "碰撞",
    safe: "石英類硬度約 7，日常配戴沒什麼問題。",
    careful: "螢石約 4、方解石約 3，指甲以外的東西都可能刮傷，尖角也容易磕掉。單獨收、不要跟其他礦石擠在一起。",
  },
  {
    topic: "化學品",
    safe: "清水與軟布是最安全的組合。",
    careful: "香水、乳液、防曬、清潔劑都先擦好再戴。已經有冰裂的礦石不要用超音波清洗機，震動會讓裂痕延伸。",
  },
  {
    topic: "收納",
    safe: "軟布袋或有隔層的盒子。",
    careful: "不同硬度的礦石放在一起會互相刮傷，硬的那顆通常沒事，軟的那顆會留痕。",
  },
];

// 天然特徵不是瑕疵 —— 這段同時是購買前的期待值管理。
export const naturalTraits = [
  { name: "棉絮", text: "內部像雲霧或絲狀的細微包裹體，是生長過程留下的痕跡。" },
  { name: "冰裂", text: "內部的天然裂痕，會在光線下折射出彩光。不影響配戴，但避免劇烈溫差與撞擊。" },
  { name: "色帶", text: "顏色深淺分布不均。天然致色本來就不會整顆一模一樣。" },
  { name: "共生礦", text: "兩種以上的礦物長在同一塊上，常見於原礦與晶簇。" },
  { name: "礦缺", text: "邊角的天然缺口或未完全生長的面，原礦幾乎都會有。" },
];

export const commerceChannel = {
  label: "Hug Your Soul 官方賣場",
  role: "商品與訂單後台",
  url: site.commerceUrl,
  icon: Store,
  text: "商品、價格、庫存、結帳與訂單都在賣場。這個網站不重複維護第二份，以免兩邊對不起來。",
};

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
