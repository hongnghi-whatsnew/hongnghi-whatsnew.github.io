---
title: "HƯỚNG DẪN THÊM, SỬA NGUYÊN LIỆU"
date: "2026-11-07"
summary: "cửa sổ THÊM NGUYÊN LIỆU / CẬP NHẬT NGUYÊN LIỆU tạo hoặc sửa một nguyên liệu."
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

cửa sổ **THÊM NGUYÊN LIỆU** / **CẬP NHẬT NGUYÊN LIỆU** tạo hoặc sửa **một** nguyên liệu. Các điểm khác với hàng trơn, thành phẩm:

- **Mã và tên do bạn nhập**, hệ thống không sinh và không sinh lại khi sửa.
- Bắt buộc chọn **LOẠI NVL (621)**: loại nguyên vật liệu dùng để tính giá thành.
- Có thể gắn **NGHIỆP VỤ** (Sản xuất giấy, Sản xuất keo) và **GIA CÔNG** (một định mức).
- Có cửa sổ **CHUYỂN ĐỔI ĐVT** để khai báo đơn vị phụ.

Nhiều nguyên liệu cùng lúc: dùng [HƯỚNG DẪN IMPORT NGUYÊN LIỆU TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d08-3-huong-dan-import-nguyen-lieu-tu-excel-anh/) (import) và [HƯỚNG DẪN SỬA, XOÁ NHIỀU NGUYÊN LIỆU CÙNG LÚC](/bai-viet/2026-11-07-tl-d08-2-huong-dan-sua-xoa-nhieu-nguyen-lieu-cung-luc/) (sửa nhiều).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- **Đơn vị tính** đã có trong danh mục (TL-D04).
- Muốn gắn **NGHIỆP VỤ / GIA CÔNG**: đã có **định mức** đang **Kích hoạt** có nghiệp vụ *Sản xuất giấy* hoặc *Sản xuất keo* ([HƯỚNG DẪN THÊM, SỬA ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-1-huong-dan-them-sua-dinh-muc/)). Định mức không có nghiệp vụ thì không hiện trong ô **GIA CÔNG**.

## 2. Mở chức năng

**Hàng hoá → Nguyên liệu → Thêm mới** (hoặc **Sửa** ở cột Thao tác)

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

Vùng đánh dấu trên ảnh này:

- **1**: Nội dung được đánh dấu: Mã, tên và tên in của nguyên liệu kiểm tra thực tế
- **2**: Nội dung được đánh dấu: Đơn vị tính Kg
- **3**: Nội dung được đánh dấu: Loại NVL621=Giấy
- **4**: Nội dung được đánh dấu: Lưu lại; biểu mẫu trước lưu

- **MÃ NGUYÊN LIỆU, TÊN NGUYÊN LIỆU, TÊN IN**: Ý nghĩa: Mã, tên bạn tự đặt; tên in trên chứng từ
- **ĐƠN VỊ TÍNH và nút chuyển đổi trong ô**: Ý nghĩa: Đơn vị chính; nút mở cửa sổ **CHUYỂN ĐỔI ĐVT**
- **NGHIỆP VỤ, GIA CÔNG**: Ý nghĩa: Gắn nghiệp vụ sản xuất và định mức
- **MÃ HÀNG HN, MÃ HÀNG NCC, NCC, PHÂN LOẠI**: Ý nghĩa: Thông tin tham chiếu (chữ tự do)
- **LOẠI NVL (621)**: Ý nghĩa: Bắt buộc
- **ĐỊNH LƯỢNG, Rộng, TRỌNG LƯỢNG, ĐƠN GIÁ**: Ý nghĩa: Thông số số
- **GHI CHÚ, Kích hoạt**: Ý nghĩa: Ghi chú; bỏ tick = **Ngưng sử dụng**

