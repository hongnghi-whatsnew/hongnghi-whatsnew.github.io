---
title: "TỔNG QUAN MÀN HÌNH SỔ CÁI KHO"
date: "2026-11-07"
summary: "Sổ cái kho liệt kê từng biến động nhập / xuất của mọi mặt hàng trong chi nhánh, theo đúng thứ tự hệ thống dùng để tính giá vốn bình quân gia quyền (gọi tắt là giá BQ)."
module: "Kho hàng"
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

**Sổ cái kho** liệt kê **từng biến động nhập / xuất** của mọi mặt hàng trong chi nhánh, theo đúng thứ tự hệ thống dùng để tính **giá vốn bình quân gia quyền** (gọi tắt là giá BQ). Mỗi dòng cho biết: phiếu nào, kho nào, nhập / xuất bao nhiêu, tồn sau dòng đó, giá BQ trước và sau dòng đó.

Các dòng sổ cái **do hệ thống tự ghi** khi lưu chứng từ kho: phiếu nhập kho, phiếu xuất kho, điều chỉnh kho, chuyển kho, xuất hàng, nhập gửi hàng, khách trả hàng, tiêu hao định mức sản xuất, tồn đầu kỳ, import giá vốn…

Bạn dùng màn hình này khi:

- Kiểm tra **vì sao giá vốn** một mặt hàng thay đổi (dòng nào làm giá BQ đổi).
- Đối chiếu tồn kho với báo cáo **Xuất nhập tồn**, tìm chỗ **tồn âm** hoặc thiếu dòng.
- (Người có quyền) sửa / xoá dòng sai, chèn bổ sung dòng thiếu (**Backfill**), đặt lại tồn đầu kỳ, **tính lại giá vốn** – xem hướng dẫn của bộ phận phụ trách, hướng dẫn của bộ phận phụ trách.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Sổ cái kho**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)) – sổ cái và giá vốn tính **theo chi nhánh**.
- Hiểu cơ bản về giá vốn bình quân gia quyền (xem phần “Giải thích các thông tin trên màn hình”).

## 2. Mở chức năng

**Kho hàng → Sổ cái kho**

## 3. Nhận biết màn hình

