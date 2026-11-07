---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN TRONG NGÀY"
date: "2026-11-07"
summary: "Màn hình Xuất nhập tồn trong ngày liệt kê mọi dòng hàng nhập vào hoặc xuất ra kho trong một ngày tại chi nhánh đang làm việc."
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

Màn hình **Xuất nhập tồn trong ngày** liệt kê **mọi dòng hàng nhập vào hoặc xuất ra kho trong một ngày** tại **chi nhánh đang làm việc**. Mỗi dòng là một dòng hàng trên một chứng từ kho, cột **Nội dung** cho biết đó là nghiệp vụ gì (nhập mua hàng, xuất bán hàng, chuyển kho, điều chỉnh kho, gia công, mượn hàng…).

Bạn dùng màn hình này khi:

- Thủ kho rà lại cuối ngày: hôm nay kho đã nhập gì, xuất gì, cho ai, xe nào chở.
- Đối chiếu phiếu giấy trong ngày với dữ liệu đã nhập vào hệ thống.
- Kiểm tra nhanh giá bán và thành tiền của các phiếu xuất bán trong ngày.

Màn hình chỉ xem **một ngày**, không cho chọn khoảng ngày và **không hiện số tồn**. Muốn xem tồn đầu kỳ, tồn cuối kỳ theo khoảng ngày, dùng **Xuất nhập tồn** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** cần xem ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Tài khoản đã được phân **kho hàng** cần xem.
- Trong ngày cần xem đã có chứng từ kho (phiếu nhập kho, phiếu xuất kho, chuyển kho, điều chỉnh kho…).

## 2. Mở chức năng

**Thống kê kho → Xuất nhập tồn trong ngày**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ XUẤT NHẬP TỒN TRONG NGÀY](/posts/2026-11-07-kho-c01-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton-trong-ngay/hinh-01-man-hinh-xuat-nhap-ton-trong-ngay.png)

- **Ô ngày**: Chức năng: Chọn ngày cần xem, mặc định **hôm nay**; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Tải lại**: Chức năng: Lấy số liệu của ngày ở ô
- **Biểu tượng Xuất Excel (có mũi tên mở menu)**: Chức năng: Xuất tất cả dữ liệu hoặc chỉ dòng đã chọn (chỉ hiện khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột ô chọn đầu dòng (ô tick ở tiêu đề luôn hiện**: ô tick từng dòng hiện khi bấm vào dòng), hàng lọc dưới tiêu đề cột; Chức năng: Chọn dòng để xuất Excel; lọc từng cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng TỔNG CỘNG**: Chức năng: Số dòng, tổng **SL nhập**, **SL xuất**, **Thành tiền VAT**; Hướng dẫn: phần “Giải thích các thông tin trên màn hình”

Lưới hiện **10 dòng mỗi trang** (chọn được 10 / 15 / 20 ở thanh phân trang). Lưới **nhớ bố cục** (cột ẩn / hiện, thứ tự, độ rộng) cho lần mở sau.

**Các cột trên lưới:**

- **STT**: Ý nghĩa: Số thứ tự
- **Nội dung**: Ý nghĩa: Loại nghiệp vụ của dòng (bảng ở phần “Giải thích các thông tin trên màn hình”)
- **Thực tế**: Ý nghĩa: Ngày của chứng từ
- **Tên hàng hoá**: Ý nghĩa: Tên hàng trong danh mục hàng hoá
- **Tên in phiếu**: Ý nghĩa: Tên in trên phiếu; phiếu không ghi tên in thì lấy tên hàng hoá
- **Gia công**: Ý nghĩa: Các định mức gia công gắn với hàng hoá trong danh mục
- **SL nhập**: Ý nghĩa: Số lượng nhập vào kho
- **SL xuất**: Ý nghĩa: Số lượng xuất khỏi kho
- **Đơn giá**: Ý nghĩa: Đơn giá trên dòng phiếu xuất kho (các nghiệp vụ khác bằng 0)
- **Chiết khấu**: Ý nghĩa: Chiết khấu dòng + chiết khấu cả phiếu, dạng %
- **Thuế VAT**: Ý nghĩa: Thuế VAT dòng + thuế VAT cả phiếu, dạng %
- **Đơn giá VAT**: Ý nghĩa: Đơn giá sau chiết khấu, cộng thuế VAT
- **Thành tiền**: Ý nghĩa: Số lượng xuất × Đơn giá
- **Thành tiền VAT**: Ý nghĩa: Số lượng xuất × Đơn giá VAT
- **Kho nhập/xuất**: Ý nghĩa: Kho được nhập vào hoặc xuất ra ở dòng đó
- **Tên mua/bán**: Ý nghĩa: Khách hàng, nhà cung cấp hoặc đơn vị gia công trên phiếu
- **Tên rút gọn**: Ý nghĩa: Tên rút gọn của khách hàng / nhà cung cấp
- **Biển số xe**: Ý nghĩa: Biển số xe chở hàng (phiếu xuất kho, xuất chuyển kho, xuất kho gia công) hoặc phương thức vận chuyển ghi trên phiếu nhập kho
- **Ghi chú**: Ý nghĩa: Chú thích của dòng hàng trên phiếu
- **Ghi chú nội bộ**: Ý nghĩa: Chú thích nội bộ của dòng hàng, chỉ có ở phiếu xuất bán hàng
- **Mã phiếu gốc**: Ý nghĩa: Mã phiếu gốc ghi trên chứng từ

⚠️ Lưới **không có cột mã phiếu** của hệ thống (NK…, XK…). Muốn biết dòng thuộc phiếu nào, dựa vào **Mã phiếu gốc**, **Tên mua/bán** hoặc mở màn phiếu tương ứng lọc theo ngày.

Màn hình **không có** thao tác nhấp đúp xem chi tiết.

## 4. Trình tự công việc

```text
Chứng từ kho trong ngày (nhập kho, xuất kho, chuyển kho, điều chỉnh, gia công…)
      ↓
Chọn ngày ──► Tải lại ──► Lưới: mỗi dòng hàng một dòng, cột Nội dung = nghiệp vụ
      ↓
Đối chiếu phiếu giấy / xuất Excel gửi kế toán
```

## 5. Thực hiện trên phần mềm

- **Xem chứng từ kho hôm nay**: Cách làm: Mở màn hình, lưới tự tải ngày hôm nay
- **Xem một ngày khác**: Cách làm: Chọn ngày ở ô  rồi bấm **Tải lại**; Bài hướng dẫn: phần “Thực hiện trên phần mềm” bên dưới
- **Chỉ xem một nghiệp vụ (ví dụ Xuất bán hàng)**: Cách làm: Lọc cột **Nội dung**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Chỉ xem một kho**: Cách làm: Lọc cột **Kho nhập/xuất**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel tất cả / dòng đã chọn**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Xem tồn đầu kỳ, cuối kỳ**: Cách làm: Dùng màn Xuất nhập tồn; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/)

