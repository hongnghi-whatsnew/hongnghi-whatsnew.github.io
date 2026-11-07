---
title: "TỔNG QUAN MODULE KẾ TOÁN VÀ THỨ TỰ SỬ DỤNG"
date: "2026-11-07"
summary: "Thao tác đăng nhập, đăng xuất, đổi mật khẩu và sử dụng ERP cơ bản được hướng dẫn trong Sổ tay Hướng dẫn chung (HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU đến HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM)."
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

Thao tác đăng nhập, đăng xuất, đổi mật khẩu và sử dụng ERP cơ bản được hướng dẫn trong **Sổ tay Hướng dẫn chung ([HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/) đến [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/))**. Đọc các bài GEN liên quan trước; sổ tay này hướng dẫn nghiệp vụ của phân hệ.

phân hệ Kế toán ghi nhận **dòng tiền** và **công nợ** của công ty trên Hồng Nghi ERP: thu tiền, chi tiền, cấn trừ công nợ, chuyển tiền giữa các quỹ, vay ngân hàng; quản lý **kỳ kế toán** (khóa sổ); xem **sổ sách** (sổ chi tiết tài khoản, bảng cân đối phát sinh); và theo dõi **tồn quỹ**, **công nợ** khách hàng, nhà cung cấp, đơn vị gia công, nguồn nhân lực.

phân hệ Kế toán nhận đầu vào từ các phân hệ khác: phiếu nhập kho mua hàng làm tăng công nợ nhà cung cấp, phiếu xuất kho bán hàng làm tăng công nợ khách hàng, phiếu nhập kho gia công làm tăng công nợ đơn vị gia công… Kế toán dùng phiếu thu, phiếu chi, phiếu cấn trừ để **tất toán** các khoản công nợ đó.

Bài này giúp bạn:

- Biết phân hệ có những màn hình nào và nằm ở đâu trên menu.
- Hiểu chứng từ nào làm thay đổi tồn quỹ, công nợ, sổ sách, và ở bước nào.
- Biết cần chuẩn bị danh mục gì trước, và nên đọc bài hướng dẫn nào trước, bài nào sau.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có tài khoản đăng nhập Hồng Nghi ERP và đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/), [HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)). Chứng từ, kỳ kế toán, tồn quỹ và công nợ đều tính **riêng theo chi nhánh**.
- Danh mục đã có dữ liệu (sổ tay **Thiết lập danh mục**):
  - **Tài khoản, quỹ**: quỹ tiền mặt và từng tài khoản ngân hàng (ghi đúng **Số tài khoản** nếu dùng đối chiếu ngân hàng).
  - **Nội dung thu chi**: các khoản thu, chi (tiền điện, lương, thu công nợ…); nội dung chi gắn tài khoản chi phí để hạch toán tự động.
  - **Hệ thống tài khoản** và **Cấu hình hạch toán**: dùng khi hạch toán tự động lên sổ.
  - Đối tượng công nợ: **Khách hàng**, **Nhà cung cấp** (kể cả ngân hàng cho vay), **Đơn vị gia công**, **Nguồn nhân lực**.
- Tài khoản đăng nhập đã được **phân quỹ** (Thiết lập nội bộ → Nhân viên → chuột phải **Phân qũy, tài khoản**) và **phân nhóm khách** (**Phân nhóm khách**). Danh sách phiếu thu, phiếu chi chỉ hiện phiếu thuộc quỹ và nhóm khách được phân.
- Đã tạo **kỳ kế toán** cho cả năm ở từng chi nhánh ([HƯỚNG DẪN TẠO, SỬA, XOÁ KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-1-huong-dan-tao-sua-xoa-ky-ke-toan/)). Ngày không thuộc kỳ nào thì chứng từ không lên sổ.

## 2. Mở chức năng

**Kế toán / Thống kê thu chi / Thống kê công nợ**

## 3. Nhận biết màn hình

Trên thanh menu bên trái có 3 nhóm menu của phân hệ: nhóm **Kế toán** nằm ở khu **NGHIỆP VỤ** (sau **Kho hàng**), hai nhóm **Thống kê thu chi** và **Thống kê công nợ** nằm ở khu **THỐNG KÊ** (cuối thanh menu):

