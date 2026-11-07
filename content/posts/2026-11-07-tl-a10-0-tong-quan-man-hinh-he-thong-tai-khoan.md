---
title: "TỔNG QUAN MÀN HÌNH HỆ THỐNG TÀI KHOẢN"
date: "2026-11-07"
summary: "Hệ thống tài khoản là danh mục tài khoản kế toán dạng cây: tài khoản tổng hợp (có tài khoản con) và tài khoản chi tiết (không có con, còn gọi tài khoản lá)."
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

**Hệ thống tài khoản** là danh mục tài khoản kế toán dạng **cây**: tài khoản **tổng hợp** (có tài khoản con) và tài khoản **chi tiết** (không có con, còn gọi tài khoản lá). Mọi bút toán ghi sổ kế toán chỉ dùng **tài khoản chi tiết đang sử dụng**.

Danh mục được dùng ở nhiều màn: phiếu thu, phiếu chi, lệnh vay, chuyển tiền nội bộ, phiếu hạch toán lương, sổ chi tiết tài khoản, bảng cân đối phát sinh, quỹ tài khoản, **Cấu hình hạch toán** (TL-A11)…

Màn hình có ba tab / chức năng liên quan:

- Tab **Danh sách**: cây tài khoản (bài này).
- **Import Excel** ([HƯỚNG DẪN IMPORT HỆ THỐNG TÀI KHOẢN TỪ EXCEL](/bai-viet/2026-11-07-tl-a10-1-huong-dan-import-he-thong-tai-khoan-tu-excel/)): nạp nhiều tài khoản từ file.
- **Chuyển tài khoản hạch toán** và tab **Nhật ký chuyển tài khoản** ([HƯỚNG DẪN CHUYỂN TÀI KHOẢN HẠCH TOÁN VÀ XEM NHẬT KÝ CHUYỂN](/bai-viet/2026-11-07-tl-a10-2-huong-dan-chuyen-tai-khoan-hach-toan-va-xem-nhat-ky-chuyen/)): chuyển phát sinh từ tài khoản dùng sai sang tài khoản đúng.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Hệ thống tài khoản**.
- Hiểu số tài khoản theo quy ước: tài khoản con bắt đầu bằng số tài khoản cha (ví dụ `1121` là con của `112`).

## 2. Mở chức năng

**Thiết lập danh mục → Hệ thống tài khoản**

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

![Hình 1: Danh sách hệ thống tài khoản theo bố cục và bộ lọc hiện tại](/posts/2026-11-07-tl-a10-0-tong-quan-man-hinh-he-thong-tai-khoan/hinh-01-man-hinh-he-thong-tai-khoan.png)

- **Hai tab Danh sách / Nhật ký chuyển tài khoản**: Chức năng: Chuyển giữa cây tài khoản và nhật ký chuyển
- **Tải lại**: Chức năng: Tải lại cây
- **Thêm mới / Import Excel**: Chức năng: Thêm một tài khoản / nạp từ file (cần quyền **Thêm mới**)
- **Mở rộng / Thu gọn**: Chức năng: Mở hoặc thu gọn toàn bộ nhánh của cây
- **Chuyển tài khoản hạch toán**: Chức năng: Mở hộp chuyển phát sinh (cần quyền **Cập nhật**)
- **Biểu tượng Xuất Excel, Trình chọn cột, ô Tìm kiếm theo số, tên tài khoản**: Chức năng: Xuất file, ẩn / hiện cột, tìm
- **Cột Chức năng: nút Sửa có mũi tên xổ xuống**: Chức năng: **Sửa**; menu xổ: **Nhân bản**, **Xóa**, **Chuyển tài khoản hạch toán**, **Ngừng sử dụng**

- **Số tài khoản**: Ý nghĩa: Số tài khoản, sắp tăng dần
- **Tên tài khoản**: Ý nghĩa: Tên tài khoản
- **Tính chất**: Ý nghĩa: **Dư Nợ**, **Dư Có**, **Lưỡng tính**
- **Tên tiếng Anh, Diễn giải**: Ý nghĩa: Thông tin bổ sung
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng kích hoạt** (chữ đỏ)
- **Chức năng**: Ý nghĩa: Nút **Sửa** và menu hành động (menu chỉ hiện các mục bạn có quyền)
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dưới cây có dòng **Tổng số: n bản ghi**. Nhấp đúp vào một dòng mở cửa sổ **SỬA TÀI KHOẢN**. Nếu tài khoản của bạn không có quyền nào ngoài **Truy cập**, cột **Chức năng** chỉ có nút **Xem**.

