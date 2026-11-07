---
title: "TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ"
date: "2026-11-07"
summary: "Màn hình Tài khoản, quỹ (tiêu đề QUỸ TÀI KHOẢN - DANH SÁCH) liệt kê các quỹ tiền của công ty: quỹ tiền mặt và các tài khoản ngân hàng."
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

Màn hình **Tài khoản, quỹ** (tiêu đề **QUỸ TÀI KHOẢN - DANH SÁCH**) liệt kê các **quỹ tiền** của công ty: quỹ tiền mặt và các tài khoản ngân hàng. Mỗi quỹ có mã, tên, chủ tài khoản, số tài khoản, ngân hàng và người được phép dùng quỹ.

Đây là danh mục nền của **kế toán tiền**: mọi phiếu thu, phiếu chi, chuyển tiền nội bộ, lệnh vay đều phải chọn một quỹ, và **số dư quỹ** thay đổi theo các chứng từ đó. Quỹ còn được dùng ở:

- **Phiếu bán hàng**: chọn quỹ nhận tiền; khi quỹ có **BIN CODE** và **số tài khoản**, phiếu bán hàng in ra có **mã QR chuyển khoản** (VietQR) với đúng số tiền và nội dung thanh toán.
- **Cấu hình hạch toán** (TL-A11): mỗi quỹ gắn với tài khoản kế toán để sinh bút toán.
- **Thống kê tồn quỹ** (KT-B02): số dư hiện tại của từng quỹ.

