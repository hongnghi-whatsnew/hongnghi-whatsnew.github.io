---
title: "TỔNG QUAN MÀN HÌNH PHIẾU NHẬP TRẢ"
date: "2026-11-07"
summary: "Màn hình Phiếu nhập trả ghi nhận đối tác trả lại hàng đã mượn của công ty – bước thứ hai của chiều công ty cho đối tác mượn (bước đầu là Phiếu xuất cho mượn, KHO-B01)."
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

Màn hình **Phiếu nhập trả** ghi nhận **đối tác trả lại hàng đã mượn của công ty** – bước thứ hai của chiều **công ty cho đối tác mượn** (bước đầu là **Phiếu xuất cho mượn**, KHO-B01). Hai chiều mượn hàng xem [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-0-tong-quan-man-hinh-phieu-xuat-cho-muon/), phần “Chức năng này dùng để làm gì?”.

Mỗi phiếu nhập trả lập **từ một phiếu xuất cho mượn**. Với từng dòng hàng, đối tác có thể:

- **Trả bằng hàng** (mặc định): lưu phiếu thì **tồn KHO NHẬP tăng** theo số lượng trả.
- **Trả bằng tiền** (tick cột **Trả bằng tiền**): đối tác giữ luôn hàng, coi như **mua** của công ty. Tồn kho **không** tăng; nếu chọn **KHÁCH HÀNG**, **công nợ phải thu khách hàng tăng** bằng **Tổng tiền bán**. Kế toán thu tiền bằng **Phiếu thu → Hàng cho mượn**.

Sau mỗi phiếu nhập trả, **Trạng thái trả** của phiếu xuất cho mượn được cập nhật (**Đang trả** / **Đã trả**) và **SL còn lại** (số đối tác còn phải trả) giảm.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có **phiếu xuất cho mượn** chưa trả hết ([HƯỚNG DẪN LẬP PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-1-huong-dan-lap-phieu-xuat-cho-muon/)).

## 2. Mở chức năng

