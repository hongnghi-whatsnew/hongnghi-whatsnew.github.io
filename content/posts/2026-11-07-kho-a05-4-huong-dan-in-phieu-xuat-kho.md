---
title: "HƯỚNG DẪN IN PHIẾU XUẤT KHO"
date: "2026-11-07"
summary: "Phiếu xuất kho có nhiều mẫu in để giao cho khách / NCC, cho tài xế và lưu kho."
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

Phiếu xuất kho có nhiều **mẫu in** để giao cho khách / NCC, cho tài xế và lưu kho. Mẫu hiện ra trên menu chuột phải tuỳ **loại phiếu** (xuất bán / xuất trả) và **chi nhánh** đang làm việc. Thao tác trong cửa sổ xem trước (in, tải PDF, phóng to…) xem bài chung [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/).

- **In phiếu ( Mẫu 1, Không giá)**: Loại phiếu: Xuất bán; Chi nhánh: HN; Tiêu đề trên bản in: PHIẾU XUẤT KHO; Có giá: Không – có cột **Kiện, tấm**
- **In phiếu ( Mẫu 2, Có giá)**: Loại phiếu: Xuất bán; Chi nhánh: HN; Tiêu đề trên bản in: PHIẾU XUẤT KHO; Có giá: **Đơn giá**, **Thành tiền**, **Bằng chữ**
- **In phiếu ( Mẫu 3, Có giá)**: Loại phiếu: Xuất bán; Chi nhánh: HN; Tiêu đề trên bản in: PHIẾU XUẤT KHO; Có giá: **Đơn giá**, **VAT**, **Thành tiền**, **Bằng chữ**
- **In phiếu ( Mẫu Loại hàng)**: Loại phiếu: Xuất bán; Chi nhánh: HN; Tiêu đề trên bản in: PHIẾU XUẤT KHO; Có giá: Không – thêm cột **Loại hàng**
- **In phiếu ( Bàn giao)**: Loại phiếu: Xuất bán; Chi nhánh: HN; Tiêu đề trên bản in: BIÊN BẢN GIAO NHẬN; Có giá: Không – Bên A / Bên B ký
- **In phiếu ( Mẫu 1, Không giá GP, HG)**: Loại phiếu: Xuất bán; Chi nhánh: GP, HG; Tiêu đề trên bản in: PHIẾU XUẤT KHO; Có giá: Không
- **In phiếu ( Mẫu 2, Có giá  GP, HG)**: Loại phiếu: Xuất bán; Chi nhánh: GP, HG; Tiêu đề trên bản in: PHIẾU XUẤT KHO; Có giá: Có
- **In phiếu ( Mẫu 3, Có giá GP, HG)**: Loại phiếu: Xuất bán; Chi nhánh: GP, HG; Tiêu đề trên bản in: PHIẾU XUẤT KHO; Có giá: Có, kèm VAT
- **In phiếu ( Mẫu Loại hàng, GP, HG)**: Loại phiếu: Xuất bán; Chi nhánh: GP, HG; Tiêu đề trên bản in: PHIẾU XUẤT KHO; Có giá: Không
- **In phiếu ( Bàn giao GP, HG)**: Loại phiếu: Xuất bán; Chi nhánh: GP, HG; Tiêu đề trên bản in: BIÊN BẢN GIAO NHẬN; Có giá: Không
- **In phiếu Trả hàng ( Mẫu 1, Không giá)**: Loại phiếu: Xuất trả; Chi nhánh: Mọi chi nhánh; Tiêu đề trên bản in: PHIẾU XUẤT TRẢ; Có giá: Không
- **In phiếu Trả hàng ( Mẫu 2, Có giá)**: Loại phiếu: Xuất trả; Chi nhánh: Mọi chi nhánh; Tiêu đề trên bản in: PHIẾU XUẤT TRẢ HÀNG; Có giá: **Đơn giá**, **VAT**, **Thành tiền**, **Bằng chữ**

Mẫu **GP, HG** không có dòng **Nhân viên kinh doanh**.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Phiếu xuất kho**.
- Phiếu xuất kho đã lưu.
- Đang làm việc đúng **chi nhánh** (mẫu xuất bán chỉ hiện ở chi nhánh HN và GP / HG).
- Thông tin công ty của chi nhánh (địa chỉ, MST, điện thoại) đã khai (in ở đầu phiếu).

## 2. Mở chức năng

**Kho hàng → Phiếu xuất kho → tick ô đầu dòng phiếu → chuột phải vào dòng → In phiếu …**

