---
title: "TỔNG QUAN MÀN HÌNH NHÀ CUNG CẤP"
date: "2026-11-07"
summary: "Nhà cung cấp (NCC) là danh mục các đơn vị bán hàng, dịch vụ cho công ty."
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

**Nhà cung cấp** (NCC) là danh mục các đơn vị bán hàng, dịch vụ cho công ty. Danh mục được chọn ở hầu hết chứng từ mua hàng và công nợ:

- Phiếu đặt hàng NCC, **Phiếu mua hàng**, Phiếu nhập kho, Phiếu trả hàng NCC (sổ tay Mua hàng, Kho hàng).
- Phiếu chi / thu, phiếu cấn trừ, hợp đồng (sổ tay Kế toán): công nợ nhà cung cấp.
- Bảng giá / báo giá NCC (**Mã xuất xứ** của NCC làm mặc định cho nhóm hàng ván trơn).
- Thống kê công nợ nhà cung cấp, công nợ quá hạn: dùng **Số ngày nợ** của NCC để tính ngày tới hạn.

Bài này là bản **tổng quan**: danh sách, nút chức năng, nhận diện việc cần làm. Cách điền cửa sổ thêm / sửa ở [HƯỚNG DẪN THÊM, SỬA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-b02-1-huong-dan-them-sua-nha-cung-cap/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Nhà cung cấp**.
- Đã có ít nhất một **Nhóm nhà cung cấp** đang Kích hoạt (TL-B01): ô **NHÓM NCC** bắt buộc.

## 2. Mở chức năng

**Nhà cung cấp → Nhà cung cấp**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Hình 1: NHÀ CUNG CẤP - DANH SÁCH — chỉ xem; định danh/liên hệ đã che.](/posts/2026-11-07-tl-b02-0-tong-quan-man-hinh-nha-cung-cap/ui-20261026-tl-b02-ds-figure-01.png)

