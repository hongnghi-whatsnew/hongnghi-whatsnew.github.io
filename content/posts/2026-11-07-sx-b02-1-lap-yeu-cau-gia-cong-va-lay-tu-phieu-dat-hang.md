---
title: "LẬP YÊU CẦU GIA CÔNG VÀ LẤY TỪ PHIẾU ĐẶT HÀNG"
date: "2026-11-07"
summary: "Lập yêu cầu gia công ván tại kho, thuê ngoài hoặc trao đổi qua API; theo dõi thành phẩm cần nhận và lượng tất toán."
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

Lập yêu cầu gia công ván tại kho, thuê ngoài hoặc trao đổi qua API; theo dõi thành phẩm cần nhận và lượng tất toán.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Có đơn vị gia công đã gắn đúng kho, danh mục hàng/Đvt, các yêu cầu hoặc định mức và số mặt phù hợp. Xác định loại Tại kho/Ngoài/đồng bộ, trách nhiệm cấp nguyên liệu và kho hàng trơn; khi lấy đơn hàng phải có phần còn chờ sản xuất. Có quyền tạo/cập nhật theo thao tác; kiểm tra nguồn chưa có phát sinh nhập trước sửa.

## 2. Mở chức năng

**Sản xuất ván → Phiếu yêu cầu gia công**

## 3. Nhận biết màn hình

Danh sách có ngày/mã phiếu, loại Yêu cầu G/C, kho gia công, kho xuất hàng trơn, Đồng bộ API và Trạng thái nhập. Khi mở phiếu: đầu phiếu xác định đơn vị/kho; bảng chi tiết xác định hàng, Y/c, số mặt, số mặt TP, thành phẩm, lượng yêu cầu/đã nhập/tất toán và giá.

Ảnh minh họa sẽ được bổ sung sau; thao tác chung với danh sách xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/), [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

![Menu chọn Tại kho, Ngoài và Ngoài (đồng bộ API).](/posts/2026-11-07-sx-b02-1-lap-yeu-cau-gia-cong-va-lay-tu-phieu-dat-hang/hinh-01-20261030-sx-b02-loai-phieu.png)

![Biểu mẫu yêu cầu gia công Tại kho chưa lưu.](/posts/2026-11-07-sx-b02-1-lap-yeu-cau-gia-cong-va-lay-tu-phieu-dat-hang/hinh-02-20261030-sx-b02-1-form-tai-kho.png)

## 4. Trình tự công việc

Xác định nguồn đơn/quy cách → yêu cầu gia công và nguyên liệu → nhập kết quả từng lần hoặc tất toán phần dừng → đối chiếu trạng thái.

## 5. Thực hiện trên phần mềm

1. Chọn loại **Tại kho**, **Ngoài** hoặc **Ngoài (đồng bộ API)** theo nơi thực hiện; nhập ngày yêu cầu, chọn đơn vị và kiểm tra kho gia công được điền. Chọn kho hàng trơn khác kho gia công.
2. Chọn hàng đầu vào; kiểm tra Đvt theo hàng. Chọn **Y/c** là các yêu cầu/định mức cần làm rồi chọn **Số mặt**; lựa chọn này gợi ý lại **Số mặt TP** cùng giá trị. Nếu thành phẩm có quy cách khác, chọn đúng Số mặt TP sau cùng và kiểm tra tên thành phẩm được tạo. Mỗi lần đổi hàng/Y/c/số mặt, soát lại tên kết quả thay vì gõ một tên khác.
3. Nhập số lượng cần thực hiện, đơn giá và thuế VAT. Kiểm tra đơn giá chưa VAT và thành tiền. Chọn kho chuyển về từng dòng theo kế hoạch giao hàng; chỉ định này chưa làm chuyển kho.
4. Đối chiếu **Xuất n.liệu** theo loại phiếu. Tại kho và phía nhận yêu cầu từ đối tác mặc định có xuất; nhánh Ngoài được chỉnh cờ theo trách nhiệm cấp nguyên liệu. Khi có bảng nguyên liệu, phân bổ lượng xuất thường và lượng theo lô đủ mức yêu cầu, không âm; kiểm tra từng lô đã chọn.
5. Nếu lấy theo đơn hàng dùng **TỪ PHIẾU ĐẶT HÀNG** theo [LẬP YÊU CẦU GIA CÔNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-sx-b02-5-lap-yeu-cau-gia-cong-tu-phieu-dat-hang/). Không nhân bản dòng đã liên kết đơn hàng; khối lượng còn phải lấy theo phần còn lại của đúng dòng nguồn.
6. Trước ghi nhận, kiểm tra từng dòng có hàng, Y/c, số mặt, số mặt TP và lượng dương theo công việc thực tế. Lưu ý kiểm tra khác 0 trên cửa sổ không thay căn cứ số lượng được duyệt; không dùng số âm để điều chỉnh hoặc hoàn tác yêu cầu. Đối chiếu nguyên liệu/lô, đơn giá, VAT và hệ số; sau ghi nhận mở lại đúng mã phiếu để so quy cách, lượng và thành tiền đã lưu, rồi theo dõi trạng thái nhập/đồng bộ riêng.

## 6. Giải thích các thông tin trên màn hình

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

Yêu cầu gia công có mã phiếu, các dòng hàng/định mức/quy cách và lượng cần thực hiện. Dữ liệu nguyên liệu/lô theo lựa chọn được ghi kèm; phiếu này chưa xác nhận nhận đủ thành phẩm.

## 8. Những điều cần lưu ý

Khi dùng bài này để sửa phiếu được phép, đổi Số lượng sẽ đưa SL tất toán về 0; nếu có phần đã chốt, dừng và xử lý theo [TẤT TOÁN PHIẾU YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b02-2-tat-toan-phieu-yeu-cau-gia-cong/), không sửa lượng nguồn để giả làm hủy tất toán.

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

[TỔNG QUAN PHIẾU YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b02-0-tong-quan-phieu-yeu-cau-gia-cong/) — Phiếu yêu cầu gia công; [TẤT TOÁN PHIẾU YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b02-2-tat-toan-phieu-yeu-cau-gia-cong/) — Tất toán phiếu yêu cầu gia công; [ĐỒNG BỘ PHIẾU YÊU CẦU GIA CÔNG QUA API](/bai-viet/2026-11-07-sx-b02-3-dong-bo-phieu-yeu-cau-gia-cong-qua-api/) — Đồng bộ phiếu yêu cầu gia công qua API; [IN PHIẾU YÊU CẦU, XUẤT HÀNG TRƠN VÀ TẤT TOÁN](/bai-viet/2026-11-07-sx-b02-4-in-phieu-yeu-cau-xuat-hang-tron-va-tat-toan/) — In phiếu yêu cầu, xuất hàng trơn và tất toán; [LẬP YÊU CẦU GIA CÔNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-sx-b02-5-lap-yeu-cau-gia-cong-tu-phieu-dat-hang/) — Lập yêu cầu gia công từ phiếu đặt hàng.

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
