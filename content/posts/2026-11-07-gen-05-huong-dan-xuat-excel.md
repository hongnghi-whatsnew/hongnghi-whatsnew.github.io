---
title: "HƯỚNG DẪN XUẤT EXCEL"
date: "2026-11-07"
summary: "Mọi bảng danh sách có quyền Xuất dữ liệu đều xuất được ra file Excel (.xlsx) theo đúng những gì đang hiển thị: khoảng ngày, bộ lọc, các cột đang hiện, thứ tự sắp xếp."
module: "Thao tác chung"
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

Mọi bảng danh sách có quyền **Xuất dữ liệu** đều xuất được ra file Excel (`.xlsx`) theo đúng những gì đang hiển thị: khoảng ngày, bộ lọc, các cột đang hiện, thứ tự sắp xếp.

Có 3 kiểu xuất:

- **Xuất tất cả**: Có ở đâu: Mọi danh sách; Kết quả: Toàn bộ dòng đang lọc (mọi trang), các cột đang hiện
- **Xuất dòng đã chọn**: Có ở đâu: Một số màn thống kê kho, báo cáo gộp; Kết quả: Chỉ các dòng đang được chọn
- **Xuất theo custom (chọn cột + nhóm)**: Có ở đâu: **Hồ sơ nhân sự**, **Thống kê xuất nhập tồn**; Kết quả: Tự chọn cột cần xuất, có thể nhóm theo một cột và thêm sheet **Tổng hợp**

Bài này lấy màn **Phiếu nhập kho** (xuất tất cả) và **Thống kê xuất nhập tồn** (xuất theo custom) làm ví dụ.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Xuất dữ liệu** của màn hình.
- Đã chọn khoảng ngày, lọc, sắp xếp, ẩn / hiện cột như mong muốn ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).
- Máy có Microsoft Excel (hoặc phần mềm đọc được `.xlsx`).

## 2. Mở chức năng

Màn hình danh sách bất kỳ → biểu tượng **Xuất Excel** ở góc trên phải bảng.

Ví dụ: **Nghiệp vụ → Kho hàng → Phiếu nhập kho → Xuất Excel**; **Thống kê → Thống kê kho → Xuất nhập tồn → Xuất Excel → Xuất ra dữ liệu theo custom**.

## 3. Nhận biết màn hình

![Hình 1: Biểu tượng Xuất Excel trên danh sách](/posts/2026-11-07-gen-05-huong-dan-xuat-excel/hinh-01-nut-xuat-excel.png)

- **Biểu tượng Xuất Excel (chú thích khi rê chuột: Xuất ra tất cả dữ liệu)**: Ý nghĩa: Xuất toàn bộ danh sách đang lọc

![Hình 2: Nút Xuất Excel có nhiều lựa chọn (ví dụ Thống kê kho → Xuất nhập tồn)](/posts/2026-11-07-gen-05-huong-dan-xuat-excel/hinh-02-menu-xuat-excel.png)

- **Xuất ra tất cả dữ liệu**: Ý nghĩa: Như Hình 1
- **Xuất ra dữ liệu đã chọn**: Ý nghĩa: Chỉ xuất các dòng đang được tick / chọn
- **Xuất ra dữ liệu theo custom**: Ý nghĩa: Mở hộp **Chọn cột xuất Excel**

![Hình 3: Hộp Chọn cột xuất Excel](/posts/2026-11-07-gen-05-huong-dan-xuat-excel/hinh-03-chon-cot-xuat-excel.png)

- **Đã chọn N cột**: Ý nghĩa: Số cột sẽ xuất
- **Nhóm theo cột**: Ý nghĩa: Chọn một cột để chia file thành từng nhóm. Để trống = **Không nhóm (xuất thường)**
- **Danh sách cột (có ô Tìm cột..., ô Chọn tất cả)**: Ý nghĩa: Tick cột cần xuất; cột thuộc nhóm tiêu đề được gom dưới tên nhóm
- **Hủy**: Ý nghĩa: Đóng, không xuất
- **Xuất Excel**: Ý nghĩa: Xuất file (mờ khi chưa chọn cột nào)

