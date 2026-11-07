---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ GIẢM GIÁ CHI TIẾT"
date: "2026-11-07"
summary: "Hướng dẫn sử dụng chức năng tổng quan màn hình thống kê giảm giá chi tiết, gồm thao tác, thông tin cần kiểm tra và lưu ý liên quan."
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

Màn hình **Giảm giá chi tiết** (tiêu đề trên màn: **THỐNG KÊ - CHI TIẾT GIẢM GIÁ**) liệt kê **từng dòng hàng trên các phiếu giảm giá** (BH-A05) của **chi nhánh đang làm việc** có ngày giảm giá trong khoảng bạn chọn: giảm cho khách nào, từ phiếu xuất nào, mặt hàng nào, bao nhiêu tiền, hình thức giảm, đã chi chưa, ai chịu trách nhiệm.

Bạn dùng màn hình này khi:

- Tổng hợp tiền giảm giá cho khách trong kỳ.
- Theo dõi khoản giảm giá hình thức **Chi tiền** đã chi hay chưa.
- Xem ai duyệt, ai chịu trách nhiệm từng khoản giảm.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có **phiếu giảm giá** trong khoảng ngày cần xem ([TỔNG QUAN MÀN HÌNH PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-0-tong-quan-man-hinh-phieu-giam-gia/)).

## 2. Mở chức năng

**Thống kê bán hàng → Giảm giá chi tiết**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ - CHI TIẾT GIẢM GIÁ](/posts/2026-11-07-bh-b07-0-tong-quan-man-hinh-thong-ke-giam-gia-chi-tiet/hinh-01-man-hinh-giam-gia-chi-tiet.png)

- **Ô khoảng ngày**: Chức năng: Chọn khoảng **ngày giảm giá**. Lần đầu là **Hôm nay**, lần sau nhớ lựa chọn gần nhất (ảnh: **yday** = hôm qua 11/10/2026); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…, hàng lọc (khung không số dưới tiêu đề cột)**: Chức năng: Tìm, lọc, ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: Tổng **SL**, **Thành tiền** (ở cột bên phải); **không có chữ "TỔNG CỘNG: n"**; Hướng dẫn: phần “Những điều cần lưu ý”

Lưới hiện **10 dòng mỗi trang** (chọn được 10 / 15 / 20) và nhớ bố cục cột ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Các cột trên lưới:** mỗi dòng là một dòng hàng trên phiếu giảm giá.

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày giảm giá**: Ý nghĩa: Ngày của phiếu giảm giá
- **Mã phiếu**: Ý nghĩa: Mã phiếu giảm giá
- **Từ phiếu**: Ý nghĩa: Mã **phiếu xuất kho** được giảm giá
- **Khách hàng**: Ý nghĩa: Tên đầy đủ của khách
- **N/v kinh doanh**: Ý nghĩa: Nhân viên sale trên phiếu giảm giá
- **Người duyệt**: Ý nghĩa: Người duyệt giảm giá (trống khi phiếu chưa duyệt)
- **Người x.nhận**: Ý nghĩa: Kế toán xác nhận (trống khi chưa xác nhận)
- **Hình thức giảm**: Ý nghĩa: **Chi tiền**, **Trừ công nợ** hoặc **Giảm trừ giá thành**
- **Trạng thái chi**: Ý nghĩa: **Chưa chi** / **Đã chi** (thường trống với hình thức không chi tiền)
- **Ghi chú**: Ý nghĩa: Ghi chú của phiếu
- **Tên hàng hoá, Mã hàng hoá, Đvt**: Ý nghĩa: Mặt hàng được giảm
- **Tấm/kiện**: Ý nghĩa: Số tấm mỗi kiện của hàng (danh mục hàng hoá)
- **SL**: Ý nghĩa: Số lượng được giảm
- **Đơn giá**: Ý nghĩa: Số tiền giảm trên một đơn vị
- **Thành tiền**: Ý nghĩa: SL × Đơn giá
- **Người chịu trách nhiệm**: Ý nghĩa: Ghi trên dòng giảm giá
- **Chú thích**: Ý nghĩa: Chú thích của dòng

Bấm chuột phải vào **tiêu đề cột** để sắp xếp, cố định cột, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Màn hình không có thao tác nhấp đúp; muốn xem phiếu, lấy **Mã phiếu** rồi tìm ở màn **Phiếu giảm giá** ([TỔNG QUAN MÀN HÌNH PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-0-tong-quan-man-hinh-phieu-giam-gia/)).

## 4. Trình tự công việc

