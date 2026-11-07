---
title: "TỔNG QUAN MODULE KHO HÀNG VÀ THỨ TỰ SỬ DỤNG"
date: "2026-11-07"
summary: "Thao tác đăng nhập, đăng xuất, đổi mật khẩu và sử dụng ERP cơ bản được hướng dẫn trong Sổ tay Hướng dẫn chung (HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU đến HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM)."
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

Thao tác đăng nhập, đăng xuất, đổi mật khẩu và sử dụng ERP cơ bản được hướng dẫn trong **Sổ tay Hướng dẫn chung ([HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/) đến [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/))**. Đọc các bài GEN liên quan trước; sổ tay này hướng dẫn nghiệp vụ của phân hệ.

phân hệ Kho hàng ghi nhận mọi lần hàng **vào kho**, **ra kho** và **đổi kho** trên Hồng Nghi ERP: nhập kho hàng mua và hàng khách trả, xuất kho bán hàng và trả nhà cung cấp (NCC), chuyển kho, điều chỉnh kho sau kiểm kê, nhập hàng khách gửi, cho mượn / mượn hàng. Mỗi phiếu kho làm **tồn kho thay đổi ngay khi lưu** và được ghi vào **Sổ cái kho** để tính giá vốn.

Phiếu kho là bước **sau** các phiếu của phân hệ Mua hàng và Bán hàng: phiếu mua hàng, phiếu khách trả hàng, phiếu bán hàng, phiếu trả hàng NCC chỉ là chứng từ "chờ". Thủ kho lập phiếu kho từ các chứng từ đó thì hàng mới thực sự vào / ra kho, và công nợ NCC / khách hàng mới thay đổi.

Bài này giúp bạn:

- Biết phân hệ có những màn hình nào và nằm ở đâu trên menu.
- Hiểu phiếu nào làm thay đổi tồn kho, công nợ, giá vốn, và ở bước nào.
- Biết nên đọc bài hướng dẫn nào trước, bài nào sau.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có tài khoản đăng nhập Hồng Nghi ERP và đã truy cập đúng địa chỉ hệ thống của đơn vị ([HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/), [HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)). Mọi danh sách phiếu kho chỉ hiện phiếu của chi nhánh đang làm việc.
- Danh mục đã có dữ liệu (sổ tay **Thiết lập danh mục**): **Kho hàng**, **Hàng hoá** (kèm đơn vị tính, trọng lượng, m³, quy đổi kiện), **Nhà cung cấp**, **Khách hàng**, **Xe**, **Tài xế** (cho phiếu xuất).
- Được cấp quyền truy cập các màn hình của phân hệ Kho hàng.

## 2. Mở chức năng

**Kho hàng / Mượn hàng / Thống kê mượn hàng / Thống kê kho**

## 3. Nhận biết màn hình

Trên thanh menu bên trái, phân hệ Kho hàng gồm 4 nhóm menu:

```text
Kho hàng
 ├── Theo dõi điều phối xe
 ├── Phiếu nhập gửi hàng
 ├── Phiếu điều chỉnh kho
 ├── Phiếu nhập kho
 ├── Phiếu xuất kho
 ├── Phiếu xuất chuyển kho
 ├── Phiếu xuất hàng
 ├── Phiếu nhập chuyển kho
 └── Sổ cái kho
Mượn hàng
 ├── Phiếu xuất cho mượn
 ├── Phiếu nhập trả
 ├── Phiếu nhập mượn
 └── Phiếu xuất trả
Thống kê mượn hàng
 ├── Tổng hợp mượn hàng
 ├── Chi tiết xuất mượn
 └── Chi tiết nhập mượn
Thống kê kho
 ├── Xuất nhập tồn trong ngày
 ├── Nhập kho gửi hàng
 ├── Xuất khác
 ├── Xuất chuyển kho
 ├── Điều chỉnh kho
 ├── Xuất nhập tồn lô hàng
 ├── Xuất nhập tồn
 └── Đối chiếu sổ cái kho
```

Nhóm **Kho hàng**, **Mượn hàng** nằm trong khối **NGHIỆP VỤ**; nhóm **Thống kê mượn hàng**, **Thống kê kho** nằm trong khối **THỐNG KÊ**. Bấm vào tên nhóm để mở danh sách màn hình bên trong ([HƯỚNG DẪN BỐ CỤC MÀN HÌNH VÀ TÌM CHỨC NĂNG](/bai-viet/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/)).

