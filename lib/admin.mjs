// Trang QUẢN TRỊ chạy CỤC BỘ — chỉ dùng trên máy người vận hành.
// Cho phép Thêm / Sửa / Xoá bài viết bằng nút bấm, kèm tải lên PDF/slide/file gốc.
// Thao tác trực tiếp lên file Markdown trong content/posts/ và file đính kèm trong
// public/posts/, rồi build lại dist/. Chỉ dùng thư viện có sẵn của Node.
//
// ⚠️ Trang này KHÔNG được đưa lên web thật: nó chỉ tồn tại trong serve.mjs (chạy local),
//    không có file nào trong dist/, nên `git push` / deploy sẽ không bao giờ chứa nó.
import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { slugify } from './util.mjs';
import { parseFrontmatter } from './frontmatter.mjs';
import { buildSite } from '../build.mjs';
import { SITE } from '../site.config.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT_DIR = path.join(ROOT, 'content', 'posts');
const PUBLIC_POSTS_DIR = path.join(ROOT, 'public', 'posts');
// Ảnh chèn trong "Nội dung chi tiết" được lưu chung ở đây (thư mục public/ luôn được
// commit & deploy nên ảnh sẽ lên trang thật, giống các tệp đính kèm khác).
const PUBLIC_UPLOADS_DIR = path.join(ROOT, 'public', 'uploads');
const UI_FILE = path.join(ROOT, 'lib', 'admin-ui.html');
const CONFIG_FILE = path.join(ROOT, 'site.config.mjs');
// Phiên bản ERP: chỉ cho phép chữ, số và vài ký tự an toàn (tránh làm hỏng file .mjs).
const ERP_VERSION_RE = /^[A-Za-z0-9 ._+\-()/]{1,40}$/;

const VALID_TYPES = ['video', 'pdf', 'slide', 'none'];
// Phân loại trang hiển thị: bắt buộc chọn 1 trong 2 khi lưu bài.
const VALID_CATEGORIES = ['cap-nhat', 'huong-dan'];
const MAX_BODY = 80 * 1024 * 1024; // 80 MB — đủ chỗ cho PDF nhúng dạng base64
// Định dạng ảnh cho phép chèn vào nội dung (mime -> đuôi file).
const IMAGE_EXT = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/gif': 'gif',
  'image/webp': 'webp',
  'image/svg+xml': 'svg',
  'image/avif': 'avif',
  'image/bmp': 'bmp',
};
const MAX_IMAGE = 15 * 1024 * 1024; // 15 MB mỗi ảnh

// ───────────────────────── helpers ─────────────────────────

function sendJson(res, code, obj) {
  res.writeHead(code, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(JSON.stringify(obj));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (c) => {
      size += c.length;
      if (size > MAX_BODY) {
        reject(new Error('Dữ liệu gửi lên quá lớn (vượt 80 MB). Hãy dùng file PDF nhỏ hơn.'));
        req.destroy();
        return;
      }
      chunks.push(c);
    });
    req.on('end', () => {
      if (!chunks.length) return resolve({});
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')));
      } catch {
        reject(new Error('Dữ liệu JSON gửi lên không hợp lệ.'));
      }
    });
    req.on('error', reject);
  });
}

// Tên file .md chỉ gồm chữ/số/.-_  (chặn path traversal).
const isSafeMdName = (f) => /^[A-Za-z0-9._-]+\.md$/.test(f) && !f.includes('..');

// Đặt tên file đính kèm an toàn: không dấu, không khoảng trắng, giữ đuôi mở rộng.
function safeAssetName(name, fallback) {
  const raw = String(name || fallback || 'file');
  const ext = (path.extname(raw) || path.extname(fallback || '') || '')
    .toLowerCase()
    .replace(/[^.a-z0-9]/g, '');
  const base = slugify(path.basename(raw, path.extname(raw))) || 'file';
  return base + ext;
}

// Bọc chuỗi cho frontmatter — parser tối giản không hiểu dấu " escape, nên đổi " -> '.
const q = (s) => `"${String(s ?? '').replace(/"/g, "'")}"`;

