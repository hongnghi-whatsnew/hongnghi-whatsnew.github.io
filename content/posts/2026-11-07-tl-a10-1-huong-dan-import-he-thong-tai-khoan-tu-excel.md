---
title: "HƯỚNG DẪN IMPORT HỆ THỐNG TÀI KHOẢN TỪ EXCEL"
date: "2026-11-07"
summary: "Khi cần thêm nhiều tài khoản (ví dụ nạp bộ tài khoản mới, hoặc sửa hàng loạt tên, diễn giải), dùng Import Excel thay cho nhập từng tài khoản."
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

Khi cần thêm nhiều tài khoản (ví dụ nạp bộ tài khoản mới, hoặc sửa hàng loạt tên, diễn giải), dùng **Import Excel** thay cho nhập từng tài khoản. Hộp **IMPORT TÀI KHOẢN TỪ EXCEL** đi qua 4 bước: **Chọn file**, **Kiểm tra dữ liệu**, **Xem thay đổi**, **Hoàn tất**. Hệ thống **chỉ ghi vào hệ thống ở bước cuối** (bấm **Import**); hai bước kiểm tra và xem thay đổi chưa ghi gì.

Hệ thống khớp tài khoản **theo số tài khoản** và **tự xếp tài khoản cha theo tiền tố số** (như [TỔNG QUAN MÀN HÌNH HỆ THỐNG TÀI KHOẢN](/bai-viet/2026-11-07-tl-a10-0-tong-quan-man-hinh-he-thong-tai-khoan/)). Toàn bộ import chạy trong **một giao dịch**: lỗi giữa chừng thì không tài khoản nào được ghi.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- File Excel `.xlsx` hoặc `.xls`, dòng 1 là tiêu đề cột **đúng tên** như file mẫu (xem phần “Giải thích các thông tin trên màn hình”). Bấm **Tải file mẫu** ở bước 1 để lấy file chuẩn.
- Tài khoản cha đã có trong hệ thống **hoặc** nằm trong cùng file (cha đứng trước con không bắt buộc, hệ thống tự sắp).

## 2. Mở chức năng

**Thiết lập danh mục → Hệ thống tài khoản → Import Excel**

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

![Hình 1: Bước 1 import tài khoản: chọn file, chế độ import và tùy chọn; chưa tải file](/posts/2026-11-07-tl-a10-1-huong-dan-import-he-thong-tai-khoan-tu-excel/hinh-01-buoc-1-chon-file.png)

- **Thanh 4 bước**: Ý nghĩa: **1. Chọn file**, **2. Kiểm tra dữ liệu**, **3. Xem thay đổi**, **4. Hoàn tất**
- **Vùng kéo thả file**: Ý nghĩa: Kéo file vào hoặc bấm để chọn file
- **Chọn sheet**: Ý nghĩa: Danh sách sheet của file, mặc định sheet đầu
- **Chế độ import**: Ý nghĩa: **Chỉ thêm mới** / **Thêm mới + Cập nhật**
- **Tùy chọn**: Ý nghĩa: **Kiểm tra dữ liệu trước khi import**, **Bỏ qua các dòng trống**
- **Tải file mẫu, Hủy, Tiếp tục**: Ý nghĩa: **Tiếp tục** chỉ bấm được khi đã chọn file

## 4. Trình tự công việc

```text
Tải file mẫu → điền Excel → Chọn file, sheet, chế độ → Tiếp tục
   │
   ├── 2. Kiểm tra dữ liệu: có Lỗi ──► Tải file báo lỗi → sửa file → làm lại
   │                          hết Lỗi ──► Tiếp tục
   ├── 3. Xem thay đổi: Thêm mới / Cập nhật / Không đổi / Bỏ qua
   │                          ──► Import
   └── 4. Hoàn tất ──► Xem dữ liệu đã import / Hoàn tất
```

### Bước 1 – Chọn file

