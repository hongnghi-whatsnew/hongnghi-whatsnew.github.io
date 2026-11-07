---
title: "HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM"
date: "2026-11-07"
summary: "Nhiều chứng từ trong Hồng Nghi ERP cho đính kèm file gốc (ảnh chụp hoá đơn, bản scan PDF, bảng kê Excel…)."
module: "Thao tác chung"
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

Nhiều chứng từ trong Hồng Nghi ERP cho đính kèm file gốc (ảnh chụp hoá đơn, bản scan PDF, bảng kê Excel…). Các màn này dùng chung một hộp thoại **FILE ĐÍNH KÈM** để:

- Tải file lên (bấm chọn hoặc kéo thả, nhiều file một lần).
- Xem nhanh ảnh và PDF ngay trên ERP.
- Tải file về máy.
- Xoá file đã đính kèm.

Bài này lấy màn hình **Phiếu nhập kho** làm ví dụ. Các màn khác thao tác giống hệt, chỉ khác tiêu đề hộp thoại; **từng màn có thể khác — xem bài Tổng quan màn hình** của màn đó.

Các màn có **File đính kèm** (theo phiên bản hiện tại):

- **Kho hàng**: Màn hình: Phiếu nhập kho, Phiếu xuất kho, Phiếu điều chỉnh kho, Phiếu nhập kho gửi hàng, Phiếu nhập mượn hàng, Phiếu xuất mượn hàng, Phiếu nhập trả mượn hàng, Phiếu xuất trả mượn hàng
- **Bán hàng**: Màn hình: Phiếu bán hàng, Phiếu khách trả hàng, Phiếu giảm giá, Hợp đồng
- **Kế toán**: Màn hình: Phiếu thu, Phiếu chi, Lệnh vay, Hợp đồng
- **Nhân sự**: Màn hình: Hồ sơ nhân sự, Hợp đồng nhân sự
- **Sản xuất**: Màn hình: Phiếu nhập thành phẩm

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chứng từ đã được **lưu** (phải có dòng trên danh sách mới đính kèm được).
- File đúng định dạng và không quá dung lượng cho phép (xem phần “Giải thích các thông tin trên màn hình”).
- File đã có sẵn trên máy (ảnh chụp, bản scan…).

## 2. Mở chức năng

Màn hình danh sách chứng từ → **chuột phải** vào dòng → **File đính kèm**. Ví dụ trong bài:

**Nghiệp vụ → Kho hàng → Phiếu nhập kho** → chuột phải phiếu → **File đính kèm**

## 3. Nhận biết màn hình

![Hình 1: Cột File đính kèm và mục File đính kèm trên menu chuột phải (ví dụ PHIẾU NHẬP KHO - DANH SÁCH)](/posts/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/hinh-01-cot-va-menu-file-dinh-kem.png)

- **Cột File đính kèm (cuối bảng, kéo thanh cuộn ngang**: không có trong Hình 1); Chức năng: **Số lượng file: n** hoặc **Không có file đính kèm**
- **Mục File đính kèm (menu chuột phải)**: Chức năng: Mở hộp **FILE ĐÍNH KÈM** của dòng đó

![Hình 2: Hộp FILE ĐÍNH KÈM - PHIẾU NHẬP KHO](/posts/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/hinh-02-hop-file-dinh-kem.png)

- **Tiêu đề**: Chức năng: **FILE ĐÍNH KÈM - <tên chứng từ>** và mã chứng từ trong ngoặc
- **Dòng Đính kèm (Dung lượng tối đa 5MB/file)**: Chức năng: Giới hạn dung lượng mỗi file
- **File đã lưu: tên file (bấm được) và dung lượng (… bytes)**: Chức năng: Bấm tên để xem trước / tải về
- **Biểu tượng tải về**: Chức năng: Tải file về máy
- **Dấu ×**: Chức năng: Đánh dấu xoá file (xoá thật khi bấm **Lưu lại**)
- **Vùng Kéo/thả tệp hoặc bấm vào đây**: Chức năng: Chọn file mới để đính kèm
- **Lưu lại / Đóng**: Chức năng: Lưu thay đổi / đóng mà không lưu

Hình 2 chụp phiếu chưa có file nên chưa có; các mục này hiện thành từng dòng phía trên vùng  khi phiếu đã có file.

## 4. Trình tự công việc

```text
Danh sách chứng từ ──► chuột phải dòng ──► File đính kèm
      ↓
Hộp FILE ĐÍNH KÈM
   ├──► Kéo thả / bấm chọn file mới ──► file hiện trong danh sách (chưa lưu)
   ├──► Bấm × ở file cũ ──► file ẩn khỏi danh sách (chưa xoá thật)
   ├──► Bấm tên file ──► xem trước (ảnh, PDF) hoặc tải về (Excel, loại khác)
   └──► Bấm biểu tượng tải về ──► file lưu vào máy
      ↓
Lưu lại ──► "Lưu file đính kèm thành công" ──► cột File đính kèm cập nhật
Đóng    ──► bỏ mọi thay đổi chưa lưu
```

