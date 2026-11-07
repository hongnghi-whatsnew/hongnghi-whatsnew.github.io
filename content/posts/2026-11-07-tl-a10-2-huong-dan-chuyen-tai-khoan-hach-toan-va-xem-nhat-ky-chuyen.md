---
title: "HƯỚNG DẪN CHUYỂN TÀI KHOẢN HẠCH TOÁN VÀ XEM NHẬT KÝ CHUYỂN"
date: "2026-11-07"
summary: "Khi chứng từ đã hạch toán vào tài khoản chi tiết sai (ví dụ chi phí vận chuyển hạch toán nhầm vào chi phí quản lý), dùng Chuyển tài khoản hạch toán để chuyển phát sinh từ một hay nhiều tài khoản nguồn sang một tài khoản đích đúng."
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

Khi chứng từ đã hạch toán vào **tài khoản chi tiết sai** (ví dụ chi phí vận chuyển hạch toán nhầm vào chi phí quản lý), dùng **Chuyển tài khoản hạch toán** để chuyển phát sinh từ một hay nhiều tài khoản **nguồn** sang một tài khoản **đích** đúng.

Nguyên tắc của chức năng:

- **Không sửa bút toán đã ghi sổ.** Hệ thống **lập thêm bút toán điều chỉnh** Nợ tài khoản đích / Có tài khoản nguồn (ngược lại nếu phát sinh thuần bên Có). Bút toán điều chỉnh làm tăng phát sinh Nợ và Có theo số tiền điều chỉnh; không nên hiểu tổng phát sinh gộp trên sổ cái là không đổi. Cần đối chiếu tổng Nợ bằng tổng Có và phần số liệu chuyển giữa các tài khoản.
- Chỉ chuyển giữa tài khoản **chi tiết**, **đang sử dụng**, **cùng loại**, **cùng tính chất số dư**, **không theo dõi ngoại tệ**.
- Mỗi lần chuyển là một **phiên** mã `CTK-<năm tháng ngày>-<số thứ tự>`, ghi vào tab **Nhật ký chuyển tài khoản**, **hoàn tác được** khi điều kiện cho phép.
- Chạy trong **một giao dịch**: lỗi ở đâu thì hoàn lại toàn bộ.

Hộp **Chuyển tài khoản hạch toán** có 4 bước: **Chọn tài khoản**, **Phạm vi & cách xử lý**, **Xem trước ảnh hưởng**, **Xác nhận**, rồi màn **Kết quả chuyển tài khoản**. Ba bước đầu **chưa ghi gì vào sổ**.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đã biết **tài khoản nguồn** (dùng sai) và **tài khoản đích** (đúng); hai tài khoản cùng loại, cùng tính chất số dư (ví dụ 811 → 642: được; 331 → 642: bị chặn).
- Nếu muốn ghi bút toán điều chỉnh vào kỳ đã khoá: kế toán trưởng phải **mở khoá kỳ** ở màn **Kỳ kế toán** (KT-A01), hoặc chọn cách "lập chứng từ điều chỉnh ở kỳ đang mở" (Bước 2).
- Mỗi chi nhánh có ít nhất một **kỳ đang mở** cùng năm (khi chọn xử lý kỳ đã khoá bằng điều chỉnh).

## 2. Mở chức năng

**Thiết lập danh mục → Hệ thống tài khoản → Chuyển tài khoản hạch toán**

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

![Hình 1: Bước 1 chuyển tài khoản: chưa chọn nguồn/đích, chưa ghi vào sổ](/posts/2026-11-07-tl-a10-2-huong-dan-chuyen-tai-khoan-hach-toan-va-xem-nhat-ky-chuyen/hinh-01-buoc-1-chon-tai-khoan.png)

