---
title: "TỔNG QUAN MÀN HÌNH HÀNG TRƠN"
date: "2026-11-07"
summary: "Màn hình HÀNG TRƠN - DANH SÁCH liệt kê hàng trơn: ván nền chưa gia công (MDF, HMR, LDF…) mua từ nhà cung cấp, phân biệt bằng tiêu chuẩn, quy cách dày x rộng x dài, NCC và loại hàng."
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

Màn hình **HÀNG TRƠN - DANH SÁCH** liệt kê **hàng trơn**: ván nền chưa gia công (MDF, HMR, LDF…) mua từ nhà cung cấp, phân biệt bằng **tiêu chuẩn**, **quy cách dày x rộng x dài**, **NCC** và **loại hàng**. Hàng trơn là nguyên liệu đầu vào của gia công thành **thành phẩm** (TL-D11).

Điểm cần nhớ:

- **Mã và tên hàng trơn do hệ thống sinh** từ các thành phần trên (xem [HƯỚNG DẪN THÊM, SỬA HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-1-huong-dan-them-sua-hang-tron/)). Bạn không gõ mã.
- Số lượng thường rất lớn (hàng nghìn dòng) nên dùng **Tìm kiếm…** và lọc cột để tìm.
- Hàng trơn có **ĐVT**, **ĐVT 1** và **Quy đổi 1** (ví dụ *Tấm* và *Kiện*, 1 kiện = 53 tấm) và **M³/TẤM** tự tính.

