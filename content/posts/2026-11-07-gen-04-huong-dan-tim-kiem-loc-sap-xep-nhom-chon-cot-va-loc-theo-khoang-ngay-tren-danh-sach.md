---
title: "HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH"
date: "2026-11-07"
summary: "Hầu hết màn hình của Hồng Nghi ERP mở ra một bảng danh sách (danh mục, phiếu, báo cáo)."
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

Hầu hết màn hình của Hồng Nghi ERP mở ra một **bảng danh sách** (danh mục, phiếu, báo cáo). Các bảng này dùng chung một cách thao tác để:

- Chọn **khoảng ngày** cần xem (màn chứng từ, thống kê).
- Tìm nhanh, lọc theo cột, lọc theo giá trị, tạo bộ lọc nhiều điều kiện.
- Sắp xếp, nhóm, ẩn / hiện, di chuyển, cố định cột.
- Chuyển trang, xem chi tiết một dòng, mở menu chuột phải.

Bài này lấy màn hình **Phiếu nhập kho** làm ví dụ. Các màn hình khác có thể dùng các thao tác chung tương tự; tính khả dụng, tên cột và các mục chuột phải phụ thuộc màn/quyền (xem bài **Tổng quan màn hình** của từng màn).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình cần xem.

## 2. Mở chức năng

Áp dụng cho mọi màn hình danh sách. Ví dụ trong bài:

**Nghiệp vụ → Kho hàng → Phiếu nhập kho**

## 3. Nhận biết màn hình

![Hình 1: Các thành phần chung của màn hình danh sách (ví dụ PHIẾU NHẬP KHO - DANH SÁCH)](/posts/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/hinh-01-man-hinh-danh-sach.png)

- **Ô khoảng ngày**: Chức năng: Chọn khoảng ngày cần xem (chỉ có ở màn chứng từ / thống kê)
- **Tải lại**: Chức năng: Tải lại danh sách từ hệ thống
- **Thêm mới**: Chức năng: Mở cửa sổ thêm ([HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)), có thể là nút xổ nhiều lựa chọn
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách ra Excel ([HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/))
- **Biểu tượng Trình chọn cột**: Chức năng: Ẩn / hiện cột
- **Ô Tìm kiếm…**: Chức năng: Tìm trên toàn bộ các cột
- **Hàng tiêu đề cột**: Chức năng: Bấm để sắp xếp; biểu tượng phễu để lọc theo giá trị; chuột phải để mở thêm tuỳ chọn
- **Hàng lọc (biểu tượng kính lúp)**: Chức năng: Gõ điều kiện lọc riêng từng cột
- **Cột Thao tác**: Chức năng: **Sửa** / **Xóa** ([HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/))
- **Dòng tổng cuối bảng**: Chức năng: Ví dụ **TỔNG CỘNG: 25** (số dòng), tổng tiền…
- **Tạo Bộ lọc**: Chức năng: Tạo bộ lọc nhiều điều kiện
- **Thanh phân trang**: Chức năng: Số dòng mỗi trang, chuyển trang

## 4. Trình tự công việc

```text
Mở màn hình danh sách
      ↓
Chọn khoảng ngày (màn chứng từ) ──► danh sách tự tải theo khoảng ngày
      ↓
Gõ từ khoá vào Tìm kiếm ── chưa thấy? ──► Lọc theo cột / phễu / Tạo Bộ lọc
      ↓
Thấy dòng cần tìm
      ↓
Nhấp đúp xem lại · Chuột phải (In, File đính kèm…) · Sửa · Xóa · Xuất Excel
```

### 8.1. Chọn khoảng ngày

Màn chứng từ và thống kê chỉ tải dữ liệu **trong khoảng ngày** đang chọn. Ô khoảng ngày  hiện mã mốc đang chọn bên trái (ví dụ `today`, `mo`) và khoảng ngày dạng `01/10/2026 - 31/10/2026`.

**Cách 1 – Chọn nhanh**

**Bước 1 –** Bấm vào ô khoảng ngày. Bảng chọn mở ra (Hình 2).

**Bước 2 –** Chọn một mốc:

