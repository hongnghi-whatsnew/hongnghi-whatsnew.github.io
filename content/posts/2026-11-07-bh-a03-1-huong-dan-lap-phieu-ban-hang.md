---
title: "HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG"
date: "2026-11-07"
summary: "Phiếu bán hàng ghi nhận đơn bán hàng hoá cho khách: khách nào, giao về đâu, xuất từ kho nào, bán mặt hàng gì, số lượng, đơn giá, chiết khấu, VAT."
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

Phiếu bán hàng ghi nhận đơn bán hàng hoá cho khách: khách nào, giao về đâu, xuất từ kho nào, bán mặt hàng gì, số lượng, đơn giá, chiết khấu, VAT. Sau khi lưu, hàng được **giữ** trong kho xuất; sau khi **duyệt giá**, thủ kho lập **phiếu xuất kho bán hàng** ([HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/)).

Bài này hướng dẫn lập phiếu **nhập tay từng dòng**, đơn giá tự đề xuất theo **bảng giá**. Lập từ phiếu đặt hàng xem [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a03-2-huong-dan-lap-phieu-ban-hang-tu-phieu-dat-hang/); nhập từ Excel xem [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU BÁN HÀNG TỪ EXCEL](/bai-viet/2026-11-07-bh-a03-3-huong-dan-nhap-chi-tiet-phieu-ban-hang-tu-excel/). Bài cũng áp dụng khi **Sửa** phiếu (cửa sổ **PHIẾU BÁN HÀNG - CẬP NHẬT**).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu bán hàng**.
- Khách hàng đã có trong danh mục, **có Mã số thuế** (khách tổ chức) hoặc **CCCD** ghi ở ô mã số thuế (khách cá nhân). Thiếu thì không lưu được – nhờ IT / người quản lý danh mục bổ sung.
- Mặt hàng đã có trong danh mục; kho xuất còn đủ **tồn được xuất**.
- (Nếu muốn giá tự đề xuất) khách hoặc công ty đã có **bảng giá bán** còn hiệu lực (sổ tay Thiết lập danh mục – Bảng giá mua bán).

## 2. Mở chức năng

**Bán hàng → Phiếu bán hàng → Thêm mới**

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ PHIẾU BÁN HÀNG - THÊM MỚI](/posts/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/hinh-01-form-them-phieu-ban-hang.png)

- **MÃ SỐ THUẾ**: Ý nghĩa: Tự điền theo khách, chỉ xem. Bắt buộc có giá trị
- **KHÁCH HÀNG**: Ý nghĩa: Bắt buộc. Phải chọn khách thì bảng chi tiết mới mở
- **QUÁ HẠN, NỢ CŨ**: Ý nghĩa: Nợ quá hạn và công nợ hiện tại của khách, tự điền
- **NGÀY BÁN HÀNG**: Ý nghĩa: Bắt buộc, mặc định hôm nay
- **ĐỊA CHỈ GIAO**: Ý nghĩa: Bắt buộc: ô *Số nhà, đường...* + ô *Chọn khu vực* (phường / xã, tỉnh) + nút **Tại kho**
- **ĐIỆN THOẠI, SỐ NGÀY NỢ**: Ý nghĩa: Tự điền theo khách, sửa được
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **N/V KINH DOANH**: Ý nghĩa: Bắt buộc, mặc định là bạn
- **GHI CHÚ**: Ý nghĩa: Bắt buộc khi **SỐ NGÀY NỢ** = 0
- **SỐ HỢP ĐỒNG**: Ý nghĩa: Tự lấy hợp đồng còn hạn của khách, chỉ xem
- **TÀI KHOẢN**: Ý nghĩa: Tài khoản ngân hàng nhận tiền (tuỳ chọn); bản in có mã QR chuyển khoản
- **KHO HÀNG**: Ý nghĩa: Bắt buộc – kho xuất hàng
- **Bảng chi tiết hàng hoá**: Ý nghĩa: Mở khi đã chọn khách
- **Thêm một hàng, TỪ PHIẾU ĐẶT HÀNG, Tải lên từ Excel, Tải file mẫu**: Ý nghĩa: Thêm dòng / lấy từ đơn đặt hàng ([HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a03-2-huong-dan-lap-phieu-ban-hang-tu-phieu-dat-hang/)) / nhập Excel ([HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU BÁN HÀNG TỪ EXCEL](/bai-viet/2026-11-07-bh-a03-3-huong-dan-nhap-chi-tiet-phieu-ban-hang-tu-excel/))
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Các cột trong bảng chi tiết** (theo thứ tự trên màn hình khi thêm mới):

