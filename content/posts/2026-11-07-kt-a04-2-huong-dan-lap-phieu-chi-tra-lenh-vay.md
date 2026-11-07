---
title: "HƯỚNG DẪN LẬP PHIẾU CHI TRẢ LỆNH VAY"
date: "2026-11-07"
summary: "Khi đến hạn trả khoản vay đã ghi bằng Lệnh vay (TỔNG QUAN MÀN HÌNH LỆNH VAY), kế toán lập phiếu chi loại Lệnh vay từ lệnh vay đó."
module: "Kế toán"
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

Khi đến hạn trả khoản vay đã ghi bằng **Lệnh vay** ([TỔNG QUAN MÀN HÌNH LỆNH VAY](/bai-viet/2026-11-07-kt-a02-0-tong-quan-man-hinh-lenh-vay/)), kế toán lập **phiếu chi loại Lệnh vay** từ lệnh vay đó. Một phiếu ghi được cả **tiền gốc** và **tiền lãi**.

Hệ thống tự điền số gốc còn phải trả và cập nhật **Số tiền đã chi**, **Số tiền đã chi (lãi)**, **Trạng thái chi** của lệnh vay. Phiếu chi lệnh vay **không** làm thay đổi công nợ khách hàng / NCC.

Khác với phiếu chi thường ([HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/)): ô tiền tách thành **TIỀN CHI** (gốc) và **TIỀN CHI LÃI**, không có **TIỀN GIẢM**; phải chọn lệnh vay nguồn.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** màn hình **Phiếu chi**.
- Đã có **lệnh vay** chưa trả hết gốc ([HƯỚNG DẪN LẬP LỆNH VAY](/bai-viet/2026-11-07-kt-a02-1-huong-dan-lap-lenh-vay/)).
- Quỹ chi được phân cho bạn và đủ tồn cho cả gốc + lãi.
- **Ngày chi** thuộc kỳ kế toán chưa khóa.

## 2. Mở chức năng

**Kế toán → Phiếu chi → Thêm mới → Lệnh vay**

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ DANH SÁCH - LỆNH VAY](/posts/2026-11-07-kt-a04-2-huong-dan-lap-phieu-chi-tra-lenh-vay/hinh-01-danh-sach-lenh-vay.png)

- **Ô chọn khoảng ngày**: Ý nghĩa: Lọc theo **Ngày vay**, mặc định hôm nay (nhãn *today*). Đổi ngày xong bấm **Tải lại** bên cạnh
- **Bảng lệnh vay**: Ý nghĩa: Cột **STT**, **Ngày vay**, **Mã lệnh vay**, **Số tiền vay**, **Trạng thái chi**, **Số tiền đã chi**, **Số tiền đã chi (lãi)**, **Còn lại**, **Ghi chú**. Chỉ hiện lệnh vay **Chưa chi** / **Đang chi**
- **Dòng lệnh vay cần trả**: Ý nghĩa: Nhấp đúp để chọn và mở cửa sổ phiếu chi (Hình 1: LV00113315, còn lại 500.000)

Cửa sổ có thêm **Trình chọn cột**, ô **Tìm kiếm…**, liên kết **Tạo Bộ lọc** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)); nút phóng to và nút đóng **×** ở góc phải trên.

![Hình 2: cửa sổ THÊM MỚI - PHIẾU CHI loại Lệnh vay](/posts/2026-11-07-kt-a04-2-huong-dan-lap-phieu-chi-tra-lenh-vay/hinh-02-form-phieu-chi-lenh-vay.png)

- **TIỀN CHI**: Ý nghĩa: Tiền **gốc** trả lần này. Tự điền = **Còn lại** của lệnh vay, sửa được. Hình 2: sửa 500.000 thành 200.000
- **TIỀN CHI LÃI**: Ý nghĩa: Tiền **lãi** trả lần này. Mặc định 0. Hình 2: 2.500
- **TỔNG CHI**: Ý nghĩa: Tự tính = Tiền chi + Tiền chi lãi (Hình 2: 202.500). Là số trừ khỏi quỹ
- **QUỸ CHI, NỘI DUNG (hàng 3)**: **GHI CHÚ**, **NGÀY HẠCH TOÁN** (hàng 4); Ý nghĩa: Bắt buộc, như [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/)
- **NGƯỜI NHẬN**: Ý nghĩa: Bắt buộc, tự gõ (không tự điền) – ví dụ tên bên cho vay
- **TỪ LỆNH VAY**: Ý nghĩa: Chọn lại lệnh vay khác
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

