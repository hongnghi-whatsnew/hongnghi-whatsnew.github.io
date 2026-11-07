---
title: "HƯỚNG DẪN TÍNH VÀ PHÂN BỔ GIÁ VỐN GIA CÔNG NGOÀI"
date: "2026-11-07"
summary: "Tính giá vốn thành phẩm gia công ngoài theo kỳ và phân bổ kết quả về các phiếu liên quan."
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

Tính giá vốn thành phẩm gia công ngoài theo kỳ và phân bổ kết quả về các phiếu liên quan.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Có phiếu nhập kho gia công ngoài đúng khoảng ngày, mã ván đầu vào và đơn giá gia công chưa VAT. Rà sổ cái kho của các dòng nhập và khóa sổ trước phân bổ. Chuẩn bị giá cũ của sổ/phiếu mẫu vì Phân bổ ghi đè giá và tính lại giá vốn xuất sau đó.

hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; kiểm tra đúng hệ thống của đơn vị trước thao tác.

## 2. Mở chức năng

**Giá thành → Tính giá xuất kho**

## 3. Nhận biết màn hình

![Giao diện danh sách trước thao tác — Gia Phúc/dev, 25/10/2026; chưa thực hiện tính, gán, xóa hoặc kết chuyển trong ảnh.](/posts/2026-11-07-gt-a01-4-huong-dan-tinh-va-phan-bo-gia-von-gia-cong-ngoai/hinh-01-danh-sach-truoc-thao-tac.png)

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Đóng**.

Chưa có ảnh xác minh; danh sách cảnh chụp ở cuối bài. Thao tác tìm/lọc danh sách chung xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); không suy từ nút hiển thị thành quyền đã được cấp.

## 4. Trình tự công việc

Chọn kỳ/khoảng ngày → Tính giá xem trước → Đối chiếu hàng đạt/hàng lỗi và phân bổ → Kiểm tra giá → Ghi nhận → Đối chiếu phiếu liên quan

## 5. Thực hiện trên phần mềm

1. Chọn **Kỳ** hoặc sửa **Từ ngày**, **Đến ngày**, rồi bấm **Tính giá**. Đây là bước xem trước, chưa ghi giá. Kỳ không có phiếu nhập gia công ngoài sẽ báo và không có dòng để phân bổ.
2. Đối chiếu thành phẩm đạt/hàng lỗi, Số phiếu, Số lượng, giá thấp nhất/cao nhất và Giá vốn trung bình. Nhấp từng thành phẩm để kiểm tra ngày nhập, mã phiếu, mã ván, giá vốn ván, đơn giá gia công và giá đang ghi sổ cái.
3. Khi nguồn hoặc khoảng ngày cần sửa, xử lý nguồn rồi bấm **Tính giá** lại. Phân bổ dùng kỳ của lần tính gần nhất; đổi ô ngày chưa thay thế bảng kết quả đã tính.
4. Bấm **Phân bổ**; đọc khoảng ngày và số thành phẩm trong **Xác nhận phân bổ**. Xác nhận sau khi đã chốt giá: tác vụ ghi giá nhập sổ cái và giá vốn phiếu theo bình quân thành phẩm, rồi tính lại giá vốn các phiếu xuất tiếp sau.
5. Đối chiếu số dòng sổ cái đã phân bổ trong thông báo, đợt mới ở màn Tính giá xuất kho và giá trên các phiếu mẫu. Nhóm Chưa có sổ cái cần kiểm tra chứng từ/sổ kho, không coi là đã phân bổ đủ.
6. Nếu cần hủy, dùng đúng đợt Gia công ngoài theo [HƯỚNG DẪN XÓA VÀ HOÀN TÁC ĐỢT TÍNH GIÁ](/bai-viet/2026-11-07-gt-a01-6-huong-dan-xoa-va-hoan-tac-dot-tinh-gia/). Hủy đợt mới hơn có khoảng ngày chồng lấn trước; không coi đây là nút xóa riêng bảng xem trước.

## 6. Giải thích các thông tin trên màn hình

