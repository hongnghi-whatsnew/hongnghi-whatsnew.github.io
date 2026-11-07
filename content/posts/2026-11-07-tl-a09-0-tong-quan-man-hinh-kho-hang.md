---
title: "TỔNG QUAN MÀN HÌNH KHO HÀNG"
date: "2026-11-07"
summary: "Kho hàng là danh mục các kho chứa hàng."
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

**Kho hàng** là danh mục các kho chứa hàng. Mọi phiếu có hàng hoá đều chọn kho từ danh mục này: phiếu mua hàng, nhập kho, xuất kho, chuyển kho, mượn hàng, điều chỉnh kho, bán hàng, trả hàng, gia công. Tồn kho được theo dõi **theo từng kho**.

Màn hình có ba việc riêng:

- **Khai báo kho** (mã, tên, số điện thoại, địa chỉ), đánh dấu **Kho ngoài** và gắn **Nghiệp vụ**.
- **Gán người sử dụng** cho kho (menu chuột phải **Người sử dụng**): người dùng chỉ thấy và chọn được kho mà mình được gán.
- **Ngưng sử dụng** kho không dùng nữa.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Kho hàng**.
- Chi nhánh đang làm việc là chi nhánh sẽ ghi cho kho mới ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Muốn gán người sử dụng: người dùng đã có tài khoản trong hệ thống.

## 2. Mở chức năng

**Thiết lập danh mục → Kho hàng**

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

![Hình 1: Danh sách kho hàng theo bố cục và bộ lọc hiện tại](/posts/2026-11-07-tl-a09-0-tong-quan-man-hinh-kho-hang/hinh-01-man-hinh-kho-hang.png)

- **Tải lại**: Chức năng: Tải lại danh sách
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM KHO HÀNG**
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá một dòng
- **Menu chuột phải trên một dòng: Người sử dụng**: Chức năng: Mở hộp gán người sử dụng cho kho (cần quyền **Phân quyền**)

- **Mã kho hàng**: Ý nghĩa: Mã kho
- **Tên kho hàng**: Ý nghĩa: Tên kho
- **Kho ngoài**: Ý nghĩa: Ô tick: kho này có đánh dấu **Kho ngoài**
- **SĐT**: Ý nghĩa: Số điện thoại của kho
- **Địa chỉ**: Ý nghĩa: Địa chỉ kho
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Danh sách hiện cả kho **Kích hoạt** lẫn **Ngưng sử dụng**. Tài khoản thường chỉ thấy **kho đã được gán cho mình**; tài khoản siêu quản trị thấy tất cả kho.

![Hình 4: cửa sổ kho có chọn Kho ngoài; chưa lưu, không thay đổi kho hiện có](/posts/2026-11-07-tl-a09-0-tong-quan-man-hinh-kho-hang/hinh-04-tl-a09-kho-ngoai.png)

## 4. Trình tự công việc

```text
Kho hàng (TL-A09)
   ├── Khai báo kho ──► Lưu
   ├── Người sử dụng ──► chọn tài khoản được dùng kho
   │
   └──► Mọi phiếu có hàng: ô chọn kho chỉ liệt kê kho
        ├── đang Kích hoạt, và
        └── được gán cho người đang lập phiếu (siêu quản trị: tất cả)
```

### Khai báo một kho

**Bước 1 –** Nhập **MÃ KHO HÀNG** (ít nhất 2 ký tự, viết liền, không trùng) và **TÊN KHO HÀNG** (ít nhất 2 ký tự). Mã **không tự sinh**.

**Bước 2 –** Nhập **SĐT**, **ĐỊA CHỈ**, **GHI CHÚ** nếu cần.

**Bước 3 –** Ô **NGHIỆP VỤ**: chọn một hoặc nhiều giá trị **Sản xuất giấy**, **Sản xuất keo**, **Sản xuất ván tại kho**, **Sản xuất ván ngoài**. Kho không thuộc nghiệp vụ nào thì để trống.

