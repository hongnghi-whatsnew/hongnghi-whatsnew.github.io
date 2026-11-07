---
title: "TỔNG QUAN MÀN HÌNH PHIẾU MUA DỊCH VỤ"
date: "2026-11-07"
summary: "Hướng dẫn sử dụng chức năng tổng quan màn hình phiếu mua dịch vụ, gồm thao tác, thông tin cần kiểm tra và lưu ý liên quan."
module: "Mua hàng"
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

Màn hình **Phiếu mua dịch vụ** ghi nhận các **dịch vụ mua ngoài** của nhà cung cấp (NCC): phí vận chuyển, bốc xếp, gia công thuê ngoài, sửa chữa, bảo hiểm…

Màn hình này dùng **chung giao diện** với **Phiếu mua hàng** ([TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/)) nhưng khác ở chỗ quan trọng nhất:

- Phiếu mua dịch vụ **ghi công nợ phải trả NCC ngay khi lưu**, không qua nhập kho.
- Không nhập kho, không làm thay đổi tồn kho.
- Có thể dùng làm **chứng từ chi phí** để **phân bổ** vào giá nhập của phiếu nhập kho (ví dụ phí vận chuyển lô hàng – sổ tay Kho hàng).

Bạn dùng màn hình này khi:

- Nhận hoá đơn dịch vụ của NCC và cần ghi công nợ phải trả.
- Cần chứng từ chi phí để phân bổ vào phiếu nhập kho.
- Cần đưa chi phí dịch vụ phục vụ sản xuất vào kỳ tính giá thành.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như bảng trên.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Danh mục **Nhà cung cấp** đã có NCC dịch vụ; danh mục **Hàng hoá** đã có các mã dịch vụ (ví dụ *PHÍ VẬN CHUYỂN*).

## 2. Mở chức năng

**Mua hàng → Phiếu mua dịch vụ**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU MUA HÀNG, DỊCH VỤ - DANH SÁCH](/posts/2026-11-07-mh-a02-0-tong-quan-man-hinh-phieu-mua-dich-vu/hinh-01-man-hinh-phieu-mua-dich-vu.png)

