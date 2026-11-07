---
title: "HƯỚNG DẪN LẬP PHIẾU XUẤT HÀNG"
date: "2026-11-07"
summary: "Phiếu xuất hàng ghi nhận hàng rời kho không theo bán / trả hàng (xuất mẫu, dùng nội bộ, đốt lò, huỷ…)."
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

Phiếu xuất hàng ghi nhận hàng rời kho **không theo bán / trả hàng** (xuất mẫu, dùng nội bộ, đốt lò, huỷ…). Sau khi lưu, tồn kho giảm ngay; không phát sinh công nợ. Có thể tick **Tính giá thành** để đưa giá trị hàng xuất vào chi phí sản xuất của kỳ.

Bài này cũng áp dụng khi **Sửa** phiếu (cửa sổ **PHIẾU XUẤT HÀNG - CẬP NHẬT**).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu xuất hàng**.
- Kho xuất còn **đủ tồn được xuất** (cả theo lô nếu chọn lô).
- Có nội dung / lý do xuất (bắt buộc).
- (Nếu tick Tính giá thành) biết đối tượng tập hợp chi phí và tài khoản chi phí – hỏi kế toán giá thành.

## 2. Mở chức năng

**Kho hàng → Phiếu xuất hàng → Thêm mới**

## 3. Nhận biết màn hình

![Hình 1: cửa sổ PHIẾU XUẤT HÀNG - THÊM MỚI](/posts/2026-11-07-kho-a07-1-huong-dan-lap-phieu-xuat-hang/hinh-01-form-them-phieu-xuat-hang.png)

- **NGÀY XUẤT KHO**: Ý nghĩa: Bắt buộc, mặc định hôm nay
- **KHO XUẤT**: Ý nghĩa: Bắt buộc. Chọn kho trước để ô Hàng hóa hiện tồn đúng kho
- **MÃ PHIẾU GỐC**: Ý nghĩa: Không bắt buộc
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **GHI CHÚ**: Ý nghĩa: **Bắt buộc**: nội dung / lý do xuất
- **TÍNH GIÁ THÀNH**: Ý nghĩa: Ô tick **Đưa vào kỳ tính giá thành**
- **–**: Thành phần: **ĐỐI TƯỢNG TẬP HỢP CHI PHÍ**, **TK GIÁ THÀNH**; Ý nghĩa: Chỉ hiện khi tick. Không có trong Hình 1 (ảnh chụp lúc chưa tick)
- **Bảng chi tiết hàng hoá**: Ý nghĩa: Xem bảng cột dưới
- **Thêm một hàng, Tải lên từ Excel, Tải file mẫu**: Ý nghĩa: Thêm dòng / nạp từ file
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

Thiếu trường bắt buộc: câu báo chữ đỏ hiện **dưới bảng chi tiết**.

**Các cột trong bảng chi tiết:**

- **STT**: Nhập / tự tính: Tự đánh số (kéo biểu tượng ⠿ để đổi thứ tự)
- **Hàng hóa**: Nhập / tự tính: **Chọn** – bắt buộc; danh sách hiện "Tên, (tồn hiện tại, tồn được xuất, lô được xuất)"
- **Lô hàng**: Nhập / tự tính: **Chọn** (tuỳ chọn), mở được sau khi chọn hàng; hiện "mã lô, hạn dùng (tồn được xuất, lô được xuất)"
- **Đvt**: Nhập / tự tính: Tự lấy theo hàng hoá
- **Khối lượng, Kiện, M³**: Nhập / tự tính: Tự tính theo Số lượng
- **Số lượng**: Nhập / tự tính: **Nhập**
- **Chú thích**: Nhập / tự tính: **Nhập**
- **Thao tác**: Nhập / tự tính: Nút **+** (chèn dòng tại đây), nút xoá dòng

⚠️ Bảng chi tiết **lưu bố cục cột theo từng người dùng** (dùng chung cho thêm, sửa, xem). Nếu không thấy cột nào, **chuột phải vào tiêu đề cột → Khôi phục bố cục**.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kho hàng
   ↓
Phiếu xuất hàng
   ↓
