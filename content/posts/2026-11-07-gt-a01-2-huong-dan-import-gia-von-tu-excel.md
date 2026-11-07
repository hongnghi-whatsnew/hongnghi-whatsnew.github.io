---
title: "HƯỚNG DẪN IMPORT GIÁ VỐN TỪ EXCEL"
date: "2026-11-07"
summary: "Nhập giá vốn đã được kế toán kiểm tra từ file Excel và xử lý các dòng lỗi trước khi ghi dữ liệu."
module: "Giá thành"
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

Nhập giá vốn đã được kế toán kiểm tra từ file Excel và xử lý các dòng lỗi trước khi ghi dữ liệu.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; kiểm tra đúng hệ thống của đơn vị trước thao tác.

## 2. Mở chức năng

**Giá thành → Tính giá xuất kho**

## 3. Nhận biết màn hình

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Tải lên từ Excel**, **Tải file mẫu**, **Lưu**, **Đóng**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin và bảng chi tiết của cửa sổ. Khung  khoanh các nút ở cuối cửa sổ.

![Hình 1: Import giá vốn: chọn tháng, tải file và kiểm tra lưới trước khi lưu](/posts/2026-11-07-gt-a01-2-huong-dan-import-gia-von-tu-excel/hinh-01-gt-import-gia-von.png)

## 4. Trình tự công việc

Chọn tháng → Tải mẫu giá vốn → Nạp mã hàng/đơn giá → Rà toàn bộ dòng còn trong bảng → Lưu → Theo dõi và đối chiếu kết quả

## 5. Thực hiện trên phần mềm

1. Chọn **Import giá vốn (Excel)**; xác định **Tháng**.
2. Dùng **Tải file mẫu**. Cột A là mã hàng, cột B là đơn giá; dòng đầu là tiêu đề. Không bỏ trống đơn giá; giá trị 0 là một giá trị thực, không phải ô trống.
3. Chọn **Tải lên từ Excel**. Xem **Ghi chú** từng dòng, sửa dữ liệu hoặc loại dòng không thuộc phạm vi rồi **Kiểm tra lại**.
4. Chỉ **Lưu** khi không còn dòng lỗi. Nếu tác vụ còn chạy nền, theo dõi kết quả đợt; không gửi lại cùng file ngay.
5. Mở lại danh sách đợt hoặc kỳ liên quan, đối chiếu số dòng và giá của các mã mẫu với file đã duyệt.

## 6. Giải thích các thông tin trên màn hình

- **Tháng:**: Cách nhập / cách đọc và quy tắc: Chỉ có khi import giá vốn; chọn tháng nhận giá vốn, hiển thị MM/yyyy, mặc định tháng hiện tại. Không xuất hiện trong import giá thành.
- **Kỳ giá thành:**: Cách nhập / cách đọc và quy tắc: Chỉ có khi import giá thành. Mở từ Tính giá xuất kho thì phải chọn kỳ trong danh sách; mở từ một kỳ xác định thì dùng kỳ truyền sẵn và không hiện ô đổi kỳ. Phải chốt kỳ trước tải Excel.
- **Mã hàng hóa**: Cách nhập / cách đọc và quy tắc: Đầu vào cột A; nhập mã đã có, có thể sửa trên lưới. Hệ thống kiểm tra trùng mã/không tồn tại và phạm vi kỳ khi import giá thành; sau sửa phải Kiểm tra lại.
- **Tên hàng hóa**: Cách nhập / cách đọc và quy tắc: Chỉ đọc, do bước kiểm tra mã điền từ danh mục; không lấy từ Excel và không sửa trực tiếp.
- **Đơn giá**: Cách nhập / cách đọc và quy tắc: Đầu vào số ở cột B; có thể sửa trên lưới. Ô trống hoặc không phải số thành dòng lỗi; 0 là giá trị số thực. Không dùng ô trống thay cho yêu cầu giữ giá cũ.
- **Ghi chú**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; kết quả kiểm tra từng dòng. Có nội dung là dòng lỗi và chặn Lưu; ô rỗng hiển thị Hợp lệ. Cần chạy Kiểm tra lại sau khi sửa Mã/Đơn giá.

