// In bảng lượt xem (Abacus) của từng bài theo tháng và lưu bản backup CSV.
// Chạy: node scripts/views.mjs            -> tháng hiện tại
//       node scripts/views.mjs 2026-10    -> tháng 10/2026
// Cần build trước (đọc danh sách bài từ dist/bai-viet/).
// Mỗi lần chạy ghi reports/views-YYYY-MM-DD.csv (ngày chạy; chạy lại trong ngày thì ghi đè).
// Mỗi ngày 1 file riêng -> Abacus có mất dữ liệu thì các bản backup ngày trước vẫn còn.
import { readdir, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE } from '../site.config.mjs';
import { abacusKey, abacusMonthKey } from '../lib/templates.mjs';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const now = new Date();
const pad = (n) => String(n).padStart(2, '0');
const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
const month = process.argv[2] || today.slice(0, 7);
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

// BOM để Excel đọc đúng tiếng Việt. Slug chỉ có chữ, số, gạch nối -> không cần escape CSV.
const csv =
  '﻿' +
  [`Bài viết,Tháng ${month},Tổng,Thời điểm lấy`]
    .concat(rows.map((r) => `${r['Bài viết']},${r[`Tháng ${month}`]},${r['Tổng']},${now.toLocaleString('vi-VN')}`))
    .join('\r\n') +
  '\r\n';
const dir = path.join(ROOT, 'reports');
await mkdir(dir, { recursive: true });
const file = path.join(dir, `views-${today}.csv`);
await writeFile(file, csv);
console.log(`Đã lưu backup: ${path.relative(ROOT, file)}`);
