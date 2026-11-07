---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN LÔ HÀNG"
date: "2026-11-07"
summary: "Màn hình Xuất nhập tồn lô hàng giống Xuất nhập tồn (TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN) nhưng chia nhỏ tới từng lô hàng."
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

Màn hình **Xuất nhập tồn lô hàng** giống **Xuất nhập tồn** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/)) nhưng chia nhỏ tới **từng lô hàng**. Mỗi dòng là **một lô của một mặt hàng trong một kho** của **chi nhánh đang làm việc**, cho biết **Tồn đầu**, **Tổng nhập**, **Tổng xuất**, **Tồn cuối** trong khoảng ngày bạn chọn và tồn **hiện tại** của lô.

Bạn dùng màn hình này khi:

- Kiểm tra lô nào còn tồn, còn bao nhiêu, **hạn sử dụng** đến khi nào.
- Ưu tiên xuất lô sắp hết hạn trước.
- Truy vết một lô đã nhập / xuất qua những chứng từ nào.

Màn hình chỉ tính các dòng chứng từ **có chọn lô hàng**. Hàng không quản lý theo lô không xuất hiện ở đây.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** cần xem ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Tài khoản đã được phân **kho hàng** cần xem.
- Hàng hoá đã có **lô hàng** (mã lô, hạn sử dụng) và các phiếu nhập / xuất đã chọn lô.

## 2. Mở chức năng

**Thống kê kho → Xuất nhập tồn lô hàng**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ XUẤT NHẬP TỒN LÔ HÀNG](/posts/2026-11-07-kho-c06-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton-lo-hang/hinh-01-man-hinh-xuat-nhap-ton-lo-hang.png)

- **Ô khoảng ngày**: Chức năng: Chọn kỳ báo cáo, mặc định **hôm nay** (`today`); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tính lại số liệu; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Biểu tượng Xuất Excel có mũi tên**: Chức năng: **Xuất ra tất cả dữ liệu** / **Xuất ra dữ liệu đã chọn** (chỉ hiện khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột**: Chức năng: Ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm kiếm…**: Chức năng: Tìm theo mọi cột (mã lô, mã hàng…); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột ô tick đầu dòng**: Chức năng: Chọn dòng để xuất Excel dòng đã chọn; Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Hàng lọc dưới tiêu đề cột**: Chức năng: Lọc từng cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Dòng TỔNG CỘNG**: Chức năng: Số dòng và tổng các cột số lượng; Hướng dẫn: phần “Những điều cần lưu ý”

Lưới hiện **10 dòng mỗi trang** (chọn được 10 / 15 / 20) và nhớ bố cục cột. Nhấp chuột phải lên tiêu đề cột có **Khôi phục bố cục**.

**Các cột trên lưới:**

- **Thông tin kho**: Cột: Mã kho, Tên kho; Ý nghĩa: Kho chứa lô
- **Thông tin hàng hoá**: Cột: Mã hàng hoá, Tên hàng hoá; Ý nghĩa: Mặt hàng của lô
- **Thông tin Lô Hàng**: Cột: Mã lô hàng, Hạn sử dụng; Ý nghĩa: Mã lô và hạn sử dụng khai cho lô
- **Kỳ báo cáo (tiêu đề Từ ngày: … - Đến ngày: … hoặc Trong ngày: …)**: Cột: Tồn đầu, Tổng nhập, Tổng xuất, Tồn cuối; Ý nghĩa: Số lượng của lô trong kỳ (xem phần “Giải thích các thông tin trên màn hình”)
- **Tồn kho - Không theo thời gian**: Cột: Tồn, Bán chưa xuất, Giữ gia công, Tồn cuối được xuất; Ý nghĩa: Số hiện tại của lô, không phụ thuộc kỳ (xem phần “Giải thích các thông tin trên màn hình”)

**Menu chuột phải trên một dòng:** **Xem chi tiết lô - Nhập xuất** mở cửa sổ **XEM CHI TIẾT LÔ - NHẬP XUẤT: <mã lô> - <mã hàng>**, liệt kê từng chứng từ nhập / xuất của lô trong kỳ. Các cột của cửa sổ (Ngày phát sinh, Mã phiếu, Mã phiếu gốc, Nội dung, Kho hàng, Nhân viên, Số lượng nhập, Số lượng xuất, Còn lại, Chú thích, Lý do nhập/xuất) và thao tác **nhấp đúp mở phiếu gốc** giống cửa sổ chi tiết của Xuất nhập tồn — xem [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/) phần “Nhận biết màn hình”. **Nhấp đúp** vào dòng lô trên lưới chính **không** mở cửa sổ này – phải dùng chuột phải.

![Hình 2: Cửa sổ XEM CHI TIẾT LÔ - NHẬP XUẤT](/posts/2026-11-07-kho-c06-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton-lo-hang/hinh-02-xem-chi-tiet-lo-nhap-xuat.png)

Hình 2 chụp với kỳ 11/10/2026, lô không có chứng từ trong ngày nên cửa sổ trống (*Không có dữ liệu*); dòng **TỔNG CỘNG** (khung đỏ) vẫn ghi **Đầu kỳ: …**, tổng nhập, tổng xuất, **Cuối kỳ: …**. Cửa sổ có nút **Tải lại**, Xuất Excel, Trình chọn cột, **Tìm kiếm…**.

## 4. Trình tự công việc

```text
Phiếu nhập có chọn lô ──► lô tăng      Phiếu xuất có chọn lô ──► lô giảm
                    ↓                              ↓
        Xuất nhập tồn lô hàng: mỗi dòng = kho + hàng + lô
                    │
                    └── Chuột phải → Xem chi tiết lô - Nhập xuất
                              ↓
                        nhấp đúp → phiếu gốc
```

## 5. Thực hiện trên phần mềm

- **Xem tồn từng lô hôm nay**: Cách làm: Mở màn hình (mặc định **hôm nay**)
- **Tìm một lô**: Cách làm: Gõ mã lô vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm lô sắp hết hạn**: Cách làm: Bấm tiêu đề cột **Hạn sử dụng** để sắp xếp; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Truy vết chứng từ của lô**: Cách làm: Chuột phải → **Xem chi tiết lô - Nhập xuất**; Bài hướng dẫn: phần “Thực hiện trên phần mềm” bên dưới
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Xem tồn không chia lô, có giá trị**: Cách làm: Màn Xuất nhập tồn; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/)

