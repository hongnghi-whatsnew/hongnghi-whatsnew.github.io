---
title: "TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN"
date: "2026-11-07"
summary: "Màn hình Sổ chi tiết tài khoản (mẫu S38-DN) cho biết, trong một khoảng ngày, mỗi tài khoản kế toán có số dư đầu kỳ, phát sinh Nợ, phát sinh Có và số dư cuối kỳ bao nhiêu."
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

Màn hình **Sổ chi tiết tài khoản** (mẫu S38-DN) cho biết, trong một khoảng ngày, mỗi tài khoản kế toán có **số dư đầu kỳ**, **phát sinh Nợ**, **phát sinh Có** và **số dư cuối kỳ** bao nhiêu. Chọn một tài khoản để xem **từng dòng bút toán** đã ghi vào tài khoản đó, kèm số dư lũy kế sau mỗi dòng.

Số liệu trên màn hình lấy từ **bút toán đã ghi sổ**. Bút toán do hệ thống **tự sinh từ chứng từ** (phiếu xuất kho, phiếu nhập kho, phiếu thu, phiếu chi…) theo quy tắc ở phần “Trình tự công việc”. Màn hình này **chỉ xem**, không sửa được bút toán.

Bạn dùng màn hình này khi:

- Xem số dư và phát sinh của một tài khoản (131, 331, 111, 112, 156, 511…) trong tháng / quý / năm.
- Tra một dòng bút toán: chứng từ nào sinh ra, đối ứng với tài khoản nào.
- In sổ chi tiết tài khoản theo mẫu S38-DN hoặc xuất Excel.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Sổ chi tiết tài khoản**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)). Số liệu chỉ tính bút toán của chi nhánh đang làm việc.
- Đã có **Kỳ kế toán** phủ các ngày cần xem ([TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/)). Chứng từ có ngày không thuộc kỳ nào sẽ **không được ghi sổ** (xem phần “Trình tự công việc”).
- Các chứng từ trong khoảng ngày đã được **ghi sổ** (hạch toán tự động đã chạy — phần “Trình tự công việc”).

## 2. Mở chức năng

**Kế toán → Sổ chi tiết tài khoản**

### Danh sách tài khoản

![Hình 1: Màn hình SỔ CHI TIẾT TÀI KHOẢN - DANH SÁCH, khoảng Năm trước (01/01/2025 – 31/12/2025)](/posts/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/hinh-01-man-hinh-so-chi-tiet-tai-khoan.png)

- **Ô chọn khoảng ngày**: Chức năng: Kỳ cần xem. Mặc định **Từ đầu tháng** (từ ngày 1 đến hôm nay); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tính lại số liệu; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách tài khoản; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo số hoặc tên tài khoản; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Xem sổ**: Chức năng: Mở sổ chi tiết của tài khoản; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Dòng tổng**: Chức năng: **TỔNG CỘNG: n** và tổng các cột số tiền; Hướng dẫn: phần “Những điều cần lưu ý”

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: Liên kết **Xem sổ**
- **Số tài khoản**: Ý nghĩa: Mã tài khoản (ví dụ 111, 131, 5111)
- **Tên tài khoản**: Ý nghĩa: Tên tài khoản
- **Số dư đầu kỳ**: Ý nghĩa: Số dư **trước** ngày đầu kỳ, tính theo tính chất tài khoản (xem phần “Trình tự công việc”)
- **Phát sinh nợ**: Ý nghĩa: Tổng số tiền ghi Nợ trong kỳ
- **Phát sinh có**: Ý nghĩa: Tổng số tiền ghi Có trong kỳ
- **Số dư cuối kỳ**: Ý nghĩa: Số dư **hết** ngày cuối kỳ

Danh sách chỉ hiện tài khoản **có phát sinh trong kỳ** hoặc **có số dư đầu kỳ khác 0**. Không có tài khoản nào: bảng hiện **Không có tài khoản phát sinh trong kỳ**.

Bảng hiện 10 dòng mỗi trang; góc dưới trái đổi được **10 / 15 / 20** dòng, góc dưới phải chuyển trang (*Trang 1 của 2 (13 mục)*).

