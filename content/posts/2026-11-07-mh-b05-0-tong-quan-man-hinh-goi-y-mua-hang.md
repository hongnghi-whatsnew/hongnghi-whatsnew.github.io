---
title: "TỔNG QUAN MÀN HÌNH GỢI Ý MUA HÀNG"
date: "2026-11-07"
summary: "Màn hình Gợi ý mua hàng tính số lượng nên mua thêm cho từng mặt hàng, dựa trên: - Lượng bán ra trong một khoảng thời gian (theo từng tháng)."
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

Màn hình **Gợi ý mua hàng** tính **số lượng nên mua thêm** cho từng mặt hàng, dựa trên:

- **Lượng bán ra** trong một khoảng thời gian (theo từng tháng).
- **Tồn kho được xuất** hiện tại của chi nhánh.
- **Hàng đang chờ nhập kho** (đã mua, chưa về).
- **Số ngày trữ hàng** và **trọng số dự phòng** do bạn nhập.

Ngoài ra màn hình cho thấy **nhu cầu sản xuất** (số lượng cần sản xuất từ đơn đặt hàng của khách) và **số còn thiếu** so với tồn được xuất. Số liệu tính cho **chi nhánh đang làm việc**.

Bạn dùng màn hình này khi lên kế hoạch đặt hàng nhà cung cấp định kỳ.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Chi nhánh đã có **phiếu xuất kho cho khách hàng** trong khoảng thời gian cần phân tích.
- Danh mục hàng hoá đã khai **M3** và **Tấm/Kiện** (để quy đổi gợi ý ra m³ và kiện).

## 2. Mở chức năng

**Thống kê mua hàng → Gợi ý mua hàng**

## 3. Nhận biết màn hình

![Hình 1: Màn hình GỢI Ý MUA HÀNG](/posts/2026-11-07-mh-b05-0-tong-quan-man-hinh-goi-y-mua-hang/hinh-01-man-hinh-goi-y-mua-hang.png)

- **Ô khoảng thời gian**: Chức năng: **03 tháng**, **06 tháng** (mặc định), **09 tháng**, **12 tháng**, **Tùy chọn**; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Ô Từ ngày, Đến ngày**: Chức năng: Chỉ hiện khi chọn **Tùy chọn**; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Ô Trọng số dự phòng**: Chức năng: Hệ số nhân thêm cho gợi ý, mặc định **1**; Hướng dẫn: phần “Giải thích các thông tin trên màn hình”
- **Ô Số ngày trữ hàng**: Chức năng: Số ngày muốn đủ hàng bán, mặc định **30**; Hướng dẫn: phần “Giải thích các thông tin trên màn hình”
- **Tải lại**: Chức năng: Tính lại gợi ý theo các ô  –
- **Biểu tượng Xuất Excel**: Chức năng: Chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…, hàng lọc**: Chức năng: Tìm, lọc, ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)

Các ô  –  không có nhãn; rê chuột vào ô để thấy gợi ý tên ô.

**Các nhóm cột trên lưới:**

