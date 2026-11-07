---
title: "TỔNG QUAN MÀN HÌNH NGUYÊN LIỆU"
date: "2026-11-07"
summary: "Màn hình NGUYÊN LIỆU - DANH SÁCH liệt kê các nguyên liệu (giấy, keo, hoá chất, vật tư dùng để gia công, sản xuất)."
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

Màn hình **NGUYÊN LIỆU - DANH SÁCH** liệt kê các **nguyên liệu** (giấy, keo, hoá chất, vật tư dùng để gia công, sản xuất). Mỗi dòng gồm mã, tên, đơn vị tính, đơn giá và các thông tin quản lý kho.

Điểm cần nhớ:

- **Mã và tên nguyên liệu do người dùng tự đặt**, hệ thống **không sinh tự động** (khác Hàng trơn, Thành phẩm).
- Nguyên liệu được chọn ở **Định mức** (TL-D10) làm nguyên liệu tiêu hao, và ở các chứng từ mua hàng, kho, sản xuất.
- Nguyên liệu có thể gắn **nghiệp vụ** (Sản xuất giấy, Sản xuất keo) và **gia công** (một định mức) để dùng cho phiếu sản xuất tương ứng (xem [HƯỚNG DẪN THÊM, SỬA NGUYÊN LIỆU](/bai-viet/2026-11-07-tl-d08-1-huong-dan-them-sua-nguyen-lieu/)).