### Cửa sổ sổ chi tiết của một tài khoản

![Hình 2: Cửa sổ sổ chi tiết của một tài khoản](/posts/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/hinh-02-cua-so-so-chi-tiet.png)

- **Tiêu đề <số TK> · <tên TK>**: Chức năng: Tài khoản đang xem
- **Bốn ô số: Dư đầu kỳ, Phát sinh Nợ, Phát sinh Có, Dư cuối kỳ**: Chức năng: Tóm tắt tài khoản trong kỳ
- **Bảng dòng sổ**: Chức năng: Từng dòng bút toán theo ngày
- **Liên kết ở cột Số chứng từ**: Chức năng: Mở cửa sổ xem nhanh bút toán
- **‹ TK trước, TK sau ›**: Chức năng: Chuyển sang tài khoản liền trước / liền sau trong danh sách
- **Xuất Excel**: Chức năng: Xuất các dòng sổ
- **In S38-DN**: Chức năng: Xem trước và in sổ theo mẫu S38-DN ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/))
- **Đóng**: Chức năng: Đóng cửa sổ

Số lớn trong bốn ô có thể bị cắt bớt (hiện *…* ở cuối, ví dụ *132,143,060,665,…*); xem số đầy đủ ở dòng của tài khoản trên danh sách hoặc dòng cộng cuối sổ.

Ô tick **Gộp TK con** chỉ hiện khi tài khoản đang xem là tài khoản cha (có tài khoản con); khi tick, sổ gộp phát sinh của mọi tài khoản con.

**Các cột trong sổ chi tiết:**

- **Ngày ghi sổ**: Ý nghĩa: Ngày bút toán được ghi vào sổ (ngày của chứng từ gốc — phần “Trình tự công việc”)
- **Số chứng từ**: Ý nghĩa: Số bút toán do hệ thống đặt (ví dụ **PT-…**, **XKDT-…**) — bấm để xem nhanh
- **Diễn giải**: Ý nghĩa: Nội dung dòng bút toán (ví dụ *Thu tiền khách hàng*, *Giá vốn*)
- **TK đối ứng**: Ý nghĩa: Tài khoản ở vế đối diện trong cùng bút toán; nhiều tài khoản thì hiện **nhiều**
- **Phát sinh Nợ**: Ý nghĩa: Số tiền ghi Nợ (chữ xanh)
- **Phát sinh Có**: Ý nghĩa: Số tiền ghi Có (chữ cam)
- **Số dư**: Ý nghĩa: Số dư lũy kế sau dòng này; số âm hiện chữ đỏ

Không có dòng nào: bảng hiện **Không có phát sinh trong kỳ**. Dòng cuối bảng cộng **Phát sinh Nợ** và **Phát sinh Có**.

### Cửa sổ xem nhanh bút toán

![Hình 3: Cửa sổ xem nhanh một bút toán](/posts/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/hinh-03-xem-nhanh-but-toan.png)

Dòng đầu là **<số bút toán> · <ngày>** (ví dụ *XKDT-22257-2 · 02/01/2025*), dòng dưới là diễn giải chung (khung đỏ trong Hình 3, ví dụ *Doanh thu hàng hóa XK00111357*, *Phiếu thu PT…*) — đây là chỗ thấy **mã chứng từ gốc**. Bảng liệt kê đủ các dòng của bút toán: **TK**, **Tên tài khoản**, **Diễn giải**, **Nợ**, **Có**; dòng cuối cộng Nợ và Có; phải đối chiếu hai tổng bằng nhau, nếu lệch thì báo kế toán phụ trách. Bấm **Đóng** để quay lại.

### Bút toán đến từ đâu

```text
Chứng từ nghiệp vụ (Kho, Bán hàng, Mua hàng, Kế toán)
      ↓
Hạch toán tự động (chạy theo năm, không chạy khi lưu chứng từ)
   ├── ngày chứng từ thuộc kỳ kế toán của chi nhánh → tạo bút toán
   └── không có kỳ kế toán cho ngày đó ──► bỏ qua, chưa ghi sổ
      ↓
Bút toán cân Nợ = Có → ghi sổ
      ↓
Sổ chi tiết tài khoản / Bảng cân đối phát sinh
```

