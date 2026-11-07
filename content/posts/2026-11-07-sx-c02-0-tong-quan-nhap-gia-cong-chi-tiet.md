---
title: "TỔNG QUAN NHẬP GIA CÔNG CHI TIẾT"
date: "2026-11-07"
summary: "Tra cứu từng dòng nhập thành phẩm ván, đối chiếu lượng chuyển kho và điều chỉnh đơn giá gia công khi được cấp quyền."
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

Tra cứu từng dòng nhập thành phẩm ván, đối chiếu lượng chuyển kho và điều chỉnh đơn giá gia công khi được cấp quyền.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có phiếu nhập gia công và khoảng ngày nhập cần rà; phân biệt thành phẩm đạt/hàng lỗi và kho nhận. Nếu sửa giá, cần quyền sửa đơn giá, bảng giá đúng thời điểm và danh sách phiếu được giao điều chỉnh; quyền xem giá thành độc lập với quyền sửa đơn giá.
- hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; dùng đúng hệ thống của đơn vị, không chuyển chi nhánh trong cùng phiên.

## 2. Mở chức năng

**Thống kê sản xuất → Nhập gia công chi tiết**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![THỐNG KÊ - CHI TIẾT NHẬP KHO GIA CÔNG — chưa có dữ liệu theo bộ lọc, chỉ xem.](/posts/2026-11-07-sx-c02-0-tong-quan-nhap-gia-cong-chi-tiet/ui-20261026-sx-c02-ds-overview.png)

Bảng có ba nhóm Thông tin nhập kho, Thông tin chuyển kho, Thông tin yêu cầu. Đơn giá cho phép sửa khi có quyền; Giá thành (kết chuyển) chỉ đọc và cần quyền xem vốn riêng.

Ảnh đang ở backlog. Tìm/lọc/cột xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); chỉ xuất dữ liệu theo [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/) khi màn có nút và tài khoản có quyền.

## 4. Trình tự công việc

```text
Chốt nguồn và phạm vi báo cáo
       ↓
Kiểm tra mã hàng, đơn vị, ngày chứng từ
       ↓
Đọc các lượng/chỉ số theo phần “Giải thích các thông tin trên màn hình”
       ↓
Đối chiếu chứng từ nguồn và xử lý sai lệch
```

## 5. Thực hiện trên phần mềm

1. Chọn khoảng **ngày nhập kho gia công** cần kiểm tra. Lọc hẹp theo mã/ngày phiếu, khách hàng, kho và hàng trơn/thành phẩm; lưu ý một mã hiển thị có thể chỉ là phần cuối của mã chứng từ.
2. Đọc **Loại hàng**, **Tên hàng lỗi**, **SL**. Tách dòng Không lỗi với các dòng Lỗi trước đối chiếu tổng; cùng một chi tiết nhập có thể xuất hiện nhiều dòng để trình bày từng loại lỗi.
3. Đối chiếu nhóm **Thông tin chuyển kho** trên dòng Không lỗi: đã chuyển, chưa chuyển và kho đến. Sau đó đối chiếu **Thông tin yêu cầu** để xác định yêu cầu nguồn, không dùng ngày yêu cầu thay bộ lọc ngày nhập.
4. Nếu chỉ tra cứu, dừng sau đối chiếu. Khi được giao điều chỉnh giá và có quyền, kiểm tra bảng giá áp dụng/nguồn nhân lực/đơn vị gia công. Sửa ô **Đơn giá** hoặc dùng **Tính lại đơn giá** (tại kho) / **Tính lại đơn giá (thuê ngoài)**; đọc khoảng ngày trong hộp rồi chọn **Tính lại**.
5. Chọn một cách tính cho lượt điều chỉnh và rà toàn bộ thay đổi. Hai nút tính lại xét **toàn khoảng ngày đã chọn**, không chỉ dòng đang chọn hoặc còn thấy sau lọc trên bảng. Một kết quả tính lại mới có dòng thay đổi sẽ **thay bộ chỉnh sửa đang chờ**, kể cả giá vừa sửa tay. Nếu cần giữ chỉnh sửa tay, chốt và kiểm tra lượt đó trước khi tính lại tiếp; không coi hai lượt là tự cộng dồn.
6. Trước **Lưu lại**, ghi lại mã phiếu/dòng, giá cũ và giá mới đã duyệt. Thông báo đã tính lại chỉ là xem trước. Chờ **Cập nhật thành công.**, tải lại và mở phiếu nhập gốc để đối chiếu đơn giá, thành tiền dòng và tổng phiếu. Luồng lưu giá có tính lại thành tiền và giá vốn từ các phiếu liên quan, vì vậy cần đối chiếu số sau ghi; không chỉ nhìn ô Đơn giá trên báo cáo. Nếu thao tác lưu báo lỗi, ghi lại thông báo và kiểm tra phiếu trước thử lại.
7. Nếu đọc **Giá thành (kết chuyển)**, kiểm tra quyền xem vốn riêng và giá sổ liên quan; không dùng việc sửa Đơn giá để thay cho tính/kết chuyển giá thành.

