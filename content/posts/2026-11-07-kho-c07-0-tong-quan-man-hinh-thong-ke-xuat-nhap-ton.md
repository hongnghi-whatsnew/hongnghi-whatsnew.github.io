---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN"
date: "2026-11-07"
summary: "Màn hình Xuất nhập tồn là báo cáo tồn kho chính của hệ thống."
module: "Kho hàng"
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

Màn hình **Xuất nhập tồn** là báo cáo tồn kho chính của hệ thống. Mỗi dòng là **một mặt hàng trong một kho** của **chi nhánh đang làm việc**, cho biết trong khoảng ngày bạn chọn:

- **Tồn đầu**, **Tổng nhập**, **Tổng xuất**, **Tồn cuối**.
- Nhập, xuất tách theo từng nghiệp vụ: nhập mua, khách trả, xuất bán, trả nhà cung cấp, chuyển kho, gia công, mượn hàng.
- Tồn **hiện tại** đã trừ hàng đang giữ (bán chưa xuất, giữ gia công) để biết còn **xuất được** bao nhiêu.
- Hàng **sắp về** (đã mua chưa nhập kho).
- Đơn giá vốn và giá trị tồn (chỉ khi có quyền **Xem giá vốn**).

Bạn dùng màn hình này khi kiểm tra tồn kho cuối ngày / cuối tháng, trả lời khách còn hàng không, đối chiếu kiểm kê, hoặc lập báo cáo tồn kho cho kế toán.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** cần xem ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Tài khoản đã được phân **kho hàng** cần xem.
- Hàng hoá được khai **có quản lý tồn kho** trong danh mục hàng hoá (hàng dịch vụ không hiện).

## 2. Mở chức năng

**Thống kê kho → Xuất nhập tồn**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ XUẤT NHẬP TỒN](/posts/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/hinh-01-man-hinh-xuat-nhap-ton.png)

