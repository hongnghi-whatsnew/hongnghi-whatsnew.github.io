---
title: "HƯỚNG DẪN LẬP PHIẾU NHẬP KHO GỬI HÀNG"
date: "2026-11-07"
summary: "Phiếu nhập gửi hàng ghi nhận hàng khách gửi vào kho."
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

Phiếu nhập gửi hàng ghi nhận hàng **khách gửi** vào kho. Sau khi lưu, số lượng từng mặt hàng được **cộng ngay vào tồn** ở **kho nhập gửi** và ghi vào **Sổ cái kho** với giá 0.

Bài này hướng dẫn lập phiếu bằng cách **nhập tay từng dòng**. Nhập nhiều dòng từ file Excel xem [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU KHO TỪ EXCEL](/bai-viet/2026-11-07-kho-a03-2-huong-dan-nhap-chi-tiet-phieu-kho-tu-excel/). Bài cũng áp dụng khi **Sửa** phiếu (cửa sổ **PHIẾU NHẬP KHO GỬI HÀNG - CẬP NHẬT**).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu nhập gửi hàng**.
- Kho nhập gửi và các mặt hàng khách gửi đã có trong danh mục **Kho hàng**, **Hàng hoá**.
- Chuẩn bị: biên bản / phiếu giao hàng của khách (số chứng từ, danh sách hàng, số lượng). Không có chứng từ thì ghi chữ **không có** ở **MÃ PHIẾU GỐC**.
- **Ngày nhập gửi** thuộc kỳ kế toán chưa khoá.

## 2. Mở chức năng

**Kho hàng → Phiếu nhập gửi hàng → Thêm mới**

## 3. Nhận biết màn hình

![Hình 1: cửa sổ PHIẾU NHẬP KHO GỬI HÀNG - THÊM MỚI](/posts/2026-11-07-kho-a02-1-huong-dan-lap-phieu-nhap-kho-gui-hang/hinh-01-form-them-phieu-nhap-gui-hang.png)

- **NGÀY NHẬP GỬI**: Ý nghĩa: Bắt buộc, mặc định hôm nay
- **KHO NHẬP GỬI**: Ý nghĩa: Bắt buộc. Kho chứa hàng gửi
- **MÃ PHIẾU GỐC**: Ý nghĩa: Bắt buộc. Số chứng từ của khách; không có thì ghi **không có**
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **GHI CHÚ**: Ý nghĩa: Bắt buộc. Nội dung nhập gửi (khách nào, gửi để làm gì)
- **Bảng chi tiết hàng hoá**: Ý nghĩa: Xem bảng cột dưới
- **Thêm một hàng, Tải lên từ Excel, Tải file mẫu**: Ý nghĩa: Thêm dòng trống / nạp dòng từ Excel ([HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU KHO TỪ EXCEL](/bai-viet/2026-11-07-kho-a03-2-huong-dan-nhap-chi-tiet-phieu-kho-tu-excel/)) / tải file mẫu
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Các cột trong bảng chi tiết:**

- **STT**: Nhập / tự tính: Tự đánh số; kéo biểu tượng ⠿ đầu dòng để đổi thứ tự
- **Hàng hóa**: Nhập / tự tính: **Chọn** – bắt buộc
- **Lô hàng**: Nhập / tự tính: **Chọn** (chỉ với hàng quản lý theo lô, sau khi chọn hàng)
- **Đvt**: Nhập / tự tính: Tự lấy theo hàng hoá
- **Khối lượng, Kiện, M³**: Nhập / tự tính: Tự tính theo Số lượng
- **Số lượng**: Nhập / tự tính: **Nhập** – bắt buộc
- **Chú thích**: Nhập / tự tính: **Nhập** (tuỳ chọn)
- **Thao tác**: Nhập / tự tính: Nút **+** (thêm 1 dòng tại đây), nút thùng rác (xoá dòng)

Dòng cuối bảng hiện **TỔNG CỘNG: n** dòng và tổng **Khối lượng**, **Kiện**, **M³**, **Số lượng**.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kho hàng
   ↓
Phiếu nhập gửi hàng
   ↓
Thêm mới
```

```text
Phiếu nhập gửi hàng → Thêm mới
      ↓
