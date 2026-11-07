---
title: "HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU BÁN HÀNG TỪ EXCEL"
date: "2026-11-07"
summary: "Đơn bán nhiều dòng (ví dụ khách gửi danh sách hàng bằng Excel) có thể nạp vào bảng chi tiết phiếu bán hàng từ file mẫu."
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

Đơn bán nhiều dòng (ví dụ khách gửi danh sách hàng bằng Excel) có thể nạp vào bảng chi tiết phiếu bán hàng từ **file mẫu**. Hệ thống tìm hàng theo **mã hàng** (hoặc **mã hàng của NCC**), quy đổi đơn vị phụ sang đơn vị chính, rồi điền số lượng, đơn giá, chiết khấu, VAT, chú thích theo file.

Mẫu file và quy tắc nạp nằm trong bài này. Xuất danh sách ra Excel để đối chiếu: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Đang ở cửa sổ **PHIẾU BÁN HÀNG - THÊM MỚI** hoặc **- CẬP NHẬT** và **đã chọn khách hàng** (nút **Tải lên từ Excel** mờ khi chưa chọn khách).
- Biết đúng **mã hàng hoá** trong danh mục (hoặc mã hàng NCC đã khai báo).

## 2. Mở chức năng

**Bán hàng → Phiếu bán hàng → Thêm mới → chọn khách hàng → Tải file mẫu / Tải lên từ Excel**

## 3. Nhận biết màn hình

![Hình 1: Nút Tải lên từ Excel và Tải file mẫu trên phiếu bán hàng](/posts/2026-11-07-bh-a03-3-huong-dan-nhap-chi-tiet-phieu-ban-hang-tu-excel/hinh-01-nut-tai-len-excel.png)

- **Tải file mẫu**: Ý nghĩa: Tải file `[TEMPLATE IMPORT] BH.xlsx`
- **Tải lên từ Excel**: Ý nghĩa: Chọn file đã điền để nạp
- **Bảng chi tiết**: Ý nghĩa: Dòng nạp từ file; dòng sai mã có câu báo ở cột **Chú thích**

**Các cột trong file mẫu:**

- **code**: Nội dung: Mã hàng hoá (hoặc mã hàng NCC); Bắt buộc: Có
- **dvt**: Nội dung: Đơn vị tính. Nếu ghi **đơn vị phụ** của hàng, số lượng được nhân hệ số quy đổi sang đơn vị chính; Bắt buộc: Không
- **sl**: Nội dung: Số lượng; Bắt buộc: Có
- **dongia**: Nội dung: Đơn giá chưa VAT; Bắt buộc: Nên có
- **chietkhau**: Nội dung: Chiết khấu; Bắt buộc: Không
- **thuevat**: Nội dung: Thuế VAT; Bắt buộc: Không
- **chuthich**: Nội dung: Chú thích dòng; Bắt buộc: Không

## 4. Trình tự công việc

```text
Thêm mới → chọn khách hàng, kho hàng
      ↓
Tải file mẫu → điền Excel → lưu file
      ↓
Tải lên từ Excel → chọn file
      ↓
Bảng chi tiết được thay bằng dòng trong file
      ├── mã đúng: điền hàng, Đvt, số lượng (đã quy đổi), giá, CK, VAT
      └── mã sai: Hàng hóa trống, Chú thích "Hàng hoá không tồn tại…"
      ↓
Kiểm tra, sửa → Lưu lại (BH-A03.1 Bước 5)
```

### Bước 1 – Tải file mẫu

Trong cửa sổ phiếu bán hàng, bấm **Tải file mẫu**, lưu file về máy.

### Bước 2 – Điền file

Mỗi dòng một mặt hàng theo bảng cột ở phần “Nhận biết màn hình”. Giữ nguyên dòng tiêu đề và đặt sheet dữ liệu đầu tiên. Dùng ô số cho số lượng và tiền, ví dụ đơn giá `1500000`.

Với **chietkhau**, **thuevat**: nhập ô số **0.08** rồi định dạng Percentage để hiện **8%**, hoặc gõ **8%** vào ô số Excel. Không nhập số **8** hay chuỗi văn bản **"8%"**; chúng được đọc thành 8 (800%). VAT không tự mặc định 8% khi nạp.

**dvt** chỉ đổi số lượng khi trùng chính xác tên đơn vị phụ của hàng, kể cả chữ hoa/thường và khoảng trắng. Đơn giá lấy nguyên từ file: chuẩn bị giá theo đơn vị chính sau quy đổi.

### Bước 3 – Nạp file

