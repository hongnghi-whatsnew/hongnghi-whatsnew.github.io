---
title: "TỔNG QUAN Y/C GIA CÔNG CHI TIẾT"
date: "2026-11-07"
summary: "Theo dõi tiến độ từng dòng yêu cầu gia công ván, lượng tất toán, đã nhập và đã chuyển về kho."
module: "Sản xuất"
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

Theo dõi tiến độ từng dòng yêu cầu gia công ván, lượng tất toán, đã nhập và đã chuyển về kho.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Biết khoảng ngày yêu cầu và mã phiếu/dòng hàng cần theo dõi. Có dữ liệu tất toán, nhập thành phẩm và chuyển kho liên kết để đối chiếu tiến độ; thống nhất đơn vị trước so lượng.
- hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; dùng đúng hệ thống của đơn vị, không chuyển chi nhánh trong cùng phiên.

## 2. Mở chức năng

**Thống kê sản xuất → Y/c gia công chi tiết**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![THỐNG KÊ - CHI TIẾT Y/C GIA CÔNG — chưa có dữ liệu theo bộ lọc, chỉ xem.](/posts/2026-11-07-sx-c03-0-tong-quan-y-c-gia-cong-chi-tiet/ui-20261026-sx-c03-ds-overview.png)

Các nhóm số liệu và điều khiển được giải thích ở phần “Giải thích các thông tin trên màn hình”. Các cột là thông tin đọc từ chứng từ, không nhập bù số trên báo cáo.

Ảnh đang ở backlog. Tìm/lọc/cột xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); chỉ xuất dữ liệu theo [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/) khi màn có nút và tài khoản có quyền.

## 4. Trình tự công việc

```text
Chốt nguồn và phạm vi báo cáo
       ↓
Kiểm tra mã hàng, đơn vị, ngày chứng từ
       ↓
Đọc các lượng/chỉ số theo phần “Giải thích các thông tin trên màn hình”
       ↓
Đối chiếu chứng từ nguồn và xử lý sai lệch
```

## 5. Thực hiện trên phần mềm

1. Chọn khoảng **ngày yêu cầu gia công** và tìm mã phiếu cần theo dõi. Một phiếu có nhiều dòng hàng; ghép thêm khách hàng, hàng trơn, yêu cầu và số mặt để chọn đúng dòng.
2. Đối chiếu **SL** với **Tất toán**, **SL đã nhập**, **SL chưa nhập** theo từng dòng. Tất toán là phần dừng thực hiện, không phải phần nhập kho.
3. Nếu một yêu cầu nhập nhiều lần, mở các phiếu nhập liên quan để giải trình tổng đã nhập. Báo cáo theo dõi tiến độ của yêu cầu trong khoảng đã chọn; các lần nhập sau khoảng ngày vẫn có thể góp vào tiến độ đó.
4. Rà **Kho nhập**, **SL đã chuyển kho**, **SL chưa chuyển kho**. So kho nhận thực tế với **Y/c chuyển về kho** để biết hàng đã nhận nhưng chưa chuyển tiếp đúng nơi yêu cầu.
5. Lập bảng đối chiếu theo mã yêu cầu + dòng hàng/Đvt, liệt kê từng phiếu nhập/chuyển và ngày thực tế. Khi số còn lại âm, trống hoặc không khớp, ghi mã yêu cầu/dòng hàng và kiểm tra nhập liên kết, tất toán, đơn vị ở chứng từ nguồn. Sửa nguồn theo thẩm quyền rồi tải lại; báo cáo này không dùng nhập bù số còn lại.

## 6. Giải thích các thông tin trên màn hình

