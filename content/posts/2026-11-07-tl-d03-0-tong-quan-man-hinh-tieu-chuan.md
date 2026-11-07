---
title: "TỔNG QUAN MÀN HÌNH TIÊU CHUẨN"
date: "2026-11-07"
summary: "Tiêu chuẩn là danh mục các tiêu chuẩn chất lượng của ván nền, ví dụ MDF E2, HMR E2, MDF CARBP2, LDF E2, OKAL E2."
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

**Tiêu chuẩn** là danh mục các tiêu chuẩn chất lượng của ván nền, ví dụ *MDF E2*, *HMR E2*, *MDF CARBP2*, *LDF E2*, *OKAL E2*. Mỗi dòng gồm **mã**, **tên**, và hai thông tin phụ là **loại ván** (MDF, HMR, LDF…) và **mã tiêu chuẩn** (E1, E2, C2…).

Danh mục này được dùng ở:

- **Hàng trơn** (TL-D09) và **Thành phẩm** (TL-D11): ô **TIÊU CHUẨN** là thành phần bắt buộc. **Mã tiêu chuẩn** đi vào **mã hàng**, **tên tiêu chuẩn** đi vào **tên hàng**. Ví dụ tiêu chuẩn mã `MDFE2`, tên *MDF E2* cho ra hàng trơn `MDFE2(17x1220x2440)NK`, tên *MDF E2 (17x1220x2440) NK*.
- **Bảng giá gia công** (sổ tay Sản xuất): giá được đặt theo tiêu chuẩn của hàng.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Tiêu chuẩn**.
- Không cần danh mục nào khác có trước.

## 2. Mở chức năng

**Hàng hoá → Tiêu chuẩn**

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

![Hình 1: Danh sách danh mục tiêu chuẩn theo bố cục và bộ lọc hiện tại](/posts/2026-11-07-tl-d03-0-tong-quan-man-hinh-tieu-chuan/hinh-01-man-hinh-tieu-chuan.png)

- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM DANH MỤC TIÊU CHUẨN**; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá một dòng; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Xóa** (hiện theo quyền)
- **Mã danh mục tiêu chuẩn**: Ý nghĩa: Mã dùng để ghép **mã hàng** (ví dụ `MDFE2`)
- **Tên danh mục tiêu chuẩn**: Ý nghĩa: Tên dùng để ghép **tên hàng** (ví dụ *MDF E2*)
- **Loại ván**: Ý nghĩa: Thông tin phụ (ví dụ MDF, HMR, LDF)
- **Mã tiêu chuẩn**: Ý nghĩa: Thông tin phụ (ví dụ E1, E2, C2)
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n**. Danh sách hiện cả dòng **Ngưng sử dụng**. Nhấp đúp vào một dòng mở cửa sổ chỉ xem **THÔNG TIN DANH MỤC TIÊU CHUẨN**.

![Hình 2: cửa sổ thêm danh mục tiêu chuẩn chưa nhập và chưa lưu](/posts/2026-11-07-tl-d03-0-tong-quan-man-hinh-tieu-chuan/hinh-02-form-them-tieu-chuan.png)

- **MÃ DANH MỤC TIÊU CHUẨN**: Ý nghĩa: Bắt buộc, viết liền, không trùng
- **TÊN DANH MỤC TIÊU CHUẨN**: Ý nghĩa: Bắt buộc
- **LOẠI VÁN, MÃ TIÊU CHUẨN**: Ý nghĩa: Tuỳ chọn, gợi ý trong ô: *MDF, LDF, HDF, HMR, MMR, OKAL…* và *E0, E1, E2, C2, AA, BC…*
- **GHI CHÚ**: Ý nghĩa: Tuỳ chọn
- **Kích hoạt**: Ý nghĩa: Bỏ tick = **Ngưng sử dụng**

## 4. Trình tự công việc

```text
Tiêu chuẩn (TL-D03)
      ├──► Hàng trơn (TL-D09): ô TIÊU CHUẨN → mã + tên hàng
      ├──► Thành phẩm (TL-D11): ô TIÊU CHUẨN → mã + tên hàng
      └──► Bảng giá gia công (sổ tay Sản xuất)
```

### Khai báo một tiêu chuẩn

**Bước 1 –** Nhập **MÃ DANH MỤC TIÊU CHUẨN**: viết liền, không khoảng trắng, ít nhất 2 ký tự, ví dụ `MDFE2`. Mã này sẽ nằm trong mã của mọi hàng trơn, thành phẩm dùng tiêu chuẩn, nên đặt ngắn gọn và ổn định.

**Bước 2 –** Nhập **TÊN DANH MỤC TIÊU CHUẨN**, ví dụ *MDF E2*. Tên này nằm trong tên hàng nên viết đúng như muốn thấy trên chứng từ.

