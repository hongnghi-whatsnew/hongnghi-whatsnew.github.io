---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ ĐẶT HÀNG CHI TIẾT"
date: "2026-11-07"
summary: "Màn hình Đặt hàng chi tiết (tiêu đề trên màn: THỐNG KÊ - ĐẶT HÀNG CHI TIẾT) liệt kê từng dòng thành phẩm trên phiếu đặt hàng của khách (BH-A02) có ngày đặt trong khoảng bạn chọn, và theo dõi dòng đó đã đi tới đâu qua 4 bước: 1."
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

Màn hình **Đặt hàng chi tiết** (tiêu đề trên màn: **THỐNG KÊ - ĐẶT HÀNG CHI TIẾT**) liệt kê **từng dòng thành phẩm trên phiếu đặt hàng của khách** (BH-A02) có ngày đặt trong khoảng bạn chọn, và theo dõi dòng đó đã đi tới đâu qua 4 bước:

1. **Kế hoạch** — đã lập phiếu yêu cầu gia công chưa, bao nhiêu.
2. **Nhập kho** — thành phẩm gia công đã nhập kho (phiếu nhập thành phẩm) bao nhiêu.
3. **Bán hàng** — đã lập phiếu bán hàng bao nhiêu.
4. **Xuất kho** — đã xuất kho giao khách bao nhiêu.

Bạn dùng màn hình này khi:

- Rà đơn đặt hàng còn tồn: chưa lập kế hoạch, chưa nhập, chưa bán, chưa xuất.
- Trả lời khách "đơn của tôi tới đâu rồi".
- Đối chiếu số lượng tất toán (huỷ phần còn lại) giữa các bước.

Màn hình chỉ để **xem**. Muốn sửa, dùng màn chứng từ tương ứng.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đã có **phiếu đặt hàng** có dòng thành phẩm trong khoảng ngày cần xem ([TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-0-tong-quan-man-hinh-phieu-dat-hang/)).

## 2. Mở chức năng

**Thống kê bán hàng → Đặt hàng chi tiết**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ - ĐẶT HÀNG CHI TIẾT](/posts/2026-11-07-bh-b02-0-tong-quan-man-hinh-thong-ke-dat-hang-chi-tiet/hinh-01-man-hinh-dat-hang-chi-tiet.png)

- **Ô khoảng ngày**: Chức năng: Chọn khoảng **ngày đặt hàng**. Lần đầu là **Hôm nay** (nhãn **today** đầu ô), lần sau nhớ lựa chọn gần nhất; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…, hàng lọc (khung không số dưới tiêu đề cột)**: Chức năng: Tìm, lọc, ẩn / hiện cột; **Tạo Bộ lọc** dưới lưới mở bộ lọc nâng cao; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **5 nhóm cột**: Chức năng: **Thông tin đặt hàng**, **Thông tin kế hoạch**, **Thông tin nhập kho**, **Thông tin bán hàng**, **Thông tin xuất kho**. Ảnh chỉ thấy nhóm đầu; kéo thanh cuộn ngang để xem các nhóm sau; Hướng dẫn: phần “Giải thích các thông tin trên màn hình”
- **Dòng tổng cuối lưới**: Chức năng: **TỔNG CỘNG: n** (số dòng) và tổng mọi cột số lượng

Lưới hiện **10 dòng mỗi trang** (chọn được 10 / 15 / 20) và nhớ bố cục cột ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Các cột trên lưới:** mỗi dòng là một dòng thành phẩm của phiếu đặt hàng.

