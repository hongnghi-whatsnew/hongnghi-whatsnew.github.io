---
title: "TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHO MƯỢN"
date: "2026-11-07"
summary: "Nhóm menu Mượn hàng theo dõi hàng mượn qua lại giữa công ty và đối tác (công ty bạn, nhà cung cấp, đơn vị gia công…)."
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

Nhóm menu **Mượn hàng** theo dõi hàng **mượn qua lại giữa công ty và đối tác** (công ty bạn, nhà cung cấp, đơn vị gia công…). Hàng mượn không phải mua bán: bên mượn phải **trả lại đúng hàng**, hoặc thoả thuận **trả bằng tiền** (coi như mua / bán).

Có hai chiều nghiệp vụ, mỗi chiều có một cặp phiếu:

- **Công ty cho đối tác mượn**: Phiếu đi: **Phiếu xuất cho mượn** (bài này); Phiếu về: **Phiếu nhập trả** (KHO-B02); Tồn kho công ty: Giảm khi xuất cho mượn, tăng lại khi nhập trả
- **Công ty mượn của đối tác**: Phiếu đi: **Phiếu nhập mượn** (KHO-B03); Phiếu về: **Phiếu xuất trả** (KHO-B04); Tồn kho công ty: Tăng khi nhập mượn, giảm lại khi xuất trả

Trên ERP, **đối tác được đại diện bằng một kho hàng** trong danh mục kho (ví dụ *KHO MƯỢN SONG HUỲNH*). Trên phiếu xuất cho mượn, kho này nằm ở ô **KHO MƯỢN**.

Màn hình **Phiếu xuất cho mượn** ghi nhận lần **công ty giao hàng cho đối tác mượn**:

- Lưu phiếu: **tồn kho của KHO XUẤT giảm ngay** theo số lượng cho mượn. Tồn của **KHO MƯỢN** (kho đối tác) **không** tăng.
- Phiếu **không** tạo công nợ. Cột **Đơn giá**, **Thành tiền** chỉ để tham khảo và làm giá mặc định khi đối tác **trả bằng tiền** ở phiếu nhập trả.
- Mỗi lần đối tác trả hàng, thủ kho lập **Phiếu nhập trả** từ phiếu này; cột **Trạng thái trả** chuyển **Chưa trả → Đang trả → Đã trả**.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Danh mục kho hàng đã có **kho đại diện cho đối tác** (ví dụ *KHO MƯỢN <tên đối tác>*) – do quản trị / kế toán tạo ở sổ tay Thiết lập danh mục.
- Tài khoản được phân **kho xuất** hoặc **kho mượn** của phiếu; nếu không, phiếu không hiện trên danh sách.

## 2. Mở chức năng

