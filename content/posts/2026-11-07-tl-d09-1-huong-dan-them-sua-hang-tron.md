---
title: "HƯỚNG DẪN THÊM, SỬA HÀNG TRƠN"
date: "2026-11-07"
summary: "cửa sổ THÊM HÀNG TRƠN / CẬP NHẬT HÀNG TRƠN tạo hoặc sửa một hàng trơn."
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

cửa sổ **THÊM HÀNG TRƠN** / **CẬP NHẬT HÀNG TRƠN** tạo hoặc sửa **một** hàng trơn. Điểm quan trọng nhất: **mã và tên hàng không gõ tay**, hệ thống **tự sinh** khi bạn điền đủ tiêu chuẩn, kích thước và NCC (công thức ở phần “Trình tự công việc”).

cửa sổ còn tự tính **M³/TẤM** và cho khai báo **ĐVT**, **ĐVT 1**, **QUY ĐỔI** (số tấm trong một kiện), **QUYỀN SỞ HỮU**, **LOẠI NVL (621)**.

Nhiều hàng trơn cùng lúc: dùng [HƯỚNG DẪN IMPORT HÀNG TRƠN TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d09-3-huong-dan-import-hang-tron-tu-excel-anh/) (import) và [HƯỚNG DẪN SỬA, XOÁ NHIỀU HÀNG TRƠN CÙNG LÚC](/bai-viet/2026-11-07-tl-d09-2-huong-dan-sua-xoa-nhieu-hang-tron-cung-luc/) (sửa nhiều).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- **Tiêu chuẩn** (TL-D03) và **Đơn vị tính** (TL-D04) đã có và đang **Kích hoạt**.
- **Loại hàng** (TL-D05) và **Nhóm hàng hóa** (TL-D12) đã có, nếu hàng thuộc loại, nhóm đó.
- Đã biết **dày, rộng, dài** (mm) và **NCC** (chữ viết tắt công ty đang dùng, ví dụ `NK`, `DW`).

## 2. Mở chức năng

**Hàng hoá → Hàng trơn → Thêm mới** (hoặc **Sửa** ở cột Thao tác)

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

![Hình 1: cửa sổ thêm hàng trơn chưa chọn các thành phần sinh mã và chưa lưu](/posts/2026-11-07-tl-d09-1-huong-dan-them-sua-hang-tron/hinh-01-form-them-hang-tron.png)

- **MÃ HÀNG TRƠN, TÊN HÀNG TRƠN (ô xám)**: Ý nghĩa: Hệ thống tự sinh, không gõ tay
- **TIÊU CHUẨN, DÀY, RỘNG, DÀI, NCC, LOẠI HÀNG**: Ý nghĩa: Các thành phần để sinh mã, tên
- **ĐƠN VỊ TÍNH, ĐƠN VỊ TÍNH 1, QUY ĐỔI, M³/TẤM**: Ý nghĩa: Đơn vị, quy đổi tấm / kiện; M³ tự tính
- **QUYỀN SỞ HỮU, LOẠI NVL (621), NHÓM HÀNG HÓA**: Ý nghĩa: Phân loại
- **TÊN IN, MÃ HÀNG NCC, ĐƠN GIÁ, ĐỊNH MỨC TỒN, TRỌNG LƯỢNG, GHI CHÚ**: Ý nghĩa: Thông tin phụ
- **Kích hoạt, Lưu lại, Đóng**: Ý nghĩa: Trạng thái, lưu, đóng không lưu

## 4. Trình tự công việc

**Công thức sinh mã và tên hàng trơn** (viết liền cho mã, cách nhau một dấu cách cho tên):

```text
MÃ  = MãTiêuChuẩn (Dày x Rộng x Dài) NCC MãLoạiHàng      bỏ hết dấu cách
TÊN = TênTiêuChuẩn (Dày x Rộng x Dài) NCC TênLoạiHàng    giữ dấu cách

Ví dụ  Tiêu chuẩn MDF E2 (mã MDFE2), 17 x 1220 x 2440, NCC NK, loại GỬI HÀNG
MÃ: MDFE2 + (17x1220x2440) + NK + GUIHANG
    → MDFE2(17x1220x2440)NKGUIHANG
TÊN: MDF E2 + (17x1220x2440) + NK + GỬI HÀNG
    → MDF E2 (17x1220x2440) NK GỬI HÀNG
```

**Luồng thêm hàng trơn:**

