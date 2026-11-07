---
title: "TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG"
date: "2026-11-07"
summary: "Màn hình Phiếu đặt hàng dùng để lập và theo dõi đơn đặt hàng gửi nhà cung cấp (NCC): đặt mặt hàng nào, số lượng bao nhiêu, giá bao nhiêu, ngày dự kiến nhận hàng."
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

Màn hình **Phiếu đặt hàng** dùng để lập và theo dõi **đơn đặt hàng gửi nhà cung cấp (NCC)**: đặt mặt hàng nào, số lượng bao nhiêu, giá bao nhiêu, ngày dự kiến nhận hàng.

Phiếu đặt hàng **không** làm thay đổi tồn kho hay công nợ. Nó là "đơn chờ mua": khi lập **phiếu mua hàng** bằng nút **Từ đơn hàng** ([HƯỚNG DẪN LẬP PHIẾU MUA HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/)), hệ thống trừ dần số lượng đã mua và cập nhật **Trạng thái nhận** của phiếu đặt hàng.

Bạn dùng màn hình này khi:

- Đặt hàng với NCC và cần in phiếu đặt hàng gửi NCC.
- Theo dõi đơn nào đã mua đủ, đơn nào còn thiếu.
- Đóng (tất toán) phần hàng NCC không giao nữa.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Phiếu đặt hàng**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)): danh sách chỉ hiện phiếu của chi nhánh đang làm việc.
- Danh mục **Nhà cung cấp** và **Hàng hoá** đã có dữ liệu.

## 2. Mở chức năng

