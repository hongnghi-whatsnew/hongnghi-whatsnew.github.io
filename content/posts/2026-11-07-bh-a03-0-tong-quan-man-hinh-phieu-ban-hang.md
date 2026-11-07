---
title: "TỔNG QUAN MÀN HÌNH PHIẾU BÁN HÀNG"
date: "2026-11-07"
summary: "Màn hình Phiếu bán hàng ghi nhận đơn bán hàng hoá cho khách: bán mặt hàng nào, số lượng, đơn giá, chiết khấu, VAT, xuất từ kho nào, giao về đâu."
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

Màn hình **Phiếu bán hàng** ghi nhận **đơn bán hàng hoá** cho khách: bán mặt hàng nào, số lượng, đơn giá, chiết khấu, VAT, xuất từ kho nào, giao về đâu. Đơn giá được đề xuất theo **bảng giá** của khách (hoặc bảng giá chung, hoặc giá xuất gần nhất) và phải được **duyệt giá** trước khi xuất kho.

Phiếu bán hàng là bước **trước xuất kho**:

- Lưu phiếu bán hàng: số lượng bán được **giữ lại** trong kho xuất (tồn được xuất giảm) để đơn khác không lấy mất. Tồn kho thực tế và công nợ khách **chưa** thay đổi.
- Gửi yêu cầu → người có quyền **Phê duyệt giá**.
- Thủ kho lập **phiếu xuất kho bán hàng** từ phiếu đã duyệt giá ([HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/)): lúc đó tồn kho giảm, công nợ khách tăng, **Trạng thái xuất** được cập nhật.

Bạn dùng màn hình này khi:

- Khách mua hàng, cần lập đơn để duyệt giá và chuyển kho giao hàng.
- Bán thành phẩm của đơn đặt hàng sản xuất (TỪ PHIẾU ĐẶT HÀNG).
- In phiếu bán hàng / bảng báo giá gửi khách, phiếu soạn hàng cho kho.
- Đóng (tất toán) phần hàng khách không lấy nữa.

