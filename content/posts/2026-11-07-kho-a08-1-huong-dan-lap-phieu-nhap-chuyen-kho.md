---
title: "HƯỚNG DẪN LẬP PHIẾU NHẬP CHUYỂN KHO"
date: "2026-11-07"
summary: "Khi hàng chuyển kho đến nơi, thủ kho kho nhận lập phiếu nhập chuyển kho từ phiếu xuất chuyển kho tương ứng."
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

Khi hàng chuyển kho đến nơi, thủ kho kho nhận lập **phiếu nhập chuyển kho** từ **phiếu xuất chuyển kho** tương ứng. Hệ thống chép sẵn kho xuất chuyển, kho nhập, tài xế, số xe, mã phiếu gốc, các dòng hàng và **số lượng còn chưa nhập**; thủ kho chỉ kiểm tra, nhập ngày nhập và ghi chú rồi lưu.

Sau khi lưu: **tồn kho nhận tăng**, phiếu xuất chuyển kho chuyển **Trạng thái nhập** sang **Đã nhập**.

Bài này cũng áp dụng khi **Sửa** phiếu (cửa sổ **CẬP NHẬT - PHIẾU NHẬP CHUYỂN KHO**).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu nhập chuyển kho**.
- Đã có **phiếu xuất chuyển kho** chưa nhập hết ([HƯỚNG DẪN LẬP PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-1-huong-dan-lap-phieu-xuat-chuyen-kho/)).
- Đã kiểm đếm hàng thực nhận khớp phiếu xuất (cửa sổ không cho sửa số lượng).

## 2. Mở chức năng

**Kho hàng → Phiếu nhập chuyển kho → Thêm mới**

## 3. Nhận biết màn hình

**Cửa sổ chọn phiếu xuất chuyển kho:**

![Hình 1: Cửa sổ DANH SÁCH PHIẾU XUẤT CHUYỂN KHO](/posts/2026-11-07-kho-a08-1-huong-dan-lap-phieu-nhap-chuyen-kho/hinh-01-danh-sach-phieu-xuat-chuyen-kho.png)

- **Ô chọn khoảng ngày**: Ý nghĩa: Lọc theo **Ngày xuất chuyển kho**. Mặc định **Hôm nay**
- **Tải lại**: Ý nghĩa: Tải lại danh sách
- **Lưới phiếu xuất chuyển kho**: Ý nghĩa: Chỉ hiện phiếu **chưa nhập hết**
- **Cột Trạng thái nhập**: Ý nghĩa: **Chưa nhập** / **Đang nhập**

Các cột: **Ngày xuất chuyển kho**, **Mã phiếu**, **Kho xuất chuyển**, **Kho nhập**, **Mã phiếu gốc**, **Trạng thái nhập**, **Ghi chú**, **Người tạo**, **Ngày tạo**, **Người sửa**, **Ngày sửa**. Cửa sổ không có nút **Đồng ý**: **nhấp đúp** vào dòng để chọn.

**cửa sổ phiếu nhập chuyển kho:**

![Hình 2: cửa sổ THÊM - PHIẾU NHẬP CHUYỂN KHO](/posts/2026-11-07-kho-a08-1-huong-dan-lap-phieu-nhap-chuyen-kho/hinh-02-form-them-phieu-nhap-chuyen-kho.png)

- **NGÀY NHẬP KHO**: Ý nghĩa: Bắt buộc, mặc định hôm nay
- **KHO XUẤT CHUYỂN, KHO NHẬP**: Ý nghĩa: Chép từ phiếu xuất, **khoá**
- **MÃ PHIẾU GỐC**: Ý nghĩa: Chép từ phiếu xuất, sửa được
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **TÀI XẾ, SỐ XE**: Ý nghĩa: Chép từ phiếu xuất, **khoá**
- **GHI CHÚ**: Ý nghĩa: Không bắt buộc
- **TỪ PHIẾU**: Ý nghĩa: Mã phiếu xuất chuyển kho (**XC…**), chỉ xem
- **Bảng chi tiết hàng hoá**: Ý nghĩa: Xem bảng cột dưới
- **TỪ PHIẾU XUẤT**: Ý nghĩa: Chọn lại phiếu xuất khác (chỉ khi thêm mới)
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Các cột trong bảng chi tiết:**

