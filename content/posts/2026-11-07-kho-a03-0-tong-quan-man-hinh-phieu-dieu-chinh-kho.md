---
title: "TỔNG QUAN MÀN HÌNH PHIẾU ĐIỀU CHỈNH KHO"
date: "2026-11-07"
summary: "Màn hình Phiếu điều chỉnh kho dùng để tăng hoặc giảm tồn kho khi số thực tế khác số trên hệ thống mà không có chứng từ mua / bán / chuyển kho tương ứng: chênh lệch sau kiểm kê, hàng hỏng huỷ, sai sót nhập liệu đã chốt."
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

Màn hình **Phiếu điều chỉnh kho** dùng để **tăng hoặc giảm tồn kho** khi số thực tế khác số trên hệ thống mà không có chứng từ mua / bán / chuyển kho tương ứng: chênh lệch sau kiểm kê, hàng hỏng huỷ, sai sót nhập liệu đã chốt.

Trên mỗi dòng chi tiết, **Số lượng dương** làm **tăng** tồn, **Số lượng âm** làm **giảm** tồn của mặt hàng ở **kho điều chỉnh**. Tồn kho và **Sổ cái kho** thay đổi ngay khi lưu phiếu, nên phiếu điều chỉnh ảnh hưởng tới giá trị tồn kho và giá vốn.

Bạn dùng màn hình này khi:

- Kiểm kê cuối tháng thấy thừa / thiếu hàng so với hệ thống.
- Cần ghi giảm hàng hỏng, hàng mất có biên bản.
- Xem lại, sửa, xoá, in phiếu điều chỉnh đã lập.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Phiếu điều chỉnh kho**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Có kết quả kiểm kê / biên bản xác định số chênh lệch của từng mặt hàng.

## 2. Mở chức năng

