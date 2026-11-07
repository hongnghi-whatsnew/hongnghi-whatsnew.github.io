---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT XUẤT KHÁC"
date: "2026-11-07"
summary: "Màn hình Xuất khác (tiêu đề trên màn: THỐNG KÊ - CHI TIẾT XUẤT HÀNG) liệt kê từng dòng hàng trên các phiếu xuất hàng của chi nhánh đang làm việc trong khoảng ngày bạn chọn."
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

Màn hình **Xuất khác** (tiêu đề trên màn: **THỐNG KÊ - CHI TIẾT XUẤT HÀNG**) liệt kê **từng dòng hàng trên các phiếu xuất hàng** của **chi nhánh đang làm việc** trong khoảng ngày bạn chọn. Phiếu xuất hàng (KHO-A07) dùng cho các trường hợp xuất kho **không phải bán hàng, không trả nhà cung cấp, không chuyển kho**: xuất mẫu, xuất dùng nội bộ, xuất huỷ…

Bạn dùng màn hình này khi:

- Rà các lần xuất kho ngoài bán hàng trong kỳ: xuất gì, kho nào, lý do (ghi chú).
- Đối chiếu với phiếu giấy hoặc đề nghị xuất.
- Xuất danh sách cho kế toán hạch toán.

Màn hình chỉ để **xem**. Muốn lập, sửa, xoá phiếu, dùng màn **Phiếu xuất hàng** ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-0-tong-quan-man-hinh-phieu-xuat-hang/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** cần xem ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có **phiếu xuất hàng** ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-0-tong-quan-man-hinh-phieu-xuat-hang/)) trong khoảng ngày cần xem.

## 2. Mở chức năng

**Thống kê kho → Xuất khác**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ - CHI TIẾT XUẤT HÀNG](/posts/2026-11-07-kho-c03-0-tong-quan-man-hinh-thong-ke-chi-tiet-xuat-khac/hinh-01-man-hinh-chi-tiet-xuat-hang.png)

Hình 1 chụp ngày 09/10/2026 khi lưới chưa có dòng (*Không có dữ liệu*, **TỔNG CỘNG: 0**).

