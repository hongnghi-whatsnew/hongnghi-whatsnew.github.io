---
title: "TỔNG QUAN MÀN HÌNH KHÁCH TRẢ HÀNG"
date: "2026-11-07"
summary: "Màn hình Khách trả hàng (tiêu đề PHIẾU TRẢ HÀNG - DANH SÁCH) ghi nhận hàng khách trả lại sau khi đã xuất kho: trả mặt hàng nào, số lượng bao nhiêu, theo giá bán nào, nhập về kho nào, lý do trả."
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

Màn hình **Khách trả hàng** (tiêu đề **PHIẾU TRẢ HÀNG - DANH SÁCH**) ghi nhận hàng khách trả lại sau khi đã xuất kho: trả mặt hàng nào, số lượng bao nhiêu, theo giá bán nào, nhập về kho nào, lý do trả.

Phiếu khách trả hàng là bước **trước nhập kho**:

- Lưu phiếu khách trả: tồn kho và công nợ khách **chưa** thay đổi. Phiếu xuất kho và phiếu bán hàng gốc được cập nhật **trạng thái trả**.
- Thủ kho nhận hàng về và lập **phiếu nhập kho → Nhập khách trả hàng** từ phiếu này ([HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/)): lúc đó **tồn kho tăng**, **công nợ khách giảm**, **Trạng thái nhập** của phiếu khách trả được cập nhật.

Phiếu khách trả được lập **từ phiếu xuất kho** ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)), hoặc **trả hàng đầu kỳ** cho hàng bán trước khi dùng ERP ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-bh-a04-2-huong-dan-lap-phieu-khach-tra-hang-dau-ky/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Khách trả hàng**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Hàng trả đã được **xuất kho** cho khách bằng phiếu xuất kho bán hàng (trừ trường hợp trả đầu kỳ).

## 2. Mở chức năng

**Bán hàng → Khách trả hàng**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU TRẢ HÀNG - DANH SÁCH](/posts/2026-11-07-bh-a04-0-tong-quan-man-hinh-khach-tra-hang/hinh-01-man-hinh-khach-tra-hang.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày trả hàng**. Mặc định **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Không có quyền trả đầu kỳ: mở thẳng danh sách phiếu xuất kho. Có quyền: nút có mũi tên, bấm ra menu **Trả hàng đầu kỳ** / **Từ phiếu xuất** (Hình 2); Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/) / [HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-bh-a04-2-huong-dan-lap-phieu-khach-tra-hang-dau-ky/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thao tác: Sửa / Xóa**: Chức năng: Cập nhật / xoá phiếu; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày trả hàng**: Ý nghĩa: Ngày khách trả
- **Mã phiếu**: Ý nghĩa: Mã phiếu khách trả hàng, hệ thống tự tạo (dạng **KT…**)
- **Tên rút gọn**: Ý nghĩa: Tên rút gọn của khách
- **Từ phiếu**: Ý nghĩa: Mã **phiếu xuất kho** gốc (**XK…**; trống với phiếu trả đầu kỳ)
- **Khách hàng, Mã khách hàng**: Ý nghĩa: Tên và mã khách trả hàng
- **Tổng tiền**: Ý nghĩa: Tổng tiền hàng trả (sau chiết khấu, cộng VAT)
- **Trạng thái nhập**: Ý nghĩa: **Chưa nhập** / **Đang nhập** / **Đã nhập** – theo số lượng thủ kho đã nhập kho
- **Ghi chú**: Ý nghĩa: Lý do trả hàng
- **File đính kèm**: Ý nghĩa: **Số lượng file: n** hoặc **Không có file đính kèm**
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Thứ tự cột trên màn hình: **STT**, **Thao tác**, **Ngày trả hàng**, **Mã phiếu**, **Tên rút gọn**, **Từ phiếu**, **Khách hàng**, **Mã khách hàng**, **Tổng tiền**…; các cột sau nằm bên phải, kéo thanh cuộn ngang để xem.

Dòng cuối bảng hiện **TỔNG CỘNG: n** và tổng **Tổng tiền**.

![Hình 2: Menu của nút Thêm mới (tài khoản có quyền Trả đầu kỳ)](/posts/2026-11-07-bh-a04-0-tong-quan-man-hinh-khach-tra-hang/hinh-02-menu-them-moi.png)

- Mục menu: **Trả hàng đầu kỳ**; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-bh-a04-2-huong-dan-lap-phieu-khach-tra-hang-dau-ky/)
- Mục menu: **Từ phiếu xuất**; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)

**Menu chuột phải trên một dòng phiếu:**

- **Xem lại**: Mở cửa sổ: **THÔNG TIN PHIẾU TRẢ HÀNG** (chỉ xem); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **File đính kèm**: Mở cửa sổ: **FILE ĐÍNH KÈM - PHIẾU KHÁCH TRẢ HÀNG**; Hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **In phiếu - Trả hàng Không giá**: Mở cửa sổ: Xem trước **PHIẾU ĐỀ NGHỊ NHẬP KHO HÀNG TRẢ VỀ**; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-3-huong-dan-in-phieu-khach-tra-hang/)
- **In phiếu - Trả hàng Có giá**: Mở cửa sổ: Như trên, có giá; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-3-huong-dan-in-phieu-khach-tra-hang/)

