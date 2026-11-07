---
title: "HƯỚNG DẪN SAO CHÉP ĐỐI TƯỢNG TẬP HỢP CHI PHÍ"
date: "2026-11-07"
summary: "Tạo đối tượng mới dựa trên thông tin một đối tượng có sẵn rồi chọn lại hàng hóa cần gán."
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

Tạo đối tượng mới dựa trên thông tin một đối tượng có sẵn rồi chọn lại hàng hóa cần gán.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Có THCP nguồn, mã/tên mới và phương án chuyển/gán mã hàng–kho được duyệt. Rà cấu hình NVL của nguồn trước sao chép; tạo bản sao và lưu gán hàng là hai lần ghi riêng, cần kiểm tra kết quả từng bước.

hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; kiểm tra đúng hệ thống của đơn vị trước thao tác.

## 2. Mở chức năng

**Giá thành → Đối tượng tập hợp chi phí**

## 3. Nhận biết màn hình

![Giao diện danh sách trước thao tác — Gia Phúc/dev, 25/10/2026; chưa thực hiện tính, gán, xóa hoặc kết chuyển trong ảnh.](/posts/2026-11-07-gt-a04-2-huong-dan-sao-chep-doi-tuong-tap-hop-chi-phi/hinh-01-danh-sach-truoc-thao-tac.png)

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Tính giá ván**, **Tính giá giấy**, **Tính hóa chất**, **Kích hoạt (đang sử dụng)**, **Hủy**, **Lưu**.

Chưa có ảnh xác minh; danh sách cảnh chụp ở cuối bài. Thao tác tìm/lọc danh sách chung xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); không suy từ nút hiển thị thành quyền đã được cấp.

## 4. Trình tự công việc

Chọn THCP nguồn → Nhập mã/tên mới → Tạo bản sao → Rà/gán hàng ở bước riêng → Kiểm tra cấu hình và liên kết nguồn/đích

## 5. Thực hiện trên phần mềm

1. Chọn đúng THCP nguồn và **Sao chép**; đối chiếu mã/tên nguồn rồi nhập **Mã**, **Tên** mới. Mã mới phải khác mã đã có trong cùng chi nhánh.
2. Rà cấu hình nguồn trước tạo: bản sao lấy **Loại**, **Diễn giải**, ba cờ tính NVL từ nguồn và được kích hoạt. Luồng sao chép hiện chỉ gửi mã/tên mới; không dùng việc sửa các ô cấu hình khác trong hộp này làm căn cứ rằng cấu hình bản sao đã thay đổi.
3. Sau khi tạo đối tượng mới, hệ thống mở chọn hàng hóa với lựa chọn gợi sẵn từ nguồn. Kiểm tra lại mã THCP đích và từng cặp mã hàng–kho; chỉ **Lưu** khi tập hàng cần đưa sang đối tượng mới đã đúng.
4. Nếu đóng bước chọn hàng mà chưa Lưu, đối tượng mới vẫn đã được tạo; mở lại để rà/gán, không bấm sao chép thêm một lần với cùng mã.
5. Mở lại cả nguồn và đích, kiểm tra hàng/kho được gán và sản lượng. Bước gán có thể chuyển liên kết hàng sang đích; không mặc định nguồn vẫn giữ nguyên toàn bộ liên kết sau lưu.
6. Nếu cần sửa loại, diễn giải hoặc các cờ NVL khác nguồn, thực hiện **Sửa** trên bản sao đã tạo và đối chiếu lại trước đưa vào kỳ.

## 6. Giải thích các thông tin trên màn hình

- **Mã**: Cách nhập / cách đọc và quy tắc: Bắt buộc nhập mã mới; duy nhất trong cùng chi nhánh. Luồng sao chép chỉ truyền mã mới và tên mới để tạo bản sao.
- **Tên**: Cách nhập / cách đọc và quy tắc: Bắt buộc nhập tên mới để phân biệt THCP nguồn/đích. Không có nghĩa sao chép kết quả tính giá thành của kỳ.
- **Loại**: Cách nhập / cách đọc và quy tắc: cửa sổ hiển thị loại nguồn. Khi sao chép, loại được lấy từ đối tượng nguồn; thay đổi ô trong hộp sao chép không được luồng này gửi lên.
- **Diễn giải**: Cách nhập / cách đọc và quy tắc: Bản sao lấy diễn giải của nguồn. Nếu cần thay mô tả, sửa bản sao sau tạo rồi kiểm tra lại.
- **Tính giá nguyên vật liệu (621)**: Cách nhập / cách đọc và quy tắc: Ba cờ ván/giấy/hóa chất được lấy từ nguồn khi sao chép. Muốn cấu hình khác, dùng Sửa trên bản sao; không dựa vào thay ô trong hộp sao chép.
- **Kích hoạt (đang sử dụng)**: Cách nhập / cách đọc và quy tắc: Bản sao được tạo với Kích hoạt được bật. Nếu nguồn ngưng sử dụng cũng phải kiểm tra trạng thái bản sao trước chọn vào kỳ.

## 7. Kiểm tra sau khi thực hiện

Sau bước đầu có THCP mới với mã/tên mới, cấu hình kế thừa từ nguồn và được kích hoạt. Chỉ sau Lưu bước chọn hàng mới có thay đổi liên kết mã/kho. Rà nguồn/đích trước đưa bản sao vào kỳ; đóng bước chọn hàng không hủy bản sao đã tạo.

Đây là hành vi dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Sao chép không phải sao chép nguyên kết quả giá thành của kỳ cũ. Phải kiểm tra lại liên kết mã/kho.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Vui lòng nhập Mã và Tên đối tượng**: một trong hai ô chưa có giá trị; bổ sung đủ mã và tên trước Lưu.
- **Không lưu được mã đã có**: dữ liệu có ràng buộc mã duy nhất trong cùng chi nhánh. Tra danh mục và chọn mã mới đúng quy ước; không xóa đối tượng cũ đang dùng chỉ để lấy lại mã.
- **Không thấy hàng nguồn trong bước chọn gán**: đối chiếu Loại hàng hóa, kỳ sản lượng và THCP đang sở hữu mã/kho. Bộ lọc có thể loại hàng thuộc THCP khác; không coi bước sao chép đã tự hoàn thành chuyển liên kết.

## 10. Câu hỏi thường gặp

**Đóng hộp chọn hàng có hủy đối tượng vừa sao chép không?** Không. Đối tượng mới đã được tạo ở bước trước, việc gán hàng là bước lưu riêng; mở lại danh mục để kiểm tra.

## 11. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN ĐỐI TƯỢNG TẬP HỢP CHI PHÍ](/bai-viet/2026-11-07-gt-a04-0-huong-dan-tong-quan-doi-tuong-tap-hop-chi-phi/)** — Tổng quan Đối tượng tập hợp chi phí.

## 12. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN ĐỐI TƯỢNG TẬP HỢP CHI PHÍ](/bai-viet/2026-11-07-gt-a04-0-huong-dan-tong-quan-doi-tuong-tap-hop-chi-phi/)** — Tổng quan Đối tượng tập hợp chi phí.
- **[HƯỚNG DẪN GÁN HÀNG HÓA CHO ĐỐI TƯỢNG TẬP HỢP CHI PHÍ](/bai-viet/2026-11-07-gt-a04-1-huong-dan-gan-hang-hoa-cho-doi-tuong-tap-hop-chi-phi/)** — Gán hàng hóa cho đối tượng tập hợp chi phí.
