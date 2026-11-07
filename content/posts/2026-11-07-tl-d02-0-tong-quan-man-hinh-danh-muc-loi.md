---
title: "TỔNG QUAN MÀN HÌNH DANH MỤC LỖI"
date: "2026-11-07"
summary: "Danh mục lỗi liệt kê các loại lỗi của hàng hoá sau gia công / sản xuất, ví dụ LỖI, LỖI MÁY, LỖI GIẤY, LỖI VÁN."
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

**Danh mục lỗi** liệt kê các **loại lỗi** của hàng hoá sau gia công / sản xuất, ví dụ *LỖI*, *LỖI MÁY*, *LỖI GIẤY*, *LỖI VÁN*.

Danh mục này được dùng ở:

- **Thành phẩm** (TL-D11): ô **LỖI** của thành phẩm. Khi chọn lỗi, **mã và tên thành phẩm bắt đầu bằng mã / tên lỗi** (ví dụ *LỖI MEL … MDF E2 (15x1220x2440) KT*), để tách hàng lỗi khỏi hàng đạt.
- **Phiếu nhập kho gia công** (sổ tay Sản xuất): ghi các lỗi phát sinh của từng dòng hàng.

Bạn dùng màn hình này khi cần thêm một loại lỗi mới, sửa tên hoặc ngưng dùng một loại lỗi.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Danh mục lỗi**.
- Không cần danh mục nào khác có trước.

## 2. Mở chức năng

**Hàng hoá → Danh mục lỗi**

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

![Hình 1: Danh sách danh mục lỗi theo bố cục và bộ lọc hiện tại](/posts/2026-11-07-tl-d02-0-tong-quan-man-hinh-danh-muc-loi/hinh-01-man-hinh-danh-muc-loi.png)

- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM DANH MỤC LỖI**; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá một dòng; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Xóa** (hiện theo quyền)
- **Mã danh mục lỗi**: Ý nghĩa: Mã loại lỗi, viết liền (ví dụ `LOIMAY`)
- **Tên danh mục lỗi**: Ý nghĩa: Tên loại lỗi (ví dụ *LỖI MÁY*)
- **Trạng thái**: Ý nghĩa: **Kích hoạt** / **Ngưng sử dụng**
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n**. Nhấp đúp vào một dòng mở cửa sổ chỉ xem **THÔNG TIN DANH MỤC LỖI**.

## 4. Trình tự công việc

```text
Danh mục lỗi (TL-D02)
   ├──► Thành phẩm (TL-D11): ô LỖI → mã, tên thành phẩm có tiền tố lỗi
   └──► Phiếu nhập kho gia công (sổ tay Sản xuất): ghi lỗi từng dòng hàng
```

```text
Danh mục lỗi
   ├── Thêm mới ──► THÊM DANH MỤC LỖI
   ├── Sửa ──► CẬP NHẬT DANH MỤC LỖI (bỏ tick Kích hoạt = ngưng dùng)
   ├── Xóa ──► chỉ khi chưa được dùng
   ├── Nhấp đúp ──► THÔNG TIN DANH MỤC LỖI (chỉ xem)
   └── Xuất Excel
```

## 5. Thực hiện trên phần mềm

- **Tìm một loại lỗi**: Cách làm: Gõ mã / tên vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm loại lỗi**: Cách làm: **Thêm mới** → nhập mã, tên → **Lưu lại**; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/), mục này
- **Xem chi tiết**: Cách làm: Nhấp đúp vào dòng; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Sửa tên / ghi chú**: Cách làm: **Sửa** → **CẬP NHẬT DANH MỤC LỖI**; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Ngưng dùng**: Cách làm: **Sửa** → bỏ tick **Kích hoạt** → **Lưu lại**; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Xoá**: Cách làm: **Xóa** → xác nhận; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Tạo thành phẩm lỗi**: Cách làm: Màn **Thành phẩm**, ô **LỖI**; Bài hướng dẫn: hướng dẫn của bộ phận phụ trách
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Thêm một loại lỗi

