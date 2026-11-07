---
title: "TỔNG QUAN MÀN HÌNH PHIẾU NHẬP MƯỢN"
date: "2026-11-07"
summary: "Màn hình Phiếu nhập mượn ghi nhận lần công ty mượn hàng của đối tác và nhập về kho – bước đầu của chiều công ty đi mượn."
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

Màn hình **Phiếu nhập mượn** ghi nhận lần **công ty mượn hàng của đối tác** và nhập về kho – bước đầu của chiều **công ty đi mượn**. Bước sau là **Phiếu xuất trả** (KHO-B04) khi công ty trả lại. Hai chiều mượn hàng xem [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-0-tong-quan-man-hinh-phieu-xuat-cho-muon/), phần “Chức năng này dùng để làm gì?”.

- **Công ty cho đối tác mượn**: Phiếu đi: Phiếu xuất cho mượn (KHO-B01); Phiếu về: Phiếu nhập trả (KHO-B02)
- **Công ty mượn của đối tác**: Phiếu đi: **Phiếu nhập mượn** (bài này); Phiếu về: **Phiếu xuất trả** (KHO-B04)

Đối tác được đại diện bằng một **kho** trong danh mục (ô **MƯỢN TỪ KHO**, ví dụ *KHO MƯỢN SONG HUỲNH*).

- Lưu phiếu: **tồn KHO NHẬP tăng ngay** theo số lượng mượn. Tồn của kho đối tác **không** giảm.
- Phiếu **không** ghi công nợ. **Đơn giá** / **Thành tiền** để tham khảo và làm giá mặc định nếu sau này công ty **trả bằng tiền** (mua luôn hàng mượn).
- Mỗi lần trả, lập **Phiếu xuất trả** từ phiếu này; **Trạng thái trả** chuyển **Chưa trả → Đang trả → Đã trả**.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Danh mục kho có **kho đại diện cho đối tác** cho mượn.

## 2. Mở chức năng