Chọn ngày nhập gửi, kho nhập gửi → nhập mã phiếu gốc, ghi chú
      ↓
Nhập chi tiết:
   ├── tay: chọn hàng (→ tự thêm dòng trống) → nhập số lượng, chú thích
   └── Tải lên từ Excel (KHO-A03.2)
      ↓
Lưu lại ── viền đỏ / cảnh báo? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → tồn kho tăng ở kho nhập gửi, ghi sổ cái kho (giá 0)
```

### Bước 1 – Mở cửa sổ thêm mới

Vào **Kho hàng → Phiếu nhập gửi hàng**, bấm **Thêm mới**. cửa sổ **PHIẾU NHẬP KHO GỬI HÀNG - THÊM MỚI** mở ra (Hình 1).

### Bước 2 – Nhập thông tin chung

- **NGÀY NHẬP GỬI**: ngày nhận hàng gửi, mặc định hôm nay.
- **KHO NHẬP GỬI**: gõ tên hoặc mã kho rồi chọn. **Chọn kho trước khi chọn hàng** để ô hàng hoá hiện tồn đúng của kho đó.
- **MÃ PHIẾU GỐC**: số biên bản / phiếu giao của khách; không có thì ghi **không có**.
- **GHI CHÚ**: ghi rõ khách nào gửi, gửi để làm gì (ví dụ *Khách A gửi ván chờ gia công*).

### Bước 3 – Nhập chi tiết hàng gửi

1. Bấm vào ô **Hàng hóa** ở dòng trống (nếu bảng chưa có dòng, bấm **Thêm một hàng**). Gõ mã / tên hàng và chọn. Mỗi lựa chọn hiện dạng **Tên hàng, (tồn hiện tại, tồn được xuất, lô được xuất)**.
2. Hệ thống điền **Đvt** và tự thêm một dòng trống bên dưới.
3. Nếu hàng quản lý theo lô: bấm ô **Lô hàng**, chọn lô.
4. Bấm ô **Số lượng**, nhập số lượng khách gửi. **Khối lượng**, **Kiện**, **M³** tự tính.
5. Ghi **Chú thích** dòng nếu cần.

Mẹo (chuột phải vào ô của dòng): **Áp dụng cho những dòng dưới** ở cột **Số lượng**, **Chú thích**; **Nhân bản** để chép dòng đang chọn. Chuột phải vào tiêu đề bảng có **Khôi phục bố cục** và **Trình chọn cột**.

⚠️ Bảng chi tiết **nhớ bố cục cột theo từng người dùng** (cột đã ẩn / kéo hẹp lần trước vẫn giữ). Nếu không thấy cột **Số lượng** hoặc cột khác, chuột phải vào tiêu đề cột → **Khôi phục bố cục**.

![Hình 2: Bảng chi tiết phiếu nhập gửi hàng đã nhập](/posts/2026-11-07-kho-a02-1-huong-dan-lap-phieu-nhap-kho-gui-hang/hinh-02-bang-chi-tiet-nhap-gui-hang.png)

### Bước 4 – Bấm Lưu lại

Bấm **Lưu lại**.

- Thiếu thông tin chung: ô thiếu có viền đỏ và biểu tượng **!**; bấm vào ô để xem lời nhắc: **Chọn ngày nhập gửi hàng**, **Vui lòng chọn kho điều chỉnh** (ô kho nhập gửi), **Vui lòng nhập mã phiếu gốc hoặc mã phiếu từ NCC…**, **Vui lòng ghi nội dung nhập gửi hàng**.
- Dòng chi tiết thiếu dữ liệu: cảnh báo **<số dòng>. Hàng hóa là bắt buộc** hoặc **<số dòng>. Số lượng là bắt buộc**. Dòng trống thừa thì xoá bằng biểu tượng thùng rác.
- Hợp lệ: thông báo **Lưu thành công**, cửa sổ đóng, danh sách tải lại.

### Bước 5 – Kiểm tra kết quả

Phiếu mới hiện trong danh sách với **Mã phiếu** dạng **GH…**. Kiểm tra tồn của mặt hàng đã tăng (mở lại ô chọn hàng trong một phiếu kho bất kỳ, hoặc xem **Sổ cái kho** – dòng nhập nguồn nhập gửi hàng).

### Sửa phiếu

Bấm **Sửa** → cửa sổ **PHIẾU NHẬP KHO GỬI HÀNG - CẬP NHẬT**. Sửa được mọi ô và bảng chi tiết. Khi lưu, hệ thống **xoá toàn bộ chi tiết cũ và ghi lại chi tiết mới**: tồn của các dòng cũ được trừ ra rồi cộng lại theo dòng mới. Nếu hàng gửi đã xuất bớt, việc trừ có thể bị chặn (xem phần “Vướng mắc thường gặp”).

## 6. Giải thích các thông tin trên màn hình

- **Ngày nhập gửi**: Ý nghĩa: Ngày nhận hàng gửi; Bắt buộc: Có; Lưu ý: Dùng lọc danh sách; không thuộc kỳ đã khoá
- **Kho nhập gửi**: Ý nghĩa: Kho chứa hàng gửi; Bắt buộc: Có; Lưu ý: Chỉ hiện kho của chi nhánh đang làm việc
- **Mã phiếu gốc**: Ý nghĩa: Số chứng từ của khách; Bắt buộc: Có; Lưu ý: Không có thì ghi "không có"
- **Mã phiếu**: Ý nghĩa: Mã phiếu nhập gửi (**GH…**); Lưu ý: Tự tạo khi lưu
- **Ghi chú**: Ý nghĩa: Nội dung nhập gửi; Bắt buộc: Có; Lưu ý: In ở dòng **Lý do** trên phiếu
- **Hàng hóa**: Ý nghĩa: Mặt hàng khách gửi; Bắt buộc: Có (mỗi dòng); Lưu ý: Ô chọn hiện tồn hiện tại / tồn được xuất / lô được xuất
- **Lô hàng**: Ý nghĩa: Lô của hàng quản lý theo lô; Bắt buộc: Không; Lưu ý: Chọn sau khi chọn hàng
- **Đvt**: Ý nghĩa: Đơn vị tính chính; Lưu ý: Tự lấy, không sửa
- **Khối lượng**: Ý nghĩa: Số lượng × trọng lượng; Lưu ý: Tự tính
- **Kiện**: Ý nghĩa: Số lượng ÷ số tấm / kiện; Lưu ý: Tự tính (khi hàng có quy đổi kiện)
- **M³**: Ý nghĩa: Số lượng × m³; Lưu ý: Tự tính
- **Số lượng**: Ý nghĩa: Số lượng gửi; Bắt buộc: Có; Lưu ý: Số dương để nhập; số âm sẽ làm **giảm** tồn (xem phần “Những điều cần lưu ý”)
- **Chú thích**: Ý nghĩa: Ghi chú dòng; Bắt buộc: Không; Lưu ý: In ở cột GHI CHÚ trên phiếu

## 7. Kiểm tra sau khi thực hiện

- Phiếu được lưu với mã **GH…**, hiện ở **PHIẾU NHẬP KHO GỬI HÀNG - DANH SÁCH**.
- Tồn kho của từng mặt hàng ở kho nhập gửi **tăng** theo số lượng.
- Sổ cái kho có dòng nhập cho từng mặt hàng, giá 0.
- Không phát sinh công nợ.

## 8. Những điều cần lưu ý

⚠️ Trước Lưu lại phải có ít nhất một dòng hàng thực nhận với số lượng dương. Ghi chú kiểm chứng chưa xác nhận hệ thống chặn phiếu rỗng; thông báo thành công không thay bước đối chiếu dòng hàng.

⚠️ **Tồn kho tăng ngay khi lưu**, không có bước duyệt.

⚠️ Ô hàng hoá liệt kê **mọi mặt hàng**, không chỉ hàng gửi. Chọn đúng mã hàng dành cho hàng khách gửi để không lẫn với tồn của công ty.

⚠️ Nhập **Số lượng âm** sẽ làm giảm tồn; hệ thống kiểm tra tồn được xuất trước khi giảm. Phiếu nhập gửi hàng chỉ nên dùng số dương.

⚠️ Bấm **Đóng** hoặc dấu ✕ là đóng cửa sổ **không lưu**, không hỏi lại.

⚠️ Không lập / sửa phiếu có **Ngày nhập gửi** thuộc kỳ kế toán đã khoá.

### Ô viền đỏ, lời nhắc "Vui lòng nhập mã phiếu gốc hoặc mã phiếu từ NCC…" 

Nguyên nhân: để trống **MÃ PHIẾU GỐC**.
Cách xử lý: nhập số chứng từ của khách, hoặc chữ **không có**.

### Ô viền đỏ, lời nhắc "Vui lòng chọn kho điều chỉnh" / "Vui lòng ghi nội dung nhập gửi hàng" / "Chọn ngày nhập gửi hàng" 

Nguyên nhân: thiếu **KHO NHẬP GỬI** / **GHI CHÚ** / **NGÀY NHẬP GỬI**.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "<số dòng>. Hàng hóa là bắt buộc" 

Nguyên nhân: có dòng chưa chọn hàng hoá (thường là dòng trống cuối bảng đã được bấm vào).
Cách xử lý: chọn hàng cho dòng đó hoặc xoá dòng bằng biểu tượng thùng rác.

### "CẢNH BÁO – Lỗi thêm: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **NGÀY NHẬP GỬI** thuộc kỳ kế toán đã khoá.
Cách xử lý: kiểm tra ngày thực tế và báo kế toán nếu thuộc kỳ đã khóa; không đổi ngày chỉ để lưu được.

### "CẢNH BÁO – Lỗi sửa: "<tên kho>", "<tên hàng>" không đủ tồn (<số>)." 

Nguyên nhân: khi sửa, hệ thống trừ lại số đã nhập của dòng cũ nhưng hàng đã được xuất bớt nên kho không đủ.
Cách xử lý: dừng sửa và đối chiếu với thủ kho/kế toán; luồng sửa ghi lại toàn bộ chi tiết nên giữ nguyên dòng đã xuất vẫn có thể bị chặn. Chốt cách điều chỉnh trên chứng từ phù hợp trước làm lại.

## 10. Câu hỏi thường gặp

**Chọn hàng xong, sao bảng tự thêm một dòng trống?**
Để nhập tiếp nhanh. Dòng trống không chọn hàng sẽ không được lưu; nếu hệ thống báo "Hàng hóa là bắt buộc" thì xoá dòng đó.

**Ô hàng hoá hiện ba con số trong ngoặc là gì?**
Lần lượt: tồn hiện tại, tồn được xuất, tồn lô được xuất của mặt hàng.

**Khách gửi nhiều loại hàng thì sao?**
Nhập mỗi loại một dòng trong cùng phiếu, hoặc dùng **Tải lên từ Excel** ([HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU KHO TỪ EXCEL](/bai-viet/2026-11-07-kho-a03-2-huong-dan-nhap-chi-tiet-phieu-kho-tu-excel/)).

## 11. Công việc tiếp theo

```text
Lập phiếu nhập gửi hàng
        ↓
