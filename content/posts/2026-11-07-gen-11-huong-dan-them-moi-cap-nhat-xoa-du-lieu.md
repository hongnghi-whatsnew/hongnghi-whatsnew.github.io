---
title: "HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU"
date: "2026-11-07"
summary: "Hầu hết màn hình danh mục và chứng từ của Hồng Nghi ERP dùng chung một cách thao tác để: - Thêm mới một dòng dữ liệu qua hộp thoại (cửa sổ)."
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

Hầu hết màn hình danh mục và chứng từ của Hồng Nghi ERP dùng chung một cách thao tác để:

- **Thêm mới** một dòng dữ liệu qua hộp thoại (cửa sổ).
- **Xem** lại một dòng bằng cách nhấp đúp.
- **Sửa** một dòng qua liên kết **Sửa** ở cột **Thao tác**.
- **Xóa** một dòng qua liên kết **Xóa**, có hộp xác nhận.
- Ngưng dùng một danh mục mà không cần xoá.

Bài này lấy màn hình **Đơn vị tính** (danh mục đơn giản) làm ví dụ. Bài chỉ mô tả **phần chung**. Tên trường, quy tắc kiểm tra, các nút riêng của **từng màn có thể khác — xem bài Tổng quan màn hình** và bài chức năng của màn đó (ví dụ lập phiếu có bảng chi tiết hàng hoá).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền tương ứng ở phần “Chuẩn bị trước khi thực hiện”.
- Với chứng từ: chọn đúng khoảng ngày để thấy phiếu cần sửa / xoá ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).
- Dữ liệu danh mục cần chọn trong cửa sổ (nhóm, đơn vị tính, kho…) đã có và đang **Kích hoạt**.

## 2. Mở chức năng

Áp dụng cho mọi màn hình danh sách có nút **Thêm mới** hoặc cột **Thao tác**. Ví dụ trong bài:

**Workspace → Hàng hoá → Đơn vị tính**

## 3. Nhận biết màn hình

![Hình 1: Các nút thêm, sửa, xoá trên màn hình danh sách (ví dụ ĐƠN VỊ TÍNH - DANH SÁCH)](/posts/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/hinh-01-man-hinh-danh-sach.png)

- **Thêm mới**: Chức năng: Mở cửa sổ thêm. Ở một số màn là nút xổ nhiều lựa chọn
- **Liên kết Sửa (cột Thao tác)**: Chức năng: Mở cửa sổ cập nhật dòng đó
- **Liên kết Xóa (cột Thao tác)**: Chức năng: Xoá dòng đó, có hộp xác nhận
- **Một dòng dữ liệu**: Chức năng: **Nhấp đúp** để mở cửa sổ chỉ xem

## 4. Trình tự công việc

```text
Màn hình danh sách
   ├──► Thêm mới ──► cửa sổ THÊM … ──► nhập ──► Lưu lại
   │                                            ├── thiếu / sai ──► ô viền đỏ, sửa lại
   │                                            └── hợp lệ ──► "Lưu thành công"
   │                                                           ↓
   │                                              cửa sổ đóng, danh sách tải lại
   ├──► Nhấp đúp dòng ──► cửa sổ THÔNG TIN … / XEM LẠI … ──► Đóng
   ├──► Sửa ──► cửa sổ CẬP NHẬT … ──► sửa ──► Lưu lại ──► "Lưu thành công"
   └──► Xóa ──► hộp "Xác nhận xóa" ──► Xóa ──► "Xóa thành công"
                                     └──► Hủy ──► không đổi gì
```

### 8.1. Thêm mới

**Bước 1 –** Bấm **Thêm mới**. Hộp thoại cửa sổ mở ra, tiêu đề dạng **THÊM …** (ví dụ **THÊM DANH MỤC ĐVT**) (Hình 2).

Ở một số màn chứng từ, **Thêm mới** là nút xổ: rê chuột hoặc bấm vào nút rồi chọn loại cần lập (ví dụ Phiếu nhập kho: **Nhập khách trả hàng**, **Nhập mua hàng**). Cách lập từng loại xem bài chức năng của màn đó.

**Bước 2 –** Nhập các trường. Nhãn trường viết hoa (ví dụ **MÃ ĐƠN VỊ TÍNH**, **TÊN ĐƠN VỊ TÍNH**, **GHI CHÚ**). Trường bắt buộc có dấu `*` sau nhãn.

**Bước 3 –** Danh mục có ô **Kích hoạt** ở chân cửa sổ: để tick nếu muốn dùng ngay.

