---
title: "HƯỚNG DẪN THÊM, SỬA NHÀ CUNG CẤP"
date: "2026-11-07"
summary: "cửa sổ THÊM NHÀ CUNG CẤP / CẬP NHẬT NHÀ CUNG CẤP có nhiều phần: thông tin nhận diện, liên hệ, địa chỉ có khu vực, điều khoản nợ, mã xuất xứ và bảng tài khoản ngân hàng (một NCC có nhiều tài khoản)."
module: "Thiết lập danh mục"
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

cửa sổ **THÊM NHÀ CUNG CẤP** / **CẬP NHẬT NHÀ CUNG CẤP** có nhiều phần: thông tin nhận diện, liên hệ, địa chỉ có khu vực, điều khoản nợ, mã xuất xứ và **bảng tài khoản ngân hàng** (một NCC có nhiều tài khoản). Ô **MÃ SỐ THUẾ** có thể **tra cứu và tự điền** tên, số điện thoại, địa chỉ.

Bài này nói riêng các phần của cửa sổ này. Tổng quan màn hình ở [TỔNG QUAN MÀN HÌNH NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-b02-0-tong-quan-man-hinh-nha-cung-cap/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đã có **Nhóm nhà cung cấp** đang Kích hoạt (TL-B01).
- Muốn tra cứu mã số thuế: máy tính có kết nối Internet.
- Đã tìm bằng **Tìm kiếm…** trên danh sách để chắc NCC **chưa có** (hệ thống không chặn trùng mã số thuế).

## 2. Mở chức năng

**Nhà cung cấp → Nhà cung cấp → Thêm mới** (hoặc **Sửa** ở dòng NCC)

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Hình 1: THÊM NHÀ CUNG CẤP — thông tin chung và dòng tài khoản ngân hàng trống, chưa lưu.](/posts/2026-11-07-tl-b02-1-huong-dan-them-sua-nha-cung-cap/ui-20261026-tl-b02-form-figure-01.png)

- **MÃ SỐ THUẾ**: Ý nghĩa: Nhập để tra cứu và tự điền
- **MÃ NHÀ CUNG CẤP, TÊN NHÀ CUNG CẤP, TÊN RÚT GỌN**: Ý nghĩa: Nhận diện NCC
- **SỐ ĐIỆN THOẠI, NHÓM NCC**: Ý nghĩa: Liên hệ, nhóm (bắt buộc)
- **ĐỊA CHỈ**: Ý nghĩa: Số nhà, đường và **Chọn khu vực**
- **SỐ NGÀY NỢ, MÃ XUẤT XỨ, EMAIL, GHI CHÚ**: Ý nghĩa: Điều khoản nợ, xuất xứ, liên hệ
- **Bảng TÀI KHOẢN**: Ý nghĩa: Các tài khoản ngân hàng của NCC
- **Kích hoạt, Lưu lại, Đóng**: Ý nghĩa: Chân cửa sổ

## 4. Trình tự công việc

```text
Tìm NCC đã có chưa ──► (chưa có)
   ↓
Nhập MÃ SỐ THUẾ ──► tự điền tên, SĐT, địa chỉ, khu vực (nếu tra được)
   ↓
Nhập mã, tên rút gọn, SĐT, nhóm, số ngày nợ, mã xuất xứ
   ↓
Thêm các tài khoản ngân hàng ──► Lưu lại
```

### Bước 1 – Mã số thuế (tuỳ chọn) và tự điền

Nhập **MÃ SỐ THUẾ** rồi rời khỏi ô (hoặc nhấn Enter). Hệ thống bỏ khoảng trắng trong mã, tra cứu thông tin doanh nghiệp qua dịch vụ ngoài (cần Internet), rồi:

- hiện thông báo trạng thái hoạt động của doanh nghiệp: màu **xanh** khi đang hoạt động, màu **đỏ** khi đã ngừng hoạt động hoặc không có thông tin;
- **điền đè** vào **TÊN NHÀ CUNG CẤP**, **SỐ ĐIỆN THOẠI** (nếu tra được) và **ĐỊA CHỈ**, tự đoán **khu vực** từ địa chỉ.

Đọc lại các ô vừa điền, sửa nếu sai. Tra cứu không được thì hiện thông báo lỗi, bạn tự nhập tiếp. Ô này **không bắt buộc**. Kết quả dịch vụ ngoài chỉ là gợi ý điền hồ sơ; đối chiếu lại thông tin doanh nghiệp và tài khoản ngân hàng trước lưu, không xem tra cứu là duyệt điều kiện giao dịch.

