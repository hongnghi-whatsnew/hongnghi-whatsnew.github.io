---
title: "IMPORT MAPPING ĐỊNH MỨC GIA CÔNG TỪ EXCEL"
date: "2026-11-07"
summary: "Nạp các cặp đối tác – tên định mức bên gửi – mã định mức bên nhận từ Excel để đối chiếu khi nhận dữ liệu gia công."
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

Nạp các cặp đối tác – tên định mức bên gửi – mã định mức bên nhận từ Excel để đối chiếu khi nhận dữ liệu gia công. Mỗi dòng được kiểm tra trước khi lưu; import tạo mapping mới, không dùng để sửa mapping cũ.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Truy cập đúng tên miền bằng tài khoản riêng của hệ thống chi nhánh nhận mapping.
- Đối tác đã có trong Kết nối đối tác; mã định mức tương ứng đã có ở danh mục Định mức của hệ thống nhận.
- Điền file mẫu với đúng tên định mức do đối tác gửi; soát các cặp theo [TỔNG QUAN MAPPING ĐỊNH MỨC GIA CÔNG](/bai-viet/2026-11-07-tl-f03-0-tong-quan-mapping-dinh-muc-gia-cong/) và kiểm cả mapping đã ngưng sử dụng trước khi nạp lại.

## 2. Mở chức năng

**Kết nối gia công API → Mapping định mức gia công → Import Excel**

## 3. Nhận biết màn hình

![Hình 1: cửa sổ tham chiếu localhost ngày 23/10/2026](/posts/2026-11-07-tl-f03-1-import-mapping-dinh-muc-gia-cong-tu-excel/hinh-01-form-tham-chieu.png)

 Tải lên từ Excel / Tải file mẫu;  Lưới xem trước và cột Lỗi;  Lưu bị khóa khi lưới chưa có dữ liệu. Chưa tải file hoặc nhập dữ liệu.

- **Tải file mẫu**: Cách sử dụng: Dùng mẫu MAPPING DINH MUC GIA CONG để giữ đúng tiêu đề.
- **Mã đối tác / Tên định mức bên gửi / Mã định mức tương ứng**: Cách sử dụng: Ba khóa đối chiếu của mỗi dòng.
- **Tổng / Hợp lệ / Lỗi**: Cách sử dụng: Số dòng tổng và số dòng có lỗi sau kiểm tra.
- **Cột Lỗi**: Cách sử dụng: Đọc lỗi theo dòng, sửa file trước khi nhập lại.

## 4. Trình tự công việc

File mẫu → điền cặp mapping → tải lên một file → đọc lỗi từng dòng → sửa và nạp lại nếu cần → lưu các dòng hợp lệ sau kiểm tra lại → đối chiếu số dòng và mapping nhận được

### Bước 1 — Chuẩn bị file

Tải file mẫu. Điền Mã đối tác, Tên định mức bên gửi, Mã định mức tương ứng và Ghi chú bằng dữ liệu thử đã soát.

### Bước 2 — Đọc và kiểm tra

Chọn **Tải lên từ Excel** với đúng một file.xlsx/.xls. Soát từng dòng và cột **Lỗi**, đối chiếu tổng/hợp lệ/lỗi; sửa file rồi chọn lại khi cần.

### Bước 3 — Quyết định phạm vi lưu

Bấm **Lưu** khi có ít nhất một dòng hợp lệ. Máy chủ kiểm tra lại toàn bộ danh sách, bỏ dòng bị đánh lỗi và ghi các dòng còn hợp lệ trong một giao dịch; phản hồi **Đã lưu n dòng mapping.** là số thực ghi. Đối chiếu số này với danh sách mapping sau tải lại. Nếu phát sinh lỗi ghi ở dữ liệu, giao dịch bị hủy; không coi các dòng hợp lệ đã lưu khi nhận **Lỗi lưu import**.

## 6. Giải thích các thông tin trên màn hình

- **Tải file mẫu**: Cách sử dụng: Dùng mẫu MAPPING DINH MUC GIA CONG để giữ đúng tiêu đề.
- **Mã đối tác / Tên định mức bên gửi / Mã định mức tương ứng**: Cách sử dụng: Ba khóa đối chiếu của mỗi dòng.
- **Tổng / Hợp lệ / Lỗi**: Cách sử dụng: Số dòng tổng và số dòng có lỗi sau kiểm tra.
- **Cột Lỗi**: Cách sử dụng: Đọc lỗi theo dòng, sửa file trước khi nhập lại.
- **Lưu**: Cách sử dụng: Chỉ bật khi có ít nhất một dòng hợp lệ và không đang xử lý.

