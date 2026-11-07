---
title: "HƯỚNG DẪN LẬP PHIẾU HẠCH TOÁN LƯƠNG"
date: "2026-11-07"
summary: "Bài này hướng dẫn lập phiếu hạch toán chi phí lương của một kỳ: nhập thông tin chung và từng dòng TK Nợ / TK Có / Số tiền, chọn Đối tượng THCP cho dòng là chi phí trực tiếp."
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

Bài này hướng dẫn lập phiếu hạch toán chi phí lương của một kỳ: nhập thông tin chung và từng dòng **TK Nợ / TK Có / Số tiền**, chọn **Đối tượng THCP** cho dòng là chi phí trực tiếp.

Bài cũng áp dụng khi **Sửa** phiếu (cửa sổ **CẬP NHẬT - PHIẾU HẠCH TOÁN LƯƠNG**) và **Sao chép** phiếu cũ thành phiếu mới (cửa sổ **SAO CHÉP - PHIẾU HẠCH TOÁN LƯƠNG**).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu hạch toán lương**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)) — phiếu lưu cho chi nhánh đang làm việc.
- Chuẩn bị: số liệu lương của kỳ đã chốt (bảng lương — sổ tay Nhân sự), chia theo bộ phận / tài khoản chi phí.
- Tài khoản cần dùng đã được khai báo, đang kích hoạt và là tài khoản chi tiết có thể chọn. Ví dụ 334/3388 trong bài chỉ dùng khi danh mục của đơn vị đã cấu hình; nếu chưa có, nhờ kế toán trưởng cấu hình đúng tài khoản trước. Không chọn tài khoản khác chỉ để lưu được phiếu; **Đối tượng tập hợp chi phí** (nếu dùng) đã khai báo và đang kích hoạt (sổ tay Giá thành).

## 2. Mở chức năng

**Kế toán → Phiếu hạch toán lương → Thêm mới**

## 3. Nhận biết màn hình

![Hình 1: cửa sổ THÊM MỚI - PHIẾU HẠCH TOÁN LƯƠNG, đang chọn TK Có cho dòng 1](/posts/2026-11-07-kt-a13-1-huong-dan-lap-phieu-hach-toan-luong/hinh-01-form-them-phieu-hach-toan-luong.png)

Trong Hình 1, danh sách **TK Có** đang mở che nhãn **Hạn thanh toán**  và ô **Ghi chú** (nửa phải của hàng).

- **Diễn giải**: Ý nghĩa: Nội dung phiếu. Chữ mờ gợi ý *Lương phải trả Tháng.../...*
- **Số chứng từ**: Ý nghĩa: Số chứng từ nội bộ (tuỳ chọn)
- **Ngày hạch toán, Ngày chứng từ**: Ý nghĩa: Mặc định hôm nay
- **Hạn thanh toán**: Ý nghĩa: Hạn trả lương (tuỳ chọn)
- **Loại tiền**: Ý nghĩa: Mặc định **VND**
- **Tham chiếu, Ghi chú**: Ý nghĩa: Tuỳ chọn
- **Hạch toán — Tổng tiền: …**: Ý nghĩa: Tổng số tiền các dòng, tự cộng
- **Bảng hạch toán**: Ý nghĩa: Mỗi dòng một cặp TK Nợ / TK Có
- **Nút + góc phải trên bảng**: Ý nghĩa: Thêm dòng mới (cuối bảng)
- **Dòng chú thích dưới bảng**: Ý nghĩa: Nhắc quy tắc Đối tượng THCP
- **Hủy / Lưu**: Ý nghĩa: Đóng không lưu / lưu phiếu (nút chữ **Lưu**, không phải *Lưu lại*)

**Các cột trong bảng hạch toán:**

