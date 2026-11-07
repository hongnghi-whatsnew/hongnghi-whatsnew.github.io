---
title: "ĐỌC DỮ LIỆU TỪ ẢNH / PDF (CỬA SỔ QUÉT DÙNG CHUNG)"
date: "2026-11-07"
summary: "Cách dùng cửa sổ quét dùng chung: chọn ảnh/PDF/Word, xem trước, chuyển trang, phóng to, xoay, khoanh vùng, cho máy đọc chữ, xem chữ đọc được rồi Xác nhận."
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

Cách dùng cửa sổ quét dùng chung: chọn ảnh/PDF/Word, xem trước, chuyển trang, phóng to, xoay, khoanh vùng, cho máy **đọc chữ**, xem chữ đọc được rồi **Xác nhận**. Cửa sổ này chỉ đọc chữ — **không lưu gì** và không tự hiểu nghiệp vụ. Sau khi Xác nhận, màn gọi nó mới phân tích chữ đó (ra dòng thành phẩm, ra thông tin hồ sơ...) và cho soát tiếp.

Màn đang dùng cửa sổ này:

- **Thiết lập → Thành phẩm → Import → Tải lên từ ảnh**: Sau khi Xác nhận: Dòng thành phẩm đưa thẳng vào lưới import; Bài chi tiết: `TL-D11.2`
- **Nhân sự → Hồ sơ nhân sự → Thêm mới → Quét giấy tờ**: Sau khi Xác nhận: Sang cửa sổ soát thông tin hồ sơ; Bài chi tiết: `NS-B01.9 (mã tạm lịch sử; đối chiếu sổ Nhân sự hiện hành)`
- **Nhân sự → Hợp đồng nhân sự → Thêm mới → Quét giấy tờ**: Sau khi Xác nhận: Sang cửa sổ soát thông tin hợp đồng; Bài chi tiết: `NS-B01.9 (mã tạm lịch sử; đối chiếu sổ Nhân sự hiện hành)`

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Ảnh (`.jpg.jpeg.png.bmp.gif.webp.tif.tiff`) hoặc `.pdf`; màn nhân sự nhận thêm `.docx`. Tối đa 20 MB mỗi file.
- Máy kiểm cả **nội dung thật** của file: file bị đổi đuôi (vd PDF đổi tên thành `.png`) bị từ chối.
- Ảnh rõ, đủ sáng. Chữ viết tay có thể đọc sai hoặc không đọc được; dùng bản rõ hơn hoặc nhập và đối chiếu thủ công.
- Hệ thống phải có bộ nhận dạng tiếng Việt (`vie.traineddata` tại thư mục cấu hình hoặc `wwwroot` của ứng dụng (hướng dẫn của bộ phận phụ trách)). PDF có lớp chữ (xuất từ Word/Excel) và file Word đọc được cả khi thiếu bộ này.

## 2. Mở chức năng

Mở từ nút trên màn nghiệp vụ (xem bảng phần “Chức năng này dùng để làm gì?”); cửa sổ không có menu riêng.

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ đọc ảnh/PDF dùng chung mở từ Import thành phẩm](/posts/2026-11-07-gen-08-doc-du-lieu-tu-anh-pdf-cua-so-quet-dung-chung/hinh-01-20261029-gen08-chon-file.png)

![Hình 2: Xem trước PDF mẫu hai trang cùng thanh điều khiển](/posts/2026-11-07-gen-08-doc-du-lieu-tu-anh-pdf-cua-so-quet-dung-chung/hinh-02-20261029-gen08-xem-truoc-pdf.png)

![Hình 3: Đọc cả file được hai trang từ lớp chữ PDF](/posts/2026-11-07-gen-08-doc-du-lieu-tu-anh-pdf-cua-so-quet-dung-chung/hinh-03-20261029-gen08-ket-qua-2-trang.png)

![Hình 4: Chỉ đọc trang đang xem cho kết quả một trang, giữ số trang gốc là Trang 2](/posts/2026-11-07-gen-08-doc-du-lieu-tu-anh-pdf-cua-so-quet-dung-chung/hinh-04-20261029-gen08-chi-doc-trang-2.png)