- **STT**: Nhập / tự tính: Tự đánh số
- **Hàng hóa**: Nhập / tự tính: **Chọn** – bắt buộc
- **Số lượng**: Nhập / tự tính: **Nhập**
- **Số lượng lô**: Nhập / tự tính: Bấm vào ô để mở **CHI TIẾT LÔ** và chọn lô (hàng quản lý theo lô)
- **SL đã xuất, SL tất toán, SL còn lại**: Nhập / tự tính: Chỉ xem; có ngay khi thêm mới (SL còn lại = Số lượng)
- **Đơn giá**: Nhập / tự tính: Tự đề xuất theo bảng giá, **sửa được**
- **Chiết khấu**: Nhập / tự tính: **Nhập** (%)
- **Thuế VAT**: Nhập / tự tính: Mặc định **8%** khi chọn hàng (dòng trống hiện 0%), sửa được
- **Đơn giá CK**: Nhập / tự tính: Đơn giá sau chiết khấu, tự tính
- **Lấy VAT**: Nhập / tự tính: Tick khi khách lấy hoá đơn VAT. Khi thử, dòng VAT 8% ô này **không tự tick** – kiểm tra trước khi lưu
- **Thành tiền**: Nhập / tự tính: Tự tính
- **Số PO**: Nhập / tự tính: **Nhập** số PO của khách (tuỳ chọn)
- **Chú thích**: Nhập / tự tính: **Nhập** (in trên phiếu)
- **Chú thích nội bộ**: Nhập / tự tính: **Nhập** (ghi chú nội bộ)
- **Ngày đặt hàng**: Nhập / tự tính: Ngày của đơn đặt hàng (nếu lấy từ phiếu đặt hàng)
- **Đơn giá VAT**: Nhập / tự tính: Tự tính
- **T.Tin bảng giá**: Nhập / tự tính: Ngày áp dụng, tên bảng giá đã dùng để đề xuất giá, ví dụ *18/02/2022, CH 1/1/2022 - UPDATE*
- **Thao tác**: Nhập / tự tính: Nút **+** (thêm dòng tại đây), xoá dòng. Dòng bị xoá chỉ được đánh dấu (hiện biểu tượng hoàn tác) cho tới khi **Lưu lại**

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Bán hàng
   ↓
Phiếu bán hàng
   ↓
Thêm mới
```

```text
Phiếu bán hàng → Thêm mới
      ↓
Chọn khách hàng → MST, nợ cũ, quá hạn, địa chỉ, SĐT, số ngày nợ, số HĐ tự điền
   → thông báo tình trạng MST (khách tổ chức) / "khách cá nhân"
      ↓
Chọn KHO HÀNG → nhập địa chỉ giao (hoặc Tại kho), ghi chú
      ↓
Nhập chi tiết: chọn hàng → đơn giá tự đề xuất, VAT 8% → nhập số lượng, CK
   (hàng theo lô: bấm Số lượng lô → CHI TIẾT LÔ)
      ↓
Lưu lại → kiểm tra: ô bắt buộc → địa chỉ → giá vốn → tình trạng MST
   → máy chủ kiểm tra tồn được xuất
      ├── lỗi ──► sửa → Lưu lại
      └── "Lưu thành công" → Trạng thái duyệt: Chưa duyệt
      ↓
