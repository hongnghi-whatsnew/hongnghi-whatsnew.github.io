---
title: "TỔNG QUAN MÀN HÌNH BẢNG CÂN ĐỐI PHÁT SINH"
date: "2026-11-07"
summary: "Màn hình Bảng cân đối phát sinh (mẫu F01-DNN) liệt kê, trong một khoảng ngày, mọi tài khoản có số dư hoặc phát sinh, mỗi tài khoản một dòng với ba cặp cột Nợ / Có: Số dư đầu kỳ, Số phát sinh trong kỳ, Số dư cuối kỳ."
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

Màn hình **Bảng cân đối phát sinh** (mẫu F01-DNN) liệt kê, trong một khoảng ngày, mọi tài khoản có số dư hoặc phát sinh, mỗi tài khoản một dòng với ba cặp cột **Nợ / Có**: **Số dư đầu kỳ**, **Số phát sinh trong kỳ**, **Số dư cuối kỳ**.

Màn hình dùng để **kiểm tra cân đối**: tổng Nợ phải bằng tổng Có ở cả ba cặp cột. Ba ô tóm tắt ở đầu màn hình báo ngay **✓ Cân đối** hoặc **✗ Lệch**.

Số liệu lấy từ **bút toán đã ghi sổ** — cùng nguồn với Sổ chi tiết tài khoản ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/)). Màn hình **chỉ xem**.

Bạn dùng màn hình này khi:

- Kiểm tra cuối tháng / quý / năm xem sổ sách có cân Nợ = Có không.
- Xem nhanh số dư và phát sinh của tất cả tài khoản trên một bảng.
- In bảng cân đối phát sinh mẫu F01-DNN hoặc xuất Excel.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Bảng cân đối phát sinh**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)). Bảng chỉ tính bút toán của chi nhánh đang làm việc.
- Đã có **Kỳ kế toán** phủ các ngày cần xem ([TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/)) và chứng từ đã được **ghi sổ** (xem cách bút toán được tạo ở [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/), phần “Trình tự công việc”).

## 2. Mở chức năng

**Kế toán → Bảng cân đối phát sinh**

## 3. Nhận biết màn hình

![Hình 1: Màn hình BẢNG CÂN ĐỐI PHÁT SINH, khoảng Năm trước (01/01/2025 – 31/12/2025)](/posts/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/hinh-01-man-hinh-bang-can-doi-phat-sinh.png)

