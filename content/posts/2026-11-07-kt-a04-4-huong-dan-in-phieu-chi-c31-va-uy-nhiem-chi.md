---
title: "HƯỚNG DẪN IN PHIẾU CHI C31 VÀ ỦY NHIỆM CHI"
date: "2026-11-07"
summary: "Từ một phiếu chi đã lưu, bạn in được: - MẪU C31: phiếu chi tiền mặt cho người nhận ký."
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

Từ một phiếu chi đã lưu, bạn in được:

- **MẪU C31**: phiếu chi tiền mặt cho người nhận ký.
- **Ủy nhiệm chi (UNC)** theo mẫu 5 ngân hàng: **UNC Vietinbank**, **UNC BIDV**, **UNC VCB**, **UNC SCB**, **UNC ACB** – nộp ngân hàng khi chi chuyển khoản.
- **UNC VAY**: ủy nhiệm chi trả nợ vay.

Bản in lấy dữ liệu từ phiếu chi, danh mục **Tài khoản, quỹ** (tài khoản trích tiền) và tài khoản ngân hàng của đối tượng nhận. Số tiền bằng chữ hệ thống tự đọc từ **Số tiền chi**; nội dung chuyển tiền / lý do chi lấy từ **GHI CHÚ**.

In phiếu **không** làm thay đổi tồn quỹ, công nợ hay sổ sách.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Phiếu chi đã được lưu.
- In UNC: quỹ chi là **tài khoản ngân hàng** và trong danh mục **Tài khoản, quỹ** đã khai **tên công ty**, **tại ngân hàng**, **số tài khoản**, **địa chỉ**.
- In UNC cho NCC: trên phiếu chi đã chọn **SỐ TÀI KHOẢN** của NCC ([HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/)). Cho khách hàng / đơn vị gia công: danh mục khách / ĐVGC đã có số tài khoản, tên chủ tài khoản, tên ngân hàng.

## 2. Mở chức năng

**Kế toán → Phiếu chi → chuột phải vào dòng phiếu → chọn mẫu in**

## 3. Nhận biết màn hình

![Hình 1: Menu chuột phải với các mục in của phiếu chi](/posts/2026-11-07-kt-a04-4-huong-dan-in-phieu-chi-c31-va-uy-nhiem-chi/hinh-01-menu-in-phieu-chi.png)

- **UNC Vietinbank, UNC BIDV, UNC VCB, UNC SCB, UNC ACB**: Ý nghĩa: 5 mẫu ủy nhiệm chi theo ngân hàng
- **MẪU C31**: Ý nghĩa: Phiếu chi tiền mặt
- **UNC VAY**: Ý nghĩa: Ủy nhiệm chi trả nợ vay

Menu còn **Xem lại** (đầu) và **File đính kèm** (cuối) – xem [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/).

![Hình 2: Cửa sổ xem trước UNC SCB](/posts/2026-11-07-kt-a04-4-huong-dan-in-phieu-chi-c31-va-uy-nhiem-chi/hinh-02-xem-truoc-unc.png)

