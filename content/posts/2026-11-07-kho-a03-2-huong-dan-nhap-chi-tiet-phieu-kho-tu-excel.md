---
title: "HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU KHO TỪ EXCEL"
date: "2026-11-07"
summary: "Khi phiếu có nhiều dòng hàng (ví dụ kết quả kiểm kê cả kho), thay vì chọn từng dòng, bạn điền mã hàng, số lượng, chú thích vào file Excel mẫu rồi tải lên."
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

Khi phiếu có nhiều dòng hàng (ví dụ kết quả kiểm kê cả kho), thay vì chọn từng dòng, bạn điền **mã hàng, số lượng, chú thích** vào file Excel mẫu rồi tải lên. Hệ thống tìm hàng theo mã và đưa các dòng vào bảng chi tiết của cửa sổ.

Bài này dùng cho cửa sổ **Phiếu điều chỉnh kho** ([HƯỚNG DẪN LẬP PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-1-huong-dan-lap-phieu-dieu-chinh-kho/)) và **Phiếu nhập gửi hàng** ([HƯỚNG DẪN LẬP PHIẾU NHẬP KHO GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-1-huong-dan-lap-phieu-nhap-kho-gui-hang/)). File mẫu tên **[TEMPLATE IMPORT] DCK-XCK-XH.xlsx** cũng là mẫu của Phiếu xuất chuyển kho và Phiếu xuất hàng (xem bài của từng màn).

Việc tải file **chưa** làm thay đổi tồn kho. Tồn chỉ thay đổi khi bạn bấm **Lưu lại** phiếu.

Mẫu file và quy tắc nạp nằm trong bài này. Xuất danh sách ra Excel để đối chiếu: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Đang mở cửa sổ **Thêm mới** hoặc **Sửa** của Phiếu điều chỉnh kho / Phiếu nhập gửi hàng, đã chọn **kho**.
- Biết **mã hàng hoá** chính xác của từng mặt hàng (đúng như cột mã trong danh mục Hàng hoá).
- Máy có Excel hoặc phần mềm mở được file.xlsx.

## 2. Mở chức năng

**Kho hàng → Phiếu điều chỉnh kho (hoặc Phiếu nhập gửi hàng) → Thêm mới → Tải file mẫu / Tải lên từ Excel**

## 3. Nhận biết màn hình

![Hình 1: Nút Tải lên từ Excel và Tải file mẫu ở chân cửa sổ](/posts/2026-11-07-kho-a03-2-huong-dan-nhap-chi-tiet-phieu-kho-tu-excel/hinh-01-nut-tai-len-excel.png)

- **Tải file mẫu**: Ý nghĩa: Tải về file **[TEMPLATE IMPORT] DCK-XCK-XH.xlsx**
- **Tải lên từ Excel**: Ý nghĩa: Chọn file đã điền để nạp vào bảng chi tiết
- **Bảng chi tiết**: Ý nghĩa: Hiện các dòng đã nạp

**Cấu trúc file mẫu** (sheet **DATA**):

- **A**: Tiêu đề (giữ nguyên): `mahanghoa`; Nội dung: Mã hàng hoá, đúng như danh mục; Bắt buộc: Có
- **B**: Tiêu đề (giữ nguyên): `soluong`; Nội dung: Số lượng (phiếu điều chỉnh: dương tăng, âm giảm); Bắt buộc: Có
- **C**: Tiêu đề (giữ nguyên): `chuthich`; Nội dung: Chú thích dòng; Bắt buộc: Không

Bên phải file mẫu có ghi chú: **Định dạng:** *giữ nguyên tiêu đề của từng cột*; **Lưu ý:** *Xoá dữ liệu từ dòng thứ 2 và thêm vào dữ liệu cần import.* Dòng 2–3 của file mẫu là dữ liệu ví dụ, phải xoá trước khi điền.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kho hàng
   ↓
Phiếu điều chỉnh kho / Phiếu nhập gửi hàng
   ↓
Thêm mới (hoặc Sửa)
   ↓
Tải file mẫu → điền file → Tải lên từ Excel
```

```text
cửa sổ phiếu → chọn kho → Tải file mẫu
      ↓
