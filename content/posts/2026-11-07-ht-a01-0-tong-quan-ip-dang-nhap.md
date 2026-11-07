---
title: "TỔNG QUAN IP ĐĂNG NHẬP"
date: "2026-11-07"
summary: "Hướng dẫn sử dụng chức năng tổng quan ip đăng nhập, gồm thao tác, thông tin cần kiểm tra và lưu ý liên quan."
module: "Hệ thống"
category: "huong-dan"
version: "v5.0.0"
isNew: true
scope: "Quản trị viên được cấp quyền chức năng"
department: ""
mediaType: "none"
tags: []
pinImportant: false
pinned: false
draft: true
---

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Mở chức năng

**Thiết lập nội bộ → IP đăng nhập** — `/he-thong/ip-dang-nhap`

## 2. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![IP - DANH SÁCH — dữ liệu mạng và người tạo đã che, chỉ xem.](/posts/2026-11-07-ht-a01-0-tong-quan-ip-dang-nhap/ui-20261026-ht-a01-ds-ip-list.png)

Lưới **IP**, **Trạng thái**, **Ghi chú**, **Người tạo**, **Ngày tạo**, **Người sửa**, **Ngày sửa**. cửa sổ **THÊM IP** / **CẬP NHẬT IP** có **IP HOẶC DẢI CIDR**, **GHI CHÚ**, **Kích hoạt**, **Lưu lại**, **Đóng**.

## 3. Trình tự công việc

Xác định phạm vi → Chọn dữ liệu → Thực hiện theo quyền → Đối chiếu kết quả

## 4. Thực hiện trên phần mềm

1. Xác định địa chỉ hoặc dải mạng được phép đăng nhập, và chi nhánh đang làm việc.
2. Nhập **IP HOẶC DẢI CIDR**: một IPv4 / IPv6 hoặc dải CIDR hợp lệ. cửa sổ thêm có thể điền IP hiện tại; phải kiểm tra đó là mạng mong muốn.
3. Ghi rõ nơi dùng trong **GHI CHÚ** và quyết định **Kích hoạt**.
4. Trước khi lưu, so lại dải và trạng thái. Khi thay dải cũ, kiểm tra tác động tới người đang làm việc trước khi bỏ kích hoạt hoặc xóa.

## 5. Giải thích các thông tin trên màn hình

- **IP HOẶC DẢI CIDR**: Ý nghĩa / quy tắc: Bắt buộc, không trùng giá trị đã có. Dải IPv4 nhận /8–/32; IPv6 /32–/128. Địa chỉ đơn cũng được nhận.
- **GHI CHÚ**: Ý nghĩa / quy tắc: Mô tả mạng / đơn vị để quản trị nhận biết.
- **Kích hoạt**: Ý nghĩa / quy tắc: Bật để địa chỉ / dải tham gia danh sách cho phép; tắt khi ngừng dùng.
- **Chi nhánh**: Ý nghĩa / quy tắc: Gán theo chi nhánh đang làm việc khi lưu; cửa sổ không có ô chọn chi nhánh riêng.
- **Thông tin tạo / sửa**: Ý nghĩa / quy tắc: Thông tin truy vết tự ghi; không phải dữ liệu cần nhập.

## 6. Kiểm tra sau khi thực hiện

Danh sách IP được thêm / cập nhật cho chi nhánh làm việc; dòng kích hoạt tham gia kiểm tra IP đăng nhập.

## 7. Những điều cần lưu ý

⚠️ Không cấp dải quá rộng. Việc đổi / tắt / xóa địa chỉ có thể ảnh hưởng khả năng đăng nhập của người dùng trong mạng đó.

### "Vùi lòng nhập IP" 

Nguyên nhân: bỏ trống địa chỉ.

Cách xử lý: nhập địa chỉ / dải cần cấp.

### "IP không hợp lệ" 

Nguyên nhân: sai định dạng hoặc độ dài dải ngoài giới hạn.

Cách xử lý: kiểm tra địa chỉ và prefix; không dùng /0.

### "IP đã tồn tại" 

Nguyên nhân: trùng địa chỉ đã khai báo.

Cách xử lý: tìm dòng hiện có để kiểm tra / cập nhật.

## 9. Câu hỏi thường gặp

**Tên IP đăng nhập có chỉ nhận IPv4 không?** Không; cửa sổ nhận cả IPv6 và CIDR.

## 10. Công việc tiếp theo

Đối chiếu kết quả và lưu kỳ/phạm vi đã kiểm tra. [TỔNG QUAN NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-0-tong-quan-nhan-vien/); [TỔNG QUAN TRẠNG THÁI HOẠT ĐỘNG](/bai-viet/2026-11-07-ht-a05-0-tong-quan-trang-thai-hoat-dong/).

## 11. Bài hướng dẫn liên quan

[TỔNG QUAN NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-0-tong-quan-nhan-vien/); [TỔNG QUAN TRẠNG THÁI HOẠT ĐỘNG](/bai-viet/2026-11-07-ht-a05-0-tong-quan-trang-thai-hoat-dong/).
