---
title: "HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG ĐẦU KỲ"
date: "2026-11-07"
summary: "Trả hàng đầu kỳ dùng khi cần trả lại NCC hàng đã nhập trước khi bắt đầu dùng ERP (hàng nằm trong tồn đầu kỳ), nên không có phiếu nhập kho để chọn."
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

**Trả hàng đầu kỳ** dùng khi cần trả lại NCC hàng đã nhập **trước khi bắt đầu dùng ERP** (hàng nằm trong tồn đầu kỳ), nên **không có phiếu nhập kho** để chọn. Bạn tự chọn NCC, hàng hoá, số lượng (và giá nếu có quyền **Xem giá**).

Sau khi lưu, thủ kho lập **phiếu xuất kho → Xuất trả hàng** như phiếu trả thông thường; lúc đó tồn kho và công nợ NCC mới giảm.

Hàng có phiếu nhập kho trên ERP: dùng **Từ phiếu nhập** ([HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/)), không dùng chức năng này.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có đủ quyền như bảng trên.
- Hàng cần trả **có tồn được xuất** ở kho xuất (tồn đầu kỳ đã được nhập vào ERP).
- Có chứng từ gốc của lần mua trước khi dùng ERP (NCC, hàng, số lượng, giá) để đối chiếu.

## 2. Mở chức năng

**Mua hàng → Phiếu trả hàng → Thêm mới → Trả hàng đầu kỳ**

## 3. Nhận biết màn hình

![Hình 1: cửa sổ THÊM PHIẾU TRẢ HÀNG - ĐẦU KỲ](/posts/2026-11-07-mh-a04-2-huong-dan-lap-phieu-tra-hang-dau-ky/hinh-01-form-tra-hang-dau-ky.png)

cửa sổ giống cửa sổ trả từ phiếu nhập ([HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/), phần “Nhận biết màn hình”), khác ở các điểm:

- **Tiêu đề**: Phiếu trả đầu kỳ: **THÊM PHIẾU TRẢ HÀNG - ĐẦU KỲ**
- **NHÀ CUNG CẤP**: Phiếu trả đầu kỳ: **Chọn được** (bắt buộc); chọn xong **NỢ CŨ** tự điền
- **TỪ PHIẾU**: Phiếu trả đầu kỳ: Trống (không có phiếu nhập gốc)
- **GHI CHÚ**: Phiếu trả đầu kỳ: Tự điền **Trả hàng đầu kỳ**, sửa được
- **KHO XUẤT**: Phiếu trả đầu kỳ: Bắt buộc, **tự chọn**
- **Cột Hàng hóa**: Phiếu trả đầu kỳ: **Chọn được** – gõ mã / tên hàng
- **Cột Đơn giá, Chiết khấu, Thuế VAT**: Phiếu trả đầu kỳ: **Nhập được** (cần quyền **Xem giá** để thấy cột)
- **Thêm một hàng**: Phiếu trả đầu kỳ: Thêm dòng trống (thay cho nút **TỪ PHIẾU NHẬP**)

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Mua hàng
   ↓
Phiếu trả hàng
   ↓
Thêm mới → Trả hàng đầu kỳ
```

```text
Phiếu trả hàng → Thêm mới → Trả hàng đầu kỳ
      ↓
Ngày trả hàng · Nhà cung cấp (→ Nợ cũ) · Kho xuất · Ghi chú
      ↓
Dòng hàng: chọn Hàng hóa → Số lượng → (Xem giá) Đơn giá, CK, VAT
      ↓
Lưu lại ── thiếu tồn / thiếu trường? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → Trạng thái xuất "Chưa xuất"
      ↓
