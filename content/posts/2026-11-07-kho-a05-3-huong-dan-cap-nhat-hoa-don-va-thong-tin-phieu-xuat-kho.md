---
title: "HƯỚNG DẪN CẬP NHẬT HOÁ ĐƠN VÀ THÔNG TIN PHIẾU XUẤT KHO"
date: "2026-11-07"
summary: "Sau khi hàng đã xuất, một số thông tin thường được bổ sung sau: số hoá đơn (kế toán xuất hoá đơn sau), mã phiếu gốc, số ngày nợ, xe và tài xế thực tế, thứ tự ưu tiên thanh toán."
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

Sau khi hàng đã xuất, một số thông tin thường được bổ sung sau: **số hoá đơn** (kế toán xuất hoá đơn sau), **mã phiếu gốc**, **số ngày nợ**, **xe và tài xế** thực tế, **thứ tự ưu tiên thanh toán**. Các chức năng trong bài này cập nhật nhanh những thông tin đó **mà không đụng tới số lượng hàng**, nên **không làm thay đổi tồn kho**.

Bài cũng hướng dẫn **gửi email phiếu xuất kho cho khách**.

- **Sửa hóa đơn**: Mở từ: Liên kết ở cột **Thao tác**; Thay đổi: **Số HĐ**, **Chú thích**, **Chú thích nội bộ** từng dòng
- **Cập nhật hoá đơn**: Mở từ: Tick dòng + chuột phải; Thay đổi: Một số hoá đơn cho **mọi dòng** của phiếu
- **Cập nhật mã phiếu gốc**: Mở từ: Tick dòng + chuột phải; Thay đổi: Mã phiếu gốc
- **Cập nhật số ngày nợ**: Mở từ: Tick dòng + chuột phải; Thay đổi: Số ngày nợ → Ngày đến hạn, Số ngày quá hạn
- **Cập nhật xe và tài xế**: Mở từ: Tick dòng + chuột phải; Thay đổi: Xe, tài xế
- **Cập nhật ưu tiên t.toán**: Mở từ: Tick dòng + chuột phải; Thay đổi: Cột **TT.Ưu tiên** (0 → 3)
- **Gửi mail cho khách**: Mở từ: Tick dòng + chuột phải; Thay đổi: Gửi email, đánh dấu **Gửi Email**

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Cập nhật** của màn hình **Phiếu xuất kho**.
- Phiếu xuất kho đã lưu.
- (Gửi mail) Người nhận của phiếu có **email** và phiếu chưa gửi.

## 2. Mở chức năng

**Kho hàng → Phiếu xuất kho → dòng phiếu → Sửa hóa đơn / tick ô đầu dòng → chuột phải → Cập nhật …**

## 3. Nhận biết màn hình

**cửa sổ CẬP NHẬT HÓA ĐƠN PHIẾU XUẤT KHO (liên kết Sửa hóa đơn):**

![Hình 1: cửa sổ CẬP NHẬT HÓA ĐƠN PHIẾU XUẤT KHO](/posts/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/hinh-01-form-cap-nhat-hoa-don.png)

- **Thông tin chung**: Ý nghĩa: Hiện như phiếu; sửa ở đây **không được lưu**
- **Cột Số HĐ**: Ý nghĩa: **Nhập** số hoá đơn từng dòng
- **–**: Thành phần: Cột **Chú thích**, **Chú thích nội bộ**; Ý nghĩa: Sửa được, được lưu cùng Số HĐ. Không có trong Hình 1 – nằm bên phải, kéo thanh cuộn ngang
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Hộp thoại nhập nhanh (Cập nhật hoá đơn / mã phiếu gốc / số ngày nợ / ưu tiên):**

![Hình 2: Hộp thoại CẬP NHẬT HOÁ ĐƠN](/posts/2026-11-07-kho-a05-3-huong-dan-cap-nhat-hoa-don-va-thong-tin-phieu-xuat-kho/hinh-02-hop-thoai-cap-nhat-hoa-don.png)

