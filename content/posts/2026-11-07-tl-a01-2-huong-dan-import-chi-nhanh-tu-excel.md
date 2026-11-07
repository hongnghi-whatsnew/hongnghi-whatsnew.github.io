---
title: "HƯỚNG DẪN IMPORT CHI NHÁNH TỪ EXCEL"
date: "2026-11-07"
summary: "Khi cần tạo nhiều chi nhánh / đơn vị cùng lúc (ví dụ lúc triển khai ERP), bạn nhập vào file Excel mẫu rồi nạp lên ERP thay cho việc thêm từng chi nhánh."
module: "Thiết lập danh mục"
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

Khi cần tạo nhiều chi nhánh / đơn vị cùng lúc (ví dụ lúc triển khai ERP), bạn nhập vào file Excel mẫu rồi nạp lên ERP thay cho việc thêm từng chi nhánh. Cửa sổ **CHI NHÁNH - IMPORT TỪ EXCEL** cho xem lại, sửa trực tiếp từng ô, xoá dòng thừa trước khi lưu.

Import chỉ **thêm mới**: không sửa được chi nhánh đã có. Mọi chi nhánh import lên đều ở trạng thái **Kích hoạt**. Import chỉ tạo bản ghi trong CSDL hiện tại; không tự tạo môi trường, tên miền hoặc tài khoản hệ thống chính thức riêng.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Thêm mới** màn **Chi nhánh / Đơn vị**.
- File Excel `.xlsx` hoặc `.xls`, điền theo file mẫu (xem phần “Thực hiện trên phần mềm”).
- Mã chi nhánh trong file chưa có trên hệ thống (kể cả chi nhánh đã ngưng sử dụng).

## 2. Mở chức năng

**Thiết lập danh mục → Chi nhánh / Đơn vị → Import Excel**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Hình 1: Cửa sổ import Chi nhánh trước khi tải file; bảng hiện không có dữ liệu.](/posts/2026-11-07-tl-a01-2-huong-dan-import-chi-nhanh-tu-excel/ui-20261026-tl-a01-import-figure-01.png)

- **Bảng xem trước**: Chức năng: Các cột **Mã chi nhánh**, **Tên chi nhánh**, **Tên công ty**, **Mã số thuế**, **CIF Code**, **Người đại diện**, **Chức vụ**, **Địa chỉ**, **Email**, **Điện thoại**, **Fax**, **Hostname**, **Logo URL**, **Ghi chú**. Bấm vào ô để sửa; biểu tượng thùng rác cuối dòng để xoá dòng
- **Thêm một hàng**: Chức năng: Thêm một dòng trống để nhập tay
- **Tải lên từ Excel**: Chức năng: Chọn file `.xlsx` / `.xls` từ máy
- **Tải file mẫu**: Chức năng: Tải file `[TEMPLATE IMPORT] CHI NHANH.xlsx`
- **Lưu / Đóng**: Chức năng: Lưu cả bảng / đóng không lưu

## 4. Trình tự công việc

```text
Tải file mẫu ──► điền dữ liệu ──► Tải lên từ Excel
                                     ↓
                  Bảng xem trước (dòng có Ghi chú bắt đầu "!" là mã đã có)
                                     ↓
                  Sửa ô / xoá dòng sai ──► Lưu
                       ├── có lỗi ──► báo lỗi, KHÔNG chi nhánh nào được lưu
                       └── hợp lệ ──► "Lưu thành công", cửa sổ đóng, danh sách tải lại
```

## 5. Thực hiện trên phần mềm

**Bước 1 –** Bấm **Tải file mẫu** để tải file mẫu. Mở file, điền mỗi chi nhánh một dòng. Dòng đầu của file mẫu là tên cột, **giữ nguyên, không đổi tên cột**:

- **`machinhanh`**: Ý nghĩa: Mã chi nhánh (bắt buộc)
- **`tenchinhanh`**: Ý nghĩa: Tên chi nhánh (bắt buộc)
- **`masothue`, `tencongty`**: Ý nghĩa: Mã số thuế, tên công ty
- **`fax`, `dienthoai`, `email`, `diachi`**: Ý nghĩa: Liên hệ
- **`logo_url`, `hostname`**: Ý nghĩa: Đường dẫn logo, tên miền riêng
- **`cif_code`, `nguoidaidien`, `nguoidaidien_chucvu`**: Ý nghĩa: Mã CIF, người đại diện, chức vụ
- **`ghichu`**: Ý nghĩa: Ghi chú

**Bước 2 –** Bấm **Tải lên từ Excel** và chọn đúng **một** file. ERP đọc **sheet đầu tiên** và hiện các dòng lên bảng xem trước. Dòng không có `machinhanh` bị bỏ qua.

**Bước 3 –** Kiểm tra bảng. Dòng có **Ghi chú** bắt đầu bằng dấu `!` là dòng có mã đã tồn tại trên hệ thống — sửa mã hoặc xoá dòng đó. Xoá dòng bằng biểu tượng thùng rác (xoá ngay, không hỏi lại). Cần thêm dòng thì bấm **Thêm một hàng**.

