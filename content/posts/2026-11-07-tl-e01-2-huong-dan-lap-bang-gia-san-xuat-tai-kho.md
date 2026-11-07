---
title: "HƯỚNG DẪN LẬP BẢNG GIÁ SẢN XUẤT TẠI KHO"
date: "2026-11-07"
summary: "Bảng giá Tại kho ghi đơn giá công cho hàng gia công ngay tại kho của công ty."
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

Bảng giá **Tại kho** ghi đơn giá công cho hàng gia công ngay tại kho của công ty. Một bảng giá áp dụng cho **một hoặc nhiều nguồn nhân lực** (ví dụ các máy dán, máy keo) và gồm nhiều dòng giá có **thứ tự ưu tiên**, điều kiện theo **số lượng**, **số mặt**, **độ dày** và **kiểu gia công**.

Khi lưu phiếu nhập kho gia công tại kho, hệ thống tự điền đơn giá cho dòng thành phẩm còn trống theo bảng giá này.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”, đã đọc [TỔNG QUAN MÀN HÌNH BẢNG GIÁ SẢN XUẤT](/bai-viet/2026-11-07-tl-e01-0-tong-quan-man-hinh-bang-gia-san-xuat/).
- **Nguồn nhân lực** (TL-A02), **Danh mục gia công** (TL-D01), **Số mặt** (TL-D06) đã có.

## 2. Mở chức năng

**Bảng giá / báo giá → Bảng giá sản xuất → Thêm mới → Tại kho**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Hình 1: THÊM MỚI - BẢNG GIÁ SẢN XUẤT | TẠI KHO — dòng mặc định trống, chưa lưu.](/posts/2026-11-07-tl-e01-2-huong-dan-lap-bang-gia-san-xuat-tai-kho/ui-20261026-tl-e01-tai-kho-figure-01.png)

- **NGÀY ÁP DỤNG**: Ý nghĩa: Ngày bảng giá bắt đầu có hiệu lực
- **NGUỒN NHÂN LỰC**: Ý nghĩa: Các nguồn nhân lực (máy, tổ) áp dụng bảng giá này
- **MÃ BẢNG GIÁ**: Ý nghĩa: Ô chỉ đọc, hiện **MÃ TẠO TỰ ĐỘNG**
- **GHI CHÚ**: Ý nghĩa: Ghi chú tuỳ chọn
- **Bảng dòng giá**: Ý nghĩa: **Ưu tiên**, **Đơn giá**, **SL tối đa**, **Số mặt**, **Độ dày tối đa**, **Y/c gia công**, **Ghi chú**
- **Thêm một hàng, Lưu lại, Đóng**: Ý nghĩa: Thêm dòng giá, lưu, đóng không lưu

## 4. Trình tự công việc

```text
Thêm mới ▸ Tại kho → Ngày áp dụng + chọn các Nguồn nhân lực
      ↓
Nhập các dòng giá (ưu tiên + điều kiện + đơn giá) → Lưu lại
      ↓
Lưu phiếu nhập kho gia công tại kho → đơn giá tự điền
```

```text
Chọn dòng giá cho một dòng thành phẩm (tại kho):
Sắp các dòng giá theo Ưu tiên (số lớn trước; bằng nhau → dòng nhập trước)
   ↓
Lấy dòng ĐẦU TIÊN thoả đủ các điều kiện đã điền
   ↓
Đơn giá của dòng đó = đơn giá thành phẩm
```

### Lập bảng giá

**Bước 1 –** Chọn **NGÀY ÁP DỤNG**. Ở **NGUỒN NHÂN LỰC**, bấm ô, tick các nguồn nhân lực áp dụng rồi xác nhận (ô có chỗ gõ để tìm).

**Bước 2 –** Nhập các dòng giá, bấm vào ô để sửa, **Thêm một hàng** để thêm dòng. Ô điều kiện để trống nghĩa là không đặt điều kiện đó. Xoá dòng trống còn sót (xem phần “Những điều cần lưu ý”).

**Bước 3 –** Bấm **Lưu lại**.

