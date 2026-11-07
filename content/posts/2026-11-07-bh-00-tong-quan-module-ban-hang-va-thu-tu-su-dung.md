---
title: "TỔNG QUAN MODULE BÁN HÀNG VÀ THỨ TỰ SỬ DỤNG"
date: "2026-11-07"
summary: "Thao tác đăng nhập, đăng xuất, đổi mật khẩu và sử dụng ERP cơ bản được hướng dẫn trong Sổ tay Hướng dẫn chung (HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU đến HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM)."
module: "Bán hàng"
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

Thao tác đăng nhập, đăng xuất, đổi mật khẩu và sử dụng ERP cơ bản được hướng dẫn trong **Sổ tay Hướng dẫn chung ([HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/) đến [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/))**. Đọc các bài GEN liên quan trước; sổ tay này hướng dẫn nghiệp vụ của phân hệ.

phân hệ Bán hàng ghi nhận toàn bộ việc bán hàng hoá và dịch vụ cho **khách hàng** trên Hồng Nghi ERP: ký hợp đồng, nhận đơn đặt hàng sản xuất, lập phiếu bán hàng và duyệt giá, bán dịch vụ, nhận hàng khách trả, giảm giá sau bán và tính hoa hồng. Các phiếu của phân hệ này là **đầu vào** cho phân hệ Kho hàng (xuất kho bán, nhập kho hàng trả), Sản xuất (lên kế hoạch theo đơn đặt hàng) và Kế toán (công nợ khách hàng, phiếu thu, phiếu chi).

Bài này giúp bạn:

- Biết phân hệ có những màn hình nào và nằm ở đâu trên menu.
- Hiểu phiếu nào làm phát sinh tồn kho, công nợ khách hàng, và ở bước nào.
- Biết nên đọc bài hướng dẫn nào trước, bài nào sau.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có tài khoản đăng nhập Hồng Nghi ERP và đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/), [HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)). Mọi danh sách phiếu bán chỉ hiện phiếu của chi nhánh đang làm việc.
- Danh mục đã có dữ liệu (sổ tay **Thiết lập danh mục**): **Khách hàng** (kèm **Mã số thuế / CCCD**, địa chỉ giao hàng, số điện thoại, số ngày nợ, cờ khách cá nhân), **Hàng hoá** (đơn vị tính, trọng lượng, m³, quy đổi đơn vị phụ), **Kho hàng**, **Bảng giá** bán (nếu dùng), **Định mức / yêu cầu gia công** và **Số mặt** (cho phiếu đặt hàng sản xuất).
- Tài khoản được gán **nhóm khách hàng** phù hợp: danh sách phiếu bán hàng chỉ hiện phiếu của khách thuộc nhóm khách hàng mà tài khoản được phân (trừ tài khoản quản trị).
- Được cấp quyền truy cập các màn hình của phân hệ Bán hàng.

## 2. Mở chức năng

**Bán hàng / Thống kê bán hàng**

## 3. Nhận biết màn hình

Trên thanh menu bên trái có 2 nhóm menu của phân hệ:

```text
Bán hàng
 ├── Hợp đồng
 ├── Phiếu đặt hàng
 ├── Phiếu bán hàng
 ├── Khách trả hàng
 ├── Phiếu giảm giá
 ├── Phiếu bán dịch vụ
 └── Bảng kê hoa hồng
Thống kê bán hàng
 ├── Tần suất mua hàng
 ├── Đặt hàng chi tiết
 ├── Bán hàng chi tiết
 ├── Bán dịch vụ
 ├── Xuất bán chi tiết
 ├── Khách trả hàng
 ├── Giảm giá chi tiết
 ├── Lịch sử giá xuất
 ├── Bảng so sánh giá
 ├── Biến động giá bán
 ├── Doanh số bảng giá
 └── Doanh số bán hàng
```

Bấm vào tên nhóm để mở danh sách màn hình bên trong ([HƯỚNG DẪN BỐ CỤC MÀN HÌNH VÀ TÌM CHỨC NĂNG](/bai-viet/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/)).

