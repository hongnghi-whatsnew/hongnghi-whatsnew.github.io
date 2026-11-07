---
title: "TỔNG QUAN MÀN HÌNH PHIẾU THU"
date: "2026-11-07"
summary: "Màn hình Phiếu thu ghi nhận mọi khoản tiền vào quỹ (tiền mặt hoặc tài khoản ngân hàng): khách hàng trả nợ, nhà cung cấp hoàn tiền, đơn vị gia công nộp tiền, thu tiền hàng cho mượn, thu khác."
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

Màn hình **Phiếu thu** ghi nhận mọi khoản **tiền vào quỹ** (tiền mặt hoặc tài khoản ngân hàng): khách hàng trả nợ, nhà cung cấp hoàn tiền, đơn vị gia công nộp tiền, thu tiền hàng cho mượn, thu khác.

Phiếu thu làm thay đổi số liệu **ngay khi lưu**:

- **Tồn quỹ thu tăng** đúng **Tiền thu**. **Tiền giảm** không vào quỹ.
- **Công nợ** của đối tượng thay đổi theo **Tổng thu** = Tiền thu + Tiền giảm (bảng ở phần “Trình tự công việc”).

Bạn dùng màn hình này khi:

- Khách hàng trả tiền mua hàng (tiền mặt hoặc chuyển khoản).
- Có tiền chuyển khoản vào tài khoản ngân hàng cần lập phiếu thu theo giao dịch ngân hàng.
- Thu tiền khách đã mua hàng mượn, thu từ nhà cung cấp / đơn vị gia công, thu khác.
- In phiếu thu mẫu C31.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Phiếu thu**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Tài khoản đã được **phân quỹ** (Thiết lập nội bộ → Nhân viên → chuột phải **Phân qũy, tài khoản**) và **phân nhóm khách** (**Phân nhóm khách**). Danh sách chỉ hiện phiếu có quỹ thu thuộc quỹ được phân; phiếu của khách hàng chỉ hiện khi khách thuộc nhóm khách được phân.
- Danh mục đã có dữ liệu (sổ tay Thiết lập danh mục): **Tài khoản, quỹ**, **Nội dung thu chi**, **Khách hàng**, **Nhà cung cấp**, **Đơn vị gia công**.

## 2. Mở chức năng

**Kế toán → Phiếu thu**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU THU - DANH SÁCH](/posts/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/hinh-01-man-hinh-phieu-thu.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày thu**. Mặc định hôm nay (nhãn *today*); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Menu chọn loại phiếu thu (bảng dưới); Hình 1 đang mở menu; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/), [HƯỚNG DẪN LẬP PHIẾU THU TIỀN HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kt-a03-2-huong-dan-lap-phieu-thu-tien-hang-cho-muon/), [HƯỚNG DẪN LẬP PHIẾU THU TỪ GIAO DỊCH NGÂN HÀNG](/bai-viet/2026-11-07-kt-a03-3-huong-dan-lap-phieu-thu-tu-giao-dich-ngan-hang/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**). Trong Hình 1 bị menu **Thêm mới** che – nằm ngay bên trái **Trình chọn cột**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Ô tick đầu dòng**: Chức năng: Chọn nhiều phiếu (dùng cho **Đề nghị sinh chứng từ AMIS**); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Thao tác: Sửa / Xóa**: Chức năng: Cập nhật / xoá phiếu; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Menu Thêm mới:**

