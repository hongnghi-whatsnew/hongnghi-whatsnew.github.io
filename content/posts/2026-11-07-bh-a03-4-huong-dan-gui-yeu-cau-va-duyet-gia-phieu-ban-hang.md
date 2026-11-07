---
title: "HƯỚNG DẪN GỬI YÊU CẦU VÀ DUYỆT GIÁ PHIẾU BÁN HÀNG"
date: "2026-11-07"
summary: "Mỗi phiếu bán hàng phải được duyệt giá trước khi thủ kho xuất kho."
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

Mỗi phiếu bán hàng phải được **duyệt giá** trước khi thủ kho xuất kho. Quy trình gồm:

- **Người lập phiếu** gửi yêu cầu duyệt giá.
- **Người có quyền duyệt giá** nhận thông báo, xem phiếu, có thể chỉnh đơn giá / chiết khấu / VAT, rồi **Phê duyệt giá** hoặc **Từ chối duyệt giá** (kèm lý do).
- Người lập nhận thông báo kết quả. Bị từ chối thì sửa phiếu và gửi lại.
- Khi cần đổi phiếu đã gửi / đã duyệt (và phiếu **chưa xuất**): người lập **Hủy YC**, hoặc người có quyền **Hủy duyệt**.

Duyệt giá không làm thay đổi tồn kho hay công nợ.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Phiếu bán hàng đã lưu ([HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/)), **Chưa xuất**.
- Gửi yêu cầu: bạn là **người tạo phiếu**, phiếu **Chưa duyệt** hoặc **Từ chối duyệt**.
- Duyệt: phiếu đang **Chờ duyệt**.

## 2. Mở chức năng

**Bán hàng → Phiếu bán hàng → cột Thao tác: Gửi YC / Xem duyệt / Hủy YC / Hủy duyệt**

Người duyệt cũng có thể bấm vào **thông báo** *Yêu cầu phê duyệt giá* (biểu tượng chuông) để mở thẳng phiếu cần duyệt.

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ PHIẾU BÁN HÀNG - DUYỆT GIÁ](/posts/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/hinh-01-cua-so-duyet-gia.png)

- **Thông tin chung**: Ý nghĩa: Khách, kho, ngày bán… bị khoá
- **Cột Đơn giá (và Chiết khấu, Thuế VAT, Lấy VAT phía sau – kéo thanh cuộn ngang)**: Ý nghĩa: Người duyệt sửa được
- **Tên in, Chú thích, Chú thích nội bộ**: Ý nghĩa: Sửa được (không có trên ảnh – nằm phía sau)
- **Hàng hóa, Số lượng**: Ý nghĩa: Khoá, không sửa
- **Từ chối duyệt giá**: Ý nghĩa: Mở hộp nhập lý do từ chối
- **Phê duyệt giá**: Ý nghĩa: Duyệt, lưu giá đang hiển thị
- **Đóng**: Ý nghĩa: Đóng không làm gì

![Hình 2: Hộp Lý do từ chối phê duyệt](/posts/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/hinh-02-ly-do-tu-choi.png)

- **Ô *Nhập lý do từ chối...***: Ý nghĩa: Bắt buộc, tối đa 500 ký tự
- **Hủy / Xác nhận từ chối**: Ý nghĩa: Đóng hộp / gửi từ chối

## 4. Trình tự công việc

```text
Người lập: Gửi YC → Gửi yêu cầu → Trạng thái duyệt: Chờ duyệt
      ↓ (thông báo "Yêu cầu phê duyệt giá" tới người có quyền duyệt)
      ├── (tuỳ chọn) sửa Đơn giá / CK / VAT
      ├── Phê duyệt giá → Đã duyệt → thông báo "Đã được duyệt" → kho xuất được
      └── Từ chối duyệt giá → nhập lý do → Từ chối duyệt
             → thông báo "Bị từ chối duyệt" → người lập Sửa → Gửi YC lại
      ↓
Cần sửa lại khi chưa xuất:
   ├── người lập: Hủy YC (Chờ duyệt / Đã duyệt) → Chưa duyệt
   └── người có quyền: Hủy duyệt (Đã duyệt) → Chưa duyệt
```

### Phần A – Người lập gửi yêu cầu

**Bước 1 –** Ở **PHIẾU BÁN HÀNG - DANH SÁCH**, bấm **Gửi YC** ở dòng phiếu (hoặc nhấp đúp). Cửa sổ **PHIẾU BÁN HÀNG - XEM LẠI** mở ra (Hình 3).

**Bước 2 –** Kiểm tra lại phiếu, bấm **Gửi yêu cầu**  ở chân cửa sổ.