1. Bấm **Tải file mẫu** để tải `[MAU] IMPORT TAI KHOAN.xlsx` (có tiêu đề cột và 2 dòng ví dụ: `156 Hàng hóa`, `1561 Giá mua hàng hóa`). Điền dữ liệu theo mẫu.
2. Kéo file vào vùng kéo thả, hoặc bấm vùng đó để chọn. Tên file hiện bên dưới.
3. **Chọn sheet** chứa dữ liệu.
4. Chọn **Chế độ import**:
   - **Chỉ thêm mới**: số tài khoản đã có trong hệ thống sẽ **báo lỗi**.
   - **Thêm mới + Cập nhật**: thêm tài khoản mới và **cập nhật đè** tài khoản đã có (xem phần “Những điều cần lưu ý”).
5. Giữ tick **Bỏ qua các dòng trống** để bỏ các dòng hoàn toàn trống trong file.
6. Bấm **Tiếp tục**. Nếu sheet không có dòng dữ liệu, hệ thống báo **Chưa có dữ liệu để import**.

### Bước 2 – Kiểm tra dữ liệu

Hệ thống kiểm tra từng dòng và hiện bốn ô đếm **Hợp lệ**, **Cảnh báo**, **Lỗi**, **Tổng dòng**, kèm bảng (cột **Trạng thái**, **Dòng**, **Cột**, **Thông báo**, **Giá trị**). Số **Dòng** là số dòng trong Excel (dòng 2 là dòng dữ liệu đầu).

- **Cảnh báo** (không chặn): ví dụ **Tên tiếng Anh đang để trống.**.
- **Lỗi** (chặn): còn dù một lỗi thì nút **Tiếp tục** báo **Còn lỗi — vui lòng sửa file rồi import lại**. Bấm **Tải file báo lỗi** để tải `BAO LOI IMPORT TAI KHOAN.xlsx` (liệt kê dòng cảnh báo và lỗi), sửa file gốc rồi chọn lại từ bước 1.

- **Bốn ô đếm**: Ý nghĩa: **Hợp lệ**, **Cảnh báo**, **Lỗi**, **Tổng dòng**
- **Bảng kiểm tra**: Ý nghĩa: Dòng, cột, thông báo, giá trị gây lỗi
- **Tải file báo lỗi**: Ý nghĩa: Tải danh sách lỗi

### Bước 3 – Xem thay đổi

Hệ thống so sánh với tài khoản hiện có và hiện ô đếm **Thêm mới**, **Cập nhật**, **Không đổi**, **Bỏ qua**, **Tổng**. Chọn một dòng ở bảng để xem **Chi tiết bản ghi**: số tài khoản, tài khoản cha suy từ số (**Parent (suy từ số TK)**), danh sách trường thay đổi dạng `Tên: "cũ" → "mới"`. Bấm **Xuất danh sách thay đổi** để tải `DANH SACH THAY DOI.xlsx`.

Chưa ghi gì vào hệ thống. Đọc kỹ cột **Cập nhật** trước khi bấm **Import**.

- **Năm ô đếm**: Ý nghĩa: **Thêm mới**, **Cập nhật**, **Không đổi**, **Bỏ qua**, **Tổng**
- **Bảng thay đổi**: Ý nghĩa: Trạng thái, số TK, tên, số thay đổi
- **Chi tiết bản ghi**: Ý nghĩa: Chi tiết các trường đổi của dòng đang chọn
- **Import**: Ý nghĩa: Ghi vào hệ thống

### Bước 4 – Hoàn tất

Bấm **Import**. Thành công hiện **Import hoàn tất**, các ô đếm **Thêm mới**, **Cập nhật**, **Không đổi**, **Bỏ qua/Lỗi**, kèm tổng dòng, chế độ và thời gian import. Bấm **Xem dữ liệu đã import** hoặc **Hoàn tất** để đóng hộp; cây tài khoản tự tải lại.

## 6. Giải thích các thông tin trên màn hình