- **Ô khoảng ngày**: Chức năng: Chọn kỳ báo cáo, mặc định **hôm nay** (`today`); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tính lại số liệu; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Nút Xuất Excel có mũi tên**: Chức năng: Menu **Xuất ra tất cả dữ liệu** / **Xuất ra dữ liệu đã chọn** / **Xuất ra dữ liệu theo custom** (chỉ hiện khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột (nhiều cột ẩn sẵn, phần “Giải thích các thông tin trên màn hình”); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột ô tick đầu dòng**: Chức năng: Chọn dòng để **Xuất ra dữ liệu đã chọn**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Hàng lọc dưới tiêu đề cột**: Chức năng: Lọc từng cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thanh phân trang**: Chức năng: 10 / 15 / 20 dòng mỗi trang, tổng số mục (ví dụ *Trang 1 của 32 (317 mục)*); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **–**: Thành phần: Tiêu đề nhóm cột kỳ báo cáo (không thấy trong Hình 1 – kéo thanh cuộn ngang sang phải); Chức năng: Ghi **Từ ngày: … - Đến ngày: …**, hoặc **Trong ngày: …** khi chọn một ngày

Lưới nhớ bố cục cột. Nhấp chuột phải lên tiêu đề cột có mục **Khôi phục bố cục** để trả cột về mặc định. Cột **Đơn giá vốn** trong Hình 1 đã được làm mờ (chỉ hiện với tài khoản có quyền **Xem giá vốn**). Cuối lưới không có dòng chữ **TỔNG CỘNG**.

![Hình 2: Menu Xuất Excel](/posts/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/hinh-02-menu-xuat-excel.png)

**Menu chuột phải trên một dòng hàng:**

![Hình 3: Menu chuột phải trên dòng hàng](/posts/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/hinh-03-menu-chuot-phai.png)

- **Xem chi tiết - Nhập xuất**: Mở ra: Cửa sổ **XEM CHI TIẾT - NHẬP XUẤT**: từng chứng từ nhập / xuất mặt hàng ở kho đó trong kỳ
- **Xem chi tiết - Giữ gia công (n)**: Mở ra: Cửa sổ **XEM CHI TIẾT**: các phiếu đang giữ hàng cho gia công
- **Xem chi tiết - Giữ bán hàng (n)**: Mở ra: Cửa sổ **XEM CHI TIẾT**: các phiếu bán hàng chưa xuất kho
- **Xem chi tiết - Đang về (n)**: Mở ra: Cửa sổ **XEM CHI TIẾT**: các phiếu mua hàng chưa nhập kho
- **Xem chi tiết - Đang gia công (n)**: Mở ra: Cửa sổ **XEM CHI TIẾT**: các yêu cầu gia công / lệnh sản xuất chưa nhập thành phẩm

Số **(n)** trong ngoặc là số lượng tương ứng của dòng.

**Cửa sổ XEM CHI TIẾT - NHẬP XUẤT:**

![Hình 4: Cửa sổ XEM CHI TIẾT - NHẬP XUẤT](/posts/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/hinh-04-xem-chi-tiet-nhap-xuat.png)

- **Ngày phát sinh**: Ý nghĩa: Ngày chứng từ
- **Mã phiếu, Mã phiếu gốc**: Ý nghĩa: Mã chứng từ và mã phiếu gốc
- **Nội dung**: Ý nghĩa: Nghiệp vụ (Nhập mua hàng, Xuất bán hàng, Xuất chuyển kho…)
- **Kho hàng**: Ý nghĩa: Kho của dòng
- **Nhân viên**: Ý nghĩa: Nhân viên trên chứng từ
- **Số lượng nhập, Số lượng xuất**: Ý nghĩa: Số lượng của chứng từ
- **Còn lại**: Ý nghĩa: Tồn luỹ kế sau chứng từ: bắt đầu từ **Tồn đầu**, cộng nhập, trừ xuất
- **Giá vốn**: Ý nghĩa: Giá bình quân sau chứng từ (chỉ khi có quyền **Xem giá vốn**)
- **Chú thích**: Ý nghĩa: Chú thích của dòng hàng
- **Lý do nhập/xuất**: Ý nghĩa: Ghi chú của chứng từ

Dòng **TỔNG CỘNG** của cửa sổ ghi **Đầu kỳ: …**, tổng nhập, tổng xuất, **Cuối kỳ: …**. **Nhấp đúp** một dòng để mở xem phiếu gốc (ví dụ **THÔNG TIN PHIẾU NHẬP KHO**, **THÔNG TIN PHIẾU XUẤT KHO**, **THÔNG TIN PHIẾU ĐIỀU CHỈNH KHO**…).

**Cửa sổ XEM CHI TIẾT** (giữ hàng, đang về, đang gia công) có các cột: **Ngày phát sinh**, **Mã phiếu**, **Diễn giãi** (khách hàng / nhà cung cấp), **Kho hàng**, **Mã hàng**, **Đvt**, **Số lượng**, **Ngày nhập kho dự kiến**, **Chú thích**.

## 4. Trình tự công việc

```text
Chọn kỳ ──► Lưới XNT: mỗi dòng = kho + hàng
                │
                ├── Chuột phải → Xem chi tiết - Nhập xuất ──► nhấp đúp → phiếu gốc
                ├── Chuột phải → Giữ bán hàng / Giữ gia công / Đang về
                └── Xuất Excel (tất cả / dòng đã chọn / theo custom)
Số lệch với Sổ cái kho → Đối chiếu sổ cái kho (KHO-C08.0)
```

## 5. Thực hiện trên phần mềm

- **Xem tồn kho hôm nay**: Cách làm: Mở màn hình (mặc định **hôm nay**)
- **Xem xuất nhập tồn tháng trước**: Cách làm: Ô khoảng ngày → **Tháng trước**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm một mặt hàng / một kho**: Cách làm: **Tìm kiếm…** hoặc lọc cột **Tên kho**, **Tên hàng hoá**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Biết tồn thay đổi do phiếu nào**: Cách làm: Chuột phải → **Xem chi tiết - Nhập xuất**; Bài hướng dẫn: phần “Thực hiện trên phần mềm” bên dưới
- **Biết hàng đang bị giữ cho ai**: Cách làm: Chuột phải → **Xem chi tiết - Giữ bán hàng**
- **Hiện thêm cột (Mã hàng, Đvt, Điều chỉnh, Hàng gửi…)**: Cách làm: **Trình chọn cột**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel theo nhóm kho, chọn cột**: Cách làm: **Xuất Excel → Xuất ra dữ liệu theo custom**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Kiểm tra số liệu có khớp sổ cái kho**: Cách làm: Màn Đối chiếu sổ cái kho; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH ĐỐI CHIẾU SỔ CÁI KHO - XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c08-0-tong-quan-man-hinh-doi-chieu-so-cai-kho-xuat-nhap-ton/)

