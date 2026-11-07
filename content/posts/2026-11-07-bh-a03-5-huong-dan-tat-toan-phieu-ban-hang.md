---
title: "HƯỚNG DẪN TẤT TOÁN PHIẾU BÁN HÀNG"
date: "2026-11-07"
summary: "Khi phiếu bán hàng đã xuất kho một phần mà khách không lấy phần còn lại (đổi ý, hết hàng, giao thiếu…), bạn tất toán phần đó."
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

Khi phiếu bán hàng đã **xuất kho một phần** mà khách không lấy phần còn lại (đổi ý, hết hàng, giao thiếu…), bạn **tất toán** phần đó. Khi lưu:

- Số lượng tất toán **không còn được giữ** trong kho (tồn được xuất của kho tăng lại tương ứng).
- **Thành tiền** dòng và **Tổng tiền** phiếu được tính lại, trừ phần tất toán.
- **Trạng thái xuất** được tính lại (thường thành **Đã xuất**).

Tất toán không làm thay đổi tồn kho thực tế và công nợ khách (công nợ chỉ theo phiếu xuất kho đã lập).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Tất toán** của màn hình **Phiếu bán hàng**.
- Phiếu có **Trạng thái xuất** là **Đang xuất** hoặc **Đã xuất** (phiếu **Chưa xuất** không tất toán được – muốn huỷ thì **Xóa**).

## 2. Mở chức năng

**Bán hàng → Phiếu bán hàng → Tất toán** (ở cột **Thao tác** của dòng phiếu)

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ PHIẾU BÁN HÀNG - TẤT TOÁN](/posts/2026-11-07-bh-a03-5-huong-dan-tat-toan-phieu-ban-hang/hinh-01-tat-toan-phieu-ban-hang.png)

- **Thông tin chung**: Ý nghĩa: Bị khoá
- **SL đã xuất**: Ý nghĩa: Số lượng đã xuất kho
- **SL tất toán**: Ý nghĩa: Ô duy nhất nhập được
- **SL còn lại**: Ý nghĩa: Số lượng − SL đã xuất − SL tất toán
- **Số lượng lô**: Ý nghĩa: Hàng theo lô: bấm để mở **CHI TIẾT LÔ**, nhập cột **T.TOÁN**
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

## 4. Trình tự công việc

```text
Tất toán (phiếu Đang xuất / Đã xuất) → PHIẾU BÁN HÀNG - TẤT TOÁN
      ↓
Mỗi dòng còn lại: nhập SL tất toán (≤ phần chưa xuất)
   (hàng theo lô: Số lượng lô → CHI TIẾT LÔ → cột T.TOÁN)
      ↓
Lưu lại ── "Tất toán vượt mức cho phép"? ──► giảm số → Lưu lại
      ↓
"Lưu thành công" → bỏ giữ phần tất toán, tính lại Thành tiền, Trạng thái xuất
```

### Bước 1 – Mở cửa sổ tất toán

Ở **PHIẾU BÁN HÀNG - DANH SÁCH**, bấm **Tất toán** ở dòng phiếu. Cửa sổ **PHIẾU BÁN HÀNG - TẤT TOÁN** mở ra (Hình 1).

### Bước 2 – Nhập SL tất toán

Với mỗi dòng còn **SL còn lại**, bấm ô **SL tất toán**  và nhập số lượng khách không lấy. Nếu dòng chưa từng tất toán, có thể nhập đúng **SL còn lại** để đóng hết. Nếu đã có tất toán, ô này là tổng SL tất toán cần lưu: muốn đóng thêm phải cộng phần mới vào giá trị cũ và không vượt phần chưa xuất. Ví dụ Hình 1: Số lượng 2, SL đã xuất 1 → SL tất toán 1, SL còn lại về 0.

Hàng theo lô: bấm ô **Số lượng lô**  → cửa sổ **CHI TIẾT LÔ** có thêm cột **T.TOÁN**; nhập số tất toán của từng lô (không vượt phần lô chưa xuất), bấm **Đồng ý**.