- **Thanh 4 bước**: Ý nghĩa: **Chọn tài khoản**, **Phạm vi & cách xử lý**, **Xem trước ảnh hưởng**, **Xác nhận**
- **Từ tài khoản (nguồn)**: Ý nghĩa: Bảng tài khoản (ô tick, **Số TK**, **Tên tài khoản**, **Tính chất**, **PS Nợ <năm>**). Tài khoản tổng hợp có ổ khoá, không chọn được. Ô **Tìm theo số, tên tài khoản**
- **Đến tài khoản (đích)**: Ý nghĩa: Ô **Tài khoản đích** (bắt buộc), thẻ thông tin tài khoản đích
- **Kiểm tra tương thích**: Ý nghĩa: Danh sách điều kiện: đạt, bị chặn, cần xử lý
- **Thanh chân hộp**: Ý nghĩa: **Hủy**, **Tiếp tục** (**Xem trước** ở bước 2), **Quay lại**

## 4. Trình tự công việc

```text
1 Chọn tài khoản nguồn (nhiều) + đích → Kiểm tra tương thích
   ↓
2 Phạm vi ngày + cách xử lý kỳ khoá + ánh xạ + TK nguồn sau khi chuyển
   ↓
3 Xem trước: bút toán sẽ lập, chứng từ ảnh hưởng, số liệu trước / sau
   ↓
4 Lý do + tick "đã đối chiếu" → Thực hiện → Xác nhận
   ↓
Kết quả: phiên CTK-… (Hoàn tác / Xem nhật ký / Đóng)
   ↓
Nhật ký chuyển tài khoản ──► Hoàn tác (nếu còn điều kiện)
```

### Bước 1 – Chọn tài khoản

1. Ở bảng **Từ tài khoản (nguồn)**, tick một hoặc nhiều tài khoản chi tiết dùng sai (chọn nhiều để gộp về một). Có thể gõ số hoặc tên vào ô tìm.
2. Ở **Tài khoản đích**, chọn tài khoản đúng. Tài khoản đích tự bỏ khỏi danh sách nguồn.
3. Đọc mục **Kiểm tra tương thích**. Hệ thống chạy lại mỗi lần bạn đổi lựa chọn:
   - **Đạt**: ví dụ "Cùng loại …, cùng tính chất …", "Cùng không theo dõi ngoại tệ".
   - **Bị chặn**: phải xử lý mới **Tiếp tục** được (bảng thông báo ở phần “Vướng mắc thường gặp”).
   - **Cần xử lý**: tài khoản bắt buộc **Khoản mục chi phí** nhưng có dòng nguồn chưa có khoản mục. Chọn **Khoản mục chi phí** để gán cho các dòng đó (hệ thống gợi ý sẵn khoản mục "chưa phân loại").
4. Thanh dưới hiện **Đã chọn n tài khoản**, số chứng từ, số dòng bút toán, **PS Nợ** của các tài khoản nguồn. Bấm **Tiếp tục**.

### Bước 2 – Phạm vi và cách xử lý

1. **Phạm vi thời gian**: chọn khoảng ngày (mặc định từ đầu năm đến hôm nay). **Phạm vi phải nằm trong cùng một năm.** Dải chip **T01, T02…** cho biết từng kỳ **Đang mở**, **Đã khóa** hay **Khóa một phần**.
2. **Cách xử lý kỳ đang mở**: cố định là **Lập bút toán điều chỉnh trong từng kỳ**, giữ nguyên chứng từ gốc, giữ khoản mục và đối tượng của từng dòng.
3. **Cách xử lý kỳ đã khóa sổ** (chỉ hiện khi trong phạm vi có phát sinh ở kỳ đã khoá):
   - **Lập một chứng từ điều chỉnh ở kỳ đang mở**: mặc định. Gộp phát sinh các kỳ khoá thành một bút toán ở **kỳ mở sớm nhất** cùng năm, sau kỳ khoá cuối cùng. Chứng từ kỳ cũ giữ nguyên.
   - **Không xử lý kỳ đã khóa**: phát sinh kỳ khoá vẫn nằm ở tài khoản nguồn; khi đó **không ngưng sử dụng được** tài khoản nguồn.
