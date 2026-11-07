---
title: "HƯỚNG DẪN IMPORT MAPPING HÀNG HÓA GIA CÔNG TỪ EXCEL"
date: "2026-11-07"
summary: "Khi hai bên có nhiều mã hàng khác nhau, thêm tay từng dòng mapping rất lâu."
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

Khi hai bên có nhiều mã hàng khác nhau, thêm tay từng dòng mapping rất lâu. **Import Excel** cho tải file lên, hệ thống **kiểm tra từng dòng** và cho xem kết quả trước, rồi lưu các dòng còn hợp lệ sau lần kiểm tra lại tại máy chủ. Dòng bị đánh lỗi được bỏ qua; nếu xảy ra lỗi ghi ở dữ liệu, cả giao dịch import bị hủy và báo **Lỗi lưu import**.

Đây là bài chức năng riêng vì thao tác làm thêm hàng loạt dữ liệu và có luồng kiểm tra riêng. Ý nghĩa mapping: xem [TỔNG QUAN MÀN HÌNH MAPPING HÀNG HÓA GIA CÔNG](/bai-viet/2026-11-07-tl-f02-0-tong-quan-man-hinh-mapping-hang-hoa-gia-cong/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đối tác trong file đã khai ở **Kết nối đối tác** ([TỔNG QUAN MÀN HÌNH KẾT NỐI ĐỐI TÁC](/bai-viet/2026-11-07-tl-f01-0-tong-quan-man-hinh-ket-noi-doi-tac/)).
- Các hàng hóa tương ứng đã có trong danh mục hàng hóa của hệ thống này.
- Đã có file Excel điền theo mẫu (xem phần “Thực hiện trên phần mềm”).

## 2. Mở chức năng

**Kết nối gia công API → Mapping hàng hóa gia công → Import Excel**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![MAPPING HÀNG HÓA GIA CÔNG - IMPORT TỪ EXCEL — trước tải file, bảng trống.](/posts/2026-11-07-tl-f02-1-huong-dan-import-mapping-hang-hoa-gia-cong-tu-excel/ui-20261026-tl-f02-import-figure-01.png)

- **Tải lên từ Excel**: Ý nghĩa: Chọn file `.xlsx` hoặc `.xls`
- **Tải file mẫu**: Ý nghĩa: Tải file mẫu `[TEMPLATE IMPORT] MAPPING HANG HOA GIA CONG.xlsx`
- **Dòng tổng kết**: Ý nghĩa: **Tổng: n — Hợp lệ: n — Lỗi: n**
- **Bảng xem trước**: Ý nghĩa: Mã đối tác, mã hàng hóa bên gửi, mã hàng hóa tương ứng, ghi chú, **Lỗi**
- **Dòng nền đỏ nhạt**: Ý nghĩa: Dòng có lỗi, cột **Lỗi** ghi lý do bằng chữ đỏ
- **Lưu, Đóng**: Ý nghĩa: Lưu các dòng hợp lệ; đóng không lưu

## 4. Trình tự công việc

```text
Import Excel → Tải file mẫu → điền dữ liệu
      ↓
Tải lên từ Excel → hệ thống kiểm tra từng dòng
      ↓
Xem bảng: dòng hợp lệ / dòng lỗi (nền đỏ)
      ↓
Lưu → chỉ ghi các dòng hợp lệ → "Đã lưu n dòng mapping."
```

## 5. Thực hiện trên phần mềm

**Bước 1 –** Bấm **Tải file mẫu**, mở file và điền dữ liệu, mỗi dòng một cặp mapping.

**Bước 2 –** Bấm **Tải lên từ Excel**, chọn đúng **một** file. Hệ thống đọc **sheet đầu tiên** và kiểm tra.

**Bước 3 –** Xem bảng kết quả và dòng **Tổng / Hợp lệ / Lỗi**. Dòng lỗi có lý do ở cột **Lỗi**.

**Bước 4 –** Bấm **Lưu**. Hệ thống kiểm tra lại ở máy chủ rồi chỉ ghi các dòng hợp lệ và báo **Đã lưu n dòng mapping.** Hộp đóng và danh sách tải lại.

Muốn nạp cả dòng lỗi: sửa file cho đúng rồi tải lại, hoặc thêm tay ([TỔNG QUAN MÀN HÌNH MAPPING HÀNG HÓA GIA CÔNG](/bai-viet/2026-11-07-tl-f02-0-tong-quan-man-hinh-mapping-hang-hoa-gia-cong/)).

**Các cột của file:**

- **`ma_doitac` (hoặc "Mã đối tác")**: Bắt buộc: Có; Ý nghĩa: Mã đối tác, phải đã khai ở **Kết nối đối tác**
- **`mahanghoa_gui` (hoặc "Mã hàng hóa bên gửi")**: Bắt buộc: Có; Ý nghĩa: Mã hàng hóa theo hệ thống đối tác
- **`mahanghoa_nhan` (hoặc "Mã hàng hóa tương ứng")**: Bắt buộc: Có; Ý nghĩa: Mã hàng hóa của hệ thống này, phải có trong danh mục hàng hóa
- **`ghichu` (hoặc "Ghi chú")**: Bắt buộc: Không; Ý nghĩa: Ghi chú

Dòng trống hoàn toàn bị bỏ qua.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa các cột xem [TỔNG QUAN MÀN HÌNH MAPPING HÀNG HÓA GIA CÔNG](/bai-viet/2026-11-07-tl-f02-0-tong-quan-man-hinh-mapping-hang-hoa-gia-cong/) phần “Giải thích các thông tin trên màn hình”. Quy tắc riêng của import:

- **Chi nhánh**: Quy tắc: Mapping lưu theo **chi nhánh đang truy cập**
- **Trạng thái**: Quy tắc: Dòng nhập vào luôn **Kích hoạt**
- **Kiểm tra**: Quy tắc: Chạy hai lần: lúc tải lên (xem trước) và lúc **Lưu** (máy chủ kiểm tra lại, không tin cột **Lỗi** từ máy trạm)
- **Trùng**: Quy tắc: Mỗi cặp (đối tác, mã hàng hóa bên gửi) chỉ một dòng

## 7. Kiểm tra sau khi thực hiện

Các dòng hợp lệ có mặt trong danh sách **Mapping hàng hóa gia công**, trạng thái **Kích hoạt**, thuộc chi nhánh đang truy cập. Các dòng lỗi không được lưu.

## 8. Những điều cần lưu ý

⚠️ **Chỉ dùng sheet đầu tiên** của file. Dữ liệu ở sheet khác bị bỏ qua.

⚠️ Dòng **Hợp lệ** nhưng **Lưu** vẫn có thể bỏ nếu có người vừa thêm cùng cặp ở máy khác trong lúc bạn xem; hệ thống kiểm tra lại khi lưu.

⚠️ **Lưu** chỉ bật khi có ít nhất một dòng hợp lệ.

⚠️ Kiểm tra mã trong file cẩn thận: mã hàng hóa tương ứng phải đúng mã trong danh mục (sai chữ hoa / thường hoặc khoảng trắng thừa có thể báo không có trong hệ thống).

### "Vui lòng chọn đúng 1 file." / "File không có dòng dữ liệu nào." / "Không có dòng hợp lệ nào để lưu." 

Nguyên nhân: chọn nhiều file, file rỗng, hoặc toàn bộ dòng lỗi.
Cách xử lý: chọn đúng một file có dữ liệu; sửa dòng lỗi.

### Cột Lỗi của từng dòng 

- **Thiếu mã đối tác**: Nguyên nhân: Cột mã đối tác trống; Cách xử lý: Điền mã đối tác
- **Đối tác '…' không tồn tại**: Nguyên nhân: Chưa khai đối tác; Cách xử lý: Khai ở **Kết nối đối tác** hoặc sửa mã
- **Thiếu mã hàng hóa bên gửi**: Nguyên nhân: Cột mã bên gửi trống; Cách xử lý: Điền mã bên gửi
- **Thiếu mã hàng hóa tương ứng (bên nhận)**: Nguyên nhân: Cột mã tương ứng trống; Cách xử lý: Điền mã hàng của hệ thống này
- **Mã hàng hóa '…' không có trong hệ thống**: Nguyên nhân: Mã tương ứng không khớp hàng hóa nào; Cách xử lý: Kiểm tra lại mã trong danh mục hàng hóa
- **Đã có mapping cho đối tác + mã hàng gửi này**: Nguyên nhân: Cặp đã có; Cách xử lý: Bỏ dòng, hoặc **Sửa** mapping cũ
- **Trùng với dòng khác trong file import**: Nguyên nhân: Hai dòng trong file cùng cặp; Cách xử lý: Giữ một dòng

### "Lỗi lưu import" (Lỗi hệ thống)

Nguyên nhân: lỗi khi ghi vào CSDL (ví dụ cặp mapping trùng với một dòng **Ngưng sử dụng** đã có).
Cách xử lý: tìm dòng cũ ở danh sách (kể cả đã ngưng), xoá hoặc sửa, rồi import lại; báo IT nếu vẫn lỗi.

## 10. Câu hỏi thường gặp

**Import có ghi đè mapping đã có không?**
Không. Dòng trùng cặp bị báo lỗi và không lưu; hãy **Sửa** dòng cũ.

**Dùng tiêu đề tiếng Việt hay tên cột kỹ thuật?**
Cả hai đều được chấp nhận, nhưng phải đúng chữ như bảng ở phần “Thực hiện trên phần mềm”.

## 11. Công việc tiếp theo

**Tiếp theo:** [TỔNG QUAN MAPPING ĐỊNH MỨC GIA CÔNG](/bai-viet/2026-11-07-tl-f03-0-tong-quan-mapping-dinh-muc-gia-cong/) – Mapping định mức gia công; lấy dữ liệu từ hộp thư **Đồng bộ từ API** để kiểm tra ([HƯỚNG DẪN THIẾT LẬP ĐỒNG BỘ GIA CÔNG VỚI ĐỐI TÁC](/bai-viet/2026-11-07-tl-f01-1-huong-dan-thiet-lap-dong-bo-gia-cong-voi-doi-tac/)).

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH MAPPING HÀNG HÓA GIA CÔNG](/bai-viet/2026-11-07-tl-f02-0-tong-quan-man-hinh-mapping-hang-hoa-gia-cong/) – Tổng quan màn hình Mapping hàng hóa gia công
- [TỔNG QUAN MÀN HÌNH KẾT NỐI ĐỐI TÁC](/bai-viet/2026-11-07-tl-f01-0-tong-quan-man-hinh-ket-noi-doi-tac/) – Kết nối đối tác
- [IMPORT MAPPING ĐỊNH MỨC GIA CÔNG TỪ EXCEL](/bai-viet/2026-11-07-tl-f03-1-import-mapping-dinh-muc-gia-cong-tu-excel/) – Import mapping định mức gia công từ Excel
