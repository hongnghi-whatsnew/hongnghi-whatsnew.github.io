---
title: "TỔNG QUAN TẦN SUẤT MUA HÀNG"
date: "2026-11-07"
summary: "Xác định khách đã mua nhiều lần, thời gian giữa các lần mua và khách lâu chưa quay lại để chuẩn bị chăm sóc."
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

Xác định khách đã mua nhiều lần, thời gian giữa các lần mua và khách lâu chưa quay lại để chuẩn bị chăm sóc. Lọc lưới: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); xuất Excel: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Mở chức năng

**Báo cáo → Tần suất mua hàng** — `/bao-cao-gop/tan-suat-mua-hang`

## 2. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![BÁO CÁO GỘP - TẦN SUẤT MUA HÀNG — kỳ 06 tháng, số lần tối thiểu và người phụ trách đã che, chỉ xem.](/posts/2026-11-07-bc-a02-0-tong-quan-tan-suat-mua-hang/ui-20261026-bc-02-filters.png)

Bộ lọc gồm khoảng thời gian theo tháng, khoảng ngày tùy chọn, ô **Số lần quay lại tối thiểu**, **Người phụ trách** và **Tải lại**. Lưới liệt kê một khách theo đơn vị với các chỉ số mua hàng.

## 3. Trình tự công việc

Xác định phạm vi → Chọn dữ liệu → Thực hiện theo quyền → Đối chiếu kết quả

## 4. Thực hiện trên phần mềm

1. Chọn số tháng cần xem. Kỳ tháng bao gồm tháng hiện tại; chế độ toàn thời gian bắt đầu từ 01/04/2021.
2. Với khoảng tùy chọn, nhập cả **Từ ngày**, **Đến ngày**, rồi bấm **Tải lại**. Nếu thiếu một mốc ngày, lưới bị làm trống; kiểm đủ hai mốc trước khi kết luận không có khách mua hàng.
3. Nếu có quyền, chọn **Người phụ trách**. Chọn tất cả nhân viên nghĩa là bỏ bộ lọc nhân viên.
4. Dùng cột **Tổng ĐH**, **Chưa mua hàng (ngày)** và **Thời gian TB** lập danh sách chăm sóc; xuất theo [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

## 5. Giải thích các thông tin trên màn hình

- **Mã chi nhánh / Nhân viên phụ trách / Tên khách chính / Khách hàng**: Ý nghĩa / quy tắc: Nhận diện đơn vị và nhóm khách thuộc phạm vi phụ trách.
- **Loại KH / SĐT / Phân loại tín dụng / Số ngày nợ**: Ý nghĩa / quy tắc: Thông tin khách để liên hệ và kiểm tra chính sách nợ.
- **Tổng ĐH**: Ý nghĩa / quy tắc: Đếm phiếu xuất kho có khách hàng trong kỳ sau 31/03/2021; không phải số phiếu đặt hàng.
- **Tổng doanh số**: Ý nghĩa / quy tắc: Tổng doanh số của khách trong khoảng chọn.
- **Giá trị TB/ĐH**: Ý nghĩa / quy tắc: Tổng doanh số ÷ Tổng ĐH; không có đơn thì không tính.
- **Thời gian TB**: Ý nghĩa / quy tắc: Khoảng ngày từ lần xuất đầu đến lần xuất cuối ÷ số phiếu xuất; chỉ một ngày mua thì để trống.
- **Chưa mua hàng (ngày)**: Ý nghĩa / quy tắc: Ngày hiện tại − ngày phát sinh gần nhất tìm thấy trong kỳ.
- **T.Gian gần đây / ĐH gần đây**: Ý nghĩa / quy tắc: Ngày / mã gần nhất giữa phiếu đặt, phiếu bán và phiếu xuất trong kỳ, không vượt ngày hiện tại.
- **D.Số cao nhất / D.Số cao nhất (tháng)**: Ý nghĩa / quy tắc: Tổng doanh số của tháng cao nhất trong lịch sử khách; không giới hạn bởi khoảng lọc đang xem.

## 6. Kiểm tra sau khi thực hiện

Bảng hiển thị số liệu theo phạm vi đã chọn. Việc xem hoặc xuất báo cáo không tự tạo chứng từ và không ghi tăng / giảm số dư.

## 7. Câu hỏi thường gặp

**D.Số cao nhất có thay đổi khi thu hẹp kỳ không?** Không nhất thiết; chỉ số lấy tháng cao nhất trong lịch sử.

**Tổng ĐH có bằng số phiếu đặt hàng không?** Không. Cột đếm số phiếu xuất kho cho khách trong kỳ.

## 8. Công việc tiếp theo

Đối chiếu kết quả và lưu kỳ/phạm vi đã kiểm tra. [TỔNG QUAN DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bc-a04-0-tong-quan-doanh-so-ban-hang/); [TỔNG QUAN MÀN HÌNH THỐNG KÊ TẦN SUẤT MUA HÀNG](/bai-viet/2026-11-07-bh-b01-0-tong-quan-man-hinh-thong-ke-tan-suat-mua-hang/) — Tần suất mua hàng theo bán hàng.

## 9. Bài hướng dẫn liên quan

[TỔNG QUAN DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bc-a04-0-tong-quan-doanh-so-ban-hang/); [TỔNG QUAN MÀN HÌNH THỐNG KÊ TẦN SUẤT MUA HÀNG](/bai-viet/2026-11-07-bh-b01-0-tong-quan-man-hinh-thong-ke-tan-suat-mua-hang/) — Tần suất mua hàng theo bán hàng.
