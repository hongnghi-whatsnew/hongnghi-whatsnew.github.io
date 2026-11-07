---
title: "TỔNG QUAN MÀN HÌNH BẢNG KÊ HOA HỒNG"
date: "2026-11-07"
summary: "Màn hình Bảng kê hoa hồng (tiêu đề PHIẾU TÍNH HOA HỒNG - DANH SÁCH) tính tiền hoa hồng trả cho một khách hàng (hoặc người giới thiệu của khách) trên các dòng hàng đã xuất kho cho khách đó."
module: "Bán hàng"
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

Màn hình **Bảng kê hoa hồng** (tiêu đề **PHIẾU TÍNH HOA HỒNG - DANH SÁCH**) tính tiền hoa hồng trả cho một khách hàng (hoặc người giới thiệu của khách) trên các dòng hàng **đã xuất kho** cho khách đó.

Mỗi bảng kê:

- Lấy các dòng phiếu xuất kho của **một khách**, chưa tính hoa hồng hết.
- Tính **Thành tiền hoa hồng** từng dòng theo **chênh lệch** giữa đơn giá bán chưa VAT và **Đơn giá tính HH**.
- Nhân **tỷ lệ hoa hồng**, trừ **thuế** và **trừ khác** → **Tổng thanh toán** (làm tròn xuống hàng nghìn).
- Qua 2 bước **Duyệt phiếu** → **Xác nhận**, rồi kế toán bấm **Chi tiền** để lập phiếu chi.

Bảng kê hoa hồng **không** thay đổi tồn kho, **không** thay đổi công nợ khách.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Bảng kê hoa hồng**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)). Danh sách chỉ hiện bảng kê của chi nhánh đang làm việc.
- Hàng tính hoa hồng đã được **xuất kho** cho khách.
- Đã thống nhất tỷ lệ hoa hồng, tỷ lệ trừ thuế, đơn giá tính hoa hồng với khách / người nhận hoa hồng.

## 2. Mở chức năng

