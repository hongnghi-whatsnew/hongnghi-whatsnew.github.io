---
title: "HƯỚNG DẪN TỔNG QUAN DANH SÁCH TÀI SẢN CỐ ĐỊNH"
date: "2026-11-07"
summary: "Theo dõi nguyên giá, hao mòn, giá trị còn lại và thông tin sử dụng tài sản."
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

Theo dõi nguyên giá, hao mòn, giá trị còn lại và thông tin sử dụng tài sản.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: theo dõi nguyên giá, hao mòn, giá trị còn lại và thông tin sử dụng tài sản.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Danh sách tài sản cố định**

## 3. Nhận biết màn hình

Màn danh sách dùng để đối chiếu dữ liệu và mở các thao tác theo hồ sơ đã chọn.

Các nút chính của chức năng: **Danh mục**, **Chứng từ**, **Ghi tăng**, **Import ghi tăng**, **Điều chỉnh**, **Khai báo TSCĐ đầu kỳ**, **Xem**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung: các thẻ tổng giá trị tài sản, hao mòn, giá trị còn lại và thanh nút nghiệp vụ. Khung: bộ lọc, ô tìm kiếm và lưới danh sách tài sản.

## 4. Trình tự công việc

Tìm mã tài sản → Đọc ngày/kỳ và các giá trị khấu hao → Xem hồ sơ/phân bổ → Chọn đúng bài ghi tăng, import hoặc xử lý tiếp

## 5. Thực hiện trên phần mềm

1. Đối chiếu tài sản theo **Mã tài sản**, **Tên tài sản**, **Loại tài sản**, **Đơn vị sử dụng**.
2. Đọc **Ngày ghi tăng**, **Ngày bắt đầu tính KH**, **Thời gian sử dụng (Tháng)** và các giá trị khấu hao.
3. Chọn **Xem** để kiểm tra hồ sơ. Ghi tăng, import và điều chỉnh xem các bài liên quan bên dưới.
4. Nút **Khai báo TSCĐ đầu kỳ** và **Xóa** tài sản đang có thông báo chức năng đang xây dựng trong luồng hiện tại; không dùng chúng như luồng hoàn chỉnh.

- **Ghi tăng tài sản cố định**: Bài hướng dẫn: [HƯỚNG DẪN GHI TĂNG TÀI SẢN CỐ ĐỊNH](/bai-viet/2026-11-07-ts-a01-1-huong-dan-ghi-tang-tai-san-co-dinh/)
- **Import ghi tăng tài sản cố định**: Bài hướng dẫn: [HƯỚNG DẪN IMPORT GHI TĂNG TÀI SẢN CỐ ĐỊNH](/bai-viet/2026-11-07-ts-a01-2-huong-dan-import-ghi-tang-tai-san-co-dinh/)

## 6. Giải thích các thông tin trên màn hình

