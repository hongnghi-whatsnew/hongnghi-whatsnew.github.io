---
title: "HƯỚNG DẪN LẬP PHIẾU THU"
date: "2026-11-07"
summary: "Phiếu thu ghi nhận tiền vào quỹ."
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

Phiếu thu ghi nhận tiền vào quỹ. Bài này hướng dẫn lập 4 loại phiếu thu nhập tay:

- **Khách hàng**: khách trả nợ tiền hàng.
- **Nhà cung cấp**: nhà cung cấp hoàn / trả lại tiền.
- **Đơn vị gia công**: thu tiền đơn vị gia công.
- **Khác**: thu không gắn đối tượng công nợ (thanh lý, tiền khác…).

Thu tiền hàng cho mượn xem [HƯỚNG DẪN LẬP PHIẾU THU TIỀN HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kt-a03-2-huong-dan-lap-phieu-thu-tien-hang-cho-muon/); lập từ giao dịch ngân hàng xem [HƯỚNG DẪN LẬP PHIẾU THU TỪ GIAO DỊCH NGÂN HÀNG](/bai-viet/2026-11-07-kt-a03-3-huong-dan-lap-phieu-thu-tu-giao-dich-ngan-hang/). Bài cũng áp dụng khi **Sửa** phiếu (cửa sổ **CẬP NHẬT - PHIẾU THU**).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** màn hình **Phiếu thu**.
- Quỹ thu đã được phân cho tài khoản của bạn; khách hàng thuộc nhóm khách bạn được phân.
- **Ngày thu** thuộc kỳ kế toán chưa khóa ([TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/)).
- Chuẩn bị: đối tượng nộp tiền, số tiền, quỹ / tài khoản nhận, nội dung thu, số chứng từ (nếu có).

## 2. Mở chức năng

**Kế toán → Phiếu thu → Thêm mới → Khách hàng / Nhà cung cấp / Đơn vị gia công / Khác**

## 3. Nhận biết màn hình

![Hình 1: cửa sổ THÊM MỚI - PHIẾU THU loại Khách hàng](/posts/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/hinh-01-form-phieu-thu-khach-hang.png)

- **NGÀY THU**: Ý nghĩa: Bắt buộc
- **Ô đối tượng: KHÁCH HÀNG / NHÀ CUNG CẤP / ĐƠN VỊ GIA CÔNG (+ NGUỒN NHÂN LỰC)**: Ý nghĩa: Ô hiện theo loại phiếu (bảng dưới)
- **ĐIỆN THOẠI, NỢ CŨ**: Ý nghĩa: Tự điền khi chọn đối tượng; **NỢ CŨ** chỉ xem. Không hiện ở loại Đơn vị gia công
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **NGƯỜI NỘP, ĐỊA CHỈ**: Ý nghĩa: **NGƯỜI NỘP** bắt buộc; tự điền khi chọn đối tượng, sửa được
- **TIỀN THU**: Ý nghĩa: Số tiền thực thu vào quỹ
- **CHỨNG TỪ**: Ý nghĩa: Số chứng từ kèm theo (số UNC, số biên lai…)
- **QUỸ THU**: Ý nghĩa: Bắt buộc. Quỹ / tài khoản nhận tiền
- **NỘI DUNG**: Ý nghĩa: Bắt buộc. Nội dung thu chi, hiện *mã, tên*
- **TIỀN GIẢM**: Ý nghĩa: Phần giảm trừ công nợ không thu bằng tiền
- **TỔNG THU**: Ý nghĩa: Tự tính = Tiền thu + Tiền giảm
- **GHI CHÚ**: Ý nghĩa: Ghi chú phiếu
- **CÒN NỢ**: Ý nghĩa: Tự tính, chỉ xem
- **Chữ đỏ cạnh nút**: Ý nghĩa: Tên nhóm khách hàng của khách đã chọn (Hình 1: **CÔNG NỢ**)
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Ô đối tượng hiện theo loại phiếu:**

