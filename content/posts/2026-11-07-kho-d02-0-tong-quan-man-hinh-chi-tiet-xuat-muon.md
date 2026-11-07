---
title: "TỔNG QUAN MÀN HÌNH CHI TIẾT XUẤT MƯỢN"
date: "2026-11-07"
summary: "Màn hình Chi tiết xuất mượn liệt kê từng dòng hàng của các phiếu xuất cho mượn (chiều công ty cho đối tác mượn) có ngày xuất trong khoảng ngày bạn chọn, kèm các lần đối tác đã trả, số đã trả và số còn phải trả."
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

Màn hình **Chi tiết xuất mượn** liệt kê **từng dòng hàng của các phiếu xuất cho mượn** (chiều **công ty cho đối tác mượn**) có ngày xuất trong khoảng ngày bạn chọn, kèm **các lần đối tác đã trả**, **số đã trả** và **số còn phải trả**.

Bạn dùng màn hình này khi:

- Tìm phiếu cho mượn nào đối tác **chưa trả hết**.
- Xem đối tác đã trả vào những ngày nào, bao nhiêu, về kho nào.
- Lập danh sách nhắc trả hàng.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có **phiếu xuất cho mượn** trong khoảng ngày cần xem ([HƯỚNG DẪN LẬP PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-1-huong-dan-lap-phieu-xuat-cho-muon/)).

## 2. Mở chức năng

**Thống kê mượn hàng → Chi tiết xuất mượn**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ HÀNG XUẤT MƯỢN](/posts/2026-11-07-kho-d02-0-tong-quan-man-hinh-chi-tiet-xuat-muon/hinh-01-man-hinh-chi-tiet-xuat-muon.png)

- **Ô khoảng ngày**: Chức năng: Chọn khoảng **ngày xuất mượn**. Lần đầu là **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Hàng lọc dưới tiêu đề cột**: Chức năng: Lọc từng cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: **TỔNG CỘNG: <số dòng>**; tổng S.L Mượn, Số lượng đã trả, Số lượng chưa trả

Tiêu đề màn hiển thị **THỐNG KÊ HÀNG XUẤT MƯỢN**.

**Các cột trên lưới:**

- **STT**: Ý nghĩa: Số thứ tự
- **Mã phiếu xuất mượn**: Ý nghĩa: Mã phiếu xuất cho mượn (**XM…**)
- **Ngày xuất mượn**: Ý nghĩa: Ngày trên phiếu xuất cho mượn
- **Tên kho xuất mượn**: Ý nghĩa: Kho công ty đã xuất hàng
- **Tên hàng hóa**: Ý nghĩa: Hàng cho mượn
- **S.L Mượn**: Ý nghĩa: Số lượng cho mượn của dòng
- **Tên kho mượn**: Ý nghĩa: Kho đại diện cho đối tác
- **Ngày trả hàng**: Ý nghĩa: Các lần trả, dạng *ngày-tháng-năm (số lượng)*, cách nhau dấu phẩy, ví dụ *15-10-26 (30), 20-10-26 (20)*
- **Số lượng đã trả**: Ý nghĩa: Tổng đã nhập trả của dòng (cả trả bằng hàng và bằng tiền)
- **Tên kho nhập trả**: Ý nghĩa: Các kho đã nhận hàng trả
- **Số lượng chưa trả**: Ý nghĩa: S.L Mượn − Số lượng đã trả = **số đối tác còn phải trả**
- **Người tạo**: Ý nghĩa: Người lập phiếu xuất cho mượn
- **Chú thích**: Ý nghĩa: Chú thích của dòng hàng

Màn hình không có thao tác nhấp đúp trên dòng; muốn xem phiếu, mở **Phiếu xuất cho mượn** và tìm theo mã ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-0-tong-quan-man-hinh-phieu-xuat-cho-muon/)).

## 4. Trình tự công việc

