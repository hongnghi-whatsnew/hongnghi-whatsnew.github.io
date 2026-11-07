---
title: "HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG SẢN XUẤT"
date: "2026-11-07"
summary: "Phiếu đặt hàng ghi nhận khách đặt hàng cần sản xuất / gia công."
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

Phiếu đặt hàng ghi nhận khách đặt **hàng cần sản xuất / gia công**. Mỗi dòng gồm: **hàng trơn** (hoặc thành phẩm) làm nền, **yêu cầu gia công** (định mức), **số mặt**, **số lượng** và **kho chuyển về**. Từ đó hệ thống tự ghép **tên thành phẩm** và khi lưu sẽ tạo mã thành phẩm trong danh mục hàng hoá.

Bài này hướng dẫn lập phiếu **nhập tay từng dòng**. Nhập từ file Excel xem [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU ĐẶT HÀNG TỪ EXCEL](/bai-viet/2026-11-07-bh-a02-2-huong-dan-nhap-chi-tiet-phieu-dat-hang-tu-excel/). Bài cũng áp dụng khi **Sửa** phiếu (cửa sổ **CẬP NHẬT - PHIẾU ĐẶT HÀNG**).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu đặt hàng**.
- Khách hàng, hàng trơn / thành phẩm, định mức gia công (nghiệp vụ sản xuất ván tại kho, ván ngoài), số mặt và kho hàng đã có trong danh mục.
- Chuẩn bị: yêu cầu của khách (loại ván, kích thước, phủ mặt, số lượng), ngày khách muốn nhận, địa chỉ giao.

## 2. Mở chức năng

**Bán hàng → Phiếu đặt hàng → Thêm mới**

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ THÊM MỚI - PHIẾU ĐẶT HÀNG](/posts/2026-11-07-bh-a02-1-huong-dan-lap-phieu-dat-hang-san-xuat/hinh-01-form-them-phieu-dat-hang.png)

- **NGÀY ĐẶT HÀNG**: Ý nghĩa: Hôm nay, khoá (nhãn có dấu * nhưng không sửa được)
- **KHÁCH HÀNG**: Ý nghĩa: Bắt buộc. Phải chọn khách thì bảng chi tiết mới mở
- **NỢ CŨ**: Ý nghĩa: Công nợ hiện tại của khách, tự điền
- **NGÀY NHẬN HÀNG**: Ý nghĩa: Ngày khách dự kiến nhận
- **ĐỊA CHỈ GIAO, ĐIỆN THOẠI**: Ý nghĩa: Tự điền theo khách; địa chỉ sửa được
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **GHI CHÚ**: Ý nghĩa: Ghi chú
- **N/v KINH DOANH**: Ý nghĩa: Bắt buộc, mặc định là bạn
- **Bảng chi tiết (YÊU CẦU SẢN XUẤT)**: Ý nghĩa: Các dòng hàng đặt; bảng không có tiêu đề riêng
- **Thêm một hàng, Tải lên từ Excel, Tải file mẫu**: Ý nghĩa: Thêm dòng / nhập từ Excel ([HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU ĐẶT HÀNG TỪ EXCEL](/bai-viet/2026-11-07-bh-a02-2-huong-dan-nhap-chi-tiet-phieu-dat-hang-tu-excel/))
- **YÊU CẦU SẢN XUẤT / THÀNH PHẨM**: Ý nghĩa: Nút chuyển bảng, chỉ hiện khi phiếu đã có thành phẩm nhập kho (không có trên ảnh)
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Các cột trong bảng YÊU CẦU SẢN XUẤT:**

- **STT**: Nhập / tự tính: Tự đánh số
- **Hàng hóa**: Nhập / tự tính: **Chọn** – bắt buộc (hàng trơn hoặc thành phẩm)
- **Đvt**: Nhập / tự tính: Tự lấy theo hàng hoá
- **Y/c**: Nhập / tự tính: **Chọn** một hoặc nhiều yêu cầu gia công (định mức)
- **Số mặt**: Nhập / tự tính: **Chọn** số mặt gia công
- **Số mặt TP**: Nhập / tự tính: Số mặt của thành phẩm; tự lấy theo **Số mặt**, sửa được
- **Thành phẩm**: Nhập / tự tính: Tên thành phẩm, tự ghép khi đủ Hàng hóa + Y/c + Số mặt TP
- **Số lượng**: Nhập / tự tính: **Nhập**
- **SL đã lên y/c, SL tất toán, SL đã nhập**: Nhập / tự tính: Chỉ xem, có ngay khi thêm mới (bằng 0)
- **Kho chuyển về**: Nhập / tự tính: **Chọn** kho nhận thành phẩm sau gia công
- **Ghi chú**: Nhập / tự tính: **Nhập** (tuỳ chọn)
- **Thao tác**: Nhập / tự tính: Nút **+** (thêm dòng tại đây), **Nhân đôi**, xoá dòng

