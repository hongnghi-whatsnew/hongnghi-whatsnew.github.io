---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN DỊCH VỤ"
date: "2026-11-07"
summary: "Màn hình Bán dịch vụ (tiêu đề trên màn: THỐNG KÊ - CHI TIẾT BÁN DỊCH VỤ) liệt kê từng dòng trên các phiếu bán dịch vụ (BH-A06) của chi nhánh đang làm việc có ngày bán trong khoảng bạn chọn: dịch vụ gì, bán cho ai, số lượng, đơn giá, thành tiền trước và sau VAT, ngày đến hạn thu tiền."
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

Màn hình **Bán dịch vụ** (tiêu đề trên màn: **THỐNG KÊ - CHI TIẾT BÁN DỊCH VỤ**) liệt kê **từng dòng trên các phiếu bán dịch vụ** (BH-A06) của **chi nhánh đang làm việc** có ngày bán trong khoảng bạn chọn: dịch vụ gì, bán cho ai, số lượng, đơn giá, thành tiền trước và sau VAT, ngày đến hạn thu tiền.

Bạn dùng màn hình này khi:

- Tổng hợp doanh thu dịch vụ (cắt xẻ, vận chuyển, gia công thuê…) trong kỳ.
- Đối chiếu công nợ dịch vụ theo ngày đến hạn.
- Xuất danh sách cho kế toán xuất hoá đơn.

Phiếu bán dịch vụ không qua kho nên **không** có trên các màn tính theo phiếu xuất kho (Xuất bán chi tiết, Tần suất mua hàng, Doanh số bảng giá).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có **phiếu bán dịch vụ** có khách hàng trong khoảng ngày cần xem ([TỔNG QUAN MÀN HÌNH PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-0-tong-quan-man-hinh-phieu-ban-dich-vu/)).

## 2. Mở chức năng

**Thống kê bán hàng → Bán dịch vụ**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ - CHI TIẾT BÁN DỊCH VỤ](/posts/2026-11-07-bh-b04-0-tong-quan-man-hinh-thong-ke-ban-dich-vu/hinh-01-man-hinh-ban-dich-vu.png)

- **Ô khoảng ngày**: Chức năng: Chọn khoảng **ngày bán**. Lần đầu là **Hôm nay** (nhãn **today** đầu ô), lần sau nhớ lựa chọn gần nhất; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột, trong đó có cột ẩn sẵn **Mã khách hàng**, **Mã hàng hoá**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…, hàng lọc (khung không số dưới tiêu đề cột)**: Chức năng: Tìm, lọc từng cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: **TỔNG CỘNG: n** (số dòng); tổng **SL**, **SL tất toán**, **Thành tiền**, **Thành tiền (VAT)**

Lưới hiện **10 dòng mỗi trang** (chọn được 10 / 15 / 20) và nhớ bố cục cột ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Các cột trên lưới:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày bán**: Ý nghĩa: Ngày của phiếu bán dịch vụ
- **Mã phiếu**: Ý nghĩa: Mã phiếu bán dịch vụ
- **Chứng từ/HĐ**: Ý nghĩa: Hiện chưa có số liệu (luôn trống) — xem phần “Những điều cần lưu ý”
- **Mã khách hàng**: Ý nghĩa: Ẩn sẵn
- **Tên khách hàng, Khách hàng**: Ý nghĩa: Tên đầy đủ và tên rút gọn của khách
- **Đến hạn**: Ý nghĩa: Ngày bán + Số ngày nợ của khách
- **Số ngày nợ**: Ý nghĩa: Số ngày nợ trong danh mục khách hàng
- **Ghi chú**: Ý nghĩa: Ghi chú của phiếu
- **Mã hàng hoá**: Ý nghĩa: Ẩn sẵn; mã dịch vụ
- **Tên hàng hoá**: Ý nghĩa: Tên dịch vụ
- **Đvt**: Ý nghĩa: Đơn vị tính
- **SL**: Ý nghĩa: Số lượng
- **SL tất toán**: Ý nghĩa: Hiện chưa có số liệu (luôn trống) — xem phần “Những điều cần lưu ý”
- **Đơn giá**: Ý nghĩa: Đơn giá nhập trên phiếu (chưa chiết khấu, chưa VAT)
- **Thành tiền**: Ý nghĩa: SL × Đơn giá
- **Chiết khấu, Thuế VAT**: Ý nghĩa: Tỷ lệ của dòng + tỷ lệ của phiếu
- **Đơn giá (VAT)**: Ý nghĩa: Đơn giá sau chiết khấu, đã cộng VAT
- **Thành tiền (VAT)**: Ý nghĩa: SL × Đơn giá (VAT)
- **Chú thích, Chú thích nội bộ**: Ý nghĩa: Ghi chú của dòng

Bấm chuột phải vào **tiêu đề cột** để sắp xếp, cố định cột, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Màn hình không có thao tác nhấp đúp; muốn xem phiếu, lấy **Mã phiếu** rồi tìm ở màn **Phiếu bán dịch vụ** ([TỔNG QUAN MÀN HÌNH PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-0-tong-quan-man-hinh-phieu-ban-dich-vu/)).

## 4. Trình tự công việc

