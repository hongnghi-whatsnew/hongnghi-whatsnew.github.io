---
title: "TỔNG QUAN MÀN HÌNH PHIẾU XUẤT HÀNG"
date: "2026-11-07"
summary: "Màn hình Phiếu xuất hàng ghi nhận hàng rời kho không theo chứng từ bán hàng hay trả hàng, ví dụ: xuất mẫu cho khách xem, xuất củi / phế liệu đốt lò, xuất vật tư dùng nội bộ, xuất hàng hỏng huỷ."
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

Màn hình **Phiếu xuất hàng** ghi nhận hàng rời kho **không theo chứng từ bán hàng hay trả hàng**, ví dụ: xuất mẫu cho khách xem, xuất củi / phế liệu đốt lò, xuất vật tư dùng nội bộ, xuất hàng hỏng huỷ. Trên các màn thống kê, phiếu này được gọi là **Xuất khác** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT XUẤT KHÁC](/bai-viet/2026-11-07-kho-c03-0-tong-quan-man-hinh-thong-ke-chi-tiet-xuat-khac/)).

Lưu phiếu xuất hàng:

- **Tồn kho giảm** ngay; sổ cái kho có dòng xuất, nguồn **XUAT_HANG**, tính theo **giá vốn bình quân** hiện hành.
- **Không** phát sinh công nợ khách hàng / NCC.
- Nếu tick **Tính giá thành**, giá trị hàng xuất (số lượng × giá vốn cuối kỳ) được đưa vào chi phí của **kỳ tính giá thành** (sổ tay Giá thành).

Xuất bán cho khách dùng **Phiếu xuất kho** ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/)); chuyển giữa hai kho dùng **Phiếu xuất chuyển kho** ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-0-tong-quan-man-hinh-phieu-xuat-chuyen-kho/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Phiếu xuất hàng**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Có lý do xuất rõ ràng (bắt buộc ghi ở **GHI CHÚ**).

## 2. Mở chức năng