4. **Dữ liệu đi kèm**: tick **Cập nhật ánh xạ hạch toán tự động (n)** (mặc định tick) để các chỗ đang trỏ tới tài khoản nguồn trong **Cấu hình hạch toán** (nội dung thu chi, quỹ tài khoản, loại hàng hoá…) đổi sang tài khoản đích, để chứng từ sau này không sinh lại tài khoản cũ. Nếu công thức báo cáo (chỉ tiêu) khác nhau giữa tài khoản nguồn và đích, hệ thống cảnh báo "Số liệu sẽ chuyển sang chỉ tiêu khác trên báo cáo".
5. **Sau khi chuyển, tài khoản nguồn**: **Ngưng sử dụng** (mặc định), hoặc **Giữ nguyên**. **Xóa tài khoản** luôn bị tắt vì tài khoản nguồn vẫn còn dòng phát sinh. Mục **Ngưng sử dụng** tự tắt kèm lý do khi tài khoản nguồn còn số liệu ngoài phạm vi, còn bút toán nháp, hoặc chọn **Không xử lý kỳ đã khóa**.
6. Bấm **Xem trước**.

- **Phạm vi thời gian và dải chip kỳ**: Ý nghĩa: Khoảng ngày, trạng thái từng kỳ
- **Cách xử lý kỳ đã khóa sổ**: Ý nghĩa: Chỉ hiện khi có phát sinh kỳ khoá
- **Dữ liệu đi kèm**: Ý nghĩa: Tick cập nhật ánh xạ hạch toán
- **Sau khi chuyển, tài khoản nguồn**: Ý nghĩa: Ngưng sử dụng / Giữ nguyên

### Bước 3 – Xem trước ảnh hưởng

Hệ thống tính nhưng **chưa ghi gì** (chân hộp ghi "chưa ghi gì vào sổ"):

- Bốn ô tổng: **Điều chỉnh · kỳ mở**, **Chứng từ điều chỉnh mới**, **Kỳ đã khóa · giữ nguyên**, **Danh mục**.
- Bảng **Phát sinh theo kỳ**: kỳ, chi nhánh (nếu nhiều chi nhánh), trạng thái, số chứng từ, **PS Nợ**, **Cách xử lý** (**Điều chỉnh trong kỳ** / **Vào CT điều chỉnh** / **Không xử lý**).
- Bảng **Trước và sau · PS Nợ thuần trong phạm vi**: từng tài khoản nguồn và đích, **Trước**, **Sau**, **Chênh lệch**; tổng không đổi.
- **Chứng từ bị ảnh hưởng**: danh sách bút toán gốc (**Xem đủ n chứng từ** nếu nhiều), kỳ khoá có nhãn **Kỳ khóa**.
- **Bút toán điều chỉnh sẽ lập**: từng bút toán (ngày hạch toán, kỳ, chi nhánh, Nợ / Có, số dòng, số tiền), ghi "Chưa cấp số".

Đối chiếu số liệu rồi bấm **Tiếp tục**.

- **Bốn ô tổng**: Ý nghĩa: Quy mô điều chỉnh
- **Phát sinh theo kỳ**: Ý nghĩa: Cách xử lý từng kỳ
- **Trước và sau**: Ý nghĩa: Số liệu trước, sau khi chuyển
- **Bút toán điều chỉnh sẽ lập**: Ý nghĩa: Các bút toán sắp ghi sổ

### Bước 4 – Xác nhận và thực hiện

1. Mục **Hệ thống sẽ thực hiện** liệt kê các việc: lập và ghi sổ các bút toán điều chỉnh; cập nhật ánh xạ; ngưng sử dụng tài khoản nguồn.
2. Nhập **Lý do điều chỉnh** (bắt buộc, tối đa 1000 ký tự). Lý do ghi vào diễn giải bút toán và nhật ký.
3. Tick **Tôi đã đối chiếu số liệu ở bước Xem trước**.
4. Bấm **Thực hiện**. Hộp **Xác nhận** hỏi "Chuyển phát sinh của … sang …: lập n bút toán điều chỉnh, tổng …?" Bấm đồng ý.

### Kết quả và hoàn tác

Thành công hiện **Đã chuyển xong**, mã phiên `CTK-…`, thời điểm, người thực hiện; liệt kê các bút toán đã **Ghi sổ bút toán điều chỉnh**, ánh xạ đã cập nhật, tài khoản đã ngưng sử dụng, dòng **Đối chiếu sau chuyển: khớp**. Ba nút: **Hoàn tác** (nếu còn điều kiện), **Xem nhật ký**, **Đóng**.

