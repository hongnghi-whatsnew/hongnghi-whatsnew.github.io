---
title: "TỔNG QUAN MÀN HÌNH CHUYỂN TIỀN NỘI BỘ"
date: "2026-11-07"
summary: "Màn hình Chuyển tiền nội bộ ghi nhận việc chuyển tiền giữa hai quỹ / tài khoản của công ty trong cùng chi nhánh: rút tiền ngân hàng về quỹ tiền mặt, nộp tiền mặt vào ngân hàng, chuyển giữa hai tài khoản ngân hàng."
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

Màn hình **Chuyển tiền nội bộ** ghi nhận việc chuyển tiền **giữa hai quỹ / tài khoản của công ty** trong cùng chi nhánh: rút tiền ngân hàng về quỹ tiền mặt, nộp tiền mặt vào ngân hàng, chuyển giữa hai tài khoản ngân hàng. Mỗi lệnh chuyển có thể kèm **phí chuyển khoản**.

Một lệnh chuyển tiền nội bộ làm thay đổi **tồn quỹ** ngay khi lưu:

- Quỹ chi **giảm** số tiền chuyển.
- Quỹ thu **tăng** số tiền chuyển.
- Quỹ chịu phí (nếu có phí) **giảm** số tiền phí.

Lệnh chuyển **không** làm thay đổi công nợ khách hàng / nhà cung cấp.

Bạn dùng màn hình này khi:

- Rút tiền từ tài khoản ngân hàng nhập quỹ tiền mặt, hoặc nộp tiền mặt vào ngân hàng.
- Chuyển tiền giữa hai tài khoản ngân hàng của công ty.
- Xem lại, sửa, xoá các lệnh chuyển đã lập.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Chuyển tiền nội bộ**.
- Đang mở đúng hệ thống của đơn vị cần ghi nhận và đúng phạm vi quỹ được cấp.
- Danh mục **Quỹ tài khoản** và **Nội dung thu chi** (loại thu và loại chi) đã có dữ liệu (sổ tay Thiết lập danh mục).

## 2. Mở chức năng

**Kế toán → Chuyển tiền nội bộ**

## 3. Nhận biết màn hình

