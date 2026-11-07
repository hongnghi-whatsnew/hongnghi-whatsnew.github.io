---
title: "TỔNG QUAN BÁO CÁO TỔNG HỢP"
date: "2026-11-07"
summary: "Đọc kết quả hoạt động kinh doanh theo tháng từ các bút toán kế toán: doanh thu, giá vốn, chi phí và lợi nhuận."
module: "Báo cáo"
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

Đọc kết quả hoạt động kinh doanh theo tháng từ các bút toán kế toán: doanh thu, giá vốn, chi phí và lợi nhuận. Cập nhật số liệu dùng để lấy lại số tổng hợp sau khi hạch toán.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Mở chức năng

**Báo cáo → Báo cáo tổng hợp** — `/bao-cao-quan-tri/bao-cao-tong-hop`

## 2. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Báo cáo quản trị — giao diện báo cáo theo năm đang chọn; các chỉ tiêu đang bằng 0, chỉ xem.](/posts/2026-11-07-bc-b03-0-tong-quan-bao-cao-tong-hop/ui-20261026-bc-07-overview.png)

Bộ chọn năm; **Xuất Excel**, **In báo cáo**, **Cập nhật số liệu**; thẻ tổng quan; bảng **Chi tiết theo tháng** với **Số tiền**, **% Doanh thu**, **Tình trạng nguồn**, **So cùng kỳ**. Nhấp tên nhóm để thu / mở các dòng.

## 3. Trình tự công việc

Xác định phạm vi → Chọn dữ liệu → Thực hiện theo quyền → Đối chiếu kết quả

## 4. Thực hiện trên phần mềm

1. Chọn năm cần xem.
2. Nếu số liệu nguồn đã được hạch toán và bạn có quyền cập nhật, bấm **Cập nhật số liệu**, chờ thông báo **Đã cập nhật số liệu báo cáo**. Nút này làm mới số tổng hợp từ bút toán đã hạch toán; không hạch toán thay các chứng từ chưa ghi sổ. Nếu thiếu nguồn, chuyển kế toán xử lý bước ghi sổ trước rồi mới cập nhật lại báo cáo.
3. Đọc **Tài khoản**, các cột **T1** đến **T12** và **Lũy kế năm**. Bật **Tình trạng nguồn** để kiểm tra dữ liệu đã có/chưa phân loại/chưa có.
4. Chuyển **% Doanh thu** hoặc bật **So cùng kỳ** khi cần so tỷ trọng / xu hướng.
5. **Xuất Excel** xuất bảng tiền đầy đủ; **In báo cáo** mở hộp in của trình duyệt. Chọn máy in hoặc lưu PDF tại hộp in.

## 5. Giải thích các thông tin trên màn hình

- **Danh mục/khoản mục**: Ý nghĩa / quy tắc: Tên chỉ tiêu và công thức của các dòng kết quả; chỉ tiêu / tài khoản phụ thuộc cấu hình báo cáo.
- **Tài khoản**: Ý nghĩa / quy tắc: Tài khoản nguồn đã ghép vào dòng báo cáo; không tự sửa trên màn này.
- **T1–T12**: Ý nghĩa / quy tắc: Số tiền của chỉ tiêu từng tháng tính từ engine báo cáo và nguồn sổ cái; dòng tổng tính từ các dòng được tham chiếu với phép cộng/trừ/hệ số đã cấu hình.
- **Lũy kế năm**: Ý nghĩa / quy tắc: Tổng 12 tháng của dòng, không chỉ các tháng đang có phát sinh.
- **% Doanh thu**: Ý nghĩa / quy tắc: Số của dòng ÷ doanh thu cơ sở cùng tháng × 100; cột năm chia doanh thu lũy kế. Doanh thu cơ sở 0 thì hiện dấu gạch.
- **So cùng kỳ**: Ý nghĩa / quy tắc: (Số hiện tại − số cùng tháng/năm trước) ÷ trị tuyệt đối số trước × 100; số trước thiếu/0 thì không hiển thị Δ%.
- **Đã có dữ liệu**: Ý nghĩa / quy tắc: Dòng tài khoản có tổng trị tuyệt đối số phát sinh khác 0.
- **Chưa có**: Ý nghĩa / quy tắc: Dòng đã gắn tài khoản nhưng chưa có giá trị phát sinh trong năm.
- **Chưa phân loại**: Ý nghĩa / quy tắc: Dòng chưa gắn tài khoản nguồn; không tự hiểu là đã kiểm tra và số tiền bằng 0.
- **Số tiền 0**: Ý nghĩa / quy tắc: Giao diện có thể trình bày bằng dấu gạch; Excel vẫn ghi số 0.

