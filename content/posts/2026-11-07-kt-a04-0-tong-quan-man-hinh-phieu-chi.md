---
title: "TỔNG QUAN MÀN HÌNH PHIẾU CHI"
date: "2026-11-07"
summary: "Màn hình Phiếu chi ghi nhận mọi khoản tiền ra khỏi quỹ (tiền mặt hoặc tài khoản ngân hàng): trả tiền nhà cung cấp, trả đơn vị gia công, trả nợ vay, trả tiền hàng mua mượn, chi cho khách hàng, chi khác (chi phí)."
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

Màn hình **Phiếu chi** ghi nhận mọi khoản **tiền ra khỏi quỹ** (tiền mặt hoặc tài khoản ngân hàng): trả tiền nhà cung cấp, trả đơn vị gia công, trả nợ vay, trả tiền hàng mua mượn, chi cho khách hàng, chi khác (chi phí).

Phiếu chi làm thay đổi số liệu **ngay khi lưu**:

- **Tồn quỹ chi giảm** đúng **Tiền chi**. Quỹ không đủ tồn thì không lưu được. **Tiền giảm** không đi qua quỹ.
- **Công nợ** của đối tượng thay đổi theo **Tổng chi** = Tiền chi + Tiền giảm (bảng ở phần “Trình tự công việc”).
- **Sổ cái** (Sổ chi tiết tài khoản, Bảng cân đối phát sinh) **chưa** đổi khi lưu; phiếu chỉ lên sổ khi chạy hạch toán tự động ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/)).

Bạn dùng màn hình này khi:

- Thanh toán tiền hàng cho nhà cung cấp, tiền gia công cho đơn vị gia công.
- Trả gốc, lãi lệnh vay.
- Trả tiền hàng đã mượn của nhà cung cấp (giữ lại hàng mượn).
- Chi tiền cho khách hàng (hoàn tiền, ứng tiền), chi phí khác.
- In phiếu chi mẫu C31 hoặc ủy nhiệm chi (UNC) gửi ngân hàng.

So với **Phiếu thu** ([TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/)): menu **Thêm mới** có **Lệnh vay**, **Mua hàng mượn** thay cho **Hàng cho mượn**; **không có** mục **Giao dịch ngân hàng**; cửa sổ có thêm **NGÀY HẠCH TOÁN**, **ĐỐI TƯỢNG TẬP HỢP CHI PHÍ**, **SỐ TÀI KHOẢN** (NCC); **GHI CHÚ** bắt buộc; chuột phải có 6 mẫu ủy nhiệm chi ngoài mẫu C31.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Phiếu chi**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Tài khoản đã được **phân quỹ** và **phân nhóm khách** (như Phiếu thu, [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/) phần “Chuẩn bị trước khi thực hiện”). Danh sách chỉ hiện phiếu có quỹ chi thuộc quỹ được phân; phiếu chi cho khách hàng chỉ hiện khi khách thuộc nhóm khách được phân.
- Danh mục đã có dữ liệu (sổ tay Thiết lập danh mục): **Tài khoản, quỹ**, **Nội dung thu chi**, **Nhà cung cấp** (kèm số tài khoản ngân hàng nếu in UNC), **Khách hàng**, **Đơn vị gia công**, **Nguồn nhân lực**.

## 2. Mở chức năng

