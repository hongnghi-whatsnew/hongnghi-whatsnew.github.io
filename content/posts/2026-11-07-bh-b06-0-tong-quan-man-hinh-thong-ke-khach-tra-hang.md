---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ KHÁCH TRẢ HÀNG"
date: "2026-11-07"
summary: "Màn hình Khách trả hàng (tiêu đề trên màn: THỐNG KÊ - KHÁCH TRẢ HÀNG) liệt kê từng dòng hàng khách trả lại đã nhập kho trong khoảng ngày bạn chọn: khách nào, trả hàng gì, bao nhiêu, đơn giá, thành tiền có VAT."
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

Màn hình **Khách trả hàng** (tiêu đề trên màn: **THỐNG KÊ - KHÁCH TRẢ HÀNG**) liệt kê **từng dòng hàng khách trả lại đã nhập kho** trong khoảng ngày bạn chọn: khách nào, trả hàng gì, bao nhiêu, đơn giá, thành tiền có VAT.

Số liệu lấy từ **phiếu nhập kho có khách hàng** (KHO-A04, nhập khách trả hàng), không lấy từ phiếu khách trả hàng (BH-A04). Phiếu khách trả hàng **chỉ hiện ở đây sau khi đã nhập kho**.

Bạn dùng màn hình này khi:

- Tổng hợp hàng bị trả trong kỳ theo khách, theo mặt hàng.
- Đối chiếu với phiếu khách trả hàng, hoá đơn điều chỉnh.
- Tìm nguyên nhân doanh số giảm (cột **Trả** ở [TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”, được phân **kho** nhận hàng trả.
- Phiếu khách trả hàng ([TỔNG QUAN MÀN HÌNH KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-0-tong-quan-man-hinh-khach-tra-hang/)) đã được **nhập kho** ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/)).

## 2. Mở chức năng

**Thống kê bán hàng → Khách trả hàng**

Lưu ý: nhóm **Bán hàng** cũng có menu tên **Khách trả hàng** — đó là màn **lập phiếu** khách trả hàng ([TỔNG QUAN MÀN HÌNH KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-0-tong-quan-man-hinh-khach-tra-hang/)), không phải màn thống kê này.

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ - KHÁCH TRẢ HÀNG](/posts/2026-11-07-bh-b06-0-tong-quan-man-hinh-thong-ke-khach-tra-hang/hinh-01-man-hinh-khach-tra-hang.png)

- **Ô khoảng ngày**: Chức năng: Chọn khoảng **ngày nhập kho** hàng trả. Lần đầu là **Hôm nay**, lần sau nhớ lựa chọn gần nhất (ảnh: **yday** = hôm qua 11/10/2026); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột, trong đó có các cột ẩn sẵn; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…, hàng lọc (khung không số dưới tiêu đề cột)**: Chức năng: Tìm, lọc từng cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: **TỔNG CỘNG: n** (số dòng); tổng **SL M³**, **SL**, **Thành tiền**

Lưới hiện **10 dòng mỗi trang** (chọn được 10 / 15 / 20) và nhớ bố cục cột ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Các cột trên lưới** (cột ghi "ẩn sẵn" bật trong **Trình chọn cột**):

- **STT**: Ý nghĩa: Số thứ tự
- **Nhóm khách hàng (ẩn sẵn)**: Ý nghĩa: Hiện chưa có số liệu (luôn trống)
- **Mã loại hàng, Mã tiêu chuẩn (ẩn sẵn)**: Ý nghĩa: Quy cách hàng hoá
- **Mã khách hàng (ẩn sẵn)**: Ý nghĩa: Mã khách
- **Tên khách hàng, Tên rút gọn**: Ý nghĩa: Khách trả hàng
- **Nhân viên sale**: Ý nghĩa: Nhân viên kinh doanh trên phiếu nhập
- **Ngày trả hàng**: Ý nghĩa: Ngày nhập kho hàng trả
- **Mã phiếu trả**: Ý nghĩa: Mã **phiếu nhập kho** dạng **NK…** (không phải mã phiếu khách trả hàng **KT…**)
- **Mã hàng hoá, Tên hàng hoá**: Ý nghĩa: Hàng trả
- **Đvt (ẩn sẵn)**: Ý nghĩa: Đơn vị tính
- **M³ (ẩn sẵn), SL M³**: Ý nghĩa: m³ một đơn vị; SL × M³
- **SL**: Ý nghĩa: Số lượng trả
- **Đơn giá**: Ý nghĩa: Đơn giá trên dòng nhập (chưa chiết khấu, chưa VAT)
- **Chiết khấu, Thuế VAT**: Ý nghĩa: Tỷ lệ của dòng + tỷ lệ của phiếu
- **Đơn giá VAT**: Ý nghĩa: Đơn giá sau chiết khấu, đã cộng VAT
- **Thành tiền**: Ý nghĩa: SL × Đơn giá VAT
- **Chú thích**: Ý nghĩa: Chú thích của dòng nhập