## 7. Kiểm tra sau khi thực hiện

Khi tác vụ nền kết thúc, hệ thống báo số mã thành công/tổng mã đã gửi. Đối chiếu đúng tháng, số dòng và đơn giá ở các mã mẫu; trạng thái lỗi cần rà phần đã xử lý trước gửi lại.

Đây là hành vi dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Ô rỗng hoặc chữ không được hiểu là đơn giá 0. Xác nhận đơn vị tiền và định dạng số; phần đọc file loại dấu phẩy và khoảng trắng.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Vui lòng chọn đúng 1 file.**: đầu vào phải là một tệp Excel, không chọn nhiều tệp cùng lần tải.
- **File không có dòng dữ liệu.**: tệp không có dữ liệu sau hàng tiêu đề. Giữ tiêu đề dòng đầu và nhập mã/đơn giá từ dòng tiếp theo, lưu tệp rồi tải lại.
- **Còn … dòng lỗi (xem cột Ghi chú)…**: còn mã trùng/không tồn tại hoặc dữ liệu giá chưa hợp lệ. Sửa Mã/Đơn giá trên lưới hoặc tệp rồi Kiểm tra lại; chỉ Lưu khi toàn bộ dòng còn trong lưới hợp lệ.
- **Import lỗi: …**: tác vụ nền đã trả trạng thái lỗi. Ghi lại thông báo và số dòng thành công/tổng dòng, kiểm tra đợt và dữ liệu đã cập nhật trước gửi lại để tránh xử lý lặp.
- **Vui lòng chọn tháng.**: thiếu tháng nhận giá vốn. Chọn lại đúng tháng rồi kiểm tra danh sách trước Lưu.

## 10. Câu hỏi thường gặp

**Tick vài dòng có giới hạn phạm vi Lưu không?** Không. Lưu xử lý toàn bộ dòng còn trong lưới. Muốn loại một dòng phải xóa dòng đó rồi kiểm tra lại danh sách.

## 11. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN TÍNH GIÁ XUẤT KHO](/bai-viet/2026-11-07-gt-a01-0-huong-dan-tong-quan-tinh-gia-xuat-kho/)** — Tổng quan Tính giá xuất kho.

## 12. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN TÍNH GIÁ XUẤT KHO](/bai-viet/2026-11-07-gt-a01-0-huong-dan-tong-quan-tinh-gia-xuat-kho/)** — Tổng quan Tính giá xuất kho.
- **[HƯỚNG DẪN TÍNH LẠI GIÁ VỐN BÌNH QUÂN TỨC THỜI](/bai-viet/2026-11-07-gt-a01-1-huong-dan-tinh-lai-gia-von-binh-quan-tuc-thoi/)** — Tính lại giá vốn bình quân tức thời.
- **[HƯỚNG DẪN IMPORT GIÁ THÀNH TỪ EXCEL](/bai-viet/2026-11-07-gt-a01-3-huong-dan-import-gia-thanh-tu-excel/)** — Import giá thành từ Excel.
- **[HƯỚNG DẪN TÍNH VÀ PHÂN BỔ GIÁ VỐN GIA CÔNG NGOÀI](/bai-viet/2026-11-07-gt-a01-4-huong-dan-tinh-va-phan-bo-gia-von-gia-cong-ngoai/)** — Tính và phân bổ giá vốn gia công ngoài.
- **[HƯỚNG DẪN BACKFILL VÀ HOÀN TÁC SỔ CÁI KHO](/bai-viet/2026-11-07-gt-a01-5-huong-dan-backfill-va-hoan-tac-so-cai-kho/)** — Backfill và hoàn tác sổ cái kho.
- **[HƯỚNG DẪN XÓA VÀ HOÀN TÁC ĐỢT TÍNH GIÁ](/bai-viet/2026-11-07-gt-a01-6-huong-dan-xoa-va-hoan-tac-dot-tinh-gia/)** — Xóa và hoàn tác đợt tính giá.
