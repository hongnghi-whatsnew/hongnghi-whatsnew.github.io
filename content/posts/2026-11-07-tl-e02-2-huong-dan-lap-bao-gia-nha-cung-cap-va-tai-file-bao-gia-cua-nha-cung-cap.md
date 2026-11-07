---
title: "HƯỚNG DẪN LẬP BÁO GIÁ NHÀ CUNG CẤP VÀ TẢI FILE BÁO GIÁ CỦA NHÀ CUNG CẤP"
date: "2026-11-07"
summary: "Báo giá nhà cung cấp là bảng giá mua mà nhà cung cấp gửi cho công ty."
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

**Báo giá nhà cung cấp** là bảng giá mua mà nhà cung cấp gửi cho công ty. Lập báo giá để phiếu mua hàng lấy giá nhanh bằng nút **Từ bảng giá**. Với nhà cung cấp Dongwha (DW), file Excel báo giá gửi nguyên bản có thể **tải thẳng** vào cửa sổ, không cần gõ lại.

cửa sổ giống bảng giá bán ([HƯỚNG DẪN LẬP BẢNG GIÁ BÁN CHO KHÁCH HÀNG](/bai-viet/2026-11-07-tl-e02-1-huong-dan-lap-bang-gia-ban-cho-khach-hang/)), chỉ khác phần đối tượng là **NHÀ CUNG CẤP** thay cho **KHÁCH HÀNG**. Bài này nêu phần riêng: chọn nhà cung cấp, đọc file nhà cung cấp, và cách phiếu mua hàng dùng giá.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Nhà cung cấp đã có (TL-B02). Với nhà cung cấp DW, ô **Xuất xứ** của hàng hóa ván trơn là `DW`.
- Hàng hóa ván trơn tương ứng với từng dòng của file đã có trong danh mục (TL-D09): hệ thống khớp ô giá với hàng hóa theo thuộc tính, **không** theo mã.
- Tiêu chuẩn (TL-D03) và loại hàng (TL-D05) dùng trong file đã có trong danh mục.

## 2. Mở chức năng

**Bảng giá / báo giá → Bảng giá mua bán → Thêm mới → BG Nhà cung cấp**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

- **NGÀY BÁO GIÁ, NGÀY ÁP DỤNG**: Ý nghĩa: Ngày nhận báo giá và ngày giá có hiệu lực
- **NHÀ CUNG CẤP**: Ý nghĩa: Chọn nhà cung cấp (gõ tên hoặc mã để tìm)
- **TÊN BẢNG GIÁ**: Ý nghĩa: Tự điền tên rút gọn nhà cung cấp viết hoa khi bạn chọn nhà cung cấp; sửa được
- **Nút Đổi đối tượng**: Ý nghĩa: Chuyển qua lại với **KHÁCH HÀNG** (xoá thông tin đã chọn)
- **Thao tác ▸ Tải lên file NCC**: Ý nghĩa: Đọc file báo giá nhà cung cấp gửi (chỉ ở tab **Theo quy cách**)
- **Lưu lại**: Ý nghĩa: Lưu

Các tab, ô nhập, nút **Thao tác** giống [HƯỚNG DẪN LẬP BẢNG GIÁ BÁN CHO KHÁCH HÀNG](/bai-viet/2026-11-07-tl-e02-1-huong-dan-lap-bang-gia-ban-cho-khach-hang/). Khi bấm **Đổi đối tượng**, hộp xác nhận hỏi **Xóa thông tin và chuyển sang chọn "Khách hàng"?** (hoặc ngược lại) với nút **Tiếp tục** / **Không**.

## 4. Trình tự công việc

```text
Nhận file báo giá từ nhà cung cấp (Excel)
      ↓
Thêm mới ▸ BG Nhà cung cấp → chọn nhà cung cấp, ngày báo giá, ngày áp dụng
      ↓
Thao tác ▸ Tải lên file NCC → kiểm tra các nhóm đọc được + cảnh báo
      ↓
Lưu lại → khớp ô giá với hàng hóa → ghi
      ↓
Phiếu mua hàng: chọn nhà cung cấp → Từ bảng giá → Lấy giá / Tạo mới
```

