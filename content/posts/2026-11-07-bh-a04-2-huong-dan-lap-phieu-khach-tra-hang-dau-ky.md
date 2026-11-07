---
title: "HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG ĐẦU KỲ"
date: "2026-11-07"
summary: "Trả hàng đầu kỳ dùng khi khách trả lại hàng đã bán trước khi bắt đầu dùng ERP."
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

**Trả hàng đầu kỳ** dùng khi khách trả lại hàng đã bán **trước khi bắt đầu dùng ERP**. Lần bán đó không có phiếu bán hàng và phiếu xuất kho trên hệ thống, nên không có phiếu gốc để chọn. Bạn tự chọn khách hàng, nhân viên kinh doanh, kho nhận hàng, từng mặt hàng, số lượng và **tự nhập đơn giá, chiết khấu, VAT** theo chứng từ bán cũ.

Giống phiếu trả từ phiếu xuất kho ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)), lưu phiếu **chưa** làm thay đổi tồn kho và công nợ. Thủ kho nhận hàng và lập **phiếu nhập kho → Nhập khách trả hàng** từ phiếu này ([HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/)): lúc đó tồn kho mới tăng, công nợ khách mới giảm.

Hàng đã bán và xuất kho trên ERP: dùng **Từ phiếu xuất** ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)), không dùng chức năng này.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có đủ quyền như bảng trên.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)): danh sách **KHO HÀNG** chỉ gồm kho của chi nhánh đang làm việc.
- Khách hàng đã có trong danh mục khách hàng.
- Có chứng từ bán cũ (hoá đơn, phiếu giao hàng trước khi dùng ERP) để lấy **đơn giá, chiết khấu, VAT** đã bán.
- Đã xác nhận hàng **không** có phiếu xuất kho trên ERP (tìm thử bằng [HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/) trước).

## 2. Mở chức năng

**Bán hàng → Khách trả hàng → Thêm mới → Trả hàng đầu kỳ**

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ THÊM PHIẾU TRẢ HÀNG - ĐẦU KỲ](/posts/2026-11-07-bh-a04-2-huong-dan-lap-phieu-khach-tra-hang-dau-ky/hinh-01-form-tra-hang-dau-ky.png)

cửa sổ có cùng bố cục với cửa sổ trả từ phiếu xuất ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/), phần “Nhận biết màn hình”), khác ở các điểm:

- **Tiêu đề**: Phiếu trả đầu kỳ: **THÊM PHIẾU TRẢ HÀNG - ĐẦU KỲ**
- **KHÁCH HÀNG**: Phiếu trả đầu kỳ: **Chọn được** (bắt buộc); chọn xong **NỢ CŨ** tự điền
- **ĐIỆN THOẠI**: Phiếu trả đầu kỳ: Để trống (không tự điền theo khách)
- **KHO HÀNG**: Phiếu trả đầu kỳ: Bắt buộc, **tự chọn** – kho nhận hàng trả
- **NV KINH DOANH**: Phiếu trả đầu kỳ: **Chọn được** (bắt buộc) – không có giá trị mặc định
- **GHI CHÚ**: Phiếu trả đầu kỳ: Tự điền **Trả hàng đầu kỳ**, sửa được, bắt buộc
- **Cột Hàng hóa**: Phiếu trả đầu kỳ: **Chọn được** – gõ mã / tên hàng. Chọn xong, **Đvt** tự điền, **Tên in** để trống (xem lưu ý phần “Những điều cần lưu ý”)
- **Thêm một hàng**: Phiếu trả đầu kỳ: Thêm dòng trống (thay cho nút **TỪ PHIẾU XUẤT**)
- **Lưu lại / Đóng**: Phiếu trả đầu kỳ: Lưu / đóng không lưu

Lúc mở cửa sổ, bảng chỉ thấy **STT**, **Hàng hóa**, **Tên in**, **Đvt**, **Thao tác**; các cột số lượng và giá nằm bên phải – kéo thanh cuộn ngang ở đáy bảng (Hình 2).

![Hình 2: Các cột giá trong bảng chi tiết phiếu trả đầu kỳ](/posts/2026-11-07-bh-a04-2-huong-dan-lap-phieu-khach-tra-hang-dau-ky/hinh-02-cot-gia-bang-chi-tiet.png)

