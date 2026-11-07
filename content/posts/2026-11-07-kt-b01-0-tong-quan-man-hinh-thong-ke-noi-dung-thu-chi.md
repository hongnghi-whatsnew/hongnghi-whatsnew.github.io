---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ NỘI DUNG THU CHI"
date: "2026-11-07"
summary: "Màn hình Nội dung thu chi liệt kê chứng từ theo nội dung thu chi, gồm cả cấn trừ không đi qua quỹ và chuyển tiền nội bộ trong khoảng ngày bạn chọn, tại chi nhánh đang làm việc, gom nhóm theo nội dung thu chi (danh mục Nội dung thu chi)."
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

Màn hình **Nội dung thu chi** liệt kê chứng từ theo **nội dung thu chi**, gồm cả cấn trừ không đi qua quỹ và chuyển tiền nội bộ trong khoảng ngày bạn chọn, tại **chi nhánh đang làm việc**, **gom nhóm theo nội dung thu chi** (danh mục Nội dung thu chi). Mỗi dòng là một chứng từ: phiếu thu, phiếu chi, phiếu cấn trừ, chuyển tiền nội bộ hoặc lệnh vay.

Bạn dùng màn hình này khi:

- Xem trong kỳ đã thu, chi bao nhiêu cho từng nội dung (tiền điện, lương, thu công nợ…).
- Đối chiếu chi phí theo nội dung với sổ sách kế toán.
- Tìm nhanh chứng từ thu chi theo người nộp / nhận, quỹ, nhân viên lập.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã khai báo danh mục **Nội dung thu chi** (sổ Thiết lập danh mục) và đã có chứng từ thu chi trong khoảng ngày cần xem (KT-A02 đến KT-A06).

## 2. Mở chức năng

**Thống kê thu chi → Nội dung thu chi**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ NỘI DUNG THU CHI](/posts/2026-11-07-kt-b01-0-tong-quan-man-hinh-thong-ke-noi-dung-thu-chi/hinh-01-man-hinh-noi-dung-thu-chi.png)

Hình 1 chụp ngày 12/10/2026, khoảng **Hôm nay**: lưới báo **TỔNG CỘNG: 207** (20 trang) vì mọi nội dung trong danh mục đều có một dòng, kể cả nội dung không phát sinh; nhóm đầu đang mở chỉ có một dòng trống (xem phần “Những điều cần lưu ý”).

- **Ô khoảng ngày**: Chức năng: Chọn khoảng **ngày chứng từ**. Lần đầu là **Hôm nay**, lần sau nhớ lựa chọn gần nhất; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột. **Hiện không tìm ra chứng từ** (xem phần “Vướng mắc thường gặp”) — lọc bằng ô **Mã nội dung** (Hình 2); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng nhóm Nội dung: …**: Chức năng: Mỗi nội dung thu chi một nhóm, mặc định **thu gọn**; bấm mũi tên để mở; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: **TỔNG CỘNG: n** số dòng (đếm cả dòng trống); tổng Tiền thu, Tiền giảm thu, Tiền chi, Tiền giảm chi

**Các cột trên lưới:**

- **Nội dung**: Ý nghĩa: Cột đầu tiên, **luôn trống**. Tên nội dung hiện ở dòng nhóm **Nội dung: …**
- **Mã nội dung**: Ý nghĩa: Mã của nội dung thu chi
- **Định khoản**: Ý nghĩa: Phần **ghi chú** khai trong danh mục Nội dung thu chi (thường ghi tài khoản, ví dụ `,331,111,112`)
- **Ngày phát sinh**: Ý nghĩa: Ngày thu / ngày chi / ngày cấn trừ / ngày chuyển / ngày vay
- **Mã phiếu**: Ý nghĩa: Mã chứng từ
- **Người nộp/nhận**: Ý nghĩa: Người nộp (phiếu thu) hoặc người nhận (phiếu chi)
- **Tên rút gọn**: Ý nghĩa: Xem phần “Những điều cần lưu ý”
- **Nhân viên**: Ý nghĩa: Người lập chứng từ
- **Quỹ thu/chi**: Ý nghĩa: Quỹ / tài khoản nhận hoặc chi tiền
- **Diễn giải**: Ý nghĩa: Ghi chú của chứng từ
- **Tiền thu**: Ý nghĩa: Số tiền thu
- **Tiền giảm thu**: Ý nghĩa: Số tiền giảm trên phiếu thu
- **Tiền chi**: Ý nghĩa: Số tiền chi
- **Tiền giảm chi**: Ý nghĩa: Số tiền giảm trên phiếu chi

Màn hình không có thao tác nhấp đúp trên dòng. Muốn xem chứng từ gốc, mở màn tương ứng (xem phần “Thực hiện trên phần mềm”) hoặc dùng **Chi tiết quỹ** ở màn **Tồn quỹ** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)).

