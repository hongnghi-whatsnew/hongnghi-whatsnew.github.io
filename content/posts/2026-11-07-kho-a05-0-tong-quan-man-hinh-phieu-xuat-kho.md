---
title: "TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO"
date: "2026-11-07"
summary: "Màn hình Phiếu xuất kho ghi nhận hàng thực sự rời kho theo một chứng từ đã có: - Xuất bán hàng: giao hàng cho khách theo phiếu bán hàng (sổ tay Bán hàng)."
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

Màn hình **Phiếu xuất kho** ghi nhận hàng **thực sự rời kho** theo một chứng từ đã có:

- **Xuất bán hàng**: giao hàng cho khách theo **phiếu bán hàng** (sổ tay Bán hàng).
- **Xuất trả hàng**: trả hàng cho nhà cung cấp (NCC) theo **phiếu trả hàng** (sổ tay Mua hàng).

Phiếu xuất kho là bước làm thay đổi số liệu:

- Lưu phiếu: **tồn kho giảm** ngay, sổ cái kho có thêm dòng xuất.
- Xuất bán: **công nợ khách hàng tăng** bằng **Tổng tiền** của phiếu xuất. Xuất trả: **công nợ NCC giảm** bằng Tổng tiền.
- **Trạng thái xuất** của phiếu bán hàng / phiếu trả hàng gốc được cập nhật.

Bạn dùng màn hình này khi:

- Thủ kho giao hàng cho khách theo phiếu bán hàng đã duyệt giá.
- Thủ kho giao hàng trả NCC theo phiếu trả hàng.
- Cập nhật số hoá đơn, mã phiếu gốc, xe / tài xế, số ngày nợ sau khi đã xuất.
- In phiếu xuất kho, gửi email phiếu cho khách.

Xuất hàng không theo chứng từ bán / trả (xuất mẫu, xuất dùng nội bộ) dùng **Phiếu xuất hàng** ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-0-tong-quan-man-hinh-phieu-xuat-hang/)). Chuyển hàng giữa hai kho dùng **Phiếu xuất chuyển kho** ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-0-tong-quan-man-hinh-phieu-xuat-chuyen-kho/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Phiếu xuất kho**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Tài khoản được phân **kho** và **nhóm khách hàng** cần xem.
- Có chứng từ gốc: phiếu bán hàng **đã duyệt giá** (xuất bán) hoặc phiếu trả hàng NCC (xuất trả).
- Danh mục **Xe**, **Tài xế** đã có dữ liệu (bắt buộc khi lập phiếu).

## 2. Mở chức năng

