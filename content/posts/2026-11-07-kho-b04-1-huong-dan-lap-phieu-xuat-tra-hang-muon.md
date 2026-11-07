---
title: "HƯỚNG DẪN LẬP PHIẾU XUẤT TRẢ HÀNG MƯỢN"
date: "2026-11-07"
summary: "Khi công ty trả lại hàng đã mượn của đối tác, thủ kho lập phiếu xuất trả từ chính phiếu nhập mượn của đợt đó."
module: "Kho hàng"
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

Khi công ty **trả lại hàng đã mượn** của đối tác, thủ kho lập **phiếu xuất trả** từ chính **phiếu nhập mượn** của đợt đó. Hệ thống lấy sẵn kho, hàng hoá, **số lượng còn phải trả** và đơn giá theo phiếu nhập mượn; bạn chỉ sửa số lượng thực trả và cách trả.

Mỗi dòng hàng có hai cách trả:

- **Trả bằng hàng**: Cột **Trả bằng tiền**: Không tick; Tồn kho: **KHO XUẤT giảm**, phải đủ tồn được xuất; Công nợ: Không đổi
- **Trả bằng tiền**: Cột **Trả bằng tiền**: Tick; Tồn kho: Không đổi (công ty giữ hàng = mua); giá vốn tính lại theo Đơn giá; Công nợ: Có chọn **NHÀ CUNG CẤP**: phải trả NCC **tăng** bằng Thành tiền

Cả hai cách đều được tính là **đã trả** trên phiếu nhập mượn.

Bài này cũng áp dụng khi **Sửa** phiếu (cửa sổ **CẬP NHẬT - PHIẾU XUẤT TRẢ, ĐI MƯỢN**).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu xuất trả**.
- Đã có **phiếu nhập mượn** ([HƯỚNG DẪN LẬP PHIẾU NHẬP MƯỢN](/bai-viet/2026-11-07-kho-b03-1-huong-dan-lap-phieu-nhap-muon/)) chưa **Đã trả**.
- Trả bằng hàng: kho xuất **còn đủ tồn được xuất**.
- Trả bằng tiền và cần ghi công nợ: đối tác đã có trong danh mục **nhà cung cấp**.
- Kỳ kế toán chứa **Ngày xuất** chưa khoá sổ.

## 2. Mở chức năng

**Mượn hàng → Phiếu xuất trả → Thêm mới**

## 3. Nhận biết màn hình

**Cửa sổ chọn phiếu mượn hàng:**

![Hình 1: Cửa sổ DANH SÁCH - PHIẾU MƯỢN HÀNG](/posts/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/hinh-01-danh-sach-phieu-muon-hang.png)

- **Ô chọn khoảng ngày**: Ý nghĩa: Lọc theo **Ngày nhập** mượn. Lần đầu là **Hôm nay**
- **Lưới phiếu nhập mượn**: Ý nghĩa: Chỉ hiện phiếu **chưa Đã trả** và **Chưa chi**
- **Cột Trạng thái trả**: Ý nghĩa: **Chưa trả** / **Đang trả**

Các cột: **Ngày nhập**, **Mã phiếu**, **Mượn từ kho**, **Kho nhập**, **Mã phiếu gốc**, **Trạng thái trả**, **Trạng thái chi**, **Ghi chú**, **Người tạo**, **Ngày tạo**, **Người sửa**, **Ngày sửa**. Cửa sổ có thêm nút **Tải lại**, Trình chọn cột và ô **Tìm kiếm…**. **Nhấp đúp** vào dòng để chọn.

**cửa sổ phiếu xuất trả:**

![Hình 2: cửa sổ THÊM MỚI - PHIẾU XUẤT TRẢ, ĐI MƯỢN](/posts/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/hinh-02-form-them-phieu-xuat-tra.png)

-  — **NGÀY XUẤT** — Bắt buộc, mặc định hôm nay

-  — **KHO XUẤT** — Bắt buộc, mặc định = **Kho nhập** của phiếu nhập mượn; đổi được

