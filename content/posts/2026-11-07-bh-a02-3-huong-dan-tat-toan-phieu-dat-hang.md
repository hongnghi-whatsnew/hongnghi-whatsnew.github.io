---
title: "HƯỚNG DẪN TẤT TOÁN PHIẾU ĐẶT HÀNG"
date: "2026-11-07"
summary: "Tất toán dùng khi khách huỷ một phần đơn hoặc công ty quyết định không làm tiếp phần còn lại."
module: "Bán hàng"
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

**Tất toán** dùng khi khách huỷ một phần đơn hoặc công ty quyết định không làm tiếp phần còn lại. Bạn ghi **SL tất toán** cho từng dòng:

- Ở bảng **YÊU CẦU SẢN XUẤT**: phần số lượng **chưa lên yêu cầu sản xuất** sẽ không còn chờ sản xuất.
- Ở bảng **THÀNH PHẨM**: phần thành phẩm **chưa bán** sẽ không còn chờ bán (không còn hiện số lượng còn lại khi lập phiếu bán hàng từ đơn).

Tất toán không xoá phiếu, không làm thay đổi tồn kho hay công nợ.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Tất toán** của màn hình **Phiếu đặt hàng**.
- Biết dòng nào, số lượng bao nhiêu không làm tiếp.

## 2. Mở chức năng

**Bán hàng → Phiếu đặt hàng → Tất toán** (ở cột **Thao tác** của dòng phiếu)

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ TẤT TOÁN - PHIẾU ĐẶT HÀNG](/posts/2026-11-07-bh-a02-3-huong-dan-tat-toan-phieu-dat-hang/hinh-01-tat-toan-phieu-dat-hang.png)

- **Thông tin chung**: Ý nghĩa: Bị khoá, chỉ xem
- **Cột SL tất toán**: Ý nghĩa: Ô duy nhất được nhập
- **SL đã lên y/c, SL đã nhập (bảng yêu cầu) / SL đã bán (bảng thành phẩm)**: Ý nghĩa: Đối chiếu trước khi nhập
- **YÊU CẦU SẢN XUẤT / THÀNH PHẨM**: Ý nghĩa: Chuyển bảng (chỉ hiện khi đã có thành phẩm – không có trên ảnh)
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

## 4. Trình tự công việc

```text
Tất toán (dòng phiếu) → TẤT TOÁN - PHIẾU ĐẶT HÀNG
      ↓
Bảng YÊU CẦU SẢN XUẤT: nhập SL tất toán ≤ Số lượng − SL đã lên y/c
      ↓
(Nếu có) Bảng THÀNH PHẨM: nhập SL tất toán ≤ Số lượng − SL đã bán
      ↓
Lưu lại ── "Tất toán vượt mức cho phép"? ──► giảm số → Lưu lại
      ↓
"Lưu thành công" → trạng thái phiếu được tính lại
```

### Bước 1 – Mở cửa sổ tất toán

Ở **KHÁCH ĐẶT HÀNG - DANH SÁCH**, bấm **Tất toán** ở dòng phiếu. Cửa sổ **TẤT TOÁN - PHIẾU ĐẶT HÀNG** mở ra (Hình 1), cùng bố cục với cửa sổ lập phiếu. Các ô thông tin chung và cột khác bị khoá; chân cửa sổ chỉ còn **Lưu lại** / **Đóng** (không có **Thêm một hàng**), nút ở cột **Thao tác** hiện mờ.

### Bước 2 – Nhập SL tất toán cho yêu cầu sản xuất

Ở bảng **YÊU CẦU SẢN XUẤT**, kéo thanh cuộn ngang sang phải tới cột **SL tất toán**, bấm ô của dòng cần đóng, nhập tổng số lượng không làm tiếp của dòng (nếu đã tất toán trước đó, không cộng lại phần cũ). Số này không được lớn hơn **Số lượng − SL đã lên y/c**.

### Bước 3 – (Nếu có) Nhập SL tất toán cho thành phẩm