**Kế toán → Phiếu chi**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU CHI - DANH SÁCH](/posts/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/hinh-01-man-hinh-phieu-chi.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày chi**. Mặc định hôm nay (nhãn *today*); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Menu chọn loại phiếu chi (bảng dưới); Hình 1 đang mở menu; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/), [HƯỚNG DẪN LẬP PHIẾU CHI TRẢ LỆNH VAY](/bai-viet/2026-11-07-kt-a04-2-huong-dan-lap-phieu-chi-tra-lenh-vay/), [HƯỚNG DẪN LẬP PHIẾU CHI TIỀN HÀNG MUA MƯỢN](/bai-viet/2026-11-07-kt-a04-3-huong-dan-lap-phieu-chi-tien-hang-mua-muon/)
- **–**: Thành phần: Biểu tượng **Xuất Excel**; Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**). Trong Hình 1 bị menu **Thêm mới** che – nằm ngay bên trái **Trình chọn cột** (thấy ở Hình 2); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Ô tick đầu dòng**: Chức năng: Chọn nhiều phiếu (dùng cho **Đề nghị sinh chứng từ AMIS**); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Thao tác: Sửa / Xóa**: Chức năng: Cập nhật / xoá phiếu; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/) / [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Menu Thêm mới:**

- **Khác**: Dùng khi: Chi không gắn đối tượng công nợ (chi phí, chi khác); Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/)
- **Lệnh vay**: Dùng khi: Trả gốc, lãi một lệnh vay; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU CHI TRẢ LỆNH VAY](/bai-viet/2026-11-07-kt-a04-2-huong-dan-lap-phieu-chi-tra-lenh-vay/)
- **Mua hàng mượn**: Dùng khi: Trả tiền hàng mượn của NCC mà công ty giữ lại (từ phiếu xuất trả mượn hàng); Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU CHI TIỀN HÀNG MUA MƯỢN](/bai-viet/2026-11-07-kt-a04-3-huong-dan-lap-phieu-chi-tien-hang-mua-muon/)
- **Khách hàng**: Dùng khi: Chi tiền cho khách hàng (hoàn tiền, ứng tiền…); Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/)
- **Nhà cung cấp**: Dùng khi: Thanh toán nhà cung cấp; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/)
- **Đơn vị gia công**: Dùng khi: Thanh toán đơn vị gia công / nguồn nhân lực; Hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/)

Phiếu chi trả **giảm giá** cho khách và chi **hoa hồng** không lập từ menu này, mà từ nút **Chi tiền** trên phiếu giảm giá ([HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-2-huong-dan-duyet-xac-nhan-va-chi-tien-phieu-giam-gia/)) và bảng kê hoa hồng ([HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-2-huong-dan-duyet-xac-nhan-va-chi-tien-bang-ke-hoa-hong/)) ở sổ tay Bán hàng. Sau khi lưu, các phiếu đó vẫn hiện trong danh sách Phiếu chi.

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày chi**: Ý nghĩa: Ngày trên phiếu
- **Loại chứng từ**: Ý nghĩa: **Tiền mặt** (quỹ chi có chữ *TIỀN MẶT* trong tên) hoặc **Tiền gửi**. Bản hiện tại hiện **Tiền gửi** cả với quỹ tiền mặt (Hình 1, dòng 1–2) – đang chờ sửa, chưa dùng cột này để tách phiếu tiền mặt
- **Mã phiếu**: Ý nghĩa: Mã phiếu chi, hệ thống tự tạo (dạng **PC** + 8 chữ số)
- **Người nhận**: Ý nghĩa: Người / đơn vị nhận tiền
- **Quỹ chi**: Ý nghĩa: Quỹ / tài khoản chi tiền
- **Nội dung**: Ý nghĩa: Nội dung thu chi
- **Số tiền chi**: Ý nghĩa: Tiền thực chi ra khỏi quỹ (phiếu lệnh vay: gốc + lãi)
- **Số tiền giảm**: Ý nghĩa: Phần trừ công nợ không chi bằng tiền
- **Ghi chú**: Ý nghĩa: Nội dung chi tiền
- **File đính kèm**: Ý nghĩa: *Số lượng file: n* hoặc *Không có file đính kèm*
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Cột ẩn, bật bằng **Trình chọn cột**: **Loại phiếu**, **Chứng từ**, **Địa chỉ**, **Điện thoại**, **Mã nhà cung cấp**, **Mã khách hàng**.

Thứ tự cột trên màn: ô tick, **STT**, **Thao tác**, **Ngày chi**, **Loại chứng từ**, **Mã phiếu**, **Người nhận**, **Quỹ chi**, **Nội dung**, **Số tiền chi**… Mỗi cột có biểu tượng phễu (lọc theo giá trị) và ô tìm dưới tiêu đề.

