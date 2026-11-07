---
title: "HƯỚNG DẪN XÓA VÀ TÍNH LẠI PHÂN BỔ CCDC"
date: "2026-11-07"
summary: "Hoàn lại số đã phân bổ của phiếu CCDC rồi lập lại khi có thay đổi hợp lệ."
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

Hoàn lại số đã phân bổ của phiếu CCDC rồi lập lại khi có thay đổi hợp lệ.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: hoàn lại số đã phân bổ của phiếu CCDC rồi lập lại khi có thay đổi hợp lệ.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Phân bổ chi phí CCDC**

## 3. Nhận biết màn hình

![Giao diện danh sách trước thao tác — Gia Phúc/dev, 25/10/2026; chưa thực hiện tính, gán, xóa hoặc kết chuyển trong ảnh.](/posts/2026-11-07-ts-b03-2-huong-dan-xoa-va-tinh-lai-phan-bo-ccdc/hinh-01-danh-sach-truoc-thao-tac.png)

Màn danh sách dùng để đối chiếu dữ liệu và mở các thao tác theo hồ sơ đã chọn.

Các nút chính của chức năng: **Xuất Excel**, **Tính phân bổ**, **Xem**.

Chưa có ảnh xác minh; danh sách cảnh chụp ở cuối bài. Thao tác tìm/lọc danh sách chung xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); không suy từ nút hiển thị thành quyền đã được cấp.

## 4. Trình tự công việc

Xác định phiếu/kỳ và số dư → Kiểm liên kết giá thành → Xóa phiếu cũ theo điều kiện → Tính/lập lại khi cần → Đối chiếu số dư CCDC

## 5. Thực hiện trên phần mềm

1. Đối chiếu số CT, tháng/năm và số tiền phiếu cần xóa/tính lại. Ghi lại số đã phân bổ và còn lại của những CCDC bị tác động.
2. Nếu hệ thống báo phiếu đã vào kỳ giá thành kết chuyển, dừng thao tác và xử lý hủy kết chuyển/xóa kỳ liên quan theo phương án được duyệt; không cố xóa từ màn khác.
3. **Xóa** loại bỏ phiếu và hoàn lại số đã phân bổ của các CCDC. **Tính lại** cũng xóa phiếu cũ trước, sau đó mở hộp tính với tháng/năm cũ; bước này chưa tự lập phiếu thay thế.
4. Khi tính lại, rà kết quả và **Thực hiện phân bổ** theo [HƯỚNG DẪN TÍNH VÀ LẬP PHIẾU PHÂN BỔ CCDC](/bai-viet/2026-11-07-ts-b03-1-huong-dan-tinh-va-lap-phieu-phan-bo-ccdc/). Nếu đóng hộp hoặc lập phiếu thất bại sau khi xóa, kỳ đang chưa có phiếu mới; phải kiểm tra danh sách trước kết thúc công việc.
5. Đối chiếu số CT mới, số dòng/tổng tiền và giá trị CCDC sau cùng; không cộng cả phiếu cũ đã xóa vào tổng kỳ.

## 6. Giải thích các thông tin trên màn hình

- **Số CT**: Ý nghĩa, cách nhập hoặc đối chiếu: Số chứng từ của đúng tab đang xem; ghi tăng, điều chỉnh, phân bổ và ghi giảm là các loại phiếu khác nhau. Cột chỉ xem.
- **Tháng**: Ý nghĩa, cách nhập hoặc đối chiếu: Kỳ phân bổ theo tháng, giá trị 1–12. Danh sách chỉ xem; khi tính mới chọn tháng cần xử lý.
- **Năm**: Ý nghĩa, cách nhập hoặc đối chiếu: Năm của kỳ phân bổ, giới hạn 2000–2100 khi tính; đọc cùng Tháng để tránh xóa/tính lại nhầm kỳ.
- **Ngày phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày được ghi trên phiếu phân bổ; phân biệt với cặp tháng/năm dùng lấy dữ liệu tính.
- **Số dòng**: Ý nghĩa, cách nhập hoặc đối chiếu: Số dòng chi tiết của phiếu; một hồ sơ có thể chia nhiều đối tượng nên không mặc định bằng số hồ sơ.
- **Tổng tiền phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Tổng số tiền chi tiết đã lập trong phiếu; xóa phiếu hoàn lại phần đã phân bổ của các hồ sơ liên quan.

Các cột danh sách là kết quả chỉ xem; nhập hoặc sửa tại nghiệp vụ tương ứng. Luôn xác định đúng tab trước đọc số CT và tổng tiền.

## 7. Kiểm tra sau khi thực hiện

Phiếu cũ bị xóa và giá trị đã phân bổ được hoàn lại; phiếu mới chỉ có sau khi tính/lập thành công.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Không dừng ở bước xóa phiếu cũ nếu mục đích là tính lại.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Phiếu phân bổ CCDC đã vào kỳ giá thành kết chuyển**: Cách xử lý: Theo thông báo, cần hủy phiếu kết chuyển và xóa kỳ tính giá thành liên quan theo phương án được duyệt trước xóa phiếu.
- **Không xóa được phiếu cũ khi Tính lại**: Cách xử lý: Hộp tính mới chưa được mở; kiểm tra phiếu cũ còn trên danh sách, xử lý nguyên nhân xóa trước tính lại.
- **Đã xóa nhưng chưa có phiếu thay thế**: Cách xử lý: Tính lại không tự lập phiếu mới; mở kỳ cũ, tính và Lập phiếu sau đối chiếu.

## 10. Câu hỏi thường gặp

**Đóng hộp sau khi chọn Tính lại có giữ phiếu cũ không?** Không. Luồng tính lại xóa phiếu cũ trước khi mở hộp tính; phải kiểm tra và lập phiếu mới nếu muốn kỳ có số liệu phân bổ.

## 11. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN PHÂN BỔ CHI PHÍ CCDC](/bai-viet/2026-11-07-ts-b03-0-huong-dan-tong-quan-phan-bo-chi-phi-ccdc/)** — Tổng quan Phân bổ chi phí CCDC.

## 12. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN PHÂN BỔ CHI PHÍ CCDC](/bai-viet/2026-11-07-ts-b03-0-huong-dan-tong-quan-phan-bo-chi-phi-ccdc/)** — Tổng quan Phân bổ chi phí CCDC.
- **[HƯỚNG DẪN TÍNH VÀ LẬP PHIẾU PHÂN BỔ CCDC](/bai-viet/2026-11-07-ts-b03-1-huong-dan-tinh-va-lap-phieu-phan-bo-ccdc/)** — Tính và lập phiếu phân bổ CCDC.
