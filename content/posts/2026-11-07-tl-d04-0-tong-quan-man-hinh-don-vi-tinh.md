---
title: "TỔNG QUAN MÀN HÌNH ĐƠN VỊ TÍNH"
date: "2026-11-07"
summary: "Đơn vị tính (ĐVT) liệt kê các đơn vị mà công ty đếm hàng: Tấm, Kiện, Tờ, Cuộn, Kg, m³, LIT, MÉT, PHUY… Mỗi dòng gồm mã và tên đơn vị."
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

**Đơn vị tính (ĐVT)** liệt kê các đơn vị mà công ty đếm hàng: *Tấm*, *Kiện*, *Tờ*, *Cuộn*, *Kg*, *m³*, *LIT*, *MÉT*, *PHUY*… Mỗi dòng gồm **mã** và **tên** đơn vị.

Danh mục này được dùng ở:

- **Hàng hoá** (nguyên liệu, hàng trơn, thành phẩm, hàng hoá khác): ô **ĐƠN VỊ TÍNH** bắt buộc; hàng trơn, thành phẩm có thêm **ĐƠN VỊ TÍNH 1** và **QUY ĐỔI** (ví dụ 1 *Kiện* = 53 *Tấm*). Nguyên liệu có thêm cửa sổ **CHUYỂN ĐỔI ĐVT**.
- **Định mức**: mỗi dòng nguyên liệu có đơn vị tính của nguyên liệu đó.
- **Mọi chứng từ** mua, bán, kho, sản xuất: dòng hàng hiển thị và tính số lượng theo đơn vị tính.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Đơn vị tính**.
- Không cần danh mục nào khác có trước.

## 2. Mở chức năng

**Hàng hoá → Đơn vị tính**

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

![Hình 1: Danh sách đơn vị tính theo bố cục và bộ lọc hiện tại](/posts/2026-11-07-tl-d04-0-tong-quan-man-hinh-don-vi-tinh/hinh-01-man-hinh-don-vi-tinh.png)

- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM DANH MỤC ĐVT**; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá một dòng; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Xóa** (hiện theo quyền)
- **Mã đơn vị tính**: Ý nghĩa: Mã đơn vị
- **Tên đơn vị tính**: Ý nghĩa: Tên đơn vị, là chữ hiện ở các ô chọn và chứng từ
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n**. Danh sách hiện cả dòng **Ngưng sử dụng**. Nhấp đúp vào một dòng mở cửa sổ chỉ xem **THÔNG TIN ĐVT**.

![Hình 2: cửa sổ thêm đơn vị tính chưa nhập và chưa lưu](/posts/2026-11-07-tl-d04-0-tong-quan-man-hinh-don-vi-tinh/hinh-02-form-them-don-vi-tinh.png)

- **MÃ ĐƠN VỊ TÍNH**: Ý nghĩa: Bắt buộc, không trùng
- **TÊN ĐƠN VỊ TÍNH**: Ý nghĩa: Bắt buộc
- **GHI CHÚ**: Ý nghĩa: Tuỳ chọn
- **Kích hoạt**: Ý nghĩa: Bỏ tick = **Ngưng sử dụng**

## 4. Trình tự công việc

```text
Đơn vị tính (TL-D04)
      ├──► Hàng hoá: ĐƠN VỊ TÍNH, ĐƠN VỊ TÍNH 1 + QUY ĐỔI
      ├──► Nguyên liệu: cửa sổ CHUYỂN ĐỔI ĐVT (ĐVT phụ được chọn trên chứng từ)
      ├──► Định mức: ĐVT từng dòng nguyên liệu
      └──► Chứng từ mua, bán, kho, sản xuất
```

### Khai báo một đơn vị tính

**Bước 1 –** Kiểm tra danh sách xem đơn vị đã có chưa (gõ vào **Tìm kiếm…**). Đối chiếu các đơn vị thực tế của hệ thống đang truy cập; các tên *Tấm*, *Kiện*, *Tờ*, *Cuộn*, *Kg*, *m³*, *LIT*, *MÉT*, *PHUY* là ví dụ từ dữ liệu tham chiếu, không bảo đảm mọi dữ liệu hệ thống chính thức đã có đủ. Dùng lại đơn vị đúng nghĩa đã có.

**Bước 2 –** Nhập **MÃ ĐƠN VỊ TÍNH** (ít nhất 2 ký tự) và **TÊN ĐƠN VỊ TÍNH** (ít nhất 2 ký tự). Mã có thể có dấu hoặc khoảng trắng, nhưng nên viết gọn, ví dụ `Tấm`, `Kiện`.

