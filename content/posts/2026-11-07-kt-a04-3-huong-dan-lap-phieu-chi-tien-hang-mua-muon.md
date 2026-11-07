---
title: "HƯỚNG DẪN LẬP PHIẾU CHI TIỀN HÀNG MUA MƯỢN"
date: "2026-11-07"
summary: "Khi công ty mượn hàng của đối tác rồi giữ luôn hàng (trả bằng tiền), thủ kho lập phiếu xuất trả có dòng Trả bằng tiền (sổ tay Kho hàng, KHO-B04)."
module: "Kế toán"
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

Khi công ty mượn hàng của đối tác rồi **giữ luôn hàng** (trả bằng tiền), thủ kho lập **phiếu xuất trả** có dòng **Trả bằng tiền** (sổ tay Kho hàng, KHO-B04). Phiếu đó ghi **Tổng tiền mua** và làm **tăng công nợ nhà cung cấp**. Kế toán lập **phiếu chi loại Mua hàng mượn** từ phiếu xuất trả để trả tiền.

Hệ thống tự điền số tiền còn phải trả, nhà cung cấp, người nhận, và cập nhật **Số tiền đã chi**, **Trạng thái chi** của phiếu xuất trả.

Đây là chiều ngược của phiếu thu **Hàng cho mượn** ([HƯỚNG DẪN LẬP PHIẾU THU TIỀN HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kt-a03-2-huong-dan-lap-phieu-thu-tien-hang-cho-muon/)): phiếu thu nhận tiền khách mua hàng công ty cho mượn; phiếu chi này trả tiền hàng công ty đi mượn. Khác [HƯỚNG DẪN LẬP PHIẾU THU TIỀN HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kt-a03-2-huong-dan-lap-phieu-thu-tien-hang-cho-muon/): phiếu chi kiểm tra **không chi vượt** tổng tiền của phiếu xuất trả, và cửa sổ chọn chỉ hiện phiếu **Chưa chi**.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** màn hình **Phiếu chi**.
- Đã có **phiếu xuất trả** (mượn hàng) có dòng **Trả bằng tiền**, **đã chọn NHÀ CUNG CẤP**, và **chưa chi** đồng nào ([HƯỚNG DẪN LẬP PHIẾU XUẤT TRẢ HÀNG MƯỢN](/bai-viet/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/)).
- Quỹ chi được phân cho bạn và đủ tồn.
- **Ngày chi** thuộc kỳ kế toán chưa khóa.

## 2. Mở chức năng

**Kế toán → Phiếu chi → Thêm mới → Mua hàng mượn**

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ DANH SÁCH - PHIẾU XUẤT TRẢ, ĐI MƯỢN](/posts/2026-11-07-kt-a04-3-huong-dan-lap-phieu-chi-tien-hang-mua-muon/hinh-01-danh-sach-phieu-xuat-tra-di-muon.png)

- **Ô chọn khoảng ngày**: Ý nghĩa: Lọc theo **Ngày xuất**, mặc định hôm nay (nhãn *today*). Đổi ngày xong bấm **Tải lại** bên cạnh
- **Bảng phiếu**: Ý nghĩa: Cột **STT**, **Ngày xuất**, **Mã phiếu**, **Từ phiếu** (phiếu nhập mượn), **Kho xuất**, **Trả kho**, **Mã phiếu gốc**, **Tổng tiền mua**, **Ghi chú**; cuộn ngang để xem các cột còn lại (**Số tiền đã chi**, **Người tạo**…). Chỉ hiện phiếu có dòng trả bằng tiền và **Chưa chi**
- **Dòng phiếu cần chi**: Ý nghĩa: Nhấp đúp để chọn và mở cửa sổ phiếu chi (Hình 1: XT00113327, tổng tiền mua 150.000)

Cửa sổ có thêm **Trình chọn cột**, ô **Tìm kiếm…**, liên kết **Tạo Bộ lọc** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)); nút phóng to và nút đóng **×** ở góc phải trên.

![Hình 2: cửa sổ THÊM MỚI - PHIẾU CHI loại Mua hàng mượn](/posts/2026-11-07-kt-a04-3-huong-dan-lap-phieu-chi-tien-hang-mua-muon/hinh-02-form-phieu-chi-mua-hang-muon.png)

- **NHÀ CUNG CẤP**: Ý nghĩa: Tự lấy từ phiếu xuất trả, bị khoá (không có mũi tên chọn)
- **SỐ TÀI KHOẢN**: Ý nghĩa: Chọn tài khoản nhận tiền của NCC (dùng khi in UNC)
- **TIỀN CHI**: Ý nghĩa: Tự điền = Tổng tiền mua − Số tiền đã chi (Hình 2: 150.000), sửa được
- **QUỸ CHI, NỘI DUNG (hàng 3)**: **GHI CHÚ**, **NGÀY HẠCH TOÁN** (hàng 4); Ý nghĩa: Bắt buộc. **QUỸ CHI**, **NỘI DUNG**, **GHI CHÚ** để trống, phải tự nhập
- **TỪ PHIẾU**: Ý nghĩa: Chọn lại phiếu xuất trả khác
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