- **Mã tài sản**: Ý nghĩa, cách nhập và quy tắc riêng: Mã nhận diện TSCĐ đã ghi nhận; cột chỉ đọc. Mã tài sản chưa xóa phải duy nhất; dùng mã này để đối chiếu khi import cập nhật.
- **Tên tài sản**: Ý nghĩa, cách nhập và quy tắc riêng: Tên hồ sơ TSCĐ đã lưu, dùng kiểm tra cùng mã trước mở Xem hoặc Điều chỉnh; cột chỉ đọc.
- **Loại tài sản**: Ý nghĩa, cách nhập và quy tắc riêng: Tên loại được chọn từ danh mục khi ghi tăng; phục vụ phân nhóm tài sản, không phải mã tài sản.
- **Đơn vị sử dụng**: Ý nghĩa, cách nhập và quy tắc riêng: Tên đơn vị quản lý/sử dụng đã lưu trong hồ sơ; đọc để xác định nơi sử dụng của từng TSCĐ.
- **Ngày ghi tăng**: Ý nghĩa, cách nhập và quy tắc riêng: Ngày ghi nhận tăng trên hồ sơ tài sản; hiển thị dd/MM/yyyy, không chỉnh trực tiếp ở danh sách.
- **Ngày bắt đầu tính KH**: Ý nghĩa, cách nhập và quy tắc riêng: Ngày khởi đầu khấu hao đã khai; đọc cùng thời gian sử dụng để kiểm tra kỳ tính KH.
- **Thời gian sử dụng (Tháng)**: Ý nghĩa, cách nhập và quy tắc riêng: Tổng thời gian sử dụng quy đổi ra tháng đã lưu; không phải số tháng còn lại.
- **Thời gian sử dụng còn lại (Tháng)**: Ý nghĩa, cách nhập và quy tắc riêng: Kết quả tính theo lịch đến kỳ kế tiếp sau phiếu khấu hao gần nhất; chưa có phiếu thì mốc tham chiếu là tháng trước tháng hiện tại. Không có ngày bắt đầu thì trả tổng tháng sử dụng; kết quả không âm.
- **Nguyên giá**: Ý nghĩa, cách nhập và quy tắc riêng: Nguyên giá hiện hành lưu trên tài sản, có thể thay đổi sau phiếu điều chỉnh; cột số tiền chỉ đọc.
- **Giá trị tính KH**: Ý nghĩa, cách nhập và quy tắc riêng: Cơ sở tính khấu hao đã khai, được lưu riêng với nguyên giá; không mặc nhiên coi hai số luôn bằng nhau.
- **Hao mòn lũy kế**: Ý nghĩa, cách nhập và quy tắc riêng: Số hao mòn đã ghi nhận trên tài sản. Lập phiếu KH làm tăng và xóa phiếu KH hoàn giảm theo chi tiết phiếu.
- **Giá trị còn lại**: Ý nghĩa, cách nhập và quy tắc riêng: Giá trị còn lại đang lưu trên tài sản; khi ghi tăng/điều chỉnh được tính từ nguyên giá trừ hao mòn lũy kế, sau đó cập nhật theo các phiếu KH.
- **Giá trị KH tháng**: Ý nghĩa, cách nhập và quy tắc riêng: Mức khấu hao tháng đã khai và lưu; danh sách đọc số này, không chia lại nguyên giá theo số tháng còn lại.
- **TK nguyên giá**: Ý nghĩa, cách nhập và quy tắc riêng: Số tài khoản nguyên giá đã lưu trên hồ sơ; đọc để đối chiếu hạch toán tài sản.
- **TK khấu hao**: Ý nghĩa, cách nhập và quy tắc riêng: Số tài khoản hao mòn/khấu hao đã lưu; đọc cùng TK nguyên giá và chi tiết hạch toán của phiếu KH.
- **Tình trạng sử dụng**: Ý nghĩa, cách nhập và quy tắc riêng: Nội dung tình trạng lưu trên hồ sơ; ghi tăng mới mặc định Đang sử dụng. Đây là cột kết quả, không phải nút ngừng khấu hao.

## 7. Kiểm tra sau khi thực hiện

Có hồ sơ và các giá trị tài sản để đối chiếu với phiếu ghi tăng/khấu hao.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Xóa tài sản trên danh sách chưa nối API trong luồng hiện tại. Xử lý phiếu ghi tăng ở Chứng từ phải tuân thủ điều kiện phát sinh.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Công việc tiếp theo

- **[HƯỚNG DẪN GHI TĂNG TÀI SẢN CỐ ĐỊNH](/bai-viet/2026-11-07-ts-a01-1-huong-dan-ghi-tang-tai-san-co-dinh/)** — Ghi tăng tài sản cố định.

## 10. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN GHI TĂNG TÀI SẢN CỐ ĐỊNH](/bai-viet/2026-11-07-ts-a01-1-huong-dan-ghi-tang-tai-san-co-dinh/)** — Ghi tăng tài sản cố định.
- **[HƯỚNG DẪN IMPORT GHI TĂNG TÀI SẢN CỐ ĐỊNH](/bai-viet/2026-11-07-ts-a01-2-huong-dan-import-ghi-tang-tai-san-co-dinh/)** — Import ghi tăng tài sản cố định.
