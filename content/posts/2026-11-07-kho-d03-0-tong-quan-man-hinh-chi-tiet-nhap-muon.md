---
title: "TỔNG QUAN MÀN HÌNH CHI TIẾT NHẬP MƯỢN"
date: "2026-11-07"
summary: "Màn hình Chi tiết nhập mượn liệt kê từng dòng hàng của các phiếu nhập mượn (chiều công ty mượn của đối tác) có ngày nhập trong khoảng ngày bạn chọn, kèm các lần công ty đã trả, số đã trả và số còn phải trả đối tác."
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

Màn hình **Chi tiết nhập mượn** liệt kê **từng dòng hàng của các phiếu nhập mượn** (chiều **công ty mượn của đối tác**) có ngày nhập trong khoảng ngày bạn chọn, kèm **các lần công ty đã trả**, **số đã trả** và **số còn phải trả** đối tác.

Bạn dùng màn hình này khi:

- Biết công ty còn nợ đối tác bao nhiêu hàng, của phiếu mượn nào.
- Xem đã trả vào ngày nào, bao nhiêu.
- Lên kế hoạch trả hàng hoặc thoả thuận mua luôn.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có **phiếu nhập mượn** trong khoảng ngày cần xem ([HƯỚNG DẪN LẬP PHIẾU NHẬP MƯỢN](/bai-viet/2026-11-07-kho-b03-1-huong-dan-lap-phieu-nhap-muon/)).

## 2. Mở chức năng

**Thống kê mượn hàng → Chi tiết nhập mượn**

## 3. Nhận biết màn hình

![Hình 1: Màn hình Chi tiết nhập mượn (tiêu đề THỐNG KÊ HÀNG MƯỢN)](/posts/2026-11-07-kho-d03-0-tong-quan-man-hinh-chi-tiet-nhap-muon/hinh-01-man-hinh-chi-tiet-nhap-muon.png)

- **Ô khoảng ngày**: Chức năng: Chọn khoảng **ngày nhập mượn**. Lần đầu là **Hôm nay**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Hàng lọc dưới tiêu đề cột**: Chức năng: Lọc từng cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: **TỔNG CỘNG: <số dòng>**; tổng Số lượng đã mượn, Số lượng đã trả, Số lượng chưa trả

Tiêu đề màn hiển thị **THỐNG KÊ HÀNG MƯỢN** (giống màn Tổng hợp mượn hàng). Phân biệt bằng đường dẫn trên thanh tiêu đề và các cột.

**Các cột trên lưới:**

- **STT**: Ý nghĩa: Số thứ tự
- **Mã phiếu xuất trả**: Ý nghĩa: Thực tế là **mã phiếu nhập mượn** (**NM…**) của dòng – xem phần “Những điều cần lưu ý”
- **Ngày nhập mượn**: Ý nghĩa: Ngày trên phiếu nhập mượn
- **Tên kho nhập mượn**: Ý nghĩa: Kho công ty đã nhận hàng mượn
- **Tên hàng hóa**: Ý nghĩa: Hàng mượn
- **Số lượng đã mượn**: Ý nghĩa: Số lượng mượn của dòng
- **Tên kho xuất trả**: Ý nghĩa: Thực tế là **kho đại diện đối tác** (Mượn từ kho) – xem phần “Những điều cần lưu ý”
- **Ngày trả hàng**: Ý nghĩa: Các lần trả, dạng *ngày-tháng-năm (số lượng)*, cách nhau dấu phẩy
- **Số lượng đã trả**: Ý nghĩa: Tổng đã xuất trả của dòng (cả trả bằng hàng và bằng tiền)
- **Số lượng chưa trả**: Ý nghĩa: Số lượng đã mượn − Số lượng đã trả = **số công ty còn phải trả**
- **Người tạo**: Ý nghĩa: Người lập phiếu nhập mượn
- **Chú thích**: Ý nghĩa: Chú thích của dòng hàng

Màn hình không có thao tác nhấp đúp trên dòng; muốn xem phiếu, mở **Phiếu nhập mượn** và tìm theo mã ([TỔNG QUAN MÀN HÌNH PHIẾU NHẬP MƯỢN](/bai-viet/2026-11-07-kho-b03-0-tong-quan-man-hinh-phieu-nhap-muon/)).

## 4. Trình tự công việc

