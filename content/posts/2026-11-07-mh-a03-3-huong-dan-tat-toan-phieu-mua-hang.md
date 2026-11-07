---
title: "HƯỚNG DẪN TẤT TOÁN PHIẾU MUA HÀNG"
date: "2026-11-07"
summary: "Tất toán phiếu mua hàng là đóng phần số lượng đã ghi trên phiếu mua nhưng sẽ không nhập kho nữa (NCC giao thiếu, hàng lỗi bị từ chối tại chỗ, huỷ một phần…)."
module: "Mua hàng"
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

**Tất toán** phiếu mua hàng là đóng phần số lượng đã ghi trên phiếu mua nhưng **sẽ không nhập kho nữa** (NCC giao thiếu, hàng lỗi bị từ chối tại chỗ, huỷ một phần…). Sau khi tất toán:

- Phần đó không còn là **hàng chờ nhập kho**.
- **Thành tiền** từng dòng và **Tổng tiền** phiếu giảm theo số lượng tất toán.
- **Trạng thái nhập** được tính lại – ví dụ mua 100, đã nhập kho 80, tất toán 20 → **Đã nhập**.

Chức năng này dùng chung cho **Phiếu mua dịch vụ** ([TỔNG QUAN MÀN HÌNH PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-0-tong-quan-man-hinh-phieu-mua-dich-vu/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Tất toán** của màn hình **Phiếu mua hàng**.
- Phiếu mua còn số lượng chưa nhập kho (**SL còn lại** > 0).
- Đã thống nhất với NCC / thủ kho / quản lý phần số lượng không nhập nữa.

## 2. Mở chức năng

**Mua hàng → Phiếu mua hàng → Tất toán** (cột **Thao tác** của dòng phiếu)

## 3. Nhận biết màn hình

![Hình 1: cửa sổ TẤT TOÁN - PHIẾU MUA HÀNG](/posts/2026-11-07-mh-a03-3-huong-dan-tat-toan-phieu-mua-hang/hinh-01-form-tat-toan-mua-hang.png)

- **Tiêu đề TẤT TOÁN - PHIẾU MUA HÀNG**: Ý nghĩa: Đang ở chế độ tất toán
- **Cột SL đã nhập**: Ý nghĩa: Số lượng đã được thủ kho nhập kho
- **Cột SL tất toán**: Ý nghĩa: **Ô duy nhất nhập được** trong bảng
- **Cột SL còn lại, Thành tiền**: Ý nghĩa: Tự tính lại theo SL tất toán
- **Lưu lại / Đóng**: Ý nghĩa: Lưu tất toán / thoát không lưu

Trong chế độ tất toán:

- Các cột **Hàng hóa**, **Số lượng**, **Đơn giá**, **Chiết khấu**, **Thuế VAT**, **Chú thích**, **Chú thích nội bộ** bị khoá; nút **+** và nút xoá dòng bị tắt.
- Không có nút **Thêm một hàng**, **Từ bảng giá**, **Từ đơn hàng**.
- **NGÀY MUA HÀNG**, **NHÀ CUNG CẤP**, **NGÀY HẠCH TOÁN**, **TÍNH GIÁ THÀNH** bị khoá.

⚠️ Không thấy cột **SL đã nhập**, **SL tất toán**, **SL còn lại**: chuột phải vào tiêu đề cột của bảng → **Khôi phục bố cục** → **Đồng ý** (bảng nhớ bố cục cột từ cửa sổ **Thêm mới**).

## 4. Trình tự công việc

```text
Danh sách Phiếu mua hàng → Tất toán (dòng phiếu)
      ↓
Nhập SL tất toán cho từng dòng không nhập kho nữa
      ↓
Lưu lại ── vượt mức cho phép? ──► sửa SL tất toán → Lưu lại
      ↓
"Lưu thành công"
      ↓
Thành tiền, Tổng tiền giảm · Trạng thái nhập tính lại
```

### Bước 1 – Mở cửa sổ tất toán

Ở **PHIẾU MUA HÀNG - DANH SÁCH**, tìm phiếu (đổi khoảng ngày nếu cần – [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)), bấm **Tất toán** ở cột **Thao tác**. cửa sổ **TẤT TOÁN - PHIẾU MUA HÀNG** mở ra (Hình 1).

### Bước 2 – Xem số đã nhập kho

Đối chiếu từng dòng: **Số lượng** (mua), **SL đã nhập**, **SL còn lại**. Dòng có **SL còn lại** = 0 không cần tất toán.

### Bước 3 – Nhập số lượng tất toán

Bấm vào ô **SL tất toán**  của dòng không nhập tiếp, nhập **tổng số lượng không nhập nữa sau cập nhật**, gồm phần đã tất toán trước nếu có. Không gõ phần tăng thêm với ý định hệ thống tự cộng vào số cũ.

Ví dụ: mua **100**, đã nhập **80** → nhập **SL tất toán** = **20**. **SL còn lại** về 0, **Thành tiền** tính lại theo 80.

Dòng vẫn chờ nhập tiếp: giữ tổng tất toán đã được duyệt; chỉ giảm về 0 khi chủ ý mở lại và đã đối chiếu với người phụ trách.

### Bước 4 – Lưu lại

Bấm **Lưu lại**.

- SL tất toán lớn hơn **Số lượng**: góc màn hình báo **<số dòng>. Số lượng tất toán cho phép 0 hoặc <Số lượng>**.
- SL tất toán lớn hơn phần chưa nhập kho: hệ thống báo **CẢNH BÁO – Lỗi sửa: Tất toán vượt mức cho phép: <số tối đa>**.
- Hợp lệ: hiện **Lưu thành công**, cửa sổ đóng, danh sách tải lại.

### Bước 5 – Kiểm tra kết quả

Trên danh sách, cột **Tổng tiền** giảm, **Trạng thái nhập** có thể chuyển **Đã nhập**. Mở lại **Tất toán** (hoặc nhấp đúp để **Xem lại**) để xem **SL tất toán**, **SL còn lại** từng dòng.

### Bỏ tất toán

Mở lại **Tất toán**, đưa **SL tất toán** về số nhỏ hơn hoặc 0, bấm **Lưu lại**. Phần đó lại thành hàng chờ nhập kho.

## 6. Giải thích các thông tin trên màn hình

- **Số lượng**: Ý nghĩa: Số lượng mua trên phiếu; Quy tắc: Khoá
- **SL đã nhập**: Ý nghĩa: Tổng số đã nhập kho từ dòng này; Quy tắc: Tự tính từ các phiếu nhập kho
- **SL tất toán**: Ý nghĩa: Số lượng không nhập kho nữa; Quy tắc: Từ 0 đến (Số lượng × quy đổi − SL đã nhập)
- **SL còn lại**: Ý nghĩa: Số lượng − SL đã nhập − SL tất toán; Quy tắc: Tự tính
- **Thành tiền**: Ý nghĩa: Đơn giá VAT × (Số lượng − SL tất toán); Quy tắc: Tự tính lại khi lưu
- **Tổng tiền (danh sách)**: Ý nghĩa: Tổng Thành tiền các dòng; Quy tắc: Tự tính lại khi lưu

**Cách tính Trạng thái nhập sau tất toán:**

- **Đã nhập**: Điều kiện của dòng: (Số lượng − SL tất toán) ≤ SL đã nhập
- **Đang nhập**: Điều kiện của dòng: Chưa đủ, nhưng SL đã nhập > 0
- **Chưa nhập**: Điều kiện của dòng: SL đã nhập = 0 và chưa tất toán hết

Phiếu **Đã nhập** khi mọi dòng **Đã nhập**; **Đang nhập** khi có ít nhất một dòng đã / đang nhập.

## 7. Kiểm tra sau khi thực hiện

- **SL tất toán** được lưu cho từng dòng; **Thành tiền**, **Tổng tiền** giảm tương ứng.
- **Trạng thái nhập** của dòng và phiếu tính lại.
- Phần tất toán không còn ở **Hàng chờ nhập kho** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ HÀNG CHỜ NHẬP KHO](/bai-viet/2026-11-07-mh-b02-0-tong-quan-man-hinh-thong-ke-hang-cho-nhap-kho/)) và không hiện khi thủ kho chọn phiếu mua để nhập kho.
- Lịch sử phiếu ghi thêm một lần **Tất toán**.