![Hình 3: Cửa sổ PHIẾU BÁN HÀNG - XEM LẠI có nút Gửi yêu cầu](/posts/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/hinh-03-xem-lai-gui-yeu-cau.png)

**Bước 3 –** Hệ thống báo **Yêu cầu duyệt giá đã được gửi thành công.**, cửa sổ đóng; cột **Thao tác** hiện các liên kết theo quyền (tài khoản trong Hình 4 thấy **Hủy YC | Xem duyệt | Xóa**)  (Hình 4). Cột **Trạng thái duyệt** = **Chờ duyệt**, cột **Người gửi yêu cầu**, **Thời gian gửi yêu cầu** được ghi. Mọi người có quyền duyệt giá nhận thông báo *Có yêu cầu phê duyệt giá mới với mã: <mã phiếu>*.

![Hình 4: Danh sách sau khi gửi yêu cầu](/posts/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/hinh-04-da-gui-yeu-cau.png)

### Phần B – Người duyệt phê duyệt hoặc từ chối

**Bước 1 –** Bấm thông báo *Yêu cầu phê duyệt giá*, hoặc ở danh sách bấm **Xem duyệt** ở dòng phiếu **Chờ duyệt**. Cửa sổ **PHIẾU BÁN HÀNG - DUYỆT GIÁ** mở ra (Hình 1); chân cửa sổ có **Từ chối duyệt giá**, **Phê duyệt giá**, **Đóng**.

**Bước 2 –** Xem các dòng: đơn giá, chiết khấu, VAT, thành tiền, **NỢ CŨ**, **QUÁ HẠN** của khách. Nếu cần, sửa **Đơn giá** / **Chiết khấu** / **Thuế VAT**  trực tiếp trên bảng.

**Bước 3a – Phê duyệt:** bấm **Phê duyệt giá**.
- Nếu có dòng dưới giá vốn: người duyệt có quyền **Bán dưới giá vốn** thấy hộp *Có hàng hóa dưới giá vốn, bạn có muốn tiếp tục lưu không?* → **Tiếp tục**; không có quyền thì bị chặn với thông báo **Bạn không có quyền bán hàng dưới giá vốn. Vui lòng liên hệ quản trị viên để được cấp quyền.**
- Thành công: **Yêu cầu duyệt giá đã được phê duyệt thành công.**  Giá đang hiển thị được lưu vào phiếu, tổng tiền tính lại. **Trạng thái duyệt** = **Đã duyệt**; cột **Thao tác** hiện các liên kết theo quyền (tài khoản trong Hình 5 thấy **Hủy YC | Hủy duyệt | Xóa**)  (Hình 5). Người lập nhận thông báo *Đơn hàng <mã> - Đã được duyệt*.

![Hình 5: Danh sách sau khi phê duyệt giá](/posts/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/hinh-05-da-duyet-gia.png)

**Bước 3b – Từ chối:** bấm **Từ chối duyệt giá**  → hộp **Lý do từ chối phê duyệt** (Hình 2). Nhập lý do vào ô *Nhập lý do từ chối...*, bấm **Xác nhận từ chối** (hoặc **Hủy** để quay lại). Thành công: **Yêu cầu duyệt giá đã bị từ chối thành công.** **Trạng thái duyệt** = **Từ chối duyệt**, cột **Lý do từ chối** hiện lý do. Người lập nhận thông báo *Đơn hàng <mã> - Bị từ chối duyệt* kèm lý do.

### Phần C – Người lập xử lý khi bị từ chối

Bấm **Sửa** ở dòng phiếu, chỉnh theo lý do ([HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/)), **Lưu lại**, rồi **Gửi YC** lại (Phần A).

### Phần D – Huỷ yêu cầu / huỷ duyệt (phiếu chưa xuất)

- **Hủy YC** (người lập, phiếu **Chờ duyệt** hoặc **Đã duyệt**): bấm **Hủy YC** ở dòng phiếu. Hệ thống huỷ ngay (không hỏi lại) và báo **Hủy yêu cầu duyệt giá thành công.** Phiếu về **Chưa duyệt**.
- **Hủy duyệt** (người có quyền, phiếu **Đã duyệt**): bấm **Hủy duyệt** → hộp **Xác nhận** *Bạn có muốn hủy duyệt giá ?* → đồng ý. Hệ thống báo **Hủy duyệt thành công**. Phiếu về **Chưa duyệt**.

Sau khi huỷ, người lập **Sửa** được phiếu và gửi yêu cầu lại.

## 6. Giải thích các thông tin trên màn hình

