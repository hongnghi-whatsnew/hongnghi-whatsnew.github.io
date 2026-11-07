---
title: "TỔNG QUAN MÀN HÌNH MAPPING HÀNG HÓA GIA CÔNG"
date: "2026-11-07"
summary: "Khi nhận phiếu yêu cầu gia công từ đối tác, phiếu mang mã hàng hóa theo hệ thống của đối tác."
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

Khi nhận phiếu yêu cầu gia công từ đối tác, phiếu mang **mã hàng hóa theo hệ thống của đối tác**. Nếu mã đó khác mã ở hệ thống này, **Mapping hàng hóa gia công** ghi sẵn cặp: (**đối tác**, **mã hàng hóa bên gửi**) → (**mã hàng hóa tương ứng ở hệ thống này**), để hệ thống tìm đúng hàng hóa.

Mỗi dòng mapping gồm đối tác, mã bên gửi, mã hàng hóa tương ứng, ghi chú và trạng thái. Mỗi cặp (đối tác, mã bên gửi) chỉ có **một** dòng.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Đã khai đối tác ở **Kết nối đối tác** ([TỔNG QUAN MÀN HÌNH KẾT NỐI ĐỐI TÁC](/bai-viet/2026-11-07-tl-f01-0-tong-quan-man-hinh-ket-noi-doi-tac/)): ô **ĐỐI TÁC** chỉ liệt kê đối tác của chi nhánh đang truy cập.
- Hàng hóa tương ứng ở hệ thống này đã có trong danh mục hàng hóa (TL-D).

## 2. Mở chức năng

**Kết nối gia công API → Mapping hàng hóa gia công**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Hình 1: MAPPING HÀNG HÓA GIA CÔNG - DANH SÁCH — không có dữ liệu, chỉ xem.](/posts/2026-11-07-tl-f02-0-tong-quan-man-hinh-mapping-hang-hoa-gia-cong/ui-20261026-tl-f02-ds-figure-01.png)

- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM MAPPING HÀNG HÓA**; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Import Excel**: Chức năng: Nạp nhiều dòng từ file Excel; Hướng dẫn: [HƯỚNG DẪN IMPORT MAPPING HÀNG HÓA GIA CÔNG TỪ EXCEL](/bai-viet/2026-11-07-tl-f02-1-huong-dan-import-mapping-hang-hoa-gia-cong-tu-excel/)
- **Cột Thao tác**: Chức năng: **Sửa** \; Hướng dẫn: **Xóa**; Thông tin: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm, lọc; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)

**Các cột trên danh sách:**

- **STT, Thao tác**: Ý nghĩa: Số thứ tự; **Sửa** \; Thông tin: **Xóa**
- **Đối tác**: Ý nghĩa: Mã đối tác
- **Mã hàng hóa bên gửi**: Ý nghĩa: Mã hàng hóa theo hệ thống đối tác
- **Mã hàng hóa tương ứng (ở hệ thống này)**: Ý nghĩa: Mã hàng hóa của mình
- **Trạng thái**: Ý nghĩa: **Kích hoạt** hoặc **Ngưng sử dụng**
- **Ghi chú, Người tạo, Ngày tạo**: Ý nghĩa: Ghi chú; hệ thống tự ghi. Dòng tự sinh có ghi chú "Tự động tạo từ phiếu yêu cầu gia công …"

Nhấp đúp một dòng mở cửa sổ **THÔNG TIN MAPPING HÀNG HÓA** (chỉ xem).

## 4. Trình tự công việc

```text
Phiếu yêu cầu từ đối tác (mã hàng bên gửi)
      ↓
Bên nhận bấm Lấy dữ liệu ở hộp thư Đồng bộ từ API
      ↓
Có mapping (đối tác + mã bên gửi) ? ── có ──► dùng hàng hóa đã map
      │ chưa
      ↓
Có hàng hóa trùng đúng mã bên gửi ? ── có ──► dùng hàng hóa đó
      │ chưa
      ↓
Báo lỗi: yêu cầu tạo hàng hóa gốc hoặc khai mapping
```