- **Tiêu đề**: Ý nghĩa: **CẬP NHẬT HOÁ ĐƠN** (Hình 2) / **CẬP NHẬT MÃ PHIẾU GỐC** / **CẬP NHẬT SỐ NGÀY NỢ** / **CẬP NHẬT ƯU TIÊN T.TOÁN**
- **Mã phiếu**: Ý nghĩa: Mã phiếu xuất đang sửa (Hình 2: **XK00113306**)
- **Ô nhập**: Ý nghĩa: Giá trị hiện tại (trống nếu chưa có), sửa thành giá trị mới
- **Đồng ý / Hủy**: Ý nghĩa: Lưu / bỏ

**Hộp thoại CẬP NHẬT: <mã phiếu> (xe và tài xế):** hai ô **TÀI XẾ**, **XE** và nút **Đồng ý** / **Hủy**.

**Menu chuột phải** (thử 11/10/2026, phiếu xuất bán, chi nhánh Hồng Nghi – xem Hình 1 của [HƯỚNG DẪN IN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-4-huong-dan-in-phieu-xuat-kho/)): **Xem lại**, **Cập nhật ưu tiên t.toán**, **Cập nhật hoá đơn**, **Cập nhật mã phiếu gốc**, **Cập nhật số ngày nợ**, **Cập nhật xe và tài xế**, các mục **In phiếu ( …)** ([HƯỚNG DẪN IN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-4-huong-dan-in-phieu-xuat-kho/)), **File đính kèm**. Mục **Gửi mail cho khách** chỉ có khi người nhận có email và phiếu chưa gửi.

⚠️ **Menu chuột phải chỉ hiện khi đã tick chọn dòng.** Chuột phải vào dòng chưa tick thì không có menu (lỗi phần mềm, đã báo IT). Luôn **tick ô đầu dòng của đúng phiếu cần thao tác** (chỉ tick một dòng) rồi mới chuột phải vào chính dòng đó.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kho hàng
   ↓
Phiếu xuất kho
   ↓
Dòng phiếu ──► Sửa hóa đơn (cột Thao tác)
           └─► tick ô đầu dòng → chuột phải → Cập nhật … / Gửi mail cho khách
```

```text
Phiếu xuất kho đã lưu
   ├── Sửa hóa đơn ──► nhập Số HĐ từng dòng ──► Lưu lại
   ├── Chuột phải → Cập nhật hoá đơn ──► 1 số cho mọi dòng ──► Đồng ý
   ├── Chuột phải → Cập nhật mã phiếu gốc / số ngày nợ ──► Đồng ý
   ├── Chuột phải → Cập nhật xe và tài xế ──► chọn ──► Đồng ý
   ├── Chuột phải → Cập nhật ưu tiên t.toán ──► 0 … 3 ──► Đồng ý
   └── Chuột phải → Gửi mail cho khách ──► "Đã gửi mail thành công"
      ↓
