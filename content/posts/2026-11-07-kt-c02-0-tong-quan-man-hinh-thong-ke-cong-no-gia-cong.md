---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ GIA CÔNG"
date: "2026-11-07"
summary: "Màn hình Công nợ gia công cho biết công ty còn nợ tiền gia công bao nhiêu với từng đơn vị gia công trong khoảng ngày bạn chọn, tại chi nhánh đang làm việc: nợ đầu kỳ, tiền gia công phát sinh, tiền đã chi, cấn trừ, tiền thu và nợ cuối kỳ."
module: "Kế toán"
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

Màn hình **Công nợ gia công** cho biết công ty **còn nợ tiền gia công** bao nhiêu với từng **đơn vị gia công** trong khoảng ngày bạn chọn, tại **chi nhánh đang làm việc**: nợ đầu kỳ, tiền gia công phát sinh, tiền đã chi, cấn trừ, tiền thu và nợ cuối kỳ. Từ mỗi dòng bạn xem chi tiết chứng từ và in **biên bản đối chiếu công nợ**.

Bạn dùng màn hình này khi:

- Chốt tiền gia công phải trả từng đơn vị cuối tháng.
- Kiểm tra số đã trả, còn nợ trước khi lập phiếu chi.
- In đối chiếu công nợ gửi đơn vị gia công ký xác nhận.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có danh mục **Đơn vị gia công** và chứng từ ghi đơn vị gia công: phiếu nhập kho gia công / phiếu nhập thành phẩm (tiền gia công), phiếu chi, phiếu thu, phiếu cấn trừ.

## 2. Mở chức năng

**Thống kê công nợ → Công nợ gia công**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ CÔNG NỢ GIA CÔNG](/posts/2026-11-07-kt-c02-0-tong-quan-man-hinh-thong-ke-cong-no-gia-cong/hinh-01-man-hinh-cong-no-gia-cong.png)

- **Ô khoảng ngày**: Chức năng: Chọn kỳ xem. Lần đầu là **Hôm nay**, lần sau nhớ lựa chọn gần nhất; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…, hàng lọc**: Chức năng: Ẩn / hiện cột, tìm, lọc; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: Tổng các cột tiền (không có chữ **TỔNG CỘNG**, không đếm số dòng)

**Các cột trên lưới:**

- **Đơn vị gia công**: Ý nghĩa: Tên đơn vị gia công
- **Mã đơn vị gia công, Địa chỉ, Điện thoại**: Ý nghĩa: Ẩn sẵn
- **Nợ đầu kỳ**: Ý nghĩa: Số công ty còn nợ **trước ngày đầu** của kỳ
- **Tiền gia công**: Ý nghĩa: Tiền gia công phát sinh trong kỳ (tăng nợ)
- **Tiền chi**: Ý nghĩa: Tiền đã chi trả trong kỳ (giảm nợ)
- **Tiền cấn trừ**: Ý nghĩa: Tiền cấn trừ công nợ trong kỳ (giảm nợ)
- **Tiền thu**: Ý nghĩa: Tiền thu lại từ đơn vị, có tính công nợ (tăng nợ)
- **Nợ cuối kỳ**: Ý nghĩa: Số công ty còn nợ **cuối ngày cuối** của kỳ
- **Nợ cuối**: Ý nghĩa: Số còn nợ **tại thời điểm xem** (không theo kỳ)
- **Thu khác (không tính nợ)**: Ý nghĩa: Phiếu thu ghi đơn vị gia công nhưng **không tính công nợ**

**Menu chuột phải trên một dòng** — **bấm chọn dòng trước** (dòng tô xám), rồi mới chuột phải; chưa chọn dòng thì menu không hiện:

![Hình 2: Menu chuột phải trên dòng đơn vị gia công](/posts/2026-11-07-kt-c02-0-tong-quan-man-hinh-thong-ke-cong-no-gia-cong/hinh-02-menu-chuot-phai.png)

- **Dòng đã chọn**: Chức năng: Bấm vào dòng trước khi chuột phải
- **Menu chuột phải**: Chức năng: **Chi tiết công nợ** — mở hộp thoại **GIA CÔNG - CHI TIẾT CÔNG NỢ: "<mã đơn vị>"** (Hình 3). **Đối chiếu công nợ** — mở bản xem trước **ĐỐI CHIẾU CÔNG NỢ** để in (Hình 4, [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/))

Chuột phải **tiêu đề cột** có **Khôi phục bố cục** để đưa lưới về bố cục mặc định ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

![Hình 3: Hộp thoại GIA CÔNG - CHI TIẾT CÔNG NỢ](/posts/2026-11-07-kt-c02-0-tong-quan-man-hinh-thong-ke-cong-no-gia-cong/hinh-03-hop-thoai-chi-tiet-cong-no.png)

