---
title: "TỔNG QUAN MÀN HÌNH NỘI DUNG THU CHI"
date: "2026-11-07"
summary: "Màn hình Nội dung thu chi (tiêu đề NỘI DUNG THU CHI - DANH SÁCH) liệt kê các khoản mục thu và chi mà công ty dùng để ghi lý do trên chứng từ tiền (ví dụ Chi phí vận chuyển, Chi phí điện nước sản xuất, Thu tiền khách hàng)."
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

Màn hình **Nội dung thu chi** (tiêu đề **NỘI DUNG THU CHI - DANH SÁCH**) liệt kê các **khoản mục thu và chi** mà công ty dùng để ghi lý do trên chứng từ tiền (ví dụ *Chi phí vận chuyển*, *Chi phí điện nước sản xuất*, *Thu tiền khách hàng*). Mỗi dòng gồm **mã**, **tên** và **loại thu chi**.

Danh mục này được dùng ở:

- **Phiếu thu, phiếu chi, phiếu cấn trừ, chuyển tiền nội bộ** (sổ tay Kế toán): chọn nội dung cho từng chứng từ.
- **Thống kê thu chi** (KT-B01): tổng hợp thu, chi theo nội dung.
- **Cấu hình hạch toán** (TL-A11): mỗi nội dung gắn với tài khoản kế toán và khoản mục chi phí để hệ thống ghi **bút toán** khi hạch toán phiếu chi.
- **Định mức** (TL-D10) và **phiếu yêu cầu / nhập kho gia công** (sổ tay Sản xuất): dòng **chi phí khác** chọn nội dung thu chi.

Bạn dùng màn hình này khi cần thêm một khoản mục thu / chi mới, sửa tên, hoặc ngưng sử dụng một nội dung không còn dùng.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Nội dung thu chi**.
- **Chi nhánh / Đơn vị** đã có (TL-A01).
- Muốn nội dung hạch toán đúng tài khoản: **Hệ thống tài khoản** (TL-A10) đã có để gắn ở **Cấu hình hạch toán** (TL-A11).

## 2. Mở chức năng

**Thiết lập danh mục → Nội dung thu chi**

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

![Hình 1: Danh sách nội dung thu chi theo bố cục và bộ lọc hiện tại](/posts/2026-11-07-tl-a04-0-tong-quan-man-hinh-noi-dung-thu-chi/hinh-01-man-hinh-noi-dung-thu-chi-danh-sach.png)

- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM NỘI DUNG THU CHI**; Hướng dẫn: phần “Thực hiện trên phần mềm”, [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá một dòng; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Dòng lọc dưới tiêu đề cột, phân trang**: Chức năng: Lọc từng cột; 10 / 15 / 20 dòng một trang; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Xóa** (hiện theo quyền)
- **Mã nội dung thu chi**: Ý nghĩa: Mã của nội dung
- **Tên nội dung thu chi**: Ý nghĩa: Tên khoản mục
- **Loại thu chi**: Ý nghĩa: **Thu** (chữ xanh) hoặc **Chi** (chữ đỏ); nội dung loại `luongtinh` hiện ô trống
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n**. Danh sách hiện cả dòng **Ngưng sử dụng**. Nhấp đúp vào một dòng mở cửa sổ chỉ xem **THÔNG TIN NỘI DUNG THU CHI**.

![Hình 2: cửa sổ thêm nội dung thu chi chưa nhập và chưa lưu](/posts/2026-11-07-tl-a04-0-tong-quan-man-hinh-noi-dung-thu-chi/hinh-02-form-them-noi-dung-thu-chi.png)

- **MÃ NỘI DUNG**: Ý nghĩa: Bắt buộc, không trùng
- **TÊN NỘI DUNG**: Ý nghĩa: Bắt buộc
- **LOẠI THU/CHI**: Ý nghĩa: Bắt buộc, chọn `thu`, `chi` hoặc `luongtinh`
- **GHI CHÚ**: Ý nghĩa: Tuỳ chọn
- **Ô Kích hoạt**: Ý nghĩa: Bỏ tick = **Ngưng sử dụng**
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

Tiêu đề cửa sổ: **THÊM NỘI DUNG THU CHI**, **CẬP NHẬT NỘI DUNG THU CHI**, **THÔNG TIN NỘI DUNG THU CHI** (chỉ xem).

## 4. Trình tự công việc

```text
Nội dung thu chi (TL-A04)
      ↓
Phiếu thu · Phiếu chi · Phiếu cấn trừ · Chuyển tiền nội bộ (Kế toán)
      ↓
Cấu hình hạch toán (TL-A11): nội dung → tài khoản kế toán / khoản mục
      ↓
Hạch toán ──► bút toán · Thống kê thu chi (KT-B01)
```

### Khai báo nội dung thu chi

**Bước 1 –** Nhập **MÃ NỘI DUNG** (viết liền, không khoảng trắng, ít nhất 2 ký tự) và **TÊN NỘI DUNG** (ít nhất 2 ký tự). Mã được kiểm trùng ngay khi rời ô mã.

**Bước 2 –** Chọn **LOẠI THU/CHI**:

- **`thu`**: Dùng cho: Khoản **thu** (hiện **Thu** trên danh sách)
- **`chi`**: Dùng cho: Khoản **chi** (hiện **Chi** trên danh sách)
- **`luongtinh`**: Dùng cho: Dành cho khoản liên quan lương; hiện ô trống ở cột **Loại thu chi** — chỉ chọn khi kế toán đã thống nhất cách dùng

**Bước 3 –** Lưu. Sau đó nhờ kế toán gắn nội dung vào tài khoản kế toán ở **Cấu hình hạch toán** (TL-A11), nếu chưa cấu hình, cần kế toán kiểm tra tài khoản được đề xuất trên phiếu và kết quả hạch toán trước khi sử dụng; không coi tài khoản mặc định là luôn đúng nghiệp vụ.

### Sửa, ngưng sử dụng, xoá

- Đổi **TÊN NỘI DUNG** đổi tên hiển thị ở mọi chứng từ cũ và mới. Không nên đổi nghĩa của nội dung đã dùng.
- Bỏ tick **Kích hoạt** để ngưng dùng: nội dung không còn để chọn khi lập chứng từ mới, chứng từ cũ giữ nguyên.
- Chỉ xoá được nội dung **chưa dùng ở đâu**: phiếu thu, phiếu chi, phiếu cấn trừ, chuyển tiền nội bộ, định mức, phiếu gia công, cấu hình hạch toán. Đã dùng thì chuyển sang **Ngưng sử dụng**.

- **Gắn nội dung vào tài khoản kế toán**: Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH CẤU HÌNH HẠCH TOÁN](/bai-viet/2026-11-07-tl-a11-0-tong-quan-man-hinh-cau-hinh-hach-toan/)
- **Lập phiếu thu, phiếu chi**: Bài hướng dẫn: Sổ tay Kế toán (KT-A03, KT-A04)
- **Tìm, lọc, chọn cột**: Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Thêm, sửa, xoá, xem chi tiết**: Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

## 6. Giải thích các thông tin trên màn hình

- **Mã nội dung**: Ý nghĩa: Mã của khoản mục; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự, không khoảng trắng; **duy nhất toàn hệ thống**, không phân biệt hoa / thường (kể cả dòng ngưng dùng). Mã tự nhập, hệ thống không tự sinh
- **Tên nội dung**: Ý nghĩa: Tên khoản mục; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự
- **Loại thu/chi**: Ý nghĩa: Phân loại thu / chi; Bắt buộc: Có; Lưu ý: Chọn `thu`, `chi` hoặc `luongtinh`
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

