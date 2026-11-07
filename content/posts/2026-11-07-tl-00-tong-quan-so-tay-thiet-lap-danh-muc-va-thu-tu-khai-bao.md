---
title: "TỔNG QUAN SỔ TAY THIẾT LẬP DANH MỤC VÀ THỨ TỰ KHAI BÁO"
date: "2026-11-07"
summary: "Thao tác đăng nhập, đăng xuất, đổi mật khẩu và sử dụng ERP cơ bản được hướng dẫn trong Sổ tay Hướng dẫn chung (HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU đến HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM)."
module: "Thiết lập danh mục"
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

**Thiết lập danh mục** là các danh mục nền của Hồng Nghi ERP: chi nhánh, kho, quỹ, tài khoản kế toán, nhà cung cấp, khách hàng, hàng hoá, bảng giá… Bản thân thao tác khai báo danh mục **không phát sinh số liệu** (không làm thay đổi tồn kho, công nợ, số dư quỹ), nhưng **mọi chứng từ của mọi mảng** (Mua hàng, Kho hàng, Bán hàng, Kế toán, Sản xuất, Giá thành…) đều **chọn dữ liệu từ các danh mục này**. Danh mục thiếu hoặc sai thì không lập được chứng từ, hoặc chứng từ ghi sai.

Bài này giúp bạn:

- Biết sổ tay có những nhóm menu nào và mỗi màn có mã gì.
- Biết **thứ tự khai báo** khi bắt đầu dùng ERP, vì sao phải làm theo thứ tự đó.
- Biết danh mục nào ảnh hưởng chứng từ nào, quyền cần có, và nguyên tắc **ngưng sử dụng thay cho xoá**.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có tài khoản đăng nhập Hồng Nghi ERP và đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/), [HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Được cấp quyền **Truy cập** các màn danh mục cần làm, và quyền **Thêm mới** nếu cần khai báo.
- Có sẵn thông tin cần khai báo: giấy phép kinh doanh (chi nhánh), danh sách kho, tài khoản ngân hàng, bảng hệ thống tài khoản kế toán, danh sách khách hàng / nhà cung cấp / hàng hoá.

## 2. Mở chức năng

**Thanh menu bên trái → 7 nhóm: Thiết lập danh mục · Nhà cung cấp · Khách hàng · Hàng hoá · Bảng giá / báo giá · Kết nối gia công API · Kết nối AMIS** (danh sách màn hình từng nhóm ở phần “Nhận biết màn hình”)

## 3. Nhận biết màn hình

![Năm nhóm Thiết lập danh mục, Nhà cung cấp, Khách hàng, Hàng hóa và Bảng giá/báo giá. Gia Phúc/dev, 26/10/2026; tài khoản quản trị. Menu của người dùng tùy quyền được cấp.](/posts/2026-11-07-tl-00-tong-quan-so-tay-thiet-lap-danh-muc-va-thu-tu-khai-bao/ui-20261026-menu-tl-00-main.png)

![Hai nhóm Kết nối gia công API và Kết nối AMIS ở cuối menu. Gia Phúc/dev, 26/10/2026; tài khoản quản trị. Menu của người dùng tùy quyền được cấp.](/posts/2026-11-07-tl-00-tong-quan-so-tay-thiet-lap-danh-muc-va-thu-tu-khai-bao/ui-20261026-menu-tl-00-connect.png)

**Phần A –  Thiết lập danh mục:**

- **TL-A01**: Màn hình: Chi nhánh / Đơn vị; Dùng để: Khai báo chi nhánh, thông tin pháp nhân in phiếu, địa chỉ web riêng
- **TL-A02**: Màn hình: Nguồn nhân lực; Dùng để: Máy, tổ gia công và công nhân đứng máy (chia lương khoán)
- **TL-A03**: Màn hình: Đơn vị gia công; Dùng để: Đơn vị nhận gia công, kho gia công, tài khoản ngân hàng
- **TL-A04**: Màn hình: Nội dung thu chi; Dùng để: Khoản mục thu, chi cho phiếu thu, phiếu chi, hạch toán
- **TL-A05**: Màn hình: Danh mục phí; Dùng để: Loại phí phát sinh kèm đơn giá mặc định
- **TL-A06**: Màn hình: Tài khoản, quỹ; Dùng để: Quỹ tiền mặt, tài khoản ngân hàng, mã QR, người được dùng quỹ
- **TL-A07**: Màn hình: Tài xế; Dùng để: Danh sách tài xế
- **TL-A08**: Màn hình: Xe; Dùng để: Danh sách xe
- **TL-A09**: Màn hình: Kho hàng; Dùng để: Danh sách kho
- **TL-A10**: Màn hình: Hệ thống tài khoản; Dùng để: Tài khoản kế toán
- **TL-A11**: Màn hình: Cấu hình hạch toán; Dùng để: Gắn nội dung thu chi, quỹ… với tài khoản kế toán

**Phần B –  Nhà cung cấp:** TL-B01 Nhóm nhà cung cấp · TL-B02 Nhà cung cấp.

**Phần C –  Khách hàng:** TL-C01 Loại khách hàng · TL-C02 Nhóm khách hàng · TL-C03 Khách hàng.

**Phần D –  Hàng hoá:**

- **TL-D01**: Màn hình: Danh mục gia công; Mã: TL-D07; Màn hình: Hàng hóa khác
- **TL-D02**: Màn hình: Danh mục lỗi; Mã: TL-D08; Màn hình: Nguyên liệu
- **TL-D03**: Màn hình: Tiêu chuẩn; Mã: TL-D09; Màn hình: Hàng trơn
- **TL-D04**: Màn hình: Đơn vị tính; Mã: TL-D10; Màn hình: Định mức
- **TL-D05**: Màn hình: Loại hàng; Mã: TL-D11; Màn hình: Thành phẩm
- **TL-D06**: Màn hình: Số mặt; Mã: TL-D12; Màn hình: Nhóm hàng hóa

**Phần E –  Bảng giá / báo giá:** TL-E01 Bảng giá sản xuất · TL-E02 Bảng giá mua bán (gồm báo giá nhà cung cấp nạp bằng Excel).

**Phần F –  Kết nối gia công API:** TL-F01 Kết nối đối tác · TL-F02 Mapping hàng hóa gia công · TL-F03 Mapping định mức gia công.

**Phần G –  Kết nối AMIS:** TL-G01 Kết nối ứng dụng AMIS · TL-G02 Nhà cung cấp · TL-G03 Khách hàng · TL-G04 Hàng hóa · TL-G05 Tài khoản ngân hàng.

## 4. Trình tự công việc

**Thứ tự khai báo khi bắt đầu dùng ERP:**

```text
 Chi nhánh / Đơn vị (A01)
      ↓
 Kho hàng (A09)  ──►   Tài khoản, quỹ (A06) + gán người sử dụng (A06.3)
      ↓
 Hệ thống tài khoản (A10) ──► Nội dung thu chi (A04) ──► Cấu hình hạch toán (A11)
      ↓
 Nhóm NCC (B01) ──► Nhà cung cấp (B02)
   Loại KH (C01), Nhóm KH (C02) ──► Khách hàng (C03)
      ↓
 Nếu có gia công: Nguồn nhân lực (A02) · Đơn vị gia công (A03) · Danh mục phí (A05)
   Nếu có giao hàng: Tài xế (A07) ──► Xe (A08)
      ↓
 Hàng hoá: Đơn vị tính, Loại hàng, Tiêu chuẩn, Số mặt, Danh mục gia công, Lỗi (D)
      ↓
   Nguyên liệu / Hàng trơn / Hàng hóa khác ──► Định mức (D10) ──► Thành phẩm (D11)
      ↓
 Bảng giá sản xuất, Bảng giá mua bán (E)
      ↓
 Kết nối gia công API (F), Kết nối AMIS (G) khi cần
```

**Danh mục ảnh hưởng chứng từ nào:**

- **Chi nhánh / Đơn vị**: Được dùng ở: Mọi chứng từ và hầu hết danh mục; thông tin in phiếu; nhận biết chi nhánh theo địa chỉ hệ thống khi đăng nhập
- **Kho hàng**: Được dùng ở: Phiếu nhập kho, xuất kho, chuyển kho, điều chỉnh kho (sổ tay Kho hàng); kho gia công của đơn vị gia công
- **Tài khoản, quỹ**: Được dùng ở: Phiếu thu, phiếu chi, chuyển tiền nội bộ, lệnh vay, phiếu bán hàng (mã QR), tồn quỹ (sổ tay Kế toán, Bán hàng)
- **Hệ thống tài khoản, Cấu hình hạch toán**: Được dùng ở: Bút toán kế toán: tài khoản và khoản mục của phiếu chi, phiếu thu
- **Nội dung thu chi**: Được dùng ở: Phiếu thu, phiếu chi, phiếu cấn trừ, chuyển tiền nội bộ; chi phí khác của định mức và phiếu gia công
- **Nguồn nhân lực**: Được dùng ở: Định mức, phiếu yêu cầu / nhập kho gia công, bảng giá tại kho, công nợ nguồn nhân lực, lương khoán
- **Đơn vị gia công**: Được dùng ở: Phiếu yêu cầu / xuất / nhập kho gia công, bảng giá gia công, công nợ gia công
- **Danh mục phí**: Được dùng ở: Chi phí phát sinh của phiếu nhập kho gia công
- **Tài xế, Xe**: Được dùng ở: Phiếu xuất kho (chọn xe, tài xế)
- **Nhà cung cấp, Nhóm nhà cung cấp**: Được dùng ở: Phiếu mua hàng, trả hàng, nhập kho hàng mua, công nợ nhà cung cấp (sổ tay Mua hàng, Kế toán)
- **Khách hàng, Nhóm / Loại khách hàng**: Được dùng ở: Hợp đồng, phiếu đặt hàng, phiếu bán hàng, khách trả hàng, công nợ khách hàng (sổ tay Bán hàng, Kế toán)
- **Hàng hoá (nhóm D)**: Được dùng ở: Mọi phiếu có dòng hàng: mua, kho, bán, sản xuất, giá thành
- **Bảng giá**: Được dùng ở: Đơn giá khi lập phiếu bán hàng, mua hàng, gia công

### Bước 1 – Khai báo theo thứ tự

Làm lần lượt theo bảng; **không bỏ qua bước phụ thuộc**, vì ô chọn ở danh mục sau lấy dữ liệu từ danh mục trước.

- **1**: Danh mục: Chi nhánh / Đơn vị; Mã bài: [TỔNG QUAN MÀN HÌNH CHI NHÁNH / ĐƠN VỊ](/bai-viet/2026-11-07-tl-a01-0-tong-quan-man-hinh-chi-nhanh-don-vi/), A01.2; Phải làm trước vì: Mọi danh mục và chứng từ gắn chi nhánh
- **2**: Danh mục: Kho hàng; Mã bài: TL-A09; Phải làm trước vì: Phiếu kho cần kho; đơn vị gia công bắt buộc có kho gia công
- **3**: Danh mục: Tài khoản, quỹ; Mã bài: [TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ](/bai-viet/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/), A06.2, A06.3; Phải làm trước vì: Phiếu thu, chi cần quỹ; gán người sử dụng thì mới thấy quỹ
- **4**: Danh mục: Hệ thống tài khoản; Mã bài: TL-A10; Phải làm trước vì: Tài khoản kế toán dùng ở cấu hình hạch toán
- **5**: Danh mục: Nội dung thu chi; Mã bài: [TỔNG QUAN MÀN HÌNH NỘI DUNG THU CHI](/bai-viet/2026-11-07-tl-a04-0-tong-quan-man-hinh-noi-dung-thu-chi/); Phải làm trước vì: Phiếu thu, chi cần nội dung; gắn hạch toán ở bước 6
- **6**: Danh mục: Cấu hình hạch toán; Mã bài: TL-A11; Phải làm trước vì: Gắn nội dung thu chi, quỹ với tài khoản kế toán
- **7**: Danh mục: Nhóm nhà cung cấp, Nhà cung cấp; Mã bài: TL-B01, TL-B02; Phải làm trước vì: Phiếu mua hàng cần nhà cung cấp
- **8**: Danh mục: Loại khách hàng, Nhóm khách hàng, Khách hàng; Mã bài: TL-C01, C02, C03; Phải làm trước vì: Phiếu bán hàng cần khách hàng
- **9**: Danh mục: Nguồn nhân lực, Đơn vị gia công, Danh mục phí; Mã bài: [TỔNG QUAN MÀN HÌNH NGUỒN NHÂN LỰC](/bai-viet/2026-11-07-tl-a02-0-tong-quan-man-hinh-nguon-nhan-luc/), [TỔNG QUAN MÀN HÌNH ĐƠN VỊ GIA CÔNG](/bai-viet/2026-11-07-tl-a03-0-tong-quan-man-hinh-don-vi-gia-cong/), A03.2, [TỔNG QUAN MÀN HÌNH DANH MỤC PHÍ](/bai-viet/2026-11-07-tl-a05-0-tong-quan-man-hinh-danh-muc-phi/); Phải làm trước vì: Chỉ khi công ty có gia công; đơn vị gia công cần kho ở bước 2
- **10**: Danh mục: Tài xế, Xe; Mã bài: TL-A07, TL-A08; Phải làm trước vì: Chỉ khi có xuất giao hàng; xe chọn tài xế
- **11**: Danh mục: Đơn vị tính, Loại hàng, Tiêu chuẩn, Số mặt, Danh mục gia công, Danh mục lỗi, Nhóm hàng hóa; Mã bài: TL-D01 → D06, D12; Phải làm trước vì: Hàng hoá chọn các giá trị này
- **12**: Danh mục: Nguyên liệu, Hàng trơn, Hàng hóa khác; Mã bài: TL-D07, D08, D09; Phải làm trước vì: Là hàng dùng ở phiếu và ở định mức
- **13**: Danh mục: Định mức; Mã bài: TL-D10; Phải làm trước vì: Cần nguyên liệu, nguồn nhân lực, nội dung thu chi, danh mục gia công
- **14**: Danh mục: Thành phẩm; Mã bài: TL-D11; Phải làm trước vì: Gắn định mức
- **15**: Danh mục: Bảng giá sản xuất, Bảng giá mua bán; Mã bài: TL-E01, TL-E02; Phải làm trước vì: Cần hàng hoá, đơn vị gia công, khách hàng
- **16**: Danh mục: Kết nối gia công API, Kết nối AMIS; Mã bài: TL-F, TL-G; Phải làm trước vì: Chỉ khi dùng; cần danh mục đã có ở các bước trên

### Bước 2 – Kiểm tra trước khi lập chứng từ

Trước khi lập chứng từ đầu tiên, kiểm tra: chi nhánh đúng, kho đã có, quỹ đã gán người dùng, hàng hoá có đơn vị tính và loại hàng.

### Mục lục bài hướng dẫn

**Phần A – Thiết lập danh mục:**

- **[TỔNG QUAN MÀN HÌNH CHI NHÁNH / ĐƠN VỊ](/bai-viet/2026-11-07-tl-a01-0-tong-quan-man-hinh-chi-nhanh-don-vi/)**: Bài: Tổng quan màn hình Chi nhánh / Đơn vị
- **[HƯỚNG DẪN IMPORT CHI NHÁNH TỪ EXCEL](/bai-viet/2026-11-07-tl-a01-2-huong-dan-import-chi-nhanh-tu-excel/)**: Bài: Hướng dẫn import chi nhánh từ Excel
- **[TỔNG QUAN MÀN HÌNH NGUỒN NHÂN LỰC](/bai-viet/2026-11-07-tl-a02-0-tong-quan-man-hinh-nguon-nhan-luc/)**: Bài: Tổng quan màn hình Nguồn nhân lực
- **[TỔNG QUAN MÀN HÌNH ĐƠN VỊ GIA CÔNG](/bai-viet/2026-11-07-tl-a03-0-tong-quan-man-hinh-don-vi-gia-cong/)**: Bài: Tổng quan màn hình Đơn vị gia công
- **[HƯỚNG DẪN IMPORT ĐƠN VỊ GIA CÔNG TỪ EXCEL](/bai-viet/2026-11-07-tl-a03-2-huong-dan-import-don-vi-gia-cong-tu-excel/)**: Bài: Hướng dẫn import đơn vị gia công từ Excel
- **[TỔNG QUAN MÀN HÌNH NỘI DUNG THU CHI](/bai-viet/2026-11-07-tl-a04-0-tong-quan-man-hinh-noi-dung-thu-chi/)**: Bài: Tổng quan màn hình Nội dung thu chi
- **[TỔNG QUAN MÀN HÌNH DANH MỤC PHÍ](/bai-viet/2026-11-07-tl-a05-0-tong-quan-man-hinh-danh-muc-phi/)**: Bài: Tổng quan màn hình Danh mục phí
- **[TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ](/bai-viet/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/)**: Bài: Tổng quan màn hình Tài khoản, quỹ
- **[HƯỚNG DẪN IMPORT TÀI KHOẢN, QUỸ TỪ EXCEL](/bai-viet/2026-11-07-tl-a06-2-huong-dan-import-tai-khoan-quy-tu-excel/)**: Bài: Hướng dẫn import tài khoản, quỹ từ Excel
- **[HƯỚNG DẪN GÁN NGƯỜI SỬ DỤNG CHO QUỸ](/bai-viet/2026-11-07-tl-a06-3-huong-dan-gan-nguoi-su-dung-cho-quy/)**: Bài: Hướng dẫn gán người sử dụng cho quỹ
- **TL-A07 → A11**: Bài: Tài xế, Xe, Kho hàng, Hệ thống tài khoản, Cấu hình hạch toán (xem sitemap sổ tay)

**Phần B → G:** TL-B01 → TL-G05, mỗi màn ít nhất một bài tổng quan (xem sitemap sổ tay).

**Tra cứu ở Sổ tay Hướng dẫn chung:** [HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/) → [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/), [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/), [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/).

## 6. Kiểm tra sau khi thực hiện

Bạn nắm được sổ tay Thiết lập danh mục gồm những màn hình nào, khai báo theo thứ tự nào, danh mục nào ảnh hưởng chứng từ nào, và nguyên tắc ngưng sử dụng thay cho xoá.

## 7. Những điều cần lưu ý

⚠️ **Ngưng sử dụng thay cho xoá.** Danh mục đã có chứng từ gắn vào thì không xoá được (báo **Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại.**). Bỏ tick **Kích hoạt** để ngưng dùng: dòng vẫn còn trong danh sách, chứng từ cũ giữ nguyên, chứng từ mới không còn chọn được ([HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)).

⚠️ **Mã danh mục nên đặt một lần rồi giữ nguyên.** Mã hiện ở ô chọn, báo cáo và file Excel nhiều nơi; đổi mã gây khó đối chiếu. Ở các màn phần A, mã trùng bị chặn kể cả với dòng đã ngưng sử dụng.

⚠️ **Danh mục là dữ liệu dùng chung.** Ở các màn phần A (A01 → A06), danh sách không lọc theo chi nhánh đang làm việc; đổi tên hoặc thông tin ở đây ảnh hưởng các chi nhánh trong cùng cơ sở dữ liệu ERP. Chỉ cấp quyền **Cập nhật** cho người phụ trách.

⚠️ **Quỹ mới chưa ai dùng được cho đến khi gán người sử dụng** ([HƯỚNG DẪN GÁN NGƯỜI SỬ DỤNG CHO QUỸ](/bai-viet/2026-11-07-tl-a06-3-huong-dan-gan-nguoi-su-dung-cho-quy/)).

⚠️ Import bằng Excel (chi nhánh, đơn vị gia công, quỹ…) **chỉ thêm mới** và **lưu tất cả hoặc không lưu gì**: một dòng lỗi thì cả lần nạp bị từ chối.

⚠️ Sửa thông tin pháp nhân của chi nhánh (tên công ty, mã số thuế, logo…) đổi nội dung các phiếu in từ lần in sau.

### Không thấy nhóm menu hoặc một màn hình danh mục 

Kiểm tra: tài khoản đã được cấp quyền **Truy cập** màn hình đó chưa.
Cách xử lý: liên hệ quản trị hệ thống để được cấp quyền, sau đó đăng xuất và đăng nhập lại.

### Ô chọn trên chứng từ không có danh mục vừa thêm 

Nguyên nhân: danh mục đang **Ngưng sử dụng**, hoặc (với quỹ) tài khoản chưa được gán quỹ, hoặc cửa sổ chưa nạp lại.
Cách xử lý: kiểm tra **Kích hoạt**, gán người sử dụng, mở lại cửa sổ chứng từ.

### "Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: danh mục đã được dùng ở chứng từ hoặc danh mục khác.
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá.

## 9. Câu hỏi thường gặp

**Khai báo xong danh mục, sao tồn kho / công nợ vẫn bằng 0?**
Danh mục không phát sinh số liệu. Số liệu chỉ có khi lập chứng từ (phiếu nhập kho, phiếu thu…), hoặc nhập số dư đầu kỳ theo hướng dẫn của kế toán.

**Thêm nhiều dòng danh mục một lần thế nào?**
Một số màn có nút **Import Excel** (chi nhánh, đơn vị gia công, tài khoản quỹ, nhà cung cấp, khách hàng, hàng hoá…). Xem bài import của từng màn.

**Danh mục có tách theo chi nhánh không?**
Tuỳ màn. Ở phần A (A01 → A06) danh sách dùng chung các chi nhánh trong cùng cơ sở dữ liệu ERP; các màn khác xem bài tổng quan của từng màn.

## 10. Công việc tiếp theo

Thứ tự đọc tài liệu đề nghị:

```text
TL-00 Tổng quan sổ tay (bài này)
   ↓
Sổ tay Hướng dẫn chung — GEN-01 → GEN-06 · GEN-11 Thêm, sửa, xoá, ngưng sử dụng
   ↓
TL-A01 Chi nhánh → TL-A09 Kho hàng → TL-A06 Tài khoản, quỹ
   ↓
TL-A10 → TL-A04 → TL-A11  Tài khoản kế toán, nội dung thu chi, hạch toán
   ↓
TL-B (Nhà cung cấp) · TL-C (Khách hàng)
   ↓
TL-D (Hàng hoá) → TL-E (Bảng giá) → TL-F / TL-G (Kết nối)
```

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH CHI NHÁNH / ĐƠN VỊ](/bai-viet/2026-11-07-tl-a01-0-tong-quan-man-hinh-chi-nhanh-don-vi/) – Tổng quan màn hình Chi nhánh / Đơn vị.

## 11. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH CHI NHÁNH / ĐƠN VỊ](/bai-viet/2026-11-07-tl-a01-0-tong-quan-man-hinh-chi-nhanh-don-vi/) – Tổng quan màn hình Chi nhánh / Đơn vị
- [TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ](/bai-viet/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/) – Tổng quan màn hình Tài khoản, quỹ
- [TỔNG QUAN MÀN HÌNH ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-0-tong-quan-man-hinh-dinh-muc/) – Tổng quan màn hình Định mức
- [TỔNG QUAN MODULE MUA HÀNG VÀ THỨ TỰ SỬ DỤNG](/bai-viet/2026-11-07-mh-00-tong-quan-module-mua-hang-va-thu-tu-su-dung/) – Tổng quan phân hệ Mua hàng
- [TỔNG QUAN MODULE KHO HÀNG VÀ THỨ TỰ SỬ DỤNG](/bai-viet/2026-11-07-kho-00-tong-quan-module-kho-hang-va-thu-tu-su-dung/) – Tổng quan phân hệ Kho hàng
- Sổ tay Kế toán – Phiếu thu, Phiếu chi, Hệ thống tài khoản
- Sổ tay Sản xuất – Phiếu yêu cầu gia công, Phiếu nhập kho gia công