Dòng mới chọn hàng có sẵn **Số lượng** 0, **Đơn giá** 0, **Chiết khấu** 0%, **Thuế VAT** 0%, **Lấy VAT** không tick – phải nhập tay.

- Cột: **Số lượng**; Phiếu trả đầu kỳ: Nhập số khách trả
- Cột: **Đơn giá**; Phiếu trả đầu kỳ: **Nhập được** – giá bán chưa VAT
- Cột: **Chiết khấu**; Phiếu trả đầu kỳ: **Nhập được** – theo %
- Cột: **Thuế VAT**; Phiếu trả đầu kỳ: **Nhập được** – theo %
- Cột: **Thành tiền**; Phiếu trả đầu kỳ: Tự tính

Các cột khác (**STT**, **Tên in**, **Đvt**, **Khối lượng**, **Kiện**, **M³**, **Chú thích**, **Thao tác**) như [HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/).

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Bán hàng
   ↓
Khách trả hàng
   ↓
Thêm mới → Trả hàng đầu kỳ
```

```text
Khách trả hàng → Thêm mới → Trả hàng đầu kỳ
      ↓
Ngày trả hàng · Khách hàng (→ Nợ cũ) · Kho hàng · NV kinh doanh · Ghi chú
      ↓
Thêm một hàng → chọn Hàng hóa → Số lượng → Đơn giá, Chiết khấu, Thuế VAT
      ↓
Lưu lại ── thiếu trường / dòng sai? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → Từ phiếu trống · Trạng thái nhập "Chưa nhập"
      ↓
(Kho) Phiếu nhập kho → Nhập khách trả hàng (KHO-A04.2)
      → tăng tồn kho, giảm công nợ khách theo đơn giá đã nhập