- **Dấu cộng ở tiêu đề cột đầu**: Ý nghĩa: Thêm một dòng đơn vị phụ
- **Ô tick đầu dòng**: Ý nghĩa: Cho phép dùng đơn vị này (xem phần “Những điều cần lưu ý”)
- **ĐVT, CHUYỂN ĐỔI, CÔNG THỨC, MÔ TẢ**: Ý nghĩa: Đơn vị phụ, hệ số, phép tính (**Phép nhân**), diễn giải
- **Đồng ý / Đóng**: Ý nghĩa: Nhận danh sách vào cửa sổ / bỏ

## 4. Trình tự công việc

```text
Thêm mới / Sửa
   ↓
Nhập MÃ, TÊN → chọn ĐVT (→ nút chuyển đổi: thêm ĐVT phụ → Đồng ý)
   ↓
Chọn LOẠI NVL (621)
   ↓
(tuỳ chọn) NGHIỆP VỤ → GIA CÔNG (chỉ 1 định mức)
   ↓
Lưu lại → nguyên liệu hiện ở danh sách, chọn được ở Định mức, chứng từ
```

### Bước 1 – Đặt mã và tên

Nhập **MÃ NGUYÊN LIỆU** (viết liền, không khoảng trắng, ít nhất 2 ký tự) và **TÊN NGUYÊN LIỆU** (ít nhất 2 ký tự). Hệ thống kiểm tra ngay mã đã có hay chưa **trong toàn bộ hàng hoá** (nguyên liệu, hàng trơn, thành phẩm, hàng khác). **TÊN IN** là tên in trên chứng từ, bỏ trống thì chứng từ dùng tên nguyên liệu.

### Bước 2 – Chọn đơn vị tính

Chọn **ĐƠN VỊ TÍNH** (chỉ hiện đơn vị đang **Kích hoạt**). Nếu nguyên liệu còn đo bằng đơn vị khác, bấm nút chuyển đổi trong ô (gợi ý **Chuyển đổi**):

1. Cửa sổ **CHUYỂN ĐỔI ĐVT: <tên nguyên liệu>** mở ra (Hình 2). Nếu chưa chọn **ĐƠN VỊ TÍNH** thì hệ thống báo **Vui lòng chọn đơn vị tính.**
2. Chọn **ĐVT** phụ và nhập **CHUYỂN ĐỔI** (từ 1 trở lên). **CÔNG THỨC** luôn là **Phép nhân**, không đổi được. **MÔ TẢ** ghi tự do. Tick đầu dòng để dùng đơn vị này.
3. Bấm **Đồng ý**. Danh sách được nhận vào cửa sổ và **chỉ lưu khi bạn bấm Lưu lại**.

### Bước 3 – Chọn loại NVL (621)

Chọn **LOẠI NVL (621)**: *Giấy*, *Hóa chất* hoặc *Khác (không tính 621)*. Hệ thống đọc ô này để biết nguyên liệu có tính vào giá thành nguyên vật liệu trực tiếp (621) hay không. Ván là **hàng trơn**, không chọn ở đây.

### Bước 4 – Gắn nghiệp vụ và gia công (nếu cần)

Nguyên liệu dùng cho sản xuất giấy hoặc keo thì chọn **NGHIỆP VỤ** (*Sản xuất giấy*, *Sản xuất keo*), rồi chọn **GIA CÔNG** là định mức tương ứng. Ô **GIA CÔNG** bị khoá khi chưa chọn nghiệp vụ và chỉ liệt kê định mức có nghiệp vụ vừa chọn. Hai ô **đi cặp**: chọn ô này thì phải chọn ô kia, và **chỉ chọn 1 gia công**.

### Bước 5 – Nhập thông số

Điền khi có: **MÃ HÀNG HN**, **MÃ HÀNG NCC** (không trùng với hàng hoá khác), **NCC**, **PHÂN LOẠI**, **ĐỊNH LƯỢNG**, **Rộng**, **TRỌNG LƯỢNG** (kg), **ĐƠN GIÁ**. Các ô này không bắt buộc.

### Bước 6 – Lưu

Bấm **Lưu lại**. Hệ thống kiểm tra các điều kiện riêng ở phần “Vướng mắc thường gặp”: mã chưa trùng, đã chọn **LOẠI NVL (621)**, nghiệp vụ và gia công đi cặp, chỉ 1 gia công.

