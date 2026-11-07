---
title: "LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG"
date: "2026-11-07"
summary: "Khi một thao tác không thực hiện được, Hồng Nghi ERP báo lỗi theo vài kiểu giống nhau trên mọi màn hình."
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

Khi một thao tác không thực hiện được, Hồng Nghi ERP báo lỗi theo vài kiểu **giống nhau trên mọi màn hình**. Bài này giúp bạn:

- Nhận biết các kiểu thông báo.
- Hiểu nghĩa các câu báo lỗi chung và cách tự xử lý.
- Biết khi nào phải báo IT và cần gửi những thông tin gì.

Lỗi riêng của từng chức năng (ví dụ "không xoá được kỳ lương đã khoá") nằm ở phần “Vướng mắc thường gặp” của bài hướng dẫn chức năng đó.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Không có.

## 2. Mở chức năng

Áp dụng cho mọi màn hình. Gửi hỗ trợ: thanh trên cùng → **Ticket hỗ trợ** → **Tạo ticket**.

## 3. Nhận biết màn hình

Hệ thống báo kết quả theo 4 kiểu:

![Hình 1: Thông báo thành công ở góc trên màn hình](/posts/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/hinh-01-thong-bao-goc-man-hinh.png)

- Kiểu thông báo: Thông báo **thành công** (xanh, góc trên); Đặc điểm: Tự tắt sau vài giây; Ví dụ: **Lưu thành công**, **Xóa thành công**
- Kiểu thông báo: Thông báo **CẢNH BÁO** (chữ đỏ, góc trên); Đặc điểm: Hiện khoảng 10 giây, có dấu **×** để tắt sớm; Ví dụ: **CẢNH BÁO** – **Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại.**
- Kiểu thông báo: Ô nhập **viền đỏ** + danh sách lỗi dưới cửa sổ; Đặc điểm: Hiện khi bấm **Lưu lại** mà thiếu / sai dữ liệu; Ví dụ: **Nhập mã đơn vị tính**, **Mã đã tồn tại**
- Kiểu thông báo: **Hộp thoại** giữa màn hình (tiêu đề **Lỗi**, **Cảnh báo**, **Xác nhận**…); Đặc điểm: Phải bấm nút mới đóng; Ví dụ: **Mật khẩu đã được thay đổi. Vui lòng đăng nhập lại.**

![Hình 2: Hộp thoại giữa màn hình (ví dụ Xác nhận xóa; hộp Lỗi có cùng dạng)](/posts/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/hinh-02-hop-thoai-giua-man-hinh.png)

Ô viền đỏ và danh sách lỗi dưới cửa sổ : xem [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/), Hình 4.

Câu báo lỗi khi lưu / xoá thường có dạng **<Việc đang làm>: <Lý do>**, ví dụ **Lỗi thêm: Mã đã tồn tại.** – phần trước dấu hai chấm cho biết thao tác bị lỗi, phần sau là lý do.

## 4. Trình tự công việc

```text
Thao tác không thành công
      ↓
Đọc thông báo (CẢNH BÁO / viền đỏ / hộp thoại)
      ├── Lỗi sử dụng (thiếu dữ liệu, trùng mã, không có quyền…)
      │        → tự sửa theo phần “Thực hiện trên phần mềm” → thử lại
      └── Lỗi hệ thống (mất kết nối, lỗi xử lý chung, bảo trì…)
               → thử lại sau ít phút
               → vẫn lỗi: chụp màn hình → Ticket hỗ trợ → Tạo ticket
```

### Bước 1 – Đọc kỹ thông báo

Đọc toàn bộ câu thông báo, đặc biệt phần sau dấu hai chấm. Thông báo **CẢNH BÁO** tự tắt sau khoảng 10 giây – nếu cần, chụp màn hình ngay (**Windows + Shift + S**).

### Bước 2 – Tra cứu trong phần “Vướng mắc thường gặp”

Tìm câu thông báo trong phần “Vướng mắc thường gặp” của bài này (lỗi chung) hoặc phần “Vướng mắc thường gặp” của bài chức năng đang làm (lỗi riêng). Làm theo **Cách xử lý**.

### Bước 3 – Thử lại

Sau khi sửa dữ liệu, thực hiện lại thao tác. Nếu lỗi hoặc mất kết nối xảy ra sau khi bấm **Lưu lại**, trước hết mở danh sách, bấm **Tải lại** và tìm theo mã/thông tin nguồn để biết chứng từ đã được ghi hay chưa ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Chỉ tạo lại khi đã xác định chưa có kết quả; nếu chưa xác định được thì báo IT, tránh ghi trùng.

### Bước 4 – Báo IT khi vẫn lỗi

Bấm **Ticket hỗ trợ** → **Tạo ticket** ([HƯỚNG DẪN BỐ CỤC MÀN HÌNH VÀ TÌM CHỨC NĂNG](/bai-viet/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/)), ghi:

- Màn hình đang dùng (dòng đường dẫn trên thanh trên cùng).
- Thao tác đang làm, mã chứng từ / mã dữ liệu liên quan.
- Thời gian xảy ra lỗi.
- Ảnh chụp màn hình có câu thông báo.

## 6. Kiểm tra sau khi thực hiện

Lỗi được xử lý, hoặc IT nhận đủ thông tin để kiểm tra.

## 7. Những điều cần lưu ý

⚠️ **Không bấm lưu liên tục** khi thấy chậm. Chờ thông báo kết quả; bấm nhiều lần có thể tạo trùng chứng từ hoặc bị chặn "thao tác quá nhanh".

⚠️ Bị đưa về trang đăng nhập khi đang nhập cửa sổ: dữ liệu chưa lưu sẽ mất. Với cửa sổ dài, nên lưu sớm rồi cập nhật dần.

⚠️ **Không gửi mật khẩu** trong ticket, tin nhắn hay ảnh chụp màn hình.

⚠️ Lỗi **"Dữ liệu đã được liên kết…"** nghĩa là dữ liệu đang được dùng ở chỗ khác. **Không** nhờ IT xoá thẳng trong cơ sở dữ liệu; chuyển sang **Ngưng sử dụng** ([HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)).

### "Hết phiên làm việc" và bị đưa về trang đăng nhập 

Nguyên nhân: phiên đăng nhập đã hết hạn (lâu không dùng, hoặc đã đăng xuất ở tab khác).
Cách xử lý: đăng nhập lại; hệ thống đưa bạn về đúng màn hình đang mở. Dữ liệu chưa lưu cần nhập lại.

### Hộp thoại "Mật khẩu đã được thay đổi. Vui lòng đăng nhập lại." 

Nguyên nhân: mật khẩu tài khoản vừa được đổi (bởi bạn ở nơi khác, hoặc bởi quản trị).
Cách xử lý: bấm **Đóng**, đăng nhập bằng mật khẩu mới ([HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/)).

### Hộp thoại "Tài khoản của bạn đã bị vô hiệu hoá. Liên hệ quản trị viên để được mở lại." 

Nguyên nhân: tài khoản đã bị chuyển sang ngưng sử dụng.
Cách xử lý: liên hệ quản trị hệ thống.

### Hộp thoại "Phiên đăng nhập này đã bị quản trị viên thu hồi. Vui lòng đăng nhập lại." 

Nguyên nhân: quản trị đã đăng xuất phiên của bạn từ xa.
Cách xử lý: đăng nhập lại; nếu không rõ lý do, hỏi quản trị hệ thống.

### "Bạn phải đổi mật khẩu trước khi tiếp tục sử dụng hệ thống." 

Nguyên nhân: quản trị vừa đặt lại mật khẩu hoặc bật **Buộc đổi mật khẩu**.
Cách xử lý: đăng nhập lại và đổi mật khẩu theo [HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/), phần “Thực hiện trên phần mềm”.2.

### "Bạn không có quyền thực hiện chức năng này." / "Bạn không có quyền thực hiện thao tác này." 

Nguyên nhân: tài khoản thiếu quyền cho thao tác vừa làm (thường gặp khi mở bảng phụ, chuột phải chọn chức năng có quyền riêng).
Cách xử lý: liên hệ quản trị hệ thống, nêu rõ màn hình và thao tác. Bạn **không** bị đăng xuất.

### Trang "SORRY, YOU NOT AUTHORIZED" 

Nguyên nhân: mở một màn hình không được cấp quyền **Truy cập** (thường do dùng đường dẫn lưu sẵn).
Cách xử lý: mở chức năng từ menu bên trái; cần dùng thì xin cấp quyền.

### "Không thể kết nối tới server. Vui lòng kiểm tra kết nối mạng." (Lỗi hệ thống)

Nguyên nhân: mất mạng, hoặc máy chủ ERP không trả lời.
Cách xử lý: kiểm tra mạng / Wi-Fi; mở thử trang web khác; chờ 1–2 phút rồi bấm **Tải lại**. Nhiều người cùng bị: báo IT.

### Trang bảo trì hiện ra thay cho ERP (Lỗi hệ thống)

Nguyên nhân: IT đang cập nhật phiên bản mới.
Cách xử lý: chờ thông báo của IT rồi mở lại địa chỉ ERP.

### "Dịch vụ tạm thời không khả dụng. Vui lòng thử lại sau." (Lỗi hệ thống)

Cách xử lý: thử lại sau ít phút. Kéo dài: báo IT.

### "Bạn thao tác quá nhanh. Vui lòng thử lại sau ít phút." 