**NỢ CŨ**, **CÒN NỢ** để trống ở loại này (khác loại Nhà cung cấp). **ĐIỆN THOẠI**, **ĐỊA CHỈ** tự điền từ danh mục NCC. Các ô khác giống phiếu chi Nhà cung cấp ([HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/)).

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kế toán
   ↓
Phiếu chi
   ↓
Thêm mới → Mua hàng mượn
   ↓
DANH SÁCH - PHIẾU XUẤT TRẢ, ĐI MƯỢN → nhấp đúp phiếu
```

```text
(Kho) Phiếu nhập mượn – công ty mượn hàng của đối tác (KHO-B03)
      ↓
(Kho) Phiếu xuất trả – dòng "Trả bằng tiền", chọn NHÀ CUNG CẤP (KHO-B04)
      → công nợ NCC tăng Tổng tiền mua · trạng thái chi: Chưa chi
      ↓
Phiếu chi → Thêm mới → Mua hàng mượn
      ↓
Nhấp đúp phiếu xuất trả → cửa sổ điền NCC, Người nhận, Tiền chi
      ↓
Chọn Ngày chi, Quỹ chi, Nội dung · Ghi chú → Lưu lại
      ↓
Quỹ chi giảm · công nợ NCC giảm
Phiếu xuất trả: Số tiền đã chi, Trạng thái chi (Đang chi / Đã chi)
```

### Bước 1 – Chọn phiếu xuất trả

Vào **Kế toán → Phiếu chi**, bấm **Thêm mới** → **Mua hàng mượn**. Cửa sổ **DANH SÁCH - PHIẾU XUẤT TRẢ, ĐI MƯỢN** mở ra (Hình 1). Chọn khoảng ngày chứa **ngày xuất** của phiếu, bấm **Tải lại**, kiểm tra **Tổng tiền mua**, rồi **nhấp đúp** vào dòng.

### Bước 2 – Kiểm tra thông tin tự điền

Chọn nhầm phiếu: bấm **TỪ PHIẾU**  ở chân cửa sổ để chọn lại.

### Bước 3 – Nhập phần còn lại

- **NGÀY CHI**: ngày trả tiền.
- **TIỀN CHI**: sửa nếu chỉ trả một phần (xem lưu ý phần “Những điều cần lưu ý”).
- **SỐ TÀI KHOẢN**: chọn nếu chuyển khoản.
- **NGƯỜI NHẬN**: kiểm tra; sửa nếu người nhận tiền khác tên NCC.
- **ĐỊA CHỈ**: NCC chưa khai địa chỉ thì ô hiện *null, null* – xoá hoặc gõ lại trước khi in C31.

### Bước 4 – Bấm Lưu lại

Bấm **Lưu lại**. Thành công: **Lưu thành công**. Chưa chọn phiếu xuất trả: cảnh báo **Vui lòng chọn phiếu để chi**.

## 6. Giải thích các thông tin trên màn hình

- **Phiếu xuất trả**: Ý nghĩa: Phiếu nguồn; Bắt buộc: Có; Lưu ý: Chọn qua cửa sổ danh sách / **TỪ PHIẾU**
- **Nhà cung cấp**: Ý nghĩa: Đối tác cho mượn hàng; Bắt buộc: Có; Lưu ý: Tự lấy, khoá. Phiếu xuất trả không có NCC thì không lưu được
- **Số tài khoản**: Ý nghĩa: Tài khoản nhận tiền của NCC; Bắt buộc: Không; Lưu ý: In lên UNC
- **Người nhận**: Ý nghĩa: Người nhận tiền; Bắt buộc: Có; Lưu ý: Tự điền tên rút gọn NCC, sửa được
- **Tiền chi**: Ý nghĩa: Số tiền trả lần này; Bắt buộc: Nên nhập; Lưu ý: Tổng các phiếu chi của phiếu xuất trả không vượt **Tổng tiền mua**
- **Tiền giảm**: Ý nghĩa: Phần trừ công nợ không chi tiền; Bắt buộc: Không; Lưu ý: Cũng tính vào số đã chi của phiếu xuất trả
- **Quỹ chi, Nội dung, Ghi chú, Ngày chi, Ngày hạch toán**: Ý nghĩa: Như phiếu chi thường; Bắt buộc: Có; Lưu ý: Xem [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/)

## 7. Kiểm tra sau khi thực hiện

- Phiếu chi loại **Mua hàng mượn** được lưu.
- Tồn quỹ chi giảm **Tiền chi**; công nợ NCC giảm **Tổng chi**.
- Phiếu xuất trả được cập nhật **Số tiền đã chi** (= tổng Tiền chi + Tiền giảm), **Trạng thái chi**: **Đang chi** (còn thiếu) hoặc **Đã chi** (đủ). Từ lúc có phiếu chi, phiếu xuất trả không sửa / xoá được bên Kho.
- Khi chạy hạch toán tự động: Nợ 331 / Có TK tiền của quỹ chi.

## 8. Những điều cần lưu ý

⚠️ **Nên trả đủ một lần.** Cửa sổ chọn chỉ hiện phiếu **Chưa chi**; phiếu đã trả một phần (**Đang chi**) không còn trong danh sách để lập phiếu chi tiếp. Với phần còn lại, đối chiếu phiếu đã chi và nhờ kế toán trưởng chốt cách thanh toán tiếp; không tự tạo lại phiếu nguồn. Nếu phương án được duyệt dùng phiếu chi loại **Nhà cung cấp** ([HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/)), phiếu đó giảm công nợ NCC nhưng **không cập nhật Trạng thái chi** của phiếu xuất trả, nên phải theo dõi đối chiếu riêng.

⚠️ **Tổng chi không được vượt Tổng tiền mua** của phiếu xuất trả – hệ thống chặn khi lưu.

⚠️ cửa sổ loại này **không hiện NỢ CŨ / CÒN NỢ**. Muốn biết công nợ NCC trước và sau khi chi, xem **Công nợ nhà cung cấp** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NHÀ CUNG CẤP](/bai-viet/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/)).

⚠️ Phiếu xuất trả đã gắn phiếu chi phải được đối chiếu với kế toán trước điều chỉnh. Không xóa khoản chi thực tế chỉ để mở khóa phiếu Kho; người phụ trách chốt chứng từ cần sửa và trình tự xử lý liên kết.

### "Vui lòng chọn phiếu để chi" 

Nguyên nhân: chưa chọn phiếu xuất trả.
Cách xử lý: bấm **TỪ PHIẾU**, nhấp đúp phiếu cần chi.

### "CẢNH BÁO – Lỗi thêm: Tông chi(<số đã chi>) > Tổng tiền(<tổng tiền mua>)" 

Nguyên nhân: tổng **Tiền chi** + **Tiền giảm** của các phiếu chi gắn phiếu xuất trả này vượt **Tổng tiền mua**.
Cách xử lý: giảm **TIỀN CHI** / **TIỀN GIẢM**.

### Dưới cửa sổ báo "Vui lòng chọn nhà cung cấp" 

Nguyên nhân: phiếu xuất trả không chọn **NHÀ CUNG CẤP**; ô NCC trên phiếu chi bị khoá nên không chọn bù được.
Cách xử lý: nhờ thủ kho bổ sung NCC trên phiếu xuất trả ([HƯỚNG DẪN LẬP PHIẾU XUẤT TRẢ HÀNG MƯỢN](/bai-viet/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/)), rồi lập lại.

### Không thấy phiếu xuất trả cần chi 

Kiểm tra: khoảng ngày trong cửa sổ chọn (mặc định hôm nay – nhãn *today*); phiếu có dòng **Trả bằng tiền** không; phiếu đã có phiếu chi chưa (**Đang chi** / **Đã chi** bị ẩn).
Cách xử lý: chọn khoảng ngày rộng hơn; phiếu đã chi một phần xem lưu ý phần “Những điều cần lưu ý”.

Các lỗi khác (khóa sổ, quỹ không đủ tồn, thiếu quỹ / nội dung / ghi chú): xem phần “Vướng mắc thường gặp” của [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/). Lỗi hệ thống: [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Phiếu xuất trả trả bằng hàng có cần lập phiếu chi không?**
Không. Chỉ dòng **Trả bằng tiền** mới tạo **Tổng tiền mua** và công nợ NCC.

**Phiếu nhập mượn / xuất trả lập ở đâu?**
Sổ tay Kho hàng – phần Mượn hàng (KHO-B03, KHO-B04).

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN IN PHIẾU CHI C31 VÀ ỦY NHIỆM CHI](/bai-viet/2026-11-07-kt-a04-4-huong-dan-in-phieu-chi-c31-va-uy-nhiem-chi/) – Hướng dẫn in phiếu chi C31 và ủy nhiệm chi.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/) – Tổng quan màn hình Phiếu chi
- [HƯỚNG DẪN LẬP PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-1-huong-dan-lap-phieu-chi/) – Hướng dẫn lập phiếu chi
- [HƯỚNG DẪN LẬP PHIẾU THU TIỀN HÀNG CHO MƯỢN](/bai-viet/2026-11-07-kt-a03-2-huong-dan-lap-phieu-thu-tien-hang-cho-muon/) – Hướng dẫn lập phiếu thu tiền hàng cho mượn
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT TRẢ](/bai-viet/2026-11-07-kho-b04-0-tong-quan-man-hinh-phieu-xuat-tra/) – Tổng quan màn hình Phiếu xuất trả; [HƯỚNG DẪN LẬP PHIẾU XUẤT TRẢ HÀNG MƯỢN](/bai-viet/2026-11-07-kho-b04-1-huong-dan-lap-phieu-xuat-tra-hang-muon/) – Lập phiếu xuất trả hàng mượn
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ NHÀ CUNG CẤP](/bai-viet/2026-11-07-kt-c05-0-tong-quan-man-hinh-thong-ke-cong-no-nha-cung-cap/) – Công nợ nhà cung cấp