```text
Kế toán
 ├── Kỳ kế toán
 ├── Lệnh vay
 ├── Phiếu thu
 ├── Phiếu chi
 ├── Phiếu cấn trừ
 ├── Chuyển tiền nội bộ
 ├── Đối chiếu số dư cuối kỳ
 ├── Hợp đồng
 ├── Sổ chi tiết tài khoản
 ├── Bảng cân đối phát sinh
 ├── Sổ kế toán
 ├── Bút toán phát sinh
 └── Phiếu hạch toán lương
Thống kê thu chi
 ├── Nội dung thu chi
 ├── Tồn quỹ
 └── Tình hình cty
Thống kê công nợ
 ├── Công nợ nguồn nhân lực
 ├── Công nợ gia công
 ├── Công nợ quá hạn
 ├── Bảng kê lãi quá hạn
 ├── Công nợ nhà cung cấp
 └── Công nợ khách hàng
```

Bấm vào tên nhóm để mở danh sách màn hình bên trong ([HƯỚNG DẪN BỐ CỤC MÀN HÌNH VÀ TÌM CHỨC NĂNG](/bai-viet/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/)).

![Hình 1: Nhóm menu Kế toán](/posts/2026-11-07-kt-00-tong-quan-module-ke-toan-va-thu-tu-su-dung/hinh-01-menu-ke-toan.png)

![Hình 2: Nhóm menu Thống kê thu chi và Thống kê công nợ](/posts/2026-11-07-kt-00-tong-quan-module-ke-toan-va-thu-tu-su-dung/hinh-02-menu-thong-ke.png)

- Nhóm menu: **Kế toán**; Vị trí trên thanh menu: Khu **NGHIỆP VỤ**; Số màn hình: 13 (phần A)
- Nhóm menu: **Thống kê thu chi**; Vị trí trên thanh menu: Khu **THỐNG KÊ**; Số màn hình: 3 (phần B)
- Nhóm menu: **Thống kê công nợ**; Vị trí trên thanh menu: Khu **THỐNG KÊ**, cuối thanh menu; Số màn hình: 6 (phần C)

Thứ tự mục trên menu trùng thứ tự mã bài trong các bảng dưới.

**Phần A – Kế toán:**

- **KT-A01**: Màn hình: Kỳ kế toán; Dùng để: Tạo kỳ kế toán theo tháng, **khóa kỳ** (khóa sổ) để chặn sửa chứng từ của tháng đã chốt, mở lại kỳ khi cần điều chỉnh
- **KT-A02**: Màn hình: Lệnh vay; Dùng để: Ghi nhận mỗi lần giải ngân khoản vay vào quỹ, gắn hợp đồng tín dụng và các phiếu mua hàng được thanh toán; in giấy nhận nợ, bảng kê
- **KT-A03**: Màn hình: Phiếu thu; Dùng để: Ghi nhận tiền vào quỹ: khách hàng trả nợ, thu theo giao dịch ngân hàng, thu tiền hàng cho mượn, thu từ NCC / đơn vị gia công, thu khác; in C31
- **KT-A04**: Màn hình: Phiếu chi; Dùng để: Ghi nhận tiền ra khỏi quỹ: trả NCC, đơn vị gia công, trả nợ vay, trả tiền hàng mua mượn, chi cho khách, chi phí khác; in C31 và ủy nhiệm chi
- **KT-A05**: Màn hình: Phiếu cấn trừ; Dùng để: Bù trừ công nợ giữa hai đối tượng (ví dụ khách hàng đồng thời là nhà cung cấp) mà không đi qua quỹ
- **KT-A06**: Màn hình: Chuyển tiền nội bộ; Dùng để: Chuyển tiền giữa hai quỹ / tài khoản của công ty (rút, nộp tiền ngân hàng), kèm phí chuyển
- **KT-A07**: Màn hình: Đối chiếu số dư cuối kỳ; Dùng để: So số dư tài khoản ngân hàng (ACB, STB, Vietcombank) với tồn quỹ trên ERP: **Trùng khớp** / **Không khớp**
- **KT-A08**: Màn hình: Hợp đồng; Dùng để: Lưu hợp đồng tín dụng / hợp đồng vay với ngân hàng; là nguồn để lệnh vay chọn **Số hợp đồng**
- **KT-A09**: Màn hình: Sổ chi tiết tài khoản; Dùng để: Số dư, phát sinh Nợ / Có và từng dòng bút toán của mỗi tài khoản; in mẫu S38-DN
- **KT-A10**: Màn hình: Bảng cân đối phát sinh; Dùng để: Số dư đầu kỳ, phát sinh, số dư cuối kỳ của mọi tài khoản; kiểm tra Nợ = Có; in mẫu F01-DNN
- **KT-A11**: Màn hình: Sổ kế toán; Dùng để: Xem dòng ghi sổ theo ngày (v4.0.0: đang hoàn thiện, danh sách trống)
- **KT-A12**: Màn hình: Bút toán phát sinh; Dùng để: Liệt kê bút toán theo ngày (v4.0.0: đang hoàn thiện, danh sách trống)
- **KT-A13**: Màn hình: Phiếu hạch toán lương; Dùng để: Lập phiếu lương theo cặp TK Nợ / TK Có; việc đưa số lương vào giá thành phải đối chiếu nguồn chi phí thực tế, không mặc định tự chuyển từ phiếu này

