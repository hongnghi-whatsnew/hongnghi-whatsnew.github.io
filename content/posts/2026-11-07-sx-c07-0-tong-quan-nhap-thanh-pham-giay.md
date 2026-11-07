---
title: "TỔNG QUAN NHẬP THÀNH PHẨM GIẤY"
date: "2026-11-07"
summary: "Tra cứu chi tiết thành phẩm giấy/keo thực nhập và lệnh sản xuất liên quan."
module: "Sản xuất"
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

Tra cứu chi tiết thành phẩm giấy/keo thực nhập và lệnh sản xuất liên quan.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có khoảng ngày nhập và danh sách phiếu nhận giấy/keo cần rà. Chuẩn bị lệnh sản xuất liên kết, kho nhận, đơn vị và lô/hạn nếu hàng có quản lý lô để đối chiếu.
- hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; dùng đúng hệ thống của đơn vị, không chuyển chi nhánh trong cùng phiên.

## 2. Mở chức năng

**Thống kê sản xuất → Nhập thành phẩm giấy**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![THỐNG KÊ - CHI TIẾT NHẬP THÀNH PHẨM — chưa có dữ liệu theo bộ lọc, chỉ xem.](/posts/2026-11-07-sx-c07-0-tong-quan-nhap-thanh-pham-giay/ui-20261026-sx-c07-ds-overview.png)

Các nhóm số liệu và điều khiển được giải thích ở phần “Giải thích các thông tin trên màn hình”. Các cột là thông tin đọc từ chứng từ, không nhập bù số trên báo cáo.

Ảnh đang ở backlog. Tìm/lọc/cột xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); chỉ xuất dữ liệu theo [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/) khi màn có nút và tài khoản có quyền.

## 4. Trình tự công việc

```text
Chốt nguồn và phạm vi báo cáo
       ↓
Kiểm tra mã hàng, đơn vị, ngày chứng từ
       ↓
Đọc các lượng/chỉ số theo phần “Giải thích các thông tin trên màn hình”
       ↓
Đối chiếu chứng từ nguồn và xử lý sai lệch
```

## 5. Thực hiện trên phần mềm

1. Chọn khoảng **ngày nhập thành phẩm** cần đối chiếu, tìm **Mã phiếu nhập**. Phân biệt Loại phiếu giấy/keo và kho nhận trước tổng số lượng.
2. Rà **Thành phẩm**, **Đvt**, **Số lượng** của từng dòng; một phiếu có thể nhiều thành phẩm hoặc lô, nên đọc chi tiết trước cộng theo phiếu.
3. Đối chiếu **Kho gia công**, **Kho nhập**, **Đơn vị gia công**, **Nguồn nhân lực** với chứng từ nhận thực tế; không dùng tên kho gia công thay cho kho đã ghi tăng thành phẩm.
4. Nếu có lô, kiểm tra **Mã lô hàng**, **Hạn sử dụng** theo đúng dòng nhận. Trống thông tin lô không tự chứng minh phiếu thiếu hoặc sai, cần xem quy tắc loại hàng và nguồn.
5. Đối chiếu **Đơn giá**, **Chi phí** theo dòng nhập; sau đó xem **Ngày yêu cầu**, **Mã phiếu y/c** để truy lệnh nguồn. Ngày lệnh ngoài khoảng nhập không làm phiếu nhập mất khỏi báo cáo.
6. Khi bàn giao đối chiếu, ghi mã phiếu nhập/ngày nhập, lệnh/ngày lệnh, thành phẩm, Đvt, lượng, kho nhận và lô nếu có. Không dùng số dòng hay tổng ở chân bảng để thay danh sách mã phiếu duy nhất. Khi cần sửa số lượng, lô hoặc chi phí, ghi mã phiếu/dòng và xử lý tại chứng từ nguồn theo quyền; tải lại báo cáo để so kết quả. Màn này chỉ tra cứu, không sửa giá như [TỔNG QUAN NHẬP GIA CÔNG CHI TIẾT](/bai-viet/2026-11-07-sx-c02-0-tong-quan-nhap-gia-cong-chi-tiet/).

