---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT BÁN CHI TIẾT"
date: "2026-11-07"
summary: "Hướng dẫn sử dụng chức năng tổng quan màn hình thống kê xuất bán chi tiết, gồm thao tác, thông tin cần kiểm tra và lưu ý liên quan."
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

Màn hình **Xuất bán chi tiết** (tiêu đề trên màn: **THỐNG KÊ - XUẤT BÁN HÀNG CHI TIẾT**) liệt kê **từng dòng hàng trên các phiếu xuất kho giao cho khách** (KHO-A05) có ngày xuất trong khoảng bạn chọn: hàng gì, kho nào, khách nào, đơn giá, chiết khấu, VAT, thành tiền; người có quyền còn xem được **giá vốn, tiền vốn, lãi/lỗ** từng dòng. Mỗi dòng truy về **phiếu bán** và **phiếu đặt hàng** gốc.

Bạn dùng màn hình này khi:

- Đối chiếu hàng đã giao với hoá đơn (cột **Chứng từ**, **Có lấy hóa đơn**, **Tên Cty nhận hđ**).
- Tính doanh số theo ngày giao hàng của từng nhân viên sale.
- Xem lãi gộp từng dòng bán (khi có quyền **Xem giá vốn**).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”, được phân **kho** cần xem.
- Đã có **phiếu xuất kho** có khách hàng trong khoảng ngày cần xem ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/)).

## 2. Mở chức năng

**Thống kê bán hàng → Xuất bán chi tiết**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ - XUẤT BÁN HÀNG CHI TIẾT](/posts/2026-11-07-bh-b05-0-tong-quan-man-hinh-thong-ke-xuat-ban-chi-tiet/hinh-01-man-hinh-xuat-ban-chi-tiet.png)

- **Ô khoảng ngày**: Chức năng: Chọn khoảng **ngày xuất kho**. Lần đầu là **Hôm nay**, lần sau nhớ lựa chọn gần nhất (ảnh: **yday** = hôm qua 11/10/2026); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Ô Tất cả nhân viên...**: Chức năng: Nằm **đầu hàng**, bên trái ô khoảng ngày. Chỉ hiện khi có quyền **Chọn nhân viên**. Chọn một, nhiều hoặc tất cả nhân viên sale; mặc định là chính bạn (ảnh: thẻ **Administrator**); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột; nhiều cột ẩn sẵn (phần “Nhận biết màn hình”, bảng cột); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…, hàng lọc (khung không số dưới tiêu đề cột)**: Chức năng: Tìm, lọc từng cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Nhóm cột giá vốn**: Chức năng: **Đơn giá vốn**, **Tiền vốn**, **Lãi/lỗ**, **% Lãi/lỗ** — chỉ có khi có quyền **Xem giá vốn**; ở bên phải lưới (không có trên ảnh); Hướng dẫn: phần “Giải thích các thông tin trên màn hình”
- **Dòng tổng cuối lưới**: Chức năng: **TỔNG CỘNG: n** (số dòng); tổng **SL**, **SL M³**, **Thành tiền VAT**, **Tiền vốn**, **Lãi/lỗ** (và **Thành tiền** khi hiện cột)

Lưới hiện **10 dòng mỗi trang** (chọn được 10 / 15 / 20) và nhớ bố cục cột ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Chuột phải tiêu đề cột → **Khôi phục bố cục** đưa lưới về mặc định và áp lại quyền xem giá vốn.