## 4. Trình tự công việc

```text
Phiếu thu (KT-A03), Phiếu chi (KT-A04), Phiếu cấn trừ (KT-A05),
Chuyển tiền nội bộ (KT-A06), Lệnh vay (KT-A02)
                    ↓
Nội dung thu chi (gom theo nội dung, theo ngày chứng từ)
├── Tìm / lọc / nhóm / chọn cột (GEN-04)
└── Xuất Excel (GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Xem thu chi trong tháng theo nội dung**: Cách làm: Chọn **Tháng này** ở ô, mở từng nhóm; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem một nội dung**: Cách làm: Gõ mã vào ô lọc cột **Mã nội dung** (Hình 2); Bài hướng dẫn: Bước dưới
- **Xem theo quỹ**: Cách làm: Lọc cột **Quỹ thu/chi**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Sửa chứng từ sai nội dung**: Cách làm: Vào màn **Phiếu thu** / **Phiếu chi**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/), [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/)

### Xem tổng chi theo từng nội dung trong tháng

**Bước 1 –** Mở **Thống kê thu chi → Nội dung thu chi**.

**Bước 2 –** Chọn **Tháng này** (hoặc tháng cần xem) ở ô khoảng ngày.

**Bước 3 –** Đọc dòng nhóm của từng **Nội dung**: tổng **Tiền thu**, **Tiền chi** của nhóm hiện ngay trên dòng nhóm.

**Bước 4 –** Bấm mũi tên ở đầu dòng nhóm để xem từng chứng từ.

**Bước 5 –** Bấm **Xuất Excel** nếu cần gửi số liệu.

### Xem chứng từ của một nội dung thu chi

![Hình 2: Lọc theo Mã nội dung "43"](/posts/2026-11-07-kt-b01-0-tong-quan-man-hinh-thong-ke-noi-dung-thu-chi/hinh-02-loc-theo-ma-noi-dung.png)

- **Ô lọc cột Mã nội dung**: Ý nghĩa: Gõ mã nội dung (ví dụ `43`)
- **Dòng nhóm**: Ý nghĩa: Chỉ còn nhóm của nội dung đã lọc, tự mở
- **Thanh bộ lọc**: Ý nghĩa: **[Mã nội dung] Chứa '43'**; bấm **Loại bỏ** để bỏ lọc

**Bước 1 –** Chọn khoảng ngày ở ô  của Hình 1.

**Bước 2 –** Gõ **mã nội dung** vào ô lọc dưới tiêu đề cột **Mã nội dung**. Không dùng ô **Tìm kiếm…** (xem phần “Vướng mắc thường gặp”).

**Bước 3 –** Lưới còn nhóm của nội dung đó, mở sẵn các chứng từ. Kéo thanh cuộn ngang để xem **Tiền thu**, **Tiền chi**.

**Bước 4 –** Bấm **Loại bỏ** ở thanh bộ lọc cuối lưới để xem lại mọi nội dung.

## 6. Giải thích các thông tin trên màn hình

Mỗi loại chứng từ được đưa vào như sau:

- **Phiếu thu**: Nội dung lấy theo: Nội dung thu chi của phiếu; Tiền thu: Số tiền thu; **Tiền giảm thu** = số tiền giảm; Quỹ thu/chi: Quỹ thu
- **Phiếu chi**: Nội dung lấy theo: Nội dung thu chi của phiếu; Tiền chi: Số tiền chi; **Tiền giảm chi** = số tiền giảm; Quỹ thu/chi: Quỹ chi
- **Phiếu cấn trừ**: Nội dung lấy theo: Nội dung cấn trừ; Tiền thu: Số tiền cấn trừ; Tiền chi: Số tiền cấn trừ (cả hai cột cùng số); Quỹ thu/chi: Trống
- **Chuyển tiền nội bộ**: Nội dung lấy theo: 3 dòng: nội dung thu, nội dung chi, nội dung chịu phí; Tiền thu: Dòng thu: số tiền chuyển; Tiền chi: Dòng chi: số tiền chuyển; dòng phí: phí chuyển; Quỹ thu/chi: Quỹ nhận / quỹ chuyển / quỹ chịu phí
- **Lệnh vay**: Nội dung lấy theo: Nhóm cố định **Vay tiền ngân hàng (Lệnh vay)**; Tiền thu: Số tiền vay; Quỹ thu/chi: Quỹ nhận tiền vay

Dữ liệu được lấy khi: **ngày chứng từ** nằm trong khoảng ngày (so theo ngày, bỏ giờ) và chứng từ thuộc **chi nhánh đang làm việc**. Dòng được xếp theo **Mã nội dung** rồi **Ngày phát sinh**.

## 7. Kiểm tra sau khi thực hiện

Bạn xem được số tiền thu, chi của từng nội dung thu chi trong kỳ, kèm danh sách chứng từ tạo nên số đó.

## 8. Những điều cần lưu ý

⚠️ **Phiếu cấn trừ** hiện ở **cả** cột **Tiền thu** và **Tiền chi** với cùng số tiền. Khi cộng tổng thu, tổng chi của cả màn hình, hai số này triệt tiêu nhau về dòng tiền nhưng làm **tổng thu và tổng chi cùng tăng**.

⚠️ Một lần **chuyển tiền nội bộ** sinh **3 dòng** (thu, chi, phí). Tiền chuyển giữa các quỹ của công ty xuất hiện ở cả **Tiền thu** và **Tiền chi**, nên tổng thu / tổng chi của màn hình không phải là dòng tiền thực vào / ra công ty.

⚠️ Mọi nội dung trong danh mục **đều hiện thành nhóm**, kể cả khi trong kỳ **chưa có chứng từ nào**: nhóm mở ra chỉ có một dòng trống, và dòng trống này **được đếm** vào **TỔNG CỘNG** (Hình 1: 207 dòng). Đọc số chứng từ thật bằng cách lọc theo **Mã nội dung**.

⚠️ Cột **Nội dung** đầu lưới luôn trống; cột **Định khoản** có thể bắt đầu bằng dấu phẩy (`,331,111,112`) — do cách ghi trong danh mục, không ảnh hưởng số tiền.

⚠️ Cột **Tên rút gọn** hiện chưa có số liệu (luôn trống) — đã báo bộ phận IT. Muốn biết khách hàng / nhà cung cấp, xem cột **Người nộp/nhận** hoặc dùng **Chi tiết quỹ** ở màn **Tồn quỹ**.

⚠️ Màn hình lấy theo **chi nhánh đang làm việc**, không giới hạn theo quỹ được phân cho tài khoản (khác màn **Tồn quỹ**).

### Gõ ô Tìm kiếm… không ra chứng từ (Lỗi hệ thống)

Nguyên nhân: lưới nhóm theo nội dung và chỉ tải chứng từ khi mở nhóm, nên ô **Tìm kiếm…** không tìm thấy mã phiếu, người nộp / nhận… trong nhóm đang thu gọn.
Cách xử lý: lọc bằng ô **Mã nội dung** (Hình 2) hoặc lọc cột của nhóm đã mở; báo bộ phận IT nếu cần tìm theo mã phiếu.

### Thiếu chứng từ so với màn Phiếu thu / Phiếu chi 

Nguyên nhân: đang ở chi nhánh khác; khoảng ngày chưa đúng; chứng từ không chọn nội dung thu chi.
Cách xử lý: kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)); chọn lại khoảng ngày; bổ sung nội dung thu chi trên chứng từ.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập** màn hình.
Cách xử lý: liên hệ quản trị hệ thống.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Vì sao tổng thu của màn này lớn hơn số tiền thực thu vào công ty?**
Vì màn hình cộng cả phiếu cấn trừ (ghi cả thu lẫn chi) và tiền chuyển nội bộ giữa các quỹ. Muốn xem tiền thực có trong từng quỹ, dùng màn **Tồn quỹ** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)).

**Dòng "Vay tiền ngân hàng (Lệnh vay)" ở đâu ra?**
Từ màn **Lệnh vay**: mỗi lệnh vay trong kỳ là một dòng **Tiền thu** vào quỹ nhận tiền vay.

**Cột Định khoản lấy từ đâu?**
Từ phần ghi chú của nội dung trong danh mục **Nội dung thu chi**. Sửa ở danh mục thì màn này đổi theo.

## 11. Công việc tiếp theo

```text
Nội dung thu chi → đối chiếu với sổ kế toán → sửa chứng từ sai nội dung (KT-A03, KT-A04)
                 → xem tồn từng quỹ (KT-B02.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/) – Tổng quan màn hình thống kê Tồn quỹ
- [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/) – Tổng quan màn hình Phiếu thu
- [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/) – Tổng quan màn hình Phiếu chi
- [TỔNG QUAN MÀN HÌNH PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-0-tong-quan-man-hinh-phieu-can-tru/) – Tổng quan màn hình Phiếu cấn trừ
- [TỔNG QUAN MÀN HÌNH CHUYỂN TIỀN NỘI BỘ](/bai-viet/2026-11-07-kt-a06-0-tong-quan-man-hinh-chuyen-tien-noi-bo/) – Tổng quan màn hình Chuyển tiền nội bộ
- [TỔNG QUAN MÀN HÌNH LỆNH VAY](/bai-viet/2026-11-07-kt-a02-0-tong-quan-man-hinh-lenh-vay/) – Tổng quan màn hình Lệnh vay