Dòng cuối bảng hiện **TỔNG CỘNG: n** và tổng **Số tiền chi**, **Số tiền giảm**. Liên kết **Tạo Bộ lọc** dưới bảng mở bộ lọc nâng cao ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Menu chuột phải trên một dòng phiếu:**

- **Xem lại**: Mở cửa sổ: **XEM LẠI - PHIẾU CHI** (chỉ xem); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **UNC Vietinbank, UNC BIDV, UNC VCB, UNC SCB, UNC ACB**: Mở cửa sổ: Xem trước ủy nhiệm chi theo mẫu ngân hàng; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU CHI C31 VÀ ỦY NHIỆM CHI](/bai-viet/2026-11-07-kt-a04-4-huong-dan-in-phieu-chi-c31-va-uy-nhiem-chi/)
- **MẪU C31**: Mở cửa sổ: Xem trước phiếu chi mẫu C31; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU CHI C31 VÀ ỦY NHIỆM CHI](/bai-viet/2026-11-07-kt-a04-4-huong-dan-in-phieu-chi-c31-va-uy-nhiem-chi/)
- **UNC VAY**: Mở cửa sổ: Xem trước ủy nhiệm chi trả nợ vay; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU CHI C31 VÀ ỦY NHIỆM CHI](/bai-viet/2026-11-07-kt-a04-4-huong-dan-in-phieu-chi-c31-va-uy-nhiem-chi/)
- **File đính kèm**: Mở cửa sổ: **FILE ĐÍNH KÈM - PHIẾU CHI**; Hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **Đề nghị sinh chứng từ AMIS**: Mở cửa sổ: Gửi các phiếu đang tick sang AMIS (chỉ hiện khi có quyền); Hướng dẫn: Sổ tay Thiết lập danh mục – Kết nối AMIS

![Hình 2: Menu chuột phải trên dòng phiếu chi](/posts/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/hinh-02-menu-chuot-phai-phieu-chi.png)

Hình 2 chụp bằng tài khoản không có quyền AMIS nên menu có 9 mục, không có **Đề nghị sinh chứng từ AMIS**.

Nhấp đúp vào dòng cũng mở **XEM LẠI - PHIẾU CHI**. Chuột phải vào **tiêu đề cột** để mở menu sắp xếp, nhóm, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

**Phiếu chi làm thay đổi gì (khi lưu):**

- **Nhà cung cấp**: Tồn quỹ chi: − Tiền chi; Công nợ: Công nợ NCC **giảm** Tổng chi
- **Đơn vị gia công**: Tồn quỹ chi: − Tiền chi; Công nợ: Công nợ ĐVGC **giảm** Tổng chi; công nợ nguồn nhân lực **giảm** Tổng chi nếu chọn
- **Khách hàng**: Tồn quỹ chi: − Tiền chi; Công nợ: Công nợ khách **tăng** Tổng chi – trừ khi tick **Không tính nợ**
- **Lệnh vay**: Tồn quỹ chi: − (gốc + lãi); Công nợ: Không đổi; Cập nhật chứng từ nguồn: **Số tiền đã chi**, **Số tiền đã chi (lãi)**, **Trạng thái chi** của lệnh vay
- **Mua hàng mượn**: Tồn quỹ chi: − Tiền chi; Công nợ: Công nợ NCC **giảm** Tổng chi; Cập nhật chứng từ nguồn: **Số tiền đã chi**, **Trạng thái chi** của phiếu xuất trả mượn hàng
- **Khác**: Tồn quỹ chi: − Tiền chi; Công nợ: Không đổi
- **Chi giảm giá (từ Bán hàng)**: Tồn quỹ chi: − Tiền chi; Công nợ: Công nợ khách **tăng** Tổng chi; Cập nhật chứng từ nguồn: **Tiền đã chi**, **Trạng thái** của phiếu giảm giá
- **Chi hoa hồng (từ Bán hàng)**: Tồn quỹ chi: − Tiền chi; Công nợ: Không đổi (luôn **Không tính nợ**); Cập nhật chứng từ nguồn: **Tiền đã chi**, **Trạng thái** của bảng kê hoa hồng

