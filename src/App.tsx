import { ArrowRight, ExternalLink, Menu, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { collections, curationNotes, guideTopics, navigation, processSteps, site, socialLinks } from "./siteContent";

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
          <p>從日常配戴到空間擺件，整理有照片細節、天然紋理說明與私訊購買路徑的水晶礦石選物。</p>
          <div className="hero-actions">
            <button className="primary-action" type="button" onClick={() => visit("/collections")}>
              查看分類
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            <a className="secondary-action" href={site.instagramUrl}>
              Instagram
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="精選礦石視覺">
          <img src={collections[1].image} alt="紫色礦物與晶簇近拍" />
          <div className="hero-panel-copy">
            <span>New drops via social</span>
            <strong>先看細節，再決定是否帶回日常。</strong>
            <p>商品以社群現貨更新為主，網站負責整理分類、購買前確認與品牌信任感。</p>
          </div>
        </div>
      </section>

      <section className="content-band">
        <SectionHeading title="選品方式" text="參考個人礦石賣家常見的社群導購節奏：照片先建立信任，網站把規則說清楚。" />
        <div className="feature-grid">
          {curationNotes.map((note) => (
            <Feature title={note} text="每件商品都以可確認的材質狀態、尺寸比例與購買流程來降低私訊來回成本。" key={note} />
          ))}
        </div>
      </section>

      <section className="content-band">
        <SectionHeading title="購買流程" text="讓第一次從 IG 或 Threads 來的人，能快速知道下一步要做什麼。" />
        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-step" key={step.title}>
              <step.icon size={22} aria-hidden="true" />
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <section className="plain-section">
      <SectionHeading title="關於品牌" text="Hug Your Soul 是以水晶、礦石與日常陪伴為主的選物空間。" />
      <div className="about-layout">
        <img src={collections[0].image} alt="水晶飾品與礦石選物" />
        <div className="text-frame">
          <p>網站會放穩定資訊：選品方式、分類入口、購買前確認與保養知識。現貨更新則以 Instagram 與 Threads 為主。</p>
          <p>我們不把天然紋理包裝成完美無瑕，也不讓買家只靠一句寓意下單。每次購買前，都應該先看照片、尺寸、礦缺與使用情境。</p>
        </div>
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
              <img src={collection.image} alt={`${collection.name}分類示意`} />
              <h2>{collection.name}</h2>
              <p>{collection.description}</p>
              <div className="tag-row">
                {collection.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <a className="text-action" href={site.instagramUrl}>
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
          <article className="topic-card" key={topic.title}>
            <span>Guide</span>
            <h2>{topic.title}</h2>
            <p>{topic.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="plain-section">
      <SectionHeading title="聯絡與購買說明" text="現貨、補貨與細節照以社群更新為主；網站保留購買前確認事項。" />
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
        <p><Sparkles size={18} aria-hidden="true" /> 下單前建議確認自然光照片、尺寸、瑕疵近照、付款方式與出貨時間。</p>
        <p>天然礦石可能有棉絮、冰裂、共生礦、色帶與小礦缺；這些不是瑕疵話術，應該在購買前看清楚。</p>
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
