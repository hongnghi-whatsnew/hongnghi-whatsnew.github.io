---
title: "HƯỚNG DẪN LẬP PHIẾU ĐIỀU CHỈNH KHO"
date: "2026-11-07"
summary: "Phiếu điều chỉnh kho tăng hoặc giảm tồn của từng mặt hàng ở một kho, thường sau kiểm kê."
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

Phiếu điều chỉnh kho tăng hoặc giảm tồn của từng mặt hàng ở một kho, thường sau kiểm kê. Trên mỗi dòng: **Số lượng dương = tăng tồn**, **Số lượng âm = giảm tồn**. Tồn kho và **Sổ cái kho** thay đổi ngay khi lưu.

Bài này hướng dẫn lập phiếu bằng cách **nhập tay từng dòng**. Nhập nhiều dòng từ file Excel (ví dụ file kiểm kê) xem [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU KHO TỪ EXCEL](/bai-viet/2026-11-07-kho-a03-2-huong-dan-nhap-chi-tiet-phieu-kho-tu-excel/). Bài cũng áp dụng khi **Sửa** phiếu (cửa sổ **PHIẾU ĐIỀU CHỈNH KHO - CẬP NHẬT**).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu điều chỉnh kho**.
- Có kết quả kiểm kê / biên bản: mặt hàng, kho, **số chênh lệch** (thực tế − hệ thống) của từng dòng.
- Với dòng giảm: kho phải còn đủ **tồn được xuất** của mặt hàng đó.
- **Ngày điều chỉnh kho** thuộc kỳ kế toán chưa khoá.

## 2. Mở chức năng

**Kho hàng → Phiếu điều chỉnh kho → Thêm mới**

## 3. Nhận biết màn hình

![Hình 1: cửa sổ PHIẾU ĐIỀU CHỈNH KHO - THÊM MỚI](/posts/2026-11-07-kho-a03-1-huong-dan-lap-phieu-dieu-chinh-kho/hinh-01-form-them-phieu-dieu-chinh-kho.png)

- **NGÀY ĐIỀU CHỈNH KHO**: Ý nghĩa: Bắt buộc, mặc định hôm nay
- **KHO ĐIỀU CHỈNH**: Ý nghĩa: Bắt buộc. Kho được tăng / giảm tồn
- **MÃ PHIẾU GỐC**: Ý nghĩa: Bắt buộc. Số biên bản kiểm kê; không có thì ghi **không có**
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **GHI CHÚ**: Ý nghĩa: Bắt buộc. Lý do điều chỉnh
- **Bảng chi tiết hàng hoá**: Ý nghĩa: Xem bảng cột dưới
- **Thêm một hàng, Tải lên từ Excel, Tải file mẫu**: Ý nghĩa: Thêm dòng trống / nạp dòng từ Excel ([HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU KHO TỪ EXCEL](/bai-viet/2026-11-07-kho-a03-2-huong-dan-nhap-chi-tiet-phieu-kho-tu-excel/)) / tải file mẫu
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Các cột trong bảng chi tiết:**

- **STT**: Nhập / tự tính: Tự đánh số; kéo biểu tượng ⠿ đầu dòng để đổi thứ tự
- **Hàng hóa**: Nhập / tự tính: **Chọn** – bắt buộc
- **Lô hàng**: Nhập / tự tính: **Chọn** (chỉ với hàng quản lý theo lô, sau khi chọn hàng)
- **Đvt**: Nhập / tự tính: Tự lấy theo hàng hoá
- **Khối lượng, Kiện, M³**: Nhập / tự tính: Tự tính theo Số lượng
- **Số lượng**: Nhập / tự tính: **Nhập** – bắt buộc; dương = tăng, âm = giảm
- **Chú thích**: Nhập / tự tính: **Nhập** (tuỳ chọn)
- **Thao tác**: Nhập / tự tính: Nút **+** (thêm 1 dòng tại đây), nút thùng rác (xoá dòng)

Dòng cuối bảng hiện **TỔNG CỘNG: n** dòng và tổng **Khối lượng**, **Kiện**, **M³**, **Số lượng** (dòng âm trừ vào tổng).

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kho hàng
   ↓
Phiếu điều chỉnh kho
   ↓
Thêm mới
```

```text
Phiếu điều chỉnh kho → Thêm mới
      ↓
Chọn ngày điều chỉnh, kho điều chỉnh → nhập mã phiếu gốc, ghi chú (lý do)
      ↓