- **Nhãn F01-DNN, tiêu đề BẢNG CÂN ĐỐI PHÁT SINH, dòng Kỳ: … — …**: Chức năng: Mẫu báo cáo và kỳ đang xem
- **Xuất Excel**: Chức năng: Xuất bảng ra Excel (mờ khi bảng trống); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **In F01-DNN**: Chức năng: Xem trước và in bảng theo mẫu F01-DNN (mờ khi bảng trống); Hướng dẫn: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Ô chọn khoảng ngày**: Chức năng: Kỳ cần xem. Mặc định **Từ đầu tháng**; hệ thống nhớ khoảng ngày chọn lần trước; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tính lại số liệu; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Ba ô tóm tắt SỐ DƯ ĐẦU KỲ, PHÁT SINH TRONG KỲ, SỐ DƯ CUỐI KỲ**: Chức năng: Tổng **Nợ**, tổng **Có** và nhãn **✓ Cân đối** / **✗ Lệch** ở góc ô; Hướng dẫn: phần “Trình tự công việc”
- **Biểu tượng Xuất Excel của lưới, Trình chọn cột, Tìm kiếm…**: Chức năng: Xuất lưới, ẩn / hiện cột, tìm theo số hoặc tên tài khoản; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/), [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Dòng nhóm Loại: Loại n — …**: Chức năng: Nhóm tài khoản theo chữ số đầu, kèm tổng của nhóm ở các cột số tiền; Hướng dẫn: phần “Trình tự công việc”

Cuối bảng (cuộn xuống) có dòng tổng cộng sáu cột số tiền. Số lớn trong ô tóm tắt có thể bị cắt bớt ở mép phải ô (ví dụ cột **Có**); xem đủ số ở dòng tổng cuối bảng hoặc bản in.

**Các cột trên bảng:**

- **Số tài khoản**: Ý nghĩa: Mã tài khoản (ví dụ 111, 131, 5111). Cột được ghim bên trái
- **Tên tài khoản**: Ý nghĩa: Tên tài khoản
- **Số dư đầu kỳ – Nợ / Có**: Ý nghĩa: Số dư trước ngày đầu kỳ, đặt vào cột Nợ hoặc Có tuỳ chiều dư
- **Số phát sinh trong kỳ – Nợ / Có**: Ý nghĩa: Tổng ghi Nợ / tổng ghi Có trong kỳ
- **Số dư cuối kỳ – Nợ / Có**: Ý nghĩa: Số dư hết ngày cuối kỳ, đặt vào cột Nợ hoặc Có tuỳ chiều dư

Số bên **Nợ** chữ xanh, bên **Có** chữ cam, số 0 chữ mờ. Không có tài khoản nào: bảng hiện **Không có tài khoản phát sinh trong kỳ**.

**Các nhóm tài khoản (dòng nhóm, trên màn hình có thêm tiền tố "Loại:", ví dụ *Loại: Loại 1 — Tài sản ngắn hạn*):**

- **Loại 1 — Tài sản ngắn hạn**: Tài khoản bắt đầu bằng: 1
- **Loại 2 — Tài sản dài hạn**: Tài khoản bắt đầu bằng: 2
- **Loại 3 — Nợ phải trả**: Tài khoản bắt đầu bằng: 3
- **Loại 4 — Vốn chủ sở hữu**: Tài khoản bắt đầu bằng: 4
- **Loại 5 — Doanh thu**: Tài khoản bắt đầu bằng: 5
- **Loại 6 — Chi phí sản xuất, kinh doanh**: Tài khoản bắt đầu bằng: 6
- **Loại 7 — Thu nhập khác**: Tài khoản bắt đầu bằng: 7
- **Loại 8 — Chi phí khác**: Tài khoản bắt đầu bằng: 8
- **Loại 9 — Xác định kết quả kinh doanh**: Tài khoản bắt đầu bằng: 9
- **Loại 0 — Tài khoản ngoài bảng**: Tài khoản bắt đầu bằng: 0

Bấm vào dòng nhóm để thu gọn / mở nhóm. Chuột phải vào tiêu đề cột có các lệnh nhóm và sắp xếp ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

**Nguồn số liệu:**

```text
Chứng từ (Kho, Bán hàng, Mua hàng, Kế toán…)
      ↓
Hạch toán tự động → bút toán đã ghi sổ (KT-A09.0, phần “Trình tự công việc”)
      ↓
Bảng cân đối phát sinh: gom theo tài khoản, chi nhánh đang làm việc
      ↓
Tổng Nợ = Tổng Có ? ── có ──► Cân đối
                     └── không ──► Lệch → kiểm tra bút toán
```

### Cách tính từng dòng

Với mỗi tài khoản, hệ thống cộng các dòng bút toán **đã ghi sổ** của chi nhánh (số tiền ngoại tệ quy đổi theo tỷ giá, làm tròn 2 chữ số lẻ):

```text
Dư đầu (ròng) = Σ Nợ − Σ Có của các bút toán TRƯỚC ngày đầu kỳ
PS Nợ, PS Có  = Σ Nợ, Σ Có của các bút toán TỪ ngày đầu kỳ ĐẾN ngày cuối kỳ
Dư cuối (ròng) = Dư đầu (ròng) + PS Nợ − PS Có
```

- Dư ròng **dương** → ghi vào cột **Nợ** (dư Nợ).
- Dư ròng **âm** → ghi giá trị tuyệt đối vào cột **Có** (dư Có).
- Mỗi tài khoản chỉ có số ở **một** trong hai cột số dư (Nợ hoặc Có), cột kia bằng 0.

Khác với Sổ chi tiết tài khoản (số dư mang dấu theo tính chất tài khoản), ở đây số dư luôn dương và **cột** cho biết chiều dư. Ví dụ TK 131 đang dư Có 5.000.000 (khách trả thừa) hiện ở cột **Có**, không phải số âm.

Bảng chỉ có tài khoản có **số dư đầu kỳ, phát sinh hoặc số dư cuối kỳ khác 0**. Dòng xếp theo thứ tự hệ thống tài khoản.

### Cách tính ô tóm tắt

```text
Ô Số dư đầu kỳ: Nợ = Σ cột Dư đầu Nợ; Có = Σ cột Dư đầu Có
Ô Phát sinh: Nợ = Σ cột PS Nợ; Có = Σ cột PS Có
Ô Số dư cuối kỳ: Nợ = Σ cột Dư cuối Nợ; Có = Σ cột Dư cuối Có
Cân đối khi Nợ = Có (so sau khi làm tròn đến đồng)
```

Vì mọi bút toán đã ghi sổ đều cân Nợ = Có, ba ô bình thường luôn **✓ Cân đối**. Ô nào **✗ Lệch** (nền ô đổi màu) nghĩa là có bút toán không cân hoặc dữ liệu bất thường — báo kế toán trưởng / IT.

**Các chức năng trên màn hình:**

```text
Bảng cân đối phát sinh
   ├── Chọn khoảng ngày ──► tính lại bảng + ba ô tóm tắt
   ├── Tìm kiếm / lọc / thu gọn nhóm Loại
   ├── Xuất Excel ──► file Excel
   └── In F01-DNN ──► cửa sổ xem trước khi in
```

## 5. Thực hiện trên phần mềm

- **Chọn kỳ cần xem**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Kiểm tra cân đối**: Cách làm: Xem ba ô tóm tắt; Bài hướng dẫn: Mục này
- **Tìm một tài khoản**: Cách làm: Gõ số hoặc tên tài khoản vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem từng dòng bút toán của một tài khoản**: Cách làm: **Kế toán → Sổ chi tiết tài khoản** → **Xem sổ**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/)
- **In F01-DNN**: Cách làm: **In F01-DNN**; Bài hướng dẫn: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Xuất Excel**: Cách làm: **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Kiểm tra cân đối cuối kỳ

