---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG"
date: "2026-11-07"
summary: "Màn hình Công nợ khách hàng cho biết từng khách hàng còn nợ công ty bao nhiêu trong khoảng ngày bạn chọn, tại chi nhánh đang làm việc: nợ đầu kỳ, tiền bán, tiền đã thu, hàng trả lại, tiền chi cho khách, cấn trừ, giảm trừ, nợ cuối kỳ, kèm tuổi nợ quá hạn và phân loại tín dụng của khách."
module: "Kế toán"
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

Màn hình **Công nợ khách hàng** cho biết từng **khách hàng còn nợ** công ty bao nhiêu trong khoảng ngày bạn chọn, tại **chi nhánh đang làm việc**: nợ đầu kỳ, tiền bán, tiền đã thu, hàng trả lại, tiền chi cho khách, cấn trừ, giảm trừ, nợ cuối kỳ, kèm **tuổi nợ quá hạn** và **phân loại tín dụng** của khách.

Từ mỗi dòng bạn:

- Xem chi tiết từng chứng từ và mở chứng từ gốc.
- In **biên bản đối chiếu công nợ** theo 6 mẫu, in **thư xác nhận số dư phục vụ kiểm toán**, in **bảng kê công nợ quá hạn**.
- Ghi lại **lần gửi đối chiếu công nợ** cho khách (gửi lúc nào, cách gửi, khách phản hồi thế nào) và xem lại lịch sử gửi. Hệ thống chỉ ghi nhận, không tự gửi biên bản cho khách.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Tài khoản được phân **nhóm khách hàng** cần xem (do quản trị hệ thống thiết lập). Tài khoản chưa được phân nhóm nào sẽ thấy lưới trống.
- Đang làm việc đúng **chi nhánh** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có chứng từ ghi khách hàng: phiếu xuất kho bán hàng, phiếu bán dịch vụ, phiếu nhập trả hàng mượn, phiếu nhập kho khách trả hàng, phiếu giảm giá, phiếu thu, phiếu chi, phiếu cấn trừ.

## 2. Mở chức năng

**Thống kê công nợ → Công nợ khách hàng**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/posts/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/hinh-01-man-hinh-cong-no-khach-hang.png)

- **Ô khoảng ngày**: Chức năng: Chọn kỳ xem. Lần đầu là **Hôm nay**, lần sau nhớ lựa chọn gần nhất; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Nút Gửi đối chiếu**: Chức năng: Mở hộp thoại **GỬI Đ/C CÔNG NỢ**, chưa chọn khách; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Nút Lịch sử gửi đ/c**: Chức năng: Mở **LỊCH SỬ GỬI Đ/C CÔNG NỢ** của mọi khách; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Vùng Kéo tiêu đề một cột vào đây để nhóm cột đó**: Chức năng: Kéo tiêu đề cột vào để nhóm (ví dụ theo **Tên khách chính**); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, ô Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm; dưới tiêu đề cột có hàng lọc; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tiêu đề nhóm cột THÔNG TIN KHÁCH HÀNG**: Chức năng: Gom các cột thông tin khách (bảng dưới)

Cột **Nhân Viên KD** ở Hình 1 hiện **CÔNG NỢ** — đó là tên **nhóm khách hàng** của khách, không phải tên nhân viên (xem phần “Những điều cần lưu ý”).

Kéo thanh cuộn ngang sang phải để xem các cột tiền:

![Hình 2: Nhóm cột CÔNG NỢ – phần đầu](/posts/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/hinh-02-cot-cong-no-phan-1.png)

- **Tiêu đề nhóm cột CÔNG NỢ**: Chức năng: Gom các cột từ **Nợ đầu kỳ** đến **Nợ cuối kỳ**
- **Cột Nợ đầu kỳ**: Chức năng: Hình 2: khách thử còn nợ **658,240** trước ngày 12/10/2026
- **Dòng tổng cuối lưới**: Chức năng: Tổng các cột tiền (không có chữ **TỔNG CỘNG**, không đếm số dòng)

![Hình 3: Nhóm cột CÔNG NỢ – phần cuối, nhóm KHÁC và QUÁ HẠN](/posts/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/hinh-03-cot-cong-no-phan-2.png)

- **Cột Nợ cuối kỳ**: Chức năng: Hình 3: **354,000** = Nợ đầu kỳ 658,240 − Tiền thu 304,240
- **Nhóm cột KHÁC (Không tính nợ)**: Chức năng: Một cột **Tiền chi**: phiếu chi cho khách đánh dấu **Không tính nợ**
- **Cột 01-15 ngày**: Chức năng: Cột đầu của nhóm **QUÁ HẠN**

Tiếp sau nhóm **QUÁ HẠN** là nhóm **LUỸ KẾ THÁNG …**, chỉ hiện khi khoảng ngày là **một ngày** (xem phần “Giải thích các thông tin trên màn hình”).

**Các cột trên lưới:**

