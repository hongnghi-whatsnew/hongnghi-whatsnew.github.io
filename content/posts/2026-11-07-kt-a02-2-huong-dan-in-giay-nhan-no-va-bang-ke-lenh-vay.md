---
title: "HƯỚNG DẪN IN GIẤY NHẬN NỢ VÀ BẢNG KÊ LỆNH VAY"
date: "2026-11-07"
summary: "Từ một lệnh vay, hệ thống in được hai mẫu để nộp ngân hàng khi giải ngân: - Giấy nhận nợ: thông tin lệnh vay, hợp đồng, hạn mức và số tiền vay (có dòng bằng chữ), thời hạn, lãi suất."
module: "Kế toán"
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

Từ một lệnh vay, hệ thống in được hai mẫu để nộp ngân hàng khi giải ngân:

- **Giấy nhận nợ**: thông tin lệnh vay, hợp đồng, hạn mức và số tiền vay (có dòng bằng chữ), thời hạn, lãi suất.
- **Bảng kê**: bảng kê tài liệu – danh sách các phiếu mua hàng được thanh toán bằng khoản vay.

Thao tác trong cửa sổ xem trước (in, lưu PDF, phóng to…) xem [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Lệnh vay**.
- Lệnh vay đã lưu. Để giấy nhận nợ đủ thông tin: đã chọn **Số hợp đồng** (có hạn mức). Để bảng kê có dữ liệu: lệnh vay có phiếu mua hàng.

## 2. Mở chức năng

**Kế toán → Lệnh vay → chuột phải dòng lệnh vay → In giấy nhận nợ / In bảng kê**

## 3. Nhận biết màn hình

![Hình 1: Menu chuột phải trên dòng lệnh vay](/posts/2026-11-07-kt-a02-2-huong-dan-in-giay-nhan-no-va-bang-ke-lenh-vay/hinh-01-menu-in-lenh-vay.png)

- **In giấy nhận nợ**: Ý nghĩa: Mở xem trước giấy nhận nợ
- **In bảng kê**: Ý nghĩa: Mở xem trước bảng kê tài liệu

![Hình 2: Xem trước giấy nhận nợ (trang 1/2)](/posts/2026-11-07-kt-a02-2-huong-dan-in-giay-nhan-no-va-bang-ke-lenh-vay/hinh-02-xem-truoc-giay-nhan-no.png)

- **In**: Ý nghĩa: In bản đang xem
- **Xuất**: Ý nghĩa: Lưu file (PDF…)
- **Đóng**: Ý nghĩa: Đóng cửa sổ xem trước

Giấy nhận nợ dài 2 trang; chuyển trang ở ô **Trang … của 2** trên thanh công cụ.

![Hình 3: Xem trước bảng kê](/posts/2026-11-07-kt-a02-2-huong-dan-in-giay-nhan-no-va-bang-ke-lenh-vay/hinh-03-xem-truoc-bang-ke.png)

- **Tiêu đề BẢNG KÊ TÀI LIỆU CHỨNG MINH MỤC ĐÍCH SỬ DỤNG VỐN VAY**: Ý nghĩa: Kèm số hợp đồng và dòng **Theo Bảng kê giấy nhận nợ số: [mã lệnh vay] ngày …**
- **Bảng phiếu mua hàng**: Ý nghĩa: Mỗi phiếu mua hàng của lệnh vay một dòng, dòng **Tổng cộng** cuối bảng

## 4. Trình tự công việc

```text
Lệnh vay → chuột phải dòng
   ├── In giấy nhận nợ ──► xem trước ──► In / Lưu file (GEN-06)
   └── In bảng kê ──► xem trước ──► In / Lưu file (GEN-06)
```

### Bước 1 – Chọn lệnh vay

Vào **Kế toán → Lệnh vay**, chọn khoảng ngày chứa lệnh vay, tìm dòng cần in.

### Bước 2 – Mở bản in

Chuột phải vào dòng → **In giấy nhận nợ**  hoặc **In bảng kê**  (Hình 1). Cửa sổ xem trước mở ra (Hình 2, Hình 3).

### Bước 3 – In hoặc lưu file

Bấm **In**  để in, **Xuất**  để lưu PDF ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)). Bấm **Đóng**  khi xong.

## 6. Giải thích các thông tin trên màn hình

- **Thông tin công ty**: Lấy từ: Chi nhánh đang làm việc
- **Mã lệnh, ngày vay, số GNN, số tiền vay, thời hạn (kèm đơn vị ngày/tháng/năm), ngày đến hạn, lãi suất, ghi chú**: Lấy từ: Lệnh vay
- **Số tiền vay bằng chữ**: Lấy từ: Tự đổi từ số tiền vay
- **Số hợp đồng, hạn mức, hạn mức bằng chữ**: Lấy từ: Hợp đồng gắn với lệnh vay
- **Danh sách phiếu (bảng kê)**: Lấy từ: Bảng phiếu mua hàng của lệnh vay: ngày, mã phiếu, mã số thuế, NCC, tổng tiền

