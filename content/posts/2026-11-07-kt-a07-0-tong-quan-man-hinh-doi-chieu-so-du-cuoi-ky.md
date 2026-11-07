---
title: "TỔNG QUAN MÀN HÌNH ĐỐI CHIẾU SỐ DƯ CUỐI KỲ"
date: "2026-11-07"
summary: "Màn hình Đối chiếu số dư cuối kỳ so sánh, cho từng tài khoản ngân hàng của công ty đã kết nối với ERP, hai con số: - Số dư ngân hàng báo ngay lúc mở màn hình (hệ thống hỏi trực tiếp ngân hàng)."
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

Màn hình **Đối chiếu số dư cuối kỳ** so sánh, cho từng **tài khoản ngân hàng** của công ty đã kết nối với ERP, hai con số:

- **Số dư ngân hàng báo** ngay lúc mở màn hình (hệ thống hỏi trực tiếp ngân hàng).
- **Tồn quỹ trên ERP** của quỹ có cùng **số tài khoản**, tính đến hết **ngày hôm nay** (cùng cách tính với màn **Tồn quỹ**, [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)).

Hai số bằng nhau thì dòng hiện **Trùng khớp**, khác nhau thì hiện **Không khớp**.

Hiện màn hình đối chiếu các tài khoản kết nối với 3 ngân hàng: **ACB**, **STB** (Sacombank) và **Vietcombank**.

Bạn dùng màn hình này khi:

- Cuối ngày / cuối tháng, kiểm tra tiền trên tài khoản ngân hàng có khớp với tồn quỹ đã ghi trên ERP chưa, trước khi **khóa kỳ** ([HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/)).
- Phát hiện giao dịch ngân hàng chưa lập phiếu thu / phiếu chi.

Màn hình **chỉ xem**: không lập, sửa chứng từ và không làm thay đổi quỹ hay công nợ. Lệch ở đâu thì xử lý ở màn chứng từ tương ứng (xem phần “Trình tự công việc”).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Đối chiếu số dư cuối kỳ**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)). Tồn quỹ ERP tính theo chứng từ của chi nhánh đang làm việc.
- Trong danh mục **Tài khoản, quỹ** (sổ tay Thiết lập danh mục) có quỹ **đang kích hoạt** mà ô **Số tài khoản** ghi **đúng y** số tài khoản ngân hàng đã kết nối (không thừa dấu cách, dấu chấm, gạch ngang).
- Tài khoản đăng nhập đã được **phân quỹ** đó (Thiết lập nội bộ → Nhân viên → chuột phải **Phân qũy, tài khoản**), trừ tài khoản quản trị.
- Kết nối ngân hàng đã được bộ phận IT cấu hình trên hệ thống. Ngân hàng nào chưa cấu hình thì không có dòng trên màn hình.

## 2. Mở chức năng

**Kế toán → Đối chiếu số dư cuối kỳ**

## 3. Nhận biết màn hình

![Hình 1: Màn hình ĐỐI CHIẾU SỐ DƯ CUỐI KỲ (bố cục, bảng chưa có dòng)](/posts/2026-11-07-kt-a07-0-tong-quan-man-hinh-doi-chieu-so-du-cuoi-ky/hinh-01-man-hinh-doi-chieu-so-du-cuoi-ky.png)

Hình 1 chỉ minh hoạ bố cục: bảng hiện **Không có dữ liệu** vì máy chụp chưa kết nối ngân hàng nào. Khi có kết nối, mỗi tài khoản ngân hàng là một dòng.

- **Tải lại**: Chức năng: Hỏi lại số dư ngân hàng và tính lại tồn quỹ; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Ô Tìm kiếm…**: Chức năng: Tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Nhóm cột Dữ liệu từ ngân hàng**: Chức năng: Tên ngân hàng, số tài khoản và số dư ngân hàng báo; Hướng dẫn: phần “Nhận biết màn hình”
- **Nhóm cột Dữ liệu nội bộ**: Chức năng: Quỹ trên ERP có cùng số tài khoản và tồn quỹ ERP; Hướng dẫn: phần “Nhận biết màn hình”
- **Cột Đối chiếu – Trạng thái**: Chức năng: **Trùng khớp** (chữ xanh) / **Không khớp** (chữ đỏ). Nằm sát mép phải — màn hẹp thì kéo thanh cuộn ngang; Hướng dẫn: phần “Nhận biết màn hình”
- **Dòng lọc dưới tiêu đề cột, biểu tượng lọc trên tiêu đề**: Chức năng: Lọc nhanh; ô lọc cột **Trạng thái** chọn từ danh sách (mặc định *(Tất cả)*), ví dụ chỉ xem dòng **Không khớp**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)

