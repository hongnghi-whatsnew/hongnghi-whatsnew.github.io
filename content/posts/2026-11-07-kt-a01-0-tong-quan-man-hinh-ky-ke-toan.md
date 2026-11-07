---
title: "TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN"
date: "2026-11-07"
summary: "Màn hình Kỳ kế toán quản lý các kỳ kế toán theo tháng của chi nhánh đang làm việc: tạo kỳ, sửa, xoá, khóa kỳ (khóa sổ) và mở lại kỳ."
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

Màn hình **Kỳ kế toán** quản lý các kỳ kế toán theo **tháng** của chi nhánh đang làm việc: tạo kỳ, sửa, xoá, **khóa kỳ** (khóa sổ) và **mở lại kỳ**.

Kỳ kế toán có hai tác dụng trên toàn hệ thống:

- **Chặn sửa sổ sách:** khi một kỳ đã khóa, các luồng có kiểm tra khóa sổ sẽ chặn lập, sửa, xoá chứng từ theo ngày kiểm tra của từng chức năng (phiếu thu, phiếu chi, phiếu cấn trừ, lệnh vay, chuyển tiền nội bộ, hợp đồng, các phiếu nhập / xuất kho, phiếu gia công, lệnh sản xuất…).
- **Điều kiện ghi sổ:** hạch toán tự động chỉ tạo bút toán cho chứng từ có ngày thuộc một kỳ kế toán đã tạo. Ngày không có kỳ thì chứng từ chưa lên **Sổ chi tiết tài khoản**, **Bảng cân đối phát sinh** (xem [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/)).

Bạn dùng màn hình này khi:

- Đầu năm (hoặc khi bắt đầu dùng phần mềm): tạo 12 kỳ của năm.
- Cuối tháng: sau khi đối chiếu xong số liệu, **khóa kỳ** để không ai sửa chứng từ của tháng đó nữa.
- Cần điều chỉnh chứng từ của tháng đã khóa: **mở lại kỳ**, sửa xong thì khóa lại.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Kỳ kế toán**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)). Kỳ kế toán được tạo **riêng cho từng chi nhánh**.

## 2. Mở chức năng

**Kế toán → Kỳ kế toán**

## 3. Nhận biết màn hình

![Hình 1: Màn hình Kỳ kế toán](/posts/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/hinh-01-man-hinh-ky-ke-toan.png)

- **Ô Tìm kiếm kỳ kế toán...**: Chức năng: Gõ tháng/năm (ví dụ `3/2026`) để lọc bảng; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Ô chọn năm**: Chức năng: Chọn năm cần xem (mặc định năm hiện tại, chọn được 5 năm trước đến 5 năm sau); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Ô chọn trạng thái**: Chức năng: **Tất cả trạng thái** / **Đã khóa** / **Đang mở** / **Chưa mở**; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Ẩn dòng thời gian / Hiện dòng thời gian**: Chức năng: Ẩn / hiện dải dòng thời gian; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Thêm kỳ**: Chức năng: Menu **Tạo một kỳ** / **Tự động sinh nhiều kỳ**; Hướng dẫn: **[HƯỚNG DẪN TẠO, SỬA, XOÁ KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-1-huong-dan-tao-sua-xoa-ky-ke-toan/)**
- **5 thẻ thống kê**: Chức năng: **Kỳ hiện tại**, **Tổng số kỳ**, **Đã khóa**, **Đang mở**, **Chưa mở** (số kỳ và tỷ lệ %) của năm đang chọn; Hướng dẫn: phần “Nhận biết màn hình”
- **Dòng thời gian kỳ kế toán**: Chức năng: Mỗi tháng một nút tròn, màu theo trạng thái (chú thích dưới dải: **Đã khóa**, **Đang mở (hiện tại)**, **Chưa mở**). Bấm vào để xem tóm tắt và **Xem chi tiết**; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Bảng danh sách kỳ**: Chức năng: Các cột ở bảng dưới; Hướng dẫn: phần “Nhận biết màn hình”
- **Cột Thao tác**: Chức năng: Biểu tượng **Chi tiết**, **Chỉnh sửa**, **Khóa kỳ**, **Mở kỳ**, **Xóa**; Hướng dẫn: [HƯỚNG DẪN TẠO, SỬA, XOÁ KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-1-huong-dan-tao-sua-xoa-ky-ke-toan/), [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/)

