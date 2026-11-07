---
title: "TỔNG QUAN BÁO CÁO KINH DOANH"
date: "2026-11-07"
summary: "Đọc doanh thu 12 tháng, khách hàng mua mới / quay lại, tỷ lệ mất khách và các mặt hàng / khách hàng đứng đầu."
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

Đọc doanh thu 12 tháng, khách hàng mua mới / quay lại, tỷ lệ mất khách và các mặt hàng / khách hàng đứng đầu. Chọn cột/lọc: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); xuất từng lưới: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Mở chức năng

**Báo cáo → Báo cáo kinh doanh** — `/bao-cao-quan-tri/bao-cao-kinh-doanh`

## 2. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![BÁO CÁO QUẢN TRỊ - BÁO CÁO KINH DOANH — năm 2026, thẻ chỉ tiêu và bảng tháng; số liệu đã che, chỉ xem.](/posts/2026-11-07-bc-b02-0-tong-quan-bao-cao-kinh-doanh/ui-20261026-bc-06-overview.png)

Bộ chọn **Năm:** và thẻ chỉ số; ba khối **Tổng quan doanh thu theo tháng**, **Doanh thu theo khách hàng (Top khách hàng)**, **Doanh thu theo nhóm sản phẩm/dịch vụ**. Khối theo tháng có chế độ bảng và biểu đồ.

## 3. Trình tự công việc

Chọn năm → Đọc doanh thu từng tháng → Phân tích khách mới/quay lại/mất khách → Đọc Top theo tháng mốc → Đối chiếu và xuất bảng

### Phân tích báo cáo kinh doanh theo đúng kỳ

1. Chọn **Năm:** cần phân tích và đợi báo cáo tải. Ghi rõ năm đang xem khi bàn giao kết quả; không so bảng năm trước với số tháng hiện tại mà thiếu mốc thời gian.
2. Đọc bảng **Tổng quan doanh thu theo tháng** đủ 12 tháng. Phân biệt doanh thu bán hàng và dịch vụ; dùng tổng doanh thu, giá vốn và lợi nhuận gộp theo bảng giải thích tại phần “Giải thích các thông tin trên màn hình”.
3. Chuyển giữa chế độ bảng và biểu đồ để xem giá trị và xu hướng. Khi một tháng tăng/giảm mạnh, đối chiếu tháng đó với phát sinh xuất bán và khách trả tương ứng; không suy từ số tiền thu trong tháng thành doanh thu.
4. Đọc số **Khách hàng mới**, **Khách hàng quay lại** và **Tỷ lệ mất khách** theo từng tháng. Riêng tháng 1 có kỳ so là tháng 12 năm trước; không coi tỷ lệ mất khách là chỉ số của cả năm.
5. Chuyển sang **Doanh thu theo khách hàng (Top khách hàng)**. Xác định **Doanh thu tháng** và **Doanh thu cộng dồn** đang dùng tháng mốc nào: năm hiện tại dùng tháng hiện tại, năm khác dùng tháng 12 theo nguồn đã đối chiếu.
6. Đọc phần trăm của từng khách trên tổng doanh thu cộng dồn toàn bộ. Danh sách chỉ hiện Top nên cộng các dòng đang thấy có thể nhỏ hơn tổng; không dùng riêng tổng Top làm mẫu số thay thế.
7. Đọc **Doanh thu theo nhóm sản phẩm/dịch vụ** và tên mặt hàng đang hiển thị. Nguồn bản thảo đang tổng hợp từng hàng, không mặc định nhóm này đồng nghĩa loại hàng trong danh mục.
8. So cùng kỳ trước bằng cùng số tháng cộng dồn; phân biệt **Số đơn hàng** (phiếu xuất bán) với số phiếu khách trả. Tham khảo **[TỔNG QUAN TÀI CHÍNH](/bai-viet/2026-11-07-bc-b01-0-tong-quan-tai-chinh/)** và **[TỔNG QUAN DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bc-a04-0-tong-quan-doanh-so-ban-hang/)** khi cần đối chiếu nguồn.
9. Xuất riêng bảng cần dùng theo [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/); ghi kèm năm, tháng mốc, loại bảng và điều kiện lọc. Các chỉ số đang phân tích là số đọc từ báo cáo, không phải thao tác điều chỉnh doanh thu hoặc công nợ.

## 5. Giải thích các thông tin trên màn hình

