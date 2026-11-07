---
title: "ĐỔI TÊN VÀ SẮP XẾP MENU"
date: "2026-11-07"
summary: "Điều chỉnh tên hiển thị và vị trí mục menu trong sidebar; thao tác kéo dòng có thể đổi cả nhóm cha."
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

Điều chỉnh tên hiển thị và vị trí mục menu trong sidebar; thao tác kéo dòng có thể đổi cả nhóm cha.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Mở chức năng

**Thiết lập nội bộ → Đổi tên và sắp xếp menu** — `/he-thong/menu`

## 2. Nhận biết màn hình

Đã quan sát màn **Thiết lập nội bộ → Menu** ngày 29/10/2026 bằng Administrator trên Gia Phúc localhost. Có các cột Parent Key, Index, Key, href, Name, Divider và tay nắm kéo dòng. Nhấp vào Name mở ô sửa. Nhấn Esc thoát ô, nút Lưu lại trở lại trạng thái khóa. Không đổi tên, không kéo dòng, không lưu cấu hình; kết quả lưu tên/thứ tự cần kiểm chứng riêng.

![Hình 1: Màn Menu có Parent Key, Index, Key, href, Name và tay nắm sắp xếp](/posts/2026-11-07-ht-a04-1-doi-ten-va-sap-xep-menu/hinh-01-20261029-ht-a04-1-menu.png)

![Hình 2: Ô Name được mở để chỉnh sửa; chưa thay tên hoặc lưu](/posts/2026-11-07-ht-a04-1-doi-ten-va-sap-xep-menu/hinh-02-20261029-ht-a04-1-o-name.png)

Lưới chỉnh theo lô: **Name** là ô sửa được, **Lưu lại** lưu các tên đã sửa. Tay nắm ở đầu dòng dùng kéo vị trí.

## 3. Trình tự công việc

Xác định dòng bằng Key và href → mở ô Name để sửa → kiểm tra các dòng thay đổi → Lưu lại → tải lại và đối chiếu tên trên menu.

Với sắp xếp: kéo tay nắm đến vị trí đích → kiểm tra nhóm cha và Index sau thả → đối chiếu menu. Thao tác kéo có thể ghi ngay; xem cảnh báo ở phần “Những điều cần lưu ý”.

## 4. Thực hiện trên phần mềm

1. Xác định mục theo **Key**, **href**, tên nhóm cha.
2. Đổi tên: nhập ở **Name**, kiểm tra các dòng thay đổi rồi bấm **Lưu lại**; đối chiếu thông báo **Cập nhật thành công.**
3. Sắp xếp: kéo tay nắm đến dòng đích. Thứ tự được gửi lưu ngay sau khi thả; không chờ nút Lưu lại của sửa tên.
5. Tải lại danh sách và đối chiếu sidebar bằng tài khoản mục tiêu trước khi bàn giao.

## 5. Giải thích các thông tin trên màn hình

- **Name**: Ý nghĩa / quy tắc: Tên hiển thị, lưu theo lô.
- **Tay nắm kéo dòng**: Ý nghĩa / quy tắc: Thả để đổi thứ tự và có thể đổi nhóm; gửi cập nhật ngay.
- **Index**: Ý nghĩa / quy tắc: Đánh lại từ 1 cho từng nhóm sau kéo.
- **Parent Key**: Ý nghĩa / quy tắc: Có thể đổi theo nhóm của vị trí thả, dù cột không cho nhập tay.
- **Key / href**: Ý nghĩa / quy tắc: Không đổi bởi sửa tên.

## 6. Kiểm tra sau khi thực hiện

Tên hoặc thứ tự/nhóm menu được cập nhật. Sidebar cần được kiểm tra lại sau tải dữ liệu.

## 7. Câu hỏi thường gặp

**Vì sao kéo xong không thấy nút lưu?** Thao tác kéo tự gửi lưu sau thả.

**Name mới có đổi route không?** Không; href giữ nguyên.

## 8. Công việc tiếp theo

Đối chiếu kết quả và lưu kỳ/phạm vi đã kiểm tra. [TỔNG QUAN MENU](/bai-viet/2026-11-07-ht-a04-0-tong-quan-menu/); [TỔNG QUAN THỐNG KÊ SỬ DỤNG](/bai-viet/2026-11-07-ht-a06-0-tong-quan-thong-ke-su-dung/).

## 9. Bài hướng dẫn liên quan

[TỔNG QUAN MENU](/bai-viet/2026-11-07-ht-a04-0-tong-quan-menu/); [TỔNG QUAN THỐNG KÊ SỬ DỤNG](/bai-viet/2026-11-07-ht-a06-0-tong-quan-thong-ke-su-dung/).
