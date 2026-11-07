---
title: "HƯỚNG DẪN LẬP PHIẾU MUA HÀNG"
date: "2026-11-07"
summary: "Phiếu mua hàng ghi nhận hàng hoá mua của nhà cung cấp (NCC) theo hoá đơn / chứng từ."
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

Phiếu mua hàng ghi nhận hàng hoá mua của nhà cung cấp (NCC) theo hoá đơn / chứng từ. Sau khi lưu, các dòng hàng trở thành **hàng chờ nhập kho** để thủ kho lập phiếu nhập kho.

Bài này hướng dẫn lập phiếu **nhập tay từng dòng** và **lấy dòng / giá từ bảng giá NCC** (nút **Từ bảng giá**). Lập từ phiếu đặt hàng xem [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/). Bài cũng áp dụng khi **Sửa** phiếu (cửa sổ **CẬP NHẬT - PHIẾU MUA HÀNG**).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu mua hàng**.
- NCC và các mặt hàng đã có trong danh mục.
- Chuẩn bị: hoá đơn / chứng từ của NCC (số hoá đơn, ngày, hàng, số lượng, đơn giá, chiết khấu, VAT); biết thanh toán từ **ngân hàng / quỹ nào** hoặc **thanh toán sau** (bắt buộc ghi ở **GHI CHÚ**).
- (Nếu dùng **Từ bảng giá**) NCC đã có bảng giá mua trong khoảng ngày cần chọn.

## 2. Mở chức năng

**Mua hàng → Phiếu mua hàng → Thêm mới**

## 3. Nhận biết màn hình

![Hình 1: cửa sổ THÊM MỚI - PHIẾU MUA HÀNG](/posts/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/hinh-01-form-them-phieu-mua-hang.png)

- **NGÀY MUA HÀNG, NHÀ CUNG CẤP**: Ý nghĩa: Bắt buộc. Phải chọn NCC trước thì bảng chi tiết mới mở
- **NỢ CŨ, ĐỊA CHỈ, ĐIỆN THOẠI**: Ý nghĩa: Tự điền khi chọn NCC
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **CHỨNG TỪ/HĐ**: Ý nghĩa: Số hoá đơn / chứng từ NCC
- **TỪ PHIẾU**: Ý nghĩa: Chữ mờ **CHỌN TỪ PHIẾU**, chỉ xem
- **GHI CHÚ**: Ý nghĩa: **Bắt buộc**: ghi nguồn thanh toán hoặc *Thanh toán sau*
- **NGÀY HẠCH TOÁN**: Ý nghĩa: Bắt buộc, mặc định hôm nay
- **TÍNH GIÁ THÀNH, CHI PHÍ**: Ý nghĩa: Tick **Đưa vào kỳ tính giá thành**; ô **CHI PHÍ** chỉ chọn được ở phiếu mua dịch vụ
- **ĐỐI TƯỢNG TẬP HỢP CHI PHÍ, TK GIÁ THÀNH**: Ý nghĩa: Chỉ hiện khi tick **TÍNH GIÁ THÀNH**
- **Bảng chi tiết hàng hoá**: Ý nghĩa: Mở khi đã chọn NCC
- **Thêm một hàng, Từ bảng giá, Từ đơn hàng**: Ý nghĩa: Thêm dòng / lấy từ bảng giá / lấy từ phiếu đặt hàng ([HƯỚNG DẪN LẬP PHIẾU MUA HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/))
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Các cột trong bảng chi tiết:**

- **STT**: Nhập / tự tính: Tự đánh số
- **Hàng hóa**: Nhập / tự tính: **Chọn** – bắt buộc
- **Tên in**: Nhập / tự tính: Tên in phiếu của hàng, tự lấy
- **Đvt**: Nhập / tự tính: Tự lấy theo hàng hoá
- **Khối lượng, Kiện, M³**: Nhập / tự tính: Tự tính
- **Là chi phí**: Nhập / tự tính: Tick (tuỳ chọn)
- **Số lượng**: Nhập / tự tính: **Nhập**
- **Đơn giá**: Nhập / tự tính: Tự đề xuất, **sửa được**
- **Chiết khấu, Thuế VAT**: Nhập / tự tính: **Nhập** (%)
- **Đơn giá VAT, Thành tiền**: Nhập / tự tính: Tự tính
- **Chú thích**: Nhập / tự tính: **Nhập** (in trên chứng từ)
- **Chú thích nội bộ**: Nhập / tự tính: **Nhập** (ghi chú nội bộ)
- **T.Tin đặt hàng**: Nhập / tự tính: Mã phiếu đặt hàng của dòng (nếu lấy Từ đơn hàng)
- **T.Tin bảng giá**: Nhập / tự tính: Ngày áp dụng, tên bảng giá (nếu lấy Từ bảng giá)
- **Thao tác**: Nhập / tự tính: Nút **+**, nút xoá dòng

