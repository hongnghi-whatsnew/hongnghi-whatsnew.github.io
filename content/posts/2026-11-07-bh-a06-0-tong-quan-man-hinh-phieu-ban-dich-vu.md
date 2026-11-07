---
title: "TỔNG QUAN MÀN HÌNH PHIẾU BÁN DỊCH VỤ"
date: "2026-11-07"
summary: "Màn hình Phiếu bán dịch vụ (tiêu đề PHIẾU BÁN HÀNG, DỊCH VỤ - DANH SÁCH) ghi nhận các khoản thu của khách không phải hàng trong kho, ví dụ PHÍ VẬN CHUYỂN, BẢO HIỂM, PHUY RỖNG… (mặt hàng loại khác trong danh mục hàng hoá)."
module: "Bán hàng"
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

Màn hình **Phiếu bán dịch vụ** (tiêu đề **PHIẾU BÁN HÀNG, DỊCH VỤ - DANH SÁCH**) ghi nhận các khoản thu của khách **không phải hàng trong kho**, ví dụ **PHÍ VẬN CHUYỂN**, **BẢO HIỂM**, **PHUY RỖNG**… (mặt hàng loại *khác* trong danh mục hàng hoá).

Màn hình dùng chung giao diện với **Phiếu bán hàng** ([TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/)) nhưng khác ở 3 điểm:

- **Không có kho, không xuất kho**: phiếu không giữ tồn, không qua thủ kho.
- **Ghi công nợ khách ngay khi lưu**: công nợ tăng bằng **Tổng tiền**; sửa phiếu thì công nợ tính lại, xoá phiếu thì công nợ trừ lại.
- **Không duyệt giá**: danh sách không có các cột duyệt giá và các liên kết **Gửi YC** / **Xem duyệt**.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có các quyền ở phần “Chuẩn bị trước khi thực hiện”.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Tài khoản được phân **nhóm khách hàng**: như phiếu bán hàng, danh sách chỉ hiện phiếu của khách thuộc nhóm được phân (trừ tài khoản quản trị).

## 2. Mở chức năng