Các cột của file (tiêu đề **đúng chữ** như bảng):

- **Số tài khoản**: Bắt buộc: Có; Giá trị / lưu ý: Chỉ chữ số. Không trùng trong file. Từ 4 ký tự trở lên phải tìm được tài khoản cha (đã có, hoặc trong cùng file)
- **Tên tài khoản**: Bắt buộc: Có
- **Tính chất**: Bắt buộc: Có; Giá trị / lưu ý: Gõ đúng một trong **Dư Nợ**, **Dư Có**, **Lưỡng tính**, **Không có số dư**
- **Tên tiếng Anh**: Bắt buộc: Không; Giá trị / lưu ý: Trống thì cảnh báo
- **Diễn giải**: Bắt buộc: Không; Giá trị / lưu ý: Trống thì cảnh báo
- **Kích hoạt**: Bắt buộc: Không; Giá trị / lưu ý: Trống = **có** (kích hoạt)
- **Hạch toán ngoại tệ**: Bắt buộc: Không; Giá trị / lưu ý: Trống = không
- **TD đối tượng, TD đối tượng THCP, TD đơn đặt hàng, TD hợp đồng mua, TD đơn vị, TD mục thu chi, TD TK ngân hàng, TD công trình, TD hợp đồng bán, TD khoản mục chi phí, TD mã thống kê**: Bắt buộc: Không; Giá trị / lưu ý: Các cờ **Theo dõi chi tiết theo**. Trống = không
- **Loại đối tượng**: Bắt buộc: Không; Giá trị / lưu ý: `nhacungcap`, `khachhang` hoặc `nhanvien` khi **TD đối tượng** = có (hệ thống không kiểm tra giá trị này)

Cột kiểu có / không: gõ `x`, `1`, `có`, `co`, `true`, `yes` hoặc `y` là **có**; ô trống lấy giá trị mặc định ghi trên bảng; mọi giá trị khác là **không**.

Các thông báo ở bước 2:

- **Số tài khoản để trống.**: Mức: Lỗi; Khi nào: Dòng không có số tài khoản
- **Số TK "…" không hợp lệ (phải là chữ số).**: Mức: Lỗi; Khi nào: Số có chữ, ký tự khác chữ số
- **Số TK "…" bị trùng trong file.**: Mức: Lỗi; Khi nào: Hai dòng cùng số
- **Số TK "…" đã tồn tại trong hệ thống.**: Mức: Lỗi; Khi nào: Chế độ **Chỉ thêm mới**, số đã có
- **Sẽ cập nhật đè lên TK đang có.**: Mức: Cảnh báo; Khi nào: Chế độ **Thêm mới + Cập nhật**, số đã có
- **Không tìm thấy tài khoản cha cho "…".**: Mức: Lỗi; Khi nào: Số dài hơn 3 ký tự mà không có tiền tố nào là tài khoản đã có / trong file
- **Tên tài khoản để trống.**: Mức: Lỗi
- **Tính chất "…" không hợp lệ.**: Mức: Lỗi; Khi nào: Không khớp 4 giá trị
- **Tên tiếng Anh / Diễn giải đang để trống.**: Mức: Cảnh báo

## 7. Kiểm tra sau khi thực hiện

- Tài khoản mới nằm đúng nhánh cây theo số. Tài khoản đã có (chế độ cập nhật) mang giá trị mới trong file.
- Dòng **Bỏ qua** (lỗi) và dòng **Không đổi** không ghi gì.

## 8. Những điều cần lưu ý

⚠️ **Chế độ Thêm mới + Cập nhật ghi đè toàn bộ tài khoản đã có** (không chỉ các trường hiện ở bước 3): các cờ **TD …** để trống trong file bị đặt về **không**, **Kích hoạt** để trống thành **có** (bật lại tài khoản đang ngưng). File thiếu cột nghĩa là xoá cờ. Khi cập nhật tài khoản đã có, điền đủ các cột **TD …** và **Kích hoạt** theo thiết lập hiện tại của tài khoản đó. Không dùng mã tài khoản có chữ để thử nhánh hợp lệ: import chỉ nhận chữ số; dùng số tài khoản giả chưa tồn tại do kế toán duyệt, tên/diễn giải gắn TEST_HDSD.

