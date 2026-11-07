---
title: "HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU ĐẶT HÀNG TỪ EXCEL"
date: "2026-11-07"
summary: "Khi đơn đặt hàng có nhiều dòng, bạn có thể điền vào file mẫu Excel rồi nạp vào bảng YÊU CẦU SẢN XUẤT của phiếu đặt hàng thay vì nhập tay."
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

Khi đơn đặt hàng có nhiều dòng, bạn có thể điền vào **file mẫu Excel** rồi nạp vào bảng **YÊU CẦU SẢN XUẤT** của phiếu đặt hàng thay vì nhập tay. Hệ thống đối chiếu mã hàng, mã định mức (yêu cầu gia công), mã số mặt và mã kho với danh mục, rồi điền vào bảng để bạn kiểm tra trước khi lưu.

Mẫu file và quy tắc nạp nằm trong bài này. Xuất danh sách ra Excel để đối chiếu: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Đang ở cửa sổ **THÊM MỚI** hoặc **CẬP NHẬT - PHIẾU ĐẶT HÀNG** và **đã chọn khách hàng** (hai nút bị mờ khi chưa chọn khách).
- Biết đúng **mã hàng hoá**, **mã định mức**, **mã số mặt**, **mã kho** trong danh mục.

## 2. Mở chức năng

**Bán hàng → Phiếu đặt hàng → Thêm mới → chọn khách hàng → Tải file mẫu / Tải lên từ Excel**

## 3. Nhận biết màn hình

![Hình 1: Nút Tải lên từ Excel và Tải file mẫu](/posts/2026-11-07-bh-a02-2-huong-dan-nhap-chi-tiet-phieu-dat-hang-tu-excel/hinh-01-nut-tai-len-excel.png)

- **Tải file mẫu**: Ý nghĩa: Tải file `[TEMPLATE IMPORT] DAT HANG GIA CONG.xlsx`
- **Tải lên từ Excel**: Ý nghĩa: Chọn file đã điền để nạp vào bảng
- **Bảng YÊU CẦU SẢN XUẤT**: Ý nghĩa: Dòng nạp từ file; dòng lỗi có câu báo ở cột **Ghi chú**

**Các cột trong file mẫu:**

- **mahanghoa**: Nội dung: Mã hàng hoá (hàng trơn / thành phẩm); Bắt buộc: Có
- **madinhmuc**: Nội dung: Mã định mức (yêu cầu gia công); nhiều mã cách nhau bằng dấu phẩy `,` hoặc chấm phẩy `;`; Bắt buộc: Có
- **dvt**: Nội dung: Đơn vị tính. Nếu ghi đơn vị phụ của hàng, số lượng được quy đổi sang đơn vị chính; Bắt buộc: Không
- **soluong**: Nội dung: Số lượng; Bắt buộc: Có
- **masomat**: Nội dung: Mã số mặt; Bắt buộc: Có
- **masomatthanhpham**: Nội dung: Mã số mặt thành phẩm; Bắt buộc: Có
- **makhohang**: Nội dung: Mã kho chuyển về; Bắt buộc: Có
- **dongia, thanhtien**: Nội dung: Đơn giá, thành tiền; Bắt buộc: Không (không hiện trên bảng)
- **chuthich**: Nội dung: Ghi chú dòng; Bắt buộc: Không

## 4. Trình tự công việc

```text
Thêm mới → chọn khách hàng
      ↓
Tải file mẫu → điền Excel → lưu file
      ↓
Tải lên từ Excel → chọn file
      ↓
Hệ thống đối chiếu mã → bảng YÊU CẦU SẢN XUẤT được thay bằng dòng trong file
      ├── dòng hợp lệ: đủ Hàng hóa, Y/c, Số mặt, Kho chuyển về, Thành phẩm
      └── dòng lỗi: cột Ghi chú ghi lý do ──► sửa trên bảng hoặc sửa file, nạp lại
      ↓
Lưu lại (BH-A02.1 Bước 4)
```

### Bước 1 – Tải file mẫu

Trong cửa sổ phiếu đặt hàng, sau khi chọn **KHÁCH HÀNG**, bấm **Tải file mẫu**. Lưu file về máy.

### Bước 2 – Điền file

Mở file, điền mỗi dòng một yêu cầu theo bảng cột ở phần “Nhận biết màn hình”. Giữ nguyên dòng tiêu đề. Lưu file.

### Bước 3 – Nạp file

Bấm **Tải lên từ Excel**, chọn file vừa lưu. Hệ thống đọc file và **thay toàn bộ** bảng **YÊU CẦU SẢN XUẤT** bằng các dòng trong file (Hình 2). Cột **Thành phẩm** chỉ ghép khi có hàng hoá, yêu cầu và số mặt thành phẩm hợp lệ; phải kiểm tra sau nạp.

![Hình 2: Hai dòng mã TEST_HDSD không tồn tại sau khi nạp Excel, cột Ghi chú ghi lỗi; chưa lưu phiếu](/posts/2026-11-07-bh-a02-2-huong-dan-nhap-chi-tiet-phieu-dat-hang-tu-excel/hinh-02-bang-sau-khi-nap.png)

Ảnh Gia Phúc/dev ngày 05/11/2026. Khung  chỉ cột Ghi chú có lỗi mã hàng; do độ rộng cột, thông báo bị rút gọn trên ảnh. Nội dung đầy đủ đã quan sát gồm mã hàng không tồn tại/ngưng kinh doanh, định mức không tồn tại và kho không tồn tại. Không dùng các dòng này để lưu phiếu.

### Bước 4 – Kiểm tra dòng lỗi

