---
title: "HƯỚNG DẪN IMPORT NGUYÊN LIỆU TỪ EXCEL / ẢNH"
date: "2026-11-07"
summary: "Cửa sổ Import của màn Nguyên liệu giúp tạo nhiều nguyên liệu cùng lúc: - Tải lên từ Excel: nạp file theo mẫu (Tải file mẫu)."
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

Cửa sổ **Import** của màn **Nguyên liệu** giúp tạo nhiều nguyên liệu cùng lúc:

- **Tải lên từ Excel**: nạp file theo mẫu (**Tải file mẫu**).
- **Tải lên từ ảnh**: đọc **hoá đơn GTGT của NCC**, **báo giá / bảng giá NCC**, **bảng danh sách tự lập**, hoặc **tem / nhãn** nguyên liệu. Hệ thống tách **tên**, **đơn vị tính**, **đơn giá**, **định lượng (g, gsm)**, **khổ rộng**, **NCC** rồi đặt **mã = tên bỏ dấu, viết liền, chữ hoa** (đúng kiểu mã nguyên liệu đang dùng).
- **Mặc định cho cả lô**: chọn một lần **Đơn vị tính**, **Mã NCC**, **Phân loại** cho những dòng ảnh / file không có.
- **Kiểm tra lại**: gửi cả lưới đi kiểm tra sau khi sửa.

Dữ liệu chỉ được lưu khi bạn bấm **Lưu** ở cửa sổ Import.

Thao tác dùng chung liên quan: hướng dẫn của bộ phận phụ trách.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- **Đơn vị tính** của nguyên liệu **đã có trong danh mục**. Đơn vị chưa có thì dòng báo lỗi; hãy thêm danh mục trước.
- Muốn hệ thống tự nhận NCC: NCC **đã có trong danh mục Nhà cung cấp** và có **Mã số thuế** (dò theo MST người bán trên hoá đơn) hoặc tên đầy đủ (dò theo tên in trên báo giá).
- File ảnh (**.jpg,.jpeg,.png,.bmp,.gif,.webp,.tif,.tiff**) hoặc **.pdf**, mỗi file **tối đa 20 MB**.
- Cách dùng cửa sổ đọc ảnh dùng chung: xem **[ĐỌC DỮ LIỆU TỪ ẢNH / PDF (CỬA SỔ QUÉT DÙNG CHUNG)](/bai-viet/2026-11-07-gen-08-doc-du-lieu-tu-anh-pdf-cua-so-quet-dung-chung/)**.

## 2. Mở chức năng

**Hàng hoá → Nguyên liệu → Import Excel**

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ NGUYÊN LIỆU - IMPORT với khối Mặc định cho cả lô](/posts/2026-11-07-tl-d08-3-huong-dan-import-nguyen-lieu-tu-excel-anh/hinh-01-cua-so-import-mac-dinh.png)

- **Mặc định cho cả lô (điền vào ô trống của dòng từ Excel và ảnh)**: Ý nghĩa: Khối gập ở đầu cửa sổ
- **Đơn vị tính, Mã NCC, Phân loại**: Ý nghĩa: Giá trị chung cho các dòng còn trống
- **Áp xuống lưới**: Ý nghĩa: Điền mặc định vào ô **còn trống** của mọi dòng đang có, rồi tự kiểm tra lại
- **Lưới import**: Ý nghĩa: Mỗi dòng là một nguyên liệu; bấm vào ô để sửa
- **Cột Ghi chú**: Ý nghĩa: Lý do dòng chưa lưu được (cuối lưới)
- **Thêm một hàng, Tải lên từ Excel, Tải lên từ ảnh**: Ý nghĩa: Ba cách đưa dòng vào lưới. **Tải lên từ Excel thay toàn bộ lưới**; đọc ảnh và **Thêm một hàng** **nối thêm** vào lưới đang có
- **Kiểm tra lại**: Ý nghĩa: Gửi cả lưới đi kiểm tra sau khi sửa
- **Tải file mẫu**: Ý nghĩa: Tải file Excel mẫu
- **Lưu / Đóng**: Ý nghĩa: Chỉ bấm được **Lưu** khi không còn dòng lỗi và đã kiểm tra lại sau lần sửa cuối

![Hình 2: Ô Cách đọc trong cửa sổ NGUYÊN LIỆU - ĐỌC TỪ ẢNH](/posts/2026-11-07-tl-d08-3-huong-dan-import-nguyen-lieu-tu-excel-anh/hinh-02-cach-doc-trong-cua-so-quet.png)

- **Mỗi dòng một nguyên liệu (bảng danh sách, báo giá, hoá đơn)**: Dùng khi: Ảnh là bảng, mỗi dòng một nguyên liệu. Đây là lựa chọn mặc định
- **Cả ảnh một nguyên liệu (tem, nhãn)**: Dùng khi: Mỗi ảnh (hoặc mỗi trang PDF) là một nguyên liệu

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Danh sách Nguyên liệu
        ↓
