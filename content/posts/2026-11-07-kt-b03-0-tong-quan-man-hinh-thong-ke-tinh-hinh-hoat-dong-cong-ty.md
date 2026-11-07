---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ TÌNH HÌNH HOẠT ĐỘNG CÔNG TY"
date: "2026-11-07"
summary: "Màn hình Tình hình cty hiện BÁO CÁO TỔNG HỢP TÌNH HÌNH HOẠT ĐỘNG CỦA CÔNG TY cho một ngày bạn chọn, tại chi nhánh đang làm việc."
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

Màn hình **Tình hình cty** hiện **BÁO CÁO TỔNG HỢP TÌNH HÌNH HOẠT ĐỘNG CỦA CÔNG TY** cho **một ngày** bạn chọn, tại **chi nhánh đang làm việc**. Báo cáo gom trên một trang: tồn quỹ, khoản vay còn nợ, sản lượng Melamine nhập kho, hàng hoá mua bán (m³), bán hàng – thu tiền, phải thu khách hàng và phải trả nhà cung cấp.

Bạn dùng màn hình này khi:

- Lãnh đạo cần bức tranh nhanh về tiền, công nợ, doanh số trong ngày và luỹ kế tháng / năm.
- In báo cáo ngày gửi ban giám đốc.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Các chứng từ của ngày cần xem đã được lập (thu chi, xuất nhập kho, nhập kho gia công, lệnh vay).

## 2. Mở chức năng

**Thống kê thu chi → Tình hình cty** — `/thong-ke/tong-hop-tinh-hinh-hoat-dong-cong-ty`

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ TÌNH HÌNH HOẠT ĐỘNG CÔNG TY](/posts/2026-11-07-kt-b03-0-tong-quan-man-hinh-thong-ke-tinh-hinh-hoat-dong-cong-ty/hinh-01-man-hinh-tinh-hinh-cong-ty.png)

Hình 1 chụp ngày 12/10/2026, khối A đang hiện. Cột **SỐ TÀI KHOẢN** và tên các tài khoản mang tên cá nhân đã được **làm mờ** trong ảnh.

- **Ô ngày**: Chức năng: Ngày lập báo cáo; mặc định **hôm nay**. Đổi ngày thì báo cáo tự tải lại
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Thanh công cụ bản xem trước**: Chức năng: **In**, **Xuất** (lưu file PDF, Excel…), chuyển trang, phóng to (100%), **Trang đơn**, **Sửa mẫu**; Hướng dẫn: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Thân báo cáo**: Chức năng: Đầu trang: **BÁO CÁO TỔNG HỢP TÌNH HÌNH HOẠT ĐỘNG CUA CÔNG TY**, **Ngày … Tháng … năm …**; tiếp theo là các khối A → G (bảng dưới). Hình 1 khoanh khối **A**

**Các khối trong báo cáo:**

- **A**: Nội dung: Tồn quỹ (tiêu đề bảng nền vàng, ô đầu ghi chữ **A**); Số liệu: Mỗi quỹ một dòng: **SỐ TÀI KHOẢN**, **TÊN TÀI KHOẢN**, **TỒN ĐẦU**, **THU**, **CHI**, **TỒN CUỐI** trong ngày; dòng **TỔNG CỘNG**
- **B**: Nội dung: Vay thanh toán; Số liệu: Mỗi lệnh vay còn nợ: **CTY VAY** (quỹ nhận), **NGÀY VAY**, **SỐ TIỀN VAY**, **LÃI SUẤT**, **NGÀY ĐẾN HẠN**, **ĐÃ THANH TOÁN**, **CÒN LẠI**; dòng **TỔNG CỘNG**
- **C1**: Nội dung: Theo dõi Melamine nhập kho; Số liệu: **Tổng số tấm**, **SL tấm 1 mặt**, **SL tấm 2 mặt**, **Tổng mặt Phủ** — phát sinh trong ngày và cộng luỹ kế trong tháng; **Số ngày máy chạy**, **Bình quân (tấm/ngày)**, **Bình quân (mặt/ngày)**
- **C2**: Nội dung: Theo dõi Melamine nhập kho ( lỗi); Số liệu: Như C1 nhưng cho số tấm lỗi
- **C3**: Nội dung: Theo dõi sản xuất giấy Melamine; Số liệu: **SL sản xuất**, **Bình quân (tờ/ngày)**, **SL bán**, **SL tồn** (xem phần “Những điều cần lưu ý”)
- **D**: Nội dung: Hàng hoá (M3); Số liệu: **BÁN HÀNG**, **MUA HÀNG** theo m³: trong ngày, luỹ kế tháng, luỹ kế năm
- **E**: Nội dung: Bán hàng – thu tiền; Số liệu: **BÁN HÀNG**, **THU TIỀN**: trong ngày, luỹ kế tháng, luỹ kế năm
- **F**: Nội dung: Phải thu khách hàng; Số liệu: Phải thu đầu ngày, phát sinh trong ngày, khách thanh toán trong ngày, khách trả hàng, tiền chi (trả lại cho khách), phải thu cuối ngày
- **G**: Nội dung: Phải trả nhà cung cấp; Số liệu: Phải trả đầu ngày, phát sinh trong ngày, thanh toán trả nợ trong ngày, trả hàng NCC, tiền thu (thu từ NCC), phải trả cuối ngày