Nhập chi tiết (tay hoặc Tải lên từ Excel – KHO-A03.2):
   ├── thừa hàng: Số lượng dương
   └── thiếu / hỏng: Số lượng âm
      ↓
Lưu lại ── viền đỏ / cảnh báo / không đủ tồn? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → tồn tăng / giảm, ghi sổ cái kho, tính lại giá vốn từ ngày đó
```

### Bước 1 – Mở cửa sổ thêm mới

Vào **Kho hàng → Phiếu điều chỉnh kho**, bấm **Thêm mới**. cửa sổ **PHIẾU ĐIỀU CHỈNH KHO - THÊM MỚI** mở ra (Hình 1).

### Bước 2 – Nhập thông tin chung

- **NGÀY ĐIỀU CHỈNH KHO**: ngày ghi nhận chênh lệch (thường là ngày kiểm kê), mặc định hôm nay.
- **KHO ĐIỀU CHỈNH**: gõ tên hoặc mã kho rồi chọn. **Chọn kho trước khi chọn hàng** để ô hàng hoá hiện tồn đúng của kho đó.
- **MÃ PHIẾU GỐC**: số biên bản kiểm kê; không có thì ghi **không có**.
- **GHI CHÚ**: lý do điều chỉnh (ví dụ *Kiểm kê cuối tháng 10*, *Hàng hỏng do nước*).

### Bước 3 – Nhập chi tiết điều chỉnh

1. Bấm vào ô **Hàng hóa** ở dòng trống (nếu bảng chưa có dòng, bấm **Thêm một hàng**). Gõ mã / tên hàng và chọn. Mỗi lựa chọn hiện **Tên hàng, (tồn hiện tại, tồn được xuất, lô được xuất)** – dùng để đối chiếu với số kiểm kê.
2. Hệ thống điền **Đvt** và tự thêm một dòng trống bên dưới.
3. Nếu hàng quản lý theo lô: bấm ô **Lô hàng**, chọn lô cần điều chỉnh. Danh sách lô hiện **Mã lô, hạn dùng (tồn được xuất, lô được xuất)**.
4. Bấm ô **Số lượng**, nhập **số chênh lệch**:
   - Thực tế nhiều hơn hệ thống: nhập số **dương** (ví dụ hệ thống 8, đếm được 9 → nhập **1**).
   - Thực tế ít hơn hệ thống: nhập số **âm** (ví dụ hệ thống 8, đếm được 5 → nhập **−3**).
5. Ghi **Chú thích** dòng nếu cần.

Mẹo (chuột phải vào ô của dòng): **Áp dụng cho những dòng dưới** ở cột **Số lượng**, **Chú thích**; **Nhân bản** để chép dòng. Chuột phải vào tiêu đề bảng có **Khôi phục bố cục** và **Trình chọn cột**.

⚠️ Bảng chi tiết **nhớ bố cục cột theo từng người dùng** (dùng chung cho Thêm / Sửa / Xem). Nếu không thấy cột **Số lượng** hoặc cột khác, chuột phải vào tiêu đề cột → **Khôi phục bố cục**.

![Hình 2: Bảng chi tiết có một dòng tăng (Số lượng 1)](/posts/2026-11-07-kho-a03-1-huong-dan-lap-phieu-dieu-chinh-kho/hinh-02-bang-chi-tiet-dieu-chinh.png)

### Bước 4 – Bấm Lưu lại

Bấm **Lưu lại**.

- Thiếu thông tin chung: ô thiếu có viền đỏ và biểu tượng **!**; bấm vào ô để xem lời nhắc: **Chọn ngày điều chỉnh kho**, **Vui lòng chọn kho điều chỉnh**, **Vui lòng nhập mã phiếu gốc hoặc mã phiếu từ NCC…**, **Vui lòng ghi nội dung điều chỉnh kho**.
- Dòng chi tiết thiếu dữ liệu: cảnh báo **<số dòng>. Hàng hóa là bắt buộc** / **<số dòng>. Số lượng là bắt buộc**. Dòng trống thừa thì xoá bằng biểu tượng thùng rác.
- Dòng giảm vượt tồn: **CẢNH BÁO – Lỗi thêm: "<tên kho>", "<tên hàng>" không đủ tồn (<số>).** (hàng theo lô: **Lô "<mã lô>" "<tên hàng>" không đủ tồn (<số>).**). Cả phiếu không được lưu.
- Hợp lệ: thông báo **Lưu thành công**, cửa sổ đóng, danh sách tải lại.

### Bước 5 – Kiểm tra kết quả

Phiếu mới hiện trong danh sách với **Mã phiếu** dạng **DC…**. Mở lại ô chọn hàng trong một phiếu kho để thấy tồn đã đổi, hoặc xem **Sổ cái kho** ([TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/)): dòng tăng hiện loại **DC_TANG**, dòng giảm **DC_GIAM**.

### Sửa phiếu

Bấm **Sửa** → cửa sổ **PHIẾU ĐIỀU CHỈNH KHO - CẬP NHẬT**. Sửa được mọi ô và bảng chi tiết. Khi lưu, hệ thống **xoá toàn bộ chi tiết cũ rồi ghi lại chi tiết mới**: tồn được hoàn lại theo dòng cũ rồi tính lại theo dòng mới. Nếu dòng tăng cũ đã bị xuất bớt, việc hoàn lại có thể bị chặn (xem phần “Vướng mắc thường gặp”).

## 6. Giải thích các thông tin trên màn hình

- **Ngày điều chỉnh kho**: Ý nghĩa: Ngày ghi nhận chênh lệch; Bắt buộc: Có; Lưu ý: Không thuộc kỳ đã khoá; sổ cái tính lại từ ngày này
- **Kho điều chỉnh**: Ý nghĩa: Kho được tăng / giảm tồn; Bắt buộc: Có; Lưu ý: Chỉ hiện kho của chi nhánh đang làm việc
- **Mã phiếu gốc**: Ý nghĩa: Số biên bản kiểm kê / chứng từ gốc; Bắt buộc: Có; Lưu ý: Không có thì ghi "không có"
- **Mã phiếu**: Ý nghĩa: Mã phiếu điều chỉnh (**DC…**); Lưu ý: Tự tạo khi lưu
- **Ghi chú**: Ý nghĩa: Lý do điều chỉnh; Bắt buộc: Có; Lưu ý: In ở dòng **Lý do** trên phiếu
- **Hàng hóa**: Ý nghĩa: Mặt hàng điều chỉnh; Bắt buộc: Có (mỗi dòng); Lưu ý: Ô chọn hiện tồn hiện tại / tồn được xuất / lô được xuất
- **Lô hàng**: Ý nghĩa: Lô cần điều chỉnh; Bắt buộc: Không; Lưu ý: Với hàng quản lý theo lô
- **Đvt**: Ý nghĩa: Đơn vị tính chính; Lưu ý: Tự lấy, không sửa
- **Khối lượng / Kiện / M³**: Ý nghĩa: Theo Số lượng × thông số hàng; Lưu ý: Tự tính; âm khi Số lượng âm
- **Số lượng**: Ý nghĩa: Số chênh lệch; Bắt buộc: Có; Lưu ý: Dương = tăng, âm = giảm; nhận tới 7 chữ số thập phân
- **Chú thích**: Ý nghĩa: Ghi chú dòng; Bắt buộc: Không; Lưu ý: In ở cột GHI CHÚ trên phiếu

## 7. Kiểm tra sau khi thực hiện

- Phiếu được lưu với mã **DC…**, hiện ở **PHIẾU ĐIỀU CHỈNH KHO - DANH SÁCH**.
- Tồn kho từng mặt hàng ở kho điều chỉnh **tăng** (dòng dương) hoặc **giảm** (dòng âm).
- Sổ cái kho có dòng **DC_TANG** / **DC_GIAM**; giá vốn của mặt hàng được tính lại từ ngày điều chỉnh.
- Lịch sử thêm phiếu được lưu.

## 8. Những điều cần lưu ý

⚠️ **Nhập số chênh lệch, không nhập số đếm được.** Ví dụ hệ thống 8, đếm được 9 thì nhập **1**, không nhập 9. Quan sát thử: điều chỉnh **+1** làm tồn từ 8 lên 9.

⚠️ Dòng **giảm** bị chặn nếu vượt **tồn được xuất** (tồn hiện tại trừ phần đang giữ cho đơn bán chưa xuất, gia công, chuyển kho). Kiểm tra số trong ngoặc ở ô chọn hàng trước khi nhập.

⚠️ Điều chỉnh tăng được ghi vào sổ cái kho theo **đơn giá vốn hiện có** của mặt hàng (không có thì theo giá bình quân hiện hành); điều chỉnh giảm ghi theo giá bình quân hiện hành. Người lập không nhập giá.

⚠️ Bấm **Đóng** hoặc dấu ✕ là đóng cửa sổ **không lưu**, không hỏi lại.

⚠️ Không lập / sửa phiếu có **Ngày điều chỉnh kho** thuộc kỳ kế toán đã khoá.

### "CẢNH BÁO – Lỗi thêm: "<tên kho>", "<tên hàng>" không đủ tồn (<số>)." 

Nguyên nhân: dòng điều chỉnh giảm lớn hơn tồn được xuất của mặt hàng ở kho (số trong ngoặc là tồn được xuất hiện có).
Cách xử lý: kiểm tra lại số kiểm kê và kho; giữ số kiểm kê thực tế, đối chiếu phần giữ hàng với người phụ trách. Chỉ giải phóng giữ hàng khi nghiệp vụ đó thực sự được hủy/điều chỉnh; không giảm số chênh lệch chỉ để lưu được phiếu.

### "CẢNH BÁO – Lỗi thêm: Lô "<mã lô>" "<tên hàng>" không đủ tồn (<số>)." 

Nguyên nhân: điều chỉnh giảm vượt tồn của lô đã chọn.
Cách xử lý: đối chiếu đúng lô, số kiểm kê và phần giữ lô; báo thủ kho/kế toán chốt cách xử lý nếu số chênh lệch thực tế vượt số được xuất.

### Ô viền đỏ, lời nhắc "Vui lòng nhập mã phiếu gốc hoặc mã phiếu từ NCC…" 

Nguyên nhân: để trống **MÃ PHIẾU GỐC**.
Cách xử lý: nhập số biên bản, hoặc chữ **không có**.

### Ô viền đỏ, lời nhắc "Vui lòng chọn kho điều chỉnh" / "Vui lòng ghi nội dung điều chỉnh kho" / "Chọn ngày điều chỉnh kho" 

Nguyên nhân: thiếu trường bắt buộc.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "<số dòng>. Hàng hóa là bắt buộc" 

Nguyên nhân: có dòng chưa chọn hàng hoá (thường là dòng trống cuối bảng).
Cách xử lý: chọn hàng hoặc xoá dòng bằng biểu tượng thùng rác.

### "CẢNH BÁO – Lỗi thêm: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: ngày điều chỉnh thuộc kỳ kế toán đã khoá.
Cách xử lý: kiểm tra ngày thực tế và báo kế toán nếu thuộc kỳ đã khóa; không đổi ngày chỉ để lưu được.

## 10. Câu hỏi thường gặp

**Một phiếu có vừa tăng vừa giảm được không?**
Được. Mỗi dòng một mặt hàng, dòng dương tăng, dòng âm giảm, cùng một kho.

**Điều chỉnh ở hai kho khác nhau thì sao?**
Mỗi phiếu chỉ một kho điều chỉnh. Lập phiếu riêng cho từng kho.

**Chuyển hàng từ kho này sang kho kia có dùng phiếu điều chỉnh không?**
Không. Dùng **Phiếu xuất chuyển kho** và **Phiếu nhập chuyển kho** (KHO-A06, KHO-A08).

## 11. Công việc tiếp theo

```text
Lập phiếu điều chỉnh kho
        ↓