Phiếu **bán dịch vụ** dùng chung giao diện này nhưng ở menu riêng – xem [TỔNG QUAN MÀN HÌNH PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-0-tong-quan-man-hinh-phieu-ban-dich-vu/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** màn hình **Phiếu bán hàng**.
- Đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Tài khoản được phân **nhóm khách hàng**: danh sách chỉ hiện phiếu của khách thuộc nhóm được phân (trừ tài khoản quản trị).
- Danh mục **Khách hàng** (có **Mã số thuế / CCCD**), **Hàng hoá**, **Kho hàng** đã có dữ liệu.

## 2. Mở chức năng

**Bán hàng → Phiếu bán hàng**

## 3. Nhận biết màn hình

![Hình 1: Màn hình PHIẾU BÁN HÀNG - DANH SÁCH](/posts/2026-11-07-bh-a03-0-tong-quan-man-hinh-phieu-ban-hang/hinh-01-man-hinh-phieu-ban-hang.png)

- **Ô chọn khoảng ngày**: Chức năng: Lọc theo **Ngày bán hàng**. Mặc định **Hôm nay** (nhãn *today*); Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Lập phiếu bán hàng; Hướng dẫn: **[HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/)**, [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a03-2-huong-dan-lap-phieu-ban-hang-tu-phieu-dat-hang/), [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU BÁN HÀNG TỪ EXCEL](/bai-viet/2026-11-07-bh-a03-3-huong-dan-nhap-chi-tiet-phieu-ban-hang-tu-excel/)
- **Biểu tượng Xuất Excel**: Chức năng: Xuất danh sách (khi có quyền **Xuất dữ liệu**); Hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm theo mọi cột; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thao tác**: Chức năng: **Gửi YC** / **Hủy YC** / **Hủy duyệt** / **Xem duyệt** / **Tất toán** / **Sửa** / **Xóa** – hiện theo quyền và trạng thái phiếu (bảng dưới). Trên Hình 1: dòng 1 **Chờ duyệt** hiện *Hủy YC \; Hướng dẫn: Xem duyệt \; Thông tin: Xóa \; Thông tin: *, dòng 2 đã xuất kho hiện *Tất toán \; Thông tin: *; Thông tin: [HƯỚNG DẪN GỬI YÊU CẦU VÀ DUYỆT GIÁ PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/) / [HƯỚNG DẪN TẤT TOÁN PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-5-huong-dan-tat-toan-phieu-ban-hang/) / [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/)

**Khi nào liên kết ở cột Thao tác hiện:**

- **Gửi YC**: Hiện khi: Bạn là người tạo phiếu, phiếu **Chưa duyệt** hoặc **Từ chối duyệt**, **Chưa xuất**
- **Hủy YC**: Hiện khi: Bạn là người tạo phiếu, phiếu **Chờ duyệt** hoặc **Đã duyệt**, **Chưa xuất**
- **Hủy duyệt**: Hiện khi: Phiếu **Đã duyệt**, **Chưa xuất**
- **Xem duyệt**: Hiện khi: Bạn có quyền duyệt giá, phiếu **Chờ duyệt**
- **Tất toán**: Hiện khi: Phiếu **Đang xuất** hoặc **Đã xuất**
- **Sửa**: Hiện khi: Phiếu **Chưa duyệt** hoặc **Từ chối duyệt**, **Chưa xuất**
- **Xóa**: Hiện khi: Phiếu **Chưa xuất**

**Các cột trên danh sách** (theo thứ tự trên màn hình):

- **STT**: Ý nghĩa: Số thứ tự
- **Thao tác**: Ý nghĩa: Liên kết theo trạng thái (bảng trên)
- **Ngày bán hàng**: Ý nghĩa: Ngày trên phiếu bán
- **Mã phiếu**: Ý nghĩa: Mã phiếu bán hàng dạng **BH…**, hệ thống tự tạo
- **Tên khách hàng**: Ý nghĩa: Khách mua
- **Tổng tiền**: Ý nghĩa: Tổng thành tiền (sau chiết khấu, cộng VAT, trừ phần tất toán)
- **Kho Xuất**: Ý nghĩa: Kho xuất hàng
- **Trạng thái xuất**: Ý nghĩa: **Chưa xuất** / **Đang xuất** / **Đã xuất** – theo số lượng đã xuất kho
- **Ghi chú**: Ý nghĩa: Ghi chú phiếu
- **Tên rút gọn**: Ý nghĩa: Tên rút gọn của khách
- **File đính kèm**: Ý nghĩa: **Số lượng file: n** hoặc **Không có file đính kèm**
- **Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Hệ thống tự ghi
- **Trạng thái duyệt**: Ý nghĩa: **Chưa duyệt** / **Chờ duyệt** / **Đã duyệt** / **Từ chối duyệt**
- **Thời gian duyệt, Người duyệt**: Ý nghĩa: Lần duyệt / từ chối gần nhất
- **Người gửi yêu cầu, Thời gian gửi yêu cầu**: Ý nghĩa: Lần gửi yêu cầu gần nhất
- **Lý do từ chối**: Ý nghĩa: Lý do người duyệt ghi khi từ chối
- **Mã khách hàng**: Ý nghĩa: Ẩn mặc định, bật bằng **Trình chọn cột**

Các cột phía sau **Kho Xuất** nằm ngoài khung nhìn – kéo thanh cuộn ngang của bảng để xem.

Dòng cuối bảng hiện **TỔNG CỘNG: n** và tổng **Tổng tiền**.

**Ý nghĩa Trạng thái xuất:**

- **Chưa xuất**: Khi nào: Chưa dòng nào được xuất kho
- **Đang xuất**: Khi nào: Đã xuất kho một phần
- **Đã xuất**: Khi nào: Mọi dòng đã xuất đủ (số lượng − số lượng tất toán)

**Menu chuột phải trên một dòng phiếu:**

- **Xem lại**: Mở cửa sổ: **PHIẾU BÁN HÀNG - XEM LẠI** (chỉ xem); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **File đính kèm**: Mở cửa sổ: **FILE ĐÍNH KÈM - PHIẾU BÁN HÀNG**; Hướng dẫn: [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)
- **In phiếu - Đơn giá chưa VAT**: Mở cửa sổ: Xem trước bản in **PHIẾU BÁN HÀNG**; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU BÁN HÀNG VÀ BẢNG BÁO GIÁ](/bai-viet/2026-11-07-bh-a03-6-huong-dan-in-phieu-ban-hang-va-bang-bao-gia/)
- **In phiếu - Đơn giá 0% VAT**: Mở cửa sổ: Như trên; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU BÁN HÀNG VÀ BẢNG BÁO GIÁ](/bai-viet/2026-11-07-bh-a03-6-huong-dan-in-phieu-ban-hang-va-bang-bao-gia/)
- **In phiếu - Đơn giá có VAT**: Mở cửa sổ: Như trên; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU BÁN HÀNG VÀ BẢNG BÁO GIÁ](/bai-viet/2026-11-07-bh-a03-6-huong-dan-in-phieu-ban-hang-va-bang-bao-gia/)
- **In phiếu - Không Giá**: Mở cửa sổ: Như trên; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU BÁN HÀNG VÀ BẢNG BÁO GIÁ](/bai-viet/2026-11-07-bh-a03-6-huong-dan-in-phieu-ban-hang-va-bang-bao-gia/)
- **In phiếu - Đơn giá chiết khấu**: Mở cửa sổ: Như trên; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU BÁN HÀNG VÀ BẢNG BÁO GIÁ](/bai-viet/2026-11-07-bh-a03-6-huong-dan-in-phieu-ban-hang-va-bang-bao-gia/)
- **In phiếu - Soạn Hàng**: Mở cửa sổ: Xem trước **PHIẾU Y/C XUẤT KHO NỘI BỘ**; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU BÁN HÀNG VÀ BẢNG BÁO GIÁ](/bai-viet/2026-11-07-bh-a03-6-huong-dan-in-phieu-ban-hang-va-bang-bao-gia/)
- **In Bảng Báo Giá**: Mở cửa sổ: Xem trước **BẢNG BÁO GIÁ**; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU BÁN HÀNG VÀ BẢNG BÁO GIÁ](/bai-viet/2026-11-07-bh-a03-6-huong-dan-in-phieu-ban-hang-va-bang-bao-gia/)
- **In Bảng Báo Giá Có Số Lượng**: Mở cửa sổ: Như trên; Hướng dẫn: [HƯỚNG DẪN IN PHIẾU BÁN HÀNG VÀ BẢNG BÁO GIÁ](/bai-viet/2026-11-07-bh-a03-6-huong-dan-in-phieu-ban-hang-va-bang-bao-gia/)

