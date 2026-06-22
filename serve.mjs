// Server xem thử cục bộ — chạy bằng: node serve.mjs   (hoặc: npm run dev)
// Thêm --watch để tự build lại khi bạn sửa nội dung.
// Chỉ dùng thư viện có sẵn của Node.
import http from 'node:http';
import { watch } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildSite } from './build.mjs';
import { handleAdmin } from './lib/admin.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(ROOT, 'dist');
const PORT = Number(process.env.PORT) || 4321;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
};

async function resolveFile(rawUrl) {
  const p = decodeURIComponent(rawUrl.split('?')[0].split('#')[0]);
  if (p.includes('..')) return null; // simple path-traversal guard
  let filePath = path.join(DIST_DIR, p);
  try {
    const s = await stat(filePath);
    if (s.isDirectory()) filePath = path.join(filePath, 'index.html');
  } catch {
    if (!path.extname(filePath)) filePath = path.join(filePath, 'index.html');
  }
  return filePath;
}

const server = http.createServer(async (req, res) => {
  // Trang quản trị chạy cục bộ (/admin và /api/*) — xử lý trước file tĩnh.
  try {
    if (await handleAdmin(req, res)) return;
  } catch (e) {
    res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ ok: false, error: e.message }));
    return;
  }

  const filePath = await resolveFile(req.url || '/');
  if (!filePath) {
    res.writeHead(400);
    res.end('Bad request');
    return;
  }
  try {
    const data = await readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    });
    res.end(data);
  } catch {
    let body = 'Không tìm thấy (404)';
    try {
      body = await readFile(path.join(DIST_DIR, '404.html'));
    } catch {
      /* ignore */
    }
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(body);
  }
});

async function safeBuild() {
  try {
    await buildSite();
  } catch (e) {
    console.error(`✗ Lỗi build: ${e.message}`);
  }
}

await safeBuild();

if (process.argv.includes('--watch')) {
  let timer = null;
  const trigger = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log('↻ Phát hiện thay đổi — build lại...');
      safeBuild();
    }, 150);
  };
  // Theo dõi nguồn (KHÔNG theo dõi dist/ để tránh build lặp vô hạn).
  for (const rel of ['content', 'lib', 'public']) {
    try {
      watch(path.join(ROOT, rel), { recursive: true }, trigger);
    } catch {
      /* ignore */
    }
  }
  try {
    watch(path.join(ROOT, 'site.config.mjs'), trigger);
  } catch {
    /* ignore */
  }
}

server.listen(PORT, () => {
  console.log(`\n  ▸ Dev server:  http://localhost:${PORT}`);
  console.log(`  ▸ Quản trị:    http://localhost:${PORT}/admin   (thêm/sửa/xoá bài viết)`);
  console.log('  ▸ Nhấn Ctrl+C để dừng.\n');
});
