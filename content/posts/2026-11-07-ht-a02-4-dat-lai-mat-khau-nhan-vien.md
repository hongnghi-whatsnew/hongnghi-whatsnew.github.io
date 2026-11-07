---
title: "ĐẶT LẠI MẬT KHẨU NHÂN VIÊN"
date: "2026-11-07"
summary: "Quản trị đặt mật khẩu mới khi nhân viên không còn sử dụng được mật khẩu cũ; chủ tài khoản phải đổi lại khi đăng nhập."
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

## Chức năng này dùng để làm gì?

Quản trị đặt mật khẩu mới khi nhân viên không còn sử dụng được mật khẩu cũ; chủ tài khoản phải đổi lại khi đăng nhập.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Mở chức năng

**Thiết lập nội bộ → Đặt lại mật khẩu nhân viên** — `/thiet-lap/nguoi-dung`

## 2. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Xác nhận đặt lại mật khẩu — chỉ mở xem rồi đóng; tên tài khoản đã che, chưa xác nhận.](/posts/2026-11-07-ht-a02-4-dat-lai-mat-khau-nhan-vien/ui-20261026-ht-a02-dat-lai-reset-password-confirmation.png)

Chuột phải tài khoản → **Đặt lại mật khẩu**. Hộp **Xác nhận đặt lại mật khẩu** nêu tên người và tác động. Khi xong, hộp **Đã đặt lại mật khẩu** hiện mật khẩu mới đúng một lần.

## 3. Trình tự công việc

Xác định phạm vi → Chọn dữ liệu → Thực hiện theo quyền → Đối chiếu kết quả

## 4. Thực hiện trên phần mềm

1. Xác minh đúng người yêu cầu và tài khoản cần hỗ trợ.
2. Mở **Đặt lại mật khẩu** trên đúng dòng. Đọc tên và cảnh báo trong **Xác nhận đặt lại mật khẩu**.
3. Xác nhận để mật khẩu cũ hết hiệu lực.
4. Ghi nhận mật khẩu mới từ hộp **Đã đặt lại mật khẩu**, chuyển riêng cho chủ tài khoản theo quy trình nội bộ. Đóng hộp xong không xem lại được mật khẩu này.
5. Chủ tài khoản đăng nhập bằng mật khẩu mới và đổi mật khẩu để tiếp tục dùng. Các phiên cũ bị thu hồi.

## 5. Giải thích các thông tin trên màn hình

- **Tài khoản / họ tên đích**: Ý nghĩa / quy tắc: Đối tượng trên dòng mở menu; phải kiểm tra trước xác nhận.
- **Mật khẩu mới**: Ý nghĩa / quy tắc: Do hệ thống tạo ngẫu nhiên, chỉ hiển thị một lần; không phải mật khẩu mặc định dùng chung.
- **Buộc đổi mật khẩu**: Ý nghĩa / quy tắc: Được bật sau khi reset; chủ tài khoản phải đổi mật khẩu ở lần đăng nhập tiếp theo.
- **Phiên cũ**: Ý nghĩa / quy tắc: Bị thu hồi theo lần đặt lại mật khẩu.

## 6. Kiểm tra sau khi thực hiện

Mật khẩu cũ không còn dùng được; người dùng nhận mật khẩu tạm mới và phải đổi.

## 7. Những điều cần lưu ý

⚠️ Không thể khôi phục mật khẩu cũ bằng đóng hộp. Không chụp, đưa mật khẩu mới vào nhật ký HDSD hoặc gửi trong nhóm chung.

### "Chỉ tài khoản hệ thống mới reset được mật khẩu tài khoản hệ thống." 

Nguyên nhân: tài khoản thực hiện không có thẩm quyền đặt lại mật khẩu quản trị.

Cách xử lý: liên hệ quản trị hệ thống có thẩm quyền.

## 9. Câu hỏi thường gặp

**Đóng hộp mà chưa ghi lại mật khẩu thì sao?** Không thể xem lại; cần thực hiện một lần reset mới theo quy trình.

## 10. Công việc tiếp theo

Đối chiếu kết quả và lưu kỳ/phạm vi đã kiểm tra. [TỔNG QUAN NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-0-tong-quan-nhan-vien/); [THU HỒI PHIÊN ĐĂNG NHẬP](/bai-viet/2026-11-07-ht-a05-1-thu-hoi-phien-dang-nhap/).

## 11. Bài hướng dẫn liên quan

[TỔNG QUAN NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-0-tong-quan-nhan-vien/); [THU HỒI PHIÊN ĐĂNG NHẬP](/bai-viet/2026-11-07-ht-a05-1-thu-hoi-phien-dang-nhap/).
