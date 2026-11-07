---
title: "HƯỚNG DẪN IMPORT HÀNG TRƠN TỪ EXCEL / ẢNH"
date: "2026-11-07"
summary: "Cửa sổ Import của màn Hàng trơn giúp tạo nhiều hàng trơn cùng lúc: - Tải lên từ Excel: nạp file theo mẫu (Tải file mẫu)."
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

Cửa sổ **Import** của màn **Hàng trơn** giúp tạo nhiều hàng trơn cùng lúc:

- **Tải lên từ Excel**: nạp file theo mẫu (**Tải file mẫu**).
- **Tải lên từ ảnh**: đọc bảng in, báo giá, ảnh chụp màn hình phần mềm khác. Mỗi dòng có quy cách **dày x rộng x dài** (ví dụ `18x1220x2440`) là một hàng trơn. Hệ thống tách **tiêu chuẩn**, **quy cách**, **NCC**, **loại hàng**, **ĐVT** rồi **sinh mã + tên hàng** theo công thức như cửa sổ Thêm mới.
- **Mặc định cho cả lô**: chọn một lần những thông tin ảnh / file không có (ĐVT chính, ĐVT phụ, Quy đổi, NCC, Loại hàng).
- **Áp dụng cho những dòng dưới** (chuột phải trên lưới): chép giá trị một ô xuống các dòng bên dưới.

Dữ liệu chỉ được lưu khi bạn bấm **Lưu** ở cửa sổ Import.

Cách sử dụng cửa sổ đọc ảnh: **[ĐỌC DỮ LIỆU TỪ ẢNH / PDF (CỬA SỔ QUÉT DÙNG CHUNG)](/bai-viet/2026-11-07-gen-08-doc-du-lieu-tu-anh-pdf-cua-so-quet-dung-chung/)**. **hướng dẫn của bộ phận phụ trách** dành cho IT cấu hình OCR khi có lỗi hệ thống.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- **Tiêu chuẩn**, **loại hàng**, **đơn vị tính** của hàng **đã có trong danh mục**. Thành phần chưa có thì dòng báo lỗi; hãy thêm danh mục trước.
- Đọc từ ảnh: mỗi dòng phải có quy cách **dày x rộng x dài**. Hệ thống dựa vào cụm này để nhận ra một hàng trơn.
- File ảnh (**.jpg,.jpeg,.png,.bmp,.gif,.webp,.tif,.tiff**) hoặc **.pdf**, mỗi file **tối đa 20 MB**.
- Cách dùng cửa sổ đọc ảnh dùng chung: xem **[ĐỌC DỮ LIỆU TỪ ẢNH / PDF (CỬA SỔ QUÉT DÙNG CHUNG)](/bai-viet/2026-11-07-gen-08-doc-du-lieu-tu-anh-pdf-cua-so-quet-dung-chung/)**.

## 2. Mở chức năng

**Hàng hoá → Hàng trơn → Import Excel**

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ HÀNG TRƠN - IMPORT với khối Mặc định cho cả lô](/posts/2026-11-07-tl-d09-3-huong-dan-import-hang-tron-tu-excel-anh/hinh-01-cua-so-import-mac-dinh.png)

- **Mặc định cho cả lô (điền vào ô trống của dòng từ Excel và ảnh)**: Ý nghĩa: Khối gập ở đầu cửa sổ
- **ĐVT chính, ĐVT phụ, Quy đổi, NCC, Loại hàng**: Ý nghĩa: Giá trị chung cho các dòng còn trống
- **Áp xuống lưới**: Ý nghĩa: Điền mặc định vào ô **còn trống** của mọi dòng đang có trên lưới, rồi tự kiểm tra lại
- **Lưới import**: Ý nghĩa: Mỗi dòng là một hàng trơn; bấm vào ô để sửa
- **Cột Ghi chú/Lỗi**: Ý nghĩa: Lý do dòng chưa lưu được (cuối lưới)
- **Thêm một hàng, Tải lên từ Excel, Tải lên từ ảnh**: Ý nghĩa: Ba cách đưa dòng vào lưới. **Tải lên từ Excel thay toàn bộ lưới**; đọc ảnh và Thêm một hàng **nối thêm** vào lưới đang có
- **Kiểm tra lại**: Ý nghĩa: Gửi cả lưới đi kiểm tra; mã + tên hàng được sinh lại theo thành phần mới
- **Tải file mẫu**: Ý nghĩa: Tải file Excel mẫu
- **Lưu / Đóng**: Ý nghĩa: Chỉ bấm được **Lưu** khi không còn dòng lỗi và đã kiểm tra lại sau lần sửa cuối

