---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ ĐẶT HÀNG NCC CHI TIẾT"
date: "2026-11-07"
summary: "Màn hình Đặt hàng ncc chi tiết theo dõi từng dòng phiếu đặt hàng nhà cung cấp: đã đặt bao nhiêu, đã lập phiếu mua bao nhiêu, đã nhập kho bao nhiêu, còn chưa mua / chưa nhập bao nhiêu."
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

Màn hình **Đặt hàng ncc chi tiết** theo dõi **từng dòng phiếu đặt hàng nhà cung cấp**: đã đặt bao nhiêu, đã lập phiếu mua bao nhiêu, đã nhập kho bao nhiêu, còn chưa mua / chưa nhập bao nhiêu. Số liệu lấy theo **ngày đặt hàng** trong khoảng ngày bạn chọn, tại **chi nhánh đang làm việc**.

Bạn dùng màn hình này khi:

- Kiểm tra đơn đặt hàng NCC nào chưa được chuyển thành phiếu mua.
- Theo dõi hàng đã đặt đã về kho đủ chưa.
- Báo cáo tình hình thực hiện đơn đặt hàng NCC theo kỳ.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có **phiếu đặt hàng NCC** ([TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-mh-a01-0-tong-quan-man-hinh-phieu-dat-hang/)). Phần đã mua được ghi nhận khi lập **phiếu mua hàng từ phiếu đặt** ([TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/)); phần đã nhập khi lập **phiếu nhập kho từ phiếu mua** ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/)).

## 2. Mở chức năng

**Thống kê mua hàng → Đặt hàng ncc chi tiết**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ - CHI TIẾT ĐẶT HÀNG NCC](/posts/2026-11-07-mh-b08-0-tong-quan-man-hinh-thong-ke-dat-hang-ncc-chi-tiet/hinh-01-man-hinh-dat-hang-ncc-chi-tiet.png)

- **Ô khoảng ngày**: Chức năng: Chọn khoảng **ngày đặt hàng**. Lần đầu là **Hôm nay**, lần sau nhớ lựa chọn gần nhất; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột; nhiều cột đang ẩn sẵn; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…, hàng lọc**: Chức năng: Tìm, lọc; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tiêu đề nhóm cột**: Chức năng: **Thông tin đặt hàng** (Thông tin phiếu, Hàng hóa), **Thông tin mua hàng** (Tất toán, Đã mua, Chưa mua), **Thông tin nhập kho** (Đã nhập, Chưa nhập)
- **Dòng tổng cuối lưới**: Chức năng: Số dòng và tổng các cột số lượng, Thành tiền

**Các cột trên lưới (cột ghi "ẩn" mở bằng Trình chọn cột):**

- **Thông tin phiếu**: Cột: Ngày đặt hàng, Mã phiếu; Ý nghĩa: Phiếu đặt hàng NCC
- Cột: Mã nhà cung cấp (ẩn), Tên nhà cung cấp, Nhà cung cấp (ẩn, tên rút gọn), Số ngày nợ (ẩn); Ý nghĩa: Nhà cung cấp
- Cột: Ghi chú; Ý nghĩa: Ghi chú của phiếu đặt
- **Hàng hóa**: Cột: Mã hàng (ẩn), Tên hàng, Tên hàng NCC (ẩn), Mã hàng NCC (ẩn), Đvt; Ý nghĩa: Hàng hoá trên dòng đặt
- Cột: Tấm/m³ (ẩn), Tấm/kiện (ẩn); Ý nghĩa: Quy đổi khai trong danh mục hàng hoá
- Cột: SL, SL m³, SL kiện; Ý nghĩa: Số lượng đặt
- Cột: Đơn giá, Chiết khấu, Thuế VAT, Thành tiền (đều ẩn); Ý nghĩa: Giá, tiền ghi trên dòng đặt
- Cột: Chú thích; Ý nghĩa: Chú thích của dòng đặt
- **Tất toán**: Cột: SL, SL m³, SL kiện; Ý nghĩa: Tất toán trên phiếu đặt + tất toán trên các phiếu mua lập từ dòng đặt
- **Đã mua**: Cột: SL, SL m³ (ẩn), SL kiện (ẩn); Ý nghĩa: Số đã lên phiếu mua (đã trừ tất toán trên phiếu mua)
- Cột: Trạng thái; Ý nghĩa: **Đã mua** / **Đang mua** / **Chưa mua**
- **Chưa mua**: Cột: SL, SL m³ (ẩn), SL kiện (ẩn); Ý nghĩa: Số chưa lên phiếu mua
- **Đã nhập**: Cột: SL, SL m³ (ẩn), SL kiện (ẩn); Ý nghĩa: Số đã nhập kho từ các phiếu mua đó
- Cột: Trạng thái; Ý nghĩa: **Đã nhập** / **Đang nhập** / **Chưa nhập**
- **Chưa nhập**: Cột: SL, SL m³ (ẩn), SL kiện (ẩn); Ý nghĩa: Số chưa nhập kho

