---
title: "TỔNG QUAN PHIẾU YÊU CẦU GIA CÔNG"
date: "2026-11-07"
summary: "Đọc danh sách yêu cầu gia công ván để phân biệt loại thực hiện, quy cách, tiến độ nhận và phần dừng; từ đó chọn đúng bài lập, tất toán, trao đổi API hoặc in."
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

Đọc danh sách yêu cầu gia công ván để phân biệt loại thực hiện, quy cách, tiến độ nhận và phần dừng; từ đó chọn đúng bài lập, tất toán, trao đổi API hoặc in. Trạng thái nhập và trạng thái đồng bộ là hai thông tin độc lập.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Có đơn vị gia công đã gắn đúng kho, danh mục hàng/Đvt, các yêu cầu hoặc định mức và số mặt phù hợp. Xác định loại Tại kho/Ngoài/đồng bộ, trách nhiệm cấp nguyên liệu và kho hàng trơn; khi lấy đơn hàng phải có phần còn chờ sản xuất. Có quyền tạo/cập nhật theo thao tác; kiểm tra nguồn chưa có phát sinh nhập trước sửa.

## 2. Mở chức năng

**Sản xuất ván → Phiếu yêu cầu gia công**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![YÊU CẦU GIA CÔNG — danh sách và bộ lọc theo kỳ đang chọn; chỉ xem.](/posts/2026-11-07-sx-b02-0-tong-quan-phieu-yeu-cau-gia-cong/ui-20261026-sx-b02-ds-overview.png)

Danh sách có ngày/mã phiếu, loại Yêu cầu G/C, kho gia công, kho xuất hàng trơn, Đồng bộ API và Trạng thái nhập. Khi mở phiếu: đầu phiếu xác định đơn vị/kho; bảng chi tiết xác định hàng, Y/c, số mặt, số mặt TP, thành phẩm, lượng yêu cầu/đã nhập/tất toán và giá.

