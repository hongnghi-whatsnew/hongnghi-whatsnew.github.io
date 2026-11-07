---
title: "HƯỚNG DẪN IMPORT KHÁCH HÀNG TỪ EXCEL / ẢNH"
date: "2026-11-07"
summary: "Cửa sổ Import của màn Khách hàng giúp tạo nhiều khách hàng cùng lúc, không phải nhập từng người trên cửa sổ."
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

Cửa sổ **Import** của màn **Khách hàng** giúp tạo nhiều khách hàng cùng lúc, không phải nhập từng người trên cửa sổ. Có các cách sau:

- **Tải lên từ Excel**: nạp file theo mẫu. Bấm **Tải file mẫu** để lấy mẫu.
- **Tải lên từ ảnh**: chụp hoặc scan **danh thiếp**, **giấy đăng ký kinh doanh**, **hoá đơn GTGT**, **căn cước công dân (CCCD)** hay **bảng danh sách in**. Hệ thống đọc tên, mã số thuế, địa chỉ, điện thoại, email, người đại diện, số tài khoản, ngân hàng. Ảnh CCCD thành **khách cá nhân**, số CCCD làm mã số thuế.
- **Tạo mã khách hàng**: hệ thống cấp mã dạng **KH + 6 số** (KH000019, KH000020…) cho mọi dòng, nối tiếp mã mới nhất. Cột mã bị khoá, không gõ tay.
- **Mặc định cho cả lô**: chọn một lần những thông tin file / ảnh không có (nhóm, loại khách, số ngày nợ, cá nhân / tổ chức). Giá trị được điền vào mọi dòng còn trống.
- **Áp dụng cho những dòng dưới** (chuột phải trên lưới): chép giá trị một ô xuống các dòng bên dưới, giống phiếu bán hàng / đặt hàng.

Dữ liệu chỉ được lưu khi bạn bấm **Lưu** ở cửa sổ Import.

Thao tác dùng chung liên quan: hướng dẫn của bộ phận phụ trách.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- **Nhóm khách hàng** cần dùng **đã có trong danh mục**. Mỗi dòng import bắt buộc phải có nhóm.
- Đọc từ ảnh:
  - File ảnh (**.jpg,.jpeg,.png,.bmp,.gif,.webp,.tif,.tiff**) hoặc **.pdf**.
  - Mỗi file **tối đa 20 MB**; chọn được nhiều file một lần.
  - Ảnh nên thẳng, rõ nét, đủ sáng.
- Import Excel: file **.xlsx /.xls** đúng mẫu (bấm **Tải file mẫu** để lấy mẫu).
- Cách dùng cửa sổ đọc ảnh dùng chung (chọn file, khoanh vùng, xoay, chuyển trang PDF): xem **[ĐỌC DỮ LIỆU TỪ ẢNH / PDF (CỬA SỔ QUÉT DÙNG CHUNG)](/bai-viet/2026-11-07-gen-08-doc-du-lieu-tu-anh-pdf-cua-so-quet-dung-chung/)**.

## 2. Mở chức năng

**Khách hàng → Khách hàng → Import Excel**

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ KHÁCH HÀNG - IMPORT với khối Mặc định cho cả lô](/posts/2026-11-07-tl-c03-2-huong-dan-import-khach-hang-tu-excel-anh/hinh-01-cua-so-import-mac-dinh.png)

- **Mặc định cho cả lô (điền vào ô trống của dòng từ Excel và ảnh)**: Ý nghĩa: Khối gập ở đầu cửa sổ; bấm vào tiêu đề để mở hoặc đóng
- **Các ô mặc định**: Ý nghĩa: **Nhóm khách hàng**, **Loại khách hàng**, **Số ngày nợ**, **Cá nhân / Tổ chức**
- **Áp xuống lưới**: Ý nghĩa: Điền giá trị mặc định vào các ô **còn trống** của mọi dòng đang có trên lưới, rồi tự kiểm tra lại
- **Lưới import**: Ý nghĩa: Mỗi dòng là một khách hàng. Bấm vào ô để sửa (trừ cột **Mã khách hàng** — bị khoá); chuột phải để **Áp dụng cho những dòng dưới**
- **Cột Ghi chú/Lỗi**: Ý nghĩa: Lý do dòng chưa lưu được. Cột nằm cuối lưới, kéo thanh cuộn ngang để xem
- **Thêm một hàng, Tải lên từ Excel, Tải lên từ ảnh**: Ý nghĩa: Ba cách đưa dòng vào lưới. **Tải lên từ Excel thay toàn bộ lưới** bằng các dòng trong file; đọc ảnh và Thêm một hàng **nối thêm** vào lưới đang có
- **Tạo mã khách hàng, Kiểm tra lại**: Ý nghĩa: Cấp mã KH + 6 số cho mọi dòng; gửi cả lưới đi kiểm tra sau khi sửa
- **Tải file mẫu**: Ý nghĩa: Tải file Excel mẫu
- **Lưu / Đóng**: Ý nghĩa: Chỉ bấm được **Lưu** khi không còn dòng lỗi và đã kiểm tra lại sau lần sửa cuối