```

### Bước 1 – Mở cửa sổ trả hàng đầu kỳ

Vào **Bán hàng → Khách trả hàng**, bấm **Thêm mới → Trả hàng đầu kỳ**. Cửa sổ **THÊM PHIẾU TRẢ HÀNG - ĐẦU KỲ** mở ra (Hình 1), ô **GHI CHÚ** có sẵn chữ **Trả hàng đầu kỳ**, bảng chi tiết trống.

### Bước 2 – Nhập thông tin đầu phiếu

- **NGÀY TRẢ HÀNG**: ngày khách trả.
- **KHÁCH HÀNG**: gõ tên hoặc mã khách và chọn. **NỢ CŨ** tự điền công nợ phải thu hiện tại của khách.
- **KHO HÀNG**: kho nhận hàng trả về (ví dụ kho hàng lỗi nếu hàng hỏng). Nên chọn kho **trước** khi chọn hàng để danh sách hàng hiện tồn đúng kho.
- **NV KINH DOANH**: nhân viên phụ trách khách.
- **GHI CHÚ**: bổ sung lý do trả và số chứng từ bán cũ, ví dụ *Trả hàng đầu kỳ – HĐ 0001234 ngày 15/05/2026 – hàng lỗi*.

### Bước 3 – Nhập dòng hàng trả

1. Bấm **Thêm một hàng**  để có một dòng trống.
2. Bấm vào ô **Hàng hóa**, gõ mã / tên hàng và chọn. Danh sách hiện *Tên, (tồn hiện tại, tồn được xuất, lô được xuất)*. **Đvt** tự điền và một dòng trống mới được thêm bên dưới. Ô **Tên in** vẫn trống – gõ tên in nếu cần.
3. Kéo thanh cuộn ngang của bảng sang phải (Hình 2), nhập **Số lượng** trả (theo đơn vị tính chính của hàng).
4. Nhập **Đơn giá** (giá bán chưa VAT theo chứng từ cũ), **Chiết khấu**, **Thuế VAT**. **Thành tiền** tự tính.
5. Ghi **Chú thích** dòng nếu cần.

Mẹo: chuột phải vào ô **Số lượng** hoặc **Chú thích** → **Áp dụng cho những dòng dưới**. Kéo biểu tượng đầu dòng để đổi thứ tự. Dòng trống cuối bảng (chưa chọn hàng) được bỏ qua khi lưu.

### Bước 4 – Lưu

Bấm **Lưu lại**.

- Thiếu thông tin: ô viền đỏ, bấm vào ô để xem lời nhắc **Chọn ngày trả hàng**, **Vui lòng chọn Khách hàng**, **Vui lòng chọn kho hàng**, **Vui lòng chọn nhân viên kinh doanh**, **Vui lòng ghi lý do trả hàng**.
- Dòng sai: cảnh báo **<số dòng>. Số lượng >= 0**, **<số dòng>. Chiết khấu trong khoảng 0 -> 100%**, **<số dòng>. Thuế VAT không hợp lệ**.
- Hợp lệ: **Lưu thành công**, cửa sổ đóng. Phiếu hiện ở danh sách với mã **KT…**, **Từ phiếu** trống, **Trạng thái nhập** = **Chưa nhập**.

### Bước 5 – Chuyển thủ kho nhập kho

In **phiếu đề nghị nhập kho hàng trả về** ([HƯỚNG DẪN IN PHIẾU KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-3-huong-dan-in-phieu-khach-tra-hang/)) và báo thủ kho lập **phiếu nhập kho → Nhập khách trả hàng** ([HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/)).

### Sửa phiếu

Bấm **Sửa** → cửa sổ **CẬP NHẬT PHIẾU TRẢ HÀNG - ĐẦU KỲ**. Sửa được khách hàng, nhân viên, kho, ghi chú, hàng hoá, số lượng, giá như khi thêm mới. Chỉ sửa được khi phiếu **Chưa nhập**.

## 6. Giải thích các thông tin trên màn hình

Các trường chung: xem phần “Giải thích các thông tin trên màn hình” bài **[HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)**. Riêng phiếu trả đầu kỳ:

- **Khách hàng**: Ý nghĩa: Khách trả hàng; Bắt buộc: Có; Lưu ý: Tự chọn
- **Nợ cũ**: Ý nghĩa: Công nợ phải thu hiện tại của khách; Lưu ý: Tự điền khi chọn khách
- **Điện thoại**: Lưu ý: Để trống
- **Kho hàng**: Ý nghĩa: Kho nhận hàng trả; Bắt buộc: Có; Lưu ý: Tự chọn, kho thuộc chi nhánh đang làm việc
- **NV kinh doanh**: Ý nghĩa: Nhân viên phụ trách; Bắt buộc: Có; Lưu ý: Tự chọn
- **Ghi chú**: Ý nghĩa: Lý do trả; Bắt buộc: Có; Lưu ý: Mặc định **Trả hàng đầu kỳ**
- **Hàng hóa**: Ý nghĩa: Mặt hàng trả; Bắt buộc: Có (mỗi dòng); Lưu ý: Tự chọn
- **Số lượng**: Ý nghĩa: Số lượng trả; Bắt buộc: Có; Lưu ý: ≥ 0; **không** bị giới hạn theo số đã bán / đã xuất
- **Đơn giá**: Ý nghĩa: Giá bán chưa VAT; Bắt buộc: Nên nhập; Lưu ý: Mặc định 0; quyết định số công nợ được giảm
- **Chiết khấu**: Ý nghĩa: % chiết khấu đã cho khách; Bắt buộc: Không; Lưu ý: 0–100%
- **Thuế VAT**: Ý nghĩa: % thuế; Bắt buộc: Không; Lưu ý: ≥ 0
- **Lấy VAT**: Ý nghĩa: Hàng có xuất hoá đơn VAT; Bắt buộc: Không; Lưu ý: Tự đánh dấu khi Thuế VAT > 0
- **Thành tiền**: Ý nghĩa: Đơn giá × (1 − CK) × (1 + VAT) × Số lượng; Lưu ý: Máy chủ tính lại khi lưu

**Khác biệt so với phiếu trả từ phiếu xuất ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)):**

- **Phiếu gốc**: Từ phiếu xuất ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)): Một phiếu xuất kho bán hàng; Trả đầu kỳ ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-bh-a04-2-huong-dan-lap-phieu-khach-tra-hang-dau-ky/)): Không có; **Từ phiếu** để trống
- **Khách hàng, NV kinh doanh**: Từ phiếu xuất ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)): Lấy theo phiếu xuất, khoá; Trả đầu kỳ ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-bh-a04-2-huong-dan-lap-phieu-khach-tra-hang-dau-ky/)): Tự chọn
- **Kho hàng**: Từ phiếu xuất ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)): Mặc định kho đã xuất; Trả đầu kỳ ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-bh-a04-2-huong-dan-lap-phieu-khach-tra-hang-dau-ky/)): Tự chọn
- **Hàng hóa**: Từ phiếu xuất ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)): Lấy sẵn các dòng chưa trả hết, khoá; Trả đầu kỳ ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-bh-a04-2-huong-dan-lap-phieu-khach-tra-hang-dau-ky/)): Tự chọn từng dòng
- **Số lượng tối đa**: Từ phiếu xuất ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)): Số đã xuất − số đã trả; Trả đầu kỳ ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-bh-a04-2-huong-dan-lap-phieu-khach-tra-hang-dau-ky/)): Không giới hạn
- **Đơn giá, Chiết khấu, VAT**: Từ phiếu xuất ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)): Theo phiếu xuất, khoá; Trả đầu kỳ ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-bh-a04-2-huong-dan-lap-phieu-khach-tra-hang-dau-ky/)): **Tự nhập**
- **Cập nhật phiếu gốc**: Từ phiếu xuất ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)): Trạng thái trả của phiếu xuất / phiếu bán; Trả đầu kỳ ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-bh-a04-2-huong-dan-lap-phieu-khach-tra-hang-dau-ky/)): Không có phiếu gốc để cập nhật
- **Giá vốn khi thủ kho nhập lại**: Từ phiếu xuất ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)): Giá vốn lúc xuất bán; Trả đầu kỳ ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-bh-a04-2-huong-dan-lap-phieu-khach-tra-hang-dau-ky/)): Giá bình quân hiện hành của hàng

## 7. Kiểm tra sau khi thực hiện

- Phiếu khách trả được lưu với mã tự động **KT…**, đánh dấu **đầu kỳ**, **Trạng thái nhập** = **Chưa nhập**.
- Phiếu không liên kết phiếu bán hàng hay phiếu xuất kho nào.
- Tồn kho và công nợ khách **chưa** thay đổi.
- Khi thủ kho nhập kho từ phiếu ([HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/)):
  - **Tồn kho tăng** ở kho nhập.
  - **Công nợ phải thu khách giảm** = Đơn giá × (1 − CK) × (1 + VAT) × số lượng nhập, theo giá bạn đã nhập trên phiếu.
  - **Sổ cái kho** ghi hàng nhập lại theo **giá bình quân hiện hành** của hàng tại chi nhánh (không có giá vốn lúc bán để lấy).

## 8. Những điều cần lưu ý

⚠️ **Chỉ dùng cho hàng bán trước khi dùng ERP.** Hàng có phiếu xuất kho trên ERP phải trả **Từ phiếu xuất** ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)) để hệ thống kiểm soát số trả và cập nhật trạng thái trả của phiếu xuất / phiếu bán.

⚠️ **Đơn giá, chiết khấu, VAT bạn nhập quyết định số công nợ khách được giảm** khi thủ kho nhập kho. Đơn giá mặc định là **0**: quên nhập giá thì hàng vào kho nhưng công nợ không giảm. Đối chiếu kỹ với chứng từ bán cũ.

⚠️ Hệ thống **không giới hạn số lượng trả đầu kỳ** (không có số đã bán để so). Kiểm tra số lượng thực nhận trước khi lưu.

⚠️ Lưu phiếu chưa làm tăng tồn kho và chưa giảm công nợ – chỉ khi thủ kho nhập kho.

⚠️ Chọn hàng xong, ô **Tên in** để trống (lỗi đang theo dõi). Nhập tay nếu cần tên in.

⚠️ Phiếu trả đầu kỳ không lưu tên, địa chỉ, điện thoại khách trên phiếu: các ô **Khách hàng**, **Địa chỉ giao hàng**, **Điện thoại** trên phiếu in ([HƯỚNG DẪN IN PHIẾU KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-3-huong-dan-in-phieu-khach-tra-hang/)) có thể để trống – ghi tay khi cần.

⚠️ Sau khi thủ kho đã nhập kho (dù một phần), phiếu không sửa / xoá được. Chỉ người tạo phiếu mới xoá được phiếu.

⚠️ Bấm **Đóng** không hỏi lại; dữ liệu đang nhập bị mất.

### Thêm mới không có mục Trả hàng đầu kỳ 

Nguyên nhân: tài khoản thiếu quyền **Trả đầu kỳ** – nút **Thêm mới** mở thẳng danh sách phiếu xuất kho.
Cách xử lý: liên hệ quản trị hệ thống nếu cần.

### Ô viền đỏ: "Vui lòng chọn Khách hàng" / "Vui lòng chọn kho hàng" / "Vui lòng chọn nhân viên kinh doanh" / "Chọn ngày trả hàng" 

Nguyên nhân: thiếu trường bắt buộc.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "<số dòng>. Chiết khấu trong khoảng 0 -> 100%" / "<số dòng>. Thuế VAT không hợp lệ" / "<số dòng>. Số lượng >= 0" 

Nguyên nhân: giá trị dòng không hợp lệ (số âm, chiết khấu quá 100%).
Cách xử lý: sửa ô của dòng có số thứ tự trong câu báo.

### Danh sách Hàng hóa không hiện tồn đúng kho 

Nguyên nhân: chọn hàng trước khi chọn **KHO HÀNG**.
Cách xử lý: chọn **KHO HÀNG** trước; tồn chỉ để tham khảo, không chặn lưu.

### "CẢNH BÁO – Lỗi sửa: Phiếu đang nhập" / "Phiếu đã nhập" 

Nguyên nhân: thủ kho đã nhập kho từ phiếu.
Cách xử lý: không sửa; liên hệ thủ kho.

### Công nợ khách không giảm sau khi nhập kho 

Nguyên nhân: phiếu trả đầu kỳ để **Đơn giá** = 0.
Cách xử lý: liên hệ kế toán để điều chỉnh công nợ; lần sau nhập đủ giá trước khi lưu.

## 10. Câu hỏi thường gặp

**Hàng bán trên ERP nhưng không tìm thấy phiếu xuất thì có dùng trả đầu kỳ được không?**
Không nên. Mở rộng khoảng ngày khi chọn phiếu xuất ([HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/)). Dùng trả đầu kỳ cho hàng có phiếu xuất sẽ làm phiếu xuất / phiếu bán không ghi nhận phần đã trả.

**Trả đầu kỳ có làm giảm công nợ khách không?**
Có, khi thủ kho lập phiếu nhập kho từ phiếu; số giảm theo đơn giá, chiết khấu, VAT bạn đã nhập.

**Khoản trả đầu kỳ được trừ vào phiếu bán nào khi xem công nợ quá hạn?**
Không gắn với phiếu bán / phiếu xuất cụ thể: hệ thống tính như số tiền khách đã trả chung cho công nợ của khách.

**Phiếu trả đầu kỳ có in được không?**
Có, dùng chung hai mẫu in với phiếu trả từ phiếu xuất ([HƯỚNG DẪN IN PHIẾU KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-3-huong-dan-in-phieu-khach-tra-hang/)).

## 11. Công việc tiếp theo

```text
Phiếu khách trả hàng đầu kỳ
        ↓