- **—**: Cột: STT; Ý nghĩa: Số thứ tự
- **Thông tin đặt hàng**: Cột: Ngày phát sinh; Ý nghĩa: Ngày đặt hàng
- Cột: Mã phiếu; Ý nghĩa: Mã phiếu đặt hàng
- Cột: Mã khách hàng, Khách hàng; Ý nghĩa: Mã và tên rút gọn của khách
- Cột: Nhân viên sale; Ý nghĩa: Nhân viên kinh doanh trên phiếu đặt
- Cột: Ghi chú; Ý nghĩa: Ghi chú của phiếu đặt
- Cột: Tên thành phẩm (in), Tên thành phẩm, Mã thành phẩm; Ý nghĩa: Thành phẩm đặt
- Cột: SL; Ý nghĩa: Số lượng đặt
- Cột: SL Tất toán; Ý nghĩa: Số lượng đã tất toán (không làm nữa) trên dòng đặt
- Cột: Chú thích; Ý nghĩa: Ghi chú của dòng đặt
- Cột: Kho chuyển về; Ý nghĩa: Kho nhận thành phẩm khai trên dòng đặt
- **Thông tin kế hoạch**: Cột: SL, SL tất toán; Ý nghĩa: Số lượng trên các phiếu yêu cầu gia công lập từ dòng đặt, và phần tất toán
- Cột: SL còn lại; Ý nghĩa: Phần chưa lập kế hoạch
- Cột: Trạng thái; Ý nghĩa: **Chưa lập** / **Đang lập** / **Đã lập kế hoạch**
- **Thông tin nhập kho**: Cột: SL; Ý nghĩa: Số lượng thành phẩm đã nhập kho (phiếu nhập thành phẩm)
- Cột: SL chưa nhập; Ý nghĩa: Phần kế hoạch chưa nhập kho
- Cột: Trạng thái; Ý nghĩa: **Chưa nhập** / **Đang nhập** / **Đã nhập kho**
- **Thông tin bán hàng**: Cột: SL đã bán, SL tất toán; Ý nghĩa: Số lượng trên phiếu bán hàng lập từ dòng đặt, và phần tất toán
- Cột: SL chưa bán; Ý nghĩa: Phần đã nhập kho mà chưa bán
- Cột: Trạng thái; Ý nghĩa: **Chưa bán** / **Đang bán** / **Đã bán hàng**
- **Thông tin xuất kho**: Cột: SL đã xuất; Ý nghĩa: Số lượng đã xuất kho từ các phiếu bán đó
- Cột: SL chưa xuất; Ý nghĩa: Phần đã nhập kho mà chưa xuất
- Cột: Trạng thái; Ý nghĩa: **Chưa xuất** / **Đang xuất** / **Đã xuất kho**

Bấm chuột phải vào **tiêu đề cột** để sắp xếp, cố định cột, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Màn hình không có thao tác nhấp đúp; muốn xem phiếu, lấy **Mã phiếu** rồi tìm ở màn **Phiếu đặt hàng** ([TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-0-tong-quan-man-hinh-phieu-dat-hang/)).

## 4. Trình tự công việc

```text
Phiếu đặt hàng (BH-A02) ── dòng thành phẩm
      ↓
Phiếu yêu cầu gia công  →  "Thông tin kế hoạch"
      ↓
Phiếu nhập thành phẩm   →  "Thông tin nhập kho"
      ↓
Phiếu bán hàng (BH-A03) →  "Thông tin bán hàng"
      ↓
Phiếu xuất kho (KHO-A05)→  "Thông tin xuất kho"
```

## 5. Thực hiện trên phần mềm

- **Xem đơn đặt trong tháng**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm dòng chưa lập kế hoạch**: Cách làm: Lọc cột **Trạng thái** nhóm kế hoạch = **Chưa lập**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm dòng đã nhập mà chưa xuất**: Cách làm: Lọc **Trạng thái** nhóm xuất kho khác **Đã xuất kho**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem đơn của một khách**: Cách làm: Gõ tên khách vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Kiểm tra tiến độ đơn đặt hàng của một khách

**Bước 1 –** Mở **Thống kê bán hàng → Đặt hàng chi tiết**.

