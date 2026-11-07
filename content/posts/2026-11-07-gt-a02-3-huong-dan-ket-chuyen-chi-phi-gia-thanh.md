---
title: "HƯỚNG DẪN KẾT CHUYỂN CHI PHÍ GIÁ THÀNH"
date: "2026-11-07"
summary: "Lập phiếu kết chuyển sau khi kiểm tra kết quả kỳ tính giá thành."
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

Lập phiếu kết chuyển sau khi kiểm tra kết quả kỳ tính giá thành.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Kỳ có tập THCP/sản lượng đúng và chi phí đã được kiểm tra theo [HƯỚNG DẪN PHÂN BỔ CHI PHÍ CHUNG VÀ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-2-huong-dan-phan-bo-chi-phi-chung-va-tinh-gia-thanh/).
- Kỳ chưa có phiếu kết chuyển; có quyền kết chuyển và Ngày hạch toán thuộc kỳ kế toán cho phép ghi.
- Ghi lại số liệu chi phí, giá vốn và chứng từ mẫu trước thao tác để so sau; không sửa nguồn đồng thời lúc kết chuyển.

## 2. Mở chức năng

**Giá thành → Tính giá thành**

## 3. Nhận biết màn hình

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Xem**, **Hủy**, **Cất**.

Ảnh hiện có minh họa phạm vi quan sát bên dưới; các cảnh kết quả chưa thực hiện vẫn cần bổ sung. Thao tác tìm/lọc danh sách chung xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); không suy từ nút hiển thị thành quyền đã được cấp.

Đã mở Kết chuyển chi phí → Thêm kết chuyển chi phí, chọn kỳ 01/06–30/06/2026. Bản xem trước có 8 bút toán, tổng 657.700.341, TK Nợ 154 và các TK Có 621/6221/627/6274, ngày hạch toán 30/06/2026. Đã Hủy, chưa Cất; số tiền chỉ là số liệu xem trước, không phải giá trị minh họa cần nhập hoặc chứng từ đã ghi sổ.

![Xem trước kỳ tháng 06/2026, 8 bút toán, tổng 657700341, không Cất, chưa kết chuyển](/posts/2026-11-07-gt-a02-3-huong-dan-ket-chuyen-chi-phi-gia-thanh/hinh-01-20261030-gt-a02-3-xem-truoc-ket-chuyen.png)

## 4. Trình tự công việc

Chọn kỳ chưa kết chuyển → Tải bút toán xem trước → Kiểm tra ngày và từng tài khoản/đối tượng → Cất → Đối chiếu phiếu thực lưu, kỳ và giá vốn

## 5. Thực hiện trên phần mềm

1. Chọn kỳ đã đối chiếu chi phí/sản lượng và chưa kết chuyển, mở **Kết chuyển chi phí** từ kỳ hoặc **Thêm kết chuyển chi phí**. Kỳ đã kết chuyển phải xử lý phiếu cũ theo [HƯỚNG DẪN HỦY KẾT CHUYỂN VÀ MỞ LẠI KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-4-huong-dan-huy-ket-chuyen-va-mo-lai-ky-tinh-gia-thanh/) trước khi lập lại.
2. Chọn **Kỳ tính giá thành**. Chờ tải hết bút toán, kiểm tra **Ngày hạch toán** mặc định là Đến ngày kỳ; sửa chỉ khi phù hợp kỳ kế toán được phép ghi.
3. Đối chiếu từng **Mã/Tên đối tượng THCP**, **TK Nợ**, **TK Có**, **Số tiền**. Bảng gom theo THCP và tài khoản; tổng phiếu lấy cả chi phí trực tiếp và phần phân bổ, không chỉ bảng chi phí chung.
4. Bấm **Cất** khi các số đã được duyệt. Hệ thống còn tổng hợp và tính lại kỳ trước khi ghi; chờ kết quả, không bấm lại trong lúc đang kết chuyển.
5. Mở phiếu vừa tạo, kiểm tra Số chứng từ, Ngày hạch toán/Ngày chứng từ, tổng và chi tiết thực lưu. Nếu nguồn chi phí vừa thay đổi, so lại phiếu với số đã duyệt vì số lưu có thể khác bảng xem trước.
6. Kiểm tra kỳ đã đánh dấu kết chuyển; đối chiếu bút toán kế toán và giá vốn thành phẩm, giá nhập sổ kho, giá vốn phiếu nhập gia công và phiếu bán thuộc phạm vi kỳ. Nếu bị chặn bởi kỳ khóa/tài khoản, xử lý nguyên nhân rồi kiểm tra lại phiếu trước khi gửi lại.

