import { ArrowRight, ExternalLink, Menu, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  collections,
  commerceChannels,
  curationNotes,
  guideTopics,
  handoffPrinciples,
  navigation,
  processSteps,
  site,
  socialLinks,
} from "./siteContent";

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
          <p>每個水晶都是獨一無二的，你也是。從日常配戴到空間擺件，陪你用眼緣與直覺找到適合自己的礦礦。</p>
          <div className="hero-actions">
            <button className="primary-action" type="button" onClick={() => visit("/collections")}>
              找自己的玫瑰
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            <button className="secondary-action" type="button" onClick={() => visit("/contact")}>
              購買與邀請須知
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="hero-panel" aria-label="精選礦石視覺">
          <img src={collections[1].image} alt="紫色礦物與晶簇近拍" />
          <ImageCredit credit={collections[1].imageCredit} variant="overlay" />
          <div className="hero-panel-copy">
            <span>Good style, gentle choice</span>
            <strong>擁抱生活，美好格調。</strong>
            <p>眼緣第一、功效其次。商品狀態與結帳交由賣場承接，網站先把挑選方向說清楚。</p>
          </div>
        </div>
      </section>

      <section className="content-band">
        <SectionHeading title="選品方式" text="好格的語氣不是催你下單，而是陪你看見哪一顆真的有眼緣。" />
        <div className="feature-grid">
          {curationNotes.map((note) => (
            <Feature title={note} text="先喜歡，再確認。天然礦石的色帶、棉絮、冰裂、尺寸與出貨方式，都應該在購買前看清楚。" key={note} />
          ))}
        </div>
      </section>

      <section className="content-band">
        <SectionHeading title="購買流程" text="從網站看方向，到社群看近況，最後在外部賣場確認現貨與結帳。" />
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

      <section className="content-band">
        <SectionHeading title="平台分工" text="商品生命週期交給後台，網站只保留穩定的品牌分類與購買入口。" />
        <CommerceChannels />
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <section className="plain-section">
      <SectionHeading title="關於好格" text="好格相信，每個水晶都是獨一無二的，你也是。" />
      <div className="about-layout">
        <figure className="licensed-image">
          <img src={collections[0].image} alt="水晶飾品與礦石選物" />
          <ImageCredit credit={collections[0].imageCredit} />
        </figure>
        <div className="text-frame">
          <p>Hug Your Soul｜好格是水晶、礦礦與飾品的選物空間。比起把功效說滿，更希望你先相信自己的眼緣與直覺。</p>
          <p>天然礦石不是完美複製品，色帶、棉絮、冰裂、共生礦與小礦缺都可能存在。購買前請先看照片、尺寸、出貨須知與實際商品狀態。</p>
        </div>
      </div>
    </section>
  );
}

function CollectionsPage() {
  return (
    <section className="plain-section">
      <SectionHeading title="商品分類" text="先從眼緣開始，再進賣場確認價格、庫存、規格與出貨方式。" />
      <div className="collection-list">
        {collections.map((collection) => (
          <article className="collection-item" key={collection.name}>
            <div>
              <figure className="licensed-image">
                <img src={collection.image} alt={`${collection.name}分類示意`} />
                <ImageCredit credit={collection.imageCredit} />
              </figure>
              <h2>{collection.name}</h2>
              <p>{collection.description}</p>
              <div className="tag-row">
                {collection.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="collection-actions">
              {commerceChannels.map((channel) =>
                channel.url ? (
                  <a className="text-action" href={channel.url} key={channel.label}>
                    {channel.label}
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="text-action pending-action" key={channel.label}>
                    {channel.label}準備中
                  </span>
                ),
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="handoff-strip">
        {handoffPrinciples.map((item) => (
          <article key={item.title}>
            <item.icon size={20} aria-hidden="true" />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
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
      <SectionHeading title="聯絡與購買說明" text="邀請前請先看購買與出貨須知；正式下單、付款、物流與訂單通知交由外部賣場平台處理。" />
      <CommerceChannels />
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
        <p><Sparkles size={18} aria-hidden="true" /> 眼緣第一、功效其次，請相信自己的直覺選擇。</p>
        <p>天然礦石可能有棉絮、冰裂、共生礦、色帶與小礦缺；實際商品狀態、活動、運費與出貨時間，以平台商品頁與賣家回覆為準。</p>
      </div>
    </section>
  );
}

function CommerceChannels() {
  return (
    <div className="commerce-grid">
      {commerceChannels.map((channel) => (
        <article className="commerce-card" key={channel.label}>
          <div className="commerce-card-heading">
            <channel.icon size={24} aria-hidden="true" />
            <div>
              <h2>{channel.label}</h2>
              <span>{channel.role}</span>
            </div>
          </div>
          <p>{channel.text}</p>
          <ul>
            {channel.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          {channel.url ? (
            <a className="primary-action" href={channel.url}>
              前往{channel.label}
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          ) : (
            <span className="channel-status">{channel.status}</span>
          )}
        </article>
      ))}
    </div>
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

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <article className="feature-card">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}
