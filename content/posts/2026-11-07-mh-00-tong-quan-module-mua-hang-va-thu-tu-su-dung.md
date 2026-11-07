---
title: "TỔNG QUAN MODULE MUA HÀNG VÀ THỨ TỰ SỬ DỤNG"
date: "2026-11-07"
summary: "Thao tác đăng nhập, đăng xuất, đổi mật khẩu và sử dụng ERP cơ bản được hướng dẫn trong Sổ tay Hướng dẫn chung (HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU đến HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM)."
module: "Mua hàng"
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

phân hệ Mua hàng ghi nhận toàn bộ việc mua hàng hoá và dịch vụ từ **nhà cung cấp (NCC)** trên Hồng Nghi ERP: đặt hàng với NCC, lập phiếu mua hàng, mua dịch vụ, trả lại hàng cho NCC. Các phiếu của phân hệ này là **đầu vào** cho phân hệ Kho hàng (nhập kho, xuất trả) và Kế toán (công nợ, phiếu chi).

Bài này giúp bạn:

- Biết phân hệ có những màn hình nào và nằm ở đâu trên menu.
- Hiểu phiếu nào làm phát sinh tồn kho, công nợ NCC, và ở bước nào.
- Biết nên đọc bài hướng dẫn nào trước, bài nào sau.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có tài khoản đăng nhập Hồng Nghi ERP và đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/), [HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)). Mọi danh sách phiếu mua chỉ hiện phiếu của chi nhánh đang làm việc.
- Danh mục đã có dữ liệu (sổ tay **Thiết lập danh mục**): **Nhà cung cấp**, **Hàng hoá** (kèm đơn vị tính, trọng lượng, m³, quy đổi đơn vị phụ), **Kho hàng**, **Bảng giá** mua (nếu dùng).
- Được cấp quyền truy cập các màn hình của phân hệ Mua hàng.

## 2. Mở chức năng

**Mua hàng / Thống kê mua hàng**

## 3. Nhận biết màn hình

Trên thanh menu bên trái có 2 nhóm menu của phân hệ:

```text
Mua hàng
 ├── Phiếu đặt hàng
 ├── Phiếu mua dịch vụ
 ├── Phiếu mua hàng
 └── Phiếu trả hàng
Thống kê mua hàng
 ├── Mua dịch vụ chi tiết
 ├── Hàng chờ nhập kho
 ├── Tiến độ giao hàng
 ├── Nhập mua chi tiết
 ├── Gợi ý mua hàng
 ├── Lịch sử giá nhập
 ├── Biến động giá nhập
 └── Đặt hàng ncc chi tiết
```

Bấm vào tên nhóm để mở danh sách màn hình bên trong ([HƯỚNG DẪN BỐ CỤC MÀN HÌNH VÀ TÌM CHỨC NĂNG](/bai-viet/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/)).

![Hình 1: Nhóm menu Mua hàng và Thống kê mua hàng](/posts/2026-11-07-mh-00-tong-quan-module-mua-hang-va-thu-tu-su-dung/hinh-01-menu-mua-hang.png)

Chất lượng ảnh: ảnh menu nguồn có độ phân giải thấp nên chữ bị mờ khi phóng lớn. Dùng danh sách menu và bảng mã bài trong mục này để đọc chính xác tên chức năng; ảnh chỉ hỗ trợ nhận biết vị trí nhóm menu.

**Phần A –  Mua hàng:**

- **MH-A01**: Màn hình: Phiếu đặt hàng; Dùng để: Đặt hàng với NCC, theo dõi đã mua được bao nhiêu, tất toán phần không mua nữa, in phiếu đặt hàng gửi NCC
- **MH-A02**: Màn hình: Phiếu mua dịch vụ; Dùng để: Ghi nhận dịch vụ mua ngoài (vận chuyển, gia công, sửa chữa…). Ghi công nợ NCC ngay khi lưu
- **MH-A03**: Màn hình: Phiếu mua hàng; Dùng để: Ghi nhận hàng hoá mua của NCC (theo hoá đơn / chứng từ). Là nguồn để thủ kho lập phiếu nhập kho
- **MH-A04**: Màn hình: Phiếu trả hàng; Dùng để: Trả lại hàng cho NCC, lập từ phiếu nhập kho (hoặc trả hàng đầu kỳ). Là nguồn để thủ kho lập phiếu xuất kho trả hàng

**Phần B –  Thống kê mua hàng** (mỗi màn một bài tổng quan):

