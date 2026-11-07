---
title: "HƯỚNG DẪN ĐIỀU CHỈNH GIÁ HÀNG LOẠT TRONG BẢNG GIÁ"
date: "2026-11-07"
summary: "Khi bảng giá có hàng trăm ô giá, Điều chỉnh giá giúp tăng hoặc giảm theo phần trăm và làm tròn trong một lần, thay vì sửa từng ô."
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

Khi bảng giá có hàng trăm ô giá, **Điều chỉnh giá** giúp tăng hoặc giảm theo phần trăm và làm tròn trong một lần, thay vì sửa từng ô. Hệ thống cho **xem trước** số ô sẽ đổi và cho **hoàn tác** lần điều chỉnh gần nhất.

Chức năng nằm trong cửa sổ bảng giá (bảng giá bán [HƯỚNG DẪN LẬP BẢNG GIÁ BÁN CHO KHÁCH HÀNG](/bai-viet/2026-11-07-tl-e02-1-huong-dan-lap-bang-gia-ban-cho-khach-hang/) và báo giá nhà cung cấp [HƯỚNG DẪN LẬP BÁO GIÁ NHÀ CUNG CẤP VÀ TẢI FILE BÁO GIÁ CỦA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-e02-2-huong-dan-lap-bao-gia-nha-cung-cap-va-tai-file-bao-gia-cua-nha-cung-cap/)). Điều chỉnh làm thay đổi đơn giá nên được tách thành bài riêng.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Mở cửa sổ bảng giá ở chế độ thêm mới hoặc sửa và đã có ô giá ([HƯỚNG DẪN LẬP BẢNG GIÁ BÁN CHO KHÁCH HÀNG](/bai-viet/2026-11-07-tl-e02-1-huong-dan-lap-bang-gia-ban-cho-khach-hang/), [HƯỚNG DẪN LẬP BÁO GIÁ NHÀ CUNG CẤP VÀ TẢI FILE BÁO GIÁ CỦA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-e02-2-huong-dan-lap-bao-gia-nha-cung-cap-va-tai-file-bao-gia-cua-nha-cung-cap/)).

## 2. Mở chức năng

**Bảng giá / báo giá → Bảng giá mua bán → (Thêm mới hoặc Sửa) → Thao tác → Điều chỉnh giá**

## 3. Nhận biết màn hình

![Hình 1: Tăng 5 phần trăm, làm tròn nghìn gần nhất và xem trước 1/1 ô sẽ đổi](/posts/2026-11-07-tl-e02-3-huong-dan-dieu-chinh-gia-hang-loat-trong-bang-gia/hinh-01-20261029-tl-e02-3-xem-truoc-5-phan-tram.png)

![Hình 2: Giá mẫu 51.300 đã được điều chỉnh thành 54.000 trong bản nháp](/posts/2026-11-07-tl-e02-3-huong-dan-dieu-chinh-gia-hang-loat-trong-bang-gia/hinh-02-20261029-tl-e02-3-ket-qua-54000.png)

![Hình 3: Hoàn tác đưa giá mẫu trở lại 51.300](/posts/2026-11-07-tl-e02-3-huong-dan-dieu-chinh-gia-hang-loat-trong-bang-gia/hinh-03-20261029-tl-e02-3-hoan-tac-51300.png)

- **Phạm vi**: Ý nghĩa: **Tất cả**, **Chỉ nhóm đang mở**, **Theo khổ**, **Ô đang chọn (n)**
- **Khổ**: Ý nghĩa: Hiện khi chọn **Theo khổ**; chọn khổ cần điều chỉnh
- **Tăng / giảm**: Ý nghĩa: Phần trăm, số dương là tăng, số âm là giảm
- **Làm tròn**: Ý nghĩa: Hai ô: mức (**Không làm tròn**, **Đồng (1)**, **Chục (10)**, **Trăm (100)**, **Nghìn (1.000)**) và hướng (**Gần nhất**, **Lên**, **Xuống**)
- **Dòng xem trước**: Ý nghĩa: Ví dụ "tăng 5%, làm tròn nghìn (1.000) gần nhất — 120/138 ô sẽ đổi giá."
- **Áp dụng, Hủy**: Ý nghĩa: Thực hiện / đóng không làm gì

Phạm vi nào hiện còn tuỳ tab đang mở: **Chỉ nhóm đang mở** chỉ có ở hai tab lưới (**Theo quy cách**, **Theo loại ván**); **Theo khổ** chỉ có khi tab có khổ (không có ở tab **Y/c gia công**); **Ô đang chọn** chỉ có khi đã chọn ô.

## 4. Trình tự công việc

```text
(Tuỳ chọn) Ctrl + bấm / Ctrl + kéo chọn các ô giá cần đổi
      ↓
Thao tác ▸ Điều chỉnh giá → chọn Phạm vi, Tăng / giảm, Làm tròn
      ↓
Đọc dòng xem trước → Áp dụng
      ↓
Kiểm tra giá → Lưu lại (hoặc Thao tác ▸ Hoàn tác điều chỉnh giá)
```

## 5. Thực hiện trên phần mềm

**Bước 1 –** Mở tab cần điều chỉnh. Muốn chỉ đổi một số ô: giữ **Ctrl** và bấm hoặc kéo qua các ô giá (ô được chọn tô nền; ở bảng **Theo hàng hóa** / **Y/c gia công** là ô **Đơn giá**). Chân cửa sổ hiện **Đã chọn N ô**; bấm **×** hoặc phím **Esc** để bỏ chọn.