Khi sửa / xem, bảng có thêm **SL đã nhập**, **SL tất toán**, **SL còn lại**.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Mua hàng
   ↓
Phiếu mua hàng
   ↓
Thêm mới
```

```text
Phiếu mua hàng → Thêm mới
      ↓
Chọn ngày mua hàng, nhà cung cấp → bảng chi tiết mở, điền nợ cũ, địa chỉ
      ↓
Nhập chứng từ/HĐ, ghi chú (nguồn thanh toán), ngày hạch toán
      ↓
Nhập chi tiết:
   ├── tay: chọn hàng → đơn giá tự đề xuất → nhập số lượng, CK, VAT
   ├── Từ bảng giá → Tạo mới (thêm dòng) / Lấy giá (cập nhật giá)
   └── Từ đơn hàng (MH-A03.2)
      ↓
Lưu lại ── báo đỏ / cảnh báo? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → Trạng thái nhập "Chưa nhập" → (Kho) nhập kho
```

### Bước 1 – Mở cửa sổ thêm mới

Vào **Mua hàng → Phiếu mua hàng**, bấm **Thêm mới**. cửa sổ **THÊM MỚI - PHIẾU MUA HÀNG** mở ra (Hình 1). Bảng chi tiết bị mờ cho đến khi chọn NCC.

### Bước 2 – Chọn ngày và nhà cung cấp

- **NGÀY MUA HÀNG**: ngày trên hoá đơn / ngày mua, mặc định hôm nay.
- **NHÀ CUNG CẤP**: gõ tên hoặc mã NCC rồi chọn. Hệ thống điền **NỢ CŨ**, **ĐỊA CHỈ**, **ĐIỆN THOẠI**  và mở bảng chi tiết.

⚠️ Sau khi lưu, **không đổi được NCC** của phiếu. Chọn đúng NCC ngay từ đầu.

### Bước 3 – Nhập thông tin chứng từ

- **CHỨNG TỪ/HĐ**: số hoá đơn hoặc số chứng từ của NCC.
- **GHI CHÚ**: ghi rõ thanh toán từ ngân hàng / quỹ nào; nếu chưa trả, ghi **Thanh toán sau**. Ô này bắt buộc.
- **NGÀY HẠCH TOÁN**: ngày ghi nhận vào sổ kế toán; mặc định hôm nay.
- **TÍNH GIÁ THÀNH**: thông thường **không tick** cho phiếu mua hàng hoá (xem phần “Những điều cần lưu ý”). Khi tick, hệ thống hiện cảnh báo và hiện 2 ô:
  - **ĐỐI TƯỢNG TẬP HỢP CHI PHÍ**: chọn nếu là chi phí trực tiếp; để trống = chi phí chung.
  - **TK GIÁ THÀNH**: để trống thì hệ thống dùng tài khoản mặc định (mua hàng 6272).

### Bước 4 – Nhập chi tiết hàng hoá bằng tay

1. Bấm vào ô **Hàng hóa** ở dòng trống (hoặc **Thêm một hàng** ⑪). Gõ mã / tên hàng và chọn.
2. Hệ thống điền **Tên in**, **Đvt**, và tự đề xuất **Đơn giá** = **giá nhập kho gần nhất** của chính NCC này cho mặt hàng đó (0 nếu chưa từng nhập). Một dòng trống mới được thêm bên dưới. Bảng rộng, kéo thanh cuộn ngang để thấy các cột **Số lượng**, **Đơn giá**… (Hình 2).
3. Nhập **Số lượng**, sửa **Đơn giá** theo hoá đơn, nhập **Chiết khấu**, **Thuế VAT**, **Chú thích** / **Chú thích nội bộ** nếu cần.
4. Kiểm tra **Đơn giá VAT**, **Thành tiền** và tổng cuối bảng khớp hoá đơn.

Mẹo (chuột phải vào ô của dòng): **Áp dụng cho những dòng dưới** ở cột **Số lượng**, **Đơn giá**, **Chiết khấu**, **Thuế VAT**, **Chú thích**, **Chú thích nội bộ**; **8% và cho những dòng dưới** ở cột **Thuế VAT**. Chuột phải vào tiêu đề bảng có **Trình chọn cột** và **Khôi phục bố cục**.

![Hình 2: Bảng chi tiết phiếu mua hàng](/posts/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/hinh-02-bang-chi-tiet-mua-hang.png)

### Bước 5 – (Tuỳ chọn) Lấy dòng / giá từ bảng giá

Nút **Từ bảng giá** chỉ bấm được khi đã chọn NCC.

1. Bấm **Từ bảng giá** ⑪. Cửa sổ **TỔNG HỢP CHI TIẾT BẢNG GIÁ** mở ra, liệt kê giá các bảng giá của NCC, mặc định khoảng ngày **Từ đầu năm** (Hình 3).
2. Tick chọn các dòng (mặt hàng) cần lấy.
3. Chọn một trong hai nút:
   - **Tạo mới**: thêm các mặt hàng đã chọn vào phiếu với **Số lượng = 0** và **Đơn giá** theo bảng giá. Mặt hàng đã có trong phiếu thì bỏ qua. Sau đó nhập **Số lượng**.
   - **Lấy giá**: không thêm dòng; chỉ **cập nhật Đơn giá** của các dòng cùng mặt hàng đang có trong phiếu theo bảng giá. Hệ thống báo **Đã áp dụng giá. Vui lòng kiểm tra lại.**
4. Cột **T.Tin bảng giá** của dòng hiện ngày áp dụng và tên bảng giá đã dùng.

![Hình 3: Cửa sổ TỔNG HỢP CHI TIẾT BẢNG GIÁ](/posts/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/hinh-03-tong-hop-chi-tiet-bang-gia.png)

Dòng lấy từ bảng giá thì ô **Hàng hóa** bị khoá (không đổi sang hàng khác được).

### Bước 6 – Bấm Lưu lại

Bấm **Lưu lại** ⑫.

- Thiếu thông tin chung: ô thiếu có viền đỏ và biểu tượng **!**. Bấm vào ô đó để xem lời nhắc màu đỏ ngay dưới ô (Hình 4): **Chọn ngày mua hàng**, **Vui lòng chọn nhà cung cấp**, **Chọn ngày hạch toán**, hoặc **Vui lòng ghi rõ thanh toán từ ngân hàng hoặc Quỹ nào trường hợp thanh toán sau thì ghi chữ -Thanh toán sau-**.
- Dòng chi tiết sai: cảnh báo **<số dòng>. <nội dung>** (ví dụ **Số lượng >= 0**).
- Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại.

![Hình 4: Thông báo thiếu ghi chú nguồn thanh toán](/posts/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/hinh-04-thieu-ghi-chu.png)

### Bước 7 – Kiểm tra và chuyển nhập kho

Phiếu mới hiện trong danh sách với **Trạng thái nhập** = **Chưa nhập**. Báo thủ kho lập phiếu nhập kho từ phiếu mua hàng (sổ tay Kho hàng).

### Sửa phiếu

Bấm **Sửa** → cửa sổ **CẬP NHẬT - PHIẾU MUA HÀNG**. Được sửa ngày, chứng từ, ghi chú, ngày hạch toán, giá thành và chi tiết; **không đổi được NCC**. Chỉ sửa được khi chưa có dòng nào được nhập kho / trả hàng (xem phần “Những điều cần lưu ý”).

## 6. Giải thích các thông tin trên màn hình

- **Ngày mua hàng**: Ý nghĩa: Ngày mua / ngày hoá đơn; Bắt buộc: Có; Lưu ý: Dùng để lọc danh sách, sinh mã phiếu
- **Nhà cung cấp**: Ý nghĩa: NCC bán hàng; Bắt buộc: Có; Lưu ý: Chỉ chọn khi thêm mới; sau đó khoá
- **Nợ cũ**: Ý nghĩa: Công nợ phải trả NCC trước phiếu này; Lưu ý: Tự tính, chỉ xem
- **Mã phiếu**: Ý nghĩa: Mã phiếu mua hàng; Lưu ý: Tự tạo khi lưu
- **Địa chỉ, Điện thoại**: Ý nghĩa: Của NCC; Lưu ý: Tự điền
- **Chứng từ/HĐ**: Ý nghĩa: Số hoá đơn / chứng từ NCC; Bắt buộc: Không; Lưu ý: Nên nhập để đối chiếu
- **Từ phiếu**: Ý nghĩa: Mã phiếu đặt hàng gốc; Lưu ý: Chỉ xem
- **Ghi chú**: Ý nghĩa: Nguồn thanh toán; Bắt buộc: **Có**; Lưu ý: Ví dụ *Chuyển khoản VCB*, *Quỹ tiền mặt*, *Thanh toán sau*
- **Ngày hạch toán**: Ý nghĩa: Ngày ghi nhận kế toán / kỳ giá thành; Bắt buộc: Có; Lưu ý: Mặc định hôm nay
- **Tính giá thành**: Ý nghĩa: Đưa phiếu vào kỳ tính giá thành; Bắt buộc: Không; Lưu ý: Xem cảnh báo phần “Những điều cần lưu ý”
- **Chi phí**: Ý nghĩa: Là chi phí / Không là chi phí; Lưu ý: Chỉ chọn được ở phiếu mua dịch vụ
- **Đối tượng tập hợp chi phí**: Ý nghĩa: Đối tượng nhận chi phí trực tiếp; Bắt buộc: Không; Lưu ý: Hiện khi tick Tính giá thành; trống = chi phí chung
- **TK giá thành**: Ý nghĩa: Tài khoản 62x / 64x ghi chi phí; Bắt buộc: Không; Lưu ý: Hiện khi tick Tính giá thành; trống = mặc định 6272
- **Hàng hóa**: Ý nghĩa: Mặt hàng mua; Bắt buộc: Có (mỗi dòng)
- **Tên in**: Ý nghĩa: Tên in phiếu của hàng; Lưu ý: Tự lấy
- **Đvt**: Ý nghĩa: Đơn vị tính chính; Lưu ý: Tự lấy
- **Khối lượng / Kiện / M³**: Ý nghĩa: Theo thông số hàng hoá; Lưu ý: Tự tính như phiếu đặt hàng
- **Là chi phí**: Ý nghĩa: Đánh dấu dòng là chi phí; Bắt buộc: Không
- **Số lượng**: Ý nghĩa: Số lượng mua; Bắt buộc: Nên nhập; Lưu ý: ≥ 0
- **Đơn giá**: Ý nghĩa: Giá mua chưa VAT; Bắt buộc: Nên nhập; Lưu ý: Đề xuất = giá nhập kho gần nhất của NCC
- **Chiết khấu**: Ý nghĩa: % chiết khấu; Bắt buộc: Không; Lưu ý: 0–100%
- **Thuế VAT**: Ý nghĩa: % VAT; Bắt buộc: Không; Lưu ý: ≥ 0
- **Đơn giá VAT**: Ý nghĩa: Đơn giá × (1 − CK) × (1 + VAT); Lưu ý: Tự tính
- **Thành tiền**: Ý nghĩa: Đơn giá VAT × (Số lượng − SL tất toán); Lưu ý: Tự tính
- **Chú thích / Chú thích nội bộ**: Ý nghĩa: Ghi chú dòng; Bắt buộc: Không
- **SL đã nhập**: Ý nghĩa: Số lượng đã nhập kho; Lưu ý: Khi sửa / xem
- **SL tất toán**: Ý nghĩa: Số lượng đã tất toán; Lưu ý: Nhập ở chức năng Tất toán ([HƯỚNG DẪN TẤT TOÁN PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-3-huong-dan-tat-toan-phieu-mua-hang/))
- **SL còn lại**: Ý nghĩa: Số lượng − SL đã nhập − SL tất toán; Lưu ý: Tự tính

## 7. Kiểm tra sau khi thực hiện

- Phiếu được lưu với mã tự động, **Trạng thái nhập** = **Chưa nhập**, hiện ở **PHIẾU MUA HÀNG - DANH SÁCH**.
- Các dòng hàng có trong danh sách **hàng chờ nhập kho** để thủ kho nhập.
- Tồn kho và công nợ NCC **chưa** thay đổi.

## 8. Những điều cần lưu ý

⚠️ **GHI CHÚ bắt buộc ghi nguồn thanh toán** (ngân hàng / quỹ nào) hoặc chữ **Thanh toán sau**. Kế toán dựa vào đây để lập phiếu chi.

⚠️ **Không tick TÍNH GIÁ THÀNH cho hàng sẽ nhập kho.** Khi tick, hệ thống nhắc: *Lưu ý: chỉ tích "Tính giá thành" cho phiếu mua DỊCH VỤ / chi phí phục vụ sản xuất (đưa vào 627). KHÔNG tích cho hàng đã nhập kho (đã tính giá vốn vào 621) để tránh tính chi phí 2 lần.*

⚠️ **Đơn giá đề xuất** là giá nhập kho gần nhất của NCC, đã làm tròn số nguyên. Luôn đối chiếu với hoá đơn.

⚠️ Sau khi có dòng nhập kho, phiếu **không sửa / xoá được**. Phần không nhập dùng **Tất toán**.

⚠️ Mỗi lần **Sửa**, hệ thống ghi lại toàn bộ bảng chi tiết và lưu lịch sử thay đổi.

**Kiểm tra tỷ lệ và đơn giá trước lưu:** Các công thức dùng CK/VAT dưới dạng tỷ lệ: 5% = 0,05; 8% = 0,08. Ví dụ số học, đơn giá 100.000, CK 5%, VAT 8% thì đơn giá sau CK/VAT là 102.600. Kiểm tra ô phần trăm hiển thị đúng 5%/8% và tiền tính đúng, không suy cách gõ số ở ô nhập giống cách nhập Excel. Sau áp dụng giá hoặc sao chép xuống nhiều dòng, soát lại từng hàng, ĐVT, lượng và tổng trước lưu. Đây chưa phải ca thử ERP mới.

### Bảng chi tiết bị mờ, không nhập được 

Nguyên nhân: chưa chọn **NHÀ CUNG CẤP**.
Cách xử lý: chọn NCC trước.

### Dưới cửa sổ báo "Vui lòng ghi rõ thanh toán từ ngân hàng hoặc Quỹ nào trường hợp thanh toán sau thì ghi chữ -Thanh toán sau-" 

Nguyên nhân: để trống **GHI CHÚ**.
Cách xử lý: ghi nguồn thanh toán hoặc *Thanh toán sau*.

### Dưới cửa sổ báo "Chọn ngày mua hàng" / "Chọn ngày hạch toán" / "Vui lòng chọn nhà cung cấp" 

Nguyên nhân: thiếu trường bắt buộc.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "<số dòng>. Số lượng >= 0" / "Chiết khấu trong khoảng 0 -> 100%" / "Thuế VAT không hợp lệ" 

Nguyên nhân: giá trị dòng không hợp lệ.
Cách xử lý: sửa ô tương ứng ở dòng được báo.

### "CẢNH BÁO – Lỗi sửa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: phiếu đã có dòng được nhập kho / trả hàng / dùng ở chứng từ khác.
Cách xử lý: không sửa phiếu; dùng **Tất toán** cho phần còn lại hoặc liên hệ thủ kho / kế toán.

### Nút Từ bảng giá bấm không được 

Nguyên nhân: chưa chọn NCC.
Cách xử lý: chọn NCC trước. Nếu bấm được nhưng báo **Bạn không có quyền thực hiện chức năng này.**, cần quyền truy cập Bảng giá.

## 10. Câu hỏi thường gặp

**Vì sao đơn giá tự hiện số khác hoá đơn?**
Đó là giá nhập kho gần nhất của NCC cho mặt hàng này. Sửa lại theo hoá đơn.

**Lấy giá và Tạo mới trong cửa sổ bảng giá khác gì nhau?**
**Tạo mới** thêm dòng mới (số lượng 0). **Lấy giá** chỉ cập nhật đơn giá cho các dòng cùng mặt hàng đã có.

**Mua của NCC khác thì sao?**
Mỗi phiếu chỉ một NCC. Lập phiếu riêng cho từng NCC.

## 11. Công việc tiếp theo

```text
Lập phiếu mua hàng
        ↓