- Cột **CHỌN NHANH**: **Hôm nay**, **Hôm qua**, **Tuần này**, **Tuần trước**, **Tháng này**, **Tháng trước**, **Năm nay**, **Năm trước**.
- Khối **THÁNG**: bấm số tháng **01**…**12** để chọn trọn tháng đó của năm ghi bên cạnh.
- Khối **LŨY KẾ & GẦN ĐÂY**: **Từ đầu tháng**, **Từ đầu tuần**, **Ngày mai**, **Tuần sau**, **Từ đầu năm**, **3 tháng gần đây**, **6 tháng gần đây**, **2 năm gần đây**, **3 năm gần đây**, **5 năm gần đây**.
- Khối **TÙY CHỈNH GẦN ĐÂY**: 2 khoảng ngày bạn tự chọn gần nhất.

Bảng chọn đóng lại, danh sách tự tải theo khoảng mới.

![Hình 2: Bảng chọn khoảng ngày](/posts/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/hinh-02-chon-khoang-ngay.png)

**Cách 2 – Chọn trên lịch**

**Bước 1 –** Trong bảng chọn, bấm **Tùy chỉnh**. Lịch tháng hiện ra (Hình 3), dòng trên ghi **Chọn ngày bắt đầu**.

**Bước 2 –** Bấm ngày bắt đầu, rồi bấm ngày kết thúc (dùng **‹ ›** để đổi tháng). Muốn chọn một ngày: chỉ bấm một ngày.

**Bước 3 –** Bấm **Áp dụng**. Bấm **Hủy** để quay lại bảng chọn nhanh.

![Hình 3: Chọn khoảng ngày trên lịch](/posts/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/hinh-03-chon-tren-lich.png)

**Cách 3 – Gõ trực tiếp**

Bấm vào phần ngày trong ô và gõ theo mẫu `dd/mm/yyyy` (một ngày) hoặc `dd/mm/yyyy - dd/mm/yyyy` (khoảng ngày; gõ dấu `-` để mở vế thứ hai). Nhấn **Enter** để áp dụng, **Esc** để huỷ. Gõ sai định dạng hoặc ngày bắt đầu sau ngày kết thúc thì hệ thống giữ khoảng ngày cũ.

Hệ thống **nhớ mốc đã chọn cho từng màn hình** trên máy này. Ví dụ chọn **Tháng này** thì lần sau mở lại vẫn là tháng hiện tại. Khoảng ngày tự chọn trên lịch chỉ được nhớ **trong ngày**; sang ngày mới, màn hình trở về mốc mặc định.

### 8.2. Tải lại danh sách

Bấm **Tải lại**. Nút tạm khoá vài giây và hiện số giây đếm ngược, ví dụ **Tải lại (3s)**.

Nhấn **F5** hoặc **Ctrl + R** trên màn hình có nút **Tải lại** cũng chỉ tải lại danh sách, **không** tải lại cả trang.

### 8.3. Tìm kiếm nhanh

**Bước 1 –** Bấm vào ô **Tìm kiếm…**  và gõ từ khoá, ví dụ mã phiếu hoặc tên kho.

**Bước 2 –** Bảng chỉ còn các dòng có chứa từ khoá ở bất kỳ cột nào, phần chữ khớp được tô màu (Hình 4).

**Bước 3 –** Bấm **ⓧ** cuối ô để xoá từ khoá.

![Hình 4: Tìm kiếm nhanh theo từ khoá](/posts/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/hinh-04-tim-kiem.png)

### 8.4. Lọc theo từng cột (hàng lọc)

Ngay dưới tên cột là hàng lọc. Gõ nội dung vào ô của cột cần lọc. Với cột dạng ngày, bấm biểu tượng lịch để chọn ngày. Với cột trạng thái dạng đúng / sai, chọn **(Tất cả)**, **đúng** hoặc **sai**.

![Hình 5: Hàng lọc](/posts/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/hinh-05-hang-loc.png)

### 8.5. Lọc theo giá trị có sẵn (biểu tượng phễu)

**Bước 1 –** Bấm biểu tượng phễu bên phải tên cột.

**Bước 2 –** Tick các giá trị cần xem (có ô **Tìm kiếm** trong hộp), bấm **OK**. Bấm **Hủy** để đóng mà không lọc.

Cột đang được lọc có biểu tượng phễu đậm màu.

![Hình 6: Lọc theo giá trị có sẵn](/posts/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/hinh-06-loc-phieu.png)

### 8.6. Tạo bộ lọc nhiều điều kiện

**Bước 1 –** Bấm **Tạo Bộ lọc** ⑪ ở cuối bảng. Hộp **Trình dựng Bộ lọc** mở ra.

**Bước 2 –** Bấm dấu **+** cạnh chữ **Và**, chọn **Thêm Điều kiện** (hoặc **Thêm nhóm**). Bấm từng phần của dòng điều kiện để chọn cột, phép so sánh (ví dụ **Chứa**) và nhập giá trị.