### Xem các chứng từ làm thay đổi tồn của một mặt hàng

**Bước 1 –** Mở **Thống kê kho → Xuất nhập tồn**, chọn kỳ ở ô khoảng ngày.

**Bước 2 –** Gõ tên hàng vào **Tìm kiếm…**, tìm dòng đúng kho.

**Bước 3 –** Nhấp chuột phải vào dòng, chọn **Xem chi tiết - Nhập xuất**. Cửa sổ **XEM CHI TIẾT - NHẬP XUẤT** mở ra, xếp theo ngày phát sinh.

**Bước 4 –** Đọc cột **Còn lại** để thấy tồn sau từng chứng từ. Dòng cuối cùng phải khớp **Cuối kỳ**.

**Bước 5 –** Nhấp đúp một dòng để mở xem phiếu gốc. Đóng cửa sổ để quay lại.

## 6. Giải thích các thông tin trên màn hình

**Nhóm Thông tin kho, Thông tin hàng hoá:**

- **Mã kho (ẩn), Tên kho**: Ý nghĩa: Kho của dòng
- **Tiêu chuẩn, Loại hàng, Gia công, Số mặt (ẩn)**: Ý nghĩa: Thuộc tính hàng hoá trong danh mục; **Gia công** là mã các định mức gia công của hàng
- **Nhà cung cấp**: Ý nghĩa: Thông tin NCC khai trên hàng hoá
- **Mã hàng hoá (ẩn), Tên hàng hoá, Tên in**: Ý nghĩa: Mã, tên, tên in phiếu của hàng
- **Dày, Rộng, Dài, m³ (ẩn)**: Ý nghĩa: Kích thước, số m³ một đơn vị hàng
- **SL M³ (ẩn)**: Ý nghĩa: **Tồn cuối** × m³
- **Đvt (ẩn)**: Ý nghĩa: Đơn vị tính gốc
- **Tấm/Kiện**: Ý nghĩa: Số tấm một kiện (danh mục hàng hoá)
- **Đơn giá vốn**: Ý nghĩa: Giá bình quân cuối kỳ của chi nhánh (mục dưới)

**Nhóm kỳ báo cáo (tiêu đề Từ ngày … Đến ngày …):**

- **Tồn đầu**: Cách tính: Tồn cuối − Tổng nhập + Tổng xuất
- **Tổng nhập**: Cách tính: Hàng gửi + Điều chỉnh + Nhập mua + Nhập khách trả + Nhập chuyển + Nhập gia công + Nhập gia công lỗi + Nhập mượn + Nhập trả mượn + hàng vào kho gia công (xuất gia công, yêu cầu gia công, lệnh sản xuất)
- **Tổng xuất**: Cách tính: Xuất bán + Xuất trả ncc + Xuất chuyển + Xuất gia công + nguyên liệu / hàng trơn trừ khi nhập thành phẩm + Xuất cho mượn + Xuất trả mượn + hàng ra từ kho xuất của yêu cầu gia công, lệnh sản xuất
- **Điều chỉnh (ẩn)**: Cách tính: Tổng số lượng phiếu điều chỉnh kho (âm là giảm)
- **Hàng gửi (ẩn)**: Cách tính: Phiếu nhập gửi hàng
- **Nhập mua, M3 mua, SL Kiện mua**: Cách tính: Phiếu nhập kho mua hàng; quy ra m³ (× m³) và kiện (÷ Tấm/Kiện)
- **Nhập khách trả**: Cách tính: Phiếu nhập kho khách trả hàng
- **Xuất bán, M3 bán, SL Kiện bán**: Cách tính: Phiếu xuất kho bán hàng **cộng phiếu xuất hàng (xuất khác)**; quy ra m³ và kiện
- **Xuất trả ncc**: Cách tính: Phiếu xuất kho trả nhà cung cấp
- **Xuất chuyển, Nhập chuyển**: Cách tính: Phiếu xuất / nhập chuyển kho
- **Xuất gia công**: Cách tính: Phiếu xuất kho gia công, phần ra khỏi kho xuất
- **Nhập gia công, Nhập gia công lỗi**: Cách tính: Thành phẩm, thành phẩm lỗi nhập về từ gia công
- **Xuất cho mượn, Nhập trả mượn, Nhập mượn, Xuất trả mượn**: Cách tính: Các phiếu mượn hàng (sổ Kho hàng phần b)
- **Tồn cuối**: Cách tính: Tồn hiện tại − các phiếu nhập **sau** ngày cuối kỳ + các phiếu xuất **sau** ngày cuối kỳ
- **Giá trị Tồn đầu**: Cách tính: Tồn đầu × giá bình quân sau cùng **trước** ngày đầu kỳ
- **Giá trị Tồn cuối**: Cách tính: Tồn cuối × **Đơn giá vốn**
- **Giá trị Tổng nhập, Giá trị Nhập mua, Giá trị Xuất bán…**: Cách tính: Các cột giá trị theo nghiệp vụ chưa được nguồn dữ liệu cấp đúng trường, có thể trống dù có quyền. Không đọc ô trống thành 0 hoặc dùng tổng đó để chốt; đối chiếu chứng từ và sổ cái với kế toán.

