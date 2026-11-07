---
title: "TỔNG QUAN MÀN HÌNH PHIẾU GIẢM GIÁ"
date: "2026-11-07"
summary: "Màn hình Phiếu giảm giá (tiêu đề PHIẾU GIẢM GIÁ - DANH SÁCH) ghi nhận khoản giảm giá cho khách sau khi đã xuất kho – ví dụ hàng lỗi nhẹ khách vẫn giữ, giao trễ, sai quy cách."
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

Màn hình **Phiếu giảm giá** (tiêu đề **PHIẾU GIẢM GIÁ - DANH SÁCH**) ghi nhận khoản **giảm giá cho khách sau khi đã xuất kho** – ví dụ hàng lỗi nhẹ khách vẫn giữ, giao trễ, sai quy cách. Mỗi phiếu lập **từ một phiếu xuất kho**, giảm theo từng dòng hàng (số lượng × số tiền giảm), ghi rõ **bộ phận chịu trách nhiệm**.

Phiếu đi qua 3 bước: **Lập phiếu** (kinh doanh) → **Duyệt phiếu** (quản lý) → **Xác nhận** (kế toán). Tuỳ **Hình thức giảm**:

- **Trừ công nợ**: khi kế toán bấm **Xác nhận**, công nợ khách **giảm** đúng tổng tiền giảm.
- **Chi tiền**: sau khi xác nhận, kế toán bấm **Chi tiền** để lập phiếu chi trả tiền cho khách.

Phiếu giảm giá **không** làm thay đổi tồn kho.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Phiếu giảm giá**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)). Danh sách chỉ hiện phiếu của chi nhánh đang làm việc.
- Hàng cần giảm giá đã được **xuất kho** cho khách (phiếu xuất kho bán hàng – [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/)).

## 2. Mở chức năng

**Bán hàng → Phiếu giảm giá**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU GIẢM GIÁ - DANH SÁCH](/posts/2026-11-07-bh-a05-0-tong-quan-man-hinh-phieu-giam-gia/hinh-01-man-hinh-phieu-giam-gia.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày giảm giá**. Mặc định **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Chọn phiếu xuất kho rồi lập phiếu giảm giá; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-1-huong-dan-lap-phieu-giam-gia/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thao tác: Sửa / Xóa**: Chức năng: Liên kết hiện theo quyền; chỉ lưu cập nhật / xoá được khi chưa duyệt; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-1-huong-dan-lap-phieu-giam-gia/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày giảm giá**: Ý nghĩa: Ngày trên phiếu
- **Mã giảm giá**: Ý nghĩa: Mã phiếu, hệ thống tự tạo (bắt đầu bằng **GG**)
- **Từ phiếu**: Ý nghĩa: Mã **phiếu xuất kho** gốc
- **Hình thức giảm**: Ý nghĩa: **Trừ công nợ** / **Chi tiền**
- **Khách hàng, Tên rút gọn**: Ý nghĩa: Khách được giảm giá
- **Thời điểm giảm**: Ý nghĩa: **Trong ngày** (lập phiếu cùng ngày xuất kho) hoặc **Sau xuất n ngày**
- **Tổng tiền giảm**: Ý nghĩa: Tổng thành tiền các dòng
- **N/v bán hàng**: Ý nghĩa: Nhân viên kinh doanh của phiếu xuất
- **Người duyệt**: Ý nghĩa: Người đã bấm **Duyệt phiếu** (trống = chưa duyệt)
- **Xác nhận**: Ý nghĩa: Kế toán đã bấm **Xác nhận** (trống = chưa xác nhận)
- **Tiền đã chi**: Ý nghĩa: Tổng số tiền các phiếu chi lập từ phiếu này
- **Trạng thái**: Ý nghĩa: **Chưa chi** / **Đang chi** / **Đã chi** (xem bên dưới)
- **Ghi chú**: Ý nghĩa: Lý do giảm giá
- **File đính kèm**: Ý nghĩa: **Số lượng file: n** hoặc **Không có file đính kèm**
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Thứ tự cột trên màn hình: **STT**, **Thao tác**, **Ngày giảm giá**, **Mã giảm giá**, **Từ phiếu**, **Hình thức giảm**, **Khách hàng**, **Tên rút gọn**, **Thời điểm giảm**…; các cột sau nằm bên phải, kéo thanh cuộn ngang để xem.

Dòng tổng cuối bảng **không** hiện chữ **TỔNG CỘNG: n** (khác các màn khác); tổng **Tổng tiền giảm** nằm ở cột tương ứng bên phải.

**Ý nghĩa cột Trạng thái (trạng thái chi):**

- **(trống)**: Khi nào: Chưa từng có phiếu chi nào lập từ phiếu này
- **Chưa chi**: Khi nào: Đã có phiếu chi nhưng đã bị xoá hết
- **Đang chi**: Khi nào: Tổng tiền đã chi > 0 nhưng nhỏ hơn tổng tiền giảm
- **Đã chi**: Khi nào: Tổng tiền đã chi ≥ tổng tiền giảm

**Trạng thái duyệt của phiếu** đọc từ 2 cột **Người duyệt** và **Xác nhận**:

- **trống**: Xác nhận: trống; Phiếu đang ở bước: Mới lập – sửa / xoá được
- **có tên**: Xác nhận: trống; Phiếu đang ở bước: Đã duyệt, chờ kế toán xác nhận
- **có tên**: Xác nhận: có tên; Phiếu đang ở bước: Đã xác nhận – (Trừ công nợ) đã trừ công nợ; (Chi tiền) chờ chi

**Menu chuột phải trên một dòng phiếu:**

- **Xem lại**: Mở cửa sổ: **THÔNG TIN - PHIẾU GIẢM GIÁ** (chỉ xem; nơi có nút duyệt, xác nhận, chi tiền); Hướng dẫn: [HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-2-huong-dan-duyet-xac-nhan-va-chi-tien-phieu-giam-gia/)
- **File đính kèm**: Mở cửa sổ: **FILE ĐÍNH KÈM - PHIẾU GIẢM GIÁ**; Hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **In phiếu**: Mở cửa sổ: Xem trước **PHIẾU ĐỀ XUẤT GIẢM GIÁ**; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-3-huong-dan-in-phieu-giam-gia/)

