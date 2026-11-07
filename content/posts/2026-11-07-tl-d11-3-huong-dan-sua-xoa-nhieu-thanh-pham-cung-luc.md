---
title: "HƯỚNG DẪN SỬA, XOÁ NHIỀU THÀNH PHẨM CÙNG LÚC"
date: "2026-11-07"
summary: "Danh sách thành phẩm cho chọn nhiều dòng để: - Sửa nhiều: đổi cùng một giá trị cho tất cả dòng đã chọn, thay vì mở sửa từng dòng."
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

Danh sách **thành phẩm** cho chọn nhiều dòng để:

- **Sửa nhiều**: đổi cùng một giá trị cho tất cả dòng đã chọn, thay vì mở sửa từng dòng. Trường nào để trống thì giữ nguyên giá trị cũ của từng dòng.
- **Xóa nhiều**: xoá các dòng đã chọn trong một lần.

**Đổi Tiêu chuẩn hoặc Loại hàng thì mã và tên thành phẩm được sinh lại** theo công thức thành phẩm: định mức + số mặt + tiêu chuẩn + (dày x rộng x dài) + NCC + loại hàng. Chỉ những thành phẩm **có đủ định mức, số mặt, quy cách và NCC** mới được sinh lại mã; thành phẩm cũ thiếu định mức giữ nguyên mã để không làm rơi định mức khỏi mã.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Các thành phẩm cần sửa / xoá đã có trong danh sách.
- Giá trị muốn đổi (chọn từ danh mục) đã có trong danh mục tương ứng.

## 2. Mở chức năng

**Hàng hoá → Thành phẩm → chọn nhiều dòng → Sửa nhiều / Xóa nhiều**

## 3. Nhận biết màn hình

![Hình 1: Chọn nhiều thành phẩm – thanh Xóa nhiều / Sửa nhiều](/posts/2026-11-07-tl-d11-3-huong-dan-sua-xoa-nhieu-thanh-pham-cung-luc/hinh-01-chon-nhieu-thanh-pham.png)

- **Ô tick đầu dòng / ô tick tiêu đề cột**: Ý nghĩa: Chọn dòng. Ô tick ở tiêu đề chọn **tất cả các trang**
- **Xóa nhiều**: Ý nghĩa: Xoá các dòng đang chọn (cần quyền xoá)
- **Sửa nhiều**: Ý nghĩa: Mở hộp **SỬA NHIỀU THÀNH PHẨM** (cần quyền cập nhật)
- **Bỏ chọn tất cả**: Ý nghĩa: Bỏ chọn mọi dòng
- **N dòng đã chọn**: Ý nghĩa: Số dòng đang chọn

Các nút – chỉ hiện khi có ít nhất một dòng được chọn.

## 4. Trình tự công việc

```text
Danh sách thành phẩm → chọn các dòng (Ctrl + bấm / tick ô đầu dòng)
        ├── Sửa nhiều → chọn giá trị mới → Lưu thay đổi
        │                → "Đã cập nhật N thành phẩm"
        └── Xóa nhiều → Xác nhận xóa nhiều → Xóa
                         → "Đã xóa N thành phẩm"
```

### Bước 1 – Chọn các dòng

Ở danh sách **thành phẩm**, giữ **Ctrl** và bấm vào các dòng cần sửa / xoá, hoặc tick ô vuông đầu dòng. Thanh công cụ hiện **Xóa nhiều**, **Sửa nhiều**, **Bỏ chọn tất cả** và **N dòng đã chọn** (Hình 1).

### Bước 2 – Sửa nhiều

1. Bấm **Sửa nhiều**. Hộp **SỬA NHIỀU THÀNH PHẨM** mở ra, ghi **Áp dụng cho N thành phẩm đã chọn.** (Hình 2).
2. Chọn giá trị mới **chỉ cho trường muốn đổi**. Trường để **— Không đổi —** giữ nguyên giá trị cũ của từng dòng.
3. Bấm **Lưu thay đổi**. Hệ thống báo **Đã cập nhật N thành phẩm** và tải lại danh sách.

![Hình 2: Hộp Sửa nhiều thành phẩm](/posts/2026-11-07-tl-d11-3-huong-dan-sua-xoa-nhieu-thanh-pham-cung-luc/hinh-02-sua-nhieu-thanh-pham.png)

Nếu bấm **Lưu thay đổi** mà chưa đổi trường nào, hệ thống báo **Vui lòng chọn ít nhất một trường để cập nhật** và không lưu gì.

### Bước 3 – Xóa nhiều

1. Chọn các dòng như Bước 1 rồi bấm **Xóa nhiều**.
2. Hộp **Xác nhận xóa nhiều** hỏi **Bạn có muốn xóa N thành phẩm đã chọn?** (Hình 3). Bấm **Xóa** để xoá, hoặc **Hủy** để thôi.
3. Xoá thành công thì hệ thống báo **Đã xóa N thành phẩm**.

![Hình 3: Xác nhận xóa nhiều thành phẩm](/posts/2026-11-07-tl-d11-3-huong-dan-sua-xoa-nhieu-thanh-pham-cung-luc/hinh-03-xoa-nhieu-thanh-pham.png)

## 6. Giải thích các thông tin trên màn hình

