---
title: "HƯỚNG DẪN LẬP PHIẾU CHI"
date: "2026-11-07"
summary: "Phiếu chi ghi nhận tiền ra khỏi quỹ."
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

Phiếu chi ghi nhận tiền ra khỏi quỹ. Bài này hướng dẫn lập 4 loại phiếu chi nhập tay:

- **Nhà cung cấp**: thanh toán tiền hàng, dịch vụ cho NCC.
- **Đơn vị gia công**: thanh toán tiền gia công (có thể kèm nguồn nhân lực).
- **Khách hàng**: chi tiền cho khách (hoàn tiền thừa, ứng tiền…).
- **Khác**: chi không gắn đối tượng công nợ (chi phí điện nước, vận chuyển, lương…).

Trả lệnh vay xem [HƯỚNG DẪN LẬP PHIẾU CHI TRẢ LỆNH VAY](/bai-viet/2026-11-07-kt-a04-2-huong-dan-lap-phieu-chi-tra-lenh-vay/); trả tiền hàng mua mượn xem [HƯỚNG DẪN LẬP PHIẾU CHI TIỀN HÀNG MUA MƯỢN](/bai-viet/2026-11-07-kt-a04-3-huong-dan-lap-phieu-chi-tien-hang-mua-muon/). Bài cũng áp dụng khi **Sửa** phiếu (cửa sổ **CẬP NHẬT - PHIẾU CHI**).

cửa sổ phiếu chi giống cửa sổ phiếu thu ([HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/)). Bài này chỉ nêu chi tiết những chỗ **khác**: **NGÀY HẠCH TOÁN**, **GHI CHÚ** bắt buộc, **ĐỐI TƯỢNG TẬP HỢP CHI PHÍ**, **SỐ TÀI KHOẢN** của NCC, ô **Không tính nợ** ở loại **Khách hàng**, chiều công nợ ngược với phiếu thu, và kiểm tra tồn quỹ.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** màn hình **Phiếu chi**.
- Quỹ chi đã được phân cho tài khoản của bạn và **còn đủ tồn** cho số tiền chi (xem **Tồn quỹ** [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)).
- **Ngày chi** thuộc kỳ kế toán chưa khóa ([TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/)).
- Chuẩn bị: đối tượng nhận tiền, số tiền, quỹ / tài khoản chi, nội dung chi, số chứng từ (số hoá đơn, số UNC…), nội dung diễn giải ghi vào **GHI CHÚ**.

## 2. Mở chức năng

**Kế toán → Phiếu chi → Thêm mới → Nhà cung cấp / Đơn vị gia công / Khách hàng / Khác**

## 3. Nhận biết màn hình

![Hình 1: cửa sổ THÊM MỚI - PHIẾU CHI loại Nhà cung cấp](/posts/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/hinh-01-form-phieu-chi-nha-cung-cap.png)

- **NGÀY CHI**: Ý nghĩa: Bắt buộc. Mặc định hôm nay
- **Ô đối tượng: NHÀ CUNG CẤP + SỐ TÀI KHOẢN**: Ý nghĩa: Ô hiện theo loại phiếu (bảng dưới; loại ĐVGC xem Hình 2)
- **ĐIỆN THOẠI, NỢ CŨ**: Ý nghĩa: Tự điền khi chọn đối tượng; **NỢ CŨ** chỉ xem
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **NGƯỜI NHẬN, ĐỊA CHỈ**: Ý nghĩa: **NGƯỜI NHẬN** bắt buộc; tự điền khi chọn đối tượng (NCC: tên rút gọn), sửa được
- **TIỀN CHI**: Ý nghĩa: Số tiền chi ra khỏi quỹ
- **CHỨNG TỪ**: Ý nghĩa: Số chứng từ kèm theo
- **QUỸ CHI**: Ý nghĩa: Bắt buộc. Quỹ / tài khoản chi tiền
- **NỘI DUNG**: Ý nghĩa: Bắt buộc. Nội dung thu chi, hiện *mã, tên*
- **TIỀN GIẢM**: Ý nghĩa: Phần trừ công nợ không chi bằng tiền
- **TỔNG CHI**: Ý nghĩa: Tự tính = Tiền chi + Tiền giảm, chỉ xem
- **GHI CHÚ**: Ý nghĩa: **Bắt buộc**. Nội dung chi tiền
- **NGÀY HẠCH TOÁN**: Ý nghĩa: **Bắt buộc**. Mặc định hôm nay. Ngày ghi sổ cái
- **ĐỐI TƯỢNG TẬP HỢP CHI PHÍ**: Ý nghĩa: Không bắt buộc. Gắn khoản chi vào đối tượng tính giá thành (chữ mờ *Chọn đối tượng tập hợp chi phí*)
- **CÒN NỢ**: Ý nghĩa: Tự tính, chỉ xem
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Ô đối tượng hiện theo loại phiếu:**