-  — **TRẢ KHO** — Kho đại diện cho đối tác, lấy theo **Mượn từ kho**, khoá

-  — **MÃ PHIẾU GỐC** — Chép từ phiếu nhập mượn, sửa được

-  — **MÃ PHIẾU** — Chữ mờ **MÃ TẠO TỰ ĐỘNG**

-  — **NHÀ CUNG CẤP** — Chọn khi có dòng trả bằng tiền để ghi công nợ

-  — **TỪ PHIẾU** — Mã phiếu nhập mượn đã chọn, khoá

-  — **GHI CHÚ** — Ghi chú phiếu

-  — Bảng chi tiết — Xem bảng cột dưới

-  — **TỪ PHIẾU NHẬP** — Chọn lại phiếu nhập mượn khác (chỉ khi thêm mới)

- ⑪ — **Lưu lại** / **Đóng** — Lưu / đóng không lưu

**Các cột trong bảng chi tiết:**

- **STT**: Nhập / tự tính: Tự đánh số
- **Hàng hóa**: Nhập / tự tính: Theo phiếu nhập mượn, **khoá**
- **Tên in**: Nhập / tự tính: Thường để trống
- **Đvt**: Nhập / tự tính: Theo phiếu nhập mượn, khoá
- **Khối lượng, Kiện, M³**: Nhập / tự tính: Tự tính theo Số lượng
- **Số lượng**: Nhập / tự tính: **Nhập** – mặc định = số còn phải trả
- **Trả bằng tiền**: Nhập / tự tính: **Tick** nếu dòng này công ty trả tiền thay hàng (gợi ý: *Không tính tồn kho*)
- **Đơn giá**: Nhập / tự tính: Mặc định theo phiếu nhập mượn, **sửa được**
- **Thành tiền**: Nhập / tự tính: Số lượng × Đơn giá, tự tính
- **Chú thích**: Nhập / tự tính: **Nhập** ghi chú dòng
- **(cột cuối, không tiêu đề)**: Nhập / tự tính: Biểu tượng thùng rác – xoá dòng

Bảng rộng hơn cửa sổ: Hình 2, Hình 3 đã kéo thanh cuộn ngang sang phải (cột **Hàng hóa**, **Tên in** nằm bên trái); tiêu đề cột **Trả bằng tiền** hiện rút gọn *Trả bằ…*.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Mượn hàng
   ↓
Phiếu xuất trả
   ↓
Thêm mới → DANH SÁCH - PHIẾU MƯỢN HÀNG → nhấp đúp phiếu
```

```text
Phiếu xuất trả → Thêm mới
      ↓
DANH SÁCH - PHIẾU MƯỢN HÀNG → đổi khoảng ngày → nhấp đúp phiếu NM…
      ↓
cửa sổ điền sẵn: KHO XUẤT, TRẢ KHO, TỪ PHIẾU, các dòng còn phải trả
      ↓
Sửa Số lượng = số thực trả · tick "Trả bằng tiền" nếu mua luôn
      ↓  có dòng trả tiền → chọn NHÀ CUNG CẤP, kiểm Đơn giá
Lưu lại ── vượt số còn lại / không đủ tồn / kỳ đã khoá? ──► sửa
      ↓
"Lưu thành công"
      ├── Dòng trả hàng: tồn KHO XUẤT giảm
      ├── Dòng trả tiền: giữ hàng, tính lại giá vốn, công nợ NCC tăng
      └── Phiếu nhập mượn: Đang trả / Đã trả
      ↓
