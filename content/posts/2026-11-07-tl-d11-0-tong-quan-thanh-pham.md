---
title: "TỔNG QUAN THÀNH PHẨM"
date: "2026-11-07"
summary: "Có danh mục gia công, số mặt, tiêu chuẩn, loại hàng và đơn vị tính."
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

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Có danh mục gia công, số mặt, tiêu chuẩn, loại hàng và đơn vị tính. Chuẩn bị bộ quy cách thử không trùng.

## 2. Mở chức năng

**Hàng hoá → Thành phẩm**

## 3. Nhận biết màn hình

![Hình 1: cửa sổ tham chiếu localhost ngày 23/10/2026](/posts/2026-11-07-tl-d11-0-tong-quan-thanh-pham/hinh-01-form-tham-chieu.png)

 Cấu tạo thành phẩm;  Kích thước, đơn vị tính và các giá trị liên quan;  Lưu lại / Đóng. cửa sổ trống, chưa tạo mã hoặc lưu.

- **MÃ THÀNH PHẨM / TÊN THÀNH PHẨM**: Cách sử dụng: Chỉ đọc, sinh từ tổ hợp gia công, số mặt, tiêu chuẩn, quy cách, NCC và loại hàng.
- **GIA CÔNG / SỐ MẶT / TIÊU CHUẨN**: Cách sử dụng: Chọn danh mục đúng cấu tạo; gia công có thể là tập lựa chọn.
- **NCC / LOẠI HÀNG**: Cách sử dụng: NCC là trường mã không khoảng trắng; phân biệt với hồ sơ NCC.
- **DÀY / RỘNG / DÀI**: Cách sử dụng: Kích thước dùng tạo mã và tính M³/TẤM. Nhập bằng **mm** để phù hợp công thức M³/TẤM; không nhập số đo mét vào ba ô này.

## 4. Trình tự công việc

Chuẩn bị dữ liệu → Đối chiếu danh mục → Nhập thông tin riêng → Kiểm tra liên kết → Xác nhận kết quả

### Bước 1 — Chọn cấu tạo thành phẩm

Chọn gia công, số mặt, tiêu chuẩn, NCC và loại hàng; nhập đủ quy cách. Mã/tên được yêu cầu tạo khi đủ các thành phần. Nếu không sinh mã, kiểm lại trường chưa chọn, không gõ đè mã.

### Bước 2: Đối chiếu kích thước và đơn vị

Kiểm tra **M³/TẤM** được tính theo ba kích thước của thành phẩm. Ví dụ kích thước 18 × 1220 × 2440 cho thể tích **0,0535824 m³/tấm**. Đối chiếu kích thước, đơn vị và kết quả tính trước khi lưu.

### Bước 3 — Kiểm tra trước sử dụng

Tìm trùng mã, xác nhận tên in/ĐVT/hệ số và trạng thái. Import xem [HƯỚNG DẪN IMPORT THÀNH PHẨM TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d11-2-huong-dan-import-thanh-pham-tu-excel-anh/); sửa/xóa hàng loạt xem [HƯỚNG DẪN SỬA, XOÁ NHIỀU THÀNH PHẨM CÙNG LÚC](/bai-viet/2026-11-07-tl-d11-3-huong-dan-sua-xoa-nhieu-thanh-pham-cung-luc/).

## 6. Giải thích các thông tin trên màn hình

- **MÃ THÀNH PHẨM / TÊN THÀNH PHẨM**: Cách sử dụng: Chỉ đọc, sinh từ tổ hợp gia công, số mặt, tiêu chuẩn, quy cách, NCC và loại hàng.
- **GIA CÔNG / SỐ MẶT / TIÊU CHUẨN**: Cách sử dụng: Chọn danh mục đúng cấu tạo; gia công có thể là tập lựa chọn.
- **NCC / LOẠI HÀNG**: Cách sử dụng: NCC là trường mã không khoảng trắng; phân biệt với hồ sơ NCC.
- **DÀY / RỘNG / DÀI**: Cách sử dụng: Kích thước dùng tạo mã và tính M³/TẤM. Nhập bằng **mm** để phù hợp công thức M³/TẤM; không nhập số đo mét vào ba ô này.
- **ĐƠN VỊ TÍNH / ĐVT QUY ĐỔI / QUY ĐỔI**: Cách sử dụng: ĐVT chính bắt buộc; khi dùng quy đổi kiểm hệ số lớn hơn 0.
- **TÊN IN / ĐƠN GIÁ / ĐỊNH MỨC TỒN / TRỌNG LƯỢNG**: Cách sử dụng: Thông tin in và thông số bổ sung; không tự coi giá nhập danh mục là giá vốn đã kết chuyển.