**Phần B – Thống kê thu chi** (mỗi màn một bài tổng quan):

- **KT-B01**: Màn hình: Nội dung thu chi; Dùng để: Mọi khoản thu, chi trong khoảng ngày, gom theo nội dung thu chi
- **KT-B02**: Màn hình: Tồn quỹ; Dùng để: Tồn đầu, thu, chi, tồn cuối của từng quỹ; xem chứng từ của quỹ; in báo cáo tồn quỹ
- **KT-B03**: Màn hình: Tình hình cty; Dùng để: Báo cáo tổng hợp một ngày: tồn quỹ, vay, sản lượng, mua bán, thu tiền, phải thu, phải trả

**Phần C – Thống kê công nợ** (mỗi màn một bài tổng quan):

- **KT-C01**: Màn hình: Công nợ nguồn nhân lực; Dùng để: Tiền công còn nợ từng nguồn nhân lực (tổ, đội, người làm khoán); in đối chiếu công nợ
- **KT-C02**: Màn hình: Công nợ gia công; Dùng để: Tiền gia công còn nợ từng đơn vị gia công; in đối chiếu công nợ
- **KT-C03**: Màn hình: Công nợ quá hạn; Dùng để: Từng khoản nợ khách chưa thu đủ, số ngày quá hạn, tuổi nợ; ghi lịch hẹn thanh toán
- **KT-C04**: Màn hình: Bảng kê lãi quá hạn; Dùng để: Lập và in bảng kê tính tiền lãi trên nợ quá hạn của một khách (chỉ để thông báo)
- **KT-C05**: Màn hình: Công nợ nhà cung cấp; Dùng để: Công nợ phải trả từng nhà cung cấp trong kỳ
- **KT-C06**: Màn hình: Công nợ khách hàng; Dùng để: Công nợ phải thu từng khách hàng trong kỳ

## 4. Trình tự công việc

**Quy trình nghiệp vụ tổng thể (Business Workflow):**

```text
 THIẾT LẬP (sổ tay Thiết lập danh mục)
   Tài khoản, quỹ · Nội dung thu chi · Hệ thống tài khoản · Cấu hình hạch toán
   Khách hàng · Nhà cung cấp · Đơn vị gia công · Nguồn nhân lực
                     ↓
 ĐẦU NĂM                          Tạo kỳ kế toán 12 tháng (KT-A01.1)
                     ↓
 CÔNG NỢ PHÁT SINH Ở phân hệ KHÁC
   ├── (Mua hàng/Kho) Nhập kho mua hàng, mua dịch vụ ──► nợ phải trả NCC tăng
   ├── (Bán hàng/Kho) Xuất kho bán hàng, bán dịch vụ ──► nợ phải thu khách tăng
   ├── (Kho/Sản xuất) Nhập kho gia công, thành phẩm ──► nợ đơn vị gia công,
   │                                                    nguồn nhân lực tăng
   └── (Kho) Khách trả hàng, giảm giá trừ công nợ ──► nợ phải thu khách giảm
                     ↓
 THU – CHI – CẤN TRỪ
   ├── Phiếu thu (KT-A03) ── khách trả nợ → tồn quỹ tăng, nợ khách giảm
   ├── Phiếu chi (KT-A04) ── trả NCC, gia công, vay → tồn quỹ giảm, nợ giảm
   ├── Phiếu cấn trừ (KT-A05) ── bù trừ nợ hai bên, không qua quỹ
   ├── Chuyển tiền nội bộ (KT-A06) ── giữa hai quỹ của công ty
   └── Hợp đồng (KT-A08) → Lệnh vay (KT-A02) ── tiền vay vào quỹ
                     ↓
 THEO DÕI HẰNG NGÀY
   Tồn quỹ (KT-B02) · Đối chiếu số dư ngân hàng (KT-A07)
   Công nợ khách / NCC / gia công / nguồn nhân lực (KT-C01…C06)
                     ↓
 CUỐI THÁNG
   (Nhân sự) Bảng lương → Phiếu hạch toán lương (KT-A13)
   Hạch toán tự động → Sổ chi tiết TK (KT-A09) · Cân đối phát sinh (KT-A10)
   Kiểm tra cân đối, đối chiếu → Khóa kỳ (KT-A01.2)
```