function serialize(p) {
  const lines = [
    '---',
    `title: ${q(p.title)}`,
    `date: ${p.date}`,
    `summary: ${q(p.summary)}`,
    `module: ${q(p.module || 'Thông báo chung')}`,
    `category: ${p.category}`,
    `version: ${q(p.version || '')}`,
    `isNew: ${p.isNew ? 'true' : 'false'}`,
    `scope: ${q(p.scope || 'Toàn hệ thống')}`,
    `mediaType: ${p.mediaType}`,
  ];
  if (p.mediaType === 'video') lines.push(`youtubeId: ${q(p.youtubeId)}`);
  if (p.mediaType === 'pdf' || p.mediaType === 'slide') {
    lines.push(`pdfFile: ${q(p.pdfFile)}`);
    lines.push(`originalFile: ${q(p.originalFile || '')}`);
    lines.push(
      `originalLabel: ${q(
        p.originalLabel || (p.mediaType === 'slide' ? 'Tải slide (PDF)' : 'Tải tài liệu PDF'),
      )}`,
    );
  }
  const tags = Array.isArray(p.tags) ? p.tags.filter((t) => String(t).trim()) : [];
  lines.push(`tags: [${tags.map((t) => q(t)).join(', ')}]`);
  // "Ghim quan trọng" = lên banner đầu trang (chỉ 1 bài). "Ghim" = vào mục Ghim.
  lines.push(`pinImportant: ${p.pinImportant ? 'true' : 'false'}`);
  lines.push(`pinned: ${p.pinned ? 'true' : 'false'}`);
  lines.push(`draft: ${p.draft ? 'true' : 'false'}`);
  lines.push('---');
  return lines.join('\n');
}

function checkBasics(p) {
  if (!p.title || !String(p.title).trim()) throw new Error('Vui lòng nhập tiêu đề.');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(p.date || ''))) {
    throw new Error('Ngày đăng phải có dạng YYYY-MM-DD.');
  }
  if (!VALID_TYPES.includes(p.mediaType)) throw new Error('Loại nội dung không hợp lệ.');
  if (!VALID_CATEGORIES.includes(p.category)) {
    throw new Error('Vui lòng chọn phân loại trang: Cập nhật hoặc Hướng dẫn.');
  }
  if (p.mediaType === 'video' && !String(p.youtubeId || '').trim()) {
    throw new Error('Bài dạng Video cần có mã YouTube (11 ký tự sau "watch?v=").');
  }
}

// ───────────────────────── đọc dữ liệu ─────────────────────────

async function listPosts() {
  if (!existsSync(CONTENT_DIR)) return [];
  const files = (await readdir(CONTENT_DIR)).filter((f) => f.endsWith('.md') && !f.startsWith('_'));
  const posts = [];
  for (const file of files) {
    const { data } = parseFrontmatter(await readFile(path.join(CONTENT_DIR, file), 'utf8'));
    posts.push({
      file,
      slug: file.replace(/\.md$/, ''),
      title: data.title || '(không tiêu đề)',
      date: data.date || '',
      summary: data.summary || '',
      module: data.module || 'Thông báo chung',
      category: VALID_CATEGORIES.includes(data.category) ? data.category : '',
      version: data.version || '',
      isNew: data.isNew === true,
      scope: data.scope || '',
      mediaType: VALID_TYPES.includes(data.mediaType) ? data.mediaType : 'none',
      tags: Array.isArray(data.tags) ? data.tags : [],
      pinImportant: data.pinImportant === true,
      pinned: data.pinned === true,
      draft: data.draft === true,
    });
  }
  // Ưu tiên: ghim quan trọng > ghim thường > còn lại; trong cùng nhóm thì mới nhất trước.
  const pinRank = (p) => (p.pinImportant ? 2 : 0) + (p.pinned ? 1 : 0);
  posts.sort(
    (a, b) => pinRank(b) - pinRank(a) || String(b.date).localeCompare(String(a.date)),
  );
  return posts;
}

async function getPost(file) {
  if (!isSafeMdName(file)) throw new Error('Tên bài viết không hợp lệ.');
  const full = path.join(CONTENT_DIR, file);
  if (!existsSync(full)) throw new Error('Không tìm thấy bài viết.');
  const { data, body } = parseFrontmatter(await readFile(full, 'utf8'));
  return {
    file,
    slug: file.replace(/\.md$/, ''),
    title: data.title || '',
    date: data.date || '',
    summary: data.summary || '',
    module: data.module || 'Thông báo chung',
    category: VALID_CATEGORIES.includes(data.category) ? data.category : '',
    version: data.version || '',
    isNew: data.isNew === true,
    scope: data.scope || '',
    mediaType: VALID_TYPES.includes(data.mediaType) ? data.mediaType : 'none',
    youtubeId: data.youtubeId || '',
    pdfFile: data.pdfFile || '',
    originalFile: data.originalFile || '',
    originalLabel: data.originalLabel || '',
    tags: Array.isArray(data.tags) ? data.tags : [],
    pinImportant: data.pinImportant === true,
    pinned: data.pinned === true,
    draft: data.draft === true,
    body: String(body || '').replace(/^\n+/, '').replace(/\s+$/, ''),
  };
}

