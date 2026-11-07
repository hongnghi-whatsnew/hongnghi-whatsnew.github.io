---
title: "TỔNG QUAN MÀN HÌNH BẢNG GIÁ SẢN XUẤT"
date: "2026-11-07"
summary: "Bảng giá sản xuất là nơi khai báo đơn giá gia công để phiếu nhập kho gia công tự điền đơn giá."
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

**Bảng giá sản xuất** là nơi khai báo **đơn giá gia công** để phiếu nhập kho gia công tự điền đơn giá. Màn hình gộp hai loại bảng giá trên cùng một danh sách:

- **Thuê ngoài**: Dùng khi: Hàng gia công ở một **đơn vị gia công** bên ngoài; Hệ thống chọn bảng giá theo: Đơn vị gia công của phiếu nhập kho gia công
- **Tại kho**: Dùng khi: Hàng gia công ngay tại kho của công ty (máy dán, máy keo…); Hệ thống chọn bảng giá theo: **Nguồn nhân lực** của phiếu nhập kho gia công

Mỗi bảng giá có **ngày áp dụng** và nhiều **dòng giá** (mỗi dòng là một điều kiện kèm một đơn giá). Khi lưu phiếu nhập kho gia công, hệ thống lấy bảng giá có ngày áp dụng **mới nhất nhưng không sau ngày phiếu** rồi điền đơn giá cho các dòng thành phẩm đang để trống hoặc bằng 0 (xem [HƯỚNG DẪN LẬP BẢNG GIÁ SẢN XUẤT THUÊ NGOÀI](/bai-viet/2026-11-07-tl-e01-1-huong-dan-lap-bang-gia-san-xuat-thue-ngoai/) và [HƯỚNG DẪN LẬP BẢNG GIÁ SẢN XUẤT TẠI KHO](/bai-viet/2026-11-07-tl-e01-2-huong-dan-lap-bang-gia-san-xuat-tai-kho/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình như phần “Chuẩn bị trước khi thực hiện”.
- Đã có danh mục: **Đơn vị gia công** (TL-A03), **Nguồn nhân lực** (TL-A02), **Danh mục gia công** (TL-D01), **Danh mục tiêu chuẩn** (TL-D03), **Số mặt** (TL-D06) — các ô chọn trong cửa sổ lấy từ các danh mục này.

## 2. Mở chức năng

**Bảng giá / báo giá → Bảng giá sản xuất**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Hình 1: BẢNG GIÁ SẢN XUẤT - DANH SÁCH — hiện trống, chỉ xem.](/posts/2026-11-07-tl-e01-0-tong-quan-man-hinh-bang-gia-san-xuat/ui-20261026-tl-e01-ds-figure-01.png)

- **Bộ chọn khoảng ngày**: Chức năng: Lọc theo **Ngày áp dụng** của bảng giá; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở menu chọn loại bảng giá: **Thuê ngoài** hoặc **Tại kho**; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Cột Thao tác**: Chức năng: **Sửa** \; Hướng dẫn: **Sao chép** \; Thông tin: **Xóa** (hiện theo quyền); Thông tin: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Trình chọn cột, Tìm kiếm…, dòng lọc**: Chức năng: Ẩn / hiện cột, tìm, lọc từng cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)

![Hình 2: Menu Thêm mới của Bảng giá sản xuất: Thuê ngoài/Tại kho; chưa tạo hoặc lưu.](/posts/2026-11-07-tl-e01-0-tong-quan-man-hinh-bang-gia-san-xuat/ui-20261026-tl-e01-menu-figure-02.png)

**Các cột trên danh sách:**

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: **Sửa** \; Thông tin: **Sao chép** \; Thông tin: **Xóa**
- **Loại bảng giá**: Ý nghĩa: **Tại kho** hoặc **Thuê ngoài**
- **Ngày áp dụng**: Ý nghĩa: Ngày bảng giá bắt đầu có hiệu lực
- **Mã bảng giá**: Ý nghĩa: Hệ thống tự cấp: **BC** + 8 chữ số (thuê ngoài), **TK** + 8 chữ số (tại kho)
- **Đơn vị gia công**: Ý nghĩa: Chỉ có ở bảng giá **Thuê ngoài**
- **Nguồn nhân lực**: Ý nghĩa: Chỉ có ở bảng giá **Tại kho** (có thể nhiều nguồn, ngăn cách bằng dấu phẩy)
- **Ghi chú**: Ý nghĩa: Ghi chú của bảng giá
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n**. Nhấp đúp vào một dòng mở cửa sổ chỉ xem (**THÔNG TIN - BẢNG GIÁ SẢN XUẤT | NGOÀI** hoặc **| TẠI KHO**). Màn hình không có thao tác ngưng sử dụng: việc được chọn tính giá còn phụ thuộc trạng thái lưu, ngày áp dụng, đối tượng và điều kiện dòng giá (xem phần “Giải thích các thông tin trên màn hình”, 12).

