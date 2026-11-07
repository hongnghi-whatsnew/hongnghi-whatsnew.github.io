---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ TIẾN ĐỘ GIAO HÀNG"
date: "2026-11-07"
summary: "Màn hình Tiến độ giao hàng theo dõi từng dòng phiếu mua hàng: đã mua bao nhiêu, tất toán bao nhiêu, nhà cung cấp đã giao (đã nhập kho) bao nhiêu, còn thiếu bao nhiêu, kèm số liệu quy đổi ra kiện và m³."
module: "Mua hàng"
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

Màn hình **Tiến độ giao hàng** theo dõi **từng dòng phiếu mua hàng**: đã mua bao nhiêu, tất toán bao nhiêu, nhà cung cấp đã giao (đã nhập kho) bao nhiêu, còn thiếu bao nhiêu, kèm số liệu quy đổi ra **kiện** và **m³**. Số liệu lấy theo **ngày mua hàng** trong khoảng ngày bạn chọn, tại **chi nhánh đang làm việc**.

Bạn dùng màn hình này khi:

- Đôn đốc nhà cung cấp giao phần hàng còn thiếu.
- Kiểm tra một phiếu mua đã nhập kho đủ chưa, nhập vào kho nào, theo phiếu nhập nào.
- Báo cáo tiến độ giao hàng theo tháng.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có **phiếu mua hàng** ([TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/)); phần đã giao được ghi nhận khi lập **phiếu nhập kho từ phiếu mua** ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/)).

## 2. Mở chức năng

**Thống kê mua hàng → Tiến độ giao hàng**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ - TIẾN ĐỘ NCC GIAO HÀNG](/posts/2026-11-07-mh-b03-0-tong-quan-man-hinh-thong-ke-tien-do-giao-hang/hinh-01-man-hinh-tien-do-giao-hang.png)

- **Ô khoảng ngày**: Chức năng: Chọn khoảng **Ngày mua hàng**. Lần đầu là **Hôm nay**, lần sau nhớ lựa chọn gần nhất; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tiêu đề nhóm cột**: Chức năng: 6 nhóm: **Thông tin mua hàng**, **Thông tin tất toán**, **Thực tế mua**, **Thông tin nhập kho**, **Thông tin chưa giao**, **Thông tin đặt hàng**
- **Dòng tổng cuối lưới**: Chức năng: Số dòng và tổng các cột số lượng / tiền

**Các cột trên lưới (theo nhóm):**

- **Thông tin mua hàng**: Cột: Mã nhà cung cấp; Ý nghĩa: Ẩn sẵn
- Cột: Tên nhà cung cấp, Tên rút gọn; Ý nghĩa: Nhà cung cấp của phiếu mua
- Cột: Ngày mua hàng, Mã phiếu mua; Ý nghĩa: Ngày và mã phiếu mua hàng
- Cột: Phương thức VC, Số hóa đơn, Cty nhận HĐ; Ý nghĩa: Lấy từ **phiếu nhập kho** của dòng mua; nhiều lần nhập thì nối bằng dấu `;`
- Cột: Mã hàng hoá, Tên hàng hoá, Tên in; Ý nghĩa: Hàng hoá trên dòng
- Cột: Dày, Rộng, Dài; Ý nghĩa: Kích thước (ẩn sẵn)
- Cột: NCC, Tiêu chuẩn, Loại hàng, Đvt; Ý nghĩa: Thông tin hàng hoá
- Cột: Tấm/Kiện, m³/Tấm; Ý nghĩa: Quy đổi khai trong danh mục hàng hoá
- Cột: SL, SL kiện, SL m³; Ý nghĩa: Số lượng mua trên phiếu
- Cột: Đơn giá (Chưa VAT), Chiết khấu, Thuế VAT, Đơn giá (VAT), Thành tiền (Chưa VAT), Thành tiền (VAT); Ý nghĩa: Cột giá, tiền (cần quyền **Xem giá**)
- Cột: Chú thích; Ý nghĩa: Chú thích của dòng phiếu mua
- **Thông tin tất toán**: Cột: SL, SL kiện, SL m³; Ý nghĩa: Số lượng đã tất toán (không mua nữa)
- **Thực tế mua**: Cột: SL, SL kiện, SL m³; Ý nghĩa: SL mua − SL tất toán
- **Thông tin nhập kho**: Cột: Chi tiết nhập; Ý nghĩa: Ẩn sẵn: từng lần nhập dạng *ngày, mã phiếu nhập, kho, số lượng*
- Cột: SL đã nhập, SL kiện, SL m³; Ý nghĩa: Số đã nhập kho trong khoảng ngày đang xem
- Cột: Trạng thái; Ý nghĩa: **Đã nhập** / **Đang nhập** / **Chưa nhập**
- **Thông tin chưa giao**: Cột: SL, SL kiện, SL m³; Ý nghĩa: Thực tế mua − SL đã nhập
- Cột: Thành tiền (VAT); Ý nghĩa: Tiền (có VAT) của phần chưa giao (cần quyền **Xem giá**)
- **Thông tin đặt hàng**: Cột: Ngày đặt hàng, Mã phiếu đặt; Ý nghĩa: Phiếu đặt hàng NCC mà dòng mua được lập từ đó

