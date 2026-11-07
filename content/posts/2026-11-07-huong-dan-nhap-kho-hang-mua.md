---
title: "HƯỚNG DẪN NHẬP KHO HÀNG MUA"
date: 2026-11-07
summary: "Khi nhà cung cấp giao hàng, thủ kho lập phiếu nhập kho từ phiếu mua hàng đã có (module Mua hàng)."
module: "Kho hàng"
category: huong-dan
version: "v5.0.0"
isNew: true
scope: "Người dùng được cấp quyền chức năng"
department: ""
mediaType: none
tags: []
pinImportant: false
pinned: false
draft: true
---

## Chức năng này dùng để làm gì?

Khi nhà cung cấp giao hàng, thủ kho lập **phiếu nhập kho** từ **phiếu mua hàng** đã có (module Mua hàng). Hệ thống lấy sẵn nhà cung cấp, hàng hoá, số lượng còn chờ nhập và giá theo phiếu mua; thủ kho chỉ chọn kho, sửa số lượng thực nhận và ghi thông tin chứng từ.

Khi lưu: **tồn kho tăng**, **công nợ phải trả nhà cung cấp tăng**, **Trạng thái nhập** của phiếu mua hàng chuyển sang **Đang nhập** / **Đã nhập**.

> Các nút và màn hình hiển thị tùy quyền tài khoản. Bài được biên soạn từ bộ hướng dẫn hiện có; ảnh là giao diện tham khảo trong tài liệu nguồn.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu nhập kho**.
- Đã có **phiếu mua hàng** còn hàng chưa nhập (Trạng thái nhập **Chưa nhập** / **Đang nhập**).
- Có chứng từ giao hàng của nhà cung cấp (phiếu giao, biên bản) để ghi **MÃ PHIẾU GỐC**; số hoá đơn nếu có.
- Hàng đã được kiểm đếm thực tế.

## 2. Mở chức năng

**Kho hàng → Phiếu nhập kho → Thêm mới → Nhập mua hàng**

![Hình 1: Cửa sổ DANH SÁCH PHIẾU MUA HÀNG nhà cung cấp](/posts/2026-11-07-huong-dan-nhap-kho-hang-mua/HINH_01_danh-sach-phieu-mua-hang-ncc.png)

### Bước 1 – Mở danh sách hàng chờ nhập

Vào **Kho hàng → Phiếu nhập kho**, bấm **Thêm mới** → **Nhập mua hàng**. Cửa sổ **DANH SÁCH PHIẾU MUA HÀNG nhà cung cấp** mở ra (Hình 1).

### Bước 2 – Chọn các dòng hàng cần nhập

1. Đổi khoảng ngày  cho chứa **Ngày mua hàng** của phiếu mua (mặc định từ đầu tháng).
2. Tìm theo **Mã mua hàng** hoặc tên nhà cung cấp ở ô **Tìm kiếm…**.
3. Tick ô đầu các dòng hàng nhà cung cấp đang giao. Có thể chọn dòng của **nhiều phiếu mua** nhưng phải **cùng một nhà cung cấp**.
4. Bấm **Đồng ý**.

Nếu chọn dòng của hai nhà cung cấp khác nhau (hoặc chưa tick dòng nào), chân cửa sổ báo chữ đỏ **Vui lòng chỉ chọn từ 1 nhà cung cấp.**

### Bước 3 – Kiểm tra form đã điền sẵn

Form **THÊM MỚI PHIẾU NHẬP KHO** mở ra với **NGƯỜI GIAO HÀNG** = tên nhà cung cấp, **GHI CHÚ** = ghi chú của phiếu mua, bảng **HÀNG HÓA** gồm các dòng đã chọn, **Số lượng** = số còn chờ nhập.

⚠️ Lúc mở form, bảng **HÀNG HÓA** chỉ thấy **STT**, **Hàng hóa**, **Tên in**, **Thao tác**. Các cột **không bị ẩn**: cột **Hàng hóa** và **Tên in** rất rộng nên **Là chi phí**, **Đvt**, **Khối lượng**, **Kiện**, **M³**, **Số lượng**, **Chi phí**, **Giá trị nhập**, **Chú thích**, **Chú thích nội bộ** nằm bên phải. **Kéo thanh cuộn ngang ở đáy bảng** sang phải để thấy và nhập. Không cần **Khôi phục bố cục** (lệnh này không đổi gì ở bảng này).

![Biểu mẫu nhập kho hàng mua](/posts/2026-11-07-huong-dan-nhap-kho-hang-mua/HINH_02_form-them-phieu-nhap-kho.png)

### Bước 4 – Nhập thông tin chung

- **NGÀY NHẬP KHO**: ngày hàng vào kho, mặc định hôm nay.
- **KHO NHẬP**: chọn kho nhận hàng.
- **MÃ PHIẾU GỐC**: số phiếu giao hàng của nhà cung cấp; không có thì ghi **không có**.
- **SỐ HOÁ ĐƠN**, **VẬN CHUYỂN**: nhập nếu có (sau này sửa nhanh được bằng chuột phải trên danh sách).
- **GHI CHÚ**: giữ hoặc sửa lý do nhập.

