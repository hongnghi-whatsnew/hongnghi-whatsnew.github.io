---
title: "HƯỚNG DẪN THÊM, SỬA CHI NHÁNH"
date: "2026-11-07"
summary: "Bài này hướng dẫn nhập cửa sổ THÊM CHI NHÁNH / CẬP NHẬT CHI NHÁNH (14 trường): mã và tên chi nhánh, thông tin pháp nhân in trên phiếu (tên công ty, mã số thuế, người đại diện, logo…), địa chỉ web riêng của chi nhánh và trạng thái sử dụng."
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

Bài này hướng dẫn nhập cửa sổ **THÊM CHI NHÁNH** / **CẬP NHẬT CHI NHÁNH** (14 trường): mã và tên chi nhánh, thông tin pháp nhân in trên phiếu (tên công ty, mã số thuế, người đại diện, logo…), địa chỉ web riêng của chi nhánh và trạng thái sử dụng. Khai báo này không tự tạo dữ liệu, tên miền hay tài khoản hệ thống chính thức; IT triển khai riêng cho từng đơn vị.

Thao tác dùng chung liên quan: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền ở phần “Chuẩn bị trước khi thực hiện”.
- Có sẵn thông tin pháp nhân của chi nhánh: tên công ty, mã số thuế, địa chỉ, người đại diện.
- Nếu dùng logo trên phiếu in: có sẵn đường dẫn ảnh logo (IT cung cấp).
- Nếu chi nhánh có địa chỉ web riêng: biết đúng tên miền (IT cung cấp).

## 2. Mở chức năng

**Thiết lập danh mục → Chi nhánh / Đơn vị → Thêm mới** (hoặc liên kết **Sửa** ở cột **Thao tác**)

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Hình 1: THÊM CHI NHÁNH — biểu mẫu trống, chưa lưu.](/posts/2026-11-07-tl-a01-1-huong-dan-them-sua-chi-nhanh/ui-20261026-tl-a01-form-figure-01.png)

- **MÃ CHI NHÁNH, TÊN CHI NHÁNH**: Ý nghĩa: Hai trường bắt buộc
- **TÊN CÔNG TY, MÃ SỐ THUẾ, MÃ CIF, NGƯỜI ĐẠI DIỆN, CHỨC VỤ**: Ý nghĩa: Thông tin pháp nhân, in trên phiếu
- **FAX, LOGO URL, HOSTNAME**: Ý nghĩa: Fax, logo in phiếu, địa chỉ web riêng
- **SĐT, EMAIL, ĐỊA CHỈ, GHI CHÚ**: Ý nghĩa: Liên hệ và ghi chú
- **Ô Kích hoạt**: Ý nghĩa: Bỏ tick = **Ngưng sử dụng**
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

Tiêu đề cửa sổ: **THÊM CHI NHÁNH** (thêm), **CẬP NHẬT CHI NHÁNH** (sửa), **THÔNG TIN CHI NHÁNH** (nhấp đúp, chỉ xem).

## 4. Trình tự công việc

```text
Thêm mới / Sửa
      ↓
Nhập MÃ CHI NHÁNH (kiểm trùng ngay khi rời ô) + TÊN CHI NHÁNH
      ↓
Nhập thông tin pháp nhân, liên hệ (tuỳ chọn)
      ↓
Lưu lại
   ├── sai / thiếu ──► ô viền đỏ + danh sách lỗi dưới cửa sổ
   └── hợp lệ ──► "Lưu thành công" ──► cửa sổ đóng, danh sách tải lại
```

### Thêm chi nhánh

**Bước 1 –** Bấm **Thêm mới**. cửa sổ **THÊM CHI NHÁNH** mở ra (Hình 1).

**Bước 2 –** Nhập **MÃ CHI NHÁNH** (viết liền, không khoảng trắng, ít nhất 2 ký tự) và **TÊN CHI NHÁNH**. Hệ thống kiểm tra trùng mã ngay khi bạn rời ô mã.

