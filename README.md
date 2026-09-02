# Hug Your Soul Brand Site

好格（Hug Your Soul）的單頁品牌站。水晶、礦石與日常陪伴的選物空間。

## 這個站是什麼、不是什麼

**是**一張放在網路上的名片，闆娘私訊時可以直接丟連結。
**不是**商店，也不是需要持續經營的網站。

商品、價格、庫存、結帳與訂單全部在賣場，這個站不重複維護第二份：

| 通路 | 角色 | 連結 |
| --- | --- | --- |
| 全家好賣+ | **主要賣場**，現貨與訂單以此為準 | `site.famistoreUrl` |
| WACA 賣場 | 高單價／特殊商品通路 | <https://hug-your-soul.waca.tw/> |

最新動態在 Instagram 與 Threads。

> ⚠️ **待補：`site.famistoreUrl` 目前指向好賣+ 平台首頁，不是闆娘的賣場。**
> 個人賣場路徑是 `famistore.famiport.com.tw/users/<賣家ID>`。
> 換掉 `src/siteContent.ts` 那一行，首屏與購買區兩處會一起更新。

## 設計約束

決定於 2026-08-15，前提是**不購買自訂域名**。沒有域名代表 SEO 與「可以印在名片上的門面」
這兩個理由都不成立，因此定位收斂成一頁式名片：

1. **單頁。** 頁數越少，越不會有某一頁默默過期。導覽只做同頁錨點捲動，沒有路由。
2. **只放寫一次就永遠正確的內容。** 保養方式、天然礦石特徵這類物理性質不會過時。
   不放「最新」「本月」「新到貨」—— 那些交給 IG。
3. **不放價格、庫存、購物車。** 一旦要跟賣場後台同步，維護成本就會落到非技術者身上。
4. **商品照不標日期。** 售出的不下架，改標「已找到主人」；沒有日期就永遠不會顯得舊。
5. **空連結不顯示。** 通路按鈕會過濾掉沒設網址的項目 —— 三個入口只有一個能用，
   比只有一個更糟。
6. 目標是**就算三年不更新，看起來也不像倒店**。

改動前請先確認不會破壞以上任何一條。

## 頁面結構（單頁）

| 區塊 | 錨點 | 內容 |
| --- | --- | --- |
| Hero | — | 品牌名、一句話、查看現貨賣場／WACA 賣場／Instagram |
| 關於好格 | `#about` | 品牌立場：眼緣第一、功效其次 |
| 關於水晶 | `#traits` | 副標「這些不是瑕疵」。棉絮、冰裂、色帶、共生礦、礦缺 |
| 商品照 | `#gallery` | 經手過的礦石相簿，無價格無日期 |
| 保養方式 | `#care` | 碰水／日曬／碰撞／化學品／收納速查表 |
| 常見問題 | `#faq` | 下單、取貨、天然特徵、退換貨與寓意說明 |
| 購買與聯絡 | `#buy` | 賣場卡（全家好賣+主入口、WACA高單價商品）、Instagram、Threads |

「關於水晶」刻意排在商品照前面：進來的人多半先想知道天然特徵，
看照片前先做完期待值管理，收到貨才不會覺得被騙。

## 內容維護

所有文案與資料都集中在 `src/siteContent.ts`，不需要動 `App.tsx`。

- 換商品照：改 `galleryItems`，售出的把 `status` 改成 `"adopted"`
- 圖片換成實拍後：移除 `imageCredit`，並刪掉 `galleryDisclaimer` 的引用
- 調整保養速查：改 `careRows`
- 調整天然特徵：改 `naturalTraits`
- 換賣場或社群連結：改 `site`
- 調整賣場卡的按鈕與主次順序：改 `commerceChannel.links`（`primary: true` 是實心按鈕）
- 增減導覽項目：改 `sections`，`id` 要對得上 `App.tsx` 裡的 `<section id>`
- FAQ：改 `faqRows`；只放不容易過期的購買前常見問題，平台細節仍以賣場規則為準
- SEO：`index.html` 維護 title、description、canonical、社群分享描述與 Search Console 驗證標記
- `public/sitemap.xml` 與 `public/robots.txt` 只描述這個單頁入口，不列商品與會過期的庫存
- favicon 沿用品牌原本的公開 ICON；收到正式品牌圖後再替換 `index.html` 的 favicon URL

## 版面上踩過的坑

改 CSS 前先看這幾條，都是實際發生過的：

- **手機導覽面板必須放在 `<header>` 內。** 它原本是 header 的兄弟節點、走一般文件流，
  header 吸頂而它不會，一捲動就被下方區塊蓋掉。現在改成絕對定位掛在 header 下緣。
- **`.nav-scrim` 遮罩必須放在 `<header>` 外。** header 有 `backdrop-filter`，
  那會讓 `position: fixed` 的子元素改以 header 為基準框而不是視窗，
  放在裡面遮罩會縮成 header 那麼大、蓋不住整頁。
- **卡片容器不要套卡片外框。** `.social-grid` 曾被寫進外框規則，於是兩張卡外面又多畫一個框。
- **grid 容器記得寫 `display: grid`。** `.social-grid` 長期只有 `grid-template-columns`，
  那是一行無效宣告，兩張社群卡其實一直是上下堆疊的。
- **相鄰的兩排卡片要留間距。** 上排下框加下排上框會變成一條看起來加粗的雙線。
- **不要用 `min-height` 撐卡片。** 內容變短時下半部會空一大塊；要對齊按鈕用 `margin-top: auto`。

## 開發

```bash
npm install --include=dev   # 部分環境 NODE_ENV=production，預設不裝 devDependencies
npm run dev
npm run build
```

推上 `main` 之後由 GitHub Actions 建置並部署到 GitHub Pages。

## 圖片授權

目前商品照使用 Wikimedia Commons 的授權礦物標本照當版面示意，站上有標示來源。
**換成闆娘實拍照後，這批示意圖應全數移除。**
不要使用來源不明或可能屬於他人的產品圖。
