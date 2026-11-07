---
title: "TỔNG QUAN MÀN HÌNH CẤU HÌNH HẠCH TOÁN"
date: "2026-11-07"
summary: "Khi phiếu thu, phiếu chi, phiếu xuất kho (bán hàng) được ghi sổ kế toán, hệ thống tự chọn tài khoản để lập bút toán."
module: "Thiết lập danh mục"
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

Khi phiếu thu, phiếu chi, phiếu xuất kho (bán hàng) được ghi sổ kế toán, hệ thống **tự chọn tài khoản** để lập bút toán. Màn **Cấu hình hạch toán** (tiêu đề trên màn hình: **Cấu hình hạch toán (HTTK)**) cho bạn chọn các tài khoản này, ở ba tab:

- **Quỹ → TK tiền**: Cấu hình: Mỗi quỹ / tài khoản ngân hàng ứng với **một tài khoản sổ cái**; Dùng khi: Ghi sổ phiếu thu, phiếu chi: bên tiền
- **Nội dung thu/chi → TK**: Cấu hình: **Tài khoản ghi đè** cho từng nội dung thu chi; Dùng khi: Ghi sổ phiếu chi chi phí
- **Loại hàng → DT/Giá vốn**: Cấu hình: Cặp (**Loại hàng**, **Sở hữu**) → **TK doanh thu** và **TK giá vốn**; Dùng khi: Ghi sổ doanh thu, giá vốn khi xuất bán hàng

Cột **TK sổ cái** chọn từ **Hệ thống tài khoản** (TL-A10). Cấu hình chỉ tác động đến **chứng từ ghi sổ từ lúc cấu hình trở đi**, không tự sửa bút toán đã ghi sổ.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Cấu hình hạch toán**.
- **Hệ thống tài khoản** đã có các tài khoản chi tiết cần chọn (TL-A10).
- Quỹ / tài khoản (TL-A06) và **Nội dung thu chi** (TL-A04) đã khai báo: màn hiển thị toàn bộ các mục này để gán tài khoản.

## 2. Mở chức năng

**Thiết lập danh mục → Cấu hình hạch toán**

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

![Hình 1: Quỹ → TK tiền; tên quỹ và ngân hàng được che, không sửa mapping](/posts/2026-11-07-tl-a11-0-tong-quan-man-hinh-cau-hinh-hach-toan/hinh-01-tab-quy-tk-tien.png)

- **Ba nút chuyển tab**: Chức năng: **Quỹ → TK tiền**, **Nội dung thu/chi → TK**, **Loại hàng → DT/Giá vốn**
- **Lưới cấu hình**: Chức năng: Các dòng của tab đang chọn
- **Cột TK sổ cái**: Chức năng: Ô chọn tài khoản (sửa được khi có quyền **Cập nhật**)
- **Cột Áp dụng**: Chức năng: Ô tick bật / tắt dòng cấu hình
- **Trình chọn cột, Tìm kiếm…, dòng TỔNG CỘNG**: Chức năng: Công cụ lưới ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/))

**Tab Quỹ → TK tiền** (mỗi quỹ một dòng, kể cả quỹ chưa gán):

- **Mã quỹ, Tên quỹ, Ngân hàng**: Ý nghĩa: Thông tin quỹ (chỉ xem)
- **TK sổ cái**: Ý nghĩa: Tài khoản sổ cái của quỹ (sửa được)
- **Áp dụng**: Ý nghĩa: Bật / tắt cấu hình (sửa được)

**Tab Nội dung thu/chi → TK** (mỗi nội dung thu chi một dòng):

- **Mã, Nội dung thu/chi, Loại**: Ý nghĩa: Thông tin nội dung (chỉ xem)
- **TK mặc định**: Ý nghĩa: Tài khoản khai ở danh mục **Nội dung thu chi** (chỉ xem)
- **Khoản mục (hiện tại)**: Ý nghĩa: Khoản mục chi phí đã gắn (chỉ xem; màn này chưa cho sửa khoản mục)
- **Override TK sổ cái**: Ý nghĩa: Tài khoản ghi đè (sửa được)
- **Áp dụng**: Ý nghĩa: Bật / tắt ghi đè (sửa được)

**Tab Loại hàng → DT/Giá vốn**:

