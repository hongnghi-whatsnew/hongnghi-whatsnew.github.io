---
title: "HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU ĐẶT HÀNG TỪ EXCEL"
date: 2026-11-07
summary: "Khi có nhiều mặt hàng cần đặt, bạn có thể chuẩn bị danh sách trong Excel rồi tải vào phiếu, thay vì chọn từng dòng trên phần mềm."
module: "Mua hàng"
category: huong-dan
version: "v5.0.0"
isNew: true
scope: "Người dùng được cấp quyền chức năng"
department: ""
mediaType: none
tags: []
pinImportant: false
pinned: false
draft: true
---

## Khi nào nên nhập từ Excel?

Khi có nhiều mặt hàng cần đặt, bạn có thể chuẩn bị danh sách trong Excel rồi tải vào phiếu, thay vì chọn từng dòng trên phần mềm. Chức năng này chỉ nhập **chi tiết hàng hóa**; nhà cung cấp, ngày đặt và các thông tin chung vẫn nhập trên phiếu.

> Tải lên từ Excel sẽ **thay toàn bộ các dòng đang có** trong bảng chi tiết. Nếu đã nhập tay một số hàng, hãy đưa các dòng đó vào file trước khi tải lên.

## 1. Mở chức năng

Vào **Mua hàng → Phiếu đặt hàng → Thêm mới**. Chọn nhà cung cấp và nhập thông tin chung. Nếu đang sửa một phiếu, chỉ thực hiện khi phiếu còn được phép cập nhật.

![Giao diện hướng dẫn nhập chi tiết phiếu đặt hàng từ excel](/posts/2026-11-07-huong-dan-nhap-phieu-dat-hang-tu-excel/HINH_01_nut-tai-len-excel.png)

### Bước 1: Tải file mẫu

Bấm **Tải file mẫu** để tải **[TEMPLATE IMPORT] DHNCC.xlsx**. Mở file, giữ nguyên dòng tiêu đề và thay dữ liệu ví dụ bằng hàng cần đặt, bắt đầu từ dòng 2.

### Bước 2: Điền các cột

- **code**: Nội dung cần nhập: Bắt buộc. Mã hàng ERP hoặc mã hàng nhà cung cấp đã khai trong danh mục.
- **dvt**: Nội dung cần nhập: Tên đơn vị phụ nếu cần quy đổi; để trống nếu dùng đơn vị chính.
- **sl**: Nội dung cần nhập: Bắt buộc. Số lượng đặt.
- **dongia**: Nội dung cần nhập: Đơn giá mua. Kiểm tra phù hợp với đơn vị tính sau quy đổi.
- **chietkhau**: Nội dung cần nhập: Chiết khấu, nhập dưới dạng phần trăm của Excel.
- **thuevat**: Nội dung cần nhập: Thuế VAT, nhập dưới dạng phần trăm của Excel.
- **chuthich**: Nội dung cần nhập: Ghi chú riêng của dòng hàng, nếu có.

Phần mềm chỉ đọc **sheet đầu tiên**, bỏ các dòng hoàn toàn trống. Dòng trùng mã được xử lý riêng, không tự gộp. Ô số để trống được đọc thành **0**.

Với chiết khấu hoặc VAT 8%, nhập giá trị số **0.08** rồi định dạng phần trăm để hiển thị **8%**, hoặc nhập trực tiếp **8%** vào ô số của Excel. Tránh nhập số **8** hoặc lưu tỷ lệ dưới dạng văn bản vì có thể bị đọc thành **800%**.

### Bước 3: Kiểm tra đơn vị phụ

Nếu dùng đơn vị phụ, tên tại **dvt** phải khớp chính xác danh mục, kể cả chữ hoa, chữ thường và khoảng trắng. Khi khớp, phần mềm quy đổi số lượng sang đơn vị chính. Nếu để trống hoặc không khớp, số lượng giữ nguyên.

**Đơn giá không tự quy đổi theo số lượng.** Hãy kiểm tra lại cả đơn vị, số lượng và đơn giá trước khi lưu phiếu.

## 3. Tải file và kiểm tra các dòng hàng

Bấm **Tải lên từ Excel**, chọn file đã chuẩn bị và chờ dữ liệu hiện trong bảng.

Đối chiếu số dòng, mã hàng, số lượng, đơn giá, chiết khấu, VAT và thành tiền. Nếu mã hàng nhà cung cấp bị khai trùng ở nhiều mặt hàng, cần kiểm tra kỹ số dòng và mặt hàng được nạp.

Dòng có **Hàng hóa** trống và chú thích **Hàng hoá không tồn tại. Vui lòng kiểm tra lại!** cần được chọn lại đúng mặt hàng hoặc xóa khỏi bảng trước khi lưu.

## 4. Lưu phiếu

Sau khi đối chiếu xong, bấm **Lưu lại**. Việc tải file chỉ đưa dữ liệu vào bảng; **phiếu chưa được lưu cho đến khi bạn bấm Lưu lại**.

Khi lưu thành công, tìm lại phiếu trong danh sách và kiểm tra nội dung. Không sử dụng nhập Excel trong cửa sổ **TẤT TOÁN** vì thao tác này thay cả bảng chi tiết.

## 5. Vướng mắc thường gặp

**Báo Không có sản phẩm:** Kiểm tra file có dữ liệu ở sheet đầu, dòng tiêu đề đúng mẫu và mã hàng có trong danh mục.

**Một số dòng không tìm thấy hàng:** Kiểm tra cột **code**; chọn lại mặt hàng hoặc sửa file rồi tải lại. Nhớ rằng tải lại sẽ thay bảng đang có.

**VAT hoặc chiết khấu thành 800%:** Sửa ô Excel về giá trị số phần trăm đúng, tải lại và đối chiếu tỷ lệ trước khi lưu.

**Có nhập nhà cung cấp và ngày đặt từ file được không?** Không. File chỉ nhập chi tiết hàng hóa; thông tin chung nhập tại cửa sổ phiếu đặt hàng.
