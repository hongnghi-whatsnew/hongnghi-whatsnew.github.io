---
title: "CẬP NHẬT NGUỒN NHÂN LỰC TRÊN PHIẾU NHẬP GIA CÔNG"
date: "2026-11-07"
summary: "Sửa nguồn nhân lực gắn với một phiếu nhập gia công đã lưu để phản ánh đúng người/nhóm thực hiện."
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

Sửa nguồn nhân lực gắn với một phiếu nhập gia công đã lưu để phản ánh đúng người/nhóm thực hiện. Đây là thao tác riêng trên phiếu hiện có, không lập thêm phiếu, không nhận lại hàng và không sửa lượng, giá hay quy cách. Dùng khi đã đối chiếu được phân công thực tế; thao tác chung xem [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Có phiếu nhập cần sửa nguồn thực hiện, mã/ngày phiếu xác định rõ và nguồn nhân lực đang kích hoạt phù hợp phân công. Tài khoản được phép thực hiện chức năng cập nhật nguồn; kiểm tra kết quả sau lưu trước chốt báo cáo.

## 2. Mở chức năng

**Sản xuất ván → Phiếu nhập thành phẩm**

## 3. Nhận biết màn hình

Từ menu dòng phiếu nhập, Cập nhật nguồn nhân lực mở hộp chọn nhỏ với nguồn hiện tại và danh sách nguồn đang kích hoạt. Đây là hộp thay nguồn của phiếu, không phải cửa sổ nhập lại hàng thành phẩm.

Ảnh minh họa sẽ được bổ sung sau; thao tác chung với danh sách xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/), [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

![Menu dòng NG00113044 có In Phiếu và Cập nhật nguồn nhân lực.](/posts/2026-11-07-sx-b03-4-cap-nhat-nguon-nhan-luc-tren-phieu-nhap-gia-cong/hinh-01-20261030-sx-b03-menu-in-nhan-luc.png)

![Nguồn nhân lực hiện tại của NG00113044 là GP MEL MÁY 1.](/posts/2026-11-07-sx-b03-4-cap-nhat-nguon-nhan-luc-tren-phieu-nhap-gia-cong/hinh-02-20261030-sx-b03-4-nguon-hien-tai.png)

![Danh sách nguồn nhân lực; chưa xác nhận thay đổi.](/posts/2026-11-07-sx-b03-4-cap-nhat-nguon-nhan-luc-tren-phieu-nhap-gia-cong/hinh-03-20261030-sx-b03-4-danh-sach-nguon.png)

## 4. Trình tự công việc

Xác định phiếu và nguồn đang ghi → đối chiếu phân công → Cập nhật nguồn nhân lực → chọn nguồn → Đồng ý → chờ kết quả → mở lại/đối chiếu nguồn đã lưu → rà báo cáo theo nguồn.

Đóng trước Đồng ý → không áp dụng lựa chọn. Có lỗi sau Đồng ý → kiểm nguồn thực tế rồi xử lý, không mặc định đóng hộp là đã lưu.

## 5. Thực hiện trên phần mềm

1. Xác định đúng mã/ngày phiếu nhập và nguồn thực hiện đang ghi; đối chiếu biên bản hoặc phân công cần thay đổi.
2. Chuột phải đúng dòng phiếu, chọn **Cập nhật nguồn nhân lực**. Hộp chọn mở sẵn giá trị hiện tại; đây là thao tác cập nhật riêng nguồn nhân lực của phiếu đang chọn.
3. Tìm nguồn theo tên/mã trong danh sách đang kích hoạt, chọn đúng nguồn rồi bấm **Đồng ý**. Không để trống nguồn: nếu chưa chọn được, bấm **Đóng** và nhờ người quản lý danh mục kiểm tra. Không chọn tạm một nguồn gần tên.
4. Chờ yêu cầu cập nhật hoàn tất; hộp chọn có thể đóng trước khi máy chủ trả kết quả. Chỉ kết luận đã cập nhật sau thông báo **Cập nhật thành công.** và đối chiếu giá trị mới trên phiếu/danh sách hoặc SX-C02. Nếu bấm **Đóng** trước **Đồng ý**, lựa chọn chưa được gửi cập nhật.
5. Đối chiếu lại mã phiếu trước thực hiện tiếp với dòng khác; thao tác này không sửa lượng thành phẩm, lỗi, đơn giá hoặc yêu cầu nguồn.

## 6. Giải thích các thông tin trên màn hình

- **Mã/ngày phiếu nhập**: Cách nhập, cách đọc và quy tắc: Căn cứ xác định phiếu đang cập nhật; chỉ xem, không tạo phiếu nhập mới.
- **Nguồn nhân lực hiện tại**: Cách nhập, cách đọc và quy tắc: Giá trị truyền sẵn vào hộp chọn từ đúng dòng phiếu.
- **Nguồn nhân lực mới**: Cách nhập, cách đọc và quy tắc: Tìm/chọn một nguồn đang kích hoạt theo tên/mã; đối chiếu người/nhóm thực hiện theo phân công.
- **Đồng ý**: Cách nhập, cách đọc và quy tắc: Gửi lựa chọn nguồn cho phiếu đang chọn; phải chờ kết quả cập nhật.
- **Đóng / hủy**: Cách nhập, cách đọc và quy tắc: Đóng hộp mà không áp dụng lần chọn đó.

## 7. Kiểm tra sau khi thực hiện

Nguồn nhân lực của đúng phiếu được thay bằng nguồn đã chọn sau khi cập nhật thành công; đối chiếu lại giá trị mới. Thao tác riêng này không thay đổi số lượng, giá hay quy cách hàng.

## 8. Những điều cần lưu ý

Chọn đúng nguồn theo phân công thực tế; thay nhầm có thể làm báo cáo theo nguồn sai. Ghi lại mã phiếu và nguồn trước/sau để đối chiếu. Nếu chọn nhầm đã lưu, chỉ cập nhật lại nguồn cũ sau khi kiểm tra và được người phụ trách thống nhất; không xóa/lập lại phiếu nhập. Không kết luận đã cập nhật chỉ vì hộp chọn đóng; đối chiếu thông báo và dữ liệu sau cập nhật.

## 9. Vướng mắc thường gặp

- **Không tìm thấy nguồn muốn chọn**: Cách xử lý: Danh sách chỉ lấy nguồn đang kích hoạt; nhờ người quản lý danh mục kiểm tra mã/tên/trạng thái trước chọn.
- **Có thông báo lỗi khi xác nhận**: Cách xử lý: Chưa kết luận đã đổi nguồn; giữ mã phiếu, nguồn cũ/mới và nội dung lỗi để xử lý.
- **Đã chọn nhưng hủy/đóng hộp**: Cách xử lý: Lần chọn đó không thực hiện cập nhật; kiểm tra nguồn thực tế của phiếu trước thao tác lại.

## 10. Câu hỏi thường gặp

**Nguồn cũ có được chọn sẵn không?** Hộp chọn nhận nguồn đang ghi trên phiếu; vẫn kiểm tra tên/mã và xác nhận đúng nguồn mới. Hủy hộp không cập nhật.

## 11. Công việc tiếp theo

Chuyển chứng từ cho bộ phận tiếp nhận; theo dõi tiến độ bằng các báo cáo của cùng quy trình trong phần c Thống kê sản xuất.

## 12. Bài hướng dẫn liên quan

[TỔNG QUAN PHIẾU NHẬP THÀNH PHẨM](/bai-viet/2026-11-07-sx-b03-0-tong-quan-phieu-nhap-thanh-pham/) — Phiếu nhập thành phẩm; [NHẬP THÀNH PHẨM TỪ YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b03-1-nhap-thanh-pham-tu-yeu-cau-gia-cong/) — Nhập thành phẩm từ yêu cầu gia công; [NHẬN KẾT QUẢ GIA CÔNG NGOÀI QUA API](/bai-viet/2026-11-07-sx-b03-2-nhan-ket-qua-gia-cong-ngoai-qua-api/) — Nhận kết quả gia công ngoài qua API; [IN PHIẾU NHẬP GIA CÔNG](/bai-viet/2026-11-07-sx-b03-3-in-phieu-nhap-gia-cong/) — In phiếu nhập gia công.

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
