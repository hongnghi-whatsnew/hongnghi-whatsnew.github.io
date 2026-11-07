---
title: "HƯỚNG DẪN IMPORT NHÀ CUNG CẤP TỪ EXCEL / ẢNH"
date: "2026-11-07"
summary: "Cửa sổ Import của màn Nhà cung cấp giúp tạo nhiều nhà cung cấp (NCC) cùng lúc: - Tải lên từ Excel: nạp file theo mẫu (Tải file mẫu)."
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

Cửa sổ **Import** của màn **Nhà cung cấp** giúp tạo nhiều nhà cung cấp (NCC) cùng lúc:

- **Tải lên từ Excel**: nạp file theo mẫu (**Tải file mẫu**).
- **Tải lên từ ảnh**: chụp hoặc scan **danh thiếp**, **giấy đăng ký kinh doanh**, **hoá đơn GTGT** (lấy phần **người bán**) hoặc **bảng danh sách in**. Hệ thống đọc tên, mã số thuế, địa chỉ, điện thoại, email, người đại diện, **số tài khoản**, **ngân hàng** và **tự gợi ý mã** từ tên.
- **Mặc định cho cả lô**: chọn một lần **Nhóm nhà cung cấp** và **Số ngày nợ** để điền vào mọi dòng còn trống.
- **Áp dụng cho những dòng dưới** (chuột phải trên lưới): chép giá trị một ô xuống các dòng bên dưới.

Dữ liệu chỉ được lưu khi bạn bấm **Lưu** ở cửa sổ Import.

Thao tác dùng chung liên quan: hướng dẫn của bộ phận phụ trách.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- **Nhóm nhà cung cấp** cần dùng **đã có trong danh mục**. Mỗi dòng import bắt buộc phải có nhóm.
- Muốn lưu tài khoản ngân hàng thì **ngân hàng phải có trong danh mục ngân hàng**. Hệ thống so theo **tên viết tắt** (ví dụ **Vietcombank**, **BIDV**).
- Đọc từ ảnh:
  - File ảnh (**.jpg,.jpeg,.png,.bmp,.gif,.webp,.tif,.tiff**) hoặc **.pdf**.
  - Mỗi file **tối đa 20 MB**.
- Import Excel: file **.xlsx /.xls** đúng mẫu.
- Cách dùng cửa sổ đọc ảnh dùng chung: xem **[ĐỌC DỮ LIỆU TỪ ẢNH / PDF (CỬA SỔ QUÉT DÙNG CHUNG)](/bai-viet/2026-11-07-gen-08-doc-du-lieu-tu-anh-pdf-cua-so-quet-dung-chung/)**.

## 2. Mở chức năng

**Nhà cung cấp → Nhà cung cấp → Import Excel**

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ NHÀ CUNG CẤP - IMPORT với khối Mặc định cho cả lô](/posts/2026-11-07-tl-b02-2-huong-dan-import-nha-cung-cap-tu-excel-anh/hinh-01-cua-so-import-mac-dinh.png)

- **Mặc định cho cả lô (điền vào ô trống của dòng từ Excel và ảnh)**: Ý nghĩa: Khối gập ở đầu cửa sổ
- **Nhóm nhà cung cấp, Số ngày nợ**: Ý nghĩa: Giá trị chung cho các dòng còn trống
- **Áp xuống lưới**: Ý nghĩa: Điền mặc định vào ô **còn trống** của mọi dòng đang có trên lưới, rồi tự kiểm tra lại
- **Lưới import**: Ý nghĩa: Mỗi dòng là một NCC. Bấm vào ô để sửa; chuột phải để **Áp dụng cho những dòng dưới**
- **Cột Ghi chú/Lỗi**: Ý nghĩa: Lý do dòng chưa lưu được (cuối lưới)
- **Thêm một hàng, Tải lên từ Excel, Tải lên từ ảnh**: Ý nghĩa: Ba cách đưa dòng vào lưới. **Tải lên từ Excel thay toàn bộ lưới**; đọc ảnh và Thêm một hàng **nối thêm** vào lưới đang có
- **Kiểm tra lại**: Ý nghĩa: Gửi cả lưới đi kiểm tra sau khi sửa
- **Tải file mẫu**: Ý nghĩa: Tải file Excel mẫu
- **Lưu / Đóng**: Ý nghĩa: Chỉ bấm được **Lưu** khi không còn dòng lỗi và đã kiểm tra lại sau lần sửa cuối