**Bước 4 –** Bấm **Lưu lại**. Trong lúc lưu, nút **Lưu lại** mờ đi để tránh bấm hai lần.

![Hình 2: cửa sổ thêm mới (ví dụ THÊM DANH MỤC ĐVT)](/posts/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/hinh-02-form-them-moi.png)

- **Tiêu đề cửa sổ**: Chức năng: **THÊM …** / **CẬP NHẬT …** / **THÔNG TIN …** cho biết đang thêm, sửa hay chỉ xem
- **Các trường nhập**: Chức năng: Trường bắt buộc có dấu `*`
- **Ô Kích hoạt**: Chức năng: Bỏ tick = **Ngưng sử dụng** (chỉ có ở danh mục)
- **Lưu lại**: Chức năng: Kiểm tra và lưu
- **Đóng**: Chức năng: Đóng cửa sổ, **không** lưu

**Bước 5 –** Lưu thành công: góc màn hình hiện **Lưu thành công** (Hình 3), cửa sổ tự đóng, danh sách tự tải lại và có dòng mới.

![Hình 3: Thông báo Lưu thành công](/posts/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/hinh-03-thong-bao-luu-thanh-cong.png)

### 8.2. Khi cửa sổ báo lỗi nhập liệu

Bấm **Lưu lại** mà còn thiếu hoặc sai dữ liệu thì cửa sổ **không** đóng (Hình 4):

- Ô có lỗi viền đỏ; rê chuột / bấm vào ô để xem câu báo.
- Dưới cửa sổ có danh sách lỗi, ví dụ **Nhập mã đơn vị tính**, **Mã đơn vị tính quá ngắn**, **Mã đã tồn tại**.

Sửa hết các ô báo đỏ rồi bấm **Lưu lại** lần nữa.

![Hình 4: cửa sổ báo lỗi – ô viền đỏ và danh sách lỗi dưới cửa sổ](/posts/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/hinh-04-form-bao-loi.png)

Nếu lỗi đến từ hệ thống khi lưu (ví dụ trùng mã chưa kiểm tra trước), góc màn hình hiện thông báo **CẢNH BÁO** dạng **Lỗi thêm: …** hoặc **Lỗi sửa: …**, cửa sổ vẫn mở để bạn sửa ([LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/)).

### 8.3. Xem lại (nhấp đúp)

**Nhấp đúp** vào dòng. cửa sổ mở ở chế độ chỉ xem (Hình 5): danh mục có tiêu đề **THÔNG TIN …** (ví dụ **THÔNG TIN ĐVT**), chứng từ có tiêu đề **XEM LẠI …** (ví dụ **XEM LẠI PHIẾU NHẬP KHO**). cửa sổ chỉ xem **không có** nút **Lưu lại**; bấm **Đóng** để thoát.

Màn chứng từ thường có thêm mục **Xem lại** ở menu chuột phải, cho kết quả giống nhấp đúp.

![Hình 5: cửa sổ chỉ xem (ví dụ THÔNG TIN ĐVT) – không có nút Lưu lại](/posts/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/hinh-05-form-chi-xem.png)

### 8.4. Cập nhật (Sửa)

**Bước 1 –** Tìm dòng cần sửa ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)), bấm **Sửa**  ở cột **Thao tác**.

**Bước 2 –** cửa sổ mở với tiêu đề **CẬP NHẬT …** (ví dụ **CẬP NHẬT DANH MỤC ĐVT**), đã điền sẵn dữ liệu hiện tại.

**Bước 3 –** Sửa các trường cần thay đổi, bấm **Lưu lại**. Thành công: **Lưu thành công**, cửa sổ đóng, danh sách tải lại.

Một số màn chứng từ cho sửa nhanh một thông tin qua menu chuột phải (ví dụ Phiếu nhập kho: **Cập nhật số hóa đơn**). Hộp nhập nhỏ mở ra, gõ giá trị rồi xác nhận; thành công báo **Cập nhật thành công**. Xem bài **Tổng quan màn hình** của màn đó.

### 8.5. Xoá

**Bước 1 –** Bấm **Xóa**  ở cột **Thao tác** của dòng cần xoá.

**Bước 2 –** Hộp **Xác nhận xóa** hiện ra giữa màn hình với câu hỏi dạng **Bạn có muốn xóa phiếu này?** (Hình 6).

**Bước 3 –** Bấm **Xóa** để xoá, hoặc **Hủy** để thôi. Nhấn **Esc** hoặc bấm ra ngoài hộp cũng là thôi.

