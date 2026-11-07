---
title: "TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO"
date: "2026-11-07"
summary: "Màn hình Phiếu nhập kho ghi nhận hàng thực nhận vào kho từ hai nguồn: - Nhập mua hàng: hàng NCC giao theo phiếu mua hàng (phân hệ Mua hàng)."
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

Màn hình **Phiếu nhập kho** ghi nhận hàng **thực nhận vào kho** từ hai nguồn:

- **Nhập mua hàng**: hàng NCC giao theo **phiếu mua hàng** (phân hệ Mua hàng).
- **Nhập khách trả hàng**: hàng khách trả lại theo **phiếu khách trả hàng** (phân hệ Bán hàng).

Phiếu nhập kho luôn lập **từ chứng từ nguồn**, không nhập tay mặt hàng. Khi lưu:

- **Tồn kho tăng** ở kho nhập; **Sổ cái kho** ghi dòng nhập để tính giá vốn.
- Nhập mua hàng: **công nợ phải trả NCC tăng**; **Trạng thái nhập** của phiếu mua hàng được cập nhật.
- Nhập khách trả hàng: **công nợ phải thu khách hàng giảm**; trạng thái nhập của phiếu khách trả được cập nhật.

Màn hình còn cho phép **phân bổ chi phí mua** (vận chuyển, bốc xếp… từ phiếu mua dịch vụ) vào giá nhập, **in phiếu nhập kho / tem kiện**, và cập nhật nhanh mã phiếu gốc, số hoá đơn, phương thức vận chuyển, công ty nhận hoá đơn.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Phiếu nhập kho**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có chứng từ nguồn: **phiếu mua hàng** còn hàng chưa nhập (MH-A03), hoặc **phiếu khách trả hàng** còn hàng chưa nhập (sổ tay Bán hàng).

## 2. Mở chức năng

