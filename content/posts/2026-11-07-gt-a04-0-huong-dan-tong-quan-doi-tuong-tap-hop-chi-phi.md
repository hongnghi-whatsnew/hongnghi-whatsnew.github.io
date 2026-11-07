---
title: "HƯỚNG DẪN TỔNG QUAN ĐỐI TƯỢNG TẬP HỢP CHI PHÍ"
date: "2026-11-07"
summary: "Quản lý mã đối tượng dùng để gom chi phí theo sản phẩm, công đoạn, đơn hàng hoặc dịch vụ."
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

Quản lý mã đối tượng dùng để gom chi phí theo sản phẩm, công đoạn, đơn hàng hoặc dịch vụ.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Chốt đối tượng cần tập hợp (sản phẩm/công đoạn/đơn hàng/dịch vụ), mã chưa dùng và cấu hình tính NVL. Chuẩn bị hàng/kho sẽ gán; nếu sửa/ngưng/xóa đối tượng đang có số liệu phải rà kỳ đã kết chuyển và liên kết trước thao tác.

hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; kiểm tra đúng hệ thống của đơn vị trước thao tác.

## 2. Mở chức năng

**Giá thành → Đối tượng tập hợp chi phí**

## 3. Nhận biết màn hình

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Tính giá ván**, **Tính giá giấy**, **Tính hóa chất**, **Kích hoạt (đang sử dụng)**, **Hủy**, **Lưu**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Trên ảnh danh sách, khung  khoanh tiêu đề, tab và thanh thao tác; khung  khoanh bảng danh sách. Trên ảnh biểu mẫu, khung  khoanh các trường thông tin; khung  khoanh các nút ở cuối biểu mẫu.

![Hình 1: Danh sách đối tượng tập hợp chi phí hiện có](/posts/2026-11-07-gt-a04-0-huong-dan-tong-quan-doi-tuong-tap-hop-chi-phi/hinh-01-gt-dt-ds.png)

![Hình 2: cửa sổ thêm đối tượng tập hợp chi phí chưa nhập và lưu](/posts/2026-11-07-gt-a04-0-huong-dan-tong-quan-doi-tuong-tap-hop-chi-phi/hinh-02-gt-dt-form.png)

## 4. Trình tự công việc

Khai loại, mã và tên THCP → Chọn phạm vi tính NVL → Kiểm tra trạng thái → Lưu → Gán/đối chiếu hàng hóa liên quan

## 5. Thực hiện trên phần mềm

1. Khi khai báo đối tượng, chọn **Loại** phù hợp: Sản phẩm, Công đoạn, Đơn hàng hoặc Dịch vụ; nhập **Mã**, **Tên** và **Diễn giải**.
2. Kiểm tra nhóm **Tính giá nguyên vật liệu (621)**: **Tính giá ván**, **Tính giá giấy**, **Tính hóa chất** theo phạm vi cần tập hợp.
3. Kiểm tra **Kích hoạt (đang sử dụng)** trước khi chọn đối tượng trong kỳ; gán hàng hóa theo [HƯỚNG DẪN GÁN HÀNG HÓA CHO ĐỐI TƯỢNG TẬP HỢP CHI PHÍ](/bai-viet/2026-11-07-gt-a04-1-huong-dan-gan-hang-hoa-cho-doi-tuong-tap-hop-chi-phi/).

- **Gán hàng hóa cho đối tượng tập hợp chi phí**: Bài hướng dẫn: [HƯỚNG DẪN GÁN HÀNG HÓA CHO ĐỐI TƯỢNG TẬP HỢP CHI PHÍ](/bai-viet/2026-11-07-gt-a04-1-huong-dan-gan-hang-hoa-cho-doi-tuong-tap-hop-chi-phi/)
- **Sao chép đối tượng tập hợp chi phí**: Bài hướng dẫn: [HƯỚNG DẪN SAO CHÉP ĐỐI TƯỢNG TẬP HỢP CHI PHÍ](/bai-viet/2026-11-07-gt-a04-2-huong-dan-sao-chep-doi-tuong-tap-hop-chi-phi/)

## 6. Giải thích các thông tin trên màn hình