- **STT**: Nhập / tự tính: Tự đánh số
- **Hàng hóa**: Nhập / tự tính: Theo phiếu xuất, **khoá**
- **Tên in**: Nhập / tự tính: Sửa được
- **Đvt**: Nhập / tự tính: Theo phiếu xuất
- **Khối lượng, Kiện, M³**: Nhập / tự tính: Tự tính
- **Số lượng**: Nhập / tự tính: = số còn chưa nhập của phiếu xuất, **khoá**
- **Chú thích**: Nhập / tự tính: **Nhập**

Bảng không có nút xoá dòng: phiếu nhập nhận **toàn bộ** số còn lại của phiếu xuất.

⚠️ Bảng chi tiết **lưu bố cục cột theo từng người dùng** (dùng chung cho thêm, sửa, xem). Ảnh thử 09/10/2026 chỉ thấy tới cột **M³**; nếu không thấy **Số lượng**, **chuột phải vào tiêu đề cột → Khôi phục bố cục** hoặc kéo thanh cuộn ngang.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kho hàng
   ↓
Phiếu nhập chuyển kho
   ↓
Thêm mới → nhấp đúp phiếu xuất chuyển kho
```

```text
Phiếu nhập chuyển kho → Thêm mới
      ↓
DANH SÁCH PHIẾU XUẤT CHUYỂN KHO → đổi khoảng ngày → nhấp đúp XC…
      ↓
cửa sổ điền sẵn: kho, tài xế, số xe, mã phiếu gốc, hàng, số lượng
      ↓
Kiểm đếm hàng thực nhận ── khớp? ── không ──► dừng, lập biên bản, chốt phương án với kho đi/kế toán
      ↓ có
Nhập Ngày nhập kho, Ghi chú → Lưu lại
      ↓