- **Trạng thái duyệt**: Ý nghĩa: Chưa duyệt / Chờ duyệt / Đã duyệt / Từ chối duyệt; Lưu ý: Cột trên danh sách
- **Người gửi yêu cầu, Thời gian gửi yêu cầu**: Ý nghĩa: Lần gửi gần nhất
- **Người duyệt, Thời gian duyệt**: Ý nghĩa: Người phê duyệt / từ chối
- **Lý do từ chối**: Ý nghĩa: Lý do khi từ chối; Lưu ý: Bắt buộc khi từ chối, ≤ 500 ký tự

## 7. Kiểm tra sau khi thực hiện

- **Phê duyệt**: phiếu **Đã duyệt**, thủ kho lập được phiếu xuất kho ([HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/)); phiếu không còn **Sửa** được.
- **Từ chối**: phiếu **Từ chối duyệt**, người lập sửa và gửi lại.
- **Hủy YC / Hủy duyệt**: phiếu **Chưa duyệt**, sửa được.
- Mỗi thao tác được ghi vào lịch sử phiếu. Tồn kho, công nợ không đổi.

## 8. Những điều cần lưu ý

⚠️ **Phiếu chưa duyệt giá không xuất kho được** (kho báo *Chưa được duyệt giá, không thể xuất.*).

⚠️ Giá người duyệt sửa trên cửa sổ duyệt **được lưu vào phiếu** khi bấm **Phê duyệt giá**. Người lập nên xem lại phiếu sau khi được duyệt.

⚠️ Khi phiếu đã **Đang xuất** / **Đã xuất**, không còn **Hủy YC**, **Hủy duyệt**. Thay đổi giá sau khi xuất phải xử lý bằng chứng từ khác (giảm giá BH-A05, khách trả hàng BH-A04).

⚠️ **Hủy YC** thực hiện ngay, không có hộp xác nhận.

⚠️ Chỉ **người tạo phiếu** thấy **Gửi YC** / **Hủy YC**. Nhân viên khác cần gửi thay thì nhờ người tạo hoặc quản trị.

### "Vui lòng nhập lý do từ chối." 

Nguyên nhân: bấm **Xác nhận từ chối** khi ô lý do trống.
Cách xử lý: nhập lý do.

### "Đã tồn tại yêu cầu duyệt giá với trạng thái PENDING hoặc APPROVED cho đơn hàng: <mã>" 

Nguyên nhân: phiếu đã có yêu cầu đang chờ hoặc đã duyệt.
Cách xử lý: tải lại danh sách; không gửi lại.

### "Có người đã sửa phiếu này. Kiểm tra và thao tác lại." khi phê duyệt / từ chối 

Nguyên nhân: yêu cầu không còn ở trạng thái chờ (người lập đã huỷ, hoặc người duyệt khác đã xử lý).
Cách xử lý: đóng cửa sổ, tải lại danh sách.

### "Bạn không có quyền huỷ yêu cầu duyệt giá." 

Nguyên nhân: bạn không phải người tạo phiếu và không có quyền duyệt giá.
Cách xử lý: nhờ người tạo phiếu hoặc người duyệt.

### "Phiếu đang xuất." / "Phiếu đã xuất." khi Hủy YC / Hủy duyệt 

Nguyên nhân: phiếu đã có dòng xuất kho.
Cách xử lý: không huỷ được; xử lý bằng giảm giá hoặc khách trả hàng.

### "Có lỗi xảy ra khi hủy yêu cầu duyệt giá. Vui lòng thử lại." (Lỗi hệ thống)

Nguyên nhân: không huỷ được do lỗi kết nối hoặc dữ liệu đã đổi.
Cách xử lý: tải lại danh sách, thử lại; vẫn lỗi thì báo IT ([LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/)).

## 10. Câu hỏi thường gặp

**Ai nhận thông báo yêu cầu duyệt giá?**
Mọi tài khoản được cấp quyền **Duyệt giá** của màn Phiếu bán hàng.

**Người duyệt có sửa được số lượng không?**
Không. Chỉ sửa đơn giá, chiết khấu, VAT, tên in, chú thích. Muốn đổi số lượng thì từ chối để người lập sửa.

**Phiếu cũ trước khi có chức năng gửi yêu cầu hiện trạng thái gì?**
Phiếu đã được duyệt giá theo cách cũ hiện **Đã duyệt**.

## 11. Công việc tiếp theo

**Tiếp theo:** (Kho) [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/) – Hướng dẫn lập phiếu xuất kho bán hàng; [HƯỚNG DẪN IN PHIẾU BÁN HÀNG VÀ BẢNG BÁO GIÁ](/bai-viet/2026-11-07-bh-a03-6-huong-dan-in-phieu-ban-hang-va-bang-bao-gia/) – In phiếu bán hàng / báo giá.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/) – Tổng quan màn hình Phiếu bán hàng
- [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/) – Hướng dẫn lập phiếu bán hàng
- [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/) – Hướng dẫn lập phiếu xuất kho bán hàng