Cuối báo cáo có ô **Người báo cáo** và dòng **<chi nhánh>, Ngày … Tháng … năm …**.

## 4. Trình tự công việc

```text
Chọn ngày → báo cáo tổng hợp 1 trang
├── A Tồn quỹ (như KT-B02.0, kỳ = 1 ngày)
├── B Lệnh vay còn nợ (KT-A02)
├── C Melamine nhập kho gia công (sổ Sản xuất)
├── D, E Bán / mua / thu tiền (KHO-A04, KHO-A05, KT-A03)
├── F Phải thu khách hàng (như KT-C06.0, kỳ = 1 ngày)
└── G Phải trả nhà cung cấp (như KT-C05.0, kỳ = 1 ngày)
    → In / lưu file (GEN-06)
```

## 5. Thực hiện trên phần mềm

- **Xem báo cáo hôm nay**: Cách làm: Mở màn hình, báo cáo tự tải
- **Xem ngày khác**: Cách làm: Chọn ngày ở ô
- **In / lưu PDF**: Cách làm: Dùng thanh công cụ bản xem trước; Bài hướng dẫn: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Xem chi tiết tồn quỹ**: Cách làm: Màn **Tồn quỹ**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)
- **Xem chi tiết công nợ**: Cách làm: Màn **Công nợ khách hàng** / **Công nợ nhà cung cấp**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/), [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NHÀ CUNG CẤP](/bai-viet/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/)

### In báo cáo tình hình công ty cuối ngày

**Bước 1 –** Mở **Thống kê thu chi → Tình hình cty**.

**Bước 2 –** Kiểm ô ngày là ngày cần báo cáo; đổi ngày nếu cần.

**Bước 3 –** Đọc lần lượt khối A → G; nếu số nào bất thường, mở màn chi tiết tương ứng (xem phần “Bài hướng dẫn liên quan”).

**Bước 4 –** Bấm biểu tượng in trên thanh công cụ bản xem trước (hoặc lưu PDF) ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)).

## 6. Giải thích các thông tin trên màn hình

- **A Tồn quỹ**: Cách tính: Như màn **Tồn quỹ** với kỳ từ ngày đến ngày = ngày chọn; chỉ các quỹ đang kích hoạt, được phân cho tài khoản, có số khác 0
- **B Số tiền vay**: Cách tính: Số tiền vay − tiền đã chi trả lệnh vay **trước** ngày chọn
- **B Đã thanh toán**: Cách tính: Tiền chi trả lệnh vay **trong** ngày chọn
- **B Còn lại**: Cách tính: Số tiền vay − tổng đã trả đến hết ngày chọn. Chỉ hiện lệnh vay còn nợ hoặc có trả trong ngày
- **C1 Tổng số tấm**: Cách tính: Số lượng trên phiếu nhập kho gia công của **thành phẩm có mã chứa "MEL"**
- **C1 SL tấm 1 mặt / 2 mặt**: Cách tính: Theo số mặt của thành phẩm
- **C1 Tổng mặt Phủ**: Cách tính: Số lượng × số mặt yêu cầu
- **C1 Số ngày máy chạy**: Cách tính: Số ngày có phiếu nhập kho gia công từ đầu tháng đến ngày chọn
- **C1 Bình quân**: Cách tính: Luỹ kế tháng ÷ Số ngày máy chạy
- **C2**: Cách tính: Như C1 nhưng lấy số lượng lỗi khai trên phiếu nhập kho gia công
- **D Bán hàng (m³)**: Cách tính: (Số lượng xuất bán cho khách − số lượng khách trả) × m³ của hàng hoá
- **D Mua hàng (m³)**: Cách tính: (Số lượng nhập từ NCC − số lượng xuất trả NCC) × m³; chỉ hàng hoá có khai m³
- **E Bán hàng**: Cách tính: Tổng tiền phiếu xuất kho có khách hàng **và nhân viên sale** − tổng tiền phiếu nhập kho khách trả có nhân viên sale
- **E Thu tiền**: Cách tính: Tiền thu khách hàng (số thu + số giảm) + tiền cấn trừ khách hàng
- **F Phải thu**: Cách tính: Như màn **Công nợ khách hàng** với kỳ = ngày chọn, cộng mọi khách hàng của chi nhánh
- **G Phải trả**: Cách tính: Như màn **Công nợ nhà cung cấp** với kỳ = ngày chọn, **chỉ hai nhóm nhà cung cấp mã nhóm 1 và 2** (xem phần “Những điều cần lưu ý”)

