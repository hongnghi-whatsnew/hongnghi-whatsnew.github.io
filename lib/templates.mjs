// HTML templates for the static site. Pure string builders, no dependencies.
import {
  escapeHtml,
  formatDateVi,
  formatDateShort,
  isoDate,
  readingTime,
} from './util.mjs';
import { moduleColor, hexA } from './modules.mjs';

/* ───────────────────────── Icons ───────────────────────── */
const SVG = {
  arrowR:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  arrowL:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
  search:
    '<svg viewBox="0 0 24 24" fill="none" stroke="#B0A0A8" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/></svg>',
  close:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  file:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h4"/></svg>',
  slide:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M12 17v3M8 20h8"/></svg>',
  bell:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
  download:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 11l5 4 5-4M5 21h14"/></svg>',
  excel:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 8l8 8M16 8l-8 8"/></svg>',
  lock:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  pin:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg>',
};

/* ───────────────────────── Media types ───────────────────────── */
const TYPE = {
  video: { short: 'Video', long: 'Video hướng dẫn', color: '#D81B60', icon: SVG.play },
  pdf: { short: 'PDF', long: 'Tài liệu PDF', color: '#C07A1E', icon: SVG.file },
  slide: { short: 'Slide', long: 'Slide trình bày', color: '#B45309', icon: SVG.slide },
  none: { short: 'Thông báo', long: 'Thông báo', color: '#16A34A', icon: SVG.bell },
};
function typeOf(t) {
  return TYPE[t] || TYPE.none;
}

/* ───────────────────────── Small helpers ───────────────────────── */
function fileName(p) {
  return String(p || '').split('/').pop() || '';
}
function fileExtLabel(p) {
  const ext = (fileName(p).split('.').pop() || '').toUpperCase();
  return ext || 'FILE';
}

/* ───────────────────────── Media blocks (detail) ───────────────────────── */
function youtubeEmbed(id, title) {
  const safeId = escapeHtml(id);
  return `<div class="embed embed--video">
  <iframe
    src="https://www.youtube-nocookie.com/embed/${safeId}?rel=0&modestbranding=1"
    title="${escapeHtml(title || 'Video hướng dẫn')}"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
    allowfullscreen></iframe>
</div>`;
}

function pdfBlock(post) {
  const pdf = escapeHtml(post.pdfFile);
  const orig = post.originalFile ? escapeHtml(post.originalFile) : '';
  const origLabel = escapeHtml(post.originalLabel || 'Tải file gốc');
  return `<div class="pdf">
  <iframe class="pdf-frame" src="${pdf}#view=FitH" title="Tài liệu PDF" loading="lazy"></iframe>
  <div class="pdf-actions">
    <a class="btn-solid" href="${pdf}" target="_blank" rel="noopener">${SVG.file}Mở PDF toàn màn hình</a>
    ${
      orig
        ? `<a class="btn-ghost" href="${orig}" download>${SVG.download}${origLabel}</a>`
        : `<a class="btn-ghost" href="${pdf}" download>${SVG.download}Tải tài liệu PDF</a>`
    }
  </div>
</div>`;
}

function mediaBlock(post) {
  if (post.mediaType === 'video' && post.youtubeId) return youtubeEmbed(post.youtubeId, post.title);
  if (post.mediaType === 'pdf' || post.mediaType === 'slide') return pdfBlock(post);
  return '';
}