**Chứng từ nào làm thay đổi gì:**

- **Phiếu thu**: Tồn quỹ: Tăng (quỹ thu); Công nợ: Khách hàng giảm; NCC, đơn vị gia công tăng ([TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/)); Lên sổ (khi chạy hạch toán tự động): Có
- **Phiếu chi**: Tồn quỹ: Giảm (quỹ chi); Công nợ: NCC, đơn vị gia công giảm; khách hàng tăng ([TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/)); Lên sổ (khi chạy hạch toán tự động): Có
- **Phiếu cấn trừ**: Tồn quỹ: Không; Công nợ: Giảm công nợ của cả hai đối tượng được cấn trừ; Lên sổ (khi chạy hạch toán tự động): Có
- **Chuyển tiền nội bộ**: Tồn quỹ: Quỹ chi giảm, quỹ thu tăng, quỹ chịu phí giảm; Công nợ: Không; Lên sổ (khi chạy hạch toán tự động): Chưa
- **Lệnh vay**: Tồn quỹ: Quỹ nhận tăng; Công nợ: Không (trả nợ vay bằng phiếu chi loại Lệnh vay); Lên sổ (khi chạy hạch toán tự động): Chưa
- **Hợp đồng (vay)**: Tồn quỹ: Không; Công nợ: Không; Lên sổ (khi chạy hạch toán tự động): Không
- **Phiếu hạch toán lương**: Tồn quỹ: Không; Công nợ: Không; Lên sổ (khi chạy hạch toán tự động): Chưa có bằng chứng tự sinh bút toán hoặc tự chuyển chi phí vào kỳ giá thành
- **Kỳ kế toán – Khóa kỳ**: Tồn quỹ: Không; Công nợ: Không; Lên sổ (khi chạy hạch toán tự động): Chặn lập / sửa / xoá chứng từ trong kỳ

Tồn quỹ và công nợ thay đổi **ngay khi lưu** chứng từ. Sổ sách (KT-A09, KT-A10) chỉ thay đổi khi chạy **hạch toán tự động** ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) phần “Trình tự công việc”).

**Phối hợp giữa các bộ phận (Swimlane):**

1. **Mua hàng / Bán hàng / Kho:** nhập kho mua làm phát sinh nợ NCC; xuất kho bán làm phát sinh nợ khách.
2. **Thủ quỹ / kế toán thanh toán:** lập phiếu chi trả NCC, phiếu thu khách, chuyển tiền nội bộ và đối chiếu số dư ngân hàng.
3. **Kế toán công nợ:** theo dõi công nợ, công nợ quá hạn, lập phiếu cấn trừ và đối chiếu công nợ.
4. **Kế toán trưởng:** thực hiện hạch toán và khóa kỳ sau bước đối chiếu công nợ.

*Sơ đồ phối hợp là cách chia việc tham khảo. Việc ai làm bước nào phụ thuộc quy định nội bộ và quyền được cấp.*

### Bước 1 – Mở nhóm menu Kế toán

Ở thanh menu bên trái, bấm **Kế toán**. Danh sách 13 màn hình hiện ra bên dưới (Hình 1). Hai nhóm **Thống kê thu chi** và **Thống kê công nợ** nằm riêng trên menu.

### Bước 2 – Mở màn hình cần làm

Bấm vào tên màn hình, ví dụ **Phiếu thu**. Hệ thống mở danh sách phiếu, mặc định lọc **Hôm nay**. Cách lọc khoảng ngày xem **Sổ tay Hướng dẫn chung, [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)**.

Tìm nhanh chức năng: xem **Sổ tay Hướng dẫn chung, [HƯỚNG DẪN BỐ CỤC MÀN HÌNH VÀ TÌM CHỨC NĂNG](/bai-viet/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/)**.

