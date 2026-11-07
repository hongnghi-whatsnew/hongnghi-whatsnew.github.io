---
title: "HƯỚNG DẪN BACKFILL VÀ HOÀN TÁC SỔ CÁI KHO"
date: "2026-11-07"
summary: "Bổ sung dòng sổ kho còn thiếu theo phạm vi ngày rồi tính lại giá vốn; theo dõi và hoàn tác từng đợt khi cần."
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

Bổ sung dòng sổ kho còn thiếu theo phạm vi ngày rồi tính lại giá vốn; theo dõi và hoàn tác từng đợt khi cần.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; kiểm tra đúng hệ thống của đơn vị trước thao tác.

## 2. Mở chức năng

**Giá thành → Tính giá xuất kho**

## 3. Nhận biết màn hình

![Giao diện danh sách trước thao tác — Gia Phúc/dev, 25/10/2026; chưa thực hiện tính, gán, xóa hoặc kết chuyển trong ảnh.](/posts/2026-11-07-gt-a01-5-huong-dan-backfill-va-hoan-tac-so-cai-kho/hinh-01-danh-sach-truoc-thao-tac.png)

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: Các nút tác nghiệp được mô tả tại phần “Thực hiện trên phần mềm”..

Chưa có ảnh xác minh; danh sách cảnh chụp ở cuối bài. Thao tác tìm/lọc danh sách chung xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); không suy từ nút hiển thị thành quyền đã được cấp.

## 4. Trình tự công việc

Xác định phiếu thiếu dòng sổ kho → Chọn khoảng ngày → Thực hiện bổ sung → Đọc số dòng chèn → Đối chiếu sổ kho và phiếu nguồn

## 5. Thực hiện trên phần mềm

1. Xác định phiếu đã có trong hệ thống nhưng thiếu dòng sổ cái kho. Chọn **Chọn nhanh tháng** (mặc định tháng hiện tại) hoặc nhập **Từ ngày**, **Đến ngày**; không để Từ ngày sau Đến ngày.
2. Thực hiện backfill và đọc số dòng chèn. Nếu báo không có phiếu thiếu, kiểm tra ba khả năng: đã có dòng sổ cái, thuộc kỳ khóa sổ hoặc ngoài khoảng ngày chọn; không cần chạy lại nguyên phạm vi ngay.
3. Chọn đúng đợt ở **Các đợt backfill gần đây (1 năm)**; mở chi tiết mã hàng, thời gian, loại phiếu, nguồn để đối chiếu những dòng thực sự được thêm. Danh sách một năm này không lấy khoảng ngày nhập phía trên làm bộ lọc lịch sử.
4. Đối chiếu giá vốn sau tính lại của các mã bị tác động. Backfill có thể làm thay đổi chuỗi giá vốn, không chỉ thêm dòng hiển thị.
5. Nếu cần hoàn tác, chọn **Hoàn tác** trên đúng đợt. Với đợt có dòng, hộp xác nhận nêu số dòng sẽ xóa và tính lại giá vốn; với đợt 0 dòng, chỉ hỏi xóa bản ghi đợt. Sau xác nhận, đối chiếu sổ kho và giá vốn lại.

## 6. Giải thích các thông tin trên màn hình

