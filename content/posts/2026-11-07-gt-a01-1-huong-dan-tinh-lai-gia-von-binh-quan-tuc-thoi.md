---
title: "HƯỚNG DẪN TÍNH LẠI GIÁ VỐN BÌNH QUÂN TỨC THỜI"
date: "2026-11-07"
summary: "Chạy lại giá vốn cho khoảng ngày và tập vật tư, hàng hóa đã xác định."
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

Chạy lại giá vốn cho khoảng ngày và tập vật tư, hàng hóa đã xác định.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có số liệu sổ cái kho/hàng tồn cần tính của đơn vị đang dùng và danh sách mã nếu chỉ tính một phần.
- Chốt khoảng ngày và xử lý các chứng từ nguồn cần điều chỉnh trước khi chạy; lưu số liệu giá cũ để đối chiếu.

## 2. Mở chức năng

**Giá thành → Tính giá xuất kho**

## 3. Nhận biết màn hình

![Giao diện danh sách trước thao tác — Gia Phúc/dev, 25/10/2026; chưa thực hiện tính, gán, xóa hoặc kết chuyển trong ảnh.](/posts/2026-11-07-gt-a01-1-huong-dan-tinh-lai-gia-von-binh-quan-tuc-thoi/hinh-01-danh-sach-truoc-thao-tac.png)

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Chọn...**, **Hủy**, **Thực hiện**; khi xử lý nút hiển thị **Đang tính...** và bị khóa.

## 4. Trình tự công việc

Chọn tập hàng → Chọn thời gian tính → Đối chiếu phạm vi và chế độ → Thực hiện → Theo dõi đợt tính → Kiểm tra giá vốn kết quả

## 5. Thực hiện trên phần mềm

1. Chọn **Tất cả vật tư, hàng hóa** hoặc **Vật tư, hàng hóa được chọn**. Ở phạm vi chọn, bấm nút chọn hàng và đánh dấu các mã cần tính; kiểm tra tập mã đã chọn trước khi đóng danh sách chọn.
2. Chọn **Thời gian**; hộp mặc định tháng trước. Kiểm tra **Từ ngày**, **Đến ngày** và sửa nếu kỳ cần tính khác tháng trọn vẹn. Việc tính dùng phạm vi chi nhánh, không chia giá theo từng kho.
3. Bấm **Thực hiện** sau khi chốt khoảng ngày và tập mã. Nếu báo chưa chọn vật tư ở chế độ chọn, bổ sung danh sách mã rồi thực hiện lại.
4. Chờ đợt xử lý, mở dòng đợt vừa tạo. Đối chiếu số mã hàng, SL tồn/Giá trị tồn, Giá vốn cũ và Giá vốn mới ở một số mã có phát sinh lớn.
5. Mở **Lịch sử giá vốn** đúng khoảng ngày để kiểm tra thay đổi. Nếu đợt tạo nhưng không có mã nào, đối chiếu phát sinh sổ cái kho trong kỳ và hàng tồn của chi nhánh; không suy rằng giá đã được cập nhật.

## 6. Giải thích các thông tin trên màn hình

- **Vật tư hàng hóa cần tính giá**: Cách nhập / cách đọc và quy tắc: Chọn một trong hai phạm vi. Mặc định Tất cả vật tư, hàng hóa; chọn Vật tư, hàng hóa được chọn thì phải dùng danh sách chọn ít nhất một mã. Đổi về Tất cả sẽ xóa tập mã đã chọn trong hộp thoại.
- **Thời gian**: Cách nhập / cách đọc và quy tắc: Bộ chọn nhanh 12 tháng gần nhất; mặc định tháng trước. Chọn tháng sẽ đặt Từ ngày là đầu tháng và Đến ngày là cuối tháng.
- **Từ ngày**: Cách nhập / cách đọc và quy tắc: Ngày bắt đầu khoảng tính, có thể điều chỉnh sau khi chọn nhanh tháng. Kiểm tra ngày thực tế, không chỉ nhãn tháng.
- **Đến ngày**: Cách nhập / cách đọc và quy tắc: Ngày kết thúc khoảng tính. Kiểm tra cùng Từ ngày trước Thực hiện; phạm vi hàng không tách tính theo kho.

## 7. Kiểm tra sau khi thực hiện

Có đợt tính theo khoảng ngày và tập mã đã gửi. Kiểm tra số mã, giá cũ/mới trong chi tiết và lịch sử giá vốn; đợt 0 mã chưa chứng minh đã cập nhật giá. Kết quả tính không tách theo kho.

Đây là hành vi dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Phải đối chiếu chứng từ nhập/xuất đã đủ trước khi tính. Đợt rỗng không chứng minh dữ liệu kho đúng.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Đợt đã tạo nhưng KHÔNG có vật tư, hàng hóa nào trong phạm vi…**: không tìm được mã từ phát sinh sổ cái kho trong kỳ và hàng tồn của chi nhánh. Kiểm tra lại khoảng ngày, tập mã và nguồn sổ kho; đợt rỗng không chứng minh đã tính giá xong.
- **Chưa chọn chi nhánh.**: trang chưa có ngữ cảnh đơn vị để gửi tác vụ. Trên hệ thống chính thức, kiểm tra đúng tên miền và tài khoản riêng của đơn vị, đăng nhập lại đúng hệ thống hoặc chuyển quản trị hỗ trợ; không đổi chi nhánh trong cùng phiên.
- **Vui lòng chọn ít nhất 1 vật tư, hàng hóa để tính giá.**: đang chọn phạm vi một phần nhưng danh sách mã rỗng. Mở chọn hàng, đánh dấu ít nhất một mã rồi thực hiện lại.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN TÍNH GIÁ XUẤT KHO](/bai-viet/2026-11-07-gt-a01-0-huong-dan-tong-quan-tinh-gia-xuat-kho/)** — Tổng quan Tính giá xuất kho.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN TÍNH GIÁ XUẤT KHO](/bai-viet/2026-11-07-gt-a01-0-huong-dan-tong-quan-tinh-gia-xuat-kho/)** — Tổng quan Tính giá xuất kho.
- **[HƯỚNG DẪN IMPORT GIÁ VỐN TỪ EXCEL](/bai-viet/2026-11-07-gt-a01-2-huong-dan-import-gia-von-tu-excel/)** — Import giá vốn từ Excel.
- **[HƯỚNG DẪN IMPORT GIÁ THÀNH TỪ EXCEL](/bai-viet/2026-11-07-gt-a01-3-huong-dan-import-gia-thanh-tu-excel/)** — Import giá thành từ Excel.
- **[HƯỚNG DẪN TÍNH VÀ PHÂN BỔ GIÁ VỐN GIA CÔNG NGOÀI](/bai-viet/2026-11-07-gt-a01-4-huong-dan-tinh-va-phan-bo-gia-von-gia-cong-ngoai/)** — Tính và phân bổ giá vốn gia công ngoài.
- **[HƯỚNG DẪN BACKFILL VÀ HOÀN TÁC SỔ CÁI KHO](/bai-viet/2026-11-07-gt-a01-5-huong-dan-backfill-va-hoan-tac-so-cai-kho/)** — Backfill và hoàn tác sổ cái kho.
- **[HƯỚNG DẪN XÓA VÀ HOÀN TÁC ĐỢT TÍNH GIÁ](/bai-viet/2026-11-07-gt-a01-6-huong-dan-xoa-va-hoan-tac-dot-tinh-gia/)** — Xóa và hoàn tác đợt tính giá.
