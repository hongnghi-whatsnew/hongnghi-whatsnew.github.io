---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ HÀNG CHỜ NHẬP KHO"
date: "2026-11-07"
summary: "Màn hình Hàng chờ nhập kho cho biết những mặt hàng đã mua của nhà cung cấp nhưng chưa nhập kho hết tại chi nhánh đang làm việc, tính đến thời điểm xem."
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

Màn hình **Hàng chờ nhập kho** cho biết **những mặt hàng đã mua của nhà cung cấp nhưng chưa nhập kho hết** tại **chi nhánh đang làm việc**, tính đến thời điểm xem. Mỗi dòng là một mặt hàng, cột **SL** là tổng số lượng còn chờ về của mặt hàng đó trên tất cả phiếu mua hàng.

Bạn dùng màn hình này khi:

- Kiểm tra hàng đang về trước khi đặt thêm hàng.
- Trả lời khách hàng / bộ phận bán hàng về hàng sắp về.
- Đôn đốc nhà cung cấp giao phần còn thiếu.

Màn hình **không có bộ lọc ngày**: luôn tính trên toàn bộ phiếu mua hàng còn hàng chưa nhập.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** cần xem ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có **phiếu mua hàng** ([TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/)) còn số lượng chưa nhập kho.

## 2. Mở chức năng

**Thống kê mua hàng → Hàng chờ nhập kho**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ HÀNG CHỜ NHẬP KHO](/posts/2026-11-07-mh-b02-0-tong-quan-man-hinh-thong-ke-hang-cho-nhap-kho/hinh-01-man-hinh-hang-cho-nhap-kho.png)

- **Tải lại**: Chức năng: Lấy lại số liệu mới nhất
- **Biểu tượng Xuất Excel**: Chức năng: Xuất lưới ra Excel (chỉ hiện khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Hàng lọc dưới tiêu đề cột**: Chức năng: Lọc từng cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: Số dòng và tổng cột **SL**

**Các cột trên lưới:**

- **STT**: Ý nghĩa: Số thứ tự
- **Tên hàng hoá**: Ý nghĩa: Tên mặt hàng
- **Tiêu chuẩn**: Ý nghĩa: Tiêu chuẩn của hàng hoá
- **Dày, Rộng, Dài**: Ý nghĩa: Kích thước của hàng hoá
- **NCC**: Ý nghĩa: Thông tin NCC khai trên hàng hoá trong danh mục
- **Loại hàng**: Ý nghĩa: Loại hàng của hàng hoá
- **M3**: Ý nghĩa: Số m³ của một đơn vị hàng (khai trong danh mục hàng hoá)
- **Tấm/Kiện**: Ý nghĩa: Số tấm trong một kiện (khai trong danh mục hàng hoá)
- **Đvt**: Ý nghĩa: Đơn vị tính của hàng hoá
- **SL**: Ý nghĩa: Tổng số lượng còn chờ nhập kho

**Nhấp đúp vào một dòng** để mở cửa sổ **XEM CHI TIẾT**: danh sách các dòng phiếu mua hàng của mặt hàng đó chưa nhập xong.

![Hình 2: Cửa sổ XEM CHI TIẾT các phiếu mua đang về](/posts/2026-11-07-mh-b02-0-tong-quan-man-hinh-thong-ke-hang-cho-nhap-kho/hinh-02-xem-chi-tiet-dang-ve.png)

- **Ngày phát sinh**: Ý nghĩa: Ngày của phiếu mua hàng
- **Mã phiếu**: Ý nghĩa: Mã phiếu mua hàng
- **Diễn giải**: Ý nghĩa: Ghi chú của phiếu mua
- **Kho hàng**: Ý nghĩa: Để trống (phiếu mua chưa có kho)
- **Mã hàng, Đvt**: Ý nghĩa: Mã hàng và đơn vị tính trên dòng phiếu mua
- **Số lượng**: Ý nghĩa: SL mua − SL đã nhập − SL tất toán của dòng
- **Ngày nhập kho dự kiến**: Ý nghĩa: Ngày nhận hàng dự kiến khai trên dòng phiếu mua
- **Chú thích**: Ý nghĩa: Chú thích của dòng phiếu mua

Cửa sổ chi tiết có nút **Tải lại**, ô **Tìm kiếm…**, hàng lọc, **Trình chọn cột** và biểu tượng **Xuất Excel** giống lưới chính.

## 4. Trình tự công việc

```text
Phiếu mua hàng (MH-A03) ──► Hàng chờ nhập kho (SL còn chờ)
      ↓                              │
Phiếu nhập kho từ phiếu mua          └── Nhấp đúp ──► XEM CHI TIẾT
      ↓
SL chờ nhập giảm dần → hết chờ thì dòng biến mất
```

## 5. Thực hiện trên phần mềm

- **Xem hàng đang về**: Cách làm: Mở màn hình, lưới tự tải
- **Tìm một mặt hàng**: Cách làm: Gõ tên vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem hàng đang về thuộc phiếu mua nào**: Cách làm: Nhấp đúp vào dòng
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Nhập kho hàng đã về**: Cách làm: Lập phiếu nhập kho từ phiếu mua; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/)
- **Tất toán phần NCC không giao**: Cách làm: Tất toán trên phiếu mua hàng; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/)