**Bước 4 –** Bấm **Lưu**. Toàn bộ bảng được lưu cùng lúc; chỉ cần một dòng lỗi thì không chi nhánh nào được lưu.

## 6. Giải thích các thông tin trên màn hình

- **Mã chi nhánh**: Ý nghĩa: Mã viết liền; Bắt buộc: Có; Lưu ý: Tối đa 50 ký tự; không trùng mã đã có; không trùng nhau giữa các dòng trong file; mã tự nhập
- **Tên chi nhánh**: Ý nghĩa: Tên chi nhánh; Bắt buộc: Có; Lưu ý: Tối đa 255 ký tự
- **Các cột còn lại**: Ý nghĩa: Thông tin pháp nhân, liên hệ; Bắt buộc: Không; Lưu ý: Ý nghĩa như cửa sổ ([TỔNG QUAN MÀN HÌNH CHI NHÁNH / ĐƠN VỊ](/bai-viet/2026-11-07-tl-a01-0-tong-quan-man-hinh-chi-nhanh-don-vi/), phần “Giải thích các thông tin trên màn hình”)

Cửa sổ import **không** kiểm tra từng dòng như cửa sổ thêm tay (không báo mã quá ngắn, mã có khoảng trắng…). Nên điền đúng quy tắc ở [TỔNG QUAN MÀN HÌNH CHI NHÁNH / ĐƠN VỊ](/bai-viet/2026-11-07-tl-a01-0-tong-quan-man-hinh-chi-nhanh-don-vi/) ngay trong file.

## 7. Kiểm tra sau khi thực hiện

Tất cả chi nhánh trong bảng được thêm vào danh sách, trạng thái **Kích hoạt**, người tạo là bạn. Nếu một dòng lỗi, **toàn bộ lần lưu bị huỷ**.

## 8. Những điều cần lưu ý

⚠️ Import **chỉ thêm mới**. Muốn sửa chi nhánh đã có, dùng liên kết **Sửa** ([TỔNG QUAN MÀN HÌNH CHI NHÁNH / ĐƠN VỊ](/bai-viet/2026-11-07-tl-a01-0-tong-quan-man-hinh-chi-nhanh-don-vi/)).

⚠️ **Lưu theo kiểu tất cả hoặc không có gì**: chỉ cần một dòng trùng mã hoặc thiếu tên thì không chi nhánh nào được lưu. Sửa dòng lỗi rồi bấm **Lưu** lại.

⚠️ **Không đổi tên cột** ở dòng đầu file mẫu, nếu không dữ liệu cột đó không được đọc.

### "Vui lòng chọn đúng 1 file." 

Nguyên nhân: không chọn file hoặc chọn nhiều file.
Cách xử lý: bấm **Tải lên từ Excel** và chọn đúng một file `.xlsx` / `.xls`.

### Bảng xem trước trống sau khi tải file 

Nguyên nhân: sheet đầu không có dữ liệu, không có dòng tên cột đúng như file mẫu, hoặc cột `machinhanh` để trống.
Cách xử lý: tải lại file mẫu, dán dữ liệu vào sheet đầu, giữ nguyên dòng tên cột.

### Ghi chú bắt đầu "! Không tìm thấy chi nhánh…" 

Nguyên nhân: mã trong dòng đó **đã có** trên hệ thống (câu ghi chú hệ thống đặt chưa đúng ý nghĩa).
Cách xử lý: đổi sang mã khác hoặc xoá dòng; xem lại danh sách chi nhánh, kể cả chi nhánh **Ngưng sử dụng**.

### "Lỗi khi lưu dữ liệu: …" 

Nguyên nhân: có dòng trùng mã, thiếu mã hoặc thiếu tên chi nhánh, hoặc không đủ quyền **Thêm mới**.
Cách xử lý: sửa dòng lỗi (xem phần “Giải thích các thông tin trên màn hình”) rồi **Lưu** lại; báo không có quyền thì liên hệ quản trị hệ thống.

## 10. Câu hỏi thường gặp

**Import có ghi đè chi nhánh đã có không?**
Không. Mã đã có sẽ bị báo lỗi, không cập nhật.

**Có import được chi nhánh ở trạng thái ngưng sử dụng không?**
Không, mọi dòng lưu ở trạng thái **Kích hoạt**; muốn ngưng thì **Sửa** sau khi lưu.

## 11. Công việc tiếp theo

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH KHO HÀNG](/bai-viet/2026-11-07-tl-a09-0-tong-quan-man-hinh-kho-hang/) – Tổng quan màn hình Kho hàng (khai báo kho cho chi nhánh mới).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH CHI NHÁNH / ĐƠN VỊ](/bai-viet/2026-11-07-tl-a01-0-tong-quan-man-hinh-chi-nhanh-don-vi/) – Tổng quan màn hình Chi nhánh / Đơn vị
- [TỔNG QUAN MÀN HÌNH KHO HÀNG](/bai-viet/2026-11-07-tl-a09-0-tong-quan-man-hinh-kho-hang/) – Tổng quan màn hình Kho hàng