- **Nhà cung cấp**: Ô đối tượng: **NHÀ CUNG CẤP**, **SỐ TÀI KHOẢN**; Bắt buộc: NCC: Có; Thêm: **CÒN NỢ** = Nợ cũ − Tổng chi
- **Đơn vị gia công**: Ô đối tượng: **ĐƠN VỊ GIA CÔNG**, **NGUỒN NHÂN LỰC**; Bắt buộc: ĐVGC: Có; Thêm: **CÒN NỢ** = Nợ cũ − Tổng chi
- **Khách hàng**: Ô đối tượng: **KHÁCH HÀNG** (chọn được); Bắt buộc: Có; Thêm: Ô tick **Không tính nợ** ở chân cửa sổ; tên nhóm khách màu đỏ cạnh nút; **CÒN NỢ** = Nợ cũ + Tổng chi
- **Khác**: Ô đối tượng: **KHÁCH HÀNG** (bị khoá, để trống); Bắt buộc: Không; Thêm: **CÒN NỢ** trống

![Hình 2: cửa sổ THÊM MỚI - PHIẾU CHI loại Đơn vị gia công](/posts/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/hinh-02-form-phieu-chi-don-vi-gia-cong.png)

- **ĐƠN VỊ GIA CÔNG**: Ý nghĩa: Bắt buộc. Chiếm chỗ **NHÀ CUNG CẤP** + **SỐ TÀI KHOẢN** (loại này không có số tài khoản)
- **NGUỒN NHÂN LỰC**: Ý nghĩa: Không bắt buộc. Nằm cạnh **NGÀY HẠCH TOÁN**, chỗ của ô ⑭ ở loại NCC
- **ĐỐI TƯỢNG TẬP HỢP CHI PHÍ**: Ý nghĩa: Dời xuống dòng cuối
- **CÒN NỢ**: Ý nghĩa: Nợ cũ − Tổng chi. Hình 2 (PC00113321): nợ cũ 0, chi 150.000 → **−150.000** (công ty ứng trước cho ĐVGC)

So với phiếu thu: loại **Đơn vị gia công** của phiếu chi **không** có ô **Không tính nợ** (phiếu thu thì có); loại **Khách hàng** của phiếu chi **có** ô này.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kế toán
   ↓
Phiếu chi
   ↓
Thêm mới ──► chọn loại phiếu chi
```

```text
Phiếu chi → Thêm mới → chọn loại
      ↓
Nhập Ngày chi, chọn đối tượng → tự điền Người nhận, Địa chỉ, Điện thoại, Nợ cũ
(NCC: chọn thêm Số tài khoản nhận tiền)
      ↓
Nhập Tiền chi, (Tiền giảm), Chứng từ
Chọn Quỹ chi, Nội dung · nhập Ghi chú · kiểm tra Ngày hạch toán
(tuỳ chọn) Đối tượng tập hợp chi phí
      ↓
Lưu lại ── báo đỏ / cảnh báo? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → tồn quỹ giảm Tiền chi · công nợ đổi theo Tổng chi
      ↓