(Kho) Phiếu xuất kho → Xuất trả hàng → giảm tồn, giảm công nợ NCC
```

### Bước 1 – Mở cửa sổ trả hàng đầu kỳ

Vào **Mua hàng → Phiếu trả hàng**, bấm **Thêm mới → Trả hàng đầu kỳ**. cửa sổ **THÊM PHIẾU TRẢ HÀNG - ĐẦU KỲ** mở ra (Hình 1), ô **GHI CHÚ** có sẵn chữ **Trả hàng đầu kỳ**.

### Bước 2 – Nhập thông tin đầu phiếu

- **NGÀY TRẢ HÀNG**: ngày giao trả NCC.
- **NHÀ CUNG CẤP**: gõ tên / mã NCC và chọn. **NỢ CŨ** tự điền.
- **KHO XUẤT**: kho đang chứa hàng cần trả.
- **GHI CHÚ**: bổ sung lý do trả, số chứng từ gốc nếu có.

### Bước 3 – Nhập dòng hàng trả

1. Bấm **Thêm một hàng**  (hoặc bấm vào ô **Hàng hóa** của dòng trống).
2. Gõ mã / tên hàng và chọn. Danh sách hiện *Tên, (tồn hiện tại, tồn được xuất, lô được xuất)* để bạn kiểm tra tồn. **Đvt** tự điền; một dòng trống mới được thêm bên dưới.
3. Nhập **Số lượng** trả.
4. Có quyền **Xem giá**: nhập **Đơn giá** (giá mua gốc chưa VAT), **Chiết khấu**, **Thuế VAT** để giá trị trả đúng với chứng từ gốc.
5. Ghi **Chú thích** dòng nếu cần.

Xoá dòng trống cuối bảng (biểu tượng thùng rác) trước khi lưu.

### Bước 4 – Lưu lại

Bấm **Lưu lại**.

- Thiếu trường: dưới cửa sổ hiện **Chọn ngày trả hàng**, **Vui lòng chọn nhà cung cấp**, **Vui lòng chọn kho xuất**.
- Dòng sai: **<số dòng>. Số lượng >= 0**, **<số dòng>. Chiết khấu trong khoảng 0 -> 100%**, **<số dòng>. Thuế VAT không hợp lệ**.
- Kho không đủ tồn: **CẢNH BÁO – Lỗi thêm: "<tên kho>", "<tên hàng>" không đủ tồn (<số>).**
- Hợp lệ: **Lưu thành công**, cửa sổ đóng.

### Bước 5 – Chuyển xuất kho

Phiếu hiện trên danh sách với **Từ phiếu** trống, **Trạng thái xuất** = **Chưa xuất**. Báo thủ kho lập **phiếu xuất kho → Xuất trả hàng** (sổ tay Kho hàng).

### Sửa phiếu

Bấm **Sửa**; cửa sổ **CẬP NHẬT PHIẾU TRẢ HÀNG - ĐẦU KỲ** cho sửa NCC, hàng hoá, số lượng, giá như khi thêm mới. Chỉ sửa được khi phiếu **Chưa xuất**.

## 6. Giải thích các thông tin trên màn hình

Các trường chung: xem phần “Giải thích các thông tin trên màn hình” bài **[HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/)**. Riêng phiếu trả đầu kỳ:

- **Nhà cung cấp**: Ý nghĩa: NCC nhận hàng trả; Bắt buộc: Có; Lưu ý: Tự chọn
- **Ghi chú**: Ý nghĩa: Lý do trả; Bắt buộc: Không; Lưu ý: Mặc định **Trả hàng đầu kỳ**
- **Kho xuất**: Ý nghĩa: Kho xuất hàng trả; Bắt buộc: Có; Lưu ý: Phải đủ tồn được xuất
- **Hàng hóa**: Ý nghĩa: Mặt hàng trả; Bắt buộc: Có (mỗi dòng); Lưu ý: Tự chọn
- **Số lượng**: Ý nghĩa: Số lượng trả; Bắt buộc: Có; Lưu ý: ≥ 0; không giới hạn theo phiếu nhập, chỉ giới hạn theo tồn
- **Đơn giá**: Ý nghĩa: Giá mua gốc chưa VAT; Bắt buộc: Nên nhập; Lưu ý: Cần quyền Xem giá
- **Chiết khấu**: Ý nghĩa: %; Bắt buộc: Không; Lưu ý: 0–100%
- **Thuế VAT**: Ý nghĩa: %; Bắt buộc: Không; Lưu ý: ≥ 0
- **Thành tiền**: Ý nghĩa: Đơn giá × (1 − CK) × (1 + VAT) × Số lượng; Lưu ý: Hệ thống tính lại khi lưu

## 7. Kiểm tra sau khi thực hiện

- Phiếu trả được lưu với mã **TH…**, đánh dấu **đầu kỳ**, **Trạng thái xuất** = **Chưa xuất**.
- Tồn kho và công nợ NCC **chưa** thay đổi; thay đổi khi thủ kho xuất kho trả hàng.
- Phiếu không liên kết phiếu nhập kho nào.

## 8. Những điều cần lưu ý

⚠️ **Chỉ dùng cho hàng nhập trước khi dùng ERP.** Hàng có phiếu nhập kho trên ERP phải trả **Từ phiếu nhập** để hệ thống kiểm soát số trả và cập nhật phiếu nhập.

⚠️ Phiếu đầu kỳ **không bị giới hạn** bởi số lượng đã nhập – chỉ bị giới hạn bởi tồn kho. Kiểm tra kỹ số lượng trước khi lưu.

⚠️ **Đơn giá** quyết định số công nợ NCC được giảm khi xuất kho trả. Người không có quyền **Xem giá** không thấy và không nhập được giá – nhờ người có quyền kiểm tra.

⚠️ Phiếu đã xuất kho trả hàng không sửa / xoá được.

Trước lưu, đối chiếu NCC, lượng tồn đầu kỳ và giá gốc được duyệt. Không có phiếu nhập liên kết không có nghĩa được trả tùy số lượng/giá; quyền Xem giá chỉ cho thao tác cột, không thay căn cứ kế toán. Sau xuất kho trả, mở chứng từ xuất và đối chiếu giảm tồn/công nợ; không chỉ dựa vào số Nợ cũ hoặc trạng thái của phiếu trả.

### "CẢNH BÁO – Lỗi thêm: "<tên kho>", "<tên hàng>" không đủ tồn (<số>)." 

Nguyên nhân: kho xuất không đủ tồn được xuất cho mặt hàng.
Cách xử lý: chọn đúng **KHO XUẤT**, kiểm tra tồn (số trong ngoặc ở danh sách hàng hoá), hoặc giảm số lượng.

### Dưới cửa sổ báo "Vui lòng chọn nhà cung cấp" / "Vui lòng chọn kho xuất" / "Chọn ngày trả hàng" 

Nguyên nhân: thiếu trường bắt buộc.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### Không có mục Trả hàng đầu kỳ trong nút Thêm mới 

Nguyên nhân: thiếu quyền **Trả hàng đầu kỳ**.
Cách xử lý: liên hệ quản trị hệ thống.

### Không thấy / không nhập được đơn giá 

Nguyên nhân: thiếu quyền **Xem giá** của Phiếu trả hàng.
Cách xử lý: nhờ người có quyền nhập giá hoặc xin cấp quyền.

## 10. Câu hỏi thường gặp

**Hàng nhập trên ERP nhưng không tìm thấy phiếu nhập thì có dùng trả đầu kỳ được không?**
Không nên. Mở rộng khoảng ngày khi chọn phiếu nhập ([HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/)). Dùng trả đầu kỳ cho hàng có phiếu nhập sẽ làm phiếu nhập không ghi nhận phần đã trả.

**Trả đầu kỳ có làm giảm công nợ NCC không?**
Có, khi thủ kho lập phiếu xuất kho trả hàng; giá trị giảm theo đơn giá đã nhập trên phiếu trả.

## 11. Công việc tiếp theo

```text
Phiếu trả hàng đầu kỳ
        ↓
(Kho) Phiếu xuất kho → Xuất trả hàng → giảm tồn kho, giảm công nợ NCC
        ↓
(Kế toán) Đối chiếu công nợ NCC đầu kỳ
```

**Tiếp theo:** sổ tay Kho hàng – Phiếu xuất kho (Xuất trả hàng).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU TRẢ HÀNG](/bai-viet/2026-11-07-mh-a04-0-tong-quan-man-hinh-phieu-tra-hang/) – Tổng quan màn hình Phiếu trả hàng
- [HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/) – Hướng dẫn lập phiếu trả hàng từ phiếu nhập kho
- Sổ tay Kho hàng – Phiếu xuất kho (Xuất trả hàng), Tồn đầu kỳ
- Sổ tay Kế toán – Thống kê công nợ nhà cung cấp