### Khai một mapping

![Hình 2: THÊM MAPPING HÀNG HÓA — chưa chọn đối tác/hàng hóa, chưa lưu.](/posts/2026-11-07-tl-f02-0-tong-quan-man-hinh-mapping-hang-hoa-gia-cong/ui-20261026-tl-f02-form-figure-02.png)

- **ĐỐI TÁC**: Ý nghĩa: Chọn đối tác (bắt buộc)
- **MÃ HÀNG HÓA BÊN GỬI (mã của đối tác)**: Ý nghĩa: Mã hàng đối tác gửi qua, không khớp mã ở hệ thống này (bắt buộc)
- **HÀNG HÓA TƯƠNG ỨNG (ở hệ thống này)**: Ý nghĩa: Chọn hàng hóa của mình (bắt buộc)
- **GHI CHÚ**: Ý nghĩa: Ghi chú tuỳ chọn
- **Kích hoạt (chân cửa sổ)**: Ý nghĩa: Tick = đang dùng

Với ván khách gửi nên chọn ở **HÀNG HÓA TƯƠNG ỨNG** là **ván nền của công ty** (hàng thường): hệ thống tự sinh mã **GỬI HÀNG** (giá vốn 0) từ ván nền đó.

## 6. Giải thích các thông tin trên màn hình

- **Đối tác**: Ý nghĩa: Mã đối tác gửi; Bắt buộc: Có; Lưu ý: Báo **Chọn đối tác** nếu trống
- **Mã hàng hóa bên gửi**: Ý nghĩa: Mã hàng theo đối tác; Bắt buộc: Có; Lưu ý: Báo **Nhập mã hàng hóa bên gửi** nếu trống. Cặp (đối tác, mã bên gửi) **không trùng**
- **Hàng hóa tương ứng**: Ý nghĩa: Hàng hóa của mình; Bắt buộc: Có; Lưu ý: Báo **Chọn hàng hóa tương ứng** nếu trống
- **Ghi chú**: Bắt buộc: Không
- **Kích hoạt**: Lưu ý: Mặc định tick

**Cách hệ thống dùng mapping khi bên nhận lấy dữ liệu:**

1. Hàng hóa đã là hàng **GỬI HÀNG** (tên có chữ GỬI HÀNG hoặc mã có `GUIHANG`): giữ nguyên mã và tên của bên gửi; nếu bên nhận chưa có thì tạo mới (giá vốn 0).
2. Còn lại: tra mapping; nếu chưa có mapping thì tìm hàng hóa trùng đúng mã bên gửi; nếu vẫn không có thì báo lỗi.
3. Từ ván nền tìm được, hệ thống **sinh hoặc dùng lại** mã **GỬI HÀNG** (loại hàng **GỬI HÀNG**, xuất xứ là mã đối tác, giá vốn 0), và **tự thêm** một dòng mapping để lần sau không phải tra lại.

## 7. Kiểm tra sau khi thực hiện

- Mã hàng của đối tác được nhận ra khi bên nhận **Lấy dữ liệu** từ hộp thư **Đồng bộ từ API**.
- Hàng khách gửi được quản lý thành mã **GỬI HÀNG** riêng, không cộng vào giá thành gia công.

## 8. Những điều cần lưu ý

⚠️ **Mapping thuộc về từng đối tác.** Cùng mã bên gửi nhưng khác đối tác là hai dòng khác nhau.

⚠️ Dòng mapping **Ngưng sử dụng** (bỏ tick **Kích hoạt**) **không được dùng** khi tra, nhưng vẫn chiếm chỗ: không thêm được dòng thứ hai cho cùng cặp (đối tác, mã bên gửi). Muốn dùng lại, tick **Kích hoạt**.