Ô **TIỀN CHI LÃI** nằm ở chỗ **TIỀN GIẢM** của phiếu thường. Ô **KHÁCH HÀNG** (chữ mờ *Lựa chọn...*) hiện nhưng không dùng, để trống; **ĐIỆN THOẠI**, **ĐỊA CHỈ**, **NỢ CŨ**, **CÒN NỢ** để trống. Các ô khác như [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/).

cửa sổ **không hiện mã lệnh vay** đang chọn. Nên ghi mã lệnh vay vào **GHI CHÚ** để sau này đối chiếu.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kế toán
   ↓
Phiếu chi
   ↓
Thêm mới → Lệnh vay
   ↓
DANH SÁCH - LỆNH VAY → nhấp đúp lệnh vay
```

```text
(Kế toán) Lệnh vay – tiền vay vào quỹ nhận (KT-A02.1)
      ↓
Đến hạn trả
      ↓
Phiếu chi → Thêm mới → Lệnh vay
      ↓
Nhấp đúp lệnh vay → cửa sổ điền Tiền chi (gốc còn lại)
      ↓
Sửa Tiền chi (gốc trả kỳ này), nhập Tiền chi lãi
Chọn Quỹ chi, Nội dung · Người nhận · Ghi chú → Lưu lại
      ↓