Bấm chuột phải vào **tiêu đề cột** → **Khôi phục bố cục** để đưa lưới về mặc định ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Màn hình không có thao tác nhấp đúp trên dòng.

## 4. Trình tự công việc

```text
Phiếu đặt hàng NCC (MH-A01) → Phiếu mua hàng (MH-A03) → Phiếu nhập kho (KHO-A04)
      ↓
Đặt hàng ncc chi tiết (theo ngày đặt, chi nhánh đang làm việc)
      ├── SL đặt, Tất toán      ──► từ phiếu đặt và phiếu mua
      ├── Đã mua / Chưa mua     ──► từ phiếu mua lập từ phiếu đặt
      └── Đã nhập / Chưa nhập   ──► từ phiếu nhập kho lập từ phiếu mua
```

## 5. Thực hiện trên phần mềm

- **Xem đơn đặt trong kỳ**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm dòng đặt chưa lên phiếu mua**: Cách làm: Lọc **Trạng thái** (nhóm Đã mua) khác **Đã mua**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm dòng đã mua chưa về đủ**: Cách làm: Lọc **Trạng thái** (nhóm Đã nhập) khác **Đã nhập**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem giá, thành tiền đặt**: Cách làm: **Trình chọn cột** → kéo **Đơn giá**, **Thành tiền** ra lưới; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập phiếu mua từ phiếu đặt**: Cách làm: Vào màn **Phiếu mua hàng**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Tìm hàng đã đặt nhưng chưa lên phiếu mua

**Bước 1 –** Mở **Thống kê mua hàng → Đặt hàng ncc chi tiết**.

**Bước 2 –** Chọn khoảng ngày bao trùm **ngày đặt** cần xem; chọn **đến ngày** là **hôm nay** để tính đủ phiếu mua, phiếu nhập tới nay (xem phần “Những điều cần lưu ý”).

**Bước 3 –** Ở cột **Trạng thái** của nhóm **Đã mua**, lọc **Chưa mua** và **Đang mua**.

**Bước 4 –** Xem cột **SL** của nhóm **Chưa mua** để biết số còn phải mua.

⚠️ Sau khi chọn điều kiện báo cáo, bấm **Tải lại**. Kiểm tra đúng tên miền/tài khoản và phạm vi kho trước khi đối chiếu số liệu.

## 6. Giải thích các thông tin trên màn hình

- **SL m³ (mọi nhóm)**: Cách tính: SL của nhóm × Tấm/m³
- **SL kiện (mọi nhóm)**: Cách tính: SL của nhóm ÷ Tấm/kiện
- **Tất toán – SL**: Cách tính: Tất toán trên dòng đặt + tất toán trên các dòng phiếu mua lập từ dòng đặt
- **Đã mua – SL**: Cách tính: SL trên các phiếu mua lập từ dòng đặt − tất toán trên các phiếu mua đó
- **Trạng thái mua**: Cách tính: **Đã mua**: Chưa mua ≤ 0. **Đang mua**: còn chưa mua nhưng Đã mua > 0. **Chưa mua**: chưa mua lần nào
- **Đã nhập – SL**: Cách tính: SL nhập kho từ các phiếu mua trên
- **Chưa nhập – SL**: Cách tính: SL đặt − Tất toán − Đã nhập
- **Trạng thái nhập**: Cách tính: **Đã nhập**: đã có mua và Đã mua − Đã nhập = 0. **Đang nhập**: Đã mua − Đã nhập > 0 và đã nhập > 0. **Chưa nhập**: còn lại

