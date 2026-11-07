---
title: "HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG TỪ PHIẾU XUẤT KHO"
date: "2026-11-07"
summary: "Khi khách trả lại hàng đã giao, bạn lập phiếu khách trả bằng cách chọn phiếu xuất kho đã giao cho khách."
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

Khi khách trả lại hàng đã giao, bạn lập phiếu khách trả bằng cách **chọn phiếu xuất kho** đã giao cho khách. Hệ thống lấy sẵn khách hàng, nhân viên kinh doanh, kho, các dòng hàng **chưa trả hết**, số lượng có thể trả, đơn giá, chiết khấu, VAT theo phiếu xuất. Bạn chỉ sửa **số lượng trả** và ghi **lý do**.

Sau khi lưu, tồn kho và công nợ **chưa** đổi; thủ kho nhập kho từ phiếu này ([HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/)) thì tồn mới tăng, công nợ khách mới giảm.

Bài này cũng áp dụng khi **Sửa** phiếu (cửa sổ **CẬP NHẬT PHIẾU TRẢ HÀNG**). Trả hàng đầu kỳ xem [HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-bh-a04-2-huong-dan-lap-phieu-khach-tra-hang-dau-ky/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như bảng trên.
- Hàng đã được xuất cho khách bằng **phiếu xuất kho bán hàng** ([HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/)), phiếu xuất còn dòng **chưa trả hết**.
- Biết ngày xuất (để lọc phiếu xuất), số lượng khách trả và lý do.

## 2. Mở chức năng

**Bán hàng → Khách trả hàng → Thêm mới (hoặc Thêm mới → Từ phiếu xuất)**

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ DANH SÁCH PHIẾU XUẤT KHO](/posts/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/hinh-01-danh-sach-phieu-xuat-kho.png)

- **Ô chọn khoảng ngày**: Ý nghĩa: Lọc theo **Ngày xuất kho**. Mặc định **Hôm nay** (today)
- **Tải lại**: Ý nghĩa: Tải lại danh sách
- **Trình chọn cột, Tìm kiếm…**: Ý nghĩa: Ẩn / hiện cột, tìm theo mã phiếu, tên khách…
- **Dòng phiếu xuất**: Ý nghĩa: **Nhấp đúp** để chọn phiếu

Cửa sổ chọn liệt kê phiếu xuất kho có khách hàng, trong khoảng ngày chọn, trừ phiếu đã trả hết. Các cột thấy trên màn hình: **STT**, **Ngày xuất kho**, **Mã phiếu**, **Từ phiếu** (mã phiếu bán hàng), **Người nhận**, **Tổng tiền**, **Kho xuất**, **Tên tài xế**, **Biển số xe**, … (kéo thanh cuộn ngang để xem các cột còn lại như **Mã phiếu gốc**, **Số hóa đơn**, **Trạng thái trả**, **Trạng thái thu**, **Lý do xuất**, **Người tạo**, **Ngày tạo**). Dòng cuối hiện **TỔNG CỘNG: n** và tổng **Tổng tiền**.

![Hình 2: Cửa sổ THÊM PHIẾU TRẢ HÀNG](/posts/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/hinh-02-form-them-phieu-tra-hang.png)

- **NGÀY TRẢ HÀNG**: Ý nghĩa: Bắt buộc
- **KHÁCH HÀNG, ĐIỆN THOẠI, NỢ CŨ**: Ý nghĩa: Lấy theo phiếu xuất, chỉ xem
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **KHO HÀNG**: Ý nghĩa: Bắt buộc – kho nhận hàng trả; mặc định kho đã xuất
- **NV KINH DOANH**: Ý nghĩa: Lấy theo phiếu xuất, chỉ xem
- **GHI CHÚ**: Ý nghĩa: **Bắt buộc** – lý do trả hàng
- **Bảng chi tiết**: Ý nghĩa: Các dòng của phiếu xuất chưa trả hết
- **TỪ PHIẾU XUẤT**: Ý nghĩa: Chọn lại phiếu xuất khác
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Các cột trong bảng chi tiết:**

