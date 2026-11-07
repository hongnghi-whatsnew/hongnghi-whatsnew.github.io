---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ NHẬP MUA CHI TIẾT"
date: "2026-11-07"
summary: "Màn hình Nhập mua chi tiết liệt kê từng dòng phiếu nhập kho có nhà cung cấp (hàng mua về đã nhập kho) trong khoảng ngày bạn chọn, tại chi nhánh đang làm việc."
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

Màn hình **Nhập mua chi tiết** liệt kê **từng dòng phiếu nhập kho có nhà cung cấp** (hàng mua về đã nhập kho) trong khoảng ngày bạn chọn, tại **chi nhánh đang làm việc**. Mỗi dòng cho biết hàng gì, nhập kho nào, số lượng, đơn giá, chi phí phân bổ, giá trị nhập, và truy ngược về **phiếu mua** và **phiếu đặt hàng** gốc.

Bạn dùng màn hình này khi:

- Đối chiếu hàng đã nhập kho với hoá đơn nhà cung cấp.
- Xem giá trị nhập kho (gồm chi phí phân bổ) theo từng mặt hàng.
- Kiểm tra ngày đến hạn thanh toán theo từng lần nhập.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Tài khoản được phân **kho hàng** cần xem (do quản trị hệ thống thiết lập).
- Đang làm việc đúng **chi nhánh** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có **phiếu nhập kho** có nhà cung cấp trong khoảng ngày cần xem ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/)).

## 2. Mở chức năng

**Thống kê mua hàng → Nhập mua chi tiết**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ - CHI TIẾT NHẬP MUA HÀNG](/posts/2026-11-07-mh-b04-0-tong-quan-man-hinh-thong-ke-nhap-mua-chi-tiet/hinh-01-man-hinh-nhap-mua-chi-tiet.png)

- **Ô khoảng ngày**: Chức năng: Chọn khoảng **ngày nhập kho**. Lần đầu là **Hôm nay**, lần sau nhớ lựa chọn gần nhất; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Hàng lọc dưới tiêu đề cột**: Chức năng: Lọc từng cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: Số dòng; tổng Số lượng, Số trả lại, SL m3, SL kiện, Thành tiền VAT, Chi phí, Giá trị nhập

**Các cột trên lưới:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày phát sinh**: Ý nghĩa: Ngày nhập kho
- **Ngày đến hạn**: Ý nghĩa: Ngày nhập kho + Số ngày nợ của nhà cung cấp
- **Số ngày nợ**: Ý nghĩa: Ẩn sẵn; số ngày nợ trong danh mục nhà cung cấp
- **Mã hàng hoá, Tên hàng hoá**: Ý nghĩa: Hàng hoá nhập
- **Tên in**: Ý nghĩa: Tên in trên phiếu của hàng hoá, đã bỏ phần tên NCC
- **Số lượng**: Ý nghĩa: Số lượng nhập
- **Số trả lại**: Ý nghĩa: Số lượng của dòng nhập này đã trả lại nhà cung cấp
- **SL m3**: Ý nghĩa: Số lượng × m³ của hàng hoá
- **SL kiện**: Ý nghĩa: Số lượng ÷ Tấm/Kiện của hàng hoá
- **Đơn giá**: Ý nghĩa: Đơn giá nhập (chưa chiết khấu, chưa VAT)
- **Chiết khấu, Thuế VAT**: Ý nghĩa: Tỷ lệ của dòng + tỷ lệ của cả phiếu
- **Đơn giá VAT**: Ý nghĩa: Đơn giá sau chiết khấu, đã cộng VAT
- **Thành tiền VAT**: Ý nghĩa: Số lượng × Đơn giá VAT
- **Chi phí**: Ý nghĩa: Chi phí (vận chuyển, bốc xếp…) được phân bổ vào dòng
- **Giá trị nhập**: Ý nghĩa: Giá trị hàng nhập kho đã gồm chi phí phân bổ (xem phần “Giải thích các thông tin trên màn hình”)
- **Đơn giá về đến kho**: Ý nghĩa: Xem ghi chú phần “Những điều cần lưu ý”
- **Nhóm nhà cung cấp**: Ý nghĩa: Nhóm của nhà cung cấp
- **Nhà cung cấp**: Ý nghĩa: Tên rút gọn (nếu có), không có thì tên đầy đủ
- **Kho nhập**: Ý nghĩa: Kho nhận hàng
- **Ghi chú**: Ý nghĩa: Ghi chú của phiếu nhập
- **Chú thích**: Ý nghĩa: Chú thích của dòng nhập
- **Chú thích nội bộ**: Ý nghĩa: Xem ghi chú phần “Những điều cần lưu ý”
- **Mã phiếu gốc**: Ý nghĩa: Mã phiếu gốc ghi trên phiếu nhập
- **Mã phiếu**: Ý nghĩa: Mã phiếu nhập kho
- **Hóa đơn**: Ý nghĩa: Số chứng từ / hoá đơn trên phiếu nhập
- **Vận chuyển**: Ý nghĩa: Phương thức vận chuyển trên phiếu nhập
- **Ngày mua hàng, Mã phiếu mua**: Ý nghĩa: Phiếu mua hàng mà dòng nhập được lập từ đó (trống nếu nhập không theo phiếu mua)
- **Ngày đặt hàng, Mã phiếu đặt**: Ý nghĩa: Phiếu đặt hàng NCC gốc của phiếu mua

Bấm chuột phải vào **tiêu đề cột** để sắp xếp, cố định cột, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Màn hình không có thao tác nhấp đúp trên dòng.

## 4. Trình tự công việc

