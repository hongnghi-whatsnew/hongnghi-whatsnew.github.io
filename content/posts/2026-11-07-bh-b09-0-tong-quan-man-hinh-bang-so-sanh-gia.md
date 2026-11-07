---
title: "TỔNG QUAN MÀN HÌNH BẢNG SO SÁNH GIÁ"
date: "2026-11-07"
summary: "Màn hình Bảng so sánh giá (tiêu đề trên màn: BẢNG SO SÁNH GIÁ) đặt hai bảng giá bán cạnh nhau (bảng A và bảng B) và cho biết, với từng mặt hàng có trong cả hai bảng, đơn giá và đơn giá có VAT chênh nhau bao nhiêu phần trăm."
module: "Bán hàng"
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

Màn hình **Bảng so sánh giá** (tiêu đề trên màn: **BẢNG SO SÁNH GIÁ**) đặt **hai bảng giá bán** cạnh nhau (bảng **A** và bảng **B**) và cho biết, với từng mặt hàng có trong **cả hai** bảng, đơn giá và đơn giá có VAT chênh nhau bao nhiêu phần trăm.

Bạn dùng màn hình này khi:

- Ra bảng giá mới, muốn xem tăng / giảm bao nhiêu % so với bảng cũ.
- So sánh bảng giá chung với bảng giá riêng của một khách.
- Kiểm tra lỗi nhập giá (mặt hàng chênh bất thường).

Màn hình chỉ để **xem**. Muốn lập, sửa bảng giá, dùng màn **Bảng giá mua bán** (nhóm **Bảng giá / báo giá**, sổ Thiết lập danh mục).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đã có ít nhất hai **bảng giá bán** có mặt hàng chung.

## 2. Mở chức năng

**Thống kê bán hàng → Bảng so sánh giá**

## 3. Nhận biết màn hình

![Hình 1: Màn hình BẢNG SO SÁNH GIÁ](/posts/2026-11-07-bh-b09-0-tong-quan-man-hinh-bang-so-sanh-gia/hinh-01-man-hinh-bang-so-sanh-gia.png)

- **Ô khoảng ngày**: Chức năng: Lọc **danh sách bảng giá** ở ô   theo **ngày bảng giá**. Lần đầu là **Hôm nay** (danh sách bảng giá thường trống) – chọn khoảng rộng, ví dụ **5y** = 5 năm gần đây như trên ảnh; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách bảng giá và số liệu so sánh
- **Ô Vui lòng chọn bảng giá A**: Chức năng: Nằm **đầu hàng**, bên trái ô khoảng ngày. Chọn bảng giá gốc. Mỗi mục hiện **ngày có hiệu lực, tên bảng giá** (ảnh: *06/04/2026, HỒNG NGHI*); gõ mã hoặc tên để tìm; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Ô Vui lòng chọn bảng giá B**: Chức năng: Dòng thứ hai, dưới ô A. Chọn bảng giá cần so với A (ảnh: *06/10/2026, NHÀ CUNG CẤP*); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…, hàng lọc (khung không số dưới tiêu đề cột)**: Chức năng: Tìm, lọc, ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)

Lưới hiện **10 dòng mỗi trang** (chọn được 10 / 15 / 20; dưới lưới ghi *Trang 1 của n (m mục)*) và nhớ bố cục cột ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Lưới **không có dòng tổng**.

**Các cột trên lưới:** mỗi dòng là một mặt hàng có trong cả bảng A và bảng B.

- **—**: Cột: STT; Ý nghĩa: Số thứ tự
- **HÀNG HÓA**: Cột: Tên; Ý nghĩa: Tên hàng hoá
- Cột: Đvt; Ý nghĩa: Đơn vị tính khai trong bảng giá A
- Cột: Tiêu chuẩn, Loại hàng; Ý nghĩa: Theo danh mục hàng hoá
- **ĐƠN GIÁ**: Cột: A, B; Ý nghĩa: Đơn giá (chưa VAT) trong bảng A, bảng B
- Cột: Chênh lệch B/A; Ý nghĩa: Phần trăm B cao / thấp hơn A
- **ĐƠN GIÁ VAT**: Cột: A, B; Ý nghĩa: Đơn giá có thuế trong bảng A, bảng B
- Cột: Chênh lệch B/A; Ý nghĩa: Phần trăm B cao / thấp hơn A

Bấm chuột phải vào **tiêu đề cột** để sắp xếp, cố định cột, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Màn hình không có thao tác nhấp đúp.

## 4. Trình tự công việc

```text
Bảng giá mua bán (sổ Thiết lập danh mục)
      ↓  chọn khoảng ngày bảng giá
Chọn bảng giá A, bảng giá B
      ↓
Mặt hàng có trong cả A và B → Đơn giá, Đơn giá VAT, Chênh lệch B/A
      └── Xuất Excel (GEN-05)
```

### Bước 1 – Mở màn hình

Mở **Thống kê bán hàng → Bảng so sánh giá**. Lưới trống cho tới khi chọn đủ hai bảng giá.

### Bước 2 – Chọn khoảng ngày

Ở ô khoảng ngày, chọn khoảng **bao trùm ngày lập** của cả hai bảng giá cần so (ví dụ **Năm nay**, hoặc **5y** – 5 năm gần đây). Danh sách ở ô A, B chỉ gồm bảng giá có ngày bảng giá trong khoảng này; để mặc định **Hôm nay** thì danh sách thường trống (*Không có dữ liệu để hiển thị*).

### Bước 3 – Chọn bảng giá A