Gửi yêu cầu duyệt giá (BH-A03.4)
```

### Bước 1 – Mở cửa sổ thêm mới

Vào **Bán hàng → Phiếu bán hàng**, bấm **Thêm mới**. Cửa sổ **PHIẾU BÁN HÀNG - THÊM MỚI** mở ra (Hình 1). Bảng chi tiết bị mờ cho đến khi chọn khách.

### Bước 2 – Chọn khách hàng

**KHÁCH HÀNG**: gõ mã hoặc tên khách rồi chọn. Dòng hiển thị dạng *id, mã khách, tên rút gọn, tên khách*. Hệ thống:

- Điền **MÃ SỐ THUẾ**, **NỢ CŨ**, **QUÁ HẠN**, **ĐỊA CHỈ GIAO**, **ĐIỆN THOẠI**, **SỐ NGÀY NỢ**, **SỐ HỢP ĐỒNG**; mở bảng chi tiết.
- Với khách **tổ chức** có mã số thuế: tra cứu tình trạng mã số thuế và hiện thông báo góc màn hình (xanh nếu đang hoạt động, đỏ nếu ngừng / không tìm thấy).
- Với khách **cá nhân**: hiện thông báo **Khách hàng này là khách cá nhân** và không tra cứu mã số thuế.
- Có thể hiện thêm thông báo đỏ **CẢNH BÁO – Không thể kết nối tới server…** (không gọi được dịch vụ tra cứu mã số thuế bên ngoài). Bỏ qua; phiếu vẫn lưu được.

Kiểm tra **NỢ CŨ**, **QUÁ HẠN** trước khi bán thêm cho khách đang nợ.

### Bước 3 – Nhập thông tin giao hàng và kho

- **NGÀY BÁN HÀNG**: mặc định hôm nay.
- **ĐỊA CHỈ GIAO**: sửa số nhà / đường ở ô *Số nhà, đường...* và chọn khu vực ở ô *Chọn khu vực*. Khách tự lấy hàng: bấm **Tại kho** (ô địa chỉ thành *Tại kho*, khu vực được xoá).
- **ĐIỆN THOẠI**: số người nhận (9–50 ký tự).
- **SỐ NGÀY NỢ**: số ngày khách được nợ cho phiếu này.
- **N/V KINH DOANH**: đổi nếu bán thay người khác.
- **GHI CHÚ**: bắt buộc khi **SỐ NGÀY NỢ** = 0 (bán thu tiền ngay) – ghi rõ hình thức thanh toán hoặc mô tả thêm.
- **TÀI KHOẢN** ⑪: chọn tài khoản ngân hàng khách chuyển tiền vào (dòng hiển thị *số tài khoản, tên quỹ*). Khi in phiếu, nếu tài khoản có mã ngân hàng, bản in có **mã QR chuyển khoản** với số tiền = tổng tiền phiếu, nội dung *THANH TOAN <mã phiếu>* ([HƯỚNG DẪN IN PHIẾU BÁN HÀNG VÀ BẢNG BÁO GIÁ](/bai-viet/2026-11-07-bh-a03-6-huong-dan-in-phieu-ban-hang-va-bang-bao-gia/)).
- **KHO HÀNG** ⑫: chọn kho xuất. **Nên chọn kho trước khi chọn hàng** để danh sách hàng hiện đúng tồn của kho đó.

### Bước 4 – Nhập chi tiết hàng hoá

1. Bấm vào ô **Hàng hóa** ở dòng trống (hoặc **Thêm một hàng** ⑭). Gõ mã / tên hàng và chọn. Danh sách hiện *Tên, (tồn hiện tại, tồn được xuất, lô được xuất)*.
2. Hệ thống điền **Tên in**, **Đvt**, **Thuế VAT = 8%** và tự đề xuất **Đơn giá** theo thứ tự:
   - bảng giá **riêng của khách** còn hiệu lực, mới nhất;
   - nếu không có: **bảng giá chung**;
   - nếu vẫn không có: **giá xuất gần nhất** của mặt hàng cho khách này (cột **T.Tin bảng giá** ghi *Giá xuất gần nhất*).
   
   Một dòng trống mới được thêm bên dưới. Bảng rộng, kéo thanh cuộn ngang để thấy các cột phía sau (Hình 2).
3. Nhập **Số lượng**; sửa **Đơn giá** nếu thoả thuận khác; nhập **Chiết khấu**; sửa **Thuế VAT** nếu cần. Khách lấy hoá đơn thì kiểm tra ô **Lấy VAT** đã tick chưa – khi thử, ô này không tự tick dù VAT 8% (Hình 2).
4. Hàng quản lý theo **lô**: bấm ô **Số lượng lô** → cửa sổ **CHI TIẾT LÔ** mở ra (Hình 3). Bấm nút **+**  để thêm dòng, chọn **LOT**  (danh sách hiện *mã lô, hạn sử dụng (tồn hiện tại, tồn được xuất)*), nhập **SL**, bấm **Đồng ý**. Nút **−** đỏ xoá dòng lô; dòng **TỔNG CỘNG** cộng số lượng các lô.
5. Nhập **Số PO**, **Chú thích** / **Chú thích nội bộ** nếu cần. Sửa **Tên in** nếu khách muốn in tên khác.
6. Kiểm tra **Đơn giá VAT**, **Thành tiền** và tổng cuối bảng.

Mẹo (chuột phải vào ô của dòng):
- **Áp dụng cho những dòng dưới** ở cột **Số lượng**, **Đơn giá**, **Chiết khấu**, **Thuế VAT**, **Lấy VAT**, **Số PO**, **Chú thích**, **Chú thích nội bộ**.
- **8% và cho những dòng dưới** ở cột **Thuế VAT**.
- **Lấy giá từ bảng giá**: lấy lại đơn giá theo bảng giá cho **tất cả** các dòng.
- **Loại bỏ thay đổi** / **Hoàn tất**: huỷ / chốt các ô vừa sửa chưa lưu vào bảng.
- Chuột phải vào tiêu đề bảng có **Trình chọn cột** và **Khôi phục bố cục**. Kéo biểu tượng đầu dòng để đổi thứ tự dòng.

![Hình 2: Bảng chi tiết phiếu bán hàng kéo sang phải – cột giá và thuế](/posts/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/hinh-02-bang-chi-tiet-ban-hang.png)

- **Thuế VAT**: Ý nghĩa: 8% khi chọn hàng; chữ đỏ
- **Đơn giá CK**: Ý nghĩa: Đơn giá sau chiết khấu
- **Lấy VAT**: Ý nghĩa: Ô tick – kiểm tra tick tay khi khách lấy hoá đơn
- **Thành tiền**: Ý nghĩa: Ví dụ 2 × 164.000 × 1,08 = 354.240

![Hình 3: Cửa sổ CHI TIẾT LÔ](/posts/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/hinh-03-chi-tiet-lo.png)

- **LOT**: Ý nghĩa: Chọn lô
- **SL**: Ý nghĩa: Số lượng lấy từ lô
- **Nút +**: Ý nghĩa: Thêm dòng lô
- **Đồng ý / Đóng**: Ý nghĩa: Ghi số lô vào dòng hàng / đóng không ghi

### Bước 5 – Bấm Lưu lại

Bấm **Lưu lại** ⑮. Hệ thống kiểm tra lần lượt:

1. **Ô bắt buộc**: ô thiếu có viền đỏ; bấm vào ô để xem lời nhắc: **Vui lòng chọn Khách hàng**, **Chọn ngày bán hàng**, **Vui lòng chọn nhân viên kinh doanh**, **Vui lòng chọn kho hàng**, **Vui lòng nhập ghi chú mô tả thêm**, **Chưa có Mã Số Thuế hoặc CCCD, vui lòng cung cấp thông tin cho IT cập nhật.**, **Vui lòng nhập SĐT và gửi admin cập nhật**.
2. **Dòng chi tiết**: cảnh báo **<số dòng>. <nội dung>** (ví dụ **Số lượng >= 0**, **Chiết khấu trong khoảng 0 -> 100%**, **Thuế VAT không hợp lệ**).
3. **Địa chỉ giao**: **Vui lòng cho biết địa chỉ giao hàng** (trống) hoặc **Vui lòng ghi địa chỉ giao hàng và gửi admin cập nhật** (dưới 7 ký tự).
4. **Giá vốn**: dòng có đơn giá (sau chiết khấu, so cùng điều kiện VAT) **không cao hơn giá vốn hiện tại**:
   - có quyền **Bán dưới giá vốn**: hộp **Xác nhận** *Có hàng hóa dưới giá vốn, bạn có muốn tiếp tục lưu không?* kèm danh sách hàng → **Tiếp tục** để lưu, **Không** để quay lại sửa giá (Hình 4);
   - không có quyền: thông báo **Bạn không có quyền bán hàng dưới giá vốn. Vui lòng liên hệ quản trị viên để được cấp quyền.** và không lưu.
5. **Tình trạng mã số thuế** (khách tổ chức): nếu mã số thuế đã ngừng / không hoạt động, hệ thống báo tình trạng và **không lưu**. Khách cá nhân bỏ qua bước này.
6. **Máy chủ** kiểm tra tồn được xuất của kho, tồn lô, số lượng còn lại của đơn đặt hàng (xem phần “Vướng mắc thường gặp”).

Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại. **Trạng thái duyệt** = **Chưa duyệt**.

### Bước 6 – Đối chiếu phiếu đã lưu và gửi yêu cầu duyệt giá

Mở **Xem lại** đúng mã phiếu, kiểm tra kho, đơn vị tính, số lượng ngoài lô và số lượng từng lô, giá, chiết khấu, VAT, thành tiền và tổng phiếu. Với dòng có lô, không nhập lại số lô vào Số lượng nếu đó là cùng một phần hàng; đối chiếu tổng lượng theo cách biểu diễn của dòng để tránh tính hai lần. Nếu tổng lưu khác tổng dự kiến, xử lý trước khi gửi duyệt.

Phiếu phải được duyệt giá thì kho mới xuất được. Làm tiếp [HƯỚNG DẪN GỬI YÊU CẦU VÀ DUYỆT GIÁ PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/).

### Sửa phiếu

Bấm **Sửa** → cửa sổ **PHIẾU BÁN HÀNG - CẬP NHẬT**. Chỉ sửa được khi phiếu **Chưa duyệt** hoặc **Từ chối duyệt**, và **Chưa xuất**. Sửa được mọi thông tin và chi tiết như khi thêm mới. Mỗi lần lưu, hệ thống ghi lại toàn bộ bảng chi tiết, tính lại phần giữ hàng và lưu lịch sử thay đổi.

## 6. Giải thích các thông tin trên màn hình

- **Mã số thuế**: Ý nghĩa: MST (tổ chức) hoặc CCCD (cá nhân) của khách; Bắt buộc: Có; Lưu ý: Lấy từ danh mục khách, chỉ xem
- **Khách hàng**: Ý nghĩa: Khách mua; Bắt buộc: Có
- **Quá hạn**: Ý nghĩa: Nợ quá hạn tính đến ngày bán; Lưu ý: Chỉ xem
- **Nợ cũ**: Ý nghĩa: Công nợ phải thu hiện tại; Lưu ý: Chỉ xem
- **Ngày bán hàng**: Ý nghĩa: Ngày bán; Bắt buộc: Có; Lưu ý: Lọc danh sách, sinh mã phiếu; ngày xuất kho không được trước ngày này
- **Địa chỉ giao**: Ý nghĩa: Địa chỉ chi tiết + khu vực; Bắt buộc: Có; Lưu ý: 7–255 ký tự; **Tại kho** khi khách tự lấy
- **Điện thoại**: Ý nghĩa: SĐT người nhận; Bắt buộc: Nên có; Lưu ý: 9–50 ký tự
- **Số ngày nợ**: Ý nghĩa: Số ngày được nợ cho phiếu; Bắt buộc: Không; Lưu ý: Mặc định theo khách; = 0 thì bắt buộc Ghi chú
- **Mã phiếu**: Ý nghĩa: Mã phiếu bán hàng; Lưu ý: Tự tạo khi lưu
- **N/v kinh doanh**: Ý nghĩa: Người bán; Bắt buộc: Có; Lưu ý: Dùng tính doanh số
- **Ghi chú**: Ý nghĩa: Mô tả thêm; Bắt buộc: Có khi số ngày nợ = 0
- **Số hợp đồng**: Ý nghĩa: Hợp đồng còn hạn của khách; Lưu ý: Chỉ xem (BH-A01)
- **Tài khoản**: Ý nghĩa: Tài khoản ngân hàng nhận tiền; Bắt buộc: Không; Lưu ý: Có mã ngân hàng thì bản in có mã QR chuyển khoản
- **Kho hàng**: Ý nghĩa: Kho xuất; Bắt buộc: Có; Lưu ý: Mọi dòng xuất từ kho này
- **Hàng hóa**: Ý nghĩa: Mặt hàng bán; Bắt buộc: Có (mỗi dòng)
- **Tên in**: Ý nghĩa: Tên in trên phiếu; Bắt buộc: Có; Lưu ý: Sửa được
- **Số lượng**: Ý nghĩa: Số lượng bán; Bắt buộc: Nên nhập; Lưu ý: ≥ 0
- **Số lượng lô**: Ý nghĩa: Tổng số lượng chọn theo lô; Lưu ý: Nhập ở cửa sổ CHI TIẾT LÔ
- **Đơn giá**: Ý nghĩa: Giá bán chưa VAT; Bắt buộc: Nên nhập; Lưu ý: Đề xuất: bảng giá khách → bảng giá chung → giá xuất gần nhất
- **Chiết khấu**: Ý nghĩa: % chiết khấu; Bắt buộc: Không; Lưu ý: 0–100%
- **Đơn giá CK**: Ý nghĩa: Đơn giá × (1 − CK); Lưu ý: Chỉ hiển thị
- **Thuế VAT**: Ý nghĩa: % VAT; Bắt buộc: Không; Lưu ý: Mặc định 8%; ≥ 0
- **Đơn giá VAT**: Ý nghĩa: Đơn giá CK × (1 + VAT); Lưu ý: Tự tính
- **Lấy VAT**: Ý nghĩa: Khách lấy hoá đơn VAT; Lưu ý: Kiểm tra tick tay (khi thử không tự tick dù VAT 8%)
- **Thành tiền**: Ý nghĩa: Khi lưu: Đơn giá VAT × (Số lượng + Số lượng lô − SL tất toán − SL lô tất toán); Lưu ý: cửa sổ có thể tính khác với dòng có lô; mở lại phiếu và đối chiếu tổng đã lưu
- **Số PO**: Ý nghĩa: Số đơn mua (PO) của khách; Bắt buộc: Không
- **Chú thích / Chú thích nội bộ**: Ý nghĩa: Ghi chú dòng; Bắt buộc: Không; Lưu ý: Chú thích in trên phiếu
- **T.Tin bảng giá**: Ý nghĩa: Bảng giá dùng để đề xuất giá; Lưu ý: Chỉ xem
- **SL đã xuất / SL tất toán / SL còn lại**: Ý nghĩa: Theo dõi xuất kho; Lưu ý: Chỉ xem, có ngay khi thêm mới

## 7. Kiểm tra sau khi thực hiện

- Phiếu được lưu với mã tự động, **Trạng thái duyệt** = **Chưa duyệt**, **Trạng thái xuất** = **Chưa xuất**.
- Số lượng bán được **giữ** trong kho xuất (tồn được xuất giảm) – đơn khác không lấy được phần này.
- Tồn kho thực tế và công nợ khách **chưa** thay đổi.
- Lịch sử thay đổi phiếu được ghi lại.

## 8. Những điều cần lưu ý

⚠️ **Lưu phiếu là giữ hàng ngay.** Đừng lập phiếu "giữ chỗ" khi khách chưa chốt – sẽ làm kho báo thiếu tồn cho đơn khác. Huỷ đơn thì **Xóa** phiếu (khi chưa xuất) để trả hàng về tồn được xuất.

⚠️ **Đơn giá đề xuất** lấy theo bảng giá **có hiệu lực tới hôm nay**, không theo **NGÀY BÁN HÀNG**. Luôn đối chiếu giá thoả thuận.

⚠️ Với **thành phẩm** (ví dụ ván phủ), đơn giá đề xuất = giá hàng trơn tương ứng + giá phủ (MEL) theo yêu cầu gia công và số mặt; giá phủ đã gồm 8% VAT khi lấy giá chưa VAT.

⚠️ Chọn **KHO HÀNG** trước khi chọn hàng; đổi kho sau khi đã nhập dòng thì mọi dòng chuyển sang kho mới và tồn được kiểm tra lại khi lưu.

⚠️ Khách tổ chức có mã số thuế **ngừng hoạt động** sẽ không lưu được phiếu. Không tra cứu được (mất mạng / không tìm thấy) thì vẫn cho lưu.

⚠️ Sau khi **Gửi yêu cầu duyệt giá**, phiếu không sửa được cho đến khi bị từ chối hoặc huỷ yêu cầu.

⚠️ Bấm **Đóng** không hỏi lại, dữ liệu đang nhập bị mất.

### Bảng chi tiết bị mờ, không nhập được 

Nguyên nhân: chưa chọn **KHÁCH HÀNG** (nút **Thêm một hàng**, **TỪ PHIẾU ĐẶT HÀNG**, **Tải lên từ Excel** cũng mờ).
Cách xử lý: chọn khách trước.

### Thông báo đỏ "CẢNH BÁO – Không thể kết nối tới server…" khi chọn khách (Lỗi hệ thống)

Nguyên nhân: không gọi được dịch vụ tra cứu mã số thuế bên ngoài.
Cách xử lý: bỏ qua, tiếp tục lập phiếu; phiếu vẫn lưu được. Báo IT nếu lặp lại thường xuyên ([LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/)).

### Ô MÃ SỐ THUẾ viền đỏ: "Chưa có Mã Số Thuế hoặc CCCD, vui lòng cung cấp thông tin cho IT cập nhật." 

Nguyên nhân: khách chưa có mã số thuế / CCCD trong danh mục.
Cách xử lý: gửi thông tin cho IT / người quản lý danh mục khách hàng cập nhật, rồi lập lại.

### Ô GHI CHÚ viền đỏ: "Vui lòng nhập ghi chú mô tả thêm" 

Nguyên nhân: **SỐ NGÀY NỢ** = 0 và chưa có ghi chú.
Cách xử lý: ghi hình thức thanh toán / mô tả thêm.

### "Vui lòng cho biết địa chỉ giao hàng" / "Vui lòng ghi địa chỉ giao hàng và gửi admin cập nhật" 

Nguyên nhân: địa chỉ giao trống hoặc quá ngắn (dưới 7 ký tự).
Cách xử lý: nhập địa chỉ đầy đủ hoặc bấm **Tại kho**.

### "Bạn không có quyền bán hàng dưới giá vốn. Vui lòng liên hệ quản trị viên để được cấp quyền." 

Nguyên nhân: có dòng đơn giá không cao hơn giá vốn hiện tại.
Cách xử lý: kiểm tra lại đơn giá / chiết khấu; nếu đúng là bán lỗ, nhờ người có quyền **Bán dưới giá vốn** lập phiếu.

### Thông báo đỏ về tình trạng mã số thuế khi lưu, phiếu không lưu 

Nguyên nhân: mã số thuế của khách đã ngừng / không hoạt động.
Cách xử lý: báo kế toán kiểm tra khách; nếu là khách cá nhân, nhờ cập nhật cờ **khách cá nhân** trong danh mục.

### "CẢNH BÁO – Lỗi thêm: "<kho>", "<hàng>" không đủ tồn (<số>), lô còn (<số>)." 

Nguyên nhân: kho không đủ **tồn được xuất** (đã giữ cho đơn khác, đang chuyển kho, gia công…). Số đầu là tồn còn xuất được ngoài lô, số sau là phần nằm trong lô.
Cách xử lý: giảm số lượng, chọn lô ở **Số lượng lô**, chọn kho khác, hoặc nhập / chuyển hàng về kho trước.

### "CẢNH BÁO – Lỗi thêm: Lô "<mã lô>" "<hàng>" không đủ tồn (<số>)." 

Nguyên nhân: số lượng chọn ở lô vượt tồn được xuất của lô.
Cách xử lý: giảm SL ở **CHI TIẾT LÔ** hoặc chọn lô khác.

### "CẢNH BÁO – Lỗi sửa: Có người đã sửa phiếu này. Kiểm tra và thao tác lại." 

Nguyên nhân: phiếu đã được người khác sửa sau khi bạn mở.
Cách xử lý: **Đóng**, tải lại danh sách, mở **Sửa** lại.

### "CẢNH BÁO – Lỗi sửa: Phiếu đã duyệt giá. Vui lòng liên hệ bộ phận kế toán để được hỗ trợ." / "Chỉ được phép sửa khi mới tạo hoặc bị từ chối duyệt giá" 

Nguyên nhân: phiếu đã gửi / đã được duyệt giá.
Cách xử lý: **Hủy YC** hoặc nhờ **Hủy duyệt** ([HƯỚNG DẪN GỬI YÊU CẦU VÀ DUYỆT GIÁ PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/)), rồi sửa.

### "CẢNH BÁO – Lỗi sửa: Phiếu đang xuất" / "Phiếu đã xuất" 

Nguyên nhân: phiếu đã có dòng xuất kho.
Cách xử lý: không sửa; phần còn lại dùng **Tất toán** ([HƯỚNG DẪN TẤT TOÁN PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-5-huong-dan-tat-toan-phieu-ban-hang/)).

## 10. Câu hỏi thường gặp

**Vì sao đơn giá tự hiện số khác giá thoả thuận?**
Đó là giá trong bảng giá (hoặc giá xuất gần nhất). Sửa lại theo thoả thuận; nếu thấp hơn giá vốn sẽ cần quyền **Bán dưới giá vốn**.

**Lấy giá từ bảng giá dùng khi nào?**
Khi bảng giá vừa được cập nhật hoặc đã đổi khách: chuột phải vào một dòng → **Lấy giá từ bảng giá**, mọi dòng được lấy lại đơn giá.

**Bán cho khách cá nhân không có mã số thuế thì sao?**
Danh mục khách phải có **CCCD** ở ô mã số thuế và được đánh dấu **khách cá nhân**; khi đó hệ thống không tra cứu tình trạng mã số thuế.

**Một phiếu xuất được từ nhiều kho không?**
Không. Mỗi phiếu một **KHO HÀNG**. Hàng ở kho khác lập phiếu riêng.

## 11. Công việc tiếp theo

```text
Lập phiếu bán hàng
        ↓
