---
title: "HƯỚNG DẪN LẬP BẢNG GIÁ SẢN XUẤT THUÊ NGOÀI"
date: "2026-11-07"
summary: "Bảng giá Thuê ngoài ghi đơn giá công mà đơn vị gia công bên ngoài tính cho công ty, theo từng kiểu gia công, tiêu chuẩn hàng và số mặt."
module: "Thiết lập danh mục"
category: "huong-dan"
version: "v5.0.0"
isNew: true
scope: "Người dùng được cấp quyền chức năng"
department: ""
mediaType: "none"
tags: []
pinImportant: false
pinned: false
draft: true
---

## Chức năng này dùng để làm gì?

Bảng giá **Thuê ngoài** ghi đơn giá công mà đơn vị gia công bên ngoài tính cho công ty, theo từng **kiểu gia công**, **tiêu chuẩn** hàng và **số mặt**. Khi lưu phiếu nhập kho gia công của đơn vị đó, hệ thống tự điền đơn giá cho dòng thành phẩm còn trống.

Bài này hướng dẫn thêm mới, sửa, sao chép bảng giá và cách hệ thống chọn dòng giá. Đây là bài chức năng vì bảng giá có bảng con (các dòng giá) và quyết định đơn giá của phiếu nhập kho gia công.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”, đã đọc [TỔNG QUAN MÀN HÌNH BẢNG GIÁ SẢN XUẤT](/bai-viet/2026-11-07-tl-e01-0-tong-quan-man-hinh-bang-gia-san-xuat/).
- Đơn vị gia công đã có trong danh mục (TL-A03) và thuộc chi nhánh đang truy cập.
- Các kiểu gia công (TL-D01), tiêu chuẩn (TL-D03), số mặt (TL-D06) cần dùng đã có.

## 2. Mở chức năng

**Bảng giá / báo giá → Bảng giá sản xuất → Thêm mới → Thuê ngoài**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Hình 1: THÊM MỚI - BẢNG GIÁ SẢN XUẤT | NGOÀI — dòng mặc định trống, chưa lưu.](/posts/2026-11-07-tl-e01-1-huong-dan-lap-bang-gia-san-xuat-thue-ngoai/ui-20261026-tl-e01-thue-ngoai-figure-01.png)

- **NGÀY ÁP DỤNG**: Ý nghĩa: Ngày bảng giá bắt đầu có hiệu lực
- **ĐƠN VỊ GIA CÔNG**: Ý nghĩa: Đơn vị gia công mà bảng giá áp dụng
- **MÃ BẢNG GIÁ**: Ý nghĩa: Ô chỉ đọc, hiện **MÃ TẠO TỰ ĐỘNG**
- **GHI CHÚ**: Ý nghĩa: Ghi chú tuỳ chọn
- **Bảng dòng giá**: Ý nghĩa: Mỗi dòng: **Tiêu chuẩn**, **Y/c gia công**, **Số mặt**, **Đơn giá**, **Ghi chú**
- **Thêm một hàng, Lưu lại, Đóng**: Ý nghĩa: Thêm dòng giá, lưu, đóng không lưu

## 4. Trình tự công việc

```text
Thêm mới ▸ Thuê ngoài → chọn Ngày áp dụng + Đơn vị gia công
      ↓
Nhập các dòng giá (điều kiện + đơn giá) → Lưu lại
      ↓
Lưu phiếu nhập kho gia công của đơn vị đó → đơn giá tự điền
```

```text
Cách hệ thống ra đơn giá một dòng thành phẩm (thuê ngoài):
Dòng yêu cầu gia công có nhiều định mức
   ├── Định mức 1 → tìm dòng giá khớp → giá 1
   ├── Định mức 2 → tìm dòng giá khớp → giá 2
   └── Đơn giá dòng thành phẩm = giá 1 + giá 2 (chỉ cộng định mức có giá)
```

### Lập bảng giá

**Bước 1 –** Chọn **NGÀY ÁP DỤNG** (mặc định hôm nay) và **ĐƠN VỊ GIA CÔNG**. **GHI CHÚ** tuỳ chọn.

**Bước 2 –** Nhập các dòng giá. Với mỗi dòng, bấm vào ô để sửa:

- **Tiêu chuẩn**, **Y/c gia công**, **Số mặt**: chọn từ danh sách (gõ để tìm). **Để trống ô nào nghĩa là dòng giá áp dụng cho mọi giá trị ở ô đó.**
- **Đơn giá**: nhập số.
- **Ghi chú**: tuỳ chọn.

Bấm **Thêm một hàng** để thêm dòng; biểu tượng xoá ở cuối dòng để bỏ dòng.

**Bước 3 –** Bấm **Lưu lại**. Dòng giá trống hoàn toàn bị bỏ (xem phần “Những điều cần lưu ý”).

- **Tiêu chuẩn**: Ý nghĩa: Điều kiện theo tiêu chuẩn hàng (ví dụ MDF E2). Trống = mọi tiêu chuẩn
- **Y/c gia công**: Ý nghĩa: Kiểu gia công (ví dụ MEL 803). Trống = mọi kiểu gia công
- **Số mặt**: Ý nghĩa: Số mặt gia công. Trống = mọi số mặt
- **Đơn giá**: Ý nghĩa: Đơn giá của dòng giá

### Sửa

cửa sổ **CẬP NHẬT - BẢNG GIÁ SẢN XUẤT | NGOÀI** cho đổi cả đơn vị gia công, ngày áp dụng và các dòng giá. Đổi giá từ một ngày mới nên dùng **Sao chép** (bên dưới) thay vì sửa bảng giá cũ.

### Sao chép

Liên kết **Sao chép** ở cột **Thao tác** mở cửa sổ **SAO CHÉP - BẢNG GIÁ SẢN XUẤT | NGOÀI**, nạp sẵn đơn vị gia công, ngày áp dụng, ghi chú và toàn bộ dòng giá của bảng giá nguồn; mã bảng giá được cấp mới khi lưu. **Đổi NGÀY ÁP DỤNG** (và đơn giá nếu cần) rồi bấm **Lưu lại**.

### Cách hệ thống chọn dòng giá

1. Hệ thống chọn bảng giá: cùng chi nhánh, cùng đơn vị gia công, **ngày áp dụng** mới nhất không sau ngày phiếu.
2. Với từng định mức của dòng yêu cầu gia công, hệ thống tìm các dòng giá **khớp** (kiểu gia công của định mức, tiêu chuẩn của hàng, số mặt của dòng nhập; ô điều kiện trống thì bỏ qua).
3. Trong các dòng khớp, chọn dòng **cụ thể nhất** (có nhiều ô điều kiện được điền nhất). Bằng nhau thì chọn dòng nhập trước.
4. Cộng giá của các định mức để ra đơn giá dòng thành phẩm.

**Ví dụ:** bảng giá có hai dòng: (**Y/c gia công** MEL 803, các ô khác trống, **Đơn giá** 5.000) và (MEL 803, **Số mặt** 2, **Đơn giá** 7.000). Dòng nhập có hai mặt thì lấy 7.000 (khớp 2 điều kiện); dòng nhập một mặt lấy 5.000.

## 6. Giải thích các thông tin trên màn hình

- **Ngày áp dụng**: Ý nghĩa: Ngày bắt đầu hiệu lực; Bắt buộc: Có; Lưu ý: Hệ thống báo **Chọn ngày áp dụng** nếu để trống
- **Đơn vị gia công**: Ý nghĩa: Đơn vị gia công áp dụng; Bắt buộc: Có; Lưu ý: Chỉ liệt kê đơn vị gia công của chi nhánh đang truy cập; báo **Vui lòng chọn đơn vị gia công** nếu để trống
- **Mã bảng giá**: Ý nghĩa: Mã tự cấp; Lưu ý: **BC** + 8 chữ số, cấp khi lưu lần đầu
- **Ghi chú**: Ý nghĩa: Ghi chú chung; Bắt buộc: Không
- **Tiêu chuẩn**: Ý nghĩa: Điều kiện theo tiêu chuẩn; Bắt buộc: Không; Lưu ý: Trống = mọi tiêu chuẩn
- **Y/c gia công**: Ý nghĩa: Kiểu gia công; Bắt buộc: Không; Lưu ý: Lấy từ **Danh mục gia công**; trống = mọi kiểu
- **Số mặt**: Ý nghĩa: Số mặt gia công; Bắt buộc: Không; Lưu ý: Trống = mọi số mặt
- **Đơn giá**: Ý nghĩa: Đơn giá công; Bắt buộc: Không; Lưu ý: Hiển thị theo định dạng số có dấu phân cách
- **Ghi chú (dòng)**: Ý nghĩa: Ghi chú dòng giá; Bắt buộc: Không

