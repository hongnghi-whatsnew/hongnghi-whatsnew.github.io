---
title: "HƯỚNG DẪN GÁN ĐỐI TƯỢNG CHO HÀNG HÓA CÒN THIẾU"
date: "2026-11-07"
summary: "Bổ sung đối tượng tập hợp chi phí từ danh sách hàng chưa gán."
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

Bổ sung đối tượng tập hợp chi phí từ danh sách hàng chưa gán.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Có ít nhất một dòng hàng/kho chưa gán trong phạm vi lọc và THCP đích đang sử dụng. Rà số lượng, kho, loại nguồn và phiếu chưa khóa; xác định đúng mã/kho trước thực hiện gán hàng loạt.

hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; kiểm tra đúng hệ thống của đơn vị trước thao tác.

## 2. Mở chức năng

**Giá thành → Hàng hóa chưa gán THCP**

## 3. Nhận biết màn hình

![Giao diện danh sách trước thao tác — Gia Phúc/dev, 25/10/2026; chưa thực hiện tính, gán, xóa hoặc kết chuyển trong ảnh.](/posts/2026-11-07-gt-a05-1-huong-dan-gan-doi-tuong-cho-hang-hoa-con-thieu/hinh-01-danh-sach-truoc-thao-tac.png)

Màn danh sách dùng để đối chiếu dữ liệu và mở các thao tác theo hồ sơ đã chọn.

Các nút chính của chức năng: Các nút tác nghiệp được mô tả tại phần “Thực hiện trên phần mềm”..

Chưa có ảnh xác minh; danh sách cảnh chụp ở cuối bài. Thao tác tìm/lọc danh sách chung xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); không suy từ nút hiển thị thành quyền đã được cấp.

## 4. Trình tự công việc

Lọc hàng chưa gán → Rà mã hàng/kho/sản lượng → Chọn hàng và THCP đích → Gán → Tải lại và đối chiếu liên kết

## 5. Thực hiện trên phần mềm

1. Chọn **Loại hàng hóa**, **Năm / Tháng** và kiểm tra **Khoảng ngày**. Phải có cả hai mốc ngày để tải danh sách; danh sách rỗng chỉ phản ánh nguồn/phạm vi lọc đang chọn.
2. Rà **Mã hàng hóa**, **SL nhập kho**, **Kho nhập**, **Số mặt**. Chọn từng dòng mã–kho cần xử lý; một mã có nhiều kho không đồng nghĩa phải gán hết vào một đối tượng.
3. Chọn **Gán vào đối tượng THCP** đúng đối tượng đang sử dụng, rồi chọn ít nhất một mã hàng. Nếu đổi bộ lọc làm danh sách tải lại, kiểm tra lại lựa chọn vì màn xóa danh sách đã tick sau tải.
4. Bấm thao tác **Gán** và chờ phản hồi. Với sản xuất ván/giấy, chỉ tập kho đã chọn được gửi; với Dịch vụ, gán theo mã, không hạn chế kho.
5. Kiểm tra số mã được gán trong thông báo và danh sách còn thiếu sau tải lại. Số mã không đếm trùng cùng một mã ở nhiều kho, vì vậy có thể nhỏ hơn số dòng tick.
6. Mở THCP đích để đối chiếu mã/kho; kiểm tra thêm các phiếu nhập thành phẩm/gia công chưa khóa của mã. Khoảng ngày chỉ lọc danh sách chọn, không giới hạn toàn bộ ngày phiếu được đồng bộ. Sau đó rà lại kỳ giá thành liên quan trước tính lại.

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

Các mã/kho được chọn gắn THCP đích và được loại khỏi tập còn thiếu theo dữ liệu tải lại. Số mã thành công không đếm trùng nhiều kho. Kiểm tra liên kết trên THCP đích cùng các phiếu chưa khóa trước tổng hợp/tính giá thành.

Đây là hành vi dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Phạm vi đồng bộ gồm danh mục và chứng từ liên quan chưa khóa; phải kiểm tra ảnh hưởng sau gán.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Chọn đối tượng tập hợp chi phí để gán.**: chưa chọn THCP đích; chọn đúng đối tượng đang sử dụng rồi kiểm tra lại các dòng đã chọn.
- **Chọn ít nhất 1 mã hàng để gán.**: chưa có dòng chọn hoặc vừa đổi bộ lọc làm xóa lựa chọn; chọn lại đúng cặp mã–kho.
- **Danh sách không có dòng**: kiểm tra đủ hai mốc ngày, Loại hàng hóa và nguồn phát sinh. Màn chỉ hiện dòng chưa có THCP trong phạm vi lọc; không tự tạo phiếu để làm danh sách xuất hiện.

## 10. Câu hỏi thường gặp

**Danh sách rỗng có nghĩa mọi hàng hóa trong danh mục đã có THCP không?** Không. Danh sách chỉ kiểm tra dòng nguồn có phát sinh thuộc loại và khoảng ngày đang chọn. Rà lại bộ lọc và các kỳ khác khi cần kiểm soát đầy đủ.

## 11. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN HÀNG HÓA CHƯA GÁN THCP](/bai-viet/2026-11-07-gt-a05-0-huong-dan-tong-quan-hang-hoa-chua-gan-thcp/)** — Tổng quan Hàng hóa chưa gán THCP.

## 12. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN HÀNG HÓA CHƯA GÁN THCP](/bai-viet/2026-11-07-gt-a05-0-huong-dan-tong-quan-hang-hoa-chua-gan-thcp/)** — Tổng quan Hàng hóa chưa gán THCP.