- **Chọn nhanh tháng**: Cách nhập / cách đọc và quy tắc: Bộ chọn 12 tháng gần nhất; mặc định tháng hiện tại. Chọn tháng đặt khoảng từ đầu đến cuối tháng để bổ sung dòng sổ cái thiếu.
- **Từ ngày**: Cách nhập / cách đọc và quy tắc: Đầu vào ngày bắt đầu kiểm tra phiếu thiếu dòng sổ cái; không được sau Đến ngày.
- **Đến ngày**: Cách nhập / cách đọc và quy tắc: Đầu vào ngày cuối phạm vi bổ sung; phải có cùng Từ ngày trước Thực hiện.
- **Các đợt backfill gần đây (1 năm)**: Cách nhập / cách đọc và quy tắc: Danh sách đọc lại các đợt có thời gian chạy trong một năm gần nhất; độc lập khoảng ngày đang chọn để chạy backfill.
- **Khoảng ngày**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; khoảng chứng từ mà đợt đã kiểm tra/bổ sung, dùng phân biệt các đợt chạy cùng ngày.
- **Chạy lúc**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; thời điểm tạo đợt backfill, không phải ngày chứng từ được chèn sổ.
- **Số dòng chèn**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; số dòng sổ cái thực sự thêm trong đợt. 0 có thể do không thiếu dòng, đã có dòng hoặc thuộc kỳ khóa; không có nghĩa toàn bộ phiếu bị lỗi.
- **Người thực hiện**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; người chạy đợt để đối chiếu yêu cầu bổ sung sổ kho.
- **Trạng thái**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; trạng thái đợt backfill trả về. Phải kiểm tra thêm Số dòng chèn và chi tiết trước hoàn tác.
- **Thời gian**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trong chi tiết; thời gian nghiệp vụ của dòng sổ cái đã chèn, dùng truy chứng từ gốc.
- **Mã hàng**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; mã vật tư/thành phẩm của dòng được bổ sung vào sổ kho.
- **Tên hàng hóa**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tên tương ứng mã hàng vừa chèn, hỗ trợ kiểm tra đúng đối tượng.
- **Loại phiếu**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; loại nghiệp vụ nhập/xuất của dòng sổ cái đã bổ sung; kiểm tra chiều tăng/giảm kho theo chứng từ.
- **Nguồn**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; phân hệ/chứng từ sinh dòng sổ cái, dùng cùng Loại phiếu để truy nguyên dòng đã chèn.

## 7. Kiểm tra sau khi thực hiện

Chỉ bổ sung các dòng thiếu trong phạm vi xử lý; thao tác hoàn tác xóa dòng đã chèn của đợt và tính lại giá vốn.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Luồng bỏ qua kỳ đã khóa hoặc dòng đã có. Không dùng backfill để thay thế sửa chứng từ gốc sai.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Từ ngày phải nhỏ hơn hoặc bằng Đến ngày.**: hai mốc đang ngược thứ tự. Sửa lại khoảng ngày hoặc chọn nhanh đúng tháng rồi kiểm tra trước Thực hiện.
- **Không có phiếu nào thiếu dòng sổ cái trong khoảng đã chọn (hoặc đều thuộc kỳ đã khóa sổ / đã có dòng).**: không có dòng đủ điều kiện chèn thêm. Đối chiếu ngày phiếu, trạng thái khóa và dòng sổ cái đã tồn tại; đây có thể là kết quả hợp lệ 0 dòng.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN TÍNH GIÁ XUẤT KHO](/bai-viet/2026-11-07-gt-a01-0-huong-dan-tong-quan-tinh-gia-xuat-kho/)** — Tổng quan Tính giá xuất kho.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN TÍNH GIÁ XUẤT KHO](/bai-viet/2026-11-07-gt-a01-0-huong-dan-tong-quan-tinh-gia-xuat-kho/)** — Tổng quan Tính giá xuất kho.
- **[HƯỚNG DẪN TÍNH LẠI GIÁ VỐN BÌNH QUÂN TỨC THỜI](/bai-viet/2026-11-07-gt-a01-1-huong-dan-tinh-lai-gia-von-binh-quan-tuc-thoi/)** — Tính lại giá vốn bình quân tức thời.
- **[HƯỚNG DẪN IMPORT GIÁ VỐN TỪ EXCEL](/bai-viet/2026-11-07-gt-a01-2-huong-dan-import-gia-von-tu-excel/)** — Import giá vốn từ Excel.
- **[HƯỚNG DẪN IMPORT GIÁ THÀNH TỪ EXCEL](/bai-viet/2026-11-07-gt-a01-3-huong-dan-import-gia-thanh-tu-excel/)** — Import giá thành từ Excel.
- **[HƯỚNG DẪN TÍNH VÀ PHÂN BỔ GIÁ VỐN GIA CÔNG NGOÀI](/bai-viet/2026-11-07-gt-a01-4-huong-dan-tinh-va-phan-bo-gia-von-gia-cong-ngoai/)** — Tính và phân bổ giá vốn gia công ngoài.
- **[HƯỚNG DẪN XÓA VÀ HOÀN TÁC ĐỢT TÍNH GIÁ](/bai-viet/2026-11-07-gt-a01-6-huong-dan-xoa-va-hoan-tac-dot-tinh-gia/)** — Xóa và hoàn tác đợt tính giá.