Nhấp đúp vào dòng cũng mở **PHIẾU BÁN HÀNG - XEM LẠI**. Chuột phải vào **tiêu đề cột** để mở menu sắp xếp, nhóm, **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

## 4. Trình tự công việc

**Vị trí của phiếu bán hàng trong quy trình:**

```text
(Tuỳ chọn) Hợp đồng (BH-A01) · Phiếu đặt hàng sản xuất (BH-A02)
      ↓
Phiếu bán hàng: lập tay (BH-A03.1) · Từ phiếu đặt hàng (BH-A03.2) · Excel (BH-A03.3)
      → giữ hàng trong kho xuất
      ↓
Gửi YC → Chờ duyệt → Phê duyệt giá / Từ chối duyệt (BH-A03.4)
      ↓ (Đã duyệt)
(Kho) Phiếu xuất kho bán hàng (KHO-A05.1) → giảm tồn, tăng công nợ khách
      ↓
Trạng thái xuất: Chưa xuất → Đang xuất → Đã xuất
      ↓
Khách không lấy phần còn lại? ──► Tất toán (BH-A03.5)
```

**Vòng đời trạng thái duyệt:**

```text
Chưa duyệt ── Gửi YC ──► Chờ duyệt
                            ├── Phê duyệt giá ──► Đã duyệt ──► (Kho) xuất kho
                            └── Từ chối duyệt ──► Từ chối duyệt → Sửa → Gửi YC
Hủy YC (Chờ duyệt / Đã duyệt) · Hủy duyệt (Đã duyệt) ──► về Chưa duyệt
```

## 5. Thực hiện trên phần mềm