Đính kèm biên bản kiểm kê: chuột phải → File đính kèm (GEN-12)
        ↓
In phiếu ký xác nhận: chuột phải → In Phiếu (KHO-A03.0)
        ↓
Đối chiếu: Sổ cái kho (KHO-A09.0) · Thống kê kho → Điều chỉnh kho (KHO-C05.0)
```

**Tiếp theo:** [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU KHO TỪ EXCEL](/bai-viet/2026-11-07-kho-a03-2-huong-dan-nhap-chi-tiet-phieu-kho-tu-excel/) – Hướng dẫn nhập chi tiết phiếu kho từ Excel; [TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-c05-0-tong-quan-man-hinh-thong-ke-chi-tiet-dieu-chinh-kho/) – Tổng quan màn hình Điều chỉnh kho.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-0-tong-quan-man-hinh-phieu-dieu-chinh-kho/) – Tổng quan màn hình Phiếu điều chỉnh kho
- [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU KHO TỪ EXCEL](/bai-viet/2026-11-07-kho-a03-2-huong-dan-nhap-chi-tiet-phieu-kho-tu-excel/) – Hướng dẫn nhập chi tiết phiếu kho từ Excel
- [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/) – Tổng quan màn hình Sổ cái kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-c05-0-tong-quan-man-hinh-thong-ke-chi-tiet-dieu-chinh-kho/) – Tổng quan màn hình Điều chỉnh kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/) – Tổng quan màn hình Xuất nhập tồn
