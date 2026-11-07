---
title: "TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHUYỂN KHO"
date: "2026-11-07"
summary: "Chuyển hàng từ kho này sang kho khác (cùng chi nhánh) gồm hai phiếu: 1."
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

Chuyển hàng từ kho này sang kho khác (cùng chi nhánh) gồm **hai phiếu**:

1. **Phiếu xuất chuyển kho** (màn hình này) – lập ở kho đi khi hàng rời kho.
2. **Phiếu nhập chuyển kho** ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-0-tong-quan-man-hinh-phieu-nhap-chuyen-kho/)) – lập ở kho đến khi nhận hàng, chọn từ phiếu xuất chuyển kho.

Lưu phiếu xuất chuyển kho: **tồn kho đi giảm ngay**. Trong lúc hàng đang trên đường, hàng không nằm ở kho nào. Khi lập phiếu nhập chuyển kho, **tồn kho đến tăng** và **Trạng thái nhập** của phiếu xuất đổi thành **Đã nhập**. Chuyển kho không làm thay đổi công nợ và **không đổi giá vốn bình quân**.

Bạn dùng màn hình này khi:

- Điều hàng giữa các kho (kho tổng → kho cửa hàng, kho thành phẩm → kho giao hàng…).
- Chuyển thành phẩm gia công về kho theo yêu cầu (nút **TỪ PHIẾU NHẬP GC**).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Phiếu xuất chuyển kho**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Danh mục **Kho hàng**, **Xe**, **Tài xế** đã có dữ liệu.

## 2. Mở chức năng