Bấm chuột phải vào **tiêu đề cột** → **Khôi phục bố cục** để đưa lưới về mặc định ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Màn hình không có thao tác nhấp đúp trên dòng.

## 4. Trình tự công việc

```text
Phiếu đặt hàng NCC (MH-A01) → Phiếu mua hàng (MH-A03) → Phiếu nhập kho (KHO-A04)
      ↓
Tiến độ giao hàng (theo ngày mua, chi nhánh đang làm việc)
      ├── Thực tế mua = SL − Tất toán
      ├── Đã nhập = SL các phiếu nhập kho lập từ dòng mua
      └── Chưa giao = Thực tế mua − Đã nhập
```

## 5. Thực hiện trên phần mềm

- **Xem tiến độ các phiếu mua trong tháng**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Chỉ xem dòng còn thiếu hàng**: Cách làm: Lọc cột **Trạng thái** khác **Đã nhập**, hoặc lọc **SL** chưa giao > 0; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem đã nhập theo phiếu nhập nào**: Cách làm: **Trình chọn cột** → hiện cột **Chi tiết nhập**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Hiện cột giá, tiền**: Cách làm: **Trình chọn cột** → kéo cột giá ra lưới (cần quyền **Xem giá**); Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Tìm các dòng mua chưa giao đủ của một nhà cung cấp

**Bước 1 –** Mở **Thống kê mua hàng → Tiến độ giao hàng**.

**Bước 2 –** Chọn khoảng ngày bao trùm **ngày mua** của các phiếu cần xem, ví dụ **3 tháng gần đây**. Chọn **đến ngày** là **hôm nay** để tính đủ các lần nhập kho tới nay (xem phần “Những điều cần lưu ý”).

**Bước 3 –** Gõ tên nhà cung cấp vào hàng lọc cột **Tên nhà cung cấp**.

**Bước 4 –** Ở cột **Trạng thái** (nhóm **Thông tin nhập kho**), chọn lọc **Chưa nhập** và **Đang nhập**.

**Bước 5 –** Xem nhóm **Thông tin chưa giao** để biết số còn thiếu theo SL, kiện, m³.

## 6. Giải thích các thông tin trên màn hình

- **SL kiện (mọi nhóm)**: Cách tính: SL của nhóm ÷ **Tấm/Kiện** (trống nếu hàng không khai Tấm/Kiện)
- **SL m³ (mọi nhóm)**: Cách tính: SL của nhóm × **m³/Tấm**
- **Thực tế mua – SL**: Cách tính: SL mua − SL tất toán
- **SL đã nhập**: Cách tính: Tổng SL các phiếu nhập kho lập từ dòng mua này, có **ngày nhập nằm trong khoảng ngày đang chọn**
- **Trạng thái**: Cách tính: **Đã nhập**: SL đã nhập ≥ SL mua. **Đang nhập**: đã nhập > 0 nhưng chưa đủ. **Chưa nhập**: chưa nhập lần nào
- **Chưa giao – SL**: Cách tính: SL mua − SL tất toán − SL đã nhập (âm nếu nhập dư)
- **Chiết khấu, Thuế VAT**: Cách tính: Tỷ lệ dòng + tỷ lệ phiếu
- **Đơn giá (VAT)**: Cách tính: Đơn giá × (1 − Chiết khấu) × (1 + Thuế VAT)
- **Thành tiền (Chưa VAT)**: Cách tính: Thực tế mua × Đơn giá (chưa trừ chiết khấu)
- **Thành tiền (VAT)**: Cách tính: Thực tế mua × Đơn giá (VAT)
- **Chưa giao – Thành tiền (VAT)**: Cách tính: Chưa giao × Đơn giá (VAT)

Màn hình **không** lấy phiếu mua dịch vụ. Dòng mới nhất (ngày mua gần nhất) đứng đầu.

## 7. Kiểm tra sau khi thực hiện