**Nhóm Tồn kho - Không theo thời gian** (luôn tính tại thời điểm xem, không phụ thuộc khoảng ngày):

- **Tồn (ẩn)**: Cách tính: Tồn hiện tại của kho
- **Bán chưa xuất**: Cách tính: Số lượng trên phiếu bán hàng chưa xuất kho (số lượng − đã xuất − tất toán)
- **Giữ gia công**: Cách tính: Hàng đang giữ cho yêu cầu gia công / lệnh sản xuất chưa nhập thành phẩm
- **Tồn cuối được xuất**: Cách tính: Tồn hiện tại − Bán chưa xuất − Giữ gia công − hàng giữ khác (đặt giữ, giữ chuyển kho)

**Nhóm Hàng sắp về:**

- **Mua hàng**: Cách tính: Hàng đã mua chưa nhập kho của **cả chi nhánh** (như Hàng chờ nhập kho [TỔNG QUAN MÀN HÌNH THỐNG KÊ HÀNG CHỜ NHẬP KHO](/bai-viet/2026-11-07-mh-b02-0-tong-quan-man-hinh-thong-ke-hang-cho-nhap-kho/))

**Đơn giá vốn:** lấy giá bình quân sau cùng trên **Sổ cái kho** của chi nhánh tính đến hết ngày cuối kỳ; mặt hàng chưa có trên sổ cái thì lấy giá vốn hiện tại của hàng hoá.

**Dòng nào được hiện:** hàng có quản lý tồn, thuộc kho được phân cho tài khoản, và có ít nhất một số khác 0 (tồn đầu, nhập, xuất, tồn cuối, tồn hiện tại, hàng giữ, hàng sắp về). Lưới xếp theo tên kho, loại hàng hoá, mã hàng.

## 7. Kiểm tra sau khi thực hiện

Bạn có bảng tồn đầu – nhập – xuất – tồn cuối theo từng kho, từng mặt hàng; biết số còn xuất được, hàng đang về và (nếu có quyền) giá trị tồn kho.

## 8. Những điều cần lưu ý

⚠️ Cột **Gia công** trong Hàng sắp về hiện chưa được nguồn cấp số (nhánh lấy dữ liệu bị tắt trong ghi chú kiểm chứng). Số 0 không chứng minh không có thành phẩm đang gia công; đối chiếu lệnh/yêu cầu và phiếu nhập theo sổ tay Sản xuất.

⚠️ **Tồn đầu** và **Tồn cuối** được tính **ngược từ tồn hiện tại** (trừ đi các chứng từ phát sinh sau kỳ). Lập hoặc sửa chứng từ có ngày lùi về quá khứ sẽ làm đổi số của những kỳ đã xem trước đó.

⚠️ Cột **Xuất bán** gồm cả **phiếu xuất hàng (xuất khác)**. Muốn tách riêng xuất khác, xem **Xuất khác** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT XUẤT KHÁC](/bai-viet/2026-11-07-kho-c03-0-tong-quan-man-hinh-thong-ke-chi-tiet-xuat-khac/)).

⚠️ **Hàng gửi** (khách gửi kho) được cộng vào **Tổng nhập** và **Tồn cuối**.

⚠️ Nhóm **Tồn kho - Không theo thời gian** luôn là số **hiện tại**, kể cả khi bạn chọn kỳ tháng trước. Không đem so với **Tồn cuối** của kỳ cũ.

⚠️ Cột **Mua hàng** (hàng sắp về) tính cho **cả chi nhánh**, nên lặp lại trên mọi kho có mặt hàng đó; cộng cột này theo nhiều kho sẽ bị trùng.

