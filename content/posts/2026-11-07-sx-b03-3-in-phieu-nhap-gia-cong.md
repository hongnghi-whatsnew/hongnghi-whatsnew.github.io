---
title: "IN PHIẾU NHẬP GIA CÔNG"
date: "2026-11-07"
summary: "Dùng để in chứng từ từ Phiếu nhập thành phẩm đã ghi nhận và đối chiếu trước giao cho bên nhận."
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

Dùng để in chứng từ từ **Phiếu nhập thành phẩm** đã ghi nhận và đối chiếu trước giao cho bên nhận. Chọn đúng phiếu và đúng mục in; cửa sổ xem trước không nhập lại nghiệp vụ.

Thao tác in, thiết lập trang và xuất từ trình xem: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Phiếu đã được ghi nhận và người phụ trách đã đối chiếu số liệu; có quyền truy cập danh sách/xem phiếu. Có biên bản hoặc chứng từ gốc để so mã, ngày, bên giao/nhận và lượng. Làm việc đúng tên miền và tài khoản chi nhánh cần in; mỗi chi nhánh hệ thống chính thức dùng dữ liệu riêng.

## 2. Mở chức năng

**Sản xuất ván → Phiếu nhập thành phẩm → chọn dòng → In Phiếu**

## 3. Nhận biết màn hình

Từ danh sách **Phiếu nhập thành phẩm**, menu dòng mở trình xem với bản mẫu **PHIẾU NHẬP THÀNH PHẨM**. Vùng xem trước hiển thị chứng từ của dòng đã chọn; dùng thanh công cụ in theo [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/). Nội dung xuất hiện theo mẫu đang áp dụng; kiểm tra mã phiếu trước kiểm tra chi tiết. Ảnh và phạm vi quan sát thực tế được ghi bên dưới; các cảnh kết quả chưa có vẫn cần bổ sung.

![Menu dòng NG00113044 có In Phiếu và Cập nhật nguồn nhân lực.](/posts/2026-11-07-sx-b03-3-in-phieu-nhap-gia-cong/hinh-01-20261030-sx-b03-menu-in-nhan-luc.png)

![Bản xem trước NG00113044 có hai dòng thành phẩm, tổng 20 Tấm.](/posts/2026-11-07-sx-b03-3-in-phieu-nhap-gia-cong/hinh-02-20261030-sx-b03-3-ban-in.png)

## 4. Trình tự công việc

Chọn phiếu đã lưu → chọn đúng mục in → đối chiếu bản xem trước với chứng từ gốc → in theo [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/) → kiểm tra bản in giao nhận.

## 5. Thực hiện trên phần mềm

1. Xác định đúng phiếu theo mã/ngày và bên gia công; mở xem nếu cần đối chiếu hàng/nguồn trước chọn bản in.
2. Chuột phải đúng dòng, chọn **In Phiếu**. Kiểm tra tiêu đề cửa sổ và mã/ngày trên bản xem trước; không chọn thao tác Thêm/Sửa để in lại một phiếu đã có.
3. Đối chiếu các nội dung trong phần “Giải thích các thông tin trên màn hình” với biên bản và số liệu đã lưu. Nếu bản xem trước sai dữ liệu, đóng lại và xử lý phiếu nguồn bằng luồng nghiệp vụ phù hợp; nếu bố cục thiếu thông tin, nhờ người phụ trách kiểm tra mẫu.
4. Dùng công cụ in theo [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/) sau đối chiếu; kiểm tra đúng máy in/khổ giấy, đủ trang và không cắt mất dòng trước giao chứng từ.
5. Kiểm bản giấy/file đúng mã nhập và lần nhận, không dùng tổng của cả yêu cầu thay lượng lần này. Ngày nhập lấy từ phiếu đã lưu; thời gian tạo xem trước (nếu mẫu hiển thị) không thay ngày nhận hàng. Sau sửa phiếu hoặc sửa giá, đóng bản cũ rồi mở lại trước in.

## 6. Giải thích các thông tin trên màn hình

