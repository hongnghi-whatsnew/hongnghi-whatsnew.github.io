---
title: "HƯỚNG DẪN LẬP PHIẾU NHẬP TRẢ HÀNG CHO MƯỢN"
date: "2026-11-07"
summary: "Khi đối tác trả lại hàng đã mượn của công ty, thủ kho lập phiếu nhập trả từ chính phiếu xuất cho mượn của đợt đó."
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

Khi đối tác **trả lại hàng đã mượn** của công ty, thủ kho lập **phiếu nhập trả** từ chính **phiếu xuất cho mượn** của đợt đó. Hệ thống lấy sẵn kho, hàng hoá, **số lượng còn phải trả** và đơn giá theo phiếu xuất; bạn chỉ sửa số lượng thực trả và cách trả.

Mỗi dòng hàng có hai cách trả:

- **Trả bằng hàng**: Cột **Trả bằng tiền**: Không tick; Tồn kho: **KHO NHẬP tăng** theo số lượng trả; Công nợ: Không đổi
- **Trả bằng tiền**: Cột **Trả bằng tiền**: Tick; Tồn kho: Không đổi (đối tác giữ hàng = mua); Công nợ: Có chọn **KHÁCH HÀNG**: phải thu khách **tăng** bằng Thành tiền

Cả hai cách đều được tính là **đã trả** trên phiếu xuất cho mượn.

Bài này cũng áp dụng khi **Sửa** phiếu (cửa sổ **CẬP NHẬT - PHIẾU NHẬP TRẢ, CHO MƯỢN**).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu nhập trả**.
- Đã có **phiếu xuất cho mượn** ([HƯỚNG DẪN LẬP PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-1-huong-dan-lap-phieu-xuat-cho-muon/)) chưa **Đã trả**.
- Trả bằng tiền và cần ghi công nợ: đối tác đã có trong danh mục **khách hàng**.
- Kỳ kế toán chứa **Ngày nhập** chưa khoá sổ.

## 2. Mở chức năng

**Mượn hàng → Phiếu nhập trả → Thêm mới**

## 3. Nhận biết màn hình

**Cửa sổ chọn phiếu cho mượn:**

![Hình 1: Cửa sổ DANH SÁCH - PHIẾU CHO MƯỢN](/posts/2026-11-07-kho-b02-1-huong-dan-lap-phieu-nhap-tra-hang-cho-muon/hinh-01-danh-sach-phieu-cho-muon.png)

- **Ô chọn khoảng ngày**: Ý nghĩa: Lọc theo **Ngày xuất mượn**. Lần đầu là **Hôm nay**
- **Lưới phiếu cho mượn**: Ý nghĩa: Chỉ hiện phiếu **chưa Đã trả**
- **Cột Trạng thái trả**: Ý nghĩa: **Chưa trả** / **Đang trả**

Các cột: **Ngày xuất mượn**, **Mã phiếu**, **Mã phiếu gốc**, **Kho xuất**, **Kho mượn**, **Trạng thái trả**, **Trạng thái thu**, **Ghi chú**, **Người tạo**, **Ngày tạo**, **Người sửa**, **Ngày sửa**. Cửa sổ có thêm nút **Tải lại**, Trình chọn cột và ô **Tìm kiếm…**. **Nhấp đúp** vào dòng để chọn.

**cửa sổ phiếu nhập trả:**

![Hình 2: cửa sổ THÊM MỚI - PHIẾU NHẬP TRẢ, CHO MƯỢN](/posts/2026-11-07-kho-b02-1-huong-dan-lap-phieu-nhap-tra-hang-cho-muon/hinh-02-form-them-phieu-nhap-tra.png)