```text
Phiếu xuất kho (KHO-A05) → Phiếu giảm giá (BH-A05)
      ↓
Giảm giá chi tiết (theo ngày giảm giá, chi nhánh đang làm việc)
      ├── Lọc Hình thức giảm / Trạng thái chi
      └── Xuất Excel (GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Xem giảm giá trong tháng**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem khoản phải chi cho khách**: Cách làm: Lọc **Hình thức giảm** = **Chi tiền**; kiểm tra trạng thái trống, **Chưa chi**, **Đang chi**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem giảm giá của một nhân viên**: Cách làm: Lọc cột **N/v kinh doanh**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Rà các khoản giảm giá bằng tiền chưa chi

**Bước 1 –** Mở **Thống kê bán hàng → Giảm giá chi tiết**.

**Bước 2 –** Chọn khoảng ngày cần rà (ví dụ **Tháng trước**).

**Bước 3 –** Lọc **Hình thức giảm** = **Chi tiền**, rà các dòng trạng thái trống, **Chưa chi** và **Đang chi** nếu có. Mở phiếu giảm giá gốc để kiểm tình trạng duyệt/xác nhận và **Tiền đã chi**.

**Bước 4 –** Tổng **Thành tiền** là tổng khoản giảm của các dòng đang xem, không tự là số còn phải chi. Đối chiếu từng mã GG: **còn chi = Tổng tiền giảm − Tiền đã chi** trên phiếu gốc. Một phiếu có nhiều dòng thì chỉ trừ Tiền đã chi một lần, tránh cộng trùng.

## 6. Giải thích các thông tin trên màn hình

- **Thành tiền**: Cách tính: SL × Đơn giá, lấy đúng như lưu trên phiếu giảm giá
- **Từ phiếu**: Cách tính: Mã phiếu xuất kho mà phiếu giảm giá được lập theo

Dữ liệu được lấy khi thoả **đủ**: **ngày giảm giá** trong khoảng ngày; phiếu thuộc **chi nhánh đang làm việc**. Màn **không** giới hạn theo nhóm khách hàng hay kho được phân. Lưới xếp ngày giảm giá mới nhất lên trên.

## 7. Kiểm tra sau khi thực hiện

Bạn có danh sách chi tiết các khoản giảm giá trong kỳ, biết hình thức, trạng thái chi, người duyệt và người chịu trách nhiệm.

## 8. Những điều cần lưu ý

⚠️ **Trạng thái chi** chỉ có ý nghĩa với hình thức **Chi tiền**; các hình thức khác để trống. Một số phiếu **Chi tiền** cũng có thể để trống trạng thái — khi rà khoản chưa chi, xem cả các dòng **Chi tiền** có **Trạng thái chi** trống.

⚠️ Màn **Doanh số bán hàng** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/)) trừ giảm giá **theo ngày giảm giá** và chỉ tính phiếu **có nhân viên sale**; màn **Tần suất mua hàng** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TẦN SUẤT MUA HÀNG](/bai-viet/2026-11-07-bh-b01-0-tong-quan-man-hinh-thong-ke-tan-suat-mua-hang/)) và **Doanh số bảng giá** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BẢNG GIÁ](/bai-viet/2026-11-07-bh-b11-0-tong-quan-man-hinh-thong-ke-doanh-so-bang-gia/)) **không trừ** giảm giá. Doanh số giữa các màn lệch nhau là do vậy.

⚠️ Dòng tổng cuối lưới **không hiện chữ "TỔNG CỘNG"** (số dòng). Tổng **SL**, **Thành tiền** vẫn tính bình thường.

### Thiếu phiếu so với màn Phiếu giảm giá 

Nguyên nhân: phiếu thuộc chi nhánh khác; ngày giảm giá ngoài khoảng ngày.
Cách xử lý: kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)); chọn lại khoảng ngày.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập** màn hình.
Cách xử lý: liên hệ quản trị hệ thống.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Đơn giá ở đây là giá bán hay tiền giảm?**
Là **tiền giảm trên một đơn vị** hàng, không phải giá bán.

**Ba hình thức giảm khác nhau thế nào?**
Màn thống kê chỉ hiển thị hình thức đã chọn trên phiếu. Luồng hiện hành của [TỔNG QUAN MÀN HÌNH PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-0-tong-quan-man-hinh-phieu-giam-gia/) hướng dẫn **Chi tiền** và **Trừ công nợ**. Giá trị **Giảm trừ giá thành** nếu gặp ở dữ liệu cũ cần người phụ trách giải thích, không áp mặc định luồng chi tiền hoặc trừ nợ.

## 11. Công việc tiếp theo

```text
Giảm giá chi tiết → khoản "Chi tiền" chưa chi → lập phiếu chi (KT-A04.0)
                  → xem ảnh hưởng tới doanh số (BH-B12.0, cột "Giảm giá")
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-0-tong-quan-man-hinh-phieu-giam-gia/) – Tổng quan màn hình Phiếu giảm giá
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/) – Tổng quan màn hình thống kê Doanh số bán hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
- [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/) – Tổng quan màn hình Phiếu chi