Tổng chi = Tiền chi + Tiền giảm. Sửa phiếu: hệ thống hoàn lại số cũ rồi ghi số mới. Xoá phiếu: đảo ảnh hưởng của chính phiếu đó lên quỹ, công nợ và số đã chi của nguồn; phát sinh khác vẫn còn. Đối chiếu số trước/sau, không hiểu là phục hồi toàn bộ dữ liệu về một thời điểm cũ.

**Khi nào phiếu chi lên sổ cái:** khi kế toán chạy **hạch toán tự động** cho năm (không phải lúc lưu). Bút toán ghi theo **Ngày hạch toán**; chỉ phiếu có **Tiền chi** > 0 ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) phần “Trình tự công việc”):

- **Có nhà cung cấp (loại NCC, Mua hàng mượn)**: Bút toán: Nợ 331 / Có TK tiền của quỹ chi
- **Có khách hàng và tính nợ**: Bút toán: Nợ 131 / Có TK tiền của quỹ chi
- **Còn lại (Khác, Lệnh vay, ĐVGC, khách Không tính nợ)**: Bút toán: Nợ TK chi phí theo **Nội dung** (không có thì 811) / Có TK tiền của quỹ chi

**Vị trí phiếu chi trong quy trình:**

```text
(Mua hàng) Phiếu nhập kho mua hàng → công nợ NCC tăng
      ↓
Đến hạn thanh toán
   ├── Tiền mặt ──► Phiếu chi loại Nhà cung cấp, quỹ tiền mặt (KT-A04.1)
   └── Chuyển khoản ──► Phiếu chi loại Nhà cung cấp, quỹ ngân hàng
                        → in UNC gửi ngân hàng (KT-A04.4)
      ↓
Tồn quỹ giảm · công nợ NCC giảm
      ↓
Thống kê Tồn quỹ (KT-B02.0) · Công nợ nhà cung cấp (KT-C05.0)
Cuối kỳ: hạch toán tự động → Sổ chi tiết tài khoản (KT-A09.0)
```

**Các chức năng trên màn hình:**

