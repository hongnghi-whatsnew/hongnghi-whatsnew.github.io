---
title: "HƯỚNG DẪN LẬP KỲ TÍNH GIÁ THÀNH"
date: "2026-11-07"
summary: "Xác lập khoảng tính giá thành và danh sách đối tượng tập hợp chi phí của kỳ."
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

Xác lập khoảng tính giá thành và danh sách đối tượng tập hợp chi phí của kỳ.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Danh mục THCP và liên kết hàng hóa/kho đã được rà soát theo [HƯỚNG DẪN TỔNG QUAN ĐỐI TƯỢNG TẬP HỢP CHI PHÍ](/bai-viet/2026-11-07-gt-a04-0-huong-dan-tong-quan-doi-tuong-tap-hop-chi-phi/), [HƯỚNG DẪN GÁN HÀNG HÓA CHO ĐỐI TƯỢNG TẬP HỢP CHI PHÍ](/bai-viet/2026-11-07-gt-a04-1-huong-dan-gan-hang-hoa-cho-doi-tuong-tap-hop-chi-phi/) hoặc [HƯỚNG DẪN GÁN ĐỐI TƯỢNG CHO HÀNG HÓA CÒN THIẾU](/bai-viet/2026-11-07-gt-a05-1-huong-dan-gan-doi-tuong-cho-hang-hoa-con-thieu/).
- Có khoảng ngày, tập đối tượng và sản lượng đầu ra cần tính; đối chiếu đối tượng ở kỳ khác trùng thời gian trước lập kỳ.
- Phương án tính trung bình giấy/hóa chất phải được kế toán xác nhận nếu cần bật; không có bước nhập dở dang ở cửa sổ này.

## 2. Mở chức năng

**Giá thành → Tính giá thành**

## 3. Nhận biết màn hình

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Xem**, **Tính trung bình giấy**, **Tính trung bình hóa chất**, **Hủy**, **Cất**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin và bảng chi tiết của cửa sổ. Khung  khoanh các nút ở cuối cửa sổ.

![Hình 1: cửa sổ thêm kỳ tính giá thành chưa lấy đối tượng và chưa Cất](/posts/2026-11-07-gt-a02-1-huong-dan-lap-ky-tinh-gia-thanh/hinh-01-gt-ky-them.png)

![Hình 2: Cửa sổ chọn đối tượng tập hợp chi phí, chưa chọn và xác nhận](/posts/2026-11-07-gt-a02-1-huong-dan-lap-ky-tinh-gia-thanh/hinh-02-gt-ky-chon-dt.png)

## 4. Trình tự công việc

Chọn tháng/năm và khoảng ngày → Kiểm tra tên kỳ → Lấy dữ liệu → Rà đối tượng/sản lượng/chi phí → Lưu kỳ → Đối chiếu danh sách

## 5. Thực hiện trên phần mềm

1. Chọn **Tháng**, **Năm**; kiểm tra **Từ ngày**, **Đến ngày**. Hộp thêm mới mặc định tháng hiện tại, cho phép sửa hai mốc ngày. Kiểm tra lại **Tên**: tên tự tạo theo ngày, nhưng tên đã gõ tay được giữ khi đổi ngày.
2. Bấm **Lấy dữ liệu** để nạp các THCP đang sử dụng và sản lượng trong khoảng ngày, hoặc **Chọn đối tượng** để thêm tập THCP cần tính. Đối tượng đã nằm trong kỳ khác trùng thời gian được loại khỏi danh sách chọn (khi sửa không loại chính kỳ đang sửa).
3. Rà từng **Mã**, **Tên**, **Loại**, **SL thành phẩm**. Mở **Danh sách thành phẩm** của THCP để đối chiếu mã và SL góp vào tổng. Xóa dòng THCP ngoài phạm vi chỉ loại khỏi kỳ này, không phải xóa danh mục.
4. Nếu đổi tháng/ngày, chờ nạp lại sản lượng rồi kiểm tra lại. Dòng không có sản lượng được nạp về 0; quay lại nguồn và liên kết hàng hóa/THCP nếu kỳ đáng lẽ có nhập thành phẩm. Không thay số 0 để tránh phải rà nguồn.
5. Chỉ bật **Tính trung bình giấy**, **Tính trung bình hóa chất** theo phương án đã duyệt. Đây là thay cách tập hợp NVL tương ứng, không phải chọn hiển thị thêm cột.
6. Trước **Cất**, kiểm tra tên không trống và có ít nhất một THCP. Kỳ mới bắt đầu **Chưa tính**, chưa kết chuyển; tiếp tục [HƯỚNG DẪN PHÂN BỔ CHI PHÍ CHUNG VÀ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-2-huong-dan-phan-bo-chi-phi-chung-va-tinh-gia-thanh/) để tổng hợp, phân bổ và tính giá thành.

## 6. Giải thích các thông tin trên màn hình

