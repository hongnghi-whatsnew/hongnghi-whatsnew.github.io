---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG"
date: "2026-11-07"
summary: "Màn hình Doanh số bán hàng (tiêu đề trên màn: THỐNG KÊ - DOANH SỐ BÁN HÀNG) tổng hợp doanh số trong khoảng ngày bạn chọn theo nhân viên sale và khách hàng (hoặc theo loại hàng), tách rõ 4 thành phần: Bán, Trả, Giảm giá, Dịch vụ, rồi tính Doanh số và Doanh số KPI."
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

Màn hình **Doanh số bán hàng** (tiêu đề trên màn: **THỐNG KÊ - DOANH SỐ BÁN HÀNG**) tổng hợp doanh số trong khoảng ngày bạn chọn theo **nhân viên sale** và **khách hàng** (hoặc theo **loại hàng**), tách rõ 4 thành phần: **Bán**, **Trả**, **Giảm giá**, **Dịch vụ**, rồi tính **Doanh số** và **Doanh số KPI**. Mỗi dòng còn cho biết khách là **Khách mới** hay **Khách cũ**.

Màn hình có hai chế độ xem, chuyển bằng nút ở góc phải:

- **Khách hàng** (mặc định) — mỗi dòng là *nhân viên sale – khách hàng – loại khách*.
- **Loại hàng** — mỗi dòng là *chi nhánh – nhân viên – loại hàng (Ván trơn / Ván phủ / Khác) – loại khách*.

Bạn dùng màn hình này khi:

- Xem doanh số của từng nhân viên sale, từng khách trong tháng.
- Tách doanh số khách mới / khách cũ, ván trơn / ván phủ.
- Đối chiếu số **Doanh số KPI** trước khi tính lương KPI.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”, được phân nhóm khách hàng.
- Chứng từ phát sinh trong khoảng ngày có **khách hàng** và **nhân viên sale**: phiếu xuất kho ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/)), phiếu nhập kho khách trả ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/)), phiếu giảm giá ([TỔNG QUAN MÀN HÌNH PHIẾU GIẢM GIÁ](/bai-viet/2026-11-07-bh-a05-0-tong-quan-man-hinh-phieu-giam-gia/)), phiếu bán dịch vụ ([TỔNG QUAN MÀN HÌNH PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-0-tong-quan-man-hinh-phieu-ban-dich-vu/)).

## 2. Mở chức năng

**Thống kê bán hàng → Doanh số bán hàng**

Nhóm **Báo cáo tổng hợp** cũng có menu **Doanh số bán hàng** — đó là báo cáo gộp nhiều đơn vị (sổ Báo cáo), không phải màn này.

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ - DOANH SỐ BÁN HÀNG, chế độ Khách hàng](/posts/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/hinh-01-man-hinh-doanh-so-theo-khach-hang.png)

- **Ô khoảng ngày**: Chức năng: Chọn khoảng ngày phát sinh. Lần đầu là **Hôm nay**, lần sau nhớ lựa chọn gần nhất (ảnh: **yday** = 11/10/2026); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu của chế độ đang xem
- **Nút Khách hàng / Loại hàng**: Chức năng: Chuyển chế độ xem; bấm là tải số liệu chế độ đó; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Vùng nhóm phía trên lưới**: Chức năng: Dòng chữ *Kéo tiêu đề một cột vào đây để nhóm cột đó*. Kéo tiêu đề cột (ví dụ **SALE**) vào đây để gom nhóm; dòng nhóm hiện tổng từng cột tiền; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; xuất lưới của chế độ đang xem; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…, hàng lọc**: Chức năng: Tìm, lọc, ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: **TỔNG CỘNG: n** (số dòng); tổng **Bán**, **Trả**, **Giảm giá**, **Dịch vụ**, **Doanh số**, **Doanh số KPI**

Lưới hiện **10 dòng mỗi trang** (chọn được 10 / 15 / 20). Lưới chế độ **Khách hàng** nhớ bố cục cột ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)); lưới **Loại hàng** không nhớ.

**Các cột — chế độ Khách hàng:**

- **STT**: Ý nghĩa: Số thứ tự
- **SALE**: Ý nghĩa: Nhân viên sale trên chứng từ
- **Khách chính**: Ý nghĩa: Tên khách chính nếu khách là đơn vị con; không có thì tên khách
- **Khách hàng**: Ý nghĩa: Tên đầy đủ của khách
- **Mã số thuế**: Ý nghĩa: Mã số thuế của khách
- **Loại KH**: Ý nghĩa: **Khách mới** / **Khách cũ** (xem phần “Giải thích các thông tin trên màn hình”)
- **Bán**: Ý nghĩa: Tiền hàng xuất kho bán cho khách
- **Trả**: Ý nghĩa: Tiền hàng khách trả lại (đã nhập kho)
- **Giảm giá**: Ý nghĩa: Tiền giảm giá cho khách
- **Dịch vụ**: Ý nghĩa: Tiền bán dịch vụ
- **Doanh số**: Ý nghĩa: Bán + Dịch vụ − Trả − Giảm giá
- **Doanh số KPI**: Ý nghĩa: Bán − Trả − Giảm giá (**không gồm dịch vụ**)

