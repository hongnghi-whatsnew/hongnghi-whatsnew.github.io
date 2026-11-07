---
title: "HƯỚNG DẪN LẬP PHIẾU CẤN TRỪ"
date: "2026-11-07"
summary: "Bài này hướng dẫn lập 6 loại phiếu cấn trừ: - Hai đối tượng: Khách hàng - Nhà cung cấp, Khách hàng - Đơn vị gia công, Đơn vị gia công - Nhà cung cấp – bù trừ khoản phải thu với khoản phải trả của cùng một đối tác."
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

Bài này hướng dẫn lập 6 loại phiếu cấn trừ:

- **Hai đối tượng**: **Khách hàng - Nhà cung cấp**, **Khách hàng - Đơn vị gia công**, **Đơn vị gia công - Nhà cung cấp** – bù trừ khoản phải thu với khoản phải trả của cùng một đối tác.
- **Một đối tượng**: **Khách hàng**, **Nhà cung cấp**, **Đơn vị gia công** – giảm công nợ không qua quỹ.

cửa sổ chỉ có một ô **SỐ TIỀN**: số này được trừ vào công nợ của **từng** đối tượng trên phiếu. Bài cũng áp dụng khi **Sửa** phiếu (cửa sổ **CẬP NHẬT - PHIẾU CẤN TRỪ**).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** màn hình **Phiếu cấn trừ**.
- **Ngày cấn trừ** thuộc kỳ kế toán chưa khóa ([TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/)).
- Đã đối chiếu công nợ với đối tác (thống kê công nợ phần C) và thống nhất số tiền cấn trừ.
- Danh mục **Nội dung thu chi** có nội dung dùng cho cấn trừ.

## 2. Mở chức năng

**Kế toán → Phiếu cấn trừ → Thêm mới → chọn loại**

## 3. Nhận biết màn hình

![Hình 1: cửa sổ THÊM MỚI - PHIẾU CẤN TRỪ loại Khách hàng - Nhà cung cấp](/posts/2026-11-07-kt-a05-1-huong-dan-lap-phieu-can-tru/hinh-01-form-can-tru-khach-hang-nha-cung-cap.png)

- **KHÁCH HÀNG**: Ý nghĩa: Bắt buộc. Ô hiện *id, mã khách, tên rút gọn, tên khách* (ví dụ *8280, KH000021, …*)
- **NỢ CŨ (cạnh khách hàng)**: Ý nghĩa: Công nợ khách trước phiếu, chỉ xem
- **NHÀ CUNG CẤP**: Ý nghĩa: Bắt buộc
- **NỢ CŨ (cạnh NCC)**: Ý nghĩa: Công nợ NCC trước phiếu, chỉ xem
- **NGÀY CẤN TRỪ**: Ý nghĩa: Bắt buộc. Mặc định hôm nay
- **NỘI DUNG**: Ý nghĩa: Bắt buộc. Nội dung thu chi, hiện *mã, tên* (ví dụ *CANTRUCONGNO, CẤN TRỪ CÔNG NỢ*)
- **SỐ TIỀN**: Ý nghĩa: Số tiền trừ vào công nợ mỗi đối tượng
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **GHI CHÚ**: Ý nghĩa: Lý do, số biên bản cấn trừ
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Ô đối tượng hiện theo loại phiếu:**

- **Khách hàng - Nhà cung cấp**: Ô hiện: **KHÁCH HÀNG** + **NỢ CŨ**, **NHÀ CUNG CẤP** + **NỢ CŨ**; Bắt buộc: Khách hàng, NCC
- **Khách hàng - Đơn vị gia công**: Ô hiện: **KHÁCH HÀNG** + **NỢ CŨ**, **ĐƠN VỊ GIA CÔNG**, **N.NHÂN LỰC** + **NỢ CŨ**; Bắt buộc: Khách hàng, ĐVGC
- **Đơn vị gia công - Nhà cung cấp**: Ô hiện: **NHÀ CUNG CẤP** + **NỢ CŨ**, **ĐƠN VỊ GIA CÔNG**, **N.NHÂN LỰC** + **NỢ CŨ**; Bắt buộc: NCC, ĐVGC
- **Khách hàng**: Ô hiện: **KHÁCH HÀNG** + **NỢ CŨ**; Bắt buộc: Khách hàng
- **Nhà cung cấp**: Ô hiện: **NHÀ CUNG CẤP** + **NỢ CŨ**; Bắt buộc: NCC
- **Đơn vị gia công**: Ô hiện: **ĐƠN VỊ GIA CÔNG**, **N.NHÂN LỰC** + **NỢ CŨ**; Bắt buộc: ĐVGC