## 6. Giải thích các thông tin trên màn hình

- **Kỳ tính giá thành**: Cách nhập / cách đọc và quy tắc: Bắt buộc chọn; danh sách chỉ giữ kỳ chưa kết chuyển. Chọn kỳ sẽ tải lại các dòng xem trước và đặt Ngày hạch toán bằng Đến ngày của kỳ.
- **Ngày hạch toán**: Cách nhập / cách đọc và quy tắc: Ngày nhập/chọn cho ghi sổ; mặc định cuối kỳ đã chọn. Ngày chứng từ được đặt cùng ngày này. Kiểm tra kỳ kế toán mở trước khi Cất.
- **Mã đối tượng THCP**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; mã THCP của dòng chi phí được gom theo từng tài khoản Có.
- **Tên đối tượng THCP**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tên tương ứng mã THCP trên dòng bút toán, không phải tên thành phẩm.
- **TK Nợ**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trong xem trước; hệ thống dùng 154 cho bút toán kết chuyển chi phí.
- **TK Có**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tài khoản chi phí từ chi phí trực tiếp và chi phí đã phân bổ của kỳ, gom cùng THCP và cùng tài khoản.
- **Số tiền**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; cộng số tiền chi phí trực tiếp và phân bổ theo THCP/tài khoản; bỏ dòng tổng bằng 0. Tổng phiếu là tổng các dòng. Hệ thống tổng hợp/tính lại nên cần kiểm tra số thực lưu.

## 7. Kiểm tra sau khi thực hiện

Có phiếu kết chuyển với tổng thực tính từ các dòng chi phí, kỳ được đánh dấu đã kết chuyển và chặn thao tác đổi số trực tiếp. Hệ thống ghi bút toán kế toán và cập nhật các giá vốn liên quan của kỳ. Đối chiếu phiếu thực lưu, sổ và giá vốn mẫu trước coi là đủ kết quả.

Đây là hành vi dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Mỗi kỳ không được tạo phiếu kết chuyển trùng. Chỉ hủy bằng luồng [HƯỚNG DẪN HỦY KẾT CHUYỂN VÀ MỞ LẠI KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-4-huong-dan-huy-ket-chuyen-va-mo-lai-ky-tinh-gia-thanh/) khi cần điều chỉnh.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Vui lòng chọn kỳ tính giá thành**: chưa có kỳ hợp lệ trong hộp; chọn kỳ chưa kết chuyển rồi chờ tải bút toán.
- **Kỳ … đã có phiếu kết chuyển…**: đã tồn tại phiếu của kỳ; kiểm tra phiếu cũ, không tạo lại. Nếu cần điều chỉnh, dùng [HƯỚNG DẪN HỦY KẾT CHUYỂN VÀ MỞ LẠI KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-4-huong-dan-huy-ket-chuyen-va-mo-lai-ky-tinh-gia-thanh/) theo thứ tự kỳ.
- **Kỳ kế toán chưa mở/đã khóa hoặc tài khoản chưa sẵn sàng**: bước ghi bút toán có thể bị chặn. Chuyển người phụ trách xử lý đúng ngày/tài khoản, mở lại danh sách xác định kết quả trước gửi tiếp; không suy thành đã kết chuyển từ việc hộp xem trước đóng.

## 10. Câu hỏi thường gặp

**Vì sao phiếu lưu khác số xem trước?** Kết chuyển tổng hợp và tính lại số liệu nguồn ở hệ thống. Nếu nguồn thay đổi sau khi mở hộp, phải rà lại số thực lưu và phương án kế toán.

## 11. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-0-huong-dan-tong-quan-tinh-gia-thanh/)** — Tổng quan Tính giá thành.

## 12. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-0-huong-dan-tong-quan-tinh-gia-thanh/)** — Tổng quan Tính giá thành.
- **[HƯỚNG DẪN LẬP KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-1-huong-dan-lap-ky-tinh-gia-thanh/)** — Lập kỳ tính giá thành.
- **[HƯỚNG DẪN PHÂN BỔ CHI PHÍ CHUNG VÀ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-2-huong-dan-phan-bo-chi-phi-chung-va-tinh-gia-thanh/)** — Phân bổ chi phí chung và tính giá thành.
- **[HƯỚNG DẪN HỦY KẾT CHUYỂN VÀ MỞ LẠI KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-4-huong-dan-huy-ket-chuyen-va-mo-lai-ky-tinh-gia-thanh/)** — Hủy kết chuyển và mở lại kỳ tính giá thành.