Mỗi chứng từ chỉ sinh **một** bút toán cho mỗi loại; lần chạy sau bỏ qua chứng từ đã có bút toán.

**Bảng nguồn bút toán tự động:**

- **Phiếu xuất kho bán cho khách — doanh thu**: Ngày ghi sổ: Ngày xuất kho; Bút toán: Nợ 131 / Có 511x (theo loại hàng, mặc định 5111) / Có 3331 (VAT); Số chứng từ trên sổ: XKDT-…
- **Phiếu xuất kho bán cho khách — giá vốn**: Ngày ghi sổ: Ngày xuất kho; Bút toán: Nợ 632 (theo loại hàng) / Có 156; Số chứng từ trên sổ: XKGV-…
- **Phiếu bán hàng dịch vụ**: Ngày ghi sổ: Ngày bán hàng; Bút toán: Nợ 131 / Có 5113 / Có 3331; Số chứng từ trên sổ: PBHDV-…
- **Phiếu nhập kho khách trả hàng**: Ngày ghi sổ: Ngày nhập kho; Bút toán: Nợ 521, Nợ 3331 / Có 131; Nợ 156 / Có 632 (giá vốn hàng trả); Số chứng từ trên sổ: NKTRA-…
- **Phiếu giảm giá hình thức Trừ công nợ**: Ngày ghi sổ: Ngày giảm giá; Bút toán: Nợ 521 / Có 131; Số chứng từ trên sổ: GG-…
- **Phiếu nhập trả mượn hàng (khách mua hàng mượn)**: Ngày ghi sổ: Ngày nhập trả; Bút toán: Nợ 131 / Có 5111; Số chứng từ trên sổ: NTM-…
- **Phiếu nhập kho mua hàng**: Ngày ghi sổ: Ngày nhập kho; Bút toán: Nợ 156, Nợ 1331 (VAT) / Có 331; Số chứng từ trên sổ: NKMUA-…
- **Phiếu mua dịch vụ**: Ngày ghi sổ: Ngày hạch toán (nếu có), không thì ngày mua; Bút toán: Nợ 642, Nợ 1331 / Có 331; Số chứng từ trên sổ: MUADV-…
- **Phiếu xuất kho trả hàng NCC**: Ngày ghi sổ: Ngày xuất kho; Bút toán: Nợ 331 / Có 156, Có 1331; Số chứng từ trên sổ: XKTRA-…
- **Phiếu thu (KT-A03)**: Ngày ghi sổ: Ngày thu; Bút toán: Nợ TK tiền của quỹ thu / Có 131 (hoặc Có 331 nếu thu của NCC); Số chứng từ trên sổ: PT-…
- **Phiếu chi (KT-A04)**: Ngày ghi sổ: Ngày hạch toán (nếu có), không thì ngày chi; Bút toán: Nợ 331 (trả NCC), hoặc Nợ 131 (chi cho khách có tính công nợ), hoặc Nợ TK chi phí theo nội dung thu chi (không có thì 811) / Có TK tiền của quỹ chi; Số chứng từ trên sổ: PC-…
- **Phiếu cấn trừ (KT-A05)**: Ngày ghi sổ: Ngày cấn trừ; Bút toán: Nợ 331 / Có 131; Số chứng từ trên sổ: CT-…
- **Phiếu kết chuyển chi phí (sổ tay Giá thành)**: Ngày ghi sổ: Ngày hạch toán của phiếu; Bút toán: Nợ 154 / Có 621, 622, 627…; Số chứng từ trên sổ: KCGT-…

**TK tiền của quỹ:** quỹ đã được gán tài khoản riêng thì dùng tài khoản đó; quỹ gắn ngân hàng dùng 112; quỹ tiền mặt hoặc không chọn quỹ dùng 111.

Các chứng từ **chưa** sinh bút toán: lệnh chuyển tiền nội bộ (KT-A06), lệnh vay (KT-A02), phiếu hạch toán lương (KT-A13) — xem phần “Những điều cần lưu ý”.