- **Kỳ**: Cách nhập / cách đọc và quy tắc: Chọn nhanh tháng để đặt Từ ngày/Đến ngày. Khoảng ngày dùng để phân bổ là khoảng đã bấm Tính giá gần nhất; sau đổi ngày phải Tính giá lại.
- **Từ ngày**: Cách nhập / cách đọc và quy tắc: Ngày bắt đầu lọc phiếu nhập kho gia công ngoài; sửa được trước Tính giá.
- **Đến ngày**: Cách nhập / cách đọc và quy tắc: Ngày kết thúc lọc phiếu; kiểm tra cả hai mốc trước Tính giá và hộp xác nhận Phân bổ.
- **Mã thành phẩm**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; mã đầu ra được gộp từ các dòng phiếu gia công ngoài. Nhấp dòng mở danh sách phiếu tạo nên kết quả.
- **Tên thành phẩm**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tên của mã đầu ra, dùng phân biệt thành phẩm đạt và mã hàng lỗi.
- **Hàng lỗi**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; dấu nhận diện mã thành phẩm lỗi tách riêng từ dòng gia công, không phải tỷ lệ lỗi cần nhập.
- **Số phiếu**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; số mã phiếu nhập khác nhau góp vào thành phẩm, không phải số dòng chi tiết.
- **Số lượng**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tổng SL thành phẩm trong nhóm; ở bảng chi tiết là SL của từng dòng phiếu. Là trọng số bình quân giá vốn.
- **Giá thấp nhất**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; giá vốn đơn vị thấp nhất của các dòng phiếu trong nhóm thành phẩm.
- **Giá cao nhất**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; giá vốn đơn vị cao nhất của các dòng phiếu trong nhóm; chênh lệch lớn cần mở chi tiết tìm phiếu.
- **Giá vốn trung bình**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tổng (SL dòng × giá vốn dòng) chia tổng SL cùng thành phẩm; không lấy trung bình cộng các mức giá.
- **Thành tiền**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tổng (SL dòng × giá vốn dòng) của thành phẩm ở bảng xem trước.
- **Trạng thái**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; Chưa có sổ cái nếu không có dòng nhập tương ứng; Đã phân bổ khi các dòng sổ cái hiện có khớp giá bình quân làm tròn hai số lẻ, còn lại Chưa phân bổ. Cần xem cả chi tiết khi có dòng thiếu sổ cái.
- **Ngày nhập**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trong chi tiết; ngày phiếu nhập góp vào kỳ đang tính.
- **Mã phiếu**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trong chi tiết; phiếu nhập kho gia công ngoài cần truy lại nếu giá hoặc SL sai.
- **Mã ván**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; mã vật tư ván đầu vào của dòng gia công dùng lấy giá vốn ván cuối kỳ.
- **Giá vốn ván**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; giá vốn ván bình quân sổ cái cuối kỳ dùng cho dòng; không phải giá mua/gia công trên phiếu.
- **Đơn giá G/C chưa VAT**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; đơn giá gia công chưa VAT từ dòng phiếu, đã tính theo số mặt; không nhân Số mặt thêm lần nữa.
- **Số mặt**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; thông tin số mặt của dòng để giải trình đơn giá gia công.
- **Giá vốn**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trong chi tiết; giá vốn ván cuối kỳ cộng đơn giá gia công chưa VAT, không cộng phí phát sinh.
- **Giá đang ghi sổ cái**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; giá nhập hiện có của dòng trên sổ cái kho; dùng so giá dự kiến. Trống nghĩa là chưa tìm thấy dòng sổ cái phù hợp.

## 7. Kiểm tra sau khi thực hiện

Tính giá chỉ trả bảng xem trước. Phân bổ tạo đợt riêng, ghi giá bình quân vào dòng sổ cái đủ điều kiện và giá vốn phiếu, rồi tính lại giá xuất tiếp sau. Kiểm tra số dòng sổ thực ghi, mã đạt/lỗi và giá trên phiếu; có dòng Chưa có sổ cái thì phải rà riêng.

Đây là hành vi dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Kỳ không có phiếu nhập gia công ngoài sẽ không có dữ liệu để phân bổ. Cần kiểm tra khóa sổ trước thay đổi.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Kỳ đã chọn không có phiếu nhập kho gia công ngoài.**: không có dòng nguồn đúng loại gia công ngoài trong khoảng ngày vừa tính. Kiểm tra kỳ/ngày và phiếu nhập; không coi phiếu gia công nội bộ là cùng nguồn.
- **Chưa có sổ cái**: không tìm thấy dòng nhập tương ứng để phân bổ. Kiểm tra phiếu và sổ kho của dòng đó; việc Tính giá vẫn ra số không chứng minh có dòng sổ cái để ghi.
- **Đổi ngày nhưng bảng kết quả còn của kỳ cũ**: chưa bấm Tính giá lại. Tính lại rồi kiểm tra khoảng ngày hiện trong hộp xác nhận Phân bổ.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN TÍNH GIÁ XUẤT KHO](/bai-viet/2026-11-07-gt-a01-0-huong-dan-tong-quan-tinh-gia-xuat-kho/)** — Tổng quan Tính giá xuất kho.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN TÍNH GIÁ XUẤT KHO](/bai-viet/2026-11-07-gt-a01-0-huong-dan-tong-quan-tinh-gia-xuat-kho/)** — Tổng quan Tính giá xuất kho.
- **[HƯỚNG DẪN TÍNH LẠI GIÁ VỐN BÌNH QUÂN TỨC THỜI](/bai-viet/2026-11-07-gt-a01-1-huong-dan-tinh-lai-gia-von-binh-quan-tuc-thoi/)** — Tính lại giá vốn bình quân tức thời.
- **[HƯỚNG DẪN IMPORT GIÁ VỐN TỪ EXCEL](/bai-viet/2026-11-07-gt-a01-2-huong-dan-import-gia-von-tu-excel/)** — Import giá vốn từ Excel.
- **[HƯỚNG DẪN IMPORT GIÁ THÀNH TỪ EXCEL](/bai-viet/2026-11-07-gt-a01-3-huong-dan-import-gia-thanh-tu-excel/)** — Import giá thành từ Excel.
- **[HƯỚNG DẪN BACKFILL VÀ HOÀN TÁC SỔ CÁI KHO](/bai-viet/2026-11-07-gt-a01-5-huong-dan-backfill-va-hoan-tac-so-cai-kho/)** — Backfill và hoàn tác sổ cái kho.
- **[HƯỚNG DẪN XÓA VÀ HOÀN TÁC ĐỢT TÍNH GIÁ](/bai-viet/2026-11-07-gt-a01-6-huong-dan-xoa-va-hoan-tac-dot-tinh-gia/)** — Xóa và hoàn tác đợt tính giá.
