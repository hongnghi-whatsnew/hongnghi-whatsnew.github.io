---
title: "TỔNG QUAN MÀN HÌNH PHIẾU NHẬP CHUYỂN KHO"
date: "2026-11-07"
summary: "Màn hình Phiếu nhập chuyển kho ghi nhận hàng đã đến kho nhận sau khi kho đi lập phiếu xuất chuyển kho (TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHUYỂN KHO)."
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

Màn hình **Phiếu nhập chuyển kho** ghi nhận hàng **đã đến kho nhận** sau khi kho đi lập **phiếu xuất chuyển kho** ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-0-tong-quan-man-hinh-phieu-xuat-chuyen-kho/)). Mỗi phiếu nhập chuyển kho luôn được lập **từ một phiếu xuất chuyển kho**: kho, xe, tài xế, hàng hoá, số lượng đều chép từ phiếu xuất.

Lưu phiếu nhập chuyển kho: **tồn kho nhận tăng**; **Trạng thái nhập** của phiếu xuất chuyển kho đổi thành **Đã nhập** (hoặc **Đang nhập**). Không phát sinh công nợ, không đổi giá vốn bình quân.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Phiếu nhập chuyển kho**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Kho đi đã lập **phiếu xuất chuyển kho** cho lô hàng.

## 2. Mở chức năng