**Kho hàng → Phiếu nhập kho**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU NHẬP KHO - DANH SÁCH](/posts/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/hinh-01-man-hinh-phieu-nhap-kho.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày nhập kho**. Mặc định **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới (có mũi tên)**: Chức năng: Menu **Nhập khách trả hàng** / **Nhập mua hàng**; Hướng dẫn: [HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/) / [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/)
- **Biểu tượng Xuất Excel, Trình chọn cột**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**) / ẩn hiện cột; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/) / [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thao tác: Sửa / Xóa**: Chức năng: Cập nhật / xoá phiếu; Hướng dẫn: [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Xóa** (hiện theo quyền)
- **Ngày nhập kho**: Ý nghĩa: Ngày trên phiếu
- **Ngày đến hạn**: Ý nghĩa: Ngày nhập kho + số ngày nợ của NCC (hạn thanh toán)
- **Mã phiếu**: Ý nghĩa: Mã phiếu nhập kho, hệ thống tự tạo (dạng **NK…**)
- **Từ phiếu**: Ý nghĩa: Mã nguồn khi đầu phiếu có lưu liên kết; phiếu nhập mua có thể trống dù từng dòng đã gắn phiếu mua. Tra nguồn mua ở chi tiết theo [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/).
- **Mã phiếu gốc**: Ý nghĩa: Số chứng từ NCC / khách giao kèm hàng
- **Người giao**: Ý nghĩa: NCC hoặc khách hàng giao hàng
- **Kho nhập**: Ý nghĩa: Kho nhận hàng
- **Tổng tiền**: Ý nghĩa: Tổng tiền phiếu (chỉ hiện với quyền **Phân bổ chi phí**)
- **Phương thức VC**: Ý nghĩa: Phương thức / đơn vị vận chuyển
- **Số hóa đơn**: Ý nghĩa: Số hoá đơn của NCC
- **Cty nhận HĐ**: Ý nghĩa: Công ty nhận hoá đơn
- **Trạng thái trả**: Ý nghĩa: **Chưa trả** / **Đang trả** / **Đã trả** – hàng của phiếu đã trả lại NCC tới đâu
- **Trạng thái chi**: Ý nghĩa: **Chưa chi** / **Đang chi** / **Đã chi** – kế toán đã chi tiền cho phiếu tới đâu
- **Lý do nhập**: Ý nghĩa: Ghi chú của phiếu
- **File đính kèm**: Ý nghĩa: **Số lượng file: n** hoặc **Không có file đính kèm**
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi
- **KH Tên rút gọn**: Ý nghĩa: Tên rút gọn khách hàng (phiếu nhập khách trả)

Cột ẩn, bật bằng **Trình chọn cột**: **Mã khách hàng**, **Mã nhà cung cấp**, **Số ngày nợ**. Dòng cuối bảng hiện **TỔNG CỘNG: n** và tổng **Tổng tiền**.

**Menu chuột phải trên một dòng phiếu:**

- **Xem lại**: Mở cửa sổ: **XEM LẠI PHIẾU NHẬP KHO** (chỉ xem); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Cập nhật mã phiếu gốc**: Mở cửa sổ: **CẬP NHẬT MÃ PHIẾU GỐC**; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Cập nhật số hóa đơn**: Mở cửa sổ: **CẬP NHẬT HOÁ ĐƠN**; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Cập nhật phương thức vận chuyển**: Mở cửa sổ: **CẬP NHẬT VẬN CHUYỂN**; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Cập nhật Cty nhận hóa đơn**: Mở cửa sổ: **CẬP NHẬT CTY NHẬN HÓA ĐƠN**; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **In phiếu (có giá)**: Mở cửa sổ: Xem trước mẫu phiếu nhập kho có đơn giá, thành tiền; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU NHẬP KHO VÀ TEM KIỆN](/bai-viet/2026-11-07-kho-a04-4-huong-dan-in-phieu-nhap-kho-va-tem-kien/)
- **In phiếu (không giá)**: Mở cửa sổ: Xem trước mẫu phiếu nhập kho chỉ có số lượng; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU NHẬP KHO VÀ TEM KIỆN](/bai-viet/2026-11-07-kho-a04-4-huong-dan-in-phieu-nhap-kho-va-tem-kien/)
- **In tem kiện**: Mở cửa sổ: Xem trước tem dán kiện hàng; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU NHẬP KHO VÀ TEM KIỆN](/bai-viet/2026-11-07-kho-a04-4-huong-dan-in-phieu-nhap-kho-va-tem-kien/)
- **File đính kèm**: Mở cửa sổ: **FILE ĐÍNH KÈM - PHIẾU NHẬP KHO**; Hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)

Nhấp đúp vào dòng cũng mở **XEM LẠI PHIẾU NHẬP KHO**. Chuột phải vào **tiêu đề cột** để mở menu sắp xếp, nhóm, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

**Vị trí của phiếu nhập kho:**

```text
Phiếu mua hàng (MH-A03)             Phiếu khách trả hàng (Bán hàng)
        ↓                                     ↓
Thêm mới → Nhập mua hàng (A04.1)    Thêm mới → Nhập khách trả hàng (A04.2)
        ↓                                     ↓
Tồn kho tăng · công nợ NCC tăng     Tồn kho tăng · công nợ khách hàng giảm
        ↓                                     ↓
(Tuỳ chọn) Phân bổ chi phí mua (A04.3) → giá nhập tăng
        ↓
In phiếu / tem kiện (A04.4)
        ↓
Sau đó: trả hàng NCC (MH-A04) · kế toán chi tiền (Trạng thái chi)
```

**Các chức năng trên màn hình:**