- **HÀNG HÓA**: Cột: Loại hàng hóa, Hàng hóa, Tiêu chuẩn, Dày, Rộng, Dài, NCC, Loại hàng, M3, Tấm/Kiện, Đvt; Ý nghĩa: Thông tin hàng hoá (hàng trơn, xem phần “Những điều cần lưu ý”)
- **KHOẢNG THỜI GIAN**: Cột: Một cột cho mỗi tháng, tiêu đề dạng **T01-2026**; Ý nghĩa: Số lượng bán ra trong tháng
- **MỨC BÁN**: Cột: Max, Avg, Min; Ý nghĩa: Lượng bán cao nhất / trung bình / thấp nhất **một tháng**
- Cột: T.lượng bán ra; Ý nghĩa: Tổng lượng bán ra cả khoảng thời gian
- **TỒN KHO**: Cột: Tồn cuối; Ý nghĩa: Tồn hiện tại của chi nhánh (mọi kho)
- Cột: Tồn được xuất; Ý nghĩa: Tồn cuối trừ hàng đã được giữ (xem phần “Giải thích các thông tin trên màn hình”)
- Cột: SL cần sx; Ý nghĩa: Số lượng cần sản xuất từ đơn đặt hàng của khách
- Cột: SL còn thiếu; Ý nghĩa: Phần **SL cần sx** chưa đủ tồn để đáp ứng
- Cột: Chờ nhập kho; Ý nghĩa: Hàng đã mua chưa nhập kho (như [TỔNG QUAN MÀN HÌNH THỐNG KÊ HÀNG CHỜ NHẬP KHO](/bai-viet/2026-11-07-mh-b02-0-tong-quan-man-hinh-thong-ke-hang-cho-nhap-kho/))
- Cột: Tồn dự kiến; Ý nghĩa: Tồn được xuất + Chờ nhập kho
- **GỢI Ý**: Cột: SL, SL M3, SL Kiện; Ý nghĩa: Số lượng nên mua thêm, quy ra m³ và kiện

Lưới xếp theo **T.lượng bán ra** giảm dần (hàng bán chạy đứng đầu). Lưới **không lưu** bố cục: mỗi lần mở lại màn, cột trở về mặc định.

**Nhấp đúp vào một dòng** để mở **BIỂU ĐỒ XU HƯỚNG BÁN HÀNG** của mặt hàng:

![Hình 2: Biểu đồ xu hướng bán hàng](/posts/2026-11-07-mh-b05-0-tong-quan-man-hinh-goi-y-mua-hang/hinh-02-bieu-do-xu-huong-ban-hang.png)

- **Cột theo tháng**: Ý nghĩa: Lượng bán từng tháng; màu hồng = trên trung bình, màu tím = dưới trung bình
- **Đường TB**: Ý nghĩa: Mức bán trung bình một tháng (cột **Avg**)
- **–**: Thành phần: Đường **Tồn**; Ý nghĩa: **Tồn dự kiến** (không hiện ở mặt hàng trong Hình 2)
- **–**: Thành phần: Đường **Nhu cầu SX**; Ý nghĩa: Nhu cầu sản xuất (xem phần “Những điều cần lưu ý”; không hiện ở mặt hàng trong Hình 2)
- **–**: Thành phần: **#Gợi ý mua: N Tấm**; Ý nghĩa: Gợi ý mua, chỉ hiện khi gợi ý lớn hơn 0

Nút **Tải lại** ở góc trên trái cửa sổ biểu đồ vẽ lại biểu đồ.

## 4. Trình tự công việc

```text
Xuất kho cho khách (theo tháng) ──► Mức bán (Max / Avg / Min / Tổng)
Tồn được xuất + Chờ nhập kho     ──► Tồn dự kiến
                     ↓
Gợi ý = (Bán bình quân 1 ngày × Số ngày trữ − Tồn dự kiến) × Trọng số
                     ↓
Lập phiếu đặt hàng NCC (MH-A01) / phiếu mua hàng (MH-A03)
```

### Bước 1 – Mở màn hình

Mở **Thống kê mua hàng → Gợi ý mua hàng**. Ô khoảng thời gian mặc định **06 tháng**.

### Bước 2 – Chọn khoảng thời gian phân tích

- Chọn **03 / 06 / 09 / 12 tháng**: hệ thống lấy từ **ngày đầu tháng** của N tháng trước đến **ngày cuối tháng trước** (không tính tháng hiện tại). Ví dụ đang ở tháng 10/2026, chọn **03 tháng** → từ 01/07/2026 đến 30/09/2026. Lưới tự tính lại.
- Chọn **Tùy chọn**: hai ô **Từ ngày**, **Đến ngày** hiện ra. Chọn ngày, lưới tự tính lại. Khoảng phải **từ 7 ngày** và **không quá 24 tháng**.

### Bước 3 – Nhập số ngày trữ hàng và trọng số dự phòng

