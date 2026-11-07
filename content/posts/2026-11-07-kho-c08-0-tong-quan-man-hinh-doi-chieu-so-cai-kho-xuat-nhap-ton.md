---
title: "TỔNG QUAN MÀN HÌNH ĐỐI CHIẾU SỔ CÁI KHO - XUẤT NHẬP TỒN"
date: "2026-11-07"
summary: "Hệ thống có hai nguồn số liệu tồn kho: - Báo cáo Xuất nhập tồn (TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN): cộng trực tiếp từ các chứng từ kho."
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

Hệ thống có hai nguồn số liệu tồn kho:

- **Báo cáo Xuất nhập tồn** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/)): cộng trực tiếp từ các chứng từ kho.
- **Sổ cái kho** ([TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/)): mỗi lần nhập / xuất ghi một dòng sổ, dùng để tính giá vốn bình quân.

Màn hình **Đối chiếu sổ cái kho** so **số lượng từng nghiệp vụ** giữa hai nguồn này trong khoảng ngày bạn chọn, tại **chi nhánh đang làm việc**. Mỗi dòng trên lưới là **một nghiệp vụ** (Tồn đầu kỳ, Nhập mua hàng, Xuất bán hàng…), cho biết có bao nhiêu cặp kho + hàng hoá bị lệch và lệch bao nhiêu.

Bạn dùng màn hình này khi:

- Kế toán kho kiểm tra sổ cái kho có ghi đủ mọi chứng từ trước khi chốt giá vốn.
- Thấy tồn trên Xuất nhập tồn khác Sổ cái kho và cần tìm nghiệp vụ, mặt hàng gây lệch.

Màn hình chỉ để **xem**, không tự sửa số liệu.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** cần đối chiếu ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Hiểu cách đọc **Xuất nhập tồn** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/)) và **Sổ cái kho** ([TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/)).

## 2. Mở chức năng

**Thống kê kho → Đối chiếu sổ cái kho**

## 3. Nhận biết màn hình

![Hình 1: Màn hình ĐỐI CHIẾU SỔ CÁI KHO - XUẤT NHẬP TỒN](/posts/2026-11-07-kho-c08-0-tong-quan-man-hinh-doi-chieu-so-cai-kho-xuat-nhap-ton/hinh-01-man-hinh-doi-chieu-so-cai-kho.png)

Dưới tiêu đề có dòng mô tả: "So số lượng từng nghiệp vụ giữa báo cáo xuất nhập tồn và sổ cái kho, theo kho + hàng hóa. Chênh lệch = sổ cái − xuất nhập tồn. Bấm vào một nghiệp vụ để xem chi tiết từng kho + hàng hóa."

