---
title: "HƯỚNG DẪN ĐỒNG BỘ KHÁCH HÀNG SANG CHI NHÁNH KHÁC"
date: "2026-11-07"
summary: "Mỗi chi nhánh (HN, GP, HG) có dữ liệu riêng, nên trước đây một khách hàng phải nhập tay ở cả 3 nơi."
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

Mỗi chi nhánh (HN, GP, HG) có dữ liệu riêng, nên trước đây một khách hàng phải nhập tay ở cả 3 nơi. Nút **Đồng bộ** cho phép **tạo khách hàng một lần ở HN** rồi đưa sang chi nhánh khác:

- **Cách 1 – Đẩy thẳng** (chỉ làm ở HN): chọn chi nhánh nhận rồi bấm **Đẩy**, hệ thống tự gửi sang.
- **Cách 2 – Qua file**: ở HN bấm **Xuất file** để tải một file `.json`; ở chi nhánh nhận mở cùng hộp, **Chọn file để nhập**, **Xem trước** rồi **Áp dụng**. Dùng khi chi nhánh nhận không kết nối được.

Hệ thống **khớp khách hàng theo mã khách hàng**. Gói gửi đi tự kèm **nhóm khách hàng**, **loại khách hàng** và **khách hàng chính** của các khách hàng đó, rồi gắn lại khách hàng chính theo mã ở chi nhánh nhận.

HN là **chi nhánh nguồn**: dữ liệu chỉ đi một chiều HN → GP / HG. Chức năng **không đồng bộ việc xoá**.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Truy cập tên miền nguồn bằng tài khoản nguồn; người nhận mở tên miền đích bằng tài khoản riêng của hệ thống đó. Mỗi hệ thống có dữ liệu và tài khoản độc lập; đồng bộ không phải chuyển chi nhánh trong phiên.
- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- **Mã khách hàng thống nhất giữa các chi nhánh**: cùng một mã phải là cùng một khách hàng. Trước lần đồng bộ đầu tiên, IT rà các mã trùng nhưng khác tên giữa các chi nhánh.
- Muốn đẩy thẳng: IT đã khai báo các chi nhánh nhận trong cổng tích hợp. Nếu chưa, hộp báo **Chưa khai chi nhánh nhận trong cổng tích hợp (integration.partner).**

## 2. Mở chức năng

**Khách hàng → Khách hàng → Đồng bộ**

## 3. Nhận biết màn hình

Nút **Đồng bộ** nằm trên thanh công cụ của danh sách khách hàng (Hình 1,).

![Hình 1: Nút Đồng bộ trên danh sách khách hàng](/posts/2026-11-07-tl-c03-3-huong-dan-dong-bo-khach-hang-sang-chi-nhanh-khac/hinh-01-nut-dong-bo.png)

Bấm nút, hộp **ĐỒNG BỘ KHÁCH HÀNG SANG CHI NHÁNH KHÁC** mở ra (Hình 2, chụp ở chi nhánh nhận):

![Hình 2: Hộp đồng bộ khách hàng ở chi nhánh nhận](/posts/2026-11-07-tl-c03-3-huong-dan-dong-bo-khach-hang-sang-chi-nhanh-khac/hinh-02-hop-dong-bo.png)

- **Dữ liệu (cho đẩy và xuất file)**: Ý nghĩa: Gửi **Tất cả khách hàng** hay chỉ **Các dòng đang chọn / đang lọc trên lưới**
- **Khi chi nhánh nhận đã có cùng mã**: Ý nghĩa: **Bỏ qua, chỉ thêm mã chưa có** hoặc **Ghi đè theo dữ liệu gửi đi**
- **Thông báo chi nhánh nhận**: Ý nghĩa: Chỉ hiện ở GP / HG. Ở HN, chỗ này là khung **1. Đẩy thẳng sang chi nhánh** (phần “Thực hiện trên phần mềm”, Bước 3)
- **2. Qua file (khi không đẩy thẳng được)**: Ý nghĩa: **Xuất file** và **Chọn file để nhập**
- **Đóng**: Ý nghĩa: Đóng hộp. Nếu vừa nhập xong, danh sách khách hàng tự tải lại

## 4. Trình tự công việc

```text
Ở HN: Danh sách khách hàng → (chọn / lọc dòng nếu chỉ gửi một phần) → Đồng bộ
   ├── Cách 1 – Đẩy thẳng: tick GP / HG → Đẩy → Xác nhận đẩy
   │                        → xem bảng "Lần gửi gần đây"
   └── Cách 2 – Qua file:   Xuất file (.json) → gửi file cho chi nhánh nhận
Ở GP / HG: Danh sách khách hàng → Đồng bộ → Chọn file để nhập
           → Xem trước → Áp dụng → Đồng ý → "Đã nhập gói đồng bộ"
```