**Bước 2 –** Chọn khoảng ngày **bao trùm cả ngày đặt lẫn các ngày làm tiếp** (ví dụ từ ngày đặt đến hôm nay) — xem cảnh báo phần “Những điều cần lưu ý”.

**Bước 3 –** Gõ tên hoặc mã khách vào **Tìm kiếm…**.

**Bước 4 –** Đọc lần lượt 4 cột **Trạng thái** từ trái sang phải để biết dòng đang dừng ở bước nào; đọc các cột **SL còn lại / SL chưa nhập / SL chưa bán / SL chưa xuất** để biết còn thiếu bao nhiêu.

## 6. Giải thích các thông tin trên màn hình

- **Kế hoạch – SL, SL tất toán**: Cách tính: Tổng số lượng / tất toán trên các dòng phiếu yêu cầu gia công lập từ dòng đặt, **ngày yêu cầu trong khoảng ngày**
- **Kế hoạch – SL còn lại**: Cách tính: SL đặt − SL tất toán (đặt) − SL kế hoạch
- **Kế hoạch – Trạng thái**: Cách tính: **Đã lập kế hoạch** khi SL còn lại ≤ 0 và có kế hoạch; **Đang lập** khi SL còn lại > 0 và có kế hoạch; còn lại **Chưa lập**
- **Nhập kho – SL**: Cách tính: Tổng số lượng trên phiếu nhập thành phẩm (gia công) theo các yêu cầu gia công của dòng, **ngày nhập trong khoảng ngày**
- **Nhập kho – SL chưa nhập**: Cách tính: SL kế hoạch − SL kế hoạch tất toán − SL nhập kho
- **Nhập kho – Trạng thái**: Cách tính: **Đã nhập kho** khi SL chưa nhập ≤ 0 và đã nhập; **Đang nhập** khi còn thiếu và đã nhập; còn lại **Chưa nhập**
- **Bán hàng – SL đã bán, SL tất toán**: Cách tính: Tổng trên các dòng phiếu bán hàng lập từ thành phẩm của dòng đặt, **ngày bán trong khoảng ngày**
- **Bán hàng – SL chưa bán**: Cách tính: SL nhập kho + SL tất toán (bán) − SL đã bán
- **Bán hàng – Trạng thái**: Cách tính: **Đã bán hàng** khi SL chưa bán ≤ 0 và đã bán; **Đang bán** khi còn và đã bán; còn lại **Chưa bán**
- **Xuất kho – SL đã xuất**: Cách tính: Tổng trên các dòng phiếu xuất kho lập từ các dòng phiếu bán trên, **ngày xuất trong khoảng ngày**
- **Xuất kho – SL chưa xuất**: Cách tính: SL nhập kho − SL đã xuất
- **Xuất kho – Trạng thái**: Cách tính: **Đã xuất kho** khi SL chưa xuất ≤ 0 và đã xuất; **Đang xuất** khi còn và đã xuất; còn lại **Chưa xuất**

Dữ liệu lấy theo **ngày đặt hàng** trong khoảng ngày, trong hệ thống đang truy cập, mọi khách hàng trong dữ liệu đó (không lọc theo nhóm khách hàng được phân). Lưới xếp ngày đặt mới nhất lên trên.

## 7. Kiểm tra sau khi thực hiện

Bạn thấy từng dòng thành phẩm đặt hàng đang ở bước nào (kế hoạch, nhập kho, bán, xuất) và còn thiếu bao nhiêu ở mỗi bước.

## 8. Những điều cần lưu ý

⚠️ Các bước kế hoạch, nhập kho, bán, xuất **cũng chỉ tính chứng từ có ngày nằm trong khoảng ngày đang chọn**. Chọn "Hôm nay" thì phiếu yêu cầu, phiếu nhập, phiếu bán, phiếu xuất của ngày khác **không được tính** — dòng sẽ hiện **Chưa lập / Chưa nhập…** dù thực tế đã làm. Muốn xem đúng tiến độ, chọn khoảng từ ngày đặt đến hôm nay.

