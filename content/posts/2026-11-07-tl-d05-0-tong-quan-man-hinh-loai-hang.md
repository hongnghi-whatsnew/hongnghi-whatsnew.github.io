---
title: "TỔNG QUAN MÀN HÌNH LOẠI HÀNG"
date: "2026-11-07"
summary: "Loại hàng là danh mục các loại hoặc phẩm cấp mà công ty phân biệt trên cùng một quy cách ván, ví dụ A, U, S, CC, XẤU, BỂ, CẮT, GỬI HÀNG, MƯỢN."
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

**Loại hàng** là danh mục các loại hoặc phẩm cấp mà công ty phân biệt trên cùng một quy cách ván, ví dụ *A*, *U*, *S*, *CC*, *XẤU*, *BỂ*, *CẮT*, *GỬI HÀNG*, *MƯỢN*. Mỗi dòng gồm **mã** và **tên**.

Danh mục này được dùng ở **Hàng trơn** (TL-D09) và **Thành phẩm** (TL-D11), ô **LOẠI HÀNG** (không bắt buộc). Khi chọn loại hàng, **mã loại hàng** được nối vào **cuối mã hàng** và **tên loại hàng** nối vào **cuối tên hàng**. Ví dụ hàng trơn `MDFE2(17x1220x2440)NKGUIHANG` có tên *MDF E2 (17x1220x2440) NK GỬI HÀNG*: cùng quy cách, khác loại hàng thì thành hai mã khác nhau.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Loại hàng**.
- Không cần danh mục nào khác có trước.

## 2. Mở chức năng

**Hàng hoá → Loại hàng**

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

![Hình 1: Danh sách loại hàng theo bố cục và bộ lọc hiện tại](/posts/2026-11-07-tl-d05-0-tong-quan-man-hinh-loai-hang/hinh-01-man-hinh-loai-hang.png)

- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM DANH MỤC LOẠI HÀNG**; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá một dòng; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Xóa** (hiện theo quyền)
- **Mã loại hàng**: Ý nghĩa: Mã nối vào cuối mã hàng (ví dụ `GUIHANG`)
- **Tên loại hàng**: Ý nghĩa: Tên nối vào cuối tên hàng (ví dụ *GỬI HÀNG*)
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n**. Danh sách hiện cả dòng **Ngưng sử dụng**. Nhấp đúp vào một dòng mở cửa sổ chỉ xem **THÔNG TIN LOẠI HÀNG**.

![Hình 2: cửa sổ thêm loại hàng chưa nhập và chưa lưu](/posts/2026-11-07-tl-d05-0-tong-quan-man-hinh-loai-hang/hinh-02-form-them-loai-hang.png)

- **MÃ LOẠI HÀNG**: Ý nghĩa: Bắt buộc, viết liền, không trùng
- **TÊN LOẠI HÀNG**: Ý nghĩa: Bắt buộc
- **GHI CHÚ**: Ý nghĩa: Tuỳ chọn
- **Kích hoạt**: Ý nghĩa: Bỏ tick = **Ngưng sử dụng**

## 4. Trình tự công việc

```text
Loại hàng (TL-D05)
      ├──► Hàng trơn (TL-D09): ô LOẠI HÀNG → đuôi mã + đuôi tên
      └──► Thành phẩm (TL-D11): ô LOẠI HÀNG → đuôi mã + đuôi tên

Ví dụ:  MDFE2(17x1220x2440)NK  +  GUIHANG
     →  MDFE2(17x1220x2440)NKGUIHANG
```

### Khai báo một loại hàng

**Bước 1 –** Nhập **MÃ LOẠI HÀNG**: viết liền, không khoảng trắng, ví dụ `GUIHANG`. Mã nằm ở cuối mã hàng nên dùng chữ ngắn, dễ đọc.

**Bước 2 –** Nhập **TÊN LOẠI HÀNG**, ví dụ *GỬI HÀNG*. Tên nằm ở cuối tên hàng trên chứng từ.

**Bước 3 –** Bấm **Lưu lại**. Hệ thống kiểm tra mã chưa có (không phân biệt chữ hoa, chữ thường).

### Sửa, ngưng dùng, xoá

- **Sửa mã / tên**: các hàng đã tạo **không tự đổi** mã và tên (xem phần “Những điều cần lưu ý”).
- **Ngưng sử dụng**: bỏ tick **Kích hoạt**. Loại hàng không còn hiện trong ô chọn khi lập hàng hoá mới; hàng cũ giữ nguyên.
- **Xóa**: chỉ khi chưa có hàng hoá nào dùng loại hàng.

## 6. Giải thích các thông tin trên màn hình

- **Mã loại hàng**: Ý nghĩa: Đuôi mã hàng; Bắt buộc: Có; Lưu ý: Không khoảng trắng, không trùng (không phân biệt hoa / thường)
- **Tên loại hàng**: Ý nghĩa: Đuôi tên hàng; Bắt buộc: Có
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

## 7. Kiểm tra sau khi thực hiện

Loại hàng mới chọn được ở ô **LOẠI HÀNG** của cửa sổ hàng trơn, thành phẩm; mã, tên hàng tạo từ đó có đuôi loại hàng.

## 8. Những điều cần lưu ý

⚠️ **Đổi mã hoặc tên loại hàng không làm đổi mã, tên hàng đã lưu.** Hàng cũ giữ chữ cũ; hàng tạo sau mang chữ mới.

⚠️ Loại hàng đã có hàng hoá dùng thì **không xoá được**. Muốn ngưng dùng thì bỏ tick **Kích hoạt**.

⚠️ Màn hình Loại hàng chỉ **cho phép gọi dữ liệu khi tài khoản có quyền Truy cập**. Người lập hàng trơn, thành phẩm nên được cấp thêm quyền **Truy cập** Loại hàng để ô **LOẠI HÀNG** chọn được.

⚠️ Hộp xác nhận xoá hỏi **Bạn có muốn xóa hàng hóa này?** là câu chung của các màn Hàng hoá; thực tế là xoá loại hàng đang chọn.

### "Mã loại hàng đã tồn tại" 

Nguyên nhân: đã có loại hàng cùng mã (kể cả khác chữ hoa / thường).
Cách xử lý: đặt mã khác, hoặc tìm và dùng lại dòng đã có.

### "Mã không hợp lệ. Viết liền không dấu và không chứa kí tự đặc biệt." 

Nguyên nhân: mã có khoảng trắng.
Cách xử lý: viết liền, ví dụ `GUIHANG` thay cho `GUI HANG`.

### "Lỗi xóa.: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: đã có hàng hoá dùng loại hàng này.
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá.

## 10. Câu hỏi thường gặp

**Hàng không có loại hàng thì mã hàng thế nào?**
Mã, tên hàng không có đuôi, chỉ gồm tiêu chuẩn, quy cách và NCC. Ô **LOẠI HÀNG** không bắt buộc.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN THÊM, SỬA HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-1-huong-dan-them-sua-hang-tron/) – Hướng dẫn thêm, sửa hàng trơn (chọn loại hàng để sinh mã, tên hàng).

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-0-tong-quan-man-hinh-hang-tron/) – Tổng quan màn hình Hàng trơn
- [TỔNG QUAN THÀNH PHẨM](/bai-viet/2026-11-07-tl-d11-0-tong-quan-thanh-pham/) – Tổng quan màn hình Thành phẩm
- [TỔNG QUAN MÀN HÌNH TIÊU CHUẨN](/bai-viet/2026-11-07-tl-d03-0-tong-quan-man-hinh-tieu-chuan/) – Tổng quan màn hình Tiêu chuẩn
