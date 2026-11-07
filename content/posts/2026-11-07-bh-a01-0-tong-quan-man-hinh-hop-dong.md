---
title: "TỔNG QUAN MÀN HÌNH HỢP ĐỒNG"
date: "2026-11-07"
summary: "Màn hình Hợp đồng lưu các hợp đồng ký với khách hàng: loại hợp đồng, số hợp đồng, khách hàng, thời gian nợ, người đại diện hai bên, ngày ký, ngày hết hạn, tình trạng gửi / nhận hợp đồng, kèm văn bản hợp đồng soạn sẵn để in."
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

Màn hình **Hợp đồng** lưu các hợp đồng ký với khách hàng: loại hợp đồng, số hợp đồng, khách hàng, thời gian nợ, người đại diện hai bên, ngày ký, ngày hết hạn, tình trạng gửi / nhận hợp đồng, kèm **văn bản hợp đồng** soạn sẵn để in.

Hợp đồng không làm thay đổi tồn kho hay công nợ. Hệ thống dùng hợp đồng để:

- Tự hiện **SỐ HỢP ĐỒNG** trên phiếu bán hàng của khách (hợp đồng mới nhất còn hạn).
- Hiện cột **Số hợp đồng** trên danh sách phiếu bán hàng.

Bạn dùng màn hình này khi:

- Ký hợp đồng nguyên tắc / kinh tế / phụ lục với khách và cần lưu lại.
- Theo dõi hợp đồng đã gửi khách, khách đã nhận chưa.
- In văn bản hợp đồng có điền sẵn thông tin công ty và khách hàng.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Hợp đồng**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Khách hàng đã có trong danh mục.

## 2. Mở chức năng

**Bán hàng → Hợp đồng**

## 3. Nhận biết màn hình