- **NGÀY NHẬP**: Ý nghĩa: Bắt buộc, mặc định hôm nay
- **KHO TRẢ**: Ý nghĩa: Kho đại diện cho đối tác, lấy theo **Kho mượn** của phiếu xuất, khoá
- **KHO NHẬP**: Ý nghĩa: Bắt buộc, mặc định = **Kho xuất** của phiếu cho mượn; đổi được
- **MÃ PHIẾU GỐC**: Ý nghĩa: Chép từ phiếu xuất, sửa được
- **MÃ PHIẾU**: Ý nghĩa: Chữ mờ **MÃ TẠO TỰ ĐỘNG**
- **KHÁCH HÀNG**: Ý nghĩa: Chọn khi có dòng trả bằng tiền để ghi công nợ
- **TỪ PHIẾU**: Ý nghĩa: Mã phiếu xuất cho mượn đã chọn, khoá
- **GHI CHÚ**: Ý nghĩa: Ghi chú phiếu
- **Bảng chi tiết**: Ý nghĩa: Xem bảng cột dưới
- **TỪ PHIẾU XUẤT**: Ý nghĩa: Chọn lại phiếu cho mượn khác (chỉ khi thêm mới)
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**Các cột trong bảng chi tiết:**

- **STT**: Nhập / tự tính: Tự đánh số
- **Hàng hóa**: Nhập / tự tính: Theo phiếu xuất, **khoá**
- **Tên in**: Nhập / tự tính: Thường để trống
- **Đvt**: Nhập / tự tính: Theo phiếu xuất, khoá
- **Khối lượng, Kiện, M³**: Nhập / tự tính: Tự tính theo Số lượng
- **Số lượng**: Nhập / tự tính: **Nhập** – mặc định = số còn phải trả
- **Trả bằng tiền**: Nhập / tự tính: **Tick** nếu dòng này đối tác trả tiền thay hàng (gợi ý: *Không tính tồn kho*)
- **Đơn giá**: Nhập / tự tính: Mặc định theo phiếu xuất, **sửa được**
- **Thành tiền**: Nhập / tự tính: Số lượng × Đơn giá, tự tính
- **Chú thích**: Nhập / tự tính: **Nhập** ghi chú dòng
- **(cột cuối, không tiêu đề)**: Nhập / tự tính: Biểu tượng thùng rác – xoá dòng

Dòng cuối bảng: **TỔNG CỘNG: <số dòng>** và tổng Khối lượng, Kiện, M³, Số lượng, Thành tiền. Bảng rộng hơn cửa sổ: Hình 2, Hình 3 đã kéo thanh cuộn ngang sang phải (cột **Hàng hóa**, **Tên in** nằm bên trái); tiêu đề cột **Trả bằng tiền** hiện rút gọn *Trả bằ…*.

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Mượn hàng
   ↓
Phiếu nhập trả
   ↓
Thêm mới → DANH SÁCH - PHIẾU CHO MƯỢN → nhấp đúp phiếu
```

```text
Phiếu nhập trả → Thêm mới
      ↓
DANH SÁCH - PHIẾU CHO MƯỢN → đổi khoảng ngày → nhấp đúp phiếu XM…
      ↓
cửa sổ điền sẵn: KHO TRẢ, KHO NHẬP, TỪ PHIẾU, các dòng còn phải trả
      ↓
Sửa Số lượng = số thực trả · tick "Trả bằng tiền" nếu trả tiền
      ↓  có dòng trả tiền → chọn KHÁCH HÀNG, kiểm Đơn giá
Lưu lại ── vượt số còn lại / kỳ đã khoá? ──► sửa → Lưu lại
      ↓
"Lưu thành công"
      ├── Dòng trả hàng: tồn KHO NHẬP tăng
      ├── Dòng trả tiền: công nợ khách hàng tăng (nếu có KHÁCH HÀNG)
      └── Phiếu xuất cho mượn: Đang trả / Đã trả
      ↓
