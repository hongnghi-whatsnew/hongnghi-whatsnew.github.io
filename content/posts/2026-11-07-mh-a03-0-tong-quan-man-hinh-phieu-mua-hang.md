---
title: "TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG"
date: "2026-11-07"
summary: "Màn hình Phiếu mua hàng ghi nhận hàng hoá mua của nhà cung cấp (NCC) theo hoá đơn / chứng từ: mua mặt hàng nào, số lượng, đơn giá, chiết khấu, VAT."
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

Màn hình **Phiếu mua hàng** ghi nhận **hàng hoá** mua của nhà cung cấp (NCC) theo hoá đơn / chứng từ: mua mặt hàng nào, số lượng, đơn giá, chiết khấu, VAT.

Phiếu mua hàng là bước **trước nhập kho**:

- Lưu phiếu mua hàng: các dòng hàng trở thành **hàng chờ nhập kho**. Tồn kho và công nợ NCC **chưa** thay đổi.
- Thủ kho lập **phiếu nhập kho** từ phiếu mua hàng (sổ tay Kho hàng): lúc đó tồn kho và công nợ NCC mới tăng, **Trạng thái nhập** của phiếu mua hàng được cập nhật.

Bạn dùng màn hình này khi:

- NCC giao hàng kèm hoá đơn, cần ghi nhận để thủ kho nhập kho.
- Lập phiếu mua từ phiếu đặt hàng đã có, hoặc từ bảng giá của NCC.
- Đóng (tất toán) phần hàng đã mua nhưng không nhập kho nữa.