⚠️ Cần kiểm tra cách ghi khoản Tiền giảm vào tài khoản tiền trên phiếu thu. Phiếu có giảm cần so riêng Tiền thu thực vào quỹ, Tổng thu giảm công nợ và bút toán; không dùng việc bút toán cân để kết luận khớp dòng tiền. Cần đối chiếu trên hệ thống đang sử dụng trước khi chốt sổ.

### Cách tính số dư

```text
Số dư đầu kỳ = Σ bút toán đã ghi sổ TRƯỚC ngày đầu kỳ
Số dư cuối kỳ = Số dư đầu kỳ + (phát sinh theo chiều tăng − phát sinh chiều giảm)
Số dư từng dòng = Số dư đầu kỳ + cộng dồn các dòng đến dòng đó
```

Chiều tăng theo **tính chất tài khoản**:

- Tài khoản dư Nợ (tài sản, chi phí: 111, 112, 131, 156, 632, 642…): số dư = Nợ − Có. Số **dương** là dư Nợ.
- Tài khoản dư Có (nợ phải trả, vốn, doanh thu: 331, 3331, 511…): số dư = Có − Nợ. Số **dương** là dư Có.

Số dư **âm** (chữ đỏ trong sổ) nghĩa là tài khoản đang dư ngược chiều (ví dụ 131 âm = khách trả thừa).

**Các chức năng trên màn hình:**

```text
Sổ chi tiết tài khoản
   ├── Chọn khoảng ngày → danh sách TK có số dư / phát sinh
   ├── Xem sổ (hoặc nhấp đúp dòng) ──► cửa sổ sổ chi tiết của TK
   │      ├── Bấm Số chứng từ ──► xem nhanh bút toán
   │      ├── ‹ TK trước / TK sau ›
   │      ├── Xuất Excel
   │      └── In S38-DN ──► xem trước khi in
   └── Xuất Excel ──► danh sách TK
```

## 5. Thực hiện trên phần mềm

- **Chọn kỳ cần xem**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm một tài khoản**: Cách làm: Gõ số hoặc tên tài khoản vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem sổ chi tiết một tài khoản**: Cách làm: **Xem sổ** hoặc nhấp đúp dòng; Bài hướng dẫn: Mục này
- **Xem bút toán của một dòng sổ**: Cách làm: Bấm số ở cột **Số chứng từ**; Bài hướng dẫn: Mục này
- **In sổ S38-DN**: Cách làm: Trong cửa sổ sổ chi tiết, bấm **In S38-DN**; Bài hướng dẫn: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel** (danh sách) hoặc nút **Xuất Excel** (sổ chi tiết); Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Xem tổng hợp mọi tài khoản dạng Nợ / Có**: Cách làm: **Kế toán → Bảng cân đối phát sinh**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH BẢNG CÂN ĐỐI PHÁT SINH](/bai-viet/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/)

### Xem sổ chi tiết một tài khoản

**Bước 1 –** Chọn khoảng ngày, ví dụ **Từ đầu tháng**, một tháng cụ thể, hoặc **Năm trước** để xem cả năm 2025 (Hình 1). Danh sách tự tính lại.

**Bước 2 –** Tìm tài khoản cần xem (ví dụ gõ *131* vào **Tìm kiếm…**).

**Bước 3 –** Bấm **Xem sổ** hoặc nhấp đúp vào dòng. Cửa sổ sổ chi tiết mở ra (Hình 2).

**Bước 4 –** Đối chiếu bốn ô số ở đầu cửa sổ với dòng của tài khoản trên danh sách — phải khớp.

**Bước 5 –** Đọc từng dòng: **Ngày ghi sổ**, **Diễn giải**, **TK đối ứng**, số tiền và **Số dư** sau dòng.

**Bước 6 –** Muốn biết dòng sinh từ chứng từ nào, bấm số ở cột **Số chứng từ**. Cửa sổ xem nhanh hiện diễn giải chung có **mã chứng từ gốc** và đủ các vế của bút toán (Hình 3). Bấm **Đóng**.