### Mục lục bài hướng dẫn

**Phần A – Kế toán:**

- **[TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/)**: Bài: Tổng quan màn hình Kỳ kế toán
- **[HƯỚNG DẪN TẠO, SỬA, XOÁ KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-1-huong-dan-tao-sua-xoa-ky-ke-toan/)**: Bài: Hướng dẫn tạo, sửa, xoá kỳ kế toán
- **[HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/)**: Bài: Hướng dẫn khóa và mở lại kỳ kế toán
- **[TỔNG QUAN MÀN HÌNH LỆNH VAY](/bai-viet/2026-11-07-kt-a02-0-tong-quan-man-hinh-lenh-vay/)**: Bài: Tổng quan màn hình Lệnh vay
- **[HƯỚNG DẪN LẬP LỆNH VAY](/bai-viet/2026-11-07-kt-a02-1-huong-dan-lap-lenh-vay/)**: Bài: Hướng dẫn lập lệnh vay
- **[HƯỚNG DẪN IN GIẤY NHẬN NỢ VÀ BẢNG KÊ LỆNH VAY](/bai-viet/2026-11-07-kt-a02-2-huong-dan-in-giay-nhan-no-va-bang-ke-lenh-vay/)**: Bài: Hướng dẫn in giấy nhận nợ và bảng kê lệnh vay
- **[TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/)**: Bài: Tổng quan màn hình Phiếu thu
- **[HƯỚNG DẪN LẬP PHIẾU THU](/bai-viet/2026-11-07-kt-a03-1-huong-dan-lap-phieu-thu/)**: Bài: Hướng dẫn lập phiếu thu khách hàng, nhà cung cấp, đơn vị gia công và thu khác
- **[HƯỚNG DẪN LẬP PHIẾU THU TIỀN HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kt-a03-2-huong-dan-lap-phieu-thu-tien-hang-cho-muon/)**: Bài: Hướng dẫn lập phiếu thu tiền hàng cho mượn từ phiếu nhập trả mượn hàng
- **[HƯỚNG DẪN LẬP PHIẾU THU TỪ GIAO DỊCH NGÂN HÀNG](/bai-viet/2026-11-07-kt-a03-3-huong-dan-lap-phieu-thu-tu-giao-dich-ngan-hang/)**: Bài: Hướng dẫn lập phiếu thu từ giao dịch ngân hàng
- **[HƯỚNG DẪN IN PHIẾU THU MẪU C31](/bai-viet/2026-11-07-kt-a03-4-huong-dan-in-phieu-thu-mau-c31/)**: Bài: Hướng dẫn in phiếu thu mẫu C31
- **[TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/)**: Bài: Tổng quan màn hình Phiếu chi
- **[HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/)**: Bài: Hướng dẫn lập phiếu chi nhà cung cấp, đơn vị gia công, khách hàng và chi khác
- **[HƯỚNG DẪN LẬP PHIẾU CHI TRẢ LỆNH VAY](/bai-viet/2026-11-07-kt-a04-2-huong-dan-lap-phieu-chi-tra-lenh-vay/)**: Bài: Hướng dẫn lập phiếu chi trả gốc và lãi lệnh vay
- **[HƯỚNG DẪN LẬP PHIẾU CHI TIỀN HÀNG MUA MƯỢN](/bai-viet/2026-11-07-kt-a04-3-huong-dan-lap-phieu-chi-tien-hang-mua-muon/)**: Bài: Hướng dẫn lập phiếu chi tiền hàng mua mượn từ phiếu xuất trả mượn hàng
- **[HƯỚNG DẪN IN PHIẾU CHI C31 VÀ ỦY NHIỆM CHI](/bai-viet/2026-11-07-kt-a04-4-huong-dan-in-phieu-chi-c31-va-uy-nhiem-chi/)**: Bài: Hướng dẫn in phiếu chi mẫu C31 và ủy nhiệm chi theo mẫu ngân hàng
- **[TỔNG QUAN MÀN HÌNH PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-0-tong-quan-man-hinh-phieu-can-tru/)**: Bài: Tổng quan màn hình Phiếu cấn trừ
- **[HƯỚNG DẪN LẬP PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-1-huong-dan-lap-phieu-can-tru/)**: Bài: Hướng dẫn lập phiếu cấn trừ công nợ giữa khách hàng, nhà cung cấp, đơn vị gia công
- **[HƯỚNG DẪN IN PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-2-huong-dan-in-phieu-can-tru/)**: Bài: Hướng dẫn in phiếu cấn trừ công nợ
- **[TỔNG QUAN MÀN HÌNH CHUYỂN TIỀN NỘI BỘ](/bai-viet/2026-11-07-kt-a06-0-tong-quan-man-hinh-chuyen-tien-noi-bo/)**: Bài: Tổng quan màn hình Chuyển tiền nội bộ
- **[TỔNG QUAN MÀN HÌNH ĐỐI CHIẾU SỐ DƯ CUỐI KỲ](/bai-viet/2026-11-07-kt-a07-0-tong-quan-man-hinh-doi-chieu-so-du-cuoi-ky/)**: Bài: Tổng quan màn hình Đối chiếu số dư cuối kỳ
- **[TỔNG QUAN MÀN HÌNH HỢP ĐỒNG](/bai-viet/2026-11-07-kt-a08-0-tong-quan-man-hinh-hop-dong/)**: Bài: Tổng quan màn hình Hợp đồng (hợp đồng lệnh vay)
- **[TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/)**: Bài: Tổng quan màn hình Sổ chi tiết tài khoản
- **[TỔNG QUAN MÀN HÌNH BẢNG CÂN ĐỐI PHÁT SINH](/bai-viet/2026-11-07-kt-a10-0-tong-quan-man-hinh-bang-can-doi-phat-sinh/)**: Bài: Tổng quan màn hình Bảng cân đối phát sinh
- **[TỔNG QUAN MÀN HÌNH SỔ KẾ TOÁN](/bai-viet/2026-11-07-kt-a11-0-tong-quan-man-hinh-so-ke-toan/)**: Bài: Tổng quan màn hình Sổ kế toán
- **[TỔNG QUAN MÀN HÌNH BÚT TOÁN PHÁT SINH](/bai-viet/2026-11-07-kt-a12-0-tong-quan-man-hinh-but-toan-phat-sinh/)**: Bài: Tổng quan màn hình Bút toán phát sinh
- **[TỔNG QUAN MÀN HÌNH PHIẾU HẠCH TOÁN LƯƠNG](/bai-viet/2026-11-07-kt-a13-0-tong-quan-man-hinh-phieu-hach-toan-luong/)**: Bài: Tổng quan màn hình Phiếu hạch toán lương
- **[HƯỚNG DẪN LẬP PHIẾU HẠCH TOÁN LƯƠNG](/bai-viet/2026-11-07-kt-a13-1-huong-dan-lap-phieu-hach-toan-luong/)**: Bài: Hướng dẫn lập phiếu hạch toán lương

