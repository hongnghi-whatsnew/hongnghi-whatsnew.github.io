---
title: "HƯỚNG DẪN IN PHIẾU BÁN HÀNG VÀ BẢNG BÁO GIÁ"
date: "2026-11-07"
summary: "Từ một phiếu bán hàng, bạn in được 8 mẫu khác nhau qua menu chuột phải: 5 mẫu PHIẾU BÁN HÀNG (khác nhau ở cách thể hiện giá), 1 mẫu PHIẾU Y/C XUẤT KHO NỘI BỘ cho kho soạn hàng, và 2 mẫu BẢNG BÁO GIÁ gửi khách."
module: "Bán hàng"
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

Từ một phiếu bán hàng, bạn in được 8 mẫu khác nhau qua menu chuột phải: 5 mẫu **PHIẾU BÁN HÀNG** (khác nhau ở cách thể hiện giá), 1 mẫu **PHIẾU Y/C XUẤT KHO NỘI BỘ** cho kho soạn hàng, và 2 mẫu **BẢNG BÁO GIÁ** gửi khách. Bản in mở trong cửa sổ xem trước, từ đó in hoặc tải về ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)).

Nếu phiếu có chọn **TÀI KHOẢN** ngân hàng ([HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/)), bản in có **mã QR chuyển khoản** với số tiền bằng tổng tiền phiếu.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Phiếu bán hàng đã lưu.
- Đang làm việc đúng **chi nhánh** (logo và thông tin công ty trên bản in lấy theo chi nhánh đang truy cập).

## 2. Mở chức năng

**Bán hàng → Phiếu bán hàng → chuột phải vào dòng phiếu → chọn mẫu In…**

## 3. Nhận biết màn hình

![Hình 1: Menu chuột phải các mẫu in của phiếu bán hàng](/posts/2026-11-07-bh-a03-6-huong-dan-in-phieu-ban-hang-va-bang-bao-gia/hinh-01-menu-in-phieu-ban-hang.png)

**Các mẫu in:**

- **In phiếu - Đơn giá chưa VAT**: Tiêu đề bản in: PHIẾU BÁN HÀNG; Dùng khi: Gửi khách, thể hiện đơn giá chưa thuế
- **In phiếu - Đơn giá 0% VAT**: Tiêu đề bản in: PHIẾU BÁN HÀNG; Dùng khi: Phiếu thể hiện giá VAT 0%
- **In phiếu - Đơn giá có VAT**: Tiêu đề bản in: PHIẾU BÁN HÀNG; Dùng khi: Thể hiện đơn giá đã gồm VAT
- **In phiếu - Không Giá**: Tiêu đề bản in: PHIẾU BÁN HÀNG; Dùng khi: Giao hàng kèm phiếu, không lộ giá
- **In phiếu - Đơn giá chiết khấu**: Tiêu đề bản in: PHIẾU BÁN HÀNG; Dùng khi: Thể hiện đơn giá và chiết khấu
- **In phiếu - Soạn Hàng**: Tiêu đề bản in: PHIẾU Y/C XUẤT KHO NỘI BỘ; Dùng khi: Kho soạn hàng trước khi xuất
- **In Bảng Báo Giá**: Tiêu đề bản in: BẢNG BÁO GIÁ; Dùng khi: Báo giá cho khách
- **In Bảng Báo Giá Có Số Lượng**: Tiêu đề bản in: BẢNG BÁO GIÁ; Dùng khi: Báo giá kèm số lượng

![Hình 2: Bản in PHIẾU BÁN HÀNG trong cửa sổ xem trước](/posts/2026-11-07-bh-a03-6-huong-dan-in-phieu-ban-hang-va-bang-bao-gia/hinh-02-ban-in-phieu-ban-hang.png)

- **Thanh công cụ xem trước**: Ý nghĩa: **In**, **Xuất**, chuyển trang, phóng to… ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)); **Sửa mẫu**, **Đóng** ở cuối thanh
- **Phần đầu phiếu**: Ý nghĩa: Logo, thông tin chi nhánh, **Thời gian in**, ngày bán, **Kho Xuất**, **Mã Phiếu**, **Nhân viên kinh doanh**, **Khách hàng**, **Điện thoại**, **Địa chỉ giao**, **Ghi chú**
- **Bảng hàng hoá**: Ý nghĩa: **STT**, **Tên sản phẩm** (theo Tên in), **GC**, **Đvt**, **SL**, **Đơn giá**, **Thành tiền**, **Ghi chú**; dòng **TỔNG CỘNG**
- **Bằng chữ**: Ý nghĩa: Tổng tiền viết bằng chữ
- **Thông tin chuyển khoản**: Ý nghĩa: Mã QR, chủ tài khoản, số tài khoản, ngân hàng – chỉ có khi phiếu chọn **TÀI KHOẢN**