![Hình 2: Ô Cách đọc nằm trong cửa sổ đọc từ ảnh](/posts/2026-11-07-tl-c03-2-huong-dan-import-khach-hang-tu-excel-anh/hinh-02-cach-doc-trong-cua-so-quet.png)

Ô **Cách đọc** chỉ có trong cửa sổ **KHÁCH HÀNG - ĐỌC TỪ ẢNH** và không ảnh hưởng tới import Excel:

- **Cả ảnh một khách hàng (danh thiếp, ĐKKD, hoá đơn — lấy bên mua)**: Dùng khi: Mỗi ảnh (hoặc mỗi trang PDF) là **một** khách hàng. Đây là lựa chọn mặc định. Ảnh CCCD được nhận ra ở cả hai cách đọc
- **Mỗi dòng một khách hàng (bảng danh sách in)**: Dùng khi: Ảnh là một bảng, mỗi dòng là một khách hàng

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Danh sách Khách hàng
        ↓
Import Excel  (cửa sổ KHÁCH HÀNG - IMPORT)
        ├── Tải lên từ Excel
        └── Tải lên từ ảnh  (cửa sổ KHÁCH HÀNG - ĐỌC TỪ ẢNH)
```

```text
Import Excel → mở "Mặc định cho cả lô", chọn Nhóm (bắt buộc) + giá trị chung
        ↓
Đưa dòng vào lưới:
        ├── Tải lên từ Excel ──► thay toàn bộ lưới; mặc định tự điền vào ô trống
        └── Tải lên từ ảnh ───► chọn Cách đọc → Chọn file → Đọc → Xác nhận
                               ──► nối thêm vào lưới + điền mặc định
   (có cả Excel lẫn ảnh: nạp Excel trước, đọc ảnh sau)
        ↓
Tạo mã khách hàng ──► mọi dòng có mã KH + 6 số
        ↓
Hệ thống kiểm tra từng dòng → lỗi hiện ở cột Ghi chú/Lỗi
        ↓
Sửa trên lưới: bấm ô để sửa
   / chuột phải "Áp dụng cho những dòng dưới"
   / đổi mặc định rồi "Áp xuống lưới"
        ↓
Kiểm tra lại ──► "Hết lỗi — bấm Lưu."
        ↓
