---
title: "HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN PHIẾU GIẢM GIÁ"
date: "2026-11-07"
summary: "Phiếu giảm giá sau khi lập (HƯỚNG DẪN LẬP PHIẾU GIẢM GIÁ) phải qua 2 bước kiểm soát: 1."
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

Phiếu giảm giá sau khi lập ([HƯỚNG DẪN LẬP PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-1-huong-dan-lap-phieu-giam-gia/)) phải qua 2 bước kiểm soát:

1. **Duyệt phiếu** – quản lý đồng ý khoản giảm giá.
2. **Xác nhận** – kế toán ghi nhận khoản giảm:
   - Hình thức **Trừ công nợ**: công nợ khách **giảm ngay** khi bấm **Xác nhận**.
   - Hình thức **Chi tiền**: kế toán bấm tiếp **Chi tiền** để lập **phiếu chi** trả tiền cho khách; **Tiền đã chi** và **Trạng thái** của phiếu giảm giá được cập nhật theo phiếu chi.

Mỗi bước có nút huỷ tương ứng (**Hủy duyệt**, **Hủy xác nhận**) khi bước sau chưa làm.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Phiếu giảm giá đã lưu ([HƯỚNG DẪN LẬP PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-1-huong-dan-lap-phieu-giam-gia/)).
- Duyệt: phiếu chưa được kế toán xác nhận.
- Xác nhận: phiếu **đã duyệt**.
- Chi tiền: phiếu **đã xác nhận**, hình thức **Chi tiền**, chưa chi đồng nào; quỹ chi còn đủ tiền.

## 2. Mở chức năng

**Bán hàng → Phiếu giảm giá → nhấp đúp vào dòng phiếu → Duyệt phiếu / Xác nhận / Chi tiền**

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ THÔNG TIN - PHIẾU GIẢM GIÁ với các nút duyệt / xác nhận](/posts/2026-11-07-bh-a05-2-huong-dan-duyet-xac-nhan-va-chi-tien-phieu-giam-gia/hinh-01-xem-phieu-giam-gia-nut-duyet.png)

- **Phần thông tin phiếu**: Ý nghĩa: Ngày, khách, mã phiếu, ghi chú, hình thức giảm, NV kinh doanh (chỉ xem; ô **NỢ CŨ** để trống ở cửa sổ này)
- **Bảng chi tiết**: Ý nghĩa: Dòng hàng, số lượng, số tiền giảm, thành tiền, chịu trách nhiệm
- **Các nút ở chân cửa sổ**: Ý nghĩa: Hiện tuỳ trạng thái và quyền (bảng dưới). Hình 1 là phiếu vừa duyệt: **Xác nhận**, **Hủy duyệt**
- **Đóng**: Ý nghĩa: Đóng cửa sổ

**Khi nào nút hiện:**

- **Duyệt phiếu**: Hiện khi: Phiếu chưa duyệt; Quyền: Duyệt phiếu
- **Hủy duyệt**: Hiện khi: Đã duyệt, chưa xác nhận; Quyền: Duyệt phiếu
- **Xác nhận**: Hiện khi: Đã duyệt, chưa xác nhận; Quyền: Xác nhận
- **Hủy xác nhận**: Hiện khi: Đã xác nhận, **Tiền đã chi** = 0; Quyền: Xác nhận
- **Chi tiền**: Hiện khi: Đã xác nhận, **Tiền đã chi** = 0, hình thức **Chi tiền** (phiếu **Trừ công nợ** đã xác nhận chỉ còn **Hủy xác nhận**, Hình 4); Quyền: Xác nhận

cửa sổ phiếu chi mở sẵn **KHÁCH HÀNG** (khoá) và **TIỀN CHI** = tổng tiền giảm − tiền đã chi. Các trường khác của phiếu chi (ngày chi, người nhận, quỹ chi, nội dung…): xem sổ tay Kế toán – Phiếu chi.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Bán hàng
   ↓
Phiếu giảm giá
   ↓
Nhấp đúp dòng phiếu (THÔNG TIN - PHIẾU GIẢM GIÁ)
   ↓
Duyệt phiếu → Xác nhận → (Chi tiền)
```

```text
Phiếu giảm giá đã lập (Người duyệt trống)
      ↓
[Quản lý] Xem lại → Duyệt phiếu → "Cập nhật trạng thái thành công."
      ↓                      (Hủy duyệt khi chưa xác nhận)
[Kế toán] Xem lại → Xác nhận
   ├── Trừ công nợ ──► công nợ khách giảm = Tổng tiền giảm
   └── Chi tiền ─────► Chi tiền → THÊM MỚI - PHIẾU CHI → Lưu lại
                          → quỹ giảm, Tiền đã chi tăng
                          → Trạng thái: Đang chi / Đã chi
