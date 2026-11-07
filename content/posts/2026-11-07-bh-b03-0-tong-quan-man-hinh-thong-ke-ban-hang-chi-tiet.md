---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN HÀNG CHI TIẾT"
date: "2026-11-07"
summary: "Màn hình Bán hàng chi tiết (tiêu đề trên màn: THỐNG KÊ - CHI TIẾT BÁN HÀNG) liệt kê từng dòng hàng trên các phiếu bán hàng (BH-A03) của chi nhánh đang làm việc có ngày bán trong khoảng bạn chọn."
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

Màn hình **Bán hàng chi tiết** (tiêu đề trên màn: **THỐNG KÊ - CHI TIẾT BÁN HÀNG**) liệt kê **từng dòng hàng trên các phiếu bán hàng** (BH-A03) của **chi nhánh đang làm việc** có ngày bán trong khoảng bạn chọn. Mỗi dòng cho biết bán gì, cho ai, giá bao nhiêu, **đã xuất kho bao nhiêu, còn lại bao nhiêu**, và truy về **phiếu đặt hàng** gốc.

Bạn dùng màn hình này khi:

- Rà hàng đã bán mà chưa giao (cột **SL Còn lại**, **Trạng thái xuất**).
- Xem giá bán, chiết khấu, VAT từng dòng.
- Đối chiếu phiếu bán với các lần xuất kho thực tế (cột **Xuất kho**).

Phiếu **bán dịch vụ** không có trên màn này — xem **Bán dịch vụ** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-b04-0-tong-quan-man-hinh-thong-ke-ban-dich-vu/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”, được phân nhóm khách hàng và kho cần xem.
- Đang làm việc đúng **chi nhánh** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có **phiếu bán hàng** trong khoảng ngày cần xem ([TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/)).

## 2. Mở chức năng

**Thống kê bán hàng → Bán hàng chi tiết**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ - CHI TIẾT BÁN HÀNG](/posts/2026-11-07-bh-b03-0-tong-quan-man-hinh-thong-ke-ban-hang-chi-tiet/hinh-01-man-hinh-ban-hang-chi-tiet.png)

- **Ô khoảng ngày**: Chức năng: Chọn khoảng **ngày bán hàng**. Lần đầu là **Hôm nay** (nhãn **today** đầu ô), lần sau nhớ lựa chọn gần nhất; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Hàng lọc dưới tiêu đề cột**: Chức năng: Lọc từng cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: **TỔNG CỘNG: n** (số dòng); tổng **SL Kiện**, **SL M³**, **SL**, **SL Đã xuất**, **SL Còn lại**, **Thành tiền**. Các ô tổng nằm ở cột bên phải — phần nhìn thấy trên ảnh để trống

Lưới hiện **10 dòng mỗi trang** (chọn được 10 / 15 / 20) và nhớ bố cục cột ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Các cột trên lưới:**

- **STT**: Ý nghĩa: Số thứ tự
- **Nhóm khách hàng**: Ý nghĩa: Nhóm của khách trong danh mục
- **Mã khách hàng, Tên khách hàng, Tên rút gọn**: Ý nghĩa: Khách mua
- **Nhân viên sale**: Ý nghĩa: Nhân viên kinh doanh trên phiếu bán
- **Ngày bán hàng**: Ý nghĩa: Ngày của phiếu bán
- **Mã phiếu bán**: Ý nghĩa: Mã phiếu bán hàng
- **Xuất kho**: Ý nghĩa: Các lần xuất kho của dòng, mỗi lần dạng **ngày, mã phiếu xuất, kho, số lượng**, cách nhau bằng dấu `;`
- **Trạng thái xuất**: Ý nghĩa: **Chưa xuất** / **Đang xuất** / **Đã xuất**
- **Mã hàng hoá, Tên hàng hoá, Đvt**: Ý nghĩa: Hàng bán và đơn vị tính của dòng
- **Gia công**: Ý nghĩa: Mã các định mức gia công của hàng
- **M³**: Ý nghĩa: m³ của một đơn vị hàng (danh mục hàng hoá)
- **SL M³**: Ý nghĩa: SL × M³
- **SL Kiện**: Ý nghĩa: SL ÷ số tấm/kiện của hàng
- **SL Quy đổi**: Ý nghĩa: **Hệ số** tấm/kiện của hàng trong danh mục (không phải số lượng)
- **SL**: Ý nghĩa: Số lượng bán
- **SL Đã xuất**: Ý nghĩa: Số lượng đã xuất kho
- **SL Còn lại**: Ý nghĩa: SL − SL Đã xuất
- **Đơn giá**: Ý nghĩa: Đơn giá **sau chiết khấu, đã gồm VAT**
- **Chiết khấu, Thuế VAT**: Ý nghĩa: Tỷ lệ của dòng + tỷ lệ của cả phiếu
- **Thành tiền**: Ý nghĩa: SL × Đơn giá
- **Chú thích nội bộ, Chú thích**: Ý nghĩa: Ghi chú của dòng bán
- **Số PO**: Ý nghĩa: Số đơn mua hàng (PO) của khách ghi trên dòng
- **Mã phiếu đặt, Ngày đặt**: Ý nghĩa: Phiếu đặt hàng gốc (trống nếu bán không theo đơn đặt)

