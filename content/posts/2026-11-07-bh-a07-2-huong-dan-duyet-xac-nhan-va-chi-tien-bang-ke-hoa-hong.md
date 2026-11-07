---
title: "HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN BẢNG KÊ HOA HỒNG"
date: "2026-11-07"
summary: "Bảng kê hoa hồng sau khi lập (HƯỚNG DẪN LẬP BẢNG KÊ HOA HỒNG) qua 3 bước: 1."
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

Bảng kê hoa hồng sau khi lập ([HƯỚNG DẪN LẬP BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-1-huong-dan-lap-bang-ke-hoa-hong/)) qua 3 bước:

1. **Duyệt phiếu** – quản lý đồng ý số tiền hoa hồng.
2. **Xác nhận** – kế toán ghi nhận.
3. **Chi tiền** – kế toán lập **phiếu chi** trả hoa hồng. Phiếu chi được đánh dấu **Không tính nợ** (không đụng công nợ khách). **Tiền đã chi** và **Trạng thái** của bảng kê cập nhật theo phiếu chi.

Mỗi bước có nút huỷ tương ứng (**Hủy duyệt**, **Hủy xác nhận**) khi bước sau chưa làm.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Bảng kê đã lưu ([HƯỚNG DẪN LẬP BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-1-huong-dan-lap-bang-ke-hoa-hong/)), đã in và có chữ ký xác nhận (nếu quy định yêu cầu – [HƯỚNG DẪN IN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-3-huong-dan-in-bang-ke-hoa-hong/)).
- Duyệt: bảng kê chưa được xác nhận.
- Xác nhận: bảng kê **đã duyệt**.
- Chi tiền: bảng kê **đã xác nhận**, chưa chi đồng nào; quỹ chi còn đủ tiền.

## 2. Mở chức năng

**Bán hàng → Bảng kê hoa hồng → nhấp đúp vào dòng → Duyệt phiếu / Xác nhận / Chi tiền**

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ THÔNG TIN - BẢNG KÊ HOA HỒNG với các nút duyệt / xác nhận / chi tiền](/posts/2026-11-07-bh-a07-2-huong-dan-duyet-xac-nhan-va-chi-tien-bang-ke-hoa-hong/hinh-01-xem-bang-ke-hoa-hong-nut-duyet.png)

- **Phần thông tin bảng kê**: Ý nghĩa: Ngày, khách, tỷ lệ hoa hồng, trừ thuế, trừ khác, TT.chuyển khoản
- **Bảng chi tiết**: Ý nghĩa: Các dòng hàng và thành tiền hoa hồng
- **Tổng thanh toán:**: Ý nghĩa: Số tiền hoa hồng phải trả
- **Các nút ở chân cửa sổ**: Ý nghĩa: Hiện tuỳ trạng thái và quyền (bảng dưới). Hình 1 là bảng kê đã xác nhận: **Chi tiền**, **Hủy xác nhận**
- **Đóng**: Ý nghĩa: Đóng cửa sổ

**Khi nào nút hiện:**

- **Duyệt phiếu**: Hiện khi: Chưa duyệt; Quyền: Duyệt phiếu
- **Hủy duyệt**: Hiện khi: Đã duyệt, chưa xác nhận; Quyền: Duyệt phiếu
- **Xác nhận**: Hiện khi: Đã duyệt, chưa xác nhận; Quyền: Xác nhận
- **Hủy xác nhận**: Hiện khi: Đã xác nhận, **Tiền đã chi** = 0; Quyền: Xác nhận
- **Chi tiền**: Hiện khi: Đã xác nhận, **Tiền đã chi** = 0; Quyền: Xác nhận

![Hình 2: cửa sổ THÊM MỚI - PHIẾU CHI mở từ nút Chi tiền](/posts/2026-11-07-bh-a07-2-huong-dan-duyet-xac-nhan-va-chi-tien-bang-ke-hoa-hong/hinh-02-phieu-chi-tu-bang-ke-hoa-hong.png)

- **KHÁCH HÀNG**: Ý nghĩa: Điền sẵn theo bảng kê, khoá
- **TIỀN CHI**: Ý nghĩa: = Tổng thanh toán − Tiền đã chi (ví dụ **8,000** – số đã làm tròn xuống hàng nghìn)
- **Không tính nợ**: Ý nghĩa: Đã tick, mờ (không bỏ được) – phiếu chi không đụng công nợ khách
- **ĐỊA CHỈ**: Ý nghĩa: Điền sẵn theo khách; khách thiếu khu vực thì có đuôi ", null" – sửa lại trước khi lưu