Màn hình có sẵn các công cụ làm việc theo lô: **Import Excel** ([HƯỚNG DẪN IMPORT NGUYÊN LIỆU TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d08-3-huong-dan-import-nguyen-lieu-tu-excel-anh/)) và **Sửa nhiều / Xóa nhiều** ([HƯỚNG DẪN SỬA, XOÁ NHIỀU NGUYÊN LIỆU CÙNG LÚC](/bai-viet/2026-11-07-tl-d08-2-huong-dan-sua-xoa-nhieu-nguyen-lieu-cung-luc/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Nguyên liệu**.
- Muốn thêm nguyên liệu: **Đơn vị tính** đã có trong danh mục (TL-D04).

## 2. Mở chức năng

**Hàng hoá → Nguyên liệu**

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

Vùng đánh dấu trên ảnh này:

- **1**: Nội dung được đánh dấu: Tiền tố tìm kiểm tra thực tế
- **2**: Nội dung được đánh dấu: Dòng nguyên liệu kiểm tra thực tế đã lưu, ĐVT Kg
- **3**: Nội dung được đánh dấu: Tổng cộng1

- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM NGUYÊN LIỆU**; Hướng dẫn: [HƯỚNG DẪN THÊM, SỬA NGUYÊN LIỆU](/bai-viet/2026-11-07-tl-d08-1-huong-dan-them-sua-nguyen-lieu/)
- **Import Excel**: Chức năng: Mở cửa sổ **Import Nguyên liệu** (từ file Excel hoặc ảnh / PDF); Hướng dẫn: [HƯỚNG DẪN IMPORT NGUYÊN LIỆU TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d08-3-huong-dan-import-nguyen-lieu-tu-excel-anh/)
- **Biểu tượng Xuất Excel, Trình chọn cột, Tìm kiếm…**: Chức năng: Xuất, ẩn / hiện cột, tìm; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/), [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Cột Thao tác: Lô / Sửa / Xóa**: Chức năng: Xem lô, sửa, xoá một dòng; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Ô tick đầu dòng**: Chức năng: Chọn nhiều dòng để hiện **Xóa nhiều**, **Sửa nhiều**; Hướng dẫn: [HƯỚNG DẪN SỬA, XOÁ NHIỀU NGUYÊN LIỆU CÙNG LÚC](/bai-viet/2026-11-07-tl-d08-2-huong-dan-sua-xoa-nhieu-nguyen-lieu-cung-luc/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Lô** (luôn có), **Sửa**, **Xóa** (theo quyền)
- **Mã nguyên liệu, Tên nguyên liệu, Tên in**: Ý nghĩa: Mã, tên, tên in trên chứng từ
- **Mã hàng HN**: Ý nghĩa: Mã nội bộ (hiện phần số, bỏ chữ *HN* đứng đầu: `HN381` hiện `381`)
- **Mã hàng NCC**: Ý nghĩa: Mã của nhà cung cấp
- **Định lượng, Rộng**: Ý nghĩa: Định lượng (g/m²) và khổ rộng của cuộn giấy, nếu có
- **Đơn vị tính**: Ý nghĩa: Đơn vị chính
- **Đơn giá**: Ý nghĩa: Đơn giá nhập tham khảo
- **Định mức tồn**: Ý nghĩa: Mức tồn kho an toàn
- **Trọng lượng**: Ý nghĩa: Trọng lượng (kg)
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n**. Danh sách hiện cả dòng **Ngưng sử dụng**.

**Menu chuột phải:** trên tiêu đề cột có **Khôi phục bố cục** (đưa cột, sắp xếp, lọc về mặc định); trên một dòng có **Xem lại** (mở cửa sổ chỉ xem). Nhấp đúp vào dòng cũng mở cửa sổ chỉ xem **THÔNG TIN NGUYÊN LIỆU**.

- **Tiêu đề CHI TIẾT LÔ HÀNG: <mã nguyên liệu>**: Ý nghĩa: Mở bằng liên kết **Lô** ở cột Thao tác
- **Cột Số lô, HSD**: Ý nghĩa: Các lô của nguyên liệu và hạn sử dụng. Cửa sổ chỉ để xem

## 4. Trình tự công việc

```text
Nguyên liệu (TL-D08)
      ├── Thêm mới / Sửa ──► cửa sổ NGUYÊN LIỆU (TL-D08.1)
      ├── Import Excel ──► nhiều dòng một lần (TL-D08.3)
      ├── Chọn nhiều dòng ──► Sửa nhiều / Xóa nhiều (TL-D08.2)
      └── Lô ──► xem số lô, HSD
            ↓
Định mức (TL-D10): chọn nguyên liệu tiêu hao
Chứng từ mua hàng, kho, sản xuất: chọn nguyên liệu đang Kích hoạt
```

## 5. Thực hiện trên phần mềm

- **Tạo một nguyên liệu**: Cách làm: **Thêm mới** → nhập mã, tên, đơn vị tính, loại NVL; Bài hướng dẫn: [HƯỚNG DẪN THÊM, SỬA NGUYÊN LIỆU](/bai-viet/2026-11-07-tl-d08-1-huong-dan-them-sua-nguyen-lieu/)
- **Tạo nhiều nguyên liệu từ file hoặc ảnh**: Cách làm: **Import Excel**; Bài hướng dẫn: [HƯỚNG DẪN IMPORT NGUYÊN LIỆU TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d08-3-huong-dan-import-nguyen-lieu-tu-excel-anh/)
- **Đổi trạng thái, ĐVT, tên in cho nhiều dòng**: Cách làm: Chọn dòng → **Sửa nhiều**; Bài hướng dẫn: [HƯỚNG DẪN SỬA, XOÁ NHIỀU NGUYÊN LIỆU CÙNG LÚC](/bai-viet/2026-11-07-tl-d08-2-huong-dan-sua-xoa-nhieu-nguyen-lieu-cung-luc/)
- **Xoá nhiều dòng**: Cách làm: Chọn dòng → **Xóa nhiều**; Bài hướng dẫn: [HƯỚNG DẪN SỬA, XOÁ NHIỀU NGUYÊN LIỆU CÙNG LÚC](/bai-viet/2026-11-07-tl-d08-2-huong-dan-sua-xoa-nhieu-nguyen-lieu-cung-luc/)
- **Thêm đơn vị tính phụ cho nguyên liệu**: Cách làm: **Sửa** → nút chuyển đổi cạnh ô **ĐƠN VỊ TÍNH**; Bài hướng dẫn: [HƯỚNG DẪN THÊM, SỬA NGUYÊN LIỆU](/bai-viet/2026-11-07-tl-d08-1-huong-dan-them-sua-nguyen-lieu/)
- **Xem số lô, HSD**: Cách làm: Liên kết **Lô**; Bài hướng dẫn: phần “Nhận biết màn hình”
- **Ngưng dùng**: Cách làm: **Sửa** → bỏ tick **Kích hoạt**; Bài hướng dẫn: phần “Những điều cần lưu ý”

### Điều kiện riêng khi sửa, xoá

- **Sửa**: mã và tên nguyên liệu sửa được (không có công thức sinh lại). Mã mới phải không trùng mã hàng hoá nào.
- **Ngưng sử dụng**: nguyên liệu không còn hiện trong ô chọn hàng khi lập chứng từ mới; chứng từ và định mức cũ vẫn giữ.
- **Xóa**: chỉ khi nguyên liệu chưa có chứng từ, định mức nào dùng.

## 6. Giải thích các thông tin trên màn hình

Các trường nhập khi thêm, sửa: xem [HƯỚNG DẪN THÊM, SỬA NGUYÊN LIỆU](/bai-viet/2026-11-07-tl-d08-1-huong-dan-them-sua-nguyen-lieu/) phần “Giải thích các thông tin trên màn hình”. Các cột chỉ có ở danh sách hoặc dễ nhầm:

- **Mã hàng HN**: Ý nghĩa: Mã nội bộ của công ty; Lưu ý: Hiển thị đã bỏ tiền tố *HN*
- **Định lượng, Rộng**: Ý nghĩa: Thông số riêng của giấy; Lưu ý: Để `0` nếu không áp dụng
- **Đơn giá**: Ý nghĩa: Giá nhập tham khảo; Lưu ý: Định mức lấy giá vốn bình quân trước, chỉ dùng đơn giá này khi chưa có giá vốn
- **Định mức tồn**: Ý nghĩa: Mức tồn an toàn; Lưu ý: Không tự cảnh báo ở màn này

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Nguyên liệu dùng để làm gì và đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Mã nguyên liệu không được trùng với mã của bất kỳ hàng hoá nào** (nguyên liệu, hàng trơn, thành phẩm, hàng hóa khác). **Mã hàng NCC** cũng không được trùng giữa các hàng hoá.

⚠️ Nguyên liệu **Ngưng sử dụng** không còn hiện ở ô chọn hàng trên chứng từ mới. Nếu thấy "mất" nguyên liệu khi lập phiếu, kiểm tra cột **Trạng thái** ở đây.

⚠️ Nguyên liệu đã có chứng từ, định mức hoặc lô hàng dùng thì **không xoá được**. Muốn ngưng dùng thì bỏ tick **Kích hoạt**.

⚠️ Hộp xác nhận xoá hỏi **Bạn có muốn xóa hàng hóa này?** đúng với màn này (nguyên liệu là một loại hàng hoá).

### "Lỗi xóa.: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: nguyên liệu đang có chứng từ, định mức hoặc lô hàng.
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá. Với **Xóa nhiều**, chỉ cần một dòng bị vướng thì **không xoá dòng nào** ([HƯỚNG DẪN SỬA, XOÁ NHIỀU NGUYÊN LIỆU CÙNG LÚC](/bai-viet/2026-11-07-tl-d08-2-huong-dan-sua-xoa-nhieu-nguyen-lieu-cung-luc/)).

## 10. Câu hỏi thường gặp

**Vì sao nút Import Excel hiện nhưng bấm lưu không được?**
Nút luôn hiện; việc **Lưu** ở cửa sổ import cần quyền **Thêm mới** nguyên liệu.

**Nguyên liệu có sinh mã tự động như hàng trơn không?**
Không. Bạn tự nhập mã, tên ([HƯỚNG DẪN THÊM, SỬA NGUYÊN LIỆU](/bai-viet/2026-11-07-tl-d08-1-huong-dan-them-sua-nguyen-lieu/)).

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN THÊM, SỬA NGUYÊN LIỆU](/bai-viet/2026-11-07-tl-d08-1-huong-dan-them-sua-nguyen-lieu/) – Hướng dẫn thêm, sửa nguyên liệu.

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN THÊM, SỬA NGUYÊN LIỆU](/bai-viet/2026-11-07-tl-d08-1-huong-dan-them-sua-nguyen-lieu/) – Thêm, sửa nguyên liệu
- [HƯỚNG DẪN SỬA, XOÁ NHIỀU NGUYÊN LIỆU CÙNG LÚC](/bai-viet/2026-11-07-tl-d08-2-huong-dan-sua-xoa-nhieu-nguyen-lieu-cung-luc/) – Sửa, xoá nhiều nguyên liệu
- [HƯỚNG DẪN IMPORT NGUYÊN LIỆU TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-d08-3-huong-dan-import-nguyen-lieu-tu-excel-anh/) – Import nguyên liệu từ Excel / ảnh
- [TỔNG QUAN MÀN HÌNH ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-0-tong-quan-man-hinh-dinh-muc/) – Tổng quan màn hình Định mức
- [TỔNG QUAN MÀN HÌNH ĐƠN VỊ TÍNH](/bai-viet/2026-11-07-tl-d04-0-tong-quan-man-hinh-don-vi-tinh/) – Tổng quan màn hình Đơn vị tính
