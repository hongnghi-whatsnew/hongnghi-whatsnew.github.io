---
title: "TỔNG QUAN MÀN HÌNH SỐ MẶT"
date: "2026-11-07"
summary: "Số mặt là danh mục số mặt ván được gia công (phủ), ví dụ 1M (một mặt) và 2M (hai mặt)."
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

**Số mặt** là danh mục số mặt ván được gia công (phủ), ví dụ *1M* (một mặt) và *2M* (hai mặt). Mỗi dòng gồm **mã**, **tên** và **giá trị** (hệ số: 1 mặt = 1, 2 mặt = 2).

Danh mục này được dùng ở:

- **Thành phẩm** (TL-D11): ô **SỐ MẶT** bắt buộc. **Mã số mặt** đi vào **mã hàng**, **tên số mặt** đi vào **tên hàng** (ví dụ `MEL(DL)104SH1MMDFE2(4.75x1220x2440)DW` có `1M` là số mặt).
- **Phiếu đặt hàng sản xuất, yêu cầu gia công, nhập kho gia công** (sổ tay Bán hàng, Sản xuất): chọn số mặt cho từng dòng, **giá trị** làm hệ số mặc định.
- **Bảng giá gia công, bảng giá tại kho**: giá được đặt theo số mặt.
- **Định mức** (TL-D10): dòng chi phí khác được tick **TÍNH THEO S.M** sẽ được **nhân với giá trị số mặt** khi tính đơn giá gia công tại kho.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Số mặt**.
- Không cần danh mục nào khác có trước.

## 2. Mở chức năng

**Hàng hoá → Số mặt**

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

![Hình 1: Danh sách số mặt theo bố cục và bộ lọc hiện tại](/posts/2026-11-07-tl-d06-0-tong-quan-man-hinh-so-mat/hinh-01-man-hinh-so-mat.png)

- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM DANH MỤC SỐ MẶT**; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá một dòng; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Xóa** (hiện theo quyền)
- **Mã số mặt**: Ý nghĩa: Mã nối vào mã hàng thành phẩm (ví dụ `1M`)
- **Tên số mặt**: Ý nghĩa: Tên nối vào tên hàng thành phẩm
- **Giá trị**: Ý nghĩa: Hệ số nhân (1, 2…)
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n**. Danh sách hiện cả dòng **Ngưng sử dụng**. Nhấp đúp vào một dòng mở cửa sổ chỉ xem **THÔNG TIN SỐ MẶT**.

![Hình 2: cửa sổ thêm số mặt chưa nhập và chưa lưu](/posts/2026-11-07-tl-d06-0-tong-quan-man-hinh-so-mat/hinh-02-form-them-so-mat.png)

- **MÃ SỐ MẶT**: Ý nghĩa: Bắt buộc, viết liền, không trùng
- **TÊN SỐ MẶT**: Ý nghĩa: Bắt buộc
- **GIÁ TRỊ**: Ý nghĩa: Hệ số nhân, phải lớn hơn 0
- **GHI CHÚ**: Ý nghĩa: Tuỳ chọn
- **Kích hoạt**: Ý nghĩa: Bỏ tick = **Ngưng sử dụng**

## 4. Trình tự công việc

```text
Số mặt (TL-D06)
      ├──► Thành phẩm (TL-D11): ô SỐ MẶT → đoạn "1M" trong mã + tên hàng
      ├──► Phiếu đặt hàng SX / yêu cầu / nhập kho gia công: chọn số mặt
      ├──► Bảng giá gia công, bảng giá tại kho: giá theo số mặt
      └──► Định mức: chi phí khác "TÍNH THEO S.M" × GIÁ TRỊ số mặt
```

### Khai báo một số mặt

**Bước 1 –** Nhập **MÃ SỐ MẶT**: viết liền, không khoảng trắng, ít nhất 2 ký tự, ví dụ `1M`, `2M`.

**Bước 2 –** Nhập **TÊN SỐ MẶT**, ví dụ *1M*, *2M* (ít nhất 2 ký tự). Tên này nằm trong tên thành phẩm.

**Bước 3 –** Nhập **GIÁ TRỊ**: số mặt tương ứng, ví dụ `1` cho *1M*, `2` cho *2M*. Ô này hiện sẵn `0` và **phải đổi thành số lớn hơn 0** mới lưu được.