![Hình 1: Nhóm menu Kho hàng, Mượn hàng, Thống kê kho, Thống kê mượn hàng](/posts/2026-11-07-kho-00-tong-quan-module-kho-hang-va-thu-tu-su-dung/hinh-01-menu-kho-hang.png)

**Phần A –  Kho hàng:**

- **KHO-A01**: Màn hình: Theo dõi điều phối xe; Dùng để: Mở bảng tính Google Sheet điều phối xe giao hàng ngay trong ERP
- **KHO-A02**: Màn hình: Phiếu nhập gửi hàng; Dùng để: Nhập kho hàng **khách gửi** (hàng không thuộc sở hữu công ty)
- **KHO-A03**: Màn hình: Phiếu điều chỉnh kho; Dùng để: Tăng / giảm tồn kho sau kiểm kê, xử lý chênh lệch
- **KHO-A04**: Màn hình: Phiếu nhập kho; Dùng để: Nhập kho hàng **mua của NCC** (từ phiếu mua hàng) và hàng **khách trả** (từ phiếu khách trả hàng); phân bổ chi phí mua vào giá nhập
- **KHO-A05**: Màn hình: Phiếu xuất kho; Dùng để: Xuất kho hàng **bán** (từ phiếu bán hàng) và hàng **trả NCC** (từ phiếu trả hàng)
- **KHO-A06**: Màn hình: Phiếu xuất chuyển kho; Dùng để: Xuất hàng từ kho này để chuyển sang kho khác
- **KHO-A07**: Màn hình: Phiếu xuất hàng; Dùng để: Xuất kho khác (không phải bán, không phải trả NCC): xuất mẫu, xuất dùng… Thống kê gọi là "Xuất khác"
- **KHO-A08**: Màn hình: Phiếu nhập chuyển kho; Dùng để: Nhận hàng ở kho đích từ phiếu xuất chuyển kho
- **KHO-A09**: Màn hình: Sổ cái kho; Dùng để: Xem từng dòng nhập / xuất theo thời gian, giá bình quân trước / sau, tính lại giá vốn

**Phần B –  Mượn hàng:**

- **KHO-B01**: Màn hình: Phiếu xuất cho mượn; Dùng để: Xuất hàng cho đơn vị khác mượn
- **KHO-B02**: Màn hình: Phiếu nhập trả; Dùng để: Nhận lại hàng đơn vị khác trả sau khi mượn
- **KHO-B03**: Màn hình: Phiếu nhập mượn; Dùng để: Nhập hàng công ty mượn của đơn vị khác
- **KHO-B04**: Màn hình: Phiếu xuất trả; Dùng để: Trả lại hàng đã mượn

**Phần C –  Thống kê kho** (mỗi màn một bài tổng quan):

- **KHO-C01**: Màn hình: Xuất nhập tồn trong ngày
- **KHO-C02**: Màn hình: Nhập kho gửi hàng
- **KHO-C03**: Màn hình: Xuất khác
- **KHO-C04**: Màn hình: Xuất chuyển kho
- **KHO-C05**: Màn hình: Điều chỉnh kho
- **KHO-C06**: Màn hình: Xuất nhập tồn lô hàng
- **KHO-C07**: Màn hình: Xuất nhập tồn
- **KHO-C08**: Màn hình: Đối chiếu sổ cái kho

**Phần D –  Thống kê mượn hàng** (mỗi màn một bài tổng quan):

- **KHO-D01**: Màn hình: Tổng hợp mượn hàng
- **KHO-D02**: Màn hình: Chi tiết xuất mượn
- **KHO-D03**: Màn hình: Chi tiết nhập mượn

## 4. Trình tự công việc

**Quy trình nghiệp vụ tổng thể (Business Workflow):**

```text
 THIẾT LẬP (sổ tay Thiết lập danh mục)
   Kho hàng · Hàng hoá · NCC · Khách hàng · Xe · Tài xế
                     ↓
 NHẬP KHO
   Mua hàng: Phiếu mua hàng (MH-A03) ──► Phiếu nhập kho "Nhập mua hàng" (KHO-A04.1)
   Khách trả: Phiếu khách trả hàng (BH) ──► Phiếu nhập kho "Nhập khách trả" (A04.2)
   Khách gửi: Phiếu nhập gửi hàng (KHO-A02)
                     ↓
 CHUYỂN KHO (nếu cần)
   Phiếu xuất chuyển kho (KHO-A06) ──► Phiếu nhập chuyển kho (KHO-A08)
                     ↓
 XUẤT KHO
   Bán hàng: Phiếu bán hàng (BH) ──► Phiếu xuất kho "Xuất bán hàng" (KHO-A05)
   Trả NCC: Phiếu trả hàng (MH-A04) ──► Phiếu xuất kho "Xuất trả hàng" (KHO-A05)
   Xuất khác: Phiếu xuất hàng (KHO-A07)
                     ↓
 KIỂM KÊ → Phiếu điều chỉnh kho (KHO-A03)
                     ↓
 ĐỐI CHIẾU → Sổ cái kho (KHO-A09), Thống kê kho (KHO-C01 → C08)
```

