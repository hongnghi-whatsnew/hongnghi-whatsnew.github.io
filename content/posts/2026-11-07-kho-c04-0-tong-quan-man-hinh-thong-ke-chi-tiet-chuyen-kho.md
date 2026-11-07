---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT CHUYỂN KHO"
date: "2026-11-07"
summary: "Màn hình Xuất chuyển kho (tiêu đề trên màn: THỐNG KÊ - CHI TIẾT CHUYỂN KHO) liệt kê từng dòng hàng trên các phiếu xuất chuyển kho của chi nhánh đang làm việc trong khoảng ngày bạn chọn, kèm trạng thái nhập ở kho nhận và phiếu nhập chuyển kho đã lập."
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

Màn hình **Xuất chuyển kho** (tiêu đề trên màn: **THỐNG KÊ - CHI TIẾT CHUYỂN KHO**) liệt kê **từng dòng hàng trên các phiếu xuất chuyển kho** của **chi nhánh đang làm việc** trong khoảng ngày bạn chọn, kèm **trạng thái nhập** ở kho nhận và **phiếu nhập chuyển kho** đã lập.

Bạn dùng màn hình này khi:

- Theo dõi hàng đang trên đường giữa hai kho: phiếu nào đã xuất mà kho nhận chưa nhập.
- Kiểm tra tài xế, xe chở từng chuyến chuyển kho.
- Đối chiếu ngày xuất và ngày nhập của một chuyến chuyển kho.

Màn hình chỉ để **xem**. Muốn lập, sửa phiếu, dùng **Phiếu xuất chuyển kho** ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-0-tong-quan-man-hinh-phieu-xuat-chuyen-kho/)) và **Phiếu nhập chuyển kho** ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-0-tong-quan-man-hinh-phieu-nhap-chuyen-kho/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** cần xem ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có **phiếu xuất chuyển kho** ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-0-tong-quan-man-hinh-phieu-xuat-chuyen-kho/)) trong khoảng ngày cần xem.

## 2. Mở chức năng

**Thống kê kho → Xuất chuyển kho**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ - CHI TIẾT CHUYỂN KHO](/posts/2026-11-07-kho-c04-0-tong-quan-man-hinh-thong-ke-chi-tiet-chuyen-kho/hinh-01-man-hinh-chi-tiet-chuyen-kho.png)

Hình 1 chụp ngày 09/10/2026 khi lưới chưa có dòng (*Không có dữ liệu*, **TỔNG CỘNG: 0**).

- **Ô khoảng ngày**: Chức năng: Chọn khoảng ngày chuyển kho, mặc định **hôm nay** (`today`); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất lưới ra Excel (chỉ hiện khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột, trong đó có cột ẩn sẵn **Mã kho xuất**, **Mã kho nhập**, **Mã hàng hóa**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Hàng lọc dưới tiêu đề cột**: Chức năng: Lọc từng cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng TỔNG CỘNG**: Chức năng: Số dòng và tổng cột **Số lượng**; Hướng dẫn: phần “Những điều cần lưu ý”

Lưới hiện **10 dòng mỗi trang** (chọn được 10 / 15 / 20). Lưới nhớ bố cục cột; ô khoảng ngày nhớ mốc đã chọn ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Các cột trên lưới:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày chuyển kho**: Ý nghĩa: Ngày xuất chuyển kho trên phiếu
- **Mã phiếu xuất**: Ý nghĩa: Mã phiếu xuất chuyển kho (dạng **XC…**)
- **Phiếu gốc**: Ý nghĩa: Mã phiếu gốc ghi trên phiếu xuất
- **Tên kho xuất**: Ý nghĩa: Kho chuyển hàng đi
- **Tên kho nhập**: Ý nghĩa: Kho nhận hàng
- **Mã kho xuất, Mã kho nhập**: Ý nghĩa: Mã hai kho (ẩn sẵn)
- **Tài xế**: Ý nghĩa: Tài xế chở chuyến hàng
- **Xe**: Ý nghĩa: Biển số xe
- **Ghi chú**: Ý nghĩa: Ghi chú của phiếu xuất
- **Tên hàng hóa**: Ý nghĩa: Tên hàng
- **Mã hàng hóa**: Ý nghĩa: Mã hàng (ẩn sẵn)
- **Đvt**: Ý nghĩa: Đơn vị tính của dòng
- **Số lượng**: Ý nghĩa: Số lượng xuất chuyển của dòng
- **Chú thích**: Ý nghĩa: Chú thích của dòng hàng
- **Trạng thái**: Ý nghĩa: Trạng thái nhập của dòng ở kho nhận (xem phần “Giải thích các thông tin trên màn hình”)
- **Mã phiếu nhập**: Ý nghĩa: Mã phiếu nhập chuyển kho lập từ phiếu xuất này (dạng **NC…**), trống nếu chưa nhập
- **Ngày nhập**: Ý nghĩa: Ngày nhập chuyển kho của phiếu nhập
- **Người tạo, Ngày tạo**: Ý nghĩa: Người lập phiếu xuất và thời điểm lập
- **Người sửa, Ngày sửa**: Ý nghĩa: Người sửa phiếu xuất gần nhất và thời điểm sửa

Màn hình **không có** thao tác nhấp đúp xem chi tiết.

## 4. Trình tự công việc

```text
Phiếu xuất chuyển kho (KHO-A06) ──► Trạng thái: Chưa nhập
      ↓
Phiếu nhập chuyển kho từ phiếu xuất (KHO-A08)
      ↓
Nhập một phần → Đang nhập; nhập đủ → Đã nhập
(cột Mã phiếu nhập, Ngày nhập có giá trị)
```

## 5. Thực hiện trên phần mềm

- **Xem các chuyến chuyển kho trong kỳ**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm hàng chưa nhập ở kho nhận**: Cách làm: Lọc cột **Trạng thái** = **Chưa nhập** / **Đang nhập**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem chuyến của một tài xế / một xe**: Cách làm: Lọc cột **Tài xế** hoặc **Xe**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Nhập hàng ở kho nhận**: Cách làm: Lập phiếu nhập chuyển kho; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-0-tong-quan-man-hinh-phieu-nhap-chuyen-kho/)