```text
Chọn TIÊU CHUẨN → nhập DÀY, RỘNG, DÀI → nhập NCC (→ chọn LOẠI HÀNG)
        ↓  (đủ 5 thành phần: mã, tên tự hiện; M³/TẤM tự tính)
Chọn ĐƠN VỊ TÍNH (+ ĐƠN VỊ TÍNH 1, QUY ĐỔI)
        ↓
QUYỀN SỞ HỮU, LOẠI NVL (621) → Lưu lại
```

### Bước 1 – Chọn tiêu chuẩn và nhập kích thước

Chọn **TIÊU CHUẨN**. Nhập **DÀY**, **RỘNG**, **DÀI** bằng mm. Ngay khi nhập, ô **M³/TẤM** tự tính bằng dày x rộng x dài / 1.000.000.000 (ví dụ 17 x 1220 x 2440 cho 0,0506056 m³). Số đo bỏ số 0 thừa khi ghép vào mã (4,750 thành `4.75`, 15,000 thành `15`).

### Bước 2 – Nhập NCC và chọn loại hàng

Nhập **NCC**: chữ viết tắt, **viết liền, không khoảng trắng** (ví dụ `NK`). Đây là chữ tự do, không chọn từ danh mục Nhà cung cấp. **LOẠI HÀNG** không bắt buộc; có chọn thì mã loại hàng nối vào cuối mã, tên loại hàng nối vào cuối tên.

### Bước 3 – Kiểm tra mã và tên được sinh

Khi đã có đủ **TIÊU CHUẨN**, **DÀY**, **RỘNG**, **DÀI** (khác 0) và **NCC**, hai ô **MÃ HÀNG TRƠN**, **TÊN HÀNG TRƠN** tự điền (ảnh cửa sổ chi tiết sẽ bổ sung sau). **So kết quả với công thức ở phần “Trình tự công việc”.** Mã sai thì sửa thành phần (tiêu chuẩn, kích thước, NCC, loại hàng), không sửa trực tiếp ô mã.

Mỗi lần đổi một trong sáu ô thành phần, mã, tên sinh lại.

### Bước 4 – Chọn đơn vị tính, quy đổi tấm / kiện

Chọn **ĐƠN VỊ TÍNH** (đơn vị đếm chính, thường *Tấm*). Nếu hàng còn đếm theo kiện, chọn **ĐƠN VỊ TÍNH 1** (*Kiện*) và nhập **QUY ĐỔI** là số ĐVT chính trong một ĐVT 1 (ví dụ `53` tấm một kiện). Không dùng ĐVT 1 thì để **QUY ĐỔI** là `1`. **QUY ĐỔI** phải lớn hơn 0.

### Bước 5 – Chọn quyền sở hữu và loại NVL

Chọn **QUYỀN SỞ HỮU** (mặc định **Doanh nghiệp**). **Khách hàng (gửi gia công)** dùng cho ván khách gửi để gia công: doanh thu của hàng này tính vào **Gia công**. **LOẠI NVL (621)** mặc định **Ván**; các lựa chọn khác: *Giấy*, *Hóa chất*, *Khác (không tính 621)*. **NHÓM HÀNG HÓA** tuỳ chọn.

### Bước 6 – Nhập thông tin phụ và Lưu

Nhập khi có: **TÊN IN** (bỏ trống thì chứng từ dùng tên hàng), **MÃ HÀNG NCC** (không trùng với hàng hoá khác), **ĐƠN GIÁ**, **ĐỊNH MỨC TỒN**, **TRỌNG LƯỢNG**, **GHI CHÚ**. Bấm **Lưu lại**. Hệ thống kiểm tra mã vừa sinh chưa có ở **toàn bộ hàng hoá**.

### Sửa hàng trơn đã có

- Sửa **tiêu chuẩn, dày, rộng, dài, NCC hoặc loại hàng** thì mã, tên **sinh lại**; mã mới phải không trùng hàng khác.
- Chỉ sửa **ĐVT, quy đổi, quyền sở hữu, tên in, giá, ghi chú…** thì mã, tên giữ nguyên.
- Muốn đổi nhiều hàng một lúc: [HƯỚNG DẪN SỬA, XOÁ NHIỀU HÀNG TRƠN CÙNG LÚC](/bai-viet/2026-11-07-tl-d09-2-huong-dan-sua-xoa-nhieu-hang-tron-cung-luc/) (Sửa nhiều). Với hàng đã có chứng từ, hãy cân nhắc **Ngưng sử dụng** thay vì đổi mã.

