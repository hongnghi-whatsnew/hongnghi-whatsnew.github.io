---
title: "TỔNG QUAN MENU"
date: "2026-11-07"
summary: "Đọc cấu trúc menu nội bộ, kiểm tra tên hiển thị và thứ tự mục."
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

Đọc cấu trúc menu nội bộ, kiểm tra tên hiển thị và thứ tự mục. Đổi tên / sắp xếp menu xem [ĐỔI TÊN VÀ SẮP XẾP MENU](/bai-viet/2026-11-07-ht-a04-1-doi-ten-va-sap-xep-menu/); xuất lưới: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Mở chức năng

**Thiết lập nội bộ → Menu** — `/he-thong/menu`

## 2. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![MENU - DANH SÁCH — chỉ xem; thông tin tài khoản/người tạo đã che khi có.](/posts/2026-11-07-ht-a04-0-tong-quan-menu/ui-20261026-ht-a04-ds-figure-01.png)

Lưới nhóm theo tên menu cha, có các cột **Parent Key**, **Index**, **Key**, **href**, **Name**, **Divider**. Chỉ **Name** cho sửa trực tiếp; có tay nắm kéo dòng để đổi thứ tự.

## 3. Trình tự công việc

Xác định phạm vi → Chọn dữ liệu → Thực hiện theo quyền → Đối chiếu kết quả

## 4. Thực hiện trên phần mềm

1. Tìm nhóm menu cần đối chiếu.
2. Xem **Parent Key**, **Key**, **href** để xác định đúng mục; dùng **Name** là tên hiện ra.
3. Nếu cần thay tên hoặc vị trí, theo [ĐỔI TÊN VÀ SẮP XẾP MENU](/bai-viet/2026-11-07-ht-a04-1-doi-ten-va-sap-xep-menu/). Không nhập mã route mới vào cột khóa.
4. Xuất danh sách theo [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/) khi cần ghi nhận cấu trúc trước/sau thay đổi.

## 5. Giải thích các thông tin trên màn hình

- **Parent Key**: Ý nghĩa / quy tắc: Khóa nhóm cha; chỉ đọc trên lưới.
- **Index**: Ý nghĩa / quy tắc: Thứ tự trong nhóm; chỉ đọc bằng nhập tay, có thể thay đổi khi kéo dòng.
- **Key**: Ý nghĩa / quy tắc: Khóa nhận diện mục menu; chỉ đọc.
- **href**: Ý nghĩa / quy tắc: Đường dẫn của mục; chỉ đọc.
- **Name**: Ý nghĩa / quy tắc: Tên hiển thị có thể sửa theo quyền.
- **Divider**: Ý nghĩa / quy tắc: Cờ ngăn cách; chỉ đọc.
- **Nhóm tên cha**: Ý nghĩa / quy tắc: Giúp xác định nhóm hiện tại khi xem / kéo dòng.

## 6. Kiểm tra sau khi thực hiện

Nhận diện đúng cấu trúc menu đang được tải; không tạo menu mới tại màn này.

## 7. Những điều cần lưu ý

⚠️ Đổi tên không đổi quyền truy cập hay đường dẫn. Không dùng đổi tên để kỳ vọng cấp quyền hoặc thêm chức năng.

## 8. Câu hỏi thường gặp

**Có thêm menu mới ở đây không?** Template chỉ hỗ trợ sửa tên và kéo thứ tự; không có thao tác thêm menu đang hiển thị.

## 9. Công việc tiếp theo

Đối chiếu kết quả và lưu kỳ/phạm vi đã kiểm tra. [ĐỔI TÊN VÀ SẮP XẾP MENU](/bai-viet/2026-11-07-ht-a04-1-doi-ten-va-sap-xep-menu/); [PHÂN QUYỀN CHỨC NĂNG](/bai-viet/2026-11-07-ht-a02-1-phan-quyen-chuc-nang/).

## 10. Bài hướng dẫn liên quan

[ĐỔI TÊN VÀ SẮP XẾP MENU](/bai-viet/2026-11-07-ht-a04-1-doi-ten-va-sap-xep-menu/); [PHÂN QUYỀN CHỨC NĂNG](/bai-viet/2026-11-07-ht-a02-1-phan-quyen-chuc-nang/).
