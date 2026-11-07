---
title: "TỔNG QUAN NHÂN VIÊN"
date: "2026-11-07"
summary: "Hướng dẫn sử dụng chức năng tổng quan nhân viên, gồm thao tác, thông tin cần kiểm tra và lưu ý liên quan."
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

**Thiết lập nội bộ → Nhân viên** — `/thiet-lap/nguoi-dung`

## 2. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![NGƯỜI DÙNG — menu quản trị tài khoản có sẵn; định danh đã che, chỉ mở xem.](/posts/2026-11-07-ht-a02-0-tong-quan-nhan-vien/ui-20261026-ht-a02-menu-users-list-menu.png)

![NGƯỜI DÙNG - DANH SÁCH — chỉ xem; thông tin tài khoản/người tạo đã che khi có.](/posts/2026-11-07-ht-a02-0-tong-quan-nhan-vien/ui-20261026-ht-a02-ds-figure-01.png)

Menu **Nhân viên** mở màn **NGƯỜI DÙNG** quản lý tài khoản ERP. cửa sổ **THÊM MỚI - NGƯỜI DÙNG** / **CẬP NHẬT - NGƯỜI DÙNG**; menu chuột phải có **Đặt lại mật khẩu**, **Phân quyền chức năng**, **Phân nhóm khách**, **Phân kho hàng**, **Phân qũy, tài khoản**, **Phân bộ phận (lương)** và **Sao chép phân quyền**.

- **Cấp quyền chức năng**: Bài hướng dẫn: [PHÂN QUYỀN CHỨC NĂNG](/bai-viet/2026-11-07-ht-a02-1-phan-quyen-chuc-nang/)
- **Phân khách, kho, quỹ và bộ phận**: Bài hướng dẫn: [PHÂN PHẠM VI DỮ LIỆU CHO NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-2-phan-pham-vi-du-lieu-cho-nhan-vien/)
- **Sao chép quyền từ tài khoản khác**: Bài hướng dẫn: [SAO CHÉP PHÂN QUYỀN](/bai-viet/2026-11-07-ht-a02-3-sao-chep-phan-quyen/)
- **Đặt lại mật khẩu**: Bài hướng dẫn: [ĐẶT LẠI MẬT KHẨU NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-4-dat-lai-mat-khau-nhan-vien/)

## 3. Trình tự công việc

Xác định phạm vi → Chọn dữ liệu → Thực hiện theo quyền → Đối chiếu kết quả

## 4. Thực hiện trên phần mềm

1. Chuẩn bị tên đăng nhập riêng cho nhân viên; không nhầm tài khoản ERP với hồ sơ nhân sự.
2. Khi tạo, nhập **TÀI KHOẢN** và hai ô **MẬT KHẨU** khớp nhau.
3. Chọn **HỒ SƠ NHÂN SỰ** nếu cần gắn tài khoản với KPI; kiểm tra **HỌ & TÊN**.
4. Hoàn thiện **GIỚI TÍNH**, **EMAIL**, **GHI CHÚ**, **Kích hoạt**. Chỉ quản trị hệ thống mới bật **Tài khoản hệ thống**.
5. Sau khi tài khoản có, tiếp tục các bài cấp quyền và phân phạm vi. Tài khoản mới phải đổi mật khẩu ở lần đăng nhập đầu.

## 5. Giải thích các thông tin trên màn hình

