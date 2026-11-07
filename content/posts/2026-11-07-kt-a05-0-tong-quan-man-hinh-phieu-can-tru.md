---
title: "TỔNG QUAN MÀN HÌNH PHIẾU CẤN TRỪ"
date: "2026-11-07"
summary: "Màn hình Phiếu cấn trừ ghi nhận việc bù trừ công nợ mà không có tiền thu, chi qua quỹ."
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

Màn hình **Phiếu cấn trừ** ghi nhận việc **bù trừ công nợ** mà **không có tiền thu, chi** qua quỹ. Dùng khi:

- Một đối tác vừa là **khách hàng** vừa là **nhà cung cấp** (hoặc **đơn vị gia công**): lấy khoản khách nợ công ty trừ vào khoản công ty nợ đối tác.
- Cần **giảm công nợ một đối tượng** không qua quỹ (điều chỉnh, xoá nợ được duyệt).

Phiếu cấn trừ làm thay đổi số liệu **ngay khi lưu**:

- **Công nợ** của **mỗi** đối tượng trên phiếu **giảm** đúng **Số tiền** cấn trừ.
- **Tồn quỹ không đổi.**
- **Sổ cái** chưa đổi khi lưu; phiếu lên sổ khi chạy hạch toán tự động ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Phiếu cấn trừ**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Danh mục đã có dữ liệu: **Khách hàng**, **Nhà cung cấp**, **Đơn vị gia công**, **Nguồn nhân lực**, **Nội dung thu chi** (nội dung cấn trừ).
- Đã đối chiếu và có xác nhận (biên bản) với đối tác về số tiền cấn trừ.

## 2. Mở chức năng

**Kế toán → Phiếu cấn trừ**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU CẤN TRỪ - DANH SÁCH (danh sách trống, đang mở menu Thêm mới)](/posts/2026-11-07-kt-a05-0-tong-quan-man-hinh-phieu-can-tru/hinh-01-man-hinh-phieu-can-tru.png)

Hình 1 chụp khi danh sách **chưa có phiếu** trong ngày (dòng tổng **TỔNG CỘNG: 0**).

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày cấn trừ**. Mặc định **Hôm nay** (nhãn *today*); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Menu chọn loại cấn trừ (6 loại, bảng dưới); Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-1-huong-dan-lap-phieu-can-tru/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Cập nhật / xoá phiếu (hiện trên từng dòng phiếu); Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-1-huong-dan-lap-phieu-can-tru/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

Bên trái ô **Tìm kiếm…** có biểu tượng **Xuất Excel** (khi có quyền **Xuất dữ liệu**, [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)) và **Trình chọn cột** (ẩn / hiện cột, [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)) — trong Hình 1 hai biểu tượng này bị menu **Thêm mới** che.

**Menu Thêm mới** (thứ tự như trên màn hình):

- **Đơn vị gia công - Nhà cung cấp**: Đối tượng trên phiếu: ĐVGC (+ nguồn nhân lực) và NCC; Dùng khi: Đối tác vừa gia công vừa bán hàng cho công ty
- **Đơn vị gia công**: Đối tượng trên phiếu: ĐVGC (+ nguồn nhân lực); Dùng khi: Giảm công nợ ĐVGC không qua quỹ
- **Nhà cung cấp**: Đối tượng trên phiếu: NCC; Dùng khi: Giảm công nợ NCC không qua quỹ
- **Khách hàng**: Đối tượng trên phiếu: Khách hàng; Dùng khi: Giảm công nợ khách không qua quỹ
- **Khách hàng - Đơn vị gia công**: Đối tượng trên phiếu: Khách hàng và ĐVGC (+ nguồn nhân lực); Dùng khi: Khách hàng đồng thời gia công cho công ty
- **Khách hàng - Nhà cung cấp**: Đối tượng trên phiếu: Khách hàng và NCC; Dùng khi: Khách hàng đồng thời bán hàng cho công ty

Chi tiết từng loại: [HƯỚNG DẪN LẬP PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-1-huong-dan-lap-phieu-can-tru/).

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày cấn trừ**: Ý nghĩa: Ngày trên phiếu
- **Mã phiếu**: Ý nghĩa: Mã phiếu cấn trừ, hệ thống tự tạo (dạng **CT** + 8 chữ số)
- **Loại phiếu**: Ý nghĩa: Loại cấn trừ, hiện dạng mã: *khachhang-nhacungcap*, *khachhang-donvigiacong*, *donvigiacong-nhacungcap*, *khachhang*, *nhacungcap*, *donvigiacong*
- **Nội dung**: Ý nghĩa: Nội dung cấn trừ
- **Số tiền cấn trừ**: Ý nghĩa: Số tiền trừ vào công nợ mỗi đối tượng
- **Khách hàng, Nhà cung cấp, Đơn vị gia công, Nguồn nhân lực**: Ý nghĩa: Tên các đối tượng trên phiếu
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Cột ẩn, bật bằng **Trình chọn cột**: **Mã Khách hàng**, **Mã Nhà cung cấp**, **Mã Đơn vị gia công**, **Mã N.nhân lực**.

