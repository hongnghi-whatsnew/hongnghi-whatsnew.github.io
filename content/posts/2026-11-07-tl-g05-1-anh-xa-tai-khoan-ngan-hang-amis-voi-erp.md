---
title: "ÁNH XẠ TÀI KHOẢN NGÂN HÀNG AMIS VỚI ERP"
date: "2026-11-07"
summary: "Có danh mục nội bộ và thông tin AMIS được phép sử dụng; nghiệp vụ đã xác nhận quan hệ một/nhiều đối tượng."
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

Có danh mục nội bộ và thông tin AMIS được phép sử dụng; nghiệp vụ đã xác nhận quan hệ một/nhiều đối tượng.

## 2. Mở chức năng

**Kết nối AMIS → Tài khoản ngân hàng → Thêm mới / Sửa**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

- **SỐ TÀI KHOẢN / TÊN NGÂN HÀNG**: Cách sử dụng: Thông tin tài khoản ở AMIS; chỉ dùng số giả trong bài thử.
- **CN NGÂN HÀNG / MÃ NGÂN HÀNG**: Cách sử dụng: Đối chiếu đúng ngân hàng và chi nhánh.
- **TK HẠCH TOÁN**: Cách sử dụng: Tài khoản kế toán do kế toán xác nhận.
- **QUỸ TÀI KHOẢN NỘI BỘ**: Cách sử dụng: Bảng con chọn một hoặc nhiều bản ghi ERP cần ánh xạ, không phải ô gõ mã AMIS.

## 4. Trình tự công việc

Chuẩn bị dữ liệu → Đối chiếu danh mục → Nhập thông tin riêng → Kiểm tra liên kết → Xác nhận kết quả

### Bước 1 — Đối chiếu bản ghi phía AMIS

Nhập/soát thông tin tài khoản ngân hàng phía AMIS tại vùng đầu cửa sổ. Dùng mã đúng hệ thống đích; không tráo với mã ERP.

### Bước 2: Chọn đối tượng ERP

Tại bảng **QUỸ TÀI KHOẢN NỘI BỘ**, chọn đúng quỹ tài khoản nội bộ từ danh sách. Sau khi chọn, bảng có thêm dòng trống; chỉ chọn thêm quỹ tài khoản nếu các bản ghi cùng thuộc một liên kết đã được thống nhất.

### Bước 3 — Soát toàn bộ bảng con

Kiểm từng dòng đã chọn, loại liên kết sai bằng thao tác xóa dòng. Dòng trống để thêm không phải liên kết hợp lệ; kiểm danh sách thực lưu sau xác nhận.

### Bước 4 — Lưu và kiểm tra kết quả

Bấm **Lưu lại** và chờ thông báo **Lưu thành công**. Nếu có lỗi, xử lý theo nội dung thông báo; không coi đóng cửa sổ là đã lưu. Tìm và mở lại mapping, so mã/số tài khoản AMIS với toàn bộ đối tượng ERP. Chỉ chuyển sang thử đồng bộ khi số dòng và chi nhánh đúng; không lưu lại nhiều lần để xử lý lỗi kết nối chưa rõ nguyên nhân.

## 6. Giải thích các thông tin trên màn hình

- **SỐ TÀI KHOẢN / TÊN NGÂN HÀNG**: Cách sử dụng: Thông tin tài khoản ở AMIS; chỉ dùng số giả trong bài thử.
- **CN NGÂN HÀNG / MÃ NGÂN HÀNG**: Cách sử dụng: Đối chiếu đúng ngân hàng và chi nhánh.
- **TK HẠCH TOÁN**: Cách sử dụng: Tài khoản kế toán do kế toán xác nhận.
- **QUỸ TÀI KHOẢN NỘI BỘ**: Cách sử dụng: Bảng con chọn một hoặc nhiều bản ghi ERP cần ánh xạ, không phải ô gõ mã AMIS.
- **Kích hoạt / GHI CHÚ**: Cách sử dụng: Trạng thái sử dụng và căn cứ mapping.

## 7. Kiểm tra sau khi thực hiện

Sau lưu thành công, bản ghi **tài khoản ngân hàng AMIS/MISA** và đúng các dòng đã chọn trong **QUỸ TÀI KHOẢN NỘI BỘ** được tìm lại, mở lại để đối chiếu. Dòng trống không có đối tượng nội bộ không phải liên kết được gửi lưu. Kiểm số dòng, mã và tên từng phía; lưu mapping không tự chứng minh chứng từ đã gửi/nhận qua AMIS.

## 8. Công việc tiếp theo

Kiểm tra dữ liệu tại màn liên quan trước khi tiếp tục nghiệp vụ. [TỔNG QUAN TÀI KHOẢN NGÂN HÀNG AMIS](/bai-viet/2026-11-07-tl-g05-0-tong-quan-tai-khoan-ngan-hang-amis/); [KẾT NỐI ỨNG DỤNG AMIS](/bai-viet/2026-11-07-tl-g01-0-ket-noi-ung-dung-amis/); [TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ](/bai-viet/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/).

## 9. Bài hướng dẫn liên quan

[TỔNG QUAN TÀI KHOẢN NGÂN HÀNG AMIS](/bai-viet/2026-11-07-tl-g05-0-tong-quan-tai-khoan-ngan-hang-amis/); [KẾT NỐI ỨNG DỤNG AMIS](/bai-viet/2026-11-07-tl-g01-0-ket-noi-ung-dung-amis/); [TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ](/bai-viet/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/).
