---
title: "ÁNH XẠ NHÀ CUNG CẤP AMIS VỚI ERP"
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

**Kết nối AMIS → Nhà cung cấp → Thêm mới / Sửa**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

- **MÃ NHÀ CUNG CẤP**: Cách sử dụng: Mã nhà cung cấp ở AMIS, bắt buộc.
- **TÊN NHÀ CUNG CẤP**: Cách sử dụng: Tên ở AMIS, bắt buộc.
- **MÃ SỐ THUẾ / ĐỊA CHỈ**: Cách sử dụng: Thông tin nhận diện để so với hồ sơ nội bộ.
- **NHÀ CUNG CẤP NỘI BỘ**: Cách sử dụng: Bảng con chọn một hoặc nhiều bản ghi ERP cần ánh xạ, không phải ô gõ mã AMIS.

## 4. Trình tự công việc

Chuẩn bị dữ liệu → Đối chiếu danh mục → Nhập thông tin riêng → Kiểm tra liên kết → Xác nhận kết quả

### Bước 1 — Đối chiếu bản ghi phía AMIS

Nhập/soát thông tin nhà cung cấp phía AMIS tại vùng đầu cửa sổ. Dùng mã đúng hệ thống đích; không tráo với mã ERP.

### Bước 2: Chọn đối tượng ERP

Tại bảng **NHÀ CUNG CẤP NỘI BỘ**, chọn đúng nhà cung cấp nội bộ từ danh sách. Sau khi chọn, bảng có thêm dòng trống; chỉ chọn thêm nhà cung cấp nếu các bản ghi cùng thuộc một liên kết đã được thống nhất.

### Bước 3 — Soát toàn bộ bảng con

Kiểm từng dòng đã chọn, loại liên kết sai bằng thao tác xóa dòng. Dòng trống để thêm không phải liên kết hợp lệ; kiểm danh sách thực lưu sau xác nhận.

### Bước 4 — Lưu và kiểm tra kết quả

Bấm **Lưu lại** và chờ thông báo **Lưu thành công**. Nếu có lỗi, xử lý theo nội dung thông báo; không coi đóng cửa sổ là đã lưu. Tìm và mở lại mapping, so mã/số tài khoản AMIS với toàn bộ đối tượng ERP. Chỉ chuyển sang thử đồng bộ khi số dòng và chi nhánh đúng; không lưu lại nhiều lần để xử lý lỗi kết nối chưa rõ nguyên nhân.

## 6. Giải thích các thông tin trên màn hình

- **MÃ NHÀ CUNG CẤP**: Cách sử dụng: Mã nhà cung cấp ở AMIS, bắt buộc.
- **TÊN NHÀ CUNG CẤP**: Cách sử dụng: Tên ở AMIS, bắt buộc.
- **MÃ SỐ THUẾ / ĐỊA CHỈ**: Cách sử dụng: Thông tin nhận diện để so với hồ sơ nội bộ.
- **NHÀ CUNG CẤP NỘI BỘ**: Cách sử dụng: Bảng con chọn một hoặc nhiều bản ghi ERP cần ánh xạ, không phải ô gõ mã AMIS.
- **Kích hoạt / GHI CHÚ**: Cách sử dụng: Trạng thái sử dụng và căn cứ mapping.

## 7. Kiểm tra sau khi thực hiện

Sau lưu thành công, bản ghi **nhà cung cấp AMIS/MISA** và đúng các dòng đã chọn trong **NHÀ CUNG CẤP NỘI BỘ** được tìm lại, mở lại để đối chiếu. Dòng trống không có đối tượng nội bộ không phải liên kết được gửi lưu. Kiểm số dòng, mã và tên từng phía; lưu mapping không tự chứng minh chứng từ đã gửi/nhận qua AMIS.

## 8. Công việc tiếp theo

Kiểm tra dữ liệu tại màn liên quan trước khi tiếp tục nghiệp vụ. [TỔNG QUAN NHÀ CUNG CẤP AMIS](/bai-viet/2026-11-07-tl-g02-0-tong-quan-nha-cung-cap-amis/); [KẾT NỐI ỨNG DỤNG AMIS](/bai-viet/2026-11-07-tl-g01-0-ket-noi-ung-dung-amis/); [TỔNG QUAN MÀN HÌNH NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-b02-0-tong-quan-man-hinh-nha-cung-cap/).

## 9. Bài hướng dẫn liên quan

[TỔNG QUAN NHÀ CUNG CẤP AMIS](/bai-viet/2026-11-07-tl-g02-0-tong-quan-nha-cung-cap-amis/); [KẾT NỐI ỨNG DỤNG AMIS](/bai-viet/2026-11-07-tl-g01-0-ket-noi-ung-dung-amis/); [TỔNG QUAN MÀN HÌNH NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-b02-0-tong-quan-man-hinh-nha-cung-cap/).