Bấm chuột phải vào **tiêu đề cột** để sắp xếp, cố định cột, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Màn hình không có thao tác nhấp đúp; muốn xem phiếu, lấy **Mã phiếu trả** rồi tìm ở màn **Phiếu nhập kho** ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/)).

## 4. Trình tự công việc

```text
Phiếu khách trả hàng (BH-A04) → Phiếu nhập kho khách trả (KHO-A04)
                                        ↓
                   Khách trả hàng (theo ngày nhập kho, kho được phân)
                   ├── Tìm / lọc / chọn cột (GEN-04)
                   └── Xuất Excel (GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Xem hàng trả trong tháng**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem hàng trả của một khách**: Cách làm: Lọc cột **Tên rút gọn**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem mặt hàng bị trả nhiều**: Cách làm: Sắp xếp cột **SL** hoặc lọc **Tên hàng hoá**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Tổng hợp hàng khách trả trong tháng

**Bước 1 –** Mở **Thống kê bán hàng → Khách trả hàng**.

**Bước 2 –** Chọn **Tháng này** ở ô khoảng ngày.

**Bước 3 –** Đọc dòng tổng: **SL**, **SL M³**, **Thành tiền** (có VAT) của hàng trả.

**Bước 4 –** Lọc theo khách hoặc nhân viên sale nếu cần tách; bấm **Xuất Excel** để gửi.

## 6. Giải thích các thông tin trên màn hình

- **SL M³**: Cách tính: SL × M³
- **Chiết khấu, Thuế VAT**: Cách tính: Tỷ lệ dòng + tỷ lệ phiếu nhập
- **Đơn giá VAT**: Cách tính: Đơn giá × (1 − Chiết khấu) × (1 + Thuế VAT)
- **Thành tiền**: Cách tính: SL × Đơn giá VAT

Dữ liệu được lấy khi thoả **đủ**: **ngày nhập kho** trong khoảng ngày; phiếu nhập **có khách hàng**; **kho nhập** của dòng thuộc kho được phân (trừ quản trị hệ thống). Màn không giới hạn theo nhóm khách hàng trong dữ liệu hệ thống đang truy cập. Phạm vi chỉ trong dữ liệu của hệ thống đang truy cập; mỗi tên miền hệ thống chính thức có dữ liệu và tài khoản riêng, không tự lấy dữ liệu từ các chi nhánh ở tên miền khác. Lưới xếp theo mã phiếu nhập.

## 7. Kiểm tra sau khi thực hiện

Bạn có danh sách từng dòng hàng khách trả đã nhập kho trong kỳ, với số lượng và giá trị có VAT.

## 8. Những điều cần lưu ý

⚠️ Phiếu khách trả hàng **chưa nhập kho** không có trên màn này. Muốn biết phiếu trả nào chưa nhập, xem ở màn **Khách trả hàng** nhóm Bán hàng ([TỔNG QUAN MÀN HÌNH KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-0-tong-quan-man-hinh-khach-tra-hang/)).

⚠️ Số liệu nằm trong hệ thống đang truy cập và giới hạn theo kho bạn được phân; không coi đây là tổng từ các dữ liệu chi nhánh khác. Hai người khác kho có thể thấy **tổng khác nhau**.

⚠️ **Thành tiền** đã gồm VAT; cộng chiết khấu dòng với chiết khấu phiếu. Khi phiếu nhập khai cả hai loại, số ở đây có thể khác số lưu trên phiếu nhập và khác cột **Trả** ở **Doanh số bán hàng** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/)), vốn lấy thành tiền lưu trên phiếu.

⚠️ Màn **Doanh số bán hàng** chỉ tính phiếu trả **có nhân viên sale**; màn này tính mọi phiếu nhập có khách. Tổng ở hai màn có thể lệch.

### Không thấy phiếu khách trả vừa lập 

Nguyên nhân: phiếu khách trả hàng chưa được nhập kho; ngày nhập kho ngoài khoảng ngày; kho nhập không thuộc kho được phân.
Cách xử lý: lập phiếu nhập kho từ phiếu khách trả ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/)); chọn lại khoảng ngày; liên hệ quản trị hệ thống phân kho.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập** màn hình.
Cách xử lý: liên hệ quản trị hệ thống.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Mã phiếu trả là mã phiếu nào?**
Là mã **phiếu nhập kho** nhận hàng trả (**NK…**), không phải mã phiếu khách trả hàng (**KT…**). Muốn tìm phiếu khách trả gốc, tra phiếu nhập kho đó ở màn **Phiếu nhập kho** ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/)).

**Thành tiền có VAT không?**
Có. Đã trừ chiết khấu và cộng VAT.

## 11. Công việc tiếp theo

```text
Khách trả hàng → đối chiếu phiếu khách trả (BH-A04.0)
               → xem ảnh hưởng tới doanh số (BH-B12.0, cột "Trả")
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-0-tong-quan-man-hinh-khach-tra-hang/) – Tổng quan màn hình Khách trả hàng (lập phiếu)
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/) – Tổng quan màn hình Phiếu nhập kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/) – Tổng quan màn hình thống kê Doanh số bán hàng
