---
title: "HƯỚNG DẪN LẬP PHIẾU MUA HÀNG TỪ ĐƠN ĐẶT"
date: 2026-11-07
summary: "Khi nhà cung cấp giao hàng theo một phiếu đặt hàng đã lập, bạn không cần nhập lại từng dòng."
module: "Mua hàng"
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

Khi nhà cung cấp giao hàng theo một **phiếu đặt hàng** đã lập, bạn không cần nhập lại từng dòng. Nút **Từ đơn hàng** trong form phiếu mua hàng lấy các dòng **còn chờ mua** của phiếu đặt hàng vào phiếu mua: hàng hoá, số lượng còn lại, đơn giá, chiết khấu, VAT, chú thích.

Sau khi lưu phiếu mua hàng:

- Phiếu đặt hàng được cập nhật **SL đã mua** và **Trạng thái nhận** (**Chưa nhận** → **Đang nhận** → **Đã nhận**).
- Các dòng của phiếu mua trở thành **hàng chờ nhập kho**, giống phiếu lập tay.

> Các nút và màn hình hiển thị tùy quyền tài khoản. Bài được biên soạn từ bộ hướng dẫn hiện có; ảnh là giao diện tham khảo trong tài liệu nguồn.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Thêm mới** của màn hình **Phiếu mua hàng** và quyền **Truy cập** màn hình **Phiếu đặt hàng**.
- Đã có phiếu đặt hàng nhà cung cấp còn dòng chưa mua đủ (**Trạng thái nhận** khác **Đã nhận**) – xem [hướng dẫn lập phiếu đặt hàng](/bai-viet/2026-11-07-huong-dan-lap-phieu-dat-hang-nha-cung-cap/).
- Có hoá đơn / chứng từ giao hàng của nhà cung cấp để đối chiếu số lượng, giá.

## 2. Mở chức năng

**Mua hàng → Phiếu mua hàng → Thêm mới → Từ đơn hàng**

![Hình 1: Cửa sổ TỔNG HỢP CHI TIẾT HÀNG CHỜ MUA](/posts/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/HINH_01_tong-hop-hang-cho-mua.png)

### Bước 1 – Mở form và chọn nhà cung cấp

Vào **Mua hàng → Phiếu mua hàng**, bấm **Thêm mới**. Form **THÊM MỚI - PHIẾU MUA HÀNG** mở ra. Nhập **NGÀY MUA HÀNG** và chọn **NHÀ CUNG CẤP**.

Nút **Từ đơn hàng** bấm được cả khi chưa chọn nhà cung cấp. Khi đó cửa sổ hiện đơn của **mọi nhà cung cấp**; nhà cung cấp của phiếu được tự điền theo các dòng bạn chọn. Chọn nhà cung cấp trước giúp danh sách gọn và tránh chọn nhầm.

### Bước 2 – Mở danh sách hàng chờ mua

Bấm **Từ đơn hàng** ở góc dưới form. Cửa sổ **TỔNG HỢP CHI TIẾT HÀNG CHỜ MUA** mở ra (Hình 1), liệt kê từng dòng hàng của các phiếu đặt hàng **chưa nhận đủ**, đặt từ đầu năm đến hôm nay.

Không thấy đơn cũ hơn: đổi khoảng ngày ở.

### Bước 3 – (Tuỳ chọn) Áp dụng bảng giá

Nếu giá mua lần này theo bảng giá mới của nhà cung cấp chứ không theo giá lúc đặt:

1. Bấm ô **Áp dụng bảng giá...**, chọn bảng giá (hiện dạng *ngày hiệu lực, tên bảng giá*).
2. Danh sách tải lại: dòng nào có hàng trong bảng giá thì **Đơn giá** lấy theo bảng giá, dòng còn lại giữ giá đặt hàng.

Bấm ✕ trong ô để bỏ bảng giá.

### Bước 4 – Tick các dòng cần mua

Tick ô  ở các dòng nhà cung cấp giao lần này. Có thể tick dòng của nhiều phiếu đặt hàng, nhưng **phải cùng một nhà cung cấp**.

