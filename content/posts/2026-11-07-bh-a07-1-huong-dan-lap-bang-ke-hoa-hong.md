---
title: "HƯỚNG DẪN LẬP BẢNG KÊ HOA HỒNG"
date: "2026-11-07"
summary: "Bài này hướng dẫn lập bảng kê hoa hồng cho một khách: chọn các dòng hàng đã xuất kho, nhập tỷ lệ hoa hồng, tỷ lệ trừ thuế, trừ khác, điều chỉnh Đơn giá tính HH (hoặc Số tiền chênh lệch) từng dòng để ra Tổng thanh toán."
module: "Bán hàng"
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

Bài này hướng dẫn lập bảng kê hoa hồng cho một khách: chọn các dòng hàng đã xuất kho, nhập **tỷ lệ hoa hồng**, **tỷ lệ trừ thuế**, **trừ khác**, điều chỉnh **Đơn giá tính HH** (hoặc **Số tiền chênh lệch**) từng dòng để ra **Tổng thanh toán**. Bài cũng áp dụng khi **Sửa** bảng kê (cửa sổ **CẬP NHẬT - BẢNG KÊ HOA HỒNG**).

Lưu bảng kê **chưa** chi tiền. Bảng kê phải được duyệt và xác nhận ([HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-2-huong-dan-duyet-xac-nhan-va-chi-tien-bang-ke-hoa-hong/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Bảng kê hoa hồng**.
- Hàng đã được xuất kho cho khách (phiếu xuất kho có khách hàng).
- Chuẩn bị: tỷ lệ hoa hồng, tỷ lệ trừ thuế, khoản trừ khác, đơn giá tính hoa hồng (nếu tính theo chênh lệch), thông tin chuyển khoản của người nhận.

## 2. Mở chức năng

**Bán hàng → Bảng kê hoa hồng → Thêm mới**

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ DANH SÁCH PHIẾU XUẤT KHO CHI TIẾT](/posts/2026-11-07-bh-a07-1-huong-dan-lap-bang-ke-hoa-hong/hinh-01-danh-sach-phieu-xuat-kho-chi-tiet.png)

- **Ô chọn khoảng ngày**: Ý nghĩa: Lọc theo **Ngày xuất kho**. Mặc định **từ đầu tháng tới hôm nay** (mtd)
- **Tải lại**: Ý nghĩa: Tải lại danh sách
- **Cột tick đầu dòng**: Ý nghĩa: Chọn các dòng tính hoa hồng; tick ô tiêu đề để chọn tất cả
- **Xuất Excel, Trình chọn cột, Tìm kiếm…**: Ý nghĩa: Xuất danh sách, ẩn / hiện cột, tìm theo mọi cột
- **Đồng ý / Đóng**: Ý nghĩa: Đưa dòng đã chọn vào cửa sổ / đóng không chọn

Cửa sổ chọn liệt kê **từng dòng hàng** của các phiếu xuất kho trong khoảng ngày chọn, chỉ những dòng **chưa tính hoa hồng hết** số lượng. Danh sách có thể gồm cả dòng của phiếu **khách đã trả hết** và phiếu **xuất trả nhà cung cấp** (cột **Tên rút gọn** trống) – xem lưu ý phần “Những điều cần lưu ý”. Các cột: **STT**, **Ngày xuất kho**, **Mã phiếu xuất kho**, **Tên rút gọn**, **Diễn giải/ghi chú**, **Hàng hóa**, **Tên hàng hóa**, **Đvt**, **SL xuất kho**, **Đơn giá**, **Thành tiền**, **Chú thích/Nội bộ**, **Chú thích** (ẩn sẵn: **Tên khách hàng**, **Mã khách hàng**, **Mã hàng hóa**). Tick ô đầu dòng để chọn, rồi bấm **Đồng ý**.

![Hình 2: Cửa sổ THÊM MỚI - BẢNG KÊ HOA HỒNG](/posts/2026-11-07-bh-a07-1-huong-dan-lap-bang-ke-hoa-hong/hinh-02-form-them-bang-ke-hoa-hong.png)

- **NGÀY TÍNH HOA HỒNG**: Ý nghĩa: Bắt buộc, mặc định hôm nay
- **KHÁCH HÀNG**: Ý nghĩa: Lấy theo dòng xuất đã chọn, chỉ xem
- **ĐIỆN THOẠI**: Ý nghĩa: Chỉ xem (hiện để trống)
- **HOA HỒNG**: Ý nghĩa: Tỷ lệ hoa hồng (%). ⚠️ Khách chưa có bảng kê cũ: mặc định **100%**
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **GHI CHÚ**: Ý nghĩa: Ghi chú (tuỳ chọn)
- **TRỪ THUẾ**: Ý nghĩa: Tỷ lệ trừ thuế (%) trên tiền hoa hồng
- **TRỪ KHÁC**: Ý nghĩa: Số tiền trừ thêm
- **TT.CHUYỂN KHOẢN**: Ý nghĩa: Thông tin chuyển khoản người nhận (in trên bảng kê)
- **Bảng chi tiết**: Ý nghĩa: Các dòng xuất đã chọn
- **Tổng thanh toán:**: Ý nghĩa: Số tiền hoa hồng phải trả, tự tính, **đã làm tròn xuống hàng nghìn** (chữ đỏ ở chân cửa sổ)
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Các cột trong bảng chi tiết:**

- **STT**: Nhập / tự tính: Tự đánh số
- **Hàng hóa**: Nhập / tự tính: Theo dòng xuất, khoá
- **Tên in**: Nhập / tự tính: Theo dòng xuất, sửa được
- **Đvt**: Nhập / tự tính: Khoá
- **Số lượng**: Nhập / tự tính: Số lượng xuất của dòng, khoá
- **Đơn giá chưa VAT**: Nhập / tự tính: Đơn giá xuất × (1 − chiết khấu), khoá
- **Thành tiền**: Nhập / tự tính: Đơn giá chưa VAT × Số lượng, khoá
- **Đơn giá tính HH**: Nhập / tự tính: **Nhập** – mặc định 0; không được lớn hơn **Đơn giá chưa VAT**
- **Số tiền chênh lệch**: Nhập / tự tính: **Nhập** hoặc tự tính = Đơn giá chưa VAT − Đơn giá tính HH
- **Thành tiền hoa hồng**: Nhập / tự tính: Số lượng × Số tiền chênh lệch, tự tính
- **Chú thích**: Nhập / tự tính: **Nhập** (in trên bảng kê)
- **Thao tác**: Nhập / tự tính: **Xóa dòng này**

Lúc mở cửa sổ, bảng chỉ thấy **STT**, **Hàng hóa**, **Tên in**, **Thao tác**; các cột còn lại nằm bên phải và khá hẹp (tiêu đề bị cắt, ví dụ "Đơ…", "Số t…") – kéo thanh cuộn ngang ở đáy bảng, hoặc kéo rộng mép cột để đọc (Hình 3).

![Hình 3: Các cột tính hoa hồng sau khi kéo thanh cuộn ngang](/posts/2026-11-07-bh-a07-1-huong-dan-lap-bang-ke-hoa-hong/hinh-03-cot-hoa-hong.png)

- Cột: **Số lượng**; Ví dụ trên ảnh: 1 và 2 (tổng 3)
- Cột: **Đơn giá chưa VAT**; Ví dụ trên ảnh: 164.000
- Cột: **Thành tiền**; Ví dụ trên ảnh: 164.000, 328.000 (tổng 492.000)
- Cột: **Đơn giá tính HH**; Ví dụ trên ảnh: 0 (mặc định)
- Cột: **Số tiền chênh lệch**; Ví dụ trên ảnh: 164.000 (= Đơn giá chưa VAT − 0)
- Cột: **Thành tiền hoa hồng**; Ví dụ trên ảnh: 164.000, 328.000 (tổng 492.000)
- Cột: **Tổng thanh toán**; Ví dụ trên ảnh: 492.000 × 2% × (1 − 10%) = 8.856 → làm tròn xuống **8.000**

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Bán hàng
   ↓
Bảng kê hoa hồng
   ↓
Thêm mới → chọn dòng xuất kho của 1 khách → Đồng ý
```

```text
Bảng kê hoa hồng → Thêm mới
      ↓
DANH SÁCH PHIẾU XUẤT KHO CHI TIẾT → chọn khoảng ngày
      → tick các dòng của 1 khách → Đồng ý
      ↓
THÊM MỚI - BẢNG KÊ HOA HỒNG: khách, NV, tỷ lệ của bảng kê gần nhất tự điền
      ↓
Kiểm tra HOA HỒNG, TRỪ THUẾ, TRỪ KHÁC, TT.CHUYỂN KHOẢN
      ↓
Từng dòng: nhập Đơn giá tính HH hoặc Số tiền chênh lệch (nếu tính chênh lệch)
      ↓
Kiểm tra Tổng thanh toán → Lưu lại → "Lưu thành công" → chờ duyệt
```

### Bước 1 – Chọn các dòng xuất kho

1. Vào **Bán hàng → Bảng kê hoa hồng**, bấm **Thêm mới**. Cửa sổ **DANH SÁCH PHIẾU XUẤT KHO CHI TIẾT** mở ra (Hình 1).
2. Chọn khoảng ngày xuất kho cần tính hoa hồng.
3. Lọc theo khách (gõ tên rút gọn ở **Tìm kiếm…** hoặc dòng lọc cột **Tên rút gọn**).
4. Tick các dòng cần tính hoa hồng (tick ô tiêu đề để chọn tất cả). **Chỉ chọn dòng của một khách.**
5. Bấm **Đồng ý**. Chọn lẫn nhiều khách hoặc chưa chọn dòng nào, chân cửa sổ báo **Vui lòng chỉ chọn từ 1 khách hàng.**

### Bước 2 – Kiểm tra thông tin chung

Cửa sổ **THÊM MỚI - BẢNG KÊ HOA HỒNG** mở ra (Hình 2). **KHÁCH HÀNG** lấy theo dòng đã chọn. Nếu khách đã có bảng kê trước đó, hệ thống tự điền **HOA HỒNG**, **TRỪ THUẾ**, **TT.CHUYỂN KHOẢN** theo bảng kê gần nhất của khách.

- **NGÀY TÍNH HOA HỒNG**: ngày chốt hoa hồng (in trên bảng kê "tính đến hết ngày…").
- **HOA HỒNG**: tỷ lệ hoa hồng, nhập dạng phần trăm (ví dụ 2%).

⚠️ **Khách chưa có bảng kê cũ thì ô HOA HỒNG mặc định 100%.** Không sửa thì **Tổng thanh toán** = toàn bộ tiền hàng chưa VAT (trừ thuế). Luôn nhập lại tỷ lệ đúng trước khi lưu.

- **TRỪ THUẾ**: tỷ lệ thuế trừ trên tiền hoa hồng (ví dụ 10%).
- **TRỪ KHÁC**: số tiền trừ thêm (nếu có).
- **TT.CHUYỂN KHOẢN**: tên người nhận, số tài khoản, ngân hàng.
- **GHI CHÚ**: nếu cần.

### Bước 3 – Điều chỉnh cách tính từng dòng

Mặc định **Đơn giá tính HH** = 0, **Số tiền chênh lệch** = **Đơn giá chưa VAT** → hoa hồng tính trên **toàn bộ** tiền hàng chưa VAT.

Nếu hoa hồng tính trên **phần chênh lệch** so với một giá chuẩn:

- Nhập **Đơn giá tính HH** (giá chuẩn) → **Số tiền chênh lệch** = Đơn giá chưa VAT − Đơn giá tính HH, hoặc
- Nhập thẳng **Số tiền chênh lệch** → **Đơn giá tính HH** tự tính ngược.

**Thành tiền hoa hồng** = Số lượng × Số tiền chênh lệch. Xoá dòng không tính hoa hồng bằng biểu tượng thùng rác ở cột **Thao tác**. Bảng ở chế độ sửa hàng loạt: ô vừa sửa được tô màu cho tới khi lưu.

Chuột phải vào tiêu đề bảng có **Khôi phục bố cục**, **Trình chọn cột**.

### Bước 4 – Kiểm tra tổng và lưu

1. Kiểm tra **Tổng thanh toán** ⑪ ở chân cửa sổ (cách tính ở phần “Giải thích các thông tin trên màn hình”).
2. Bấm **Lưu lại** ⑫.
   - Thiếu **NGÀY TÍNH HOA HỒNG**: tóm tắt lỗi dưới cửa sổ báo **Chọn ngày tính hoa hồng**.
   - Đơn giá tính HH lớn hơn Đơn giá chưa VAT: ô bị báo đỏ, không lưu được.
   - Hợp lệ: **Lưu thành công**, cửa sổ đóng.

### Bước 5 – In và trình duyệt

In bảng kê ([HƯỚNG DẪN IN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-3-huong-dan-in-bang-ke-hoa-hong/)) để khách / người nhận ký, sau đó trình duyệt ([HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-2-huong-dan-duyet-xac-nhan-va-chi-tien-bang-ke-hoa-hong/)).

### Sửa bảng kê

Bấm **Sửa** → **CẬP NHẬT - BẢNG KÊ HOA HỒNG**. Sửa được ngày, tỷ lệ, trừ thuế, trừ khác, thông tin chuyển khoản, đơn giá tính HH / chênh lệch, xoá dòng; không thêm được dòng mới. Nút **Lưu lại** chỉ có khi bảng kê **chưa duyệt**, **chưa xác nhận**, **chưa chi tiền**.

## 6. Giải thích các thông tin trên màn hình

- **Ngày tính hoa hồng**: Ý nghĩa: Ngày chốt hoa hồng; Bắt buộc: Có; Lưu ý: Sinh mã phiếu; in trên bảng kê
- **Khách hàng**: Ý nghĩa: Khách được tính hoa hồng; Bắt buộc: Có; Lưu ý: Khoá
- **Hoa hồng**: Ý nghĩa: Tỷ lệ hoa hồng; Lưu ý: Mặc định theo bảng kê gần nhất của khách, nếu không có là 100%
- **Trừ thuế**: Ý nghĩa: Tỷ lệ trừ thuế; Lưu ý: Mặc định theo bảng kê gần nhất, nếu không có là 0%
- **Trừ khác**: Ý nghĩa: Số tiền trừ thêm; Lưu ý: Mặc định 0
- **TT.Chuyển khoản**: Ý nghĩa: Thông tin chuyển khoản người nhận; Bắt buộc: Không; Lưu ý: In trên bảng kê
- **Ghi chú**: Ý nghĩa: Ghi chú; Bắt buộc: Không
- **Số lượng**: Ý nghĩa: Số lượng của dòng xuất; Lưu ý: Khoá
- **Đơn giá chưa VAT**: Ý nghĩa: Đơn giá xuất × (1 − chiết khấu); Lưu ý: Khoá
- **Thành tiền**: Ý nghĩa: Đơn giá chưa VAT × Số lượng; Lưu ý: Tiền hàng chưa VAT
- **Đơn giá tính HH**: Ý nghĩa: Giá chuẩn để tính chênh lệch; Lưu ý: ≤ Đơn giá chưa VAT
- **Số tiền chênh lệch**: Ý nghĩa: Đơn giá chưa VAT − Đơn giá tính HH; Lưu ý: Sửa được
- **Thành tiền hoa hồng**: Ý nghĩa: Số lượng × Số tiền chênh lệch; Lưu ý: Máy chủ tính lại khi lưu
- **Tổng thanh toán**: Ý nghĩa: Làm tròn xuống hàng nghìn của: (Tổng thành tiền hoa hồng × Hoa hồng × (1 − Trừ thuế)) − Trừ khác; Lưu ý: Hiện ở chân cửa sổ và cột **Tổng thanh toán** của danh sách; là số tiền chi

**Ví dụ:** tổng **Thành tiền hoa hồng** 50.000.000 đ, **HOA HỒNG** 2%, **TRỪ THUẾ** 10%, **TRỪ KHÁC** 0 → 50.000.000 × 2% × 90% = 900.000 đ → **Tổng thanh toán** 900.000 đ.

**Ví dụ có làm tròn (bảng kê thử):** 492.000 × 2% × 90% = 8.856 đ → **Tổng thanh toán** trên cửa sổ **8.000** đ.

## 7. Kiểm tra sau khi thực hiện

- Bảng kê được lưu với mã tự động **HH…**, chờ duyệt.
- Các dòng xuất đã tính hết số lượng không còn hiện ở cửa sổ chọn khi lập bảng kê sau.
- Tồn kho, công nợ khách, quỹ **không** thay đổi.

## 8. Những điều cần lưu ý

⚠️ **Kiểm tra ô HOA HỒNG trước khi lưu.** Khách lần đầu có bảng kê thì tỷ lệ mặc định **100%** – nếu quên sửa, tổng thanh toán bằng toàn bộ tiền hàng.

⚠️ Mặc định hoa hồng tính trên **toàn bộ tiền hàng chưa VAT**. Chỉ khi nhập **Đơn giá tính HH** / **Số tiền chênh lệch** thì mới tính theo chênh lệch.

⚠️ **Tổng thanh toán** được làm tròn **xuống** hàng nghìn (8.856 → 8.000). **Bản in bảng kê lại ghi TỔNG THANH TOÁN 8.856** (chưa làm tròn) nhưng dòng bằng chữ "tám nghìn đồng" – số chi tiền đúng là **8.000** như cửa sổ và phiếu chi ([HƯỚNG DẪN IN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-3-huong-dan-in-bang-ke-hoa-hong/)). Đối chiếu kỹ trước khi gửi khách ký.

⚠️ Cửa sổ chọn dòng xuất có thể liệt kê cả dòng của phiếu **khách đã trả hết** và phiếu **xuất trả nhà cung cấp** (không có khách) – chỉ tick dòng hàng khách thực nhận.

⚠️ Chỉ chọn chứng từ thuộc hệ thống chi nhánh đang truy cập. hệ thống chính thức dùng tên miền, dữ liệu và tài khoản riêng; danh sách trên hệ thống hiện tại không lấy chứng từ từ tên miền chi nhánh khác. Nếu có nhiều mã chi nhánh trong dữ liệu hiện tại, đối chiếu nguồn dữ liệu với người phụ trách trước khi chọn.

⚠️ Bấm **Đóng** không hỏi lại, dữ liệu đang nhập bị mất.

### Chân cửa sổ chọn báo "Vui lòng chỉ chọn từ 1 khách hàng." 

Nguyên nhân: đã tick dòng của nhiều khách, hoặc chưa tick dòng nào.
Cách xử lý: lọc theo **Tên rút gọn**, chỉ tick dòng của một khách rồi **Đồng ý**.

### "Chọn ngày tính hoa hồng" 

Nguyên nhân: để trống **NGÀY TÍNH HOA HỒNG**.
Cách xử lý: chọn ngày rồi **Lưu lại**.

### Ô Đơn giá tính HH báo đỏ, không lưu được 

Nguyên nhân: **Đơn giá tính HH** lớn hơn **Đơn giá chưa VAT** của dòng.
Cách xử lý: nhập lại giá nhỏ hơn hoặc bằng đơn giá chưa VAT.

### "CẢNH BÁO – Lỗi thêm: Tổng số lượng giảm (x) vượt mức cho phép (y)" 

Nguyên nhân: dòng xuất này đã được tính hoa hồng ở bảng kê khác, cộng thêm thì vượt số lượng xuất (câu báo dùng chữ "giảm" nhưng là số lượng tính hoa hồng).
Cách xử lý: xoá dòng đó khỏi bảng kê; kiểm tra bảng kê cũ của khách.

### Không thấy dòng xuất cần tính trong cửa sổ chọn 

Nguyên nhân: khoảng ngày chưa chứa ngày xuất, hoặc dòng đã được tính hoa hồng hết ở bảng kê khác.
Cách xử lý: mở rộng khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)); tra các bảng kê cũ của khách.

### "CẢNH BÁO – Lỗi sửa: Đã duyệt." / "Đã xác nhận." / "Đã chi tiền." 

Nguyên nhân: bảng kê đã qua bước duyệt / xác nhận / chi tiền.
Cách xử lý: **Đóng**; nhờ **Hủy duyệt** ([HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-2-huong-dan-duyet-xac-nhan-va-chi-tien-bang-ke-hoa-hong/)) nếu cần sửa.

## 10. Câu hỏi thường gặp

**Tỷ lệ HOA HỒNG nhập 2 hay 0,02?**
Ô định dạng phần trăm: nhập theo hiển thị **2%**. Kiểm tra lại **Tổng thanh toán** sau khi nhập.

**Muốn tính hoa hồng một phần số lượng của dòng xuất được không?**
Không trên cửa sổ: cột **Số lượng** khoá theo số lượng xuất của dòng.

**Khách đổi tỷ lệ hoa hồng thì sao?**
Sửa ô **HOA HỒNG** trên bảng kê mới; lần sau hệ thống tự điền theo tỷ lệ mới nhất.

## 11. Công việc tiếp theo

```text
Lập bảng kê hoa hồng
        ↓
In bảng kê (BH-A07.3) → ký xác nhận
        ↓
Duyệt phiếu → Xác nhận → Chi tiền (BH-A07.2)
```

**Tiếp theo:** [HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-2-huong-dan-duyet-xac-nhan-va-chi-tien-bang-ke-hoa-hong/) – Hướng dẫn duyệt, xác nhận và chi tiền bảng kê hoa hồng.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-0-tong-quan-man-hinh-bang-ke-hoa-hong/) – Tổng quan màn hình Bảng kê hoa hồng
- [HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-2-huong-dan-duyet-xac-nhan-va-chi-tien-bang-ke-hoa-hong/) – Hướng dẫn duyệt, xác nhận và chi tiền bảng kê hoa hồng
- [HƯỚNG DẪN IN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-3-huong-dan-in-bang-ke-hoa-hong/) – Hướng dẫn in bảng kê hoa hồng
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