- **`ma_doitac` / Mã đối tác**: Bắt buộc: Có; Quy tắc: Mã đối tác đã khai ở hệ thống nhận. Bỏ khoảng trắng đầu/cuối.
- **`tendinhmuc_gui` / Tên định mức bên gửi**: Bắt buộc: Có; Quy tắc: Tên do đối tác gửi, không phải mã định mức nội bộ. Khi dò trùng trong file, tên được bỏ khoảng trắng đầu/cuối và không phân biệt hoa/thường; mã đối tác vẫn dùng giá trị đã nhập.
- **`madinhmuc_nhan` / Mã định mức tương ứng**: Bắt buộc: Có; Quy tắc: Mã đã có trong danh mục Định mức của hệ thống nhận; không điền tên hiển thị thay mã.
- **`ghichu` / Ghi chú**: Bắt buộc: Không; Quy tắc: Diễn giải cho cặp mapping.

Dòng có cả ba cột khóa trống bị bỏ qua, kể cả khi có Ghi chú. Dòng hợp lệ được tạo với trạng thái **Kích hoạt**, chi nhánh và người tạo theo yêu cầu lưu hiện tại. Cặp trùng với mapping tìm thấy bị báo lỗi; import không ghi đè. Hai dòng cùng mã đối tác và tên bên gửi trong file: dòng sau bị đánh lỗi.

## 7. Kiểm tra sau khi thực hiện

Đối chiếu lại bản ghi và liên kết theo đúng hệ thống chi nhánh đang truy cập. Kết quả mong đợi của thao tác được mô tả ở các bước trên; chưa có bằng chứng lưu/ghi thật của phiên này.

## 8. Những điều cần lưu ý

Dòng đỏ không được lưu, nhưng nút **Lưu** vẫn có thể bật khi còn dòng hợp lệ. Muốn nhập đủ lô phải sửa file và tải lại trước khi lưu. Kết quả xem trước không giữ chỗ: dữ liệu thay đổi sau xem trước có thể làm kết quả lưu khác. Khi báo **Lỗi lưu import**, không khẳng định đã lưu một phần; máy chủ hủy giao dịch ghi.

## 9. Vướng mắc thường gặp

- **Thiếu mã đối tác / Thiếu tên định mức bên gửi / Thiếu mã định mức tương ứng (bên nhận)**: Cách xử lý: Điền đủ ba cột khóa, tải lại file.
- **Đối tác '…' không tồn tại**: Cách xử lý: Đối chiếu mã ở Kết nối đối tác của hệ thống nhận.
- **Mã định mức '…' không có trong hệ thống**: Cách xử lý: Kiểm tra mã Định mức nội bộ; không nhập tên thay mã.
- **Đã có mapping cho đối tác + tên định mức gửi này**: Cách xử lý: Tìm và sửa mapping đang có nếu cần; import không ghi đè.
- **Trùng với dòng khác trong file import**: Cách xử lý: Giữ một dòng cho cùng đối tác/tên gửi.
- **Lỗi lưu import**: Cách xử lý: Dừng đối chiếu lô, ghi số dòng trước/sau và báo IT kiểm tra lỗi ghi; không mặc định các dòng tốt đã lưu.

### “Vui lòng chọn đúng 1 file.” 

Nguyên nhân: Không chọn hoặc chọn nhiều file.

Cách xử lý: Chọn một file theo mẫu.

### “File không có dòng dữ liệu nào.” 

Nguyên nhân: File đọc không có bản ghi.

Cách xử lý: Kiểm tra sheet và dòng dữ liệu.

### “Không có dòng hợp lệ nào để lưu.” 

Nguyên nhân: Mọi dòng có lỗi.

Cách xử lý: Sửa lỗi và đọc lại file.

## 10. Công việc tiếp theo

Kiểm tra dữ liệu tại màn liên quan trước khi tiếp tục nghiệp vụ. [TỔNG QUAN MAPPING ĐỊNH MỨC GIA CÔNG](/bai-viet/2026-11-07-tl-f03-0-tong-quan-mapping-dinh-muc-gia-cong/); [TỔNG QUAN MÀN HÌNH KẾT NỐI ĐỐI TÁC](/bai-viet/2026-11-07-tl-f01-0-tong-quan-man-hinh-ket-noi-doi-tac/); [TỔNG QUAN MÀN HÌNH ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-0-tong-quan-man-hinh-dinh-muc/).

## 11. Bài hướng dẫn liên quan

[TỔNG QUAN MAPPING ĐỊNH MỨC GIA CÔNG](/bai-viet/2026-11-07-tl-f03-0-tong-quan-mapping-dinh-muc-gia-cong/); [TỔNG QUAN MÀN HÌNH KẾT NỐI ĐỐI TÁC](/bai-viet/2026-11-07-tl-f01-0-tong-quan-man-hinh-ket-noi-doi-tac/); [TỔNG QUAN MÀN HÌNH ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-0-tong-quan-man-hinh-dinh-muc/).