/* ───────────────────────── Card (listing grid) ───────────────────────── */
function postCard(post) {
  const t = typeOf(post.mediaType);
  const mc = moduleColor(post.module);
  const vars = `--mc:${mc};--mc-soft:${hexA(mc, 0.1)};--mc-line:${hexA(mc, 0.14)};`;
  const search = `${post.title} ${post.summary || ''} ${post.module || ''} ${post.version || ''}`
    .toLowerCase();
  const icon =
    post.mediaType === 'video'
      ? `<span class="play">${SVG.play}</span>`
      : t.icon;
  return `<a class="card" style="${vars}" href="/bai-viet/${escapeHtml(post.slug)}/"
  data-slug="${escapeHtml(post.slug)}" data-type="${escapeHtml(post.mediaType)}"
  data-module="${escapeHtml(post.module || '')}" data-new="${post.isNew ? '1' : '0'}"
  data-search="${escapeHtml(search)}">
  <div class="card-media">
    ${post.isNew ? '<span class="card-new">● MỚI</span>' : ''}
    <span class="card-type">${t.short}</span>
    <span class="card-icon">${icon}</span>
  </div>
  <div class="card-body">
    <div class="card-tags">
      ${post.module ? `<span class="pill"><span class="dot"></span>${escapeHtml(post.module)}</span>` : ''}
      ${post.version ? `<span class="ver">${escapeHtml(post.version)}</span>` : ''}
    </div>
    <h3 class="card-title">${escapeHtml(post.title)}</h3>
    ${post.summary ? `<p class="card-summary">${escapeHtml(post.summary)}</p>` : ''}
    <div class="card-foot">
      <span class="card-date">${formatDateShort(post.date)}</span>
      <span class="card-go">${SVG.arrowR}</span>
    </div>
  </div>
</a>`;
}

/* ───────────────────────── Featured (newest) ───────────────────────── */
function featuredCard(post, tagOverride) {
  const t = typeOf(post.mediaType);
  const mc = moduleColor(post.module);
  const tag =
    tagOverride ||
    (post.version ? `★ Phiên bản mới nhất · ${escapeHtml(post.version)}` : '★ Bản mới nhất');
  const mediaInner =
    post.mediaType === 'video'
      ? `<span class="featured-play">${SVG.play}</span>`
      : `<span class="featured-play" style="background:rgba(255,255,255,.14);color:#fff;">${t.icon}</span>`;
  return `<a class="featured" id="featured" href="/bai-viet/${escapeHtml(post.slug)}/" data-slug="${escapeHtml(post.slug)}">
  <div class="featured-inner">
    <div class="featured-main">
      <div class="featured-tag"><span>${tag}</span></div>
      <div class="featured-meta">
        ${post.module ? `<span class="featured-mod">${escapeHtml(post.module)}</span>` : ''}
        <span class="featured-date">${formatDateShort(post.date)}</span>
      </div>
      <h2>${escapeHtml(post.title)}</h2>
      ${post.summary ? `<p>${escapeHtml(post.summary)}</p>` : ''}
      <span class="featured-cta">Xem chi tiết &amp; hướng dẫn ${SVG.arrowR}</span>
    </div>
    <div class="featured-media">
      ${mediaInner}
      <span class="featured-medialabel">${t.long}</span>
    </div>
  </div>
</a>`;
}

/* ───────────────────────── Filter chips ───────────────────────── */
function typeChips(posts) {
  const present = new Set(posts.map((p) => p.mediaType));
  const order = ['video', 'pdf', 'slide', 'none'].filter((k) => present.has(k));
  const chips = [
    `<button class="chip chip--type is-active" data-value="all" style="--mc:${'#8A1538'}"><span class="dot dot--hidden"></span>Tất cả</button>`,
  ];
  for (const k of order) {
    const t = typeOf(k);
    chips.push(
      `<button class="chip chip--type" data-value="${k}" style="--mc:${t.color}"><span class="dot"></span>${t.short}</button>`,
    );
  }
  return chips.join('\n');
}

function moduleChips(posts) {
  const seen = [];
  for (const p of posts) {
    const m = p.module || '';
    if (m && !seen.includes(m)) seen.push(m);
  }
  const chips = [
    `<button class="chip chip--module is-active" data-module="all"><span class="dot dot--hidden"></span>Tất cả module</button>`,
  ];
  for (const m of seen) {
    const mc = moduleColor(m);
    const vars = `--mc:${mc};--mc-soft:${hexA(mc, 0.13)};--mc-bord:${hexA(mc, 0.4)};`;
    chips.push(
      `<button class="chip chip--module" data-module="${escapeHtml(m)}" style="${vars}"><span class="dot"></span>${escapeHtml(m)}</button>`,
    );
  }
  return chips.join('\n');
}

