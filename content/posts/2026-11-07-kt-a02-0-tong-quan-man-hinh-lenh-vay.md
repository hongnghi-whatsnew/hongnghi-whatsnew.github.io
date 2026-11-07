---
title: "TỔNG QUAN MÀN HÌNH LỆNH VAY"
date: "2026-11-07"
summary: "Màn hình Lệnh vay ghi nhận từng lần công ty giải ngân khoản vay (thường là vay ngân hàng theo hợp đồng tín dụng): vay bao nhiêu, ngày vay, thời hạn, lãi suất, tiền vay vào quỹ nào, vay để thanh toán những phiếu mua hàng nào."
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

Màn hình **Lệnh vay** ghi nhận từng lần công ty **giải ngân khoản vay** (thường là vay ngân hàng theo hợp đồng tín dụng): vay bao nhiêu, ngày vay, thời hạn, lãi suất, tiền vay vào quỹ nào, vay để thanh toán những phiếu mua hàng nào.

Lệnh vay làm thay đổi **tồn quỹ** ngay khi lưu:

- **Quỹ nhận tăng** đúng **Số tiền vay**.
- Khi trả nợ, kế toán lập **Phiếu chi** loại **Lệnh vay** ([HƯỚNG DẪN LẬP PHIẾU CHI TRẢ LỆNH VAY](/bai-viet/2026-11-07-kt-a04-2-huong-dan-lap-phieu-chi-tra-lenh-vay/)): quỹ chi giảm, cột **Số tiền đã chi** / **Số tiền đã chi (lãi)** và **Trạng thái chi** của lệnh vay được cập nhật.

Lệnh vay **không** làm thay đổi công nợ nhà cung cấp.

Bạn dùng màn hình này khi:

- Nhận tiền giải ngân từ ngân hàng vào tài khoản / quỹ.
- Theo dõi khoản vay còn nợ bao nhiêu, đến hạn ngày nào.
- In **giấy nhận nợ** và **bảng kê** chứng từ kèm hồ sơ vay.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Lệnh vay**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Tài khoản đã được **phân quỹ** chứa quỹ nhận tiền vay (Thiết lập nội bộ → Nhân viên → chuột phải **Phân qũy, tài khoản**). Danh sách chỉ hiện lệnh vay có **Quỹ nhận** thuộc các quỹ bạn được phân.
- Danh mục **Tài khoản, quỹ** đã có quỹ / tài khoản ngân hàng nhận tiền; **Hợp đồng** vay đã có ([TỔNG QUAN MÀN HÌNH HỢP ĐỒNG](/bai-viet/2026-11-07-kt-a08-0-tong-quan-man-hinh-hop-dong/)) nếu cần ghi số hợp đồng.

## 2. Mở chức năng

**Kế toán → Lệnh vay**

## 3. Nhận biết màn hình

