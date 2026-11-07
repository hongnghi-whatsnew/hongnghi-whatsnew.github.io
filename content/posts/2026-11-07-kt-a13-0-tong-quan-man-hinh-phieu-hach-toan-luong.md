---
title: "TỔNG QUAN MÀN HÌNH PHIẾU HẠCH TOÁN LƯƠNG"
date: "2026-11-07"
summary: "Phiếu hạch toán lương ghi nhận chi phí lương phải trả của một kỳ (thường là một tháng) theo từng cặp TK Nợ / TK Có, ví dụ Nợ 622 (nhân công trực tiếp), Nợ 6411 (bán hàng), Nợ 6421 (quản lý) / Có 334 hoặc 3388."
module: "Kế toán"
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

Phiếu hạch toán lương ghi nhận **chi phí lương phải trả** của một kỳ (thường là một tháng) theo từng cặp **TK Nợ / TK Có**, ví dụ Nợ 622 (nhân công trực tiếp), Nợ 6411 (bán hàng), Nợ 6421 (quản lý) / Có 334 hoặc 3388.

Mục đích chính hiện nay là **đưa chi phí lương vào tính giá thành** (sổ tay Giá thành):

- Dòng có **Đối tượng THCP thuộc kỳ**, **TK Nợ bắt đầu bằng 621/622/627**, số tiền khác 0 → chi phí trực tiếp của đối tượng trong kỳ phủ ngày hạch toán (trống thì dùng ngày chứng từ).
- Dòng **không chọn** Đối tượng THCP → **không được tổng hợp vào giá thành từ phiếu này**, không tự chuyển thành chi phí chung.

Bạn dùng màn hình này khi:

- Hạch toán chi phí lương tháng sau khi đã có bảng lương (sổ tay Nhân sự).
- Sao chép phiếu tháng trước để lập nhanh phiếu tháng này.
- Xem lại, sửa, xoá phiếu hạch toán lương.

⚠️ Phiếu hạch toán lương **chưa sinh bút toán** lên Sổ chi tiết tài khoản / Bảng cân đối phát sinh ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/), [TỔNG QUAN MÀN HÌNH BẢNG CÂN ĐỐI PHÁT SINH](/bai-viet/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Phiếu hạch toán lương**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)). Danh sách chỉ hiện phiếu của chi nhánh đang làm việc.
- (Để lập phiếu) Có số liệu lương của kỳ (bảng lương — sổ tay Nhân sự), hệ thống tài khoản và **Đối tượng tập hợp chi phí** (sổ tay Giá thành) đã khai báo.

## 2. Mở chức năng

**Kế toán → Phiếu hạch toán lương**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU HẠCH TOÁN LƯƠNG - DANH SÁCH (danh sách trống)](/posts/2026-11-07-kt-a13-0-tong-quan-man-hinh-phieu-hach-toan-luong/hinh-01-man-hinh-phieu-hach-toan-luong.png)

Hình 1 chụp khi chưa có phiếu trong ngày (**Không có dữ liệu**, **TỔNG CỘNG: 0**). Khi có phiếu, cột **Thao tác**  hiện **Sửa** / **Sao chép** / **Xóa** trên từng dòng.

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày hạch toán**. Mặc định **Hôm nay**; hệ thống nhớ khoảng ngày chọn lần trước; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Lập phiếu mới; Hướng dẫn: **[HƯỚNG DẪN LẬP PHIẾU HẠCH TOÁN LƯƠNG](/bai-viet/2026-11-07-kt-a13-1-huong-dan-lap-phieu-hach-toan-luong/)**
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Sao chép / Xóa**: Chức năng: Sửa phiếu / lập phiếu mới từ phiếu này / xoá. Cột đầu bảng (trước STT) là ô tick chọn dòng; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU HẠCH TOÁN LƯƠNG](/bai-viet/2026-11-07-kt-a13-1-huong-dan-lap-phieu-hach-toan-luong/), phần “Thực hiện trên phần mềm”
- **Dòng tổng**: Chức năng: **TỔNG CỘNG: n** và tổng **Tổng tiền**

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Sao chép** / **Xóa**
- **Ngày hạch toán**: Ý nghĩa: Ngày ghi nhận chi phí; dùng để lọc và xác định kỳ giá thành
- **Ngày chứng từ**: Ý nghĩa: Ngày của chứng từ gốc
- **Mã phiếu**: Ý nghĩa: Mã hệ thống tự tạo, bắt đầu bằng **HL**
- **Số chứng từ**: Ý nghĩa: Số chứng từ do người lập nhập
- **Diễn giải**: Ý nghĩa: Nội dung phiếu (ví dụ *Lương phải trả Tháng 05/2026*)
- **Tham chiếu**: Ý nghĩa: Ẩn sẵn — bật bằng **Trình chọn cột**
- **Loại tiền**: Ý nghĩa: Mặc định **VND**
- **Tổng tiền**: Ý nghĩa: Tổng **Số tiền** các dòng hạch toán
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu
- **Người tạo, Ngày tạo**: Ý nghĩa: Hệ thống tự ghi
- **Người sửa, Ngày sửa**: Ý nghĩa: Ẩn sẵn — bật bằng **Trình chọn cột**

