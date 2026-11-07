---
title: "HƯỚNG DẪN LẬP PHIẾU XUẤT KHO TRẢ HÀNG NHÀ CUNG CẤP"
date: "2026-11-07"
summary: "Bộ phận mua hàng lập phiếu trả hàng (sổ tay Mua hàng – HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO) khi cần trả hàng lỗi / thừa cho nhà cung cấp (NCC)."
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

Bộ phận mua hàng lập **phiếu trả hàng** (sổ tay Mua hàng – [HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/)) khi cần trả hàng lỗi / thừa cho nhà cung cấp (NCC). Phiếu trả hàng **chưa** trừ tồn và **chưa** giảm công nợ. Khi giao hàng trả cho NCC, thủ kho lập **phiếu xuất kho → Xuất trả hàng** từ phiếu trả đó.

Sau khi lưu: tồn kho giảm, **công nợ NCC giảm** bằng **Tổng tiền** phiếu xuất, giá vốn bình quân được tính lại theo giá nhập của lô hàng trả, **Trạng thái xuất** của phiếu trả hàng được cập nhật.

Bài này cũng áp dụng khi **Sửa** phiếu (cửa sổ **CẬP NHẬT PHIẾU XUẤT KHO**).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu xuất kho**.
- Đã có **phiếu trả hàng** ([HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/)) còn dòng **chưa xuất hết**.
- Kho xuất của phiếu trả hàng còn đủ tồn được xuất.
- Danh mục **Xe**, **Tài xế** đã có (bắt buộc chọn).

## 2. Mở chức năng

**Kho hàng → Phiếu xuất kho → Thêm mới → Xuất trả hàng**

## 3. Nhận biết màn hình

**Cửa sổ chọn phiếu trả hàng:**

![Hình 1: Cửa sổ DANH SÁCH PHIẾU TRẢ HÀNG NCC](/posts/2026-11-07-kho-a05-2-huong-dan-lap-phieu-xuat-kho-tra-hang-nha-cung-cap/hinh-01-danh-sach-phieu-tra-hang-ncc.png)

- **Ô chọn khoảng ngày**: Ý nghĩa: Lọc theo **Ngày trả hàng**. Mặc định **Hôm nay**
- **Tải lại**: Ý nghĩa: Tải lại danh sách
- **Lưới phiếu trả hàng**: Ý nghĩa: Mọi phiếu trả hàng trong khoảng ngày

Các cột: **Ngày trả hàng**, **Mã phiếu**, **Từ phiếu** (mã phiếu nhập kho gốc), **Nhà cung cấp**, **Tiền hàng**, **Chiết khấu**, **Thuế VAT**, **Tổng tiền**, **Mã nhà cung cấp**, **Trạng thái xuất**, **Trạng thái**, **Ghi chú**. Cửa sổ không có nút **Đồng ý**: **nhấp đúp** vào dòng để chọn.

**cửa sổ phiếu xuất kho:**

![Hình 2: cửa sổ THÊM MỚI PHIẾU XUẤT KHO (xuất trả)](/posts/2026-11-07-kho-a05-2-huong-dan-lap-phieu-xuat-kho-tra-hang-nha-cung-cap/hinh-02-form-them-phieu-xuat-tra.png)

- **NGÀY XUẤT KHO**: Ý nghĩa: Bắt buộc, mặc định hôm nay
- **XE, TÀI XẾ**: Ý nghĩa: Bắt buộc. Chọn **XE** trước: hệ thống tự điền tài xế mặc định của xe
- **MÃ PHIẾU GỐC**: Ý nghĩa: Bắt buộc. Không có thì ghi *không có*
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **NGƯỜI NHẬN, ĐỊA CHỈ, ĐIỆN THOẠI**: Ý nghĩa: Bắt buộc, điền sẵn theo NCC, sửa được
- **TỪ PHIẾU**: Ý nghĩa: Mã phiếu trả hàng (**TH…**), chỉ xem
- **GHI CHÚ, LÝ DO XUẤT**: Ý nghĩa: Chép từ ghi chú phiếu trả hàng
- **KHO XUẤT**: Ý nghĩa: Lấy theo phiếu trả hàng, **khoá**
- **NỢ, NGÀY ĐẾN HẠN**: Ý nghĩa: Với xuất trả thường là *0, <ngày xuất>*
- **Bảng chi tiết hàng trả**: Ý nghĩa: Xem bảng cột dưới
- **TỪ PHIẾU BÁN HÀNG, TỪ PHIẾU TRẢ HÀNG**: Ý nghĩa: Chọn lại chứng từ gốc (chỉ khi thêm mới)
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Các cột trong bảng chi tiết:**

