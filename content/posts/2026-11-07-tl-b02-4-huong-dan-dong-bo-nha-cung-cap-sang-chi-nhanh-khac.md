---
title: "HƯỚNG DẪN ĐỒNG BỘ NHÀ CUNG CẤP SANG CHI NHÁNH KHÁC"
date: "2026-11-07"
summary: "Nút Đồng bộ trên danh sách nhà cung cấp cho phép tạo nhà cung cấp một lần ở HN rồi đưa sang chi nhánh khác, thay vì nhập tay ở cả 3 nơi: - Cách 1 – Đẩy thẳng (chỉ làm ở HN): chọn chi nhánh nhận rồi bấm Đẩy."
module: "Thiết lập danh mục"
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

Nút **Đồng bộ** trên danh sách **nhà cung cấp** cho phép **tạo nhà cung cấp một lần ở HN** rồi đưa sang chi nhánh khác, thay vì nhập tay ở cả 3 nơi:

- **Cách 1 – Đẩy thẳng** (chỉ làm ở HN): chọn chi nhánh nhận rồi bấm **Đẩy**.
- **Cách 2 – Qua file**: ở HN bấm **Xuất file**; ở chi nhánh nhận **Chọn file để nhập**, **Xem trước** rồi **Áp dụng**.

Hệ thống **khớp nhà cung cấp theo mã nhà cung cấp**, gói tự kèm **nhóm nhà cung cấp** mà các nhà cung cấp đó đang dùng. Dữ liệu chỉ đi một chiều HN → GP / HG và **không đồng bộ việc xoá**.

Cách dùng hộp đồng bộ giống hệt bài **[HƯỚNG DẪN ĐỒNG BỘ KHÁCH HÀNG SANG CHI NHÁNH KHÁC](/bai-viet/2026-11-07-tl-c03-3-huong-dan-dong-bo-khach-hang-sang-chi-nhanh-khac/) – Đồng bộ khách hàng sang chi nhánh khác**. Bài này chỉ nêu phần riêng của nhà cung cấp.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Truy cập tên miền nguồn bằng tài khoản nguồn; người nhận mở tên miền đích bằng tài khoản riêng của hệ thống đó. Mỗi hệ thống có dữ liệu và tài khoản độc lập; đồng bộ không phải chuyển chi nhánh trong phiên.
- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- **Mã nhà cung cấp thống nhất giữa các chi nhánh**: cùng một mã phải là cùng một nhà cung cấp.
- Muốn đẩy thẳng: IT đã khai báo các chi nhánh nhận trong cổng tích hợp.

## 2. Mở chức năng

**Nhà cung cấp → Nhà cung cấp → Đồng bộ**

## 3. Nhận biết màn hình

![Hình 1: Nút Đồng bộ trên danh sách nhà cung cấp](/posts/2026-11-07-tl-b02-4-huong-dan-dong-bo-nha-cung-cap-sang-chi-nhanh-khac/hinh-01-nut-dong-bo.png)

Bấm **Đồng bộ** (Hình 1,), hộp **ĐỒNG BỘ NHÀ CUNG CẤP SANG CHI NHÁNH KHÁC** mở ra (Hình 2):

![Hình 2: Hộp đồng bộ nhà cung cấp ở chi nhánh nhận](/posts/2026-11-07-tl-b02-4-huong-dan-dong-bo-nha-cung-cap-sang-chi-nhanh-khac/hinh-02-hop-dong-bo.png)

- **Dữ liệu (cho đẩy và xuất file)**: Ý nghĩa: **Tất cả nhà cung cấp** hoặc **Các dòng đang chọn / đang lọc trên lưới**
- **Khi chi nhánh nhận đã có cùng mã**: Ý nghĩa: **Bỏ qua, chỉ thêm mã chưa có** hoặc **Ghi đè theo dữ liệu gửi đi**
- **2. Qua file (khi không đẩy thẳng được)**: Ý nghĩa: **Xuất file** và **Chọn file để nhập**

