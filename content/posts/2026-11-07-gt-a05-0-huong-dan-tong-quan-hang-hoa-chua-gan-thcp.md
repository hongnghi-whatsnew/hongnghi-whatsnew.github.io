---
title: "HƯỚNG DẪN TỔNG QUAN HÀNG HÓA CHƯA GÁN THCP"
date: "2026-11-07"
summary: "Rà soát mã hàng có sản lượng nhập nhưng chưa được gán đối tượng tập hợp chi phí."
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

Rà soát mã hàng có sản lượng nhập nhưng chưa được gán đối tượng tập hợp chi phí.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Chốt loại nguồn và khoảng ngày có phát sinh cần rà thiếu THCP. Chuẩn bị đối chiếu phiếu và danh mục THCP đích; danh sách rỗng của một tháng không chứng minh toàn bộ hàng ở mọi kỳ đã gán.

hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; kiểm tra đúng hệ thống của đơn vị trước thao tác.

## 2. Mở chức năng

**Giá thành → Hàng hóa chưa gán THCP**

## 3. Nhận biết màn hình

Màn danh sách dùng để đối chiếu dữ liệu và mở các thao tác theo hồ sơ đã chọn.

Các nút chính của chức năng: Các nút tác nghiệp được mô tả tại phần “Thực hiện trên phần mềm”..

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin, bộ điều kiện hoặc thanh thao tác phía trên. Khung  khoanh bảng danh sách phía dưới.

![Hình 1: Hàng hóa chưa gán THCP: kỳ đang chọn chưa có dữ liệu, chưa gán mã hàng](/posts/2026-11-07-gt-a05-0-huong-dan-tong-quan-hang-hoa-chua-gan-thcp/hinh-01-gt-chua-gan.png)

## 4. Trình tự công việc

Chọn loại hàng và khoảng ngày → Rà hàng/kho chưa gán → Chọn luồng gán THCP → Đối chiếu danh sách sau xử lý

## 5. Thực hiện trên phần mềm

1. Lọc **Loại hàng hóa**, **Năm / Tháng**, **Khoảng ngày** để xác định tập hàng cần rà soát.
2. Đối chiếu **Mã hàng hóa**, **Tên hàng hóa**, **Loại**, **Loại hàng**, **Số mặt**, **SL nhập kho**, **Kho nhập**.
3. Nếu cần gán, chọn **Gán vào đối tượng THCP** và thực hiện [HƯỚNG DẪN GÁN ĐỐI TƯỢNG CHO HÀNG HÓA CÒN THIẾU](/bai-viet/2026-11-07-gt-a05-1-huong-dan-gan-doi-tuong-cho-hang-hoa-con-thieu/); tải lại để kiểm tra hàng còn thiếu.

- **Gán đối tượng cho hàng hóa còn thiếu**: Bài hướng dẫn: [HƯỚNG DẪN GÁN ĐỐI TƯỢNG CHO HÀNG HÓA CÒN THIẾU](/bai-viet/2026-11-07-gt-a05-1-huong-dan-gan-doi-tuong-cho-hang-hoa-con-thieu/)

## 6. Giải thích các thông tin trên màn hình

- **Loại hàng hóa:**: Cách nhập / cách đọc và quy tắc: Chọn nguồn Sản xuất ván/Sản xuất giấy/Dịch vụ; mặc định Sản xuất ván. Danh sách chỉ giữ các dòng nguồn chưa có THCP trong khoảng lọc.
- **Năm / Tháng:**: Cách nhập / cách đọc và quy tắc: Chọn nhanh khoảng ngày; mặc định tháng trước. Chọn cả năm thì phạm vi từ 01/01 đến 31/12 của năm chọn.
- **Khoảng ngày:**: Cách nhập / cách đọc và quy tắc: Hai mốc lấy sản lượng dùng cho danh sách. Đổi ngày/loại sẽ tải lại lưới; đây không phải giới hạn ngày đồng bộ các chứng từ khi Lưu gán.
- **Gán vào đối tượng THCP:**: Cách nhập / cách đọc và quy tắc: Chọn THCP đích đang sử dụng trong đơn vị hiện tại trước Gán. Đây là đối tượng nhận liên kết, không phải bộ lọc danh sách hàng chưa gán.
- **Mã hàng hóa**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; mã hàng chưa gán trên từng cặp mã–kho của danh sách; chọn đúng kho khi một mã có nhiều dòng.
- **Tên hàng hóa**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tên của mã hàng cần gắn THCP, hỗ trợ đối chiếu với phiếu sản xuất/bán dịch vụ.
- **Loại**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; phân loại danh mục hàng như Thành phẩm, Nguyên liệu, Hàng trơn; khác Loại của THCP.
- **Loại hàng**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tên loại hàng chi tiết từ danh mục, dùng phân biệt sản phẩm cùng tên.
- **Số mặt**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; nhãn số mặt như 1M/2M; dùng đối chiếu tổng quy đổi, không nhập lại hệ số ở màn gán.
- **SL nhập kho**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; sản lượng của mã hàng tại kho trong khoảng lọc. Với Dịch vụ, nguồn theo nghiệp vụ bán hàng; không sửa SL trên màn gán.
- **Kho nhập**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; kho của dòng sản lượng. Chọn/bỏ chọn dòng này quyết định phạm vi kho gán cho mã; Dịch vụ gán cấp mã hàng, không hạn chế theo kho hiển thị.
- **Số mặt (quy đổi)**: Cách nhập / cách đọc và quy tắc: Cột tính ẩn, không có trong Chọn cột hiển thị; bằng số mặt đọc từ nhãn × SL nhập. Dùng tính dòng tổng Số mặt; không phải ô người dùng nhập.

## 7. Kiểm tra sau khi thực hiện

Có danh sách mã/kho cần hoàn thiện liên kết trước tính giá thành.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Không tự tạo đối tượng chỉ để làm trống danh sách; mã đích và loại phải được kế toán xác nhận.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Chọn đối tượng tập hợp chi phí để gán.**: chưa chọn THCP đích; chọn đúng đối tượng đang sử dụng rồi kiểm tra lại các dòng đã chọn.
- **Chọn ít nhất 1 mã hàng để gán.**: chưa có dòng chọn hoặc vừa đổi bộ lọc làm xóa lựa chọn; chọn lại đúng cặp mã–kho.
- **Danh sách không có dòng**: kiểm tra đủ hai mốc ngày, Loại hàng hóa và nguồn phát sinh. Màn chỉ hiện dòng chưa có THCP trong phạm vi lọc; không tự tạo phiếu để làm danh sách xuất hiện.

## 10. Câu hỏi thường gặp

**Danh sách rỗng có nghĩa mọi hàng hóa trong danh mục đã có THCP không?** Không. Danh sách chỉ kiểm tra dòng nguồn có phát sinh thuộc loại và khoảng ngày đang chọn. Rà lại bộ lọc và các kỳ khác khi cần kiểm soát đầy đủ.

## 11. Công việc tiếp theo

- **[HƯỚNG DẪN GÁN ĐỐI TƯỢNG CHO HÀNG HÓA CÒN THIẾU](/bai-viet/2026-11-07-gt-a05-1-huong-dan-gan-doi-tuong-cho-hang-hoa-con-thieu/)** — Gán đối tượng cho hàng hóa còn thiếu.

## 12. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN GÁN ĐỐI TƯỢNG CHO HÀNG HÓA CÒN THIẾU](/bai-viet/2026-11-07-gt-a05-1-huong-dan-gan-doi-tuong-cho-hang-hoa-con-thieu/)** — Gán đối tượng cho hàng hóa còn thiếu.
