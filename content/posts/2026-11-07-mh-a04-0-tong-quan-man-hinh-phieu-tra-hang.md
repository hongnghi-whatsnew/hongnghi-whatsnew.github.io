---
title: "TỔNG QUAN MÀN HÌNH PHIẾU TRẢ HÀNG"
date: "2026-11-07"
summary: "Màn hình Phiếu trả hàng ghi nhận hàng trả lại cho nhà cung cấp (NCC): hàng lỗi, sai quy cách, thừa… đã nhập kho."
module: "Mua hàng"
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

Màn hình **Phiếu trả hàng** ghi nhận hàng **trả lại cho nhà cung cấp (NCC)**: hàng lỗi, sai quy cách, thừa… đã nhập kho.

Phiếu trả hàng là bước **trước xuất kho trả hàng**:

- Lưu phiếu trả hàng: hệ thống kiểm tra kho xuất **đủ tồn**, ghi nhận số lượng trả vào phiếu nhập kho gốc (**Trạng thái trả**). Tồn kho và công nợ NCC **chưa** thay đổi.
- Thủ kho lập **phiếu xuất kho → Xuất trả hàng** từ phiếu trả hàng (sổ tay Kho hàng): lúc đó tồn kho và công nợ NCC mới giảm, **Trạng thái xuất** của phiếu trả được cập nhật.

Có hai cách lập phiếu:

- **Từ phiếu nhập**: trả hàng của một phiếu nhập kho đã có trên ERP (cách thường dùng).
- **Trả hàng đầu kỳ**: trả hàng đã nhập **trước khi dùng ERP**, không có phiếu nhập kho để chọn.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Phiếu trả hàng**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Hàng cần trả còn tồn ở kho xuất.

## 2. Mở chức năng

