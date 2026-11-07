---
title: "TỔNG QUAN MÀN HÌNH PHIẾU NHẬP GỬI HÀNG"
date: "2026-11-07"
summary: "Màn hình Phiếu nhập gửi hàng ghi nhận hàng khách gửi vào kho của công ty: hàng không do công ty mua, công ty chỉ giữ hộ (ví dụ khách gửi ván để gia công, gửi chờ lấy sau)."
module: "Kho hàng"
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

Màn hình **Phiếu nhập gửi hàng** ghi nhận hàng **khách gửi** vào kho của công ty: hàng không do công ty mua, công ty chỉ giữ hộ (ví dụ khách gửi ván để gia công, gửi chờ lấy sau).

Khi lưu phiếu, số lượng hàng gửi được **cộng ngay vào tồn** của mặt hàng ở **kho nhập gửi** và ghi vào **Sổ cái kho** với **giá 0** (hàng không có giá vốn). Phiếu không làm phát sinh công nợ.

Bạn dùng màn hình này khi:

- Khách mang hàng đến gửi kho, cần ghi nhận số lượng theo từng mặt hàng.
- Xem lại, sửa, xoá, in phiếu nhập gửi hàng đã lập; đính kèm biên bản giao nhận.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Phiếu nhập gửi hàng**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Danh mục **Kho hàng** có kho dùng để chứa hàng gửi; danh mục **Hàng hoá** có mã hàng cho hàng khách gửi.

## 2. Mở chức năng