Nếu góc dưới trái có nút **THÀNH PHẨM**, bấm vào để chuyển bảng. Nhập **SL tất toán** cho thành phẩm không bán nữa (không lớn hơn **Số lượng − SL đã bán**).

### Bước 4 – Lưu

Bấm **Lưu lại**. Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại. Mở lại phiếu để đối chiếu SL tất toán ở từng bảng; kiểm tra phần còn chờ sản xuất/bán, không suy rằng hàng tồn kho đã giảm.

## 6. Giải thích các thông tin trên màn hình

- **SL tất toán (yêu cầu)**: Ý nghĩa: Số lượng đặt không sản xuất nữa; Bắt buộc: Không; Lưu ý: 0 ≤ SL ≤ Số lượng − SL đã lên y/c
- **SL tất toán (thành phẩm)**: Ý nghĩa: Số thành phẩm không bán nữa; Bắt buộc: Không; Lưu ý: 0 ≤ SL ≤ Số lượng − SL đã bán
- **SL đã lên y/c**: Ý nghĩa: Đã chuyển thành yêu cầu sản xuất; Lưu ý: Chỉ xem
- **SL đã nhập**: Ý nghĩa: Thành phẩm đã nhập kho; Lưu ý: Chỉ xem
- **SL đã bán**: Ý nghĩa: Thành phẩm đã lên phiếu bán hàng; Lưu ý: Chỉ xem

## 7. Kiểm tra sau khi thực hiện

- **SL tất toán** được lưu; **Trạng thái SX** / **Trạng thái bán** của phiếu được tính lại.
- Phần tất toán ở bảng yêu cầu không còn chờ sản xuất; phần tất toán ở bảng thành phẩm không còn hiện để bán khi dùng **TỪ PHIẾU ĐẶT HÀNG**.
- Tồn kho và công nợ không thay đổi.

## 8. Những điều cần lưu ý

⚠️ Không tất toán được phần **đã lên yêu cầu sản xuất**. Phần đó phải xử lý ở sổ tay Sản xuất.

⚠️ Tất toán thành phẩm đã nhập kho **không** làm giảm tồn kho; thành phẩm vẫn nằm trong kho và bán được như hàng thường.

⚠️ Bấm **Đóng** không hỏi lại; số đã nhập bị mất.

### "<số dòng>. Số lượng tất toán cho phép 0 hoặc <số>" 

Nguyên nhân: SL tất toán âm hoặc lớn hơn số lượng của dòng.
Cách xử lý: nhập lại trong khoảng cho phép.

### "CẢNH BÁO – Lỗi sửa: Tất toán vượt mức cho phép: <số>" 

Nguyên nhân: SL tất toán lớn hơn phần còn lại (đã trừ phần đã lên yêu cầu / đã bán). Số trong câu báo là mức tối đa.
Cách xử lý: giảm SL tất toán về tối đa bằng số trong câu báo.

## 10. Câu hỏi thường gặp

**Tất toán xong có huỷ được không?**
Mở **Tất toán** lại và sửa **SL tất toán** về 0 rồi **Lưu lại**.

## 11. Công việc tiếp theo

Không có bước bắt buộc. Muốn bán phần thành phẩm còn lại, xem [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a03-2-huong-dan-lap-phieu-ban-hang-tu-phieu-dat-hang/).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a02-0-tong-quan-man-hinh-phieu-dat-hang/) – Tổng quan màn hình Phiếu đặt hàng
- [HƯỚNG DẪN LẬP PHIẾU ĐẶT HÀNG SẢN XUẤT](/bai-viet/2026-11-07-bh-a02-1-huong-dan-lap-phieu-dat-hang-san-xuat/) – Hướng dẫn lập phiếu đặt hàng sản xuất
- [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a03-2-huong-dan-lap-phieu-ban-hang-tu-phieu-dat-hang/) – Hướng dẫn lập phiếu bán hàng từ phiếu đặt hàng