Phiếu **mua dịch vụ** dùng chung giao diện này nhưng ở menu riêng – xem [TỔNG QUAN MÀN HÌNH PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-0-tong-quan-man-hinh-phieu-mua-dich-vu/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Phiếu mua hàng**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Danh mục **Nhà cung cấp**, **Hàng hoá** đã có dữ liệu.

## 2. Mở chức năng

**Mua hàng → Phiếu mua hàng**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU MUA HÀNG - DANH SÁCH](/posts/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/hinh-01-man-hinh-phieu-mua-hang.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày mua hàng**. Mặc định **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Lập phiếu mua hàng; Hướng dẫn: **[HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/)**, [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thao tác: Tất toán / Sửa / Xóa**: Chức năng: Tất toán / cập nhật / xoá phiếu; Hướng dẫn: [HƯỚNG DẪN TẤT TOÁN PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-3-huong-dan-tat-toan-phieu-mua-hang/) / [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày mua hàng**: Ý nghĩa: Ngày trên phiếu mua
- **Ngày hạch toán**: Ý nghĩa: Ngày ghi nhận vào sổ kế toán / kỳ giá thành
- **Loại phiếu**: Ý nghĩa: Loại phiếu (mua hàng)
- **Mã phiếu**: Ý nghĩa: Mã phiếu mua hàng, hệ thống tự tạo
- **Chứng từ/HĐ**: Ý nghĩa: Số hoá đơn / chứng từ của NCC
- **Từ phiếu**: Ý nghĩa: Mã phiếu đặt hàng gốc (nếu có)
- **Nhà cung cấp, Mã nhà cung cấp**: Ý nghĩa: NCC
- **Tổng tiền**: Ý nghĩa: Tổng thành tiền (sau chiết khấu, cộng VAT, trừ phần tất toán)
- **Trạng thái nhập**: Ý nghĩa: **Chưa nhập** / **Đang nhập** / **Đã nhập** – theo số lượng đã nhập kho
- **Trạng thái**: Ý nghĩa: **Kích hoạt** / **Ngưng sử dụng**
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu (thường ghi nguồn thanh toán)
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n** và tổng **Tổng tiền**.

**Ý nghĩa Trạng thái nhập:**

- **Chưa nhập**: Khi nào: Chưa dòng nào được nhập kho
- **Đang nhập**: Khi nào: Đã nhập kho một phần
- **Đã nhập**: Khi nào: Mọi dòng đã nhập đủ (số lượng − số lượng tất toán)

**Menu chuột phải trên một dòng phiếu:**

- **Xem lại**: Mở cửa sổ: **XEM LẠI - PHIẾU MUA HÀNG** (chỉ xem); Hướng dẫn: phần “Thực hiện trên phần mềm”

Nhấp đúp vào dòng cũng mở **XEM LẠI - PHIẾU MUA HÀNG**. Chuột phải vào **tiêu đề cột** để mở menu sắp xếp, nhóm, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

**Vị trí của phiếu mua hàng trong quy trình:**

```text
(Tuỳ chọn) Phiếu đặt hàng (MH-A01)
      ↓
Phiếu mua hàng: lập tay / Từ bảng giá (MH-A03.1) · Từ đơn hàng (MH-A03.2)
      ↓
Hàng chờ nhập kho
      ↓
(Kho) Phiếu nhập kho từ phiếu mua hàng → tăng tồn kho, tăng công nợ NCC
      ↓
Trạng thái nhập: Chưa nhập → Đang nhập → Đã nhập
      ↓
Không nhập phần còn lại? ──► Tất toán (MH-A03.3)
```

**Các chức năng trên màn hình:**

```text
Phiếu mua hàng
   ├── Thêm mới ──► lập tay · Từ bảng giá · Từ đơn hàng
   ├── Tất toán ──► đóng phần không nhập kho nữa
   ├── Sửa ──► khi chưa nhập kho dòng nào
   ├── Xóa ──► chỉ người tạo, khi chưa nhập kho / trả hàng
   ├── Xem lại (chuột phải / nhấp đúp)
   └── Xuất Excel ──► danh sách phiếu
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm phiếu**: Cách làm: Gõ mã phiếu, số chứng từ hoặc tên NCC vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập phiếu mua hàng**: Cách làm: **Thêm mới**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/)
- **Lập phiếu từ phiếu đặt hàng**: Cách làm: **Thêm mới** → **Từ đơn hàng**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/)
- **Lấy giá từ bảng giá NCC**: Cách làm: Trong cửa sổ → **Từ bảng giá**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/)
- **Xem chi tiết phiếu**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa phiếu**: Cách làm: **Sửa** → **CẬP NHẬT - PHIẾU MUA HÀNG**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/)
- **Tất toán phần không nhập kho**: Cách làm: **Tất toán** → **TẤT TOÁN - PHIẾU MUA HÀNG**; Bài hướng dẫn: [HƯỚNG DẪN TẤT TOÁN PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-3-huong-dan-tat-toan-phieu-mua-hang/)
- **Xoá phiếu**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Nhập kho hàng đã mua**: Cách làm: Sổ tay Kho hàng – Phiếu nhập kho
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một phiếu

**Bước 1 –** Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**).

**Bước 2 –** cửa sổ **XEM LẠI - PHIẾU MUA HÀNG** mở ra, các ô bị khoá; bảng chi tiết có thêm **SL đã nhập**, **SL tất toán**, **SL còn lại**.

**Bước 3 –** Bấm **Đóng**.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ phiếu mua hàng: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Phiếu mua hàng có những chức năng gì, phiếu mua hàng liên quan thế nào tới nhập kho và công nợ, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Phiếu mua hàng không làm tăng tồn kho và công nợ NCC.** Hai việc này chỉ xảy ra khi lập **phiếu nhập kho** từ phiếu mua hàng.

⚠️ Khi phiếu đã có dòng nhập kho (hoặc trả hàng, dùng trong lệnh vay, phân bổ chi phí), **không sửa / xoá được** phiếu (hệ thống báo dữ liệu đã liên kết). Phần không nhập tiếp dùng **Tất toán**.

⚠️ **Chỉ người tạo phiếu mới xoá được phiếu.**

⚠️ Danh sách chỉ hiện **phiếu mua hàng**; phiếu mua dịch vụ xem ở menu **Phiếu mua dịch vụ** ([TỔNG QUAN MÀN HÌNH PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-0-tong-quan-man-hinh-phieu-mua-dich-vu/)).

### "CẢNH BÁO – Lỗi xóa: Bạn chỉ được xóa phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### "CẢNH BÁO – Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: với thông báo “chỉ được xóa phiếu do mình tạo”, tài khoản đang xử lý không phải người tạo. Nếu thông báo nói dữ liệu liên kết, cần đối chiếu phiếu nhập/trả hàng hoặc chứng từ liên quan.
Cách xử lý: chuyển người lập và kế toán/thủ kho phụ trách duyệt phương án. Không xóa chứng từ phía sau chỉ để bỏ chặn; Tất toán chỉ dùng cho phần chưa nhập và không sửa được giao dịch kho đã ghi.

### Không thấy phiếu vừa lập 

Kiểm tra: khoảng ngày lọc có chứa **Ngày mua hàng**; đang ở đúng menu (Phiếu mua hàng hay Phiếu mua dịch vụ); chi nhánh.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

### Không thấy nút Thêm mới / Tất toán / Sửa / Xóa 

Kiểm tra: quyền tương ứng của màn hình Phiếu mua hàng.
Cách xử lý: liên hệ quản trị hệ thống.

## 10. Câu hỏi thường gặp

**Lập phiếu mua hàng xong, hàng đã vào kho chưa?**
Chưa. Thủ kho phải lập phiếu nhập kho từ phiếu mua hàng.

**Xem hàng đã mua nhưng chưa nhập kho ở đâu?**
Màn **Thống kê mua hàng → Hàng chờ nhập kho** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ HÀNG CHỜ NHẬP KHO](/bai-viet/2026-11-07-mh-b02-0-tong-quan-man-hinh-thong-ke-hang-cho-nhap-kho/)), hoặc cột **Trạng thái nhập** trên danh sách.

**Phiếu mua hàng đã nhập kho, muốn sửa giá thì sao?**
Không sửa được trên phiếu mua hàng sau khi đã nhập kho. Liên hệ kế toán / thủ kho để xử lý trên phiếu nhập kho.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/) – Hướng dẫn lập phiếu mua hàng.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/) – Hướng dẫn lập phiếu mua hàng
- [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/) – Hướng dẫn lập phiếu mua hàng từ phiếu đặt hàng
- [HƯỚNG DẪN TẤT TOÁN PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-3-huong-dan-tat-toan-phieu-mua-hang/) – Hướng dẫn tất toán phiếu mua hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-0-tong-quan-man-hinh-phieu-mua-dich-vu/) – Tổng quan màn hình Phiếu mua dịch vụ
- [TỔNG QUAN MÀN HÌNH PHIẾU TRẢ HÀNG](/bai-viet/2026-11-07-mh-a04-0-tong-quan-man-hinh-phieu-tra-hang/) – Tổng quan màn hình Phiếu trả hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ HÀNG CHỜ NHẬP KHO](/bai-viet/2026-11-07-mh-b02-0-tong-quan-man-hinh-thong-ke-hang-cho-nhap-kho/) – Tổng quan màn hình Hàng chờ nhập kho
- Sổ tay Kho hàng – Phiếu nhập kho
