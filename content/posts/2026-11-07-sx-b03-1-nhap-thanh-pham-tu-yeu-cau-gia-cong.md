---
title: "NHẬP THÀNH PHẨM TỪ YÊU CẦU GIA CÔNG"
date: "2026-11-07"
summary: "Nhập kết quả gia công ván theo phiếu yêu cầu, tách hàng đạt và hàng lỗi, ghi nhận giá gia công, chi phí phát sinh và kho nhận."
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

Nhập kết quả gia công ván theo phiếu yêu cầu, tách hàng đạt và hàng lỗi, ghi nhận giá gia công, chi phí phát sinh và kho nhận.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Có phiếu yêu cầu phù hợp loại gia công và còn phần nhận; chuẩn bị biên bản lượng đạt/lỗi, kho nhận đạt, kho lỗi nếu có, đơn giá/VAT và phí. Phiếu Tại kho phải có nguồn nhân lực; xác định đối tượng tập hợp chi phí theo hướng dẫn kế toán. Kiểm tra các lần nhận trước và phần tất toán để không nhận vượt.

## 2. Mở chức năng

**Sản xuất ván → Phiếu nhập thành phẩm**

## 3. Nhận biết màn hình

Danh sách có mã/ngày nhập, Từ phiếu, loại Yêu cầu G/C, kho gia công/kho nhập, Nhân lực và Đồng bộ API. Chi tiết phiếu hiển thị các dòng kế thừa từ yêu cầu, lượng đạt, tổng lỗi và tổng phí; bấm ô lỗi/phí để xem các dòng cấu thành.

