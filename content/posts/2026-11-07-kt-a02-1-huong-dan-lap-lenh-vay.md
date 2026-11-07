---
title: "HƯỚNG DẪN LẬP LỆNH VAY"
date: "2026-11-07"
summary: "Lệnh vay ghi nhận một lần giải ngân khoản vay vào quỹ / tài khoản ngân hàng của công ty."
module: "Kế toán"
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

Lệnh vay ghi nhận một lần giải ngân khoản vay vào quỹ / tài khoản ngân hàng của công ty. Có thể gắn lệnh vay với **hợp đồng tín dụng** và với các **phiếu mua hàng** mà khoản vay dùng để thanh toán (bảng kê chứng từ nộp ngân hàng).

Bài này hướng dẫn lập lệnh vay mới, chọn phiếu mua hàng từ danh sách, và sửa lệnh vay (cửa sổ **LỆNH VAY - CẬP NHẬT**).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** màn hình **Lệnh vay**.
- Quỹ nhận tiền vay có trong danh mục **Tài khoản, quỹ** và đã được phân cho tài khoản của bạn.
- **Ngày vay** thuộc kỳ kế toán chưa khóa ([TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/)).
- Chuẩn bị: hợp đồng tín dụng, giấy nhận nợ (số GNN), số tiền giải ngân, thời hạn, lãi suất; danh sách phiếu mua hàng được thanh toán bằng khoản vay (nếu có).

## 2. Mở chức năng

**Kế toán → Lệnh vay → Thêm mới**

## 3. Nhận biết màn hình

![Hình 1: cửa sổ LỆNH VAY - THÊM MỚI](/posts/2026-11-07-kt-a02-1-huong-dan-lap-lenh-vay/hinh-01-form-them-lenh-vay.png)

- **MÃ LỆNH VAY**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **SỐ HỢP ĐỒNG**: Ý nghĩa: Chọn hợp đồng tín dụng; nút **+** để tạo hợp đồng mới
- **QUỸ NHẬN**: Ý nghĩa: Bắt buộc. Quỹ / tài khoản nhận tiền vay
- **SỐ TIỀN**: Ý nghĩa: Số tiền vay. Bị khoá khi bảng phiếu mua hàng có dòng (tự cộng)
- **NGÀY VAY**: Ý nghĩa: Bắt buộc
- **THỜI HẠN + ô đơn vị**: Ý nghĩa: Số + **ngày** / **tháng** / **năm**. Ô đơn vị bắt buộc (nhãn chỉ có dấu **: \***)
- **NGÀY ĐẾN HẠN**: Ý nghĩa: Bắt buộc. Tự tính = Ngày vay + Thời hạn; không chọn được ngày trước Ngày vay
- **LÃI SUẤT**: Ý nghĩa: Bắt buộc. Hiện dạng phần trăm, ví dụ **6%**
- **GHI CHÚ**: Ý nghĩa: Bắt buộc: lý do vay / thanh toán cho ai
- **GNN SỐ**: Ý nghĩa: Số giấy nhận nợ
- **Bảng phiếu mua hàng**: Ý nghĩa: Các phiếu mua hàng được thanh toán bằng khoản vay; biểu tượng **⠿** đầu dòng để kéo đổi thứ tự
- **TỪ PHIẾU MUA HÀNG**: Ý nghĩa: Mở danh sách phiếu mua hàng để chọn
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Các cột trong bảng phiếu mua hàng:**

- **STT**: Nhập / tự lấy: Tự đánh số
- **Ngày phát sinh**: Nhập / tự lấy: Ngày mua hàng của phiếu
- **Mã phiếu**: Nhập / tự lấy: Mã phiếu mua hàng
- **Mã số thuế**: Nhập / tự lấy: Mã số thuế NCC
- **Nhà cung cấp**: Nhập / tự lấy: Tên NCC
- **Tổng tiền**: Nhập / tự lấy: Tổng tiền phiếu mua hàng (số tiền nhận nợ)
- **Thao tác**: Nhập / tự lấy: Nút xoá dòng

Kéo biểu tượng đầu dòng để đổi thứ tự dòng (thứ tự in trên bảng kê).

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kế toán
   ↓
Lệnh vay
   ↓
Thêm mới
```

```text
Lệnh vay → Thêm mới
      ↓
