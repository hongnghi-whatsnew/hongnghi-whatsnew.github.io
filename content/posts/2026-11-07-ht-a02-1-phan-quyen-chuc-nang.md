---
title: "PHÂN QUYỀN CHỨC NĂNG"
date: "2026-11-07"
summary: "Cấp hoặc thu hồi quyền mở màn và thao tác cho từng tài khoản nhân viên."
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

Cấp hoặc thu hồi quyền mở màn và thao tác cho từng tài khoản nhân viên. Đây là quyền chức năng; phạm vi khách/kho/quỹ/bộ phận cấu hình ở [PHÂN PHẠM VI DỮ LIỆU CHO NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-2-phan-pham-vi-du-lieu-cho-nhan-vien/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Mở chức năng

**Thiết lập nội bộ → Phân quyền chức năng** — `/thiet-lap/nguoi-dung`

## 2. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![PHÂN QUYỀN — quyền hiện có của tài khoản đã che tên; chỉ xem, không đánh dấu hoặc OK.](/posts/2026-11-07-ht-a02-1-phan-quyen-chuc-nang/ui-20261026-ht-a02-quyen-permissions-selection.png)

Chuột phải tài khoản → **Phân quyền chức năng** mở **PHÂN QUYỀN: <họ tên>**. Lưới quyền có ô chọn, các dòng quyền đã cấp được đánh dấu; nút **OK**, **Hủy**.

## 3. Trình tự công việc

Xác định phạm vi → Chọn dữ liệu → Thực hiện theo quyền → Đối chiếu kết quả

## 4. Thực hiện trên phần mềm

1. Xác định tài khoản cần cấp quyền, mở **Phân quyền chức năng** từ đúng dòng.
2. Kiểm tra các quyền đã chọn. Chọn quyền truy cập màn và đúng quyền hành động cần dùng; bỏ chọn quyền cần thu hồi.
3. Kiểm tra toàn bộ lựa chọn, kể cả các dòng bị ẩn do lọc; bấm **OK** để cập nhật tập quyền.
4. Kiểm tra thông báo **Đã phân quyền thành công.**; sau đó thử bằng chính tài khoản được cấp trên màn mục tiêu. **Hủy** đóng cửa sổ, không phải thao tác hoàn tác lần OK trước.

## 5. Giải thích các thông tin trên màn hình

- **Ô chọn quyền**: Ý nghĩa / quy tắc: Danh sách mã quyền sẽ lưu cho tài khoản; các quyền cha chỉ là nhóm, danh sách cấp hiển thị quyền con.
- **Quyền truy cập / hành động**: Ý nghĩa / quy tắc: Cần phù hợp cả mở màn và thêm/sửa/xóa/in/xuất tương ứng.
- **OK**: Ý nghĩa / quy tắc: Gửi toàn bộ danh sách quyền đang chọn, không chỉ những dòng đang nhìn.
- **Hủy**: Ý nghĩa / quy tắc: Đóng cửa sổ; không thu hồi thay đổi đã bấm OK.

## 6. Kiểm tra sau khi thực hiện

Tập quyền của tài khoản được cập nhật theo lựa chọn; phải kiểm chứng lại menu và thao tác ở tài khoản đích.

## 7. Những điều cần lưu ý

⚠️ Chọn ít quyền nhất đủ cho công việc. Không sao chép toàn quyền quản trị chỉ để làm hiện một nút. Giữ lại ghi nhận tập quyền trước khi thay đổi nếu cần đối chiếu.

## 8. Câu hỏi thường gặp

**Được xem màn nhưng không sửa được?** Kiểm tra thêm quyền hành động của màn đó và phạm vi dữ liệu.

**Cấp quyền chức năng có tự cấp mọi kho?** Không; phân kho là luồng riêng.

## 9. Công việc tiếp theo

Đối chiếu kết quả và lưu kỳ/phạm vi đã kiểm tra. [TỔNG QUAN NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-0-tong-quan-nhan-vien/); [PHÂN PHẠM VI DỮ LIỆU CHO NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-2-phan-pham-vi-du-lieu-cho-nhan-vien/); [SAO CHÉP PHÂN QUYỀN](/bai-viet/2026-11-07-ht-a02-3-sao-chep-phan-quyen/).

## 10. Bài hướng dẫn liên quan

[TỔNG QUAN NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-0-tong-quan-nhan-vien/); [PHÂN PHẠM VI DỮ LIỆU CHO NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-2-phan-pham-vi-du-lieu-cho-nhan-vien/); [SAO CHÉP PHÂN QUYỀN](/bai-viet/2026-11-07-ht-a02-3-sao-chep-phan-quyen/).
