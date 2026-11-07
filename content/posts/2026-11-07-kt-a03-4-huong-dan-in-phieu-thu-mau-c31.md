---
title: "HƯỚNG DẪN IN PHIẾU THU MẪU C31"
date: "2026-11-07"
summary: "Từ một phiếu thu đã lưu, bạn in phiếu thu mẫu C31 (khổ A5 ngang) để người nộp tiền, thủ quỹ, người lập phiếu, kế toán trưởng và thủ trưởng đơn vị ký."
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

Từ một phiếu thu đã lưu, bạn in **phiếu thu mẫu C31** (khổ A5 ngang) để người nộp tiền, thủ quỹ, người lập phiếu, kế toán trưởng và thủ trưởng đơn vị ký.

Màn hình **Phiếu thu** chỉ có **một mẫu in** dùng cho mọi loại phiếu thu (khách hàng, nhà cung cấp, đơn vị gia công, hàng cho mượn, giao dịch ngân hàng, khác). Khác với phiếu chi ([HƯỚNG DẪN IN PHIẾU CHI C31 VÀ ỦY NHIỆM CHI](/bai-viet/2026-11-07-kt-a04-4-huong-dan-in-phieu-chi-c31-va-uy-nhiem-chi/)), phiếu thu không có mẫu ủy nhiệm chi hay mẫu theo ngân hàng.

Bản in lấy dữ liệu từ phiếu thu, chi nhánh đang làm việc và danh mục **Tài khoản, quỹ**. Số tiền bằng chữ hệ thống tự đọc từ **TIỀN THU**.

In phiếu **không** làm thay đổi tồn quỹ, công nợ hay sổ sách.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Phiếu thu đã được lưu và hiện trên danh sách. Phiếu đã xoá bị xoá hẳn, không in lại được.
- Đang làm việc đúng **chi nhánh** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)): dòng **Đơn vị** trên phiếu lấy tên công ty của chi nhánh đang làm việc.
- Phiếu đã nhập **GHI CHÚ** (in thành **Lý do thu**). Muốn có dòng **Bộ phận**: quỹ thu đã khai **CHỦ TÀI KHOẢN** trong danh mục **Tài khoản, quỹ**.
- Phiếu thuộc kỳ kế toán đã khóa **vẫn in được**.

## 2. Mở chức năng

**Kế toán → Phiếu thu → chuột phải vào dòng phiếu → PHIẾU THU C31**

## 3. Nhận biết màn hình

![Hình 1: Mục PHIẾU THU C31 trong menu chuột phải](/posts/2026-11-07-kt-a03-4-huong-dan-in-phieu-thu-mau-c31/hinh-01-menu-in-phieu-thu.png)

- **PHIẾU THU C31**: Ý nghĩa: Mục in duy nhất của phiếu thu, hiện với mọi phiếu

![Hình 2: Cửa sổ xem trước phiếu thu C31](/posts/2026-11-07-kt-a03-4-huong-dan-in-phieu-thu-mau-c31/hinh-02-xem-truoc-phieu-thu-c31.png)

