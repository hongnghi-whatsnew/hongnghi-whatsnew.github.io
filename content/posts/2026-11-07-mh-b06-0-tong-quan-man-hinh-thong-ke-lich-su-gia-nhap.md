---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ LỊCH SỬ GIÁ NHẬP"
date: "2026-11-07"
summary: "Màn hình Lịch sử giá nhập cho biết, trong một năm, mỗi mặt hàng được nhập từ mỗi nhà cung cấp với đơn giá (đã gồm VAT) bao nhiêu ở từng tháng."
module: "Mua hàng"
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

Màn hình **Lịch sử giá nhập** cho biết, trong **một năm**, mỗi mặt hàng được nhập từ mỗi nhà cung cấp với **đơn giá (đã gồm VAT)** bao nhiêu **ở từng tháng**. Lưới gom sẵn theo **nhà cung cấp**; mỗi dòng là một cặp *nhà cung cấp – hàng hoá*, 12 cột **T1 … T12** là giá của từng tháng.

Bạn dùng màn hình này khi:

- Xem giá một nhà cung cấp đã bán cho công ty thay đổi thế nào qua các tháng.
- So sánh giá cùng một mặt hàng giữa các nhà cung cấp.
- Chuẩn bị thương lượng giá với nhà cung cấp.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đã có **phiếu nhập kho có nhà cung cấp** trong năm cần xem ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/)).

## 2. Mở chức năng

**Thống kê mua hàng → Lịch sử giá nhập**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ LỊCH SỬ GIÁ NHẬP](/posts/2026-11-07-mh-b06-0-tong-quan-man-hinh-thong-ke-lich-su-gia-nhap/hinh-01-man-hinh-lich-su-gia-nhap.png)

- **Ô năm**: Chức năng: Chọn năm cần xem (từ 2021 đến năm hiện tại), mặc định năm hiện tại. Chọn năm khác thì lưới tự tải lại
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Vùng nhóm phía trên lưới**: Chức năng: Kéo tiêu đề cột vào đây để gom nhóm theo cột khác; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng nhóm nhà cung cấp**: Chức năng: Dạng **Tên nhà cung cấp (N mặt hàng)**. Mặc định **thu gọn**; bấm vào để mở; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…, hàng lọc**: Chức năng: Tìm, lọc, ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: **TỔNG CỘNG: n** (số cặp nhà cung cấp – hàng hoá)

**Các cột trên lưới:**

- **—**: Cột: STT; Ý nghĩa: Số thứ tự
- **Thông tin chung**: Cột: Nhà cung cấp; Ý nghĩa: Tên nhà cung cấp (đang dùng để gom nhóm)
- Cột: Tên hàng hoá; Ý nghĩa: Mặt hàng đã nhập
- **Đơn giá nhập (đã bao gồm VAT)**: Cột: T1 … T12; Ý nghĩa: Các mức đơn giá đã gồm VAT của mặt hàng trong tháng đó; nhiều mức khác nhau thì nối bằng dấu `;`

## 4. Trình tự công việc