## 3. Nhận biết màn hình

![Hình 1: Menu chuột phải với các mẫu in phiếu xuất bán](/posts/2026-11-07-kho-a05-4-huong-dan-in-phieu-xuat-kho/hinh-01-menu-in-phieu-xuat-kho.png)

- **Các mục In phiếu ( …)**: Ý nghĩa: Chọn mẫu in theo bảng phần “Chức năng này dùng để làm gì?”. Ở chi nhánh Hồng Nghi (HN), phiếu xuất bán có 5 mục: **Mẫu 1, Không giá**, **Mẫu 2, Có giá**, **Mẫu 3, Có giá**, **Mẫu Loại hàng**, **Bàn giao**
- **In phiếu Trả hàng ( …)**: Ý nghĩa: Chỉ hiện ở phiếu xuất trả (không có trên ảnh)
- **Ô tick đầu dòng**: Ý nghĩa: **Phải tick** dòng phiếu trước khi chuột phải – chưa tick thì không có menu

Các mục khác trên menu (**Xem lại**, **Cập nhật …**, **File đính kèm**) xem [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/), [HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/).

![Hình 2: Bản in PHIẾU XUẤT KHO – Mẫu 2, Có giá](/posts/2026-11-07-kho-a05-4-huong-dan-in-phieu-xuat-kho/hinh-02-ban-in-mau-2-co-gia.png)

- **Đầu phiếu**: Ý nghĩa: Logo, thông tin công ty (chi nhánh: địa chỉ, MST, điện thoại, email, website), **KH:** <số> ở góc phải – trên bản thử hiện **KH: 8280** là **số định danh nội bộ** của khách, không phải mã khách KH000021 (nghi lỗi mẫu in, xem phần “Những điều cần lưu ý”)
- **Ngày lập, Mã phiếu, Số xe**: Ý nghĩa: Theo phiếu xuất
- **Khách hàng, Điện thoại, Địa chỉ giao hàng, Ghi chú (khung số)**: **Kho Xuất**, **Nhân viên kinh doanh** (khung không số, phía trên); Ý nghĩa: Theo phiếu xuất
- **Bảng hàng**: Ý nghĩa: **STT**, **Tên sản phẩm** (tên in), **GC**, **Đvt**, **SL**, **Đơn giá** (đã gồm VAT), **Thành tiền**, **Ghi chú**
- **TỔNG CỘNG:, Bằng chữ:**: Ý nghĩa: Tổng tiền và số tiền bằng chữ
- **Ký**: Ý nghĩa: **Người lập phiếu** (in sẵn tên người lập), **Người nhận hàng**, **Thủ kho**

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kho hàng
   ↓
Phiếu xuất kho
   ↓
Tick ô đầu dòng → chuột phải dòng phiếu → In phiếu ( …)
   ↓
Cửa sổ xem trước (GEN-06) → In / Tải về
```

```text
Chọn phiếu trên danh sách
      ↓
Tick dòng → chuột phải → chọn mẫu
   ├── giao khách, không lộ giá ──► Mẫu 1, Không giá / Mẫu Loại hàng
   ├── giao khách kèm giá ──► Mẫu 2 (đơn giá đã gồm VAT) / Mẫu 3 (tách cột VAT)
   ├── biên bản ký nhận 2 bên ──► Bàn giao
   └── trả NCC ──► Trả hàng Mẫu 1 / Mẫu 2
      ↓