## 4. Trình tự công việc

```text
Hệ thống tài khoản (TL-A10)
   ├── Thêm mới / Sửa ──► số TK → hệ thống tự xếp vào cây theo tiền tố
   ├── Nhân bản ──► tạo ngay bản sao "<số>_copy" → Sửa số, tên ngay
   ├── Ngừng sử dụng ──► TK không còn hiện trong ô chọn tài khoản
   ├── Xóa ──► chỉ khi không có TK con và chưa có bút toán
   ├── Import Excel ──► TL-A10.1
   └── Chuyển tài khoản hạch toán ──► TL-A10.2
        │
        └──► Cấu hình hạch toán (TL-A11), phiếu thu / chi, sổ kế toán…
```

### Khai báo một tài khoản

**Bước 1 –** Nhập **Số tài khoản** (tối đa 20 ký tự; chỉ chữ, số, gạch dưới; không dấu, không dấu cách). Tài khoản kế toán thường chỉ gồm chữ số, ví dụ `1561`.

**Bước 2 –** Hệ thống **gợi ý ngay** ô **Tài khoản tổng hợp** theo tiền tố dài nhất đã có (ví dụ gõ `1561` thì gợi ý `156`). Khi lưu, hệ thống **tự chốt lại tài khoản cha theo số tài khoản**, bỏ qua giá trị bạn chọn tay. Vì vậy muốn tài khoản nằm dưới tài khoản nào, phải **đặt số bắt đầu bằng số của tài khoản đó**. Không có tiền tố nào khớp thì tài khoản nằm ở cấp 1.

**Bước 3 –** Nhập **Tên tài khoản**, tuỳ chọn **Tên tiếng Anh**, **Diễn giải**. Chọn **Tính chất**: **Dư Nợ**, **Dư Có**, **Lưỡng tính** hoặc **Không có số dư**.

**Bước 4 –** Tick **Hạch toán ngoại tệ** nếu tài khoản theo dõi ngoại tệ.

**Bước 5 –** Trong nhóm **Theo dõi chi tiết theo**, tick các chiều cần theo dõi: **Đối tượng** (chọn tiếp loại **Nhà cung cấp**, **Khách hàng** hoặc **Nhân viên**, bắt buộc khi đã tick), **Tài khoản ngân hàng**, **Đối tượng THCP**, **Đơn đặt hàng**, **Hợp đồng bán**, **Khoản mục chi phí**, **Hợp đồng mua**, **Đơn vị**, **Mục thu/chi**.

**Bước 6 –** Bấm **Lưu lại**. Khi thêm mới còn có **Lưu & thêm tiếp**: lưu xong giữ hộp mở, giữ lại ô tài khoản tổng hợp để nhập tiếp tài khoản cùng cấp.

![Hình 2: cửa sổ thêm hệ thống tài khoản chưa nhập và chưa lưu](/posts/2026-11-07-tl-a10-0-tong-quan-man-hinh-he-thong-tai-khoan/hinh-02-form-them-tai-khoan.png)

- **Số tài khoản, Tên tài khoản, Tên tiếng Anh**: Ý nghĩa: Số và tên (bắt buộc: số, tên)
- **Tính chất**: Ý nghĩa: Bắt buộc
- **Tài khoản tổng hợp**: Ý nghĩa: Gợi ý theo số; hệ thống tự chốt khi lưu
- **Hạch toán ngoại tệ**: Ý nghĩa: Cờ theo dõi ngoại tệ
- **Nhóm Theo dõi chi tiết theo**: Ý nghĩa: Các chiều phân tích bắt buộc khi hạch toán
- **Hủy / Lưu & thêm tiếp / Lưu lại**: Ý nghĩa: Đóng / lưu tiếp / lưu

### Nhân bản, ngừng sử dụng, sửa, xoá

- **Nhân bản** (mục xổ xuống ở cột **Chức năng**): hệ thống **tạo ngay** một tài khoản mới có số `<số gốc>_copy` và tên `<tên gốc> (sao chép)`, **không mở cửa sổ**. Mở **Sửa** để đổi số và tên ngay (xem phần “Những điều cần lưu ý”).
- **Ngừng sử dụng**: bấm mục **Ngừng sử dụng** ở menu xổ xuống của dòng. Tài khoản đang Ngưng kích hoạt thì bấm lại mục này để **dùng lại** (hệ thống báo **Đã sử dụng lại**). cửa sổ **Sửa** không có ô **Kích hoạt**.
- **Sửa**: đổi được cả **Số tài khoản**. Số mới vẫn phải không trùng, và tài khoản cha được tính lại theo số mới.
- **Xóa**: chỉ khi tài khoản **không có tài khoản con** và **chưa phát sinh bút toán** (xem phần “Những điều cần lưu ý”).

