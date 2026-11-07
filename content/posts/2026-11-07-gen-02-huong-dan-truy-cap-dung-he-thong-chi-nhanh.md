---
title: "HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH"
date: "2026-11-07"
summary: "Mỗi chi nhánh sử dụng một địa chỉ web riêng và dữ liệu riêng."
module: "Thao tác chung"
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

Mỗi chi nhánh sử dụng **một địa chỉ web riêng và dữ liệu riêng**. Khi mở đúng tên miền rồi đăng nhập, hệ thống nạp dữ liệu của chi nhánh đó ngay từ đầu. **Không có thao tác chuyển chi nhánh trong hệ thống chính thức.**

Tài khoản của từng chi nhánh được cấp riêng biệt, độc lập với nhau. Bài này giúp người dùng chọn đúng địa chỉ và nhận biết đúng chi nhánh trước khi làm việc.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Đã nhận địa chỉ web chính xác của chi nhánh từ admin.
- Có tài khoản và mật khẩu được cấp cho chính chi nhánh cần làm việc.
- Đã xác định chi nhánh của công việc hoặc chứng từ cần xử lý.

## 2. Mở chức năng

**Địa chỉ web chi nhánh do admin cung cấp → Trang đăng nhập → ERP của chi nhánh đó.**

## 3. Nhận biết màn hình

Sau đăng nhập, đối chiếu **tên miền trên thanh địa chỉ**, **tên chi nhánh ở đầu menu bên trái** và **tên chi nhánh ở đầu dòng đường dẫn**. Ảnh minh họa bên dưới là hệ thống Hồng Nghi tại `mdfhongnghi.com.vn`; nhãn phiên bản hiển thị là **v5.0.1**.

![Hình 1: Nhận biết Hồng Nghi bằng tên miền, tên chi nhánh và dòng đường dẫn](/posts/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/hinh-01-nhan-biet-chi-nhanh.png)

Trang đăng nhập hiển thị chi nhánh tương ứng tên miền. Trên hệ thống chính thức, người dùng không chọn đổi chi nhánh; dòng **chỉ thay đổi được ở môi trường dev** là ghi chú trên giao diện, không phải thao tác sử dụng của bài này.

![Hình 2: Trang đăng nhập Hồng Nghi theo đúng tên miền, nhãn v5.0.1 và prod](/posts/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/hinh-02-dang-nhap-dung-ten-mien.png)

## 4. Trình tự công việc

```text
Xác định chi nhánh cần làm việc
      ↓
Mở địa chỉ web riêng do admin cung cấp
      ↓
Kiểm tra tên miền và chi nhánh trên trang đăng nhập
      ↓
Đăng nhập bằng tài khoản riêng của chi nhánh đó
      ↓
Kiểm tra tên chi nhánh trong ERP → Làm việc
```

### 8.1. Vào đúng hệ thống chi nhánh

1. Xác định chi nhánh cần xử lý công việc.
2. Mở địa chỉ web do admin cung cấp cho chi nhánh đó. Kiểm tra tên miền trên thanh địa chỉ; không chọn đổi chi nhánh trong màn hình ERP.
3. Đối chiếu tên **Chi nhánh** trên trang đăng nhập (Hình 2).
4. Đăng nhập bằng tài khoản được cấp riêng tại chi nhánh đó. Thao tác đăng nhập và xử lý mật khẩu xem [HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/).
5. Kiểm tra tên chi nhánh ở đầu menu trái và dòng đường dẫn trước khi xử lý chứng từ (Hình 1).

### 8.2. Khi cần làm việc tại chi nhánh khác

1. Lưu hoặc đóng công việc đang nhập dở; đăng xuất nếu kết thúc phiên làm việc hiện tại theo [HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/).
2. Mở **địa chỉ web riêng** của chi nhánh cần làm việc.
3. Dùng **tài khoản riêng của chi nhánh đó** để đăng nhập và kiểm tra lại tên đơn vị.

Đây là truy cập một hệ thống khác. Không có nút chuyển chi nhánh trong phiên ERP chính thức đang dùng.