cửa sổ còn điền sẵn **ĐIỆN THOẠI**, **NỢ CŨ**, **NGƯỜI NHẬN** (tên rút gọn khách), **TỔNG CHI**, **NGÀY CHI**, **NGÀY HẠCH TOÁN**; phải nhập **QUỸ CHI**, **NỘI DUNG**, **GHI CHÚ** (bắt buộc). Chữ đỏ **CÔNG NỢ** cạnh nút **Lưu lại**. Các trường khác: xem sổ tay Kế toán – Phiếu chi.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Bán hàng
   ↓
Bảng kê hoa hồng
   ↓
Nhấp đúp dòng bảng kê (THÔNG TIN - BẢNG KÊ HOA HỒNG)
   ↓
Duyệt phiếu → Xác nhận → Chi tiền
```

```text
Bảng kê đã lập (Người duyệt trống)
      ↓
[Quản lý] Xem lại → Duyệt phiếu → "Cập nhật trạng thái thành công."
      ↓                      (Hủy duyệt khi chưa xác nhận)
[Kế toán] Xem lại → Xác nhận
      ↓                      (Hủy xác nhận khi chưa chi)
[Kế toán] Chi tiền → THÊM MỚI - PHIẾU CHI (Không tính nợ) → Lưu lại
      → quỹ giảm; Tiền đã chi tăng; Trạng thái: Đang chi / Đã chi