![Hình 1: Nhóm menu Bán hàng (khung trái) và Thống kê bán hàng (khung phải)](/posts/2026-11-07-bh-00-tong-quan-module-ban-hang-va-thu-tu-su-dung/hinh-01-menu-ban-hang.png)

Khung đỏ bên trái là nhóm **Bán hàng** (7 màn hình), khung đỏ bên phải là nhóm **Thống kê bán hàng** (12 màn hình). Thứ tự mục trên menu trùng thứ tự mã bài trong hai bảng dưới.

**Phần A – Bán hàng** (khung trái Hình 1):

- **BH-A01**: Màn hình: Hợp đồng; Dùng để: Lưu hợp đồng với khách (loại, số, thời gian nợ, ngày ký, hết hạn), soạn và in văn bản hợp đồng. Số hợp đồng còn hiệu lực tự hiện trên phiếu bán hàng
- **BH-A02**: Màn hình: Phiếu đặt hàng; Dùng để: Nhận đơn **đặt hàng sản xuất** của khách: hàng trơn + yêu cầu gia công + số mặt → thành phẩm. Là nguồn để bộ phận sản xuất lên kế hoạch, và để lập phiếu bán hàng khi thành phẩm đã nhập kho
- **BH-A03**: Màn hình: Phiếu bán hàng; Dùng để: Lập đơn bán cho khách (giá, chiết khấu, VAT, kho xuất), gửi duyệt giá, in phiếu / báo giá. Là nguồn để thủ kho lập **phiếu xuất kho bán hàng**
- **BH-A04**: Màn hình: Khách trả hàng; Dùng để: Ghi nhận hàng khách trả lại, lập từ phiếu xuất kho (hoặc trả đầu kỳ). Là nguồn để thủ kho lập **phiếu nhập kho hàng trả**
- **BH-A05**: Màn hình: Phiếu giảm giá; Dùng để: Giảm giá cho khách sau khi đã xuất kho, theo từng dòng của phiếu xuất. Trừ công nợ hoặc chi tiền cho khách
- **BH-A06**: Màn hình: Phiếu bán dịch vụ; Dùng để: Bán dịch vụ (phí vận chuyển, bảo hiểm…). Dùng chung giao diện với phiếu bán hàng; **ghi công nợ khách ngay khi lưu**
- **BH-A07**: Màn hình: Bảng kê hoa hồng; Dùng để: Tính hoa hồng trên các dòng hàng đã xuất cho một khách, duyệt, xác nhận và chi tiền

**Phần B – Thống kê bán hàng** (khung phải Hình 1; mỗi màn một bài tổng quan):

