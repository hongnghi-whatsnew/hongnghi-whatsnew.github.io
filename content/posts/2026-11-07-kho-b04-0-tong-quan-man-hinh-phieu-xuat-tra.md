---
title: "TỔNG QUAN MÀN HÌNH PHIẾU XUẤT TRẢ"
date: "2026-11-07"
summary: "Màn hình Phiếu xuất trả ghi nhận công ty trả lại hàng đã mượn của đối tác – bước thứ hai của chiều công ty đi mượn (bước đầu là Phiếu nhập mượn, KHO-B03)."
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

Màn hình **Phiếu xuất trả** ghi nhận **công ty trả lại hàng đã mượn của đối tác** – bước thứ hai của chiều **công ty đi mượn** (bước đầu là **Phiếu nhập mượn**, KHO-B03). Hai chiều mượn hàng xem [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-0-tong-quan-man-hinh-phieu-xuat-cho-muon/), phần “Chức năng này dùng để làm gì?”.

Mỗi phiếu xuất trả lập **từ một phiếu nhập mượn**. Với từng dòng hàng, công ty có thể:

- **Trả bằng hàng** (mặc định): lưu phiếu thì **tồn KHO XUẤT giảm** theo số lượng trả (phải đủ tồn được xuất).
- **Trả bằng tiền** (tick cột **Trả bằng tiền**): công ty **giữ luôn hàng**, coi như **mua** của đối tác. Tồn kho **không** giảm, giá vốn bình quân được tính lại theo **Đơn giá**; nếu chọn **NHÀ CUNG CẤP**, **công nợ phải trả nhà cung cấp tăng** bằng **Tổng tiền mua**. Kế toán trả tiền bằng **Phiếu chi → Mua hàng mượn**.

Sau mỗi phiếu xuất trả, **Trạng thái trả** của phiếu nhập mượn được cập nhật (**Đang trả** / **Đã trả**) và **SL còn lại** (số công ty còn phải trả) giảm.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có **phiếu nhập mượn** chưa trả hết ([HƯỚNG DẪN LẬP PHIẾU NHẬP MƯỢN](/bai-viet/2026-11-07-kho-b03-1-huong-dan-lap-phieu-nhap-muon/)).

## 2. Mở chức năng