// Chuyển frontmatter data -> đối tượng post đầy đủ cho serialize() (dùng khi hạ cờ ghim).
function fmDataToPost(data) {
  return {
    title: data.title || '',
    date: data.date || '',
    summary: data.summary || '',
    module: data.module || 'Thông báo chung',
    category: VALID_CATEGORIES.includes(data.category) ? data.category : 'cap-nhat',
    version: data.version || '',
    isNew: data.isNew === true,
    scope: data.scope || 'Toàn hệ thống',
    mediaType: VALID_TYPES.includes(data.mediaType) ? data.mediaType : 'none',
    youtubeId: data.youtubeId || '',
    pdfFile: data.pdfFile || '',
    originalFile: data.originalFile || '',
    originalLabel: data.originalLabel || '',
    tags: Array.isArray(data.tags) ? data.tags : [],
    pinImportant: data.pinImportant === true,
    pinned: data.pinned === true,
    draft: data.draft === true,
  };
}

// Đảm bảo CHỈ MỘT bài "ghim quan trọng": khi lưu một bài ghim quan trọng mới,
// mọi bài ghim quan trọng cũ (trừ exceptFile) bị hạ cờ về "ghim thường".
async function demoteOtherImportantPins(exceptFile) {
  if (!existsSync(CONTENT_DIR)) return [];
  const files = (await readdir(CONTENT_DIR)).filter((f) => f.endsWith('.md') && !f.startsWith('_'));
  const demoted = [];
  for (const file of files) {
    if (file === exceptFile) continue;
    const full = path.join(CONTENT_DIR, file);
    const { data, body } = parseFrontmatter(await readFile(full, 'utf8'));
    if (data.pinImportant !== true) continue;
    const post = fmDataToPost(data);
    post.pinImportant = false; // hạ "ghim quan trọng" -> "ghim thường"
    post.pinned = true; // vẫn giữ bài trong mục "Ghim" của trang chủ
    const fm = serialize(post);
    const b =
      String(body || '').replace(/^\n+/, '').replace(/\s+$/, '') ||
      '## Có gì mới?\n\n- Nội dung tại đây.';
    await writeFile(full, `${fm}\n\n${b}\n`, 'utf8');
    demoted.push(file);
  }
  return demoted;
}

// ───────────────────────── ghi dữ liệu ─────────────────────────

function uniqueSlug(base) {
  let slug = base || 'bai-viet';
  let n = 2;
  while (existsSync(path.join(CONTENT_DIR, `${slug}.md`))) slug = `${base}-${n++}`;
  return slug;
}

// Lưu 1 file tải lên (gửi dưới dạng data URL base64) vào public/posts/<slug>/.
async function saveUpload(slug, upload, fallbackName) {
  const m = /^data:[^;]*;base64,(.*)$/s.exec((upload && upload.dataUrl) || '');
  if (!m) throw new Error('File tải lên không hợp lệ.');
  const buf = Buffer.from(m[1], 'base64');
  const dir = path.join(PUBLIC_POSTS_DIR, slug);
  await mkdir(dir, { recursive: true });
  const name = safeAssetName(upload.name, fallbackName);
  await writeFile(path.join(dir, name), buf);
  return `/posts/${slug}/${name}`;
}