**Các cột trên lưới** (cột ghi "ẩn sẵn" bật trong **Trình chọn cột**):

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày xuất kho**: Ý nghĩa: Ngày của phiếu xuất — hiện dạng **2026-10-11** (năm-tháng-ngày), không theo dd/MM/yyyy như các cột ngày khác; hàng lọc của cột này không có lịch chọn ngày
- **Mã phiếu**: Ý nghĩa: Mã phiếu xuất kho
- **Mã phiếu gốc**: Ý nghĩa: Mã phiếu gốc ghi trên phiếu xuất
- **Biển số xe**: Ý nghĩa: Xe giao hàng
- **Mã kho xuất (ẩn sẵn), Kho xuất**: Ý nghĩa: Kho xuất của dòng
- **Mã khách hàng, Mã số thuế, Khách hàng (ẩn sẵn)**: Ý nghĩa: Thông tin khách
- **Tên rút gọn**: Ý nghĩa: Tên rút gọn của khách
- **Có lấy hóa đơn, Tên Cty nhận hđ**: Ý nghĩa: Thông tin xuất hoá đơn trên phiếu xuất
- **Chứng từ**: Ý nghĩa: Số hoá đơn của dòng xuất
- **Nhân viên sale**: Ý nghĩa: Nhân viên kinh doanh trên phiếu xuất
- **Mã hàng hoá**: Ý nghĩa: Mã hàng (có thêm một cột cùng tên ẩn sẵn)
- **Dày, Rộng, Dài (ẩn sẵn)**: Ý nghĩa: Kích thước hàng
- **Tên hàng hoá (ẩn sẵn)**: Ý nghĩa: Tên trong danh mục
- **Tên in**: Ý nghĩa: Tên in trên phiếu; trống thì lấy tên hàng hoá
- **M³ (ẩn sẵn), SL M³**: Ý nghĩa: m³ một đơn vị; SL × M³
- **Tiêu chuẩn, Loại hàng, Gia công, Số mặt, Nhà cung cấp (ẩn sẵn)**: Ý nghĩa: Quy cách hàng hoá
- **SL**: Ý nghĩa: Số lượng xuất (gồm cả số lượng theo lô)
- **Đơn giá**: Ý nghĩa: Đơn giá nhập trên dòng (chưa chiết khấu, chưa VAT)
- **Thành tiền (ẩn sẵn)**: Ý nghĩa: SL × Đơn giá
- **Chiết khấu, Thuế VAT**: Ý nghĩa: Tỷ lệ của dòng + tỷ lệ của phiếu
- **Đơn giá sau CK**: Ý nghĩa: Đơn giá sau chiết khấu, **chưa** VAT
- **Đơn giá VAT**: Ý nghĩa: Đơn giá sau chiết khấu, **đã** cộng VAT
- **Thành tiền VAT**: Ý nghĩa: SL × Đơn giá VAT
- **Thành tiền CK**: Ý nghĩa: Số lượng × Đơn giá sau CK (xem phần “Những điều cần lưu ý”)
- **Đơn giá vốn, Tiền vốn, Lãi/lỗ, % Lãi/lỗ**: Ý nghĩa: Chỉ khi có quyền **Xem giá vốn** (xem phần “Giải thích các thông tin trên màn hình”)
- **Ghi chú, Ghi chú nội bộ**: Ý nghĩa: Chú thích của dòng xuất
- **Số PO**: Ý nghĩa: Số PO của khách ghi trên dòng
- **Mã phiếu bán, Ngày bán**: Ý nghĩa: Phiếu bán hàng gốc
- **Mã phiếu đặt, Ngày đặt**: Ý nghĩa: Phiếu đặt hàng gốc của phiếu bán

Màn hình không có thao tác nhấp đúp; muốn xem phiếu, lấy **Mã phiếu** rồi tìm ở màn **Phiếu xuất kho** ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/)).

## 4. Trình tự công việc