- **BH-B01**: Màn hình: Tần suất mua hàng; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ TẦN SUẤT MUA HÀNG](/bai-viet/2026-11-07-bh-b01-0-tong-quan-man-hinh-thong-ke-tan-suat-mua-hang/) – Tổng quan màn hình Tần suất mua hàng
- **BH-B02**: Màn hình: Đặt hàng chi tiết; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ ĐẶT HÀNG CHI TIẾT](/bai-viet/2026-11-07-bh-b02-0-tong-quan-man-hinh-thong-ke-dat-hang-chi-tiet/) – Tổng quan màn hình Đặt hàng chi tiết
- **BH-B03**: Màn hình: Bán hàng chi tiết; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN HÀNG CHI TIẾT](/bai-viet/2026-11-07-bh-b03-0-tong-quan-man-hinh-thong-ke-ban-hang-chi-tiet/) – Tổng quan màn hình Bán hàng chi tiết
- **BH-B04**: Màn hình: Bán dịch vụ; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-b04-0-tong-quan-man-hinh-thong-ke-ban-dich-vu/) – Tổng quan màn hình Bán dịch vụ
- **BH-B05**: Màn hình: Xuất bán chi tiết; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT BÁN CHI TIẾT](/bai-viet/2026-11-07-bh-b05-0-tong-quan-man-hinh-thong-ke-xuat-ban-chi-tiet/) – Tổng quan màn hình Xuất bán chi tiết
- **BH-B06**: Màn hình: Khách trả hàng; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-b06-0-tong-quan-man-hinh-thong-ke-khach-tra-hang/) – Tổng quan màn hình Khách trả hàng
- **BH-B07**: Màn hình: Giảm giá chi tiết; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ GIẢM GIÁ CHI TIẾT](/bai-viet/2026-11-07-bh-b07-0-tong-quan-man-hinh-thong-ke-giam-gia-chi-tiet/) – Tổng quan màn hình Giảm giá chi tiết
- **BH-B08**: Màn hình: Lịch sử giá xuất; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ LỊCH SỬ GIÁ XUẤT](/bai-viet/2026-11-07-bh-b08-0-tong-quan-man-hinh-thong-ke-lich-su-gia-xuat/) – Tổng quan màn hình Lịch sử giá xuất
- **BH-B09**: Màn hình: Bảng so sánh giá; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH BẢNG SO SÁNH GIÁ](/bai-viet/2026-11-07-bh-b09-0-tong-quan-man-hinh-bang-so-sanh-gia/) – Tổng quan màn hình Bảng so sánh giá
- **BH-B10**: Màn hình: Biến động giá bán; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ BIẾN ĐỘNG GIÁ BÁN](/bai-viet/2026-11-07-bh-b10-0-tong-quan-man-hinh-thong-ke-bien-dong-gia-ban/) – Tổng quan màn hình Biến động giá bán
- **BH-B11**: Màn hình: Doanh số bảng giá; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BẢNG GIÁ](/bai-viet/2026-11-07-bh-b11-0-tong-quan-man-hinh-thong-ke-doanh-so-bang-gia/) – Tổng quan màn hình Doanh số bảng giá
- **BH-B12**: Màn hình: Doanh số bán hàng; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/) – Tổng quan màn hình Doanh số bán hàng

## 4. Trình tự công việc

**Quy trình nghiệp vụ tổng thể (Business Workflow):**

```text
 THIẾT LẬP (sổ tay Thiết lập danh mục)
   Khách hàng · Hàng hoá · Kho hàng · Bảng giá bán · Định mức gia công
                     ↓
 HỢP ĐỒNG (tuỳ chọn)                 Hợp đồng (BH-A01)
                     ↓
 ĐẶT HÀNG SẢN XUẤT (tuỳ chọn)        Phiếu đặt hàng (BH-A02) → Kích hoạt
   → (Sản xuất) lên kế hoạch, nhập kho thành phẩm
                     ↓
 BÁN HÀNG                            Phiếu bán hàng (BH-A03)
   Lập tay / Từ phiếu đặt hàng / Excel    └── Gửi yêu cầu → Duyệt giá
                     ↓
 XUẤT KHO (sổ tay Kho hàng)          Phiếu xuất kho "Xuất bán hàng" (KHO-A05.1)
   → giảm tồn kho, tăng công nợ khách
                     ↓
 SAU BÁN (nếu có)
   ├── Khách trả hàng (BH-A04) → (Kho) nhập kho hàng trả (KHO-A04.2)
   ├── Phiếu giảm giá (BH-A05) → trừ công nợ / chi tiền
   └── Bảng kê hoa hồng (BH-A07) → chi tiền hoa hồng
                     ↓
 THU TIỀN (sổ tay Kế toán)           Phiếu thu của khách → giảm công nợ
```

**Bán dịch vụ (song song):**

```text
Phiếu bán dịch vụ (BH-A06) ──► tăng công nợ khách ngay khi lưu
        └──► Phiếu thu (sổ tay Kế toán)
```

**Phiếu nào làm thay đổi gì:**