- **In, Xuất**: Ý nghĩa: In / lưu file. Cùng thanh còn có chuyển trang, phóng to / thu nhỏ, **Trang đơn**, **Sửa mẫu** (người có quyền) – [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Nút Đóng**: Ý nghĩa: Đóng cửa sổ xem trước
- **Đầu phiếu**: Ý nghĩa: **Đơn vị**, **Bộ phận**, **Mã đơn vị SDNS**, ô mẫu số bên phải
- **Tiêu đề PHIẾU THU**: Ý nghĩa: Ngày thu dưới tiêu đề; **Quyển số**, **Số**, **Nợ**, **Có** bên cạnh
- **Thân phiếu**: Ý nghĩa: Người nộp, địa chỉ, lý do thu, số tiền, số tiền bằng chữ, kèm theo
- **Ngày ký và 5 ô chữ ký**: Ý nghĩa: Thủ trưởng đơn vị, Kế toán trưởng, Người lập phiếu, Thủ quỹ, Người nộp tiền

**Dữ liệu trên bản in lấy từ đâu:**

- **Đơn vị**: Nguồn: **TÊN CÔNG TY** của chi nhánh đang làm việc (danh mục **Chi nhánh / Đơn vị**)
- **Bộ phận**: Nguồn: **CHỦ TÀI KHOẢN** của **QUỸ THU** (danh mục **Tài khoản, quỹ**). Quỹ chưa khai thì để trống
- **Mã đơn vị SDNS**: Nguồn: Để trống
- **Mẫu số C31 BB …**: Nguồn: Chữ in sẵn trên mẫu
- **Ngày dưới tiêu đề PHIẾU THU**: Nguồn: **NGÀY THU**, dạng ngày/tháng/năm
- **Quyển số, Số, Nợ, Có**: Nguồn: Để trống – ghi tay nếu đơn vị dùng
- **Họ, tên người nộp tiền**: Nguồn: **NGƯỜI NỘP**
- **Địa chỉ**: Nguồn: **ĐỊA CHỈ**
- **Lý do thu**: Nguồn: **GHI CHÚ** (không phải **NỘI DUNG**)
- **Số tiền**: Nguồn: **TIỀN THU**, không có số lẻ. **TIỀN GIẢM** không in
- **(viết bằng chữ)**: Nguồn: Hệ thống tự đọc **TIỀN THU** (làm tròn đến đồng), viết hoa chữ đầu, thêm chữ *đồng*
- **Kèm theo**: Nguồn: **MÃ PHIẾU** (PT…)
- **Chứng từ kế toán**: Nguồn: Để trống (ô **CHỨNG TỪ** của phiếu không in)
- **Đã nhận đủ số tiền (viết bằng chữ)**: Nguồn: Giống dòng bằng chữ ở trên
- **Ngày … tháng … năm …**: Nguồn: **NGÀY THU**
- **Tên dưới Người lập phiếu**: Nguồn: Họ tên tài khoản **đang bấm in** (không phải người tạo phiếu)
- **Các ô chữ ký còn lại**: Nguồn: Để trống, ký và ghi họ tên tay
- **Tỷ giá ngoại tệ, Số tiền quy đổi**: Nguồn: Để trống

Trên phiếu **không** in logo, địa chỉ, mã số thuế của chi nhánh.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kế toán
   ↓
Phiếu thu
   ↓
Chuột phải dòng phiếu ──► PHIẾU THU C31
   ↓
Cửa sổ xem trước khi in
```

```text
Lập phiếu thu (KT-A03.1 / KT-A03.2 / KT-A03.3)
      ↓
Chuột phải dòng phiếu ──► PHIẾU THU C31
      ↓
Kiểm tra bản xem trước → In (GEN-06)
      ↓
Ghi tay Quyển số, Số, Nợ, Có (nếu đơn vị dùng)
      ↓
Người nộp tiền, thủ quỹ, người lập phiếu, kế toán trưởng, thủ trưởng ký
      ↓
Đính kèm bản đã ký vào phiếu thu (GEN-12)
```

### Bước 1 – Chọn phiếu

Vào **Kế toán → Phiếu thu**, chọn khoảng ngày chứa **Ngày thu** của phiếu, tìm phiếu cần in ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

### Bước 2 – Mở bản in

Chuột phải vào dòng phiếu → chọn **PHIẾU THU C31** (Hình 1).

### Bước 3 – Kiểm tra bản xem trước

Cửa sổ xem trước mở ra (Hình 2). Kiểm tra:

- **Đơn vị** đúng tên công ty của chi nhánh.
- **Họ, tên người nộp tiền**, **Địa chỉ**, **Lý do thu**.
- **Số tiền** và hai dòng số tiền bằng chữ.
- **Ngày … tháng … năm …** đúng ngày thu.

Sai thông tin: bấm **Đóng**, sửa phiếu thu ([HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/)) hoặc sửa danh mục **Tài khoản, quỹ** / **Chi nhánh / Đơn vị**, rồi in lại.

Nếu thanh công cụ có nút **Mẫu in**: bấm để chọn mẫu khác do quản trị tạo ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)).

### Bước 4 – In

Bấm **In**  trên thanh công cụ, chọn máy in ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)). Cần gửi file thì dùng **Xuất** → PDF.

### Bước 5 – Đóng cửa sổ

Bấm **Đóng**. Sau khi các bên ký, đính kèm bản quét vào phiếu: chuột phải → **File đính kèm** ([HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)).

## 6. Kiểm tra sau khi thực hiện

Có bản phiếu thu mẫu C31 khổ A5 ngang để các bên ký và lưu chứng từ. Dữ liệu phiếu thu, tồn quỹ, công nợ không thay đổi.

## 7. Những điều cần lưu ý

⚠️ **Lý do thu lấy từ GHI CHÚ**, không lấy **NỘI DUNG**. Phiếu để trống ghi chú thì dòng **Lý do thu** trống. Phiếu lập từ giao dịch ngân hàng có sẵn ghi chú là nội dung chuyển khoản.

⚠️ **Số tiền trên bản in = TIỀN THU**. **TIỀN GIẢM** không in, nên phiếu có tiền giảm in số nhỏ hơn **TỔNG THU** – đúng bằng số tiền thực nhận vào quỹ.

⚠️ Tên dưới ô **Người lập phiếu** là **người đang bấm in**, không phải người tạo phiếu. Nhờ người khác in hộ thì tên in ra là của người in.

⚠️ Ô **Số** trên phiếu để trống; mã phiếu **PT…** in ở dòng **Kèm theo**. Ô **CHỨNG TỪ** nhập trên phiếu không in ra.

⚠️ Mẫu in do quản trị cấu hình. Muốn đổi bố cục mẫu, liên hệ IT (không tự sửa trong cửa sổ xem trước).

### Dòng Lý do thu trống 

Nguyên nhân: phiếu chưa nhập **GHI CHÚ**.
Cách xử lý: sửa phiếu, nhập **GHI CHÚ** ([HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/)), rồi in lại. Phiếu thuộc kỳ đã khóa không sửa được – ghi tay lý do thu.

### Dòng Bộ phận trống 

Nguyên nhân: quỹ thu chưa khai **CHỦ TÀI KHOẢN** trong danh mục **Tài khoản, quỹ** (thường gặp ở quỹ tiền mặt).
Cách xử lý: nhờ người quản lý danh mục bổ sung, rồi in lại; hoặc ghi tay.

### Dòng Đơn vị sai tên công ty 

Nguyên nhân: đang làm việc ở chi nhánh khác, hoặc danh mục **Chi nhánh / Đơn vị** khai sai **TÊN CÔNG TY**.
Cách xử lý: truy cập đúng tên miền và tài khoản riêng của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)), mở đúng phiếu rồi in lại; vẫn sai thì báo IT kiểm tra danh mục chi nhánh.

### Cửa sổ xem trước trắng, không hiện phiếu (Lỗi hệ thống)

Nguyên nhân: không tải được mẫu in hoặc dữ liệu phiếu.
Cách xử lý: bấm **Đóng**, tải lại trang (F5), in lại; vẫn lỗi thì ghi mã phiếu, báo IT ([LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/)).

## 9. Câu hỏi thường gặp

**Phiếu thu tiền gửi ngân hàng có mẫu in riêng không?**
Không. Mọi phiếu thu dùng chung mẫu **PHIẾU THU C31**.

**Vì sao số tiền trên phiếu khác Tổng thu?**
Bản in chỉ in **TIỀN THU**. **TIỀN GIẢM** là phần giảm công nợ không thu bằng tiền nên không in.

**In nhiều phiếu thu một lần được không?**
Không. Mỗi lần in một phiếu ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)).

**Phiếu trong kỳ kế toán đã khóa có in được không?**
Được. In không thay đổi dữ liệu, in lại nhiều lần cũng không sao.

## 10. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/) – đính kèm bản phiếu thu đã ký vào phiếu.

## 11. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/) – Tổng quan màn hình Phiếu thu
- [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/) – Hướng dẫn lập phiếu thu
- [HƯỚNG DẪN LẬP PHIẾU THU TIỀN HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kt-a03-2-huong-dan-lap-phieu-thu-tien-hang-cho-muon/) – Hướng dẫn lập phiếu thu tiền hàng cho mượn
- [HƯỚNG DẪN LẬP PHIẾU THU TỪ GIAO DỊCH NGÂN HÀNG](/bai-viet/2026-11-07-kt-a03-3-huong-dan-lap-phieu-thu-tu-giao-dich-ngan-hang/) – Hướng dẫn lập phiếu thu từ giao dịch ngân hàng
- [HƯỚNG DẪN IN PHIẾU CHI C31 VÀ ỦY NHIỆM CHI](/bai-viet/2026-11-07-kt-a04-4-huong-dan-in-phieu-chi-c31-va-uy-nhiem-chi/) – Hướng dẫn in phiếu chi C31 và ủy nhiệm chi
- Sổ tay Thiết lập danh mục – Chi nhánh / Đơn vị; Tài khoản, quỹ
