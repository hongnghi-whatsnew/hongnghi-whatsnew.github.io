---
title: "HƯỚNG DẪN BỐ CỤC MÀN HÌNH VÀ TÌM CHỨC NĂNG"
date: "2026-11-07"
summary: "Sau khi đăng nhập, mọi màn hình của Hồng Nghi ERP có chung một bố cục: - Menu bên trái: danh sách chức năng, chia theo nhóm."
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

Sau khi đăng nhập, mọi màn hình của Hồng Nghi ERP có chung một bố cục:

- **Menu bên trái**: danh sách chức năng, chia theo nhóm.
- **Thanh trên cùng**: đường dẫn màn đang mở, ô tìm chức năng, chuông ticket hỗ trợ, chuông thông báo, tuỳ chỉnh giao diện.
- **Vùng làm việc**: nội dung màn hình (danh sách, báo cáo…).

Bài này giúp bạn mở đúng chức năng nhanh nhất và dùng các tiện ích chung trên thanh trên cùng. Đường dẫn trong mọi bài hướng dẫn viết theo dạng **Nhóm → Mục menu → Màn hình**, ví dụ **Nghiệp vụ → Kho hàng → Phiếu nhập kho**.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Đã đăng nhập ([HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/)).

## 2. Mở chức năng

Áp dụng cho mọi màn hình sau khi đăng nhập.

## 3. Nhận biết màn hình

Bố cục gồm menu bên trái, thanh công cụ trên cùng và vùng làm việc. Ảnh tổng quan dưới đây do người dùng cung cấp trên Hồng Nghi/prod, nhãn **v5.0.1**. Các ảnh thao tác còn lại chụp trên Gia Phúc/dev; không coi đây là cùng một build.

![Hình 1: Bố cục ERP trên Hồng Nghi — menu, đường dẫn, ô tìm và vùng làm việc](/posts/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/hinh-01-bo-cuc-chung.png)

- **Tên chi nhánh và nhãn phiên bản**: Công dụng: Nhận biết hệ thống đang dùng; xem [HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)
- **Menu bên trái**: Công dụng: Mở các nhóm và màn hình được cấp quyền
- **Nút thu gọn / hiện menu**: Công dụng: Ẩn hoặc mở menu; có chế độ hiện tạm khi rê chuột
- **Menu người dùng ở cuối sidebar**: Công dụng: Hồ sơ / Đăng xuất; xem [HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/)
- **Dòng đường dẫn**: Công dụng: Cho biết nhóm và màn hình đang mở
- **Tìm chức năng, trang…**: Công dụng: Tìm tên màn hình theo quyền; phím tắt Ctrl+K
- **Chuông Thông báo**: Công dụng: Xem thông báo, mở tùy chọn và danh sách đầy đủ
- **Biểu tượng Giao diện**: Công dụng: Chọn chế độ sáng/tối, bộ màu và màu thành phần
- **Biểu tượng Ticket hỗ trợ**: Công dụng: Điểm truy cập hỗ trợ; thao tác theo sổ tay Ticket
- **Vùng làm việc**: Công dụng: Trang chủ, danh sách, biểu mẫu hoặc báo cáo đang mở

Menu thực tế thay đổi theo tài khoản được cấp quyền. Bài này không dùng danh sách menu của tài khoản quản trị làm phạm vi mặc định cho mọi người dùng.

## 4. Trình tự công việc

```text
Cần mở một chức năng
      ├── Biết tên màn hình ──► Ctrl+K → gõ vài chữ (không dấu cũng được)
      │                        → ↑ ↓ chọn → Enter
      └── Chưa rõ tên ────────► Menu bên trái → nhóm → mục menu → màn hình
                                  ↓
                     Dòng đường dẫn cho biết đang ở màn nào
```

### 8.1. Mở chức năng từ menu bên trái

1. Tìm nhóm và mục menu cần dùng.
2. Bấm mục menu để mở các màn hình con; chọn tên màn hình cần làm việc.
3. Kiểm tra tên màn hình và dòng đường dẫn sau khi mở.

Bạn chỉ thấy và tìm được chức năng khi có quyền phù hợp. Không thấy mục cần dùng thì liên hệ admin kiểm tra quyền.

### 8.2. Tìm chức năng bằng Ctrl+K

1. Nhấn **Ctrl+K** hoặc bấm ô **Tìm chức năng, trang…**.
2. Nhập tên chức năng cần tìm. Ảnh dưới minh họa từ khóa không dấu viết liền **nhapkho**.
3. Dùng **↑ / ↓** để chọn kết quả rồi **Enter** để mở, hoặc bấm kết quả bằng chuột. Nhấn **Esc** để đóng danh sách.