- **Ô khoảng ngày**: Chức năng: Chọn kỳ đối chiếu, mặc định **từ đầu tháng đến hôm nay** (`mtd`); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tính lại đối chiếu; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Ô Chỉ hiện dòng lệch**: Chức năng: Đánh dấu sẵn: chỉ hiện nghiệp vụ có dòng lệch; bỏ đánh dấu để xem mọi nghiệp vụ; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Biểu tượng Xuất Excel**: Chức năng: Xuất lưới ra Excel (chỉ hiện khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm… (hàng lọc nằm ngay dưới tiêu đề cột)**: Chức năng: Tìm, lọc, ẩn / hiện cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Ô số lệch tô đỏ**: Chức năng: Ô **Số dòng lệch**, **Chênh lệch** khác 0
- **Dòng TỔNG NHẬP / TỔNG XUẤT**: Chức năng: Tổng số lượng riêng nhóm Nhập và nhóm Xuất; Hướng dẫn: phần “Giải thích các thông tin trên màn hình”

Lưới hiện **mọi dòng trên một trang** (không phân trang) và nhớ bố cục cột.

**Các cột trên lưới:**

- **Nhóm**: Ý nghĩa: **Tồn**, **Nhập** hoặc **Xuất**
- **Nghiệp vụ**: Ý nghĩa: Tên nghiệp vụ có số thứ tự đầu, từ **00. Tồn đầu kỳ** tới **99. Tồn cuối kỳ** (bảng phần “Giải thích các thông tin trên màn hình”)
- **Số dòng**: Ý nghĩa: Số cặp kho + hàng hoá có số liệu ở nghiệp vụ này
- **Số dòng lệch**: Ý nghĩa: Số cặp kho + hàng hoá có chênh lệch khác 0
- **SL xuất nhập tồn**: Ý nghĩa: Tổng số lượng theo báo cáo Xuất nhập tồn
- **SL sổ cái kho**: Ý nghĩa: Tổng số lượng theo Sổ cái kho
- **Chênh lệch**: Ý nghĩa: **SL sổ cái kho − SL xuất nhập tồn**

**Bấm (một lần) vào một dòng nghiệp vụ** để mở cửa sổ **ĐỐI CHIẾU SỔ CÁI KHO - <TÊN NGHIỆP VỤ>**:

![Hình 2: Cửa sổ chi tiết một nghiệp vụ](/posts/2026-11-07-kho-c08-0-tong-quan-man-hinh-doi-chieu-so-cai-kho-xuat-nhap-ton/hinh-02-chi-tiet-nghiep-vu.png)

Hình 2 là cửa sổ **ĐỐI CHIẾU SỔ CÁI KHO - 00. TỒN ĐẦU KỲ** (khung đỏ trên cùng). Cửa sổ có Xuất Excel, Trình chọn cột, **Tìm kiếm…**; danh sách dài thì cuộn xuống để thấy dòng **TỔNG**; đóng bằng dấu **×** đỏ ở góc trên phải.

- **Kho, Mã kho (ẩn)**: Ý nghĩa: Kho
- **Loại hàng (ẩn), Mã hàng hóa, Tên hàng hóa, Đvt**: Ý nghĩa: Mặt hàng
- **SL xuất nhập tồn, SL sổ cái kho, Chênh lệch**: Ý nghĩa: Số liệu của cặp kho + hàng hoá ở nghiệp vụ đó

Cuối cửa sổ có dòng **TỔNG: n dòng** và tổng ba cột số lượng. Khi ô **Chỉ hiện dòng lệch** đang đánh dấu, cửa sổ chỉ liệt kê các cặp kho + hàng hoá bị lệch.

## 4. Trình tự công việc

```text
Chọn kỳ (mặc định đầu tháng → hôm nay) ──► Lưới theo nghiệp vụ
      ↓
Chỉ hiện dòng lệch ──► thấy nghiệp vụ lệch ──► bấm dòng ──► kho + hàng bị lệch
      ↓
Mở Xuất nhập tồn / Sổ cái kho của mặt hàng đó ──► tìm chứng từ lệch ──► báo xử lý
```

## 5. Thực hiện trên phần mềm

- **Kiểm tra tháng này có lệch không**: Cách làm: Mở màn hình (mặc định đầu tháng tới nay)
- **Đối chiếu một tháng đã qua**: Cách làm: Ô khoảng ngày → chọn tháng; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem cả nghiệp vụ không lệch**: Cách làm: Bỏ đánh dấu **Chỉ hiện dòng lệch**
- **Xem mặt hàng nào lệch**: Cách làm: Bấm vào dòng nghiệp vụ; Bài hướng dẫn: phần “Thực hiện trên phần mềm” bên dưới
- **Xuất danh sách lệch**: Cách làm: **Xuất Excel** trong cửa sổ chi tiết; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Tìm mặt hàng gây lệch

**Bước 1 –** Mở **Thống kê kho → Đối chiếu sổ cái kho**. Kiểm tra ô **Chỉ hiện dòng lệch** đang được đánh dấu.

**Bước 2 –** Chọn kỳ cần đối chiếu. Lưới chỉ còn các nghiệp vụ có **Số dòng lệch** lớn hơn 0 (tô đỏ).

**Bước 3 –** Bỏ qua dòng **00. Tồn đầu kỳ** và **99. Tồn cuối kỳ** trước; bấm vào nghiệp vụ nhập / xuất đầu tiên bị lệch (ví dụ **01. Nhập mua hàng**). Cửa sổ chi tiết liệt kê từng kho + hàng hoá lệch.

**Bước 4 –** Ghi lại mã hàng và kho. Mở **Xuất nhập tồn** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/)), chuột phải mặt hàng → **Xem chi tiết - Nhập xuất**, rồi so với **Sổ cái kho** ([TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/)) cùng kỳ để tìm chứng từ thiếu hoặc lệch số lượng.

