---
title: "HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG"
date: "2026-11-07"
summary: "Khi giao hàng cho khách, thủ kho lập phiếu xuất kho bán hàng từ phiếu bán hàng đã duyệt giá."
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

Khi giao hàng cho khách, thủ kho lập **phiếu xuất kho bán hàng** từ **phiếu bán hàng** đã duyệt giá. Hệ thống lấy sẵn khách hàng, kho xuất, các dòng hàng **chưa xuất hết**, số lượng còn lại, đơn giá, lô hàng; thủ kho chỉ chọn xe / tài xế, nhập mã phiếu gốc và sửa số lượng giao đợt này.

Sau khi lưu: tồn kho giảm, công nợ khách hàng tăng bằng **Tổng tiền** phiếu xuất, **Trạng thái xuất** của phiếu bán hàng được cập nhật.

Bài này cũng áp dụng khi **Sửa** phiếu (cửa sổ **CẬP NHẬT PHIẾU XUẤT KHO**). Xuất trả hàng NCC xem [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO TRẢ HÀNG NHÀ CUNG CẤP](/bai-viet/2026-11-07-kho-a05-2-huong-dan-lap-phieu-xuat-kho-tra-hang-nha-cung-cap/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu xuất kho**.
- Phiếu bán hàng **đã duyệt giá**, chưa xuất hết, không phải phiếu bán dịch vụ.
- Kho xuất của phiếu bán hàng **còn đủ tồn được xuất** (cả theo lô nếu hàng có lô).
- Danh mục **Xe** và **Tài xế** đã có (bắt buộc chọn).
- Biết **mã phiếu gốc** (số phiếu giao hàng tay / mã chứng từ của bên vận chuyển); không có thì ghi *không có*.

## 2. Mở chức năng

**Kho hàng → Phiếu xuất kho → Thêm mới → Xuất bán hàng**

## 3. Nhận biết màn hình

**Cửa sổ chọn phiếu bán hàng:**

![Hình 1: Cửa sổ DANH SÁCH PHIẾU BÁN HÀNG](/posts/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/hinh-01-danh-sach-phieu-ban-hang.png)

- **Ô chọn khoảng ngày**: Ý nghĩa: Lọc theo **Ngày bán hàng**. Mặc định **Hôm nay**
- **Lưới phiếu bán hàng**: Ý nghĩa: Chỉ hiện phiếu **đã duyệt giá**, **chưa xuất hết**, không phải bán dịch vụ
- **Cột Trạng thái xuất, Trạng thái duyệt**: Ý nghĩa: **Chưa xuất** / **Đang xuất**; **Đã duyệt**. Nằm bên phải lưới (không có trên ảnh) – kéo thanh cuộn ngang

Các cột: **Ngày bán hàng**, **Mã phiếu**, **Tên khách hàng**, **Tiền hàng**, **Chiết khấu**, **Thuế VAT**, **Tổng tiền**, **Mã khách hàng**, **Trạng thái xuất**, **Trạng thái duyệt**, **Trạng thái**, **Ghi chú**. Cửa sổ không có nút **Đồng ý**: **nhấp đúp** vào dòng để chọn. Dưới lưới có dòng **TỔNG CỘNG: n** và tổng **Tiền hàng**, **Tổng tiền**.

**cửa sổ phiếu xuất kho:**

![Hình 2: cửa sổ THÊM MỚI PHIẾU XUẤT KHO (xuất bán)](/posts/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/hinh-02-form-them-phieu-xuat-kho-ban-hang.png)

- **NGÀY XUẤT KHO**: Ý nghĩa: Bắt buộc, mặc định hôm nay; không được trước ngày bán hàng
- **XE, TÀI XẾ**: Ý nghĩa: Bắt buộc. Chọn **XE** trước: hệ thống tự điền tài xế mặc định của xe
- **MÃ PHIẾU GỐC**: Ý nghĩa: Bắt buộc. Không có thì ghi *không có*
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **NGƯỜI NHẬN, ĐỊA CHỈ, ĐIỆN THOẠI**: Ý nghĩa: Bắt buộc, điền sẵn theo khách hàng / địa chỉ giao của phiếu bán hàng, sửa được
- **TỪ PHIẾU**: Ý nghĩa: Mã phiếu bán hàng đã chọn, chỉ xem
- **GHI CHÚ, LÝ DO XUẤT**: Ý nghĩa: Chép từ ghi chú phiếu bán hàng, sửa được
- **KHO XUẤT**: Ý nghĩa: Lấy theo phiếu bán hàng, **khoá**
- **NỢ, NGÀY ĐẾN HẠN**: Ý nghĩa: Số ngày nợ và ngày đến hạn, chỉ xem. ⚠️ Thử 11/10/2026: ô hiện **30, 11/10/2026** – ngày đến hạn **bằng ngày xuất** dù nợ 30 ngày (nghi lỗi, xem phần “Những điều cần lưu ý”)
- **Bảng chi tiết hàng hoá**: Ý nghĩa: Xem bảng cột dưới
- **TỪ PHIẾU BÁN HÀNG, TỪ PHIẾU TRẢ HÀNG**: Ý nghĩa: Chọn lại chứng từ gốc (chỉ khi thêm mới)
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Các cột trong bảng chi tiết:**

- **STT**: Nhập / tự tính: Tự đánh số
- **Số HĐ**: Nhập / tự tính: **Nhập** (số hoá đơn của dòng, tuỳ chọn)
- **Số PO**: Nhập / tự tính: Số PO của khách, lấy từ phiếu bán hàng, khoá
- **Hàng hóa**: Nhập / tự tính: Theo phiếu bán hàng, **khoá**
- **Tên in**: Nhập / tự tính: Tên in phiếu, lấy từ phiếu bán hàng, sửa được
- **Đvt**: Nhập / tự tính: Theo phiếu bán hàng
- **Khối lượng, Kiện, M³**: Nhập / tự tính: Tự tính theo Số lượng
- **Số lượng**: Nhập / tự tính: **Nhập** – mặc định = số còn chưa xuất
- **Số lượng lô**: Nhập / tự tính: Tổng số lượng xuất theo lô; **bấm vào ô** để mở cửa sổ **CHI TIẾT LÔ**
- **Chú thích**: Nhập / tự tính: **Nhập** (in trên phiếu)
- **Chú thích nội bộ**: Nhập / tự tính: **Nhập** (ghi chú nội bộ)
- **Thao tác**: Nhập / tự tính: Nút xoá dòng

Bảng không có nút **Thêm một hàng**: chỉ xuất được các dòng có trên phiếu bán hàng.

⚠️ Lúc mở cửa sổ, bảng chi tiết chỉ thấy **STT**, **Số HĐ**, **Số PO**, **Hàng hóa**, **Tên in**, **Thao tác** (Hình 2). Các cột **không bị ẩn**: cột **Hàng hóa** và **Tên in** rộng nên **Đvt**, **Khối lượng**, **Kiện**, **M³**, **Số lượng**, **Số lượng lô**, **Chú thích**… nằm bên phải. **Kéo thanh cuộn ngang ở đáy bảng** sang phải để thấy và nhập (Hình 3).

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kho hàng
   ↓
Phiếu xuất kho
   ↓
Thêm mới → Xuất bán hàng
```

```text
Phiếu xuất kho → Thêm mới → Xuất bán hàng
      ↓
DANH SÁCH PHIẾU BÁN HÀNG → đổi khoảng ngày → nhấp đúp phiếu bán hàng
      ↓
cửa sổ điền sẵn: người nhận, địa chỉ, kho xuất, các dòng chưa xuất hết
      ↓
Chọn Xe (tự điền Tài xế) → nhập Mã phiếu gốc
      ↓
Sửa Số lượng giao đợt này · xoá dòng chưa giao · kiểm tra lô
      ↓
Lưu lại ── thiếu tồn / vượt số còn lại / chưa duyệt giá? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → tồn giảm, công nợ khách tăng
      ↓
Phiếu bán hàng: Đang xuất / Đã xuất
```

### Bước 1 – Mở danh sách phiếu bán hàng

Vào **Kho hàng → Phiếu xuất kho**, bấm **Thêm mới** → **Xuất bán hàng**. Cửa sổ **DANH SÁCH PHIẾU BÁN HÀNG** mở ra (Hình 1).

### Bước 2 – Tìm và chọn phiếu bán hàng

1. Đổi khoảng ngày  cho chứa **Ngày bán hàng** (mặc định chỉ hôm nay – [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).
2. Tìm theo **Mã phiếu** hoặc **Tên khách hàng** ở ô **Tìm kiếm…**.
3. **Nhấp đúp** vào dòng phiếu bán hàng.

cửa sổ **THÊM MỚI PHIẾU XUẤT KHO** mở ra (Hình 2), đã điền **NGƯỜI NHẬN**, **ĐỊA CHỈ**, **ĐIỆN THOẠI**, **TỪ PHIẾU**, **GHI CHÚ, LÝ DO XUẤT**, **KHO XUẤT**, **NỢ, NGÀY ĐẾN HẠN** và các dòng hàng **chưa xuất hết**.

### Bước 3 – Chọn xe, tài xế và nhập mã phiếu gốc

- **XE**: chọn biển số xe giao hàng. Hệ thống tự điền **TÀI XẾ** mặc định của xe (nếu xe có).
- **TÀI XẾ**: kiểm tra, chọn lại nếu khác. Chọn lại **XE** sẽ ghi đè tài xế, nên chọn xe trước.
- Khách tự lấy hàng: chọn xe / tài xế quy ước của chi nhánh (dữ liệu thử: xe **XE KHÁCH TỚI LẤY**, tài xế **LẤY HÀNG TẠI KHO**).
- **MÃ PHIẾU GỐC**: số phiếu giao hàng / chứng từ tay; không có thì ghi *không có*.

### Bước 4 – Kiểm tra thông tin người nhận

- **NGƯỜI NHẬN**, **ĐỊA CHỈ**, **ĐIỆN THOẠI**: sửa theo người nhận thực tế. Khách lấy tại kho thì ghi *tại kho* ở **ĐỊA CHỈ**.
- **NGÀY XUẤT KHO**: ngày giao hàng thực tế; không được trước ngày bán hàng. Đổi ngày thì **NGÀY ĐẾN HẠN** tự tính lại.

### Bước 5 – Sửa số lượng giao

Mỗi dòng có **Số lượng** mặc định = số còn chưa xuất của phiếu bán hàng. Nếu giao một phần:

1. Kéo thanh cuộn ngang của bảng sang phải tới cột **Số lượng**, bấm vào ô và nhập số giao đợt này (Hình 3: phiếu bán 2 tấm, giao đợt này 1).
2. Dòng không giao đợt này: bấm biểu tượng thùng rác ở cột **Thao tác** để xoá dòng khỏi phiếu xuất (phần còn lại vẫn chờ xuất lần sau).
3. Nhập **Số HĐ**, **Chú thích**, **Chú thích nội bộ** nếu cần. Chuột phải vào ô **Số HĐ** / **Chú thích** / **Chú thích nội bộ** → **Áp dụng cho những dòng dưới** để chép xuống các dòng dưới.

![Hình 3: Bảng chi tiết phiếu xuất kho bán hàng (đã kéo thanh cuộn ngang)](/posts/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/hinh-03-bang-chi-tiet-xuat-ban.png)

Khung đỏ: cột **Số lượng**, **Số lượng lô** và thanh cuộn ngang ở đáy bảng.

### Bước 6 – (Hàng có lô) Kiểm tra số lượng theo lô

Nếu phiếu bán hàng có chọn lô, cột **Số lượng lô** đã có số. Bấm vào ô **Số lượng lô** để mở **CHI TIẾT LÔ** (Hình 4):

- Mỗi dòng là một lô: ô **LOT** (mã lô) và ô **SL** (số lượng xuất của lô đó). Phiếu bán hàng không chọn lô thì cửa sổ mở với một dòng trống, ô LOT ghi **Lựa chọn…** (Hình 4).
- Nút **+** (tròn, màu xanh) thêm dòng lô; nút **−** (đỏ) bên phải dòng xoá dòng đó.
- Dòng **TỔNG CỘNG:** cộng số lượng các lô.
- Bấm **Đồng ý** để ghi lại, **Đóng** để bỏ. Hàng không xuất theo lô thì bấm **Đóng**, để **Số lượng lô** = 0.

![Hình 4: Cửa sổ CHI TIẾT LÔ](/posts/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/hinh-04-chi-tiet-lo.png)

### Bước 7 – Lưu lại

Bấm **Lưu lại** ⑫.

- Thiếu trường bắt buộc: ô có viền đỏ; bấm vào ô để xem lời nhắc (ví dụ **Vui lòng chọn xe**, **Vui lòng nhập mã phiếu gốc hoặc mã phiếu từ NCC.../ không có thì ghi không có thì ghi không có**).
- Dòng sai: cảnh báo **<số dòng>. Số lượng >= 0**.
- Lỗi từ hệ thống (toast **CẢNH BÁO – Lỗi thêm: …**): xem phần “Vướng mắc thường gặp”.
- Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại.

### Bước 8 – Kiểm tra kết quả

Phiếu mới hiện trong danh sách với **Từ phiếu** = mã phiếu bán hàng. Mở lại phiếu bán hàng (sổ tay Bán hàng) để thấy **Trạng thái xuất** đổi sang **Đang xuất** / **Đã xuất**.

### Sửa phiếu

Bấm **Sửa** → cửa sổ **CẬP NHẬT PHIẾU XUẤT KHO**. Được sửa ngày, xe, tài xế, mã phiếu gốc, người nhận, ghi chú, **Số lượng**, **Tên in**, **Chú thích**, chi tiết lô, xoá dòng. Không đổi được kho xuất, hàng hoá, phiếu bán hàng gốc; không sửa được **Số HĐ** (dùng **Sửa hóa đơn** – [HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/)). Không sửa được khi phiếu đã thu tiền hoặc ngày xuất thuộc kỳ đã khoá.

## 6. Giải thích các thông tin trên màn hình

- **Ngày xuất kho**: Ý nghĩa: Ngày giao hàng; Bắt buộc: Có; Lưu ý: ≥ ngày bán hàng; dùng lọc danh sách, sinh mã phiếu
- **Xe**: Ý nghĩa: Biển số xe giao; Bắt buộc: Có; Lưu ý: Chọn xe tự điền tài xế mặc định
- **Tài xế**: Ý nghĩa: Người lái xe; Bắt buộc: Có
- **Mã phiếu gốc**: Ý nghĩa: Số chứng từ tay / bên giao nhận; Bắt buộc: Có; Lưu ý: Không có thì ghi *không có*
- **Mã phiếu**: Ý nghĩa: Mã phiếu xuất (**XK…**); Lưu ý: Tự tạo khi lưu
- **Người nhận**: Ý nghĩa: Tên người / đơn vị nhận hàng; Bắt buộc: Có; Lưu ý: Mặc định tên khách hàng
- **Địa chỉ**: Ý nghĩa: Địa chỉ giao; Bắt buộc: Có; Lưu ý: Mặc định địa chỉ khách + địa chỉ giao của phiếu bán
- **Điện thoại**: Ý nghĩa: SĐT người nhận; Bắt buộc: Có
- **Từ phiếu**: Ý nghĩa: Mã phiếu bán hàng; Lưu ý: Chỉ xem
- **Ghi chú, lý do xuất**: Ý nghĩa: Ghi chú; Bắt buộc: Không; Lưu ý: Hiện ở cột **Lý do xuất**
- **Kho xuất**: Ý nghĩa: Kho giao hàng; Bắt buộc: Có; Lưu ý: Theo phiếu bán hàng, khoá
- **Nợ, ngày đến hạn**: Ý nghĩa: Số ngày nợ, ngày đến hạn; Lưu ý: Chỉ xem; sửa số ngày nợ ở [HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/)
- **Số HĐ**: Ý nghĩa: Số hoá đơn của dòng; Bắt buộc: Không; Lưu ý: Sửa sau bằng **Sửa hóa đơn**
- **Số PO**: Ý nghĩa: PO của khách; Lưu ý: Từ phiếu bán hàng
- **Hàng hóa, Đvt**: Ý nghĩa: Theo phiếu bán hàng; Lưu ý: Khoá
- **Tên in**: Ý nghĩa: Tên hàng in trên phiếu; Bắt buộc: Không
- **Số lượng**: Ý nghĩa: Số lượng giao (không theo lô); Bắt buộc: Có; Lưu ý: ≥ 0 và ≤ số còn chưa xuất
- **Số lượng lô**: Ý nghĩa: Tổng số lượng xuất theo lô; Lưu ý: Sửa trong **CHI TIẾT LÔ**
- **Khối lượng / Kiện / M³**: Ý nghĩa: Số lượng × trọng lượng / ÷ quy đổi kiện / × m³; Lưu ý: Tự tính
- **Chú thích / Chú thích nội bộ**: Ý nghĩa: Ghi chú dòng; Bắt buộc: Không
- **Tổng tiền (danh sách)**: Ý nghĩa: Σ đơn giá × (1 − CK) × (1 + VAT) × (Số lượng + Số lượng lô); Lưu ý: Đơn giá, CK, VAT theo phiếu bán hàng, không hiện trong cửa sổ

## 7. Kiểm tra sau khi thực hiện

- Phiếu được lưu với mã **XK…**, hiện ở **PHIẾU XUẤT KHO - DANH SÁCH**.
- **Tồn kho** của kho xuất giảm; sổ cái kho có dòng **XUAT_KHO** ([TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/)).
- **Công nợ khách hàng** tăng bằng Tổng tiền phiếu xuất.
- Phiếu bán hàng gốc: **Trạng thái xuất** = **Đang xuất** (giao một phần) / **Đã xuất** (giao hết – không còn hiện khi chọn lần sau).

## 8. Những điều cần lưu ý

⚠️ Với hàng xuất theo lô, phải đối chiếu tổng **Số lượng + Số lượng lô** với lượng giao thực tế và giá trị trước lưu. Bản nguồn còn nghi vấn nạp trùng lượng và thiếu dòng sổ cái cho phần lô; chưa coi luồng lô đã được kiểm thử đầy đủ. Nếu tổng đếm đôi hoặc sổ không khớp, dừng và báo IT/kế toán, không tự đặt lại lượng để vượt kiểm tra.

⚠️ **Lưu là trừ tồn và ghi công nợ khách ngay.** Chỉ lưu khi hàng thực sự rời kho.

⚠️ Hệ thống kiểm tra **tồn được xuất** của kho xuất: tồn hiện tại trừ hàng khách đặt, bán chưa xuất, giữ gia công, giữ chuyển kho (phần đã giữ cho chính phiếu bán hàng này được trả lại trước khi kiểm tra).

⚠️ Phiếu bán hàng phải **đã duyệt giá**; nếu đơn giá phiếu bán hàng bị sửa sau khi mở cửa sổ, hệ thống chặn lưu – đóng cửa sổ và làm lại.

⚠️ **Ngày xuất kho không được trước ngày bán hàng.**

⚠️ Bấm **Đóng** không hỏi lại, dữ liệu đang nhập bị mất.

⚠️ Chọn lại **XE** sẽ ghi đè **TÀI XẾ** bằng tài xế mặc định của xe (có thể để trống). Kiểm tra lại ô Tài xế sau khi đổi xe.

⚠️ Ô **NỢ, NGÀY ĐẾN HẠN** trên cửa sổ hiện ngày đến hạn **bằng ngày xuất** (thử 11/10/2026: **30, 11/10/2026**), không phải ngày xuất + số ngày nợ – đã báo IT. Kiểm tra ngày đến hạn ở cột **Ngày đến hạn** trên danh sách sau khi lưu; sửa số ngày nợ bằng chuột phải → **Cập nhật số ngày nợ** ([HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/)).

⚠️ Phiếu bán hàng giao **Tại kho**: ô **ĐỊA CHỈ** có thể hiện **"Tại kho, null"** – sửa thành *Tại kho* trước khi lưu.

### "CẢNH BÁO – Lỗi thêm: Chưa được duyệt giá, không thể xuất." 

Nguyên nhân: phiếu bán hàng chưa được duyệt giá.
Cách xử lý: nhờ người có quyền duyệt giá phiếu bán hàng (sổ tay Bán hàng), rồi lập lại.

### "CẢNH BÁO – Lỗi thêm: Thời gian xuất kho không hợp lệ." 

Nguyên nhân: **NGÀY XUẤT KHO** trước ngày bán hàng.
Cách xử lý: chọn ngày xuất ≥ ngày bán hàng.

### "CẢNH BÁO – Lỗi thêm: Số liệu PBH đã được thay đổi. Vui lòng thoát ra và thao tác lại." 

Nguyên nhân: đơn giá trên phiếu bán hàng đã bị sửa sau khi bạn mở cửa sổ.
Cách xử lý: bấm **Đóng**, lập lại phiếu xuất từ đầu.

### "CẢNH BÁO – Lỗi thêm: <tên hàng> chỉ còn lại (<số>) từ đơn" 

Nguyên nhân: số lượng xuất lớn hơn số còn chưa xuất của phiếu bán hàng.
Cách xử lý: giảm **Số lượng** về tối đa bằng số trong câu báo.

### "CẢNH BÁO – Lỗi thêm: "<tên kho>", "<tên hàng>" không đủ tồn (<số>), lô còn (<số>)." 

Nguyên nhân: kho xuất không còn đủ tồn được xuất (đã giữ cho đơn khác, đang chuyển kho, gia công…).
Cách xử lý: kiểm tra tồn (ô chọn hàng hoá hiện "tồn hiện tại, tồn được xuất, lô được xuất"), giảm số lượng hoặc nhập / chuyển hàng về kho trước.

### "CẢNH BÁO – Lỗi thêm: <mã lô>, <tên hàng> chỉ còn lại (<số>) từ đơn." / "Số lượng lô không hợp lệ" 

Nguyên nhân: số lượng lô vượt số lô còn lại trên phiếu bán hàng, hoặc lô có SL ≤ 0.
Cách xử lý: sửa SL trong **CHI TIẾT LÔ**, xoá dòng lô có SL 0.

### "CẢNH BÁO – Lỗi thêm: Số lượng không hợp lệ" 

Nguyên nhân: dòng có Số lượng = 0 và không có số lượng lô.
Cách xử lý: nhập số lượng hoặc xoá dòng.

### Ô viền đỏ, lời nhắc "Vui lòng chọn xe" / "Vui lòng chọn tài xế" / "Vui lòng ghi địa chỉ giao hàng -Lấy tại kho thì ghi tại kho-" / "Vui lòng ghi số điện thoại người nhận hàng" 

Nguyên nhân: thiếu trường bắt buộc.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### Không thấy phiếu bán hàng trong danh sách chọn 

Kiểm tra: khoảng ngày (mặc định hôm nay); phiếu đã **Đã xuất** hết; phiếu **Chưa duyệt** giá; phiếu bán dịch vụ; chi nhánh.
Cách xử lý: mở rộng khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)) hoặc kiểm tra phiếu bán hàng.

## 10. Câu hỏi thường gặp

**Giao hàng làm hai chuyến thì sao?**
Chuyến 1: lập phiếu xuất với số lượng giao, xoá dòng chưa giao. Chuyến 2: lập phiếu xuất mới từ cùng phiếu bán hàng – chỉ còn phần chưa xuất.

**Vì sao trong cửa sổ không thấy đơn giá?**
Đơn giá, chiết khấu, VAT lấy theo phiếu bán hàng và không sửa ở phiếu xuất. **Tổng tiền** hiện ở danh sách sau khi lưu.

**Muốn đổi sang phiếu bán hàng khác khi đang lập?**
Bấm **TỪ PHIẾU BÁN HÀNG** ở góc dưới cửa sổ và chọn lại. Toàn bộ thông tin và dòng hàng được thay theo phiếu mới.

**Vì sao không thêm được mặt hàng ngoài phiếu bán hàng?**
Phiếu xuất bán chỉ xuất hàng có trên phiếu bán hàng. Cần bán thêm thì lập / sửa phiếu bán hàng trước.

## 11. Công việc tiếp theo

```text
Phiếu xuất kho bán hàng
        ↓
(Tuỳ chọn) In phiếu (KHO-A05.4) · Gửi mail cho khách (KHO-A05.3)
        ↓
(Kế toán) Ghi số hoá đơn (KHO-A05.3) → Phiếu thu tiền khách
        ↓
(Nếu khách trả lại) Phiếu khách trả hàng (sổ tay Bán hàng)
```

**Tiếp theo:** [HƯỚNG DẪN IN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-4-huong-dan-in-phieu-xuat-kho/) – Hướng dẫn in phiếu xuất kho.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
- [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO TRẢ HÀNG NHÀ CUNG CẤP](/bai-viet/2026-11-07-kho-a05-2-huong-dan-lap-phieu-xuat-kho-tra-hang-nha-cung-cap/) – Hướng dẫn lập phiếu xuất kho trả hàng nhà cung cấp
- [HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/) – Hướng dẫn cập nhật hoá đơn và thông tin phiếu xuất kho
- [HƯỚNG DẪN IN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-4-huong-dan-in-phieu-xuat-kho/) – Hướng dẫn in phiếu xuất kho
- [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/) – Tổng quan màn hình Sổ cái kho
- Sổ tay Bán hàng – Phiếu bán hàng (BH-A03), Khách trả hàng (BH-A04)
- Sổ tay Thiết lập danh mục – Xe, Tài xế