- **Hợp đồng**: Tồn kho: Không; Công nợ khách hàng: Không
- **Phiếu đặt hàng**: Tồn kho: Không; Công nợ khách hàng: Không
- **Phiếu bán hàng**: Tồn kho: Không giảm tồn; **giữ hàng** (tồn được xuất giảm); Công nợ khách hàng: Không
- **Phiếu xuất kho bán hàng (Kho)**: Tồn kho: Giảm; Công nợ khách hàng: Tăng
- **Phiếu bán dịch vụ**: Tồn kho: Không; Công nợ khách hàng: **Tăng ngay khi lưu**
- **Phiếu khách trả hàng**: Tồn kho: Không; Công nợ khách hàng: Không
- **Phiếu nhập kho hàng khách trả (Kho)**: Tồn kho: Tăng; Công nợ khách hàng: Giảm
- **Phiếu giảm giá – hình thức Trừ công nợ**: Tồn kho: Không; Công nợ khách hàng: **Giảm khi kế toán bấm Xác nhận**
- **Phiếu giảm giá – hình thức Chi tiền**: Tồn kho: Không; Công nợ khách hàng: Không (kế toán lập phiếu chi)
- **Bảng kê hoa hồng**: Tồn kho: Không; Công nợ khách hàng: Không (kế toán lập phiếu chi)
- **Phiếu thu của khách (Kế toán)**: Tồn kho: Không; Công nợ khách hàng: Giảm

**Phối hợp giữa các bộ phận (Swimlane):**

1. **Kinh doanh:** lập phiếu bán hàng và gửi yêu cầu; người duyệt phê duyệt hoặc từ chối. Kinh doanh nhận thông báo kết quả.
2. **Thủ kho:** thực hiện xuất kho bán hàng theo luồng chứng từ; với phiếu khách trả hàng, thực hiện nhập kho hàng trả.
4. **Kế toán:** xác nhận phiếu giảm giá hoặc bảng kê hoa hồng đã duyệt và thực hiện chi tiền theo nghiệp vụ tương ứng.
5. **Kế toán:** lập phiếu thu khách hàng khi thu tiền.

*Sơ đồ phối hợp là cách chia việc tham khảo. Việc ai làm bước nào phụ thuộc quy định nội bộ và quyền được cấp.*

### Bước 1 – Mở nhóm menu Bán hàng

Ở thanh menu bên trái, bấm **Bán hàng**. Danh sách 7 màn hình hiện ra bên dưới (Hình 1).

### Bước 2 – Mở màn hình cần làm

Bấm vào tên màn hình, ví dụ **Phiếu bán hàng**. Hệ thống mở danh sách phiếu, mặc định lọc **Hôm nay**. Cách lọc khoảng ngày xem **Sổ tay Hướng dẫn chung, [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)**.

Tìm nhanh chức năng: xem **Sổ tay Hướng dẫn chung, [HƯỚNG DẪN BỐ CỤC MÀN HÌNH VÀ TÌM CHỨC NĂNG](/bai-viet/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/)**.

### Mục lục bài hướng dẫn

**Phần A – Bán hàng:**