**Phiếu nào làm thay đổi gì:**

- **Phiếu mua hàng (Mua hàng)**: Tồn kho: Không (chỉ tạo "hàng chờ nhập kho"); Công nợ: Không; Sổ cái kho: Không
- **Phiếu nhập kho – Nhập mua hàng**: Tồn kho: **Tăng**; Công nợ: NCC **tăng**; Sổ cái kho: Dòng nhập, giá nhập = đơn giá sau chiết khấu + chi phí phân bổ
- **Phiếu nhập kho – Nhập khách trả hàng**: Tồn kho: **Tăng**; Công nợ: Khách hàng **giảm**; Sổ cái kho: Dòng nhập, giá = giá vốn lúc xuất bán
- **Phiếu nhập gửi hàng**: Tồn kho: **Tăng**; Công nợ: Không; Sổ cái kho: Dòng nhập, giá 0
- **Phiếu điều chỉnh kho**: Tồn kho: Tăng (số dương) / giảm (số âm); Công nợ: Không; Sổ cái kho: Dòng tăng / giảm
- **Phiếu xuất kho, xuất chuyển kho, xuất hàng**: Tồn kho: Giảm; Công nợ: Theo bài của từng màn; Sổ cái kho: Dòng xuất
- **Phiếu nhập chuyển kho**: Tồn kho: Tăng ở kho nhập; Công nợ: Không; Sổ cái kho: Dòng nhập

**Phối hợp giữa các bộ phận (Swimlane):**

1. **Bộ phận mua hàng:** lập phiếu mua hàng; thủ kho lập phiếu nhập kho mua hàng từ phiếu nguồn.
2. **Bộ phận bán hàng:** lập phiếu khách trả hàng; thủ kho lập phiếu nhập kho khách trả hàng.
3. **Bộ phận bán hàng:** lập phiếu bán hàng; thủ kho lập phiếu xuất kho bán hàng.
4. **Thủ kho:** kiểm kê và lập phiếu điều chỉnh khi cần.
5. **Kế toán:** đối chiếu sổ cái kho và tính lại giá vốn.

*Sơ đồ phối hợp là cách chia việc tham khảo. Việc ai làm bước nào phụ thuộc quy định nội bộ và quyền được cấp.*

### Bước 1 – Mở nhóm menu Kho hàng

Ở thanh menu bên trái, khối **NGHIỆP VỤ**, bấm **Kho hàng**. Danh sách màn hình hiện ra bên dưới (Hình 1).

### Bước 2 – Mở màn hình cần làm

Bấm vào tên màn hình, ví dụ **Phiếu nhập kho**. Hệ thống mở danh sách phiếu, mặc định lọc **Hôm nay**. Cách lọc khoảng ngày xem **Sổ tay Hướng dẫn chung, [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)**.

Tìm nhanh chức năng: xem **Sổ tay Hướng dẫn chung, [HƯỚNG DẪN BỐ CỤC MÀN HÌNH VÀ TÌM CHỨC NĂNG](/bai-viet/2026-11-07-gen-03-huong-dan-bo-cuc-man-hinh-va-tim-chuc-nang/)**.

### Mục lục bài hướng dẫn

**Phần A – Kho hàng:**

