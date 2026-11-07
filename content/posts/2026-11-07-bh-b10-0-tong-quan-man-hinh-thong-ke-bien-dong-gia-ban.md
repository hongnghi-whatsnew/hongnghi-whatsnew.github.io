---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ BIẾN ĐỘNG GIÁ BÁN"
date: "2026-11-07"
summary: "Màn hình Biến động giá bán (tiêu đề trên màn: THỐNG KÊ BIẾN ĐỘNG GIÁ XUẤT) cho biết, tính đến một ngày bạn chọn, mỗi mặt hàng bán cho mỗi khách có giá lần xuất gần nhất bao nhiêu, giá lần xuất liền trước bao nhiêu, và chênh lệch giữa hai lần."
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

Màn hình **Biến động giá bán** (tiêu đề trên màn: **THỐNG KÊ BIẾN ĐỘNG GIÁ XUẤT**) cho biết, tính đến một ngày bạn chọn, mỗi mặt hàng bán cho mỗi khách có **giá lần xuất gần nhất** bao nhiêu, **giá lần xuất liền trước** bao nhiêu, và **chênh lệch** giữa hai lần.

Bạn dùng màn hình này khi:

- Kiểm tra khách nào vừa được đổi giá, đổi bao nhiêu %.
- Rà soát giá bán sau khi ra bảng giá mới.
- Trả lời khách "lần trước bán giá bao nhiêu".

Thao tác dùng chung liên quan: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đã có **phiếu xuất kho có khách hàng** ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/)); để có **Giá cũ**, mặt hàng phải được xuất cho khách ít nhất 2 lần.

## 2. Mở chức năng

**Thống kê bán hàng → Biến động giá bán**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ BIẾN ĐỘNG GIÁ XUẤT](/posts/2026-11-07-bh-b10-0-tong-quan-man-hinh-thong-ke-bien-dong-gia-ban/hinh-01-man-hinh-bien-dong-gia-ban.png)

- **Ô ngày**: Chức năng: Ngày tính đến, mặc định **hôm nay**. Đổi ngày thì lưới tự tải lại
- **Ô Vui lòng chọn khách hàng**: Chức năng: Chọn một, nhiều hoặc tất cả khách hàng; tìm theo mã hoặc tên. Chọn xong bấm nút xác nhận ở cuối danh sách; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Tải lại**: Chức năng: Lấy lại số liệu. Ngay sau khi bấm, nút mờ và đếm ngược (ví dụ **Tải lại (1s)**)
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Tiêu đề lưới**: Chức năng: **THỐNG KÊ - BIẾN ĐỘNG GIÁ XUẤT dd-MM-yyyy** theo ngày ở ô  (ảnh: *11-10-2026*)
- **Trình chọn cột, Tìm kiếm…, hàng lọc (khung không số dưới tiêu đề cột)**: Chức năng: Tìm, lọc, ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: **TỔNG CỘNG: n** (số dòng) – không có trên ảnh (lưới trống)

Lưới hiện **10 dòng mỗi trang** (chọn được 10 / 15 / 20) và nhớ bố cục cột ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Các cột trên lưới:** mỗi dòng là một cặp *mặt hàng – khách hàng*.

- **STT**: Ý nghĩa: Số thứ tự
- **Tên hàng hoá**: Ý nghĩa: Tên mặt hàng
- **Hàng hóa**: Ý nghĩa: Quy cách: định mức gia công, số mặt, tiêu chuẩn, Dày x Rộng x Dài, loại hàng
- **Nhóm khách hàng**: Ý nghĩa: Nhóm của khách
- **Khách hàng**: Ý nghĩa: Tên đầy đủ
- **Khách hàng (rút gọn)**: Ý nghĩa: Tên rút gọn (không có thì tên đầy đủ)
- **Đvt**: Ý nghĩa: Đơn vị tính của lần xuất gần nhất
- **Giá mới**: Ý nghĩa: Đơn giá đã gồm VAT của **lần xuất gần nhất** tính đến ngày ở ô
- **Ngày giá mới**: Ý nghĩa: Ngày của lần xuất đó
- **Giá cũ**: Ý nghĩa: Đơn giá đã gồm VAT của **lần xuất liền trước**; trống nếu bằng giá mới
- **Ngày giá cũ**: Ý nghĩa: Ngày của lần xuất liền trước; trống nếu giá không đổi
- **Chênh lệch**: Ý nghĩa: Giá mới − Giá cũ (âm = giảm giá)
- **Tỷ lệ chênh lệch**: Ý nghĩa: Chênh lệch so với giá cũ, theo %

Bấm chuột phải vào **tiêu đề cột** để sắp xếp, cố định cột, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Màn hình không có thao tác nhấp đúp.

## 4. Trình tự công việc

```text
Phiếu xuất kho có khách (từ 04/2021 đến ngày chọn)
      ↓  mỗi cặp mặt hàng – khách hàng
Lần xuất gần nhất = Giá mới  │  Lần xuất liền trước = Giá cũ
      ↓
Chênh lệch = Giá mới − Giá cũ  →  Tỷ lệ = Chênh lệch ÷ Giá cũ
```

### Bước 1 – Mở màn hình

Mở **Thống kê bán hàng → Biến động giá bán**. Lưới trống cho tới khi chọn khách hàng.

### Bước 2 – Chọn ngày

Ô  mặc định **hôm nay**. Muốn xem giá tại một thời điểm trong quá khứ, chọn ngày đó.

### Bước 3 – Chọn khách hàng

