---
title: "TỔNG QUAN MÀN HÌNH TỔNG HỢP MƯỢN HÀNG"
date: "2026-11-07"
summary: "Màn hình Tổng hợp mượn hàng cho biết, theo từng đối tác (kho đại diện) và từng mặt hàng, số hàng mượn qua lại đầu kỳ – mượn trong kỳ – trả trong kỳ – cuối kỳ, cho cả hai chiều: - Cho mượn: hàng công ty cho đối tác mượn (Phiếu xuất cho mượn / Phiếu nhập trả)."
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

Màn hình **Tổng hợp mượn hàng** cho biết, theo **từng đối tác (kho đại diện)** và **từng mặt hàng**, số hàng mượn qua lại **đầu kỳ – mượn trong kỳ – trả trong kỳ – cuối kỳ**, cho cả hai chiều:

- **Cho mượn**: hàng công ty cho đối tác mượn (Phiếu xuất cho mượn / Phiếu nhập trả). Số **dương** = đối tác **còn giữ** của công ty.
- **Đi mượn**: hàng công ty mượn của đối tác (Phiếu nhập mượn / Phiếu xuất trả). Số **âm** = công ty **còn nợ** đối tác.

Bạn dùng màn hình này khi:

- Đối chiếu số hàng còn ở đối tác / còn phải trả đối tác cuối tháng.
- Nhắc đối tác trả hàng hoặc lên kế hoạch trả hàng mượn.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có phiếu mượn / trả (KHO-B01 → KHO-B04).

## 2. Mở chức năng

**Thống kê mượn hàng → Tổng hợp mượn hàng**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ HÀNG MƯỢN (Tổng hợp mượn hàng)](/posts/2026-11-07-kho-d01-0-tong-quan-man-hinh-tong-hop-muon-hang/hinh-01-man-hinh-tong-hop-muon-hang.png)

- **Ô khoảng ngày**: Chức năng: Chọn kỳ xem. Lần đầu là **Hôm nay**, lần sau nhớ lựa chọn gần nhất; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Hàng lọc dưới tiêu đề cột**: Chức năng: Lọc từng cột, ví dụ lọc **Nghiệp vụ**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: **TỔNG CỘNG: <số dòng>**; tổng Đầu kỳ, Số lượng mượn, Số lượng trả, Cuối kỳ
- **Tạo Bộ lọc**: Chức năng: Lập bộ lọc nâng cao; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)

Tiêu đề màn hiển thị **THỐNG KÊ HÀNG MƯỢN**.

- **Cho mượn**: Số lượng mượn: 2; Số lượng trả: 1; Cuối kỳ: 1; Đọc là: Đối tác còn giữ 1 tấm của công ty
- **Đi mượn**: Số lượng mượn: −3; Số lượng trả: −2; Cuối kỳ: −1; Đọc là: Công ty còn nợ đối tác 1 tấm

Cột **Số lượng trả**, **Cuối kỳ** nằm bên phải, phải kéo thanh cuộn ngang mới thấy. Dòng **TỔNG CỘNG** ở Hình 1 có **Số lượng mượn = −1** vì cộng 2 (Cho mượn) với −3 (Đi mượn) – con số này không có ý nghĩa nếu chưa lọc **Nghiệp vụ**.

**Các cột trên lưới:**

- **STT**: Ý nghĩa: Số thứ tự
- **Nghiệp vụ**: Ý nghĩa: **Cho mượn** hoặc **Đi mượn**
- **Tên kho hàng**: Ý nghĩa: Kho **đại diện cho đối tác** (Kho mượn của phiếu cho mượn / Mượn từ kho của phiếu nhập mượn)
- **Tên hàng hóa**: Ý nghĩa: Hàng mượn
- **Đầu kỳ**: Ý nghĩa: Số còn mượn tính đến **trước** ngày bắt đầu kỳ
- **Số lượng mượn**: Ý nghĩa: Số mượn phát sinh trong kỳ
- **Số lượng trả**: Ý nghĩa: Số trả phát sinh trong kỳ (cả trả bằng hàng và bằng tiền)
- **Cuối kỳ**: Ý nghĩa: Đầu kỳ + Số lượng mượn − Số lượng trả

