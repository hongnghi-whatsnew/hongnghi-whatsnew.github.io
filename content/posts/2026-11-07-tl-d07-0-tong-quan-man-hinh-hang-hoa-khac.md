---
title: "TỔNG QUAN MÀN HÌNH HÀNG HÓA KHÁC"
date: "2026-11-07"
summary: "Hàng hóa khác liệt kê các dòng hàng không phải hàng vật chất nhập kho, dùng để ghi một khoản tiền lên chứng từ, ví dụ PHÍ VẬN CHUYỂN, PHÍ VẬN CHUYỂN (KIỆN), BẢO HIỂM, THUẾ GTGT, TỶ GIÁ, PHUY RỖNG."
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

**Hàng hóa khác** liệt kê các dòng hàng **không phải hàng vật chất nhập kho**, dùng để ghi một khoản tiền lên chứng từ, ví dụ *PHÍ VẬN CHUYỂN*, *PHÍ VẬN CHUYỂN (KIỆN)*, *BẢO HIỂM*, *THUẾ GTGT*, *TỶ GIÁ*, *PHUY RỖNG*. Mỗi dòng gồm **mã**, **tên**, **đơn vị tính**.

Khác với nguyên liệu, hàng trơn, thành phẩm:

- **Mã và tên do người dùng đặt**, hệ thống không sinh tự động.
- Hàng hóa lưu đúng loại **khác** được mô tả là không tính tồn kho; riêng khi tick **Là hàng hóa dịch vụ**, cơ chế lưu và việc tính tồn còn cần kiểm tra (phần “Những điều cần lưu ý”).
- Có thể đánh dấu **Là hàng hóa dịch vụ** để doanh thu của dòng này được tính vào **Dịch vụ** ở báo cáo.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Hàng hóa khác**.
- **Đơn vị tính** của khoản này đã có trong danh mục (TL-D04), ví dụ *Chuyến*, *Kg*.

## 2. Mở chức năng

**Hàng hoá → Hàng hóa khác**

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

![Hình 1: Danh sách hàng hóa khác theo bố cục và bộ lọc hiện tại](/posts/2026-11-07-tl-d07-0-tong-quan-man-hinh-hang-hoa-khac/hinh-01-man-hinh-hang-hoa-khac.png)

- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM HÀNG HÓA KHÁC**; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá một dòng; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Xóa** (hiện theo quyền)
- **Mã hàng hóa**: Ý nghĩa: Mã do người dùng đặt (ví dụ `VANCHUYENK`)
- **Tên hàng hóa**: Ý nghĩa: Tên hiển thị trên chứng từ (ví dụ *PHÍ VẬN CHUYỂN*)
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Danh sách **không có cột Đơn vị tính** (đơn vị xem trong cửa sổ **Sửa** hoặc nhấp đúp) và không có dòng tổng cộng. Nhấp đúp vào một dòng mở cửa sổ chỉ xem **THÔNG TIN HÀNG HÓA KHÁC**.

![Hình 2: cửa sổ thêm hàng hóa khác chưa nhập và chưa lưu](/posts/2026-11-07-tl-d07-0-tong-quan-man-hinh-hang-hoa-khac/hinh-02-form-them-hang-hoa-khac.png)

- **MÃ**: Ý nghĩa: Bắt buộc, viết liền, không trùng với **bất kỳ hàng hoá nào**
- **TÊN**: Ý nghĩa: Bắt buộc
- **ĐƠN VỊ TÍNH**: Ý nghĩa: Bắt buộc, chọn trong danh mục đơn vị tính đang **Kích hoạt**
- **GHI CHÚ**: Ý nghĩa: Tuỳ chọn
- **PHÂN LOẠI: ô tick Là hàng hóa dịch vụ (doanh thu tính vào Dịch vụ)**: Ý nghĩa: Tick nếu khoản này là doanh thu dịch vụ
- **Kích hoạt**: Ý nghĩa: Bỏ tick = **Ngưng sử dụng**

## 4. Trình tự công việc

```text
Hàng hóa khác (TL-D07)
      ├──► Chứng từ bán / mua / kho: chọn như một dòng hàng (không tính tồn)
      └──► Tick "Là hàng hóa dịch vụ" → doanh thu tính vào Dịch vụ
```

### Khai báo một khoản hàng hoá khác

**Bước 1 –** Nhập **MÃ**: viết liền, không khoảng trắng, ví dụ `VANCHUYENK`. Mã **không được trùng với mã của nguyên liệu, hàng trơn, thành phẩm** hay hàng hoá khác nào.

**Bước 2 –** Nhập **TÊN**, ví dụ *PHÍ VẬN CHUYỂN*.

**Bước 3 –** Chọn **ĐƠN VỊ TÍNH** (ví dụ *Chuyến*). Ô chỉ liệt kê các đơn vị đang **Kích hoạt**.

