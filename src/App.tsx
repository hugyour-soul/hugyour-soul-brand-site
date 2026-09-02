import { ExternalLink, Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  aboutParagraphs,
  careRows,
  commerceChannel,
  faqRows,
  galleryDisclaimer,
  galleryIntro,
  galleryItems,
  naturalTraits,
  sections,
  site,
  socialLinks,
} from "./siteContent";

/**
 * 單頁站。刻意不做路由：
 * 頁數越少越不會有某一頁默默過期，而這個站的定位是「一張放在網路上的名片」，
 * 不是需要持續經營的網站。導覽只做同頁錨點捲動。
 */
export function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 選單開著時鎖住背景捲動，並讓 Esc 可以關閉
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <button className="brand-mark" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img className="brand-logo" src={site.logoUrl} alt="好格 organization logo" />
          <span>
            <strong>{site.brandName}</strong>
            <small>{site.tagline}</small>
          </span>
        </button>

        <nav className="desktop-nav" aria-label="主要導覽">
          {sections.map((item) => (
            <button className="nav-link" key={item.id} type="button" onClick={() => goTo(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="icon-button mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "關閉導覽" : "開啟導覽"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {menuOpen && (
          /* 面板放在 header 內並絕對定位，才會跟著吸頂的 header 一起留在畫面上；
             原本它是 header 的兄弟節點、走一般文件流，捲動時會被下方區塊蓋掉。 */
          <nav className="mobile-nav" aria-label="手機導覽">
            {sections.map((item) => (
              <button className="nav-link" key={item.id} type="button" onClick={() => goTo(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* 遮罩必須放在 header 外面：header 有 backdrop-filter，會成為 fixed 子元素的
          基準框，放在裡面的話遮罩會縮成 header 那麼大而蓋不住整頁。 */}
      {menuOpen && (
        <button className="nav-scrim" type="button" aria-label="關閉導覽" onClick={() => setMenuOpen(false)} />
      )}

      <main>
        <Hero />
        <About />
        <Traits />
        <Gallery />
        <Care />
        <Faq />
        <Buy />
      </main>

      <footer className="site-footer">
        <span>
          {site.brandName}・{site.brandNameZh}
        </span>
        <span>商品、價格與訂單由官方賣場處理。</span>
      </footer>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <h1>{site.brandName}</h1>
        <p>每一顆礦石長得都不一樣。挑到有眼緣的那顆，比挑到「最好的」那顆重要。</p>
        <div className="hero-actions">
          <a className="primary-action" href={site.famistoreUrl || site.commerceUrl}>
            {site.heroCtaLabel}
            <ExternalLink size={18} aria-hidden="true" />
          </a>
          <a className="secondary-action" href={site.commerceUrl}>
            {site.commerceLabel}
            <ExternalLink size={16} aria-hidden="true" />
          </a>
          <a className="secondary-action" href={site.instagramUrl}>
            看 Instagram
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hero-panel hero-logo-panel" aria-label="好格商標">
        <img src={site.logoUrl} alt="好格 organization logo" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="content-band" id="about">
      <SectionHeading title="關於好格" text="眼緣第一，功效其次。" />
      <div className="text-frame about-frame">
        {aboutParagraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  const [opened, setOpened] = useState<(typeof galleryItems)[number] | null>(null);

  // 跟行動選單同一套處理：開著時鎖住背景捲動，Esc 可以關閉
  useEffect(() => {
    if (!opened) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpened(null);
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [opened]);

  return (
    <section className="content-band" id="gallery">
      <SectionHeading title="商品照" text={galleryIntro} />

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <article
            className={item.status === "adopted" ? "gallery-item adopted" : "gallery-item"}
            key={`${item.name}-${index}`}
          >
            <figure className="gallery-photo">
              <button
                className="gallery-photo-button"
                type="button"
                onClick={() => setOpened(item)}
                aria-label={`放大看 ${item.name}`}
              >
                <img src={item.image} alt={item.name} loading="lazy" />
              </button>
              {item.status === "adopted" && <span className="gallery-badge">已找到主人</span>}
            </figure>
            <h3>{item.name}</h3>
            <p>{item.note}</p>
            <ImageCredit credit={item.imageCredit} />
          </article>
        ))}
      </div>

      <p className="gallery-disclaimer">{galleryDisclaimer}</p>

      {opened && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={opened.name}
          onClick={() => setOpened(null)}
        >
          <button className="lightbox-close" type="button" onClick={() => setOpened(null)} aria-label="關閉">
            <X size={20} aria-hidden="true" />
          </button>

          {/* 擋掉冒泡：點背景關閉，點圖片本身不關 */}
          <figure className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
            <img src={opened.image} alt={opened.name} />
            <figcaption>
              <h3>{opened.name}</h3>
              <p>{opened.note}</p>
              {opened.status === "adopted" && <span className="lightbox-badge">已找到主人</span>}
              <ImageCredit credit={opened.imageCredit} />
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

function Care() {
  return (
    <section className="content-band" id="care">
      <SectionHeading
        title="保養方式"
        text="礦石本身的物理性質，寫一次就永遠適用。收藏這一段比記住任何一句寓意有用。"
      />

      <div className="care-table" role="table" aria-label="礦石保養速查">
        <div className="care-row care-head" role="row">
          <span role="columnheader">情境</span>
          <span role="columnheader">可以</span>
          <span role="columnheader">要小心</span>
        </div>
        {careRows.map((row) => (
          <div className="care-row" role="row" key={row.topic}>
            <span className="care-topic" role="cell">
              {row.topic}
            </span>
            <span role="cell">{row.safe}</span>
            <span className="care-warn" role="cell">
              {row.careful}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}

function Traits() {
  return (
    <section className="content-band" id="traits">
      <SectionHeading
        title="關於水晶"
        text="這些不是瑕疵 —— 天然礦石本來就會有的樣子。買之前先知道，收到才不會覺得被騙。"
      />
      <div className="trait-grid">
        {naturalTraits.map((trait) => (
          <article className="trait-card" key={trait.name}>
            <h3>{trait.name}</h3>
            <p>{trait.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="content-band" id="faq">
      <SectionHeading title="常見問題" text="下單前先看這裡；平台最新規則仍以商品頁與訂單頁為準。" />
      <div className="faq-list">
        {faqRows.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Buy() {
  return (
    <section className="content-band" id="buy">
      <SectionHeading title="購買與聯絡" text="下單、付款、物流與售後都在官方賣場。" />

      <article className="commerce-card">
        <div className="commerce-card-heading">
          <commerceChannel.icon size={24} aria-hidden="true" />
          <div>
            <h3>{commerceChannel.label}</h3>
            <span>{commerceChannel.role}</span>
          </div>
        </div>
        <p>{commerceChannel.text}</p>
        <div className="commerce-actions">
          {commerceChannel.links.map((link) => (
            <a className={link.primary ? "primary-action" : "secondary-action"} href={link.url} key={link.label}>
              {link.label}
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </article>

      <div className="social-grid">
        {socialLinks.map((link) => (
          <a className="social-card" href={link.url} key={link.label}>
            <link.icon size={22} aria-hidden="true" />
            <span>{link.label}</span>
            <p>{link.text}</p>
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        ))}
      </div>

      <div className="text-frame purchase-notes">
        <p>
          <Sparkles size={18} aria-hidden="true" /> 下單前建議先確認自然光照片、尺寸比例、瑕疵近照與出貨時間。
        </p>
      </div>
    </section>
  );
}

function ImageCredit({ credit, variant }: { credit: { label: string; url: string }; variant?: "overlay" }) {
  return (
    <a
      className={variant === "overlay" ? "image-credit image-credit-overlay" : "image-credit"}
      href={credit.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {credit.label}
    </a>
  );
}

function SectionHeading({ title, text }: { title: string; text: string }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