// Lưu 1 ảnh chèn trong nội dung (gửi dưới dạng data URL base64) vào public/uploads/.
// Trả về đường dẫn công khai để chèn vào Markdown, vd: /uploads/so-do-quy-trinh.png
async function saveBodyImage({ dataUrl, name } = {}) {
  const m = /^data:(image\/[a-z0-9.+-]+);base64,(.*)$/is.exec(String(dataUrl || ''));
  if (!m) throw new Error('Ảnh tải lên không hợp lệ (chỉ nhận tệp ảnh).');
  const ext = IMAGE_EXT[m[1].toLowerCase()];
  if (!ext) {
    throw new Error('Định dạng ảnh không hỗ trợ. Hãy dùng PNG, JPG, GIF, WEBP hoặc SVG.');
  }
  const buf = Buffer.from(m[2], 'base64');
  if (!buf.length) throw new Error('Ảnh tải lên bị rỗng.');
  if (buf.length > MAX_IMAGE) {
    throw new Error('Ảnh quá lớn (vượt 15 MB). Hãy giảm dung lượng rồi chèn lại.');
  }
  await mkdir(PUBLIC_UPLOADS_DIR, { recursive: true });
  // Tên file an toàn, không dấu, không trùng: <ten-anh>.<ext>, thêm -2, -3… nếu trùng.
  const base = slugify(path.basename(String(name || 'anh'), path.extname(String(name || '')))) || 'anh';
  let fileName = `${base}.${ext}`;
  let n = 2;
  while (existsSync(path.join(PUBLIC_UPLOADS_DIR, fileName))) fileName = `${base}-${n++}.${ext}`;
  await writeFile(path.join(PUBLIC_UPLOADS_DIR, fileName), buf);
  return `/uploads/${fileName}`;
}

// Xử lý upload (nếu có) và trả về đường dẫn pdfFile / originalFile cuối cùng.
async function resolveFiles(slug, p) {
  let pdfFile = String(p.pdfFile || '');
  let originalFile = String(p.originalFile || '');
  if (p.mediaType === 'pdf' || p.mediaType === 'slide') {
    if (p.pdfUpload && p.pdfUpload.dataUrl) {
      pdfFile = await saveUpload(slug, p.pdfUpload, p.mediaType === 'slide' ? 'slide.pdf' : 'huong-dan.pdf');
    }
    if (p.originalUpload && p.originalUpload.dataUrl) {
      originalFile = await saveUpload(slug, p.originalUpload, 'goc');
    }
  } else {
    // Không phải pdf/slide thì không cần file đính kèm.
    pdfFile = '';
    originalFile = '';
  }
  return { pdfFile, originalFile };
}

async function writePost(slug, p) {
  if (p.mediaType === 'pdf' || p.mediaType === 'slide') {
    if (!String(p.pdfFile || '').trim()) {
      throw new Error(`Bài dạng ${p.mediaType.toUpperCase()} cần một file PDF — hãy tải lên.`);
    }
  }
  const fm = serialize(p);
  const body = p.body && String(p.body).trim() ? String(p.body).trim() : '## Có gì mới?\n\n- Nội dung tại đây.';
  await writeFile(path.join(CONTENT_DIR, `${slug}.md`), `${fm}\n\n${body}\n`, 'utf8');
  await mkdir(path.join(PUBLIC_POSTS_DIR, slug), { recursive: true });
}

async function createPost(p) {
  checkBasics(p);
  const slug = uniqueSlug(`${p.date}-${slugify(p.title)}`);
  const files = await resolveFiles(slug, p);
  await writePost(slug, { ...p, ...files });
  // Bài mới là "ghim quan trọng" -> hạ cờ các bài ghim quan trọng cũ về ghim thường.
  const demoted = p.pinImportant ? await demoteOtherImportantPins(`${slug}.md`) : [];
  return { slug, demoted };
}

async function updatePost(file, p) {
  if (!isSafeMdName(file)) throw new Error('Tên bài viết không hợp lệ.');
  if (!existsSync(path.join(CONTENT_DIR, file))) throw new Error('Không tìm thấy bài viết để sửa.');
  checkBasics(p);
  const slug = file.replace(/\.md$/, ''); // giữ nguyên slug để không hỏng đường dẫn file đính kèm
  const files = await resolveFiles(slug, p);
  await writePost(slug, { ...p, ...files });
  // Bài này là "ghim quan trọng" -> hạ cờ các bài ghim quan trọng cũ về ghim thường.
  const demoted = p.pinImportant ? await demoteOtherImportantPins(file) : [];
  return { slug, demoted };
}

async function deletePost(file, deleteAssets) {
  if (!isSafeMdName(file)) throw new Error('Tên bài viết không hợp lệ.');
  const full = path.join(CONTENT_DIR, file);
  if (!existsSync(full)) throw new Error('Không tìm thấy bài viết để xoá.');
  await rm(full, { force: true });
  if (deleteAssets) {
    const slug = file.replace(/\.md$/, '');
    await rm(path.join(PUBLIC_POSTS_DIR, slug), { recursive: true, force: true });
  }
}