Màn hình không có thao tác nhấp đúp trên dòng. Bấm chuột phải vào **tiêu đề cột** để sắp xếp, cố định cột, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

```text
Cho mượn:  Phiếu xuất cho mượn (+ mượn) ── Phiếu nhập trả (+ trả)
Đi mượn:   Phiếu nhập mượn (− mượn)     ── Phiếu xuất trả (− trả)
                       ↓
Tổng hợp mượn hàng (theo đối tác × hàng, theo ngày chứng từ)
   ├── Lọc Nghiệp vụ / Tên kho hàng (GEN-04)
   └── Xuất Excel (GEN-05)
                       ↓
Cần xem từng phiếu → Chi tiết xuất mượn (KHO-D02.0)
                   → Chi tiết nhập mượn (KHO-D03.0)
```

## 5. Thực hiện trên phần mềm

- **Xem số mượn của tháng**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Chỉ xem hàng cho mượn / đi mượn**: Cách làm: Lọc cột **Nghiệp vụ**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem theo một đối tác**: Cách làm: Lọc cột **Tên kho hàng**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem từng phiếu, ngày trả**: Cách làm: Màn **Chi tiết xuất mượn** / **Chi tiết nhập mượn**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH CHI TIẾT XUẤT MƯỢN](/bai-viet/2026-11-07-kho-d02-0-tong-quan-man-hinh-chi-tiet-xuat-muon/), [TỔNG QUAN MÀN HÌNH CHI TIẾT NHẬP MƯỢN](/bai-viet/2026-11-07-kho-d03-0-tong-quan-man-hinh-chi-tiet-nhap-muon/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Đối chiếu hàng còn ở đối tác cuối tháng

**Bước 1 –** Mở **Thống kê mượn hàng → Tổng hợp mượn hàng**.

**Bước 2 –** Chọn khoảng ngày **Tháng này** (hoặc tháng cần đối chiếu).

**Bước 3 –** Ở hàng lọc cột **Nghiệp vụ**, chọn **Cho mượn** (hoặc **Đi mượn**).

**Bước 4 –** Lọc **Tên kho hàng** theo đối tác. Cột **Cuối kỳ** là số đối tác còn giữ (Cho mượn) hoặc số công ty còn phải trả (Đi mượn, số âm).

**Bước 5 –** Bấm **Xuất Excel** nếu cần gửi đối tác xác nhận.

## 6. Giải thích các thông tin trên màn hình

- **Số lượng mượn – Cho mượn**: Cách tính: Tổng số lượng trên các **phiếu xuất cho mượn** có ngày xuất trong kỳ
- **Số lượng trả – Cho mượn**: Cách tính: Tổng số lượng trên các **phiếu nhập trả** có ngày nhập trong kỳ (kể cả dòng trả bằng tiền)
- **Số lượng mượn – Đi mượn**: Cách tính: **Âm** tổng số lượng trên các **phiếu nhập mượn** có ngày nhập trong kỳ
- **Số lượng trả – Đi mượn**: Cách tính: **Âm** tổng số lượng trên các **phiếu xuất trả** có ngày xuất trong kỳ (kể cả trả bằng tiền)
- **Đầu kỳ**: Cách tính: (Mượn − Trả) của mọi phiếu có ngày **trước** ngày bắt đầu kỳ
- **Cuối kỳ**: Cách tính: Đầu kỳ + Số lượng mượn − Số lượng trả

Dữ liệu được gom theo **Nghiệp vụ × Tên kho hàng (đối tác) × Tên hàng hóa**, lấy khi: phiếu thuộc **chi nhánh đang làm việc**; ngày chứng từ không sau ngày kết thúc kỳ; dòng có ít nhất một trong bốn số khác 0; **kho đại diện đối tác** nằm trong danh sách kho tài khoản được phân (trừ quản trị hệ thống). Sắp xếp theo Tên kho hàng, Tên hàng hóa.

Ví dụ: cho *KHO MƯỢN SONG HUỲNH* mượn 100 tấm ngày 05/10, họ trả 30 tấm ngày 15/10. Xem kỳ 10/10 – 31/10: Đầu kỳ 100, Số lượng mượn 0, Số lượng trả 30, Cuối kỳ 70.

## 7. Kiểm tra sau khi thực hiện

Bạn biết số hàng còn ở từng đối tác và số công ty còn nợ từng đối tác, theo từng mặt hàng, tại một thời điểm.

## 8. Những điều cần lưu ý

⚠️ **Đi mượn hiển thị số âm.** Dòng **TỔNG CỘNG** cộng cả Cho mượn (dương) và Đi mượn (âm) nên có thể bù trừ nhau – **lọc Nghiệp vụ trước khi đọc tổng**.

⚠️ **Số lượng trả gồm cả phần trả bằng tiền.** Cuối kỳ = 0 không có nghĩa hàng đã về kho; xem phiếu nhập trả / xuất trả để biết trả bằng hàng hay bằng tiền.

⚠️ Màn hình lọc theo **kho đại diện đối tác**: tài khoản không phải quản trị phải được phân các kho *KHO MƯỢN …* thì mới thấy dòng. Hai người khác phân quyền kho có thể thấy kết quả khác nhau.

⚠️ Số lượng tính theo **đơn vị trên phiếu**, không quy đổi đơn vị.

### Màn hình trống dù đã có phiếu mượn 

Nguyên nhân: tài khoản chưa được phân kho đại diện đối tác; khoảng ngày kết thúc trước ngày phiếu; đang ở chi nhánh khác.
Cách xử lý: nhờ quản trị phân kho; chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)); kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập** màn hình.
Cách xử lý: liên hệ quản trị hệ thống.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Vì sao Đi mượn lại là số âm?**
Màn hình quy ước Cho mượn ghi dương (đối tác nợ công ty hàng), Đi mượn ghi âm (công ty nợ đối tác hàng).