**N.NHÂN LỰC** (nguồn nhân lực) không bắt buộc; nếu chọn, công nợ nguồn nhân lực cũng giảm **SỐ TIỀN**. **NỢ CŨ** cạnh ĐVGC là công nợ của đơn vị gia công.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kế toán
   ↓
Phiếu cấn trừ
   ↓
Thêm mới ──► chọn loại cấn trừ
```

```text
Đối chiếu công nợ hai bên (KT-C05.0 / KT-C06.0 / KT-C02.0)
      ↓
Phiếu cấn trừ → Thêm mới → chọn loại
      ↓
Chọn đối tượng → xem NỢ CŨ từng bên
      ↓
Nhập Ngày cấn trừ, Nội dung, Số tiền, Ghi chú
      ↓
Lưu lại ── báo đỏ / cảnh báo? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → công nợ MỖI đối tượng giảm Số tiền · quỹ không đổi
      ↓
In phiếu cấn trừ cho hai bên ký (KT-A05.2)
```

### Bước 1 – Mở cửa sổ thêm mới

Vào **Kế toán → Phiếu cấn trừ**, bấm **Thêm mới** → chọn loại (ví dụ **Khách hàng - Nhà cung cấp**). cửa sổ **THÊM MỚI - PHIẾU CẤN TRỪ** mở ra (Hình 1).

### Bước 2 – Chọn đối tượng

Gõ mã / tên vào từng ô đối tượng rồi chọn. Sau mỗi lần chọn, ô **NỢ CŨ** bên cạnh hiện công nợ hiện tại của đối tượng đó.

- Loại có **ĐƠN VỊ GIA CÔNG**: chọn thêm **N.NHÂN LỰC** nếu khoản cấn trừ gắn với nguồn nhân lực.

### Bước 3 – Nhập số tiền và thông tin phiếu

- **NGÀY CẤN TRỪ**: ngày lập biên bản cấn trừ.
- **NỘI DUNG**: chọn nội dung cấn trừ.
- **SỐ TIỀN**: số tiền bù trừ. Với loại hai đối tượng, thường lấy **số nhỏ hơn** của hai ô **NỢ CŨ**. Hệ thống không tự đề xuất và không kiểm tra số này.
- **GHI CHÚ**: ghi số biên bản / lý do.

### Bước 4 – Bấm Lưu lại

Bấm **Lưu lại**.

- Thiếu thông tin: ô thiếu có viền đỏ, lời nhắc hiện dưới ô và trong danh sách lỗi cuối cửa sổ: **Vui lòng chọn khách hàng**, **Vui lòng chọn nhà cung cấp**, **Vui lòng chọn đơn vị gia công**, **Chọn ngày cấn trừ**, **Vui lòng chọn nội dung**.
- Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại.
- Hiện toast **CẢNH BÁO Lỗi thêm: Đã xảy ra lỗi trong quá trình xử lý…**: phiếu **chưa được lưu**, công nợ không đổi — xem phần “Vướng mắc thường gặp”.

### Bước 5 – Kiểm tra

Mở thống kê công nợ của từng đối tượng ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/), [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NHÀ CUNG CẤP](/bai-viet/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/), [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ GIA CÔNG](/bai-viet/2026-11-07-kt-c02-0-tong-quan-man-hinh-thong-ke-cong-no-gia-cong/), [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NGUỒN NHÂN LỰC](/bai-viet/2026-11-07-kt-c01-0-tong-quan-man-hinh-thong-ke-cong-no-nguon-nhan-luc/)): công nợ đã giảm **SỐ TIỀN**; dòng chi tiết có phiếu **CT…**.

### Sửa phiếu

Bấm **Sửa** → cửa sổ **CẬP NHẬT - PHIẾU CẤN TRỪ**. Các ô đối tượng **bị khoá** – chỉ sửa được **NGÀY CẤN TRỪ**, **NỘI DUNG**, **SỐ TIỀN**, **GHI CHÚ**. Khi lưu, hệ thống cộng lại số cũ rồi trừ số mới vào công nợ. Chọn sai đối tượng: xoá phiếu và lập lại.

## 6. Giải thích các thông tin trên màn hình

- **Khách hàng**: Ý nghĩa: Khách bị trừ công nợ phải thu; Bắt buộc: Có (loại có khách hàng); Lưu ý: Công nợ khách giảm Số tiền. Không đổi được khi sửa
- **Nhà cung cấp**: Ý nghĩa: NCC bị trừ công nợ phải trả; Bắt buộc: Có (loại có NCC); Lưu ý: Công nợ NCC giảm Số tiền. Không đổi được khi sửa
- **Đơn vị gia công**: Ý nghĩa: ĐVGC bị trừ công nợ; Bắt buộc: Có (loại có ĐVGC); Lưu ý: Công nợ ĐVGC giảm Số tiền. Không đổi được khi sửa
- **N.nhân lực**: Ý nghĩa: Nguồn nhân lực gắn với ĐVGC; Bắt buộc: Không; Lưu ý: Nếu chọn, công nợ nguồn nhân lực giảm Số tiền
- **Nợ cũ**: Ý nghĩa: Công nợ hiện tại của từng đối tượng; Lưu ý: Tự tính, chỉ xem
- **Ngày cấn trừ**: Ý nghĩa: Ngày bù trừ; Bắt buộc: Có; Lưu ý: Kiểm tra khoá sổ; ngày ghi sổ cái
- **Nội dung**: Ý nghĩa: Nội dung thu chi; Bắt buộc: Có; Lưu ý: Thống kê Nội dung thu chi ([TỔNG QUAN MÀN HÌNH THỐNG KÊ NỘI DUNG THU CHI](/bai-viet/2026-11-07-kt-b01-0-tong-quan-man-hinh-thong-ke-noi-dung-thu-chi/))
- **Số tiền**: Ý nghĩa: Số tiền bù trừ; Bắt buộc: Nên nhập; Lưu ý: Trừ vào **mỗi** đối tượng; không kiểm tra vượt nợ
- **Mã phiếu**: Ý nghĩa: Mã phiếu cấn trừ; Lưu ý: Tự tạo khi lưu (CT + 8 chữ số)
- **Ghi chú**: Ý nghĩa: Lý do, số biên bản; Bắt buộc: Không

## 7. Kiểm tra sau khi thực hiện

- Phiếu cấn trừ được lưu với mã tự động, hiện ở **PHIẾU CẤN TRỪ - DANH SÁCH**.
- Công nợ của **mỗi** đối tượng trên phiếu giảm **Số tiền**. Tồn quỹ không đổi.
- Sổ cái chưa đổi; khi chạy hạch toán tự động phiếu ghi Nợ 331 / Có 131 theo **Ngày cấn trừ** ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/)).

## 8. Những điều cần lưu ý

⚠️ **Chọn đúng loại và đúng đối tượng ngay từ đầu** – không đổi được khi sửa.

⚠️ **Số tiền không nên vượt NỢ CŨ nhỏ hơn.** Vượt thì một bên sẽ bị âm công nợ (công ty thành nợ ngược đối tác). Hệ thống không chặn.

⚠️ Ô **NỢ CŨ** là công nợ **hiện tại**, không phải tại **Ngày cấn trừ**. Lập phiếu lùi ngày thì đối chiếu thêm ở thống kê công nợ.

⚠️ Phiếu một đối tượng giảm công nợ mà không có tiền – chỉ lập khi đã được duyệt, ghi rõ lý do ở **GHI CHÚ**.

### Dưới cửa sổ báo "Vui lòng chọn khách hàng" / "Vui lòng chọn nhà cung cấp" / "Vui lòng chọn đơn vị gia công" 

Nguyên nhân: chưa chọn đối tượng bắt buộc của loại phiếu.
Cách xử lý: chọn đối tượng.

### Dưới cửa sổ báo "Chọn ngày cấn trừ" / "Vui lòng chọn nội dung" 

Nguyên nhân: thiếu trường bắt buộc.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "CẢNH BÁO – Lỗi thêm: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **Ngày cấn trừ** thuộc kỳ đã khóa. Khi sửa, câu báo bắt đầu bằng **Lỗi sửa**.
Cách xử lý: kiểm tra ngày thực tế. Nếu ngày đúng thuộc kỳ đã khóa, giữ ngày đó và báo kế toán trưởng xử lý mở kỳ theo [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/); không đổi ngày chỉ để vượt khóa.

### Chọn sai khách hàng / NCC sau khi đã lưu 

Nguyên nhân: ô đối tượng bị khoá khi sửa.
Cách xử lý: xoá phiếu (chỉ người tạo xoá được) rồi lập lại.

### "CẢNH BÁO Lỗi thêm: Đã xảy ra lỗi trong quá trình xử lý. Vui lòng thử lại hoặc liên hệ quản trị hệ thống." (Lỗi hệ thống)

Nguyên nhân: hệ thống không ghi được phiếu (đã gặp ngày 12/10/2026 với mọi loại phiếu cấn trừ, dù cửa sổ nhập đủ và đúng). Phiếu **không** được lưu, công nợ không đổi.
Cách xử lý: không bấm **Lưu lại** lặp lại nhiều lần; chụp màn hình cửa sổ và báo IT ([LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/)). Nếu cần chốt công nợ gấp, ghi lại biên bản cấn trừ và lập phiếu sau khi IT báo đã sửa.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**NỢ CŨ khách 50 triệu, NỢ CŨ NCC 30 triệu, cấn trừ bao nhiêu?**
30 triệu (số nhỏ hơn). Sau phiếu: khách còn nợ 20 triệu, NCC còn 0.

**NỢ CŨ âm nghĩa là gì?**
Khách hàng âm: khách đang trả thừa. NCC / ĐVGC âm: công ty đang trả thừa cho đối tác.

**Có cấn trừ một khách hàng với hai NCC trong một phiếu được không?**
Không. Mỗi phiếu tối đa hai đối tượng; lập nhiều phiếu.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN IN PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-2-huong-dan-in-phieu-can-tru/) – Hướng dẫn in phiếu cấn trừ.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-0-tong-quan-man-hinh-phieu-can-tru/) – Tổng quan màn hình Phiếu cấn trừ
- [HƯỚNG DẪN IN PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-2-huong-dan-in-phieu-can-tru/) – Hướng dẫn in phiếu cấn trừ
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NGUỒN NHÂN LỰC](/bai-viet/2026-11-07-kt-c01-0-tong-quan-man-hinh-thong-ke-cong-no-nguon-nhan-luc/), [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ GIA CÔNG](/bai-viet/2026-11-07-kt-c02-0-tong-quan-man-hinh-thong-ke-cong-no-gia-cong/), [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NHÀ CUNG CẤP](/bai-viet/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/), [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/) – Thống kê công nợ
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ NỘI DUNG THU CHI](/bai-viet/2026-11-07-kt-b01-0-tong-quan-man-hinh-thong-ke-noi-dung-thu-chi/) – Thống kê Nội dung thu chi
- Sổ tay Thiết lập danh mục – Nội dung thu chi; Khách hàng; Nhà cung cấp; Đơn vị gia công