Bấm vào ô **Vui lòng chọn khách hàng**, gõ mã hoặc tên để tìm, tick các khách cần xem (hoặc tick chọn tất cả), rồi bấm nút xác nhận ở cuối danh sách. Lưới tự tải.

### Bước 4 – Đọc kết quả

Đối chiếu đơn vị tính và điều kiện CK/VAT của hai lần xuất trước khi kết luận đổi giá; khác đơn vị có thể làm giá khác. Lọc cột **Giá cũ** khác trống để tìm các cặp có giá khác; sắp xếp cột **Tỷ lệ chênh lệch** để thấy mặt hàng tăng / giảm nhiều nhất.

### Bước 5 – Xuất Excel (nếu cần)

Bấm biểu tượng **Xuất Excel**. File tên **THỐNG KÊ - BIẾN ĐỘNG GIÁ XUẤT dd-MM-yyyy.xlsx**, trang tính tên theo ngày đã chọn.

- **Chỉ xem mặt hàng có đổi giá**: Cách làm: Lọc cột **Giá cũ** khác trống; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm một mặt hàng**: Cách làm: Gõ vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem giá theo tháng cả năm**: Cách làm: Dùng **Lịch sử giá xuất**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ LỊCH SỬ GIÁ XUẤT](/bai-viet/2026-11-07-bh-b08-0-tong-quan-man-hinh-thong-ke-lich-su-gia-xuat/)

## 6. Giải thích các thông tin trên màn hình

- **Giá mới, Giá cũ**: Cách tính: Đơn giá × (1 − Chiết khấu) × (1 + Thuế VAT) của dòng phiếu xuất; Chiết khấu, Thuế VAT = tỷ lệ dòng + tỷ lệ phiếu
- **Lần xuất gần nhất / liền trước**: Cách tính: Xếp các dòng xuất của cặp mặt hàng – khách theo ngày xuất giảm dần (cùng ngày thì dòng lập sau đứng trước); dòng thứ 1 là giá mới, dòng thứ 2 là giá cũ
- **Chênh lệch**: Cách tính: Giá mới − Giá cũ; trống nếu giá không đổi hoặc chưa có lần xuất trước
- **Tỷ lệ chênh lệch**: Cách tính: Giá mới ÷ Giá cũ − 1, làm tròn 0,1 %; **0 %** nếu giá không đổi hoặc chưa có lần xuất trước

Dữ liệu lấy từ phiếu xuất kho **có khách hàng**, ngày xuất từ **01/04/2021** đến ngày chọn, trong dữ liệu hệ thống đang truy cập.

## 7. Kiểm tra sau khi thực hiện

Bạn biết giá bán gần nhất, giá trước đó và mức thay đổi của từng mặt hàng cho từng khách tại ngày đã chọn.

## 8. Những điều cần lưu ý

⚠️ **Giá cũ** là lần xuất **liền trước**, không phải "mức giá khác gần nhất". Nếu hai lần gần nhất cùng giá, **Giá cũ** trống dù trước đó từng có giá khác.

⚠️ Hai dòng xuất **cùng ngày** (ví dụ giao 2 xe) cũng tính là hai lần. Nếu cùng ngày có hai giá khác nhau, **Ngày giá mới** và **Ngày giá cũ** trùng nhau.

⚠️ Phạm vi chỉ trong dữ liệu của hệ thống đang truy cập; mỗi tên miền hệ thống chính thức có dữ liệu và tài khoản riêng, không tự lấy dữ liệu từ các chi nhánh ở tên miền khác. Danh sách ở ô  gồm **mọi khách hàng**, không giới hạn theo nhóm khách hàng bạn phụ trách.

⚠️ Danh sách khách hàng ở ô  tải toàn bộ khách một lần, mở ô có thể chậm khi danh mục lớn.

### Lưới trống 

Nguyên nhân: chưa chọn khách hàng, hoặc chọn rồi nhưng chưa bấm nút xác nhận; khách chưa có phiếu xuất đến ngày chọn.
Cách xử lý: chọn khách và bấm nút xác nhận; chọn ngày muộn hơn.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập**.
Cách xử lý: liên hệ quản trị hệ thống.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Giá trên màn này có gồm VAT không?**
Có. Đã trừ chiết khấu và cộng VAT.

**Vì sao Tỷ lệ chênh lệch là 0 % mà Chênh lệch trống?**
Giá không đổi so với lần trước, hoặc mới bán một lần.

## 11. Công việc tiếp theo

```text
Biến động giá bán → xem giá theo tháng (BH-B08.0)
                  → so sánh hai bảng giá (BH-B09.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH THỐNG KÊ LỊCH SỬ GIÁ XUẤT](/bai-viet/2026-11-07-bh-b08-0-tong-quan-man-hinh-thong-ke-lich-su-gia-xuat/) – Tổng quan màn hình thống kê Lịch sử giá xuất
- [TỔNG QUAN MÀN HÌNH BẢNG SO SÁNH GIÁ](/bai-viet/2026-11-07-bh-b09-0-tong-quan-man-hinh-bang-so-sanh-gia/) – Tổng quan màn hình Bảng so sánh giá
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT BÁN CHI TIẾT](/bai-viet/2026-11-07-bh-b05-0-tong-quan-man-hinh-thong-ke-xuat-ban-chi-tiet/) – Tổng quan màn hình thống kê Xuất bán chi tiết
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ BIẾN ĐỘNG GIÁ NHẬP](/bai-viet/2026-11-07-mh-b07-0-tong-quan-man-hinh-thong-ke-bien-dong-gia-nhap/) – Tổng quan màn hình thống kê Biến động giá nhập