**Các cột trên bảng:**

- **Dữ liệu từ ngân hàng**: Cột: Tên ngân hàng; Ý nghĩa: **ACB**, **STB** hoặc **Vietcombank**
- **Dữ liệu từ ngân hàng**: Cột: Số tài khoản; Ý nghĩa: Số tài khoản ngân hàng đã kết nối với ERP
- **Dữ liệu từ ngân hàng**: Cột: Số dư cuối kỳ; Ý nghĩa: Số dư hiện tại ngân hàng trả về lúc tải màn hình
- **Dữ liệu từ ngân hàng**: Cột: Số dư khả dụng; Ý nghĩa: Số tiền được phép dùng (đã trừ khoản bị phong toả, ký quỹ…). **Chỉ Vietcombank có**, ACB và STB để trống
- **Dữ liệu nội bộ**: Cột: Tên quỹ; Ý nghĩa: Tên quỹ trên ERP có **Số tài khoản** trùng với cột Số tài khoản ngân hàng
- **Dữ liệu nội bộ**: Cột: Số tài khoản; Ý nghĩa: Số tài khoản ghi trong danh mục quỹ
- **Dữ liệu nội bộ**: Cột: Số dư cuối kỳ; Ý nghĩa: Tồn quỹ ERP đến hết ngày hôm nay của chi nhánh đang làm việc
- **Đối chiếu**: Cột: Trạng thái; Ý nghĩa: **Trùng khớp** khi Số dư cuối kỳ ngân hàng = Số dư cuối kỳ nội bộ, ngược lại **Không khớp**

Bảng hiện 10 dòng mỗi trang, đổi được thành 15 / 20. Bảng **không có** cột số tiền chênh lệch: tự lấy **Số dư cuối kỳ** ngân hàng trừ **Số dư cuối kỳ** nội bộ.

Màn hình không có menu chuột phải trên dòng, không nhấp đúp xem chi tiết, không in, không xuất Excel. Chuột phải vào **tiêu đề cột** để mở menu sắp xếp, cố định cột ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

**Cách hệ thống lấy hai con số:**

```text
Mở màn hình / bấm Tải lại trong đúng hệ thống chi nhánh
      ↓
Lần lượt hỏi ACB → STB → Vietcombank
   ├── Ngân hàng trả số dư hiện tại (+ số dư khả dụng nếu là Vietcombank)
   └── Tìm quỹ có Số tài khoản trùng → tính tồn quỹ đến hết hôm nay
      ↓
Ghép thành 1 dòng → so sánh → Trùng khớp / Không khớp
      ↓
Ngân hàng nào lỗi kết nối hoặc không tìm được quỹ ──► bỏ dòng đó
```

**Cách tính Số dư cuối kỳ nội bộ:**

```text
Tồn quỹ = Tồn quỹ hiện tại
          − tiền thu có ngày sau hôm nay + tiền chi có ngày sau hôm nay
```

Tiền thu gồm phiếu thu, tiền vay vào quỹ (lệnh vay), tiền chuyển đến (chuyển tiền nội bộ); tiền chi gồm phiếu chi, tiền chuyển đi và phí chuyển. Đây là cùng con số **Tồn cuối kỳ** của quỹ đó trên màn **Tồn quỹ** (KT-B02.0) khi lọc **Hôm nay**.

**Khi dòng Không khớp:**

```text
Không khớp
   ↓
Mở Tồn quỹ (KT-B02.0), xem chứng từ của quỹ ── so với sao kê ngân hàng
   ├── Tiền vào chưa có phiếu thu ──► Phiếu thu từ giao dịch ngân hàng (KT-A03.3)
   ├── Tiền ra chưa có phiếu chi (phí, lãi vay, trả NCC) ──► Phiếu chi (KT-A04)
   ├── Chuyển giữa 2 tài khoản chưa ghi ──► Chuyển tiền nội bộ (KT-A06)
   ├── Giải ngân khoản vay chưa ghi ──► Lệnh vay (KT-A02)
   └── Phiếu ghi sai số tiền / sai quỹ / sai ngày ──► sửa phiếu đó
   ↓
Bấm Tải lại → Trùng khớp → khóa kỳ (KT-A01.2)
```

## 5. Thực hiện trên phần mềm

