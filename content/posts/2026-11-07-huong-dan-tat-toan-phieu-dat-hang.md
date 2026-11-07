---
title: "HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG"
date: 2026-11-07
summary: "Khi nhà cung cấp hết hàng hoặc hai bên thống nhất không giao tiếp một phần đơn, bạn sử dụng Tất toán để đóng phần hàng không mua nữa."
module: "Mua hàng"
category: huong-dan
version: "v5.0.0"
isNew: true
scope: "Người dùng được cấp quyền chức năng"
department: ""
mediaType: none
tags: []
pinImportant: false
pinned: false
draft: true
---

## Tất toán phiếu đặt hàng dùng để làm gì?

Khi nhà cung cấp hết hàng hoặc hai bên thống nhất không giao tiếp một phần đơn, bạn sử dụng **Tất toán** để đóng phần hàng không mua nữa.

Ví dụ: đặt 100, đã mua 80 và không mua tiếp 20 còn lại. Khi tất toán 20, phần chờ mua về 0 và trạng thái nhận được tính lại thành **Đã nhận**. Trạng thái này không có nghĩa là kho đã thực nhận đủ 100.

Tất toán không xóa phiếu, không làm thay đổi tồn kho hoặc công nợ. Thành tiền và tổng tiền của đơn đặt được tính lại theo phần còn thực hiện.

## 1. Chuẩn bị trước khi thực hiện

Bạn cần quyền **Truy cập** và **Tất toán** của màn hình **Phiếu đặt hàng**. Phiếu phải còn số lượng chưa mua và phần không mua tiếp đã được xác nhận với nhà cung cấp hoặc người phụ trách.

## 2. Mở phiếu cần tất toán

Vào **Mua hàng → Phiếu đặt hàng**, tìm đúng phiếu rồi chọn **Tất toán** tại cột **Thao tác**. Kiểm tra mã phiếu, nhà cung cấp và hàng hóa trước khi nhập.

![Giao diện hướng dẫn tất toán phiếu đặt hàng](/posts/2026-11-07-huong-dan-tat-toan-phieu-dat-hang/HINH_01_form-tat-toan-dat-hang.png)

Nếu không thấy **SL đã mua**, **SL tất toán**, **SL còn lại**, bấm chuột phải vào tiêu đề cột của bảng, chọn **Khôi phục bố cục → Đồng ý**.

## 3. Nhập số lượng không mua tiếp

Tại từng dòng cần đóng, nhập **SL tất toán**. Đây là **tổng số lượng tất toán sau cập nhật**, không phải số cộng thêm vào lần tất toán trước.

Ví dụ với hệ số quy đổi bằng 1: đặt 100, đã mua 60, đã tất toán 10. Nếu muốn đóng thêm 5, cần nhập **15** vào SL tất toán; phần còn chờ mua là **25**. Nếu nhập 5, phần mềm hiểu tổng tất toán mới là 5.

Với dòng vẫn tiếp tục mua, giữ nguyên số tất toán đã được duyệt. Không xóa số cũ về 0 nếu không chủ ý mở lại phần đã đóng.

Nếu đơn vị hoặc hệ số quy đổi khác 1, hãy đối chiếu số lượng và mức cho phép trên màn hình với hồ sơ. Khi số liệu không khớp, nhờ người phụ trách kiểm tra trước khi lưu.

## 4. Lưu và kiểm tra kết quả

Bấm **Lưu lại** và chờ thông báo. Nếu phần mềm báo tất toán vượt mức, điều chỉnh theo số tối đa được phép của dòng.

Sau khi lưu, mở lại đúng phiếu và kiểm tra **SL tất toán**, **SL còn lại**, thành tiền, tổng tiền và trạng thái nhận. Dòng đã hoàn thành không còn hiện ở danh sách **Từ đơn hàng** khi lập phiếu mua; dòng còn số chờ vẫn tiếp tục được chọn.

## 5. Khi cần mở lại phần đã tất toán

Nếu đã thống nhất mua tiếp phần trước đây đóng, mở **Tất toán**, giảm tổng **SL tất toán** về mức phù hợp hoặc 0 rồi **Lưu lại**. Kiểm tra lại phần còn chờ sau khi lưu.

Không thay đổi các thông tin khác hoặc dùng **Tải lên từ Excel** trong cửa sổ tất toán. Để mở chức năng, dùng liên kết tại cột **Thao tác** thay vì mục tất toán trong menu chuột phải.

## 6. Vướng mắc thường gặp

**Không thấy Tất toán:** Nhờ quản trị kiểm tra quyền tài khoản tại màn hình Phiếu đặt hàng.

**Báo Tất toán vượt mức cho phép:** Kiểm tra lượng đặt, lượng đã mua và tổng tất toán đang nhập; điều chỉnh không vượt số tối đa phần mềm thông báo.

**Tất toán xong vẫn muốn mua một số dòng:** Bạn vẫn lập phiếu mua được với các dòng còn **SL còn lại** lớn hơn 0.

**Đã mua đủ có cần tất toán không?** Không. Phiếu tự chuyển trạng thái khi mua đủ phần phải thực hiện.
