---
title: "HƯỚNG DẪN TỔNG QUAN DANH MỤC CCDC"
date: "2026-11-07"
summary: "Quản lý loại CCDC và đơn vị sử dụng phục vụ ghi tăng, hạch toán chi phí."
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

Quản lý loại CCDC và đơn vị sử dụng phục vụ ghi tăng, hạch toán chi phí.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: quản lý loại CCDC và đơn vị sử dụng phục vụ ghi tăng, hạch toán chi phí.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Danh mục CCDC**

## 3. Nhận biết màn hình

Màn danh sách dùng để đối chiếu dữ liệu và mở các thao tác theo hồ sơ đã chọn.

Các nút chính của chức năng: **Thêm loại**, **Import Excel**, **Thêm đơn vị**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Trên ảnh danh sách, khung  khoanh tiêu đề, tab và thanh thao tác; khung  khoanh bảng danh sách. Trên ảnh biểu mẫu, khung  khoanh các trường thông tin; khung  khoanh các nút ở cuối biểu mẫu.

![Hình 1: Danh mục Loại CCDC hiện trống](/posts/2026-11-07-ts-b04-0-huong-dan-tong-quan-danh-muc-ccdc/hinh-01-ccdc-dm-loai.png)

![Hình 2: cửa sổ thêm loại CCDC chưa lưu](/posts/2026-11-07-ts-b04-0-huong-dan-tong-quan-danh-muc-ccdc/hinh-02-ccdc-dm-loai-form.png)

![Hình 3: Danh mục Đơn vị sử dụng CCDC hiện trống](/posts/2026-11-07-ts-b04-0-huong-dan-tong-quan-danh-muc-ccdc/hinh-03-ccdc-dm-don-vi.png)

![Hình 4: cửa sổ thêm đơn vị sử dụng CCDC chưa lưu](/posts/2026-11-07-ts-b04-0-huong-dan-tong-quan-danh-muc-ccdc/hinh-04-ccdc-dm-don-vi-form.png)

## 4. Trình tự công việc

Chọn Loại CCDC hoặc Đơn vị sử dụng → Khai mã/tên/tài khoản → Kiểm trạng thái → Lưu → Đối chiếu danh mục dùng trên ghi tăng

## 5. Thực hiện trên phần mềm

1. Trong **Loại CCDC**, khai mã riêng, tên loại và nhóm **Thuộc loại**. Đối chiếu TK công cụ và TK chờ phân bổ; tài khoản chờ PB của loại được gợi ý khi chọn loại ở phiếu ghi tăng.
2. Trong **Đơn vị sử dụng**, khai mã riêng của bộ phận, tên và TK chi phí. Mã/tên loại và mã/tên đơn vị đều bắt buộc; mã trùng trong cùng danh mục bị chặn khi thêm/sửa.
3. Kiểm tra cờ **Kích hoạt** (mặc định bật khi tạo mới). Đơn vị sử dụng là nơi giao công cụ, còn đối tượng THCP và TK chi phí của từng dòng phân bổ vẫn phải kiểm tra ở hồ sơ ghi tăng.
4. Khi nhận danh sách đầu kỳ, dùng [HƯỚNG DẪN IMPORT DANH MỤC CCDC](/bai-viet/2026-11-07-ts-b04-1-huong-dan-import-danh-muc-ccdc/) đúng loại mẫu; không import bảng đơn vị vào tab loại. Trước xóa danh mục đã dùng, xác minh ảnh hưởng tới hồ sơ cũ với người phụ trách vì ghi tăng lưu tên/mã trong các chi tiết.

## 6. Giải thích các thông tin trên màn hình

- **Mã**: Ý nghĩa, cách nhập hoặc đối chiếu: Bắt buộc nhập mã loại CCDC; mã trùng loại đang tồn tại bị chặn khi thêm/sửa.
- **Tên loại CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Bắt buộc nhập tên loại; tên này xuất hiện trong ô Loại CCDC của cửa sổ ghi tăng.
- **Thuộc loại**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhóm phân loại cấp trên của loại CCDC; chọn gợi ý hoặc nhập giá trị riêng, không phải mã hồ sơ công cụ.
- **TK công cụ**: Ý nghĩa, cách nhập hoặc đối chiếu: Tài khoản công cụ của loại, gợi ý 153; nhập/chọn theo thiết lập kế toán của đơn vị.
- **TK chờ PB**: Ý nghĩa, cách nhập hoặc đối chiếu: Tài khoản chờ phân bổ của loại, gợi ý 242/142; khi chọn loại trên cửa sổ ghi tăng sẽ gợi ý tài khoản này.
- **Kích hoạt**: Ý nghĩa, cách nhập hoặc đối chiếu: Cờ sử dụng danh mục, mặc định bật khi tạo mới; bỏ chọn để đánh dấu không hoạt động. Chưa kết luận mọi ô chọn đều tự ẩn dòng tắt.
- **Mã đơn vị**: Ý nghĩa, cách nhập hoặc đối chiếu: Bắt buộc nhập mã đơn vị sử dụng CCDC; mã trùng đơn vị hiện có bị chặn khi thêm/sửa.
- **Tên đơn vị**: Ý nghĩa, cách nhập hoặc đối chiếu: Bắt buộc nhập tên bộ phận nhận công cụ; dùng ở bảng Đơn vị sử dụng khi ghi tăng.
- **TK chi phí**: Ý nghĩa, cách nhập hoặc đối chiếu: Tài khoản chi phí khai báo cho đơn vị sử dụng; không tự suy rằng tài khoản này thay thế TK chi phí ở từng dòng thiết lập phân bổ.

## 7. Kiểm tra sau khi thực hiện

Danh mục được dùng khi chọn loại/đơn vị ở hồ sơ nghiệp vụ.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Thay đổi TK chi phí cần kiểm tra lại phân bổ của hồ sơ và phiếu kỳ sau; không tự cho rằng phiếu đã ghi sẽ đổi theo.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Mã loại CCDC hoặc Mã đơn vị đã tồn tại**: Cách xử lý: Tra đúng danh mục theo mã để sửa; không tạo lại cùng mã.
- **Thiếu mã hoặc tên**: Cách xử lý: Điền cả hai trường trong cửa sổ loại/đơn vị; TK công cụ hay TK chi phí không thay thế mã danh mục.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN IMPORT DANH MỤC CCDC](/bai-viet/2026-11-07-ts-b04-1-huong-dan-import-danh-muc-ccdc/)** — Import danh mục CCDC.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN IMPORT DANH MỤC CCDC](/bai-viet/2026-11-07-ts-b04-1-huong-dan-import-danh-muc-ccdc/)** — Import danh mục CCDC.