- **THÔNG TIN KHÁCH HÀNG**: Cột: Nhân Viên KD; Ý nghĩa: Tên **nhóm khách hàng** của khách, không phải tên nhân viên (Hình 1: **CÔNG NỢ**; phần “Những điều cần lưu ý”)
- **THÔNG TIN KHÁCH HÀNG**: Cột: Tên khách chính; Ý nghĩa: Tên **khách hàng chính** nếu khách là chi nhánh / đơn vị con; không có thì là chính khách đó
- **THÔNG TIN KHÁCH HÀNG**: Cột: Loại khách hàng; Ý nghĩa: Loại khách trong danh mục
- **THÔNG TIN KHÁCH HÀNG**: Cột: Phân loại tín dụng; Ý nghĩa: Xếp loại theo tuổi nợ quá hạn (xem phần “Giải thích các thông tin trên màn hình”)
- **THÔNG TIN KHÁCH HÀNG**: Cột: Khách hàng; Ý nghĩa: Tên khách hàng
- **THÔNG TIN KHÁCH HÀNG**: Cột: Số ngày nợ; Ý nghĩa: Số ngày được nợ trong danh mục khách hàng
- **THÔNG TIN KHÁCH HÀNG**: Cột: Tên rút gọn, Mã số thuế, Mã khách hàng, Địa chỉ, Địa chỉ /Khu vực, Điện thoại; Ý nghĩa: Ẩn sẵn, bật bằng **Trình chọn cột**
- **CÔNG NỢ**: Cột: Nợ đầu kỳ; Ý nghĩa: Số khách còn nợ **trước ngày đầu** của kỳ
- **CÔNG NỢ**: Cột: Tiền bán; Ý nghĩa: Tiền bán hàng, bán dịch vụ, bán hàng mượn trong kỳ (tăng nợ)
- **CÔNG NỢ**: Cột: Tiền thu; Ý nghĩa: Tiền đã thu của khách trong kỳ (giảm nợ)
- **CÔNG NỢ**: Cột: Trả hàng; Ý nghĩa: Tiền hàng khách trả lại trong kỳ (giảm nợ)
- **CÔNG NỢ**: Cột: Tiền chi; Ý nghĩa: Tiền công ty chi cho khách **có tính nợ** (tăng nợ)
- **CÔNG NỢ**: Cột: Tiền cấn trừ; Ý nghĩa: Tiền cấn trừ công nợ (giảm nợ)
- **CÔNG NỢ**: Cột: Tiền giảm trừ; Ý nghĩa: Phiếu giảm giá hình thức **Trừ công nợ** (giảm nợ)
- **CÔNG NỢ**: Cột: Doanh số thực tế; Ý nghĩa: Tiền bán − Trả hàng (không ảnh hưởng nợ)
- **CÔNG NỢ**: Cột: Nợ cuối kỳ; Ý nghĩa: Số khách còn nợ **cuối ngày cuối** của kỳ
- **CÔNG NỢ**: Cột: Nợ cuối; Ý nghĩa: Ẩn sẵn. Số còn nợ **tại thời điểm xem** (không theo kỳ)
- **KHÁC (Không tính nợ)**: Cột: Tiền chi; Ý nghĩa: Phiếu chi cho khách có đánh dấu **Không tính nợ**
- **QUÁ HẠN**: Cột: 01-15 ngày, 16-30 ngày, 31-45 ngày, 46-60 ngày, >60 ngày, Tổng quá hạn; Ý nghĩa: Nợ quá hạn tính tại **ngày cuối kỳ**, cùng cách tính màn **Công nợ quá hạn** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ QUÁ HẠN](/bai-viet/2026-11-07-kt-c03-0-tong-quan-man-hinh-thong-ke-cong-no-qua-han/))
- **LUỸ KẾ THÁNG …**: Cột: Tiền bán, Tiền thu, Trả hàng, Tiền chi, Chi khác, Tiền cấn trừ, Doanh số thực tế; Ý nghĩa: Cộng dồn từ **ngày 1 của tháng** đến ngày đang xem

**Menu chuột phải trên một dòng** — bấm chọn dòng (dòng tô xám) rồi chuột phải:

![Hình 4: Menu chuột phải trên dòng khách hàng](/posts/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/hinh-04-menu-chuot-phai.png)

- **Dòng đã chọn**: Chức năng: Dòng khách thử (ô **Nhân Viên KD** hiện **CÔNG NỢ**)
- **Menu chuột phải**: Chức năng: Các mục ở bảng dưới. Khách thử không có nợ quá hạn nên menu không có **Bảng kê công nợ quá hạn**