```

### Bước 1 – Duyệt phiếu (quản lý)

1. Vào **Bán hàng → Bảng kê hoa hồng**, chọn khoảng ngày chứa **ngày tạo** bảng kê ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).
2. Nhấp đúp vào dòng (hoặc chuột phải → **Xem lại**). Cửa sổ **THÔNG TIN - BẢNG KÊ HOA HỒNG** mở ra (Hình 1).
3. Kiểm tra khách, các dòng, tỷ lệ hoa hồng, trừ thuế, trừ khác, **Tổng thanh toán**.
4. Bấm **Duyệt phiếu** ở chân cửa sổ (Hình 3). Hệ thống báo **Cập nhật trạng thái thành công.**; cột **Người duyệt** hiện tên bạn. Chân cửa sổ đổi thành **Xác nhận** / **Hủy duyệt** (Hình 4).

![Hình 3: Chân cửa sổ bảng kê chưa duyệt – nút Duyệt phiếu](/posts/2026-11-07-bh-a07-2-huong-dan-duyet-xac-nhan-va-chi-tien-bang-ke-hoa-hong/hinh-03-nut-duyet-phieu.png)

![Hình 4: Bảng kê đã duyệt – nút Xác nhận và Hủy duyệt](/posts/2026-11-07-bh-a07-2-huong-dan-duyet-xac-nhan-va-chi-tien-bang-ke-hoa-hong/hinh-04-nut-xac-nhan-huy-duyet.png)

- Nút: **Xác nhận**; Ai bấm: Kế toán (Bước 2)
- Nút: **Hủy duyệt**; Ai bấm: Người duyệt, khi cần trả bảng kê về để sửa

### Bước 2 – Xác nhận (kế toán)

1. Mở bảng kê đã duyệt như Bước 1.
2. Bấm **Xác nhận**  (Hình 4). Hệ thống báo **Cập nhật trạng thái thành công.**; cột **Xác nhận** hiện tên bạn. Chân cửa sổ đổi thành **Chi tiền** / **Hủy xác nhận** (Hình 1).

### Bước 3 – Chi tiền

1. Bấm **Chi tiền**. cửa sổ **THÊM MỚI - PHIẾU CHI** mở ra (Hình 2) với khách hàng, tiền chi điền sẵn, **Không tính nợ** đã tick.
2. Chọn **QUỸ CHI**, **NỘI DUNG**, ghi **GHI CHÚ**, kiểm tra **NGƯỜI NHẬN**, **ĐỊA CHỈ** (xoá đuôi ", null" nếu có) (sổ tay Kế toán – Phiếu chi). Có thể lấy thông tin người nhận từ ô **TT.CHUYỂN KHOẢN** của bảng kê.
3. Bấm **Lưu lại** trên phiếu chi.
4. Ghi nhận mã phiếu chi đã lưu, mở lại đối chiếu người nhận/quỹ/số tiền/liên kết bảng kê và cờ **Không tính nợ**. Tải lại bảng kê; nếu chưa thấy cập nhật, kiểm phiếu chi trước khi lập thêm. Bảng kê cập nhật **Tiền đã chi**, **Trạng thái** (**Đang chi** / **Đã chi**).

### Huỷ một bước

- **Hủy duyệt**: chỉ khi kế toán chưa xác nhận. Bảng kê trở về trạng thái mới lập, sửa / xoá được.
- **Hủy xác nhận**: chỉ khi chưa có phiếu chi.
- Đã có phiếu chi: xoá phiếu chi ở màn **Phiếu chi** (sổ tay Kế toán) trước.

## 6. Giải thích các thông tin trên màn hình

- **Người duyệt**: Ý nghĩa: Người bấm **Duyệt phiếu**; Lưu ý: Trống = chưa duyệt
- **Xác nhận**: Ý nghĩa: Kế toán bấm **Xác nhận**; Lưu ý: Trống = chưa xác nhận
- **Tiền đã chi**: Ý nghĩa: Tổng **tiền chi** các phiếu chi lập từ bảng kê; Lưu ý: Tự cập nhật khi thêm / sửa / xoá phiếu chi
- **Trạng thái**: Ý nghĩa: **Chưa chi** / **Đang chi** / **Đã chi**; Lưu ý: So **Tiền đã chi** với **Tổng thanh toán**
- **Tiền chi (phiếu chi)**: Ý nghĩa: Mặc định = Tổng thanh toán − Tiền đã chi; Lưu ý: Sửa được trên cửa sổ phiếu chi
- **Không tính nợ (phiếu chi)**: Ý nghĩa: Phiếu chi không ảnh hưởng công nợ khách; Lưu ý: Tự tick, khoá

## 7. Kiểm tra sau khi thực hiện

- **Duyệt phiếu**: Thay đổi: Bảng kê khoá, không sửa / xoá được
- **Xác nhận**: Thay đổi: Nút **Chi tiền** hiện; tiền chưa chi
- **Lưu phiếu chi**: Thay đổi: **Quỹ chi giảm**; **Tiền đã chi**, **Trạng thái** của bảng kê cập nhật. Công nợ khách **không** đổi

## 8. Những điều cần lưu ý

⚠️ Nút **Chi tiền** chỉ hiện khi **chưa chi đồng nào**. Chi thiếu ở phiếu chi đầu thì phần còn lại phải lập ở màn **Phiếu chi** (sổ tay Kế toán), gắn đúng bảng kê.

⚠️ Kiểm tra **TIỀN CHI** trên phiếu chi bằng **Tổng thanh toán** của bảng kê trước khi lưu. Cả hai là số **đã làm tròn xuống hàng nghìn** (ví dụ 8.000); bản in bảng kê lại ghi số chưa làm tròn (8.856) – chi theo số trên cửa sổ, không theo số in ([HƯỚNG DẪN IN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-3-huong-dan-in-bang-ke-hoa-hong/)).

⚠️ Bấm **Duyệt phiếu** / **Xác nhận** có hiệu lực ngay, không hỏi lại.

### "CẢNH BÁO – Lỗi xác nhận: Phiếu chưa được duyệt" 

Nguyên nhân: bấm **Xác nhận** khi bảng kê vừa bị huỷ duyệt.
Cách xử lý: **Đóng**, tải lại danh sách, nhờ duyệt lại.

### "CẢNH BÁO – Lỗi duyệt: Phiếu đã được kế toán duyệt" 

Nguyên nhân: bấm **Duyệt phiếu** / **Hủy duyệt** khi kế toán đã xác nhận.
Cách xử lý: nhờ kế toán **Hủy xác nhận** trước.

### Không thấy nút Duyệt phiếu / Xác nhận / Chi tiền 

Kiểm tra: quyền **Duyệt phiếu** / **Xác nhận**; trạng thái bảng kê theo bảng ở phần “Nhận biết màn hình”.
Cách xử lý: liên hệ quản trị hệ thống để được cấp quyền.

### Lưu phiếu chi báo không có quyền 

Nguyên nhân: tài khoản thiếu quyền **Thêm mới** của màn **Phiếu chi**.
Cách xử lý: nhờ kế toán có quyền lập phiếu chi.

## 10. Câu hỏi thường gặp

**Sửa tỷ lệ hoa hồng sau khi đã xác nhận được không?**
Không. **Hủy xác nhận** → **Hủy duyệt** → sửa ([HƯỚNG DẪN LẬP BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-1-huong-dan-lap-bang-ke-hoa-hong/)) → duyệt lại.

**Chi tiền hoa hồng có làm giảm công nợ khách không?**
Không. Phiếu chi từ bảng kê luôn **Không tính nợ**.

## 11. Công việc tiếp theo

Theo dõi bảng kê đã chi qua cột **Trạng thái** trên danh sách; đối chiếu phiếu chi ở sổ tay Kế toán.

**Tiếp theo:** [HƯỚNG DẪN IN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-3-huong-dan-in-bang-ke-hoa-hong/) – Hướng dẫn in bảng kê hoa hồng.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-0-tong-quan-man-hinh-bang-ke-hoa-hong/) – Tổng quan màn hình Bảng kê hoa hồng
- [HƯỚNG DẪN LẬP BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-1-huong-dan-lap-bang-ke-hoa-hong/) – Hướng dẫn lập bảng kê hoa hồng
- [HƯỚNG DẪN IN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-3-huong-dan-in-bang-ke-hoa-hong/) – Hướng dẫn in bảng kê hoa hồng
- Sổ tay Kế toán – Phiếu chi (KT-A04)
