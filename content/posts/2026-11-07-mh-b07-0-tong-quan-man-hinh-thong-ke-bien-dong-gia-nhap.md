---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ BIẾN ĐỘNG GIÁ NHẬP"
date: "2026-11-07"
summary: "Màn hình Biến động giá nhập cho biết, tính đến một ngày bạn chọn, mỗi mặt hàng nhập từ mỗi nhà cung cấp có giá mới nhất là bao nhiêu, giá lần nhập trước là bao nhiêu, và chênh lệch (số tiền, tỷ lệ %)."
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

Màn hình **Biến động giá nhập** cho biết, **tính đến một ngày** bạn chọn, mỗi mặt hàng nhập từ mỗi nhà cung cấp có **giá mới nhất** là bao nhiêu, **giá lần nhập trước** là bao nhiêu, và **chênh lệch** (số tiền, tỷ lệ %).

Bạn dùng màn hình này khi:

- Phát hiện nhà cung cấp vừa tăng / giảm giá.
- Kiểm tra giá nhập gần nhất trước khi đặt hàng hoặc báo giá bán.

Thao tác dùng chung liên quan: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đã có **phiếu nhập kho có nhà cung cấp** ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/)), từ tháng 04/2021 trở đi.

## 2. Mở chức năng

**Thống kê mua hàng → Biến động giá nhập**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ BIẾN ĐỘNG GIÁ NHẬP](/posts/2026-11-07-mh-b07-0-tong-quan-man-hinh-thong-ke-bien-dong-gia-nhap/hinh-01-man-hinh-bien-dong-gia-nhap.png)

- **Ô ngày**: Chức năng: Ngày tính đến, mặc định **hôm nay**. Đổi ngày thì lưới tự tải lại
- **Ô Vui lòng chọn nhà cung cấp**: Chức năng: Chọn một, nhiều hoặc tất cả nhà cung cấp; tìm theo mã hoặc tên. Chọn xong bấm nút xác nhận ở cuối danh sách; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Tiêu đề lưới**: Chức năng: **THỐNG KÊ - BIẾN ĐỘNG GIÁ NHẬP dd-MM-yyyy** theo ngày ở ô
- **Trình chọn cột, Tìm kiếm…, hàng lọc**: Chức năng: Tìm, lọc, ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: **TỔNG CỘNG: n** (số dòng)

**Các cột trên lưới:** mỗi dòng là một cặp *mặt hàng – nhà cung cấp*.

- **STT**: Ý nghĩa: Số thứ tự
- **Tên hàng hoá**: Ý nghĩa: Tên mặt hàng
- **Hàng hóa**: Ý nghĩa: Quy cách: định mức gia công, số mặt, tiêu chuẩn, Dày x Rộng x Dài, loại hàng
- **Nhóm nhà cung cấp**: Ý nghĩa: Nhóm của nhà cung cấp
- **Nhà cung cấp**: Ý nghĩa: Tên đầy đủ
- **Nhà cung cấp (rút gọn)**: Ý nghĩa: Tên rút gọn (không có thì tên đầy đủ)
- **Đvt**: Ý nghĩa: Đơn vị tính của lần nhập mới nhất
- **Giá mới**: Ý nghĩa: Đơn giá đã gồm VAT của **lần nhập gần nhất** tính đến ngày ở ô
- **Ngày giá mới**: Ý nghĩa: Ngày của lần nhập đó
- **Giá cũ**: Ý nghĩa: Đơn giá đã gồm VAT của **lần nhập liền trước**; trống nếu bằng giá mới
- **Ngày giá cũ**: Ý nghĩa: Ngày của lần nhập liền trước; trống nếu giá không đổi
- **Chênh lệch**: Ý nghĩa: Giá mới − Giá cũ (âm = giảm giá)
- **Tỷ lệ chênh lệch**: Ý nghĩa: Chênh lệch so với giá cũ, theo %

## 4. Trình tự công việc

```text
Phiếu nhập kho có NCC (từ 04/2021 đến ngày chọn)
      ↓  mỗi cặp mặt hàng – nhà cung cấp
Lần nhập gần nhất = Giá mới  │  Lần nhập liền trước = Giá cũ
      ↓
Chênh lệch = Giá mới − Giá cũ  →  Tỷ lệ = Chênh lệch ÷ Giá cũ
```

### Bước 1 – Mở màn hình

Mở **Thống kê mua hàng → Biến động giá nhập**. Lưới trống cho tới khi chọn nhà cung cấp.

### Bước 2 – Chọn ngày

Ô  mặc định **hôm nay**. Muốn xem giá tại một thời điểm trong quá khứ, chọn ngày đó.

### Bước 3 – Chọn nhà cung cấp