async function rebuild() {
  try {
    const posts = await buildSite();
    return { ok: true, count: posts.length };
  } catch (e) {
    return { ok: false, error: e.message || String(e) };
  }
}

// ───────────────────────── cấu hình trang (site.config.mjs) ─────────────────────────

function siteInfo() {
  return {
    erpVersion: SITE.erpVersion || '',
    title: SITE.title || '',
    company: SITE.company || '',
  };
}

// Đổi số phiên bản ERP (nút góc phải đầu trang). Ghi vào site.config.mjs để lưu lâu dài,
// đồng thời cập nhật đối tượng SITE đang nằm trong bộ nhớ để lần build kế tiếp dùng ngay
// — nhờ vậy KHÔNG cần khởi động lại server sau mỗi lần đổi phiên bản.
async function updateErpVersion(v) {
  const val = String(v ?? '').trim();
  if (!val) throw new Error('Vui lòng nhập số phiên bản ERP.');
  if (!ERP_VERSION_RE.test(val)) {
    throw new Error('Phiên bản chỉ gồm chữ, số và các ký tự . _ - + ( ) / (tối đa 40 ký tự).');
  }
  const src = await readFile(CONFIG_FILE, 'utf8');
  const re = /(erpVersion\s*:\s*)(['"])[^'"\n]*\2/;
  if (!re.test(src)) {
    throw new Error('Không tìm thấy dòng "erpVersion" trong site.config.mjs.');
  }
  await writeFile(CONFIG_FILE, src.replace(re, `$1'${val}'`), 'utf8');
  SITE.erpVersion = val; // cập nhật bản trong RAM để build dùng ngay
  return val;
}

// ───────────────────────── router ─────────────────────────

let UI_CACHE = null;
async function adminHtml() {
  if (UI_CACHE == null) UI_CACHE = await readFile(UI_FILE, 'utf8');
  return UI_CACHE;
}

/**
 * Xử lý các request quản trị. Trả về true nếu đã xử lý (đã ghi response),
 * false nếu không phải route admin (để serve.mjs phục vụ file tĩnh như cũ).
 */
export async function handleAdmin(req, res) {
  const url = new URL(req.url || '/', 'http://localhost');
  const p = url.pathname;
  const isAdminPage = p === '/admin' || p === '/admin/';
  if (!isAdminPage && !p.startsWith('/api/')) return false;

  try {
    if (isAdminPage) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
      res.end(await adminHtml());
      return true;
    }

    if (p === '/api/posts' && req.method === 'GET') {
      sendJson(res, 200, { ok: true, posts: await listPosts() });
      return true;
    }
    if (p === '/api/post' && req.method === 'GET') {
      sendJson(res, 200, { ok: true, post: await getPost(url.searchParams.get('file') || '') });
      return true;
    }
    if (p === '/api/posts' && req.method === 'POST') {
      const { slug, demoted } = await createPost(await readBody(req));
      sendJson(res, 200, { ok: true, slug, demoted, build: await rebuild() });
      return true;
    }
    if (p === '/api/post' && req.method === 'PUT') {
      const { slug, demoted } = await updatePost(url.searchParams.get('file') || '', await readBody(req));
      sendJson(res, 200, { ok: true, slug, demoted, build: await rebuild() });
      return true;
    }
    if (p === '/api/post' && req.method === 'DELETE') {
      await deletePost(url.searchParams.get('file') || '', url.searchParams.get('assets') === '1');
      sendJson(res, 200, { ok: true, build: await rebuild() });
      return true;
    }

    // Tải 1 ảnh để chèn vào "Nội dung chi tiết" (không build lại — chỉ lưu file).
    if (p === '/api/upload-image' && req.method === 'POST') {
      const imgUrl = await saveBodyImage(await readBody(req));
      sendJson(res, 200, { ok: true, url: imgUrl });
      return true;
    }

    if (p === '/api/site' && req.method === 'GET') {
      sendJson(res, 200, { ok: true, site: siteInfo() });
      return true;
    }
    if (p === '/api/site' && req.method === 'PUT') {
      await updateErpVersion((await readBody(req)).erpVersion);
      sendJson(res, 200, { ok: true, site: siteInfo(), build: await rebuild() });
      return true;
    }

    sendJson(res, 404, { ok: false, error: 'Không tìm thấy API.' });
    return true;
  } catch (e) {
    sendJson(res, 400, { ok: false, error: e.message || String(e) });
    return true;
  }
}
