---
title: "HƯỚNG DẪN IMPORT THÀNH PHẨM TỪ EXCEL / ẢNH"
date: "2026-11-07"
summary: "Cửa sổ Import của màn Thành phẩm giúp tạo nhiều thành phẩm cùng lúc: - Tải lên từ Excel: nạp file theo mẫu (Tải file mẫu)."
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

Cửa sổ **Import** của màn **Thành phẩm** giúp tạo nhiều thành phẩm cùng lúc:

- **Tải lên từ Excel**: nạp file theo mẫu (**Tải file mẫu**).
- **Tải lên từ ảnh**: đọc bảng in, ảnh chụp màn hình phần mềm khác hoặc tem kiện, thay cho việc gõ lại vào file Excel. Mỗi dòng có quy cách **dày x rộng x dài** là một thành phẩm. Hệ thống dò **định mức**, **số mặt**, **tiêu chuẩn**, **NCC**, **loại hàng** theo danh mục rồi **sinh mã + tên thành phẩm** theo công thức như cửa sổ Thêm mới.
- **Mặc định cho cả lô**: chọn một lần ĐVT chính, ĐVT phụ, Quy đổi, NCC, Định mức gia công, Loại hàng cho các dòng còn trống.
- **Áp dụng cho những dòng dưới** (chuột phải trên lưới): chép giá trị một ô xuống các dòng bên dưới.

Dữ liệu chỉ được lưu khi bạn bấm **Lưu** ở cửa sổ Import.

Cách sử dụng cửa sổ đọc ảnh: **[ĐỌC DỮ LIỆU TỪ ẢNH / PDF (CỬA SỔ QUÉT DÙNG CHUNG)](/bai-viet/2026-11-07-gen-08-doc-du-lieu-tu-anh-pdf-cua-so-quet-dung-chung/)**. **hướng dẫn của bộ phận phụ trách** dành cho IT cấu hình OCR khi có lỗi hệ thống.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- **Định mức**, **số mặt**, **tiêu chuẩn**, **loại hàng**, **ĐVT** của thành phẩm **đã có trong danh mục**. Thành phần chưa có thì dòng báo lỗi; hãy thêm danh mục trước (Thiết lập → Định mức, Danh mục tiêu chuẩn…).
- Đọc từ ảnh: mỗi dòng phải có quy cách **dày x rộng x dài** (ví dụ `17x1220x2440`).
- File ảnh hoặc **.pdf**, mỗi file **tối đa 20 MB**, chọn được nhiều file.
- Cách dùng cửa sổ đọc ảnh dùng chung: xem **[ĐỌC DỮ LIỆU TỪ ẢNH / PDF (CỬA SỔ QUÉT DÙNG CHUNG)](/bai-viet/2026-11-07-gen-08-doc-du-lieu-tu-anh-pdf-cua-so-quet-dung-chung/)**.

## 2. Mở chức năng

**Hàng hoá → Thành phẩm → Import Excel**

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ THÀNH PHẨM - IMPORT với khối Mặc định cho cả lô](/posts/2026-11-07-tl-d11-2-huong-dan-import-thanh-pham-tu-excel-anh/hinh-01-cua-so-import-mac-dinh.png)

- **Mặc định cho cả lô (điền vào ô trống của dòng từ Excel và ảnh)**: Ý nghĩa: Khối gập ở đầu cửa sổ
- **ĐVT chính, ĐVT phụ, Quy đổi, NCC, Định mức gia công, Loại hàng**: Ý nghĩa: Giá trị chung cho các dòng còn trống
- **Áp xuống lưới**: Ý nghĩa: Điền mặc định vào ô **còn trống** của mọi dòng đang có, rồi tự kiểm tra lại
- **Lưới import**: Ý nghĩa: Mỗi dòng là một thành phẩm; bấm vào ô để sửa; chuột phải để **Áp dụng cho những dòng dưới**
- **Cột Ghi chú/Lỗi**: Ý nghĩa: Lý do dòng chưa lưu được (cuối lưới)
- **Thêm một hàng, Tải lên từ Excel, Tải lên từ ảnh**: Ý nghĩa: Ba cách đưa dòng vào lưới. **Tải lên từ Excel thay toàn bộ lưới**; đọc ảnh và Thêm một hàng **nối thêm** vào lưới đang có
- **Kiểm tra lại**: Ý nghĩa: Gửi cả lưới đi kiểm tra; mã thành phẩm sinh lại theo thành phần mới
- **Lưu / Đóng**: Ý nghĩa: Chỉ bấm được **Lưu** khi không còn lỗi và đã kiểm tra sau lần sửa cuối

Ô **Cách đọc** nằm trong cửa sổ **THÀNH PHẨM - ĐỌC TỪ ẢNH** (Hình 2):

- **Mỗi dòng một thành phẩm (bảng in, ảnh màn hình)**: Dùng khi: Ảnh là bảng. Đây là lựa chọn mặc định
- **Cả ảnh một thành phẩm (tem, nhãn kiện)**: Dùng khi: Mỗi ảnh / trang là một thành phẩm

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Danh sách Thành phẩm
        ↓