- **Ngày phát sinh**: Ý nghĩa, phạm vi và cách kiểm tra: Ngày phiếu yêu cầu gia công; khoảng ngày báo cáo lọc theo ngày này, không phải ngày nhận thành phẩm.
- **Mã phiếu**: Ý nghĩa, phạm vi và cách kiểm tra: Mã yêu cầu gia công nguồn. Một phiếu nhiều dòng hàng sẽ xuất hiện nhiều dòng; không đếm số dòng là số phiếu.
- **Khách hàng**: Ý nghĩa, phạm vi và cách kiểm tra: Khách hàng gắn dòng yêu cầu; nhận diện KH kèm số và tên rút gọn/tên đầy đủ.
- **Kho gia công**: Ý nghĩa, phạm vi và cách kiểm tra: Kho gia công trên phiếu yêu cầu, khác kho đã nhập thực tế và kho yêu cầu chuyển về.
- **Ghi chú**: Ý nghĩa, phạm vi và cách kiểm tra: Ghi chú chung của phiếu yêu cầu nguồn, không phải trạng thái hoàn thành từng dòng.
- **Hàng trơn**: Ý nghĩa, phạm vi và cách kiểm tra: Tên hàng trơn đầu vào cần gia công của dòng yêu cầu; dùng ghép yêu cầu/số mặt và thành phẩm đầu ra.
- **Đvt**: Ý nghĩa, phạm vi và cách kiểm tra: Đơn vị của dòng yêu cầu. Kiểm tra tính tương đương với đơn vị nhập trước so đã nhập/chưa nhập.
- **Yêu cầu**: Ý nghĩa, phạm vi và cách kiểm tra: Các tên định mức gia công trên dòng; nhiều yêu cầu được ghép thành một ô, không tách thành nhiều lần nhập.
- **Số mặt**: Ý nghĩa, phạm vi và cách kiểm tra: Số mặt yêu cầu của dòng. Không tự nhân cột SL với Số mặt khi đọc lượng còn phải nhập.
- **SL**: Ý nghĩa, phạm vi và cách kiểm tra: Số lượng yêu cầu gốc của dòng; phân biệt với lượng còn lại sau tất toán và đã nhập.
- **Tất toán**: Ý nghĩa, phạm vi và cách kiểm tra: Phần lượng yêu cầu đã dừng/không tiếp tục thực hiện, làm giảm số còn chờ. Không phải số lượng đã nhập hoặc số đã thanh toán tiền.
- **Thành phẩm**: Ý nghĩa, phạm vi và cách kiểm tra: Thành phẩm gốc dự kiến nhận của dòng yêu cầu, không phải tập mã hàng lỗi.
- **SL đã nhập**: Ý nghĩa, phạm vi và cách kiểm tra: Lượng đã ghi nhận nhập liên kết với dòng yêu cầu, đọc cùng hồ sơ nhập thực tế khi có nhiều lần nhận.
- **SL chưa nhập**: Ý nghĩa, phạm vi và cách kiểm tra: SL − Tất toán − SL đã nhập. Báo cáo không tự chặn kết quả âm; âm cần đối chiếu nhập vượt/tất toán/đơn vị, không sửa số trực tiếp trên báo cáo.
- **Kho nhập**: Ý nghĩa, phạm vi và cách kiểm tra: Các kho nhận thực tế từ phiếu nhập liên kết; có thể ghép nhiều kho, không nhất thiết chỉ kho dự kiến ban đầu.
- **SL đã chuyển kho**: Ý nghĩa, phạm vi và cách kiểm tra: Tổng lượng chuyển từ các dòng nhập liên kết của yêu cầu, không chỉ phiếu chuyển phát sinh trong khoảng ngày yêu cầu đang lọc.
- **SL chưa chuyển kho**: Ý nghĩa, phạm vi và cách kiểm tra: SL đã nhập − SL đã chuyển kho của tập nhập liên kết. Ô thiếu dữ liệu không tự hiểu là 0.
- **Y/c chuyển về kho**: Ý nghĩa, phạm vi và cách kiểm tra: Kho chuyển về được chỉ định trên dòng yêu cầu, là nơi dự kiến nhận tiếp; cần so với kho chuyển thực tế.
- **Người tạo / Thời gian tạo**: Ý nghĩa, phạm vi và cách kiểm tra: Người lập và thời điểm tạo phiếu yêu cầu; khác Ngày phát sinh dùng lọc báo cáo.

**Cách tính / ý nghĩa số liệu:**

SL chưa nhập = SL yêu cầu − SL tất toán − SL đã nhập.

SL chưa chuyển kho = SL đã nhập − SL đã chuyển kho. Kho nhập và lượng đã chuyển được gom từ các phiếu nhập liên kết với dòng yêu cầu, không giới hạn theo ngày nhập trong khoảng ngày yêu cầu đang chọn. Các kết quả không được tự ép về 0; số âm/trống phải rà nguồn.

Ví dụ tính tay với các lượng đã thống nhất cùng Đvt, không phải kiểm tra thực tế ERP: yêu cầu 100, tất toán 10, đã nhập 40, đã chuyển 20 → SL chưa nhập 50, SL chưa chuyển 20. Nếu yêu cầu thuộc tháng 10 nhưng 40 đã nhập ở tháng 11, báo cáo theo ngày yêu cầu tháng 10 vẫn có thể bao gồm tiến độ nhập đó; không dùng 40 như tổng nhập riêng tháng 10.

## 7. Kiểm tra sau khi thực hiện

Xác định từng dòng yêu cầu còn chờ nhập hay còn chờ chuyển về kho, đồng thời có mã phiếu và kho thực nhận để truy nguồn. Việc tra cứu không tự tất toán hoặc tạo phiếu nhập/chuyển.

## 8. Những điều cần lưu ý

⚠️ Khoảng ngày lọc ngày yêu cầu. Không dùng báo cáo này làm tổng nhập hoặc tổng chuyển kho phát sinh trong kỳ; các số tiến độ lấy từ liên kết của yêu cầu. Tất toán không phải thanh toán tiền.

## 9. Vướng mắc thường gặp

Các tình huống đối chiếu:

- **Yêu cầu cũ có lượng nhập mới**: đúng với báo cáo tiến độ theo yêu cầu; đối chiếu ngày phiếu nhập liên kết thay vì thu hẹp khoảng lọc theo ngày nhập.
- **SL chưa nhập âm hoặc SL chưa chuyển trống**: kiểm tra lượng nhập vượt, phần tất toán và dữ liệu chuyển liên kết/đơn vị; không coi trống là 0.
- **Kho nhập khác Y/c chuyển về kho**: phân biệt kho đã nhận thực tế với kho dự kiến chuyển tiếp; rà phiếu chuyển trước kết luận sai kho.

## 10. Câu hỏi thường gặp

**Vì sao nhập phát sinh ngoài khoảng ngày vẫn được tính?** Khoảng chọn lấy theo ngày yêu cầu; tiến độ đọc các lần nhập/chuyển liên kết của yêu cầu đó.

**Tất toán có phải đã nhận đủ hàng không?** Không. Đó là lượng không tiếp tục thực hiện; phải đọc riêng SL đã nhập.

## 11. Công việc tiếp theo

Đối chiếu các chứng từ có chênh lệch và thống nhất với bộ phận kho/sản xuất/kế toán trước khi điều chỉnh.

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN PHIẾU YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b02-0-tong-quan-phieu-yeu-cau-gia-cong/) — phiếu yêu cầu nguồn
- [TẤT TOÁN PHIẾU YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b02-2-tat-toan-phieu-yeu-cau-gia-cong/) — tất toán phần dừng thực hiện
- [TỔNG QUAN NHẬP GIA CÔNG CHI TIẾT](/bai-viet/2026-11-07-sx-c02-0-tong-quan-nhap-gia-cong-chi-tiet/) — các lần nhập gia công

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