- **Khách hàng**: Ô đối tượng: **KHÁCH HÀNG** (chọn được); Bắt buộc: Có; Thêm: **NỢ CŨ**, **CÒN NỢ** = Nợ cũ − Tổng thu
- **Nhà cung cấp**: Ô đối tượng: **NHÀ CUNG CẤP**; Bắt buộc: Có; Thêm: **NỢ CŨ**, **CÒN NỢ** = Nợ cũ + Tổng thu
- **Đơn vị gia công**: Ô đối tượng: **ĐƠN VỊ GIA CÔNG**, **NGUỒN NHÂN LỰC**; Bắt buộc: Đơn vị gia công: Có; Thêm: Ô tick **Không tính nợ** ở chân cửa sổ; không có **NỢ CŨ**, **ĐIỆN THOẠI**
- **Khác**: Ô đối tượng: **KHÁCH HÀNG** (bị khoá, để trống); Bắt buộc: Không; Thêm: **CÒN NỢ** = 0

![Hình 2: cửa sổ THÊM MỚI - PHIẾU THU loại Nhà cung cấp](/posts/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/hinh-02-form-phieu-thu-nha-cung-cap.png)

 ô **NHÀ CUNG CẤP** thay cho **KHÁCH HÀNG** ·  **NỢ CŨ** của nhà cung cấp ·  **CÒN NỢ** = Nợ cũ + Tổng thu (trong hình: 1.700.000 + 100.000 = 1.800.000). Không có chữ đỏ nhóm khách.

![Hình 3: cửa sổ THÊM MỚI - PHIẾU THU loại Khác](/posts/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/hinh-03-form-phieu-thu-khac.png)

 ô **KHÁCH HÀNG** để trống (không có dấu \*) ·  **NGƯỜI NỘP** tự gõ ·  **CÒN NỢ** = 0.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kế toán
   ↓
Phiếu thu
   ↓
Thêm mới ──► chọn loại phiếu thu
```

```text
Phiếu thu → Thêm mới → chọn loại
      ↓
Nhập Ngày thu, chọn đối tượng → tự điền Người nộp, Địa chỉ, Điện thoại, Nợ cũ
      ↓
Nhập Tiền thu, (Tiền giảm), Chứng từ
Chọn Quỹ thu, Nội dung · Ghi chú
      ↓
Kiểm tra Tổng thu, Còn nợ
      ↓