**Mua hàng → Phiếu trả hàng**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU TRẢ HÀNG NCC - DANH SÁCH](/posts/2026-11-07-mh-a04-0-tong-quan-man-hinh-phieu-tra-hang/hinh-01-man-hinh-phieu-tra-hang.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày trả hàng**. Mặc định **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Có quyền Trả hàng đầu kỳ: menu **Trả hàng đầu kỳ** / **Từ phiếu nhập**. Không có: mở thẳng danh sách phiếu nhập; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/), [HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-mh-a04-2-huong-dan-lap-phieu-tra-hang-dau-ky/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thao tác: Sửa / Xóa**: Chức năng: Cập nhật / xoá phiếu; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

![Hình 2: Menu Thêm mới](/posts/2026-11-07-mh-a04-0-tong-quan-man-hinh-phieu-tra-hang/hinh-02-menu-them-moi.png)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày trả hàng**: Ý nghĩa: Ngày trên phiếu trả
- **Mã phiếu**: Ý nghĩa: Mã phiếu trả hàng (**TH…**), hệ thống tự tạo
- **Từ phiếu**: Ý nghĩa: Mã **phiếu nhập kho** gốc (trống với phiếu trả đầu kỳ)
- **Nhà cung cấp, Mã nhà cung cấp**: Ý nghĩa: NCC nhận hàng trả
- **Tổng tiền**: Ý nghĩa: Giá trị hàng trả (chỉ hiện khi có quyền **Xem giá**)
- **Trạng thái xuất**: Ý nghĩa: **Chưa xuất** / **Đang xuất** / **Đã xuất** – theo số lượng đã xuất kho trả
- **Trạng thái**: Ý nghĩa: **Kích hoạt** / **Ngưng sử dụng**
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

**Ý nghĩa Trạng thái xuất:**

- **Chưa xuất**: Khi nào: Chưa lập phiếu xuất kho trả hàng
- **Đang xuất**: Khi nào: Đã xuất kho một phần
- **Đã xuất**: Khi nào: Mọi dòng đã xuất đủ

**Menu chuột phải trên một dòng phiếu:**

- **Xem lại**: Mở cửa sổ: **THÔNG TIN PHIẾU TRẢ HÀNG** (chỉ xem); Hướng dẫn: phần “Thực hiện trên phần mềm”

Nhấp đúp vào dòng cũng mở cửa sổ xem. Không có chức năng in phiếu trả hàng trên màn này.

## 4. Trình tự công việc

**Vị trí của phiếu trả hàng trong quy trình:**

```text
(Kho) Phiếu nhập kho từ phiếu mua hàng
      ↓
Phát hiện hàng lỗi / thừa cần trả NCC
      ↓
Phiếu trả hàng: Từ phiếu nhập (MH-A04.1) · Trả hàng đầu kỳ (MH-A04.2)
      ↓  kiểm tra đủ tồn ở kho xuất · ghi Trạng thái trả của phiếu nhập
(Kho) Phiếu xuất kho → Xuất trả hàng
      ↓  giảm tồn kho, giảm công nợ NCC
Trạng thái xuất: Chưa xuất → Đang xuất → Đã xuất
```

**Các chức năng trên màn hình:**

```text
Phiếu trả hàng
   ├── Thêm mới ──► Từ phiếu nhập · Trả hàng đầu kỳ
   ├── Sửa ──► khi chưa xuất kho
   ├── Xóa ──► chỉ người tạo, khi chưa xuất kho
   ├── Xem lại (chuột phải / nhấp đúp)
   └── Xuất Excel ──► danh sách phiếu
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Trả hàng của một phiếu nhập kho**: Cách làm: **Thêm mới** (→ **Từ phiếu nhập**); Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/)
- **Trả hàng nhập trước khi dùng ERP**: Cách làm: **Thêm mới → Trả hàng đầu kỳ**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-mh-a04-2-huong-dan-lap-phieu-tra-hang-dau-ky/)
- **Xem chi tiết phiếu**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa phiếu**: Cách làm: **Sửa** → **CẬP NHẬT PHIẾU TRẢ HÀNG**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/)
- **Xoá phiếu**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Xuất kho trả hàng**: Cách làm: Kho → Phiếu xuất kho → **Thêm mới → Xuất trả hàng**; Bài hướng dẫn: Sổ tay Kho hàng
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một phiếu

**Bước 1 –** Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**).

**Bước 2 –** Cửa sổ **THÔNG TIN PHIẾU TRẢ HÀNG** mở ra; bảng chi tiết có thêm **SL đã xuất**, **SL còn lại** (= Số lượng − SL đã xuất).

**Bước 3 –** Bấm **Đóng**.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/)** (trả từ phiếu nhập) và **[HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-mh-a04-2-huong-dan-lap-phieu-tra-hang-dau-ky/)** (trả đầu kỳ).

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Phiếu trả hàng có những chức năng gì, phiếu trả hàng liên quan thế nào tới xuất kho và công nợ NCC, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Phiếu trả hàng chưa làm giảm tồn kho và công nợ NCC.** Hai việc này chỉ xảy ra khi thủ kho lập **phiếu xuất kho → Xuất trả hàng** từ phiếu trả.

⚠️ Khi lưu, hệ thống kiểm tra **kho xuất đủ tồn được xuất** (tồn hiện tại trừ phần đã giữ cho đơn khách, bán chưa xuất, gia công, chuyển kho). Thiếu tồn thì không lưu được.

⚠️ Phiếu đã có phiếu xuất kho trả hàng (**Đang xuất** / **Đã xuất**) **không sửa / xoá được**.

⚠️ **Chỉ người tạo phiếu mới xoá được phiếu.**

⚠️ Hàng chưa nhập kho thì **không** dùng phiếu trả hàng; phần NCC giao thiếu / không nhận dùng **Tất toán** phiếu mua hàng ([HƯỚNG DẪN TẤT TOÁN PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-3-huong-dan-tat-toan-phieu-mua-hang/)).

### "CẢNH BÁO – Lỗi sửa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." hoặc "… Phiếu đã xuất" / "… Phiếu đang xuất" 

Nguyên nhân: phiếu trả đã được xuất kho (một phần hoặc toàn bộ).
Cách xử lý: đối chiếu phiếu trả, phiếu xuất và số liệu kho/công nợ, chuyển thủ kho và kế toán duyệt phương án điều chỉnh. Không tự xóa phiếu xuất chỉ để mở sửa phiếu trả.

### "CẢNH BÁO – Lỗi xóa: Bạn chỉ được xóa phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### Không thấy cột Tổng tiền / Đơn giá 

Nguyên nhân: tài khoản không có quyền **Xem giá** của Phiếu trả hàng.
Cách xử lý: liên hệ quản trị hệ thống nếu công việc cần xem giá.

### Nút Thêm mới không có mục Trả hàng đầu kỳ 

Nguyên nhân: tài khoản không có quyền **Trả hàng đầu kỳ**. Khi đó **Thêm mới** mở thẳng danh sách phiếu nhập kho.
Cách xử lý: dùng **Từ phiếu nhập**; cần trả đầu kỳ thì xin cấp quyền.

## 10. Câu hỏi thường gặp

**Lập phiếu trả hàng xong, công nợ NCC đã giảm chưa?**
Chưa. Công nợ và tồn kho giảm khi thủ kho xuất kho trả hàng.

**Có in phiếu trả hàng được không?**
Màn này không có in. Chứng từ giao cho NCC in từ phiếu xuất kho trả hàng (sổ tay Kho hàng).

**Phiếu trả hàng có làm thay đổi phiếu mua hàng không?**
Phiếu trả ghi nhận vào **phiếu nhập kho** gốc (**Trạng thái trả**). Phiếu mua hàng không đổi.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/) – Hướng dẫn lập phiếu trả hàng từ phiếu nhập kho.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/) – Hướng dẫn lập phiếu trả hàng từ phiếu nhập kho
- [HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-mh-a04-2-huong-dan-lap-phieu-tra-hang-dau-ky/) – Hướng dẫn lập phiếu trả hàng đầu kỳ
- [TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/) – Tổng quan màn hình Phiếu mua hàng
- [HƯỚNG DẪN TẤT TOÁN PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-3-huong-dan-tat-toan-phieu-mua-hang/) – Hướng dẫn tất toán phiếu mua hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ NHẬP MUA CHI TIẾT](/bai-viet/2026-11-07-mh-b04-0-tong-quan-man-hinh-thong-ke-nhap-mua-chi-tiet/) – Tổng quan màn hình Nhập mua chi tiết (cột Số trả lại)
- Sổ tay Kho hàng – Phiếu nhập kho, Phiếu xuất kho (Xuất trả hàng)
