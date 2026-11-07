---
title: "HƯỚNG DẪN LẬP PHIẾU GIẢM GIÁ"
date: "2026-11-07"
summary: "Bài này hướng dẫn lập phiếu giảm giá cho khách trên các dòng hàng đã xuất kho: chọn phiếu xuất, nhập Số tiền giảm trên mỗi đơn vị hàng, chọn bộ phận chịu trách nhiệm và hình thức giảm (Trừ công nợ / Chi tiền)."
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

Bài này hướng dẫn lập phiếu giảm giá cho khách trên các dòng hàng **đã xuất kho**: chọn phiếu xuất, nhập **Số tiền giảm** trên mỗi đơn vị hàng, chọn **bộ phận chịu trách nhiệm** và **hình thức giảm** (Trừ công nợ / Chi tiền). Bài cũng áp dụng khi **Sửa** phiếu (cửa sổ **CẬP NHẬT - PHIẾU GIẢM GIÁ**).

Lưu phiếu **chưa** làm thay đổi công nợ hay quỹ. Phiếu phải được duyệt và kế toán xác nhận ([HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-2-huong-dan-duyet-xac-nhan-va-chi-tien-phieu-giam-gia/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu giảm giá**.
- Hàng đã được xuất kho cho khách bằng phiếu xuất kho có khách hàng và **nhân viên kinh doanh**, và phiếu xuất chưa bị trả hết.
- Chuẩn bị: lý do giảm, số tiền giảm trên mỗi đơn vị hàng, bộ phận chịu trách nhiệm, hình thức giảm thoả thuận với khách.

## 2. Mở chức năng

**Bán hàng → Phiếu giảm giá → Thêm mới**

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ DANH SÁCH PHIẾU XUẤT KHO](/posts/2026-11-07-bh-a05-1-huong-dan-lap-phieu-giam-gia/hinh-01-danh-sach-phieu-xuat-kho.png)

- **Ô chọn khoảng ngày**: Ý nghĩa: Lọc theo **Ngày xuất kho**. Mặc định **Hôm nay** (today)
- **Tải lại**: Ý nghĩa: Tải lại danh sách
- **Trình chọn cột, Tìm kiếm…**: Ý nghĩa: Ẩn / hiện cột, tìm theo mã phiếu, tên khách…
- **Dòng phiếu xuất**: Ý nghĩa: **Nhấp đúp** để chọn phiếu

Cửa sổ mở ngay khi bấm **Thêm mới**, liệt kê phiếu xuất kho có khách hàng trong khoảng ngày chọn, **trừ phiếu khách đã trả hết** (phiếu đã trả hết không hiện). Các cột thấy trên màn hình: **STT**, **Ngày xuất kho**, **Mã phiếu**, **Từ phiếu**, **Người nhận**, **Tổng tiền**, **Kho xuất**, **Tên tài xế**, **Biển số xe**, … (kéo thanh cuộn ngang để xem **Mã phiếu gốc**, **Số hóa đơn**, **Trạng thái trả**, **Trạng thái thu**, **Lý do xuất**, **Người tạo**, **Ngày tạo**…).

![Hình 2: Cửa sổ THÊM MỚI - PHIẾU GIẢM GIÁ](/posts/2026-11-07-bh-a05-1-huong-dan-lap-phieu-giam-gia/hinh-02-form-them-phieu-giam-gia.png)

- **NGÀY GIẢM GIÁ**: Ý nghĩa: Bắt buộc, mặc định hôm nay
- **KHÁCH HÀNG**: Ý nghĩa: Lấy theo phiếu xuất, chỉ xem
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **GHI CHÚ**: Ý nghĩa: Lý do giảm giá (không bắt buộc, nên ghi)
- **HÌNH THỨC GIẢM**: Ý nghĩa: Bắt buộc, chọn trong danh sách: **Trừ công nợ** / **Chi tiền**
- **NV KINH DOANH**: Ý nghĩa: Lấy theo phiếu xuất, chỉ xem, bắt buộc có
- **Bảng chi tiết**: Ý nghĩa: Các dòng của phiếu xuất chưa trả hết
- **TỪ PHIẾU XUẤT**: Ý nghĩa: Chọn lại phiếu xuất khác (chỉ khi thêm mới)
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Các cột trong bảng chi tiết:**

- **STT**: Nhập / tự tính: Tự đánh số
- **Hàng hóa**: Nhập / tự tính: Theo phiếu xuất, khoá
- **Tên in**: Nhập / tự tính: Theo phiếu xuất, sửa được
- **Đvt**: Nhập / tự tính: Theo phiếu xuất, khoá
- **Khối lượng, Kiện, M³**: Nhập / tự tính: Tự tính theo số lượng
- **Số lượng**: Nhập / tự tính: Mặc định = số đã xuất − số khách đã trả; **sửa** thành số lượng được giảm giá
- **Số tiền giảm**: Nhập / tự tính: **Nhập** – số tiền giảm trên **một đơn vị** hàng
- **Thành tiền**: Nhập / tự tính: Số lượng × Số tiền giảm, tự tính
- **Chịu trách nhiệm**: Nhập / tự tính: **Chọn** bộ phận chịu trách nhiệm – bắt buộc mỗi dòng
- **Chú thích**: Nhập / tự tính: **Nhập** (in trên phiếu)
- **Thao tác**: Nhập / tự tính: **Nhân đôi** dòng, **Xóa dòng này**

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Bán hàng
   ↓
Phiếu giảm giá
   ↓
Thêm mới → chọn phiếu xuất kho
```

```text
Phiếu giảm giá → Thêm mới
      ↓
DANH SÁCH PHIẾU XUẤT KHO → chọn khoảng ngày → nhấp đúp phiếu xuất
      ↓
THÊM MỚI - PHIẾU GIẢM GIÁ: khách, NV kinh doanh, dòng hàng tự điền
      ↓
Chọn hình thức giảm, ghi lý do → xoá dòng không giảm
      ↓
Mỗi dòng: sửa Số lượng, nhập Số tiền giảm, chọn Chịu trách nhiệm
      ↓
Lưu lại ── cảnh báo? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → chờ duyệt (BH-A05.2)
```

### Bước 1 – Chọn phiếu xuất kho

Vào **Bán hàng → Phiếu giảm giá**, bấm **Thêm mới**. Cửa sổ **DANH SÁCH PHIẾU XUẤT KHO** mở ra (Hình 1). Chọn khoảng ngày chứa ngày xuất, tìm phiếu theo mã phiếu / mã khách, **nhấp đúp** vào dòng.

### Bước 2 – Kiểm tra thông tin chung

Cửa sổ **THÊM MỚI - PHIẾU GIẢM GIÁ** mở ra (Hình 2) với **KHÁCH HÀNG**, **NV KINH DOANH** lấy theo phiếu xuất (không đổi được).

- **NGÀY GIẢM GIÁ**: ngày ghi nhận giảm giá, mặc định hôm nay.
- **HÌNH THỨC GIẢM**: **Trừ công nợ** (trừ vào số khách đang nợ) hoặc **Chi tiền** (trả tiền cho khách).
- **GHI CHÚ**: ghi lý do giảm giá (ví dụ *Hàng trầy xước, khách giữ lại*).

Chọn nhầm phiếu xuất: bấm **TỪ PHIẾU XUẤT**  để chọn lại (các dòng được thay theo phiếu mới).

### Bước 3 – Nhập chi tiết giảm giá

Bảng chi tiết có các dòng của phiếu xuất **chưa trả hết**; **Số tiền giảm** đang là 0. Lúc mở cửa sổ bảng chỉ thấy **STT**, **Hàng hóa**, **Tên in**, **Đvt**, **Thao tác** – kéo thanh cuộn ngang ở đáy bảng sang phải để thấy các cột cần nhập (Hình 3).

![Hình 3: Các cột Số lượng, Số tiền giảm, Thành tiền, Chịu trách nhiệm](/posts/2026-11-07-bh-a05-1-huong-dan-lap-phieu-giam-gia/hinh-03-cot-giam-gia-chiu-trach-nhiem.png)

- **Số lượng**: Ý nghĩa: Số lượng được giảm giá
- **Số tiền giảm**: Ý nghĩa: Tiền giảm trên **một đơn vị** hàng
- **Thành tiền**: Ý nghĩa: Số lượng × Số tiền giảm (không cộng VAT)
- **Chịu trách nhiệm**: Ý nghĩa: Bấm ô để mở danh sách bộ phận
- **Thao tác**: Ý nghĩa: **Nhân đôi** dòng, **Xóa dòng này**

1. Xoá dòng không giảm giá (biểu tượng thùng rác ở cột **Thao tác**).
2. Sửa **Số lượng** thành số lượng được giảm.
3. Nhập **Số tiền giảm** cho **một đơn vị** hàng. **Thành tiền** tự tính.
4. Chọn **Chịu trách nhiệm** (Hình 3): **Công nhân đứng máy** (trên danh sách hiện cắt chữ "Công nhân đứ…"), **Kinh doanh**, **Kế hoạch**, **Xe nâng giấy**, **Xe nâng ván**, **Kho nhúng**, **Lỗi giấy**, **Lỗi ván**, **Xe nâng HM**, **Xe nâng BD**, **Xe nâng ĐN**, **Máy móc**, **Tài xế**, **Khác**.
5. Nhập **Chú thích** nếu cần.

Mẹo: chuột phải vào ô **Số lượng**, **Số tiền giảm**, **Chịu trách nhiệm** hoặc **Chú thích** → **Áp dụng cho những dòng dưới**. Một mặt hàng có nhiều bộ phận chịu trách nhiệm: bấm **Nhân đôi** để tách dòng, chia số lượng. Chuột phải vào tiêu đề bảng có **Trình chọn cột**, **Khôi phục bố cục**.

### Bước 4 – Lưu

Bấm **Lưu lại**.

- Thiếu thông tin chung: ô viền đỏ, bấm vào ô để xem lời nhắc **Chọn ngày giảm giá**, **Vui lòng chọn hình thức giảm**, **Vui lòng chọn nhân viên kinh doanh**.
- Dòng sai: cảnh báo **<số dòng>. Số tiền giảm không hợp lệ.**, **<số dòng>. Chưa chọn b.phận chịu trách nhiệm.** hoặc **<số dòng>. Số lượng >= 0**.
- Hợp lệ: **Lưu thành công**, cửa sổ đóng. Phiếu hiện ở danh sách, cột **Người duyệt** trống.

### Bước 5 – Trình duyệt

In **phiếu đề xuất giảm giá** ([HƯỚNG DẪN IN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-3-huong-dan-in-phieu-giam-gia/)) trình ký nếu cần, và báo người duyệt ([HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-2-huong-dan-duyet-xac-nhan-va-chi-tien-phieu-giam-gia/)).

### Sửa phiếu

Bấm **Sửa** → **CẬP NHẬT - PHIẾU GIẢM GIÁ**. Sửa được ngày, ghi chú, hình thức giảm, số lượng, số tiền giảm, chịu trách nhiệm, chú thích, xoá / nhân đôi dòng; không đổi được phiếu xuất, khách. Nút **Lưu lại** chỉ có khi phiếu **chưa duyệt**, **chưa xác nhận**, **chưa chi tiền**.

## 6. Giải thích các thông tin trên màn hình

- **Ngày giảm giá**: Ý nghĩa: Ngày ghi nhận giảm giá; Bắt buộc: Có; Lưu ý: Dùng để lọc danh sách, sinh mã phiếu, tính công nợ theo ngày
- **Khách hàng**: Ý nghĩa: Khách được giảm; Bắt buộc: Có; Lưu ý: Lấy từ phiếu xuất, khoá
- **Điện thoại, Nợ cũ**: Ý nghĩa: Thông tin khách; Lưu ý: Chỉ xem
- **Mã phiếu**: Ý nghĩa: Mã phiếu giảm giá; Lưu ý: Tự tạo khi lưu, dạng **GG…**
- **Ghi chú**: Ý nghĩa: Lý do giảm; Bắt buộc: Không; Lưu ý: In trên phiếu đề xuất
- **Hình thức giảm**: Ý nghĩa: **Trừ công nợ** / **Chi tiền**; Bắt buộc: Có; Lưu ý: Quyết định công nợ giảm hay kế toán chi tiền
- **NV kinh doanh**: Ý nghĩa: Nhân viên của phiếu xuất; Bắt buộc: Có; Lưu ý: Khoá
- **Hàng hóa, Đvt**: Ý nghĩa: Mặt hàng trên phiếu xuất; Bắt buộc: Có; Lưu ý: Khoá
- **Tên in**: Ý nghĩa: Tên hàng in phiếu; Lưu ý: Sửa được
- **Khối lượng / Kiện / M³**: Ý nghĩa: Theo thông số hàng hoá; Lưu ý: Tự tính
- **Số lượng**: Ý nghĩa: Số lượng được giảm; Bắt buộc: Có; Lưu ý: ≥ 0; tổng các phiếu giảm của một dòng xuất ≤ số đã xuất
- **Số tiền giảm**: Ý nghĩa: Tiền giảm trên một đơn vị; Bắt buộc: Có; Lưu ý: Khác 0
- **Thành tiền**: Ý nghĩa: Số lượng × Số tiền giảm; Lưu ý: Máy chủ tính lại khi lưu
- **Chịu trách nhiệm**: Ý nghĩa: Bộ phận gây ra / chịu khoản giảm; Bắt buộc: Có; Lưu ý: Chọn trong danh sách cố định
- **Chú thích**: Ý nghĩa: Ghi chú dòng; Bắt buộc: Không; Lưu ý: In trên phiếu

## 7. Kiểm tra sau khi thực hiện

- Phiếu được lưu với mã tự động **GG…**, **Tổng tiền giảm** = tổng thành tiền các dòng.
- Phiếu chờ duyệt; công nợ khách và quỹ **chưa** thay đổi.
- Phiếu hiện trên thống kê **Giảm giá chi tiết** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ GIẢM GIÁ CHI TIẾT](/bai-viet/2026-11-07-bh-b07-0-tong-quan-man-hinh-thong-ke-giam-gia-chi-tiet/)).

## 8. Những điều cần lưu ý

⚠️ **Số tiền giảm là tiền trên một đơn vị hàng**, không phải tổng. Ví dụ giảm 500.000 đ cho 10 tấm → nhập **Số tiền giảm** = 50.000, **Số lượng** = 10.

⚠️ Mọi dòng giữ lại phải có **Số tiền giảm** khác 0 và **Chịu trách nhiệm**. Dòng không giảm thì **xoá** khỏi bảng.

⚠️ Phiếu xuất không có **nhân viên kinh doanh** sẽ không lưu được phiếu giảm giá (ô **NV KINH DOANH** bắt buộc nhưng khoá).

⚠️ Sau khi được duyệt, phiếu không sửa được. Chọn đúng **HÌNH THỨC GIẢM** ngay từ đầu.

⚠️ Bấm **Đóng** không hỏi lại, dữ liệu đang nhập bị mất.

### "<số dòng>. Số tiền giảm không hợp lệ." 

Nguyên nhân: dòng có hàng nhưng **Số tiền giảm** bằng 0 hoặc trống.
Cách xử lý: nhập số tiền giảm hoặc xoá dòng.

### "<số dòng>. Chưa chọn b.phận chịu trách nhiệm." 

Nguyên nhân: dòng chưa chọn **Chịu trách nhiệm**.
Cách xử lý: chọn bộ phận; dùng **Áp dụng cho những dòng dưới** nếu nhiều dòng cùng bộ phận.

### Ô viền đỏ "Vui lòng chọn hình thức giảm" / "Chọn ngày giảm giá" 

Nguyên nhân: thiếu trường bắt buộc.
Cách xử lý: chọn đủ rồi **Lưu lại**.

### Ô NV KINH DOANH viền đỏ "Vui lòng chọn nhân viên kinh doanh" 

Nguyên nhân: phiếu xuất kho gốc không có nhân viên kinh doanh.
Cách xử lý: nhờ thủ kho / quản trị hệ thống bổ sung nhân viên kinh doanh cho phiếu xuất, rồi lập lại.

### "CẢNH BÁO – Lỗi thêm: Số tiền giảm giá chưa hợp lệ." 

Nguyên nhân: tổng tiền giảm của phiếu ≤ 0 (ví dụ số lượng các dòng đều bằng 0, hoặc không còn dòng nào).
Cách xử lý: kiểm tra **Số lượng**, **Số tiền giảm**.

### "CẢNH BÁO – Lỗi thêm: Tổng số lượng giảm (x) vượt mức cho phép (y)" 

Nguyên nhân: cộng các phiếu giảm giá đã lập cho cùng dòng phiếu xuất, số lượng giảm vượt số lượng đã xuất.
Cách xử lý: giảm **Số lượng**; kiểm tra các phiếu giảm giá cũ của phiếu xuất này.

### "CẢNH BÁO – Lỗi sửa: Đã duyệt." / "Đã xác nhận." / "Đã chi tiền." 

Nguyên nhân: phiếu đã qua bước duyệt / xác nhận / chi tiền trong lúc bạn đang sửa.
Cách xử lý: **Đóng**; nhờ **Hủy duyệt** ([HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-2-huong-dan-duyet-xac-nhan-va-chi-tien-phieu-giam-gia/)) nếu cần sửa.

## 10. Câu hỏi thường gặp

**Giảm giá theo tổng tiền, không theo từng tấm thì nhập thế nào?**
Chọn đúng các dòng và **Số lượng** thực được giảm, phân bổ tổng tiền thoả thuận cho từng dòng rồi chia cho số lượng của dòng để nhập **Số tiền giảm** trên một đơn vị. Ví dụ giảm 500.000 đ cho 10 tấm: SL 10, tiền giảm 50.000 đ/tấm. Đối chiếu tổng cuối bảng; không đổi SL thành 1 nếu đó không phải lượng thực được giảm.

**Chọn Trừ công nợ hay Chi tiền?**
Khách còn nợ → thường **Trừ công nợ**. Khách đã thanh toán đủ, cần trả lại tiền → **Chi tiền**.

**Đổi hình thức giảm sau khi đã duyệt được không?**
Không. Nhờ người duyệt **Hủy duyệt** (khi kế toán chưa xác nhận), sửa, rồi duyệt lại.

## 11. Công việc tiếp theo

```text
Lập phiếu giảm giá
        ↓
Duyệt phiếu (quản lý) → Xác nhận (kế toán) (BH-A05.2)
        ├── Trừ công nợ → công nợ khách giảm
        └── Chi tiền → Chi tiền → phiếu chi
```

**Tiếp theo:** [HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-2-huong-dan-duyet-xac-nhan-va-chi-tien-phieu-giam-gia/) – Hướng dẫn duyệt, xác nhận và chi tiền phiếu giảm giá.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-0-tong-quan-man-hinh-phieu-giam-gia/) – Tổng quan màn hình Phiếu giảm giá
- [HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-2-huong-dan-duyet-xac-nhan-va-chi-tien-phieu-giam-gia/) – Hướng dẫn duyệt, xác nhận và chi tiền phiếu giảm giá
- [HƯỚNG DẪN IN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-3-huong-dan-in-phieu-giam-gia/) – Hướng dẫn in phiếu giảm giá
- [HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO](/bai-viet/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/) – Hướng dẫn lập phiếu khách trả hàng từ phiếu xuất kho
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ GIẢM GIÁ CHI TIẾT](/bai-viet/2026-11-07-bh-b07-0-tong-quan-man-hinh-thong-ke-giam-gia-chi-tiet/) – Tổng quan màn hình Giảm giá chi tiết
