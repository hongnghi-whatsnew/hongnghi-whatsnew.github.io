---
title: "TỔNG QUAN MÀN HÌNH NGUỒN NHÂN LỰC"
date: "2026-11-07"
summary: "Màn hình Nguồn nhân lực (tiêu đề NGUỒN NHÂN LỰC - DANH SÁCH) liệt kê các nguồn nhân lực thực hiện gia công của công ty: máy gia công, tổ máy hoặc nhóm thợ (ví dụ GP MEL MÁY 1, HN MÁY KEO 1)."
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

Màn hình **Nguồn nhân lực** (tiêu đề **NGUỒN NHÂN LỰC - DANH SÁCH**) liệt kê các **nguồn nhân lực thực hiện gia công** của công ty: máy gia công, tổ máy hoặc nhóm thợ (ví dụ *GP MEL MÁY 1*, *HN MÁY KEO 1*). Mỗi dòng gồm **mã**, **tên** và danh sách **công nhân đứng máy**.

Danh mục này được dùng ở:

- **Định mức** (TL-D10): bảng nguồn lực của định mức liệt kê nguồn nhân lực nào tham gia và chi phí của từng nguồn.
- **Phiếu yêu cầu gia công, phiếu nhập kho gia công** (sổ tay Sản xuất): chọn nguồn nhân lực thực hiện lô gia công.
- **Bảng giá tại kho** (sổ tay Sản xuất): đơn giá theo nguồn nhân lực.
- **Phiếu thu, phiếu chi, phiếu cấn trừ** (sổ tay Kế toán): nguồn nhân lực là một đối tượng có công nợ, xem ở **Công nợ nguồn nhân lực** (KT-C01).
- **Lương khoán sản phẩm** (sổ tay Nhân sự): số mặt gia công của máy được chia đều cho công nhân đứng máy.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Nguồn nhân lực**.
- **Chi nhánh / Đơn vị** đã có (TL-A01).
- Muốn gắn công nhân đứng máy: công nhân đã có hồ sơ trong sổ tay Nhân sự.

## 2. Mở chức năng

**Thiết lập danh mục → Nguồn nhân lực**

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

![Hình 1: Danh sách nguồn nhân lực theo bố cục và bộ lọc hiện tại](/posts/2026-11-07-tl-a02-0-tong-quan-man-hinh-nguon-nhan-luc/hinh-01-man-hinh-nguon-nhan-luc-danh-sach.png)

- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM NGUỒN NHÂN LỰC**; Hướng dẫn: phần “Thực hiện trên phần mềm”, [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột Thao tác: Sửa / Xóa**: Chức năng: Sửa / xoá một dòng; Hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Dòng lọc dưới tiêu đề cột, phân trang**: Chức năng: Lọc từng cột; 10 / 15 / 20 dòng một trang; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Xóa** (hiện theo quyền)
- **Mã nguồn nhân lực**: Ý nghĩa: Mã viết liền, ví dụ `GPMELMAY1`
- **Tên nguồn nhân lực**: Ý nghĩa: Tên máy / tổ
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Công nhân đứng máy **không** hiện trên danh sách; xem bằng cách nhấp đúp hoặc bấm **Sửa**. Dòng cuối bảng hiện **TỔNG CỘNG: n**. Danh sách hiện cả dòng **Ngưng sử dụng**. Nhấp đúp vào một dòng mở cửa sổ chỉ xem **THÔNG TIN NGUỒN NHÂN LỰC**.

![Hình 2: cửa sổ thêm nguồn nhân lực chưa nhập và chưa lưu](/posts/2026-11-07-tl-a02-0-tong-quan-man-hinh-nguon-nhan-luc/hinh-02-form-them-nguon-nhan-luc.png)

- **MÃ NGUỒN LỰC**: Ý nghĩa: Bắt buộc, không trùng
- **TÊN NGUỒN LỰC**: Ý nghĩa: Bắt buộc
- **CÔNG NHÂN ĐỨNG MÁY**: Ý nghĩa: Chọn nhiều công nhân; gợi ý *Chọn công nhân đứng máy (chia đều số mặt khoán)...*
- **GHI CHÚ**: Ý nghĩa: Tuỳ chọn
- **Ô Kích hoạt**: Ý nghĩa: Bỏ tick = **Ngưng sử dụng**
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

Tiêu đề cửa sổ: **THÊM NGUỒN NHÂN LỰC**, **CẬP NHẬT NGUỒN NHÂN LỰC**, **THÔNG TIN NGUỒN NHÂN LỰC** (chỉ xem).

## 4. Trình tự công việc

**Vị trí của nguồn nhân lực:**

```text
Nguồn nhân lực (TL-A02)  ◄── gắn công nhân đứng máy (hồ sơ Nhân sự)
      ↓
Định mức (TL-D10): nguồn lực tham gia, chi phí nguồn lực
      ↓
Phiếu yêu cầu / nhập kho gia công (Sản xuất): nguồn nhân lực thực hiện
      ↓
Lương khoán (Nhân sự): số mặt của máy chia đều cho công nhân đứng máy
Công nợ nguồn nhân lực (Kế toán): phiếu thu, chi, cấn trừ
```

**Cách tính lương khoán liên quan đến danh mục này:**

```text
Số mặt gia công của máy trong tháng (từ phiếu nhập kho gia công)
      ↓
÷ số công nhân ĐANG KÍCH HOẠT đứng máy
      ↓
Mỗi công nhân nhận phần bằng nhau × đơn giá gia công trên phiếu
```

### Khai báo máy / tổ mới

**Bước 1 –** Nhập **MÃ NGUỒN LỰC** (viết liền, không khoảng trắng, ít nhất 2 ký tự) và **TÊN NGUỒN LỰC** (ít nhất 2 ký tự). Mã được kiểm trùng ngay khi rời ô mã.

**Bước 2 –** Chọn **CÔNG NHÂN ĐỨNG MÁY** (nhiều người được): gõ để tìm theo mã nhân sự hoặc họ tên, tick từng người rồi xác nhận lựa chọn. Mỗi lựa chọn hiện dạng *mã nhân sự - họ tên*. Có thể bỏ trống nếu máy chưa có người.

**Bước 3 –** Lưu. Danh sách công nhân được ghi đè theo đúng lựa chọn trên cửa sổ (người bị bỏ chọn sẽ rời máy).

### Gắn hoặc đổi công nhân đứng máy

Mở **Sửa**, thêm / bỏ công nhân ở ô **CÔNG NHÂN ĐỨNG MÁY**, lưu. Quy tắc lương khoán:

- Chỉ máy có mã bắt đầu bằng **`GP`** hoặc **`HN`** (không phân biệt hoa / thường) được tính vào lương khoán, chia theo hai nhóm GP và HN.
- Chỉ công nhân có hồ sơ **đang kích hoạt** mới được chia số mặt.
- Máy có sản lượng nhưng **không còn công nhân đang kích hoạt** thì tiền khoán của máy đó **không vào kỳ lương nào**; kỳ lương sẽ cảnh báo danh sách máy như vậy.
- Hệ thống **không lưu ngày gắn máy**: đổi công nhân rồi "Lấy dữ liệu" lại một kỳ lương cũ chưa khoá sẽ chia theo công nhân hiện tại. Kỳ đã khoá / đã duyệt không tính lại.

### Ngưng sử dụng và xoá

Bỏ tick **Kích hoạt** để ngưng dùng (nguồn nhân lực không còn để chọn ở phiếu mới). Chỉ xoá được nguồn nhân lực **chưa dùng ở đâu**; xoá đồng thời xoá luôn danh sách công nhân đã gắn.

- **Tìm, lọc, chọn cột**: Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xuất Excel**: Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Thêm, sửa, xoá, xem chi tiết**: Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Chọn nguồn lực trong định mức**: Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-0-tong-quan-man-hinh-dinh-muc/)

## 6. Giải thích các thông tin trên màn hình

- **Mã nguồn lực**: Ý nghĩa: Mã viết liền của máy / tổ; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự, không khoảng trắng; **duy nhất toàn hệ thống**, không phân biệt hoa / thường (kể cả dòng ngưng dùng). Mã tự nhập, hệ thống không tự sinh. Mã bắt đầu `GP` / `HN` được tính lương khoán
- **Tên nguồn lực**: Ý nghĩa: Tên máy / tổ; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự
- **Công nhân đứng máy**: Ý nghĩa: Người đứng máy, chia đều số mặt khoán; Bắt buộc: Không; Lưu ý: Chọn nhiều người; danh sách lấy từ hồ sơ nhân sự
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick

Khi thêm, hệ thống ghi nguồn nhân lực thuộc **chi nhánh đang làm việc**, nhưng danh sách **không lọc theo chi nhánh**: các chi nhánh trong cùng cơ sở dữ liệu ERP thấy chung một danh mục.

## 7. Kiểm tra sau khi thực hiện

Nguồn nhân lực được lưu, chọn được ở định mức, phiếu gia công và bảng giá tại kho. Công nhân đã gắn được dùng khi tính lương khoán các kỳ tính sau.

## 8. Những điều cần lưu ý

⚠️ **Danh mục dùng chung cho các chi nhánh trong cùng cơ sở dữ liệu ERP.** Sửa tên ở đây đổi tên hiển thị ở mọi nơi đang dùng.

⚠️ Nguồn nhân lực đã được dùng ở **định mức**, **phiếu gia công**, **bảng giá tại kho** hoặc **phiếu thu / chi / cấn trừ** thì **không xoá được**. Muốn ngưng dùng: bỏ tick **Kích hoạt**.

⚠️ **Đổi mã** một nguồn đang có phiếu gia công làm thay đổi cách tính lương khoán nếu mã mới không còn bắt đầu bằng `GP` / `HN`. Đặt mã một lần rồi giữ nguyên.

⚠️ Công nhân nghỉ việc (hồ sơ ngưng kích hoạt) vẫn nằm trong danh sách đứng máy nhưng **không được chia số mặt**. Nhớ gắn người thay thế, nếu không máy mất khoán.

### "Nhập mã nguồn nhân lực" / "Mã nguồn nhân lực quá ngắn" / "Nhập tên nguồn nhân lực" / "Tên nguồn nhân lực quá ngắn" 

Nguyên nhân: để trống hoặc chỉ nhập 1 ký tự.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "Mã không hợp lệ. Viết liền không dấu và không chứa kí tự đặc biệt." 

Nguyên nhân: mã có khoảng trắng.
Cách xử lý: viết liền, ví dụ `GPMELMAY6` thay cho `GP MEL MAY 6`.

### "Mã đã tồn tại" 

Nguyên nhân: đã có nguồn nhân lực cùng mã (kể cả khác hoa / thường, kể cả dòng ngưng dùng).
Cách xử lý: đặt mã khác, hoặc tìm dòng cũ và tick lại **Kích hoạt**.

### "Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: nguồn nhân lực đang được dùng ở định mức, phiếu gia công, bảng giá hoặc công nợ.
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá.

### Ô CÔNG NHÂN ĐỨNG MÁY không có người nào để chọn (Lỗi hệ thống)

Nguyên nhân: không tải được danh sách hồ sơ nhân sự (sẽ hiện kèm thông báo lỗi), hoặc chưa có hồ sơ.
Cách xử lý: bấm **Đóng**, mở lại cửa sổ; nếu vẫn lỗi báo IT.

## 10. Câu hỏi thường gặp

**Nguồn nhân lực khác nhân viên thế nào?**
Nguồn nhân lực là **máy / tổ** làm gia công. **Nhân viên** (hồ sơ nhân sự) là từng người; công nhân được gắn vào máy để chia lương khoán.

**Một công nhân đứng được nhiều máy không?**
Được: một người có thể được chọn ở nhiều nguồn nhân lực; số mặt của từng máy được chia riêng.

## 11. Công việc tiếp theo

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH ĐƠN VỊ GIA CÔNG](/bai-viet/2026-11-07-tl-a03-0-tong-quan-man-hinh-don-vi-gia-cong/) – Tổng quan màn hình Đơn vị gia công.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH ĐƠN VỊ GIA CÔNG](/bai-viet/2026-11-07-tl-a03-0-tong-quan-man-hinh-don-vi-gia-cong/) – Tổng quan màn hình Đơn vị gia công
- [TỔNG QUAN MÀN HÌNH ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-0-tong-quan-man-hinh-dinh-muc/) – Tổng quan màn hình Định mức
- Sổ tay Sản xuất – Phiếu yêu cầu gia công, Phiếu nhập kho gia công, Bảng giá tại kho
- Sổ tay Kế toán – Công nợ nguồn nhân lực (KT-C01)