Cửa sổ xem trước → In / Tải PDF (GEN-06)
```

### Bước 1 – Chọn phiếu

Vào **Kho hàng → Phiếu xuất kho**, chọn khoảng ngày chứa phiếu, tìm phiếu cần in.

### Bước 2 – Chọn mẫu in

Chỉ **tick một dòng đúng phiếu cần in** (Hình 1), chuột phải vào dòng đó → chọn mục **In phiếu ( …)** phù hợp (Hình 1, bảng phần “Chức năng này dùng để làm gì?”). Chưa tick dòng thì chuột phải không hiện menu.

### Bước 3 – Xem trước và in

Cửa sổ xem trước mở ra (Hình 2). Kiểm tra khách hàng, số xe, số lượng, giá; bấm **In** hoặc **Xuất** trên thanh công cụ ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)). Đóng cửa sổ bằng nút **Đóng** ở góc trên phải.

### Bước 4 – Ký và lưu

In đủ số liên theo quy định; lấy chữ ký **Người nhận hàng**, **Thủ kho**. Bản ký có thể scan và đính kèm vào phiếu (chuột phải → **File đính kèm** – [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)).

## 6. Giải thích các thông tin trên màn hình

- **Ngày lập**: Lấy từ: Ngày xuất kho
- **Mã phiếu**: Lấy từ: Mã phiếu xuất (XK…)
- **Số xe**: Lấy từ: Xe trên phiếu; Lưu ý: Mẫu GP, HG ghi ở dòng riêng
- **Khách hàng / Nhà cung cấp**: Lấy từ: Người nhận
- **Nhân viên kinh doanh**: Lấy từ: Nhân viên sale của phiếu bán hàng; Lưu ý: Chỉ mẫu HN
- **Địa chỉ giao hàng, Điện thoại**: Lấy từ: Địa chỉ, điện thoại người nhận; Lưu ý: Sửa trên phiếu nếu sai
- **Kho Xuất**: Lấy từ: Kho xuất
- **Tên sản phẩm**: Lấy từ: **Tên in** của dòng; Lưu ý: Trống thì kiểm tra cột Tên in
- **Kiện, tấm**: Lấy từ: Số lượng quy đổi kiện / tấm; Lưu ý: Mẫu không giá
- **Đơn giá, VAT, Thành tiền**: Lấy từ: Theo phiếu bán hàng / phiếu trả; Lưu ý: Mẫu có giá
- **Bằng chữ**: Lấy từ: Tổng tiền bằng chữ; Lưu ý: Mẫu có giá

## 7. Kiểm tra sau khi thực hiện

Có bản in phiếu xuất kho / biên bản giao nhận / phiếu xuất trả để giao kèm hàng. Việc in **không** thay đổi dữ liệu phiếu.

## 8. Những điều cần lưu ý

⚠️ Mẫu **có giá** để lộ giá bán cho người nhận; giao cho tài xế / người nhận hàng thì nên dùng mẫu **Không giá**.

⚠️ Ở chi nhánh không phải HN, GP, HG, menu **không có mẫu in xuất bán**.

⚠️ Đầu phiếu in **KH: <số>** là số định danh nội bộ của khách (bản thử: **KH: 8280** cho khách KH000021), không phải mã khách – đã báo IT. Đối chiếu khách theo dòng **Khách hàng**.

⚠️ Mẫu 2: **Đơn giá** là đơn giá **đã gồm VAT** (bản thử 177,120 = 164.000 + VAT 8 %), không có cột VAT riêng.

⚠️ Tên hàng trên phiếu in là **Tên in**, có thể khác tên hàng hoá trong danh mục.

### Không thấy mục In phiếu trên menu chuột phải 

Cách xử lý: tick ô đầu dòng phiếu rồi chuột phải lại; truy cập đúng tên miền bằng tài khoản của chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)); liên hệ IT nếu chi nhánh cần mẫu riêng.

### Đầu phiếu thiếu địa chỉ / MST công ty (Lỗi hệ thống)

Nguyên nhân: chưa khai thông tin công ty của chi nhánh hoặc phiên làm việc chưa nạp đủ.
Cách xử lý: đăng xuất, đăng nhập lại ([HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/)); nếu vẫn thiếu, báo IT.

### Cột Tên sản phẩm trống 

Nguyên nhân: dòng hàng chưa có **Tên in**.
Cách xử lý: **Sửa** phiếu, nhập **Tên in** ([HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/)).

## 10. Câu hỏi thường gặp

**Mẫu 2 và Mẫu 3 khác gì nhau?**
Mẫu 2 in **Đơn giá** đã gồm VAT và **Thành tiền**, không có cột VAT. Mẫu 3 có thêm cột **VAT** (theo file mẫu, chưa in thử).

**Biên bản giao nhận dùng khi nào?**
Khi cần hai bên (bên nhận – Bên A, bên giao – Bên B) ký xác nhận số lượng, không có giá.

**In lại phiếu đã in được không?**
Được, in bao nhiêu lần cũng không ảnh hưởng dữ liệu.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/) – cập nhật số hoá đơn, gửi email phiếu cho khách.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
- [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/) – Hướng dẫn lập phiếu xuất kho bán hàng
- [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO TRẢ HÀNG NHÀ CUNG CẤP](/bai-viet/2026-11-07-kho-a05-2-huong-dan-lap-phieu-xuat-kho-tra-hang-nha-cung-cap/) – Hướng dẫn lập phiếu xuất kho trả hàng nhà cung cấp
- [HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/) – Hướng dẫn cập nhật hoá đơn và thông tin phiếu xuất kho