**Kho hàng → Phiếu nhập chuyển kho**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU NHẬP CHUYỂN KHO - DANH SÁCH](/posts/2026-11-07-kho-a08-0-tong-quan-man-hinh-phieu-nhap-chuyen-kho/hinh-01-man-hinh-phieu-nhap-chuyen-kho.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày nhập**. Mặc định **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở danh sách phiếu xuất chuyển kho để chọn; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-1-huong-dan-lap-phieu-nhap-chuyen-kho/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thao tác: Sửa \**: Chức năng: **Xóa**; Hướng dẫn: Sửa / xoá phiếu; Thông tin: [HƯỚNG DẪN LẬP PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-1-huong-dan-lap-phieu-nhap-chuyen-kho/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày nhập**: Ý nghĩa: Ngày nhận hàng ở kho nhập
- **Mã phiếu**: Ý nghĩa: Mã phiếu nhập chuyển (**NC…**), hệ thống tự tạo
- **Từ phiếu**: Ý nghĩa: Mã phiếu xuất chuyển kho gốc (**XC…**)
- **Kho xuất chuyển**: Ý nghĩa: Kho đi
- **Kho nhập**: Ý nghĩa: Kho nhận
- **Mã phiếu gốc**: Ý nghĩa: Mã chứng từ tay
- **Tên tài xế, Biển số xe**: Ý nghĩa: Chép từ phiếu xuất
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

**Menu chuột phải trên một dòng phiếu:**

- **Xem lại**: Mở cửa sổ: **THÔNG TIN - PHIẾU NHẬP CHUYỂN KHO** (chỉ xem); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **In Phiếu**: Mở cửa sổ: Xem trước **PHIẾU NHẬP CHUYỂN KHO**; Hướng dẫn: phần “Thực hiện trên phần mềm”, [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)

Nhấp đúp vào dòng cũng mở **THÔNG TIN - PHIẾU NHẬP CHUYỂN KHO**. Chuột phải vào **tiêu đề cột** để mở menu sắp xếp, nhóm, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

```text
(Kho đi) Phiếu xuất chuyển kho – Trạng thái nhập "Chưa nhập"
      ↓
(Kho nhận) Phiếu nhập chuyển kho → Thêm mới
      ↓
DANH SÁCH PHIẾU XUẤT CHUYỂN KHO → nhấp đúp phiếu XC…
      ↓
Lưu: tồn kho nhận tăng
      ↓
Phiếu xuất chuyển kho: Trạng thái nhập "Đã nhập"
```

**Các chức năng trên màn hình:**

```text
Phiếu nhập chuyển kho
   ├── Thêm mới ──► chọn phiếu xuất chuyển kho (KHO-A08.1)
   ├── Sửa ──► ngày, mã phiếu gốc, ghi chú, tên in, chú thích
   ├── Xóa ──► chỉ người tạo
   ├── Chuột phải ──► Xem lại · In Phiếu
   └── Xuất Excel ──► danh sách phiếu
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Nhận hàng chuyển kho**: Cách làm: **Thêm mới** → nhấp đúp phiếu xuất; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-1-huong-dan-lap-phieu-nhap-chuyen-kho/)
- **Xem phiếu xuất chuyển nào chưa nhận**: Cách làm: Màn **Phiếu xuất chuyển kho**, lọc **Trạng thái nhập** = **Chưa nhập**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-0-tong-quan-man-hinh-phieu-xuat-chuyen-kho/)
- **Xem chi tiết phiếu**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa phiếu**: Cách làm: **Sửa** → **CẬP NHẬT - PHIẾU NHẬP CHUYỂN KHO**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-1-huong-dan-lap-phieu-nhap-chuyen-kho/)
- **In phiếu**: Cách làm: Chuột phải → **In Phiếu**; Bài hướng dẫn: Mục này, [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Xoá phiếu**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một phiếu

**Bước 1 –** Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**).

**Bước 2 –** cửa sổ **THÔNG TIN - PHIẾU NHẬP CHUYỂN KHO** mở ra, chỉ xem.

**Bước 3 –** Bấm **Đóng**.

### In phiếu

Chuột phải → **In Phiếu**. Bản in tiêu đề **PHIẾU NHẬP CHUYỂN KHO** gồm **Kho Xuất**, **Kho Nhập**, **Mã phiếu Nhập**, **Tên tài xế**, **Số xe**, bảng **STT**, **TÊN SẢN PHẨM**, **ĐVT**, **SỐ LƯỢNG**, **GHI CHÚ**, **TỔNG CỘNG:**, ô ký **Người lập phiếu**, **Người nhận hàng**, **Thủ kho**.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-1-huong-dan-lap-phieu-nhap-chuyen-kho/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết phiếu nhập chuyển kho là bước thứ hai của chuyển kho, làm tăng tồn kho nhận và cập nhật trạng thái phiếu xuất, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Tồn kho nhận chỉ tăng khi lập phiếu nhập chuyển kho.** Phiếu xuất chuyển kho chưa nhập thì hàng không nằm ở kho nào trên hệ thống.

⚠️ Phiếu nhập chuyển kho **chỉ lập được từ phiếu xuất chuyển kho**, không nhập tay hàng hoá.

⚠️ **Chỉ người tạo phiếu mới xoá được phiếu.** Xoá phiếu nhập thì tồn kho nhận giảm lại và phiếu xuất trở về **Chưa nhập**.

⚠️ Ngày nhập thuộc **kỳ kế toán đã khoá** thì không lập / sửa / xoá được.

### "CẢNH BÁO – Lỗi xóa: Chỉ được xoá phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### Không thấy phiếu vừa lập 

Kiểm tra: khoảng ngày có chứa **Ngày nhập**; chi nhánh; tài khoản có được phân kho đi hoặc kho nhận không.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)) hoặc nhờ quản trị phân kho.

### Không thấy nút Thêm mới / Sửa / Xóa 

Kiểm tra: quyền tương ứng của màn hình Phiếu nhập chuyển kho.
Cách xử lý: liên hệ quản trị hệ thống.

## 10. Câu hỏi thường gặp

**Hàng đến thiếu so với phiếu xuất thì làm sao?**
Phiếu nhập chuyển kho không sửa được số lượng – mặc định nhập đủ số còn lại. Hàng thiếu/hỏng trên đường: dừng lưu, lập biên bản và báo kho đi/kế toán chốt cách xử lý. Chỉ sửa phiếu xuất nếu phiếu đã ghi sai lượng thực rời kho; thiếu hụt sau giao phải có phương án riêng, không tự sửa lịch sử xuất để khớp lượng nhận.

**Một phiếu xuất chuyển kho nhập nhiều lần được không?**
Hệ thống có trạng thái **Đang nhập**, nhưng cửa sổ không cho sửa số lượng, nên thực tế mỗi phiếu xuất được nhập một lần cho toàn bộ số còn lại.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-1-huong-dan-lap-phieu-nhap-chuyen-kho/) – Hướng dẫn lập phiếu nhập chuyển kho.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-1-huong-dan-lap-phieu-nhap-chuyen-kho/) – Hướng dẫn lập phiếu nhập chuyển kho
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-0-tong-quan-man-hinh-phieu-xuat-chuyen-kho/) – Tổng quan màn hình Phiếu xuất chuyển kho
- [HƯỚNG DẪN LẬP PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-1-huong-dan-lap-phieu-xuat-chuyen-kho/) – Hướng dẫn lập phiếu xuất chuyển kho
- [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/) – Tổng quan màn hình Sổ cái kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT CHUYỂN KHO](/bai-viet/2026-11-07-kho-c04-0-tong-quan-man-hinh-thong-ke-chi-tiet-chuyen-kho/) – Thống kê xuất chuyển kho chi tiết