**Bước 5 –** Nếu mọi nghiệp vụ trong kỳ đều khớp mà chỉ **Tồn đầu kỳ** / **Tồn cuối kỳ** lệch, ưu tiên rà dữ liệu **trước kỳ**, đồng thời đối chiếu tồn hiện tại và phạm vi kho của hai nguồn. XNT tính ngược từ tồn hiện tại, sổ cái cộng từ dòng sổ; chưa đủ để khẳng định chỉ sai chứng từ trước kỳ.

## 6. Giải thích các thông tin trên màn hình

**Danh sách nghiệp vụ và cách ghép hai nguồn:**

- **00. Tồn đầu kỳ**: Xuất nhập tồn lấy cột: Tồn đầu; Sổ cái kho lấy dòng: Cộng nhập − xuất mọi dòng sổ **trước** ngày đầu kỳ
- **01. Nhập mua hàng**: Xuất nhập tồn lấy cột: Nhập mua; Sổ cái kho lấy dòng: Nhập kho, không có nguồn
- **02. Nhập khách trả hàng**: Xuất nhập tồn lấy cột: Nhập khách trả; Sổ cái kho lấy dòng: Khách trả hàng
- **03. Nhập kho gửi hàng**: Xuất nhập tồn lấy cột: Hàng gửi; Sổ cái kho lấy dòng: Nguồn nhập gửi hàng
- **04. Nhập chuyển kho**: Xuất nhập tồn lấy cột: Nhập chuyển; Sổ cái kho lấy dòng: Nhập kho, nguồn chuyển kho
- **05. Nhập mượn**: Xuất nhập tồn lấy cột: Nhập mượn; Sổ cái kho lấy dòng: Nhập kho, nguồn mượn
- **06. Nhập trả mượn**: Xuất nhập tồn lấy cột: Nhập trả mượn; Sổ cái kho lấy dòng: Nhập kho, nguồn trả mượn
- **07. Nhập kho gia công**: Xuất nhập tồn lấy cột: Hàng vào kho gia công khi xuất gia công; Sổ cái kho lấy dòng: Nhập kho, nguồn xuất gia công
- **08. Nhập thành phẩm (gồm hàng lỗi)**: Xuất nhập tồn lấy cột: Nhập gia công + Nhập gia công lỗi; Sổ cái kho lấy dòng: Nguồn sản xuất gia công / sản xuất Gia Phúc
- **09. Yêu cầu gia công / lệnh SX / tất toán - nhập**: Xuất nhập tồn lấy cột: Phần còn lại của Tổng nhập; Sổ cái kho lấy dòng: Nhập kho, nguồn yêu cầu gia công / tất toán
- **10. Điều chỉnh kho (net)**: Xuất nhập tồn lấy cột: Điều chỉnh (có dấu); Sổ cái kho lấy dòng: Điều chỉnh tăng − điều chỉnh giảm
- **11. Mua hàng trả mượn bằng tiền**: Xuất nhập tồn lấy cột: Không có; Sổ cái kho lấy dòng: Mua trả mượn
- **12. Seed tồn đầu kỳ sổ cái**: Xuất nhập tồn lấy cột: Không có; Sổ cái kho lấy dòng: Dòng sổ nguồn tồn đầu kỳ / nhập giá vốn
- **19. Khác - nhập**: Xuất nhập tồn lấy cột: Không có; Sổ cái kho lấy dòng: Dòng sổ nhập chưa phân loại
- **21. Xuất bán hàng + phiếu xuất hàng**: Xuất nhập tồn lấy cột: Xuất bán (đã gồm xuất khác); Sổ cái kho lấy dòng: Xuất kho không nguồn + nguồn xuất hàng
- **22. Xuất trả nhà cung cấp**: Xuất nhập tồn lấy cột: Xuất trả ncc; Sổ cái kho lấy dòng: Trả hàng nhà cung cấp
- **23. Xuất chuyển kho**: Xuất nhập tồn lấy cột: Xuất chuyển; Sổ cái kho lấy dòng: Xuất kho, nguồn chuyển kho
- **24. Xuất mượn**: Xuất nhập tồn lấy cột: Xuất cho mượn; Sổ cái kho lấy dòng: Xuất kho, nguồn mượn
- **25. Xuất trả mượn**: Xuất nhập tồn lấy cột: Xuất trả mượn; Sổ cái kho lấy dòng: Xuất kho, nguồn trả mượn
- **26. Xuất kho gia công**: Xuất nhập tồn lấy cột: Xuất gia công; Sổ cái kho lấy dòng: Xuất kho, nguồn xuất gia công
- **27. Xuất hàng trơn (nhập thành phẩm)**: Xuất nhập tồn lấy cột: Hàng trơn trừ khi nhập thành phẩm; Sổ cái kho lấy dòng: Nguồn xuất hàng trơn
- **28. Xuất nguyên liệu (nhập thành phẩm)**: Xuất nhập tồn lấy cột: Nguyên liệu trừ khi nhập thành phẩm; Sổ cái kho lấy dòng: Nguồn tiêu hao
- **29. Yêu cầu gia công / lệnh SX / tất toán - xuất**: Xuất nhập tồn lấy cột: Phần còn lại của Tổng xuất; Sổ cái kho lấy dòng: Xuất kho, nguồn yêu cầu gia công / tất toán
- **30. Xuất hao hụt**: Xuất nhập tồn lấy cột: Không có; Sổ cái kho lấy dòng: Nguồn hao hụt
- **31. Bán hàng trả mượn bằng tiền**: Xuất nhập tồn lấy cột: Không có; Sổ cái kho lấy dòng: Bán trả mượn
- **39. Khác - xuất**: Xuất nhập tồn lấy cột: Không có; Sổ cái kho lấy dòng: Dòng sổ xuất chưa phân loại
- **99. Tồn cuối kỳ**: Xuất nhập tồn lấy cột: Tồn cuối; Sổ cái kho lấy dòng: Cộng nhập − xuất mọi dòng sổ tới hết ngày cuối kỳ

