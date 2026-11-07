---
title: "HƯỚNG DẪN GÁN NGƯỜI SỬ DỤNG CHO QUỸ"
date: "2026-11-07"
summary: "Hồng Nghi ERP giới hạn quỹ theo người dùng: mỗi tài khoản chỉ thấy và chọn được những quỹ được gán cho mình."
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

Hồng Nghi ERP **giới hạn quỹ theo người dùng**: mỗi tài khoản chỉ thấy và chọn được những quỹ được gán cho mình. Nguyên tắc này áp dụng ở màn **Tài khoản, quỹ**, ô chọn quỹ trên chứng từ, danh sách **Phiếu thu**, **Phiếu chi**, **Lệnh vay** và thống kê **Tồn quỹ** (KT-B02). Tài khoản quản trị cao nhất (superuser) thấy mọi quỹ.

Bài này hướng dẫn cửa sổ **NGƯỜI SỬ DỤNG: <tên quỹ>**: chọn những tài khoản được dùng một quỹ. Bạn cần làm bước này ngay sau khi tạo quỹ mới ([TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ](/bai-viet/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/)) hoặc nạp quỹ bằng Excel ([HƯỚNG DẪN IMPORT TÀI KHOẢN, QUỸ TỪ EXCEL](/bai-viet/2026-11-07-tl-a06-2-huong-dan-import-tai-khoan-quy-tu-excel/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Phân quyền** của màn **Tài khoản, quỹ**, và nhìn thấy quỹ cần gán trong danh sách (tài khoản quản trị cao nhất thấy mọi quỹ; tài khoản khác chỉ thấy quỹ mình được gán).
- Tài khoản người dùng cần gán đã được tạo (màn **Nhân viên** thuộc **Thiết lập nội bộ**).

## 2. Mở chức năng

**Thiết lập danh mục → Tài khoản, quỹ → nhấp chuột phải vào dòng quỹ → Người sử dụng**

## 3. Nhận biết màn hình

Đã mở menu chuột phải và cửa sổ **NGƯỜI SỬ DỤNG: TESTSUASQL** ngày 29/10/2026 bằng Administrator trên Gia Phúc localhost. Đối chiếu được tiêu đề, danh sách tài khoản, ô chọn, lọc và các nút Lưu lại/Đóng. Không tick, bỏ tick hoặc lưu quyền trong lần kiểm tra này. Các bước ghi quyền và kết quả ở tài khoản được gán tiếp tục cần kiểm chứng riêng.

![Hình 1: Menu Người sử dụng mở bằng chuột phải trên quỹ TESTSUASQL](/posts/2026-11-07-tl-a06-3-huong-dan-gan-nguoi-su-dung-cho-quy/hinh-01-20261029-tl-a06-3-menu.png)

![Hình 2: Cửa sổ NGƯỜI SỬ DỤNG: TESTSUASQL với danh sách và ô chọn tài khoản](/posts/2026-11-07-tl-a06-3-huong-dan-gan-nguoi-su-dung-cho-quy/hinh-02-20261029-tl-a06-3-cua-so.png)

- **Menu chuột phải → Người sử dụng**: Chức năng: Mở cửa sổ gán người dùng (chỉ hiện khi có quyền **Phân quyền**)
- **Tiêu đề NGƯỜI SỬ DỤNG: <tên quỹ>**: Chức năng: Cho biết đang gán cho quỹ nào
- **Bảng tài khoản: STT, Tài khoản, Họ và tên, Ghi chú**: Chức năng: Toàn bộ người dùng của hệ thống
- **Ô tick đầu dòng**: Chức năng: Dòng được tick là người được dùng quỹ; ô đầu hàng tiêu đề chọn / bỏ chọn tất cả (mọi trang)
- **Tìm kiếm…, dòng lọc, phân trang**: Chức năng: Tìm / lọc người dùng ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/))
- **Lưu lại / Đóng**: Chức năng: Lưu danh sách đã tick / đóng cửa sổ

## 4. Trình tự công việc

```text
Tạo quỹ (TL-A06.0) hoặc import quỹ (TL-A06.2)
      ↓
Chuột phải dòng quỹ ──► Người sử dụng
      ↓
Tick những tài khoản được dùng quỹ ──► Lưu lại
      ↓
Những tài khoản đó thấy quỹ ở màn Tài khoản, quỹ và ô chọn quỹ trên chứng từ
(tài khoản không được tick: không thấy quỹ)
```

## 5. Thực hiện trên phần mềm

**Bước 1 –** Nhấp chuột phải vào dòng quỹ cần gán và chọn **Người sử dụng** (Hình 1). Cửa sổ **NGƯỜI SỬ DỤNG: <tên quỹ>** hiện danh sách tài khoản; những tài khoản đang được dùng quỹ đã tick sẵn (Hình 2).

