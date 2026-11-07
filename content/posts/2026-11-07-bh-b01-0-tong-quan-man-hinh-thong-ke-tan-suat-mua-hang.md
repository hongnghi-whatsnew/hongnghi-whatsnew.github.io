---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ TẦN SUẤT MUA HÀNG"
date: "2026-11-07"
summary: "Màn hình Tần suất mua hàng (tiêu đề trên màn: THỐNG KÊ TẦN SUẤT MUA HÀNG) cho biết, trong một khoảng thời gian, mỗi khách hàng mua bao nhiêu lần, doanh số bao nhiêu, bao lâu mua một lần và đã bao nhiêu ngày chưa mua lại."
module: "Bán hàng"
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

Màn hình **Tần suất mua hàng** (tiêu đề trên màn: **THỐNG KÊ TẦN SUẤT MUA HÀNG**) cho biết, trong một khoảng thời gian, mỗi khách hàng **mua bao nhiêu lần**, **doanh số bao nhiêu**, **bao lâu mua một lần** và **đã bao nhiêu ngày chưa mua lại**. Phía trên lưới có 4 thẻ số tổng hợp cho cả nhóm khách hàng đang xem: **Giá trị đơn hàng**, **Tần suất mua hàng**, **Giá trị khách hàng**, **Tỷ lệ quay lại**.

Bạn dùng màn hình này khi:

- Tìm khách lâu chưa mua lại để chăm sóc (cột **Chưa mua hàng (ngày)**).
- Xem khách mua đều hay thưa (cột **Tổng ĐH**, **Thời gian TB**).
- Đánh giá nhóm khách mình phụ trách: giá trị trung bình mỗi đơn, tỷ lệ khách quay lại.

Màn hình chỉ để **xem**. Một "đơn hàng" ở đây là **một phiếu xuất kho bán cho khách** (KHO-A05), không phải phiếu đặt hàng hay phiếu bán hàng.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Tài khoản (hoặc nhân viên cần xem) đã được phân **nhóm khách hàng** (do quản trị hệ thống thiết lập ở danh mục nhân viên / nhóm khách hàng).
- Đã có **phiếu xuất kho** bán cho khách trong khoảng thời gian cần xem ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/)).

## 2. Mở chức năng

**Thống kê bán hàng → Tần suất mua hàng**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ TẦN SUẤT MUA HÀNG](/posts/2026-11-07-bh-b01-0-tong-quan-man-hinh-thong-ke-tan-suat-mua-hang/hinh-01-man-hinh-tan-suat-mua-hang.png)

*Ảnh minh hoạ đã gõ **TEST_HDSD** vào ô **Tìm kiếm…** để lưới chỉ còn khách thử (che dữ liệu khách thật). 4 thẻ số ở trên vẫn tính cho mọi khách trong phạm vi, không theo ô tìm kiếm.*

- **4 thẻ số**: Chức năng: **Giá trị đơn hàng**, **Tần suất mua hàng**, **Giá trị khách hàng**, **Tỷ lệ … quay lại** (%) — cách tính ở phần “Giải thích các thông tin trên màn hình”; Hướng dẫn: phần “Giải thích các thông tin trên màn hình”
- **Ô khoảng thời gian**: Chức năng: **Tất cả**, **03 tháng**, **06 tháng** (mặc định), **09 tháng**, **12 tháng**, **Tùy chọn**; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Ô Từ ngày, Đến ngày**: Chức năng: Chỉ hiện khi chọn **Tùy chọn** (không có trên ảnh). Đổi ngày thì lưới tự tải lại; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Ô số lần quay lại tối thiểu**: Chức năng: Mặc định **1**. Dùng cho thẻ **Tỷ lệ quay lại**. Đổi số xong phải bấm **Tải lại**; Hướng dẫn: phần “Giải thích các thông tin trên màn hình”
- **Ô Tất cả nhân viên...**: Chức năng: Chỉ hiện khi có quyền **Chọn nhân viên**. Chọn một, nhiều hoặc tất cả nhân viên phụ trách; mặc định là chính bạn (trên ảnh: thẻ **Administrator**); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…, hàng lọc (khung không số dưới tiêu đề cột)**: Chức năng: Tìm, lọc, ẩn / hiện cột; liên kết **Tạo Bộ lọc** dưới lưới mở bộ lọc nâng cao; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng tổng cuối lưới**: Chức năng: **TỔNG CỘNG: n KHÁCH HÀNG**; tổng **Tổng ĐH**, **Tổng doanh số**, **Giá trị TB/ĐH** (ô tổng số nằm ở các cột bên phải); Hướng dẫn: phần “Những điều cần lưu ý”