⚠️ Dòng tổng cuối lưới cộng mọi mặt hàng, mọi đơn vị tính. Chỉ đọc tổng số lượng khi đã lọc còn một mặt hàng; tổng **giá trị** thì cộng được.

⚠️ Kỳ dài và nhiều kho thì tính lâu; chờ lưới tải xong rồi mới thao tác tiếp.

### Lưới trống hoặc thiếu kho 

Nguyên nhân: đang ở chi nhánh khác, hoặc tài khoản chưa được phân kho cần xem.
Cách xử lý: kiểm tra chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)); nhờ quản trị hệ thống phân kho cho tài khoản.

### Không thấy cột Đơn giá vốn, Giá trị … 

Nguyên nhân: chưa có quyền **Xem giá vốn**.
Cách xử lý: liên hệ quản trị hệ thống. Không có quyền này thì các cột cũng không có trong **Trình chọn cột**.

### Tồn cuối khác số trên Sổ cái kho 

Nguyên nhân: Xuất nhập tồn và Sổ cái kho tính từ hai nguồn khác nhau; một chứng từ chưa được ghi vào sổ cái hoặc ghi lệch.
Cách xử lý: mở **Đối chiếu sổ cái kho** ([TỔNG QUAN MÀN HÌNH ĐỐI CHIẾU SỔ CÁI KHO - XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c08-0-tong-quan-man-hinh-doi-chieu-so-cai-kho-xuat-nhap-ton/)) cùng kỳ, bật **Chỉ hiện dòng lệch** để tìm nghiệp vụ lệch, báo kế toán kho.

### Không thấy nút Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Chọn kỳ là hôm nay mà vẫn ra hàng trăm dòng?**
Đúng. Dòng nào còn tồn (hoặc đang giữ, đang về) đều hiện, dù trong ngày không phát sinh gì.

**Tồn cuối được xuất khác Tồn cuối thế nào?**
**Tồn cuối** là số trong kỳ đã chọn; **Tồn cuối được xuất** là số hiện tại sau khi trừ hàng đã bán chưa xuất và hàng giữ gia công — dùng số này để báo khách còn hàng.

**Nhấp đúp vào dòng trên lưới chính có xem chi tiết không?**
Không. Dùng menu chuột phải **Xem chi tiết - Nhập xuất**.

**Vì sao nhấp đúp dòng Nhập gửi hàng / Xuất hàng trong cửa sổ chi tiết không mở phiếu?**
Cửa sổ chi tiết chưa hỗ trợ mở hai loại phiếu này. Mở màn **Phiếu nhập gửi hàng** ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-0-tong-quan-man-hinh-phieu-nhap-gui-hang/)) hoặc **Phiếu xuất hàng** ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-0-tong-quan-man-hinh-phieu-xuat-hang/)) và tìm theo mã phiếu.

## 11. Công việc tiếp theo

```text
Tồn lệch thực tế → kiểm kê → Phiếu điều chỉnh kho (KHO-A03.0)
Số XNT lệch sổ cái kho → Đối chiếu sổ cái kho (KHO-C08.0) → Sổ cái kho (KHO-A09.0)
Cần theo lô / hạn sử dụng → Xuất nhập tồn lô hàng (KHO-C06.0)
Thiếu hàng → Gợi ý mua hàng (MH-B05.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/) – Tổng quan màn hình Sổ cái kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN TRONG NGÀY](/bai-viet/2026-11-07-kho-c01-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton-trong-ngay/) – Tổng quan màn hình thống kê Xuất nhập tồn trong ngày
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN LÔ HÀNG](/bai-viet/2026-11-07-kho-c06-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton-lo-hang/) – Tổng quan màn hình thống kê Xuất nhập tồn lô hàng
- [TỔNG QUAN MÀN HÌNH ĐỐI CHIẾU SỔ CÁI KHO - XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c08-0-tong-quan-man-hinh-doi-chieu-so-cai-kho-xuat-nhap-ton/) – Tổng quan màn hình Đối chiếu sổ cái kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ HÀNG CHỜ NHẬP KHO](/bai-viet/2026-11-07-mh-b02-0-tong-quan-man-hinh-thong-ke-hang-cho-nhap-kho/) – Tổng quan màn hình thống kê Hàng chờ nhập kho
