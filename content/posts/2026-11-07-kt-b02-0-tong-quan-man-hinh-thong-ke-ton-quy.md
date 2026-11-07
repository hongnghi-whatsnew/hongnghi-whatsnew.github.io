---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ"
date: "2026-11-07"
summary: "Màn hình Tồn quỹ cho biết với từng quỹ / tài khoản ngân hàng: tồn đầu kỳ, tiền thu, tiền chi trong kỳ và tồn cuối kỳ, tại chi nhánh đang làm việc."
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

Màn hình **Tồn quỹ** cho biết với **từng quỹ / tài khoản ngân hàng**: tồn đầu kỳ, tiền thu, tiền chi trong kỳ và tồn cuối kỳ, tại **chi nhánh đang làm việc**. Từ mỗi quỹ bạn xem được danh sách chứng từ làm thay đổi quỹ và in **báo cáo tồn quỹ**.

Bạn dùng màn hình này khi:

- Kiểm quỹ tiền mặt cuối ngày, đối chiếu số dư tài khoản ngân hàng với sổ phụ.
- Xem trong kỳ một quỹ đã thu, chi những chứng từ nào.
- In báo cáo thu chi tồn quỹ gửi quản lý.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Tài khoản được phân **quỹ** cần xem (do quản trị hệ thống thiết lập).
- Đang làm việc đúng **chi nhánh** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Quỹ đang **kích hoạt** trong danh mục **Quỹ tài khoản** (sổ Thiết lập danh mục).

## 2. Mở chức năng

**Thống kê thu chi → Tồn quỹ**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ THU CHI TỒN QUỸ](/posts/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/hinh-01-man-hinh-ton-quy.png)

Hình 1 chụp ngày 12/10/2026, khoảng **Hôm nay**, ô chọn quỹ để riêng **QUỸ TIỀN MẶT THÀNH PHỐ**.

- **Ô khoảng ngày**: Chức năng: Chọn kỳ xem. Lần đầu là **Hôm nay**, lần sau nhớ lựa chọn gần nhất; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Ô chọn quỹ (bên trái ô khoảng ngày)**: Chức năng: Chọn một hoặc nhiều quỹ; quỹ đã chọn hiện thành thẻ có dấu **×** để bỏ. Để trống = mọi quỹ được phân
- **Nút In báo cáo (màu vàng)**: Chức năng: Mở bản xem trước báo cáo tồn quỹ theo kỳ và các quỹ đang chọn; Hướng dẫn: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…, hàng lọc**: Chức năng: Ẩn / hiện cột, tìm, lọc; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: Tổng Tồn đầu, Tiền thu, Tiền chi, Tồn cuối kỳ (không có chữ **TỔNG CỘNG** và số dòng)

**Các cột trên lưới:**

- **Quỹ**: Ý nghĩa: Tên quỹ / tài khoản
- **Mã quỹ**: Ý nghĩa: Ẩn sẵn
- **Số tài khoản, Ngân hàng**: Ý nghĩa: Số tài khoản và ngân hàng của quỹ (trống với quỹ tiền mặt)
- **Tồn đầu**: Ý nghĩa: Số tiền trong quỹ **trước ngày đầu** của kỳ
- **Tiền thu**: Ý nghĩa: Tiền vào quỹ trong kỳ (xem phần “Giải thích các thông tin trên màn hình”)
- **Tiền giảm thu, Tiền giảm chi**: Ý nghĩa: Xem phần “Những điều cần lưu ý”
- **Tiền chi**: Ý nghĩa: Tiền ra khỏi quỹ trong kỳ (xem phần “Giải thích các thông tin trên màn hình”)
- **Tồn cuối kỳ**: Ý nghĩa: Số tiền trong quỹ **cuối ngày cuối** của kỳ
- **Tồn cuối**: Ý nghĩa: Ẩn sẵn; số tiền hiện có trong quỹ **tại thời điểm xem** (không theo kỳ)

