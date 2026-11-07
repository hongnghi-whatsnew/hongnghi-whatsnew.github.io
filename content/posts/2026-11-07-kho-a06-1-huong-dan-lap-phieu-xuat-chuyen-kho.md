---
title: "HƯỚNG DẪN LẬP PHIẾU XUẤT CHUYỂN KHO"
date: "2026-11-07"
summary: "Phiếu xuất chuyển kho ghi nhận hàng rời kho xuất chuyển để chuyển sang kho nhập trong cùng chi nhánh."
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

Phiếu xuất chuyển kho ghi nhận hàng rời **kho xuất chuyển** để chuyển sang **kho nhập** trong cùng chi nhánh. Sau khi lưu, tồn kho xuất chuyển giảm ngay; kho nhập chỉ tăng khi kho đến lập phiếu nhập chuyển kho ([HƯỚNG DẪN LẬP PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-1-huong-dan-lap-phieu-nhap-chuyen-kho/)).

Bài này hướng dẫn ba cách nhập chi tiết hàng:

- **Nhập tay** từng dòng.
- **TỪ PHIẾU NHẬP GC**: lấy thành phẩm gia công đã nhập kho, đang chờ chuyển về kho theo yêu cầu.
- **Tải lên từ Excel**: nạp danh sách mã hàng, số lượng từ file mẫu.

Bài cũng áp dụng khi **Sửa** phiếu (cửa sổ **CẬP NHẬT - PHIẾU XUẤT CHUYỂN KHO**).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu xuất chuyển kho**.
- Kho xuất chuyển còn **đủ tồn được xuất** cho các mặt hàng cần chuyển.
- Danh mục **Kho hàng**, **Xe**, **Tài xế** đã có.
- (Nếu dùng Excel) file theo **mẫu** tải bằng **Tải file mẫu**.

## 2. Mở chức năng

**Kho hàng → Phiếu xuất chuyển kho → Thêm mới**

## 3. Nhận biết màn hình

![Hình 1: cửa sổ THÊM MỚI - PHIẾU XUẤT CHUYỂN KHO](/posts/2026-11-07-kho-a06-1-huong-dan-lap-phieu-xuat-chuyen-kho/hinh-01-form-them-phieu-xuat-chuyen-kho.png)

- **NGÀY XUẤT CHUYỂN KHO**: Ý nghĩa: Bắt buộc, mặc định hôm nay
- **KHO XUẤT CHUYỂN**: Ý nghĩa: Bắt buộc. Chọn kho xuất trước thì ô Hàng hóa mới hiện tồn đúng kho
- **KHO NHẬP**: Ý nghĩa: Bắt buộc, phải khác kho xuất
- **MÃ PHIẾU GỐC**: Ý nghĩa: Không bắt buộc (mã lệnh điều chuyển, chứng từ tay)
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **GHI CHÚ**: Ý nghĩa: Không bắt buộc
- **TÀI XẾ, SỐ XE**: Ý nghĩa: Bắt buộc. Chọn **SỐ XE** sẽ tự điền **TÀI XẾ** mặc định của xe
- **Bảng chi tiết hàng hoá**: Ý nghĩa: Xem bảng cột dưới
- **Thêm một hàng, TỪ PHIẾU NHẬP GC, Tải lên từ Excel, Tải file mẫu**: Ý nghĩa: Các cách nhập chi tiết
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

Thiếu trường bắt buộc: danh sách câu báo chữ đỏ hiện **dưới bảng chi tiết** (ví dụ **Vui lòng chọn kho nhập**, **Vui lòng chọn tài xế**, **Vui lòng chọn Số Xe**).

**Các cột trong bảng chi tiết:**