⚠️ Bộ chọn khoảng ngày mở lên mặc định là **hôm nay**, nên danh sách thường trống. Mở rộng khoảng ngày để thấy các bảng giá cũ.

## 4. Trình tự công việc

```text
Danh mục: Đơn vị gia công / Nguồn nhân lực / Gia công / Tiêu chuẩn / Số mặt
      ↓
Bảng giá sản xuất (màn này): Thuê ngoài hoặc Tại kho
      ↓
Phiếu nhập kho gia công (sổ tay Sản xuất): lưu phiếu → tự điền đơn giá
      ↓
Thống kê chi tiết nhập kho gia công: Tính lại đơn giá (xem trước, rồi lưu)
```

```text
Bảng giá sản xuất
   ├── Thêm mới ▸ Thuê ngoài ──► TL-E01.1
   ├── Thêm mới ▸ Tại kho ─────► TL-E01.2
   ├── Sửa / Sao chép / Xóa ───► cửa sổ tương ứng, hoặc hộp xác nhận xoá
   ├── Nhấp đúp ───────────────► cửa sổ chỉ xem
   └── Xuất Excel
```

## 5. Thực hiện trên phần mềm

- **Xem bảng giá cũ**: Cách làm: Mở rộng khoảng ngày ở bộ chọn ngày; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm một bảng giá**: Cách làm: Gõ mã / đơn vị gia công vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập bảng giá cho đơn vị gia công bên ngoài**: Cách làm: **Thêm mới ▸ Thuê ngoài**; Bài hướng dẫn: [HƯỚNG DẪN LẬP BẢNG GIÁ SẢN XUẤT THUÊ NGOÀI](/bai-viet/2026-11-07-tl-e01-1-huong-dan-lap-bang-gia-san-xuat-thue-ngoai/)
- **Lập bảng giá cho máy / tổ trong kho**: Cách làm: **Thêm mới ▸ Tại kho**; Bài hướng dẫn: [HƯỚNG DẪN LẬP BẢNG GIÁ SẢN XUẤT TẠI KHO](/bai-viet/2026-11-07-tl-e01-2-huong-dan-lap-bang-gia-san-xuat-tai-kho/)
- **Làm bảng giá mới từ bảng giá cũ**: Cách làm: **Sao chép** ở cột **Thao tác**; Bài hướng dẫn: [HƯỚNG DẪN LẬP BẢNG GIÁ SẢN XUẤT THUÊ NGOÀI](/bai-viet/2026-11-07-tl-e01-1-huong-dan-lap-bang-gia-san-xuat-thue-ngoai/), [HƯỚNG DẪN LẬP BẢNG GIÁ SẢN XUẤT TẠI KHO](/bai-viet/2026-11-07-tl-e01-2-huong-dan-lap-bang-gia-san-xuat-tai-kho/)
- **Đổi giá từ một ngày**: Cách làm: Tạo bảng giá mới có **Ngày áp dụng** mới (không sửa bảng giá cũ); Bài hướng dẫn: phần “Những điều cần lưu ý”
- **Xoá bảng giá**: Cách làm: **Xóa** → xác nhận; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

**Điều kiện riêng khi xoá:** hộp **Xác nhận xóa** hỏi **Bạn có muốn xóa bảng giá này?**. Chỉ **người đã tạo** bảng giá mới xoá được (xem phần “Vướng mắc thường gặp”). Bảng giá đã xoá không còn được dùng để điền đơn giá cho các phiếu lưu sau đó.

## 6. Giải thích các thông tin trên màn hình

Các trường nhập của cửa sổ được giải thích ở [HƯỚNG DẪN LẬP BẢNG GIÁ SẢN XUẤT THUÊ NGOÀI](/bai-viet/2026-11-07-tl-e01-1-huong-dan-lap-bang-gia-san-xuat-thue-ngoai/) (thuê ngoài) và [HƯỚNG DẪN LẬP BẢNG GIÁ SẢN XUẤT TẠI KHO](/bai-viet/2026-11-07-tl-e01-2-huong-dan-lap-bang-gia-san-xuat-tai-kho/) (tại kho). Cách hệ thống chọn bảng giá và dòng giá:

- **Bảng giá được chọn**: Thuê ngoài: Cùng chi nhánh, cùng **đơn vị gia công**, **ngày áp dụng** mới nhất không sau ngày phiếu; Tại kho: Cùng chi nhánh, có gắn **nguồn nhân lực** của phiếu, **ngày áp dụng** mới nhất không sau ngày phiếu
- **Dòng giá được chọn**: Thuê ngoài: Dòng **cụ thể nhất** (khớp nhiều điều kiện nhất); bằng nhau thì dòng nhập trước; Tại kho: Dòng khớp đầu tiên theo **Ưu tiên** từ cao xuống thấp; bằng nhau thì dòng nhập trước
- **Cách ra đơn giá một dòng thành phẩm**: Thuê ngoài: **Cộng** giá của từng định mức trong dòng yêu cầu gia công; Tại kho: Một dòng giá duy nhất
- **Dòng được điền**: Thuê ngoài: Chỉ dòng thành phẩm có đơn giá **trống hoặc bằng 0**; Tại kho: Giống thuê ngoài

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình dùng để làm gì, phân biệt được hai loại bảng giá và biết cần đọc bài nào cho từng việc. Bảng giá lưu xong sẽ được dùng ở lần lưu phiếu nhập kho gia công tiếp theo (không tự sửa các phiếu đã lưu).

## 8. Những điều cần lưu ý

⚠️ **Đổi giá = tạo bảng giá mới có ngày áp dụng mới.** Hệ thống luôn chọn bảng giá có ngày áp dụng gần ngày phiếu nhất (không sau ngày phiếu). Sửa thẳng bảng giá cũ sẽ đổi giá cho các phiếu lưu sau đó nhưng thuộc ngày cũ.

⚠️ **Không có nút ngưng sử dụng** bảng giá. Bảng giá nhập nhầm chỉ có cách xoá (bởi người tạo) hoặc để bảng giá mới hơn thay thế.

⚠️ Hệ thống **chỉ điền đơn giá còn trống hoặc bằng 0**; dòng đã có giá không bị ghi đè. Muốn tính lại giá cho phiếu đã lưu, dùng **Tính lại đơn giá** ở màn thống kê chi tiết nhập kho gia công.

⚠️ Mở đúng tên miền được cấp cho chi nhánh. Mỗi chi nhánh hệ thống chính thức có dữ liệu và tài khoản riêng; không có thao tác chuyển chi nhánh trong phiên. Việc danh sách nguồn không thêm bộ lọc chi nhánh không có nghĩa truy cập được bảng giá ở cơ sở dữ liệu của tên miền khác. Khi tính giá vẫn cần đúng phạm vi dữ liệu và đối tượng của phiếu ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).

### "Bạn chỉ được xóa phiếu do mình tạo" 

Nguyên nhân: người bấm **Xóa** không phải người đã tạo bảng giá.
Cách xử lý: nhờ người đã tạo xoá, hoặc tạo bảng giá mới thay thế.

## 10. Câu hỏi thường gặp

**Bảng giá thuê ngoài và tại kho khác nhau chỗ nào?**
Thuê ngoài gắn với đơn vị gia công và có cách **cộng giá theo từng định mức**. Tại kho gắn với nguồn nhân lực và dùng **một dòng giá** khớp theo ưu tiên, số lượng, số mặt, độ dày.

**Tôi lập bảng giá nhưng phiếu nhập kho gia công không tự điền giá?**
Kiểm tra: ngày áp dụng không sau ngày phiếu; đúng chi nhánh; đúng đơn vị gia công / nguồn nhân lực; dòng thành phẩm đang để giá trống hoặc 0; có dòng giá khớp điều kiện.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP BẢNG GIÁ SẢN XUẤT THUÊ NGOÀI](/bai-viet/2026-11-07-tl-e01-1-huong-dan-lap-bang-gia-san-xuat-thue-ngoai/) – Lập bảng giá sản xuất thuê ngoài; [HƯỚNG DẪN LẬP BẢNG GIÁ SẢN XUẤT TẠI KHO](/bai-viet/2026-11-07-tl-e01-2-huong-dan-lap-bang-gia-san-xuat-tai-kho/) – Lập bảng giá sản xuất tại kho.

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN LẬP BẢNG GIÁ SẢN XUẤT THUÊ NGOÀI](/bai-viet/2026-11-07-tl-e01-1-huong-dan-lap-bang-gia-san-xuat-thue-ngoai/) – Lập bảng giá sản xuất thuê ngoài
- [HƯỚNG DẪN LẬP BẢNG GIÁ SẢN XUẤT TẠI KHO](/bai-viet/2026-11-07-tl-e01-2-huong-dan-lap-bang-gia-san-xuat-tai-kho/) – Lập bảng giá sản xuất tại kho
- TL-A02 – Nguồn nhân lực; TL-A03 – Đơn vị gia công; TL-D01 – Danh mục gia công
- Sổ tay Sản xuất – Phiếu nhập kho gia công; Thống kê chi tiết nhập kho gia công