(Cuối kỳ) hạch toán tự động → lên sổ theo Ngày hạch toán
```

### Bước 1 – Mở cửa sổ thêm mới

Vào **Kế toán → Phiếu chi**, bấm **Thêm mới** → chọn **Nhà cung cấp** (hoặc **Đơn vị gia công**, **Khách hàng**, **Khác**). cửa sổ **THÊM MỚI - PHIẾU CHI** mở ra (Hình 1 – loại NCC; Hình 2 – loại ĐVGC).

### Bước 2 – Nhập ngày và chọn đối tượng

- **NGÀY CHI**: ngày chi tiền.
- Ô đối tượng: gõ mã / tên để tìm rồi chọn.
  - **Nhà cung cấp**: hệ thống điền **NGƯỜI NHẬN** (tên rút gọn), **ĐỊA CHỈ**, **ĐIỆN THOẠI**, **NỢ CŨ**. Chọn **SỐ TÀI KHOẢN** nhận tiền của NCC (danh sách lấy từ danh mục Nhà cung cấp; NCC chưa khai tài khoản thì báo *Không có dữ liệu*) – cần khi in ủy nhiệm chi ([HƯỚNG DẪN IN PHIẾU CHI C31 VÀ ỦY NHIỆM CHI](/bai-viet/2026-11-07-kt-a04-4-huong-dan-in-phieu-chi-c31-va-uy-nhiem-chi/)).
  - **Đơn vị gia công**: điền **NGƯỜI NHẬN** (tên đơn vị gia công), **ĐỊA CHỈ**, **ĐIỆN THOẠI**, **NỢ CŨ**. Chọn thêm **NGUỒN NHÂN LỰC**  (Hình 2, cạnh **NGÀY HẠCH TOÁN**) nếu khoản chi trả cho nguồn nhân lực.
  - **Khách hàng**: danh sách hiện *id, mã khách, tên rút gọn, tên khách*. Chọn xong, hệ thống điền **NGƯỜI NHẬN**, **ĐỊA CHỈ**, **ĐIỆN THOẠI**, **NỢ CŨ** và hiện tên nhóm khách màu đỏ cạnh nút **Lưu lại**.
  - **Khác**: không chọn đối tượng; tự gõ **NGƯỜI NHẬN**.
- Ô **ĐỊA CHỈ** hiện chữ *null, null* khi danh mục chưa khai địa chỉ (Hình 1): xoá hoặc gõ lại, vì địa chỉ in nguyên lên phiếu C31.

### Bước 3 – Nhập số tiền

- **TIỀN CHI**: số tiền thực chi. Không được lớn hơn tồn hiện tại của quỹ chi.
- **TIỀN GIẢM**  (tuỳ chọn): phần trừ công nợ không chi bằng tiền. Hệ thống **không** kiểm tra tiền giảm với nợ cũ.
- Kiểm tra **TỔNG CHI** ⑪ và **CÒN NỢ** ⑮ – hai ô tự tính lại khi gõ tiền. Ví dụ Hình 1: tiền chi 1.000.000, tiền giảm 20.000 → tổng chi 1.020.000; nợ cũ 1.800.000 → còn nợ 780.000.

### Bước 4 – Chọn quỹ, nội dung, ghi chú, ngày hạch toán

- **QUỸ CHI**: quỹ tiền mặt hoặc tài khoản ngân hàng chi tiền. Danh sách chỉ có các quỹ bạn được phân.
- **NỘI DUNG**: gõ mã hoặc tên nội dung để tìm rồi chọn. Ví dụ: *43, Chi trả nợ mua ván* (trả NCC, Hình 1), *46, Chi trả nợ gia công* (ĐVGC, Hình 2), *CHIKHAC* (chi khác). Gõ tên đối tượng (*NCC*) hay số tài khoản (*331*) sẽ không ra. Với loại **Khác**, nội dung quyết định tài khoản chi phí khi lên sổ.
- **NGÀY HẠCH TOÁN** ⑬: ngày phiếu lên sổ cái. Mặc định hôm nay; sửa lại nếu khác **Ngày chi** (ví dụ chi ngày 31 nhưng hạch toán ngày 01 tháng sau).
- **CHỨNG TỪ**: nhập nếu có.

### Bước 5 – (Tuỳ chọn) Đối tượng tập hợp chi phí

Chọn **ĐỐI TƯỢNG TẬP HỢP CHI PHÍ** ⑭ nếu khoản chi là chi phí sản xuất cần tính vào giá thành (sổ tay Giá thành). Bấm dấu **×** trong ô để bỏ chọn.

### Bước 6 – (Loại Khách hàng) Không tính nợ

Tick **Không tính nợ** ở chân cửa sổ nếu khoản chi cho khách **không** được cộng vào công nợ khách. Tiền vẫn ra khỏi quỹ.

### Bước 7 – Bấm Lưu lại

Bấm **Lưu lại** ⑯.

- Thiếu thông tin: ô thiếu có viền đỏ, lời nhắc hiện dưới ô và trong danh sách lỗi ở cuối cửa sổ: **Chọn ngày chi**, **Vui lòng chọn nhà cung cấp** / **Vui lòng chọn đơn vị gia công** / **Vui lòng chọn khách hàng**, **Vui lòng ghi tên đối tượng chi**, **Vui lòng chọn quỹ chi**, **Vui lòng chọn nội dung**, **Vui lòng nhập nội dung chi tiền**, **Chọn ngày hạch toán**.
- Quỹ không đủ tiền: thông báo **CẢNH BÁO – Lỗi thêm: "<tên quỹ>" không đủ tồn (<số tồn>).**
- Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại.

### Bước 8 – Kiểm tra

Phiếu mới hiện trong danh sách. Tồn quỹ chi giảm **Tiền chi** (xem **Tồn quỹ** [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)); công nợ đối tượng thay đổi theo **Tổng chi** (bảng phần “Trình tự công việc” của [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/)).

### Sửa phiếu

Bấm **Sửa** → cửa sổ **CẬP NHẬT - PHIẾU CHI**. Sửa được các ô như khi lập. Khi lưu, hệ thống cộng lại số tiền cũ vào quỹ cũ, hoàn công nợ cũ, rồi trừ số tiền mới (quỹ mới phải đủ tồn) và ghi công nợ mới. Phiếu cũ chưa có ngày hạch toán thì ô **NGÀY HẠCH TOÁN** hiện ngày tạo phiếu.

## 6. Giải thích các thông tin trên màn hình

- **Ngày chi**: Ý nghĩa: Ngày chi tiền; Bắt buộc: Có; Lưu ý: Lọc danh sách, kiểm tra khoá sổ, xếp thứ tự công nợ
- **Nhà cung cấp**: Ý nghĩa: NCC nhận tiền; Bắt buộc: Có (loại NCC); Lưu ý: Công nợ NCC giảm Tổng chi
- **Số tài khoản**: Ý nghĩa: Tài khoản ngân hàng của NCC nhận tiền; Bắt buộc: Không; Lưu ý: Chỉ loại NCC; in lên UNC
- **Đơn vị gia công**: Ý nghĩa: ĐVGC nhận tiền; Bắt buộc: Có (loại ĐVGC); Lưu ý: Công nợ ĐVGC giảm Tổng chi
- **Nguồn nhân lực**: Ý nghĩa: Nguồn nhân lực nhận tiền; Bắt buộc: Không; Lưu ý: Chỉ loại ĐVGC; công nợ nguồn nhân lực giảm Tổng chi
- **Khách hàng**: Ý nghĩa: Khách nhận tiền; Bắt buộc: Có (loại Khách hàng); Lưu ý: Công nợ khách **tăng** Tổng chi, trừ khi **Không tính nợ**
- **Điện thoại**: Ý nghĩa: Điện thoại người nhận; Bắt buộc: Không; Lưu ý: Tự điền
- **Nợ cũ**: Ý nghĩa: Công nợ của đối tượng trước phiếu này; Lưu ý: Tự tính, chỉ xem
- **Mã phiếu**: Ý nghĩa: Mã phiếu chi; Lưu ý: Tự tạo khi lưu (PC + 8 chữ số)
- **Người nhận**: Ý nghĩa: Tên người / đơn vị nhận tiền; Bắt buộc: Có; Lưu ý: In trên phiếu C31
- **Địa chỉ**: Ý nghĩa: Địa chỉ người nhận; Bắt buộc: Không; Lưu ý: Tự điền
- **Tiền chi**: Ý nghĩa: Số tiền ra khỏi quỹ; Bắt buộc: Nên nhập; Lưu ý: Không được âm; ≤ tồn quỹ
- **Chứng từ**: Ý nghĩa: Số chứng từ kèm theo; Bắt buộc: Không
- **Quỹ chi**: Ý nghĩa: Quỹ / tài khoản chi tiền; Bắt buộc: Có; Lưu ý: Quyết định **Loại chứng từ** Tiền mặt / Tiền gửi và TK Có khi lên sổ
- **Nội dung**: Ý nghĩa: Nội dung thu chi; Bắt buộc: Có; Lưu ý: Thống kê Nội dung thu chi ([TỔNG QUAN MÀN HÌNH THỐNG KÊ NỘI DUNG THU CHI](/bai-viet/2026-11-07-kt-b01-0-tong-quan-man-hinh-thong-ke-noi-dung-thu-chi/)); TK chi phí khi lên sổ
- **Tiền giảm**: Ý nghĩa: Trừ công nợ không chi tiền; Bắt buộc: Không; Lưu ý: Không trừ quỹ, không lên sổ cái
- **Tổng chi**: Ý nghĩa: Tiền chi + Tiền giảm; Lưu ý: Tự tính
- **Ghi chú**: Ý nghĩa: Diễn giải khoản chi; Bắt buộc: Có
- **Ngày hạch toán**: Ý nghĩa: Ngày ghi sổ cái; Bắt buộc: Có; Lưu ý: Mặc định hôm nay
- **Đối tượng tập hợp chi phí**: Ý nghĩa: Đối tượng tính giá thành; Bắt buộc: Không; Lưu ý: Phiếu đã vào kỳ giá thành kết chuyển thì không xoá được
- **Còn nợ**: Ý nghĩa: Công nợ sau phiếu; Lưu ý: Tự tính, chỉ xem
- **Không tính nợ**: Ý nghĩa: Không cộng vào công nợ khách; Bắt buộc: Không; Lưu ý: Chỉ loại Khách hàng

## 7. Kiểm tra sau khi thực hiện

- Phiếu chi được lưu với mã tự động, hiện ở **PHIẾU CHI - DANH SÁCH**.
- Tồn quỹ chi giảm **Tiền chi**.
- Công nợ NCC / ĐVGC / nguồn nhân lực giảm, công nợ khách tăng (trừ khi **Không tính nợ**) theo **Tổng chi**; loại Khác không đổi công nợ.
- Sổ cái chưa đổi; phiếu lên sổ theo **Ngày hạch toán** khi chạy hạch toán tự động ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/)).

## 8. Những điều cần lưu ý

⚠️ **Chọn đúng loại phiếu ngay từ đầu.** Loại phiếu quyết định công nợ nào thay đổi và không đổi được khi sửa.

⚠️ **Trả tiền NCC mà chọn loại Khác thì công nợ NCC không giảm** và khi lên sổ sẽ ghi vào chi phí thay vì 331. Luôn dùng loại **Nhà cung cấp** cho tiền trả NCC.

⚠️ **Chi cho khách làm tăng công nợ khách** (khách nợ lại số tiền đó). Nếu là khoản chi không đòi lại (ví dụ quà tặng), tick **Không tính nợ**.

⚠️ **Ngày hạch toán** quyết định kỳ lên sổ; **Ngày chi** quyết định kiểm tra khoá sổ và tồn quỹ. Hai ngày khác tháng thì kiểm tra kỹ.

⚠️ Hệ thống kiểm tra tồn quỹ **hiện tại**, không theo ngày chi. Lập phiếu chi lùi ngày vẫn có thể làm tồn quỹ tại ngày đó bị âm trên thống kê.

### Dưới cửa sổ báo "Chọn ngày chi" / "Chọn ngày hạch toán" / "Vui lòng chọn quỹ chi" / "Vui lòng chọn nội dung" 

Nguyên nhân: thiếu trường bắt buộc.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### Dưới cửa sổ báo "Vui lòng ghi tên đối tượng chi" / "Vui lòng nhập nội dung chi tiền" 

Nguyên nhân: để trống **NGƯỜI NHẬN** hoặc **GHI CHÚ**.
Cách xử lý: nhập tên người nhận và diễn giải khoản chi.

### Dưới cửa sổ báo "Vui lòng chọn nhà cung cấp" / "Vui lòng chọn đơn vị gia công" / "Vui lòng chọn khách hàng" 

Nguyên nhân: chưa chọn đối tượng của loại phiếu.
Cách xử lý: chọn đối tượng.

### "CẢNH BÁO – Lỗi thêm: "<tên quỹ>" không đủ tồn (<số tồn>)." 

Nguyên nhân: **TIỀN CHI** lớn hơn tồn hiện tại của **QUỸ CHI**.
Cách xử lý: kiểm tra **Tồn quỹ** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)); kiểm tra đúng quỹ và số thực chi. Chỉ đổi quỹ/số tiền hoặc ghi khoản thu/chuyển bổ sung khi đúng giao dịch thực tế đã được duyệt; không lập chứng từ chỉ để vượt kiểm tra tồn. Khi sửa phiếu, câu báo bắt đầu bằng **Lỗi sửa**.

### "CẢNH BÁO – Lỗi thêm: Số tiền chi không hợp lệ." 

Nguyên nhân: **TIỀN CHI** âm.
Cách xử lý: nhập số dương.

### "CẢNH BÁO – Lỗi thêm: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **Ngày chi** thuộc kỳ đã khóa.
Cách xử lý: kiểm tra ngày thực tế. Nếu ngày đúng thuộc kỳ đã khóa, giữ ngày đó và báo kế toán trưởng xử lý mở kỳ theo [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/); không đổi ngày chỉ để vượt khóa.

### Không tìm thấy khách hàng / quỹ khi gõ 

Nguyên nhân: khách thuộc nhóm khách chưa được phân cho tài khoản, quỹ chưa được phân, hoặc đối tượng đã ngưng sử dụng.
Cách xử lý: nhờ quản trị phân nhóm khách / phân quỹ; kiểm tra danh mục.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Thanh toán NCC bằng chuyển khoản thì làm gì?**
Lập phiếu chi loại **Nhà cung cấp**, **QUỸ CHI** là tài khoản ngân hàng, chọn **SỐ TÀI KHOẢN** của NCC, rồi in UNC đúng mẫu ngân hàng ([HƯỚNG DẪN IN PHIẾU CHI C31 VÀ ỦY NHIỆM CHI](/bai-viet/2026-11-07-kt-a04-4-huong-dan-in-phieu-chi-c31-va-uy-nhiem-chi/)).

**NCC giảm cho một khoản khi thanh toán, nhập thế nào?**
**TIỀN CHI** = số thực trả, **TIỀN GIẢM** = số được giảm. Công nợ NCC giảm cả hai, quỹ chỉ giảm số thực trả.

**Nợ cũ NCC âm nghĩa là gì?**
Công ty đang trả thừa / NCC đang nợ lại công ty.

**Một phiếu chi trả được nhiều NCC không?**
Không. Mỗi phiếu một đối tượng.

## 11. Công việc tiếp theo

```text
Lập phiếu chi
      ↓