- **Xem phiếu theo khoảng ngày**: Cách làm: Chọn khoảng ngày ở ô; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tìm phiếu**: Cách làm: Gõ mã phiếu hoặc tên khách vào **Tìm kiếm…**; Bài hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Lập phiếu bán hàng**: Cách làm: **Thêm mới**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/)
- **Bán thành phẩm của đơn đặt hàng**: Cách làm: **Thêm mới** → **TỪ PHIẾU ĐẶT HÀNG**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a03-2-huong-dan-lap-phieu-ban-hang-tu-phieu-dat-hang/)
- **Nhập chi tiết từ Excel**: Cách làm: **Thêm mới** → **Tải lên từ Excel**; Bài hướng dẫn: [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU BÁN HÀNG TỪ EXCEL](/bai-viet/2026-11-07-bh-a03-3-huong-dan-nhap-chi-tiet-phieu-ban-hang-tu-excel/)
- **Gửi yêu cầu duyệt giá**: Cách làm: **Gửi YC** → **Gửi yêu cầu**; Bài hướng dẫn: [HƯỚNG DẪN GỬI YÊU CẦU VÀ DUYỆT GIÁ PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/)
- **Duyệt / từ chối giá**: Cách làm: **Xem duyệt** → **Phê duyệt giá** / **Từ chối duyệt giá**; Bài hướng dẫn: [HƯỚNG DẪN GỬI YÊU CẦU VÀ DUYỆT GIÁ PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/)
- **Huỷ yêu cầu / huỷ duyệt**: Cách làm: **Hủy YC** / **Hủy duyệt**; Bài hướng dẫn: [HƯỚNG DẪN GỬI YÊU CẦU VÀ DUYỆT GIÁ PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/)
- **Sửa phiếu**: Cách làm: **Sửa** → **PHIẾU BÁN HÀNG - CẬP NHẬT**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/)
- **Tất toán phần không xuất**: Cách làm: **Tất toán** → **PHIẾU BÁN HÀNG - TẤT TOÁN**; Bài hướng dẫn: [HƯỚNG DẪN TẤT TOÁN PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-5-huong-dan-tat-toan-phieu-ban-hang/)
- **In phiếu / báo giá / soạn hàng**: Cách làm: Chuột phải → mục **In…**; Bài hướng dẫn: [HƯỚNG DẪN IN PHIẾU BÁN HÀNG VÀ BẢNG BÁO GIÁ](/bai-viet/2026-11-07-bh-a03-6-huong-dan-in-phieu-ban-hang-va-bang-bao-gia/)
- **Xuất kho cho khách**: Cách làm: Sổ tay Kho hàng – [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/)
- **Xoá phiếu**: Cách làm: **Xóa** → xác nhận *Bạn có muốn xóa phiếu này ?*; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Xuất Excel**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Xem lại một phiếu

**Bước 1 –** Nhấp đúp vào dòng phiếu (hoặc chuột phải → **Xem lại**).

**Bước 2 –** Cửa sổ **PHIẾU BÁN HÀNG - XEM LẠI** mở ra; bảng chi tiết có thêm **SL đã xuất**, **SL tất toán**, **SL còn lại**. Nếu bạn là người tạo phiếu và phiếu chưa / bị từ chối duyệt, góc dưới có nút **Gửi yêu cầu** ([HƯỚNG DẪN GỬI YÊU CẦU VÀ DUYỆT GIÁ PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/)).

**Bước 3 –** Bấm **Đóng**.

## 6. Giải thích các thông tin trên màn hình

Ý nghĩa từng trường trong cửa sổ phiếu bán hàng: xem **phần “Giải thích các thông tin trên màn hình” của bài [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/)**.

Các cột trên danh sách: xem bảng ở phần “Nhận biết màn hình”.

## 7. Kiểm tra sau khi thực hiện

Bạn biết màn hình Phiếu bán hàng có những chức năng gì, phiếu bán hàng liên quan thế nào tới duyệt giá, xuất kho và công nợ, và cần đọc bài nào cho từng việc.

## 8. Những điều cần lưu ý

⚠️ **Phiếu bán hàng không làm giảm tồn kho và không tăng công nợ khách.** Hai việc này chỉ xảy ra khi thủ kho lập **phiếu xuất kho** từ phiếu bán hàng ([HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/)). Nhưng hàng đã **được giữ** ngay khi lưu phiếu bán: nếu kho không đủ **tồn được xuất**, hệ thống không cho lưu.

⚠️ **Phiếu chưa duyệt giá không xuất kho được.** Gửi yêu cầu duyệt giá ngay sau khi lập.

⚠️ Phiếu **Chờ duyệt** hoặc **Đã duyệt** không **Sửa** được. Muốn sửa: **Hủy YC** (người tạo) hoặc **Hủy duyệt** (người có quyền), sửa rồi gửi lại.

⚠️ Khi phiếu đã có dòng xuất kho, **không sửa / xoá được** phiếu. Phần không xuất tiếp dùng **Tất toán**.

⚠️ **Chỉ người tạo phiếu (hoặc quản trị) mới xoá được phiếu.** Xoá phiếu cũng xoá yêu cầu duyệt giá kèm theo.

⚠️ Danh sách chỉ hiện **phiếu bán hàng** của khách thuộc **nhóm khách hàng** bạn được phân; phiếu bán dịch vụ xem ở menu **Phiếu bán dịch vụ** ([TỔNG QUAN MÀN HÌNH PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-0-tong-quan-man-hinh-phieu-ban-dich-vu/)).

