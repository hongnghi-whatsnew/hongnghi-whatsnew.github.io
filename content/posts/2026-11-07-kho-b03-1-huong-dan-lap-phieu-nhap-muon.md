---
title: "HƯỚNG DẪN LẬP PHIẾU NHẬP MƯỢN"
date: "2026-11-07"
summary: "Khi công ty mượn hàng của đối tác và nhận hàng về kho, thủ kho lập phiếu nhập mượn: chọn kho đại diện cho đối tác (MƯỢN TỪ KHO), kho nhận hàng (KHO NHẬP) và danh sách hàng mượn."
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

Khi công ty **mượn hàng của đối tác** và nhận hàng về kho, thủ kho lập **phiếu nhập mượn**: chọn kho đại diện cho đối tác (**MƯỢN TỪ KHO**), kho nhận hàng (**KHO NHẬP**) và danh sách hàng mượn.

Khi lưu, **tồn KHO NHẬP tăng ngay**. Phiếu không ghi công nợ. Khi trả lại (bằng hàng hoặc bằng tiền) thì lập **Phiếu xuất trả** từ phiếu này ([HƯỚNG DẪN LẬP PHIẾU XUẤT TRẢ HÀNG MƯỢN](/bai-viet/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/)).

Bài này cũng áp dụng khi **Sửa** phiếu (cửa sổ **CẬP NHẬT - PHIẾU NHẬP MƯỢN**).

Thao tác dùng chung liên quan: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu nhập mượn**.
- Danh mục kho có **kho đại diện cho đối tác** (ví dụ *KHO MƯỢN SONG HUỲNH*).
- Hàng mượn đã có trong danh mục **hàng hoá**.
- Kỳ kế toán chứa **Ngày nhập** chưa khoá sổ.

## 2. Mở chức năng

**Mượn hàng → Phiếu nhập mượn → Thêm mới**

## 3. Nhận biết màn hình

![Hình 1: cửa sổ THÊM MỚI - PHIẾU NHẬP MƯỢN](/posts/2026-11-07-kho-b03-1-huong-dan-lap-phieu-nhap-muon/hinh-01-form-them-phieu-nhap-muon.png)

- **NGÀY NHẬP**: Ý nghĩa: Bắt buộc, mặc định hôm nay
- **MƯỢN TỪ KHO**: Ý nghĩa: Bắt buộc. Kho đại diện cho đối tác cho mượn
- **KHO NHẬP**: Ý nghĩa: Bắt buộc. Kho công ty nhận hàng
- **MÃ PHIẾU GỐC**: Ý nghĩa: Bắt buộc. Số phiếu giao hàng của đối tác; không có thì ghi "không có"
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **GHI CHÚ**: Ý nghĩa: Lý do mượn, hạn trả
- **Bảng chi tiết hàng mượn**: Ý nghĩa: cửa sổ mới mở bảng trống (*Không có dữ liệu*); xem bảng cột dưới
- **Thêm một hàng**: Ý nghĩa: Thêm dòng trống cuối bảng – bấm để có dòng đầu tiên
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Các cột trong bảng chi tiết:**

- **STT**: Nhập / tự tính: Tự đánh số
- **Hàng hóa**: Nhập / tự tính: **Chọn** – danh sách hiện *tên hàng, (tồn hiện tại, tồn được xuất, lô được xuất)* của KHO NHẬP
- **Tên in**: Nhập / tự tính: Thường để trống
- **Đvt**: Nhập / tự tính: Theo hàng hoá, khoá
- **Khối lượng, Kiện, M³**: Nhập / tự tính: Tự tính theo Số lượng
- **Số lượng**: Nhập / tự tính: **Nhập** – số lượng mượn
- **SL đã trả, SL còn lại**: Nhập / tự tính: Chỉ hiện khi sửa / xem
- **Đơn giá**: Nhập / tự tính: **Nhập** (không bắt buộc) – giá tham khảo, làm giá mặc định khi trả bằng tiền
- **Thành tiền**: Nhập / tự tính: Số lượng × Đơn giá, tự tính
- **Chú thích**: Nhập / tự tính: **Nhập** ghi chú dòng
- **Thao tác**: Nhập / tự tính: **+** thêm dòng tại đây · thùng rác xoá dòng

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Mượn hàng
   ↓
Phiếu nhập mượn
   ↓
Thêm mới
```

```text
Phiếu nhập mượn → Thêm mới
      ↓
Nhập NGÀY NHẬP · chọn MƯỢN TỪ KHO (đối tác) · chọn KHO NHẬP
      ↓
Nhập MÃ PHIẾU GỐC · GHI CHÚ
      ↓
Thêm một hàng → chọn Hàng hóa → nhập Số lượng (Đơn giá nếu có)
      ↓
Lưu lại ── thiếu trường / kỳ đã khoá? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → tồn KHO NHẬP tăng · Trạng thái trả "Chưa trả"
      ↓
