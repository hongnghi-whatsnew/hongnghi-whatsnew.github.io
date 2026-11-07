---
title: "HƯỚNG DẪN LẬP PHIẾU BÁN DỊCH VỤ"
date: "2026-11-07"
summary: "Bài này hướng dẫn lập phiếu bán dịch vụ cho khách: chọn khách, chọn các dịch vụ (PHÍ VẬN CHUYỂN, BẢO HIỂM…), nhập số lượng, đơn giá, chiết khấu, VAT rồi lưu."
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

Bài này hướng dẫn lập phiếu bán dịch vụ cho khách: chọn khách, chọn các dịch vụ (**PHÍ VẬN CHUYỂN**, **BẢO HIỂM**…), nhập số lượng, đơn giá, chiết khấu, VAT rồi lưu. Bài cũng áp dụng khi **Sửa** phiếu.

cửa sổ giống cửa sổ phiếu bán hàng ([HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/)) nhưng **không có ô KHO HÀNG**, danh sách hàng chỉ gồm các mặt hàng loại *khác* (dịch vụ, phí), không kiểm tra tồn, không cần duyệt giá. **Ngay khi lưu, công nợ khách tăng bằng Tổng tiền của phiếu.**

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** (bộ quyền **Phiếu bán hàng**, xem [TỔNG QUAN MÀN HÌNH PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-0-tong-quan-man-hinh-phieu-ban-dich-vu/)).
- Khách hàng đã có trong danh mục, có **Mã số thuế / CCCD**.
- Dịch vụ cần bán đã khai báo trong danh mục hàng hoá với loại *khác* (hiện có: **PHÍ VẬN CHUYỂN**, **PHÍ VẬN CHUYỂN (KIỆN)**, **BẢO HIỂM**, **PHUY RỖNG**, **TỶ GIÁ**, **THUẾ GTGT**).

## 2. Mở chức năng

**Bán hàng → Phiếu bán dịch vụ → Thêm mới**

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ PHIẾU BÁN HÀNG, DỊCH VỤ - THÊM MỚI](/posts/2026-11-07-bh-a06-1-huong-dan-lap-phieu-ban-dich-vu/hinh-01-form-them-phieu-ban-dich-vu.png)

- **MÃ SỐ THUẾ**: Ý nghĩa: Tự điền theo khách, chỉ xem. Bắt buộc có giá trị
- **KHÁCH HÀNG**: Ý nghĩa: Bắt buộc. Phải chọn khách thì bảng chi tiết và các nút dưới mới mở. Chọn xong ô hiện "<số>, <mã KH>, <tên rút gọn>, <tên khách>"
- **QUÁ HẠN, NỢ CŨ**: Ý nghĩa: Nợ quá hạn và công nợ hiện tại của khách, tự điền
- **NGÀY BÁN HÀNG**: Ý nghĩa: Bắt buộc, mặc định hôm nay
- **ĐỊA CHỈ GIAO**: Ý nghĩa: Bắt buộc: ô *Số nhà, đường...* + ô *Chọn khu vực* + nút **Tại kho**
- **ĐIỆN THOẠI, SỐ NGÀY NỢ**: Ý nghĩa: Tự điền theo khách, sửa được
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **N/V KINH DOANH**: Ý nghĩa: Bắt buộc, mặc định là bạn
- **GHI CHÚ**: Ý nghĩa: Bắt buộc khi **SỐ NGÀY NỢ** = 0
- **SỐ HỢP ĐỒNG**: Ý nghĩa: Hợp đồng còn hạn của khách, chỉ xem
- **TÀI KHOẢN**: Ý nghĩa: Tài khoản ngân hàng nhận tiền (tuỳ chọn); bản in có mã QR chuyển khoản
- **Bảng chi tiết dịch vụ**: Ý nghĩa: Mở khi đã chọn khách. **Không có ô KHO HÀNG**
- **Thêm một hàng, TỪ PHIẾU ĐẶT HÀNG, Tải lên từ Excel, Tải file mẫu**: Ý nghĩa: Thêm dòng / nhập Excel (cách làm như [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU BÁN HÀNG TỪ EXCEL](/bai-viet/2026-11-07-bh-a03-3-huong-dan-nhap-chi-tiet-phieu-ban-hang-tu-excel/)). **Không dùng TỪ PHIẾU ĐẶT HÀNG** trên phiếu dịch vụ (xem phần “Những điều cần lưu ý”)
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Các cột trong bảng chi tiết** (cùng bảng với phiếu bán hàng; thứ tự như trên màn hình, kéo thanh cuộn ngang để xem các cột sau **Đơn giá**):

