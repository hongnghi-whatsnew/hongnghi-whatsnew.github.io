---
title: "HƯỚNG DẪN XÓA VÀ HOÀN TÁC ĐỢT TÍNH GIÁ"
date: "2026-11-07"
summary: "Hủy đúng đợt tính giá đã kiểm tra và đối chiếu phần giá vốn được trả lại."
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

Hủy đúng đợt tính giá đã kiểm tra và đối chiếu phần giá vốn được trả lại.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Có yêu cầu hủy đúng đợt và căn cứ giá cũ/mới từng mã. Xác định loại đợt trước xóa; Gia công ngoài cần kiểm tra khóa sổ và đợt mới hơn chồng khoảng ngày. Ghi nhận phát sinh sau thời điểm chạy để đối chiếu khả năng phục hồi giá.

hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; kiểm tra đúng hệ thống của đơn vị trước thao tác.

## 2. Mở chức năng

**Giá thành → Tính giá xuất kho**

## 3. Nhận biết màn hình

![Giao diện danh sách trước thao tác — Gia Phúc/dev, 25/10/2026; chưa thực hiện tính, gán, xóa hoặc kết chuyển trong ảnh.](/posts/2026-11-07-gt-a01-6-huong-dan-xoa-va-hoan-tac-dot-tinh-gia/hinh-01-danh-sach-truoc-thao-tac.png)

Màn danh sách dùng để đối chiếu dữ liệu và mở các thao tác theo hồ sơ đã chọn.

Các nút chính của chức năng: Các nút tác nghiệp được mô tả tại phần “Thực hiện trên phần mềm”..

Chưa có ảnh xác minh; danh sách cảnh chụp ở cuối bài. Thao tác tìm/lọc danh sách chung xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); không suy từ nút hiển thị thành quyền đã được cấp.

## 4. Trình tự công việc

Xác định đợt cần hủy → Xem giá cũ/giá mới và loại đợt → Kiểm tra phát sinh sau đó → Hủy theo điều kiện → Đối chiếu giá và sổ liên quan

## 5. Thực hiện trên phần mềm

1. Xác định đợt qua **Kỳ tính giá**, **Tính lúc**, **Phạm vi**, **Số mã hàng** và **Người thực hiện**. Nhấp dòng mở chi tiết, lưu căn cứ giá cũ/giá mới của các mã cần đối chiếu.
2. Phân biệt đợt thông thường với đợt **Gia công ngoài**. Với Gia công ngoài, kiểm tra khóa sổ và các đợt Gia công ngoài mới hơn có khoảng ngày chồng lấn; phải xử lý đợt mới hơn trước.
3. Bấm **Xóa** đúng dòng; đọc **Xác nhận xóa đợt tính giá**, đối chiếu lại kỳ trước khi xác nhận. Hủy hộp nếu chưa xác định đúng đợt.
4. Sau xử lý, kiểm tra đợt đã được loại khỏi danh sách và mở **Lịch sử giá vốn** để đối chiếu dòng hoàn tác. Với Gia công ngoài, đối chiếu thêm giá nhập sổ cái và giá vốn phiếu gia công do đợt tác động.
5. Nếu có phát sinh sổ cái mới sau phân bổ Gia công ngoài, giá vốn danh mục có thể giữ kết quả tính lại chuỗi thay vì được trả nguyên giá cũ. Chuyển sai lệch cho kế toán đối chiếu; không xóa tiếp các đợt khác để ép giá về một con số.

## 6. Giải thích các thông tin trên màn hình