Lưới hiện **10 dòng mỗi trang** (chọn được 10 / 15 / 20) và nhớ bố cục cột ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Các cột trên lưới:** mỗi dòng là một khách hàng.

- **STT**: Ý nghĩa: Số thứ tự
- **Nhân viên phụ trách**: Ý nghĩa: Hiển thị **tên nhóm khách hàng** của khách (xem phần “Những điều cần lưu ý”)
- **Tên khách chính**: Ý nghĩa: Tên khách chính nếu khách là chi nhánh / đơn vị con; không có thì tên khách
- **Khách hàng**: Ý nghĩa: Tên rút gọn của khách
- **Loại KH**: Ý nghĩa: **Khách mới** / **Khách cũ** (xem phần “Giải thích các thông tin trên màn hình”)
- **SĐT**: Ý nghĩa: Số điện thoại trong danh mục khách hàng
- **Phân loại tín dụng**: Ý nghĩa: Theo danh mục khách hàng
- **Số ngày nợ**: Ý nghĩa: Theo danh mục khách hàng
- **Tổng ĐH**: Ý nghĩa: Số phiếu xuất kho bán cho khách trong khoảng thời gian
- **D.Số cao nhất**: Ý nghĩa: Doanh số của **tháng cao nhất** của khách (xem phần “Giải thích các thông tin trên màn hình”)
- **D.Số cao nhất (tháng)**: Ý nghĩa: Tháng đạt doanh số cao nhất, dạng `YYYY-MM`
- **Giá trị TB/ĐH**: Ý nghĩa: Tổng doanh số ÷ Tổng ĐH
- **Tổng doanh số**: Ý nghĩa: Doanh số của khách trong khoảng thời gian
- **Thời gian TB**: Ý nghĩa: Số ngày trung bình giữa các lần mua
- **Chưa mua hàng (ngày)**: Ý nghĩa: Số ngày từ lần phát sinh gần nhất đến hôm nay
- **T.Gian gần đây**: Ý nghĩa: Ngày của chứng từ gần nhất (đặt hàng, bán hàng hoặc xuất kho)
- **ĐH gần đây**: Ý nghĩa: Mã chứng từ gần nhất đó

Bấm chuột phải vào **tiêu đề cột** để sắp xếp, cố định cột, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Màn hình không có thao tác nhấp đúp trên dòng; muốn xem chứng từ, lấy mã ở cột **ĐH gần đây** rồi tìm ở màn chứng từ tương ứng ([TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-0-tong-quan-man-hinh-phieu-dat-hang/), [TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/), [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/)).

## 4. Trình tự công việc