- **MH-B01**: Màn hình: Mua dịch vụ chi tiết; Dùng để: Liệt kê chi tiết các phiếu mua dịch vụ
- **MH-B02**: Màn hình: Hàng chờ nhập kho; Dùng để: Hàng đã mua nhưng chưa nhập kho hết
- **MH-B03**: Màn hình: Tiến độ giao hàng; Dùng để: Theo dõi tiến độ NCC giao hàng theo phiếu mua
- **MH-B04**: Màn hình: Nhập mua chi tiết; Dùng để: Chi tiết hàng nhập kho từ phiếu mua
- **MH-B05**: Màn hình: Gợi ý mua hàng; Dùng để: Tổng hợp gợi ý số lượng cần mua
- **MH-B06**: Màn hình: Lịch sử giá nhập; Dùng để: Tra giá nhập các lần trước
- **MH-B07**: Màn hình: Biến động giá nhập; Dùng để: So sánh biến động giá nhập theo thời gian
- **MH-B08**: Màn hình: Đặt hàng ncc chi tiết; Dùng để: Chi tiết các dòng đặt hàng NCC và tình trạng đã mua

## 4. Trình tự công việc

**Quy trình nghiệp vụ tổng thể (Business Workflow):**

```text
 THIẾT LẬP (sổ tay Thiết lập danh mục)
   Nhà cung cấp · Hàng hoá · Kho hàng · Bảng giá mua
                     ↓
 ĐẶT HÀNG NCC (tuỳ chọn)            Phiếu đặt hàng (MH-A01)
                     ↓                    └── In phiếu gửi NCC (MH-A01.4)
 MUA HÀNG                            Phiếu mua hàng (MH-A03)
   Lập tay / Từ đơn hàng / Từ bảng giá    └── Tất toán phần không mua (MH-A03.3)
                     ↓
 NHẬP KHO (sổ tay Kho hàng)          Phiếu nhập kho "nhập mua hàng"
   → tăng tồn kho, tăng công nợ NCC
                     ↓
 TRẢ HÀNG NCC (nếu có)               Phiếu trả hàng (MH-A04)
                     ↓
   XUẤT KHO TRẢ HÀNG (sổ tay Kho)     → giảm tồn kho, giảm công nợ NCC
                     ↓
 THANH TOÁN (sổ tay Kế toán)         Phiếu chi cho NCC → giảm công nợ NCC
```

**Dịch vụ mua ngoài (song song):**

```text
Phiếu mua dịch vụ (MH-A02) ──► tăng công nợ NCC ngay khi lưu
        ├──► (tuỳ chọn) phân bổ chi phí vào phiếu nhập kho (sổ tay Kho)
        └──► Phiếu chi cho NCC (sổ tay Kế toán)
```

**Phiếu nào làm thay đổi gì:**

- **Phiếu đặt hàng**: Tồn kho: Không; Công nợ NCC: Không
- **Phiếu mua hàng**: Tồn kho: Không (chỉ tạo "hàng chờ nhập kho"); Công nợ NCC: Không
- **Phiếu nhập kho từ phiếu mua hàng (Kho)**: Tồn kho: Tăng; Công nợ NCC: Tăng
- **Phiếu mua dịch vụ**: Tồn kho: Không; Công nợ NCC: **Tăng ngay khi lưu**
- **Phiếu trả hàng**: Tồn kho: Không (chỉ kiểm tra đủ tồn); Công nợ NCC: Không
- **Phiếu xuất kho từ phiếu trả hàng (Kho)**: Tồn kho: Giảm; Công nợ NCC: Giảm
- **Phiếu chi cho NCC (Kế toán)**: Tồn kho: Không; Công nợ NCC: Giảm

**Phối hợp giữa các bộ phận (Swimlane):**

1. **Nhân viên mua hàng:** lập phiếu đặt hàng nếu cần, rồi lập phiếu mua hàng hoặc phiếu mua dịch vụ.
2. **Thủ kho:** với hàng mua, lập phiếu nhập kho từ phiếu mua hàng khi thực nhận hàng.
3. **Nhân viên mua hàng và thủ kho:** nếu trả hàng NCC, lập phiếu trả hàng rồi lập phiếu xuất kho trả hàng.
4. **Kế toán:** đối chiếu công nợ NCC và lập phiếu chi thanh toán. Phiếu mua dịch vụ ghi công nợ ngay khi lưu, không qua bước nhập hàng vào kho.

*Sơ đồ phối hợp là cách chia việc tham khảo. Việc ai làm bước nào phụ thuộc quy định nội bộ và quyền được cấp.*

### Bước 1 – Mở nhóm menu Mua hàng

