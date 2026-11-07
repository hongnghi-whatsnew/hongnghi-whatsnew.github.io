---
title: "HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU"
date: "2026-11-07"
summary: "Người dùng đăng nhập bằng tài khoản nội bộ và mật khẩu do admin cấp."
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

Người dùng đăng nhập bằng tài khoản nội bộ và mật khẩu do admin cấp. Khi dùng mật khẩu do admin cấp hoặc cấp lại, người dùng phải đặt mật khẩu riêng trước khi vào ERP. Bài này hướng dẫn cả việc tự đổi mật khẩu, cập nhật thông tin cá nhân và đăng xuất.

Khi quên mật khẩu, **liên hệ admin để cấp lại**, sau đó thực hiện quy trình đổi mật khẩu bắt buộc như lần đầu.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có địa chỉ ERP, chi nhánh làm việc và tài khoản do admin cung cấp.
- Khi đăng nhập lần đầu hoặc sau khi quên mật khẩu, đã nhận mật khẩu do admin cấp.
- Khi tự đổi mật khẩu, biết mật khẩu hiện tại và lưu công việc dở ở các phiên khác trước khi thực hiện.
- Khi thay ảnh đại diện, chuẩn bị tệp ảnh phù hợp trên máy tính.

## 2. Mở chức năng

## 3. Nhận biết màn hình

Trên hệ thống chính thức, nhập **Tài khoản**, **Mật khẩu** rồi bấm **Đăng nhập**. Chi nhánh được nạp theo địa chỉ truy cập; phần chọn chi nhánh không dùng trong quy trình hệ thống chính thức. Kiểm tra tên miền và tên đơn vị trước khi nhập tài khoản. Ảnh dưới do người dùng cung cấp tại Hồng Nghi trên hệ thống chính thức, nhãn v5.0.1/prod. Chi nhánh được xác định theo tên miền và không chọn đổi; tài khoản được cấp riêng từng chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).

![Hình 1: Trang đăng nhập Hồng Nghi trên hệ thống chính thức](/posts/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/hinh-01-trang-dang-nhap.png)

Menu người dùng nằm ở cuối menu bên trái. Chọn **Hồ sơ** để mở thông tin cá nhân hoặc **Đăng xuất** để kết thúc phiên trên trình duyệt.

![Hình 2: Menu người dùng có Hồ sơ và Đăng xuất](/posts/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/hinh-02-menu-nguoi-dung.png)

## 4. Trình tự công việc

```text
Nhận tài khoản và mật khẩu từ admin → Đăng nhập
      ├── Sai thông tin → Kiểm tra và nhập lại
      └── Mật khẩu do admin cấp → Bắt buộc đổi mật khẩu
                   ↓
       Đủ 5 tiêu chí + xác nhận khớp → Đồng ý
                   ↓
       Về trang đăng nhập → Đăng nhập bằng mật khẩu mới
                   ↓
       Làm việc → Hồ sơ / tự đổi mật khẩu / Đăng xuất

Quên mật khẩu → Liên hệ admin cấp lại → Đổi bắt buộc như lần đầu
```

### 8.1. Đăng nhập

1. Mở đúng địa chỉ ERP và kiểm tra **Chi nhánh**.
2. Nhập **Tài khoản** và **Mật khẩu**, bấm **Đăng nhập**.
3. Nếu thông tin đúng và không thuộc trường hợp buộc đổi mật khẩu, hệ thống **vào thẳng ERP, không hiện thông báo đăng nhập thành công**.
4. Nếu thông tin sai, hệ thống hiện **Đăng nhập không thành công** với nội dung **Tài khoản hoặc Mật khẩu chưa đúng**; đồng thời có thông báo **CẢNH BÁO** ở phía trên. Kiểm tra lại thông tin rồi đăng nhập lại.

![Hình 3: Thông báo khi tài khoản hoặc mật khẩu chưa đúng](/posts/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/hinh-03-dang-nhap-khong-thanh-cong.png)

### 8.2. Đổi mật khẩu bắt buộc sau khi admin cấp mật khẩu

Khi đăng nhập bằng mật khẩu do admin cấp hoặc cấp lại, hộp **Bắt buộc đổi mật khẩu** xuất hiện. Cảnh báo cho biết mật khẩu do người quản trị đặt không thể dùng tiếp để vào hệ thống; cần đặt mật khẩu mới.

![Hình 4: Hộp Bắt buộc đổi mật khẩu](/posts/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/hinh-04-bat-buoc-doi-mat-khau.png)

1. Tại **Nhập mật khẩu hiện tại**, nhập mật khẩu admin vừa cấp.
2. Nhập mật khẩu mới, bảo đảm cả năm tiêu chí bên dưới đều chuyển **màu xanh**: ít nhất 8 ký tự, có chữ hoa, chữ thường, số và ký tự đặc biệt.
3. Tại **Nhập lại mật khẩu**, nhập đúng mật khẩu mới vừa đặt. Mật khẩu mới phải khác mật khẩu hiện tại.
4. Bấm **Đồng ý** khi đáp ứng đủ yêu cầu.
5. Sau khi xác nhận đổi thành công, hệ thống trở về trang đăng nhập. Đăng nhập bằng **mật khẩu mới** để dùng ERP bình thường.