"Cập nhật thành công" / "Lưu thành công" → danh sách tải lại
```

### A. Ghi số hoá đơn từng dòng (Sửa hóa đơn)

**Bước 1 –** Ở dòng phiếu, bấm **Sửa hóa đơn** (cột **Thao tác**). cửa sổ **CẬP NHẬT HÓA ĐƠN PHIẾU XUẤT KHO** mở ra (Hình 1).

**Bước 2 –** Bấm vào ô **Số HĐ** từng dòng, nhập số hoá đơn. Cùng một số cho nhiều dòng: nhập ở dòng đầu, chuột phải vào ô → **Áp dụng cho những dòng dưới**.

**Bước 3 –** (Tuỳ chọn) sửa **Chú thích**, **Chú thích nội bộ**.

**Bước 4 –** Bấm **Lưu lại**. Hệ thống báo **Lưu thành công**; cột **Số hóa đơn** trên danh sách hiện các số hoá đơn của phiếu.

⚠️ Ở cửa sổ này chỉ **Số HĐ**, **Chú thích**, **Chú thích nội bộ** được lưu. Sửa ngày, người nhận… trên cửa sổ sẽ **không** được lưu – dùng **Sửa** nếu cần.

⚠️ Bảng chỉ thấy **STT**, **Số HĐ**, **Số PO**, **Hàng hóa**, **Tên in**, **Thao tác** (Hình 1); cột **Chú thích**, **Chú thích nội bộ** ở bên phải – kéo thanh cuộn ngang. Bảng lưu bố cục cột theo người dùng: không thấy cột **Số HĐ** thì **chuột phải tiêu đề cột → Khôi phục bố cục**.

⚠️ Các mục B – G dùng **menu chuột phải**: phải **tick ô đầu dòng** của phiếu trước, chuột phải vào dòng chưa tick sẽ không có menu (lỗi phần mềm – trước đây tưởng nhầm là "phiếu xuất trả không có menu chuột phải"). **Sửa hóa đơn** (mục A) không cần tick.

### B. Ghi một số hoá đơn cho cả phiếu (Cập nhật hoá đơn)

**Bước 1 –** Tick ô đầu dòng phiếu, chuột phải vào dòng đó → **Cập nhật hoá đơn**.

**Bước 2 –** Hộp thoại **CẬP NHẬT HOÁ ĐƠN** (Hình 2) hiện mã phiếu; nhập số hoá đơn.

**Bước 3 –** Bấm **Đồng ý**. Hệ thống ghi số này vào **Số HĐ của mọi dòng** và báo **Cập nhật thành công**.

### C. Cập nhật mã phiếu gốc

Tick ô đầu dòng phiếu → chuột phải → **Cập nhật mã phiếu gốc** → nhập mã mới → **Đồng ý** → **Cập nhật thành công**.

### D. Cập nhật số ngày nợ

Tick ô đầu dòng phiếu → chuột phải → **Cập nhật số ngày nợ** → nhập số ngày (ví dụ *30*) → **Đồng ý**. Cột **Thời hạn nợ**, **Ngày đến hạn** (= ngày xuất + số ngày nợ) và **Số ngày quá hạn** tính lại theo số mới.

### E. Cập nhật xe và tài xế

**Bước 1 –** Tick ô đầu dòng phiếu → chuột phải → **Cập nhật xe và tài xế**. Hộp thoại **CẬP NHẬT: <mã phiếu>** mở ra với xe, tài xế hiện tại.

**Bước 2 –** Chọn **TÀI XẾ**, **XE** đúng thực tế.

**Bước 3 –** Bấm **Đồng ý**. Đổi được: **Cập nhật thành công**. Không đổi gì: **Thông tin chưa thay đổi**.

### F. Cập nhật ưu tiên thanh toán

Tick ô đầu dòng phiếu → chuột phải → **Cập nhật ưu tiên t.toán** → nhập số từ **0** đến **3** → **Đồng ý**. Cột **TT.Ưu tiên** được dùng ở thống kê **Công nợ quá hạn** (sổ tay Kế toán).

### G. Gửi email phiếu cho khách

**Bước 1 –** Tick ô đầu dòng phiếu, chuột phải vào dòng → **Gửi mail cho khách** (chỉ hiện khi người nhận có email và cột **Gửi Email** chưa đánh dấu).

**Bước 2 –** Hệ thống gửi ngay, báo **Đã gửi mail thành công**; cột **Gửi Email** được đánh dấu và mục menu này ẩn đi.

## 6. Giải thích các thông tin trên màn hình

- **Số HĐ**: Ý nghĩa: Số hoá đơn của dòng hàng; Bắt buộc: Không; Lưu ý: Danh sách ghép các Số HĐ khác nhau ở cột **Số hóa đơn**
- **Chú thích / Chú thích nội bộ**: Ý nghĩa: Ghi chú dòng; Bắt buộc: Không; Lưu ý: Lưu được qua **Sửa hóa đơn**
- **Mã phiếu gốc**: Ý nghĩa: Chứng từ tay / bên giao nhận; Lưu ý: Hộp thoại không cho để trống (bỏ trống thì không lưu)
- **Số ngày nợ**: Ý nghĩa: Số ngày được nợ; Lưu ý: Ngày đến hạn = ngày xuất + số ngày nợ
- **Tài xế, Xe**: Ý nghĩa: Phương tiện giao hàng; Bắt buộc: Có
- **Ưu tiên t.toán**: Ý nghĩa: Mức ưu tiên thu tiền; Lưu ý: Chỉ nhận 0 đến 3
- **Gửi Email**: Ý nghĩa: Đã gửi email phiếu; Lưu ý: Hệ thống tự đánh dấu

## 7. Kiểm tra sau khi thực hiện

- Thông tin được cập nhật, danh sách tải lại; mỗi lần cập nhật được ghi vào lịch sử phiếu.
- **Tồn kho, sổ cái kho, công nợ không thay đổi** (không đổi số lượng, giá).

## 8. Những điều cần lưu ý

⚠️ Cập nhật số ngày nợ thay đổi hạn thanh toán. Đối chiếu thỏa thuận đã duyệt; nếu giá trị hợp lệ là 0 nhưng hộp nhập không nhận, báo kế toán/IT, không nhập một số khác chỉ để lưu.

⚠️ **Cập nhật hoá đơn** ghi đè **Số HĐ của tất cả dòng** bằng một số. Phiếu có nhiều hoá đơn thì dùng **Sửa hóa đơn** để ghi từng dòng.

⚠️ Hộp thoại nhập nhanh **bỏ qua giá trị rỗng**: không xoá được mã phiếu gốc / số hoá đơn bằng cách để trống. Nhập **0** cho số ngày nợ cũng không được lưu.

⚠️ Các mục **Cập nhật …** luôn hiện trên menu; tài khoản thiếu quyền **Cập nhật** bấm vào sẽ bị báo không có quyền.

⚠️ Email gửi đến địa chỉ email của người nhận trên phiếu; kiểm tra email khách hàng trong danh mục trước khi gửi.

### Chuột phải vào phiếu không hiện menu (Lỗi hệ thống)

Nguyên nhân: chưa tick ô đầu dòng – menu chỉ hiện khi đã có dòng được chọn (lỗi phần mềm, đã báo IT).
Cách xử lý: tick ô đầu dòng của đúng phiếu cần sửa (một dòng), rồi chuột phải vào dòng đó.

### "CẢNH BÁO – Lỗi: Ưu tiên cho phép [ 0 -> 3 ]" 

Nguyên nhân: nhập mức ưu tiên ngoài 0–3.
Cách xử lý: nhập 0, 1, 2 hoặc 3.

### "Thông tin chưa thay đổi" 

Nguyên nhân: bấm **Đồng ý** khi xe và tài xế giữ nguyên.
Cách xử lý: chọn xe / tài xế khác hoặc bấm **Hủy**.

### "Gửi mail thất bại" (Lỗi hệ thống)

Nguyên nhân: máy chủ gửi thư lỗi hoặc email người nhận không hợp lệ.
Cách xử lý: kiểm tra email khách hàng; thử lại; báo IT nếu vẫn lỗi.

### Không thấy mục "Gửi mail cho khách" 

Nguyên nhân: người nhận không có email, hoặc phiếu đã gửi (cột **Gửi Email** đã đánh dấu).
Cách xử lý: bổ sung email khách hàng trong danh mục; phiếu đã gửi không gửi lại từ menu.

### Bấm Đồng ý nhưng không có gì thay đổi 

Nguyên nhân: ô nhập để trống (hoặc 0).
Cách xử lý: nhập giá trị cụ thể.

## 10. Câu hỏi thường gặp

**Sửa hóa đơn và Cập nhật hoá đơn khác gì nhau?**
**Sửa hóa đơn** ghi số hoá đơn riêng cho từng dòng (kèm chú thích). **Cập nhật hoá đơn** ghi một số cho mọi dòng.

**Cập nhật số ngày nợ có làm đổi công nợ không?**
Không đổi số tiền nợ, chỉ đổi ngày đến hạn và số ngày quá hạn.

**Gửi lại email lần hai được không?**
Menu chỉ hiện khi phiếu chưa gửi. Cần gửi lại thì liên hệ IT.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN IN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-4-huong-dan-in-phieu-xuat-kho/) – Hướng dẫn in phiếu xuất kho; sổ tay Kế toán – Phiếu thu, Công nợ quá hạn.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
- [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/) – Hướng dẫn lập phiếu xuất kho bán hàng
- [HƯỚNG DẪN IN PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-4-huong-dan-in-phieu-xuat-kho/) – Hướng dẫn in phiếu xuất kho
- Sổ tay Kế toán – Công nợ quá hạn ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ QUÁ HẠN](/bai-viet/2026-11-07-kt-c03-0-tong-quan-man-hinh-thong-ke-cong-no-qua-han/)), Công nợ khách hàng ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/))