- **MÃ SỐ THUẾ**: Ý nghĩa: Ô nhập
- **Thông báo trạng thái hoạt động**: Ý nghĩa: Góc màn hình
- **TÊN NHÀ CUNG CẤP, SỐ ĐIỆN THOẠI, ĐỊA CHỈ**: Ý nghĩa: Được tự điền

### Bước 2 – Nhận diện và liên hệ

1. **MÃ NHÀ CUNG CẤP** (bắt buộc): ít nhất 2 ký tự, viết liền, không trùng. Mã **không tự sinh**: tự đặt theo quy ước của công ty.
2. **TÊN NHÀ CUNG CẤP** (bắt buộc, ít nhất 2 ký tự). **TÊN RÚT GỌN** tuỳ chọn.
3. **SỐ ĐIỆN THOẠI** (bắt buộc, 9 đến 20 ký tự).
4. **NHÓM NCC** (bắt buộc): gõ để tìm; chỉ liệt kê nhóm đang **Kích hoạt**.
5. **EMAIL**, **GHI CHÚ** tuỳ chọn.

### Bước 3 – Địa chỉ

Ở **ĐỊA CHỈ**, nhập số nhà, đường vào ô "Số nhà, đường...", rồi bấm **Chọn khu vực** để chọn tỉnh / thành, xã / phường. Cột **Địa chỉ NCC/Khu vực** trên danh sách lấy từ phần này.

### Bước 4 – Số ngày nợ và mã xuất xứ

- **SỐ NGÀY NỢ**: số ngày công ty được nợ NCC. Dùng để tính **ngày tới hạn** ở công nợ quá hạn nhà cung cấp (ngày nhập kho + số ngày nợ). Để trống = 0.
- **MÃ XUẤT XỨ**: mã xuất xứ hàng hoá của NCC (ví dụ `DW`, `VECO`), làm mặc định khi nhập bảng giá / báo giá NCC ván trơn. Để trống nếu không dùng.

### Bước 5 – Tài khoản ngân hàng

Bảng **TÀI KHOẢN** có các cột **STT**, **SỐ TÀI KHOẢN**, **TÊN CHỦ TÀI KHOẢN**, **TÊN NGÂN HÀNG**, **CHI NHÁNH NGÂN HÀNG**.

- cửa sổ thêm mới có sẵn **một dòng trống**. Bấm biểu tượng **+** (đầu cột cuối) để thêm dòng; bấm biểu tượng **−** ở cuối dòng để bỏ dòng.
- **Chỉ dòng có SỐ TÀI KHOẢN mới được lưu**; dòng để trống bị bỏ qua.
- Một NCC nhập được nhiều tài khoản (không giới hạn).

![Hình 3: THÊM NHÀ CUNG CẤP — bảng TÀI KHOẢN ngân hàng chưa nhập, chưa lưu.](/posts/2026-11-07-tl-b02-1-huong-dan-them-sua-nha-cung-cap/ui-20261026-tl-b02-form-figure-03.png)

- **Biểu tượng +**: Ý nghĩa: Thêm một dòng tài khoản
- **Các ô của dòng**: Ý nghĩa: Số tài khoản, tên chủ tài khoản, ngân hàng, chi nhánh ngân hàng
- **Biểu tượng −**: Ý nghĩa: Bỏ dòng

### Bước 6 – Lưu

Giữ tick **Kích hoạt** rồi **Lưu lại**. Hệ thống kiểm tra trùng mã nhà cung cấp lúc bạn rời ô mã và khi lưu; ghi NCC vào **chi nhánh đang làm việc**. Mã số thuế không bị kiểm trùng.

### Sửa nhà cung cấp

cửa sổ **CẬP NHẬT NHÀ CUNG CẤP** điền sẵn dữ liệu. Các điểm riêng:

- Sửa được **MÃ NHÀ CUNG CẤP** (mã mới không được trùng). Chứng từ cũ hiện mã mới vì chỉ lưu liên kết.
- Bảng **TÀI KHOẢN**: dòng bạn sửa được cập nhật, dòng thêm được tạo mới, dòng bạn bấm **−** bị **xoá khỏi hệ thống** khi lưu.
- Bỏ tick **Kích hoạt** để ngưng sử dụng NCC.

## 6. Giải thích các thông tin trên màn hình