### Sửa nguyên liệu đã có

- Mã, tên **sửa tự do** nhưng phải không trùng; chứng từ cũ liên kết theo nguyên liệu nên sẽ hiện mã mới.
- Khi **Lưu lại**, nghiệp vụ và gia công được ghi lại theo đúng nội dung cửa sổ. Muốn bỏ gia công, xoá cả hai ô.
- Dòng đơn vị phụ **đã lưu không xoá được** trong cửa sổ chuyển đổi (không có biểu tượng xoá). Muốn ngừng dùng, bỏ tick đầu dòng.

## 6. Giải thích các thông tin trên màn hình

- **Mã nguyên liệu**: Ý nghĩa: Mã do người dùng đặt; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự, không khoảng trắng, không trùng mã hàng hoá nào
- **Tên nguyên liệu**: Ý nghĩa: Tên hiển thị; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự
- **Tên in**: Ý nghĩa: Tên in trên chứng từ; Bắt buộc: Không
- **Đơn vị tính**: Ý nghĩa: Đơn vị chính; Bắt buộc: Có; Lưu ý: Chọn từ đơn vị đang Kích hoạt
- **Nghiệp vụ**: Ý nghĩa: Sản xuất giấy / Sản xuất keo; Bắt buộc: Chỉ khi đã chọn Gia công; Lưu ý: Chọn nhiều được
- **Gia công**: Ý nghĩa: Định mức gắn với nguyên liệu; Bắt buộc: Chỉ khi đã chọn Nghiệp vụ; Lưu ý: Chỉ 1
- **Mã hàng HN**: Ý nghĩa: Mã nội bộ; Bắt buộc: Không
- **Mã hàng NCC**: Ý nghĩa: Mã của nhà cung cấp; Bắt buộc: Không; Lưu ý: Không trùng giữa các hàng hoá
- **NCC**: Ý nghĩa: Tên nhà cung cấp; Bắt buộc: Không; Lưu ý: Chữ tự do, không chọn từ danh mục
- **Phân loại**: Ý nghĩa: Phân loại tự do; Bắt buộc: Không
- **Loại NVL (621)**: Ý nghĩa: Giấy / Hóa chất / Khác; Bắt buộc: Có; Lưu ý: *Khác* không tính vào 621
- **Định lượng, Rộng**: Ý nghĩa: Thông số giấy; Bắt buộc: Không
- **Trọng lượng**: Ý nghĩa: Trọng lượng (kg); Bắt buộc: Không
- **Đơn giá**: Ý nghĩa: Giá nhập tham khảo; Bắt buộc: Không
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

## 7. Kiểm tra sau khi thực hiện

- Nguyên liệu hiện ở danh sách **NGUYÊN LIỆU**, chọn được ở **Định mức** và ở chứng từ (khi đang Kích hoạt).
- Đơn vị phụ, nghiệp vụ, gia công được lưu cùng nguyên liệu.

## 8. Những điều cần lưu ý

⚠️ **Loại NVL (621)** quyết định nguyên liệu có tính vào giá thành nguyên vật liệu trực tiếp hay không. Chọn *Khác (không tính 621)* khi không muốn tính; đừng bỏ qua ô này.

⚠️ **Mã hàng NCC trùng** (với bất kỳ hàng hoá nào) bị cơ sở dữ liệu từ chối; cửa sổ **không kiểm trước**, báo lỗi khi bấm **Lưu lại**.

⚠️ Đổi **ĐƠN VỊ TÍNH** của nguyên liệu đã có chứng từ làm số lượng cũ hiển thị theo đơn vị mới. Chỉ đổi khi đơn vị cũ nhập sai.

### "Mã đã tồn tại" 

Nguyên nhân: mã trùng với một hàng hoá khác (không phân biệt chữ hoa, chữ thường; không phân biệt loại hàng).
Cách xử lý: đổi mã, hoặc tìm nguyên liệu cũ ở danh sách và sửa.

### "Lỗi thêm.: Mã đã tồn tại." 