## 6. Giải thích các thông tin trên màn hình

- **Mã hàng trơn**: Ý nghĩa: Mã hệ thống sinh; Bắt buộc: Có (tự sinh); Lưu ý: Ô chỉ đọc; trống nghĩa là chưa đủ thành phần
- **Tên hàng trơn**: Ý nghĩa: Tên hệ thống sinh; Bắt buộc: Có (tự sinh); Lưu ý: Ô chỉ đọc
- **Tên in**: Ý nghĩa: Tên in trên chứng từ; Bắt buộc: Không
- **Tiêu chuẩn**: Ý nghĩa: Tiêu chuẩn ván; Bắt buộc: Có; Lưu ý: Chọn từ danh mục Tiêu chuẩn đang Kích hoạt
- **Dày, Rộng, Dài**: Ý nghĩa: Kích thước (mm); Bắt buộc: Có; Lưu ý: Phải khác 0 mới sinh được mã
- **NCC**: Ý nghĩa: Nhà cung cấp viết tắt; Bắt buộc: Có; Lưu ý: Viết liền, không khoảng trắng
- **Loại hàng**: Ý nghĩa: Loại / phẩm cấp; Bắt buộc: Không; Lưu ý: Có nút xoá chọn
- **Đơn vị tính**: Ý nghĩa: Đơn vị chính; Bắt buộc: Có
- **Đơn vị tính 1**: Ý nghĩa: Đơn vị phụ (kiện); Bắt buộc: Không
- **Quy đổi**: Ý nghĩa: Số ĐVT chính trong 1 ĐVT 1; Bắt buộc: Có (lớn hơn 0); Lưu ý: Mặc định 1
- **M³/Tấm**: Ý nghĩa: Thể tích một tấm; Bắt buộc: Tự tính; Lưu ý: Ô chỉ đọc
- **Mã hàng NCC**: Ý nghĩa: Mã của nhà cung cấp; Bắt buộc: Không; Lưu ý: Không trùng giữa các hàng hoá
- **Nhóm hàng hóa**: Ý nghĩa: Nhóm quản lý; Bắt buộc: Không; Lưu ý: Không nằm trong mã, tên
- **Quyền sở hữu**: Ý nghĩa: Doanh nghiệp, Khách hàng (gửi gia công), Nhà cung cấp, Bên thứ ba; Bắt buộc: Có; Lưu ý: Mặc định Doanh nghiệp
- **Loại NVL (621)**: Ý nghĩa: Ván, Giấy, Hóa chất, Khác; Bắt buộc: Không; Lưu ý: Mặc định Ván
- **Đơn giá**: Ý nghĩa: Giá nhập tham khảo; Bắt buộc: Không
- **Định mức tồn**: Ý nghĩa: Mức tồn an toàn; Bắt buộc: Không
- **Trọng lượng**: Ý nghĩa: Trọng lượng (kg); Bắt buộc: Không
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

## 7. Kiểm tra sau khi thực hiện

- Hàng trơn mới hiện ở danh sách **HÀNG TRƠN** với mã, tên theo công thức; chọn được ở chứng từ khi đang Kích hoạt.
- **M³/TẤM** được lưu cùng hàng.

## 8. Những điều cần lưu ý

⚠️ **Mã và tên chỉ sinh khi đủ 5 thành phần** (tiêu chuẩn, dày, rộng, dài, NCC). Nếu bạn **xoá** một thành phần sau khi mã đã sinh, mã và tên cũ **vẫn nằm đó** (không tự xoá); hãy điền lại cho đủ rồi kiểm tra lại mã.

⚠️ **Cùng quy cách nhưng khác NCC là hai hàng khác nhau**, vì NCC nằm trong mã. Hai cách viết khác nhau của một NCC (`NK` và `NKK`) tạo ra hai mã.

⚠️ **Đổi tiêu chuẩn, kích thước, NCC hoặc loại hàng của hàng đã giao dịch làm mã, tên đổi theo.** Mã mới có thể trùng một hàng đang có: hệ thống chặn bằng "Mã đã tồn tại".

⚠️ Danh mục **Tiêu chuẩn** và **Loại hàng** đổi tên sau này **không** làm đổi mã, tên của hàng đã lưu.

⚠️ **QUYỀN SỞ HỮU = Khách hàng (gửi gia công)** làm doanh thu của hàng này tính vào **Gia công**. Chọn nhầm sẽ làm lệch doanh thu giữa bán hàng và gia công.