- **Loại hàng**: Ý nghĩa: `nguyenlieu`, `thanhpham`, `hangtron`, `dichvu`, `khac` hoặc `*` (mọi loại)
- **Sở hữu**: Ý nghĩa: `Company` (hàng của công ty), `Customer` (hàng của khách, gia công)
- **TK doanh thu, TK giá vốn**: Ý nghĩa: Hai tài khoản (bắt buộc)
- **Khoản mục DT, Khoản mục GV**: Ý nghĩa: Khoản mục báo cáo (chỉ xem)
- **Ưu tiên**: Ý nghĩa: Số nhỏ áp trước, mặc định 100
- **Áp dụng**: Ý nghĩa: Bật / tắt dòng

Dưới lưới tab này có dòng hướng dẫn: "Ưu tiên nhỏ = áp trước. Dùng `*` làm wildcard cho loại hàng/sở hữu."

![Hình 2: Nội dung thu/chi → TK; chỉ mở xem](/posts/2026-11-07-tl-a11-0-tong-quan-man-hinh-cau-hinh-hach-toan/hinh-02-tl-a11-thu-chi.png)

![Hình 3: Loại hàng → DT/Giá vốn; chỉ mở xem](/posts/2026-11-07-tl-a11-0-tong-quan-man-hinh-cau-hinh-hach-toan/hinh-03-tl-a11-loai-hang.png)

## 4. Trình tự công việc

```text
Hệ thống tài khoản (TL-A10) ──┐
Quỹ, tài khoản (TL-A06) ──────┤
Nội dung thu chi (TL-A04) ────┼──► Cấu hình hạch toán (TL-A11)
Loại hàng (TL-D05) ───────────┘          │
                                         ▼
          Phiếu thu / phiếu chi / phiếu xuất kho khi ghi sổ kế toán
          ──► tự chọn tài khoản theo cấu hình (không có thì dùng mặc định)
```

Thứ tự hệ thống tìm tài khoản (khi không có cấu hình, dùng mặc định):

- **Quỹ (tiền)**: Thứ tự tìm tài khoản: Cấu hình quỹ đang **Áp dụng** → nếu không: quỹ **không gắn ngân hàng** dùng 111 (tiền mặt), quỹ **gắn ngân hàng** dùng 112
- **Phiếu chi chi phí**: Thứ tự tìm tài khoản: Tài khoản sửa riêng trên dòng phiếu → **Override TK sổ cái** đang **Áp dụng** → **TK mặc định** của nội dung thu chi (chỉ nhận nếu là tài khoản chi tiết) → 811
- **Doanh thu bán hàng**: Thứ tự tìm tài khoản: Tài khoản sửa riêng → dòng khớp (**Loại hàng**, **Sở hữu**) theo **Ưu tiên** → 5111
- **Giá vốn bán hàng**: Thứ tự tìm tài khoản: Tài khoản sửa riêng → dòng khớp (**Loại hàng**, **Sở hữu**) theo **Ưu tiên** → 632

### Gán tài khoản cho quỹ (tab Quỹ → TK tiền)

1. Bấm tab **Quỹ → TK tiền**. Bấm vào ô **TK sổ cái** của quỹ cần gán, chọn tài khoản (gõ số hoặc tên để tìm).
2. **Tick ô Áp dụng** của dòng đó. Dòng quỹ chưa từng gán mặc định **không tick**, và dòng không tick bị bỏ qua khi ghi sổ.
3. Lưu thay đổi của lưới. Mỗi dòng đã sửa được lưu và báo **Đã lưu.**.
4. Muốn bỏ gán: bấm biểu tượng xoá ở đầu dòng. Hộp hỏi "Xóa mapping (quỹ quay về TK mặc định theo ngân hàng)?". Xoá rồi quỹ dùng tài khoản mặc định 111 / 112.

### Ghi đè tài khoản cho nội dung thu chi (tab Nội dung thu/chi → TK)

1. Bấm tab **Nội dung thu/chi → TK**. Tìm nội dung thu chi (ô **Tìm kiếm…**).
2. Chọn tài khoản chi tiết ở **Override TK sổ cái**, tick **Áp dụng**.
3. Lưu thay đổi. Để bỏ ghi đè: xoá dòng, hộp hỏi "Xóa override (quay về TK mặc định của nội dung)?".

### Cấu hình doanh thu / giá vốn theo loại hàng (tab Loại hàng → DT/Giá vốn)