### Bước 1 – Chọn dữ liệu cần gửi (ở HN)

1. Ở danh sách khách hàng, nếu chỉ muốn gửi một phần thì tick chọn các dòng, hoặc lọc / tìm trên lưới (Hình 3,). Không chọn, không lọc thì chỉ gửi được tất cả.
2. Bấm **Đồng bộ**. Ở mục **Dữ liệu**, chọn **Tất cả khách hàng** hoặc **Các dòng đang chọn / đang lọc trên lưới (N dòng)** (Hình 3,). Hộp luôn mở sẵn ở **Tất cả khách hàng**, nên muốn gửi một phần thì phải chọn lại.

![Hình 3: Gửi các dòng đang chọn trên lưới](/posts/2026-11-07-tl-c03-3-huong-dan-dong-bo-khach-hang-sang-chi-nhanh-khac/hinh-03-chon-dong-dang-loc.png)

Có dòng đang được tick thì hệ thống lấy **các dòng đang chọn**. Không tick dòng nào thì lấy **các dòng đang lọc**.

### Bước 2 – Chọn cách xử lý khi trùng mã

Ở mục **Khi chi nhánh nhận đã có cùng mã**:

- **Bỏ qua, chỉ thêm mã chưa có** (mặc định): khách hàng đã có ở chi nhánh nhận giữ nguyên, chỉ thêm khách hàng mới.
- **Ghi đè theo dữ liệu gửi đi**: khách hàng đã có được sửa theo dữ liệu của HN.

### Bước 3 – Cách 1: Đẩy thẳng (chỉ ở HN)

1. Trong khung **1. Đẩy thẳng sang chi nhánh**, tick các chi nhánh nhận (ví dụ **GP – …**, **HG – …**).
2. Bấm **Đẩy**. Hộp **Xác nhận đẩy** hỏi **Đẩy khách hàng sang GP, HG (chỉ thêm mã chưa có)?**. Nếu đang chọn ghi đè thì câu hỏi ghi **GHI ĐÈ dữ liệu trùng mã ở chi nhánh nhận**. Bấm đồng ý.
3. Hệ thống báo **Đã xếp gửi sang N chi nhánh. Xem trạng thái ở bảng bên dưới.**
4. Bảng **Lần gửi gần đây** cho biết từng lần gửi: **Đã nhận**, **Đang chờ gửi** hoặc **Hỏng (ngừng gửi)**, kèm số lần thử và lỗi. Bấm **Tải lại** để cập nhật.

Khung này chỉ hiện ở HN, với tài khoản có quyền **Đẩy sang chi nhánh khác**.

### Bước 4 – Cách 2: Xuất file (ở HN)

Bấm **Xuất file** (Hình 4,). Trình duyệt tải về file `dongbo_khachhang_<mã chi nhánh>_<năm tháng ngày>_<giờ phút>.json`, ví dụ `dongbo_khachhang_HN_20261012_1530.json`. Gửi file này cho người phụ trách ở chi nhánh nhận. **Không sửa nội dung file.**

### Bước 5 – Nhập file và xem trước (ở GP / HG)

1. Ở danh sách khách hàng của chi nhánh nhận, bấm **Đồng bộ**, chọn cách xử lý trùng mã như Bước 2.
2. Bấm **Chọn file để nhập** (Hình 4,) và chọn file nhận từ HN. Tên file hiện bên cạnh , chân hộp hiện thêm **Xem trước**  và **Áp dụng** .

![Hình 4: Đã chọn file – nút Xem trước và Áp dụng ở chân hộp](/posts/2026-11-07-tl-c03-3-huong-dan-dong-bo-khach-hang-sang-chi-nhanh-khac/hinh-04-chon-file-nhap.png)

3. Bấm **Xem trước**. Hệ thống chạy thử, **chưa ghi gì**, và hiện bảng **Xem trước (chưa ghi gì)** (Hình 5): mỗi danh mục bao nhiêu dòng sẽ **Thêm mới**, **Cập nhật**, **Bỏ qua** , cùng các dòng **không nhập được** và lý do .

![Hình 5: Kết quả xem trước, có 1 dòng không nhập được](/posts/2026-11-07-tl-c03-3-huong-dan-dong-bo-khach-hang-sang-chi-nhanh-khac/hinh-05-ket-qua-xem-truoc.png)

### Bước 6 – Áp dụng

1. Kiểm tra bảng xem trước rồi bấm **Áp dụng**. Hộp **Xác nhận nhập** hỏi **Áp gói <tên file> vào chi nhánh này?** (Hình 6). Bấm **Đồng ý**.