```text
Cách đọc file DW:
Dòng tiêu đề có "Loại" và "Độ dày"
   ↓
Dòng dưới: "mm" và các cột khổ 4x8 / 5x8 / 6x8
   ↓
Mỗi khối theo nhãn "Loại" (MBR - C2, MMR-E2 - SP…) → một nhóm
   ↓
Mỗi dòng trong khối: độ dày + đơn giá từng khổ
```

### Lập báo giá nhập tay

**Bước 1 –** Chọn **NGÀY BÁO GIÁ**, **NGÀY ÁP DỤNG**, **NHÀ CUNG CẤP**. Kiểm tra **TÊN BẢNG GIÁ** vừa được tự điền.

**Bước 2 –** Nhập dòng giá như [HƯỚNG DẪN LẬP BẢNG GIÁ BÁN CHO KHÁCH HÀNG](/bai-viet/2026-11-07-tl-e02-1-huong-dan-lap-bang-gia-ban-cho-khach-hang/) (nhóm mới tự điền **Xuất xứ** theo mã xuất xứ của nhà cung cấp nếu có).

**Bước 3 –** Bấm **Lưu lại** (kiểm tra khớp hàng hóa như [HƯỚNG DẪN LẬP BẢNG GIÁ BÁN CHO KHÁCH HÀNG](/bai-viet/2026-11-07-tl-e02-1-huong-dan-lap-bang-gia-ban-cho-khach-hang/)).

### Tải file báo giá nhà cung cấp (định dạng DW)

**Bước 1 –** Chọn nhà cung cấp và hai ngày. Ở tab **Theo quy cách**, bấm **Thao tác ▸ Tải lên file NCC**, chọn file `.xlsx` hoặc `.xls`.

**Bước 2 –** Hệ thống đọc **mọi sheet**, thay **toàn bộ** các nhóm đang có ở tab **Theo quy cách** bằng các nhóm đọc được, rồi báo **Đã đọc N nhóm, M dòng độ dày.** Mỗi cảnh báo hiện thành một thông báo riêng, lưu lại từng dòng để xử lý (xem phần “Vướng mắc thường gặp”).

**Bước 3 –** Kiểm tra từng nhóm: **Xuất xứ**, **Tiêu chuẩn**, **Loại hàng**, các khổ, độ dày, đơn giá. Sửa tay chỗ chưa đúng; nhóm bị thiếu tiêu chuẩn thì chọn tiêu chuẩn.

**Bước 4 –** Bấm **Lưu lại**. Ô chưa khớp hàng hóa hiện **viền cam**; hộp xác nhận nêu số ô chưa khớp / trùng. Muốn đủ báo giá, chọn **Hủy** để bổ sung/sửa và đối chiếu lại. Chỉ chọn **Lưu** khi chấp nhận lưu một phần các ô đã khớp và đã ghi rõ những dòng bị bỏ. Sau lưu mở lại kiểm số hàng và đơn giá với file gốc.

- **Đầu nhóm**: Ý nghĩa: **Xuất xứ** `DW`, **Tiêu chuẩn**, **Loại hàng** đã nhận dạng từ nhãn "Loại"
- **Tiêu đề cột**: Ý nghĩa: Khổ đã quy ra mm (ví dụ 1220×2440)
- **Cột Độ dày**: Ý nghĩa: Độ dày mm
- **Ô giá**: Ý nghĩa: Đơn giá; viền cam = chưa khớp

### Quy tắc đọc file DW

- **Mã đầu: `MBR` / `MMR` / `LBR` / `LMR` / `HBR` / `HMR` / `HDHMR`**: Được hiểu là: Loại ván MDF / MMR / LDF / LMR / HDF / HMR / HDFHMR
- **`C2` (hoặc `CARB P2`), `E0`, `E1`, `E2`**: Được hiểu là: Tiêu chuẩn; tra trong danh mục theo (loại ván + tiêu chuẩn)
- **Phần còn lại: `S`, `SP`, `FSC`…**: Được hiểu là: **Loại hàng** (không có = hàng thường)

- **C2**: 4x8: 1245×2465; 5x8: 1550×2465; 6x8: 1855×2465
- **E0 / E1 / E2**: 4x8: 1220×2440; 5x8: 1525×2440; 6x8: 1830×2440

Quy tắc thêm:

- Nhóm nào là `MMR` thì hệ thống **tự thêm** một nhóm cùng giá cho `HMR`, trừ khi file đã có khối `HMR` riêng.
- Ô giá của khổ 5x8 họ E không khớp hàng hóa 1525×2440 thì thử lại với 1550×2440 (và ngược lại).
- Dừng đọc khi gặp dòng bắt đầu bằng **Ghi chú** (phần điều kiện giao hàng, VAT).
- Ba khối **MBR-C2 S - SP SIZE**, **HDHMR E2**, **LMR,S -E2** bị bỏ qua theo thoả thuận với nhà cung cấp.
- Khối trùng tên xuất hiện lần thứ hai với giá khác bị bỏ qua và có cảnh báo, không đoán.

### Dùng báo giá khi lập phiếu mua hàng

**Bước 1 –** Ở phiếu mua hàng, chọn nhà cung cấp rồi bấm **Từ bảng giá**. Hộp **TỔNG HỢP CHI TIẾT BẢNG GIÁ** liệt kê các dòng giá của nhà cung cấp trong khoảng ngày áp dụng (mặc định từ đầu năm đến nay) với cột Ngày áp dụng, Ngày báo giá, Mã bảng giá, Tên bảng giá, Hàng hóa, Đvt, Đơn giá, Tiêu chuẩn, Dày, Rộng, Dài, NCC, Loại hàng.

**Bước 2 –** Tick các dòng cần dùng, rồi chọn:

- **Lấy giá**: cập nhật đơn giá cho các hàng **đã có** trên phiếu và báo **Đã áp dụng giá. Vui lòng kiểm tra lại.**
- **Tạo mới**: thêm các hàng chưa có vào phiếu với số lượng 0 và đơn giá của báo giá.

Chi tiết phiếu mua hàng: [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/).

## 6. Giải thích các thông tin trên màn hình

- **Nhà cung cấp**: Ý nghĩa: Nhà cung cấp gửi báo giá; Bắt buộc: Không bắt buộc khi lưu; Lưu ý: Để trống thì bảng giá thành bảng giá **chung** (không còn là báo giá nhà cung cấp)
- **Tên bảng giá**: Ý nghĩa: Tên gọi; Bắt buộc: Có; Lưu ý: Tự điền từ tên rút gọn nhà cung cấp
- **Xuất xứ (nhóm)**: Ý nghĩa: Mã nhà cung cấp của hàng ván trơn; Bắt buộc: Có khi nhóm có giá; Lưu ý: Với file DW luôn là `DW`
- **Các trường còn lại**: Lưu ý: Như [HƯỚNG DẪN LẬP BẢNG GIÁ BÁN CHO KHÁCH HÀNG](/bai-viet/2026-11-07-tl-e02-1-huong-dan-lap-bang-gia-ban-cho-khach-hang/)

## 7. Kiểm tra sau khi thực hiện

- Báo giá hiện ở danh sách với cột **Bảng giá** là **Nhà cung cấp**.
- Ở phiếu mua hàng của nhà cung cấp đó, nút **Từ bảng giá** liệt kê được các dòng giá để lấy giá hoặc thêm hàng.

## 8. Những điều cần lưu ý

⚠️ **Tải file NCC thay toàn bộ nhóm đang có ở tab Theo quy cách**, không hỏi lại. Muốn giữ nhóm đã nhập tay, nhập sau khi đã tải file hoặc ghi lại trước.

⚠️ Nhập 0 hoặc để trống một ô giá nghĩa là ô đó bị bỏ qua. Ô nhà cung cấp không báo giá thì để trống.

⚠️ Hệ thống khớp hàng hóa theo **tiêu chuẩn + xuất xứ + độ dày + khổ + loại hàng**, không theo mã hàng. Hàng chưa có trong danh mục thì ô giá sẽ chưa khớp: tạo hàng hóa trước (TL-D09, có thể dùng import) rồi tải file lại.

⚠️ **Chọn đúng nhà cung cấp trước khi lưu.** Báo giá có nhà cung cấp mới là báo giá nhà cung cấp; để trống nhà cung cấp và khách hàng thì thành bảng giá chung và có thể được phiếu bán hàng lấy giá.

⚠️ **Sao chép** báo giá nhà cung cấp **không** nạp lại nhà cung cấp: chọn lại **NHÀ CUNG CẤP** trước khi lưu.