Bảng rộng: lúc mở chỉ thấy tới cột **Số mặt TP**; kéo thanh cuộn ngang ở đáy bảng để thấy **Thành phẩm**, **Số lượng**, **SL đã lên y/c**, **SL tất toán**, **SL đã nhập**, **Kho chuyển về**, **Ghi chú** (Hình 2, Hình 3).

**Các cột trong bảng THÀNH PHẨM** (chỉ xem): **Thành phẩm**, **Kho nhập**, **Số lượng**, **SL đã bán**, **SL tất toán**.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Bán hàng
   ↓
Phiếu đặt hàng
   ↓
Thêm mới
```

```text
Phiếu đặt hàng → Thêm mới
      ↓
Chọn khách hàng → bảng mở, điền nợ cũ, địa chỉ, điện thoại
      ↓
Mỗi dòng: Hàng hóa → Y/c → Số mặt (→ Số mặt TP) → Thành phẩm tự hiện
          → Số lượng → Kho chuyển về
      ↓
Lưu lại ── báo lỗi dòng? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → Trạng thái: Chờ → Kích hoạt (BH-A02.0)
```

### Bước 1 – Mở cửa sổ thêm mới

Vào **Bán hàng → Phiếu đặt hàng**, bấm **Thêm mới**. Cửa sổ **THÊM MỚI - PHIẾU ĐẶT HÀNG** mở ra (Hình 1). **NGÀY ĐẶT HÀNG** là hôm nay; **N/v KINH DOANH** là bạn. Bảng chi tiết và các nút dưới (**Thêm một hàng**, **Tải lên từ Excel**, **Tải file mẫu**) mờ cho đến khi chọn khách.

### Bước 2 – Chọn khách và thông tin giao hàng

- **KHÁCH HÀNG**: gõ mã hoặc tên khách rồi chọn. Hệ thống điền **NỢ CŨ**, **ĐỊA CHỈ GIAO**, **ĐIỆN THOẠI** và mở bảng chi tiết.
- **ĐỊA CHỈ GIAO**: sửa nếu khách giao về địa chỉ khác.
- **GHI CHÚ**, **N/v KINH DOANH**: nhập / đổi nếu cần.

### Bước 3 – Nhập từng dòng yêu cầu sản xuất

1. Bấm ô **Hàng hóa** ở dòng trống (hoặc **Thêm một hàng**). Gõ mã / tên hàng trơn và chọn. Danh sách hiện *Tên, (tồn hiện tại, tồn được xuất, lô được xuất)* – số tồn ở đây là tồn **toàn công ty**, không riêng một kho. Nếu ván có khổ rộng hơn 1300 mm, hệ thống nhắc **Bạn đang chọn "khổ lớn <rộng>mm"**.
2. **Y/c**: bấm ô, chọn một hoặc nhiều yêu cầu gia công.
3. **Số mặt**: chọn số mặt. **Số mặt TP** tự lấy theo; đổi nếu thành phẩm có số mặt khác.
4. Cột **Thành phẩm** tự hiện tên thành phẩm sẽ tạo, ví dụ *MEL (HN) 116T 2M LDF E2 (9x1220x2440) DW* (Hình 2). Kiểm tra tên có đúng yêu cầu khách.
5. **Số lượng**: nhập số lượng đặt.
6. **Kho chuyển về**: chọn kho nhận thành phẩm.
7. **Ghi chú**: tuỳ chọn.

Mẹo:
- Chuột phải vào ô của dòng ở cột **Hàng hóa**, **Y/c**, **Số mặt**, **Số lượng**, **Kho chuyển về**, **Ghi chú** → **Áp dụng cho những dòng dưới** để chép giá trị xuống các dòng bên dưới.
- Nút **Nhân đôi** ở cột **Thao tác** chép nguyên dòng ngay bên dưới, chỉ cần sửa chỗ khác.
- Kéo biểu tượng đầu dòng để đổi thứ tự dòng.

![Hình 2: Bảng chi tiết kéo sang phải – Số mặt, Thành phẩm, Số lượng](/posts/2026-11-07-bh-a02-1-huong-dan-lap-phieu-dat-hang-san-xuat/hinh-02-bang-yeu-cau-san-xuat.png)

- **Số mặt, Số mặt TP**: Ý nghĩa: Số mặt gia công và số mặt của thành phẩm
- **Thành phẩm**: Ý nghĩa: Tên thành phẩm tự ghép
- **Số lượng**: Ý nghĩa: Số lượng đặt

![Hình 3: Bảng chi tiết kéo hết sang phải – cột số lượng theo dõi, kho, ghi chú](/posts/2026-11-07-bh-a02-1-huong-dan-lap-phieu-dat-hang-san-xuat/hinh-03-bang-cot-so-luong.png)

- **SL đã lên y/c, SL tất toán, SL đã nhập**: Ý nghĩa: Chỉ xem, bằng 0 khi mới lập
- **Kho chuyển về, Ghi chú**: Ý nghĩa: Chọn kho nhận thành phẩm; ghi chú dòng

### Bước 4 – Bấm Lưu lại

Bấm **Lưu lại** ⑫.

- Thiếu thông tin chung: danh sách lỗi hiện dưới cửa sổ và ô thiếu có viền đỏ: **Vui lòng chọn Khách hàng**, **Vui lòng chọn nhân viên kinh doanh**.
- Dòng thiếu thông tin: cảnh báo **<số dòng>. Vui lòng chọn yêu cầu.** / **Vui lòng chọn số mặt.** / **Vui lòng chọn số mặt thành phẩm.** / **Vui lòng nhập số lượng.** / **Vui lòng chọn kho chuyển về.**
- Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại. Phiếu ở trạng thái **Chờ**.

### Bước 5 – Kiểm tra phiếu đã lưu và kích hoạt để chuyển sản xuất

Mở **Xem lại** phiếu vừa lưu, đối chiếu khách, ngày nhận, từng hàng trơn, yêu cầu gia công, số mặt, thành phẩm, đơn vị tính, số lượng và kho chuyển về với yêu cầu khách. Nếu ngày nhận bị trả về giá trị khác, báo người phụ trách xử lý trước khi chuyển sản xuất.

Ở danh sách, chuột phải vào phiếu → **Kích hoạt** ([TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-0-tong-quan-man-hinh-phieu-dat-hang/)).

### Sửa phiếu

Bấm **Sửa** → cửa sổ **CẬP NHẬT - PHIẾU ĐẶT HÀNG**. Sửa được thông tin chung và các dòng. Khi lưu, hệ thống ghi lại toàn bộ bảng chi tiết, nên **chỉ sửa được khi chưa có dòng nào được lên yêu cầu sản xuất** (xem phần “Những điều cần lưu ý”).

## 6. Giải thích các thông tin trên màn hình

- **Ngày đặt hàng**: Ý nghĩa: Ngày lập phiếu; Lưu ý: Hôm nay, không sửa
- **Khách hàng**: Ý nghĩa: Khách đặt hàng; Bắt buộc: Có
- **Nợ cũ**: Ý nghĩa: Công nợ phải thu của khách; Lưu ý: Tự tính, chỉ xem
- **Ngày nhận hàng**: Ý nghĩa: Ngày dự kiến giao; Bắt buộc: Không
- **Địa chỉ giao**: Ý nghĩa: Nơi giao hàng; Bắt buộc: Không; Lưu ý: Tự lấy địa chỉ khách, sửa được
- **Điện thoại**: Ý nghĩa: SĐT khách; Lưu ý: Tự điền
- **Mã phiếu**: Ý nghĩa: Mã phiếu đặt hàng; Lưu ý: Tự tạo khi lưu
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu; Bắt buộc: Không
- **N/v kinh doanh**: Ý nghĩa: Người phụ trách; Bắt buộc: Có
- **Hàng hóa**: Ý nghĩa: Hàng trơn / thành phẩm làm nền; Bắt buộc: Có (mỗi dòng)
- **Y/c**: Ý nghĩa: Yêu cầu gia công (định mức); Bắt buộc: Có; Lưu ý: Chọn nhiều được
- **Số mặt**: Ý nghĩa: Số mặt gia công; Bắt buộc: Có
- **Số mặt TP**: Ý nghĩa: Số mặt của thành phẩm; Bắt buộc: Có; Lưu ý: Mặc định = Số mặt
- **Thành phẩm**: Ý nghĩa: Tên thành phẩm sẽ tạo; Lưu ý: Tự ghép; mã thành phẩm tạo khi lưu
- **Số lượng**: Ý nghĩa: Số lượng đặt; Bắt buộc: Có; Lưu ý: > 0
- **Kho chuyển về**: Ý nghĩa: Kho nhận thành phẩm; Bắt buộc: Có
- **SL đã lên y/c**: Ý nghĩa: Đã chuyển thành yêu cầu sản xuất; Lưu ý: Chỉ xem
- **SL tất toán**: Ý nghĩa: Số lượng đã tất toán; Lưu ý: Nhập ở [HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-3-huong-dan-tat-toan-phieu-dat-hang/)
- **SL đã nhập**: Ý nghĩa: Thành phẩm đã nhập kho; Lưu ý: Chỉ xem

## 7. Kiểm tra sau khi thực hiện

- Phiếu được lưu với mã tự động, trạng thái **Chờ**, **Trạng thái SX** = **Chưa lên kế hoạch**.
- Mỗi dòng có một **thành phẩm** trong danh mục hàng hoá (tạo mới nếu chưa có), kèm định mức nguyên liệu / chi phí / nhân lực lấy theo yêu cầu gia công.
- Tồn kho và công nợ khách **chưa** thay đổi.

## 8. Những điều cần lưu ý

⚠️ **Kiểm tra cột Thành phẩm trước khi lưu.** Tên thành phẩm ghép từ hàng trơn + yêu cầu + số mặt TP; chọn sai yêu cầu sẽ tạo sai thành phẩm cho sản xuất.

⚠️ Mỗi lần **Sửa**, hệ thống xoá và ghi lại toàn bộ dòng. Nếu sản xuất đã lên yêu cầu cho phiếu hoặc thành phẩm đã bán, lưu sẽ bị từ chối. Phần không làm tiếp dùng **Tất toán** ([HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-3-huong-dan-tat-toan-phieu-dat-hang/)).

⚠️ Phiếu mới ở trạng thái **Chờ**; nhớ **Kích hoạt**.

⚠️ Bấm **Đóng** không hỏi lại; dữ liệu đang nhập bị mất.

### Bảng chi tiết bị mờ, không nhập được 

Nguyên nhân: chưa chọn **KHÁCH HÀNG**.
Cách xử lý: chọn khách trước.

### "<số dòng>. Vui lòng chọn yêu cầu." / "Vui lòng chọn số mặt." / "Vui lòng chọn số mặt thành phẩm." / "Vui lòng nhập số lượng." / "Vui lòng chọn kho chuyển về." 

Nguyên nhân: dòng được báo thiếu thông tin.
Cách xử lý: bổ sung ô tương ứng ở dòng đó.

### "CẢNH BÁO – Lỗi Thêm: Vui lòng chọn kho chuyển về." 

Nguyên nhân: máy chủ kiểm tra lại và thấy dòng chưa có kho chuyển về.
Cách xử lý: chọn **Kho chuyển về** cho mọi dòng.

### "CẢNH BÁO – Lỗi sửa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: phiếu đã được lên yêu cầu sản xuất hoặc thành phẩm đã lên phiếu bán hàng.
Cách xử lý: không sửa; dùng **Tất toán** hoặc liên hệ bộ phận kế hoạch.

## 10. Câu hỏi thường gặp

**Khách đặt hàng có sẵn trong kho thì có cần phiếu đặt hàng không?**
Không. Lập thẳng phiếu bán hàng ([HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/)).

**Tại sao cột Thành phẩm trống?**
Chưa đủ **Hàng hóa**, **Y/c** và **Số mặt TP** ở dòng đó.

**NGÀY ĐẶT HÀNG có đổi được không?**
Không. Hệ thống lấy ngày lập phiếu.

## 11. Công việc tiếp theo

```text
Lập phiếu đặt hàng
        ↓