### Truy vết các chứng từ của một lô

**Bước 1 –** Mở **Thống kê kho → Xuất nhập tồn lô hàng**, chọn kỳ ở ô khoảng ngày.

**Bước 2 –** Gõ mã lô vào **Tìm kiếm…**.

**Bước 3 –** Nhấp chuột phải vào dòng lô, chọn **Xem chi tiết lô - Nhập xuất**.

**Bước 4 –** Đọc cột **Còn lại** để thấy tồn của lô sau từng chứng từ. Nhấp đúp một dòng để mở phiếu gốc.

## 6. Giải thích các thông tin trên màn hình

- **Tồn cuối**: Cách tính: Tồn hiện tại của lô − số nhập **sau** ngày cuối kỳ + số xuất **sau** ngày cuối kỳ
- **Tồn đầu**: Cách tính: Tồn cuối − Tổng nhập + Tổng xuất
- **Tổng nhập**: Cách tính: Tổng số lượng các dòng chứng từ nhập có chọn lô trong kỳ: nhập gửi hàng, điều chỉnh kho, nhập kho, nhập chuyển kho, hàng vào kho gia công, nhập gia công (thành phẩm, hàng lỗi), nhập mượn, nhập trả mượn, nhập vật tư, nhập thành phẩm, lệnh sản xuất
- **Tổng xuất**: Cách tính: Tổng số lượng các dòng chứng từ xuất có chọn lô trong kỳ: xuất kho, xuất chuyển kho, xuất gia công, nguyên liệu trừ khi nhập thành phẩm, xuất cho mượn, xuất trả mượn, xuất vật tư, lệnh sản xuất
- **Tồn**: Cách tính: Tồn hiện tại của lô
- **Bán chưa xuất**: Cách tính: Số lượng của lô trên phiếu bán hàng chưa xuất kho
- **Giữ gia công**: Cách tính: Số lượng của lô đang giữ cho gia công
- **Tồn cuối được xuất**: Cách tính: Tồn − Bán chưa xuất − Giữ gia công − hàng giữ khác

**Dòng nào được hiện:** lô thuộc kho được phân cho tài khoản và có ít nhất một số khác 0. Lưới xếp theo loại hàng hoá, mã hàng.

## 7. Kiểm tra sau khi thực hiện

Bạn biết từng lô còn tồn bao nhiêu ở kho nào, hạn sử dụng, số còn xuất được và lịch sử nhập xuất của lô.

## 8. Những điều cần lưu ý

⚠️ Chỉ các dòng chứng từ **có chọn lô** được tính. Phiếu nhập / xuất không chọn lô làm tồn theo lô **lệch** với tồn trên **Xuất nhập tồn** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/)).

⚠️ **Tồn đầu**, **Tồn cuối** được tính ngược từ tồn hiện tại; chứng từ lập lùi ngày sẽ làm đổi số các kỳ cũ.

⚠️ Màn này **không có giá vốn / giá trị**. Cửa sổ chi tiết lô cũng không hiện cột **Giá vốn**.

⚠️ Dòng **TỔNG CỘNG** cộng mọi lô, mọi mặt hàng. Chỉ đọc tổng số lượng khi đã lọc còn một mặt hàng.

### Không thấy lô vừa nhập 

Nguyên nhân: phiếu nhập không chọn lô, khoảng ngày chưa chứa ngày phiếu, đang ở chi nhánh khác, hoặc tài khoản chưa được phân kho.
Cách xử lý: mở phiếu kiểm tra cột **Lô hàng**; chọn lại khoảng ngày, kiểm tra chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Ô khoảng ngày có nhớ lựa chọn lần trước không?**
Không. Màn này luôn mở với mốc **hôm nay**.

**Vì sao tổng tồn các lô khác tồn của mặt hàng trên Xuất nhập tồn?**
Vì phần hàng nhập / xuất không chọn lô (hoặc qua phiếu xuất khác, yêu cầu gia công) không nằm trong lô nào.

## 11. Công việc tiếp theo

```text
Lô sắp hết hạn → ưu tiên chọn lô đó khi lập phiếu xuất kho (KHO-A05.0)
Tồn lô lệch thực tế → Phiếu điều chỉnh kho có chọn lô (KHO-A03.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/) – Tổng quan màn hình thống kê Xuất nhập tồn
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/) – Tổng quan màn hình Phiếu nhập kho
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
- [TỔNG QUAN MÀN HÌNH PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-0-tong-quan-man-hinh-phieu-dieu-chinh-kho/) – Tổng quan màn hình Phiếu điều chỉnh kho