**Mượn hàng → Phiếu xuất trả**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU XUẤT TRẢ, ĐI MƯỢN - DANH SÁCH](/posts/2026-11-07-kho-b04-0-tong-quan-man-hinh-phieu-xuat-tra/hinh-01-man-hinh-phieu-xuat-tra.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày xuất**. Lần đầu là **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở ngay cửa sổ chọn phiếu **DANH SÁCH - PHIẾU MƯỢN HÀNG** (chưa mở cửa sổ); Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT TRẢ HÀNG MƯỢN](/bai-viet/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá phiếu; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT TRẢ HÀNG MƯỢN](/bai-viet/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày xuất**: Ý nghĩa: Ngày trả hàng / thoả thuận mua
- **Mã phiếu**: Ý nghĩa: Mã phiếu xuất trả (**XT…**), hệ thống tự tạo
- **Từ phiếu**: Ý nghĩa: Mã **phiếu nhập mượn** gốc (**NM…**)
- **Kho xuất**: Ý nghĩa: Kho công ty xuất hàng trả
- **Trả kho**: Ý nghĩa: Kho đại diện cho đối tác (= Mượn từ kho của phiếu nhập mượn)
- **Mã phiếu gốc**: Ý nghĩa: Số chứng từ giấy (mặc định chép từ phiếu nhập mượn)
- **File đính kèm**: Ý nghĩa: **Số lượng file: n** hoặc **Không có file đính kèm**
- **Tổng tiền mua**: Ý nghĩa: Tổng **Thành tiền** của các dòng **Trả bằng tiền**
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu
- **Số tiền đã chi**: Ý nghĩa: Tổng các phiếu chi **Mua hàng mượn** gắn với phiếu này
- **Trạng thái chi**: Ý nghĩa: Ẩn sẵn: **Chưa chi** / **Đang chi** / **Đã chi**
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối lưới: **TỔNG CỘNG: <số phiếu>** và tổng **Tổng tiền mua**.

**Menu chuột phải trên một dòng phiếu:**

- **Xem lại**: Mở cửa sổ: **XEM LẠI - PHIẾU XUẤT TRẢ, ĐI MƯỢN** (chỉ xem); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **File đính kèm**: Mở cửa sổ: **FILE ĐÍNH KÈM - PHIẾU XUẤT TRẢ MƯỢN HÀNG**; Hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **In phiếu**: Mở cửa sổ: **XEM IN - PHIẾU XUẤT TRẢ, ĐI MƯỢN**; Hướng dẫn: phần “Thực hiện trên phần mềm”, [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Khôi phục bố cục**: Mở cửa sổ: Đưa lưới về bố cục mặc định; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)

Nhấp đúp vào dòng cũng mở cửa sổ **XEM LẠI**.

## 4. Trình tự công việc

```text
Phiếu nhập mượn NM… (Chưa trả / Đang trả, Chưa chi)
      ↓
Phiếu xuất trả → Thêm mới → chọn phiếu mượn (KHO-B04.1)
      ├── Dòng trả bằng hàng ──► kiểm đủ tồn → tồn KHO XUẤT giảm
      └── Dòng trả bằng tiền ──► giữ hàng, tồn không đổi, tính lại giá vốn
                                 → có NHÀ CUNG CẤP: công nợ NCC tăng
                                 → (Kế toán) Phiếu chi → Mua hàng mượn
      ↓
Phiếu nhập mượn: SL đã trả tăng · Trạng thái trả Đang trả / Đã trả
```

**Các chức năng trên màn hình:**

```text
Phiếu xuất trả
   ├── Thêm mới ──► chọn phiếu mượn hàng → cửa sổ THÊM MỚI
   ├── Sửa ──► khi chưa có phiếu chi
   ├── Xóa ──► chỉ người tạo
   ├── Xem lại / File đính kèm / In phiếu (chuột phải)
   └── Xuất Excel ──► danh sách phiếu
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Trả hàng / mua luôn hàng mượn**: Cách làm: **Thêm mới** → nhấp đúp phiếu mượn; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT TRẢ HÀNG MƯỢN](/bai-viet/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/)
- **Xem chi tiết phiếu**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa phiếu**: Cách làm: **Sửa** → **CẬP NHẬT - PHIẾU XUẤT TRẢ, ĐI MƯỢN**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT TRẢ HÀNG MƯỢN](/bai-viet/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/)
- **Xoá phiếu**: Cách làm: **Xóa** → hộp **Xác nhận xóa**: *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Trả tiền hàng mua luôn**: Cách làm: **Kế toán → Phiếu chi → Thêm mới → Mua hàng mượn**; Bài hướng dẫn: KT-A04
- **In phiếu**: Cách làm: Chuột phải → **In phiếu**; Bài hướng dẫn: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một phiếu

**Bước 1 –** Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**).

**Bước 2 –** Cửa sổ **XEM LẠI - PHIẾU XUẤT TRẢ, ĐI MƯỢN** hiện thông tin phiếu và các dòng hàng; dòng tick **Trả bằng tiền** là phần công ty mua luôn.

**Bước 3 –** Bấm **Đóng**.

### In phiếu xuất trả

Chuột phải vào dòng → **In phiếu** → cửa sổ **XEM IN - PHIẾU XUẤT TRẢ, ĐI MƯỢN** hiện bản xem trước theo mẫu phiếu xuất trả. In / tải file theo [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/); bấm **Đóng** trên thanh công cụ để thoát.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU XUẤT TRẢ HÀNG MƯỢN](/bai-viet/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Phiếu xuất trả dùng để làm gì, khác nhau giữa trả bằng hàng và trả bằng tiền, tồn kho / công nợ NCC thay đổi thế nào, và bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Trả bằng hàng: tồn KHO XUẤT giảm ngay khi lưu** và phải đủ tồn được xuất. **Trả bằng tiền: tồn không đổi**, hàng thành của công ty.

⚠️ **Công nợ NCC chỉ ghi khi chọn NHÀ CUNG CẤP** trên phiếu. Trả bằng tiền mà bỏ trống thì công nợ không tăng.

⚠️ Phiếu đã có phiếu chi (**Đang chi** / **Đã chi**) **không sửa được**; xoá cũng bị chặn vì đã có phiếu chi liên kết.

⚠️ **Chỉ người tạo phiếu mới xoá được phiếu.** Không lưu / sửa / xoá được phiếu có **Ngày xuất** trong kỳ **đã khoá sổ**.

### "Lỗi sửa: Phiếu đang chi" / "Lỗi sửa: Phiếu đã chi" 

Nguyên nhân: kế toán đã lập phiếu chi **Mua hàng mượn** cho phiếu này.
Cách xử lý: không sửa; nếu có sai lệch, báo kế toán đối chiếu khoản chi thực tế và chốt phương án điều chỉnh chứng từ liên kết.

### "Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: phiếu đã có phiếu chi liên kết.
Cách xử lý: như trên.

### "Lỗi xóa: Chỉ được xoá phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### "… Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **Ngày xuất** thuộc kỳ đã khoá sổ.
Cách xử lý: liên hệ kế toán trưởng.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Không còn đủ hàng để trả (đã bán bớt) thì làm sao?**
Trả bằng hàng phần còn tồn; phần đã bán thoả thuận mua lại – tick **Trả bằng tiền** cho phần đó.

**Vì sao cột Tổng tiền mua bằng 0?**
Phiếu chỉ có dòng trả bằng hàng. **Tổng tiền mua** chỉ cộng các dòng **Trả bằng tiền**.

**Xem số công ty còn phải trả đối tác ở đâu?**
**Xem lại** phiếu nhập mượn (cột **SL còn lại**) hoặc **Chi tiết nhập mượn** ([TỔNG QUAN MÀN HÌNH CHI TIẾT NHẬP MƯỢN](/bai-viet/2026-11-07-kho-d03-0-tong-quan-man-hinh-chi-tiet-nhap-muon/)).

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU XUẤT TRẢ HÀNG MƯỢN](/bai-viet/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/) – Hướng dẫn lập phiếu xuất trả hàng mượn.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU XUẤT TRẢ HÀNG MƯỢN](/bai-viet/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/) – Hướng dẫn lập phiếu xuất trả hàng mượn
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP MƯỢN](/bai-viet/2026-11-07-kho-b03-0-tong-quan-man-hinh-phieu-nhap-muon/) – Tổng quan màn hình Phiếu nhập mượn
- [TỔNG QUAN MÀN HÌNH TỔNG HỢP MƯỢN HÀNG](/bai-viet/2026-11-07-kho-d01-0-tong-quan-man-hinh-tong-hop-muon-hang/) – Tổng quan màn hình Tổng hợp mượn hàng
- [TỔNG QUAN MÀN HÌNH CHI TIẾT NHẬP MƯỢN](/bai-viet/2026-11-07-kho-d03-0-tong-quan-man-hinh-chi-tiet-nhap-muon/) – Tổng quan màn hình Chi tiết nhập mượn
- KT-A04 – Phiếu chi (Mua hàng mượn)