- **#**: Nhập / tự tính: Tự đánh số
- **Diễn giải**: Nhập / tự tính: **Nhập** — nội dung dòng (ví dụ *Lương công nhân sản xuất*)
- **TK Nợ**: Nhập / tự tính: **Chọn** — bắt buộc. Danh sách hiện *số TK - tên TK* (ví dụ *622 - Chi phí nhân…*; tên dài bị rút gọn), chỉ tài khoản chi tiết; **cuộn** để tìm (gõ chữ không lọc danh sách)
- **TK Có**: Nhập / tự tính: **Chọn** — thường 334 hoặc 3388; cùng danh sách với TK Nợ
- **Số tiền**: Nhập / tự tính: **Nhập**
- **Đối tượng THCP**: Nhập / tự tính: **Chọn** (tuỳ chọn) — *mã - tên* đối tượng tập hợp chi phí
- **Ghi chú**: Nhập / tự tính: **Nhập**
- **(cột cuối, kéo thanh cuộn ngang sang phải)**: Nhập / tự tính: Liên kết **Sao chép** dòng; biểu tượng xoá dòng

Dòng cuối bảng cộng **Số tiền**.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kế toán
   ↓
Phiếu hạch toán lương
   ↓
Thêm mới
```

```text
Phiếu hạch toán lương → Thêm mới (hoặc Sao chép phiếu tháng trước)
      ↓
Nhập Diễn giải, Ngày hạch toán (thuộc tháng lương), Ngày chứng từ
      ↓
Bảng hạch toán: + thêm dòng → TK Nợ, TK Có, Số tiền
   ├── chi phí trực tiếp: chọn Đối tượng THCP (TK Nợ 621/622/627)
   └── không gắn Đối tượng THCP: không được lấy vào giá thành từ phiếu này
      ↓
Đối chiếu Tổng tiền với bảng lương
      ↓
Lưu ── báo lỗi? ──► sửa → Lưu
      ↓