### Xem chứng từ kho của một ngày

**Bước 1 –** Mở **Thống kê kho → Xuất nhập tồn trong ngày**. Lưới hiện dữ liệu hôm nay.

**Bước 2 –** Bấm vào ô ngày, chọn ngày cần xem (định dạng **dd/MM/yyyy**).

**Bước 3 –** Bấm **Tải lại**. Đổi ngày mà không bấm **Tải lại** thì lưới vẫn giữ số liệu ngày cũ.

**Bước 4 –** Lọc cột **Nội dung** hoặc **Kho nhập/xuất** nếu chỉ cần một nghiệp vụ / một kho. Đọc dòng **TỔNG CỘNG** ở cuối lưới.

## 6. Giải thích các thông tin trên màn hình

**Cột Nội dung** nhận các giá trị sau (SL nằm ở cột **SL nhập** hay **SL xuất** như bảng):

- **Nhập mua hàng / Nhập khách trả**: Chứng từ: Phiếu nhập kho (KHO-A04); Cột số lượng: SL nhập
- **Xuất bán hàng / Xuất trả hàng ncc**: Chứng từ: Phiếu xuất kho (KHO-A05); Cột số lượng: SL xuất
- **Nhập gửi hàng**: Chứng từ: Phiếu nhập gửi hàng (KHO-A02); Cột số lượng: SL nhập
- **Điều chỉnh kho**: Chứng từ: Phiếu điều chỉnh kho (KHO-A03); Cột số lượng: SL nhập (số âm nếu điều chỉnh giảm)
- **Xuất chuyển kho / Nhập chuyển kho**: Chứng từ: Phiếu xuất / nhập chuyển kho (KHO-A06, A08); Cột số lượng: SL xuất / SL nhập
- **Xuất hàng**: Chứng từ: Phiếu xuất hàng – xuất khác (KHO-A07); Cột số lượng: SL xuất
- **Xuất cho mượn hàng, Nhập trả hàng cho mượn, Nhập mượn hàng, Xuất trả hàng mượn**: Chứng từ: Phiếu mượn hàng (KHO-B01 → B04); Cột số lượng: SL xuất / SL nhập
- **Xuất kho gia công, Xuất gia công - kho gia công**: Chứng từ: Phiếu xuất kho gia công (sổ Sản xuất); Cột số lượng: SL xuất ở kho xuất / SL nhập ở kho gia công
- **Nhập kho thành phẩm, Nhập kho thành phẩm - hàng lỗi, Xuất hàng trơn - nhập thành phẩm, Xuất nguyên liệu - nhập thành phẩm**: Chứng từ: Phiếu nhập kho gia công (sổ Sản xuất); Cột số lượng: SL nhập / SL xuất
- **Yêu cầu gia công - Kho xuất / - Kho gia công / - Nhập tất toán Kho xuất / - Xuất tất toán Kho gia công**: Chứng từ: Phiếu yêu cầu gia công (sổ Sản xuất); Cột số lượng: SL xuất / SL nhập
- **Lệnh sản xuất - Kho xuất / - Kho gia công / - Nhập tất toán Kho xuất / - Xuất tất toán Kho gia công, Nhập thành phẩm - Trừ nguyên liệu, Nhập thành phẩm**: Chứng từ: Lệnh sản xuất, phiếu nhập thành phẩm (sổ Sản xuất); Cột số lượng: SL xuất / SL nhập