![Hình 4b: Năm tiêu chí mật khẩu đều đạt, hiển thị màu xanh](/posts/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/hinh-04b-mat-khau-dat-tieu-chi.png)

Không có thao tác bỏ qua yêu cầu đổi mật khẩu để vào ERP. Ảnh lịch sử còn biểu tượng **X**; không dùng biểu tượng trên ảnh làm hướng dẫn bỏ qua bước đổi bắt buộc.

### 8.3. Tự đổi mật khẩu khi đang làm việc

1. Bấm tên người dùng ở cuối menu trái → **Hồ sơ**.
2. Trong **HỒ SƠ CÁ NHÂN**, bấm **Đổi mật khẩu?**.

![Hình 5: Hồ sơ cá nhân và liên kết Đổi mật khẩu?](/posts/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/hinh-05-ho-so-ca-nhan.png)

3. Trong **THAY ĐỔI MẬT KHẨU**, nhập mật khẩu hiện tại, mật khẩu mới và nhập lại mật khẩu. Áp dụng đủ năm tiêu chí như phần “Thực hiện trên phần mềm”.2; mật khẩu mới phải khác mật khẩu hiện tại.
4. Bấm **Đồng ý** để đổi; bấm **Đóng** nếu không tiếp tục.

![Hình 6: Hộp THAY ĐỔI MẬT KHẨU](/posts/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/hinh-06-thay-doi-mat-khau.png)

5. Nếu mật khẩu mới trùng mật khẩu hiện tại, hệ thống báo **Mật khẩu mới phải khác mật khẩu hiện tại**. Đặt mật khẩu khác rồi thực hiện lại.

![Hình 7: Cảnh báo khi mật khẩu mới trùng mật khẩu hiện tại](/posts/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/hinh-07-mat-khau-trung-mat-khau-cu.png)

6. Khi đổi thành công, hệ thống báo **Đã cập nhật mật khẩu mới** và hộp **Lỗi** có nội dung **Mật khẩu đã được thay đổi. Vui lòng đăng nhập lại.** Bấm **Đóng** và đăng nhập lại bằng mật khẩu mới. **Toàn bộ các phiên đang đăng nhập tài khoản này đều phải đăng nhập lại.**

![Hình 8: Đổi mật khẩu thành công và yêu cầu đăng nhập lại](/posts/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/hinh-08-doi-mat-khau-thanh-cong.png)

Người dùng có thể chủ động đổi mật khẩu; **không có yêu cầu đổi mật khẩu định kỳ theo thời gian** theo quy trình đã được người dùng xác nhận.

### 8.4. Xử lý khi quên mật khẩu

1. Liên hệ **admin** để được cấp lại mật khẩu.
2. Dùng tài khoản và mật khẩu admin vừa cấp để đăng nhập.
3. Thực hiện **Bắt buộc đổi mật khẩu** theo phần “Thực hiện trên phần mềm”.2.
4. Đăng nhập lại bằng mật khẩu mới.

Trang đăng nhập có liên kết **Quên mật khẩu?**, nhưng quy trình sử dụng đã chốt là liên hệ admin. Bài này không hướng dẫn tự khôi phục qua email.

### 8.5. Đăng xuất

Bấm tên người dùng ở cuối menu trái → **Đăng xuất** (Hình 2). Các tab ERP trên **cùng trình duyệt** cũng đăng xuất theo. Lần sử dụng tiếp theo cần đăng nhập lại.

### 8.6. Cập nhật hồ sơ cá nhân

1. Mở **Hồ sơ** từ menu người dùng.
2. Cập nhật thông tin cơ bản được phép, **Giới tính**, **Email** trên hồ sơ của mình.
3. Để thay ảnh đại diện, bấm vùng ảnh hoặc biểu tượng chỉnh sửa tương ứng, chọn tệp ảnh từ máy tính và xác nhận lựa chọn.

![Hình 9: Hộp chọn tệp ảnh đại diện từ máy tính](/posts/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/hinh-09-chon-anh-dai-dien.png)

4. Nếu muốn yêu cầu đổi mật khẩu ở lần đăng nhập kế tiếp, chọn **Buộc đổi mật khẩu lần đăng nhập tới**.
5. Bấm **Lưu lại** để lưu thông tin đã cập nhật. Kiểm tra thông tin và ảnh sau khi lưu.

## 6. Giải thích các thông tin trên màn hình