**Bước 1 –** Bấm **Thêm mới**. cửa sổ **THÊM DANH MỤC LỖI** mở ra (Hình 2).

**Bước 2 –** Nhập **MÃ DANH MỤC LỖI** (viết liền, ít nhất 2 ký tự) và **TÊN DANH MỤC LỖI**. **GHI CHÚ** tuỳ chọn.

**Bước 3 –** Để tick **Kích hoạt**, bấm **Lưu lại**. Hệ thống báo **Lưu thành công**.

![Hình 2: cửa sổ thêm danh mục lỗi chưa nhập và chưa lưu](/posts/2026-11-07-tl-d02-0-tong-quan-man-hinh-danh-muc-loi/hinh-02-form-them-danh-muc-loi.png)

- **MÃ DANH MỤC LỖI**: Ý nghĩa: Bắt buộc, không trùng
- **TÊN DANH MỤC LỖI**: Ý nghĩa: Bắt buộc
- **GHI CHÚ**: Ý nghĩa: Tuỳ chọn
- **Kích hoạt**: Ý nghĩa: Bỏ tick = **Ngưng sử dụng**
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

## 6. Giải thích các thông tin trên màn hình

- **Mã danh mục lỗi**: Ý nghĩa: Mã viết liền của loại lỗi; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự, không khoảng trắng, không trùng. Mã này đứng **đầu mã thành phẩm lỗi**
- **Tên danh mục lỗi**: Ý nghĩa: Tên hiển thị; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự. Tên này đứng **đầu tên thành phẩm lỗi**
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

## 7. Kiểm tra sau khi thực hiện

Bạn biết danh mục lỗi dùng ở đâu và cần đọc bài nào cho từng việc. Loại lỗi mới chọn được ở ô **LỖI** của cửa sổ thành phẩm.

## 8. Những điều cần lưu ý

⚠️ **Sửa mã / tên lỗi không tự đổi mã, tên của thành phẩm đã tạo.** Mã, tên thành phẩm chỉ được ghép lúc tạo / sửa thành phẩm.

⚠️ Loại lỗi đã gắn vào thành phẩm hoặc phiếu nhập kho gia công thì **không xoá được**. Bỏ tick **Kích hoạt** để ngưng dùng.

⚠️ Danh mục dùng chung cho các chi nhánh trong cùng cơ sở dữ liệu ERP.

### "Mã đã tồn tại" 

Nguyên nhân: đã có loại lỗi cùng mã (không phân biệt hoa / thường).
Cách xử lý: đặt mã khác hoặc dùng lại dòng đã có.

### "Mã không hợp lệ. Viết liền không dấu và không chứa kí tự đặc biệt." 

Nguyên nhân: mã có khoảng trắng.
Cách xử lý: viết liền, ví dụ `LOIMAY`.

### "Nhập mã danh mục lỗi" / "Mã danh mục lỗi quá ngắn" / "Nhập tên danh mục lỗi" / "Tên danh mục lỗi quá ngắn" 

Nguyên nhân: để trống hoặc chỉ nhập 1 ký tự.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: loại lỗi đang được dùng.
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá.

## 10. Câu hỏi thường gặp

**Thành phẩm lỗi có phải tạo riêng không?**
Có. Thành phẩm lỗi là một mã hàng riêng: tạo thành phẩm mới và chọn ô **LỖI** (hướng dẫn của bộ phận phụ trách). Sau khi lưu, không đổi được ô **LỖI** của thành phẩm.

## 11. Công việc tiếp theo

**Tiếp theo:** hướng dẫn của bộ phận phụ trách – Hướng dẫn thêm, sửa thành phẩm (chọn ô **LỖI**).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN THÀNH PHẨM](/bai-viet/2026-11-07-tl-d11-0-tong-quan-thanh-pham/) – Tổng quan màn hình Thành phẩm
- hướng dẫn của bộ phận phụ trách – Hướng dẫn thêm, sửa thành phẩm
- Sổ tay Sản xuất – Phiếu nhập kho gia công
