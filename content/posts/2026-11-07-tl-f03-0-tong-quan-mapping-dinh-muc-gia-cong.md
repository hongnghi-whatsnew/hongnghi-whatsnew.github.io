---
title: "TỔNG QUAN MAPPING ĐỊNH MỨC GIA CÔNG"
date: "2026-11-07"
summary: "Đối tác và định mức nội bộ đã có; người phụ trách hai bên xác nhận cặp chuyển đổi."
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

Đối tác và định mức nội bộ đã có; người phụ trách hai bên xác nhận cặp chuyển đổi.

## 2. Mở chức năng

**Kết nối gia công API → Mapping định mức gia công**

## 3. Nhận biết màn hình

![Hình 1: cửa sổ tham chiếu localhost ngày 23/10/2026](/posts/2026-11-07-tl-f03-0-tong-quan-mapping-dinh-muc-gia-cong/hinh-01-form-tham-chieu.png)

 Đối tác và hai phía định mức;  Lưu lại / Đóng. Chưa chọn đối tác hoặc lưu mapping.

- **ĐỐI TÁC**: Cách sử dụng: Chọn đối tác có kết nối, không dùng mã đối tác khác để thử.
- **TÊN ĐỊNH MỨC BÊN GỬI (của đối tác)**: Cách sử dụng: Đúng tên định mức đối tác gửi, không thay bằng mã nội bộ.
- **ĐỊNH MỨC TƯƠNG ỨNG (ở hệ thống này)**: Cách sử dụng: Chọn mã định mức nhận trong ERP hiện tại.
- **Kích hoạt / GHI CHÚ**: Cách sử dụng: Chỉ bật cặp ánh xạ đã soát; ghi căn cứ đối chiếu.

## 4. Trình tự công việc

Chuẩn bị dữ liệu → Đối chiếu danh mục → Nhập thông tin riêng → Kiểm tra liên kết → Xác nhận kết quả

### Bước 1 — Đối chiếu hai hệ thống

Lấy tên định mức từ đối tác và xác định mã nội bộ cùng ý nghĩa. Cùng tên nhưng khác cấu tạo vẫn phải kiểm riêng.

### Bước 2 — Chọn cặp ánh xạ

Chọn đối tác, nhập tên phía gửi và chọn định mức tương ứng phía nhận. Kiểm ba giá trị cùng nhau; không chỉ so tên gần giống.

### Bước 3 — Rà trước đồng bộ

Bấm **Lưu lại**, xử lý các ô bắt buộc nếu hệ thống nhắc; chờ **Lưu thành công**, tìm và mở lại dòng vừa ghi. Chỉ cho sử dụng sau khi soát cặp ánh xạ. Nhiều dòng nhập bằng [IMPORT MAPPING ĐỊNH MỨC GIA CÔNG TỪ EXCEL](/bai-viet/2026-11-07-tl-f03-1-import-mapping-dinh-muc-gia-cong-tu-excel/). Việc lưu ánh xạ không chứng minh đã đồng bộ chứng từ thành công.

## 6. Giải thích các thông tin trên màn hình

- **ĐỐI TÁC**: Cách sử dụng: Chọn đối tác có kết nối, không dùng mã đối tác khác để thử.
- **TÊN ĐỊNH MỨC BÊN GỬI (của đối tác)**: Cách sử dụng: Đúng tên định mức đối tác gửi, không thay bằng mã nội bộ.
- **ĐỊNH MỨC TƯƠNG ỨNG (ở hệ thống này)**: Cách sử dụng: Chọn mã định mức nhận trong ERP hiện tại.
- **Kích hoạt / GHI CHÚ**: Cách sử dụng: Chỉ bật cặp ánh xạ đã soát; ghi căn cứ đối chiếu.

## 7. Kiểm tra sau khi thực hiện

Sau khi **Lưu lại** thành công, dòng ánh xạ có đúng **Đối tác → Tên định mức bên gửi → Định mức nội bộ**. Mở lại dòng để soát ba giá trị và Kích hoạt. Đây là kết quả lưu ánh xạ; cần nhận một chứng từ thử riêng mới xác nhận định mức được điền đúng khi đồng bộ.

## 8. Những điều cần lưu ý

Sai mapping có thể gán nhầm định mức khi nhận dữ liệu gia công. Thay mapping không mặc định sửa lại chứng từ đã đồng bộ trước đó.

### “Chọn đối tác” 

Nguyên nhân: Chưa chọn đối tác.

Cách xử lý: Chọn đúng đối tác.

### “Nhập tên định mức bên gửi” 

Nguyên nhân: Thiếu tên phía gửi.

Cách xử lý: Lấy đúng tên được đối tác cung cấp.

### “Chọn định mức tương ứng” 

Nguyên nhân: Thiếu mã phía nhận.

Cách xử lý: Chọn định mức nội bộ đúng cấu tạo.

## 10. Công việc tiếp theo

Kiểm tra dữ liệu tại màn liên quan trước khi tiếp tục nghiệp vụ. [TỔNG QUAN MÀN HÌNH ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-0-tong-quan-man-hinh-dinh-muc/); [TỔNG QUAN MÀN HÌNH KẾT NỐI ĐỐI TÁC](/bai-viet/2026-11-07-tl-f01-0-tong-quan-man-hinh-ket-noi-doi-tac/); [TỔNG QUAN MÀN HÌNH MAPPING HÀNG HÓA GIA CÔNG](/bai-viet/2026-11-07-tl-f02-0-tong-quan-man-hinh-mapping-hang-hoa-gia-cong/); [IMPORT MAPPING ĐỊNH MỨC GIA CÔNG TỪ EXCEL](/bai-viet/2026-11-07-tl-f03-1-import-mapping-dinh-muc-gia-cong-tu-excel/).

## 11. Bài hướng dẫn liên quan

[TỔNG QUAN MÀN HÌNH ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-0-tong-quan-man-hinh-dinh-muc/); [TỔNG QUAN MÀN HÌNH KẾT NỐI ĐỐI TÁC](/bai-viet/2026-11-07-tl-f01-0-tong-quan-man-hinh-ket-noi-doi-tac/); [TỔNG QUAN MÀN HÌNH MAPPING HÀNG HÓA GIA CÔNG](/bai-viet/2026-11-07-tl-f02-0-tong-quan-man-hinh-mapping-hang-hoa-gia-cong/); [IMPORT MAPPING ĐỊNH MỨC GIA CÔNG TỪ EXCEL](/bai-viet/2026-11-07-tl-f03-1-import-mapping-dinh-muc-gia-cong-tu-excel/).