**Kho hàng → Phiếu điều chỉnh kho**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU ĐIỀU CHỈNH KHO - DANH SÁCH](/posts/2026-11-07-kho-a03-0-tong-quan-man-hinh-phieu-dieu-chinh-kho/hinh-01-man-hinh-phieu-dieu-chinh-kho.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày điều chỉnh kho**. Mặc định **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Lập phiếu điều chỉnh kho (không có menu con); Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-1-huong-dan-lap-phieu-dieu-chinh-kho/)
- **Biểu tượng Xuất Excel, Trình chọn cột**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**) / ẩn hiện cột; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/) / [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thao tác: Sửa / Xóa**: Chức năng: Cập nhật / xoá phiếu; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-1-huong-dan-lap-phieu-dieu-chinh-kho/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Xóa** (hiện theo quyền)
- **Ngày điều chỉnh kho**: Ý nghĩa: Ngày trên phiếu
- **Mã phiếu**: Ý nghĩa: Mã phiếu điều chỉnh, hệ thống tự tạo (dạng **DC…**)
- **Kho điều chỉnh**: Ý nghĩa: Kho được tăng / giảm tồn
- **Ghi chú**: Ý nghĩa: Lý do điều chỉnh
- **File đính kèm**: Ý nghĩa: **Số lượng file: n** hoặc **Không có file đính kèm**
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi
- **Mã phiếu gốc**: Ý nghĩa: Số biên bản kiểm kê / chứng từ gốc (cột cuối, kéo thanh cuộn ngang để thấy)

Dòng cuối bảng hiện **TỔNG CỘNG: n** (số phiếu).

**Menu chuột phải trên một dòng phiếu:**

- **Xem lại**: Mở cửa sổ: **PHIẾU ĐIỀU CHỈNH KHO - XEM LẠI** (chỉ xem); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **In Phiếu**: Mở cửa sổ: Cửa sổ xem trước khi in, mẫu **PHIẾU ĐIỀU CHỈNH KHO**; Hướng dẫn: phần “Thực hiện trên phần mềm”, [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **File đính kèm**: Mở cửa sổ: **FILE ĐÍNH KÈM - PHIẾU ĐIỀU CHỈNH KHO**; Hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)

Nhấp đúp vào dòng cũng mở **PHIẾU ĐIỀU CHỈNH KHO - XEM LẠI**. Chuột phải vào **tiêu đề cột** để mở menu sắp xếp, nhóm, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

**Vị trí của phiếu điều chỉnh kho:**

```text
Kiểm kê kho → so với tồn trên hệ thống
      ↓
Có chênh lệch? ── Không ──► kết thúc
      ↓ Có
Phiếu điều chỉnh kho (KHO-A03.1)
   ├── Thừa: Số lượng dương → tồn tăng
   └── Thiếu / hỏng: Số lượng âm → tồn giảm (kiểm tra tồn được xuất)
      ↓
Sổ cái kho: dòng điều chỉnh tăng / giảm → giá vốn tính lại từ ngày điều chỉnh
      ↓
Đối chiếu: Thống kê kho → Điều chỉnh kho (KHO-C05.0)
```

**Các chức năng trên màn hình:**

```text
Phiếu điều chỉnh kho
   ├── Thêm mới ──► nhập tay từng dòng · Tải lên từ Excel
   ├── Sửa ──► sửa ngày, kho, ghi chú, chi tiết
   ├── Xóa ──► chỉ người tạo phiếu
   ├── Xem lại (chuột phải / nhấp đúp)
   ├── In Phiếu (chuột phải)
   ├── File đính kèm (chuột phải)
   └── Xuất Excel ──► danh sách phiếu
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm phiếu**: Cách làm: Gõ mã phiếu, mã phiếu gốc hoặc ghi chú vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập phiếu điều chỉnh**: Cách làm: **Thêm mới**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-1-huong-dan-lap-phieu-dieu-chinh-kho/)
- **Nhập nhiều dòng từ file kiểm kê**: Cách làm: Trong cửa sổ → **Tải lên từ Excel**; Bài hướng dẫn: [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU KHO TỪ EXCEL](/bai-viet/2026-11-07-kho-a03-2-huong-dan-nhap-chi-tiet-phieu-kho-tu-excel/)
- **Xem chi tiết phiếu**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa phiếu**: Cách làm: **Sửa** → **PHIẾU ĐIỀU CHỈNH KHO - CẬP NHẬT**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-1-huong-dan-lap-phieu-dieu-chinh-kho/)
- **Xoá phiếu**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **In phiếu**: Cách làm: Chuột phải → **In Phiếu**; Bài hướng dẫn: Mục này, [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Đính kèm biên bản kiểm kê**: Cách làm: Chuột phải → **File đính kèm**; Bài hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một phiếu

**Bước 1 –** Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**).

**Bước 2 –** cửa sổ **PHIẾU ĐIỀU CHỈNH KHO - XEM LẠI** mở ra; các ô không sửa được, không có nút **Lưu lại**. Dòng có **Số lượng** âm là dòng điều chỉnh giảm.

**Bước 3 –** Bấm **Đóng**.

### In phiếu điều chỉnh kho

**Bước 1 –** Chuột phải vào dòng phiếu → **In Phiếu**.

**Bước 2 –** Cửa sổ xem trước hiện mẫu **PHIẾU ĐIỀU CHỈNH KHO** gồm: thông tin công ty, **Ngày lập**, **Kho điều chỉnh**, **Người đ.chỉnh** (người tạo phiếu), **Mã phiếu**, **Lý do** (lấy từ Ghi chú), bảng **STT / TÊN SẢN PHẨM / ĐVT / SỐ LƯỢNG / GHI CHÚ**, dòng **TỔNG CỘNG** số lượng, chỗ ký **Người lập phiếu** và **Thủ kho**.

**Bước 3 –** In hoặc lưu file bằng thanh công cụ của cửa sổ xem trước ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)). Bấm **Đóng** trên thanh công cụ để thoát.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ phiếu điều chỉnh kho: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-1-huong-dan-lap-phieu-dieu-chinh-kho/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Phiếu điều chỉnh kho dùng để làm gì, phiếu tăng / giảm tồn và ảnh hưởng sổ cái kho thế nào, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Phiếu điều chỉnh làm thay đổi tồn kho và giá trị tồn kho ngay khi lưu.** Chỉ lập khi đã có kết quả kiểm kê / biên bản được duyệt theo quy định nội bộ.

⚠️ Không dùng phiếu điều chỉnh thay cho phiếu nhập mua, xuất bán, chuyển kho: các phiếu đó còn cập nhật công nợ, trạng thái đơn hàng mà phiếu điều chỉnh không làm.

⚠️ **Chỉ người tạo phiếu mới xoá được phiếu.** Không xoá / sửa được phiếu điều chỉnh tăng nếu hàng đã được xuất đi (kho không còn đủ tồn để trừ lại).

⚠️ Không lập / sửa / xoá được phiếu có **Ngày điều chỉnh kho** thuộc kỳ kế toán đã khoá.

⚠️ Mỗi lần thêm, sửa, xoá phiếu, hệ thống lưu lại lịch sử thay đổi.

### "CẢNH BÁO – Lỗi xóa: Chỉ được xoá phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### "CẢNH BÁO – Lỗi xóa: "<tên kho>", "<tên hàng>" không đủ tồn (<số>)." 

Nguyên nhân: phiếu có dòng điều chỉnh tăng, hàng đó đã được xuất đi nên kho không còn đủ để trừ lại khi xoá.
Cách xử lý: đối chiếu biên bản kiểm kê, phiếu cũ và các lần xuất sau đó với kế toán. Chỉ lập điều chỉnh mới khi có chênh lệch thực tế và phương án được duyệt; không tạo phiếu bù chỉ để xóa được phiếu cũ.

### "CẢNH BÁO – Lỗi xóa: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: ngày điều chỉnh thuộc kỳ kế toán đã khoá.
Cách xử lý: liên hệ kế toán.

### Không thấy phiếu vừa lập 

Kiểm tra: khoảng ngày lọc có chứa **Ngày điều chỉnh kho**; chi nhánh đang làm việc.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

### Không thấy nút Thêm mới / Sửa / Xóa 

Kiểm tra: quyền tương ứng của màn hình Phiếu điều chỉnh kho.
Cách xử lý: liên hệ quản trị hệ thống.

## 10. Câu hỏi thường gặp

**Điều chỉnh giảm thì nhập số thế nào?**
Nhập **Số lượng âm** (ví dụ −3) ở dòng hàng đó. Xem [HƯỚNG DẪN LẬP PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-1-huong-dan-lap-phieu-dieu-chinh-kho/).

**Xem tổng các lần điều chỉnh trong tháng ở đâu?**
Màn **Thống kê kho → Điều chỉnh kho** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-c05-0-tong-quan-man-hinh-thong-ke-chi-tiet-dieu-chinh-kho/)).

**Phiếu điều chỉnh có làm thay đổi giá vốn không?**
Có ảnh hưởng: dòng tăng được ghi vào sổ cái kho theo đơn giá vốn hiện có của mặt hàng (không có thì theo giá bình quân hiện hành); dòng giảm ghi theo giá bình quân hiện hành. Giá vốn được tính lại từ ngày điều chỉnh.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-1-huong-dan-lap-phieu-dieu-chinh-kho/) – Hướng dẫn lập phiếu điều chỉnh kho.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-1-huong-dan-lap-phieu-dieu-chinh-kho/) – Hướng dẫn lập phiếu điều chỉnh kho
- [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU KHO TỪ EXCEL](/bai-viet/2026-11-07-kho-a03-2-huong-dan-nhap-chi-tiet-phieu-kho-tu-excel/) – Hướng dẫn nhập chi tiết phiếu kho từ Excel
- [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/) – Tổng quan màn hình Sổ cái kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-c05-0-tong-quan-man-hinh-thong-ke-chi-tiet-dieu-chinh-kho/) – Tổng quan màn hình Điều chỉnh kho