(Kế toán) Phiếu thu → Hàng cho mượn → thu tiền
```

### Bước 1 – Mở danh sách phiếu cho mượn

Vào **Mượn hàng → Phiếu nhập trả**, bấm **Thêm mới**. Cửa sổ **DANH SÁCH - PHIẾU CHO MƯỢN** mở ra (Hình 1).

### Bước 2 – Chọn phiếu cho mượn

1. Đổi khoảng ngày  cho chứa **Ngày xuất mượn** (mặc định chỉ hôm nay – [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).
2. Tìm theo **Mã phiếu** hoặc **Kho mượn** (tên đối tác).
3. **Nhấp đúp** vào dòng phiếu.

cửa sổ **THÊM MỚI - PHIẾU NHẬP TRẢ, CHO MƯỢN** mở ra (Hình 2), đã điền **KHO TRẢ**, **KHO NHẬP**, **TỪ PHIẾU**, **MÃ PHIẾU GỐC** và các dòng hàng **chưa trả hết** với **Số lượng** = số còn phải trả.

### Bước 3 – Nhập số lượng và cách trả

Với từng dòng:

- Sửa **Số lượng** thành số **thực trả** lần này (không vượt số còn phải trả).
- Đối tác trả tiền thay hàng: tick ô **Trả bằng tiền**, kiểm tra **Đơn giá** (giá bán cho đối tác).
- Dòng chưa trả lần này: đặt **Số lượng** = 0 hoặc bấm biểu tượng thùng rác cuối dòng để xoá.
- Ghi **Chú thích** nếu cần (ví dụ *hàng trả bị trầy*).

Mẹo: chuột phải vào ô **Số lượng**, **Trả bằng tiền**, **Đơn giá** hoặc **Chú thích** → **Áp dụng cho những dòng dưới**.

![Hình 3: Dòng hàng tick Trả bằng tiền](/posts/2026-11-07-kho-b02-1-huong-dan-lap-phieu-nhap-tra-hang-cho-muon/hinh-03-dong-tra-bang-tien.png)

### Bước 4 – Nhập thông tin chung

- **NGÀY NHẬP**: ngày nhận hàng / thoả thuận trả tiền.
- **KHO NHẬP**: kho nhận lại hàng (mặc định là kho đã xuất cho mượn).
- **KHÁCH HÀNG**: phải đối chiếu đúng đối tác nếu có dòng trả bằng tiền để ghi công nợ; phần mềm hiện không tự bắt buộc. Dừng và báo kế toán nếu chưa xác định khách hàng, không bỏ trống rồi coi đã ghi đủ khoản phải thu.
- **GHI CHÚ**.

### Bước 5 – Lưu lại

Bấm **Lưu lại** ⑪.

- Thiếu trường bắt buộc: dưới cửa sổ hiện **Chọn ngày nhập** / **Vui lòng chọn kho nhập**.
- Số lượng âm: cảnh báo **<số dòng>. Số lượng >= 0**.
- Trả nhiều hơn số còn lại: **Lỗi thêm: <tên hàng> chỉ còn lại (<số>) từ đơn**.
- Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại.

### Bước 6 – Kiểm tra và thu tiền

- Phiếu mới có **Mã phiếu** **NT…**, **Từ phiếu** = mã phiếu cho mượn, **Tổng tiền bán** = tổng các dòng trả bằng tiền.
- Mở lại phiếu xuất cho mượn: **Trạng thái trả** = **Đang trả** hoặc **Đã trả**, **SL còn lại** giảm.
- Có dòng trả bằng tiền: báo kế toán lập **Phiếu thu → Thêm mới → Hàng cho mượn**, bấm **TỪ PHIẾU** chọn phiếu nhập trả này (sổ tay Kế toán, KT-A03). Cột **Số tiền đã thu** cập nhật theo phiếu thu.

### Sửa phiếu

Bấm **Sửa** → **CẬP NHẬT - PHIẾU NHẬP TRẢ, CHO MƯỢN**. Sửa được ngày, kho nhập, khách hàng, mã phiếu gốc, ghi chú, số lượng, trả bằng tiền, đơn giá, chú thích. Không đổi được phiếu cho mượn gốc. **Không sửa được khi đã có phiếu thu.**

## 6. Giải thích các thông tin trên màn hình

- **Ngày nhập**: Ý nghĩa: Ngày đối tác trả; Bắt buộc: Có; Lưu ý: Dùng lọc danh sách, kiểm khoá sổ
- **Kho trả**: Ý nghĩa: Kho đại diện cho đối tác; Bắt buộc: Có; Lưu ý: Lấy theo phiếu xuất, khoá
- **Kho nhập**: Ý nghĩa: Kho nhận lại hàng; Bắt buộc: Có; Lưu ý: Tồn kho này tăng với dòng trả bằng hàng
- **Mã phiếu gốc**: Ý nghĩa: Số chứng từ giấy; Bắt buộc: Không; Lưu ý: Mặc định chép từ phiếu xuất
- **Mã phiếu**: Ý nghĩa: Mã phiếu nhập trả (**NT…**); Lưu ý: Tự tạo khi lưu
- **Khách hàng**: Ý nghĩa: Khách hàng ghi công nợ; Bắt buộc: Không; Lưu ý: Chỉ có tác dụng khi có dòng trả bằng tiền
- **Từ phiếu**: Ý nghĩa: Mã phiếu xuất cho mượn; Lưu ý: Chỉ xem
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu; Bắt buộc: Không
- **Hàng hóa, Đvt**: Ý nghĩa: Theo dòng phiếu xuất; Lưu ý: Khoá
- **Số lượng**: Ý nghĩa: Số lượng trả lần này; Bắt buộc: Có; Lưu ý: ≥ 0 và ≤ số còn phải trả
- **Trả bằng tiền**: Ý nghĩa: Dòng trả tiền thay hàng; Bắt buộc: Không; Lưu ý: Tick: không cộng tồn, tính vào Tổng tiền bán
- **Đơn giá**: Ý nghĩa: Giá tính tiền khi trả bằng tiền; Bắt buộc: Không; Lưu ý: Mặc định theo phiếu xuất
- **Thành tiền**: Ý nghĩa: Số lượng × Đơn giá; Lưu ý: Hệ thống tính lại khi lưu
- **Chú thích**: Ý nghĩa: Ghi chú dòng; Bắt buộc: Không

**Số còn phải trả** của một dòng = Số lượng cho mượn − tổng số lượng các phiếu nhập trả trước (cả trả bằng hàng và bằng tiền).

**Tổng tiền bán** = tổng Thành tiền của các dòng **Trả bằng tiền**; đây là số ghi tăng công nợ khách hàng.

## 7. Kiểm tra sau khi thực hiện

- Phiếu được lưu với mã **NT…**.
- Dòng trả bằng hàng: **tồn KHO NHẬP tăng**; sổ cái kho ghi dòng nhập kho.
- Dòng trả bằng tiền: tồn không đổi; sổ cái kho ghi nhận hàng đã bán cho đối tác.
- Có **KHÁCH HÀNG** và Tổng tiền bán > 0: **công nợ phải thu khách hàng tăng** bằng Tổng tiền bán.
- Phiếu xuất cho mượn gốc: **SL đã trả** tăng, **Trạng thái trả** = **Đang trả** / **Đã trả**; phiếu đã trả hết không còn hiện khi chọn lần sau.

## 8. Những điều cần lưu ý

⚠️ Cột **Tên in** có thể cho sửa nhưng ghi chú nguồn chưa xác nhận giá trị này được lưu ở chi tiết. Không dùng làm nơi duy nhất ghi nhận diện cần giữ; đối chiếu Xem lại và bản in, báo IT nếu không giữ giá trị.

⚠️ **Mỗi phiếu nhập trả chỉ lấy từ một phiếu xuất cho mượn.** Đối tác trả hàng của nhiều đợt thì lập nhiều phiếu nhập trả.

⚠️ **Trả bằng tiền không nhập kho.** Đừng tick nhầm khi hàng thực sự về kho – tồn kho sẽ thiếu.

⚠️ Trả bằng tiền mà **không chọn KHÁCH HÀNG** thì **không ghi công nợ**, kế toán khó theo dõi tiền phải thu.

⚠️ Đã có phiếu thu thì **không sửa / xoá** được phiếu nhập trả.

⚠️ Hệ thống không chọn lô hàng cho dòng nhập trả.

### "Lỗi thêm: <tên hàng> chỉ còn lại (<số>) từ đơn" 

Nguyên nhân: số lượng trả lớn hơn số còn phải trả của dòng trên phiếu cho mượn.
Cách xử lý: giảm **Số lượng** tối đa bằng số trong câu báo.

### Dưới cửa sổ báo "Vui lòng chọn kho nhập" / "Chọn ngày nhập" 

Nguyên nhân: thiếu trường bắt buộc.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### Không thấy phiếu cho mượn trong DANH SÁCH - PHIẾU CHO MƯỢN 

Kiểm tra: khoảng ngày (mặc định chỉ hôm nay); phiếu đã **Đã trả**; chi nhánh đang làm việc; tài khoản có được phân kho của phiếu không.
Cách xử lý: mở rộng khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)) hoặc kiểm tra phiếu ở [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-0-tong-quan-man-hinh-phieu-xuat-cho-muon/).

### "Lỗi sửa: Phiếu đang thu" / "Lỗi sửa: Phiếu đã thu" 

Nguyên nhân: đã có phiếu thu cho phiếu này.
Cách xử lý: xem [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP TRẢ](/bai-viet/2026-11-07-kho-b02-0-tong-quan-man-hinh-phieu-nhap-tra/), phần “Vướng mắc thường gặp”.

### "… Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: **NGÀY NHẬP** thuộc kỳ đã khoá sổ.
Cách xử lý: liên hệ kế toán trưởng.

## 10. Câu hỏi thường gặp

**Đối tác trả từng đợt được không?**
Được. Mỗi đợt lập một phiếu nhập trả từ cùng phiếu cho mượn; phiếu cho mượn còn hiện trong danh sách chọn tới khi trả hết.

**Đơn giá trả bằng tiền lấy ở đâu?**
Mặc định theo **Đơn giá** trên phiếu xuất cho mượn; sửa được trên phiếu nhập trả.

**Muốn đổi sang phiếu cho mượn khác khi đang lập?**
Bấm **TỪ PHIẾU XUẤT** ở góc dưới cửa sổ và chọn lại. Các dòng của phiếu mới thay các dòng cũ.

**Trả bằng tiền rồi, công nợ ghi ở đâu?**
Công nợ phải thu của **KHÁCH HÀNG** đã chọn (sổ tay Kế toán – Công nợ khách hàng).

## 11. Công việc tiếp theo

```text
Phiếu nhập trả
        ↓  (có dòng trả bằng tiền)