**Bước 2 –** Tick thêm tài khoản được phép dùng quỹ, bỏ tick tài khoản không còn được dùng. Dùng ô **Tìm kiếm…** để tìm nhanh; ô đầu hàng tiêu đề chọn hoặc bỏ chọn **tất cả** tài khoản (kể cả các trang khác).

**Bước 3 –** Bấm **Lưu lại**. Hệ thống ghi đè danh sách: tài khoản có tick được thêm, tài khoản bị bỏ tick bị gỡ khỏi quỹ. Báo **Lưu lại thành công**; cửa sổ **không tự đóng**, bấm **Đóng** để thoát.

**Bước 4 –** Người được gán đăng nhập lại (hoặc **Tải lại** danh sách) sẽ thấy quỹ trong ô chọn.

Cách gán theo chiều ngược lại — từ một người dùng sang nhiều quỹ — có ở màn **Nhân viên** (menu chuột phải **Phân qũy, tài khoản**, thuộc sổ tay Thiết lập nội bộ).

## 6. Giải thích các thông tin trên màn hình

- **Tài khoản**: Ý nghĩa: Tên đăng nhập của người dùng; Lưu ý: Chỉ đọc
- **Họ và tên**: Ý nghĩa: Họ tên người dùng; Lưu ý: Chỉ đọc
- **Ghi chú**: Ý nghĩa: Ghi chú của tài khoản; Lưu ý: Chỉ đọc
- **Ô tick**: Ý nghĩa: Người dùng có được dùng quỹ này; Lưu ý: Cần tick ít nhất một tài khoản mới lưu được (xem phần “Vướng mắc thường gặp”)

## 7. Kiểm tra sau khi thực hiện

Danh sách người được dùng quỹ được cập nhật. Những người được gán còn cần quyền Truy cập màn tương ứng; khi đủ quyền và quỹ đang Kích hoạt thì mới kiểm tra thấy quỹ ở màn **Tài khoản, quỹ** và ô chọn trên chứng từ; người bị gỡ không còn thấy quỹ (chứng từ cũ của họ không đổi).

## 8. Những điều cần lưu ý

⚠️ **Gỡ người dùng khỏi quỹ không xoá chứng từ**, nhưng người đó không còn chọn được quỹ này ở chứng từ mới.

⚠️ Danh sách bạn tick là **danh sách đầy đủ** của quỹ, không phải phần bổ sung: tài khoản nào không tick sẽ bị gỡ. Kiểm tra kỹ các trang khi dùng ô chọn tất cả.

⚠️ **Quỹ còn người sử dụng thì không xoá được** ([TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ](/bai-viet/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/)). Cửa sổ này không cho lưu danh sách rỗng, nên muốn xoá hẳn quỹ phải nhờ IT.

⚠️ Tài khoản quản trị cao nhất luôn thấy mọi quỹ, không cần gán.

⚠️ Gán quỹ cho người dùng quyết định cả việc ai **thấy phiếu thu, phiếu chi, lệnh vay của quỹ** và **số dư quỹ** ở thống kê **Tồn quỹ**. Chỉ gán cho người cần thiết.

### Menu chuột phải không có mục "Người sử dụng" 

Nguyên nhân: tài khoản chưa có quyền **Phân quyền** của màn **Tài khoản, quỹ**.
Cách xử lý: liên hệ quản trị hệ thống xin cấp quyền.

### Lưu lại báo "Lỗi sửa.: …" khi đã bỏ tick hết tài khoản (Lỗi hệ thống)

Nguyên nhân: danh sách rỗng không được chấp nhận khi lưu.
Cách xử lý: tick lại ít nhất một tài khoản rồi **Lưu lại**.

### Người được gán vẫn không thấy quỹ 

Nguyên nhân: quỹ đang **Ngưng sử dụng**, hoặc người đó chưa tải lại màn hình sau khi được gán.
Cách xử lý: kiểm tra cột **Trạng thái** của quỹ; người dùng đăng xuất, đăng nhập lại hoặc bấm **Tải lại**.

## 10. Câu hỏi thường gặp

**Ai tạo quỹ có tự được dùng quỹ đó không?**
Không. Người tạo (trừ tài khoản quản trị cao nhất) cũng phải được gán như mọi người.

**Gán cho từng người hay theo nhóm?**
Gán cho từng tài khoản. Hệ thống không có nhóm quỹ.

## 11. Công việc tiếp theo

**Tiếp theo:** Sổ tay Kế toán – Phiếu thu, Phiếu chi (dùng quỹ vừa gán).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ](/bai-viet/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/) – Tổng quan màn hình Tài khoản, quỹ
- [HƯỚNG DẪN IMPORT TÀI KHOẢN, QUỸ TỪ EXCEL](/bai-viet/2026-11-07-tl-a06-2-huong-dan-import-tai-khoan-quy-tu-excel/) – Hướng dẫn import quỹ từ Excel
- Sổ tay Thiết lập nội bộ – Nhân viên (phân quỹ, tài khoản cho từng người)