Import Excel  (cửa sổ NGUYÊN LIỆU - IMPORT)
        ├── Tải lên từ Excel
        └── Tải lên từ ảnh  (cửa sổ NGUYÊN LIỆU - ĐỌC TỪ ẢNH)
```

```text
Import Excel → (tuỳ chọn) Mặc định cho cả lô
        ↓
Tải lên từ Excel   hoặc   Tải lên từ ảnh → Cách đọc → Chọn file → Đọc → Xác nhận
        ↓
Hệ thống bỏ dòng tiêu đề / chân hoá đơn, tách tên / ĐVT / giá / quy cách,
dò NCC theo MST, đặt mã = tên viết liền, áp mặc định, kiểm tra
        ↓
Sửa trên lưới / Áp xuống lưới
        ↓
Kiểm tra lại → Lưu
```

### Bước 1 – Mở cửa sổ Import và chọn mặc định

1. Vào **Hàng hoá → Nguyên liệu** và bấm **Import Excel** (Hình 1).
2. Bấm tiêu đề **Mặc định cho cả lô**  và chọn giá trị chung nếu ảnh / file không có, ví dụ **Đơn vị tính** = `Kg`.

Mặc định **chỉ điền vào ô còn trống**; giá trị đọc được giữ nguyên.

### Bước 2a – Nạp từ file Excel

Bấm **Tải lên từ Excel**  và chọn file. Các dòng vào lưới, mặc định tự điền vào ô trống, rồi hệ thống kiểm tra.

### Bước 2b – Đọc từ ảnh

1. Bấm **Tải lên từ ảnh**.
2. Chọn **Cách đọc** (Hình 2), bấm **Chọn file** và chọn ảnh / PDF (được nhiều file một lượt). Ảnh có logo, tiêu đề lớn ngoài bảng: kéo khung quanh bảng.
3. Bấm **Đọc**. Cột phải hiện chữ đọc được từng trang và độ tin cậy (Hình 3).
4. Bấm **Xác nhận**. Hệ thống báo **Đã đưa N dòng từ ảnh vào lưới — soát cột Ghi chú.** (Hình 4)

![Hình 3: Đọc 3 ảnh giả lập: hoá đơn GTGT, báo giá, tem](/posts/2026-11-07-tl-d08-3-huong-dan-import-nguyen-lieu-tu-excel-anh/hinh-03-doc-3-anh-nguyen-lieu.png)

Từ mỗi dòng hàng như `2 Giấy nhúng keo vân gỗ 80gsm (1250) Cuộn 10 1.850.000 18.500.000`, hệ thống tách:

- **Tên nguyên liệu**: Ví dụ: `Giấy nhúng keo vân gỗ 80gsm (1250)`; Cách tách: Phần chữ trước ĐVT; bỏ số thứ tự đầu dòng
- **Mã nguyên liệu**: Ví dụ: `GIAYNHUNGKEOVANGO80GSM(1250)`; Cách tách: Tên bỏ dấu, viết liền, chữ hoa
- **Đơn vị tính**: Ví dụ: `Cuộn`; Cách tách: Dò theo danh mục đơn vị tính: khớp đúng chữ trước; chữ sai dấu / hoa thường chỉ nhận khi khớp **đúng một** mã ĐVT
- **Đơn giá**: Ví dụ: `1.850.000`; Cách tách: Có số lượng × đơn giá ≈ thành tiền thì lấy đơn giá; báo giá chỉ một số thì lấy số đó
- **Định lượng**: Ví dụ: `80`; Cách tách: Số đứng trước `g`, `gr`, `gsm`, `g/m2`
- **Khổ rộng**: Ví dụ: `1250`; Cách tách: Số trong ngoặc `(1250)`, sau chữ `khổ`, hoặc `x1250mm`
- **NCC**: Ví dụ: `ANTHIENPHUC`; Cách tách: Mã số thuế người bán in trên hoá đơn khớp MST trong danh mục NCC; không có MST thì theo tên NCC in trên trang (chỉ khi khớp đúng một NCC)

Dòng tiêu đề bảng (STT, Tên hàng, Đơn giá…), dòng người bán / người mua, Mã số thuế, Cộng tiền hàng, Thuế suất, Tổng cộng… được **bỏ qua**, không thành nguyên liệu.

**Tem / nhãn** (Cách đọc = Cả ảnh một nguyên liệu): dòng chữ dài nhất trên tem là tên (giữ cả số trong tên, ví dụ `GIẤY NHÚNG KEO 6034`); định lượng và khổ dò trên cả tem.

![Hình 4: Hoá đơn + báo giá ra 7 dòng — mã theo tên, ĐVT, đơn giá, NCC theo MST](/posts/2026-11-07-tl-d08-3-huong-dan-import-nguyen-lieu-tu-excel-anh/hinh-04-luoi-sau-khi-doc.png)

### Bước 3 – Soát và sửa trên lưới

Kéo thanh cuộn ngang để xem cột **Ghi chú** (Hình 5). Còn dòng lỗi thì hệ thống báo **Còn N dòng lỗi (xem cột Ghi chú).** và nút **Lưu** bị khoá. Vừa sửa ô mà chưa kiểm tra lại thì **Lưu** cũng khoá.

![Hình 5: Xoá ĐVT dòng 3 rồi Kiểm tra lại — Ghi chú báo lỗi, Lưu khoá](/posts/2026-11-07-tl-d08-3-huong-dan-import-nguyen-lieu-tu-excel-anh/hinh-05-cot-ghi-chu-loi.png)

Có hai cách sửa:

- **Áp xuống lưới**: chọn giá trị ở **Mặc định cho cả lô** rồi bấm **Áp xuống lưới**. Hệ thống điền vào ô trống, tự kiểm tra lại và báo **Đã áp mặc định xuống các ô trống trên lưới và kiểm tra lại.** (Hình 6)
- **Sửa từng ô**: bấm vào ô và gõ lại (tên đọc sai dấu, giá…). Muốn bỏ dòng thì bấm biểu tượng xoá ở cuối dòng. Thiếu dòng thì bấm **Thêm một hàng**.

![Hình 6: Chọn Đơn vị tính Kg, Áp xuống lưới — hết lỗi, Lưu mở lại](/posts/2026-11-07-tl-d08-3-huong-dan-import-nguyen-lieu-tu-excel-anh/hinh-06-ap-xuong-luoi.png)

### Bước 4 – Kiểm tra lại và Lưu

1. Bấm **Kiểm tra lại**. Hệ thống báo **Còn N dòng lỗi (xem cột Ghi chú).** hoặc **Hết lỗi — bấm Lưu.**
2. Khi hết lỗi, bấm **Lưu**. Nguyên liệu mới hiện ở danh sách.
3. Mở lại **Sửa** một mẫu để kiểm **LOẠI NVL (621)**, nghiệp vụ/gia công nếu dùng sản xuất ([HƯỚNG DẪN THÊM, SỬA NGUYÊN LIỆU](/bai-viet/2026-11-07-tl-d08-1-huong-dan-them-sua-nguyen-lieu/)). Bản thảo import chưa mô tả cách các trường này được gán; chưa dùng kết quả import làm bằng chứng đã sẵn sàng tính giá thành.

## 6. Giải thích các thông tin trên màn hình

- **Mã nguyên liệu**: Bắt buộc: Có; Cách có giá trị: Máy đặt từ tên (đọc ảnh) / file Excel; Lưu ý: Không trùng mã đã có. Sửa được trên lưới
- **Tên nguyên liệu**: Bắt buộc: Có; Cách có giá trị: Đọc từ ảnh / file; Lưu ý: Soát dấu tiếng Việt
- **Tên in**: Bắt buộc: Không; Cách có giá trị: File Excel / sửa tay
- **Mã đơn vị tính**: Bắt buộc: Có; Cách có giá trị: Đọc từ ảnh / mặc định; Lưu ý: Phải có trong danh mục đơn vị tính
- **Mã NCC**: Bắt buộc: Không; Cách có giá trị: MST / tên trên ảnh, hoặc mặc định; Lưu ý: Mã NCC trong danh mục
- **Phân loại**: Bắt buộc: Không; Cách có giá trị: Mặc định / sửa tay
- **Định lượng, Rộng**: Bắt buộc: Không; Cách có giá trị: Đọc từ tên / tem; Lưu ý: Số
- **Đơn giá**: Bắt buộc: Không; Cách có giá trị: Đơn giá trên hoá đơn / báo giá; Lưu ý: Lưu vào giá nhập của nguyên liệu

## 7. Kiểm tra sau khi thực hiện

- Sau khi **Lưu**, nguyên liệu mới xuất hiện ở danh sách **Nguyên liệu**.
- **Chưa bấm Lưu thì chưa có gì được lưu.**

## 8. Những điều cần lưu ý

⚠️ **Không lưu được khi còn dòng lỗi.** Sau khi sửa bất kỳ ô nào phải bấm **Kiểm tra lại** trước khi Lưu.

⚠️ **Hệ thống không đoán khi không chắc.** Dòng không có ĐVT và không có số (giá / số lượng) bị bỏ qua; tên NCC khớp nhiều NCC thì ô NCC để trống. Nhập tay bằng **Thêm một hàng** hoặc chọn ở **Mặc định cho cả lô**.

⚠️ **Máy đọc có thể sai dấu, dính chữ** (ví dụ `Bộtmìcôngnghiệp`, `GIÁẢY` thay `GIẤY`). Mã đặt theo tên nên **sửa tên thì sửa luôn mã** cho khớp.

⚠️ **Hoá đơn có số lượng nhưng không lưu số lượng** — import chỉ tạo danh mục nguyên liệu, không tạo phiếu nhập kho.

⚠️ **Tải lên từ Excel thay toàn bộ lưới** (dòng đọc từ ảnh trước đó mất): nạp Excel trước, đọc ảnh sau. Các lần **đọc ảnh được nối thêm**; đọc lại cùng một ảnh sẽ sinh dòng trùng mã — xoá dòng thừa.

### Dòng có Ghi chú "… Vui lòng kiểm tra lại." 

Nguyên nhân: thiếu / sai đơn vị tính, mã đã tồn tại, mã trùng trong lưới…
Cách xử lý: đọc đúng nội dung ở cột **Ghi chú**, sửa ô tương ứng (hoặc xoá dòng nếu nguyên liệu đã có) rồi **Kiểm tra lại**.

### "Còn N dòng lỗi (xem cột Ghi chú) — sửa trên lưới rồi bấm Kiểm tra lại." 

Cách xử lý: sửa các dòng lỗi rồi bấm **Kiểm tra lại**.

### "Không tìm thấy đơn vị tính theo mã.. Vui lòng kiểm tra lại." 

Nguyên nhân: dòng chưa có / sai mã đơn vị tính.
Cách xử lý: chọn **Đơn vị tính** ở **Mặc định cho cả lô** rồi **Áp xuống lưới**, hoặc sửa ô **Mã đơn vị tính**.

### "Mã hàng hóa đã tồn tại trong hệ thống. Vui lòng kiểm tra lại." 

Nguyên nhân: nguyên liệu đã có trong danh mục.
Cách xử lý: xoá dòng đó.

### "Mã hàng hóa bị trùng trong file import. Vui lòng kiểm tra lại." 

Nguyên nhân: cùng một nguyên liệu đọc hai lần (hoặc hai tên ra cùng mã).
Cách xử lý: xoá dòng thừa hoặc sửa mã.

### "Lưới vừa được sửa — bấm Kiểm tra lại trước khi Lưu." 

Cách xử lý: bấm **Kiểm tra lại**.

### "Chọn ít nhất một giá trị mặc định trước." 

Nguyên nhân: bấm **Áp xuống lưới** khi chưa chọn gì ở **Mặc định cho cả lô**.

### Ảnh đọc xong không có dòng nào vào lưới 

Nguyên nhân: không dòng nào có ĐVT hoặc số; ảnh mờ; chọn sai **Cách đọc** (tem mà chọn Mỗi dòng một nguyên liệu).
Cách xử lý: khoanh vùng quanh bảng, đổi Cách đọc rồi **Đọc lại**; không được thì nhập tay bằng **Thêm một hàng**.

## 10. Câu hỏi thường gặp

**NCC không tự nhận dù hoá đơn có MST?**
Kiểm tra NCC đó trong danh mục **Nhà cung cấp** đã có **Mã số thuế** đúng chưa. Chưa có thì chọn **Mã NCC** ở **Mặc định cho cả lô**.

**Mặc định cho cả lô có ghi đè dữ liệu đọc được không?**
Không, mặc định chỉ điền vào ô còn trống.

**Đọc ảnh báo giá có lưu bảng giá NCC không?**
Không. Đơn giá chỉ vào giá nhập của nguyên liệu (cột **Đơn giá** trên lưới). Bảng giá NCC nhập ở chức năng báo giá NCC.

## 11. Công việc tiếp theo

```text
Import nguyên liệu → Lưu → kiểm tra ở danh sách
        ↓
(nếu cần đổi hàng loạt) TL-D08.2 Sửa / xoá nhiều nguyên liệu
```

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN SỬA, XOÁ NHIỀU NGUYÊN LIỆU CÙNG LÚC](/bai-viet/2026-11-07-tl-d08-2-huong-dan-sua-xoa-nhieu-nguyen-lieu-cung-luc/) – Sửa / xoá nhiều nguyên liệu
- [HƯỚNG DẪN IMPORT HÀNG TRƠN TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d09-3-huong-dan-import-hang-tron-tu-excel-anh/) – Import hàng trơn từ Excel / ảnh
- [HƯỚNG DẪN IMPORT THÀNH PHẨM TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d11-2-huong-dan-import-thanh-pham-tu-excel-anh/) – Import thành phẩm từ Excel / ảnh