## 6. Kiểm tra sau khi thực hiện

Số tổng hợp được tải lại theo năm đang xem. **Cập nhật số liệu** làm mới dữ liệu tổng hợp của hệ thống rồi tải lại báo cáo; thao tác không truyền năm lựa chọn vào lệnh cập nhật và không tự hạch toán bút toán nguồn. Kết quả cần đối chiếu với các bút toán đã ghi sổ và cấu hình chỉ tiêu.

## 7. Những điều cần lưu ý

⚠️ Excel luôn xuất số tiền của toàn bộ chỉ tiêu, kể cả nhóm đang thu gọn; không xuất tỷ lệ % hoặc phần Δ% đang bật trên màn. Bảng tổng hợp từ sổ cái có thể chưa khớp dashboard vận hành nếu hạch toán nguồn / phân loại chưa hoàn chỉnh.

### "Chưa seed báo cáo PL_TONGHOP" (Lỗi hệ thống)

Nguyên nhân: chưa có cấu hình báo cáo tổng hợp trên môi trường đang mở.

Cách xử lý: chuyển IT kiểm tra cấu hình báo cáo; không tạo bút toán giả để làm xuất hiện số.

## 9. Câu hỏi thường gặp

**Vì sao số 0 hiện dấu gạch?** Đây là cách hiển thị, Excel vẫn có số 0.

**Đang xem % thì Excel có xuất % không?** Không; Excel xuất bảng số tiền.

**Chưa phân loại nghĩa là không có chi phí?** Không; cần hoàn thiện gắn tài khoản nguồn.

## 10. Công việc tiếp theo

Đối chiếu kết quả và lưu kỳ/phạm vi đã kiểm tra. [TỔNG QUAN TÀI CHÍNH](/bai-viet/2026-11-07-bc-b01-0-tong-quan-tai-chinh/); [TỔNG QUAN BÁO CÁO KINH DOANH](/bai-viet/2026-11-07-bc-b02-0-tong-quan-bao-cao-kinh-doanh/); [TỔNG QUAN MÀN HÌNH BÚT TOÁN PHÁT SINH](/bai-viet/2026-11-07-kt-a12-0-tong-quan-man-hinh-but-toan-phat-sinh/); [TỔNG QUAN MÀN HÌNH CẤU HÌNH HẠCH TOÁN](/bai-viet/2026-11-07-tl-a11-0-tong-quan-man-hinh-cau-hinh-hach-toan/).

## 11. Bài hướng dẫn liên quan

[TỔNG QUAN TÀI CHÍNH](/bai-viet/2026-11-07-bc-b01-0-tong-quan-tai-chinh/); [TỔNG QUAN BÁO CÁO KINH DOANH](/bai-viet/2026-11-07-bc-b02-0-tong-quan-bao-cao-kinh-doanh/); [TỔNG QUAN MÀN HÌNH BÚT TOÁN PHÁT SINH](/bai-viet/2026-11-07-kt-a12-0-tong-quan-man-hinh-but-toan-phat-sinh/); [TỔNG QUAN MÀN HÌNH CẤU HÌNH HẠCH TOÁN](/bai-viet/2026-11-07-tl-a11-0-tong-quan-man-hinh-cau-hinh-hach-toan/).
