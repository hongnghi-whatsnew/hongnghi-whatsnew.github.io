---
title: "HƯỚNG DẪN HỦY KẾT CHUYỂN VÀ MỞ LẠI KỲ TÍNH GIÁ THÀNH"
date: "2026-11-07"
summary: "Hủy phiếu kết chuyển để có thể điều chỉnh và tính lại kỳ có sai lệch."
module: "Giá thành"
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

Hủy phiếu kết chuyển để có thể điều chỉnh và tính lại kỳ có sai lệch.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Có phiếu kết chuyển cần hủy, xác định số chứng từ và kỳ gốc. Kiểm tra kỳ sau đã kết chuyển để xử lý từ mới về cũ; kỳ kế toán phải cho phép đảo bút toán. Lưu căn cứ giá vốn/sổ và các phiếu mẫu trước hủy, gồm cả phát sinh mới sau kết chuyển.

hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; kiểm tra đúng hệ thống của đơn vị trước thao tác.

## 2. Mở chức năng

**Giá thành → Tính giá thành**

## 3. Nhận biết màn hình

Màn danh sách dùng để đối chiếu dữ liệu và mở các thao tác theo hồ sơ đã chọn.

Các thao tác của dòng phiếu tại tab **Kết chuyển chi phí**: **Xem**, **Hủy** (khi có quyền Xóa).

Ảnh hiện có minh họa phạm vi quan sát bên dưới; các cảnh kết quả chưa thực hiện vẫn cần bổ sung. Thao tác tìm/lọc danh sách chung xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); không suy từ nút hiển thị thành quyền đã được cấp.

Danh sách Kết chuyển chi phí với kỳ 01/01–30/10/2026 chưa có chứng từ. Ảnh chỉ giúp xác định tab và các cột; chưa có phiếu để mở Xác nhận hủy kết chuyển. Không kết chuyển kỳ thực chỉ để tạo cảnh hủy.

![Kỳ từ đầu năm 2026 chưa có chứng từ kết chuyển, chưa thể mở xác nhận hủy](/posts/2026-11-07-gt-a02-4-huong-dan-huy-ket-chuyen-va-mo-lai-ky-tinh-gia-thanh/hinh-01-20261030-gt-a02-4-danh-sach-ket-chuyen.png)

## 4. Trình tự công việc

Xem phiếu và ghi nhận số trước hủy → Kiểm tra kỳ sau đã kết chuyển → Xử lý theo thứ tự kỳ → Hủy → Đối chiếu chi phí và giá vốn sau hủy

## 5. Thực hiện trên phần mềm

1. Tại danh sách kết chuyển, xác định phiếu bằng **Số chứng từ**, **Kỳ tính giá thành**, **Ngày hạch toán**, **Số tiền**. Mở phiếu và ghi nhận chi tiết/giá vốn trước hủy.
2. Kiểm tra các kỳ sau cùng chi nhánh đã kết chuyển. Nếu có, phải xem xét và hủy kỳ mới hơn trước; hệ thống chặn khi đây là phiếu kết chuyển cuối cùng của kỳ và còn kỳ cùng chi nhánh có ngày kết thúc lớn hơn đã kết chuyển. Kiểm tra thêm kỳ kế toán của bút toán có bị khóa hay không.
3. Trong tab **Kết chuyển chi phí**, bấm **Hủy** ở đúng dòng phiếu, đọc **Xác nhận hủy kết chuyển** và số chứng từ trong hộp. Chỉ xác nhận đúng phiếu; chờ xử lý kết thúc.
4. Tải lại danh sách, kiểm tra phiếu được hủy và kỳ trở về chưa kết chuyển khi không còn phiếu kết chuyển của kỳ. Hủy phiếu không đồng nghĩa xóa kỳ hoặc xóa mọi kết quả tính đã lưu.
5. Đối chiếu bút toán đảo, giá nhập sổ cái, giá vốn phiếu gia công/bán và giá vốn danh mục theo các mã mẫu. Kỳ cũ thiếu bản lưu giá có nhánh xử lý khác; có phát sinh mới sau kết chuyển cũng có thể làm giá vốn danh mục khác số cũ.
6. Sửa nguồn/phạm vi kỳ theo nguyên nhân, tổng hợp và tính lại theo [HƯỚNG DẪN PHÂN BỔ CHI PHÍ CHUNG VÀ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-2-huong-dan-phan-bo-chi-phi-chung-va-tinh-gia-thanh/); chỉ kết chuyển lại [HƯỚNG DẪN KẾT CHUYỂN CHI PHÍ GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-3-huong-dan-ket-chuyen-chi-phi-gia-thanh/) sau khi đã đối chiếu. Kiểm tra cả chi phí chung còn lại chuyển kỳ sau nếu đã điều chỉnh kỳ trước.