- **Bảng kê công nợ quá hạn**: Chức năng: Chỉ hiện (ở đầu menu) khi **Tổng quá hạn** > 0. Mở bản xem trước **BẢNG KÊ CÔNG NỢ QUÁ HẠN** của khách tại ngày cuối kỳ ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ QUÁ HẠN](/bai-viet/2026-11-07-kt-c03-0-tong-quan-man-hinh-thong-ke-cong-no-qua-han/), [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/))
- **Chi tiết công nợ**: Chức năng: Mở hộp thoại **KHÁCH HÀNG - CHI TIẾT CÔNG NỢ: "…"** kèm mã khách hàng (Hình 5)
- **Đối chiếu công nợ - Mẫu 1, - Mẫu 2, - Mẫu 3 (10% VAT), - Mẫu 3 (8% VAT), - Mẫu 4, - Mẫu 5, - Mẫu 6**: Chức năng: Mở bản xem trước biên bản **ĐỐI CHIẾU CÔNG NỢ** theo mẫu (Hình 6, bảng mẫu dưới)
- **Kiểm toán**: Chức năng: Mở bản xem trước thư xác nhận số dư phải thu phục vụ kiểm toán
- **Gửi đ/c công nợ**: Chức năng: Mở **GỬI Đ/C CÔNG NỢ**, điền sẵn khách của dòng (Hình 7, phần “Thực hiện trên phần mềm”)
- **Lịch sử gửi đ/c công nợ**: Chức năng: Mở **LỊCH SỬ GỬI Đ/C CÔNG NỢ** của khách đó (Hình 8, phần “Thực hiện trên phần mềm”)

Chuột phải **tiêu đề cột** có **Khôi phục bố cục** để đưa lưới về bố cục mặc định ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

![Hình 5: Hộp thoại KHÁCH HÀNG - CHI TIẾT CÔNG NỢ](/posts/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/hinh-05-hop-thoai-chi-tiet-cong-no.png)

Hình 5: khách thử mã **KH000021**, ngày 12/10/2026 có phiếu thu PT00113316 (**Thu công nợ**); dòng tổng **Nợ đầu kỳ: 658,240**.

- **Tải lại**: Chức năng: Lấy lại danh sách
- **Lưới chứng từ**: Chức năng: **STT**, **Ngày phát sinh**, **Mã phiếu**, **Mã phiếu gốc**, **Số hóa đơn**, **Nội dung**, **Ghi chú**, **Nhân viên** (người lập phiếu), **Số hợp đồng**; cuộn ngang thấy **Tiền bán**, **Tiền thu**, **Khách trả hàng**, **Tiền chi**, **Chi khác**, **Còn lại**
- **Cột Nội dung**: Chức năng: Loại chứng từ: **Xuất bán hàng**, **Dịch vụ**, **Bán hàng mượn**, **Nhập trả hàng**, **Thu công nợ**, **Cấn trừ công nợ**, **Giảm trừ công nợ**, **Chi công nợ**, **Chi khác**
- **Dòng tổng**: Chức năng: **TỔNG CỘNG:**, **Nợ đầu kỳ: …**, tổng từng cột tiền, **Nợ cuối kỳ: …**
- **Một dòng chứng từ**: Chức năng: Nhấp đúp để mở chứng từ gốc ở chế độ xem: **THÔNG TIN PHIẾU XUẤT KHO**, **THÔNG TIN PHIẾU NHẬP KHO**, **THÔNG TIN PHIẾU THU**, **THÔNG TIN PHIẾU CHI**, **THÔNG TIN PHIẾU CẤN TRỪ**

Các dòng xếp theo **thứ tự lập phiếu**. **Số hóa đơn** chỉ có ở dòng phiếu xuất kho (gộp các số hoá đơn ghi trên chi tiết phiếu). Trên lưới có **Xuất Excel**, **Trình chọn cột**, **Tìm kiếm…**; dưới lưới có **Tạo Bộ lọc** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Đóng hộp thoại bằng dấu **×** góc trên phải.

![Hình 6: Bản xem trước Đối chiếu công nợ - Mẫu 2](/posts/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/hinh-06-xem-truoc-doi-chieu-mau-2.png)

Bản xem trước mở thẳng thân biên bản (không có tiêu đề hộp thoại). Thanh công cụ: **In**, **Xuất**, chuyển trang, phóng to (130%), **Trang đơn**, **Sửa mẫu**, **Đóng** ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)). Đầu biên bản: **ĐỐI CHIẾU CÔNG NỢ**, kỳ **Từ … đến …**, **Chúng tôi thông báo đến:** (khách hàng), **Địa chỉ:**, rồi:

- **phần hướng dẫn bên dưới./**: Ghi chú: **Tính đến hết ngày** trước kỳ, Quý Công ty còn nợ (= **Nợ đầu kỳ**; Hình 6: 658,240)
- **phần hướng dẫn bên dưới./ — bảng phát sinh**: Ghi chú: Mẫu 2: **STT**, **NGÀY PHÁT SINH**, **HÓA ĐƠN**, **DIỄN GIẢI**, **THÀNH TIỀN**, **THANH TOÁN**, **CÒN LẠI** (luỹ tiến), **GHI CHÚ**; dòng **TỔNG CỘNG:**. Dòng phiếu thu ghi nội dung thu và tài khoản ở **DIỄN GIẢI** (ví dụ "THU CÔNG NỢ KHÁCH HÀNG (VT+VP) (131 - Phải thu của khách hàng)"), số tiền ở **THANH TOÁN**, ghi chú phiếu ở **GHI CHÚ**
- **phần hướng dẫn bên dưới./ và Bằng chữ:**: Ghi chú: **Tính đến hết ngày** cuối kỳ, Quý Công ty còn nợ Cty Hồng Nghi (= **Nợ cuối kỳ**; Hình 6: 354,000, "Ba trăm năm mươi bốn nghìn đồng./")

Cuối biên bản là đoạn ghi chú (lập 02 bản; sau 03 ngày làm việc không phản hồi thì coi như chấp nhận) và chỗ ký hai bên. Mọi mẫu đối chiếu có chung phần đầu, phần “Tên bài”./, phần “Chuẩn bị trước khi thực hiện”./ và phần ký; chỉ khác bảng phát sinh (phần “Chức năng này dùng để làm gì?”./):

- **Mẫu 1**: Bảng phát sinh (xem phần “Chức năng này dùng để làm gì?”): Theo **từng mặt hàng**: **TÊN SẢN PHẨM**, **DÀY**, **RỘNG**, **DÀI**, **ĐVT**, **SL**, **ĐƠN GIÁ**, **THÀNH TIỀN** (đã gồm VAT), **THANH TOÁN**, **GHI CHÚ**
- **Mẫu 2**: Bảng phát sinh (xem phần “Chức năng này dùng để làm gì?”): Theo **từng chứng từ** (Hình 6): **STT**, **NGÀY PHÁT SINH**, **HÓA ĐƠN**, **DIỄN GIẢI**, **THÀNH TIỀN**, **THANH TOÁN**, **CÒN LẠI** (luỹ tiến), **GHI CHÚ**
- **Mẫu 3 (10% VAT)**: Bảng phát sinh (xem phần “Chức năng này dùng để làm gì?”): Từng mặt hàng, **ĐƠN GIÁ** và **THÀNH TIỀN** chưa VAT (đã trừ chiết khấu), cột **CÒN LẠI**; cuối bảng **THUẾ VAT (10%)** và **TỔNG CỘNG VAT**
- **Mẫu 3 (8% VAT)**: Bảng phát sinh (xem phần “Chức năng này dùng để làm gì?”): Như trên với **THUẾ VAT (8%)**
- **Mẫu 4**: Bảng phát sinh (xem phần “Chức năng này dùng để làm gì?”): Từng mặt hàng: **SỐ HĐ**, **ĐVT**, **SL**, **ĐƠN GIÁ**, **THÀNH TIỀN** (đã gồm VAT), **THANH TOÁN**
- **Mẫu 5**: Bảng phát sinh (xem phần “Chức năng này dùng để làm gì?”): Như Mẫu 3, thêm cột **MÃ PXK**; VAT tính **8%**
- **Mẫu 6**: Bảng phát sinh (xem phần “Chức năng này dùng để làm gì?”): Đầy đủ: **Tên hàng hóa / Diễn giải**, **Ngày chứng từ**, **Số HĐ**, **Số PXK**, **Số PO**, **ĐVT**, **SL**, **Đơn giá**, **CK**, **Thành tiền**, **VAT**, **T.Tiền có VAT**, **Thanh toán**, **Còn lại**, **Ghi chú**

Thư **Kiểm toán** gửi khách: **Kính gửi:**, **V/v: Xác nhận các khoản Phải thu…**; số dư tại **ngày cuối kỳ** tách hai dòng: **Khoản công ty đã thu của Quý khách hàng** (khi Nợ cuối kỳ âm, khách trả trước / trả thừa) và **Khoản công ty còn phải thu của Quý khách hàng** (khi Nợ cuối kỳ dương); phần khách ký đồng ý hoặc ghi chênh lệch.

Bấm **Đóng** trên thanh công cụ bản xem trước để quay lại. Nút **In**, **Xuất** chỉ hiện khi có quyền **In đối chiếu**.

## 4. Trình tự công việc

```text
Phiếu xuất kho bán, Phiếu bán dịch vụ, Nhập trả hàng mượn  → tăng nợ (Tiền bán)
Phiếu chi cho khách có tính nợ (KT-A04)                     → tăng nợ (Tiền chi)
Phiếu thu (KT-A03), Phiếu cấn trừ (KT-A05)                  → giảm nợ
Phiếu giảm giá Trừ công nợ (BH-A05), Khách trả hàng (BH-A04) → giảm nợ
                    ↓
Công nợ khách hàng: Nợ đầu kỳ → phát sinh → Nợ cuối kỳ + tuổi nợ quá hạn
├── Chi tiết công nợ → nhấp đúp → chứng từ gốc
├── Đối chiếu công nợ (Mẫu 1 đến 6) / Kiểm toán → in (GEN-06)
├── Gửi đ/c công nợ (chỉ ghi nhận) → Lịch sử gửi đ/c công nợ → cập nhật phản hồi
├── Bảng kê công nợ quá hạn (KT-C03.0)
└── Xuất Excel (GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Xem nợ khách tháng**: Cách làm: Chọn **Tháng này** / **Tháng trước** ở ô  (Hình 1); Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem phát sinh một ngày kèm luỹ kế tháng**: Cách làm: Chọn **Hôm nay** hoặc một ngày; Bài hướng dẫn: phần “Giải thích các thông tin trên màn hình”
- **Xem nợ theo khách chính / nhóm khách hàng**: Cách làm: Kéo cột **Tên khách chính** / **Nhân Viên KD** (là nhóm khách hàng) vào vùng nhóm; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem chứng từ của một khách**: Cách làm: Chuột phải dòng → **Chi tiết công nợ**; Bài hướng dẫn: Hình 5
- **In đối chiếu công nợ**: Cách làm: Chuột phải dòng → **Đối chiếu công nợ - Mẫu …**; Bài hướng dẫn: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Ghi lần gửi đối chiếu**: Cách làm: Chuột phải dòng → **Gửi đ/c công nợ**; Bài hướng dẫn: Bước 5–6
- **Cập nhật phản hồi của khách**: Cách làm: **Lịch sử gửi đ/c** → nhấp đúp dòng; Bài hướng dẫn: Bước 7–8
- **In bảng kê nợ quá hạn**: Cách làm: Chuột phải dòng → **Bảng kê công nợ quá hạn**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ QUÁ HẠN](/bai-viet/2026-11-07-kt-c03-0-tong-quan-man-hinh-thong-ke-cong-no-qua-han/)
- **Thu tiền khách**: Cách làm: Lập phiếu thu; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/)

### In đối chiếu công nợ và ghi lần gửi

**Bước 1 –** Mở **Thống kê công nợ → Công nợ khách hàng**, chọn kỳ đối chiếu (ví dụ **Tháng trước**) ở ô khoảng ngày  (Hình 1).

**Bước 2 –** Tìm khách hàng: gõ vào ô **Tìm kiếm…**  hoặc hàng lọc dưới tiêu đề cột.

**Bước 3 –** Bấm chọn dòng, chuột phải → **Chi tiết công nợ** (Hình 5). Kiểm từng chứng từ; dòng cuối cột **Còn lại** phải bằng **Nợ cuối kỳ**. Đóng hộp thoại bằng dấu **×**.

**Bước 4 –** Chuột phải dòng → **Đối chiếu công nợ - Mẫu …** (khách quen nhận mẫu nào thì chọn mẫu đó). Kiểm mục **1./** và **3./** khớp **Nợ đầu kỳ**, **Nợ cuối kỳ** (Hình 6), rồi bấm **In** hoặc **Xuất** để lưu file ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)). Bấm **Đóng**.

**Bước 5 –** Tự gửi biên bản cho khách (email, Zalo, giấy…) — hệ thống không gửi thay. Quay lại lưới, chuột phải dòng → **Gửi đ/c công nợ**. Hộp thoại **GỬI Đ/C CÔNG NỢ** mở ra với khách của dòng.

![Hình 7: Hộp thoại GỬI Đ/C CÔNG NỢ](/posts/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/hinh-07-hop-thoai-gui-doi-chieu.png)

Hình 7: hộp thoại mở từ chuột phải dòng khách thử, đã nhập hình thức gửi, trạng thái, ghi chú. Trường có dấu * sau nhãn là bắt buộc.

- Trường: **NGÀY GỬI Đ/C**; Bắt buộc: Có; Ghi chú: Mặc định hôm nay; sửa thành ngày đã gửi biên bản
- Trường: **KHÁCH HÀNG**; Bắt buộc: Có; Ghi chú: Điền sẵn khi mở từ chuột phải; mở bằng nút **Gửi đối chiếu** thì gõ tên hoặc mã để chọn. Danh sách gồm mọi khách đang dùng, không lọc theo nhóm được phân
- Trường: **NGƯỜI HỨA HẸN**; Bắt buộc: Không; Ghi chú: Người bên khách hứa trả
- Trường: **NỘI DUNG PHẢN HỒI**; Bắt buộc: Không; Ghi chú: Khách phản hồi gì
- Trường: **NGÀY HẸN TRẢ**; Bắt buộc: Không; Ghi chú: Ngày khách hẹn thanh toán
- Trường: **HÌNH THỨC GỬI**; Bắt buộc: Có; Ghi chú: Chọn **Email**, **Zalo**, **Giấy**, **Gửi xe**, **Gửi xe khách**, **Chuyển phát nhanh** hoặc gõ cách khác; dấu **×** trong ô để xoá
- Trường: **NGƯỜI GỬI Đ/C**; Bắt buộc: Có; Ghi chú: Mặc định là tài khoản đang dùng
- Trường: **TRẠNG THÁI**; Bắt buộc: Có; Ghi chú: Mở ra trống (**Lựa chọn...**). Chọn **Chờ phản hồi**, **Đã nhận**, **Không phản hồi**, **Không trả lại**
- Trường: **GHI CHÚ**; Bắt buộc: Không
- Trường: **Lưu lại** / **Đóng**; Ghi chú: **Lưu lại** ghi lần gửi; **Đóng** thoát không lưu

**Bước 6 –** Kiểm **NGÀY GỬI Đ/C**, chọn hoặc gõ **HÌNH THỨC GỬI**, chọn **TRẠNG THÁI** **Chờ phản hồi**, ghi **GHI CHÚ** nếu cần. Bấm **Lưu lại**. Hệ thống báo **Lưu thành công**.

**Bước 7 –** Xem lại các lần gửi: bấm nút **Lịch sử gửi đ/c**  (Hình 1), hoặc chuột phải dòng → **Lịch sử gửi đ/c công nợ**.

![Hình 8: Hộp thoại LỊCH SỬ GỬI Đ/C CÔNG NỢ](/posts/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/hinh-08-hop-thoai-lich-su-gui-doi-chieu.png)

- **Ô khoảng ngày**: Chức năng: Lọc theo ngày gửi đối chiếu (khi mở bằng nút **Lịch sử gửi đ/c**)
- **Tải lại**: Chức năng: Lấy lại danh sách
- **Tiêu đề cột**: Chức năng: **STT**, **Ngày gửi đối chiếu**, **Khách hàng**, **Nhân viên gửi**, **Hình thức gửi**, **Ngày hẹn trả**, **Người hẹn trả**, **Nội dung**, **Trạng thái**; cuộn ngang thấy **Ghi chú**, **Người tạo**, **Thời gian tạo**
- **Dòng tổng**: Chức năng: **TỔNG CỘNG: n** (số lần gửi)

- Mở bằng nút **Lịch sử gửi đ/c**: liệt kê mọi lần gửi có **ngày gửi** trong khoảng ngày, của các khách thuộc nhóm bạn được phân.
- Mở bằng chuột phải **Lịch sử gửi đ/c công nợ**: liệt kê **mọi** lần gửi của khách đó tại chi nhánh, không theo khoảng ngày.

Đóng hộp thoại bằng dấu **×** góc trên phải.

**Bước 8 –** Khi khách phản hồi: nhấp đúp dòng trong **LỊCH SỬ GỬI Đ/C CÔNG NỢ** để mở **CẬP NHẬT LỊCH GỬI Đ/C CÔNG NỢ** (không sửa được ngày gửi, khách hàng, người gửi). Nhập **NỘI DUNG PHẢN HỒI**, **NGƯỜI HỨA HẸN**, **NGÀY HẸN TRẢ**, đổi **TRẠNG THÁI** sang **Đã nhận**, bấm **Lưu lại**.

## 6. Giải thích các thông tin trên màn hình

Mọi số liệu lấy theo **chi nhánh đang làm việc**, so **ngày** của chứng từ (bỏ giờ); chỉ khách thuộc **nhóm khách hàng được phân** cho tài khoản.

- **Tiền bán**: Cách tính: Tổng tiền phiếu **xuất kho** ghi khách + phiếu **bán dịch vụ** + phiếu **nhập trả mượn hàng** ghi khách (khách mua luôn hàng mượn), có ngày trong kỳ
- **Tiền thu**: Cách tính: Số tiền thu + số tiền giảm của phiếu thu ghi khách
- **Trả hàng**: Cách tính: Tổng tiền phiếu **nhập kho** ghi khách (khách trả hàng)
- **Tiền chi**: Cách tính: Số tiền chi + số tiền giảm của phiếu chi ghi khách, **không** đánh dấu **Không tính nợ**
- **Tiền cấn trừ**: Cách tính: Số tiền cấn trừ của phiếu cấn trừ ghi khách
- **Tiền giảm trừ**: Cách tính: Tổng tiền phiếu giảm giá hình thức **Trừ công nợ** ghi khách
- **KHÁC – Tiền chi**: Cách tính: Như Tiền chi nhưng phiếu chi **có** đánh dấu **Không tính nợ**
- **Doanh số thực tế**: Cách tính: Tiền bán − Trả hàng
- **Nợ cuối kỳ**: Cách tính: Nợ hiện tại − phát sinh tăng nợ **sau** kỳ + phát sinh giảm nợ **sau** kỳ
- **Nợ đầu kỳ**: Cách tính: Nợ cuối kỳ − Tiền bán − Tiền chi + Tiền thu + Tiền cấn trừ + Tiền giảm trừ + Trả hàng
- **Nợ cuối**: Cách tính: Công nợ hiện tại hệ thống đang lưu cho khách tại chi nhánh
- **Luỹ kế tháng**: Cách tính: Như các cột phát sinh, tính từ ngày 1 của tháng đến ngày đang xem
- **Còn lại (hộp thoại chi tiết)**: Cách tính: Luỹ tiến từng dòng: Nợ đầu kỳ + Tiền bán − Khách trả hàng − Tiền thu + Tiền chi

Như vậy: **Nợ cuối kỳ = Nợ đầu kỳ + Tiền bán + Tiền chi − Tiền thu − Tiền cấn trừ − Tiền giảm trừ − Trả hàng**. Số **dương** là khách **còn nợ**; số **âm** là khách trả trước / trả thừa.

**Phân loại tín dụng** (theo nợ quá hạn tại ngày cuối kỳ):

- **Nợ khó đòi**: Khi: Có nợ quá hạn > 60 ngày
- **Cảnh báo**: Khi: Có nợ quá hạn 31–60 ngày
- **Cần theo dõi sát**: Khi: Có nợ quá hạn 16–30 ngày
- **Thanh toán chậm**: Khi: Có nợ quá hạn 01–15 ngày
- **Không có nợ quá hạn**: Khi: Không có khoản quá hạn

Xét từ mức nặng nhất xuống: khách có cả nợ > 60 ngày và nợ 01–15 ngày xếp **Nợ khó đòi**.

Dòng được hiện khi có ít nhất một số khác 0 (kể cả cột luỹ kế); xếp theo mã khách hàng.

## 7. Kiểm tra sau khi thực hiện

Bạn biết số nợ từng khách trong kỳ, tuổi nợ và mức tín dụng của khách, xem được chứng từ tạo nên số đó, in được biên bản đối chiếu / thư kiểm toán và theo dõi được việc gửi đối chiếu. Lưu **GỬI Đ/C CÔNG NỢ** chỉ ghi lịch sử, không làm đổi số nợ và không gửi gì cho khách.

## 8. Những điều cần lưu ý

⚠️ Nợ đầu / cuối kỳ được **tính lùi từ công nợ hiện tại**. Sửa, xoá chứng từ của kỳ cũ làm thay đổi số của mọi kỳ sau; biên bản đã in trước đó có thể không còn khớp.

⚠️ Cột **Nhân Viên KD** hiện tên **nhóm khách hàng** của khách (Hình 1: **CÔNG NỢ**), không phải nhân viên kinh doanh phụ trách. Nhóm lưới theo cột này là nhóm theo nhóm khách hàng.

⚠️ **GỬI Đ/C CÔNG NỢ** chỉ **ghi nhận** lần gửi, không gửi email / Zalo cho khách dù **HÌNH THỨC GỬI** là Email hay Zalo. Bạn tự gửi biên bản (phần “Thực hiện trên phần mềm”, Bước 5) rồi ghi lại.

⚠️ Bạn chỉ thấy khách thuộc **nhóm khách hàng được phân**, kể cả tài khoản quản trị. Tổng của màn này vì vậy có thể nhỏ hơn tổng công nợ phải thu của chi nhánh.

⚠️ Trong hộp thoại chi tiết: dòng **Cấn trừ công nợ** và **Giảm trừ công nợ** hiện ở cột **Tiền thu**; dòng **Dịch vụ**, **Bán hàng mượn** hiện ở cột **Tiền bán**.

⚠️ Nhấp đúp dòng **Dịch vụ**, **Bán hàng mượn**, **Giảm trừ công nợ** trong hộp thoại chi tiết hiện không mở chứng từ. Xem phiếu ở màn tương ứng ([TỔNG QUAN MÀN HÌNH PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-0-tong-quan-man-hinh-phieu-ban-dich-vu/), [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP TRẢ](/bai-viet/2026-11-07-kho-b02-0-tong-quan-man-hinh-phieu-nhap-tra/), [TỔNG QUAN MÀN HÌNH PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-0-tong-quan-man-hinh-phieu-giam-gia/)).

⚠️ **Phiếu giảm giá Trừ công nợ chưa được kế toán duyệt** đã hiện ở cột **Tiền giảm trừ**, nhưng chưa trừ vào nợ thực tế. Trong thời gian chờ duyệt, **Nợ đầu kỳ** (và Nợ cuối kỳ của các kỳ trước) cao hơn thực tế đúng bằng số tiền phiếu đó. Duyệt phiếu giảm giá ([HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-2-huong-dan-duyet-xac-nhan-va-chi-tien-phieu-giam-gia/)) trước khi đối chiếu.

⚠️ Phiếu chi cho khách đánh dấu **Không tính nợ** chỉ hiện ở **KHÁC (Không tính nợ)**, không làm đổi nợ. Phiếu **thu** của khách luôn làm giảm nợ, dù có đánh dấu **Không tính nợ**.

⚠️ Mẫu **3** và **5** tính dòng **THUẾ VAT** bằng một tỷ lệ cố định (10% hoặc 8%) trên tổng tiền chưa VAT, không lấy VAT thật trên từng phiếu. Khách có hàng chịu thuế suất khác, hoặc có hàng không thuế, thì **TỔNG CỘNG VAT** không khớp số nợ ở phần “Chuẩn bị trước khi thực hiện” — dùng Mẫu 2 hoặc Mẫu 6.

⚠️ Bảng phát sinh của biên bản tính tiền theo từng dòng hàng; với phiếu nhập trả mượn hàng chỉ lấy dòng **trả bằng tiền**. Dòng **TỔNG CỘNG** của bảng có thể lệch so với phát sinh trên lưới; phần “Tên bài”, phần “Chuẩn bị trước khi thực hiện” luôn lấy đúng **Nợ đầu kỳ**, **Nợ cuối kỳ**.

⚠️ **Số hợp đồng** là hợp đồng bán hàng lập gần nhất **còn hiệu lực tại hôm nay**, không phải hợp đồng của kỳ đang xem. Chữ trạng thái trong ngoặc (ví dụ **(Đã gửi)**) cũng in ra dòng **Theo hợp đồng số** của biên bản (Hình 6).

⚠️ **Số lệch với Sổ chi tiết tài khoản 131 ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/)).** Màn này tính theo **ngày chứng từ** từ chính các phiếu; sổ chi tiết tính theo **bút toán đã ghi sổ**. Hai bên có thể lệch khi:

- Phiếu chi có **ngày hạch toán** khác ngày chi (sổ ghi theo ngày hạch toán).
- Chứng từ nằm ngoài **kỳ kế toán** nên chưa ghi sổ ([TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/)).
- Có phiếu giảm giá Trừ công nợ chưa duyệt (nêu ở trên).
- Màn này chỉ gồm khách thuộc nhóm bạn được phân và chi nhánh đang làm việc; sổ 131 cộng mọi khách.

### Lưới trống hoặc thiếu khách hàng 

Nguyên nhân: tài khoản chưa được phân nhóm khách hàng của khách; trong kỳ khách không có số nào khác 0; đang ở chi nhánh khác.
Cách xử lý: liên hệ quản trị hệ thống phân nhóm khách hàng; mở rộng khoảng ngày; kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).

### Không thấy mục Bảng kê công nợ quá hạn 

Nguyên nhân: khách không có nợ quá hạn tại ngày cuối kỳ (**Tổng quá hạn** = 0).
Cách xử lý: kiểm tra cột **Tổng quá hạn**; chọn ngày cuối kỳ là hôm nay.

### Không thấy nút in trong bản xem trước đối chiếu 

Nguyên nhân: chưa có quyền **In đối chiếu**.
Cách xử lý: liên hệ quản trị hệ thống.

### "Chọn ngày gửi Đ/c" / "Vui lòng chọn khách hàng" / "Vui lòng cho biết hình thức gửi" / "Vui lòng chọn người gửi đối chiếu" / "Vui lòng cho biết trạng thái" 

Nguyên nhân: bỏ trống trường bắt buộc của hộp thoại **GỬI Đ/C CÔNG NỢ**.
Cách xử lý: nhập đủ các trường, bấm **Lưu lại** lại.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập** màn hình (hoặc quyền màn **Công nợ quá hạn** khi mở bảng kê quá hạn).
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Nợ cuối kỳ khác Nợ cuối thế nào?**
**Nợ cuối kỳ** là số nợ tại ngày cuối kỳ bạn chọn. **Nợ cuối** là số nợ đang có tại lúc xem, gồm cả chứng từ sau kỳ.

**Cột QUÁ HẠN tính tại ngày nào?**
Tại **ngày cuối** của khoảng ngày đang chọn. Chọn **Tháng trước** thì tuổi nợ tính đến cuối tháng trước. Cách chia tiền đã thu cho từng phiếu xem [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ QUÁ HẠN](/bai-viet/2026-11-07-kt-c03-0-tong-quan-man-hinh-thong-ke-cong-no-qua-han/).

**Nên dùng mẫu đối chiếu nào?**
**Mẫu 2** gọn nhất (mỗi chứng từ một dòng, có cột còn lại). **Mẫu 1**, **Mẫu 4**, **Mẫu 6** liệt kê từng mặt hàng (Mẫu 6 đủ cột nhất). **Mẫu 3**, **Mẫu 5** tách thuế VAT theo một tỷ lệ cố định — chỉ dùng khi mọi hàng cùng thuế suất.

**Màn này khác Báo cáo gộp → Công nợ khách hàng thế nào?**
Màn này xem dữ liệu hệ thống đang truy cập. **Báo cáo gộp** chỉ tổng hợp trong phạm vi nguồn dữ liệu được cấu hình; không tự gộp các dữ liệu/tên miền hệ thống chính thức độc lập. Mỗi chi nhánh dùng địa chỉ và tài khoản riêng ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)); xem giới hạn ở sổ tay Báo cáo.

## 11. Công việc tiếp theo

```text
Công nợ khách hàng → in đối chiếu → Gửi đ/c công nợ → khách xác nhận
                   → thu tiền (KT-A03)
                   → khách quá hạn → Công nợ quá hạn (KT-C03.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ QUÁ HẠN](/bai-viet/2026-11-07-kt-c03-0-tong-quan-man-hinh-thong-ke-cong-no-qua-han/) – Tổng quan màn hình thống kê Công nợ quá hạn
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NHÀ CUNG CẤP](/bai-viet/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/) – Tổng quan màn hình thống kê Công nợ nhà cung cấp
- [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/) – Tổng quan màn hình Phiếu thu
- [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/) – Tổng quan màn hình Phiếu chi
- [TỔNG QUAN MÀN HÌNH PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-0-tong-quan-man-hinh-phieu-can-tru/) – Tổng quan màn hình Phiếu cấn trừ
- [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) – Tổng quan màn hình Sổ chi tiết tài khoản
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
- [TỔNG QUAN MÀN HÌNH KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-0-tong-quan-man-hinh-khach-tra-hang/) – Tổng quan màn hình Khách trả hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-0-tong-quan-man-hinh-phieu-giam-gia/) – Tổng quan màn hình Phiếu giảm giá
- [TỔNG QUAN MÀN HÌNH PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-0-tong-quan-man-hinh-phieu-ban-dich-vu/) – Tổng quan màn hình Phiếu bán dịch vụ
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP TRẢ](/bai-viet/2026-11-07-kho-b02-0-tong-quan-man-hinh-phieu-nhap-tra/) – Tổng quan màn hình Phiếu nhập trả