**Bước 3 –** Nếu muốn, nhập **LOẠI VÁN** (ví dụ `MDF`) và **MÃ TIÊU CHUẨN** (ví dụ `E2`). Hai ô này không có khoảng trắng. Đừng nhầm **MÃ TIÊU CHUẨN** phụ (ví dụ E2) với **MÃ DANH MỤC TIÊU CHUẨN** dùng ghép mã hàng (ví dụ MDFE2); tác động phân loại/báo cáo cần người phụ trách duyệt.

**Bước 4 –** Bấm **Lưu lại**. Hệ thống kiểm tra mã chưa có (không phân biệt chữ hoa, chữ thường).

### Sửa, ngưng dùng, xoá

- **Sửa mã / tên**: các hàng đã tạo **không tự đổi** mã và tên (xem phần “Những điều cần lưu ý”).
- **Ngưng sử dụng**: bỏ tick **Kích hoạt**. Tiêu chuẩn không còn hiện trong ô chọn của cửa sổ hàng trơn, thành phẩm; hàng cũ vẫn giữ nguyên.
- **Xóa**: chỉ khi chưa hàng hoá, bảng giá gia công nào dùng tiêu chuẩn.

## 6. Giải thích các thông tin trên màn hình

- **Mã danh mục tiêu chuẩn**: Ý nghĩa: Mã dùng ghép mã hàng; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự, không khoảng trắng, không trùng
- **Tên danh mục tiêu chuẩn**: Ý nghĩa: Tên dùng ghép tên hàng; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự
- **Loại ván**: Ý nghĩa: Loại ván (MDF, HMR…); Bắt buộc: Không; Lưu ý: Không khoảng trắng
- **Mã tiêu chuẩn**: Ý nghĩa: Cấp tiêu chuẩn (E1, E2…); Bắt buộc: Không; Lưu ý: Không khoảng trắng
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

## 7. Kiểm tra sau khi thực hiện

Tiêu chuẩn mới chọn được ở ô **TIÊU CHUẨN** của cửa sổ hàng trơn, thành phẩm và dùng để đặt giá trong bảng giá gia công.

## 8. Những điều cần lưu ý

⚠️ **Đổi mã hoặc tên tiêu chuẩn không làm đổi mã, tên hàng đã lưu.** Hàng cũ giữ chữ cũ; hàng tạo sau (hoặc hàng cũ bị sinh lại mã khi sửa) mang chữ mới, dễ thành hai mã cho cùng một mặt hàng. Chỉ đổi khi chắc chắn.

⚠️ Tiêu chuẩn đã có hàng hoá hoặc bảng giá gia công dùng thì **không xoá được**. Muốn ngưng dùng thì bỏ tick **Kích hoạt**.

⚠️ Hộp xác nhận xoá hỏi **Bạn có muốn xóa hàng hóa này?** là câu chung của các màn Hàng hoá; thực tế là xoá dòng tiêu chuẩn đang chọn.

⚠️ Hai ô **LOẠI VÁN** và **MÃ TIÊU CHUẨN** không tham gia sinh mã hàng. Mã hàng chỉ lấy **MÃ DANH MỤC TIÊU CHUẨN**.

### "Mã đã tồn tại" 

Nguyên nhân: đã có tiêu chuẩn cùng mã (kể cả khác chữ hoa / thường).
Cách xử lý: đặt mã khác, hoặc tìm và dùng lại dòng đã có.

### "Mã không hợp lệ. Viết liền không dấu và không chứa kí tự đặc biệt." 

Nguyên nhân: mã, **LOẠI VÁN** hoặc **MÃ TIÊU CHUẨN** có khoảng trắng.
Cách xử lý: viết liền, ví dụ `MDFE2` thay cho `MDF E2`.

### "Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: tiêu chuẩn đang được hàng hoá hoặc bảng giá gia công dùng.
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá.

## 10. Câu hỏi thường gặp

**Tiêu chuẩn đã ngưng sử dụng có còn trong danh sách không?**
Còn, cột **Trạng thái** hiện **Ngưng sử dụng**. Chỉ ô chọn trên cửa sổ hàng hoá mới ẩn nó.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN THÊM, SỬA HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-1-huong-dan-them-sua-hang-tron/) – Hướng dẫn thêm, sửa hàng trơn (chọn tiêu chuẩn vừa tạo để sinh mã, tên hàng).

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-0-tong-quan-man-hinh-hang-tron/) – Tổng quan màn hình Hàng trơn
- [TỔNG QUAN THÀNH PHẨM](/bai-viet/2026-11-07-tl-d11-0-tong-quan-thanh-pham/) – Tổng quan màn hình Thành phẩm
- Sổ tay Sản xuất – Bảng giá gia công
