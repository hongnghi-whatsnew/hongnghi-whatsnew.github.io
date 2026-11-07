---
title: "TỔNG QUAN MÀN HÌNH HỢP ĐỒNG"
date: "2026-11-07"
summary: "Màn hình Hợp đồng (tiêu đề HỢP ĐỒNG LỆNH VAY - DANH SÁCH) lưu các hợp đồng tín dụng / hợp đồng vay ký với bên cho vay (ngân hàng, tổ chức tín dụng — chọn trong danh mục Nhà cung cấp): số hợp đồng, ngày ký, hạn mức tín dụng, ngày hết hiệu lực."
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

Màn hình **Hợp đồng** (tiêu đề **HỢP ĐỒNG LỆNH VAY - DANH SÁCH**) lưu các **hợp đồng tín dụng / hợp đồng vay** ký với bên cho vay (ngân hàng, tổ chức tín dụng — chọn trong danh mục **Nhà cung cấp**): số hợp đồng, ngày ký, hạn mức tín dụng, ngày hết hiệu lực.

Hợp đồng ở đây **không** phải hợp đồng bán hàng (sổ tay Bán hàng) hay hợp đồng nhân sự. Nó là chứng từ gốc để **Lệnh vay** (KT-A02) chọn ở ô **SỐ HỢP ĐỒNG**.

Bạn dùng màn hình này khi:

- Ghi nhận một hợp đồng vay / hạn mức tín dụng mới ký với ngân hàng.
- Sửa thông tin hợp đồng (gia hạn ngày hết hiệu lực, đổi hạn mức).
- Đính kèm bản scan hợp đồng.

Lưu hợp đồng **không** làm thay đổi sổ sách, công nợ hay quỹ.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Hợp đồng**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)). Danh sách chỉ hiện hợp đồng của chi nhánh đang làm việc.
- Bên cho vay (ngân hàng…) đã có trong danh mục **Nhà cung cấp** (sổ tay Thiết lập danh mục).
- Chuẩn bị: bản hợp đồng (số hợp đồng, ngày ký, hạn mức, ngày hết hiệu lực).

## 2. Mở chức năng

**Kế toán → Hợp đồng**

## 3. Nhận biết màn hình