⚠️ Danh sách và việc tra mapping chạy trong cơ sở dữ liệu của tên miền hiện tại. Hàm tra theo đối tác/mã hàng không thêm điều kiện chi nhánh; điều đó không tạo kết nối tới dữ liệu chi nhánh khác. Đối tác ở hệ thống riêng phải khai ánh xạ tại phía nhận tương ứng.

⚠️ Hệ thống không lưu sẵn mã nội bộ của hàng: mỗi lần đồng bộ luôn **tra lại theo mã hàng hóa tương ứng**. Đổi mã hàng của mình thì cập nhật lại dòng mapping.

⚠️ Hệ thống **tự tạo** mapping khi lấy dữ liệu lần đầu. Kiểm tra các dòng ghi chú "Tự động tạo từ phiếu yêu cầu gia công …" nếu hàng hóa tương ứng chưa đúng ý.

⚠️ Dòng mapping có thể trỏ thẳng tới mã **GỬI HÀNG** đã có; khi đó hệ thống dùng lại mã đó.

### "Mã hàng hóa này đã có mapping với đối tác này" 

Nguyên nhân: đã có dòng mapping cho cùng (đối tác, mã bên gửi), kể cả dòng **Ngưng sử dụng**.
Cách xử lý: tìm và **Sửa** dòng cũ thay vì thêm mới.

### "Chọn đối tác" / "Nhập mã hàng hóa bên gửi" / "Chọn hàng hóa tương ứng" 

Nguyên nhân: để trống trường bắt buộc.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "Chưa có hàng hóa '…' ở hệ thống này để tạo mã gửi hàng. Vui lòng tạo hàng hóa gốc hoặc khai mapping …" 

Nguyên nhân: khi **Lấy dữ liệu** ở hộp thư **Đồng bộ từ API**, mã hàng bên gửi chưa có mapping và không trùng hàng hóa nào ở hệ thống này.
Cách xử lý: thêm mapping ở màn này (hoặc tạo hàng hóa gốc), rồi **Lấy dữ liệu** lại.

## 10. Câu hỏi thường gặp

**Khi nào không cần mapping?**
Khi mã hàng hóa hai bên giống nhau: hệ thống tìm thẳng theo mã trùng.

**Mapping do hệ thống tự thêm có sửa được không?**
Được, như mọi dòng khác (**Sửa**, **Xóa**).

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN IMPORT MAPPING HÀNG HÓA GIA CÔNG TỪ EXCEL](/bai-viet/2026-11-07-tl-f02-1-huong-dan-import-mapping-hang-hoa-gia-cong-tu-excel/) – Import mapping hàng hóa gia công từ Excel; [TỔNG QUAN MAPPING ĐỊNH MỨC GIA CÔNG](/bai-viet/2026-11-07-tl-f03-0-tong-quan-mapping-dinh-muc-gia-cong/) – Mapping định mức gia công.

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN IMPORT MAPPING HÀNG HÓA GIA CÔNG TỪ EXCEL](/bai-viet/2026-11-07-tl-f02-1-huong-dan-import-mapping-hang-hoa-gia-cong-tu-excel/) – Import mapping hàng hóa gia công từ Excel
- [TỔNG QUAN MÀN HÌNH KẾT NỐI ĐỐI TÁC](/bai-viet/2026-11-07-tl-f01-0-tong-quan-man-hinh-ket-noi-doi-tac/) – Kết nối đối tác; [HƯỚNG DẪN THIẾT LẬP ĐỒNG BỘ GIA CÔNG VỚI ĐỐI TÁC](/bai-viet/2026-11-07-tl-f01-1-huong-dan-thiet-lap-dong-bo-gia-cong-voi-doi-tac/) – Thiết lập đồng bộ gia công với đối tác
- [TỔNG QUAN MAPPING ĐỊNH MỨC GIA CÔNG](/bai-viet/2026-11-07-tl-f03-0-tong-quan-mapping-dinh-muc-gia-cong/) – Mapping định mức gia công
- TL-D05 – Loại hàng (loại **GỬI HÀNG**)