Tiêu đề màn: **PHIẾU MUA HÀNG, DỊCH VỤ - DANH SÁCH**. Bố cục, nút, cột giống hệt màn Phiếu mua hàng – xem phần “Nhận biết màn hình” bài **[TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/)**.

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày mua hàng**. Mặc định **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Lập phiếu mua dịch vụ; Hướng dẫn: **[HƯỚNG DẪN LẬP PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-1-huong-dan-lap-phieu-mua-dich-vu/)**
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thao tác: Tất toán / Sửa / Xóa**: Chức năng: Tất toán / cập nhật / xoá phiếu; Hướng dẫn: [HƯỚNG DẪN TẤT TOÁN PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-3-huong-dan-tat-toan-phieu-mua-hang/) / [HƯỚNG DẪN LẬP PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-1-huong-dan-lap-phieu-mua-dich-vu/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Khác với danh sách Phiếu mua hàng:**

- **Danh sách**: Phiếu mua dịch vụ: Chỉ hiện phiếu dịch vụ; cột **Loại phiếu** hiện **muadichvu**
- **Trạng thái nhập**: Phiếu mua dịch vụ: Luôn **Chưa nhập** (dịch vụ không nhập kho) – không dùng cột này để theo dõi
- **Tổng tiền**: Phiếu mua dịch vụ: Là số **công nợ phải trả NCC** của phiếu (đã gồm VAT, trừ phần tất toán)
- **Mã phiếu**: Phiếu mua dịch vụ: Cùng dãy mã **MH…** với phiếu mua hàng

Menu chuột phải trên dòng: **Xem lại** (mở **XEM LẠI - PHIẾU MUA HÀNG, DỊCH VỤ**, chỉ xem). Nhấp đúp vào dòng cũng mở **Xem lại**. Không có chức năng in phiếu.

## 4. Trình tự công việc

```text
Hoá đơn dịch vụ của NCC
      ↓
Phiếu mua dịch vụ (MH-A02.1) ──► công nợ phải trả NCC tăng ngay khi lưu
      ├──► (Kho) Phiếu nhập kho → tab Chi phí → Chứng từ chi phí → phân bổ
      ├──► (Tuỳ chọn) Tính giá thành → chi phí sản xuất chung / trực tiếp
      └──► (Kế toán) Phiếu chi trả NCC → công nợ giảm
```

**Các chức năng trên màn hình:**

```text
Phiếu mua dịch vụ
   ├── Thêm mới ──► lập tay · Từ bảng giá · Từ đơn hàng
   ├── Tất toán ──► giảm phần không thanh toán (giảm công nợ)
   ├── Sửa ──► sửa được cả sau khi lưu (không qua nhập kho)
   ├── Xóa ──► chỉ người tạo, khi chưa phân bổ / chưa dùng ở chứng từ khác
   ├── Xem lại (chuột phải / nhấp đúp)
   └── Xuất Excel ──► danh sách phiếu
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập phiếu mua dịch vụ**: Cách làm: **Thêm mới**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-1-huong-dan-lap-phieu-mua-dich-vu/)
- **Xem chi tiết phiếu**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/), phần “Thực hiện trên phần mềm”
- **Sửa phiếu**: Cách làm: **Sửa** → **CẬP NHẬT - PHIẾU MUA HÀNG, DỊCH VỤ**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-1-huong-dan-lap-phieu-mua-dich-vu/)
- **Giảm phần không thanh toán**: Cách làm: **Tất toán**; Bài hướng dẫn: [HƯỚNG DẪN TẤT TOÁN PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-3-huong-dan-tat-toan-phieu-mua-hang/)
- **Xoá phiếu**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Phân bổ phí dịch vụ vào giá nhập**: Cách làm: Kho → Phiếu nhập kho → tab **CHI PHÍ** → **Chứng từ chi phí**; Bài hướng dẫn: Sổ tay Kho hàng
- **Xem chi tiết dịch vụ đã mua**: Cách làm: Thống kê mua hàng → Mua dịch vụ chi tiết; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ MUA DỊCH VỤ CHI TIẾT](/bai-viet/2026-11-07-mh-b01-0-tong-quan-man-hinh-thong-ke-mua-dich-vu-chi-tiet/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

## 6. Giải thích các thông tin trên màn hình

Các trường của cửa sổ giống phiếu mua hàng – xem phần “Giải thích các thông tin trên màn hình” bài **[HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/)**; phần khác của phiếu dịch vụ xem phần “Giải thích các thông tin trên màn hình” bài **[HƯỚNG DẪN LẬP PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-1-huong-dan-lap-phieu-mua-dich-vu/)**.

Các cột trên danh sách: xem bảng phần “Nhận biết màn hình” bài [TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/).

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Phiếu mua dịch vụ dùng để làm gì, khác phiếu mua hàng ở đâu (ghi công nợ ngay, không nhập kho) và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Lưu phiếu mua dịch vụ là công nợ NCC tăng ngay.** Sửa, tất toán, xoá phiếu đều làm công nợ thay đổi theo **Tổng tiền** mới.

⚠️ Không lập **phiếu mua hàng** cho dịch vụ: phiếu mua hàng chỉ ghi công nợ khi nhập kho, mà dịch vụ không nhập kho → công nợ sẽ không bao giờ được ghi.

⚠️ Không lập phiếu mua dịch vụ cho **hàng hoá nhập kho**: hàng sẽ không xuất hiện ở danh sách chờ nhập kho.

⚠️ Phiếu đã được chọn làm **chứng từ chi phí** trong phiếu nhập kho, hoặc đã dùng ở lệnh vay, **không xoá được**.

⚠️ Phiếu có tick **Tính giá thành** và đã nằm trong kỳ tính giá thành đã kết chuyển thì **không xoá được** cho đến khi huỷ kết chuyển.

⚠️ **Chỉ người tạo phiếu mới xoá được phiếu.**

### Thấy menu nhưng mở màn báo không có quyền, hoặc không thấy menu 

Nguyên nhân: thiếu một trong hai quyền **Truy cập** Phiếu mua dịch vụ (menu) / **Truy cập** Phiếu mua hàng (màn hình).
Cách xử lý: liên hệ quản trị hệ thống cấp đủ cả hai.

### "CẢNH BÁO – Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: phiếu đã được phân bổ chi phí vào phiếu nhập kho hoặc dùng ở lệnh vay.
Cách xử lý: ghi mã phiếu và các liên kết, chuyển kế toán/thủ kho phụ trách duyệt phương án sửa số liệu. Không tự gỡ phân bổ hoặc xóa liên kết chỉ để xóa phiếu dịch vụ.

### "CẢNH BÁO – Lỗi xóa: Phiếu mua (tính giá thành) đã được đưa vào kỳ tính giá thành đã kết chuyển (<tên kỳ>). Vui lòng hủy phiếu kết chuyển và xóa kỳ tính giá thành trước khi xóa phiếu này." 

Nguyên nhân: phiếu tick **Tính giá thành** thuộc kỳ giá thành đã kết chuyển.
Cách xử lý: chuyển kế toán giá thành đối chiếu kỳ, các chứng từ đã kết chuyển và phương án điều chỉnh được duyệt; không tự hủy kết chuyển/xóa kỳ theo thông báo để vượt chặn.

### "CẢNH BÁO – Lỗi xóa: Bạn chỉ được xóa phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

## 10. Câu hỏi thường gặp

**Vì sao phiếu mua dịch vụ vẫn ghi "Chưa nhập"?**
Cột **Trạng thái nhập** dùng chung với phiếu mua hàng. Dịch vụ không nhập kho nên luôn **Chưa nhập**; bỏ qua cột này.

**Công nợ NCC của phiếu dịch vụ tăng lúc nào?**
Ngay khi **Lưu lại**. Ô **NỢ CŨ** ở phiếu kế tiếp của NCC đó đã gồm số này.

**Phí vận chuyển lô hàng nhập kho ghi thế nào để vào giá vốn?**
Lập phiếu mua dịch vụ cho phí vận chuyển, rồi ở phiếu nhập kho chọn phiếu này trong tab **CHI PHÍ** để phân bổ (sổ tay Kho hàng).

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-1-huong-dan-lap-phieu-mua-dich-vu/) – Hướng dẫn lập phiếu mua dịch vụ.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-1-huong-dan-lap-phieu-mua-dich-vu/) – Hướng dẫn lập phiếu mua dịch vụ
- [TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/) – Tổng quan màn hình Phiếu mua hàng
- [HƯỚNG DẪN TẤT TOÁN PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-3-huong-dan-tat-toan-phieu-mua-hang/) – Hướng dẫn tất toán phiếu mua hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ MUA DỊCH VỤ CHI TIẾT](/bai-viet/2026-11-07-mh-b01-0-tong-quan-man-hinh-thong-ke-mua-dich-vu-chi-tiet/) – Tổng quan màn hình Mua dịch vụ chi tiết
- Sổ tay Kho hàng – Phiếu nhập kho (phân bổ chi phí)
- Sổ tay Kế toán – Phiếu chi, Thống kê công nợ nhà cung cấp