**Kho hàng → Phiếu xuất kho**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU XUẤT KHO - DANH SÁCH](/posts/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/hinh-01-man-hinh-phieu-xuat-kho.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày xuất kho**. Mặc định **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Menu **Xuất bán hàng** / **Xuất trả hàng**; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/), [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO TRẢ HÀNG NHÀ CUNG CẤP](/bai-viet/2026-11-07-kho-a05-2-huong-dan-lap-phieu-xuat-kho-tra-hang-nha-cung-cap/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Ô chọn đầu dòng**: Chức năng: Tick nhiều phiếu (dùng cho đề nghị sinh chứng từ AMIS); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Thao tác: Sửa hóa đơn \**: Chức năng: **Sửa** \; Hướng dẫn: **Xóa**; Thông tin: Sửa số hoá đơn từng dòng / sửa phiếu / xoá phiếu; Thông tin: [HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/) / [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/), [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO TRẢ HÀNG NHÀ CUNG CẤP](/bai-viet/2026-11-07-kho-a05-2-huong-dan-lap-phieu-xuat-kho-tra-hang-nha-cung-cap/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày xuất kho**: Ý nghĩa: Ngày trên phiếu xuất
- **Mã phiếu**: Ý nghĩa: Mã phiếu xuất kho (**XK…**), hệ thống tự tạo
- **Từ phiếu**: Ý nghĩa: Mã phiếu bán hàng hoặc phiếu trả hàng NCC gốc
- **Lấy hóa đơn**: Ý nghĩa: Khách có lấy hoá đơn không (chép từ phiếu bán hàng)
- **Gửi Email**: Ý nghĩa: Đã gửi email phiếu cho khách
- **Người nhận**: Ý nghĩa: Tên khách hàng / NCC nhận hàng
- **Tổng tiền**: Ý nghĩa: Tổng thành tiền các dòng (sau chiết khấu, cộng VAT)
- **Mã khách hàng, Mã nhà cung cấp**: Ý nghĩa: Ẩn sẵn, bật ở Trình chọn cột
- **Kho xuất**: Ý nghĩa: Kho xuất hàng
- **Tên tài xế, Biển số xe**: Ý nghĩa: Xe / tài xế giao hàng
- **Mã phiếu gốc**: Ý nghĩa: Mã chứng từ tay / mã phiếu của bên giao nhận
- **Số hóa đơn**: Ý nghĩa: Các **Số HĐ** khác nhau của các dòng hàng, ngăn cách bằng dấu phẩy
- **TT.Ưu tiên**: Ý nghĩa: Thứ tự ưu tiên thanh toán (dùng ở thống kê Công nợ quá hạn)
- **KH Tên rút gọn**: Ý nghĩa: Tên rút gọn khách hàng
- **File đính kèm**: Ý nghĩa: **Số lượng file: n** hoặc **Không có file đính kèm**
- **Ngày đến hạn**: Ý nghĩa: Ngày xuất kho + số ngày nợ
- **Số ngày quá hạn**: Ý nghĩa: Số ngày đã quá hạn thanh toán
- **Thời hạn nợ**: Ý nghĩa: Số ngày nợ
- **Trạng thái trả**: Ý nghĩa: Khách đã trả lại hàng của phiếu này chưa
- **Trạng thái thu**: Ý nghĩa: **Chưa thu** / trạng thái thu tiền theo phiếu thu
- **Lý do xuất**: Ý nghĩa: Ghi chú, lý do xuất
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n** và tổng **Tổng tiền**. Danh sách nhiều cột, kéo thanh cuộn ngang hoặc ẩn bớt cột ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Menu chuột phải trên một dòng phiếu:**

- **Đề nghị sinh chứng từ AMIS (BH, XK, HD)**: Khi nào hiện: Có quyền AMIS, các dòng đã tick đều là xuất bán; Hướng dẫn: Sổ tay Thiết lập – Kết nối AMIS
- **Gộp và Đề nghị sinh chứng từ AMIS (BH, XK, HD)**: Khi nào hiện: Như trên; các dòng tick phải cùng khách hàng; Hướng dẫn: Sổ tay Thiết lập – Kết nối AMIS
- **Xem lại**: Khi nào hiện: Luôn hiện; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Cập nhật ưu tiên t.toán**: Khi nào hiện: Luôn hiện; Hướng dẫn: [HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/)
- **Cập nhật hoá đơn**: Khi nào hiện: Luôn hiện; Hướng dẫn: [HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/)
- **Cập nhật mã phiếu gốc**: Khi nào hiện: Luôn hiện; Hướng dẫn: [HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/)
- **Cập nhật số ngày nợ**: Khi nào hiện: Luôn hiện; Hướng dẫn: [HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/)
- **Cập nhật xe và tài xế**: Khi nào hiện: Luôn hiện; Hướng dẫn: [HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/)
- **In phiếu … (nhiều mẫu)**: Khi nào hiện: Theo loại phiếu và chi nhánh; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-4-huong-dan-in-phieu-xuat-kho/)
- **Gửi mail cho khách**: Khi nào hiện: Người nhận có email và phiếu chưa gửi; Hướng dẫn: [HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/)
- **File đính kèm**: Khi nào hiện: Luôn hiện; Hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)