- **STT**: Nhập / tự tính: Tự đánh số
- **Số HĐ**: Nhập / tự tính: **Nhập** (tuỳ chọn)
- **Số PO**: Nhập / tự tính: Trống với xuất trả
- **Hàng hóa**: Nhập / tự tính: Theo phiếu trả hàng, **khoá**
- **Tên in**: Nhập / tự tính: Thường trống
- **Đvt**: Nhập / tự tính: Theo phiếu trả hàng
- **Khối lượng, Kiện, M³**: Nhập / tự tính: Tự tính theo Số lượng
- **Số lượng**: Nhập / tự tính: **Nhập** – mặc định = số còn chưa xuất của phiếu trả
- **Số lượng lô**: Nhập / tự tính: Không dùng cho xuất trả
- **Chú thích, Chú thích nội bộ**: Nhập / tự tính: **Nhập**
- **Thao tác**: Nhập / tự tính: Nút xoá dòng

⚠️ Ảnh thử 09/10/2026 (Hình 2, Hình 3) chỉ thấy **STT**, **Số HĐ**, **Số PO**, **Hàng hóa**, **Tên in**, **Thao tác**: các cột **Đvt**, **Khối lượng**, **Kiện**, **M³**, **Số lượng**… nằm bên phải – **kéo thanh cuộn ngang ở đáy bảng**. Bảng cũng **lưu bố cục cột theo từng người dùng** (dùng chung cho thêm, sửa, xem): nếu cuộn hết mà vẫn không có cột **Số lượng**, chuột phải vào tiêu đề cột → **Khôi phục bố cục**.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kho hàng
   ↓
Phiếu xuất kho
   ↓
Thêm mới → Xuất trả hàng
```

```text
(Mua hàng) Phiếu trả hàng từ phiếu nhập kho (MH-A04.1)
      ↓
Phiếu xuất kho → Thêm mới → Xuất trả hàng
      ↓
DANH SÁCH PHIẾU TRẢ HÀNG NCC → nhấp đúp phiếu trả
      ↓
cửa sổ điền sẵn: NCC, kho xuất, các dòng chưa xuất
      ↓
Chọn Xe, Tài xế → nhập Mã phiếu gốc → kiểm tra Số lượng
      ↓
Lưu lại ── thiếu tồn / vượt số còn lại? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → tồn giảm, công nợ NCC giảm
      ↓