**Hoàn tác**: bấm **Hoàn tác** ở màn kết quả hoặc ở dòng phiên trong tab **Nhật ký chuyển tài khoản**. Hộp **Hoàn tác phiên** hỏi "Hoàn tác phiên …? Hệ thống lập bút toán đảo cho các bút toán điều chỉnh, trả lại ánh xạ và trạng thái tài khoản như trước khi chuyển." Bấm **Hoàn tác** (nút đỏ) hoặc **Hủy**. Hoàn tác xong phiên chuyển sang **Đã hoàn tác** và hiện **Đã hoàn tác**.

### Tab Nhật ký chuyển tài khoản

Chọn khoảng ngày (mặc định từ đầu năm), bấm **Tải lại** khi cần. Bảng có cột **Mã phiên**, **Thời điểm**, **Từ → Đến**, **Phạm vi**, **Kết quả**, **Số tiền**, **Người thực hiện**, **Trạng thái**, **Thao tác** (nút **Hoàn tác** nếu hoàn tác được). Mở rộng một dòng để xem **Bút toán**, **Danh mục** (ánh xạ, tài khoản ngưng) và **Lý do**. Chân bảng ghi số phiên.

![Hình 6: Nhật ký chuyển tài khoản chưa có phiên trong khoảng ngày đang chọn](/posts/2026-11-07-tl-a10-2-huong-dan-chuyen-tai-khoan-hach-toan-va-xem-nhat-ky-chuyen/hinh-06-nhat-ky.png)

## 6. Giải thích các thông tin trên màn hình

- **Tài khoản nguồn**: Ý nghĩa: Tài khoản dùng sai (một hoặc nhiều); Bắt buộc: Có; Lưu ý: Chỉ tài khoản chi tiết, đang sử dụng, không theo dõi ngoại tệ
- **Tài khoản đích**: Ý nghĩa: Tài khoản đúng; Bắt buộc: Có; Lưu ý: Cùng loại và tính chất số dư với nguồn; không nằm trong nguồn
- **Khoản mục chi phí**: Ý nghĩa: Khoản mục gán cho dòng thiếu khoản mục; Bắt buộc: Khi hệ thống yêu cầu; Lưu ý: Chỉ hiện khi tài khoản bắt buộc khoản mục chi phí
- **Phạm vi thời gian**: Ý nghĩa: Từ ngày – đến ngày; Bắt buộc: Có; Lưu ý: Cùng một năm, từ ngày không sau đến ngày
- **Cách xử lý kỳ đã khóa sổ**: Ý nghĩa: **Lập một chứng từ điều chỉnh ở kỳ đang mở** / **Không xử lý kỳ đã khóa**; Bắt buộc: Có (khi có kỳ khoá)
- **Cập nhật ánh xạ hạch toán tự động**: Ý nghĩa: Đổi các chỗ trỏ tài khoản nguồn sang đích; Lưu ý: Mặc định tick
- **Sau khi chuyển, tài khoản nguồn**: Ý nghĩa: **Ngưng sử dụng** / **Giữ nguyên**; Lưu ý: **Xóa tài khoản** luôn tắt
- **Lý do điều chỉnh**: Ý nghĩa: Lý do nghiệp vụ; Bắt buộc: Có; Lưu ý: Tối đa 1000 ký tự
- **Tôi đã đối chiếu số liệu ở bước Xem trước**: Ý nghĩa: Xác nhận đã đối chiếu; Bắt buộc: Có; Lưu ý: Không tick thì **Thực hiện** bị khoá

**Ngày hạch toán** của bút toán điều chỉnh trong kỳ P: lấy hôm nay, nhưng không trước đầu kỳ và không sau cuối kỳ P.

## 7. Kiểm tra sau khi thực hiện

