---
title: "HƯỚNG DẪN LẬP PHIẾU THU TỪ GIAO DỊCH NGÂN HÀNG"
date: "2026-11-07"
summary: "Hồng Nghi ERP kết nối với ngân hàng ACB, Sacombank, Vietcombank để lấy danh sách giao dịch tiền vào tài khoản công ty."
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

Hồng Nghi ERP kết nối với ngân hàng **ACB**, **Sacombank**, **Vietcombank** để lấy danh sách giao dịch tiền vào tài khoản công ty. Từ một giao dịch, kế toán bấm **Lập phiếu**: hệ thống tự điền ngày, số chứng từ, người chuyển, nội dung, số tiền và quỹ thu (tài khoản nhận tiền).

Cách này giúp:

- Không gõ lại số tiền, mã giao dịch → tránh sai lệch.
- Biết giao dịch nào **Chưa lập** / **Đang lập** / **Đã lập** phiếu thu, tránh lập trùng.
- Một giao dịch có thể tách thành **nhiều phiếu thu** (ví dụ khách chuyển một lần trả cho nhiều hoá đơn) cho đến khi hết số tiền.

Thao tác dùng chung liên quan: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** màn hình **Phiếu thu**.
- Kết nối ngân hàng đã được quản trị cấu hình (ACB / Sacombank / Vietcombank).
- Trong danh mục **Tài khoản, quỹ** có quỹ với **số tài khoản trùng** số tài khoản nhận tiền của giao dịch, và quỹ đó được phân cho tài khoản của bạn – nếu không, ô **QUỸ THU** sẽ trống và bị khoá.
- **Ngày giao dịch** thuộc kỳ kế toán chưa khóa.

## 2. Mở chức năng

**Kế toán → Phiếu thu → Thêm mới → Giao dịch ngân hàng**

## 3. Nhận biết màn hình

- **Ô chọn ngân hàng**: Ý nghĩa: **ACB** (mặc định) / **Sacombank** / **Vietcombank**
- **Ô chọn khoảng ngày, Tải lại**: Ý nghĩa: Lọc theo ngày giao dịch, mặc định **Hôm nay**
- **Bảng giao dịch**: Ý nghĩa: Các cột ở bảng dưới
- **Cột Chức năng**: Ý nghĩa: Nút **Lập phiếu** (ẩn khi giao dịch **Đã lập**)
- **Cột Mã phiếu nội bộ**: Ý nghĩa: Mã các phiếu thu đã lập từ giao dịch; bấm để xem phiếu

**Các cột trong bảng giao dịch:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày**: Ý nghĩa: Ngày giao dịch
- **Số CT gốc**: Ý nghĩa: Mã giao dịch của ngân hàng
- **Ngân hàng chuyển tiền, Tài khoản chuyển tiền**: Ý nghĩa: Bên chuyển
- **Loại chứng từ**: Ý nghĩa: **Ghi có** (tiền vào) / **Ghi nợ** (tiền ra)
- **Nộp vào ngân hàng, Nộp vào tài khoản**: Ý nghĩa: Tài khoản công ty nhận tiền
- **Số tiền**: Ý nghĩa: Số tiền giao dịch
- **Nội dung chuyển khoản**: Ý nghĩa: Nội dung người chuyển ghi
- **Trạng thái lập CT**: Ý nghĩa: **Chưa lập** / **Đang lập** (đã lập một phần) / **Đã lập** (đủ số tiền)
- **Chức năng**: Ý nghĩa: Nút **Lập phiếu**
- **Mã phiếu nội bộ**: Ý nghĩa: Mã phiếu thu đã lập
- **Tên quỹ**: Ý nghĩa: Quỹ của phiếu thu đã lập
- **Số tiền Thu/Chi**: Ý nghĩa: Tổng tiền các phiếu đã lập từ giao dịch
- **So khớp dữ liệu**: Ý nghĩa: **Đã khớp** / **Chưa khớp**
- **Chênh lệch**: Ý nghĩa: Số tiền − Số tiền Thu/Chi (phần chưa lập phiếu)

Dòng cuối bảng hiện **TỔNG CỘNG: n** và tổng **Số tiền**, **Số tiền Thu/Chi**, **Chênh lệch**.

- **NGÀY THU**: Tự điền từ giao dịch: Ngày giao dịch
- **KHÁCH HÀNG**: Tự điền từ giao dịch: Không tự điền – chọn khách nếu là tiền khách trả
- **NGƯỜI NỘP**: Tự điền từ giao dịch: Tên người chuyển
- **TIỀN THU**: Tự điền từ giao dịch: Phần **Chênh lệch** còn lại (giao dịch chưa lập: toàn bộ số tiền)
- **CHỨNG TỪ**: Tự điền từ giao dịch: **Số CT gốc**
- **QUỸ THU**: Tự điền từ giao dịch: Quỹ có số tài khoản trùng tài khoản nhận; **bị khoá**
- **GHI CHÚ**: Tự điền từ giao dịch: Nội dung chuyển khoản