- **TÀI KHOẢN**: Ý nghĩa / quy tắc: Chỉ nhập khi thêm; bắt buộc, tối thiểu 2 ký tự, không có khoảng trắng, không trùng.
- **MẬT KHẨU (hai ô)**: Ý nghĩa / quy tắc: Mật khẩu và xác nhận; phải khớp. Không lưu mật khẩu thật vào tài liệu / ảnh.
- **HỒ SƠ NHÂN SỰ**: Ý nghĩa / quy tắc: Liên kết hồ sơ để lấy doanh số KPI. Khi đã gắn, tên lấy theo hồ sơ và ô HỌ & TÊN bị khóa.
- **HỌ & TÊN**: Ý nghĩa / quy tắc: Bắt buộc; nhập khi chưa gắn hồ sơ nhân sự.
- **GIỚI TÍNH / EMAIL / GHI CHÚ**: Ý nghĩa / quy tắc: Thông tin tài khoản bổ sung.
- **Tài khoản hệ thống**: Ý nghĩa / quy tắc: Toàn quyền hệ thống. Chỉ tài khoản hệ thống được bật/tắt và sửa tài khoản hệ thống.
- **Buộc đổi mật khẩu lần đăng nhập tới**: Ý nghĩa / quy tắc: Hiện khi cập nhật; tự tắt sau khi người dùng đổi xong.
- **Kích hoạt**: Ý nghĩa / quy tắc: Tình trạng tài khoản; kiểm tra trước khi bàn giao. Khi lưu chuyển từ kích hoạt sang ngưng, hệ thống thu hồi các phiên cũ và gửi thông báo đăng xuất; phối hợp với chủ tài khoản trước thao tác.

## 6. Kiểm tra sau khi thực hiện

Tài khoản ERP có thông tin và trạng thái theo lựa chọn. Các quyền/phạm vi dữ liệu phải cấp ở bước riêng.

## 7. Những điều cần lưu ý

⚠️ **Tài khoản hệ thống** có toàn quyền. Không sử dụng thay cho cấp quyền chi tiết. Khi ngừng sử dụng nhân viên, cân nhắc khóa tài khoản theo nghiệp vụ thay vì xóa dấu vết liên quan.

### "Tài khoản đã tồn tại" 

Nguyên nhân: trùng tên đăng nhập.

Cách xử lý: kiểm tra người đã có hoặc chọn tên khác.

### "Mật khẩu không khớp" 

Nguyên nhân: hai ô mật khẩu khác nhau.

Cách xử lý: nhập lại cả hai ô.

### "Chỉ tài khoản hệ thống mới đặt được cờ tài khoản hệ thống." 

Nguyên nhân: tài khoản thao tác không đủ thẩm quyền nâng quyền.

Cách xử lý: chuyển quản trị hệ thống xem xét.

## 9. Câu hỏi thường gặp

**Nhân viên ở đây có phải hồ sơ chấm công/lương không?** Đây là tài khoản ERP; trường HỒ SƠ NHÂN SỰ dùng để liên kết hồ sơ đó.

## 10. Công việc tiếp theo

Đối chiếu kết quả và lưu kỳ/phạm vi đã kiểm tra. [PHÂN QUYỀN CHỨC NĂNG](/bai-viet/2026-11-07-ht-a02-1-phan-quyen-chuc-nang/); [PHÂN PHẠM VI DỮ LIỆU CHO NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-2-phan-pham-vi-du-lieu-cho-nhan-vien/); [SAO CHÉP PHÂN QUYỀN](/bai-viet/2026-11-07-ht-a02-3-sao-chep-phan-quyen/); [ĐẶT LẠI MẬT KHẨU NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-4-dat-lai-mat-khau-nhan-vien/); [TỔNG QUAN TRẠNG THÁI HOẠT ĐỘNG](/bai-viet/2026-11-07-ht-a05-0-tong-quan-trang-thai-hoat-dong/).

## 11. Bài hướng dẫn liên quan

[PHÂN QUYỀN CHỨC NĂNG](/bai-viet/2026-11-07-ht-a02-1-phan-quyen-chuc-nang/); [PHÂN PHẠM VI DỮ LIỆU CHO NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-2-phan-pham-vi-du-lieu-cho-nhan-vien/); [SAO CHÉP PHÂN QUYỀN](/bai-viet/2026-11-07-ht-a02-3-sao-chep-phan-quyen/); [ĐẶT LẠI MẬT KHẨU NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-4-dat-lai-mat-khau-nhan-vien/); [TỔNG QUAN TRẠNG THÁI HOẠT ĐỘNG](/bai-viet/2026-11-07-ht-a05-0-tong-quan-trang-thai-hoat-dong/).
