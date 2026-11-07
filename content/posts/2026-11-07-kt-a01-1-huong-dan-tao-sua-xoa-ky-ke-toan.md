---
title: "HƯỚNG DẪN TẠO, SỬA, XOÁ KỲ KẾ TOÁN"
date: "2026-11-07"
summary: "Bài này hướng dẫn tạo kỳ kế toán theo hai cách: - Tạo một kỳ: tạo từng tháng một."
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

Bài này hướng dẫn tạo kỳ kế toán theo hai cách:

- **Tạo một kỳ**: tạo từng tháng một.
- **Tự động sinh nhiều kỳ**: tạo liên tục nhiều tháng (ví dụ cả năm) trong một lần, bỏ qua các tháng đã có.

Bài cũng hướng dẫn **sửa ngày** và **xoá** một kỳ chưa khóa. Khóa / mở kỳ xem [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Kỳ kế toán**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)) – kỳ được tạo cho chi nhánh đang làm việc.
- Sửa / xoá: kỳ phải **chưa khóa**.

## 2. Mở chức năng

**Kế toán → Kỳ kế toán → Thêm kỳ**

## 3. Nhận biết màn hình

![Hình 1: Menu Thêm kỳ](/posts/2026-11-07-kt-a01-1-huong-dan-tao-sua-xoa-ky-ke-toan/hinh-01-menu-them-ky.png)

Bấm  **Thêm kỳ** (góc phải, dưới thanh lọc) → chọn  **Tạo một kỳ** (Cách 1) hoặc  **Tự động sinh nhiều kỳ** (Cách 2).

![Hình 2: Cửa sổ Thêm kỳ kế toán mới](/posts/2026-11-07-kt-a01-1-huong-dan-tao-sua-xoa-ky-ke-toan/hinh-02-them-ky-ke-toan.png)

- **Năm**: Ý nghĩa: Năm của kỳ, bắt buộc, từ 2000 đến 2100
- **Tháng**: Ý nghĩa: **Tháng 1** … **Tháng 12**, bắt buộc
- **Thời gian bắt đầu, Thời gian kết thúc**: Ý nghĩa: Tự điền ngày đầu và ngày cuối tháng khi chọn năm / tháng; sửa được
- **Khung thông tin**: Ý nghĩa: *Thời gian của kỳ kế toán phải liên tục với kỳ trước và không được trùng với các kỳ đã tồn tại.*
- **Mô tả**: Ý nghĩa: Tự sinh: *Kỳ kế toán tháng <tháng> năm <năm>* (chỉ xem)
- **Hủy / Tạo kỳ kế toán**: Ý nghĩa: Đóng không lưu / lưu kỳ

![Hình 3: Cửa sổ Tự động sinh kỳ kế toán – bước Thông tin](/posts/2026-11-07-kt-a01-1-huong-dan-tao-sua-xoa-ky-ke-toan/hinh-03-tu-dong-sinh-ky-buoc-1.png)

- **Thanh 3 bước Thông tin → Xem trước → Hoàn thành**: Ý nghĩa: Cho biết đang ở bước nào; dưới chữ **Thông tin** tóm tắt khoảng ngày và *Theo tháng*
- **Ngày bắt đầu, Ngày kết thúc**: Ý nghĩa: Mặc định 01/01 và 31/12 của năm hiện tại
- **Loại chu kỳ**: Ý nghĩa: Chỉ chọn được **Theo tháng**; **Theo quý**, **Theo tuần**, **Custom** ghi **Sắp có**
- **Bỏ qua kỳ đã tồn tại**: Ý nghĩa: Mặc định tick: tháng đã có kỳ thì bỏ qua
- **Tất cả kỳ tạo ra ở trạng thái Đang mở**: Ý nghĩa: Mặc định tick
- **Khung Xem trước**: Ý nghĩa: 3 kỳ đầu, dấu **…**, kỳ cuối; kỳ trùng ghi **Bỏ qua**
- **Sẽ tạo *n* kỳ kế toán**: Ý nghĩa: Số kỳ sẽ tạo (đã trừ kỳ trùng nếu tick), kèm dòng *Các kỳ được tạo liên tục và không bị chồng lấn.* Hình 3: năm 2026 đã đủ 12 kỳ nên **Sẽ tạo 0**
- **Hủy / Xem trước**: Ý nghĩa: Đóng / sang bước 2