- **STT**: Nhập / tự tính: Tự đánh số
- **Hàng hóa**: Nhập / tự tính: **Chọn** dịch vụ – bắt buộc
- **Số lượng**: Nhập / tự tính: **Nhập** (ví dụ số chuyến, số kiện)
- **Số lượng lô, SL đã xuất, SL tất toán, SL còn lại**: Nhập / tự tính: Không dùng cho dịch vụ (SL còn lại = Số lượng)
- **Chiết khấu**: Nhập / tự tính: **Nhập** (%)
- **Thuế VAT**: Nhập / tự tính: Mặc định **8%**, sửa được
- **Đơn giá CK**: Nhập / tự tính: Tự tính
- **Lấy VAT**: Nhập / tự tính: Đánh dấu hàng có hoá đơn VAT (trên phiếu bán hàng thử, ô này **không tự tick** dù VAT 8% – kiểm tra lại)
- **Thành tiền**: Nhập / tự tính: Tự tính
- **Số PO, Chú thích, Chú thích nội bộ**: Nhập / tự tính: **Nhập** (tuỳ chọn)
- **Ngày đặt hàng, Đơn giá VAT, T.Tin bảng giá**: Nhập / tự tính: Tự lấy / tự tính
- **Thao tác**: Nhập / tự tính: Nút **+** (thêm dòng), xoá dòng (dòng chưa lưu bị xoá hiện biểu tượng hoàn tác)

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Bán hàng
   ↓
Phiếu bán dịch vụ
   ↓
Thêm mới
```

```text
Phiếu bán dịch vụ → Thêm mới
      ↓
Chọn khách → MST, nợ cũ, địa chỉ, số ngày nợ, hợp đồng tự điền; bảng mở
      ↓
Ngày bán, địa chỉ giao (hoặc Tại kho), ghi chú, tài khoản
      ↓
Nhập dịch vụ: chọn → đơn giá đề xuất → số lượng, CK, VAT
      ↓
