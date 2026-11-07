---
title: "HƯỚNG DẪN IMPORT DANH MỤC CCDC"
date: "2026-11-07"
summary: "Nhập danh mục loại CCDC hoặc đơn vị sử dụng từ mẫu Excel."
module: "Tài sản và CCDC"
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

Nhập danh mục loại CCDC hoặc đơn vị sử dụng từ mẫu Excel.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: nhập danh mục loại CCDC hoặc đơn vị sử dụng từ mẫu Excel.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Danh mục CCDC**

## 3. Nhận biết màn hình

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Thêm loại**, **Import Excel**, **Thêm đơn vị**, **Chọn file Excel**, **Tải file mẫu**, **Hủy**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin và bảng chi tiết của cửa sổ. Khung  khoanh các nút ở cuối cửa sổ.

![Hình 1: Import loại CCDC trước khi chọn file](/posts/2026-11-07-ts-b04-1-huong-dan-import-danh-muc-ccdc/hinh-01-ccdc-dm-loai-import.png)

![Hình 2: Import đơn vị CCDC trước khi chọn file](/posts/2026-11-07-ts-b04-1-huong-dan-import-danh-muc-ccdc/hinh-02-ccdc-dm-don-vi-import.png)

## 4. Trình tự công việc

Chọn đúng tab → Tải mẫu riêng → Chuẩn bị mã mới/mã cập nhật → Nạp/rà dữ liệu → Import → Kiểm kết quả và tài khoản

## 5. Thực hiện trên phần mềm

1. Chọn đúng tab **Loại CCDC** hoặc **Đơn vị sử dụng**, mở **Import Excel** và tải mẫu riêng của tab. Mỗi dòng là một mã danh mục; xóa dòng ví dụ trước nạp.
2. Nhập cột theo phần “Giải thích các thông tin trên màn hình”. Mã và tên là bắt buộc; các ô khác có thể trống nhưng sẽ được gửi dưới dạng trống, không có nghĩa giữ nguyên giá trị cũ khi cập nhật.
3. Chọn file.xlsx, kiểm tra bảng xem trước và sửa các ô cần thiết. Hàng đầu phải là tiêu đề; không tìm thấy cột mã/tên thì từ chối file. Dòng trống toàn bộ bị bỏ, dòng thiếu mã/tên không được gửi.
4. Đối chiếu mã trùng trước **Import**: mã đã có cập nhật danh mục hiện tại, mã mới thêm. Không có bước gộp/xác nhận trùng theo từng dòng; hai dòng cùng mã có thể cập nhật lần lượt nên chuẩn bị một dòng duy nhất cho một mã.
5. Đọc kết quả **thêm / cập nhật / bỏ qua** rồi kiểm tra danh mục theo các mã trong file. Nếu có lỗi thì xử lý thông báo; không suy rằng toàn bộ file chưa lưu hoặc toàn bộ đã lưu khi chưa đối chiếu. Không nạp lại cả file nhiều lần chỉ vì chưa thấy mã trong trang đầu.

## 6. Giải thích các thông tin trên màn hình

- **Mã**: Ý nghĩa, cách nhập hoặc đối chiếu: Bắt buộc ở cả hai mẫu; kiểu chữ, khóa tìm mã cũ để cập nhật hoặc thêm mã mới.
- **Tên loại CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Bắt buộc trong mẫu Loại CCDC; nhập tên loại xuất hiện ở hồ sơ ghi tăng.
- **Thuộc loại**: Ý nghĩa, cách nhập hoặc đối chiếu: Chỉ mẫu Loại CCDC; nhóm phân loại cấp trên dạng chữ, có thể trống.
- **TK công cụ**: Ý nghĩa, cách nhập hoặc đối chiếu: Chỉ mẫu Loại CCDC; tài khoản công cụ dạng chữ, ví dụ 153.
- **TK chờ phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Chỉ mẫu Loại CCDC; tài khoản chờ phân bổ dạng chữ, ví dụ 242.
- **Tên đơn vị**: Ý nghĩa, cách nhập hoặc đối chiếu: Bắt buộc trong mẫu Đơn vị sử dụng; tên bộ phận nhận CCDC.
- **TK chi phí**: Ý nghĩa, cách nhập hoặc đối chiếu: Chỉ mẫu Đơn vị sử dụng; mã tài khoản nhận chi phí dạng chữ, có thể trống.
- **Ghi chú**: Ý nghĩa, cách nhập hoặc đối chiếu: Có trong cả hai mẫu; chữ ghi chú của danh mục, có thể trống. Mẫu không có cột Kích hoạt.

Mẫu **Loại CCDC** có 6 cột: Mã, Tên loại CCDC, Thuộc loại, TK công cụ, TK chờ phân bổ, Ghi chú. Mẫu **Đơn vị sử dụng** có 4 cột: Mã, Tên đơn vị, TK chi phí, Ghi chú. Giữ mã/tài khoản ở dạng text nếu có số 0 đầu; mọi ô được đọc thành chuỗi đã bỏ khoảng trắng hai đầu.

## 7. Kiểm tra sau khi thực hiện

Mã mới được thêm, mã trùng được cập nhật theo nội dung import.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Dòng thiếu Mã/Tên bị bỏ qua. Trùng mã có thể cập nhật dữ liệu đang dùng; phải kiểm tra trước import.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Không tìm thấy cột Mã và Tên**: Cách xử lý: Tải mẫu đúng tab, giữ tiêu đề hàng đầu theo phần “Giải thích các thông tin trên màn hình”.
- **Không có dòng hợp lệ**: Cách xử lý: Điền cả mã và tên; dòng thiếu một trong hai không được gửi.
- **Dữ liệu cũ thay đổi sau import**: Cách xử lý: Trùng mã là cập nhật; đối chiếu các ô trống đã ghi đè, không tạo lại mã khác để che sai lệch.
- **Import thất bại**: Cách xử lý: Giữ file nguồn, ghi thông báo và đối chiếu các mã đã lưu trước thử lại.

## 10. Câu hỏi thường gặp

**Import mã đã có có tạo thêm bản sao không?** Không; tìm theo mã để cập nhật dòng có sẵn. Muốn thêm đối tượng khác phải dùng mã riêng.

## 11. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN DANH MỤC CCDC](/bai-viet/2026-11-07-ts-b04-0-huong-dan-tong-quan-danh-muc-ccdc/)** — Tổng quan Danh mục CCDC.

## 12. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN DANH MỤC CCDC](/bai-viet/2026-11-07-ts-b04-0-huong-dan-tong-quan-danh-muc-ccdc/)** — Tổng quan Danh mục CCDC.