## 6. Giải thích các thông tin trên màn hình

- **Số tài khoản**: Ý nghĩa: Số hiệu tài khoản; Bắt buộc: Có; Lưu ý: Tối đa 20 ký tự; chữ, số, gạch dưới; **không trùng** (không phân biệt chữ hoa / thường). Quyết định tài khoản cha và **loại tài khoản**
- **Tên tài khoản**: Ý nghĩa: Tên tài khoản; Bắt buộc: Có; Lưu ý: Tối đa 255 ký tự
- **Tên tiếng Anh**: Ý nghĩa: Tên tiếng Anh; Bắt buộc: Không
- **Tính chất**: Ý nghĩa: Bản chất số dư; Bắt buộc: Có; Lưu ý: **Dư Nợ**, **Dư Có**; **Lưỡng tính** và **Không có số dư** được lưu chung một giá trị, mở lại đều hiện **Lưỡng tính**
- **Tài khoản tổng hợp**: Ý nghĩa: Tài khoản cha; Bắt buộc: Không; Lưu ý: Gợi ý theo số; server tự chốt theo tiền tố số tài khoản. Khi Sửa, danh sách loại chính nó và các tài khoản con cháu
- **Diễn giải**: Ý nghĩa: Mô tả; Bắt buộc: Không
- **Hạch toán ngoại tệ**: Ý nghĩa: Theo dõi ngoại tệ; Lưu ý: Tài khoản có cờ này **chưa chuyển được** bằng chức năng Chuyển tài khoản hạch toán
- **Theo dõi chi tiết theo**: Ý nghĩa: Các chiều bắt buộc khi hạch toán tài khoản này; Lưu ý: Chọn tối đa 9 chiều như Bước 5. Chọn **Đối tượng** thì phải chọn loại đối tượng
- **Loại tài khoản**: Ý nghĩa: Hệ thống tự suy từ **chữ số đầu** của số tài khoản (1, 2: tài sản; 3: nợ phải trả; 4: vốn chủ; 5, 7: doanh thu; 6, 8, 9: chi phí); Lưu ý: Không nhập
- **Trạng thái**: Ý nghĩa: Kích hoạt / Ngưng kích hoạt; Lưu ý: Đổi bằng mục **Ngừng sử dụng**

## 7. Kiểm tra sau khi thực hiện

- Tài khoản mới nằm đúng nhánh của cây theo số tài khoản.
- Tài khoản chi tiết đang Kích hoạt chọn được ở phiếu thu, phiếu chi và các màn kế toán khác.
- Tài khoản **Ngưng kích hoạt** không còn hiện trong các ô chọn tài khoản; sổ, bút toán cũ vẫn xem được.

## 8. Những điều cần lưu ý

⚠️ **Tài khoản đã phát sinh bút toán không xoá được.** Hệ thống từ chối. Dùng **Ngừng sử dụng**, hoặc **Chuyển tài khoản hạch toán** ([HƯỚNG DẪN CHUYỂN TÀI KHOẢN HẠCH TOÁN VÀ XEM NHẬT KÝ CHUYỂN](/bai-viet/2026-11-07-tl-a10-2-huong-dan-chuyen-tai-khoan-hach-toan-va-xem-nhat-ky-chuyen/)) rồi ngừng sử dụng.

⚠️ **Tài khoản còn tài khoản con không xoá được.** Hộp **Xác nhận xóa** hỏi "Xóa tài khoản … và toàn bộ tài khoản con?", nhưng thực tế hệ thống **không xoá cả nhánh**: nếu còn tài khoản con thì từ chối. Hãy xoá hoặc chuyển các tài khoản con trước.

⚠️ **Chỉ tài khoản chi tiết (không có con), đang Kích hoạt mới hạch toán được.** Thêm một tài khoản con vào tài khoản đang dùng hạch toán sẽ biến tài khoản đó thành tài khoản tổng hợp: từ lúc đó không ghi bút toán vào nó được nữa. Chỉ thêm tài khoản con khi đã sẵn sàng chuyển phát sinh ([HƯỚNG DẪN CHUYỂN TÀI KHOẢN HẠCH TOÁN VÀ XEM NHẬT KÝ CHUYỂN](/bai-viet/2026-11-07-tl-a10-2-huong-dan-chuyen-tai-khoan-hach-toan-va-xem-nhat-ky-chuyen/)).