- **[TỔNG QUAN MÀN HÌNH THEO DÕI ĐIỀU PHỐI XE](/bai-viet/2026-11-07-kho-a01-0-tong-quan-man-hinh-theo-doi-dieu-phoi-xe/)**: Bài: Tổng quan màn hình Theo dõi điều phối xe
- **[TỔNG QUAN MÀN HÌNH PHIẾU NHẬP GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-0-tong-quan-man-hinh-phieu-nhap-gui-hang/)**: Bài: Tổng quan màn hình Phiếu nhập gửi hàng
- **[HƯỚNG DẪN LẬP PHIẾU NHẬP KHO GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-1-huong-dan-lap-phieu-nhap-kho-gui-hang/)**: Bài: Hướng dẫn lập phiếu nhập kho gửi hàng
- **[TỔNG QUAN MÀN HÌNH PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-0-tong-quan-man-hinh-phieu-dieu-chinh-kho/)**: Bài: Tổng quan màn hình Phiếu điều chỉnh kho
- **[HƯỚNG DẪN LẬP PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-1-huong-dan-lap-phieu-dieu-chinh-kho/)**: Bài: Hướng dẫn lập phiếu điều chỉnh kho
- **[HƯỚNG DẪN NHẬP CHI TIẾT PHIẾU KHO TỪ EXCEL](/bai-viet/2026-11-07-kho-a03-2-huong-dan-nhap-chi-tiet-phieu-kho-tu-excel/)**: Bài: Hướng dẫn nhập chi tiết phiếu kho từ Excel
- **[TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/)**: Bài: Tổng quan màn hình Phiếu nhập kho
- **[HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/)**: Bài: Hướng dẫn nhập kho hàng mua từ phiếu mua hàng
- **[HƯỚNG DẪN NHẬP KHO HÀNG KHÁCH TRẢ](/bai-viet/2026-11-07-kho-a04-2-huong-dan-nhap-kho-hang-khach-tra/)**: Bài: Hướng dẫn nhập kho hàng khách trả
- **[HƯỚNG DẪN PHÂN BỔ CHI PHÍ VÀO PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-3-huong-dan-phan-bo-chi-phi-vao-phieu-nhap-kho/)**: Bài: Hướng dẫn phân bổ chi phí vào phiếu nhập kho
- **[HƯỚNG DẪN IN PHIẾU NHẬP KHO VÀ TEM KIỆN](/bai-viet/2026-11-07-kho-a04-4-huong-dan-in-phieu-nhap-kho-va-tem-kien/)**: Bài: Hướng dẫn in phiếu nhập kho và tem kiện
- **KHO-A05 → A09**: Bài: Phiếu xuất kho, Phiếu xuất chuyển kho, Phiếu xuất hàng, Phiếu nhập chuyển kho, Sổ cái kho (xem sitemap sổ tay)

**Phần B – Mượn hàng:** KHO-B01 → KHO-B04.

**Phần C – Thống kê kho:** [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN TRONG NGÀY](/bai-viet/2026-11-07-kho-c01-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton-trong-ngay/) → [TỔNG QUAN MÀN HÌNH ĐỐI CHIẾU SỔ CÁI KHO - XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c08-0-tong-quan-man-hinh-doi-chieu-so-cai-kho-xuat-nhap-ton/), mỗi màn một bài tổng quan.

**Phần D – Thống kê mượn hàng:** [TỔNG QUAN MÀN HÌNH TỔNG HỢP MƯỢN HÀNG](/bai-viet/2026-11-07-kho-d01-0-tong-quan-man-hinh-tong-hop-muon-hang/) → [TỔNG QUAN MÀN HÌNH CHI TIẾT NHẬP MƯỢN](/bai-viet/2026-11-07-kho-d03-0-tong-quan-man-hinh-chi-tiet-nhap-muon/), mỗi màn một bài tổng quan.

**Tra cứu ở Sổ tay Hướng dẫn chung:** [HƯỚNG DẪN ĐĂNG NHẬP, ĐĂNG XUẤT VÀ ĐỔI MẬT KHẨU](/bai-viet/2026-11-07-gen-01-huong-dan-dang-nhap-dang-xuat-va-doi-mat-khau/) → [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/), [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/), [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/).

## 6. Kiểm tra sau khi thực hiện

Bạn nắm được phân hệ Kho hàng gồm những màn hình nào, phiếu nào làm phát sinh tồn kho và công nợ, và thứ tự công việc từ lúc hàng về tới lúc đối chiếu sổ cái kho.

## 7. Những điều cần lưu ý

⚠️ **Tồn kho thay đổi ngay khi lưu phiếu kho**, không có bước duyệt. Kiểm tra kỹ kho, hàng hoá, số lượng trước khi bấm **Lưu lại**.

⚠️ **Phiếu mua hàng, phiếu khách trả hàng chưa làm thay đổi tồn kho và công nợ.** Chỉ khi thủ kho lập **phiếu nhập kho** từ các phiếu đó thì hàng mới vào kho và công nợ mới thay đổi.