## 6. Giải thích các thông tin trên màn hình

- **Ngày phát sinh**: Ý nghĩa, phạm vi và cách kiểm tra: Ngày phiếu nhập thành phẩm; đây là ngày dùng lọc kỳ báo cáo, khác ngày sản xuất của lệnh liên kết.
- **Mã phiếu nhập**: Ý nghĩa, phạm vi và cách kiểm tra: Mã phiếu nhận thành phẩm giấy/keo. Một phiếu nhiều dòng sẽ lặp mã trên báo cáo; không đếm số dòng là số phiếu.
- **Loại phiếu**: Ý nghĩa, phạm vi và cách kiểm tra: Phân loại giấy/keo của phiếu nhập. Đọc cùng Đvt trước cộng Số lượng.
- **Kho gia công**: Ý nghĩa, phạm vi và cách kiểm tra: Kho gia công theo phiếu nhận; khác kho nhập nhận thành phẩm.
- **Kho nhập**: Ý nghĩa, phạm vi và cách kiểm tra: Kho nhận thành phẩm trên phiếu nhập, dùng đối chiếu đúng nơi ghi tăng hàng.
- **Đơn vị gia công**: Ý nghĩa, phạm vi và cách kiểm tra: Đơn vị thực hiện được ghi trên phiếu nhập, khác Nguồn nhân lực.
- **Nguồn nhân lực**: Ý nghĩa, phạm vi và cách kiểm tra: Nguồn nhân lực tham gia trên phiếu nhập; dùng đối chiếu nhóm thực hiện và chi phí của phiếu.
- **Lý do nhập**: Ý nghĩa, phạm vi và cách kiểm tra: Ghi chú chung của phiếu nhận thành phẩm để giải trình mục đích nhập.
- **Thành phẩm**: Ý nghĩa, phạm vi và cách kiểm tra: Tên thành phẩm trên từng dòng phiếu nhập; đối chiếu lệnh nguồn và đơn vị của dòng.
- **Đvt**: Ý nghĩa, phạm vi và cách kiểm tra: Đơn vị của dòng nhập. Không mặc định luôn giống đơn vị của dòng lệnh khi có quy đổi.
- **Mã lô hàng**: Ý nghĩa, phạm vi và cách kiểm tra: Lô gắn với chi tiết nhập nếu có; trống cần kiểm tra phiếu/loại hàng, không tự tạo lô để làm đầy báo cáo.
- **Hạn sử dụng**: Ý nghĩa, phạm vi và cách kiểm tra: Hạn của lô hàng liên kết, không phải ngày hết hạn lệnh sản xuất hoặc ngày nhập.
- **Số lượng**: Ý nghĩa, phạm vi và cách kiểm tra: Sản lượng thực nhận của dòng phiếu trong kỳ ngày nhập đang chọn, khác lượng dự kiến của lệnh.
- **Đơn giá**: Ý nghĩa, phạm vi và cách kiểm tra: Giá được ghi trên chi tiết nhập; chỉ đọc ở báo cáo này. Không coi là giá gia công ván hoặc giá thành đã kết chuyển nếu chưa có căn cứ riêng.
- **Chi phí**: Ý nghĩa, phạm vi và cách kiểm tra: Thành tiền của chi tiết nhập được báo cáo lại, không tự tính lại theo giá thành hoặc theo tổng lệnh.
- **Chú thích**: Ý nghĩa, phạm vi và cách kiểm tra: Diễn giải riêng của dòng nhập, khác Lý do nhập chung của phiếu.
- **Người tạo / Thời gian tạo**: Ý nghĩa, phạm vi và cách kiểm tra: Người lập và thời điểm tạo phiếu nhập; không phải Ngày phát sinh được chọn lọc.
- **Ngày yêu cầu**: Ý nghĩa, phạm vi và cách kiểm tra: Ngày sản xuất của lệnh gốc liên kết, có thể ngoài khoảng nhập đang chọn.
- **Mã phiếu y/c**: Ý nghĩa, phạm vi và cách kiểm tra: Mã lệnh sản xuất liên kết phiếu nhập để truy nguồn; không phải mã yêu cầu gia công của quy trình ván.

