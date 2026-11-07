---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ MUA DỊCH VỤ CHI TIẾT"
date: "2026-11-07"
summary: "Màn hình Mua dịch vụ chi tiết liệt kê từng dòng của các phiếu mua dịch vụ đã lập với nhà cung cấp (vận chuyển, gia công thuê ngoài, sửa chữa, chi phí khác…) trong một khoảng ngày, tại chi nhánh đang làm việc."
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

Màn hình **Mua dịch vụ chi tiết** liệt kê **từng dòng** của các **phiếu mua dịch vụ** đã lập với nhà cung cấp (vận chuyển, gia công thuê ngoài, sửa chữa, chi phí khác…) trong một khoảng ngày, tại **chi nhánh đang làm việc**.

Bạn dùng màn hình này khi:

- Đối chiếu các khoản mua dịch vụ trong tháng với hoá đơn của nhà cung cấp.
- Xem khoản nào được đánh dấu **là chi phí**.
- Theo dõi ngày đến hạn thanh toán của từng phiếu mua dịch vụ.
- Xuất danh sách ra Excel để tổng hợp, gửi kế toán.

Màn hình chỉ để **xem**, không thêm / sửa / xoá được dữ liệu. Muốn sửa phiếu, vào **Mua hàng → Phiếu mua dịch vụ** ([TỔNG QUAN MÀN HÌNH PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-0-tong-quan-man-hinh-phieu-mua-dich-vu/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** cần xem (xem [HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có **phiếu mua dịch vụ** được lập trong khoảng ngày cần xem ([TỔNG QUAN MÀN HÌNH PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-0-tong-quan-man-hinh-phieu-mua-dich-vu/)).

## 2. Mở chức năng

**Thống kê mua hàng → Mua dịch vụ chi tiết**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ - CHI TIẾT MUA DỊCH VỤ](/posts/2026-11-07-mh-b01-0-tong-quan-man-hinh-thong-ke-mua-dich-vu-chi-tiet/hinh-01-man-hinh-mua-dich-vu-chi-tiet.png)

- **Ô khoảng ngày**: Chức năng: Chọn từ ngày – đến ngày (theo **Ngày mua**). Lần đầu mở là **Hôm nay**; lần sau hệ thống nhớ khoảng ngày bạn chọn gần nhất; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu. Sau khi bấm, nút tạm khoá vài giây
- **Biểu tượng Xuất Excel**: Chức năng: Xuất lưới ra file Excel (chỉ hiện khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột, kể cả các cột đang ẩn sẵn; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Hàng lọc dưới tiêu đề cột**: Chức năng: Lọc từng cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: **TỔNG CỘNG: n** (số dòng) và tổng SL, SL tất toán, Thành tiền, Thành tiền (VAT)
- **Phân trang**: Chức năng: 10 / 15 / 20 dòng mỗi trang; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)

**Các cột trên lưới:**

- **STT**: Ý nghĩa: Số thứ tự dòng
- **Ngày mua**: Ý nghĩa: Ngày trên phiếu mua dịch vụ
- **Mã phiếu**: Ý nghĩa: Mã phiếu mua dịch vụ
- **Chứng từ/HĐ**: Ý nghĩa: Số chứng từ / hoá đơn ghi trên phiếu
- **Là chi phí**: Ý nghĩa: Dòng dịch vụ được đánh dấu là chi phí
- **Mã nhà cung cấp**: Ý nghĩa: Ẩn sẵn, mở bằng **Trình chọn cột**
- **Tên nhà cung cấp**: Ý nghĩa: Tên đầy đủ của nhà cung cấp
- **Nhà cung cấp**: Ý nghĩa: Tên rút gọn của nhà cung cấp
- **Đến hạn**: Ý nghĩa: Ngày mua + Số ngày nợ của nhà cung cấp
- **Số ngày nợ**: Ý nghĩa: Số ngày nợ đang khai trong danh mục nhà cung cấp
- **Ghi chú**: Ý nghĩa: Ghi chú của phiếu
- **Mã hàng hoá**: Ý nghĩa: Ẩn sẵn
- **Tên hàng hoá**: Ý nghĩa: Tên dịch vụ / hàng hoá trên dòng
- **Đvt**: Ý nghĩa: Đơn vị tính của dòng
- **SL**: Ý nghĩa: Số lượng
- **SL tất toán**: Ý nghĩa: Số lượng đã tất toán (xem phần “Những điều cần lưu ý”)
- **Đơn giá**: Ý nghĩa: Đơn giá chưa chiết khấu, chưa VAT
- **Thành tiền**: Ý nghĩa: SL × Đơn giá (chưa trừ chiết khấu, chưa VAT)
- **Chiết khấu**: Ý nghĩa: Tỷ lệ chiết khấu của dòng **cộng** chiết khấu của cả phiếu
- **Thuế VAT**: Ý nghĩa: Thuế suất của dòng **cộng** thuế suất của cả phiếu
- **Đơn giá (VAT)**: Ý nghĩa: Đơn giá sau chiết khấu, đã cộng VAT
- **Thành tiền (VAT)**: Ý nghĩa: SL × Đơn giá (VAT)
- **Chú thích**: Ý nghĩa: Chú thích của dòng

Bấm chuột phải vào **tiêu đề cột** để mở menu sắp xếp, cố định cột, **Khôi phục bố cục** (xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Màn hình **không** có thao tác nhấp đúp hoặc menu chuột phải trên dòng dữ liệu.

## 4. Trình tự công việc

```text
Phiếu mua dịch vụ (MH-A02)
      ↓
Thống kê mua hàng → Mua dịch vụ chi tiết
      ├── Chọn khoảng ngày ──► lưới tự tải lại
      ├── Tìm / lọc / chọn cột (GEN-04)
      └── Xuất Excel (GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Xem mua dịch vụ một khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lấy lại số liệu mới nhất**: Cách làm: **Tải lại**
- **Xem theo một nhà cung cấp**: Cách làm: Gõ tên vào hàng lọc cột **Tên nhà cung cấp**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Chỉ xem dòng là chi phí**: Cách làm: Lọc cột **Là chi phí**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Hiện mã nhà cung cấp / mã hàng hoá**: Cách làm: **Trình chọn cột** → kéo cột ra lưới; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Sửa phiếu mua dịch vụ**: Cách làm: Vào màn **Phiếu mua dịch vụ**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-0-tong-quan-man-hinh-phieu-mua-dich-vu/)

### Xem chi phí mua dịch vụ của một tháng

**Bước 1 –** Mở **Thống kê mua hàng → Mua dịch vụ chi tiết**.

**Bước 2 –** Ở ô khoảng ngày, chọn **Tháng này** hoặc **Tháng trước**. Lưới tự tải số liệu.

**Bước 3 –** Xem dòng **TỔNG CỘNG** cuối lưới: tổng **Thành tiền** (chưa VAT) và **Thành tiền (VAT)** của các dòng đang hiển thị.

**Bước 4 –** Nếu cần, bấm biểu tượng **Xuất Excel** để lưu ra file.

⚠️ Sau khi chọn khoảng ngày, bấm **Tải lại** và đối chiếu tên miền/tài khoản của hệ thống đang dùng.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng cột: xem bảng ở phần “Nhận biết màn hình”. Cách tính các cột số:

- **Chiết khấu**: Cách tính: Chiết khấu dòng + chiết khấu phiếu
- **Thuế VAT**: Cách tính: VAT dòng + VAT phiếu
- **Đơn giá (VAT)**: Cách tính: Đơn giá × (1 − Chiết khấu) × (1 + Thuế VAT)
- **Thành tiền**: Cách tính: SL × Đơn giá
- **Thành tiền (VAT)**: Cách tính: SL × Đơn giá (VAT)
- **Đến hạn**: Cách tính: Ngày mua + Số ngày nợ của nhà cung cấp

Dữ liệu được lấy khi thoả **đủ** các điều kiện: phiếu là **phiếu mua dịch vụ**; **Ngày mua** nằm trong khoảng ngày đã chọn; thuộc **chi nhánh đang làm việc**; phiếu có nhà cung cấp; dòng có **SL khác 0**.

## 7. Kiểm tra sau khi thực hiện

Bạn xem được danh sách chi tiết các khoản mua dịch vụ theo khoảng ngày, biết tổng tiền trước và sau VAT, và xuất được ra Excel khi có quyền.

## 8. Những điều cần lưu ý

**Thành tiền** là tiền chưa trừ chiết khấu/chưa VAT; **Thành tiền (VAT)** là chỉ tiêu báo cáo trên số lượng gốc. Nguồn hiện hành không trừ lượng tất toán trong hai chỉ tiêu này, nên không dùng tổng báo cáo làm số công nợ còn phải trả. Đối chiếu phiếu dịch vụ đã lưu, tất toán, thanh toán và thống kê công nợ riêng.

⚠️ **Đến hạn** và **Số ngày nợ** lấy theo **danh mục nhà cung cấp hiện tại**. Nếu số ngày nợ của nhà cung cấp đã được sửa sau khi lập phiếu, ngày đến hạn trên màn này sẽ thay đổi theo.

⚠️ Chiết khấu và VAT trên màn này là **cộng** tỷ lệ của dòng với tỷ lệ của cả phiếu. Nếu phiếu khai cả hai, kết quả có thể khác số trên phiếu in; đối chiếu lại với phiếu gốc.

⚠️ Số liệu chỉ của **chi nhánh đang làm việc**.

### Lưới trống dù đã có phiếu mua dịch vụ 

Nguyên nhân: khoảng ngày chưa đúng; đang ở chi nhánh khác; hàng lọc / ô **Tìm kiếm…** đang lọc; phiếu chưa chọn nhà cung cấp hoặc dòng có SL = 0.
Cách xử lý: chọn lại khoảng ngày, kiểm tra chi nhánh rồi bấm **Tải lại**, xoá bộ lọc hoặc **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: tài khoản chưa có quyền **Truy cập** màn hình.
Cách xử lý: liên hệ quản trị hệ thống cấp quyền.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Màn này có phiếu mua hàng hoá không?**
Không. Chỉ lấy **phiếu mua dịch vụ**. Mua hàng hoá xem **Tiến độ giao hàng** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TIẾN ĐỘ GIAO HÀNG](/bai-viet/2026-11-07-mh-b03-0-tong-quan-man-hinh-thong-ke-tien-do-giao-hang/)) hoặc **Nhập mua chi tiết** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ NHẬP MUA CHI TIẾT](/bai-viet/2026-11-07-mh-b04-0-tong-quan-man-hinh-thong-ke-nhap-mua-chi-tiet/)).

**Cần xem số liệu của chi nhánh khác thì làm thế nào?**
Mở tên miền riêng do admin cấp và đăng nhập bằng tài khoản riêng của chi nhánh cần xem. Không có nút chọn chi nhánh khác trong phiên ERP hệ thống chính thức.

**Số tổng ở dòng TỔNG CỘNG có tính các dòng bị lọc ẩn không?**
Không. Dòng tổng chỉ cộng các dòng đang thoả bộ lọc.

## 11. Công việc tiếp theo

```text
Mua dịch vụ chi tiết → đối chiếu hoá đơn NCC → sửa phiếu nếu sai (MH-A02.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-0-tong-quan-man-hinh-phieu-mua-dich-vu/) – Tổng quan màn hình Phiếu mua dịch vụ
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ TIẾN ĐỘ GIAO HÀNG](/bai-viet/2026-11-07-mh-b03-0-tong-quan-man-hinh-thong-ke-tien-do-giao-hang/) – Tổng quan màn hình thống kê Tiến độ giao hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ NHẬP MUA CHI TIẾT](/bai-viet/2026-11-07-mh-b04-0-tong-quan-man-hinh-thong-ke-nhap-mua-chi-tiet/) – Tổng quan màn hình thống kê Nhập mua chi tiết
