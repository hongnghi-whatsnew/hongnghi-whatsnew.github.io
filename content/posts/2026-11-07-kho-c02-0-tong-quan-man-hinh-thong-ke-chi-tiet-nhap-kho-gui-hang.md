---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT NHẬP KHO GỬI HÀNG"
date: "2026-11-07"
summary: "Màn hình Nhập kho gửi hàng liệt kê từng dòng hàng trên các phiếu nhập kho gửi hàng (hàng khách hoặc đối tác gửi lại kho) của chi nhánh đang làm việc trong khoảng ngày bạn chọn."
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

Màn hình **Nhập kho gửi hàng** liệt kê **từng dòng hàng trên các phiếu nhập kho gửi hàng** (hàng khách hoặc đối tác gửi lại kho) của **chi nhánh đang làm việc** trong khoảng ngày bạn chọn. Mỗi dòng là một mặt hàng trên một phiếu.

Bạn dùng màn hình này khi:

- Kiểm tra trong kỳ kho đã nhận hàng gửi của ai, hàng gì, bao nhiêu.
- Đối chiếu phiếu gửi hàng giấy với dữ liệu trên hệ thống.
- Xuất danh sách hàng gửi gửi cho kế toán hoặc quản lý.

Màn hình chỉ để **xem**. Muốn lập, sửa, xoá phiếu, dùng màn **Phiếu nhập gửi hàng** ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-0-tong-quan-man-hinh-phieu-nhap-gui-hang/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** cần xem ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có **phiếu nhập gửi hàng** ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-0-tong-quan-man-hinh-phieu-nhap-gui-hang/)) trong khoảng ngày cần xem.

## 2. Mở chức năng

**Thống kê kho → Nhập kho gửi hàng**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ - CHI TIẾT NHẬP KHO GỬI HÀNG](/posts/2026-11-07-kho-c02-0-tong-quan-man-hinh-thong-ke-chi-tiet-nhap-kho-gui-hang/hinh-01-man-hinh-nhap-kho-gui-hang.png)

Hình 1 chụp khi lưới chưa có dòng (*Không có dữ liệu*), khoảng ngày đang nhớ mốc **yr** (cả năm). Dòng tổng  chỉ hiện số dưới cột **Số lượng**, không có chữ TỔNG CỘNG.