**Bố cục giấy nhận nợ** (Hình 2): tiêu đề **GIẤY NHẬN NỢ**, **Số: [mã lệnh vay]**; dòng **Kèm theo: Hợp đồng Cấp tín dụng số … và Hợp đồng cho vay theo hạn mức số …**; thông tin bên vay (**Chúng tôi là**, **Mã CIF**, **Địa chỉ trụ sở chính**, **Điện thoại**, **Fax**, **Người đại diện**, **Chức vụ**, **Giấy ủy quyền**); đoạn cam kết nhận nợ với ngân hàng; các dòng **Số tiền vay theo Hợp đồng cho vay** (hạn mức, kèm bằng chữ), **Số tiền đã nhận nợ/Dư nợ đến thời điểm hiện tại**, **Số tiền nhận nợ lần này** (số tiền vay, kèm bằng chữ); **Phương thức giải ngân vốn cho vay** (đánh dấu **Bằng chuyển tiền vào tài khoản**); **Mục đích sử dụng vốn vay** (*Thanh toán tiền theo bảng kê*); **Thời hạn cho vay**, **Ngày giải ngân vốn cho vay**, **Ngày đến hạn**; các dòng lãi suất; **Kỳ hạn trả nợ** (trang 2).

**Bố cục bảng kê** (Hình 3): tên, địa chỉ công ty; *TP.HCM, ngày … tháng … năm …*; tiêu đề; dòng kèm theo hợp đồng và số giấy nhận nợ; bảng cột **TT**, **Tài liệu số**, **Ngày**, **Số tiền hóa đơn**, **Số tiền nhận nợ**, **Loại hàng hóa dịch vụ**, **Tên đơn vị hưởng**, **Mã số thuế**, dòng **Tổng cộng**; đoạn cam đoan; ô ký **Người đại diện**.

## 7. Kiểm tra sau khi thực hiện

Có bản in giấy nhận nợ / bảng kê của lệnh vay để ký và nộp ngân hàng. In không làm thay đổi dữ liệu.

## 8. Những điều cần lưu ý

⚠️ Lệnh vay **không gắn hợp đồng** thì phần hạn mức trên giấy nhận nợ bị trống / sai. Nên chọn **Số hợp đồng** trước khi in.

⚠️ Sửa lệnh vay sau khi in thì phải in lại.

⚠️ **Đọc kỹ giấy nhận nợ trước khi ký.** Đoạn cam kết in sẵn tên một ngân hàng cố định của mẫu (không lấy theo hợp đồng); dòng **Số tiền đã nhận nợ/Dư nợ đến thời điểm hiện tại** và ô lãi suất trong hạn để trống. Đối chiếu với ngân hàng, bổ sung tay hoặc nhờ IT sửa mẫu.

⚠️ Bảng kê ghi cột **Tài liệu số** là *DEBIT NOTE* và in **Mã số thuế** = 0 khi nhà cung cấp chưa khai mã số thuế. Kiểm tra trước khi nộp ngân hàng.

### Bảng kê không có dòng nào 

Nguyên nhân: lệnh vay chưa chọn phiếu mua hàng.
Cách xử lý: sửa lệnh vay, bấm **TỪ PHIẾU MUA HÀNG** ([HƯỚNG DẪN LẬP LỆNH VAY](/bai-viet/2026-11-07-kt-a02-1-huong-dan-lap-lenh-vay/)).

### Cửa sổ xem trước trắng / báo lỗi (Lỗi hệ thống)

Nguyên nhân: không tải được mẫu in hoặc dữ liệu thiếu.
Cách xử lý: đóng và mở lại; vẫn lỗi thì xem [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/), [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/) và liên hệ quản trị hệ thống.

## 10. Câu hỏi thường gặp

**In được nhiều lệnh vay một lần không?**
Không. Mỗi lần in một lệnh vay.

**Sửa được nội dung mẫu in không?**
Người có quyền quản lý mẫu in sửa được trong cửa sổ xem trước ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)).

## 11. Công việc tiếp theo

**Tiếp theo:** đính kèm bản scan hồ sơ vay vào lệnh vay (chuột phải → **File đính kèm**, [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH LỆNH VAY](/bai-viet/2026-11-07-kt-a02-0-tong-quan-man-hinh-lenh-vay/) – Tổng quan màn hình Lệnh vay
- [HƯỚNG DẪN LẬP LỆNH VAY](/bai-viet/2026-11-07-kt-a02-1-huong-dan-lap-lenh-vay/) – Hướng dẫn lập lệnh vay
- [TỔNG QUAN MÀN HÌNH HỢP ĐỒNG](/bai-viet/2026-11-07-kt-a08-0-tong-quan-man-hinh-hop-dong/) – Tổng quan màn hình Hợp đồng