![Hình 1: Màn hình SỔ CÁI KHO](/posts/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/hinh-01-man-hinh-so-cai-kho.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày nhập/xuất**. Mặc định **mtd** (đầu tháng tới hôm nay); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại sổ cái; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xóa loạt (nút đỏ)**: Chức năng: Xoá các dòng đã tick; mờ khi chưa tick dòng nào; Hướng dẫn: hướng dẫn của bộ phận phụ trách
- **Tính lại giá vốn**: Chức năng: Chạy lại giá vốn cho một kỳ; Hướng dẫn: hướng dẫn của bộ phận phụ trách
- **Backfill**: Chức năng: Chèn dòng sổ cái còn thiếu; Hướng dẫn: hướng dẫn của bộ phận phụ trách
- **Set tồn đầu kỳ**: Chức năng: Đặt tồn đầu kỳ = báo cáo Xuất nhập tồn của tháng; Hướng dẫn: hướng dẫn của bộ phận phụ trách
- **Biểu tượng Xuất Excel, Trình chọn cột, Tìm kiếm…**: Chức năng: Xuất Excel, ẩn / hiện cột, tìm; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/), [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Ô chọn đầu dòng**: Chức năng: Tick dòng để **Xóa loạt**; Hướng dẫn: hướng dẫn của bộ phận phụ trách
- **Bút / thùng rác cuối dòng**: Chức năng: Sửa / xoá một dòng; Hướng dẫn: hướng dẫn của bộ phận phụ trách

Các nút  –  và  chỉ hiện khi có quyền tương ứng.

**Các cột trên sổ cái:**

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày nhập/xuất**: Ý nghĩa: Ngày chứng từ (giờ = giờ lập phiếu kho)
- **Ngày tạo/sửa phiếu**: Ý nghĩa: Lần lập / sửa phiếu gần nhất
- **Mã hàng, Tên hàng, Đvt**: Ý nghĩa: Hàng hoá
- **Kho**: Ý nghĩa: Kho phát sinh
- **Loại phiếu**: Ý nghĩa: Loại biến động (bảng dưới)
- **Mã phiếu**: Ý nghĩa: Mã chứng từ gốc (NK…, XK…, XC…, NC…, DC…, XH…, GH…)
- **Nguồn**: Ý nghĩa: Chứng từ sinh ra dòng (bảng dưới)
- **SL nhập, SL xuất**: Ý nghĩa: Số lượng nhập / xuất của dòng
- **SL tồn kho**: Ý nghĩa: Tồn của mã hàng **tại kho của dòng** sau dòng này
- **SL tồn tổng**: Ý nghĩa: Tồn của mã hàng **toàn chi nhánh (mọi kho)** sau dòng này
- **Giá BQ trước**: Ý nghĩa: Giá vốn bình quân trước dòng này
- **Giá nhập**: Ý nghĩa: Đơn giá nhập (dòng nhập)
- **Giá xuất**: Ý nghĩa: Đơn giá xuất (dòng xuất) – ý nghĩa tuỳ loại, xem phần “Giải thích các thông tin trên màn hình”
- **Giá BQ sau**: Ý nghĩa: Giá vốn bình quân sau dòng này
- **ĐC hồi tố**: Ý nghĩa: Tick khi là dòng đảo do sửa / xoá chứng từ đã ghi sổ
- **ID phiếu**: Ý nghĩa: Ẩn sẵn

Dòng cuối: **TỔNG: n dòng**, tổng **SL nhập**, **SL xuất**; khi tập dữ liệu tải về chỉ có **một mã hàng**, ô **SL tồn tổng** và **Giá BQ sau** hiện tồn và giá BQ **cuối kỳ**. Lọc một mã trên lưới nhiều mã chưa chắc làm các tổng này hiện.

**Loại phiếu thường gặp:**

- **NHAP_KHO**: Ý nghĩa: Nhập kho (mua hàng, sản xuất, gửi hàng, chuyển kho đến, tồn đầu kỳ…)
- **XUAT_KHO**: Ý nghĩa: Xuất kho (bán hàng, chuyển kho đi, xuất hàng, tiêu hao…)
- **KHACH_TRA_HANG**: Ý nghĩa: Khách trả hàng nhập lại
- **TRA_HANG_NCC**: Ý nghĩa: Xuất trả nhà cung cấp
- **DC_TANG, DC_GIAM**: Ý nghĩa: Điều chỉnh kho tăng / giảm
- **MUA_TRAMUON, BAN_TRAMUON, HAO_HUT**: Ý nghĩa: Mượn hàng, hao hụt (nếu có)

**Nguồn thường gặp:** trống (phiếu nhập / xuất kho thường), **TON_DAU_KY** (tồn đầu kỳ), **CHUYEN_KHO** (chuyển kho), **DIEUCHINH_KHO**, **NHAP_GUIHANG** (nhập gửi hàng), **XUAT_HANG** (phiếu xuất hàng), **GIA_THANH** (nhập thành phẩm từ giá thành), **TIEUHAO_DINHMUC** (tiêu hao định mức), **IMPORT_GIAVON** (mốc giá vốn import cuối tháng).

## 4. Trình tự công việc

**Sổ cái kho được ghi thế nào:**

```text
Lưu / sửa / xoá chứng từ kho
      ↓
Hệ thống ghi / xoá dòng sổ cái của chứng từ
      ↓
Tính lại giá BQ cho mã hàng đó (chạy lại toàn bộ lịch sử của mã)
      ↓
Cập nhật Giá BQ trước / sau, SL tồn của từng dòng
      ↓
Giá BQ cuối cùng (làm tròn đồng) = giá vốn hiện hành của hàng hoá
```

**Các chức năng trên màn hình:**

```text
Sổ cái kho
   ├── Xem, lọc, tìm, xuất Excel (GEN-04, GEN-05)
   ├── Sửa / xoá một dòng · Xóa loạt (KHO-A09.1)
   ├── Tính lại giá vốn (KHO-A09.2)
   ├── Backfill dòng thiếu (KHO-A09.2)
   └── Set tồn đầu kỳ theo tháng (KHO-A09.2)
```

## 5. Thực hiện trên phần mềm

- **Xem sổ cái tháng này**: Cách làm: Mở màn hình (mặc định đầu tháng tới hôm nay); Bài hướng dẫn: Mục này
- **Xem một mặt hàng**: Cách làm: Gõ mã hàng vào ô lọc cột **Mã hàng** hoặc **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem một kho**: Cách làm: Lọc cột **Kho**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Xem các dòng của một phiếu**: Cách làm: Lọc cột **Mã phiếu**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm chỗ tồn âm**: Cách làm: Lọc **SL tồn kho** / **SL tồn tổng** < 0; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Sửa / xoá dòng sai**: Cách làm: Bút / thùng rác cuối dòng, **Xóa loạt**; Bài hướng dẫn: hướng dẫn của bộ phận phụ trách
- **Chèn dòng thiếu**: Cách làm: **Backfill**; Bài hướng dẫn: hướng dẫn của bộ phận phụ trách
- **Đặt lại tồn đầu kỳ**: Cách làm: **Set tồn đầu kỳ**; Bài hướng dẫn: hướng dẫn của bộ phận phụ trách
- **Tính lại giá vốn**: Cách làm: **Tính lại giá vốn**; Bài hướng dẫn: hướng dẫn của bộ phận phụ trách
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Đọc lịch sử giá vốn của một mặt hàng

**Bước 1 –** Chọn khoảng ngày cần xem ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Bước 2 –** Gõ mã hàng vào ô lọc dưới tiêu đề **Mã hàng**.

**Bước 3 –** Đọc từ trên xuống: dòng có **Giá BQ sau** khác **Giá BQ trước** là dòng làm giá vốn thay đổi (thường là nhập mua có giá). **SL tồn tổng** cho biết tồn toàn chi nhánh tại thời điểm đó.

**Bước 4 –** Bấm vào **Mã phiếu** để tìm chứng từ gốc ở màn tương ứng (phiếu nhập kho, xuất kho…).

⚠️ Không sắp xếp được bằng cách bấm tiêu đề cột: sổ cái luôn giữ đúng thứ tự tính giá vốn.

### Thứ tự các dòng

Sổ cái xếp theo **ngày chứng từ**. Trong cùng một ngày:

1. Dòng **tồn đầu kỳ**.
2. Dòng **nhập có giá** (nhập mua, khách trả, điều chỉnh tăng có giá…).
3. Dòng **nhập không giá** (chuyển kho đến, nhập gửi hàng, điều chỉnh tăng không giá…).
4. Dòng **xuất**.
5. Dòng **import giá vốn** cuối tháng.

Cùng nhóm thì theo giờ lập phiếu kho. Vì vậy trong một ngày các dòng nhập luôn đứng trước dòng xuất, không theo giờ tạo phiếu.

### Cách tính SL tồn

- **SL tồn kho** = tồn của (mã hàng, kho) trước ngày đầu kỳ đang xem (cộng nhập trừ xuất mọi dòng trước đó) + lũy kế nhập − xuất trong kỳ tới dòng này.
- **SL tồn tổng** = lũy kế nhập − xuất của mã hàng ở **mọi kho** trong chi nhánh tới dòng này.
- Dòng **IMPORT_GIAVON** để trống hai cột tồn (dòng này chỉ đặt lại giá, không đổi số lượng).

### Cách tính Giá BQ

Giá BQ tính **chung cho mã hàng trong cả chi nhánh** (không tách theo kho):

- **Nhập có giá (NHAP_KHO, KHACH_TRA_HANG, DC_TANG có giá, MUA_TRAMUON) và TRA_HANG_NCC**: Giá BQ sau: (Tồn trước × BQ trước + (SL nhập − SL xuất) × Giá) ÷ Tồn sau
- **– nếu Tồn sau ≤ 0**: Giá BQ sau: Giữ BQ trước
- **– nếu Tồn trước < 0**: Giá BQ sau: = Giá của dòng
- **DC_TANG không giá, nhập chuyển kho**: Giá BQ sau: Giữ BQ trước (nhập tại giá BQ hiện hành)
- **Mọi dòng xuất (XUAT_KHO, DC_GIAM, tiêu hao…)**: Giá BQ sau: Giữ BQ trước
- **IMPORT_GIAVON**: Giá BQ sau: = giá import (ghi đè, không bình quân)

"Giá" của dòng là **Giá nhập**; dòng trả NCC / dòng đảo dùng **Giá xuất**; không có thì lấy BQ trước.

### Ý nghĩa cột Giá xuất

- **Xuất bán (phiếu xuất kho)**: Giá xuất: **Giá bán chưa thuế** – chỉ để tham khảo, **không phải giá vốn**
- **Trả NCC**: Giá xuất: Giá nhập của lô hàng trả (sau chiết khấu, cộng chi phí phân bổ)
- **Chuyển kho đi**: Giá xuất: Giá BQ tại thời điểm đó
- **Tiêu hao định mức**: Giá xuất: Giá BQ tại thời điểm đó (nếu đã có giá)
- **Xuất hàng (xuất khác)**: Giá xuất: 0 – hàng xuất theo giá BQ

Giá trị xuất tính theo giá vốn = **SL xuất × Giá BQ trước** của dòng.

### Giá vốn hiện hành

Sau mỗi lần tính lại, **Giá BQ sau của dòng cuối cùng** (làm tròn đến đồng) được ghi làm **giá vốn hiện hành** của hàng hoá trong chi nhánh, kèm lịch sử thay đổi giá vốn. Mặt hàng **chưa từng có giá** (chỉ nhập giá 0 / chỉ xuất) thì giữ nguyên giá vốn danh mục.

## 7. Kiểm tra sau khi thực hiện

Bạn đọc được từng dòng sổ cái kho: tồn sau mỗi biến động và lý do giá vốn bình quân thay đổi; biết cần đọc bài nào để sửa sổ cái.

## 8. Những điều cần lưu ý

⚠️ Ghi chú kiểm chứng còn nghi vấn phần xuất theo lô chưa có đủ dòng sổ cái. Khi đối chiếu có lô, so cả lượng lô và lượng thường; không dùng Backfill/Set tồn đầu kỳ để che sai lệch chưa tìm được nguyên nhân.

⚠️ **Sổ cái kho là dữ liệu do hệ thống sinh ra từ chứng từ.** Sai số liệu thì sửa **chứng từ gốc** trước; chỉ sửa / xoá trực tiếp dòng sổ cái khi được kế toán trưởng / IT đồng ý (hướng dẫn của bộ phận phụ trách).

⚠️ **SL tồn tổng** là tồn **mọi kho** của mã hàng, khác **SL tồn kho** (một kho). Hàng **gửi** (nhập gửi hàng) cũng được cộng vào tồn.

⚠️ Cột **Giá xuất** của dòng xuất bán là **giá bán**, không dùng để đọc giá vốn.

⚠️ Tổng **SL tồn tổng** / **Giá BQ sau** cuối kỳ chỉ hiện khi toàn bộ dữ liệu được tải cho kỳ chỉ có một mã hàng; lọc một mã trên lưới nhiều mã chưa chắc làm tổng này hiện.

⚠️ Khoảng ngày rộng (cả năm, toàn chi nhánh) có thể tải chậm – nên xem theo tháng.

### SL tồn kho / SL tồn tổng bị âm 

Nguyên nhân: chứng từ xuất có ngày trước chứng từ nhập; thiếu dòng nhập (chứng từ chưa ghi sổ); ngày chứng từ nhập sai.
Cách xử lý: lọc mã hàng, tìm dòng đầu tiên âm, kiểm tra ngày các chứng từ quanh đó; chỉ sửa ngày nếu khác ngày thực tế. Nếu thiếu dòng sổ, báo người phụ trách xác minh phạm vi Backfill theo hướng dẫn của bộ phận phụ trách; không đổi ngày thực tế để xóa dấu tồn âm.

### Giá BQ tăng / giảm bất thường 

Nguyên nhân: một phiếu nhập có giá sai (thừa / thiếu số 0), hoặc tồn trước ≤ 0 khiến giá BQ nhảy theo giá dòng nhập.
Cách xử lý: tìm dòng có Giá BQ sau đổi mạnh, mở phiếu gốc sửa giá; hệ thống tự tính lại.

### Không thấy nút Xóa loạt / Tính lại giá vốn / Backfill / Set tồn đầu kỳ 

Nguyên nhân: tài khoản thiếu quyền tương ứng (xem phần “Chuẩn bị trước khi thực hiện”).
Cách xử lý: liên hệ quản trị hệ thống.

### Sổ cái không có dòng của một phiếu (Lỗi hệ thống)

Nguyên nhân: phiếu cũ trước khi có sổ cái, hoặc lỗi ghi sổ.
Cách xử lý: chạy **Backfill** cho khoảng ngày chứa phiếu (hướng dẫn của bộ phận phụ trách) hoặc báo IT.

## 10. Câu hỏi thường gặp

**Sổ cái kho và báo cáo Xuất nhập tồn khác nhau thế nào?**
Sổ cái là từng dòng biến động kèm giá BQ; báo cáo Xuất nhập tồn ([TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/)) là số tổng hợp theo kỳ. Đối chiếu hai nguồn ở [TỔNG QUAN MÀN HÌNH ĐỐI CHIẾU SỔ CÁI KHO - XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c08-0-tong-quan-man-hinh-doi-chieu-so-cai-kho-xuat-nhap-ton/).

**Vì sao trong ngày dòng xuất đứng sau dòng nhập dù xuất lập trước?**
Sổ cái xếp nhập trước xuất trong cùng ngày chứng từ để tránh tồn âm giả và tính giá vốn đúng.

**Giá vốn tính theo kho hay theo chi nhánh?**
Theo **mã hàng trong chi nhánh**, dùng chung cho mọi kho.

## 11. Công việc tiếp theo

**Tiếp theo:** hướng dẫn của bộ phận phụ trách – Hướng dẫn sửa, xoá dòng sổ cái kho; [TỔNG QUAN MÀN HÌNH ĐỐI CHIẾU SỔ CÁI KHO - XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c08-0-tong-quan-man-hinh-doi-chieu-so-cai-kho-xuat-nhap-ton/) – Đối chiếu sổ cái kho.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- hướng dẫn của bộ phận phụ trách – Hướng dẫn sửa, xoá dòng sổ cái kho
- hướng dẫn của bộ phận phụ trách – Hướng dẫn backfill, set tồn đầu kỳ và tính lại giá vốn từ sổ cái kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/) – Thống kê xuất nhập tồn
- [TỔNG QUAN MÀN HÌNH ĐỐI CHIẾU SỔ CÁI KHO - XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c08-0-tong-quan-man-hinh-doi-chieu-so-cai-kho-xuat-nhap-ton/) – Đối chiếu sổ cái kho
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/), [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/), [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT CHUYỂN KHO](/bai-viet/2026-11-07-kho-a06-0-tong-quan-man-hinh-phieu-xuat-chuyen-kho/), [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT HÀNG](/bai-viet/2026-11-07-kho-a07-0-tong-quan-man-hinh-phieu-xuat-hang/), [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP CHUYỂN KHO](/bai-viet/2026-11-07-kho-a08-0-tong-quan-man-hinh-phieu-nhap-chuyen-kho/) – các phiếu kho ghi sổ cái
- Sổ tay Giá thành – Tính lại giá vốn