- **Ô khoảng ngày**: Chức năng: Chọn khoảng ngày nhập, mặc định **hôm nay** (`today`); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất lưới ra Excel (chỉ hiện khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột, trong đó có cột ẩn sẵn **Mã kho**, **Mã hàng hóa**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Hàng lọc dưới tiêu đề cột**: Chức năng: Lọc từng cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: Tổng cột **Số lượng**; Hướng dẫn: phần “Những điều cần lưu ý”

Lưới hiện **10 dòng mỗi trang** (chọn được 10 / 15 / 20). Lưới nhớ bố cục cột; ô khoảng ngày nhớ mốc đã chọn cho lần mở sau ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Các cột trên lưới:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày nhập**: Ý nghĩa: Ngày nhập gửi trên phiếu
- **Mã phiếu**: Ý nghĩa: Mã phiếu nhập gửi hàng (dạng **GH…**)
- **Phiếu gốc**: Ý nghĩa: Mã phiếu gốc ghi trên phiếu
- **Tên kho**: Ý nghĩa: Kho nhận hàng gửi của dòng
- **Mã kho**: Ý nghĩa: Mã kho (ẩn sẵn)
- **Ghi chú**: Ý nghĩa: Ghi chú của phiếu
- **Tên hàng hóa**: Ý nghĩa: Tên hàng
- **Mã hàng hóa**: Ý nghĩa: Mã hàng (ẩn sẵn)
- **Đvt**: Ý nghĩa: Đơn vị tính của dòng
- **Số lượng**: Ý nghĩa: Số lượng nhập gửi của dòng
- **Chú thích**: Ý nghĩa: Chú thích của dòng hàng
- **Người tạo, Ngày tạo**: Ý nghĩa: Người lập phiếu và thời điểm lập (giờ:phút ngày)
- **Người sửa, Ngày sửa**: Ý nghĩa: Người sửa phiếu gần nhất và thời điểm sửa

Màn hình **không có** thao tác nhấp đúp xem chi tiết.

## 4. Trình tự công việc

```text
Phiếu nhập gửi hàng (KHO-A02) ──► Thống kê Nhập kho gửi hàng (mỗi dòng hàng một dòng)
                                        │
                                        └── Lọc, tìm, xuất Excel (GEN-04, GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Xem hàng gửi trong kỳ**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm theo phiếu / hàng / kho**: Cách làm: Gõ vào **Tìm kiếm…** hoặc lọc cột; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Sửa phiếu sai**: Cách làm: Mở màn Phiếu nhập gửi hàng; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-0-tong-quan-man-hinh-phieu-nhap-gui-hang/)

### Xem hàng gửi của một tháng

**Bước 1 –** Mở **Thống kê kho → Nhập kho gửi hàng**.

**Bước 2 –** Bấm ô khoảng ngày, chọn **Tháng này** (hoặc tháng cần xem). Lưới tự tải.

**Bước 3 –** Lọc cột **Tên kho** hoặc **Tên hàng hóa** nếu cần, đọc tổng **Số lượng** ở cuối lưới.

## 6. Giải thích các thông tin trên màn hình

- **Khoảng ngày**: Cách lấy: **Ngày nhập** của phiếu nằm trong khoảng ngày đã chọn (tính cả hai đầu)
- **Chi nhánh**: Cách lấy: Phiếu thuộc chi nhánh đang làm việc
- **Kho**: Cách lấy: Kho nhập gửi của phiếu nằm trong các kho được phân cho tài khoản
- **Thứ tự**: Cách lấy: Ngày nhập mới nhất lên trước, trong cùng ngày theo thứ tự dòng hàng

Các cột lấy nguyên từ phiếu nhập gửi hàng, không có cột tính toán.

## 7. Kiểm tra sau khi thực hiện

Bạn có danh sách chi tiết hàng gửi đã nhập kho trong kỳ, biết phiếu, kho, hàng, số lượng và người lập.

## 8. Những điều cần lưu ý

⚠️ Hàng nhập gửi **được cộng vào tồn kho** như hàng nhập thường (xem Sổ cái kho [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/)). Khi bán hoặc xuất hàng, cần phân biệt hàng của công ty với hàng khách gửi.

⚠️ Tổng **Số lượng** ở cuối lưới cộng mọi mặt hàng, mọi đơn vị tính. Chỉ đọc tổng khi đã lọc còn một mặt hàng.

⚠️ Bấm **Tải lại** sau khi chọn điều kiện báo cáo. Kiểm tra số liệu trong đúng hệ thống và phạm vi kho được cấp; hệ thống chi nhánh khác cần truy cập tên miền riêng.

### Lưới trống dù đã lập phiếu 

Nguyên nhân: khoảng ngày chưa chứa ngày nhập của phiếu, đang ở chi nhánh khác, hoặc tài khoản chưa được phân kho nhập gửi của phiếu.
Cách xử lý: chọn lại khoảng ngày, kiểm tra chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)), bấm **Tải lại**; vẫn trống thì nhờ quản trị hệ thống phân kho.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Màn này có cho biết hàng gửi đã trả lại khách chưa?**
Không. Màn chỉ liệt kê phiếu nhập gửi. Muốn biết tồn hiện tại của hàng gửi, xem **Xuất nhập tồn** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/)) theo kho chứa hàng gửi.

**Vì sao không thấy số dòng ở cuối lưới?**
Dòng tổng của màn này chỉ hiện tổng **Số lượng**. Số dòng xem ở thanh phân trang dưới lưới.

## 11. Công việc tiếp theo

```text
Thấy dòng sai → Phiếu nhập gửi hàng (KHO-A02.0) sửa phiếu
Xem tồn kho có cả hàng gửi → Xuất nhập tồn (KHO-C07.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-0-tong-quan-man-hinh-phieu-nhap-gui-hang/) – Tổng quan màn hình Phiếu nhập gửi hàng
- [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/) – Tổng quan màn hình Sổ cái kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/) – Tổng quan màn hình thống kê Xuất nhập tồn
