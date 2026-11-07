---
title: "TỔNG QUAN MÀN HÌNH NHÓM HÀNG HÓA"
date: "2026-11-07"
summary: "Nhóm hàng hóa là danh mục dùng để gom hàng theo nhóm quản lý, ví dụ MELAMINE, E2."
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

**Nhóm hàng hóa** là danh mục dùng để **gom hàng** theo nhóm quản lý, ví dụ *MELAMINE*, *E2*. Mỗi dòng gồm **mã** và **tên** nhóm.

Nhóm hàng hóa hiện được chọn ở **Hàng trơn** (TL-D09): ô **NHÓM HÀNG HÓA**, không bắt buộc, và có thể đổi hàng loạt bằng **Sửa nhiều** ([HƯỚNG DẪN SỬA, XOÁ NHIỀU HÀNG TRƠN CÙNG LÚC](/bai-viet/2026-11-07-tl-d09-2-huong-dan-sua-xoa-nhieu-hang-tron-cung-luc/)). Nhóm **không đi vào mã, tên hàng** và không thay đổi cách tính tồn kho hay giá.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Nhóm hàng hóa**.
- Không cần danh mục nào khác có trước.

## 2. Mở chức năng

**Hàng hoá → Nhóm hàng hóa**

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

![Hình 1: Danh sách nhóm hàng hóa theo bố cục và bộ lọc hiện tại](/posts/2026-11-07-tl-d12-0-tong-quan-man-hinh-nhom-hang-hoa/hinh-01-man-hinh-nhom-hang-hoa.png)

- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM DANH MỤC NHÓM HÀNG HÓA**; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá một dòng; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Xóa** (hiện theo quyền)
- **Mã nhóm hàng hóa**: Ý nghĩa: Mã nhóm
- **Tên nhóm hàng hóa**: Ý nghĩa: Tên nhóm, là chữ hiện ở ô chọn
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n**. Danh sách hiện cả dòng **Ngưng sử dụng**. Nhấp đúp vào một dòng mở cửa sổ chỉ xem **THÔNG TIN NHÓM HÀNG HÓA**.

![Hình 2: cửa sổ thêm nhóm hàng hóa chưa nhập và chưa lưu](/posts/2026-11-07-tl-d12-0-tong-quan-man-hinh-nhom-hang-hoa/hinh-02-form-them-nhom-hang-hoa.png)

- **MÃ NHÓM**: Ý nghĩa: Bắt buộc, không trùng
- **TÊN NHÓM**: Ý nghĩa: Bắt buộc
- **GHI CHÚ**: Ý nghĩa: Tuỳ chọn
- **Kích hoạt**: Ý nghĩa: Bỏ tick = **Ngưng sử dụng**

## 4. Trình tự công việc

```text
Nhóm hàng hóa (TL-D12)
      └──► Hàng trơn (TL-D09): ô NHÓM HÀNG HÓA (tuỳ chọn)
             └──► Sửa nhiều hàng trơn: đổi nhóm cho nhiều dòng một lần
```

### Khai báo một nhóm hàng hoá

**Bước 1 –** Nhập **MÃ NHÓM** (ít nhất 2 ký tự), ví dụ `MELAMINE`. Ô này **không chặn khoảng trắng**, nhưng nên viết liền cho thống nhất với các danh mục khác.

**Bước 2 –** Nhập **TÊN NHÓM** (ít nhất 2 ký tự), ví dụ *MELAMINE*.

**Bước 3 –** Bấm **Lưu lại**. Hệ thống kiểm tra mã chưa có (không phân biệt chữ hoa, chữ thường).

### Sửa, ngưng dùng, xoá

- **Sửa mã / tên**: đổi chữ hiện ở mọi hàng đã chọn nhóm đó (nhóm được lưu theo liên kết, không phải theo chữ).
- **Ngưng sử dụng**: bỏ tick **Kích hoạt**. Nhóm không còn hiện trong ô chọn khi lập hàng; hàng đã chọn nhóm giữ nguyên.
- **Xóa**: chỉ khi chưa hàng hoá nào chọn nhóm.

## 6. Giải thích các thông tin trên màn hình

- **Mã nhóm**: Ý nghĩa: Mã nhóm hàng; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự, không trùng (không phân biệt hoa / thường)
- **Tên nhóm**: Ý nghĩa: Tên hiển thị; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

## 7. Kiểm tra sau khi thực hiện

Nhóm mới chọn được ở ô **NHÓM HÀNG HÓA** của cửa sổ hàng trơn và ở hộp **Sửa nhiều** hàng trơn.

## 8. Những điều cần lưu ý

⚠️ Nhóm hàng hóa **không nằm trong mã, tên hàng**. Đổi hay thêm nhóm không làm đổi mã hàng.

⚠️ Khác các danh mục còn lại, danh mục này **không có quy tắc chặn trùng mã ở cơ sở dữ liệu**; việc chặn chỉ làm lúc bấm **Lưu lại** trên cửa sổ. Hai người cùng lưu một mã vào cùng lúc có thể tạo hai nhóm trùng mã.

⚠️ Nhóm đã có hàng hoá chọn thì **không xoá được**. Muốn ngưng dùng thì bỏ tick **Kích hoạt**.

⚠️ Hộp xác nhận xoá hỏi **Bạn có muốn xóa hàng hóa này?** là câu chung của các màn Hàng hoá; thực tế là xoá nhóm đang chọn.

### "Mã đã tồn tại" 

Nguyên nhân: đã có nhóm cùng mã (kể cả khác chữ hoa / thường).
Cách xử lý: đặt mã khác, hoặc dùng lại dòng đã có.

### "Lỗi xóa.: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: đã có hàng hoá chọn nhóm này.
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá, hoặc dùng **Sửa nhiều** ở hàng trơn để chuyển các hàng sang nhóm khác rồi xoá.

## 10. Câu hỏi thường gặp

**Vì sao tôi không thấy cột Nhóm hàng hóa trên danh sách hàng trơn?**
Danh sách hàng trơn không có cột này. Muốn xem nhóm của từng hàng, mở cửa sổ **Sửa** (hoặc nhấp đúp) của hàng đó.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN THÊM, SỬA HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-1-huong-dan-them-sua-hang-tron/) – Hướng dẫn thêm, sửa hàng trơn (chọn nhóm cho hàng).

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-0-tong-quan-man-hinh-hang-tron/) – Tổng quan màn hình Hàng trơn
- [HƯỚNG DẪN SỬA, XOÁ NHIỀU HÀNG TRƠN CÙNG LÚC](/bai-viet/2026-11-07-tl-d09-2-huong-dan-sua-xoa-nhieu-hang-tron-cung-luc/) – Sửa, xoá nhiều hàng trơn