Bạn biết từng dòng phiếu mua đã được giao bao nhiêu, còn thiếu bao nhiêu (theo SL, kiện, m³ và tiền), nhập kho theo phiếu nào và xuất được báo cáo khi có quyền.

## 8. Những điều cần lưu ý

⚠️ **Khoảng ngày lọc cả phiếu mua lẫn phiếu nhập.** Màn hình chỉ lấy phiếu mua có **ngày mua** trong khoảng ngày, và chỉ cộng các lần **nhập kho có ngày nhập cũng trong khoảng đó**. Hàng nhập **sau** ngày cuối của khoảng sẽ **không** được tính → **Chưa giao** lớn hơn thực tế. Muốn biết tiến độ đến hôm nay, để **đến ngày** là **hôm nay**.

⚠️ Các cột **Phương thức VC**, **Số hóa đơn**, **Cty nhận HĐ**, **Chi tiết nhập** lấy từ **mọi** phiếu nhập kho của dòng mua (không theo khoảng ngày), nên có thể thấy lần nhập mà cột **SL đã nhập** không tính.

⚠️ Dòng có **tất toán một phần**: khi đã nhập đủ phần thực tế mua, **Trạng thái** vẫn có thể là **Đang nhập** vì trạng thái so với SL mua ban đầu. Xem cột **Chưa giao – SL** (= 0 là đã giao đủ).

⚠️ Tài khoản không có quyền **Xem giá** sẽ không thấy và không mở được các cột giá, tiền. Dòng tổng của các cột này cũng ẩn.

⚠️ Đọc số liệu trong **đúng hệ thống chi nhánh đang truy cập**; đối chiếu nhà cung cấp, kho và khoảng ngày. Nếu cần dữ liệu chi nhánh khác, dùng tên miền và tài khoản riêng.

Ví dụ đọc phạm vi ngày: phiếu mua nằm trong tháng 9, hàng nhận tháng 10 sẽ chưa được cộng vào SL đã nhập khi chỉ xem tháng 9, dù Chi tiết nhập có thể nhắc phiếu tháng 10. Để đối chiếu tiến độ đến nay, chọn từ ngày đủ bao trùm phiếu mua đến hôm nay và kiểm tra số chứng từ nguồn. Đây là ví dụ cách đọc, không phải ca thử ERP mới.

### Hàng đã nhập kho nhưng màn hình vẫn báo Chưa nhập 

Nguyên nhân: (1) ngày nhập kho nằm ngoài khoảng ngày đang chọn; (2) phiếu nhập kho không lập từ phiếu mua.
Cách xử lý: chọn **đến ngày** là hôm nay; kiểm tra phiếu nhập kho có liên kết với phiếu mua ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/)).

### Không thấy cột Đơn giá / Thành tiền 

Nguyên nhân: chưa có quyền **Xem giá**, hoặc cột đang ẩn trong **Trình chọn cột**.
Cách xử lý: mở **Trình chọn cột** kéo cột ra; nếu không có trong danh sách, liên hệ quản trị hệ thống cấp quyền **Xem giá**.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập** màn hình.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Thực tế mua khác SL thế nào?**
**SL** là số ghi trên phiếu mua. **Thực tế mua** là SL trừ phần đã **tất toán** (nhà cung cấp không giao nữa).

**Vì sao SL chưa giao bị âm?**
Nhà cung cấp giao (nhập kho) nhiều hơn số thực tế mua.

**Cột Số hóa đơn là hoá đơn của phiếu mua hay phiếu nhập?**
Là số chứng từ ghi trên **phiếu nhập kho**.

## 11. Công việc tiếp theo

```text
Tiến độ giao hàng → còn thiếu → đôn đốc NCC → nhập kho (KHO-A04.0)
                  → NCC không giao nữa → tất toán trên phiếu mua (MH-A03.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-mh-a01-0-tong-quan-man-hinh-phieu-dat-hang/) – Tổng quan màn hình Phiếu đặt hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/) – Tổng quan màn hình Phiếu mua hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ HÀNG CHỜ NHẬP KHO](/bai-viet/2026-11-07-mh-b02-0-tong-quan-man-hinh-thong-ke-hang-cho-nhap-kho/) – Tổng quan màn hình thống kê Hàng chờ nhập kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ ĐẶT HÀNG NCC CHI TIẾT](/bai-viet/2026-11-07-mh-b08-0-tong-quan-man-hinh-thong-ke-dat-hang-ncc-chi-tiet/) – Tổng quan màn hình thống kê Đặt hàng NCC chi tiết
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/) – Tổng quan màn hình Phiếu nhập kho