## 7. Kiểm tra sau khi thực hiện

- Bảng giá mới hiện ở danh sách **Bảng giá sản xuất** với **Loại bảng giá** là **Thuê ngoài**.
- Từ lần lưu phiếu nhập kho gia công tiếp theo của đơn vị gia công này (ngày phiếu không trước ngày áp dụng), đơn giá tự điền cho dòng thành phẩm còn trống hoặc 0.
- Phiếu đã lưu trước đó không tự đổi; muốn đổi dùng **Tính lại đơn giá (thuê ngoài)** ở màn thống kê chi tiết nhập kho gia công.

## 8. Những điều cần lưu ý

⚠️ **Dòng trống hoàn toàn bị bỏ khi lưu**: dòng không chọn tiêu chuẩn, kiểu gia công, số mặt và có đơn giá 0 sẽ không được lưu (tránh tạo dòng giá "mọi trường hợp = 0" do thêm nhầm).

⚠️ Dòng có **đơn giá nhưng để trống cả ba điều kiện** là dòng "giá chung": nó khớp mọi dòng nhập và dùng khi không có dòng nào cụ thể hơn.

⚠️ Dòng thành phẩm chỉ ra giá khi **ít nhất một định mức** có dòng giá khớp. Không khớp định mức nào thì đơn giá để trống.

⚠️ Khi **Sao chép**, ngày áp dụng giữ nguyên ngày của bảng giá nguồn. Quên đổi ngày thì bảng giá mới và cũ cùng ngày; hệ thống chọn bảng giá **tạo sau**.

⚠️ Hệ thống không chặn hai dòng giá trùng điều kiện. Dòng nhập trước được chọn.

### "Chọn ngày áp dụng" 

Nguyên nhân: để trống **NGÀY ÁP DỤNG**.
Cách xử lý: chọn ngày rồi **Lưu lại**.

### "Vui lòng chọn đơn vị gia công" 

Nguyên nhân: chưa chọn **ĐƠN VỊ GIA CÔNG**.
Cách xử lý: chọn đơn vị gia công. Không thấy đơn vị cần chọn: kiểm tra đơn vị gia công đã tạo cho **chi nhánh đang truy cập** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/), TL-A03).

## 10. Câu hỏi thường gặp

**Đổi giá từ ngày mai thì làm thế nào?**
Bấm **Sao chép** bảng giá hiện hành, đổi **NGÀY ÁP DỤNG** thành ngày mai, sửa đơn giá, **Lưu lại**.

**Một đơn vị gia công có thể có nhiều bảng giá không?**
Có. Hệ thống dùng bảng giá có ngày áp dụng mới nhất không sau ngày phiếu; các bảng giá cũ giữ lại cho phiếu cũ.

**Tại sao một dòng thành phẩm có giá lớn hơn dòng giá nào trong bảng?**
Vì hệ thống **cộng** giá của từng định mức trong dòng yêu cầu gia công.

## 11. Công việc tiếp theo

**Tiếp theo:** lập phiếu nhập kho gia công (sổ tay Sản xuất) để kiểm tra đơn giá tự điền.

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH BẢNG GIÁ SẢN XUẤT](/bai-viet/2026-11-07-tl-e01-0-tong-quan-man-hinh-bang-gia-san-xuat/) – Tổng quan màn hình Bảng giá sản xuất
- [HƯỚNG DẪN LẬP BẢNG GIÁ SẢN XUẤT TẠI KHO](/bai-viet/2026-11-07-tl-e01-2-huong-dan-lap-bang-gia-san-xuat-tai-kho/) – Lập bảng giá sản xuất tại kho
- TL-A03 – Đơn vị gia công; TL-D01 – Danh mục gia công; TL-D10 – Định mức
- Sổ tay Sản xuất – Phiếu nhập kho gia công; Thống kê chi tiết nhập kho gia công