Nhấp đúp vào dòng cũng mở **THÔNG TIN PHIẾU TRẢ HÀNG**. Chuột phải vào **tiêu đề cột** để mở menu sắp xếp, nhóm, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

```text
(Kho) Phiếu xuất kho bán hàng đã giao khách
      ↓
Khách trả hàng → Thêm mới → chọn phiếu xuất (BH-A04.1)
   hoặc Trả hàng đầu kỳ (BH-A04.2)
      → cập nhật trạng thái trả của phiếu xuất / phiếu bán
      ↓
In phiếu đề nghị nhập kho hàng trả (BH-A04.3) → chuyển thủ kho
      ↓
(Kho) Phiếu nhập kho → Nhập khách trả hàng (KHO-A04.2)
      → tăng tồn kho, giảm công nợ khách
      ↓
Trạng thái nhập: Chưa nhập → Đang nhập → Đã nhập
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm phiếu**: Cách làm: Gõ mã phiếu, mã phiếu xuất hoặc tên khách vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập phiếu từ phiếu xuất kho**: Cách làm: **Thêm mới** (→ **Từ phiếu xuất**); Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)
- **Lập phiếu trả đầu kỳ**: Cách làm: **Thêm mới → Trả hàng đầu kỳ**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-bh-a04-2-huong-dan-lap-phieu-khach-tra-hang-dau-ky/)
- **Xem chi tiết phiếu**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa phiếu**: Cách làm: **Sửa** → **CẬP NHẬT PHIẾU TRẢ HÀNG**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)
- **In phiếu đề nghị nhập kho**: Cách làm: Chuột phải → **In phiếu - Trả hàng…**; Bài hướng dẫn: [HƯỚNG DẪN IN PHIẾU KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-3-huong-dan-in-phieu-khach-tra-hang/)
- **Nhập kho hàng trả**: Cách làm: Sổ tay Kho hàng – [HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/)
- **Xoá phiếu**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một phiếu

**Bước 1 –** Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**).

**Bước 2 –** Cửa sổ **THÔNG TIN PHIẾU TRẢ HÀNG** mở ra (phiếu đầu kỳ có thêm chữ **- ĐẦU KỲ** ở tiêu đề). Bảng chi tiết có thêm **SL đã nhập**, **SL còn lại**.

**Bước 3 –** Bấm **Đóng**.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ phiếu khách trả: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Khách trả hàng có những chức năng gì, phiếu khách trả liên quan thế nào tới nhập kho và công nợ, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Phiếu khách trả hàng không làm tăng tồn kho và không giảm công nợ khách.** Hai việc này chỉ xảy ra khi thủ kho lập **phiếu nhập kho** từ phiếu khách trả ([HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/)).

⚠️ Khi phiếu đã có dòng nhập kho (**Đang nhập** / **Đã nhập**), **không sửa / xoá được** phiếu.

⚠️ **Chỉ người tạo phiếu mới xoá được phiếu.**

⚠️ Khách trả **một phần giá** (hàng lỗi nhẹ, giữ lại hàng) không dùng màn này – dùng **Phiếu giảm giá** (BH-A05).

### "CẢNH BÁO – Lỗi xóa: Bạn chỉ được xóa phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### "CẢNH BÁO – Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: thủ kho đã nhập kho từ phiếu này.
Cách xử lý: nhờ thủ kho xử lý phiếu nhập kho trước (nếu đúng là nhập nhầm).

### Không thấy phiếu vừa lập 

Kiểm tra: khoảng ngày lọc có chứa **Ngày trả hàng**; chi nhánh đang làm việc.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

### Thêm mới không có mục Trả hàng đầu kỳ 

Nguyên nhân: tài khoản thiếu quyền **Trả đầu kỳ**.
Cách xử lý: liên hệ quản trị hệ thống nếu cần.

## 10. Câu hỏi thường gặp

**Lập phiếu khách trả xong, hàng đã vào kho chưa?**
Chưa. Thủ kho phải lập phiếu nhập kho từ phiếu khách trả ([HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/)).

**Công nợ khách giảm theo giá nào?**
Theo đơn giá, chiết khấu, VAT trên phiếu khách trả (lấy từ phiếu xuất kho gốc), khi thủ kho nhập kho.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/) – Hướng dẫn lập phiếu khách trả hàng từ phiếu xuất kho.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/) – Hướng dẫn lập phiếu khách trả hàng từ phiếu xuất kho
- [HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-bh-a04-2-huong-dan-lap-phieu-khach-tra-hang-dau-ky/) – Hướng dẫn lập phiếu khách trả hàng đầu kỳ
- [HƯỚNG DẪN IN PHIẾU KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-3-huong-dan-in-phieu-khach-tra-hang/) – Hướng dẫn in phiếu khách trả hàng
- [HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/) – Hướng dẫn nhập kho hàng khách trả
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-b06-0-tong-quan-man-hinh-thong-ke-khach-tra-hang/) – Tổng quan màn hình Khách trả hàng (thống kê)
- [TỔNG QUAN MÀN HÌNH PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-0-tong-quan-man-hinh-phieu-giam-gia/) – Tổng quan màn hình Phiếu giảm giá