### Bước 5 – Nhập số lượng thực nhận

- Kéo thanh cuộn ngang của bảng sang phải tới cột **Số lượng**. Bấm ô **Số lượng**, sửa thành số **thực nhận** (không lớn hơn số còn chờ nhập).
- Dòng nhà cung cấp chưa giao: bấm biểu tượng thùng rác ở cột **Thao tác** để xoá khỏi phiếu (dòng vẫn còn chờ nhập ở phiếu mua).
- Sửa **Tên in**, ghi **Chú thích** / **Chú thích nội bộ** nếu cần.

Mẹo (chuột phải vào ô của dòng): **Áp dụng cho những dòng dưới** ở cột **Chi phí**, **Chú thích**, **Chú thích nội bộ**.

![Hình 3: Bảng HÀNG HÓA sau khi kéo thanh cuộn ngang sang phải](/posts/2026-11-07-huong-dan-nhap-kho-hang-mua/HINH_03_bang-hang-hoa-nhap-kho.png)

### Bước 6 – (Tuỳ chọn) Phân bổ chi phí

Nếu có chi phí vận chuyển / bốc xếp cần cộng vào giá nhập: mở tab **CHI PHÍ** và thực hiện phân bổ theo hướng dẫn của kế toán kho **trước khi** bấm Lưu lại.

### Bước 7 – Lưu lại

Bấm **Lưu lại**.

- Thiếu thông tin chung: ô viền đỏ và biểu tượng **!**; bấm vào ô để xem lời nhắc: **Chọn ngày nhập kho**, **Vui lòng chọn kho nhập**, **Vui lòng nhập mã phiếu gốc hoặc mã phiếu từ nhà cung cấp.../ không có thì ghi không có thì ghi không có**, **Vui lòng ghi lý do nhập (khách trả hàng/ nhập mua...)**.
- Số lượng âm: cảnh báo **<số dòng>. Số lượng phải lớn hơn hoặc bằng 0**.
- Chi phí chưa khớp: cảnh báo **Chi phí chưa được phân bổ hoặc số phân bổ chưa hợp lệ.**.
- Nhập nhiều hơn số còn chờ: **CẢNH BÁO – Lỗi thêm: <tên hàng> chỉ còn lại (<số>) từ đơn**.
- Hợp lệ: thông báo **Lưu thành công**, form đóng, danh sách tải lại.

### Bước 8 – Kiểm tra kết quả

Phiếu mới hiện trong danh sách với **Mã phiếu** dạng **NK…**, **Người giao** = nhà cung cấp, **Trạng thái chi** = **Chưa chi**, **Ngày đến hạn** = ngày nhập + số ngày nợ của nhà cung cấp. Trên màn **Phiếu mua hàng**, **Trạng thái nhập** của phiếu mua đổi thành **Đang nhập** (nhập một phần) hoặc **Đã nhập**.

### Sửa phiếu

Bấm **Sửa** → form **CẬP NHẬT PHIẾU NHẬP KHO**.

- Sửa được: ngày nhập (không lùi trước ngày đã lưu nếu không có quyền **Thay đổi ngày nhập**), kho nhập, mã phiếu gốc, ghi chú, vận chuyển, số hoá đơn, **Số lượng**, **Tên in**, chú thích, xoá dòng, chi phí.
- Không thêm được mặt hàng mới, không đổi nhà cung cấp. Nút **TỪ PHIẾU …** không hiện khi sửa.
- Không sửa được khi phiếu **đang / đã được chi tiền**.

## 4. Kiểm tra sau khi lưu

- Phiếu nhập kho được lưu với mã **NK…**, hiện ở **PHIẾU NHẬP KHO - DANH SÁCH**.
- **Tồn kho tăng** ở kho nhập theo Số lượng từng dòng.
- **Công nợ phải trả nhà cung cấp tăng** bằng tổng tiền phiếu (đơn giá sau chiết khấu, cộng VAT, × số lượng).
- **Sổ cái kho** ghi dòng nhập với giá nhập = đơn giá sau chiết khấu + chi phí phân bổ / số lượng; giá vốn được tính lại từ ngày nhập.
- **Trạng thái nhập** của phiếu mua hàng cập nhật; phần chưa nhập vẫn hiện ở danh sách hàng chờ nhập kho.
- Phiếu nhập hiện trong danh sách chọn của **Phiếu trả hàng → Từ phiếu nhập**  và để kế toán lập phiếu chi.

## 5. Những điều cần lưu ý

⚠️ **Công nợ nhà cung cấp phát sinh ở bước này**, không phải ở phiếu mua hàng. Nhập sai số lượng là sai công nợ.

⚠️ Chỉ nhập **số thực nhận**. Phần nhà cung cấp chưa giao: xoá dòng hoặc giảm số lượng; lần sau phần còn lại vẫn hiện để nhập tiếp. Phần nhà cung cấp không giao nữa: bộ phận mua hàng **Tất toán** phiếu mua.