**Phần B – Thống kê thu chi:** [TỔNG QUAN MÀN HÌNH THỐNG KÊ NỘI DUNG THU CHI](/bai-viet/2026-11-07-kt-b01-0-tong-quan-man-hinh-thong-ke-noi-dung-thu-chi/) Nội dung thu chi, [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/) Tồn quỹ, [TỔNG QUAN MÀN HÌNH THỐNG KÊ TÌNH HÌNH HOẠT ĐỘNG CÔNG TY](/bai-viet/2026-11-07-kt-b03-0-tong-quan-man-hinh-thong-ke-tinh-hinh-hoat-dong-cong-ty/) Tình hình cty.

**Phần C – Thống kê công nợ:** [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NGUỒN NHÂN LỰC](/bai-viet/2026-11-07-kt-c01-0-tong-quan-man-hinh-thong-ke-cong-no-nguon-nhan-luc/) Công nợ nguồn nhân lực, [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ GIA CÔNG](/bai-viet/2026-11-07-kt-c02-0-tong-quan-man-hinh-thong-ke-cong-no-gia-cong/) Công nợ gia công, [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ QUÁ HẠN](/bai-viet/2026-11-07-kt-c03-0-tong-quan-man-hinh-thong-ke-cong-no-qua-han/) Công nợ quá hạn, [TỔNG QUAN MÀN HÌNH BẢNG KÊ LÃI QUÁ HẠN](/bai-viet/2026-11-07-kt-c04-0-tong-quan-man-hinh-bang-ke-lai-qua-han/) Bảng kê lãi quá hạn, [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NHÀ CUNG CẤP](/bai-viet/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/) Công nợ nhà cung cấp, [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/) Công nợ khách hàng.

