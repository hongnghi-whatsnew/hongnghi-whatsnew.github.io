---
title: "TỔNG QUAN MÀN HÌNH NHÓM NHÀ CUNG CẤP"
date: "2026-11-07"
summary: "Nhóm nhà cung cấp là danh mục để phân loại nhà cung cấp (ví dụ theo ngành hàng)."
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

**Nhóm nhà cung cấp** là danh mục để phân loại nhà cung cấp (ví dụ theo ngành hàng). Mỗi nhà cung cấp **bắt buộc thuộc một nhóm**. Nhóm được dùng ở:

- **Nhà cung cấp** (TL-B02): ô **NHÓM NCC** bắt buộc chọn khi thêm / sửa; **Sửa nhiều** và **Import** nhà cung cấp cũng đặt nhóm.
- **Báo cáo** (sổ tay Mua hàng, Kế toán): bộ lọc theo nhóm nhà cung cấp ở thống kê công nợ nhà cung cấp, mua hàng nhập kho, biến động giá nhập.

Bạn dùng màn hình này khi cần thêm nhóm mới, đổi tên nhóm hoặc ngưng dùng nhóm không còn cần.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Nhóm nhà cung cấp**.
- Không cần danh mục nào khác có trước.

## 2. Mở chức năng

**Nhà cung cấp → Nhóm nhà cung cấp**

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

![Hình 1: Danh sách nhóm nhà cung cấp theo bố cục và bộ lọc hiện tại](/posts/2026-11-07-tl-b01-0-tong-quan-man-hinh-nhom-nha-cung-cap/hinh-01-man-hinh-nhom-ncc.png)

- **Tải lại**: Chức năng: Tải lại danh sách
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM NHÓM NCC**
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá một dòng

- **Mã nhóm nhà cung cấp**: Ý nghĩa: Mã nhóm do người dùng đặt
- **Tên nhóm nhà cung cấp**: Ý nghĩa: Tên hiển thị khi chọn nhóm
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Danh sách hiện cả nhóm **Kích hoạt** lẫn **Ngưng sử dụng**, không lọc theo chi nhánh.

## 4. Trình tự công việc

```text
Nhóm nhà cung cấp (TL-B01)
   ├──► Nhà cung cấp (TL-B02): ô NHÓM NCC (bắt buộc), Sửa nhiều, Import
   └──► Báo cáo mua hàng, công nợ nhà cung cấp: lọc theo nhóm
         ô chọn nhóm chỉ liệt kê nhóm đang Kích hoạt
```

### Khai báo một nhóm

**Bước 1 –** Nhập **MÃ NHÓM**: viết liền (không có dấu cách), không trùng mã nhóm đã có. Mã **không tự sinh**, bạn tự đặt.

**Bước 2 –** Nhập **TÊN NHÓM**. **GHI CHÚ** tuỳ chọn.

**Bước 3 –** Giữ tick **Kích hoạt** ở chân cửa sổ, rồi **Lưu lại**. Hệ thống kiểm tra trùng mã lúc bạn rời ô mã và khi lưu.

![Hình 2: cửa sổ thêm nhóm nhà cung cấp chưa nhập và chưa lưu](/posts/2026-11-07-tl-b01-0-tong-quan-man-hinh-nhom-nha-cung-cap/hinh-02-form-them-nhom-ncc.png)

- **MÃ NHÓM**: Ý nghĩa: Bắt buộc, không trùng
- **TÊN NHÓM**: Ý nghĩa: Bắt buộc
- **GHI CHÚ**: Ý nghĩa: Tuỳ chọn
- **Kích hoạt**: Ý nghĩa: Bỏ tick = **Ngưng sử dụng**

### Sửa, ngưng sử dụng, xoá

- **Sửa** được cả **MÃ NHÓM** (vẫn phải không trùng). Nhà cung cấp đã gắn nhóm tự hiện mã và tên mới vì chỉ lưu liên kết tới nhóm.
- **Ngưng sử dụng** (bỏ tick **Kích hoạt**): nhóm không còn hiện trong ô **NHÓM NCC** khi thêm nhà cung cấp mới. Nhà cung cấp đang thuộc nhóm vẫn giữ nhóm.
- **Xóa**: chỉ được khi **chưa nhà cung cấp nào** thuộc nhóm (kể cả nhà cung cấp đang Ngưng sử dụng).

## 6. Giải thích các thông tin trên màn hình

- **Mã nhóm**: Ý nghĩa: Mã nhận diện nhóm; Bắt buộc: Có; Lưu ý: Không có dấu cách, **không trùng** (không phân biệt chữ hoa / thường, kể cả nhóm đang Ngưng sử dụng). Không giới hạn độ dài tối thiểu
- **Tên nhóm**: Ý nghĩa: Tên hiển thị; Bắt buộc: Có
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

## 7. Kiểm tra sau khi thực hiện

- Nhóm mới (Kích hoạt) chọn được ở ô **NHÓM NCC**, **Sửa nhiều** và bộ lọc báo cáo.
- Nhóm **Ngưng sử dụng** biến khỏi ô chọn khi thêm nhà cung cấp mới.

## 8. Những điều cần lưu ý

⚠️ **Nhóm đã có nhà cung cấp thì không xoá được.** Hệ thống từ chối. Muốn bỏ nhóm: chuyển các nhà cung cấp sang nhóm khác bằng **Sửa nhiều** ([HƯỚNG DẪN SỬA, XOÁ NHIỀU NHÀ CUNG CẤP CÙNG LÚC](/bai-viet/2026-11-07-tl-b02-3-huong-dan-sua-xoa-nhieu-nha-cung-cap-cung-luc/)), rồi xoá hoặc ngưng sử dụng nhóm.

⚠️ Danh mục dùng chung cho các chi nhánh trong cùng cơ sở dữ liệu ERP.

### "Mã nhóm nhà cung cấp đã tồn tại" 

Nguyên nhân: đã có nhóm cùng mã, kể cả nhóm đang **Ngưng sử dụng**.
Cách xử lý: đặt mã khác, hoặc tìm nhóm cũ rồi tick lại **Kích hoạt**.

### "Mã không hợp lệ. Viết liền không dấu và không chứa kí tự đặc biệt." 

Nguyên nhân: mã có dấu cách.
Cách xử lý: viết liền, ví dụ `NHOM01`.

### "Lỗi xóa.: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: đã có nhà cung cấp thuộc nhóm.
Cách xử lý: chuyển nhà cung cấp sang nhóm khác hoặc bỏ tick **Kích hoạt** thay vì xoá.

## 10. Câu hỏi thường gặp

**Một nhà cung cấp thuộc được hai nhóm không?**
Không. Mỗi nhà cung cấp chỉ chọn một nhóm.

## 11. Công việc tiếp theo

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-b02-0-tong-quan-man-hinh-nha-cung-cap/) – Tổng quan màn hình Nhà cung cấp.

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-b02-0-tong-quan-man-hinh-nha-cung-cap/) – Tổng quan màn hình Nhà cung cấp
- [HƯỚNG DẪN SỬA, XOÁ NHIỀU NHÀ CUNG CẤP CÙNG LÚC](/bai-viet/2026-11-07-tl-b02-3-huong-dan-sua-xoa-nhieu-nha-cung-cap-cung-luc/) – Sửa, xoá nhiều nhà cung cấp (đổi nhóm hàng loạt)
- Sổ tay Mua hàng – Thống kê mua hàng nhập kho
