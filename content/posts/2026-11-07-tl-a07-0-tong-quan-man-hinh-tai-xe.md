---
title: "TỔNG QUAN MÀN HÌNH TÀI XẾ"
date: "2026-11-07"
summary: "Tài xế là danh mục những người lái xe giao hàng, chỉ gồm mã, tên và ghi chú."
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

**Tài xế** là danh mục những người lái xe giao hàng, chỉ gồm **mã**, **tên** và **ghi chú**. Danh mục được dùng ở:

- **Phiếu xuất kho** (sổ tay Kho hàng): ô **TÀI XẾ** bắt buộc chọn. Khi chọn **XE**, hệ thống tự điền tài xế mặc định của xe đó ([TỔNG QUAN MÀN HÌNH XE](/bai-viet/2026-11-07-tl-a08-0-tong-quan-man-hinh-xe/)).
- **Phiếu xuất chuyển kho**, **Phiếu nhập chuyển kho**, **Phiếu xuất kho gia công**: có ô chọn tài xế.
- **Xe** (TL-A08): mỗi xe có thể gắn một tài xế mặc định.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Tài xế**.
- Không cần danh mục nào khác có trước.

## 2. Mở chức năng

**Thiết lập danh mục → Tài xế**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Hình 1: TÀI XẾ - DANH SÁCH — chỉ xem, thông tin định danh đã che.](/posts/2026-11-07-tl-a07-0-tong-quan-man-hinh-tai-xe/ui-20261026-tl-a07-ds-figure-01.png)

- **Tải lại**: Chức năng: Tải lại danh sách
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM TÀI XẾ**
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá một dòng

- **Mã Tài Xế**: Ý nghĩa: Mã do người dùng đặt
- **Tên Tài Xế**: Ý nghĩa: Tên hiển thị trong ô chọn tài xế
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Danh sách hiện **cả tài xế đang Kích hoạt lẫn Ngưng sử dụng**, không lọc theo chi nhánh.

## 4. Trình tự công việc

```text
Tài xế (TL-A07)
   ├──► Xe (TL-A08): tài xế mặc định của xe
   └──► Phiếu xuất kho / xuất chuyển kho / nhập chuyển kho / xuất kho gia công
         ô TÀI XẾ chỉ liệt kê tài xế đang Kích hoạt
```

### Khai báo một tài xế

**Bước 1 –** Nhập **MÃ TÀI XẾ**: ít nhất 2 ký tự, viết liền (không có dấu cách), không trùng mã đã có. Mã **không tự sinh**, bạn tự đặt.

**Bước 2 –** Nhập **TÊN TÀI XẾ** (ít nhất 2 ký tự). **GHI CHÚ** tuỳ chọn.

**Bước 3 –** Giữ tick **Kích hoạt** ở chân cửa sổ (mặc định đã tick), rồi **Lưu lại**. Hệ thống kiểm tra trùng mã lúc bạn rời ô mã và khi lưu.

![Hình 2: THÊM TÀI XẾ — biểu mẫu trống, chưa lưu.](/posts/2026-11-07-tl-a07-0-tong-quan-man-hinh-tai-xe/ui-20261026-tl-a07-form-figure-02.png)

- **MÃ TÀI XẾ**: Ý nghĩa: Bắt buộc, không trùng
- **TÊN TÀI XẾ**: Ý nghĩa: Bắt buộc
- **GHI CHÚ**: Ý nghĩa: Tuỳ chọn
- **Kích hoạt**: Ý nghĩa: Bỏ tick = **Ngưng sử dụng**

### Sửa, ngưng sử dụng, xoá

- **Sửa** được cả **MÃ TÀI XẾ**; mã mới vẫn phải không trùng. Phiếu cũ hiện tên mới vì phiếu chỉ lưu liên kết tới tài xế.
- **Ngưng sử dụng** (bỏ tick **Kích hoạt**): tài xế không còn hiện trong ô chọn khi lập phiếu mới. Phiếu cũ vẫn hiện đúng tên.
- **Xóa**: chỉ được khi tài xế **chưa nằm trên** phiếu xuất kho, xuất / nhập chuyển kho, xuất kho gia công nào (xem phần “Những điều cần lưu ý”).

## 6. Giải thích các thông tin trên màn hình

- **Mã tài xế**: Ý nghĩa: Mã nhận diện tài xế; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự, không có dấu cách, **không trùng** (không phân biệt chữ hoa / thường, kể cả tài xế đang Ngưng sử dụng)
- **Tên tài xế**: Ý nghĩa: Tên hiển thị khi chọn tài xế trên phiếu; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

## 7. Kiểm tra sau khi thực hiện

- Tài xế mới (Kích hoạt) chọn được ở ô **TÀI XẾ** của các phiếu và của cửa sổ **Xe**.
- Tài xế **Ngưng sử dụng** biến khỏi các ô chọn khi lập phiếu mới.

## 8. Những điều cần lưu ý

⚠️ **Tài xế đã nằm trên phiếu xuất kho, xuất / nhập chuyển kho hoặc xuất kho gia công thì không xoá được.** Chuyển sang **Ngưng sử dụng** thay vì xoá.

⚠️ **Xoá tài xế đang là tài xế mặc định của một xe thì hệ thống vẫn cho xoá** (nếu chưa dùng trên phiếu). Khi đó cột **Tài xế** của xe đó trở thành trống. Kiểm tra màn **Xe** trước khi xoá.

⚠️ Danh mục dùng chung cho các chi nhánh trong cùng cơ sở dữ liệu ERP.

### "Mã tài xế đã tồn tại" 

Nguyên nhân: đã có tài xế cùng mã, kể cả tài xế đang **Ngưng sử dụng**.
Cách xử lý: đặt mã khác, hoặc tìm tài xế cũ rồi tick lại **Kích hoạt**.

### "Mã không hợp lệ. Viết liền không dấu và không chứa kí tự đặc biệt." 

Nguyên nhân: mã có dấu cách.
Cách xử lý: viết liền, ví dụ `TX01`.

### "Lỗi xóa.: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: tài xế đã nằm trên phiếu.
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá.

## 10. Câu hỏi thường gặp

**Có lưu số điện thoại tài xế không?**
Không. cửa sổ chỉ có mã, tên, ghi chú. Số điện thoại tài xế trên phiếu xuất kho là ô nhập riêng của phiếu.

## 11. Công việc tiếp theo

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH XE](/bai-viet/2026-11-07-tl-a08-0-tong-quan-man-hinh-xe/) – Tổng quan màn hình Xe (gán tài xế mặc định cho xe).

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH XE](/bai-viet/2026-11-07-tl-a08-0-tong-quan-man-hinh-xe/) – Tổng quan màn hình Xe
- Sổ tay Kho hàng – Phiếu xuất kho, Phiếu xuất chuyển kho, Phiếu nhập chuyển kho
