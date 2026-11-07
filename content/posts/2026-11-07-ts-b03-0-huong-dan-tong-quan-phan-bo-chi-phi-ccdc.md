---
title: "HƯỚNG DẪN TỔNG QUAN PHÂN BỔ CHI PHÍ CCDC"
date: "2026-11-07"
summary: "Theo dõi các phiếu phân bổ CCDC theo tháng/năm và tổng tiền."
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

Theo dõi các phiếu phân bổ CCDC theo tháng/năm và tổng tiền.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: theo dõi các phiếu phân bổ CCDC theo tháng/năm và tổng tiền.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Phân bổ chi phí CCDC**

## 3. Nhận biết màn hình

Màn danh sách dùng để đối chiếu dữ liệu và mở các thao tác theo hồ sơ đã chọn.

Các nút chính của chức năng: **Xuất Excel**, **Tính phân bổ**, **Xem**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin, bộ điều kiện hoặc thanh thao tác phía trên. Khung  khoanh bảng danh sách phía dưới.

![Hình 1: Danh sách phiếu phân bổ CCDC hiện trống](/posts/2026-11-07-ts-b03-0-huong-dan-tong-quan-phan-bo-chi-phi-ccdc/hinh-01-ccdc-phan-bo-ds.png)

## 4. Trình tự công việc

Đọc số CT/kỳ/ngày/tổng tiền → Xem chi tiết phân bổ và hạch toán → Chọn tính mới hoặc tính lại → Đối chiếu phiếu/kỳ

## 5. Thực hiện trên phần mềm

1. Đối chiếu **Số CT**, **Tháng**, **Năm**, **Ngày phân bổ**, **Số dòng**, **Tổng tiền phân bổ**.
2. Chọn **Xem** để kiểm tra chi tiết phân bổ/hạch toán.
3. Tính mới xem [HƯỚNG DẪN TÍNH VÀ LẬP PHIẾU PHÂN BỔ CCDC](/bai-viet/2026-11-07-ts-b03-1-huong-dan-tinh-va-lap-phieu-phan-bo-ccdc/); xóa/tính lại xem [HƯỚNG DẪN XÓA VÀ TÍNH LẠI PHÂN BỔ CCDC](/bai-viet/2026-11-07-ts-b03-2-huong-dan-xoa-va-tinh-lai-phan-bo-ccdc/).

- **Tính và lập phiếu phân bổ CCDC**: Bài hướng dẫn: [HƯỚNG DẪN TÍNH VÀ LẬP PHIẾU PHÂN BỔ CCDC](/bai-viet/2026-11-07-ts-b03-1-huong-dan-tinh-va-lap-phieu-phan-bo-ccdc/)
- **Xóa và tính lại phân bổ CCDC**: Bài hướng dẫn: [HƯỚNG DẪN XÓA VÀ TÍNH LẠI PHÂN BỔ CCDC](/bai-viet/2026-11-07-ts-b03-2-huong-dan-xoa-va-tinh-lai-phan-bo-ccdc/)

## 6. Giải thích các thông tin trên màn hình

- **Số CT**: Ý nghĩa, cách nhập hoặc đối chiếu: Số chứng từ của đúng tab đang xem; ghi tăng, điều chỉnh, phân bổ và ghi giảm là các loại phiếu khác nhau. Cột chỉ xem.
- **Tháng**: Ý nghĩa, cách nhập hoặc đối chiếu: Kỳ phân bổ theo tháng, giá trị 1–12. Danh sách chỉ xem; khi tính mới chọn tháng cần xử lý.
- **Năm**: Ý nghĩa, cách nhập hoặc đối chiếu: Năm của kỳ phân bổ, giới hạn 2000–2100 khi tính; đọc cùng Tháng để tránh xóa/tính lại nhầm kỳ.
- **Ngày phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày được ghi trên phiếu phân bổ; phân biệt với cặp tháng/năm dùng lấy dữ liệu tính.
- **Số dòng**: Ý nghĩa, cách nhập hoặc đối chiếu: Số dòng chi tiết của phiếu; một hồ sơ có thể chia nhiều đối tượng nên không mặc định bằng số hồ sơ.
- **Tổng tiền phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Tổng số tiền chi tiết đã lập trong phiếu; xóa phiếu hoàn lại phần đã phân bổ của các hồ sơ liên quan.

Các cột danh sách là kết quả chỉ xem; nhập hoặc sửa tại nghiệp vụ tương ứng. Luôn xác định đúng tab trước đọc số CT và tổng tiền.

## 7. Kiểm tra sau khi thực hiện

Có dữ liệu phiếu phân bổ để đối chiếu với giá trị đã phân bổ của CCDC.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Tính lại xóa phiếu cũ trước; phải hoàn thành lập phiếu mới và kiểm tra số dư.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Không có dữ liệu để xuất**: Cách xử lý: Danh sách phiếu phân bổ hiện rỗng; kiểm tra đã lập phiếu, vì chỉ Tính toán chưa tạo phiếu trên danh sách.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN TÍNH VÀ LẬP PHIẾU PHÂN BỔ CCDC](/bai-viet/2026-11-07-ts-b03-1-huong-dan-tinh-va-lap-phieu-phan-bo-ccdc/)** — Tính và lập phiếu phân bổ CCDC.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TÍNH VÀ LẬP PHIẾU PHÂN BỔ CCDC](/bai-viet/2026-11-07-ts-b03-1-huong-dan-tinh-va-lap-phieu-phan-bo-ccdc/)** — Tính và lập phiếu phân bổ CCDC.
- **[HƯỚNG DẪN XÓA VÀ TÍNH LẠI PHÂN BỔ CCDC](/bai-viet/2026-11-07-ts-b03-2-huong-dan-xoa-va-tinh-lai-phan-bo-ccdc/)** — Xóa và tính lại phân bổ CCDC.