```text
Phiếu chi
   ├── Thêm mới ──► Khác · Lệnh vay · Mua hàng mượn
   │              · Khách hàng · Nhà cung cấp · Đơn vị gia công
   ├── Sửa ──► CẬP NHẬT - PHIẾU CHI
   ├── Xóa ──► người tạo (hoặc quản trị)
   ├── Xem lại (chuột phải / nhấp đúp)
   ├── In ──► UNC Vietinbank / BIDV / VCB / SCB / ACB · MẪU C31 · UNC VAY
   ├── File đính kèm · Đề nghị sinh chứng từ AMIS
   └── Xuất Excel
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm phiếu**: Cách làm: Gõ mã phiếu, người nhận, quỹ… vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Trả tiền NCC / ĐVGC / chi cho khách / chi khác**: Cách làm: **Thêm mới** → chọn loại; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/)
- **Trả nợ vay (gốc, lãi)**: Cách làm: **Thêm mới** → **Lệnh vay**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU CHI TRẢ LỆNH VAY](/bai-viet/2026-11-07-kt-a04-2-huong-dan-lap-phieu-chi-tra-lenh-vay/)
- **Trả tiền hàng mua mượn**: Cách làm: **Thêm mới** → **Mua hàng mượn**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU CHI TIỀN HÀNG MUA MƯỢN](/bai-viet/2026-11-07-kt-a04-3-huong-dan-lap-phieu-chi-tien-hang-mua-muon/)
- **Chi tiền giảm giá cho khách**: Cách làm: Từ phiếu giảm giá → **Chi tiền**; Bài hướng dẫn: [HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-2-huong-dan-duyet-xac-nhan-va-chi-tien-phieu-giam-gia/)
- **Chi hoa hồng**: Cách làm: Từ bảng kê hoa hồng → **Chi tiền**; Bài hướng dẫn: [HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-2-huong-dan-duyet-xac-nhan-va-chi-tien-bang-ke-hoa-hong/)
- **Xem chi tiết phiếu**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: Mục này
- **Sửa phiếu**: Cách làm: **Sửa**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/)
- **Xoá phiếu**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **In phiếu chi C31 / UNC**: Cách làm: Chuột phải → mục in; Bài hướng dẫn: [HƯỚNG DẪN IN PHIẾU CHI C31 VÀ ỦY NHIỆM CHI](/bai-viet/2026-11-07-kt-a04-4-huong-dan-in-phieu-chi-c31-va-uy-nhiem-chi/)
- **Đính kèm chứng từ**: Cách làm: Chuột phải → **File đính kèm**; Bài hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một phiếu

**Bước 1 –** Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**).

**Bước 2 –** cửa sổ **XEM LẠI - PHIẾU CHI** mở ra, các ô hiện theo loại phiếu. Không có nút **Lưu lại**.

**Bước 3 –** Bấm **Đóng**.

### Đề nghị sinh chứng từ AMIS (khi có quyền)

Làm như Phiếu thu ([TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/) phần “Thực hiện trên phần mềm”): tick các phiếu  → chuột phải → **Đề nghị sinh chứng từ AMIS**. Phiếu **Tiền mặt** gửi thành chứng từ chi tiền mặt, phiếu **Tiền gửi** gửi thành chứng từ chi tiền gửi. Đối tượng chưa có mã trên AMIS hoặc tài khoản chưa có tên ngân hàng: hệ thống báo tên đối tượng / số tài khoản bị thiếu và không gửi.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ phiếu chi: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Phiếu chi có những loại phiếu nào, mỗi loại làm thay đổi tồn quỹ, công nợ, chứng từ nguồn ra sao, lúc nào phiếu lên sổ cái, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Phiếu chi trừ tồn quỹ và đổi công nợ ngay khi lưu.** Quỹ chi không đủ tồn thì hệ thống không cho lưu.

⚠️ **Chỉ người tạo phiếu (hoặc tài khoản quản trị) mới xoá được phiếu.** Xoá phiếu sẽ cộng lại tiền vào quỹ, hoàn lại công nợ và trạng thái chi của lệnh vay / phiếu mượn hàng / phiếu giảm giá / bảng kê hoa hồng.

⚠️ Không lập, sửa, xoá được phiếu có **Ngày chi** trong **kỳ kế toán đã khóa** ([TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/)).

⚠️ Không xoá được phiếu chi đã được đưa vào **kỳ tính giá thành đã kết chuyển** (sổ tay Giá thành). Báo kế toán giá thành đánh giá các chứng từ phụ thuộc và phương án điều chỉnh; chỉ hủy kết chuyển khi người phụ trách chốt đúng trình tự.

⚠️ Sửa hoặc xoá phiếu **đã lên sổ cái** (đã chạy hạch toán tự động) **không** tự sửa bút toán. Báo kế toán trưởng để điều chỉnh sổ.

⚠️ Danh sách chỉ hiện phiếu của **quỹ** và **nhóm khách** bạn được phân. Không thấy phiếu của đồng nghiệp là do phân quyền, không phải phiếu bị mất.

⚠️ Tiền chuyển giữa hai quỹ của công ty dùng **Chuyển tiền nội bộ** ([TỔNG QUAN MÀN HÌNH CHUYỂN TIỀN NỘI BỘ](/bai-viet/2026-11-07-kt-a06-0-tong-quan-man-hinh-chuyen-tien-noi-bo/)) – không lập phiếu chi. Bù trừ công nợ giữa hai đối tượng (không chi tiền) dùng **Phiếu cấn trừ** ([TỔNG QUAN MÀN HÌNH PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-0-tong-quan-man-hinh-phieu-can-tru/)).

### "CẢNH BÁO – Lỗi xóa: Chỉ được xoá phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### "CẢNH BÁO – Lỗi xóa: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **Ngày chi** thuộc kỳ đã khóa.
Cách xử lý: nhờ người có quyền mở kỳ ([HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/)).

### "CẢNH BÁO – Lỗi xóa: Phiếu chi đã được đưa vào kỳ tính giá thành đã kết chuyển (<tên kỳ>). Vui lòng hủy phiếu kết chuyển và xóa kỳ tính giá thành trước khi xóa phiếu này." 

Nguyên nhân: phiếu chi là chi phí sản xuất đã được tính vào giá thành của kỳ đã kết chuyển.
Cách xử lý: liên hệ kế toán giá thành để huỷ kết chuyển kỳ đó trước.

### Không thấy phiếu vừa lập / phiếu của đồng nghiệp 

Kiểm tra: khoảng ngày lọc; chi nhánh; quỹ chi và nhóm khách của phiếu có được phân cho tài khoản không.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)) hoặc nhờ quản trị phân quỹ / nhóm khách.

### Không thấy nút Thêm mới / Sửa / Xóa 

Kiểm tra: quyền tương ứng của màn hình Phiếu chi.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi khi lưu phiếu (quỹ không đủ tồn, thiếu trường…): xem phần “Vướng mắc thường gặp” của [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/). Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Tiền giảm trên phiếu chi là gì?**
Phần công nợ được trừ cho đối tượng mà công ty không chi bằng tiền (ví dụ NCC giảm cho công ty khi thanh toán sớm). Tiền giảm làm giảm công nợ NCC / ĐVGC nhưng không trừ quỹ và không lên sổ cái.

**Có lập phiếu chi từ giao dịch ngân hàng như phiếu thu không?**
Không. Màn Phiếu chi không có mục **Giao dịch ngân hàng**; phiếu chi chuyển khoản lập tay với quỹ chi là tài khoản ngân hàng.

**Trả tiền NCC có cần chọn phiếu nhập kho / hoá đơn cụ thể không?**
Không. Phiếu chi loại Nhà cung cấp trừ thẳng vào tổng công nợ NCC, không gắn với từng phiếu mua hàng. Ghi số hoá đơn / số UNC vào **CHỨNG TỪ** hoặc **GHI CHÚ** để tra cứu.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/) – Hướng dẫn lập phiếu chi.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/) – Hướng dẫn lập phiếu chi
- [HƯỚNG DẪN LẬP PHIẾU CHI TRẢ LỆNH VAY](/bai-viet/2026-11-07-kt-a04-2-huong-dan-lap-phieu-chi-tra-lenh-vay/) – Hướng dẫn lập phiếu chi trả lệnh vay
- [HƯỚNG DẪN LẬP PHIẾU CHI TIỀN HÀNG MUA MƯỢN](/bai-viet/2026-11-07-kt-a04-3-huong-dan-lap-phieu-chi-tien-hang-mua-muon/) – Hướng dẫn lập phiếu chi tiền hàng mua mượn
- [HƯỚNG DẪN IN PHIẾU CHI C31 VÀ ỦY NHIỆM CHI](/bai-viet/2026-11-07-kt-a04-4-huong-dan-in-phieu-chi-c31-va-uy-nhiem-chi/) – Hướng dẫn in phiếu chi C31 và ủy nhiệm chi
- [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/) – Tổng quan màn hình Phiếu thu
- [TỔNG QUAN MÀN HÌNH PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-0-tong-quan-man-hinh-phieu-can-tru/) – Tổng quan màn hình Phiếu cấn trừ
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/) – Tồn quỹ; [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NHÀ CUNG CẤP](/bai-viet/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/) – Công nợ nhà cung cấp; [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) – Sổ chi tiết tài khoản
- [HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-2-huong-dan-duyet-xac-nhan-va-chi-tien-phieu-giam-gia/), [HƯỚNG DẪN DUYỆT, XÁC NHẬN VÀ CHI TIỀN BẢNG KÊ HOA HỒNG](/bai-viet/2026-11-07-bh-a07-2-huong-dan-duyet-xac-nhan-va-chi-tien-bang-ke-hoa-hong/) (chi tiền giảm giá, hoa hồng)