- **Mã số thuế**: Ý nghĩa: MST của NCC; Bắt buộc: Không; Lưu ý: Tự bỏ khoảng trắng; kích hoạt tra cứu; **không kiểm trùng**
- **Mã nhà cung cấp**: Ý nghĩa: Mã nhận diện; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự, không dấu cách, **không trùng**. Báo "Nhập mã nhà cung cấp", "Mã nhà cung cấp quá ngắn"
- **Tên nhà cung cấp**: Ý nghĩa: Tên đầy đủ; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự. Báo "Nhập tên nhà cung cấp", "Tên nhà cung cấp quá ngắn"
- **Tên rút gọn**: Ý nghĩa: Tên gọi tắt; Bắt buộc: Không; Lưu ý: Không kiểm trùng
- **Số điện thoại**: Ý nghĩa: Điện thoại liên hệ; Bắt buộc: Có; Lưu ý: 9 đến 20 ký tự. Báo "Vui lòng nhập SĐT", "Số điện thoại không đúng định dạng"
- **Nhóm NCC**: Ý nghĩa: Nhóm nhà cung cấp; Bắt buộc: Có; Lưu ý: Báo "Vui lòng chọn nhóm nhà cung cấp"
- **Địa chỉ**: Ý nghĩa: Số nhà, đường và khu vực; Bắt buộc: Không; Lưu ý: **Chọn khu vực** để lọc theo tỉnh, xã
- **Số ngày nợ**: Ý nghĩa: Số ngày được nợ; Bắt buộc: Không; Lưu ý: Chỉ nhận số. Trống = 0
- **Mã xuất xứ**: Ý nghĩa: Mã xuất xứ hàng hoá; Bắt buộc: Không; Lưu ý: Ví dụ `DW`, `VECO`
- **Email**: Ý nghĩa: Email liên hệ; Bắt buộc: Không
- **Ghi chú**: Ý nghĩa: Ghi chú; Bắt buộc: Không
- **Tài khoản**: Ý nghĩa: Danh sách tài khoản ngân hàng; Bắt buộc: Không; Lưu ý: Chỉ dòng có số tài khoản được lưu
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

## 7. Kiểm tra sau khi thực hiện

- NCC có trong danh sách, chọn được ở các phiếu mua hàng (nếu Kích hoạt).
- Các dòng tài khoản ngân hàng nằm trong dữ liệu NCC, dùng khi cần xem thông tin chuyển khoản.

## 8. Những điều cần lưu ý

⚠️ **Tra cứu mã số thuế điền đè** tên, số điện thoại, địa chỉ bạn đã nhập trước đó. Nhập mã số thuế **trước**, rồi mới nhập các ô còn lại.

⚠️ **Mã số thuế trùng không bị chặn.** Tìm trước khi thêm.

⚠️ **Xoá dòng tài khoản ngân hàng ở cửa sổ Sửa là xoá thật khi bấm Lưu lại.** Bấm **Đóng** để bỏ thay đổi.

⚠️ Sửa **Số ngày nợ** đổi cách tính ngày tới hạn của mọi chứng từ nhập kho của NCC ở báo cáo công nợ quá hạn.

### "Mã đã tồn tại" 

Nguyên nhân: đã có NCC cùng mã (không phân biệt chữ hoa / thường), kể cả NCC đang **Ngưng sử dụng**.
Cách xử lý: tìm NCC cũ rồi tick lại **Kích hoạt**, hoặc đặt mã khác.

### "Mã không hợp lệ. Viết liền không dấu và không chứa kí tự đặc biệt." 

Nguyên nhân: mã có dấu cách.
Cách xử lý: viết liền, ví dụ `NCC001`.

### Tra cứu mã số thuế báo lỗi (Lỗi hệ thống)

Nguyên nhân: không có Internet, mã số thuế sai, hoặc dịch vụ tra cứu ngoài đang bận.
Cách xử lý: kiểm tra mã số thuế và kết nối, thử lại sau; hoặc tự nhập thông tin.

## 10. Câu hỏi thường gặp

**Sao bấm biểu tượng bên cạnh Mã số thuế không có gì?**
Biểu tượng đó chỉ là hình minh hoạ, đang tắt. Tra cứu chạy tự động khi bạn nhập xong mã số thuế.

## 11. Công việc tiếp theo

```text
Thêm NCC → lập Phiếu đặt hàng NCC / Phiếu mua hàng (sổ tay Mua hàng)
Nhiều NCC → Import Excel (TL-B02.2)
```

**Tiếp theo:** [HƯỚNG DẪN IMPORT NHÀ CUNG CẤP TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-b02-2-huong-dan-import-nha-cung-cap-tu-excel-anh/) – Import nhà cung cấp từ Excel / ảnh.

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-b02-0-tong-quan-man-hinh-nha-cung-cap/) – Tổng quan màn hình Nhà cung cấp
- [TỔNG QUAN MÀN HÌNH NHÓM NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-b01-0-tong-quan-man-hinh-nhom-nha-cung-cap/) – Nhóm nhà cung cấp
- [HƯỚNG DẪN IMPORT NHÀ CUNG CẤP TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-b02-2-huong-dan-import-nha-cung-cap-tu-excel-anh/) – Import nhà cung cấp từ Excel / ảnh
