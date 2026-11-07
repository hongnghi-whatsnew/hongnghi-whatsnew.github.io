---
title: "TỔNG QUAN MÀN HÌNH XE"
date: "2026-11-07"
summary: "Xe là danh mục các xe giao hàng của công ty, nhận diện bằng biển số xe."
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

**Xe** là danh mục các xe giao hàng của công ty, nhận diện bằng **biển số xe**. Mỗi xe có thể gắn một **tài xế mặc định** và ghi **loại xe**. Danh mục được dùng ở:

- **Phiếu xuất kho** (sổ tay Kho hàng): ô **XE** bắt buộc chọn. Chọn xe xong, hệ thống tự điền tài xế mặc định của xe vào ô **TÀI XẾ** (bạn vẫn đổi được).
- **Phiếu xuất chuyển kho**, **Phiếu nhập chuyển kho**, **Phiếu xuất kho gia công**: có ô chọn xe.
- Hộp **Cập nhật xe và tài xế** (menu chuột phải trên Phiếu xuất kho): đổi xe, tài xế sau khi đã lập phiếu.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Xe**.
- Muốn gán tài xế mặc định: tài xế đã có và đang **Kích hoạt** trong **Tài xế** (TL-A07).

## 2. Mở chức năng

**Thiết lập danh mục → Xe**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Hình 1: XE - DANH SÁCH — chỉ xem, thông tin định danh đã che.](/posts/2026-11-07-tl-a08-0-tong-quan-man-hinh-xe/ui-20261026-tl-a08-ds-figure-01.png)

- **Tải lại**: Chức năng: Tải lại danh sách
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM XE**
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá một dòng

- **Biển số xe**: Ý nghĩa: Biển số, dùng nhận diện xe trên phiếu
- **Tài xế**: Ý nghĩa: Tên tài xế mặc định (trống nếu chưa gán)
- **Loại xe**: Ý nghĩa: Ghi tự do (ví dụ tải 5 tấn)
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Danh sách hiện cả xe **Kích hoạt** lẫn **Ngưng sử dụng**, không lọc theo chi nhánh.

## 4. Trình tự công việc

```text
Tài xế (TL-A07) ──► Xe (TL-A08): gán tài xế mặc định
                      │
                      └──► Phiếu xuất kho: chọn XE → tự điền TÀI XẾ mặc định
                           Phiếu xuất / nhập chuyển kho, xuất kho gia công
```

### Khai báo một xe

**Bước 1 –** Nhập **BIỂN SỐ XE** (ít nhất 2 ký tự, không trùng biển số đã có). Hệ thống không kiểm định dạng, nên nhập thống nhất một kiểu (ví dụ `51C-12345`).

**Bước 2 –** Chọn **TÀI XẾ** mặc định (gõ để tìm theo tên; chỉ liệt kê tài xế đang **Kích hoạt**). Bỏ trống được.

**Bước 3 –** Nhập **LOẠI XE**, **GHI CHÚ** nếu cần. Giữ tick **Kích hoạt**, rồi **Lưu lại**.

![Hình 2: THÊM XE — biểu mẫu trống, chưa lưu.](/posts/2026-11-07-tl-a08-0-tong-quan-man-hinh-xe/ui-20261026-tl-a08-form-figure-02.png)

- **BIỂN SỐ XE**: Ý nghĩa: Bắt buộc, không trùng
- **TÀI XẾ**: Ý nghĩa: Tuỳ chọn, tài xế mặc định
- **LOẠI XE, GHI CHÚ**: Ý nghĩa: Tuỳ chọn
- **Kích hoạt**: Ý nghĩa: Bỏ tick = **Ngưng sử dụng**

### Sửa, ngưng sử dụng, xoá

- **Đổi tài xế mặc định** có tác dụng khi chọn xe cho phiếu sau đó. Phiếu cũ giữ tài xế đã chọn lúc lập (muốn sửa phiếu cũ, dùng **Cập nhật xe và tài xế** trên Phiếu xuất kho).
- **Ngưng sử dụng** (bỏ tick **Kích hoạt**): xe không còn hiện trong ô chọn khi lập phiếu mới; Cách hiển thị biển số trên phiếu cũ sau khi sửa danh mục cần đối chiếu bản in trước/sau; không mặc nhiên coi biển số là bản chụp tại thời điểm lập.
- **Xóa**: chỉ được khi xe **chưa nằm trên** phiếu xuất kho, xuất / nhập chuyển kho, xuất kho gia công nào (xem phần “Những điều cần lưu ý”).

## 6. Giải thích các thông tin trên màn hình

- **Biển số xe**: Ý nghĩa: Biển số của xe; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự, **không trùng** (không phân biệt chữ hoa / thường, kể cả xe đang Ngưng sử dụng). Không có quy tắc định dạng
- **Tài xế**: Ý nghĩa: Tài xế mặc định; Bắt buộc: Không; Lưu ý: Chọn từ **Tài xế** (TL-A07). Một tài xế gán được cho nhiều xe
- **Loại xe**: Ý nghĩa: Mô tả loại xe; Bắt buộc: Không; Lưu ý: Ghi tự do
- **Ghi chú**: Ý nghĩa: Ghi chú; Bắt buộc: Không
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

## 7. Kiểm tra sau khi thực hiện

- Xe mới (Kích hoạt) chọn được ở ô **XE** của phiếu xuất kho, xuất / nhập chuyển kho, xuất kho gia công.
- Xe **Ngưng sử dụng** biến khỏi các ô chọn khi lập phiếu mới.

## 8. Những điều cần lưu ý

⚠️ **Xe đã nằm trên phiếu xuất kho, xuất / nhập chuyển kho hoặc xuất kho gia công thì không xoá được.** Chuyển sang **Ngưng sử dụng** thay vì xoá.

⚠️ Nếu tài xế mặc định của xe sau đó bị **Ngưng sử dụng**, cửa sổ **Sửa** xe vẫn hiện tên tài xế đó, nhưng ô chọn chỉ liệt kê tài xế đang Kích hoạt.

⚠️ Danh mục dùng chung cho các chi nhánh trong cùng cơ sở dữ liệu ERP.

### "Biển số xe đã tồn tại" 

Nguyên nhân: đã có xe cùng biển số (không phân biệt chữ hoa / thường), kể cả xe đang **Ngưng sử dụng**.
Cách xử lý: tìm xe cũ rồi tick lại **Kích hoạt**, hoặc nhập biển số khác.

### "Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: xe đã nằm trên phiếu.
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá.

## 10. Câu hỏi thường gặp

**Đổi tài xế của xe thì phiếu xuất kho cũ có đổi theo không?**
Không. Phiếu lưu riêng tài xế lúc lập.

## 11. Công việc tiếp theo

**Tiếp theo:** sổ tay Kho hàng – Phiếu xuất kho (chọn xe, tài xế tự điền).

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH TÀI XẾ](/bai-viet/2026-11-07-tl-a07-0-tong-quan-man-hinh-tai-xe/) – Tổng quan màn hình Tài xế
- Sổ tay Kho hàng – Phiếu xuất kho, Phiếu xuất chuyển kho, Phiếu nhập chuyển kho
