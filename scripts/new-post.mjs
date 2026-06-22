// Tạo nhanh khung một bài thông báo mới.
//
// Cách 1 (hỏi - đáp):   npm run new-post
// Cách 2 (gõ thẳng):    node scripts/new-post.mjs "Tiêu đề bài viết" pdf "Tóm tắt ngắn"
//                       (loại: video | pdf | slide | none)
import { writeFile, mkdir, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { slugify } from '../lib/util.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function todayISO() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

async function exists(p) {
  try {
    await access(p, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

const TYPES = {
  1: 'video',
  2: 'pdf',
  3: 'slide',
  4: 'none',
  video: 'video',
  pdf: 'pdf',
  slide: 'slide',
  none: 'none',
};

function frontmatter({ title, date, summary, mediaType, slug }) {
  const q = (s) => String(s || '').replace(/"/g, "'");
  const lines = [
    '---',
    `title: "${q(title)}"`,
    `date: ${date}`,
    `summary: "${q(summary)}"`,
    `mediaType: ${mediaType}`,
  ];
  if (mediaType === 'video') lines.push('youtubeId: ""');
  if (mediaType === 'pdf') {
    lines.push(`pdfFile: "/posts/${slug}/huong-dan.pdf"`);
    lines.push('originalFile: ""');
    lines.push('originalLabel: "Tải file gốc"');
  }
  if (mediaType === 'slide') {
    lines.push(`pdfFile: "/posts/${slug}/slide.pdf"`);
    lines.push('originalFile: ""');
    lines.push('originalLabel: "Tải slide (PDF)"');
  }
  lines.push('tags: []', 'pinned: false', 'draft: false', '---', '');
  return lines.join('\n');
}

const BODY = `## Có gì mới?

- Viết nội dung tại đây bằng **Markdown**.
- Dùng dấu \`-\` để liệt kê các ý.
`;

async function createPost({ title, summary, mediaType }) {
  const date = todayISO();
  let slug = `${date}-${slugify(title)}`;
  let mdPath = path.join(ROOT, 'content', 'posts', `${slug}.md`);
  let n = 2;
  while (await exists(mdPath)) {
    slug = `${date}-${slugify(title)}-${n++}`;
    mdPath = path.join(ROOT, 'content', 'posts', `${slug}.md`);
  }
  const assetDir = path.join(ROOT, 'public', 'posts', slug);
  await writeFile(mdPath, frontmatter({ title, date, summary, mediaType, slug }) + BODY, 'utf8');
  await mkdir(assetDir, { recursive: true });
  await writeFile(path.join(assetDir, '.gitkeep'), '');
  return { slug };
}

function printNextSteps(slug, mediaType) {
  console.log('VIỆC TIẾP THEO:');
  if (mediaType === 'video') {
    console.log('  1) Tải video lên YouTube ở chế độ "Không công khai" (Unlisted).');
    console.log('  2) Copy 11 ký tự sau "watch?v=" rồi dán vào youtubeId trong file .md.');
  } else if (mediaType === 'pdf') {
    console.log('  1) Mở file Word → Save As → PDF, đặt tên huong-dan.pdf');
    console.log(`  2) Bỏ huong-dan.pdf vào thư mục: public/posts/${slug}/`);
    console.log('  3) (Tuỳ chọn) bỏ file Word gốc vào đó và điền đường dẫn vào originalFile.');
  } else if (mediaType === 'slide') {
    console.log('  1) Mở PowerPoint → Export → Create PDF, đặt tên slide.pdf');
    console.log(`  2) Bỏ slide.pdf vào thư mục: public/posts/${slug}/`);
  } else {
    console.log('  • Chỉ cần viết nội dung trong file .md.');
  }
  console.log('  • Viết nội dung trong file .md (phần dưới dấu ---).');
  console.log('  • Xem thử:  npm run dev   →  http://localhost:4321');
  console.log('  • Xuất bản: git add . && git commit -m "Bài mới" && git push\n');
}

function parseArgs(argv) {
  if (!argv.length) return null;
  return {
    title: String(argv[0] || '').trim(),
    mediaType: TYPES[String(argv[1] || 'none').toLowerCase()] || 'none',
    summary: String(argv[2] || '').trim(),
  };
}

async function ask() {
  const rl = createInterface({ input, output });
  try {
    console.log('\n=== Tạo bài thông báo mới ===\n');
    const title = (await rl.question('Tiêu đề: ')).trim();
    if (!title) return null;
    const summary = (await rl.question('Tóm tắt ngắn (Enter để bỏ qua): ')).trim();
    console.log('\nLoại nội dung:');
    console.log('  1) video  — nhúng video YouTube');
    console.log('  2) pdf    — tài liệu Word/PDF (xem trực tiếp)');
    console.log('  3) slide  — PowerPoint xuất ra PDF');
    console.log('  4) none   — chỉ có chữ, không đính kèm\n');
    const choice = (await rl.question('Chọn 1-4 (mặc định 4): ')).trim() || '4';
    return { title, summary, mediaType: TYPES[choice.toLowerCase()] || 'none' };
  } finally {
    rl.close();
  }
}

async function main() {
  const answers = parseArgs(process.argv.slice(2)) || (await ask());
  if (!answers || !answers.title) {
    console.log('✗ Chưa nhập tiêu đề. Dừng lại.');
    process.exitCode = 1;
    return;
  }
  const { slug } = await createPost(answers);
  console.log(`\n✓ Đã tạo bài viết: content/posts/${slug}.md`);
  console.log(`✓ Thư mục đính kèm: public/posts/${slug}/\n`);
  printNextSteps(slug, answers.mediaType);
}

main().catch((err) => {
  console.error(`✗ Lỗi: ${err.message}`);
  process.exitCode = 1;
});