![Hình 4: Cửa sổ Tự động sinh kỳ kế toán – bước Xem trước](/posts/2026-11-07-kt-a01-1-huong-dan-tao-sua-xoa-ky-ke-toan/hinh-04-tu-dong-sinh-ky-buoc-2.png)

- **Bảng Xem trước các kỳ sẽ được tạo**: Ý nghĩa: Cột **STT**, **Kỳ kế toán**, **Ngày bắt đầu**, **Ngày kết thúc**, **Số ngày**; kỳ trùng có nhãn **Bỏ qua**
- **Thẻ Tổng quan**: Ý nghĩa: **Tổng số kỳ** sẽ tạo (đã trừ kỳ trùng); có kỳ trùng thì hiện *n kỳ đã tồn tại – Các kỳ trùng sẽ được bỏ qua khi sinh.*, không có thì *Không phát hiện xung đột*
- **Quay lại / Sinh kỳ**: Ý nghĩa: Về bước 1 / tạo kỳ. **Sinh kỳ** mờ khi không có kỳ nào để tạo

Dưới bảng có dòng nhắc *Lịch được tính theo số ngày thực tế của từng tháng.*

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kế toán
   ↓
Kỳ kế toán
   ↓
Thêm kỳ ──► Tạo một kỳ / Tự động sinh nhiều kỳ
```

```text
Kỳ kế toán → Thêm kỳ
   ├── Tạo một kỳ
   │     Chọn Năm, Tháng → ngày tự điền → (sửa ngày nếu cần)
   │        ↓
   │     Tạo kỳ kế toán → "Tạo kỳ kế toán thành công"
   │
   └── Tự động sinh nhiều kỳ
         Bước 1: Ngày bắt đầu, Ngày kết thúc, Bỏ qua kỳ đã tồn tại
            ↓ Xem trước
         Bước 2: kiểm tra bảng các kỳ
            ↓ Sinh kỳ → xác nhận
         "Đã tạo n kỳ, bỏ qua m kỳ đã tồn tại"