Trả đối tác → Phiếu xuất trả (KHO-B04.1)
```

### Bước 1 – Mở cửa sổ

Vào **Mượn hàng → Phiếu nhập mượn**, bấm **Thêm mới**. cửa sổ **THÊM MỚI - PHIẾU NHẬP MƯỢN** mở ra (Hình 1).

### Bước 2 – Nhập thông tin chung

1. **NGÀY NHẬP**: ngày nhận hàng mượn.
2. **MƯỢN TỪ KHO**: gõ tên đối tác để tìm kho đại diện.
3. **KHO NHẬP**: kho nhận hàng. Chọn trước khi nhập hàng để danh sách hàng hiện tồn của kho này.
4. **MÃ PHIẾU GỐC**: số phiếu giao hàng của đối tác; không có thì ghi *không có*.
5. **GHI CHÚ**: lý do mượn, hạn trả.

### Bước 3 – Nhập hàng mượn

1. Bấm **Thêm một hàng**  (cửa sổ mới mở bảng trống), bấm vào ô **Hàng hóa** của dòng vừa thêm, gõ mã hoặc tên hàng, chọn hàng. **Đvt** tự điền. Sau khi chọn hàng, bảng **tự thêm một dòng trống** bên dưới để nhập tiếp; nếu không dùng, bấm biểu tượng thùng rác ở dòng trống đó để xoá trước khi **Lưu lại** (đã thấy trên giao diện 11/10/2026). Thêm mặt hàng khác: bấm lại **Thêm một hàng** hoặc dấu **+** ở cột **Thao tác**.
2. Nhập **Số lượng** mượn. **Khối lượng**, **Kiện**, **M³** tự tính.
3. Nhập **Đơn giá** nếu biết giá trị hàng (dùng khi sau này mua luôn hàng mượn).
4. Ghi **Chú thích** dòng nếu cần.

Mẹo: chuột phải vào ô **Số lượng**, **Đơn giá** hoặc **Chú thích** → **Áp dụng cho những dòng dưới**.

![Hình 2: Bảng chi tiết hàng mượn đã nhập](/posts/2026-11-07-kho-b03-1-huong-dan-lap-phieu-nhap-muon/hinh-02-bang-chi-tiet-hang-muon.png)

Bảng rộng hơn cửa sổ: Hình 2 đã kéo thanh cuộn ngang sang phải (cột **Hàng hóa**, **Tên in** nằm bên trái). Dòng cuối bảng là tổng Khối lượng, Kiện, M³, Số lượng, Thành tiền.

### Bước 4 – Lưu lại

Bấm **Lưu lại**.

- Thiếu trường bắt buộc: dưới cửa sổ hiện **Chọn ngày nhập** / **Vui lòng chọn kho mượn** / **Vui lòng chọn kho nhập** / **Vui lòng nhập mã phiếu gốc hoặc mã phiếu từ NCC…**.
- Số lượng âm: cảnh báo **<số dòng>. Số lượng >= 0**.
- Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại.

### Bước 5 – Kiểm tra

Phiếu mới có **Mã phiếu** **NM…**, **Trạng thái trả** = **Chưa trả**. Tồn KHO NHẬP của các mặt hàng tăng theo số lượng mượn.

### Sửa phiếu

Bấm **Sửa** → **CẬP NHẬT - PHIẾU NHẬP MƯỢN**. Sửa được mọi trường và các dòng hàng **khi phiếu còn Chưa trả**. Khi lưu, hệ thống trừ tồn của các dòng cũ (phải còn đủ tồn) rồi cộng tồn theo các dòng mới.

## 6. Giải thích các thông tin trên màn hình

- **Ngày nhập**: Ý nghĩa: Ngày nhận hàng mượn; Bắt buộc: Có; Lưu ý: Dùng lọc danh sách, kiểm khoá sổ
- **Mượn từ kho**: Ý nghĩa: Kho đại diện cho đối tác; Bắt buộc: Có; Lưu ý: Tồn kho này **không** giảm
- **Kho nhập**: Ý nghĩa: Kho công ty nhận hàng; Bắt buộc: Có; Lưu ý: Tồn kho này **tăng**
- **Mã phiếu gốc**: Ý nghĩa: Số chứng từ của đối tác; Bắt buộc: Có; Lưu ý: Không có thì ghi "không có"
- **Mã phiếu**: Ý nghĩa: Mã phiếu nhập mượn (**NM…**); Lưu ý: Tự tạo khi lưu
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu; Bắt buộc: Không
- **Hàng hóa, Đvt**: Ý nghĩa: Hàng mượn; Bắt buộc: Có
- **Số lượng**: Ý nghĩa: Số lượng mượn; Bắt buộc: Có; Lưu ý: ≥ 0
- **Đơn giá**: Ý nghĩa: Giá tham khảo / giá mặc định khi trả bằng tiền; Bắt buộc: Không; Lưu ý: Không ghi công nợ
- **Thành tiền**: Ý nghĩa: Số lượng × Đơn giá; Lưu ý: Hệ thống tính lại khi lưu
- **Chú thích**: Ý nghĩa: Ghi chú dòng; Bắt buộc: Không
- **SL đã trả**: Ý nghĩa: Tổng đã xuất trả (bằng hàng và bằng tiền); Lưu ý: Khi sửa / xem
- **SL còn lại**: Ý nghĩa: Số lượng − SL đã trả = **số công ty còn phải trả**; Lưu ý: Khi sửa / xem

## 7. Kiểm tra sau khi thực hiện

- Phiếu được lưu với mã **NM…**, **Trạng thái trả** = **Chưa trả**.
- **Tồn KHO NHẬP tăng**; sổ cái kho ghi dòng nhập kho cho từng dòng hàng (không làm thay đổi giá vốn bình quân).
- Không phát sinh công nợ.
- Phiếu hiện trong cửa sổ chọn **DANH SÁCH - PHIẾU MƯỢN HÀNG** của **Phiếu xuất trả**.

## 8. Những điều cần lưu ý

⚠️ Cột **Tên in** có thể cho sửa nhưng ghi chú nguồn chưa xác nhận giá trị này được lưu ở chi tiết. Không dùng làm nơi duy nhất ghi nhận diện cần giữ; đối chiếu Xem lại và bản in, báo IT nếu không giữ giá trị.

⚠️ **Hàng mượn cộng vào tồn kho công ty** và có thể bị bán / xuất như hàng của công ty. Thống nhất với bộ phận bán hàng để giữ đủ hàng trả.

⚠️ **MƯỢN TỪ KHO** phải là kho đại diện cho đối tác, **không** chọn kho thật của công ty. Chuyển hàng nội bộ dùng **Phiếu xuất / nhập chuyển kho** (KHO-A06, KHO-A08).

⚠️ Phiếu đã có phiếu xuất trả thì **không sửa / xoá** được.

⚠️ Màn hình không chọn **lô hàng** cho từng dòng.

### Dưới cửa sổ báo "Vui lòng chọn kho mượn" / "Vui lòng chọn kho nhập" / "Chọn ngày nhập" 

Nguyên nhân: thiếu trường bắt buộc.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "Vui lòng nhập mã phiếu gốc hoặc mã phiếu từ NCC…" 

Nguyên nhân: bỏ trống **MÃ PHIẾU GỐC**.
Cách xử lý: nhập số phiếu của đối tác; không có thì ghi *không có*.

### "Lỗi sửa: "<tên kho>", "<tên hàng>" không đủ tồn (<số>)." 

Nguyên nhân: khi sửa, hệ thống phải trừ lại tồn của các dòng cũ nhưng hàng mượn đã được xuất / bán.
Cách xử lý: xem [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP MƯỢN](/bai-viet/2026-11-07-kho-b03-0-tong-quan-man-hinh-phieu-nhap-muon/), phần “Vướng mắc thường gặp”.

### "Lỗi sửa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: phiếu đã có phiếu xuất trả.
Cách xử lý: xem [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP MƯỢN](/bai-viet/2026-11-07-kho-b03-0-tong-quan-man-hinh-phieu-nhap-muon/), phần “Vướng mắc thường gặp”.

### "… Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **NGÀY NHẬP** thuộc kỳ đã khoá sổ.
Cách xử lý: liên hệ kế toán trưởng.

## 10. Câu hỏi thường gặp

**Mượn của cùng đối tác nhiều đợt?**
Mỗi đợt nhận hàng lập một phiếu nhập mượn; khi trả, phiếu xuất trả chọn đúng phiếu của đợt đó.

**Có cần nhập Đơn giá không?**
Không bắt buộc. Nên nhập nếu có khả năng mua luôn hàng mượn, để phiếu xuất trả lấy sẵn giá.

**Nhập mượn có làm thay đổi giá vốn không?**
Không. Giá vốn bình quân chỉ thay đổi khi xuất trả **bằng tiền** (coi như mua).

## 11. Công việc tiếp theo

```text
Phiếu nhập mượn
        ↓
Trả đối tác → Phiếu xuất trả (KHO-B04.1)
        ↓
Theo dõi số còn phải trả → Chi tiết nhập mượn (KHO-D03.0)
```

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU XUẤT TRẢ HÀNG MƯỢN](/bai-viet/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/) – Hướng dẫn lập phiếu xuất trả hàng mượn.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP MƯỢN](/bai-viet/2026-11-07-kho-b03-0-tong-quan-man-hinh-phieu-nhap-muon/) – Tổng quan màn hình Phiếu nhập mượn
- [HƯỚNG DẪN LẬP PHIẾU XUẤT TRẢ HÀNG MƯỢN](/bai-viet/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/) – Hướng dẫn lập phiếu xuất trả hàng mượn
- [TỔNG QUAN MÀN HÌNH CHI TIẾT NHẬP MƯỢN](/bai-viet/2026-11-07-kho-d03-0-tong-quan-man-hinh-chi-tiet-nhap-muon/) – Tổng quan màn hình Chi tiết nhập mượn
- KHO-A09 – Sổ cái kho