(Kế toán) Phiếu thu → Hàng cho mượn → Số tiền đã thu / Trạng thái thu
        ↓
Đối chiếu số còn ở đối tác → Tổng hợp mượn hàng (KHO-D01.0)
```

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH CHI TIẾT XUẤT MƯỢN](/bai-viet/2026-11-07-kho-d02-0-tong-quan-man-hinh-chi-tiet-xuat-muon/) – Tổng quan màn hình Chi tiết xuất mượn.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP TRẢ](/bai-viet/2026-11-07-kho-b02-0-tong-quan-man-hinh-phieu-nhap-tra/) – Tổng quan màn hình Phiếu nhập trả
- [HƯỚNG DẪN LẬP PHIẾU XUẤT CHO MƯỢN](/bai-viet/2026-11-07-kho-b01-1-huong-dan-lap-phieu-xuat-cho-muon/) – Hướng dẫn lập phiếu xuất cho mượn
- [TỔNG QUAN MÀN HÌNH CHI TIẾT XUẤT MƯỢN](/bai-viet/2026-11-07-kho-d02-0-tong-quan-man-hinh-chi-tiet-xuat-muon/) – Tổng quan màn hình Chi tiết xuất mượn
- KT-A03 – Phiếu thu (Hàng cho mượn)
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/) – Công nợ khách hàng