Lưu lại ── báo đỏ / cảnh báo? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → công nợ khách tăng = Tổng tiền
```

### Bước 1 – Mở cửa sổ thêm mới

Vào **Bán hàng → Phiếu bán dịch vụ**, bấm **Thêm mới**. Cửa sổ **PHIẾU BÁN HÀNG, DỊCH VỤ - THÊM MỚI** mở ra (Hình 1). Bảng chi tiết bị mờ cho đến khi chọn khách.

### Bước 2 – Chọn khách hàng

**KHÁCH HÀNG**: gõ mã hoặc tên khách rồi chọn. Hệ thống điền **MÃ SỐ THUẾ**, **NỢ CŨ**, **QUÁ HẠN**, **ĐỊA CHỈ GIAO**, **ĐIỆN THOẠI**, **SỐ NGÀY NỢ**, **SỐ HỢP ĐỒNG**, tra cứu tình trạng mã số thuế (khách tổ chức) và mở bảng chi tiết – giống Bước 2 bài [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/).

### Bước 3 – Nhập thông tin chung

- **NGÀY BÁN HÀNG**: ngày phát sinh dịch vụ, mặc định hôm nay. Công nợ ghi theo ngày này.
- **ĐỊA CHỈ GIAO**: bắt buộc. Dịch vụ không giao hàng thì bấm **Tại kho**.
- **SỐ NGÀY NỢ**: số ngày khách được nợ cho phiếu này.
- **GHI CHÚ**: bắt buộc khi **SỐ NGÀY NỢ** = 0 – ghi hình thức thanh toán hoặc nội dung dịch vụ (ví dụ *Phí vận chuyển đơn BH… ngày …*).
- **TÀI KHOẢN** ⑪: chọn nếu muốn bản in có mã QR chuyển khoản.

### Bước 4 – Nhập chi tiết dịch vụ

1. Bấm vào ô **Hàng hóa** ở dòng trống (hoặc **Thêm một hàng** ⑬). Danh sách chỉ có các dịch vụ / phí loại *khác*. Chọn dịch vụ.
2. Hệ thống điền **Tên in**, **Đvt**, **Thuế VAT = 8%** và đề xuất **Đơn giá** (bảng giá riêng của khách → bảng giá chung → giá gần nhất). Dịch vụ không có trong bảng giá thì **Đơn giá = 0**. Một dòng trống mới được thêm bên dưới.
3. Nhập **Số lượng**, nhập / sửa **Đơn giá** theo thoả thuận (ví dụ PHÍ VẬN CHUYỂN 300.000), nhập **Chiết khấu**, sửa **Thuế VAT** nếu cần.
4. Sửa **Tên in** nếu muốn in nội dung cụ thể (ví dụ *Phí vận chuyển Q.7 ngày 10/10*). Nhập **Chú thích** nếu cần.
5. Kiểm tra **Thành tiền** và tổng cuối bảng.

Mẹo chuột phải trên dòng (**Áp dụng cho những dòng dưới**, **8% và cho những dòng dưới**, **Lấy giá từ bảng giá**…) giống [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/).

### Bước 5 – Bấm Lưu lại

Bấm **Lưu lại** ⑭. Hệ thống kiểm tra:

1. **Ô bắt buộc**: viền đỏ, lời nhắc **Vui lòng chọn Khách hàng**, **Chọn ngày bán hàng**, **Vui lòng chọn nhân viên kinh doanh**, **Vui lòng nhập ghi chú mô tả thêm**, **Chưa có Mã Số Thuế hoặc CCCD, vui lòng cung cấp thông tin cho IT cập nhật.**, **Vui lòng nhập SĐT và gửi admin cập nhật**.
2. **Dòng chi tiết**: cảnh báo **<số dòng>. <nội dung>**.
3. **Địa chỉ giao**: **Vui lòng cho biết địa chỉ giao hàng** / **Vui lòng ghi địa chỉ giao hàng và gửi admin cập nhật**.
4. **Giá vốn** và **tình trạng mã số thuế**: như [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/), Bước 5.

Hợp lệ: **Lưu thành công**, cửa sổ đóng. Mở lại đúng mã BH… trong menu **Phiếu bán dịch vụ**, kiểm khách, dịch vụ, đơn vị tính, SL, giá, CK/VAT và tổng tiền; đối chiếu phần công nợ phát sinh với kế toán. Công nợ khách tăng bằng **Tổng tiền** của phiếu.

### Sửa phiếu

Bấm **Sửa** → **PHIẾU BÁN HÀNG, DỊCH VỤ - CẬP NHẬT**. Sửa được mọi thông tin và chi tiết như khi thêm mới. Khi lưu, công nợ cũ của phiếu được trừ ra và công nợ theo tổng tiền mới được cộng vào.

## 6. Giải thích các thông tin trên màn hình

- **Mã số thuế**: Ý nghĩa: MST / CCCD của khách; Bắt buộc: Có; Lưu ý: Chỉ xem
- **Khách hàng**: Ý nghĩa: Khách mua dịch vụ; Bắt buộc: Có
- **Quá hạn, Nợ cũ**: Ý nghĩa: Công nợ của khách trước phiếu này; Lưu ý: Chỉ xem
- **Ngày bán hàng**: Ý nghĩa: Ngày phát sinh dịch vụ; Bắt buộc: Có; Lưu ý: Ngày ghi công nợ
- **Địa chỉ giao**: Ý nghĩa: Địa chỉ + khu vực; Bắt buộc: Có; Lưu ý: 7–255 ký tự; **Tại kho** nếu không giao
- **Điện thoại**: Ý nghĩa: SĐT khách; Bắt buộc: Nên có; Lưu ý: 9–50 ký tự
- **Số ngày nợ**: Ý nghĩa: Số ngày được nợ; Bắt buộc: Không; Lưu ý: = 0 thì bắt buộc Ghi chú
- **Mã phiếu**: Ý nghĩa: Mã phiếu; Lưu ý: Tự tạo khi lưu
- **N/v kinh doanh**: Ý nghĩa: Người bán; Bắt buộc: Có
- **Ghi chú**: Ý nghĩa: Mô tả thêm; Bắt buộc: Có khi số ngày nợ = 0
- **Số hợp đồng**: Ý nghĩa: Hợp đồng còn hạn; Lưu ý: Chỉ xem
- **Tài khoản**: Ý nghĩa: Tài khoản nhận tiền; Bắt buộc: Không; Lưu ý: Có mã ngân hàng → mã QR trên bản in
- **Hàng hóa**: Ý nghĩa: Dịch vụ / phí (loại *khác*); Bắt buộc: Có (mỗi dòng); Lưu ý: Không kiểm tra tồn
- **Tên in**: Ý nghĩa: Nội dung in trên phiếu; Bắt buộc: Có; Lưu ý: Sửa được
- **Số lượng**: Ý nghĩa: Số lượng dịch vụ; Bắt buộc: Nên nhập; Lưu ý: ≥ 0
- **Đơn giá**: Ý nghĩa: Giá chưa VAT; Bắt buộc: Nên nhập; Lưu ý: Đề xuất theo bảng giá / giá gần nhất
- **Chiết khấu**: Ý nghĩa: % chiết khấu; Bắt buộc: Không; Lưu ý: 0–100%
- **Thuế VAT**: Ý nghĩa: % VAT; Bắt buộc: Không; Lưu ý: Mặc định 8%
- **Đơn giá VAT**: Ý nghĩa: Đơn giá × (1 − CK) × (1 + VAT); Lưu ý: Tự tính
- **Thành tiền**: Ý nghĩa: Đơn giá VAT × Số lượng; Lưu ý: Máy chủ tính lại khi lưu
- **Chú thích / Chú thích nội bộ**: Ý nghĩa: Ghi chú dòng; Bắt buộc: Không; Lưu ý: Chú thích in trên phiếu

## 7. Kiểm tra sau khi thực hiện

- Phiếu được lưu với mã tự động, hiện ở **PHIẾU BÁN HÀNG, DỊCH VỤ - DANH SÁCH**.
- **Công nợ khách tăng** bằng **Tổng tiền** ngay khi lưu.
- Tồn kho **không** thay đổi; phiếu không xuất hiện ở danh sách chọn của phiếu xuất kho.
- Phiếu hiện trên thống kê **Bán dịch vụ** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-b04-0-tong-quan-man-hinh-thong-ke-ban-dich-vu/)).

## 8. Những điều cần lưu ý

⚠️ **Lưu là ghi công nợ ngay.** Kiểm tra kỹ khách, số lượng, đơn giá trước khi bấm **Lưu lại**.

⚠️ Sửa hoặc xoá phiếu đã thu tiền sẽ làm công nợ khách lệch với phiếu thu. Báo kế toán trước khi sửa / xoá.

⚠️ Đơn giá đề xuất lấy theo bảng giá **có hiệu lực tới hôm nay**, không theo **NGÀY BÁN HÀNG**. Luôn đối chiếu giá thoả thuận.

⚠️ Không chọn được hàng hoá thường (ván, giấy…) trên phiếu này – hàng hoá lập **Phiếu bán hàng** ([HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/)).

⚠️ cửa sổ vẫn có nút **TỪ PHIẾU ĐẶT HÀNG** (dùng chung với phiếu bán hàng). **Không bấm** nút này trên phiếu dịch vụ: có thể đưa hàng hoá thường của phiếu đặt hàng vào phiếu dịch vụ.

⚠️ Bấm **Đóng** không hỏi lại, dữ liệu đang nhập bị mất.

### Bảng chi tiết bị mờ, không nhập được 

Nguyên nhân: chưa chọn **KHÁCH HÀNG**.
Cách xử lý: chọn khách trước.

### Không tìm thấy dịch vụ cần bán trong ô Hàng hóa 

Nguyên nhân: dịch vụ chưa được khai báo trong danh mục hàng hoá với loại *khác*.
Cách xử lý: nhờ người quản lý danh mục hàng hoá thêm (sổ tay Thiết lập danh mục).

### Ô MÃ SỐ THUẾ viền đỏ: "Chưa có Mã Số Thuế hoặc CCCD, vui lòng cung cấp thông tin cho IT cập nhật." 

Nguyên nhân: khách chưa có mã số thuế / CCCD trong danh mục.
Cách xử lý: gửi thông tin cho IT / người quản lý danh mục khách hàng cập nhật.

### Ô GHI CHÚ viền đỏ: "Vui lòng nhập ghi chú mô tả thêm" 

Nguyên nhân: **SỐ NGÀY NỢ** = 0 và chưa có ghi chú.
Cách xử lý: ghi hình thức thanh toán / nội dung dịch vụ.

### "Vui lòng cho biết địa chỉ giao hàng" 

Nguyên nhân: địa chỉ giao trống hoặc quá ngắn.
Cách xử lý: nhập địa chỉ hoặc bấm **Tại kho**.

### "Bạn không có quyền bán hàng dưới giá vốn. Vui lòng liên hệ quản trị viên để được cấp quyền." 

Nguyên nhân: có dòng đơn giá không cao hơn giá vốn (ví dụ để đơn giá 0).
Cách xử lý: kiểm tra đơn giá; nếu đúng là miễn phí, nhờ người có quyền **Bán dưới giá vốn** lập phiếu.

### "CẢNH BÁO – Lỗi sửa: Có người đã sửa phiếu này. Kiểm tra và thao tác lại." 

Nguyên nhân: phiếu đã được người khác sửa sau khi bạn mở.
Cách xử lý: **Đóng**, tải lại danh sách, mở **Sửa** lại.

## 10. Câu hỏi thường gặp

**Phiếu bán dịch vụ có cần duyệt giá như phiếu bán hàng không?**
Không.

**Công nợ dịch vụ có tính ngày đến hạn không?**
Có, theo **SỐ NGÀY NỢ** của phiếu – xem cột ngày đến hạn ở thống kê **Bán dịch vụ** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-b04-0-tong-quan-man-hinh-thong-ke-ban-dich-vu/)).

**Một phiếu vừa có hàng vừa có dịch vụ được không?**
Không. Phiếu bán dịch vụ chỉ chọn được dịch vụ; hàng hoá lập phiếu bán hàng riêng.

## 11. Công việc tiếp theo

```text
Lập phiếu bán dịch vụ (công nợ tăng)
        ↓
In phiếu gửi khách (BH-A03.6)
        ↓
(Kế toán) Phiếu thu của khách → công nợ giảm
```

**Tiếp theo:** sổ tay Kế toán – Phiếu thu.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-0-tong-quan-man-hinh-phieu-ban-dich-vu/) – Tổng quan màn hình Phiếu bán dịch vụ
- [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/) – Hướng dẫn lập phiếu bán hàng
- [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU BÁN HÀNG TỪ EXCEL](/bai-viet/2026-11-07-bh-a03-3-huong-dan-nhap-chi-tiet-phieu-ban-hang-tu-excel/) – Hướng dẫn nhập chi tiết phiếu bán hàng từ Excel
- [HƯỚNG DẪN IN PHIẾU BÁN HÀNG VÀ BẢNG BÁO GIÁ](/bai-viet/2026-11-07-bh-a03-6-huong-dan-in-phieu-ban-hang-va-bang-bao-gia/) – Hướng dẫn in phiếu bán hàng và bảng báo giá
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-b04-0-tong-quan-man-hinh-thong-ke-ban-dich-vu/) – Tổng quan màn hình Bán dịch vụ
- Sổ tay Kế toán – Phiếu thu, Thống kê công nợ khách hàng