**Mỗi tài khoản người dùng chỉ thấy các quỹ được gán cho mình** (trừ tài khoản quản trị cao nhất). Gán người dùng cho quỹ làm ở menu chuột phải **Người sử dụng** ([HƯỚNG DẪN GÁN NGƯỜI SỬ DỤNG CHO QUỸ](/bai-viet/2026-11-07-tl-a06-3-huong-dan-gan-nguoi-su-dung-cho-quy/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Tài khoản, quỹ**.
- **Chi nhánh / Đơn vị** đã có (TL-A01).
- Có sẵn thông tin tài khoản ngân hàng của quỹ (chủ tài khoản, số tài khoản, ngân hàng). Muốn in mã QR: biết ngân hàng của quỹ để chọn **BIN CODE**.

## 2. Mở chức năng

**Thiết lập danh mục → Tài khoản, quỹ**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Hình 1: QUỸ TÀI KHOẢN - DANH SÁCH — chỉ xem; đã che thông tin nhạy cảm.](/posts/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/ui-20261026-tl-a06-ds-figure-01.png)

- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM QUỸ**; Hướng dẫn: phần “Thực hiện trên phần mềm”, [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Import Excel**: Chức năng: Mở cửa sổ **QUỸ TÀI KHOẢN - IMPORT TỪ EXCEL**; Hướng dẫn: [HƯỚNG DẪN IMPORT TÀI KHOẢN, QUỸ TỪ EXCEL](/bai-viet/2026-11-07-tl-a06-2-huong-dan-import-tai-khoan-quy-tu-excel/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá một dòng; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Menu chuột phải một dòng: Người sử dụng**: Chức năng: Gán người dùng cho quỹ (khi có quyền **Phân quyền**); Hướng dẫn: [HƯỚNG DẪN GÁN NGƯỜI SỬ DỤNG CHO QUỸ](/bai-viet/2026-11-07-tl-a06-3-huong-dan-gan-nguoi-su-dung-cho-quy/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Xóa** (hiện theo quyền)
- **Mã quỹ, Tên quỹ**: Ý nghĩa: Mã và tên quỹ
- **Tên công ty/Chủ tài khoản**: Ý nghĩa: Chủ tài khoản (ô **CHỦ TÀI KHOẢN** trên cửa sổ)
- **Điện thoại, Fax, Mã số thuế, Địa chỉ**: Ý nghĩa: Thông tin liên hệ, thuế
- **Người đại diện, Chức vụ**: Ý nghĩa: Người đại diện và chức vụ
- **Số tài khoản, Tên ngân hàng**: Ý nghĩa: Tài khoản ngân hàng của quỹ
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n**. Danh sách hiện cả quỹ **Ngưng sử dụng**. Nhấp đúp vào một dòng mở cửa sổ chỉ xem **THÔNG TIN QUỸ**.

![Hình 2: Biểu mẫu THÊM QUỸ trống, chưa lưu.](/posts/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/ui-20261026-tl-a06-form-figure-02.png)

- **MÃ QUỸ, TÊN QUỸ**: Ý nghĩa: Hai trường bắt buộc
- **CHỦ TÀI KHOẢN, TẠI NGÂN HÀNG, SỐ TÀI KHOẢN**: Ý nghĩa: Thông tin tài khoản ngân hàng
- **BIN CODE**: Ý nghĩa: Chọn ngân hàng để tạo mã QR; gợi ý *Tạo qr code...*
- **MÃ SỐ THUẾ, ĐỊA CHỈ, ĐIỆN THOẠI, FAX, NGƯỜI ĐẠI DIỆN, CHỨC VỤ**: Ý nghĩa: Thông tin pháp nhân / liên hệ
- **GHI CHÚ và ô Kích hoạt**: Ý nghĩa: Ghi chú, trạng thái
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

Tiêu đề cửa sổ: **THÊM QUỸ**, **CẬP NHẬT QUỸ**, **THÔNG TIN QUỸ** (chỉ xem).

## 4. Trình tự công việc

```text
Tài khoản, quỹ (TL-A06)
   ├── gán Người sử dụng (TL-A06.3) ──► ai thấy, ai dùng được quỹ
   ├── BIN CODE + Số tài khoản ──► mã QR trên phiếu bán hàng in
   └── Cấu hình hạch toán (TL-A11): quỹ → tài khoản kế toán
      ↓
Phiếu thu · Phiếu chi · Chuyển tiền nội bộ · Lệnh vay · Phiếu bán hàng
      ↓
Số dư quỹ thay đổi ──► Thống kê tồn quỹ (KT-B02), bút toán kế toán
```

### Khai báo quỹ mới

**Bước 1 –** Nhập **MÃ QUỸ** (viết liền, không khoảng trắng, ít nhất 2 ký tự) và **TÊN QUỸ** (ít nhất 2 ký tự). Mã được kiểm trùng ngay khi rời ô mã.

**Bước 2 –** Quỹ là tài khoản ngân hàng: nhập **CHỦ TÀI KHOẢN**, **SỐ TÀI KHOẢN**, **TẠI NGÂN HÀNG**. Quỹ tiền mặt: để trống các ô này.

**Bước 3 –** Muốn phiếu bán hàng in kèm mã QR: chọn **BIN CODE** (gõ để tìm; mỗi dòng hiện *mã BIN, tên viết tắt, tên ngân hàng*). Cần có cả **BIN CODE** và **SỐ TÀI KHOẢN** thì mã QR mới được tạo.

**Bước 4 –** Nhập các thông tin pháp nhân (**MÃ SỐ THUẾ**, **ĐỊA CHỈ**, **ĐIỆN THOẠI**, **FAX**, **NGƯỜI ĐẠI DIỆN**, **CHỨC VỤ**) nếu cần; để tick **Kích hoạt**; lưu.

**Bước 5 –** **Gán người sử dụng** cho quỹ mới ([HƯỚNG DẪN GÁN NGƯỜI SỬ DỤNG CHO QUỸ](/bai-viet/2026-11-07-tl-a06-3-huong-dan-gan-nguoi-su-dung-cho-quy/)). Nếu không gán, tài khoản không phải quản trị cao nhất sẽ **không thấy quỹ vừa tạo** (kể cả người vừa tạo), và không chọn được quỹ ở phiếu thu / phiếu chi.

### Sửa, ngưng sử dụng, xoá

- Đổi **SỐ TÀI KHOẢN**, **BIN CODE** chỉ ảnh hưởng mã QR của phiếu in sau đó.
- Bỏ tick **Kích hoạt** để ngưng dùng: quỹ không còn để chọn ở chứng từ mới; số dư và chứng từ cũ giữ nguyên.
- Chỉ xoá được quỹ **chưa dùng ở đâu**: chưa có phiếu thu, phiếu chi, chuyển tiền nội bộ, lệnh vay, phiếu bán hàng, chưa kết nối MISA **và chưa gán cho người dùng nào**. Quỹ đã gán người sử dụng không xoá được (xem phần “Những điều cần lưu ý”). Đã dùng thì chuyển sang **Ngưng sử dụng**.

- **Thêm nhiều quỹ một lần**: Bài hướng dẫn: [HƯỚNG DẪN IMPORT TÀI KHOẢN, QUỸ TỪ EXCEL](/bai-viet/2026-11-07-tl-a06-2-huong-dan-import-tai-khoan-quy-tu-excel/)
- **Gán người sử dụng cho quỹ**: Bài hướng dẫn: [HƯỚNG DẪN GÁN NGƯỜI SỬ DỤNG CHO QUỸ](/bai-viet/2026-11-07-tl-a06-3-huong-dan-gan-nguoi-su-dung-cho-quy/)
- **Gắn quỹ vào tài khoản kế toán**: Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH CẤU HÌNH HẠCH TOÁN](/bai-viet/2026-11-07-tl-a11-0-tong-quan-man-hinh-cau-hinh-hach-toan/)
- **Tìm, lọc, chọn cột**: Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Thêm, sửa, xoá, xem chi tiết**: Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

## 6. Giải thích các thông tin trên màn hình

- **Mã quỹ**: Ý nghĩa: Mã viết liền của quỹ; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự, không khoảng trắng; **duy nhất toàn hệ thống**, không phân biệt hoa / thường (kể cả quỹ ngưng dùng). Mã tự nhập, hệ thống không tự sinh
- **Tên quỹ**: Ý nghĩa: Tên quỹ; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự
- **Chủ tài khoản**: Ý nghĩa: Tên chủ tài khoản (hoặc công ty); Bắt buộc: Không; Lưu ý: Cột **Tên công ty/Chủ tài khoản** trên danh sách
- **BIN CODE**: Ý nghĩa: Ngân hàng dùng để tạo mã QR; Bắt buộc: Không; Lưu ý: Chọn từ danh mục ngân hàng; cần kèm **SỐ TÀI KHOẢN**
- **Tại ngân hàng**: Ý nghĩa: Tên ngân hàng (chữ); Bắt buộc: Không; Lưu ý: Nhập tay, không tự điền theo **BIN CODE**
- **Số tài khoản**: Ý nghĩa: Số tài khoản ngân hàng; Bắt buộc: Không; Lưu ý: Nhập tay, hệ thống không kiểm tra đúng sai
- **Mã số thuế, Địa chỉ, Điện thoại, Fax**: Ý nghĩa: Thông tin pháp nhân / liên hệ; Bắt buộc: Không
- **Người đại diện, Chức vụ**: Ý nghĩa: Người đại diện và chức vụ; Bắt buộc: Không
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

Khi thêm, hệ thống ghi quỹ thuộc **chi nhánh đang làm việc**, nhưng danh sách **không lọc theo chi nhánh**: người được gán quỹ thấy quỹ ở các chi nhánh trong cùng cơ sở dữ liệu ERP.

## 7. Kiểm tra sau khi thực hiện

Quỹ được lưu, hiện trên danh sách của những người được gán, chọn được ở chứng từ tiền. Số dư quỹ chỉ phát sinh khi có phiếu thu, phiếu chi, chuyển tiền nội bộ…

## 8. Những điều cần lưu ý

⚠️ **Quỹ vừa tạo chưa ai dùng được cho đến khi gán người sử dụng.** Tài khoản không phải quản trị cao nhất chỉ thấy quỹ được gán cho mình, ở cả màn này lẫn ô chọn quỹ trên chứng từ.

⚠️ **Quỹ đã gán cho ít nhất một người dùng thì không xoá được** (lỗi liên kết dữ liệu), dù chưa có chứng từ nào. Bình thường hãy **Ngưng sử dụng** thay vì xoá.

⚠️ Quỹ đã có chứng từ (phiếu thu, phiếu chi, chuyển tiền…), đã gắn tài khoản kế toán hoặc đã kết nối MISA **không xoá được**.

⚠️ Số tài khoản, BIN CODE sai làm **mã QR trên phiếu bán hàng sai**, khách có thể chuyển nhầm. Kiểm tra lại sau khi lưu bằng cách in thử một phiếu.

⚠️ Hộp xác nhận xoá hỏi **Bạn có muốn xóa quỹ này?**.

### "Nhập mã quỹ" / "Mã quỹ quá ngắn" / "Nhập tên quỹ" / "Tên quỹ quá ngắn" 

Nguyên nhân: để trống hoặc nhập quá ngắn.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "Mã không hợp lệ. Viết liền không dấu và không chứa kí tự đặc biệt." 

Nguyên nhân: mã có khoảng trắng.
Cách xử lý: viết liền, ví dụ `QUYTM01`.

### "Mã đã tồn tại" 

Nguyên nhân: đã có quỹ cùng mã (kể cả quỹ ngưng dùng).
Cách xử lý: đặt mã khác, hoặc tìm dòng cũ và tick lại **Kích hoạt**.

### "Lỗi xóa.: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: quỹ đã có chứng từ, đã gán người sử dụng hoặc đã kết nối MISA.
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá.

### Thêm quỹ xong nhưng không thấy trong danh sách 

Nguyên nhân: tài khoản của bạn chưa được gán quỹ này.
Cách xử lý: nhờ người có quyền **Phân quyền** gán bạn trong **Người sử dụng** ([HƯỚNG DẪN GÁN NGƯỜI SỬ DỤNG CHO QUỸ](/bai-viet/2026-11-07-tl-a06-3-huong-dan-gan-nguoi-su-dung-cho-quy/)), hoặc nhờ người quản trị cao nhất kiểm tra quyền gán; không dùng tên Administrator để suy ra miễn mọi giới hạn.

## 10. Câu hỏi thường gặp

**Quỹ tiền mặt và quỹ ngân hàng khai báo khác nhau thế nào?**
Cùng một cửa sổ. Quỹ ngân hàng điền thêm **SỐ TÀI KHOẢN**, **TẠI NGÂN HÀNG**, **BIN CODE**; quỹ tiền mặt để trống các ô này.

**Quỹ ở màn này khác "Tài khoản ngân hàng" ở nhóm Kết nối AMIS thế nào?**
Màn này khai báo quỹ trên ERP. Màn **Tài khoản ngân hàng** ở **Kết nối AMIS** (TL-G05) ghép quỹ này với tài khoản ngân hàng bên MISA để đồng bộ.

**Quỹ có tách theo chi nhánh không?**
Không. Quỹ là danh mục dùng chung; quyền dùng quỹ do **Người sử dụng** quyết định.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN GÁN NGƯỜI SỬ DỤNG CHO QUỸ](/bai-viet/2026-11-07-tl-a06-3-huong-dan-gan-nguoi-su-dung-cho-quy/) – Hướng dẫn gán người sử dụng cho quỹ.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN IMPORT TÀI KHOẢN, QUỸ TỪ EXCEL](/bai-viet/2026-11-07-tl-a06-2-huong-dan-import-tai-khoan-quy-tu-excel/) – Hướng dẫn import quỹ từ Excel
- [HƯỚNG DẪN GÁN NGƯỜI SỬ DỤNG CHO QUỸ](/bai-viet/2026-11-07-tl-a06-3-huong-dan-gan-nguoi-su-dung-cho-quy/) – Hướng dẫn gán người sử dụng cho quỹ
- [TỔNG QUAN MÀN HÌNH NỘI DUNG THU CHI](/bai-viet/2026-11-07-tl-a04-0-tong-quan-man-hinh-noi-dung-thu-chi/) – Tổng quan màn hình Nội dung thu chi
- [TỔNG QUAN MÀN HÌNH CẤU HÌNH HẠCH TOÁN](/bai-viet/2026-11-07-tl-a11-0-tong-quan-man-hinh-cau-hinh-hach-toan/) – Tổng quan màn hình Cấu hình hạch toán
- TL-G05 – Tài khoản ngân hàng (MISA)
- Sổ tay Kế toán – Phiếu thu, Phiếu chi, Chuyển tiền nội bộ, Tồn quỹ