Import Excel  (cửa sổ THÀNH PHẨM - IMPORT)
        ├── Tải lên từ Excel
        └── Tải lên từ ảnh  (cửa sổ THÀNH PHẨM - ĐỌC TỪ ẢNH)
```

```text
Import Excel → (tuỳ chọn) Mặc định cho cả lô
        ↓
Tải lên từ Excel
   hoặc
Tải lên từ ảnh → Cách đọc → Chọn file → khoanh vùng → Đọc → Xác nhận
        ↓
Hệ thống tìm dòng thành phẩm, dò danh mục, áp mặc định, sinh mã + tên, kiểm tra
        ↓
Sửa dòng lỗi / xoá dòng thừa trên lưới → Kiểm tra lại → Lưu
```

### Bước 1 – Mở cửa sổ Import và chọn mặc định

1. Vào **Hàng hoá → Thành phẩm** và bấm **Import Excel** (Hình 1).
2. Mở khối **Mặc định cho cả lô** và chọn giá trị chung nếu ảnh / file không có, ví dụ **ĐVT chính** `Tấm`, **ĐVT phụ** `Kiện`. Giá trị đã có giữ nguyên.
3. Nếu chọn mặc định sau khi đã nạp dòng, bấm **Áp xuống lưới**.

### Bước 2a – Nạp từ file Excel

Bấm **Tải lên từ Excel** và chọn file. Mặc định tự điền vào ô trống, rồi hệ thống kiểm tra.

### Bước 2b – Đọc từ ảnh

1. Bấm **Tải lên từ ảnh**.
2. Chọn **Cách đọc**, bấm **Chọn file** (chọn được nhiều ảnh / PDF), khoanh quanh bảng nếu ảnh có tiêu đề / logo, rồi bấm **Đọc**.
3. Xem chữ đọc được ở cột phải (Hình 2). Nếu sai nhiều, khoanh lại hoặc xoay ảnh rồi bấm **Đọc lại**. Với ảnh nhỏ, cửa sổ báo **Ảnh nhỏ (…) đã được phóng to để đọc — soát kỹ từng dòng.**
4. Bấm **Xác nhận**. Hệ thống báo **Đã đưa N dòng từ ảnh vào lưới — soát cột Ghi chú/Lỗi.** (Hình 3).

![Hình 2: Đọc bảng 10 thành phẩm – chữ đọc được ở cột phải](/posts/2026-11-07-tl-d11-2-huong-dan-import-thanh-pham-tu-excel-anh/hinh-02-doc-bang-thanh-pham.png)

![Hình 3: Các dòng vào lưới, mã + tên thành phẩm đã sinh theo công thức](/posts/2026-11-07-tl-d11-2-huong-dan-import-thanh-pham-tu-excel-anh/hinh-03-luoi-sau-khi-doc.png)

### Bước 3 – Soát trên lưới

1. Kéo thanh cuộn ngang để xem cột **Ghi chú/Lỗi** (Hình 4).
2. Sửa dòng lỗi:
   - nhiều dòng thiếu cùng một giá trị (ví dụ ĐVT phụ): chọn ở **Mặc định cho cả lô** rồi bấm **Áp xuống lưới**;
   - một dòng sai: bấm vào ô và sửa (ví dụ **Mã gia công**);
   - nhiều dòng cùng giá trị: sửa dòng đầu, rồi chuột phải ô đó và chọn **Áp dụng cho những dòng dưới**;
   - dòng không muốn lấy: xoá ở cuối dòng.
3. Bấm **Kiểm tra lại**. Hệ thống báo **Còn N dòng lỗi** hoặc **Hết lỗi — bấm Lưu.**

![Hình 4: Cột Ghi chú/Lỗi – thiếu ĐVT phụ, thiếu định mức do máy đọc sai, mã đã tồn tại](/posts/2026-11-07-tl-d11-2-huong-dan-import-thanh-pham-tu-excel-anh/hinh-04-cot-ghi-chu-loi.png)

### Bước 4 – Lưu

Nút **Lưu** chỉ mở khi hết lỗi. Bấm **Lưu**; thành phẩm mới hiện ở danh sách.

## 6. Giải thích các thông tin trên màn hình

- **Mã / Tên thành phẩm**: Cách có giá trị: Máy sinh; Lưu ý: Ghép định mức + số mặt + tiêu chuẩn + (dày x rộng x dài) + NCC + loại hàng; sửa thành phần rồi **Kiểm tra lại** thì sinh lại
- **Mã gia công (định mức)**: Bắt buộc: Có; Cách có giá trị: Đọc từ ảnh / mặc định; Lưu ý: Phải có trong danh mục Định mức
- **Số mặt, Tiêu chuẩn**: Bắt buộc: Có; Cách có giá trị: Đọc từ ảnh; Lưu ý: Phải có trong danh mục
- **Dày / Rộng / Dài**: Bắt buộc: Có; Cách có giá trị: Đọc từ cụm quy cách; Lưu ý: Số
- **NCC**: Bắt buộc: Không; Cách có giá trị: Đọc từ ảnh / mặc định; Lưu ý: Chữ tự do
- **ĐVT chính / phụ, Quy đổi**: Bắt buộc: Theo màn; Cách có giá trị: Mặc định / sửa trên lưới; Lưu ý: Thường không có trong ảnh. ĐVT ghi trong ảnh (`Tấm`) vẫn được tách khỏi NCC, kể cả khi máy đọc sai dấu thành `Tắm`

## 7. Kiểm tra sau khi thực hiện

Thành phẩm mới xuất hiện ở danh sách **Thành phẩm** sau khi **Lưu** thành công. **Chưa bấm Lưu thì chưa có gì được lưu.**

## 8. Những điều cần lưu ý

⚠️ **Không lưu được khi còn dòng lỗi.** Sau khi sửa bất kỳ ô nào phải bấm **Kiểm tra lại** trước khi Lưu.

⚠️ Với ảnh chụp màn hình bảng, máy dựa chủ yếu vào cột **mã thành phẩm** trong ảnh. Số lượng / quy đổi riêng từng dòng phải nhập lại trên lưới.

⚠️ **Luôn đối chiếu dữ liệu nhận dạng với file gốc.** Ví dụ OCR đọc `101T` thành `1011` mà danh mục có cả `101T` lẫn `701T`, thì ô Mã gia công để trống để bạn tự chọn.

⚠️ **Tải lên từ Excel thay toàn bộ lưới** (dòng đọc từ ảnh trước đó mất): nạp Excel trước, đọc ảnh sau. Các lần đọc ảnh được **nối thêm** vào lưới. Đọc lại cùng một ảnh, hoặc ảnh và PDF trùng nội dung, sẽ sinh dòng trùng.

### "Chưa chọn định mức gia công. Vui lòng kiểm tra lại." 

Nguyên nhân: định mức không có trong danh mục, hoặc máy đọc sai mã (ví dụ `029PL` thành `0U29PL`).
Cách xử lý: sửa ô **Mã gia công**, chọn **Định mức gia công** ở Mặc định cho cả lô, hoặc thêm định mức vào danh mục; rồi **Kiểm tra lại**.

### "Không tìm thấy mã tiêu chuẩn. Vui lòng kiểm tra lại." 

Cách xử lý: thêm tiêu chuẩn ở **Danh mục tiêu chuẩn** hoặc sửa ô, rồi **Kiểm tra lại**.

### "Không tìm thấy tên đơn vị tính phụ. Vui lòng kiểm tra lại." 

Cách xử lý: chọn **ĐVT phụ** ở **Mặc định cho cả lô** rồi bấm **Áp xuống lưới**.

### "Mã thành phẩm đã tồn tại" 

Cách xử lý: thành phẩm đã có trong danh mục; xoá dòng đó.

### "Mã thành phẩm bị trùng trong file import" 

Cách xử lý: cùng một thành phẩm được đọc hai lần; xoá dòng thừa.

### "Không thấy dòng nào có quy cách dày x rộng x dài — ảnh mờ/viết tay thì nhập tay trên lưới (Thêm một hàng)." 

Cách xử lý: xem chữ đọc được trong cửa sổ đọc ảnh; khoanh vùng lại, hoặc nhập tay bằng **Thêm một hàng**.

### "Lưới vừa được sửa — bấm Kiểm tra lại trước khi Lưu." 

Cách xử lý: bấm **Kiểm tra lại**.

## 10. Câu hỏi thường gặp

**Ảnh ghi mã, ảnh khác ghi tên – có đọc được không?**
Được. Máy so cả mã lẫn tên danh mục (bỏ khoảng trắng), ví dụ `MEL(HN)335PL2MLMRE2(17x1220x2440)KT` và `MEL (HN) 335PL 2M LMR E2 (17x1220x2440) KT`.

**Cửa sổ đọc ảnh có cho tick chọn từng dòng không?**
Không. Mọi dòng đọc được đều vào thẳng lưới; dòng thừa thì xoá trên lưới.

**Ô Cách đọc có ảnh hưởng tới import Excel không?**
Không. Ô này chỉ nằm trong cửa sổ đọc ảnh.

## 11. Công việc tiếp theo

```text
Import thành phẩm → Lưu → kiểm tra ở danh sách
        ↓
(nếu cần đổi hàng loạt) TL-D11.3 Sửa nhiều
```

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN SỬA, XOÁ NHIỀU THÀNH PHẨM CÙNG LÚC](/bai-viet/2026-11-07-tl-d11-3-huong-dan-sua-xoa-nhieu-thanh-pham-cung-luc/) – Sửa / xoá nhiều thành phẩm
- [HƯỚNG DẪN IMPORT HÀNG TRƠN TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d09-3-huong-dan-import-hang-tron-tu-excel-anh/) – Import hàng trơn từ Excel / ảnh