- **In, Xuất**: Ý nghĩa: In / lưu file. Cùng thanh còn có chuyển trang, phóng to / thu nhỏ, **Trang đơn**, **Sửa mẫu** (người có quyền) – [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Nút Đóng**: Ý nghĩa: Đóng cửa sổ xem trước
- **Trang in**: Ý nghĩa: UNC SCB của phiếu PC00113319: đơn vị chuyển tiền, đơn vị thụ hưởng, số tiền, nội dung, phí ngân hàng, ô chữ ký. Số tài khoản công ty đã làm mờ trong ảnh

Hình 2: phiếu chi NCC chưa chọn **SỐ TÀI KHOẢN** nên khối **Cá nhân/Đơn vị thụ hưởng** để trống; **Số tiền bằng số** 1,000,000 VND = tiền chi (không cộng tiền giảm 20.000).

![Hình 3: Cửa sổ xem trước phiếu chi MẪU C31](/posts/2026-11-07-kt-a04-4-huong-dan-in-phieu-chi-c31-va-uy-nhiem-chi/hinh-03-xem-truoc-phieu-chi-c31.png)

- **Thân phiếu**: Ý nghĩa: **Họ, tên người nhận tiền**, **Địa chỉ**, **Lý do chi**, **Số tiền** + bằng chữ, **Kèm theo** (mã phiếu), **Đã nhận đủ số tiền**
- **Tên dưới Người lập phiếu**: Ý nghĩa: Tài khoản **đang bấm in** (Hình 3: Administrator), không phải người tạo phiếu

Đầu phiếu C31 có **Đơn vị**, **Bộ phận**, **Mã đơn vị SDNS**, tiêu đề **PHIẾU CHI** + ngày chi, **Quyển số**, **Số**, **Nợ**, **Có**, ô **Mẫu số C31 BB**; cuối phiếu có ngày ký và 5 ô chữ ký: Thủ trưởng đơn vị, Kế toán trưởng, Người lập phiếu, Thủ quỹ, Người nhận tiền.

**Dữ liệu trên bản in lấy từ đâu:**

- **Logo (UNC)**: Nguồn: Logo ngân hàng in sẵn trên mẫu (UNC SCB: Sacombank). Mẫu C31 không in logo
- **Ngày**: Nguồn: **NGÀY CHI** – UNC: dòng *Ngày (date)*; C31: dưới tiêu đề **PHIẾU CHI** và dòng *Ngày … tháng … năm …*
- **Cá nhân/Đơn vị chuyển tiền, Tài khoản số, Tại chi nhánh/PGD (UNC)**: Nguồn: Danh mục **Tài khoản, quỹ** của **QUỸ CHI**
- **Cá nhân/Đơn vị thụ hưởng, Tài khoản số, Tại ngân hàng, Tỉnh/Thành phố (UNC)**: Nguồn: NCC: **SỐ TÀI KHOẢN** chọn trên phiếu. Khách hàng / ĐVGC: tài khoản trong danh mục. Phiếu chưa chọn tài khoản thì cả khối để trống, kể cả tên
- **Số tiền bằng số / Số tiền, số tiền bằng chữ**: Nguồn: **Số tiền chi** (phiếu lệnh vay: gốc + lãi). **Tiền giảm** không in. Bằng chữ kết thúc *đồng /*
- **Nội dung (UNC), Lý do chi (C31)**: Nguồn: **GHI CHÚ** (không phải **NỘI DUNG**)
- **Đơn vị (C31)**: Nguồn: Tên công ty của chi nhánh đang làm việc
- **Bộ phận (C31)**: Nguồn: Chủ tài khoản của **QUỸ CHI**; tên dài bị cắt (Hình 3)
- **Họ, tên người nhận tiền, Địa chỉ (C31)**: Nguồn: **NGƯỜI NHẬN**, **ĐỊA CHỈ** – in nguyên văn, kể cả chữ *null*
- **Kèm theo (C31)**: Nguồn: **MÃ PHIẾU** (PC…). Ô **Số**, **Quyển số**, **Nợ**, **Có**, **Chứng từ kế toán** để trống
- **Tên dưới Người lập phiếu (C31)**: Nguồn: Tài khoản đang bấm in. Không in giờ in
- **Ô chữ ký UNC (Kế toán trưởng, Chủ tài khoản…), Phí ngân hàng**: Nguồn: Để trống – ký, đánh dấu tay

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kế toán
   ↓
Phiếu chi
   ↓
Chuột phải dòng phiếu ──► MẪU C31 / UNC <ngân hàng> / UNC VAY
   ↓
Cửa sổ xem trước khi in
```

```text
Lập phiếu chi (KT-A04.1 / A04.2 / A04.3)
      ↓
Chi tiền mặt ──► MẪU C31 → in → người nhận, thủ quỹ ký
Chi chuyển khoản ──► UNC đúng ngân hàng của QUỸ CHI → in → ký, đóng dấu
                     → nộp ngân hàng
Trả nợ vay ──► UNC VAY (hoặc UNC của ngân hàng)
      ↓
Đính kèm bản ký / UNC có xác nhận ngân hàng (GEN-12)
```

### Bước 1 – Chọn phiếu

Vào **Kế toán → Phiếu chi**, chọn khoảng ngày, tìm phiếu cần in.

### Bước 2 – Chọn mẫu in

Chuột phải vào dòng phiếu → chọn mẫu (Hình 1):

- Chi tiền mặt: **MẪU C31**.
- Chi chuyển khoản: **UNC** của **ngân hàng nơi công ty mở tài khoản chi** (ngân hàng của **QUỸ CHI**), không phải ngân hàng của người nhận.
- Trả nợ vay: **UNC VAY**.

### Bước 3 – Kiểm tra bản xem trước

Cửa sổ xem trước mở ra (Hình 2 – UNC; Hình 3 – C31). Kiểm tra số tiền, số tiền bằng chữ, tài khoản trích tiền, tài khoản nhận tiền (UNC), người nhận, địa chỉ, nội dung / lý do chi.

Sai thông tin: bấm **Đóng**, sửa phiếu chi ([HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/)) hoặc sửa danh mục **Tài khoản, quỹ** / **Nhà cung cấp**, rồi in lại.

### Bước 4 – In

Bấm **In**  trên thanh công cụ, chọn máy in ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)). Cần gửi file thì dùng **Xuất** → PDF. Bấm **Đóng**  để thoát.

## 6. Kiểm tra sau khi thực hiện

Có bản in phiếu chi C31 hoặc ủy nhiệm chi để ký và nộp ngân hàng. Dữ liệu phiếu chi, tồn quỹ, công nợ không thay đổi.

## 7. Những điều cần lưu ý

⚠️ Menu hiện **đủ 7 mẫu cho mọi phiếu**, kể cả phiếu chi tiền mặt. Tự chọn đúng mẫu theo quỹ chi.

⚠️ **Số tiền trên bản in = Số tiền chi**. Phần **Tiền giảm** không in, nên UNC đúng bằng số thực chuyển (PC00113319: tổng chi 1.020.000, UNC in 1,000,000).

⚠️ UNC trống cả tên và số tài khoản người thụ hưởng khi phiếu NCC chưa chọn **SỐ TÀI KHOẢN** (Hình 2) – sửa phiếu, chọn tài khoản rồi in lại.

⚠️ Phiếu C31 in nguyên **ĐỊA CHỈ** của phiếu: ô có chữ *null, null* (Hình 3) thì sửa phiếu trước khi in.

⚠️ Mẫu in do quản trị cấu hình. Muốn đổi bố cục mẫu, liên hệ IT (không tự sửa trong cửa sổ xem trước).

### Bản in trống tài khoản trích tiền / tài khoản nhận tiền 

Nguyên nhân: danh mục **Tài khoản, quỹ** của quỹ chi chưa khai ngân hàng, số tài khoản; hoặc phiếu NCC chưa chọn **SỐ TÀI KHOẢN**; hoặc danh mục khách / ĐVGC thiếu tài khoản.
Cách xử lý: bổ sung danh mục / sửa phiếu, rồi in lại.

### Cửa sổ xem trước trắng, không hiện phiếu (Lỗi hệ thống)

Nguyên nhân: không tải được mẫu in hoặc dữ liệu phiếu.
Cách xử lý: đóng, tải lại trang (F5), in lại; vẫn lỗi thì báo IT ([LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/)).

## 9. Câu hỏi thường gặp

**Chọn UNC của ngân hàng nào?**
Ngân hàng nơi công ty **trích tiền** (ngân hàng của **QUỸ CHI**). Mỗi ngân hàng nhận mẫu UNC riêng.

**In lại nhiều lần có sao không?**
Không. In không thay đổi dữ liệu.

## 10. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/) – đính kèm bản đã ký / UNC có xác nhận của ngân hàng vào phiếu chi.

## 11. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/) – Tổng quan màn hình Phiếu chi
- [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/) – Hướng dẫn lập phiếu chi
- [HƯỚNG DẪN LẬP PHIẾU CHI TRẢ LỆNH VAY](/bai-viet/2026-11-07-kt-a04-2-huong-dan-lap-phieu-chi-tra-lenh-vay/) – Hướng dẫn lập phiếu chi trả lệnh vay
- Sổ tay Thiết lập danh mục – Tài khoản, quỹ; Nhà cung cấp (số tài khoản)

### Quỹ chi ở ngân hàng khác danh sách thì in gì?

Liên hệ kế toán trưởng hoặc IT để xác nhận mẫu phù hợp vì chưa có mẫu riêng cho ngân hàng ngoài danh sách.