**Bước 4 –** Thành công: góc màn hình báo **Xóa thành công**, danh sách tải lại, dòng biến mất.

![Hình 6: Hộp Xác nhận xóa](/posts/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/hinh-06-xac-nhan-xoa.png)

- **Tiêu đề Xác nhận xóa**: Chức năng: Biểu tượng tam giác cảnh báo
- **Câu hỏi**: Chức năng: Nội dung tuỳ màn
- **Hủy**: Chức năng: Đóng hộp, không xoá
- **Xóa**: Chức năng: Xoá ngay (nút được chọn sẵn)

### 8.6. Ngưng sử dụng thay cho xoá (danh mục)

Danh mục đã được dùng trong chứng từ thường **không xoá được** (báo **Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại.**). Khi không muốn dùng nữa:

**Bước 1 –** Bấm **Sửa** ở dòng danh mục.

**Bước 2 –** Bỏ tick **Kích hoạt** ở chân cửa sổ, bấm **Lưu lại**.

Dòng vẫn còn trong danh sách, cột **Trạng thái** (nếu màn có) hiện **Ngưng sử dụng**. Chứng từ cũ vẫn giữ nguyên; khi lập chứng từ mới, danh mục này thường không còn trong ô chọn. Muốn dùng lại: tick **Kích hoạt** và lưu.

### 8.7. Chọn nhiều dòng: Xóa nhiều, Sửa nhiều (một số danh mục)

Một số danh mục lớn (ví dụ **Nhà cung cấp**, **Khách hàng**, các màn **Hàng hoá**) cho chọn nhiều dòng cùng lúc (Hình 7):

**Bước 1 –** Tick ô chọn ở đầu các dòng cần xử lý. Trước khi dùng ô đầu hàng tiêu đề, kiểm tra phạm vi chọn theo trang/bộ lọc và số dòng được báo trên màn; không mặc định chỉ các dòng đang nhìn thấy. Thanh trên bảng hiện **Xóa nhiều**, **Sửa nhiều**, **Bỏ chọn tất cả** và số **… dòng đã chọn**.

**Bước 2 –** Bấm **Xóa nhiều**: hộp **Xác nhận xóa nhiều** hỏi số dòng sẽ xoá → **Xóa**. Bấm **Sửa nhiều**: chọn giá trị mới cho các trường được phép, rồi lưu.

Các trường sửa được và quy tắc riêng xem bài sửa, xoá nhiều của từng danh mục (sổ tay **Thiết lập danh mục**).

![Hình 7: Chọn nhiều dòng – thanh Xóa nhiều / Sửa nhiều (ví dụ NHÀ CUNG CẤP)](/posts/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/hinh-07-chon-nhieu-dong.png)

### 8.8. Di chuyển, đổi kích thước hộp thoại

- Kéo thanh tiêu đề hộp thoại để di chuyển (ví dụ để nhìn danh sách phía sau).
- Kéo góc dưới phải để đổi kích thước (cửa sổ dài, bảng chi tiết rộng).
- cửa sổ thêm / sửa **không** đóng khi bấm ra ngoài; dùng **Đóng**.

Một số màn (ví dụ cấu hình Ticket) mở **bảng trượt từ cạnh phải** thay cho hộp thoại giữa màn hình; cách nhập và **Lưu lại** / **Đóng** tương tự.

## 6. Kiểm tra sau khi thực hiện

- Thêm / sửa: dữ liệu được lưu, danh sách tải lại, thông báo **Lưu thành công** (hoặc **Cập nhật thành công**).
- Xoá: dòng bị xoá khỏi hệ thống, thông báo **Xóa thành công**.
- Ngưng sử dụng: dòng còn trong danh sách; khả năng xuất hiện ở ô chọn tùy màn và điều kiện nạp danh mục, cần kiểm tra tại nghiệp vụ liên quan.

Sau thêm/sửa, mở lại đúng mã để kiểm tra giá trị đã lưu. Nếu mạng gián đoạn khi gửi lệnh, tìm lại mã và đối chiếu kết quả trước bấm lưu hoặc lập mới lần nữa; không suy chưa thấy thông báo nghĩa là chưa ghi nhận. Sau xử lý nhiều dòng, kiểm tra kết quả từng dòng và thông báo lỗi, không mặc định cả nhóm đã hoàn tất.

## 7. Những điều cần lưu ý

⚠️ **Xoá là xoá hẳn**, không có thùng rác hay nút khôi phục. Danh mục không dùng nữa: ưu tiên **Ngưng sử dụng** (phần “Thực hiện trên phần mềm”.6).

