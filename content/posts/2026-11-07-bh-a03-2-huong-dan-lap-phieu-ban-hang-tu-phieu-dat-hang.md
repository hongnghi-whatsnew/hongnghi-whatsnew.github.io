---
title: "HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG TỪ PHIẾU ĐẶT HÀNG"
date: "2026-11-07"
summary: "Khi sản xuất đã nhập kho thành phẩm của một đơn đặt hàng (BH-A02), nhân viên kinh doanh lập phiếu bán hàng và dùng nút TỪ PHIẾU ĐẶT HÀNG để lấy các thành phẩm đang chờ bán của khách vào bảng chi tiết, thay vì chọn tay từng mặt hàng."
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

Khi sản xuất đã nhập kho **thành phẩm** của một đơn đặt hàng (BH-A02), nhân viên kinh doanh lập phiếu bán hàng và dùng nút **TỪ PHIẾU ĐẶT HÀNG** để lấy các thành phẩm đang **chờ bán** của khách vào bảng chi tiết, thay vì chọn tay từng mặt hàng. Hệ thống theo dõi **SL đã bán** của từng thành phẩm trên đơn đặt hàng và không cho bán vượt phần còn lại.

Các bước chung (chọn khách, kho, địa chỉ, lưu) giống [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/); bài này chỉ hướng dẫn phần lấy dòng từ đơn đặt hàng.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như bảng trên.
- Đơn đặt hàng của khách đã có **thành phẩm nhập kho** (cột **Trạng thái TP** khác *Chưa nhập*) và còn phần **chưa bán**.
- Đã chọn **KHÁCH HÀNG** trên phiếu bán hàng (nút **TỪ PHIẾU ĐẶT HÀNG** mờ khi chưa chọn khách).

## 2. Mở chức năng

**Bán hàng → Phiếu bán hàng → Thêm mới → chọn khách hàng → TỪ PHIẾU ĐẶT HÀNG**

## 3. Nhận biết màn hình

- **Tải lại, Xuất Excel, Trình chọn cột, Tìm kiếm…**: Ý nghĩa: Ô tìm kiếm điền sẵn tên rút gọn của khách
- **Cột ô chọn**: Ý nghĩa: Tick các thành phẩm cần bán
- **SL còn lại**: Ý nghĩa: Số lượng còn được bán từ đơn
- **SL mượn/bán hộ**: Ý nghĩa: Ô sửa được (xem phần “Những điều cần lưu ý”)
- **Đồng ý / Đóng**: Ý nghĩa: Đưa dòng đã chọn vào phiếu / đóng

**Các cột trong cửa sổ chọn:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày đặt hàng, Mã phiếu**: Ý nghĩa: Phiếu đặt hàng gốc
- **Khách hàng**: Ý nghĩa: Khách đặt
- **Kho nhập**: Ý nghĩa: Kho đang chứa thành phẩm
- **Tên Thành phẩm**: Ý nghĩa: Thành phẩm của đơn
- **Số lượng**: Ý nghĩa: Số lượng thành phẩm của đơn
- **SL mượn/bán hộ**: Ý nghĩa: Số lượng ghi nhận cho mượn / bán hộ
- **SL đã bán**: Ý nghĩa: Đã lên phiếu bán hàng
- **SL còn lại**: Ý nghĩa: Còn được bán
- **Trạng thái**: Ý nghĩa: **Chưa bán** (chữ đỏ) / trạng thái khác (chữ vàng)
- **Người tạo, Thời gian tạo**: Ý nghĩa: Của phiếu đặt hàng

## 4. Trình tự công việc

```text
Phiếu bán hàng → Thêm mới → chọn khách hàng, kho hàng
      ↓
TỪ PHIẾU ĐẶT HÀNG → DANH SÁCH HÀNG HÓA ĐẶT CHỜ BÁN (của khách đang chọn)
      ↓
Tick thành phẩm → Đồng ý
      ↓
Bảng chi tiết thêm dòng: Hàng hóa = thành phẩm (chữ xanh, khoá), Số lượng = SL còn lại
      ↓
Nhập / lấy đơn giá → sửa số lượng bán đợt này → Lưu lại (BH-A03.1 Bước 5)
      ↓
SL đã bán, Trạng thái bán của phiếu đặt hàng được cập nhật
```

### Bước 1 – Mở phiếu bán hàng và chọn khách

Làm [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/) Bước 1 → Bước 3: chọn **KHÁCH HÀNG**, **KHO HÀNG** (thường là kho đang chứa thành phẩm – cột **Kho nhập** trong cửa sổ chọn), địa chỉ giao, ghi chú.

### Bước 2 – Mở danh sách thành phẩm chờ bán

Bấm **TỪ PHIẾU ĐẶT HÀNG** ở chân cửa sổ. Cửa sổ **DANH SÁCH HÀNG HÓA ĐẶT CHỜ BÁN - KHÔNG THEO THỜI GIAN** mở ra (Hình 1), liệt kê thành phẩm của **khách đang chọn**, không lọc theo ngày. Ô **Tìm kiếm…** điền sẵn tên rút gọn của khách.

### Bước 3 – Chọn thành phẩm

Kiểm tra khách và mã đơn trên từng dòng rồi tick các thành phẩm cần bán (xem **SL còn lại**), bấm **Đồng ý**. Ô tìm kiếm điền tên rút gọn giúp tìm dòng; không dùng riêng ô này để kết luận mọi dòng đều đúng khách.

### Bước 4 – Kiểm tra dòng vừa thêm

Bảng chi tiết có thêm các dòng:

