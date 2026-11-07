---
title: "TỔNG QUAN TÀI CHÍNH"
date: "2026-11-07"
summary: "Đọc nhanh doanh thu, giá vốn, lãi gộp, dòng tiền, công nợ và tồn kho trên bảng điều khiển tài chính."
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

Đọc nhanh doanh thu, giá vốn, lãi gộp, dòng tiền, công nợ và tồn kho trên bảng điều khiển tài chính.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Mở chức năng

**Báo cáo → tài chính** — `/bao-cao-quan-tri/tong-quan-tai-chinh`

## 2. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Tổng quan tài chính — bộ chọn Năm và bố cục thẻ; giá trị và toàn bộ đồ thị đã che, chỉ xem.](/posts/2026-11-07-bc-b01-0-tong-quan-tai-chinh/ui-20261026-bc-05-overview.png)

Bộ chọn **Năm:**; thẻ chỉ số và biểu đồ **Dòng tiền theo tháng**, **Doanh thu - Giá vốn - Lãi gộp**, **Doanh thu**, **Tình hình tài chính**, **Nợ phải thu**, **Nợ phải trả**, **Tình hình tồn kho**. Dữ liệu được làm gọn theo đơn vị hiển thị của từng khối.

## 3. Trình tự công việc

Xác định phạm vi → Chọn dữ liệu → Thực hiện theo quyền → Đối chiếu kết quả

## 4. Thực hiện trên phần mềm

1. Chọn **Năm:** để tải dữ liệu theo năm.
2. Kiểm tra thời gian cập nhật và chú thích lãi gộp; số chưa đủ dữ liệu giá vốn không dùng để kết luận lợi nhuận.
3. Đọc thẻ tổng, rồi rê chuột vào biểu đồ từng tháng để so giá trị.
4. Khi có bất thường, đối chiếu thống kê kho / công nợ tương ứng theo đúng mốc thời gian.

## 5. Giải thích các thông tin trên màn hình

- **Doanh thu năm**: Ý nghĩa / quy tắc: Tổng tiền xuất bán cho khách − tiền nhập khách trả trong 12 tháng của năm; khác công thức doanh số gộp có dịch vụ/giảm giá.
- **Giá vốn / Lãi gộp**: Ý nghĩa / quy tắc: Khi độ phủ giá vốn đạt 80%: giá vốn từ nghiệp vụ kho; lãi gộp = doanh thu − giá vốn. Chưa đạt ngưỡng thì hiện trạng thái chờ tính, không coi là lợi nhuận bằng 0.
- **Xu hướng doanh thu / lãi gộp**: Ý nghĩa / quy tắc: So năm được chọn với năm trước; xu hướng lãi gộp chỉ tính khi cả hai năm đủ độ phủ.
- **Dòng tiền theo tháng**: Ý nghĩa / quy tắc: Thu, chi theo từng tháng; chi biểu diễn về phía âm, tồn lấy số dư cuối tháng.
- **Tiền mặt / Tiền gửi**: Ý nghĩa / quy tắc: Cơ cấu tiền theo số dư nguồn tương ứng; tổng tiền bằng tiền mặt + tiền gửi.
- **Nợ phải thu / Nợ phải trả**: Ý nghĩa / quy tắc: Tổng nợ, quá hạn và trong hạn theo mốc báo cáo; so phạm vi trước khi đối chiếu số hiện tại.
- **Giá trị tồn kho**: Ý nghĩa / quy tắc: Tổng tồn hiện tại × giá vốn bình quân hiện hành, không phải tổng tồn của riêng năm chọn.
- **Snapshot hôm nay**: Ý nghĩa / quy tắc: Doanh thu, giá vốn/lãi gộp, tồn kho của hiện tại; thay đổi năm không biến khối này thành ảnh chụp quá khứ.
- **Tình hình tồn kho**: Ý nghĩa / quy tắc: Bán / mua theo tiền từng tháng, tồn cuối tháng theo giá vốn bình quân.

## 6. Kiểm tra sau khi thực hiện

Bảng hiển thị số liệu theo phạm vi đã chọn. Việc xem hoặc xuất báo cáo không tự tạo chứng từ và không ghi tăng / giảm số dư.

## 7. Những điều cần lưu ý

⚠️ Bảng điều khiển có cả số theo năm và số hiện tại. **Lãi gộp** chưa trừ toàn bộ chi phí quản lý / tài chính nên không phải lợi nhuận ròng. Chưa thấy nút xuất Excel / in toàn màn trong template; không hướng dẫn các nút đó.

## 8. Câu hỏi thường gặp

**Lãi gộp có phải lợi nhuận cuối cùng?** Không; cần xem chi phí và lợi nhuận ròng trong Báo cáo tổng hợp.

**Đổi năm nhưng giá trị tồn không đổi có bất thường không?** Chưa chắc; thẻ giá trị tồn lấy số hiện tại.

## 9. Công việc tiếp theo

Đối chiếu kết quả và lưu kỳ/phạm vi đã kiểm tra. [TỔNG QUAN BÁO CÁO KINH DOANH](/bai-viet/2026-11-07-bc-b02-0-tong-quan-bao-cao-kinh-doanh/); [TỔNG QUAN BÁO CÁO TỔNG HỢP](/bai-viet/2026-11-07-bc-b03-0-tong-quan-bao-cao-tong-hop/); [TỔNG QUAN XUẤT NHẬP TỒN](/bai-viet/2026-11-07-bc-a03-0-tong-quan-xuat-nhap-ton/).

## 10. Bài hướng dẫn liên quan

[TỔNG QUAN BÁO CÁO KINH DOANH](/bai-viet/2026-11-07-bc-b02-0-tong-quan-bao-cao-kinh-doanh/); [TỔNG QUAN BÁO CÁO TỔNG HỢP](/bai-viet/2026-11-07-bc-b03-0-tong-quan-bao-cao-tong-hop/); [TỔNG QUAN XUẤT NHẬP TỒN](/bai-viet/2026-11-07-bc-a03-0-tong-quan-xuat-nhap-ton/).