**Bước 7 –** Bấm **TK sau ›** / **‹ TK trước** để xem tài khoản kế tiếp trong danh sách mà không phải đóng cửa sổ.

### In sổ chi tiết S38-DN

**Bước 1 –** Trong cửa sổ sổ chi tiết, bấm **In S38-DN**.

**Bước 2 –** Cửa sổ xem trước mở ra: tên công ty, địa chỉ, nhãn *Mẫu số S38-DN*, tiêu đề **SỔ CHI TIẾT TÀI KHOẢN**, dòng **Tài khoản: <số> · <tên>**, kỳ **Từ ngày … đến ngày …**, **Số dư đầu kỳ**, rồi bảng STT, Ngày ghi sổ, Số chứng từ, Diễn giải, TK đối ứng, Phát sinh Nợ, Phát sinh Có, Số dư (Hình 4). In hoặc lưu file theo [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/); bấm **Đóng** ở góc phải thanh công cụ để quay lại.

![Hình 4: Bản in sổ chi tiết tài khoản mẫu S38-DN](/posts/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/hinh-04-ban-in-s38-dn.png)

Bản in lấy đúng số liệu đang hiện trong cửa sổ; đổi kỳ thì đóng cửa sổ, chọn lại khoảng ngày rồi mở lại.

## 6. Giải thích các thông tin trên màn hình

- **Khoảng ngày**: Ý nghĩa: Kỳ báo cáo; Lưu ý: Tính theo **Ngày ghi sổ** của bút toán
- **Số dư đầu kỳ**: Ý nghĩa: Số dư trước ngày đầu kỳ; Lưu ý: Theo tính chất tài khoản; âm = dư ngược chiều
- **Phát sinh nợ / có**: Ý nghĩa: Tổng ghi Nợ / Có trong kỳ; Lưu ý: Chỉ bút toán đã ghi sổ
- **Số dư cuối kỳ**: Ý nghĩa: Số dư hết ngày cuối kỳ; Lưu ý: = đầu kỳ ± phát sinh
- **Số chứng từ**: Ý nghĩa: Số bút toán; Lưu ý: Tiền tố cho biết loại chứng từ (bảng phần “Trình tự công việc”); không phải mã phiếu gốc
- **TK đối ứng**: Ý nghĩa: Tài khoản vế đối diện; Lưu ý: **nhiều** khi đối ứng với hơn một tài khoản
- **Số dư (từng dòng)**: Ý nghĩa: Số dư lũy kế; Lưu ý: Sắp theo ngày ghi sổ, số chứng từ
- **Gộp TK con**: Ý nghĩa: Gộp các tài khoản con vào sổ của tài khoản cha; Lưu ý: Chỉ hiện với tài khoản cha

## 7. Kiểm tra sau khi thực hiện

Bạn xem được số dư, phát sinh và từng dòng bút toán của tài khoản trong kỳ, biết dòng nào sinh từ chứng từ nào, và in / xuất được sổ chi tiết.

## 8. Những điều cần lưu ý

⚠️ **Sổ chỉ có chứng từ đã được ghi sổ.** Bút toán sinh theo đợt, không sinh ngay khi lưu chứng từ. Chứng từ mới lập có thể chưa lên sổ cho đến lần hạch toán kế tiếp.

⚠️ **Chứng từ có ngày không thuộc kỳ kế toán nào bị bỏ qua.** Kế toán trưởng cần tạo kỳ kế toán cho đủ các tháng ([TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/)) trước khi hạch toán.

⚠️ **Sửa hoặc xoá chứng từ sau khi đã ghi sổ không làm thay đổi bút toán đã có.** Số trên sổ có thể lệch với chứng từ hiện tại; báo kế toán trưởng để xử lý.

⚠️ Lệnh **chuyển tiền nội bộ**, **lệnh vay** và **phiếu hạch toán lương** hiện **không** sinh bút toán. Số dư 111 / 112 / 334 / 622… trên sổ có thể khác tồn quỹ hoặc bảng lương.