Chọn Số hợp đồng (hoặc + tạo mới), Quỹ nhận
      ↓
(Tuỳ chọn) TỪ PHIẾU MUA HÀNG → chọn phiếu của 1 NCC → Đồng ý
      → bảng phiếu được điền, SỐ TIỀN = tổng các phiếu (khoá)
      ↓
Nhập Ngày vay, Thời hạn → Ngày đến hạn tự tính
Nhập Lãi suất, Ghi chú, GNN số
      ↓
Lưu lại ── thiếu ô bắt buộc? ──► viền đỏ → sửa → Lưu lại
      ↓
"Lưu thành công" → tồn quỹ nhận tăng Số tiền vay
```

### Bước 1 – Mở cửa sổ thêm mới

Vào **Kế toán → Lệnh vay**, bấm **Thêm mới**. cửa sổ **LỆNH VAY - THÊM MỚI** mở ra (Hình 1).

### Bước 2 – Chọn hợp đồng và quỹ nhận

- **SỐ HỢP ĐỒNG**: gõ số hợp đồng để tìm và chọn. Chưa có hợp đồng thì bấm nút **+** trong ô: cửa sổ **THÊM MỚI HỢP ĐỒNG** mở ra (nhập **SỐ HỢP ĐỒNG**, **NHÀ CUNG CẤP**, **NGÀY KÝ**, **HẾT HIỆU LỰC**, **HẠN MỨC**, **GHI CHÚ** – xem [TỔNG QUAN MÀN HÌNH HỢP ĐỒNG](/bai-viet/2026-11-07-kt-a08-0-tong-quan-man-hinh-hop-dong/)); lưu xong hợp đồng mới được chọn sẵn.
- **QUỸ NHẬN**: chọn quỹ / tài khoản ngân hàng nhận tiền. Danh sách chỉ có các quỹ bạn được phân.

### Bước 3 – (Tuỳ chọn) Chọn phiếu mua hàng được thanh toán bằng khoản vay

1. Bấm **TỪ PHIẾU MUA HÀNG** ⑫ ở chân cửa sổ. Cửa sổ **DANH SÁCH PHIẾU MUA HÀNG** mở ra, mặc định lọc hôm nay (Hình 2). Đổi khoảng ngày  để thấy phiếu cũ hơn (Hình 2 đã chọn *Tháng này*: 01/10/2026 – 31/10/2026), bấm **Tải lại**.
2. Danh sách chỉ hiện phiếu mua hàng của chi nhánh **chưa nằm trong lệnh vay nào**. Các cột: **Ngày phát sinh**, **Mã phiếu**, **Nhà cung cấp**, **Tổng tiền**, **Trạng thái nhập**, **Ghi chú**.
3. Tick chọn các phiếu cần thanh toán ở cột ô tick. **Chỉ chọn phiếu của cùng một nhà cung cấp.**
4. Bấm **Đồng ý**  (**Đóng** để thôi). Bảng ⑪ được điền các phiếu đã chọn; **SỐ TIỀN**  = tổng **Tổng tiền** các phiếu và bị khoá.

![Hình 2: Cửa sổ DANH SÁCH PHIẾU MUA HÀNG](/posts/2026-11-07-kt-a02-1-huong-dan-lap-lenh-vay/hinh-02-danh-sach-phieu-mua-hang.png)

⚠️ Mỗi lần bấm **TỪ PHIẾU MUA HÀNG** → **Đồng ý**, bảng cũ bị **thay toàn bộ** bằng các phiếu vừa chọn.

Muốn bỏ một phiếu: bấm nút xoá ở cột **Thao tác** của dòng đó; **SỐ TIỀN** tự cộng lại.

### Bước 4 – Nhập số tiền (nếu không chọn phiếu mua hàng)

Nhập **SỐ TIỀN**  = số tiền giải ngân.

### Bước 5 – Nhập ngày và thời hạn

- **NGÀY VAY**: ngày tiền về tài khoản.
- **THỜI HẠN**: gõ số (ví dụ `6`) và chọn đơn vị **ngày** / **tháng** / **năm**.
- **NGÀY ĐẾN HẠN**  tự tính = Ngày vay + Thời hạn khi bạn gõ / chọn ở ba ô trên. Sửa tay được nếu ngân hàng ghi ngày khác.

### Bước 6 – Nhập lãi suất, ghi chú, số GNN

- **GHI CHÚ**: ghi lý do vay / thanh toán cho ai.
- **GNN SỐ**: số giấy nhận nợ.

### Bước 7 – Bấm Lưu lại

Bấm **Lưu lại** ⑬.

- Thiếu thông tin: ô thiếu có viền đỏ; bấm vào ô để xem lời nhắc: **Vui lòng chọn quỹ nhận**, **Chọn ngày vay**, **Vui lòng nhập ngày đến hạn**, **Vui lòng nhập lãi suất vay**, **Vui lòng ghi lý do vay / Thanh toán cho ai**.
- Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại. Tồn quỹ nhận tăng **Số tiền vay**.

### Sửa lệnh vay

Bấm **Sửa** → cửa sổ **LỆNH VAY - CẬP NHẬT**. Sửa được mọi ô và bảng phiếu mua hàng. Khi lưu, hệ thống trừ số tiền cũ khỏi quỹ nhận cũ và cộng số tiền mới vào quỹ nhận mới; quỹ cũ phải còn đủ tồn để trừ.

## 6. Giải thích các thông tin trên màn hình

- **Mã lệnh vay**: Ý nghĩa: Mã lệnh; Lưu ý: Tự tạo khi lưu (LV + 8 chữ số)
- **Số hợp đồng**: Ý nghĩa: Hợp đồng tín dụng; Bắt buộc: Không; Lưu ý: Hạn mức hợp đồng in trên giấy nhận nợ
- **Quỹ nhận**: Ý nghĩa: Quỹ / tài khoản nhận tiền; Bắt buộc: Có; Lưu ý: Tồn quỹ tăng khi lưu
- **Số tiền**: Ý nghĩa: Số tiền vay; Bắt buộc: Nên nhập; Lưu ý: Tự = tổng phiếu mua hàng nếu có chọn phiếu
- **Ngày vay**: Ý nghĩa: Ngày giải ngân; Bắt buộc: Có; Lưu ý: Dùng lọc danh sách, kiểm tra khóa sổ
- **Thời hạn**: Ý nghĩa: Số kỳ hạn; Bắt buộc: Không; Lưu ý: Đi kèm đơn vị
- **Đơn vị thời hạn**: Ý nghĩa: ngày / tháng / năm; Bắt buộc: Có
- **Ngày đến hạn**: Ý nghĩa: Hạn trả; Bắt buộc: Có; Lưu ý: Tự tính; ≥ Ngày vay
- **Lãi suất**: Ý nghĩa: Lãi suất vay; Bắt buộc: Có; Lưu ý: Danh sách hiện dạng %
- **Ghi chú**: Ý nghĩa: Lý do vay / thanh toán cho ai; Bắt buộc: Có
- **GNN số**: Ý nghĩa: Số giấy nhận nợ; Bắt buộc: Không; Lưu ý: Hiện ở cột **Số GNN**
- **Ngày phát sinh, Mã phiếu, Mã số thuế, Nhà cung cấp**: Ý nghĩa: Thông tin phiếu mua hàng; Lưu ý: Tự lấy, không sửa
- **Tổng tiền**: Ý nghĩa: Số tiền nhận nợ của phiếu; Lưu ý: Tự lấy = tổng tiền phiếu mua hàng

## 7. Kiểm tra sau khi thực hiện

- Lệnh vay mới hiện ở **LỆNH VAY - DANH SÁCH** với **Trạng thái chi** = **Chưa chi**.
- Tồn quỹ nhận tăng đúng **Số tiền vay** (xem **Tồn quỹ** [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)).
- Các phiếu mua hàng đã chọn không còn hiện trong danh sách chọn của lệnh vay khác.

## 8. Những điều cần lưu ý

⚠️ **Không lập phiếu thu cho tiền giải ngân.** Lệnh vay đã cộng tiền vào quỹ nhận.

⚠️ Chọn phiếu mua hàng **không** tự lập phiếu chi trả NCC và **không** làm giảm công nợ NCC. Thanh toán NCC vẫn phải lập **Phiếu chi** ([HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/)).

⚠️ Mỗi lệnh vay chỉ chọn được phiếu mua hàng của **một** nhà cung cấp.

⚠️ Mỗi lần **Sửa**, hệ thống ghi lại toàn bộ bảng phiếu mua hàng và lưu lịch sử thay đổi.

### Dưới ô báo "Vui lòng chọn quỹ nhận" / "Chọn ngày vay" / "Vui lòng nhập ngày đến hạn" 

Nguyên nhân: thiếu trường bắt buộc.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### Dưới ô báo "Vui lòng nhập lãi suất vay" 

Nguyên nhân: để trống **LÃI SUẤT** hoặc gõ quá ngắn (dưới 2 ký tự).

### Dưới ô báo "Vui lòng ghi lý do vay / Thanh toán cho ai" 

Nguyên nhân: để trống **GHI CHÚ**.
Cách xử lý: ghi lý do vay.

### Cửa sổ chọn phiếu báo "Vui lòng chỉ chọn từ 1 nhà cung cấp." 

Nguyên nhân: tick phiếu của nhiều NCC, hoặc chưa tick phiếu nào.
Cách xử lý: chỉ tick phiếu của một NCC rồi **Đồng ý**.

### "CẢNH BÁO – Lỗi thêm: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **Ngày vay** thuộc kỳ đã khóa.
Cách xử lý: kiểm tra ngày thực tế. Nếu ngày đúng thuộc kỳ đã khóa, giữ ngày đó và báo kế toán trưởng xử lý mở kỳ theo [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/); không đổi ngày chỉ để vượt khóa.

### "CẢNH BÁO – Lỗi sửa: "<tên quỹ>" không đủ tồn (<số tồn>)." 

Nguyên nhân: sửa giảm số tiền / đổi quỹ nhận trong khi quỹ cũ không còn đủ tiền để trừ lại.
Cách xử lý: kiểm tra **Tồn quỹ** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)); liên hệ kế toán trưởng.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Không thấy phiếu mua hàng cần chọn?**
Kiểm tra khoảng ngày trong cửa sổ chọn; phiếu đã nằm trong một lệnh vay khác sẽ không hiện.

**Số tiền bị khoá, không sửa được?**
Do bảng phiếu mua hàng có dòng. Số tiền = tổng các phiếu. Xoá hết dòng thì ô mở lại.

## 11. Công việc tiếp theo

```text
Lập lệnh vay
      ↓