![Hình 2: Ô Cách đọc trong cửa sổ HÀNG TRƠN - ĐỌC TỪ ẢNH](/posts/2026-11-07-tl-d09-3-huong-dan-import-hang-tron-tu-excel-anh/hinh-02-cach-doc-trong-cua-so-quet.png)

- **Mỗi dòng một hàng trơn (bảng in, ảnh màn hình)**: Dùng khi: Ảnh là bảng, mỗi dòng một hàng. Đây là lựa chọn mặc định
- **Cả ảnh một hàng trơn (tem, nhãn kiện)**: Dùng khi: Mỗi ảnh (hoặc mỗi trang PDF) là một hàng

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Danh sách Hàng trơn
        ↓
Import Excel  (cửa sổ HÀNG TRƠN - IMPORT)
        ├── Tải lên từ Excel
        └── Tải lên từ ảnh  (cửa sổ HÀNG TRƠN - ĐỌC TỪ ẢNH)
```

```text
Import Excel → (tuỳ chọn) Mặc định cho cả lô
        ↓
Tải lên từ Excel   hoặc   Tải lên từ ảnh → Cách đọc → Chọn file → Đọc → Xác nhận
        ↓
Hệ thống tìm dòng có quy cách, dò tiêu chuẩn / NCC / loại hàng,
áp mặc định, sinh mã + tên, kiểm tra
        ↓
Sửa trên lưới / Áp xuống lưới / chuột phải "Áp dụng cho những dòng dưới"
        ↓
