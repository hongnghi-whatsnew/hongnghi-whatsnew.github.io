---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ LỊCH SỬ GIÁ XUẤT"
date: "2026-11-07"
summary: "Màn hình Lịch sử giá xuất (tiêu đề trên màn: THỐNG KÊ LỊCH SỬ GIÁ XUẤT) cho biết, trong một năm, mỗi mặt hàng đã bán (xuất kho) cho mỗi khách hàng với đơn giá đã gồm VAT bao nhiêu ở từng tháng."
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

Màn hình **Lịch sử giá xuất** (tiêu đề trên màn: **THỐNG KÊ LỊCH SỬ GIÁ XUẤT**) cho biết, trong **một năm**, mỗi mặt hàng đã bán (xuất kho) cho mỗi khách hàng với **đơn giá đã gồm VAT** bao nhiêu **ở từng tháng**. Lưới gom sẵn theo **khách hàng**; mỗi dòng là một cặp *khách hàng – hàng hoá*, 12 cột **T1 … T12** là giá của từng tháng.

Bạn dùng màn hình này khi:

- Xem giá đã bán cho một khách thay đổi thế nào qua các tháng.
- Kiểm tra trước khi báo giá: lần trước bán cho khách này giá bao nhiêu.
- So sánh giá cùng một mặt hàng giữa các khách.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đã có **phiếu xuất kho có khách hàng** trong năm cần xem ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/)).

## 2. Mở chức năng

**Thống kê bán hàng → Lịch sử giá xuất**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ LỊCH SỬ GIÁ XUẤT](/posts/2026-11-07-bh-b08-0-tong-quan-man-hinh-thong-ke-lich-su-gia-xuat/hinh-01-man-hinh-lich-su-gia-xuat.png)

*Ảnh minh hoạ đã gõ **TEST_HDSD** vào ô **Tìm kiếm…** để chỉ còn khách thử (che dữ liệu khách thật). Khung không số là tiêu đề nhóm cột **Đơn giá nhập (đã bao gồm VAT)** — xem phần “Những điều cần lưu ý”.*

- **Ô năm**: Chức năng: Chọn năm cần xem (từ 2021 đến năm hiện tại), mặc định năm hiện tại. Chọn năm khác thì lưới tự tải lại
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Vùng nhóm phía trên lưới**: Chức năng: Đang có thẻ **Khách hàng**. Kéo tiêu đề cột vào đây để gom nhóm theo cột khác; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng nhóm khách hàng**: Chức năng: Dạng **Tên khách hàng (N mặt hàng)**. Mặc định **thu gọn**; bấm vào để mở; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…, hàng lọc**: Chức năng: Tìm, lọc, ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)

Lưới hiện **10 dòng mỗi trang** (chọn được 10 / 15 / 20) và nhớ bố cục cột ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Các cột trên lưới:**

- **—**: Cột: STT; Ý nghĩa: Số thứ tự
- **Thông tin chung**: Cột: Khách hàng; Ý nghĩa: Tên khách hàng (đang dùng để gom nhóm)
- Cột: Tên hàng hoá; Ý nghĩa: Mặt hàng đã bán
- **Đơn giá nhập (đã bao gồm VAT)**: Cột: T1 … T12; Ý nghĩa: Các mức **đơn giá bán** đã gồm VAT của mặt hàng trong tháng đó; nhiều mức khác nhau thì nối bằng dấu `;`

Tiêu đề nhóm cột trên màn ghi **Đơn giá nhập (đã bao gồm VAT)** nhưng số liệu là **giá xuất bán** — xem phần “Những điều cần lưu ý”.

Bấm chuột phải vào **tiêu đề cột** để sắp xếp, cố định cột, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Màn hình không có thao tác nhấp đúp.

## 4. Trình tự công việc

