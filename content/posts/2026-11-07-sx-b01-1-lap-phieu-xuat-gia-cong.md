---
title: "LẬP PHIẾU XUẤT GIA CÔNG"
date: "2026-11-07"
summary: "Ghi nhận hàng trơn xuất từ kho đến kho gia công, kèm xe, tài xế và người nhận."
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

Ghi nhận hàng trơn xuất từ kho đến kho gia công, kèm xe, tài xế và người nhận.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Chuẩn bị chứng từ giao đi, mã gốc, ngày xuất, kho có hàng, kho/bên nhận gia công và xe/tài xế. Kiểm tra hàng, Đvt và lô thuộc kho xuất; có quyền thêm/cập nhật phù hợp. Chỉ làm việc tại đúng tên miền và tài khoản của chi nhánh giao dịch.

## 2. Mở chức năng

**Sản xuất ván → Phiếu xuất gia công**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

Danh sách có ngày/mã phiếu, bên nhận gia công, kho xuất, tài xế và mã phiếu gốc. Một số cột xe/kho gia công/người nhận ẩn mặc định. Khi mở chi tiết: phần đầu là giao nhận và hai kho; bảng dưới là hàng, lô, Đvt, lượng giao cùng khối lượng/kiện/m³ chỉ xem.

Ảnh minh họa sẽ được bổ sung sau; thao tác chung với danh sách xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/), [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

## 4. Trình tự công việc

Xác định hàng/lô và kho giao → lập phiếu xuất → đối chiếu lượng đã lưu → in giao nhận.

## 5. Thực hiện trên phần mềm

1. Mở **Phiếu xuất gia công → Thêm mới**. Chọn ngày xuất kho, Kho xuất và bên nhận gia công; kiểm tra Kho gia công theo đơn vị. Chọn đơn vị sẽ điền lại tên, địa chỉ, điện thoại người nhận; rà lại rồi chỉnh thông tin chuyến giao nếu cần. Chọn xe gợi ý tài xế theo danh mục, vẫn kiểm tra đúng người đi thực tế. Nhập mã phiếu gốc; nếu không có, ghi theo yêu cầu của trường.
2. Chọn hàng cần giao; kiểm tra Đvt tự điền, chọn lô theo đúng hàng và Kho xuất. Nếu đổi hàng hoặc Kho xuất sau khi đã có dòng, kiểm tra lại **tất cả dòng/lô** trước lưu. Đổi kho cập nhật nguồn chọn hàng nhưng không được coi là đã tự xóa/thay lô cũ. Không dùng lô của kho trước cho chuyến giao mới.
3. Nhập số lượng giao thực tế. Đối chiếu Khối lượng = số lượng × trọng lượng đơn vị, M³ = số lượng × thể tích đơn vị và Kiện theo quy đổi phụ; đây đều là số chỉ xem.
4. Ghi chú quy cách giao/nhận của từng dòng và lý do xuất của cả phiếu. Đối chiếu số lượng với lô/tồn kho và biên bản trước **Lưu lại**; hoàn thiện ô đang nhập và xử lý các dòng báo lỗi trước ghi nhận.
5. Kiểm tra mã phiếu đã cấp, kho xuất/kho gia công cùng từng lô và số lượng trên phiếu đã lưu; dùng [IN PHIẾU XUẤT GIA CÔNG](/bai-viet/2026-11-07-sx-b01-2-in-phieu-xuat-gia-cong/) để in chứng từ giao nhận. Không lập lại phiếu chỉ vì chưa mở bản in.

## 6. Giải thích các thông tin trên màn hình

- **NGÀY XUẤT KHO**: Cách nhập, cách đọc và quy tắc: Bắt buộc chọn ngày xuất hàng/nguyên liệu từ kho giao đi gia công; cửa sổ mới lấy ngày hiện tại, kiểm tra đúng ngày giao thực tế.
- **XE**: Cách nhập, cách đọc và quy tắc: Bắt buộc chọn xe vận chuyển; thông tin biển số đi theo phiếu giao hàng.
- **TÀI XẾ**: Cách nhập, cách đọc và quy tắc: Bắt buộc chọn tài xế giao hàng; khác với Người nhận ở bên nhận gia công.
- **TÀI XẾ - ĐIỆN THOẠI**: Cách nhập, cách đọc và quy tắc: Nhập số liên lạc tài xế cho chuyến giao; không bắt buộc theo cửa sổ.
- **MÃ PHIẾU**: Cách nhập, cách đọc và quy tắc: Chỉ xem mã hệ thống cấp khi ghi nhận; dùng đối chiếu đúng phiếu trên danh sách và chứng từ in, không tự nhập mã vào ô này.
- **NGƯỜI NHẬN**: Cách nhập, cách đọc và quy tắc: Nhập họ tên người đại diện nhận hàng gia công để đối chiếu giao nhận; có thể để trống nếu chưa có thông tin.
- **ĐỊA CHỈ**: Cách nhập, cách đọc và quy tắc: Địa chỉ của người/bên nhận hàng gia công, không phải địa chỉ tài xế hoặc tên kho xuất.
- **ĐIỆN THOẠI**: Cách nhập, cách đọc và quy tắc: Số điện thoại người nhận để liên hệ giao hàng; khác ô điện thoại tài xế.
- **MÃ PHIẾU GỐC**: Cách nhập, cách đọc và quy tắc: Bắt buộc nhập số chứng từ gốc để đối chiếu, ví dụ mã phía giao/NCC; khi không có, nhãn kiểm tra yêu cầu ghi “không có”. Không nhầm với mã phiếu hệ thống cấp.
- **GHI CHÚ, LÝ DO XUẤT**: Cách nhập, cách đọc và quy tắc: Nhập mục đích giao hàng gia công và căn cứ của cả phiếu; không dùng ô này thay kho giao/nhận.
- **ĐƠN VỊ GIA CÔNG**: Cách nhập, cách đọc và quy tắc: Chọn đơn vị nhận gia công nếu có; kho gia công được quản lý theo đơn vị, khi đã chọn đơn vị ô kho gia công bị khóa.
- **KHO GIA CÔNG**: Cách nhập, cách đọc và quy tắc: Bắt buộc có kho nhận giữ hàng gia công; kiểm tra theo đơn vị đã chọn, khác với kho nội bộ xuất hàng.
- **KHO XUẤT**: Cách nhập, cách đọc và quy tắc: Bắt buộc chọn kho có hàng giao đi; danh sách lô hàng được lấy theo kho này và hàng hóa trên từng dòng.
- **Hàng hóa**: Cách nhập, cách đọc và quy tắc: Bắt buộc chọn mặt hàng giao đi. Chọn hàng điền Đvt gốc và thông số khối lượng/thể tích/quy đổi kiện; đổi hàng phải chọn lại lô.
- **Lô hàng**: Cách nhập, cách đọc và quy tắc: Chọn lô thuộc hàng và Kho xuất; chưa chọn hàng thì ô lô bị khóa. Kiểm tra đúng lô cần giao thay vì chỉ đúng tên hàng.
- **Đvt**: Cách nhập, cách đọc và quy tắc: Bắt buộc có đơn vị dòng, điền theo hàng được chọn; đọc cùng số lượng, không nhập số kiện vào ô số lượng nếu đơn vị là tấm.
- **Khối lượng**: Cách nhập, cách đọc và quy tắc: Chỉ xem, Số lượng × trọng lượng đơn vị của hàng trong danh mục; không phải số người giao cân nhập riêng.
- **Kiện**: Cách nhập, cách đọc và quy tắc: Chỉ xem, Số lượng / tỷ lệ quy đổi phụ khi tỷ lệ > 1; nếu tỷ lệ không thỏa thì cột có thể trống. Không dùng đây làm định mức gia công.
- **M³**: Cách nhập, cách đọc và quy tắc: Chỉ xem, Số lượng × m³ đơn vị của hàng; muốn sửa sai phải kiểm tra số lượng hoặc thông số hàng hóa.
- **Số lượng**: Cách nhập, cách đọc và quy tắc: Bắt buộc nhập lượng giao đi theo Đvt của dòng; đối chiếu tồn kho, lô và biên bản giao, không phải lượng thành phẩm sẽ nhận.
- **Chú thích**: Cách nhập, cách đọc và quy tắc: Nhập ghi chú riêng cho dòng hàng giao đi, không bắt buộc.

**Quy tắc số liệu:** Khối lượng = số lượng × trọng lượng đơn vị; M³ = số lượng × thể tích đơn vị. Kiện = số lượng / quy đổi phụ chỉ khi quy đổi phụ > 1. Các thông số lấy từ danh mục hàng hóa; không nhập đè cột kết quả.

## 7. Kiểm tra sau khi thực hiện

Có phiếu xuất gia công mang mã hệ thống cấp, ghi nhận hàng/lô/Đvt và lượng giao giữa kho xuất với kho gia công. Đối chiếu số đã lưu cùng chứng từ kho trước in giao nhận; chưa phải kết quả thành phẩm nhập về.

## 8. Những điều cần lưu ý

Phiếu xuất ghi nhận hàng giao đi; không thay thế phiếu yêu cầu quy cách hoặc nhập thành phẩm. Không cộng số lượng, kiện, kg và m³ vào cùng một tổng.

## 9. Vướng mắc thường gặp

- **Thiếu ngày xuất, xe, tài xế, kho hoặc mã phiếu gốc**: Cách xử lý: Hoàn thiện đúng các ô bắt buộc của phiếu xuất; mã phiếu tự sinh không thay mã gốc.
- **Lô cần chọn không xuất hiện**: Cách xử lý: Kiểm tra hàng và Kho xuất trước mở chọn lô; danh sách lô phụ thuộc cả hai lựa chọn này.
- **Khối lượng/kiện/m³ không khớp**: Cách xử lý: Kiểm tra số lượng và thông số trọng lượng/thể tích/quy đổi phụ của hàng; không sửa bằng cách đổi Đvt tùy ý.
- **Bạn chỉ được xóa phiếu do mình tạo**: Cách xử lý: Đối chiếu người tạo và chuyển người có trách nhiệm xử lý; không tạo phiếu khác để bù khi chưa xác định sai lệch.
- **Người nhận/kho gia công đổi sau khi chọn đơn vị**: Cách xử lý: Các ô được điền lại từ danh mục đơn vị. Kiểm tra đúng bên nhận rồi nhập lại thông tin giao nhận thực tế được phép; không tiếp tục bằng thông tin chuyến cũ.
- **Lô cũ vẫn thấy sau đổi hàng/kho**: Cách xử lý: Kiểm lại đúng hàng và kho mới ở từng dòng, chọn lại lô phù hợp trước lưu; không coi lô còn hiển thị là đã hợp lệ theo kho mới.

## 10. Câu hỏi thường gặp

**Vì sao Khối lượng, Kiện hoặc M³ để trống?** Các cột lấy theo thông số hàng và quy đổi; kiểm tra số lượng và danh mục hàng, đặc biệt Kiện chỉ tính khi tỷ lệ quy đổi phụ > 1.

## 11. Công việc tiếp theo

Chuyển chứng từ cho bộ phận tiếp nhận; theo dõi tiến độ bằng các báo cáo của cùng quy trình trong phần c Thống kê sản xuất.

## 12. Bài hướng dẫn liên quan

[TỔNG QUAN PHIẾU XUẤT GIA CÔNG](/bai-viet/2026-11-07-sx-b01-0-tong-quan-phieu-xuat-gia-cong/) — Phiếu xuất gia công; [IN PHIẾU XUẤT GIA CÔNG](/bai-viet/2026-11-07-sx-b01-2-in-phieu-xuat-gia-cong/) — In phiếu xuất gia công.

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
