---
title: "TỔNG QUAN CÔNG NỢ KHÁCH HÀNG"
date: "2026-11-07"
summary: "Đối chiếu nợ đầu kỳ, các khoản tăng / giảm nợ và nợ cuối kỳ của khách hàng trên các đơn vị được kết nối."
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

Đối chiếu nợ đầu kỳ, các khoản tăng / giảm nợ và nợ cuối kỳ của khách hàng trên các đơn vị được kết nối. Lọc, nhóm và chọn cột: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); xuất Excel: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Mở chức năng

**Báo cáo → Công nợ khách hàng** — `/bao-cao-gop/cong-no-khach-hang`

## 2. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![THỐNG KÊ CÔNG NỢ KHÁCH HÀNG — ngày, bộ lọc và nhóm cột; dữ liệu khách/số tiền đã che, chỉ xem.](/posts/2026-11-07-bc-a01-0-tong-quan-cong-no-khach-hang/ui-20261026-bc-01-overview.png)

## 3. Trình tự công việc

Chốt kỳ → Xác định đơn vị/khách → Đọc nợ đầu và các phát sinh → Đối chiếu nợ cuối → Bàn giao phạm vi báo cáo

### Đọc và đối chiếu công nợ theo khách hàng

1. Xác định khoảng thời gian cần đối chiếu và khách hàng mục tiêu. Chọn cùng kỳ khi so với báo cáo công nợ từng đơn vị; nếu so lũy kế, đọc quy tắc kỳ một ngày tại phần “Giải thích các thông tin trên màn hình” trước.
2. Chọn **Từ ngày / Đến ngày**, bấm **Tải lại**. Giữ lại cột **Mã chi nhánh** cùng thông tin khách; không nhận diện khách chỉ bằng tên gần giống.
3. Tìm khách theo **Tên khách chính / Khách hàng**. Tách rõ khách chính và khách con, nhân viên kinh doanh phụ trách, hợp đồng và đơn vị trước khi cộng số liệu.
4. Đọc **Nợ đầu kỳ**, sau đó từng khoản **Tiền bán**, **Tiền thu**, **Trả hàng**, **Tiền chi**, **Tiền cấn trừ**, **Tiền giảm trừ**. Ghi khoản nào làm tăng hoặc giảm nợ theo bảng phần “Giải thích các thông tin trên màn hình”; không đồng nhất doanh số với số đã thu.
5. Đối chiếu **Nợ cuối kỳ** theo công thức tại phần “Giải thích các thông tin trên màn hình”. Khi chưa khớp báo cáo chi nhánh, kiểm tra kỳ, khách chính/con, các khoản cấn trừ/giảm trừ và phạm vi quyền, thay vì sửa trực tiếp số của báo cáo.
6. Đọc tuổi nợ tại **Đến ngày** theo từng nhóm quá hạn. Không dùng các cột lũy kế hoặc doanh số thay cho số tiền phải thu quá hạn.
7. Muốn truy về chứng từ hoặc in mẫu đối chiếu: chuyển tới bài **[TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/) — Công nợ khách hàng** trong sổ Kế toán. Không giả định báo cáo gộp có menu mở chi tiết hoặc in đối chiếu khi chưa có chức năng được gắn trên lưới.
8. Nếu cần bàn giao, xuất theo [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/) và ghi kèm kỳ, khách, đơn vị, điều kiện lọc. Giữ riêng dữ liệu từng chi nhánh; không tự bù trừ nợ giữa các hệ thống.

## 5. Giải thích các thông tin trên màn hình

- **Nhân Viên KD / Tên khách chính / Khách hàng**: Ý nghĩa / quy tắc: Nhóm phụ trách và quan hệ khách chính–khách con; kiểm tra đúng khách và đơn vị trước khi cộng.
- **Loại khách hàng / Số hợp đồng / Phân loại tín dụng / Số ngày nợ**: Ý nghĩa / quy tắc: Thông tin danh mục và hợp đồng còn hiệu lực; số hợp đồng có thể kèm trạng thái.
- **Nợ đầu kỳ**: Ý nghĩa / quy tắc: Dư nợ trước kỳ; tính lùi từ số dư hiện tại theo các phát sinh sau kỳ và trong kỳ.
- **Tiền bán / Tiền thu / Trả hàng / Tiền chi**: Ý nghĩa / quy tắc: Tổng các giao dịch tương ứng trong khoảng ngày.
- **Tiền cấn trừ / Tiền giảm trừ**: Ý nghĩa / quy tắc: Các khoản giảm công nợ theo chứng từ cấn trừ / giảm trừ.
- **Doanh số thực tế**: Ý nghĩa / quy tắc: Tiền bán − Trả hàng; đây không phải công thức Doanh số của [TỔNG QUAN DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bc-a04-0-tong-quan-doanh-so-ban-hang/).
- **Nợ cuối kỳ**: Ý nghĩa / quy tắc: Nợ đầu kỳ + Tiền bán + Tiền chi − Tiền thu − Trả hàng − Tiền cấn trừ − Tiền giảm trừ.
- **Các cột lũy kế**: Ý nghĩa / quy tắc: Khi xem một ngày, lũy kế từ ngày đầu tháng đến ngày chọn; không coi số 0 ở kỳ nhiều ngày là tháng không phát sinh.
- **Các nhóm nợ quá hạn**: Ý nghĩa / quy tắc: Cộng nợ theo tuổi nợ 01–15, 16–30, 31–45, 46–60 và trên 60 ngày tại Đến ngày; tiền thu phân bổ riêng từng chi nhánh.
- **Mã chi nhánh**: Ý nghĩa / quy tắc: Nhãn đơn vị của báo cáo gộp; phải giữ cột này khi đối chiếu liên đơn vị.

## 6. Kiểm tra sau khi thực hiện

Bảng hiển thị số liệu theo phạm vi đã chọn. Việc xem hoặc xuất báo cáo không tự tạo chứng từ và không ghi tăng / giảm số dư.

## 7. Những điều cần lưu ý

⚠️ Báo cáo gộp không giới hạn vào chi nhánh đang truy cập ở đầu trang. Quyền theo nhóm khách của tài khoản vẫn áp dụng; thiếu tài khoản tương ứng ở đơn vị kết nối có thể trả về 0 dòng. Không tự bù trừ nợ khách giữa các đơn vị.

## 8. Câu hỏi thường gặp

**Vì sao khác công nợ tại chi nhánh đang làm việc?** Đây là báo cáo gộp; so lại đơn vị, nhóm khách được cấp, kỳ và các khoản thu / cấn trừ.

**Có thể in mẫu đối chiếu ở đây không?** Dùng màn Công nợ khách hàng của Kế toán theo [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/); menu đó chưa hoạt động trên lưới báo cáo gộp.

## 9. Công việc tiếp theo

Đối chiếu kết quả và lưu kỳ/phạm vi đã kiểm tra. [TỔNG QUAN DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bc-a04-0-tong-quan-doanh-so-ban-hang/); [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/) — Công nợ khách hàng theo mảng Kế toán.

## 10. Bài hướng dẫn liên quan

[TỔNG QUAN DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bc-a04-0-tong-quan-doanh-so-ban-hang/); [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/) — Công nợ khách hàng theo mảng Kế toán.