/* ───────────────────────── Shell (header + footer) ───────────────────────── */
function brand() {
  return `<a class="brand" href="/">
    <span class="brand-badge"><span>HN</span></span>
    <span class="brand-text">
      <span class="brand-name">HONGNGHI<i>-</i>WHATSNEW</span>
      <span class="brand-sub">Cập nhật phần mềm ERP</span>
    </span>
  </a>`;
}

const NAV = [
  { href: '/', label: 'Trang chủ', key: 'home' },
  { href: '/cap-nhat/', label: 'Cập nhật', key: 'updates' },
  { href: '/huong-dan/', label: 'Hướng dẫn', key: 'guide' },
];

function header(site, variant, active = 'home') {
  if (variant === 'post') {
    return `<header class="site-header">
  <div class="wrap wrap--post header-inner">
    ${brand()}
    <span class="header-spacer"></span>
    <a class="back-link" href="/">${SVG.arrowL}Về trang chủ</a>
  </div>
</header>`;
  }
  const nav = NAV.map(
    (n) => `<a class="nav-link${n.key === active ? ' is-active' : ''}" href="${n.href}">${n.label}</a>`,
  ).join('\n      ');
  return `<header class="site-header">
  <div class="wrap header-inner">
    ${brand()}
    <span class="header-spacer"></span>
    <nav class="topnav">
      ${nav}
    </nav>
    <span class="erp-badge"><span class="dot"></span><b>ERP ${escapeHtml(site.erpVersion || '')}</b></span>
  </div>
</header>`;
}

function footer(site, variant) {
  const wrapCls = variant === 'post' ? 'wrap wrap--post' : 'wrap';
  const year = new Date().getFullYear();
  return `<footer class="site-footer">
  <div class="${wrapCls} footer-inner">
    <div class="footer-brand">
      <span class="footer-badge"><span>HN</span></span>
      <span class="footer-text">© ${year} ${escapeHtml(site.company)} — Phòng Công nghệ thông tin</span>
    </div>
    <div class="footer-right">
      <span class="internal-badge">${SVG.lock}Chỉ lưu hành nội bộ</span>
    </div>
  </div>
</footer>`;
}

function pageShell({ site, title, description, bodyClass = '', content, canonical, variant, active = 'home', bodyEnd = '' }) {
  const fullTitle = title ? `${title} — ${site.title}` : site.title;
  return `<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(fullTitle)}</title>
<meta name="description" content="${escapeHtml(description || site.tagline)}">
<meta name="robots" content="noindex, nofollow">
${canonical ? `<link rel="canonical" href="${escapeHtml(canonical)}">` : ''}
<link rel="icon" type="image/svg+xml" href="/assets/logo-hongnghi.svg?v=pink">
<link rel="apple-touch-icon" href="/assets/logo-hongnghi.svg?v=pink">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/styles.css">
<meta property="og:title" content="${escapeHtml(fullTitle)}">
<meta property="og:type" content="website">
</head>
<body class="${bodyClass}">
<a class="skip" href="#main">Bỏ qua, tới nội dung chính</a>
${header(site, variant, active)}
<main id="main">
${content}
</main>
${footer(site, variant)}
${bodyEnd}
</body>
</html>`;
}

/* ───────────────────────── Trang chủ (Home) ─────────────────────────
   Hiển thị TOÀN BỘ nội dung (cả Cập nhật lẫn Hướng dẫn). Có hai khu "đưa lên trên":
   • "Ghim quan trọng" → banner lớn đầu trang; chỉ MỘT bài (mới nhất nếu lỡ có nhiều).
   • "Ghim" → mục "Các nội dung đang ghim" ngay bên dưới banner.
   Nếu chưa có bài ghim quan trọng nào, banner tự lấy bài mới nhất làm nội dung nổi bật. */
