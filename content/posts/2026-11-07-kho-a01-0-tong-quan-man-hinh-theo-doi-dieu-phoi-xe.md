---
title: "TỔNG QUAN MÀN HÌNH THEO DÕI ĐIỀU PHỐI XE"
date: "2026-11-07"
summary: "Màn hình Theo dõi điều phối xe mở bảng tính Google Sheet điều phối xe của công ty ngay bên trong ERP, để thủ kho và bộ phận giao hàng xem / cập nhật lịch xe mà không phải mở trình duyệt riêng."
module: "Kho hàng"
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

Màn hình **Theo dõi điều phối xe** mở **bảng tính Google Sheet điều phối xe** của công ty ngay bên trong ERP, để thủ kho và bộ phận giao hàng xem / cập nhật lịch xe mà không phải mở trình duyệt riêng.

ERP chỉ **nhúng** bảng tính: dữ liệu nằm trên Google Sheet, không lưu trong ERP, không liên kết với phiếu xuất kho, xe hay tài xế trong danh mục. Mọi thao tác (nhập dòng, lọc, tô màu…) làm theo cách dùng Google Sheet.

Thao tác dùng chung liên quan: [HƯỚNG DẪN BỐ CỤC MÀN HÌNH VÀ TÌM CHỨC NĂNG](/bai-viet/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Theo dõi điều phối xe**.
- Trình duyệt đang **đăng nhập tài khoản Google** đã được chia sẻ bảng tính điều phối xe.
- Máy có kết nối Internet tới Google.

## 2. Mở chức năng

**Kho hàng → Theo dõi điều phối xe**

## 3. Nhận biết màn hình

Thanh đường dẫn phía trên hiện **Hồng Nghi › Kho hàng - Theo dõi điều phối xe**; tab trình duyệt hiện **THEO DÕI ĐIỀU PHỐI**.

Toàn bộ vùng nội dung bên phải menu là khung hiển thị Google Sheet. Màn hình không có nút, bộ lọc hay danh sách của ERP.

- **Trình duyệt đã đăng nhập Google có quyền với bảng tính**: Màn hình hiện: Bảng tính điều phối xe, dùng như trên Google Sheet
- **Trình duyệt chưa đăng nhập Google**: Màn hình hiện: Trang **Đăng nhập vào Tài khoản Google** với dòng *Bạn phải đăng nhập để truy cập nội dung này* và nút **Đăng nhập**
- **Đã đăng nhập Google nhưng chưa được chia sẻ**: Màn hình hiện: Trang báo cần quyền truy cập của Google

![Trang điều phối yêu cầu đăng nhập Google, chưa xem nội dung bảng](/posts/2026-11-07-kho-a01-0-tong-quan-man-hinh-theo-doi-dieu-phoi-xe/hinh-01-20261030-kho-a01-0-yeu-cau-dang-nhap.png)

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kho hàng
   ↓
Theo dõi điều phối xe
```

```text
Kho hàng → Theo dõi điều phối xe
      ↓
Trình duyệt đã đăng nhập Google? ── Chưa ──► Đăng nhập Google rồi mở lại màn
      ↓ Có
Có quyền với bảng tính? ── Chưa ──► Xin người quản lý bảng tính chia sẻ
      ↓ Có
Xem / cập nhật lịch xe trên Google Sheet
```

### Bước 1 – Mở màn hình

Vào **Kho hàng → Theo dõi điều phối xe**. Khung Google Sheet tải trong vùng nội dung.

### Bước 2 – Đăng nhập Google (nếu được yêu cầu)

Nếu thấy trang **Đăng nhập vào Tài khoản Google**, bấm **Đăng nhập** và đăng nhập bằng tài khoản Google công ty đã được chia sẻ bảng tính. Sau đó mở lại menu **Theo dõi điều phối xe**.

Nếu trình duyệt chặn đăng nhập trong khung, mở một tab mới, đăng nhập Google ở đó, rồi quay lại tải lại màn hình.

### Bước 3 – Xem và cập nhật lịch xe

Thao tác trực tiếp trên bảng tính như khi dùng Google Sheet. Thay đổi được lưu trên Google Sheet, người khác mở cùng bảng tính sẽ thấy.

## 6. Kiểm tra sau khi thực hiện

Bạn mở được bảng tính điều phối xe ngay trong ERP và biết cần đăng nhập Google / xin quyền khi bảng tính không hiện.

## 7. Những điều cần lưu ý

⚠️ Bảng tính điều phối xe **không đồng bộ** với ERP: xe, tài xế, phiếu xuất kho trong ERP không tự cập nhật theo bảng tính và ngược lại.

⚠️ Ai có quyền sửa bảng tính trên Google thì sửa được ngay trong ERP. Quyền xem / sửa do người quản lý Google Sheet cấp, không do quyền ERP.

⚠️ Địa chỉ bảng tính được đặt cố định trong chương trình. Muốn đổi sang bảng tính khác phải nhờ bộ phận IT.

### Màn hình hiện "Đăng nhập vào Tài khoản Google" 

Nguyên nhân: trình duyệt chưa đăng nhập Google.
Cách xử lý: bấm **Đăng nhập**, dùng tài khoản Google đã được chia sẻ bảng tính.

### Màn hình báo cần quyền truy cập 

Nguyên nhân: tài khoản Google đang dùng chưa được chia sẻ bảng tính.
Cách xử lý: liên hệ người quản lý bảng tính điều phối xe để được chia sẻ.

### Không thấy menu Theo dõi điều phối xe 

Kiểm tra: quyền **Truy cập** màn hình Theo dõi điều phối xe.
Cách xử lý: liên hệ quản trị hệ thống.

## 9. Câu hỏi thường gặp

**Sửa trên màn hình này có lưu vào ERP không?**
Không. Dữ liệu chỉ lưu trên Google Sheet.

**Có thể mở bảng tính ngoài ERP không?**
Có, bằng Google Sheet trên trình duyệt hoặc điện thoại, với cùng tài khoản Google được chia sẻ.

## 10. Công việc tiếp theo

Lập phiếu xuất kho cho chuyến xe đã điều phối: KHO-A05 – Phiếu xuất kho (chọn **Xe**, **Tài xế** trong phiếu).

## 11. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MODULE KHO HÀNG VÀ THỨ TỰ SỬ DỤNG](/bai-viet/2026-11-07-kho-00-tong-quan-module-kho-hang-va-thu-tu-su-dung/) – Tổng quan phân hệ Kho hàng và thứ tự sử dụng
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