![Hình 6: Xác nhận nhập gói](/posts/2026-11-07-tl-c03-3-huong-dan-dong-bo-khach-hang-sang-chi-nhanh-khac/hinh-06-xac-nhan-nhap.png)

2. Hệ thống báo **Đã nhập gói đồng bộ** (Hình 7,). Bảng kết quả đổi tiêu đề thành **Đã nhập** .

![Hình 7: Đã nhập gói đồng bộ](/posts/2026-11-07-tl-c03-3-huong-dan-dong-bo-khach-hang-sang-chi-nhanh-khac/hinh-07-da-nhap.png)

3. Bấm **Đóng**. Danh sách khách hàng tự tải lại và có thêm các khách hàng vừa nhập.

Ví dụ ghi đè: chọn **Ghi đè theo dữ liệu gửi đi** rồi **Xem trước** (Hình 8). Khách hàng có thông tin khác với HN được tính **Cập nhật** . Nhóm, loại giống hệt nhau vẫn tính **Bỏ qua** .

![Hình 8: Xem trước ở chế độ ghi đè](/posts/2026-11-07-tl-c03-3-huong-dan-dong-bo-khach-hang-sang-chi-nhanh-khac/hinh-08-ghi-de-xem-truoc.png)

## 6. Giải thích các thông tin trên màn hình

- **Dữ liệu**: Giá trị: **Tất cả khách hàng** / **Các dòng đang chọn / đang lọc trên lưới (N dòng)**; Lưu ý: Áp dụng cho **Đẩy** và **Xuất file**. Lựa chọn thứ hai mờ đi khi lưới không chọn, không lọc
- **Khi chi nhánh nhận đã có cùng mã**: Giá trị: **Bỏ qua, chỉ thêm mã chưa có** / **Ghi đè theo dữ liệu gửi đi**; Lưu ý: Áp dụng cho **Đẩy** và **nhập file**
- **Chi nhánh nhận**: Giá trị: Ô tick theo chi nhánh; Lưu ý: Chỉ có ở HN

Gói khách hàng gồm:

- **Nhóm khách hàng**: Nội dung: Các nhóm mà khách hàng trong gói đang dùng
- **Loại khách hàng**: Nội dung: Các loại mà khách hàng trong gói đang dùng
- **Khách hàng**: Nội dung: Các khách hàng được chọn và khách hàng chính của chúng: mã, tên, tên rút gọn, mã số thuế, địa chỉ, địa chỉ giao hàng, điện thoại, email, người đại diện, chức vụ, tài khoản ngân hàng, số ngày nợ, định mức công nợ, cá nhân / tổ chức, trạng thái, ghi chú…; nhóm, loại, khách hàng chính ghi bằng **mã**

Bảng kết quả:

- **Thêm mới**: Ý nghĩa: Mã chưa có ở chi nhánh nhận, được thêm
- **Cập nhật**: Ý nghĩa: Mã đã có, chế độ ghi đè, thông tin khác với gói, được sửa
- **Bỏ qua**: Ý nghĩa: Mã đã có và (chế độ **Bỏ qua**, hoặc thông tin giống hệt) nên không đổi

## 7. Kiểm tra sau khi thực hiện

- Chi nhánh nhận có thêm khách hàng mới, nhóm và loại mới theo đúng mã của HN.
- Khách hàng mới nhận **chi nhánh của nơi nhập**, người tạo là người bấm **Áp dụng** (khi nhập file) hoặc người IT cấu hình HN trong cổng tích hợp (khi đẩy thẳng).
- Khi ghi đè: thông tin khách hàng đổi theo HN; **chi nhánh, người tạo, ngày tạo giữ nguyên**, ghi thêm người sửa và ngày sửa.
- Khách hàng chính được gắn lại theo mã.

## 8. Những điều cần lưu ý

⚠️ **Ghi đè làm mất các chỉnh sửa riêng ở chi nhánh nhận.** Thông tin đã sửa ở GP / HG bị thay bằng dữ liệu của HN. Luôn bấm **Xem trước** và đọc cột **Cập nhật** trước khi **Áp dụng**.

⚠️ **Khớp theo mã.** Nếu một mã ở HN và ở chi nhánh nhận là hai khách hàng khác nhau, ghi đè sẽ ghi sai khách hàng. Rà mã trùng trước lần đầu (xem phần “Chuẩn bị trước khi thực hiện”).

⚠️ **Áp dụng không hoàn tác được.** **Xem trước** thì không ghi gì, bấm bao nhiêu lần cũng được.

⚠️ **Không đồng bộ xoá.** Xoá khách hàng ở HN không xoá ở chi nhánh nhận.

