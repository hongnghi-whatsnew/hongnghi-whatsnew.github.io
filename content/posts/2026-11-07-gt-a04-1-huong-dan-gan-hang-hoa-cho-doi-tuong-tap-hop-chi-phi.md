---
title: "HƯỚNG DẪN GÁN HÀNG HÓA CHO ĐỐI TƯỢNG TẬP HỢP CHI PHÍ"
date: "2026-11-07"
summary: "Gắn hàng hóa theo đối tượng/kho để tập hợp sản lượng và chi phí đúng phạm vi."
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

Gắn hàng hóa theo đối tượng/kho để tập hợp sản lượng và chi phí đúng phạm vi.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

THCP đích đã tồn tại; có danh sách mã hàng và kho cần nhận chi phí. Xác định loại nguồn và khoảng ngày có sản lượng để chọn dòng; rà các liên kết cũ, phiếu khóa sổ và hàng bù lỗi trước thay thế danh sách.

hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; kiểm tra đúng hệ thống của đơn vị trước thao tác.

## 2. Mở chức năng

**Giá thành → Đối tượng tập hợp chi phí**

## 3. Nhận biết màn hình

![Giao diện danh sách trước thao tác — Gia Phúc/dev, 25/10/2026; chưa thực hiện tính, gán, xóa hoặc kết chuyển trong ảnh.](/posts/2026-11-07-gt-a04-1-huong-dan-gan-hang-hoa-cho-doi-tuong-tap-hop-chi-phi/hinh-01-danh-sach-truoc-thao-tac.png)

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Hủy**.

Chưa có ảnh xác minh; danh sách cảnh chụp ở cuối bài. Thao tác tìm/lọc danh sách chung xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); không suy từ nút hiển thị thành quyền đã được cấp.

## 4. Trình tự công việc

Xác định THCP đích → Chọn loại hàng và kỳ sản lượng → Rà cặp mã hàng/kho → Chọn tập cần gán → Lưu → Đối chiếu nguồn/đích

## 5. Thực hiện trên phần mềm

1. Xác định đúng THCP đích, chọn **Loại hàng hóa**, **Năm / Tháng** hoặc sửa **Khoảng ngày** để có tập sản lượng cần rà. Hộp chỉ hiển thị hàng có phát sinh thuộc nguồn chọn trong kỳ và không thuộc THCP khác theo phạm vi kho.
2. Đọc **Mã hàng**, **Kho nhập**, **SL nhập kho**, **Số mặt**. Mỗi dòng là một cặp mã hàng–kho; cùng một mã ở hai kho cần chọn riêng nếu chỉ một kho thuộc đối tượng này.
3. Đánh dấu dòng cần gán, bỏ dấu dòng muốn loại khỏi đối tượng này. Với Dịch vụ, việc gán theo mã hàng, không giới hạn bởi kho hiển thị. Khi đổi tháng/loại, lựa chọn được giữ trong dữ liệu của hộp; không suy các mã vắng khỏi lưới là đã bị bỏ gán.
4. Trước **Lưu**, rà cả mã/kho đang chọn và các mã từng gán cần bỏ. Nếu có mã bỏ gán, hộp **Xác nhận thay thế danh sách** nêu số mã gán và bỏ gán; chỉ xác nhận khi đúng phạm vi thay đổi.
5. Sau lưu, mở lại THCP và kiểm tra mã/kho đã gán; đối chiếu thêm chi tiết phiếu nhập thành phẩm/nhập gia công chưa khóa. Khoảng ngày lọc lưới không giới hạn đồng bộ các phiếu chưa khóa của mã đó.
6. Với hàng bù lỗi, rà riêng mã lỗi và kho lỗi: dòng chỉ có lỗi có quy tắc xác định THCP riêng, không mặc định lấy toàn bộ từ thành phẩm đạt. Sau chỉnh gán, tính lại kỳ giá thành cần ảnh hưởng theo [HƯỚNG DẪN PHÂN BỔ CHI PHÍ CHUNG VÀ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-2-huong-dan-phan-bo-chi-phi-chung-va-tinh-gia-thanh/).

## 6. Giải thích các thông tin trên màn hình