**Các cột trên bảng:**

- **Kỳ kế toán**: Ý nghĩa: Tháng/năm của kỳ, ví dụ **3/2026**
- **Thời gian**: Ý nghĩa: Ngày bắt đầu – ngày kết thúc kỳ
- **Số ngày**: Ý nghĩa: Số ngày của kỳ (tính cả ngày đầu và ngày cuối)
- **Trạng thái**: Ý nghĩa: **Đã khóa** / **Đang mở** / **Chưa mở**
- **Ngày khóa**: Ý nghĩa: Thời điểm khóa kỳ gần nhất (dấu **-** nếu chưa khóa)
- **Người khóa**: Ý nghĩa: Người khóa kỳ (dấu **-** nếu chưa khóa)
- **Thao tác**: Ý nghĩa: Các biểu tượng thao tác

Bảng hiện 12 kỳ mỗi trang, đổi được thành 24 / 36. Bảng **không sắp xếp** theo cột được.

**Ý nghĩa trạng thái:**

- **Đã khóa**: Khi nào: Đã bấm **Khóa kỳ**; Chứng từ trong kỳ: Không lập / sửa / xoá được
- **Đang mở**: Khi nào: Chưa khóa, ngày bắt đầu kỳ đã tới; Chứng từ trong kỳ: Lập / sửa / xoá bình thường
- **Chưa mở**: Khi nào: Chưa khóa, ngày bắt đầu kỳ còn ở tương lai; Chứng từ trong kỳ: Lập / sửa / xoá bình thường (chỉ là cách hiển thị)

**Chưa mở** và **Đang mở** chỉ khác nhau ở cách hiển thị theo ngày hôm nay; trong hệ thống cả hai đều là kỳ **chưa khóa**.

**Biểu tượng bị mờ theo trạng thái:**

- **Chi tiết**: Bấm được khi: Luôn bấm được
- **Chỉnh sửa, Khóa kỳ, Xóa**: Bấm được khi: Kỳ chưa khóa
- **Mở kỳ**: Bấm được khi: Kỳ đã khóa

![Hình 2: Bảng kỳ kế toán năm 2026](/posts/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/hinh-02-bang-ky-ke-toan.png)

- Dòng: **1/2026** – **Đã khóa**, có **Ngày khóa**, **Người khóa**; Biểu tượng bấm được: **Chi tiết**, **Mở kỳ** (Chỉnh sửa, Khóa kỳ, Xóa mờ)
- Dòng: **2/2026** – **Đang mở**; Biểu tượng bấm được: **Chi tiết**, **Chỉnh sửa**, **Khóa kỳ**, **Xóa** (Mở kỳ mờ)
- Dòng: **11/2026**, **12/2026** – **Chưa mở** (tháng chưa tới); Biểu tượng bấm được: Như kỳ **Đang mở**

Khi năm đang chọn chưa có kỳ nào, màn hình hiện khung **Chưa có kỳ kế toán** với 2 nút **Tạo kỳ** và **Tự động sinh nhiều kỳ**.

## 4. Trình tự công việc

**Vòng đời một kỳ kế toán:**

```text
Tạo kỳ (Tạo một kỳ / Tự động sinh nhiều kỳ)        KT-A01.1
      ↓
Chưa khóa (hiển thị "Chưa mở" hoặc "Đang mở" theo ngày)
   ├── Chỉnh sửa / Xóa kỳ                            KT-A01.1
   └── Lập, sửa, xoá chứng từ trong kỳ bình thường
      ↓
Cuối tháng: đối chiếu số liệu → Khóa kỳ             KT-A01.2
      ↓
Đã khóa ── chứng từ trong kỳ bị chặn lập / sửa / xoá
      ↓
Cần điều chỉnh? ──► Mở kỳ → sửa chứng từ → Khóa kỳ lại
```