export function renderIndex(site, posts) {
  const byDateDesc = (a, b) => String(b.date).localeCompare(String(a.date));

  // Ghim quan trọng → banner; nếu lỡ có nhiều bài, chỉ lấy bài mới nhất.
  const importantList = posts.filter((p) => p.pinImportant).sort(byDateDesc);
  const important = importantList[0] || null;

  // Banner lớn = bài ghim quan trọng; nếu chưa có thì lấy bài mới nhất làm banner.
  const featuredPost = important || posts[0] || null;

  // Mục "Ghim": các bài đang ghim (thường + ghim-quan-trọng dư thừa), trừ bài ở banner.
  const pinRest = posts
    .filter((p) => p !== featuredPost && (p.pinned || p.pinImportant))
    .sort(byDateDesc);

  // Các bài đã "đưa lên trên" (banner + ghim) sẽ ẩn khỏi lưới khi chưa lọc.
  const promoted = featuredPost ? [featuredPost.slug, ...pinRest.map((p) => p.slug)] : [];

  const featuredBlock = featuredPost
    ? featuredCard(featuredPost, important ? '📌 Ghim quan trọng · Nội dung nổi bật' : undefined)
    : '';

  const ghimZone = featuredPost
    ? `<div id="ghim-zone">
${featuredBlock}
${
  pinRest.length
    ? `<div class="ghim-more-label">${SVG.pin}<span>Các nội dung đang ghim</span></div>
<section class="grid grid--ghim" aria-label="Các bài đang ghim">
${pinRest.map(postCard).join('\n')}
</section>`
    : ''
}
</div>`
    : '';

  const grid = posts.length ? posts.map(postCard).join('\n') : '';

  const content = `<div class="wrap">
<section class="hero">
  <div class="eyebrow"><span class="dot"></span><span>Tổng hợp cập nhật &amp; hướng dẫn</span></div>
  <h1>Có gì mới trên<br>ERP <i>Hồng Nghi</i></h1>
  <p class="lead">${escapeHtml(site.tagline)}</p>
</section>

${ghimZone}

<div class="controls">
  <div class="controls-row">
    <label class="search">
      ${SVG.search}
      <input id="q" type="search" placeholder="Tìm theo tên tính năng, module, phiên bản…" autocomplete="off" aria-label="Tìm kiếm">
    </label>
    <div class="chips" id="type-chips">
${typeChips(posts)}
    </div>
  </div>
  <div class="controls-modules" id="module-chips">
${moduleChips(posts)}
  </div>
</div>

<div class="count-row">
  <div class="count-label" id="count-label">${posts.length} bản tin · sắp xếp theo mới nhất</div>
  <button class="clear-btn" id="clear-btn" hidden>${SVG.close}Xóa bộ lọc</button>
</div>

<section class="grid" id="grid" data-total="${posts.length}" data-promoted="${escapeHtml(promoted.join(','))}" data-noun="bản tin" aria-label="Tất cả thông báo">
${grid || '<p class="empty-state">Chưa có thông báo nào. Hãy quay lại vào tuần sau nhé!</p>'}
</section>

<div class="empty-state" id="empty" hidden>
  <div class="ill">${SVG.search}</div>
  <h2>Không tìm thấy nội dung phù hợp</h2>
  <p>Thử từ khóa khác hoặc xóa bộ lọc hiện tại.</p>
  <button class="btn-solid" id="empty-clear">Xóa bộ lọc</button>
</div>
</div>`;

  const bodyEnd = posts.length
    ? '<script src="/assets/app.js" defer></script>'
    : '';

  return pageShell({
    site,
    title: '',
    description: site.tagline,
    bodyClass: 'page-home',
    variant: 'home',
    active: 'home',
    content,
    canonical: `${site.domain}/`,
    bodyEnd,
  });
}