- **Xem đối chiếu**: Cách làm: Mở **Kế toán → Đối chiếu số dư cuối kỳ**; Bài hướng dẫn: Mục này
- **Lấy số mới nhất**: Cách làm: Bấm **Tải lại**; Bài hướng dẫn: Mục này
- **Chỉ xem dòng lệch**: Cách làm: Lọc cột **Trạng thái**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Đối chiếu chi nhánh khác**: Cách làm: Truy cập tên miền riêng và dùng tài khoản được cấp cho chi nhánh đó; Bài hướng dẫn: [HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)
- **Tìm chứng từ gây lệch**: Cách làm: Mở **Tồn quỹ**, xem chứng từ của quỹ; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)
- **Lập phiếu còn thiếu**: Cách làm: Phiếu thu / phiếu chi / chuyển tiền nội bộ / lệnh vay; Bài hướng dẫn: phần “Trình tự công việc”

### Đối chiếu số dư

**Bước 1 –** Ở menu bên trái, bấm **Kế toán → Đối chiếu số dư cuối kỳ**. Hệ thống tự hỏi các ngân hàng và hiện bảng (có thể mất vài giây).

**Bước 2 –** Xem cột **Trạng thái**  từng dòng:

- **Trùng khớp**: hai số dư tại thời điểm/phạm vi đang so bằng nhau; vẫn đối chiếu tính đủ chứng từ và sổ phụ trước chốt kỳ, vì hai sai lệch có thể bù nhau.
- **Không khớp**: so **Số dư cuối kỳ** ở nhóm **Dữ liệu từ ngân hàng** với **Số dư cuối kỳ** ở nhóm **Dữ liệu nội bộ** để biết lệch bao nhiêu, bên nào lớn hơn.

**Bước 3 –** Với dòng **Không khớp**, mở màn **Tồn quỹ** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)), chọn quỹ cùng tên, xem danh sách chứng từ và so với sao kê ngân hàng để tìm khoản thiếu hoặc sai (xem phần “Trình tự công việc”).

**Bước 4 –** Lập / sửa chứng từ còn thiếu hoặc sai, quay lại màn này và bấm **Tải lại**.

**Bước 5 –** Khi mọi dòng **Trùng khớp** (hoặc phần lệch đã được giải thích), kế toán trưởng có thể **khóa kỳ** ([HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/)).

## 6. Kiểm tra sau khi thực hiện

Bạn biết tài khoản ngân hàng nào đang khớp, tài khoản nào đang lệch với tồn quỹ trên ERP, lệch bao nhiêu, và cần sang màn nào để tìm và xử lý khoản lệch.

## 7. Những điều cần lưu ý

⚠️ **"Cuối kỳ" ở màn này là thời điểm hiện tại**, không chọn được ngày hay tháng. Số dư ngân hàng là số dư lúc tải màn hình; tồn quỹ ERP tính đến hết ngày hôm nay. Muốn chốt số cuối tháng, đối chiếu vào ngày cuối tháng, hoặc dùng sổ phụ ngân hàng và màn **Tồn quỹ** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)) lọc đúng tháng.

⚠️ **Lệch chưa chắc là sai.** Tiền khách chuyển trong ngày chưa kịp lập phiếu thu, phiếu chi có ngày ở tương lai (không tính vào tồn hôm nay), phí và lãi ngân hàng tự trừ / tự cộng đều làm hai số tạm thời khác nhau.

⚠️ **Quỹ khớp với ngân hàng theo đúng chuỗi Số tài khoản.** Số tài khoản trong danh mục quỹ ghi khác chút (thêm dấu cách, dấu chấm) thì hệ thống không tìm ra quỹ và **bỏ dòng ngân hàng đó** khỏi bảng.

⚠️ Dòng ngân hàng cũng bị bỏ khi: quỹ đã ngừng kích hoạt; tài khoản đăng nhập chưa được phân quỹ đó; quỹ chưa có chứng từ nào (tồn bằng 0) ở chi nhánh đang làm việc; hoặc kết nối ngân hàng tạm lỗi. Thiếu dòng **không** có nghĩa là tài khoản đó khớp.

⚠️ Tồn quỹ ERP chỉ tính chứng từ của **chi nhánh đang làm việc**. Một tài khoản ngân hàng dùng chung cho nhiều chi nhánh có thể **Không khớp** khi xem từ một chi nhánh; cần đối chiếu đúng phạm vi giao dịch thay vì mặc định đây là lỗi số dư.

⚠️ Mỗi lần mở màn hình hoặc bấm **Tải lại**, hệ thống hỏi trực tiếp ngân hàng. Không bấm **Tải lại** liên tục. Chỉ đối chiếu tài khoản ngân hàng thuộc phạm vi hệ thống đang truy cập.

### "CẢNH BÁO – Không lấy được số dư cuối kỳ của bất kỳ ngân hàng nào" (Lỗi hệ thống)