⚠️ Dòng nào lỗi thì chỉ dòng đó không nhập; các dòng khác vẫn nhập bình thường.

⚠️ Hộp luôn mở sẵn ở **Tất cả khách hàng**. Muốn gửi một phần, chọn lại mục **Dữ liệu** mỗi lần.

### "File không phải gói đồng bộ khách hàng – NCC" 

Nguyên nhân: file chọn không phải file xuất từ nút **Đồng bộ**, hoặc đã bị sửa.
Cách xử lý: xin lại file gốc từ HN.

### "Không có nhóm khách hàng …" / "Không có loại khách hàng …" (Lỗi dữ liệu)

Nguyên nhân: khách hàng gắn nhóm / loại không có trong gói và cũng chưa có ở chi nhánh nhận (thường do file đã bị sửa, hoặc nhóm bị xoá ở HN).
Cách xử lý: ở HN gắn lại nhóm / loại đúng cho khách hàng rồi xuất lại; hoặc tạo nhóm / loại cùng mã ở chi nhánh nhận rồi nhập lại.

### "Tên rút gọn … đã dùng cho khách hàng khác" (Lỗi dữ liệu)

Nguyên nhân: ở chi nhánh nhận, một khách hàng mã khác đã dùng tên rút gọn này.
Cách xử lý: đổi tên rút gọn ở một trong hai bên cho khác nhau rồi nhập lại.

### "Không có khách hàng chính …" (Lỗi dữ liệu)

Nguyên nhân: gói tự kèm khách hàng chính **một cấp**. Nếu khách hàng chính lại có khách hàng chính của nó (nhiều cấp), cấp trên cùng có thể không nằm trong gói và chưa có ở chi nhánh nhận.
Cách xử lý: chọn thêm cả các dòng khách hàng chính cấp trên rồi gửi lại, hoặc gửi **Tất cả khách hàng**.

### "Chọn ít nhất 1 chi nhánh nhận" 

Nguyên nhân: bấm **Đẩy** khi chưa tick chi nhánh nào.
Cách xử lý: tick chi nhánh nhận rồi bấm lại.

### Trạng thái "Hỏng (ngừng gửi)" ở bảng Lần gửi gần đây (Lỗi kết nối)

Nguyên nhân: chi nhánh nhận không nhận được sau nhiều lần tự gửi lại.
Cách xử lý: báo IT kiểm tra kết nối; trong lúc chờ, dùng **Cách 2 – Qua file**.

## 10. Câu hỏi thường gặp

**Sao ở GP / HG không thấy khung Đẩy thẳng?**
Chỉ HN (chi nhánh nguồn) được đẩy. GP / HG chỉ nhận, hoặc nhập file.

**Không thấy nút Đồng bộ?**
Tài khoản chưa có quyền **Xuất / nhập file đồng bộ** (xem phần “Chuẩn bị trước khi thực hiện”).

**Nhập cùng một file hai lần có sao không?**
Ở chế độ **Bỏ qua**, mã đã có được bỏ qua. Ở chế độ **Ghi đè**, dữ liệu giống gói được bỏ qua, nhưng các chỉnh sửa phát sinh ở nơi nhận sau lần nhập trước có thể bị ghi đè khi nhập lại. Luôn xem trước số **Cập nhật** trước mỗi lần áp dụng.

**File xuất ở trang Khách hàng có chứa nhà cung cấp không?**
Không. Đồng bộ nhà cung cấp làm ở trang Nhà cung cấp ([HƯỚNG DẪN ĐỒNG BỘ NHÀ CUNG CẤP SANG CHI NHÁNH KHÁC](/bai-viet/2026-11-07-tl-b02-4-huong-dan-dong-bo-nha-cung-cap-sang-chi-nhanh-khac/)).

**Sửa khách hàng ở HN thì chi nhánh khác có tự đổi theo không?**
Không. Phải đồng bộ lại với chế độ **Ghi đè theo dữ liệu gửi đi**.

## 11. Công việc tiếp theo

```text
Đồng bộ khách hàng → kiểm tra ở danh sách khách hàng của chi nhánh nhận
                   → đồng bộ nhà cung cấp (TL-B02.4) nếu cần
```

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN ĐỒNG BỘ NHÀ CUNG CẤP SANG CHI NHÁNH KHÁC](/bai-viet/2026-11-07-tl-b02-4-huong-dan-dong-bo-nha-cung-cap-sang-chi-nhanh-khac/) – Đồng bộ nhà cung cấp sang chi nhánh khác
- [HƯỚNG DẪN IMPORT KHÁCH HÀNG TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-c03-2-huong-dan-import-khach-hang-tu-excel-anh/) – Import khách hàng từ Excel / ảnh