Bấm vào ô **Vui lòng chọn nhà cung cấp**, gõ mã hoặc tên để tìm, tick các nhà cung cấp cần xem (hoặc tick chọn tất cả), rồi bấm nút xác nhận ở cuối danh sách. Lưới tự tải.

### Bước 4 – Đọc kết quả

Lọc cột **Chênh lệch** hoặc sắp xếp cột **Tỷ lệ chênh lệch** để thấy mặt hàng tăng / giảm giá nhiều nhất.

### Bước 5 – Xuất Excel (nếu cần)

Bấm biểu tượng **Xuất Excel**. File tên **THỐNG KÊ - BIẾN ĐỘNG GIÁ NHẬP dd-MM-yyyy.xlsx**, trang tính tên theo ngày đã chọn.

- **Chỉ xem mặt hàng có đổi giá**: Cách làm: Lọc cột **Giá cũ** khác trống; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm một mặt hàng**: Cách làm: Gõ vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem giá theo tháng cả năm**: Cách làm: Dùng **Lịch sử giá nhập**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ LỊCH SỬ GIÁ NHẬP](/bai-viet/2026-11-07-mh-b06-0-tong-quan-man-hinh-thong-ke-lich-su-gia-nhap/)

## 6. Giải thích các thông tin trên màn hình

- **Giá mới, Giá cũ**: Cách tính: Đơn giá × (1 − Chiết khấu) × (1 + Thuế VAT) của dòng phiếu nhập; Chiết khấu, Thuế VAT = tỷ lệ dòng + tỷ lệ phiếu
- **Lần nhập gần nhất / liền trước**: Cách tính: Xếp các dòng nhập của cặp mặt hàng – nhà cung cấp theo ngày nhập giảm dần; dòng thứ 1 là giá mới, dòng thứ 2 là giá cũ
- **Chênh lệch**: Cách tính: Giá mới − Giá cũ; trống nếu giá không đổi hoặc chưa có lần nhập trước
- **Tỷ lệ chênh lệch**: Cách tính: Giá mới ÷ Giá cũ − 1, làm tròn 0,1%; **0%** nếu giá không đổi hoặc chưa có lần nhập trước

Dữ liệu lấy từ phiếu nhập kho **có nhà cung cấp**, ngày nhập từ **01/04/2021** đến ngày chọn, **toàn bộ dữ liệu phù hợp trong cơ sở dữ liệu của hệ thống đang mở**.

## 7. Kiểm tra sau khi thực hiện

Bạn biết giá nhập mới nhất của từng mặt hàng theo nhà cung cấp, giá lần trước và mức tăng / giảm.

## 8. Những điều cần lưu ý

⚠️ **Giá cũ** là giá của **lần nhập liền trước**, không phải mức giá khác gần nhất. Nếu hai lần nhập gần nhất cùng giá, **Giá cũ** trống dù trước đó từng có giá khác.

⚠️ Hai dòng nhập cùng mặt hàng trên **cùng một ngày** cũng tính là hai lần nhập.

hệ thống chính thức tách tên miền/dữ liệu/tài khoản từng chi nhánh. Báo cáo lấy trong dữ liệu của hệ thống đang mở, không tự ghép với các dữ liệu chi nhánh khác. Với môi trường chung dữ liệu, xác nhận phạm vi dữ liệu trước so sánh giá.

⚠️ Giá là **đơn giá theo đơn vị tính của dòng nhập**. Nếu hai lần nhập dùng đơn vị khác nhau, chênh lệch không có ý nghĩa.

### Lưới trống 

Nguyên nhân: chưa chọn nhà cung cấp, hoặc chọn xong chưa bấm nút xác nhận; nhà cung cấp chưa có phiếu nhập đến ngày chọn.
Cách xử lý: chọn nhà cung cấp và bấm xác nhận; đổi ngày.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Vì sao Tỷ lệ chênh lệch là 0% mà Giá cũ trống?**
Giá không đổi so với lần nhập trước, hoặc mặt hàng mới nhập lần đầu.

**Chọn tất cả nhà cung cấp có chậm không?**
Có thể chậm khi dữ liệu nhiều năm. Nên chọn vài nhà cung cấp cần xem.

## 11. Công việc tiếp theo

```text
Biến động giá nhập → giá tăng bất thường → trao đổi với NCC
                   → đặt hàng NCC (MH-A01.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH THỐNG KÊ LỊCH SỬ GIÁ NHẬP](/bai-viet/2026-11-07-mh-b06-0-tong-quan-man-hinh-thong-ke-lich-su-gia-nhap/) – Tổng quan màn hình thống kê Lịch sử giá nhập
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ NHẬP MUA CHI TIẾT](/bai-viet/2026-11-07-mh-b04-0-tong-quan-man-hinh-thong-ke-nhap-mua-chi-tiet/) – Tổng quan màn hình thống kê Nhập mua chi tiết
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/) – Tổng quan màn hình Phiếu nhập kho