![Hình 1: Màn hình CHUYỂN TIỀN NỘI BỘ - DANH SÁCH](/posts/2026-11-07-kt-a06-0-tong-quan-man-hinh-chuyen-tien-noi-bo/hinh-01-man-hinh-chuyen-tien-noi-bo.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày chuyển**. Mặc định **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Lập lệnh chuyển tiền (cửa sổ **THÊM CHUYỂN TIỀN NỘI BỘ**); Hướng dẫn: [HƯỚNG DẪN LẬP VÀ ĐIỀU CHỈNH LỆNH CHUYỂN TIỀN NỘI BỘ](/bai-viet/2026-11-07-kt-a06-1-huong-dan-lap-va-dieu-chinh-lenh-chuyen-tien-noi-bo/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thao tác: Sửa / Xóa**: Chức năng: Cập nhật / xoá lệnh; Hướng dẫn: [HƯỚNG DẪN LẬP VÀ ĐIỀU CHỈNH LỆNH CHUYỂN TIỀN NỘI BỘ](/bai-viet/2026-11-07-kt-a06-1-huong-dan-lap-va-dieu-chinh-lenh-chuyen-tien-noi-bo/), [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Dòng tổng**: Chức năng: **TỔNG CỘNG: n** (số lệnh) và tổng **Số tiền**

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Xóa**
- **Ngày chuyển**: Ý nghĩa: Ngày chuyển tiền
- **Mã lệnh**: Ý nghĩa: Mã lệnh chuyển, hệ thống tự tạo (dạng **CN** + 8 chữ số, ví dụ *CN00113324*)
- **Số tiền**: Ý nghĩa: Số tiền chuyển từ quỹ chi sang quỹ thu
- **Quỹ chi, Ghi chú (chi)**: Ý nghĩa: Quỹ bị trừ tiền và ghi chú phía chi
- **Quỹ thu, Ghi chú (thu)**: Ý nghĩa: Quỹ nhận tiền và ghi chú phía thu
- **Phí chuyển khoản, Ghi chú (phí)**: Ý nghĩa: Số tiền phí (nếu có) và ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n** (số lệnh), tổng **Số tiền** và tổng **Phí chuyển khoản** (cột phí nằm bên phải, kéo thanh cuộn ngang để thấy).

**Nhấp đúp** vào một dòng để mở **THÔNG TIN CHUYỂN TIỀN NỘI BỘ** (chỉ xem). Chuột phải vào **tiêu đề cột** để mở menu sắp xếp, nhóm, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Màn này **không có** menu chuột phải riêng trên dòng.

Lập lệnh, khai báo phí và điều chỉnh ảnh hưởng tồn quỹ: **[HƯỚNG DẪN LẬP VÀ ĐIỀU CHỈNH LỆNH CHUYỂN TIỀN NỘI BỘ](/bai-viet/2026-11-07-kt-a06-1-huong-dan-lap-va-dieu-chinh-lenh-chuyen-tien-noi-bo/)**.

## 4. Trình tự công việc

**Vị trí của lệnh chuyển tiền nội bộ:**

```text
Quỹ A (chi) ── Số tiền ──► Quỹ B (thu)
     │
     └── (tuỳ chọn) Phí chuyển khoản ──► trừ vào quỹ chịu phí (A hoặc B)
                 ↓
Tồn quỹ A giảm, tồn quỹ B tăng ngay khi lưu
                 ↓
Xem tồn quỹ: Thống kê thu chi → Tồn quỹ (KT-B02.0)
```

**Các chức năng trên màn hình:**

```text
Chuyển tiền nội bộ
   ├── Thêm mới ──► THÊM CHUYỂN TIỀN NỘI BỘ (KT-A06.1)
   ├── Sửa ──► CẬP NHẬT CHUYỂN TIỀN NỘI BỘ
   ├── Xóa ──► chỉ người tạo lệnh
   ├── Nhấp đúp ──► THÔNG TIN CHUYỂN TIỀN NỘI BỘ (chỉ xem)
   └── Xuất Excel ──► danh sách lệnh
```

## 5. Thực hiện trên phần mềm

- **Lập lệnh, ghi phí chuyển khoản**: Cách làm: Chọn hai quỹ và nội dung thu / chi; kiểm tra bên chịu phí; Bài hướng dẫn: [HƯỚNG DẪN LẬP VÀ ĐIỀU CHỈNH LỆNH CHUYỂN TIỀN NỘI BỘ](/bai-viet/2026-11-07-kt-a06-1-huong-dan-lap-va-dieu-chinh-lenh-chuyen-tien-noi-bo/)
- **Đổi quỹ chịu phí**: Cách làm: Nút **Đổi quỹ** trong cửa sổ có phí; Bài hướng dẫn: [HƯỚNG DẪN LẬP VÀ ĐIỀU CHỈNH LỆNH CHUYỂN TIỀN NỘI BỘ](/bai-viet/2026-11-07-kt-a06-1-huong-dan-lap-va-dieu-chinh-lenh-chuyen-tien-noi-bo/)
- **Sửa, bỏ phí hoặc xóa lệnh lập sai**: Cách làm: Kiểm tra ảnh hưởng hoàn tiền và tồn quỹ cũ; Bài hướng dẫn: [HƯỚNG DẪN LẬP VÀ ĐIỀU CHỈNH LỆNH CHUYỂN TIỀN NỘI BỘ](/bai-viet/2026-11-07-kt-a06-1-huong-dan-lap-va-dieu-chinh-lenh-chuyen-tien-noi-bo/)
- **Xem thông tin lệnh**: Cách làm: Nhấp đúp dòng; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Tìm / lọc danh sách**: Cách làm: Khoảng ngày theo **Ngày chuyển**, ô **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất danh sách**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Đối chiếu tiền sau khi chuyển**: Cách làm: **Thống kê thu chi → Tồn quỹ**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)

## 6. Giải thích các thông tin trên màn hình

Các ô nhập và quy tắc phí: [HƯỚNG DẪN LẬP VÀ ĐIỀU CHỈNH LỆNH CHUYỂN TIỀN NỘI BỘ](/bai-viet/2026-11-07-kt-a06-1-huong-dan-lap-va-dieu-chinh-lenh-chuyen-tien-noi-bo/), phần “Giải thích các thông tin trên màn hình”.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Chuyển tiền nội bộ dùng để làm gì, lệnh chuyển ảnh hưởng tồn quỹ ra sao, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Lệnh chuyển làm thay đổi tồn quỹ ngay khi lưu.** Quỹ chi phải **đủ tồn** tại thời điểm lưu; nếu không, hệ thống từ chối.

⚠️ **Chỉ người tạo lệnh mới xoá được lệnh.**

⚠️ Không lập, sửa, xoá được lệnh có **Ngày chuyển** nằm trong **kỳ kế toán đã khoá sổ** ([TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/)).

⚠️ Xoá hoặc sửa giảm số tiền một lệnh đã lập sẽ **trừ lại tiền ở quỹ thu**. Nếu quỹ thu đã chi bớt tiền và không còn đủ tồn, hệ thống từ chối.

⚠️ Dùng màn này cho tiền **giữa các quỹ của công ty**. Thu tiền khách / trả tiền NCC dùng **Phiếu thu** ([TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/)) / **Phiếu chi** ([TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/)).

### "CẢNH BÁO – Lỗi xóa: Chỉ được xoá phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo lệnh.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### Dưới cửa sổ báo "Vui lòng chọn nội dung chi" (hoặc nội dung thu, quỹ…) 

Nguyên nhân: để trống ô bắt buộc (nhãn có dấu sao đỏ).
Cách xử lý: nhập đủ các ô có viền đỏ rồi **Lưu lại**.

### "CẢNH BÁO – … "<tên quỹ>" không đủ tồn (<số tồn>)." 

Nguyên nhân: quỹ bị trừ tiền (quỹ chi, quỹ chịu phí, hoặc quỹ thu khi xoá / sửa giảm) không đủ tồn hiện tại.
Cách xử lý: kiểm tra tồn quỹ ở **Tồn quỹ** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)); điều chỉnh số tiền hoặc chọn quỹ khác.