**Bước 3 –** Nhập thông tin in phiếu: **TÊN CÔNG TY**, **MÃ SỐ THUẾ**, **ĐỊA CHỈ**, **SĐT**, **EMAIL**, **NGƯỜI ĐẠI DIỆN**, **CHỨC VỤ**. Các ô này không bắt buộc nhưng nên điền đủ nếu chi nhánh có in phiếu.

**Bước 4 –** Nếu chi nhánh có địa chỉ web riêng, nhập vào **HOSTNAME** (xem phần “Giải thích các thông tin trên màn hình”). Nếu có logo, nhập đường dẫn ảnh vào **LOGO URL**.

**Bước 5 –** Để tick **Kích hoạt**, bấm **Lưu lại**. Hệ thống báo **Lưu thành công**, cửa sổ đóng, danh sách tải lại.

### Sửa chi nhánh

**Bước 1 –** Bấm **Sửa** ở dòng chi nhánh. cửa sổ **CẬP NHẬT CHI NHÁNH** mở, đã điền sẵn dữ liệu.

**Bước 2 –** Sửa các ô cần đổi rồi bấm **Lưu lại**. Sửa **MÃ CHI NHÁNH** vẫn được nhưng mã mới không được trùng chi nhánh khác.

### Ngưng sử dụng chi nhánh

Bấm **Sửa** → bỏ tick **Kích hoạt** → **Lưu lại**. Cột **Trạng thái** hiện **Ngưng sử dụng**. Chứng từ cũ của chi nhánh giữ nguyên. Muốn dùng lại: tick **Kích hoạt** rồi **Lưu lại**.

## 6. Giải thích các thông tin trên màn hình

- **Mã chi nhánh**: Ý nghĩa: Mã viết liền của chi nhánh; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự, không có khoảng trắng; **duy nhất toàn hệ thống**, không phân biệt hoa / thường. Mã tự nhập, hệ thống không tự sinh. Khoảng trắng đầu / cuối được cắt bỏ khi lưu
- **Tên chi nhánh**: Ý nghĩa: Tên hiển thị của chi nhánh; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự
- **Tên công ty**: Ý nghĩa: Tên pháp nhân in trên phiếu; Bắt buộc: Không
- **Mã số thuế**: Ý nghĩa: Mã số thuế pháp nhân; Bắt buộc: Không; Lưu ý: In trên phiếu
- **Mã CIF**: Ý nghĩa: Mã CIF của chi nhánh; Bắt buộc: Không
- **Người đại diện**: Ý nghĩa: Người đại diện theo pháp luật; Bắt buộc: Không; Lưu ý: Nhập họ tên theo giấy phép kinh doanh
- **Chức vụ**: Ý nghĩa: Chức vụ người đại diện; Bắt buộc: Không; Lưu ý: Ví dụ *Giám đốc*
- **Fax**: Ý nghĩa: Số fax; Bắt buộc: Không
- **Logo URL**: Ý nghĩa: Đường dẫn ảnh logo in đầu phiếu; Bắt buộc: Không; Lưu ý: Đường dẫn do IT cung cấp; để trống thì phiếu không có logo
- **Hostname**: Ý nghĩa: Tên miền riêng của chi nhánh; Bắt buộc: Không; Lưu ý: Có thể nhập nhiều tên miền, cách nhau dấu phẩy, dấu chấm phẩy hoặc khoảng trắng. Chi nhánh để trống ô này hiện ở mọi địa chỉ web
- **SĐT**: Ý nghĩa: Điện thoại chi nhánh; Bắt buộc: Không; Lưu ý: In trên phiếu
- **Email**: Ý nghĩa: Email chi nhánh; Bắt buộc: Không
- **Địa chỉ**: Ý nghĩa: Địa chỉ chi nhánh; Bắt buộc: Không; Lưu ý: In trên phiếu
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

## 7. Kiểm tra sau khi thực hiện

Chi nhánh được lưu và hiện trên danh sách **CHI NHÁNH - DANH SÁCH**. Thông tin pháp nhân, logo của chi nhánh dùng cho các phiếu in từ lần in sau. Chi nhánh mới cần được IT cấp quyền người dùng và thiết lập địa chỉ web trước khi dùng để làm việc.

## 8. Những điều cần lưu ý