(Kho) Phiếu nhập kho từ phiếu mua hàng → tồn kho, công nợ NCC tăng
        ↓
(Kế toán) Phiếu chi trả NCC
        ↓
(Nếu không nhập hết) Tất toán (MH-A03.3)
```

**Tiếp theo:** sổ tay Kho hàng – Phiếu nhập kho; hoặc [HƯỚNG DẪN TẤT TOÁN PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-3-huong-dan-tat-toan-phieu-mua-hang/) – Hướng dẫn tất toán phiếu mua hàng.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/) – Tổng quan màn hình Phiếu mua hàng
- [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/) – Hướng dẫn lập phiếu mua hàng từ phiếu đặt hàng
- [HƯỚNG DẪN TẤT TOÁN PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-3-huong-dan-tat-toan-phieu-mua-hang/) – Hướng dẫn tất toán phiếu mua hàng
- [HƯỚNG DẪN LẬP PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-1-huong-dan-lap-phieu-mua-dich-vu/) – Hướng dẫn lập phiếu mua dịch vụ
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ LỊCH SỬ GIÁ NHẬP](/bai-viet/2026-11-07-mh-b06-0-tong-quan-man-hinh-thong-ke-lich-su-gia-nhap/) – Tổng quan màn hình Lịch sử giá nhập
- Sổ tay Kho hàng – Phiếu nhập kho
- Sổ tay Thiết lập danh mục – Bảng giá