Nhập **Số ngày trữ hàng** (ví dụ 45 nếu muốn đủ hàng bán 45 ngày) và **Trọng số dự phòng** (ví dụ 1,2 để dư thêm 20%). Hai ô này **không tự tính lại**: bấm **Tải lại**.

### Bước 4 – Đọc kết quả

Xem nhóm **GỢI Ý**: **SL** > 0 là nên mua thêm; **SL** ≤ 0 là tồn dự kiến đã đủ. Nhấp đúp vào dòng để xem biểu đồ xu hướng bán.

### Bước 5 – Xuất Excel (nếu cần)

Bấm biểu tượng **Xuất Excel**. File có một trang tính tên **Từ dd-MM-yyyy đến dd-MM-yyyy**.

- **Tìm một mặt hàng**: Cách làm: Gõ vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Chỉ xem hàng cần mua**: Cách làm: Lọc cột **SL** (nhóm GỢI Ý) lớn hơn 0; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem xu hướng bán**: Cách làm: Nhấp đúp vào dòng
- **Đặt hàng theo gợi ý**: Cách làm: Lập phiếu đặt hàng NCC; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-mh-a01-0-tong-quan-man-hinh-phieu-dat-hang/)

## 6. Giải thích các thông tin trên màn hình

- **Cột tháng**: Cách tính: Tổng số lượng trên **phiếu xuất kho cho khách hàng** của chi nhánh trong tháng (gồm cả số lượng lô), quy về **hàng trơn**
- **Max / Avg / Min**: Cách tính: Cao nhất / trung bình / thấp nhất của các **tháng có bán**
- **T.lượng bán ra**: Cách tính: Tổng các cột tháng
- **Tồn cuối**: Cách tính: Tồn hiện tại của chi nhánh, mọi kho
- **Tồn được xuất**: Cách tính: Tồn cuối − khách đặt giữ − bán chưa xuất − giữ chuyển kho − giữ gia công
- **SL cần sx**: Cách tính: Phần sản xuất trên đơn đặt hàng của khách chưa lên yêu cầu sản xuất, cộng nguyên liệu cần cho các phần đó
- **SL còn thiếu**: Cách tính: SL cần sx − Tồn được xuất (nếu âm thì 0)
- **Chờ nhập kho**: Cách tính: SL mua − tất toán − đã nhập trên các phiếu mua hàng của chi nhánh
- **Tồn dự kiến**: Cách tính: Tồn được xuất + Chờ nhập kho
- **GỢI Ý – SL**: Cách tính: Làm tròn [ (T.lượng bán ra ÷ (7 × số tuần) × **Số ngày trữ hàng** − Tồn được xuất − Chờ nhập kho) × **Trọng số dự phòng** ]
- **GỢI Ý – SL M3**: Cách tính: SL × M3
- **GỢI Ý – SL Kiện**: Cách tính: SL ÷ Tấm/Kiện
- **Số tuần**: Cách tính: Số tuần **trọn** giữa Từ ngày và Đến ngày
- **Trọng số dự phòng**: Cách tính: Tối thiểu 1
- **Số ngày trữ hàng**: Cách tính: Tối thiểu 1

**Ví dụ:** chọn **03 tháng** (01/07 – 30/09) được tính là **12 tuần** trọn; T.lượng bán ra = 840 tấm → bán bình quân 840 ÷ (7 × 12) = 10 tấm/ngày. Số ngày trữ 30 → cần 300 tấm. Tồn được xuất 120, chờ nhập 80 → 300 − 200 = 100. Trọng số 1,2 → gợi ý **120** tấm.

## 7. Kiểm tra sau khi thực hiện

Bạn có danh sách mặt hàng nên mua thêm, số lượng gợi ý theo đơn vị, m³ và kiện, cùng biểu đồ xu hướng bán để quyết định đặt hàng.

## 8. Những điều cần lưu ý

⚠️ Gợi ý **chỉ dựa trên lượng bán ra**, **không cộng SL cần sx**. Hàng chủ yếu dùng cho sản xuất cần xem thêm cột **SL còn thiếu**.

