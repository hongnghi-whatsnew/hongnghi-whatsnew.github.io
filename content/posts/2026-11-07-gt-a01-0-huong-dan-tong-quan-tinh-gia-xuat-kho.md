---
title: "HƯỚNG DẪN TỔNG QUAN TÍNH GIÁ XUẤT KHO"
date: "2026-11-07"
summary: "Theo dõi các đợt tính lại giá vốn bình quân tức thời, so sánh giá cũ và mới, truy vết lịch sử thay đổi."
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

Theo dõi các đợt tính lại giá vốn bình quân tức thời, so sánh giá cũ và mới, truy vết lịch sử thay đổi.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; kiểm tra đúng hệ thống của đơn vị trước thao tác.

## 2. Mở chức năng

**Giá thành → Tính giá xuất kho**

## 3. Nhận biết màn hình

Màn danh sách dùng để đối chiếu dữ liệu và mở các thao tác theo hồ sơ đã chọn.

Các nút chính của chức năng: Các nút tác nghiệp được mô tả tại phần “Thực hiện trên phần mềm”..

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Ở Hình 1, khung  khoanh bộ điều kiện và thanh tác vụ tính giá; khung  khoanh danh sách các đợt. Ở Hình 2, khung  khoanh bảng lịch sử giá vốn; khung  khoanh thanh chuyển trang.

![Hình 1: Danh sách các đợt tính giá vốn có sẵn; không chạy tính trong đợt chụp này](/posts/2026-11-07-gt-a01-0-huong-dan-tong-quan-tinh-gia-xuat-kho/hinh-01-gt-gia-von-ds.png)

![Hình 2: Nhật ký thay đổi giá vốn có sẵn; các đơn giá và số phiếu đã che](/posts/2026-11-07-gt-a01-0-huong-dan-tong-quan-tinh-gia-xuat-kho/hinh-02-gt-lich-su.png)

## 4. Trình tự công việc

Chọn khoảng ngày → Đọc kỳ/phạm vi/trạng thái đợt tính → Xem giá cũ/giá mới → Tra lịch sử hoặc chọn bài xử lý phù hợp

## 5. Thực hiện trên phần mềm

1. Chọn khoảng ngày để xem các đợt đã xử lý. Đọc **Kỳ tính giá**, **Phạm vi**, **Số mã hàng** và **Trạng thái** trước khi mở đợt.
2. Chọn **Xem** để đối chiếu **Giá vốn cũ**, **Giá vốn mới** của từng mã. Dùng **Lịch sử giá vốn** để xem thời gian, nguồn và phiếu liên quan.
3. Chọn bài nghiệp vụ trong bảng bên dưới khi cần tính lại, import hoặc phục hồi dữ liệu sổ kho.

- **Tính lại giá vốn bình quân tức thời**: Bài hướng dẫn: [HƯỚNG DẪN TÍNH LẠI GIÁ VỐN BÌNH QUÂN TỨC THỜI](/bai-viet/2026-11-07-gt-a01-1-huong-dan-tinh-lai-gia-von-binh-quan-tuc-thoi/)
- **Import giá vốn từ Excel**: Bài hướng dẫn: [HƯỚNG DẪN IMPORT GIÁ VỐN TỪ EXCEL](/bai-viet/2026-11-07-gt-a01-2-huong-dan-import-gia-von-tu-excel/)
- **Import giá thành từ Excel**: Bài hướng dẫn: [HƯỚNG DẪN IMPORT GIÁ THÀNH TỪ EXCEL](/bai-viet/2026-11-07-gt-a01-3-huong-dan-import-gia-thanh-tu-excel/)
- **Tính và phân bổ giá vốn gia công ngoài**: Bài hướng dẫn: [HƯỚNG DẪN TÍNH VÀ PHÂN BỔ GIÁ VỐN GIA CÔNG NGOÀI](/bai-viet/2026-11-07-gt-a01-4-huong-dan-tinh-va-phan-bo-gia-von-gia-cong-ngoai/)
- **Backfill và hoàn tác sổ cái kho**: Bài hướng dẫn: [HƯỚNG DẪN BACKFILL VÀ HOÀN TÁC SỔ CÁI KHO](/bai-viet/2026-11-07-gt-a01-5-huong-dan-backfill-va-hoan-tac-so-cai-kho/)
- **Xóa và hoàn tác đợt tính giá**: Bài hướng dẫn: [HƯỚNG DẪN XÓA VÀ HOÀN TÁC ĐỢT TÍNH GIÁ](/bai-viet/2026-11-07-gt-a01-6-huong-dan-xoa-va-hoan-tac-dot-tinh-gia/)

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

