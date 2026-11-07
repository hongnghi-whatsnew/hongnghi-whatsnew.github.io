---
title: "HƯỚNG DẪN SAO CHÉP ĐỊNH MỨC"
date: "2026-11-07"
summary: "Liên kết Sao chép ở cột Thao tác của danh sách Định mức mở cửa sổ THÊM DANH ĐỊNH MỨC đã điền sẵn nội dung của định mức gốc: gia công, mã, tên, tên in, nghiệp vụ và cả ba tab nguyên liệu, nguồn lực, chi phí khác."
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

Liên kết **Sao chép** ở cột **Thao tác** của danh sách **Định mức** mở cửa sổ **THÊM DANH ĐỊNH MỨC** đã **điền sẵn** nội dung của định mức gốc: gia công, mã, tên, tên in, nghiệp vụ và cả ba tab nguyên liệu, nguồn lực, chi phí khác. Bạn chỉ cần đổi mã, tên và chỉnh những dòng khác biệt rồi lưu thành một định mức mới.

Dùng khi tạo hàng loạt định mức gần giống nhau (ví dụ cùng kiểu gia công, khác mã màu hoặc khác vài chi phí), thay vì nhập lại toàn bộ.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Thêm mới** định mức.
- Đã có định mức gốc để sao chép.
- Các nguyên liệu, nguồn lực, nội dung chi trong định mức gốc vẫn còn trong danh mục (nếu đã ngưng dùng, kiểm tra từng dòng sau khi sao chép).

## 2. Mở chức năng

**Hàng hoá → Định mức → Sao chép** (ở dòng định mức gốc)

## 3. Nhận biết màn hình

![Hình 1: Liên kết Sao chép trên dòng định mức kiểm tra thực tế](/posts/2026-11-07-tl-d10-2-huong-dan-sao-chep-dinh-muc/hinh-01-20261029-tl-d10-2-danh-sach.png)

![Hình 2: Giữ mã định mức gốc khi sao chép sẽ báo Mã đã tồn tại](/posts/2026-11-07-tl-d10-2-huong-dan-sao-chep-dinh-muc/hinh-02-20261029-tl-d10-2-ma-trung.png)

![Hình 3: Đổi mã và tên cho bản sao định mức minh họa](/posts/2026-11-07-tl-d10-2-huong-dan-sao-chep-dinh-muc/hinh-03-20261029-tl-d10-2-ma-moi.png)

- **Liên kết Sao chép**: Ý nghĩa: Mở cửa sổ thêm mới điền sẵn dữ liệu từ dòng đó

- **MÃ ĐỊNH MỨC**: Ý nghĩa: Đang trùng với định mức gốc, **phải đổi**
- **TÊN ĐỊNH MỨC, TÊN IN, GIA CÔNG, NGHIỆP VỤ**: Ý nghĩa: Đã điền theo định mức gốc
- **Ba tab chi tiết**: Ý nghĩa: Đã điền theo định mức gốc

## 4. Trình tự công việc

```text
Định mức gốc → Sao chép
        ↓
cửa sổ THÊM DANH ĐỊNH MỨC (điền sẵn)
        ↓
Đổi MÃ ĐỊNH MỨC, TÊN ĐỊNH MỨC (+ chỉnh dòng khác biệt)
        ↓
Lưu lại → định mức mới (định mức gốc không đổi)
```

### Bước 1 – Chọn định mức gốc

Ở dòng định mức muốn dùng làm mẫu, bấm **Sao chép**. Chờ cửa sổ điền xong dữ liệu ba tab.

### Bước 2 – Đổi mã và tên

Sửa **MÃ ĐỊNH MỨC** (bắt buộc đổi vì đang trùng với bản gốc, nếu để nguyên bấm **Lưu lại** sẽ báo **Mã đã tồn tại**), và sửa **TÊN ĐỊNH MỨC**, **TÊN IN** nếu cần.

### Bước 3 – Chỉnh chi tiết

Chỉnh **GIA CÔNG**, **NGHIỆP VỤ** và các dòng ở ba tab theo định mức mới (cách làm như [HƯỚNG DẪN THÊM, SỬA ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-1-huong-dan-them-sua-dinh-muc/)). Điểm riêng của sao chép:

- **GHI CHÚ** chung của định mức và **GHI CHÚ** từng dòng nguyên liệu **không** được chép sang.
- **Kích hoạt** của bản mới luôn **tick**, dù bản gốc đang ngưng dùng.
- **ĐƠN GIÁ** các dòng nguyên liệu có thể được **lấy lại theo giá vốn bình quân hiện tại** của nguyên liệu (không nhất thiết bằng giá ở bản gốc).

### Bước 4 – Lưu

Bấm **Lưu lại**. Hệ thống kiểm tra mã mới chưa có. Định mức gốc **không bị đổi**.

## 6. Giải thích các thông tin trên màn hình

Các trường của cửa sổ: xem [HƯỚNG DẪN THÊM, SỬA ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-1-huong-dan-them-sua-dinh-muc/) phần “Giải thích các thông tin trên màn hình”. Trường chép và không chép sang bản mới:

- **Gia công, mã, tên, tên in, nghiệp vụ**: Chép sang bản mới?: Có; Lưu ý: Mã phải đổi
- **Ghi chú chung của định mức**: Chép sang bản mới?: Không
- **Nguyên liệu: nguyên liệu, ĐVT, SL, đơn giá**: Chép sang bản mới?: Có; Lưu ý: Ghi chú dòng không chép; đơn giá có thể tính lại
- **Nguồn lực: nguồn lực, chi phí, ghi chú**: Chép sang bản mới?: Có
- **Chi phí khác: nội dung, chi phí, hai cờ, ghi chú**: Chép sang bản mới?: Có
- **Kích hoạt**: Chép sang bản mới?: Không (luôn tick)

## 7. Kiểm tra sau khi thực hiện

Có thêm một định mức mới ở danh sách **ĐỊNH MỨC** với nội dung như bản gốc đã chỉnh. Định mức gốc giữ nguyên.

## 8. Những điều cần lưu ý

⚠️ **Sao chép không tự đổi mã.** Quên đổi mã thì không lưu được.

⚠️ Nếu **NGHIỆP VỤ** của bản gốc trống, bản sao cũng trống và **không hiện** ở ô **GIA CÔNG** của Thành phẩm, Nguyên liệu. Gắn nghiệp vụ trước khi lưu.

⚠️ Sao chép nên chờ cửa sổ điền xong ba tab rồi mới sửa; sửa quá sớm có thể bị dữ liệu nạp sau ghi đè.

### "Mã đã tồn tại" 

Nguyên nhân: **MÃ ĐỊNH MỨC** vẫn là mã của bản gốc (hoặc trùng định mức khác).
Cách xử lý: đổi mã khác rồi **Lưu lại**.

## 10. Công việc tiếp theo

**Tiếp theo:** hướng dẫn của bộ phận phụ trách – Hướng dẫn thêm, sửa thành phẩm (chọn định mức mới ở ô **GIA CÔNG**).

## 11. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-0-tong-quan-man-hinh-dinh-muc/) – Tổng quan màn hình Định mức
- [HƯỚNG DẪN THÊM, SỬA ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-1-huong-dan-them-sua-dinh-muc/) – Thêm, sửa định mức