![Hình 1: Màn hình LỆNH VAY - DANH SÁCH](/posts/2026-11-07-kt-a02-0-tong-quan-man-hinh-lenh-vay/hinh-01-man-hinh-lenh-vay.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày vay**. Mặc định hôm nay (nhãn *today*); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Lập lệnh vay; Hướng dẫn: **[HƯỚNG DẪN LẬP LỆNH VAY](/bai-viet/2026-11-07-kt-a02-1-huong-dan-lap-lenh-vay/)**
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thao tác: Sửa / Xóa**: Chức năng: Cập nhật / xoá lệnh vay; Hướng dẫn: [HƯỚNG DẪN LẬP LỆNH VAY](/bai-viet/2026-11-07-kt-a02-1-huong-dan-lap-lenh-vay/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày vay**: Ý nghĩa: Ngày giải ngân
- **Mã lệnh**: Ý nghĩa: Mã lệnh vay, hệ thống tự tạo (dạng **LV** + 8 chữ số)
- **Số hợp đồng**: Ý nghĩa: Hợp đồng tín dụng của khoản vay
- **Số GNN**: Ý nghĩa: Số giấy nhận nợ
- **Số tiền vay**: Ý nghĩa: Số tiền giải ngân vào quỹ
- **Lãi suất**: Ý nghĩa: Lãi suất vay, hiện dạng %
- **Quỹ nhận**: Ý nghĩa: Quỹ / tài khoản nhận tiền vay
- **Thời hạn vay**: Ý nghĩa: Ví dụ **6 tháng**, **90 ngày**
- **Ngày hết hạn**: Ý nghĩa: Ngày đến hạn trả
- **Số tiền đã chi**: Ý nghĩa: Tổng **tiền gốc** đã trả qua phiếu chi loại Lệnh vay
- **Số tiền đã chi (lãi)**: Ý nghĩa: Tổng **tiền lãi** đã trả qua phiếu chi loại Lệnh vay
- **Còn lại**: Ý nghĩa: Số tiền vay − Số tiền đã chi (gốc còn nợ)
- **Trạng thái chi**: Ý nghĩa: **Chưa chi** / **Đang chi** / **Đã chi**
- **Ghi chú**: Ý nghĩa: Lý do vay / thanh toán cho ai
- **File đính kèm**: Ý nghĩa: *Số lượng file: n* hoặc *Không có file đính kèm*
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n** và tổng **Số tiền vay**, **Số tiền đã chi**, **Số tiền đã chi (lãi)**, **Còn lại**.

Bảng rộng hơn màn hình: kéo thanh cuộn ngang sang phải để thấy các cột theo dõi trả nợ (Hình 2).

![Hình 2: Các cột theo dõi trả nợ của lệnh vay](/posts/2026-11-07-kt-a02-0-tong-quan-man-hinh-lenh-vay/hinh-02-cot-theo-doi-tra-no.png)

 **Thời hạn vay**, **Ngày hết hạn** ·  **Số tiền đã chi**, **Số tiền đã chi (lãi)** ·  **Còn lại** ·  **Trạng thái chi**. Trong hình: lệnh thứ nhất chưa trả đồng nào – **Chưa chi**; lệnh thứ hai đã trả gốc 200.000 và lãi 2.500, **Còn lại** 300.000 – **Đang chi**.

**Ý nghĩa Trạng thái chi:**

- **Chưa chi**: Khi nào: Chưa có phiếu chi trả gốc
- **Đang chi**: Khi nào: Đã trả một phần gốc
- **Đã chi**: Khi nào: Tổng gốc đã trả ≥ Số tiền vay

**Menu chuột phải trên một dòng:**

- **Xem lại**: Mở cửa sổ: **LỆNH VAY - XEM LẠI** (chỉ xem); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **In giấy nhận nợ**: Mở cửa sổ: Xem trước bản in giấy nhận nợ; Hướng dẫn: [HƯỚNG DẪN IN GIẤY NHẬN NỢ VÀ BẢNG KÊ LỆNH VAY](/bai-viet/2026-11-07-kt-a02-2-huong-dan-in-giay-nhan-no-va-bang-ke-lenh-vay/)
- **In bảng kê**: Mở cửa sổ: Xem trước bảng kê tài liệu (danh sách phiếu mua hàng); Hướng dẫn: [HƯỚNG DẪN IN GIẤY NHẬN NỢ VÀ BẢNG KÊ LỆNH VAY](/bai-viet/2026-11-07-kt-a02-2-huong-dan-in-giay-nhan-no-va-bang-ke-lenh-vay/)
- **File đính kèm**: Mở cửa sổ: **FILE ĐÍNH KÈM - LỆNH VAY**; Hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)

![Hình 3: Menu chuột phải trên dòng lệnh vay](/posts/2026-11-07-kt-a02-0-tong-quan-man-hinh-lenh-vay/hinh-03-menu-chuot-phai-lenh-vay.png)

Nhấp đúp vào dòng cũng mở **LỆNH VAY - XEM LẠI**. Chuột phải vào **tiêu đề cột** để mở menu sắp xếp, nhóm, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

**Vòng đời một khoản vay:**

```text
(Tuỳ chọn) Hợp đồng tín dụng (KT-A08.0)
      ↓
Lệnh vay (KT-A02.1) ── chọn phiếu mua hàng được vay để thanh toán
      ↓
Lưu → tồn quỹ nhận tăng Số tiền vay
      ↓
In giấy nhận nợ / bảng kê nộp ngân hàng (KT-A02.2)
      ↓
Đến hạn: Phiếu chi loại Lệnh vay (KT-A04.2) ── tiền gốc + tiền lãi
      ↓
Tồn quỹ chi giảm · Số tiền đã chi tăng
Trạng thái chi: Chưa chi → Đang chi → Đã chi
```

**Các chức năng trên màn hình:**

```text
Lệnh vay
   ├── Thêm mới ──► LỆNH VAY - THÊM MỚI
   ├── Sửa ──► LỆNH VAY - CẬP NHẬT
   ├── Xóa ──► chỉ người tạo
   ├── Xem lại (chuột phải / nhấp đúp)
   ├── In giấy nhận nợ · In bảng kê
   ├── File đính kèm
   └── Xuất Excel ──► danh sách lệnh vay
```

## 5. Thực hiện trên phần mềm

- **Xem lệnh vay theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm lệnh vay**: Cách làm: Gõ mã lệnh, số hợp đồng, số GNN vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập lệnh vay**: Cách làm: **Thêm mới**; Bài hướng dẫn: [HƯỚNG DẪN LẬP LỆNH VAY](/bai-viet/2026-11-07-kt-a02-1-huong-dan-lap-lenh-vay/)
- **Xem chi tiết**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa lệnh vay**: Cách làm: **Sửa**; Bài hướng dẫn: [HƯỚNG DẪN LẬP LỆNH VAY](/bai-viet/2026-11-07-kt-a02-1-huong-dan-lap-lenh-vay/)
- **Xoá lệnh vay**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **In giấy nhận nợ / bảng kê**: Cách làm: Chuột phải → **In giấy nhận nợ** / **In bảng kê**; Bài hướng dẫn: [HƯỚNG DẪN IN GIẤY NHẬN NỢ VÀ BẢNG KÊ LỆNH VAY](/bai-viet/2026-11-07-kt-a02-2-huong-dan-in-giay-nhan-no-va-bang-ke-lenh-vay/)
- **Đính kèm hồ sơ vay**: Cách làm: Chuột phải → **File đính kèm**; Bài hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **Trả nợ gốc, lãi**: Cách làm: **Phiếu chi** → **Thêm mới** → **Lệnh vay**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU CHI TRẢ LỆNH VAY](/bai-viet/2026-11-07-kt-a04-2-huong-dan-lap-phieu-chi-tra-lenh-vay/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một lệnh vay

**Bước 1 –** Nhấp đúp vào dòng (hoặc chuột phải → **Xem lại**).

**Bước 2 –** cửa sổ **LỆNH VAY - XEM LẠI** mở ra, các ô bị khoá, bảng dưới liệt kê các phiếu mua hàng của lệnh vay. Không có nút **Lưu lại**.

**Bước 3 –** Bấm **Đóng**.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ lệnh vay: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP LỆNH VAY](/bai-viet/2026-11-07-kt-a02-1-huong-dan-lap-lenh-vay/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Lệnh vay dùng để làm gì, lệnh vay ảnh hưởng tồn quỹ ra sao, theo dõi trả nợ ở cột nào, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Lệnh vay làm tăng tồn quỹ nhận ngay khi lưu.** Không lập thêm phiếu thu cho cùng khoản tiền giải ngân, nếu không tồn quỹ bị cộng hai lần.

⚠️ **Chỉ người tạo lệnh vay mới xoá được.** Lệnh vay đã có phiếu chi trả nợ thì không xoá được (hệ thống báo dữ liệu đã liên kết).

⚠️ Xoá hoặc sửa giảm số tiền vay sẽ **trừ lại tiền ở quỹ nhận**. Quỹ không còn đủ tồn thì hệ thống từ chối.

⚠️ Không lập / sửa / xoá được lệnh vay có **Ngày vay** thuộc **kỳ kế toán đã khóa** ([TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/)).

⚠️ Lệnh vay hiện **chưa được ghi sổ kế toán** khi chạy hạch toán tự động (không lên Sổ chi tiết tài khoản).

### "CẢNH BÁO – Lỗi xóa: Chỉ được xoá phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo lệnh vay.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### "CẢNH BÁO – Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: lệnh vay đã có phiếu chi trả nợ.
Cách xử lý: xoá phiếu chi trả nợ trước (nếu đúng là lập nhầm), rồi xoá lệnh vay.

### "CẢNH BÁO – Lỗi xóa: "<tên quỹ>" không đủ tồn (<số tồn>)." 

Nguyên nhân: quỹ nhận đã chi bớt tiền, không còn đủ để trừ lại số tiền vay.
Cách xử lý: kiểm tra **Tồn quỹ** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)); liên hệ kế toán trưởng.

