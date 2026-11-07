---
title: "HƯỚNG DẪN IMPORT TÀI KHOẢN, QUỸ TỪ EXCEL"
date: "2026-11-07"
summary: "Khi cần tạo nhiều quỹ cùng lúc (ví dụ lúc triển khai ERP có nhiều tài khoản ngân hàng), bạn nhập vào file Excel mẫu rồi nạp lên ERP."
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

Khi cần tạo nhiều quỹ cùng lúc (ví dụ lúc triển khai ERP có nhiều tài khoản ngân hàng), bạn nhập vào file Excel mẫu rồi nạp lên ERP. Cửa sổ **QUỸ TÀI KHOẢN - IMPORT TỪ EXCEL** tự đối chiếu **tên viết tắt ngân hàng** với danh mục ngân hàng để điền sẵn tên ngân hàng và **BIN CODE** (dùng tạo mã QR), báo dòng có vấn đề ở cột **Ghi chú lỗi**, cho sửa tay trước khi lưu.

Import chỉ **thêm mới** (không sửa quỹ đã có), quỹ lưu ở trạng thái **Kích hoạt** và thuộc **chi nhánh đang làm việc**. Import **không gán người sử dụng**: lưu xong phải gán ([HƯỚNG DẪN GÁN NGƯỜI SỬ DỤNG CHO QUỸ](/bai-viet/2026-11-07-tl-a06-3-huong-dan-gan-nguoi-su-dung-cho-quy/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Thêm mới** màn **Tài khoản, quỹ**.
- File Excel `.xlsx` hoặc `.xls`, điền theo file mẫu (xem phần “Thực hiện trên phần mềm”).
- Mã quỹ trong file chưa có trên hệ thống (kể cả quỹ đã ngưng sử dụng).
- Quỹ ngân hàng: biết **tên viết tắt** của ngân hàng đúng như danh mục ngân hàng của ERP (cùng danh sách hiện ở ô **BIN CODE** của cửa sổ quỹ).

## 2. Mở chức năng

**Thiết lập danh mục → Tài khoản, quỹ → Import Excel**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Hình 1: Cửa sổ import Quỹ tài khoản trước khi tải file; bảng hiện không có dữ liệu.](/posts/2026-11-07-tl-a06-2-huong-dan-import-tai-khoan-quy-tu-excel/ui-20261026-tl-a06-import-figure-01.png)

- **Bảng xem trước**: Chức năng: Các cột **Mã quỹ**, **Tên quỹ**, **Điện thoại**, **Địa chỉ**, **Mã số thuế**, nhóm **Thông tin ngân hàng** (**Tên ngân hàng**, **Số tài khoản**, **Chủ tài khoản**), **Người đại diện**, **Chức vụ**, **Ghi chú lỗi**. Bấm vào ô để sửa; biểu tượng thùng rác cuối dòng để xoá dòng
- **Thêm một hàng**: Chức năng: Thêm một dòng trống để nhập tay
- **Tải lên từ Excel**: Chức năng: Chọn file `.xlsx` / `.xls` từ máy
- **Tải file mẫu**: Chức năng: Tải file `[TEMPLATE IMPORT] QUY TAI KHOAN.xlsx`
- **Lưu / Đóng**: Chức năng: Lưu cả bảng / đóng không lưu

## 4. Trình tự công việc

```text
Tải file mẫu ──► điền dữ liệu ──► Tải lên từ Excel
                                     ↓
          Hệ thống đối chiếu: mã quỹ đã có? ngân hàng có trong danh mục?
                                     ↓
        Bảng xem trước: dòng có vấn đề ghi rõ ở cột Ghi chú lỗi
                                     ↓
                  Sửa ô / xoá dòng sai ──► Lưu
                       ├── có lỗi ──► báo lỗi, KHÔNG quỹ nào được lưu
                       └── hợp lệ ──► "Lưu thành công", cửa sổ đóng, danh sách tải lại
                                     ↓
                    Gán Người sử dụng cho từng quỹ mới (TL-A06.3)
```

## 5. Thực hiện trên phần mềm

**Bước 1 –** Bấm **Tải file mẫu**, mở file và điền mỗi quỹ một dòng. Dòng đầu của file mẫu là tên cột, **giữ nguyên, không đổi tên cột**:

- **`maquy`**: Ý nghĩa: Mã quỹ (bắt buộc)
- **`tenquy`**: Ý nghĩa: Tên quỹ (bắt buộc)
- **`tencongty`**: Ý nghĩa: **Chủ tài khoản** (hiện ở cột **Chủ tài khoản** của bảng xem trước)
- **`shortname`**: Ý nghĩa: Tên viết tắt ngân hàng; để trống với quỹ tiền mặt
- **`sotaikhoan`**: Ý nghĩa: Số tài khoản ngân hàng
- **`dienthoai`, `fax`, `diachi`, `masothue`**: Ý nghĩa: Liên hệ, thuế
- **`nguoidaidien`, `chucvu`**: Ý nghĩa: Người đại diện, chức vụ
- **`ghichu`**: Ý nghĩa: Ghi chú

**Bước 2 –** Bấm **Tải lên từ Excel** và chọn đúng **một** file. ERP đọc **sheet đầu tiên**. Dòng không có `maquy` bị bỏ qua.

**Bước 3 –** Đọc cột **Ghi chú lỗi**:

- **`!!! Mã quỹ này đã tồn tại.`**: Ý nghĩa: Mã đã có trên hệ thống; Cách xử lý: Đổi mã hoặc xoá dòng
- **`Tên ngân hàng không hợp lệ!!!`**: Ý nghĩa: Tên viết tắt ngân hàng không có trong danh mục; Cách xử lý: Sửa lại ô **Tên ngân hàng**; nếu vẫn không được thì để trống rồi bổ sung bằng **Sửa** sau

Câu ghi chú lỗi kết thúc bằng **Vui long kiem tra lai.** (viết không dấu). Ô **Tên ngân hàng** để trống thì không báo lỗi.

**Bước 4 –** Khi ngân hàng khớp, hệ thống tự điền tên ngân hàng đầy đủ và **BIN CODE** (không hiện trên bảng xem trước). Nếu bạn **sửa tay** ô **Tên ngân hàng** sau khi tải lên thì BIN CODE không đổi theo; hãy sửa file rồi tải lại.

**Bước 5 –** Xoá dòng không dùng (xoá ngay, không hỏi lại) hoặc **Thêm một hàng**. Rồi bấm **Lưu**. Toàn bộ bảng được lưu cùng lúc; chỉ cần một dòng lỗi thì không quỹ nào được lưu.

**Bước 6 –** Gán người sử dụng cho các quỹ vừa nạp ([HƯỚNG DẪN GÁN NGƯỜI SỬ DỤNG CHO QUỸ](/bai-viet/2026-11-07-tl-a06-3-huong-dan-gan-nguoi-su-dung-cho-quy/)).

## 6. Giải thích các thông tin trên màn hình

- **Mã quỹ (`maquy`)**: Ý nghĩa: Mã viết liền; Bắt buộc: Có; Lưu ý: Không trùng mã đã có và không trùng giữa các dòng; mã tự nhập
- **Tên quỹ (`tenquy`)**: Ý nghĩa: Tên quỹ; Bắt buộc: Có
- **Chủ tài khoản (`tencongty`)**: Ý nghĩa: Chủ tài khoản; Bắt buộc: Không
- **Tên ngân hàng (`shortname`)**: Ý nghĩa: Tên viết tắt ngân hàng; Bắt buộc: Không; Lưu ý: Phải có trong danh mục ngân hàng; tự điền tên đầy đủ và BIN CODE
- **Số tài khoản (`sotaikhoan`)**: Ý nghĩa: Số tài khoản; Bắt buộc: Không; Lưu ý: Nhập tay, hệ thống không kiểm tra đúng sai
- **Các cột còn lại**: Ý nghĩa: Liên hệ, thuế, người đại diện; Bắt buộc: Không

Cửa sổ import **không** kiểm từng dòng như cửa sổ thêm tay (không báo mã quá ngắn, mã có khoảng trắng…). Nên điền đúng quy tắc ở [TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ](/bai-viet/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/) ngay trong file.

## 7. Kiểm tra sau khi thực hiện

Các quỹ trong bảng được thêm vào danh sách, trạng thái **Kích hoạt**, thuộc chi nhánh đang làm việc. Quỹ có ngân hàng khớp có thể đã được điền BIN CODE; chỉ xác nhận mã QR sau khi kiểm đúng số tài khoản, BIN CODE và bản in thử. Chưa quỹ nào có người sử dụng.

## 8. Những điều cần lưu ý

⚠️ Import **chỉ thêm mới**. Muốn sửa quỹ đã có, dùng liên kết **Sửa** ([TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ](/bai-viet/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/)).

⚠️ **Lưu theo kiểu tất cả hoặc không có gì**: chỉ cần một dòng trùng mã thì không quỹ nào được lưu.

⚠️ **Quỹ nạp bằng Excel chưa ai dùng được** cho đến khi gán người sử dụng; tài khoản không phải quản trị cao nhất cũng chưa thấy quỹ trong danh sách.

⚠️ Kiểm tra kỹ **Số tài khoản** trong file trước khi lưu: số sai làm mã QR trên phiếu bán hàng sai.

⚠️ **Không đổi tên cột** ở dòng đầu file mẫu.

### "Vui lòng chọn đúng 1 file." 

Nguyên nhân: không chọn file hoặc chọn nhiều file.
Cách xử lý: chọn đúng một file `.xlsx` / `.xls`.

### Bảng xem trước trống sau khi tải file 

Nguyên nhân: sheet đầu không có dữ liệu, tên cột khác file mẫu hoặc cột `maquy` để trống.
Cách xử lý: dùng lại file mẫu, giữ nguyên dòng tên cột.

### "Lỗi khi lưu dữ liệu: …" 

Nguyên nhân: có dòng trùng mã quỹ, hoặc không đủ quyền **Thêm mới**.
Cách xử lý: sửa dòng lỗi rồi **Lưu** lại; báo không có quyền thì liên hệ quản trị hệ thống.

## 10. Câu hỏi thường gặp

**Import có ghi đè quỹ đã có không?**
Không; mã đã có bị báo ở **Ghi chú lỗi** và bị từ chối khi lưu.

**Không biết tên viết tắt ngân hàng thì sao?**
Mở cửa sổ **THÊM QUỸ** ([TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ](/bai-viet/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/)) và xem danh sách ở ô **BIN CODE** (mỗi dòng hiện *mã BIN, tên viết tắt, tên ngân hàng*); lấy tên viết tắt đưa vào file.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN GÁN NGƯỜI SỬ DỤNG CHO QUỸ](/bai-viet/2026-11-07-tl-a06-3-huong-dan-gan-nguoi-su-dung-cho-quy/) – Hướng dẫn gán người sử dụng cho quỹ.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ](/bai-viet/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/) – Tổng quan màn hình Tài khoản, quỹ
- [HƯỚNG DẪN GÁN NGƯỜI SỬ DỤNG CHO QUỸ](/bai-viet/2026-11-07-tl-a06-3-huong-dan-gan-nguoi-su-dung-cho-quy/) – Hướng dẫn gán người sử dụng cho quỹ