Quỹ chi giảm (gốc + lãi)
Lệnh vay: Số tiền đã chi += gốc · Số tiền đã chi (lãi) += lãi
Trạng thái chi: Đang chi (còn gốc) / Đã chi (đủ gốc)
```

### Bước 1 – Chọn lệnh vay

Vào **Kế toán → Phiếu chi**, bấm **Thêm mới** → **Lệnh vay**. Cửa sổ **DANH SÁCH - LỆNH VAY** mở ra (Hình 1). Chọn khoảng ngày chứa **ngày vay** của lệnh vay (mặc định chỉ hôm nay), bấm **Tải lại**, xem cột **Còn lại**, rồi **nhấp đúp** vào dòng.

### Bước 2 – Kiểm tra số tự điền

cửa sổ **THÊM MỚI - PHIẾU CHI** mở ra (Hình 2), **TIỀN CHI**  = số gốc còn lại (ví dụ LV00113315: 500.000), **TIỀN CHI LÃI**  = 0.

Chọn nhầm lệnh vay: bấm **TỪ LỆNH VAY**  ở chân cửa sổ để chọn lại.

### Bước 3 – Nhập số tiền gốc và lãi

- **TIỀN CHI**: sửa thành số gốc trả kỳ này (nếu trả dần).
- **TIỀN CHI LÃI**: nhập tiền lãi.
- Kiểm tra **TỔNG CHI**. Ví dụ PC00113320: gốc 200.000 + lãi 2.500 = 202.500.

### Bước 4: Nhập phần còn lại

Nhập **NGÀY CHI**, **NGƯỜI NHẬN**, **QUỸ CHI**, **NỘI DUNG**, **GHI CHÚ** và **NGÀY HẠCH TOÁN** theo giao dịch thực tế. Kiểm tra đúng người nhận và quỹ dùng trả khoản vay; ghi mã lệnh vay trong ghi chú để thuận tiện đối chiếu.

### Bước 5 – Bấm Lưu lại

Bấm **Lưu lại**. Thành công: **Lưu thành công**. Chưa chọn lệnh vay: cảnh báo **Vui lòng chọn phiếu để chi**.

### Bước 6 – Kiểm tra

Mở **Lệnh vay** ([TỔNG QUAN MÀN HÌNH LỆNH VAY](/bai-viet/2026-11-07-kt-a02-0-tong-quan-man-hinh-lenh-vay/)): cột **Số tiền đã chi**, **Số tiền đã chi (lãi)**, **Trạng thái chi** đã cập nhật. Ví dụ sau PC00113320, LV00113315 chuyển **Đang chi**: đã chi 200.000, đã chi (lãi) 2.500, còn lại 300.000.

### Sửa phiếu

Bấm **Sửa** → cửa sổ **CẬP NHẬT - PHIẾU CHI** hiện lại **TIỀN CHI** (gốc) và **TIỀN CHI LÃI** đã lưu. Khi lưu, hệ thống tính lại số đã chi và trạng thái của lệnh vay.

## 6. Giải thích các thông tin trên màn hình

- **Lệnh vay**: Ý nghĩa: Lệnh vay nguồn; Bắt buộc: Có; Lưu ý: Chọn qua cửa sổ danh sách / **TỪ LỆNH VAY**
- **Tiền chi**: Ý nghĩa: Tiền gốc trả lần này; Bắt buộc: Nên nhập; Lưu ý: Cộng vào **Số tiền đã chi** của lệnh vay
- **Tiền chi lãi**: Ý nghĩa: Tiền lãi trả lần này; Bắt buộc: Không; Lưu ý: Cộng vào **Số tiền đã chi (lãi)**
- **Tổng chi**: Ý nghĩa: Gốc + lãi; Lưu ý: Số trừ khỏi quỹ, hiện ở cột **Số tiền chi** của danh sách
- **Người nhận**: Ý nghĩa: Bên nhận tiền; Bắt buộc: Có; Lưu ý: Tự gõ
- **Quỹ chi, Nội dung, Ghi chú, Ngày chi, Ngày hạch toán**: Ý nghĩa: Như phiếu chi thường; Bắt buộc: Có; Lưu ý: Xem [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/)

## 7. Kiểm tra sau khi thực hiện

- Phiếu chi loại **Lệnh vay** được lưu; cột **Số tiền chi** trên danh sách = gốc + lãi.
- Tồn quỹ chi giảm gốc + lãi. Công nợ không đổi.
- Lệnh vay cập nhật **Số tiền đã chi**, **Số tiền đã chi (lãi)**; **Trạng thái chi** chuyển **Đang chi** hoặc **Đã chi** khi tổng gốc đã chi ≥ số tiền vay.
- Khi chạy hạch toán tự động: Nợ TK chi phí theo **Nội dung** (không có thì 811) / Có TK tiền của quỹ chi, ghi cả gốc + lãi một dòng.

## 8. Những điều cần lưu ý

⚠️ **Tiền lãi không làm giảm gốc.** Nhập đúng ô: gốc vào **TIỀN CHI**, lãi vào **TIỀN CHI LÃI**. Nhập lãi vào ô gốc sẽ làm lệnh vay báo **Đã chi** sớm.

⚠️ Hệ thống **không chặn** trả gốc vượt số tiền vay. Kiểm tra cột **Còn lại** trước khi lưu.

⚠️ Chọn **NỘI DUNG** đúng khoản trả nợ vay / lãi vay vì nội dung quyết định tài khoản khi lên sổ cái.

### "Vui lòng chọn phiếu để chi" 

Nguyên nhân: chưa chọn lệnh vay.
Cách xử lý: bấm **TỪ LỆNH VAY**, nhấp đúp lệnh vay cần trả.

### Không thấy lệnh vay cần trả 

Kiểm tra: khoảng ngày trong cửa sổ chọn (lọc theo **ngày vay**, mặc định hôm nay – nhãn *today*); lệnh vay đã **Đã chi**; chi nhánh.
Cách xử lý: chọn khoảng ngày chứa ngày vay.

### "CẢNH BÁO – Lỗi thêm: "<tên quỹ>" không đủ tồn (<số tồn>)." 

Nguyên nhân: gốc + lãi lớn hơn tồn hiện tại của quỹ chi.
Cách xử lý: xem [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/) phần “Vướng mắc thường gặp”.

Các lỗi khác (khóa sổ, thiếu quỹ / nội dung / ghi chú): xem phần “Vướng mắc thường gặp” của [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/). Lỗi hệ thống: [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Trả lãi hằng tháng, gốc trả cuối kỳ thì lập thế nào?**
Mỗi tháng lập phiếu chi Lệnh vay với **TIỀN CHI** = 0, **TIỀN CHI LÃI** = tiền lãi. Cuối kỳ lập phiếu với **TIỀN CHI** = gốc.

**Một phiếu chi trả được nhiều lệnh vay không?**
Không. Mỗi phiếu gắn một lệnh vay.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN IN PHIẾU CHI C31 VÀ ỦY NHIỆM CHI](/bai-viet/2026-11-07-kt-a04-4-huong-dan-in-phieu-chi-c31-va-uy-nhiem-chi/) – in **UNC VAY** hoặc phiếu chi **MẪU C31** cho phiếu vừa lập.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH LỆNH VAY](/bai-viet/2026-11-07-kt-a02-0-tong-quan-man-hinh-lenh-vay/) – Tổng quan màn hình Lệnh vay
- [HƯỚNG DẪN LẬP LỆNH VAY](/bai-viet/2026-11-07-kt-a02-1-huong-dan-lap-lenh-vay/) – Hướng dẫn lập lệnh vay
- [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/) – Tổng quan màn hình Phiếu chi
- [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/) – Hướng dẫn lập phiếu chi
- [HƯỚNG DẪN IN PHIẾU CHI C31 VÀ ỦY NHIỆM CHI](/bai-viet/2026-11-07-kt-a04-4-huong-dan-in-phieu-chi-c31-va-uy-nhiem-chi/) – Hướng dẫn in phiếu chi C31 và ủy nhiệm chi