### "CẢNH BÁO – Lỗi xóa: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **Ngày vay** thuộc kỳ đã khóa.
Cách xử lý: nhờ người có quyền mở kỳ ([HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/)).

### Không thấy lệnh vay vừa lập 

Kiểm tra: khoảng ngày lọc có chứa **Ngày vay**; tài khoản có được phân **Quỹ nhận** đó không; chi nhánh.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)) hoặc nhờ quản trị phân quỹ.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Vay xong có cần lập phiếu thu không?**
Không. Lệnh vay đã cộng tiền vào quỹ nhận.

**Trả lãi vay lập ở đâu?**
Phiếu chi loại **Lệnh vay**, nhập ở ô **TIỀN CHI LÃI** ([HƯỚNG DẪN LẬP PHIẾU CHI TRẢ LỆNH VAY](/bai-viet/2026-11-07-kt-a04-2-huong-dan-lap-phieu-chi-tra-lenh-vay/)). Cột **Số tiền đã chi (lãi)** cộng dồn.

**Cột Còn lại có tính tiền lãi không?**
Không. **Còn lại** = Số tiền vay − tiền gốc đã trả.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP LỆNH VAY](/bai-viet/2026-11-07-kt-a02-1-huong-dan-lap-lenh-vay/) – Hướng dẫn lập lệnh vay.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP LỆNH VAY](/bai-viet/2026-11-07-kt-a02-1-huong-dan-lap-lenh-vay/) – Hướng dẫn lập lệnh vay
- [HƯỚNG DẪN IN GIẤY NHẬN NỢ VÀ BẢNG KÊ LỆNH VAY](/bai-viet/2026-11-07-kt-a02-2-huong-dan-in-giay-nhan-no-va-bang-ke-lenh-vay/) – Hướng dẫn in giấy nhận nợ và bảng kê lệnh vay
- [HƯỚNG DẪN LẬP PHIẾU CHI TRẢ LỆNH VAY](/bai-viet/2026-11-07-kt-a04-2-huong-dan-lap-phieu-chi-tra-lenh-vay/) – Hướng dẫn lập phiếu chi trả lệnh vay
- [TỔNG QUAN MÀN HÌNH HỢP ĐỒNG](/bai-viet/2026-11-07-kt-a08-0-tong-quan-man-hinh-hop-dong/) – Tổng quan màn hình Hợp đồng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/) – Tổng quan màn hình thống kê Tồn quỹ
- [TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/) – Tổng quan màn hình Kỳ kế toán