```

### Bước 1 – Duyệt phiếu (quản lý)

1. Vào **Bán hàng → Phiếu giảm giá**, chọn khoảng ngày chứa phiếu ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).
2. Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**). Cửa sổ **THÔNG TIN - PHIẾU GIẢM GIÁ** mở ra (Hình 1).
3. Kiểm tra khách, hình thức giảm, các dòng, tổng tiền giảm, lý do, file đính kèm (nếu có).
4. Bấm **Duyệt phiếu** ở chân cửa sổ (Hình 3). Hệ thống báo **Cập nhật trạng thái thành công.**; cột **Người duyệt** hiện tên bạn. Chân cửa sổ đổi thành **Xác nhận** / **Hủy duyệt** (Hình 1).

![Hình 3: Chân cửa sổ phiếu chưa duyệt – nút Duyệt phiếu](/posts/2026-11-07-bh-a05-2-huong-dan-duyet-xac-nhan-va-chi-tien-phieu-giam-gia/hinh-03-nut-duyet-phieu.png)

Không đồng ý: không bấm duyệt, báo người lập sửa hoặc xoá phiếu.

### Bước 2 – Xác nhận (kế toán)

1. Mở phiếu đã duyệt như Bước 1.
2. Bấm **Xác nhận**. Hệ thống báo **Cập nhật trạng thái thành công.**; cột **Xác nhận** hiện tên bạn.
   - Hình thức **Trừ công nợ**: công nợ khách giảm đúng **Tổng tiền giảm**, tính vào ngày **Ngày giảm giá**. Chân cửa sổ chỉ còn **Hủy xác nhận** (Hình 4). Xong.
   - Hình thức **Chi tiền**: làm tiếp Bước 3.

![Hình 4: Phiếu Trừ công nợ sau khi xác nhận – chỉ còn nút Hủy xác nhận](/posts/2026-11-07-bh-a05-2-huong-dan-duyet-xac-nhan-va-chi-tien-phieu-giam-gia/hinh-04-nut-huy-xac-nhan.png)

### Bước 3 – Chi tiền (hình thức Chi tiền)

1. Mở phiếu đã xác nhận, bấm **Chi tiền**. cửa sổ **THÊM MỚI - PHIẾU CHI** mở ra (Hình 2) với khách hàng và tiền chi điền sẵn.
2. Nhập ngày chi, người nhận, quỹ chi và các thông tin khác của phiếu chi (sổ tay Kế toán – Phiếu chi).
3. Bấm **Lưu lại** trên phiếu chi.
4. Ghi nhận mã phiếu chi đã lưu, mở lại kiểm khách, quỹ, ngày, số tiền và liên kết phiếu giảm giá; tải lại phiếu giảm giá. Nếu chưa thấy cập nhật, đối chiếu phiếu chi trước khi lập lần nữa để tránh chi trùng. Phiếu giảm giá được cập nhật **Tiền đã chi** và **Trạng thái** (**Đang chi** nếu chi chưa đủ, **Đã chi** nếu đủ).

### Huỷ một bước

- **Hủy duyệt**: mở phiếu, bấm **Hủy duyệt** (chỉ khi kế toán chưa xác nhận). Phiếu trở về trạng thái mới lập, sửa / xoá được.
- **Hủy xác nhận**: mở phiếu, bấm **Hủy xác nhận** (chỉ khi chưa có phiếu chi). Với hình thức **Trừ công nợ**, công nợ khách được cộng lại.
- Đã có phiếu chi: phải xoá phiếu chi ở màn **Phiếu chi** (sổ tay Kế toán) trước, rồi mới huỷ xác nhận được.

## 6. Giải thích các thông tin trên màn hình

- **Người duyệt**: Ý nghĩa: Người bấm **Duyệt phiếu**; Lưu ý: Trống = chưa duyệt
- **Xác nhận**: Ý nghĩa: Kế toán bấm **Xác nhận**; Lưu ý: Trống = chưa xác nhận
- **Tiền đã chi**: Ý nghĩa: Tổng **tiền chi** của mọi phiếu chi lập từ phiếu giảm giá; Lưu ý: Tự cập nhật khi thêm / sửa / xoá phiếu chi
- **Trạng thái**: Ý nghĩa: **Chưa chi** / **Đang chi** / **Đã chi**; Lưu ý: So **Tiền đã chi** với **Tổng tiền giảm**
- **Tiền chi (phiếu chi)**: Ý nghĩa: Mặc định = Tổng tiền giảm − Tiền đã chi; Lưu ý: Sửa được trên cửa sổ phiếu chi

## 7. Kiểm tra sau khi thực hiện

- **Duyệt phiếu**: Thay đổi: Phiếu khoá, không sửa / xoá được. Công nợ chưa đổi
- **Xác nhận – Trừ công nợ**: Thay đổi: **Công nợ khách giảm** = Tổng tiền giảm
- **Xác nhận – Chi tiền**: Thay đổi: Chưa đổi công nợ; nút **Chi tiền** hiện
- **Lưu phiếu chi**: Thay đổi: **Quỹ chi giảm**; **Tiền đã chi**, **Trạng thái** của phiếu giảm giá cập nhật

## 8. Những điều cần lưu ý

⚠️ **Công nợ khách chỉ giảm khi kế toán bấm Xác nhận** (hình thức Trừ công nợ). Duyệt phiếu thôi thì công nợ chưa đổi.

⚠️ Nút **Chi tiền** chỉ hiện khi **chưa chi đồng nào**. Nếu phiếu chi đầu tiên chi thiếu, phần còn lại phải lập phiếu chi ở màn **Phiếu chi** (sổ tay Kế toán), gắn đúng phiếu giảm giá.

⚠️ Bấm **Xác nhận** / **Duyệt phiếu** có hiệu lực ngay, không hỏi lại.

### "CẢNH BÁO – Lỗi xóa: Phiếu chưa được duyệt" 

Nguyên nhân: bấm **Xác nhận** khi phiếu đã bị huỷ duyệt (ví dụ người khác vừa huỷ). Chữ "Lỗi xóa" là nhãn chung của hệ thống cho thao tác này.
Cách xử lý: **Đóng**, tải lại danh sách, nhờ duyệt lại.

### "CẢNH BÁO – Lỗi xóa: Phiếu đã được xác nhận giảm" 

Nguyên nhân: bấm **Hủy duyệt** / **Duyệt phiếu** khi kế toán đã xác nhận.
Cách xử lý: nhờ kế toán **Hủy xác nhận** trước.

### Không thấy nút Duyệt phiếu / Xác nhận / Chi tiền 

Kiểm tra: quyền **Duyệt phiếu** / **Xác nhận**; trạng thái phiếu theo bảng ở phần “Nhận biết màn hình”; với **Chi tiền**: hình thức phải là **Chi tiền** và **Tiền đã chi** = 0.
Cách xử lý: liên hệ quản trị hệ thống để được cấp quyền.

### Lưu phiếu chi báo không có quyền 

Nguyên nhân: tài khoản thiếu quyền **Thêm mới** của màn **Phiếu chi**.
Cách xử lý: nhờ kế toán có quyền lập phiếu chi.

## 10. Câu hỏi thường gặp

**Ai được duyệt, ai được xác nhận?**
Người được cấp quyền **Duyệt phiếu** / **Xác nhận** của màn hình Phiếu giảm giá. Hệ thống không chặn một người làm cả hai bước.

**Sửa số tiền giảm sau khi đã xác nhận được không?**
Không. Phải **Hủy xác nhận** (kế toán), **Hủy duyệt** (quản lý), rồi sửa phiếu ([HƯỚNG DẪN LẬP PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-1-huong-dan-lap-phieu-giam-gia/)).

**Xoá phiếu chi thì phiếu giảm giá ra sao?**
**Tiền đã chi** và **Trạng thái** được tính lại; khi về 0 thì nút **Chi tiền** và **Hủy xác nhận** hiện lại.

## 11. Công việc tiếp theo

- Hình thức **Trừ công nợ**: kiểm tra công nợ khách ở thống kê **Công nợ khách hàng** (sổ tay Kế toán).
- Hình thức **Chi tiền**: theo dõi ở **Giảm giá chi tiết** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ GIẢM GIÁ CHI TIẾT](/bai-viet/2026-11-07-bh-b07-0-tong-quan-man-hinh-thong-ke-giam-gia-chi-tiet/)), cột **Trạng thái**.

**Tiếp theo:** [HƯỚNG DẪN IN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-3-huong-dan-in-phieu-giam-gia/) – Hướng dẫn in phiếu giảm giá.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-0-tong-quan-man-hinh-phieu-giam-gia/) – Tổng quan màn hình Phiếu giảm giá
- [HƯỚNG DẪN LẬP PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-1-huong-dan-lap-phieu-giam-gia/) – Hướng dẫn lập phiếu giảm giá
- [HƯỚNG DẪN IN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-3-huong-dan-in-phieu-giam-gia/) – Hướng dẫn in phiếu giảm giá
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ GIẢM GIÁ CHI TIẾT](/bai-viet/2026-11-07-bh-b07-0-tong-quan-man-hinh-thong-ke-giam-gia-chi-tiet/) – Tổng quan màn hình Giảm giá chi tiết
- Sổ tay Kế toán – Phiếu chi (KT-A04), Thống kê công nợ khách hàng ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/))
