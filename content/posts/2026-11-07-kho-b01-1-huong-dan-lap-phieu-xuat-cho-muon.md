---
title: "HƯỚNG DẪN LẬP PHIẾU XUẤT CHO MƯỢN"
date: "2026-11-07"
summary: "Khi công ty giao hàng cho đối tác mượn (công ty bạn, đơn vị gia công…), thủ kho lập phiếu xuất cho mượn: chọn kho xuất hàng, kho đại diện cho đối tác (KHO MƯỢN), và danh sách hàng cho mượn."
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

Khi công ty **giao hàng cho đối tác mượn** (công ty bạn, đơn vị gia công…), thủ kho lập **phiếu xuất cho mượn**: chọn kho xuất hàng, kho đại diện cho đối tác (**KHO MƯỢN**), và danh sách hàng cho mượn.

Khi lưu, **tồn kho của KHO XUẤT giảm ngay**. Phiếu không ghi công nợ. Sau này đối tác trả lại (bằng hàng hoặc bằng tiền) thì lập **Phiếu nhập trả** từ phiếu này ([HƯỚNG DẪN LẬP PHIẾU NHẬP TRẢ HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kho-b02-1-huong-dan-lap-phieu-nhap-tra-hang-cho-muon/)).

Bài này cũng áp dụng khi **Sửa** phiếu (cửa sổ **CẬP NHẬT - PHIẾU XUẤT CHO MƯỢN**).

Thao tác dùng chung liên quan: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu xuất cho mượn**.
- Danh mục kho có **kho đại diện cho đối tác** (ví dụ *KHO MƯỢN SONG HUỲNH*). Chưa có thì nhờ quản trị tạo trước (sổ tay Thiết lập danh mục – Kho hàng).
- Hàng cho mượn **còn tồn được xuất** ở kho xuất.
- Kỳ kế toán chứa **Ngày xuất** chưa khoá sổ.

## 2. Mở chức năng

**Mượn hàng → Phiếu xuất cho mượn → Thêm mới**

## 3. Nhận biết màn hình

![Hình 1: cửa sổ THÊM MỚI - PHIẾU XUẤT CHO MƯỢN](/posts/2026-11-07-kho-b01-1-huong-dan-lap-phieu-xuat-cho-muon/hinh-01-form-them-phieu-xuat-cho-muon.png)

- **NGÀY XUẤT**: Ý nghĩa: Bắt buộc, mặc định hôm nay
- **KHO XUẤT**: Ý nghĩa: Bắt buộc. Kho của công ty xuất hàng
- **KHO MƯỢN**: Ý nghĩa: Bắt buộc. Kho đại diện cho đối tác mượn
- **MÃ PHIẾU GỐC**: Ý nghĩa: Bắt buộc. Số biên bản / chứng từ giấy; không có thì ghi "không có"
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **GHI CHÚ**: Ý nghĩa: Lý do cho mượn, thoả thuận trả
- **Bảng chi tiết hàng cho mượn**: Ý nghĩa: cửa sổ mới mở bảng trống (*Không có dữ liệu*); xem bảng cột dưới
- **Thêm một hàng**: Ý nghĩa: Thêm dòng trống cuối bảng – bấm để có dòng đầu tiên
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Các cột trong bảng chi tiết:**

- **STT**: Nhập / tự tính: Tự đánh số
- **Hàng hóa**: Nhập / tự tính: **Chọn** – danh sách hiện *tên hàng, (tồn hiện tại, tồn được xuất, lô được xuất)* của KHO XUẤT
- **Tên in**: Nhập / tự tính: Tên in lên phiếu, thường để trống
- **Đvt**: Nhập / tự tính: Theo hàng hoá, khoá
- **Khối lượng, Kiện, M³**: Nhập / tự tính: Tự tính theo Số lượng
- **Số lượng**: Nhập / tự tính: **Nhập** – số lượng cho mượn
- **SL đã trả, SL còn lại**: Nhập / tự tính: Chỉ hiện khi sửa / xem
- **Đơn giá**: Nhập / tự tính: **Nhập** (không bắt buộc) – giá tham khảo, làm giá mặc định khi đối tác trả bằng tiền
- **Thành tiền**: Nhập / tự tính: Số lượng × Đơn giá, tự tính
- **Chú thích**: Nhập / tự tính: **Nhập** ghi chú dòng
- **Thao tác**: Nhập / tự tính: **+** thêm dòng tại đây · thùng rác xoá dòng