- **STT**: Nhập / tự tính: Tự đánh số
- **Hàng hóa**: Nhập / tự tính: Theo phiếu xuất, khoá
- **Tên in**: Nhập / tự tính: Theo phiếu xuất, sửa được
- **Đvt**: Nhập / tự tính: Theo hàng hoá
- **Khối lượng, Kiện, M³**: Nhập / tự tính: Tự tính
- **Số lượng**: Nhập / tự tính: Mặc định = số đã xuất − số đã trả; **sửa** thành số khách trả
- **Đơn giá, Chiết khấu, Thuế VAT, Lấy VAT**: Nhập / tự tính: Theo phiếu xuất, khoá
- **Thành tiền**: Nhập / tự tính: Tự tính theo số lượng trả
- **Chú thích**: Nhập / tự tính: **Nhập** (tuỳ chọn)
- **Thao tác**: Nhập / tự tính: Xoá dòng

Khi sửa / xem, bảng có thêm **SL đã nhập**, **SL còn lại**.

Lúc mở cửa sổ, bảng chỉ thấy **STT**, **Hàng hóa**, **Tên in**, **Đvt** và **Thao tác** (Hình 2). Các cột **Khối lượng** → **Chú thích** nằm bên phải: kéo thanh cuộn ngang ở đáy bảng để thấy (Hình 3).

![Hình 3: Bảng chi tiết sau khi kéo thanh cuộn ngang – các cột số lượng và giá](/posts/2026-11-07-bh-a04-1-huong-dan-lap-phieu-khach-tra-hang-tu-phieu-xuat-kho/hinh-03-bang-chi-tiet-cot-gia.png)

- Cột: **Số lượng**; Ý nghĩa: Số khách trả – mặc định = số đã xuất còn trả được; sửa được
- Cột: **Đơn giá**, **Chiết khấu**, **Thuế VAT**, **Lấy VAT**; Ý nghĩa: Theo phiếu xuất, khoá. Ô **Lấy VAT** có thể không được tick dù **Thuế VAT** 8% (ảnh thử) – **Thành tiền** vẫn đã cộng VAT
- Cột: **Thành tiền**; Ý nghĩa: Đơn giá × (1 − CK) × (1 + VAT) × Số lượng (ví dụ 164.000 × 1,08 × 1 = 177.120)

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Bán hàng
   ↓
Khách trả hàng
   ↓
Thêm mới → Từ phiếu xuất
```

```text
Khách trả hàng → Thêm mới (→ Từ phiếu xuất)
      ↓
DANH SÁCH PHIẾU XUẤT KHO → chọn khoảng ngày → nhấp đúp phiếu xuất
      ↓
THÊM PHIẾU TRẢ HÀNG: khách, NV, kho, dòng hàng chưa trả hết tự điền
      ↓
Sửa Số lượng trả, xoá dòng không trả, ghi lý do (GHI CHÚ), kiểm tra kho nhận
      ↓
Lưu lại ── "chỉ có thể trả lại"? ──► giảm số lượng → Lưu lại
      ↓
