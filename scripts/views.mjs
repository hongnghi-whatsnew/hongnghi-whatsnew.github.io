// In bảng lượt xem (Abacus) của từng bài theo tháng.
// Chạy: node scripts/views.mjs            -> tháng hiện tại
//       node scripts/views.mjs 2026-10    -> tháng 10/2026
// Cần build trước (đọc danh sách bài từ dist/bai-viet/).
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE } from '../site.config.mjs';
import { abacusKey, abacusMonthKey } from '../lib/templates.mjs';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const now = new Date();
const month = process.argv[2] || `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
if (!/^\d{4}-\d{2}$/.test(month)) {
  console.error('Tháng phải có dạng YYYY-MM, vd 2026-10');
  process.exit(1);
}
if (!SITE.abacus) {
  console.error("site.config.mjs chưa đặt 'abacus'.");
  process.exit(1);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const get = async (key) => {
  for (let i = 0; i < 5; i++) {
    const r = await fetch(`https://abacus.jasoncameron.dev/get/${SITE.abacus}/${key}`);
    if (r.status === 429) { await sleep(10000); continue; } // bị giới hạn tốc độ -> chờ rồi thử lại
    if (r.status === 404) return 0; // chưa có lượt xem nào
    if (!r.ok) throw new Error(`Abacus lỗi ${r.status} với key ${key}`);
    return (await r.json()).value;
  }
  throw new Error(`Abacus vẫn giới hạn tốc độ với key ${key}, thử lại sau.`);
};

const slugs = (await readdir(path.join(ROOT, 'dist', 'bai-viet'))).sort();
const rows = [];
for (const slug of slugs) {
  rows.push({
    'Bài viết': slug,
    [`Tháng ${month}`]: await get(abacusMonthKey(slug, month.replace('-', ''))),
    'Tổng': await get(abacusKey(slug)),
  });
  await sleep(800); // Abacus giới hạn 30 lượt gọi / 10 giây
}
console.table(rows);