Bấm chuột phải vào **tiêu đề cột** để sắp xếp, cố định cột, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Màn hình không có thao tác nhấp đúp; muốn xem phiếu, lấy **Mã phiếu bán** rồi tìm ở màn **Phiếu bán hàng** ([TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/)).

## 4. Trình tự công việc

```text
Phiếu đặt hàng (BH-A02) → Phiếu bán hàng (BH-A03) → Phiếu xuất kho (KHO-A05)
                                  ↓
                     Bán hàng chi tiết (theo ngày bán)
                     ├── cột "Xuất kho", "SL Đã xuất" lấy từ phiếu xuất kho
                     ├── Tìm / lọc / chọn cột (GEN-04)
                     └── Xuất Excel (GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Xem hàng bán trong tháng**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm hàng bán chưa giao**: Cách làm: Lọc cột **Trạng thái xuất** khác **Đã xuất**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem bán theo khách / nhân viên**: Cách làm: Lọc cột **Tên rút gọn** / **Nhân viên sale**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Sửa phiếu bán**: Cách làm: Vào màn **Phiếu bán hàng**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/)

### Tìm hàng đã bán mà chưa xuất kho

**Bước 1 –** Mở **Thống kê bán hàng → Bán hàng chi tiết**.

**Bước 2 –** Chọn khoảng ngày bán cần rà (ví dụ **Tháng này**).

**Bước 3 –** Ở hàng lọc cột **Trạng thái xuất**, chọn **Chưa xuất** (hoặc dùng bộ lọc tiêu đề cột để chọn cả **Chưa xuất** và **Đang xuất**).

**Bước 4 –** Đọc **SL Còn lại** và **Xuất kho**, rồi mở phiếu bán gốc để kiểm phần **SL tất toán**, SL lô/đơn vị quy đổi. Báo cáo tính SL Còn lại = SL − SL Đã xuất, nên số này có thể còn phần đã tất toán; chỉ chốt lượng phải giao sau khi đối chiếu phiếu gốc.

## 6. Giải thích các thông tin trên màn hình

- **Chiết khấu, Thuế VAT**: Cách tính: Tỷ lệ của dòng + tỷ lệ của phiếu
- **Đơn giá**: Cách tính: Đơn giá × (1 − Chiết khấu) × (1 + Thuế VAT)
- **Thành tiền**: Cách tính: SL × Đơn giá (không trừ phần tất toán)
- **SL M³**: Cách tính: SL × M³
- **SL Kiện**: Cách tính: SL ÷ số tấm/kiện; trống nếu hàng chưa khai số tấm/kiện
- **SL Còn lại**: Cách tính: SL − SL Đã xuất
- **Xuất kho**: Cách tính: Gom mọi dòng phiếu xuất kho lập từ dòng bán này (không giới hạn ngày xuất)

Dữ liệu được lấy khi thoả **đủ**: **ngày bán** trong khoảng ngày; phiếu thuộc **chi nhánh đang làm việc**; không phải phiếu bán dịch vụ; khách thuộc **nhóm khách hàng** được phân cho bạn; **kho xuất** khai trên phiếu bán thuộc kho được phân (quản trị hệ thống bỏ qua hai điều kiện sau).

## 7. Kiểm tra sau khi thực hiện

Bạn xem được chi tiết từng dòng bán hàng, giá sau chiết khấu có VAT, tình trạng giao hàng và phiếu đặt hàng gốc.

## 8. Những điều cần lưu ý

⚠️ Cột **Đơn giá** trên màn này là đơn giá **đã trừ chiết khấu và đã cộng VAT**, không phải đơn giá nhập trên phiếu.

⚠️ **Thành tiền** tính theo **SL bán**, không trừ số lượng tất toán, và cộng cả chiết khấu dòng lẫn chiết khấu phiếu. Phiếu bán hàng khi lưu lại tính thành tiền **trừ phần tất toán** và chỉ dùng chiết khấu phiếu khi phiếu có chiết khấu. Vì vậy tổng **Thành tiền** ở đây có thể **khác tổng tiền trên phiếu bán** khi phiếu có tất toán hoặc khai cả hai loại chiết khấu.

⚠️ Màn này tính theo **ngày bán**; màn **Xuất bán chi tiết** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT BÁN CHI TIẾT](/bai-viet/2026-11-07-bh-b05-0-tong-quan-man-hinh-thong-ke-xuat-ban-chi-tiet/)) và **Doanh số bán hàng** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/)) tính theo **ngày xuất kho**. Bán cuối tháng, xuất đầu tháng sau thì hai màn rơi vào hai tháng khác nhau.

⚠️ Cột **SL Quy đổi** là hệ số tấm/kiện của hàng, không phải số lượng đã quy đổi. Số kiện xem ở cột **SL Kiện**.

⚠️ Hai người được phân nhóm khách hàng hoặc kho khác nhau có thể thấy **tổng khác nhau** cho cùng khoảng ngày.

### Thiếu phiếu bán so với màn Phiếu bán hàng 

Nguyên nhân: khách không thuộc nhóm khách hàng được phân; kho xuất của phiếu không thuộc kho được phân; đang ở chi nhánh khác; phiếu là phiếu bán dịch vụ.
Cách xử lý: liên hệ quản trị hệ thống phân thêm nhóm khách hàng / kho; kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)); xem phiếu dịch vụ ở [TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-b04-0-tong-quan-man-hinh-thong-ke-ban-dich-vu/).

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập** màn hình.
Cách xử lý: liên hệ quản trị hệ thống.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Đơn giá trên màn này có VAT không?**
Có. Đơn giá đã trừ chiết khấu và cộng VAT; Thành tiền cũng có VAT.

**Vì sao cột Mã phiếu đặt trống?**
Dòng bán không lập từ phiếu đặt hàng.

**Trạng thái xuất lấy từ đâu?**
Từ trạng thái của dòng trên phiếu bán hàng, được cập nhật khi lập phiếu xuất kho.

## 11. Công việc tiếp theo

```text
Bán hàng chi tiết → dòng "Chưa xuất" → lập phiếu xuất kho (KHO-A05.0)
                  → xem chi tiết các lần xuất, giá vốn (BH-B05.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/) – Tổng quan màn hình Phiếu bán hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ ĐẶT HÀNG CHI TIẾT](/bai-viet/2026-11-07-bh-b02-0-tong-quan-man-hinh-thong-ke-dat-hang-chi-tiet/) – Tổng quan màn hình thống kê Đặt hàng chi tiết
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-b04-0-tong-quan-man-hinh-thong-ke-ban-dich-vu/) – Tổng quan màn hình thống kê Bán dịch vụ
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT BÁN CHI TIẾT](/bai-viet/2026-11-07-bh-b05-0-tong-quan-man-hinh-thong-ke-xuat-ban-chi-tiet/) – Tổng quan màn hình thống kê Xuất bán chi tiết
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