Ở thanh menu bên trái, bấm **Mua hàng**. Danh sách 4 màn hình hiện ra bên dưới (Hình 1).

### Bước 2 – Mở màn hình cần làm

Bấm vào tên màn hình, ví dụ **Phiếu mua hàng**. Hệ thống mở danh sách phiếu, mặc định lọc **Hôm nay**. Cách lọc khoảng ngày xem **Sổ tay Hướng dẫn chung, [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)**.

Tìm nhanh chức năng: xem **Sổ tay Hướng dẫn chung, [HƯỚNG DẪN BỐ CỤC MÀN HÌNH VÀ TÌM CHỨC NĂNG](/bai-viet/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/)**.

### Mục lục bài hướng dẫn

**Phần A – Mua hàng:**

- **[TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-mh-a01-0-tong-quan-man-hinh-phieu-dat-hang/)**: Bài: Tổng quan màn hình Phiếu đặt hàng
- **[HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG NHÀ CUNG CẤP](/bai-viet/2026-11-07-huong-dan-lap-phieu-dat-hang-nha-cung-cap/)**: Bài: Hướng dẫn lập phiếu đặt hàng nhà cung cấp
- **[HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU ĐẶT HÀNG TỪ EXCEL](/bai-viet/2026-11-07-huong-dan-nhap-phieu-dat-hang-tu-excel/)**: Bài: Hướng dẫn nhập chi tiết phiếu đặt hàng từ Excel
- **[HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-tat-toan-phieu-dat-hang/)**: Bài: Hướng dẫn tất toán phiếu đặt hàng
- **[HƯỚNG DẪN IN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-in-phieu-dat-hang/)**: Bài: Hướng dẫn in phiếu đặt hàng
- **[TỔNG QUAN MÀN HÌNH PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-0-tong-quan-man-hinh-phieu-mua-dich-vu/)**: Bài: Tổng quan màn hình Phiếu mua dịch vụ
- **[HƯỚNG DẪN LẬP PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-1-huong-dan-lap-phieu-mua-dich-vu/)**: Bài: Hướng dẫn lập phiếu mua dịch vụ
- **[TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/)**: Bài: Tổng quan màn hình Phiếu mua hàng
- **[HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/)**: Bài: Hướng dẫn lập phiếu mua hàng
- **[HƯỚNG DẪN LẬP PHIẾU MUA HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/)**: Bài: Hướng dẫn lập phiếu mua hàng từ phiếu đặt hàng
- **[HƯỚNG DẪN TẤT TOÁN PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-3-huong-dan-tat-toan-phieu-mua-hang/)**: Bài: Hướng dẫn tất toán phiếu mua hàng
- **[TỔNG QUAN MÀN HÌNH PHIẾU TRẢ HÀNG](/bai-viet/2026-11-07-mh-a04-0-tong-quan-man-hinh-phieu-tra-hang/)**: Bài: Tổng quan màn hình Phiếu trả hàng
- **[HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/)**: Bài: Hướng dẫn lập phiếu trả hàng từ phiếu nhập kho
- **[HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-mh-a04-2-huong-dan-lap-phieu-tra-hang-dau-ky/)**: Bài: Hướng dẫn lập phiếu trả hàng đầu kỳ

**Phần B – Thống kê mua hàng:** [TỔNG QUAN MÀN HÌNH THỐNG KÊ MUA DỊCH VỤ CHI TIẾT](/bai-viet/2026-11-07-mh-b01-0-tong-quan-man-hinh-thong-ke-mua-dich-vu-chi-tiet/) → [TỔNG QUAN MÀN HÌNH THỐNG KÊ ĐẶT HÀNG NCC CHI TIẾT](/bai-viet/2026-11-07-mh-b08-0-tong-quan-man-hinh-thong-ke-dat-hang-ncc-chi-tiet/), mỗi màn một bài tổng quan (bảng ở phần “Nhận biết màn hình”).

**Tra cứu ở Sổ tay Hướng dẫn chung:** [HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/) → [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/), [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/), [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/).

## 6. Kiểm tra sau khi thực hiện

Bạn nắm được phân hệ Mua hàng gồm những màn hình nào, phiếu nào làm phát sinh tồn kho và công nợ NCC, và thứ tự công việc từ lúc đặt hàng đến khi thanh toán.

## 7. Những điều cần lưu ý

⚠️ **Phiếu mua hàng chưa làm tăng tồn kho và công nợ.** Hàng chỉ vào kho, công nợ NCC chỉ tăng khi thủ kho lập **phiếu nhập kho** từ phiếu mua hàng. Ngược lại, **phiếu mua dịch vụ ghi công nợ NCC ngay khi lưu**.