- **Khác**: Dùng khi: Thu không gắn đối tượng công nợ; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/)
- **Hàng cho mượn**: Dùng khi: Thu tiền khách đã mua hàng cho mượn (từ phiếu nhập trả mượn hàng); Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU THU TIỀN HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kt-a03-2-huong-dan-lap-phieu-thu-tien-hang-cho-muon/)
- **Khách hàng**: Dùng khi: Khách hàng trả nợ; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/)
- **Nhà cung cấp**: Dùng khi: Nhà cung cấp hoàn tiền / trả lại tiền; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/)
- **Đơn vị gia công**: Dùng khi: Thu tiền đơn vị gia công; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/)
- **Giao dịch ngân hàng**: Dùng khi: Lập phiếu thu từ giao dịch tiền vào tài khoản ngân hàng; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU THU TỪ GIAO DỊCH NGÂN HÀNG](/bai-viet/2026-11-07-kt-a03-3-huong-dan-lap-phieu-thu-tu-giao-dich-ngan-hang/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày thu**: Ý nghĩa: Ngày trên phiếu
- **Mã phiếu**: Ý nghĩa: Mã phiếu thu, hệ thống tự tạo (dạng **PT** + 8 chữ số)
- **Người nộp**: Ý nghĩa: Người / đơn vị nộp tiền
- **Quỹ thu**: Ý nghĩa: Quỹ / tài khoản nhận tiền
- **Nội dung**: Ý nghĩa: Nội dung thu chi
- **Số tiền thu**: Ý nghĩa: Tiền thực thu vào quỹ
- **Số tiền giảm**: Ý nghĩa: Phần giảm trừ công nợ không thu bằng tiền
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu
- **File đính kèm**: Ý nghĩa: *Số lượng file: n* hoặc *Không có file đính kèm*
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Cột ẩn, bật bằng **Trình chọn cột**: **Loại phiếu**, **Chứng từ**, **Địa chỉ**, **Điện thoại**, **Mã nhà cung cấp**, **Mã khách hàng**.

Dòng cuối bảng hiện **TỔNG CỘNG: n** và tổng **Số tiền thu**, **Số tiền giảm**.

**Menu chuột phải trên một dòng phiếu:**

- **Đề nghị sinh chứng từ AMIS**: Mở cửa sổ: Gửi các phiếu đang tick sang AMIS (chỉ hiện khi có quyền); Hướng dẫn: Sổ tay Thiết lập danh mục – Kết nối AMIS
- **Xem lại**: Mở cửa sổ: **XEM LẠI - PHIẾU THU** (chỉ xem); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **PHIẾU THU C31**: Mở cửa sổ: Xem trước phiếu thu mẫu C31; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU THU MẪU C31](/bai-viet/2026-11-07-kt-a03-4-huong-dan-in-phieu-thu-mau-c31/)
- **File đính kèm**: Mở cửa sổ: **FILE ĐÍNH KÈM - PHIẾU THU**; Hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)

![Hình 2: Menu chuột phải trên dòng phiếu thu](/posts/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/hinh-02-menu-chuot-phai-phieu-thu.png)

Nhấp đúp vào dòng cũng mở **XEM LẠI - PHIẾU THU**. Chuột phải vào **tiêu đề cột** để mở menu sắp xếp, nhóm, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

**Phiếu thu làm thay đổi gì (khi lưu):**

- **Khách hàng**: Tồn quỹ thu: + Tiền thu; Công nợ: Công nợ khách hàng **giảm** Tổng thu
- **Hàng cho mượn**: Tồn quỹ thu: + Tiền thu; Công nợ: Công nợ khách hàng **giảm** Tổng thu; cập nhật trạng thái thu của phiếu nhập trả mượn
- **Giao dịch ngân hàng**: Tồn quỹ thu: + Tiền thu; Công nợ: Công nợ khách hàng **giảm** Tổng thu (nếu chọn khách); ghi mã phiếu vào giao dịch ngân hàng
- **Nhà cung cấp**: Tồn quỹ thu: + Tiền thu; Công nợ: Công nợ nhà cung cấp **tăng** Tổng thu
- **Đơn vị gia công**: Tồn quỹ thu: + Tiền thu; Công nợ: Công nợ đơn vị gia công (và nguồn nhân lực nếu chọn) **tăng** Tổng thu – trừ khi tick **Không tính nợ**
- **Khác**: Tồn quỹ thu: + Tiền thu; Công nợ: Không đổi

Tổng thu = Tiền thu + Tiền giảm.

**Vị trí phiếu thu trong quy trình:**

