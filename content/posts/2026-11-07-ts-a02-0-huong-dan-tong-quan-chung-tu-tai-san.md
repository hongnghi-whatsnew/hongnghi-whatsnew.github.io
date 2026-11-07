---
title: "HƯỚNG DẪN TỔNG QUAN CHỨNG TỪ TÀI SẢN"
date: "2026-11-07"
summary: "Tra cứu phiếu ghi tăng và phiếu điều chỉnh tài sản."
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

Tra cứu phiếu ghi tăng và phiếu điều chỉnh tài sản.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: tra cứu phiếu ghi tăng và phiếu điều chỉnh tài sản.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Chứng từ tài sản**

## 3. Nhận biết màn hình

Màn danh sách dùng để đối chiếu dữ liệu và mở các thao tác theo hồ sơ đã chọn.

Các nút chính của chức năng: **Ghi tăng**, **Xem**, **Điều chỉnh**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin, bộ điều kiện hoặc thanh thao tác phía trên. Khung  khoanh bảng danh sách phía dưới.

![Hình 1: Danh sách phiếu ghi tăng có sẵn, nguyên giá đã che](/posts/2026-11-07-ts-a02-0-huong-dan-tong-quan-chung-tu-tai-san/hinh-01-ts-ct-ghi-tang.png)

![Hình 2: Danh sách phiếu điều chỉnh chưa có dữ liệu](/posts/2026-11-07-ts-a02-0-huong-dan-tong-quan-chung-tu-tai-san/hinh-02-ts-ct-dieu-chinh.png)

## 4. Trình tự công việc

Chọn tab ghi tăng hoặc điều chỉnh → Đối chiếu số CT/ngày/giá trị → Xem phiếu → Chọn đúng bài điều chỉnh hoặc xóa

## 5. Thực hiện trên phần mềm

1. Chọn tab **Phiếu ghi tăng**, đối chiếu **Số CT**, ngày ghi tăng, mã/tên và giá trị.
2. Chuyển **Phiếu điều chỉnh** để xem ngày hạch toán, lý do, số dòng và tổng tiền.
3. Mở **Xem** trước xử lý sửa/xóa; ghi tăng TSCĐ xem [HƯỚNG DẪN GHI TĂNG TÀI SẢN CỐ ĐỊNH](/bai-viet/2026-11-07-ts-a01-1-huong-dan-ghi-tang-tai-san-co-dinh/).

- **Điều chỉnh tài sản**: Bài hướng dẫn: [HƯỚNG DẪN ĐIỀU CHỈNH TÀI SẢN](/bai-viet/2026-11-07-ts-a02-1-huong-dan-dieu-chinh-tai-san/)
- **Xóa chứng từ ghi tăng và điều chỉnh tài sản**: Bài hướng dẫn: [HƯỚNG DẪN XÓA CHỨNG TỪ GHI TĂNG VÀ ĐIỀU CHỈNH TÀI SẢN](/bai-viet/2026-11-07-ts-a02-2-huong-dan-xoa-chung-tu-ghi-tang-va-dieu-chinh-tai-san/)

## 6. Giải thích các thông tin trên màn hình

- **Số CT**: Ý nghĩa, cách nhập và quy tắc riêng: Số nhận diện của phiếu trong tab đang xem; mở đúng Phiếu ghi tăng hoặc Phiếu điều chỉnh trước đối chiếu/xóa. Đây là cột chỉ đọc.
- **Ngày ghi tăng**: Ý nghĩa, cách nhập và quy tắc riêng: Ngày ghi tăng của phiếu ở tab Phiếu ghi tăng; không phải ngày hạch toán phiếu điều chỉnh.
- **Mã tài sản**: Ý nghĩa, cách nhập và quy tắc riêng: Mã TSCĐ gắn với một phiếu ghi tăng; dùng xác định tài sản chịu tác động khi xóa phiếu.
- **Tên tài sản**: Ý nghĩa, cách nhập và quy tắc riêng: Tên TSCĐ đi cùng mã trong tab Phiếu ghi tăng; cột chỉ đọc để đối chiếu hồ sơ.
- **Loại tài sản**: Ý nghĩa, cách nhập và quy tắc riêng: Tên loại tài sản của hồ sơ gắn với phiếu ghi tăng; không chọn lại loại tại bảng chứng từ.
- **Đơn vị SD**: Ý nghĩa, cách nhập và quy tắc riêng: Đơn vị sử dụng của tài sản hiển thị ở tab Phiếu ghi tăng; đối chiếu nơi sử dụng với hồ sơ tài sản.
- **Nguyên giá**: Ý nghĩa, cách nhập và quy tắc riêng: Nguyên giá hiển thị cho tài sản ở tab Phiếu ghi tăng; số tiền chỉ đọc, mở chi tiết để đối chiếu trước xử lý.
- **Nguồn gốc**: Ý nghĩa, cách nhập và quy tắc riêng: Nguồn hình thành của phiếu ghi tăng, ví dụ Mua mới; xem chi tiết để kiểm tra các chứng từ nguồn.
- **Ngày hạch toán**: Ý nghĩa, cách nhập và quy tắc riêng: Ngày hạch toán đã ghi trên phiếu điều chỉnh; cột chỉ đọc và tách riêng ngày chứng từ.
- **Ngày chứng từ**: Ý nghĩa, cách nhập và quy tắc riêng: Ngày lập chứng từ điều chỉnh đã lưu, hiển thị dd/MM/yyyy.
- **Lý do**: Ý nghĩa, cách nhập và quy tắc riêng: Nội dung giải thích việc điều chỉnh giá trị tài sản đã nhập trên phiếu.
- **Số TS**: Ý nghĩa, cách nhập và quy tắc riêng: Số dòng tài sản trong phiếu điều chỉnh; một phiếu có thể chứa nhiều TSCĐ, cần mở Xem để thấy các mã.
- **Tổng tiền**: Ý nghĩa, cách nhập và quy tắc riêng: Tổng nguyên giá trên các dòng phiếu điều chỉnh; là tổng giá trị mới nhập, không phải tổng phần chênh lệch tăng/giảm.

## 7. Kiểm tra sau khi thực hiện

Tra được phiếu ghi tăng, tài sản cố định liên quan và phiếu điều chỉnh; đối chiếu số chứng từ, ngày và giá trị trước xử lý.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Xóa phiếu điều chỉnh chỉ xóa chứng từ, KHÔNG tự hoàn lại giá trị hồ sơ đã điều chỉnh.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Công việc tiếp theo

- **[HƯỚNG DẪN ĐIỀU CHỈNH TÀI SẢN](/bai-viet/2026-11-07-ts-a02-1-huong-dan-dieu-chinh-tai-san/)** — Điều chỉnh tài sản.

## 10. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN ĐIỀU CHỈNH TÀI SẢN](/bai-viet/2026-11-07-ts-a02-1-huong-dan-dieu-chinh-tai-san/)** — Điều chỉnh tài sản.
- **[HƯỚNG DẪN XÓA CHỨNG TỪ GHI TĂNG VÀ ĐIỀU CHỈNH TÀI SẢN](/bai-viet/2026-11-07-ts-a02-2-huong-dan-xoa-chung-tu-ghi-tang-va-dieu-chinh-tai-san/)** — Xóa chứng từ ghi tăng và điều chỉnh tài sản.