"Lưu thành công" → Trạng thái nhập: Chưa nhập → (Kho) nhập kho (KHO-A04.2)
```

### Bước 1 – Chọn phiếu xuất kho

Vào **Bán hàng → Khách trả hàng**, bấm **Thêm mới** (nếu có menu, chọn **Từ phiếu xuất**). Cửa sổ **DANH SÁCH PHIẾU XUẤT KHO** mở ra (Hình 1), mặc định lọc **Hôm nay**. Chọn khoảng ngày chứa ngày xuất, tìm phiếu theo mã phiếu / tên khách ở ô **Tìm kiếm…**, **nhấp đúp** vào dòng.

⚠️ Ô **Tìm kiếm…** có thể còn chữ đã tìm lần trước (cửa sổ dùng chung với màn khác) khiến danh sách thiếu phiếu: bấm dấu ✕ trong ô để xoá trước khi tìm.

### Bước 2 – Kiểm tra thông tin chung

Cửa sổ **THÊM PHIẾU TRẢ HÀNG** mở ra (Hình 2) với **KHÁCH HÀNG**, **ĐIỆN THOẠI**, **NỢ CŨ**, **NV KINH DOANH**, **KHO HÀNG** lấy theo phiếu xuất.

- **NGÀY TRẢ HÀNG**: ngày khách trả.
- **KHO HÀNG**: kho nhận hàng trả về. Đổi nếu hàng trả về kho khác (ví dụ kho hàng lỗi).
- **GHI CHÚ**: ghi rõ lý do trả hàng (bắt buộc).

### Bước 3 – Sửa số lượng trả

Bảng chi tiết có các dòng của phiếu xuất **chưa trả hết**, **Số lượng** = phần còn trả được.

1. Kéo thanh cuộn ngang của bảng sang phải tới cột **Số lượng** (Hình 3), sửa thành số khách thực trả.
2. Xoá dòng khách không trả (biểu tượng thùng rác ở cột **Thao tác**).
3. Nhập **Chú thích** nếu cần.

Mẹo: chuột phải vào ô **Số lượng** hoặc **Chú thích** → **Áp dụng cho những dòng dưới**. Chuột phải vào tiêu đề bảng có **Trình chọn cột**, **Khôi phục bố cục**.

Chọn nhầm phiếu xuất: bấm **TỪ PHIẾU XUẤT**  để chọn lại (các dòng được thay theo phiếu mới).

### Bước 4 – Lưu

Bấm **Lưu lại**.

- Thiếu thông tin: ô viền đỏ, bấm vào ô để xem lời nhắc **Chọn ngày trả hàng**, **Vui lòng chọn kho hàng**, **Vui lòng ghi lý do trả hàng**.
- Dòng sai: cảnh báo **<số dòng>. Số lượng >= 0**.
- Hợp lệ: **Lưu thành công**, cửa sổ đóng. Phiếu hiện ở danh sách với **Từ phiếu** = mã phiếu xuất, **Trạng thái nhập** = **Chưa nhập**.

### Bước 5 – Chuyển thủ kho nhập kho

Mở lại đúng mã phiếu KT vừa lưu, đối chiếu **Từ phiếu** là mã XK, khách, kho nhận, đơn vị tính, số trả, giá/chiết khấu/VAT và tổng tiền. Hàng xuất theo lô cần đối chiếu riêng tổng lượng gốc và số đã trả; không coi lượng mặc định là số đã được máy chủ chấp nhận. In **phiếu đề nghị nhập kho hàng trả về** ([HƯỚNG DẪN IN PHIẾU KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-3-huong-dan-in-phieu-khach-tra-hang/)) và báo thủ kho lập phiếu nhập kho ([HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/)).

### Sửa phiếu

Bấm **Sửa** → **CẬP NHẬT PHIẾU TRẢ HÀNG**. Sửa được ngày, kho, ghi chú, số lượng, chú thích. Chỉ sửa được khi phiếu **Chưa nhập**.

## 6. Giải thích các thông tin trên màn hình

- **Ngày trả hàng**: Ý nghĩa: Ngày khách trả; Bắt buộc: Có; Lưu ý: Lọc danh sách, sinh mã phiếu
- **Khách hàng**: Ý nghĩa: Khách trả; Bắt buộc: Có; Lưu ý: Theo phiếu xuất, khoá
- **Điện thoại**: Ý nghĩa: SĐT người nhận trên phiếu xuất; Lưu ý: Chỉ xem
- **Nợ cũ**: Ý nghĩa: Công nợ phải thu hiện tại; Lưu ý: Chỉ xem
- **Mã phiếu**: Ý nghĩa: Mã phiếu khách trả; Lưu ý: Tự tạo
- **Kho hàng**: Ý nghĩa: Kho nhận hàng trả; Bắt buộc: Có; Lưu ý: Mặc định kho đã xuất
- **NV kinh doanh**: Ý nghĩa: Nhân viên của phiếu xuất; Bắt buộc: Có; Lưu ý: Khoá
- **Ghi chú**: Ý nghĩa: Lý do trả hàng; Bắt buộc: Có
- **Hàng hóa, Tên in, Đvt**: Ý nghĩa: Theo phiếu xuất; Lưu ý: Tên in sửa được
- **Số lượng**: Ý nghĩa: Số lượng trả; Bắt buộc: Có; Lưu ý: ≤ số đã xuất − số đã trả của dòng
- **Đơn giá, Chiết khấu, Thuế VAT, Lấy VAT**: Ý nghĩa: Theo phiếu xuất; Lưu ý: Khoá
- **Thành tiền**: Ý nghĩa: Đơn giá × (1 − CK) × (1 + VAT) × Số lượng; Lưu ý: Máy chủ tính lại khi lưu
- **SL đã nhập, SL còn lại**: Ý nghĩa: Theo phiếu nhập kho; Lưu ý: Khi sửa / xem

## 7. Kiểm tra sau khi thực hiện

- Phiếu khách trả được lưu, **Trạng thái nhập** = **Chưa nhập**.
- **Trạng thái trả** của phiếu xuất kho và phiếu bán hàng gốc được cập nhật.
- Tồn kho và công nợ khách **chưa** thay đổi – đổi khi thủ kho nhập kho ([HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/)).

## 8. Những điều cần lưu ý

⚠️ **Lưu phiếu chưa trừ công nợ khách.** Công nợ chỉ giảm khi thủ kho nhập kho.

⚠️ Đơn giá, chiết khấu, VAT **lấy theo phiếu xuất** và không sửa được: công nợ được giảm đúng giá đã bán. Nếu phiếu xuất có chiết khấu / VAT chung ở đầu phiếu, mức chung đó được áp cho mọi dòng.

⚠️ Mỗi phiếu khách trả lấy từ **một** phiếu xuất. Khách trả hàng của nhiều phiếu xuất → lập nhiều phiếu.

⚠️ Sau khi thủ kho đã nhập kho (dù một phần), phiếu không sửa / xoá được.

⚠️ Bấm **Đóng** không hỏi lại; dữ liệu đang nhập bị mất.

### Không thấy phiếu xuất trong DANH SÁCH PHIẾU XUẤT KHO 

Kiểm tra: khoảng ngày (mặc định chỉ hôm nay); chi nhánh; phiếu xuất đã **trả hết** chưa.
Cách xử lý: mở rộng khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

### Bảng chi tiết trống sau khi chọn phiếu 

Nguyên nhân: mọi dòng của phiếu xuất đã được trả hết.
Cách xử lý: kiểm tra các phiếu khách trả đã có (tìm theo mã phiếu xuất ở cột **Từ phiếu**).

### "CẢNH BÁO – Lỗi thêm: <tên hàng> chỉ có thể trả lại (<số>)" 

Nguyên nhân: số lượng trả lớn hơn phần còn trả được của dòng phiếu xuất (theo đơn vị chính).
Cách xử lý: giảm **Số lượng** tối đa bằng số trong câu báo.

### "CẢNH BÁO – Lỗi thêm: ĐƠN BÁN: Tổng trả (<số>) > Tổng xuất (<số>)" 

Nguyên nhân: tổng số trả của dòng phiếu bán hàng vượt tổng đã xuất.
Cách xử lý: giảm số lượng trả; kiểm tra các phiếu khách trả trước đó.

### Ô GHI CHÚ viền đỏ: "Vui lòng ghi lý do trả hàng" 

Nguyên nhân: chưa ghi lý do.
Cách xử lý: ghi lý do trả hàng.

### "CẢNH BÁO – Lỗi sửa: Phiếu đang nhập" / "Phiếu đã nhập" hoặc "Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: thủ kho đã nhập kho từ phiếu.
Cách xử lý: không sửa; liên hệ thủ kho.

### "Bạn không có quyền thực hiện chức năng này." khi bấm Thêm mới 

Nguyên nhân: thiếu quyền truy cập Phiếu xuất kho để mở danh sách chọn.
Cách xử lý: liên hệ quản trị hệ thống.

## 10. Câu hỏi thường gặp

**Khách trả một phần được không?**
Được. Sửa **Số lượng** đúng số trả, xoá các dòng không trả.

**Hàng trả bị hỏng có nhập vào kho riêng được không?**
Chọn **KHO HÀNG** là kho hàng lỗi. Nếu một phần tốt, một phần hỏng, lập hai phiếu khách trả (mỗi phiếu một kho) từ cùng phiếu xuất.

**Vì sao không sửa được đơn giá hàng trả?**
Hàng trả phải theo giá đã bán. Muốn giảm thêm giá cho khách, dùng **Phiếu giảm giá** (BH-A05).

## 11. Công việc tiếp theo

```text
Phiếu khách trả hàng
        ↓
In phiếu đề nghị nhập kho hàng trả về (BH-A04.3)
        ↓
(Kho) Nhập khách trả hàng (KHO-A04.2) → tăng tồn, giảm công nợ khách
```

**Tiếp theo:** [HƯỚNG DẪN IN PHIẾU KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-3-huong-dan-in-phieu-khach-tra-hang/) – Hướng dẫn in phiếu khách trả hàng; [HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/) – Nhập kho hàng khách trả.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-0-tong-quan-man-hinh-khach-tra-hang/) – Tổng quan màn hình Khách trả hàng
- [HƯỚNG DẪN LẬP PHIẾU KHÁCH TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-bh-a04-2-huong-dan-lap-phieu-khach-tra-hang-dau-ky/) – Hướng dẫn lập phiếu khách trả hàng đầu kỳ
- [HƯỚNG DẪN IN PHIẾU KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-3-huong-dan-in-phieu-khach-tra-hang/) – Hướng dẫn in phiếu khách trả hàng
- [HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/) – Hướng dẫn nhập kho hàng khách trả
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
