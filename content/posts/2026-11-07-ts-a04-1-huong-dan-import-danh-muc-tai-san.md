---
title: "HƯỚNG DẪN IMPORT DANH MỤC TÀI SẢN"
date: "2026-11-07"
summary: "Nhập danh mục loại tài sản hoặc đơn vị sử dụng từ mẫu Excel."
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

Nhập danh mục loại tài sản hoặc đơn vị sử dụng từ mẫu Excel.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có đúng file mẫu theo tab Loại tài sản hoặc Đơn vị sử dụng và mã/tên cho từng dòng.
- Có danh mục hiện tại để kiểm tra mã trùng và các cột phụ cần giữ khi cập nhật; không để ô trống nếu muốn giữ tài khoản/ghi chú cũ.
- Trạng thái Kích hoạt xử lý ngoài import, vì hai mẫu không có cột này.

## 2. Mở chức năng

**Tài sản & CCDC → Danh mục tài sản**

## 3. Nhận biết màn hình

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Thêm loại**, **Import Excel**, **Thêm đơn vị**, **Chọn file Excel**, **Tải file mẫu**, **Hủy**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin và bảng chi tiết của cửa sổ. Khung  khoanh các nút ở cuối cửa sổ.

![Hình 1: Import loại tài sản trước khi chọn file](/posts/2026-11-07-ts-a04-1-huong-dan-import-danh-muc-tai-san/hinh-01-ts-dm-loai-import.png)

![Hình 2: Import đơn vị sử dụng tài sản trước khi chọn file](/posts/2026-11-07-ts-a04-1-huong-dan-import-danh-muc-tai-san/hinh-02-ts-dm-don-vi-import.png)

## 4. Trình tự công việc

Chọn đúng tab → Tải mẫu loại hoặc đơn vị → Nhập mã/tên/tài khoản → Nạp và rà dòng → Import → Đối chiếu mã tạo/cập nhật

## 5. Thực hiện trên phần mềm

1. Chọn **Import Excel** tại đúng tab **Loại tài sản** hoặc **Đơn vị sử dụng**, tải mẫu tương ứng. Mẫu loại có đúng sáu cột: **Mã, Tên loại tài sản, Thuộc loại, TK nguyên giá, TK khấu hao, Ghi chú**; mẫu đơn vị có bốn cột: **Mã, Tên đơn vị, TK chi phí, Ghi chú**. Không thêm cột Kích hoạt với kỳ vọng đổi trạng thái.
2. Giữ dòng đầu làm tiêu đề, nhập mã/tên vào từng dòng. Hai cột mã/tên bắt buộc phải được nhận diện; tiêu đề được chuẩn hóa bỏ dấu, không phân biệt hoa thường và gộp khoảng trắng. Dòng hoàn toàn trống được bỏ qua.
3. Soát mã đã có trước import: **trùng mã sẽ cập nhật**, mã mới sẽ thêm. Với mã cập nhật phải điền lại các cột phụ muốn giữ, vì ô trống cũng được gửi lên và có thể thay giá trị hiện có. Loại bỏ mã lặp trong file; các dòng được xử lý tuần tự, không có cảnh báo riêng cho lặp mã trong file.
4. Chọn file Excel và kiểm tra bảng xem trước, số dòng hợp lệ. Dòng thiếu Mã hoặc Tên không được gửi để lưu; sửa trực tiếp ô hoặc sửa file rồi đọc lại. Nếu thiếu tiêu đề bắt buộc, dùng lại đúng mẫu của tab.
5. Sau lưu, ghi lại số **thêm / cập nhật / bỏ qua**, tải lại đúng tab và đối chiếu từng mã cần thay đổi. cửa sổ hiện chỉ thông báo số lượng, chưa hiển thị danh sách lỗi dòng từ hệ thống; không coi số bỏ qua bằng 0 là đủ chứng minh mọi dòng Excel đều được gửi.
6. Kiểm tra riêng Kích hoạt: mã mới dùng mặc định đang sử dụng, cập nhật mã cũ không đổi cờ này. Nếu cần đổi trạng thái, sửa ở danh mục thay vì nhập qua mẫu Excel.

## 6. Giải thích các thông tin trên màn hình