/* ───────────────────────── Post page ───────────────────────── */
function attachments(post) {
  const rows = [];
  if (post.mediaType === 'pdf' || post.mediaType === 'slide') {
    if (post.pdfFile) {
      rows.push(`<a class="dl-row" href="${escapeHtml(post.pdfFile)}" target="_blank" rel="noopener">
        <span class="dl-ico dl-ico--pdf">${SVG.file}</span>
        <span class="dl-meta"><span class="dl-name">${escapeHtml(fileName(post.pdfFile))}</span><span class="dl-sub">PDF · xem trực tuyến</span></span>
        <span class="arrow">${SVG.download}</span>
      </a>`);
    }
  }
  if (post.originalFile) {
    const isXls = /\.(xlsx?|csv)$/i.test(post.originalFile);
    rows.push(`<a class="dl-row" href="${escapeHtml(post.originalFile)}" download>
      <span class="dl-ico dl-ico--file">${isXls ? SVG.excel : SVG.file}</span>
      <span class="dl-meta"><span class="dl-name">${escapeHtml(post.originalLabel || fileName(post.originalFile))}</span><span class="dl-sub">${escapeHtml(fileExtLabel(post.originalFile))} · tải về</span></span>
      <span class="arrow">${SVG.download}</span>
    </a>`);
  }
  if (!rows.length) return '';
  return `<div class="side-card">
    <div class="side-title">Tài liệu &amp; tệp đính kèm</div>
    <div class="dl-list">${rows.join('\n')}</div>
  </div>`;
}