⚠️ Ô số lượng của bước sau **để trống** khi bước trước chưa có số (ví dụ chưa có kế hoạch thì **SL còn lại**, **SL chưa nhập** đều trống, không phải 0). Lọc "SL còn lại > 0" sẽ bỏ sót các dòng trống này — lọc theo cột **Trạng thái** thay vì cột số.

⚠️ Màn hình theo dõi luồng **đặt hàng → gia công → nhập thành phẩm → bán → xuất**. Dòng đặt hàng bán thẳng từ hàng có sẵn trong kho (không qua gia công) sẽ có **SL chưa bán**, **SL chưa xuất** trống và cả 3 trạng thái nhập kho / bán / xuất luôn là **Chưa nhập** / **Chưa bán** / **Chưa xuất**, **kể cả khi đã bán và đã xuất**. Với các dòng này, đọc cột **SL đã bán**, **SL đã xuất** thay cho cột trạng thái.

⚠️ Phạm vi chỉ trong dữ liệu của hệ thống đang truy cập; mỗi tên miền hệ thống chính thức có dữ liệu và tài khoản riêng, không tự lấy dữ liệu từ các chi nhánh ở tên miền khác. Trong dữ liệu đó, báo cáo có thể không giới hạn theo nhóm khách hàng được phân; kiểm tra phạm vi trước tổng hợp.

⚠️ Cột **Tên khách hàng** có tiền tố **KH<số>** là số định danh nội bộ của khách, không phải **Mã khách hàng**.

### Dòng hiện "Chưa lập" dù đã lập phiếu yêu cầu gia công 

Nguyên nhân: phiếu yêu cầu gia công có ngày nằm ngoài khoảng ngày đang chọn.
Cách xử lý: mở rộng khoảng ngày đến hôm nay.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập** màn hình.
Cách xử lý: liên hệ quản trị hệ thống.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**SL Tất toán là gì?**
Phần số lượng đã chốt không làm tiếp (khách huỷ phần còn lại, hoặc chốt thiếu). Phần tất toán được trừ khỏi số còn phải làm.

**Vì sao SL chưa bán cộng thêm SL tất toán của bước bán?**
Công thức hiện tại là SL nhập kho + SL tất toán (bán) − SL đã bán; xem câu hỏi nghiệp vụ ở ghi chú cuối bài.

**Màn hình có giá tiền không?**
Không. Giá bán đối chiếu ở **Phiếu bán hàng** ([TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/)) hoặc **Bán hàng chi tiết** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN HÀNG CHI TIẾT](/bai-viet/2026-11-07-bh-b03-0-tong-quan-man-hinh-thong-ke-ban-hang-chi-tiet/)); Phiếu đặt hàng sản xuất dùng theo dõi yêu cầu và số lượng.

## 11. Công việc tiếp theo

```text
Đặt hàng chi tiết → dòng "Chưa lập" → lập phiếu yêu cầu gia công (sổ Sản xuất)
                  → dòng đã nhập "Chưa bán" → lập phiếu bán hàng (BH-A03)
                  → dòng đã bán "Chưa xuất" → lập phiếu xuất kho (KHO-A05)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-0-tong-quan-man-hinh-phieu-dat-hang/) – Tổng quan màn hình Phiếu đặt hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/) – Tổng quan màn hình Phiếu bán hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN HÀNG CHI TIẾT](/bai-viet/2026-11-07-bh-b03-0-tong-quan-man-hinh-thong-ke-ban-hang-chi-tiet/) – Tổng quan màn hình thống kê Bán hàng chi tiết
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT BÁN CHI TIẾT](/bai-viet/2026-11-07-bh-b05-0-tong-quan-man-hinh-thong-ke-xuat-ban-chi-tiet/) – Tổng quan màn hình thống kê Xuất bán chi tiết
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
