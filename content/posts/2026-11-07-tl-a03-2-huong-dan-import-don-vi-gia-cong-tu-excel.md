---
title: "HƯỚNG DẪN IMPORT ĐƠN VỊ GIA CÔNG TỪ EXCEL"
date: "2026-11-07"
summary: "Khi cần tạo nhiều đơn vị gia công cùng lúc, bạn nhập vào file Excel mẫu rồi nạp lên ERP."
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

Khi cần tạo nhiều đơn vị gia công cùng lúc, bạn nhập vào file Excel mẫu rồi nạp lên ERP. Cửa sổ **ĐƠN VỊ GIA CÔNG - IMPORT TỪ EXCEL** tự đối chiếu **mã kho** và **tên ngân hàng** với danh mục có sẵn, báo dòng nào có vấn đề ở cột **Ghi chú**, cho sửa tay trước khi lưu.

Import chỉ **thêm mới** (không sửa đơn vị đã có), đơn vị lưu ở trạng thái **Kích hoạt**, thuộc **chi nhánh đang làm việc**, và **không có Nhóm GC** (xem [TỔNG QUAN MÀN HÌNH ĐƠN VỊ GIA CÔNG](/bai-viet/2026-11-07-tl-a03-0-tong-quan-man-hinh-don-vi-gia-cong/) để đặt sau).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Thêm mới** màn **Đơn vị gia công**.
- **Kho hàng** dùng làm kho gia công đã có (TL-A09) và **chưa gán** cho đơn vị gia công nào khác. Mỗi dòng trong file dùng **một mã kho riêng**.
- Tên ngân hàng trong file đúng **tên viết tắt** có trong danh mục ngân hàng của hệ thống.
- Mã đơn vị gia công trong file chưa có trên hệ thống.

## 2. Mở chức năng

**Thiết lập danh mục → Đơn vị gia công → Import Excel**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Hình 1: Cửa sổ import Đơn vị gia công trước khi tải file; bảng hiện không có dữ liệu.](/posts/2026-11-07-tl-a03-2-huong-dan-import-don-vi-gia-cong-tu-excel/ui-20261026-tl-a03-import-figure-01.png)

- **Bảng xem trước**: Chức năng: Các cột **Mã đơn vị gia công**, **Tên đơn vị gia công**, **SĐT**, **Địa chỉ**, **Mã số thuế**, nhóm **Thông tin ngân hàng** (**Tên ngân hàng**, **Số tài khoản**, **Chủ tài khoản**), **Mã kho gia công**, **Ghi chú**. Bấm vào ô để sửa; biểu tượng thùng rác cuối dòng để xoá dòng
- **Thêm một hàng**: Chức năng: Thêm một dòng trống để nhập tay
- **Tải lên từ Excel**: Chức năng: Chọn file `.xlsx` / `.xls` từ máy
- **Tải file mẫu**: Chức năng: Tải file `[TEMPLATE IMPORT] DON VI GIA CONG.xlsx`
- **Lưu / Đóng**: Chức năng: Lưu cả bảng / đóng không lưu

## 4. Trình tự công việc

```text
Tải file mẫu ──► điền dữ liệu ──► Tải lên từ Excel
                                     ↓
            Hệ thống đối chiếu: mã đơn vị đã có? mã kho có? ngân hàng có?
                                     ↓
              Bảng xem trước: dòng có vấn đề ghi rõ ở cột Ghi chú
                                     ↓
                  Sửa ô / xoá dòng sai ──► Lưu
                       ├── có lỗi ──► báo lỗi, KHÔNG đơn vị nào được lưu
                       └── hợp lệ ──► "Lưu thành công", cửa sổ đóng, danh sách tải lại
```

## 5. Thực hiện trên phần mềm

**Bước 1 –** Bấm **Tải file mẫu**, mở file và điền mỗi đơn vị một dòng. Dòng đầu của file mẫu là tên cột, **giữ nguyên, không đổi tên cột**:

- **`maDV`**: Ý nghĩa: Mã đơn vị gia công (bắt buộc)
- **`tenDVGC`**: Ý nghĩa: Tên đơn vị gia công (bắt buộc)
- **`sdt`, `diaChi`, `maSoThue`**: Ý nghĩa: Điện thoại, địa chỉ, mã số thuế
- **`shortname`**: Ý nghĩa: Tên viết tắt của ngân hàng (ví dụ mã ngân hàng trong danh mục ngân hàng của ERP)
- **`soTaiKhoan`, `chuTaiKhoan`**: Ý nghĩa: Số tài khoản, chủ tài khoản
- **`maKhoHang`**: Ý nghĩa: **Mã kho hàng** dùng làm kho gia công (bắt buộc)
- **`ghiChu`**: Ý nghĩa: Ghi chú

**Bước 2 –** Bấm **Tải lên từ Excel** và chọn đúng **một** file. ERP đọc **sheet đầu tiên**. Dòng không có `maDV` bị bỏ qua.

**Bước 3 –** Đọc cột **Ghi chú** của bảng. Các câu hệ thống có thể ghi:

- **`!!! Đơn vị này đã tồn tại.`**: Ý nghĩa: Mã đã có trên hệ thống; Cách xử lý: Đổi mã hoặc xoá dòng
- **`Mã kho không hợp lệ hoặc đã có đơn vị khác sử dụng !!`**: Ý nghĩa: Không tìm thấy kho có mã trong cột **Mã kho gia công**; Cách xử lý: Sửa đúng mã kho (xem [TỔNG QUAN MÀN HÌNH KHO HÀNG](/bai-viet/2026-11-07-tl-a09-0-tong-quan-man-hinh-kho-hang/))
- **`Mã ngân hàng '…' không hợp lệ.`**: Ý nghĩa: Tên viết tắt ngân hàng không có trong danh mục; cũng hiện khi ô để trống; Cách xử lý: Sửa tên viết tắt; nếu không biết ngân hàng thì để trống rồi bổ sung sau bằng **Sửa**

Hết câu ghi chú luôn có **Vui lòng kiểm tra lại.** Dòng không có vấn đề giữ nguyên ghi chú trong file.

**Bước 4 –** Sửa ô sai, xoá dòng không dùng (xoá ngay, không hỏi lại), hoặc bấm **Thêm một hàng**. Dòng có ghi chú lỗi **vẫn có thể bấm Lưu**, nhưng nếu mã kho sai hoặc kho đã gán cho đơn vị khác thì lần lưu sẽ bị từ chối.

**Bước 5 –** Bấm **Lưu**. Toàn bộ bảng được lưu cùng lúc; chỉ cần một dòng lỗi thì không đơn vị nào được lưu.

## 6. Giải thích các thông tin trên màn hình

- **Mã đơn vị gia công (`maDV`)**: Ý nghĩa: Mã viết liền; Bắt buộc: Có; Lưu ý: Không trùng mã đã có và không trùng giữa các dòng; mã tự nhập
- **Tên đơn vị gia công (`tenDVGC`)**: Ý nghĩa: Tên đơn vị; Bắt buộc: Có
- **Mã kho gia công (`maKhoHang`)**: Ý nghĩa: Mã kho hàng làm kho gia công; Bắt buộc: Có; Lưu ý: Kho phải có thật; mỗi kho chỉ gán cho một đơn vị
- **Tên ngân hàng (`shortname`)**: Ý nghĩa: Tên viết tắt ngân hàng; Bắt buộc: Không; Lưu ý: Hệ thống thay bằng tên đầy đủ của ngân hàng khi tìm thấy
- **Số tài khoản, Chủ tài khoản**: Ý nghĩa: Tài khoản ngân hàng; Bắt buộc: Không; Lưu ý: Nhập tay, hệ thống không kiểm tra đúng sai
- **SĐT, Mã số thuế, Địa chỉ, Ghi chú**: Ý nghĩa: Thông tin liên hệ; Bắt buộc: Không; Lưu ý: SĐT, mã số thuế tối đa 20 ký tự