![Hình 2: Ô Cách đọc trong cửa sổ NHÀ CUNG CẤP - ĐỌC TỪ ẢNH](/posts/2026-11-07-tl-b02-2-huong-dan-import-nha-cung-cap-tu-excel-anh/hinh-02-cach-doc-trong-cua-so-quet.png)

- **Cả ảnh một NCC (danh thiếp, ĐKKD, hoá đơn — lấy bên bán)**: Dùng khi: Mỗi ảnh (hoặc mỗi trang PDF) là **một** NCC. Đây là lựa chọn mặc định
- **Mỗi dòng một NCC (bảng danh sách in)**: Dùng khi: Ảnh là một bảng, mỗi dòng là một NCC

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Danh sách Nhà cung cấp
        ↓
Import Excel  (cửa sổ NHÀ CUNG CẤP - IMPORT)
        ├── Tải lên từ Excel
        └── Tải lên từ ảnh  (cửa sổ NHÀ CUNG CẤP - ĐỌC TỪ ẢNH)
```

```text
Import Excel → mở "Mặc định cho cả lô", chọn Nhóm nhà cung cấp (bắt buộc)
        ↓
Tải lên từ Excel (mặc định tự điền ô trống)
   hoặc
Tải lên từ ảnh → Cách đọc → Chọn file → Đọc → Xác nhận
        ↓
Hệ thống kiểm tra từng dòng → lỗi ở cột Ghi chú/Lỗi
        ↓
Sửa trên lưới / Áp xuống lưới / chuột phải "Áp dụng cho những dòng dưới"
        ↓