Dòng cuối bảng: **TỔNG CỘNG: <số dòng>** và tổng Khối lượng, Kiện, M³, Số lượng, Thành tiền.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Mượn hàng
   ↓
Phiếu xuất cho mượn
   ↓
Thêm mới
```

```text
Phiếu xuất cho mượn → Thêm mới
      ↓
Nhập NGÀY XUẤT · chọn KHO XUẤT · chọn KHO MƯỢN (đối tác)
      ↓
Nhập MÃ PHIẾU GỐC · GHI CHÚ
      ↓
Thêm một hàng → chọn Hàng hóa → nhập Số lượng (Đơn giá nếu cần)
      ↓
Lưu lại ── thiếu trường / không đủ tồn / kỳ đã khoá? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → tồn KHO XUẤT giảm · Trạng thái trả "Chưa trả"
      ↓
Đối tác trả lại → Phiếu nhập trả (KHO-B02.1)
```

### Bước 1 – Mở cửa sổ

Vào **Mượn hàng → Phiếu xuất cho mượn**, bấm **Thêm mới**. cửa sổ **THÊM MỚI - PHIẾU XUẤT CHO MƯỢN** mở ra (Hình 1).

### Bước 2 – Nhập thông tin chung

1. **NGÀY XUẤT**: ngày giao hàng cho đối tác (mặc định hôm nay).
2. **KHO XUẤT**: kho đang chứa hàng. **Chọn kho xuất trước khi chọn hàng** để danh sách hàng hiện đúng tồn của kho này.
3. **KHO MƯỢN**: gõ tên đối tác để tìm kho đại diện (ví dụ *KHO MƯỢN SONG HUỲNH*).
4. **MÃ PHIẾU GỐC**: số biên bản giao hàng; không có thì ghi *không có*.
5. **GHI CHÚ**: lý do, hạn trả, người nhận hàng.

### Bước 3 – Nhập hàng cho mượn

1. Bấm **Thêm một hàng**  (cửa sổ mới mở bảng trống). Bấm vào ô **Hàng hóa** của dòng vừa thêm, gõ mã hoặc tên hàng để tìm. Mỗi mục hiện *tên hàng, (tồn hiện tại, tồn được xuất, lô được xuất)* – chọn hàng có **tồn được xuất** đủ.
2. Sau khi chọn, hệ thống điền **Đvt**. Sau khi chọn hàng, bảng **tự thêm một dòng trống** bên dưới để nhập tiếp; nếu không dùng, bấm biểu tượng thùng rác ở dòng trống đó để xoá trước khi **Lưu lại** (đã thấy trên giao diện 11/10/2026). Cần thêm mặt hàng khác thì bấm lại **Thêm một hàng** hoặc dấu **+** ở cột **Thao tác**.
3. Nhập **Số lượng** cho mượn. **Khối lượng**, **Kiện**, **M³** tự tính.
4. Nhập **Đơn giá** nếu muốn ghi giá trị hàng (giá này sẽ là giá mặc định nếu đối tác trả bằng tiền).
5. Ghi **Chú thích** dòng nếu cần.

Mẹo: chuột phải vào ô **Số lượng**, **Đơn giá** hoặc **Chú thích** → **Áp dụng cho những dòng dưới** để chép giá trị xuống các dòng dưới. Chuột phải vào tiêu đề cột → **Trình chọn cột** để ẩn / hiện cột.

![Hình 2: Bảng chi tiết hàng cho mượn đã nhập](/posts/2026-11-07-kho-b01-1-huong-dan-lap-phieu-xuat-cho-muon/hinh-02-bang-chi-tiet-hang-cho-muon.png)

Bảng rộng hơn cửa sổ: Hình 2 đã kéo thanh cuộn ngang sang phải (cột **Hàng hóa**, **Tên in** nằm bên trái). Dòng cuối bảng là tổng Khối lượng, Kiện, M³, Số lượng, Thành tiền.

### Bước 4 – Lưu lại

Bấm **Lưu lại**.

- Thiếu trường bắt buộc: ô viền đỏ, dưới cửa sổ hiện **Chọn ngày xuất** / **Vui lòng chọn kho xuất** / **Vui lòng chọn kho nhập** (ô **KHO MƯỢN**) / **Vui lòng nhập mã phiếu gốc hoặc mã phiếu từ NCC…**.
- Dòng chưa chọn hàng / số lượng âm: cảnh báo **<số dòng>. Số lượng >= 0** hoặc ô **Hàng hóa** viền đỏ.
- Kho xuất không đủ tồn: **Lỗi thêm: "<tên kho>", "<tên hàng>" không đủ tồn (<số>).**
- Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại.

### Bước 5 – Kiểm tra

Phiếu mới có **Mã phiếu** **XM…**, **Trạng thái trả** = **Chưa trả**. In phiếu giao cho đối tác ký: chuột phải → **In phiếu** ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-0-tong-quan-man-hinh-phieu-xuat-cho-muon/)).

### Sửa phiếu

Bấm **Sửa** → **CẬP NHẬT - PHIẾU XUẤT CHO MƯỢN**. Sửa được mọi trường và các dòng hàng, **chỉ khi phiếu còn Chưa trả** (chưa có phiếu nhập trả). Khi lưu, hệ thống hoàn tồn của các dòng cũ rồi trừ tồn theo các dòng mới.

## 6. Giải thích các thông tin trên màn hình

- **Ngày xuất**: Ý nghĩa: Ngày giao hàng cho mượn; Bắt buộc: Có; Lưu ý: Dùng lọc danh sách, kiểm khoá sổ
- **Kho xuất**: Ý nghĩa: Kho công ty xuất hàng; Bắt buộc: Có; Lưu ý: Phải đủ tồn được xuất; tồn kho này giảm
- **Kho mượn**: Ý nghĩa: Kho đại diện cho đối tác; Bắt buộc: Có; Lưu ý: Tồn kho này **không** tăng
- **Mã phiếu gốc**: Ý nghĩa: Số chứng từ giấy; Bắt buộc: Có; Lưu ý: Không có thì ghi "không có"
- **Mã phiếu**: Ý nghĩa: Mã phiếu xuất cho mượn (**XM…**); Lưu ý: Tự tạo khi lưu
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu; Bắt buộc: Không
- **Hàng hóa, Đvt**: Ý nghĩa: Hàng cho mượn; Bắt buộc: Có
- **Số lượng**: Ý nghĩa: Số lượng cho mượn; Bắt buộc: Có; Lưu ý: ≥ 0; ≤ tồn được xuất
- **Đơn giá**: Ý nghĩa: Giá trị tham khảo / giá trả bằng tiền mặc định; Bắt buộc: Không; Lưu ý: Không ghi công nợ
- **Thành tiền**: Ý nghĩa: Số lượng × Đơn giá; Lưu ý: Hệ thống tính lại khi lưu
- **Chú thích**: Ý nghĩa: Ghi chú dòng; Bắt buộc: Không
- **SL đã trả**: Ý nghĩa: Tổng đã nhập trả (cả bằng hàng và bằng tiền); Lưu ý: Khi sửa / xem
- **SL còn lại**: Ý nghĩa: Số lượng − SL đã trả = **số đối tác còn phải trả**; Lưu ý: Khi sửa / xem

**Tồn được xuất** = tồn hiện tại − hàng đã giữ cho đơn khách đặt − bán chưa xuất − giữ gia công − giữ chuyển kho.

## 7. Kiểm tra sau khi thực hiện

- Phiếu được lưu với mã **XM…**, **Trạng thái trả** = **Chưa trả**.
- **Tồn KHO XUẤT giảm** theo số lượng cho mượn; sổ cái kho ghi một dòng xuất kho cho từng dòng hàng.
- Tồn KHO MƯỢN không đổi; công nợ không đổi.
- Phiếu hiện trong cửa sổ chọn **DANH SÁCH - PHIẾU CHO MƯỢN** của **Phiếu nhập trả**.

## 8. Những điều cần lưu ý

⚠️ Cột **Tên in** có thể cho sửa nhưng ghi chú nguồn chưa xác nhận giá trị này được lưu ở chi tiết. Không dùng làm nơi duy nhất ghi nhận diện cần giữ; đối chiếu Xem lại và bản in, báo IT nếu không giữ giá trị.

⚠️ **Tồn kho giảm ngay khi lưu.** Kiểm tra kỹ kho xuất và số lượng trước khi bấm **Lưu lại**.

⚠️ Hàng đã giữ cho đơn khách, bán chưa xuất, gia công, chuyển kho **không** được tính vào tồn cho mượn.

⚠️ **KHO MƯỢN** phải là kho đại diện cho đối tác, **không** chọn kho thật của công ty (dữ liệu sẽ lẫn với chuyển kho nội bộ). Chuyển hàng giữa các kho công ty dùng **Phiếu xuất chuyển kho** (KHO-A06).

⚠️ Màn hình không chọn **lô hàng** cho từng dòng.

⚠️ Đã có phiếu nhập trả thì **không sửa / xoá** được phiếu xuất cho mượn.

### "Lỗi thêm: "<tên kho>", "<tên hàng>" không đủ tồn (<số>)." 

Nguyên nhân: kho xuất không còn đủ tồn được xuất (số trong ngoặc là tồn được xuất hiện có).
Cách xử lý: giảm số lượng, chọn kho khác đang có hàng, hoặc kiểm tra hàng đang bị giữ cho đơn khác.

### Dưới cửa sổ báo "Vui lòng chọn kho nhập" 

Nguyên nhân: chưa chọn **KHO MƯỢN** (câu báo dùng chữ "kho nhập").
Cách xử lý: chọn kho đại diện cho đối tác ở ô **KHO MƯỢN**.

### "Vui lòng nhập mã phiếu gốc hoặc mã phiếu từ NCC…" 

Nguyên nhân: bỏ trống **MÃ PHIẾU GỐC**.
Cách xử lý: nhập số biên bản; không có thì ghi *không có*.

### Không tìm thấy kho đối tác trong ô KHO MƯỢN 

Nguyên nhân: danh mục chưa có kho đại diện cho đối tác, hoặc kho thuộc chi nhánh khác.
Cách xử lý: nhờ quản trị tạo kho (Thiết lập danh mục – Kho hàng) cho chi nhánh đang làm việc.

### "Lỗi sửa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: phiếu đã có phiếu nhập trả.
Cách xử lý: xem [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-0-tong-quan-man-hinh-phieu-xuat-cho-muon/), phần “Vướng mắc thường gặp”.

### "… Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **NGÀY XUẤT** thuộc kỳ đã khoá sổ.
Cách xử lý: liên hệ kế toán trưởng.

## 10. Câu hỏi thường gặp

**Có bắt buộc nhập Đơn giá không?**
Không. Nên nhập nếu có khả năng đối tác trả bằng tiền, để phiếu nhập trả lấy sẵn giá.

**Cho cùng đối tác mượn nhiều đợt thì sao?**
Mỗi đợt giao hàng lập một phiếu. Khi đối tác trả, phiếu nhập trả chọn đúng phiếu xuất của đợt đó.

**Lỡ chọn sai kho xuất sau khi đã nhập hàng?**
Đổi lại **KHO XUẤT**; kho của các dòng được cập nhật theo. Kiểm tra lại tồn được xuất trước khi lưu.

## 11. Công việc tiếp theo

```text
Phiếu xuất cho mượn
        ↓
Đối tác trả hàng → Phiếu nhập trả (KHO-B02.1)
        ↓
Theo dõi số còn ở đối tác → Chi tiết xuất mượn (KHO-D02.0)
```

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU NHẬP TRẢ HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kho-b02-1-huong-dan-lap-phieu-nhap-tra-hang-cho-muon/) – Hướng dẫn lập phiếu nhập trả hàng cho mượn.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-0-tong-quan-man-hinh-phieu-xuat-cho-muon/) – Tổng quan màn hình Phiếu xuất cho mượn
- [HƯỚNG DẪN LẬP PHIẾU NHẬP TRẢ HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kho-b02-1-huong-dan-lap-phieu-nhap-tra-hang-cho-muon/) – Hướng dẫn lập phiếu nhập trả hàng cho mượn
- [TỔNG QUAN MÀN HÌNH CHI TIẾT XUẤT MƯỢN](/bai-viet/2026-11-07-kho-d02-0-tong-quan-man-hinh-chi-tiet-xuat-muon/) – Tổng quan màn hình Chi tiết xuất mượn
- KHO-A06 – Phiếu xuất chuyển kho
- KHO-A09 – Sổ cái kho