- **[TỔNG QUAN MÀN HÌNH HỢP ĐỒNG](/bai-viet/2026-11-07-bh-a01-0-tong-quan-man-hinh-hop-dong/)**: Bài: Tổng quan màn hình Hợp đồng
- **[HƯỚNG DẪN LẬP HỢP ĐỒNG BÁN HÀNG](/bai-viet/2026-11-07-bh-a01-1-huong-dan-lap-hop-dong-ban-hang/)**: Bài: Hướng dẫn lập hợp đồng bán hàng
- **[HƯỚNG DẪN IN HỢP ĐỒNG](/bai-viet/2026-11-07-bh-a01-2-huong-dan-in-hop-dong/)**: Bài: Hướng dẫn in hợp đồng
- **[TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-0-tong-quan-man-hinh-phieu-dat-hang/)**: Bài: Tổng quan màn hình Phiếu đặt hàng
- **[HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG SẢN XUẤT](/bai-viet/2026-11-07-bh-a02-1-huong-dan-lap-phieu-dat-hang-san-xuat/)**: Bài: Hướng dẫn lập phiếu đặt hàng sản xuất
- **[HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU ĐẶT HÀNG TỪ EXCEL](/bai-viet/2026-11-07-bh-a02-2-huong-dan-nhap-chi-tiet-phieu-dat-hang-tu-excel/)**: Bài: Hướng dẫn nhập chi tiết phiếu đặt hàng từ Excel
- **[HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-3-huong-dan-tat-toan-phieu-dat-hang/)**: Bài: Hướng dẫn tất toán phiếu đặt hàng
- **[HƯỚNG DẪN IN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-4-huong-dan-in-phieu-dat-hang/)**: Bài: Hướng dẫn in phiếu đặt hàng
- **[TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/)**: Bài: Tổng quan màn hình Phiếu bán hàng
- **[HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/)**: Bài: Hướng dẫn lập phiếu bán hàng
- **[HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a03-2-huong-dan-lap-phieu-ban-hang-tu-phieu-dat-hang/)**: Bài: Hướng dẫn lập phiếu bán hàng từ phiếu đặt hàng
- **[HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU BÁN HÀNG TỪ EXCEL](/bai-viet/2026-11-07-bh-a03-3-huong-dan-nhap-chi-tiet-phieu-ban-hang-tu-excel/)**: Bài: Hướng dẫn nhập chi tiết phiếu bán hàng từ Excel
- **[HƯỚNG DẪN GỬI YÊU CẦU VÀ DUYỆT GIÁ PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/)**: Bài: Hướng dẫn gửi yêu cầu và duyệt giá phiếu bán hàng
- **[HƯỚNG DẪN TẤT TOÁN PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-5-huong-dan-tat-toan-phieu-ban-hang/)**: Bài: Hướng dẫn tất toán phiếu bán hàng
- **[HƯỚNG DẪN IN PHIẾU BÁN HÀNG VÀ BẢNG BÁO GIÁ](/bai-viet/2026-11-07-bh-a03-6-huong-dan-in-phieu-ban-hang-va-bang-bao-gia/)**: Bài: Hướng dẫn in phiếu bán hàng và bảng báo giá
- **[TỔNG QUAN MÀN HÌNH KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-0-tong-quan-man-hinh-khach-tra-hang/)**: Bài: Tổng quan màn hình Khách trả hàng
- **[HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)**: Bài: Hướng dẫn lập phiếu khách trả hàng từ phiếu xuất kho
- **[HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-bh-a04-2-huong-dan-lap-phieu-khach-tra-hang-dau-ky/)**: Bài: Hướng dẫn lập phiếu khách trả hàng đầu kỳ
- **[HƯỚNG DẪN IN PHIẾU KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-3-huong-dan-in-phieu-khach-tra-hang/)**: Bài: Hướng dẫn in phiếu khách trả hàng
- **[TỔNG QUAN MÀN HÌNH PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-0-tong-quan-man-hinh-phieu-giam-gia/)**: Bài: Tổng quan màn hình Phiếu giảm giá
- **[HƯỚNG DẪN LẬP PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-1-huong-dan-lap-phieu-giam-gia/)**: Bài: Hướng dẫn lập phiếu giảm giá
- **[HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-2-huong-dan-duyet-xac-nhan-va-chi-tien-phieu-giam-gia/)**: Bài: Hướng dẫn duyệt, xác nhận và chi tiền phiếu giảm giá
- **[HƯỚNG DẪN IN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-3-huong-dan-in-phieu-giam-gia/)**: Bài: Hướng dẫn in phiếu giảm giá
- **[TỔNG QUAN MÀN HÌNH PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-0-tong-quan-man-hinh-phieu-ban-dich-vu/)**: Bài: Tổng quan màn hình Phiếu bán dịch vụ
- **[HƯỚNG DẪN LẬP PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-1-huong-dan-lap-phieu-ban-dich-vu/)**: Bài: Hướng dẫn lập phiếu bán dịch vụ
- **[TỔNG QUAN MÀN HÌNH BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-0-tong-quan-man-hinh-bang-ke-hoa-hong/)**: Bài: Tổng quan màn hình Bảng kê hoa hồng
- **[HƯỚNG DẪN LẬP BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-1-huong-dan-lap-bang-ke-hoa-hong/)**: Bài: Hướng dẫn lập bảng kê hoa hồng
- **[HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-2-huong-dan-duyet-xac-nhan-va-chi-tien-bang-ke-hoa-hong/)**: Bài: Hướng dẫn duyệt, xác nhận và chi tiền bảng kê hoa hồng
- **[HƯỚNG DẪN IN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-3-huong-dan-in-bang-ke-hoa-hong/)**: Bài: Hướng dẫn in bảng kê hoa hồng

