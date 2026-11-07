---
title: "HƯỚNG DẪN SỬA, XOÁ NHIỀU NHÀ CUNG CẤP CÙNG LÚC"
date: "2026-11-07"
summary: "Danh sách nhà cung cấp cho chọn nhiều dòng để: - Sửa nhiều: đổi cùng một giá trị cho tất cả dòng đã chọn, thay vì mở sửa từng dòng."
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

Danh sách **nhà cung cấp** cho chọn nhiều dòng để:

- **Sửa nhiều**: đổi cùng một giá trị cho tất cả dòng đã chọn, thay vì mở sửa từng dòng. Trường nào để trống thì giữ nguyên giá trị cũ của từng dòng.
- **Xóa nhiều**: xoá các dòng đã chọn trong một lần.

**Mã và tên nhà cung cấp không đổi.** Xóa nhiều xoá luôn **tài khoản ngân hàng** của các NCC đó khi cả lô thành công. Trước lưu/xóa, kiểm lại đúng hệ thống đang truy cập và số dòng đã chọn; không suy lựa chọn bị giới hạn ở trang đang nhìn.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Các nhà cung cấp cần sửa / xoá đã có trong danh sách.
- Giá trị muốn đổi (chọn từ danh mục) đã có trong danh mục tương ứng.

## 2. Mở chức năng

**Nhà cung cấp → Nhà cung cấp → chọn nhiều dòng → Sửa nhiều / Xóa nhiều**

## 3. Nhận biết màn hình

![Hình 1: Chọn nhiều nhà cung cấp – thanh Xóa nhiều / Sửa nhiều](/posts/2026-11-07-tl-b02-3-huong-dan-sua-xoa-nhieu-nha-cung-cap-cung-luc/hinh-01-chon-nhieu-ncc.png)

- **Ô tick đầu dòng / ô tick tiêu đề cột**: Ý nghĩa: Chọn dòng. Ô tick ở tiêu đề chọn **tất cả các trang**
- **Xóa nhiều**: Ý nghĩa: Xoá các dòng đang chọn (cần quyền xoá)
- **Sửa nhiều**: Ý nghĩa: Mở hộp **SỬA NHIỀU NHÀ CUNG CẤP** (cần quyền cập nhật)
- **Bỏ chọn tất cả**: Ý nghĩa: Bỏ chọn mọi dòng
- **N dòng đã chọn**: Ý nghĩa: Số dòng đang chọn

Các nút – chỉ hiện khi có ít nhất một dòng được chọn.

## 4. Trình tự công việc

```text
Danh sách nhà cung cấp → chọn các dòng (Ctrl + bấm / tick ô đầu dòng)
        ├── Sửa nhiều → chọn giá trị mới → Lưu thay đổi
        │                → "Đã cập nhật N nhà cung cấp"
        └── Xóa nhiều → Xác nhận xóa nhiều → Xóa
                         → "Đã xóa N nhà cung cấp"
```

### Bước 1 – Chọn các dòng

Ở danh sách **nhà cung cấp**, giữ **Ctrl** và bấm vào các dòng cần sửa / xoá, hoặc tick ô vuông đầu dòng. Thanh công cụ hiện **Xóa nhiều**, **Sửa nhiều**, **Bỏ chọn tất cả** và **N dòng đã chọn** (Hình 1).

### Bước 2 – Sửa nhiều

1. Bấm **Sửa nhiều**. Hộp **SỬA NHIỀU NHÀ CUNG CẤP** mở ra, ghi **Áp dụng cho N nhà cung cấp đã chọn.** (Hình 2).
2. Chọn giá trị mới **chỉ cho trường muốn đổi**. Trường để **— Không đổi —** giữ nguyên giá trị cũ của từng dòng.
3. Bấm **Lưu thay đổi**. Hệ thống báo **Đã cập nhật N nhà cung cấp** và tải lại danh sách.

![Hình 2: Hộp Sửa nhiều nhà cung cấp](/posts/2026-11-07-tl-b02-3-huong-dan-sua-xoa-nhieu-nha-cung-cap-cung-luc/hinh-02-sua-nhieu-ncc.png)

Nếu bấm **Lưu thay đổi** mà chưa đổi trường nào, hệ thống báo **Vui lòng chọn ít nhất một trường để cập nhật** và không lưu gì.

### Bước 3 – Xóa nhiều

1. Chọn các dòng như Bước 1 rồi bấm **Xóa nhiều**.
2. Hộp **Xác nhận xóa nhiều** hỏi **Bạn có muốn xóa N nhà cung cấp đã chọn?** (Hình 3). Bấm **Xóa** để xoá, hoặc **Hủy** để thôi.
3. Xoá thành công thì hệ thống báo **Đã xóa N nhà cung cấp**.

![Hình 3: Xác nhận xóa nhiều nhà cung cấp](/posts/2026-11-07-tl-b02-3-huong-dan-sua-xoa-nhieu-nha-cung-cap-cung-luc/hinh-03-xoa-nhieu-ncc.png)

## 6. Giải thích các thông tin trên màn hình

- **Trạng thái**: Giá trị: **— Không đổi —**, **Kích hoạt**, **Ngưng sử dụng**; Lưu ý: Để **— Không đổi —** = giữ trạng thái cũ
- **Nhóm nhà cung cấp**: Giá trị: Chọn từ danh mục; Lưu ý: Để trống = không đổi
- **Số ngày nợ**: Giá trị: Số ≥ 0; Lưu ý: Để trống = không đổi

Mọi trường đều không bắt buộc, nhưng phải đổi ít nhất một trường.

## 7. Kiểm tra sau khi thực hiện

- **Sửa nhiều**: các dòng đã chọn mang giá trị mới; trường để trống giữ nguyên.
- **Xóa nhiều**: các dòng đã chọn bị xoá khỏi danh sách.

## 8. Những điều cần lưu ý

⚠️ **Xóa nhiều không hoàn tác được.** Nếu một dòng trong nhóm đã chọn không xoá được (ví dụ đã dùng trên chứng từ), thì **cả lô không bị xoá**. Bỏ chọn dòng đó rồi xoá lại.

⚠️ Ô tick ở **tiêu đề** cột chọn là chọn **tất cả các trang** của danh sách, không chỉ trang đang xem. Xem số **N dòng đã chọn** trước khi bấm **Xóa nhiều** / **Sửa nhiều**.

### "Vui lòng chọn ít nhất một trường để cập nhật" 

Nguyên nhân: bấm **Lưu thay đổi** khi mọi trường đều để **— Không đổi —**. Không có gì được gửi đi.
Cách xử lý: chọn giá trị cho ít nhất một trường.

### "Lỗi xóa nhiều nhà cung cấp.: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

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

- [HƯỚNG DẪN IMPORT NHÀ CUNG CẤP TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-b02-2-huong-dan-import-nha-cung-cap-tu-excel-anh/) – Import nhà cung cấp từ Excel / ảnh
- [HƯỚNG DẪN IMPORT KHÁCH HÀNG TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-c03-2-huong-dan-import-khach-hang-tu-excel-anh/) – Import khách hàng từ Excel / ảnh