Nguyên nhân: **MÃ HÀNG NCC** đã có ở hàng hoá khác (hoặc mã trùng lọt qua kiểm tra trên cửa sổ).
Cách xử lý: đổi hoặc xoá trống **MÃ HÀNG NCC**.

### "Vui lòng chọn loại NVL" 

Cách xử lý: chọn **LOẠI NVL (621)**.

### "Vui lòng chọn nghiệp vụ" / "Vui lòng chọn gia công" 

Nguyên nhân: đã chọn **GIA CÔNG** mà chưa chọn **NGHIỆP VỤ**, hoặc ngược lại.
Cách xử lý: chọn đủ cả hai, hoặc xoá cả hai.

### "Vui lòng chỉ chọn 1 gia công" 

Cách xử lý: bỏ bớt, chỉ giữ 1 định mức ở ô **GIA CÔNG**.

### "Không chọn lại đơn vị tính chính." / "Đơn vị tính bị trùng, vui lòng kiểm tra lại." 

Nguyên nhân: trong cửa sổ **CHUYỂN ĐỔI ĐVT**, dòng chọn lại đơn vị chính, hoặc hai dòng cùng một đơn vị.
Cách xử lý: với dòng mới chưa lưu, bỏ dòng thừa rồi **Đồng ý**; dòng đơn vị phụ đã lưu không có thao tác xoá thì không làm lại bằng cách thêm dòng trùng, nhờ người phụ trách kiểm tra hoặc ngưng dùng bằng ô tick theo phần “Những điều cần lưu ý”.

### "Vui lòng chọn đơn vị tính." 

Nguyên nhân: bấm nút chuyển đổi khi chưa chọn **ĐƠN VỊ TÍNH**.
Cách xử lý: chọn đơn vị chính trước.

## 10. Câu hỏi thường gặp

**Ô GIA CÔNG không có định mức nào để chọn?**
Định mức chưa có nghiệp vụ *Sản xuất giấy* / *Sản xuất keo*, hoặc đang **Ngưng sử dụng**. Mở [HƯỚNG DẪN THÊM, SỬA ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-1-huong-dan-them-sua-dinh-muc/) để gắn nghiệp vụ cho định mức.

**Có nhập hàng loạt được không?**
Có, dùng [HƯỚNG DẪN IMPORT NGUYÊN LIỆU TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d08-3-huong-dan-import-nguyen-lieu-tu-excel-anh/) (Import Excel / ảnh) và [HƯỚNG DẪN SỬA, XOÁ NHIỀU NGUYÊN LIỆU CÙNG LÚC](/bai-viet/2026-11-07-tl-d08-2-huong-dan-sua-xoa-nhieu-nguyen-lieu-cung-luc/) (Sửa nhiều).

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN THÊM, SỬA ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-1-huong-dan-them-sua-dinh-muc/) – Hướng dẫn thêm, sửa định mức (dùng nguyên liệu vừa tạo làm nguyên liệu tiêu hao).

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH NGUYÊN LIỆU](/bai-viet/2026-11-07-tl-d08-0-tong-quan-man-hinh-nguyen-lieu/) – Tổng quan màn hình Nguyên liệu
- [HƯỚNG DẪN SỬA, XOÁ NHIỀU NGUYÊN LIỆU CÙNG LÚC](/bai-viet/2026-11-07-tl-d08-2-huong-dan-sua-xoa-nhieu-nguyen-lieu-cung-luc/) – Sửa, xoá nhiều nguyên liệu
- [HƯỚNG DẪN IMPORT NGUYÊN LIỆU TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d08-3-huong-dan-import-nguyen-lieu-tu-excel-anh/) – Import nguyên liệu từ Excel / ảnh
- [HƯỚNG DẪN THÊM, SỬA ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-1-huong-dan-them-sua-dinh-muc/) – Thêm, sửa định mức
- [TỔNG QUAN MÀN HÌNH ĐƠN VỊ TÍNH](/bai-viet/2026-11-07-tl-d04-0-tong-quan-man-hinh-don-vi-tinh/) – Tổng quan màn hình Đơn vị tính