Lưu lại ── báo đỏ / cảnh báo? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → tồn quỹ tăng Tiền thu · công nợ đổi theo Tổng thu
```

### Bước 1 – Mở cửa sổ thêm mới

Vào **Kế toán → Phiếu thu**, bấm **Thêm mới** → chọn **Khách hàng** (hoặc **Nhà cung cấp**, **Đơn vị gia công**, **Khác**). cửa sổ **THÊM MỚI - PHIẾU THU** mở ra (Hình 1).

### Bước 2 – Nhập ngày và chọn đối tượng

- **NGÀY THU**: ngày nhận tiền.
- Ô đối tượng: gõ mã / tên để tìm rồi chọn.
  - **Khách hàng**: danh sách hiện *id, mã khách, tên rút gọn, tên khách*. Chọn xong, hệ thống điền **NGƯỜI NỘP** (tên rút gọn), **ĐỊA CHỈ**, **ĐIỆN THOẠI**, **NỢ CŨ**, và hiện tên nhóm khách màu đỏ ⑭ cạnh nút **Lưu lại**.
  - **Nhà cung cấp**: điền **NGƯỜI NỘP**, **ĐỊA CHỈ**, **ĐIỆN THOẠI**, **NỢ CŨ**.
  - **Đơn vị gia công**: điền **NGƯỜI NỘP**, **ĐỊA CHỈ**. Chọn thêm **NGUỒN NHÂN LỰC** nếu khoản thu gắn với nguồn nhân lực.
  - **Khác**: không chọn đối tượng; tự gõ **NGƯỜI NỘP**.

### Bước 3 – Nhập số tiền

- **TIỀN THU**: số tiền thực nhận.
- Kiểm tra **TỔNG THU** ⑪ và **CÒN NỢ** ⑬.

### Bước 4 – Chọn quỹ, nội dung và ghi chú

- **QUỸ THU**: quỹ tiền mặt hoặc tài khoản ngân hàng nhận tiền. Danh sách chỉ có các quỹ bạn được phân.
- **NỘI DUNG**: chọn nội dung thu – gõ mã hoặc chữ trong tên để tìm, ví dụ **TCNKH, THU CÔNG NỢ KHÁCH HÀNG** (khách trả nợ), **THUKHAC, THU KHÁC** (thu khác, NCC hoàn tiền).
- **CHỨNG TỪ**, **GHI CHÚ** ⑫: nhập nếu cần.

### Bước 5 – (Loại Đơn vị gia công) Không tính nợ

Tick **Không tính nợ** ở chân cửa sổ nếu khoản thu này **không** được tính vào công nợ đơn vị gia công / nguồn nhân lực. Tiền vẫn vào quỹ.

### Bước 6 – Bấm Lưu lại

Bấm **Lưu lại** ⑮.

- Thiếu thông tin: ô thiếu có viền đỏ, lời nhắc hiện dưới ô và trong danh sách lỗi ở cuối cửa sổ: **Chọn ngày thu**, **Vui lòng chọn khách hàng** / **Vui lòng chọn nhà cung cấp** / **Vui lòng chọn đơn vị gia công**, **Vui lòng ghi tên người nộp**, **Vui lòng chọn quỹ thu**, **Vui lòng chọn nội dung**.
- Tiền giảm vượt nợ cũ: cảnh báo **Tiền giảm không được lớn hơn tiền nợ**.
- Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại.

### Bước 7 – Kiểm tra

Rà ĐỊA CHỈ tự điền; xóa chữ `null`/bổ sung địa chỉ đúng trước in C31. Nếu Lưu không có thông báo rõ ràng, kiểm tra danh sách, quỹ và công nợ trước khi gửi lại để tránh ghi trùng.

Phiếu mới hiện trong danh sách. Tồn quỹ thu tăng **Tiền thu** (xem **Tồn quỹ** [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)); công nợ đối tượng thay đổi theo **Tổng thu** (bảng phần “Trình tự công việc” của [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/)).

### Sửa phiếu

Bấm **Sửa** → cửa sổ **CẬP NHẬT - PHIẾU THU**. Sửa được các ô như khi lập. Khi lưu, hệ thống hoàn lại số tiền cũ (trừ quỹ, hoàn công nợ) rồi ghi số tiền mới; quỹ cũ phải còn đủ tồn để trừ lại.

## 6. Giải thích các thông tin trên màn hình

- **Ngày thu**: Ý nghĩa: Ngày nhận tiền; Bắt buộc: Có; Lưu ý: Dùng lọc danh sách, kiểm tra khóa sổ, ghi sổ kế toán
- **Khách hàng**: Ý nghĩa: Khách nộp tiền; Bắt buộc: Có (loại Khách hàng); Lưu ý: Công nợ khách hàng giảm Tổng thu
- **Nhà cung cấp**: Ý nghĩa: NCC nộp tiền; Bắt buộc: Có (loại NCC); Lưu ý: Công nợ NCC tăng Tổng thu
- **Đơn vị gia công**: Ý nghĩa: Đơn vị gia công nộp tiền; Bắt buộc: Có (loại ĐVGC); Lưu ý: Công nợ ĐVGC tăng Tổng thu, trừ khi **Không tính nợ**
- **Nguồn nhân lực**: Ý nghĩa: Nguồn nhân lực gắn khoản thu; Bắt buộc: Không; Lưu ý: Chỉ ở loại ĐVGC; công nợ nguồn nhân lực tăng Tổng thu, trừ khi **Không tính nợ**
- **Điện thoại**: Ý nghĩa: Điện thoại người nộp; Bắt buộc: Không; Lưu ý: Tự điền
- **Nợ cũ**: Ý nghĩa: Công nợ của đối tượng trước phiếu này; Lưu ý: Tự tính, chỉ xem
- **Mã phiếu**: Ý nghĩa: Mã phiếu thu; Lưu ý: Tự tạo khi lưu (PT + 8 chữ số)
- **Người nộp**: Ý nghĩa: Tên người / đơn vị nộp; Bắt buộc: Có; Lưu ý: In trên phiếu C31
- **Địa chỉ**: Ý nghĩa: Địa chỉ người nộp; Bắt buộc: Không; Lưu ý: Tự điền
- **Tiền thu**: Ý nghĩa: Số tiền vào quỹ; Bắt buộc: Nên nhập; Lưu ý: Không được âm
- **Chứng từ**: Ý nghĩa: Số chứng từ kèm theo; Bắt buộc: Không
- **Quỹ thu**: Ý nghĩa: Quỹ / tài khoản nhận tiền; Bắt buộc: Có; Lưu ý: Quyết định **Loại chứng từ** Tiền mặt / Tiền gửi
- **Nội dung**: Ý nghĩa: Nội dung thu chi; Bắt buộc: Có; Lưu ý: Dùng cho thống kê Nội dung thu chi ([TỔNG QUAN MÀN HÌNH THỐNG KÊ NỘI DUNG THU CHI](/bai-viet/2026-11-07-kt-b01-0-tong-quan-man-hinh-thong-ke-noi-dung-thu-chi/))
- **Tiền giảm**: Ý nghĩa: Phần điều chỉnh công nợ không thu tiền; Bắt buộc: Không; Lưu ý: Chặn vượt Nợ cũ chỉ khi Nợ cũ > 0; không vào quỹ, chiều công nợ theo loại phiếu
- **Tổng thu**: Ý nghĩa: Tiền thu + Tiền giảm; Lưu ý: Tự tính
- **Ghi chú**: Ý nghĩa: Ghi chú; Bắt buộc: Không
- **Còn nợ**: Ý nghĩa: Công nợ sau phiếu; Lưu ý: Tự tính, chỉ xem
- **Không tính nợ**: Ý nghĩa: Không ghi công nợ ĐVGC / nguồn nhân lực; Bắt buộc: Không; Lưu ý: Chỉ ở loại ĐVGC

## 7. Kiểm tra sau khi thực hiện

- Phiếu thu được lưu với mã tự động, hiện ở **PHIẾU THU - DANH SÁCH**.
- Tồn quỹ thu tăng **Tiền thu**.
- Công nợ khách hàng giảm / công nợ NCC, đơn vị gia công tăng theo **Tổng thu** (loại Khác không đổi công nợ).

## 8. Những điều cần lưu ý

⚠️ **Chọn đúng loại phiếu ngay từ đầu.** Loại phiếu (Khách hàng / NCC / Đơn vị gia công / Khác) quyết định công nợ nào thay đổi và không đổi được khi sửa.

⚠️ **Thu tiền khách mà chọn loại Khác thì công nợ khách không giảm.** Luôn dùng loại **Khách hàng** cho tiền khách trả nợ.

⚠️ **Tiền giảm không vào quỹ, nhưng được cộng vào Tổng thu để cập nhật công nợ theo loại phiếu.** Khách hàng giảm nợ; NCC/ĐVGC có tính nợ tăng nợ như bảng [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/). Chỉ nhập khoản đã được duyệt.

⚠️ Tiền chuyển khoản đã có trong sao kê ngân hàng nên lập bằng **Giao dịch ngân hàng** ([HƯỚNG DẪN LẬP PHIẾU THU TỪ GIAO DỊCH NGÂN HÀNG](/bai-viet/2026-11-07-kt-a03-3-huong-dan-lap-phieu-thu-tu-giao-dich-ngan-hang/)) để đánh dấu giao dịch đã lập chứng từ, tránh lập trùng.

### Dưới cửa sổ báo "Chọn ngày thu" / "Vui lòng chọn quỹ thu" / "Vui lòng chọn nội dung" / "Vui lòng ghi tên người nộp" 

Nguyên nhân: thiếu trường bắt buộc.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### Dưới cửa sổ báo "Vui lòng chọn khách hàng" / "Vui lòng chọn nhà cung cấp" / "Vui lòng chọn đơn vị gia công" 

Nguyên nhân: chưa chọn đối tượng của loại phiếu.
Cách xử lý: chọn đối tượng.

### "Tiền giảm không được lớn hơn tiền nợ" 

Nguyên nhân: **TIỀN GIẢM** lớn hơn **NỢ CŨ**.
Cách xử lý: giảm **TIỀN GIẢM**.

### "CẢNH BÁO – Lỗi thêm: Số tiền thu không hợp lệ." 

Nguyên nhân: **TIỀN THU** âm.
Cách xử lý: nhập số dương.

### "CẢNH BÁO – Lỗi thêm: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **Ngày thu** thuộc kỳ đã khóa.
Cách xử lý: kiểm tra ngày thực tế. Nếu ngày đúng thuộc kỳ đã khóa, giữ ngày đó và báo kế toán trưởng xử lý mở kỳ theo [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/); không đổi ngày chỉ để vượt khóa.

### "CẢNH BÁO – Lỗi sửa: "<tên quỹ>" không đủ tồn (<số tồn>)." 

Nguyên nhân: sửa giảm tiền thu / đổi quỹ thu trong khi quỹ cũ không còn đủ tiền để trừ lại.
Cách xử lý: kiểm tra **Tồn quỹ** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)); liên hệ kế toán trưởng.

### Không tìm thấy khách hàng khi gõ 

Nguyên nhân: khách thuộc nhóm khách chưa được phân cho tài khoản, hoặc khách đã ngưng sử dụng.
Cách xử lý: nhờ quản trị phân nhóm khách; kiểm tra danh mục Khách hàng.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Khách trả bằng chuyển khoản thì chọn quỹ nào?**
Chọn quỹ là tài khoản ngân hàng nhận tiền. Nên lập bằng **Giao dịch ngân hàng** ([HƯỚNG DẪN LẬP PHIẾU THU TỪ GIAO DỊCH NGÂN HÀNG](/bai-viet/2026-11-07-kt-a03-3-huong-dan-lap-phieu-thu-tu-giao-dich-ngan-hang/)).

**Một phiếu thu được nhiều khách không?**
Không. Mỗi phiếu một đối tượng.

**Nợ cũ âm nghĩa là gì?**
Khách đang trả thừa (công ty nợ khách).

## 11. Công việc tiếp theo

```text
Lập phiếu thu
      ↓