- **`Chọn file` / kéo file vào khung**: Ý nghĩa: Chọn file; màn import thành phẩm cho chọn nhiều file. Mỗi file hiện thành một thẻ, bấm tên để xem, bấm `x` để bỏ
- **`‹ Trang x/y ›`**: Ý nghĩa: Chỉ hiện với PDF nhiều trang — chuyển trang xem trước
- **Nút `−` `%` `+` và nút vừa khung**: Ý nghĩa: Thu nhỏ / phóng to ảnh xem trước (50%–300%). Chỉ đổi cách xem, không đọc lại
- **Nút xoay trái / xoay phải**: Ý nghĩa: Xoay ảnh 90°; khung khoanh (nếu có) xoay theo
- **Khung ảnh xem trước**: Ý nghĩa: Kéo chuột (hoặc kéo tay trên màn cảm ứng) để khoanh vùng cần đọc
- **`Bỏ khung`**: Ý nghĩa: Bỏ vùng đã khoanh, quay về đọc cả trang
- **`Chỉ đọc trang đang xem`**: Ý nghĩa: PDF nhiều trang: tick để chỉ đọc trang đang xem; không tick thì đọc cả file (tối đa 10 trang)
- **Cột phải**: Ý nghĩa: Hướng dẫn → `Đang đọc...` → chữ đọc được theo từng trang (nguồn, độ tin cậy), hoặc thông báo lỗi
- **`Đọc` / `Đọc lại`**: Ý nghĩa: Gửi file cho máy đọc. Đang đọc thì nút khoá (bấm nhiều lần không gửi lặp)
- **`Xác nhận` (hoặc chữ riêng của màn)**: Ý nghĩa: Chỉ bấm được khi đọc thành công — đưa chữ đọc được về màn gọi
- **`Hủy`**: Ý nghĩa: Đóng, màn gọi không thay đổi gì

## 4. Trình tự công việc

```text
Chọn file → (chuyển trang / xoay / phóng to / khoanh vùng) → Đọc → xem chữ đọc được
   → sai nhiều: chỉnh rồi Đọc lại → Xác nhận → màn gọi phân tích + cho soát → Lưu ở màn gọi
```

### Bước 1 — Chọn file

1. Bấm `Chọn file` hoặc kéo file vào khung có viền đứt.
2. File sai định dạng / quá 20 MB / rỗng: dòng chữ đỏ báo lý do, file không được thêm.
3. Ảnh và PDF hiện ở khung xem trước; Word chỉ hiện dòng "không xem trước được".

### Bước 2 — Chỉnh trước khi đọc (tuỳ chọn)

1. PDF nhiều trang: bấm `‹` `›` để xem trang khác.
2. Ảnh chụp nghiêng/ngược: bấm xoay trái/phải tới khi chữ đứng thẳng.
3. Chữ nhỏ: bấm `+` để phóng to cho dễ khoanh; cuộn khung để xem phần còn lại.
4. Ảnh có nhiều thứ ngoài nội dung cần đọc (logo, tiêu đề, ảnh màn hình cả cửa sổ): kéo chuột quanh phần cần đọc. Khoanh trên PDF thì máy chỉ đọc vùng đó **của trang đang xem**.

### Bước 3 — Đọc và xem kết quả

1. Bấm `Đọc`; chờ chữ `Đang đọc...` (ảnh lớn / PDF nhiều trang có thể vài chục giây).
2. Cột phải hiện: số trang, độ tin cậy trung bình, thời gian; cảnh báo màu cam (nếu có); mã QR đọc được (nếu có); chữ của từng trang.
3. Chữ sai nhiều: khoanh vùng / xoay / chọn trang rồi bấm `Đọc lại`. Đổi bất kỳ thứ gì (file, trang, xoay, khung) thì kết quả cũ bị xoá, phải đọc lại.

### Bước 4 — Xác nhận

1. Bấm `Xác nhận`. Chữ đọc được về màn gọi, **chưa lưu**.
2. Làm tiếp theo bài của màn gọi (`TL-D11.2`, `NS-B01.9 (mã tạm lịch sử; đối chiếu sổ Nhân sự hiện hành)`).

## 6. Giải thích các thông tin trên màn hình

Sau khi thay file/trang/góc xoay/vùng khoanh, đọc lại rồi so đúng trang gốc trước Xác nhận. Phóng to chỉ giúp xem, không chứng minh chữ hoặc số tiền đã được nhận dạng chính xác.

