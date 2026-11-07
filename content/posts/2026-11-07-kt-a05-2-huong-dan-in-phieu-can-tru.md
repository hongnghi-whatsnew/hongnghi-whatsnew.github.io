---
title: "HƯỚNG DẪN IN PHIẾU CẤN TRỪ"
date: "2026-11-07"
summary: "Phiếu cấn trừ in ra để hai bên (công ty và đối tác) ký xác nhận việc bù trừ công nợ."
module: "Kế toán"
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

## Chức năng này dùng để làm gì?

Phiếu cấn trừ in ra để hai bên (công ty và đối tác) ký xác nhận việc bù trừ công nợ. Hệ thống có **2 mẫu in**:

- Loại **Khách hàng - Nhà cung cấp**.
- Loại **Khách hàng - Đơn vị gia công**.

Các loại còn lại (**Đơn vị gia công - Nhà cung cấp**, **Khách hàng**, **Nhà cung cấp**, **Đơn vị gia công**) **chưa có mẫu in**.

In phiếu không làm thay đổi công nợ hay sổ sách.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Phiếu cấn trừ đã được lưu, loại **Khách hàng - Nhà cung cấp** hoặc **Khách hàng - Đơn vị gia công**.
- Danh mục khách hàng có đủ địa chỉ, điện thoại, người đại diện (thông tin in lên phiếu).

## 2. Mở chức năng

**Kế toán → Phiếu cấn trừ → chuột phải vào dòng phiếu → In phiếu cấn trừ**

## 3. Nhận biết màn hình

- **Thanh công cụ xem trước**: Ý nghĩa: In, lưu file, phóng to / thu nhỏ ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/))
- **Nút Đóng**: Ý nghĩa: Đóng cửa sổ xem trước
- **Trang in**: Ý nghĩa: Logo, tên chi nhánh, ngày cấn trừ, mã phiếu, các đối tượng, số tiền, số tiền bằng chữ, ghi chú, người in, giờ in

Đã tra kỳ 01/01/2020–31/12/2026, chuột phải CT00110577 ngày 30/07/2022 và chọn In phiếu cấn trừ. Menu tồn tại nhưng cửa sổ kết quả trắng, không tải được bản in để đối chiếu. Không sửa hoặc lập lại chứng từ. Ảnh trong bài chỉ minh họa menu in.

![Menu in chứng từ lịch sử CT00110577, chỉ đọc](/posts/2026-11-07-kt-a05-2-huong-dan-in-phieu-can-tru/hinh-01-20261030-kt-a05-2-menu-in.png)

## 4. Trình tự công việc

```text
Lập phiếu cấn trừ (KT-A05.1)
      ↓
Chuột phải → In phiếu cấn trừ
      ↓
Kiểm tra bản xem trước → In
      ↓
Công ty và đối tác ký → lưu hồ sơ
```

### Bước 1 – Chọn phiếu

Vào **Kế toán → Phiếu cấn trừ**, chọn khoảng ngày, tìm phiếu cần in.

### Bước 2 – Mở bản xem trước

Chuột phải vào dòng phiếu → **In phiếu cấn trừ**. Theo luồng mô tả, cửa sổ xem trước được yêu cầu mở. Hình hiện có chỉ là menu in; lần thử 30/10/2026 trả màn trắng, chưa chứng minh tải được bản xem trước.

### Bước 3 – Kiểm tra và in

Kiểm tra tên đối tượng, số tiền, số tiền bằng chữ. Bấm biểu tượng in trên thanh công cụ ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)). Bấm **Đóng** để thoát.

Sai thông tin: bấm **Đóng**, sửa phiếu ([HƯỚNG DẪN LẬP PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-1-huong-dan-lap-phieu-can-tru/)) hoặc danh mục khách hàng, rồi in lại.

## 6. Kiểm tra sau khi thực hiện

Khi tải mẫu thành công sẽ có bản in để hai bên ký; lần quan sát 30/10/2026 còn trắng nên kết quả in chưa được xác nhận. Thao tác mở/in không chủ đích sửa công nợ hoặc sổ sách.

## 7. Những điều cần lưu ý

⚠️ Mục **In phiếu cấn trừ** hiện cho **mọi** loại phiếu, nhưng chỉ 2 loại có mẫu. Loại khác sẽ không ra bản in đúng – lập biên bản ngoài hệ thống.

⚠️ Số tiền bằng chữ đọc từ **Số tiền cấn trừ**.

### Cửa sổ xem trước trắng / không có nội dung 

Nguyên nhân: phiếu thuộc loại chưa có mẫu in (Đơn vị gia công - Nhà cung cấp, Khách hàng, Nhà cung cấp, Đơn vị gia công).
Cách xử lý: bấm **Đóng**; lập biên bản cấn trừ ngoài hệ thống hoặc đề nghị IT bổ sung mẫu.

### Cửa sổ xem trước lỗi với phiếu Khách hàng - Nhà cung cấp / Khách hàng - Đơn vị gia công (Lỗi hệ thống)

Nguyên nhân: không tải được mẫu in hoặc dữ liệu phiếu.
Cách xử lý: tải lại trang (F5), in lại; vẫn lỗi thì báo IT ([LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/)).

## 9. Câu hỏi thường gặp

**In phiếu cấn trừ một đối tượng (xoá nợ) được không?**
Hiện chưa có mẫu. Lập biên bản ngoài hệ thống và ghi số biên bản vào **GHI CHÚ** của phiếu.

## 10. Công việc tiếp theo

**Tiếp theo:** kiểm tra công nợ sau cấn trừ ở [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/) (khách hàng), [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NHÀ CUNG CẤP](/bai-viet/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/) (nhà cung cấp), [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ GIA CÔNG](/bai-viet/2026-11-07-kt-c02-0-tong-quan-man-hinh-thong-ke-cong-no-gia-cong/) (gia công).

## 11. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-0-tong-quan-man-hinh-phieu-can-tru/) – Tổng quan màn hình Phiếu cấn trừ
- [HƯỚNG DẪN LẬP PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-1-huong-dan-lap-phieu-can-tru/) – Hướng dẫn lập phiếu cấn trừ