"Lưu thành công" → phiếu có mã HL… → kỳ tính giá thành lấy vào
```

## 5. Thực hiện trên phần mềm

Mở **Kế toán → Phiếu hạch toán lương → Thêm mới**. Kiểm tra cửa sổ **THÊM MỚI - PHIẾU HẠCH TOÁN LƯƠNG**; Ngày hạch toán/Ngày chứng từ mặc định hôm nay, Loại tiền VND. Đối chiếu và đổi ngày theo bảng lương cần ghi.

### Bước 1 – Nhập thông tin chung

- **Diễn giải**: ví dụ *Lương phải trả Tháng 09/2026*.
- **Số chứng từ**: nếu có số chứng từ nội bộ.
- **Ngày hạch toán**: chọn một ngày **thuộc tháng lương** (thường ngày cuối tháng). Ngày này quyết định phiếu vào kỳ tính giá thành nào.
- **Ngày chứng từ**, **Hạn thanh toán**, **Tham chiếu**, **Ghi chú**: tuỳ chọn.

⚠️ Hệ thống không bắt buộc **Ngày hạch toán** nhưng đừng để trống: danh sách lọc theo ngày này và mã phiếu được tạo theo ngày này.

### Bước 2 – Thêm các dòng hạch toán

1. Bấm nút **+**  ở góc bảng. Một dòng trống được thêm cuối bảng.
2. Bấm vào ô **Diễn giải** của dòng, nhập nội dung.
3. Bấm ô **TK Nợ** (chữ mờ *Lựa chọn…*), **cuộn** danh sách đến tài khoản cần dùng (ví dụ *622 - Chi phí nhân…*) rồi bấm chọn. Danh sách xếp theo số tài khoản; gõ chữ vào ô **không** lọc danh sách.
4. Bấm ô **TK Có**, cuộn và chọn tài khoản (ví dụ *334*).
5. Nhập **Số tiền**.
6. Nếu là chi phí trực tiếp của một đối tượng giá thành: chọn **Đối tượng THCP**. Các dòng không chọn THCP không được lấy vào giá thành từ phiếu này. Với lương quản lý xưởng cần đưa vào giá thành, phải chốt đối tượng nhận chi phí và tài khoản phù hợp trước khi lập; không coi để trống là tự phân bổ chung.
7. Lặp lại cho các dòng khác (Hình 2).

Mẹo: bấm **Sao chép** ở cuối dòng để thêm một bản sao của dòng đó xuống cuối bảng, rồi chỉ sửa tài khoản / số tiền / đối tượng.

**Ví dụ một phiếu lương tháng:**

- **Lương công nhân xưởng ván**: TK Nợ: 622; TK Có: 334; Số tiền: 120.000.000; Đối tượng THCP: Mã đối tượng xưởng ván
- **Lương quản lý xưởng**: TK Nợ: 6271; TK Có: 334; Số tiền: 30.000.000; Đối tượng THCP: THCP nhận chi phí đã được duyệt; để trống thì không vào giá thành
- **Lương nhân viên bán hàng**: TK Nợ: 6411; TK Có: 334; Số tiền: 40.000.000; Đối tượng THCP: (trống)
- **Lương bộ phận văn phòng**: TK Nợ: 6421; TK Có: 334; Số tiền: 50.000.000; Đối tượng THCP: (trống)

### Bước 3 – Kiểm tra tổng tiền

So **Tổng tiền**  và dòng cộng cuối bảng với tổng lương phải trả trên bảng lương của kỳ.

### Bước 4 – Kiểm tra riêng trước khi lưu

Bấm **Lưu** ⑪.

- Bảng chưa có dòng: báo **Vui lòng nhập ít nhất 1 dòng hạch toán**.
- Có dòng thiếu **TK Nợ**: báo **Mỗi dòng phải có TK Nợ** (ô TK Nợ trống có viền đỏ).
- Sau khi lưu, tra lại **Mã phiếu** bắt đầu bằng **HL** và đối chiếu ngày, các dòng, tổng tiền với bảng lương đã duyệt.

### Sửa phiếu

Bấm **Sửa** (hoặc nhấp đúp dòng) → cửa sổ **CẬP NHẬT - PHIẾU HẠCH TOÁN LƯƠNG**. Sửa được mọi trường và các dòng (thêm, xoá, sửa dòng). Khi **Lưu**, hệ thống ghi lại toàn bộ bảng hạch toán theo nội dung đang có trên cửa sổ. Mã phiếu giữ nguyên.

### Sao chép phiếu

1. Bấm **Sao chép** ở dòng phiếu cần sao chép (ví dụ phiếu tháng trước).
2. cửa sổ **SAO CHÉP - PHIẾU HẠCH TOÁN LƯƠNG** mở ra, điền sẵn mọi thông tin và các dòng của phiếu gốc (chưa lưu).
3. **Sửa lại Diễn giải, Ngày hạch toán, Ngày chứng từ, Hạn thanh toán** — các ngày đang là ngày của phiếu gốc.
4. Sửa số tiền từng dòng theo bảng lương kỳ mới.
5. Bấm **Lưu**. Hệ thống tạo **phiếu mới** với mã phiếu mới; phiếu gốc không đổi.

### Xem lại phiếu

Người không có quyền **Cập nhật** nhấp đúp vào dòng sẽ mở **XEM LẠI - PHIẾU HẠCH TOÁN LƯƠNG**: các ô chỉ xem, không có nút **Lưu**, không thêm / xoá dòng được.

## 6. Giải thích các thông tin trên màn hình

- **Diễn giải**: Ý nghĩa: Nội dung phiếu; Bắt buộc: Không; Lưu ý: Nên ghi tháng lương
- **Số chứng từ**: Ý nghĩa: Số chứng từ nội bộ; Bắt buộc: Không
- **Ngày hạch toán**: Ý nghĩa: Ngày ghi nhận chi phí; Bắt buộc: Nên nhập; Lưu ý: Lọc danh sách; xác định kỳ giá thành; mặc định hôm nay
- **Ngày chứng từ**: Ý nghĩa: Ngày chứng từ gốc; Bắt buộc: Không; Lưu ý: Dùng cho kỳ giá thành khi Ngày hạch toán trống
- **Hạn thanh toán**: Ý nghĩa: Hạn trả lương; Bắt buộc: Không; Lưu ý: Chỉ để tham chiếu
- **Loại tiền**: Ý nghĩa: Đơn vị tiền; Bắt buộc: Không; Lưu ý: Mặc định VND; số tiền không quy đổi
- **Tham chiếu**: Ý nghĩa: Mã / số tham chiếu (ví dụ mã bảng lương); Bắt buộc: Không
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu; Bắt buộc: Không
- **Mã phiếu**: Ý nghĩa: Mã hệ thống; Lưu ý: Tự tạo khi lưu, tiền tố HL
- **Tổng tiền**: Ý nghĩa: Σ Số tiền các dòng; Lưu ý: Tự tính
- **Diễn giải (dòng)**: Ý nghĩa: Nội dung dòng; Bắt buộc: Không; Lưu ý: Trống thì giá thành dùng diễn giải phiếu
- **TK Nợ**: Ý nghĩa: Tài khoản chi phí; Bắt buộc: **Có**; Lưu ý: Chỉ tài khoản chi tiết (không chọn TK cha)
- **TK Có**: Ý nghĩa: Tài khoản đối ứng (334, 3388…); Bắt buộc: Không; Lưu ý: Nên chọn
- **Số tiền**: Ý nghĩa: Số tiền của dòng; Bắt buộc: Nên nhập; Lưu ý: Số nguyên đồng; dòng 0 đồng bị giá thành bỏ qua
- **Đối tượng THCP**: Ý nghĩa: Đối tượng nhận chi phí trực tiếp; Bắt buộc: Có nếu cần đưa dòng vào giá thành; Lưu ý: Trống = không vào giá thành từ phiếu này
- **Ghi chú (dòng)**: Ý nghĩa: Ghi chú dòng; Bắt buộc: Không

**Quy tắc đưa vào giá thành:**

- **Có Đối tượng THCP và TK Nợ bắt đầu bằng 621, 622 hoặc 627, đối tượng thuộc kỳ tính giá thành**: Giá thành xử lý: Chi phí **trực tiếp** của đối tượng
- **Có Đối tượng THCP nhưng TK Nợ khác 621 / 622 / 627**: Giá thành xử lý: **Không** vào giá thành
- **Không có Đối tượng THCP**: Giá thành xử lý: **Không** vào giá thành từ phiếu hạch toán lương; không tự chuyển thành chi phí chung

## 7. Kiểm tra sau khi thực hiện

- Phiếu được lưu cho chi nhánh đang làm việc, có **Mã phiếu** HL…, hiện ở **PHIẾU HẠCH TOÁN LƯƠNG - DANH SÁCH** (khi ngày hạch toán nằm trong khoảng ngày đang chọn).
- Kỳ tính giá thành của chi nhánh phủ ngày hạch toán sẽ lấy các dòng theo quy tắc ở phần “Giải thích các thông tin trên màn hình”.
- Sổ chi tiết tài khoản, Bảng cân đối phát sinh, quỹ, công nợ **không** thay đổi.

## 8. Những điều cần lưu ý

⚠️ **Dòng lương không gắn Đối tượng THCP không được tổng hợp vào giá thành**, kể cả TK Nợ 6271. Dòng cần đưa vào giá thành phải có THCP thuộc kỳ, TK Nợ 621/622/627 và số tiền khác 0; đối chiếu kỳ sau tổng hợp.

⚠️ **Chọn Đối tượng THCP chỉ có tác dụng với TK Nợ 621 / 622 / 627.** Gắn đối tượng cho dòng 641x / 642x thì dòng đó **không** vào giá thành (kể cả chi phí chung).

⚠️ **Sao chép giữ nguyên các ngày của phiếu gốc.** Luôn sửa **Ngày hạch toán** sang tháng mới, nếu không chi phí sẽ rơi vào kỳ giá thành cũ.

⚠️ **Hệ thống không kiểm tra Số tiền** (không chặn 0 hay số âm) và **không đối chiếu với bảng lương.** Người lập tự kiểm tra Tổng tiền.

⚠️ **Không sửa phiếu đã đưa vào kỳ tính giá thành đã kết chuyển hoặc thuộc kỳ kế toán đã khoá sổ.** Hệ thống hiện không chặn khi sửa, nhưng sửa sẽ làm số giá thành / sổ sách đã chốt bị lệch.

⚠️ Phiếu **chưa sinh bút toán** lên sổ kế toán ([TỔNG QUAN MÀN HÌNH PHIẾU HẠCH TOÁN LƯƠNG](/bai-viet/2026-11-07-kt-a13-0-tong-quan-man-hinh-phieu-hach-toan-luong/), phần “Những điều cần lưu ý”).

⚠️ Bấm **Hủy** hoặc dấu đóng của cửa sổ là đóng ngay, **không hỏi lại** — dữ liệu đang nhập bị mất.

### "Vui lòng nhập ít nhất 1 dòng hạch toán" 

Nguyên nhân: bảng hạch toán chưa có dòng nào.
Cách xử lý: bấm **+** để thêm dòng.

### "Mỗi dòng phải có TK Nợ" 

Nguyên nhân: có dòng chưa chọn **TK Nợ**.
Cách xử lý: chọn TK Nợ cho dòng có ô viền đỏ, hoặc xoá dòng thừa.

### Ô TK Nợ / TK Có không tìm thấy tài khoản cần chọn 

Nguyên nhân: (1) gõ số tài khoản vào ô — danh sách không lọc theo chữ gõ; (2) danh sách chỉ có tài khoản chi tiết đang dùng — tài khoản cha (ví dụ 627, 642 khi đã có 6271, 6421) không có; (3) tài khoản chưa được khai báo (ví dụ 334, 3388).
Cách xử lý: cuộn danh sách để tìm; chọn tài khoản chi tiết; nếu vẫn thiếu, nhờ kế toán trưởng khai báo tài khoản trước khi lập phiếu.

### Ô Đối tượng THCP trống, không có gì để chọn 

Nguyên nhân: chi nhánh chưa khai báo đối tượng tập hợp chi phí đang kích hoạt.
Cách xử lý: khai báo đối tượng ở sổ tay Giá thành.

### "Lưu thất bại" (Lỗi hệ thống)

Nguyên nhân: hệ thống không lưu được phiếu.
Cách xử lý: thử lại; vẫn lỗi thì xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

### "CẢNH BÁO – Lỗi thêm: …" / "CẢNH BÁO – Lỗi sửa: …" (Lỗi hệ thống)

Nguyên nhân: lỗi khi ghi dữ liệu (ví dụ đối tượng THCP vừa bị xoá).
Cách xử lý: tải lại cửa sổ, chọn lại; vẫn lỗi thì báo IT kèm nội dung câu báo ([LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/)).

## 10. Câu hỏi thường gặp

**TK Có để trống được không?**
Hệ thống cho phép, nhưng nên chọn (334, 3388…) để phiếu đủ cặp Nợ / Có.

**Một phiếu có thể gồm lương của nhiều bộ phận không?**
Được. Mỗi bộ phận / tài khoản chi phí một dòng.

**Vì sao không có nút in phiếu?**
Màn hình hiện chưa có mẫu in phiếu hạch toán lương. Dùng **Xuất Excel** ở danh sách nếu cần ([HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)).

## 11. Công việc tiếp theo

```text
Lập phiếu hạch toán lương
        ↓
(Giá thành) Kỳ tính giá thành → tổng hợp chi phí lương → kết chuyển
        ↓
(Kế toán) Phiếu chi trả lương (KT-A04)
```

**Tiếp theo:** sổ tay Giá thành – Kỳ tính giá thành; [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/) – Phiếu chi.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU HẠCH TOÁN LƯƠNG](/bai-viet/2026-11-07-kt-a13-0-tong-quan-man-hinh-phieu-hach-toan-luong/) – Tổng quan màn hình Phiếu hạch toán lương
- [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/) – Tổng quan màn hình Phiếu chi
- [TỔNG QUAN MÀN HÌNH KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-0-tong-quan-man-hinh-ky-ke-toan/) – Tổng quan màn hình Kỳ kế toán
- Sổ tay Giá thành – Đối tượng tập hợp chi phí, Kỳ tính giá thành
- Sổ tay Nhân sự – Bảng lương