```text
Phiếu nhập kho có NCC (KHO-A04) → đơn giá VAT từng dòng
      ↓
Lịch sử giá nhập (theo năm)
      ├── Gom theo nhà cung cấp → mở nhóm → xem T1 … T12
      ├── Kéo cột "Tên hàng hoá" lên vùng nhóm → so sánh giá giữa các NCC
      └── Xuất Excel (GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Xem năm khác**: Cách làm: Chọn năm ở ô
- **Xem giá của một nhà cung cấp**: Cách làm: Gõ tên vào **Tìm kiếm…** rồi bấm mở dòng nhóm; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **So sánh một mặt hàng giữa các NCC**: Cách làm: Kéo cột **Tên hàng hoá** lên vùng nhóm, kéo **Nhà cung cấp** ra khỏi vùng nhóm; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Đưa lưới về mặc định**: Cách làm: Chuột phải tiêu đề cột → **Khôi phục bố cục**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem giá nhập của một nhà cung cấp trong năm

**Bước 1 –** Mở **Thống kê mua hàng → Lịch sử giá nhập**. Ô năm mặc định là năm hiện tại.

**Bước 2 –** Gõ tên nhà cung cấp vào ô **Tìm kiếm…**.

**Bước 3 –** Bấm vào dòng nhóm **Tên nhà cung cấp (N mặt hàng)** để mở danh sách mặt hàng.

**Bước 4 –** Đọc các cột **T1 … T12**. Ô có nhiều số cách nhau bởi dấu `;` là tháng đó nhập với nhiều mức giá.

## 6. Giải thích các thông tin trên màn hình

- **T1 … T12**: Cách tính: Mỗi dòng phiếu nhập kho trong tháng: Đơn giá × (1 − Chiết khấu) × (1 + Thuế VAT), trong đó Chiết khấu, Thuế VAT = tỷ lệ dòng + tỷ lệ phiếu. Làm tròn đến đồng, bỏ mức trùng, nối bằng `;`

Dữ liệu lấy từ **mọi phiếu nhập kho có nhà cung cấp** có ngày nhập trong năm đã chọn, **toàn bộ dữ liệu phù hợp trong cơ sở dữ liệu của hệ thống đang mở**. Các mức giá **từ 1.000 đồng trở xuống** bị bỏ qua.

## 7. Kiểm tra sau khi thực hiện

Bạn có bảng giá nhập theo tháng của từng mặt hàng, từng nhà cung cấp trong năm, xuất được ra Excel khi có quyền.

## 8. Những điều cần lưu ý

Phạm vi dữ liệu phụ thuộc cơ sở dữ liệu của tên miền đang truy cập. hệ thống chính thức tách dữ liệu từng chi nhánh; báo cáo không tự lấy dữ liệu từ tên miền/dữ liệu khác. Khi đối chiếu môi trường thử có nhiều đơn vị chung dữ liệu, cần IT xác nhận phạm vi vì nguồn báo cáo không nhận bộ lọc chi nhánh.

⚠️ Mỗi ô tháng là **chữ**, không phải số: không cộng / trung bình được, và sắp xếp cột T1 … T12 theo thứ tự chữ (ví dụ "100.000" có thể đứng trước "95.000").

⚠️ Lấy **mọi phiếu nhập kho có nhà cung cấp**, không chỉ phiếu nhập từ phiếu mua. Phiếu nhập có giá 0 hoặc giá tượng trưng (≤ 1.000 đồng) không hiện.

⚠️ Giá là **đơn giá theo đơn vị tính của dòng nhập**. Cùng một mặt hàng nhập theo đơn vị khác nhau sẽ ra mức giá khác nhau trong cùng tháng.

### Không thấy dòng nào dù đã có phiếu nhập 

Nguyên nhân: các dòng nhóm đang **thu gọn**; chọn sai năm; phiếu nhập không có nhà cung cấp hoặc giá ≤ 1.000.
Cách xử lý: bấm mở dòng nhóm; chọn lại năm; kiểm tra phiếu nhập.

### Lưới không còn gom theo nhà cung cấp 

Nguyên nhân: đã kéo cột ra khỏi vùng nhóm, bố cục được lưu lại.
Cách xử lý: chuột phải tiêu đề cột → **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Giá trên màn này có gồm VAT không?**
Có. Đã trừ chiết khấu và cộng VAT.

**Muốn xem giá theo ngày cụ thể thì xem ở đâu?**
Dùng **Biến động giá nhập** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ BIẾN ĐỘNG GIÁ NHẬP](/bai-viet/2026-11-07-mh-b07-0-tong-quan-man-hinh-thong-ke-bien-dong-gia-nhap/)) hoặc **Nhập mua chi tiết** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ NHẬP MUA CHI TIẾT](/bai-viet/2026-11-07-mh-b04-0-tong-quan-man-hinh-thong-ke-nhap-mua-chi-tiet/)).

## 11. Công việc tiếp theo

```text
Lịch sử giá nhập → lần đổi giá gần nhất (MH-B07.0)
                 → thương lượng, đặt hàng NCC (MH-A01.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH THỐNG KÊ NHẬP MUA CHI TIẾT](/bai-viet/2026-11-07-mh-b04-0-tong-quan-man-hinh-thong-ke-nhap-mua-chi-tiet/) – Tổng quan màn hình thống kê Nhập mua chi tiết
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ BIẾN ĐỘNG GIÁ NHẬP](/bai-viet/2026-11-07-mh-b07-0-tong-quan-man-hinh-thong-ke-bien-dong-gia-nhap/) – Tổng quan màn hình thống kê Biến động giá nhập
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/) – Tổng quan màn hình Phiếu nhập kho