**Bước 4 –** Nếu khoản này là dịch vụ bán cho khách và doanh thu cần tách ra báo cáo **Dịch vụ**, tick **Là hàng hóa dịch vụ (doanh thu tính vào Dịch vụ)**.

**Bước 5 –** Bấm **Lưu lại**. Hệ thống kiểm tra mã chưa có ở **toàn bộ danh mục hàng hoá** (không phân biệt chữ hoa, chữ thường).

### Sửa, ngưng dùng, xoá

- **Sửa**: được đổi mã, tên, đơn vị tính, dấu dịch vụ. Mã sửa phải vẫn không trùng.
- **Ngưng sử dụng**: bỏ tick **Kích hoạt**. Khoản không còn hiện trong ô chọn hàng khi lập chứng từ mới; chứng từ cũ giữ nguyên.
- **Xóa**: chỉ khi chưa chứng từ nào dùng khoản này.

## 6. Giải thích các thông tin trên màn hình

- **Mã**: Ý nghĩa: Mã hàng hóa khác; Bắt buộc: Có; Lưu ý: Không khoảng trắng, không trùng mã hàng hoá nào
- **Tên**: Ý nghĩa: Tên hiển thị trên chứng từ; Bắt buộc: Có
- **Đơn vị tính**: Ý nghĩa: Đơn vị của khoản; Bắt buộc: Có; Lưu ý: Chọn từ danh mục **Đơn vị tính** đang Kích hoạt
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Là hàng hóa dịch vụ**: Ý nghĩa: Doanh thu tính vào **Dịch vụ**; Bắt buộc: Không; Lưu ý: Mặc định không tick
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

## 7. Kiểm tra sau khi thực hiện

Khoản mới chọn được như một dòng hàng ở các chứng từ cho phép thêm hàng hoá khác. Với dòng lưu loại khác, đối chiếu không tính tồn kho; chưa mở rộng kết luận đó sang dòng đã tick dịch vụ.

## 8. Những điều cần lưu ý

⚠️ **Hàng hóa khác không tính tồn kho.** Không dùng danh mục này cho hàng có nhập, xuất kho; hãy tạo ở **Nguyên liệu**, **Hàng trơn** hoặc **Thành phẩm**.

⚠️ Tick **Là hàng hóa dịch vụ** làm hàng được ghi thuộc loại **dịch vụ**. Danh sách của màn hình này chỉ nạp hàng loại **khác**, nên dòng vừa lưu với dấu dịch vụ có thể **không hiện lại** ở danh sách này (đang chờ xác minh trên giao diện, xem ghi chú cuối bài).

⚠️ Mã hàng hóa khác nằm chung kho mã với nguyên liệu, hàng trơn, thành phẩm. Mã đã bị chiếm ở loại khác thì không dùng được.

⚠️ Hộp xác nhận xoá hỏi **Bạn có muốn xóa hàng hóa này?** đúng với màn này.

### "Mã đã tồn tại" 

Nguyên nhân: đã có hàng hoá (bất kỳ loại nào) cùng mã, kể cả khác chữ hoa / thường.
Cách xử lý: đặt mã khác. Muốn tìm mã trùng, tìm ở các màn **Nguyên liệu**, **Hàng trơn**, **Thành phẩm**.

### "Vùi lòng nhập mã" / "Vùi lòng nhập tên" 

Nguyên nhân: để trống ô **MÃ** hoặc **TÊN** (câu báo trên giao diện in đúng như vậy, có lỗi chính tả "Vùi").
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "Vui lòng chọn đơn vị tính" 

Cách xử lý: chọn **ĐƠN VỊ TÍNH**. Nếu chưa có đơn vị cần dùng, thêm ở TL-D04.

### "Mã không hợp lệ. Viết liền không dấu và không chứa kí tự đặc biệt." 

Nguyên nhân: mã có khoảng trắng.
Cách xử lý: viết liền, ví dụ `VANCHUYENK`.

### "Lỗi xóa.: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: khoản đang có trên chứng từ.
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá.

## 10. Câu hỏi thường gặp

**Thuế GTGT, tỷ giá có phải tạo ở đây không?**
Các dòng THUẾ GTGT/TỶ GIÁ chỉ là dữ liệu tham chiếu lịch sử. Hỏi kế toán về chứng từ và cách hạch toán trước khi tạo; tên dòng không thay chức năng tính thuế hoặc tỷ giá của ERP.

## 11. Công việc tiếp theo

**Tiếp theo:** sổ tay Bán hàng – lập phiếu bán hàng, thêm dòng khoản phí vừa tạo.

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH ĐƠN VỊ TÍNH](/bai-viet/2026-11-07-tl-d04-0-tong-quan-man-hinh-don-vi-tinh/) – Tổng quan màn hình Đơn vị tính
- Sổ tay Bán hàng – Phiếu bán hàng, Phiếu bán dịch vụ