**Bước 4 –** Bấm **Lưu lại**. Hệ thống kiểm tra mã chưa có (không phân biệt chữ hoa, chữ thường).

### Sửa, ngưng dùng, xoá

- **Sửa GIÁ TRỊ**: ảnh hưởng đến chi phí gia công tính **từ lúc sửa trở đi** ở nơi dùng hệ số số mặt (định mức, phiếu yêu cầu gia công).
- **Sửa mã / tên**: thành phẩm đã tạo **không tự đổi** mã và tên (xem phần “Những điều cần lưu ý”).
- **Ngưng sử dụng**: bỏ tick **Kích hoạt**. Số mặt không còn hiện trong ô chọn mới; dữ liệu cũ giữ nguyên.
- **Xóa**: chỉ khi chưa thành phẩm, phiếu hay bảng giá nào dùng số mặt.

## 6. Giải thích các thông tin trên màn hình

- **Mã số mặt**: Ý nghĩa: Mã nối vào mã thành phẩm; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự, không khoảng trắng, không trùng
- **Tên số mặt**: Ý nghĩa: Tên nối vào tên thành phẩm; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự
- **Giá trị**: Ý nghĩa: Hệ số nhân theo số mặt; Bắt buộc: Có (lớn hơn 0); Lưu ý: Ô hiện sẵn 0
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

## 7. Kiểm tra sau khi thực hiện

Số mặt mới chọn được ở ô **SỐ MẶT** của cửa sổ thành phẩm và ở các phiếu, bảng giá gia công.

## 8. Những điều cần lưu ý

⚠️ **GIÁ TRỊ phải lớn hơn 0.** Để nguyên `0` hoặc để trống thì không lưu được và hệ thống báo lỗi chung (xem phần “Vướng mắc thường gặp”).

⚠️ **Đổi mã hoặc tên số mặt không làm đổi mã, tên thành phẩm đã lưu.**

⚠️ Số mặt đã được thành phẩm, phiếu hoặc bảng giá dùng thì **không xoá được**. Muốn ngưng dùng thì bỏ tick **Kích hoạt**.

⚠️ Hộp xác nhận xoá hỏi **Bạn có muốn xóa hàng hóa này?** là câu chung của các màn Hàng hoá; thực tế là xoá số mặt đang chọn.

### "Mã đã tồn tại" 

Nguyên nhân: đã có số mặt cùng mã (kể cả khác chữ hoa / thường).
Cách xử lý: đặt mã khác, hoặc dùng lại dòng đã có.

### "Mã không hợp lệ. Viết liền không dấu và không chứa kí tự đặc biệt." 

Nguyên nhân: mã có khoảng trắng.
Cách xử lý: viết liền, ví dụ `1M`.

### "Lỗi thêm.: Đã xảy ra lỗi trong quá trình xử lý. Vui lòng thử lại hoặc liên hệ quản trị hệ thống." (Lỗi hệ thống)

Nguyên nhân thường gặp: **GIÁ TRỊ** bằng 0, âm hoặc để trống (cơ sở dữ liệu từ chối).
Cách xử lý: nhập **GIÁ TRỊ** lớn hơn 0 rồi **Lưu lại**.

### "Lỗi xóa.: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: số mặt đang được thành phẩm, phiếu hoặc bảng giá dùng.
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá.

## 10. Câu hỏi thường gặp

**Số mặt 1M và 2M khác nhau thế nào khi tính tiền?**
Một tác động là dòng chi phí khác trong định mức có tick **TÍNH THEO S.M** nhân với **GIÁ TRỊ** (1M nhân 1, 2M nhân 2). Không kết luận đây là tác động duy nhất: hệ số còn được đề cập ở phiếu sản xuất và lượng nguyên liệu/báo cáo; cần phòng sản xuất đối chiếu từng luồng.

## 11. Công việc tiếp theo

**Tiếp theo:** hướng dẫn của bộ phận phụ trách – Hướng dẫn thêm, sửa thành phẩm (chọn số mặt để sinh mã, tên hàng).

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN THÊM, SỬA ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-1-huong-dan-them-sua-dinh-muc/) – Thêm, sửa định mức (cột TÍNH THEO S.M)
- [TỔNG QUAN THÀNH PHẨM](/bai-viet/2026-11-07-tl-d11-0-tong-quan-thanh-pham/) – Tổng quan màn hình Thành phẩm
- Sổ tay Sản xuất – Bảng giá gia công, Phiếu yêu cầu gia công
