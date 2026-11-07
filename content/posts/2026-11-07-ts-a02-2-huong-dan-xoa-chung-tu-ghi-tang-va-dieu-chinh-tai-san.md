---
title: "HƯỚNG DẪN XÓA CHỨNG TỪ GHI TĂNG VÀ ĐIỀU CHỈNH TÀI SẢN"
date: "2026-11-07"
summary: "Xóa đúng chứng từ tài sản sau khi kiểm tra phát sinh liên quan và ảnh hưởng dữ liệu."
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

Xóa đúng chứng từ tài sản sau khi kiểm tra phát sinh liên quan và ảnh hưởng dữ liệu.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: xóa đúng chứng từ tài sản sau khi kiểm tra phát sinh liên quan và ảnh hưởng dữ liệu.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Chứng từ tài sản**

## 3. Nhận biết màn hình

![Giao diện danh sách trước thao tác — Gia Phúc/dev, 25/10/2026; chưa thực hiện tính, gán, xóa hoặc kết chuyển trong ảnh.](/posts/2026-11-07-ts-a02-2-huong-dan-xoa-chung-tu-ghi-tang-va-dieu-chinh-tai-san/hinh-01-danh-sach-truoc-thao-tac.png)

Màn danh sách dùng để đối chiếu dữ liệu và mở các thao tác theo hồ sơ đã chọn.

Các nút chính của chức năng: **Ghi tăng**, **Xem**, **Điều chỉnh**.

Chưa có ảnh xác minh; danh sách cảnh chụp ở cuối bài. Thao tác tìm/lọc danh sách chung xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); không suy từ nút hiển thị thành quyền đã được cấp.

## 4. Trình tự công việc

Xác định đúng loại và số phiếu → Lưu căn cứ trước xóa → Kiểm tra khấu hao/điều chỉnh liên quan → Xóa nếu đủ điều kiện → Đối chiếu hồ sơ, không mặc định hoàn số cũ

## 5. Thực hiện trên phần mềm

1. Chọn đúng tab **Phiếu ghi tăng** hoặc **Phiếu điều chỉnh**; xác định Số CT, ngày, mã tài sản hoặc Số TS/Tổng tiền rồi mở **Xem** để lưu căn cứ trước xóa.
2. Với **Phiếu ghi tăng**, hệ thống chặn xóa nếu tài sản đã có chi tiết khấu hao hoặc chi tiết điều chỉnh. Phải đối chiếu các phiếu liên quan và có phương án nghiệp vụ được duyệt trước xử lý; không xóa dây chuyền chỉ để vượt cảnh báo.
4. Sau xác nhận **Xóa**, kiểm tra kết quả theo loại phiếu: xóa ghi tăng xóa các dòng phân bổ/nguồn gốc, phiếu và đánh dấu xóa tài sản; xóa điều chỉnh chỉ loại phiếu và chi tiết, giá trị tài sản vẫn giữ như trước lúc xóa phiếu.
5. Nếu hệ thống báo không tìm thấy phiếu, tải lại danh sách và kiểm tra phiếu đã bị người khác xóa hay chưa. Nếu báo tài sản có phát sinh, giữ nguyên và chuyển đối chiếu các chứng từ được nêu ở bước 2.

## 6. Giải thích các thông tin trên màn hình

