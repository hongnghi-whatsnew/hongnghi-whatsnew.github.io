---
title: "THU HỒI PHIÊN ĐĂNG NHẬP"
date: "2026-11-07"
summary: "Kết thúc một phiên hoặc toàn bộ phiên được phép thu hồi của tài khoản khi hỗ trợ thiết bị, nghỉ việc hoặc cần chặn truy cập."
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

Kết thúc một phiên hoặc toàn bộ phiên được phép thu hồi của tài khoản khi hỗ trợ thiết bị, nghỉ việc hoặc cần chặn truy cập.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Mở chức năng

**Thiết lập nội bộ → Thu hồi phiên đăng nhập** — `/he-thong/trang-thai-hoat-dong`

## 2. Nhận biết màn hình

Đã mở danh sách **Trạng thái hoạt động** ngày 29/10/2026 trên Gia Phúc localhost, Administrator: thấy số phiên và nút Chi tiết. Màn cảnh báo không đọc được trạng thái realtime (Redis); bảng Chi tiết hoạt động dừng ở Đang tải trong lần quan sát. Chưa chụp được danh sách phiên chi tiết hoặc hộp xác nhận thu hồi; không thực hiện thu hồi phiên. Ảnh hiện chỉ xác nhận bước mở danh sách.

![Hình 1: Danh sách trạng thái hoạt động có số Phiên và nút Chi tiết](/posts/2026-11-07-ht-a05-1-thu-hoi-phien-dang-nhap/hinh-01-20261029-ht-a05-1-danh-sach.png)

**Chi tiết hoạt động** hiển thị thông tin người và danh sách phiên. Có thao tác thu hồi từng phiên và **Thu hồi tất cả phiên**; trạng thái nút phụ thuộc phiên còn lại và quyền.

## 3. Trình tự công việc

Trạng thái hoạt động → xác định đúng tài khoản → Chi tiết → đối chiếu thiết bị/IP và phiên hiện tại → chọn thu hồi một phiên hoặc tất cả → đọc xác nhận → thực hiện → tải lại số phiên.

## 4. Thực hiện trên phần mềm

1. Mở **Chi tiết hoạt động** của đúng tài khoản, kiểm tra thiết bị / IP của phiên cần kết thúc.
2. Thu hồi một phiên: chọn thao tác ở phiên đó, đọc **Thu hồi phiên đăng nhập** với nội dung **Phiên này sẽ mất hiệu lực, người dùng phải đăng nhập lại trên thiết bị đó.** rồi xác nhận.
3. Nếu cần nhiều thiết bị, chọn **Thu hồi tất cả phiên** và đọc **Người này sẽ bị đăng xuất khỏi mọi thiết bị và phải đăng nhập lại.** trước xác nhận. Riêng khi thao tác trên chính tài khoản của mình, hệ thống giữ phiên đang dùng và chỉ thu hồi các phiên khác; muốn kết thúc phiên hiện tại thì dùng Đăng xuất.
4. Kiểm tra danh sách phiên tải lại. Đóng bảng chi tiết rồi đối chiếu cột **Phiên** ở danh sách.

## 5. Giải thích các thông tin trên màn hình

- **Phiên / thiết bị / IP**: Ý nghĩa / quy tắc: Dùng để chọn phiên cần thu hồi; đối chiếu người dùng trước thao tác.
- **Thu hồi phiên đăng nhập**: Ý nghĩa / quy tắc: Chỉ kết thúc phiên được chọn; dòng mang nhãn **Phiên này** không cho tự thu hồi. Dùng Đăng xuất để kết thúc phiên đang dùng.
- **Số phiên sau thao tác**: Ý nghĩa / quy tắc: Có thể cần tải lại danh sách; đóng bảng chi tiết tự yêu cầu cập nhật danh sách.

## 6. Kiểm tra sau khi thực hiện

Phiên bị chọn mất hiệu lực; người dùng phải đăng nhập lại theo tác động đã xác nhận. Không đổi mật khẩu trong luồng này.

## 7. Những điều cần lưu ý

⚠️ Thu hồi phiên có thể ngắt công việc đang làm trên thiết bị đích. Nếu cần thay mật khẩu, dùng [ĐẶT LẠI MẬT KHẨU NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-4-dat-lai-mat-khau-nhan-vien/) và phối hợp với chủ tài khoản.

## 8. Vướng mắc thường gặp

**Chi tiết hoạt động dừng ở Đang tải / cảnh báo realtime (Redis)**: lần quan sát 29/10/2026 chưa mở được danh sách phiên chi tiết. Ghi mã tài khoản và thời điểm, báo IT kiểm tra; không suy cột Không rõ thành tài khoản đã ngoại tuyến và không đánh dấu thu hồi thành công.

- **Không thu hồi được phiên bạn đang dùng. Dùng chức năng đăng xuất.**: Nguyên nhân / xử lý: Đang tự thu hồi phiên hiện tại; dùng Đăng xuất hoặc chọn phiên khác.
- **Chỉ tài khoản hệ thống mới thu hồi được phiên của tài khoản hệ thống.**: Nguyên nhân / xử lý: Không đủ cấp quản trị; chuyển người phụ trách có thẩm quyền.
- **Không tìm thấy người dùng.**: Nguyên nhân / xử lý: Đích không còn tồn tại; tải lại danh sách và xác định lại tài khoản.

## 9. Câu hỏi thường gặp

**Thu hồi có đổi mật khẩu không?** Không; đó là luồng khác.

**Nút tất cả bị tắt dù còn phiên?** Có thể chỉ còn phiên hiện tại; cần đối chiếu danh sách và quyền.

## 10. Công việc tiếp theo

Đối chiếu kết quả và lưu kỳ/phạm vi đã kiểm tra. [TỔNG QUAN TRẠNG THÁI HOẠT ĐỘNG](/bai-viet/2026-11-07-ht-a05-0-tong-quan-trang-thai-hoat-dong/); [ĐẶT LẠI MẬT KHẨU NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-4-dat-lai-mat-khau-nhan-vien/).

## 11. Bài hướng dẫn liên quan

[TỔNG QUAN TRẠNG THÁI HOẠT ĐỘNG](/bai-viet/2026-11-07-ht-a05-0-tong-quan-trang-thai-hoat-dong/); [ĐẶT LẠI MẬT KHẨU NHÂN VIÊN](/bai-viet/2026-11-07-ht-a02-4-dat-lai-mat-khau-nhan-vien/).
