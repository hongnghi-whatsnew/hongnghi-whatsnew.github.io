---
title: "HƯỚNG DẪN TỔNG QUAN TÍNH GIÁ THÀNH"
date: "2026-11-07"
summary: "Theo dõi kỳ tính giá thành, số liệu tổng hợp chi phí và phiếu kết chuyển."
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

Theo dõi kỳ tính giá thành, số liệu tổng hợp chi phí và phiếu kết chuyển.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; kiểm tra đúng hệ thống của đơn vị trước thao tác.

## 2. Mở chức năng

**Giá thành → Tính giá thành**

## 3. Nhận biết màn hình

Màn danh sách dùng để đối chiếu dữ liệu và mở các thao tác theo hồ sơ đã chọn.

Các nút chính của chức năng: **Xem**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin, bộ điều kiện hoặc thanh thao tác phía trên. Khung  khoanh bảng danh sách phía dưới.

![Hình 1: Danh sách kỳ tính giá thành có sẵn; các số liệu đã che](/posts/2026-11-07-gt-a02-0-huong-dan-tong-quan-tinh-gia-thanh/hinh-01-gt-ky-ds.png)

## 4. Trình tự công việc

Đọc kỳ và các tổng chi phí → Xem nguồn trực tiếp/chi phí chung → Chọn luồng lập kỳ, tính hoặc kết chuyển → Đối chiếu số và trạng thái kỳ

## 5. Thực hiện trên phần mềm

1. Đọc danh sách kỳ: **Dở dang đầu kỳ**, **Phát sinh trong kỳ**, **Khoản giảm giá thành**, **Dở dang cuối kỳ**, **Tổng giá thành** và **Trạng thái**.
2. Mở **Xem** để kiểm tra bảng chi phí theo yếu tố/khoản mục; xem **Tập hợp chi phí trực tiếp** và **Danh sách phiếu xuất hao hụt** khi cần giải trình.
3. Chuyển danh sách kết chuyển để đối chiếu số chứng từ, ngày và tổng tiền. Chọn bài theo việc cần làm trong bảng bên dưới.

- **Lập kỳ tính giá thành**: Bài hướng dẫn: [HƯỚNG DẪN LẬP KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-1-huong-dan-lap-ky-tinh-gia-thanh/)
- **Phân bổ chi phí chung và tính giá thành**: Bài hướng dẫn: [HƯỚNG DẪN PHÂN BỔ CHI PHÍ CHUNG VÀ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-2-huong-dan-phan-bo-chi-phi-chung-va-tinh-gia-thanh/)
- **Kết chuyển chi phí giá thành**: Bài hướng dẫn: [HƯỚNG DẪN KẾT CHUYỂN CHI PHÍ GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-3-huong-dan-ket-chuyen-chi-phi-gia-thanh/)
- **Hủy kết chuyển và mở lại kỳ tính giá thành**: Bài hướng dẫn: [HƯỚNG DẪN HỦY KẾT CHUYỂN VÀ MỞ LẠI KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-4-huong-dan-huy-ket-chuyen-va-mo-lai-ky-tinh-gia-thanh/)

## 6. Giải thích các thông tin trên màn hình

- **Từ ngày**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trên danh sách; ngày bắt đầu kỳ chi phí, dùng phân biệt các kỳ cùng tên hoặc khác tập THCP.
- **Đến ngày**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; ngày kết thúc kỳ, đồng thời là mặc định Ngày hạch toán khi chọn kỳ để kết chuyển.
- **Tên**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trên danh sách; tên kỳ đã lưu. Khi mở kỳ kiểm tra thêm khoảng ngày và danh sách đối tượng, không dùng tên làm căn cứ duy nhất.
- **Khoản giảm giá thành**: Cách nhập / cách đọc và quy tắc: Cột kết quả tổng các khoản giảm của kỳ; kiểm tra chứng từ giảm/hao hụt và chi tiết tổng hợp, không nhập bù tay trên danh sách.
- **Dở dang cuối kỳ**: Cách nhập / cách đọc và quy tắc: Cột kết quả của phương pháp không dở dang; không phải công cụ tự đánh giá sản phẩm dở dang cuối kỳ.
- **Tổng giá thành**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tổng giá thành các đối tượng đã tính trong kỳ. Đây là giá trị tổng chi phí, khác đơn giá thành phẩm.
- **Trạng thái**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; trạng thái đã/chưa tính và dấu đã kết chuyển theo dữ liệu kỳ. Đã tính không đồng nghĩa đã kết chuyển; kỳ đã kết chuyển bị chặn Tính/Kết chuyển/Sửa/Xóa trên màn.
- **Ngày hạch toán**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trong danh sách phiếu kết chuyển; ngày ghi sổ đã chọn lúc lập phiếu.
- **Số chứng từ**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; số phiếu kết chuyển tự tạo dạng KC kèm giờ phút giây khi Cất; dùng nhận diện phiếu cần xem/hủy.
- **Kỳ tính giá thành**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trong phiếu; tên kỳ liên kết với phiếu kết chuyển, kiểm tra lại ngày/tập THCP trên kỳ gốc.
- **Diễn giải**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trong phiếu; nội dung kết chuyển tự tạo từ tên kỳ, không phải ô sửa chi phí.
- **Số tiền**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tổng số tiền các dòng bút toán kết chuyển theo THCP/tài khoản. Hệ thống tổng hợp và tính lại khi Cất, cần đối chiếu phiếu đã lưu với xem trước.

## 7. Kiểm tra sau khi thực hiện

Xác định được kỳ chưa tính, đã tính hoặc đã kết chuyển và hồ sơ cần xử lý tiếp.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Kỳ đã kết chuyển khóa các thao tác Tính, Kết chuyển, Sửa, Xóa; phải hủy phiếu kết chuyển theo trình tự được kế toán chấp thuận.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Kỳ đã kết chuyển. Vui lòng hủy phiếu kết chuyển trước khi Tính/Kết chuyển/Sửa/Xóa.**: đang gọi thao tác thay đổi số trên kỳ đã kết chuyển. Mở phiếu cũ để đối chiếu; nếu cần điều chỉnh, dùng [HƯỚNG DẪN HỦY KẾT CHUYỂN VÀ MỞ LẠI KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-4-huong-dan-huy-ket-chuyen-va-mo-lai-ky-tinh-gia-thanh/) theo thứ tự kỳ trước khi tính/kết chuyển lại.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN LẬP KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-1-huong-dan-lap-ky-tinh-gia-thanh/)** — Lập kỳ tính giá thành.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN LẬP KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-1-huong-dan-lap-ky-tinh-gia-thanh/)** — Lập kỳ tính giá thành.
- **[HƯỚNG DẪN PHÂN BỔ CHI PHÍ CHUNG VÀ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-2-huong-dan-phan-bo-chi-phi-chung-va-tinh-gia-thanh/)** — Phân bổ chi phí chung và tính giá thành.
- **[HƯỚNG DẪN KẾT CHUYỂN CHI PHÍ GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-3-huong-dan-ket-chuyen-chi-phi-gia-thanh/)** — Kết chuyển chi phí giá thành.
- **[HƯỚNG DẪN HỦY KẾT CHUYỂN VÀ MỞ LẠI KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-4-huong-dan-huy-ket-chuyen-va-mo-lai-ky-tinh-gia-thanh/)** — Hủy kết chuyển và mở lại kỳ tính giá thành.