- **Chi nhánh**: Ý nghĩa / yêu cầu: Đơn vị được xác định từ tên miền; dùng tài khoản riêng do đơn vị đó cấp, không chọn chuyển trong phiên
- **Tài khoản**: Ý nghĩa / yêu cầu: Tên đăng nhập được admin cấp
- **Mật khẩu hiện tại**: Ý nghĩa / yêu cầu: Mật khẩu đang dùng hoặc mật khẩu admin vừa cấp
- **Mật khẩu mới**: Ý nghĩa / yêu cầu: Ít nhất 8 ký tự, có chữ hoa, chữ thường, số, ký tự đặc biệt; khác mật khẩu hiện tại
- **Nhập lại mật khẩu**: Ý nghĩa / yêu cầu: Phải khớp mật khẩu mới
- **Giới tính / Email**: Ý nghĩa / yêu cầu: Thông tin cơ bản trong hồ sơ cá nhân
- **Ảnh đại diện**: Ý nghĩa / yêu cầu: Ảnh được chọn từ tệp trên máy tính
- **Buộc đổi mật khẩu lần đăng nhập tới**: Ý nghĩa / yêu cầu: Yêu cầu đổi mật khẩu tại lần đăng nhập kế tiếp
- **Kích hoạt**: Ý nghĩa / yêu cầu: Trạng thái hoạt động tài khoản; không tự bỏ chọn khi cập nhật hồ sơ

## 7. Kiểm tra sau khi thực hiện

- Đăng nhập đúng: vào ERP trực tiếp, không có thông báo thành công riêng.
- Đổi mật khẩu bắt buộc: trở về trang đăng nhập, sau đó dùng mật khẩu mới để vào ERP.
- Tự đổi mật khẩu: có thông báo thành công và yêu cầu toàn bộ phiên đăng nhập lại.
- Quên mật khẩu: nhận mật khẩu từ admin rồi tự đổi trước khi sử dụng.
- Đăng xuất: các tab ERP cùng trình duyệt đăng xuất theo.
- Cập nhật hồ sơ: thông tin được lưu theo thao tác của người dùng.

## 8. Những điều cần lưu ý

⚠️ Không chia sẻ mật khẩu hoặc gửi mật khẩu cho người biên soạn tài liệu. Các ảnh minh họa chỉ thể hiện ô mật khẩu đã che.

⚠️ Năm tiêu chí chuyển xanh chưa thay thế việc kiểm tra mật khẩu xác nhận phải khớp và mật khẩu mới phải khác mật khẩu hiện tại.

⚠️ Lưu công việc dở trước khi tự đổi mật khẩu vì toàn bộ phiên sẽ phải đăng nhập lại.

⚠️ Người dùng được cập nhật thông tin cơ bản trong hồ sơ của mình theo phạm vi đã xác nhận; không tự thay trạng thái **Kích hoạt** tài khoản.

⚠️ Khi dùng máy chung, chọn **Đăng xuất** trước khi rời máy.

### “Tài khoản hoặc Mật khẩu chưa đúng”

Nguyên nhân: thông tin đăng nhập chưa đúng. Kiểm tra tài khoản, mật khẩu, chữ hoa/thường và bộ gõ. Nếu quên mật khẩu, liên hệ admin để cấp lại.

### Các tiêu chí mật khẩu chưa chuyển xanh hết

Cách xử lý: bổ sung điều kiện còn thiếu theo danh sách hiển thị; nhập lại mật khẩu xác nhận khớp mật khẩu mới.

### “Mật khẩu mới phải khác mật khẩu hiện tại”

Cách xử lý: chọn mật khẩu khác mật khẩu hiện tại, vẫn đáp ứng đủ năm tiêu chí rồi xác nhận lại.

### “Mật khẩu đã được thay đổi. Vui lòng đăng nhập lại.”

Đây là yêu cầu đăng nhập lại sau khi đổi mật khẩu, không phải thông báo đổi thất bại. Bấm **Đóng** rồi đăng nhập bằng mật khẩu mới.

Các lỗi kết nối, quyền hoặc phiên khác tham khảo [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Có cần đổi mật khẩu định kỳ theo thời gian không?**

Không có yêu cầu định kỳ theo quy trình được xác nhận. Người dùng có thể tự đổi hoặc được yêu cầu đổi khi admin cấp mật khẩu hay bật yêu cầu đổi lần đăng nhập tới.

**Quên mật khẩu có tự lấy lại qua email không?**

Quy trình hiện tại là liên hệ admin để cấp lại; sau đó tự đặt mật khẩu mới như lần đầu.

**Đổi mật khẩu có ảnh hưởng các phiên khác không?**

Có. Toàn bộ phiên đang đăng nhập tài khoản đó phải đăng nhập lại bằng mật khẩu mới.

**Đăng xuất một tab có ảnh hưởng tab khác không?**

Có, các tab ERP cùng trình duyệt đăng xuất theo.

**Có tự đổi ảnh, email hoặc giới tính được không?**

Có. Vào **Hồ sơ**, cập nhật thông tin được phép và bấm **Lưu lại**.

## 11. Công việc tiếp theo

Sau khi đăng nhập, kiểm tra chi nhánh theo [HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/) và làm quen bố cục, tìm chức năng theo [HƯỚNG DẪN BỐ CỤC MÀN HÌNH VÀ TÌM CHỨC NĂNG](/bai-viet/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/).

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/) — Truy cập và nhận biết đúng hệ thống chi nhánh.
- [HƯỚNG DẪN BỐ CỤC MÀN HÌNH VÀ TÌM CHỨC NĂNG](/bai-viet/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/) — Bố cục màn hình và tìm chức năng.
- [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/) — Lỗi thường gặp và xử lý chung.
