---
title: "HƯỚNG DẪN IN HỢP ĐỒNG"
date: "2026-11-07"
summary: "Chức năng In phiếu trên màn hình Hợp đồng in văn bản hợp đồng đã soạn ở HƯỚNG DẪN LẬP HỢP ĐỒNG BÁN HÀNG."
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

Chức năng **In phiếu** trên màn hình **Hợp đồng** in **văn bản hợp đồng** đã soạn ở [HƯỚNG DẪN LẬP HỢP ĐỒNG BÁN HÀNG](/bai-viet/2026-11-07-bh-a01-1-huong-dan-lap-hop-dong-ban-hang/). Trước khi in, hệ thống thay các mã {0}…{13} trong văn bản bằng thông tin hợp đồng, chi nhánh và khách hàng (số hợp đồng, ngày ký, tên / địa chỉ / mã số thuế công ty và khách…).

Khác với các phiếu khác, hợp đồng **không** dùng cửa sổ xem trước của [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/): hệ thống mở một cửa sổ toàn màn hình có khung **In** chứa văn bản đã thay mã, rồi gọi ngay **hộp thoại in của trình duyệt**.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Đang làm việc ở **chi nhánh** muốn in tên công ty ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Máy tính đã cài máy in hoặc chọn *Lưu dưới dạng PDF*.

## 2. Mở chức năng

**Bán hàng → Hợp đồng → chuột phải vào dòng hợp đồng → In phiếu**

## 3. Nhận biết màn hình

![Hình 1: Menu chuột phải trên dòng hợp đồng](/posts/2026-11-07-bh-a01-2-huong-dan-in-hop-dong/hinh-01-menu-in-phieu.png)

- **In phiếu**: Ý nghĩa: Mục menu chuột phải trên dòng hợp đồng (cùng **Xem lại**, **File đính kèm**)

![Hình 2: Cửa sổ In với văn bản hợp đồng đã thay mã](/posts/2026-11-07-bh-a01-2-huong-dan-in-hop-dong/hinh-02-cua-so-in-hop-dong.png)

- **Khung In**: Ý nghĩa: Văn bản hợp đồng đã thay mã {0}…{13} bằng dữ liệu thật
- **Nút phóng to / ✕**: Ý nghĩa: ✕ đóng cửa sổ sau khi in xong

Hộp thoại in của trình duyệt (chọn máy in / Lưu PDF, số bản, khổ giấy) mở chồng lên cửa sổ này.

## 4. Trình tự công việc

```text
Chuột phải dòng hợp đồng → In phiếu
      ↓
Hệ thống thay mã {0}…{13} bằng dữ liệu → cửa sổ In + hộp thoại in của trình duyệt
      ↓
Chọn máy in / Lưu PDF → In → ✕ đóng cửa sổ In
```

### Bước 1 – Mở lệnh in

Ở **HỢP ĐỒNG - DANH SÁCH**, chuột phải vào dòng hợp đồng → **In phiếu**.

### Bước 2 – In

Cửa sổ toàn màn hình có khung **In** hiện văn bản đã thay mã (Hình 2), đồng thời hộp thoại in của trình duyệt mở ra. Trước khi xác nhận in, kiểm tra số hợp đồng, ngày ký, tên công ty/khách và các mã đã được thay trong phần xem trước. Chọn máy in hoặc *Lưu dưới dạng PDF*, khổ giấy A4, rồi bấm **In** / **Lưu**. In xong, bấm ✕  ở góc trên phải để đóng cửa sổ In.

### Bước 3 – Kiểm tra bản in

Đối chiếu số hợp đồng, ngày ký (in dạng *ngày 11 tháng 10 năm 2026*), tên khách. Nếu thấy còn mã dạng `{9}` chưa được thay, kiểm tra lại mã trong văn bản ([HƯỚNG DẪN LẬP HỢP ĐỒNG BÁN HÀNG](/bai-viet/2026-11-07-bh-a01-1-huong-dan-lap-hop-dong-ban-hang/)).

## 6. Giải thích các thông tin trên màn hình

Bảng mã thay thế {0}…{13}: xem **Bước 3 của bài [HƯỚNG DẪN LẬP HỢP ĐỒNG BÁN HÀNG](/bai-viet/2026-11-07-bh-a01-1-huong-dan-lap-hop-dong-ban-hang/)**.

## 7. Kiểm tra sau khi thực hiện

Văn bản hợp đồng được in hoặc lưu PDF. Dữ liệu hợp đồng không thay đổi.

## 8. Những điều cần lưu ý

⚠️ Thông tin công ty trên bản in lấy theo **chi nhánh đang làm việc lúc in**.

### Bản in trống hoặc không mở hộp thoại in 

Kiểm tra: hợp đồng đã có văn bản và đã lưu cả cửa sổ văn bản lẫn hợp đồng chưa; nếu đã có, kiểm tra quyền mở hộp thoại in và kết nối. Không kết luận thiếu văn bản chỉ từ hiện tượng trang trống.
Cách xử lý: **Sửa** hợp đồng → **Văn bản HĐ** → soạn nội dung → **Lưu lại** hai lần ([HƯỚNG DẪN LẬP HỢP ĐỒNG BÁN HÀNG](/bai-viet/2026-11-07-bh-a01-1-huong-dan-lap-hop-dong-ban-hang/)).

### Bản in còn chữ dạng {5} 

Nguyên nhân: mã đó không có dữ liệu (ví dụ chi nhánh chưa khai báo Fax) hoặc gõ sai mã.
Cách xử lý: bổ sung dữ liệu hoặc sửa mã trong văn bản.

## 10. Câu hỏi thường gặp

**In nhiều bản cho hai bên thế nào?**
Chọn số bản trong hộp thoại in của trình duyệt.

## 11. Công việc tiếp theo

Gửi khách ký, rồi **Sửa** hợp đồng đổi **TRẠNG THÁI** sang *Đã gửi* / *Đã nhận* ([HƯỚNG DẪN LẬP HỢP ĐỒNG BÁN HÀNG](/bai-viet/2026-11-07-bh-a01-1-huong-dan-lap-hop-dong-ban-hang/)) và đính kèm bản scan ([HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH HỢP ĐỒNG](/bai-viet/2026-11-07-bh-a01-0-tong-quan-man-hinh-hop-dong/) – Tổng quan màn hình Hợp đồng
- [HƯỚNG DẪN LẬP HỢP ĐỒNG BÁN HÀNG](/bai-viet/2026-11-07-bh-a01-1-huong-dan-lap-hop-dong-ban-hang/) – Hướng dẫn lập hợp đồng bán hàng