**Bước 3 –** Bấm **Lưu lại**. Hệ thống kiểm tra mã chưa có (không phân biệt chữ hoa, chữ thường).

### Sửa, ngưng dùng, xoá

- **Sửa tên**: đổi tên hiển thị ở mọi nơi đang dùng đơn vị này.
- **Ngưng sử dụng**: bỏ tick **Kích hoạt**. Đơn vị không còn hiện trong ô chọn khi lập hàng hoá mới; hàng và chứng từ cũ giữ nguyên.
- **Xóa**: chỉ khi chưa hàng hoá, định mức hay chứng từ nào dùng đơn vị. Đơn vị đã dùng thì hầu như không xoá được.

## 6. Giải thích các thông tin trên màn hình

- **Mã đơn vị tính**: Ý nghĩa: Mã đơn vị; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự, không trùng mã khác (không phân biệt hoa / thường)
- **Tên đơn vị tính**: Ý nghĩa: Tên hiển thị; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

## 7. Kiểm tra sau khi thực hiện

Đơn vị tính mới chọn được ở ô **ĐƠN VỊ TÍNH** của cửa sổ hàng hoá và ô **ĐVT** trong cửa sổ **CHUYỂN ĐỔI ĐVT** của nguyên liệu.

## 8. Những điều cần lưu ý

⚠️ Mã ĐVT **không bị chặn khoảng trắng hay dấu** (khác Tiêu chuẩn, Loại hàng, Số mặt). Vì vậy dễ phát sinh các bản gần giống (*Tấm*, *tam*, *TAM*). Hãy tìm trước khi thêm.

⚠️ **Đổi tên đơn vị** đổi tên ở mọi hàng hoá và chứng từ đang dùng đơn vị đó. Đừng đổi *Tấm* thành *Kiện*.

⚠️ Đơn vị tính chỉ **chọn được khi đang Kích hoạt**. Bỏ tick Kích hoạt của đơn vị đang là **ĐVT** của hàng nào đó không làm hàng đó mất đơn vị, nhưng khi sửa hàng, ô chọn sẽ không liệt kê đơn vị này.

⚠️ Hộp xác nhận xoá hỏi **Bạn có muốn xóa hàng hóa này?** là câu chung của các màn Hàng hoá; thực tế là xoá đơn vị tính đang chọn.

### "Mã đã tồn tại" 

Nguyên nhân: đã có đơn vị cùng mã (kể cả khác chữ hoa / thường).
Cách xử lý: dùng lại đơn vị đã có, hoặc đặt mã khác.

### "Mã đơn vị tính quá ngắn" / "Tên đơn vị tính quá ngắn" 

Nguyên nhân: nhập 1 ký tự.
Cách xử lý: nhập ít nhất 2 ký tự. Đơn vị một chữ cái (ví dụ *m*, đo chiều dài) có thể viết thành *MÉT* theo quy ước công ty; không thay bằng *m²* vì đó là đơn vị diện tích. Chỉ tạo đơn vị đúng đại lượng cần đo.

### "Lỗi xóa.: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: đơn vị đang được hàng hoá, định mức hoặc chứng từ dùng.
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá.

## 10. Câu hỏi thường gặp

**Đổi 1 Kiện = bao nhiêu Tấm ở đâu?**
Không đặt ở danh mục này. Đặt ở từng hàng hoá: **ĐƠN VỊ TÍNH 1** và **QUY ĐỔI** (hàng trơn, thành phẩm), hoặc cửa sổ **CHUYỂN ĐỔI ĐVT** (nguyên liệu).

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN THÊM, SỬA HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-1-huong-dan-them-sua-hang-tron/) – Hướng dẫn thêm, sửa hàng trơn (chọn **ĐƠN VỊ TÍNH** và **QUY ĐỔI**).

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN THÊM, SỬA NGUYÊN LIỆU](/bai-viet/2026-11-07-tl-d08-1-huong-dan-them-sua-nguyen-lieu/) – Thêm, sửa nguyên liệu (cửa sổ CHUYỂN ĐỔI ĐVT)
- [HƯỚNG DẪN THÊM, SỬA HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-1-huong-dan-them-sua-hang-tron/) – Thêm, sửa hàng trơn
- [HƯỚNG DẪN THÊM, SỬA ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-1-huong-dan-them-sua-dinh-muc/) – Thêm, sửa định mức