⚠️ Hệ thống không tự bỏ giá cũ: bảng giá mới thêm vào cùng nhà cung cấp, người dùng chọn dòng ở hộp **TỔNG HỢP CHI TIẾT BẢNG GIÁ** theo ngày áp dụng.

### "Không đọc được nhóm nào từ file. Kiểm tra lại đúng file NCC gửi chưa." 

Nguyên nhân: file không đúng bố cục DW (thiếu dòng tiêu đề **Loại** + **Độ dày**, thiếu dòng khổ 4x8 / 5x8 / 6x8), hoặc mọi khối bị bỏ qua. Lý do cụ thể hiện kèm trong các cảnh báo, ví dụ **Không tìm thấy dòng tiêu đề có cột "Loại" và "Độ dày".**
Cách xử lý: kiểm tra file; nếu là báo giá khác định dạng, nhập tay hoặc dùng **Tải lên file Excel** với file mẫu.

### Cảnh báo khi đọc file DW 

- **Không nhận dạng được mã "…" — bỏ qua block này.**: nhãn "Loại" lạ. Nhập tay nhóm đó.
- **"…": chưa có tiêu chuẩn … + … trong danh mục — nhóm để trống tiêu chuẩn.**: thêm tiêu chuẩn vào danh mục (TL-D03) hoặc chọn **đúng tiêu chuẩn** ở đầu nhóm sau khi đối chiếu file gốc; không chọn tiêu chuẩn gần giống để bỏ cảnh báo.
- **"…": chưa có loại hàng "…" trong danh mục — bỏ qua block (tránh đè giá hàng thường).**: thêm loại hàng (TL-D05) rồi tải lại.
- **Block "…" xuất hiện lần thứ N với giá khác — đã bỏ qua, cần xác nhận lại với NCC.**: hỏi nhà cung cấp giá nào đúng.
- **"…": độ dày X đứng sau Y — kiểm tra lại có gõ nhầm không.**: nhà cung cấp có thể gõ nhầm độ dày; đối chiếu bản gốc.
- **Bỏ qua block "…" theo thỏa thuận với NCC.**: thông tin, không cần xử lý.

### "Bạn không có quyền thêm bảng giá loại này." 

Nguyên nhân: thiếu quyền **Thêm mới (mua)**.
Cách xử lý: nhờ quản trị cấp quyền.

## 10. Câu hỏi thường gặp

**File của nhà cung cấp khác (không phải DW) có tải được không?**
Chức năng **Tải lên file NCC** chỉ đọc bố cục DW. Với file khác, dùng **Tải file mẫu** + **Tải lên file Excel** hoặc nhập tay.

**Tại sao nhiều ô viền cam sau khi tải file?**
Hàng hóa ván trơn tương ứng (đúng tiêu chuẩn, xuất xứ, độ dày, khổ, loại hàng) chưa có trong danh mục. Tạo hàng hóa rồi tải lại file.

**Báo giá mới có thay giá các phiếu mua đã lập không?**
Không. Giá chỉ vào phiếu khi bạn bấm **Lấy giá** hoặc **Tạo mới**.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/) – Lập phiếu mua hàng (dùng nút **Từ bảng giá**).

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH BẢNG GIÁ MUA BÁN](/bai-viet/2026-11-07-tl-e02-0-tong-quan-man-hinh-bang-gia-mua-ban/) – Tổng quan màn hình Bảng giá mua bán
- [HƯỚNG DẪN LẬP BẢNG GIÁ BÁN CHO KHÁCH HÀNG](/bai-viet/2026-11-07-tl-e02-1-huong-dan-lap-bang-gia-ban-cho-khach-hang/) – Lập bảng giá bán cho khách hàng
- [HƯỚNG DẪN ĐIỀU CHỈNH GIÁ HÀNG LOẠT TRONG BẢNG GIÁ](/bai-viet/2026-11-07-tl-e02-3-huong-dan-dieu-chinh-gia-hang-loat-trong-bang-gia/) – Điều chỉnh giá hàng loạt
- TL-B02 – Nhà cung cấp; TL-D09 – Hàng trơn; TL-D03 – Tiêu chuẩn; TL-D05 – Loại hàng
- [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/) – Lập phiếu mua hàng