**Mua hàng → Phiếu đặt hàng**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU ĐẶT HÀNG NCC - DANH SÁCH](/posts/2026-11-07-mh-a01-0-tong-quan-man-hinh-phieu-dat-hang/hinh-01-man-hinh-phieu-dat-hang.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc phiếu theo **Ngày đặt hàng**. Mặc định **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Lập phiếu đặt hàng mới; Hướng dẫn: **[HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG NHÀ CUNG CẤP](/bai-viet/2026-11-07-huong-dan-lap-phieu-dat-hang-nha-cung-cap/)**
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (chỉ hiện khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thao tác: Tất toán / Sửa / Xóa**: Chức năng: Tất toán / cập nhật / xoá phiếu; Hướng dẫn: [HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-tat-toan-phieu-dat-hang/) / [HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG NHÀ CUNG CẤP](/bai-viet/2026-11-07-huong-dan-lap-phieu-dat-hang-nha-cung-cap/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày đặt hàng**: Ý nghĩa: Ngày lập đơn đặt hàng
- **Ngày nhận dự kiến**: Ý nghĩa: Ngày dự kiến NCC giao hàng
- **Mã phiếu**: Ý nghĩa: Mã phiếu đặt hàng, hệ thống tự tạo
- **Nhà cung cấp**: Ý nghĩa: Tên NCC
- **Tổng tiền**: Ý nghĩa: Tổng thành tiền (đã trừ chiết khấu, cộng VAT, trừ phần đã tất toán)
- **Trạng thái nhận**: Ý nghĩa: **Chưa nhận** / **Đang nhận** / **Đã nhận** – tính theo số lượng đã mua bằng phiếu mua hàng
- **Điều kiện thanh toán, Địa chỉ giao**: Ý nghĩa: Thông tin thêm của phiếu (xem ghi chú phần “Những điều cần lưu ý”)
- **Trạng thái**: Ý nghĩa: **Kích hoạt** / **Ngưng sử dụng**
- **Ghi chú**: Ý nghĩa: Ghi chú của phiếu
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n** (số phiếu) và tổng cột **Tổng tiền**.

**Ý nghĩa Trạng thái nhận:**

- **Chưa nhận**: Khi nào: Chưa dòng hàng nào được mua
- **Đang nhận**: Khi nào: Đã mua một phần
- **Đã nhận**: Khi nào: Mọi dòng đều đã mua đủ (số lượng đặt − số lượng tất toán)

**Menu chuột phải trên một dòng phiếu:**

![Hình 2: Menu chuột phải trên một dòng phiếu đặt hàng](/posts/2026-11-07-mh-a01-0-tong-quan-man-hinh-phieu-dat-hang/hinh-02-menu-chuot-phai-phieu-dat-hang.png)

- **Tất toán**: Mở cửa sổ: Xem ghi chú phần “Những điều cần lưu ý” – dùng liên kết **Tất toán** ở cột Thao tác; Hướng dẫn: [HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-tat-toan-phieu-dat-hang/)
- **In phiếu**: Mở cửa sổ: XEM IN PHIẾU ĐẶT HÀNG NCC; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-in-phieu-dat-hang/)

Bấm chuột phải vào **tiêu đề cột** để mở menu sắp xếp, nhóm, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

**Vị trí của phiếu đặt hàng trong quy trình:**

```text
Phiếu đặt hàng (MH-A01.1 / nhập từ Excel MH-A01.2)
      ↓
In phiếu gửi NCC (MH-A01.4)
      ↓
NCC giao hàng → Phiếu mua hàng "Từ đơn hàng" (MH-A03.2)
      ↓
Trạng thái nhận: Chưa nhận → Đang nhận → Đã nhận
      ↓
NCC không giao phần còn lại? ──► Tất toán (MH-A01.3)
```

**Các chức năng trên màn hình:**

```text
Phiếu đặt hàng
   ├── Thêm mới ──► lập phiếu (kèm Tải lên từ Excel)
   ├── Tất toán ──► đóng phần số lượng không mua nữa
   ├── Sửa ──► cập nhật phiếu (khi chưa mua dòng nào)
   ├── Xóa ──► chỉ người tạo, khi chưa mua dòng nào
   ├── Chuột phải ──► In phiếu
   └── Xuất Excel ──► danh sách phiếu
```

## 5. Thực hiện trên phần mềm

Màn hình này gồm nhiều chức năng, mỗi chức năng có bài riêng:

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm một phiếu**: Cách làm: Gõ mã phiếu hoặc tên NCC vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập phiếu đặt hàng**: Cách làm: **Thêm mới**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG NHÀ CUNG CẤP](/bai-viet/2026-11-07-huong-dan-lap-phieu-dat-hang-nha-cung-cap/)
- **Nhập nhanh chi tiết từ file Excel**: Cách làm: Trong cửa sổ → **Tải lên từ Excel**; Bài hướng dẫn: [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU ĐẶT HÀNG TỪ EXCEL](/bai-viet/2026-11-07-huong-dan-nhap-phieu-dat-hang-tu-excel/)
- **Sửa phiếu**: Cách làm: **Sửa** → cửa sổ **CẬP NHẬT - PHIẾU ĐẶT HÀNG**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG NHÀ CUNG CẤP](/bai-viet/2026-11-07-huong-dan-lap-phieu-dat-hang-nha-cung-cap/)
- **Tất toán phần không mua nữa**: Cách làm: **Tất toán** → cửa sổ **TẤT TOÁN - PHIẾU ĐẶT HÀNG**; Bài hướng dẫn: [HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-tat-toan-phieu-dat-hang/)
- **In phiếu gửi NCC**: Cách làm: Chuột phải → **In phiếu**; Bài hướng dẫn: [HƯỚNG DẪN IN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-in-phieu-dat-hang/)
- **Xoá phiếu**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