## 4. Trình tự công việc

```text
Mở danh sách → chọn khoảng ngày, lọc, chọn cột (GEN-04)
      ↓
Bấm Xuất Excel
      ├── Xuất ra tất cả dữ liệu ──► tải file ngay
      ├── Xuất ra dữ liệu đã chọn ──► tải file chỉ có dòng đã chọn
      └── Xuất ra dữ liệu theo custom
             → Chọn cột xuất Excel → (Nhóm theo cột) → Xuất Excel
             → file có sheet DATA (+ sheet Tổng hợp nếu nhóm)
      ↓
Mở file trong thư mục Tải về của trình duyệt
```

### 8.1. Xuất tất cả

**Bước 1 –** Chuẩn bị danh sách: khoảng ngày, tìm kiếm, lọc, sắp xếp, ẩn / hiện cột ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

**Bước 2 –** Bấm biểu tượng **Xuất Excel**  (Hình 1). Với màn có nhiều lựa chọn (Hình 2), chọn **Xuất ra tất cả dữ liệu**.

**Bước 3 –** Trình duyệt tải về file đặt tên theo mẫu **DANH SÁCH - <TÊN MÀN HÌNH> - <ngày_tháng_năm>.xlsx**, ví dụ `DANH SÁCH - PHIẾU NHẬP KHO - 08_10_2026.xlsx`. Màn thống kê có tên dạng `THỐNG KÊ - XUẤT NHẬP TỒN - 08_10_2026.xlsx`.

**Bước 4 –** Mở file. Dữ liệu nằm ở sheet **DATA**: dòng đầu là tiêu đề cột (chữ đậm), sau đó là các dòng dữ liệu, cuối cùng là dòng tổng (nếu bảng có).

### 8.2. Xuất dòng đã chọn

**Bước 1 –** Tick các dòng cần xuất (ô vuông đầu dòng), hoặc giữ **Ctrl** và bấm từng dòng.

**Bước 2 –** Bấm **Xuất Excel** → **Xuất ra dữ liệu đã chọn**.

### 8.3. Xuất theo cột tự chọn và nhóm theo cột

**Bước 1 –** Bấm **Xuất Excel** → **Xuất ra dữ liệu theo custom**. Hộp **Chọn cột xuất Excel** mở ra (Hình 3). Lần đầu, các cột đang hiện trên bảng được tick sẵn; các lần sau, hộp nhớ lựa chọn lần trước trên máy này.

**Bước 2 –** Tick / bỏ tick cột cần xuất. Gõ vào ô **Tìm cột...** để tìm nhanh. Tick tên nhóm cột để chọn cả nhóm.

**Bước 3 –** (Tuỳ chọn) Chọn một cột ở ô **Nhóm theo cột**, ví dụ **Kho** hoặc **Phòng ban**.

**Bước 4 –** Bấm **Xuất Excel**. File tải về:

- Sheet **DATA**: chỉ các cột đã tick. Nếu có nhóm: dữ liệu chia thành từng khối, dòng tiêu đề mỗi khối ghi `<giá trị> (<số dòng> <đơn vị>)`, ví dụ `Kho A (12 mặt hàng)`, kèm tổng riêng của nhóm ở các cột tiền / số lượng.
- Sheet **Tổng hợp** (khi có nhóm): mỗi nhóm một dòng, dòng **Tổng**; với bảng có cột tổng còn thêm các dòng **Tổng ban đầu (trên lưới)**, **Chênh lệch** và **Kết quả so khớp** (**KHỚP** / **LỆCH**).

Xuất xong, bảng trên màn hình giữ nguyên như trước khi xuất.

## 6. Giải thích các thông tin trên màn hình