- **Tải lại**: Chức năng: Tải lại danh sách; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM NHÀ CUNG CẤP**; Bài hướng dẫn: [HƯỚNG DẪN THÊM, SỬA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-b02-1-huong-dan-them-sua-nha-cung-cap/)
- **Import Excel**: Chức năng: Nạp nhiều nhà cung cấp từ file; Bài hướng dẫn: [HƯỚNG DẪN IMPORT NHÀ CUNG CẤP TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-b02-2-huong-dan-import-nha-cung-cap-tu-excel-anh/)
- **Ô tick đầu dòng; thanh Xóa nhiều / Sửa nhiều / Bỏ chọn tất cả / N dòng đã chọn**: Chức năng: Chọn nhiều dòng (thanh chỉ hiện khi có dòng được chọn); Bài hướng dẫn: [HƯỚNG DẪN SỬA, XOÁ NHIỀU NHÀ CUNG CẤP CÙNG LÚC](/bai-viet/2026-11-07-tl-b02-3-huong-dan-sua-xoa-nhieu-nha-cung-cap-cung-luc/)
- **Biểu tượng Xuất Excel, Trình chọn cột, Tìm kiếm…**: Chức năng: Xuất file, ẩn / hiện cột, tìm theo mọi cột; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/), [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá một dòng; Bài hướng dẫn: [HƯỚNG DẪN THÊM, SỬA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-b02-1-huong-dan-them-sua-nha-cung-cap/), [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

- **Nhóm nhà cung cấp**: Ý nghĩa: Nhóm của NCC
- **Mã nhà cung cấp, Tên nhà cung cấp, Tên rút gọn**: Ý nghĩa: Mã (tự đặt), tên đầy đủ, tên gọi tắt
- **SĐT, Địa chỉ, Địa chỉ NCC/Khu vực**: Ý nghĩa: Liên hệ; địa chỉ chi tiết; khu vực (tỉnh / xã)
- **Mã số thuế, Email**: Ý nghĩa: Thông tin thuế, email
- **Mã xuất xứ**: Ý nghĩa: Mã xuất xứ hàng hoá của NCC (ví dụ DW, VECO)
- **Số ngày nợ**: Ý nghĩa: Số ngày được nợ NCC
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú, Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Ghi chú; hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n**. Danh sách hiện cả NCC Kích hoạt lẫn Ngưng sử dụng, không lọc theo chi nhánh. Nhấp đúp vào một dòng mở cửa sổ chỉ xem **THÔNG TIN NHÀ CUNG CẤP**.

## 4. Trình tự công việc

```text
Nhóm nhà cung cấp (TL-B01) ──► Nhà cung cấp (TL-B02)
                                   │
   ┌───────────────────────────────┼─────────────────────────┐
   ▼                               ▼                         ▼
Thêm / Sửa (B02.1)       Import Excel (B02.2)      Sửa / Xóa nhiều (B02.3)
   │
   └──► Phiếu mua hàng, nhập kho, trả hàng, phiếu chi / thu, báo giá NCC
        └──► Công nợ nhà cung cấp, công nợ quá hạn
```

## 5. Thực hiện trên phần mềm

- **Tìm một nhà cung cấp**: Cách làm: Gõ mã / tên / MST vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm nhà cung cấp**: Cách làm: **Thêm mới**; Bài hướng dẫn: [HƯỚNG DẪN THÊM, SỬA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-b02-1-huong-dan-them-sua-nha-cung-cap/)
- **Nạp nhiều nhà cung cấp từ file**: Cách làm: **Import Excel**; Bài hướng dẫn: [HƯỚNG DẪN IMPORT NHÀ CUNG CẤP TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-b02-2-huong-dan-import-nha-cung-cap-tu-excel-anh/)
- **Đổi trạng thái, nhóm hoặc số ngày nợ của nhiều NCC**: Cách làm: Chọn dòng → **Sửa nhiều**; Bài hướng dẫn: [HƯỚNG DẪN SỬA, XOÁ NHIỀU NHÀ CUNG CẤP CÙNG LÚC](/bai-viet/2026-11-07-tl-b02-3-huong-dan-sua-xoa-nhieu-nha-cung-cap-cung-luc/)
- **Xoá nhiều NCC**: Cách làm: Chọn dòng → **Xóa nhiều**; Bài hướng dẫn: [HƯỚNG DẪN SỬA, XOÁ NHIỀU NHÀ CUNG CẤP CÙNG LÚC](/bai-viet/2026-11-07-tl-b02-3-huong-dan-sua-xoa-nhieu-nha-cung-cap-cung-luc/)
- **Đưa danh mục sang chi nhánh khác**: Cách làm: **Đồng bộ**; Bài hướng dẫn: [HƯỚNG DẪN ĐỒNG BỘ NHÀ CUNG CẤP SANG CHI NHÁNH KHÁC](/bai-viet/2026-11-07-tl-b02-4-huong-dan-dong-bo-nha-cung-cap-sang-chi-nhanh-khac/)
- **Xem một nhà cung cấp**: Cách làm: Nhấp đúp vào dòng; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Ngưng sử dụng một NCC**: Cách làm: **Sửa** → bỏ tick **Kích hoạt** → **Lưu lại**; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

**Quy tắc riêng của màn Nhà cung cấp:**

- **Mã nhà cung cấp** do bạn đặt, **không tự sinh**, không trùng (không phân biệt chữ hoa / thường).
- **Mã số thuế không bắt buộc và không kiểm trùng:** hai NCC có thể cùng mã số thuế (ví dụ khai nhầm hai lần). Tìm bằng **Tìm kiếm…** theo mã số thuế trước khi thêm.
- **Ngưng sử dụng** (bỏ tick **Kích hoạt**): NCC không còn hiện ở ô chọn nhà cung cấp khi lập chứng từ mới; chứng từ cũ không đổi.
- **Xóa** chỉ được khi NCC chưa có chứng từ, hàng hoá, bảng giá hay công nợ nào. Khi xoá, hệ thống xoá luôn các **tài khoản ngân hàng** của NCC; nếu bị chặn thì không xoá gì (kể cả tài khoản ngân hàng).

## 6. Giải thích các thông tin trên màn hình

Các trường chi tiết của cửa sổ xem [HƯỚNG DẪN THÊM, SỬA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-b02-1-huong-dan-them-sua-nha-cung-cap/). Trường có ảnh hưởng sang màn khác:

- **Nhóm nhà cung cấp**: Ảnh hưởng: Bộ lọc nhóm ở các báo cáo mua hàng, công nợ nhà cung cấp
- **Số ngày nợ**: Ảnh hưởng: Tính **ngày tới hạn** ở công nợ quá hạn nhà cung cấp: ngày nhập kho + số ngày nợ (trống tính bằng 0)
- **Mã xuất xứ**: Ảnh hưởng: Mã xuất xứ mặc định khi nhập bảng giá / báo giá NCC ván trơn
- **Trạng thái**: Ảnh hưởng: Chỉ NCC **Kích hoạt** hiện ở ô chọn khi lập chứng từ
- **Tài khoản ngân hàng**: Ảnh hưởng: Danh sách tài khoản của NCC (nhiều dòng)

## 7. Kiểm tra sau khi thực hiện

Bạn biết các nút của màn hình và đọc bài nào cho từng việc. NCC thêm mới hoặc sửa còn Kích hoạt có thể được chọn sau khi tải lại danh mục trên phiếu mua hàng; quyền màn hình và phạm vi của tài khoản vẫn phải thỏa mãn.

## 8. Những điều cần lưu ý

⚠️ **NCC đã có chứng từ, hàng hoá, bảng giá hay công nợ thì không xoá được.** Dùng **Ngưng sử dụng**.

⚠️ **Mã số thuế trùng không bị chặn.** Tìm trước khi thêm để tránh tạo NCC thứ hai cho cùng một đơn vị (công nợ bị tách đôi).

⚠️ Sửa **Số ngày nợ** của NCC đổi cách tính ngày tới hạn cho **toàn bộ** chứng từ nhập kho của NCC đó ở báo cáo công nợ quá hạn, kể cả chứng từ cũ.

⚠️ Danh mục dùng chung cho các chi nhánh trong cùng cơ sở dữ liệu ERP.

### "Lỗi xóa nha cung cấp.: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: NCC đã có chứng từ, hàng hoá, bảng giá hoặc công nợ.
Cách xử lý: chuyển sang **Ngưng sử dụng** (bỏ tick **Kích hoạt**).

## 10. Câu hỏi thường gặp

**Nút Đồng bộ nằm ở đâu?**
Trên thanh công cụ danh sách, cạnh **Import Excel**, ở bản ERP có chức năng đồng bộ thiết lập ([HƯỚNG DẪN ĐỒNG BỘ NHÀ CUNG CẤP SANG CHI NHÁNH KHÁC](/bai-viet/2026-11-07-tl-b02-4-huong-dan-dong-bo-nha-cung-cap-sang-chi-nhanh-khac/)). Nếu không thấy, tài khoản chưa có quyền **Xuất / nhập file đồng bộ**, hoặc bản ERP chưa có chức năng này.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN THÊM, SỬA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-b02-1-huong-dan-them-sua-nha-cung-cap/) – Thêm, sửa nhà cung cấp.

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH NHÓM NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-b01-0-tong-quan-man-hinh-nhom-nha-cung-cap/) – Nhóm nhà cung cấp
- [HƯỚNG DẪN THÊM, SỬA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-b02-1-huong-dan-them-sua-nha-cung-cap/) – Thêm, sửa nhà cung cấp
- [HƯỚNG DẪN IMPORT NHÀ CUNG CẤP TỪ EXCEL / ẢNH](/bai-viet/2026-11-07-tl-b02-2-huong-dan-import-nha-cung-cap-tu-excel-anh/) – Import nhà cung cấp từ Excel / ảnh
- [HƯỚNG DẪN SỬA, XOÁ NHIỀU NHÀ CUNG CẤP CÙNG LÚC](/bai-viet/2026-11-07-tl-b02-3-huong-dan-sua-xoa-nhieu-nha-cung-cap-cung-luc/) – Sửa, xoá nhiều nhà cung cấp
- [HƯỚNG DẪN ĐỒNG BỘ NHÀ CUNG CẤP SANG CHI NHÁNH KHÁC](/bai-viet/2026-11-07-tl-b02-4-huong-dan-dong-bo-nha-cung-cap-sang-chi-nhanh-khac/) – Đồng bộ nhà cung cấp sang chi nhánh khác
- Sổ tay Mua hàng – Phiếu mua hàng; sổ tay Kế toán – Công nợ nhà cung cấp