**Kho hàng → Phiếu xuất hàng**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU XUẤT HÀNG - DANH SÁCH](/posts/2026-11-07-kho-a07-0-tong-quan-man-hinh-phieu-xuat-hang/hinh-01-man-hinh-phieu-xuat-hang.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày xuất hàng**. Mặc định **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Lập phiếu xuất hàng (không có menu con); Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-1-huong-dan-lap-phieu-xuat-hang/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thao tác: Sửa \**: Chức năng: **Xóa**; Hướng dẫn: Sửa / xoá phiếu; Thông tin: [HƯỚNG DẪN LẬP PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-1-huong-dan-lap-phieu-xuat-hang/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày xuất hàng**: Ý nghĩa: Ngày trên phiếu
- **Mã phiếu**: Ý nghĩa: Mã phiếu xuất hàng (**XH…**), hệ thống tự tạo
- **Kho xuất**: Ý nghĩa: Kho xuất hàng
- **Ghi chú**: Ý nghĩa: Nội dung / lý do xuất
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi
- **Mã phiếu gốc**: Ý nghĩa: Chứng từ tay / mã đề nghị xuất

Dòng cuối bảng hiện **TỔNG CỘNG: n**.

**Menu chuột phải trên một dòng phiếu:**

- **Xem lại**: Mở cửa sổ: **PHIẾU XUẤT HÀNG - XEM LẠI** (chỉ xem); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **In Phiếu**: Mở cửa sổ: Xem trước **PHIẾU XUẤT HÀNG**; Hướng dẫn: phần “Thực hiện trên phần mềm”, [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)

Nhấp đúp vào dòng cũng mở **PHIẾU XUẤT HÀNG - XEM LẠI**. Chuột phải vào **tiêu đề cột** để mở menu sắp xếp, nhóm, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

```text
Cần xuất hàng không theo bán / trả (mẫu, nội bộ, huỷ…)
      ↓
Phiếu xuất hàng → Thêm mới (KHO-A07.1)
      ↓
Lưu: tồn kho giảm, sổ cái kho ghi xuất theo giá vốn bình quân
      ↓
(Tuỳ chọn) Tính giá thành → chi phí kỳ giá thành (sổ tay Giá thành)
      ↓
Thống kê → Xuất khác (KHO-C03.0)
```

**Các chức năng trên màn hình:**

```text
Phiếu xuất hàng
   ├── Thêm mới ──► nhập tay · Tải lên từ Excel
   ├── Sửa ──► ngày, kho, ghi chú, chi tiết
   ├── Xóa ──► chỉ người tạo
   ├── Chuột phải ──► Xem lại · In Phiếu
   └── Xuất Excel ──► danh sách phiếu
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập phiếu xuất hàng**: Cách làm: **Thêm mới**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-1-huong-dan-lap-phieu-xuat-hang/)
- **Xem chi tiết phiếu**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa phiếu**: Cách làm: **Sửa** → **PHIẾU XUẤT HÀNG - CẬP NHẬT**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-1-huong-dan-lap-phieu-xuat-hang/)
- **In phiếu**: Cách làm: Chuột phải → **In Phiếu**; Bài hướng dẫn: Mục này, [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Xoá phiếu**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một phiếu

**Bước 1 –** Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**).

**Bước 2 –** cửa sổ **PHIẾU XUẤT HÀNG - XEM LẠI** mở ra, chỉ xem.

**Bước 3 –** Bấm **Đóng**.

### In phiếu

Chuột phải → **In Phiếu**. Bản in tiêu đề **PHIẾU XUẤT HÀNG** gồm **Ngày lập**, **Kho xuất**, **Mã phiếu**, **Ghi chú/Lý do**, bảng **STT**, **TÊN SẢN PHẨM**, **ĐVT**, **SỐ LƯỢNG**, **GHI CHÚ**, **TỔNG CỘNG:** và ô ký **Người lập phiếu**, **Thủ kho**. Bản in không có giá.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-1-huong-dan-lap-phieu-xuat-hang/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết khi nào dùng Phiếu xuất hàng thay cho phiếu xuất kho / chuyển kho, phiếu ảnh hưởng tồn kho và giá thành thế nào, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Lưu phiếu là trừ tồn kho ngay.** Phiếu xuất hàng không thu tiền ai – không dùng để bán hàng.

⚠️ **Chỉ người tạo phiếu mới xoá được phiếu.**

⚠️ Ngày xuất thuộc **kỳ kế toán đã khoá** thì không lập / sửa / xoá được.

⚠️ Tick **Tính giá thành** sai sẽ làm lệch giá thành sản phẩm của kỳ – chỉ tick khi hàng xuất dùng cho sản xuất (xem [HƯỚNG DẪN LẬP PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-1-huong-dan-lap-phieu-xuat-hang/)).

### "CẢNH BÁO – Lỗi xóa: Chỉ được xoá phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### "CẢNH BÁO – … Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: ngày xuất thuộc kỳ kế toán đã khoá.
Cách xử lý: liên hệ kế toán.

### Không thấy phiếu vừa lập 

Kiểm tra: khoảng ngày; chi nhánh; tài khoản có được phân kho xuất không.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)) hoặc nhờ quản trị phân kho.

### Không thấy nút Thêm mới / Sửa / Xóa 

Kiểm tra: quyền tương ứng của màn hình Phiếu xuất hàng.
Cách xử lý: liên hệ quản trị hệ thống.

## 10. Câu hỏi thường gặp

**Phiếu xuất hàng khác Phiếu xuất kho thế nào?**
Phiếu xuất kho đi theo phiếu bán hàng / trả hàng và làm thay đổi công nợ. Phiếu xuất hàng là xuất khác, chỉ trừ tồn, không công nợ.

**Xuất hàng hỏng, hao hụt kiểm kê thì dùng phiếu nào?**
Hàng huỷ có lý do rõ ràng: Phiếu xuất hàng. Chênh lệch kiểm kê: **Phiếu điều chỉnh kho** (KHO-A03). Hỏi kế toán quy định của công ty.

**Xem tổng hàng xuất khác trong tháng ở đâu?**
Màn **Thống kê kho → Xuất khác** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT XUẤT KHÁC](/bai-viet/2026-11-07-kho-c03-0-tong-quan-man-hinh-thong-ke-chi-tiet-xuat-khac/)).

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-1-huong-dan-lap-phieu-xuat-hang/) – Hướng dẫn lập phiếu xuất hàng.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-1-huong-dan-lap-phieu-xuat-hang/) – Hướng dẫn lập phiếu xuất hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
- [TỔNG QUAN MÀN HÌNH PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-0-tong-quan-man-hinh-phieu-dieu-chinh-kho/) – Tổng quan màn hình Phiếu điều chỉnh kho
- [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/) – Tổng quan màn hình Sổ cái kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT XUẤT KHÁC](/bai-viet/2026-11-07-kho-c03-0-tong-quan-man-hinh-thong-ke-chi-tiet-xuat-khac/) – Thống kê xuất khác
- Sổ tay Giá thành – Kỳ tính giá thành