⚠️ Bước 3 chỉ so sánh **Tên**, **Tính chất**, **Tên tiếng Anh**, **Diễn giải**, **Kích hoạt**, **Hạch toán ngoại tệ**, **TD đối tượng**, **Loại đối tượng**. Dòng chỉ khác ở các cờ **TD** còn lại được tính **Không đổi** và **không được nạp**.

⚠️ **Import không hoàn tác được.** Lỗi nào ở bước ghi thì cả lô không ghi (cùng một giao dịch); còn đã báo **Import hoàn tất** thì chỉ sửa tay từng tài khoản.

⚠️ Tài khoản mới có **số bắt đầu bằng số của một tài khoản đang dùng hạch toán** sẽ biến tài khoản đó thành tài khoản tổng hợp, không ghi bút toán vào nó được nữa ([TỔNG QUAN MÀN HÌNH HỆ THỐNG TÀI KHOẢN](/bai-viet/2026-11-07-tl-a10-0-tong-quan-man-hinh-he-thong-tai-khoan/), phần “Những điều cần lưu ý”).

⚠️ Số tài khoản trong file chỉ được là **chữ số**, chặt hơn cửa sổ **Thêm mới** (cho chữ và gạch dưới).

### "Còn lỗi — vui lòng sửa file rồi import lại" 

Nguyên nhân: bước 2 còn dòng **Lỗi**.
Cách xử lý: **Tải file báo lỗi**, sửa file, chọn lại file từ bước 1.

### "Chưa có dữ liệu để import" 

Nguyên nhân: sheet trống, hoặc tiêu đề cột không đúng nên không đọc được dòng nào.
Cách xử lý: đối chiếu tiêu đề với file mẫu, chọn đúng sheet.

### "Lỗi import tài khoản.: …" (Lỗi hệ thống)

Nguyên nhân: lỗi khi ghi (ví dụ số tài khoản trùng do người khác vừa thêm). Cả lô không ghi.
Cách xử lý: tải lại màn hình, làm lại từ bước 1; báo IT nếu còn lỗi.

## 10. Câu hỏi thường gặp

**Có import lại cùng một file được không?**
Được. Chế độ **Chỉ thêm mới** sẽ báo lỗi các số đã có; chế độ **Thêm mới + Cập nhật** ghi đè theo file.

## 11. Công việc tiếp theo

```text
Import xong → kiểm tra cây ở Hệ thống tài khoản (Mở rộng)
            → gắn tài khoản vào Cấu hình hạch toán (TL-A11)
```

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH CẤU HÌNH HẠCH TOÁN](/bai-viet/2026-11-07-tl-a11-0-tong-quan-man-hinh-cau-hinh-hach-toan/) – Tổng quan màn hình Cấu hình hạch toán.

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH HỆ THỐNG TÀI KHOẢN](/bai-viet/2026-11-07-tl-a10-0-tong-quan-man-hinh-he-thong-tai-khoan/) – Tổng quan màn hình Hệ thống tài khoản
- [HƯỚNG DẪN CHUYỂN TÀI KHOẢN HẠCH TOÁN VÀ XEM NHẬT KÝ CHUYỂN](/bai-viet/2026-11-07-tl-a10-2-huong-dan-chuyen-tai-khoan-hach-toan-va-xem-nhat-ky-chuyen/) – Chuyển tài khoản hạch toán

### Ô Kiểm tra dữ liệu trước khi import bỏ tick được không?

Hệ thống vẫn kiểm tra dữ liệu ở bước 2. Hãy đọc và xử lý kết quả kiểm tra trước khi xác nhận nhập.