**Cách tính / ý nghĩa số liệu:**

Mỗi dòng phản ánh chi tiết phiếu nhập thành phẩm giấy/keo trong khoảng ngày nhập. Số lượng là lượng thực nhận; Đơn giá và Chi phí lấy theo dòng nhập đã lưu. Báo cáo không tính lại giá hay giá thành.

Ví dụ phạm vi ngày minh họa, không phải kiểm tra thực tế ERP: lệnh lập ngày 31/10, phiếu nhập ngày 01/11. Chọn kỳ nhập tháng 11 để tìm phiếu ở báo cáo này; muốn xem lệnh cùng tiến độ thì mở [TỔNG QUAN LỆNH SẢN XUẤT GIẤY](/bai-viet/2026-11-07-sx-c06-0-tong-quan-lenh-san-xuat-giay/) theo kỳ lệnh tháng 10. Hai báo cáo khác kỳ không tự chứng minh thiếu lệnh hoặc thiếu phiếu nhập.

Ngày yêu cầu và Mã phiếu y/c truy lệnh nguồn; không dùng ngày lệnh thay cho khoảng ngày lọc nhập. Khi cộng lượng, tách các đơn vị và tránh đếm lặp mã phiếu có nhiều dòng.

## 7. Kiểm tra sau khi thực hiện

Có số thực nhập theo từng phiếu/dòng, thông tin lô và lệnh nguồn để giải trình. Xem báo cáo không làm phát sinh phiếu nhận hoặc thay giá/chi phí.

## 8. Những điều cần lưu ý

⚠️ Nhập thành phẩm giấy/keo là nguồn khác nhập gia công ván. Chi phí ở báo cáo này theo dòng nhập, không thay giá thành kết chuyển. Phải tách đơn vị khi cộng lượng giấy và keo.

## 9. Vướng mắc thường gặp

Các tình huống đối chiếu:

- **Có nhập nhưng lệnh không nằm cùng kỳ lọc**: bình thường nếu ngày lệnh khác ngày nhập; báo cáo chọn ngày nhập.
- **Mã lô/Hạn sử dụng trống**: kiểm tra lô gắn trên phiếu nguồn và yêu cầu quản lý lô của hàng; không điền lô giả vào báo cáo.
- **Tổng số dòng khác số phiếu**: một phiếu có nhiều chi tiết; đối chiếu mã phiếu duy nhất khi cần đếm chứng từ.

## 10. Câu hỏi thường gặp

**Mã phiếu y/c là phiếu yêu cầu gia công ván không?** Không. Ở màn này là mã lệnh sản xuất giấy/keo liên kết.

**Có sửa đơn giá tại đây như Nhập gia công chi tiết không?** Màn này tra cứu giá/chi phí đã ghi trên phiếu; cần sửa tại chứng từ nguồn theo quyền.

## 11. Công việc tiếp theo

Đối chiếu các chứng từ có chênh lệch và thống nhất với bộ phận kho/sản xuất/kế toán trước khi điều chỉnh.

## 12. Bài hướng dẫn liên quan

- [LẬP NHẬP THÀNH PHẨM](/bai-viet/2026-11-07-sx-a02-1-lap-nhap-thanh-pham/) — phiếu nhập thành phẩm giấy/keo
- [TỔNG QUAN LỆNH SẢN XUẤT GIẤY](/bai-viet/2026-11-07-sx-c06-0-tong-quan-lenh-san-xuat-giay/) — tiến độ lệnh nguồn
- [TỔNG QUAN TIÊU HAO NL - THÀNH PHẨM](/bai-viet/2026-11-07-sx-c08-0-tong-quan-tieu-hao-nl-thanh-pham/) — đối chiếu nguyên liệu–thành phẩm

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