In phiếu đề nghị nhập kho hàng trả về (BH-A04.3)
        ↓
(Kho) Nhập khách trả hàng (KHO-A04.2) → tăng tồn, giảm công nợ khách
        ↓
(Kế toán) Đối chiếu công nợ khách đầu kỳ · chi trả lại tiền nếu khách đã trả
```

**Tiếp theo:** [HƯỚNG DẪN IN PHIẾU KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-3-huong-dan-in-phieu-khach-tra-hang/) – Hướng dẫn in phiếu khách trả hàng; [HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/) – Nhập kho hàng khách trả.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-0-tong-quan-man-hinh-khach-tra-hang/) – Tổng quan màn hình Khách trả hàng
- [HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/) – Hướng dẫn lập phiếu khách trả hàng từ phiếu xuất kho bán hàng
- [HƯỚNG DẪN IN PHIẾU KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-3-huong-dan-in-phieu-khach-tra-hang/) – Hướng dẫn in phiếu đề nghị nhập kho hàng trả về
- [HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/) – Hướng dẫn nhập kho hàng khách trả
- [HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-mh-a04-2-huong-dan-lap-phieu-tra-hang-dau-ky/) – Hướng dẫn lập phiếu trả hàng nhà cung cấp đầu kỳ (nghiệp vụ tương tự bên Mua hàng)
- Sổ tay Kế toán – Thống kê công nợ khách hàng