⚠️ Phải đối chiếu **tồn được xuất** khi xuất, điều chỉnh giảm và khi xóa/sửa phiếu nhập. Điều kiện chặn của từng luồng khác nhau; riêng sửa phiếu nhập cần kiểm tra phần hàng đã xuất theo [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/), không coi lưu được là chứng minh tồn không âm.

⚠️ Không lập / sửa / xoá được phiếu có ngày thuộc **kỳ kế toán đã khoá** (thông báo *Sổ kế toán đã được khoá trong thời gian này.*).

⚠️ Điều kiện người tạo và chứng từ phụ thuộc khác nhau theo từng màn. Không áp dụng quy tắc “chỉ người tạo được xóa” cho mọi phiếu; xem bài của đúng loại phiếu và quyền Xóa được cấp.

### Không thấy nhóm menu Kho hàng hoặc một màn hình trong phân hệ 

Kiểm tra: tài khoản đã được cấp quyền **Truy cập** màn hình đó chưa.
Cách xử lý: liên hệ quản trị hệ thống để được cấp quyền, sau đó đăng xuất và đăng nhập lại.

### "CẢNH BÁO – Lỗi thêm: Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: ngày trên phiếu thuộc kỳ kế toán đã khoá.
Cách xử lý: giữ ngày nghiệp vụ thực tế; nếu thuộc kỳ khóa, báo kế toán trưởng chốt cách mở kỳ/điều chỉnh theo sổ tay Kế toán – Kỳ kế toán.

### Danh sách trống dù đã lập phiếu 

Kiểm tra: khoảng ngày đang lọc (mặc định **Hôm nay**) và chi nhánh đang làm việc.
Cách xử lý: chọn lại khoảng ngày ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)) hoặc kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).

## 9. Câu hỏi thường gặp

**Lập phiếu mua hàng xong, sao tồn kho chưa tăng?**
Phiếu mua hàng chỉ là hàng chờ nhập. Thủ kho phải lập **Phiếu nhập kho → Nhập mua hàng** ([HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/)).

**Kiểm kê thấy thừa / thiếu hàng thì làm gì?**
Lập **Phiếu điều chỉnh kho** ([HƯỚNG DẪN LẬP PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-1-huong-dan-lap-phieu-dieu-chinh-kho/)): số dương để tăng, số âm để giảm.

**Hàng khách gửi có tính vào tồn kho không?**
Có, phiếu nhập gửi hàng cộng vào tồn của mặt hàng được chọn ở kho nhập gửi, nhưng với giá 0 (không có giá vốn). Xem [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-0-tong-quan-man-hinh-phieu-nhap-gui-hang/).

## 10. Công việc tiếp theo

Thứ tự đọc tài liệu đề nghị:

```text
KHO-00 Tổng quan phân hệ (bài này)
   ↓
Sổ tay Hướng dẫn chung — GEN-01 → GEN-06: đăng nhập, chi nhánh, menu, lọc, Excel, in
   ↓
KHO-A04.1 Nhập kho hàng mua → KHO-A04.2 Nhập kho hàng khách trả
   ↓
KHO-A05 Phiếu xuất kho (xuất bán, xuất trả NCC)
   ↓
KHO-A06 / A08 Chuyển kho · KHO-A07 Xuất khác · KHO-A02 Hàng khách gửi
   ↓
KHO-A03.1 Điều chỉnh kho sau kiểm kê → KHO-A09 Sổ cái kho → Thống kê kho
```

**Tiếp theo:** [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/) – Tổng quan màn hình Phiếu nhập kho.

## 11. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP GỬI HÀNG](/bai-viet/2026-11-07-kho-a02-0-tong-quan-man-hinh-phieu-nhap-gui-hang/) – Tổng quan màn hình Phiếu nhập gửi hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU ĐIỀU CHỈNH KHO](/bai-viet/2026-11-07-kho-a03-0-tong-quan-man-hinh-phieu-dieu-chinh-kho/) – Tổng quan màn hình Phiếu điều chỉnh kho
- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/) – Tổng quan màn hình Phiếu nhập kho
- [TỔNG QUAN MODULE MUA HÀNG VÀ THỨ TỰ SỬ DỤNG](/bai-viet/2026-11-07-mh-00-tong-quan-module-mua-hang-va-thu-tu-su-dung/) – Tổng quan phân hệ Mua hàng
- Sổ tay Bán hàng – Phiếu bán hàng, Khách trả hàng
- Sổ tay Kế toán – Kỳ kế toán, Thống kê công nợ
- Sổ tay Thiết lập danh mục – Kho hàng, Hàng hoá