**Phần B – Thống kê bán hàng:** [TỔNG QUAN MÀN HÌNH THỐNG KÊ TẦN SUẤT MUA HÀNG](/bai-viet/2026-11-07-bh-b01-0-tong-quan-man-hinh-thong-ke-tan-suat-mua-hang/) → [TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/), mỗi màn một bài tổng quan (bảng ở phần “Nhận biết màn hình”).

**Tra cứu ở Sổ tay Hướng dẫn chung:** [HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/) → [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/), [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/), [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/).

## 6. Kiểm tra sau khi thực hiện

Bạn nắm được phân hệ Bán hàng gồm những màn hình nào, phiếu nào làm phát sinh tồn kho và công nợ khách hàng, và thứ tự công việc từ lúc ký hợp đồng, nhận đơn đến khi xuất kho và thu tiền.

## 7. Những điều cần lưu ý

⚠️ **Phiếu bán hàng chưa làm giảm tồn kho và chưa tăng công nợ.** Hàng chỉ rời kho, công nợ khách chỉ tăng khi thủ kho lập **phiếu xuất kho bán hàng** ([HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/)). Tuy vậy, ngay khi lưu phiếu bán hàng, số lượng bán được **giữ lại** (tồn được xuất của kho giảm), nên đơn khác có thể báo không đủ tồn.

⚠️ **Phiếu bán hàng phải được duyệt giá thì mới xuất kho được.** Gửi yêu cầu duyệt giá ngay sau khi lập phiếu ([HƯỚNG DẪN GỬI YÊU CẦU VÀ DUYỆT GIÁ PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/)).

⚠️ **Phiếu bán dịch vụ ghi công nợ khách ngay khi lưu**; sửa / xoá phiếu thì công nợ được tính lại theo.

⚠️ **Phiếu khách trả hàng chưa làm tăng tồn kho, chưa giảm công nợ.** Chỉ khi thủ kho lập **phiếu nhập kho** từ phiếu khách trả ([HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/)) thì tồn kho mới tăng, công nợ mới giảm.

⚠️ **Phiếu giảm giá hình thức Trừ công nợ** chỉ trừ công nợ khi kế toán bấm **Xác nhận**.

⚠️ Hầu hết các phiếu chỉ **người tạo** mới xoá được. Phiếu đã được dùng ở bước sau (đã xuất kho, đã nhập kho, đã duyệt, đã chi tiền) không sửa / xoá được nữa.

⚠️ Các phiếu của phân hệ Bán hàng **không bị chặn bởi kỳ kế toán đã khoá**; việc khoá sổ chặn ở phiếu kho (xuất kho, nhập kho) và chứng từ kế toán.

### Không thấy nhóm menu Bán hàng hoặc một màn hình trong phân hệ 

Kiểm tra: tài khoản đã được cấp quyền **Truy cập** màn hình đó chưa.
Cách xử lý: liên hệ quản trị hệ thống để được cấp quyền, sau đó đăng xuất và đăng nhập lại.

### Thấy màn hình nhưng không thấy nút Thêm mới / Sửa / Xóa / Tất toán / Duyệt 

