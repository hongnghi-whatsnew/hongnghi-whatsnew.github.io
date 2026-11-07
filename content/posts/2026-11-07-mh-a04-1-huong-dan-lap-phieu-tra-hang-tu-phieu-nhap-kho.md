---
title: "HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO"
date: "2026-11-07"
summary: "Khi hàng đã nhập kho cần trả lại NCC (lỗi, sai quy cách, thừa), bạn lập phiếu trả hàng từ chính phiếu nhập kho của lô hàng đó."
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

Khi hàng đã nhập kho cần trả lại NCC (lỗi, sai quy cách, thừa), bạn lập **phiếu trả hàng** từ chính **phiếu nhập kho** của lô hàng đó. Hệ thống lấy sẵn NCC, kho, hàng hoá, số lượng còn trả được và giá theo phiếu nhập; bạn chỉ sửa số lượng trả.

Sau khi lưu, thủ kho lập **phiếu xuất kho → Xuất trả hàng** từ phiếu trả để giao hàng cho NCC; lúc đó tồn kho và công nợ NCC mới giảm.

Bài này cũng áp dụng khi **Sửa** phiếu (cửa sổ **CẬP NHẬT PHIẾU TRẢ HÀNG**). Trả hàng nhập trước khi dùng ERP xem [HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-mh-a04-2-huong-dan-lap-phieu-tra-hang-dau-ky/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu trả hàng**.
- Lô hàng đã được nhập kho bằng phiếu nhập kho có NCC (ví dụ **Nhập mua hàng** – sổ tay Kho hàng), và chưa trả hết.
- Hàng cần trả **còn tồn được xuất** ở kho xuất.
- Biết mã phiếu nhập kho hoặc ngày nhập của lô hàng.

## 2. Mở chức năng

**Mua hàng → Phiếu trả hàng → Thêm mới → Từ phiếu nhập**

## 3. Nhận biết màn hình

**Cửa sổ chọn phiếu nhập kho:**

![Hình 1: Cửa sổ DANH SÁCH PHIẾU NHẬP KHO](/posts/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/hinh-01-danh-sach-phieu-nhap-kho.png)

- **Ô chọn khoảng ngày**: Ý nghĩa: Lọc theo **Ngày nhập kho**. Mặc định **Hôm nay**
- **Lưới phiếu nhập**: Ý nghĩa: Chỉ hiện phiếu nhập **có NCC** và **chưa trả hết**
- **Cột Trạng thái trả**: Ý nghĩa: **Chưa trả** / **Đang trả**

Các cột: **Ngày nhập kho**, **Mã phiếu**, **Từ phiếu**, **Mã phiếu gốc**, **Người giao**, **Kho nhập**, **Tổng tiền**, **Phương thức VC**, **Số hóa đơn**, **Cty nhận HĐ**, **Trạng thái trả**, **Trạng thái chi**, **Lý do nhập**, **Người tạo**, **Ngày tạo**, **Người sửa**, **Ngày sửa**. Cửa sổ không có nút **Đồng ý**: **nhấp đúp** vào dòng để chọn.

**cửa sổ phiếu trả hàng:**

![Hình 2: cửa sổ THÊM PHIẾU TRẢ HÀNG](/posts/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/hinh-02-form-them-phieu-tra-hang.png)

- **NGÀY TRẢ HÀNG**: Ý nghĩa: Bắt buộc, mặc định hôm nay
- **NHÀ CUNG CẤP, NỢ CŨ**: Ý nghĩa: Lấy theo phiếu nhập, không đổi được; Nợ cũ tự tính
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **ĐỊA CHỈ, ĐIỆN THOẠI**: Ý nghĩa: Lấy theo người giao của phiếu nhập (có thể trống)
- **TỪ PHIẾU**: Ý nghĩa: Mã phiếu nhập kho đã chọn
- **GHI CHÚ**: Ý nghĩa: Lý do trả
- **KHO XUẤT**: Ý nghĩa: Bắt buộc, mặc định = kho nhập của phiếu nhập
- **Bảng chi tiết hàng trả**: Ý nghĩa: Xem bảng cột dưới
- **TỪ PHIẾU NHẬP**: Ý nghĩa: Chọn lại phiếu nhập khác (chỉ khi thêm mới)
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Các cột trong bảng chi tiết:**

- **STT**: Nhập / tự tính: Tự đánh số
- **Hàng hóa**: Nhập / tự tính: Theo phiếu nhập, **khoá**
- **Tên in**: Nhập / tự tính: Thường để trống, không cần nhập
- **Đvt**: Nhập / tự tính: Theo phiếu nhập
- **Khối lượng, Kiện, M³**: Nhập / tự tính: Tự tính theo Số lượng
- **Số lượng**: Nhập / tự tính: **Nhập** – mặc định = số còn trả được
- **SL đã xuất, SL còn lại**: Nhập / tự tính: Khi sửa / xem
- **Đơn giá, Chiết khấu, Thuế VAT**: Nhập / tự tính: Theo phiếu nhập, khoá (chỉ hiện khi có quyền **Xem giá**)
- **Thành tiền**: Nhập / tự tính: Tự tính (chỉ hiện khi có quyền **Xem giá**)
- **Chú thích**: Nhập / tự tính: **Nhập**
- **Thao tác**: Nhập / tự tính: Nút xoá dòng

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Mua hàng
   ↓
Phiếu trả hàng
   ↓
Thêm mới → Từ phiếu nhập
(không có quyền Trả hàng đầu kỳ: bấm Thêm mới là vào thẳng)
```

```text
Phiếu trả hàng → Thêm mới → Từ phiếu nhập
      ↓
DANH SÁCH PHIẾU NHẬP KHO → đổi khoảng ngày → nhấp đúp phiếu nhập
      ↓
cửa sổ điền sẵn: NCC, Từ phiếu, Kho xuất, các dòng còn trả được
      ↓
Sửa Số lượng = số trả · xoá dòng không trả · nhập Ghi chú
      ↓
Lưu lại ── vượt số trả được / thiếu tồn? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → Trạng thái xuất "Chưa xuất"
      ↓
(Kho) Phiếu xuất kho → Xuất trả hàng → giảm tồn, giảm công nợ NCC
```

### Bước 1 – Mở danh sách phiếu nhập kho

Vào **Mua hàng → Phiếu trả hàng**, bấm **Thêm mới**:

- Có quyền **Trả hàng đầu kỳ**: menu thả hiện ra, chọn **Từ phiếu nhập**.
- Không có quyền đó: bấm **Thêm mới** là vào thẳng.

Cửa sổ **DANH SÁCH PHIẾU NHẬP KHO** mở ra (Hình 1).

### Bước 2 – Tìm và chọn phiếu nhập

1. Đổi khoảng ngày  cho chứa **Ngày nhập kho** của lô hàng (mặc định chỉ hôm nay – [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).
2. Tìm theo **Mã phiếu**, **Mã phiếu gốc** hoặc **Số hóa đơn** ở ô **Tìm kiếm…**.
3. **Nhấp đúp** vào dòng phiếu nhập.

cửa sổ **THÊM PHIẾU TRẢ HÀNG** mở ra (Hình 2), đã điền **NHÀ CUNG CẤP**, **TỪ PHIẾU**, **KHO XUẤT** và các dòng hàng **chưa trả hết** của phiếu nhập.

### Bước 3 – Nhập số lượng trả

Mỗi dòng có **Số lượng** mặc định = số đã nhập trừ số đã trả trước đó. Sửa thành số **thực trả**:

- Bấm vào ô **Số lượng**, nhập số trả.
- Dòng không trả: bấm biểu tượng thùng rác ở cột **Thao tác** để xoá dòng.
- Ghi **Chú thích** dòng nếu cần (ví dụ *mặt ván trầy*).

Mẹo: chuột phải vào ô **Số lượng** / **Chú thích** → **Áp dụng cho những dòng dưới**.

![Hình 3: Sửa số lượng trả](/posts/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/hinh-03-sua-so-luong-tra.png)

### Bước 4 – Nhập thông tin chung

- **NGÀY TRẢ HÀNG**: ngày giao trả.
- **GHI CHÚ**: lý do trả (không bắt buộc nhưng nên ghi).
- **KHO XUẤT**: giữ kho nhập; chỉ đổi khi hàng đã chuyển sang kho khác.

### Bước 5 – Lưu lại

Bấm **Lưu lại**.

- Thiếu **NGÀY TRẢ HÀNG** / **KHO XUẤT**: ô viền đỏ, dưới cửa sổ hiện **Chọn ngày trả hàng** / **Vui lòng chọn kho xuất**.
- Số lượng âm: cảnh báo **<số dòng>. Số lượng >= 0**.
- Trả nhiều hơn số còn trả được: **CẢNH BÁO – Lỗi thêm: "<tên hàng>" chỉ có thể trả lại (<số>)**.
- Kho xuất không đủ tồn: **CẢNH BÁO – Lỗi thêm: "<tên kho>", "<tên hàng>" không đủ tồn (<số>).**
- Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại.

### Bước 6 – Kiểm tra và chuyển xuất kho

Phiếu mới hiện trên danh sách với **Từ phiếu** = mã phiếu nhập, **Trạng thái xuất** = **Chưa xuất**. Báo thủ kho lập **phiếu xuất kho → Xuất trả hàng** (sổ tay Kho hàng).

### Sửa phiếu

Bấm **Sửa** → **CẬP NHẬT PHIẾU TRẢ HÀNG**. Sửa được ngày, ghi chú, kho xuất, số lượng, chú thích, xoá dòng. Không đổi được NCC, hàng hoá, phiếu nhập gốc. Chỉ sửa được khi phiếu **Chưa xuất**.

## 6. Giải thích các thông tin trên màn hình

- **Ngày trả hàng**: Ý nghĩa: Ngày trả NCC; Bắt buộc: Có; Lưu ý: Dùng lọc danh sách, sinh mã phiếu
- **Nhà cung cấp**: Ý nghĩa: NCC nhận hàng trả; Bắt buộc: Có; Lưu ý: Lấy theo phiếu nhập, khoá
- **Nợ cũ**: Ý nghĩa: Công nợ phải trả NCC hiện tại; Lưu ý: Chỉ xem
- **Mã phiếu**: Ý nghĩa: Mã phiếu trả (**TH…**); Lưu ý: Tự tạo khi lưu
- **Địa chỉ, Điện thoại**: Ý nghĩa: Của người giao trên phiếu nhập; Lưu ý: Chỉ xem
- **Từ phiếu**: Ý nghĩa: Mã phiếu nhập kho gốc; Lưu ý: Chỉ xem
- **Ghi chú**: Ý nghĩa: Lý do trả; Bắt buộc: Không
- **Kho xuất**: Ý nghĩa: Kho xuất hàng trả; Bắt buộc: Có; Lưu ý: Phải đủ tồn được xuất
- **Hàng hóa, Đvt**: Ý nghĩa: Theo dòng phiếu nhập; Lưu ý: Khoá
- **Số lượng**: Ý nghĩa: Số lượng trả; Bắt buộc: Có; Lưu ý: ≥ 0 và ≤ (đã nhập − đã trả trước)
- **Khối lượng / Kiện / M³**: Ý nghĩa: Số lượng × trọng lượng / ÷ quy đổi kiện / × m³; Lưu ý: Tự tính
- **Đơn giá, Chiết khấu, Thuế VAT**: Ý nghĩa: Theo phiếu nhập; Lưu ý: Cần quyền Xem giá để thấy
- **Thành tiền**: Ý nghĩa: Đơn giá × (1 − CK) × (1 + VAT) × Số lượng; Lưu ý: Hệ thống tính lại khi lưu
- **Chú thích**: Ý nghĩa: Ghi chú dòng; Bắt buộc: Không
- **SL đã xuất**: Ý nghĩa: Đã xuất kho trả; Lưu ý: Khi sửa / xem
- **SL còn lại**: Ý nghĩa: Số lượng − SL đã xuất; Lưu ý: Khi sửa / xem

## 7. Kiểm tra sau khi thực hiện

- Phiếu trả được lưu với mã **TH…**, **Trạng thái xuất** = **Chưa xuất**.
- Phiếu nhập kho gốc được cập nhật **Trạng thái trả**: **Đang trả** (trả một phần) / **Đã trả** (trả hết – phiếu nhập không còn hiện khi chọn lần sau).
- Tồn kho và công nợ NCC **chưa** thay đổi.
- Phiếu trả hiện trong danh sách chọn của **Phiếu xuất kho → Xuất trả hàng**.

## 8. Những điều cần lưu ý

⚠️ **Phiếu trả hàng không trừ tồn kho và không giảm công nợ.** Phải có phiếu xuất kho trả hàng.

⚠️ Hệ thống kiểm tra **tồn được xuất** của kho xuất lúc lưu. Hàng đã giữ cho đơn khách / bán chưa xuất / gia công / chuyển kho không được tính vào tồn trả.

⚠️ Mỗi phiếu trả chỉ lấy từ **một** phiếu nhập kho. Trả hàng của nhiều phiếu nhập thì lập nhiều phiếu trả.

⚠️ Phiếu trả đã xuất kho (một phần hoặc hết) **không sửa / xoá được**.

⚠️ Giá trên phiếu trả lấy theo phiếu nhập và **không sửa được**. Cần trả theo giá khác thì trao đổi với kế toán.

Kiểm tra cùng ĐVT giữa biên bản, phiếu nhập và lượng trả. Nếu có hệ số quy đổi khác 1, hoặc số trả được/tồn hiển thị không khớp, dừng đối chiếu với thủ kho trước lưu. Khi đổi kho, xác nhận hàng thực sự đã có tại kho đó bằng chứng từ chuyển kho; không chỉ đổi kho để vượt cảnh báo thiếu tồn.

### "CẢNH BÁO – Lỗi thêm: "<tên hàng>" chỉ có thể trả lại (<số>)" 

Nguyên nhân: số lượng trả lớn hơn số đã nhập trừ số đã trả ở các phiếu trả trước.
Cách xử lý: giảm **Số lượng** về tối đa bằng số trong câu báo.

### "CẢNH BÁO – Lỗi thêm: "<tên kho>", "<tên hàng>" không đủ tồn (<số>)." 

Nguyên nhân: kho xuất không còn đủ tồn được xuất (đã bán, đã giữ cho đơn khác, hoặc đã chuyển kho).
Cách xử lý: kiểm tra tồn kho, chọn đúng **KHO XUẤT** đang chứa hàng, hoặc giảm số lượng.

### Không thấy phiếu nhập trong DANH SÁCH PHIẾU NHẬP KHO 

Kiểm tra: khoảng ngày (mặc định chỉ hôm nay); phiếu nhập đã **Đã trả** hết; phiếu nhập không có NCC (ví dụ nhập khách trả hàng); chi nhánh đang làm việc.
Cách xử lý: mở rộng khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)) hoặc kiểm tra phiếu nhập ở sổ tay Kho hàng.

### Dưới cửa sổ báo "Vui lòng chọn kho xuất" / "Chọn ngày trả hàng" 

Nguyên nhân: thiếu trường bắt buộc.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "CẢNH BÁO – Lỗi sửa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: phiếu trả đã được xuất kho.
Cách xử lý: xem [TỔNG QUAN MÀN HÌNH PHIẾU TRẢ HÀNG](/bai-viet/2026-11-07-mh-a04-0-tong-quan-man-hinh-phieu-tra-hang/), phần “Vướng mắc thường gặp”.

## 10. Câu hỏi thường gặp

**Trả một phần lô hàng được không?**
Được. Sửa **Số lượng** bằng số trả, xoá các dòng không trả. Lần sau phiếu nhập vẫn hiện để trả tiếp phần còn lại.

**Vì sao không thấy đơn giá trên phiếu trả?**
Tài khoản chưa có quyền **Xem giá**. Giá vẫn được lưu theo phiếu nhập.

**Muốn đổi sang phiếu nhập khác khi đang lập?**
Bấm **TỪ PHIẾU NHẬP** ở góc dưới cửa sổ và chọn lại. Dữ liệu nguồn được nạp lại. Đối chiếu toàn bộ bảng và các ô vừa sửa trước lưu; không mặc định phần thay đổi còn trong lưới đã được xóa sạch. Nếu còn dòng cũ hoặc không xác định được nguồn, đóng cửa sổ chưa lưu rồi lập lại từ đúng phiếu nhập.

**Khi nào công nợ NCC giảm?**
Khi thủ kho lập phiếu xuất kho trả hàng từ phiếu trả này.

## 11. Công việc tiếp theo

```text
Phiếu trả hàng
        ↓
(Kho) Phiếu xuất kho → Xuất trả hàng → giảm tồn kho, giảm công nợ NCC
        ↓
Trạng thái xuất của phiếu trả: Đã xuất
        ↓
(Kế toán) Đối chiếu công nợ NCC
```

**Tiếp theo:** sổ tay Kho hàng – Phiếu xuất kho (Xuất trả hàng).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU TRẢ HÀNG](/bai-viet/2026-11-07-mh-a04-0-tong-quan-man-hinh-phieu-tra-hang/) – Tổng quan màn hình Phiếu trả hàng
- [HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG ĐẦU KỲ](/bai-viet/2026-11-07-mh-a04-2-huong-dan-lap-phieu-tra-hang-dau-ky/) – Hướng dẫn lập phiếu trả hàng đầu kỳ
- [HƯỚNG DẪN TẤT TOÁN PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-3-huong-dan-tat-toan-phieu-mua-hang/) – Hướng dẫn tất toán phiếu mua hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ NHẬP MUA CHI TIẾT](/bai-viet/2026-11-07-mh-b04-0-tong-quan-man-hinh-thong-ke-nhap-mua-chi-tiet/) – Tổng quan màn hình Nhập mua chi tiết
- Sổ tay Kho hàng – Phiếu nhập kho, Phiếu xuất kho (Xuất trả hàng)
- Sổ tay Kế toán – Thống kê công nợ nhà cung cấp