Có danh sách đợt và căn cứ truy vết giá vốn theo kỳ đã lọc.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Các nút tính, import, backfill và xóa đợt có thể thay đổi dữ liệu giá vốn; không dùng như nút làm mới danh sách.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Đợt đã tạo nhưng KHÔNG có vật tư, hàng hóa nào trong phạm vi…**: không tìm được mã từ phát sinh sổ cái kho trong kỳ và hàng tồn của chi nhánh. Kiểm tra lại khoảng ngày, tập mã và nguồn sổ kho; đợt rỗng không chứng minh đã tính giá xong.
- **Chưa chọn chi nhánh.**: trang chưa có ngữ cảnh đơn vị để gửi tác vụ. Trên hệ thống chính thức, kiểm tra đúng tên miền và tài khoản riêng của đơn vị, đăng nhập lại đúng hệ thống hoặc chuyển quản trị hỗ trợ; không đổi chi nhánh trong cùng phiên.

## 10. Câu hỏi thường gặp

**Vì sao một kỳ có nhiều dòng?** Mỗi lần tính/phân bổ là một đợt riêng. Phải đối chiếu thêm Tính lúc, Phạm vi và người thực hiện trước khi mở hoặc xóa.

## 11. Công việc tiếp theo

- **[HƯỚNG DẪN TÍNH LẠI GIÁ VỐN BÌNH QUÂN TỨC THỜI](/bai-viet/2026-11-07-gt-a01-1-huong-dan-tinh-lai-gia-von-binh-quan-tuc-thoi/)** — Tính lại giá vốn bình quân tức thời.

## 12. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TÍNH LẠI GIÁ VỐN BÌNH QUÂN TỨC THỜI](/bai-viet/2026-11-07-gt-a01-1-huong-dan-tinh-lai-gia-von-binh-quan-tuc-thoi/)** — Tính lại giá vốn bình quân tức thời.
- **[HƯỚNG DẪN IMPORT GIÁ VỐN TỪ EXCEL](/bai-viet/2026-11-07-gt-a01-2-huong-dan-import-gia-von-tu-excel/)** — Import giá vốn từ Excel.
- **[HƯỚNG DẪN IMPORT GIÁ THÀNH TỪ EXCEL](/bai-viet/2026-11-07-gt-a01-3-huong-dan-import-gia-thanh-tu-excel/)** — Import giá thành từ Excel.
- **[HƯỚNG DẪN TÍNH VÀ PHÂN BỔ GIÁ VỐN GIA CÔNG NGOÀI](/bai-viet/2026-11-07-gt-a01-4-huong-dan-tinh-va-phan-bo-gia-von-gia-cong-ngoai/)** — Tính và phân bổ giá vốn gia công ngoài.
- **[HƯỚNG DẪN BACKFILL VÀ HOÀN TÁC SỔ CÁI KHO](/bai-viet/2026-11-07-gt-a01-5-huong-dan-backfill-va-hoan-tac-so-cai-kho/)** — Backfill và hoàn tác sổ cái kho.
- **[HƯỚNG DẪN XÓA VÀ HOÀN TÁC ĐỢT TÍNH GIÁ](/bai-viet/2026-11-07-gt-a01-6-huong-dan-xoa-va-hoan-tac-dot-tinh-gia/)** — Xóa và hoàn tác đợt tính giá.