Chỉ tính **phiếu mua có ngày mua** và **phiếu nhập có ngày nhập** nằm trong **cùng khoảng ngày** đang chọn, cùng chi nhánh. Dòng mới nhất (ngày đặt gần nhất) đứng đầu.

## 7. Kiểm tra sau khi thực hiện

Bạn biết từng dòng đặt hàng NCC đã được mua, nhập kho đến đâu và còn thiếu bao nhiêu.

## 8. Những điều cần lưu ý

⚠️ **Khoảng ngày lọc cả ba loại phiếu.** Phiếu mua / phiếu nhập có ngày **sau** ngày cuối của khoảng sẽ **không** được tính. Muốn số liệu đến hôm nay, để **đến ngày** là **hôm nay**.

⚠️ **Trạng thái nhập** chỉ so với phần **đã mua**: **Đã nhập** nghĩa là mọi hàng đã lên phiếu mua đã về, **không** có nghĩa là đã về đủ số đặt. Xem thêm **Trạng thái mua** và **Chưa nhập – SL**.

⚠️ Bấm **Tải lại** sau khi thay điều kiện báo cáo. Truy cập chi nhánh khác bằng tên miền và tài khoản riêng theo [HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/).

⚠️ Cột **Tên hàng NCC** hiện chưa có số liệu (luôn trống).

Nếu dòng có tất toán ở phiếu mua, cần đối chiếu riêng các phiếu đặt–mua–nhập thay vì dựa vào Chưa mua hoặc tên trạng thái. Ví dụ theo công thức nguồn hiện hành: đặt 100, phiếu mua có lượng gốc 40 và tất toán mua 10, chưa tất toán đặt, thì Đã mua = 30 còn Chưa mua = 50. Hai số không đủ để tự kết luận cần đặt bổ sung bao nhiêu; chuyển người phụ trách xác nhận. Giữ số liệu gốc, không sửa phiếu để ép báo cáo khớp. Ví dụ số học này chưa phải kết quả chạy ERP.

### Đã lập phiếu mua nhưng vẫn báo Chưa mua 

Nguyên nhân: ngày phiếu mua nằm ngoài khoảng ngày đang chọn; phiếu mua không lập từ phiếu đặt.
Cách xử lý: chọn **đến ngày** là hôm nay; kiểm tra phiếu mua có liên kết với phiếu đặt ([TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/)).

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập**.
Cách xử lý: liên hệ quản trị hệ thống.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Màn này khác Tiến độ giao hàng thế nào?**
Màn này đi từ **phiếu đặt hàng** (đặt → mua → nhập). **Tiến độ giao hàng** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TIẾN ĐỘ GIAO HÀNG](/bai-viet/2026-11-07-mh-b03-0-tong-quan-man-hinh-thong-ke-tien-do-giao-hang/)) đi từ **phiếu mua hàng** (mua → nhập), có thêm giá và chi tiết từng lần nhập.

## 11. Công việc tiếp theo

```text
Đặt hàng ncc chi tiết → còn chưa mua → lập phiếu mua từ phiếu đặt (MH-A03.0)
                      → đã mua chưa về → theo dõi Tiến độ giao hàng (MH-B03.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-mh-a01-0-tong-quan-man-hinh-phieu-dat-hang/) – Tổng quan màn hình Phiếu đặt hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/) – Tổng quan màn hình Phiếu mua hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ TIẾN ĐỘ GIAO HÀNG](/bai-viet/2026-11-07-mh-b03-0-tong-quan-man-hinh-thong-ke-tien-do-giao-hang/) – Tổng quan màn hình thống kê Tiến độ giao hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/) – Tổng quan màn hình Phiếu nhập kho

### Vì sao Chưa mua – SL âm?

Kiểm tra trường hợp đã mua nhiều hơn lượng đặt hoặc có tất toán trên phiếu mua liên quan.