- **STT**: Nhập / tự tính: Tự đánh số (kéo biểu tượng ⠿ đầu dòng để đổi thứ tự)
- **Hàng hóa**: Nhập / tự tính: **Chọn** – bắt buộc; danh sách hiện "Tên, (tồn hiện tại, tồn được xuất, lô được xuất)"
- **Tên in**: Nhập / tự tính: Tên in phiếu, sửa được
- **Đvt**: Nhập / tự tính: Tự lấy theo hàng hoá
- **Khối lượng, Kiện, M³**: Nhập / tự tính: Tự tính theo Số lượng
- **Số lượng**: Nhập / tự tính: **Nhập**
- **SL đã nhập, SL còn lại**: Nhập / tự tính: Khi sửa / xem: kho đến đã nhận bao nhiêu
- **Chú thích**: Nhập / tự tính: **Nhập**
- **Thao tác**: Nhập / tự tính: Nút **+** (chèn dòng tại đây), nút xoá dòng

Dòng cuối bảng: **TỔNG CỘNG: n** và tổng Khối lượng, Kiện, M³, Số lượng.

⚠️ Bảng chi tiết **lưu bố cục cột theo từng người dùng** (dùng chung cho thêm, sửa, xem). Ở màn hình hẹp cột **Số lượng** bị che, phải kéo thanh cuộn ngang. Nếu cột bị ẩn, **chuột phải vào tiêu đề cột → Khôi phục bố cục**.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kho hàng
   ↓
Phiếu xuất chuyển kho
   ↓
Thêm mới
```

```text
Phiếu xuất chuyển kho → Thêm mới
      ↓
Chọn Ngày, Kho xuất chuyển, Kho nhập
      ↓
Chọn Số xe (tự điền Tài xế) → kiểm tra Tài xế
      ↓
Nhập chi tiết:
   ├── tay: chọn hàng → nhập Số lượng
   ├── TỪ PHIẾU NHẬP GC → tick dòng → Đồng ý
   └── Tải lên từ Excel (file theo Tải file mẫu)
      ↓
Lưu lại ── thiếu thông tin / không đủ tồn? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → tồn kho xuất giảm, Trạng thái nhập "Chưa nhập"
      ↓