Ảnh minh họa sẽ được bổ sung sau; thao tác chung với danh sách xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/), [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

![Xem lại phiếu NG00113044 từ yêu cầu YC00113042.](/posts/2026-11-07-sx-b03-1-nhap-thanh-pham-tu-yeu-cau-gia-cong/hinh-01-20261030-sx-b03-1-xem-phieu.png)

## 4. Trình tự công việc

Chọn yêu cầu còn lượng → nhận đạt/lỗi và phí → ghi nhận vào kho tương ứng → đối chiếu nguồn và phần chuyển kho.

## 5. Thực hiện trên phần mềm

1. Chọn loại nhập **Tại kho**, **Ngoài** hoặc **Ngoài (đồng bộ API)** rồi chọn đúng phiếu yêu cầu còn phần chưa nhận. Dùng **TỪ PHIẾU YÊU CẦU** nếu phải chọn lại; kiểm tra mã nguồn trước nhập số thực nhận.
2. Đơn vị và kho gia công được lấy từ yêu cầu, chỉ xem. Chọn ngày nhập, kho nhận hàng đạt; với **Tại kho** phải chọn nguồn nhân lực. Đối chiếu kho nhập khác kho gia công theo kiểm tra trên cửa sổ.
3. Kiểm tra các cột kế thừa chỉ xem: khách hàng, hàng hóa, Đvt, cờ xuất nguyên liệu, Y/c, số mặt, số mặt TP và thành phẩm. Sai hàng/quy cách cần kiểm tra lại yêu cầu nguồn.
4. Thay số lượng gợi ý bằng **Số lượng** đạt thực nhận theo biên bản. Gợi ý chưa chứng minh lượng đã giao; đặc biệt khi có tất toán, đã nhận một phần hoặc tỷ lệ khác 1, phải đối chiếu phần còn lại và đơn vị với người phụ trách trước lưu. Bấm ô **Số lượng lỗi** để mở **CHI TIẾT LỖI**, nhập từng loại/lượng lỗi rồi xác nhận; tổng được cộng lên dòng. Nếu có lỗi, chọn **Kho lỗi** riêng. Không nhập hàng lỗi lần nữa vào số lượng đạt.
5. Kiểm tra đơn giá đã gồm VAT và thuế suất. Bấm **Phí phát sinh** mở **CHI PHÍ PHÁT SINH**, khai khoản phí và số tiền rồi xác nhận; tổng phí cộng một lần vào thành tiền. Rà **ĐT tập hợp chi phí**: dòng mới có thể được điền từ mã thành phẩm nếu còn trống; vẫn phải đối chiếu với đối tượng kế toán đã duyệt. Nếu chưa có hoặc không tải được, nhờ người phụ trách kiểm tra thay vì coi gợi ý là đã đầy đủ.
6. Trước ghi nhận, đối chiếu lượng đạt sau quy đổi cộng lượng lỗi với phần nguồn còn cho phép; phải có đạt hoặc lỗi > 0. Kiểm tra TK/kho/chi phí theo hồ sơ được duyệt, không bấm lưu nhiều lần khi đang xử lý.
7. Sau ghi nhận, đối chiếu mã phiếu mới, kho hàng đạt/kho lỗi, từng tổng đạt/lỗi/phí và phần còn lại trên yêu cầu; theo dõi SX-C02 nếu còn bước chuyển kho.

## 6. Giải thích các thông tin trên màn hình

- **NGÀY NHẬP**: Cách nhập, cách đọc và quy tắc: Bắt buộc chọn ngày nhận thành phẩm, cửa sổ mới mặc định hôm nay; kiểm tra ngày thực nhận theo biên bản.
- **ĐƠN VỊ GIA CÔNG**: Cách nhập, cách đọc và quy tắc: Bắt buộc có, chỉ xem theo phiếu yêu cầu được chọn; chọn sai bên thì phải chọn lại yêu cầu nguồn.
- **KHO GIA CÔNG**: Cách nhập, cách đọc và quy tắc: Bắt buộc có, chỉ xem theo yêu cầu nguồn; là kho đang theo dõi hàng gia công, không phải kho thành phẩm nhận vào.
- **MÃ PHIẾU**: Cách nhập, cách đọc và quy tắc: Chỉ xem mã hệ thống cấp khi ghi nhận; dùng đối chiếu đúng phiếu trên danh sách và chứng từ in, không tự nhập mã vào ô này.
- **GHI CHÚ**: Cách nhập, cách đọc và quy tắc: Nhập diễn giải chung cho cả phiếu, không bắt buộc; khác với ghi chú của từng dòng hàng.
- **N.NHÂN LỰC**: Cách nhập, cách đọc và quy tắc: Chọn nguồn thực hiện gia công. Bắt buộc với loại Tại kho; không có kiểm tra bắt buộc tương tự ở nhánh Ngoài/đồng bộ. Dùng nguồn đúng phân công thực tế.
- **KHO NHẬP**: Cách nhập, cách đọc và quy tắc: Bắt buộc chọn kho nhận lượng thành phẩm đạt; kiểm tra khác kho gia công theo điều kiện trên cửa sổ.
- **Khách hàng**: Cách nhập, cách đọc và quy tắc: Khách hàng gắn với dòng đơn đặt hàng, chỉ xem; không phải đơn vị thực hiện gia công.
- **Hàng hóa**: Cách nhập, cách đọc và quy tắc: Chỉ xem hàng đầu vào lấy từ phiếu yêu cầu; muốn thay quy cách hoặc hàng phải kiểm tra lại yêu cầu, không sửa tên ở phiếu nhập.
- **Đvt**: Cách nhập, cách đọc và quy tắc: Chỉ xem đơn vị của dòng nguồn; dùng tỷ lệ quy đổi khi so lượng nhập với phần còn lại của yêu cầu.
- **Xuất n.liệu**: Cách nhập, cách đọc và quy tắc: Chỉ xem theo dòng yêu cầu và loại phiếu; Tại kho có xuất nguyên liệu, yêu cầu nhận từ đối tác cũng được gợi ý có xuất.
- **Y/c**: Cách nhập, cách đọc và quy tắc: Chỉ xem các yêu cầu/định mức của dòng gia công nguồn; không phải một ô nhập lời nhắn.
- **Số mặt**: Cách nhập, cách đọc và quy tắc: Chỉ xem quy cách gia công theo yêu cầu nguồn.
- **Số mặt TP**: Cách nhập, cách đọc và quy tắc: Chỉ xem quy cách bề mặt thành phẩm từ yêu cầu; kiểm tra riêng với số mặt thao tác gia công.
- **Thành phẩm**: Cách nhập, cách đọc và quy tắc: Chỉ xem kết quả hàng gia công gắn với dòng yêu cầu; dùng kiểm tra đúng quy cách trước nhận lượng.
- **Số lượng**: Cách nhập, cách đọc và quy tắc: Nhập số lượng thành phẩm đạt thực nhận theo Đvt. Có thể nhận một phần hoặc để 0 nếu chỉ có hàng lỗi; phải có lượng đạt hoặc lỗi > 0.
- **Số lượng lỗi**: Cách nhập, cách đọc và quy tắc: Chỉ xem tổng từ **CHI TIẾT LỖI**. Bấm ô này để khai loại lỗi và lượng từng loại; tổng lỗi phải khớp biên bản, không cộng lại vào lượng đạt.
- **Đơn giá**: Cách nhập, cách đọc và quy tắc: Đơn giá gia công theo Đvt của dòng, nhập theo thỏa thuận; đây là giá đã gồm VAT dùng tính thành tiền. Có thể được gợi ý từ yêu cầu; đối chiếu thỏa thuận và giá thực lưu của lần nhận, không coi giá gợi ý là đã được duyệt.
- **Thuế VAT**: Cách nhập, cách đọc và quy tắc: Thuế suất áp dụng cho đơn giá, mặc định dòng mới 8%; kiểm tra theo nghiệp vụ thực tế, không cộng thuế thêm vào giá đã gồm VAT.
- **Đơn giá chưa VAT**: Cách nhập, cách đọc và quy tắc: Chỉ xem, tính từ Đơn giá / (1 + tỷ lệ VAT); thay đơn giá hoặc thuế suất để tính lại, không nhập trực tiếp.
- **Giá thành (kết chuyển)**: Cách nhập, cách đọc và quy tắc: Chỉ xem giá nhập trên dòng sổ kho liên quan; không nhập tại phiếu nhận. Nhãn “kết chuyển” không tự chứng minh kỳ đã kết chuyển: phải đối chiếu kỳ và chứng từ giá thành riêng. Ô trống cần rà dòng sổ/giá, không tự coi là vốn 0.
- **Phí phát sinh**: Cách nhập, cách đọc và quy tắc: Chỉ xem tổng từ **CHI PHÍ PHÁT SINH**. Bấm ô này để khai phí từng khoản; tổng cộng vào thành tiền ngoài Số lượng × Đơn giá.
- **Thành tiền**: Cách nhập, cách đọc và quy tắc: Chỉ xem; lưới tính lượng đạt × đơn giá + phí. Khi ghi nhận, hệ thống tính lượng đạt × đơn giá × hệ số + phí phát sinh; hệ số dòng mới 1. Công thức không cộng lượng lỗi vào lượng đạt tính tiền.
- **Kho lỗi**: Cách nhập, cách đọc và quy tắc: Chọn kho nhận hàng lỗi khi tổng số lượng lỗi khác 0; bắt buộc ở trường hợp có lỗi, riêng với Kho nhập hàng đạt.
- **Ghi chú**: Cách nhập, cách đọc và quy tắc: Nhập chú thích riêng của dòng, ví dụ yêu cầu giao/nhận hoặc phần cần đối chiếu; không thay thế lựa chọn yêu cầu gia công.
- **ĐT tập hợp chi phí**: Cách nhập, cách đọc và quy tắc: Kiểm tra đối tượng lấy từ mã thành phẩm của dòng mới còn trống; hệ thống dùng hàng đầu vào khi không có mã thành phẩm để tra. Nếu không tìm được, ô có thể vẫn trống. Chọn theo hướng dẫn kế toán, không dùng Khách hàng/Nguồn nhân lực thay đối tượng.

**Quy tắc số liệu:** Lưới hiển thị thành tiền = lượng đạt × đơn giá + phí; khi ghi nhận hệ thống tính lượng đạt × đơn giá × hệ số + phí phát sinh (dòng mới hệ số 1). Đơn giá chưa VAT = đơn giá / (1 + tỷ lệ VAT). Giới hạn nhận: (lượng yêu cầu − lượng tất toán) × tỷ lệ quy đổi nguồn − lượng đã nhập; lần nhận mới dùng lượng đạt × tỷ lệ quy đổi nhập + lượng lỗi để kiểm tra. Không cộng hàng lỗi lần nữa vào lượng đạt.

## 7. Kiểm tra sau khi thực hiện

Có phiếu nhập thành phẩm liên kết yêu cầu, ghi lượng đạt/lỗi vào kho tương ứng cùng giá/phí. Phần đã nhập và trạng thái nguồn được cập nhật; kiểm tra tiếp chuyển kho khi cần.

## 8. Những điều cần lưu ý

Kiểm tra riêng lượng đạt, lỗi, kho nhận và phí. Giá gia công không phải giá thành đã kết chuyển. Khi có lần nhập trước/tất toán, lượng gợi ý cần đối chiếu lại phần còn cho phép; không nhận vượt nguồn.

## 9. Vướng mắc thường gặp

- **Vui lòng chọn kho lỗi**: Cách xử lý: Đang có số lượng lỗi nhưng chưa có kho nhận lỗi; chọn đúng kho trước lưu.
- **Số lượng phải > 0**: Cách xử lý: Phải có lượng thành phẩm đạt hoặc lỗi dương; không lưu một lần nhập rỗng để ghi riêng chú thích.
- **Hàng chỉ còn lại (…) từ đơn**: Cách xử lý: Lượng đạt sau quy đổi cộng lỗi đã vượt phần yêu cầu chưa nhận; cập nhật lại các lần nhập/tất toán và điều chỉnh lượng lần này.
- **Vui lòng chọn nguồn nhân lực**: Cách xử lý: Ở phiếu Tại kho phải chọn nguồn thực hiện, không nhập tên người vào Ghi chú để thay lựa chọn.
- **Tổng phí/lỗi khác biên bản**: Cách xử lý: Mở lại bảng chi tiết tương ứng, kiểm tra từng khoản và xác nhận; tổng hiển thị được lấy từ các dòng chi tiết.

## 10. Câu hỏi thường gặp

**Chỉ có hàng lỗi có lập nhập được không?** Có thể để lượng đạt bằng 0 khi có lượng lỗi dương; vẫn phải khai chi tiết lỗi, kho lỗi và bảo đảm không vượt lượng còn lại của yêu cầu.

## 11. Công việc tiếp theo

Chuyển chứng từ cho bộ phận tiếp nhận; theo dõi tiến độ bằng các báo cáo của cùng quy trình trong phần c Thống kê sản xuất.

## 12. Bài hướng dẫn liên quan

[TỔNG QUAN PHIẾU NHẬP THÀNH PHẨM](/bai-viet/2026-11-07-sx-b03-0-tong-quan-phieu-nhap-thanh-pham/) — Phiếu nhập thành phẩm; [NHẬN KẾT QUẢ GIA CÔNG NGOÀI QUA API](/bai-viet/2026-11-07-sx-b03-2-nhan-ket-qua-gia-cong-ngoai-qua-api/) — Nhận kết quả gia công ngoài qua API; [IN PHIẾU NHẬP GIA CÔNG](/bai-viet/2026-11-07-sx-b03-3-in-phieu-nhap-gia-cong/) — In phiếu nhập gia công; [CẬP NHẬT NGUỒN NHÂN LỰC TRÊN PHIẾU NHẬP GIA CÔNG](/bai-viet/2026-11-07-sx-b03-4-cap-nhat-nguon-nhan-luc-tren-phieu-nhap-gia-cong/) — Cập nhật nguồn nhân lực trên phiếu nhập gia công.

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
