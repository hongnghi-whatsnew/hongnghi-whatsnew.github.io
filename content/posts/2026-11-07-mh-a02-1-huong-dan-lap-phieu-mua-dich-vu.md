---
title: "HƯỚNG DẪN LẬP PHIẾU MUA DỊCH VỤ"
date: "2026-11-07"
summary: "Phiếu mua dịch vụ ghi nhận hoá đơn dịch vụ mua ngoài của NCC (vận chuyển, bốc xếp, gia công, sửa chữa…)."
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

Phiếu mua dịch vụ ghi nhận hoá đơn dịch vụ mua ngoài của NCC (vận chuyển, bốc xếp, gia công, sửa chữa…). Khi lưu, **công nợ phải trả NCC tăng ngay** bằng **Tổng tiền** của phiếu.

cửa sổ phiếu mua dịch vụ giống cửa sổ phiếu mua hàng. Bài này chỉ nêu **các bước và các điểm khác**; phần giống nhau dẫn sang **[HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/)** (lập tay, Từ bảng giá) và **[HƯỚNG DẪN LẬP PHIẾU MUA HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/)** (Từ đơn hàng). Bài cũng áp dụng khi **Sửa** phiếu (cửa sổ **CẬP NHẬT - PHIẾU MUA HÀNG, DỊCH VỤ**).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như bảng trên (xem thêm [TỔNG QUAN MÀN HÌNH PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-0-tong-quan-man-hinh-phieu-mua-dich-vu/), phần “Chuẩn bị trước khi thực hiện”).
- NCC dịch vụ đã có trong danh mục **Nhà cung cấp**.
- Dịch vụ đã có mã trong danh mục **Hàng hoá** (ví dụ *PHÍ VẬN CHUYỂN*, đơn vị *CHUYẾN*).
- Có hoá đơn dịch vụ: số hoá đơn, nội dung, số lượng, đơn giá, VAT; biết thanh toán từ ngân hàng / quỹ nào hoặc *Thanh toán sau*.

## 2. Mở chức năng

**Mua hàng → Phiếu mua dịch vụ → Thêm mới**

## 3. Nhận biết màn hình

![Hình 1: cửa sổ THÊM MỚI - PHIẾU MUA HÀNG, DỊCH VỤ](/posts/2026-11-07-mh-a02-1-huong-dan-lap-phieu-mua-dich-vu/hinh-01-form-them-phieu-mua-dich-vu.png)

Bố cục cửa sổ, các ô đầu phiếu, bảng chi tiết và nút dưới cửa sổ giống bài **[HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/)** (xem phần “Nhận biết màn hình”). Các điểm khác:

- **Tiêu đề**: Phiếu mua dịch vụ: **THÊM MỚI - PHIẾU MUA HÀNG, DỊCH VỤ**
- **CHI PHÍ**: Phiếu mua dịch vụ: **Chọn được**: **Không là chi phí** (mặc định) / **Là chi phí**; có nút ✕ để xoá chọn
- **TÍNH GIÁ THÀNH**: Phiếu mua dịch vụ: Dùng được cho dịch vụ phục vụ sản xuất; ô **TK GIÁ THÀNH** để trống thì dùng tài khoản mặc định cho dịch vụ mua ngoài (**6277**)
- **Cột Hàng hóa**: Phiếu mua dịch vụ: Chọn **mã dịch vụ**
- **NỢ CŨ**: Phiếu mua dịch vụ: Công nợ phải trả NCC trước phiếu này (đã gồm các phiếu dịch vụ trước)

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Mua hàng
   ↓
Phiếu mua dịch vụ
   ↓
Thêm mới
```

```text
Phiếu mua dịch vụ → Thêm mới
      ↓
Ngày mua hàng, Nhà cung cấp → Nợ cũ, địa chỉ, điện thoại tự điền
      ↓