**Mượn hàng → Phiếu xuất cho mượn**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU XUẤT CHO MƯỢN - DANH SÁCH](/posts/2026-11-07-kho-b01-0-tong-quan-man-hinh-phieu-xuat-cho-muon/hinh-01-man-hinh-phieu-xuat-cho-muon.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày xuất**. Lần đầu là **Hôm nay**, lần sau nhớ lựa chọn gần nhất; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM MỚI - PHIẾU XUẤT CHO MƯỢN**; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-1-huong-dan-lap-phieu-xuat-cho-muon/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (cần quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá phiếu; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-1-huong-dan-lap-phieu-xuat-cho-muon/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **–**: Thành phần: Cột **Trạng thái trả** (không thấy trong Hình 1 – kéo thanh cuộn ngang sang phải); Chức năng: Tiến độ đối tác trả hàng; Hướng dẫn: Bảng dưới

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày xuất**: Ý nghĩa: Ngày giao hàng cho mượn
- **Mã phiếu**: Ý nghĩa: Mã phiếu xuất cho mượn (**XM…**), hệ thống tự tạo
- **Mã phiếu gốc**: Ý nghĩa: Số chứng từ giấy / biên bản giao hàng
- **File đính kèm**: Ý nghĩa: **Số lượng file: n** hoặc **Không có file đính kèm**
- **Kho xuất**: Ý nghĩa: Kho của công ty xuất hàng đi
- **Kho mượn**: Ý nghĩa: Kho đại diện cho đối tác mượn hàng
- **Trạng thái trả**: Ý nghĩa: **Chưa trả** / **Đang trả** / **Đã trả**
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối lưới: **TỔNG CỘNG: <số phiếu>**.

**Ý nghĩa Trạng thái trả:**

- **Chưa trả**: Khi nào: Chưa có phiếu nhập trả nào cho phiếu này
- **Đang trả**: Khi nào: Có ít nhất một dòng đã trả một phần hoặc trả đủ, nhưng chưa phải mọi dòng
- **Đã trả**: Khi nào: Mọi dòng hàng đã trả đủ (bằng hàng hoặc bằng tiền)

**Menu chuột phải trên một dòng phiếu:**

- **Xem lại**: Mở cửa sổ: **XEM LẠI - PHIẾU XUẤT CHO MƯỢN** (chỉ xem; có thêm cột **SL đã trả**, **SL còn lại**); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **File đính kèm**: Mở cửa sổ: **FILE ĐÍNH KÈM - PHIẾU XUẤT MƯỢN HÀNG**; Hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **In phiếu**: Mở cửa sổ: **XEM IN - PHIẾU XUẤT CHO MƯỢN**; Hướng dẫn: phần “Thực hiện trên phần mềm”, [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Khôi phục bố cục**: Mở cửa sổ: Đưa lưới về bố cục mặc định; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)

Nhấp đúp vào dòng cũng mở cửa sổ **XEM LẠI**.

## 4. Trình tự công việc

**Chiều 1 – Công ty cho đối tác mượn:**

```text
Phiếu xuất cho mượn (KHO-B01.1)
      ↓  tồn KHO XUẤT giảm · Trạng thái trả "Chưa trả"
Đối tác trả lại
      ├── Trả bằng hàng ──► Phiếu nhập trả (KHO-B02.1) → tồn kho nhập tăng lại
      └── Trả bằng tiền ──► Phiếu nhập trả, tick "Trả bằng tiền"
                             → không nhập kho · công nợ khách hàng tăng
                             → (Kế toán) Phiếu thu → Hàng cho mượn
      ↓
Trạng thái trả: Chưa trả → Đang trả → Đã trả
```

**Chiều 2 – Công ty mượn của đối tác** (xem KHO-B03.0):

```text
Phiếu nhập mượn (KHO-B03.1) → tồn KHO NHẬP tăng
      ↓
Phiếu xuất trả (KHO-B04.1) → trả bằng hàng: tồn giảm
                            → trả bằng tiền: giữ hàng, công nợ NCC tăng
```

**Các chức năng trên màn hình:**

```text
Phiếu xuất cho mượn
   ├── Thêm mới ──► cửa sổ THÊM MỚI - PHIẾU XUẤT CHO MƯỢN
   ├── Sửa ──► khi phiếu còn "Chưa trả"
   ├── Xóa ──► chỉ người tạo, khi phiếu còn "Chưa trả"
   ├── Xem lại / File đính kèm / In phiếu (chuột phải)
   └── Xuất Excel ──► danh sách phiếu
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập phiếu cho đối tác mượn**: Cách làm: **Thêm mới**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-1-huong-dan-lap-phieu-xuat-cho-muon/)
- **Xem chi tiết, số đã trả / còn lại**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa phiếu**: Cách làm: **Sửa** → **CẬP NHẬT - PHIẾU XUẤT CHO MƯỢN**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-1-huong-dan-lap-phieu-xuat-cho-muon/)
- **Xoá phiếu**: Cách làm: **Xóa** → hộp **Xác nhận xóa**: *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Ghi nhận đối tác trả hàng**: Cách làm: **Mượn hàng → Phiếu nhập trả → Thêm mới**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU NHẬP TRẢ HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kho-b02-1-huong-dan-lap-phieu-nhap-tra-hang-cho-muon/)
- **In phiếu giao cho đối tác**: Cách làm: Chuột phải → **In phiếu**; Bài hướng dẫn: Mục này, [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Đính kèm biên bản**: Cách làm: Chuột phải → **File đính kèm**; Bài hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **Theo dõi số còn ở đối tác**: Cách làm: **Thống kê mượn hàng → Chi tiết xuất mượn**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH CHI TIẾT XUẤT MƯỢN](/bai-viet/2026-11-07-kho-d02-0-tong-quan-man-hinh-chi-tiet-xuat-muon/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một phiếu

**Bước 1 –** Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**).

**Bước 2 –** Cửa sổ **XEM LẠI - PHIẾU XUẤT CHO MƯỢN** mở ra. Bảng chi tiết có thêm **SL đã trả** (tổng đã nhập trả, kể cả trả bằng tiền) và **SL còn lại** (= Số lượng − SL đã trả): đây là **số hàng đối tác còn phải trả**.

**Bước 3 –** Bấm **Đóng**.

### In phiếu xuất cho mượn

**Bước 1 –** Chuột phải vào dòng phiếu → **In phiếu**.

**Bước 2 –** Cửa sổ **XEM IN - PHIẾU XUẤT CHO MƯỢN** hiện bản xem trước theo mẫu phiếu xuất mượn của chi nhánh (logo, thông tin chi nhánh, danh sách hàng, tổng tiền bằng chữ, người in và giờ in).

**Bước 3 –** In hoặc tải file theo [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/); bấm **Đóng** trên thanh công cụ để thoát.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-1-huong-dan-lap-phieu-xuat-cho-muon/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết hai chiều nghiệp vụ mượn hàng, màn hình Phiếu xuất cho mượn có những chức năng gì, tồn kho thay đổi lúc nào, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Tồn kho giảm ngay khi lưu phiếu xuất cho mượn.** Hàng đang ở đối tác **không** nằm trong tồn kho công ty; muốn biết số hàng còn ở đối tác xem **Tổng hợp mượn hàng** ([TỔNG QUAN MÀN HÌNH TỔNG HỢP MƯỢN HÀNG](/bai-viet/2026-11-07-kho-d01-0-tong-quan-man-hinh-tong-hop-muon-hang/)) hoặc **Chi tiết xuất mượn** ([TỔNG QUAN MÀN HÌNH CHI TIẾT XUẤT MƯỢN](/bai-viet/2026-11-07-kho-d02-0-tong-quan-man-hinh-chi-tiet-xuat-muon/)).

⚠️ Phiếu xuất cho mượn **không ghi công nợ**. Công nợ chỉ phát sinh khi đối tác **trả bằng tiền** ở phiếu nhập trả có chọn **KHÁCH HÀNG**.

⚠️ Phiếu đã có phiếu nhập trả (**Đang trả** / **Đã trả**) **không sửa / xoá được**. Cần đối chiếu phiếu nhập trả, hàng/tiền thực tế với kế toán để chốt trình tự; không tự xóa chứng từ trả đúng chỉ để mở khóa.

⚠️ **Chỉ người tạo phiếu mới xoá được phiếu.**

⚠️ Không lưu / sửa / xoá được phiếu có **Ngày xuất** nằm trong kỳ kế toán **đã khoá sổ**.

⚠️ Danh sách chỉ hiện phiếu có **kho xuất** hoặc **kho mượn** thuộc kho bạn được phân.

### "Lỗi sửa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." hoặc "Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: phiếu đã có phiếu nhập trả.
Cách xử lý: xem **SL đã trả** khi **Xem lại**; nếu thật sự cần sửa, đối chiếu với người lập phiếu nhập trả và kế toán, chốt chứng từ cần điều chỉnh theo [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP TRẢ](/bai-viet/2026-11-07-kho-b02-0-tong-quan-man-hinh-phieu-nhap-tra/).

### "Lỗi xóa: Chỉ được xoá phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### "… Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **Ngày xuất** thuộc kỳ đã khoá sổ.
Cách xử lý: giữ ngày thực tế, liên hệ kế toán trưởng chốt mở kỳ hoặc chứng từ điều chỉnh đúng quy định.

### Không thấy phiếu vừa lập trên danh sách 

Kiểm tra: khoảng ngày (mặc định chỉ hôm nay); chi nhánh đang làm việc; tài khoản có được phân kho xuất / kho mượn của phiếu không.
Cách xử lý: mở rộng khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)), kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)) hoặc nhờ quản trị phân kho.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Hàng cho mượn có còn tính trong tồn kho không?**
Không. Tồn kho xuất giảm ngay khi lưu phiếu, và tăng lại khi nhập trả bằng hàng.

**Đối tác không trả hàng mà trả tiền thì làm thế nào?**
Lập **Phiếu nhập trả**, tick **Trả bằng tiền** ở dòng hàng, chọn **KHÁCH HÀNG** để ghi công nợ, rồi kế toán lập **Phiếu thu → Hàng cho mượn** ([HƯỚNG DẪN LẬP PHIẾU NHẬP TRẢ HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kho-b02-1-huong-dan-lap-phieu-nhap-tra-hang-cho-muon/)).

**Làm sao biết đối tác còn giữ bao nhiêu hàng?**
Xem **SL còn lại** khi **Xem lại** phiếu, hoặc màn **Chi tiết xuất mượn** (cột **Số lượng chưa trả**).

**Vì sao "Kho mượn" lại là một kho?**
ERP theo dõi đối tác mượn bằng một kho đại diện. Tồn của kho này không thay đổi theo phiếu mượn.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-1-huong-dan-lap-phieu-xuat-cho-muon/) – Hướng dẫn lập phiếu xuất cho mượn.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-1-huong-dan-lap-phieu-xuat-cho-muon/) – Hướng dẫn lập phiếu xuất cho mượn
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP TRẢ](/bai-viet/2026-11-07-kho-b02-0-tong-quan-man-hinh-phieu-nhap-tra/) – Tổng quan màn hình Phiếu nhập trả
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP MƯỢN](/bai-viet/2026-11-07-kho-b03-0-tong-quan-man-hinh-phieu-nhap-muon/) – Tổng quan màn hình Phiếu nhập mượn
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT TRẢ](/bai-viet/2026-11-07-kho-b04-0-tong-quan-man-hinh-phieu-xuat-tra/) – Tổng quan màn hình Phiếu xuất trả
- [TỔNG QUAN MÀN HÌNH TỔNG HỢP MƯỢN HÀNG](/bai-viet/2026-11-07-kho-d01-0-tong-quan-man-hinh-tong-hop-muon-hang/) – Tổng quan màn hình Tổng hợp mượn hàng
- [TỔNG QUAN MÀN HÌNH CHI TIẾT XUẤT MƯỢN](/bai-viet/2026-11-07-kho-d02-0-tong-quan-man-hinh-chi-tiet-xuat-muon/) – Tổng quan màn hình Chi tiết xuất mượn
- [TỔNG QUAN MODULE KHO HÀNG VÀ THỨ TỰ SỬ DỤNG](/bai-viet/2026-11-07-kho-00-tong-quan-module-kho-hang-va-thu-tu-su-dung/) – Tổng quan sổ tay Kho hàng
