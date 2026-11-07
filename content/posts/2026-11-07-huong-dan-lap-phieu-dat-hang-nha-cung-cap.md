---
title: "HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG NHÀ CUNG CẤP"
date: 2026-11-07
summary: "Phiếu đặt hàng ghi lại đơn hàng bạn gửi nhà cung cấp: mặt hàng, số lượng, đơn giá, chiết khấu, thuế VAT và ngày dự kiến nhận hàng."
module: "Mua hàng"
category: huong-dan
version: "v5.0.0"
isNew: true
scope: "Người dùng được cấp quyền chức năng"
department: ""
mediaType: none
tags: []
pinImportant: false
pinned: false
draft: true
---

## Chức năng này dùng để làm gì?

Phiếu đặt hàng ghi lại đơn hàng bạn gửi **nhà cung cấp**: mặt hàng, số lượng, đơn giá, chiết khấu, thuế VAT và ngày dự kiến nhận hàng. Sau này, khi nhà cung cấp giao, bạn lập phiếu mua hàng **Từ đơn hàng** để lấy lại các dòng này mà không phải gõ lại.

> Các nút và màn hình hiển thị tùy quyền tài khoản. Bài được biên soạn từ bộ hướng dẫn hiện có; ảnh là giao diện tham khảo trong tài liệu nguồn.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu đặt hàng**.
- Nhà cung cấp đã có trong danh mục **Nhà cung cấp**; các mặt hàng đã có trong danh mục **Hàng hoá** (kèm đơn vị tính).
- Chuẩn bị: danh sách hàng cần đặt, số lượng, đơn giá thoả thuận, % chiết khấu, % VAT, ngày dự kiến nhận hàng.

## 2. Mở chức năng

**Mua hàng → Phiếu đặt hàng → Thêm mới**

![Hình 1: Form THÊM MỚI - PHIẾU ĐẶT HÀNG](/posts/2026-11-07-huong-dan-lap-phieu-dat-hang-nha-cung-cap/HINH_01_form-them-phieu-dat-hang.png)

### Bước 1 – Mở form thêm mới

Vào **Mua hàng → Phiếu đặt hàng**, bấm **Thêm mới**. Form **THÊM MỚI - PHIẾU ĐẶT HÀNG** mở ra (Hình 1).

### Bước 2 – Nhập thông tin chung

- **NGÀY ĐẶT HÀNG**: mặc định hôm nay, đổi nếu cần.
- **NHÀ CUNG CẤP**: bấm vào ô, gõ tên hoặc mã nhà cung cấp rồi chọn. Hệ thống tự điền **NỢ CŨ**, **ĐỊA CHỈ**, **ĐIỆN THOẠI**.
- **NGÀY NHẬN HÀNG**: ngày nhà cung cấp hẹn giao (không bắt buộc).
- **GHI CHÚ**: ví dụ điều kiện giao hàng, người liên hệ.

### Bước 3 – Nhập chi tiết hàng hoá

1. Bấm vào ô **Hàng hóa** ở dòng trống (hoặc **Thêm một hàng**). Gõ mã hoặc tên hàng, chọn đúng mặt hàng. Mỗi mặt hàng trong danh sách thả xuống hiện kèm 3 con số trong ngoặc (thông tin tồn kho).
2. Hệ thống tự điền **Đvt** và tự thêm một dòng trống bên dưới để nhập tiếp.
3. Nhập **Số lượng**, **Đơn giá**, **Chiết khấu**, **Thuế VAT**, **Chú thích** (nếu có). **Đơn giá VAT** và **Thành tiền** tự tính.

![Hình 2: Nhập chi tiết hàng hoá phiếu đặt hàng](/posts/2026-11-07-huong-dan-lap-phieu-dat-hang-nha-cung-cap/HINH_02_nhap-chi-tiet-dat-hang.png)

Mẹo nhập nhanh – bấm chuột phải vào một ô của dòng:

- Ở cột **Số lượng**, **Đơn giá**, **Chiết khấu**, **Thuế VAT**, **Chú thích**: chọn **Áp dụng cho những dòng dưới** để chép giá trị ô này xuống các dòng bên dưới.
- Ở cột **Thuế VAT**: chọn **8% và cho những dòng dưới** để đặt VAT 8% cho dòng này và các dòng dưới.
- Kéo biểu tượng đầu dòng để đổi thứ tự dòng. Nút **+** ở cột Thao tác chèn một dòng trống tại vị trí đó.

Nếu có sẵn danh sách hàng trong Excel, dùng **Tải lên từ Excel**.

### Bước 4 – Bấm Lưu lại

Bấm **Lưu lại**.