![Hình 3: Tìm nhapkho, danh sách có các chức năng được tài khoản truy cập](/posts/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/hinh-03-tim-ctrl-k.png)

Với tài khoản có phạm vi quyền khác, cùng từ khóa có thể cho ít kết quả hơn. Không dùng số lượng kết quả của ảnh này để kết luận tài khoản khác bị lỗi.

![Hình 3b: Cùng từ khóa, tài khoản khác chỉ thấy Hàng chờ nhập kho](/posts/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/hinh-03b-tim-theo-quyen.png)

### 8.3. Thu gọn, hiện tạm và thay đổi độ rộng menu

- Bấm nút thu gọn ở đầu sidebar để ẩn menu; vùng làm việc được mở rộng.
- Bấm nút hiện menu ở góc trái thanh trên cùng để mở lại.
- Khi menu đang ẩn, rê chuột vào nút hiện menu để xem tạm; rời chuột khỏi menu thì menu ẩn lại.
- Kéo mép phải menu để thay đổi độ rộng theo nhu cầu.

![Hình 2: Menu bên trái sau khi kéo tăng độ rộng](/posts/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/hinh-02-menu-xo-ra.png)

![Hình 6: Menu đã thu gọn, vùng làm việc rộng hơn](/posts/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/hinh-06-menu-thu-gon.png)

![Hình 7: Menu hiện tạm phía trên vùng làm việc](/posts/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/hinh-07-menu-hien-tam.png)

### 8.4. Xem và cấu hình thông báo

1. Bấm chuông **Thông báo** để mở bảng thông báo.
2. Chọn **Tất cả**, **Chưa đọc** hoặc **Đã đọc**. Ảnh minh họa số lượng chưa đọc và chấm đánh dấu cạnh thông báo.
3. Chọn thông báo để xem nội dung hoặc chứng từ liên quan; dùng nút đánh dấu đã đọc tất cả nếu cần.
4. Bấm **Xem tất cả** để mở trang **THÔNG BÁO - DANH SÁCH**.

![Hình 4: Bảng Thông báo và trang THÔNG BÁO - DANH SÁCH](/posts/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/hinh-04-thong-bao.png)

5. Bấm biểu tượng **bánh răng** để mở **Tùy chọn thông báo**.
6. Bật/tắt loại thông báo muốn nhận theo nhu cầu và quyền hiển thị.

![Hình 8: Tùy chọn loại thông báo và kênh nhận](/posts/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/hinh-08-tuy-chon-thong-bao.png)

- **Loại thông báo**: Nội dung trên giao diện đã chụp: Yêu cầu phê duyệt giá; Thông báo chung; Đồng bộ đối tác lỗi; Ticket hỗ trợ; Tin nhắn trong ticket
- **Nhãn Quan trọng**: Nội dung trên giao diện đã chụp: Xuất hiện cạnh Yêu cầu phê duyệt giá và Đồng bộ đối tác lỗi trong ảnh
- **Cách nhận thông báo**: Nội dung trên giao diện đã chụp: Trong ứng dụng; Email
- **Email chưa khả dụng**: Nội dung trên giao diện đã chụp: Ảnh hiển thị “Tài khoản chưa có địa chỉ email”; không suy rằng đã thử gửi email thành công

7. Cuộn xuống để chọn **Tần suất thông báo**: **Tất cả thông báo**, **Chỉ thông báo quan trọng** hoặc **Tóm tắt theo ngày**.

![Hình 9: Tần suất thông báo và nút Lưu / Hủy](/posts/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/hinh-09-tan-suat-thong-bao.png)

Theo mô tả trên hộp, tần suất áp dụng cho email và popup trình duyệt; danh sách trong ứng dụng luôn hiển thị đầy đủ. **Tóm tắt theo ngày** được mô tả là một email tổng hợp mỗi ngày, không popup. Đây là mô tả giao diện, chưa phải kết quả thử nhận email.

8. Bấm **Lưu** để lưu lựa chọn; chọn **Hủy** nếu không muốn lưu.

### 8.5. Ticket hỗ trợ

Phần này đã có sổ tay riêng. Người dùng thường có chức năng thêm mới và danh sách theo xác nhận của người dùng. Xem sổ tay Ticket hỗ trợ; không hướng dẫn lại quy trình ticket hoặc tab xử lý trong [HƯỚNG DẪN BỐ CỤC MÀN HÌNH VÀ TÌM CHỨC NĂNG](/bai-viet/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/).

