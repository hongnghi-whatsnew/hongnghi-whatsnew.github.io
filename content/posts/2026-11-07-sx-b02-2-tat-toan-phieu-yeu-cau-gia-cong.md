---
title: "TẤT TOÁN PHIẾU YÊU CẦU GIA CÔNG"
date: "2026-11-07"
summary: "Chốt phần yêu cầu gia công không tiếp tục thực hiện trên phiếu đã có, kèm phần nguyên liệu liên quan."
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

Chốt phần yêu cầu gia công không tiếp tục thực hiện trên phiếu đã có, kèm phần nguyên liệu liên quan. Tất toán làm thay đổi lượng còn phải nhận và số liệu của yêu cầu; không thay phiếu nhập hàng thực tế. Thao tác lưu chung xem [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/), đối chiếu tiến độ xem [TỔNG QUAN Y/C GIA CÔNG CHI TIẾT](/bai-viet/2026-11-07-sx-c03-0-tong-quan-y-c-gia-cong-chi-tiet/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Có quyền Tất toán và phiếu yêu cầu còn phần cần chốt dừng; đã đối chiếu các lần nhập đạt/lỗi, lượng còn lại và nguyên liệu/lô liên quan. Có thống nhất nghiệp vụ về phần dừng. Đối chiếu Đvt/tỷ lệ quy đổi trước nhập lượng.

## 2. Mở chức năng

**Sản xuất ván → Phiếu yêu cầu gia công**

## 3. Nhận biết màn hình

Chế độ Tất toán dùng phiếu yêu cầu đã có: thông tin đầu phiếu và quy cách hàng chỉ xem, cột SL tất toán cho nhập lượng chốt. Bảng nguyên liệu/lô có phần lượng tất toán riêng. Đơn giá/VAT cần kiểm tra cùng thành tiền trước ghi nhận.

Ảnh minh họa sẽ được bổ sung sau; thao tác chung với danh sách xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/), [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

Đã mở chế độ TẤT TOÁN của yêu cầu lịch sử YC00113042 ngày 19/06/2026, kho và hàng có tên kiểm tra thực tế. Không sửa số lượng và không Lưu lại; ảnh chứng minh biểu mẫu, chưa chứng minh tất toán thành công.

![Biểu mẫu tất toán yêu cầu YC00113042, chỉ mở xem.](/posts/2026-11-07-sx-b02-2-tat-toan-phieu-yeu-cau-gia-cong/hinh-01-20261030-sx-b02-2-form-tat-toan.png)

## 4. Trình tự công việc

Đối chiếu phiếu và các lần nhập → thống nhất lượng dừng → mở Tất toán → nhập tổng SL tất toán mong muốn theo dòng → hoàn thiện nguyên liệu/lô → kiểm số trước/sau và lưu → mở lại phiếu, đối chiếu tiến độ → in phần đã chốt nếu cần. Mở/in mẫu tất toán không thay bước lưu.

## 5. Thực hiện trên phần mềm

1. Đối chiếu từng dòng: lượng yêu cầu, lượng đã nhập đạt/lỗi và phần không còn tiếp tục gia công; thống nhất lượng dừng với người phụ trách trước chọn **Tất toán**.
2. Trên phiếu, kiểm tra mã, bên gia công và các dòng chỉ xem; ghi lại mức tất toán hiện có. Nhập **tổng SL tất toán mong muốn** cho từng dòng, không phải lượng cộng thêm của lần thao tác. Ví dụ cùng Đvt, tỷ lệ 1 và đủ phần còn lại: đã chốt 10, cần chốt thêm 5 thì mức mới là 15, không nhập 5. Không nhập lượng đã nhận vào đây hoặc sửa lượng yêu cầu để giả làm tất toán.
3. Ô tất toán kiểm giá trị không âm đến Số lượng yêu cầu; khi lưu còn kiểm một giới hạn có dùng tỷ lệ quy đổi và lượng đã nhập. Hai cách kiểm chưa có một quy tắc đơn vị thống nhất đã được nghiệm thu. Với tỷ lệ khác 1 hoặc lượng khác Đvt, dừng để người phụ trách đối chiếu trước lưu; không đổi tỷ lệ, dùng số âm hoặc lấy giá trị vừa đủ qua kiểm tra làm căn cứ nghiệp vụ.
4. Khi có bảng vật tư/nguyên liệu, khai phần tất toán thường và phần tất toán theo lô. Tổng hai phần phải đúng lượng tất toán cần phân bổ, không âm, không vượt và không thiếu. Đây là việc chốt nguyên liệu liên quan, không phải nhận hàng đạt.
5. Kiểm tra giá gia công và thành tiền trước **Lưu lại**. Ngày yêu cầu được khóa trong chế độ này; không tìm một ô ngày tất toán để tự đặt ngày tương lai. Nếu báo thời gian tất toán không hợp lệ, kiểm tra ngày yêu cầu và trao đổi người phụ trách.
6. Mở lại đúng mã phiếu để kiểm mức tất toán mới và nguyên liệu/lô; đối chiếu thành tiền đã lưu, trạng thái nhập và phần còn chờ ở SX-C03. In chứng từ tất toán theo [IN PHIẾU YÊU CẦU, XUẤT HÀNG TRƠN VÀ TẤT TOÁN](/bai-viet/2026-11-07-sx-b02-4-in-phieu-yeu-cau-xuat-hang-tron-va-tat-toan/) sau khi số liệu đã được ghi nhận.

## 6. Giải thích các thông tin trên màn hình

- **Mã/ngày yêu cầu**: Cách nhập, cách đọc và quy tắc: Chỉ xem nguồn đang tất toán; ngày yêu cầu không được đổi ở chế độ này.
- **Số lượng yêu cầu**: Cách nhập, cách đọc và quy tắc: Chỉ xem tổng lượng công việc ban đầu theo Đvt dòng, là căn cứ đối chiếu chứ không phải ô nhập tất toán.
- **SL đã nhập**: Cách nhập, cách đọc và quy tắc: Chỉ xem lượng đã ghi nhận từ các lần nhập thành phẩm, có cả lượng đạt và lỗi theo cách hệ thống tổng hợp; không nhập lại số đã nhận vào đây.
- **SL tất toán**: Cách nhập, cách đọc và quy tắc: Tổng phần dừng muốn lưu trên dòng, thay mức đang có; không tự cộng với mức cũ. Không phải số đã nhận thành phẩm hoặc tiền thanh toán.
- **Nguyên liệu thường / theo lô**: Cách nhập, cách đọc và quy tắc: Đối chiếu phần giữ gia công trước chốt; không nhập lượng nguyên liệu theo đơn vị của thành phẩm khi khác Đvt.
- **SL tất toán nguyên liệu / theo lô**: Cách nhập, cách đọc và quy tắc: Nhập phần chốt theo từng nguồn thường/lô; hai phần phải đủ lượng cần tất toán, không âm.
- **Đơn giá / VAT / Thành tiền**: Cách nhập, cách đọc và quy tắc: Kiểm tra giá đã gồm VAT; sau ghi nhận tất toán, thành tiền lưu = (lượng yêu cầu − lượng tất toán) × đơn giá × hệ số. Số tạm trên lưới có thể chưa phản ánh phép trừ tất toán, phải đối chiếu số đã lưu.

## 7. Kiểm tra sau khi thực hiện

SL tất toán và phần nguyên liệu tất toán liên quan được ghi nhận, trạng thái yêu cầu được tính lại theo lượng còn phải nhận. Đây là chốt phần dừng, không phải phiếu nhập lượng đạt.

## 8. Những điều cần lưu ý

SL tất toán là phần dừng công việc, không tự tạo phiếu nhập thành phẩm. Nếu cần giảm hoặc hủy mức đã chốt, chuyển người phụ trách xác nhận phương án và các lần nhận liên quan trước thực hiện; bài này không hướng dẫn nhập âm để hoàn tác. Không tất toán vượt phần chưa nhận; phải đối chiếu riêng quy đổi và nguyên liệu/lô. Không tự tạo điều chỉnh khác để bỏ qua thông báo giới hạn.

## 9. Vướng mắc thường gặp

- **Tất toán vượt mức cho phép**: Cách xử lý: Đối chiếu phần chưa nhập và tỷ lệ quy đổi; không lấy toàn bộ lượng yêu cầu nếu đã nhận một phần.
- **Số lượng tất toán cho phép 0 hoặc …**: Cách xử lý: Nhập số không âm trong phạm vi số lượng dòng và tiếp tục kiểm tra phần chưa nhập; không dùng số âm để hoàn nhập.
- **Số lượng tất toán chưa đủ / vượt mức / không hợp lệ ở vật tư**: Cách xử lý: Tổng tất toán thường + tất toán theo lô phải đúng lượng cần phân bổ; sửa từng dòng/lô và không dùng số âm.
- **Thời gian tất toán không hợp lệ**: Cách xử lý: Kiểm tra ngày yêu cầu đang vượt ngày hiện tại; trao đổi người phụ trách, không tự đổi chứng từ lịch sử.

## 10. Câu hỏi thường gặp

**Tất toán có nghĩa đã nhận thành phẩm không?** Không. Đây là phần chốt dừng, còn SL đã nhập lấy từ phiếu nhận thực tế; phải đối chiếu riêng cả hai.

## 11. Công việc tiếp theo

Chuyển chứng từ cho bộ phận tiếp nhận; theo dõi tiến độ bằng các báo cáo của cùng quy trình trong phần c Thống kê sản xuất.

## 12. Bài hướng dẫn liên quan

[TỔNG QUAN PHIẾU YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b02-0-tong-quan-phieu-yeu-cau-gia-cong/) — Phiếu yêu cầu gia công; [LẬP YÊU CẦU GIA CÔNG VÀ LẤY TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-sx-b02-1-lap-yeu-cau-gia-cong-va-lay-tu-phieu-dat-hang/) — Lập yêu cầu gia công và lấy từ phiếu đặt hàng; [ĐỒNG BỘ PHIẾU YÊU CẦU GIA CÔNG QUA API](/bai-viet/2026-11-07-sx-b02-3-dong-bo-phieu-yeu-cau-gia-cong-qua-api/) — Đồng bộ phiếu yêu cầu gia công qua API; [IN PHIẾU YÊU CẦU, XUẤT HÀNG TRƠN VÀ TẤT TOÁN](/bai-viet/2026-11-07-sx-b02-4-in-phieu-yeu-cau-xuat-hang-tron-va-tat-toan/) — In phiếu yêu cầu, xuất hàng trơn và tất toán; [LẬP YÊU CẦU GIA CÔNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-sx-b02-5-lap-yeu-cau-gia-cong-tu-phieu-dat-hang/) — Lập yêu cầu gia công từ phiếu đặt hàng.

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