- **Ưu tiên**: Ý nghĩa: Số càng lớn càng được xét trước (không nhỏ hơn 0). Trống / 0 hiện dấu **-**
- **Đơn giá**: Ý nghĩa: Đơn giá nếu dòng này được chọn
- **SL tối đa**: Ý nghĩa: Chỉ khớp khi số lượng dòng nhập **nhỏ hơn** số này. Trống = không giới hạn
- **Số mặt**: Ý nghĩa: Chỉ khớp khi dòng nhập có đúng số mặt này
- **Độ dày tối đa**: Ý nghĩa: Chỉ khớp khi độ dày hàng **không lớn hơn** số này
- **Y/c gia công**: Ý nghĩa: Chỉ khớp khi dòng yêu cầu có định mức thuộc kiểu gia công này

### Sửa

cửa sổ **CẬP NHẬT - BẢNG GIÁ SẢN XUẤT | TẠI KHO** cho đổi cả nguồn nhân lực, ngày áp dụng và các dòng giá. Danh sách **NGUỒN NHÂN LỰC** được lưu lại đúng theo những gì đang chọn trên cửa sổ. Đổi giá từ một ngày mới nên dùng **Sao chép** thay vì sửa bảng giá cũ.

### Sao chép

Liên kết **Sao chép** ở cột **Thao tác** mở cửa sổ **SAO CHÉP - BẢNG GIÁ SẢN XUẤT | TẠI KHO**, nạp sẵn nguồn nhân lực, ngày áp dụng, ghi chú, các dòng giá; mã cấp mới khi lưu. **Đổi NGÀY ÁP DỤNG** rồi bấm **Lưu lại**.

**Ví dụ chọn dòng giá:** hai dòng: (**Ưu tiên** 10, **SL tối đa** 100, **Đơn giá** 3.000) và (**Ưu tiên** 0, **Đơn giá** 2.500). Dòng nhập 50 tấm khớp dòng ưu tiên 10 nên lấy 3.000. Dòng nhập 150 tấm không khớp dòng đầu nên lấy 2.500.

## 6. Giải thích các thông tin trên màn hình

- **Ngày áp dụng**: Ý nghĩa: Ngày bắt đầu hiệu lực; Bắt buộc: Có; Lưu ý: Báo **Chọn ngày áp dụng** nếu để trống
- **Nguồn nhân lực**: Ý nghĩa: Máy / tổ áp dụng bảng giá; Bắt buộc: Không bắt buộc khi lưu; Lưu ý: Bảng giá chỉ được dùng cho nguồn nhân lực **đã tick**; không tick nguồn nào thì không phiếu nào dùng bảng giá này
- **Mã bảng giá**: Ý nghĩa: Mã tự cấp; Lưu ý: **TK** + 8 chữ số
- **Ghi chú**: Ý nghĩa: Ghi chú chung; Bắt buộc: Không
- **Ưu tiên**: Ý nghĩa: Thứ tự xét dòng giá; Bắt buộc: Không; Lưu ý: Số lớn trước; mặc định 0
- **Đơn giá**: Ý nghĩa: Đơn giá nếu dòng được chọn; Bắt buộc: Không; Lưu ý: Mặc định 0
- **SL tối đa**: Ý nghĩa: Giới hạn số lượng; Bắt buộc: Không; Lưu ý: Khớp khi số lượng < SL tối đa
- **Số mặt**: Ý nghĩa: Điều kiện số mặt; Bắt buộc: Không; Lưu ý: Trống = mọi số mặt
- **Độ dày tối đa**: Ý nghĩa: Giới hạn độ dày; Bắt buộc: Không; Lưu ý: Khớp khi độ dày ≤ giá trị; hàng không có độ dày thì **không** khớp dòng có điều kiện này
- **Y/c gia công**: Ý nghĩa: Điều kiện kiểu gia công; Bắt buộc: Không; Lưu ý: Lấy từ **Danh mục gia công**
- **Ghi chú (dòng)**: Ý nghĩa: Ghi chú dòng giá; Bắt buộc: Không