Ở HN, phía trên khung  có thêm khung **1. Đẩy thẳng sang chi nhánh** (phần “Thực hiện trên phần mềm”, Bước 3 của [HƯỚNG DẪN ĐỒNG BỘ KHÁCH HÀNG SANG CHI NHÁNH KHÁC](/bai-viet/2026-11-07-tl-c03-3-huong-dan-dong-bo-khach-hang-sang-chi-nhanh-khac/)).

## 4. Trình tự công việc

```text
Ở HN: Danh sách nhà cung cấp → (chọn / lọc dòng) → Đồng bộ
   ├── Cách 1 – Đẩy thẳng: tick GP / HG → Đẩy → Xác nhận đẩy
   └── Cách 2 – Qua file:   Xuất file (.json) → gửi file cho chi nhánh nhận
Ở GP / HG: Danh sách nhà cung cấp → Đồng bộ → Chọn file để nhập
           → Xem trước → Áp dụng → Đồng ý → "Đã nhập gói đồng bộ"
```

### Bước 1 – Chọn dữ liệu và cách xử lý trùng mã (ở HN)

Làm như Bước 1 và Bước 2 của [HƯỚNG DẪN ĐỒNG BỘ KHÁCH HÀNG SANG CHI NHÁNH KHÁC](/bai-viet/2026-11-07-tl-c03-3-huong-dan-dong-bo-khach-hang-sang-chi-nhanh-khac/): tick / lọc các nhà cung cấp cần gửi (hoặc gửi tất cả), rồi chọn **Bỏ qua, chỉ thêm mã chưa có** hoặc **Ghi đè theo dữ liệu gửi đi**.

### Bước 2 – Đẩy thẳng hoặc xuất file (ở HN)

- **Đẩy thẳng**: làm như Bước 3 của [HƯỚNG DẪN ĐỒNG BỘ KHÁCH HÀNG SANG CHI NHÁNH KHÁC](/bai-viet/2026-11-07-tl-c03-3-huong-dan-dong-bo-khach-hang-sang-chi-nhanh-khac/).
- **Xuất file**: bấm **Xuất file**. Trình duyệt tải về file `dongbo_nhacungcap_<mã chi nhánh>_<năm tháng ngày>_<giờ phút>.json`. Gửi file cho chi nhánh nhận, **không sửa nội dung file**.

### Bước 3 – Nhập file ở chi nhánh nhận

1. Ở danh sách nhà cung cấp của chi nhánh nhận, bấm **Đồng bộ**, chọn cách xử lý trùng mã.
2. Bấm **Chọn file để nhập**, chọn file nhận từ HN. Tên file hiện bên cạnh (Hình 3,).
3. Bấm **Xem trước** . Bảng **Xem trước (chưa ghi gì)** cho biết số nhà cung cấp, nhóm nhà cung cấp sẽ **Thêm mới / Cập nhật / Bỏ qua** . Chưa có gì được ghi.

![Hình 3: Xem trước gói nhà cung cấp – 1 nhà cung cấp sẽ được thêm mới](/posts/2026-11-07-tl-b02-4-huong-dan-dong-bo-nha-cung-cap-sang-chi-nhanh-khac/hinh-03-xem-truoc-ncc.png)

4. Bấm **Áp dụng**, hộp **Xác nhận nhập** hỏi **Áp gói <tên file> vào chi nhánh này?**, bấm **Đồng ý**. Hệ thống báo **Đã nhập gói đồng bộ**.
5. Bấm **Đóng**. Danh sách nhà cung cấp tự tải lại.

## 6. Giải thích các thông tin trên màn hình

Các lựa chọn trong hộp và ý nghĩa cột **Thêm mới / Cập nhật / Bỏ qua**: xem phần “Giải thích các thông tin trên màn hình” của [HƯỚNG DẪN ĐỒNG BỘ KHÁCH HÀNG SANG CHI NHÁNH KHÁC](/bai-viet/2026-11-07-tl-c03-3-huong-dan-dong-bo-khach-hang-sang-chi-nhanh-khac/).

Gói nhà cung cấp gồm:

- **Nhóm nhà cung cấp**: Nội dung: Các nhóm mà nhà cung cấp trong gói đang dùng
- **Nhà cung cấp**: Nội dung: Mã, tên, tên rút gọn, mã số thuế, địa chỉ, điện thoại, email, người đại diện, số tài khoản / chủ tài khoản / ngân hàng chính, số ngày nợ, trạng thái, ghi chú, mã liên kết MISA…; nhóm ghi bằng **mã**

## 7. Kiểm tra sau khi thực hiện

- Chi nhánh nhận có thêm nhà cung cấp và nhóm nhà cung cấp mới theo đúng mã của HN.
- Nhà cung cấp mới nhận **chi nhánh của nơi nhập**, người tạo là người bấm **Áp dụng** (nhập file) hoặc người IT cấu hình HN trong cổng tích hợp (đẩy thẳng).
- Khi ghi đè: thông tin đổi theo HN; **chi nhánh, người tạo, ngày tạo giữ nguyên**.

## 8. Những điều cần lưu ý

⚠️ **Ghi đè làm mất các chỉnh sửa riêng ở chi nhánh nhận.** Luôn **Xem trước** trước khi **Áp dụng**.

⚠️ **Khớp theo mã.** Một mã mà ở hai chi nhánh là hai nhà cung cấp khác nhau thì ghi đè sẽ ghi sai.

⚠️ **Áp dụng không hoàn tác được. Không đồng bộ xoá.** Dòng lỗi không chặn các dòng khác.

⚠️ Gói chỉ có số tài khoản, chủ tài khoản, ngân hàng ở thông tin chính của nhà cung cấp. **Danh sách tài khoản ngân hàng khai thêm** của nhà cung cấp **không** nằm trong gói, phải nhập riêng ở từng chi nhánh.

### "Không có nhóm nhà cung cấp …" (Lỗi dữ liệu)

Nguyên nhân: nhà cung cấp gắn nhóm không có trong gói và chưa có ở chi nhánh nhận.
Cách xử lý: ở HN gắn lại nhóm đúng rồi xuất lại; hoặc tạo nhóm cùng mã ở chi nhánh nhận rồi nhập lại.

Các lỗi chung (file sai, chưa chọn chi nhánh nhận, gửi hỏng): xem phần “Vướng mắc thường gặp” của [HƯỚNG DẪN ĐỒNG BỘ KHÁCH HÀNG SANG CHI NHÁNH KHÁC](/bai-viet/2026-11-07-tl-c03-3-huong-dan-dong-bo-khach-hang-sang-chi-nhanh-khac/).

## 10. Câu hỏi thường gặp

**File xuất ở trang Nhà cung cấp có chứa khách hàng không?**
Không. Đồng bộ khách hàng làm ở trang Khách hàng ([HƯỚNG DẪN ĐỒNG BỘ KHÁCH HÀNG SANG CHI NHÁNH KHÁC](/bai-viet/2026-11-07-tl-c03-3-huong-dan-dong-bo-khach-hang-sang-chi-nhanh-khac/)).

**Sao ở GP / HG không thấy khung Đẩy thẳng?**
Chỉ HN được đẩy. GP / HG chỉ nhận, hoặc nhập file.

## 11. Công việc tiếp theo

```text
Đồng bộ nhà cung cấp → kiểm tra ở danh sách nhà cung cấp của chi nhánh nhận
```

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN ĐỒNG BỘ KHÁCH HÀNG SANG CHI NHÁNH KHÁC](/bai-viet/2026-11-07-tl-c03-3-huong-dan-dong-bo-khach-hang-sang-chi-nhanh-khac/) – Đồng bộ khách hàng sang chi nhánh khác
- [HƯỚNG DẪN IMPORT NHÀ CUNG CẤP TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-b02-2-huong-dan-import-nha-cung-cap-tu-excel-anh/) – Import nhà cung cấp từ Excel / ảnh
- [HƯỚNG DẪN SỬA, XOÁ NHIỀU NHÀ CUNG CẤP CÙNG LÚC](/bai-viet/2026-11-07-tl-b02-3-huong-dan-sua-xoa-nhieu-nha-cung-cap-cung-luc/) – Sửa, xoá nhiều nhà cung cấp
