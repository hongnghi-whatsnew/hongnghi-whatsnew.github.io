---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BẢNG GIÁ"
date: "2026-11-07"
summary: "Màn hình Doanh số bảng giá (tiêu đề trên màn: THỐNG KÊ - DOANH SỐ BẢNG GIÁ) cho biết, trong khoảng ngày bạn chọn, mỗi khách hàng mua theo bảng giá nào và được bao nhiêu doanh số: tiền hàng đã xuất, tiền hàng khách trả lại, và doanh số còn lại."
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

Màn hình **Doanh số bảng giá** (tiêu đề trên màn: **THỐNG KÊ - DOANH SỐ BẢNG GIÁ**) cho biết, trong khoảng ngày bạn chọn, **mỗi khách hàng mua theo bảng giá nào và được bao nhiêu doanh số**: tiền hàng đã xuất, tiền hàng khách trả lại, và doanh số còn lại.

Bạn dùng màn hình này khi:

- Đánh giá hiệu quả một bảng giá (khách nào mua theo bảng này, bao nhiêu tiền).
- Kiểm tra khách có đang được bán đúng bảng giá không.
- Tìm phần doanh số **không theo bảng giá** nào (dòng **Tên bảng giá** trống).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”, được phân nhóm khách hàng.
- Phiếu bán hàng được lập theo **bảng giá** ([TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/)) và đã **xuất kho** ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/)) trong khoảng ngày cần xem.

## 2. Mở chức năng

**Thống kê bán hàng → Doanh số bảng giá**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ - DOANH SỐ BẢNG GIÁ](/posts/2026-11-07-bh-b11-0-tong-quan-man-hinh-thong-ke-doanh-so-bang-gia/hinh-01-man-hinh-doanh-so-bang-gia.png)

- **Ô khoảng ngày**: Chức năng: Chọn khoảng **ngày xuất kho / ngày nhập trả**. Lần đầu là **Hôm nay**, lần sau nhớ lựa chọn gần nhất; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…, hàng lọc (khung không số dưới tiêu đề cột)**: Chức năng: Tìm, lọc, ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: Tổng **Bán**, **Trả**, **Doanh số** – không có trên ảnh (lưới trống do lỗi); Hướng dẫn: phần “Những điều cần lưu ý”

Lưới hiện **10 dòng mỗi trang** (chọn được 10 / 15 / 20) và nhớ bố cục cột ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Các cột trên lưới:** mỗi dòng là một cặp *khách hàng – bảng giá*.

- **STT**: Ý nghĩa: Số thứ tự
- **Khách hàng**: Ý nghĩa: Tên đầy đủ của khách
- **Tên bảng giá**: Ý nghĩa: Bảng giá của dòng phiếu bán gốc; trống = không theo bảng giá nào
- **Ngày áp dụng**: Ý nghĩa: Ngày có hiệu lực của bảng giá
- **Bán**: Ý nghĩa: Tiền hàng đã xuất kho cho khách theo bảng giá này
- **Trả**: Ý nghĩa: Tiền hàng khách trả lại (đã nhập kho) truy về bảng giá này
- **Doanh số**: Ý nghĩa: Bán − Trả

Bấm chuột phải vào **tiêu đề cột** để sắp xếp, cố định cột, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Màn hình không có thao tác nhấp đúp; muốn xem chứng từ chi tiết, dùng **Xuất bán chi tiết** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT BÁN CHI TIẾT](/bai-viet/2026-11-07-bh-b05-0-tong-quan-man-hinh-thong-ke-xuat-ban-chi-tiet/)) và **Khách trả hàng** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-b06-0-tong-quan-man-hinh-thong-ke-khach-tra-hang/)) cùng khoảng ngày.

**Thông báo lỗi ghi nhận ngày 12/10/2026** (khung đỏ, góc trên màn hình; mỗi lần tải hiện một thông báo):

![Hình 2: Thông báo lỗi khi tải màn Doanh số bảng giá](/posts/2026-11-07-bh-b11-0-tong-quan-man-hinh-thong-ke-doanh-so-bang-gia/hinh-02-thong-bao-loi.png)

## 4. Trình tự công việc

```text
Bảng giá → dòng phiếu bán (BH-A03) → dòng phiếu xuất kho (KHO-A05)  → "Bán"
                                   → phiếu khách trả (BH-A04)
                                   → phiếu nhập kho khách trả (KHO-A04) → "Trả"
      ↓
Doanh số bảng giá = Bán − Trả, theo khách hàng và bảng giá
```

## 5. Thực hiện trên phần mềm

- **Xem doanh số trong tháng**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem một bảng giá**: Cách làm: Lọc cột **Tên bảng giá**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem phần bán không theo bảng giá**: Cách làm: Lọc **Tên bảng giá** trống; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem doanh số của một bảng giá trong quý

**Bước 1 –** Mở **Thống kê bán hàng → Doanh số bảng giá**.

**Bước 2 –** Chọn khoảng ngày của quý cần xem.

