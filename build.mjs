// Bộ tạo trang tĩnh — chạy bằng: node build.mjs
// Đọc content/posts/*.md -> kiểm tra -> render HTML -> ghi ra dist/
// Chỉ dùng thư viện có sẵn của Node, KHÔNG cần npm install.
import { readdir, readFile, writeFile, mkdir, rm, cp } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { SITE } from './site.config.mjs';
import { parseFrontmatter } from './lib/frontmatter.mjs';
import { renderMarkdown } from './lib/markdown.mjs';
import {
  renderIndex,
  renderPost,
  render404,
  renderGuide,
  renderUpdates,
} from './lib/templates.mjs';
import { escapeHtml, parseLocalDate, isRecent } from './lib/util.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(ROOT, 'content', 'posts');
const PUBLIC_DIR = path.join(ROOT, 'public');
const DIST_DIR = path.join(ROOT, 'dist');

const VALID_TYPES = ['video', 'pdf', 'slide', 'none'];

function checkFile(field, value, errors, where) {
  if (!value) return;
  const onDisk = path.join(PUBLIC_DIR, value.replace(/^\//, ''));
  if (!existsSync(onDisk)) {
    errors.push(`${where}: ${field} trỏ tới file không tồn tại: ${value}`);
  }
}

function validate(post) {
  const where = `Bài "${post.file}"`;
  if (!post.title) throw new Error(`${where}: thiếu trường 'title' (tiêu đề).`);
  if (!post.date || !/^\d{4}-\d{2}-\d{2}/.test(String(post.date))) {
    throw new Error(`${where}: thiếu hoặc sai 'date' (cần dạng YYYY-MM-DD).`);
  }
  if (!VALID_TYPES.includes(post.mediaType)) {
    throw new Error(`${where}: 'mediaType' phải là một trong: ${VALID_TYPES.join(' | ')}.`);
  }
  if (post.mediaType === 'video') {
    if (!post.youtubeId) throw new Error(`${where}: mediaType=video cần có 'youtubeId'.`);
    if (!/^[A-Za-z0-9_-]{11}$/.test(post.youtubeId)) {
      throw new Error(`${where}: youtubeId phải đúng 11 ký tự (đang là: ${post.youtubeId}).`);
    }
  }
  if (post.mediaType === 'pdf' || post.mediaType === 'slide') {
    if (!post.pdfFile) throw new Error(`${where}: mediaType=${post.mediaType} cần có 'pdfFile'.`);
    const errors = [];
    if (!/\.pdf$/i.test(post.pdfFile)) {
      errors.push(`${where}: pdfFile phải là file .pdf (đang là: ${post.pdfFile}).`);
    }
    checkFile('pdfFile', post.pdfFile, errors, where);
    if (post.originalFile) checkFile('originalFile', post.originalFile, errors, where);
    if (errors.length) throw new Error(errors.join('\n'));
  }
}

async function readPosts() {
  if (!existsSync(CONTENT_DIR)) return [];
  const files = (await readdir(CONTENT_DIR)).filter(
    (f) => f.endsWith('.md') && !f.startsWith('_'),
  );
  const posts = [];
  for (const file of files) {
    const raw = await readFile(path.join(CONTENT_DIR, file), 'utf8');
    const { data, body } = parseFrontmatter(raw);
    const slug = (data.slug || file.replace(/\.md$/, '')).trim();
    const isNew =
      typeof data.isNew === 'boolean' ? data.isNew : isRecent(data.date, 21);
    const post = { ...data, slug, file, isNew, bodyHtml: renderMarkdown(body) };
    // Phân loại trang: "huong-dan" hoặc "cap-nhat" (mặc định cap-nhat nếu thiếu).
    post.category = post.category === 'huong-dan' ? 'huong-dan' : 'cap-nhat';
    validate(post);
    if (post.draft === true) {
      console.log(`  • bỏ qua bản nháp: ${file}`);
      continue;
    }
    posts.push(post);
  }
  // Ưu tiên: ghim quan trọng > ghim thường > còn lại; trong cùng nhóm thì mới nhất trước.
  const pinRank = (p) => (p.pinImportant ? 2 : 0) + (p.pinned ? 1 : 0);
  posts.sort(
    (a, b) =>
      pinRank(b) - pinRank(a) ||
      parseLocalDate(b.date) - parseLocalDate(a.date),
  );
  return posts;
}

function sitemap(posts) {
  const urls = [
    `${SITE.domain}/`,
    `${SITE.domain}/cap-nhat/`,
    `${SITE.domain}/huong-dan/`,
    ...posts.map((p) => `${SITE.domain}/bai-viet/${p.slug}/`),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${escapeHtml(u)}</loc></url>`).join('\n')}
</urlset>
`;
}

function rss(posts) {
  const items = posts
    .slice(0, 30)
    .map(
      (p) => `    <item>
      <title>${escapeHtml(p.title)}</title>
      <link>${SITE.domain}/bai-viet/${escapeHtml(p.slug)}/</link>
      <guid isPermaLink="true">${SITE.domain}/bai-viet/${escapeHtml(p.slug)}/</guid>
      <pubDate>${parseLocalDate(p.date).toUTCString()}</pubDate>
      <description>${escapeHtml(p.summary || '')}</description>
    </item>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeHtml(SITE.title)}</title>
    <link>${SITE.domain}/</link>
    <description>${escapeHtml(SITE.tagline)}</description>
    <language>vi</language>
${items}
  </channel>
</rss>
`;
}

export async function buildSite() {
  const started = Date.now();
  await rm(DIST_DIR, { recursive: true, force: true });
  await mkdir(DIST_DIR, { recursive: true });
  if (existsSync(PUBLIC_DIR)) {
    await cp(PUBLIC_DIR, DIST_DIR, { recursive: true });
  }

  const posts = await readPosts();

  await writeFile(path.join(DIST_DIR, 'index.html'), renderIndex(SITE, posts), 'utf8');

  // Điều hướng "trước / sau" theo trình tự thời gian (không tính ghim).
  const chrono = [...posts].sort((a, b) => parseLocalDate(b.date) - parseLocalDate(a.date));
  const chronoIdx = new Map(chrono.map((p, i) => [p.slug, i]));
  for (const post of posts) {
    const i = chronoIdx.get(post.slug);
    const nav = { newer: chrono[i - 1] || null, older: chrono[i + 1] || null };
    const dir = path.join(DIST_DIR, 'bai-viet', post.slug);
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, 'index.html'), renderPost(SITE, post, nav), 'utf8');
  }
  const updatesDir = path.join(DIST_DIR, 'cap-nhat');
  await mkdir(updatesDir, { recursive: true });
  await writeFile(path.join(updatesDir, 'index.html'), renderUpdates(SITE, posts), 'utf8');

  const guideDir = path.join(DIST_DIR, 'huong-dan');
  await mkdir(guideDir, { recursive: true });
  await writeFile(path.join(guideDir, 'index.html'), renderGuide(SITE, posts), 'utf8');

  await writeFile(path.join(DIST_DIR, '404.html'), render404(SITE), 'utf8');
  await writeFile(path.join(DIST_DIR, 'sitemap.xml'), sitemap(posts), 'utf8');
  await writeFile(path.join(DIST_DIR, 'rss.xml'), rss(posts), 'utf8');

  console.log(`✓ Đã build ${posts.length} bài viết trong ${Date.now() - started}ms → dist/`);
  return posts;
}

const isMain = import.meta.url === pathToFileURL(process.argv[1] || '').href;
if (isMain) {
  buildSite().catch((err) => {
    console.error(`\n✗ Build lỗi: ${err.message}\n`);
    process.exit(1);
  });
}
// build entrypoint (routes: / , /cap-nhat/ , /huong-dan/) — sắp xếp: ghim quan trọng > ghim > mới nhất