Ảnh minh họa sẽ được bổ sung sau; thao tác chung với danh sách xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/), [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

## 4. Trình tự công việc

Xác định nguồn đơn/quy cách → yêu cầu gia công và nguyên liệu → nhập kết quả từng lần hoặc tất toán phần dừng → đối chiếu trạng thái.

## 5. Thực hiện trên phần mềm

1. Phân biệt loại yêu cầu: **Tại kho**, **Ngoài**, **Ngoài (đồng bộ API)**. Đọc đơn vị gia công, kho giữ gia công và kho hàng trơn trước đối chiếu các dòng.
2. Mở **Xem lại** để đọc hàng đầu vào, yêu cầu/định mức, số mặt gia công, số mặt TP, thành phẩm và lượng yêu cầu. Tên thành phẩm là kết quả từ quy cách, không phải mô tả tự nhập.
3. Đối chiếu **SL đã nhập**, **SL tất toán** và trạng thái nhập để xác định phần còn thực hiện. Với đơn vị khác nhau phải kiểm tra tỷ lệ quy đổi trước lấy phép trừ số lượng.
4. Lập yêu cầu xem [LẬP YÊU CẦU GIA CÔNG VÀ LẤY TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-sx-b02-1-lap-yeu-cau-gia-cong-va-lay-tu-phieu-dat-hang/)/[LẬP YÊU CẦU GIA CÔNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-sx-b02-5-lap-yeu-cau-gia-cong-tu-phieu-dat-hang/); chốt phần dừng xem [TẤT TOÁN PHIẾU YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b02-2-tat-toan-phieu-yeu-cau-gia-cong/); trao đổi với đối tác xem [ĐỒNG BỘ PHIẾU YÊU CẦU GIA CÔNG QUA API](/bai-viet/2026-11-07-sx-b02-3-dong-bo-phieu-yeu-cau-gia-cong-qua-api/). Các mẫu in khác nhau tại [IN PHIẾU YÊU CẦU, XUẤT HÀNG TRƠN VÀ TẤT TOÁN](/bai-viet/2026-11-07-sx-b02-4-in-phieu-yeu-cau-xuat-hang-tron-va-tat-toan/) không thay thế thao tác lưu/tất toán.
5. Phiếu đã có nhập không được sửa theo luồng sửa thông thường; kiểm tra phát sinh trước đề nghị thay đổi. Với phiếu chưa nhập nhưng đã có mức tất toán, không sửa Số lượng để thay nghiệp vụ chốt dừng: đổi Số lượng trên cửa sổ đưa SL tất toán về 0. Xử lý phần dừng theo [TẤT TOÁN PHIẾU YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b02-2-tat-toan-phieu-yeu-cau-gia-cong/).
6. Khi sửa quy cách được phép, chọn Số mặt có thể điền lại Số mặt TP cùng giá trị. Soát Số mặt TP và tên thành phẩm sau khi đổi; không coi tên cũ hoặc lựa chọn còn hiển thị là đã đúng quy cách mới.

## 6. Giải thích các thông tin trên màn hình

- **NGÀY YÊU CẦU**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Bắt buộc chọn ngày lập yêu cầu, mặc định hôm nay. Ngày được khóa trong chế độ Tất toán.
- **ĐƠN VỊ GIA CÔNG**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Bắt buộc chọn đơn vị thực hiện; chọn đơn vị sẽ điền Kho gia công theo thiết lập của đơn vị.
- **KHO GIA CÔNG**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Bắt buộc có, chỉ xem theo đơn vị gia công; nếu chưa có kho phải kiểm tra thiết lập đơn vị thay vì nhập tên kho vào ghi chú.
- **MÃ PHIẾU**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Chỉ xem mã hệ thống cấp khi ghi nhận; dùng đối chiếu đúng phiếu trên danh sách và chứng từ in, không tự nhập mã vào ô này.
- **GHI CHÚ**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Nhập diễn giải chung cho cả phiếu, không bắt buộc; khác với ghi chú của từng dòng hàng.
- **KHO HÀNG TRƠN**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Kho chứa hàng trơn để xuất theo yêu cầu; không được trùng Kho gia công. Kiểm tra trước chọn nguyên liệu/lô.
- **Khách hàng**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Khách hàng gắn với dòng đơn đặt hàng, chỉ xem; không phải đơn vị thực hiện gia công.
- **Hàng hóa**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Chọn hàng trơn/thành phẩm đầu vào; điền Đvt và thông số hàng. Dòng lấy từ đơn hàng hoặc đã có chi tiết nguyên liệu có thể bị khóa thay hàng.
- **Đvt**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Chỉ xem Đvt của hàng hoặc dòng đơn đặt hàng đã chọn; tỷ lệ quy đổi dùng đối chiếu lượng với kho và lượng nhập.
- **Xuất n.liệu**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Tại kho mặc định có xuất nguyên liệu. Nhánh Ngoài cho sửa cờ theo trách nhiệm cấp nguyên liệu; yêu cầu nhận từ đối tác mặc định có xuất. Không thay cờ này để tự bỏ kiểm tra nguyên liệu.
- **Y/c**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Chọn một hoặc nhiều yêu cầu/định mức gia công cho dòng, bắt buộc khi có hàng; các yêu cầu quyết định nguyên liệu và cách tạo tên thành phẩm. Đã khai nguyên liệu thì ô lựa chọn có thể bị khóa.
- **Số mặt**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Bắt buộc chọn cách gia công bề mặt; chọn số mặt này đồng thời gợi ý Số mặt TP cùng giá trị.
- **Số mặt TP**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Bắt buộc chọn số mặt của kết quả cuối; có thể khác Số mặt gia công theo quy cách thành phẩm. Thay giá trị làm tính lại tên thành phẩm.
- **Thành phẩm**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Chỉ xem tên kết quả được tạo từ hàng đầu vào, các yêu cầu gia công, số mặt TP và quy cách hàng; không gõ tên để thay một lựa chọn còn thiếu.
- **Số lượng**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Nhập lượng yêu cầu gia công theo Đvt; mặc định 0 và không được để 0. Dòng từ đơn hàng được gợi ý phần chưa tất toán/chưa yêu cầu; đổi lượng đưa SL tất toán về 0.
- **SL đã nhập**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Chỉ xem lượng đã ghi nhận từ các lần nhập thành phẩm, có cả lượng đạt và lỗi theo cách hệ thống tổng hợp; không nhập lại số đã nhận vào đây.
- **SL tất toán**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Chỉ sửa trong chế độ Tất toán; là phần dừng/chốt không tiếp tục nhập theo yêu cầu, không phải số đã nhận thành phẩm.
- **Đơn giá**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Đơn giá gia công theo Đvt của dòng, nhập theo thỏa thuận; đây là giá đã gồm VAT dùng tính thành tiền, mặc định dòng mới 0.
- **Thuế VAT**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Thuế suất áp dụng cho đơn giá, mặc định dòng mới 8%; kiểm tra theo nghiệp vụ thực tế, không cộng thuế thêm vào giá đã gồm VAT.
- **Đơn giá chưa VAT**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Chỉ xem, tính từ Đơn giá / (1 + tỷ lệ VAT); thay đơn giá hoặc thuế suất để tính lại, không nhập trực tiếp.
- **Thành tiền**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Chỉ xem; lưới tính số lượng yêu cầu × đơn giá. Khi ghi nhận, hệ thống tính (số lượng − SL tất toán) × đơn giá × hệ số; kiểm tra số đã lưu sau tất toán, không coi số tạm trên lưới là kết quả cuối.
- **Kho chuyển về**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Chọn kho dự kiến nhận chuyển hàng sau gia công cho từng dòng; khác Kho gia công và Kho hàng trơn. Đây là chỉ định, không tự tạo phiếu chuyển kho.
- **Ghi chú**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Nhập chú thích riêng của dòng, ví dụ yêu cầu giao/nhận hoặc phần cần đối chiếu; không thay thế lựa chọn yêu cầu gia công.

**Quy tắc số liệu:** Lưới hiển thị thành tiền = số lượng × đơn giá; khi ghi nhận thành tiền được tính (số lượng − SL tất toán) × đơn giá × hệ số (dòng mới hệ số 1). Sau tất toán cần đối chiếu số đã lưu. Đơn giá chưa VAT = đơn giá / (1 + tỷ lệ VAT). Dòng lấy từ đơn hàng gợi ý lượng đặt − lượng tất toán đơn − lượng đã yêu cầu. SL đã nhập đã được hệ thống tổng hợp; khi khác Đvt cần kiểm tra tỷ lệ quy đổi trước đối chiếu phần chưa nhận.

## 7. Kiểm tra sau khi thực hiện

Phân biệt được phần yêu cầu, phần đã nhập và phần tất toán; chọn đúng luồng lập, nhập, tất toán, đồng bộ hoặc in theo trạng thái của phiếu.

## 8. Những điều cần lưu ý

Chọn đúng trách nhiệm cấp nguyên liệu. Dòng liên kết đơn hàng có giới hạn lượng còn lại và không được nhân đôi; phiếu đã có nhập bị chặn sửa thường. Tất toán là luồng riêng, không dùng thay nhận hàng thực tế.

## 9. Vướng mắc thường gặp

- **Vui lòng chọn yêu cầu / số mặt / số mặt thành phẩm**: Cách xử lý: Điền các lựa chọn của đúng dòng báo lỗi; Y/c là tập định mức, ghi chú không thay thế được.
- **Vui lòng nhập số lượng**: Cách xử lý: Dòng có hàng phải có lượng khác 0; dòng mẫu chưa có hàng không thay một dòng yêu cầu thực tế.
- **Kho hàng trơn trùng kho gia công**: Cách xử lý: Chọn đúng hai kho khác nhau theo giao dịch, kiểm tra kho gợi ý từ đơn vị.
- **Phiếu đang/đã nhập nên không sửa được**: Cách xử lý: Kiểm tra các lần nhập và phương án xử lý đã được duyệt; không đổi số lượng nguồn để che phát sinh đã có.

## 10. Câu hỏi thường gặp

**Vì sao không gõ tên Thành phẩm?** Tên được tạo từ hàng đầu vào, Y/c, số mặt TP và quy cách; cần sửa đúng các lựa chọn nguồn nếu tên chưa đúng.

## 11. Công việc tiếp theo

Chuyển chứng từ cho bộ phận tiếp nhận; theo dõi tiến độ bằng các báo cáo của cùng quy trình trong phần c Thống kê sản xuất.

## 12. Bài hướng dẫn liên quan

[TỔNG QUAN PHIẾU YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b02-0-tong-quan-phieu-yeu-cau-gia-cong/) — Phiếu yêu cầu gia công; [LẬP YÊU CẦU GIA CÔNG VÀ LẤY TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-sx-b02-1-lap-yeu-cau-gia-cong-va-lay-tu-phieu-dat-hang/) — Lập yêu cầu gia công và lấy từ phiếu đặt hàng; [TẤT TOÁN PHIẾU YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b02-2-tat-toan-phieu-yeu-cau-gia-cong/) — Tất toán phiếu yêu cầu gia công; [ĐỒNG BỘ PHIẾU YÊU CẦU GIA CÔNG QUA API](/bai-viet/2026-11-07-sx-b02-3-dong-bo-phieu-yeu-cau-gia-cong-qua-api/) — Đồng bộ phiếu yêu cầu gia công qua API; [IN PHIẾU YÊU CẦU, XUẤT HÀNG TRƠN VÀ TẤT TOÁN](/bai-viet/2026-11-07-sx-b02-4-in-phieu-yeu-cau-xuat-hang-tron-va-tat-toan/) — In phiếu yêu cầu, xuất hàng trơn và tất toán; [LẬP YÊU CẦU GIA CÔNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-sx-b02-5-lap-yeu-cau-gia-cong-tu-phieu-dat-hang/) — Lập yêu cầu gia công từ phiếu đặt hàng.

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