Chọn **KHÁCH HÀNG** (và **KHO HÀNG**) trước – khi chưa chọn khách, nút **Tải lên từ Excel**  mờ (Hình 1) – rồi bấm **Tải lên từ Excel**, chọn file. Hệ thống **thay toàn bộ** bảng chi tiết bằng các dòng trong file (Hình 2).

### Bước 4 – Kiểm tra

- Dòng có ô **Hàng hóa** trống và cột **Chú thích** ghi *Hàng hoá không tồn tại. Vui lòng kiểm tra lại!*: chọn lại hàng đúng ở ô **Hàng hóa**, hoặc xoá dòng.
- Kiểm tra **Số lượng** (đã quy đổi nếu file ghi đơn vị phụ), **Đơn giá**, **Chiết khấu**, **Thuế VAT**.

### Bước 5 – Lưu

Bấm **Lưu lại** như [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/) Bước 5.

## 6. Giải thích các thông tin trên màn hình

- **code**: Quy tắc khi nạp: Khớp mã nội bộ hoặc mã NCC sau khi bỏ khoảng trắng đầu/cuối; mã trùng trong các dòng không tự gộp. Một mã NCC khớp nhiều hàng có thể làm tăng số dòng.
- **dvt**: Quy tắc khi nạp: Trùng chính xác tên đơn vị phụ thì sl nhân hệ số quy đổi; đơn vị kết quả là đơn vị chính, đơn giá không tự quy đổi.
- **sl**: Quy tắc khi nạp: Số lượng; ô trống thành 0.
- **dongia**: Quy tắc khi nạp: Đơn giá giữ nguyên từ file; ô trống thành 0, không lấy bảng giá tự động.
- **chietkhau, thuevat**: Quy tắc khi nạp: Tỷ lệ số, ví dụ 0.08 = 8%; ô trống thành 0.
- **chuthich**: Quy tắc khi nạp: Giữ chú thích nếu khớp hàng; nếu không khớp thì bị thay bằng câu báo lỗi.

## 7. Kiểm tra sau khi thực hiện

Bảng chi tiết có các dòng từ file. Phiếu **chưa** được lưu cho đến khi bấm **Lưu lại**.

## 8. Những điều cần lưu ý

⚠️ **Nạp file xoá các dòng đang có trên bảng.** Nạp file trước, thêm tay sau.

⚠️ **Dòng không tìm thấy mã hàng bị bỏ khi lưu** (không báo lỗi). Sửa hoặc xoá các dòng này trước khi lưu, kẻo phiếu thiếu hàng.

⚠️ Đơn giá trong file được dùng nguyên, **không** tự lấy theo bảng giá. Muốn lấy theo bảng giá: chuột phải vào một dòng → **Lấy giá từ bảng giá**.

⚠️ Kiểm tra Chiết khấu và Thuế VAT theo Bước 2. Mã hàng trùng trong file không tự gộp; một mã NCC khớp nhiều hàng trong danh mục có thể làm tăng số dòng. Đối chiếu số dòng và tên hàng sau nạp.

### "Không có sản phẩm" 

Nguyên nhân: không mã hàng nào trong file khớp danh mục, hoặc file không có dòng dữ liệu.
Cách xử lý: kiểm tra cột **code**, dòng tiêu đề, và mã hàng.

### Cột Chú thích ghi "Hàng hoá không tồn tại. Vui lòng kiểm tra lại!" 

Nguyên nhân: mã hàng dòng đó không có trong danh mục.
Cách xử lý: chọn lại hàng trên bảng hoặc sửa mã trong file rồi nạp lại.

### "<số dòng>. Chiết khấu trong khoảng 0 -> 100%" khi lưu 

Nguyên nhân: chiết khấu trong file bị hiểu thành số lớn hơn 100%.
Cách xử lý: sửa ô **Chiết khấu** trên bảng hoặc sửa cách ghi trong file.

## 10. Câu hỏi thường gặp

**File khách gửi dùng mã hàng của họ thì sao?**
Nếu mã đó đã khai báo là **mã hàng NCC** của mặt hàng trong danh mục, hệ thống vẫn tìm được. Nếu không, đổi sang mã hàng nội bộ.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/) – Bước 5 (Lưu lại), rồi [HƯỚNG DẪN GỬI YÊU CẦU VÀ DUYỆT GIÁ PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/) (gửi duyệt giá).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/) – Hướng dẫn lập phiếu bán hàng
- [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU ĐẶT HÀNG TỪ EXCEL](/bai-viet/2026-11-07-bh-a02-2-huong-dan-nhap-chi-tiet-phieu-dat-hang-tu-excel/) – Hướng dẫn nhập chi tiết phiếu đặt hàng từ Excel