**Các chức năng trên màn hình:**

```text
Kỳ kế toán
   ├── Thêm kỳ
   │     ├── Tạo một kỳ ──► Thêm kỳ kế toán mới
   │     └── Tự động sinh nhiều kỳ ──► Tự động sinh kỳ kế toán
   ├── Chi tiết ──► Chi tiết kỳ kế toán
   ├── Chỉnh sửa ──► Chỉnh sửa kỳ kế toán (kỳ chưa khóa)
   ├── Khóa kỳ / Mở kỳ ──► hộp xác nhận
   └── Xóa ──► Xác nhận xóa (kỳ chưa khóa)
```

## 5. Thực hiện trên phần mềm

- **Xem kỳ của một năm**: Cách làm: Chọn năm ở ô; Bài hướng dẫn: Mục này
- **Lọc kỳ đã khóa / đang mở**: Cách làm: Chọn trạng thái ở ô; Bài hướng dẫn: Mục này
- **Tạo một kỳ**: Cách làm: **Thêm kỳ** → **Tạo một kỳ**; Bài hướng dẫn: [HƯỚNG DẪN TẠO, SỬA, XOÁ KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-1-huong-dan-tao-sua-xoa-ky-ke-toan/)
- **Tạo cả năm**: Cách làm: **Thêm kỳ** → **Tự động sinh nhiều kỳ**; Bài hướng dẫn: [HƯỚNG DẪN TẠO, SỬA, XOÁ KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-1-huong-dan-tao-sua-xoa-ky-ke-toan/)
- **Xem chi tiết kỳ**: Cách làm: Biểu tượng **Chi tiết**, hoặc bấm nút tháng trên dòng thời gian → **Xem chi tiết**; Bài hướng dẫn: Mục này
- **Sửa ngày của kỳ**: Cách làm: Biểu tượng **Chỉnh sửa**; Bài hướng dẫn: [HƯỚNG DẪN TẠO, SỬA, XOÁ KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-1-huong-dan-tao-sua-xoa-ky-ke-toan/)
- **Khóa kỳ**: Cách làm: Biểu tượng **Khóa kỳ** → xác nhận; Bài hướng dẫn: [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/)
- **Mở lại kỳ**: Cách làm: Biểu tượng **Mở kỳ** → xác nhận; Bài hướng dẫn: [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/)
- **Xoá kỳ**: Cách làm: Biểu tượng **Xóa** → xác nhận; Bài hướng dẫn: [HƯỚNG DẪN TẠO, SỬA, XOÁ KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-1-huong-dan-tao-sua-xoa-ky-ke-toan/)

### Xem chi tiết một kỳ

**Bước 1 –** Bấm biểu tượng **Chi tiết** ở cột **Thao tác** (hoặc bấm nút tháng trên dòng thời gian rồi bấm **Xem chi tiết**).

**Bước 2 –** Cửa sổ **Chi tiết kỳ kế toán** mở ra (Hình 3):  tháng/năm và nhãn **Đã khóa** / **Chưa khóa**;  **Thời gian**, **Ngày khóa/mở**, **Mô tả**, **Người khóa/mở**, **Ngày tạo**, **Người tạo**, **Ngày cập nhật**, **Người cập nhật**.

**Bước 3 –** Hàng nút: **Đóng**, **Khóa kỳ** / **Mở kỳ**, **Chỉnh sửa**, **Xóa kỳ**. Kỳ đã khóa thì **Chỉnh sửa** và **Xóa kỳ** bị mờ.

![Hình 3: Cửa sổ Chi tiết kỳ kế toán của kỳ đã khóa](/posts/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/hinh-03-chi-tiet-ky-ke-toan.png)

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường khi tạo / sửa kỳ: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN TẠO, SỬA, XOÁ KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-1-huong-dan-tao-sua-xoa-ky-ke-toan/)**.