Dòng cuối bảng hiện **TỔNG CỘNG: n** và tổng **Số tiền cấn trừ**.

**Menu chuột phải trên một dòng phiếu:**

- **Xem lại**: Mở cửa sổ: **XEM LẠI - PHIẾU CẤN TRỪ** (chỉ xem); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **In phiếu cấn trừ**: Mở cửa sổ: Xem trước bản in (chỉ có mẫu cho loại Khách hàng - Nhà cung cấp và Khách hàng - Đơn vị gia công); Hướng dẫn: [HƯỚNG DẪN IN PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-2-huong-dan-in-phieu-can-tru/)

Nhấp đúp vào dòng cũng mở **XEM LẠI - PHIẾU CẤN TRỪ**. Chuột phải vào **tiêu đề cột** để mở menu sắp xếp, nhóm, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Màn này không có file đính kèm, không gửi AMIS.

Phiếu cấn trừ cũng mở xem được từ cửa sổ chi tiết công nợ ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NGUỒN NHÂN LỰC](/bai-viet/2026-11-07-kt-c01-0-tong-quan-man-hinh-thong-ke-cong-no-nguon-nhan-luc/), [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ GIA CÔNG](/bai-viet/2026-11-07-kt-c02-0-tong-quan-man-hinh-thong-ke-cong-no-gia-cong/), [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NHÀ CUNG CẤP](/bai-viet/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/), [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/)).

## 4. Trình tự công việc

**Phiếu cấn trừ làm thay đổi gì (khi lưu):**

- **Khách hàng - Nhà cung cấp**: Công nợ khách hàng: **Giảm** Số tiền; Công nợ NCC: **Giảm** Số tiền; Tồn quỹ: Không đổi
- **Khách hàng - Đơn vị gia công**: Công nợ khách hàng: **Giảm** Số tiền; Công nợ ĐVGC / nguồn nhân lực: **Giảm** Số tiền (nguồn nhân lực nếu chọn); Tồn quỹ: Không đổi
- **Đơn vị gia công - Nhà cung cấp**: Công nợ NCC: **Giảm** Số tiền; Công nợ ĐVGC / nguồn nhân lực: **Giảm** Số tiền (nguồn nhân lực nếu chọn); Tồn quỹ: Không đổi
- **Khách hàng**: Công nợ khách hàng: **Giảm** Số tiền; Tồn quỹ: Không đổi
- **Nhà cung cấp**: Công nợ NCC: **Giảm** Số tiền; Tồn quỹ: Không đổi
- **Đơn vị gia công**: Công nợ ĐVGC / nguồn nhân lực: **Giảm** Số tiền (nguồn nhân lực nếu chọn); Tồn quỹ: Không đổi

Sửa phiếu: hệ thống hoàn lại số cũ rồi trừ số mới. Xoá phiếu: công nợ các đối tượng cộng lại như trước khi cấn trừ.

**Giới hạn phải đối chiếu trước ghi sổ:** Cần đối chiếu cách dùng cặp tài khoản 331/131 cho từng loại cấn trừ. Với loại một đối tượng hoặc có ĐVGC, kế toán phải kiểm tra tài khoản và cách xử lý; không coi công nợ đã giảm là sổ cái đã ghi đúng.

**Khi nào phiếu cấn trừ lên sổ cái:** khi chạy **hạch toán tự động** cho năm, theo **Ngày cấn trừ**, chỉ phiếu có **Số tiền** > 0: Nợ 331 (nhà cung cấp) / Có 131 (khách hàng) ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) phần “Trình tự công việc”).

**Ví dụ cấn trừ Khách hàng - Nhà cung cấp:**

```text
Công ty A: khách nợ công ty 50.000.000 · công ty nợ A (NCC) 30.000.000
      ↓
Phiếu cấn trừ Khách hàng - Nhà cung cấp, Số tiền 30.000.000
      ↓
Công nợ khách A: 50.000.000 − 30.000.000 = 20.000.000
Công nợ NCC A:   30.000.000 − 30.000.000 = 0
      ↓
Còn lại 20.000.000: thu bằng Phiếu thu (KT-A03.1)
```

**Các chức năng trên màn hình:**

