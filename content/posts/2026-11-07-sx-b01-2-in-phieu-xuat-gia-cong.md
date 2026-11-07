---
title: "IN PHIẾU XUẤT GIA CÔNG"
date: "2026-11-07"
summary: "Dùng để in chứng từ từ Phiếu xuất gia công đã ghi nhận và đối chiếu trước giao cho bên nhận."
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

Dùng để in chứng từ từ **Phiếu xuất gia công** đã ghi nhận và đối chiếu trước giao cho bên nhận. Chọn đúng phiếu và đúng mục in; cửa sổ xem trước không nhập lại nghiệp vụ.

Thao tác in, thiết lập trang và xuất từ trình xem: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Phiếu đã được ghi nhận và người phụ trách đã đối chiếu số liệu; có quyền truy cập danh sách/xem phiếu. Có biên bản hoặc chứng từ gốc để so mã, ngày, bên giao/nhận và lượng. Làm việc đúng tên miền và tài khoản chi nhánh cần in; mỗi chi nhánh hệ thống chính thức dùng dữ liệu riêng.

## 2. Mở chức năng

**Sản xuất ván → Phiếu xuất gia công → chọn dòng → In Phiếu**

## 3. Nhận biết màn hình

Từ danh sách **Phiếu xuất gia công**, menu dòng mở **IN PHIẾU XUẤT KHO GIA CÔNG**. Vùng xem trước hiển thị chứng từ của dòng đã chọn; dùng thanh công cụ in theo [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/). Nội dung xuất hiện theo mẫu đang áp dụng; kiểm tra mã phiếu trước kiểm tra chi tiết. Ảnh minh họa sẽ bổ sung sau.

### Menu và bản xem trước trên chứng từ có sẵn

Các ảnh sau được quan sát tại Gia Phúc/dev ngày 27/10/2026 bằng cách mở menu và xem trước trên chứng từ có sẵn. Không lập mới hoặc sửa chứng từ lịch sử, không gửi lệnh in ra máy in. Các ảnh này không chứng minh hoàn thành chuỗi kiểm tra thực tế SX00113353.

![Menu In Phiếu của phiếu xuất kho gia công XG00110946.](/posts/2026-11-07-sx-b01-2-in-phieu-xuat-gia-cong/historical-20261027-sx-b01-in-menu-xg00110946.png)

- **1**: Nội dung trên ảnh: Dòng phiếu XG00110946 ngày 14/10/2022.
- **2**: Nội dung trên ảnh: Menu Xem lại / In Phiếu.

![Xem trước Phiếu xuất kho gia công XG00110946.](/posts/2026-11-07-sx-b01-2-in-phieu-xuat-gia-cong/historical-20261027-sx-b01-in-phieu-xg00110946.png)

- **1**: Nội dung trên ảnh: Mã phiếu xuất và thông tin vận chuyển.
- **2**: Nội dung trên ảnh: Dòng hàng, ĐVT và số lượng trên bản xem trước.

## 4. Trình tự công việc

Chọn phiếu đã lưu → chọn đúng mục in → đối chiếu bản xem trước với chứng từ gốc → in theo [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/) → kiểm tra bản in giao nhận.

## 5. Thực hiện trên phần mềm

1. Xác định đúng phiếu theo mã/ngày và bên gia công; mở xem nếu cần đối chiếu hàng/nguồn trước chọn bản in.
2. Chuột phải đúng dòng, chọn **In Phiếu**. Kiểm tra tiêu đề cửa sổ và mã/ngày trên bản xem trước; không chọn thao tác Thêm/Sửa để in lại một phiếu đã có.
3. Đối chiếu các nội dung trong phần “Giải thích các thông tin trên màn hình” với biên bản và số liệu đã lưu. Nếu bản xem trước sai dữ liệu, đóng lại và xử lý phiếu nguồn bằng luồng nghiệp vụ phù hợp; nếu bố cục thiếu thông tin, nhờ người phụ trách kiểm tra mẫu.
4. Dùng công cụ in theo [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/) sau đối chiếu; kiểm tra đúng máy in/khổ giấy, đủ trang và không cắt mất dòng trước giao chứng từ.
5. Đối chiếu mã phiếu, ngày xuất và các dòng trên bản giấy/file với phiếu đã chọn. Nếu vừa sửa phiếu nguồn, đóng bản xem trước cũ và mở lại để lấy dữ liệu mới trước in; in lại không tạo thêm lần xuất kho.

## 6. Giải thích các thông tin trên màn hình

- **Mã phiếu / ngày xuất**: Cách nhập, cách đọc và quy tắc: Lấy từ phiếu đã lưu, ngày xuất là ngày nghiệp vụ giao hàng. Nếu mẫu có thời gian in, đó là thời điểm tạo bản xem trước, không thay ngày xuất. Không nhập lại số/ngày tại màn in.
- **Kho xuất / kho gia công**: Cách nhập, cách đọc và quy tắc: Đối chiếu chiều giao từ kho có hàng sang nơi nhận gia công; không đổi kho trên bản in.
- **Đơn vị gia công / người nhận**: Cách nhập, cách đọc và quy tắc: Đối chiếu bên nhận và thông tin giao hàng trên chứng từ nguồn.
- **Xe / tài xế**: Cách nhập, cách đọc và quy tắc: Đối chiếu thông tin vận chuyển của phiếu đã ghi nhận, khác với người nhận hàng.
- **Hàng / lô / Đvt / số lượng**: Cách nhập, cách đọc và quy tắc: Đối chiếu từng dòng hàng giao thực tế với phiếu xuất; lô và Đvt phải đúng ngay cả khi tên hàng giống nhau.
- **Khối lượng / kiện / m³**: Cách nhập, cách đọc và quy tắc: Nếu mẫu in hiển thị, đối chiếu số quy đổi theo thông số hàng và lượng giao; không nhập riêng các số này trong cửa sổ in.

## 7. Kiểm tra sau khi thực hiện

Có bản xem trước/bản in Phiếu xuất kho gia công của đúng phiếu đã lưu. Mở hoặc in lại không tạo phiếu xuất mới và không ghi thêm lượng giao đi. Đối chiếu bản giấy/file đã xuất trước bàn giao; mở được xem trước chưa chứng minh máy in đã in đủ.

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

[TỔNG QUAN PHIẾU XUẤT GIA CÔNG](/bai-viet/2026-11-07-sx-b01-0-tong-quan-phieu-xuat-gia-cong/) — Phiếu xuất gia công; [LẬP PHIẾU XUẤT GIA CÔNG](/bai-viet/2026-11-07-sx-b01-1-lap-phieu-xuat-gia-cong/) — Lập phiếu xuất gia công.

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