### "Nhập mã hàng trơn" 

Nguyên nhân: chưa đủ thành phần để sinh mã (thiếu tiêu chuẩn / NCC, hoặc một kích thước còn bằng 0).
Cách xử lý: điền đủ **TIÊU CHUẨN**, **DÀY**, **RỘNG**, **DÀI** (khác 0), **NCC**; mã hiện ra rồi **Lưu lại**.

### "Mã đã tồn tại" 

Nguyên nhân: hàng có cùng tiêu chuẩn, kích thước, NCC, loại hàng đã được tạo (không phân biệt chữ hoa, chữ thường).
Cách xử lý: tìm hàng cũ ở danh sách và dùng lại, hoặc đổi NCC / loại hàng nếu thật sự là hàng khác.

### "Vui lòng chọn tiêu chuẩn" / "Vui lòng nhập độ dày" / "Vui lòng nhập độ rộng" / "Vui lòng nhập độ dài" / "Vui lòng nhập ncc" 

Cách xử lý: điền ô còn thiếu.

### "Mã không hợp lệ. Viết liền không dấu và không chứa kí tự đặc biệt." 

Nguyên nhân: **NCC** có khoảng trắng.
Cách xử lý: viết liền, ví dụ `NK`.

### "Vui lòng nhập số lượng tấm / kiện" 

Nguyên nhân: **QUY ĐỔI** bằng 0 hoặc âm.
Cách xử lý: nhập số lớn hơn 0 (không dùng ĐVT 1 thì nhập `1`).

### "Vui lòng chọn đơn vị tính" / "Vui lòng chọn quyền sở hữu" 

Cách xử lý: chọn ô còn thiếu.

### "Lỗi thêm.: Mã đã tồn tại." 

Nguyên nhân: **MÃ HÀNG NCC** đã có ở hàng hoá khác.
Cách xử lý: đổi hoặc xoá trống **MÃ HÀNG NCC**.

## 10. Câu hỏi thường gặp

**Tôi muốn mã khác công thức thì làm sao?**
Không sửa trực tiếp ô mã (ô chỉ đọc). Hãy đổi thành phần: mã chỉ có thể ra theo công thức.

**M³/TẤM có nhập tay được không?**
Không. Ô chỉ đọc, tự tính từ dày, rộng, dài.

**Hàng gửi (khách gửi ván gia công) tạo thế nào?**
Chọn **QUYỀN SỞ HỮU** là **Khách hàng (gửi gia công)**. Có thể kèm **LOẠI HÀNG** *GỬI HÀNG* nếu công ty dùng để phân biệt mã.

## 11. Công việc tiếp theo

**Tiếp theo:** hướng dẫn của bộ phận phụ trách – Hướng dẫn thêm, sửa thành phẩm (thành phẩm dùng cùng tiêu chuẩn, kích thước, NCC, thêm lỗi, định mức, số mặt).

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-0-tong-quan-man-hinh-hang-tron/) – Tổng quan màn hình Hàng trơn
- [HƯỚNG DẪN SỬA, XOÁ NHIỀU HÀNG TRƠN CÙNG LÚC](/bai-viet/2026-11-07-tl-d09-2-huong-dan-sua-xoa-nhieu-hang-tron-cung-luc/) – Sửa, xoá nhiều hàng trơn
- [HƯỚNG DẪN IMPORT HÀNG TRƠN TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d09-3-huong-dan-import-hang-tron-tu-excel-anh/) – Import hàng trơn từ Excel / ảnh
- [TỔNG QUAN MÀN HÌNH TIÊU CHUẨN](/bai-viet/2026-11-07-tl-d03-0-tong-quan-man-hinh-tieu-chuan/) – Tiêu chuẩn; [TỔNG QUAN MÀN HÌNH ĐƠN VỊ TÍNH](/bai-viet/2026-11-07-tl-d04-0-tong-quan-man-hinh-don-vi-tinh/) – Đơn vị tính; [TỔNG QUAN MÀN HÌNH LOẠI HÀNG](/bai-viet/2026-11-07-tl-d05-0-tong-quan-man-hinh-loai-hang/) – Loại hàng; [TỔNG QUAN MÀN HÌNH NHÓM HÀNG HÓA](/bai-viet/2026-11-07-tl-d12-0-tong-quan-man-hinh-nhom-hang-hoa/) – Nhóm hàng hóa
- hướng dẫn của bộ phận phụ trách – Thêm, sửa thành phẩm