Các cột **Giảm giá**, **Dịch vụ**, **Doanh số**, **Doanh số KPI** nằm bên phải lưới (Hình 1 chỉ thấy tới **Bán**, **Trả**) – kéo thanh cuộn ngang.

**Các cột — chế độ Loại hàng:**

- **STT**: Ý nghĩa: Số thứ tự
- **Mã chi nhánh**: Ý nghĩa: Chi nhánh của chứng từ
- **Nhân viên**: Ý nghĩa: Nhân viên sale
- **Loại hàng**: Ý nghĩa: **Ván trơn**, **Ván phủ** hoặc **Khác**
- **Loại KH**: Ý nghĩa: **Khách mới** / **Khách cũ**
- **Bán, Trả, Giảm giá, Dịch vụ, Doanh số, Doanh số KPI**: Ý nghĩa: Như chế độ Khách hàng, tách theo loại hàng

![Hình 2: Chế độ xem Loại hàng](/posts/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/hinh-02-che-do-loai-hang.png)

- **Cột Mã chi nhánh**: Ý nghĩa: Chi nhánh của chứng từ (ảnh: **HN**)
- **Cột Loại hàng**: Ý nghĩa: **Ván trơn**, **Ván phủ**, **Khác** (bán dịch vụ rơi vào **Khác**)
- **Cột Loại KH**: Ý nghĩa: **Khách mới** / **Khách cũ**

Khung không số: nút **Loại hàng** đang chọn và dòng **TỔNG CỘNG**. Ví dụ trên ảnh (ngày 11/10/2026, một khách thử): dòng **Ván trơn** Bán 531,360 − Trả 177,120 − Giảm giá 20,000 = Doanh số **334,240**; dòng **Khác** Dịch vụ 324,000 = Doanh số **324,000**; tổng Doanh số **658,240**.

Bấm chuột phải vào **tiêu đề cột** để sắp xếp, cố định cột, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Màn hình không có thao tác nhấp đúp; muốn xem chứng từ chi tiết dùng các màn ở phần “Bài hướng dẫn liên quan”.

## 4. Trình tự công việc

```text
Phiếu xuất kho có khách (KHO-A05)       → Bán      (theo ngày xuất)
Phiếu nhập kho khách trả (KHO-A04)      → Trả      (theo ngày nhập)
Phiếu giảm giá (BH-A05)                 → Giảm giá (theo ngày giảm giá)
Phiếu bán dịch vụ (BH-A06)              → Dịch vụ  (theo ngày bán)
      ↓  chỉ chứng từ có khách hàng và nhân viên sale
Doanh số     = Bán + Dịch vụ − Trả − Giảm giá
Doanh số KPI = Bán − Trả − Giảm giá
      ├── Chế độ Khách hàng (SALE × khách × loại KH)
      └── Chế độ Loại hàng  (chi nhánh × nhân viên × loại hàng × loại KH)
```

## 5. Thực hiện trên phần mềm

- **Xem doanh số trong tháng**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem tổng theo từng nhân viên**: Cách làm: Kéo cột **SALE** lên vùng nhóm; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tách ván trơn / ván phủ**: Cách làm: Bấm nút **Loại hàng** ; Bài hướng dẫn: phần “Thực hiện trên phần mềm”
- **Tách khách mới / khách cũ**: Cách làm: Lọc hoặc kéo cột **Loại KH** lên vùng nhóm; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem doanh số từng nhân viên sale trong tháng

**Bước 1 –** Mở **Thống kê bán hàng → Doanh số bán hàng**. Chế độ mặc định là **Khách hàng**.

**Bước 2 –** Chọn **Tháng này** (hoặc tháng cần xem) ở ô khoảng ngày.

**Bước 3 –** Kéo tiêu đề cột **SALE** lên vùng nhóm phía trên lưới. Mỗi nhân viên thành một dòng nhóm, trên dòng nhóm hiện tổng **Bán**, **Trả**, **Giảm giá**, **Dịch vụ**, **Doanh số**, **Doanh số KPI**.

**Bước 4 –** Bấm mở dòng nhóm để xem chi tiết từng khách của nhân viên đó.

### Xem doanh số ván trơn / ván phủ theo nhân viên