```text
Phiếu nhập mượn (KHO-B03) ──► Phiếu xuất trả (KHO-B04)
                ↓
Chi tiết nhập mượn (theo ngày nhập mượn)
   ├── Lọc Số lượng chưa trả > 0 → hàng còn nợ đối tác
   ├── Tìm / lọc / chọn cột (GEN-04)
   └── Xuất Excel (GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Xem hàng mượn trong tháng**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem theo một đối tác**: Cách làm: Lọc cột **Tên kho xuất trả** (là kho đối tác); Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm dòng chưa trả hết**: Cách làm: Lọc cột **Số lượng chưa trả** khác 0; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Trả hàng đối tác**: Cách làm: **Mượn hàng → Phiếu xuất trả**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU XUẤT TRẢ HÀNG MƯỢN](/bai-viet/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem hàng công ty còn nợ một đối tác

**Bước 1 –** Mở **Thống kê mượn hàng → Chi tiết nhập mượn**.

**Bước 2 –** Chọn khoảng ngày đủ rộng (ví dụ **Năm nay**).

**Bước 3 –** Lọc cột **Tên kho xuất trả** theo tên đối tác; lọc **Số lượng chưa trả** lớn hơn 0.

**Bước 4 –** Đối chiếu với tồn kho tại **Tên kho nhập mượn** trước khi lập phiếu xuất trả.

## 6. Giải thích các thông tin trên màn hình

- **Số lượng đã mượn**: Cách tính: Số lượng trên dòng phiếu nhập mượn
- **Số lượng đã trả**: Cách tính: Tổng số lượng (kể cả số lượng lô) của mọi phiếu xuất trả gắn với dòng, **tính tới hiện tại**
- **Số lượng chưa trả**: Cách tính: Số lượng đã mượn − Số lượng đã trả
- **Ngày trả hàng**: Cách tính: Ghép ngày xuất trả và số lượng (làm tròn số nguyên) của từng phiếu xuất trả

Dữ liệu được lấy khi thoả **đủ**: **ngày nhập mượn** trong khoảng ngày; phiếu thuộc **chi nhánh đang làm việc**; kho nhập, kho đối tác hoặc kho xuất trả nằm trong danh sách kho tài khoản được phân (trừ quản trị hệ thống). Sắp theo ngày nhập mượn.

## 7. Kiểm tra sau khi thực hiện

Bạn biết từng lô hàng đi mượn đã trả bao nhiêu, vào ngày nào và còn nợ đối tác bao nhiêu.

## 8. Những điều cần lưu ý

⚠️ Cột **Ngày trả hàng** chỉ là chuỗi tham khảo: số lượng từng lần được làm tròn số nguyên và các lần trùng ngày/số có thể gộp. Muốn kiểm đủ số lần và lượng thập phân, mở các phiếu trả gắn với phiếu mượn, không cộng chuỗi này thay tổng đã trả.

⚠️ **Nhãn hai cột chưa khớp dữ liệu:** cột **Mã phiếu xuất trả** đang hiện **mã phiếu nhập mượn**; cột **Tên kho xuất trả** đang hiện **kho đối tác cho mượn**. Đọc theo ý nghĩa ở phần “Nhận biết màn hình” – đã báo bộ phận IT.

⚠️ Khoảng ngày lọc theo **ngày nhập mượn**, không theo ngày trả. Chọn khoảng đủ rộng để thấy các phiếu mượn còn mở.

⚠️ **Số lượng đã trả** tính tới thời điểm xem và gồm cả phần **trả bằng tiền** (mua luôn).

⚠️ Tiêu đề màn trùng với màn **Tổng hợp mượn hàng** (**THỐNG KÊ HÀNG MƯỢN**) – kiểm tra đúng mục menu.

### Thiếu phiếu so với màn Phiếu nhập mượn 

Nguyên nhân: khoảng ngày khác; tài khoản không được phân kho của phiếu; đang ở chi nhánh khác.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)), nhờ quản trị phân kho, kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập** màn hình.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Khác gì màn Tổng hợp mượn hàng?**
Tổng hợp mượn hàng cộng dồn theo đối tác × hàng và hiện Đi mượn bằng số âm. Chi tiết nhập mượn liệt kê **từng phiếu mượn** với số dương.

**Vì sao Số lượng chưa trả bằng 0 nhưng hàng vẫn trong kho?**
Công ty đã mua luôn hàng mượn (phiếu xuất trả có tick **Trả bằng tiền**).

## 11. Công việc tiếp theo

```text
Chi tiết nhập mượn → dòng còn chưa trả
   → Phiếu xuất trả (KHO-B04.1): trả bằng hàng hoặc mua luôn (trả bằng tiền)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH TỔNG HỢP MƯỢN HÀNG](/bai-viet/2026-11-07-kho-d01-0-tong-quan-man-hinh-tong-hop-muon-hang/) – Tổng quan màn hình Tổng hợp mượn hàng
- [TỔNG QUAN MÀN HÌNH CHI TIẾT XUẤT MƯỢN](/bai-viet/2026-11-07-kho-d02-0-tong-quan-man-hinh-chi-tiet-xuat-muon/) – Tổng quan màn hình Chi tiết xuất mượn
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP MƯỢN](/bai-viet/2026-11-07-kho-b03-0-tong-quan-man-hinh-phieu-nhap-muon/) – Tổng quan màn hình Phiếu nhập mượn
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT TRẢ](/bai-viet/2026-11-07-kho-b04-0-tong-quan-man-hinh-phieu-xuat-tra/) – Tổng quan màn hình Phiếu xuất trả
