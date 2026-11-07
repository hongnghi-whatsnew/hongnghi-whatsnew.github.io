---
title: "TỔNG QUAN MODULE SẢN XUẤT VÀ THỨ TỰ SỬ DỤNG"
date: "2026-11-07"
summary: "Thao tác đăng nhập, đăng xuất, đổi mật khẩu và sử dụng ERP cơ bản được hướng dẫn trong Sổ tay Hướng dẫn chung (HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU đến HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM)."
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

Thao tác đăng nhập, đăng xuất, đổi mật khẩu và sử dụng ERP cơ bản được hướng dẫn trong **Sổ tay Hướng dẫn chung ([HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/) đến [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/))**. Đọc các bài GEN liên quan trước; sổ tay này hướng dẫn nghiệp vụ của phân hệ.

Sổ tay gồm hai quy trình: giấy/keo (lệnh sản xuất, vật tư, nhập thành phẩm, hao hụt) và ván (xuất gia công, yêu cầu, nhập kết quả). Các báo cáo giúp đối chiếu nhu cầu, tiến độ, lỗi và tiêu hao. Thao tác chung: [HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/)–[LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/), [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/), [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Mở đúng tên miền của chi nhánh và dùng tài khoản được cấp riêng; dữ liệu chi nhánh được nạp từ đầu, không có bước chuyển chi nhánh trong phiên. Xác định loại sản xuất, kho nguồn/đích, đơn vị gia công và người chịu trách nhiệm. Chuẩn bị danh mục hàng, định mức, đơn vị, bảng giá và tồn/lô phù hợp. Không dùng quy trình ván thay cho giấy/keo.

## 2. Mở chức năng

**Sản xuất giấy / Sản xuất ván / Thống kê sản xuất**

## 3. Nhận biết màn hình

![Hai nhóm Sản xuất giấy và Sản xuất ván, với các chức năng riêng. Gia Phúc/dev, 26/10/2026; tài khoản quản trị. Menu của người dùng tùy quyền được cấp.](/posts/2026-11-07-sx-00-tong-quan-module-san-xuat-va-thu-tu-su-dung/ui-20261026-menu-sx-00-paper.png)

![Nhóm Thống kê sản xuất, gồm tám màn báo cáo. Gia Phúc/dev, 26/10/2026; tài khoản quản trị. Menu của người dùng tùy quyền được cấp.](/posts/2026-11-07-sx-00-tong-quan-module-san-xuat-va-thu-tu-su-dung/ui-20261026-menu-sx-00-reports.png)

- **[TỔNG QUAN LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-0-tong-quan-lenh-san-xuat/)**: Màn theo thứ tự menu: Sản xuất giấy → Lệnh sản xuất
- **[TỔNG QUAN NHẬP THÀNH PHẨM](/bai-viet/2026-11-07-sx-a02-0-tong-quan-nhap-thanh-pham/)**: Màn theo thứ tự menu: Sản xuất giấy → Nhập thành phẩm
- **[TỔNG QUAN NHẬP VẬT TƯ](/bai-viet/2026-11-07-sx-a03-0-tong-quan-nhap-vat-tu/)**: Màn theo thứ tự menu: Sản xuất giấy → Nhập vật tư
- **[TỔNG QUAN XUẤT VẬT TƯ](/bai-viet/2026-11-07-sx-a04-0-tong-quan-xuat-vat-tu/)**: Màn theo thứ tự menu: Sản xuất giấy → Xuất vật tư
- **[TỔNG QUAN PHIẾU XUẤT HAO HỤT](/bai-viet/2026-11-07-sx-a05-0-tong-quan-phieu-xuat-hao-hut/)**: Màn theo thứ tự menu: Sản xuất giấy → Phiếu xuất hao hụt
- **[TỔNG QUAN PHIẾU XUẤT GIA CÔNG](/bai-viet/2026-11-07-sx-b01-0-tong-quan-phieu-xuat-gia-cong/)**: Màn theo thứ tự menu: Sản xuất ván → Phiếu xuất gia công
- **[TỔNG QUAN PHIẾU YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b02-0-tong-quan-phieu-yeu-cau-gia-cong/)**: Màn theo thứ tự menu: Sản xuất ván → Phiếu yêu cầu gia công
- **[TỔNG QUAN PHIẾU NHẬP THÀNH PHẨM](/bai-viet/2026-11-07-sx-b03-0-tong-quan-phieu-nhap-thanh-pham/)**: Màn theo thứ tự menu: Sản xuất ván → Phiếu nhập thành phẩm
- **[TỔNG QUAN NHU CẦU NGUYÊN LIỆU CẦN](/bai-viet/2026-11-07-sx-c01-0-tong-quan-nhu-cau-nguyen-lieu-can/)**: Màn theo thứ tự menu: Thống kê sản xuất → Nhu cầu nguyên liệu cần
- **[TỔNG QUAN NHẬP GIA CÔNG CHI TIẾT](/bai-viet/2026-11-07-sx-c02-0-tong-quan-nhap-gia-cong-chi-tiet/)**: Màn theo thứ tự menu: Thống kê sản xuất → Nhập gia công chi tiết
- **[TỔNG QUAN Y/C GIA CÔNG CHI TIẾT](/bai-viet/2026-11-07-sx-c03-0-tong-quan-y-c-gia-cong-chi-tiet/)**: Màn theo thứ tự menu: Thống kê sản xuất → Y/c gia công chi tiết
- **[TỔNG QUAN TỶ LỆ HÀNG LỖI](/bai-viet/2026-11-07-sx-c04-0-tong-quan-ty-le-hang-loi/)**: Màn theo thứ tự menu: Thống kê sản xuất → Tỷ lệ hàng lỗi
- **[TỔNG QUAN BIỂU ĐỒ SẢN LƯỢNG](/bai-viet/2026-11-07-sx-c05-0-tong-quan-bieu-do-san-luong/)**: Màn theo thứ tự menu: Thống kê sản xuất → Biểu đồ sản lượng
- **[TỔNG QUAN LỆNH SẢN XUẤT GIẤY](/bai-viet/2026-11-07-sx-c06-0-tong-quan-lenh-san-xuat-giay/)**: Màn theo thứ tự menu: Thống kê sản xuất → Lệnh sản xuất giấy
- **[TỔNG QUAN NHẬP THÀNH PHẨM GIẤY](/bai-viet/2026-11-07-sx-c07-0-tong-quan-nhap-thanh-pham-giay/)**: Màn theo thứ tự menu: Thống kê sản xuất → Nhập thành phẩm giấy
- **[TỔNG QUAN TIÊU HAO NL - THÀNH PHẨM](/bai-viet/2026-11-07-sx-c08-0-tong-quan-tieu-hao-nl-thanh-pham/)**: Màn theo thứ tự menu: Thống kê sản xuất → Tiêu hao NL - thành phẩm

## 4. Trình tự công việc

```text
Danh mục, kho, định mức và giá
      ↓
Giấy hoặc keo → Lệnh sản xuất → Vật tư → Nhập thành phẩm
      ↓
Ván → Xuất gia công → Yêu cầu gia công → Nhập thành phẩm
      ↓
Đối chiếu tiến độ, lỗi, hao hụt và tiêu hao
```

## 5. Thực hiện trên phần mềm

1. Với giấy/keo: đọc [TỔNG QUAN LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-0-tong-quan-lenh-san-xuat/) và [LẬP LỆNH SẢN XUẤT GIẤY HOẶC KEO](/bai-viet/2026-11-07-sx-a01-1-lap-lenh-san-xuat-giay-hoac-keo/), đối chiếu định mức và nguyên liệu. Theo dõi cấp vật tư ở SX-A04, nhận thành phẩm tại SX-A02 và vật tư thực nhận lại tại SX-A03 khi lệnh đủ điều kiện; thứ tự menu không phải thứ tự giao nhận.
2. Khi dừng phần lệnh chưa thực hiện, đọc [TẤT TOÁN LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-2-tat-toan-lenh-san-xuat/); hao hụt thực tế dùng [LẬP PHIẾU XUẤT HAO HỤT](/bai-viet/2026-11-07-sx-a05-1-lap-phieu-xuat-hao-hut/), có xuất kho giảm tồn.
3. Với ván: theo dõi hàng chuyển đi ở SX-B01, yêu cầu và đơn hàng liên quan ở SX-B02, nhận hàng đạt/lỗi ở SX-B03. Thứ tự xuất vật tư và lập yêu cầu phụ thuộc giao nhận thực tế, không bỏ qua kiểm tra kho.
4. Nếu dùng API, đọc [ĐỒNG BỘ PHIẾU YÊU CẦU GIA CÔNG QUA API](/bai-viet/2026-11-07-sx-b02-3-dong-bo-phieu-yeu-cau-gia-cong-qua-api/) và [NHẬN KẾT QUẢ GIA CÔNG NGOÀI QUA API](/bai-viet/2026-11-07-sx-b03-2-nhan-ket-qua-gia-cong-ngoai-qua-api/); phải xác định chiều gửi/nhận và tình trạng chứng từ gốc.
5. Dùng SX-C01 để xem nhu cầu; SX-C02–SX-C07 để đối chiếu tiến độ, lỗi/sản lượng; SX-C08 cho tiêu hao giấy/keo.

## 6. Giải thích các thông tin trên màn hình

- **Yêu cầu/lệnh**: Cách đọc: Lượng dự kiến phải thực hiện
- **Tất toán**: Cách đọc: Phần không tiếp tục thực hiện, làm giảm lượng còn chờ
- **Số đã nhập**: Cách đọc: Lượng đã ghi nhận bằng các chứng từ nhập liên kết; phân biệt với tên trạng thái Đã nhập
- **Trạng thái Đã nhập**: Cách đọc: Tiến độ có tính phần tất toán; không chứng minh đã nhận đủ yêu cầu ban đầu
- **Số còn chờ nhập**: Cách đọc: Phần còn lại sau tất toán và thực nhập; kiểm tra quy đổi, không nhầm với tên trạng thái Chưa nhập
- **Kho gia công**: Cách đọc: Nơi theo dõi hàng/nguyên liệu trong quá trình thực hiện
- **Đơn giá/giá thành**: Cách đọc: Giá gia công và giá thành kết chuyển có ý nghĩa khác nhau
- **Hao hụt**: Cách đọc: Phiếu ghi xuất kho giảm tồn và phần giá trị mất đi
- **Tiêu hao**: Cách đọc: Báo cáo SX-C08 hiển thị chiều thành phẩm/đơn vị nguyên liệu

## 7. Kiểm tra sau khi thực hiện

Người đọc chọn đúng bài, đúng quy trình và biết số liệu cần đối chiếu trước/sau từng nghiệp vụ.

## 8. Những điều cần lưu ý

⚠️ Bảng giá sản xuất nằm nhóm Bảng báo giá trên menu hiện tại, không thuộc ba màn Sản xuất ván. Tham khảo sổ Thiết lập cho bảng giá.

⚠️ Phân biệt Sản xuất giấy → Nhập thành phẩm với Sản xuất ván → Phiếu nhập thành phẩm. Báo cáo SX-C02 cho phép sửa giá khi có quyền; đây là thao tác ghi dữ liệu.

Một số bài đã có ảnh và kết quả thử từng nhánh ghi rõ tại bài; chưa đủ để kết luận toàn bộ quy trình đã kiểm chứng. Tiếp tục hoàn thiện nội dung trước, bổ sung ảnh sau; quyền, dữ liệu trước/sau và nghiệp vụ còn cần đối chiếu trước phát hành.

## 9. Vướng mắc thường gặp

Không thấy chứng từ: kiểm tra đang mở đúng tên miền chi nhánh, kỳ lọc, loại giấy/keo/tại kho/ngoài và nguồn của phiếu. Xem lỗi riêng ở từng bài.

### Bảng giá sản xuất có thuộc sổ này không?

Menu hiện đặt ở Bảng báo giá; sổ này dẫn sang Thiết lập và mô tả cách sử dụng giá trong nghiệp vụ, không cấp thêm mã màn ngoài phạm vi.

## 11. Công việc tiếp theo

Đọc bài tổng quan.0 của màn cần dùng, tiếp đến bài chức năng riêng. Chỉ dùng chứng từ nguồn đã được kiểm tra để chuyển sang bước tiếp theo.

## 12. Bài hướng dẫn liên quan

SX-A01–SX-A05; SX-B01–SX-B03; SX-C01–SX-C08. Danh mục liên quan: kho, đơn vị gia công, nguyên liệu, định mức, bảng giá sản xuất trong sổ Thiết lập.

Bắt đầu theo nhu cầu:

- [TỔNG QUAN LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-0-tong-quan-lenh-san-xuat/)
- [TỔNG QUAN NHẬP THÀNH PHẨM](/bai-viet/2026-11-07-sx-a02-0-tong-quan-nhap-thanh-pham/)
- [TỔNG QUAN NHẬP VẬT TƯ](/bai-viet/2026-11-07-sx-a03-0-tong-quan-nhap-vat-tu/)
- [TỔNG QUAN XUẤT VẬT TƯ](/bai-viet/2026-11-07-sx-a04-0-tong-quan-xuat-vat-tu/)
- [TỔNG QUAN PHIẾU XUẤT HAO HỤT](/bai-viet/2026-11-07-sx-a05-0-tong-quan-phieu-xuat-hao-hut/)
- [TỔNG QUAN PHIẾU XUẤT GIA CÔNG](/bai-viet/2026-11-07-sx-b01-0-tong-quan-phieu-xuat-gia-cong/)
- [TỔNG QUAN PHIẾU YÊU CẦU GIA CÔNG](/bai-viet/2026-11-07-sx-b02-0-tong-quan-phieu-yeu-cau-gia-cong/)
- [TỔNG QUAN PHIẾU NHẬP THÀNH PHẨM](/bai-viet/2026-11-07-sx-b03-0-tong-quan-phieu-nhap-thanh-pham/)
- [TỔNG QUAN NHU CẦU NGUYÊN LIỆU CẦN](/bai-viet/2026-11-07-sx-c01-0-tong-quan-nhu-cau-nguyen-lieu-can/)
- [TỔNG QUAN TIÊU HAO NL - THÀNH PHẨM](/bai-viet/2026-11-07-sx-c08-0-tong-quan-tieu-hao-nl-thanh-pham/)