**Mượn hàng → Phiếu nhập mượn**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU NHẬP MƯỢN - DANH SÁCH](/posts/2026-11-07-kho-b03-0-tong-quan-man-hinh-phieu-nhap-muon/hinh-01-man-hinh-phieu-nhap-muon.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày nhập**. Lần đầu là **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM MỚI - PHIẾU NHẬP MƯỢN**; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU NHẬP MƯỢN](/bai-viet/2026-11-07-kho-b03-1-huong-dan-lap-phieu-nhap-muon/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá phiếu; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU NHẬP MƯỢN](/bai-viet/2026-11-07-kho-b03-1-huong-dan-lap-phieu-nhap-muon/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **–**: Thành phần: Cột **Trạng thái trả** (không thấy trong Hình 1 – kéo thanh cuộn ngang sang phải); Chức năng: Tiến độ công ty trả hàng mượn; Hướng dẫn: Bảng dưới

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày nhập**: Ý nghĩa: Ngày nhận hàng mượn
- **Mã phiếu**: Ý nghĩa: Mã phiếu nhập mượn (**NM…**), hệ thống tự tạo
- **Mã phiếu gốc**: Ý nghĩa: Số chứng từ giấy của đối tác
- **Mượn từ kho**: Ý nghĩa: Kho đại diện cho đối tác cho mượn
- **Kho nhập**: Ý nghĩa: Kho công ty nhận hàng
- **File đính kèm**: Ý nghĩa: **Số lượng file: n** hoặc **Không có file đính kèm**
- **Trạng thái trả**: Ý nghĩa: **Chưa trả** / **Đang trả** / **Đã trả**
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối lưới: **TỔNG CỘNG: <số phiếu>**.

**Ý nghĩa Trạng thái trả:**

- **Chưa trả**: Khi nào: Chưa có phiếu xuất trả nào
- **Đang trả**: Khi nào: Đã trả một phần (một số dòng hoặc một phần số lượng)
- **Đã trả**: Khi nào: Mọi dòng đã trả đủ (bằng hàng hoặc bằng tiền)

**Menu chuột phải trên một dòng phiếu:**

- **Xem lại**: Mở cửa sổ: **XEM LẠI - PHIẾU NHẬP MƯỢN** (có thêm cột **SL đã trả**, **SL còn lại**); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **File đính kèm**: Mở cửa sổ: **FILE ĐÍNH KÈM - PHIẾU NHẬP MƯỢN HÀNG**; Hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **In phiếu**: Mở cửa sổ: **XEM IN PHIẾU NHẬP MƯỢN HÀNG**; Hướng dẫn: phần “Thực hiện trên phần mềm”, [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Khôi phục bố cục**: Mở cửa sổ: Đưa lưới về bố cục mặc định; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)

Nhấp đúp vào dòng cũng mở cửa sổ **XEM LẠI**.

## 4. Trình tự công việc

```text
Phiếu nhập mượn (KHO-B03.1)
      ↓  tồn KHO NHẬP tăng · Trạng thái trả "Chưa trả"
Công ty trả lại đối tác
      ├── Trả bằng hàng ──► Phiếu xuất trả (KHO-B04.1) → tồn kho xuất giảm
      └── Trả bằng tiền ──► Phiếu xuất trả, tick "Trả bằng tiền"
                             → giữ hàng (coi như mua) · công nợ NCC tăng
                             → (Kế toán) Phiếu chi → Mua hàng mượn
      ↓
Trạng thái trả: Chưa trả → Đang trả → Đã trả
```

**Các chức năng trên màn hình:**

```text
Phiếu nhập mượn
   ├── Thêm mới ──► cửa sổ THÊM MỚI - PHIẾU NHẬP MƯỢN
   ├── Sửa ──► khi phiếu còn "Chưa trả"
   ├── Xóa ──► chỉ người tạo, khi phiếu còn "Chưa trả"
   ├── Xem lại / File đính kèm / In phiếu (chuột phải)
   └── Xuất Excel ──► danh sách phiếu
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Ghi nhận hàng mượn về kho**: Cách làm: **Thêm mới**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU NHẬP MƯỢN](/bai-viet/2026-11-07-kho-b03-1-huong-dan-lap-phieu-nhap-muon/)
- **Xem số đã trả / còn phải trả**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa phiếu**: Cách làm: **Sửa** → **CẬP NHẬT - PHIẾU NHẬP MƯỢN**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU NHẬP MƯỢN](/bai-viet/2026-11-07-kho-b03-1-huong-dan-lap-phieu-nhap-muon/)
- **Xoá phiếu**: Cách làm: **Xóa** → hộp **Xác nhận xóa**: *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Trả hàng cho đối tác**: Cách làm: **Mượn hàng → Phiếu xuất trả → Thêm mới**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT TRẢ HÀNG MƯỢN](/bai-viet/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/)
- **In phiếu**: Cách làm: Chuột phải → **In phiếu**; Bài hướng dẫn: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Theo dõi hàng còn nợ đối tác**: Cách làm: **Thống kê mượn hàng → Chi tiết nhập mượn**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH CHI TIẾT NHẬP MƯỢN](/bai-viet/2026-11-07-kho-d03-0-tong-quan-man-hinh-chi-tiet-nhap-muon/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một phiếu

**Bước 1 –** Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**).

**Bước 2 –** Cửa sổ **XEM LẠI - PHIẾU NHẬP MƯỢN** hiện các dòng hàng với **SL đã trả** và **SL còn lại** (= Số lượng − SL đã trả): đây là **số hàng công ty còn phải trả đối tác**.

**Bước 3 –** Bấm **Đóng**.

### In phiếu nhập mượn

Chuột phải vào dòng → **In phiếu** → cửa sổ **XEM IN PHIẾU NHẬP MƯỢN HÀNG** hiện bản xem trước theo mẫu phiếu nhập mượn. In / tải file theo [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/); bấm **Đóng** trên thanh công cụ để thoát.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU NHẬP MƯỢN](/bai-viet/2026-11-07-kho-b03-1-huong-dan-lap-phieu-nhap-muon/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Phiếu nhập mượn dùng để làm gì, tồn kho thay đổi lúc nào, cách theo dõi số còn phải trả đối tác, và bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Hàng mượn được cộng vào tồn kho công ty** ngay khi lưu phiếu, nên có thể bị chọn khi bán / xuất. Phải theo dõi để còn đủ hàng trả đối tác (hoặc thoả thuận trả bằng tiền).

⚠️ Phiếu nhập mượn **không ghi công nợ**. Công nợ NCC chỉ phát sinh khi **xuất trả bằng tiền** có chọn **NHÀ CUNG CẤP**.

⚠️ Phiếu đã có phiếu xuất trả (**Đang trả** / **Đã trả**) **không sửa / xoá được**.

⚠️ Sửa / xoá phiếu sẽ **trừ lại tồn** KHO NHẬP. Nếu hàng mượn đã được xuất / bán, hệ thống báo **không đủ tồn** và không cho sửa / xoá.

⚠️ **Chỉ người tạo phiếu mới xoá được phiếu.** Không lưu / sửa / xoá được phiếu trong kỳ **đã khoá sổ**.

### "Lỗi sửa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." hoặc "Lỗi xóa: …" cùng câu 

Nguyên nhân: phiếu đã có phiếu xuất trả.
Cách xử lý: xem **SL đã trả**; nếu thật sự cần sửa, đối chiếu với người lập phiếu xuất trả và kế toán theo [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT TRẢ](/bai-viet/2026-11-07-kho-b04-0-tong-quan-man-hinh-phieu-xuat-tra/) trước khi chốt trình tự sửa/đảo.

### "Lỗi sửa: "<tên kho>", "<tên hàng>" không đủ tồn (<số>)." 

Nguyên nhân: hàng mượn đã được xuất / bán, kho nhập không còn đủ tồn để trừ lại.
Cách xử lý: kiểm tra tồn kho; xử lý các phiếu xuất liên quan trước.

### "Lỗi xóa: Chỉ được xoá phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### "… Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **Ngày nhập** thuộc kỳ đã khoá sổ.
Cách xử lý: liên hệ kế toán trưởng.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Hàng mượn có tính vào tồn kho không?**
Có. Tồn KHO NHẬP tăng khi lưu phiếu nhập mượn và giảm khi xuất trả bằng hàng.

**Mua luôn hàng đã mượn thì làm thế nào?**
Lập **Phiếu xuất trả**, tick **Trả bằng tiền**, chọn **NHÀ CUNG CẤP** để ghi công nợ phải trả ([HƯỚNG DẪN LẬP PHIẾU XUẤT TRẢ HÀNG MƯỢN](/bai-viet/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/)).

**Xem tổng hàng công ty đang mượn ở đâu?**
**Tổng hợp mượn hàng** ([TỔNG QUAN MÀN HÌNH TỔNG HỢP MƯỢN HÀNG](/bai-viet/2026-11-07-kho-d01-0-tong-quan-man-hinh-tong-hop-muon-hang/)), nghiệp vụ **Đi mượn**.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU NHẬP MƯỢN](/bai-viet/2026-11-07-kho-b03-1-huong-dan-lap-phieu-nhap-muon/) – Hướng dẫn lập phiếu nhập mượn.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU NHẬP MƯỢN](/bai-viet/2026-11-07-kho-b03-1-huong-dan-lap-phieu-nhap-muon/) – Hướng dẫn lập phiếu nhập mượn
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT TRẢ](/bai-viet/2026-11-07-kho-b04-0-tong-quan-man-hinh-phieu-xuat-tra/) – Tổng quan màn hình Phiếu xuất trả
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-0-tong-quan-man-hinh-phieu-xuat-cho-muon/) – Tổng quan màn hình Phiếu xuất cho mượn (hai chiều mượn hàng)
- [TỔNG QUAN MÀN HÌNH TỔNG HỢP MƯỢN HÀNG](/bai-viet/2026-11-07-kho-d01-0-tong-quan-man-hinh-tong-hop-muon-hang/) – Tổng quan màn hình Tổng hợp mượn hàng
- [TỔNG QUAN MÀN HÌNH CHI TIẾT NHẬP MƯỢN](/bai-viet/2026-11-07-kho-d03-0-tong-quan-man-hinh-chi-tiet-nhap-muon/) – Tổng quan màn hình Chi tiết nhập mượn
