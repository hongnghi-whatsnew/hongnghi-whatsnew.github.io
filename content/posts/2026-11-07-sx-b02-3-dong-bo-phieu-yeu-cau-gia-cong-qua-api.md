---
title: "ĐỒNG BỘ PHIẾU YÊU CẦU GIA CÔNG QUA API"
date: "2026-11-07"
summary: "Trao đổi yêu cầu gia công giữa hai hệ thống: bên đặt gửi yêu cầu Ngoài (đồng bộ API); bên nhận lấy dữ liệu từ hộp thư vào cửa sổ để kiểm tra và lưu."
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

Trao đổi yêu cầu gia công giữa hai hệ thống: bên đặt gửi yêu cầu Ngoài (đồng bộ API); bên nhận lấy dữ liệu từ hộp thư vào cửa sổ để kiểm tra và lưu. Bài này phân biệt chiều gửi/nhận, theo dõi trạng thái và gửi lại khi lỗi. Quy trình lập và tất toán riêng xem [LẬP YÊU CẦU GIA CÔNG VÀ LẤY TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-sx-b02-1-lap-yeu-cau-gia-cong-va-lay-tu-phieu-dat-hang/), [TẤT TOÁN PHIẾU YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b02-2-tat-toan-phieu-yeu-cau-gia-cong/); thao tác chung xem [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Xác định đúng phía đặt/nhận; đối tác và danh mục liên kết đã được người phụ trách thiết lập. Có quyền Đồng bộ từ API hoặc Đồng bộ lại đúng chiều cần làm. Chuẩn bị số CT gốc và thông tin người phụ trách hai bên để đối chiếu giao dịch; dùng đúng tên miền/tài khoản chi nhánh đang thực hiện.

## 2. Mở chức năng

**Sản xuất ván → Phiếu yêu cầu gia công**

## 3. Nhận biết màn hình

Hộp thư Đồng bộ từ API có khoảng ngày và bảng yêu cầu đến: Ngày, Số CT gốc, Đối tác gửi, Tên khách hàng, Thời gian nhận, Trạng thái và Lấy dữ liệu. Dòng báo gốc đã xóa không có Lấy dữ liệu. Cột Đồng bộ API trên danh sách phiếu dùng theo dõi kết quả trao đổi.

Ảnh minh họa sẽ được bổ sung sau; thao tác chung với danh sách xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/), [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

Đã mở nhánh Ngoài (đồng bộ API) và hộp thư Đồng bộ từ API với kỳ 2026. Hộp thư không có dữ liệu. Không gửi yêu cầu sang server đối tác, chưa nhận/xử lý một gói API thực tế. Tiêu đề biểu mẫu nhánh Ngoài (đồng bộ API) vẫn ghi THUÊ NGOÀI; phải chọn đúng nhánh từ menu.

![Biểu mẫu mở từ nhánh Ngoài (đồng bộ API), chưa lưu.](/posts/2026-11-07-sx-b02-3-dong-bo-phieu-yeu-cau-gia-cong-qua-api/hinh-01-20261030-sx-b02-3-form-ngoai-api.png)

![Hộp thư Đồng bộ từ API kỳ 2026 chưa có dữ liệu.](/posts/2026-11-07-sx-b02-3-dong-bo-phieu-yeu-cau-gia-cong-qua-api/hinh-02-20261030-sx-b02-3-hop-thu-api.png)

## 4. Trình tự công việc

Bên đặt lập yêu cầu Ngoài API → lưu phiếu và xếp gửi → theo dõi Đồng bộ API → bên nhận mở hộp thư, lấy vào cửa sổ → soát ánh xạ và lưu phiếu nhận → đối chiếu mã gốc hai bên.

Nếu lỗi: xác định phiếu đã lưu, đọc lỗi → xử lý nguyên nhân → Đồng bộ lại ở đúng chiều gửi → tải lại và đối chiếu kết quả; không tạo lại phiếu.

## 5. Thực hiện trên phần mềm

1. Xác định đang ở bên **đặt gia công** hay **nhận gia công**. Bên đặt tạo yêu cầu **Ngoài (đồng bộ API)** theo [LẬP YÊU CẦU GIA CÔNG VÀ LẤY TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-sx-b02-1-lap-yeu-cau-gia-cong-va-lay-tu-phieu-dat-hang/); bên nhận dùng **Đồng bộ từ API** để lấy yêu cầu đến. Không tạo lại thủ công một yêu cầu đã nhận chỉ vì chưa thấy trạng thái mới.
2. Bên nhận mở **ĐỒNG BỘ TỪ API - PHIẾU YÊU CẦU GIA CÔNG**, chọn khoảng ngày và đối chiếu số CT gốc, đối tác gửi, khách hàng cùng trạng thái. Dòng cảnh báo **HN đã xóa phiếu gốc** chỉ để đối chiếu, không được lấy lại.
3. Chọn **Lấy dữ liệu** hoặc nhấp đúp dòng còn hiệu lực. Kiểm tra phiếu đã điền bên gia công, kho và mã gốc; đối chiếu các mã hàng, số mặt và yêu cầu gia công. Thiếu đối chiếu danh mục thì liên hệ người phụ trách để hoàn thiện đúng, không thay bằng một mặt hàng gần giống.
4. Hoàn thiện nguyên liệu/lô và thông tin còn thiếu theo [LẬP YÊU CẦU GIA CÔNG VÀ LẤY TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-sx-b02-1-lap-yeu-cau-gia-cong-va-lay-tu-phieu-dat-hang/) rồi ghi nhận. Lấy dữ liệu vào cửa sổ chưa đồng nghĩa đã tạo phiếu; cần kiểm tra mã phiếu sau ghi nhận.
5. Với phiếu gửi đi, theo dõi **Đồng bộ API** riêng với trạng thái nhập. Khi **Lỗi đồng bộ**, rê chuột đọc lỗi rồi dùng **Đồng bộ lại** nếu có quyền. Khi hiện **Đang đồng bộ với đối tác, vui lòng đợi...**, chờ kết quả của lần bấm. Thông báo **Đã đồng bộ lại** xác nhận yêu cầu gửi lại được tiếp nhận để xử lý; chưa chứng minh đối tác đã nhận hoặc ghi nhận nghiệp vụ. Bấm **Tải lại**, xem cột **Đồng bộ API** và đối chiếu mã chứng từ với người phụ trách bên nhận. Không bấm lặp hoặc tạo phiếu mới chỉ để thúc gửi.
6. Đối chiếu số CT gốc và phiếu đã tạo ở hai bên qua người phụ trách. Khi bên gửi đã xóa gốc, xử lý phiếu nhận theo quy trình được chấp thuận; cảnh báo không tự hủy phiếu nhận.

## 6. Giải thích các thông tin trên màn hình

- **Ngày / khoảng ngày**: Cách nhập, cách đọc và quy tắc: Lọc yêu cầu đến theo ngày để tìm giao dịch, mặc định hộp thư gợi ý hôm nay; không phải ngày tạo phiếu nội bộ.
- **Số CT gốc**: Cách nhập, cách đọc và quy tắc: Số chứng từ phía gửi, dùng đối chiếu yêu cầu đến với giao dịch ở đối tác.
- **Đối tác gửi**: Cách nhập, cách đọc và quy tắc: Mã đối tác chuyển yêu cầu; kiểm tra đúng bên cần nhận gia công.
- **Tên khách hàng**: Cách nhập, cách đọc và quy tắc: Tên khách hàng kèm yêu cầu đến; khác với đối tác gửi.
- **Loại**: Cách nhập, cách đọc và quy tắc: Loại dữ liệu đến; luồng này là Yêu cầu gia công.
- **Thời gian nhận**: Cách nhập, cách đọc và quy tắc: Thời điểm dữ liệu vào hộp thư, khác với ngày chứng từ gốc.
- **Trạng thái**: Cách nhập, cách đọc và quy tắc: Chờ đồng bộ hoặc cảnh báo gốc đã xóa; dòng gốc đã xóa không cho lấy dữ liệu.
- **Lấy dữ liệu**: Cách nhập, cách đọc và quy tắc: Đưa yêu cầu vào cửa sổ để kiểm tra trước lưu, chưa tạo phiếu ngay.
- **Đồng bộ API / nội dung lỗi**: Cách nhập, cách đọc và quy tắc: Trạng thái trao đổi trên phiếu; khi báo lỗi, đọc chi tiết và xử lý trước Đồng bộ lại.

- **Chưa đồng bộ**: Cách đọc / việc cần làm: Chưa có kết quả thành công hiển thị; tải lại và đối chiếu với người phụ trách, không mặc định phiếu chưa được gửi.
- **Đã đồng bộ**: Cách đọc / việc cần làm: Đã có kết quả trao đổi thành công; vẫn đối chiếu chứng từ và số liệu nghiệp vụ ở hai bên.
- **Lỗi đồng bộ**: Cách đọc / việc cần làm: Rê chuột vào nhãn để đọc lỗi. Sửa nguyên nhân qua người phụ trách, rồi chọn Đồng bộ lại nếu có quyền.
- **Nhận từ API**: Cách đọc / việc cần làm: Phiếu thuộc chiều nhận; không dùng Đồng bộ lại để phát ngược yêu cầu nguồn.

## 7. Kiểm tra sau khi thực hiện

Bên nhận có phiếu được tạo từ yêu cầu đến sau ghi nhận; bên gửi theo dõi được trạng thái trao đổi. Đối chiếu mã gốc, mã nội bộ và trạng thái ở hai bên trước kết thúc.

## 8. Những điều cần lưu ý

Chỉ gửi ra ngoài yêu cầu do bên đặt khởi tạo cho đúng đối tác; yêu cầu đã **Nhận từ API** không phát ngược như một yêu cầu mới. Đối tác, kết nối và danh mục phải do người được giao cấu hình; không tự sửa địa chỉ hoặc thông tin kết nối để vượt lỗi.

Thông báo **Đã đồng bộ lại** xác nhận yêu cầu gửi lại được tiếp nhận để xử lý; chưa chứng minh đối tác đã nhận hoặc ghi nhận nghiệp vụ. Bấm **Tải lại**, xem cột **Đồng bộ API** và đối chiếu mã chứng từ với người phụ trách bên nhận. Không bấm lặp hoặc tạo phiếu mới chỉ để thúc gửi.

## 9. Vướng mắc thường gặp

- **Không có dòng đến cần lấy**: Cách xử lý: Kiểm tra khoảng ngày và đúng chiều gửi/nhận; hộp thư này liệt kê yêu cầu đến chờ xử lý, không phải toàn bộ phiếu đã tạo.
- **HN đã xóa phiếu gốc**: Cách xử lý: Dòng cảnh báo không cho lấy lại. Đối chiếu phiếu đã nhận với bên gửi và xử lý theo thỏa thuận.
- **Y/c trống sau Lấy dữ liệu**: Cách xử lý: Một số tên định mức phía gửi chưa khớp danh mục bên nhận; chọn đúng yêu cầu sau đối chiếu người phụ trách trước lưu.
- **Lỗi đồng bộ**: Cách xử lý: Đọc nội dung lỗi, xử lý căn cứ mã gốc/danh mục/kết nối rồi Đồng bộ lại khi có quyền; không nhân bản phiếu.
- **Phiếu này không thuộc diện đồng bộ với đối tác, hoặc đối tác chưa được cấu hình để nhận.**: Cách xử lý: Kiểm tra đúng loại Ngoài API, đúng chiều gửi, liên kết đơn vị gia công–đối tác và cấu hình nhận. Yêu cầu nhận từ đối tác không gửi ngược; chuyển người quản trị kết nối đối chiếu, không sao chép phiếu để thử.
- **Hộp thư trống sau khi báo lỗi tải**: Cách xử lý: Chưa kết luận không có dữ liệu; lưu câu báo, kỳ và mã gốc để người phụ trách kiểm tra.

## 10. Câu hỏi thường gặp

**Lấy dữ liệu đã tạo phiếu ngay chưa?** Chưa; dữ liệu mới vào cửa sổ, cần kiểm tra và ghi nhận. Theo dõi mã phiếu sau lưu để tránh tạo lại.

## 11. Công việc tiếp theo

Chuyển chứng từ cho bộ phận tiếp nhận; theo dõi tiến độ bằng các báo cáo của cùng quy trình trong phần c Thống kê sản xuất.

## 12. Bài hướng dẫn liên quan

[TỔNG QUAN PHIẾU YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b02-0-tong-quan-phieu-yeu-cau-gia-cong/) — Phiếu yêu cầu gia công; [LẬP YÊU CẦU GIA CÔNG VÀ LẤY TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-sx-b02-1-lap-yeu-cau-gia-cong-va-lay-tu-phieu-dat-hang/) — Lập yêu cầu gia công và lấy từ phiếu đặt hàng; [TẤT TOÁN PHIẾU YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b02-2-tat-toan-phieu-yeu-cau-gia-cong/) — Tất toán phiếu yêu cầu gia công; [IN PHIẾU YÊU CẦU, XUẤT HÀNG TRƠN VÀ TẤT TOÁN](/bai-viet/2026-11-07-sx-b02-4-in-phieu-yeu-cau-xuat-hang-tron-va-tat-toan/) — In phiếu yêu cầu, xuất hàng trơn và tất toán; [LẬP YÊU CẦU GIA CÔNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-sx-b02-5-lap-yeu-cau-gia-cong-tu-phieu-dat-hang/) — Lập yêu cầu gia công từ phiếu đặt hàng.

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