```text
Phiếu xuất kho bán cho khách (KHO-A05)  → số đơn, doanh số bán
Phiếu nhập kho khách trả (KHO-A04)      → trừ doanh số
Phiếu đặt hàng / phiếu bán (BH-A02, A03)→ lần phát sinh gần nhất
      ↓
Tần suất mua hàng (khách thuộc nhóm của nhân viên đã chọn)
      ├── Thẻ số tổng hợp
      ├── Lưới theo khách hàng
      └── Xuất Excel (GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Xem 3 / 6 / 9 / 12 tháng gần nhất**: Cách làm: Chọn ở ô
- **Xem một khoảng ngày bất kỳ**: Cách làm: Chọn **Tùy chọn** ở ô, nhập **Từ ngày**, **Đến ngày**
- **Xem khách của nhân viên khác**: Cách làm: Chọn nhân viên ở ô  rồi bấm nút xác nhận cuối danh sách
- **Đổi ngưỡng "quay lại"**: Cách làm: Gõ số ở ô  rồi bấm **Tải lại**
- **Tìm khách lâu chưa mua**: Cách làm: Sắp xếp giảm dần cột **Chưa mua hàng (ngày)**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Tìm khách hàng lâu chưa mua lại

**Bước 1 –** Mở **Thống kê bán hàng → Tần suất mua hàng**. Ô  mặc định **06 tháng** (từ đầu tháng của 5 tháng trước đến cuối tháng hiện tại).

**Bước 2 –** Nếu có quyền **Chọn nhân viên**, bấm ô **Tất cả nhân viên...**, tick nhân viên cần xem (hoặc tick chọn tất cả), bấm nút xác nhận. Lưới tự tải.

**Bước 3 –** Bấm tiêu đề cột **Chưa mua hàng (ngày)** để sắp xếp giảm dần.

**Bước 4 –** Đọc cột **T.Gian gần đây**, **ĐH gần đây** để biết lần gần nhất khách giao dịch; đọc **Thời gian TB** để so: khách thường mua 15 ngày một lần mà đã 60 ngày chưa mua là cần liên hệ.

**Bước 5 –** Bấm **Xuất Excel** nếu cần gửi danh sách.

### Xem tỷ lệ khách mua từ 3 lần trở lên

**Bước 1 –** Gõ **2** vào ô  (số lần **quay lại** tối thiểu; mua lần đầu + 2 lần quay lại = 3 lần mua).

**Bước 2 –** Bấm **Tải lại**. Thẻ đổi tên thành **Tỷ lệ 2 lần quay lại** và hiện tỷ lệ mới.

## 6. Giải thích các thông tin trên màn hình

**Phạm vi dữ liệu:** khách thuộc nhóm khách hàng được phân cho nhân viên đã chọn (chọn tất cả nhân viên = mọi khách); Phạm vi chỉ trong dữ liệu của hệ thống đang truy cập; mỗi tên miền hệ thống chính thức có dữ liệu và tài khoản riêng, không tự lấy dữ liệu từ các chi nhánh ở tên miền khác.; ngày từ 01/04/2021 trở đi. Chọn **Tất cả** ở ô  nghĩa là từ 01/04/2021 đến cuối tháng hiện tại.

**Tổng ĐH:** Đếm phiếu xuất kho có khách hàng, ngày xuất trong khoảng thời gian

**Tổng doanh số:** Tổng thành tiền (đã trừ chiết khấu, **đã gồm VAT**) các phiếu xuất kho bán cho khách − tổng thành tiền các phiếu nhập kho khách trả, theo ngày xuất / ngày nhập trong khoảng. **Không** trừ phiếu giảm giá, **không** gồm bán dịch vụ

**Giá trị TB/ĐH:** Tổng doanh số ÷ Tổng ĐH

**D.Số cao nhất, D.Số cao nhất (tháng):** Gom doanh số (cách tính như trên) theo từng tháng trên **toàn bộ lịch sử** của khách, lấy tháng lớn nhất — không giới hạn trong khoảng thời gian đang chọn

**Thời gian TB:** (Ngày xuất kho cuối − Ngày xuất kho đầu trong khoảng) ÷ Tổng ĐH, lấy phần nguyên (ngày). Trống nếu mọi lần xuất cùng một ngày

**T.Gian gần đây, ĐH gần đây:** Chứng từ có ngày lớn nhất (không quá hôm nay) trong khoảng thời gian, xét cả phiếu đặt hàng, phiếu bán hàng và phiếu xuất kho của khách

**Chưa mua hàng (ngày):** Hôm nay − T.Gian gần đây

**Loại KH:** **Khách mới** nếu ngày mua đầu tiên của khách (lần xuất kho đầu tiên trong toàn bộ lịch sử) cách **ngày cuối** của khoảng thời gian không quá 6 tháng (tính tròn tháng); còn lại **Khách cũ**

**Thẻ Giá trị đơn hàng:** Tổng doanh số (các khách trong phạm vi) ÷ Tổng số phiếu xuất kho

**Thẻ Tần suất mua hàng:** Tổng số phiếu xuất kho ÷ Số khách có ít nhất 1 phiếu xuất, làm tròn 2 chữ số

**Thẻ Giá trị khách hàng:** Giá trị đơn hàng × Tần suất mua hàng

**Thẻ Tỷ lệ … quay lại:** Số khách có số phiếu xuất ≥ (số ở ô  + 1) ÷ Số khách có ít nhất 1 phiếu xuất × 100 (%)

Lưới chỉ có dòng cho khách **có ít nhất một chứng từ** (đặt hàng, bán hàng hoặc xuất kho) trong khoảng thời gian.

## 7. Kiểm tra sau khi thực hiện

Bạn có danh sách khách hàng trong phạm vi phụ trách với số lần mua, doanh số, khoảng cách mua trung bình, số ngày chưa mua lại và 4 chỉ số tổng hợp; xuất được ra Excel khi có quyền.

## 8. Những điều cần lưu ý

⚠️ Cột **Nhân viên phụ trách** đang hiển thị **tên nhóm khách hàng**, không phải tên nhân viên. Nếu nhóm khách hàng đặt tên theo nhân viên thì hai thông tin trùng nhau; nếu không, đừng dùng cột này để biết ai phụ trách.

⚠️ **Tổng doanh số** ở màn này khác **Doanh số** ở màn **Doanh số bán hàng** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/)): màn này **không trừ giảm giá**, **không cộng bán dịch vụ**, và tính cho cả phiếu không có nhân viên sale. Hai màn lệch nhau là bình thường.

Phạm vi báo cáo nằm trong dữ liệu của hệ thống chi nhánh đang truy cập. Nếu báo cáo hiển thị nhiều mã chi nhánh trong dữ liệu, không hiểu đó là dữ liệu được lấy từ các tên miền/dữ liệu độc lập khác; đối chiếu phạm vi với người phụ trách trước tổng hợp.

⚠️ Một "đơn hàng" là **một phiếu xuất kho**. Một phiếu bán hàng giao làm 3 lần xuất sẽ tính là 3 đơn.

⚠️ Đổi số ở ô  **không** tự tải lại — phải bấm **Tải lại**.

⚠️ Ô tổng của cột **Giá trị TB/ĐH** là **tổng các giá trị trung bình** của từng khách, không có ý nghĩa nghiệp vụ. Dùng thẻ **Giá trị đơn hàng** ở trên để có giá trị trung bình chung.

⚠️ Bốn thẻ số tính trên **mọi khách trong phạm vi có phiếu xuất**, không chịu ảnh hưởng của ô **Tìm kiếm…** hay bộ lọc trên lưới.

### Lưới trống dù khách có mua hàng 

Nguyên nhân: tài khoản chưa được phân **nhóm khách hàng**, hoặc khách thuộc nhóm của nhân viên khác; chọn sai khoảng thời gian.
Cách xử lý: liên hệ quản trị hệ thống phân nhóm khách hàng; chọn nhân viên phụ trách ở ô  (nếu có quyền); chọn lại khoảng thời gian.

### Không thấy ô chọn nhân viên 

Nguyên nhân: chưa có quyền **Chọn nhân viên**.
Cách xử lý: liên hệ quản trị hệ thống nếu công việc cần xem khách của người khác.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập** màn hình.
Cách xử lý: liên hệ quản trị hệ thống.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Doanh số trên màn này có gồm VAT không?**
Có. Lấy thành tiền trên phiếu xuất kho / phiếu nhập trả, đã trừ chiết khấu và cộng VAT.

**Vì sao khách có Tổng ĐH trống?**
Khách có phiếu đặt hàng hoặc phiếu bán hàng trong khoảng thời gian nhưng chưa có phiếu xuất kho nào.

**Vì sao Thời gian TB trống?**
Khách chỉ có phiếu xuất trong một ngày duy nhất của khoảng thời gian, chưa đủ để tính khoảng cách giữa các lần mua.

## 11. Công việc tiếp theo

```text
Tần suất mua hàng → khách lâu chưa mua → liên hệ, lập phiếu đặt hàng (BH-A02.0)
                  → xem doanh số chi tiết theo khách (BH-B12.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BÁN HÀNG](/bai-viet/2026-11-07-bh-b12-0-tong-quan-man-hinh-thong-ke-doanh-so-ban-hang/) – Tổng quan màn hình thống kê Doanh số bán hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT BÁN CHI TIẾT](/bai-viet/2026-11-07-bh-b05-0-tong-quan-man-hinh-thong-ke-xuat-ban-chi-tiet/) – Tổng quan màn hình thống kê Xuất bán chi tiết
- [TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-0-tong-quan-man-hinh-phieu-dat-hang/) – Tổng quan màn hình Phiếu đặt hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/) – Tổng quan màn hình Phiếu bán hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