- Mỗi (chi nhánh, kỳ) có một bút toán điều chỉnh đã **ghi sổ**: Nợ tài khoản đích / Có tài khoản nguồn (hoặc ngược lại), giữ khoản mục và đối tượng của từng dòng. Kỳ khoá (cách xử lý điều chỉnh) được gộp một bút toán mỗi chi nhánh.
- Chứng từ gốc **giữ nguyên**, số dư các tài khoản nguồn và đích đổi đúng số đã xem trước.
- Ánh xạ hạch toán đã tick được chuyển sang tài khoản đích; tài khoản nguồn chuyển **Ngưng kích hoạt** (nếu chọn).
- Có một phiên `CTK-…` trong **Nhật ký chuyển tài khoản**.

## 8. Những điều cần lưu ý

⚠️ **Hoàn tác chỉ khi mọi bút toán điều chỉnh của phiên còn ở kỳ đang mở.** Sau khi kế toán khoá sổ kỳ đó, nút **Hoàn tác** biến mất và hệ thống từ chối. Kiểm tra kỹ ở bước **Xem trước** trước khi khoá kỳ.

⚠️ **Hoàn tác theo thứ tự từ phiên mới nhất về cũ** nếu các phiên dùng chung tài khoản (ví dụ phiên A: 811 → 642, rồi phiên B: 642 → 6421: phải hoàn tác B trước A).

⚠️ **Không sửa được chứng từ kỳ đã khoá.** Lựa chọn **Lập một chứng từ điều chỉnh ở kỳ đang mở** đưa số vào kỳ mở sớm nhất; số liệu các kỳ khoá giữ nguyên, báo cáo kỳ đó không đổi.

⚠️ **Bút toán nháp** đang dùng tài khoản nguồn không được chuyển (chưa ghi sổ), và chặn **Ngưng sử dụng** tài khoản nguồn. Ghi sổ hoặc xoá bút toán nháp trước.

⚠️ Tài khoản theo dõi **ngoại tệ** chưa chuyển được bằng chức năng này; dùng chứng từ điều chỉnh thủ công.

⚠️ Khác loại hoặc khác tính chất số dư (ví dụ 331 → 642) là sai bản chất nghiệp vụ, hệ thống chặn; lập chứng từ điều chỉnh thủ công.

⚠️ Nếu công thức báo cáo của tài khoản nguồn và đích khác nhau, số liệu **chuyển sang chỉ tiêu khác** trên báo cáo tài chính. Đọc cảnh báo ở Bước 2.

⚠️ Hộp chuyển chỉ ghi nhận bút toán trong **sổ cái**. Chứng từ ngoài sổ cái (tài sản cố định, công cụ dụng cụ, chi phí trả trước, lương chưa ghi sổ cái) không sửa theo.

### "TK đích … đang nằm trong danh sách TK nguồn." 

Nguyên nhân: tài khoản đích trùng tài khoản nguồn.
Cách xử lý: bỏ tài khoản đó khỏi danh sách nguồn.

### "TK … là TK tổng hợp, chỉ chuyển được giữa các TK chi tiết." 

Nguyên nhân: chọn tài khoản có tài khoản con.
Cách xử lý: chọn tài khoản chi tiết (không có con).

### "TK … đã ngưng sử dụng. Bật lại trước khi chuyển." 

Nguyên nhân: tài khoản nguồn hoặc đích đang **Ngưng kích hoạt**.
Cách xử lý: ở cây tài khoản, bấm **Ngừng sử dụng** ở dòng đó để bật lại ([TỔNG QUAN MÀN HÌNH HỆ THỐNG TÀI KHOẢN](/bai-viet/2026-11-07-tl-a10-0-tong-quan-man-hinh-he-thong-tai-khoan/)), rồi chuyển.

### "TK đích … (…) khác loại với TK nguồn …. Sai bản chất nghiệp vụ: lập chứng từ điều chỉnh thủ công." / "TK nguồn … khác tính chất số dư với TK đích …." 

Nguyên nhân: tài khoản nguồn và đích khác loại (tài sản, nợ phải trả, vốn chủ, doanh thu, chi phí) hoặc khác tính chất số dư.
Cách xử lý: chọn tài khoản đích đúng loại, hoặc lập chứng từ điều chỉnh thủ công.

### "TK … theo dõi ngoại tệ, chưa chuyển hàng loạt được." 