**Menu chuột phải trên một dòng quỹ** — **bấm chọn dòng quỹ trước** (dòng được tô xám), rồi mới chuột phải; chưa chọn dòng thì menu không hiện:

- **Chi tiết quỹ**: Chức năng: Mở hộp thoại **QUỸ - CHI TIẾT: "<mã quỹ>"** liệt kê chứng từ thu chi của quỹ trong kỳ

Chuột phải **tiêu đề cột** có **Khôi phục bố cục** để đưa lưới về bố cục mặc định ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

![Hình 2: Hộp thoại QUỸ - CHI TIẾT](/posts/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/hinh-02-hop-thoai-chi-tiet-quy.png)

Hình 2: quỹ tiền mặt mã **TIENMATTP**, ngày 12/10/2026 có 7 dòng — 3 phiếu thu, 2 phiếu chi, 2 dòng chuyển tiền nội bộ (CN…).

- **Tải lại**: Chức năng: Lấy lại danh sách
- **Lưới chứng từ**: Chức năng: Cột **STT**, **Ngày phát sinh**, **Mã phiếu**, **Nội dung**, **Ghi chú**; cuộn ngang thấy **Nhân viên**, **Người nộp/nhận**, **Tên rút gọn**, **Tiền thu**, **Tiền chi**, **Tồn cuối kỳ**
- **Dòng tổng**: Chức năng: **TỔNG CỘNG:**; cuộn ngang thấy **Tồn đầu kỳ: …**, tổng Tiền thu, tổng Tiền chi, **Tồn cuối kỳ: …**
- **Nhấp đúp một dòng**: Chức năng: Mở chứng từ gốc ở chế độ xem: **THÔNG TIN PHIẾU THU**, **THÔNG TIN PHIẾU CHI**, **THÔNG TIN LỆNH VAY** (phiếu cấn trừ không phát sinh quỹ nên không có dòng tại đây)

Đóng hộp thoại bằng dấu **×** góc trên phải.

![Hình 3: Bản xem trước In báo cáo tồn quỹ](/posts/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/hinh-03-xem-truoc-in-bao-cao-ton-quy.png)

- **Tiêu đề TỔNG HỢP CHI PHÍ QUẢN LÝ HOẠT ĐỘNG CÔNG TY**: Ghi chú: Khác tên màn hình; dưới tiêu đề là **Thời điểm báo cáo:**
- **Bảng chứng từ**: Ghi chú: **STT**, **NỘI DUNG**, **NGƯỜI NHẬN** (người nộp với phiếu thu, quỹ đối ứng với chuyển tiền nội bộ), **DIỄN GIẢI**, **TÊN QUỸ**, **THU**, **CHI**
- **Bảng tổng theo quỹ**: Ghi chú: **STT**, **TÊN QUỸ**, **SỐ DƯ ĐẦU KỲ**, **PHÁT SINH TRONG KỲ** (**THU**, **CHI**), **SỐ DƯ CUỐI KỲ**, dòng **TỔNG CỘNG:**

Thanh trên cùng của bản xem trước: **In**, **Xuất**, chuyển trang, phóng to, **Sửa mẫu**, **Đóng** ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)).

## 4. Trình tự công việc