In phiếu chi C31 cho người nhận ký / in UNC gửi ngân hàng (KT-A04.4)
      ↓
Đính kèm chứng từ (GEN-12)
      ↓
Kiểm tra: Tồn quỹ (KT-B02.0) · Công nợ NCC (KT-C05.0)
```

**Tiếp theo:** [HƯỚNG DẪN IN PHIẾU CHI C31 VÀ ỦY NHIỆM CHI](/bai-viet/2026-11-07-kt-a04-4-huong-dan-in-phieu-chi-c31-va-uy-nhiem-chi/) – Hướng dẫn in phiếu chi C31 và ủy nhiệm chi.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/) – Tổng quan màn hình Phiếu chi
- [HƯỚNG DẪN LẬP PHIẾU CHI TRẢ LỆNH VAY](/bai-viet/2026-11-07-kt-a04-2-huong-dan-lap-phieu-chi-tra-lenh-vay/) – Hướng dẫn lập phiếu chi trả lệnh vay
- [HƯỚNG DẪN LẬP PHIẾU CHI TIỀN HÀNG MUA MƯỢN](/bai-viet/2026-11-07-kt-a04-3-huong-dan-lap-phieu-chi-tien-hang-mua-muon/) – Hướng dẫn lập phiếu chi tiền hàng mua mượn
- [HƯỚNG DẪN IN PHIẾU CHI C31 VÀ ỦY NHIỆM CHI](/bai-viet/2026-11-07-kt-a04-4-huong-dan-in-phieu-chi-c31-va-uy-nhiem-chi/) – Hướng dẫn in phiếu chi C31 và ủy nhiệm chi
- [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/) – Hướng dẫn lập phiếu thu (cửa sổ tương tự)
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ NỘI DUNG THU CHI](/bai-viet/2026-11-07-kt-b01-0-tong-quan-man-hinh-thong-ke-noi-dung-thu-chi/), [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/), [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ GIA CÔNG](/bai-viet/2026-11-07-kt-c02-0-tong-quan-man-hinh-thong-ke-cong-no-gia-cong/), [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NHÀ CUNG CẤP](/bai-viet/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/)
- Sổ tay Thiết lập danh mục – Tài khoản, quỹ; Nội dung thu chi; Nhà cung cấp
- Sổ tay Giá thành – Đối tượng tập hợp chi phí, Kỳ tính giá thành