## 6. Giải thích các thông tin trên màn hình

- **Ngày phát sinh**: Ý nghĩa, phạm vi và cách kiểm tra: Ngày phiếu nhập kho gia công; khoảng ngày báo cáo lọc theo ngày này, không theo ngày yêu cầu hoặc thời điểm tạo.
- **Mã phiếu nhập**: Ý nghĩa, phạm vi và cách kiểm tra: Mã phiếu nhập để truy chứng từ; báo cáo hiển thị phần 8 ký tự cuối, cần đối chiếu thêm ngày và hàng nếu không đủ phân biệt.
- **Kho gia công**: Ý nghĩa, phạm vi và cách kiểm tra: Kho thực hiện/theo dõi gia công trên phiếu nhập, khác kho nhận thành phẩm và kho chuyển đến sau nhập.
- **Khách hàng**: Ý nghĩa, phạm vi và cách kiểm tra: Khách hàng của dòng nhập; hiển thị nhận diện KH kèm số và tên rút gọn/tên khách hàng. Không phải tên hàng hóa.
- **Mã thành phẩm / Thành phẩm**: Ý nghĩa, phạm vi và cách kiểm tra: Mã và tên thành phẩm gốc của dòng nhập. Ở dòng Lỗi, vẫn đọc thêm Tên hàng lỗi để xác định mã hàng lỗi nhận riêng.
- **Tên in thành phẩm**: Ý nghĩa, phạm vi và cách kiểm tra: Tên in phiếu của thành phẩm gốc; có thể khác tên danh mục, không phải một thành phẩm bổ sung.
- **Mã hàng trơn / Hàng trơn**: Ý nghĩa, phạm vi và cách kiểm tra: Mã và tên hàng trơn đầu vào của dòng gia công, dùng đối chiếu quy cách và yêu cầu.
- **Tên in hàng trơn**: Ý nghĩa, phạm vi và cách kiểm tra: Tên hàng trơn dùng khi in; không làm thay đổi liên kết mã đầu vào.
- **Đvt**: Ý nghĩa, phạm vi và cách kiểm tra: Đơn vị của dòng nhập đang đọc. Kiểm tra đơn vị trước cộng lượng đạt/lỗi và chuyển kho.
- **Dày / Rộng / Dài**: Ý nghĩa, phạm vi và cách kiểm tra: Quy cách lấy từ hàng trơn đầu vào, không mặc định là kích thước mã hàng lỗi ở dòng lỗi.
- **Yêu cầu**: Ý nghĩa, phạm vi và cách kiểm tra: Các tên định mức/yêu cầu gia công liên kết với dòng nhập; có thể ghép nhiều yêu cầu trong một ô.
- **Số mặt**: Ý nghĩa, phạm vi và cách kiểm tra: Số mặt của dòng gia công; dùng rà bảng giá và yêu cầu, không tự nhân lại vào SL hiển thị.
- **Loại hàng**: Ý nghĩa, phạm vi và cách kiểm tra: Không lỗi hoặc Lỗi. Một dòng nhập gốc có thể thành một dòng đạt và nhiều dòng lỗi trên báo cáo; cần tách nhóm trước cộng hoặc sửa giá.
- **Tên hàng lỗi**: Ý nghĩa, phạm vi và cách kiểm tra: Tên mã hàng lỗi cụ thể của dòng Lỗi; dòng Không lỗi để trống. Không coi tên thành phẩm gốc là mã lỗi.
- **SL**: Ý nghĩa, phạm vi và cách kiểm tra: Dòng Không lỗi lấy lượng đạt của chi tiết nhập; dòng Lỗi lấy lượng của từng loại lỗi. Không cộng lặp thông tin của dòng nhập gốc qua các dòng lỗi.
- **Đơn giá**: Ý nghĩa, phạm vi và cách kiểm tra: Đơn giá gia công trên chi tiết nhập gốc. Khi có quyền sửa, được nhập hoặc tính lại để xem trước; chỉ ghi sau Lưu lại. Dòng đạt/lỗi của cùng chi tiết dùng chung giá, không phải các mức giá độc lập.
- **Giá thành (kết chuyển)**: Ý nghĩa, phạm vi và cách kiểm tra: Chỉ đọc và chỉ hiện khi có quyền xem vốn; giá nhập trên sổ cái liên quan dòng nhập. Khác Đơn giá gia công. Trống cần rà sổ/ghi nhận giá, không tự hiểu là vốn bằng 0.
- **Nhân lực**: Ý nghĩa, phạm vi và cách kiểm tra: Nguồn nhân lực trên phiếu nhập; dùng đối chiếu bảng giá tại kho và người/nhóm thực hiện.
- **Kho nhập**: Ý nghĩa, phạm vi và cách kiểm tra: Kho nhận trên phiếu nhập gốc; khác Chuyển đến kho của bước sau.
- **Ghi chú — Thông tin nhập kho**: Ý nghĩa, phạm vi và cách kiểm tra: Ghi chú của phiếu nhập, áp dụng cho các dòng cùng phiếu.
- **Người tạo / Thời gian tạo**: Ý nghĩa, phạm vi và cách kiểm tra: Người lập và thời điểm tạo phiếu nhập. Không phải người giao hàng hoặc ngày dùng lọc báo cáo.
- **SL đã chuyển kho**: Ý nghĩa, phạm vi và cách kiểm tra: Lượng đã chuyển của dòng nhập gốc; chỉ trình bày trên dòng Không lỗi. Dòng Lỗi không có số chuyển ở nhóm này.
- **SL chưa chuyển kho**: Ý nghĩa, phạm vi và cách kiểm tra: Trên dòng Không lỗi: SL nhập của dòng − SL đã chuyển kho. Không phải số chưa nhập của yêu cầu; ô trống ở dòng Lỗi không chứng minh chưa chuyển bằng 0.
- **Chuyển đến kho**: Ý nghĩa, phạm vi và cách kiểm tra: Danh sách các kho nhận từ phiếu chuyển kho liên kết dòng nhập; có thể nhiều kho. Dòng Lỗi để trống ở nhóm này.
- **Ngày yêu cầu**: Ý nghĩa, phạm vi và cách kiểm tra: Ngày yêu cầu gia công liên kết phiếu nhập; có thể nằm ngoài khoảng ngày nhập đang lọc.
- **Mã phiếu y/c**: Ý nghĩa, phạm vi và cách kiểm tra: Phần 8 ký tự cuối của mã yêu cầu liên kết để truy nguồn; đối chiếu thêm ngày/hàng.
- **Ghi chú — Thông tin yêu cầu**: Ý nghĩa, phạm vi và cách kiểm tra: Ghi chú của phiếu yêu cầu nguồn, khác ghi chú phiếu nhập.

