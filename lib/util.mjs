// Small shared helpers — no external dependencies.

/** Escape text for safe HTML output. */
export function escapeHtml(input) {
  return String(input).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[c]);
}

/**
 * Turn a Vietnamese title into an ASCII, URL-safe slug.
 * "Cập nhật Báo cáo Công nợ" -> "cap-nhat-bao-cao-cong-no"
 */
export function slugify(input) {
  return String(input)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // strip diacritic marks
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

/** Parse 'YYYY-MM-DD' at local noon so timezone never shifts the day. */
export function parseLocalDate(value) {
  if (value instanceof Date) return value;
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(value));
  if (!m) return new Date(value);
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0);
}

const VI_LONG = new Intl.DateTimeFormat('vi-VN', {
  weekday: 'long',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});
const VI_SHORT = new Intl.DateTimeFormat('vi-VN', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

/** "Chủ Nhật, 31/05/2026" */
export function formatDateVi(value) {
  return VI_LONG.format(parseLocalDate(value));
}

/** "31/05/2026" */
export function formatDateShort(value) {
  return VI_SHORT.format(parseLocalDate(value));
}

/** "2026-05-31" for <time datetime> and sitemaps. */
export function isoDate(value) {
  const d = parseLocalDate(value);
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** Ước lượng thời gian đọc (phút) từ HTML nội dung. ~200 từ/phút. */
export function readingTime(html) {
  const text = String(html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const words = text ? text.split(' ').length : 0;
  return Math.max(1, Math.round(words / 200));
}

/** Bài mới nếu phát hành trong vòng `days` ngày gần đây. */
export function isRecent(value, days = 21) {
  const ms = Date.now() - parseLocalDate(value).getTime();
  return ms <= days * 86400000;
}