Nguyên nhân: tài khoản nguồn hoặc đích có cờ **Hạch toán ngoại tệ**.
Cách xử lý: lập chứng từ điều chỉnh thủ công.

### "Phạm vi ngày phải nằm trong cùng một năm, từ ngày không sau đến ngày." 

Nguyên nhân: khoảng ngày vắt qua hai năm hoặc ngược.
Cách xử lý: chọn lại khoảng ngày trong một năm.

### "Chi nhánh … không có kỳ đang mở cùng năm, sau kỳ đã khóa, để lập chứng từ điều chỉnh. Mở kỳ ở Kỳ kế toán hoặc chọn "Không xử lý kỳ đã khóa"." 

Nguyên nhân: cách xử lý kỳ khoá bằng điều chỉnh nhưng chi nhánh đó không còn kỳ mở phù hợp.
Cách xử lý: nhờ kế toán trưởng mở kỳ ở **Kỳ kế toán**, hoặc chọn **Không xử lý kỳ đã khóa**.

### "Nhập lý do điều chỉnh." 

Nguyên nhân: bỏ trống **Lý do điều chỉnh**.
Cách xử lý: nhập lý do rồi **Thực hiện**.

### "Kỳ …/… của bút toán … đã khóa sổ, không hoàn tác được phiên …." 

Nguyên nhân: kỳ chứa bút toán điều chỉnh đã khoá sổ.
Cách xử lý: không hoàn tác được. Nếu cần sửa tiếp, lập phiên chuyển ngược (từ tài khoản đích về nguồn) ở kỳ đang mở.

### "Phiên … chuyển tiếp tài khoản của phiên …. Hoàn tác phiên đó trước." 

Nguyên nhân: có phiên sau dùng chung tài khoản.
Cách xử lý: hoàn tác phiên sau trước.

### "Không chuyển được, chưa có thay đổi nào được ghi vào sổ. …" / "Không hoàn tác được, chưa có thay đổi nào được ghi vào sổ. …" (Lỗi hệ thống)

Nguyên nhân: lỗi khi ghi (ví dụ kỳ bị khoá giữa chừng). Cả phiên hoàn lại, **không ghi gì**.
Cách xử lý: tải lại, làm lại từ Bước 1; báo IT nếu lặp lại.

## 10. Câu hỏi thường gặp

**Bấm Thực hiện rồi có chắc chắn không mất số liệu?**
Hệ thống không sửa bút toán cũ, chỉ thêm bút toán điều chỉnh, nên số liệu gốc còn nguyên. Hoàn tác lập bút toán đảo, cũng không xoá gì.

**Muốn gộp nhiều tài khoản nguồn về một tài khoản đích thì làm thế nào?**
Tick nhiều tài khoản ở bảng nguồn ở Bước 1.

**Tôi muốn chuyển số dư đầu kỳ?**
Chức năng chuyển phát sinh trong phạm vi ngày đã chọn. Số liệu ngoài phạm vi (trước từ ngày, sau đến ngày) không chuyển, và làm tài khoản nguồn **không ngưng sử dụng được**.

## 11. Công việc tiếp theo

```text
Chuyển xong → xem Sổ chi tiết tài khoản, Bảng cân đối phát sinh (sổ tay Kế toán)
            → nếu đã nộp báo cáo kết quả kinh doanh: lập lại báo cáo kỳ bị ảnh hưởng
            → chuyển nhầm: Hoàn tác (khi các kỳ chứa bút toán điều chỉnh còn mở)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH HỆ THỐNG TÀI KHOẢN](/bai-viet/2026-11-07-tl-a10-0-tong-quan-man-hinh-he-thong-tai-khoan/) – Tổng quan màn hình Hệ thống tài khoản
- [TỔNG QUAN MÀN HÌNH CẤU HÌNH HẠCH TOÁN](/bai-viet/2026-11-07-tl-a11-0-tong-quan-man-hinh-cau-hinh-hach-toan/) – Tổng quan màn hình Cấu hình hạch toán
- Sổ tay Kế toán – Kỳ kế toán, Sổ chi tiết tài khoản, Bảng cân đối phát sinh