Đã vào Phiếu thu → Thêm mới → Giao dịch ngân hàng. Nguồn ACB năm 2026 sau khi bỏ từ khóa tìm kiếm cũ vẫn không có dữ liệu. Ảnh minh họa cửa sổ nguồn và bộ lọc, không chứng minh lập phiếu thu; không tạo giao dịch ngân hàng giả hoặc ghi thu.

![ACB năm 2026, đã bỏ tìm kiếm cũ, không có dữ liệu tại thời điểm chụp](/posts/2026-11-07-kt-a03-3-huong-dan-lap-phieu-thu-tu-giao-dich-ngan-hang/hinh-01-20261030-kt-a03-3-nguon-da-bo-loc.png)

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kế toán
   ↓
Phiếu thu
   ↓
Thêm mới → Giao dịch ngân hàng
   ↓
DANH SÁCH GIAO DỊCH NGÂN HÀNG → Lập phiếu
```

```text
Khách chuyển khoản → giao dịch "Ghi có" trên tài khoản công ty
      ↓
Phiếu thu → Thêm mới → Giao dịch ngân hàng
      ↓
Chọn ngân hàng, khoảng ngày → tìm giao dịch "Chưa lập" / "Đang lập"
      ↓
Lập phiếu (hoặc nhấp đúp) → cửa sổ điền sẵn
      ↓
Chọn Khách hàng, Nội dung · sửa Tiền thu nếu tách nhiều phiếu
      ↓
Lưu lại → tồn quỹ tăng · công nợ khách giảm
      ↓