⚠️ Mỗi phiếu nhập chỉ của **một nhà cung cấp**.

⚠️ Chọn lại chứng từ bằng **TỪ PHIẾU MUA HÀNG** / **TỪ PHIẾU TRẢ HÀNG** sẽ **làm mới toàn bộ form** (ngày, kho, mã phiếu gốc… phải nhập lại).

⚠️ Không sửa / xoá được phiếu đã được chi tiền. Không xoá được phiếu khi hàng đã xuất đi hoặc đã có phiếu trả hàng nhà cung cấp từ phiếu này.

⚠️ Bấm **Đóng** hoặc dấu ✕ là đóng form **không lưu**, không hỏi lại.

### Chân cửa sổ chọn báo "Vui lòng chỉ chọn từ 1 nhà cung cấp." (Lỗi sử dụng)

Nguyên nhân: đã tick dòng của nhiều nhà cung cấp, hoặc chưa tick dòng nào.
Cách xử lý: chỉ tick các dòng của cùng một nhà cung cấp rồi **Đồng ý**.

### Không thấy phiếu mua trong DANH SÁCH PHIẾU MUA HÀNG nhà cung cấp (Lỗi sử dụng)

Kiểm tra: khoảng ngày (mặc định từ đầu tháng); phiếu mua đã nhập đủ hoặc đã tất toán hết; phiếu là phiếu mua dịch vụ (không nhập kho).
Cách xử lý: mở rộng khoảng ngày ; kiểm tra **Trạng thái nhập** trên màn Phiếu mua hàng.

### Bảng HÀNG HÓA không có cột Số lượng (Lỗi sử dụng)

Nguyên nhân: cột **Hàng hóa** và **Tên in** rộng, các cột **Số lượng**, **Chi phí**, **Giá trị nhập**… nằm bên phải, ngoài khung nhìn (cột không bị ẩn).
Cách xử lý: kéo thanh cuộn ngang ở đáy bảng sang phải. Chỉ khi đã tự tắt cột bằng **Trình chọn cột** thì bật lại cột ở đó.

### Ô viền đỏ, lời nhắc "Vui lòng nhập mã phiếu gốc hoặc mã phiếu từ nhà cung cấp.../ không có thì ghi không có thì ghi không có" (Lỗi sử dụng)

Nguyên nhân: để trống **MÃ PHIẾU GỐC**.
Cách xử lý: nhập số phiếu giao của nhà cung cấp hoặc chữ **không có**.

### "CẢNH BÁO – Lỗi thêm: <tên hàng> chỉ còn lại (<số>) từ đơn" (Lỗi sử dụng)

Nguyên nhân: số lượng nhập lớn hơn số còn chờ nhập của dòng phiếu mua (đã trừ phần đã nhập, đã tất toán).
Cách xử lý: giảm **Số lượng** tối đa bằng số trong câu báo. nhà cung cấp giao dư thì báo bộ phận mua hàng sửa phiếu mua trước.

### "CẢNH BÁO – Lỗi thêm: Sổ kế toán đã được khoá trong thời gian này." (Lỗi sử dụng)

Nguyên nhân: ngày nhập kho thuộc kỳ kế toán đã khoá.
Cách xử lý: liên hệ kế toán.

### "CẢNH BÁO – Lỗi sửa: Phiếu đang được chi tiền" (Lỗi sử dụng)

Nguyên nhân: kế toán đã lập phiếu chi cho phiếu nhập này.
Cách xử lý: liên hệ kế toán; thông tin chứng từ sửa bằng chuột phải → **Cập nhật …**.

### Không chọn được ngày nhập kho trước hôm nay (Lỗi sử dụng)

Nguyên nhân: chưa có quyền **Thay đổi ngày nhập**.
Cách xử lý: liên hệ quản trị hệ thống / kế toán trưởng.

## 7. Câu hỏi thường gặp

**Nhà cung cấp giao làm nhiều đợt thì sao?**
Mỗi đợt lập một phiếu nhập với số thực nhận. Phiếu mua chuyển **Đang nhập** cho tới khi nhập đủ.

**Sao form không có cột đơn giá?**
Giá nhập lấy theo phiếu mua hàng. Người có quyền **Phân bổ chi phí** thấy cột **Giá trị nhập**; in **phiếu có giá** để xem đơn giá.

**Gộp hàng của hai phiếu mua cùng nhà cung cấp vào một phiếu nhập được không?**
Được: tick dòng của cả hai phiếu mua trong cửa sổ chọn.

## Bài hướng dẫn liên quan

- [Lập phiếu đặt hàng nhà cung cấp](/bai-viet/2026-11-07-huong-dan-lap-phieu-dat-hang-nha-cung-cap/)
- [Lập phiếu mua hàng từ đơn đặt](/bai-viet/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/)
- [Nhập kho hàng mua](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/)
