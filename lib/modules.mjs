// Bảng màu & tiện ích cho "Module ERP" — dùng chung cho cả trang công khai
// (templates.mjs) lẫn trang quản trị (admin-ui.html). Không phụ thuộc thư viện ngoài.

// Màu cố định cho các module quen thuộc. Module không có trong bảng sẽ được
// gán màu theo thuật toán băm (deterministic) từ PALETTE bên dưới.
export const MODULE_COLORS = {
  'Thông báo chung': '#8A1538',
  'Kho hàng': '#0F8B7E',
  'Sản xuất': '#C07A1E',
  'Bán hàng': '#D81B60',
  'Mua hàng': '#4F46E5',
  'Nhân sự': '#7C3AED',
  'Kế toán': '#0891B2',
  'Báo cáo': '#0E7CC4',
  'Hệ thống': '#5B6470',
};

// Danh sách module gợi ý trong ô chọn ở trang quản trị (thứ tự hiển thị).
export const MODULE_LIST = Object.keys(MODULE_COLORS);

const PALETTE = [
  '#0F8B7E', '#C07A1E', '#D81B60', '#0E7CC4', '#4F46E5',
  '#7C3AED', '#0891B2', '#B45309', '#0D9488', '#9333EA',
];

const BRAND = '#8A1538';

/** Màu đại diện cho một module. Không có module -> màu thương hiệu. */
export function moduleColor(name) {
  const key = String(name || '').trim();
  if (!key) return BRAND;
  if (MODULE_COLORS[key]) return MODULE_COLORS[key];
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return PALETTE[h % PALETTE.length];
}

/** Chuyển "#RRGGBB" + alpha -> chuỗi rgba(). Dùng cho nền nhạt theo màu module. */
export function hexA(hex, a) {
  const n = parseInt(String(hex).replace('#', ''), 16);
  if (Number.isNaN(n)) return `rgba(138,21,56,${a})`;
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}