⚠️ **Đổi số tài khoản của tài khoản đã dùng sẽ đổi luôn tài khoản cha và loại tài khoản theo số mới**, có thể làm sai báo cáo. Chỉ đổi khi chưa có bút toán.

⚠️ Danh mục dùng chung cho các chi nhánh trong cùng cơ sở dữ liệu ERP.

### "Số tài khoản đã tồn tại" 

Nguyên nhân: đã có tài khoản cùng số (không phân biệt chữ hoa / thường), kể cả tài khoản Ngưng kích hoạt.
Cách xử lý: dùng số khác, hoặc tìm tài khoản cũ rồi bấm **Ngừng sử dụng** để bật lại.

### "Số TK chỉ gồm chữ, số, gạch dưới (_); không dấu, không khoảng trắng" 

Nguyên nhân: số tài khoản có dấu cách, dấu tiếng Việt hoặc ký tự đặc biệt.
Cách xử lý: chỉ nhập chữ, số, gạch dưới.

### "Chọn loại đối tượng" 

Nguyên nhân: đã tick **Đối tượng** nhưng chưa chọn **Nhà cung cấp** / **Khách hàng** / **Nhân viên**.
Cách xử lý: chọn loại đối tượng hoặc bỏ tick **Đối tượng**.

### "Lỗi xóa.: Không thể xóa: tài khoản còn tài khoản con. Hãy chuyển/xóa TK con trước." 

Nguyên nhân: tài khoản đang có tài khoản con.
Cách xử lý: xoá hoặc chuyển các tài khoản con rồi xoá lại.

### "Lỗi xóa.: Không thể xóa: tài khoản đã phát sinh bút toán. Hãy dùng "Ngưng sử dụng"." 

Nguyên nhân: tài khoản đã có dòng bút toán.
Cách xử lý: dùng **Ngừng sử dụng**.

## 10. Câu hỏi thường gặp

**Muốn tài khoản nằm dưới tài khoản nào thì làm sao?**
Đặt số tài khoản bắt đầu bằng số của tài khoản cha. Ô **Tài khoản tổng hợp** chỉ là gợi ý, hệ thống tính lại khi lưu.

**Ngừng sử dụng có ảnh hưởng số liệu cũ không?**
Không. Sổ, bút toán, báo cáo cũ giữ nguyên. Chỉ không chọn được tài khoản đó khi lập chứng từ mới. Tài khoản còn số dư thì nên chuyển số dư trước khi ngừng.

## 11. Công việc tiếp theo

```text
Tài khoản mới → gắn vào Cấu hình hạch toán (TL-A11)
              → lập phiếu thu / chi, hạch toán lương (sổ tay Kế toán)
Nhiều tài khoản mới → Import Excel (TL-A10.1)
Dùng nhầm tài khoản → Chuyển tài khoản hạch toán (TL-A10.2)
```

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH CẤU HÌNH HẠCH TOÁN](/bai-viet/2026-11-07-tl-a11-0-tong-quan-man-hinh-cau-hinh-hach-toan/) – Tổng quan màn hình Cấu hình hạch toán.

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN IMPORT HỆ THỐNG TÀI KHOẢN TỪ EXCEL](/bai-viet/2026-11-07-tl-a10-1-huong-dan-import-he-thong-tai-khoan-tu-excel/) – Import hệ thống tài khoản từ Excel
- [HƯỚNG DẪN CHUYỂN TÀI KHOẢN HẠCH TOÁN VÀ XEM NHẬT KÝ CHUYỂN](/bai-viet/2026-11-07-tl-a10-2-huong-dan-chuyen-tai-khoan-hach-toan-va-xem-nhat-ky-chuyen/) – Chuyển tài khoản hạch toán và nhật ký chuyển
- [TỔNG QUAN MÀN HÌNH CẤU HÌNH HẠCH TOÁN](/bai-viet/2026-11-07-tl-a11-0-tong-quan-man-hinh-cau-hinh-hach-toan/) – Tổng quan màn hình Cấu hình hạch toán
- Sổ tay Kế toán – Phiếu thu, Phiếu chi, Sổ chi tiết tài khoản, Bảng cân đối phát sinh