```text
Phiếu xuất kho có khách (KHO-A05) → đơn giá VAT từng dòng
      ↓
Lịch sử giá xuất (theo năm)
      ├── Gom theo khách hàng → mở nhóm → xem T1 … T12
      ├── Kéo cột "Tên hàng hoá" lên vùng nhóm → so sánh giá giữa các khách
      └── Xuất Excel (GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Xem năm khác**: Cách làm: Chọn năm ở ô
- **Xem giá đã bán cho một khách**: Cách làm: Gõ tên vào **Tìm kiếm…** rồi bấm mở dòng nhóm; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **So sánh một mặt hàng giữa các khách**: Cách làm: Kéo cột **Tên hàng hoá** lên vùng nhóm, kéo **Khách hàng** ra khỏi vùng nhóm; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Đưa lưới về mặc định**: Cách làm: Chuột phải tiêu đề cột → **Khôi phục bố cục**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem giá đã bán cho một khách trong năm

**Bước 1 –** Mở **Thống kê bán hàng → Lịch sử giá xuất**. Ô năm mặc định là năm hiện tại.

**Bước 2 –** Gõ tên khách vào ô **Tìm kiếm…**.

**Bước 3 –** Bấm vào dòng nhóm **Tên khách hàng (N mặt hàng)** để mở danh sách mặt hàng.

**Bước 4 –** Đọc các cột **T1 … T12**. Ô có nhiều số cách nhau bởi dấu `;` là tháng đó bán với nhiều mức giá.

## 6. Giải thích các thông tin trên màn hình

- **T1 … T12**: Cách tính: Mỗi dòng phiếu xuất kho trong tháng: Đơn giá × (1 − Chiết khấu) × (1 + Thuế VAT), trong đó Chiết khấu, Thuế VAT = tỷ lệ dòng + tỷ lệ phiếu. Làm tròn đến đồng, bỏ mức trùng, nối bằng `;`

Dữ liệu lấy từ **mọi phiếu xuất kho có khách hàng** có ngày xuất trong năm đã chọn, trong hệ thống đang truy cập, **mọi khách hàng** trong dữ liệu đó (không giới hạn theo nhóm khách hàng được phân). Các mức giá **từ 1.000 đồng trở xuống** bị bỏ qua.

## 7. Kiểm tra sau khi thực hiện

Bạn có bảng giá bán theo tháng của từng mặt hàng, từng khách trong năm, xuất được ra Excel khi có quyền.

## 8. Những điều cần lưu ý

⚠️ Tiêu đề nhóm cột **Đơn giá nhập (đã bao gồm VAT)** là ghi nhầm — số liệu là **đơn giá xuất bán cho khách**, đã gồm VAT.

⚠️ Phạm vi chỉ trong dữ liệu của hệ thống đang truy cập; mỗi tên miền hệ thống chính thức có dữ liệu và tài khoản riêng, không tự lấy dữ liệu từ các chi nhánh ở tên miền khác. Trong phạm vi dữ liệu đó, báo cáo không giới hạn nhóm khách bạn phụ trách.

⚠️ Mỗi ô tháng là **chữ**, không phải số: không cộng / trung bình được, và sắp xếp cột T1 … T12 theo thứ tự chữ (ví dụ "100,000" có thể đứng trước "95,000").

⚠️ Giá là **đơn giá theo đơn vị tính của dòng xuất**. Cùng một mặt hàng bán theo đơn vị khác nhau sẽ ra mức giá khác nhau trong cùng tháng. Dòng xuất có giá 0 hoặc giá tượng trưng (≤ 1.000 đồng), ví dụ hàng tặng, không hiện.

⚠️ Giá ở đây cộng chiết khấu dòng với chiết khấu phiếu; nếu phiếu khai cả hai, giá có thể khác giá thực thu trên phiếu.

### Không thấy dòng nào dù đã có phiếu xuất 

Nguyên nhân: các dòng nhóm đang **thu gọn**; chọn sai năm; phiếu xuất không có khách hàng hoặc giá ≤ 1.000.
Cách xử lý: bấm mở dòng nhóm; chọn lại năm; kiểm tra phiếu xuất.

### Lưới không còn gom theo khách hàng 

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
Dùng **Biến động giá bán** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ BIẾN ĐỘNG GIÁ BÁN](/bai-viet/2026-11-07-bh-b10-0-tong-quan-man-hinh-thong-ke-bien-dong-gia-ban/)) hoặc **Xuất bán chi tiết** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT BÁN CHI TIẾT](/bai-viet/2026-11-07-bh-b05-0-tong-quan-man-hinh-thong-ke-xuat-ban-chi-tiet/)).

## 11. Công việc tiếp theo

```text
Lịch sử giá xuất → lần đổi giá gần nhất (BH-B10.0)
                 → báo giá, lập phiếu đặt hàng / phiếu bán (BH-A02.0, BH-A03.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT BÁN CHI TIẾT](/bai-viet/2026-11-07-bh-b05-0-tong-quan-man-hinh-thong-ke-xuat-ban-chi-tiet/) – Tổng quan màn hình thống kê Xuất bán chi tiết
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ BIẾN ĐỘNG GIÁ BÁN](/bai-viet/2026-11-07-bh-b10-0-tong-quan-man-hinh-thong-ke-bien-dong-gia-ban/) – Tổng quan màn hình thống kê Biến động giá bán
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ LỊCH SỬ GIÁ NHẬP](/bai-viet/2026-11-07-mh-b06-0-tong-quan-man-hinh-thong-ke-lich-su-gia-nhap/) – Tổng quan màn hình thống kê Lịch sử giá nhập