export function renderPost(site, post, nav = {}) {
  const t = typeOf(post.mediaType);
  const mc = moduleColor(post.module);
  const vars = `--mc:${mc};--mc-soft:${hexA(mc, 0.1)};--mc-line:${hexA(mc, 0.14)};`;
  const block = mediaBlock(post);
  const mins = readingTime(post.bodyHtml);

  const badges = `<div class="badges">
    ${post.module ? `<span class="badge-mod"><span class="dot"></span>${escapeHtml(post.module)}</span>` : ''}
    ${post.version ? `<span class="badge-ver">${escapeHtml(post.version)}</span>` : ''}
    ${post.isNew ? '<span class="badge-new">● MỚI</span>' : ''}
    <span class="badge-type" style="background:${hexA(t.color, 0.1)};color:${t.color};">${t.icon}${t.long}</span>
  </div>`;

  const mediaNote =
    post.mediaType === 'video'
      ? '<p class="media-note">Video hướng dẫn nội bộ — chỉ nhân viên có liên kết mới xem được.</p>'
      : post.mediaType === 'pdf' || post.mediaType === 'slide'
        ? '<p class="media-note">Không xem được tài liệu trên trình duyệt? Dùng nút “Mở PDF toàn màn hình” bên trên.</p>'
        : '';

  const sideInfo = `<div class="side-card">
    <div class="side-title">Thông tin phiên bản</div>
    <div class="info-list">
      <div class="info-row"><span class="k">Phiên bản</span><span class="v">${escapeHtml(post.version || '—')}</span></div>
      <div class="info-row"><span class="k">Module</span><span class="v" style="color:${mc};">${escapeHtml(post.module || '—')}</span></div>
      <div class="info-row"><span class="k">Ngày phát hành</span><span class="v">${formatDateShort(post.date)}</span></div>
      <div class="info-row"><span class="k">Phạm vi</span><span class="v">${escapeHtml(post.scope || 'Toàn hệ thống')}</span></div>
    </div>
  </div>`;

  const support = site.supportUrl
    ? `<div class="support-card">
    <h3>Cần hỗ trợ?</h3>
    <p>Liên hệ Phòng CNTT nếu bạn gặp vướng mắc khi sử dụng tính năng này.</p>
    <a href="${escapeHtml(site.supportUrl)}">Gửi yêu cầu hỗ trợ ${SVG.arrowR}</a>
  </div>`
    : '';

  const pager =
    nav.older || nav.newer
      ? `<nav class="pager">
    ${
      nav.older
        ? `<a class="pager-card prev" href="/bai-viet/${escapeHtml(nav.older.slug)}/"><div class="pager-k">← Bản cập nhật trước</div><div class="pager-t">${escapeHtml(nav.older.title)}</div></a>`
        : '<span></span>'
    }
    ${
      nav.newer
        ? `<a class="pager-card next" href="/bai-viet/${escapeHtml(nav.newer.slug)}/"><div class="pager-k">Bản cập nhật sau →</div><div class="pager-t">${escapeHtml(nav.newer.title)}</div></a>`
        : '<span></span>'
    }
  </nav>`
      : '';

  const crumbTitle = post.title.length > 48 ? `${post.title.slice(0, 48)}…` : post.title;
  const catHref = post.category === 'huong-dan' ? '/huong-dan/' : '/cap-nhat/';
  const catLabel = post.category === 'huong-dan' ? 'Hướng dẫn' : 'Cập nhật';
  const content = `<div class="wrap wrap--post" style="${vars}">
  <nav class="crumb">
    <a class="home" href="/">Trang chủ</a><span>/</span>
    <a class="home" href="${catHref}">${catLabel}</a><span>/</span>
    ${post.module ? `<span class="mod" style="color:${mc};">${escapeHtml(post.module)}</span><span>/</span>` : ''}
    <span class="cur">${escapeHtml(crumbTitle)}</span>
  </nav>

  <header class="post-head">
    ${badges}
    <h1 class="post-title">${escapeHtml(post.title)}</h1>
    ${post.summary ? `<p class="post-summary">${escapeHtml(post.summary)}</p>` : ''}
    <div class="author">
      <div class="author-id">
        <span class="avatar">IT</span>
        <span>
          <span class="author-name">Phòng Công nghệ thông tin</span><br>
          <span class="author-meta">Phát hành ${formatDateVi(post.date)} · đọc ${mins} phút</span>
        </span>
      </div>
    </div>
  </header>

  ${block ? `<div class="post-media">${block}</div>${mediaNote}` : ''}

  <div class="post-grid">
    <article class="prose">
${post.bodyHtml || ''}
    </article>
    <aside class="aside">
      ${attachments(post)}
      ${sideInfo}
      ${support}
    </aside>
  </div>

  ${pager}
</div>`;

  return pageShell({
    site,
    title: post.title,
    description: post.summary,
    bodyClass: 'page-post',
    variant: 'post',
    content,
    canonical: `${site.domain}/bai-viet/${post.slug}/`,
  });
}

/* ───────────────────────── Trang danh sách lọc theo phân loại ─────────────────────────
   Dùng chung cho trang "Cập nhật" và "Hướng dẫn": chỉ khác tập bài + chữ hiển thị. */
function renderListing(site, items, opts) {
  const grid = items.map(postCard).join('\n');
  const content = `<div class="wrap">
<section class="hero">
  <div class="eyebrow"><span class="dot"></span><span>${opts.eyebrow}</span></div>
  <h1>${opts.heading}</h1>
  <p class="lead">${escapeHtml(opts.lead)}</p>
</section>

<div class="controls">
  <div class="controls-row">
    <label class="search">
      ${SVG.search}
      <input id="q" type="search" placeholder="${escapeHtml(opts.searchPlaceholder)}" autocomplete="off" aria-label="Tìm kiếm">
    </label>
    <div class="chips" id="type-chips">
${typeChips(items)}
    </div>
  </div>
  <div class="controls-modules" id="module-chips">
${moduleChips(items)}
  </div>
</div>

<div class="count-row">
  <div class="count-label" id="count-label">${items.length} ${escapeHtml(opts.noun)} · sắp xếp theo mới nhất</div>
  <button class="clear-btn" id="clear-btn" hidden>${SVG.close}Xóa bộ lọc</button>
</div>

<section class="grid" id="grid" data-total="${items.length}" data-promoted="" data-noun="${escapeHtml(opts.noun)}" aria-label="${escapeHtml(opts.ariaLabel)}">
${grid || `<p class="empty-state">${escapeHtml(opts.emptyGrid)}</p>`}
</section>

<div class="empty-state" id="empty" hidden>
  <div class="ill">${SVG.search}</div>
  <h2>${escapeHtml(opts.emptyTitle)}</h2>
  <p>Thử từ khóa khác hoặc xóa bộ lọc hiện tại.</p>
  <button class="btn-solid" id="empty-clear">Xóa bộ lọc</button>
</div>
</div>`;
  const bodyEnd = items.length ? '<script src="/assets/app.js" defer></script>' : '';
  return pageShell({
    site,
    title: opts.title,
    description: opts.description,
    bodyClass: 'page-home',
    variant: 'home',
    active: opts.active,
    content,
    canonical: opts.canonical,
    bodyEnd,
  });
}