### Tìm hàng đã xuất chuyển mà kho nhận chưa nhập

**Bước 1 –** Mở **Thống kê kho → Xuất chuyển kho**.

**Bước 2 –** Bấm ô khoảng ngày, chọn **Tháng này** (hoặc khoảng cần rà). Lưới tự tải.

**Bước 3 –** Ở hàng lọc cột **Trạng thái**, gõ **Chưa nhập** (hoặc dùng nút lọc của cột để chọn **Chưa nhập**, **Đang nhập**).

**Bước 4 –** Báo kho nhận lập phiếu nhập chuyển kho ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-0-tong-quan-man-hinh-phieu-nhap-chuyen-kho/)) cho các dòng còn lại.

## 6. Giải thích các thông tin trên màn hình

- **Trạng thái**: Cách tính: Hệ thống cộng số lượng đã nhập (quy về đơn vị gốc) trên các phiếu nhập chuyển kho lập từ dòng này: chưa nhập gì → **Chưa nhập**; nhập ít hơn số xuất → **Đang nhập**; nhập đủ hoặc hơn → **Đã nhập**
- **Mã phiếu nhập, Ngày nhập**: Cách tính: Phiếu nhập chuyển kho lập từ phiếu xuất này
- **Khoảng ngày**: Cách tính: **Ngày chuyển kho** nằm trong khoảng ngày đã chọn (tính cả hai đầu)
- **Chi nhánh**: Cách tính: Phiếu thuộc chi nhánh đang làm việc
- **Kho**: Cách tính: Kho xuất chuyển của phiếu nằm trong các kho được phân cho tài khoản
- **Thứ tự**: Cách tính: Ngày chuyển kho mới nhất lên trước, trong cùng ngày theo thứ tự dòng hàng

## 7. Kiểm tra sau khi thực hiện

Bạn biết từng chuyến chuyển kho đã đi những hàng gì, xe và tài xế nào, kho nhận đã nhập đủ chưa và nhập bằng phiếu nào.

## 8. Những điều cần lưu ý

⚠️ Tồn kho xuất **giảm ngay khi lưu phiếu xuất chuyển kho**; kho nhận chỉ **tăng khi lập phiếu nhập chuyển kho**. Hàng ở trạng thái **Chưa nhập** không nằm trong tồn của kho nào.

⚠️ Một phiếu xuất được nhập bằng **nhiều phiếu nhập** sẽ hiện **lặp lại** mỗi dòng hàng cho từng phiếu nhập; khi đó dòng **TỔNG CỘNG** cộng trùng số lượng.

⚠️ Tổng **Số lượng** cộng mọi mặt hàng, mọi đơn vị tính. Chỉ đọc tổng khi đã lọc còn một mặt hàng.

⚠️ Bấm **Tải lại** sau khi chọn điều kiện báo cáo. Đối chiếu kho xuất/kho nhận trong dữ liệu của đúng hệ thống đang truy cập.

### Lưới trống dù đã lập phiếu 

Nguyên nhân: khoảng ngày chưa chứa ngày chuyển kho, đang ở chi nhánh khác, hoặc tài khoản chưa được phân **kho xuất** của phiếu (tài khoản chỉ được phân kho nhận sẽ không thấy).
Cách xử lý: chọn lại khoảng ngày, kiểm tra chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)), bấm **Tải lại**; vẫn trống thì nhờ quản trị hệ thống phân kho.

### Đã lập phiếu nhập nhưng Trạng thái vẫn là Đang nhập 

Nguyên nhân có thể là số nhận lịch sử chưa đủ hoặc chênh lệch quy đổi; trạng thái này chưa xác định được nguyên nhân.
Cách xử lý: đối chiếu phiếu xuất, mọi phiếu nhập và đơn vị theo [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-0-tong-quan-man-hinh-phieu-nhap-chuyen-kho/)/A08.1. cửa sổ hiện khóa số lượng và nhận toàn phần còn lại; không tự lập thêm phiếu để bù khi chưa có hàng thực nhận và chưa chốt phương án.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Thủ kho kho nhận có xem được màn này không?**
Chỉ khi tài khoản cũng được phân **kho xuất** của phiếu. Kho nhận xem phiếu chờ nhập ngay trong cửa sổ chọn phiếu khi **Thêm mới** phiếu nhập chuyển kho ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-0-tong-quan-man-hinh-phieu-nhap-chuyen-kho/)).

**Màn này có hiện phiếu nhập chuyển kho lập tay (không từ phiếu xuất) không?**
Không. Màn chỉ đi từ phiếu xuất chuyển kho.

## 11. Công việc tiếp theo

```text
Trạng thái Chưa nhập / Đang nhập → Phiếu nhập chuyển kho (KHO-A08.0)
Phiếu xuất sai → Phiếu xuất chuyển kho (KHO-A06.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-0-tong-quan-man-hinh-phieu-xuat-chuyen-kho/) – Tổng quan màn hình Phiếu xuất chuyển kho
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-0-tong-quan-man-hinh-phieu-nhap-chuyen-kho/) – Tổng quan màn hình Phiếu nhập chuyển kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/) – Tổng quan màn hình thống kê Xuất nhập tồn
