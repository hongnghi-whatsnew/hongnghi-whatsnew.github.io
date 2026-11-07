---
title: "SAO CHÉP PHÂN QUYỀN"
date: "2026-11-07"
summary: "Lấy một hoặc nhiều loại quyền của tài khoản nguồn để thay thế tập quyền tương ứng của tài khoản đích."
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

Lấy một hoặc nhiều loại quyền của tài khoản nguồn để thay thế tập quyền tương ứng của tài khoản đích.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Mở chức năng

**Thiết lập nội bộ → Sao chép phân quyền** — `/thiet-lap/nguoi-dung`

## 2. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![SAO CHÉP QUYỀN — lựa chọn mặc định; chưa chọn người dùng nguồn, chưa OK.](/posts/2026-11-07-ht-a02-3-sao-chep-phan-quyen/ui-20261026-ht-a02-sao-chep-copy-permission-options.png)

Chuột phải tài khoản đích → **Sao chép phân quyền** mở **SAO CHÉP QUYỀN → <họ tên đích>**. Chọn **Người dùng nguồn** và các mục **Loại quyền sao chép**; **OK**, **Hủy**.

## 3. Trình tự công việc

Xác định phạm vi → Chọn dữ liệu → Thực hiện theo quyền → Đối chiếu kết quả

## 4. Thực hiện trên phần mềm

1. Xác định đúng tài khoản đích trước khi mở menu. Kiểm tra tên ở tiêu đề.
2. Chọn **Người dùng nguồn** có cấu hình phù hợp.
3. Chọn rõ các loại cần sao chép: **Quyền chức năng**, **Nhóm khách hàng**, **Kho hàng**, **Quỹ / Tài khoản**, **Bộ phận (lương)**. Mặc định cả năm loại đều bật; bỏ các loại không muốn ghi đè.
4. Bấm **OK**, đọc hộp **Xác nhận sao chép quyền**: các loại được chọn sẽ bị ghi đè hoàn toàn. Chỉ xác nhận khi đúng nguồn, đích và phạm vi.
5. Sau **Đã sao chép quyền thành công.**, kiểm tra tài khoản đích ở từng loại đã chọn và thử chức năng liên quan.

## 5. Giải thích các thông tin trên màn hình

- **Người dùng nguồn**: Ý nghĩa / quy tắc: Không gồm chính tài khoản đích; chọn theo họ tên, cần đối chiếu danh tính nếu trùng tên.
- **Năm loại quyền**: Ý nghĩa / quy tắc: Mỗi ô quyết định một tập quyền bị thay thế; không chỉ bổ sung quyền thiếu.
- **Đích**: Ý nghĩa / quy tắc: Tài khoản ở dòng đã mở menu; không thay trong hộp sao chép.
- **Xác nhận sao chép quyền**: Ý nghĩa / quy tắc: Bước kiểm tra cuối trước khi ghi đè.

## 6. Kiểm tra sau khi thực hiện

Các tập quyền đã chọn ở đích được thay bằng tập từ nguồn. Các loại không chọn không nằm trong yêu cầu sao chép.

## 7. Những điều cần lưu ý

⚠️ Đây là ghi đè, có thể làm mất quyền cũ của đích. Không có thao tác hoàn tác tự động trong hộp. Không sao chép lên tài khoản hệ thống.

### "Vui lòng chọn người dùng nguồn." 

Nguyên nhân: chưa chọn tài khoản nguồn.

Cách xử lý: chọn đúng nguồn.

### "Vui lòng chọn ít nhất một loại quyền để sao chép." 

Nguyên nhân: cả năm loại đều bỏ chọn.

Cách xử lý: chọn ít nhất loại cần thay.

### "Không thể ghi đè quyền lên tài khoản hệ thống." 

Nguyên nhân: đích là tài khoản hệ thống.

Cách xử lý: chọn đích thông thường; không tìm cách bỏ giới hạn.

## 9. Câu hỏi thường gặp

**Sao chép có cộng thêm quyền không?** Không; thay toàn bộ từng loại đã chọn.

**Có thể chỉ sao chép kho?** Có; chỉ đánh dấu Kho hàng.

## 10. Công việc tiếp theo

Đối chiếu kết quả và lưu kỳ/phạm vi đã kiểm tra. [PHÂN QUYỀN CHỨC NĂNG](/bai-viet/2026-11-07-ht-a02-1-phan-quyen-chuc-nang/); [PHÂN PHẠM VI DỮ LIỆU CHO NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-2-phan-pham-vi-du-lieu-cho-nhan-vien/).

## 11. Bài hướng dẫn liên quan

[PHÂN QUYỀN CHỨC NĂNG](/bai-viet/2026-11-07-ht-a02-1-phan-quyen-chuc-nang/); [PHÂN PHẠM VI DỮ LIỆU CHO NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-2-phan-pham-vi-du-lieu-cho-nhan-vien/).
