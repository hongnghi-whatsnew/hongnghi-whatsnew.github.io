---
title: "LẬP YÊU CẦU GIA CÔNG TỪ PHIẾU ĐẶT HÀNG"
date: "2026-11-07"
summary: "Chọn các dòng đơn đặt hàng còn chờ sản xuất vào yêu cầu gia công, giữ liên kết khách hàng và dòng đơn nguồn để kiểm tra lượng đã yêu cầu/còn lại."
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

Chọn các dòng đơn đặt hàng còn chờ sản xuất vào yêu cầu gia công, giữ liên kết khách hàng và dòng đơn nguồn để kiểm tra lượng đã yêu cầu/còn lại. Bài này tập trung lấy nguồn đơn; cách nhập giá, nguyên liệu và lập yêu cầu chung xem [LẬP YÊU CẦU GIA CÔNG VÀ LẤY TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-sx-b02-1-lap-yeu-cau-gia-cong-va-lay-tu-phieu-dat-hang/), thao tác lưu chung xem [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Có đơn vị gia công đã gắn đúng kho, danh mục hàng/Đvt, các yêu cầu hoặc định mức và số mặt phù hợp. Xác định loại Tại kho/Ngoài/đồng bộ, trách nhiệm cấp nguyên liệu và kho hàng trơn; khi lấy đơn hàng phải có phần còn chờ sản xuất. Có quyền tạo/cập nhật theo thao tác; kiểm tra nguồn chưa có phát sinh nhập trước sửa.

## 2. Mở chức năng

**Sản xuất ván → Phiếu yêu cầu gia công**

## 3. Nhận biết màn hình

Danh sách có ngày/mã phiếu, loại Yêu cầu G/C, kho gia công, kho xuất hàng trơn, Đồng bộ API và Trạng thái nhập. Khi mở phiếu: đầu phiếu xác định đơn vị/kho; bảng chi tiết xác định hàng, Y/c, số mặt, số mặt TP, thành phẩm, lượng yêu cầu/đã nhập/tất toán và giá.

Ảnh minh họa sẽ được bổ sung sau; thao tác chung với danh sách xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/), [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

Đã mở TỪ PHIẾU ĐẶT HÀNG trong yêu cầu Tại kho. Cửa sổ DANH SÁCH - HÀNG HOÁ CHỜ SẢN XUẤT hiển thị 27 mục lịch sử 2022–2023 dù kỳ chọn là 2026; cần kiểm tra lại hiệu lực bộ lọc ngày. Chưa chọn dòng, chưa Đồng ý, chưa lưu yêu cầu.

![Hàng hóa chờ sản xuất đang trả dữ liệu lịch sử ngoài kỳ đã chọn.](/posts/2026-11-07-sx-b02-5-lap-yeu-cau-gia-cong-tu-phieu-dat-hang/hinh-01-20261030-sx-b02-5-chon-nguon.png)

## 4. Trình tự công việc

Đơn đặt còn chờ sản xuất → mở yêu cầu đúng loại/đơn vị → TỪ PHIẾU ĐẶT HÀNG → kiểm ngày, mã đơn, khách và lượng còn lại → tick dòng, Đồng ý → kiểm các dòng vừa thêm → hoàn thiện giá/nguyên liệu → lưu yêu cầu → tra mã mới và lượng đã yêu cầu của đơn nguồn.

## 5. Thực hiện trên phần mềm

1. Xác định đơn đặt hàng, khách hàng và phần còn chờ sản xuất. Chọn đúng loại yêu cầu, nhập ngày, đơn vị gia công và kiểm tra kho.
2. Tại **TỪ PHIẾU ĐẶT HÀNG**, kiểm tra từng **Ngày đặt hàng / Mã phiếu** trong **DANH SÁCH - HÀNG HOÁ CHỜ SẢN XUẤT**. Quan sát 30/10 có dòng ngoài kỳ chọn; chưa coi khoảng ngày là bảo đảm loại hết đơn cũ. Lọc/tìm đúng mã, tick những dòng cần lấy và bấm **Đồng ý**; không chọn tất cả chỉ vì đã chọn đúng kỳ. Đối chiếu hàng trơn, Y/c, số mặt, số mặt TP, khách hàng và lượng còn chờ.
3. Khi nhận dòng, hệ thống gợi ý số lượng = lượng đặt − lượng tất toán của đơn − lượng đã yêu cầu. Dòng đã có trong phiếu hiện tại không được thêm lại cùng nguồn; đây không phải cách gộp các đơn giống tên hàng.
4. Kiểm tra thông tin kế thừa: Đvt/tỷ lệ quy đổi, tên thành phẩm, khách hàng, kho chuyển về và ghi chú. Dòng mới lấy nguồn được đặt hệ số 1; ngày nhận dự kiến gợi ý bằng Ngày yêu cầu + 2 ngày, phải kiểm tra theo cam kết thực tế. Có thể yêu cầu một phần lượng còn lại nhưng không vượt phần nguồn cho phép; kiểm tra lại nếu một người khác vừa lập yêu cầu cho cùng đơn.
5. Hoàn thiện giá, VAT, cờ xuất nguyên liệu cùng định mức/lô theo [LẬP YÊU CẦU GIA CÔNG VÀ LẤY TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-sx-b02-1-lap-yeu-cau-gia-cong-va-lay-tu-phieu-dat-hang/). Dòng lấy từ đơn hàng không được **Nhân đôi**; nếu cần thêm nguồn thì chọn đúng dòng đơn còn lại, không bỏ liên kết bằng cách tạo bản sao.
6. Sau ghi nhận, đối chiếu lượng đã yêu cầu của đơn nguồn và lượng trên phiếu mới; không coi đây là đã nhập thành phẩm hay hoàn tất đơn hàng.

## 6. Giải thích các thông tin trên màn hình

- **Ngày đặt hàng / Mã phiếu**: Cách nhập, cách đọc và quy tắc: Chỉ xem nguồn đơn cần lập yêu cầu; kiểm tra đúng khách hàng và đợt đặt hàng.
- **Số lượng trên danh sách chờ**: Cách nhập, cách đọc và quy tắc: Lượng đặt trừ tất toán đơn và lượng đã yêu cầu; là gợi ý trước nhận vào phiếu, có thể thay đổi theo các yêu cầu phát sinh.
- **Trạng thái đơn**: Cách nhập, cách đọc và quy tắc: Đối chiếu phần đã lên kế hoạch/còn chờ; không coi trạng thái yêu cầu gia công là đã nhận hàng.
- **NGÀY YÊU CẦU**: Cách nhập, cách đọc và quy tắc: Bắt buộc chọn ngày lập yêu cầu, mặc định hôm nay. Ngày được khóa trong chế độ Tất toán.
- **ĐƠN VỊ GIA CÔNG**: Cách nhập, cách đọc và quy tắc: Bắt buộc chọn đơn vị thực hiện; chọn đơn vị sẽ điền Kho gia công theo thiết lập của đơn vị.
- **KHO GIA CÔNG**: Cách nhập, cách đọc và quy tắc: Bắt buộc có, chỉ xem theo đơn vị gia công; nếu chưa có kho phải kiểm tra thiết lập đơn vị thay vì nhập tên kho vào ghi chú.
- **MÃ PHIẾU**: Cách nhập, cách đọc và quy tắc: Chỉ xem mã hệ thống cấp khi ghi nhận; dùng đối chiếu đúng phiếu trên danh sách và chứng từ in, không tự nhập mã vào ô này.
- **GHI CHÚ**: Cách nhập, cách đọc và quy tắc: Nhập diễn giải chung cho cả phiếu, không bắt buộc; khác với ghi chú của từng dòng hàng.
- **KHO HÀNG TRƠN**: Cách nhập, cách đọc và quy tắc: Kho chứa hàng trơn để xuất theo yêu cầu; không được trùng Kho gia công. Kiểm tra trước chọn nguyên liệu/lô.
- **Khách hàng**: Cách nhập, cách đọc và quy tắc: Khách hàng gắn với dòng đơn đặt hàng, chỉ xem; không phải đơn vị thực hiện gia công.
- **Hàng hóa**: Cách nhập, cách đọc và quy tắc: Chọn hàng trơn/thành phẩm đầu vào; điền Đvt và thông số hàng. Dòng lấy từ đơn hàng hoặc đã có chi tiết nguyên liệu có thể bị khóa thay hàng.
- **Đvt**: Cách nhập, cách đọc và quy tắc: Chỉ xem Đvt của hàng hoặc dòng đơn đặt hàng đã chọn; tỷ lệ quy đổi dùng đối chiếu lượng với kho và lượng nhập.
- **Xuất n.liệu**: Cách nhập, cách đọc và quy tắc: Tại kho mặc định có xuất nguyên liệu. Nhánh Ngoài cho sửa cờ theo trách nhiệm cấp nguyên liệu; yêu cầu nhận từ đối tác mặc định có xuất. Không thay cờ này để tự bỏ kiểm tra nguyên liệu.
- **Y/c**: Cách nhập, cách đọc và quy tắc: Chọn một hoặc nhiều yêu cầu/định mức gia công cho dòng, bắt buộc khi có hàng; các yêu cầu quyết định nguyên liệu và cách tạo tên thành phẩm. Đã khai nguyên liệu thì ô lựa chọn có thể bị khóa.
- **Số mặt**: Cách nhập, cách đọc và quy tắc: Bắt buộc chọn cách gia công bề mặt; chọn số mặt này đồng thời gợi ý Số mặt TP cùng giá trị.
- **Số mặt TP**: Cách nhập, cách đọc và quy tắc: Bắt buộc chọn số mặt của kết quả cuối; có thể khác Số mặt gia công theo quy cách thành phẩm. Thay giá trị làm tính lại tên thành phẩm.
- **Thành phẩm**: Cách nhập, cách đọc và quy tắc: Chỉ xem tên kết quả được tạo từ hàng đầu vào, các yêu cầu gia công, số mặt TP và quy cách hàng; không gõ tên để thay một lựa chọn còn thiếu.
- **Số lượng**: Cách nhập, cách đọc và quy tắc: Nhập lượng yêu cầu gia công theo Đvt; mặc định 0 và không được để 0. Dòng từ đơn hàng được gợi ý phần chưa tất toán/chưa yêu cầu; đổi lượng đưa SL tất toán về 0.
- **SL đã nhập**: Cách nhập, cách đọc và quy tắc: Chỉ xem lượng đã ghi nhận từ các lần nhập thành phẩm, có cả lượng đạt và lỗi theo cách hệ thống tổng hợp; không nhập lại số đã nhận vào đây.
- **SL tất toán**: Cách nhập, cách đọc và quy tắc: Chỉ sửa trong chế độ Tất toán; là phần dừng/chốt không tiếp tục nhập theo yêu cầu, không phải số đã nhận thành phẩm.
- **Đơn giá**: Cách nhập, cách đọc và quy tắc: Đơn giá gia công theo Đvt của dòng, nhập theo thỏa thuận; đây là giá đã gồm VAT dùng tính thành tiền, mặc định dòng mới 0.
- **Thuế VAT**: Cách nhập, cách đọc và quy tắc: Thuế suất áp dụng cho đơn giá, mặc định dòng mới 8%; kiểm tra theo nghiệp vụ thực tế, không cộng thuế thêm vào giá đã gồm VAT.
- **Đơn giá chưa VAT**: Cách nhập, cách đọc và quy tắc: Chỉ xem, tính từ Đơn giá / (1 + tỷ lệ VAT); thay đơn giá hoặc thuế suất để tính lại, không nhập trực tiếp.
- **Thành tiền**: Cách nhập, cách đọc và quy tắc: Chỉ xem; lưới tính số lượng yêu cầu × đơn giá. Khi ghi nhận, hệ thống tính (số lượng − SL tất toán) × đơn giá × hệ số; kiểm tra số đã lưu sau tất toán, không coi số tạm trên lưới là kết quả cuối.
- **Kho chuyển về**: Cách nhập, cách đọc và quy tắc: Chọn kho dự kiến nhận chuyển hàng sau gia công cho từng dòng; khác Kho gia công và Kho hàng trơn. Đây là chỉ định, không tự tạo phiếu chuyển kho.
- **Ghi chú**: Cách nhập, cách đọc và quy tắc: Nhập chú thích riêng của dòng, ví dụ yêu cầu giao/nhận hoặc phần cần đối chiếu; không thay thế lựa chọn yêu cầu gia công.

**Quy tắc số liệu:** Lưới hiển thị thành tiền = số lượng × đơn giá; khi ghi nhận thành tiền được tính (số lượng − SL tất toán) × đơn giá × hệ số (dòng mới hệ số 1). Sau tất toán cần đối chiếu số đã lưu. Đơn giá chưa VAT = đơn giá / (1 + tỷ lệ VAT). Dòng lấy từ đơn hàng gợi ý lượng đặt − lượng tất toán đơn − lượng đã yêu cầu. SL đã nhập đã được hệ thống tổng hợp; khi khác Đvt cần kiểm tra tỷ lệ quy đổi trước đối chiếu phần chưa nhận.

## 7. Kiểm tra sau khi thực hiện

Có phiếu yêu cầu liên kết đúng các dòng đơn đặt hàng; lượng đã yêu cầu của đơn được dùng để kiểm tra phần còn lại, không đồng nghĩa đơn đã giao hoặc đã nhận thành phẩm.

## 8. Những điều cần lưu ý

Chọn đúng trách nhiệm cấp nguyên liệu. Dòng liên kết đơn hàng có giới hạn lượng còn lại và không được nhân đôi; phiếu đã có nhập bị chặn sửa thường. Tất toán là luồng riêng, không dùng thay nhận hàng thực tế.

## 9. Vướng mắc thường gặp

- **Dòng này được chọn từ ĐH. Không thể nhân bản.**: Cách xử lý: Chọn thêm từ đúng dòng đơn còn chờ, không sao chép dòng đã liên kết.
- **Chọn lại nhưng dòng không được thêm**: Cách xử lý: Dòng nguồn đã tồn tại trong phiếu hiện tại được bỏ khỏi lượt thêm; kiểm tra dòng đang có trước chọn lại.
- **Hàng chỉ còn lại (…) từ đơn**: Cách xử lý: Phần còn lại có thể đã đổi do yêu cầu khác/tất toán; tải lại dữ liệu nguồn và yêu cầu đúng lượng còn hợp lệ.
- **Đơn hàng đang trong trạng thái chờ**: Cách xử lý: Kiểm tra trạng thái xử lý của dòng đơn với người phụ trách; không tạo thủ công để bỏ qua chặn nguồn.
- **Đơn lịch sử xuất hiện ngoài kỳ chọn**: Cách xử lý: Đã quan sát 30/10/2026; đối chiếu ngày/mã đơn từng dòng và chỉ chọn đúng nguồn. Không dựa riêng khoảng ngày để chọn hàng loạt; báo người hỗ trợ kiểm tra lọc ngày.

## 10. Câu hỏi thường gặp

**Chọn lại cùng dòng đơn có tăng số lượng đang yêu cầu không?** Không; dòng nguồn đã có trong phiếu bị loại khỏi lượt thêm. Sửa lượng của dòng hợp lệ trong giới hạn còn lại hoặc chọn nguồn khác cần làm.

## 11. Công việc tiếp theo

Chuyển chứng từ cho bộ phận tiếp nhận; theo dõi tiến độ bằng các báo cáo của cùng quy trình trong phần c Thống kê sản xuất.

## 12. Bài hướng dẫn liên quan

[TỔNG QUAN PHIẾU YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b02-0-tong-quan-phieu-yeu-cau-gia-cong/) — Phiếu yêu cầu gia công; [LẬP YÊU CẦU GIA CÔNG VÀ LẤY TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-sx-b02-1-lap-yeu-cau-gia-cong-va-lay-tu-phieu-dat-hang/) — Lập yêu cầu gia công và lấy từ phiếu đặt hàng; [TẤT TOÁN PHIẾU YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b02-2-tat-toan-phieu-yeu-cau-gia-cong/) — Tất toán phiếu yêu cầu gia công; [ĐỒNG BỘ PHIẾU YÊU CẦU GIA CÔNG QUA API](/bai-viet/2026-11-07-sx-b02-3-dong-bo-phieu-yeu-cau-gia-cong-qua-api/) — Đồng bộ phiếu yêu cầu gia công qua API; [IN PHIẾU YÊU CẦU, XUẤT HÀNG TRƠN VÀ TẤT TOÁN](/bai-viet/2026-11-07-sx-b02-4-in-phieu-yeu-cau-xuat-hang-tron-va-tat-toan/) — In phiếu yêu cầu, xuất hàng trơn và tất toán.

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