(Kế toán) Phiếu chi → Mua hàng mượn → trả tiền
```

### Bước 1 – Mở danh sách phiếu mượn hàng

Vào **Mượn hàng → Phiếu xuất trả**, bấm **Thêm mới**. Cửa sổ **DANH SÁCH - PHIẾU MƯỢN HÀNG** mở ra (Hình 1).

### Bước 2 – Chọn phiếu nhập mượn

1. Đổi khoảng ngày  cho chứa **Ngày nhập** của phiếu mượn (mặc định chỉ hôm nay – [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).
2. Tìm theo **Mã phiếu** hoặc **Mượn từ kho** (tên đối tác).
3. **Nhấp đúp** vào dòng phiếu.

cửa sổ **THÊM MỚI - PHIẾU XUẤT TRẢ, ĐI MƯỢN** mở ra (Hình 2), đã điền **KHO XUẤT**, **TRẢ KHO**, **TỪ PHIẾU**, **MÃ PHIẾU GỐC** và các dòng **chưa trả hết** với **Số lượng** = số còn phải trả.

### Bước 3 – Nhập số lượng và cách trả

Với từng dòng:

- Sửa **Số lượng** thành số **thực trả** lần này (không vượt số còn phải trả).
- Công ty mua luôn hàng thay vì trả: tick **Trả bằng tiền**, kiểm tra **Đơn giá** (giá mua).
- Dòng chưa trả lần này: đặt **Số lượng** = 0 hoặc bấm biểu tượng thùng rác cuối dòng để xoá.
- Ghi **Chú thích** nếu cần.

Mẹo: chuột phải vào ô **Số lượng**, **Trả bằng tiền**, **Đơn giá** hoặc **Chú thích** → **Áp dụng cho những dòng dưới**.

![Hình 3: Dòng hàng tick Trả bằng tiền](/posts/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/hinh-03-dong-tra-bang-tien.png)

### Bước 4 – Nhập thông tin chung

- **NGÀY XUẤT**: ngày giao trả / ngày thoả thuận mua.
- **KHO XUẤT**: kho đang chứa hàng mượn (mặc định là kho đã nhập mượn).
- **NHÀ CUNG CẤP**: cần chọn đúng đối tác khi trả bằng tiền để ghi công nợ. Nếu chưa xác định NCC, dừng báo kế toán; phần mềm chưa tự bắt buộc nên lưu được không chứng minh đã ghi đủ khoản phải trả.
- **GHI CHÚ**.

### Bước 5 – Lưu lại

Bấm **Lưu lại** ⑪.

- Thiếu trường bắt buộc: dưới cửa sổ hiện **Chọn ngày xuất** / **Vui lòng chọn kho xuất** / **Vui lòng chọn kho trả**.
- Số lượng âm: cảnh báo **<số dòng>. Số lượng >= 0**.
- Trả nhiều hơn số còn lại: **Lỗi thêm: <tên hàng> chỉ còn lại (<số>) từ đơn**.
- Trả bằng hàng mà kho xuất không đủ tồn: **Lỗi thêm: "<tên kho>", "<tên hàng>" không đủ tồn (<số>).**
- Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại.

### Bước 6 – Kiểm tra và chi tiền

- Phiếu mới có **Mã phiếu** **XT…**, **Từ phiếu** = mã phiếu nhập mượn, **Tổng tiền mua** = tổng các dòng trả bằng tiền.
- Mở lại phiếu nhập mượn: **Trạng thái trả** = **Đang trả** / **Đã trả**, **SL còn lại** giảm.
- Có dòng trả bằng tiền: báo kế toán lập **Phiếu chi → Thêm mới → Mua hàng mượn**, bấm **TỪ PHIẾU** chọn phiếu xuất trả này (sổ tay Kế toán, KT-A04).

### Sửa phiếu

Bấm **Sửa** → **CẬP NHẬT - PHIẾU XUẤT TRẢ, ĐI MƯỢN**. Sửa được ngày, kho xuất, nhà cung cấp, mã phiếu gốc, ghi chú, số lượng, trả bằng tiền, đơn giá, chú thích. **Không sửa được khi đã có phiếu chi.**

## 6. Giải thích các thông tin trên màn hình

- **Ngày xuất**: Ý nghĩa: Ngày trả / ngày mua; Bắt buộc: Có; Lưu ý: Dùng lọc danh sách, kiểm khoá sổ
- **Kho xuất**: Ý nghĩa: Kho công ty xuất hàng trả; Bắt buộc: Có; Lưu ý: Tồn kho này giảm với dòng trả bằng hàng
- **Trả kho**: Ý nghĩa: Kho đại diện cho đối tác; Bắt buộc: Có; Lưu ý: Lấy theo phiếu nhập mượn, khoá
- **Mã phiếu gốc**: Ý nghĩa: Số chứng từ giấy; Bắt buộc: Không; Lưu ý: Mặc định chép từ phiếu nhập mượn
- **Mã phiếu**: Ý nghĩa: Mã phiếu xuất trả (**XT…**); Lưu ý: Tự tạo khi lưu
- **Nhà cung cấp**: Ý nghĩa: NCC ghi công nợ; Bắt buộc: Không; Lưu ý: Chỉ có tác dụng khi có dòng trả bằng tiền
- **Từ phiếu**: Ý nghĩa: Mã phiếu nhập mượn; Lưu ý: Chỉ xem
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu; Bắt buộc: Không
- **Hàng hóa, Đvt**: Ý nghĩa: Theo dòng phiếu nhập mượn; Lưu ý: Khoá
- **Số lượng**: Ý nghĩa: Số lượng trả lần này; Bắt buộc: Có; Lưu ý: ≥ 0 và ≤ số còn phải trả
- **Trả bằng tiền**: Ý nghĩa: Dòng mua luôn thay vì trả hàng; Bắt buộc: Không; Lưu ý: Tick: không trừ tồn, tính vào Tổng tiền mua
- **Đơn giá**: Ý nghĩa: Giá mua khi trả bằng tiền; Bắt buộc: Không; Lưu ý: Dùng tính lại giá vốn bình quân
- **Thành tiền**: Ý nghĩa: Số lượng × Đơn giá; Lưu ý: Hệ thống tính lại khi lưu
- **Chú thích**: Ý nghĩa: Ghi chú dòng; Bắt buộc: Không

**Số còn phải trả** của một dòng = Số lượng đã mượn − tổng số lượng các phiếu xuất trả trước.

**Tổng tiền mua** = tổng Thành tiền các dòng **Trả bằng tiền**; đây là số ghi tăng công nợ phải trả NCC.

## 7. Kiểm tra sau khi thực hiện

- Phiếu được lưu với mã **XT…**.
- Dòng trả bằng hàng: **tồn KHO XUẤT giảm**; sổ cái kho ghi dòng xuất kho.
- Dòng trả bằng tiền: tồn không đổi; sổ cái kho ghi nhận như **mua hàng** theo Đơn giá (giá vốn bình quân thay đổi).
- Có **NHÀ CUNG CẤP** và Tổng tiền mua > 0: **công nợ phải trả NCC tăng**.
- Phiếu nhập mượn gốc: **SL đã trả** tăng, **Trạng thái trả** = **Đang trả** / **Đã trả**.

## 8. Những điều cần lưu ý

⚠️ Tự đối chiếu số thực trả với số còn phải trả của từng dòng, kể cả khi hệ thống không báo vượt. Ghi chú nguồn còn trường hợp tỷ lệ quy đổi rỗng làm kiểm tra lượng dùng 0; cần kiểm chứng trước áp dụng các dòng có đơn vị/quy đổi chưa rõ.

⚠️ Cột **Tên in** có thể cho sửa nhưng ghi chú nguồn chưa xác nhận giá trị này được lưu ở chi tiết. Không dùng làm nơi duy nhất ghi nhận diện cần giữ; đối chiếu Xem lại và bản in, báo IT nếu không giữ giá trị.

⚠️ **Mỗi phiếu xuất trả chỉ lấy từ một phiếu nhập mượn.**

⚠️ **Trả bằng tiền không xuất kho.** Không tick khi hàng thực sự được chở trả – tồn kho sẽ thừa.

⚠️ **Đơn giá trả bằng tiền làm thay đổi giá vốn bình quân** của mặt hàng. Kiểm tra kỹ giá trước khi lưu.

⚠️ Trả bằng tiền mà **không chọn NHÀ CUNG CẤP** thì **không ghi công nợ**.

### "Lỗi thêm: <tên hàng> chỉ còn lại (<số>) từ đơn" 

Nguyên nhân: số lượng trả lớn hơn số còn phải trả.
Cách xử lý: giảm **Số lượng** tối đa bằng số trong câu báo.

### "Lỗi thêm: "<tên kho>", "<tên hàng>" không đủ tồn (<số>)." 

Nguyên nhân: trả bằng hàng nhưng kho xuất không còn đủ tồn được xuất (hàng mượn đã bán / đã giữ cho đơn khác).
Cách xử lý: chọn kho khác đang có hàng, giảm số lượng, hoặc tick **Trả bằng tiền** cho phần đã bán (sau khi thoả thuận với đối tác).

### Không thấy phiếu nhập mượn trong DANH SÁCH - PHIẾU MƯỢN HÀNG 

Kiểm tra: khoảng ngày (mặc định chỉ hôm nay); phiếu đã **Đã trả**; chi nhánh đang làm việc; tài khoản có được phân kho của phiếu không.
Cách xử lý: mở rộng khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

### "Lỗi sửa: Phiếu đang chi" / "Lỗi sửa: Phiếu đã chi" 

Nguyên nhân: đã có phiếu chi cho phiếu này.
Cách xử lý: xem [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT TRẢ](/bai-viet/2026-11-07-kho-b04-0-tong-quan-man-hinh-phieu-xuat-tra/), phần “Vướng mắc thường gặp”.

### "… Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **NGÀY XUẤT** thuộc kỳ đã khoá sổ.
Cách xử lý: liên hệ kế toán trưởng.

## 10. Câu hỏi thường gặp

**Trả từng đợt được không?**
Được. Mỗi đợt lập một phiếu xuất trả từ cùng phiếu nhập mượn, tới khi trả hết.

**Muốn đổi sang phiếu nhập mượn khác khi đang lập?**
Bấm **TỪ PHIẾU NHẬP** ở góc dưới cửa sổ và chọn lại. Các dòng của phiếu mới thay các dòng cũ.

**Mua luôn hàng mượn, công nợ ghi ở đâu?**
Công nợ phải trả của **NHÀ CUNG CẤP** đã chọn (sổ tay Kế toán – Công nợ nhà cung cấp).

## 11. Công việc tiếp theo

```text
Phiếu xuất trả
        ↓  (có dòng trả bằng tiền)