Tài khoản kế toán của nội dung **không** nhập ở cửa sổ này; xem **Cấu hình hạch toán** (TL-A11). Khi thêm, hệ thống ghi nội dung thuộc **chi nhánh đang làm việc**, nhưng danh sách **không lọc theo chi nhánh**.

## 7. Kiểm tra sau khi thực hiện

Nội dung thu chi được lưu, chọn được ở các chứng từ tiền và (sau khi cấu hình) hạch toán đúng tài khoản.

## 8. Những điều cần lưu ý

⚠️ **Danh mục dùng chung cho các chi nhánh trong cùng cơ sở dữ liệu ERP.** Đổi tên nội dung ảnh hưởng báo cáo thu chi của các chi nhánh trong cùng cơ sở dữ liệu ERP.

⚠️ Nội dung đã có chứng từ **không xoá được**; dùng **Ngưng sử dụng**.

⚠️ Nội dung ngưng sử dụng vẫn nằm trong danh sách của màn này; chứng từ cũ vẫn hiển thị tên nội dung.

⚠️ Hộp xác nhận xoá hỏi **Bạn có muốn xóa nội dung thu chi này?**.

### "Nhập mã nội dung thu chi" / "Mã nội dung thu chi quá ngắn" / "Nhập tên nội dung thu chi" / "Tên nội dung thu chi quá ngắn" / "Chọn loại thu chi" 

Nguyên nhân: để trống hoặc nhập quá ngắn.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "Mã không hợp lệ. Viết liền không dấu và không chứa kí tự đặc biệt." 

Nguyên nhân: mã có khoảng trắng.
Cách xử lý: viết liền, ví dụ `CHIVANCHUYEN`.

### "Mã đã tồn tại" 

Nguyên nhân: đã có nội dung cùng mã (kể cả dòng ngưng dùng).
Cách xử lý: đặt mã khác, hoặc tìm dòng cũ và tick lại **Kích hoạt**.

### "Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: nội dung đã dùng ở chứng từ, định mức hoặc cấu hình hạch toán.
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá.

## 10. Câu hỏi thường gặp

**Nội dung thu chi khác danh mục phí thế nào?**
**Nội dung thu chi** là khoản mục của phiếu thu / phiếu chi (có hạch toán). **Danh mục phí** là các loại phí phát sinh có sẵn **đơn giá** dùng ở phiếu nhập kho gia công (TL-A05).

## 11. Công việc tiếp theo

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH DANH MỤC PHÍ](/bai-viet/2026-11-07-tl-a05-0-tong-quan-man-hinh-danh-muc-phi/) – Tổng quan màn hình Danh mục phí.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH DANH MỤC PHÍ](/bai-viet/2026-11-07-tl-a05-0-tong-quan-man-hinh-danh-muc-phi/) – Tổng quan màn hình Danh mục phí
- [TỔNG QUAN MÀN HÌNH TÀI KHOẢN, QUỸ](/bai-viet/2026-11-07-tl-a06-0-tong-quan-man-hinh-tai-khoan-quy/) – Tổng quan màn hình Tài khoản, quỹ
- [TỔNG QUAN MÀN HÌNH HỆ THỐNG TÀI KHOẢN](/bai-viet/2026-11-07-tl-a10-0-tong-quan-man-hinh-he-thong-tai-khoan/) – Tổng quan màn hình Hệ thống tài khoản
- [TỔNG QUAN MÀN HÌNH CẤU HÌNH HẠCH TOÁN](/bai-viet/2026-11-07-tl-a11-0-tong-quan-man-hinh-cau-hinh-hach-toan/) – Tổng quan màn hình Cấu hình hạch toán
- Sổ tay Kế toán – Phiếu thu, Phiếu chi, Thống kê thu chi

### Loại luongtinh là gì?

Đây là một giá trị có trong danh sách lựa chọn; hãy hỏi kế toán trước khi sử dụng để xác nhận đúng mục đích nghiệp vụ.
