---
title: "TỔNG QUAN MÀN HÌNH BÚT TOÁN PHÁT SINH"
date: "2026-11-07"
summary: "Màn hình Bút toán phát sinh (tiêu đề BÚT TOÁN PHÁT SINH - DANH SÁCH) được thiết kế để liệt kê các bút toán theo ngày hạch toán dưới dạng Tài khoản nợ – Tài khoản có – Số tiền."
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

Màn hình **Bút toán phát sinh** (tiêu đề **BÚT TOÁN PHÁT SINH - DANH SÁCH**) được thiết kế để liệt kê các bút toán theo ngày hạch toán dưới dạng **Tài khoản nợ – Tài khoản có – Số tiền**.

⚠️ **Ở phiên bản ERP v4.0.0, màn hình này đang được hoàn thiện: danh sách luôn trống.** Màn hình chưa lấy dữ liệu bút toán và **chưa cho nhập bút toán tay**.

Trong thời gian này:

- Xem một bút toán cụ thể (đủ các vế Nợ / Có, mã chứng từ gốc): **Sổ chi tiết tài khoản** → **Xem sổ** → bấm **Số chứng từ** ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/)).
- Xem tổng hợp: **Bảng cân đối phát sinh** ([TỔNG QUAN MÀN HÌNH BẢNG CÂN ĐỐI PHÁT SINH](/bai-viet/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Bút toán phát sinh**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).

## 2. Mở chức năng

**Kế toán → Bút toán phát sinh**

## 3. Nhận biết màn hình

![Hình 1: Màn hình BÚT TOÁN PHÁT SINH - DANH SÁCH](/posts/2026-11-07-kt-a12-0-tong-quan-man-hinh-but-toan-phat-sinh/hinh-01-man-hinh-but-toan-phat-sinh.png)

- **Ô chọn khoảng ngày**: Chức năng: Kỳ cần xem. Mặc định **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Bảng danh sách**: Chức năng: Hiện chữ **Không có dữ liệu** (màn chưa lấy dữ liệu, phần “Chức năng này dùng để làm gì?”); chưa có dòng tổng

**Các cột trên danh sách (theo thiết kế; trên màn hình vài tiêu đề bị rút gọn, ví dụ *Ngày hạch t…*, *Ngày chứng…*):**

- **STT**: Ý nghĩa dự kiến: Số thứ tự
- **Ngày hạch toán**: Ý nghĩa dự kiến: Ngày ghi sổ bút toán
- **Số chứng từ**: Ý nghĩa dự kiến: Số bút toán / chứng từ
- **Ngày chứng từ**: Ý nghĩa dự kiến: Ngày của chứng từ gốc
- **Diễn giải**: Ý nghĩa dự kiến: Nội dung bút toán
- **Tài khoản nợ**: Ý nghĩa dự kiến: Tài khoản ghi Nợ
- **Tài khoản có**: Ý nghĩa dự kiến: Tài khoản ghi Có
- **Số tiền**: Ý nghĩa dự kiến: Số tiền của cặp Nợ / Có

Chuột phải vào tiêu đề cột có **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Màn hình không có nút **Thêm mới**, không có liên kết sửa / xoá, không có menu chuột phải trên dòng.

## 4. Trình tự công việc

```text
Kế toán → Bút toán phát sinh
      ↓
Chọn khoảng ngày → danh sách (hiện luôn trống ở v4.0.0)
      ↓
Xem bút toán thực tế ở:
   ├── Sổ chi tiết tài khoản → Xem sổ → Số chứng từ (KT-A09.0)
   └── Bảng cân đối phát sinh (KT-A10.0)
```

Bút toán hiện nay chỉ do hệ thống **tự sinh từ chứng từ** (bảng nguồn ở [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/), phần “Trình tự công việc”); chưa có nơi nhập bút toán tay.

## 5. Thực hiện trên phần mềm

- **Xem đủ các vế của một bút toán**: Cách làm: Sổ chi tiết tài khoản → **Xem sổ** → bấm số ở cột **Số chứng từ**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/)
- **Xem tổng hợp phát sinh mọi tài khoản**: Cách làm: **Kế toán → Bảng cân đối phát sinh**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH BẢNG CÂN ĐỐI PHÁT SINH](/bai-viet/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/)
- **Chọn khoảng ngày, tìm, lọc trên màn này**: Cách làm: Ô, **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

## 6. Giải thích các thông tin trên màn hình

Xem bảng cột ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Ở phiên bản hiện tại, màn hình chưa cho kết quả số liệu. Dùng [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) / [TỔNG QUAN MÀN HÌNH BẢNG CÂN ĐỐI PHÁT SINH](/bai-viet/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/).

## 8. Những điều cần lưu ý

⚠️ **Danh sách trống không có nghĩa là chưa có bút toán.** Màn hình chưa được nối dữ liệu.

⚠️ **Chưa nhập được bút toán tay** (bút toán điều chỉnh, kết chuyển cuối kỳ, số dư đầu…). Cần điều chỉnh sổ, báo kế toán trưởng / IT.

⚠️ Bài sẽ được cập nhật khi màn hình hoàn thiện.

### Danh sách luôn trống dù đã có chứng từ (Lỗi hệ thống)

Nguyên nhân: màn hình đang hoàn thiện, chưa lấy dữ liệu.
Cách xử lý: dùng Sổ chi tiết tài khoản ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/)) hoặc Bảng cân đối phát sinh ([TỔNG QUAN MÀN HÌNH BẢNG CÂN ĐỐI PHÁT SINH](/bai-viet/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/)).

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Muốn ghi một bút toán điều chỉnh thì làm ở đâu?**
Phiên bản hiện tại chưa có chức năng nhập bút toán tay. Báo kế toán trưởng / IT.

## 11. Công việc tiếp theo

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) – Tổng quan màn hình Sổ chi tiết tài khoản.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) – Tổng quan màn hình Sổ chi tiết tài khoản
- [TỔNG QUAN MÀN HÌNH BẢNG CÂN ĐỐI PHÁT SINH](/bai-viet/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/) – Tổng quan màn hình Bảng cân đối phát sinh
- [TỔNG QUAN MÀN HÌNH SỔ KẾ TOÁN](/bai-viet/2026-11-07-kt-a11-0-tong-quan-man-hinh-so-ke-toan/) – Tổng quan màn hình Sổ kế toán