- **Loại**: Cách nhập / cách đọc và quy tắc: Chọn Sản phẩm, Công đoạn, Đơn hàng hoặc Dịch vụ; thêm mới mặc định Sản phẩm. Đây là cách phân loại THCP, khác bộ lọc Sản xuất ván/giấy/Dịch vụ ở màn Gán HH.
- **Mã**: Cách nhập / cách đọc và quy tắc: Nhập bắt buộc; mã THCP dùng liên kết chi phí và kỳ. Không trùng trong cùng chi nhánh theo chỉ mục dữ liệu; không dùng mã hàng hóa thay cho mã THCP nếu không đúng quy ước nghiệp vụ.
- **Tên**: Cách nhập / cách đọc và quy tắc: Nhập bắt buộc; tên đối tượng tập hợp chi phí, có thể đại diện một nhóm nhiều thành phẩm.
- **Diễn giải**: Cách nhập / cách đọc và quy tắc: Nhập mô tả phạm vi chi phí/nhóm sản phẩm để phân biệt các THCP tương tự; không phải công thức hoặc tiêu thức phân bổ.
- **Tính giá nguyên vật liệu (621)**: Cách nhập / cách đọc và quy tắc: Nhóm ba ô độc lập Tính giá ván, Tính giá giấy, Tính hóa chất; mặc định chọn cả ba khi thêm. Bỏ một ô để không cộng phần NVL tương ứng vào giá thành của đối tượng; ván là hàng trơn, giấy/hóa chất theo phân nhóm NVL.
- **Kích hoạt (đang sử dụng)**: Cách nhập / cách đọc và quy tắc: Mặc định chọn ở cửa sổ thêm; bỏ để ngưng sử dụng đối tượng. Danh sách chọn kỳ dùng các THCP đang sử dụng; ngưng không xóa lịch sử kỳ đã kết chuyển.

## 7. Kiểm tra sau khi thực hiện

Có THCP với mã/tên, loại và lựa chọn NVL phục vụ chọn kỳ. Khai báo THCP chưa tự gán toàn bộ hàng hóa; tiếp tục Gán HH và rà sản lượng. Ngưng sử dụng giữ lịch sử; Xóa có hành vi khác theo việc đối tượng đã dùng trong kỳ kết chuyển hay chưa.

Đây là hành vi dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Không hiểu ngưng sử dụng là xóa chi phí đã phát sinh. Điều kiện xóa đối tượng có liên quan cần kiểm tra dữ liệu trước thao tác.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Vui lòng nhập Mã và Tên đối tượng**: một trong hai ô chưa có giá trị; bổ sung đủ mã và tên trước Lưu.
- **Không lưu được mã đã có**: dữ liệu có ràng buộc mã duy nhất trong cùng chi nhánh. Tra danh mục và chọn mã mới đúng quy ước; không xóa đối tượng cũ đang dùng chỉ để lấy lại mã.

## 10. Câu hỏi thường gặp

**Một THCP có bắt buộc là một thành phẩm không?** Không. THCP liên kết nhiều hàng hóa qua Gán HH. Mã THCP và mã hàng là hai đối tượng khác nhau.

## 11. Công việc tiếp theo

- **[HƯỚNG DẪN GÁN HÀNG HÓA CHO ĐỐI TƯỢNG TẬP HỢP CHI PHÍ](/bai-viet/2026-11-07-gt-a04-1-huong-dan-gan-hang-hoa-cho-doi-tuong-tap-hop-chi-phi/)** — Gán hàng hóa cho đối tượng tập hợp chi phí.

## 12. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN GÁN HÀNG HÓA CHO ĐỐI TƯỢNG TẬP HỢP CHI PHÍ](/bai-viet/2026-11-07-gt-a04-1-huong-dan-gan-hang-hoa-cho-doi-tuong-tap-hop-chi-phi/)** — Gán hàng hóa cho đối tượng tập hợp chi phí.
- **[HƯỚNG DẪN SAO CHÉP ĐỐI TƯỢNG TẬP HỢP CHI PHÍ](/bai-viet/2026-11-07-gt-a04-2-huong-dan-sao-chep-doi-tuong-tap-hop-chi-phi/)** — Sao chép đối tượng tập hợp chi phí.