In phiếu thu C31 cho người nộp ký (KT-A03.4)
      ↓
Đính kèm chứng từ (GEN-12)
      ↓
Kiểm tra: Tồn quỹ (KT-B02.0) · Công nợ khách hàng (KT-C06.0)
```

**Tiếp theo:** [HƯỚNG DẪN IN PHIẾU THU MẪU C31](/bai-viet/2026-11-07-kt-a03-4-huong-dan-in-phieu-thu-mau-c31/) – Hướng dẫn in phiếu thu mẫu C31.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/) – Tổng quan màn hình Phiếu thu
- [HƯỚNG DẪN LẬP PHIẾU THU TIỀN HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kt-a03-2-huong-dan-lap-phieu-thu-tien-hang-cho-muon/) – Hướng dẫn lập phiếu thu tiền hàng cho mượn
- [HƯỚNG DẪN LẬP PHIẾU THU TỪ GIAO DỊCH NGÂN HÀNG](/bai-viet/2026-11-07-kt-a03-3-huong-dan-lap-phieu-thu-tu-giao-dich-ngan-hang/) – Hướng dẫn lập phiếu thu từ giao dịch ngân hàng
- [HƯỚNG DẪN IN PHIẾU THU MẪU C31](/bai-viet/2026-11-07-kt-a03-4-huong-dan-in-phieu-thu-mau-c31/) – Hướng dẫn in phiếu thu mẫu C31
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ NỘI DUNG THU CHI](/bai-viet/2026-11-07-kt-b01-0-tong-quan-man-hinh-thong-ke-noi-dung-thu-chi/), [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/), [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/)
- Sổ tay Thiết lập danh mục – Tài khoản, quỹ; Nội dung thu chi; Khách hàng