Nhấp đúp vào dòng: có quyền **Cập nhật** thì mở cửa sổ **CẬP NHẬT - PHIẾU HẠCH TOÁN LƯƠNG**, không có thì mở **XEM LẠI - PHIẾU HẠCH TOÁN LƯƠNG** (chỉ xem). Danh sách có ô tick chọn dòng nhưng hiện không có thao tác hàng loạt. Màn hình không có menu chuột phải, không có file đính kèm, không có in phiếu.

## 4. Trình tự công việc

**Vị trí của phiếu trong quy trình:**

```text
Bảng lương tháng (sổ tay Nhân sự)
      ↓
Phiếu hạch toán lương (KT-A13.1): Nợ 622 / 627 / 641 / 642… — Có 334 / 3388…
   ├── dòng có Đối tượng THCP, TK Nợ 621/622/627 → chi phí trực tiếp
   └── dòng không có Đối tượng THCP → không vào giá thành từ phiếu này
      ↓
Kỳ tính giá thành (sổ tay Giá thành) → kết chuyển
```

Phiếu được tính vào kỳ giá thành theo **Ngày hạch toán** (trống thì theo **Ngày chứng từ**) và theo chi nhánh của phiếu.

**Các chức năng trên màn hình:**

```text
Phiếu hạch toán lương
   ├── Thêm mới ──► THÊM MỚI - PHIẾU HẠCH TOÁN LƯƠNG (KT-A13.1)
   ├── Sửa / nhấp đúp ──► CẬP NHẬT - PHIẾU HẠCH TOÁN LƯƠNG (KT-A13.1)
   ├── Sao chép ──► SAO CHÉP - PHIẾU HẠCH TOÁN LƯƠNG (KT-A13.1)
   ├── Xóa ──► hộp thoại Xác nhận xóa
   └── Xuất Excel ──► danh sách phiếu
```

## 5. Thực hiện trên phần mềm

- **Tìm phiếu**: Cách làm: Chọn khoảng ngày hạch toán, gõ mã phiếu / diễn giải vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập phiếu mới**: Cách làm: **Thêm mới**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU HẠCH TOÁN LƯƠNG](/bai-viet/2026-11-07-kt-a13-1-huong-dan-lap-phieu-hach-toan-luong/)
- **Lập phiếu từ phiếu tháng trước**: Cách làm: **Sao chép**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU HẠCH TOÁN LƯƠNG](/bai-viet/2026-11-07-kt-a13-1-huong-dan-lap-phieu-hach-toan-luong/)
- **Sửa phiếu**: Cách làm: **Sửa** hoặc nhấp đúp; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU HẠCH TOÁN LƯƠNG](/bai-viet/2026-11-07-kt-a13-1-huong-dan-lap-phieu-hach-toan-luong/)
- **Xoá phiếu**: Cách làm: **Xóa**; Bài hướng dẫn: Mục này
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Điều kiện riêng khi xoá phiếu

Phiếu và toàn bộ dòng hạch toán bị xoá cùng luồng. Trước khi xóa phải xác định phiếu chưa thuộc kỳ giá thành đã chốt và ngày hạch toán không thuộc kỳ kế toán đã khóa. Luồng hiện tại có điểm chưa bảo đảm chặn xóa theo kỳ giá thành; nếu đã dùng số liệu để kết chuyển, dừng và xử lý với người phụ trách dù nút Xóa vẫn hiện. Chu trình xóa chung xem [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/); không có hướng dẫn khôi phục phiếu đã xóa trong màn này.

## 6. Giải thích các thông tin trên màn hình

Xem bảng cột ở phần “Nhận biết màn hình”. Các trường trên cửa sổ lập phiếu: [HƯỚNG DẪN LẬP PHIẾU HẠCH TOÁN LƯƠNG](/bai-viet/2026-11-07-kt-a13-1-huong-dan-lap-phieu-hach-toan-luong/), phần “Giải thích các thông tin trên màn hình”.

## 7. Kiểm tra sau khi thực hiện

- Phiếu hiện trong **PHIẾU HẠCH TOÁN LƯƠNG - DANH SÁCH** khi ngày hạch toán nằm trong khoảng ngày đang chọn.
- Chỉ dòng lương thỏa điều kiện THCP, TK Nợ, ngày và số tiền nêu phần “Chức năng này dùng để làm gì?” mới được kỳ giá thành lấy vào; cần tra lại chi phí trực tiếp sau tổng hợp.
- Sổ chi tiết tài khoản, Bảng cân đối phát sinh, quỹ, công nợ **không** thay đổi.