**Bước 3 –** Bấm **OK**. Điều kiện đang áp dụng hiện ở cuối bảng; bấm vào đó để sửa, bấm dấu **×** để bỏ.

![Hình 7: Trình dựng Bộ lọc](/posts/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/hinh-07-trinh-dung-bo-loc.png)

### 8.7. Sắp xếp, nhóm, di chuyển và cố định cột

- **Sắp xếp nhanh:** bấm tên cột (tăng dần), bấm lần nữa (giảm dần). Giữ **Shift** khi bấm thêm cột để sắp xếp theo nhiều cột; **Ctrl + bấm** bỏ sắp xếp của cột đó. Đã kiểm chứng trên Phiếu bán hàng, Gia Phúc/dev ngày 24/10/2026.
- **Menu chuột phải trên tiêu đề cột** (Hình 8):

- **Khôi phục bố cục**: Tác dụng: Trả bảng về mặc định (thứ tự, độ rộng cột, sắp xếp, lọc, nhóm, phân trang). Hệ thống hỏi **Khôi phục bố cục về mặc định?** → **Đồng ý**
- **Sắp xếp Tăng dần / Giảm dần / Loại bỏ việc sắp xếp**: Tác dụng: Sắp xếp theo cột này
- **Nhóm theo Cột này / Bỏ Nhóm tất cả**: Tác dụng: Gom các dòng cùng giá trị thành nhóm, bấm tiêu đề nhóm để mở / thu
- **Di chuyển sang trái / Di chuyển sang phải**: Tác dụng: Đổi vị trí cột
- **Cố định vị trí / Bỏ cố định**: Tác dụng: Giữ cột đứng yên khi cuộn ngang

![Hình 8: Menu chuột phải trên tiêu đề cột](/posts/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/hinh-08-menu-tieu-de-cot.png)

- **Kéo thả:** kéo tiêu đề cột sang trái / phải để đổi thứ tự; kéo mép tiêu đề để đổi độ rộng.
- Một số màn thống kê có **thanh nhóm** phía trên bảng: kéo tiêu đề cột thả vào thanh này để nhóm theo cột đó.

Lượt kiểm tra Phiếu bán hàng ngày 24/10/2026 xác nhận độ rộng, vị trí/cố định cột, thứ tự sắp xếp và mức số dòng/trang được giữ sau khi tải lại toàn trang trong cùng tài khoản/trình duyệt. Trang đang xem quay về **trang 1**. Chưa xác nhận ghi nhớ bộ lọc hoặc đồng bộ bố cục giữa các máy/tài khoản.

### 8.8. Ẩn / hiện cột

**Bước 1 –** Bấm biểu tượng **Trình chọn cột**. Hộp **Trình chọn cột** mở ra (có ô tìm cột).

**Bước 2 –** Kéo tiêu đề cột trên bảng thả vào hộp để **ẩn**; kéo cột từ hộp thả lại hàng tiêu đề để **hiện**.

Một số cột ẩn sẵn (ví dụ **Mã khách hàng**, **Mã nhà cung cấp**, **Số ngày nợ** của Phiếu nhập kho) – lấy ra từ **Trình chọn cột** khi cần.

![Hình 9: Trình chọn cột](/posts/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/hinh-09-trinh-chon-cot.png)

### 8.9. Chuyển trang

Cuối bảng có thanh phân trang ⑫: chọn số dòng mỗi trang **10**, **15** hoặc **20**; xem tổng số dòng (ví dụ *Trang 1 của 3 (25 mục)*); bấm số trang hoặc mũi tên để chuyển.

### 8.10. Xem chi tiết và menu chuột phải trên một dòng

- **Nhấp đúp** vào dòng để mở cửa sổ chỉ xem: màn danh mục có tiêu đề **THÔNG TIN …**, màn phiếu có tiêu đề **XEM LẠI …**. cửa sổ chỉ xem không có nút **Lưu lại**.
- **Chuột phải** vào dòng để mở menu riêng của màn (ví dụ Phiếu nhập kho: **Xem lại**, **Cập nhật mã phiếu gốc**, **Cập nhật số hóa đơn**, **In phiếu (có giá)**, **In phiếu (không giá)**, **In tem kiện**, **File đính kèm**…). Ý nghĩa từng mục xem bài **Tổng quan màn hình** tương ứng.

![Hình 10: Menu chuột phải trên một dòng phiếu](/posts/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/hinh-10-menu-chuot-phai-dong.png)