Kích hoạt (BH-A02.0)
        ↓
(Sản xuất) lên kế hoạch, gia công, nhập kho thành phẩm
        ↓
Phiếu bán hàng → TỪ PHIẾU ĐẶT HÀNG (BH-A03.2) → xuất kho bán
```

**Tiếp theo:** [HƯỚNG DẪN IN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-4-huong-dan-in-phieu-dat-hang/) – Hướng dẫn in phiếu đặt hàng; [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a03-2-huong-dan-lap-phieu-ban-hang-tu-phieu-dat-hang/) – Hướng dẫn lập phiếu bán hàng từ phiếu đặt hàng.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-0-tong-quan-man-hinh-phieu-dat-hang/) – Tổng quan màn hình Phiếu đặt hàng
- [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU ĐẶT HÀNG TỪ EXCEL](/bai-viet/2026-11-07-bh-a02-2-huong-dan-nhap-chi-tiet-phieu-dat-hang-tu-excel/) – Hướng dẫn nhập chi tiết phiếu đặt hàng từ Excel
- [HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-3-huong-dan-tat-toan-phieu-dat-hang/) – Hướng dẫn tất toán phiếu đặt hàng
- [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a03-2-huong-dan-lap-phieu-ban-hang-tu-phieu-dat-hang/) – Hướng dẫn lập phiếu bán hàng từ phiếu đặt hàng
- Sổ tay Thiết lập danh mục – Hàng hoá, Định mức gia công, Số mặt
- Sổ tay Sản xuất – Lên kế hoạch / yêu cầu gia công