Nhấp đúp vào dòng phiếu **không** mở phiếu. Muốn xem chi tiết, bấm **Sửa** rồi **Đóng** không lưu.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ phiếu đặt hàng: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG NHÀ CUNG CẤP](/bai-viet/2026-11-07-huong-dan-lap-phieu-dat-hang-nha-cung-cap/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Phiếu đặt hàng có những chức năng gì, đọc được Trạng thái nhận và biết cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ Phiếu đặt hàng **không** làm tăng tồn kho, **không** ghi công nợ NCC.

⚠️ **Trạng thái nhận** phụ thuộc lượng mua liên kết và phần tất toán. Lập **phiếu mua hàng bằng nút Từ đơn hàng** ([HƯỚNG DẪN LẬP PHIẾU MUA HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/)) ghi liên kết để theo dõi lượng đã mua; sửa/xóa phiếu liên kết hoặc tất toán cũng có thể tính lại trạng thái. Phiếu mua hàng lập tay, không chọn từ đơn, không làm giảm số lượng chờ của phiếu đặt hàng.

⚠️ **Chỉ người tạo phiếu mới xoá được phiếu.** Người khác bấm **Xóa** sẽ nhận thông báo lỗi (xem phần “Vướng mắc thường gặp”).

⚠️ Khi phiếu đặt hàng đã có dòng được mua, **không sửa / xoá được** phiếu nữa (hệ thống báo dữ liệu đã liên kết). Phần không mua tiếp thì dùng **Tất toán**.

⚠️ Cột **Điều kiện thanh toán** và **Địa chỉ giao** có trên danh sách nhưng cửa sổ lập phiếu hiện **không có ô nhập** hai thông tin này, nên thường để trống.

### "Lỗi xóa: Bạn chỉ được xóa phiếu do mình tạo" 

Nguyên nhân: tài khoản đang đăng nhập không phải người tạo phiếu.
Cách xử lý: nhờ người tạo phiếu xoá, hoặc liên hệ quản trị hệ thống.

### "Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: phiếu đặt hàng đã có dòng được lấy vào phiếu mua hàng.
Cách xử lý: không xoá phiếu đã dùng. Nếu NCC không giao phần còn lại, dùng **Tất toán** ([HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-tat-toan-phieu-dat-hang/)).

### Không thấy phiếu vừa lập 

Kiểm tra: khoảng ngày đang lọc có chứa **Ngày đặt hàng** của phiếu không; chi nhánh đang làm việc.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

### Không thấy nút Thêm mới / liên kết Tất toán / Sửa / Xóa 

Kiểm tra: quyền **Thêm mới**, **Tất toán**, **Cập nhật**, **Xoá** của màn hình Phiếu đặt hàng.
Cách xử lý: liên hệ quản trị hệ thống.

## 10. Câu hỏi thường gặp

**Một phiếu đặt hàng có thể mua thành nhiều lần không?**
Được. Mỗi lần NCC giao, lập một phiếu mua hàng **Từ đơn hàng**, chỉ lấy số lượng thực giao. Phiếu đặt hàng chuyển **Đang nhận** cho đến khi đủ.

**NCC báo không giao phần còn lại thì làm sao?**
Bấm **Tất toán**, nhập số lượng không giao vào cột **SL tất toán** ([HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-tat-toan-phieu-dat-hang/)).

**In phiếu đặt hàng ở đâu?**
Chuột phải vào dòng phiếu → **In phiếu** ([HƯỚNG DẪN IN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-in-phieu-dat-hang/)).

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG NHÀ CUNG CẤP](/bai-viet/2026-11-07-huong-dan-lap-phieu-dat-hang-nha-cung-cap/) – Hướng dẫn lập phiếu đặt hàng nhà cung cấp.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG NHÀ CUNG CẤP](/bai-viet/2026-11-07-huong-dan-lap-phieu-dat-hang-nha-cung-cap/) – Hướng dẫn lập phiếu đặt hàng nhà cung cấp
- [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU ĐẶT HÀNG TỪ EXCEL](/bai-viet/2026-11-07-huong-dan-nhap-phieu-dat-hang-tu-excel/) – Hướng dẫn nhập chi tiết phiếu đặt hàng từ Excel
- [HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-tat-toan-phieu-dat-hang/) – Hướng dẫn tất toán phiếu đặt hàng
- [HƯỚNG DẪN IN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-in-phieu-dat-hang/) – Hướng dẫn in phiếu đặt hàng
- [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/) – Hướng dẫn lập phiếu mua hàng từ phiếu đặt hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ ĐẶT HÀNG NCC CHI TIẾT](/bai-viet/2026-11-07-mh-b08-0-tong-quan-man-hinh-thong-ke-dat-hang-ncc-chi-tiet/) – Tổng quan màn hình Đặt hàng ncc chi tiết