"Lưu thành công" → tồn kho nhận tăng, phiếu xuất "Đã nhập"
```

### Bước 1 – Mở danh sách phiếu xuất chuyển kho

Vào **Kho hàng → Phiếu nhập chuyển kho**, bấm **Thêm mới**. Cửa sổ **DANH SÁCH PHIẾU XUẤT CHUYỂN KHO** mở ra ngay (Hình 1).

### Bước 2 – Chọn phiếu xuất

1. Đổi khoảng ngày  cho chứa **Ngày xuất chuyển kho** (mặc định hôm nay – [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).
2. Tìm theo **Mã phiếu** (XC…), **Kho nhập** hoặc **Mã phiếu gốc**.
3. **Nhấp đúp** vào dòng.

cửa sổ **THÊM - PHIẾU NHẬP CHUYỂN KHO** mở ra (Hình 2) với **TỪ PHIẾU** = mã phiếu xuất và các dòng hàng chưa nhập.

### Bước 3 – Kiểm đếm và đối chiếu

So hàng thực nhận với cột **Hàng hóa**, **Số lượng** (Hình 3; cột **Số lượng** ở bên phải cột **M³**, kéo thanh cuộn ngang để thấy). Nếu **thiếu / thừa / sai hàng**: **không lưu**, bấm **Đóng**, lập biên bản và báo kho đi/kế toán. Chỉ sửa phiếu xuất nếu số đã khai khác số thực rời kho; thiếu hụt trên đường cần phương án được duyệt.

![Hình 3: Bảng chi tiết hàng nhận](/posts/2026-11-07-kho-a08-1-huong-dan-lap-phieu-nhap-chuyen-kho/hinh-03-bang-chi-tiet-hang-nhan.png)

### Bước 4 – Nhập thông tin nhận hàng

- **NGÀY NHẬP KHO**: ngày hàng về kho nhận.
- **MÃ PHIẾU GỐC**: giữ hoặc sửa theo chứng từ tay.
- **GHI CHÚ**: ví dụ *Đã nhận đủ, xe về 15h*.
- **Chú thích** từng dòng nếu cần (chuột phải ô **Chú thích** → **Áp dụng cho những dòng dưới**).

### Bước 5 – Lưu lại

Bấm **Lưu lại**.

- Thiếu **NGÀY NHẬP KHO**: câu báo đỏ dưới bảng **Chọn ngày nhập chuyển kho**.
- Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại với **Từ phiếu** = mã phiếu xuất.

### Bước 6 – Kiểm tra kết quả

Mở **Phiếu xuất chuyển kho** ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-0-tong-quan-man-hinh-phieu-xuat-chuyen-kho/)): cột **Trạng thái nhập** của phiếu đã chọn là **Đã nhập**.

### Sửa phiếu

Bấm **Sửa** → **CẬP NHẬT - PHIẾU NHẬP CHUYỂN KHO**. Sửa được **NGÀY NHẬP KHO**, **MÃ PHIẾU GỐC**, **GHI CHÚ**, **Tên in**, **Chú thích**. Không đổi được kho, tài xế, số xe, hàng, số lượng.

## 6. Giải thích các thông tin trên màn hình

- **Ngày nhập kho**: Ý nghĩa: Ngày hàng về kho nhận; Bắt buộc: Có; Lưu ý: Dùng lọc danh sách (cột **Ngày nhập**), sinh mã phiếu
- **Kho xuất chuyển**: Ý nghĩa: Kho đi; Bắt buộc: Có; Lưu ý: Từ phiếu xuất, khoá
- **Kho nhập**: Ý nghĩa: Kho nhận; Bắt buộc: Có; Lưu ý: Từ phiếu xuất, khoá; tồn kho này tăng
- **Mã phiếu gốc**: Ý nghĩa: Chứng từ tay; Bắt buộc: Không; Lưu ý: Mặc định theo phiếu xuất
- **Mã phiếu**: Ý nghĩa: Mã phiếu (**NC…**); Lưu ý: Tự tạo
- **Tài xế, Số xe**: Ý nghĩa: Phương tiện chở; Bắt buộc: Có; Lưu ý: Từ phiếu xuất, khoá
- **Ghi chú**: Ý nghĩa: Ghi chú nhận hàng; Bắt buộc: Không
- **Từ phiếu**: Ý nghĩa: Mã phiếu xuất chuyển kho; Lưu ý: Chỉ xem
- **Hàng hóa, Đvt**: Ý nghĩa: Theo phiếu xuất; Lưu ý: Khoá
- **Tên in**: Ý nghĩa: Tên in phiếu; Bắt buộc: Không
- **Số lượng**: Ý nghĩa: Số còn chưa nhập của phiếu xuất; Lưu ý: Khoá
- **Khối lượng / Kiện / M³**: Ý nghĩa: Tự tính
- **Chú thích**: Ý nghĩa: Ghi chú dòng; Bắt buộc: Không

## 7. Kiểm tra sau khi thực hiện

- Phiếu được lưu với mã **NC…**, **Từ phiếu** = mã phiếu xuất.
- **Tồn kho nhận** tăng (cả tồn lô nếu dòng có lô); sổ cái kho có dòng **NHAP_KHO**, nguồn **CHUYEN_KHO**, theo giá vốn bình quân hiện hành – giá vốn không đổi ([TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/)).
- Phiếu xuất chuyển kho: **Trạng thái nhập** = **Đã nhập**; không còn hiện trong cửa sổ chọn lần sau, và không sửa / xoá được nữa.

## 8. Những điều cần lưu ý

⚠️ **Số lượng không sửa được** – nhập đúng số còn lại của phiếu xuất. Hàng thực nhận lệch phải dừng, đối chiếu và chốt phương án xử lý trước lập phiếu nhập.

⚠️ **Ngày nhập kho** nên ≥ ngày xuất chuyển kho; hệ thống không chặn ngày nhập trước ngày xuất, nhập sai ngày làm báo cáo tồn theo ngày bị lệch.

⚠️ Sau khi lập phiếu nhập, phiếu xuất chuyển kho bị khoá sửa / xoá. Đối chiếu với kho nhận/kế toán để chốt trình tự điều chỉnh; không xóa phiếu nhập đúng chỉ để mở khóa phiếu xuất.

⚠️ Xóa phiếu nhập làm **tồn kho nhận giảm lại**. Nguồn hiện tại kiểm tra tồn được xuất (riêng hàng/lô) trước trừ lại; hàng đã được xuất/giữ có thể làm thao tác bị chặn. Đối chiếu phát sinh sau và phương án kế toán trước xác nhận.

### "CẢNH BÁO – Lỗi thêm: <tên hàng> chỉ còn lại (<số>) trong đơn xuất" 

Nguyên nhân: phiếu xuất đã được nhập (một phần) bởi phiếu khác trong lúc bạn đang lập.
Cách xử lý: **Đóng**, mở lại **Thêm mới** và chọn lại phiếu xuất.

### Dưới bảng báo "Chọn ngày nhập chuyển kho" 

Nguyên nhân: để trống **NGÀY NHẬP KHO**.
Cách xử lý: chọn ngày rồi **Lưu lại**.

### "CẢNH BÁO – Lỗi thêm: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: ngày nhập thuộc kỳ kế toán đã khoá.
Cách xử lý: liên hệ kế toán.

### Không thấy phiếu xuất trong DANH SÁCH PHIẾU XUẤT CHUYỂN KHO 

Kiểm tra: khoảng ngày (mặc định hôm nay, lọc theo **ngày xuất**, không phải ngày nhận); phiếu đã **Đã nhập**; chi nhánh.
Cách xử lý: mở rộng khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)); kiểm tra phiếu ở màn Phiếu xuất chuyển kho.

## 10. Câu hỏi thường gặp

**Hàng xuất hôm trước, hôm nay mới về – chọn ngày nào?**
Trong cửa sổ chọn, khoảng ngày lọc theo **ngày xuất** (hôm trước). Trong cửa sổ, **NGÀY NHẬP KHO** ghi ngày hàng về (hôm nay).

**Vì sao không sửa được số lượng nhập?**
Phiếu nhập nhận đúng số kho đi đã xuất. Chênh lệch phải xử lý ở phiếu xuất hoặc bằng phiếu điều chỉnh kho.

**Muốn đổi sang phiếu xuất khác khi đang lập?**
Bấm **TỪ PHIẾU XUẤT** ở góc dưới cửa sổ và chọn lại.

## 11. Công việc tiếp theo

**Tiếp theo:** in phiếu nhập (chuột phải → **In Phiếu**, [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-0-tong-quan-man-hinh-phieu-nhap-chuyen-kho/)) để ký nhận; kiểm tra tồn ở thống kê **Xuất nhập tồn** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/)).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-0-tong-quan-man-hinh-phieu-nhap-chuyen-kho/) – Tổng quan màn hình Phiếu nhập chuyển kho
- [HƯỚNG DẪN LẬP PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-1-huong-dan-lap-phieu-xuat-chuyen-kho/) – Hướng dẫn lập phiếu xuất chuyển kho
- [TỔNG QUAN MÀN HÌNH PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-0-tong-quan-man-hinh-phieu-dieu-chinh-kho/) – Tổng quan màn hình Phiếu điều chỉnh kho
- [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/) – Tổng quan màn hình Sổ cái kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/) – Thống kê xuất nhập tồn