⚠️ **Avg** chỉ tính các tháng **có bán**: tháng không bán không được tính là 0, nên **Avg** có thể cao hơn thực tế với hàng bán không đều.

⚠️ Bán ra được quy về **hàng trơn** (hàng gốc trước gia công). Một dòng trên lưới có thể gộp nhiều mã hàng thành phẩm cùng gốc.

⚠️ Hàng chưa **tất toán** trên phiếu mua mà nhà cung cấp không giao nữa vẫn được tính vào **Chờ nhập kho**, làm gợi ý **thấp hơn** nhu cầu thật.

⚠️ Hàng chỉ có **SL cần sx** mà chưa từng bán trong khoảng thời gian vẫn hiện trên lưới, nhưng cột **GỢI Ý** trống.

⚠️ Biểu đồ luôn ghi đơn vị **Tấm**, kể cả với hàng có đơn vị tính khác. Đường **Nhu cầu SX** trên biểu đồ hiện chưa có số liệu.

⚠️ Đổi **Số ngày trữ hàng** / **Trọng số dự phòng** phải bấm **Tải lại** thì gợi ý mới thay đổi.

Trọng số nhân phần thiếu còn lại sau khi trừ tồn dự kiến, không nhân toàn bộ nhu cầu bán. Ví dụ đã có ở phần “Giải thích các thông tin trên màn hình” cho phần thiếu 100, trọng số 1,2 thành 120; không có nghĩa toàn bộ nhu cầu 300 được nâng lên 360 trước trừ tồn. Gợi ý là số tham khảo để lập kế hoạch, không tạo đơn mua hoặc cam kết hàng đang về; đối chiếu thêm nhu cầu sản xuất, đơn vị và tình trạng hàng chờ trước đặt hàng.

### "Khoảng thời gian cách nhau ít nhất 7 ngày." 

Nguyên nhân: chọn **Tùy chọn** với **Từ ngày** và **Đến ngày** cách nhau dưới 7 ngày.
Cách xử lý: chọn khoảng dài hơn.

### "Khoảng thời gian không vượt quá 24 tháng." 

Nguyên nhân: khoảng **Tùy chọn** dài hơn 24 tháng.
Cách xử lý: thu ngắn khoảng thời gian.

### Lưới trống 

Nguyên nhân: chọn **Tùy chọn** nhưng chưa nhập đủ hai ngày; chi nhánh không có phiếu xuất cho khách trong khoảng thời gian.
Cách xử lý: nhập đủ **Từ ngày**, **Đến ngày** hoặc chọn **06 tháng**; kiểm tra chi nhánh đang làm việc.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Gợi ý âm nghĩa là gì?**
Tồn được xuất cộng hàng chờ nhập đã nhiều hơn lượng cần bán trong số ngày trữ hàng. Chưa cần mua.

**Vì sao chọn 03 tháng mà không thấy tháng hiện tại?**
Các lựa chọn theo tháng chỉ lấy **các tháng đã kết thúc**. Muốn tính cả tháng hiện tại, chọn **Tùy chọn**.

**Trọng số dự phòng nhập bao nhiêu?**
**1** là đúng bằng nhu cầu tính được. Nhập lớn hơn 1 để dự phòng (ví dụ 1,1 = dư 10%).

## 11. Công việc tiếp theo

```text
Gợi ý mua hàng → kiểm tra NCC / giá (MH-B07.0) → Phiếu đặt hàng NCC (MH-A01.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-mh-a01-0-tong-quan-man-hinh-phieu-dat-hang/) – Tổng quan màn hình Phiếu đặt hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ HÀNG CHỜ NHẬP KHO](/bai-viet/2026-11-07-mh-b02-0-tong-quan-man-hinh-thong-ke-hang-cho-nhap-kho/) – Tổng quan màn hình thống kê Hàng chờ nhập kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ BIẾN ĐỘNG GIÁ NHẬP](/bai-viet/2026-11-07-mh-b07-0-tong-quan-man-hinh-thong-ke-bien-dong-gia-nhap/) – Tổng quan màn hình thống kê Biến động giá nhập
