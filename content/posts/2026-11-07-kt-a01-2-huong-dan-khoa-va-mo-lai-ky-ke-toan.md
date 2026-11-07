---
title: "HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN"
date: "2026-11-07"
summary: "Khóa kỳ (khóa sổ) là chốt số liệu của một tháng và ngăn ghi sổ thêm hoặc đảo bút toán trong kỳ đã khóa."
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

**Khóa kỳ** (khóa sổ) là chốt số liệu của một tháng và ngăn ghi sổ thêm hoặc đảo bút toán trong kỳ đã khóa. Các luồng chứng từ có kiểm tra khóa sổ cũng bị chặn theo ngày của chứng từ. Không coi khóa kỳ là bằng chứng mọi biểu mẫu đều không thể sửa: riêng phiếu hạch toán lương còn điểm kiểm soát chưa bảo đảm ([TỔNG QUAN MÀN HÌNH PHIẾU HẠCH TOÁN LƯƠNG](/bai-viet/2026-11-07-kt-a13-0-tong-quan-man-hinh-phieu-hach-toan-luong/), [HƯỚNG DẪN LẬP PHIẾU HẠCH TOÁN LƯƠNG](/bai-viet/2026-11-07-kt-a13-1-huong-dan-lap-phieu-hach-toan-luong/)). **Mở kỳ** cho phép các luồng bị khóa tiếp tục khi vẫn đủ quyền và điều kiện nghiệp vụ.

Bài này hướng dẫn:

- Khóa một kỳ sau khi đã đối chiếu xong số liệu cuối tháng.
- Mở lại một kỳ đã khóa khi cần điều chỉnh.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Khóa sổ** hoặc **Bỏ khoá sổ**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Trước khi khóa: đã nhập đủ chứng từ của tháng, đã đối chiếu tồn quỹ ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/), [TỔNG QUAN MÀN HÌNH ĐỐI CHIẾU SỐ DƯ CUỐI KỲ](/bai-viet/2026-11-07-kt-a07-0-tong-quan-man-hinh-doi-chieu-so-du-cuoi-ky/)), công nợ (phần C), tồn kho; đã chạy hạch toán và **không còn bút toán nháp** chưa ghi sổ trong kỳ.

## 2. Mở chức năng

**Kế toán → Kỳ kế toán → biểu tượng Khóa kỳ / Mở kỳ** ở cột **Thao tác**

## 3. Nhận biết màn hình

![Hình 1: Hộp xác nhận Khóa kỳ kế toán](/posts/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/hinh-01-xac-nhan-khoa-ky.png)

- **Tiêu đề Khóa kỳ kế toán**: Ý nghĩa: Hộp xác nhận khi bấm biểu tượng **Khóa kỳ** trên bảng
- **Nội dung**: Ý nghĩa: *Sau khi khóa kỳ Tháng <tháng>/<năm>: – Không thể tạo chứng từ. – Không thể chỉnh sửa dữ liệu.*
- **Hủy / Đồng ý**: Ý nghĩa: **Đồng ý** để khóa, **Hủy** để thôi

Các hộp xác nhận khác:

- **Biểu tượng Mở kỳ trên bảng**: Tiêu đề hộp: **Mở lại kỳ kế toán**; Nội dung: *Mở lại kỳ Tháng <tháng>/<năm>? Kỳ kế toán sẽ cho phép phát sinh chứng từ trở lại.*
- **Nút Khóa kỳ trong Chi tiết kỳ kế toán**: Tiêu đề hộp: **Xác nhận đóng kỳ**; Nội dung: *Đóng kỳ Tháng <tháng>/<năm>? Kỳ sẽ bị khóa: không thể thêm/sửa/xóa chứng từ trong kỳ này.*
- **Nút Mở kỳ trong Chi tiết kỳ kế toán**: Tiêu đề hộp: **Xác nhận mở kỳ**; Nội dung: *Mở lại kỳ Tháng <tháng>/<năm>? Cho phép chỉnh sửa chứng từ trong kỳ này trở lại.*