Nếu xuất hiện lỗi tải, không đọc lưới trống như doanh số bằng 0. Ghi khoảng ngày/câu báo và chuyển IT xử lý; chỉ làm tiếp khi tải được dữ liệu.

**Bước 3 –** Gõ tên bảng giá vào hàng lọc cột **Tên bảng giá**.

**Bước 4 –** Đọc dòng tổng **Doanh số** — tổng doanh số các khách mua theo bảng giá đó.

## 6. Giải thích các thông tin trên màn hình

- **Bán**: Cách tính: Tổng thành tiền (đã trừ chiết khấu, **đã gồm VAT**) các dòng phiếu xuất kho có khách, ngày xuất trong khoảng; quy về bảng giá của dòng phiếu bán mà dòng xuất được lập từ đó
- **Trả**: Cách tính: Tổng thành tiền (đã gồm VAT) các dòng phiếu nhập kho có khách, ngày nhập trong khoảng; truy ngược dòng nhập → dòng phiếu khách trả → dòng phiếu xuất → dòng phiếu bán → bảng giá
- **Doanh số**: Cách tính: Bán − Trả
- **Tên bảng giá trống**: Cách tính: Dòng xuất không lập từ phiếu bán, dòng phiếu bán không chọn bảng giá, hoặc dòng trả không truy được về phiếu bán

Dữ liệu lấy trong hệ thống đang truy cập; chỉ khách thuộc **nhóm khách hàng được phân** cho bạn (quản trị hệ thống thấy mọi khách). **Không** trừ phiếu giảm giá và **không** gồm bán dịch vụ.

## 7. Kiểm tra sau khi thực hiện

Bạn biết mỗi khách mua theo bảng giá nào, tiền bán, tiền trả và doanh số còn lại của từng cặp khách – bảng giá trong kỳ.

## 8. Những điều cần lưu ý

⚠️ **Doanh số** ở màn này **không trừ giảm giá** và **không gồm dịch vụ**, nên thường **cao hơn** cột **Doanh số KPI** và khác cột **Doanh số** ở màn **Doanh số bán hàng** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/)).

⚠️ Màn tính theo **ngày xuất kho** (bán) và **ngày nhập kho** (trả), không theo ngày lập phiếu bán.

⚠️ Một khách có thể có nhiều dòng (mua theo nhiều bảng giá, hoặc có phần không theo bảng giá).

⚠️ Phạm vi chỉ trong dữ liệu của hệ thống đang truy cập; mỗi tên miền hệ thống chính thức có dữ liệu và tài khoản riêng, không tự lấy dữ liệu từ các chi nhánh ở tên miền khác.

### "CẢNH BÁO – Xảy ra lỗi: Đã xảy ra lỗi trong quá trình xử lý. Vui lòng thử lại hoặc liên hệ quản trị hệ thống." (Lỗi hệ thống)

Nguyên nhân: lỗi của chức năng tính số liệu trên máy chủ (đã báo IT, thử 12/10/2026 lỗi ở mọi khoảng ngày).
Cách xử lý: chờ IT sửa; tạm dùng **Doanh số bán hàng** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/)), **Xuất bán chi tiết** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT BÁN CHI TIẾT](/bai-viet/2026-11-07-bh-b05-0-tong-quan-man-hinh-thong-ke-xuat-ban-chi-tiet/)).

### Thiếu khách so với các thống kê khác 

Nguyên nhân: khách không thuộc nhóm khách hàng được phân cho bạn.
Cách xử lý: liên hệ quản trị hệ thống.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập**.
Cách xử lý: liên hệ quản trị hệ thống.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Doanh số có gồm VAT không?**
Có. Lấy thành tiền đã trừ chiết khấu và cộng VAT trên phiếu xuất / phiếu nhập trả.

**Vì sao có dòng Tên bảng giá trống?**
Phần hàng xuất không gắn với bảng giá nào (bán giá tự nhập, xuất không qua phiếu bán…), hoặc hàng trả không truy được về phiếu bán gốc.

## 11. Công việc tiếp theo

```text
Doanh số bảng giá → so sánh bảng giá (BH-B09.0)
                  → xem doanh số đầy đủ (trừ giảm giá, có dịch vụ) (BH-B12.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH BẢNG SO SÁNH GIÁ](/bai-viet/2026-11-07-bh-b09-0-tong-quan-man-hinh-bang-so-sanh-gia/) – Tổng quan màn hình Bảng so sánh giá
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/) – Tổng quan màn hình thống kê Doanh số bán hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT BÁN CHI TIẾT](/bai-viet/2026-11-07-bh-b05-0-tong-quan-man-hinh-thong-ke-xuat-ban-chi-tiet/) – Tổng quan màn hình thống kê Xuất bán chi tiết
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-b06-0-tong-quan-man-hinh-thong-ke-khach-tra-hang/) – Tổng quan màn hình thống kê Khách trả hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/) – Tổng quan màn hình Phiếu bán hàng