**Bước 5 –** Giữ tick **Kích hoạt**, rồi **Lưu lại**. Hệ thống ghi kho vào **chi nhánh đang làm việc**.

![Hình 2: cửa sổ thêm kho hàng chưa nhập và chưa lưu](/posts/2026-11-07-tl-a09-0-tong-quan-man-hinh-kho-hang/hinh-02-form-them-kho-hang.png)

- **MÃ KHO HÀNG, TÊN KHO HÀNG**: Ý nghĩa: Bắt buộc
- **SĐT, ĐỊA CHỈ, GHI CHÚ**: Ý nghĩa: Tuỳ chọn
- **NGHIỆP VỤ**: Ý nghĩa: Chọn nhiều giá trị
- **Ô Kho ngoài**: Ý nghĩa: Khoá khi sửa
- **Kích hoạt**: Ý nghĩa: Bỏ tick = **Ngưng sử dụng**

### Gán người sử dụng cho kho

**Bước 1 –** Bấm chuột phải vào dòng kho, chọn **Người sử dụng**. Hộp **NGƯỜI SỬ DỤNG: <tên kho>** mở ra, liệt kê tài khoản với cột **Tài khoản**, **Họ và tên**, **Ghi chú**. Các tài khoản đang được dùng kho đã được tick sẵn.

**Bước 2 –** Tick các tài khoản được dùng kho này, bỏ tick tài khoản không còn dùng.

**Bước 3 –** Bấm **Lưu lại**. Hệ thống báo **Lưu lại thành công**. Từ lần tải danh sách kế tiếp, các tài khoản đó thấy kho trong ô chọn kho trên phiếu.

- **Tiêu đề NGƯỜI SỬ DỤNG: <tên kho>**: Ý nghĩa: Kho đang gán
- **Cột ô tick đầu dòng**: Ý nghĩa: Chọn / bỏ chọn tài khoản
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng

### Sửa, ngưng sử dụng, xoá

- **Sửa**: đổi được mọi trường trừ **Kho ngoài**. Sửa **NGHIỆP VỤ** là thay thế toàn bộ danh sách nghiệp vụ cũ bằng danh sách mới.
- **Ngưng sử dụng** (bỏ tick **Kích hoạt**): kho không còn hiện trong ô chọn kho khi lập phiếu mới. Tồn kho, phiếu cũ không đổi.
- **Xóa**: chỉ được khi kho **không còn** phiếu nào dùng và **không còn người sử dụng nào được gán** (xem phần “Những điều cần lưu ý”).

## 6. Giải thích các thông tin trên màn hình

- **Mã kho hàng**: Ý nghĩa: Mã nhận diện kho; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự, không có dấu cách, **không trùng** (không phân biệt chữ hoa / thường, kể cả kho đang Ngưng sử dụng)
- **Tên kho hàng**: Ý nghĩa: Tên hiển thị khi chọn kho; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự
- **SĐT**: Ý nghĩa: Điện thoại liên hệ của kho; Bắt buộc: Không; Lưu ý: Nhập tự do, không kiểm định dạng
- **Địa chỉ**: Ý nghĩa: Địa chỉ kho; Bắt buộc: Không
- **Nghiệp vụ**: Ý nghĩa: Phân loại kho theo nghiệp vụ sản xuất; Bắt buộc: Không; Lưu ý: Gồm 4 giá trị cố định ở Bước 3. Hiện các ô chọn kho trên phiếu chưa lọc theo nghiệp vụ
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Kho ngoài**: Ý nghĩa: Đánh dấu kho dùng chung / kho ngoài; Lưu ý: Mặc định không tick. **Khoá khi sửa**. Hiện chỉ để đánh dấu và hiện cột trên danh sách
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

## 7. Kiểm tra sau khi thực hiện