- **Tháng**: Cách nhập / cách đọc và quy tắc: Chọn nhanh từ 1 đến 12; thêm mới mặc định tháng hiện tại. Đổi tháng đặt lại khoảng ngày trọn tháng và nạp lại sản lượng cho các đối tượng đang có.
- **Năm**: Cách nhập / cách đọc và quy tắc: Chọn năm của kỳ; danh sách từ năm hiện tại trừ 5 đến cộng 2. Kết hợp Tháng để đặt Từ ngày/Đến ngày.
- **Từ ngày**: Cách nhập / cách đọc và quy tắc: Đầu vào ngày bắt đầu kỳ, mặc định đầu tháng. Sửa tay sẽ yêu cầu nạp lại sản lượng theo khoảng mới.
- **Đến ngày**: Cách nhập / cách đọc và quy tắc: Đầu vào ngày kết thúc kỳ, mặc định cuối tháng. Kiểm tra hai mốc trước Lấy dữ liệu/Chọn đối tượng.
- **Tên**: Cách nhập / cách đọc và quy tắc: Bắt buộc; tự tạo từ Từ ngày/Đến ngày, được sửa. Sau khi tự nhập tên không trống, đổi ngày không tự ghi đè; xóa tên để cho phép tạo lại tên mặc định.
- **Mã**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trong danh sách THCP; mã đối tượng lấy từ danh mục, không phải mã thành phẩm.
- **Loại**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; phân loại của THCP được chọn. Không đổi Loại ngay trong lưới kỳ.
- **SL thành phẩm**: Cách nhập / cách đọc và quy tắc: Số lượng theo THCP được nạp từ phát sinh khoảng ngày; cột lưới cho phép sửa nhưng thay đổi ngày/nạp sản lượng sẽ ghi lại từ nguồn. Chỉ điều chỉnh khi có căn cứ và được duyệt.
- **Mã thành phẩm**: Cách nhập / cách đọc và quy tắc: Chỉ đọc ở Danh sách thành phẩm của THCP; mã đầu ra góp sản lượng trong khoảng ngày.
- **Tên thành phẩm**: Cách nhập / cách đọc và quy tắc: Chỉ đọc ở popup; tên tương ứng mã thành phẩm, giúp giải trình sản lượng tổng của THCP.
- **SL**: Cách nhập / cách đọc và quy tắc: Chỉ đọc ở popup; sản lượng từng thành phẩm, tổng hợp thành SL thành phẩm của THCP.
- **Tính trung bình giấy / Tính trung bình hóa chất**: Cách nhập / cách đọc và quy tắc: Hai lựa chọn độc lập, mặc định bỏ chọn khi thêm kỳ. Khi chọn, nguồn tính NVL tương ứng dùng lượng xuất trong kỳ chia tổng SL thành phẩm rồi nhân SL từng thành phẩm thay xuất lô/định mức; cần phương án kế toán phê duyệt.

## 7. Kiểm tra sau khi thực hiện

Kỳ lưu khoảng ngày, tên, cờ tính NVL và tập THCP đã chọn; kỳ thêm mới ở Chưa tính, chưa kết chuyển. Lập kỳ chưa tạo phiếu kết chuyển hoặc giá thành chính thức. Mở kỳ kiểm tra đủ đối tượng và sản lượng rồi tiếp tục [HƯỚNG DẪN PHÂN BỔ CHI PHÍ CHUNG VÀ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-2-huong-dan-phan-bo-chi-phi-chung-va-tinh-gia-thanh/).

Kết quả trên là hành vi theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Không sửa kỳ đã kết chuyển. Thay đổi phạm vi đối tượng làm thay đổi kết quả tập hợp chi phí.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Vui lòng nhập Tên kỳ tính giá thành**: Tên chưa có; nhập tên hoặc kiểm tra khoảng ngày để tự tạo tên.
- **Vui lòng chọn ít nhất một đối tượng tập hợp chi phí**: danh sách THCP rỗng sau chọn/xóa; chọn lại đúng tập đối tượng.
- **Không thấy THCP cần chọn**: rà trạng thái đang sử dụng, khoảng ngày và kỳ khác trùng thời gian; không tạo mã THCP trùng nghiệp vụ để vượt bộ lọc.

## 10. Câu hỏi thường gặp

**Đổi tháng có giữ sản lượng đã sửa tay không?** Nạp lại sản lượng sẽ ghi số theo nguồn trong khoảng mới. Luôn đối chiếu lại sau đổi ngày hoặc Lấy dữ liệu.

## 11. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-0-huong-dan-tong-quan-tinh-gia-thanh/)** — Tổng quan Tính giá thành.

## 12. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-0-huong-dan-tong-quan-tinh-gia-thanh/)** — Tổng quan Tính giá thành.
- **[HƯỚNG DẪN PHÂN BỔ CHI PHÍ CHUNG VÀ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-2-huong-dan-phan-bo-chi-phi-chung-va-tinh-gia-thanh/)** — Phân bổ chi phí chung và tính giá thành.
- **[HƯỚNG DẪN KẾT CHUYỂN CHI PHÍ GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-3-huong-dan-ket-chuyen-chi-phi-gia-thanh/)** — Kết chuyển chi phí giá thành.
- **[HƯỚNG DẪN HỦY KẾT CHUYỂN VÀ MỞ LẠI KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-4-huong-dan-huy-ket-chuyen-va-mo-lai-ky-tinh-gia-thanh/)** — Hủy kết chuyển và mở lại kỳ tính giá thành.