## 7. Kiểm tra sau khi thực hiện

Cửa sổ đóng, màn gọi nhận chữ đọc được và tự phân tích. Chưa có bản ghi nào được tạo, file không được lưu ở bước này.

## 8. Những điều cần lưu ý

- Máy đọc có thể sai (ví dụ `NGUYỄN` thành `NGUYẾN`, `123T` thành `1237`). Luôn soát ở màn gọi trước khi Lưu.
- Ảnh chụp màn hình bảng: máy đọc **theo cột**, cột số lượng / quy đổi có thể không ghép được vào dòng — nhập lại ở màn gọi.

## 9. Vướng mắc thường gặp

- **`...: định dạng không nhận (chỉ nhận...)`**: Nguyên nhân đã xác minh: Đuôi file không nằm trong danh sách — chặn ngay khi chọn, chưa gửi lên hệ thống (màn hình); Cách xử lý an toàn: Chọn đúng loại file
- **`Nội dung file không khớp đuôi.png. File có thể bị lỗi hoặc bị đổi tên.`**: Nguyên nhân đã xác minh: File bị lỗi hoặc bị đổi tên đuôi; nút `Xác nhận` khoá, nút đổi thành `Đọc lại` (`kiểm tra thực tế`, màn hình); Cách xử lý an toàn: Lấy file gốc
- **`File vượt quá 20 MB.`**: Nguyên nhân đã xác minh: File quá lớn; Cách xử lý an toàn: Giảm độ phân giải / tách trang
- **`Ảnh quá nhỏ (...)`**: Nguyên nhân đã xác minh: Ảnh nén quá nhỏ, chữ không đủ nét; Cách xử lý an toàn: Xin ảnh gốc gửi dạng file
- **`Không đọc được chữ nào. Chọn ảnh rõ hơn hoặc khoanh vùng lại...`**: Nguyên nhân đã xác minh: Ảnh mờ, trắng, viết tay; Cách xử lý an toàn: Chụp lại / khoanh vùng / nhập tay
- **`File chỉ có N trang.`**: Nguyên nhân đã xác minh: Chọn trang không có; Cách xử lý an toàn: Chọn lại trang
- **`Hệ thống chưa cài bộ nhận dạng chữ (vie.traineddata)...`**: Nguyên nhân đã xác minh: Hệ thống thiếu file nhận dạng; Cách xử lý an toàn: Báo quản trị; tạm dùng PDF có lớp chữ
- **`Ảnh nhỏ (...) đã được phóng to để đọc — soát kỹ từng dòng.`**: Nguyên nhân đã xác minh: Ảnh độ phân giải thấp; Cách xử lý an toàn: Soát kỹ; chụp lại rõ hơn nếu sai nhiều
- **`File có N trang — chỉ đọc 10 trang đầu...`**: Nguyên nhân đã xác minh: PDF dài; Cách xử lý an toàn: Chọn trang + tick `Chỉ đọc trang đang xem`

### Bấm `Đọc` hai lần liền có gửi hai lần không?

Không. Đang đọc thì nút khoá, chỉ một yêu cầu được gửi (màn hình).

### Phóng to rồi có phải đọc lại không?

Không. Phóng to / thu nhỏ chỉ đổi cách xem. Đổi file, trang, góc xoay hoặc khung thì phải đọc lại.

## 11. Công việc tiếp theo

- `TL-D11.2` — Import thành phẩm từ ảnh.
- `NS-B01.9 (mã tạm lịch sử; đối chiếu sổ Nhân sự hiện hành)` — Quét giấy tờ hồ sơ / hợp đồng nhân sự.

## 12. Bài hướng dẫn liên quan

- `TL-D11.2`, `NS-B01.9 (mã tạm lịch sử; đối chiếu sổ Nhân sự hiện hành)`.
- `GEN-09` — Cấu hình bộ nhận dạng chữ (vie.traineddata): xử lý khung vàng / khung đỏ "chưa cài bộ nhận dạng chữ".

### Ảnh có bị gửi ra ngoài không?

Bộ nhận dạng chữ được triển khai trong hệ thống ERP. Nếu cần xác nhận quy định lưu trữ hoặc phạm vi xử lý tài liệu của đơn vị, hãy liên hệ quản trị hệ thống.
