---
title: "HƯỚNG DẪN XÓA VÀ TÍNH LẠI PHIẾU KHẤU HAO"
date: "2026-11-07"
summary: "Hoàn lại khấu hao của phiếu cần sửa rồi tính lại đúng kỳ."
module: "Tài sản và CCDC"
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

Hoàn lại khấu hao của phiếu cần sửa rồi tính lại đúng kỳ.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: hoàn lại khấu hao của phiếu cần sửa rồi tính lại đúng kỳ.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Tính khấu hao**

## 3. Nhận biết màn hình

![Giao diện danh sách trước thao tác — Gia Phúc/dev, 25/10/2026; chưa thực hiện tính, gán, xóa hoặc kết chuyển trong ảnh.](/posts/2026-11-07-ts-a03-2-huong-dan-xoa-va-tinh-lai-phieu-khau-hao/hinh-01-danh-sach-truoc-thao-tac.png)

Màn danh sách dùng để đối chiếu dữ liệu và mở các thao tác theo hồ sơ đã chọn.

Các nút chính của chức năng: **Xuất Excel**, **Tính khấu hao**, **Xem**.

Chưa có ảnh xác minh; danh sách cảnh chụp ở cuối bài. Thao tác tìm/lọc danh sách chung xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); không suy từ nút hiển thị thành quyền đã được cấp.

## 4. Trình tự công việc

Ghi nhận phiếu và số dư trước xử lý → Kiểm tra liên kết giá thành → Xóa phiếu cũ theo điều kiện → Tính/lập phiếu mới nếu cần → Đối chiếu kỳ và số dư

## 5. Thực hiện trên phần mềm

1. Mở **Xem** của đúng Số chứng từ, kiểm tra tháng/năm, tổng KH và từng tài sản. Ghi lại hao mòn lũy kế, giá trị còn lại và thời gian còn lại trước xử lý để đối chiếu.
2. Kiểm tra liên quan giá thành: hệ thống chặn xóa khi phân bổ KH đã đi vào kỳ giá thành đã kết chuyển (chi phí trực tiếp hoặc chi phí chung đã được sử dụng). Nếu bị chặn, dừng và xin phương án hủy kết chuyển/kỳ giá thành từ người phụ trách; không đổi kỳ hoặc đối tượng để vượt chặn.
3. **Xóa** sẽ hoàn giảm hao mòn lũy kế theo số KH của từng dòng (không dưới 0), cộng lại giá trị còn lại và thêm một tháng vào thời gian còn lại đang lưu, sau đó xóa phiếu cùng chi tiết phân bổ/hạch toán. Đối chiếu đúng từng tài sản sau xóa; cột tháng còn lại ở danh sách còn có công thức theo lịch riêng.
4. **Tính lại** yêu cầu xác nhận rồi xóa phiếu cũ trước; chỉ khi xóa thành công mới mở cửa sổ tính với tháng/năm cũ được điền trước. Nếu hủy cửa sổ tính, phiếu cũ đã xóa và chưa có phiếu thay thế; phải tiếp tục lập lại theo [HƯỚNG DẪN TÍNH KHẤU HAO VÀ LẬP PHIẾU KHẤU HAO](/bai-viet/2026-11-07-ts-a03-1-huong-dan-tinh-khau-hao-va-lap-phieu-khau-hao/) để hoàn tất nghiệp vụ.
5. Sau lập lại, kiểm tra có phiếu mới đúng kỳ, số chứng từ, số tiền, chi tiết và hao mòn của từng tài sản. Nếu tính/lưu mới lỗi, ghi nhận kỳ đang thiếu phiếu và xử lý nguyên nhân; không coi thông báo xóa thành công là tính lại hoàn tất.

## 6. Giải thích các thông tin trên màn hình

- **Ngày hạch toán**: Ý nghĩa, cách nhập và quy tắc riêng: Ngày hạch toán đã lưu trên phiếu khấu hao; cột chỉ đọc, hiển thị dd/MM/yyyy.
- **Ngày chứng từ**: Ý nghĩa, cách nhập và quy tắc riêng: Ngày chứng từ khấu hao đã lưu; cột chỉ đọc, phân biệt với tháng/năm tính KH trong chi tiết phiếu.
- **Số chứng từ**: Ý nghĩa, cách nhập và quy tắc riêng: Số phiếu KH đã lập; dùng mở Xem và nhận diện phiếu bị xóa. Tính lại không bảo đảm giữ số cũ vì tạo một phiếu mới.
- **Diễn giải**: Ý nghĩa, cách nhập và quy tắc riêng: Nội dung diễn giải lưu trên phiếu, dùng kiểm tra cùng kỳ và số chứng từ; không sửa trực tiếp tại danh sách.
- **Số tiền**: Ý nghĩa, cách nhập và quy tắc riêng: Tổng khấu hao của phiếu đã lưu; mở Xem để đối chiếu chi tiết TSCĐ, phân bổ và hạch toán. Dòng Tổng cuối danh sách cộng số tiền các phiếu.

## 7. Kiểm tra sau khi thực hiện

Theo luồng hiện tại, xóa hoàn số KH theo từng tài sản và xóa chi tiết/phiếu. Tính lại chỉ hoàn tất sau khi lập được phiếu mới đúng kỳ; nếu hủy/lỗi sau bước xóa thì kỳ chưa có phiếu thay thế.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Không bỏ dở sau bước xóa phiếu cũ. Tính lại không phải chỉ mở phiếu để xem.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Phiếu KH đã được đưa vào kỳ giá thành đã kết chuyển**: Cách xử lý riêng: Ghi lại tên kỳ trong thông báo và chuyển người phụ trách duyệt phương án hủy kết chuyển/xử lý kỳ; điều kiện này chặn cả Xóa lẫn Tính lại.
- **Không tìm thấy phiếu khấu hao**: Cách xử lý riêng: Tải lại danh sách và kiểm tra Số chứng từ; phiếu có thể đã bị xóa ở thao tác trước.
- **Tính lại nhưng hủy/lỗi ở hộp tính mới**: Cách xử lý riêng: Kiểm tra kỳ đang chưa có phiếu sau xóa; tiếp tục lập mới đúng kỳ theo [HƯỚNG DẪN TÍNH KHẤU HAO VÀ LẬP PHIẾU KHẤU HAO](/bai-viet/2026-11-07-ts-a03-1-huong-dan-tinh-khau-hao-va-lap-phieu-khau-hao/) và đối chiếu hao mòn, không lặp lại thao tác Xóa phiếu cũ.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN TÍNH KHẤU HAO](/bai-viet/2026-11-07-ts-a03-0-huong-dan-tong-quan-tinh-khau-hao/)** — Tổng quan Tính khấu hao.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN TÍNH KHẤU HAO](/bai-viet/2026-11-07-ts-a03-0-huong-dan-tong-quan-tinh-khau-hao/)** — Tổng quan Tính khấu hao.
- **[HƯỚNG DẪN TÍNH KHẤU HAO VÀ LẬP PHIẾU KHẤU HAO](/bai-viet/2026-11-07-ts-a03-1-huong-dan-tinh-khau-hao-va-lap-phieu-khau-hao/)** — Tính khấu hao và lập phiếu khấu hao.