Phiếu trả hàng: Trạng thái xuất Đang xuất / Đã xuất
```

### Bước 1 – Mở danh sách phiếu trả hàng

Vào **Kho hàng → Phiếu xuất kho**, bấm **Thêm mới** → **Xuất trả hàng**. Cửa sổ **DANH SÁCH PHIẾU TRẢ HÀNG NCC** mở ra (Hình 1).

### Bước 2 – Chọn phiếu trả hàng

1. Đổi khoảng ngày  cho chứa **Ngày trả hàng** (mặc định hôm nay – [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).
2. Tìm theo **Mã phiếu** (TH…) hoặc **Nhà cung cấp** ở ô **Tìm kiếm…**.
3. **Nhấp đúp** vào dòng.

cửa sổ **THÊM MỚI PHIẾU XUẤT KHO** mở ra (Hình 2): **NGƯỜI NHẬN** = tên NCC, **TỪ PHIẾU** = mã phiếu trả, **KHO XUẤT** = kho xuất của phiếu trả, bảng có các dòng chưa xuất.

### Bước 3 – Chọn xe, tài xế, nhập mã phiếu gốc

- **XE**: chọn xe chở hàng trả. Tài xế mặc định của xe được điền vào **TÀI XẾ**.
- NCC tự đến lấy: chọn xe / tài xế dạng **LẤY HÀNG TẠI KHO** / **XE KHÁCH TỚI LẤY** (nếu danh mục có).
- **MÃ PHIẾU GỐC**: số biên bản giao trả / chứng từ tay; không có thì ghi *không có*.

### Bước 4 – Kiểm tra người nhận

**ĐỊA CHỈ** có thể hiện **null, null** khi NCC chưa khai địa chỉ: sửa thành địa chỉ giao thực tế (hoặc *tại kho*). Kiểm tra **ĐIỆN THOẠI**.

### Bước 5 – Kiểm tra số lượng

**Số lượng** mặc định = số còn phải xuất của phiếu trả (kéo thanh cuộn ngang sang phải để thấy cột). Giao trả một phần thì sửa **Số lượng**; dòng chưa giao thì xoá bằng biểu tượng thùng rác ở cột **Thao tác** (Hình 3).

![Hình 3: Bảng chi tiết phiếu xuất trả hàng (phần đầu bảng)](/posts/2026-11-07-kho-a05-2-huong-dan-lap-phieu-xuat-kho-tra-hang-nha-cung-cap/hinh-03-bang-chi-tiet-xuat-tra.png)

### Bước 6 – Lưu lại

Bấm **Lưu lại** ⑫.

- Thiếu trường bắt buộc: ô viền đỏ; bấm vào ô để xem lời nhắc.
- Vượt số còn lại / thiếu tồn: toast **CẢNH BÁO – Lỗi thêm: …** (xem phần “Vướng mắc thường gặp”).
- Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại (Hình 4).

![Hình 4: Danh sách sau khi lưu phiếu xuất trả](/posts/2026-11-07-kho-a05-2-huong-dan-lap-phieu-xuat-kho-tra-hang-nha-cung-cap/hinh-04-danh-sach-sau-luu.png)

### Bước 7 – Kiểm tra kết quả

- Danh sách: dòng mới **XK…**, **Từ phiếu** = **TH…**, **Người nhận** = NCC.
- Sổ tay Mua hàng: phiếu trả hàng chuyển **Trạng thái xuất** sang **Đã xuất** (hoặc **Đang xuất**).
- Công nợ NCC (**Nợ cũ** khi lập chứng từ mua tiếp theo) giảm tương ứng.

### Sửa phiếu

Bấm **Sửa** → **CẬP NHẬT PHIẾU XUẤT KHO**. Sửa được ngày, xe, tài xế, mã phiếu gốc, người nhận, ghi chú, **Số lượng**, chú thích, xoá dòng. Không đổi được NCC, kho xuất, hàng hoá, phiếu trả gốc.

## 6. Giải thích các thông tin trên màn hình

- **Ngày xuất kho**: Ý nghĩa: Ngày giao hàng trả; Bắt buộc: Có; Lưu ý: Dùng lọc danh sách, sinh mã phiếu
- **Xe, Tài xế**: Ý nghĩa: Phương tiện giao trả; Bắt buộc: Có; Lưu ý: Chọn xe tự điền tài xế mặc định
- **Mã phiếu gốc**: Ý nghĩa: Chứng từ tay; Bắt buộc: Có; Lưu ý: Không có thì ghi *không có*
- **Mã phiếu**: Ý nghĩa: Mã phiếu xuất (**XK…**); Lưu ý: Tự tạo
- **Người nhận, Địa chỉ, Điện thoại**: Ý nghĩa: Thông tin NCC nhận hàng; Bắt buộc: Có; Lưu ý: Điền sẵn theo NCC
- **Từ phiếu**: Ý nghĩa: Mã phiếu trả hàng; Lưu ý: Chỉ xem
- **Ghi chú, lý do xuất**: Ý nghĩa: Lý do trả; Bắt buộc: Không
- **Kho xuất**: Ý nghĩa: Kho giao trả; Bắt buộc: Có; Lưu ý: Theo phiếu trả, khoá
- **Hàng hóa, Đvt**: Ý nghĩa: Theo phiếu trả; Lưu ý: Khoá
- **Số lượng**: Ý nghĩa: Số lượng giao trả; Bắt buộc: Có; Lưu ý: ≥ 0 và ≤ số còn chưa xuất của phiếu trả
- **Khối lượng / Kiện / M³**: Ý nghĩa: Tự tính
- **Chú thích / Chú thích nội bộ**: Ý nghĩa: Ghi chú dòng; Bắt buộc: Không
- **Tổng tiền (danh sách)**: Ý nghĩa: Σ đơn giá × (1 − CK) × (1 + VAT) × Số lượng; Lưu ý: Giá theo phiếu trả (tức theo phiếu nhập)

## 7. Kiểm tra sau khi thực hiện

- Phiếu được lưu với mã **XK…**, **Từ phiếu** = mã phiếu trả.
- **Tồn kho** giảm; sổ cái kho có dòng **TRA_HANG_NCC** với giá xuất = giá nhập của lô hàng (sau chiết khấu, cộng chi phí phân bổ), giá vốn bình quân được tính lại ([TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/)).
- **Công nợ NCC** giảm bằng Tổng tiền phiếu xuất.
- Phiếu trả hàng: **Trạng thái xuất** = **Đã xuất** (hết) / **Đang xuất** (một phần).

## 8. Những điều cần lưu ý

⚠️ **Chỉ lập phiếu xuất trả khi hàng thực sự rời kho.** Lưu là trừ tồn và giảm công nợ NCC ngay.

⚠️ Danh sách chọn hiện **cả phiếu trả đã xuất hết**; chọn nhầm phiếu đó thì bảng chi tiết trống. Xem cột **Trạng thái xuất** trước khi nhấp đúp.

⚠️ Hệ thống kiểm tra **tồn được xuất** của kho: hàng đã giữ cho đơn khách / bán chưa xuất / gia công / chuyển kho không được tính.

⚠️ Giá trên phiếu xuất trả lấy theo phiếu trả (tức phiếu nhập), không sửa được.

### "CẢNH BÁO – Lỗi thêm: <tên hàng> chỉ còn lại (<số>) từ đơn" 

Nguyên nhân: số lượng xuất lớn hơn số còn chưa xuất của phiếu trả.
Cách xử lý: giảm **Số lượng** về tối đa bằng số trong câu báo.

### "CẢNH BÁO – Lỗi thêm: "<tên kho>", "<tên hàng>" không đủ tồn (<số>), lô còn (<số>)." 

Nguyên nhân: kho xuất không còn đủ tồn được xuất.
Cách xử lý: kiểm tra tồn kho, chuyển hàng về đúng kho trước, hoặc giảm số lượng.

### "CẢNH BÁO – Lỗi thêm: Số lượng không hợp lệ" 

Nguyên nhân: dòng có Số lượng = 0.
Cách xử lý: nhập số lượng hoặc xoá dòng.

### "CẢNH BÁO – Lỗi thêm: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: ngày xuất thuộc kỳ kế toán đã khoá.
Cách xử lý: liên hệ kế toán.

### Bảng chi tiết trống sau khi chọn phiếu trả 

Nguyên nhân: phiếu trả đã xuất hết.
Cách xử lý: bấm **TỪ PHIẾU TRẢ HÀNG** và chọn phiếu có **Trạng thái xuất** chưa phải **Đã xuất**.

## 10. Câu hỏi thường gặp

**Phiếu trả hàng đã lập mà công nợ NCC chưa giảm?**
Đúng. Công nợ NCC chỉ giảm khi lưu phiếu xuất kho trả hàng.

**Trả một phần lô hàng được không?**
Được. Sửa **Số lượng**; lần sau phiếu trả vẫn hiện để xuất phần còn lại.

**Phiếu xuất trả có in được không?**
Có mẫu **In phiếu Trả hàng ( Mẫu 1, Không giá)** / **( Mẫu 2, Có giá)** ([HƯỚNG DẪN IN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-4-huong-dan-in-phieu-xuat-kho/)). ⚠️ Phải **tick chọn dòng** phiếu trước rồi mới chuột phải — chưa tick thì menu không hiện (lỗi phần mềm, xác minh 12/10/2026).

## 11. Công việc tiếp theo

```text
Phiếu xuất kho trả hàng
        ↓
(Tuỳ chọn) In phiếu Trả hàng (KHO-A05.4)
        ↓
(Kế toán) Đối chiếu công nợ NCC / nhận lại tiền
```

**Tiếp theo:** [HƯỚNG DẪN IN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-4-huong-dan-in-phieu-xuat-kho/) – Hướng dẫn in phiếu xuất kho (mẫu Trả hàng).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
- [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/) – Hướng dẫn lập phiếu xuất kho bán hàng
- [HƯỚNG DẪN IN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-4-huong-dan-in-phieu-xuat-kho/) – Hướng dẫn in phiếu xuất kho
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/) – Tổng quan màn hình Phiếu nhập kho
- Sổ tay Mua hàng – [TỔNG QUAN MÀN HÌNH PHIẾU TRẢ HÀNG](/bai-viet/2026-11-07-mh-a04-0-tong-quan-man-hinh-phieu-tra-hang/), [HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/) Phiếu trả hàng
- Sổ tay Kế toán – Công nợ nhà cung cấp ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NHÀ CUNG CẤP](/bai-viet/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/))
