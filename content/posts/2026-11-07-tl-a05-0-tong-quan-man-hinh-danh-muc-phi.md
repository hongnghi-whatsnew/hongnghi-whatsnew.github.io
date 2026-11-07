---
title: "TỔNG QUAN MÀN HÌNH DANH MỤC PHÍ"
date: "2026-11-07"
summary: "Màn hình Danh mục phí (tiêu đề DANH MỤC PHÍ - DANH SÁCH) liệt kê các loại phí phát sinh trong quá trình gia công và đơn giá mặc định của từng loại (ví dụ phí bốc xếp, phí vận chuyển nội bộ)."
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

Màn hình **Danh mục phí** (tiêu đề **DANH MỤC PHÍ - DANH SÁCH**) liệt kê các **loại phí phát sinh** trong quá trình gia công và **đơn giá mặc định** của từng loại (ví dụ phí bốc xếp, phí vận chuyển nội bộ). Mỗi dòng gồm **mã**, **tên** và **phí**.

Danh mục này được dùng ở **phiếu nhập kho gia công** (sổ tay Sản xuất): ở cửa sổ **chi phí phát sinh** của phiếu, mỗi dòng chọn một loại phí ở cột **NỘI DUNG**; ô **ĐƠN GIÁ** tự điền bằng số tiền **PHÍ** của loại đó, bạn nhập **SL** để ra **T.TIỀN**.

Bạn dùng màn hình này khi cần thêm một loại phí phát sinh mới, đổi đơn giá mặc định, hoặc ngưng sử dụng một loại phí.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Danh mục phí**.
- **Chi nhánh / Đơn vị** đã có (TL-A01).

## 2. Mở chức năng

**Thiết lập danh mục → Danh mục phí**

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

![Hình 1: Danh sách danh mục phí theo bố cục và bộ lọc hiện tại](/posts/2026-11-07-tl-a05-0-tong-quan-man-hinh-danh-muc-phi/hinh-01-man-hinh-danh-muc-phi-danh-sach.png)

- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM CHI PHÍ**; Hướng dẫn: phần “Thực hiện trên phần mềm”, [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá một dòng; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Dòng lọc dưới tiêu đề cột, phân trang**: Chức năng: Lọc từng cột; 10 / 15 / 20 dòng một trang; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Xóa** (hiện theo quyền)
- **Mã danh mục**: Ý nghĩa: Mã của loại phí
- **Tên danh mục**: Ý nghĩa: Tên loại phí
- **Chi phí**: Ý nghĩa: Đơn giá mặc định (số, có dấu phân cách hàng nghìn)
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Danh sách hiện cả dòng **Ngưng sử dụng**; không có dòng tổng cộng. Nhấp đúp vào một dòng mở cửa sổ chỉ xem **THÔNG TIN CHI PHÍ**.

![Hình 2: cửa sổ thêm danh mục phí chưa nhập và chưa lưu](/posts/2026-11-07-tl-a05-0-tong-quan-man-hinh-danh-muc-phi/hinh-02-form-them-chi-phi.png)

- **MÃ**: Ý nghĩa: Bắt buộc, không trùng
- **TÊN**: Ý nghĩa: Bắt buộc
- **PHÍ**: Ý nghĩa: Đơn giá mặc định, có thể để 0
- **GHI CHÚ**: Ý nghĩa: Tuỳ chọn
- **Ô Kích hoạt**: Ý nghĩa: Bỏ tick = **Ngưng sử dụng**
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

Tiêu đề cửa sổ là **THÊM CHI PHÍ**, **CẬP NHẬT CHI PHÍ**, **THÔNG TIN CHI PHÍ** (không ghi chữ "danh mục").

## 4. Trình tự công việc

```text
Danh mục phí (TL-A05): mã, tên, PHÍ mặc định
      ↓
Phiếu nhập kho gia công (Sản xuất) ──► cửa sổ chi phí phát sinh
      ↓
Chọn NỘI DUNG ──► ĐƠN GIÁ = PHÍ mặc định ──► nhập SL ──► T.TIỀN
```

### Khai báo loại phí

**Bước 1 –** Nhập **MÃ** (viết liền, không khoảng trắng) và **TÊN**. Mã được kiểm trùng ngay khi rời ô mã.

**Bước 2 –** Nhập **PHÍ** (số tiền mặc định, định dạng `#,##0`). Nhập 0 nếu mỗi lần phát sinh đơn giá khác nhau; việc để trống có được chấp nhận còn cần thử trên bản triển khai; khi lập phiếu bạn vẫn sửa được ô **ĐƠN GIÁ**.

**Bước 3 –** Lưu. Loại phí **Kích hoạt** mới chọn được ở phiếu nhập kho gia công.

### Sửa, ngưng sử dụng, xoá

- Đổi **PHÍ** chỉ áp dụng cho các lần chọn **sau đó**: phiếu đã lập giữ nguyên đơn giá đã ghi.
- Bỏ tick **Kích hoạt** để ngưng dùng: loại phí không còn trong danh sách chọn của phiếu mới.
- Chỉ xoá được loại phí **chưa dùng ở phiếu nào**. Đã dùng thì chuyển sang **Ngưng sử dụng**.

- **Nhập chi phí phát sinh vào phiếu nhập kho gia công**: Bài hướng dẫn: Sổ tay Sản xuất – Phiếu nhập kho gia công
- **Tìm, lọc, chọn cột**: Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Thêm, sửa, xoá, xem chi tiết**: Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

## 6. Giải thích các thông tin trên màn hình

- **Mã**: Ý nghĩa: Mã của loại phí; Bắt buộc: Có; Lưu ý: Không khoảng trắng; **duy nhất toàn hệ thống**, không phân biệt hoa / thường (kể cả dòng ngưng dùng). Không có giới hạn độ dài tối thiểu. Mã tự nhập, hệ thống không tự sinh
- **Tên**: Ý nghĩa: Tên loại phí; Bắt buộc: Có
- **Phí**: Ý nghĩa: Đơn giá mặc định; Bắt buộc: Không; Lưu ý: Số, mặc định 0
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

Khi thêm, hệ thống ghi loại phí thuộc **chi nhánh đang làm việc**, nhưng danh sách **không lọc theo chi nhánh**.

## 7. Kiểm tra sau khi thực hiện

Loại phí được lưu và chọn được ở cửa sổ chi phí phát sinh của phiếu nhập kho gia công, đơn giá tự điền theo **PHÍ**.

## 8. Những điều cần lưu ý

⚠️ **Danh mục dùng chung cho các chi nhánh trong cùng cơ sở dữ liệu ERP.** Đổi tên hoặc phí ở đây ảnh hưởng các chi nhánh trong cùng cơ sở dữ liệu ERP khi lập phiếu mới.

⚠️ Loại phí đã dùng ở phiếu nhập kho gia công **không xoá được**; dùng **Ngưng sử dụng**.

⚠️ Hộp xác nhận xoá hỏi **Bạn có muốn xóa danh mục này?**.

### "Vùi lòng nhập mã" / "Vùi lòng nhập tên" 

Nguyên nhân: để trống **MÃ** hoặc **TÊN** (chữ "Vùi" là lỗi chính tả của hệ thống, nghĩa là "Vui").
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "Mã không hợp lệ. Viết liền không dấu và không chứa kí tự đặc biệt." 

Nguyên nhân: mã có khoảng trắng.
Cách xử lý: viết liền, ví dụ `PHIBOCXEP`.

### "Mã đã tồn tại" 

Nguyên nhân: đã có loại phí cùng mã (kể cả dòng ngưng dùng).
Cách xử lý: đặt mã khác, hoặc tìm dòng cũ và tick lại **Kích hoạt**.

### "Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: loại phí đã được dùng ở phiếu nhập kho gia công.
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá.

## 10. Câu hỏi thường gặp

**Danh mục phí khác nội dung thu chi thế nào?**
**Danh mục phí** là loại phí có **đơn giá mặc định**, dùng ở phiếu nhập kho gia công. **Nội dung thu chi** là khoản mục của phiếu thu / phiếu chi (TL-A04).

**Đổi PHÍ có làm đổi các phiếu đã lập không?**
Không. Đơn giá được chép vào phiếu lúc chọn.

## 11. Công việc tiếp theo

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ](/bai-viet/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/) – Tổng quan màn hình Tài khoản, quỹ.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH NỘI DUNG THU CHI](/bai-viet/2026-11-07-tl-a04-0-tong-quan-man-hinh-noi-dung-thu-chi/) – Tổng quan màn hình Nội dung thu chi
- [TỔNG QUAN MÀN HÌNH ĐƠN VỊ GIA CÔNG](/bai-viet/2026-11-07-tl-a03-0-tong-quan-man-hinh-don-vi-gia-cong/) – Tổng quan màn hình Đơn vị gia công
- Sổ tay Sản xuất – Phiếu nhập kho gia công