**Bước 1 –** Bấm nút **Loại hàng** ở góc phải. Lưới chuyển sang chế độ loại hàng và tự tải.

**Bước 2 –** Kéo cột **Nhân viên** lên vùng nhóm; đọc các dòng **Ván trơn**, **Ván phủ**, **Khác** của từng người.

**Bước 3 –** Bấm **Khách hàng** để quay lại chế độ mặc định.

## 6. Giải thích các thông tin trên màn hình

- **Bán**: Cách tính: Tổng thành tiền các phiếu xuất kho có khách hàng và nhân viên sale, ngày xuất trong khoảng. Thành tiền đã trừ chiết khấu và **đã gồm VAT** (như lưu trên phiếu)
- **Trả**: Cách tính: Tổng thành tiền các phiếu nhập kho có khách hàng và nhân viên sale (hàng khách trả), ngày nhập trong khoảng; đã gồm VAT
- **Giảm giá**: Cách tính: Tổng thành tiền các phiếu giảm giá có khách hàng và nhân viên sale, ngày giảm giá trong khoảng — **tính cả phiếu chưa duyệt** (thử 11/10/2026: GG00113311 chưa duyệt vẫn trừ 20.000)
- **Dịch vụ**: Cách tính: Tổng thành tiền các phiếu bán dịch vụ có khách hàng và nhân viên sale, ngày bán trong khoảng (đã trừ phần tất toán, đã gồm VAT)
- **Doanh số**: Cách tính: Bán + Dịch vụ − Trả − Giảm giá
- **Doanh số KPI**: Cách tính: Bán − Trả − Giảm giá
- **Loại KH**: Cách tính: Xét **từng ngày phát sinh**: **Khách mới** nếu ngày phát sinh cách **ngày mua đầu tiên** của khách không quá 6 tháng (tính tròn tháng); còn lại **Khách cũ**. Ngày mua đầu tiên = lần xuất kho đầu tiên của khách trong toàn bộ lịch sử. Khách chưa từng có phiếu xuất (chỉ mua dịch vụ) tính là **Khách cũ**
- **Loại hàng**: Cách tính: Theo loại của dòng hàng: hàng trơn → **Ván trơn**; thành phẩm → **Ván phủ**; còn lại (nguyên liệu, khác) → **Khác**. Riêng giảm giá lấy loại theo danh mục hàng hoá

Dữ liệu: chứng từ của **mọi chi nhánh** trong hệ thống bạn đang đăng nhập (chi nhánh đang truy cập không lọc số liệu; chế độ **Loại hàng** có cột **Mã chi nhánh** để tách); chỉ khách thuộc **nhóm khách hàng được phân** cho bạn (quản trị hệ thống thấy mọi khách). Chứng từ **không có nhân viên sale** hoặc **không có khách hàng** bị bỏ qua.

## 7. Kiểm tra sau khi thực hiện

Bạn có doanh số theo nhân viên, khách hàng (hoặc loại hàng), tách khách mới / cũ, với hai con số **Doanh số** (gồm dịch vụ) và **Doanh số KPI** (không gồm dịch vụ).

## 8. Những điều cần lưu ý

⚠️ **Doanh số** gồm bán dịch vụ; **Doanh số KPI** không gồm dịch vụ. Khi đối chiếu số dùng tính lương KPI, bắt đầu từ cột **Doanh số KPI**, kiểm phạm vi khách/nhân viên/loại hàng và được người phụ trách duyệt trước khi dùng tính lương.

⚠️ Cột **Giảm giá** trừ cả phiếu giảm giá **chưa duyệt / chưa xác nhận** — doanh số có thể giảm trước khi phiếu giảm giá được duyệt.

⚠️ Màn chỉ tính chứng từ **có nhân viên sale**. Phiếu xuất, phiếu trả, phiếu giảm giá quên chọn nhân viên sale **không có trong doanh số** — nên tổng ở đây có thể nhỏ hơn **Xuất bán chi tiết** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT BÁN CHI TIẾT](/bai-viet/2026-11-07-bh-b05-0-tong-quan-man-hinh-thong-ke-xuat-ban-chi-tiet/)) hay **Khách trả hàng** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-b06-0-tong-quan-man-hinh-thong-ke-khach-tra-hang/)).

⚠️ Các màn khác tính doanh số khác nhau:

- **Doanh số bán hàng – cột Doanh số**: Trừ giảm giá: Có; Gồm dịch vụ: Có; Cần nhân viên sale: Có
- **Doanh số bán hàng – cột Doanh số KPI**: Trừ giảm giá: Có; Gồm dịch vụ: Không; Cần nhân viên sale: Có
- **Tần suất mua hàng ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TẦN SUẤT MUA HÀNG](/bai-viet/2026-11-07-bh-b01-0-tong-quan-man-hinh-thong-ke-tan-suat-mua-hang/))**: Trừ giảm giá: Không; Gồm dịch vụ: Không; Cần nhân viên sale: Không
- **Doanh số bảng giá ([TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BẢNG GIÁ](/bai-viet/2026-11-07-bh-b11-0-tong-quan-man-hinh-thong-ke-doanh-so-bang-gia/))**: Trừ giảm giá: Không; Gồm dịch vụ: Không; Cần nhân viên sale: Không

⚠️ Mỗi thành phần có ngày riêng: **Bán** theo ngày xuất kho, **Trả** theo ngày nhập kho, **Giảm giá** theo ngày giảm giá, **Dịch vụ** theo ngày bán dịch vụ. Bán hàng cuối tháng nhưng xuất đầu tháng sau thì phần Bán rơi vào tháng sau; chọn cùng khoảng ngày nguồn khi đối chiếu.

⚠️ Một khách có thể có **hai dòng** trong cùng kỳ: phần phát sinh trong 6 tháng đầu tính **Khách mới**, phần sau đó tính **Khách cũ**.

⚠️ Số liệu chỉ của hệ thống bạn đang đăng nhập. Báo cáo **Doanh số bán hàng** ở nhóm **Báo cáo tổng hợp** cộng thêm các đơn vị khác nên số lớn hơn; lương KPI cũng lấy từ nhiều đơn vị và **không** giới hạn theo nhóm khách hàng của người xem, chỉ tính **Ván trơn** và **Ván phủ**.

⚠️ Hai người được phân nhóm khách hàng khác nhau thấy **tổng khác nhau** cho cùng khoảng ngày.

### Doanh số của nhân viên thấp hơn thực tế 

Nguyên nhân: phiếu xuất / phiếu bán dịch vụ không chọn **nhân viên sale**; khách không thuộc nhóm khách hàng được phân cho bạn; hàng giao (xuất kho) sau khoảng ngày.
Cách xử lý: bổ sung nhân viên sale trên chứng từ ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/), [TỔNG QUAN MÀN HÌNH PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-0-tong-quan-man-hinh-phieu-ban-dich-vu/)); liên hệ quản trị hệ thống phân nhóm khách hàng; mở rộng khoảng ngày.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập** màn hình.
Cách xử lý: liên hệ quản trị hệ thống.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Doanh số có gồm VAT không?**
Có. Bán, Trả, Dịch vụ lấy thành tiền trên chứng từ, đã trừ chiết khấu và cộng VAT.

**Vì sao cùng một khách có hai dòng?**
Khách vừa có phát sinh khi còn là **Khách mới** vừa có phát sinh sau mốc 6 tháng (**Khách cũ**), hoặc khách được nhiều nhân viên sale bán.

**Tổng hai chế độ Khách hàng và Loại hàng có bằng nhau không?**
Thông thường bằng nhau. Chế độ Khách hàng cộng tổng tiền của phiếu, chế độ Loại hàng cộng tiền từng dòng hàng; nếu tổng phiếu không khớp tổng dòng (dữ liệu cũ) thì hai chế độ lệch nhau.

## 11. Công việc tiếp theo

```text
Doanh số bán hàng → xem chi tiết từng dòng xuất (BH-B05.0)
                  → xem hàng trả (BH-B06.0), giảm giá (BH-B07.0), dịch vụ (BH-B04.0)
                  → tần suất mua của khách (BH-B01.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH THỐNG KÊ TẦN SUẤT MUA HÀNG](/bai-viet/2026-11-07-bh-b01-0-tong-quan-man-hinh-thong-ke-tan-suat-mua-hang/) – Tổng quan màn hình thống kê Tần suất mua hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-b04-0-tong-quan-man-hinh-thong-ke-ban-dich-vu/) – Tổng quan màn hình thống kê Bán dịch vụ
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT BÁN CHI TIẾT](/bai-viet/2026-11-07-bh-b05-0-tong-quan-man-hinh-thong-ke-xuat-ban-chi-tiet/) – Tổng quan màn hình thống kê Xuất bán chi tiết
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-b06-0-tong-quan-man-hinh-thong-ke-khach-tra-hang/) – Tổng quan màn hình thống kê Khách trả hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ GIẢM GIÁ CHI TIẾT](/bai-viet/2026-11-07-bh-b07-0-tong-quan-man-hinh-thong-ke-giam-gia-chi-tiet/) – Tổng quan màn hình thống kê Giảm giá chi tiết
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BẢNG GIÁ](/bai-viet/2026-11-07-bh-b11-0-tong-quan-man-hinh-thong-ke-doanh-so-bang-gia/) – Tổng quan màn hình thống kê Doanh số bảng giá
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