- **Ô khoảng ngày**: Chức năng: Chọn khoảng ngày xuất, mặc định **hôm nay** (`today`); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất lưới ra Excel (chỉ hiện khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột, trong đó có cột ẩn sẵn **Mã kho**, **Mã hàng hóa**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Hàng lọc dưới tiêu đề cột**: Chức năng: Lọc từng cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng TỔNG CỘNG**: Chức năng: Số dòng và tổng cột **Số lượng**; Hướng dẫn: phần “Những điều cần lưu ý”

Lưới hiện **10 dòng mỗi trang** (chọn được 10 / 15 / 20). Lưới nhớ bố cục cột; ô khoảng ngày nhớ mốc đã chọn ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Các cột trên lưới:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày xuất**: Ý nghĩa: Ngày xuất hàng trên phiếu
- **Mã phiếu**: Ý nghĩa: Mã phiếu xuất hàng (dạng **XH…**)
- **Mã phiếu gốc**: Ý nghĩa: Mã phiếu gốc ghi trên phiếu
- **Tên kho xuất**: Ý nghĩa: Kho xuất của dòng hàng
- **Mã kho**: Ý nghĩa: Mã kho xuất (ẩn sẵn)
- **Ghi chú**: Ý nghĩa: Ghi chú của phiếu (thường ghi lý do xuất)
- **Tên hàng hóa**: Ý nghĩa: Tên hàng
- **Mã hàng hóa**: Ý nghĩa: Mã hàng (ẩn sẵn)
- **Đvt**: Ý nghĩa: Đơn vị tính của dòng
- **Số lượng**: Ý nghĩa: Số lượng xuất của dòng
- **Chú thích**: Ý nghĩa: Chú thích của dòng hàng
- **Người tạo, Ngày tạo**: Ý nghĩa: Người lập phiếu và thời điểm lập (giờ:phút ngày)
- **Người sửa, Ngày sửa**: Ý nghĩa: Người sửa phiếu gần nhất và thời điểm sửa

Màn hình **không có** thao tác nhấp đúp xem chi tiết.

## 4. Trình tự công việc

```text
Phiếu xuất hàng – xuất khác (KHO-A07)
      ↓
Thống kê Xuất khác (mỗi dòng hàng một dòng)
      └── Lọc, tìm, xuất Excel (GEN-04, GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Xem các lần xuất khác trong kỳ**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm theo lý do xuất**: Cách làm: Gõ vào **Tìm kiếm…** hoặc lọc cột **Ghi chú**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Sửa phiếu sai**: Cách làm: Mở màn Phiếu xuất hàng; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-0-tong-quan-man-hinh-phieu-xuat-hang/)

### Xem hàng xuất khác của một kho trong tháng

**Bước 1 –** Mở **Thống kê kho → Xuất khác**.

**Bước 2 –** Bấm ô khoảng ngày, chọn **Tháng này**. Lưới tự tải.

**Bước 3 –** Lọc cột **Tên kho xuất** theo kho cần xem. Đọc dòng **TỔNG CỘNG** ở cuối lưới.

## 6. Giải thích các thông tin trên màn hình

- **Khoảng ngày**: Cách lấy: **Ngày xuất** của phiếu nằm trong khoảng ngày đã chọn (tính cả hai đầu)
- **Chi nhánh**: Cách lấy: Phiếu thuộc chi nhánh đang làm việc
- **Kho**: Cách lấy: Kho xuất của phiếu nằm trong các kho được phân cho tài khoản
- **Thứ tự**: Cách lấy: Ngày xuất mới nhất lên trước, trong cùng ngày theo thứ tự dòng hàng

Các cột lấy nguyên từ phiếu xuất hàng, không có cột tính toán, không có giá trị tiền.

## 7. Kiểm tra sau khi thực hiện

Bạn có danh sách chi tiết hàng xuất khác trong kỳ, biết phiếu, kho, hàng, số lượng, lý do và người lập.

## 8. Những điều cần lưu ý

⚠️ Tên menu là **Xuất khác** nhưng tiêu đề màn là **THỐNG KÊ - CHI TIẾT XUẤT HÀNG**. Màn này **không** gồm phiếu xuất bán hàng, xuất trả nhà cung cấp hay xuất chuyển kho.

⚠️ Tổng **Số lượng** ở dòng **TỔNG CỘNG** cộng mọi mặt hàng, mọi đơn vị tính. Chỉ đọc tổng khi đã lọc còn một mặt hàng.

⚠️ Bấm **Tải lại** sau khi chọn điều kiện báo cáo. Kiểm tra đúng hệ thống chi nhánh và phạm vi kho được cấp trước khi đối chiếu phiếu xuất.

### Lưới trống dù đã lập phiếu 

Nguyên nhân: khoảng ngày chưa chứa ngày xuất của phiếu, đang ở chi nhánh khác, hoặc tài khoản chưa được phân kho xuất của phiếu.
Cách xử lý: chọn lại khoảng ngày, kiểm tra chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)), bấm **Tải lại**; vẫn trống thì nhờ quản trị hệ thống phân kho.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Muốn xem phiếu xuất bán hàng thì vào đâu?**
Dùng **Xuất bán chi tiết** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT BÁN CHI TIẾT](/bai-viet/2026-11-07-bh-b05-0-tong-quan-man-hinh-thong-ke-xuat-ban-chi-tiet/)) hoặc **Xuất nhập tồn trong ngày** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN TRONG NGÀY](/bai-viet/2026-11-07-kho-c01-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton-trong-ngay/)).

**Màn này có giá trị tiền không?**
Không. Muốn biết giá trị xuất theo giá vốn, xem **Xuất nhập tồn** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/)) khi có quyền **Xem giá vốn**.

## 11. Công việc tiếp theo

```text
Thấy dòng sai → Phiếu xuất hàng (KHO-A07.0) sửa phiếu
Xem ảnh hưởng tới tồn → Xuất nhập tồn (KHO-C07.0), Sổ cái kho (KHO-A09.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-0-tong-quan-man-hinh-phieu-xuat-hang/) – Tổng quan màn hình Phiếu xuất hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN TRONG NGÀY](/bai-viet/2026-11-07-kho-c01-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton-trong-ngay/) – Tổng quan màn hình thống kê Xuất nhập tồn trong ngày
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/) – Tổng quan màn hình thống kê Xuất nhập tồn