## 7. Kiểm tra sau khi thực hiện

- Bảng giá hiện ở danh sách với **Loại bảng giá** **Tại kho** và cột **Nguồn nhân lực** liệt kê các nguồn đã chọn.
- Từ lần lưu phiếu nhập kho gia công tại kho tiếp theo của các nguồn nhân lực đó (ngày phiếu không trước ngày áp dụng), đơn giá tự điền cho dòng thành phẩm còn trống hoặc 0.
- Phiếu cũ không tự đổi; dùng **Tính lại đơn giá** ở màn thống kê chi tiết nhập kho gia công.

## 8. Những điều cần lưu ý

⚠️ **Dòng giá "mọi trường hợp"** (không điều kiện, ưu tiên thấp nhất) nên có để làm giá mặc định. Đặt **Ưu tiên** cao cho dòng có điều kiện hẹp.

⚠️ Khác bảng giá thuê ngoài, bảng giá tại kho **không loại dòng trống khi lưu**. Dòng trống còn đơn giá 0 sẽ được lưu như một dòng giá bằng 0. **Xoá dòng trống** (biểu tượng xoá cuối dòng) trước khi bấm **Lưu lại**.

⚠️ **Một nguồn nhân lực có thể thuộc nhiều bảng giá.** Hệ thống chọn bảng giá có **ngày áp dụng mới nhất** không sau ngày phiếu (bằng nhau thì bảng tạo sau). Bảng giá cũ chỉ còn tác dụng với phiếu thuộc ngày cũ.

⚠️ Khi **Sao chép**, ngày áp dụng giữ nguyên ngày của bảng giá nguồn: nhớ đổi ngày.

⚠️ Hệ thống chỉ điền giá cho dòng thành phẩm có **đơn giá trống hoặc 0**, không ghi đè giá đã có.

### "Chọn ngày áp dụng" 

Nguyên nhân: để trống **NGÀY ÁP DỤNG**.
Cách xử lý: chọn ngày rồi **Lưu lại**.

### "Bạn chỉ được xóa phiếu do mình tạo" 

Nguyên nhân: người bấm **Xóa** ở danh sách không phải người đã tạo bảng giá.
Cách xử lý: nhờ người tạo xoá, hoặc lập bảng giá mới thay thế (xem [TỔNG QUAN MÀN HÌNH BẢNG GIÁ SẢN XUẤT](/bai-viet/2026-11-07-tl-e01-0-tong-quan-man-hinh-bang-gia-san-xuat/)).

## 10. Câu hỏi thường gặp

**Tại sao nhập xong mà phiếu không lấy giá?**
Kiểm tra: đã tick đúng **nguồn nhân lực** của phiếu; ngày áp dụng không sau ngày phiếu; đúng chi nhánh; dòng giá có khớp điều kiện (nhất là **SL tối đa** là nhỏ hơn hẳn và **Độ dày tối đa**).

**Có bắt buộc chọn nguồn nhân lực không?**
cửa sổ vẫn lưu được khi không chọn, nhưng khi đó bảng giá sẽ không được dùng cho phiếu nào.

## 11. Công việc tiếp theo

**Tiếp theo:** lập phiếu nhập kho gia công tại kho (sổ tay Sản xuất) để kiểm tra đơn giá tự điền.

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH BẢNG GIÁ SẢN XUẤT](/bai-viet/2026-11-07-tl-e01-0-tong-quan-man-hinh-bang-gia-san-xuat/) – Tổng quan màn hình Bảng giá sản xuất
- [HƯỚNG DẪN LẬP BẢNG GIÁ SẢN XUẤT THUÊ NGOÀI](/bai-viet/2026-11-07-tl-e01-1-huong-dan-lap-bang-gia-san-xuat-thue-ngoai/) – Lập bảng giá sản xuất thuê ngoài
- TL-A02 – Nguồn nhân lực; TL-D01 – Danh mục gia công
- Sổ tay Sản xuất – Phiếu nhập kho gia công; Thống kê chi tiết nhập kho gia công