![Hình 2: Thông báo khi không lấy được số dư ngân hàng nào](/posts/2026-11-07-kt-a07-0-tong-quan-man-hinh-doi-chieu-so-du-cuoi-ky/hinh-02-loi-khong-lay-duoc-so-du.png)

Thông báo có thể hiện **hai lần** liền nhau; bảng hiện **Không có dữ liệu**.

Nguyên nhân: cả 3 ngân hàng đều không trả được số dư, hoặc không ngân hàng nào tìm được quỹ tương ứng (sai số tài khoản, quỹ chưa phân cho bạn, đang ở chi nhánh không có chứng từ của quỹ).
Cách xử lý: thử **Tải lại** sau vài phút; kiểm tra chi nhánh đang làm việc ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)) và việc phân quỹ; nếu vẫn lỗi, báo bộ phận IT kiểm tra kết nối ngân hàng.

### Bảng thiếu một ngân hàng 

Nguyên nhân: xem cảnh báo thứ 4 ở phần “Những điều cần lưu ý”.
Cách xử lý: so **Số tài khoản** của quỹ trong danh mục **Tài khoản, quỹ** với số tài khoản ngân hàng; kiểm tra quỹ còn kích hoạt và đã phân cho bạn; nếu đúng hết, báo IT kiểm tra kết nối ngân hàng đó.

### Dòng luôn Không khớp dù đã lập đủ phiếu 

Nguyên nhân: có phiếu ghi nhầm quỹ / nhầm số tiền / ngày ở tương lai; hoặc tài khoản dùng chung cho nhiều chi nhánh.
Cách xử lý: xem chứng từ của quỹ ở **Tồn quỹ** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)) và so từng dòng với sao kê.

### Không thấy menu Đối chiếu số dư cuối kỳ 

Kiểm tra: tài khoản đã có quyền **Đối chiếu số dư cuối kỳ** chưa.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 9. Câu hỏi thường gặp

**Có chọn được ngày để đối chiếu số dư của tháng trước không?**
Không. Màn hình luôn so số dư ngân hàng hiện tại với tồn quỹ đến hết hôm nay.

**Vì sao chỉ có 3 ngân hàng?**
Chỉ ACB, Sacombank và Vietcombank đã được kết nối với ERP. Tài khoản ở ngân hàng khác đối chiếu thủ công bằng sổ phụ và màn **Tồn quỹ** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)).

**Số dư khả dụng khác số dư cuối kỳ có sao không?**
Không ảnh hưởng đối chiếu. Hệ thống chỉ so **Số dư cuối kỳ** của ngân hàng với tồn quỹ ERP; số dư khả dụng chỉ để tham khảo.

**Màn này có tự lập phiếu thu cho khoản lệch không?**
Không. Lập phiếu thu từ giao dịch ngân hàng ở màn **Phiếu thu** ([HƯỚNG DẪN LẬP PHIẾU THU TỪ GIAO DỊCH NGÂN HÀNG](/bai-viet/2026-11-07-kt-a03-3-huong-dan-lap-phieu-thu-tu-giao-dich-ngan-hang/)).

## 10. Công việc tiếp theo

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/) – Tổng quan màn hình thống kê Tồn quỹ (để tìm chứng từ gây lệch), sau đó [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/) – Hướng dẫn khóa và mở lại kỳ kế toán.

## 11. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/) – Tổng quan màn hình thống kê Tồn quỹ
- [HƯỚNG DẪN LẬP PHIẾU THU TỪ GIAO DỊCH NGÂN HÀNG](/bai-viet/2026-11-07-kt-a03-3-huong-dan-lap-phieu-thu-tu-giao-dich-ngan-hang/) – Hướng dẫn lập phiếu thu từ giao dịch ngân hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/) – Tổng quan màn hình Phiếu chi
- [TỔNG QUAN MÀN HÌNH CHUYỂN TIỀN NỘI BỘ](/bai-viet/2026-11-07-kt-a06-0-tong-quan-man-hinh-chuyen-tien-noi-bo/) – Tổng quan màn hình Chuyển tiền nội bộ
- [TỔNG QUAN MÀN HÌNH LỆNH VAY](/bai-viet/2026-11-07-kt-a02-0-tong-quan-man-hinh-lenh-vay/) – Tổng quan màn hình Lệnh vay
- [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/) – Hướng dẫn khóa và mở lại kỳ kế toán
- [TỔNG QUAN MODULE KẾ TOÁN VÀ THỨ TỰ SỬ DỤNG](/bai-viet/2026-11-07-kt-00-tong-quan-module-ke-toan-va-thu-tu-su-dung/) – Tổng quan phân hệ Kế toán
- Sổ tay Thiết lập danh mục – Tài khoản, quỹ
