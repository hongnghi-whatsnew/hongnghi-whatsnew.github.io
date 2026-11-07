---
title: "TỔNG QUAN MÀN HÌNH SỔ KẾ TOÁN"
date: "2026-11-07"
summary: "Màn hình Sổ kế toán (tiêu đề SỔ KẾ TOÁN - DANH SÁCH) được thiết kế để xem các dòng ghi sổ theo ngày: ngày ghi sổ, số chứng từ, diễn giải, tài khoản, tài khoản đối ứng, phát sinh Nợ / Có và số dư lũy kế."
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

Màn hình **Sổ kế toán** (tiêu đề **SỔ KẾ TOÁN - DANH SÁCH**) được thiết kế để xem các dòng ghi sổ theo ngày: ngày ghi sổ, số chứng từ, diễn giải, tài khoản, tài khoản đối ứng, phát sinh Nợ / Có và số dư lũy kế.

⚠️ **Ở phiên bản ERP v4.0.0, màn hình này đang được hoàn thiện: danh sách luôn trống**, kể cả khi đã có bút toán. Màn hình chưa lấy dữ liệu từ sổ.

Trong thời gian này, để xem số liệu sổ sách, dùng:

- **Sổ chi tiết tài khoản** ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/)) — từng dòng bút toán của một tài khoản, có số dư lũy kế, in S38-DN.
- **Bảng cân đối phát sinh** ([TỔNG QUAN MÀN HÌNH BẢNG CÂN ĐỐI PHÁT SINH](/bai-viet/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/)) — tổng hợp số dư và phát sinh mọi tài khoản.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Sổ kế toán**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).

## 2. Mở chức năng

**Kế toán → Sổ kế toán**

## 3. Nhận biết màn hình

![Hình 1: Màn hình SỔ KẾ TOÁN - DANH SÁCH](/posts/2026-11-07-kt-a11-0-tong-quan-man-hinh-so-ke-toan/hinh-01-man-hinh-so-ke-toan.png)

- **Ô chọn khoảng ngày**: Chức năng: Kỳ cần xem. Mặc định **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Bảng danh sách**: Chức năng: Hiện chữ **Không có dữ liệu** (màn chưa lấy dữ liệu, phần “Chức năng này dùng để làm gì?”); chưa có dòng tổng

**Các cột trên danh sách (theo thiết kế; trên màn hình nhiều tiêu đề bị rút gọn, ví dụ *Ngày ghi …*, *Số dư lũy …* — rê chuột hoặc kéo rộng cột để đọc đủ):**

- **STT**: Ý nghĩa dự kiến: Số thứ tự
- **Ngày ghi sổ**: Ý nghĩa dự kiến: Ngày dòng được ghi vào sổ
- **Số chứng từ**: Ý nghĩa dự kiến: Số bút toán / chứng từ
- **Diễn giải**: Ý nghĩa dự kiến: Nội dung dòng
- **Tài khoản**: Ý nghĩa dự kiến: Tài khoản ghi sổ
- **Tài khoản đối ứng**: Ý nghĩa dự kiến: Tài khoản vế đối diện
- **Phát sinh nợ, Phát sinh có**: Ý nghĩa dự kiến: Số tiền ghi Nợ / Có
- **Số dư lũy kế**: Ý nghĩa dự kiến: Số dư sau dòng

Chuột phải vào tiêu đề cột có **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Màn hình không có nút thêm / sửa / xoá, không có menu chuột phải trên dòng.

## 4. Trình tự công việc

```text
Kế toán → Sổ kế toán
      ↓
Chọn khoảng ngày → danh sách (hiện luôn trống ở v4.0.0)
      ↓
Xem sổ thực tế ở:
   ├── Sổ chi tiết tài khoản (KT-A09.0)
   └── Bảng cân đối phát sinh (KT-A10.0)
```

## 5. Thực hiện trên phần mềm

- **Xem dòng bút toán theo tài khoản**: Cách làm: **Kế toán → Sổ chi tiết tài khoản** → **Xem sổ**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/)
- **Xem tổng hợp số dư, phát sinh**: Cách làm: **Kế toán → Bảng cân đối phát sinh**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH BẢNG CÂN ĐỐI PHÁT SINH](/bai-viet/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/)
- **Chọn khoảng ngày, tìm, lọc trên màn này**: Cách làm: Ô, **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

## 6. Giải thích các thông tin trên màn hình

Xem bảng cột ở phần “Nhận biết màn hình”. Ý nghĩa chi tiết các cột tương tự cửa sổ sổ chi tiết của Sổ chi tiết tài khoản ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/), phần “Nhận biết màn hình”).

## 7. Kiểm tra sau khi thực hiện

Ở phiên bản hiện tại, màn hình chưa cho kết quả số liệu. Dùng [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) / [TỔNG QUAN MÀN HÌNH BẢNG CÂN ĐỐI PHÁT SINH](/bai-viet/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/).

## 8. Những điều cần lưu ý

⚠️ **Danh sách trống không có nghĩa là chưa có bút toán.** Màn hình chưa được nối dữ liệu. Không dùng màn hình này để kết luận sổ sách trống.

⚠️ Bài sẽ được cập nhật khi màn hình hoàn thiện.

### Danh sách luôn trống dù đã có chứng từ (Lỗi hệ thống)

Nguyên nhân: màn hình đang hoàn thiện, chưa lấy dữ liệu.
Cách xử lý: dùng Sổ chi tiết tài khoản ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/)) hoặc Bảng cân đối phát sinh ([TỔNG QUAN MÀN HÌNH BẢNG CÂN ĐỐI PHÁT SINH](/bai-viet/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/)).

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Sổ kế toán khác Sổ chi tiết tài khoản thế nào?**
Theo thiết kế, Sổ kế toán liệt kê dòng ghi sổ của nhiều tài khoản theo ngày; Sổ chi tiết tài khoản xem theo từng tài khoản. Hiện chỉ Sổ chi tiết tài khoản có dữ liệu.

## 11. Công việc tiếp theo

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) – Tổng quan màn hình Sổ chi tiết tài khoản.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) – Tổng quan màn hình Sổ chi tiết tài khoản
- [TỔNG QUAN MÀN HÌNH BẢNG CÂN ĐỐI PHÁT SINH](/bai-viet/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/) – Tổng quan màn hình Bảng cân đối phát sinh
- [TỔNG QUAN MÀN HÌNH BÚT TOÁN PHÁT SINH](/bai-viet/2026-11-07-kt-a12-0-tong-quan-man-hinh-but-toan-phat-sinh/) – Tổng quan màn hình Bút toán phát sinh