**Tra cứu ở Sổ tay Hướng dẫn chung:** [HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/) → [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/), [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/), [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/).

## 6. Kiểm tra sau khi thực hiện

Bạn nắm được phân hệ Kế toán gồm những màn hình nào, chứng từ nào làm thay đổi tồn quỹ, công nợ, sổ sách, cần chuẩn bị danh mục gì, và thứ tự công việc từ đầu năm (tạo kỳ) đến cuối tháng (hạch toán, khóa kỳ).

## 7. Những điều cần lưu ý

⚠️ **Phiếu thu, phiếu chi, phiếu cấn trừ, chuyển tiền nội bộ, lệnh vay làm thay đổi tồn quỹ / công nợ ngay khi lưu.** Kiểm tra kỹ đối tượng, quỹ, số tiền và ngày trước khi lưu.

⚠️ **Sổ chi tiết tài khoản và Bảng cân đối phát sinh không cập nhật ngay khi lưu chứng từ.** Số liệu chỉ lên sổ khi chạy hạch toán tự động, và chỉ với chứng từ có ngày thuộc một kỳ kế toán đã tạo.

⚠️ **Chuyển tiền nội bộ, lệnh vay, phiếu hạch toán lương chưa sinh bút toán** ở phiên bản v4.0.0. Đối chiếu sổ sách với tồn quỹ cần tính đến điều này.

⚠️ **Kỳ đã khóa chặn lập / sửa / xoá** phiếu thu, phiếu chi, phiếu cấn trừ, chuyển tiền nội bộ, lệnh vay, hợp đồng và các phiếu kho có ngày trong kỳ ([TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/)).

⚠️ **Quỹ không đủ tồn thì không lưu được phiếu chi**, và không xoá được phiếu thu nếu quỹ đã chi bớt tiền.

⚠️ Danh sách phiếu thu, phiếu chi chỉ hiện phiếu của **quỹ** và **nhóm khách** được phân cho tài khoản. Không thấy phiếu cần kiểm tra bộ lọc, quỹ và nhóm khách được phân; chưa đủ căn cứ kết luận phiếu đã bị mất.

⚠️ Tiền chuyển giữa hai quỹ của công ty dùng **Chuyển tiền nội bộ**, tiền vay dùng **Lệnh vay** – không lập phiếu thu / phiếu chi cho các khoản này.

⚠️ Màn **Sổ kế toán** (KT-A11) và **Bút toán phát sinh** (KT-A12) đang hoàn thiện ở v4.0.0, danh sách luôn trống. Dùng **Sổ chi tiết tài khoản** và **Bảng cân đối phát sinh**.

### Không thấy nhóm menu Kế toán hoặc một màn hình trong phân hệ 

Kiểm tra: tài khoản đã được cấp quyền **Truy cập** màn hình đó chưa.
Cách xử lý: liên hệ quản trị hệ thống để được cấp quyền, sau đó đăng xuất và đăng nhập lại.

### Thấy màn hình nhưng không thấy nút Thêm mới / Sửa / Xóa / Xuất Excel 

Kiểm tra: tài khoản có quyền tương ứng của màn hình đó chưa.
Cách xử lý: liên hệ quản trị hệ thống.

### "CẢNH BÁO – Lỗi …: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: ngày chứng từ thuộc kỳ kế toán đã khóa.
Cách xử lý: giữ ngày giao dịch thực tế; nếu thuộc kỳ đã khóa, báo người phụ trách xử lý theo [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/).

### Danh sách phiếu thu / phiếu chi trống dù đồng nghiệp thấy phiếu 

Kiểm tra: khoảng ngày đang lọc (mặc định **Hôm nay**), chi nhánh đang làm việc, quỹ và nhóm khách được phân cho tài khoản.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)), kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)) hoặc nhờ quản trị phân quỹ / nhóm khách.

### Sổ chi tiết tài khoản không có số liệu tháng này 

Nguyên nhân: chưa chạy hạch toán tự động cho kỳ, hoặc chưa tạo kỳ kế toán phủ các ngày đó.
Cách xử lý: xem [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) phần “Vướng mắc thường gặp”; hỏi kế toán trưởng.

## 9. Câu hỏi thường gặp

**Lập phiếu thu rồi, sao Sổ chi tiết tài khoản chưa có?**
Tồn quỹ và công nợ đổi ngay khi lưu, còn sổ sách chỉ cập nhật khi chạy hạch toán tự động ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/)).