- **Mã**: Ý nghĩa, cách nhập và quy tắc riêng: Cột bắt buộc ở cả hai mẫu, dùng so mã chưa xóa để thêm mới/cập nhật; mỗi dòng phải có mã và tên. Không dùng mã đơn vị trong file loại hoặc ngược lại.
- **Tên loại tài sản**: Ý nghĩa, cách nhập và quy tắc riêng: Cột tên bắt buộc của mẫu Loại tài sản; nhập tên loại hiển thị trên phiếu ghi tăng.
- **Thuộc loại**: Ý nghĩa, cách nhập và quy tắc riêng: Cột riêng mẫu Loại tài sản; thông tin nhóm phân loại, không phải mã loại cha bắt buộc.
- **TK nguyên giá / TK khấu hao**: Ý nghĩa, cách nhập và quy tắc riêng: Hai cột riêng mẫu Loại tài sản; nhập tài khoản gợi ý theo loại. Ô trống được gửi thành chuỗi trống, có thể thay giá trị đang có khi cập nhật.
- **Tên đơn vị**: Ý nghĩa, cách nhập và quy tắc riêng: Cột tên bắt buộc của mẫu Đơn vị sử dụng; nhập tên đơn vị sử dụng TSCĐ.
- **TK chi phí**: Ý nghĩa, cách nhập và quy tắc riêng: Cột riêng mẫu Đơn vị sử dụng; tài khoản chi phí lưu cho đơn vị. Ô trống có thể ghi đè tài khoản đang có khi cập nhật.
- **Ghi chú**: Ý nghĩa, cách nhập và quy tắc riêng: Có trong cả hai mẫu; nội dung ghi chú của danh mục, có thể để trống. Các ô văn bản được bỏ khoảng trắng đầu/cuối.
- **Số dòng hợp lệ**: Ý nghĩa, cách nhập và quy tắc riêng: Chỉ đếm dòng có đủ Mã và Tên sau bỏ khoảng trắng. Dòng trống bị bỏ khi đọc file; dòng thiếu mã/tên không được gửi khi lưu.
- **Thêm / Cập nhật / Bỏ qua**: Ý nghĩa, cách nhập và quy tắc riêng: Kết quả trả về sau import. Mã đã có cập nhật tên và các cột phụ; mã mới tạo bản ghi. Mẫu không nhận Kích hoạt: bản ghi mới theo mặc định true của dữ liệu; cập nhật không đổi cờ kích hoạt.

## 7. Kiểm tra sau khi thực hiện

Theo luồng hiện tại, mã mới thêm danh mục, mã đã có cập nhật tên/các cột phụ, số lượng kết quả hiện trên thông báo. Kích hoạt của mã cũ được giữ; mã mới mặc định đang sử dụng. Đối chiếu lại các dòng bị loại ở bảng xem trước với file nguồn.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Dòng thiếu Mã/Tên bị bỏ qua. Trùng mã có thể cập nhật dữ liệu đang dùng; phải kiểm tra trước import.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Không tìm thấy cột Mã và Tên**: Cách xử lý riêng: Dùng đúng mẫu của tab Loại tài sản/Đơn vị sử dụng, giữ tiêu đề ở dòng đầu và tên cột tương ứng.
- **Không có dòng hợp lệ (cần Mã + Tên)**: Cách xử lý riêng: Sửa từng dòng có thiếu mã/tên trước lưu; các dòng đó bị lọc và không được gửi lên hệ thống.
- **File rỗng / không có dòng dữ liệu**: Cách xử lý riêng: Kiểm tra có dòng dữ liệu sau tiêu đề và không hoàn toàn trắng.
- **Không đọc được file Excel**: Cách xử lý riêng: Dùng file.xlsx đọc được và xem lại bảng trước khi lưu.
- **Mã cũ bị thay tên/tài khoản sau import**: Cách xử lý riêng: Trùng mã là cập nhật; đối chiếu file và dữ liệu trước import. Ô phụ trống cũng có thể thay giá trị cũ, không mặc định giữ nguyên.
- **Kích hoạt không đổi sau import**: Cách xử lý riêng: Mẫu không hỗ trợ cột này; mở Sửa danh mục để điều chỉnh trạng thái khi cần.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN DANH MỤC TÀI SẢN](/bai-viet/2026-11-07-ts-a04-0-huong-dan-tong-quan-danh-muc-tai-san/)** — Tổng quan Danh mục tài sản.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN DANH MỤC TÀI SẢN](/bai-viet/2026-11-07-ts-a04-0-huong-dan-tong-quan-danh-muc-tai-san/)** — Tổng quan Danh mục tài sản.