- **Loại hàng hóa:**: Cách nhập / cách đọc và quy tắc: Chọn Sản xuất ván, Sản xuất giấy hoặc Dịch vụ để lấy đúng nguồn sản lượng. Màn Gán HH nhớ loại chọn gần nhất theo THCP; chưa có thì Sản xuất ván.
- **Năm / Tháng:**: Cách nhập / cách đọc và quy tắc: Chọn nhanh khoảng ngày; mặc định tháng trước. Chọn cả năm thì phạm vi từ 01/01 đến 31/12 của năm chọn.
- **Khoảng ngày:**: Cách nhập / cách đọc và quy tắc: Hai mốc lấy sản lượng dùng cho danh sách. Đổi ngày/loại sẽ tải lại lưới; đây không phải giới hạn ngày đồng bộ các chứng từ khi Lưu gán.
- **Mã hàng**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; mã hàng đầu ra trên từng dòng hàng hóa × kho. Một mã có nhiều kho có thể xuất hiện nhiều dòng; chọn đúng dòng kho cần gán.
- **Tên hàng hóa**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tên của mã hàng cần gắn THCP, hỗ trợ đối chiếu với phiếu sản xuất/bán dịch vụ.
- **Loại**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; phân loại danh mục hàng như Thành phẩm, Nguyên liệu, Hàng trơn; khác Loại của THCP.
- **Loại hàng**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tên loại hàng chi tiết từ danh mục, dùng phân biệt sản phẩm cùng tên.
- **Số mặt**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; nhãn số mặt như 1M/2M; dùng đối chiếu tổng quy đổi, không nhập lại hệ số ở màn gán.
- **SL nhập kho**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; sản lượng của mã hàng tại kho trong khoảng lọc. Với Dịch vụ, nguồn theo nghiệp vụ bán hàng; không sửa SL trên màn gán.
- **Kho nhập**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; kho của dòng sản lượng. Chọn/bỏ chọn dòng này quyết định phạm vi kho gán cho mã; Dịch vụ gán cấp mã hàng, không hạn chế theo kho hiển thị.
- **Số mặt (quy đổi)**: Cách nhập / cách đọc và quy tắc: Cột tính ẩn, không có trong Chọn cột hiển thị; bằng số mặt đọc từ nhãn × SL nhập. Dùng tính dòng tổng Số mặt; không phải ô người dùng nhập.
- **Ngày tạo**: Cách nhập / cách đọc và quy tắc: Cột phụ ẩn mặc định; ngày tạo hồ sơ hàng hóa, không phải ngày nhập kho trong khoảng lọc.
- **Gia công**: Cách nhập / cách đọc và quy tắc: Cột phụ chỉ đọc, ẩn mặc định; thông tin gia công của hồ sơ hàng hóa để phân biệt mã.
- **Tiêu chuẩn**: Cách nhập / cách đọc và quy tắc: Cột phụ chỉ đọc, ẩn mặc định; tiêu chuẩn của hàng hóa, không phải tiêu thức phân bổ chi phí.
- **Quy cách (D×R×D)**: Cách nhập / cách đọc và quy tắc: Cột phụ chỉ đọc, ẩn mặc định; kích thước của hàng hóa giúp chọn đúng quy cách.
- **ĐVT**: Cách nhập / cách đọc và quy tắc: Cột phụ chỉ đọc, ẩn mặc định; đơn vị tính của hàng, dùng đọc SL nhập kho.
- **NCC**: Cách nhập / cách đọc và quy tắc: Cột phụ chỉ đọc, ẩn mặc định; thông tin nhà cung cấp của hàng, không phải bên nhận phân bổ.
- **Đơn giá**: Cách nhập / cách đọc và quy tắc: Cột phụ chỉ đọc, ẩn mặc định; trường giá nhập của hồ sơ hàng hóa, không phải giá thành vừa tính hay ô nhập đơn giá phân bổ.
- **Trọng lượng**: Cách nhập / cách đọc và quy tắc: Cột phụ chỉ đọc, ẩn mặc định; trọng lượng của hàng hóa, không tự suy là tiêu thức đang dùng tính giá thành.

## 7. Kiểm tra sau khi thực hiện

Liên kết mã/kho và THCP được cập nhật, các chi tiết phiếu nhập thành phẩm/gia công chưa khóa được đồng bộ theo quy tắc nguồn. Đối chiếu số mã gán/bỏ gán và cả chứng từ ngoài khoảng lọc nhưng chưa khóa; thao tác gán chưa thay bước tính lại kỳ.

Đây là hành vi dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Gán/bỏ gán tác động cả liên kết và dòng chứng từ chưa khóa; không coi bộ lọc thời gian là bằng chứng chỉ sửa lịch sử trong thời gian đó.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

Các tình huống sau là căn cứ rà dữ liệu, chưa phải thông báo lỗi cố định:

- **Không thấy mã cần gán**: kiểm tra nguồn ván/giấy/dịch vụ, khoảng ngày có sản lượng và mã/kho đang thuộc THCP khác. Mã đã gán nhưng không có sản lượng trong tháng có thể không hiện trong lưới, lựa chọn vẫn được giữ.
- **Hộp Xác nhận thay thế danh sách có số bỏ gán ngoài dự kiến**: dừng xác nhận, rà lại các mã đã bỏ tick và lựa chọn giữ qua các tháng trước Lưu.
- **Gán danh mục rồi nhưng phiếu cũ chưa đổi THCP**: kiểm tra phiếu thuộc kỳ khóa sổ hoặc trường hợp bù lỗi. SQL loại phiếu đã khóa khỏi đồng bộ; không tự sửa/chạy lại để vượt khóa.

## 10. Câu hỏi thường gặp

**Đổi tháng rồi Lưu có bỏ hết mã không hiện tháng này không?** Lựa chọn được giữ trong dữ liệu của hộp. Chỉ bỏ gán khi chủ động bỏ lựa chọn tương ứng; đọc hộp xác nhận số mã bỏ gán trước đồng ý.

## 11. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN ĐỐI TƯỢNG TẬP HỢP CHI PHÍ](/bai-viet/2026-11-07-gt-a04-0-huong-dan-tong-quan-doi-tuong-tap-hop-chi-phi/)** — Tổng quan Đối tượng tập hợp chi phí.

## 12. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN ĐỐI TƯỢNG TẬP HỢP CHI PHÍ](/bai-viet/2026-11-07-gt-a04-0-huong-dan-tong-quan-doi-tuong-tap-hop-chi-phi/)** — Tổng quan Đối tượng tập hợp chi phí.
- **[HƯỚNG DẪN SAO CHÉP ĐỐI TƯỢNG TẬP HỢP CHI PHÍ](/bai-viet/2026-11-07-gt-a04-2-huong-dan-sao-chep-doi-tuong-tap-hop-chi-phi/)** — Sao chép đối tượng tập hợp chi phí.