- **Mã phiếu / ngày nhập**: Cách nhập, cách đọc và quy tắc: Chỉ xem phiếu nhập thành phẩm đã lưu, khớp lần nhận hàng thực tế cần in.
- **Phiếu yêu cầu nguồn**: Cách nhập, cách đọc và quy tắc: Đối chiếu đúng yêu cầu mà lần nhập đang thực hiện; một yêu cầu có thể nhận nhiều lần.
- **Đơn vị gia công / kho gia công / kho nhập**: Cách nhập, cách đọc và quy tắc: Kiểm tra bên trả hàng, kho gia công và kho nhận thành phẩm đạt theo phiếu đã lưu.
- **Thành phẩm / Đvt / số lượng đạt**: Cách nhập, cách đọc và quy tắc: Đối chiếu quy cách và lượng đạt của lần nhận trên biên bản; không dùng tổng yêu cầu để thay lượng lần nhập.
- **Hàng lỗi / kho lỗi**: Cách nhập, cách đọc và quy tắc: Đối chiếu lượng lỗi và kho nhận lỗi của phiếu nguồn nếu mẫu hiển thị; lỗi không tự cộng thành lượng đạt.
- **Đơn giá / phí / thành tiền**: Cách nhập, cách đọc và quy tắc: Nếu mẫu hiển thị, đối chiếu với số đã lưu trên đúng dòng phiếu và tổng phiếu; không thay tiền hoặc tính lại trên bản in. Sau sửa giá theo [TỔNG QUAN NHẬP GIA CÔNG CHI TIẾT](/bai-viet/2026-11-07-sx-c02-0-tong-quan-nhap-gia-cong-chi-tiet/), mở lại xem trước để nạp số mới. Công thức của từng luồng ghi nhận có thể khác; không dùng một công thức tính tay để thay số đã đối chiếu.

## 7. Kiểm tra sau khi thực hiện

Có bản xem trước/bản in Phiếu nhập thành phẩm của đúng lần nhận đã lưu. In lại không tạo thêm phiếu nhập, không tăng hàng đạt/lỗi và không đổi lượng của yêu cầu nguồn; cần kiểm bản giấy/file trước bàn giao.

## 8. Những điều cần lưu ý

Kiểm tra mã phiếu, loại mẫu, đơn vị và từng lượng trước in. Không dùng chỉnh mẫu để che số liệu sai; xử lý dữ liệu tại phiếu nguồn. Một phiếu có thể in lại nhiều lần nhưng không đại diện cho nhiều lần giao/nhận.

## 9. Vướng mắc thường gặp

- **Mở nhầm phiếu hoặc mẫu**: Cách xử lý: Đóng xem trước, đối chiếu mã dòng rồi chọn lại đúng mục in.
- **Xem trước trắng hoặc không tải mẫu**: Cách xử lý: Kiểm tra phiếu còn truy cập được, ghi lại mã phiếu và tên mục in, chuyển người phụ trách kiểm tra mẫu của đơn vị; không tạo lại phiếu để thử.
- **Bản in khác dữ liệu cần giao nhận**: Cách xử lý: Đối chiếu phiếu đã lưu; nếu số liệu sai, sửa bằng nghiệp vụ được duyệt rồi mở lại bản in mới.
- **Thiếu/cắt trang hoặc cột trên giấy**: Cách xử lý: Kiểm tra thiết lập trang và bản xem trước theo [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/); nếu mẫu thiếu trường, nhờ người phụ trách mẫu.

## 10. Câu hỏi thường gặp

**In lại có phát sinh thêm chứng từ không?** Không; thao tác lấy dữ liệu của phiếu đã chọn để trình bày. Muốn đổi số liệu phải xử lý ở phiếu nguồn, không tại bản in.

## 11. Công việc tiếp theo

Chuyển chứng từ cho bộ phận tiếp nhận; theo dõi tiến độ bằng các báo cáo của cùng quy trình trong phần c Thống kê sản xuất.

## 12. Bài hướng dẫn liên quan

[TỔNG QUAN PHIẾU NHẬP THÀNH PHẨM](/bai-viet/2026-11-07-sx-b03-0-tong-quan-phieu-nhap-thanh-pham/) — Phiếu nhập thành phẩm; [NHẬP THÀNH PHẨM TỪ YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b03-1-nhap-thanh-pham-tu-yeu-cau-gia-cong/) — Nhập thành phẩm từ yêu cầu gia công; [NHẬN KẾT QUẢ GIA CÔNG NGOÀI QUA API](/bai-viet/2026-11-07-sx-b03-2-nhan-ket-qua-gia-cong-ngoai-qua-api/) — Nhận kết quả gia công ngoài qua API; [CẬP NHẬT NGUỒN NHÂN LỰC TRÊN PHIẾU NHẬP GIA CÔNG](/bai-viet/2026-11-07-sx-b03-4-cap-nhat-nguon-nhan-luc-tren-phieu-nhap-gia-cong/) — Cập nhật nguồn nhân lực trên phiếu nhập gia công.

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