### "CẢNH BÁO – … Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **Ngày chuyển** thuộc kỳ kế toán đã khoá sổ.
Cách xử lý: giữ ngày chuyển thực tế, báo kế toán trưởng xử lý theo [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/).

### Không thấy lệnh vừa lập 

Kiểm tra: khoảng ngày lọc có chứa **Ngày chuyển** và đang mở đúng hệ thống của đơn vị cần tra cứu.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

### Không thấy nút Thêm mới / Sửa / Xóa 

Kiểm tra: quyền tương ứng của màn hình Chuyển tiền nội bộ.
Cách xử lý: liên hệ quản trị hệ thống.

## 10. Câu hỏi thường gặp

**Chuyển tiền nội bộ có cần lập thêm phiếu thu và phiếu chi không?**
Không. Lệnh chuyển tự trừ quỹ chi và cộng quỹ thu.

**Lệnh chuyển có dùng cho thu khách hàng / trả nhà cung cấp không?**
Không. Dùng Phiếu thu / Phiếu chi tương ứng. Lệnh này ghi chuyển giữa hai quỹ của công ty.

**Phí chuyển khoản trừ vào quỹ nào?**
Mặc định trừ vào **quỹ chi**; bấm nút mũi tên vòng cạnh ô **QUỸ CHỊU PHÍ** để đổi sang **quỹ thu**; xem [HƯỚNG DẪN LẬP VÀ ĐIỀU CHỈNH LỆNH CHUYỂN TIỀN NỘI BỘ](/bai-viet/2026-11-07-kt-a06-1-huong-dan-lap-va-dieu-chinh-lenh-chuyen-tien-noi-bo/).

## 11. Công việc tiếp theo

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/) – Tổng quan màn hình thống kê Tồn quỹ (kiểm tra tồn quỹ sau khi chuyển).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/) – Tổng quan màn hình Phiếu thu
- [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/) – Tổng quan màn hình Phiếu chi
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/) – Tổng quan màn hình thống kê Tồn quỹ
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ NỘI DUNG THU CHI](/bai-viet/2026-11-07-kt-b01-0-tong-quan-man-hinh-thong-ke-noi-dung-thu-chi/) – Tổng quan màn hình thống kê Nội dung thu chi
- [TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/) – Tổng quan màn hình Kỳ kế toán
- [HƯỚNG DẪN LẬP VÀ ĐIỀU CHỈNH LỆNH CHUYỂN TIỀN NỘI BỘ](/bai-viet/2026-11-07-kt-a06-1-huong-dan-lap-va-dieu-chinh-lenh-chuyen-tien-noi-bo/) – Hướng dẫn lập và điều chỉnh lệnh chuyển tiền nội bộ
- Sổ tay Thiết lập danh mục – Quỹ tài khoản, Nội dung thu chi