![Hình 2: Tick dòng đặt hàng cần mua](/posts/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/HINH_02_tick-dong-dat-hang.png)

### Bước 5 – Bấm Đồng ý

Bấm **Đồng ý**.

- Chọn dòng của từ 2 nhà cung cấp trở lên, hoặc chưa tick dòng nào: dưới cửa sổ hiện chữ đỏ **Vui lòng chỉ chọn từ 1 nhà cung cấp.** Bỏ bớt dòng rồi bấm lại.
- Hợp lệ: cửa sổ đóng, các dòng được thêm vào bảng chi tiết của phiếu mua.

Mỗi dòng được thêm có:

- **Hàng hóa**, **Đvt** theo dòng đặt hàng; ô **Hàng hóa** bị khoá (không đổi sang hàng khác).
- **Số lượng** = số **còn lại chờ mua** của dòng đặt hàng.
- **Đơn giá**, **Chiết khấu**, **Thuế VAT**, **Chú thích** theo dòng đặt hàng (hoặc đơn giá theo bảng giá ở bước 3).
- **T.Tin đặt hàng** = mã phiếu đặt hàng; **T.Tin bảng giá** = ngày, tên bảng giá (nếu có).

Dòng đặt hàng đã có trong phiếu thì không được thêm lần hai.

![Hình 3: Phiếu mua hàng sau khi lấy từ đơn hàng](/posts/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/HINH_03_phieu-mua-tu-don-hang.png)

### Bước 6 – Điều chỉnh theo hàng giao thực tế

- Nhà cung cấp giao **thiếu**: sửa **Số lượng** xuống bằng số thực giao. Phần còn lại vẫn chờ mua ở lần sau.
- Giá hoá đơn khác giá đặt: sửa **Đơn giá**, **Chiết khấu**, **Thuế VAT**.
- Không mua dòng nào: bấm biểu tượng thùng rác ở cột **Thao tác** để xoá dòng đó.
- Có thể thêm dòng hàng ngoài đơn bằng **Thêm một hàng**.

Kiểm tra **Thành tiền** và tổng cuối bảng khớp hoá đơn.

### Bước 7 – Nhập thông tin chứng từ và lưu

Nhập **CHỨNG TỪ/HĐ**, **GHI CHÚ** (bắt buộc – nguồn thanh toán hoặc *Thanh toán sau*), **NGÀY HẠCH TOÁN**. Xoá dòng trống cuối bảng nếu có, rồi bấm **Lưu lại**.

Hợp lệ: hiện **Lưu thành công**, form đóng, danh sách tải lại.

### Bước 8 – Kiểm tra phiếu đặt hàng

Mở **Mua hàng → Phiếu đặt hàng**: cột **Trạng thái nhận** của phiếu đặt hàng đã chuyển **Đang nhận** (mua một phần) hoặc **Đã nhận** (mua đủ).

## 4. Kiểm tra sau khi lưu

- Phiếu mua hàng được lưu, **Trạng thái nhập** = **Chưa nhập**; các dòng thành hàng chờ nhập kho.
- Từng dòng đặt hàng tăng **SL đã mua** đúng bằng số lượng lấy sang (tối đa bằng phần còn lại của dòng đặt).
- **Trạng thái nhận** của dòng và của phiếu đặt hàng được tính lại: mua đủ (Số lượng − SL tất toán) → **Đã nhận**; mua một phần → **Đang nhận**.
- Dòng đặt hàng **Đã nhận** không còn hiện ở cửa sổ **Từ đơn hàng** lần sau.
- Tồn kho, công nợ nhà cung cấp **chưa** thay đổi (chỉ thay đổi khi nhập kho).

## 5. Những điều cần lưu ý

⚠️ **Mỗi phiếu mua chỉ một nhà cung cấp.** Hàng giao từ 2 nhà cung cấp phải lập 2 phiếu mua.

⚠️ Danh sách hàng chờ mua lọc theo **Ngày đặt hàng**, mặc định từ đầu năm. Đơn đặt từ năm trước phải đổi khoảng ngày mới thấy.