**Bước 1 –** Chọn khoảng ngày, ví dụ **Tháng trước** khi khoá sổ tháng, hoặc **Năm trước** để xem cả năm (Hình 1). Bảng tự tính lại.

**Bước 2 –** Xem ba ô tóm tắt. Cả ba phải là **✓ Cân đối**.

**Bước 3 –** Đối chiếu một vài tài khoản chính với chứng từ / báo cáo khác: 111, 112 với tồn quỹ (sổ tay Kế toán – Thống kê thu chi); 131 với công nợ khách hàng; 331 với công nợ NCC; 156 với giá trị tồn kho.

**Bước 4 –** Tài khoản nào lệch, mở **Sổ chi tiết tài khoản** cùng kỳ, **Xem sổ** tài khoản đó để tìm dòng bút toán sai ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/)).

### In bảng cân đối F01-DNN

**Bước 1 –** Chọn kỳ, chờ bảng tải xong.

**Bước 2 –** Bấm **In F01-DNN**. Cửa sổ xem trước mở ra (Hình 2): tên công ty, địa chỉ, nhãn *Mẫu số F01-DNN*, tiêu đề **BẢNG CÂN ĐỐI SỐ PHÁT SINH**, kỳ **Từ ngày … đến ngày …**, bảng STT, Số hiệu TK, Tên tài khoản và ba cặp cột Nợ / Có, dòng **TỔNG CỘNG**, ngày lập và ba chỗ ký **Người lập biểu**, **Kế toán trưởng**, **Giám đốc**. In hoặc lưu file theo [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/). Bấm **Đóng** trên thanh công cụ để quay lại.

![Hình 2: Bản in Bảng cân đối phát sinh mẫu F01-DNN](/posts/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/hinh-02-ban-in-f01-dnn.png)

Bản in lấy đúng các dòng đang có trên màn hình lúc bấm nút; không tải lại số liệu.

## 6. Giải thích các thông tin trên màn hình

- **Khoảng ngày**: Ý nghĩa: Kỳ báo cáo; Lưu ý: Tính theo ngày ghi sổ của bút toán
- **Số dư đầu kỳ Nợ / Có**: Ý nghĩa: Dư ròng trước ngày đầu kỳ; Lưu ý: Chỉ một trong hai cột có số
- **Số phát sinh Nợ / Có**: Ý nghĩa: Tổng ghi Nợ / Có trong kỳ; Lưu ý: Cả hai cột có thể có số
- **Số dư cuối kỳ Nợ / Có**: Ý nghĩa: Dư ròng hết ngày cuối kỳ; Lưu ý: = Dư đầu + PS Nợ − PS Có, đặt theo chiều dư
- **Loại**: Ý nghĩa: Chữ số đầu của số tài khoản; Lưu ý: Dùng để nhóm
- **✓ Cân đối / ✗ Lệch**: Ý nghĩa: Tổng Nợ có bằng tổng Có không; Lưu ý: So sau khi làm tròn đến đồng

## 7. Kiểm tra sau khi thực hiện

Bạn biết sổ sách trong kỳ có cân Nợ = Có không, thấy số dư và phát sinh của mọi tài khoản trên một bảng, và in / xuất được bảng cân đối phát sinh mẫu F01-DNN.

