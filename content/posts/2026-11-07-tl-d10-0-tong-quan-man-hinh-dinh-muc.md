---
title: "TỔNG QUAN MÀN HÌNH ĐỊNH MỨC"
date: "2026-11-07"
summary: "Màn hình ĐỊNH MỨC - DANH SÁCH liệt kê các định mức."
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

Màn hình **ĐỊNH MỨC - DANH SÁCH** liệt kê các **định mức**. Một định mức là **công thức của một kiểu gia công** (chọn ở **Danh mục gia công**, TL-D01), gồm ba phần:

- **Nguyên liệu**: nguyên liệu tiêu hao, số lượng, đơn giá, chi phí.
- **Nguồn lực**: chi phí nhân lực / nguồn lực.
- **Chi phí khác**: các khoản chi khác, có cờ **TÍNH CÔNG NỢ** và **TÍNH THEO S.M** (nhân với số mặt).

Định mức còn có **nghiệp vụ** (Sản xuất giấy, Sản xuất keo, Sản xuất ván tại kho, Sản xuất ván ngoài) để các màn khác lọc đúng định mức khi chọn.

Định mức được dùng ở:

- **Thành phẩm** (TL-D11): ô **GIA CÔNG**. **Mã định mức** đi vào **mã thành phẩm**, **tên định mức** đi vào **tên thành phẩm**.
- **Nguyên liệu** (TL-D08): ô **GIA CÔNG** (một định mức).
- **Phiếu đặt hàng sản xuất, yêu cầu gia công, nhập kho gia công** (sổ tay Bán hàng, Sản xuất): chọn định mức để tính đơn giá gia công tại kho từ **nguồn lực** và **chi phí khác**.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Định mức**.
- Muốn thêm định mức: đã có **Danh mục gia công** (TL-D01), **Nguyên liệu** (TL-D08), và nếu cần **Nguồn nhân lực**, **Nội dung thu chi** (sổ tay Thiết lập, phần A).

## 2. Mở chức năng

**Hàng hoá → Định mức**

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

Vùng đánh dấu trên ảnh này:

- **1**: Nội dung được đánh dấu: Tiền tố tìm kiểm tra thực tế
- **2**: Nội dung được đánh dấu: Dòng định mức mới và trạng thái Kích hoạt
- **3**: Nội dung được đánh dấu: Tổng cộng1

- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM DANH ĐỊNH MỨC**; Hướng dẫn: [HƯỚNG DẪN THÊM, SỬA ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-1-huong-dan-them-sua-dinh-muc/)
- **Biểu tượng Xuất Excel, Trình chọn cột, Tìm kiếm…**: Chức năng: Xuất, ẩn / hiện cột, tìm; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/), [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Cột Thao tác: Sửa / Sao chép / Xóa**: Chức năng: Sửa, sao chép, xoá một dòng; Hướng dẫn: [HƯỚNG DẪN THÊM, SỬA ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-1-huong-dan-them-sua-dinh-muc/), [HƯỚNG DẪN SAO CHÉP ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-2-huong-dan-sao-chep-dinh-muc/)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** / **Sao chép** / **Xóa** (hiện theo quyền)
- **Gia công**: Ý nghĩa: Tên kiểu gia công của định mức (ví dụ *MEL 101*)
- **Mã định mức**: Ý nghĩa: Mã dùng để ghép mã thành phẩm (ví dụ `MEL(EL)101S`)
- **Tên định mức**: Ý nghĩa: Tên dùng để ghép tên thành phẩm (ví dụ *MEL (EL) 101S*)
- **Tên in**: Ý nghĩa: Tên in trên chứng từ (ví dụ *MELAMINE*)
- **Trạng thái**: Ý nghĩa: **Kích hoạt** (chữ xanh) / **Ngưng sử dụng** (chữ đỏ)
- **Ghi chú**: Ý nghĩa: Ghi chú
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n**. Danh sách hiện cả dòng **Ngưng sử dụng** và **không có** cột Nghiệp vụ.

**Menu chuột phải:** trên tiêu đề cột có **Khôi phục bố cục**; trên một dòng có **Xem lại** (mở cửa sổ chỉ xem). Nhấp đúp vào dòng cũng mở cửa sổ chỉ xem **THÔNG TIN ĐỊNH MỨC**.

## 4. Trình tự công việc

```text
Danh mục gia công (TL-D01)  +  Nguyên liệu (TL-D08)  +  Nguồn nhân lực,
                                                        Nội dung thu chi
            ↓
Định mức (TL-D10): NGHIỆP VỤ + nguyên liệu + nguồn lực + chi phí khác
      ├──► Thành phẩm (TL-D11): ô GIA CÔNG → đoạn mã, tên định mức
      ├──► Nguyên liệu (TL-D08): ô GIA CÔNG
      └──► Phiếu yêu cầu / nhập kho gia công: đơn giá gia công
```

## 5. Thực hiện trên phần mềm

- **Tạo định mức mới**: Cách làm: **Thêm mới** → nhập thông tin, ba tab chi tiết; Bài hướng dẫn: [HƯỚNG DẪN THÊM, SỬA ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-1-huong-dan-them-sua-dinh-muc/)
- **Sửa một định mức**: Cách làm: **Sửa**; Bài hướng dẫn: [HƯỚNG DẪN THÊM, SỬA ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-1-huong-dan-them-sua-dinh-muc/)
- **Tạo định mức mới từ định mức gần giống**: Cách làm: **Sao chép**; Bài hướng dẫn: [HƯỚNG DẪN SAO CHÉP ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-2-huong-dan-sao-chep-dinh-muc/)
- **Xem không sửa**: Cách làm: Nhấp đúp hoặc chuột phải → **Xem lại**; Bài hướng dẫn: phần “Nhận biết màn hình”
- **Ngưng dùng**: Cách làm: **Sửa** → bỏ tick **Kích hoạt**; Bài hướng dẫn: phần “Những điều cần lưu ý”

### Điều kiện riêng khi sửa, xoá

- **Sửa**: lưu lại là **ghi đè toàn bộ** ba tab chi tiết theo nội dung cửa sổ.
- **Ngưng sử dụng**: dùng để đánh dấu định mức không dùng cho nghiệp vụ mới; thành phẩm, phiếu đã dùng định mức giữ liên kết. Riêng ô **GIA CÔNG** của cửa sổ Thành phẩm hiện không lọc trạng thái nên vẫn có thể thấy định mức đã ngưng. Người lập phải kiểm trạng thái, không chọn chỉ vì còn hiện trong danh sách.
- **Xóa**: xoá luôn nguyên liệu, nguồn lực, chi phí khác của định mức, và chỉ được khi chưa thành phẩm, nguyên liệu hay phiếu nào dùng định mức.

## 6. Giải thích các thông tin trên màn hình

Các trường nhập: xem [HƯỚNG DẪN THÊM, SỬA ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-1-huong-dan-them-sua-dinh-muc/) phần “Giải thích các thông tin trên màn hình”. Hai cột dễ nhầm ở danh sách:

- **Gia công**: Ý nghĩa: Kiểu gia công của định mức; Lưu ý: Chọn từ **Danh mục gia công**
- **Tên in**: Ý nghĩa: Tên in trên chứng từ; Lưu ý: Bắt buộc khi tạo định mức

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Định mức dùng để làm gì và đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Định mức muốn chọn được ở cửa sổ Thành phẩm phải có NGHIỆP VỤ** *Sản xuất ván tại kho* hoặc *Sản xuất ván ngoài*; ở cửa sổ Nguyên liệu phải có *Sản xuất giấy* hoặc *Sản xuất keo*. Định mức **không có nghiệp vụ** không hiện ở hai ô đó.

⚠️ **Đổi mã hoặc tên định mức không đổi mã, tên thành phẩm đã lưu.** Thành phẩm cũ giữ chữ cũ.

⚠️ Định mức đã gắn thành phẩm, nguyên liệu hoặc phiếu thì **không xoá được**. Muốn ngưng dùng thì bỏ tick **Kích hoạt**.

⚠️ Hộp xác nhận xoá hỏi **Bạn có muốn xóa hàng hóa này?** là câu chung của các màn Hàng hoá; thực tế là xoá định mức đang chọn.

### "Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: định mức đang gắn với thành phẩm, nguyên liệu hoặc phiếu gia công.
Cách xử lý: bỏ tick **Kích hoạt** thay vì xoá. Hệ thống huỷ cả lần xoá, định mức và ba tab chi tiết vẫn còn nguyên.

## 10. Câu hỏi thường gặp

**Tôi tạo định mức nhưng không thấy trong ô GIA CÔNG của thành phẩm?**
Kiểm tra **NGHIỆP VỤ** của định mức (cần *Sản xuất ván tại kho* hoặc *Sản xuất ván ngoài*) và trạng thái.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN THÊM, SỬA ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-1-huong-dan-them-sua-dinh-muc/) – Hướng dẫn thêm, sửa định mức.

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN THÊM, SỬA ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-1-huong-dan-them-sua-dinh-muc/) – Thêm, sửa định mức
- [HƯỚNG DẪN SAO CHÉP ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-2-huong-dan-sao-chep-dinh-muc/) – Sao chép định mức
- [TỔNG QUAN MÀN HÌNH DANH MỤC GIA CÔNG](/bai-viet/2026-11-07-tl-d01-0-tong-quan-man-hinh-danh-muc-gia-cong/) – Tổng quan màn hình Danh mục gia công
- [TỔNG QUAN THÀNH PHẨM](/bai-viet/2026-11-07-tl-d11-0-tong-quan-thanh-pham/) – Tổng quan màn hình Thành phẩm
- [TỔNG QUAN MÀN HÌNH NGUYÊN LIỆU](/bai-viet/2026-11-07-tl-d08-0-tong-quan-man-hinh-nguyen-lieu/) – Tổng quan màn hình Nguyên liệu
