---
title: "HƯỚNG DẪN IN PHIẾU NHẬP KHO VÀ TEM KIỆN"
date: "2026-11-07"
summary: "Từ danh sách Phiếu nhập kho, bạn in được ba loại: - In phiếu (có giá): phiếu nhập kho có đơn giá, chiết khấu, VAT, thành tiền, số tiền bằng chữ – dùng cho kế toán, đối chiếu với NCC / khách."
module: "Kho hàng"
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

Từ danh sách **Phiếu nhập kho**, bạn in được ba loại:

- **In phiếu (có giá)**: phiếu nhập kho có đơn giá, chiết khấu, VAT, thành tiền, số tiền bằng chữ – dùng cho kế toán, đối chiếu với NCC / khách.
- **In phiếu (không giá)**: phiếu chỉ có số lượng – dùng cho thủ kho, người giao hàng ký nhận.
- **In tem kiện**: tem dán lên kiện hàng (tên sản phẩm, ngày nhập, số lô, số lượng, hạn dùng).

Mẫu phiếu tự đổi theo loại phiếu nhập: **PHIẾU NHẬP KHO** (nhập mua hàng) hoặc **PHIẾU NHẬP KHO HÀNG TRẢ** (nhập khách trả hàng). In không làm thay đổi dữ liệu.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Phiếu nhập kho**.
- Phiếu nhập kho đã được lưu ([HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/), [HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/)).
- Máy đã cài máy in; in tem kiện cần khổ giấy tem phù hợp.

## 2. Mở chức năng

**Kho hàng → Phiếu nhập kho → chuột phải dòng phiếu → In phiếu (có giá) / In phiếu (không giá) / In tem kiện**

## 3. Nhận biết màn hình

![Hình 1: Menu chuột phải với các mục in](/posts/2026-11-07-kho-a04-4-huong-dan-in-phieu-nhap-kho-va-tem-kien/hinh-01-menu-in-phieu-nhap-kho.png)

![Hình 2: Xem trước PHIẾU NHẬP KHO có giá](/posts/2026-11-07-kho-a04-4-huong-dan-in-phieu-nhap-kho-va-tem-kien/hinh-02-phieu-nhap-kho-co-gia.png)

**Nội dung từng mẫu:**

- **Nhập mua – có giá**: Tiêu đề: **PHIẾU NHẬP KHO**; Phần đầu: Ngày lập, Nhà cung cấp, Mã phiếu, Điện thoại, Địa chỉ giao hàng, Ghi chú; Cột bảng: STT, Tên sản phẩm, Đvt, SL, Đơn giá, CK, VAT, Thành tiền, Ghi chú; Chân: TỔNG CỘNG, Bằng chữ, ký Người lập phiếu (in tên người lập) / Người nhận hàng / Thủ kho
- **Nhập mua – không giá**: Tiêu đề: **PHIẾU NHẬP KHO**; Phần đầu: như trên; Cột bảng: STT, Tên sản phẩm, Đvt, SL, Ghi chú; Chân: TỔNG CỘNG số lượng, ký Người lập phiếu / Người nhận hàng / Thủ kho
- **Khách trả – có giá**: Tiêu đề: **PHIẾU NHẬP KHO HÀNG TRẢ**; Phần đầu: Ngày lập, Mã phiếu, Khách hàng, Nhân viên kinh doanh, Địa chỉ giao hàng, Điện thoại, Ghi chú; Cột bảng: STT, Tên sản phẩm, Đvt, SL, Đơn giá, CK, VAT, Thành tiền, Ghi chú; Chân: TỔNG CỘNG, Bằng chữ, ký Người lập phiếu / Người trả hàng / Thủ kho
- **Khách trả – không giá**: Tiêu đề: **PHIẾU NHẬP KHO HÀNG TRẢ**; Phần đầu: như trên; Cột bảng: STT, Tên sản phẩm, Đvt, SL, Ghi chú; Chân: TỔNG CỘNG số lượng, ký Người lập phiếu / Người trả hàng / Thủ kho
- **Tem kiện**: Tiêu đề: (tem); Cột bảng: Tên sản phẩm, Ngày nhập, Số lô, Số lượng (Đvt), HSD; Chân: Tên công ty

Phiếu nhập mua in **Tên sản phẩm** theo **Tên in** của dòng; phiếu hàng trả in theo tên hàng hoá. Góc trang có tên người in, giờ in và số trang.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kho hàng
   ↓
Phiếu nhập kho
   ↓
Chuột phải dòng phiếu → In phiếu (có giá) · In phiếu (không giá) · In tem kiện
```

```text
Phiếu nhập kho → chuột phải dòng phiếu
      ↓
Chọn loại in:
   ├── In phiếu (có giá) ──► mẫu theo loại phiếu (nhập mua / hàng trả)
   ├── In phiếu (không giá) ──► mẫu theo loại phiếu
   └── In tem kiện ──► tem cho từng dòng hàng
      ↓