/* ───────────────────────── Trang Cập nhật ───────────────────────── */
export function renderUpdates(site, posts) {
  const items = posts.filter((p) => p.category !== 'huong-dan');
  return renderListing(site, items, {
    active: 'updates',
    eyebrow: 'Bản cập nhật &amp; thông báo',
    heading: 'Cập nhật <i>phần mềm</i>',
    lead: 'Các bản cập nhật tính năng và thông báo thay đổi của ERP Hồng Nghi — mới nhất ở trên cùng.',
    searchPlaceholder: 'Tìm cập nhật theo tên, module, phiên bản…',
    noun: 'bản cập nhật',
    ariaLabel: 'Danh sách cập nhật',
    emptyGrid: 'Chưa có bản cập nhật nào.',
    emptyTitle: 'Không tìm thấy bản cập nhật phù hợp',
    title: 'Cập nhật',
    description: 'Các bản cập nhật phần mềm ERP Hồng Nghi.',
    canonical: `${site.domain}/cap-nhat/`,
  });
}

/* ───────────────────────── Trang Hướng dẫn ───────────────────────── */
export function renderGuide(site, posts) {
  const items = posts.filter((p) => p.category === 'huong-dan');
  return renderListing(site, items, {
    active: 'guide',
    eyebrow: 'Hướng dẫn sử dụng phần mềm',
    heading: 'Video &amp; tài liệu <i>hướng dẫn</i>',
    lead: 'Tổng hợp video, tài liệu PDF và slide hướng dẫn sử dụng các tính năng của ERP Hồng Nghi.',
    searchPlaceholder: 'Tìm hướng dẫn theo tên, module…',
    noun: 'hướng dẫn',
    ariaLabel: 'Danh sách hướng dẫn',
    emptyGrid: 'Chưa có hướng dẫn nào.',
    emptyTitle: 'Không tìm thấy hướng dẫn phù hợp',
    title: 'Hướng dẫn',
    description: 'Video và tài liệu hướng dẫn sử dụng ERP Hồng Nghi.',
    canonical: `${site.domain}/huong-dan/`,
  });
}

/* ───────────────────────── 404 ───────────────────────── */
export function render404(site) {
  const content = `<div class="wrap wrap--post">
  <section class="notfound">
    <p class="code">404</p>
    <h1>Không tìm thấy trang</h1>
    <p>Trang bạn tìm không tồn tại hoặc đã được chuyển đi.</p>
    <p><a class="btn-solid" href="/">${SVG.arrowL}Về trang chủ</a></p>
  </section>
</div>`;
  return pageShell({
    site,
    title: 'Không tìm thấy trang',
    description: 'Không tìm thấy trang',
    bodyClass: 'page-404',
    variant: 'post',
    content,
  });
}
// end of templates.mjs — pages: Trang chủ (/), Cập nhật (/cap-nhat/), Hướng dẫn (/huong-dan/)