- **Hàng hóa** là thành phẩm, chữ màu xanh, **không đổi được**.
- **Số lượng** = **SL còn lại** của đơn; **Tên in** theo tên in của thành phẩm; **Thuế VAT** = 8%.
- **Đơn giá** để trống: nhập theo thoả thuận, hoặc chuột phải vào một dòng → **Lấy giá từ bảng giá**.

Đối chiếu đơn vị tính, kho nhập với kho xuất, đơn giá, chiết khấu, VAT và tổng tiền trước khi lưu. Sửa **Số lượng** nếu đợt này chỉ bán một phần. Thành phẩm đã có trên phiếu thì không bị thêm lần nữa.

### Bước 5 – Lưu và gửi duyệt giá

Bấm **Lưu lại** ([HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/) Bước 5), rồi gửi yêu cầu duyệt giá ([HƯỚNG DẪN GỬI YÊU CẦU VÀ DUYỆT GIÁ PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/)).

## 6. Giải thích các thông tin trên màn hình

- **Hàng hóa**: Ý nghĩa: Thành phẩm của đơn; Lưu ý: Khoá, chữ xanh
- **Số lượng**: Ý nghĩa: Số lượng bán đợt này; Lưu ý: Mặc định = SL còn lại; không vượt phần còn lại của đơn
- **Đơn giá**: Ý nghĩa: Giá bán; Lưu ý: Không tự điền – nhập hoặc **Lấy giá từ bảng giá**
- **Ngày đặt hàng**: Ý nghĩa: Ngày của đơn; Lưu ý: Chỉ xem

Các trường khác: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/)**.

## 7. Kiểm tra sau khi thực hiện

- Phiếu bán hàng được lưu như [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/), các dòng gắn với thành phẩm của đơn đặt hàng.
- **SL đã bán** và **Trạng thái bán** của phiếu đặt hàng được cập nhật.
- Hàng được giữ trong kho xuất; tồn kho thực tế và công nợ chưa đổi (đổi khi xuất kho).

## 8. Những điều cần lưu ý

⚠️ **Đơn giá không tự lấy** khi thêm dòng từ đơn đặt hàng. Kiểm tra cột **Đơn giá** trước khi lưu; dòng giá 0 sẽ bị coi là dưới giá vốn.

⚠️ Chọn **KHO HÀNG** trùng kho đang chứa thành phẩm, nếu không máy chủ báo không đủ tồn.

⚠️ Ô **SL mượn/bán hộ** trong cửa sổ chọn **lưu thẳng vào phiếu đặt hàng** khi chuột phải → **Lưu lại** (báo **Cập nhật thành công.**). Không sửa ô này nếu không chắc ý nghĩa.

⚠️ Phần thành phẩm khách không lấy nữa: **Tất toán** ở phiếu đặt hàng ([HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-3-huong-dan-tat-toan-phieu-dat-hang/)), không cần giữ trên danh sách chờ bán.

### Nút TỪ PHIẾU ĐẶT HÀNG bị mờ 

Nguyên nhân: chưa chọn khách hàng.
Cách xử lý: chọn **KHÁCH HÀNG** trước.

### Cửa sổ chọn trống 

Nguyên nhân: khách chưa có thành phẩm nhập kho từ đơn đặt hàng, hoặc đã bán / tất toán hết; hoặc ô **Tìm kiếm…** đang lọc mất dòng.
Cách xử lý: xoá chữ trong ô tìm kiếm; kiểm tra **Trạng thái TP** của phiếu đặt hàng ([TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-0-tong-quan-man-hinh-phieu-dat-hang/)).

### "CẢNH BÁO – Lỗi thêm: <tên thành phẩm> chỉ còn lại (<số>) từ đơn" 

Nguyên nhân: số lượng bán vượt phần còn lại của thành phẩm trên đơn.
Cách xử lý: giảm **Số lượng** tối đa bằng số trong câu báo.

### "Bạn không có quyền thực hiện chức năng này." khi bấm TỪ PHIẾU ĐẶT HÀNG 

Nguyên nhân: tài khoản thiếu quyền truy cập Phiếu đặt hàng.
Cách xử lý: liên hệ quản trị hệ thống.

### "Số lượng cho phép 0 hoặc <= <số>" 

Nguyên nhân: nhập **SL mượn/bán hộ** lớn hơn số lượng của dòng.
Cách xử lý: nhập lại, hoặc chuột phải → **Loại bỏ thay đổi**.

## 10. Câu hỏi thường gặp

**Bán một phần thành phẩm của đơn được không?**
Được. Sửa **Số lượng** trên phiếu bán. Phần còn lại vẫn nằm trong danh sách chờ bán.

**Lấy thành phẩm của nhiều đơn đặt hàng vào một phiếu bán được không?**
Được, miễn cùng khách. Tick nhiều dòng trong cửa sổ chọn.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN GỬI YÊU CẦU VÀ DUYỆT GIÁ PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/) – Hướng dẫn gửi yêu cầu và duyệt giá phiếu bán hàng.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/) – Hướng dẫn lập phiếu bán hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-0-tong-quan-man-hinh-phieu-dat-hang/) – Tổng quan màn hình Phiếu đặt hàng
- [HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-3-huong-dan-tat-toan-phieu-dat-hang/) – Hướng dẫn tất toán phiếu đặt hàng
- [HƯỚNG DẪN GỬI YÊU CẦU VÀ DUYỆT GIÁ PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/) – Hướng dẫn gửi yêu cầu và duyệt giá phiếu bán hàng