In giấy nhận nợ / bảng kê (KT-A02.2) · đính kèm hồ sơ (GEN-12)
      ↓
Thanh toán NCC bằng tiền vay: Phiếu chi loại Nhà cung cấp (KT-A04.1)
      ↓
Đến hạn trả nợ: Phiếu chi loại Lệnh vay (KT-A04.2)
```

**Tiếp theo:** [HƯỚNG DẪN IN GIẤY NHẬN NỢ VÀ BẢNG KÊ LỆNH VAY](/bai-viet/2026-11-07-kt-a02-2-huong-dan-in-giay-nhan-no-va-bang-ke-lenh-vay/) – Hướng dẫn in giấy nhận nợ và bảng kê lệnh vay.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH LỆNH VAY](/bai-viet/2026-11-07-kt-a02-0-tong-quan-man-hinh-lenh-vay/) – Tổng quan màn hình Lệnh vay
- [HƯỚNG DẪN IN GIẤY NHẬN NỢ VÀ BẢNG KÊ LỆNH VAY](/bai-viet/2026-11-07-kt-a02-2-huong-dan-in-giay-nhan-no-va-bang-ke-lenh-vay/) – Hướng dẫn in giấy nhận nợ và bảng kê lệnh vay
- [HƯỚNG DẪN LẬP PHIẾU CHI TRẢ LỆNH VAY](/bai-viet/2026-11-07-kt-a04-2-huong-dan-lap-phieu-chi-tra-lenh-vay/) – Hướng dẫn lập phiếu chi trả lệnh vay
- [TỔNG QUAN MÀN HÌNH HỢP ĐỒNG](/bai-viet/2026-11-07-kt-a08-0-tong-quan-man-hinh-hop-dong/) – Tổng quan màn hình Hợp đồng
- Sổ tay Mua hàng – [TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/) Phiếu mua hàng

### Sửa lệnh vay muốn thêm phiếu mua hàng thì sao?

Nút **TỪ PHIẾU MUA HÀNG** sẽ thay toàn bộ bảng đang có. Các phiếu đã nằm trong chính lệnh vay này không hiện lại trong danh sách chọn; cần kiểm tra kỹ trước khi dùng nút này để bổ sung.