Nhấp đúp vào dòng cũng mở **THÔNG TIN - PHIẾU GIẢM GIÁ**. Chuột phải vào **tiêu đề cột** để mở menu sắp xếp, nhóm, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

```text
(Kho) Phiếu xuất kho bán hàng đã giao khách
      ↓
Phiếu giảm giá → Thêm mới → chọn phiếu xuất → nhập số tiền giảm (BH-A05.1)
      ↓
In phiếu đề xuất giảm giá (BH-A05.3) → trình ký
      ↓
Xem lại → Duyệt phiếu (quản lý) (BH-A05.2)
      ↓
Xem lại → Xác nhận (kế toán)
   ├── Trừ công nợ ──► công nợ khách giảm ngay khi xác nhận
   └── Chi tiền ─────► Chi tiền → lập phiếu chi → Trạng thái: Đang chi / Đã chi
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm phiếu**: Cách làm: Gõ mã phiếu, mã phiếu xuất hoặc tên khách vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập phiếu giảm giá**: Cách làm: **Thêm mới** → chọn phiếu xuất kho; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-1-huong-dan-lap-phieu-giam-gia/)
- **Sửa phiếu (chưa duyệt)**: Cách làm: **Sửa** → **CẬP NHẬT - PHIẾU GIẢM GIÁ**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-1-huong-dan-lap-phieu-giam-gia/)
- **Duyệt / huỷ duyệt**: Cách làm: Nhấp đúp → **Duyệt phiếu** / **Hủy duyệt**; Bài hướng dẫn: [HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-2-huong-dan-duyet-xac-nhan-va-chi-tien-phieu-giam-gia/)
- **Xác nhận / huỷ xác nhận**: Cách làm: Nhấp đúp → **Xác nhận** / **Hủy xác nhận**; Bài hướng dẫn: [HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-2-huong-dan-duyet-xac-nhan-va-chi-tien-phieu-giam-gia/)
- **Chi tiền cho khách**: Cách làm: Nhấp đúp → **Chi tiền** → lập phiếu chi; Bài hướng dẫn: [HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-2-huong-dan-duyet-xac-nhan-va-chi-tien-phieu-giam-gia/)
- **In phiếu đề xuất**: Cách làm: Chuột phải → **In phiếu**; Bài hướng dẫn: [HƯỚNG DẪN IN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-3-huong-dan-in-phieu-giam-gia/)
- **Đính kèm biên bản, hình ảnh**: Cách làm: Chuột phải → **File đính kèm**; Bài hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **Xoá phiếu (chưa duyệt)**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ phiếu giảm giá: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-1-huong-dan-lap-phieu-giam-gia/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Phiếu giảm giá có những chức năng gì, phiếu đi qua các bước nào, và ở bước nào công nợ khách thay đổi.

## 8. Những điều cần lưu ý

⚠️ **Lập phiếu chưa làm thay đổi công nợ.** Với hình thức **Trừ công nợ**, công nợ khách chỉ giảm khi kế toán bấm **Xác nhận**; bấm **Hủy xác nhận** thì công nợ được cộng lại.

⚠️ Phiếu **đã duyệt** không sửa / xoá được. Muốn sửa phải **Hủy duyệt** trước (khi kế toán chưa xác nhận).

⚠️ Phiếu đã có phiếu chi (**Tiền đã chi** > 0) không huỷ xác nhận, không sửa, không xoá được.

⚠️ Khách **trả lại hàng** thì dùng **Khách trả hàng** (BH-A04), không dùng phiếu giảm giá.

⚠️ Tổng số lượng giảm giá của một dòng phiếu xuất (cộng tất cả phiếu giảm giá) không được vượt số lượng đã xuất của dòng đó.

### "CẢNH BÁO – Lỗi xóa: Phiếu đã duyệt. Vui lòng kiểm tra lại." 

Nguyên nhân: phiếu đã được duyệt (tương tự: **Phiếu đã xác nhận…**, **Phiếu đã chi tiền…**).
Cách xử lý: nhờ người duyệt **Hủy duyệt** ([HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-2-huong-dan-duyet-xac-nhan-va-chi-tien-phieu-giam-gia/)) nếu phiếu chưa được kế toán xác nhận, rồi xoá.

### Không thấy liên kết Sửa / Xóa 

Kiểm tra: tài khoản có quyền **Cập nhật** / **Xoá** chưa.
Cách xử lý: liên hệ quản trị hệ thống. Nếu bấm **Sửa** mà cửa sổ không có nút **Lưu lại**: phiếu đã duyệt / xác nhận / chi tiền.

### Không thấy phiếu vừa lập 

Kiểm tra: khoảng ngày lọc có chứa **Ngày giảm giá**; chi nhánh đang làm việc.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 10. Câu hỏi thường gặp

**Giảm giá có làm thay đổi giá vốn hay tồn kho không?**
Không. Phiếu giảm giá chỉ liên quan tới tiền với khách (công nợ hoặc chi tiền).

**Một phiếu xuất có lập được nhiều phiếu giảm giá không?**
Được, miễn tổng số lượng giảm của mỗi dòng không vượt số lượng đã xuất.

**Thời điểm giảm "Sau xuất 3 ngày" tính thế nào?**
Bằng ngày **tạo** phiếu giảm giá trừ ngày xuất kho của phiếu xuất gốc.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-1-huong-dan-lap-phieu-giam-gia/) – Hướng dẫn lập phiếu giảm giá.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-1-huong-dan-lap-phieu-giam-gia/) – Hướng dẫn lập phiếu giảm giá
- [HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-2-huong-dan-duyet-xac-nhan-va-chi-tien-phieu-giam-gia/) – Hướng dẫn duyệt, xác nhận và chi tiền phiếu giảm giá
- [HƯỚNG DẪN IN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-3-huong-dan-in-phieu-giam-gia/) – Hướng dẫn in phiếu giảm giá
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ GIẢM GIÁ CHI TIẾT](/bai-viet/2026-11-07-bh-b07-0-tong-quan-man-hinh-thong-ke-giam-gia-chi-tiet/) – Tổng quan màn hình Giảm giá chi tiết (thống kê)
- [TỔNG QUAN MÀN HÌNH KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-0-tong-quan-man-hinh-khach-tra-hang/) – Tổng quan màn hình Khách trả hàng
- [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/) – Lập phiếu xuất kho bán hàng
- Sổ tay Kế toán – Phiếu chi, Thống kê công nợ khách hàng