**Cuối kỳ âm của Cho mượn nghĩa là gì?**
Đối tác trả nhiều hơn số đã mượn theo phiếu – thường do lập sai phiếu; kiểm tra ở [TỔNG QUAN MÀN HÌNH CHI TIẾT XUẤT MƯỢN](/bai-viet/2026-11-07-kho-d02-0-tong-quan-man-hinh-chi-tiet-xuat-muon/).

**Màn này có tính tồn kho không?**
Không. Tồn kho xem ở các màn Xuất nhập tồn ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/)).

## 11. Công việc tiếp theo

```text
Tổng hợp mượn hàng → thấy đối tác còn giữ hàng lâu
   → Chi tiết xuất mượn (KHO-D02.0) xem phiếu nào chưa trả
   → nhắc đối tác / lập Phiếu nhập trả (KHO-B02.1)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH CHI TIẾT XUẤT MƯỢN](/bai-viet/2026-11-07-kho-d02-0-tong-quan-man-hinh-chi-tiet-xuat-muon/) – Tổng quan màn hình Chi tiết xuất mượn
- [TỔNG QUAN MÀN HÌNH CHI TIẾT NHẬP MƯỢN](/bai-viet/2026-11-07-kho-d03-0-tong-quan-man-hinh-chi-tiet-nhap-muon/) – Tổng quan màn hình Chi tiết nhập mượn
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-0-tong-quan-man-hinh-phieu-xuat-cho-muon/) – Tổng quan màn hình Phiếu xuất cho mượn
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP MƯỢN](/bai-viet/2026-11-07-kho-b03-0-tong-quan-man-hinh-phieu-nhap-muon/) – Tổng quan màn hình Phiếu nhập mượn
