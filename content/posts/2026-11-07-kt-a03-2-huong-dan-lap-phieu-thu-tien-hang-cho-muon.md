---
title: "HƯỚNG DẪN LẬP PHIẾU THU TIỀN HÀNG CHO MƯỢN"
date: "2026-11-07"
summary: "Khi công ty cho khách mượn hàng và khách mua luôn số hàng đó, thủ kho lập phiếu nhập trả mượn hàng (sổ tay Kho hàng, phần Mượn hàng) – phiếu này ghi tiền bán hàng mượn."
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

Khi công ty cho khách mượn hàng và khách **mua luôn** số hàng đó, thủ kho lập **phiếu nhập trả mượn hàng** (sổ tay Kho hàng, phần Mượn hàng) – phiếu này ghi tiền bán hàng mượn. Kế toán lập **phiếu thu loại Hàng cho mượn** từ phiếu đó để thu tiền.

Hệ thống tự điền số tiền còn phải thu, khách hàng, người nộp, và cập nhật **trạng thái thu** của phiếu nhập trả mượn hàng.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** màn hình **Phiếu thu**.
- Đã có **phiếu nhập trả mượn hàng** có dòng **trả bằng tiền** và còn tiền chưa thu (sổ tay Kho hàng).
- **Ngày thu** thuộc kỳ kế toán chưa khóa.

## 2. Mở chức năng

**Kế toán → Phiếu thu → Thêm mới → Hàng cho mượn**

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ DANH SÁCH - PHIẾU NHẬP TRẢ, CHO MƯỢN](/posts/2026-11-07-kt-a03-2-huong-dan-lap-phieu-thu-tien-hang-cho-muon/hinh-01-danh-sach-phieu-nhap-tra-muon.png)

- **Ô chọn khoảng ngày, Tải lại**: Ý nghĩa: Lọc theo **Ngày nhập**, mặc định hôm nay (Hình 1 đã chọn *Năm nay*: 01/01/2026 – 31/12/2026)
- **Bảng phiếu**: Ý nghĩa: Cột **Ngày nhập**, **Mã phiếu**, **Từ phiếu** (phiếu xuất cho mượn gốc), **Kho trả hàng**, **Kho nhập**, **Mã phiếu gốc**, **Tổng tiền bán**; kéo thanh cuộn ngang để thấy **Ghi chú**, **Số tiền đã thu**, **Trạng thái thu**, **Người tạo**, **Ngày tạo**, **Người sửa**, **Ngày sửa**. Chỉ hiện phiếu nhập trả có dòng **trả bằng tiền**
- **Dòng phiếu**: Ý nghĩa: **Nhấp đúp** để chọn phiếu, mở cửa sổ phiếu thu. Cửa sổ không có nút ở chân; đóng bằng dấu **×** góc phải

![Hình 2: cửa sổ THÊM MỚI - PHIẾU THU loại Hàng cho mượn](/posts/2026-11-07-kt-a03-2-huong-dan-lap-phieu-thu-tien-hang-cho-muon/hinh-02-form-phieu-thu-hang-cho-muon.png)

- **KHÁCH HÀNG**: Ý nghĩa: Tự lấy từ phiếu nhập trả, bị khoá. **ĐIỆN THOẠI**, **ĐỊA CHỈ**, **NỢ CŨ** tự điền theo khách
- **NGƯỜI NỘP**: Ý nghĩa: Tự điền tên rút gọn của khách, sửa được
- **TIỀN THU**: Ý nghĩa: Tự điền = Tổng tiền bán − Số tiền đã thu, sửa được
- **QUỸ THU, NỘI DUNG**: Ý nghĩa: Bắt buộc, tự chọn
- **TỪ PHIẾU**: Ý nghĩa: Chọn lại phiếu nhập trả khác
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu
- **Chữ đỏ cạnh nút**: Ý nghĩa: Tên nhóm khách hàng (Hình 2: **CÔNG NỢ**)

Các ô khác (**NGÀY THU**, **CHỨNG TỪ**, **TIỀN GIẢM**, **TỔNG THU**, **GHI CHÚ**) giống cửa sổ phiếu thu Khách hàng ([HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/)). Sau khi lưu, kiểm tra công nợ khách ở **Công nợ khách hàng** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/)).

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kế toán
   ↓
Phiếu thu
   ↓
Thêm mới → Hàng cho mượn
   ↓
DANH SÁCH - PHIẾU NHẬP TRẢ, CHO MƯỢN → nhấp đúp phiếu
```

```text
(Kho) Phiếu nhập trả mượn hàng – khách mua hàng mượn → công nợ khách tăng
      ↓
Phiếu thu → Thêm mới → Hàng cho mượn
      ↓
Nhấp đúp phiếu nhập trả → cửa sổ điền Khách hàng, Người nộp, Tiền thu
      ↓
Chọn Ngày thu, Quỹ thu, Nội dung → Lưu lại
      ↓
