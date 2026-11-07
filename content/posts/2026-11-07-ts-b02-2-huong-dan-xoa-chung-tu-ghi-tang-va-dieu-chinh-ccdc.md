---
title: "HƯỚNG DẪN XÓA CHỨNG TỪ GHI TĂNG VÀ ĐIỀU CHỈNH CCDC"
date: "2026-11-07"
summary: "Xóa đúng chứng từ CCDC sau khi kiểm tra phát sinh liên quan và ảnh hưởng dữ liệu."
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

Xóa đúng chứng từ CCDC sau khi kiểm tra phát sinh liên quan và ảnh hưởng dữ liệu.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: xóa đúng chứng từ CCDC sau khi kiểm tra phát sinh liên quan và ảnh hưởng dữ liệu.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Chứng từ CCDC**

## 3. Nhận biết màn hình

![Giao diện danh sách trước thao tác — Gia Phúc/dev, 25/10/2026; chưa thực hiện tính, gán, xóa hoặc kết chuyển trong ảnh.](/posts/2026-11-07-ts-b02-2-huong-dan-xoa-chung-tu-ghi-tang-va-dieu-chinh-ccdc/hinh-01-danh-sach-truoc-thao-tac.png)

Màn danh sách dùng để đối chiếu dữ liệu và mở các thao tác theo hồ sơ đã chọn.

Các nút chính của chức năng: **Ghi tăng**, **Xem**, **Điều chỉnh**.

Chưa có ảnh xác minh; danh sách cảnh chụp ở cuối bài. Thao tác tìm/lọc danh sách chung xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); không suy từ nút hiển thị thành quyền đã được cấp.

## 4. Trình tự công việc

Xác định loại/số phiếu → Lưu căn cứ trước xóa → Kiểm phiếu phân bổ liên quan → Xóa theo điều kiện → Đối chiếu số dư và giới hạn hoàn tác

## 5. Thực hiện trên phần mềm

1. Xác định loại phiếu, số CT, mã hồ sơ và giá trị; mở **Xem** và lưu căn cứ trước thao tác.
3. Với phiếu điều chỉnh, đối chiếu phương án sửa giá trị hồ sơ vì thao tác xóa không hoàn lại số đã điều chỉnh.
4. Chỉ xác nhận **Xóa** khi đúng phiếu và điều kiện xử lý. Mở lại danh sách hồ sơ, phiếu và giá trị để kiểm tra.

## 6. Giải thích các thông tin trên màn hình

- **Số CT**: Ý nghĩa, cách nhập hoặc đối chiếu: Số chứng từ của đúng tab đang xem; ghi tăng, điều chỉnh, phân bổ và ghi giảm là các loại phiếu khác nhau. Cột chỉ xem.
- **Ngày ghi tăng**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày trên phiếu ghi tăng; cột chỉ xem. Khi lập mới, bắt buộc chọn ngày, mặc định ngày hiện tại.
- **Mã CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Mã duy nhất của một hồ sơ CCDC, dùng tìm đúng công cụ và đối chiếu các chứng từ liên quan; cột chỉ xem.
- **Tên CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Tên mô tả công cụ đã ghi tăng; đọc kèm mã để phân biệt công cụ có tên giống nhau; cột chỉ xem.
- **Loại CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Tên loại đã chọn từ danh mục khi ghi tăng; dùng phân loại công cụ và gợi ý TK chờ phân bổ trên cửa sổ.
- **Nhóm CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhóm quản lý nhập bằng chữ khi khai báo CCDC; khác với danh mục Loại CCDC.
- **Số lượng**: Ý nghĩa, cách nhập hoặc đối chiếu: Số lượng công cụ ghi tăng theo ĐVT; ở danh sách là số đã lưu, không chỉnh trực tiếp tại cột.
- **Giá trị**: Ý nghĩa, cách nhập hoặc đối chiếu: Giá trị công cụ gắn với dòng phiếu ghi tăng; cột chỉ xem, dùng xác định quy mô hồ sơ bị tác động trước xóa.
- **Lý do**: Ý nghĩa, cách nhập hoặc đối chiếu: Nội dung giải thích nghiệp vụ đã nhập trên phiếu; đọc trước khi điều chỉnh hoặc xóa, không phải số tiền điều chỉnh.
- **Ngày hạch toán**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày ghi nhận nghiệp vụ điều chỉnh vào sổ; khi lập mới mặc định hôm nay và có thể chọn lại theo hồ sơ đã duyệt.
- **Ngày chứng từ**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày của chứng từ nguồn hoặc phiếu điều chỉnh; nhập/chọn đúng ngày trên hồ sơ, độc lập với ngày hạch toán.
- **Số CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Số dòng CCDC thuộc phiếu điều chỉnh; dùng đối chiếu phạm vi các công cụ chịu tác động, không phải số lượng vật lý.
- **Tổng tiền**: Ý nghĩa, cách nhập hoặc đối chiếu: Tổng giá trị các dòng điều chỉnh trên phiếu; là giá trị khai báo sau điều chỉnh, không mặc định hiểu là chênh lệch tăng/giảm.

Các cột danh sách là kết quả chỉ xem; nhập hoặc sửa tại nghiệp vụ tương ứng. Luôn xác định đúng tab trước đọc số CT và tổng tiền.

## 7. Kiểm tra sau khi thực hiện

Phiếu được xóa nếu đủ điều kiện; xóa ghi tăng có thể xóa cả hồ sơ do phiếu tạo ra.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Không dùng xóa điều chỉnh để đảo bút toán hoặc trả về giá trị cũ.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **CCDC đã phát sinh phân bổ, không thể xóa phiếu ghi tăng**: Cách xử lý: Đối chiếu các phiếu phân bổ của công cụ; chỉ xử lý hủy/xóa phát sinh theo phương án được duyệt trước quay lại xóa ghi tăng.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN CHỨNG TỪ CCDC](/bai-viet/2026-11-07-ts-b02-0-huong-dan-tong-quan-chung-tu-ccdc/)** — Tổng quan Chứng từ CCDC.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN CHỨNG TỪ CCDC](/bai-viet/2026-11-07-ts-b02-0-huong-dan-tong-quan-chung-tu-ccdc/)** — Tổng quan Chứng từ CCDC.
- **[HƯỚNG DẪN ĐIỀU CHỈNH CCDC](/bai-viet/2026-11-07-ts-b02-1-huong-dan-dieu-chinh-ccdc/)** — Điều chỉnh CCDC.