(Tuỳ chọn) Đính kèm biên bản: chuột phải → File đính kèm (GEN-12)
        ↓
In phiếu cho khách ký: chuột phải → In Phiếu (KHO-A02.0)
        ↓
Theo dõi: Thống kê kho → Nhập kho gửi hàng (KHO-C02.0)
```

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-0-tong-quan-man-hinh-phieu-nhap-gui-hang/) – mục In phiếu nhập gửi hàng; [TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT NHẬP KHO GỬI HÀNG](/bai-viet/2026-11-07-kho-c02-0-tong-quan-man-hinh-thong-ke-chi-tiet-nhap-kho-gui-hang/) – Tổng quan màn hình Nhập kho gửi hàng.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-0-tong-quan-man-hinh-phieu-nhap-gui-hang/) – Tổng quan màn hình Phiếu nhập gửi hàng
- [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU KHO TỪ EXCEL](/bai-viet/2026-11-07-kho-a03-2-huong-dan-nhap-chi-tiet-phieu-kho-tu-excel/) – Hướng dẫn nhập chi tiết phiếu kho từ Excel
- [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/) – Tổng quan màn hình Sổ cái kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT NHẬP KHO GỬI HÀNG](/bai-viet/2026-11-07-kho-c02-0-tong-quan-man-hinh-thong-ke-chi-tiet-nhap-kho-gui-hang/) – Tổng quan màn hình Nhập kho gửi hàng