- **Số CT**: Ý nghĩa, cách nhập và quy tắc riêng: Số nhận diện của phiếu trong tab đang xem; mở đúng Phiếu ghi tăng hoặc Phiếu điều chỉnh trước đối chiếu/xóa. Đây là cột chỉ đọc.
- **Ngày ghi tăng**: Ý nghĩa, cách nhập và quy tắc riêng: Ngày ghi tăng của phiếu ở tab Phiếu ghi tăng; không phải ngày hạch toán phiếu điều chỉnh.
- **Mã tài sản**: Ý nghĩa, cách nhập và quy tắc riêng: Mã TSCĐ gắn với một phiếu ghi tăng; dùng xác định tài sản chịu tác động khi xóa phiếu.
- **Tên tài sản**: Ý nghĩa, cách nhập và quy tắc riêng: Tên TSCĐ đi cùng mã trong tab Phiếu ghi tăng; cột chỉ đọc để đối chiếu hồ sơ.
- **Loại tài sản**: Ý nghĩa, cách nhập và quy tắc riêng: Tên loại tài sản của hồ sơ gắn với phiếu ghi tăng; không chọn lại loại tại bảng chứng từ.
- **Đơn vị SD**: Ý nghĩa, cách nhập và quy tắc riêng: Đơn vị sử dụng của tài sản hiển thị ở tab Phiếu ghi tăng; đối chiếu nơi sử dụng với hồ sơ tài sản.
- **Nguyên giá**: Ý nghĩa, cách nhập và quy tắc riêng: Nguyên giá hiển thị cho tài sản ở tab Phiếu ghi tăng; số tiền chỉ đọc, mở chi tiết để đối chiếu trước xử lý.
- **Nguồn gốc**: Ý nghĩa, cách nhập và quy tắc riêng: Nguồn hình thành của phiếu ghi tăng, ví dụ Mua mới; xem chi tiết để kiểm tra các chứng từ nguồn.
- **Ngày hạch toán**: Ý nghĩa, cách nhập và quy tắc riêng: Ngày hạch toán đã ghi trên phiếu điều chỉnh; cột chỉ đọc và tách riêng ngày chứng từ.
- **Ngày chứng từ**: Ý nghĩa, cách nhập và quy tắc riêng: Ngày lập chứng từ điều chỉnh đã lưu, hiển thị dd/MM/yyyy.
- **Lý do**: Ý nghĩa, cách nhập và quy tắc riêng: Nội dung giải thích việc điều chỉnh giá trị tài sản đã nhập trên phiếu.
- **Số TS**: Ý nghĩa, cách nhập và quy tắc riêng: Số dòng tài sản trong phiếu điều chỉnh; một phiếu có thể chứa nhiều TSCĐ, cần mở Xem để thấy các mã.
- **Tổng tiền**: Ý nghĩa, cách nhập và quy tắc riêng: Tổng nguyên giá trên các dòng phiếu điều chỉnh; là tổng giá trị mới nhập, không phải tổng phần chênh lệch tăng/giảm.

## 7. Kiểm tra sau khi thực hiện

Theo luồng hiện tại, xóa ghi tăng loại phiếu cùng phân bổ/nguồn gốc và đánh dấu xóa tài sản khi chưa phát sinh KH/điều chỉnh; xóa điều chỉnh chỉ loại phiếu và chi tiết, không đổi lại giá trị tài sản.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Không dùng xóa điều chỉnh để đảo bút toán hoặc trả về giá trị cũ.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Tài sản đã phát sinh chứng từ liên quan (khấu hao/điều chỉnh)**: Cách xử lý riêng: Xác định các phiếu liên quan trước lập phương án xử lý được duyệt; không thể xóa trực tiếp phiếu ghi tăng trong trạng thái này.
- **Không tìm thấy phiếu ghi tăng/điều chỉnh**: Cách xử lý riêng: Tải lại danh sách, kiểm tra đúng tab/Số CT và khả năng phiếu đã được người khác xử lý.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN CHỨNG TỪ TÀI SẢN](/bai-viet/2026-11-07-ts-a02-0-huong-dan-tong-quan-chung-tu-tai-san/)** — Tổng quan Chứng từ tài sản.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN CHỨNG TỪ TÀI SẢN](/bai-viet/2026-11-07-ts-a02-0-huong-dan-tong-quan-chung-tu-tai-san/)** — Tổng quan Chứng từ tài sản.
- **[HƯỚNG DẪN ĐIỀU CHỈNH TÀI SẢN](/bai-viet/2026-11-07-ts-a02-1-huong-dan-dieu-chinh-tai-san/)** — Điều chỉnh tài sản.