Tồn quỹ tăng · công nợ khách giảm
Trạng thái thu của phiếu nhập trả được cập nhật
```

### Bước 1 – Chọn phiếu nhập trả mượn hàng

Vào **Kế toán → Phiếu thu**, bấm **Thêm mới** → **Hàng cho mượn**. Cửa sổ **DANH SÁCH - PHIẾU NHẬP TRẢ, CHO MƯỢN** mở ra (Hình 1). Chọn khoảng ngày chứa **ngày nhập** của phiếu, bấm **Tải lại**, xem cột **Số tiền đã thu** / **Trạng thái thu** (kéo thanh cuộn ngang) để chọn đúng phiếu còn nợ, rồi **nhấp đúp** vào dòng.

### Bước 2 – Kiểm tra thông tin tự điền

cửa sổ **THÊM MỚI - PHIẾU THU** mở ra (Hình 2) với **KHÁCH HÀNG**, **NGƯỜI NỘP**, **TIỀN THU**  đã điền.

Chọn nhầm phiếu: bấm **TỪ PHIẾU**  ở chân cửa sổ để chọn lại.

### Bước 3 – Nhập phần còn lại

- **NGÀY THU**: ngày nhận tiền.
- **TIỀN THU**: sửa nếu khách trả một phần.
- **QUỸ THU**, **NỘI DUNG**: chọn (ví dụ nội dung **TCNKH, THU CÔNG NỢ KHÁCH HÀNG**).
- **GHI CHÚ**: ghi lý do thu, nên kèm mã phiếu nhập trả (ghi chú in thành **Lý do thu** trên phiếu C31).
- **NGƯỜI NỘP**: sửa thành tên người thực nộp nếu cần.

### Bước 4 – Bấm Lưu lại

Bấm **Lưu lại**. Thành công: **Lưu thành công**, cửa sổ đóng, phiếu mới có mã **PT…** trên danh sách. Chưa chọn phiếu nhập trả: cảnh báo **Vui lòng chọn phiếu để thu**.

## 6. Giải thích các thông tin trên màn hình

- **Phiếu nhập trả mượn hàng**: Ý nghĩa: Phiếu nguồn; Bắt buộc: Có; Lưu ý: Chọn qua cửa sổ danh sách / **TỪ PHIẾU**
- **Khách hàng**: Ý nghĩa: Khách mua hàng mượn; Lưu ý: Tự lấy, khoá
- **Người nộp**: Ý nghĩa: Người nộp tiền; Bắt buộc: Có; Lưu ý: Tự điền tên rút gọn của khách; sửa nếu người nộp khác
- **Tiền thu**: Ý nghĩa: Số tiền thu lần này; Bắt buộc: Nên nhập; Lưu ý: Tự điền phần còn phải thu
- **Quỹ thu, Nội dung, Ngày thu**: Ý nghĩa: Như phiếu thu thường; Bắt buộc: Có; Lưu ý: Xem [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/)

Các trường khác: xem phần “Giải thích các thông tin trên màn hình” của [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/).

## 7. Kiểm tra sau khi thực hiện

- Phiếu thu loại **Hàng cho mượn** được lưu.
- Tồn quỹ thu tăng **Tiền thu**; công nợ khách hàng giảm **Tổng thu**.
- Phiếu nhập trả mượn hàng được cập nhật **Số tiền đã thu**, **Trạng thái thu**.

## 8. Những điều cần lưu ý

⚠️ Trước lưu, tự đối chiếu **Tiền thu + Tiền giảm** với phần chưa thu của phiếu nguồn và số thực nhận. Cần tự kiểm tra giới hạn thu; không coi Lưu thành công là chứng minh không thu thừa.

⚠️ Danh sách chỉ hiện phiếu nhập trả có dòng **trả bằng tiền** (phiếu trả bằng hàng không hiện). Kiểm tra **Số tiền đã thu** / **Trạng thái thu** trước khi chọn để không thu trùng.

⚠️ Ô **NỢ CŨ** / **CÒN NỢ** trên cửa sổ loại này chỉ để tham khảo. Kiểm tra công nợ khách sau khi thu ở **Công nợ khách hàng** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/)).

⚠️ Loại phiếu Hàng cho mượn **không đổi được** sang loại khác khi sửa.

### "Vui lòng chọn phiếu để thu" 

Nguyên nhân: chưa chọn phiếu nhập trả mượn hàng.
Cách xử lý: bấm **TỪ PHIẾU**, nhấp đúp phiếu cần thu.

### Không thấy phiếu nhập trả cần thu 

Kiểm tra: khoảng ngày trong cửa sổ chọn (mặc định hôm nay); chi nhánh; phiếu nhập trả có dòng **trả bằng tiền** không (phiếu chỉ trả bằng hàng không hiện).
Cách xử lý: chọn khoảng ngày rộng hơn.

Các lỗi khác (khóa sổ, thiếu quỹ / nội dung): xem phần “Vướng mắc thường gặp” của [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/). Lỗi hệ thống: [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Khách trả trước một phần được không?**
Được. Sửa **TIỀN THU**; lần sau lập phiếu thu khác cho phần còn lại.

**Phiếu nhập trả mượn hàng lập ở đâu?**
Sổ tay Kho hàng – phần Mượn hàng (Phiếu nhập trả).

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN IN PHIẾU THU MẪU C31](/bai-viet/2026-11-07-kt-a03-4-huong-dan-in-phieu-thu-mau-c31/) – Hướng dẫn in phiếu thu mẫu C31.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/) – Tổng quan màn hình Phiếu thu
- [HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/) – Hướng dẫn lập phiếu thu
- [HƯỚNG DẪN LẬP PHIẾU CHI TIỀN HÀNG MUA MƯỢN](/bai-viet/2026-11-07-kt-a04-3-huong-dan-lap-phieu-chi-tien-hang-mua-muon/) – Hướng dẫn lập phiếu chi tiền hàng mua mượn
- Sổ tay Kho hàng – Phiếu nhập trả (mượn hàng), Thống kê mượn hàng