**Kho hàng → Phiếu nhập gửi hàng**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU NHẬP KHO GỬI HÀNG - DANH SÁCH](/posts/2026-11-07-kho-a02-0-tong-quan-man-hinh-phieu-nhap-gui-hang/hinh-01-man-hinh-phieu-nhap-gui-hang.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày nhập**. Mặc định **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Lập phiếu nhập gửi hàng; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU NHẬP KHO GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-1-huong-dan-lap-phieu-nhap-kho-gui-hang/)
- **Biểu tượng Xuất Excel, Trình chọn cột**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**) / ẩn hiện cột; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/) / [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thao tác: Sửa / Xóa**: Chức năng: Cập nhật / xoá phiếu; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU NHẬP KHO GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-1-huong-dan-lap-phieu-nhap-kho-gui-hang/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

Tiêu đề màn hình: **PHIẾU NHẬP KHO GỬI HÀNG - DANH SÁCH** (menu ghi ngắn **Phiếu nhập gửi hàng**).

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Xóa** (hiện theo quyền)
- **Ngày nhập**: Ý nghĩa: Ngày nhập gửi trên phiếu
- **Mã phiếu**: Ý nghĩa: Mã phiếu nhập gửi hàng, hệ thống tự tạo (dạng **GH…**)
- **Mã phiếu gốc**: Ý nghĩa: Số chứng từ đi kèm hàng gửi (biên bản giao nhận…)
- **Kho nhập**: Ý nghĩa: Kho chứa hàng gửi
- **Ghi chú**: Ý nghĩa: Nội dung nhập gửi
- **File đính kèm**: Ý nghĩa: **Số lượng file: n** hoặc **Không có file đính kèm**
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n** (số phiếu).

**Menu chuột phải trên một dòng phiếu:**

- **Xem lại**: Mở cửa sổ: **PHIẾU NHẬP KHO GỬI HÀNG - XEM LẠI** (chỉ xem); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **File đính kèm**: Mở cửa sổ: **FILE ĐÍNH KÈM - PHIẾU NHẬP KHO GỬI HÀNG**; Hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **In Phiếu**: Mở cửa sổ: Cửa sổ xem trước khi in, mẫu **PHIẾU NHẬP KHÁCH GỬI HÀNG**; Hướng dẫn: phần “Thực hiện trên phần mềm”, [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)

Nhấp đúp vào dòng cũng mở **PHIẾU NHẬP KHO GỬI HÀNG - XEM LẠI**. Chuột phải vào **tiêu đề cột** để mở menu sắp xếp, nhóm, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

**Vị trí của phiếu nhập gửi hàng:**

```text
Khách mang hàng đến gửi kho
      ↓
Phiếu nhập gửi hàng (KHO-A02.1) → tồn kho của mặt hàng tăng ở kho nhập gửi
      ↓
Sổ cái kho: dòng nhập, nguồn "nhập gửi hàng", giá 0
      ↓
Khách lấy hàng / gia công xong → xuất kho theo nghiệp vụ tương ứng
      ↓
Đối chiếu: Thống kê kho → Nhập kho gửi hàng (KHO-C02.0)
```

**Các chức năng trên màn hình:**

```text
Phiếu nhập gửi hàng
   ├── Thêm mới ──► nhập tay từng dòng · Tải lên từ Excel
   ├── Sửa ──► sửa ngày, kho, ghi chú, chi tiết
   ├── Xóa ──► chỉ người tạo phiếu
   ├── Xem lại (chuột phải / nhấp đúp)
   ├── File đính kèm (chuột phải)
   ├── In Phiếu (chuột phải)
   └── Xuất Excel ──► danh sách phiếu
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm phiếu**: Cách làm: Gõ mã phiếu, mã phiếu gốc hoặc ghi chú vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập phiếu nhập gửi hàng**: Cách làm: **Thêm mới**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU NHẬP KHO GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-1-huong-dan-lap-phieu-nhap-kho-gui-hang/)
- **Nhập chi tiết từ file Excel**: Cách làm: Trong cửa sổ → **Tải lên từ Excel**; Bài hướng dẫn: [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU KHO TỪ EXCEL](/bai-viet/2026-11-07-kho-a03-2-huong-dan-nhap-chi-tiet-phieu-kho-tu-excel/)
- **Xem chi tiết phiếu**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa phiếu**: Cách làm: **Sửa** → **PHIẾU NHẬP KHO GỬI HÀNG - CẬP NHẬT**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU NHẬP KHO GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-1-huong-dan-lap-phieu-nhap-kho-gui-hang/)
- **Xoá phiếu**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **In phiếu**: Cách làm: Chuột phải → **In Phiếu**; Bài hướng dẫn: Mục này, [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Đính kèm biên bản**: Cách làm: Chuột phải → **File đính kèm**; Bài hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một phiếu

**Bước 1 –** Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**).

**Bước 2 –** cửa sổ **PHIẾU NHẬP KHO GỬI HÀNG - XEM LẠI** mở ra; các ô không sửa được, không có nút **Lưu lại**.

**Bước 3 –** Bấm **Đóng**.

### In phiếu nhập gửi hàng

**Bước 1 –** Chuột phải vào dòng phiếu → **In Phiếu**.

**Bước 2 –** Cửa sổ xem trước hiện mẫu **PHIẾU NHẬP KHÁCH GỬI HÀNG** gồm: thông tin công ty, **Kho nhập**, **Mã phiếu**, **Ngày lập**, **Lý do** (lấy từ Ghi chú), bảng **STT / TÊN SẢN PHẨM / ĐVT / SL / GHI CHÚ**, dòng **TỔNG CỘNG** số lượng, chỗ ký **Người lập phiếu** và **Thủ kho**.

**Bước 3 –** In hoặc lưu file bằng thanh công cụ của cửa sổ xem trước ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)). Bấm **Đóng** trên thanh công cụ để thoát.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ phiếu nhập gửi hàng: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU NHẬP KHO GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-1-huong-dan-lap-phieu-nhap-kho-gui-hang/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Phiếu nhập gửi hàng dùng để làm gì, phiếu ảnh hưởng thế nào tới tồn kho và sổ cái kho, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Hàng gửi được cộng vào tồn kho** của mặt hàng đã chọn ở kho nhập gửi. Nếu chọn trùng mã hàng của công ty, tồn hàng gửi sẽ lẫn vào tồn hàng của công ty. Nên dùng mã hàng / kho riêng cho hàng khách gửi.

⚠️ Hàng gửi vào sổ cái kho với **giá 0**, không làm thay đổi giá vốn và không phát sinh công nợ.

⚠️ **Chỉ người tạo phiếu mới xoá được phiếu.** Không xoá được phiếu nếu hàng gửi đã được xuất đi (kho không còn đủ tồn để trừ lại).

⚠️ Không lập / sửa / xoá được phiếu có **Ngày nhập** thuộc kỳ kế toán đã khoá.

### "CẢNH BÁO – Lỗi xóa: Chỉ được xoá phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### "CẢNH BÁO – Lỗi xóa: "<tên kho>", "<tên hàng>" không đủ tồn (<số>)." 

Nguyên nhân: hàng gửi đã được xuất / chuyển đi, kho không còn đủ để trừ khi xoá phiếu.
Cách xử lý: đối chiếu hàng gửi, các phiếu xuất và số tồn thực tế với thủ kho/kế toán. Chỉ sửa hoặc đảo chứng từ theo phương án đã chốt; không lập điều chỉnh tăng tồn chỉ để xóa được phiếu nhập.

### "CẢNH BÁO – Lỗi xóa: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: ngày nhập của phiếu thuộc kỳ kế toán đã khoá.
Cách xử lý: liên hệ kế toán.

### Không thấy phiếu vừa lập 

Kiểm tra: khoảng ngày lọc có chứa **Ngày nhập**; chi nhánh đang làm việc.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

### Không thấy nút Thêm mới / Sửa / Xóa 

Kiểm tra: quyền tương ứng của màn hình Phiếu nhập gửi hàng.
Cách xử lý: liên hệ quản trị hệ thống.

## 10. Câu hỏi thường gặp

**Phiếu nhập gửi hàng có làm tăng công nợ khách hàng không?**
Không. Phiếu chỉ ghi nhận số lượng hàng gửi.

**Xem tổng hàng khách đã gửi ở đâu?**
Màn **Thống kê kho → Nhập kho gửi hàng** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT NHẬP KHO GỬI HÀNG](/bai-viet/2026-11-07-kho-c02-0-tong-quan-man-hinh-thong-ke-chi-tiet-nhap-kho-gui-hang/)).

**Có in được phiếu cho khách ký không?**
Có: chuột phải → **In Phiếu**, mẫu có chỗ ký Người lập phiếu và Thủ kho.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU NHẬP KHO GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-1-huong-dan-lap-phieu-nhap-kho-gui-hang/) – Hướng dẫn lập phiếu nhập kho gửi hàng.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU NHẬP KHO GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-1-huong-dan-lap-phieu-nhap-kho-gui-hang/) – Hướng dẫn lập phiếu nhập kho gửi hàng
- [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU KHO TỪ EXCEL](/bai-viet/2026-11-07-kho-a03-2-huong-dan-nhap-chi-tiet-phieu-kho-tu-excel/) – Hướng dẫn nhập chi tiết phiếu kho từ Excel
- [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/) – Tổng quan màn hình Sổ cái kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT NHẬP KHO GỬI HÀNG](/bai-viet/2026-11-07-kho-c02-0-tong-quan-man-hinh-thong-ke-chi-tiet-nhap-kho-gui-hang/) – Tổng quan màn hình Nhập kho gửi hàng
