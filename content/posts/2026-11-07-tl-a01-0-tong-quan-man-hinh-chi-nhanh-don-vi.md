---
title: "TỔNG QUAN MÀN HÌNH CHI NHÁNH / ĐƠN VỊ"
date: "2026-11-07"
summary: "Màn hình Chi nhánh / Đơn vị (tiêu đề CHI NHÁNH - DANH SÁCH) liệt kê các chi nhánh, đơn vị hạch toán của công ty trên Hồng Nghi ERP."
module: "Thiết lập danh mục"
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

Màn hình **Chi nhánh / Đơn vị** (tiêu đề **CHI NHÁNH - DANH SÁCH**) liệt kê các chi nhánh, đơn vị hạch toán của công ty trên Hồng Nghi ERP. Đây là danh mục **đầu tiên** phải có khi bắt đầu dùng ERP: mọi chứng từ (phiếu mua hàng, phiếu nhập kho, phiếu bán hàng, phiếu thu, phiếu chi…) và hầu hết danh mục (kho, quỹ, khách hàng, nhà cung cấp, hàng hoá…) đều **gắn với một chi nhánh**.

Thông tin nhập ở đây còn được dùng để:

- **In phiếu**: tên công ty, mã số thuế, địa chỉ, điện thoại, người đại diện và logo ở đầu phiếu lấy từ chi nhánh đang làm việc.
- **Nhận biết chi nhánh khi đăng nhập**: trên hệ thống chính thức, mỗi chi nhánh có một địa chỉ web riêng (ô **HOSTNAME**); ERP nhận ra chi nhánh theo địa chỉ web bạn mở.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Chi nhánh / Đơn vị**.
- Không cần danh mục nào khác có trước.
- Có sẵn thông tin pháp nhân của chi nhánh: tên công ty, mã số thuế, địa chỉ, người đại diện. Nếu in logo: đường dẫn ảnh logo; nếu có địa chỉ web riêng: tên miền (IT cung cấp).
- Chi nhánh mới chỉ dùng được sau khi quản trị hệ thống cấp quyền làm việc ở chi nhánh đó và thiết lập địa chỉ web (việc của IT).

## 2. Mở chức năng

**Thiết lập danh mục → Chi nhánh / Đơn vị**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Hình 1: CHI NHÁNH - DANH SÁCH — chỉ xem; đã che thông tin nhạy cảm.](/posts/2026-11-07-tl-a01-0-tong-quan-man-hinh-chi-nhanh-don-vi/ui-20261026-tl-a01-ds-figure-01.png)

- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM CHI NHÁNH**; Hướng dẫn: phần “Thực hiện trên phần mềm”, [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Import Excel**: Chức năng: Mở cửa sổ **CHI NHÁNH - IMPORT TỪ EXCEL**; Hướng dẫn: [HƯỚNG DẪN IMPORT CHI NHÁNH TỪ EXCEL](/bai-viet/2026-11-07-tl-a01-2-huong-dan-import-chi-nhanh-tu-excel/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá một dòng; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Dòng lọc dưới tiêu đề cột, phân trang**: Chức năng: Lọc từng cột; 10 / 15 / 20 dòng một trang; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)

**Các cột trên danh sách** (nhiều cột, dùng **Trình chọn cột** để ẩn bớt):

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Xóa** (hiện theo quyền)
- **Mã chi nhánh**: Ý nghĩa: Mã viết liền của chi nhánh
- **Tên chi nhánh**: Ý nghĩa: Tên chi nhánh / đơn vị
- **Tên công ty**: Ý nghĩa: Tên pháp nhân in trên phiếu
- **Mã số thuế**: Ý nghĩa: Mã số thuế của pháp nhân
- **Mã CIF**: Ý nghĩa: Mã CIF của chi nhánh (nếu có)
- **Người đại diện, Chức vụ (NĐD)**: Ý nghĩa: Người đại diện theo pháp luật và chức vụ
- **Fax**: Ý nghĩa: Số fax
- **LogoURL**: Ý nghĩa: Đường dẫn ảnh logo in đầu phiếu
- **HostName**: Ý nghĩa: Địa chỉ web riêng của chi nhánh
- **SĐT, Email, Địa chỉ**: Ý nghĩa: Thông tin liên hệ in trên phiếu
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n**. Danh sách hiện cả chi nhánh **Ngưng sử dụng**. Nhấp đúp vào một dòng mở cửa sổ chỉ xem **THÔNG TIN CHI NHÁNH**.

![Hình 2: Biểu mẫu THÊM CHI NHÁNH trống, chưa lưu.](/posts/2026-11-07-tl-a01-0-tong-quan-man-hinh-chi-nhanh-don-vi/ui-20261026-tl-a01-form-figure-02.png)

- **MÃ CHI NHÁNH, TÊN CHI NHÁNH**: Ý nghĩa: Hai trường bắt buộc
- **TÊN CÔNG TY, MÃ SỐ THUẾ, MÃ CIF, NGƯỜI ĐẠI DIỆN, CHỨC VỤ**: Ý nghĩa: Thông tin pháp nhân, in trên phiếu
- **FAX, LOGO URL, HOSTNAME**: Ý nghĩa: Fax, logo in phiếu, địa chỉ web riêng
- **SĐT, EMAIL, ĐỊA CHỈ, GHI CHÚ**: Ý nghĩa: Liên hệ và ghi chú
- **Ô Kích hoạt**: Ý nghĩa: Bỏ tick = **Ngưng sử dụng**
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

Tiêu đề cửa sổ: **THÊM CHI NHÁNH**, **CẬP NHẬT CHI NHÁNH**, **THÔNG TIN CHI NHÁNH** (chỉ xem).

## 4. Trình tự công việc

**Vị trí của chi nhánh trong ERP:**

```text
Chi nhánh / Đơn vị (TL-A01)
      ↓
Danh mục gắn chi nhánh: Kho hàng, Tài khoản / quỹ, Khách hàng, Nhà cung cấp,
Hàng hoá, Bảng giá…
      ↓
Chứng từ gắn chi nhánh: Mua hàng, Kho, Bán hàng, Thu chi, Kỳ kế toán…
      ↓
Phiếu in: tên công ty, mã số thuế, địa chỉ, logo lấy từ chi nhánh đang làm việc
```

**Các chức năng trên màn hình:**

```text
Chi nhánh / Đơn vị
   ├── Thêm mới ──► THÊM CHI NHÁNH
   ├── Import Excel ──► CHI NHÁNH - IMPORT TỪ EXCEL (TL-A01.2)
   ├── Sửa ──► CẬP NHẬT CHI NHÁNH (bỏ tick Kích hoạt = ngưng dùng)
   ├── Xóa ──► chỉ khi chưa có dữ liệu nào gắn với chi nhánh
   ├── Nhấp đúp ──► THÔNG TIN CHI NHÁNH (chỉ xem)
   └── Xuất Excel
```

### Khai báo chi nhánh mới

**Bước 1 –** Nhập **MÃ CHI NHÁNH** (viết liền, không khoảng trắng, ít nhất 2 ký tự) và **TÊN CHI NHÁNH**. Hệ thống kiểm tra trùng mã ngay khi bạn rời ô mã.

**Bước 2 –** Nhập thông tin in phiếu: **TÊN CÔNG TY**, **MÃ SỐ THUẾ**, **ĐỊA CHỈ**, **SĐT**, **EMAIL**, **NGƯỜI ĐẠI DIỆN**, **CHỨC VỤ**. Không bắt buộc nhưng nên điền đủ nếu chi nhánh có in phiếu.

**Bước 3 –** Nhập **HOSTNAME** nếu chi nhánh có địa chỉ web riêng (có thể nhiều tên miền, cách nhau dấu phẩy, dấu chấm phẩy hoặc khoảng trắng); nhập **LOGO URL** nếu in logo. Hai ô này sai thì phiếu mất logo hoặc chi nhánh không hiện ở trang **ĐĂNG NHẬP** của địa chỉ web tương ứng: nhờ IT kiểm tra trước khi lưu.

**Bước 4 –** Để tick **Kích hoạt**, bấm **Lưu lại**. Mã được cắt khoảng trắng đầu / cuối khi lưu.

### Sửa thông tin chi nhánh

Sửa **MÃ CHI NHÁNH** vẫn được nhưng mã mới không được trùng chi nhánh khác. Sửa **TÊN CÔNG TY**, **MÃ SỐ THUẾ**, **ĐỊA CHỈ**, **LOGO URL** đổi nội dung in trên các phiếu in từ lần in sau; phiếu đã in giấy không đổi.

### Ngưng sử dụng chi nhánh

Bỏ tick **Kích hoạt** để ngưng sử dụng chi nhánh theo luồng quản trị danh mục. Kiểm tra không còn ai đang làm việc ở chi nhánh đó trước khi ngưng. Trên hệ thống chính thức, mỗi đơn vị có địa chỉ và tài khoản riêng; không dùng danh sách chọn chi nhánh ở trang **ĐĂNG NHẬP** để xác nhận kết quả.

### Xoá chi nhánh

Chỉ xoá được chi nhánh **chưa có bất kỳ dữ liệu nào** gắn vào (kho, quỹ, khách hàng, chứng từ, kỳ kế toán…) và không phải chi nhánh **trung tâm**. Thực tế hầu như chỉ xoá được chi nhánh vừa tạo nhầm; chi nhánh đã dùng thì chuyển sang **Ngưng sử dụng**.

- **Thêm nhiều chi nhánh một lần**: Bài hướng dẫn: [HƯỚNG DẪN IMPORT CHI NHÁNH TỪ EXCEL](/bai-viet/2026-11-07-tl-a01-2-huong-dan-import-chi-nhanh-tu-excel/)
- **Tìm, lọc, chọn cột**: Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Thêm, sửa, xoá, xem chi tiết**: Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

## 6. Giải thích các thông tin trên màn hình

- **Mã chi nhánh**: Ý nghĩa: Mã viết liền của chi nhánh; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự, không có khoảng trắng; **duy nhất toàn hệ thống**, không phân biệt hoa / thường (kể cả chi nhánh ngưng dùng). Mã tự nhập, hệ thống không tự sinh
- **Tên chi nhánh**: Ý nghĩa: Tên hiển thị của chi nhánh; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự
- **Tên công ty**: Ý nghĩa: Tên pháp nhân in trên phiếu; Bắt buộc: Không
- **Mã số thuế**: Ý nghĩa: Mã số thuế pháp nhân; Bắt buộc: Không; Lưu ý: In trên phiếu
- **Mã CIF**: Ý nghĩa: Mã CIF của chi nhánh; Bắt buộc: Không
- **Người đại diện**: Ý nghĩa: Người đại diện theo pháp luật; Bắt buộc: Không; Lưu ý: Nhập theo giấy phép kinh doanh
- **Chức vụ**: Ý nghĩa: Chức vụ người đại diện; Bắt buộc: Không; Lưu ý: Ví dụ *Giám đốc*
- **Fax**: Ý nghĩa: Số fax; Bắt buộc: Không
- **Logo URL**: Ý nghĩa: Đường dẫn ảnh logo in đầu phiếu; Bắt buộc: Không; Lưu ý: Do IT cung cấp; để trống thì phiếu không có logo
- **Hostname**: Ý nghĩa: Tên miền riêng của chi nhánh; Bắt buộc: Không; Lưu ý: Nhiều tên miền cách nhau dấu phẩy, dấu chấm phẩy hoặc khoảng trắng. Để trống thì chi nhánh hiện ở mọi địa chỉ web
- **SĐT**: Ý nghĩa: Điện thoại chi nhánh; Bắt buộc: Không; Lưu ý: In trên phiếu
- **Email**: Ý nghĩa: Email chi nhánh; Bắt buộc: Không
- **Địa chỉ**: Ý nghĩa: Địa chỉ chi nhánh; Bắt buộc: Không; Lưu ý: In trên phiếu
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

## 7. Kiểm tra sau khi thực hiện

Chi nhánh được lưu và hiện trên danh sách. Thông tin pháp nhân, logo của chi nhánh dùng cho các phiếu in từ lần in sau. Chi nhánh mới dùng để làm việc được sau khi IT cấp quyền người dùng và thiết lập địa chỉ web.

## 8. Những điều cần lưu ý

⚠️ **Danh mục chi nhánh không lọc theo chi nhánh đang làm việc**: quyền **Truy cập** cho phép xem danh sách; sửa còn cần **Cập nhật**. Phạm vi này chỉ xét trong cùng CSDL, không mở sang dữ liệu/tên miền hệ thống chính thức khác.

⚠️ **Mã chi nhánh nên đặt một lần rồi giữ nguyên**: mã xuất hiện trên danh sách chọn và báo cáo nhiều nơi.

⚠️ Chi nhánh đã có dữ liệu **không xoá được**; dùng **Ngưng sử dụng**. Chi nhánh **trung tâm** không xoá được dù chưa có dữ liệu.

⚠️ **Ngưng sử dụng** là thay đổi cấu hình chi nhánh. Kiểm tra trạng thái trong danh mục; trên hệ thống chính thức không có bước chọn đổi chi nhánh ở trang **ĐĂNG NHẬP**.

### "Nhập mã chi nhánh" / "Mã chi nhánh quá ngắn" / "Nhập tên chi nhánh" / "Tên chi nhánh quá ngắn" 

Nguyên nhân: để trống hoặc chỉ nhập 1 ký tự.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "Mã không hợp lệ. Viết liền không dấu và không chứa kí tự đặc biệt." 

Nguyên nhân: mã có khoảng trắng.
Cách xử lý: viết liền, ví dụ `CNHANOI` thay cho `CN HANOI`.

### "Mã chi nhánh đã tồn tại" 

Nguyên nhân: đã có chi nhánh cùng mã (kể cả khác hoa / thường, kể cả chi nhánh đã ngưng sử dụng).
Cách xử lý: đặt mã khác, hoặc tìm dòng cũ và tick lại **Kích hoạt**.

### "Lỗi xóa: Vui lòng liên hệ bộ phận quản trị để được hỗ trợ ^_^" 

Nguyên nhân: đây là chi nhánh **trung tâm** của hệ thống, không cho xoá trên giao diện.
Cách xử lý: liên hệ quản trị hệ thống (IT).

### "Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: chi nhánh đã có dữ liệu gắn vào (danh mục, chứng từ…).
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá.

### "Lỗi xóa: Đã xảy ra lỗi trong quá trình xử lý. Vui lòng thử lại hoặc liên hệ quản trị hệ thống." (Lỗi hệ thống)

Nguyên nhân: chi nhánh còn dữ liệu ở nơi hệ thống không diễn giải được (ví dụ kỳ kế toán, bút toán, kết nối MISA).
Cách xử lý: không xoá; bỏ tick **Kích hoạt**. Cần xoá hẳn thì báo IT.

## 10. Câu hỏi thường gặp

**Chi nhánh trung tâm là gì? Sao không thấy ô chọn trên cửa sổ?**
Đó là cờ nội bộ của hệ thống, không có trên cửa sổ; chỉ có tác dụng chặn xoá. Muốn đổi, báo IT.

**Chi nhánh khác công ty thế nào?**
Mỗi chi nhánh / đơn vị là một đơn vị hạch toán riêng; có thể cùng hoặc khác pháp nhân. Pháp nhân ghi bằng **Tên công ty**, **Mã số thuế** của chi nhánh đó.

**Thêm chi nhánh xong, người dùng có thấy ngay không?**
Chưa. IT cần cấp quyền làm việc ở chi nhánh mới và thiết lập địa chỉ web riêng.

## 11. Công việc tiếp theo

```text
Thêm chi nhánh xong
   ├──► IT cấp quyền người dùng + địa chỉ web
   ├──► Khai báo Kho hàng của chi nhánh      → TL-A09
   └──► Khai báo Tài khoản, quỹ              → TL-A06
```

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH KHO HÀNG](/bai-viet/2026-11-07-tl-a09-0-tong-quan-man-hinh-kho-hang/) – Tổng quan màn hình Kho hàng.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN IMPORT CHI NHÁNH TỪ EXCEL](/bai-viet/2026-11-07-tl-a01-2-huong-dan-import-chi-nhanh-tu-excel/) – Hướng dẫn import chi nhánh từ Excel
- [TỔNG QUAN MÀN HÌNH KHO HÀNG](/bai-viet/2026-11-07-tl-a09-0-tong-quan-man-hinh-kho-hang/) – Tổng quan màn hình Kho hàng
- [TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ](/bai-viet/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/) – Tổng quan màn hình Tài khoản, quỹ
- [TỔNG QUAN SỔ TAY THIẾT LẬP DANH MỤC VÀ THỨ TỰ KHAI BÁO](/bai-viet/2026-11-07-tl-00-tong-quan-so-tay-thiet-lap-danh-muc-va-thu-tu-khai-bao/) – Tổng quan sổ tay Thiết lập danh mục