Cửa sổ import **không** kiểm từng dòng như cửa sổ thêm tay (không báo mã quá ngắn, mã có khoảng trắng…). Nên điền đúng quy tắc ở [TỔNG QUAN MÀN HÌNH ĐƠN VỊ GIA CÔNG](/bai-viet/2026-11-07-tl-a03-0-tong-quan-man-hinh-don-vi-gia-cong/) ngay trong file.

## 7. Kiểm tra sau khi thực hiện

Tất cả đơn vị gia công trong bảng được thêm, trạng thái **Kích hoạt**, thuộc chi nhánh đang làm việc, mỗi đơn vị gắn một kho gia công. Cột **Nhóm GC** trống.

## 8. Những điều cần lưu ý

⚠️ Import **chỉ thêm mới**. Muốn sửa đơn vị đã có, dùng liên kết **Sửa** ([TỔNG QUAN MÀN HÌNH ĐƠN VỊ GIA CÔNG](/bai-viet/2026-11-07-tl-a03-0-tong-quan-man-hinh-don-vi-gia-cong/)).

⚠️ **Lưu theo kiểu tất cả hoặc không có gì**: chỉ cần một dòng sai thì không đơn vị nào được lưu.

⚠️ Ghi chú "đã có đơn vị khác sử dụng" **không** được kiểm lúc xem trước. Kho đã gán cho đơn vị khác chỉ bị chặn khi bấm **Lưu**.

⚠️ **Không đổi tên cột** ở dòng đầu file mẫu.

### "Vui lòng chọn đúng 1 file." 

Nguyên nhân: không chọn file hoặc chọn nhiều file.
Cách xử lý: chọn đúng một file `.xlsx` / `.xls`.

### Bảng xem trước trống sau khi tải file 

Nguyên nhân: sheet đầu không có dữ liệu, tên cột khác file mẫu hoặc cột `maDV` để trống.
Cách xử lý: dùng lại file mẫu, giữ nguyên dòng tên cột.

### "Kho đã được sử dụng cho đơn vị khác: Mã đã tồn tại." 

Nguyên nhân: có dòng dùng kho đã gán cho đơn vị gia công khác, hoặc hai dòng trong file dùng cùng một kho.
Cách xử lý: đổi sang kho chưa gán; xem [TỔNG QUAN MÀN HÌNH ĐƠN VỊ GIA CÔNG](/bai-viet/2026-11-07-tl-a03-0-tong-quan-man-hinh-don-vi-gia-cong/) phần “Vướng mắc thường gặp”.

### "Lỗi khi lưu dữ liệu: …" 

Nguyên nhân: dòng thiếu mã kho / mã kho sai, trùng mã đơn vị, hoặc không đủ quyền **Thêm mới**.
Cách xử lý: sửa dòng lỗi rồi **Lưu** lại; báo không có quyền thì liên hệ quản trị hệ thống.

## 10. Câu hỏi thường gặp

**Import có ghi đè đơn vị đã có không?**
Không; mã đã có sẽ bị báo ở **Ghi chú** và bị từ chối khi lưu.

**Không biết tên viết tắt ngân hàng thì sao?**
Để trống ô **Tên ngân hàng**: dòng vẫn lưu được; ghi chú báo "không hợp lệ" chỉ là nhắc nhở. Bổ sung bằng **Sửa** sau.

## 11. Công việc tiếp theo

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH ĐƠN VỊ GIA CÔNG](/bai-viet/2026-11-07-tl-a03-0-tong-quan-man-hinh-don-vi-gia-cong/) – mở **Sửa** từng đơn vị để chọn **Gia công ngoài** hoặc **TẠI KHO** nếu cần.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH ĐƠN VỊ GIA CÔNG](/bai-viet/2026-11-07-tl-a03-0-tong-quan-man-hinh-don-vi-gia-cong/) – Tổng quan màn hình Đơn vị gia công
- [TỔNG QUAN MÀN HÌNH KHO HÀNG](/bai-viet/2026-11-07-tl-a09-0-tong-quan-man-hinh-kho-hang/) – Tổng quan màn hình Kho hàng