Một chứng từ chuyển hàng giữa hai kho (xuất gia công, yêu cầu gia công, lệnh sản xuất) tạo **hai dòng**: một dòng xuất ở kho đi, một dòng nhập ở kho đến.

**Cách tính các cột tiền** (chỉ có ở dòng **Xuất bán hàng** / **Xuất trả hàng ncc**):

- **SL xuất**: Cách tính: Số lượng + số lượng lô của dòng phiếu xuất kho
- **Chiết khấu**: Cách tính: Chiết khấu của dòng + chiết khấu của cả phiếu
- **Thuế VAT**: Cách tính: Thuế VAT của dòng + thuế VAT của cả phiếu
- **Đơn giá VAT**: Cách tính: (Đơn giá − Đơn giá × Chiết khấu) × (1 + Thuế VAT)
- **Thành tiền**: Cách tính: SL xuất × Đơn giá (chưa trừ chiết khấu)
- **Thành tiền VAT**: Cách tính: SL xuất × Đơn giá VAT

Dòng **Nhập mua hàng / Nhập khách trả** có hiện **Chiết khấu** và **Thuế VAT** nhưng **Đơn giá**, **Thành tiền** bằng 0.

**Dữ liệu lấy vào:** chứng từ có ngày đúng bằng ngày ở ô, thuộc chi nhánh đang làm việc, thuộc kho được phân cho tài khoản, bỏ dòng có số lượng bằng 0. Thứ tự dòng theo thứ tự tạo phiếu, rồi thứ tự dòng hàng trong phiếu.

## 7. Kiểm tra sau khi thực hiện

Bạn có danh sách đầy đủ hàng ra vào kho trong ngày, biết nghiệp vụ, kho, đối tác, xe chở và giá trị các phiếu xuất bán.

## 8. Những điều cần lưu ý

⚠️ Các tỷ lệ trong công thức dùng dạng thập phân: 10% = 0,10; 8% = 0,08. Ví dụ minh họa đơn giá 100.000, CK 10%, VAT 8% thì Đơn giá VAT = 100.000 × 0,90 × 1,08 = 97.200; đây là cách đọc công thức, không phải kết quả kiểm thử ERP.

⚠️ Dòng **TỔNG CỘNG** cộng thẳng **SL nhập**, **SL xuất** của mọi mặt hàng, mọi đơn vị tính. Con số tổng chỉ có nghĩa khi bạn đã lọc còn một mặt hàng.

⚠️ **Nhập gửi hàng** (hàng khách gửi) cũng hiện như một dòng nhập vào kho.

⚠️ Sau khi đổi khoảng ngày, bấm **Tải lại**. Kiểm tra tên miền, tài khoản và kho trước khi đọc số liệu; không có bước chọn chi nhánh khác trong phiên ERP hệ thống chính thức.

⚠️ Tài khoản chưa được phân kho nào sẽ thấy lưới trống dù có quyền **Truy cập**.

### Lưới trống dù trong ngày có phiếu 

Nguyên nhân: đang ở chi nhánh khác, chưa bấm **Tải lại** sau khi đổi ngày, hoặc tài khoản chưa được phân kho của phiếu.
Cách xử lý: kiểm tra chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)), bấm **Tải lại**; nếu vẫn trống, nhờ quản trị hệ thống phân kho cho tài khoản.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Vì sao cột HĐ luôn trống?**
Hệ thống hiện chưa đưa số hoá đơn vào màn này. Muốn xem số hoá đơn, mở phiếu xuất kho ([TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/)).

**Xem được nhiều ngày một lúc không?**
Không. Muốn xem chứng từ theo khoảng ngày, dùng các màn chi tiết ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CHI TIẾT NHẬP KHO GỬI HÀNG](/bai-viet/2026-11-07-kho-c02-0-tong-quan-man-hinh-thong-ke-chi-tiet-nhap-kho-gui-hang/) → C05.0) hoặc **Xuất nhập tồn** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/)).

**Sao phiếu điều chỉnh giảm lại nằm ở cột SL nhập?**
Phiếu điều chỉnh kho ghi một số lượng có dấu: dương là tăng, âm là giảm. Màn này đặt nguyên số đó vào **SL nhập**.

## 11. Công việc tiếp theo

```text
Thấy dòng sai → mở màn phiếu tương ứng (KHO-A02 → A08) sửa phiếu
Cần số tồn   → Xuất nhập tồn (KHO-C07.0) hoặc Sổ cái kho (KHO-A09.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/) – Tổng quan màn hình Phiếu nhập kho
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
- [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/) – Tổng quan màn hình Sổ cái kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/) – Tổng quan màn hình thống kê Xuất nhập tồn