- **Tháng / Doanh thu bán hàng / Doanh thu dịch vụ**: Ý nghĩa / quy tắc: Tách dòng hàng dịch vụ và hàng khác của phiếu xuất, trừ dòng khách trả tương ứng.
- **Tổng doanh thu**: Ý nghĩa / quy tắc: Doanh thu bán hàng + Doanh thu dịch vụ.
- **Giá vốn / Lợi nhuận gộp / % LN gộp/DT**: Ý nghĩa / quy tắc: Giá vốn dùng cùng nguồn Tổng quan tài chính; lãi gộp = doanh thu − giá vốn; tỷ lệ = lãi gộp ÷ doanh thu × 100, doanh thu 0 thì trả 0.
- **Khách hàng mới**: Ý nghĩa / quy tắc: Khách có lần xuất bán đầu tiên trong tháng đang xét.
- **Khách hàng quay lại**: Ý nghĩa / quy tắc: Khách mua trong tháng và đã từng xuất bán trước tháng đó.
- **Tỷ lệ mất khách (Churn)**: Ý nghĩa / quy tắc: Khách có mua tháng trước nhưng không mua tháng này ÷ số khách mua tháng trước × 100; tháng 1 so với tháng 12 năm trước.
- **Tỷ lệ khách mua hàng**: Ý nghĩa / quy tắc: Số khách có mua trong tháng ÷ tổng khách đang kích hoạt × 100.
- **Doanh thu tháng**: Ý nghĩa / quy tắc: Doanh thu riêng tháng hiện tại nếu chọn năm hiện tại, tháng 12 nếu chọn năm khác.
- **Doanh thu cộng dồn**: Ý nghĩa / quy tắc: Từ tháng 1 đến tháng mốc nêu trên.
- **% / Tổng doanh thu**: Ý nghĩa / quy tắc: Doanh thu cộng dồn từng khách / mặt hàng ÷ tổng doanh thu cộng dồn toàn bộ × 100; không chỉ tổng của Top.
- **Số đơn hàng**: Ý nghĩa / quy tắc: Đếm phiếu xuất bán, không tính phiếu khách trả.
- **Tăng/giảm so với kỳ trước**: Ý nghĩa / quy tắc: Chênh lệch doanh thu cộng dồn so cùng số tháng năm trước ÷ trị tuyệt đối doanh thu kỳ trước × 100; mẫu số 0 thì trả 0.
- **Sản lượng / Xếp hạng**: Ý nghĩa / quy tắc: Sản lượng xuất − trả cộng dồn, làm tròn nguyên; thứ hạng 1 có doanh thu cao nhất.

## 6. Kiểm tra sau khi thực hiện

Bảng hiển thị số liệu theo phạm vi đã chọn. Việc xem hoặc xuất báo cáo không tự tạo chứng từ và không ghi tăng / giảm số dư.

## 7. Những điều cần lưu ý

⚠️ Tổng doanh thu theo dòng hàng và báo cáo gộp theo tổng phiếu có thể khác về nguồn hoặc dịch vụ. Top chỉ hiển thị một số khách/hàng đứng đầu; cộng các dòng Top không bằng toàn bộ doanh thu.

## 8. Câu hỏi thường gặp

**Vì sao Top cộng không bằng tổng doanh thu?** Danh sách chỉ lấy nhóm đứng đầu; tỷ lệ vẫn dùng tổng tất cả.

**Tỷ lệ mất khách đo theo năm không?** Không; đo khách mua của tháng trước không mua tháng đang xét.

## 9. Công việc tiếp theo

Đối chiếu kết quả và lưu kỳ/phạm vi đã kiểm tra. [TỔNG QUAN TÀI CHÍNH](/bai-viet/2026-11-07-bc-b01-0-tong-quan-tai-chinh/); [TỔNG QUAN BÁO CÁO TỔNG HỢP](/bai-viet/2026-11-07-bc-b03-0-tong-quan-bao-cao-tong-hop/); [TỔNG QUAN DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bc-a04-0-tong-quan-doanh-so-ban-hang/).

## 10. Bài hướng dẫn liên quan

[TỔNG QUAN TÀI CHÍNH](/bai-viet/2026-11-07-bc-b01-0-tong-quan-tai-chinh/); [TỔNG QUAN BÁO CÁO TỔNG HỢP](/bai-viet/2026-11-07-bc-b03-0-tong-quan-bao-cao-tong-hop/); [TỔNG QUAN DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bc-a04-0-tong-quan-doanh-so-ban-hang/).