- **Trạng thái**: Giá trị: **— Không đổi —**, **Kích hoạt**, **Ngưng sử dụng**; Lưu ý: Để **— Không đổi —** = giữ trạng thái cũ
- **Tiêu chuẩn**: Giá trị: Chọn từ danh mục tiêu chuẩn; Lưu ý: Đổi thì **sinh lại mã + tên**
- **Loại hàng**: Giá trị: Chọn từ danh mục loại hàng; Lưu ý: Đổi thì **sinh lại mã + tên**
- **ĐVT**: Giá trị: Chọn từ danh mục đơn vị tính; Lưu ý: Đơn vị tính chính
- **ĐVT 1**: Giá trị: Chọn từ danh mục đơn vị tính; Lưu ý: Đơn vị tính phụ
- **Quy đổi 1**: Giá trị: Số; Lưu ý: Số ĐVT chính trong 1 ĐVT phụ
- **Tên in**: Giá trị: Chữ; Lưu ý: Tên in trên phiếu

Mọi trường đều không bắt buộc, nhưng phải đổi ít nhất một trường.

## 7. Kiểm tra sau khi thực hiện

- **Sửa nhiều**: các dòng đã chọn mang giá trị mới; trường để trống giữ nguyên.
- **Xóa nhiều**: các dòng đã chọn bị xoá khỏi danh sách.

## 8. Những điều cần lưu ý

**Trước khi đổi ĐVT hoặc hệ số quy đổi:** đối chiếu đơn vị và số lượng trên tồn kho/chứng từ đang dùng. Sửa danh mục không phải thao tác chuyển đổi số lượng lịch sử; không suy số tồn tự được nhân/chia theo hệ số mới. Kiểm tra phạm vi các dòng đã chọn, đặc biệt lựa chọn ở tiêu đề có thể bao gồm nhiều trang.

⚠️ **Xóa nhiều không hoàn tác được.** Nếu một dòng trong nhóm đã chọn không xoá được (ví dụ đã dùng trên chứng từ), thì **cả lô không bị xoá**. Bỏ chọn dòng đó rồi xoá lại.

⚠️ Ô tick ở **tiêu đề** cột chọn là chọn **tất cả các trang** của danh sách, không chỉ trang đang xem. Xem số **N dòng đã chọn** trước khi bấm **Xóa nhiều** / **Sửa nhiều**.

⚠️ **Đổi Tiêu chuẩn / Loại hàng làm đổi mã thành phẩm.** Mã sinh lại theo danh mục **hiện tại**, nên thành phẩm có mã cũ lệch công thức (danh mục đã đổi tên) cũng sẽ đổi mã, giống khi sửa từng dòng. Nếu mã mới trùng với thành phẩm đã có thì **cả lần sửa bị từ chối**.

### "Vui lòng chọn ít nhất một trường để cập nhật" 

Nguyên nhân: bấm **Lưu thay đổi** khi mọi trường đều để **— Không đổi —**. Không có gì được gửi đi.
Cách xử lý: chọn giá trị cho ít nhất một trường.

### "Lỗi cập nhật nhiều hàng hóa: Mã hàng sau khi đổi bị trùng: …" 

Nguyên nhân: đổi Tiêu chuẩn / Loại hàng làm mã mới của một dòng trùng với hàng đã có. Cả lần sửa bị huỷ.
Cách xử lý: bỏ chọn dòng có mã ghi trong thông báo, hoặc chọn giá trị khác, rồi **Lưu thay đổi** lại.

### "Lỗi xóa nhiều hàng hóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: có dòng đang được dùng ở dữ liệu khác nên không xoá được; cả lô bị huỷ.
Cách xử lý: tìm dòng đang được dùng, bỏ chọn dòng đó rồi **Xóa nhiều** lại; hoặc chuyển dòng đó sang **Ngưng sử dụng** bằng **Sửa nhiều**.

## 10. Câu hỏi thường gặp

**Để trống một trường có xoá giá trị cũ không?**
Không. Để trống nghĩa là giữ nguyên giá trị cũ của từng dòng.

**Không thấy nút Sửa nhiều / Xóa nhiều?**
Nút chỉ hiện khi đã chọn ít nhất một dòng **và** tài khoản có quyền tương ứng (xem phần “Chuẩn bị trước khi thực hiện”).

**Muốn ngừng dùng mà không xoá thì sao?**
Dùng **Sửa nhiều**, chọn **Trạng thái** là **Ngưng sử dụng**.

## 11. Công việc tiếp theo

```text
Sửa / xoá nhiều → kiểm tra lại ở danh sách (lọc theo trường vừa đổi)
```

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN IMPORT THÀNH PHẨM TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d11-2-huong-dan-import-thanh-pham-tu-excel-anh/) – Import thành phẩm từ Excel / ảnh
- [HƯỚNG DẪN SỬA, XOÁ NHIỀU HÀNG TRƠN CÙNG LÚC](/bai-viet/2026-11-07-tl-d09-2-huong-dan-sua-xoa-nhieu-hang-tron-cung-luc/) – Sửa / xoá nhiều hàng trơn
- [HƯỚNG DẪN SỬA, XOÁ NHIỀU NGUYÊN LIỆU CÙNG LÚC](/bai-viet/2026-11-07-tl-d08-2-huong-dan-sua-xoa-nhieu-nguyen-lieu-cung-luc/) – Sửa / xoá nhiều nguyên liệu