## 8. Những điều cần lưu ý

⚠️ Tất toán **không xoá phiếu** và **không thay đổi tồn kho**. Với phiếu mua hàng hoá, công nợ NCC tính theo phiếu nhập kho nên tất toán **không** làm đổi công nợ.

⚠️ Với **phiếu mua dịch vụ**, công nợ NCC tính theo **Tổng tiền** của phiếu: tất toán làm **giảm công nợ NCC** đúng phần giảm.

⚠️ Tất toán phiếu mua **không** trả lại số lượng cho phiếu đặt hàng: phiếu đặt vẫn coi phần đó là "đã mua".

⚠️ Tất toán **hết** một phiếu chưa nhập kho dòng nào sẽ làm phiếu thành **Đã nhập**. Khi đó **Sửa** phiếu sẽ bị từ chối (**Lỗi sửa: Phiếu đã nhập**); muốn sửa phải bỏ tất toán trước.

⚠️ Trong cửa sổ tất toán, ô **CHỨNG TỪ/HĐ** và **GHI CHÚ** vẫn sửa được và được lưu cùng. Không sửa hai ô này nếu không chủ ý.

**Ví dụ cập nhật tổng, hệ số quy đổi 1:** Phiếu có lượng gốc 100, đã thực hiện 60, đã tất toán 10. Muốn kết thúc thêm 5 thì tổng SL tất toán sau cập nhật là 15, phần còn chờ là 100 − 60 − 15 = 25. Không nhập 5 để mong tự cộng thành 15. Ví dụ chỉ minh họa cách đọc trường; nếu đơn vị/quy đổi khác 1 hoặc mức cho phép trên màn không khớp hồ sơ, dừng xác nhận với người phụ trách trước lưu. Mở lại đúng phiếu để kiểm tra tổng và trạng thái sau khi lưu thành công.