- **STT**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; số thứ tự dòng trong danh sách hiện tại, không phải mã đợt để tra cứu hoặc hoàn tác.
- **Kỳ tính giá**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; khoảng từ ngày đến ngày đã gửi khi tạo đợt. Dùng cùng thời điểm và phạm vi để phân biệt các lần xử lý cùng kỳ.
- **Tính lúc**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; thời điểm thực hiện đợt, khác khoảng ngày nghiệp vụ của kỳ.
- **Phạm vi**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; loại/phạm vi xử lý của đợt. Phân biệt tính tất cả, các mã được chọn và Gia công ngoài trước khi xem hoặc xóa.
- **Số mã hàng**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; số mã hàng thuộc đợt, không phải số chứng từ hay tổng số lượng tồn.
- **Người thực hiện**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; người tạo/thực hiện đợt, dùng truy vết cùng Tính lúc.
- **Trạng thái**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tình trạng xử lý trả về từ hệ thống. Nhãn Hoàn thành được tô xanh; cần kiểm tra chi tiết và số mã hàng, không suy từ màu thành đã duyệt kế toán.
- **Thời gian**: Cách nhập / cách đọc và quy tắc: Trong Lịch sử giá vốn: thời điểm ghi thay đổi giá; dùng ghép giá trước/sau theo từng lần thay đổi.
- **Tên hàng hoá**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tên mã hàng trong chi tiết đợt hoặc nhật ký. Khi nhiều mã tên giống nhau, đối chiếu thêm Mã hàng ở chi tiết đợt.
- **Giá vốn cũ**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; đơn giá vốn trước lần cập nhật được lưu để so sánh/hoàn tác, không phải giá bán.
- **Giá vốn mới**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; đơn giá vốn sau lần xử lý; đối chiếu cùng một mã hàng và đúng nguồn nhật ký với Giá vốn cũ.
- **Nguồn**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trong lịch sử; loại tác vụ gây thay đổi giá vốn, ví dụ HOAN_TAC. Giúp phân biệt thay đổi do tính giá với thay đổi do hủy đợt.
- **Phiếu**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trong lịch sử; mã định danh phiếu/đợt nguồn của thay đổi giá, cần đọc cùng Nguồn; không mặc định là số chứng từ in trên phiếu.

## 7. Kiểm tra sau khi thực hiện

Đây là hành vi dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Không coi xóa đợt là chỉ dọn nhật ký. Riêng gia công ngoài có kiểm tra thứ tự đợt và điều kiện phát sinh sau thời điểm tính.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Còn đợt tính giá vốn gia công ngoài MỚI HƠN cùng kỳ…**: có đợt Gia công ngoài mới hơn với khoảng ngày chồng lấn. Đối chiếu và hủy đúng đợt mới hơn trước.
- **Bị chặn do khóa sổ khi xóa Gia công ngoài**: khoảng từ/đến của đợt thuộc phạm vi kiểm tra khóa sổ. Dừng và chuyển người phụ trách kỳ, không đổi ngày đợt để vượt điều kiện.

## 10. Câu hỏi thường gặp

**Xóa đợt có trả toàn bộ giá về đúng như trước không?** Phải phân biệt loại đợt. Gia công ngoài tính lại chuỗi sau phục hồi giá sổ/phiếu; có phát sinh mới thì giá danh mục có thể khác giá cũ. Cần đối chiếu trước/sau theo từng mã.

## 11. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN TÍNH GIÁ XUẤT KHO](/bai-viet/2026-11-07-gt-a01-0-huong-dan-tong-quan-tinh-gia-xuat-kho/)** — Tổng quan Tính giá xuất kho.

## 12. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN TÍNH GIÁ XUẤT KHO](/bai-viet/2026-11-07-gt-a01-0-huong-dan-tong-quan-tinh-gia-xuat-kho/)** — Tổng quan Tính giá xuất kho.
- **[HƯỚNG DẪN TÍNH LẠI GIÁ VỐN BÌNH QUÂN TỨC THỜI](/bai-viet/2026-11-07-gt-a01-1-huong-dan-tinh-lai-gia-von-binh-quan-tuc-thoi/)** — Tính lại giá vốn bình quân tức thời.
- **[HƯỚNG DẪN IMPORT GIÁ VỐN TỪ EXCEL](/bai-viet/2026-11-07-gt-a01-2-huong-dan-import-gia-von-tu-excel/)** — Import giá vốn từ Excel.
- **[HƯỚNG DẪN IMPORT GIÁ THÀNH TỪ EXCEL](/bai-viet/2026-11-07-gt-a01-3-huong-dan-import-gia-thanh-tu-excel/)** — Import giá thành từ Excel.
- **[HƯỚNG DẪN TÍNH VÀ PHÂN BỔ GIÁ VỐN GIA CÔNG NGOÀI](/bai-viet/2026-11-07-gt-a01-4-huong-dan-tinh-va-phan-bo-gia-von-gia-cong-ngoai/)** — Tính và phân bổ giá vốn gia công ngoài.
- **[HƯỚNG DẪN BACKFILL VÀ HOÀN TÁC SỔ CÁI KHO](/bai-viet/2026-11-07-gt-a01-5-huong-dan-backfill-va-hoan-tac-so-cai-kho/)** — Backfill và hoàn tác sổ cái kho.
