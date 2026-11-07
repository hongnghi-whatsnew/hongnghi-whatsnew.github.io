---
title: "TỔNG QUAN TRẠNG THÁI HOẠT ĐỘNG"
date: "2026-11-07"
summary: "Theo dõi trạng thái tài khoản, hoạt động cuối, thiết bị và số phiên để hỗ trợ người dùng."
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

Theo dõi trạng thái tài khoản, hoạt động cuối, thiết bị và số phiên để hỗ trợ người dùng. Thu hồi phiên là luồng riêng tại [THU HỒI PHIÊN ĐĂNG NHẬP](/bai-viet/2026-11-07-ht-a05-1-thu-hoi-phien-dang-nhap/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Mở chức năng

**Thiết lập nội bộ → Trạng thái hoạt động** — `/he-thong/trang-thai-hoat-dong`

## 2. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Trạng thái hoạt động — bộ lọc và danh sách; định danh/IP đã che, chỉ xem.](/posts/2026-11-07-ht-a05-0-tong-quan-trang-thai-hoat-dong/ui-20261026-ht-a05-ds-activity-list.png)

Thẻ **Đang hoạt động**, **Không hoạt động**, **Ngoại tuyến**; bộ lọc trạng thái, thời gian, thiết bị và tìm **Họ tên, tài khoản, IP…**; lưới **Họ & tên**, **Tài khoản**, **Trạng thái**, **Hoạt động cuối**, **IP**, **Thiết bị**, **Phiên**, **Thao tác**. Nhấp dòng hoặc **Chi tiết** mở **Chi tiết hoạt động**.

## 3. Trình tự công việc

Xác định phạm vi → Chọn dữ liệu → Thực hiện theo quyền → Đối chiếu kết quả

## 4. Thực hiện trên phần mềm

1. Chọn trạng thái cần tìm; bấm lại thẻ đang chọn để bỏ lọc.
2. Thu hẹp hoạt động cuối theo **Trong 15 phút**, **Trong 1 giờ**, **Hôm nay** hoặc **7 ngày**; chọn thiết bị nếu cần.
3. Tìm theo họ tên, tài khoản hoặc IP; nhấp dòng / **Chi tiết** để xem phiên.
4. Đối chiếu thiết bị và người sử dụng. Nếu cần kết thúc phiên, đọc [THU HỒI PHIÊN ĐĂNG NHẬP](/bai-viet/2026-11-07-ht-a05-1-thu-hoi-phien-dang-nhap/) trước. Xuất theo [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/) khi được cấp quyền.

## 5. Giải thích các thông tin trên màn hình

- **Trạng thái**: Ý nghĩa / quy tắc: Đang hoạt động / Không hoạt động / Ngoại tuyến theo thông tin thời gian thực.
- **Hoạt động cuối**: Ý nghĩa / quy tắc: Lần ghi nhận cuối; hiển thị tương đối và thời điểm cụ thể.
- **IP / Thiết bị**: Ý nghĩa / quy tắc: IP và thiết bị từ phiên; hệ điều hành nhận diện từ thông tin trình duyệt.
- **Phiên**: Ý nghĩa / quy tắc: Số phiên của người dùng; mở chi tiết để kiểm tra từng thiết bị.
- **Số trên thẻ trạng thái**: Ý nghĩa / quy tắc: Đếm toàn bộ danh sách nhận về theo từng trạng thái, không chỉ kết quả tìm/lọc đang nhìn.
- **Tải lại / tự cập nhật**: Ý nghĩa / quy tắc: Màn tự tải theo nhịp cấu hình; Tải lại dùng để yêu cầu xem lại sớm.

## 6. Kiểm tra sau khi thực hiện

Biết tài khoản/thiết bị nào cần hỗ trợ; việc lọc hoặc mở chi tiết không tự đăng xuất ai.

## 7. Những điều cần lưu ý

⚠️ Khi dịch vụ thời gian thực gián đoạn, danh tính/phiên/IP vẫn có thể còn nhưng trạng thái trống; thẻ trạng thái bị ẩn và lọc trạng thái bị khóa. Không coi cột trống là toàn bộ người dùng đã ngoại tuyến.

## 8. Câu hỏi thường gặp

**Trạng thái trống có nghĩa không hoạt động?** Không; có thể hệ thống đang thiếu kết nối thời gian thực.

## 9. Công việc tiếp theo

Đối chiếu kết quả và lưu kỳ/phạm vi đã kiểm tra. [THU HỒI PHIÊN ĐĂNG NHẬP](/bai-viet/2026-11-07-ht-a05-1-thu-hoi-phien-dang-nhap/); [ĐẶT LẠI MẬT KHẨU NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-4-dat-lai-mat-khau-nhan-vien/).

## 10. Bài hướng dẫn liên quan

[THU HỒI PHIÊN ĐĂNG NHẬP](/bai-viet/2026-11-07-ht-a05-1-thu-hoi-phien-dang-nhap/); [ĐẶT LẠI MẬT KHẨU NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-4-dat-lai-mat-khau-nhan-vien/).