## 6. Giải thích các thông tin trên màn hình

- **Tên miền / địa chỉ web**: Cách sử dụng: Xác định hệ thống chi nhánh được truy cập
- **Chi nhánh trên trang đăng nhập**: Cách sử dụng: Đơn vị ứng với tên miền; không chọn đổi trên hệ thống chính thức
- **Tên chi nhánh trong ERP**: Cách sử dụng: Kiểm tra sau đăng nhập, trước khi xử lý dữ liệu
- **Tài khoản**: Cách sử dụng: Được cấp riêng cho từng chi nhánh; các tài khoản giữa chi nhánh độc lập
- **Phiên bản phần mềm**: Cách sử dụng: Nhãn phiên bản hiển thị; ảnh Hồng Nghi người dùng cung cấp thể hiện v5.0.1

## 7. Kiểm tra sau khi thực hiện

Người dùng truy cập đúng hệ thống, đăng nhập bằng tài khoản của chi nhánh đó và làm việc trên dữ liệu được nạp ngay từ đầu. Thông tin công ty dùng cho chứng từ được nạp theo hệ thống đã đăng nhập, không qua bước chuyển chi nhánh.

## 8. Những điều cần lưu ý

⚠️ Mỗi chi nhánh có địa chỉ web và dữ liệu riêng. Mở nhầm tên miền sẽ vào nhầm hệ thống; không tìm nút chuyển chi nhánh để khắc phục.

⚠️ Tài khoản được cấp riêng từng chi nhánh. Không mặc định tài khoản ở chi nhánh này có thể dùng cho chi nhánh khác.

⚠️ Khi làm việc ở nhiều đơn vị, kiểm tra tên miền và tên chi nhánh ở từng cửa sổ trước khi ghi dữ liệu hoặc in chứng từ.

### Không thấy nút chuyển chi nhánh

Đây là hành vi bình thường trên hệ thống chính thức. Mở đúng địa chỉ của chi nhánh cần làm việc và đăng nhập bằng tài khoản tương ứng.

### Tên chi nhánh không đúng đơn vị cần làm việc

Kiểm tra lại tên miền. Mở địa chỉ do admin cung cấp cho đúng đơn vị; nếu chưa biết địa chỉ, liên hệ admin.

### Tài khoản ở chi nhánh khác không đăng nhập được

Các tài khoản được cấp riêng và độc lập. Kiểm tra lại tài khoản được cấp cho hệ thống đang mở; liên hệ admin nếu chưa có hoặc quên mật khẩu. Xem [HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/).

Lỗi kết nối hoặc phiên làm việc khác: [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Có chuyển chi nhánh trực tiếp trong ERP được không?**

Không. Hệ thống chính thức đã ẩn phần chọn chi nhánh. Muốn làm ở đơn vị khác phải mở địa chỉ riêng và dùng tài khoản riêng của đơn vị đó.

**Các chi nhánh có dùng chung tài khoản hoặc dữ liệu không?**

Mỗi chi nhánh có dữ liệu riêng và tài khoản được cấp riêng, độc lập với nhau theo cấu hình vận hành đã xác nhận.

**Có cần đổi chi nhánh để nạp thông tin công ty khi in không?**

Không có bước chuyển chi nhánh. Thông tin được nạp ngay từ khi vào hệ thống tương ứng tên miền.

## 11. Công việc tiếp theo

Làm quen bố cục và tìm chức năng theo [HƯỚNG DẪN BỐ CỤC MÀN HÌNH VÀ TÌM CHỨC NĂNG](/bai-viet/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/). Trước khi nhập liệu hoặc in, kiểm tra đúng đơn vị và chứng từ cần xử lý.

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/) — Đăng nhập, đăng xuất, mật khẩu và hồ sơ cá nhân.
- [HƯỚNG DẪN BỐ CỤC MÀN HÌNH VÀ TÌM CHỨC NĂNG](/bai-viet/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/) — Bố cục màn hình và tìm chức năng.
- [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/) — In chứng từ.