⚠️ Menu chuột phải **chỉ hiện khi đã tick chọn dòng** ở ô đầu dòng (thử 12/10/2026). Chưa tick dòng nào mà chuột phải thì không có menu (lỗi phần mềm, đã báo IT). Cách làm: tick ô đầu dòng của phiếu cần thao tác rồi chuột phải vào dòng đó. Menu đủ 12 mục: **Xem lại**, **Cập nhật ưu tiên t.toán**, **Cập nhật hoá đơn**, **Cập nhật mã phiếu gốc**, **Cập nhật số ngày nợ**, **Cập nhật xe và tài xế**, **In phiếu ( Mẫu 1, Không giá)**, **( Mẫu 2, Có giá)**, **( Mẫu 3, Có giá)**, **( Mẫu Loại hàng)**, **( Bàn giao)**, **File đính kèm** ([HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/), [HƯỚNG DẪN IN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-4-huong-dan-in-phieu-xuat-kho/)).

Nhấp đúp vào dòng cũng mở **XEM LẠI PHIẾU XUẤT KHO**. Chuột phải vào **tiêu đề cột** để mở menu sắp xếp, nhóm, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

**Vị trí của phiếu xuất kho trong quy trình:**

```text
(Bán hàng) Phiếu bán hàng ── duyệt giá ──┐
                                          ├──► Phiếu xuất kho (Kho)
(Mua hàng) Phiếu trả hàng NCC ───────────┘
      ↓
Lưu phiếu xuất kho
   ├── tồn kho giảm, sổ cái kho thêm dòng xuất
   ├── xuất bán: công nợ khách hàng tăng
   └── xuất trả: công nợ NCC giảm
      ↓
Trạng thái xuất của phiếu gốc: Chưa xuất → Đang xuất → Đã xuất
      ↓
(Kế toán) Phiếu thu tiền khách → Trạng thái thu
```

**Các chức năng trên màn hình:**