Chứng từ/HĐ, Ghi chú (nguồn thanh toán), Ngày hạch toán
      ↓
Chi phí: Không là chi phí / Là chi phí · (Tuỳ chọn) Tính giá thành
      ↓
Dòng dịch vụ: chọn mã dịch vụ → Số lượng, Đơn giá, CK, VAT
      ↓
Lưu lại → "Lưu thành công" → công nợ NCC tăng ngay = Tổng tiền
      ↓
(Tuỳ chọn) Kho: phân bổ vào phiếu nhập kho · Kế toán: phiếu chi
```

### Bước 1 – Mở cửa sổ

Vào **Mua hàng → Phiếu mua dịch vụ**, bấm **Thêm mới**. cửa sổ **THÊM MỚI - PHIẾU MUA HÀNG, DỊCH VỤ** mở ra (Hình 1).

⚠️ Mở đúng menu **Phiếu mua dịch vụ**. Lập từ menu **Phiếu mua hàng** thì phiếu thành phiếu mua hàng hoá và **không ghi công nợ** cho tới khi nhập kho.

### Bước 2 – Nhập thông tin đầu phiếu

Làm như **[HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/), bước 2–3**:

- **NGÀY MUA HÀNG**, **NHÀ CUNG CẤP** (bắt buộc; sau khi lưu không đổi được NCC).
- **CHỨNG TỪ/HĐ**: số hoá đơn dịch vụ.
- **GHI CHÚ** (bắt buộc): nguồn thanh toán hoặc *Thanh toán sau*.
- **NGÀY HẠCH TOÁN** (bắt buộc).

### Bước 3 – Chọn Chi phí và Tính giá thành

- **CHI PHÍ**: chọn **Là chi phí** nếu dịch vụ được hạch toán là chi phí; giữ **Không là chi phí** nếu không. Cách chọn theo quy định của kế toán.
- **TÍNH GIÁ THÀNH**: tick khi dịch vụ phục vụ sản xuất cần đưa vào kỳ tính giá thành. Hệ thống nhắc *Lưu ý: chỉ tích "Tính giá thành" cho phiếu mua DỊCH VỤ / chi phí phục vụ sản xuất (đưa vào 627)…* và hiện:
  - **ĐỐI TƯỢNG TẬP HỢP CHI PHÍ**: chọn nếu là chi phí trực tiếp; để trống = chi phí chung.
  - **TK GIÁ THÀNH**: để trống = **6277** (dịch vụ mua ngoài).

### Bước 4 – Nhập dòng dịch vụ

1. Bấm vào ô **Hàng hóa** (hoặc **Thêm một hàng**), gõ tên / mã dịch vụ và chọn.
2. Nhập **Số lượng**, **Đơn giá** theo hoá đơn, **Chiết khấu**, **Thuế VAT**.
3. Có thể tick cột **Là chi phí** từng dòng, ghi **Chú thích** / **Chú thích nội bộ**.
4. Kiểm tra **Thành tiền** và tổng cuối bảng khớp hoá đơn (đã gồm VAT).

Cách tính, mẹo chuột phải, **Từ bảng giá**: xem [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/) bước 4–5. **Từ đơn hàng**: xem [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/).

Xoá dòng trống cuối bảng (biểu tượng thùng rác) trước khi lưu.

![Hình 2: Dòng dịch vụ trong bảng chi tiết](/posts/2026-11-07-mh-a02-1-huong-dan-lap-phieu-mua-dich-vu/hinh-02-dong-dich-vu.png)

### Bước 5 – Lưu lại

Bấm **Lưu lại**. Các câu báo thiếu thông tin giống [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/) bước 6. Hợp lệ: **Lưu thành công**, cửa sổ đóng, phiếu hiện ở **PHIẾU MUA HÀNG, DỊCH VỤ - DANH SÁCH** với **Loại phiếu** = **muadichvu**.

### Bước 6 – (Tuỳ chọn) Phân bổ vào phiếu nhập kho

Nếu dịch vụ là chi phí của một lô hàng nhập (ví dụ phí vận chuyển), thủ kho mở phiếu nhập kho của lô đó → tab **CHI PHÍ** → **Chứng từ chi phí**, chọn phiếu mua dịch vụ này rồi **Phân bổ chi phí** (sổ tay Kho hàng). Số được phân bổ là **tổng tiền trước VAT** của phiếu.

### Sửa phiếu

Bấm **Sửa** → **CẬP NHẬT - PHIẾU MUA HÀNG, DỊCH VỤ**. Sửa được ngày, chứng từ, ghi chú, chi phí, giá thành và các dòng; **không đổi được NCC**. Công nợ NCC tự điều chỉnh theo **Tổng tiền** mới.

## 6. Giải thích các thông tin trên màn hình

Các trường chung: xem phần “Giải thích các thông tin trên màn hình” bài **[HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/)**. Riêng phiếu mua dịch vụ:

- **Chi phí**: Ý nghĩa: Đánh dấu cả phiếu **Là chi phí** / **Không là chi phí**; Bắt buộc: Không; Lưu ý: Mặc định **Không là chi phí**
- **Là chi phí (cột dòng)**: Ý nghĩa: Đánh dấu từng dòng; Bắt buộc: Không; Lưu ý: Hiện ở thống kê Mua dịch vụ chi tiết ([TỔNG QUAN MÀN HÌNH THỐNG KÊ MUA DỊCH VỤ CHI TIẾT](/bai-viet/2026-11-07-mh-b01-0-tong-quan-man-hinh-thong-ke-mua-dich-vu-chi-tiet/))
- **Tính giá thành**: Ý nghĩa: Đưa phiếu vào kỳ tính giá thành; Bắt buộc: Không; Lưu ý: Dịch vụ phục vụ sản xuất
- **TK giá thành**: Ý nghĩa: Tài khoản ghi chi phí giá thành; Bắt buộc: Không; Lưu ý: Trống = 6277
- **Hàng hóa**: Ý nghĩa: Mã dịch vụ; Bắt buộc: Có; Lưu ý: Chọn từ danh mục Hàng hoá
- **Thành tiền**: Ý nghĩa: Đơn giá × (1 − CK) × (1 + VAT) × (Số lượng − SL tất toán); Lưu ý: Tự tính
- **Tổng tiền**: Ý nghĩa: Tổng Thành tiền; Lưu ý: = số **công nợ phải trả NCC** của phiếu

## 7. Kiểm tra sau khi thực hiện

- Phiếu được lưu với mã **MH…** tự động, hiện ở danh sách Phiếu mua dịch vụ.
- **Công nợ phải trả NCC tăng ngay** bằng **Tổng tiền** (xem ở ô **NỢ CŨ** của phiếu kế tiếp, hoặc thống kê công nợ NCC – sổ tay Kế toán).
- Tồn kho **không** thay đổi.
- Phiếu có thể được chọn làm **chứng từ chi phí** trong phiếu nhập kho.

## 8. Những điều cần lưu ý

⚠️ **Công nợ ghi ngay khi lưu.** Nhập sai số tiền là công nợ sai ngay. Kiểm tra kỹ trước khi **Lưu lại**.

⚠️ **Sửa / Tất toán / Xóa** đều làm công nợ NCC thay đổi theo. Phiếu đã có phiếu chi thanh toán thì phối hợp với kế toán trước khi sửa.

⚠️ Phiếu đã **phân bổ** vào phiếu nhập kho: không xoá được; nếu sửa giảm số tiền xuống dưới số đã phân bổ, hệ thống **không** chặn – phải báo thủ kho điều chỉnh phân bổ.

⚠️ **GHI CHÚ bắt buộc** ghi nguồn thanh toán hoặc *Thanh toán sau*.

⚠️ Không tick **TÍNH GIÁ THÀNH** nếu dịch vụ đã được phân bổ vào giá nhập kho (tránh tính chi phí hai lần).

Ghi nguồn thanh toán trong GHI CHÚ không phải là đã chi tiền. Sau lưu, đối chiếu đúng Loại phiếu = muadichvu, số trước/sau VAT, công nợ và số đã phân bổ. Nếu sửa giá trị hoặc tất toán phiếu đã phân bổ, đối chiếu lại các phiếu nhập kho liên quan; không mặc định số phân bổ cũ tự thay theo tổng mới.

### Dưới cửa sổ báo "Vui lòng ghi rõ thanh toán từ ngân hàng hoặc Quỹ nào trường hợp thanh toán sau thì ghi chữ -Thanh toán sau-" 

Nguyên nhân: để trống **GHI CHÚ**.
Cách xử lý: ghi nguồn thanh toán hoặc *Thanh toán sau*.

### Không thấy mã dịch vụ khi chọn Hàng hóa 

Nguyên nhân: dịch vụ chưa có trong danh mục Hàng hoá.
Cách xử lý: nhờ người quản lý danh mục thêm mã dịch vụ (sổ tay Thiết lập danh mục – Hàng hoá).

### Lập nhầm ở menu Phiếu mua hàng nên công nợ không tăng 

Nguyên nhân: phiếu lập ở menu **Phiếu mua hàng** là phiếu mua hàng hoá.
Cách xử lý: xác định phiếu nhầm đã có nhập kho, phân bổ, thanh toán hoặc kỳ giá thành liên quan chưa. Chuyển kế toán duyệt cách sửa/xóa/lập lại theo tình trạng thật; không tự xóa rồi lập phiếu dịch vụ để bù công nợ khi chưa đối chiếu.

### Các lỗi sửa / xoá

Xem phần “Vướng mắc thường gặp” bài [TỔNG QUAN MÀN HÌNH PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-0-tong-quan-man-hinh-phieu-mua-dich-vu/) và [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/).

## 10. Câu hỏi thường gặp

**Phiếu mua dịch vụ có cần nhập kho không?**
Không. Phiếu không xuất hiện ở danh sách chọn phiếu mua của phiếu nhập kho.

**Phí vận chuyển nên ghi Là chi phí hay Không là chi phí?**
Theo quy định kế toán của công ty. Hỏi kế toán trước khi lập.

**Phân bổ vào phiếu nhập kho lấy số trước hay sau VAT?**
Trước VAT (tổng tiền hàng của phiếu dịch vụ).

## 11. Công việc tiếp theo

```text
Phiếu mua dịch vụ
        ├──► (Kho) Phiếu nhập kho → tab CHI PHÍ → phân bổ vào giá nhập
        └──► (Kế toán) Phiếu chi trả NCC → công nợ giảm
```

**Tiếp theo:** sổ tay Kế toán – Phiếu chi; sổ tay Kho hàng – Phiếu nhập kho (phân bổ chi phí).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-0-tong-quan-man-hinh-phieu-mua-dich-vu/) – Tổng quan màn hình Phiếu mua dịch vụ
- [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/) – Hướng dẫn lập phiếu mua hàng
- [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/) – Hướng dẫn lập phiếu mua hàng từ phiếu đặt hàng
- [HƯỚNG DẪN TẤT TOÁN PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-3-huong-dan-tat-toan-phieu-mua-hang/) – Hướng dẫn tất toán phiếu mua hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ MUA DỊCH VỤ CHI TIẾT](/bai-viet/2026-11-07-mh-b01-0-tong-quan-man-hinh-thong-ke-mua-dich-vu-chi-tiet/) – Tổng quan màn hình Mua dịch vụ chi tiết
- Sổ tay Kho hàng – Phiếu nhập kho (phân bổ chi phí)
- Sổ tay Kế toán – Phiếu chi