```

### Cách 1 – Tạo một kỳ

**Bước 1 –** Vào **Kế toán → Kỳ kế toán**, bấm **Thêm kỳ** → **Tạo một kỳ**. Cửa sổ **Thêm kỳ kế toán mới** mở ra với năm và tháng hiện tại (Hình 2). Dòng nhắc trên cùng: *Vui lòng nhập thông tin để tạo kỳ kế toán mới. Kỳ kế toán sẽ được tạo ở trạng thái Chưa khóa.*

**Bước 2 –** Chọn **Năm**  và **Tháng**. **Thời gian bắt đầu** và **Thời gian kết thúc**  tự điền ngày đầu và ngày cuối của tháng.

**Bước 3 –** (Hiếm khi cần) Sửa **Thời gian bắt đầu** / **Thời gian kết thúc** nếu kỳ không trùng tháng dương lịch. Khoảng ngày **không được chồng** lên kỳ khác của chi nhánh.

**Bước 4 –** Bấm **Tạo kỳ kế toán**. Thành công: thông báo **Tạo kỳ kế toán thành công**, cửa sổ đóng, bảng tải lại.

### Cách 2 – Tự động sinh nhiều kỳ

**Bước 1 –** Bấm **Thêm kỳ** → **Tự động sinh nhiều kỳ**. Cửa sổ **Tự động sinh kỳ kế toán** mở ra (Hình 3).

**Bước 2 –** Chọn **Ngày bắt đầu** và **Ngày kết thúc**. Hệ thống tạo **mỗi tháng một kỳ**, từ tháng chứa ngày bắt đầu đến tháng chứa ngày kết thúc; mỗi kỳ luôn từ ngày 1 đến ngày cuối tháng.

**Bước 3 –** Giữ tick **Bỏ qua kỳ đã tồn tại**  (khuyên dùng). Khung **Xem trước**  và số **Sẽ tạo**  cập nhật ngay.

**Bước 4 –** Bấm **Xem trước**. Bước 2 hiện bảng đầy đủ các kỳ (Hình 4). Kiểm tra số kỳ, các kỳ ghi **Bỏ qua**.

**Bước 5 –** Bấm **Sinh kỳ**. Hộp **Xác nhận sinh kỳ kế toán** hỏi *Hệ thống sẽ tạo n kỳ kế toán. Nếu kỳ đã tồn tại sẽ bỏ qua.* Xác nhận.

**Bước 6 –** Thành công: thông báo **Đã tạo n kỳ** (kèm *, bỏ qua m kỳ đã tồn tại* nếu có), cửa sổ đóng, bảng tải lại.

### Sửa một kỳ

**Bước 1 –** Bấm biểu tượng **Chỉnh sửa** ở cột **Thao tác** (hoặc **Chi tiết** → **Chỉnh sửa**). Cửa sổ **Chỉnh sửa kỳ kế toán** mở ra, giống Hình 2.

**Bước 2 –** Sửa **Năm**, **Tháng**, **Thời gian bắt đầu**, **Thời gian kết thúc**.

⚠️ Đổi **Năm** hoặc **Tháng** sẽ **tự điền lại** hai ô ngày theo tháng mới.

**Bước 3 –** Bấm **Lưu thay đổi**. Thành công: **Cập nhật kỳ kế toán thành công**.

### Xoá một kỳ

**Bước 1 –** Bấm biểu tượng **Xóa** (hoặc **Chi tiết** → **Xóa kỳ**).

**Bước 2 –** Hộp **Xác nhận xóa** hỏi *Xóa kỳ Tháng <tháng>/<năm>?*. Xác nhận.

**Bước 3 –** Thành công: **Xóa kỳ kế toán thành công**.

## 6. Giải thích các thông tin trên màn hình

**Tạo một kỳ / Chỉnh sửa kỳ:**

- **Năm**: Ý nghĩa: Năm của kỳ; Bắt buộc: Có; Lưu ý: 2000–2100
- **Tháng**: Ý nghĩa: Tháng của kỳ; Bắt buộc: Có; Lưu ý: Mỗi chi nhánh chỉ có **một** kỳ cho một tháng/năm
- **Thời gian bắt đầu**: Ý nghĩa: Ngày đầu kỳ; Bắt buộc: Có; Lưu ý: Tự điền ngày 1 của tháng
- **Thời gian kết thúc**: Ý nghĩa: Ngày cuối kỳ; Bắt buộc: Có; Lưu ý: Tự điền ngày cuối tháng; phải ≥ ngày bắt đầu
- **Mô tả**: Ý nghĩa: Mô tả kỳ; Lưu ý: Tự sinh, chỉ xem

**Tự động sinh nhiều kỳ:**

- **Ngày bắt đầu**: Ý nghĩa: Tháng đầu tiên cần sinh; Bắt buộc: Có; Lưu ý: Chỉ lấy tháng/năm; kỳ luôn bắt đầu ngày 1
- **Ngày kết thúc**: Ý nghĩa: Tháng cuối cùng cần sinh; Bắt buộc: Có; Lưu ý: Phải sau ngày bắt đầu
- **Loại chu kỳ**: Ý nghĩa: Độ dài mỗi kỳ; Bắt buộc: Có; Lưu ý: Hiện chỉ có **Theo tháng**
- **Bỏ qua kỳ đã tồn tại**: Ý nghĩa: Tháng đã có kỳ thì bỏ qua; Lưu ý: Bỏ tick: gặp tháng đã có kỳ thì dừng và báo lỗi, không tạo kỳ nào

## 7. Kiểm tra sau khi thực hiện

- Kỳ mới hiện trên bảng và dòng thời gian với trạng thái **Đang mở** (hoặc **Chưa mở** nếu là tháng tương lai).
- Chứng từ có ngày trong kỳ sẽ được ghi sổ khi chạy hạch toán tự động.
- Sửa: khoảng ngày của kỳ thay đổi. Xoá: kỳ biến mất; chứng từ trong khoảng ngày đó không còn được ghi sổ ở lần hạch toán sau.

## 8. Những điều cần lưu ý

⚠️ **Không sửa / xoá được kỳ đã khóa.** Mở kỳ trước ([HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/)).

⚠️ **Không tạo được hai kỳ trùng tháng/năm** hoặc **chồng khoảng ngày** trong cùng chi nhánh.

⚠️ Hệ thống **không kiểm tra** kỳ mới có liền với kỳ trước hay không (dù khung thông tin ghi như vậy). Tự kiểm tra để không bỏ sót ngày nào giữa hai kỳ – ngày bị bỏ sót sẽ không được ghi sổ.

⚠️ Xoá kỳ đã có chứng từ được ghi sổ: hệ thống chưa chặn; hỏi kế toán trưởng trước khi xoá.

### "Vui lòng nhập đủ năm, tháng và khoảng thời gian." 

Nguyên nhân: để trống một trong bốn ô của cửa sổ tạo / sửa kỳ.
Cách xử lý: nhập đủ rồi bấm lại.

### "Khoảng thời gian không hợp lệ. Ngày kết thúc phải sau ngày bắt đầu." 

Nguyên nhân: ở bước 1 của **Tự động sinh nhiều kỳ**, ngày kết thúc trước ngày bắt đầu hoặc để trống.
Cách xử lý: chọn lại hai ngày.

### "CẢNH BÁO – Lỗi tạo kỳ kế toán: Đã xảy ra lỗi trong quá trình xử lý. Vui lòng thử lại hoặc liên hệ quản trị hệ thống." 

Nguyên nhân: tháng/năm đã có kỳ, hoặc khoảng ngày chồng lên kỳ khác của chi nhánh.
Cách xử lý: kiểm tra bảng kỳ của năm đó; sửa kỳ cũ hoặc chọn tháng khác. Muốn tạo hàng loạt, dùng **Tự động sinh nhiều kỳ** với tick **Bỏ qua kỳ đã tồn tại**.

### "CẢNH BÁO – Lỗi tự động sinh kỳ kế toán: Kỳ <tháng>/<năm> đã tồn tại" 

Nguyên nhân: bỏ tick **Bỏ qua kỳ đã tồn tại** mà trong khoảng có tháng đã có kỳ.
Cách xử lý: tick lại **Bỏ qua kỳ đã tồn tại** rồi **Sinh kỳ**.

### "CẢNH BÁO – Lỗi sửa kỳ kế toán: Không thể sửa kỳ đã khóa. Vui lòng mở kỳ trước." 

Nguyên nhân: kỳ đã khóa (thường do người khác vừa khóa).
Cách xử lý: tải lại bảng; mở kỳ ([HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/)) nếu thật sự cần sửa.

### "CẢNH BÁO – Lỗi xóa kỳ kế toán: Không thể xóa kỳ đã khóa. Vui lòng mở kỳ trước." 

Nguyên nhân và cách xử lý: như lỗi trên.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Đầu năm nên tạo kỳ thế nào cho nhanh?**
Dùng **Tự động sinh nhiều kỳ**, ngày 01/01 → 31/12, giữ tick **Bỏ qua kỳ đã tồn tại**.

**Có tạo được kỳ theo quý không?**
Chưa. Chỉ có **Theo tháng**; các loại khác ghi **Sắp có**.

**Kỳ vừa tạo đã khóa chưa?**
Chưa. Kỳ mới luôn ở trạng thái chưa khóa.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/) – Hướng dẫn khóa và mở lại kỳ kế toán.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/) – Tổng quan màn hình Kỳ kế toán
- [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/) – Hướng dẫn khóa và mở lại kỳ kế toán
- [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) – Tổng quan màn hình Sổ chi tiết tài khoản