(Kế toán) Phiếu chi → Mua hàng mượn → Số tiền đã chi / Trạng thái chi
        ↓
Đối chiếu số còn nợ đối tác → Tổng hợp mượn hàng (KHO-D01.0)
```

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH CHI TIẾT NHẬP MƯỢN](/bai-viet/2026-11-07-kho-d03-0-tong-quan-man-hinh-chi-tiet-nhap-muon/) – Tổng quan màn hình Chi tiết nhập mượn.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT TRẢ](/bai-viet/2026-11-07-kho-b04-0-tong-quan-man-hinh-phieu-xuat-tra/) – Tổng quan màn hình Phiếu xuất trả
- [HƯỚNG DẪN LẬP PHIẾU NHẬP MƯỢN](/bai-viet/2026-11-07-kho-b03-1-huong-dan-lap-phieu-nhap-muon/) – Hướng dẫn lập phiếu nhập mượn
- [TỔNG QUAN MÀN HÌNH CHI TIẾT NHẬP MƯỢN](/bai-viet/2026-11-07-kho-d03-0-tong-quan-man-hinh-chi-tiet-nhap-muon/) – Tổng quan màn hình Chi tiết nhập mượn
- KT-A04 – Phiếu chi (Mua hàng mượn)
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NHÀ CUNG CẤP](/bai-viet/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/) – Công nợ nhà cung cấp