Thêm mới
```

```text
Phiếu xuất hàng → Thêm mới
      ↓
Chọn Ngày, Kho xuất → ghi Ghi chú (lý do)
      ↓
(Tuỳ chọn) tick Tính giá thành → chọn ĐTTHCP, TK giá thành
      ↓
Nhập chi tiết:
   ├── tay: chọn hàng → (lô) → Số lượng
   └── Tải lên từ Excel (file theo Tải file mẫu)
      ↓
Lưu lại ── thiếu thông tin / không đủ tồn? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → tồn kho giảm
```

### Bước 1 – Mở cửa sổ thêm mới

Vào **Kho hàng → Phiếu xuất hàng**, bấm **Thêm mới**. cửa sổ **PHIẾU XUẤT HÀNG - THÊM MỚI** mở ra (Hình 1).

### Bước 2 – Nhập thông tin chung

- **NGÀY XUẤT KHO**: ngày xuất thực tế.
- **KHO XUẤT**: kho chứa hàng. Chọn trước khi nhập hàng.
- **MÃ PHIẾU GỐC**: số đề nghị xuất / chứng từ tay (nếu có).
- **GHI CHÚ**: ghi rõ lý do, ví dụ *Xuất mẫu cho khách A xem*, *Xuất củi đốt lò tháng 10*.

### Bước 3 – (Tuỳ chọn) Đưa vào giá thành

Chỉ tick khi hàng xuất được dùng cho **sản xuất** (vật tư, nhiên liệu cho xưởng):

1. Tick **Đưa vào kỳ tính giá thành**. Hai ô **ĐỐI TƯỢNG TẬP HỢP CHI PHÍ**, **TK GIÁ THÀNH** hiện ra.
2. **ĐỐI TƯỢNG TẬP HỢP CHI PHÍ**: chọn nếu là chi phí trực tiếp của một đối tượng; bỏ trống = chi phí chung (chữ mờ *Có THCP: chi phí trực tiếp — Bỏ trống: chi phí chung*).
3. **TK GIÁ THÀNH**: chọn tài khoản 62x / 64x; bỏ trống thì dùng mặc định (chữ mờ *Bỏ trống: mặc định theo cấu hình*).

Bỏ tick thì hai ô này được xoá trắng.

### Bước 4 – Nhập chi tiết bằng tay

1. Bấm vào ô **Hàng hóa** ở dòng trống (hoặc **Thêm một hàng**). Gõ mã / tên, chọn hàng (Hình 2). Số trong ngoặc giúp kiểm tra tồn trước.
2. (Nếu xuất đúng lô) bấm ô **Lô hàng**, chọn lô.
3. Nhập **Số lượng**; **Khối lượng**, **Kiện**, **M³** tự tính.
4. Nhập **Chú thích** nếu cần. Chuột phải vào ô **Số lượng** / **Chú thích** → **Áp dụng cho những dòng dưới**.
5. Xoá các dòng trống (thùng rác) trước khi lưu – dòng trống báo **Hàng hóa là bắt buộc**.

![Hình 2: Chọn hàng hoá, xem tồn trong ô Hàng hóa](/posts/2026-11-07-kho-a07-1-huong-dan-lap-phieu-xuat-hang/hinh-02-chon-hang-hoa-xem-ton.png)

### Bước 5 – (Tuỳ chọn) Tải lên từ Excel

1. Bấm **Tải file mẫu** để lấy **[TEMPLATE IMPORT] DCK-XCK-XH.xlsx**. Giữ dòng tiêu đề; xoá dữ liệu mẫu từ dòng 2; nhập **mahanghoa**, **soluong**, **chuthich**.
2. Bấm **Tải lên từ Excel**, chọn file. Bảng chi tiết được **thay toàn bộ** bằng dòng trong file.
3. Mã không có trong danh mục: dòng có **Chú thích** dạng **"<chú thích>" Lỗi! Sản phẩm không tồn tại, hoặc ngưng kinh doanh.** và không có hàng hoá – sửa hoặc xoá dòng đó.

### Bước 6 – Lưu lại

Kiểm tra lại cửa sổ (Hình 3) rồi bấm **Lưu lại**.

- Thiếu thông tin chung: câu báo đỏ dưới bảng (**Chọn ngày xuất kho**, **Vui lòng chọn kho xuất**, **Vui lòng ghi nội dung xuất kho**).
- Dòng sai: cảnh báo **<số dòng>. Hàng hóa là bắt buộc** / **<số dòng>. Số lượng >= 0**.
- Không đủ tồn: toast **CẢNH BÁO – Lỗi thêm: …** (xem phần “Vướng mắc thường gặp”).
- Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại.

![Hình 3: cửa sổ đã nhập trước khi lưu](/posts/2026-11-07-kho-a07-1-huong-dan-lap-phieu-xuat-hang/hinh-03-form-da-nhap.png)

### Sửa phiếu

Bấm **Sửa** → **PHIẾU XUẤT HÀNG - CẬP NHẬT**. Sửa được mọi trường và chi tiết. Tồn kho được tính lại theo số mới.

## 6. Giải thích các thông tin trên màn hình

- **Ngày xuất kho**: Ý nghĩa: Ngày xuất; Bắt buộc: Có; Lưu ý: Dùng lọc danh sách (cột **Ngày xuất hàng**), sinh mã
- **Kho xuất**: Ý nghĩa: Kho chứa hàng; Bắt buộc: Có; Lưu ý: Tồn kho này bị trừ
- **Mã phiếu gốc**: Ý nghĩa: Chứng từ tay; Bắt buộc: Không
- **Mã phiếu**: Ý nghĩa: Mã phiếu (**XH…**); Lưu ý: Tự tạo
- **Ghi chú**: Ý nghĩa: Nội dung / lý do xuất; Bắt buộc: **Có**; Lưu ý: Hiện ở cột **Ghi chú** và bản in **Ghi chú/Lý do**
- **Tính giá thành**: Ý nghĩa: Đưa vào chi phí kỳ tính giá thành; Bắt buộc: Không; Lưu ý: Xem phần “Những điều cần lưu ý”
- **Đối tượng tập hợp chi phí**: Ý nghĩa: Đối tượng nhận chi phí trực tiếp; Bắt buộc: Không; Lưu ý: Hiện khi tick; trống = chi phí chung
- **TK giá thành**: Ý nghĩa: TK 62x / 64x ghi chi phí; Bắt buộc: Không; Lưu ý: Hiện khi tick; trống = mặc định (621)
- **Hàng hóa**: Ý nghĩa: Mặt hàng xuất; Bắt buộc: Có (mỗi dòng)
- **Lô hàng**: Ý nghĩa: Lô xuất; Bắt buộc: Không; Lưu ý: Có lô thì kiểm tra tồn theo lô
- **Đvt**: Ý nghĩa: Đơn vị tính chính; Lưu ý: Tự lấy
- **Khối lượng / Kiện / M³**: Ý nghĩa: Tự tính
- **Số lượng**: Ý nghĩa: Số lượng xuất; Bắt buộc: Có; Lưu ý: ≥ 0; ≤ tồn được xuất
- **Chú thích**: Ý nghĩa: Ghi chú dòng; Bắt buộc: Không; Lưu ý: In ở cột GHI CHÚ

## 7. Kiểm tra sau khi thực hiện

- Phiếu được lưu với mã **XH…**, hiện ở **PHIẾU XUẤT HÀNG - DANH SÁCH** và thống kê **Xuất khác** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT XUẤT KHÁC](/bai-viet/2026-11-07-kho-c03-0-tong-quan-man-hinh-thong-ke-chi-tiet-xuat-khac/)).
- **Tồn kho** (và tồn lô nếu chọn lô) của kho xuất giảm; sổ cái kho có dòng **XUAT_KHO**, nguồn **XUAT_HANG**, xuất theo giá vốn bình quân, **giá vốn không đổi** ([TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/)).
- (Nếu tick Tính giá thành) khi tính giá thành kỳ, giá trị = Số lượng × giá vốn cuối kỳ được đưa vào chi phí (trực tiếp nếu có ĐTTHCP, chung nếu bỏ trống).

## 8. Những điều cần lưu ý

⚠️ Sau nạp Excel hoặc trước lưu, kiểm tra ít nhất một dòng hàng thực tế, số lượng dương, đúng mã/kho/lô. Đừng chọn lô khác chỉ vì còn tồn nếu không phải lô thực xuất. Các luồng dùng ĐVT quy đổi còn cần đối chiếu lượng trừ tồn trước áp dụng dữ liệu thật.

⚠️ **GHI CHÚ bắt buộc** – ghi rõ lý do để kế toán đối chiếu.

⚠️ **Chỉ tick TÍNH GIÁ THÀNH khi hàng xuất dùng cho sản xuất.** Tick nhầm hàng xuất mẫu / tặng sẽ đẩy chi phí vào giá thành sản phẩm.

⚠️ **Tải lên từ Excel** thay toàn bộ các dòng đang có.

⚠️ Bấm **Đóng** không hỏi lại, dữ liệu đang nhập bị mất.

### "CẢNH BÁO – Lỗi thêm: "<tên kho>", "<tên hàng>" không đủ tồn (<số>), lô còn (<số>)." 

Nguyên nhân: kho xuất không còn đủ tồn được xuất cho dòng không chọn lô.
Cách xử lý: đối chiếu kho/lô thực xuất và phần giữ hàng; chỉ ghi số có thể giao thực tế. Nếu còn sai lệch, báo thủ kho/kế toán; không chuyển tùy ý sang một lô khác để lưu.

### "CẢNH BÁO – Lỗi thêm: Lô "<mã lô>" "<tên hàng>" không đủ tồn (<số>)." 

Nguyên nhân: lô đã chọn không còn đủ tồn được xuất.
Cách xử lý: chọn lô khác hoặc giảm số lượng.

### Dưới bảng báo "Vui lòng ghi nội dung xuất kho" / "Vui lòng chọn kho xuất" / "Chọn ngày xuất kho" 

Nguyên nhân: thiếu trường bắt buộc.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "<số dòng>. Hàng hóa là bắt buộc" 

Nguyên nhân: còn dòng trống hoặc dòng Excel có mã sai.
Cách xử lý: xoá dòng trống, sửa mã hàng.

### "Không có sản phẩm" khi tải Excel 

Nguyên nhân: file trống, sai tiêu đề cột, hoặc không mã nào khớp danh mục.
Cách xử lý: dùng **Tải file mẫu**, giữ tiêu đề **mahanghoa**, **soluong**, **chuthich**.

## 10. Câu hỏi thường gặp

**Ô Hàng hóa hiện "(7, 7, 0)" nghĩa là gì?**
Tồn hiện tại, tồn được xuất, tồn lô được xuất của kho xuất đang chọn.

**Có phải chọn lô không?**
Không bắt buộc. Hàng quản lý theo lô nên chọn lô để tồn lô đúng.

**Phiếu xuất hàng có giá không?**
Không nhập giá. Giá trị được tính theo giá vốn bình quân ở sổ cái kho.

## 11. Công việc tiếp theo

**Tiếp theo:** in phiếu (chuột phải → **In Phiếu**, [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-0-tong-quan-man-hinh-phieu-xuat-hang/)); kế toán kiểm tra ở **Thống kê kho → Xuất khác** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT XUẤT KHÁC](/bai-viet/2026-11-07-kho-c03-0-tong-quan-man-hinh-thong-ke-chi-tiet-xuat-khac/)).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-0-tong-quan-man-hinh-phieu-xuat-hang/) – Tổng quan màn hình Phiếu xuất hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-0-tong-quan-man-hinh-phieu-dieu-chinh-kho/) – Tổng quan màn hình Phiếu điều chỉnh kho
- [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/) – Tổng quan màn hình Sổ cái kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT XUẤT KHÁC](/bai-viet/2026-11-07-kho-c03-0-tong-quan-man-hinh-thong-ke-chi-tiet-xuat-khac/) – Thống kê xuất khác
- Sổ tay Giá thành – Đối tượng tập hợp chi phí, Kỳ tính giá thành