## 4. Trình tự công việc

```text
Cuối tháng
   ↓
Đối chiếu tồn quỹ, công nợ, tồn kho · chạy hạch toán
   ↓
Kỳ kế toán → Khóa kỳ → xác nhận
   ├── còn bút toán nháp ──► báo lỗi, chưa khóa
   └── hợp lệ ──► "Đóng kỳ thành công" → trạng thái Đã khóa
   ↓
Cần sửa chứng từ của kỳ đã khóa?
   ↓
Mở kỳ → xác nhận → "Mở kỳ thành công" → sửa chứng từ → Khóa kỳ lại
```

### Khóa một kỳ

**Bước 1 –** Vào **Kế toán → Kỳ kế toán**, chọn năm. Tìm dòng kỳ cần khóa (trạng thái **Đang mở**).

**Bước 2 –** Bấm biểu tượng **Khóa kỳ** ở cột **Thao tác** (hoặc **Chi tiết** → **Khóa kỳ**). Hộp xác nhận hiện ra (Hình 1).

**Bước 3 –** Bấm **Đồng ý**. Thành công: thông báo **Đóng kỳ thành công**. Dòng kỳ đổi sang **Đã khóa**, cột **Ngày khóa** và **Người khóa** được ghi (Hình 2).

![Hình 2: Kỳ 12/2026 sau khi khóa](/posts/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/hinh-02-ky-da-khoa.png)

- **Thông báo Đóng kỳ thành công**: Ý nghĩa: Hiện ở đầu trang vài giây
- **Dòng kỳ vừa khóa**: Ý nghĩa: **Trạng thái** = **Đã khóa**; **Ngày khóa**, **Người khóa** được ghi
- **Cột Thao tác**: Ý nghĩa: Chỉ còn **Chi tiết** và **Mở kỳ** bấm được

### Mở lại một kỳ

**Bước 1 –** Tìm dòng kỳ trạng thái **Đã khóa** (lọc trạng thái **Đã khóa** cho nhanh).

**Bước 2 –** Bấm biểu tượng **Mở kỳ** (hoặc **Chi tiết** → **Mở kỳ**). Hộp **Mở lại kỳ kế toán** hiện ra (Hình 3):  tiêu đề,  nội dung *Mở lại kỳ Tháng <tháng>/<năm>? Kỳ kế toán sẽ cho phép phát sinh chứng từ trở lại.*,  nút **Hủy** / **Đồng ý**.

![Hình 3: Hộp xác nhận Mở lại kỳ kế toán](/posts/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/hinh-03-xac-nhan-mo-ky.png)

**Bước 3 –** Bấm **Đồng ý**. Thành công: thông báo **Mở kỳ thành công**. Trạng thái về **Đang mở** (hoặc **Chưa mở** nếu tháng của kỳ chưa tới); **Ngày khóa**, **Người khóa** bị xoá trắng.

**Bước 4 –** Sửa chứng từ cần điều chỉnh, sau đó **khóa lại** kỳ.

## 6. Kiểm tra sau khi thực hiện

- **Khóa:** kỳ chuyển **Đã khóa**, ghi người và thời điểm khóa; ghi sổ bút toán vào kỳ bị chặn. Những luồng chứng từ có kiểm tra khóa sổ sẽ từ chối theo ngày kiểm tra. Riêng khả năng sửa phiếu hạch toán lương không được bảo đảm bởi luồng hiện tại; vẫn phải khóa việc điều chỉnh theo quy trình và đối chiếu chứng từ đã chốt.
- **Mở:** kỳ về **Đang mở** (hoặc **Chưa mở** với tháng chưa tới), chứng từ trong kỳ lập / sửa / xoá được như bình thường.

## 7. Những điều cần lưu ý