Giao dịch: Đang lập (còn chênh lệch) / Đã lập (đủ tiền)
```

### Bước 1 – Mở danh sách giao dịch

Vào **Kế toán → Phiếu thu**, bấm **Thêm mới** → **Giao dịch ngân hàng**. Cửa sổ **DANH SÁCH GIAO DỊCH NGÂN HÀNG** mở ra (Hình 1).

### Bước 2 – Chọn ngân hàng và khoảng ngày

Chọn ngân hàng và khoảng ngày trong cửa sổ nguồn; ảnh hiện có chỉ minh họa nguồn rỗng, không có đánh số các vùng tác nghiệp này. Danh sách tải lại.

### Bước 3 – Chọn giao dịch

Tìm giao dịch **Chưa lập** hoặc **Đang lập** (xem cột **Nội dung chuyển khoản**, **Số tiền**). Bấm **Lập phiếu** (hoặc nhấp đúp dòng). Giao dịch **Đã lập** không có nút **Lập phiếu** và nhấp đúp không mở cửa sổ.

### Bước 4 – Hoàn tất cửa sổ phiếu thu

cửa sổ **THÊM MỚI - PHIẾU THU** mở ra với các ô đã điền theo mô tả; chưa có ảnh cửa sổ có dữ liệu để đối chiếu.

- **KHÁCH HÀNG**: chọn khách nếu đây là tiền khách trả nợ (công nợ khách sẽ giảm). Bỏ trống nếu là khoản thu khác.
- **NỘI DUNG**: chọn nội dung thu.
- **TIỀN THU**: giữ nguyên, hoặc giảm xuống nếu chỉ lập một phần (phần còn lại lập phiếu khác). Không được lớn hơn số tự điền.
- **NGƯỜI NỘP**, **GHI CHÚ**: sửa nếu cần.

### Bước 5 – Bấm Lưu lại

Bấm **Lưu lại**. Thành công: **Lưu thành công**. Mở lại cửa sổ giao dịch để thấy **Mã phiếu nội bộ** và **Trạng thái lập CT** mới.

### Xem phiếu đã lập từ giao dịch

Trong cột **Mã phiếu nội bộ**, bấm vào mã phiếu → cửa sổ **XEM LẠI - PHIẾU THU**.

## 6. Giải thích các thông tin trên màn hình

- **Ngân hàng**: Ý nghĩa: Ngân hàng lấy giao dịch; Lưu ý: ACB / Sacombank / Vietcombank
- **Ngày thu**: Ý nghĩa: Ngày giao dịch; Bắt buộc: Có; Lưu ý: Tự điền, sửa được
- **Khách hàng**: Ý nghĩa: Khách trả tiền; Bắt buộc: Không; Lưu ý: Có chọn thì công nợ khách giảm
- **Người nộp**: Ý nghĩa: Tên người chuyển; Bắt buộc: Có; Lưu ý: Tự điền
- **Tiền thu**: Ý nghĩa: Số tiền lập phiếu lần này; Bắt buộc: Có; Lưu ý: ≤ phần chênh lệch còn lại của giao dịch
- **Chứng từ**: Ý nghĩa: Mã giao dịch ngân hàng; Lưu ý: Dùng để nối phiếu với giao dịch – không nên sửa
- **Quỹ thu**: Ý nghĩa: Tài khoản nhận tiền; Bắt buộc: Có; Lưu ý: Tự chọn theo số tài khoản, bị khoá
- **Nội dung**: Ý nghĩa: Nội dung thu; Bắt buộc: Có
- **Ghi chú**: Ý nghĩa: Nội dung chuyển khoản; Bắt buộc: Không

Các trường khác: xem phần “Giải thích các thông tin trên màn hình” của [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/).

## 7. Kiểm tra sau khi thực hiện

- Phiếu thu loại **Giao dịch ngân hàng** được lưu, tồn quỹ (tài khoản ngân hàng) tăng **Tiền thu**.
- Nếu chọn khách: công nợ khách giảm **Tổng thu**.
- Giao dịch ghi thêm mã phiếu thu; **Trạng thái lập CT** chuyển **Đang lập** hoặc **Đã lập**, **So khớp dữ liệu** chuyển **Đã khớp** khi chênh lệch bằng 0.

## 8. Những điều cần lưu ý

⚠️ **Muốn trừ công nợ khách, phải chọn KHÁCH HÀNG** – hệ thống không tự nhận khách từ nội dung chuyển khoản.

⚠️ **Không sửa ô CHỨNG TỪ** của phiếu lập từ giao dịch: đây là mã nối phiếu với giao dịch ngân hàng.

⚠️ Giao dịch đã **Đã lập** không lập phiếu được nữa. Lập phiếu thu tay cho cùng khoản tiền sẽ làm **trùng** tồn quỹ.

⚠️ Với Vietcombank, danh sách chỉ lấy giao dịch tiền vào; với ACB / Sacombank, danh sách có cả **Ghi nợ** – chỉ lập phiếu thu cho dòng **Ghi có**.

### "Số tiền thu không được lớn hơn <số tiền>" 

Nguyên nhân: **TIỀN THU** lớn hơn phần còn lại của giao dịch.
Cách xử lý: giảm **TIỀN THU** về tối đa số được báo.

### Ô QUỸ THU trống, không chọn được, báo "Vui lòng chọn quỹ thu" 

Nguyên nhân: không có quỹ nào có số tài khoản trùng tài khoản nhận tiền, hoặc quỹ đó chưa được phân cho bạn.
Cách xử lý: nhờ quản trị khai báo số tài khoản cho quỹ (Thiết lập danh mục → Tài khoản, quỹ) và phân quỹ cho tài khoản.

### Danh sách giao dịch trống 

Kiểm tra: ngân hàng và khoảng ngày; kết nối ngân hàng.
Cách xử lý: đổi khoảng ngày, **Tải lại**; vẫn trống thì liên hệ quản trị kiểm tra kết nối ngân hàng.

Các lỗi khác: xem phần “Vướng mắc thường gặp” của [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/). Lỗi hệ thống: [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Khách chuyển một lần trả cho hai hoá đơn, lập thế nào?**
Lập phiếu thứ nhất với **TIỀN THU** của hoá đơn 1; giao dịch chuyển **Đang lập**. Bấm **Lập phiếu** lần nữa, **TIỀN THU** tự điền phần còn lại.

**Giao dịch của tài khoản chưa có quỹ thì sao?**
Không lập được từ giao dịch cho đến khi quỹ có số tài khoản đó.

## 11. Công việc tiếp theo

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH ĐỐI CHIẾU SỐ DƯ CUỐI KỲ](/bai-viet/2026-11-07-kt-a07-0-tong-quan-man-hinh-doi-chieu-so-du-cuoi-ky/) – Tổng quan màn hình Đối chiếu số dư cuối kỳ (so số dư ngân hàng với tồn quỹ).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/) – Tổng quan màn hình Phiếu thu
- [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/) – Hướng dẫn lập phiếu thu
- [TỔNG QUAN MÀN HÌNH ĐỐI CHIẾU SỐ DƯ CUỐI KỲ](/bai-viet/2026-11-07-kt-a07-0-tong-quan-man-hinh-doi-chieu-so-du-cuoi-ky/) – Tổng quan màn hình Đối chiếu số dư cuối kỳ
- Sổ tay Thiết lập danh mục – Tài khoản, quỹ