**Mượn hàng → Phiếu nhập trả**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU NHẬP TRẢ, CHO MƯỢN - DANH SÁCH](/posts/2026-11-07-kho-b02-0-tong-quan-man-hinh-phieu-nhap-tra/hinh-01-man-hinh-phieu-nhap-tra.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày nhập**. Lần đầu là **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở ngay cửa sổ chọn phiếu **DANH SÁCH - PHIẾU CHO MƯỢN** (chưa mở cửa sổ); Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU NHẬP TRẢ HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kho-b02-1-huong-dan-lap-phieu-nhap-tra-hang-cho-muon/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá phiếu; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU NHẬP TRẢ HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kho-b02-1-huong-dan-lap-phieu-nhap-tra-hang-cho-muon/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày nhập**: Ý nghĩa: Ngày nhận hàng / tiền trả
- **Mã phiếu**: Ý nghĩa: Mã phiếu nhập trả (**NT…**), hệ thống tự tạo
- **Từ phiếu**: Ý nghĩa: Mã **phiếu xuất cho mượn** gốc (**XM…**)
- **Kho trả hàng**: Ý nghĩa: Kho đại diện cho đối tác (= Kho mượn của phiếu xuất)
- **Kho nhập**: Ý nghĩa: Kho công ty nhận lại hàng
- **Mã phiếu gốc**: Ý nghĩa: Số chứng từ giấy (mặc định chép từ phiếu xuất)
- **File đính kèm**: Ý nghĩa: **Số lượng file: n** hoặc **Không có file đính kèm**
- **Tổng tiền bán**: Ý nghĩa: Tổng **Thành tiền** của các dòng **Trả bằng tiền**
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu
- **Số tiền đã thu**: Ý nghĩa: Tổng các phiếu thu **Hàng cho mượn** gắn với phiếu này
- **Trạng thái thu**: Ý nghĩa: Ẩn sẵn: **Chưa thu** / **Đang thu** / **Đã thu** (bật bằng Trình chọn cột)
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối lưới: **TỔNG CỘNG: <số phiếu>** và tổng **Tổng tiền bán**.

**Menu chuột phải trên một dòng phiếu:**

- **Xem lại**: Mở cửa sổ: **XEM LẠI - PHIẾU NHẬP TRẢ, CHO MƯỢN** (chỉ xem); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **File đính kèm**: Mở cửa sổ: **FILE ĐÍNH KÈM - PHIẾU NHẬP TRẢ MƯỢN HÀNG**; Hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **In phiếu**: Mở cửa sổ: **XEM IN - PHIẾU NHẬP TRẢ, CHO MƯỢN**; Hướng dẫn: phần “Thực hiện trên phần mềm”, [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Khôi phục bố cục**: Mở cửa sổ: Đưa lưới về bố cục mặc định; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)

Nhấp đúp vào dòng cũng mở cửa sổ **XEM LẠI**.

## 4. Trình tự công việc

```text
Phiếu xuất cho mượn XM… (Chưa trả / Đang trả)
      ↓
Phiếu nhập trả → Thêm mới → chọn phiếu cho mượn (KHO-B02.1)
      ├── Dòng trả bằng hàng ──► tồn KHO NHẬP tăng
      └── Dòng trả bằng tiền ──► tồn không đổi
                                 → có KHÁCH HÀNG: công nợ khách hàng tăng
                                 → (Kế toán) Phiếu thu → Hàng cho mượn
      ↓
Phiếu xuất cho mượn: SL đã trả tăng · Trạng thái trả Đang trả / Đã trả
```

**Các chức năng trên màn hình:**

```text
Phiếu nhập trả
   ├── Thêm mới ──► chọn phiếu cho mượn → cửa sổ THÊM MỚI
   ├── Sửa ──► khi chưa có phiếu thu
   ├── Xóa ──► chỉ người tạo
   ├── Xem lại / File đính kèm / In phiếu (chuột phải)
   └── Xuất Excel ──► danh sách phiếu
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Ghi nhận đối tác trả hàng / trả tiền**: Cách làm: **Thêm mới** → nhấp đúp phiếu cho mượn; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU NHẬP TRẢ HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kho-b02-1-huong-dan-lap-phieu-nhap-tra-hang-cho-muon/)
- **Xem chi tiết phiếu**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa phiếu**: Cách làm: **Sửa** → **CẬP NHẬT - PHIẾU NHẬP TRẢ, CHO MƯỢN**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU NHẬP TRẢ HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kho-b02-1-huong-dan-lap-phieu-nhap-tra-hang-cho-muon/)
- **Xoá phiếu**: Cách làm: **Xóa** → hộp **Xác nhận xóa**: *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Thu tiền hàng trả bằng tiền**: Cách làm: **Kế toán → Phiếu thu → Thêm mới → Hàng cho mượn**; Bài hướng dẫn: KT-A03
- **In phiếu**: Cách làm: Chuột phải → **In phiếu**; Bài hướng dẫn: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một phiếu

**Bước 1 –** Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**).

**Bước 2 –** Cửa sổ **XEM LẠI - PHIẾU NHẬP TRẢ, CHO MƯỢN** hiện thông tin phiếu và các dòng hàng; dòng có ô **Trả bằng tiền** được tick là phần đối tác trả bằng tiền.

**Bước 3 –** Bấm **Đóng**.

### In phiếu nhập trả

Chuột phải vào dòng → **In phiếu** → cửa sổ **XEM IN - PHIẾU NHẬP TRẢ, CHO MƯỢN** hiện bản xem trước theo mẫu phiếu nhập trả của chi nhánh. In / tải file theo [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/); bấm **Đóng** trên thanh công cụ để thoát.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU NHẬP TRẢ HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kho-b02-1-huong-dan-lap-phieu-nhap-tra-hang-cho-muon/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Phiếu nhập trả dùng để làm gì, khác nhau giữa trả bằng hàng và trả bằng tiền, tồn kho và công nợ thay đổi thế nào, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Trả bằng hàng: tồn KHO NHẬP tăng ngay khi lưu.** **Trả bằng tiền: tồn không đổi** – hàng coi như đã bán cho đối tác.

⚠️ **Công nợ khách hàng chỉ ghi khi chọn KHÁCH HÀNG** trên phiếu. Trả bằng tiền mà bỏ trống KHÁCH HÀNG thì công nợ không tăng.

⚠️ Phiếu đã có phiếu thu (**Đang thu** / **Đã thu**) **không sửa được**; xoá cũng bị chặn vì đã có phiếu thu liên kết. Cần đối chiếu khoản thu thực tế với kế toán, chốt trình tự xử lý liên kết; không xóa khoản thu đúng chỉ để mở khóa.

⚠️ **Chỉ người tạo phiếu mới xoá được phiếu.**

⚠️ Xoá / sửa phiếu đã trả bằng hàng sẽ **trừ lại tồn** KHO NHẬP. Nếu hàng trả về đã bán / xuất đi, hệ thống báo **không đủ tồn** và không cho xoá.

⚠️ Không lưu / sửa / xoá được phiếu có **Ngày nhập** trong kỳ **đã khoá sổ**.

### "Lỗi sửa: Phiếu đang thu" / "Lỗi sửa: Phiếu đã thu" 

Nguyên nhân: kế toán đã lập phiếu thu **Hàng cho mượn** cho phiếu này.
Cách xử lý: không sửa; nếu có sai lệch, báo kế toán đối chiếu khoản thu và chốt phương án điều chỉnh chứng từ liên kết.

### "Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: phiếu đã có phiếu thu liên kết.
Cách xử lý: như trên.

### "Lỗi xóa: Chỉ được xoá phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### "Lỗi xóa: "<tên kho>", "<tên hàng>" không đủ tồn (<số>)." 

Nguyên nhân: hàng trả về đã được xuất / bán, kho nhập không còn đủ tồn để hoàn lại.
Cách xử lý: kiểm tra tồn kho; xử lý các phiếu xuất sau trước khi xoá.

### "… Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **Ngày nhập** thuộc kỳ đã khoá sổ.
Cách xử lý: liên hệ kế toán trưởng.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Đối tác trả một phần bằng hàng, một phần bằng tiền được không?**
Được. Trên cùng phiếu, tick **Trả bằng tiền** cho dòng trả tiền; hoặc lập hai phiếu nhập trả riêng.

**Vì sao cột Tổng tiền bán bằng 0?**
Phiếu chỉ có dòng trả bằng hàng. **Tổng tiền bán** chỉ cộng các dòng **Trả bằng tiền**.

**Số đối tác còn phải trả xem ở đâu?**
**Xem lại** phiếu xuất cho mượn (cột **SL còn lại**) hoặc **Chi tiết xuất mượn** ([TỔNG QUAN MÀN HÌNH CHI TIẾT XUẤT MƯỢN](/bai-viet/2026-11-07-kho-d02-0-tong-quan-man-hinh-chi-tiet-xuat-muon/), cột **Số lượng chưa trả**).

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU NHẬP TRẢ HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kho-b02-1-huong-dan-lap-phieu-nhap-tra-hang-cho-muon/) – Hướng dẫn lập phiếu nhập trả hàng cho mượn.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU NHẬP TRẢ HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kho-b02-1-huong-dan-lap-phieu-nhap-tra-hang-cho-muon/) – Hướng dẫn lập phiếu nhập trả hàng cho mượn
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-0-tong-quan-man-hinh-phieu-xuat-cho-muon/) – Tổng quan màn hình Phiếu xuất cho mượn
- [TỔNG QUAN MÀN HÌNH TỔNG HỢP MƯỢN HÀNG](/bai-viet/2026-11-07-kho-d01-0-tong-quan-man-hinh-tong-hop-muon-hang/) – Tổng quan màn hình Tổng hợp mượn hàng
- [TỔNG QUAN MÀN HÌNH CHI TIẾT XUẤT MƯỢN](/bai-viet/2026-11-07-kho-d02-0-tong-quan-man-hinh-chi-tiet-xuat-muon/) – Tổng quan màn hình Chi tiết xuất mượn
- KT-A03 – Phiếu thu (Hàng cho mượn)