## 6. Kiểm tra sau khi thực hiện

- Bảng chỉ hiển thị dữ liệu trong khoảng ngày và đúng điều kiện tìm / lọc.
- Các tùy chỉnh đã kiểm chứng được giữ qua tải lại trong cùng tài khoản/trình duyệt; không suy thành mọi bộ lọc hoặc đồng bộ máy khác.

## 7. Những điều cần lưu ý

⚠️ **Khoảng ngày giới hạn dữ liệu được tải về.** Phiếu ngoài khoảng ngày không có trong bảng, dù tìm kiếm thế nào. Không thấy phiếu: kiểm tra khoảng ngày trước tiên.

⚠️ Khi thấy thiếu dữ liệu, cần kiểm tra các điều kiện lọc đang áp dụng; không mặc định lần mở lại đã bỏ hết điều kiện. Thấy thiếu dữ liệu: kiểm tra ô tìm kiếm, hàng lọc, phễu đậm màu, dòng bộ lọc cuối bảng; hoặc chọn **Khôi phục bố cục**.

⚠️ Tìm kiếm, lọc, sắp xếp **chỉ thay đổi cách hiển thị**, không làm thay đổi dữ liệu.

⚠️ **Khôi phục bố cục** đưa các cột về đúng như mặc định của màn hình: cột bạn đã kéo ra sẽ bị ẩn lại, cột bạn đã ẩn sẽ hiện lại.

### Danh sách trống hoặc thiếu dữ liệu 

Kiểm tra: khoảng ngày; ô **Tìm kiếm**; hàng lọc; phễu đậm màu; bộ lọc ở cuối bảng.
Cách xử lý: chọn lại khoảng ngày (ví dụ **Tháng này**), xoá điều kiện lọc hoặc **Khôi phục bố cục**, bấm **Tải lại**.

### Không thấy một cột 

Kiểm tra: cột có trong **Trình chọn cột** không; bảng có cần cuộn ngang không.
Cách xử lý: kéo cột từ **Trình chọn cột** ra, hoặc **Khôi phục bố cục**. Nếu vẫn không có, kiểm tra bài tổng quan của màn: cột có thể không được cung cấp ở màn này hoặc tài khoản chưa có quyền xem. Gửi tên màn và tên cột cho quản trị kiểm tra; không kết luận thiếu quyền chỉ từ việc không thấy cột.

### Nút Tải lại bị mờ, không bấm được 

Nguyên nhân: vừa tải lại, nút khoá vài giây (hiện **(Ns)**).
Cách xử lý: chờ hết số giây.

### Gõ khoảng ngày xong nhấn Enter nhưng ô trở về khoảng cũ 

Nguyên nhân: sai mẫu `dd/mm/yyyy`, hoặc ngày bắt đầu sau ngày kết thúc.
Cách xử lý: gõ lại đúng mẫu, ví dụ `01/10/2026 - 31/10/2026`, hoặc chọn trên lịch.

## 9. Câu hỏi thường gặp

**Tìm kiếm có phân biệt chữ hoa, chữ thường không?**
Không.

**Cách hiển thị mình chỉnh có ảnh hưởng người khác không?**
Lượt thử chỉ xác nhận lưu bố cục trong cùng tài khoản/trình duyệt. Chưa kết luận về cách ly giữa tài khoản hoặc đồng bộ máy khác; không coi thay đổi của một tài khoản là đã kiểm chứng cho mọi người dùng.

**Muốn tải lại cả trang (không chỉ danh sách) thì làm sao?**
Nhấn **Ctrl + Shift + R**.

**Khoảng ngày lọc theo ngày nào của phiếu?**
Theo ngày chứng từ chính của màn (ví dụ **Ngày nhập kho** ở Phiếu nhập kho). Xem bài tổng quan của từng màn.

## 10. Công việc tiếp theo

```text
Tìm được dòng cần xử lý
   ├──► Xuất danh sách ra Excel   → GEN-05
   ├──► In phiếu                  → GEN-06
   ├──► Thêm / sửa / xoá          → GEN-11
   └──► Đính kèm chứng từ gốc     → GEN-12
```

**Tiếp theo:** [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/) – Hướng dẫn xuất Excel.

## 11. Bài hướng dẫn liên quan

- [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/) – Hướng dẫn xuất Excel
- [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/) – Hướng dẫn in chứng từ
- [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/) – Hướng dẫn thêm mới, cập nhật, xoá dữ liệu
- [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/) – Hướng dẫn quản lý file đính kèm