![Hình 1: Màn hình HỢP ĐỒNG - DANH SÁCH](/posts/2026-11-07-bh-a01-0-tong-quan-man-hinh-hop-dong/hinh-01-man-hinh-hop-dong.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **ngày tạo** hợp đồng trên hệ thống (không phải ngày ký). Mặc định **Hôm nay** (nhãn *today*); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Lập hợp đồng; Hướng dẫn: [HƯỚNG DẪN LẬP HỢP ĐỒNG BÁN HÀNG](/bai-viet/2026-11-07-bh-a01-1-huong-dan-lap-hop-dong-ban-hang/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thao tác: Sửa / Sao Chép / Xóa**: Chức năng: Cập nhật / tạo hợp đồng mới từ hợp đồng này / xoá; Hướng dẫn: [HƯỚNG DẪN LẬP HỢP ĐỒNG BÁN HÀNG](/bai-viet/2026-11-07-bh-a01-1-huong-dan-lap-hop-dong-ban-hang/) / [HƯỚNG DẪN LẬP HỢP ĐỒNG BÁN HÀNG](/bai-viet/2026-11-07-bh-a01-1-huong-dan-lap-hop-dong-ban-hang/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Mã số hợp đồng**: Ý nghĩa: Số hợp đồng (người dùng nhập, không trùng)
- **Loại hợp đồng**: Ý nghĩa: Hợp đồng nguyên tắc / kinh tế / mua hàng / Phụ lục hợp đồng
- **Ngày hết hạn**: Ý nghĩa: Ngày hết hiệu lực (trống = không thời hạn)
- **Tên khách hàng, Khách hàng**: Ý nghĩa: Tên đầy đủ và tên rút gọn của khách
- **Thời gian nợ**: Ý nghĩa: Số ngày khách được nợ theo hợp đồng
- **Trạng thái**: Ý nghĩa: **Chưa gửi** / **Đã gửi** / **Đã nhận**
- **Liên hệ**: Ý nghĩa: Thông tin liên hệ
- **Nhân viên sale**: Ý nghĩa: Nhân viên kinh doanh phụ trách
- **Ghi chú**: Ý nghĩa: Ghi chú
- **File đính kèm**: Ý nghĩa: **Số lượng file: n** hoặc **Không có file đính kèm**
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n**; dưới bảng có liên kết **Tạo Bộ lọc** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Menu chuột phải trên một dòng hợp đồng:**

- **Xem lại**: Mở cửa sổ: **THÔNG TIN HỢP ĐỒNG** (chỉ xem); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **File đính kèm**: Mở cửa sổ: **FILE ĐÍNH KÈM - HỢP ĐỒNG**; Hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **In phiếu**: Mở cửa sổ: Hộp thoại in của trình duyệt với văn bản hợp đồng; Hướng dẫn: [HƯỚNG DẪN IN HỢP ĐỒNG](/bai-viet/2026-11-07-bh-a01-2-huong-dan-in-hop-dong/)

Nhấp đúp vào dòng cũng mở **THÔNG TIN HỢP ĐỒNG**. Chuột phải vào **tiêu đề cột** để mở menu sắp xếp, nhóm, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

```text
Thêm mới / Sao Chép → nhập thông tin, soạn Văn bản HĐ (BH-A01.1)
      ↓
In phiếu → gửi khách ký (BH-A01.2) → Trạng thái: Chưa gửi → Đã gửi → Đã nhận
      ↓
Phiếu bán hàng của khách tự hiện SỐ HỢP ĐỒNG (hợp đồng mới nhất còn hạn)
```

## 5. Thực hiện trên phần mềm

- **Xem hợp đồng theo khoảng ngày tạo**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm hợp đồng**: Cách làm: Gõ số hợp đồng hoặc tên khách vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập hợp đồng**: Cách làm: **Thêm mới**; Bài hướng dẫn: [HƯỚNG DẪN LẬP HỢP ĐỒNG BÁN HÀNG](/bai-viet/2026-11-07-bh-a01-1-huong-dan-lap-hop-dong-ban-hang/)
- **Lập hợp đồng tương tự hợp đồng cũ**: Cách làm: **Sao Chép**; Bài hướng dẫn: [HƯỚNG DẪN LẬP HỢP ĐỒNG BÁN HÀNG](/bai-viet/2026-11-07-bh-a01-1-huong-dan-lap-hop-dong-ban-hang/)
- **Sửa hợp đồng, cập nhật trạng thái**: Cách làm: **Sửa** → **CẬP NHẬT HỢP ĐỒNG**; Bài hướng dẫn: [HƯỚNG DẪN LẬP HỢP ĐỒNG BÁN HÀNG](/bai-viet/2026-11-07-bh-a01-1-huong-dan-lap-hop-dong-ban-hang/)
- **In văn bản hợp đồng**: Cách làm: Chuột phải → **In phiếu**; Bài hướng dẫn: [HƯỚNG DẪN IN HỢP ĐỒNG](/bai-viet/2026-11-07-bh-a01-2-huong-dan-in-hop-dong/)
- **Đính kèm bản scan hợp đồng**: Cách làm: Chuột phải → **File đính kèm**; Bài hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **Xoá hợp đồng**: Cách làm: **Xóa** → xác nhận; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một hợp đồng

**Bước 1 –** Nhấp đúp vào dòng hợp đồng (hoặc chuột phải → **Xem lại**).

**Bước 2 –** Cửa sổ **THÔNG TIN HỢP ĐỒNG** mở ra. Không có nút **Lưu lại**. Bấm **Văn bản HĐ** để xem nội dung văn bản.

**Bước 3 –** Bấm **Đóng**.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ hợp đồng: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP HỢP ĐỒNG BÁN HÀNG](/bai-viet/2026-11-07-bh-a01-1-huong-dan-lap-hop-dong-ban-hang/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Hợp đồng có những chức năng gì, hợp đồng liên quan thế nào tới phiếu bán hàng, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ Danh sách lọc theo **ngày tạo hợp đồng trên hệ thống**, không theo ngày ký. Tìm hợp đồng cũ thì mở rộng khoảng ngày.

⚠️ **Chỉ người tạo hợp đồng mới xoá được hợp đồng.**

⚠️ Phiếu bán hàng lấy **hợp đồng tạo gần nhất còn hạn** của khách. Nếu hợp đồng đó chưa ở trạng thái **Đã nhận**, số hợp đồng hiện kèm trạng thái, ví dụ *HD001 (Đã gửi)*.

### "CẢNH BÁO – Lỗi xóa: Bạn chỉ được xóa phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo hợp đồng.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### Không thấy hợp đồng vừa lập 

Kiểm tra: khoảng ngày lọc có chứa **ngày tạo** hợp đồng; chi nhánh đang làm việc.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)) hoặc kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).

### Không thấy nút Thêm mới / Sửa / Sao Chép / Xóa 

Kiểm tra: quyền tương ứng của màn hình Hợp đồng.
Cách xử lý: liên hệ quản trị hệ thống.

## 10. Câu hỏi thường gặp

**Một khách có nhiều hợp đồng thì phiếu bán hàng hiện số nào?**
Số của hợp đồng **tạo gần nhất** còn hạn (ngày hết hạn trống hoặc chưa qua).

**Hợp đồng có làm thay đổi công nợ không?**
Không. **Thời gian nợ** trên hợp đồng chỉ để lưu và in; số ngày nợ trên phiếu bán hàng lấy theo danh mục khách hàng.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP HỢP ĐỒNG BÁN HÀNG](/bai-viet/2026-11-07-bh-a01-1-huong-dan-lap-hop-dong-ban-hang/) – Hướng dẫn lập hợp đồng bán hàng.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP HỢP ĐỒNG BÁN HÀNG](/bai-viet/2026-11-07-bh-a01-1-huong-dan-lap-hop-dong-ban-hang/) – Hướng dẫn lập hợp đồng bán hàng
- [HƯỚNG DẪN IN HỢP ĐỒNG](/bai-viet/2026-11-07-bh-a01-2-huong-dan-in-hop-dong/) – Hướng dẫn in hợp đồng
- [TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/) – Tổng quan màn hình Phiếu bán hàng