**Công nợ khách hàng tăng khi nào?**
Khi thủ kho lập **phiếu xuất kho bán hàng** (sổ tay Kho hàng) hoặc khi lưu **phiếu bán dịch vụ** (sổ tay Bán hàng), không phải khi lập phiếu bán hàng.

**Công nợ nhà cung cấp tăng khi nào?**
Khi lập **phiếu nhập kho mua hàng** (sổ tay Kho hàng) hoặc **phiếu mua dịch vụ** (sổ tay Mua hàng).

**Khách hàng vừa nợ mình vừa bán hàng cho mình thì xử lý sao?**
Dùng **Phiếu cấn trừ** loại **Khách hàng - Nhà cung cấp** để bù trừ hai khoản nợ, không cần lập phiếu thu và phiếu chi.

**Lương nhân viên lên kế toán thế nào?**
Bảng lương tính ở sổ tay Nhân sự. Kế toán lập **Phiếu hạch toán lương** ([HƯỚNG DẪN LẬP PHIẾU HẠCH TOÁN LƯƠNG](/bai-viet/2026-11-07-kt-a13-1-huong-dan-lap-phieu-hach-toan-luong/)) để ghi hồ sơ hạch toán lương; chưa có căn cứ rằng phiếu này tự vào kỳ giá thành. Trả lương bằng **Phiếu chi** và đối chiếu nguồn chi phí riêng với kế toán giá thành.

## 10. Công việc tiếp theo

Thứ tự đọc tài liệu đề nghị:

```text
KT-00 Tổng quan phân hệ (bài này)
   ↓
Sổ tay Hướng dẫn chung — GEN-01 → GEN-06: đăng nhập, chi nhánh, menu, lọc, Excel, in
   ↓
KT-A01.0 → KT-A01.1  Kỳ kế toán, tạo kỳ cả năm
   ↓
KT-A03.0 → KT-A03.1, A03.3  Phiếu thu (khách hàng, giao dịch ngân hàng)
   ↓
KT-A04.0 → KT-A04.1  Phiếu chi · KT-A05.0 Phiếu cấn trừ
   ↓
KT-A06.0 Chuyển tiền nội bộ · KT-A08.0 → KT-A02.1 Hợp đồng, Lệnh vay
   ↓
KT-B02.0 Tồn quỹ · KT-A07.0 Đối chiếu số dư · KT-C05.0, KT-C06.0 Công nợ
   ↓
KT-A13.1 Hạch toán lương · KT-A09.0, KT-A10.0 Sổ sách
   ↓
KT-A01.2 Khóa kỳ
```

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/) – Tổng quan màn hình Kỳ kế toán.

## 11. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/) – Tổng quan màn hình Kỳ kế toán
- [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/) – Tổng quan màn hình Phiếu thu
- [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/) – Tổng quan màn hình Phiếu chi
- [TỔNG QUAN MÀN HÌNH PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-0-tong-quan-man-hinh-phieu-can-tru/) – Tổng quan màn hình Phiếu cấn trừ
- [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) – Tổng quan màn hình Sổ chi tiết tài khoản
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/) – Tổng quan màn hình thống kê Tồn quỹ
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/) – Tổng quan màn hình thống kê Công nợ khách hàng
- [TỔNG QUAN MODULE MUA HÀNG VÀ THỨ TỰ SỬ DỤNG](/bai-viet/2026-11-07-mh-00-tong-quan-module-mua-hang-va-thu-tu-su-dung/) – Tổng quan phân hệ Mua hàng; [TỔNG QUAN MODULE BÁN HÀNG VÀ THỨ TỰ SỬ DỤNG](/bai-viet/2026-11-07-bh-00-tong-quan-module-ban-hang-va-thu-tu-su-dung/) – Tổng quan phân hệ Bán hàng; [TỔNG QUAN MODULE KHO HÀNG VÀ THỨ TỰ SỬ DỤNG](/bai-viet/2026-11-07-kho-00-tong-quan-module-kho-hang-va-thu-tu-su-dung/) – Tổng quan phân hệ Kho hàng
- Sổ tay Thiết lập danh mục – Tài khoản, quỹ; Nội dung thu chi; Hệ thống tài khoản; Cấu hình hạch toán
- Sổ tay Nhân sự – Bảng lương; Sổ tay Giá thành – Kết chuyển chi phí