- Thiếu ngày hoặc nhà cung cấp: ô viền đỏ, dưới form hiện **Chọn ngày đặt hàng** / **Vui lòng chọn nhà cung cấp**.
- Dòng chi tiết sai: góc màn hình hiện cảnh báo dạng **<số dòng>. <nội dung>**, ví dụ **2. Số lượng >= 0** hoặc **3. Chiết khấu trong khoảng 0 -> 100%**.
- Hợp lệ: hiện **Lưu thành công**, form đóng, danh sách tự tải lại.

Dòng để trống **Hàng hóa** (dòng trống cuối bảng) không được lưu.

### Bước 5 – Kiểm tra phiếu vừa lập

Trong danh sách, phiếu mới có **Mã phiếu** do hệ thống cấp, **Trạng thái nhận** = **Chưa nhận**. Nếu không thấy, kiểm tra khoảng ngày đang lọc có chứa **Ngày đặt hàng** không.

### Sửa phiếu

Bấm **Sửa** ở dòng phiếu → form **CẬP NHẬT - PHIẾU ĐẶT HÀNG**. Sửa như Bước 2–3 rồi **Lưu lại**. Chỉ sửa được khi chưa có dòng nào được lấy vào phiếu mua hàng.

## 4. Kiểm tra sau khi lưu

- Phiếu được lưu với mã tự động, hiện trong **PHIẾU ĐẶT HÀNG nhà cung cấp - DANH SÁCH**, **Trạng thái nhận** = **Chưa nhận**.
- Các dòng hàng của phiếu xuất hiện trong cửa sổ chọn **Từ đơn hàng** khi lập phiếu mua hàng.
- Tồn kho và công nợ nhà cung cấp **không** thay đổi.

## 5. Những điều cần lưu ý

⚠️ **Đơn giá không tự lấy** trên phiếu đặt hàng. Nhập đúng giá thoả thuận vì giá này được mang sang phiếu mua hàng khi chọn **Từ đơn hàng**.

⚠️ Sau khi có dòng được lấy vào phiếu mua hàng, phiếu đặt hàng **không sửa được** (hệ thống báo dữ liệu đã liên kết). Muốn đóng phần còn lại, dùng **Tất toán**.

⚠️ Mỗi lần **Sửa**, hệ thống ghi lại toàn bộ bảng chi tiết. Kiểm tra kỹ trước khi bấm **Lưu lại**.

⚠️ Không bấm **Lưu lại** nhiều lần liên tiếp; nút bị khoá trong lúc đang lưu.

### Dưới form báo "Chọn ngày đặt hàng" / "Vui lòng chọn nhà cung cấp" (Lỗi sử dụng)

Nguyên nhân: chưa chọn ngày đặt hàng hoặc nhà cung cấp.
Cách xử lý: chọn đủ hai ô rồi **Lưu lại**.

### Góc màn hình báo "<số dòng>. Số lượng >= 0" (Lỗi sử dụng)

Nguyên nhân: dòng đó nhập số lượng âm.
Cách xử lý: sửa số lượng ≥ 0.

### Góc màn hình báo "<số dòng>. Chiết khấu trong khoảng 0 -> 100%" hoặc "Thuế VAT không hợp lệ" (Lỗi sử dụng)

Nguyên nhân: chiết khấu ngoài 0–100% hoặc VAT âm.
Cách xử lý: nhập lại đúng phần trăm.

### "CẢNH BÁO – Lỗi sửa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." (Lỗi sử dụng)

Nguyên nhân: phiếu đã có dòng được lấy vào phiếu mua hàng.
Cách xử lý: không sửa phiếu đã dùng; dùng **Tất toán** cho phần còn lại, hoặc lập phiếu đặt hàng mới cho phần đặt thêm.

### Ô Hàng hóa không tìm thấy mặt hàng (Lỗi sử dụng)

Nguyên nhân: hàng chưa có trong danh mục hoặc gõ sai mã / tên.
Cách xử lý: tìm theo mã hàng; nếu chưa có, nhờ người có quyền thêm vào danh mục **Hàng hoá**.

## 7. Câu hỏi thường gặp

**Có bắt buộc nhập đơn giá không?**
Hệ thống không chặn, nhưng nên nhập để phiếu in có giá và để phiếu mua hàng lấy đúng giá.

**Ba con số trong ngoặc sau tên hàng ở ô chọn là gì?**
Là thông tin tồn kho tham khảo của mặt hàng.

**Đặt thêm hàng cho phiếu đã mua một phần thì sao?**
Lập phiếu đặt hàng mới cho phần đặt thêm.

## Bài hướng dẫn liên quan

- [Lập phiếu đặt hàng nhà cung cấp](/bai-viet/2026-11-07-huong-dan-lap-phieu-dat-hang-nha-cung-cap/)
- [Lập phiếu mua hàng từ đơn đặt](/bai-viet/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/)
- [Nhập kho hàng mua](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/)