Kiểm tra lại → Lưu
```

### Bước 1 – Mở cửa sổ Import

Vào **Nhà cung cấp → Nhà cung cấp** và bấm **Import Excel**. Cửa sổ **NHÀ CUNG CẤP - IMPORT** mở ra (Hình 1).

### Bước 2 – Chọn mặc định cho cả lô

Bấm tiêu đề **Mặc định cho cả lô**  rồi chọn **Nhóm nhà cung cấp**. Ảnh không có thông tin này mà mỗi dòng lại bắt buộc phải có nhóm. Nếu cả lô cùng số ngày nợ thì nhập **Số ngày nợ**.

Mặc định **chỉ điền vào ô còn trống**; ô đã có giá trị giữ nguyên.

### Bước 3a – Nạp từ file Excel

Bấm **Tải lên từ Excel**  và chọn file. Các dòng vào lưới, mặc định tự điền vào ô trống, rồi hệ thống kiểm tra từng dòng. **Mã NCC lấy theo file.**

### Bước 3b – Đọc từ ảnh

1. Bấm **Tải lên từ ảnh**.
2. Chọn **Cách đọc** (Hình 2):
   - danh thiếp, giấy ĐKKD, hoá đơn: chọn **Cả ảnh một NCC**;
   - bảng danh sách: chọn **Mỗi dòng một NCC**.
3. Bấm **Chọn file**, chọn ảnh / PDF, rồi bấm **Đọc** (Hình 3).
4. Bấm **Xác nhận**. Các dòng vào lưới (Hình 4).

![Hình 3: Đọc hoá đơn GTGT (dữ liệu giả lập) – lấy phần người bán](/posts/2026-11-07-tl-b02-2-huong-dan-import-nha-cung-cap-tu-excel-anh/hinh-03-doc-hoa-don-ncc.png)

- **Danh thiếp, giấy ĐKKD**: Thông tin lấy được: Tên công ty, MST, địa chỉ, điện thoại, email, người đại diện, STK, ngân hàng
- **Hoá đơn GTGT**: Thông tin lấy được: **Phần người bán** (phía trên dòng "Người mua"): tên, MST, địa chỉ, điện thoại, **số tài khoản**, **ngân hàng**
- **Bảng danh sách in**: Thông tin lấy được: Mỗi dòng có **MST, số điện thoại hoặc email** là một NCC. Chữ trước con số đầu tiên là tên, chữ sau con số cuối cùng là địa chỉ

**Mã gợi ý từ tên**: hệ thống bỏ loại hình doanh nghiệp và các từ chung, bỏ dấu, viết hoa, viết liền. Ví dụ **Công ty Cổ phần Vật liệu Anh Đào** → **ANHDAO**.

**Ngân hàng**: tên đọc được trên ảnh (ví dụ *Ngân hàng TMCP Ngoại Thương Việt Nam*) được đổi sang **tên viết tắt** trong danh mục ngân hàng (ví dụ **Vietcombank**).

![Hình 4: Dòng nhà cung cấp lấy từ phần người bán – chưa chọn Nhóm nhà cung cấp nên còn lỗi](/posts/2026-11-07-tl-b02-2-huong-dan-import-nha-cung-cap-tu-excel-anh/hinh-04-luoi-ncc-tu-hoa-don.png)

### Bước 4 – Soát và sửa trên lưới

Dòng lỗi có lý do ở cột **Ghi chú/Lỗi**, và nút **Lưu** bị khoá. Có ba cách sửa:

- **Sửa từng ô**: bấm vào ô và gõ lại. Muốn bỏ dòng thì bấm biểu tượng xoá ở cuối dòng.
- **Áp xuống lưới**: chọn **Nhóm nhà cung cấp** / **Số ngày nợ** ở khối mặc định rồi bấm **Áp xuống lưới**. Hệ thống điền vào ô trống và tự kiểm tra lại.
- **Chuột phải → Áp dụng cho những dòng dưới**: chép giá trị ô đó xuống mọi dòng phía dưới (ghi đè). Mục này không có ở cột mã, tên, tên rút gọn, MST, điện thoại, email, số tài khoản, tên chủ tài khoản, người đại diện và Ghi chú/Lỗi.

### Bước 5 – Kiểm tra lại và Lưu

1. Bấm **Kiểm tra lại**. Hệ thống báo **Còn N dòng lỗi (xem cột Ghi chú/Lỗi).** hoặc **Hết lỗi — bấm Lưu.**
2. Khi hết lỗi, bấm **Lưu**. NCC mới hiện ở danh sách; dòng có số tài khoản sẽ được lưu kèm tài khoản ngân hàng.

## 6. Giải thích các thông tin trên màn hình

- **Mã nhà cung cấp**: Bắt buộc: Có; Lưu ý: Không trùng với NCC đã có và không trùng trong lưới
- **Nhóm nhà cung cấp**: Bắt buộc: Có; Lưu ý: Chọn ở Mặc định cho cả lô hoặc sửa trên lưới
- **Số ngày nợ**: Bắt buộc: Không; Lưu ý: Số ≥ 0
- **Số tài khoản, Ngân hàng**: Bắt buộc: Không; Lưu ý: Nếu nhập một trong hai thì ngân hàng phải đúng **tên viết tắt** trong danh mục. Để trống cả hai = không lưu tài khoản ngân hàng
- **Cách đọc (cửa sổ đọc ảnh)**: Lưu ý: Lựa chọn được nhớ cho lần mở sau trong cùng cửa sổ Import

## 7. Kiểm tra sau khi thực hiện

- Sau khi **Lưu**, NCC mới xuất hiện ở danh sách **Nhà cung cấp**, kèm tài khoản ngân hàng nếu có.
- **Chưa bấm Lưu thì chưa có gì được lưu.**

## 8. Những điều cần lưu ý

⚠️ **Luôn soát lại mã số thuế, số tài khoản, ngân hàng** đọc từ ảnh trước khi Lưu. Máy có thể đọc sai khi ảnh nhỏ, mờ hoặc nghiêng.

⚠️ Trong luồng đọc/import này hệ thống **không tra mã số thuế** qua dịch vụ bên ngoài; khác với nhập MST trên cửa sổ thêm/sửa [HƯỚNG DẪN THÊM, SỬA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-b02-1-huong-dan-them-sua-nha-cung-cap/).

⚠️ **Mã gợi ý có thể trùng** với NCC đã có. Nếu là NCC mới thì đổi mã trên lưới, đừng xoá dòng.

⚠️ **Áp dụng cho những dòng dưới ghi đè** giá trị ở các dòng dưới, tính theo thứ tự lúc nạp vào lưới.

⚠️ **Tải lên từ Excel thay toàn bộ lưới** (dòng đọc từ ảnh trước đó mất): nạp Excel trước, đọc ảnh sau. Các lần **đọc ảnh được nối thêm** vào lưới; đọc lại cùng một ảnh sẽ sinh dòng trùng.

### "Nhóm nhà cung cấp không tồn tại hoặc không hợp lệ!!Vui lòng kiểm tra lại." 

Cách xử lý: chọn nhóm ở **Mặc định cho cả lô** rồi bấm **Áp xuống lưới**, hoặc sửa ô nhóm rồi **Kiểm tra lại**.

### "Mã nhà cung cấp [X] đã tồn tại trong hệ thống." 

Cách xử lý: nếu NCC đã có thì xoá dòng; nếu là NCC mới thì đổi mã rồi **Kiểm tra lại**.

### "Mã nhà cung cấp [X] bị trùng trong file import." 

Cách xử lý: xoá dòng thừa hoặc đổi mã một dòng.

### "Mã nhà cung cấp không được để trống." 

Cách xử lý: nhập mã rồi **Kiểm tra lại**.

### "Ngân hàng không tồn tại hoặc không hợp lệ!!Vui lòng kiểm tra lại." 

Nguyên nhân: tên ngân hàng không khớp **tên viết tắt** trong danh mục ngân hàng.
Cách xử lý: sửa ô **Ngân hàng** thành tên viết tắt (ví dụ **Vietcombank**). Nếu không cần lưu tài khoản thì xoá trống cả **Số tài khoản** và **Ngân hàng**.

### "Không thấy dòng nào có mã số thuế / số điện thoại / email — …" 

Nguyên nhân: đang chọn **Mỗi dòng một NCC** cho ảnh chỉ có một NCC.
Cách xử lý: đổi **Cách đọc** rồi bấm **Đọc lại**.

### "Lưới vừa được sửa — bấm Kiểm tra lại trước khi Lưu." 

Cách xử lý: bấm **Kiểm tra lại**.

## 10. Câu hỏi thường gặp

**Hoá đơn có cả người bán và người mua, hệ thống lấy bên nào?**
Import nhà cung cấp lấy **người bán**. Import khách hàng lấy người mua (xem [HƯỚNG DẪN IMPORT KHÁCH HÀNG TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-c03-2-huong-dan-import-khach-hang-tu-excel-anh/)).

**Nhà cung cấp là cá nhân, đọc CCCD được không?**
Được. Ảnh căn cước công dân cho một dòng: họ tên → tên nhà cung cấp, **số CCCD → mã số thuế**, nơi thường trú → địa chỉ. Ưu tiên đọc mã QR trên thẻ. Nhà cung cấp không có cờ cá nhân / tổ chức.

**Mặc định cho cả lô có ghi đè dữ liệu trong file Excel không?**
Không, mặc định chỉ điền vào ô còn trống.

**Không có số tài khoản thì có bị lỗi ngân hàng không?**
Không. Hệ thống chỉ kiểm ngân hàng khi dòng có **Số tài khoản** hoặc **Ngân hàng**.

## 11. Công việc tiếp theo

```text
Import NCC → Lưu → kiểm tra ở danh sách → dùng NCC trên phiếu đặt hàng / nhập hàng
```

**Tiếp theo:** [HƯỚNG DẪN SỬA, XOÁ NHIỀU NHÀ CUNG CẤP CÙNG LÚC](/bai-viet/2026-11-07-tl-b02-3-huong-dan-sua-xoa-nhieu-nha-cung-cap-cung-luc/) – Sửa / xoá nhiều nhà cung cấp.

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN SỬA, XOÁ NHIỀU NHÀ CUNG CẤP CÙNG LÚC](/bai-viet/2026-11-07-tl-b02-3-huong-dan-sua-xoa-nhieu-nha-cung-cap-cung-luc/) – Sửa / xoá nhiều nhà cung cấp
- [HƯỚNG DẪN IMPORT KHÁCH HÀNG TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-c03-2-huong-dan-import-khach-hang-tu-excel-anh/) – Import khách hàng từ Excel / ảnh
