---
title: "TỔNG QUAN DOANH SỐ BÁN HÀNG"
date: "2026-11-07"
summary: "So sánh doanh số theo khách hàng hoặc loại hàng trên các đơn vị kết nối; tách bán, trả, giảm giá và dịch vụ."
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

So sánh doanh số theo khách hàng hoặc loại hàng trên các đơn vị kết nối; tách bán, trả, giảm giá và dịch vụ. Lọc: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); xuất: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Mở chức năng

**Báo cáo → Doanh số bán hàng** — `/bao-cao-gop/doanh-so-ban-hang`

## 2. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![BÁO CÁO GỘP - DOANH SỐ BÁN HÀNG — bộ lọc và danh sách trống theo kỳ đang chọn; chỉ xem.](/posts/2026-11-07-bc-a04-0-tong-quan-doanh-so-ban-hang/ui-20261026-bc-04-overview.png)

Bộ chọn ngày và **Tải lại** ở trái; chuyển **Khách hàng** / **Loại hàng** ở phải. Hai kiểu xem có lưới và bố cục cột riêng.

## 3. Trình tự công việc

Xác định phạm vi → Chọn dữ liệu → Thực hiện theo quyền → Đối chiếu kết quả

## 4. Thực hiện trên phần mềm

1. Chọn khoảng ngày cần đối chiếu.
2. Chọn **Khách hàng** để đọc SALE, Khách chính và Khách hàng; chọn **Loại hàng** để đọc Nhân viên và Loại hàng.
3. Đối chiếu **Bán**, **Trả**, **Giảm giá**, **Dịch vụ** với **Doanh số**, **Doanh số KPI**.
4. Lọc theo **Mã chi nhánh** trước khi cộng; xuất đúng kiểu xem đang hiển thị theo [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

## 5. Giải thích các thông tin trên màn hình

- **SALE / Nhân viên**: Ý nghĩa / quy tắc: Người phụ trách khách / doanh số.
- **Khách chính / Khách hàng / Mã số thuế / Loại KH**: Ý nghĩa / quy tắc: Danh tính trong kiểu Khách hàng.
- **Loại hàng**: Ý nghĩa / quy tắc: Nhóm hàng trong kiểu Loại hàng.
- **Bán**: Ý nghĩa / quy tắc: Tổng thành tiền phiếu xuất bán cho khách trong kỳ.
- **Trả**: Ý nghĩa / quy tắc: Tổng thành tiền phiếu nhập hàng khách trả trong kỳ.
- **Giảm giá**: Ý nghĩa / quy tắc: Tổng thành tiền phiếu giảm giá trong kỳ.
- **Dịch vụ**: Ý nghĩa / quy tắc: Tổng thành tiền phiếu bán dịch vụ trong kỳ.
- **Doanh số**: Ý nghĩa / quy tắc: Bán + Dịch vụ − Trả − Giảm giá.
- **Doanh số KPI**: Ý nghĩa / quy tắc: Bán − Trả − Giảm giá; không gồm Dịch vụ.
- **Mã chi nhánh**: Ý nghĩa / quy tắc: Đơn vị của dòng báo cáo; kiểm tra riêng trước khi tổng hợp.

## 6. Kiểm tra sau khi thực hiện

Bảng hiển thị số liệu theo phạm vi đã chọn. Việc xem hoặc xuất báo cáo không tự tạo chứng từ và không ghi tăng / giảm số dư.

## 7. Những điều cần lưu ý

⚠️ **Doanh số KPI** không gồm doanh thu dịch vụ. Báo cáo gộp và Tổng quan tài chính sử dụng nguồn / công thức khác nhau; không kết luận lệch sổ khi chưa so cùng phạm vi và cùng loại phát sinh.

## 8. Câu hỏi thường gặp

**Vì sao Doanh số lớn hơn KPI?** Chênh lệch có thể là Dịch vụ; so lại 4 cột cấu thành.

**Chuyển kiểu xem có ghi dữ liệu không?** Không; chỉ đổi cách tổng hợp.

## 9. Công việc tiếp theo

Đối chiếu kết quả và lưu kỳ/phạm vi đã kiểm tra. [TỔNG QUAN CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-bc-a01-0-tong-quan-cong-no-khach-hang/); [TỔNG QUAN BÁO CÁO KINH DOANH](/bai-viet/2026-11-07-bc-b02-0-tong-quan-bao-cao-kinh-doanh/); [TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/).

## 10. Bài hướng dẫn liên quan

[TỔNG QUAN CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-bc-a01-0-tong-quan-cong-no-khach-hang/); [TỔNG QUAN BÁO CÁO KINH DOANH](/bai-viet/2026-11-07-bc-b02-0-tong-quan-bao-cao-kinh-doanh/); [TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/).
