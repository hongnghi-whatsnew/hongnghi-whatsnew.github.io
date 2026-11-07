---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NHÀ CUNG CẤP"
date: "2026-11-07"
summary: "Màn hình Công nợ nhà cung cấp cho biết công ty còn phải trả bao nhiêu cho từng nhà cung cấp trong khoảng ngày bạn chọn, tại chi nhánh đang làm việc: nợ đầu kỳ, tiền mua, tiền đã chi, cấn trừ, hàng trả lại, tiền thu và nợ cuối kỳ."
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

Màn hình **Công nợ nhà cung cấp** cho biết công ty **còn phải trả** bao nhiêu cho từng **nhà cung cấp** trong khoảng ngày bạn chọn, tại **chi nhánh đang làm việc**: nợ đầu kỳ, tiền mua, tiền đã chi, cấn trừ, hàng trả lại, tiền thu và nợ cuối kỳ. Từ mỗi dòng bạn xem chi tiết chứng từ, in **biên bản đối chiếu công nợ** và in **thư xác nhận số dư phục vụ kiểm toán**.

Bạn dùng màn hình này khi:

- Chốt số phải trả từng nhà cung cấp cuối tháng, cuối năm.
- Kiểm tra số đã trả, còn nợ trước khi lập phiếu chi.
- In đối chiếu công nợ gửi nhà cung cấp ký xác nhận.
- In thư xác nhận số dư theo yêu cầu kiểm toán.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Đã có danh mục **Nhà cung cấp** và chứng từ ghi nhà cung cấp: phiếu nhập kho mua hàng, phiếu mua dịch vụ, phiếu xuất kho trả hàng nhà cung cấp, phiếu chi, phiếu thu, phiếu cấn trừ.

## 2. Mở chức năng

**Thống kê công nợ → Công nợ nhà cung cấp**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ CÔNG NỢ NHÀ CUNG CẤP](/posts/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/hinh-01-man-hinh-cong-no-nha-cung-cap.png)

Hình 1 chụp ngày 12/10/2026, khoảng **Hôm nay**, lọc cột **Nhà cung cấp** chứa "TEST_HDSD": nhà cung cấp thử có Nợ đầu kỳ 1.700.000, Tiền chi 1.020.000, Tiền thu 100.000 → Nợ cuối kỳ 780.000.

- **Ô khoảng ngày**: Chức năng: Chọn kỳ xem. Lần đầu là **Hôm nay**, lần sau nhớ lựa chọn gần nhất; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…, hàng lọc**: Chức năng: Ẩn / hiện cột, tìm, lọc; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tiêu đề nhóm cột THÔNG TIN NCC, CÔNG NỢ**: Chức năng: Gom cột theo nhóm (bảng dưới)
- **Dòng tổng cuối lưới**: Chức năng: Tổng các cột tiền (không có chữ **TỔNG CỘNG**, không đếm số dòng)

Kéo thanh cuộn ngang sang phải để thấy **Nợ cuối kỳ** và nhóm cột **LUỸ KẾ THÁNG …** (nhóm này chỉ hiện khi khoảng ngày là **một ngày**, phần “Giải thích các thông tin trên màn hình”).

**Các cột trên lưới:**