**Bán hàng → Phiếu bán dịch vụ**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU BÁN HÀNG, DỊCH VỤ - DANH SÁCH](/posts/2026-11-07-bh-a06-0-tong-quan-man-hinh-phieu-ban-dich-vu/hinh-01-man-hinh-phieu-ban-dich-vu.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày bán hàng**. Mặc định **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Lập phiếu bán dịch vụ; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-1-huong-dan-lap-phieu-ban-dich-vu/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thao tác: Sửa / Xóa**: Chức năng: Cập nhật / xoá phiếu (không có **Gửi YC** như phiếu bán hàng); Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-1-huong-dan-lap-phieu-ban-dich-vu/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày bán hàng**: Ý nghĩa: Ngày trên phiếu
- **Mã phiếu**: Ý nghĩa: Mã phiếu, hệ thống tự tạo – cùng tiền tố **BH…** với phiếu bán hàng
- **Tên khách hàng**: Ý nghĩa: Khách mua dịch vụ
- **Tổng tiền**: Ý nghĩa: Tổng thành tiền (sau chiết khấu, cộng VAT) – cũng là số công nợ ghi cho khách
- **Kho Xuất**: Ý nghĩa: Luôn trống (phiếu dịch vụ không có kho)
- **Số hợp đồng**: Ý nghĩa: Hợp đồng còn hạn của khách (BH-A01)
- **Trạng thái xuất**: Ý nghĩa: Luôn **Chưa xuất** (phiếu dịch vụ không xuất kho)
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu
- **Tên rút gọn**: Ý nghĩa: Tên rút gọn của khách
- **Mã khách hàng**: Ý nghĩa: Ẩn mặc định, bật bằng **Trình chọn cột**
- **File đính kèm**: Ý nghĩa: **Số lượng file: n** hoặc **Không có file đính kèm**
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Thứ tự cột trên màn hình: **STT**, **Thao tác**, **Ngày bán hàng**, **Mã phiếu**, **Tên khách hàng**, **Tổng tiền**, **Kho Xuất**…; các cột sau nằm bên phải, kéo thanh cuộn ngang để xem. Dòng cuối bảng hiện **TỔNG CỘNG: n** và tổng **Tổng tiền**.

**Menu chuột phải trên một dòng phiếu:** giống màn Phiếu bán hàng – **Xem lại**, **File đính kèm**, 5 mẫu **In phiếu - …**, **In phiếu - Soạn Hàng**, **In Bảng Báo Giá**, **In Bảng Báo Giá Có Số Lượng**. Cách in xem [HƯỚNG DẪN IN PHIẾU BÁN HÀNG VÀ BẢNG BÁO GIÁ](/bai-viet/2026-11-07-bh-a03-6-huong-dan-in-phieu-ban-hang-va-bang-bao-gia/). Nhấp đúp vào dòng mở cửa sổ **PHIẾU BÁN HÀNG, DỊCH VỤ - XEM LẠI**.

## 4. Trình tự công việc

```text
Phiếu bán dịch vụ → Thêm mới → chọn khách, dịch vụ, đơn giá (BH-A06.1)
      ↓
Lưu lại ──► công nợ khách tăng = Tổng tiền (ngay khi lưu)
      ↓
(Tuỳ chọn) In phiếu gửi khách (BH-A03.6)
      ↓
(Kế toán) Phiếu thu của khách → công nợ giảm
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm phiếu**: Cách làm: Gõ mã phiếu hoặc tên khách vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập phiếu bán dịch vụ**: Cách làm: **Thêm mới**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-1-huong-dan-lap-phieu-ban-dich-vu/)
- **Xem chi tiết phiếu**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa phiếu**: Cách làm: **Sửa** → **PHIẾU BÁN HÀNG, DỊCH VỤ - CẬP NHẬT**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-1-huong-dan-lap-phieu-ban-dich-vu/)
- **In phiếu**: Cách làm: Chuột phải → **In phiếu - …**; Bài hướng dẫn: [HƯỚNG DẪN IN PHIẾU BÁN HÀNG VÀ BẢNG BÁO GIÁ](/bai-viet/2026-11-07-bh-a03-6-huong-dan-in-phieu-ban-hang-va-bang-bao-gia/)
- **Đính kèm hoá đơn, chứng từ**: Cách làm: Chuột phải → **File đính kèm**; Bài hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **Xoá phiếu**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này ?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ phiếu bán dịch vụ: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-1-huong-dan-lap-phieu-ban-dich-vu/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Phiếu bán dịch vụ dùng để làm gì, khác phiếu bán hàng ở đâu, và công nợ khách thay đổi lúc nào.

## 8. Những điều cần lưu ý

⚠️ **Lưu phiếu là ghi công nợ ngay.** Không lập phiếu nháp / báo giá trên màn này – công nợ khách tăng ngay khi bấm **Lưu lại**.

⚠️ Phiếu bán dịch vụ không có bước xuất kho hay duyệt giá trong luồng thông thường; **Sửa / Xóa** vẫn cần quyền và phải qua kiểm tra trạng thái hiện tại. Việc khách đã trả tiền không tự chứng minh phiếu bị khoá. Sửa / xoá sẽ làm công nợ khách thay đổi theo – cần báo kế toán.

⚠️ Phiếu bán dịch vụ không có trên các thống kê tính theo phiếu xuất kho (Xuất bán chi tiết, Tần suất mua hàng, Doanh số bảng giá) và **không** tính vào doanh số KPI lương. Xem riêng ở thống kê **Bán dịch vụ** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-b04-0-tong-quan-man-hinh-thong-ke-ban-dich-vu/)).

⚠️ **Chỉ người tạo phiếu** (hoặc quản trị) mới xoá được phiếu.

### "CẢNH BÁO – Lỗi xóa: Bạn chỉ được xóa phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### Thấy menu nhưng mở ra báo không có quyền, hoặc không thấy nút Thêm mới 

Nguyên nhân: menu gắn quyền **Phiếu bán dịch vụ**, còn màn hình và các nút kiểm tra quyền **Phiếu bán hàng**.
Cách xử lý: nhờ quản trị cấp đủ quyền **Phiếu bán hàng** tương ứng (xem phần “Chuẩn bị trước khi thực hiện”).

### Không thấy phiếu vừa lập 

Kiểm tra: khoảng ngày lọc có chứa **Ngày bán hàng**; chi nhánh đang làm việc; **nhóm khách hàng** được phân cho tài khoản.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)), kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)) hoặc nhờ quản trị phân nhóm khách hàng.

## 10. Câu hỏi thường gặp

**Bán hàng kèm phí vận chuyển thì lập phiếu nào?**
Hàng hoá lập **Phiếu bán hàng** ([HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/)). Phí vận chuyển tính riêng cho khách thì lập **Phiếu bán dịch vụ**.

**Phiếu bán dịch vụ có cần duyệt giá không?**
Không. Danh sách không có các bước gửi / duyệt giá.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-1-huong-dan-lap-phieu-ban-dich-vu/) – Hướng dẫn lập phiếu bán dịch vụ.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-1-huong-dan-lap-phieu-ban-dich-vu/) – Hướng dẫn lập phiếu bán dịch vụ
- [TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/) – Tổng quan màn hình Phiếu bán hàng
- [HƯỚNG DẪN IN PHIẾU BÁN HÀNG VÀ BẢNG BÁO GIÁ](/bai-viet/2026-11-07-bh-a03-6-huong-dan-in-phieu-ban-hang-va-bang-bao-gia/) – Hướng dẫn in phiếu bán hàng và bảng báo giá
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-b04-0-tong-quan-man-hinh-thong-ke-ban-dich-vu/) – Tổng quan màn hình Bán dịch vụ (thống kê)
- Sổ tay Kế toán – Phiếu thu, Thống kê công nợ khách hàng