Gửi yêu cầu → Duyệt giá (BH-A03.4)
        ↓
In phiếu / báo giá gửi khách, phiếu soạn hàng cho kho (BH-A03.6)
        ↓
(Kho) Phiếu xuất kho bán hàng (KHO-A05.1) → giảm tồn, tăng công nợ khách
        ↓
(Kế toán) Phiếu thu → giảm công nợ
```

**Tiếp theo:** [HƯỚNG DẪN GỬI YÊU CẦU VÀ DUYỆT GIÁ PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/) – Hướng dẫn gửi yêu cầu và duyệt giá phiếu bán hàng.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/) – Tổng quan màn hình Phiếu bán hàng
- [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a03-2-huong-dan-lap-phieu-ban-hang-tu-phieu-dat-hang/) – Hướng dẫn lập phiếu bán hàng từ phiếu đặt hàng
- [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU BÁN HÀNG TỪ EXCEL](/bai-viet/2026-11-07-bh-a03-3-huong-dan-nhap-chi-tiet-phieu-ban-hang-tu-excel/) – Hướng dẫn nhập chi tiết phiếu bán hàng từ Excel
- [HƯỚNG DẪN GỬI YÊU CẦU VÀ DUYỆT GIÁ PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/) – Hướng dẫn gửi yêu cầu và duyệt giá phiếu bán hàng
- [TỔNG QUAN MÀN HÌNH HỢP ĐỒNG](/bai-viet/2026-11-07-bh-a01-0-tong-quan-man-hinh-hop-dong/) – Tổng quan màn hình Hợp đồng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ LỊCH SỬ GIÁ XUẤT](/bai-viet/2026-11-07-bh-b08-0-tong-quan-man-hinh-thong-ke-lich-su-gia-xuat/) – Tổng quan màn hình Lịch sử giá xuất
- [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/) – Hướng dẫn lập phiếu xuất kho bán hàng
- Sổ tay Thiết lập danh mục – Khách hàng, Bảng giá mua bán
