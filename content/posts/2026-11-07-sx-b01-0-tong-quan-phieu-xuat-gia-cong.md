---
title: "TỔNG QUAN PHIẾU XUẤT GIA CÔNG"
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

![PHIẾU XUẤT KHO GIA CÔNG - DANH SÁCH — không có dữ liệu theo ngày đang chọn, chỉ xem.](/posts/2026-11-07-sx-b01-0-tong-quan-phieu-xuat-gia-cong/ui-20261026-sx-b01-ds-overview.png)

Danh sách có ngày/mã phiếu, bên nhận gia công, kho xuất, tài xế và mã phiếu gốc. Một số cột xe/kho gia công/người nhận ẩn mặc định. Khi mở chi tiết: phần đầu là giao nhận và hai kho; bảng dưới là hàng, lô, Đvt, lượng giao cùng khối lượng/kiện/m³ chỉ xem.

Ảnh minh họa sẽ được bổ sung sau; thao tác chung với danh sách xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/), [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

## 4. Trình tự công việc

Xác định hàng/lô và kho giao → lập phiếu xuất → đối chiếu lượng đã lưu → in giao nhận.

## 5. Thực hiện trên phần mềm

1. Đọc mã/ngày phiếu, Kho xuất và Kho gia công để xác định hàng đi từ đâu đến đâu; đơn vị gia công và thông tin xe/tài xế là căn cứ giao nhận.
2. Mở **Xem lại**, đối chiếu từng hàng, Đvt, lô và số lượng. Đọc thêm khối lượng, kiện, m³ là các số quy đổi từ danh mục, không cộng các đại lượng khác đơn vị vào một tổng.
3. Khi cần giao thêm hàng dùng [LẬP PHIẾU XUẤT GIA CÔNG](/bai-viet/2026-11-07-sx-b01-1-lap-phieu-xuat-gia-cong/); khi cần bản giao nhận dùng [IN PHIẾU XUẤT GIA CÔNG](/bai-viet/2026-11-07-sx-b01-2-in-phieu-xuat-gia-cong/). Phiếu xuất là chứng từ giao hàng đi, không thay phiếu yêu cầu quy cách gia công hoặc phiếu nhập thành phẩm.
4. Trước sửa/xóa, đối chiếu hàng đã giao và chứng từ liên quan. Xóa còn yêu cầu đúng người tạo, ngoài quyền Xóa của màn; có quyền không đồng nghĩa được xóa phiếu người khác. Nếu bị chặn, chuyển người tạo/người phụ trách xử lý theo quyền.
5. Nếu cần sửa đơn vị hoặc kho, đọc [LẬP PHIẾU XUẤT GIA CÔNG](/bai-viet/2026-11-07-sx-b01-1-lap-phieu-xuat-gia-cong/): chọn lại đơn vị có thể điền lại kho gia công và người nhận; phải đối chiếu lại các dòng/lô và thông tin giao nhận trước lưu.

## 6. Giải thích các thông tin trên màn hình

- **NGÀY XUẤT KHO**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Bắt buộc chọn ngày xuất hàng/nguyên liệu từ kho giao đi gia công; cửa sổ mới lấy ngày hiện tại, kiểm tra đúng ngày giao thực tế.
- **XE**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Bắt buộc chọn xe vận chuyển; thông tin biển số đi theo phiếu giao hàng.
- **TÀI XẾ**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Bắt buộc chọn tài xế giao hàng; khác với Người nhận ở bên nhận gia công.
- **TÀI XẾ - ĐIỆN THOẠI**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Nhập số liên lạc tài xế cho chuyến giao; không bắt buộc theo cửa sổ.
- **MÃ PHIẾU**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Chỉ xem mã hệ thống cấp khi ghi nhận; dùng đối chiếu đúng phiếu trên danh sách và chứng từ in, không tự nhập mã vào ô này.
- **NGƯỜI NHẬN**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Nhập họ tên người đại diện nhận hàng gia công để đối chiếu giao nhận; có thể để trống nếu chưa có thông tin.
- **ĐỊA CHỈ**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Địa chỉ của người/bên nhận hàng gia công, không phải địa chỉ tài xế hoặc tên kho xuất.
- **ĐIỆN THOẠI**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Số điện thoại người nhận để liên hệ giao hàng; khác ô điện thoại tài xế.
- **MÃ PHIẾU GỐC**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Bắt buộc nhập số chứng từ gốc để đối chiếu, ví dụ mã phía giao/NCC; khi không có, nhãn kiểm tra yêu cầu ghi “không có”. Không nhầm với mã phiếu hệ thống cấp.
- **GHI CHÚ, LÝ DO XUẤT**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Nhập mục đích giao hàng gia công và căn cứ của cả phiếu; không dùng ô này thay kho giao/nhận.
- **ĐƠN VỊ GIA CÔNG**: Cách nhập, cách đọc và quy tắc: Chọn đơn vị điền lại Kho gia công, tên/địa chỉ/điện thoại người nhận từ danh mục. Kiểm tra các giá trị mới; thông tin người nhận đã nhập trước đó có thể bị thay. Khi đã chọn đơn vị, ô Kho gia công bị khóa.
- **KHO GIA CÔNG**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Bắt buộc có kho nhận giữ hàng gia công; kiểm tra theo đơn vị đã chọn, khác với kho nội bộ xuất hàng.
- **KHO XUẤT**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Bắt buộc chọn kho có hàng giao đi; danh sách lô hàng được lấy theo kho này và hàng hóa trên từng dòng.
- **Hàng hóa**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Bắt buộc chọn mặt hàng giao đi. Chọn hàng điền Đvt gốc và thông số khối lượng/thể tích/quy đổi kiện; đổi hàng phải chọn lại lô.
- **Lô hàng**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Chọn lô thuộc hàng và Kho xuất; chưa chọn hàng thì ô lô bị khóa. Kiểm tra đúng lô cần giao thay vì chỉ đúng tên hàng.
- **Đvt**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Bắt buộc có đơn vị dòng, điền theo hàng được chọn; đọc cùng số lượng, không nhập số kiện vào ô số lượng nếu đơn vị là tấm.
- **Khối lượng**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Chỉ xem, Số lượng × trọng lượng đơn vị của hàng trong danh mục; không phải số người giao cân nhập riêng.
- **Kiện**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Chỉ xem, Số lượng / tỷ lệ quy đổi phụ khi tỷ lệ > 1; nếu tỷ lệ không thỏa thì cột có thể trống. Không dùng đây làm định mức gia công.
- **M³**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Chỉ xem, Số lượng × m³ đơn vị của hàng; muốn sửa sai phải kiểm tra số lượng hoặc thông số hàng hóa.
- **Số lượng**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Bắt buộc nhập lượng giao đi theo Đvt của dòng; đối chiếu tồn kho, lô và biên bản giao, không phải lượng thành phẩm sẽ nhận.
- **Chú thích**: Cách nhập, cách đọc và quy tắc: Khi mở chi tiết phiếu: Nhập ghi chú riêng cho dòng hàng giao đi, không bắt buộc.

**Quy tắc số liệu:** Khối lượng = số lượng × trọng lượng đơn vị; M³ = số lượng × thể tích đơn vị. Kiện = số lượng / quy đổi phụ chỉ khi quy đổi phụ > 1. Các thông số lấy từ danh mục hàng hóa; không nhập đè cột kết quả.

## 7. Kiểm tra sau khi thực hiện

Xác định được phiếu giao đi, kho xuất/kho gia công, bên nhận, lô và lượng hàng để tra cứu hoặc chọn đúng bước lập/in tiếp theo.

## 8. Những điều cần lưu ý

Phiếu xuất ghi nhận hàng giao đi; không thay thế phiếu yêu cầu quy cách hoặc nhập thành phẩm. Không cộng số lượng, kiện, kg và m³ vào cùng một tổng.

## 9. Vướng mắc thường gặp

- **Thiếu ngày xuất, xe, tài xế, kho hoặc mã phiếu gốc**: Cách xử lý: Hoàn thiện đúng các ô bắt buộc của phiếu xuất; mã phiếu tự sinh không thay mã gốc.
- **Lô cần chọn không xuất hiện**: Cách xử lý: Kiểm tra hàng và Kho xuất trước mở chọn lô; danh sách lô phụ thuộc cả hai lựa chọn này.
- **Khối lượng/kiện/m³ không khớp**: Cách xử lý: Kiểm tra số lượng và thông số trọng lượng/thể tích/quy đổi phụ của hàng; không sửa bằng cách đổi Đvt tùy ý.
- **Bạn chỉ được xóa phiếu do mình tạo**: Cách xử lý: Đối chiếu người tạo và chuyển người có trách nhiệm xử lý; không tạo phiếu khác để bù khi chưa xác định sai lệch.

## 10. Câu hỏi thường gặp

**Vì sao Khối lượng, Kiện hoặc M³ để trống?** Các cột lấy theo thông số hàng và quy đổi; kiểm tra số lượng và danh mục hàng, đặc biệt Kiện chỉ tính khi tỷ lệ quy đổi phụ > 1.

## 11. Công việc tiếp theo

Chuyển chứng từ cho bộ phận tiếp nhận; theo dõi tiến độ bằng các báo cáo của cùng quy trình trong phần c Thống kê sản xuất.

## 12. Bài hướng dẫn liên quan

[TỔNG QUAN PHIẾU XUẤT GIA CÔNG](/bai-viet/2026-11-07-sx-b01-0-tong-quan-phieu-xuat-gia-cong/) — Phiếu xuất gia công; [LẬP PHIẾU XUẤT GIA CÔNG](/bai-viet/2026-11-07-sx-b01-1-lap-phieu-xuat-gia-cong/) — Lập phiếu xuất gia công; [IN PHIẾU XUẤT GIA CÔNG](/bai-viet/2026-11-07-sx-b01-2-in-phieu-xuat-gia-cong/) — In phiếu xuất gia công.

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
