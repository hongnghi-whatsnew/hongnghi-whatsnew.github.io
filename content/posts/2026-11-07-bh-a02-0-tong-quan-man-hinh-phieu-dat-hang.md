---
title: "TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG"
date: "2026-11-07"
summary: "Màn hình Phiếu đặt hàng (tiêu đề KHÁCH ĐẶT HÀNG - DANH SÁCH) ghi nhận đơn đặt hàng sản xuất của khách: khách cần loại hàng trơn nào, gia công theo yêu cầu nào (định mức), số mặt, số lượng, và thành phẩm được chuyển về kho nào."
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

Màn hình **Phiếu đặt hàng** (tiêu đề **KHÁCH ĐẶT HÀNG - DANH SÁCH**) ghi nhận **đơn đặt hàng sản xuất** của khách: khách cần loại hàng trơn nào, gia công theo yêu cầu nào (định mức), số mặt, số lượng, và thành phẩm được chuyển về kho nào.

Mỗi dòng yêu cầu sinh ra một **thành phẩm** (hệ thống tự tạo mã / tên thành phẩm). Phiếu đặt hàng là bước **trước sản xuất và trước bán hàng**:

- Lưu phiếu đặt hàng: phiếu ở trạng thái **Chờ**. Tồn kho và công nợ **không** thay đổi.
- **Kích hoạt** phiếu: bộ phận sản xuất mới thấy để lên kế hoạch / yêu cầu gia công (sổ tay Sản xuất).
- Khi sản xuất nhập kho thành phẩm, tab **THÀNH PHẨM** của phiếu có dữ liệu; nhân viên kinh doanh lập **phiếu bán hàng → TỪ PHIẾU ĐẶT HÀNG** ([HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a03-2-huong-dan-lap-phieu-ban-hang-tu-phieu-dat-hang/)).

Bạn dùng màn hình này khi:

- Khách đặt hàng cần gia công / sản xuất theo yêu cầu.
- Theo dõi đơn đã lên kế hoạch sản xuất chưa, thành phẩm đã nhập chưa, đã bán chưa.
- Đóng (tất toán) phần không sản xuất / không bán nữa; in đơn đặt hàng sản xuất.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Phiếu đặt hàng**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Danh mục **Khách hàng**, **Hàng hoá** (hàng trơn / thành phẩm), **Định mức gia công**, **Số mặt**, **Kho hàng** đã có dữ liệu.

## 2. Mở chức năng

**Bán hàng → Phiếu đặt hàng**

## 3. Nhận biết màn hình