Các cột trên bảng: xem phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Kỳ kế toán dùng để làm gì, ý nghĩa từng trạng thái kỳ, kỳ khóa ảnh hưởng đến chứng từ thế nào, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Kỳ đã khóa chặn các luồng chứng từ có kiểm tra khóa sổ theo ngày của từng chức năng** ở các phân hệ Kế toán, Kho hàng, Sản xuất (lập, sửa, xoá). Hệ thống báo *Sổ kế toán đã được khoá trong thời gian này.*

⚠️ **Ngày không thuộc kỳ nào thì không bị chặn**, nhưng chứng từ ngày đó **không được ghi sổ** khi chạy hạch toán tự động. Nên tạo đủ kỳ cho cả năm ngay từ đầu năm.

⚠️ **Không khóa được kỳ còn bút toán nháp chưa ghi sổ.** Xem [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/).

⚠️ Tạo/khóa kỳ trong **đúng hệ thống chi nhánh**. Trước thao tác, kiểm tra tên miền và tài khoản. Muốn xử lý kỳ của chi nhánh khác, truy cập hệ thống riêng do admin cấp ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).

⚠️ **Chưa mở** chỉ là cách hiển thị kỳ tương lai, không chặn chứng từ.

### "CẢNH BÁO – Lỗi …: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: đang lập / sửa / xoá chứng từ có ngày thuộc kỳ đã khóa (thông báo hiện ở màn chứng từ, không ở màn này).
Cách xử lý: đối chiếu ngày thực tế; nếu ngày đúng thuộc kỳ đã khóa, báo người phụ trách mở kỳ theo [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/). Không đổi ngày chỉ để vượt khóa.

### Không thấy kỳ nào dù đã tạo 

Kiểm tra: ô năm  và ô trạng thái; chi nhánh đang làm việc.
Cách xử lý: chọn đúng năm, chọn **Tất cả trạng thái**, hoặc kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).

### Biểu tượng Chỉnh sửa / Khóa kỳ / Xóa bị mờ 

Nguyên nhân: kỳ đã khóa.
Cách xử lý: **Mở kỳ** trước ([HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/)).

### Bấm Khóa kỳ / Mở kỳ báo không có quyền 

Nguyên nhân: tài khoản thiếu quyền **Khóa sổ** / **Bỏ khoá sổ**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Kỳ "Chưa mở" có lập chứng từ được không?**
Được. **Chưa mở** chỉ có nghĩa ngày bắt đầu kỳ chưa tới.

**Không tạo kỳ thì có lập chứng từ được không?**
Được, hệ thống không chặn. Nhưng chứng từ đó không lên sổ kế toán khi chạy hạch toán tự động.

**Khóa kỳ ở chi nhánh này có ảnh hưởng chi nhánh khác không?**
Không. Mỗi chi nhánh có bộ kỳ riêng.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN TẠO, SỬA, XOÁ KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-1-huong-dan-tao-sua-xoa-ky-ke-toan/) – Hướng dẫn tạo, sửa, xoá kỳ kế toán.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN TẠO, SỬA, XOÁ KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-1-huong-dan-tao-sua-xoa-ky-ke-toan/) – Hướng dẫn tạo, sửa, xoá kỳ kế toán
- [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/) – Hướng dẫn khóa và mở lại kỳ kế toán
- [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) – Tổng quan màn hình Sổ chi tiết tài khoản
- [TỔNG QUAN MÀN HÌNH BẢNG CÂN ĐỐI PHÁT SINH](/bai-viet/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/) – Tổng quan màn hình Bảng cân đối phát sinh
- [TỔNG QUAN MODULE KẾ TOÁN VÀ THỨ TỰ SỬ DỤNG](/bai-viet/2026-11-07-kt-00-tong-quan-module-ke-toan-va-thu-tu-su-dung/) – Tổng quan phân hệ Kế toán