Luỹ kế tháng = từ ngày 1 của tháng đến ngày chọn; luỹ kế năm = từ 01/01 đến ngày chọn.

## 7. Kiểm tra sau khi thực hiện

Bạn có báo cáo một trang về tiền, vay, sản lượng, doanh số và công nợ của ngày chọn, in hoặc lưu được để gửi lãnh đạo.

## 8. Những điều cần lưu ý

⚠️ Khối **G Phải trả nhà cung cấp** chỉ cộng nhà cung cấp thuộc **hai nhóm cố định** trong hệ thống (theo ghi chú trong luồng hiện tại: nhóm "Hồng Nghi" và "Vật tư"). Phạm vi này khác màn **Công nợ nhà cung cấp**; tổng có thể nhỏ hơn hoặc khác chiều tùy số dư dương/âm của các nhóm bị loại. So cùng phạm vi nhóm trước kết luận lệch.

⚠️ Khối **E Bán hàng** chỉ tính phiếu xuất kho có **nhân viên sale**; khối **F** tính mọi phiếu. Hai khối có thể lệch nhau.

⚠️ Khối **A Tồn quỹ** chỉ hiện quỹ **bạn được phân**. Người khác xem có thể thấy số khác.

⚠️ Khối **A** in **số tài khoản thật** và tên mọi quỹ được phân (kể cả tài khoản mang tên cá nhân). Kiểm người nhận trước khi gửi bản in / file PDF ra ngoài.

⚠️ Khối **C** chỉ theo dõi thành phẩm có **mã hàng chứa "MEL"**. **Số ngày máy chạy** đếm ngày có phiếu nhập kho gia công **của mọi chi nhánh**.

⚠️ Khối **C3 Theo dõi sản xuất giấy Melamine** hiện lấy số của **Melamine lỗi** (giống C2); **SL bán**, **SL tồn** chưa có số liệu — đã báo bộ phận IT, chưa dùng khối này.

⚠️ Riêng năm **2021**, luỹ kế năm của **Bán hàng** và **Thu tiền** được cộng thêm một số cố định (số đầu kỳ chuyển từ hệ thống cũ).

### Báo cáo trống hoặc thiếu khối 

Nguyên nhân: ngày chọn chưa có chứng từ; đang ở chi nhánh khác; tài khoản chưa được phân quỹ (khối A trống).
Cách xử lý: chọn lại ngày; kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)); liên hệ quản trị hệ thống phân quỹ.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập** màn hình.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Xem được nhiều ngày một lúc không?**
Không. Báo cáo theo **một ngày**; số luỹ kế tháng / năm tính đến ngày đó.

**Vì sao phải trả NCC ở đây khác màn Công nợ nhà cung cấp?**
Khối G chỉ cộng hai nhóm nhà cung cấp cố định (xem phần “Những điều cần lưu ý”).

## 11. Công việc tiếp theo

```text
Tình hình cty → số bất thường → mở màn chi tiết (KT-B02.0, KT-C05.0, KT-C06.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/) – Tổng quan màn hình thống kê Tồn quỹ
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NHÀ CUNG CẤP](/bai-viet/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/) – Tổng quan màn hình thống kê Công nợ nhà cung cấp
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/) – Tổng quan màn hình thống kê Công nợ khách hàng
- [TỔNG QUAN MÀN HÌNH LỆNH VAY](/bai-viet/2026-11-07-kt-a02-0-tong-quan-man-hinh-lenh-vay/) – Tổng quan màn hình Lệnh vay