```text
Phiếu thu / Phiếu chi / Chuyển tiền nội bộ / Lệnh vay
                    ↓  (cập nhật số tiền hiện có của quỹ)
Tồn quỹ: Tồn đầu → Tiền thu, Tiền chi → Tồn cuối kỳ
├── Chuột phải → Chi tiết quỹ → nhấp đúp → chứng từ gốc
├── In báo cáo (GEN-06)
└── Xuất Excel (GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Kiểm quỹ cuối ngày**: Cách làm: Chọn **Hôm nay**, đọc **Tồn cuối kỳ**
- **Xem riêng một vài quỹ**: Cách làm: Chọn quỹ ở ô, bấm **OK**
- **Xem chứng từ của một quỹ**: Cách làm: Bấm chọn dòng quỹ, chuột phải → **Chi tiết quỹ**
- **In báo cáo**: Cách làm: Bấm **In báo cáo**; Bài hướng dẫn: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Đối chiếu số dư tài khoản ngân hàng cuối tháng

**Bước 1 –** Mở **Thống kê thu chi → Tồn quỹ**.

**Bước 2 –** Chọn **Tháng trước** (hoặc tháng cần đối chiếu) ở ô khoảng ngày.

**Bước 3 –** Ở ô chọn quỹ, đánh dấu tài khoản ngân hàng cần đối chiếu, bấm **OK**.

**Bước 4 –** So **Tồn cuối kỳ** với số dư cuối tháng trên sổ phụ ngân hàng.

**Bước 5 –** Nếu lệch, bấm chọn dòng quỹ, chuột phải → **Chi tiết quỹ**, so từng dòng với sổ phụ; nhấp đúp dòng nghi sai để xem chứng từ gốc.

## 6. Giải thích các thông tin trên màn hình

- **Tiền thu**: Cách tính: Phiếu thu vào quỹ + tiền chuyển nội bộ **đến** quỹ + lệnh vay nhận vào quỹ, có ngày trong kỳ
- **Tiền chi**: Cách tính: Phiếu chi từ quỹ + tiền chuyển nội bộ **đi** từ quỹ + **phí chuyển** do quỹ chịu, có ngày trong kỳ
- **Tồn cuối kỳ**: Cách tính: Tồn hiện có của quỹ − (thu, vay, chuyển đến **sau** kỳ) + (chi, chuyển đi, phí **sau** kỳ)
- **Tồn đầu**: Cách tính: Tồn cuối kỳ − Tiền thu + Tiền chi

Như vậy luôn có: **Tồn cuối kỳ = Tồn đầu + Tiền thu − Tiền chi**.

Quỹ được hiện khi thoả **đủ**: quỹ **đang kích hoạt**; quỹ nằm trong danh sách quỹ được phân cho tài khoản (trừ quản trị hệ thống); nằm trong các quỹ đã chọn ở ô  (nếu có chọn); có ít nhất một số khác 0 (tồn đầu, thu, chi hoặc tồn cuối). Chứng từ lấy theo **chi nhánh đang làm việc**, so ngày bỏ giờ.

## 7. Kiểm tra sau khi thực hiện

Bạn biết số tồn đầu, thu, chi, tồn cuối của từng quỹ trong kỳ, xem được chứng từ tạo nên số đó và in được báo cáo tồn quỹ.

## 8. Những điều cần lưu ý

⚠️ Tồn đầu / Tồn cuối kỳ được **tính lùi từ số tiền hiện có của quỹ**. Sửa hoặc xoá một chứng từ của tháng cũ sẽ làm thay đổi tồn của **mọi kỳ** sau ngày chứng từ đó. Số đã in / báo cáo trước đó có thể không còn khớp.

⚠️ Hai cột **Tiền giảm thu** và **Tiền giảm chi** hiện chưa có số liệu (luôn trống) — đã báo bộ phận IT. **Tiền thu**, **Tiền chi** là số tiền trên phiếu, không trừ phần giảm.

⚠️ Màn hình chỉ hiện các **quỹ bạn được phân**. Hai người khác phân quỹ có thể thấy **tổng khác nhau**.

⚠️ Quỹ **ngừng kích hoạt** không hiện, kể cả khi vẫn còn tiền.

⚠️ Trong **Chi tiết quỹ**, nhấp đúp dòng **chuyển tiền nội bộ** không mở chứng từ; mở màn **Chuyển tiền nội bộ** ([TỔNG QUAN MÀN HÌNH CHUYỂN TIỀN NỘI BỘ](/bai-viet/2026-11-07-kt-a06-0-tong-quan-man-hinh-chuyen-tien-noi-bo/)) để xem. Cột **Tồn cuối kỳ** trên từng dòng chi tiết để trống; số tồn cuối xem ở dòng tổng.

⚠️ **Phiếu cấn trừ** không làm thay đổi quỹ nên không có trong màn này.

⚠️ Cột **Số tài khoản** hiện **số tài khoản thật** của các quỹ ngân hàng. Chọn riêng quỹ cần xem (ô) hoặc ẩn cột trước khi chụp màn hình, xuất Excel gửi ra ngoài.

⚠️ Bản in có tiêu đề **TỔNG HỢP CHI PHÍ QUẢN LÝ HOẠT ĐỘNG CÔNG TY** (không phải "tồn quỹ"); ở dòng **TỔNG CỘNG** của bảng quỹ, ba ô số dư đầu kỳ, thu, chi dùng dấu chấm phân cách nghìn (13.355.000), các ô khác dùng dấu phẩy — chỉ khác cách viết, số không đổi.

### Không thấy một quỹ 

Nguyên nhân: tài khoản chưa được phân quỹ; quỹ ngừng kích hoạt; trong kỳ quỹ không có số nào khác 0; ô chọn quỹ đang lọc quỹ khác.
Cách xử lý: liên hệ quản trị hệ thống phân quỹ / kích hoạt lại; xoá chọn ở ô quỹ để xem mọi quỹ.

### Tồn cuối kỳ khác số dư thực tế 

Nguyên nhân: chứng từ lập sai quỹ, sai ngày, sai chi nhánh; chưa lập chứng từ cho giao dịch đã phát sinh.
Cách xử lý: dùng **Chi tiết quỹ** dò từng dòng; sửa chứng từ ở màn gốc.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập** màn hình.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Tồn cuối kỳ khác cột Tồn cuối thế nào?**
**Tồn cuối kỳ** là số tiền tại ngày cuối của kỳ bạn chọn. **Tồn cuối** (ẩn sẵn) là số tiền quỹ đang có tại lúc xem, gồm cả chứng từ sau kỳ.

**Tiền vay ngân hàng có tính vào Tiền thu không?**
Có. Lệnh vay nhận tiền vào quỹ nào thì cộng vào **Tiền thu** của quỹ đó.

**Báo cáo in có giống lưới không?**
Báo cáo dùng cùng số liệu với lưới (theo kỳ và các quỹ đang chọn): phần trên liệt kê từng chứng từ, phần dưới là bảng số dư đầu kỳ, thu, chi, số dư cuối kỳ của từng quỹ (Hình 3).

**Không thấy menu Chi tiết quỹ khi chuột phải?**
Bấm chọn dòng quỹ trước (dòng tô xám) rồi mới chuột phải.

## 11. Công việc tiếp theo

```text
Tồn quỹ → lệch với thực tế → Chi tiết quỹ → sửa chứng từ (KT-A03, KT-A04, KT-A06)
        → xem thu chi theo nội dung (KT-B01.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH THỐNG KÊ NỘI DUNG THU CHI](/bai-viet/2026-11-07-kt-b01-0-tong-quan-man-hinh-thong-ke-noi-dung-thu-chi/) – Tổng quan màn hình thống kê Nội dung thu chi
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ TÌNH HÌNH HOẠT ĐỘNG CÔNG TY](/bai-viet/2026-11-07-kt-b03-0-tong-quan-man-hinh-thong-ke-tinh-hinh-hoat-dong-cong-ty/) – Tổng quan màn hình thống kê Tình hình cty
- [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/) – Tổng quan màn hình Phiếu thu
- [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/) – Tổng quan màn hình Phiếu chi
- [TỔNG QUAN MÀN HÌNH CHUYỂN TIỀN NỘI BỘ](/bai-viet/2026-11-07-kt-a06-0-tong-quan-man-hinh-chuyen-tien-noi-bo/) – Tổng quan màn hình Chuyển tiền nội bộ
- [TỔNG QUAN MÀN HÌNH LỆNH VAY](/bai-viet/2026-11-07-kt-a02-0-tong-quan-man-hinh-lenh-vay/) – Tổng quan màn hình Lệnh vay