Bấm ô **Vui lòng chọn bảng giá A**, gõ mã hoặc tên để tìm, chọn bảng giá gốc (thường là bảng cũ hoặc bảng giá chung).

### Bước 4 – Chọn bảng giá B

Bấm ô **Vui lòng chọn bảng giá B**, chọn bảng cần so. Lưới tự tải khi đã chọn đủ A và B.

### Bước 5 – Đọc kết quả

Kiểm tra hai bảng đang so cùng hàng và cùng đơn vị tính, cùng cách gồm/chưa gồm VAT. Dòng ghép khác đơn vị không dùng để kết luận tăng/giảm. Sau đó sắp xếp cột **Chênh lệch B/A** để thấy mặt hàng tăng / giảm nhiều nhất. Số dương: B cao hơn A; số âm: B thấp hơn A.

- **Tìm một mặt hàng**: Cách làm: Gõ vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Chỉ xem mặt hàng có đổi giá**: Cách làm: Lọc cột **Chênh lệch B/A** khác 0; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

## 6. Giải thích các thông tin trên màn hình

- **Chênh lệch B/A (ĐƠN GIÁ)**: Cách tính: Đơn giá B ÷ Đơn giá A − 1, làm tròn 0,1 %
- **Chênh lệch B/A (ĐƠN GIÁ VAT)**: Cách tính: Đơn giá VAT B ÷ Đơn giá VAT A − 1, làm tròn 0,1 %

Chỉ mặt hàng có trong **cả hai** bảng giá mới hiện. Mặt hàng chỉ có ở một bảng không hiện.

Danh sách bảng giá ở ô A, B: bảng giá có **ngày bảng giá** trong khoảng ngày ở ô, trong dữ liệu hệ thống đang truy cập; gồm bảng giá chung và bảng giá gán cho khách thuộc nhóm khách hàng được phân cho bạn.

## 7. Kiểm tra sau khi thực hiện

Bạn có bảng so sánh đơn giá và đơn giá VAT từng mặt hàng giữa hai bảng giá, với phần trăm chênh lệch; xuất được ra Excel khi có quyền (trang tính tên **DATA**).

## 8. Những điều cần lưu ý

⚠️ Ô khoảng ngày **không** lọc giá theo ngày; nó chỉ quyết định **bảng giá nào có trong danh sách chọn**. Mặc định **Hôm nay** nên danh sách ô A, B thường trống – **chọn khoảng ngày rộng trước** (ví dụ 5 năm gần đây) rồi mới chọn bảng giá.

⚠️ Nếu một mặt hàng trong bảng A có **đơn giá bằng 0**, màn hình có thể báo lỗi khi tính chênh lệch (chia cho 0). Kiểm tra lại bảng giá A.

⚠️ Một mặt hàng khai **nhiều dòng** trong cùng một bảng giá (ví dụ nhiều đơn vị tính) sẽ hiện **nhiều dòng ghép chéo** trên lưới. Cột **Đvt** chỉ lấy theo bảng A, nên dòng ghép có thể so hai đơn vị khác nhau.

⚠️ Đối chiếu mã chi nhánh và phạm vi áp dụng của từng bảng giá trong dữ liệu đang xem. Việc thấy nhiều mã trong danh sách không chứng minh hệ thống đang đọc các dữ liệu của những tên miền chi nhánh khác.

### Không tìm thấy bảng giá trong ô A / B 

Nguyên nhân: ngày bảng giá nằm ngoài khoảng ngày; bảng giá gán cho khách không thuộc nhóm khách hàng của bạn.
Cách xử lý: mở rộng khoảng ngày rồi bấm **Tải lại**; liên hệ quản trị hệ thống nếu cần phân nhóm khách hàng.

### Lưới trống dù đã chọn hai bảng giá 

Nguyên nhân: hai bảng giá không có mặt hàng chung.
Cách xử lý: kiểm tra nội dung hai bảng giá.

### Màn hình báo lỗi khi chọn bảng giá A (Lỗi hệ thống)

Nguyên nhân: bảng giá A có mặt hàng đơn giá hoặc đơn giá VAT bằng 0.
Cách xử lý: sửa đơn giá trong bảng giá A, hoặc đổi vai trò A và B; nếu vẫn lỗi, xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Chênh lệch B/A = 5 % nghĩa là gì?**
Giá trong bảng B cao hơn bảng A 5 %. Âm 5 % nghĩa là B thấp hơn A 5 %.

**Có so được hai bảng giá của hai chi nhánh khác nhau không?**
Chỉ so sánh hai bảng giá có trong hệ thống đang truy cập và bạn được xem. Mỗi tên miền hệ thống chính thức có dữ liệu và tài khoản riêng; không có thao tác chọn trực tiếp bảng giá từ tên miền chi nhánh khác ở đây.

## 11. Công việc tiếp theo

```text
Bảng so sánh giá → điều chỉnh bảng giá (màn Bảng giá mua bán, sổ Thiết lập danh mục)
                 → theo dõi doanh số theo bảng giá (BH-B11.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BẢNG GIÁ](/bai-viet/2026-11-07-bh-b11-0-tong-quan-man-hinh-thong-ke-doanh-so-bang-gia/) – Tổng quan màn hình thống kê Doanh số bảng giá
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ BIẾN ĐỘNG GIÁ BÁN](/bai-viet/2026-11-07-bh-b10-0-tong-quan-man-hinh-thong-ke-bien-dong-gia-ban/) – Tổng quan màn hình thống kê Biến động giá bán