⚠️ **Mã chi nhánh nên đặt một lần rồi giữ nguyên**: mã xuất hiện trên danh sách chọn và báo cáo nhiều nơi. Chỉ đổi khi thật sự cần.

⚠️ **LOGO URL, HOSTNAME sai** làm phiếu in mất logo hoặc chi nhánh không hiện ở trang **ĐĂNG NHẬP** của địa chỉ web tương ứng. Nhờ IT kiểm tra trước khi lưu.

⚠️ Chi nhánh đã có dữ liệu (kho, quỹ, khách hàng, chứng từ…) **không xoá được**; dùng **Ngưng sử dụng**.

⚠️ Bỏ tick **Kích hoạt** để ngưng sử dụng chi nhánh theo luồng quản trị danh mục. Kiểm tra không còn ai đang làm việc ở chi nhánh đó trước khi ngưng; xác nhận trạng thái trong danh mục, vì hệ thống chính thức không có bước chọn đổi chi nhánh ở trang **ĐĂNG NHẬP**.

### "Nhập mã chi nhánh" / "Mã chi nhánh quá ngắn" / "Nhập tên chi nhánh" / "Tên chi nhánh quá ngắn" 

Nguyên nhân: để trống hoặc chỉ nhập 1 ký tự.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "Mã không hợp lệ. Viết liền không dấu và không chứa kí tự đặc biệt." 

Nguyên nhân: mã có khoảng trắng.
Cách xử lý: viết liền, ví dụ `CNHANOI` thay cho `CN HANOI`.

### "Mã chi nhánh đã tồn tại" 

Nguyên nhân: đã có chi nhánh cùng mã (kể cả khác hoa / thường, kể cả chi nhánh đã ngưng sử dụng).
Cách xử lý: đặt mã khác, hoặc tìm dòng cũ và tick lại **Kích hoạt**.

### "Lỗi thêm: Mã đã tồn tại." / "Lỗi sửa: Mã đã tồn tại." 

Nguyên nhân: hai người cùng lưu một mã gần như cùng lúc, hoặc mã vừa bị người khác dùng.
Cách xử lý: đổi mã khác ([LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/)).

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: tài khoản chưa có quyền **Thêm mới** / **Cập nhật** của màn này.
Cách xử lý: liên hệ quản trị hệ thống.

## 10. Câu hỏi thường gặp

**Chi nhánh trung tâm là gì? Sao không thấy ô chọn?**
Đó là cờ nội bộ của hệ thống, không có trên cửa sổ. Chi nhánh trung tâm chỉ có tác dụng chặn xoá. Muốn đổi, báo IT.

**Mã chi nhánh có tự sinh không?**
Không, bạn tự đặt mã.

**Sửa Tên công ty có đổi các phiếu đã in không?**
Phiếu đã in giấy / đã xuất file thì không đổi. Phiếu in lại sau đó dùng thông tin mới.

## 11. Công việc tiếp theo

```text
Thêm chi nhánh xong
   ├──► IT cấp quyền người dùng + địa chỉ web   → GEN-02
   ├──► Khai báo Kho hàng của chi nhánh         → TL-A09.0
   └──► Khai báo Tài khoản, quỹ                 → TL-A06.0
```

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH KHO HÀNG](/bai-viet/2026-11-07-tl-a09-0-tong-quan-man-hinh-kho-hang/) – Tổng quan màn hình Kho hàng.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH CHI NHÁNH / ĐƠN VỊ](/bai-viet/2026-11-07-tl-a01-0-tong-quan-man-hinh-chi-nhanh-don-vi/) – Tổng quan màn hình Chi nhánh / Đơn vị
- [HƯỚNG DẪN IMPORT CHI NHÁNH TỪ EXCEL](/bai-viet/2026-11-07-tl-a01-2-huong-dan-import-chi-nhanh-tu-excel/) – Hướng dẫn import chi nhánh từ Excel
- [TỔNG QUAN MÀN HÌNH KHO HÀNG](/bai-viet/2026-11-07-tl-a09-0-tong-quan-man-hinh-kho-hang/) – Tổng quan màn hình Kho hàng