```text
Phiếu cấn trừ
   ├── Thêm mới ──► ĐVGC - NCC · ĐVGC · NCC · Khách hàng
   │              · Khách hàng - ĐVGC · Khách hàng - NCC
   ├── Sửa ──► CẬP NHẬT - PHIẾU CẤN TRỪ (không đổi được đối tượng)
   ├── Xóa ──► chỉ người tạo
   ├── Xem lại (chuột phải / nhấp đúp)
   ├── In phiếu cấn trừ ──► xem trước bản in
   └── Xuất Excel
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm phiếu**: Cách làm: Gõ mã phiếu, tên đối tượng… vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập phiếu cấn trừ**: Cách làm: **Thêm mới** → chọn loại; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-1-huong-dan-lap-phieu-can-tru/)
- **Xem chi tiết phiếu**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa phiếu**: Cách làm: **Sửa**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-1-huong-dan-lap-phieu-can-tru/)
- **Xoá phiếu**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **In phiếu cấn trừ**: Cách làm: Chuột phải → **In phiếu cấn trừ**; Bài hướng dẫn: [HƯỚNG DẪN IN PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-2-huong-dan-in-phieu-can-tru/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một phiếu

**Bước 1 –** Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**).

**Bước 2 –** cửa sổ **XEM LẠI - PHIẾU CẤN TRỪ** mở ra, các ô đối tượng hiện theo loại phiếu. Không có nút **Lưu lại**.

**Bước 3 –** Bấm **Đóng**.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ phiếu cấn trừ: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-1-huong-dan-lap-phieu-can-tru/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết khi nào dùng phiếu cấn trừ, mỗi loại làm công nợ đối tượng nào giảm, phiếu không đụng tồn quỹ, lúc nào lên sổ cái, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Cấn trừ hai bên làm giảm công nợ cả hai đối tượng cùng một số tiền.** Số tiền cấn trừ không nên vượt số nợ nhỏ hơn của hai bên.

⚠️ **Phiếu một đối tượng** (Khách hàng / Nhà cung cấp / Đơn vị gia công) làm giảm công nợ mà không có tiền. Chỉ dùng khi đã được duyệt (xoá nợ, điều chỉnh) và ghi rõ lý do ở **GHI CHÚ**.

⚠️ **Chỉ người tạo phiếu mới xoá được phiếu** (kể cả tài khoản quản trị cũng không xoá thay).

⚠️ Không lập, sửa, xoá được phiếu có **Ngày cấn trừ** trong **kỳ kế toán đã khóa** ([TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/)).

⚠️ Sửa hoặc xoá phiếu **đã lên sổ cái** không tự sửa bút toán. Báo kế toán trưởng để điều chỉnh sổ.

⚠️ Danh sách hiện **mọi** phiếu cấn trừ của chi nhánh, không lọc theo nhóm khách được phân.

### "CẢNH BÁO – Lỗi xóa: Chỉ được xoá phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá.

### "CẢNH BÁO – Lỗi xóa: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **Ngày cấn trừ** thuộc kỳ đã khóa.
Cách xử lý: nhờ người có quyền mở kỳ ([HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/)).

### Không thấy nút Thêm mới / Sửa / Xóa 

Kiểm tra: quyền tương ứng của màn hình Phiếu cấn trừ.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi khi lưu phiếu: xem phần “Vướng mắc thường gặp” của [HƯỚNG DẪN LẬP PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-1-huong-dan-lap-phieu-can-tru/). Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Cấn trừ khác gì phiếu thu / phiếu chi?**
Phiếu thu / chi có tiền đi qua quỹ. Phiếu cấn trừ chỉ bù trừ công nợ, quỹ không đổi.

**Đối tác vừa là khách hàng vừa là NCC nhưng hai mã khác nhau, cấn trừ được không?**
Được. Phiếu chọn riêng khách hàng và NCC; hệ thống không kiểm tra hai mã có cùng một đối tác.

**Xem công nợ sau cấn trừ ở đâu?**
Thống kê **Công nợ khách hàng** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/)), **Công nợ nhà cung cấp** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NHÀ CUNG CẤP](/bai-viet/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/)), **Công nợ gia công** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ GIA CÔNG](/bai-viet/2026-11-07-kt-c02-0-tong-quan-man-hinh-thong-ke-cong-no-gia-cong/)), **Công nợ nguồn nhân lực** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NGUỒN NHÂN LỰC](/bai-viet/2026-11-07-kt-c01-0-tong-quan-man-hinh-thong-ke-cong-no-nguon-nhan-luc/)).

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-1-huong-dan-lap-phieu-can-tru/) – Hướng dẫn lập phiếu cấn trừ.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-1-huong-dan-lap-phieu-can-tru/) – Hướng dẫn lập phiếu cấn trừ
- [HƯỚNG DẪN IN PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-2-huong-dan-in-phieu-can-tru/) – Hướng dẫn in phiếu cấn trừ
- [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/) – Phiếu thu; [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/) – Phiếu chi
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NGUỒN NHÂN LỰC](/bai-viet/2026-11-07-kt-c01-0-tong-quan-man-hinh-thong-ke-cong-no-nguon-nhan-luc/), [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ GIA CÔNG](/bai-viet/2026-11-07-kt-c02-0-tong-quan-man-hinh-thong-ke-cong-no-gia-cong/), [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NHÀ CUNG CẤP](/bai-viet/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/), [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/) – Thống kê công nợ
- [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) – Sổ chi tiết tài khoản
