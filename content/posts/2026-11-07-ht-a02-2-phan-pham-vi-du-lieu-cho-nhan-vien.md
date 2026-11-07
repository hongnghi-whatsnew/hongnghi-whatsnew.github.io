---
title: "PHÂN PHẠM VI DỮ LIỆU CHO NHÂN VIÊN"
date: "2026-11-07"
summary: "Giới hạn nhóm khách, kho, quỹ/tài khoản và bộ phận lương mà nhân viên được thao tác / xem theo thiết lập của từng nghiệp vụ."
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

Giới hạn nhóm khách, kho, quỹ/tài khoản và bộ phận lương mà nhân viên được thao tác / xem theo thiết lập của từng nghiệp vụ.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Mở chức năng

**Thiết lập nội bộ → Phân phạm vi dữ liệu cho nhân viên** — `/thiet-lap/nguoi-dung`

## 2. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![PHÂN KHO HÀNG — phạm vi đang hiển thị, chỉ xem; đã che thông tin định danh.](/posts/2026-11-07-ht-a02-2-phan-pham-vi-du-lieu-cho-nhan-vien/ui-20261026-ht-a02-pham-vi-kho-warehouse-scope.png)

![PHÂN NHÓM KHÁCH HÀNG — phạm vi đang hiển thị, chỉ xem; đã che thông tin định danh.](/posts/2026-11-07-ht-a02-2-phan-pham-vi-du-lieu-cho-nhan-vien/ui-20261026-ht-a02-pham-vi-khach-customer-group-scope.png)

Mỗi menu mở một lưới chọn riêng cho tài khoản: **PHÂN NHÓM KHÁCH HÀNG**, **PHÂN KHO HÀNG**, **PHÂN QUỸ**, **PHÂN BỘ PHẬN (LƯƠNG)**. Các hộp có **OK** và **Hủy**, số **Đã chọn**.

## 3. Trình tự công việc

Xác định phạm vi → Chọn dữ liệu → Thực hiện theo quyền → Đối chiếu kết quả

## 4. Thực hiện trên phần mềm

1. Chọn đúng nhân viên, rồi mở menu phạm vi cần thay.
2. Đánh dấu các nhóm khách / kho / quỹ / bộ phận cần cấp; bỏ dấu ở phạm vi cần thu hồi. Kiểm tra số **Đã chọn**, kể cả lựa chọn ngoài dòng đang lọc.
3. Bấm **OK** để lưu riêng loại phạm vi đó. Kiểm tra thông báo **Đã phân nhóm thành công.**, **Đã phân kho thành công.**, **Đã phân quỹ thành công.** hoặc **Đã phân bộ phận thành công.**
4. Lặp lại với loại phạm vi khác khi cần. Đăng nhập bằng tài khoản đích để kiểm tra dữ liệu đúng nghiệp vụ; không suy một loại phạm vi thay cho loại còn lại.

## 5. Giải thích các thông tin trên màn hình

- **Tên nhóm / Ghi chú / Mã**: Ý nghĩa / quy tắc: Phạm vi nhóm khách; Mã có thể ẩn.
- **Tên kho / Ghi chú / Mã**: Ý nghĩa / quy tắc: Phạm vi kho.
- **Tên quỹ / Ghi chú / Mã**: Ý nghĩa / quy tắc: Phạm vi quỹ, tài khoản.
- **Bộ phận / Công thức lương / Mô tả**: Ý nghĩa / quy tắc: Phạm vi bộ phận nhân sự để xem số liệu lương.
- **Ô chọn / Đã chọn**: Ý nghĩa / quy tắc: Tập mục sẽ lưu; không phải chỉ dòng đang có con trỏ.
- **OK**: Ý nghĩa / quy tắc: Lưu tập phạm vi của hộp đang mở, không tự lưu hộp khác.

## 6. Kiểm tra sau khi thực hiện

Tài khoản có các tập phạm vi dữ liệu được chọn; quyền chức năng giữ vai trò riêng.

## 7. Câu hỏi thường gặp

**Có quyền mở thống kê nhưng không thấy khách cần tìm?** Kiểm tra nhóm khách đã phân, kỳ và chi nhánh.

**Phân bộ phận có cấp quyền xem toàn bộ lương?** Còn phụ thuộc quyền chức năng và nghiệp vụ; phải kiểm chứng bằng tài khoản đích.

## 8. Công việc tiếp theo

Đối chiếu kết quả và lưu kỳ/phạm vi đã kiểm tra. [TỔNG QUAN NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-0-tong-quan-nhan-vien/); [PHÂN QUYỀN CHỨC NĂNG](/bai-viet/2026-11-07-ht-a02-1-phan-quyen-chuc-nang/); [SAO CHÉP PHÂN QUYỀN](/bai-viet/2026-11-07-ht-a02-3-sao-chep-phan-quyen/).

## 9. Bài hướng dẫn liên quan

[TỔNG QUAN NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-0-tong-quan-nhan-vien/); [PHÂN QUYỀN CHỨC NĂNG](/bai-viet/2026-11-07-ht-a02-1-phan-quyen-chuc-nang/); [SAO CHÉP PHÂN QUYỀN](/bai-viet/2026-11-07-ht-a02-3-sao-chep-phan-quyen/).