⚠️ Nhập **Số lượng lớn hơn phần còn lại** của dòng đặt hàng vẫn lưu được, nhưng phần dư **không** được tính vào phiếu đặt hàng (SL đã mua tối đa bằng phần còn lại).

⚠️ Sửa / xoá phiếu mua hàng (khi chưa nhập kho) thì **SL đã mua** và **Trạng thái nhận** của phiếu đặt hàng tự tính lại.

⚠️ **Tất toán phiếu mua hàng không trả lại số lượng cho phiếu đặt hàng.** Phần đặt hàng không mua nữa phải tất toán ở phiếu đặt hàng.

⚠️ Đơn giá lấy theo đơn đặt hàng (hoặc bảng giá). Luôn đối chiếu với hoá đơn trước khi lưu.

### "Vui lòng chỉ chọn từ 1 nhà cung cấp." (Lỗi sử dụng)

Nguyên nhân: các dòng đã tick thuộc từ 2 nhà cung cấp trở lên, hoặc chưa tick dòng nào.
Cách xử lý: chỉ tick dòng của một nhà cung cấp rồi bấm **Đồng ý**.

### Không thấy phiếu đặt hàng trong cửa sổ (Lỗi sử dụng)

Kiểm tra: khoảng ngày có chứa **Ngày đặt hàng**; phiếu đặt có đúng nhà cung cấp đã chọn ở form; dòng đặt hàng chưa **Đã nhận** (mua đủ hoặc tất toán hết thì không hiện).
Cách xử lý: đổi khoảng ngày, bỏ chọn nhà cung cấp ở form để xem tất cả, hoặc kiểm tra lại phiếu trong danh sách Phiếu đặt hàng.

### Không đổi được hàng hoá ở dòng lấy từ đơn hàng (Lỗi sử dụng)

Nguyên nhân: dòng gắn với dòng đặt hàng nên ô **Hàng hóa** bị khoá.
Cách xử lý: xoá dòng và thêm dòng mới bằng **Thêm một hàng** nếu thật sự mua hàng khác.

### Ô Áp dụng bảng giá trống hoặc báo "Bạn không có quyền thực hiện chức năng này." (Lỗi sử dụng)

Nguyên nhân: chi nhánh chưa có bảng giá, hoặc tài khoản thiếu quyền truy cập Bảng giá.
Cách xử lý: bỏ qua bảng giá, sửa đơn giá tay; hoặc liên hệ quản trị hệ thống.

### Lỗi khi lưu phiếu

Nếu báo thiếu ghi chú hoặc ngày, bổ sung thông tin tại ô được đánh dấu. Nếu báo số lượng âm, sửa số lượng tại dòng được thông báo.

## 7. Câu hỏi thường gặp

**Nhà cung cấp giao làm nhiều đợt thì làm thế nào?**
Mỗi đợt lập một phiếu mua bằng **Từ đơn hàng**, sửa **Số lượng** bằng số giao đợt đó. Lần sau cửa sổ chỉ hiện phần còn lại.

**Có lấy dòng từ nhiều phiếu đặt hàng vào một phiếu mua được không?**
Được, miễn là cùng một nhà cung cấp.

**Vì sao cột Từ phiếu trên danh sách phiếu mua để trống?**
Mã phiếu đặt hàng được ghi theo từng dòng (cột **T.Tin đặt hàng**), không ghi ở đầu phiếu. Xem mã phiếu đặt ở bảng chi tiết.

**Lấy nhầm dòng thì sao?**
Trước khi lưu: xoá dòng bằng biểu tượng thùng rác. Sau khi lưu (chưa nhập kho): **Sửa** phiếu, xoá dòng, **Lưu lại**.

## Bài hướng dẫn liên quan

- [Lập phiếu đặt hàng nhà cung cấp](/bai-viet/2026-11-07-huong-dan-lap-phieu-dat-hang-nha-cung-cap/)
- [Lập phiếu mua hàng từ đơn đặt](/bai-viet/2026-11-07-huong-dan-lap-phieu-mua-hang-tu-don-dat/)
- [Nhập kho hàng mua](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/)