Dòng có mã không tìm thấy sẽ có câu báo ở cột **Ghi chú**, ví dụ: *Hàng hóa mã 'X' không tồn tại hoặc đã ngưng kinh doanh | Số mặt 'Y' không tồn tại. Vui lòng kiểm tra lại.* Sửa trực tiếp trên bảng (chọn lại hàng / yêu cầu / số mặt / kho) hoặc sửa file rồi nạp lại.

### Bước 5 – Lưu phiếu

Bấm **Lưu lại** như [HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG SẢN XUẤT](/bai-viet/2026-11-07-bh-a02-1-huong-dan-lap-phieu-dat-hang-san-xuat/) Bước 4. Dòng còn thiếu thông tin sẽ bị cảnh báo theo số dòng.

## 6. Giải thích các thông tin trên màn hình

- **mahanghoa**: Quy tắc khi nạp: Khớp mã nội bộ sau khi bỏ khoảng trắng đầu/cuối, không khớp theo mã NCC.
- **madinhmuc**: Quy tắc khi nạp: Ít nhất một mã; nhiều mã phân cách bằng dấu phẩy/chấm phẩy, loại mã lặp trong cùng ô; mã sai ghi lỗi riêng.
- **dvt, soluong**: Quy tắc khi nạp: Trùng chính xác tên đơn vị phụ thì soluong nhân hệ số quy đổi; số lượng trống thành 0. Đơn vị kết quả là đơn vị chính.
- **masomat**: Quy tắc khi nạp: Khớp mã không phân biệt hoa/thường sau khi bỏ khoảng trắng; mã sai ghi lỗi.
- **masomatthanhpham**: Quy tắc khi nạp: Kiểm tra Số mặt TP và Thành phẩm sau nạp; chưa có thông báo riêng khi mã TP không nhận.
- **makhohang**: Quy tắc khi nạp: Mã kho chuyển về; khớp không phân biệt hoa/thường sau khi bỏ khoảng trắng, mã sai ghi lỗi.
- **dongia, thanhtien**: Quy tắc khi nạp: Đọc nguyên từ file; ô trống thành 0, không tự quy đổi theo số lượng. Không hiện trên bảng này.
- **chuthich**: Quy tắc khi nạp: Chỉ giữ chú thích đầu vào nếu không có lỗi danh mục; có lỗi thì bị thay bằng chuỗi lỗi.

## 7. Kiểm tra sau khi thực hiện

Bảng **YÊU CẦU SẢN XUẤT** có các dòng từ file. Phiếu **chưa** được lưu cho đến khi bấm **Lưu lại**.

## 8. Những điều cần lưu ý

⚠️ **Nạp file sẽ xoá các dòng đang có trên bảng.** Nạp file trước, sau đó mới thêm tay nếu cần.

⚠️ Câu báo lỗi nằm ở cột **Ghi chú** của dòng. Xoá câu báo trước khi lưu, nếu không nó được lưu như ghi chú.

⚠️ Điền đủ các mã bắt buộc và giữ nguyên tiêu đề. Ô trống dưới tiêu đề đúng được đọc là chuỗi rỗng; số mặt/kho trống được ghi lỗi danh mục. Nếu bỏ hoặc đổi tên cột, hệ thống có thể báo lỗi chung thay vì chỉ ra từng dòng.

⚠️ Đối chiếu riêng **Số mặt TP** và **Thành phẩm**, kể cả khi Ghi chú không báo lỗi. Nếu Số mặt TP chưa nhận hoặc Thành phẩm trống, chọn lại **Số mặt TP** trên bảng và kiểm tra tên thành phẩm trước khi lưu. Lỗi nhận mã số mặt thành phẩm chưa có thông báo riêng.

### Cột Ghi chú báo "Hàng hóa mã '…' không tồn tại hoặc đã ngưng kinh doanh" 

Nguyên nhân: mã hàng sai hoặc hàng đã ngưng.
Cách xử lý: sửa mã trong file hoặc chọn lại hàng trên bảng.

### Cột Ghi chú báo "Mã định mức không được để trống" / "Định mức "…" không tồn tại" 

Nguyên nhân: thiếu hoặc sai mã định mức.
Cách xử lý: điền đúng mã định mức (nhiều mã cách nhau bằng dấu phẩy).

### Cột Ghi chú báo "Số mặt '…' không tồn tại" / "Kho hàng '…' không tồn tại" 

Nguyên nhân: mã số mặt hoặc mã kho sai.
Cách xử lý: sửa mã theo danh mục.

### "Không có dữ liệu để import" 

Nguyên nhân: file không có dòng dữ liệu.
Cách xử lý: điền dữ liệu dưới dòng tiêu đề.

## 10. Câu hỏi thường gặp

**Một dòng có nhiều yêu cầu gia công thì ghi thế nào?**
Ghi nhiều mã định mức trong cột **madinhmuc**, cách nhau bằng dấu phẩy, ví dụ `PHU1M,CAT`.

**Đơn giá trong file dùng để làm gì?**
Được đọc nhưng không hiện trên bảng phiếu đặt hàng. Giá bán chốt ở phiếu bán hàng.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG SẢN XUẤT](/bai-viet/2026-11-07-bh-a02-1-huong-dan-lap-phieu-dat-hang-san-xuat/) – Bước 4 (Lưu lại), rồi **Kích hoạt** phiếu ([TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-0-tong-quan-man-hinh-phieu-dat-hang/)).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG SẢN XUẤT](/bai-viet/2026-11-07-bh-a02-1-huong-dan-lap-phieu-dat-hang-san-xuat/) – Hướng dẫn lập phiếu đặt hàng sản xuất
- [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU BÁN HÀNG TỪ EXCEL](/bai-viet/2026-11-07-bh-a03-3-huong-dan-nhap-chi-tiet-phieu-ban-hang-tu-excel/) – Hướng dẫn nhập chi tiết phiếu bán hàng từ Excel