### "CẢNH BÁO – Lỗi xóa: Bạn chỉ được xóa phiếu do mình tạo" 

Nguyên nhân: tài khoản không phải người tạo phiếu.
Cách xử lý: nhờ người tạo xoá hoặc liên hệ quản trị hệ thống.

### "CẢNH BÁO – Lỗi xóa: Dữ liệu đã được liên kết hoặc thay đổi. Vui lòng kiểm tra lại." 

Nguyên nhân: phiếu đã được xuất kho, có khách trả hàng hoặc đã dùng ở chứng từ khác.
Cách xử lý: dùng **Tất toán** cho phần còn lại, hoặc nhờ thủ kho / kế toán xử lý chứng từ phía sau.

### Không thấy phiếu vừa lập / phiếu đồng nghiệp lập 

Kiểm tra: khoảng ngày lọc có chứa **Ngày bán hàng**; chi nhánh; đang ở đúng menu (Phiếu bán hàng hay Phiếu bán dịch vụ); khách của phiếu có thuộc **nhóm khách hàng** bạn được phân không.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)); nhờ quản trị phân nhóm khách hàng.

### Không thấy liên kết Sửa / Gửi YC / Xem duyệt 

Kiểm tra: quyền tương ứng và trạng thái phiếu theo bảng "Khi nào liên kết ở cột Thao tác hiện" (xem phần “Nhận biết màn hình”).
Cách xử lý: liên hệ quản trị hệ thống hoặc người tạo phiếu.

## 10. Câu hỏi thường gặp

**Lập phiếu bán hàng xong, hàng đã rời kho chưa?**
Chưa. Thủ kho phải lập phiếu xuất kho từ phiếu bán hàng đã duyệt giá. Tuy vậy hàng đã được giữ cho phiếu này.

**Xem hàng đã bán nhưng chưa xuất ở đâu?**
Cột **Trạng thái xuất** trên danh sách, hoặc màn **Thống kê bán hàng → Bán hàng chi tiết** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN HÀNG CHI TIẾT](/bai-viet/2026-11-07-bh-b03-0-tong-quan-man-hinh-thong-ke-ban-hang-chi-tiet/)).

**Phiếu đã duyệt giá, khách đổi giá thì sao?**
Người có quyền **Hủy duyệt** (khi phiếu chưa xuất), người có quyền **Cập nhật** sửa giá; người tạo gửi **Gửi YC** lại.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/) – Hướng dẫn lập phiếu bán hàng.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/) – Hướng dẫn lập phiếu bán hàng
- [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-bh-a03-2-huong-dan-lap-phieu-ban-hang-tu-phieu-dat-hang/) – Hướng dẫn lập phiếu bán hàng từ phiếu đặt hàng
- [HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU BÁN HÀNG TỪ EXCEL](/bai-viet/2026-11-07-bh-a03-3-huong-dan-nhap-chi-tiet-phieu-ban-hang-tu-excel/) – Hướng dẫn nhập chi tiết phiếu bán hàng từ Excel
- [HƯỚNG DẪN GỬI YÊU CẦU VÀ DUYỆT GIÁ PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-4-huong-dan-gui-yeu-cau-va-duyet-gia-phieu-ban-hang/) – Hướng dẫn gửi yêu cầu và duyệt giá phiếu bán hàng
- [HƯỚNG DẪN TẤT TOÁN PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-5-huong-dan-tat-toan-phieu-ban-hang/) – Hướng dẫn tất toán phiếu bán hàng
- [HƯỚNG DẪN IN PHIẾU BÁN HÀNG VÀ BẢNG BÁO GIÁ](/bai-viet/2026-11-07-bh-a03-6-huong-dan-in-phieu-ban-hang-va-bang-bao-gia/) – Hướng dẫn in phiếu bán hàng và bảng báo giá
- [TỔNG QUAN MÀN HÌNH PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-0-tong-quan-man-hinh-phieu-ban-dich-vu/) – Tổng quan màn hình Phiếu bán dịch vụ
- [HƯỚNG DẪN LẬP PHIẾU XUẤT KHO BÁN HÀNG](/bai-viet/2026-11-07-kho-a05-1-huong-dan-lap-phieu-xuat-kho-ban-hang/) – Hướng dẫn lập phiếu xuất kho bán hàng
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ BÁN HÀNG CHI TIẾT](/bai-viet/2026-11-07-bh-b03-0-tong-quan-man-hinh-thong-ke-ban-hang-chi-tiet/) – Tổng quan màn hình Bán hàng chi tiết