### Xem một mặt hàng đang chờ về từ những phiếu nào

**Bước 1 –** Mở **Thống kê mua hàng → Hàng chờ nhập kho**.

**Bước 2 –** Gõ tên hàng vào ô **Tìm kiếm…**.

**Bước 3 –** Nhấp đúp vào dòng hàng. Cửa sổ **XEM CHI TIẾT** liệt kê từng phiếu mua còn hàng chưa nhập, kèm **Ngày nhập kho dự kiến**.

**Bước 4 –** Đóng cửa sổ để quay lại danh sách.

## 6. Giải thích các thông tin trên màn hình

- **SL**: Cách tính: Cộng, trên mọi dòng phiếu mua hàng của chi nhánh: **SL mua − SL tất toán − SL đã nhập**, chỉ tính dòng còn lớn hơn 0

Không tính **phiếu mua dịch vụ**. Các cột Tiêu chuẩn, Dày, Rộng, Dài, NCC, Loại hàng, M3, Tấm/Kiện, Đvt lấy từ danh mục hàng hoá.

## 7. Kiểm tra sau khi thực hiện

Bạn biết mặt hàng nào đang chờ nhà cung cấp giao, số lượng bao nhiêu, thuộc phiếu mua nào và dự kiến về ngày nào.

## 8. Những điều cần lưu ý

⚠️ Hàng nhà cung cấp **không giao nữa** mà chưa **tất toán** trên phiếu mua sẽ **nằm mãi** trong danh sách và làm sai **Gợi ý mua hàng** ([TỔNG QUAN MÀN HÌNH GỢI Ý MUA HÀNG](/bai-viet/2026-11-07-mh-b05-0-tong-quan-man-hinh-goi-y-mua-hang/)), vì gợi ý trừ đi số hàng chờ nhập.

⚠️ Đọc số liệu trong **đúng hệ thống chi nhánh đang truy cập**; đối chiếu cả quyền kho/khách hàng và điều kiện lọc. Nếu cần dữ liệu chi nhánh khác, dùng tên miền và tài khoản riêng.

⚠️ **SL** cộng thẳng số lượng trên các dòng phiếu mua. Nếu cùng một mặt hàng được mua theo nhiều đơn vị tính khác nhau, tổng có thể không cùng đơn vị với cột **Đvt**.

### Nhấp đúp báo "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: cửa sổ chi tiết dùng quyền của thống kê **Xuất nhập tồn** / **Xuất nhập tồn lô hàng**. Tài khoản chỉ có quyền Hàng chờ nhập kho thì không mở được.
Cách xử lý: liên hệ quản trị hệ thống cấp quyền **Truy cập** một trong hai màn trên.

### Hàng đã nhập kho đủ nhưng vẫn còn trong danh sách 

Nguyên nhân: phiếu nhập kho không lập từ phiếu mua (nhập lẻ), nên phiếu mua không ghi nhận số đã nhập.
Cách xử lý: đối chiếu phiếu mua và toàn bộ phiếu nhập của hàng, xác định liên kết còn thiếu với thủ kho/kế toán. Chỉ tất toán phần không còn thực hiện khi đã được duyệt; không dùng tất toán thay việc xử lý nhập trùng hoặc liên kết sai.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Có xem được hàng chờ nhập của một khoảng thời gian không?**
Không. Màn này luôn tính trên toàn bộ phiếu mua còn hàng chưa nhập. Muốn xem theo ngày mua, dùng **Tiến độ giao hàng** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TIẾN ĐỘ GIAO HÀNG](/bai-viet/2026-11-07-mh-b03-0-tong-quan-man-hinh-thong-ke-tien-do-giao-hang/)).

## 11. Công việc tiếp theo

```text
Hàng chờ nhập kho → hàng về → Phiếu nhập kho (KHO-A04.0)
                  → NCC không giao nữa → Tất toán trên phiếu mua (MH-A03.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/) – Tổng quan màn hình Phiếu mua hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ TIẾN ĐỘ GIAO HÀNG](/bai-viet/2026-11-07-mh-b03-0-tong-quan-man-hinh-thong-ke-tien-do-giao-hang/) – Tổng quan màn hình thống kê Tiến độ giao hàng
- [TỔNG QUAN MÀN HÌNH GỢI Ý MUA HÀNG](/bai-viet/2026-11-07-mh-b05-0-tong-quan-man-hinh-goi-y-mua-hang/) – Tổng quan màn hình Gợi ý mua hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/) – Tổng quan màn hình Phiếu nhập kho

### Vì sao số trong cửa sổ chi tiết khác cột SL?

Cửa sổ chi tiết liệt kê theo trạng thái nhập của từng dòng phiếu mua, còn cột **SL** chỉ cộng dòng có số chờ lớn hơn 0. Khi lệch số, kiểm tra các dòng phiếu mua có số lượng 0 hoặc âm.