![Hình 1: Màn hình KHÁCH ĐẶT HÀNG - DANH SÁCH](/posts/2026-11-07-bh-a02-0-tong-quan-man-hinh-phieu-dat-hang/hinh-01-man-hinh-phieu-dat-hang.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày đặt hàng**. Mặc định **Hôm nay** (nhãn *today*); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Lập phiếu đặt hàng; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG SẢN XUẤT](/bai-viet/2026-11-07-bh-a02-1-huong-dan-lap-phieu-dat-hang-san-xuat/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thao tác: Tất toán / Sửa / Xóa**: Chức năng: Tất toán / cập nhật / xoá phiếu; Hướng dẫn: [HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-3-huong-dan-tat-toan-phieu-dat-hang/) / [HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG SẢN XUẤT](/bai-viet/2026-11-07-bh-a02-1-huong-dan-lap-phieu-dat-hang-san-xuat/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày đặt hàng**: Ý nghĩa: Ngày lập phiếu đặt hàng
- **Mã phiếu**: Ý nghĩa: Mã phiếu đặt hàng dạng **KD…**, hệ thống tự tạo
- **Tên khách hàng, Tên rút gọn, Mã khách hàng**: Ý nghĩa: Khách đặt hàng
- **Trạng thái SX**: Ý nghĩa: **Chưa lên kế hoạch** / **Đang lên kế hoạch** / **Đã lên kế hoạch** – theo số lượng đã lên yêu cầu sản xuất
- **Trạng thái TP**: Ý nghĩa: **Chưa nhập** / **Đang nhập** / **Đã nhập** – thành phẩm đã nhập kho chưa
- **Trạng thái bán**: Ý nghĩa: **Chưa bán** / **Đang bán** / **Đã bán** – thành phẩm đã lên phiếu bán hàng chưa
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Chờ** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n**.

**Menu chuột phải trên một dòng phiếu:**

- **Kích hoạt**: Khi nào hiện: Phiếu đang **Chờ**; Tác dụng: Chuyển sang **Kích hoạt** để sản xuất thấy; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Chờ xác nhận**: Khi nào hiện: Phiếu đã **Kích hoạt** và **Chưa lên kế hoạch**; Tác dụng: Đưa về **Chờ**; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Xem lại**: Khi nào hiện: Luôn; Tác dụng: Mở **THÔNG TIN - PHIẾU ĐẶT HÀNG** (chỉ xem); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **In phiếu đặt hàng**: Khi nào hiện: Luôn; Tác dụng: In **ĐƠN ĐẶT HÀNG SẢN XUẤT**; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-4-huong-dan-in-phieu-dat-hang/)

Nhấp đúp vào dòng cũng mở **THÔNG TIN - PHIẾU ĐẶT HÀNG**. Chuột phải vào **tiêu đề cột** để mở menu sắp xếp, nhóm, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

**Vị trí của phiếu đặt hàng trong quy trình:**

```text
Phiếu đặt hàng (BH-A02.1 / Excel BH-A02.2) → Trạng thái: Chờ
      ↓
Kích hoạt (chuột phải)
      ↓
(Sản xuất) lên kế hoạch / yêu cầu gia công → Trạng thái SX: Đã lên kế hoạch
      ↓
(Sản xuất) nhập kho thành phẩm → tab THÀNH PHẨM có dòng, Trạng thái TP
      ↓
Phiếu bán hàng → TỪ PHIẾU ĐẶT HÀNG (BH-A03.2) → Trạng thái bán
      ↓
Không làm tiếp phần còn lại? ──► Tất toán (BH-A02.3)
```

**Các chức năng trên màn hình:**

```text
Phiếu đặt hàng
   ├── Thêm mới ──► nhập tay · Tải lên từ Excel
   ├── Kích hoạt / Chờ xác nhận (chuột phải)
   ├── Tất toán ──► đóng phần không sản xuất / không bán
   ├── Sửa ──► khi chưa lên yêu cầu sản xuất
   ├── Xóa ──► chỉ người tạo, khi chưa dùng ở bước sau
   ├── Xem lại · In phiếu đặt hàng (chuột phải)
   └── Xuất Excel ──► danh sách phiếu
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm phiếu**: Cách làm: Gõ mã phiếu hoặc tên khách vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập phiếu đặt hàng**: Cách làm: **Thêm mới**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG SẢN XUẤT](/bai-viet/2026-11-07-bh-a02-1-huong-dan-lap-phieu-dat-hang-san-xuat/)
- **Nhập chi tiết từ file Excel**: Cách làm: Trong cửa sổ → **Tải lên từ Excel**; Bài hướng dẫn: [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU ĐẶT HÀNG TỪ EXCEL](/bai-viet/2026-11-07-bh-a02-2-huong-dan-nhap-chi-tiet-phieu-dat-hang-tu-excel/)
- **Chuyển phiếu cho sản xuất**: Cách làm: Chuột phải → **Kích hoạt**; Bài hướng dẫn: Mục này
- **Tạm dừng phiếu chưa lên kế hoạch**: Cách làm: Chuột phải → **Chờ xác nhận**; Bài hướng dẫn: Mục này
- **Xem chi tiết phiếu**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa phiếu**: Cách làm: **Sửa** → **CẬP NHẬT - PHIẾU ĐẶT HÀNG**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG SẢN XUẤT](/bai-viet/2026-11-07-bh-a02-1-huong-dan-lap-phieu-dat-hang-san-xuat/)
- **Tất toán phần không làm tiếp**: Cách làm: **Tất toán** → **TẤT TOÁN - PHIẾU ĐẶT HÀNG**; Bài hướng dẫn: [HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-3-huong-dan-tat-toan-phieu-dat-hang/)
- **In đơn đặt hàng sản xuất**: Cách làm: Chuột phải → **In phiếu đặt hàng**; Bài hướng dẫn: [HƯỚNG DẪN IN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-4-huong-dan-in-phieu-dat-hang/)
- **Bán thành phẩm đã nhập kho**: Cách làm: Phiếu bán hàng → **TỪ PHIẾU ĐẶT HÀNG**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a03-2-huong-dan-lap-phieu-ban-hang-tu-phieu-dat-hang/)
- **Xoá phiếu**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Kích hoạt / chờ xác nhận

**Bước 1 –** Chuột phải vào dòng phiếu đang **Chờ** → **Kích hoạt**. Hệ thống báo **Lưu thành công**, cột **Trạng thái** đổi thành **Kích hoạt**.

**Bước 2 –** Muốn đưa phiếu về **Chờ**: chuột phải → **Chờ xác nhận**. Chỉ làm được khi phiếu **chưa lên kế hoạch** sản xuất.

### Xem lại một phiếu

**Bước 1 –** Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**).

**Bước 2 –** Cửa sổ **THÔNG TIN - PHIẾU ĐẶT HÀNG** mở ra, các ô bị khoá. Bảng **YÊU CẦU SẢN XUẤT** có các cột **SL đã lên y/c**, **SL tất toán**, **SL đã nhập** để đối chiếu tiến độ; các cột này cũng có khi thêm mới ([HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG SẢN XUẤT](/bai-viet/2026-11-07-bh-a02-1-huong-dan-lap-phieu-dat-hang-san-xuat/)). Nếu đã có thành phẩm nhập kho, góc dưới trái có 2 nút chuyển bảng **YÊU CẦU SẢN XUẤT** / **THÀNH PHẨM**.

**Bước 3 –** Bấm **Đóng**.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ phiếu đặt hàng: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG SẢN XUẤT](/bai-viet/2026-11-07-bh-a02-1-huong-dan-lap-phieu-dat-hang-san-xuat/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Phiếu đặt hàng có những chức năng gì, phiếu đặt hàng liên quan thế nào tới sản xuất và phiếu bán hàng, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Phiếu mới lưu ở trạng thái Chờ.** Phải **Kích hoạt** thì sản xuất mới thấy phiếu để lên kế hoạch.

⚠️ **Phiếu đặt hàng không giữ tồn kho và không ghi công nợ.**

⚠️ Khi phiếu đã có dòng được lên yêu cầu sản xuất hoặc thành phẩm đã bán, **Sửa / Xóa sẽ bị từ chối** (hệ thống báo dữ liệu đã liên kết). Phần không làm tiếp dùng **Tất toán**.

⚠️ **Chỉ người tạo phiếu mới xoá được phiếu.**

⚠️ Nút **Tất toán**, **Sửa**, **Xóa** hiện theo quyền, không theo trạng thái phiếu; hệ thống kiểm tra khi lưu.

### "CẢNH BÁO – Lỗi xóa: Bạn chỉ được xóa phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### "CẢNH BÁO – Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: phiếu đã được lên yêu cầu sản xuất hoặc thành phẩm đã lên phiếu bán hàng.
Cách xử lý: không xoá; dùng **Tất toán** cho phần còn lại.

### "CẢNH BÁO – Lỗi cập nhật trạng thái: Phiếu đã lên kế hoạch, vui lòng kiểm tra lại." 

Nguyên nhân: bấm **Chờ xác nhận** cho phiếu đã / đang lên kế hoạch sản xuất (câu báo ghi đúng trạng thái hiện tại của phiếu).
Cách xử lý: liên hệ bộ phận kế hoạch sản xuất.

### Không thấy phiếu vừa lập 

Kiểm tra: khoảng ngày lọc có chứa **Ngày đặt hàng**; chi nhánh đang làm việc.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 10. Câu hỏi thường gặp

**Phiếu đặt hàng này có phải phiếu đặt hàng với nhà cung cấp không?**
Không. Đây là **khách đặt hàng** công ty sản xuất. Đặt hàng với NCC ở sổ tay Mua hàng (MH-A01).

**Sản xuất không thấy phiếu của tôi?**
Kiểm tra cột **Trạng thái** đã là **Kích hoạt** chưa.

**Làm sao bán thành phẩm của đơn này?**
Đợi thành phẩm nhập kho (cột **Trạng thái TP**), rồi lập phiếu bán hàng → **TỪ PHIẾU ĐẶT HÀNG** ([HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a03-2-huong-dan-lap-phieu-ban-hang-tu-phieu-dat-hang/)).

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG SẢN XUẤT](/bai-viet/2026-11-07-bh-a02-1-huong-dan-lap-phieu-dat-hang-san-xuat/) – Hướng dẫn lập phiếu đặt hàng sản xuất.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG SẢN XUẤT](/bai-viet/2026-11-07-bh-a02-1-huong-dan-lap-phieu-dat-hang-san-xuat/) – Hướng dẫn lập phiếu đặt hàng sản xuất
- [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU ĐẶT HÀNG TỪ EXCEL](/bai-viet/2026-11-07-bh-a02-2-huong-dan-nhap-chi-tiet-phieu-dat-hang-tu-excel/) – Hướng dẫn nhập chi tiết phiếu đặt hàng từ Excel
- [HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-3-huong-dan-tat-toan-phieu-dat-hang/) – Hướng dẫn tất toán phiếu đặt hàng
- [HƯỚNG DẪN IN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-4-huong-dan-in-phieu-dat-hang/) – Hướng dẫn in phiếu đặt hàng
- [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a03-2-huong-dan-lap-phieu-ban-hang-tu-phieu-dat-hang/) – Hướng dẫn lập phiếu bán hàng từ phiếu đặt hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ ĐẶT HÀNG CHI TIẾT](/bai-viet/2026-11-07-bh-b02-0-tong-quan-man-hinh-thong-ke-dat-hang-chi-tiet/) – Tổng quan màn hình Đặt hàng chi tiết
- Sổ tay Sản xuất – Lên kế hoạch / yêu cầu gia công