Lưu ──► khách hàng mới hiện ở danh sách
```

### Bước 1 – Mở cửa sổ Import

Vào **Khách hàng → Khách hàng** và bấm **Import Excel**. Cửa sổ **KHÁCH HÀNG - IMPORT** mở ra (Hình 1).

### Bước 2 – Chọn mặc định cho cả lô

Bấm tiêu đề **Mặc định cho cả lô**  để mở khối, rồi chọn các giá trị chung:

- **Nhóm khách hàng**: nên chọn trước. Danh thiếp và hoá đơn không có thông tin này, mà mỗi dòng **bắt buộc** phải có nhóm.
- **Số ngày nợ**, **Loại khách hàng**, **Cá nhân / Tổ chức**: chọn nếu cả lô giống nhau.

Mặc định **chỉ điền vào ô còn trống**. Ô đã có giá trị (đọc được từ ảnh hoặc có sẵn trong file) **giữ nguyên**.

### Bước 3a – Nạp từ file Excel

Bấm **Tải lên từ Excel**  và chọn file. Các dòng trong file vào lưới, **mặc định ở Bước 2 tự điền vào các ô trống**, rồi hệ thống kiểm tra từng dòng. **Cột mã khách hàng trong file bị bỏ qua**: mã do nút **Tạo mã khách hàng** cấp (Bước 4).

Nạp Excel **thay toàn bộ lưới**: các dòng đã đọc từ ảnh hay đã thêm tay trước đó sẽ mất. Nếu lô có cả file Excel lẫn ảnh, **nạp Excel trước rồi mới đọc ảnh**; dòng từ ảnh được nối thêm vào sau.

### Bước 3b – Đọc từ ảnh

1. Bấm **Tải lên từ ảnh**. Cửa sổ **KHÁCH HÀNG - ĐỌC TỪ ẢNH** mở ra.
2. Chọn **Cách đọc** ở đầu cửa sổ (Hình 2):
   - danh thiếp, giấy ĐKKD, hoá đơn: chọn **Cả ảnh một khách hàng**;
   - bảng danh sách: chọn **Mỗi dòng một khách hàng**.
3. Bấm **Chọn file** (hoặc kéo file vào) và chọn một hoặc nhiều ảnh / PDF. Nếu ảnh có logo hay chữ thừa, kéo khung quanh phần cần đọc (xem [ĐỌC DỮ LIỆU TỪ ẢNH / PDF (CỬA SỔ QUÉT DÙNG CHUNG)](/bai-viet/2026-11-07-gen-08-doc-du-lieu-tu-anh-pdf-cua-so-quet-dung-chung/)).
4. Bấm **Đọc**. Cột bên phải hiện chữ đọc được và độ tin cậy (Hình 3). Nếu đọc sai nhiều, khoanh vùng hoặc xoay ảnh rồi bấm **Đọc lại**.
5. Bấm **Xác nhận**. Góc trên báo **Đã đưa N dòng từ ảnh vào lưới — soát cột Ghi chú/Lỗi.**

![Hình 3: Đọc danh thiếp (dữ liệu giả lập) – chữ đọc được hiện ở cột phải](/posts/2026-11-07-tl-c03-2-huong-dan-import-khach-hang-tu-excel-anh/hinh-03-doc-danh-thiep.png)

Với **căn cước công dân**, cột phải hiện thêm dòng **Mã QR đọc được** (Hình 4). Có QR thì họ tên, số CCCD, nơi thường trú lấy từ QR nên đúng dấu; chữ đọc từ ảnh chỉ dùng khi không đọc được QR.

![Hình 4: Đọc căn cước công dân (thẻ mẫu, dữ liệu giả) – đọc được cả mã QR và chữ trên thẻ](/posts/2026-11-07-tl-c03-2-huong-dan-import-khach-hang-tu-excel-anh/hinh-04-doc-cccd.png)

Hệ thống đọc được gì từ từng loại ảnh:

- **Danh thiếp, giấy ĐKKD**: Cách đọc nên chọn: Cả ảnh một khách hàng; Thông tin lấy được: Tên công ty (dòng có "Công ty / Cty / Cửa hàng…" hoặc nhãn "Tên…"), MST, địa chỉ, điện thoại, email, người đại diện / giám đốc, STK, ngân hàng
- **Hoá đơn GTGT**: Cách đọc nên chọn: Cả ảnh một khách hàng; Thông tin lấy được: Lấy **phần người mua**, chỉ đọc phần phía trên bảng hàng hoá. Hoá đơn bán cho cá nhân (không có tên đơn vị) thì tên khách hàng là **họ tên người mua**
- **Căn cước công dân (CCCD)**: Cách đọc nên chọn: Cách đọc nào cũng được; Thông tin lấy được: **Khách cá nhân**: họ tên → tên khách hàng, **số CCCD → mã số thuế**, nơi thường trú → địa chỉ, cột **Cá nhân** được tick. Ưu tiên đọc **mã QR** trên thẻ (chính xác, giữ dấu); không đọc được QR thì lấy từ chữ in trên thẻ
- **Bảng danh sách in**: Cách đọc nên chọn: Mỗi dòng một khách hàng; Thông tin lấy được: Mỗi dòng có **MST, số điện thoại hoặc email** là một khách hàng. Chữ trước con số đầu tiên là **tên**, chữ sau con số cuối cùng là **địa chỉ**

### Bước 4 – Tạo mã khách hàng

Dòng mới vào lưới chưa có mã. Cột **Ghi chú/Lỗi** báo **Chưa có mã khách hàng — bấm Tạo mã khách hàng** (Hình 5); dòng đọc từ CCCD có cột **Cá nhân** được tick.

![Hình 5: Lưới sau khi nạp 12 dòng Excel + 1 danh thiếp + 1 CCCD (dữ liệu giả lập) – mọi dòng chưa có mã, dòng CCCD được tick Cá nhân](/posts/2026-11-07-tl-c03-2-huong-dan-import-khach-hang-tu-excel-anh/hinh-05-luoi-chua-co-ma.png)

Bấm **Tạo mã khách hàng**: hệ thống cấp mã **KH + 6 số** cho **mọi dòng** theo thứ tự trên lưới, nối tiếp mã mới nhất, rồi tự kiểm tra lại. Góc trên báo **Đã tạo mã KH000021 → KH000034 (mã chính thức cấp lúc Lưu).** (Hình 6). Mã ghi trong file Excel (ví dụ `KH1`, `ABC`, `KH000001`) không được dùng.

![Hình 6: Bấm Tạo mã khách hàng – 14 dòng nhận mã KH000021 → KH000034](/posts/2026-11-07-tl-c03-2-huong-dan-import-khach-hang-tu-excel-anh/hinh-06-tao-ma-khach-hang.png)

Thêm dòng sau khi đã tạo mã (Thêm một hàng, đọc thêm ảnh) hoặc nạp lại Excel thì bấm **Tạo mã khách hàng** lại — mã của cả lưới được cấp lại từ đầu.

### Bước 5 – Soát và sửa trên lưới

Sau mỗi lần nạp, hệ thống kiểm tra cả lưới. Dòng lỗi có lý do ở cột **Ghi chú/Lỗi**. Dưới lưới hiện **Còn N dòng lỗi (xem cột Ghi chú/Lỗi) — sửa trên lưới rồi bấm Kiểm tra lại.** và nút **Lưu** bị khoá.

Có ba cách sửa:

**a) Sửa từng ô:** bấm vào ô và gõ lại, ví dụ đổi tên rút gọn bị trùng. Cột mã không sửa được. Muốn bỏ một dòng thì bấm biểu tượng xoá ở cuối dòng.

**b) Áp mặc định cho mọi dòng đang có:** chọn giá trị ở **Mặc định cho cả lô** rồi bấm **Áp xuống lưới**. Hệ thống điền vào các ô còn trống, tự kiểm tra lại và báo **Đã áp mặc định xuống các ô trống trên lưới và kiểm tra lại.** (Hình 7). Ví dụ: danh thiếp, CCCD và 2 dòng Excel để trống nhóm báo **Mã nhóm khách hàng không tồn tại**; chọn Nhóm **CHUNG** rồi **Áp xuống lưới** thì hết lỗi, các dòng đã có nhóm giữ nguyên nhóm cũ.

![Hình 7: Chọn Nhóm khách hàng rồi Áp xuống lưới – hết lỗi, nút Lưu mở](/posts/2026-11-07-tl-c03-2-huong-dan-import-khach-hang-tu-excel-anh/hinh-07-ap-xuong-luoi.png)

**c) Chép một ô xuống các dòng dưới:** chuột phải vào ô có giá trị đúng và chọn **Áp dụng cho những dòng dưới** (Hình 8). Giá trị được chép xuống **mọi dòng phía dưới** (ghi đè giá trị đang có), các dòng phía trên giữ nguyên, rồi hệ thống tự kiểm tra lại.

![Hình 8: Chuột phải trên ô – Áp dụng cho những dòng dưới](/posts/2026-11-07-tl-c03-2-huong-dan-import-khach-hang-tu-excel-anh/hinh-08-ap-dung-dong-duoi.png)

Mục **Áp dụng cho những dòng dưới** không có ở những cột mà mỗi dòng phải khác nhau: mã, tên, tên rút gọn, mã số thuế, điện thoại, email, số tài khoản, tên chủ tài khoản, người đại diện và **Ghi chú/Lỗi**.

### Bước 6 – Kiểm tra lại

Sửa ô xong, bấm **Kiểm tra lại**. Hệ thống báo **Còn N dòng lỗi (xem cột Ghi chú/Lỗi).** hoặc **Hết lỗi — bấm Lưu.**

Nếu đã sửa ô mà chưa kiểm tra lại, dưới lưới hiện **Lưới vừa được sửa — bấm Kiểm tra lại trước khi Lưu.** và **Lưu** vẫn bị khoá.

### Bước 7 – Lưu

Khi hết lỗi, bấm **Lưu**. Lúc lưu, hệ thống **cấp mã chính thức** cho từng dòng, nối tiếp mã mới nhất tại thời điểm đó; nếu vừa có người khác thêm khách hàng thì số tự đẩy lên, không trùng. Hệ thống báo **Đã lưu N khách hàng, mã KH… → KH…**, cửa sổ đóng lại và khách hàng mới hiện ở danh sách. Nếu không muốn lưu, bấm **Đóng**; toàn bộ dữ liệu trên lưới sẽ bị bỏ.

## 6. Giải thích các thông tin trên màn hình

**Mặc định cho cả lô**

- **Nhóm khách hàng**: Bắt buộc: Có (mỗi dòng phải có nhóm); Lưu ý: Chọn từ danh mục, gõ để tìm
- **Loại khách hàng**: Bắt buộc: Không; Lưu ý: **Cửa hàng**, **Xưởng mộc**, **Sản xuất**, **Khác**. Để trống = **Khác**
- **Số ngày nợ**: Bắt buộc: Không; Lưu ý: Số ≥ 0
- **Cá nhân / Tổ chức**: Bắt buộc: Không; Lưu ý: Để trống = **Tổ chức**; chọn **Cá nhân** cho khách lẻ

**Trên lưới**

- **Mã khách hàng**: Bắt buộc: Có; Lưu ý: Do nút **Tạo mã khách hàng** cấp, dạng KH + 6 số; cột bị khoá. Mã chính thức cấp lại lúc Lưu
- **Tên rút gọn**: Bắt buộc: Không; Lưu ý: Nếu nhập thì **không được trùng** với khách đã có và không trùng trong lưới
- **Mã số thuế**: Bắt buộc: Không; Lưu ý: Khách cá nhân đọc từ CCCD: số CCCD 12 chữ số

**Cửa sổ đọc từ ảnh**

- **Cách đọc**: Ý nghĩa: Ảnh là một khách hàng hay một bảng nhiều khách hàng; Lưu ý: Lựa chọn được nhớ cho lần mở sau trong cùng cửa sổ Import
- **File**: Ý nghĩa: Ảnh / PDF cần đọc; Lưu ý: Tối đa 20 MB mỗi file; chọn được nhiều file

## 7. Kiểm tra sau khi thực hiện

- Sau khi **Lưu**, khách hàng mới xuất hiện ở danh sách với mã, tên, nhóm và các thông tin đã soát.
- **Chưa bấm Lưu thì chưa có gì được lưu.** Đóng cửa sổ Import là bỏ toàn bộ lưới.

## 8. Những điều cần lưu ý

⚠️ **Luôn soát lại dữ liệu đọc từ ảnh trước khi Lưu**, nhất là **mã số thuế**, **số điện thoại** và **số tài khoản**. Máy có thể đọc sai khi ảnh nhỏ, mờ hoặc nghiêng. Với ảnh nhỏ, cửa sổ đọc báo **Ảnh nhỏ (…) đã được phóng to để đọc — soát kỹ từng dòng.**

⚠️ Trong luồng đọc/import này hệ thống **không tra mã số thuế** qua dịch vụ bên ngoài. Tên và địa chỉ chỉ là chữ đọc được trên ảnh.

⚠️ **Mã trên lưới chỉ là dự kiến.** Mã chính thức cấp lúc **Lưu** và có thể lệch nếu có người thêm khách hàng trong lúc bạn soát lưới. Xem thông báo sau khi Lưu để biết mã thật.

⚠️ **CCCD là thông tin cá nhân.** Chỉ đọc CCCD của khách đã đồng ý cung cấp; không lưu ảnh CCCD ở nơi người khác xem được.

⚠️ **Áp dụng cho những dòng dưới ghi đè** giá trị đang có ở các dòng dưới. "Dòng dưới" tính theo **thứ tự lúc nạp vào lưới**. Nếu bạn đã bấm tiêu đề cột để sắp xếp lại, kết quả có thể khác thứ tự đang thấy.

⚠️ **Tải lên từ Excel thay toàn bộ lưới**: dòng đã đọc từ ảnh trước đó sẽ mất. Nạp Excel trước, đọc ảnh sau.

⚠️ Các lần **Tải lên từ ảnh được nối thêm** vào lưới. Đọc lại cùng một ảnh sẽ sinh dòng trùng, cần xoá dòng thừa.

### "Mã nhóm khách hàng không tồn tại !. Vui lòng kiểm tra lại." 

Nguyên nhân: dòng chưa có nhóm (ảnh không có thông tin này), hoặc mã nhóm trong file không có trong danh mục.
Cách xử lý: chọn nhóm ở **Mặc định cho cả lô** rồi bấm **Áp xuống lưới**; hoặc sửa ô nhóm trên lưới rồi **Kiểm tra lại**.

### "Mã khách hàng đã tồn tại trong hệ thống. Vui lòng kiểm tra lại." 

Nguyên nhân: có người vừa thêm khách hàng sau lần bấm **Tạo mã khách hàng**.
Cách xử lý: bấm **Tạo mã khách hàng** lại.

### "Tên rút gọn [X] đã tồn tại trong hệ thống" / "Tên rút gọn [X] bị trùng trong danh sách import" 

Nguyên nhân: tên rút gọn phải khác nhau giữa các khách hàng.

- **đã tồn tại trong hệ thống**: một khách hàng đã lưu đang dùng tên rút gọn này.
- **bị trùng trong danh sách import**: hai dòng trở lên trên lưới cùng tên rút gọn; mọi dòng trùng đều báo lỗi.

![Hình 9: Dòng 1 trùng tên rút gọn với khách đã có, dòng 2 và 3 trùng nhau trên lưới (dữ liệu giả lập)](/posts/2026-11-07-tl-c03-2-huong-dan-import-khach-hang-tu-excel-anh/hinh-09-trung-ten-rut-gon.png)

Cách xử lý: bấm vào ô **Tên rút gọn** và đổi tên khác (ví dụ thêm tên tỉnh) hoặc xoá trống ô đó, rồi **Kiểm tra lại**. Trùng trong lưới thì chỉ cần đổi một trong các dòng trùng.

### "Chưa có mã khách hàng — bấm Tạo mã khách hàng. Vui lòng kiểm tra lại." 

Nguyên nhân: dòng mới vào lưới (Excel, ảnh, Thêm một hàng) chưa được cấp mã.
Cách xử lý: bấm **Tạo mã khách hàng**.

### "Loại khách hàng '…' không hợp lệ. Chỉ chấp nhận: …" 

Cách xử lý: chọn một trong **Cửa hàng**, **Xưởng mộc**, **Sản xuất**, **Khác**.

### Cửa sổ đọc báo "Không đọc ra khách hàng nào (không thấy tên công ty, mã số thuế hay số điện thoại) — thử khoanh vùng hoặc nhập tay." 

Kiểm tra: ảnh có rõ không, có đúng là danh thiếp / ĐKKD / hoá đơn không.
Cách xử lý: khoanh vùng quanh phần thông tin rồi đọc lại, hoặc dùng **Thêm một hàng** để nhập tay.

### "Không thấy dòng nào có mã số thuế / số điện thoại / email — ảnh là danh thiếp, ĐKKD, hoá đơn thì chọn cách đọc "Cả ảnh một …"." 

Nguyên nhân: đang chọn **Mỗi dòng một khách hàng** cho ảnh chỉ có một khách hàng, hoặc bảng không có cột MST / điện thoại / email.
Cách xử lý: đổi **Cách đọc** rồi bấm **Đọc lại**.

### Bảng danh sách đọc thiếu dòng 

Nguyên nhân: máy đọc dính hai con số liền nhau (ví dụ số điện thoại với số nhà), nên không nhận ra số điện thoại của dòng đó.
Cách xử lý: thêm dòng thiếu bằng **Thêm một hàng**, hoặc khoanh vùng từng dòng rồi đọc lại.

### "Lưới vừa được sửa — bấm Kiểm tra lại trước khi Lưu." 

Cách xử lý: bấm **Kiểm tra lại**.

## 10. Câu hỏi thường gặp

**cửa sổ Thêm mới và import cấp mã thế nào?**
Cả hai dùng chung một cách cấp mã: **KH** + 6 số, nối tiếp mã mới nhất. cửa sổ **Thêm mới** cấp lúc Lưu. Import cấp mã dự kiến khi bấm **Tạo mã khách hàng** và cấp chính thức lúc Lưu. Hai người lưu cùng lúc vẫn nhận mã khác nhau. Mã trong file Excel bị bỏ qua.

**Đọc CCCD thì khách hàng có mã số thuế không?**
Luồng import chép số CCCD vào trường **Mã số thuế** của hồ sơ và đánh dấu **Cá nhân**. Đây là cách điền dữ liệu của ERP, không tự xác nhận thông tin đăng ký thuế của khách; cần đối chiếu hồ sơ được duyệt.

**Đã đọc ảnh rồi mới nạp Excel thì sao?**
Lưới bị thay bằng các dòng trong file Excel, dòng từ ảnh mất. Bấm **Tải lên từ ảnh** đọc lại, rồi bấm **Tạo mã khách hàng** lần nữa.

**Mã KH000021… trên lưới có chắc là mã sau khi lưu không?**
Không chắc. Đó là mã dự kiến. Nếu có người thêm khách hàng trong lúc bạn soát lưới, mã chính thức lúc Lưu tự đẩy lên; xem thông báo **Đã lưu N khách hàng, mã … → …**.

**Ô Cách đọc dùng cho Excel hay cho ảnh?**
Chỉ dùng cho ảnh. Ô này nằm trong cửa sổ **KHÁCH HÀNG - ĐỌC TỪ ẢNH**; file Excel đọc theo cột của file mẫu.

**Mặc định cho cả lô có ghi đè dữ liệu trong file Excel không?**
Không. Mặc định chỉ điền vào ô còn trống. Muốn đổi cả ô đã có giá trị thì dùng chuột phải **Áp dụng cho những dòng dưới**, hoặc sửa từng ô.

**Chọn mặc định sau khi đã nạp file thì sao?**
Bấm **Áp xuống lưới** để áp cho các dòng đang có.

**Có đọc nhiều danh thiếp một lần được không?**
Được. Chọn nhiều file cùng lúc với **Cách đọc** là **Cả ảnh một khách hàng**; mỗi ảnh (hoặc mỗi trang PDF) thành một dòng.

**Hoá đơn có cả người bán và người mua, hệ thống lấy bên nào?**
Import khách hàng lấy **người mua**. Import nhà cung cấp lấy người bán (xem [HƯỚNG DẪN IMPORT NHÀ CUNG CẤP TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-b02-2-huong-dan-import-nha-cung-cap-tu-excel-anh/)).

## 11. Công việc tiếp theo

```text
Import khách hàng → Lưu
        ↓
Kiểm tra lại ở danh sách (mở Sửa từng khách để bổ sung thông tin còn thiếu)
        ↓
Dùng khách hàng trên phiếu bán hàng / đặt hàng
```

**Tiếp theo:** [ĐỌC DỮ LIỆU TỪ ẢNH / PDF (CỬA SỔ QUÉT DÙNG CHUNG)](/bai-viet/2026-11-07-gen-08-doc-du-lieu-tu-anh-pdf-cua-so-quet-dung-chung/) – Đọc dữ liệu từ ảnh / PDF (chi tiết cửa sổ đọc ảnh dùng chung).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN IMPORT NHÀ CUNG CẤP TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-b02-2-huong-dan-import-nha-cung-cap-tu-excel-anh/) – Import nhà cung cấp từ Excel / ảnh
- [HƯỚNG DẪN IMPORT HÀNG TRƠN TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d09-3-huong-dan-import-hang-tron-tu-excel-anh/) – Import hàng trơn từ Excel / ảnh
- [HƯỚNG DẪN IMPORT THÀNH PHẨM TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d11-2-huong-dan-import-thanh-pham-tu-excel-anh/) – Import thành phẩm từ Excel / ảnh