- **Cột xuất**: Ý nghĩa: Các cột có trong file; Bắt buộc: Ít nhất 1 cột; Lưu ý: Chỉ liệt kê cột bạn được phép xem
- **Nhóm theo cột**: Ý nghĩa: Cột dùng để chia khối; Bắt buộc: Không; Lưu ý: Cột nhóm luôn có trong file; ô trống ghi **(Trống)**
- **Tổng hợp – Kết quả so khớp**: Ý nghĩa: So tổng các nhóm với tổng trên bảng; Lưu ý: **LỆCH** là dấu hiệu cần báo IT kiểm tra

## 7. Kiểm tra sau khi thực hiện

- Có file `.xlsx` trong thư mục **Tải về** (Downloads) của máy.
- File phản ánh đúng danh sách tại thời điểm xuất (khoảng ngày, bộ lọc, cột).

## 8. Những điều cần lưu ý

⚠️ File xuất **toàn bộ các trang** của danh sách đang lọc, không chỉ trang đang xem. Kiểm tra số dòng trong file so với dòng **TỔNG CỘNG** trên bảng.

⚠️ Chỉ xuất **các cột đang hiện** (xuất tất cả) hoặc **các cột đã tick** (xuất theo custom). Cần cột đang ẩn: lấy cột đó ra bằng **Trình chọn cột** trước khi xuất ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

⚠️ File Excel có thể chứa **giá vốn, công nợ, lương, thông tin cá nhân**. Chỉ lưu và gửi cho người có trách nhiệm; không gửi qua kênh công cộng.

⚠️ Màn danh sách chỉ tải dữ liệu trong **khoảng ngày** đang chọn. Muốn xuất cả năm: chọn **Năm nay** trước khi xuất.

### Không thấy biểu tượng Xuất Excel 

Nguyên nhân: tài khoản chưa có quyền **Xuất dữ liệu** của màn hình.
Cách xử lý: liên hệ quản trị hệ thống.

### "Xuất Excel không thành công, vui lòng thử lại." (Lỗi hệ thống)

Nguyên nhân: bảng đang tải dữ liệu quá lâu khi xuất theo custom.
Cách xử lý: chờ bảng tải xong, thu hẹp khoảng ngày rồi xuất lại.

### File thiếu dòng / thiếu cột 

Kiểm tra: khoảng ngày, bộ lọc, các cột đang ẩn, hoặc đã chọn **Xuất ra dữ liệu đã chọn** thay vì tất cả.
Cách xử lý: điều chỉnh lại rồi xuất.

### Nút Xuất Excel trong hộp chọn cột bị mờ 

Nguyên nhân: chưa tick cột nào.
Cách xử lý: tick ít nhất một cột.

## 10. Câu hỏi thường gặp

**File có giữ định dạng số tiền không?**
Có. Cột số được xuất dạng số (cộng / lọc được trong Excel), font Times New Roman.

**Đã chọn nhóm theo cột, lần sau mở lại có nhớ không?**
Có, hộp **Chọn cột xuất Excel** nhớ cột đã tick và cột nhóm theo từng màn, trên máy này.

**Một số màn có nút xuất Excel riêng (mẫu báo cáo)?**
Có. Một số báo cáo có nút xuất theo mẫu riêng của nghiệp vụ; cách dùng nằm trong bài tổng quan của màn đó.

**Danh sách dạng cây (ví dụ Hệ thống tài khoản) xuất ra sao?**
Bài của từng danh sách cây quy định phạm vi xuất. Trước khi dùng file, đối chiếu số dòng và cấp con với cây trên màn hình; phạm vi dòng con đang thu gọn chưa được kiểm chứng trong bài này, không dùng file như một bản đầy đủ khi chưa đối chiếu.

## 11. Công việc tiếp theo

```text
Có file Excel → đối chiếu / gửi báo cáo
   └──► Cần bản in đúng mẫu chứng từ → GEN-06
```

**Tiếp theo:** [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/) – Hướng dẫn in chứng từ.

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/) – Hướng dẫn tìm kiếm, lọc, sắp xếp, chọn cột trên danh sách
- [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/) – Hướng dẫn in chứng từ (tải phiếu ra PDF / Excel)