## 7. Kiểm tra sau khi thực hiện

Bạn phân biệt được thành phẩm với hàng trơn và đọc đúng cấu tạo mã, quy cách, ĐVT. Khi tạo/sửa theo [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/), chỉ sau **Lưu lại** thành công và mở lại đúng mã mới xác nhận bản ghi đã ghi; kiểm M³/TẤM, ĐVT và định mức trước khi dùng trên phiếu. Import xem [HƯỚNG DẪN IMPORT THÀNH PHẨM TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d11-2-huong-dan-import-thanh-pham-tu-excel-anh/), sửa/xóa nhiều xem [HƯỚNG DẪN SỬA, XOÁ NHIỀU THÀNH PHẨM CÙNG LÚC](/bai-viet/2026-11-07-tl-d11-3-huong-dan-sua-xoa-nhieu-thanh-pham-cung-luc/).

## 8. Những điều cần lưu ý

Thay cấu tạo có thể đổi mã/tên sinh tự động. Kiểm tra chứng từ đang dùng trước khi đổi danh mục. Không dùng Xóa nhiều trên hàng thật để dọn bài thử.

### “Mã đã tồn tại” 

Nguyên nhân: Tổ hợp quy cách tạo ra mã đã có.

Cách xử lý: Tìm thành phẩm tương ứng và dùng lại nếu đúng nghiệp vụ.

### “Quy đổi phải lớn hơn 0” 

Nguyên nhân: Hệ số quy đổi không hợp lệ.

Cách xử lý: Nhập hệ số dương phù hợp cặp đơn vị.

## 10. Công việc tiếp theo

Kiểm tra dữ liệu tại màn liên quan trước khi tiếp tục nghiệp vụ. [TỔNG QUAN MÀN HÌNH HÀNG HÓA KHÁC](/bai-viet/2026-11-07-tl-d07-0-tong-quan-man-hinh-hang-hoa-khac/); [TỔNG QUAN MÀN HÌNH NGUYÊN LIỆU](/bai-viet/2026-11-07-tl-d08-0-tong-quan-man-hinh-nguyen-lieu/); [TỔNG QUAN MÀN HÌNH HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-0-tong-quan-man-hinh-hang-tron/); [TỔNG QUAN MÀN HÌNH ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-0-tong-quan-man-hinh-dinh-muc/); [HƯỚNG DẪN IMPORT THÀNH PHẨM TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d11-2-huong-dan-import-thanh-pham-tu-excel-anh/); [HƯỚNG DẪN SỬA, XOÁ NHIỀU THÀNH PHẨM CÙNG LÚC](/bai-viet/2026-11-07-tl-d11-3-huong-dan-sua-xoa-nhieu-thanh-pham-cung-luc/).

## 11. Bài hướng dẫn liên quan

[TỔNG QUAN MÀN HÌNH HÀNG HÓA KHÁC](/bai-viet/2026-11-07-tl-d07-0-tong-quan-man-hinh-hang-hoa-khac/); [TỔNG QUAN MÀN HÌNH NGUYÊN LIỆU](/bai-viet/2026-11-07-tl-d08-0-tong-quan-man-hinh-nguyen-lieu/); [TỔNG QUAN MÀN HÌNH HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-0-tong-quan-man-hinh-hang-tron/); [TỔNG QUAN MÀN HÌNH ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-0-tong-quan-man-hinh-dinh-muc/); [HƯỚNG DẪN IMPORT THÀNH PHẨM TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d11-2-huong-dan-import-thanh-pham-tu-excel-anh/); [HƯỚNG DẪN SỬA, XOÁ NHIỀU THÀNH PHẨM CÙNG LÚC](/bai-viet/2026-11-07-tl-d11-3-huong-dan-sua-xoa-nhieu-thanh-pham-cung-luc/).