### 8.1. Mở hộp file đính kèm

**Bước 1 –** Mở màn hình chứng từ, tìm dòng cần đính kèm ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Bước 2 –** **Chuột phải** vào dòng, chọn **File đính kèm**  (Hình 1). Hộp **FILE ĐÍNH KÈM - …** mở ra, liệt kê các file đã có (Hình 2).

### 8.2. Thêm file

**Bước 1 –** Chọn file theo một trong hai cách:

- Bấm vào vùng **Kéo/thả tệp hoặc bấm vào đây**, chọn một hoặc nhiều file trong cửa sổ của Windows (giữ **Ctrl** để chọn nhiều), bấm **Open**.
- Hoặc kéo file từ thư mục trên máy thả vào vùng  (vùng đổi màu khi kéo vào).

**Bước 2 –** File hợp lệ hiện thêm trong danh sách, kèm dung lượng. File sai định dạng hoặc quá 5MB bị bỏ qua và góc màn hình báo cảnh báo (Hình 3, phần “Vướng mắc thường gặp”).

**Bước 3 –** Chọn nhầm: bấm **×** cạnh file mới đó để bỏ.

**Bước 4 –** Bấm **Lưu lại**. Góc màn hình báo **Lưu file đính kèm thành công**, hộp đóng, danh sách tải lại, cột **File đính kèm**  tăng số lượng.

### 8.3. Xem trước file

Bấm vào **tên file**  trong danh sách:

- **Ảnh** (jpg, jpeg, png, gif, bmp, webp) và **PDF**: hộp xem trước mở ra, tiêu đề là tên file (Hình 4). PDF xem được nhiều trang, cuộn trong khung. Hộp có thể kéo để di chuyển, kéo góc để phóng to. Bấm **Tải về** để lưu file, **Đóng** để quay lại.
- **Excel** và loại khác (xls, xlsx, ico, tif, tiff): trình duyệt tải file về luôn, không xem trước.

### 8.4. Tải file về máy

Bấm biểu tượng tải về  cạnh file (rê chuột hiện chữ **Tải về**). File được lưu vào thư mục **Tải xuống** (Downloads) của máy với **đúng tên gốc** lúc tải lên.

### 8.5. Xoá file đính kèm

**Bước 1 –** Bấm dấu **×**  cạnh file đã lưu. File biến khỏi danh sách nhưng **chưa bị xoá thật**.

**Bước 2 –** Kiểm tra danh sách rồi bấm **Lưu lại** để xóa. Nếu chưa bấm Lưu lại và đổi ý, bấm **Đóng** để bỏ đánh dấu xóa. Nếu đã bấm Lưu lại nhưng có lỗi, mở lại hộp và kiểm tra trạng thái thực tế; không coi Đóng sau lỗi là khôi phục file.

Hệ thống **không hỏi xác nhận** khi xoá file; kiểm tra kỹ trước khi bấm **Lưu lại**.

## 6. Giải thích các thông tin trên màn hình

- **Định dạng được phép**: Ý nghĩa: PDF (`pdf`); Excel (`xls`, `xlsx`); ảnh (`jpg`, `jpeg`, `png`, `gif`, `bmp`, `webp`, `ico`, `tiff`, `tif`)
- **Định dạng không được phép**: Ý nghĩa: Word (`doc`, `docx`), `svg`, `zip`, `rar`, `txt`, `html`…
- **Dung lượng tối đa**: Ý nghĩa: **5MB mỗi file**; không giới hạn số file
- **Tên file**: Ý nghĩa: Giữ đúng tên gốc khi hiển thị và khi tải về
- **(… bytes)**: Ý nghĩa: Dung lượng file tính bằng byte (1MB ≈ 1.048.576 bytes)
- **Cột File đính kèm trên danh sách**: Ý nghĩa: **Số lượng file: n** hoặc **Không có file đính kèm**

## 7. Kiểm tra sau khi thực hiện

- Sau thông báo thành công, mở lại hộp để xác nhận file mới đã lưu kèm đúng chứng từ, xem/tải được và không rỗng. Phạm vi người được xem theo quyền của màn; không coi quyền đính kèm là phân quyền bảo mật riêng cho từng file.
- File đã đánh dấu **×** bị xoá hẳn khỏi hệ thống.
- Cột **File đính kèm** trên danh sách hiển thị số file mới.

## 8. Những điều cần lưu ý