**Quy ước dấu:** nghiệp vụ nhập tính **nhập − xuất**, nghiệp vụ xuất tính **xuất − nhập**. Vì vậy **10. Điều chỉnh kho (net)** có thể âm khi điều chỉnh giảm nhiều hơn tăng.

**Các nghiệp vụ "Không có" ở cột Xuất nhập tồn** (11, 12, 19, 30, 31, 39) chỉ có số bên sổ cái, nên **luôn lệch** đúng bằng số trên sổ cái nếu có phát sinh.

**Dòng TỔNG NHẬP / TỔNG XUẤT:** cộng riêng các nghiệp vụ nhóm **Nhập** và nhóm **Xuất** đang hiện trên lưới (không cộng dòng Tồn). Ô tổng cột **Số dòng lệch** cộng mọi dòng đang hiện, kể cả dòng Tồn.

**Phạm vi:** chỉ hàng có quản lý tồn; chỉ kho được phân cho tài khoản; chênh lệch làm tròn 3 chữ số lẻ. Một cặp kho + hàng hoá chỉ được đếm ở nghiệp vụ khi ít nhất một bên khác 0.

## 7. Kiểm tra sau khi thực hiện

Bạn biết trong kỳ, nghiệp vụ nào giữa Xuất nhập tồn và Sổ cái kho không khớp, có bao nhiêu mặt hàng lệch, lệch bao nhiêu và ở kho nào.

## 8. Những điều cần lưu ý