### Bước 3 – Lưu

Bấm **Lưu lại**. Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại; **Tổng tiền**  giảm còn phần đã xuất (ví dụ 354,240 → 177,120), **Trạng thái xuất** = **Đã xuất**; cột **Thao tác** chỉ còn **Tất toán**  (Hình 2).

![Hình 2: Danh sách sau khi tất toán](/posts/2026-11-07-bh-a03-5-huong-dan-tat-toan-phieu-ban-hang/hinh-02-sau-tat-toan.png)

## 6. Giải thích các thông tin trên màn hình

- **SL tất toán**: Ý nghĩa: Số lượng không xuất nữa; Bắt buộc: Không; Lưu ý: 0 ≤ SL ≤ Số lượng − SL đã xuất
- **T.TOÁN (lô)**: Ý nghĩa: Số tất toán theo từng lô; Bắt buộc: Không; Lưu ý: ≤ SL lô − SL lô đã xuất
- **SL đã xuất**: Ý nghĩa: Đã xuất kho; Lưu ý: Chỉ xem
- **SL còn lại**: Ý nghĩa: Còn chưa xuất; Lưu ý: Tự tính

## 7. Kiểm tra sau khi thực hiện

- **SL tất toán** được lưu; phần đó không còn giữ trong kho xuất.
- **Thành tiền**, **Tổng tiền** trừ phần tất toán; **Trạng thái xuất** tính lại.
- Thủ kho không còn xuất được phần đã tất toán.
- Lịch sử phiếu ghi thao tác **Tất toán**.

## 8. Những điều cần lưu ý

⚠️ Chỉ tất toán được phần **chưa xuất**. Hàng đã xuất mà khách trả lại → lập **Khách trả hàng** (BH-A04).

⚠️ Phiếu **Chưa xuất** không tất toán được (liên kết không hiện; máy chủ báo **Phiếu chưa xuất**). Huỷ cả phiếu thì **Xóa**.

⚠️ Bấm **Đóng** không hỏi lại; số đã nhập bị mất.

### "<số dòng>. Số lượng tất toán cho phép 0 hoặc <số>" 

Nguyên nhân: SL tất toán âm hoặc lớn hơn số lượng của dòng.
Cách xử lý: nhập lại trong khoảng cho phép.

### "CẢNH BÁO – Lỗi sửa: Tất toán vượt mức cho phép: <số>" 

Nguyên nhân: SL tất toán lớn hơn phần chưa xuất. Số trong câu báo là mức tối đa (theo đơn vị chính).
Cách xử lý: giảm SL tất toán.

### "CẢNH BÁO – Lỗi sửa: Có người đã sửa phiếu này. Kiểm tra và thao tác lại." 

Nguyên nhân: phiếu vừa được người khác cập nhật (ví dụ kho vừa xuất thêm).
Cách xử lý: **Đóng**, tải lại danh sách, mở **Tất toán** lại.

### "CẢNH BÁO – Lỗi sửa: Phiếu chưa xuất" 

Nguyên nhân: phiếu chưa có dòng nào xuất kho.
Cách xử lý: dùng **Sửa** / **Xóa** thay vì tất toán.

## 10. Câu hỏi thường gặp

**Tất toán xong muốn xuất tiếp phần đó thì sao?**
Mở **Tất toán** lại, giảm **SL tất toán** rồi **Lưu lại**; phần đó trở lại chờ xuất (nếu kho còn đủ tồn được xuất).

## 11. Công việc tiếp theo

Mở lại phiếu để đối chiếu SL tất toán, phần còn xuất, tổng tiền và trạng thái; kiểm tra riêng từng lô nếu có. Kiểm tra lại công nợ khách ở sổ tay Kế toán nếu đã thu tiền trước theo tổng cũ.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/) – Tổng quan màn hình Phiếu bán hàng
- [HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/) – Hướng dẫn lập phiếu khách trả hàng từ phiếu xuất kho
- [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/) – Hướng dẫn lập phiếu xuất kho bán hàng