⚠️ Trước khi bấm **Lưu lại**, **Đóng** bỏ các thay đổi đang chờ. Sau khi đã bấm Lưu lại, thao tác có thể đã thực hiện một phần dù báo lỗi; đóng hộp không hoàn tác phần đã ghi. Nếu vừa thêm vừa xóa, nên lưu và kiểm tra file mới trước, sau đó mở lại để xóa file cũ.

⚠️ Xoá file là **xoá hẳn**, không khôi phục được. Hệ thống không hỏi lại trước khi xoá.

⚠️ Mọi người có quyền **Truy cập** màn hình đều thêm / xoá được file đính kèm. Không đính kèm tài liệu nhạy cảm (CCCD, bảng lương…) vào chứng từ mà nhiều người xem được, trừ khi quy định nội bộ cho phép.

⚠️ File Word: lưu thành PDF trước khi đính kèm (trong Word: **File → Save As → PDF**).

⚠️ Ảnh chụp điện thoại thường lớn hơn 5MB: giảm kích thước ảnh hoặc chụp ở chế độ chất lượng thấp hơn trước khi tải lên.

### "File "…" có định dạng không được phép. Chỉ nhận: pdf, xls, xlsx, jpg, jpeg, png, gif, bmp, webp, ico, tiff, tif" 

Nguyên nhân: file không thuộc định dạng được phép (ví dụ Word, ZIP).
Cách xử lý: chuyển sang PDF hoặc ảnh rồi đính kèm lại.

### "File "…" vượt quá giới hạn dung lượng cho phép" 

Nguyên nhân: file lớn hơn 5MB.
Cách xử lý: nén / giảm độ phân giải ảnh, tách PDF thành nhiều file nhỏ.

### Cửa sổ chọn file của Windows không hiện file cần chọn 

Nguyên nhân: cửa sổ chọn file chỉ hiện các định dạng được phép.
Cách xử lý: kiểm tra đuôi file; đổi sang định dạng được phép.

### "Lưu file thất bại" hoặc thông báo lỗi đỏ khi bấm Lưu lại (Lỗi hệ thống)

Nguyên nhân: mất kết nối, máy chủ lỗi khi ghi file.
Cách xử lý: mở lại hộp **File đính kèm**, kiểm tra cả file mới và file đã đánh dấu xóa. Thêm lại file còn thiếu từ bản gốc sau khi biết trạng thái thực tế, tránh tải trùng. Nếu vừa thêm vừa xóa, có thể file cũ đã bị xóa dù tải file mới thất bại; đóng hộp không khôi phục file đó. Vẫn lỗi: báo IT kèm thời gian, tên file ([LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/)).

### "Bạn thao tác quá nhanh. Vui lòng thử lại sau ít phút." 

Nguyên nhân: tải quá nhiều file cùng lúc (nhiều tab, nhiều người dùng chung tài khoản).
Cách xử lý: chờ ít phút, tải lên ít file hơn mỗi lần.

### Bấm tên file Excel nhưng không thấy hộp xem trước 

Nguyên nhân: Excel không xem trước được trên ERP; file đã được tải về.
Cách xử lý: mở thư mục **Tải xuống** của máy.

### Cột File đính kèm chưa đổi số lượng sau khi lưu 

Cách xử lý: bấm **Tải lại** trên danh sách ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 10. Câu hỏi thường gặp

**Có đính kèm file khi đang lập phiếu (chưa lưu) được không?**
Không. Lưu phiếu trước, sau đó chuột phải dòng phiếu → **File đính kèm**.

**Hai file trùng tên có ghi đè nhau không?**
Không. Mỗi file được lưu riêng; danh sách có thể có hai file cùng tên.

**Xem trước PDF có in được không?**
Dùng biểu tượng in của khung xem PDF (nếu trình duyệt hiển thị), hoặc **Tải về** rồi in từ máy.

**Đính kèm được bao nhiêu file?**
Không giới hạn số file; mỗi file tối đa 5MB.

## 11. Công việc tiếp theo

```text
Đã đính kèm xong
   ├──► In chứng từ              → GEN-06
   └──► Tìm lại chứng từ có file → GEN-04 (lọc cột File đính kèm)
```

**Tiếp theo:** [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/) – Hướng dẫn xử lý lỗi thường gặp.

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/) – Hướng dẫn tìm kiếm, lọc, sắp xếp trên danh sách
- [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/) – Hướng dẫn xử lý lỗi thường gặp
- [ĐỌC DỮ LIỆU TỪ ẢNH / PDF (CỬA SỔ QUÉT DÙNG CHUNG)](/bai-viet/2026-11-07-gen-08-doc-du-lieu-tu-anh-pdf-cua-so-quet-dung-chung/) – Hướng dẫn đọc dữ liệu từ ảnh / PDF
- [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/) – Hướng dẫn thêm mới, cập nhật, xoá dữ liệu
