---
title: "NHẬN KẾT QUẢ GIA CÔNG NGOÀI QUA API"
date: "2026-11-07"
summary: "Ghi nhận hàng thực nhận từ yêu cầu Ngoài API và phân biệt việc nhận kho với việc báo hoàn thành sang đối tác."
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

Ghi nhận hàng thực nhận từ yêu cầu Ngoài API và phân biệt việc nhận kho với việc báo hoàn thành sang đối tác. Bên nhận gia công có thể gửi thông tin hoàn thành về bên đặt; bên đặt vẫn phải đối chiếu lượng/kho khi lập phiếu nhận của mình. Không coi một thông báo trao đổi là phiếu nhập kho đã được tạo đủ ở mọi hệ thống. Quy trình lượng đạt/lỗi, giá và phí xem [NHẬP THÀNH PHẨM TỪ YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b03-1-nhap-thanh-pham-tu-yeu-cau-gia-cong/); thao tác chung xem [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Đã xác định đang là bên đặt hay bên nhận gia công, có phiếu yêu cầu đúng chiều và còn phần nhận; chuẩn bị biên bản lượng đạt/lỗi, kho nhận đạt, kho lỗi nếu có, đơn giá/VAT và phí. Phiếu Tại kho phải có nguồn nhân lực; xác định đối tượng tập hợp chi phí theo hướng dẫn kế toán. Kiểm tra các lần nhận trước và phần tất toán để không nhận vượt.

## 2. Mở chức năng

**Sản xuất ván → Phiếu nhập thành phẩm**

## 3. Nhận biết màn hình

Danh sách có mã/ngày nhập, Từ phiếu, loại Yêu cầu G/C, kho gia công/kho nhập, Nhân lực và Đồng bộ API. Chi tiết phiếu hiển thị các dòng kế thừa từ yêu cầu, lượng đạt, tổng lỗi và tổng phí; bấm ô lỗi/phí để xem các dòng cấu thành.

Ảnh minh họa sẽ được bổ sung sau; thao tác chung với danh sách xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/), [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

Đường vào quan sát được là Thêm mới → Ngoài (đồng bộ API), mở CHỌN PHIẾU - YÊU CẦU GIA CÔNG, NGOÀI (API). Không có nút Đồng bộ từ API riêng trên danh sách nhập. Nguồn năm 2026 trống; chưa chọn yêu cầu hoặc lưu phiếu nhập.

![Nhánh Ngoài (đồng bộ API) trong menu thêm phiếu nhập.](/posts/2026-11-07-sx-b03-2-nhan-ket-qua-gia-cong-ngoai-qua-api/hinh-01-20261030-sx-b03-2-menu-ngoai-api.png)

![Cửa sổ chọn yêu cầu gia công Ngoài API chưa có nguồn năm 2026.](/posts/2026-11-07-sx-b03-2-nhan-ket-qua-gia-cong-ngoai-qua-api/hinh-02-20261030-sx-b03-2-chon-nguon-api.png)

## 4. Trình tự công việc

Chọn đúng yêu cầu còn lượng → đối chiếu biên bản nhận → nhập lượng đạt/lỗi, kho và phí → lưu phiếu → kiểm mã phiếu nội bộ → theo dõi chiều Đồng bộ API → đối chiếu mã gốc và số thực nhận hai bên. Gửi lại chỉ xử lý trao đổi của phiếu đã có, không thêm một lần nhận kho.

## 5. Thực hiện trên phần mềm

1. Từ **Thêm mới → Ngoài (đồng bộ API)**, chọn đúng yêu cầu còn lượng chờ nhận của đơn vị. Nhánh này không có một nút riêng “Đồng bộ từ API” ở phiếu nhập để kéo kết quả thay cho chọn yêu cầu.
2. Kiểm tra mã yêu cầu nguồn, bên gia công và hai kho. Đối chiếu từng dòng đã kế thừa với kết quả giao thực tế; nếu không thấy yêu cầu thì kiểm tra loại phiếu, khoảng ngày và phần còn lại thay vì tạo một yêu cầu trùng.
3. Nhập lượng thành phẩm đạt, khai chi tiết hàng lỗi và kho lỗi theo [NHẬP THÀNH PHẨM TỪ YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b03-1-nhap-thanh-pham-tu-yeu-cau-gia-cong/). Kiểm tra đơn giá, VAT, phí phát sinh và đối tượng nhận chi phí; đồng bộ không thay cho đối chiếu hàng thực nhận.
4. Trước ghi nhận, kiểm tra tổng đạt sau quy đổi cộng lỗi không vượt phần còn lại của yêu cầu. Có thể nhận một phần; không dùng số lượng toàn bộ yêu cầu để thay biên bản nhận từng lần.
5. Sau ghi nhận, đối chiếu mã phiếu nhập và trạng thái **Đồng bộ API** theo chiều trao đổi đang hiển thị. Chỉ phía báo hoàn thành từ yêu cầu đã nhận của đối tác mới gửi kết quả về bên đặt; phiếu nhận của bên đặt không được dùng để báo ngược thêm. Nếu có **Lỗi đồng bộ**, đọc lỗi và dùng **Đồng bộ lại** khi có quyền. Thông báo **Đã đồng bộ lại** xác nhận yêu cầu gửi lại được tiếp nhận để xử lý; chưa chứng minh đối tác đã nhận hoặc ghi nhận nghiệp vụ. Bấm **Tải lại**, xem cột **Đồng bộ API** và đối chiếu mã chứng từ với người phụ trách bên nhận. Không bấm lặp hoặc tạo phiếu mới chỉ để thúc gửi.
6. Đối chiếu yêu cầu và báo cáo SX-C02; lưu căn cứ mã gốc/mã nhập để người phụ trách hai bên tra cứu cùng giao dịch.

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
- **ĐT tập hợp chi phí**: Cách nhập, cách đọc và quy tắc: Chọn đối tượng tập hợp chi phí cho dòng thành phẩm để phục vụ tính giá thành; không đồng nghĩa với Khách hàng hoặc nguồn nhân lực.

**Quy tắc số liệu:** Lưới hiển thị thành tiền = lượng đạt × đơn giá + phí; khi ghi nhận hệ thống tính lượng đạt × đơn giá × hệ số + phí phát sinh (dòng mới hệ số 1). Đơn giá chưa VAT = đơn giá / (1 + tỷ lệ VAT). Giới hạn nhận: (lượng yêu cầu − lượng tất toán) × tỷ lệ quy đổi nguồn − lượng đã nhập; lần nhận mới dùng lượng đạt × tỷ lệ quy đổi nhập + lượng lỗi để kiểm tra. Không cộng hàng lỗi lần nữa vào lượng đạt.

- **Chưa đồng bộ**: Cách đọc / việc cần làm: Chưa có kết quả thành công hiển thị; tải lại và đối chiếu với người phụ trách, không mặc định phiếu chưa được gửi.
- **Đã đồng bộ**: Cách đọc / việc cần làm: Đã có kết quả trao đổi thành công; vẫn đối chiếu chứng từ và số liệu nghiệp vụ ở hai bên.
- **Lỗi đồng bộ**: Cách đọc / việc cần làm: Rê chuột vào nhãn để đọc lỗi. Sửa nguyên nhân qua người phụ trách, rồi chọn Đồng bộ lại nếu có quyền.
- **Nhận từ API**: Cách đọc / việc cần làm: Phiếu thuộc chiều nhận; không dùng Đồng bộ lại để phát ngược yêu cầu nguồn.

## 7. Kiểm tra sau khi thực hiện

Có phiếu nhập nhánh Ngoài (đồng bộ API), lượng nhận thực tế và trạng thái trao đổi riêng. Phải đối chiếu kết quả nội bộ lẫn kết quả đồng bộ, không dùng thông báo lưu để suy mọi bên đã nhận đủ.

## 8. Những điều cần lưu ý

Kiểm tra riêng lượng đạt, lỗi, kho nhận và phí. Giá gia công không phải giá thành đã kết chuyển. Khi có lần nhập trước/tất toán, lượng gợi ý cần đối chiếu lại phần còn cho phép; không nhận vượt nguồn.

## 9. Vướng mắc thường gặp

- **Không thấy nút Đồng bộ từ API ở phiếu nhập**: Cách xử lý: Dùng Thêm mới → Ngoài (đồng bộ API) rồi chọn yêu cầu còn lượng; màn này không dùng nút kéo riêng như phiếu yêu cầu.
- **Không thấy yêu cầu cần nhập**: Cách xử lý: Kiểm tra loại phiếu, ngày và phần còn chờ; đối chiếu các lần nhận trước thay vì tạo lại nguồn.
- **Lỗi đồng bộ sau ghi nhận**: Cách xử lý: Phiếu nội bộ có thể đã lưu; kiểm tra mã phiếu nhập và lỗi trước Đồng bộ lại, không lập thêm lần nhận trùng.
- **Hàng chỉ còn lại (…) từ đơn**: Cách xử lý: Đối chiếu lượng đạt sau quy đổi + lỗi với lượng còn lại thực tế của yêu cầu.
- **Phiếu này không thuộc diện đồng bộ với đối tác, hoặc đối tác chưa được cấu hình để nhận.**: Cách xử lý: Đối chiếu chiều của yêu cầu gốc: phiếu báo hoàn thành phải liên kết yêu cầu đã nhận từ đối tác. Nhờ người quản trị kiểm tra đối tác/kết nối; không đổi loại phiếu hay tạo thêm phiếu nhập để thử lại.

## 10. Câu hỏi thường gặp

**Đồng bộ lại có thay việc nhập lượng thực nhận không?** Không; đối chiếu và ghi nhận lượng theo biên bản, dùng đồng bộ lại chỉ xử lý trao đổi của phiếu đã có.

**Đã đồng bộ lại có nghĩa bên đặt đã nhập kho chưa?** Chưa thể kết luận. Luồng báo hoàn thành gửi mã yêu cầu gốc, mã nhập bên gia công, ngày và tổng số lượng; cần đối chiếu phiếu/kho thực tế ở bên đặt. Không suy thông báo này thành toàn bộ dòng hàng, lỗi và giá đã được nhận kho.

## 11. Công việc tiếp theo

Chuyển chứng từ cho bộ phận tiếp nhận; theo dõi tiến độ bằng các báo cáo của cùng quy trình trong phần c Thống kê sản xuất.

## 12. Bài hướng dẫn liên quan

[TỔNG QUAN PHIẾU NHẬP THÀNH PHẨM](/bai-viet/2026-11-07-sx-b03-0-tong-quan-phieu-nhap-thanh-pham/) — Phiếu nhập thành phẩm; [NHẬP THÀNH PHẨM TỪ YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b03-1-nhap-thanh-pham-tu-yeu-cau-gia-cong/) — Nhập thành phẩm từ yêu cầu gia công; [IN PHIẾU NHẬP GIA CÔNG](/bai-viet/2026-11-07-sx-b03-3-in-phieu-nhap-gia-cong/) — In phiếu nhập gia công; [CẬP NHẬT NGUỒN NHÂN LỰC TRÊN PHIẾU NHẬP GIA CÔNG](/bai-viet/2026-11-07-sx-b03-4-cap-nhat-nguon-nhan-luc-tren-phieu-nhap-gia-cong/) — Cập nhật nguồn nhân lực trên phiếu nhập gia công.

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