### 8.6. Tùy chỉnh giao diện

Bấm biểu tượng **Giao diện** trên thanh trên cùng.

- **Chế độ hiển thị**: Lựa chọn hiển thị: Sáng / Tối
- **Bộ màu**: Lựa chọn hiển thị: Helix / Azure / SigNoz
- **Thanh trên cùng**: Lựa chọn hiển thị: Các mẫu màu có sẵn; màu Chữ và Nền
- **Menu bên trái**: Lựa chọn hiển thị: Các mẫu màu có sẵn; màu Điểm nhấn và Nền
- **Khôi phục mặc định**: Lựa chọn hiển thị: Nút đưa tùy chỉnh về mặc định

![Hình 5: Bảng tùy chỉnh giao diện đã được mở và chụp](/posts/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/hinh-05-giao-dien.png)

Chọn tùy chỉnh phù hợp để dễ quan sát màn hình. Ảnh chứng minh các lựa chọn hiện có; việc lưu tùy chỉnh sau khi tải lại hoặc đổi máy chưa được xác nhận trong lượt này.

## 6. Kiểm tra sau khi thực hiện

- Mở được màn hình cần dùng từ menu hoặc bằng **Ctrl + K**.
- Biết chỗ xem thông báo, gửi ticket hỗ trợ và đổi giao diện cho dễ nhìn.

## 7. Những điều cần lưu ý

⚠️ Kết quả tìm chức năng phụ thuộc quyền truy cập. Tài khoản thường có thể thấy ít mục hơn tài khoản khác.

⚠️ Không nhầm ô **Tìm chức năng, trang…** trên thanh trên cùng với ô **Tìm kiếm…** của danh sách dữ liệu; tìm khách hàng hoặc mã phiếu thực hiện trong danh sách theo [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/).

⚠️ Email nhận thông báo phụ thuộc thông tin tài khoản và cấu hình hệ thống. Ảnh hiện tại cho thấy tài khoản chưa có địa chỉ email; không coi thao tác mở cấu hình là đã kiểm thử gửi email.

⚠️ Lưu công việc đang nhập trước khi tải lại hoặc rời trang.

### Không thấy chức năng trong menu hoặc kết quả tìm

Kiểm tra từ khóa và quyền của tài khoản; liên hệ admin nếu cần được cấp quyền. Không mặc định mọi tài khoản có cùng danh sách chức năng.

### Menu bên trái đang ẩn

Bấm nút hiện menu ở góc trái thanh trên cùng. Có thể rê chuột để xem tạm hoặc mở lại menu rồi kéo mép phải để chỉnh độ rộng.

### Email trong tùy chọn thông báo không bật được

Nếu hộp báo **Tài khoản chưa có địa chỉ email**, kiểm tra thông tin email trong hồ sơ theo [HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/) và cấu hình nhận thông báo với admin. Lượt này chưa xác nhận việc bật kênh sau khi bổ sung email hoặc gửi mail thực tế.

Lỗi kết nối, phiên làm việc và quyền khác: [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 9. Câu hỏi thường gặp

**Vì sao cùng từ khóa nhưng tài khoản khác tìm được ít chức năng hơn?**

Chức năng xuất hiện theo quyền được cấp. Hai ảnh cùng từ khóa **nhapkho** minh họa sự khác nhau này.

**Có thể tìm tên khách hàng hoặc mã phiếu ở ô Ctrl+K không?**

Ô này dùng tìm chức năng/trang. Tìm dữ liệu dùng ô tìm của từng danh sách ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Trang chủ có trống không?**

Ảnh trang chủ Hồng Nghi được người dùng cung cấp có nội dung hiển thị. Không coi trang chủ trống là hành vi mặc định; mở nghiệp vụ cần dùng từ menu hoặc ô tìm.

**Hướng dẫn tạo và xử lý ticket ở đâu?**

Xem sổ tay Ticket hỗ trợ, không lặp lại trong bài này.

## 10. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/) – Hướng dẫn tìm kiếm, lọc, sắp xếp, nhóm, chọn cột và lọc theo khoảng ngày trên danh sách.

## 11. Bài hướng dẫn liên quan

- [HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/) – Hướng dẫn đăng nhập, đăng xuất, đổi mật khẩu
- [HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/) – Truy cập và nhận biết đúng hệ thống chi nhánh
- [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/) – Hướng dẫn tìm kiếm, lọc, sắp xếp trên danh sách
- [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/) – Lỗi thường gặp và cách xử lý chung