Màn hình có sẵn công cụ làm việc theo lô: **Import Excel** ([HƯỚNG DẪN IMPORT HÀNG TRƠN TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d09-3-huong-dan-import-hang-tron-tu-excel-anh/)) và **Sửa nhiều / Xóa nhiều** ([HƯỚNG DẪN SỬA, XOÁ NHIỀU HÀNG TRƠN CÙNG LÚC](/bai-viet/2026-11-07-tl-d09-2-huong-dan-sua-xoa-nhieu-hang-tron-cung-luc/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Hàng trơn**.
- Muốn thêm hàng trơn: đã có **Tiêu chuẩn** (TL-D03), **Đơn vị tính** (TL-D04); nên có **Loại hàng** (TL-D05) nếu hàng có loại.

## 2. Mở chức năng

**Hàng hoá → Hàng trơn**

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

![Hình 1: Danh sách hàng trơn theo bộ lọc hiện tại](/posts/2026-11-07-tl-d09-0-tong-quan-man-hinh-hang-tron/hinh-01-man-hinh-hang-tron.png)

- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM HÀNG TRƠN**; Hướng dẫn: [HƯỚNG DẪN THÊM, SỬA HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-1-huong-dan-them-sua-hang-tron/)
- **Import Excel**: Chức năng: Mở cửa sổ **HÀNG TRƠN - IMPORT** (Excel hoặc ảnh / PDF); Hướng dẫn: [HƯỚNG DẪN IMPORT HÀNG TRƠN TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d09-3-huong-dan-import-hang-tron-tu-excel-anh/)
- **Biểu tượng Xuất Excel, Trình chọn cột, Tìm kiếm…**: Chức năng: Xuất, ẩn / hiện cột, tìm; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/), [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa, xoá một dòng; Hướng dẫn: [HƯỚNG DẪN THÊM, SỬA HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-1-huong-dan-them-sua-hang-tron/)
- **Ô tick đầu dòng**: Chức năng: Chọn nhiều dòng để hiện **Xóa nhiều**, **Sửa nhiều**; Hướng dẫn: [HƯỚNG DẪN SỬA, XOÁ NHIỀU HÀNG TRƠN CÙNG LÚC](/bai-viet/2026-11-07-tl-d09-2-huong-dan-sua-xoa-nhieu-hang-tron-cung-luc/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Xóa** (hiện theo quyền)
- **Tiêu chuẩn**: Ý nghĩa: Tên tiêu chuẩn (ví dụ *MDF E2*)
- **Loại hàng**: Ý nghĩa: Tên loại hàng (có thể trống)
- **NCC**: Ý nghĩa: Nhà cung cấp (chữ nhập tự do, ví dụ `NK`)
- **Dày, Rộng, Dài**: Ý nghĩa: Kích thước (mm)
- **ĐVT, ĐVT 1, Quy đổi 1**: Ý nghĩa: Đơn vị chính, đơn vị phụ, số ĐVT chính trong 1 ĐVT phụ
- **M³/TẤM**: Ý nghĩa: Thể tích một tấm (m³), tự tính = dày x rộng x dài / 1.000.000.000
- **Mã hàng trơn, Tên hàng trơn**: Ý nghĩa: Mã, tên do hệ thống sinh
- **Tên in**: Ý nghĩa: Tên in trên chứng từ
- **Mã hàng NCC**: Ý nghĩa: Mã của nhà cung cấp
- **Đơn giá, Định mức tồn, Trọng lượng**: Ý nghĩa: Giá nhập tham khảo, mức tồn an toàn, trọng lượng (kg)
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n**. Danh sách hiện cả dòng **Ngưng sử dụng**. Nhấp đúp vào một dòng mở cửa sổ chỉ xem **THÔNG TIN HÀNG TRƠN**. Danh sách **không có** cột Nhóm hàng hóa, Quyền sở hữu, Loại NVL.

## 4. Trình tự công việc

```text
Tiêu chuẩn + Loại hàng + Đơn vị tính + Nhóm hàng hóa (danh mục)
            ↓
Hàng trơn (TL-D09): nhập tiêu chuẩn, dày, rộng, dài, NCC → mã + tên tự sinh
      ├── Thêm mới / Sửa ──► TL-D09.1
      ├── Import Excel ──► TL-D09.3
      └── Chọn nhiều dòng ──► Sửa nhiều / Xóa nhiều (TL-D09.2)
            ↓
Chứng từ mua, kho; gia công thành Thành phẩm (TL-D11)
```

## 5. Thực hiện trên phần mềm

- **Tạo một hàng trơn**: Cách làm: **Thêm mới** → chọn tiêu chuẩn, nhập kích thước, NCC; Bài hướng dẫn: [HƯỚNG DẪN THÊM, SỬA HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-1-huong-dan-them-sua-hang-tron/)
- **Tạo nhiều hàng trơn từ file / ảnh báo giá**: Cách làm: **Import Excel**; Bài hướng dẫn: [HƯỚNG DẪN IMPORT HÀNG TRƠN TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d09-3-huong-dan-import-hang-tron-tu-excel-anh/)
- **Đổi tiêu chuẩn, loại hàng, ĐVT, trạng thái cho nhiều dòng**: Cách làm: Chọn dòng → **Sửa nhiều**; Bài hướng dẫn: [HƯỚNG DẪN SỬA, XOÁ NHIỀU HÀNG TRƠN CÙNG LÚC](/bai-viet/2026-11-07-tl-d09-2-huong-dan-sua-xoa-nhieu-hang-tron-cung-luc/)
- **Xoá nhiều dòng**: Cách làm: Chọn dòng → **Xóa nhiều**; Bài hướng dẫn: [HƯỚNG DẪN SỬA, XOÁ NHIỀU HÀNG TRƠN CÙNG LÚC](/bai-viet/2026-11-07-tl-d09-2-huong-dan-sua-xoa-nhieu-hang-tron-cung-luc/)
- **Ngưng dùng một hàng**: Cách làm: **Sửa** → bỏ tick **Kích hoạt**; Bài hướng dẫn: phần “Những điều cần lưu ý”

### Điều kiện riêng khi sửa, xoá

- **Sửa kích thước, tiêu chuẩn, NCC hoặc loại hàng**: mã và tên hàng được sinh lại theo giá trị mới ([HƯỚNG DẪN THÊM, SỬA HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-1-huong-dan-them-sua-hang-tron/)). Mã mới phải không trùng hàng khác.
- **Ngưng sử dụng**: hàng không còn hiện trong ô chọn hàng khi lập chứng từ mới; chứng từ cũ giữ nguyên.
- **Xóa**: chỉ khi hàng chưa có chứng từ, giá hay định mức nào dùng.

## 6. Giải thích các thông tin trên màn hình

Các trường nhập khi thêm, sửa: xem [HƯỚNG DẪN THÊM, SỬA HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-1-huong-dan-them-sua-hang-tron/) phần “Giải thích các thông tin trên màn hình”. Hai cột dễ nhầm ở danh sách:

- **Quy đổi 1**: Ý nghĩa: Số ĐVT chính trong 1 ĐVT 1; Lưu ý: Ví dụ ĐVT *Tấm*, ĐVT 1 *Kiện*, quy đổi 53: 1 kiện = 53 tấm
- **M³/TẤM**: Ý nghĩa: Thể tích một tấm; Lưu ý: Tự tính từ dày, rộng, dài (mm); không nhập tay

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Hàng trơn dùng để làm gì và đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Mã, tên hàng trơn là tài sản chung của mọi chứng từ.** Đổi tiêu chuẩn, kích thước, NCC hoặc loại hàng của một hàng đã giao dịch làm mã đổi theo; hãy chắc chắn trước khi sửa.

⚠️ Hàng trơn **Ngưng sử dụng** không còn hiện ở ô chọn hàng trên chứng từ mới. Nếu thấy "mất" hàng khi lập phiếu, kiểm tra cột **Trạng thái** ở đây.

⚠️ Hàng trơn đã có chứng từ, định mức hoặc bảng giá dùng thì **không xoá được**. Muốn ngưng dùng thì bỏ tick **Kích hoạt**.

⚠️ Hộp xác nhận xoá hỏi **Bạn có muốn xóa hàng hóa này?** đúng với màn này.

### "Lỗi xóa.: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: hàng trơn đang có chứng từ, định mức hoặc bảng giá.
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá. Với **Xóa nhiều**, chỉ cần một dòng bị vướng thì **không xoá dòng nào** ([HƯỚNG DẪN SỬA, XOÁ NHIỀU HÀNG TRƠN CÙNG LÚC](/bai-viet/2026-11-07-tl-d09-2-huong-dan-sua-xoa-nhieu-hang-tron-cung-luc/)).

## 10. Câu hỏi thường gặp

**Mã hàng trơn trông thế nào?**
Ví dụ tiêu chuẩn *MDF E2*, 17 x 1220 x 2440, NCC `NK`, loại hàng *GỬI HÀNG* cho mã `MDFE2(17x1220x2440)NKGUIHANG`, tên *MDF E2 (17x1220x2440) NK GỬI HÀNG*. Công thức đầy đủ ở [HƯỚNG DẪN THÊM, SỬA HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-1-huong-dan-them-sua-hang-tron/).

**Có thể tìm hàng theo mã NCC không?**
Có, cột **Mã hàng NCC** nằm trong **Tìm kiếm…** và bộ lọc cột.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN THÊM, SỬA HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-1-huong-dan-them-sua-hang-tron/) – Hướng dẫn thêm, sửa hàng trơn.

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN THÊM, SỬA HÀNG TRƠN](/bai-viet/2026-11-07-tl-d09-1-huong-dan-them-sua-hang-tron/) – Thêm, sửa hàng trơn (công thức sinh mã, tên)
- [HƯỚNG DẪN SỬA, XOÁ NHIỀU HÀNG TRƠN CÙNG LÚC](/bai-viet/2026-11-07-tl-d09-2-huong-dan-sua-xoa-nhieu-hang-tron-cung-luc/) – Sửa, xoá nhiều hàng trơn
- [HƯỚNG DẪN IMPORT HÀNG TRƠN TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d09-3-huong-dan-import-hang-tron-tu-excel-anh/) – Import hàng trơn từ Excel / ảnh
- [TỔNG QUAN MÀN HÌNH TIÊU CHUẨN](/bai-viet/2026-11-07-tl-d03-0-tong-quan-man-hinh-tieu-chuan/) – Tổng quan màn hình Tiêu chuẩn
- [TỔNG QUAN MÀN HÌNH LOẠI HÀNG](/bai-viet/2026-11-07-tl-d05-0-tong-quan-man-hinh-loai-hang/) – Tổng quan màn hình Loại hàng
- [TỔNG QUAN THÀNH PHẨM](/bai-viet/2026-11-07-tl-d11-0-tong-quan-thanh-pham/) – Tổng quan màn hình Thành phẩm