1. Bấm tab **Loại hàng → DT/Giá vốn**. Sửa dòng có sẵn, hoặc thêm dòng mới (cần quyền **Thêm mới**).
2. Chọn **Loại hàng** và **Sở hữu** (dùng `*` cho "mọi loại" hoặc "mọi sở hữu"), chọn **TK doanh thu** và **TK giá vốn** (đều bắt buộc), đặt **Ưu tiên** (nhỏ áp trước; để trống thì 100).
3. Lưu thay đổi. Dòng khớp cụ thể được chọn trước dòng `*` khi **Ưu tiên** bằng nhau.

Ví dụ cách đọc: dòng `*` / `Customer` ưu tiên 1 áp trước cho mọi hàng của khách (gia công); dòng `thanhpham` / `Company` ưu tiên 100 áp cho thành phẩm của công ty.

**Đổi khoá = tạo dòng mới.** **Loại hàng** + **Sở hữu** là khoá của dòng. Sửa một trong hai ô trên dòng đã có sẽ **thêm dòng mới** và dòng cũ vẫn còn: phải xoá dòng cũ.

## 6. Giải thích các thông tin trên màn hình

- **TK sổ cái (tab quỹ)**: Ý nghĩa: Tài khoản sổ cái của quỹ; Bắt buộc: Có; Lưu ý: Báo **Vui lòng chọn tài khoản sổ cái.** nếu để trống
- **Override TK sổ cái (tab nội dung)**: Ý nghĩa: Tài khoản ghi đè; Bắt buộc: Không; Lưu ý: Để trống thì dùng **TK mặc định** của nội dung
- **Loại hàng**: Ý nghĩa: Loại hàng hoá; Bắt buộc: Có; Lưu ý: `nguyenlieu`, `thanhpham`, `hangtron`, `dichvu`, `khac`, `*`
- **Sở hữu**: Ý nghĩa: Chủ sở hữu hàng; Bắt buộc: Có; Lưu ý: `Company`, `Customer`
- **TK doanh thu**: Ý nghĩa: Tài khoản doanh thu; Bắt buộc: Có
- **TK giá vốn**: Ý nghĩa: Tài khoản giá vốn; Bắt buộc: Có
- **Ưu tiên**: Ý nghĩa: Thứ tự áp dụng; Bắt buộc: Không; Lưu ý: Số nhỏ áp trước, mặc định 100
- **Áp dụng**: Ý nghĩa: Bật / tắt dòng; Lưu ý: Dòng **không tick** bị bỏ qua

## 7. Kiểm tra sau khi thực hiện

- Dòng đã lưu có hiệu lực với phiếu ghi sổ **sau thời điểm lưu**.
- Phiếu thu, phiếu chi, doanh thu và giá vốn ghi sổ mới dùng tài khoản đã cấu hình.
- Bút toán đã ghi sổ **không đổi**. Muốn sửa bút toán đã ghi sổ dùng **Chuyển tài khoản hạch toán** ([HƯỚNG DẪN CHUYỂN TÀI KHOẢN HẠCH TOÁN VÀ XEM NHẬT KÝ CHUYỂN](/bai-viet/2026-11-07-tl-a10-2-huong-dan-chuyen-tai-khoan-hach-toan-va-xem-nhat-ky-chuyen/)): khi chuyển, hệ thống có thể cập nhật luôn các cấu hình này sang tài khoản đích.

## 8. Những điều cần lưu ý

⚠️ **Phải tick Áp dụng.** Dòng chưa tick (kể cả vừa chọn tài khoản xong) được lưu nhưng ghi sổ **bỏ qua**, quỹ và nội dung vẫn dùng tài khoản mặc định.

⚠️ **Chỉ chọn tài khoản chi tiết (không có tài khoản con).** Chọn tài khoản tổng hợp thì lúc ghi sổ, hệ thống từ chối hạch toán vào tài khoản đó, phiếu không ghi sổ được.

⚠️ **Dùng đúng loại và tính chất tài khoản.** Màn này không kiểm loại tài khoản (ví dụ tài khoản chi phí ở ô **TK doanh thu** vẫn lưu được), bút toán sai bản chất sẽ làm sai báo cáo.