```text
Phiếu đặt hàng (BH-A02) → Phiếu bán hàng (BH-A03) → Phiếu xuất kho (KHO-A05)
                                                          ↓  giá vốn từ sổ cái kho
                                   Xuất bán chi tiết (theo ngày xuất, kho được phân)
                                   ├── Lọc nhân viên sale (nếu có quyền)
                                   ├── Tìm / lọc / chọn cột (GEN-04)
                                   └── Xuất Excel (GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Xem hàng giao trong tháng**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem phiếu của nhân viên khác**: Cách làm: Chọn ở ô **Tất cả nhân viên...** rồi bấm nút xác nhận
- **Hiện cột quy cách (dày, rộng…)**: Cách làm: **Trình chọn cột** → kéo cột ra lưới; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem dòng bán lỗ**: Cách làm: Lọc cột **Lãi/lỗ** < 0 (cần quyền **Xem giá vốn**); Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem doanh số giao hàng của các nhân viên sale trong tháng

**Bước 1 –** Mở **Thống kê bán hàng → Xuất bán chi tiết**.

**Bước 2 –** Chọn **Tháng này** ở ô khoảng ngày.

**Bước 3 –** Bấm ô **Tất cả nhân viên...**, tick chọn tất cả (hoặc các nhân viên cần xem), bấm nút xác nhận ở cuối danh sách. Lưới tự tải.

**Bước 4 –** Sắp xếp hoặc lọc cột **Nhân viên sale**, đọc tổng **Thành tiền VAT**. Đối chiếu phiếu xuất gốc với các dòng có lô và có cả CK/VAT phiếu lẫn dòng; không lấy tổng Thành tiền CK làm toàn bộ tiền bán của hàng theo lô (xem phần “Những điều cần lưu ý”).

**Bước 5 –** Bấm **Tải lại** khi cần cập nhật số mới hoặc sau khi thay điều kiện lọc. Nếu cần làm việc với chi nhánh khác, mở đúng tên miền và đăng nhập bằng tài khoản được cấp cho hệ thống đó ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).

## 6. Giải thích các thông tin trên màn hình

- **SL**: Cách tính: Số lượng + số lượng theo lô của dòng xuất
- **Chiết khấu, Thuế VAT**: Cách tính: Tỷ lệ dòng + tỷ lệ phiếu
- **Đơn giá sau CK**: Cách tính: Đơn giá × (1 − Chiết khấu)
- **Đơn giá VAT**: Cách tính: Đơn giá sau CK × (1 + Thuế VAT)
- **Thành tiền**: Cách tính: SL × Đơn giá
- **Thành tiền VAT**: Cách tính: SL × Đơn giá VAT
- **Thành tiền CK**: Cách tính: Số lượng (**không gồm** số lượng theo lô) × Đơn giá sau CK
- **Đơn giá vốn**: Cách tính: Giá bình quân của hàng **ngay sau lần xuất này** ghi trong sổ cái kho; nếu sổ cái chưa có thì lấy giá vốn hiện hành của hàng tại chi nhánh
- **Tiền vốn**: Cách tính: Đơn giá vốn × SL
- **Lãi/lỗ**: Cách tính: SL × Đơn giá sau CK − Tiền vốn (so sánh **chưa VAT**)
- **% Lãi/lỗ**: Cách tính: Lãi/lỗ ÷ Tiền vốn; bằng 0 khi Tiền vốn = 0

Dữ liệu được lấy khi thoả **đủ**: **ngày xuất kho** trong khoảng ngày; phiếu xuất **có khách hàng**; **kho xuất** của dòng thuộc kho được phân (trừ quản trị hệ thống); nhân viên sale của phiếu nằm trong danh sách đang chọn (chọn tất cả nhân viên = không lọc, kể cả phiếu không có nhân viên sale). Lưới xếp theo mã phiếu xuất.

## 7. Kiểm tra sau khi thực hiện

Bạn có chi tiết từng dòng hàng đã giao cho khách với giá bán sau chiết khấu, VAT, và (nếu có quyền) giá vốn, lãi/lỗ; truy được phiếu bán, phiếu đặt gốc.

## 8. Những điều cần lưu ý

⚠️ Phạm vi số liệu phụ thuộc các kho tài khoản được phân trong hệ thống đang truy cập. Hai tài khoản có phạm vi kho khác nhau có thể thấy **tổng khác nhau**. Không dùng tổng này để kết luận đã gộp dữ liệu của các tên miền/dữ liệu chi nhánh khác nhau.

⚠️ **Chiết khấu, Thuế VAT** trên màn cộng tỷ lệ dòng với tỷ lệ phiếu; phiếu xuất khi lưu chỉ dùng tỷ lệ của phiếu nếu phiếu có khai. Khi phiếu khai cả hai, **Thành tiền VAT** ở đây khác thành tiền lưu trên phiếu (và khác doanh số ở [TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/)).

⚠️ **Thành tiền CK** không tính phần số lượng theo lô, trong khi **SL**, **Thành tiền VAT**, **Lãi/lỗ** có tính. Dòng xuất theo lô sẽ có **Thành tiền CK** nhỏ hơn thực tế.

⚠️ **% Lãi/lỗ** là lãi **trên giá vốn** (Lãi/lỗ ÷ Tiền vốn), không phải trên doanh thu.

⚠️ **Đơn giá vốn** là giá bình quân tại thời điểm xuất. Nếu sau đó có tính lại giá vốn trên sổ cái kho thì số trên màn đổi theo.

⚠️ Màn tính theo **ngày xuất kho**; **Bán hàng chi tiết** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN HÀNG CHI TIẾT](/bai-viet/2026-11-07-bh-b03-0-tong-quan-man-hinh-thong-ke-ban-hang-chi-tiet/)) tính theo **ngày bán**. Hai màn có thể lệch nhau quanh cuối tháng.

### Lưới trống dù có phiếu xuất 

Nguyên nhân: không có quyền **Chọn nhân viên** và phiếu xuất có nhân viên sale khác bạn; kho xuất không thuộc kho được phân; có quyền chọn nhân viên nhưng lưới chưa tải lần đầu.
Cách xử lý: nhờ người có quyền xem; liên hệ quản trị hệ thống phân kho; bấm **Tải lại**.

### Không thấy cột giá vốn, lãi/lỗ 

Nguyên nhân: chưa có quyền **Xem giá vốn** (4 cột bị ẩn và không có trong **Trình chọn cột**).
Cách xử lý: liên hệ quản trị hệ thống nếu công việc cần.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập** màn hình.
Cách xử lý: liên hệ quản trị hệ thống.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Lãi/lỗ có tính VAT không?**
Không. Lãi/lỗ = tiền bán sau chiết khấu **chưa VAT** − tiền vốn.

**Vì sao Mã phiếu bán trống?**
Phiếu xuất không lập từ phiếu bán hàng (ví dụ xuất trực tiếp cho khách).

**Màn này khác Bán hàng chi tiết thế nào?**
**Bán hàng chi tiết** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN HÀNG CHI TIẾT](/bai-viet/2026-11-07-bh-b03-0-tong-quan-man-hinh-thong-ke-ban-hang-chi-tiet/)) là số **đã chốt bán** theo phiếu bán, theo ngày bán. **Xuất bán chi tiết** là số **đã giao** theo phiếu xuất, theo ngày xuất, có giá vốn.

## 11. Công việc tiếp theo

```text
Xuất bán chi tiết → dòng lỗ → kiểm tra giá bán / giá vốn (KHO-A09.0 Sổ cái kho)
                  → tổng hợp doanh số theo khách (BH-B12.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
- [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/) – Tổng quan màn hình Sổ cái kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN HÀNG CHI TIẾT](/bai-viet/2026-11-07-bh-b03-0-tong-quan-man-hinh-thong-ke-ban-hang-chi-tiet/) – Tổng quan màn hình thống kê Bán hàng chi tiết
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/) – Tổng quan màn hình thống kê Doanh số bán hàng