**Bước 2 –** Bấm **Thao tác ▸ Điều chỉnh giá**. Nếu đã có ô được chọn, **Phạm vi** tự đặt là **Ô đang chọn (n)**.

**Bước 3 –** Chọn **Phạm vi**. Với **Theo khổ**, chọn thêm **Khổ**.

**Bước 4 –** Nhập **Tăng / giảm** (ví dụ 5% để tăng 5%, -3% để giảm 3%).

**Bước 5 –** Chọn mức và hướng **Làm tròn**. **Mặc định là làm tròn đến nghìn, gần nhất**: chỉ muốn tăng phần trăm mà không làm tròn thì chọn **Không làm tròn**.

**Bước 6 –** Đọc dòng xem trước (số ô sẽ đổi / tổng số ô trong phạm vi), rồi bấm **Áp dụng**. Hệ thống báo ví dụ **Đã tăng 5%, làm tròn nghìn (1.000) gần nhất cho 120 ô. Bấm Thao tác ▸ Hoàn tác để trả lại.** hoặc **Không có ô nào thay đổi.**

**Bước 7 –** Kiểm tra giá. Muốn trả lại, bấm **Thao tác ▸ Hoàn tác điều chỉnh giá** (báo **Đã hoàn tác lần điều chỉnh giá gần nhất.**). Hài lòng thì bấm **Lưu lại** (kiểm tra riêng của bảng giá: [HƯỚNG DẪN LẬP BẢNG GIÁ BÁN CHO KHÁCH HÀNG](/bai-viet/2026-11-07-tl-e02-1-huong-dan-lap-bang-gia-ban-cho-khach-hang/)).

**Ví dụ:** ô giá 51.300, tăng 5%, làm tròn nghìn gần nhất: 51.300 × 1,05 = 53.865 → **54.000**. Hướng **Xuống** cho 53.000, hướng **Lên** cho 54.000.

## 6. Giải thích các thông tin trên màn hình

- **Phạm vi**: Ý nghĩa: Ô nào bị đổi; Lưu ý: Xem phần “Nhận biết màn hình”
- **Tăng / giảm**: Ý nghĩa: Tỷ lệ phần trăm; Lưu ý: 0 = không đổi; thứ tự: tăng / giảm trước, làm tròn sau
- **Làm tròn – mức**: Ý nghĩa: Bội số làm tròn; Lưu ý: Mặc định **Nghìn (1.000)**
- **Làm tròn – hướng**: Ý nghĩa: **Gần nhất**, **Lên**, **Xuống**; Lưu ý: Bị khoá khi chọn **Không làm tròn**

## 7. Kiểm tra sau khi thực hiện

- Các ô trong phạm vi đã đổi giá trên cửa sổ (chưa ghi vào bảng giá cho tới khi **Lưu lại**).
- Ô trống hoặc bằng 0 giữ nguyên, không bị biến thành giá trị khác.

## 8. Những điều cần lưu ý

⚠️ **Điều chỉnh chỉ có tác dụng khi bạn bấm Lưu lại.** Đóng cửa sổ mà chưa lưu thì mọi điều chỉnh mất.

⚠️ **Hoàn tác chỉ trả lại một bước**: lần điều chỉnh gần nhất. Điều chỉnh liên tiếp hai lần thì chỉ hoàn tác được lần sau.

⚠️ Điều chỉnh chỉ tác động tới **tab đang mở**. Hai tab lưới độc lập với nhau và với bảng **Theo hàng hóa**.

⚠️ Mặc định **làm tròn đến nghìn** dù tăng / giảm 0%: giá nhà cung cấp vốn đã nguyên có thể bị đổi nếu bạn quên chọn **Không làm tròn**.

### "Không có ô nào thay đổi." 

Nguyên nhân: tỷ lệ 0% và giá đã tròn theo mức chọn, hoặc phạm vi không có ô nào (ví dụ chưa chọn khổ ở **Theo khổ**).
Cách xử lý: kiểm tra **Phạm vi**, **Tăng / giảm**, **Làm tròn**; đọc dòng xem trước trước khi **Áp dụng**.

## 10. Câu hỏi thường gặp

**Chọn nhiều ô rời nhau được không?**
Được: giữ Ctrl và bấm từng ô, hoặc Ctrl + kéo qua một vùng.

**Điều chỉnh có ảnh hưởng tới các bảng giá khác không?**
Không. Chỉ ảnh hưởng cửa sổ đang mở.

## 11. Công việc tiếp theo

**Tiếp theo:** bấm **Lưu lại** để ghi bảng giá; hoặc **Hoàn tác điều chỉnh giá** nếu chưa đúng.

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN LẬP BẢNG GIÁ BÁN CHO KHÁCH HÀNG](/bai-viet/2026-11-07-tl-e02-1-huong-dan-lap-bang-gia-ban-cho-khach-hang/) – Lập bảng giá bán cho khách hàng
- [HƯỚNG DẪN LẬP BÁO GIÁ NHÀ CUNG CẤP VÀ TẢI FILE BÁO GIÁ CỦA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-e02-2-huong-dan-lap-bao-gia-nha-cung-cap-va-tai-file-bao-gia-cua-nha-cung-cap/) – Lập báo giá nhà cung cấp và tải file nhà cung cấp