## 6. Giải thích các thông tin trên màn hình

- **Từ ngày**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trên danh sách; ngày bắt đầu kỳ chi phí, dùng phân biệt các kỳ cùng tên hoặc khác tập THCP.
- **Đến ngày**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; ngày kết thúc kỳ, đồng thời là mặc định Ngày hạch toán khi chọn kỳ để kết chuyển.
- **Tên**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trên danh sách; tên kỳ đã lưu. Khi mở kỳ kiểm tra thêm khoảng ngày và danh sách đối tượng, không dùng tên làm căn cứ duy nhất.
- **Khoản giảm giá thành**: Cách nhập / cách đọc và quy tắc: Cột kết quả tổng các khoản giảm của kỳ; kiểm tra chứng từ giảm/hao hụt và chi tiết tổng hợp, không nhập bù tay trên danh sách.
- **Dở dang cuối kỳ**: Cách nhập / cách đọc và quy tắc: Cột kết quả của phương pháp không dở dang; không phải công cụ tự đánh giá sản phẩm dở dang cuối kỳ.
- **Tổng giá thành**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tổng giá thành các đối tượng đã tính trong kỳ. Đây là giá trị tổng chi phí, khác đơn giá thành phẩm.
- **Trạng thái**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; trạng thái đã/chưa tính và dấu đã kết chuyển theo dữ liệu kỳ. Đã tính không đồng nghĩa đã kết chuyển; kỳ đã kết chuyển bị chặn Tính/Kết chuyển/Sửa/Xóa trên màn.
- **Ngày hạch toán**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trong danh sách phiếu kết chuyển; ngày ghi sổ đã chọn lúc lập phiếu.
- **Số chứng từ**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; số phiếu kết chuyển tự tạo dạng KC kèm giờ phút giây khi Cất; dùng nhận diện phiếu cần xem/hủy.
- **Kỳ tính giá thành**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trong phiếu; tên kỳ liên kết với phiếu kết chuyển, kiểm tra lại ngày/tập THCP trên kỳ gốc.
- **Diễn giải**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trong phiếu; nội dung kết chuyển tự tạo từ tên kỳ, không phải ô sửa chi phí.
- **Số tiền**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tổng số tiền các dòng bút toán kết chuyển theo THCP/tài khoản. Hệ thống tổng hợp và tính lại khi Cất, cần đối chiếu phiếu đã lưu với xem trước.

## 7. Kiểm tra sau khi thực hiện

Phiếu được hủy; nếu không còn phiếu kết chuyển của kỳ thì kỳ bỏ dấu đã kết chuyển. Hệ thống đảo bút toán và xử lý giá vốn/chi phí chung theo dữ liệu lưu và điều kiện phát sinh mới; không xóa kỳ. Kiểm tra sổ, các phiếu mẫu và phần chi phí chuyển kỳ sau trước tính lại.

Đây là hành vi dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Hủy kết chuyển có luồng phục hồi dữ liệu giá vốn đã lưu; cần kiểm tra chứng từ phát sinh sau và khóa sổ, không chỉ nhìn trạng thái kỳ.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Không thể hủy kết chuyển kỳ này vì còn kỳ SAU đã kết chuyển…**: còn kỳ có ngày kết thúc lớn hơn đã kết chuyển trong cùng chi nhánh; rà và hủy theo thứ tự mới nhất trước.
- **Kỳ bút toán đã khóa sổ**: đảo bút toán bị chặn; dừng, chuyển người phụ trách kỳ xử lý. Không xóa kỳ giá thành hoặc đổi ngày để thay cho hủy phiếu.

## 10. Câu hỏi thường gặp

**Hủy phiếu có xóa kỳ tính giá thành không?** Không. Khi không còn phiếu kết chuyển, kỳ bỏ dấu đã kết chuyển để xử lý lại. Vẫn cần tổng hợp/tính lại sau khi sửa nguồn.

## 11. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-0-huong-dan-tong-quan-tinh-gia-thanh/)** — Tổng quan Tính giá thành.

## 12. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-0-huong-dan-tong-quan-tinh-gia-thanh/)** — Tổng quan Tính giá thành.
- **[HƯỚNG DẪN LẬP KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-1-huong-dan-lap-ky-tinh-gia-thanh/)** — Lập kỳ tính giá thành.
- **[HƯỚNG DẪN PHÂN BỔ CHI PHÍ CHUNG VÀ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-2-huong-dan-phan-bo-chi-phi-chung-va-tinh-gia-thanh/)** — Phân bổ chi phí chung và tính giá thành.
- **[HƯỚNG DẪN KẾT CHUYỂN CHI PHÍ GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-3-huong-dan-ket-chuyen-chi-phi-gia-thanh/)** — Kết chuyển chi phí giá thành.