- **Tải lại**: Chức năng: Lấy lại danh sách
- **Lưới chứng từ**: Chức năng: **STT**, **Ngày phát sinh**, **Mã phiếu**, **Nội dung** (Thu công nợ, Thu khác, Chi công nợ, Cấn trừ công nợ, Nhập kho gia công, Nhập thành phẩm), **Ghi chú**, **Nhân viên**, **Tiền công**, **Tiền chi**, **Tiền thu**; cuộn ngang thấy **Còn lại**, **Thu khác**
- **Dòng tổng**: Chức năng: **TỔNG CỘNG:**, **Nợ đầu kỳ: …**, tổng từng cột tiền, **Nợ cuối kỳ: …**
- **Nhấp đúp một dòng**: Chức năng: Mở chứng từ gốc ở chế độ xem: **THÔNG TIN PHIẾU THU**, **THÔNG TIN PHIẾU CHI**, **THÔNG TIN PHIẾU CẤN TRỪ**

Đóng hộp thoại bằng dấu **×** góc trên phải.

![Hình 4: Bản xem trước Đối chiếu công nợ đơn vị gia công](/posts/2026-11-07-kt-c02-0-tong-quan-man-hinh-thong-ke-cong-no-gia-cong/hinh-04-xem-truoc-doi-chieu-cong-no.png)

Biên bản **ĐỐI CHIẾU CÔNG NỢ** gồm: kỳ **Từ … đến …**, **Chúng tôi thông báo đến:**, **Địa chỉ:**, rồi:

- **phần hướng dẫn bên dưới./**: Ghi chú: **Tính đến hết ngày** trước kỳ, Cty Hồng Nghi còn nợ (= **Nợ đầu kỳ**)
- **phần hướng dẫn bên dưới./ — bảng phát sinh**: Ghi chú: Cột **STT**, **NGÀY PHÁT SINH**, **MÃ PHIẾU**, **HÀNG TRƠN**, **YÊU CẦU**, **SỐ MẶT**, **ĐVT**, **SL**, **ĐƠN GIÁ**, **THÀNH TIỀN**, **THANH TOÁN**, **GHI CHÚ**, dòng **TỔNG CỘNG:**. Dòng phiếu chi ghi nội dung thu chi ở cột **HÀNG TRƠN**, số tiền ở cột **THANH TOÁN**
- **phần hướng dẫn bên dưới./ và Bằng chữ:**: Ghi chú: **Tính đến hết ngày** cuối kỳ, Cty Hồng Nghi còn nợ (= **Nợ cuối kỳ**); số âm in kèm dấu trừ và chữ "âm"

Cuối trang: **Ngày … tháng … năm …** và chỗ ký hai bên. Thanh công cụ bản xem trước có **In**, **Xuất**, **Sửa mẫu**, **Đóng** ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)).

## 4. Trình tự công việc

```text
Nhập kho gia công / Nhập thành phẩm (tiền gia công)  → tăng nợ
Phiếu chi, Phiếu cấn trừ (KT-A04, KT-A05)            → giảm nợ
Phiếu thu có tính công nợ (KT-A03)                   → tăng nợ
                    ↓
Công nợ gia công: Nợ đầu kỳ → phát sinh → Nợ cuối kỳ
├── Chi tiết công nợ → nhấp đúp → chứng từ gốc
├── Đối chiếu công nợ → in (GEN-06)
└── Xuất Excel (GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Xem nợ gia công tháng**: Cách làm: Chọn **Tháng này** / **Tháng trước** ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem chứng từ của một đơn vị**: Cách làm: Bấm chọn dòng, chuột phải → **Chi tiết công nợ**
- **In đối chiếu công nợ**: Cách làm: Bấm chọn dòng, chuột phải → **Đối chiếu công nợ**; Bài hướng dẫn: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Chi trả tiền gia công**: Cách làm: Lập phiếu chi ghi đơn vị gia công; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### In đối chiếu công nợ với một đơn vị gia công

**Bước 1 –** Mở **Thống kê công nợ → Công nợ gia công**.

**Bước 2 –** Chọn kỳ đối chiếu ở ô khoảng ngày (ví dụ **Tháng trước**).

**Bước 3 –** Tìm đơn vị gia công (ô **Tìm kiếm…**).

**Bước 4 –** Bấm chọn dòng đơn vị (dòng tô xám), chuột phải → **Chi tiết công nợ**, kiểm từng chứng từ; đóng hộp thoại bằng dấu **×**.

**Bước 5 –** Chuột phải dòng đang chọn → **Đối chiếu công nợ**. Kiểm mục **1./** và **3./** khớp **Nợ đầu kỳ**, **Nợ cuối kỳ** trên lưới, rồi bấm **In** ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)). Bấm **Đóng** để quay lại.

## 6. Giải thích các thông tin trên màn hình

- **Tiền gia công**: Cách tính: Tổng tiền phiếu **nhập kho gia công** + phiếu **nhập thành phẩm** ghi đơn vị gia công, có ngày trong kỳ
- **Tiền chi**: Cách tính: Số tiền chi + số tiền giảm của phiếu chi ghi đơn vị gia công
- **Tiền cấn trừ**: Cách tính: Số tiền cấn trừ của phiếu cấn trừ ghi đơn vị gia công
- **Tiền thu**: Cách tính: Số tiền thu + số tiền giảm của phiếu thu ghi đơn vị **có đánh dấu tính công nợ**
- **Thu khác (không tính nợ)**: Cách tính: Như Tiền thu nhưng phiếu thu **không** tính công nợ
- **Nợ cuối kỳ**: Cách tính: Nợ hiện tại − (phát sinh tăng nợ **sau** kỳ) + (phát sinh giảm nợ **sau** kỳ)
- **Nợ đầu kỳ**: Cách tính: Nợ cuối kỳ − Tiền gia công − Tiền thu + Tiền chi + Tiền cấn trừ
- **Còn lại (hộp thoại chi tiết)**: Cách tính: Luỹ tiến từng dòng: Nợ đầu kỳ + Tiền công − Tiền chi + Tiền thu

Như vậy: **Nợ cuối kỳ = Nợ đầu kỳ + Tiền gia công + Tiền thu − Tiền chi − Tiền cấn trừ**. Số dương là công ty **còn nợ** đơn vị gia công.

Dòng được hiện khi có ít nhất một số khác 0; chứng từ lấy theo **chi nhánh đang làm việc**, so ngày bỏ giờ; xếp theo mã đơn vị gia công.

## 7. Kiểm tra sau khi thực hiện

Bạn biết số tiền gia công còn nợ từng đơn vị trong kỳ, xem được chứng từ tạo nên số đó và in được biên bản đối chiếu.

## 8. Những điều cần lưu ý

⚠️ Nợ đầu / cuối kỳ được **tính lùi từ công nợ hiện tại**. Sửa chứng từ của kỳ cũ làm thay đổi số của mọi kỳ sau; biên bản đã in trước đó có thể không còn khớp.

⚠️ Trong hộp thoại chi tiết không có cột **Tiền cấn trừ**: dòng **Cấn trừ công nợ** hiện ở cột **Tiền chi**. Cột tiền phát sinh trong hộp thoại tên là **Tiền công** (trên lưới chính là **Tiền gia công**).

⚠️ Nhấp đúp dòng **Nhập kho gia công** / **Nhập thành phẩm** trong hộp thoại chi tiết hiện không mở chứng từ. Xem phiếu ở sổ Sản xuất.

⚠️ Phiếu thu ghi đơn vị gia công mà **không** đánh dấu tính công nợ chỉ hiện ở **Thu khác (không tính nợ)**, không làm đổi nợ.

⚠️ Công ty **ứng trước** cho đơn vị gia công (chi tiền khi chưa có tiền gia công) thì **Nợ cuối kỳ âm**; biên bản đối chiếu in số âm ở phần “Chuẩn bị trước khi thực hiện”./ và **Bằng chữ: âm …** (ví dụ "âm một trăm năm mươi nghìn đồng"). Ghi chú rõ cho đơn vị khi gửi biên bản.

### Chuột phải không hiện menu 

Nguyên nhân: chưa bấm chọn dòng trước khi chuột phải.
Cách xử lý: bấm vào dòng đơn vị gia công (dòng tô xám) rồi chuột phải lại.

### Thiếu đơn vị gia công trên lưới 

Nguyên nhân: trong kỳ đơn vị không có số nào khác 0; đang ở chi nhánh khác; chứng từ không ghi đơn vị gia công.
Cách xử lý: mở rộng khoảng ngày; kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)); bổ sung đơn vị trên chứng từ.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập** màn hình.
Cách xử lý: liên hệ quản trị hệ thống.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Nợ cuối kỳ khác Nợ cuối thế nào?**
**Nợ cuối kỳ** là số nợ tại ngày cuối kỳ bạn chọn. **Nợ cuối** là số nợ đang có tại lúc xem, gồm cả chứng từ sau kỳ.

**Màn này khác màn Công nợ nguồn nhân lực thế nào?**
Cách tính giống nhau; màn này theo **đơn vị gia công** ghi trên chứng từ, màn kia theo **nguồn nhân lực**.

## 11. Công việc tiếp theo

```text
Công nợ gia công → in đối chiếu → đơn vị ký → lập phiếu chi trả (KT-A04)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NGUỒN NHÂN LỰC](/bai-viet/2026-11-07-kt-c01-0-tong-quan-man-hinh-thong-ke-cong-no-nguon-nhan-luc/) – Tổng quan màn hình thống kê Công nợ nguồn nhân lực
- [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/) – Tổng quan màn hình Phiếu thu
- [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/) – Tổng quan màn hình Phiếu chi
- [TỔNG QUAN MÀN HÌNH PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-0-tong-quan-man-hinh-phieu-can-tru/) – Tổng quan màn hình Phiếu cấn trừ