```text
Phiếu xuất cho mượn (KHO-B01) ──► Phiếu nhập trả (KHO-B02)
                  ↓
Chi tiết xuất mượn (theo ngày xuất mượn)
   ├── Lọc Số lượng chưa trả > 0 → danh sách nhắc trả
   ├── Tìm / lọc / chọn cột (GEN-04)
   └── Xuất Excel (GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Xem hàng cho mượn trong tháng**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem theo một đối tác**: Cách làm: Lọc cột **Tên kho mượn**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm dòng chưa trả hết**: Cách làm: Lọc cột **Số lượng chưa trả** khác 0; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Ghi nhận đối tác trả**: Cách làm: **Mượn hàng → Phiếu nhập trả**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU NHẬP TRẢ HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kho-b02-1-huong-dan-lap-phieu-nhap-tra-hang-cho-muon/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Lập danh sách hàng đối tác chưa trả

**Bước 1 –** Mở **Thống kê mượn hàng → Chi tiết xuất mượn**.

**Bước 2 –** Chọn khoảng ngày đủ rộng để chứa các phiếu cho mượn còn mở (ví dụ **Năm nay**).

**Bước 3 –** Lọc **Tên kho mượn** theo đối tác; lọc **Số lượng chưa trả** lớn hơn 0.

**Bước 4 –** Xem **Ngày trả hàng** để biết các lần đã trả; **Số lượng chưa trả** là số cần nhắc.

**Bước 5 –** Bấm **Xuất Excel** để gửi đối tác.

## 6. Giải thích các thông tin trên màn hình

- **S.L Mượn**: Cách tính: Số lượng (kể cả số lượng lô) trên dòng phiếu xuất cho mượn
- **Số lượng đã trả**: Cách tính: Tổng số lượng của mọi phiếu nhập trả gắn với dòng, **tính tới hiện tại**
- **Số lượng chưa trả**: Cách tính: S.L Mượn − Số lượng đã trả
- **Ngày trả hàng**: Cách tính: Ghép ngày nhập trả và số lượng (làm tròn số nguyên) của từng phiếu nhập trả
- **Tên kho nhập trả**: Cách tính: Ghép tên các kho nhập của các phiếu nhập trả

Dữ liệu được lấy khi thoả **đủ**: **ngày xuất mượn** trong khoảng ngày; phiếu thuộc **chi nhánh đang làm việc**; kho xuất, kho mượn hoặc kho trả của phiếu nằm trong danh sách kho tài khoản được phân (trừ quản trị hệ thống). Mỗi dòng là một dòng hàng của phiếu xuất cho mượn, sắp theo ngày xuất mượn.

## 7. Kiểm tra sau khi thực hiện

Bạn biết từng lô hàng cho mượn đã được trả bao nhiêu, vào ngày nào, về kho nào và còn bao nhiêu chưa trả.

## 8. Những điều cần lưu ý

⚠️ Cột **Ngày trả hàng** chỉ là chuỗi tham khảo: số lượng từng lần được làm tròn số nguyên và các lần trùng ngày/số có thể gộp. Muốn kiểm đủ số lần và lượng thập phân, mở các phiếu trả gắn với phiếu mượn, không cộng chuỗi này thay tổng đã trả.

⚠️ Khoảng ngày lọc theo **ngày xuất mượn**, không theo ngày trả. Phiếu cho mượn từ tháng trước sẽ không hiện nếu chỉ chọn tháng này – chọn khoảng đủ rộng.

⚠️ **Số lượng đã trả** tính **tới thời điểm xem**, kể cả các lần trả sau ngày kết thúc kỳ đã chọn.

⚠️ **Số lượng đã trả** gồm cả phần **trả bằng tiền**; xem phiếu nhập trả để biết trả bằng hàng hay tiền.

⚠️ Hai lần trả cùng ngày, cùng số lượng có thể chỉ hiện một lần trong cột **Ngày trả hàng** (cột chỉ ghép các giá trị khác nhau). Số **Số lượng đã trả** vẫn đúng.

### Thiếu phiếu so với màn Phiếu xuất cho mượn 

Nguyên nhân: khoảng ngày khác; tài khoản không được phân kho của phiếu; đang ở chi nhánh khác.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)), nhờ quản trị phân kho, kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập** màn hình.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Khác gì màn Tổng hợp mượn hàng?**
Tổng hợp mượn hàng cộng dồn theo đối tác × hàng, có đầu kỳ / cuối kỳ cho cả hai chiều. Chi tiết xuất mượn liệt kê **từng phiếu cho mượn** và các lần trả.

**Vì sao Số lượng chưa trả bằng 0 nhưng hàng chưa về kho?**
Đối tác đã trả bằng tiền (phiếu nhập trả có tick **Trả bằng tiền**).

## 11. Công việc tiếp theo

```text
Chi tiết xuất mượn → dòng còn chưa trả → nhắc đối tác
   → Phiếu nhập trả (KHO-B02.1) khi đối tác trả
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH TỔNG HỢP MƯỢN HÀNG](/bai-viet/2026-11-07-kho-d01-0-tong-quan-man-hinh-tong-hop-muon-hang/) – Tổng quan màn hình Tổng hợp mượn hàng
- [TỔNG QUAN MÀN HÌNH CHI TIẾT NHẬP MƯỢN](/bai-viet/2026-11-07-kho-d03-0-tong-quan-man-hinh-chi-tiet-nhap-muon/) – Tổng quan màn hình Chi tiết nhập mượn
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-0-tong-quan-man-hinh-phieu-xuat-cho-muon/) – Tổng quan màn hình Phiếu xuất cho mượn
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP TRẢ](/bai-viet/2026-11-07-kho-b02-0-tong-quan-man-hinh-phieu-nhap-tra/) – Tổng quan màn hình Phiếu nhập trả
