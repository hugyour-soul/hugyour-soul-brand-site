import { ArrowRight, ExternalLink, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { collections, guideTopics, navigation, site } from "./siteContent";

type PageKey = "/" | "/about" | "/collections" | "/guides" | "/contact";
const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

const pageTitles: Record<PageKey, string> = {
  "/": "品牌首頁",
  "/about": "關於品牌",
  "/collections": "商品分類",
  "/guides": "水晶知識",
  "/contact": "聯絡與購買說明",
};

function normalizePath(pathname: string): PageKey {
  const path = basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) || "/" : pathname;

  if (path === "/about" || path === "/collections" || path === "/guides" || path === "/contact") {
    return path;
  }

  return "/";
}

export function App() {
  const [page, setPage] = useState<PageKey>(() => normalizePath(window.location.pathname));
  const [menuOpen, setMenuOpen] = useState(false);
  const title = useMemo(() => pageTitles[page], [page]);

  useEffect(() => {
    const onPopState = () => setPage(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  function visit(path: string) {
    const next = normalizePath(path);
    window.history.pushState({}, "", `${basePath}${next}`);
    setPage(next);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <button className="brand-mark" type="button" onClick={() => visit("/")}>
          <span className="brand-symbol">HYS</span>
          <span>
            <strong>{site.brandName}</strong>
            <small>{site.tagline}</small>
          </span>
        </button>

        <nav className="desktop-nav" aria-label="主要導覽">
          {navigation.map((item) => (
            <button
              className={item.path === page ? "nav-link active" : "nav-link"}
              key={item.path}
              type="button"
              onClick={() => visit(item.path)}
            >
              <item.icon size={16} aria-hidden="true" />
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="icon-button mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "關閉導覽" : "開啟導覽"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="手機導覽">
          {navigation.map((item) => (
            <button
              className={item.path === page ? "nav-link active" : "nav-link"}
              key={item.path}
              type="button"
              onClick={() => visit(item.path)}
            >
              <item.icon size={16} aria-hidden="true" />
              {item.label}
            </button>
          ))}
        </nav>
      )}

      <main>
        <p className="page-kicker">{title}</p>
        {page === "/" && <HomePage visit={visit} />}
        {page === "/about" && <AboutPage />}
        {page === "/collections" && <CollectionsPage />}
        {page === "/guides" && <GuidesPage />}
        {page === "/contact" && <ContactPage />}
      </main>

      <footer className="site-footer">
        <span>{site.brandName}</span>
        <span>商品、結帳與訂單管理交由外部商店平台處理。</span>
      </footer>
    </div>
  );
}

function HomePage({ visit }: { visit: (path: string) => void }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <h1>{site.brandName}</h1>
          <p>{site.tagline}</p>
          <div className="hero-actions">
            <button className="primary-action" type="button" onClick={() => visit("/collections")}>
              查看分類
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            <button className="secondary-action" type="button" onClick={() => visit("/guides")}>
              水晶知識
            </button>
          </div>
        </div>
        <div className="hero-panel" aria-label="品牌定位摘要">
          <span>Brand Frame</span>
          <strong>先建立信任，再導向購買。</strong>
          <p>這裡預留給之後的主視覺、品牌一句話與精選入口。</p>
        </div>
      </section>

      <section className="content-band">
        <SectionHeading title="網站定位" text="此站作為品牌前台，不承擔商品庫存、付款或物流。" />
        <div className="feature-grid">
          <Feature title="品牌故事" text="讓第一次看到的人知道這間店是誰、為什麼值得信任。" />
          <Feature title="分類入口" text="只放穩定分類與精選入口，避免每日同步庫存。" />
          <Feature title="知識內容" text="放保養、挑選、天然礦缺等說明，降低購買前疑慮。" />
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <section className="plain-section">
      <SectionHeading title="關於品牌" text="這裡先放架構，之後再補真實故事與店主語氣。" />
      <div className="text-frame">
        <p>品牌起點、選品標準、與水晶礦石相處的方式會放在這裡。</p>
        <p>這一頁的目標不是寫得華麗，而是讓使用者相信商品背後有人在認真挑選。</p>
      </div>
    </section>
  );
}

function CollectionsPage() {
  return (
    <section className="plain-section">
      <SectionHeading title="商品分類" text="分類頁只做入口，完整價格、庫存與結帳留在商店平台。" />
      <div className="collection-list">
        {collections.map((collection) => (
          <article className="collection-item" key={collection.name}>
            <div>
              <h2>{collection.name}</h2>
              <p>{collection.description}</p>
            </div>
            <a className="text-action" href={site.commerceUrl}>
              {site.commerceLabel}
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function GuidesPage() {
  return (
    <section className="plain-section">
      <SectionHeading title="水晶知識" text="未來可逐篇擴充成 SEO 內容與購買前 FAQ。" />
      <div className="topic-grid">
        {guideTopics.map((topic) => (
          <article className="topic-card" key={topic}>
            <span>Guide</span>
            <h2>{topic}</h2>
            <p>預留文章摘要。之後可加上保養方式、照片範例與購買注意事項。</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="plain-section">
      <SectionHeading title="聯絡與購買說明" text="把購買流程說清楚，減少私訊來回確認。" />
      <div className="text-frame">
        <p>可放 Instagram、LINE、Pinkoi、WACA/EasyStore/SHOPLINE 商店連結。</p>
        <p>也可列出出貨天數、付款方式、退換貨原則、天然礦石瑕疵說明。</p>
      </div>
    </section>
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

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <article className="feature-card">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}