## 8. Những điều cần lưu ý

⚠️ **Chỉ có chứng từ đã ghi sổ.** Chứng từ chưa hạch toán, chứng từ có ngày ngoài kỳ kế toán, và các loại chưa sinh bút toán (chuyển tiền nội bộ, lệnh vay, phiếu hạch toán lương) **không** có trên bảng ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/), phần “Những điều cần lưu ý”).

⚠️ **Số dư tài khoản công nợ là số ròng.** TK 131, 331 hiện **một** số dư (Nợ hoặc Có) sau khi bù trừ mọi khách hàng / NCC, không tách dư Nợ và dư Có theo từng đối tượng. Muốn biết từng khách / NCC, xem báo cáo công nợ (sổ tay Kế toán – Thống kê công nợ).

⚠️ **Bảng không có dòng tổng hợp tài khoản cấp 1.** Bảng chỉ có đúng các tài khoản được ghi bút toán (ví dụ 111, 112, 5111, 5112, 5113) — không có dòng cộng 511 = 5111 + 5112 + 5113; tổng theo nhóm xem ở dòng **Loại: Loại n — …**.

⚠️ Đối chiếu số liệu trong đúng hệ thống chi nhánh và khoảng kỳ đang chọn. Bảng này không tự hợp nhất dữ liệu từ các tên miền/dữ liệu độc lập.

⚠️ Sửa / xoá chứng từ sau khi đã ghi sổ **không** làm thay đổi bút toán đã có, nên bảng có thể vẫn cân nhưng lệch với chứng từ hiện tại.

### Bảng trống, hiện "Không có tài khoản phát sinh trong kỳ" 

Nguyên nhân: kỳ chưa có bút toán đã ghi sổ, đang ở chi nhánh khác, hoặc khoảng ngày chọn sai.
Cách xử lý: chọn lại khoảng ngày và kiểm tra đúng địa chỉ hệ thống của đơn vị; hỏi kế toán trưởng đã tạo kỳ kế toán và chạy hạch toán chưa. Nếu chắc chắn có dữ liệu mà vẫn trống, bấm **Tải lại**; vẫn trống thì báo IT (màn hình không hiện câu báo khi tải lỗi).

### Ô tóm tắt hiện "✗ Lệch" (Lỗi hệ thống)

Nguyên nhân: có bút toán không cân Nợ / Có hoặc dữ liệu bút toán bất thường.
Cách xử lý: báo kế toán trưởng / IT kèm kỳ và chi nhánh đang xem.

### Nút "Xuất Excel" / "In F01-DNN" bị mờ 

Nguyên nhân: bảng đang trống.
Cách xử lý: chọn kỳ có số liệu.

### Số 131 / 331 / 111 trên bảng khác báo cáo công nợ / tồn quỹ 

Nguyên nhân thường gặp: chứng từ chưa ghi sổ, chứng từ đã sửa / xoá sau khi ghi sổ, hoặc loại chứng từ chưa sinh bút toán.
Cách xử lý: mở Sổ chi tiết tài khoản ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/)) để so từng dòng; báo kế toán trưởng.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Vì sao TK 131 lại nằm ở cột Có?**
Tổng các khách hàng đang dư Có (khách trả thừa / trả trước nhiều hơn nợ). Bảng ghi số dư ròng theo chiều dư.

**Bảng cân đối phát sinh khác Sổ chi tiết tài khoản thế nào?**
Bảng cân đối là tổng hợp mọi tài khoản trên một bảng, tách Nợ / Có. Sổ chi tiết xem từng dòng bút toán của một tài khoản.

**Có xem được toàn công ty không?**
Không. Bảng tính theo chi nhánh đang làm việc.

## 11. Công việc tiếp theo

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) – Tổng quan màn hình Sổ chi tiết tài khoản (xem từng dòng bút toán của tài khoản cần kiểm tra); [TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/) – Kỳ kế toán (khoá sổ khi số liệu đã đúng).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) – Tổng quan màn hình Sổ chi tiết tài khoản
- [TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/) – Tổng quan màn hình Kỳ kế toán
- [TỔNG QUAN MÀN HÌNH SỔ KẾ TOÁN](/bai-viet/2026-11-07-kt-a11-0-tong-quan-man-hinh-so-ke-toan/) – Tổng quan màn hình Sổ kế toán
- Sổ tay Kế toán – Thống kê thu chi, Thống kê công nợ