(Kho đến) Phiếu nhập chuyển kho (KHO-A08.1)
```

### Bước 1 – Mở cửa sổ thêm mới

Vào **Kho hàng → Phiếu xuất chuyển kho**, bấm **Thêm mới**. cửa sổ **THÊM MỚI - PHIẾU XUẤT CHUYỂN KHO** mở ra (Hình 1).

### Bước 2 – Chọn kho

- **NGÀY XUẤT CHUYỂN KHO**: ngày hàng rời kho.
- **KHO XUẤT CHUYỂN**: kho đi. Chọn kho trước khi nhập hàng để ô **Hàng hóa** hiện tồn của kho này.
- **KHO NHẬP**: kho đến, khác kho xuất (trùng thì báo **Kho nhập phải khác kho xuất**).

### Bước 3 – Chọn xe và tài xế

1. Chọn **SỐ XE**  trước. Hệ thống tự điền **TÀI XẾ** mặc định của xe – nếu xe không có tài xế mặc định, ô **TÀI XẾ** bị **xoá trống**.
2. Kiểm tra / chọn lại **TÀI XẾ**.

⚠️ Chọn số xe **sau** khi đã chọn tài xế sẽ ghi đè tài xế. Luôn chọn **SỐ XE** trước rồi mới **TÀI XẾ**.

### Bước 4 – Nhập chi tiết hàng hoá

**Cách 1 – Nhập tay:**

1. Bấm vào ô **Hàng hóa** ở dòng trống (hoặc **Thêm một hàng**). Gõ mã / tên hàng, chọn. Số trong ngoặc là (tồn hiện tại, tồn được xuất, lô được xuất) của kho xuất.
2. Hệ thống điền **Tên in**, **Đvt** và thêm dòng trống mới bên dưới.
3. Nhập **Số lượng** (kéo thanh cuộn ngang nếu không thấy cột); **Khối lượng**, **Kiện**, **M³** tự tính (Hình 2).
4. Nhập **Chú thích** nếu cần. Chuột phải vào ô **Số lượng** / **Chú thích** → **Áp dụng cho những dòng dưới** để chép xuống.
5. Xoá các dòng trống bằng biểu tượng thùng rác trước khi lưu.

![Hình 2: Bảng chi tiết phiếu xuất chuyển kho](/posts/2026-11-07-kho-a06-1-huong-dan-lap-phieu-xuat-chuyen-kho/hinh-02-bang-chi-tiet-xuat-chuyen-kho.png)

**Cách 2 – TỪ PHIẾU NHẬP GC** (chuyển thành phẩm gia công về kho yêu cầu):

1. Bấm **TỪ PHIẾU NHẬP GC**  (chỉ có khi thêm mới). Cửa sổ **DANH SÁCH - HÀNG HOÁ CHỜ XUẤT CHUYỂN KHO** mở ra, lọc theo **Ngày nhập** (mặc định hôm nay).
2. Các cột: **Ngày nhập**, **Mã phiếu nhập**, **Từ phiếu**, **Khách hàng**, **Thành phẩm**, **Đvt**, **SL**, **SL chưa chuyển**, **Kho nhập**, **Y/c chuyển về kho**, **Trạng thái**, **Chú thích**.
3. Tick các dòng cần chuyển (cùng một **Kho nhập**), bấm **Đồng ý**.
4. Hệ thống thêm dòng với **Số lượng** = **SL chưa chuyển**, **Chú thích** = thông tin khách hàng, và tự điền **KHO XUẤT CHUYỂN** = kho nhập gia công, **KHO NHẬP** = kho yêu cầu chuyển về. Ô **Hàng hóa** của các dòng này bị khoá.

**Cách 3 – Tải lên từ Excel:**

1. Bấm **Tải file mẫu** để lấy file **[TEMPLATE IMPORT] XCK.xlsx**. Giữ nguyên dòng tiêu đề; xoá dữ liệu mẫu từ dòng 2 và nhập:
   - **mahanghoa**: mã hàng hoá đúng như danh mục.
   - **dvt**: đơn vị tính; ghi đơn vị phụ (ví dụ **Kiện**) thì số lượng được quy đổi sang đơn vị chính.
   - **soluong**: số lượng.
   - **chuthich**: chú thích (tuỳ chọn).
2. Bấm **Tải lên từ Excel**, chọn file. Bảng chi tiết được **thay toàn bộ** bằng các dòng trong file.
3. Mã không có trong danh mục: dòng có **Số lượng** 0 và **Chú thích** = **Hàng hoá không tồn tại. Vui lòng kiểm tra lại!** – sửa hoặc xoá dòng đó.

### Bước 5 – Lưu lại

Bấm **Lưu lại**.

- Thiếu thông tin chung: câu báo chữ đỏ dưới bảng (Hình 3); ô thiếu có viền đỏ.
- Dòng sai: cảnh báo **<số dòng>. Số lượng >= 0** hoặc **<số dòng>.** kèm lỗi ô Hàng hóa (thiếu hàng hoá).
- Không đủ tồn: toast **CẢNH BÁO – Lỗi thêm: …** (xem phần “Vướng mắc thường gặp”).
- Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại; **Trạng thái nhập** = **Chưa nhập**.

![Hình 3: Câu báo thiếu thông tin dưới bảng chi tiết](/posts/2026-11-07-kho-a06-1-huong-dan-lap-phieu-xuat-chuyen-kho/hinh-03-thieu-thong-tin.png)

### Bước 6 – Báo kho đến nhận hàng

In phiếu (chuột phải → **In Phiếu**) giao kèm hàng. Kho đến lập **phiếu nhập chuyển kho** từ phiếu này ([HƯỚNG DẪN LẬP PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-1-huong-dan-lap-phieu-nhap-chuyen-kho/)).

### Sửa phiếu

Bấm **Sửa** → **CẬP NHẬT - PHIẾU XUẤT CHUYỂN KHO**. Sửa được mọi trường và chi tiết (trừ nút **TỪ PHIẾU NHẬP GC**). Chỉ sửa được khi kho đến **chưa lập phiếu nhập chuyển kho**; mỗi lần sửa hệ thống ghi lại toàn bộ chi tiết.

## 6. Giải thích các thông tin trên màn hình

- **Ngày xuất chuyển kho**: Ý nghĩa: Ngày hàng rời kho; Bắt buộc: Có; Lưu ý: Dùng lọc danh sách, sinh mã phiếu
- **Kho xuất chuyển**: Ý nghĩa: Kho đi; Bắt buộc: Có; Lưu ý: Tồn kho này bị trừ khi lưu
- **Kho nhập**: Ý nghĩa: Kho đến; Bắt buộc: Có; Lưu ý: Khác kho xuất
- **Mã phiếu gốc**: Ý nghĩa: Lệnh điều chuyển / chứng từ tay; Bắt buộc: Không; Lưu ý: Sửa sau bằng chuột phải → **Cập nhật mã phiếu gốc**
- **Mã phiếu**: Ý nghĩa: Mã phiếu (**XC…**); Lưu ý: Tự tạo
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu; Bắt buộc: Không
- **Tài xế**: Ý nghĩa: Người chở; Bắt buộc: Có
- **Số xe**: Ý nghĩa: Biển số xe; Bắt buộc: Có; Lưu ý: Chọn xe tự điền tài xế mặc định
- **Hàng hóa**: Ý nghĩa: Mặt hàng chuyển; Bắt buộc: Có (mỗi dòng)
- **Tên in**: Ý nghĩa: Tên in phiếu; Bắt buộc: Không
- **Đvt**: Ý nghĩa: Đơn vị tính chính; Lưu ý: Tự lấy
- **Khối lượng / Kiện / M³**: Ý nghĩa: Số lượng × trọng lượng / ÷ quy đổi kiện / × m³; Lưu ý: Tự tính
- **Số lượng**: Ý nghĩa: Số lượng chuyển; Bắt buộc: Có; Lưu ý: ≥ 0; ≤ tồn được xuất; dòng từ phiếu gia công ≤ SL chưa chuyển
- **SL đã nhập**: Ý nghĩa: Kho đến đã nhận; Lưu ý: Khi sửa / xem
- **SL còn lại**: Ý nghĩa: Số lượng − SL đã nhập; Lưu ý: Khi sửa / xem
- **Chú thích**: Ý nghĩa: Ghi chú dòng; Bắt buộc: Không; Lưu ý: In trên phiếu

## 7. Kiểm tra sau khi thực hiện

- Phiếu được lưu với mã **XC…**, **Trạng thái nhập** = **Chưa nhập**.
- **Tồn kho xuất chuyển** giảm ngay; sổ cái kho có dòng **XUAT_KHO**, nguồn **CHUYEN_KHO** ([TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/)).
- Phiếu hiện trong cửa sổ chọn **DANH SÁCH PHIẾU XUẤT CHUYỂN KHO** của màn Phiếu nhập chuyển kho.
- (Từ phiếu nhập GC) trạng thái chuyển kho của phiếu nhập gia công được cập nhật.

## 8. Những điều cần lưu ý

⚠️ Với Excel dùng ĐVT phụ, đối chiếu số đã quy đổi trên bảng với số lượng theo ĐVT chính và tồn kho. Ghi chú kiểm chứng còn điểm chưa thống nhất giữa trừ tồn và tỷ lệ quy đổi; dừng nếu số không khớp, không mặc định nạp file thành công là quy đổi đúng.

⚠️ **Tồn kho đi giảm ngay khi lưu**, kể cả khi hàng chưa lên xe. Chỉ lưu khi hàng thực sự xuất.

⚠️ Hệ thống kiểm tra **tồn được xuất** (tồn hiện tại trừ hàng khách đặt, bán chưa xuất, giữ gia công, giữ chuyển kho). Ô Hàng hóa hiện sẵn các số này để kiểm tra trước.

⚠️ **Tải lên từ Excel** thay toàn bộ các dòng đang có trong bảng.

⚠️ Chọn **SỐ XE** có thể xoá **TÀI XẾ** đã chọn – chọn xe trước.

⚠️ Bấm **Đóng** không hỏi lại, dữ liệu đang nhập bị mất.

### "CẢNH BÁO – Lỗi thêm: "<tên kho>", "<tên hàng>" không đủ tồn (<số>), lô còn (<số>)." 

Nguyên nhân: kho xuất chuyển không còn đủ tồn được xuất.
Cách xử lý: giảm số lượng, chọn đúng kho đang chứa hàng, hoặc xử lý đơn đang giữ hàng.

### "CẢNH BÁO – Lỗi thêm: <tên hàng> chỉ còn lại (<số>) trong đơn xuất" 

Nguyên nhân: dòng lấy từ phiếu nhập gia công có số lượng lớn hơn số chưa chuyển.
Cách xử lý: giảm **Số lượng** về tối đa bằng số trong câu báo.

### Dưới bảng báo "Vui lòng chọn kho nhập" / "Vui lòng chọn tài xế" / "Vui lòng chọn Số Xe" / "Kho nhập phải khác kho xuất" 

Nguyên nhân: thiếu trường bắt buộc, hoặc kho nhập trùng kho xuất.
Cách xử lý: chọn đủ, kho nhập khác kho xuất, rồi **Lưu lại**.

### "Vui lòng chọn cùng 1 kho nhập để xuất hàng." 

Nguyên nhân: trong cửa sổ hàng chờ xuất chuyển kho, tick các dòng thuộc nhiều **Kho nhập** khác nhau.
Cách xử lý: chỉ tick dòng cùng một kho nhập; lập phiếu riêng cho kho khác.

### Hộp thoại "Kho chuyển về không cùng 1 kho, bạn có muốn tiếp tục?" 

Nguyên nhân: các dòng tick có **Y/c chuyển về kho** khác nhau.
Cách xử lý: **Tiếp tục** thì phải tự chọn **KHO NHẬP**; **Không** để chọn lại.

### "Không có sản phẩm" khi tải Excel 

Nguyên nhân: file trống hoặc không mã hàng nào khớp danh mục; sai tiêu đề cột.
Cách xử lý: dùng **Tải file mẫu**, giữ nguyên tiêu đề **mahanghoa**, **dvt**, **soluong**, **chuthich**.

### "CẢNH BÁO – Lỗi sửa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: kho đến đã lập phiếu nhập chuyển kho.
Cách xử lý: đối chiếu phiếu nhận và phát sinh sau ở kho nhận với kế toán; chỉ đảo/sửa chứng từ theo phương án đã chốt.

## 10. Câu hỏi thường gặp

**Ô Hàng hóa hiện "(7, 7, 0)" nghĩa là gì?**
Lần lượt: tồn hiện tại, tồn được xuất, tồn lô được xuất của kho xuất chuyển đang chọn.

**Chuyển hàng có lô thì sao?**
Phiếu xuất chuyển kho nhập tay không có cột lô; chỉ dòng lấy **TỪ PHIẾU NHẬP GC** mang theo lô. Hàng cần chọn lô hỏi IT / kế toán kho.

**Phiếu đã lưu nhưng kho đến chưa nhận, sửa số lượng được không?**
Được, bằng **Sửa**, khi chưa có phiếu nhập chuyển kho.

## 11. Công việc tiếp theo

```text
Phiếu xuất chuyển kho
        ↓
In phiếu giao kèm hàng (KHO-A06.0)
        ↓
(Kho đến) Phiếu nhập chuyển kho (KHO-A08.1) → tồn kho đến tăng
```

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-1-huong-dan-lap-phieu-nhap-chuyen-kho/) – Hướng dẫn lập phiếu nhập chuyển kho.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-0-tong-quan-man-hinh-phieu-xuat-chuyen-kho/) – Tổng quan màn hình Phiếu xuất chuyển kho
- [HƯỚNG DẪN LẬP PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-1-huong-dan-lap-phieu-nhap-chuyen-kho/) – Hướng dẫn lập phiếu nhập chuyển kho
- [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/) – Tổng quan màn hình Sổ cái kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT CHUYỂN KHO](/bai-viet/2026-11-07-kho-c04-0-tong-quan-man-hinh-thong-ke-chi-tiet-chuyen-kho/) – Thống kê xuất chuyển kho chi tiết
- Sổ tay Sản xuất – Phiếu nhập kho gia công