**Kho hàng → Phiếu xuất chuyển kho**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU XUẤT CHUYỂN KHO - DANH SÁCH](/posts/2026-11-07-kho-a06-0-tong-quan-man-hinh-phieu-xuat-chuyen-kho/hinh-01-man-hinh-phieu-xuat-chuyen-kho.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày xuất**. Mặc định **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Lập phiếu xuất chuyển kho; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-1-huong-dan-lap-phieu-xuat-chuyen-kho/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thao tác: Sửa \**: Chức năng: **Xóa**; Hướng dẫn: Sửa / xoá phiếu; Thông tin: [HƯỚNG DẪN LẬP PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-1-huong-dan-lap-phieu-xuat-chuyen-kho/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Cột Trạng thái nhập**: Chức năng: Kho đến đã nhận chưa; Hướng dẫn: Bảng dưới

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày xuất**: Ý nghĩa: Ngày xuất chuyển kho
- **Mã phiếu**: Ý nghĩa: Mã phiếu xuất chuyển (**XC…**), hệ thống tự tạo
- **Kho xuất chuyển**: Ý nghĩa: Kho đi
- **Kho nhập**: Ý nghĩa: Kho đến
- **Mã phiếu gốc**: Ý nghĩa: Mã chứng từ tay / lệnh điều chuyển
- **Tên tài xế, Biển số xe**: Ý nghĩa: Phương tiện chở hàng
- **Trạng thái nhập**: Ý nghĩa: **Chưa nhập** (chữ xanh) / **Đang nhập** / **Đã nhập** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

**Ý nghĩa Trạng thái nhập:**

- **Chưa nhập**: Khi nào: Kho đến chưa lập phiếu nhập chuyển kho
- **Đang nhập**: Khi nào: Đã nhập một phần
- **Đã nhập**: Khi nào: Mọi dòng đã nhập đủ ở kho đến

**Menu chuột phải trên một dòng phiếu:**

- **Xem lại**: Mở cửa sổ: **XEM LẠI - PHIẾU XUẤT CHUYỂN KHO** (chỉ xem); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Cập nhật mã phiếu gốc**: Mở cửa sổ: Hộp thoại **CẬP NHẬT MÃ PHIẾU GỐC**; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **In Phiếu**: Mở cửa sổ: Xem trước **PHIẾU XUẤT CHUYỂN KHO**; Hướng dẫn: phần “Thực hiện trên phần mềm”, [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)

Nhấp đúp vào dòng cũng mở **XEM LẠI - PHIẾU XUẤT CHUYỂN KHO**. Chuột phải vào **tiêu đề cột** để mở menu sắp xếp, nhóm, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

```text
Kho đi: Phiếu xuất chuyển kho (KHO-A06.1)
   ├── tồn kho đi giảm ngay
   └── Trạng thái nhập: Chưa nhập
      ↓
Hàng trên đường (không thuộc kho nào)
      ↓
Kho đến: Phiếu nhập chuyển kho từ phiếu xuất (KHO-A08.1)
   ├── tồn kho đến tăng
   └── Trạng thái nhập: Đang nhập → Đã nhập
```

**Các chức năng trên màn hình:**

```text
Phiếu xuất chuyển kho
   ├── Thêm mới ──► lập tay · TỪ PHIẾU NHẬP GC · Tải lên từ Excel
   ├── Sửa ──► khi kho đến chưa nhập
   ├── Xóa ──► chỉ người tạo, khi kho đến chưa nhập
   ├── Chuột phải ──► Xem lại · Cập nhật mã phiếu gốc · In Phiếu
   └── Xuất Excel ──► danh sách phiếu
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập phiếu xuất chuyển kho**: Cách làm: **Thêm mới**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-1-huong-dan-lap-phieu-xuat-chuyen-kho/)
- **Xem phiếu nào kho đến chưa nhận**: Cách làm: Lọc cột **Trạng thái nhập** = **Chưa nhập**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem chi tiết phiếu**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa phiếu**: Cách làm: **Sửa** → **CẬP NHẬT - PHIẾU XUẤT CHUYỂN KHO**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-1-huong-dan-lap-phieu-xuat-chuyen-kho/)
- **Sửa mã phiếu gốc**: Cách làm: Chuột phải → **Cập nhật mã phiếu gốc**; Bài hướng dẫn: Mục này
- **In phiếu**: Cách làm: Chuột phải → **In Phiếu**; Bài hướng dẫn: Mục này, [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Nhận hàng ở kho đến**: Cách làm: Màn **Phiếu nhập chuyển kho**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-1-huong-dan-lap-phieu-nhap-chuyen-kho/)
- **Xoá phiếu**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một phiếu

**Bước 1 –** Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**).

**Bước 2 –** cửa sổ **XEM LẠI - PHIẾU XUẤT CHUYỂN KHO** mở ra, chỉ xem; bảng chi tiết có thêm **SL đã nhập**, **SL còn lại**.

**Bước 3 –** Bấm **Đóng**.

### Cập nhật mã phiếu gốc

**Bước 1 –** Chuột phải dòng phiếu → **Cập nhật mã phiếu gốc**.

**Bước 2 –** Hộp thoại **CẬP NHẬT MÃ PHIẾU GỐC** hiện mã phiếu và mã gốc hiện tại; nhập mã mới → **Đồng ý**. Hệ thống báo **Cập nhật thành công**.

### In phiếu

Chuột phải → **In Phiếu**. Bản in tiêu đề **PHIẾU XUẤT CHUYỂN KHO** gồm **Kho Xuất**, **Kho Nhập**, **Mã phiếu Xuất**, **Tên tài xế**, **Số xe**, bảng **STT**, **TÊN SẢN PHẨM**, **ĐVT**, **SỐ LƯỢNG**, **GHI CHÚ**, **TỔNG CỘNG:** và ô ký **Người lập phiếu**, **Người nhận hàng**, **Thủ kho**. Thao tác in xem [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/).

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-1-huong-dan-lap-phieu-xuat-chuyen-kho/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Phiếu xuất chuyển kho có những chức năng gì, chuyển kho gồm hai phiếu xuất / nhập, tồn kho thay đổi lúc nào và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Lưu phiếu xuất chuyển kho là trừ tồn kho đi ngay**, nhưng kho đến **chưa** có hàng cho tới khi lập phiếu nhập chuyển kho. Theo dõi cột **Trạng thái nhập** để không bỏ sót.

⚠️ Khi kho đến đã lập phiếu nhập chuyển kho, phiếu xuất **không sửa / xoá được** (hệ thống báo dữ liệu đã liên kết). Cần đối chiếu cả phiếu nhận và hàng thực tế với kho nhận/kế toán để chốt trình tự điều chỉnh; không xóa phiếu nhận đúng chỉ để mở khóa phiếu xuất.

⚠️ **Chỉ người tạo phiếu mới xoá được phiếu.**

⚠️ Ngày xuất thuộc **kỳ kế toán đã khoá** thì không lập / sửa / xoá được.

### "CẢNH BÁO – Lỗi xóa: Chỉ được xoá phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### "CẢNH BÁO – Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: kho đến đã lập phiếu nhập chuyển kho từ phiếu này.
Cách xử lý: xoá phiếu nhập chuyển kho trước (nếu đúng là lập nhầm), rồi xoá phiếu xuất.

### Không thấy phiếu vừa lập 

Kiểm tra: khoảng ngày có chứa **Ngày xuất**; chi nhánh; tài khoản có được phân kho đi hoặc kho đến không.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)) hoặc nhờ quản trị phân kho.

### Không thấy nút Thêm mới / Sửa / Xóa 

Kiểm tra: quyền tương ứng của màn hình Phiếu xuất chuyển kho.
Cách xử lý: liên hệ quản trị hệ thống.

## 10. Câu hỏi thường gặp

**Đã lập phiếu xuất chuyển kho, sao kho đến chưa có tồn?**
Kho đến phải lập **phiếu nhập chuyển kho** từ phiếu này ([HƯỚNG DẪN LẬP PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-1-huong-dan-lap-phieu-nhap-chuyen-kho/)).

**Chuyển hàng sang chi nhánh khác được không?**
Màn hình này chuyển giữa các kho trong **cùng chi nhánh** đang làm việc. Chuyển khác chi nhánh cần hỏi kế toán quy trình.

**Chuyển kho có làm thay đổi giá vốn không?**
Không. Hàng chuyển đi / đến tính theo giá vốn bình quân hiện hành ([TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/)).

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-1-huong-dan-lap-phieu-xuat-chuyen-kho/) – Hướng dẫn lập phiếu xuất chuyển kho.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-1-huong-dan-lap-phieu-xuat-chuyen-kho/) – Hướng dẫn lập phiếu xuất chuyển kho
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-0-tong-quan-man-hinh-phieu-nhap-chuyen-kho/) – Tổng quan màn hình Phiếu nhập chuyển kho
- [HƯỚNG DẪN LẬP PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-1-huong-dan-lap-phieu-nhap-chuyen-kho/) – Hướng dẫn lập phiếu nhập chuyển kho
- [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/) – Tổng quan màn hình Sổ cái kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT CHUYỂN KHO](/bai-viet/2026-11-07-kho-c04-0-tong-quan-man-hinh-thong-ke-chi-tiet-chuyen-kho/) – Thống kê xuất chuyển kho chi tiết