Kiểm tra lại → Lưu
```

### Bước 1 – Mở cửa sổ Import và chọn mặc định

1. Vào **Hàng hoá → Hàng trơn** và bấm **Import Excel** (Hình 1).
2. Bấm tiêu đề **Mặc định cho cả lô**  và chọn giá trị chung nếu ảnh / file không có, ví dụ **ĐVT phụ** = `Kiện`, **Quy đổi** = `50`.

Mặc định **chỉ điền vào ô còn trống**; giá trị đọc được giữ nguyên.

### Bước 2a – Nạp từ file Excel

Bấm **Tải lên từ Excel**  và chọn file. Các dòng vào lưới, mặc định tự điền vào ô trống, rồi hệ thống kiểm tra.

### Bước 2b – Đọc từ ảnh

1. Bấm **Tải lên từ ảnh**.
2. Chọn **Cách đọc** (Hình 2), bấm **Chọn file** và chọn ảnh / PDF. Nếu ảnh có tiêu đề hay logo, kéo khung quanh bảng.
3. Bấm **Đọc**. Cột phải hiện chữ đọc được và độ tin cậy (Hình 3).
4. Bấm **Xác nhận**. Hệ thống báo **Đã đưa N dòng từ ảnh vào lưới — soát cột Ghi chú/Lỗi.** (Hình 4).

![Hình 3: Đọc bảng báo giá hàng trơn (dữ liệu giả lập)](/posts/2026-11-07-tl-d09-3-huong-dan-import-hang-tron-tu-excel-anh/hinh-03-doc-bang-hang-tron.png)

Từ mỗi dòng như `MDF E2 (18x1220x2440) NK U`, hệ thống tách:

- **Tiêu chuẩn**: Ví dụ: `MDF E2`; Ghi chú: Phần chữ trước quy cách, dò theo danh mục tiêu chuẩn
- **Dày / Rộng / Dài**: Ví dụ: `18`, `1220`, `2440`; Ghi chú: Lấy từ cụm `dày x rộng x dài`
- **NCC**: Ví dụ: `NK`; Ghi chú: Phần chữ sau quy cách
- **Loại hàng**: Ví dụ: `U`; Ghi chú: Dò theo danh mục loại hàng, kể cả khi dính liền NCC (`NKU`)
- **ĐVT**: Ví dụ: `Tấm`; Ghi chú: Nếu dòng có ghi; nhận cả khi máy đọc sai dấu (`Tắm`)

![Hình 4: Các dòng vào lưới, mã + tên hàng đã sinh theo công thức](/posts/2026-11-07-tl-d09-3-huong-dan-import-hang-tron-tu-excel-anh/hinh-04-luoi-sau-khi-doc.png)

### Bước 3 – Soát và sửa trên lưới

Kéo thanh cuộn ngang để xem cột **Ghi chú/Lỗi** (Hình 5). Dưới lưới hiện **Còn N dòng lỗi (xem cột Ghi chú/Lỗi) — sửa trên lưới rồi bấm Kiểm tra lại.** và nút **Lưu** bị khoá.

![Hình 5: Cột Ghi chú/Lỗi – thiếu ĐVT phụ, mã đã tồn tại](/posts/2026-11-07-tl-d09-3-huong-dan-import-hang-tron-tu-excel-anh/hinh-05-cot-ghi-chu-loi.png)

Có ba cách sửa:

- **Áp xuống lưới**: chọn giá trị ở **Mặc định cho cả lô** rồi bấm **Áp xuống lưới**. Hệ thống điền vào ô trống, tự kiểm tra lại và báo **Đã áp mặc định xuống các ô trống trên lưới và kiểm tra lại.** (Hình 6).
- **Chuột phải → Áp dụng cho những dòng dưới**: chép giá trị ô đó xuống mọi dòng phía dưới (ghi đè) rồi tự kiểm tra lại (Hình 7). Mục này không có ở cột mã, tên, tên in và Ghi chú/Lỗi.
- **Sửa từng ô**: bấm vào ô và gõ lại. Muốn bỏ dòng thì bấm biểu tượng xoá ở cuối dòng.

![Hình 6: Chọn ĐVT phụ Kiện, Quy đổi 50 rồi Áp xuống lưới – còn 1 dòng lỗi (mã đã tồn tại)](/posts/2026-11-07-tl-d09-3-huong-dan-import-hang-tron-tu-excel-anh/hinh-06-ap-xuong-luoi.png)

![Hình 7: Chuột phải trên ô – Áp dụng cho những dòng dưới](/posts/2026-11-07-tl-d09-3-huong-dan-import-hang-tron-tu-excel-anh/hinh-07-ap-dung-dong-duoi.png)

### Bước 4 – Kiểm tra lại và Lưu

1. Bấm **Kiểm tra lại**. Mã + tên hàng được sinh lại theo thành phần đã sửa. Hệ thống báo **Còn N dòng lỗi (xem cột Ghi chú/Lỗi).** hoặc **Hết lỗi — bấm Lưu.**
2. Khi hết lỗi, bấm **Lưu**. Hàng trơn mới hiện ở danh sách.

## 6. Giải thích các thông tin trên màn hình

- **Mã hàng trơn / Tên hàng trơn**: Cách có giá trị: Máy sinh; Lưu ý: Ghép tiêu chuẩn + (dày x rộng x dài) + NCC + loại hàng; sửa thành phần rồi **Kiểm tra lại** thì sinh lại
- **Mã tiêu chuẩn**: Bắt buộc: Có; Cách có giá trị: Đọc từ ảnh / file; Lưu ý: Phải có trong danh mục tiêu chuẩn
- **Dày / Rộng / Dài**: Bắt buộc: Có; Cách có giá trị: Đọc từ cụm quy cách; Lưu ý: Số
- **NCC**: Bắt buộc: Không; Cách có giá trị: Đọc từ ảnh / mặc định; Lưu ý: Chữ tự do, không phải danh mục
- **Mã loại hàng**: Bắt buộc: Không; Cách có giá trị: Đọc từ ảnh / mặc định; Lưu ý: Nếu có thì phải có trong danh mục loại hàng
- **Mã ĐVT chính, ĐVT phụ**: Bắt buộc: Có; Cách có giá trị: Đọc từ ảnh / mặc định; Lưu ý: Phải có trong danh mục đơn vị tính
- **Quy đổi**: Bắt buộc: Không; Cách có giá trị: Mặc định / sửa tay; Lưu ý: Số ĐVT chính trong 1 ĐVT phụ

## 7. Kiểm tra sau khi thực hiện

- Sau khi **Lưu**, hàng trơn mới xuất hiện ở danh sách **Hàng trơn** với mã và tên theo công thức.
- **Chưa bấm Lưu thì chưa có gì được lưu.**

## 8. Những điều cần lưu ý

⚠️ **Không lưu được khi còn dòng lỗi.** Sau khi sửa bất kỳ ô nào phải bấm **Kiểm tra lại** trước khi Lưu.

⚠️ **Luôn đối chiếu dữ liệu nhận dạng với file gốc.** Nếu chữ đọc được khớp nhiều danh mục, ô đó để trống để bạn tự chọn.

⚠️ Dòng không có cụm quy cách `dày x rộng x dài` bị bỏ qua. Hãy nhập tay bằng **Thêm một hàng**.

⚠️ **Tải lên từ Excel thay toàn bộ lưới** (dòng đọc từ ảnh trước đó mất): nạp Excel trước, đọc ảnh sau. Các lần **đọc ảnh được nối thêm** vào lưới; đọc lại cùng một ảnh sẽ sinh dòng trùng, cần xoá dòng thừa.

⚠️ **Áp dụng cho những dòng dưới ghi đè** giá trị ở các dòng dưới, tính theo thứ tự lúc nạp vào lưới.

### "Không tìm thấy tên đơn vị tính phụ. Vui lòng kiểm tra lại." 

Nguyên nhân: ảnh / file không có ĐVT phụ.
Cách xử lý: chọn **ĐVT phụ** ở **Mặc định cho cả lô** rồi bấm **Áp xuống lưới**.

### "Không tìm thấy mã đơn vị tính.. Vui lòng kiểm tra lại." 

Cách xử lý: chọn **ĐVT chính** ở **Mặc định cho cả lô** rồi bấm **Áp xuống lưới**, hoặc sửa ô trên lưới.

### "Không tìm thấy mã tiêu chuẩn. Vui lòng kiểm tra lại." 

Nguyên nhân: tiêu chuẩn chưa có trong danh mục, hoặc máy đọc sai.
Cách xử lý: sửa ô **Mã tiêu chuẩn**, hoặc thêm tiêu chuẩn ở **Danh mục tiêu chuẩn**, rồi **Kiểm tra lại**.

### "Không tìm thấy mã loại hàng: X. Vui lòng kiểm tra lại." 

Cách xử lý: sửa ô **Mã loại hàng** hoặc xoá trống, rồi **Kiểm tra lại**.

### "Mã hàng trơn đã tồn tại. Vui lòng kiểm tra lại." 

Nguyên nhân: hàng trơn đã có trong danh mục.
Cách xử lý: xoá dòng đó.

### "Mã hàng trơn bị trùng trong file import. Vui lòng kiểm tra lại." 

Nguyên nhân: cùng một hàng được đọc hai lần.
Cách xử lý: xoá dòng thừa.

### "Không thấy dòng nào có quy cách dày x rộng x dài — ảnh mờ/viết tay thì nhập tay trên lưới (Thêm một hàng)." 

Cách xử lý: khoanh vùng quanh bảng rồi **Đọc lại**, hoặc nhập tay bằng **Thêm một hàng**.

### "Lưới vừa được sửa — bấm Kiểm tra lại trước khi Lưu." 

Cách xử lý: bấm **Kiểm tra lại**.

## 10. Câu hỏi thường gặp

**Ô Cách đọc có ảnh hưởng tới import Excel không?**
Không. Ô này chỉ nằm trong cửa sổ **HÀNG TRƠN - ĐỌC TỪ ẢNH**.

**Mặc định cho cả lô có ghi đè dữ liệu trong file Excel không?**
Không, mặc định chỉ điền vào ô còn trống.

**Sửa tiêu chuẩn trên lưới thì mã có đổi không?**
Có. Sau khi bấm **Kiểm tra lại**, mã và tên hàng được sinh lại theo thành phần mới.

**Có đọc được nguyên liệu từ ảnh không?**
Chưa. Nguyên liệu không có cụm quy cách để nhận dạng; chức năng sẽ làm khi có ảnh mẫu thật.

## 11. Công việc tiếp theo

```text
Import hàng trơn → Lưu → kiểm tra ở danh sách
        ↓
(nếu cần đổi hàng loạt) TL-D09.2 Sửa nhiều
```

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN SỬA, XOÁ NHIỀU HÀNG TRƠN CÙNG LÚC](/bai-viet/2026-11-07-tl-d09-2-huong-dan-sua-xoa-nhieu-hang-tron-cung-luc/) – Sửa / xoá nhiều hàng trơn
- [HƯỚNG DẪN IMPORT THÀNH PHẨM TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d11-2-huong-dan-import-thanh-pham-tu-excel-anh/) – Import thành phẩm từ Excel / ảnh
