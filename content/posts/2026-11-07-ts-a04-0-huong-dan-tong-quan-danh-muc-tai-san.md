---
title: "HƯỚNG DẪN TỔNG QUAN DANH MỤC TÀI SẢN"
date: "2026-11-07"
summary: "Quản lý loại tài sản và đơn vị sử dụng phục vụ ghi tăng, hạch toán chi phí."
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

Quản lý loại tài sản và đơn vị sử dụng phục vụ ghi tăng, hạch toán chi phí.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: quản lý loại tài sản và đơn vị sử dụng phục vụ ghi tăng, hạch toán chi phí.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Danh mục tài sản**

## 3. Nhận biết màn hình

Màn danh sách dùng để đối chiếu dữ liệu và mở các thao tác theo hồ sơ đã chọn.

Các nút chính của chức năng: **Thêm loại**, **Import Excel**, **Thêm đơn vị**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Trên ảnh danh sách, khung  khoanh tiêu đề, tab và thanh thao tác; khung  khoanh bảng danh sách. Trên ảnh biểu mẫu, khung  khoanh các trường thông tin; khung  khoanh các nút ở cuối biểu mẫu.

![Hình 1: Danh mục Loại tài sản](/posts/2026-11-07-ts-a04-0-huong-dan-tong-quan-danh-muc-tai-san/hinh-01-ts-dm-loai.png)

![Hình 2: cửa sổ thêm loại tài sản chưa lưu](/posts/2026-11-07-ts-a04-0-huong-dan-tong-quan-danh-muc-tai-san/hinh-02-ts-dm-loai-form.png)

![Hình 3: Danh mục Đơn vị sử dụng tài sản](/posts/2026-11-07-ts-a04-0-huong-dan-tong-quan-danh-muc-tai-san/hinh-03-ts-dm-don-vi.png)

![Hình 4: cửa sổ thêm đơn vị sử dụng tài sản chưa lưu](/posts/2026-11-07-ts-a04-0-huong-dan-tong-quan-danh-muc-tai-san/hinh-04-ts-dm-don-vi-form.png)

## 4. Trình tự công việc

Chọn Loại tài sản hoặc Đơn vị sử dụng → Khai mã/tên và tài khoản → Kiểm tra trạng thái → Lưu → Đối chiếu danh mục dùng trên hồ sơ

## 5. Thực hiện trên phần mềm

1. Ở **Loại tài sản**, khai Mã và Tên loại tài sản bắt buộc; chọn Thuộc loại nếu cần và tài khoản nguyên giá/khấu hao để gợi ý trên phiếu ghi tăng. Mã loại phải chưa tồn tại trong bản ghi chưa xóa.
2. Ở **Đơn vị sử dụng**, khai Mã, Tên đơn vị bắt buộc; chọn TK chi phí nếu có phương án hạch toán cho đơn vị. Mã đơn vị phải chưa tồn tại trong bản ghi chưa xóa.
3. Kiểm tra **Kích hoạt**: bản ghi mới mặc định đang sử dụng. Khi thay đổi tài khoản gợi ý trên loại, mở phiếu ghi tăng để đối chiếu tài khoản đang dùng; chưa có căn cứ kết luận hồ sơ đã lập sẽ tự đổi theo danh mục.

## 6. Giải thích các thông tin trên màn hình

- **Mã**: Ý nghĩa, cách nhập và quy tắc riêng: Bắt buộc nhập mã loại tài sản, mặc định trống; mã chưa xóa phải duy nhất. Import dùng mã này tìm loại để cập nhật.
- **Tên loại tài sản**: Ý nghĩa, cách nhập và quy tắc riêng: Bắt buộc nhập tên loại, mặc định trống; tên xuất hiện trong danh sách chọn Loại tài sản khi ghi tăng.
- **Thuộc loại**: Ý nghĩa, cách nhập và quy tắc riêng: Chọn nhóm: Nhà cửa, vật kiến trúc; Máy móc, thiết bị; Phương tiện vận tải, truyền dẫn; Thiết bị, dụng cụ quản lý; TSCĐ hữu hình khác; TSCĐ vô hình. Mặc định trống.
- **TK nguyên giá**: Ý nghĩa, cách nhập và quy tắc riêng: Chọn tài khoản nguyên giá gợi ý cho tài sản thuộc loại; mặc định trống. Khi chọn loại trên phiếu ghi tăng, giá trị có khai sẽ gợi ý vào TK nguyên giá.
- **TK khấu hao**: Ý nghĩa, cách nhập và quy tắc riêng: Chọn tài khoản khấu hao gợi ý theo loại; mặc định trống, được điền vào phiếu ghi tăng khi chọn loại có khai tài khoản.
- **Mã đơn vị**: Ý nghĩa, cách nhập và quy tắc riêng: Bắt buộc nhập mã đơn vị sử dụng, mặc định trống; duy nhất trong đơn vị chưa xóa. Import Đơn vị sử dụng nhận cột Mã để đối chiếu cập nhật.
- **Tên đơn vị**: Ý nghĩa, cách nhập và quy tắc riêng: Bắt buộc nhập tên nơi quản lý/sử dụng TSCĐ, mặc định trống; tên được chọn ở trường Đơn vị sử dụng của phiếu ghi tăng.

## 7. Kiểm tra sau khi thực hiện

Danh mục được dùng khi chọn loại/đơn vị ở hồ sơ nghiệp vụ.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Thay đổi TK chi phí cần kiểm tra lại phân bổ của hồ sơ và phiếu kỳ sau; không tự cho rằng phiếu đã ghi sẽ đổi theo.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Mã là bắt buộc / Tên là bắt buộc**: Cách xử lý riêng: Điền mã và tên ở đúng cửa sổ loại hoặc đơn vị; nhóm loại/tài khoản không thay cho hai trường này.
- **Mã loại tài sản đã tồn tại / Mã đơn vị đã tồn tại**: Cách xử lý riêng: Tìm mã trong đúng danh mục, kể cả bản ghi ngừng sử dụng chưa xóa; sửa bản ghi có sẵn nếu cùng đối tượng, hoặc chọn mã mới nếu là đối tượng khác.
- **TK gợi ý trên phiếu ghi tăng không như mong muốn**: Cách xử lý riêng: Kiểm tra TK khai trên loại được chọn và TK hiện tại ở phiếu; không suy sửa danh mục sẽ cập nhật tài khoản mọi tài sản đã có.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN IMPORT DANH MỤC TÀI SẢN](/bai-viet/2026-11-07-ts-a04-1-huong-dan-import-danh-muc-tai-san/)** — Import danh mục tài sản.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN IMPORT DANH MỤC TÀI SẢN](/bai-viet/2026-11-07-ts-a04-1-huong-dan-import-danh-muc-tai-san/)** — Import danh mục tài sản.