- **THÔNG TIN NCC**: Cột: Nhà cung cấp; Ý nghĩa: Tên nhà cung cấp
- **THÔNG TIN NCC**: Cột: Nhóm nhà cung cấp, Tên rút gọn, Mã số thuế, Số ngày nợ, Mã nhà cung cấp, Địa chỉ, Địa chỉ /Khu vực, Điện thoại; Ý nghĩa: Ẩn sẵn, bật bằng **Trình chọn cột**
- **CÔNG NỢ**: Cột: Nợ đầu kỳ; Ý nghĩa: Số công ty còn nợ **trước ngày đầu** của kỳ
- **CÔNG NỢ**: Cột: Tiền mua; Ý nghĩa: Tiền mua hàng, mua dịch vụ phát sinh trong kỳ (tăng nợ)
- **CÔNG NỢ**: Cột: Tiền chi; Ý nghĩa: Tiền đã chi trả trong kỳ (giảm nợ)
- **CÔNG NỢ**: Cột: Tiền cấn trừ; Ý nghĩa: Tiền cấn trừ công nợ trong kỳ (giảm nợ)
- **CÔNG NỢ**: Cột: Trả hàng; Ý nghĩa: Tiền hàng xuất trả nhà cung cấp trong kỳ (giảm nợ)
- **CÔNG NỢ**: Cột: Tiền thu; Ý nghĩa: Tiền nhà cung cấp trả lại cho công ty trong kỳ (tăng nợ)
- **CÔNG NỢ**: Cột: Nợ cuối kỳ; Ý nghĩa: Số công ty còn nợ **cuối ngày cuối** của kỳ
- **CÔNG NỢ**: Cột: Nợ cuối; Ý nghĩa: Ẩn sẵn. Số còn nợ **tại thời điểm xem** (không theo kỳ)
- **LUỸ KẾ THÁNG …**: Cột: Tiền mua, Tiền chi, Tiền cấn trừ, Trả hàng, Tiền thu; Ý nghĩa: Cộng dồn từ **ngày 1 của tháng** đến ngày đang xem

**Menu chuột phải trên một dòng** — **bấm chọn dòng trước** (dòng tô xám), rồi mới chuột phải; chưa chọn dòng thì menu không hiện:

![Hình 2: Menu chuột phải trên dòng nhà cung cấp](/posts/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/hinh-02-menu-chuot-phai.png)

Hình 2:  dòng đã chọn;  menu chuột phải.

- **Chi tiết công nợ**: Chức năng: Mở hộp thoại **NHÀ CUNG CẤP - CHI TIẾT CÔNG NỢ: "<mã nhà cung cấp>"** (Hình 3)
- **Đối chiếu công nợ**: Chức năng: Mở bản xem trước biên bản **ĐỐI CHIẾU CÔNG NỢ** (Hình 4, [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/))
- **Kiểm toán**: Chức năng: Mở bản xem trước thư xác nhận số dư phải trả phục vụ kiểm toán (Hình 5, [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/))

Chuột phải **tiêu đề cột** có **Khôi phục bố cục** để đưa lưới về bố cục mặc định ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

![Hình 3: Hộp thoại NHÀ CUNG CẤP - CHI TIẾT CÔNG NỢ](/posts/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/hinh-03-hop-thoai-chi-tiet-cong-no.png)

- **Tải lại**: Chức năng: Lấy lại danh sách
- **Lưới chứng từ**: Chức năng: **STT**, **Ngày phát sinh**, **Mã phiếu**, **Mã phiếu gốc**, **Nội dung**, **Ghi chú**, **Nhân viên** (người lập phiếu), **Tiền mua**; cuộn ngang thấy **Tiền chi**, **Trả hàng**, **Tiền thu**, **Còn lại**
- **Cột Nội dung**: Chức năng: **Nhập mua hàng**, **Mua dịch vụ**, **Xuất trả hàng**, **Chi công nợ**, **Cấn trừ công nợ**, **Thu công nợ**
- **Dòng tổng**: Chức năng: **TỔNG CỘNG:**, **Nợ đầu kỳ: …**, tổng từng cột tiền, **Nợ cuối kỳ: …**
- **Nhấp đúp một dòng**: Chức năng: Mở chứng từ gốc ở chế độ xem: **THÔNG TIN PHIẾU NHẬP KHO**, **THÔNG TIN PHIẾU XUẤT KHO**, **THÔNG TIN PHIẾU CHI**, **THÔNG TIN PHIẾU THU**, **THÔNG TIN PHIẾU CẤN TRỪ**

Các dòng xếp theo **Ngày phát sinh**. Đóng hộp thoại bằng dấu **×** góc trên phải.

![Hình 4: Bản xem trước Đối chiếu công nợ nhà cung cấp](/posts/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/hinh-04-xem-truoc-doi-chieu-cong-no.png)

Biên bản **ĐỐI CHIẾU CÔNG NỢ** gồm: kỳ **Từ … đến …**, **Chúng tôi thông báo đến:** (nhà cung cấp), **Địa chỉ:**, rồi:

- **phần hướng dẫn bên dưới./**: Ghi chú: **Tính đến hết ngày** trước kỳ, Cty Hồng Nghi còn nợ Quý Công ty (= **Nợ đầu kỳ**). **Hiện chưa in số tiền** (xem phần “Vướng mắc thường gặp”)
- **phần hướng dẫn bên dưới./ — bảng phát sinh**: Ghi chú: Cột **STT**, **NGÀY PHÁT SINH**, **HÓA ĐƠN**, **Cty Nhận HĐ**, **Phương Thức VC**, **Mã Phiếu**, **DIỄN GIẢI**, **ĐVT**, **SL**, **ĐƠN GIÁ**, **CK**, **VAT**, **THÀNH TIỀN**, **THANH TOÁN**, **GHI CHÚ**; dòng **TỔNG CỘNG:**. Dòng phiếu thu / chi ghi nội dung thu chi ở **DIỄN GIẢI** (ví dụ "THU KHÁC", "Chi trả nợ mua ván"); cột **Mã Phiếu** hiện để trống
- **phần hướng dẫn bên dưới./ và Bằng chữ:**: Ghi chú: **Tính đến hết ngày** cuối kỳ, Cty Hồng Nghi còn nợ (= **Nợ cuối kỳ**). Số tiền hiện chỉ có ở dòng **Bằng chữ** (Hình 4: "bảy trăm tám mươi nghìn đồng")

![Hình 5: Bản xem trước thư xác nhận số dư phục vụ kiểm toán](/posts/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/hinh-05-xem-truoc-kiem-toan.png)

- **Kính gửi:**: Ghi chú: Tên nhà cung cấp; dòng dưới **Địa chỉ:**; góc phải **Ngày … tháng … năm …**
- **Hai dòng số dư tại ngày cuối kỳ**: Ghi chú: **1. Khoản công ty đã ứng trước cho quý nhà cung cấp:** (khi Nợ cuối kỳ âm) và **2. Khoản công ty còn phải trả cho Quý nhà cung cấp:** (khi Nợ cuối kỳ dương); số in dạng "780,000.0VNĐ"
- **Thư trả lời xin gửi về:**: Ghi chú: Tên công ty, người liên hệ, địa chỉ, Tel, Email **in sẵn trong mẫu** (Hình 5 đã làm mờ tên người liên hệ và email)

Giữa thư có dòng **V/v: Xác nhận các khoản Phải trả nhà cung cấp để phục vụ kiểm toán Báo cáo tài chính của …** và lời đề nghị nhà cung cấp xác nhận, gửi trực tiếp cho kiểm toán viên; cuối thư là đoạn hướng dẫn phản hồi khi không đồng ý số liệu.

## 4. Trình tự công việc

```text
Phiếu nhập kho mua hàng, Phiếu mua dịch vụ          → tăng nợ (Tiền mua)
Phiếu thu ghi NCC (KT-A03)                          → tăng nợ (Tiền thu)
Phiếu chi (KT-A04), Phiếu cấn trừ (KT-A05)          → giảm nợ
Phiếu xuất kho trả hàng NCC                         → giảm nợ (Trả hàng)
                    ↓
Công nợ nhà cung cấp: Nợ đầu kỳ → phát sinh → Nợ cuối kỳ
├── Chi tiết công nợ → nhấp đúp → chứng từ gốc
├── Đối chiếu công nợ → in (GEN-06)
├── Kiểm toán → in thư xác nhận số dư (GEN-06)
└── Xuất Excel (GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Xem nợ phải trả tháng**: Cách làm: Chọn **Tháng này** / **Tháng trước** ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem phát sinh một ngày kèm luỹ kế tháng**: Cách làm: Chọn **Hôm nay** hoặc một ngày; Bài hướng dẫn: phần “Giải thích các thông tin trên màn hình”
- **Xem chứng từ của một nhà cung cấp**: Cách làm: Bấm chọn dòng, chuột phải → **Chi tiết công nợ**
- **In đối chiếu công nợ**: Cách làm: Bấm chọn dòng, chuột phải → **Đối chiếu công nợ**; Bài hướng dẫn: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **In thư xác nhận số dư cho kiểm toán**: Cách làm: Bấm chọn dòng, chuột phải → **Kiểm toán**; Bài hướng dẫn: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Trả tiền nhà cung cấp**: Cách làm: Lập phiếu chi ghi nhà cung cấp; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### In đối chiếu công nợ với một nhà cung cấp

**Bước 1 –** Mở **Thống kê công nợ → Công nợ nhà cung cấp**.

**Bước 2 –** Chọn kỳ đối chiếu ở ô khoảng ngày (ví dụ **Tháng trước**).

**Bước 3 –** Tìm nhà cung cấp (ô **Tìm kiếm…**).

**Bước 4 –** Bấm chọn dòng nhà cung cấp (dòng tô xám), chuột phải → **Chi tiết công nợ**. Kiểm từng chứng từ; dòng cuối cột **Còn lại** phải bằng **Nợ cuối kỳ**. Đóng hộp thoại bằng dấu **×**.

**Bước 5 –** Chuột phải dòng đang chọn → **Đối chiếu công nợ**. Kiểm dòng **Bằng chữ** khớp **Nợ cuối kỳ** trên lưới (phần “Tên bài”./, 3./ hiện chưa in số — phần “Vướng mắc thường gặp”), rồi in ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)). Bấm **Đóng** trên thanh công cụ bản xem trước để quay lại.

### In thư xác nhận số dư cho kiểm toán

**Bước 1 –** Chọn khoảng ngày có **ngày cuối** là ngày chốt số dư (ví dụ đến 31/12).

**Bước 2 –** Bấm chọn dòng nhà cung cấp, chuột phải → **Kiểm toán**.

**Bước 3 –** Kiểm số tiền ở hai dòng ứng trước / còn phải trả (Hình 5) và thông tin người nhận thư trả lời ( — in sẵn trong mẫu), in và gửi nhà cung cấp ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)).

## 6. Giải thích các thông tin trên màn hình

Mọi số liệu lấy theo **chi nhánh đang làm việc**, so **ngày** của chứng từ (bỏ giờ).

- **Tiền mua**: Cách tính: Tổng tiền phiếu **nhập kho** ghi nhà cung cấp + tổng tiền phiếu **mua dịch vụ**, có ngày trong kỳ
- **Tiền chi**: Cách tính: Số tiền chi + số tiền giảm của phiếu chi ghi nhà cung cấp
- **Tiền cấn trừ**: Cách tính: Số tiền cấn trừ của phiếu cấn trừ ghi nhà cung cấp
- **Trả hàng**: Cách tính: Tổng tiền phiếu **xuất kho** ghi nhà cung cấp (xuất trả hàng)
- **Tiền thu**: Cách tính: Số tiền thu + số tiền giảm của phiếu thu ghi nhà cung cấp
- **Nợ cuối kỳ**: Cách tính: Nợ hiện tại − phát sinh tăng nợ **sau** kỳ + phát sinh giảm nợ **sau** kỳ
- **Nợ đầu kỳ**: Cách tính: Nợ cuối kỳ − Tiền mua − Tiền thu + Tiền chi + Tiền cấn trừ + Trả hàng
- **Nợ cuối**: Cách tính: Công nợ hiện tại hệ thống đang lưu cho nhà cung cấp tại chi nhánh
- **Luỹ kế tháng**: Cách tính: Như các cột phát sinh, nhưng tính từ ngày 1 của tháng đến ngày đang xem
- **Còn lại (hộp thoại chi tiết)**: Cách tính: Luỹ tiến từng dòng: Nợ đầu kỳ + Tiền mua − Trả hàng − Tiền chi + Tiền thu

Như vậy: **Nợ cuối kỳ = Nợ đầu kỳ + Tiền mua + Tiền thu − Tiền chi − Tiền cấn trừ − Trả hàng**. Số **dương** là công ty **còn nợ** nhà cung cấp; số **âm** là công ty đã trả trước / trả thừa.

Dòng được hiện khi có ít nhất một số khác 0 (kể cả cột luỹ kế); xếp theo mã nhà cung cấp.

**Biên bản đối chiếu, phần “Chức năng này dùng để làm gì?”:** mỗi dòng hàng của phiếu nhập kho / mua dịch vụ (**THÀNH TIỀN** = số lượng × (đơn giá − chiết khấu) + VAT), mỗi dòng hàng xuất trả (số lượng, thành tiền **âm**), mỗi phiếu chi, phiếu cấn trừ (cột **THANH TOÁN**), mỗi phiếu thu (**THANH TOÁN** âm). Nội dung phiếu thu / chi / cấn trừ lấy theo **nội dung thu chi** của phiếu.

## 7. Kiểm tra sau khi thực hiện

Bạn biết số còn phải trả từng nhà cung cấp trong kỳ, xem được chứng từ tạo nên số đó, in được biên bản đối chiếu và thư xác nhận số dư.

## 8. Những điều cần lưu ý

⚠️ Nợ đầu / cuối kỳ được **tính lùi từ công nợ hiện tại**. Sửa, xoá chứng từ của kỳ cũ làm thay đổi số của mọi kỳ sau; biên bản đã in trước đó có thể không còn khớp.

⚠️ **Phiếu mua hàng** chưa nhập kho **chưa** tính nợ. Nợ mua hàng chỉ phát sinh khi lập **phiếu nhập kho** ghi nhà cung cấp; riêng **phiếu mua dịch vụ** tính nợ ngay theo ngày mua.

⚠️ Trong hộp thoại chi tiết không có cột **Tiền cấn trừ**: dòng **Cấn trừ công nợ** hiện ở cột **Tiền chi**.

⚠️ Nhấp đúp dòng **Mua dịch vụ** trong hộp thoại chi tiết hiện không mở chứng từ. Xem phiếu ở màn **Phiếu mua dịch vụ** ([TỔNG QUAN MÀN HÌNH PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-0-tong-quan-man-hinh-phieu-mua-dich-vu/)).

⚠️ **Phiếu xuất trả hàng mượn** trả bằng tiền có chọn nhà cung cấp ([HƯỚNG DẪN LẬP PHIẾU XUẤT TRẢ HÀNG MƯỢN](/bai-viet/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/)) làm tăng nợ phải trả, nhưng màn hình này **không có cột** cho loại phiếu đó. Số tiền này hiện lẫn trong **Nợ đầu kỳ** và **Nợ cuối kỳ**, kể cả của các kỳ trước ngày lập phiếu. Khi đối chiếu thấy lệch đúng bằng số tiền phiếu xuất trả hàng mượn, báo kế toán trưởng.

⚠️ Thư **Kiểm toán** in **cố định** tên người liên hệ, địa chỉ, điện thoại, email của công ty ở phần **Thư trả lời xin gửi về** (trong mẫu in, không lấy từ hệ thống). Người liên hệ thay đổi thì nhờ IT sửa mẫu trước khi gửi.

⚠️ Biên bản đối chiếu tính **THÀNH TIỀN** theo từng dòng hàng (đơn giá, chiết khấu, VAT). Dòng **TỔNG CỘNG** có thể lệch vài đồng (làm tròn) hoặc lệch phần chi phí khác so với tổng tiền phiếu; còn phần “Tên bài”, phần “Chuẩn bị trước khi thực hiện” lấy theo **Nợ đầu kỳ**, **Nợ cuối kỳ** trên lưới (hiện số chỉ in ở dòng **Bằng chữ**, phần “Vướng mắc thường gặp”).

⚠️ **Số lệch với Sổ chi tiết tài khoản 331 ([TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/)).** Màn này tính theo **ngày chứng từ** từ chính các phiếu; sổ chi tiết tính theo **bút toán đã ghi sổ**. Hai bên có thể lệch khi:

- Phiếu chi hoặc phiếu mua dịch vụ có **ngày hạch toán** khác ngày chứng từ (sổ ghi theo ngày hạch toán).
- Chứng từ nằm ngoài **kỳ kế toán** nên chưa ghi sổ ([TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/)).
- Có phiếu xuất trả hàng mượn bằng tiền (nêu ở trên).
- Sổ 331 cộng mọi nhà cung cấp; màn này tách từng nhà cung cấp và chỉ tính chi nhánh đang làm việc.

### Thiếu nhà cung cấp trên lưới 

Nguyên nhân: trong kỳ nhà cung cấp không có số nào khác 0; đang ở chi nhánh khác; chứng từ không ghi nhà cung cấp.
Cách xử lý: mở rộng khoảng ngày; kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)); bổ sung nhà cung cấp trên chứng từ.

### Biên bản đối chiếu không in số tiền ở phần “Tên bài”./ và 3./, cột Mã Phiếu trống (Lỗi hệ thống)

Nguyên nhân: mẫu in đối chiếu công nợ nhà cung cấp chưa gắn đúng trường số tiền và mã phiếu (Hình 4: phần “Tên bài”./, 3./ chỉ có chữ, số tiền chỉ còn ở dòng **Bằng chữ**).
Cách xử lý: ghi tay **Nợ đầu kỳ**, **Nợ cuối kỳ** từ lưới chính vào biên bản trước khi gửi, hoặc gửi kèm file Excel của lưới; báo bộ phận IT.

### Chuột phải không hiện menu 

Nguyên nhân: chưa bấm chọn dòng trước khi chuột phải.
Cách xử lý: bấm vào dòng nhà cung cấp (dòng tô xám) rồi chuột phải lại.

### Không thấy nhóm cột LUỸ KẾ THÁNG 

Nguyên nhân: khoảng ngày đang chọn dài hơn một ngày.
Cách xử lý: chọn **Hôm nay** hoặc một ngày cụ thể.

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

**Vì sao có Tiền thu từ nhà cung cấp?**
Khi nhà cung cấp trả lại tiền (hoàn tiền trả thừa, hoàn cọc…), kế toán lập phiếu thu ghi nhà cung cấp. Số này làm **tăng** số công ty còn nợ (bù lại phần đã trả thừa).

**Đối chiếu công nợ và Kiểm toán khác nhau thế nào?**
**Đối chiếu công nợ** liệt kê từng khoản phát sinh trong kỳ để hai bên đối chiếu. **Kiểm toán** chỉ nêu số dư tại ngày cuối kỳ để nhà cung cấp xác nhận phục vụ kiểm toán báo cáo tài chính.

## 11. Công việc tiếp theo

```text
Công nợ nhà cung cấp → in đối chiếu → NCC ký → lập phiếu chi trả (KT-A04)
                     → cuối năm → Kiểm toán → NCC xác nhận số dư
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/) – Tổng quan màn hình thống kê Công nợ khách hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ GIA CÔNG](/bai-viet/2026-11-07-kt-c02-0-tong-quan-man-hinh-thong-ke-cong-no-gia-cong/) – Tổng quan màn hình thống kê Công nợ gia công
- [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/) – Tổng quan màn hình Phiếu chi
- [TỔNG QUAN MÀN HÌNH PHIẾU CẤN TRỪ](/bai-viet/2026-11-07-kt-a05-0-tong-quan-man-hinh-phieu-can-tru/) – Tổng quan màn hình Phiếu cấn trừ
- [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/) – Tổng quan màn hình Phiếu thu
- [TỔNG QUAN MÀN HÌNH SỔ CHI TIẾT TÀI KHOẢN](/bai-viet/2026-11-07-kt-a09-0-tong-quan-man-hinh-so-chi-tiet-tai-khoan/) – Tổng quan màn hình Sổ chi tiết tài khoản
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/) – Tổng quan màn hình Phiếu nhập kho
- [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO TRẢ HÀNG NHÀ CUNG CẤP](/bai-viet/2026-11-07-kho-a05-2-huong-dan-lap-phieu-xuat-kho-tra-hang-nha-cung-cap/) – Lập phiếu xuất kho trả hàng nhà cung cấp
- [TỔNG QUAN MÀN HÌNH PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-0-tong-quan-man-hinh-phieu-mua-dich-vu/) – Tổng quan màn hình Phiếu mua dịch vụ