Kiểm tra: tài khoản có quyền tương ứng của màn hình đó chưa; trạng thái phiếu có cho phép thao tác không (ví dụ phiếu đã xuất kho thì không còn **Sửa**).
Cách xử lý: liên hệ quản trị hệ thống.

### Danh sách phiếu bán hàng trống dù đồng nghiệp thấy phiếu 

Kiểm tra: khoảng ngày đang lọc (mặc định **Hôm nay**), chi nhánh đang làm việc, và **nhóm khách hàng** được phân cho tài khoản.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)), kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)) hoặc nhờ quản trị phân nhóm khách hàng.

## 9. Câu hỏi thường gặp

**Có bắt buộc lập phiếu đặt hàng trước phiếu bán hàng không?**
Không. Phiếu đặt hàng dùng cho hàng **cần sản xuất / gia công** theo đơn. Hàng có sẵn thì lập phiếu bán hàng trực tiếp.

**Vì sao lập phiếu bán hàng rồi mà công nợ khách chưa tăng?**
Công nợ khách của hàng hoá tăng khi **xuất kho**, không tăng khi lập phiếu bán hàng. Riêng phiếu bán dịch vụ tăng ngay khi lưu.

**Ai được duyệt giá?**
Người được cấp quyền **Duyệt giá** của màn hình Phiếu bán hàng. Những người này nhận thông báo mỗi khi có yêu cầu duyệt giá mới.

**Bảng giá bán nằm ở đâu?**
Ở nhóm menu **Bảng giá / báo giá → Bảng giá mua bán** (sổ tay Thiết lập danh mục), không nằm trong nhóm Bán hàng.

## 10. Công việc tiếp theo

Thứ tự đọc tài liệu đề nghị:

```text
BH-00 Tổng quan phân hệ (bài này)
   ↓
Sổ tay Hướng dẫn chung — GEN-01 → GEN-06: đăng nhập, chi nhánh, menu, lọc, Excel, in
   ↓
BH-A01.1 Hợp đồng (nếu có) · BH-A02.1 Phiếu đặt hàng sản xuất (nếu có)
   ↓
BH-A03.1 Lập phiếu bán hàng → BH-A03.4 Gửi yêu cầu, duyệt giá
   ↓
(Kho) KHO-A05.1 Xuất kho bán hàng
   ↓
BH-A06.1 Bán dịch vụ · BH-A04.1 Khách trả hàng · BH-A05.1 Giảm giá · BH-A07.1 Hoa hồng
```

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/) – Tổng quan màn hình Phiếu bán hàng.

## 11. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH HỢP ĐỒNG](/bai-viet/2026-11-07-bh-a01-0-tong-quan-man-hinh-hop-dong/) – Tổng quan màn hình Hợp đồng
- [TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-0-tong-quan-man-hinh-phieu-dat-hang/) – Tổng quan màn hình Phiếu đặt hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/) – Tổng quan màn hình Phiếu bán hàng
- [TỔNG QUAN MÀN HÌNH KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-0-tong-quan-man-hinh-khach-tra-hang/) – Tổng quan màn hình Khách trả hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-0-tong-quan-man-hinh-phieu-giam-gia/) – Tổng quan màn hình Phiếu giảm giá
- [TỔNG QUAN MÀN HÌNH PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-0-tong-quan-man-hinh-phieu-ban-dich-vu/) – Tổng quan màn hình Phiếu bán dịch vụ
- [TỔNG QUAN MÀN HÌNH BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-0-tong-quan-man-hinh-bang-ke-hoa-hong/) – Tổng quan màn hình Bảng kê hoa hồng
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho; [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/) – Lập phiếu xuất kho bán hàng
- [HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/) – Nhập kho hàng khách trả
- Sổ tay Kế toán – Phiếu thu, Phiếu chi, Thống kê công nợ khách hàng
- Sổ tay Thiết lập danh mục – Khách hàng, Hàng hoá, Kho hàng, Bảng giá mua bán
- Sổ tay Sản xuất – Lên kế hoạch / yêu cầu gia công theo đơn đặt hàng