- Kho mới (Kích hoạt) chọn được ở mọi phiếu có hàng, **với những tài khoản được gán kho** (siêu quản trị luôn thấy).
- Kho **Ngưng sử dụng** biến khỏi các ô chọn kho khi lập phiếu mới. Phiếu cũ vẫn hiện đúng tên kho.
- Kho mới chưa có tồn. Tồn phát sinh khi có phiếu nhập (sổ tay Kho hàng).

## 8. Những điều cần lưu ý

⚠️ **Kho mới tạo chưa có ai được gán.** Tài khoản thường (không phải siêu quản trị) sẽ **không thấy kho này** trong danh sách lẫn ô chọn kho cho tới khi bạn gán **Người sử dụng**. Tạo kho xong, gán người ngay.

⚠️ **Kho đã có phiếu nhập, xuất, chuyển, mượn, điều chỉnh, kiểm kho… thì không xoá được.** Chuyển sang **Ngưng sử dụng**.

⚠️ **Kho còn người sử dụng được gán cũng không xoá được.** Kho chưa từng có phiếu vẫn có thể bị chặn xoá bởi danh sách người dùng; thao tác bỏ gán hết còn nghi lỗi (xem phần “Vướng mắc thường gặp”), nên nhờ IT kiểm tra thay vì tự lặp lại.

⚠️ **Ô Kho ngoài không sửa được sau khi lưu.** Nhập sai thì phải tạo kho mới, ngưng sử dụng kho cũ.

⚠️ **Ngưng sử dụng kho còn tồn:** kho biến khỏi ô chọn nên không lập được phiếu xuất hay chuyển hết tồn từ kho đó nữa. Chuyển hết tồn sang kho khác (Phiếu xuất chuyển kho) trước khi ngưng.

### "Mã đã tồn tại" 

Nguyên nhân: đã có kho cùng mã, kể cả kho đang **Ngưng sử dụng**.
Cách xử lý: dùng mã khác, hoặc tìm kho cũ rồi tick lại **Kích hoạt**.

### "Lỗi xóa.: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: kho đã nằm trên phiếu, hoặc còn tài khoản được gán **Người sử dụng**.
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá.

### Không thấy kho vừa tạo trong ô chọn kho trên phiếu 

Nguyên nhân: kho chưa gán cho tài khoản đang lập phiếu, hoặc kho đang **Ngưng sử dụng**.
Cách xử lý: ở màn **Kho hàng**, chuột phải kho → **Người sử dụng**, tick tài khoản đó; kiểm tra cột **Trạng thái**.

### Bỏ tick hết người sử dụng rồi bấm Lưu lại mà báo lỗi (Lỗi hệ thống)

Cách xử lý: để lại ít nhất một tài khoản; nhờ IT nếu thật sự cần gỡ hết.

## 10. Câu hỏi thường gặp

**Kho ngoài khác kho thường chỗ nào?**
Bài này đối chiếu được cờ Kho ngoài trên danh mục; tác động của cờ tại các luồng phiếu cần người phụ trách xác nhận trước khi kết luận chỉ dùng hiển thị.

**Nghiệp vụ dùng để làm gì?**
Gắn kho với loại hình sản xuất (giấy, keo, ván). Hiện các phiếu chưa lọc kho theo nghiệp vụ; kho không gắn nghiệp vụ nào vẫn hiện bình thường.

**Tôi là siêu quản trị, có cần gán người sử dụng cho mình không?**
Không. Siêu quản trị luôn thấy mọi kho.

## 11. Công việc tiếp theo

```text
Kho mới → Người sử dụng (gán cho thủ kho, kế toán kho)
        → Nhập tồn đầu / lập Phiếu nhập kho (sổ tay Kho hàng)
```

**Tiếp theo:** sổ tay Kho hàng – Phiếu nhập kho.

## 12. Bài hướng dẫn liên quan

- Sổ tay Kho hàng – Phiếu nhập kho, Phiếu xuất kho, Phiếu xuất chuyển kho, Phiếu điều chỉnh kho
- Sổ tay Kho hàng – Mượn hàng (kho xuất, kho nhập)
- Sổ tay Hệ thống – Người dùng (tài khoản được gán)