Cửa sổ xem trước (GEN-06) → In / Lưu file → Đóng
```

### Bước 1 – Chọn phiếu và loại in

Trên **PHIẾU NHẬP KHO - DANH SÁCH**, chuột phải vào dòng phiếu (Hình 1), chọn:

- **In phiếu (có giá)** – xem trước phiếu có đơn giá, thành tiền;
- **In phiếu (không giá)** – xem trước phiếu chỉ có số lượng;
- **In tem kiện** – xem trước tem kiện.

Menu chuột phải còn các mục **Xem lại**, **Cập nhật …**, **File đính kèm** ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/)); ba mục in nằm liền nhau trước **File đính kèm**.

### Bước 2 – Kiểm tra bản xem trước

Cửa sổ xem trước hiện mẫu tương ứng (Hình 2); cửa sổ không có thanh tiêu đề, phía trên là thanh công cụ **In**, **Xuất**, chuyển trang, thu phóng, … **Đóng** (người có quyền quản lý mẫu thấy thêm **Sửa mẫu**). Kiểm tra mã phiếu, người giao, số lượng; với phiếu có giá, kiểm tra **TỔNG CỘNG** và dòng **Bằng chữ**.

Nếu cần sửa thông tin đầu phiếu (ghi chú, số hoá đơn…), đóng cửa sổ, sửa phiếu ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/) – mục Cập nhật nhanh, hoặc **Sửa**), rồi in lại.

### Bước 3 – In hoặc lưu file

Dùng thanh công cụ của cửa sổ xem trước để **in** hoặc **lưu PDF / Excel** ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)). Bấm **Đóng** trên thanh công cụ để thoát.

### In tem kiện

1. Chuột phải phiếu → **In tem kiện**.
2. Mỗi dòng hàng của phiếu ra một tem gồm **Tên sản phẩm** (tên in), **Ngày nhập**, **Số lô**, **Số lượng** kèm đơn vị tính, **HSD**.
3. Chọn máy in tem, in và dán lên kiện.

## 6. Giải thích các thông tin trên màn hình

- **Ngày lập**: Lấy từ: Ngày nhập kho
- **Mã phiếu**: Lấy từ: Mã phiếu nhập (**NK…**)
- **Nhà cung cấp / Khách hàng**: Lấy từ: Người giao hàng
- **Nhân viên kinh doanh**: Lấy từ: Nhân viên sale của phiếu khách trả; Ghi chú: Chỉ mẫu hàng trả
- **Ghi chú**: Lấy từ: Ghi chú phiếu
- **Tên sản phẩm**: Lấy từ: Tên in (nhập mua) / tên hàng (hàng trả); Ghi chú: Sửa Tên in trong cửa sổ phiếu nhập
- **SL**: Lấy từ: Số lượng nhập
- **Đơn giá, CK, VAT**: Lấy từ: Theo dòng phiếu (từ phiếu mua / phiếu khách trả); Ghi chú: Chỉ mẫu có giá
- **Thành tiền**: Lấy từ: Đơn giá × (1 − CK) × (1 + VAT) × SL; Ghi chú: Tính lại lúc in
- **Bằng chữ**: Lấy từ: Tổng tiền phiếu đọc thành chữ; Ghi chú: Chỉ mẫu có giá
- **Số lô, HSD**: Lấy từ: Lô hàng của dòng; Ghi chú: Chỉ tem kiện; trống nếu hàng không quản lý lô

## 7. Kiểm tra sau khi thực hiện

Bạn có phiếu nhập kho bản giấy / PDF (có giá hoặc không giá) để ký nhận, hoặc tem dán kiện hàng. Dữ liệu phiếu không thay đổi.

## 8. Những điều cần lưu ý

⚠️ **In phiếu (có giá)** hiện đơn giá, thành tiền cho **mọi người có quyền truy cập** màn Phiếu nhập kho, kể cả người không thấy cột Tổng tiền trên danh sách. Giao bản có giá đúng người.

⚠️ Thành tiền trên phiếu in được **tính lại theo chiết khấu / VAT từng dòng**; nếu phiếu có chiết khấu / VAT chung ở đầu phiếu (thường gặp ở phiếu khách trả), tổng in có thể khác **Tổng tiền** trên danh sách – đối chiếu với kế toán.

⚠️ Tem kiện in **một tem cho mỗi dòng hàng**, không tự nhân theo số kiện.

### Cửa sổ xem trước trống hoặc không hiện mẫu (Lỗi hệ thống)

Nguyên nhân: không tải được mẫu in hoặc dữ liệu phiếu.
Cách xử lý: đóng cửa sổ, tải lại trang rồi in lại; vẫn lỗi thì liên hệ IT ([LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/)).

### Phiếu in thiếu tên công ty / logo (Lỗi hệ thống)

Nguyên nhân: thông tin chi nhánh chưa nạp đủ.
Cách xử lý: đăng xuất, đăng nhập lại rồi in lại; vẫn thiếu thì liên hệ IT.

### Số lô, HSD trên tem trống 

Nguyên nhân: hàng không quản lý theo lô, hoặc dòng nhập không có lô.
Cách xử lý: bình thường với hàng không theo lô; nếu cần lô, trao đổi với kế toán kho.

## 10. Câu hỏi thường gặp

**Phiếu nhập khách trả in ra tiêu đề gì?**
**PHIẾU NHẬP KHO HÀNG TRẢ**, có thêm dòng Nhân viên kinh doanh và chỗ ký Người trả hàng.

**Muốn sửa tên sản phẩm trên phiếu in?**
Với phiếu nhập mua, sửa cột **Tên in** trong cửa sổ phiếu nhập (khi phiếu chưa được chi tiền) rồi in lại.

**Muốn đổi mẫu in?**
Liên hệ IT; người có quyền quản lý mẫu in có thêm công cụ mẫu trên thanh công cụ xem trước ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)).

## 11. Công việc tiếp theo

**Tiếp theo:** lưu bản ký vào hồ sơ; đính kèm bản scan vào phiếu bằng chuột phải → **File đính kèm** ([HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/) – Tổng quan màn hình Phiếu nhập kho
- [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/) – Hướng dẫn nhập kho hàng mua từ phiếu mua hàng
- [HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/) – Hướng dẫn nhập kho hàng khách trả