```text
Phiếu nhập kho
   ├── Thêm mới ──► Nhập mua hàng · Nhập khách trả hàng
   ├── Sửa ──► khi phiếu chưa được chi tiền
   ├── Xóa ──► chỉ người tạo; chưa chi tiền; hàng chưa bị xuất / trả
   ├── Xem lại (chuột phải / nhấp đúp)
   ├── Cập nhật mã phiếu gốc / số hóa đơn / vận chuyển / Cty nhận HĐ
   ├── In phiếu (có giá) · In phiếu (không giá) · In tem kiện
   ├── File đính kèm
   └── Xuất Excel ──► danh sách phiếu
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm phiếu**: Cách làm: Gõ mã phiếu, mã phiếu gốc, số hoá đơn, tên NCC vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Nhập kho hàng mua**: Cách làm: **Thêm mới** → **Nhập mua hàng**; Bài hướng dẫn: [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/)
- **Nhập kho hàng khách trả**: Cách làm: **Thêm mới** → **Nhập khách trả hàng**; Bài hướng dẫn: [HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/)
- **Phân bổ chi phí mua vào giá nhập**: Cách làm: cửa sổ phiếu → tab **CHI PHÍ**; Bài hướng dẫn: [HƯỚNG DẪN PHÂN BỔ CHI PHÍ VÀO PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-3-huong-dan-phan-bo-chi-phi-vao-phieu-nhap-kho/)
- **Xem chi tiết phiếu**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa phiếu**: Cách làm: **Sửa** → **CẬP NHẬT PHIẾU NHẬP KHO**; Bài hướng dẫn: [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/)
- **Sửa nhanh mã phiếu gốc / số hoá đơn / vận chuyển / Cty nhận HĐ**: Cách làm: Chuột phải → **Cập nhật …**; Bài hướng dẫn: Mục này
- **Xoá phiếu**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **In phiếu, in tem kiện**: Cách làm: Chuột phải → **In phiếu (có giá)** / **In phiếu (không giá)** / **In tem kiện**; Bài hướng dẫn: [HƯỚNG DẪN IN PHIẾU NHẬP KHO VÀ TEM KIỆN](/bai-viet/2026-11-07-kho-a04-4-huong-dan-in-phieu-nhap-kho-va-tem-kien/)
- **Đính kèm chứng từ**: Cách làm: Chuột phải → **File đính kèm**; Bài hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một phiếu

**Bước 1 –** Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**).

**Bước 2 –** cửa sổ **XEM LẠI PHIẾU NHẬP KHO** mở ra; các ô không sửa được, không có nút **Lưu lại**. Tab **CHI PHÍ** (nếu có quyền) cho xem chi phí đã phân bổ.

**Bước 3 –** Bấm **Đóng**.

### Cập nhật nhanh mã phiếu gốc, số hoá đơn, vận chuyển, Cty nhận hoá đơn

Dùng khi chỉ cần sửa một thông tin chứng từ, không mở cửa sổ sửa cả phiếu.

**Bước 1 –** Chuột phải vào dòng phiếu → chọn mục cần sửa, ví dụ **Cập nhật số hóa đơn**.

**Bước 2 –** Cửa sổ nhỏ (ví dụ **CẬP NHẬT HOÁ ĐƠN**) hiện mã phiếu và giá trị hiện tại. Nhập giá trị mới.

**Bước 3 –** Bấm **Đồng ý**. Hệ thống báo **Cập nhật thành công** và tải lại danh sách. Bấm **Hủy** để bỏ qua.

![Hình 2: Cửa sổ CẬP NHẬT HOÁ ĐƠN](/posts/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/hinh-02-cap-nhat-hoa-don.png)

⚠️ Ô để trống rồi bấm **Đồng ý** thì hệ thống **không** cập nhật (không xoá được giá trị cũ bằng cách này).

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ phiếu nhập kho: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/)** (nhập mua hàng) và **[HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/)** (nhập khách trả hàng); tab Chi phí: **[HƯỚNG DẪN PHÂN BỔ CHI PHÍ VÀO PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-3-huong-dan-phan-bo-chi-phi-vao-phieu-nhap-kho/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Phiếu nhập kho có những chức năng gì, phiếu nhập kho làm thay đổi tồn kho và công nợ thế nào, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Phiếu nhập kho là lúc tồn kho và công nợ thay đổi**, không phải phiếu mua hàng / phiếu khách trả hàng. Lưu xong là có hiệu lực, không có bước duyệt.

⚠️ **Không sửa / xoá được phiếu đã được chi tiền** (Trạng thái chi khác **Chưa chi**).

⚠️ **Chỉ người tạo phiếu mới xoá được phiếu.** Không xoá được nếu hàng của phiếu đã được xuất bán / chuyển đi (kho không đủ tồn để trừ lại) hoặc đã có phiếu trả hàng NCC lập từ phiếu này.

⚠️ Mặc định **không chọn được Ngày nhập kho trước hôm nay**; cần quyền **Thay đổi ngày nhập**. Không lập / sửa / xoá phiếu thuộc kỳ kế toán đã khoá.

⚠️ Cột **Tổng tiền** trên danh sách và các cột **Chi phí**, **Giá trị nhập** trong cửa sổ chỉ hiện với quyền **Phân bổ chi phí**.

⚠️ Mỗi lần thêm, sửa, xoá phiếu, hệ thống lưu lại lịch sử thay đổi.

### "CẢNH BÁO – Lỗi xóa: Bạn chỉ được xóa phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### "CẢNH BÁO – Lỗi xóa: Phiếu "đã chi" tiền" / "Phiếu "đang chi" tiền" 

Nguyên nhân: kế toán đã chi tiền (một phần hoặc hết) cho phiếu nhập này.
Cách xử lý: liên hệ kế toán xử lý phiếu chi trước.

### "CẢNH BÁO – Lỗi sửa: Phiếu đang được chi tiền" 

Nguyên nhân: phiếu đã có phiếu chi.
Cách xử lý: chỉ dùng các mục **Cập nhật …** ở chuột phải (mã phiếu gốc, số hoá đơn…), hoặc liên hệ kế toán.

### "CẢNH BÁO – Lỗi xóa: "<tên kho>", "<tên hàng>" không đủ tồn (<số>)." 

Nguyên nhân: hàng của phiếu đã được xuất bán / chuyển kho, kho không còn đủ để trừ lại.
Cách xử lý: không xoá phiếu; nếu nhập sai, trao đổi với kế toán để xử lý bằng chứng từ điều chỉnh.

### "CẢNH BÁO – Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: đã có phiếu trả hàng NCC lập từ phiếu nhập này.
Cách xử lý: xoá phiếu trả hàng trước (nếu đúng là nhầm), hoặc giữ phiếu nhập.

### Không thấy phiếu vừa lập / không thấy nút 

Kiểm tra: khoảng ngày lọc có chứa **Ngày nhập kho**; chi nhánh; quyền **Thêm mới / Cập nhật / Xoá**.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)) hoặc liên hệ quản trị hệ thống.

## 10. Câu hỏi thường gặp

**Sao không thấy nút thêm dòng hàng trong phiếu nhập kho?**
Phiếu nhập kho chỉ lấy hàng từ phiếu mua hàng hoặc phiếu khách trả hàng. Muốn nhập hàng khác, phải có chứng từ nguồn trước (hoặc dùng phiếu điều chỉnh kho nếu là chênh lệch kiểm kê).

**Ngày đến hạn tính thế nào?**
Ngày nhập kho cộng số ngày nợ khai trong danh mục NCC.

**Sửa số hoá đơn sau khi kế toán đã chi tiền được không?**
Được, bằng chuột phải → **Cập nhật số hóa đơn** (không cần mở cửa sổ sửa phiếu).

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/) – Hướng dẫn nhập kho hàng mua từ phiếu mua hàng.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/) – Hướng dẫn nhập kho hàng mua từ phiếu mua hàng
- [HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/) – Hướng dẫn nhập kho hàng khách trả
- [HƯỚNG DẪN PHÂN BỔ CHI PHÍ VÀO PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-3-huong-dan-phan-bo-chi-phi-vao-phieu-nhap-kho/) – Hướng dẫn phân bổ chi phí vào phiếu nhập kho
- [HƯỚNG DẪN IN PHIẾU NHẬP KHO VÀ TEM KIỆN](/bai-viet/2026-11-07-kho-a04-4-huong-dan-in-phieu-nhap-kho-va-tem-kien/) – Hướng dẫn in phiếu nhập kho và tem kiện
- [TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/) – Tổng quan màn hình Phiếu mua hàng
- [HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/) – Hướng dẫn lập phiếu trả hàng từ phiếu nhập kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ NHẬP MUA CHI TIẾT](/bai-viet/2026-11-07-mh-b04-0-tong-quan-man-hinh-thong-ke-nhap-mua-chi-tiet/) – Tổng quan màn hình Nhập mua chi tiết