![Hình 1: Màn hình HỢP ĐỒNG LỆNH VAY - DANH SÁCH](/posts/2026-11-07-kt-a08-0-tong-quan-man-hinh-hop-dong/hinh-01-man-hinh-hop-dong.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày ký**. Mặc định **Hôm nay**; hệ thống nhớ khoảng ngày chọn lần trước; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **HỢP ĐỒNG - THÊM MỚI**; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (chỉ hiện khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Cập nhật / xoá hợp đồng; Hướng dẫn: phần “Thực hiện trên phần mềm”, [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Dòng tổng**: Chức năng: **TỔNG CỘNG: n** (số hợp đồng)
- **Cột Ngày ký thứ hai**: Chức năng: Thực chất là **ngày hết hiệu lực** (tiêu đề cột hiển thị nhầm); Hướng dẫn: phần “Những điều cần lưu ý”

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Xóa**
- **Ngày ký**: Ý nghĩa: Ngày ký hợp đồng (ngày bắt đầu hiệu lực)
- **Ngày ký (cột thứ hai)**: Ý nghĩa: Thực chất là **ngày hết hiệu lực** — tiêu đề cột đang hiển thị nhầm (xem phần “Những điều cần lưu ý”)
- **Số hợp đồng**: Ý nghĩa: Số hợp đồng ghi trên văn bản
- **Nhà cung cấp**: Ý nghĩa: Bên cho vay
- **Hạn mức tín dụng**: Ý nghĩa: Hạn mức ghi trên hợp đồng. Hiện số **chưa tách hàng nghìn** (ví dụ *1000000000* = 1 tỷ)
- **Ghi chú**: Ý nghĩa: Ghi chú / mục đích vay
- **File đính kèm**: Ý nghĩa: **Số lượng file: n** hoặc **Không có file đính kèm**
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

**Menu chuột phải trên một dòng hợp đồng:**

- **Xem lại**: Mở cửa sổ: **HỢP ĐỒNG - XEM LẠI** **Xem lại** (không có nút **Lưu lại**; một số ô vẫn cho thay giá trị trên màn, không coi đó là đã lưu); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **File đính kèm**: Mở cửa sổ: **FILE ĐÍNH KÈM - HỢP ĐỒNG**; Hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)

Nhấp đúp vào dòng cũng mở **HỢP ĐỒNG - XEM LẠI**. Chuột phải vào tiêu đề cột có **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

### cửa sổ hợp đồng

![Hình 2: cửa sổ HỢP ĐỒNG - THÊM MỚI](/posts/2026-11-07-kt-a08-0-tong-quan-man-hinh-hop-dong/hinh-02-form-them-hop-dong.png)

- Trường: **SỐ HỢP ĐỒNG**; Ý nghĩa: Bắt buộc, viết liền không dấu cách, không trùng
- Trường: **NGÀY KÝ**; Ý nghĩa: Bắt buộc
- Trường: **NHÀ CUNG CẤP**; Ý nghĩa: Bắt buộc. Gõ tên để tìm bên cho vay
- Trường: **HẠN MỨC**; Ý nghĩa: Bắt buộc. Hạn mức tín dụng
- Trường: **HẾT HIỆU LỰC**; Ý nghĩa: Bắt buộc, không chọn được ngày trước **NGÀY KÝ**
- Trường: **GHI CHÚ**; Ý nghĩa: Mục đích vay, điều kiện…
- Trường: **Lưu lại** / **Đóng**; Ý nghĩa: Lưu / đóng không lưu

## 4. Trình tự công việc

**Vị trí của hợp đồng trong quy trình:**

```text
Danh mục Nhà cung cấp (bên cho vay)
      ↓
Hợp đồng (KT-A08) → số hợp đồng, hạn mức, ngày hết hiệu lực
      ↓
Lệnh vay (KT-A02) → chọn SỐ HỢP ĐỒNG (hoặc thêm nhanh hợp đồng tại đó)
      ↓
Quỹ nhận tiền vay, theo dõi trả nợ vay
```

**Các chức năng trên màn hình:**

```text
Hợp đồng
   ├── Thêm mới ──► cửa sổ HỢP ĐỒNG - THÊM MỚI
   ├── Sửa ──► cửa sổ HỢP ĐỒNG - CẬP NHẬT
   ├── Xóa ──► hộp thoại Xác nhận xóa
   ├── Nhấp đúp / chuột phải Xem lại ──► HỢP ĐỒNG - XEM LẠI
   ├── Chuột phải File đính kèm ──► FILE ĐÍNH KÈM - HỢP ĐỒNG
   └── Xuất Excel ──► danh sách hợp đồng
```

## 5. Thực hiện trên phần mềm

- **Tìm hợp đồng**: Cách làm: Chọn khoảng ngày ký rộng (ví dụ **Năm nay**), gõ số hợp đồng vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm hợp đồng**: Cách làm: **Thêm mới**; Bài hướng dẫn: Mục này
- **Sửa hợp đồng**: Cách làm: **Sửa**; Bài hướng dẫn: Mục này, [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Xoá hợp đồng**: Cách làm: **Xóa**; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Đính kèm bản scan**: Cách làm: Chuột phải → **File đính kèm**; Bài hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Lập lệnh vay theo hợp đồng**: Cách làm: **Kế toán → Lệnh vay**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH LỆNH VAY](/bai-viet/2026-11-07-kt-a02-0-tong-quan-man-hinh-lenh-vay/)

### Thêm hợp đồng

**Bước 1 –** Bấm **Thêm mới**. cửa sổ **HỢP ĐỒNG - THÊM MỚI** mở ra (Hình 2).

**Bước 2 –** Nhập **SỐ HỢP ĐỒNG**: viết liền, không dấu cách (ví dụ *HDTD-2026-001*). Khi rời ô, hệ thống kiểm tra trùng; trùng thì báo **Số hợp đồng đã tồn tại**.

**Bước 3 –** Chọn **NGÀY KÝ**, chọn **NHÀ CUNG CẤP**  (bên cho vay), nhập **HẠN MỨC**.

**Bước 4 –** Chọn **HẾT HIỆU LỰC**  (từ ngày ký trở đi), nhập **GHI CHÚ**  nếu cần.

**Bước 5 –** Bấm **Lưu lại**. Hợp lệ: thông báo **Lưu thành công**, cửa sổ đóng, danh sách tải lại. Thiếu trường: ô thiếu viền đỏ, bấm vào ô để xem lời nhắc (xem phần “Vướng mắc thường gặp”).

**Bước 6 –** Hợp đồng mới chỉ hiện trên danh sách nếu **ngày ký** nằm trong khoảng ngày đang chọn ở. Không thấy thì chọn lại khoảng ngày.

### Sửa hợp đồng

Bấm **Sửa** → cửa sổ **HỢP ĐỒNG - CẬP NHẬT**. Sửa được mọi trường. Ô **SỐ HỢP ĐỒNG** không kiểm tra trùng khi sửa; nhập trùng số đã có thì hệ thống báo lỗi khi lưu (xem phần “Vướng mắc thường gặp”).

### Thêm nhanh từ Lệnh vay

Trong cửa sổ Lệnh vay, nút cạnh ô **SỐ HỢP ĐỒNG** mở cửa sổ **THÊM MỚI HỢP ĐỒNG** (cùng các trường như trên). Lưu xong, hợp đồng mới được chọn sẵn vào lệnh vay ([HƯỚNG DẪN LẬP LỆNH VAY](/bai-viet/2026-11-07-kt-a02-1-huong-dan-lap-lenh-vay/)).

## 6. Giải thích các thông tin trên màn hình

- **Số hợp đồng**: Ý nghĩa: Số hợp đồng trên văn bản; Bắt buộc: Có; Lưu ý: Tối thiểu 2 ký tự, viết liền; không trùng trên toàn công ty (không phân biệt hoa thường khi kiểm tra)
- **Ngày ký**: Ý nghĩa: Ngày ký / bắt đầu hiệu lực; Bắt buộc: Có; Lưu ý: Dùng để lọc danh sách; bị chặn nếu thuộc kỳ kế toán đã khoá sổ
- **Nhà cung cấp**: Ý nghĩa: Bên cho vay; Bắt buộc: Có; Lưu ý: Chọn từ danh mục Nhà cung cấp
- **Hạn mức**: Ý nghĩa: Hạn mức tín dụng; Bắt buộc: Có; Lưu ý: Chỉ để tham chiếu; hệ thống **không** chặn lệnh vay vượt hạn mức
- **Hết hiệu lực**: Ý nghĩa: Ngày hợp đồng hết hiệu lực; Bắt buộc: Có; Lưu ý: Không trước ngày ký; hệ thống **không** chặn lệnh vay sau ngày này
- **Ghi chú**: Ý nghĩa: Mục đích vay, điều kiện; Bắt buộc: Không

## 7. Kiểm tra sau khi thực hiện

- Hợp đồng được lưu cho chi nhánh đang làm việc, hiện ở **HỢP ĐỒNG LỆNH VAY - DANH SÁCH**.
- Hợp đồng xuất hiện trong ô **SỐ HỢP ĐỒNG** khi lập Lệnh vay của cùng chi nhánh.
- Sổ sách, quỹ, công nợ **không** thay đổi.

## 8. Những điều cần lưu ý

⚠️ **Danh sách mặc định chỉ hiện hợp đồng ký hôm nay.** Muốn xem các hợp đồng cũ, chọn khoảng ngày rộng (ví dụ **Năm nay**, **3 năm gần đây**).

⚠️ **Hạn mức và ngày hết hiệu lực chỉ để tham chiếu.** Hệ thống không cộng dồn các lệnh vay để so với hạn mức, không chặn lệnh vay khi hợp đồng đã hết hiệu lực. Kế toán tự theo dõi.

⚠️ **Ngày ký thuộc kỳ kế toán đã khoá sổ** thì không thêm / sửa được hợp đồng (xem phần “Vướng mắc thường gặp”).

⚠️ **Hợp đồng đã được lệnh vay sử dụng không xoá được.**

⚠️ Cột thứ hai trên danh sách có tiêu đề **Ngày ký** nhưng hiển thị **ngày hết hiệu lực**. Đọc theo thứ tự: cột **Ngày ký** đầu tiên là ngày ký, cột thứ hai là ngày hết hiệu lực.

### "Nhập số hợp đồng" / "Chọn ngày ký" / "Vui lòng chọn nhà cung cấp" / "Vui lòng nhập hạn mức tín dụng" / "Vui lòng nhập ngày hết hiệu lực" 

Nguyên nhân: để trống trường bắt buộc.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "Số không hợp lệ. Viết liền không dấu và không chứa kí tự đặc biệt." / "Số hợp đồng quá ngắn" 

Nguyên nhân: số hợp đồng có dấu cách hoặc chỉ 1 ký tự.
Cách xử lý: viết liền, ví dụ *HDTD-2026-001*.

### "Số hợp đồng đã tồn tại" 

Nguyên nhân: số hợp đồng đã có (kể cả ở chi nhánh khác).
Cách xử lý: kiểm tra lại số hợp đồng; nếu đúng là hợp đồng đã nhập, dùng **Sửa** thay vì thêm mới.

### "CẢNH BÁO – Lỗi thêm: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **NGÀY KÝ** thuộc kỳ kế toán đã khoá sổ (KT-A01). Khi sửa, câu báo bắt đầu bằng **Lỗi sửa:**.
Cách xử lý: kiểm tra ngày ký; nếu đúng, nhờ kế toán trưởng mở khoá kỳ.

### "CẢNH BÁO – Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: hợp đồng đã được chọn ở ít nhất một lệnh vay.
Cách xử lý: không xoá; nếu cần, sửa lệnh vay sang hợp đồng khác trước.

### Bấm "Xóa" không thấy hộp thoại xác nhận (Lỗi hệ thống)

Cách xử lý: báo IT. Xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Hợp đồng ở đây khác hợp đồng bán hàng thế nào?**
Đây là hợp đồng vay / hạn mức tín dụng với bên cho vay, dùng cho Lệnh vay. Hợp đồng với khách hàng xem sổ tay Bán hàng.

**Vì sao vừa thêm hợp đồng mà không thấy trên danh sách?**
Danh sách lọc theo ngày ký. Chọn khoảng ngày có chứa ngày ký vừa nhập.

**Lệnh vay vượt hạn mức hệ thống có báo không?**
Không. Hạn mức chỉ để tham chiếu.

## 11. Công việc tiếp theo

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH LỆNH VAY](/bai-viet/2026-11-07-kt-a02-0-tong-quan-man-hinh-lenh-vay/) – Tổng quan màn hình Lệnh vay (lập lệnh vay theo hợp đồng).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH LỆNH VAY](/bai-viet/2026-11-07-kt-a02-0-tong-quan-man-hinh-lenh-vay/) – Tổng quan màn hình Lệnh vay
- [TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/) – Tổng quan màn hình Kỳ kế toán (khoá sổ)
- Sổ tay Thiết lập danh mục – Nhà cung cấp