⚠️ **Phiếu trả hàng chưa làm giảm tồn kho và công nợ.** Chỉ khi thủ kho lập **phiếu xuất kho** từ phiếu trả hàng thì tồn kho và công nợ mới giảm.

⚠️ Điều kiện sửa/xóa tùy loại phiếu và chứng từ liên quan. Nếu bị chặn do người tạo, trạng thái hoặc liên kết, đối chiếu mã phiếu và chuyển người phụ trách duyệt phương án; không xóa chứng từ phía sau chỉ để bỏ chặn.

⚠️ Nên làm đúng thứ tự: có **Nhà cung cấp** và **Hàng hoá** trong danh mục trước khi lập phiếu.

### Không thấy nhóm menu Mua hàng hoặc một màn hình trong phân hệ 

Kiểm tra: tài khoản đã được cấp quyền **Truy cập** màn hình đó chưa.
Cách xử lý: liên hệ quản trị hệ thống để được cấp quyền, sau đó đăng xuất và đăng nhập lại.

### Thấy màn hình nhưng không thấy nút Thêm mới / Sửa / Xóa / Tất toán 

Kiểm tra: tài khoản có quyền **Thêm mới / Cập nhật / Xoá / Tất toán** của màn hình đó chưa.
Cách xử lý: liên hệ quản trị hệ thống.

### Danh sách trống dù đã lập phiếu 

Kiểm tra: khoảng ngày đang lọc (mặc định **Hôm nay**) và chi nhánh đang làm việc.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)) hoặc kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).

## 9. Câu hỏi thường gặp

**Có bắt buộc lập phiếu đặt hàng trước phiếu mua hàng không?**
Không. Phiếu mua hàng có thể lập trực tiếp. Phiếu đặt hàng dùng khi cần gửi đơn cho NCC và theo dõi đã mua được bao nhiêu.

**Vì sao lập phiếu mua hàng rồi mà công nợ NCC chưa tăng?**
Công nợ NCC của hàng hoá tăng khi **nhập kho**, không tăng khi lập phiếu mua hàng.

**Mua dịch vụ có cần nhập kho không?**
Không. Phiếu mua dịch vụ ghi công nợ ngay khi lưu.

## 10. Công việc tiếp theo

Thứ tự đọc tài liệu đề nghị:

1. **[TỔNG QUAN MODULE MUA HÀNG VÀ THỨ TỰ SỬ DỤNG](/bai-viet/2026-11-07-mh-00-tong-quan-module-mua-hang-va-thu-tu-su-dung/):** đọc tổng quan phân hệ trong bài này.
2. **Sổ tay Hướng dẫn chung, [HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/) đến [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/):** làm quen đăng nhập, chi nhánh, menu, lọc dữ liệu, xuất Excel và in.
3. **[HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG NHÀ CUNG CẤP](/bai-viet/2026-11-07-huong-dan-lap-phieu-dat-hang-nha-cung-cap/):** lập phiếu đặt hàng nếu có bước đặt hàng trước.
4. **[HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/) hoặc [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/):** lập phiếu mua hàng trực tiếp hoặc từ phiếu đặt hàng, sau đó chuyển sang sổ tay Kho hàng để lập phiếu nhập kho.
5. **[HƯỚNG DẪN LẬP PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-1-huong-dan-lap-phieu-mua-dich-vu/):** dùng khi mua dịch vụ. **[HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/):** dùng khi cần trả hàng NCC từ phiếu nhập kho.

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-mh-a01-0-tong-quan-man-hinh-phieu-dat-hang/) – Tổng quan màn hình Phiếu đặt hàng.

## 11. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-mh-a01-0-tong-quan-man-hinh-phieu-dat-hang/) – Tổng quan màn hình Phiếu đặt hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-0-tong-quan-man-hinh-phieu-mua-dich-vu/) – Tổng quan màn hình Phiếu mua dịch vụ
- [TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/) – Tổng quan màn hình Phiếu mua hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU TRẢ HÀNG](/bai-viet/2026-11-07-mh-a04-0-tong-quan-man-hinh-phieu-tra-hang/) – Tổng quan màn hình Phiếu trả hàng
- Sổ tay Kho hàng – Phiếu nhập kho, Phiếu xuất kho
- Sổ tay Kế toán – Phiếu chi, Thống kê công nợ nhà cung cấp
- Sổ tay Thiết lập danh mục – Nhà cung cấp, Hàng hoá, Bảng giá
