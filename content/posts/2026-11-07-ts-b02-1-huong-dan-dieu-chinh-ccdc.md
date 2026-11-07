---
title: "HƯỚNG DẪN ĐIỀU CHỈNH CCDC"
date: "2026-11-07"
summary: "Lập chứng từ điều chỉnh các giá trị hồ sơ CCDC theo số liệu đã duyệt."
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

Lập chứng từ điều chỉnh các giá trị hồ sơ CCDC theo số liệu đã duyệt.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: lập chứng từ điều chỉnh các giá trị hồ sơ CCDC theo số liệu đã duyệt.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Chứng từ CCDC**

## 3. Nhận biết màn hình

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Ghi tăng**, **Xem**, **Điều chỉnh**, **Thêm dòng**, **Hủy**, **Cất**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin và bảng chi tiết của cửa sổ. Khung  khoanh các nút ở cuối cửa sổ.

![Hình 1: cửa sổ điều chỉnh CCDC chưa chọn công cụ và chưa lưu](/posts/2026-11-07-ts-b02-1-huong-dan-dieu-chinh-ccdc/hinh-01-ccdc-dieu-chinh-form.png)

## 4. Trình tự công việc

Nhập số/ngày/lý do → Chọn CCDC → Ghi nhận số hiện tại → Nhập giá trị/số kỳ điều chỉnh → Kiểm tổng → Lưu và đối chiếu hồ sơ

## 5. Thực hiện trên phần mềm

1. Nhập số CT điều chỉnh, chọn ngày hạch toán/ngày chứng từ và ghi lý do; hai ngày mặc định hôm nay nên cần kiểm tra riêng từng ngày.
2. **Thêm dòng** rồi chọn CCDC. Ghi lại giá trị, số kỳ, số đã phân bổ và còn lại hiện tại trước chỉnh sửa.
3. Nhập **giá trị mới**, số kỳ mới và số đã phân bổ theo phương án điều chỉnh. Giá trị là số thay thế toàn bộ, không phải chênh lệch cộng thêm; **Còn lại** tự tính bằng giá trị mới trừ đã phân bổ.
4. Mỗi CCDC chỉ chọn một dòng; chưa có bằng chứng hệ thống chặn mã lặp. Đối chiếu từng mã, tổng giá trị và ít nhất một dòng đã chọn CCDC trước ghi nhận. Chọn nhầm mã thì bỏ dòng hoặc chọn lại rồi nhập lại số liệu vì thao tác chọn tự điền số hiện tại.
5. Sau ghi nhận, đối chiếu giá trị/số kỳ/PB hàng kỳ trên hồ sơ. Xóa phiếu điều chỉnh chỉ xóa chứng từ, không hoàn trả giá trị cũ; việc sửa sai tiếp theo cần phương án nghiệp vụ được duyệt.

## 6. Giải thích các thông tin trên màn hình

- **Số CT**: Ý nghĩa, cách nhập hoặc đối chiếu: Bắt buộc nhập số phiếu điều chỉnh, mặc định trống.
- **Ngày hạch toán**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày ghi nhận nghiệp vụ điều chỉnh vào sổ; khi lập mới mặc định hôm nay và có thể chọn lại theo hồ sơ đã duyệt.
- **Ngày chứng từ**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày của chứng từ nguồn hoặc phiếu điều chỉnh; nhập/chọn đúng ngày trên hồ sơ, độc lập với ngày hạch toán.
- **Lý do**: Ý nghĩa, cách nhập hoặc đối chiếu: Nội dung giải thích nghiệp vụ đã nhập trên phiếu; đọc trước khi điều chỉnh hoặc xóa, không phải số tiền điều chỉnh.
- **#**: Ý nghĩa, cách nhập hoặc đối chiếu: Số thứ tự dòng do giao diện hiển thị; không phải mã hồ sơ, không nhập.
- **CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Chọn công cụ cần điều chỉnh từ danh sách; tự điền giá trị, số kỳ, số đã phân bổ và còn lại hiện tại. Phải có ít nhất một dòng đã chọn CCDC.
- **Giá trị**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập giá trị mới thay thế cho tổng giá trị CCDC; đây không phải số chênh lệch cộng thêm. Đổi ô này sẽ tính lại Còn lại.
- **Số kỳ PB**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập số kỳ mới không âm; dùng tính lại PB hàng kỳ từ giá trị mới / số kỳ mới.
- **Đã phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Số đã phân bổ hiện tại được điền khi chọn CCDC; có thể điều chỉnh giá trị trên phiếu theo phương án được duyệt.
- **Còn lại**: Ý nghĩa, cách nhập hoặc đối chiếu: Chỉ xem, tự tính Giá trị mới − Đã phân bổ; không nhập trực tiếp.

## 7. Kiểm tra sau khi thực hiện

Tạo phiếu điều chỉnh và cập nhật giá trị của các hồ sơ được chọn.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Xóa phiếu không phục hồi số cũ; phải lưu căn cứ trước/sau và nhờ kế toán xác nhận cách sửa nếu nhập nhầm.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Phiếu điều chỉnh phải có ít nhất một CCDC**: Cách xử lý: Chọn công cụ ở ít nhất một dòng; dòng chỉ nhập số nhưng chưa chọn công cụ không được gửi.
- **Số chứng từ không được để trống**: Cách xử lý: Nhập số phiếu điều chỉnh đầu cửa sổ; không dùng ô # thay số chứng từ.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN CHỨNG TỪ CCDC](/bai-viet/2026-11-07-ts-b02-0-huong-dan-tong-quan-chung-tu-ccdc/)** — Tổng quan Chứng từ CCDC.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN CHỨNG TỪ CCDC](/bai-viet/2026-11-07-ts-b02-0-huong-dan-tong-quan-chung-tu-ccdc/)** — Tổng quan Chứng từ CCDC.
- **[HƯỚNG DẪN XÓA CHỨNG TỪ GHI TĂNG VÀ ĐIỀU CHỈNH CCDC](/bai-viet/2026-11-07-ts-b02-2-huong-dan-xoa-chung-tu-ghi-tang-va-dieu-chinh-ccdc/)** — Xóa chứng từ ghi tăng và điều chỉnh CCDC.
