---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT ĐIỀU CHỈNH KHO"
date: "2026-11-07"
summary: "Màn hình Điều chỉnh kho (tiêu đề trên màn: THỐNG KÊ - CHI TIẾT ĐIỀU CHỈNH KHO) liệt kê từng dòng hàng trên các phiếu điều chỉnh kho của chi nhánh đang làm việc trong khoảng ngày bạn chọn, tách sẵn phần Tăng và Giảm."
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

Màn hình **Điều chỉnh kho** (tiêu đề trên màn: **THỐNG KÊ - CHI TIẾT ĐIỀU CHỈNH KHO**) liệt kê **từng dòng hàng trên các phiếu điều chỉnh kho** của **chi nhánh đang làm việc** trong khoảng ngày bạn chọn, tách sẵn phần **Tăng** và **Giảm**.

Bạn dùng màn hình này khi:

- Rà các lần điều chỉnh tồn sau kiểm kê trong kỳ.
- Tổng hợp số hàng thừa (tăng) và thiếu (giảm) theo kho, theo mặt hàng.
- Xuất danh sách điều chỉnh để giải trình chênh lệch kiểm kê.

Màn hình chỉ để **xem**. Muốn lập, sửa, xoá phiếu, dùng **Phiếu điều chỉnh kho** ([TỔNG QUAN MÀN HÌNH PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-0-tong-quan-man-hinh-phieu-dieu-chinh-kho/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** cần xem ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có **phiếu điều chỉnh kho** ([TỔNG QUAN MÀN HÌNH PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-0-tong-quan-man-hinh-phieu-dieu-chinh-kho/)) trong khoảng ngày cần xem.

## 2. Mở chức năng

**Thống kê kho → Điều chỉnh kho**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ - CHI TIẾT ĐIỀU CHỈNH KHO](/posts/2026-11-07-kho-c05-0-tong-quan-man-hinh-thong-ke-chi-tiet-dieu-chinh-kho/hinh-01-man-hinh-chi-tiet-dieu-chinh-kho.png)

Hình 1 chụp ngày 09/10/2026 khi lưới chưa có dòng (*Không có dữ liệu*). Dòng tổng  chỉ hiện số dưới cột **Số lượng**, không có chữ TỔNG CỘNG; cột **Tăng**, **Giảm** nằm bên phải, phải kéo thanh cuộn ngang.

- **Ô khoảng ngày**: Chức năng: Chọn khoảng ngày điều chỉnh, mặc định **hôm nay** (`today`); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất lưới ra Excel (chỉ hiện khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột, trong đó có cột ẩn sẵn **Mã kho**, **Mã hàng hóa**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Hàng lọc dưới tiêu đề cột**: Chức năng: Lọc từng cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: Tổng **Số lượng**, **Tăng**, **Giảm**; Hướng dẫn: phần “Giải thích các thông tin trên màn hình”

Lưới hiện **10 dòng mỗi trang** (chọn được 10 / 15 / 20). Lưới nhớ bố cục cột; ô khoảng ngày nhớ mốc đã chọn ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Các cột trên lưới:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày điều chỉnh**: Ý nghĩa: Ngày điều chỉnh kho trên phiếu
- **Mã phiếu**: Ý nghĩa: Mã phiếu điều chỉnh kho (dạng **DC…**)
- **Phiếu gốc**: Ý nghĩa: Mã phiếu gốc ghi trên phiếu (ví dụ số biên bản kiểm kê)
- **Tên kho**: Ý nghĩa: Kho được điều chỉnh của dòng
- **Mã kho**: Ý nghĩa: Mã kho (ẩn sẵn)
- **Ghi chú**: Ý nghĩa: Ghi chú của phiếu
- **Tên hàng hóa**: Ý nghĩa: Tên hàng
- **Mã hàng hóa**: Ý nghĩa: Mã hàng (ẩn sẵn)
- **Đvt**: Ý nghĩa: Đơn vị tính của dòng
- **Số lượng**: Ý nghĩa: Số lượng điều chỉnh có dấu: dương là tăng, âm là giảm
- **Tăng**: Ý nghĩa: Số lượng tăng (xem phần “Giải thích các thông tin trên màn hình”)
- **Giảm**: Ý nghĩa: Số lượng giảm, ghi số dương (xem phần “Giải thích các thông tin trên màn hình”)
- **Chú thích**: Ý nghĩa: Chú thích của dòng hàng
- **Người tạo, Ngày tạo**: Ý nghĩa: Người lập phiếu và thời điểm lập
- **Người sửa, Ngày sửa**: Ý nghĩa: Người sửa phiếu gần nhất và thời điểm sửa

Màn hình **không có** thao tác nhấp đúp xem chi tiết.

## 4. Trình tự công việc

```text
Kiểm kê thực tế ──► Phiếu điều chỉnh kho (KHO-A03): +SL thừa / −SL thiếu
                          ↓
             Thống kê Điều chỉnh kho: tách cột Tăng / Giảm, cộng tổng
```

## 5. Thực hiện trên phần mềm

- **Xem điều chỉnh trong kỳ**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tổng hợp tăng / giảm của một kho**: Cách làm: Lọc cột **Tên kho**, đọc dòng tổng; Bài hướng dẫn: phần “Thực hiện trên phần mềm” bên dưới
- **Tổng hợp theo mặt hàng**: Cách làm: Lọc cột **Tên hàng hóa**, đọc dòng tổng; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Sửa phiếu sai**: Cách làm: Mở màn Phiếu điều chỉnh kho; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-0-tong-quan-man-hinh-phieu-dieu-chinh-kho/)

### Xem tổng thừa / thiếu của một kho sau kiểm kê

**Bước 1 –** Mở **Thống kê kho → Điều chỉnh kho**.

**Bước 2 –** Bấm ô khoảng ngày, chọn khoảng chứa ngày kiểm kê. Lưới tự tải.

**Bước 3 –** Lọc cột **Tên kho** theo kho cần xem; lọc thêm **Tên hàng hóa** nếu chỉ cần một mặt hàng.

**Bước 4 –** Đọc dòng tổng: cột **Tăng** là tổng hàng thừa, cột **Giảm** là tổng hàng thiếu, cột **Số lượng** là chênh lệch ròng.

## 6. Giải thích các thông tin trên màn hình

- **Tăng**: Cách tính: **Số lượng** nếu ≥ 0, ngược lại 0
- **Giảm**: Cách tính: −**Số lượng** nếu **Số lượng** < 0, ngược lại 0
- **Số lượng (tổng)**: Cách tính: Tăng − Giảm
- **Khoảng ngày**: Cách tính: **Ngày điều chỉnh** nằm trong khoảng ngày đã chọn (tính cả hai đầu)
- **Chi nhánh**: Cách tính: Phiếu thuộc chi nhánh đang làm việc
- **Kho**: Cách tính: Kho điều chỉnh của phiếu nằm trong các kho được phân cho tài khoản
- **Thứ tự**: Cách tính: Ngày điều chỉnh mới nhất lên trước, trong cùng ngày theo thứ tự dòng hàng

## 7. Kiểm tra sau khi thực hiện

Bạn biết trong kỳ đã điều chỉnh những mặt hàng nào, ở kho nào, tăng bao nhiêu, giảm bao nhiêu, theo phiếu nào và ai lập.

## 8. Những điều cần lưu ý

⚠️ Phiếu điều chỉnh kho làm **thay đổi tồn kho ngay** khi lưu: số dương cộng vào tồn, số âm trừ khỏi tồn. Màn thống kê này chỉ để xem lại.

⚠️ Tổng các cột cộng mọi mặt hàng, mọi đơn vị tính. Chỉ đọc tổng khi đã lọc còn một mặt hàng (hoặc các mặt hàng cùng đơn vị tính).

⚠️ Bấm **Tải lại** sau khi chọn điều kiện báo cáo. Kiểm tra đúng hệ thống và kho điều chỉnh trước khi đối chiếu chênh lệch.

### Lưới trống dù đã lập phiếu 

Nguyên nhân: khoảng ngày chưa chứa ngày điều chỉnh, đang ở chi nhánh khác, hoặc tài khoản chưa được phân kho điều chỉnh của phiếu.
Cách xử lý: chọn lại khoảng ngày, kiểm tra chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)), bấm **Tải lại**; vẫn trống thì nhờ quản trị hệ thống phân kho.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Vì sao không thấy số dòng ở cuối lưới?**
Dòng tổng của màn này chỉ hiện tổng các cột số lượng. Số dòng xem ở thanh phân trang dưới lưới.

**Điều chỉnh kho có làm đổi giá vốn không?**
Màn này không hiện giá trị. Ảnh hưởng tới giá bình quân xem ở **Sổ cái kho** ([TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/)).

## 11. Công việc tiếp theo

```text
Thấy điều chỉnh sai → Phiếu điều chỉnh kho (KHO-A03.0)
Kiểm tra tồn sau điều chỉnh → Xuất nhập tồn (KHO-C07.0), Sổ cái kho (KHO-A09.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-0-tong-quan-man-hinh-phieu-dieu-chinh-kho/) – Tổng quan màn hình Phiếu điều chỉnh kho
- [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/) – Tổng quan màn hình Sổ cái kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/) – Tổng quan màn hình thống kê Xuất nhập tồn