⚠️ Trong hộp **Xác nhận xóa**, nút **Xóa** được chọn sẵn: nhấn **Enter** là **xoá ngay**. Đọc kỹ trước khi nhấn phím.

⚠️ Dữ liệu chưa lưu có thể mất khi đóng cửa sổ. Đóng cửa sổ không hoàn tác các thao tác đã lưu ở hộp khác, file đã tải lên hoặc dữ liệu đã ghi trước đó; kiểm tra trạng thái tại đúng bài nghiệp vụ.

⚠️ Không bấm **Lưu lại** nhiều lần khi thấy chậm; chờ thông báo kết quả ([LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/)).

⚠️ Sửa / xoá chứng từ có thể ảnh hưởng tồn kho, công nợ, sổ sách. Quy tắc riêng (chỉ người tạo được xoá, phiếu đã khoá không sửa được…) xem bài của từng màn.

### Không thấy nút Thêm mới, liên kết Sửa hoặc Xóa 

Nguyên nhân: tài khoản chưa có quyền **Thêm mới** / **Cập nhật** / **Xóa** của màn này.
Cách xử lý: liên hệ quản trị hệ thống xin cấp quyền, nêu rõ màn hình và thao tác.

### Bấm Lưu lại mà cửa sổ không đóng, không có thông báo 

Nguyên nhân: còn ô viền đỏ (có thể ở tab khác của cửa sổ hoặc phải cuộn mới thấy).
Cách xử lý: xem danh sách lỗi dưới cửa sổ, sửa các ô báo đỏ, bấm **Lưu lại** lại.

### "Mã đã tồn tại" hoặc "Lỗi thêm: Mã đã tồn tại." 

Nguyên nhân: mã đã có trong hệ thống, kể cả dòng đang **Ngưng sử dụng**.
Cách xử lý: dùng mã khác, hoặc tìm dòng cũ và **Kích hoạt** lại ([LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/)).

### "Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: dữ liệu đang được dùng ở nơi khác (ví dụ đơn vị tính đã gắn vào hàng hoá), hoặc vừa bị người khác sửa.
Cách xử lý: không xoá; chuyển sang **Ngưng sử dụng** (phần “Thực hiện trên phần mềm”.6).

### "Lỗi xóa: Bạn chỉ được xóa phiếu do mình tạo" 

Nguyên nhân: một số màn chứng từ (ví dụ Phiếu nhập kho) chỉ cho người tạo phiếu xoá phiếu đó.
Cách xử lý: nhờ người tạo phiếu xoá, hoặc báo quản lý.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: quyền vừa bị thu hồi trong lúc đang mở màn hình, hoặc tài khoản thiếu quyền ở thao tác phụ.
Cách xử lý: liên hệ quản trị hệ thống ([LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/)).

### Nút Lưu lại bị mờ 

Nguyên nhân: đang lưu, hoặc cửa sổ đang ở chế độ chỉ xem (không có nút **Lưu lại**).
Cách xử lý: chờ thông báo kết quả; muốn sửa thì đóng cửa sổ và bấm **Sửa**.

## 9. Câu hỏi thường gặp

**Xoá nhầm có lấy lại được không?**
Không có chức năng khôi phục trên giao diện. Báo ngay quản trị hệ thống kèm mã dữ liệu và thời gian xoá.

**Vì sao danh mục mình vừa thêm không có trong ô chọn khi lập phiếu?**
Kiểm tra ô **Kích hoạt** của danh mục; mở lại cửa sổ lập phiếu (hoặc bấm **Tải lại**) để nạp danh sách mới.

**Nhấp đúp và bấm Sửa khác nhau thế nào?**
Nhấp đúp chỉ để xem, không lưu được. **Sửa** mở cửa sổ cho phép lưu.

## 10. Công việc tiếp theo

```text
Đã thêm / sửa xong
   ├──► Đính kèm chứng từ gốc   → GEN-12
   ├──► In phiếu                → GEN-06
   └──► Kiểm tra lại danh sách  → GEN-04
```

**Tiếp theo:** [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/) – Hướng dẫn quản lý file đính kèm.

## 11. Bài hướng dẫn liên quan

- [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/) – Hướng dẫn tìm kiếm, lọc, sắp xếp trên danh sách
- [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/) – Hướng dẫn in chứng từ
- [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/) – Hướng dẫn xử lý lỗi thường gặp
- [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/) – Hướng dẫn quản lý file đính kèm