Mở file → xoá dòng ví dụ → điền mahanghoa, soluong, chuthich → lưu file
      ↓
Tải lên từ Excel → chọn file
      ↓
Bảng chi tiết được THAY bằng các dòng trong file
   ├── mã đúng: điền Hàng hóa, Đvt, Số lượng, Chú thích
   └── mã sai: ô Hàng hóa trống, Chú thích ghi "Lỗi! Sản phẩm không tồn tại…"
      ↓
Sửa / xoá dòng lỗi → kiểm tra số lượng → Lưu lại phiếu
```

### Bước 1 – Tải file mẫu

Trong cửa sổ phiếu (đã chọn kho), bấm **Tải file mẫu**. Trình duyệt tải về **[TEMPLATE IMPORT] DCK-XCK-XH.xlsx**.

### Bước 2 – Điền file

1. Mở file, ở sheet **DATA** xoá các dòng ví dụ từ dòng 2 trở xuống.
2. Mỗi dòng một mặt hàng: cột **mahanghoa** ghi mã hàng, **soluong** ghi số lượng, **chuthich** ghi chú (nếu có).
3. Giữ nguyên dòng tiêu đề và thứ tự cột. Không thêm sheet khác lên trước sheet **DATA**.
4. Lưu file (.xlsx).

Ví dụ phiếu điều chỉnh sau kiểm kê:

- **LDFE2(9x1220x2440)DW**: soluong: 1; chuthich: thừa khi kiểm kê
- **LDFE2(8x1220x2440)DW**: soluong: -2; chuthich: thiếu khi kiểm kê

Các dòng trùng mã hàng trong file được xử lý riêng, không tự gộp hay tự loại. Hệ thống chỉ đọc sheet đầu tiên, bỏ dòng hoàn toàn trống. Các ô số để trống được đọc thành **0**, không giữ giá trị đã có trước khi nạp.

### Bước 3 – Tải lên

Bấm **Tải lên từ Excel**, chọn file vừa lưu. Hệ thống đọc file và **thay toàn bộ** các dòng đang có trong bảng chi tiết bằng các dòng trong file.

### Bước 4 – Kiểm tra các dòng đã nạp

- Dòng có mã đúng: ô **Hàng hóa**, **Đvt**, **Số lượng**, **Chú thích** đã điền.
- Dòng có mã sai / hàng ngưng kinh doanh: ô **Hàng hóa** trống, ô **Chú thích** ghi **"<chú thích>" Lỗi! Sản phẩm không tồn tại, hoặc ngưng kinh doanh.** – chọn lại hàng đúng cho dòng đó, hoặc xoá dòng.
- Với hàng quản lý theo lô: chọn **Lô hàng** cho từng dòng (file không có cột lô).
- Đối chiếu số dòng, số lượng và đơn vị chính. Dữ liệu import không nạp trọng lượng, hệ số quy đổi kiện, m³ hoặc tỷ lệ quy đổi đơn vị như khi chọn hàng tay; không dùng các ô Khối lượng / Kiện / M³ trống làm bằng chứng số liệu đã đủ. Nếu cần các thông tin này, chọn lại hàng trên từng dòng rồi kiểm tra lại số lượng/lô trước khi ghi.

### Bước 5 – Lưu phiếu

Nhập đủ thông tin chung của phiếu rồi bấm **Lưu lại** (làm như bước Lưu lại của [HƯỚNG DẪN LẬP PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-1-huong-dan-lap-phieu-dieu-chinh-kho/) / [HƯỚNG DẪN LẬP PHIẾU NHẬP KHO GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-1-huong-dan-lap-phieu-nhap-kho-gui-hang/)).

## 6. Giải thích các thông tin trên màn hình

- **mahanghoa**: Ý nghĩa: Mã hàng hoá; Bắt buộc: Có; Lưu ý: So khớp đúng từng ký tự (bỏ khoảng trắng đầu / cuối)
- **soluong**: Ý nghĩa: Số lượng; Bắt buộc: Có; Lưu ý: Số; ô trống được đọc thành 0; phiếu điều chỉnh dùng số âm để giảm, không áp dụng ví dụ số âm cho phiếu nhập gửi hàng
- **chuthich**: Ý nghĩa: Chú thích dòng; Bắt buộc: Không; Lưu ý: Với mã sai, hệ thống ghi thêm câu lỗi vào đây

## 7. Kiểm tra sau khi thực hiện

- Bảng chi tiết của cửa sổ chứa các dòng trong file; dòng mã sai được đánh dấu ở cột Chú thích.
- Phiếu **chưa** được lưu, tồn kho **chưa** thay đổi cho tới khi bấm **Lưu lại**.

## 8. Những điều cần lưu ý

⚠️ **Tải lên thay toàn bộ dòng đang có** trong bảng chi tiết, kể cả các dòng đã nhập tay trước đó. Tải file trước, rồi mới thêm tay dòng bổ sung.

⚠️ Mã hàng phải **đúng chính xác** như trong danh mục. Mã gõ sai một ký tự sẽ thành dòng lỗi.

⚠️ File không có cột lô hàng và đơn vị tính: hàng được nạp theo đơn vị tính chính; hàng quản lý theo lô phải chọn lô bằng tay.

⚠️ Dòng giảm (số âm) vẫn được kiểm tra **tồn được xuất** khi lưu phiếu.

### Dòng có Chú thích "Lỗi! Sản phẩm không tồn tại, hoặc ngưng kinh doanh." 

Nguyên nhân: mã hàng trong file không có trong danh mục, gõ sai, hoặc hàng đã ngưng kinh doanh.
Cách xử lý: chọn lại hàng đúng ở ô **Hàng hóa** và xoá câu lỗi khỏi Chú thích, hoặc xoá dòng.

### "CẢNH BÁO – Không có sản phẩm" 

Nguyên nhân: không mã nào trong file khớp danh mục (hoặc file trống, sai tiêu đề cột).
Cách xử lý: kiểm tra dòng tiêu đề đúng `mahanghoa`, `soluong`, `chuthich` và mã hàng.

### "<số dòng>. Hàng hóa là bắt buộc" khi lưu 

Nguyên nhân: còn dòng lỗi mã hàng chưa xử lý.
Cách xử lý: chọn hàng cho dòng đó hoặc xoá dòng.

### Bấm Tải lên từ Excel, chọn lại cùng file nhưng không có gì thay đổi 

Cách xử lý: đóng cửa sổ mở lại, hoặc lưu file với tên khác rồi chọn lại.

### "Bạn không có quyền thực hiện chức năng này." khi tải lên trong cửa sổ Sửa 

Nguyên nhân: tài khoản chỉ có quyền **Cập nhật**, chức năng tải lên cần quyền **Thêm mới**.
Cách xử lý: nhập tay hoặc xin cấp quyền Thêm mới.

## 10. Câu hỏi thường gặp

**File có cần đúng tên [TEMPLATE IMPORT] DCK-XCK-XH.xlsx không?**
Không. Tên file tuỳ ý; chỉ cần đúng tiêu đề cột ở sheet đầu tiên.

**Số lượng có số lẻ được không?**
Được, ghi dạng số trong Excel.

**Tải lên xong có cần chọn kho lại không?**
Không. Khi lưu, mọi dòng lấy theo kho đã chọn trên phiếu.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-1-huong-dan-lap-phieu-dieu-chinh-kho/) – bước Lưu lại phiếu điều chỉnh kho; hoặc [HƯỚNG DẪN LẬP PHIẾU NHẬP KHO GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-1-huong-dan-lap-phieu-nhap-kho-gui-hang/) – bước Lưu lại phiếu nhập gửi hàng.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-1-huong-dan-lap-phieu-dieu-chinh-kho/) – Hướng dẫn lập phiếu điều chỉnh kho
- [HƯỚNG DẪN LẬP PHIẾU NHẬP KHO GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-1-huong-dan-lap-phieu-nhap-kho-gui-hang/) – Hướng dẫn lập phiếu nhập kho gửi hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-0-tong-quan-man-hinh-phieu-xuat-chuyen-kho/) – Tổng quan màn hình Phiếu xuất chuyển kho
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-0-tong-quan-man-hinh-phieu-xuat-hang/) – Tổng quan màn hình Phiếu xuất hàng
