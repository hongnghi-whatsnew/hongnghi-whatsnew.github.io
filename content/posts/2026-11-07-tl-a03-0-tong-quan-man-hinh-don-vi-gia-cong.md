---
title: "TỔNG QUAN MÀN HÌNH ĐƠN VỊ GIA CÔNG"
date: "2026-11-07"
summary: "Màn hình Đơn vị gia công (tiêu đề ĐƠN VỊ GIA CÔNG - DANH SÁCH) liệt kê các đơn vị nhận gia công hàng cho công ty: xưởng gia công bên ngoài hoặc bộ phận gia công tại kho của công ty."
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

Màn hình **Đơn vị gia công** (tiêu đề **ĐƠN VỊ GIA CÔNG - DANH SÁCH**) liệt kê các đơn vị **nhận gia công** hàng cho công ty: xưởng gia công bên ngoài hoặc bộ phận gia công tại kho của công ty. Mỗi đơn vị có mã, tên, thông tin liên hệ, tài khoản ngân hàng và **một kho gia công riêng**.

Danh mục này được dùng ở:

- **Phiếu yêu cầu gia công, phiếu xuất kho gia công, phiếu nhập kho gia công** (sổ tay Sản xuất): chọn đơn vị gia công và kho gia công của đơn vị đó.
- **Bảng giá gia công** (sổ tay Sản xuất): giá gia công theo từng đơn vị.
- **Phiếu thu, phiếu chi, phiếu cấn trừ** (sổ tay Kế toán): đơn vị gia công là một đối tượng có công nợ, xem ở **Công nợ gia công** (KT-C02).
- **Kết nối đối tác gia công** (TL-F01): đơn vị gia công có thể là đối tác kết nối.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Đơn vị gia công**.
- **Kho hàng** (TL-A09) của chi nhánh đã có và bạn được phân quyền dùng kho đó: mỗi đơn vị gia công **bắt buộc** chọn một kho gia công, nên phải tạo kho trước.
- Kho định chọn **chưa gán** cho đơn vị gia công nào khác.

## 2. Mở chức năng

**Thiết lập danh mục → Đơn vị gia công**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Hình 1: ĐƠN VỊ GIA CÔNG - DANH SÁCH — chỉ xem; đã che thông tin nhạy cảm.](/posts/2026-11-07-tl-a03-0-tong-quan-man-hinh-don-vi-gia-cong/ui-20261026-tl-a03-ds-figure-01.png)

- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM ĐƠN VỊ GIA CÔNG**; Hướng dẫn: phần “Thực hiện trên phần mềm”, [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Import Excel**: Chức năng: Mở cửa sổ **ĐƠN VỊ GIA CÔNG - IMPORT TỪ EXCEL**; Hướng dẫn: [HƯỚNG DẪN IMPORT ĐƠN VỊ GIA CÔNG TỪ EXCEL](/bai-viet/2026-11-07-tl-a03-2-huong-dan-import-don-vi-gia-cong-tu-excel/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá một dòng; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Dòng lọc dưới tiêu đề cột, phân trang**: Chức năng: Lọc từng cột; 10 / 15 / 20 dòng một trang; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Xóa** (hiện theo quyền)
- **Mã đơn vị gia công**: Ý nghĩa: Mã viết liền
- **Tên đơn vị gia công**: Ý nghĩa: Tên đơn vị
- **SĐT, Địa chỉ, Mã số thuế**: Ý nghĩa: Thông tin liên hệ, thuế
- **Tên ngân hàng, Số tài khoản, Chủ tài khoản**: Ý nghĩa: Tài khoản ngân hàng dùng khi chi trả tiền gia công
- **Kho hàng**: Ý nghĩa: Kho gia công của đơn vị
- **Nhóm GC**: Ý nghĩa: **NGOÀI** (gia công ngoài) hoặc **TẠI KHO** (gia công nội bộ); để trống với đơn vị nạp bằng Excel
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n**. Danh sách hiện cả dòng **Ngưng sử dụng**. Nhấp đúp vào một dòng mở cửa sổ chỉ xem **THÔNG TIN ĐƠN VỊ GIA CÔNG**.

![Hình 2: Biểu mẫu THÊM ĐƠN VỊ GIA CÔNG trống, chưa lưu.](/posts/2026-11-07-tl-a03-0-tong-quan-man-hinh-don-vi-gia-cong/ui-20261026-tl-a03-form-figure-02.png)

- **MÃ ĐƠN VỊ GIA CÔNG, TÊN ĐƠN VỊ GIA CÔNG**: Ý nghĩa: Bắt buộc
- **KHO GIA CÔNG**: Ý nghĩa: Bắt buộc, chọn từ danh sách kho
- **ĐƠN VỊ – ô tick Gia công ngoài**: Ý nghĩa: Tick = gia công ngoài; bỏ tick = tại kho
- **SĐT, MÃ SỐ THUẾ, ĐỊA CHỈ**: Ý nghĩa: Liên hệ
- **SỐ TÀI KHOẢN, NGÂN HÀNG, CHỦ TÀI KHOẢN**: Ý nghĩa: Tài khoản ngân hàng của đơn vị
- **GHI CHÚ, ô Kích hoạt, Lưu lại / Đóng**: Ý nghĩa: Ghi chú, trạng thái, lưu / đóng

Tiêu đề cửa sổ: **THÊM ĐƠN VỊ GIA CÔNG**, **CẬP NHẬT ĐƠN VỊ GIA CÔNG**, **THÔNG TIN ĐƠN VỊ GIA CÔNG** (chỉ xem).

## 4. Trình tự công việc

```text
Kho hàng (TL-A09)  ──► chọn làm KHO GIA CÔNG
      ↓
Đơn vị gia công (TL-A03): mã, tên, ngân hàng, kho gia công
      ↓
Phiếu yêu cầu gia công ──► Xuất kho gia công ──► Nhập kho gia công (Sản xuất)
      ↓
Bảng giá gia công (Sản xuất) · Công nợ gia công, phiếu thu / chi (Kế toán)
```

### Khai báo đơn vị gia công

**Bước 1 –** Nhập **MÃ ĐƠN VỊ GIA CÔNG** (viết liền, không khoảng trắng, ít nhất 2 ký tự) và **TÊN ĐƠN VỊ GIA CÔNG**. Mã được kiểm trùng ngay khi rời ô mã.

**Bước 2 –** Chọn **KHO GIA CÔNG**: gõ để tìm kho. Danh sách chỉ hiện kho đang kích hoạt của chi nhánh đang làm việc mà bạn được phân quyền. Mỗi kho chỉ gán cho **một** đơn vị gia công.

**Bước 3 –** Tick **Gia công ngoài** nếu là xưởng bên ngoài; bỏ tick nếu là bộ phận gia công tại kho của công ty. Giá trị này hiện ở cột **Nhóm GC**.

**Bước 4 –** Nhập thông tin liên hệ và tài khoản ngân hàng (**SĐT**, **MÃ SỐ THUẾ** tối đa 20 ký tự; **SỐ TÀI KHOẢN**, **NGÂN HÀNG**, **CHỦ TÀI KHOẢN**). Các ô này không bắt buộc nhưng cần nếu công ty chi trả tiền gia công qua ngân hàng.

**Bước 5 –** Lưu. Nếu kho đã gán cho đơn vị gia công khác, hệ thống báo lỗi (xem phần “Vướng mắc thường gặp”).

### Sửa, ngưng sử dụng, xoá

- Đổi **KHO GIA CÔNG** vẫn được nếu kho mới chưa gán cho đơn vị khác. Không nên đổi kho khi đơn vị đã có phiếu gia công.
- Bỏ tick **Kích hoạt** để ngưng dùng. Chứng từ cũ giữ nguyên.
- Chỉ xoá được đơn vị gia công **chưa dùng ở đâu** (phiếu gia công, bảng giá, phiếu thu / chi / cấn trừ, công nợ, kết nối đối tác). Đã dùng thì chuyển sang **Ngưng sử dụng**.

- **Thêm nhiều đơn vị một lần**: Bài hướng dẫn: [HƯỚNG DẪN IMPORT ĐƠN VỊ GIA CÔNG TỪ EXCEL](/bai-viet/2026-11-07-tl-a03-2-huong-dan-import-don-vi-gia-cong-tu-excel/)
- **Tạo kho gia công**: Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH KHO HÀNG](/bai-viet/2026-11-07-tl-a09-0-tong-quan-man-hinh-kho-hang/)
- **Tìm, lọc, chọn cột**: Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Thêm, sửa, xoá, xem chi tiết**: Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

## 6. Giải thích các thông tin trên màn hình

- **Mã đơn vị gia công**: Ý nghĩa: Mã viết liền; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự, không khoảng trắng, tối đa 50 ký tự; **duy nhất toàn hệ thống**, không phân biệt hoa / thường (kể cả dòng ngưng dùng). Mã tự nhập, hệ thống không tự sinh
- **Tên đơn vị gia công**: Ý nghĩa: Tên đơn vị; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự
- **Kho gia công**: Ý nghĩa: Kho của đơn vị gia công; Bắt buộc: Có; Lưu ý: Báo "Vui lòng chọn kho gia công" khi để trống. Mỗi kho chỉ gán cho một đơn vị
- **Đơn vị – Gia công ngoài**: Ý nghĩa: Phân loại ngoài / tại kho; Bắt buộc: Không; Lưu ý: Tick = **NGOÀI**, bỏ tick = **TẠI KHO**
- **SĐT**: Ý nghĩa: Điện thoại; Bắt buộc: Không; Lưu ý: Tối đa 20 ký tự
- **Mã số thuế**: Ý nghĩa: Mã số thuế; Bắt buộc: Không; Lưu ý: Tối đa 20 ký tự
- **Số tài khoản, Ngân hàng, Chủ tài khoản**: Ý nghĩa: Tài khoản ngân hàng; Bắt buộc: Không; Lưu ý: Nhập tay, hệ thống không kiểm tra đúng sai
- **Địa chỉ**: Ý nghĩa: Địa chỉ; Bắt buộc: Không
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

## 7. Kiểm tra sau khi thực hiện

Đơn vị gia công được lưu, chọn được ở phiếu gia công, bảng giá gia công và phiếu thu / chi. Kho gia công đã chọn không chọn được cho đơn vị khác.

## 8. Những điều cần lưu ý

⚠️ **Danh mục dùng chung cho các chi nhánh trong cùng cơ sở dữ liệu ERP**, không lọc theo chi nhánh đang làm việc (chi nhánh chỉ được ghi lại lúc thêm).

⚠️ **Mỗi kho chỉ gán cho một đơn vị gia công.** Muốn chuyển kho sang đơn vị khác, phải đổi kho của đơn vị cũ trước.

⚠️ Đơn vị gia công đã được dùng ở **phiếu gia công**, **bảng giá**, **phiếu thu / chi / cấn trừ** hoặc **kết nối đối tác** thì **không xoá được**; dùng **Ngưng sử dụng**.

⚠️ Đơn vị nạp bằng **Import Excel** có cột **Nhóm GC** trống (không phân ngoài / tại kho). Mở **Sửa** để chọn.

⚠️ Hộp xác nhận xoá hỏi **Bạn có muốn xóa đơn vị gia công này?**.

### "Nhập mã đơn vị gia công" / "Mã đơn vị gia công quá ngắn" / "Nhập tên đơn vị gia công" / "Tên đơn vị gia công quá ngắn" / "Vui lòng chọn kho gia công" 

Nguyên nhân: để trống hoặc nhập quá ngắn.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "Mã không hợp lệ. Viết liền không dấu và không chứa kí tự đặc biệt." 

Nguyên nhân: mã có khoảng trắng.
Cách xử lý: viết liền, ví dụ `GCABC01`.

### "Mã đã tồn tại" 

Nguyên nhân: đã có đơn vị gia công cùng mã (kể cả dòng ngưng dùng).
Cách xử lý: đặt mã khác, hoặc tìm dòng cũ và tick lại **Kích hoạt**.

### "Kho đã được sử dụng cho đơn vị khác: Mã đã tồn tại." 

Nguyên nhân: kho gia công bạn chọn đã gán cho một đơn vị gia công khác (phần "Mã đã tồn tại" là câu hệ thống dùng chung, không nói về mã đơn vị).
Cách xử lý: chọn kho khác, hoặc tìm đơn vị đang dùng kho đó trong danh sách.

### "Lỗi xóa.: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: đơn vị gia công đã được dùng ở phiếu gia công, bảng giá, công nợ…
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá.

## 10. Câu hỏi thường gặp

**Đơn vị gia công khác nguồn nhân lực thế nào?**
Đơn vị gia công là **nơi nhận gia công** (có kho, có tài khoản ngân hàng, có công nợ). Nguồn nhân lực là **máy / tổ** thực hiện gia công (TL-A02).

**Nhóm GC NGOÀI và TẠI KHO khác nhau thế nào?**
**NGOÀI** là xưởng gia công bên ngoài; **TẠI KHO** là gia công do công ty tự làm tại kho. Cột **Nhóm GC** thể hiện lựa chọn ngoài / tại kho trên cửa sổ; tác động ở các luồng sử dụng phải được người phụ trách xác nhận.

## 11. Công việc tiếp theo

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH NỘI DUNG THU CHI](/bai-viet/2026-11-07-tl-a04-0-tong-quan-man-hinh-noi-dung-thu-chi/) – Tổng quan màn hình Nội dung thu chi.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN IMPORT ĐƠN VỊ GIA CÔNG TỪ EXCEL](/bai-viet/2026-11-07-tl-a03-2-huong-dan-import-don-vi-gia-cong-tu-excel/) – Hướng dẫn import đơn vị gia công từ Excel
- [TỔNG QUAN MÀN HÌNH NGUỒN NHÂN LỰC](/bai-viet/2026-11-07-tl-a02-0-tong-quan-man-hinh-nguon-nhan-luc/) – Tổng quan màn hình Nguồn nhân lực
- [TỔNG QUAN MÀN HÌNH KHO HÀNG](/bai-viet/2026-11-07-tl-a09-0-tong-quan-man-hinh-kho-hang/) – Tổng quan màn hình Kho hàng
- TL-F01 – Kết nối đối tác gia công
- Sổ tay Sản xuất – Phiếu yêu cầu gia công, Bảng giá gia công
- Sổ tay Kế toán – Công nợ gia công (KT-C02)