⚠️ Cột **Số dư đầu kỳ** / **Số dư cuối kỳ** trên danh sách mang dấu theo tính chất từng tài khoản, nên **dòng tổng** của hai cột này cộng lẫn dư Nợ và dư Có — không dùng để kiểm tra cân đối. Kiểm tra cân đối ở **Bảng cân đối phát sinh** ([TỔNG QUAN MÀN HÌNH BẢNG CÂN ĐỐI PHÁT SINH](/bai-viet/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/)).

⚠️ Bút toán trong **kỳ đã khoá sổ** không thể thêm, đảo hay hủy.

### Danh sách trống, hiện "Không có tài khoản phát sinh trong kỳ" 

Nguyên nhân: khoảng ngày chưa có bút toán đã ghi sổ (chưa chạy hạch toán, chưa có kỳ kế toán), hoặc đang ở chi nhánh khác.
Cách xử lý: chọn lại khoảng ngày và kiểm tra đúng địa chỉ hệ thống của đơn vị; hỏi kế toán trưởng đã tạo kỳ và chạy hạch toán cho kỳ đó chưa.

### Chứng từ đã lập nhưng không thấy trên sổ 

Nguyên nhân: chưa đến lần hạch toán kế tiếp, ngày chứng từ không thuộc kỳ kế toán, hoặc chứng từ thuộc loại không sinh bút toán (xem phần “Trình tự công việc”).
Cách xử lý: kiểm tra kỳ kế toán ([TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/)); báo kế toán trưởng.

### "Lỗi tải sổ chi tiết. Thử lại." (Lỗi hệ thống)

Nguyên nhân: không tải được sổ của tài khoản.
Cách xử lý: bấm **Thử lại**. Vẫn lỗi thì xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

### Số dư 131 / 331 trên sổ khác báo cáo công nợ 

Nguyên nhân thường gặp: chứng từ đã sửa / xoá sau khi ghi sổ, chứng từ chưa ghi sổ, hoặc chứng từ ngoài kỳ kế toán.
Cách xử lý: so từng dòng sổ với báo cáo công nợ; báo kế toán trưởng các chứng từ lệch.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Vì sao số chứng từ trên sổ không giống mã phiếu?**
Số chứng từ trên sổ là số bút toán (tiền tố loại chứng từ + số nội bộ). Mã phiếu gốc nằm ở dòng diễn giải chung trong cửa sổ xem nhanh bút toán.

**Một phiếu xuất kho bán hàng sinh mấy bút toán?**
Hai: một bút toán doanh thu (XKDT) và một bút toán giá vốn (XKGV).

**Có nhập bút toán tay ở màn này được không?**
Không. Màn hình chỉ xem.

**Số dư đầu kỳ tính từ khi nào?**
Từ bút toán đầu tiên đã ghi sổ trên hệ thống, cộng dồn đến trước ngày đầu kỳ.

## 11. Công việc tiếp theo

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH BẢNG CÂN ĐỐI PHÁT SINH](/bai-viet/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/) – Tổng quan màn hình Bảng cân đối phát sinh (kiểm tra tổng Nợ = tổng Có của mọi tài khoản).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH BẢNG CÂN ĐỐI PHÁT SINH](/bai-viet/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/) – Tổng quan màn hình Bảng cân đối phát sinh
- [TỔNG QUAN MÀN HÌNH SỔ KẾ TOÁN](/bai-viet/2026-11-07-kt-a11-0-tong-quan-man-hinh-so-ke-toan/) – Tổng quan màn hình Sổ kế toán
- [TỔNG QUAN MÀN HÌNH BÚT TOÁN PHÁT SINH](/bai-viet/2026-11-07-kt-a12-0-tong-quan-man-hinh-but-toan-phat-sinh/) – Tổng quan màn hình Bút toán phát sinh
- [TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/) – Tổng quan màn hình Kỳ kế toán
- [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/), [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/), [TỔNG QUAN MÀN HÌNH PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-0-tong-quan-man-hinh-phieu-can-tru/) – Phiếu thu, Phiếu chi, Phiếu cấn trừ
- Sổ tay Kho hàng, Bán hàng, Mua hàng – các chứng từ sinh bút toán
- Sổ tay Giá thành – Kết chuyển chi phí
