---
title: "HƯỚNG DẪN IN PHIẾU ĐẶT HÀNG"
date: "2026-11-07"
summary: "Chức năng In phiếu đặt hàng in mẫu ĐƠN ĐẶT HÀNG SẢN XUẤT của một phiếu đặt hàng, dùng để chuyển cho bộ phận sản xuất hoặc gửi khách xác nhận."
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

Chức năng **In phiếu đặt hàng** in mẫu **ĐƠN ĐẶT HÀNG SẢN XUẤT** của một phiếu đặt hàng, dùng để chuyển cho bộ phận sản xuất hoặc gửi khách xác nhận. Bản in mở trong cửa sổ xem trước, từ đó in hoặc tải về ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Phiếu đặt hàng đã được lưu.

## 2. Mở chức năng

**Bán hàng → Phiếu đặt hàng → chuột phải vào dòng phiếu → In phiếu đặt hàng**

## 3. Nhận biết màn hình

![Hình 1: Menu chuột phải trên dòng phiếu đặt hàng](/posts/2026-11-07-bh-a02-4-huong-dan-in-phieu-dat-hang/hinh-01-menu-in-phieu-dat-hang.png)

- **In phiếu đặt hàng**: Ý nghĩa: Mục menu chuột phải (cùng **Kích hoạt**, **Xem lại**)

![Hình 2: Bản in ĐƠN ĐẶT HÀNG SẢN XUẤT trong cửa sổ xem trước](/posts/2026-11-07-bh-a02-4-huong-dan-in-phieu-dat-hang/hinh-02-ban-in-don-dat-hang-san-xuat.png)

- **In, Xuất**: Ý nghĩa: In / tải bản in ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/))
- **Bản in**: Ý nghĩa: Mẫu **ĐƠN ĐẶT HÀNG SẢN XUẤT**
- **Đóng**: Ý nghĩa: Đóng cửa sổ xem trước

Nội dung bản in: thông tin công ty; **Ngày đặt hàng**; **Nhân viên kinh doanh**; **Thời gian có hàng dự kiến** (= NGÀY NHẬN HÀNG); **Mã phiếu**; **Khách hàng**; **Ghi Chú**; bảng **STT**, **TÊN HÀNG HÓA**, **SỐ LƯỢNG**, **YÊU CẦU**, **SỐ MẶT**, **ĐVT**, **GHI CHÚ**, dòng **TỔNG CỘNG**; chỗ ký **Bộ phận sản xuất** / **Người lập phiếu**.

## 4. Trình tự công việc

```text
Chuột phải dòng phiếu → In phiếu đặt hàng
      ↓
Cửa sổ xem trước: ĐƠN ĐẶT HÀNG SẢN XUẤT
      ↓
In / Tải PDF (GEN-06)
```

### Bước 1 – Mở bản in

Ở **KHÁCH ĐẶT HÀNG - DANH SÁCH**, chuột phải vào dòng phiếu → **In phiếu đặt hàng**  (Hình 1).

### Bước 2 – Xem và in

Cửa sổ xem trước mở ra với mẫu **ĐƠN ĐẶT HÀNG SẢN XUẤT**  (Hình 2). Kiểm tra khách hàng, thời gian có hàng dự kiến, các dòng hàng / yêu cầu / số mặt, số lượng. Cột **TÊN HÀNG HÓA** in tên **hàng trơn** của dòng (ví dụ *LDF E2 (9x1220x2440) DW*), yêu cầu gia công in ở cột **YÊU CẦU**. In hoặc tải PDF bằng **In** / **Xuất**  ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)), xong bấm **Đóng**.

## 6. Kiểm tra sau khi thực hiện

Có bản in đơn đặt hàng sản xuất. Dữ liệu phiếu không thay đổi.

## 7. Những điều cần lưu ý

⚠️ In phiếu không làm thay đổi trạng thái phiếu. Sản xuất chỉ thấy phiếu trên hệ thống khi phiếu đã **Kích hoạt**.

### Cửa sổ xem trước trống hoặc không tải được mẫu (Lỗi hệ thống)

Nguyên nhân: không tải được tệp mẫu in hoặc mất kết nối.
Cách xử lý: đóng cửa sổ, thử lại; vẫn lỗi thì báo IT ([LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/)).

## 9. Câu hỏi thường gặp

**Có in được nhiều phiếu một lần không?**
Không. Mỗi lần in một phiếu.

## 10. Công việc tiếp theo

Chuyển bản in cho bộ phận sản xuất; nhớ **Kích hoạt** phiếu ([TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-0-tong-quan-man-hinh-phieu-dat-hang/)).

## 11. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-0-tong-quan-man-hinh-phieu-dat-hang/) – Tổng quan màn hình Phiếu đặt hàng
- [HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG SẢN XUẤT](/bai-viet/2026-11-07-bh-a02-1-huong-dan-lap-phieu-dat-hang-san-xuat/) – Hướng dẫn lập phiếu đặt hàng sản xuất