**Riêng mua dịch vụ:** Không có bước nhập kho để làm căn cứ số đã nhập. Chỉ tất toán khi kế toán đã duyệt việc thay đổi giá trị phải trả; đối chiếu hóa đơn, thanh toán, phân bổ kho và kỳ giá thành liên quan. Tất toán không chứng minh NCC đã được thanh toán và không tự thay các chứng từ điều chỉnh/hoàn tiền cần có.

### "<số dòng>. Số lượng tất toán cho phép 0 hoặc <Số lượng>" 

Nguyên nhân: SL tất toán lớn hơn số lượng mua của dòng.
Cách xử lý: đối chiếu tổng tất toán muốn ghi với số gốc, số đã nhập và đơn vị/quy đổi; không lấy riêng SL còn lại sau trừ tất toán cũ làm giới hạn cho tổng mới.

### "CẢNH BÁO – Lỗi sửa: Tất toán vượt mức cho phép: <số>" 

Nguyên nhân: SL tất toán lớn hơn phần chưa nhập kho (Số lượng − SL đã nhập). Số trong câu báo là mức tối đa được tất toán.
Cách xử lý: giảm SL tất toán về tối đa bằng số trong câu báo.

### Không thấy liên kết Tất toán 

Kiểm tra: quyền **Tất toán** của màn hình Phiếu mua hàng.
Cách xử lý: liên hệ quản trị hệ thống.

## 10. Câu hỏi thường gặp

**Tất toán khác xoá dòng ở chỗ nào?**
Xoá dòng chỉ làm được khi phiếu chưa nhập kho và mất hẳn dòng. Tất toán giữ nguyên dòng và số đã mua, chỉ đóng phần không nhập nữa, dùng được cả khi đã nhập kho một phần.

**Tất toán rồi có mở lại được không?**
Được: vào **Tất toán**, giảm **SL tất toán** về 0 rồi **Lưu lại**.

**Hàng đã nhập kho rồi mới phát hiện lỗi thì có tất toán được không?**
Không. Phần đã nhập kho phải trả lại NCC bằng **Phiếu trả hàng** ([HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/)).

## 11. Công việc tiếp theo

Kiểm tra lại ở **Thống kê mua hàng → Hàng chờ nhập kho** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ HÀNG CHỜ NHẬP KHO](/bai-viet/2026-11-07-mh-b02-0-tong-quan-man-hinh-thong-ke-hang-cho-nhap-kho/)) hoặc **Tiến độ giao hàng** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TIẾN ĐỘ GIAO HÀNG](/bai-viet/2026-11-07-mh-b03-0-tong-quan-man-hinh-thong-ke-tien-do-giao-hang/)).

Phiếu đặt hàng gốc (nếu có) còn phần NCC không giao: tất toán thêm ở phiếu đặt hàng ([HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-tat-toan-phieu-dat-hang/)).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-0-tong-quan-man-hinh-phieu-mua-hang/) – Tổng quan màn hình Phiếu mua hàng
- [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/) – Hướng dẫn lập phiếu mua hàng
- [HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-huong-dan-tat-toan-phieu-dat-hang/) – Hướng dẫn tất toán phiếu đặt hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-0-tong-quan-man-hinh-phieu-mua-dich-vu/) – Tổng quan màn hình Phiếu mua dịch vụ
- [HƯỚNG DẪN LẬP PHIẾU TRẢ HÀNG TỪ PHIẾU NHẬP KHO](/bai-viet/2026-11-07-mh-a04-1-huong-dan-lap-phieu-tra-hang-tu-phieu-nhap-kho/) – Hướng dẫn lập phiếu trả hàng từ phiếu nhập kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ HÀNG CHỜ NHẬP KHO](/bai-viet/2026-11-07-mh-b02-0-tong-quan-man-hinh-thong-ke-hang-cho-nhap-kho/) – Tổng quan màn hình Hàng chờ nhập kho
- Sổ tay Kho hàng – Phiếu nhập kho