⚠️ Tổng số lượng theo nghiệp vụ có thể cộng nhiều mặt hàng/ĐVT. Dùng chi tiết từng kho–mã–ĐVT để đối chiếu; tổng ròng bằng 0 vẫn có thể có các dòng lệch bù trừ.

⚠️ Tổng **Số dòng lệch** cộng theo nghiệp vụ, kể cả tồn đầu và cuối: cùng một cặp kho–hàng có thể bị đếm nhiều lần. Đây không phải số mặt hàng duy nhất bị lệch; đọc danh sách chi tiết từng nghiệp vụ trước tổng hợp.

⚠️ **Chênh lệch = Sổ cái kho − Xuất nhập tồn**. Số dương: sổ cái nhiều hơn; số âm: sổ cái ít hơn (thường do chứng từ chưa được ghi vào sổ cái).

⚠️ Giá vốn bình quân tính trên **Sổ cái kho**. Sổ cái lệch số lượng thì giá vốn, giá trị tồn kho cũng sai. Đối chiếu trước khi chốt giá vốn cuối tháng.

⚠️ Ô **Chỉ hiện dòng lệch** được đánh dấu sẵn. Lưới trống chỉ có thể đọc là không có dòng lệch sau khi xác nhận tải thành công, đúng kỳ, bộ lọc và phạm vi kho. Nếu chưa rõ, bỏ chọn để kiểm tra có số liệu; không lấy màn trống làm bằng chứng toàn hệ thống khớp.

⚠️ Các thao tác sửa sổ cái (**Backfill**, **Tính lại giá vốn**, **Set tồn đầu kỳ**, **Xóa loạt** ở [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/)) ảnh hưởng toàn bộ giá vốn. Chỉ người được giao mới thực hiện, sau khi đã xác định nguyên nhân lệch.

⚠️ Kỳ dài và nhiều kho thì tính lâu vì màn này chạy lại toàn bộ báo cáo Xuất nhập tồn.

### Lưới trống 

Nguyên nhân: ô **Chỉ hiện dòng lệch** đang đánh dấu và kỳ này không có nghiệp vụ lệch; hoặc tài khoản chưa được phân kho.
Cách xử lý: bỏ đánh dấu **Chỉ hiện dòng lệch** để xem toàn bộ; nếu vẫn trống, kiểm tra chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)) và phân kho.

### Tồn đầu kỳ, Tồn cuối kỳ lệch nhưng các nghiệp vụ trong kỳ không lệch 

Nguyên nhân có thể từ trước kỳ hoặc từ tồn hiện tại/phạm vi hai nguồn; cần đối chiếu để xác định.
Cách xử lý: lùi ngày bắt đầu (ví dụ chọn từ đầu năm) để thấy nghiệp vụ gây lệch.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: chưa có quyền **Xuất dữ liệu**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Vì sao "12. Seed tồn đầu kỳ sổ cái" luôn lệch?**
Đó là các dòng tồn đầu kỳ / giá vốn nạp vào sổ cái khi bắt đầu dùng sổ cái kho. Báo cáo Xuất nhập tồn không có nghiệp vụ này nên luôn thấy lệch đúng bằng số đã nạp.

**Phải nhấp đúp mới mở chi tiết?**
Không. Chỉ cần **bấm một lần** vào dòng nghiệp vụ.

**Vì sao 21 gộp xuất bán và phiếu xuất hàng?**
Vì báo cáo Xuất nhập tồn đang gộp hai loại này vào cột **Xuất bán**; màn đối chiếu gộp theo để so được.

## 11. Công việc tiếp theo

```text
Lệch ở nghiệp vụ nhập / xuất → tìm chứng từ (KHO-C07.0, KHO-A09.0)
                             → sửa phiếu / ghi lại sổ cái
Chỉ lệch tồn đầu, tồn cuối → lùi kỳ để tìm nghiệp vụ lệch trước kỳ
Sổ cái cần ghi lại → Sổ cái kho: Backfill / Tính lại giá vốn (KHO-A09.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/) – Tổng quan màn hình Sổ cái kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/) – Tổng quan màn hình thống kê Xuất nhập tồn