```text
Đặt hàng NCC (MH-A01) → Mua hàng (MH-A03) → Nhập kho (KHO-A04)
                                                  ↓
                                   Nhập mua chi tiết (theo ngày nhập kho)
                                   ├── Tìm / lọc / chọn cột (GEN-04)
                                   └── Xuất Excel (GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Xem hàng nhập mua trong tháng**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem theo nhà cung cấp / kho**: Cách làm: Lọc cột **Nhà cung cấp** / **Kho nhập**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Truy phiếu mua, phiếu đặt gốc**: Cách làm: Xem cột **Mã phiếu mua**, **Mã phiếu đặt**
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Sửa phiếu nhập**: Cách làm: Vào màn **Phiếu nhập kho**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/)

### Đối chiếu hàng nhập của một nhà cung cấp trong tháng

**Bước 1 –** Mở **Thống kê mua hàng → Nhập mua chi tiết**.

**Bước 2 –** Chọn **Tháng trước** (hoặc tháng cần đối chiếu) ở ô khoảng ngày.

**Bước 3 –** Gõ tên nhà cung cấp vào hàng lọc cột **Nhà cung cấp**.

**Bước 4 –** Đối chiếu cột **Hóa đơn**, **Số lượng**, **Thành tiền VAT** với hoá đơn của nhà cung cấp. Dòng **TỔNG CỘNG** cộng các dòng đang lọc.

**Bước 5 –** Bấm **Xuất Excel** nếu cần gửi bảng đối chiếu.

## 6. Giải thích các thông tin trên màn hình

- **Ngày đến hạn**: Cách tính: Ngày nhập kho + Số ngày nợ (theo danh mục nhà cung cấp hiện tại)
- **SL m3**: Cách tính: Số lượng × m³
- **SL kiện**: Cách tính: Số lượng ÷ Tấm/Kiện
- **Đơn giá VAT**: Cách tính: Đơn giá × (1 − Chiết khấu) × (1 + Thuế VAT)
- **Thành tiền VAT**: Cách tính: Số lượng × Đơn giá VAT (không trừ **Số trả lại**)
- **Giá trị nhập**: Cách tính: Tính khi lưu phiếu nhập: Số lượng × Đơn giá × (1 − chiết khấu) + Chi phí

Dữ liệu được lấy khi thoả **đủ**: **ngày nhập kho** trong khoảng ngày; phiếu thuộc **chi nhánh đang làm việc**; phiếu nhập **có nhà cung cấp**; dòng có **Số lượng khác 0**; **kho nhập** nằm trong danh sách kho tài khoản được phân (trừ quản trị hệ thống).

## 7. Kiểm tra sau khi thực hiện

Bạn xem được chi tiết hàng mua đã nhập kho, giá trị nhập gồm chi phí, ngày đến hạn, và truy được phiếu mua / phiếu đặt gốc.

## 8. Những điều cần lưu ý

⚠️ Màn hình chỉ hiện các dòng nhập vào **kho bạn được phân**. Hai người khác kho có thể thấy **tổng khác nhau** cho cùng khoảng ngày.

⚠️ **Thành tiền VAT** tính trên **Số lượng nhập**, không trừ phần đã trả lại. Nếu cần số thuần, đối chiếu riêng lượng trả, phiếu xuất trả và giá trị hoàn/giảm công nợ đã được kế toán xác nhận. Không trừ trực tiếp một cột số lượng vào cột tiền và không dùng báo cáo nhập làm sổ công nợ.

⚠️ Màn hình lấy **mọi phiếu nhập kho có nhà cung cấp**, kể cả phiếu nhập không lập từ phiếu mua (khi đó cột **Mã phiếu mua** trống).

⚠️ Hai cột **Đơn giá về đến kho** và **Chú thích nội bộ** hiện chưa có số liệu (luôn trống) — đã báo bộ phận IT.

⚠️ **Ngày đến hạn** lấy theo số ngày nợ **hiện tại** của nhà cung cấp, không phải số ngày nợ lúc lập phiếu.

### Thiếu dòng nhập so với màn Phiếu nhập kho 

Nguyên nhân: dòng nhập vào kho mà tài khoản không được phân; phiếu nhập không chọn nhà cung cấp; đang ở chi nhánh khác.
Cách xử lý: liên hệ quản trị hệ thống phân thêm kho; kiểm tra phiếu nhập có nhà cung cấp; kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập** màn hình.
Cách xử lý: liên hệ quản trị hệ thống.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Giá trị nhập khác Thành tiền VAT thế nào?**
**Giá trị nhập** là giá trị hàng vào kho: tiền hàng sau chiết khấu, **chưa VAT**, cộng chi phí phân bổ. **Thành tiền VAT** là tiền hàng sau chiết khấu, **có VAT**, không gồm chi phí.

**Vì sao cột Mã phiếu mua trống?**
Dòng nhập không được lập từ phiếu mua hàng.

## 11. Công việc tiếp theo

```text
Nhập mua chi tiết → đối chiếu hoá đơn NCC → sửa phiếu nhập nếu sai (KHO-A04.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/) – Tổng quan màn hình Phiếu nhập kho
- [TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/) – Tổng quan màn hình Phiếu mua hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ TIẾN ĐỘ GIAO HÀNG](/bai-viet/2026-11-07-mh-b03-0-tong-quan-man-hinh-thong-ke-tien-do-giao-hang/) – Tổng quan màn hình thống kê Tiến độ giao hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ LỊCH SỬ GIÁ NHẬP](/bai-viet/2026-11-07-mh-b06-0-tong-quan-man-hinh-thong-ke-lich-su-gia-nhap/) – Tổng quan màn hình thống kê Lịch sử giá nhập