**Cách tính / ý nghĩa số liệu:**

SL chưa chuyển kho = SL của dòng nhập đạt − SL đã chuyển kho, theo lượng trực tiếp đang báo cáo; không có bước nhân quy đổi trong phép trừ này.

Tính lại giá tại kho chọn bảng giá đang dùng theo nguồn nhân lực và ngày phiếu, rồi lấy quy tắc giá phù hợp. Tính lại giá thuê ngoài chọn bảng giá của đơn vị gia công theo ngày phiếu và cộng các giá khớp yêu cầu gia công. Kết quả chỉ đưa thay đổi vào bảng chờ kiểm tra; **Lưu lại** mới cập nhật giá phiếu.

## 7. Kiểm tra sau khi thực hiện

Có số lượng nhập, lỗi và chuyển kho theo phiếu/dòng nguồn để đối chiếu. Khi điều chỉnh giá, chỉ sau lưu thành công và tải lại mới xác nhận được giá mới trên phiếu; tính lại/xem trước chưa phải cập nhật.

## 8. Những điều cần lưu ý

⚠️ Một chi tiết nhập có nhiều dòng đạt/lỗi nhưng dùng chung đơn giá. Khi cần đổi giá cho hồ sơ có nhiều loại lỗi, phải xác định cùng dòng nhập nguồn và không nhập những giá khác nhau vào các dòng trình bày của cùng hồ sơ; nhánh sửa này còn cần kiểm chứng trước khi dùng lô điều chỉnh lớn. Không sửa mỗi dòng như các hồ sơ độc lập. Tính lại giá tác động phạm vi ngày, không lấy bộ lọc cột/ô chọn làm giới hạn. Quyền xem giá thành không cấp quyền sửa đơn giá.