⚠️ **Cấu hình có hiệu lực ngay trên phiếu ghi sổ sau đó** và áp cho các chi nhánh trong cùng cơ sở dữ liệu ERP, không có ngày hiệu lực. Đổi giữa kỳ làm cùng một loại nghiệp vụ ghi vào hai tài khoản khác nhau trong cùng kỳ.

⚠️ **Xoá dòng cấu hình không xoá tài khoản hay chứng từ**, chỉ đưa quỹ / nội dung về tài khoản mặc định. Riêng dòng loại hàng bị xoá: loại hàng đó quay về tài khoản mặc định 5111 (doanh thu) và 632 (giá vốn), trừ khi còn dòng `*` khớp. Chỉ xoá khi đã chắc kết quả.

### "Vui lòng chọn tài khoản sổ cái." 

Nguyên nhân: lưu dòng quỹ mà ô **TK sổ cái** trống.
Cách xử lý: chọn tài khoản rồi lưu.

### "TK doanh thu và TK giá vốn là bắt buộc." / "Cần nhập loại hàng, ownership, TK doanh thu và TK giá vốn." 

Nguyên nhân: tab loại hàng thiếu một trong các ô bắt buộc.
Cách xử lý: điền đủ **Loại hàng**, **Sở hữu**, **TK doanh thu**, **TK giá vốn**.

### Phiếu vẫn ghi vào tài khoản cũ dù đã cấu hình 

Nguyên nhân: chưa tick **Áp dụng**; hoặc phiếu đã ghi sổ từ trước; hoặc phiếu có tài khoản sửa riêng ở dòng phiếu.
Cách xử lý: kiểm tra ô **Áp dụng**; với phiếu đã ghi sổ dùng [HƯỚNG DẪN CHUYỂN TÀI KHOẢN HẠCH TOÁN VÀ XEM NHẬT KÝ CHUYỂN](/bai-viet/2026-11-07-tl-a10-2-huong-dan-chuyen-tai-khoan-hach-toan-va-xem-nhat-ky-chuyen/).

## 10. Câu hỏi thường gặp

**Chưa cấu hình gì có ghi sổ được không?**
Hệ thống có nhánh dùng tài khoản mặc định, nhưng chỉ ghi sổ được khi tài khoản được chọn thực tế còn dùng và là tài khoản chi tiết hợp lệ. Cần kiểm tra cấu hình của đơn vị trước; không mặc nhiên coi tài khoản mặc định là đủ điều kiện. Các mặc định mô tả trong bản thảo (quỹ: 111 hoặc 112; chi phí: tài khoản của nội dung thu chi, không có thì 811; doanh thu: 5111; giá vốn: 632).

**Thêm quỹ mới có phải vào đây không?**
Cần kế toán kiểm tra tài khoản thực tế được đề xuất. Nhánh mặc định 111/112 có thể trỏ tài khoản tổng hợp khi đã có tài khoản con; khi đó phải cấu hình tài khoản chi tiết phù hợp trước khi ghi sổ.

## 11. Công việc tiếp theo

```text
Cấu hình xong → lập phiếu thu / phiếu chi / phiếu bán hàng
              → kiểm tra bút toán ở Sổ kế toán, Sổ chi tiết tài khoản
```

**Tiếp theo:** sổ tay Kế toán – Phiếu thu, Phiếu chi.

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH HỆ THỐNG TÀI KHOẢN](/bai-viet/2026-11-07-tl-a10-0-tong-quan-man-hinh-he-thong-tai-khoan/) – Tổng quan màn hình Hệ thống tài khoản
- [HƯỚNG DẪN CHUYỂN TÀI KHOẢN HẠCH TOÁN VÀ XEM NHẬT KÝ CHUYỂN](/bai-viet/2026-11-07-tl-a10-2-huong-dan-chuyen-tai-khoan-hach-toan-va-xem-nhat-ky-chuyen/) – Chuyển tài khoản hạch toán
- [TỔNG QUAN MÀN HÌNH NỘI DUNG THU CHI](/bai-viet/2026-11-07-tl-a04-0-tong-quan-man-hinh-noi-dung-thu-chi/) – Nội dung thu chi; [TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ](/bai-viet/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/) – Tài khoản, quỹ
- Sổ tay Kế toán – Phiếu thu, Phiếu chi, Bút toán phát sinh
- Sổ tay Bán hàng – Phiếu bán hàng (xuất kho)