⚠️ **Chỉ khóa khi đã đối chiếu xong.** Về nghiệp vụ, mọi điều chỉnh sau chốt phải được người phụ trách cho phép và xử lý kỳ phù hợp, kể cả khi biểu mẫu vẫn cho sửa. Hệ thống lưu người khóa / ngày khóa; việc khóa kỳ không thay thế đối chiếu chứng từ và bảng lương.

⚠️ **Không khóa được kỳ còn bút toán nháp** (bút toán chưa ghi sổ). Cần ghi sổ hoặc huỷ các bút toán đó trước – liên hệ kế toán trưởng / quản trị.

⚠️ Mở kỳ để sửa xong **phải khóa lại**, tránh người khác sửa nhầm số liệu đã chốt.

⚠️ Khóa kỳ chỉ áp dụng cho chi nhánh đang làm việc.

### "CẢNH BÁO – Lỗi đóng kỳ kế toán: Kỳ <tháng>/<năm> chi nhánh <mã> còn <n> bút toán Draft chưa post — không thể đóng kỳ" 

Nguyên nhân: trong kỳ còn bút toán nháp chưa ghi sổ.
Cách xử lý: liên hệ kế toán trưởng / quản trị để ghi sổ hoặc huỷ các bút toán nháp, rồi khóa lại.

### "CẢNH BÁO – Lỗi đóng kỳ kế toán: Không tìm thấy kỳ <tháng>/<năm> của chi nhánh <mã> để đóng" (Lỗi hệ thống)

Nguyên nhân: kỳ vừa bị người khác xoá hoặc dữ liệu đã thay đổi.
Cách xử lý: bấm **Tải lại**; nếu vẫn lỗi, liên hệ quản trị hệ thống.

### "CẢNH BÁO – Lỗi mở kỳ kế toán: Không tìm thấy kỳ <tháng>/<năm> của chi nhánh <mã> để mở" (Lỗi hệ thống)

Nguyên nhân và cách xử lý: như lỗi trên.

### Báo không có quyền khi bấm Khóa kỳ / Mở kỳ 

Nguyên nhân: thiếu quyền **Khóa sổ** / **Bỏ khoá sổ**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 9. Câu hỏi thường gặp

**Khóa kỳ có xoá được không?**
Không. Muốn xoá kỳ phải mở kỳ trước ([HƯỚNG DẪN TẠO, SỬA, XOÁ KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-1-huong-dan-tao-sua-xoa-ky-ke-toan/)).

**Mở kỳ rồi khóa lại có mất dữ liệu không?**
Không. Chỉ ghi lại người và thời điểm khóa mới.

**Có cần khóa theo thứ tự tháng không?**
Hệ thống không bắt buộc, nhưng nên khóa lần lượt từng tháng.

## 10. Công việc tiếp theo

```text
Khóa kỳ tháng N
      ↓
Xem số liệu chốt: Sổ chi tiết tài khoản (KT-A09.0), Bảng cân đối phát sinh (KT-A10.0)
      ↓
Tháng N+1: tiếp tục lập chứng từ trong kỳ mới
```

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) – Tổng quan màn hình Sổ chi tiết tài khoản.

## 11. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/) – Tổng quan màn hình Kỳ kế toán
- [HƯỚNG DẪN TẠO, SỬA, XOÁ KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-1-huong-dan-tao-sua-xoa-ky-ke-toan/) – Hướng dẫn tạo, sửa, xoá kỳ kế toán
- [TỔNG QUAN MÀN HÌNH ĐỐI CHIẾU SỐ DƯ CUỐI KỲ](/bai-viet/2026-11-07-kt-a07-0-tong-quan-man-hinh-doi-chieu-so-du-cuoi-ky/) – Tổng quan màn hình Đối chiếu số dư cuối kỳ
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/) – Tổng quan màn hình thống kê Tồn quỹ
- [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/), [TỔNG QUAN MÀN HÌNH BẢNG CÂN ĐỐI PHÁT SINH](/bai-viet/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/)
