---
title: "HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ"
date: "2026-11-07"
summary: "Khi khách trả lại hàng đã mua, bộ phận bán hàng lập phiếu khách trả hàng (sổ tay Bán hàng)."
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

Khi khách trả lại hàng đã mua, bộ phận bán hàng lập **phiếu khách trả hàng** (sổ tay Bán hàng). Phiếu đó chưa làm thay đổi tồn kho và công nợ. Thủ kho nhận hàng về và lập **phiếu nhập kho → Nhập khách trả hàng** từ phiếu khách trả: hệ thống lấy sẵn khách hàng, kho, hàng hoá, số lượng còn chờ nhập và giá.

Khi lưu: **tồn kho tăng**, **công nợ phải thu của khách hàng giảm**, trạng thái nhập của phiếu khách trả được cập nhật.

Bài này cũng áp dụng khi **Sửa** phiếu nhập kho hàng trả (cửa sổ **CẬP NHẬT PHIẾU NHẬP KHO**). Nhập hàng mua của NCC xem [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Phiếu nhập kho**.
- Đã có **phiếu khách trả hàng** (sổ tay Bán hàng – Khách trả hàng) còn hàng chưa nhập kho.
- Hàng trả đã về kho và được kiểm đếm.

## 2. Mở chức năng

**Kho hàng → Phiếu nhập kho → Thêm mới → Nhập khách trả hàng**

## 3. Nhận biết màn hình

**Cửa sổ chọn phiếu khách trả hàng:**

![Hình 1: Cửa sổ DANH SÁCH PHIẾU KHÁCH TRẢ HÀNG](/posts/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/hinh-01-danh-sach-phieu-khach-tra-hang.png)

- **Ô chọn khoảng ngày**: Ý nghĩa: Lọc theo **Ngày trả hàng**. Mặc định **Hôm nay**
- **Lưới phiếu khách trả**: Ý nghĩa: Phiếu khách trả hàng của chi nhánh trong khoảng ngày
- **Dòng phiếu**: Ý nghĩa: **Nhấp đúp** để chọn (cửa sổ không có nút Đồng ý). Ảnh: KT00113307 từ XK00113306

Các cột: **Ngày trả hàng**, **Mã phiếu** (**KT…**), **Từ phiếu** (mã **phiếu xuất kho** gốc, **XK…**), **Nhà cung cấp** (thực chất là **tên khách hàng** – nhãn cột sai), **Tiền hàng**, **Chiết khấu**, **Thuế VAT**, **Tổng tiền**, **Mã khách hàng**, **Trạng thái xuất**, **Ghi chú**. **Tiền hàng**, **Tổng tiền** hiện số chưa định dạng (ví dụ *164000*, *177120*). Đóng cửa sổ bằng dấu ✕ góc trên.

**cửa sổ phiếu nhập kho:** giống [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/) (Hình 2 của bài đó), khác ở các điểm sau:

![Hình 2: cửa sổ THÊM MỚI PHIẾU NHẬP KHO nạp từ phiếu khách trả](/posts/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/hinh-02-form-nhap-khach-tra.png)

- **NGƯỜI GIAO HÀNG**: Khi nhập khách trả hàng: Tên khách hàng, tự điền, chỉ xem
- **KHO NHẬP**: Khi nhập khách trả hàng: Tự điền theo kho nhập trên phiếu khách trả, sửa được
- **MÃ PHIẾU GỐC**: Khi nhập khách trả hàng: Bắt buộc, nhập tay (số biên bản nhận hàng trả)
- **GHI CHÚ**: Khi nhập khách trả hàng: Tự điền theo ghi chú phiếu khách trả, sửa được
- **Bảng HÀNG HÓA**: Khi nhập khách trả hàng: Các dòng của phiếu khách trả **chưa nhập đủ**; **Số lượng** = số còn chờ nhập; **Tên in** theo tên in hàng bán. Lúc mở chỉ thấy **STT**, **Hàng hóa**, **Tên in**, **Thao tác** – kéo thanh cuộn ngang (bước 3)
- **–**: Thành phần: Tab **CHI PHÍ**; Khi nhập khách trả hàng: Thường không dùng cho hàng trả
- **TỪ PHIẾU TRẢ HÀNG, TỪ PHIẾU MUA HÀNG**: Khi nhập khách trả hàng: Chọn lại chứng từ nguồn (chỉ khi thêm mới)

**NGÀY NHẬP KHO**, **MÃ PHIẾU**, **VẬN CHUYỂN**, **SỐ HOÁ ĐƠN**, **Lưu lại** / **Đóng** như [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/).

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kho hàng
   ↓
Phiếu nhập kho
   ↓
Thêm mới → Nhập khách trả hàng
```

```text
(Bán hàng) Phiếu khách trả hàng → hàng chờ nhập kho
      ↓
Phiếu nhập kho → Thêm mới → Nhập khách trả hàng
      ↓
DANH SÁCH PHIẾU KHÁCH TRẢ HÀNG → đổi khoảng ngày → nhấp đúp phiếu
      ↓
cửa sổ điền sẵn: Người giao (khách), Kho nhập, Ghi chú, các dòng còn chờ nhập
      ↓
Nhập Mã phiếu gốc · kiểm tra Kho nhập · sửa Số lượng thực nhận
      ↓
Lưu lại ── viền đỏ / vượt số còn lại / khoá sổ? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → tồn kho tăng · công nợ khách hàng giảm
```

### Bước 1 – Mở danh sách phiếu khách trả hàng

Vào **Kho hàng → Phiếu nhập kho**, bấm **Thêm mới** → **Nhập khách trả hàng**. Cửa sổ **DANH SÁCH PHIẾU KHÁCH TRẢ HÀNG** mở ra (Hình 1).

### Bước 2 – Chọn phiếu khách trả

1. Đổi khoảng ngày  cho chứa **Ngày trả hàng** của phiếu (mặc định chỉ hôm nay – [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).
2. Tìm theo **Mã phiếu** (KT…), **Từ phiếu** (mã phiếu xuất kho XK…) hoặc tên khách ở ô **Tìm kiếm…**.
3. **Nhấp đúp** vào dòng phiếu.

### Bước 3 – Kiểm tra cửa sổ đã điền sẵn

cửa sổ **THÊM MỚI PHIẾU NHẬP KHO** mở ra (Hình 2) với **NGƯỜI GIAO HÀNG** = tên khách, **KHO NHẬP** và **GHI CHÚ** theo phiếu khách trả, bảng **HÀNG HÓA** gồm các dòng còn chờ nhập.

⚠️ Bảng **HÀNG HÓA** lúc mở chỉ thấy **STT**, **Hàng hóa**, **Tên in**, **Thao tác**: cột **Hàng hóa** và **Tên in** rất rộng nên **Đvt**, **Khối lượng**, **Kiện**, **M³**, **Số lượng**, **Chú thích**… nằm bên phải (cột không bị ẩn). **Kéo thanh cuộn ngang ở đáy bảng** sang phải để thấy và nhập **Số lượng** (như Hình 3 của [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/)).

Nếu bảng trống: phiếu khách trả đã được nhập kho đủ – chọn phiếu khác bằng nút **TỪ PHIẾU TRẢ HÀNG**.

### Bước 4 – Nhập thông tin chung

- **NGÀY NHẬP KHO**: ngày hàng trả về kho, mặc định hôm nay.
- **KHO NHẬP**: giữ kho theo phiếu khách trả hoặc chọn kho thực nhận.
- **MÃ PHIẾU GỐC**: số biên bản nhận hàng trả; không có thì ghi **không có**.
- **SỐ HOÁ ĐƠN**, **VẬN CHUYỂN**: nhập nếu có.

### Bước 5 – Nhập số lượng thực nhận

- Sửa **Số lượng** thành số thực nhận (không lớn hơn số còn chờ nhập).
- Dòng chưa nhận: xoá bằng biểu tượng thùng rác; lần sau vẫn nhập tiếp được.
- Ghi **Chú thích** (ví dụ *mặt ván trầy*).

### Bước 6 – Lưu lại

Bấm **Lưu lại**. Các câu báo giống [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/) bước 7:

- Thiếu thông tin chung: ô viền đỏ, lời nhắc **Chọn ngày nhập kho**, **Vui lòng chọn kho nhập**, **Vui lòng nhập mã phiếu gốc hoặc mã phiếu từ NCC.../ không có thì ghi không có thì ghi không có**, **Vui lòng ghi lý do nhập (khách trả hàng/ nhập mua...)**.
- Vượt số còn chờ nhập: **CẢNH BÁO – Lỗi thêm: <tên hàng> chỉ còn lại (<số>) từ đơn**.
- Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại.

### Bước 7 – Kiểm tra kết quả

Phiếu mới hiện trên danh sách với **Mã phiếu** dạng **NK…**, **Từ phiếu** = mã phiếu khách trả (**KT…**), **Mã phiếu gốc** như đã nhập, **Người giao** = khách hàng, **KH Tên rút gọn** = tên rút gọn khách (thử 11/10/2026: NK00113308 từ KT00113307, cột **Ngày đến hạn** để trống).

### Sửa phiếu

Như [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/) – mục Sửa phiếu: sửa được ngày (không lùi nếu không có quyền), kho, mã phiếu gốc, ghi chú, số lượng, tên in, chú thích, xoá dòng; không thêm mặt hàng mới, không đổi khách hàng.

## 6. Giải thích các thông tin trên màn hình

- **Ngày nhập kho**: Ý nghĩa: Ngày hàng trả về kho; Bắt buộc: Có; Lưu ý: Mặc định hôm nay; ngày cũ cần quyền
- **Người giao hàng**: Ý nghĩa: Khách hàng trả hàng; Lưu ý: Tự điền, chỉ xem
- **Kho nhập**: Ý nghĩa: Kho nhận hàng trả; Bắt buộc: Có; Lưu ý: Mặc định theo phiếu khách trả
- **Mã phiếu gốc**: Ý nghĩa: Số biên bản nhận hàng; Bắt buộc: Có; Lưu ý: Không có thì ghi "không có"
- **Mã phiếu**: Ý nghĩa: Mã phiếu nhập kho (**NK…**); Lưu ý: Tự tạo khi lưu
- **Ghi chú**: Ý nghĩa: Lý do nhập; Bắt buộc: Có; Lưu ý: Mặc định theo phiếu khách trả
- **Vận chuyển, Số hoá đơn**: Ý nghĩa: Thông tin chứng từ; Bắt buộc: Không
- **Hàng hóa, Đvt**: Ý nghĩa: Theo dòng phiếu khách trả; Lưu ý: Khoá
- **Tên in**: Ý nghĩa: Tên in trên phiếu; Bắt buộc: Không; Lưu ý: Mặc định theo tên in hàng bán
- **Số lượng**: Ý nghĩa: Số thực nhận; Bắt buộc: Có; Lưu ý: ≥ 0 và ≤ số còn chờ nhập
- **Khối lượng / Kiện / M³**: Ý nghĩa: Theo Số lượng × thông số hàng; Lưu ý: Tự tính
- **Chú thích**: Ý nghĩa: Ghi chú dòng; Bắt buộc: Không; Lưu ý: Mặc định theo phiếu khách trả

## 7. Kiểm tra sau khi thực hiện

- Phiếu nhập kho được lưu với mã **NK…**.
- **Tồn kho tăng** ở kho nhập.
- **Công nợ phải thu khách hàng giảm** bằng tổng tiền hàng trả của phiếu nhập (giá bán sau chiết khấu, cộng VAT, × số lượng nhập).
- **Sổ cái kho** ghi dòng nhập hàng trả với giá = giá vốn lúc xuất bán hàng đó (không có thì theo giá bình quân hiện hành).
- Trạng thái nhập của phiếu khách trả hàng được cập nhật.

## 8. Những điều cần lưu ý

⚠️ Khi sửa lượng hàng trả đã nhập, kiểm tra tồn và các phiếu xuất sau của mặt hàng; không mặc định mọi luồng sửa đều tự chặn âm tồn ([HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/)).

⚠️ **Công nợ khách hàng chỉ giảm khi nhập kho**, không giảm khi bán hàng lập phiếu khách trả.

⚠️ Hàng trả được ghi vào sổ cái kho theo **giá vốn lúc bán**, không theo giá bán; tiền giảm công nợ thì theo **giá bán**.

⚠️ Cửa sổ chọn liệt kê mọi phiếu khách trả trong khoảng ngày, kể cả phiếu đã nhập đủ (chọn vào thì bảng trống).

⚠️ Mỗi phiếu nhập chỉ lấy từ **một** phiếu khách trả hàng.

⚠️ Bấm **Đóng** hoặc dấu ✕ là đóng cửa sổ **không lưu**, không hỏi lại.

### Không thấy phiếu khách trả trong DANH SÁCH PHIẾU KHÁCH TRẢ HÀNG 

Kiểm tra: khoảng ngày (mặc định chỉ hôm nay); chi nhánh đang làm việc; phiếu khách trả đã được lập chưa.
Cách xử lý: mở rộng khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)) hoặc liên hệ bộ phận bán hàng.

### Bảng HÀNG HÓA trống sau khi chọn phiếu 

Nguyên nhân: mọi dòng của phiếu khách trả đã được nhập kho.
Cách xử lý: kiểm tra phiếu nhập kho đã có (tìm theo mã phiếu khách trả ở cột **Từ phiếu**).

### "CẢNH BÁO – Lỗi thêm: <tên hàng> chỉ còn lại (<số>) từ đơn" 

Nguyên nhân: số lượng nhập lớn hơn số còn chờ nhập của dòng phiếu khách trả.
Cách xử lý: giảm Số lượng tối đa bằng số trong câu báo.

### Ô viền đỏ ở MÃ PHIẾU GỐC / KHO NHẬP / GHI CHÚ 

Nguyên nhân: thiếu trường bắt buộc.
Cách xử lý: nhập đủ rồi **Lưu lại** (xem [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/) phần “Vướng mắc thường gặp”).

### "CẢNH BÁO – Lỗi thêm: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: ngày nhập kho thuộc kỳ kế toán đã khoá.
Cách xử lý: liên hệ kế toán.

## 10. Câu hỏi thường gặp

**Khách trả một phần hàng được không?**
Được. Bộ phận bán hàng lập phiếu khách trả đúng số trả; thủ kho nhập theo số thực nhận.

**Hàng trả bị hỏng có nhập vào kho riêng được không?**
Chọn **KHO NHẬP** là kho hàng hỏng cho cả phiếu. Nếu một phần tốt, một phần hỏng, lập hai lần nhập (mỗi lần một kho) từ cùng phiếu khách trả.

**Cột "Nhà cung cấp" trong cửa sổ chọn là gì?**
Là tên khách hàng trả hàng (nhãn cột đặt chưa đúng, đã báo IT).

## 11. Công việc tiếp theo

```text
Phiếu nhập kho (khách trả hàng)
        ↓
In phiếu nhập kho hàng trả (KHO-A04.4)
        ↓
(Kế toán) Đối chiếu công nợ khách hàng · chi trả lại tiền nếu khách đã thanh toán
```

**Tiếp theo:** [HƯỚNG DẪN IN PHIẾU NHẬP KHO VÀ TEM KIỆN](/bai-viet/2026-11-07-kho-a04-4-huong-dan-in-phieu-nhap-kho-va-tem-kien/) – Hướng dẫn in phiếu nhập kho và tem kiện.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/) – Tổng quan màn hình Phiếu nhập kho
- [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/) – Hướng dẫn nhập kho hàng mua từ phiếu mua hàng
- [HƯỚNG DẪN IN PHIẾU NHẬP KHO VÀ TEM KIỆN](/bai-viet/2026-11-07-kho-a04-4-huong-dan-in-phieu-nhap-kho-va-tem-kien/) – Hướng dẫn in phiếu nhập kho và tem kiện
- [TỔNG QUAN MÀN HÌNH KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-a04-0-tong-quan-man-hinh-khach-tra-hang/) – Tổng quan màn hình Khách trả hàng (sổ tay Bán hàng)
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ KHÁCH TRẢ HÀNG](/bai-viet/2026-11-07-bh-b06-0-tong-quan-man-hinh-thong-ke-khach-tra-hang/) – Tổng quan màn hình Khách trả hàng (thống kê)
- Sổ tay Kế toán – Thống kê công nợ khách hàng