```text
(Bán hàng) Phiếu xuất kho bán hàng → công nợ khách hàng tăng
      ↓
Khách trả tiền
   ├── Tiền mặt ──► Phiếu thu loại Khách hàng (KT-A03.1)
   └── Chuyển khoản ──► Phiếu thu từ Giao dịch ngân hàng (KT-A03.3)
      ↓
Tồn quỹ tăng · công nợ khách hàng giảm
      ↓
In phiếu thu C31 (KT-A03.4) · Thống kê Tồn quỹ (KT-B02.0)
Thống kê Công nợ khách hàng (KT-C06.0)
```

**Các chức năng trên màn hình:**

```text
Phiếu thu
   ├── Thêm mới ──► Khác · Khách hàng · Nhà cung cấp · Đơn vị gia công
   │              · Hàng cho mượn · Giao dịch ngân hàng
   ├── Sửa ──► CẬP NHẬT - PHIẾU THU
   ├── Xóa ──► chỉ người tạo
   ├── Xem lại (chuột phải / nhấp đúp)
   ├── PHIẾU THU C31 ──► xem trước bản in
   ├── File đính kèm · Đề nghị sinh chứng từ AMIS
   └── Xuất Excel
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm phiếu**: Cách làm: Gõ mã phiếu, tên người nộp, quỹ… vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thu tiền khách / NCC / đơn vị gia công / thu khác**: Cách làm: **Thêm mới** → chọn loại; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/)
- **Thu tiền hàng cho mượn**: Cách làm: **Thêm mới** → **Hàng cho mượn**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU THU TIỀN HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kt-a03-2-huong-dan-lap-phieu-thu-tien-hang-cho-muon/)
- **Lập phiếu thu theo sao kê ngân hàng**: Cách làm: **Thêm mới** → **Giao dịch ngân hàng**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU THU TỪ GIAO DỊCH NGÂN HÀNG](/bai-viet/2026-11-07-kt-a03-3-huong-dan-lap-phieu-thu-tu-giao-dich-ngan-hang/)
- **Xem chi tiết phiếu**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa phiếu**: Cách làm: **Sửa**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/)
- **Xoá phiếu**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **In phiếu thu**: Cách làm: Chuột phải → **PHIẾU THU C31**; Bài hướng dẫn: [HƯỚNG DẪN IN PHIẾU THU MẪU C31](/bai-viet/2026-11-07-kt-a03-4-huong-dan-in-phieu-thu-mau-c31/)
- **Đính kèm chứng từ**: Cách làm: Chuột phải → **File đính kèm**; Bài hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một phiếu

**Bước 1 –** Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**).

**Bước 2 –** cửa sổ **XEM LẠI - PHIẾU THU** mở ra, các ô hiện theo loại phiếu. Không có nút **Lưu lại**.

**Bước 3 –** Bấm **Đóng**.

### Đề nghị sinh chứng từ AMIS (khi có quyền)

**Bước 1 –** Tick chọn các phiếu cần gửi.

**Bước 2 –** Chuột phải → **Đề nghị sinh chứng từ AMIS**. Phiếu **Tiền mặt** gửi thành chứng từ tiền mặt, phiếu **Tiền gửi** gửi thành chứng từ ngân hàng.

**Bước 3 –** Thành công: thông báo **Đề nghị sinh chứng từ AMIS thành công.** (hoặc câu trả về từ AMIS). Chưa tick phiếu nào: **Vui lòng chọn phiếu cần đề nghị sinh chứng từ AMIS.**

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ phiếu thu: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Phiếu thu có những loại phiếu nào, mỗi loại làm thay đổi tồn quỹ và công nợ ra sao, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Phiếu thu làm thay đổi tồn quỹ và công nợ ngay khi lưu.** Kiểm tra kỹ đối tượng và số tiền trước khi lưu.

⚠️ **Chỉ người tạo phiếu mới xoá được phiếu.** Xoá phiếu sẽ trừ lại tiền ở quỹ thu và hoàn lại công nợ; quỹ không còn đủ tồn thì không xoá được.

⚠️ Không lập, sửa, xoá được phiếu có **Ngày thu** trong **kỳ kế toán đã khóa** ([TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/)).

⚠️ Danh sách chỉ hiện phiếu của **quỹ** và **nhóm khách** bạn được phân. Không thấy phiếu của đồng nghiệp là do phân quyền, không phải phiếu bị mất.

⚠️ Tiền chuyển giữa hai quỹ của công ty dùng **Chuyển tiền nội bộ** ([TỔNG QUAN MÀN HÌNH CHUYỂN TIỀN NỘI BỘ](/bai-viet/2026-11-07-kt-a06-0-tong-quan-man-hinh-chuyen-tien-noi-bo/)), tiền vay dùng **Lệnh vay** ([TỔNG QUAN MÀN HÌNH LỆNH VAY](/bai-viet/2026-11-07-kt-a02-0-tong-quan-man-hinh-lenh-vay/)) – không lập phiếu thu.

### "CẢNH BÁO – Lỗi xóa: Chỉ được xoá phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### "CẢNH BÁO – Lỗi xóa: "<tên quỹ>" không đủ tồn (<số tồn>)." 

Nguyên nhân: quỹ thu đã chi bớt tiền, không đủ để trừ lại khoản thu.
Cách xử lý: kiểm tra **Tồn quỹ** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)); liên hệ kế toán trưởng.

### "CẢNH BÁO – Lỗi xóa: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **Ngày thu** thuộc kỳ đã khóa.
Cách xử lý: nhờ người có quyền mở kỳ ([HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/)).

### Không thấy phiếu vừa lập / phiếu của đồng nghiệp 

Kiểm tra: khoảng ngày lọc; chi nhánh; quỹ thu và nhóm khách của phiếu có được phân cho tài khoản không.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)) hoặc nhờ quản trị phân quỹ / nhóm khách.

### Không thấy nút Thêm mới / Sửa / Xóa 

Kiểm tra: quyền tương ứng của màn hình Phiếu thu.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Tiền giảm là gì?**
Phần công nợ được giảm cho đối tượng nhưng không thu bằng tiền (ví dụ làm tròn, chiết khấu thanh toán). Tiền giảm làm giảm công nợ nhưng không vào quỹ.

**Thu tiền khách hàng ở chi nhánh khác được không?**
Phiếu thu thuộc hệ thống chi nhánh đang truy cập. Kiểm tra đúng tên miền và tài khoản trước khi lập; hệ thống của chi nhánh khác dùng địa chỉ và tài khoản riêng ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/) – Hướng dẫn lập phiếu thu.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/) – Hướng dẫn lập phiếu thu
- [HƯỚNG DẪN LẬP PHIẾU THU TIỀN HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kt-a03-2-huong-dan-lap-phieu-thu-tien-hang-cho-muon/) – Hướng dẫn lập phiếu thu tiền hàng cho mượn
- [HƯỚNG DẪN LẬP PHIẾU THU TỪ GIAO DỊCH NGÂN HÀNG](/bai-viet/2026-11-07-kt-a03-3-huong-dan-lap-phieu-thu-tu-giao-dich-ngan-hang/) – Hướng dẫn lập phiếu thu từ giao dịch ngân hàng
- [HƯỚNG DẪN IN PHIẾU THU MẪU C31](/bai-viet/2026-11-07-kt-a03-4-huong-dan-in-phieu-thu-mau-c31/) – Hướng dẫn in phiếu thu mẫu C31
- [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/) – Tổng quan màn hình Phiếu chi
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/) – Tổng quan màn hình thống kê Tồn quỹ
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/) – Tổng quan màn hình thống kê Công nợ khách hàng

### Loại chứng từ Tiền mặt / Tiền gửi lấy ở đâu?

Kiểm tra quỹ thu và nhãn loại chứng từ đang hiển thị trên hệ thống. Nếu chưa khớp, nhờ kế toán hoặc quản trị xác nhận trước khi gửi dữ liệu sang AMIS.