```text
Phiếu xuất kho
   ├── Thêm mới ──► Xuất bán hàng (KHO-A05.1) · Xuất trả hàng (KHO-A05.2)
   ├── Sửa ──► số lượng, chú thích, thông tin giao nhận
   ├── Sửa hóa đơn ──► số hoá đơn từng dòng (KHO-A05.3)
   ├── Xóa ──► khi chưa thu tiền, chưa có chứng từ sau
   ├── Chuột phải ──► cập nhật hoá đơn, mã phiếu gốc, số ngày nợ, xe/tài xế
   ├── Chuột phải ──► In phiếu (KHO-A05.4), Gửi mail, File đính kèm
   └── Xuất Excel ──► danh sách phiếu
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm phiếu**: Cách làm: Gõ mã phiếu, người nhận, số hoá đơn vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất hàng giao khách**: Cách làm: **Thêm mới** → **Xuất bán hàng**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/)
- **Xuất hàng trả NCC**: Cách làm: **Thêm mới** → **Xuất trả hàng**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO TRẢ HÀNG NHÀ CUNG CẤP](/bai-viet/2026-11-07-kho-a05-2-huong-dan-lap-phieu-xuat-kho-tra-hang-nha-cung-cap/)
- **Xem chi tiết phiếu**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa số lượng / thông tin giao nhận**: Cách làm: **Sửa** → **CẬP NHẬT PHIẾU XUẤT KHO**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/), [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO TRẢ HÀNG NHÀ CUNG CẤP](/bai-viet/2026-11-07-kho-a05-2-huong-dan-lap-phieu-xuat-kho-tra-hang-nha-cung-cap/)
- **Ghi số hoá đơn cho từng dòng**: Cách làm: **Sửa hóa đơn**; Bài hướng dẫn: [HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/)
- **Ghi số hoá đơn, mã phiếu gốc, số ngày nợ, xe / tài xế**: Cách làm: Chuột phải → **Cập nhật …**; Bài hướng dẫn: [HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/)
- **In phiếu xuất kho**: Cách làm: Chuột phải → **In phiếu …**; Bài hướng dẫn: [HƯỚNG DẪN IN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-4-huong-dan-in-phieu-xuat-kho/)
- **Gửi phiếu cho khách qua email**: Cách làm: Chuột phải → **Gửi mail cho khách**; Bài hướng dẫn: [HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/)
- **Đính kèm file**: Cách làm: Chuột phải → **File đính kèm**; Bài hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **Xoá phiếu**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một phiếu

**Bước 1 –** Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**).

**Bước 2 –** cửa sổ **XEM LẠI PHIẾU XUẤT KHO** mở ra, chỉ xem; không có nút **Lưu lại**.

**Bước 3 –** Bấm **Đóng**.

### Đề nghị sinh chứng từ AMIS

**Bước 1 –** Tick ô đầu dòng các phiếu **xuất bán** cần đẩy sang AMIS (ô).

**Bước 2 –** Chuột phải vào một dòng đã tick → **Đề nghị sinh chứng từ AMIS (BH, XK, HD)** (mỗi phiếu một chứng từ) hoặc **Gộp và Đề nghị sinh chứng từ AMIS (BH, XK, HD)** (gộp các phiếu cùng khách hàng).

**Bước 3 –** Hệ thống báo **Đề nghị sinh chứng từ AMIS thành công.** hoặc câu lỗi. Chi tiết xem sổ tay Thiết lập – Kết nối AMIS.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ phiếu xuất kho: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/)** (xuất bán) và **[HƯỚNG DẪN LẬP PHIẾU XUẤT KHO TRẢ HÀNG NHÀ CUNG CẤP](/bai-viet/2026-11-07-kho-a05-2-huong-dan-lap-phieu-xuat-kho-tra-hang-nha-cung-cap/)** (xuất trả).

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Phiếu xuất kho có những chức năng gì, phiếu xuất kho làm thay đổi tồn kho và công nợ thế nào, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ Thông báo **Đề nghị sinh chứng từ AMIS thành công** xác nhận đã gửi đề nghị. Kiểm tra trạng thái xử lý và chứng từ thực tế ở luồng AMIS theo sổ tay Thiết lập; không kết luận đã sinh đủ BH/XK/HĐ chỉ từ thông báo này.

⚠️ **Lưu phiếu xuất kho là trừ tồn kho ngay** và tăng công nợ khách hàng (xuất bán) / giảm công nợ NCC (xuất trả). Kiểm tra kỹ số lượng trước khi lưu.

⚠️ Không lập được phiếu xuất từ phiếu bán hàng **chưa duyệt giá**. Phiếu bán hàng chưa duyệt không hiện trong danh sách chọn.

⚠️ Phiếu đã **thu tiền** (Trạng thái thu khác **Chưa thu**) thì **không sửa / xoá được**.

⚠️ Phiếu đã có **khách trả hàng**, **phiếu giảm giá** hoặc nằm trong **bảng kê hoa hồng** thì không xoá được (hệ thống báo dữ liệu đã liên kết).

⚠️ Ngày xuất kho thuộc **kỳ kế toán đã khoá** thì không lập / sửa / xoá được.

⚠️ Các mục **Cập nhật …** ở menu chuột phải luôn hiện, nhưng chỉ chạy được khi có quyền **Cập nhật**.

### "CẢNH BÁO – Lỗi xóa: Phiếu "đã thu" tiền" 

Nguyên nhân: phiếu đã có phiếu thu tiền (Trạng thái thu là **Đã thu** / **Đang thu**).
Cách xử lý: đối chiếu khoản thu thực tế và phiếu nguồn với kế toán. Chỉ sửa/đảo chứng từ theo phương án đã chốt; không xóa phiếu thu thực tế chỉ để mở khóa phiếu xuất.

### "CẢNH BÁO – Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: phiếu đã có khách trả hàng, phiếu giảm giá, hoặc nằm trong bảng kê hoa hồng.
Cách xử lý: xoá chứng từ phía sau trước (nếu đúng là nhập nhầm), hoặc liên hệ kế toán.

### "CẢNH BÁO – Lỗi sửa: Phiếu đang được thu tiền" 

Nguyên nhân: phiếu đã có phiếu thu.
Cách xử lý: liên hệ kế toán.

### "CẢNH BÁO – … Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: ngày xuất kho thuộc kỳ kế toán đã khoá.
Cách xử lý: giữ ngày xuất thực tế, liên hệ kế toán trưởng xử lý kỳ khóa; không đổi ngày để vượt khóa.

### Không thấy phiếu vừa lập 

Kiểm tra: khoảng ngày lọc có chứa **Ngày xuất kho**; chi nhánh; tài khoản có được phân kho xuất và nhóm khách hàng của khách đó không.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)) hoặc nhờ quản trị phân kho / nhóm khách hàng.

### Không thấy nút Thêm mới / Sửa / Xóa 

Kiểm tra: quyền tương ứng của màn hình Phiếu xuất kho.
Cách xử lý: liên hệ quản trị hệ thống.

## 10. Câu hỏi thường gặp

**Lưu phiếu xuất kho xong, công nợ khách đã tăng chưa?**
Rồi. Công nợ khách hàng tăng bằng **Tổng tiền** của phiếu xuất kho, không phải tổng phiếu bán hàng.

**Một phiếu bán hàng xuất nhiều lần được không?**
Được. Mỗi lần lập một phiếu xuất kho với số lượng giao đợt đó; lần sau chỉ còn phần chưa xuất.

**Xuất mẫu cho khách xem (không bán) thì làm ở đâu?**
Dùng **Phiếu xuất hàng** ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-0-tong-quan-man-hinh-phieu-xuat-hang/)).

**Cột Số hóa đơn trên danh sách khác cột Số HĐ trong phiếu thế nào?**
**Số HĐ** là số hoá đơn của từng dòng hàng. Cột **Số hóa đơn** trên danh sách ghép các Số HĐ khác nhau của phiếu. Ghi riêng từng dòng bằng liên kết **Sửa hóa đơn**; ghi một số cho mọi dòng bằng chuột phải → **Cập nhật hoá đơn**. Xem [HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/).

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/) – Hướng dẫn lập phiếu xuất kho bán hàng.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/) – Hướng dẫn lập phiếu xuất kho bán hàng
- [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO TRẢ HÀNG NHÀ CUNG CẤP](/bai-viet/2026-11-07-kho-a05-2-huong-dan-lap-phieu-xuat-kho-tra-hang-nha-cung-cap/) – Hướng dẫn lập phiếu xuất kho trả hàng nhà cung cấp
- [HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/) – Hướng dẫn cập nhật hoá đơn và thông tin phiếu xuất kho
- [HƯỚNG DẪN IN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-4-huong-dan-in-phieu-xuat-kho/) – Hướng dẫn in phiếu xuất kho
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-0-tong-quan-man-hinh-phieu-xuat-hang/) – Tổng quan màn hình Phiếu xuất hàng
- [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/) – Tổng quan màn hình Sổ cái kho
- Sổ tay Bán hàng – Phiếu bán hàng (BH-A03), Khách trả hàng (BH-A04), Xuất bán chi tiết ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT BÁN CHI TIẾT](/bai-viet/2026-11-07-bh-b05-0-tong-quan-man-hinh-thong-ke-xuat-ban-chi-tiet/))
- Sổ tay Mua hàng – [TỔNG QUAN MÀN HÌNH PHIẾU TRẢ HÀNG](/bai-viet/2026-11-07-mh-a04-0-tong-quan-man-hinh-phieu-tra-hang/) Phiếu trả hàng
- Sổ tay Kế toán – Công nợ khách hàng ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/)), Công nợ quá hạn ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ QUÁ HẠN](/bai-viet/2026-11-07-kt-c03-0-tong-quan-man-hinh-thong-ke-cong-no-qua-han/))