```text
Phiếu bán dịch vụ (BH-A06) → Bán dịch vụ (theo ngày bán, chi nhánh đang làm việc)
                              ├── Tìm / lọc / chọn cột (GEN-04)
                              └── Xuất Excel (GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Xem dịch vụ bán trong tháng**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem theo khách / theo dịch vụ**: Cách làm: Lọc cột **Khách hàng** / **Tên hàng hoá**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm khoản sắp đến hạn**: Cách làm: Sắp xếp cột **Đến hạn**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Sửa phiếu**: Cách làm: Vào màn **Phiếu bán dịch vụ**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-0-tong-quan-man-hinh-phieu-ban-dich-vu/)

### Tổng hợp doanh thu dịch vụ trong tháng

**Bước 1 –** Mở **Thống kê bán hàng → Bán dịch vụ**.

**Bước 2 –** Chọn **Tháng này** (hoặc tháng cần xem) ở ô khoảng ngày.

**Bước 3 –** Đọc dòng tổng: **Thành tiền** là tiền dịch vụ trước chiết khấu và VAT; **Thành tiền (VAT)** là tiền sau chiết khấu, đã gồm VAT.

**Bước 4 –** Muốn tách theo khách, kéo lọc cột **Khách hàng**; dòng tổng cộng các dòng đang lọc.

## 6. Giải thích các thông tin trên màn hình

- **Đến hạn**: Cách tính: Ngày bán + Số ngày nợ (số ngày nợ **hiện tại** của khách)
- **Thành tiền**: Cách tính: SL × Đơn giá (chưa chiết khấu, chưa VAT)
- **Chiết khấu, Thuế VAT**: Cách tính: Tỷ lệ dòng + tỷ lệ phiếu
- **Đơn giá (VAT)**: Cách tính: Đơn giá × (1 − Chiết khấu) × (1 + Thuế VAT)
- **Thành tiền (VAT)**: Cách tính: SL × Đơn giá (VAT)

Dữ liệu được lấy khi thoả **đủ**: phiếu bán **loại dịch vụ**; **ngày bán** trong khoảng ngày; phiếu thuộc **chi nhánh đang làm việc**; phiếu có khách hàng; dòng có **SL khác 0**. Màn hình **không** giới hạn theo nhóm khách hàng được phân. Lưới xếp theo ngày bán tăng dần.

## 7. Kiểm tra sau khi thực hiện

Bạn có danh sách từng dòng dịch vụ đã bán trong kỳ với thành tiền trước / sau VAT và ngày đến hạn; xuất được ra Excel khi có quyền.

## 8. Những điều cần lưu ý

⚠️ **Thành tiền (VAT)** tính trên **SL** của dòng, không trừ phần tất toán. Phiếu bán dịch vụ khi lưu tính thành tiền **trừ phần tất toán**, nên tổng ở đây có thể **lớn hơn** cột **Dịch vụ** trên màn **Doanh số bán hàng** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/)) khi phiếu có tất toán.

⚠️ Chiết khấu, VAT ở đây cộng tỷ lệ dòng với tỷ lệ phiếu. Khi phiếu khai cả hai, số trên màn có thể khác số trên phiếu (phiếu ưu tiên tỷ lệ của phiếu).

⚠️ **Đến hạn** lấy theo số ngày nợ **hiện tại** của khách, không phải số ngày nợ lúc lập phiếu.

### Thiếu phiếu so với màn Phiếu bán dịch vụ 

Nguyên nhân: phiếu thuộc chi nhánh khác; phiếu không có khách hàng; dòng có SL = 0.
Cách xử lý: kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)); kiểm tra phiếu.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập** màn hình.
Cách xử lý: liên hệ quản trị hệ thống.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Thành tiền và Thành tiền (VAT) khác nhau thế nào?**
**Thành tiền** = SL × đơn giá gốc, chưa trừ chiết khấu, chưa VAT. **Thành tiền (VAT)** = đã trừ chiết khấu và cộng VAT theo công thức báo cáo. Đối chiếu phiếu đã lưu và công nợ trước chốt tiền khách phải trả, nhất là khi có tất toán/CK chung và dòng.

**Phiếu bán hàng thường có hiện ở đây không?**
Không. Phiếu bán hàng (hàng hoá) xem ở **Bán hàng chi tiết** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN HÀNG CHI TIẾT](/bai-viet/2026-11-07-bh-b03-0-tong-quan-man-hinh-thong-ke-ban-hang-chi-tiet/)).

## 11. Công việc tiếp theo

```text
Bán dịch vụ → đối chiếu công nợ khách (KT-C06.0)
            → xem doanh số tổng hợp gồm dịch vụ (BH-B12.0, cột "Dịch vụ")
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-0-tong-quan-man-hinh-phieu-ban-dich-vu/) – Tổng quan màn hình Phiếu bán dịch vụ
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN HÀNG CHI TIẾT](/bai-viet/2026-11-07-bh-b03-0-tong-quan-man-hinh-thong-ke-ban-hang-chi-tiet/) – Tổng quan màn hình thống kê Bán hàng chi tiết
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/) – Tổng quan màn hình thống kê Doanh số bán hàng