**Bán hàng → Bảng kê hoa hồng**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU TÍNH HOA HỒNG - DANH SÁCH](/posts/2026-11-07-bh-a07-0-tong-quan-man-hinh-bang-ke-hoa-hong/hinh-01-man-hinh-bang-ke-hoa-hong.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **ngày tạo** bảng kê (xem lưu ý phần “Những điều cần lưu ý”). Mặc định **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Chọn các dòng xuất kho rồi lập bảng kê; Hướng dẫn: [HƯỚNG DẪN LẬP BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-1-huong-dan-lap-bang-ke-hoa-hong/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thao tác: Sửa / Xóa**: Chức năng: Cập nhật / xoá bảng kê. Liên kết vẫn hiện cả khi bảng kê đã duyệt / xác nhận, nhưng chỉ sửa / xoá được khi chưa duyệt; Hướng dẫn: [HƯỚNG DẪN LẬP BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-1-huong-dan-lap-bang-ke-hoa-hong/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày tính HH**: Ý nghĩa: **NGÀY TÍNH HOA HỒNG** trên bảng kê
- **Mã phiếu**: Ý nghĩa: Mã bảng kê, hệ thống tự tạo (bắt đầu bằng **HH**)
- **Tỷ lệ hoa hồng**: Ý nghĩa: % hoa hồng áp dụng
- **Tỷ lệ trừ thuế**: Ý nghĩa: % trừ thuế trên tiền hoa hồng
- **Tên khách hàng**: Ý nghĩa: Khách được tính hoa hồng
- **Trừ khác**: Ý nghĩa: Số tiền trừ thêm
- **Tổng thanh toán**: Ý nghĩa: Số hoa hồng phải trả (đã làm tròn xuống hàng nghìn – xem lưu ý phần “Những điều cần lưu ý”)
- **N/v bán hàng**: Ý nghĩa: Nhân viên kinh doanh của phiếu xuất
- **Người duyệt**: Ý nghĩa: Người đã bấm **Duyệt phiếu** (trống = chưa duyệt)
- **Xác nhận**: Ý nghĩa: Kế toán đã bấm **Xác nhận** (trống = chưa xác nhận)
- **Tiền đã chi**: Ý nghĩa: Tổng tiền các phiếu chi lập từ bảng kê
- **Trạng thái**: Ý nghĩa: **Chưa chi** / **Đang chi** / **Đã chi** (trống khi chưa có phiếu chi nào)
- **Ghi chú**: Ý nghĩa: Ghi chú bảng kê
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Thứ tự cột trên màn hình: **STT**, **Thao tác**, **Ngày tính HH**, **Mã phiếu**, **Tỷ lệ hoa hồng**, **Tỷ lệ trừ thuế**, **Tên khách hàng**, **Trừ khác**, **Tổng thanh toán**…; các cột sau nằm bên phải, kéo thanh cuộn ngang để xem.

Dòng tổng cuối bảng **không** hiện chữ **TỔNG CỘNG: n**; tổng **Tổng thanh toán** nằm ở cột tương ứng.

**Menu chuột phải trên một dòng:**

- **Xem lại**: Mở cửa sổ: **THÔNG TIN - BẢNG KÊ HOA HỒNG** (chỉ xem; nơi có nút duyệt, xác nhận, chi tiền); Hướng dẫn: [HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-2-huong-dan-duyet-xac-nhan-va-chi-tien-bang-ke-hoa-hong/)
- **MẪU BẢNG KÊ TỔNG HỢP**: Mở cửa sổ: Bản in BẢNG KÊ HOA HỒNG đủ cột; Hướng dẫn: [HƯỚNG DẪN IN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-3-huong-dan-in-bang-ke-hoa-hong/)
- **MẪU BẢNG KÊ TỶ LỆ HH**: Mở cửa sổ: Bản in rút gọn theo tỷ lệ hoa hồng; Hướng dẫn: [HƯỚNG DẪN IN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-3-huong-dan-in-bang-ke-hoa-hong/)
- **MẪU BẢNG KÊ CHÊNH LỆCH**: Mở cửa sổ: Bản in theo số tiền chênh lệch từng tấm; Hướng dẫn: [HƯỚNG DẪN IN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-3-huong-dan-in-bang-ke-hoa-hong/)

Nhấp đúp vào dòng cũng mở **THÔNG TIN - BẢNG KÊ HOA HỒNG**. Màn này **không có** mục **File đính kèm**.

## 4. Trình tự công việc

```text
(Kho) Phiếu xuất kho đã giao khách
      ↓
Bảng kê hoa hồng → Thêm mới → chọn dòng xuất của 1 khách (BH-A07.1)
      ↓
Nhập tỷ lệ HH, trừ thuế, trừ khác, đơn giá tính HH → Lưu lại
      ↓
In bảng kê (BH-A07.3) → khách / người nhận ký xác nhận
      ↓
Xem lại → Duyệt phiếu (quản lý) → Xác nhận (kế toán) (BH-A07.2)
      ↓
Chi tiền → phiếu chi → Trạng thái: Đang chi / Đã chi
```

## 5. Thực hiện trên phần mềm

- **Xem bảng kê theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm bảng kê**: Cách làm: Gõ mã phiếu hoặc tên khách vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập bảng kê hoa hồng**: Cách làm: **Thêm mới**; Bài hướng dẫn: [HƯỚNG DẪN LẬP BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-1-huong-dan-lap-bang-ke-hoa-hong/)
- **Sửa bảng kê (chưa duyệt)**: Cách làm: **Sửa** → **CẬP NHẬT - BẢNG KÊ HOA HỒNG**; Bài hướng dẫn: [HƯỚNG DẪN LẬP BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-1-huong-dan-lap-bang-ke-hoa-hong/)
- **Duyệt / huỷ duyệt**: Cách làm: Nhấp đúp → **Duyệt phiếu** / **Hủy duyệt**; Bài hướng dẫn: [HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-2-huong-dan-duyet-xac-nhan-va-chi-tien-bang-ke-hoa-hong/)
- **Xác nhận / huỷ xác nhận**: Cách làm: Nhấp đúp → **Xác nhận** / **Hủy xác nhận**; Bài hướng dẫn: [HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-2-huong-dan-duyet-xac-nhan-va-chi-tien-bang-ke-hoa-hong/)
- **Chi tiền hoa hồng**: Cách làm: Nhấp đúp → **Chi tiền** → phiếu chi; Bài hướng dẫn: [HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-2-huong-dan-duyet-xac-nhan-va-chi-tien-bang-ke-hoa-hong/)
- **In bảng kê**: Cách làm: Chuột phải → một trong 3 mẫu; Bài hướng dẫn: [HƯỚNG DẪN IN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-3-huong-dan-in-bang-ke-hoa-hong/)
- **Xoá bảng kê (chưa duyệt)**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường và cách tính trong cửa sổ bảng kê: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-1-huong-dan-lap-bang-ke-hoa-hong/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Bảng kê hoa hồng dùng để làm gì, bảng kê đi qua các bước nào và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Danh sách lọc theo ngày tạo bảng kê**, không theo **Ngày tính HH**. Bảng kê lập hôm nay cho ngày tính HH tháng trước vẫn nằm ở khoảng ngày **hôm nay**.

⚠️ Bảng kê **đã duyệt** không sửa / xoá được. Muốn sửa phải **Hủy duyệt** trước (khi kế toán chưa xác nhận).

⚠️ Một dòng xuất kho đã tính hoa hồng hết số lượng sẽ không hiện lại khi lập bảng kê mới – tránh tính trùng. Xoá bảng kê thì các dòng đó hiện lại.

⚠️ **Tổng thanh toán** trên cửa sổ và danh sách đã **làm tròn xuống hàng nghìn** (ví dụ 8.856 → **8.000**), nhưng bản in ghi **TỔNG THANH TOÁN** chưa làm tròn (8.856) kèm dòng bằng chữ theo số đã làm tròn ("tám nghìn đồng"). Số chi tiền là số đã làm tròn ([HƯỚNG DẪN IN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-3-huong-dan-in-bang-ke-hoa-hong/)).

⚠️ Bảng kê hoa hồng không trừ vào công nợ khách; tiền hoa hồng trả bằng **phiếu chi** (không tính nợ).

### "CẢNH BÁO – Lỗi xóa: Phiếu đã duyệt. Vui lòng kiểm tra lại." 

Nguyên nhân: bảng kê đã duyệt (tương tự: **Phiếu đã xác nhận…**, **Phiếu đã chi tiền…**).
Cách xử lý: nhờ người duyệt **Hủy duyệt** ([HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-2-huong-dan-duyet-xac-nhan-va-chi-tien-bang-ke-hoa-hong/)) nếu kế toán chưa xác nhận, rồi xoá.

### Không thấy bảng kê vừa lập 

Kiểm tra: khoảng ngày lọc có chứa **ngày tạo** bảng kê; chi nhánh đang làm việc.
Cách xử lý: chọn khoảng ngày chứa hôm nay ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

### Không thấy liên kết Sửa / Xóa 

Kiểm tra: quyền **Cập nhật** / **Xoá**.
Cách xử lý: liên hệ quản trị hệ thống. Bấm **Sửa** mà cửa sổ không có **Lưu lại**: bảng kê đã duyệt / xác nhận / chi tiền.

## 10. Câu hỏi thường gặp

**Hoa hồng tính trên giá có VAT hay chưa VAT?**
Trên **đơn giá chưa VAT** (đã trừ chiết khấu) của dòng xuất kho.

**Một bảng kê có gộp nhiều khách được không?**
Không. Mỗi bảng kê chỉ một khách.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-1-huong-dan-lap-bang-ke-hoa-hong/) – Hướng dẫn lập bảng kê hoa hồng.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-1-huong-dan-lap-bang-ke-hoa-hong/) – Hướng dẫn lập bảng kê hoa hồng
- [HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-2-huong-dan-duyet-xac-nhan-va-chi-tien-bang-ke-hoa-hong/) – Hướng dẫn duyệt, xác nhận và chi tiền bảng kê hoa hồng
- [HƯỚNG DẪN IN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-3-huong-dan-in-bang-ke-hoa-hong/) – Hướng dẫn in bảng kê hoa hồng
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
- Sổ tay Kế toán – Phiếu chi
