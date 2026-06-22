// Tạo file PDF mẫu hợp lệ cho các bài ví dụ (chỉ để demo).
// Chạy: node scripts/_make-sample-pdf.mjs
// Bạn có thể xoá file này sau khi đã có tài liệu thật.
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function makePdf(lines) {
  const esc = (s) => s.replace(/[\\()]/g, (c) => '\\' + c);
  let content = 'BT /F1 20 Tf 60 760 Td 28 TL\n';
  lines.forEach((ln, idx) => {
    if (idx === 1) content += '/F1 13 Tf\n';
    content += `(${esc(ln)}) Tj T*\n`;
  });
  content += 'ET';

  const objs = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>',
    `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream`,
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  ];

  let pdf = '%PDF-1.4\n';
  const offsets = [];
  objs.forEach((body, i) => {
    offsets[i] = Buffer.byteLength(pdf);
    pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
  });
  const xref = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n`;
  offsets.forEach((off) => {
    pdf += `${String(off).padStart(10, '0')} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return Buffer.from(pdf, 'latin1');
}

const targets = [
  {
    file: 'public/posts/2026-05-31-cap-nhat-bao-cao-cong-no/huong-dan.pdf',
    lines: [
      'PM ERP - Tai lieu mau',
      'Cap nhat bao cao cong no khach hang',
      '',
      '(Day la file PDF mau. Hay thay bang tai lieu that',
      'khi dang bai - xuat tu Word/PowerPoint sang PDF.)',
    ],
  },
  {
    file: 'public/posts/2026-05-17-gioi-thieu-dashboard-moi/slide.pdf',
    lines: [
      'PM ERP - Slide mau',
      'Gioi thieu man hinh Dashboard moi',
      '',
      '(Day la file mau. Hay thay bang slide that',
      'khi dang bai - xuat tu PowerPoint sang PDF.)',
    ],
  },
];

for (const t of targets) {
  const abs = path.join(ROOT, t.file);
  await mkdir(path.dirname(abs), { recursive: true });
  await writeFile(abs, makePdf(t.lines));
  console.log('✓ tạo', t.file);
}
