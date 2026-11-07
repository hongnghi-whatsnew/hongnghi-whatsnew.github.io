---
title: "TỔNG QUAN LỊCH SỬ"
date: "2026-11-07"
summary: "Tra cứu người thao tác, thời gian, chức năng và dữ liệu đã thay đổi để đối chiếu một sự việc."
module: "Hệ thống"
category: "huong-dan"
version: "v5.0.0"
isNew: true
scope: "Quản trị viên được cấp quyền chức năng"
department: ""
mediaType: "none"
tags: []
pinImportant: false
pinned: false
draft: true
---

## Chức năng này dùng để làm gì?

Tra cứu người thao tác, thời gian, chức năng và dữ liệu đã thay đổi để đối chiếu một sự việc. Lọc lưới: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); xuất: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Mở chức năng

**Thiết lập nội bộ → Lịch sử** — `/he-thong/lich-su`

## 2. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![LỊCH SỬ - DANH SÁCH — chỉ xem; thông tin tài khoản/người tạo đã che khi có.](/posts/2026-11-07-ht-a03-0-tong-quan-lich-su/ui-20261026-ht-a03-ds-figure-01.png)

Bộ chọn ngày, **Tải lại** và lưới **Thời gian**, **Người thao tác**, **Chức năng**, **Nội dung**, **Dữ liệu**. Một số loại dữ liệu hỗ trợ mở cửa sổ lịch sử bằng nhấp đúp.

## 3. Trình tự công việc

Xác định phạm vi → Chọn dữ liệu → Thực hiện theo quyền → Đối chiếu kết quả

## 4. Thực hiện trên phần mềm

1. Truy cập đúng hệ thống của đơn vị và chọn khoảng ngày xảy ra sự việc.
2. Lọc **Người thao tác**, **Chức năng**, **Dữ liệu** hoặc nội dung để thu hẹp kết quả.
3. Nhấp đúp dòng cần xem. Chỉ loại dữ liệu có hỗ trợ mới mở được cửa sổ lịch sử; cửa sổ dùng chế độ xem lịch sử.
4. Ghi lại thời điểm, người thao tác, loại việc và mã dữ liệu; xuất theo [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/) nếu cần đối chiếu.

## 5. Giải thích các thông tin trên màn hình

- **Thời gian**: Ý nghĩa / quy tắc: Thời điểm ghi thao tác, hiển thị HH:mm dd/MM/yyyy.
- **Người thao tác**: Ý nghĩa / quy tắc: Tài khoản / họ tên thực hiện thao tác.
- **Chức năng**: Ý nghĩa / quy tắc: Loại chức năng sinh lịch sử.
- **Nội dung**: Ý nghĩa / quy tắc: Diễn giải thao tác đã ghi.
- **Dữ liệu**: Ý nghĩa / quy tắc: Mã dữ liệu liên quan; dùng để đối chiếu chứng từ.
- **Khoảng ngày / hệ thống truy cập**: Ý nghĩa / quy tắc: Chọn khoảng xảy ra sự việc trong đúng hệ thống chi nhánh. Lịch sử ở tên miền/dữ liệu khác phải tra bằng tài khoản riêng của hệ thống đó.

## 6. Kiểm tra sau khi thực hiện

Có danh sách lịch sử để đối chiếu; mở lại dữ liệu ở chế độ lịch sử không phục hồi phiên bản cũ.

## 7. Những điều cần lưu ý

⚠️ Lịch sử là bằng chứng truy vết; không đồng nhất với chứng từ hiện tại. Không phải mọi loại chức năng đều có cửa sổ mở lại.

## 8. Câu hỏi thường gặp

**Nhấp đúp không mở gì?** Có thể loại lịch sử chưa có cửa sổ hỗ trợ; ghi lại mã dữ liệu để tra cứu ở màn gốc.

## 9. Công việc tiếp theo

Đối chiếu kết quả và lưu kỳ/phạm vi đã kiểm tra. [TỔNG QUAN NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-0-tong-quan-nhan-vien/); [TỔNG QUAN THỐNG KÊ SỬ DỤNG](/bai-viet/2026-11-07-ht-a06-0-tong-quan-thong-ke-su-dung/).

## 10. Bài hướng dẫn liên quan

[TỔNG QUAN NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-0-tong-quan-nhan-vien/); [TỔNG QUAN THỐNG KÊ SỬ DỤNG](/bai-viet/2026-11-07-ht-a06-0-tong-quan-thong-ke-su-dung/).
