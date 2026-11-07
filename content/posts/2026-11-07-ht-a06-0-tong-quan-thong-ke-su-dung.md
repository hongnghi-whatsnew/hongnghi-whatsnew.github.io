---
title: "TỔNG QUAN THỐNG KÊ SỬ DỤNG"
date: "2026-11-07"
summary: "Nhận diện chức năng đang dùng, ít dùng hoặc cần trao đổi trước khi bỏ; dữ liệu đo theo lượt qua mã quyền, không phải doanh số hay năng suất cá nhân."
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

Nhận diện chức năng đang dùng, ít dùng hoặc cần trao đổi trước khi bỏ; dữ liệu đo theo lượt qua mã quyền, không phải doanh số hay năng suất cá nhân. Lọc/xuất: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/), [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Mở chức năng

**Thiết lập nội bộ → Thống kê sử dụng** — `/he-thong/feature-usage`

## 2. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![THỐNG KÊ SỬ DỤNG CHỨC NĂNG — bộ lọc Nghi đã chết, chỉ xem; nội dung chi tiết đã che.](/posts/2026-11-07-ht-a06-0-tong-quan-thong-ke-su-dung/ui-20261026-ht-a06-ds-usage-suspected-dead.png)

Khoảng ngày, chi nhánh (**Tất cả chi nhánh** mặc định), ngưỡng Nghiệp vụ / Báo cáo và phạm vi **Tất cả chức năng** / **Nghi đã chết**. Mặc định chỉ hiện **Nghi đã chết** và **Chưa bao giờ**. Lưới nhóm theo loại chức năng; chọn dòng để xem xu hướng theo tuần và người dùng.

## 3. Trình tự công việc

Xác định phạm vi → Chọn dữ liệu → Thực hiện theo quyền → Đối chiếu kết quả

## 4. Thực hiện trên phần mềm

1. Chọn kỳ và chi nhánh cần đánh giá. Phạm vi chi nhánh của màn này độc lập với chi nhánh làm việc ở đầu trang.
2. Chọn ngưỡng ngày: nghiệp vụ mặc định 90; báo cáo mặc định 180. Có thể nhập số nguyên dương khác.
3. Chuyển **Tất cả chức năng** nếu muốn thấy toàn bộ dữ liệu; khi để **Nghi đã chết**, cả dòng **Chưa bao giờ** cũng xuất hiện.
4. Nhấp dòng chức năng để xem xu hướng tuần và danh sách người đã dùng.
5. Đối chiếu với người phụ trách trước khi đề xuất dừng / tinh giản chức năng; xuất theo [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

## 5. Giải thích các thông tin trên màn hình

- **Nhóm / Chức năng / Loại thao tác**: Ý nghĩa / quy tắc: Nhóm Nghiệp vụ, Báo cáo, Danh mục hoặc Khác; loại mở xem, ghi dữ liệu, in/xuất hoặc khác.
- **Lượt**: Ý nghĩa / quy tắc: Tổng lượt ghi nhận trong kỳ.
- **Lượt ghi**: Ý nghĩa / quy tắc: Lượt thêm/cập nhật/xóa của cùng nhóm mã chức năng trong kỳ; không phải chỉ lượt của riêng dòng mở xem.
- **Số người**: Ý nghĩa / quy tắc: Đếm người dùng khác nhau trong kỳ.
- **Số chi nhánh**: Ý nghĩa / quy tắc: Đếm chi nhánh xác định; lượt không gắn chi nhánh không tạo thành một chi nhánh riêng.
- **Lần cuối / Cách đây (ngày)**: Ý nghĩa / quy tắc: Mốc gần nhất toàn lịch sử trong phạm vi chi nhánh, không chỉ trong khoảng ngày chọn; số ngày tính tới hôm nay.
- **Không đánh giá**: Ý nghĩa / quy tắc: Nhóm Danh mục không bị đánh giá chết vì ít dùng là bình thường.
- **Chưa bao giờ**: Ý nghĩa / quy tắc: Chưa có lượt được ghi nhận trong lịch sử thu thập; không khẳng định chưa từng dùng trước khi bật đo.
- **Nghi đã chết — Nghiệp vụ**: Ý nghĩa / quy tắc: Không có lượt ghi trong kỳ; nhóm có mã ghi; thời gian từ lần ghi cuối (hoặc mốc bắt đầu thu thập) đạt ngưỡng nghiệp vụ.
- **Nghi đã chết — Báo cáo**: Ý nghĩa / quy tắc: Không có lượt trong kỳ và lần dùng cuối đã cách ít nhất ngưỡng báo cáo.
- **Ít dùng / Đang dùng**: Ý nghĩa / quy tắc: Sau các điều kiện trên: tối đa 10 lượt là Ít dùng, nhiều hơn là Đang dùng.
- **Dòng người dùng / xu hướng**: Ý nghĩa / quy tắc: Chi tiết của mã đang chọn theo kỳ và chi nhánh; chọn dòng khác để đổi nội dung.

## 6. Kiểm tra sau khi thực hiện

Bảng hiển thị số liệu theo phạm vi đã chọn. Việc xem hoặc xuất báo cáo không tự tạo chứng từ và không ghi tăng / giảm số dư.

## 7. Những điều cần lưu ý

⚠️ Lượt không xác định chi nhánh được tính khi xem từng chi nhánh để tránh bỏ sót thao tác ghi; cộng số của mọi chi nhánh có thể đếm lặp. Không dùng nhãn **Nghi đã chết** làm lệnh xóa chức năng. Nhóm **Khác** không bị kết luận chết theo ngưỡng báo cáo.

## 8. Câu hỏi thường gặp

**Không có dòng có phải chưa đo không?** Có thể đang bật Nghi đã chết; đổi sang Tất cả chức năng trước.

**Lần cuối ngoài khoảng ngày có sai không?** Không; cột này dùng toàn bộ lịch sử để đánh giá tuổi sử dụng.

## 9. Công việc tiếp theo

Đối chiếu kết quả và lưu kỳ/phạm vi đã kiểm tra. [TỔNG QUAN LỊCH SỬ](/bai-viet/2026-11-07-ht-a03-0-tong-quan-lich-su/); [TỔNG QUAN MENU](/bai-viet/2026-11-07-ht-a04-0-tong-quan-menu/).

## 10. Bài hướng dẫn liên quan

[TỔNG QUAN LỊCH SỬ](/bai-viet/2026-11-07-ht-a03-0-tong-quan-lich-su/); [TỔNG QUAN MENU](/bai-viet/2026-11-07-ht-a04-0-tong-quan-menu/).