Nguyên nhân: gửi quá nhiều yêu cầu trong thời gian ngắn (bấm liên tục, mở quá nhiều tab, tải nhiều file cùng lúc).
Cách xử lý: chờ số giây ghi trong ngoặc (nếu có) rồi làm lại; đóng bớt tab ERP.

### "Lỗi thêm: Mã đã tồn tại." / "Lỗi sửa: Mã đã tồn tại." hoặc ô mã báo "Mã đã tồn tại" 

Nguyên nhân: mã (hoặc giá trị phải duy nhất khác, ví dụ tên rút gọn) đã có trong hệ thống, kể cả dòng đang **Ngưng sử dụng**.
Cách xử lý: tìm mã đó trong danh sách (bỏ lọc trạng thái); dùng mã khác, hoặc **Kích hoạt** lại dòng cũ thay vì tạo mới.

### "Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: dữ liệu đang được dùng ở nơi khác (ví dụ kho đã có phiếu, khách hàng đã có đơn hàng), hoặc vừa bị người khác sửa.
Cách xử lý: với danh mục có ô **Kích hoạt**, có thể chuyển sang **Ngưng sử dụng** theo [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/). Với chứng từ, đối chiếu bài chức năng và các liên kết trước khi nhờ người phụ trách xử lý; không mặc định mọi chứng từ đều có trạng thái Ngưng sử dụng hoặc được phép xóa chứng từ liên quan.

### "… Đã xảy ra lỗi trong quá trình xử lý. Vui lòng thử lại hoặc liên hệ quản trị hệ thống." (Lỗi hệ thống)

Nguyên nhân: lỗi không xác định khi lưu / xoá / tải dữ liệu. Ở một số màn, trùng mã cũng ra câu này.
Cách xử lý: kiểm tra trùng mã trước; thử lại sau ít phút; vẫn lỗi thì báo IT kèm thời gian và ảnh chụp (IT tra được nhật ký theo thời gian).

### "Không tìm thấy tài nguyên yêu cầu: …" (Lỗi hệ thống)

Nguyên nhân: dữ liệu đã bị xoá bởi người khác, hoặc phiên bản phần mềm trên máy chưa cập nhật.
Cách xử lý: bấm **Tải lại**; tải lại cả trang bằng **Ctrl + Shift + R**. Vẫn lỗi: báo IT.

### Bấm Lưu lại mà cửa sổ không đóng, không có thông báo 

Nguyên nhân: còn ô bị viền đỏ (có thể nằm ở tab khác của cửa sổ hoặc phải cuộn xuống mới thấy).
Cách xử lý: cuộn cửa sổ, xem danh sách lỗi dưới cửa sổ, sửa các ô báo đỏ.

### Màn hình hiển thị lạ, nút không bấm được sau khi IT cập nhật phiên bản (Lỗi hệ thống)

Cách xử lý: nhấn **Ctrl + Shift + R** để tải lại toàn bộ trang. Vẫn lỗi: xoá dữ liệu duyệt web của trang ERP hoặc báo IT.

## 9. Câu hỏi thường gặp

**Thông báo CẢNH BÁO tắt nhanh quá, chưa kịp đọc?**
Thông báo cảnh báo dùng chung hiện khoảng 10 giây theo ghi nhận của bài; từng loại có thể khác. Chụp ngay khi thấy. Không lặp thao tác lưu/xóa chỉ để lấy lại thông báo; ghi mã chứng từ và thời gian để IT tra cứu.

**Vì sao trùng mã có lúc báo rõ "Mã đã tồn tại", có lúc báo lỗi chung?**
Phụ thuộc cách từng màn kiểm tra. Màn đã cập nhật báo rõ; màn chưa cập nhật báo câu chung. Cả hai trường hợp đều nên kiểm tra trùng mã trước.

**Đang làm thì quyền bị thay đổi có sao không?**
Menu tự cập nhật, góc màn hình báo **Quyền của bạn vừa được cập nhật. Một số màn cần tải lại trang.** Mở lại màn đang làm để áp quyền mới ([HƯỚNG DẪN BỐ CỤC MÀN HÌNH VÀ TÌM CHỨC NĂNG](/bai-viet/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/)).

## 10. Công việc tiếp theo

Không có bước bắt buộc. Quay lại bài chức năng đang làm.

## 11. Bài hướng dẫn liên quan

- [HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/) – Hướng dẫn đăng nhập, đăng xuất, đổi mật khẩu
- [HƯỚNG DẪN BỐ CỤC MÀN HÌNH VÀ TÌM CHỨC NĂNG](/bai-viet/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/) – Hướng dẫn bố cục màn hình (Ticket hỗ trợ, thông báo)
- [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/) – Hướng dẫn thêm mới, cập nhật, xoá dữ liệu
- [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/) – Hướng dẫn quản lý file đính kèm (lỗi tải file)