## 4. Trình tự công việc

```text
Chuột phải dòng phiếu → chọn mẫu In…
      ↓
Cửa sổ xem trước (tiêu đề: IN PHIẾU YÊU CẦU XUẤT KHO / IN BẢNG BÁO GIÁ…)
      ↓
In / Tải PDF (GEN-06) → Đóng
```

### Bước 1 – Chọn mẫu in

Ở **PHIẾU BÁN HÀNG - DANH SÁCH**, chuột phải vào dòng phiếu (Hình 1), chọn mẫu phù hợp theo bảng ở phần “Nhận biết màn hình”.

### Bước 2 – Kiểm tra bản in

Cửa sổ xem trước mở ra (Hình 2 – mẫu **In phiếu - Đơn giá có VAT**: cột **Đơn giá** đã gồm VAT, ví dụ 177.120,0). Kiểm tra đúng mẫu, khách, số lượng còn thực hiện, các dòng hàng (in theo **Tên in**, ví dụ *MDF Premium LBR E2 9mm X 1220 X 2440 DW*), đơn giá, tổng tiền, số tiền bằng chữ, khối thông tin chuyển khoản (nếu có).

Nếu dòng/tổng/bằng chữ không khớp phiếu đã lưu (nhất là phiếu có tất toán), dừng gửi bản in và nhờ người phụ trách xử lý mẫu. Chọn mẫu **0% VAT** chỉ chọn cách in, không thay thuế trên phiếu.

### Bước 3 – In hoặc tải

Dùng thanh công cụ  để in hoặc tải về ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)). Bấm **Đóng** ở cuối thanh công cụ để đóng.

## 6. Giải thích các thông tin trên màn hình

- **Logo, tên / địa chỉ / MST công ty**: Lấy từ: Chi nhánh đang làm việc
- **Ngày lập phiếu**: Lấy từ: **NGÀY BÁN HÀNG**
- **Tên hàng**: Lấy từ: **Tên in** của từng dòng
- **Đơn giá VAT**: Lấy từ: Đơn giá × (1 − chiết khấu) × (1 + VAT)
- **Thành tiền trên bản in**: Lấy từ: Đơn giá (VAT) × (Số lượng + Số lượng lô)
- **Tổng tiền bằng chữ**: Lấy từ: **Tổng tiền** phiếu, làm tròn
- **Thời gian in, người in**: Lấy từ: Lúc bấm in, tài khoản đang đăng nhập
- **Mã QR**: Lấy từ: Số tài khoản ở ô **TÀI KHOẢN**, số tiền = tổng tiền, nội dung *THANH TOAN <mã phiếu>*

## 7. Kiểm tra sau khi thực hiện

Có bản in theo mẫu đã chọn. Dữ liệu phiếu không thay đổi.

## 8. Những điều cần lưu ý

⚠️ In phiếu **không** cần duyệt giá. Phiếu chưa duyệt có thể còn bị sửa giá – nên in gửi khách sau khi **Đã duyệt**.

⚠️ Phiếu in ở chi nhánh khác sẽ mang logo / thông tin của chi nhánh đang truy cập.

### Không có mã QR trên bản in 

Nguyên nhân: phiếu chưa chọn **TÀI KHOẢN**, hoặc tài khoản chưa khai báo mã ngân hàng.
Cách xử lý: **Sửa** phiếu (khi còn sửa được) chọn tài khoản; hoặc nhờ kế toán bổ sung mã ngân hàng cho tài khoản.

### Cửa sổ xem trước trống hoặc không tải được mẫu (Lỗi hệ thống)

Nguyên nhân: không tải được tệp mẫu in hoặc logo chi nhánh.
Cách xử lý: đóng cửa sổ, thử lại; vẫn lỗi thì báo IT ([LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/)).

## 10. Câu hỏi thường gặp

**Bảng báo giá có cần lập phiếu bán hàng trước không?**
Có. Bảng báo giá in từ một phiếu bán hàng đã lưu. Khách chưa chốt thì lưu ý phiếu đã giữ hàng trong kho ([HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/) phần “Những điều cần lưu ý”).

## 11. Công việc tiếp theo

Gửi phiếu / báo giá cho khách; chuyển **phiếu soạn hàng** cho thủ kho; thủ kho lập phiếu xuất kho ([HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/)) khi phiếu đã duyệt giá.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/) – Tổng quan màn hình Phiếu bán hàng
- [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/) – Hướng dẫn lập phiếu bán hàng
- [HƯỚNG DẪN IN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-4-huong-dan-in-phieu-xuat-kho/) – Hướng dẫn in phiếu xuất kho
