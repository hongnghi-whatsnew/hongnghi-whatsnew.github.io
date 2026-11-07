---
title: "TỔNG QUAN TÀI KHOẢN NGÂN HÀNG AMIS"
date: "2026-11-07"
summary: "Danh mục ERP đã tồn tại (TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ); cấu hình tích hợp đúng môi trường."
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

Danh mục ERP đã tồn tại ([TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ](/bai-viet/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/)); cấu hình tích hợp đúng môi trường.

## 2. Mở chức năng

**Kết nối AMIS → Tài khoản ngân hàng**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![TÀI KHOẢN NGÂN HÀNG MISA - DANH SÁCH — hiện trống, chỉ xem.](/posts/2026-11-07-tl-g05-0-tong-quan-tai-khoan-ngan-hang-amis/ui-20261026-tl-g05-ds-amis-mapping-list.png)

- **SỐ TÀI KHOẢN / TÊN NGÂN HÀNG**: Cách sử dụng: Thông tin tài khoản ở AMIS; chỉ dùng số giả trong bài thử.
- **CN NGÂN HÀNG / MÃ NGÂN HÀNG**: Cách sử dụng: Đối chiếu đúng ngân hàng và chi nhánh.
- **TK HẠCH TOÁN**: Cách sử dụng: Tài khoản kế toán do kế toán xác nhận.
- **QUỸ TÀI KHOẢN NỘI BỘ**: Cách sử dụng: Bảng con chọn một hoặc nhiều bản ghi ERP cần ánh xạ, không phải ô gõ mã AMIS.

## 4. Trình tự công việc

Chuẩn bị dữ liệu → Đối chiếu danh mục → Nhập thông tin riêng → Kiểm tra liên kết → Xác nhận kết quả

### Bước 1 — Phân biệt hai danh mục

Bản ghi ở màn này mô tả tài khoản ngân hàng phía AMIS; cột **Nội bộ** thể hiện liên kết với ERP. Không tạo lại hồ sơ nội bộ chỉ vì chưa có mapping.

### Bước 2 — Đối chiếu nhận diện

Tìm đúng mã phía AMIS, so thông tin nhận diện trước khi mở bản ghi. Nếu một bản ghi có nhiều đối tượng nội bộ, rà toàn bộ bảng con.

### Bước 3 — Chọn bài xử lý

Ánh xạ hoặc thay liên kết xem [ÁNH XẠ TÀI KHOẢN NGÂN HÀNG AMIS VỚI ERP](/bai-viet/2026-11-07-tl-g05-1-anh-xa-tai-khoan-ngan-hang-amis-voi-erp/). Trước khi trao đổi dữ liệu thật, đối chiếu với danh mục ERP và cấu hình [KẾT NỐI ỨNG DỤNG AMIS](/bai-viet/2026-11-07-tl-g01-0-ket-noi-ung-dung-amis/).

## 6. Giải thích các thông tin trên màn hình

- **SỐ TÀI KHOẢN / TÊN NGÂN HÀNG**: Cách sử dụng: Thông tin tài khoản ở AMIS; chỉ dùng số giả trong bài thử.
- **CN NGÂN HÀNG / MÃ NGÂN HÀNG**: Cách sử dụng: Đối chiếu đúng ngân hàng và chi nhánh.
- **TK HẠCH TOÁN**: Cách sử dụng: Tài khoản kế toán do kế toán xác nhận.
- **QUỸ TÀI KHOẢN NỘI BỘ**: Cách sử dụng: Bảng con chọn một hoặc nhiều bản ghi ERP cần ánh xạ, không phải ô gõ mã AMIS.
- **Kích hoạt / GHI CHÚ**: Cách sử dụng: Trạng thái sử dụng và căn cứ mapping.

## 7. Kiểm tra sau khi thực hiện

Bạn xác định được bản ghi **tài khoản ngân hàng phía AMIS/MISA** và các đối tượng ERP đang liên kết ở bảng **QUỸ TÀI KHOẢN NỘI BỘ**. Đối chiếu mã/số tài khoản, tên, đơn vị quản lý và toàn bộ liên kết trước khi dùng. Danh sách trống chỉ cho biết chưa có dòng trong phạm vi đang xem; không chứng minh danh mục AMIS trống hoặc kết nối lỗi. Thêm/sửa ánh xạ theo [ÁNH XẠ TÀI KHOẢN NGÂN HÀNG AMIS VỚI ERP](/bai-viet/2026-11-07-tl-g05-1-anh-xa-tai-khoan-ngan-hang-amis-voi-erp/); kết quả trao đổi chứng từ phải kiểm riêng.

## 8. Những điều cần lưu ý

Không suy thao tác lưu mapping là đã đẩy danh mục/chứng từ sang AMIS. Việc sửa/xóa ánh xạ cần kiểm tra chứng từ đang dùng và quyền được giao.

## 9. Công việc tiếp theo

Kiểm tra dữ liệu tại màn liên quan trước khi tiếp tục nghiệp vụ. [ÁNH XẠ TÀI KHOẢN NGÂN HÀNG AMIS VỚI ERP](/bai-viet/2026-11-07-tl-g05-1-anh-xa-tai-khoan-ngan-hang-amis-voi-erp/); [KẾT NỐI ỨNG DỤNG AMIS](/bai-viet/2026-11-07-tl-g01-0-ket-noi-ung-dung-amis/); [TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ](/bai-viet/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/).

## 10. Bài hướng dẫn liên quan

[ÁNH XẠ TÀI KHOẢN NGÂN HÀNG AMIS VỚI ERP](/bai-viet/2026-11-07-tl-g05-1-anh-xa-tai-khoan-ngan-hang-amis-voi-erp/); [KẾT NỐI ỨNG DỤNG AMIS](/bai-viet/2026-11-07-tl-g01-0-ket-noi-ung-dung-amis/); [TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ](/bai-viet/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/).