## 9. Vướng mắc thường gặp

Các tình huống đối chiếu:

- **Không có dòng nào thay đổi đơn giá.**: không có mức giá mới khác giá cũ đủ điều kiện; có thể do giá đã đúng hoặc thiếu bảng giá/quy tắc khớp. Rà nguồn giá trước kết luận mọi phiếu đều đúng.
- **Đã tính lại … dòng. Kiểm tra rồi bấm Lưu lại.**: đây là kết quả xem trước, cần kiểm tra giá rồi lưu.
- **Không thấy Giá thành (kết chuyển)**: kiểm tra quyền xem vốn; cột hiện nhưng trống cần rà dòng sổ/giá đã ghi.
- **Giá trên bảng khác phiếu sau báo lỗi lưu**: chưa đủ căn cứ ghi thành công; tải lại phiếu để xác định giá thực và chuyển thông báo lỗi cho người phụ trách.

- **Giá vừa sửa tay biến mất sau Tính lại**: kết quả tính lại có dòng thay đổi thay thế bộ đang chờ. Đối chiếu danh sách giá cũ/mới đã ghi lại; chỉ lưu khi bộ cuối cùng đúng phạm vi được duyệt.
- **Không tiếp tục điều chỉnh**: khi chưa bấm Lưu lại, dùng thao tác hủy thay đổi trên thanh bảng rồi kiểm tra dữ liệu nạp lại. Nếu đã gửi Lưu lại hoặc có lỗi sau lưu, phải tra phiếu gốc; hủy trên bảng không hoàn tác phần đã ghi.

## 10. Câu hỏi thường gặp

**Lọc vài dòng trên bảng có giới hạn Tính lại đơn giá không?** Không. Tác vụ tính lại dùng khoảng ngày và đơn vị, nên phải chọn khoảng phù hợp rồi kiểm tra toàn bộ thay đổi.

**Đơn giá và Giá thành (kết chuyển) có cùng ý nghĩa không?** Không. Đơn giá là giá gia công của dòng phiếu; giá thành là số vốn lấy từ dòng sổ liên quan.

## 11. Công việc tiếp theo

Đối chiếu các chứng từ có chênh lệch và thống nhất với bộ phận kho/sản xuất/kế toán trước khi điều chỉnh.

## 12. Bài hướng dẫn liên quan

- [NHẬP THÀNH PHẨM TỪ YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b03-1-nhap-thanh-pham-tu-yeu-cau-gia-cong/) — phiếu nhập gia công nguồn
- [CẬP NHẬT NGUỒN NHÂN LỰC TRÊN PHIẾU NHẬP GIA CÔNG](/bai-viet/2026-11-07-sx-b03-4-cap-nhat-nguon-nhan-luc-tren-phieu-nhap-gia-cong/) — cập nhật nguồn nhân lực
- [TỔNG QUAN Y/C GIA CÔNG CHI TIẾT](/bai-viet/2026-11-07-sx-c03-0-tong-quan-y-c-gia-cong-chi-tiet/) — tiến độ yêu cầu liên quan

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