## 8. Những điều cần lưu ý

⚠️ **Chưa lên sổ kế toán.** Phiếu hạch toán lương không sinh bút toán, nên số dư 334 / 3388 / 622 / 642… trên Sổ chi tiết tài khoản và Bảng cân đối phát sinh chưa phản ánh chi phí lương.

⚠️ **Danh sách lọc theo Ngày hạch toán**, mặc định **Hôm nay**. Muốn xem phiếu các tháng trước, chọn khoảng ngày rộng hơn.

⚠️ **Không sửa / xoá phiếu đã đưa vào kỳ tính giá thành đã kết chuyển.** Dừng và đối chiếu với người phụ trách giá thành; khi cần sửa phải xử lý hủy kết chuyển theo [HƯỚNG DẪN HỦY KẾT CHUYỂN VÀ MỞ LẠI KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-4-huong-dan-huy-ket-chuyen-va-mo-lai-ky-tinh-gia-thanh/) rồi tổng hợp/tính lại sau điều chỉnh. Không tự xóa kỳ chỉ để vượt chặn và không coi việc hệ thống cho xóa là bằng chứng phiếu chưa được sử dụng.

⚠️ **Phiếu có Ngày hạch toán thuộc kỳ kế toán đã khoá sổ không xoá được** (xem phần “Vướng mắc thường gặp”).

### "CẢNH BÁO – Lỗi xóa: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **Ngày hạch toán** của phiếu thuộc kỳ kế toán đã khoá sổ (KT-A01).
Cách xử lý: nhờ kế toán trưởng mở khoá kỳ nếu thật sự cần xoá.

### "CẢNH BÁO – Lỗi xóa: Phiếu hạch toán lương đã được đưa vào kỳ tính giá thành đã kết chuyển (<tên kỳ>). Vui lòng hủy phiếu kết chuyển và xóa kỳ tính giá thành trước khi xóa phiếu này." 

Nguyên nhân: phiếu đã được dùng trong kỳ tính giá thành đã kết chuyển.
Cách xử lý: dừng xóa, chuyển người phụ trách đối chiếu phiếu/kỳ và xử lý theo [HƯỚNG DẪN HỦY KẾT CHUYỂN VÀ MỞ LẠI KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-4-huong-dan-huy-ket-chuyen-va-mo-lai-ky-tinh-gia-thanh/). Không tự xóa kỳ giá thành để thử lại; câu báo không chứng minh mọi luồng đều chặn được xóa.

### Không thấy phiếu vừa lập trên danh sách 

Nguyên nhân: **Ngày hạch toán** của phiếu nằm ngoài khoảng ngày đang chọn, hoặc đang ở chi nhánh khác.
Cách xử lý: chọn lại khoảng ngày và kiểm tra đúng địa chỉ hệ thống của đơn vị.

Lỗi khi lập / sửa phiếu: xem [HƯỚNG DẪN LẬP PHIẾU HẠCH TOÁN LƯƠNG](/bai-viet/2026-11-07-kt-a13-1-huong-dan-lap-phieu-hach-toan-luong/), phần “Vướng mắc thường gặp”. Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Phiếu hạch toán lương có tự lấy số từ bảng lương không?**
Không. Người lập nhập tay từng dòng (hoặc sao chép phiếu tháng trước rồi sửa số tiền).

**Vì sao đã lập phiếu mà Sổ chi tiết TK 622 vẫn không có?**
Phiếu hạch toán lương hiện chưa sinh bút toán (xem phần “Những điều cần lưu ý”).

**Chọn Đối tượng THCP để làm gì?**
Để nhận chi phí trực tiếp khi THCP thuộc kỳ và TK Nợ thuộc 621/622/627. Không chọn thì dòng không vào giá thành từ phiếu này ([HƯỚNG DẪN LẬP PHIẾU HẠCH TOÁN LƯƠNG](/bai-viet/2026-11-07-kt-a13-1-huong-dan-lap-phieu-hach-toan-luong/)).

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU HẠCH TOÁN LƯƠNG](/bai-viet/2026-11-07-kt-a13-1-huong-dan-lap-phieu-hach-toan-luong/) – Hướng dẫn lập phiếu hạch toán lương; sau đó sổ tay Giá thành – Kỳ tính giá thành.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU HẠCH TOÁN LƯƠNG](/bai-viet/2026-11-07-kt-a13-1-huong-dan-lap-phieu-hach-toan-luong/) – Hướng dẫn lập phiếu hạch toán lương
- [TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/) – Tổng quan màn hình Kỳ kế toán
- [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) – Tổng quan màn hình Sổ chi tiết tài khoản
- Sổ tay Giá thành – Đối tượng tập hợp chi phí, Kỳ tính giá thành
- Sổ tay Nhân sự – Bảng lương
