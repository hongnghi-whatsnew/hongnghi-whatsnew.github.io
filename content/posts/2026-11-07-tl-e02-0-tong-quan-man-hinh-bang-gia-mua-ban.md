---
title: "TỔNG QUAN MÀN HÌNH BẢNG GIÁ MUA BÁN"
date: "2026-11-07"
summary: "Hướng dẫn sử dụng chức năng tổng quan màn hình bảng giá mua bán, gồm thao tác, thông tin cần kiểm tra và lưu ý liên quan."
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

Màn hình **Bảng giá** lưu hai loại bảng giá trên cùng một danh sách:

- **Khách hàng**: Là gì: Bảng giá bán gắn với một hoặc nhiều khách hàng; Dùng ở đâu: Phiếu bán hàng: **Lấy giá từ bảng giá**
- **Chung**: Là gì: Bảng giá bán không gắn khách hàng nào (giá niêm yết); Dùng ở đâu: Phiếu bán hàng, khi khách chưa có bảng giá riêng
- **Nhà cung cấp**: Là gì: Báo giá nhà cung cấp gửi cho công ty (giá mua); Dùng ở đâu: Phiếu mua hàng: nút **Từ bảng giá**

Từ màn này bạn còn ghi nhận **phản hồi của khách hàng** về bảng giá và **in bảng giá** gửi khách.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** như phần “Chuẩn bị trước khi thực hiện”.
- Đã có danh mục **Khách hàng** (TL-C03), **Nhà cung cấp** (TL-B02), **Hàng hóa** (TL-D) mà bảng giá sẽ gắn tới.

## 2. Mở chức năng

**Bảng giá / báo giá → Bảng giá mua bán**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Hình 1: BẢNG GIÁ - DANH SÁCH — hiện không có dữ liệu, chỉ xem.](/posts/2026-11-07-tl-e02-0-tong-quan-man-hinh-bang-gia-mua-ban/ui-20261026-tl-e02-ds-figure-01.png)

- **Bộ chọn khoảng ngày**: Chức năng: Lọc theo **Ngày báo giá**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Menu: **BG Nhà cung cấp** hoặc **BG Khách hàng**; Hướng dẫn: [HƯỚNG DẪN LẬP BẢNG GIÁ BÁN CHO KHÁCH HÀNG](/bai-viet/2026-11-07-tl-e02-1-huong-dan-lap-bang-gia-ban-cho-khach-hang/), [HƯỚNG DẪN LẬP BÁO GIÁ NHÀ CUNG CẤP VÀ TẢI FILE BÁO GIÁ CỦA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-e02-2-huong-dan-lap-bao-gia-nha-cung-cap-va-tai-file-bao-gia-cua-nha-cung-cap/)
- **Phản hồi**: Chức năng: Mở cửa sổ ghi nhận phản hồi; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **T.Hợp phản hồi**: Chức năng: Mở danh sách tất cả phản hồi; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Cột Thao tác**: Chức năng: **Sửa** \; Hướng dẫn: **Sao chép** \; Thông tin: **Xóa**; Thông tin: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

**Menu chuột phải trên một dòng:** **Xem lại**, **Thêm phản hồi của khách hàng**, **Lịch sử phản hồi**, **In Bảng Giá** (cùng mục chung của lưới, ví dụ đặt lại bố cục cột).

**Các cột trên danh sách:**

- **STT, Thao tác**: Ý nghĩa: Số thứ tự; **Sửa** \; Thông tin: **Sao chép** \; Thông tin: **Xóa** (hiện theo quyền của từng loại bảng giá)
- **Ngày báo giá**: Ý nghĩa: Ngày lập bảng giá, dùng để lọc danh sách
- **Ngày áp dụng**: Ý nghĩa: Ngày bảng giá bắt đầu có hiệu lực
- **Bảng giá**: Ý nghĩa: **Khách hàng**, **Chung** hoặc **Nhà cung cấp**
- **Mã bảng giá**: Ý nghĩa: Hệ thống tự cấp: **BG** + 8 chữ số
- **Tên bảng giá**: Ý nghĩa: Tên do người lập nhập (báo giá nhà cung cấp tự lấy tên rút gọn nhà cung cấp)
- **Trạng thái**: Ý nghĩa: **Kích hoạt** hoặc **Ngưng sử dụng**
- **Ghi chú, Người tạo, Ngày tạo, Người sửa, Ngày sửa**: Ý nghĩa: Ghi chú; hệ thống tự ghi

Dòng cuối bảng hiện **TỔNG CỘNG: n**. Nhấp đúp vào một dòng mở cửa sổ chỉ xem **THÔNG TIN BẢNG GIÁ**.

## 4. Trình tự công việc

```text
Báo giá nhà cung cấp (TL-E02.2)          Bảng giá bán (TL-E02.1)
      ↓                                        ↓
Phiếu mua hàng: nút Từ bảng giá      Phiếu bán hàng: Lấy giá từ bảng giá
                                               ↓
                              Thống kê Doanh số bảng giá (BH-B11.0)
```

```text
Bảng giá mua bán
   ├── Thêm mới ▸ BG Khách hàng ──► TL-E02.1
   ├── Thêm mới ▸ BG Nhà cung cấp ► TL-E02.2
   ├── Phản hồi / T.Hợp phản hồi ─► ghi nhận ý kiến khách về bảng giá
   ├── Chuột phải ▸ In Bảng Giá ──► cửa sổ xem trước khi in
   └── Sửa / Sao chép / Xóa / Nhấp đúp
```

## 5. Thực hiện trên phần mềm

- **Lập bảng giá bán cho khách hoặc bảng giá chung**: Cách làm: **Thêm mới ▸ BG Khách hàng**; Bài hướng dẫn: [HƯỚNG DẪN LẬP BẢNG GIÁ BÁN CHO KHÁCH HÀNG](/bai-viet/2026-11-07-tl-e02-1-huong-dan-lap-bang-gia-ban-cho-khach-hang/)
- **Ghi báo giá của nhà cung cấp**: Cách làm: **Thêm mới ▸ BG Nhà cung cấp**; Bài hướng dẫn: [HƯỚNG DẪN LẬP BÁO GIÁ NHÀ CUNG CẤP VÀ TẢI FILE BÁO GIÁ CỦA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-e02-2-huong-dan-lap-bao-gia-nha-cung-cap-va-tai-file-bao-gia-cua-nha-cung-cap/)
- **Nhập nhanh từ file báo giá của nhà cung cấp**: Cách làm: **Thao tác ▸ Tải lên file NCC** trong cửa sổ; Bài hướng dẫn: [HƯỚNG DẪN LẬP BÁO GIÁ NHÀ CUNG CẤP VÀ TẢI FILE BÁO GIÁ CỦA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-e02-2-huong-dan-lap-bao-gia-nha-cung-cap-va-tai-file-bao-gia-cua-nha-cung-cap/)
- **Tăng / giảm giá hàng loạt**: Cách làm: **Thao tác ▸ Điều chỉnh giá** trong cửa sổ; Bài hướng dẫn: [HƯỚNG DẪN ĐIỀU CHỈNH GIÁ HÀNG LOẠT TRONG BẢNG GIÁ](/bai-viet/2026-11-07-tl-e02-3-huong-dan-dieu-chinh-gia-hang-loat-trong-bang-gia/)
- **Ghi phản hồi của khách**: Cách làm: **Phản hồi**, hoặc chuột phải ▸ **Thêm phản hồi của khách hàng**; Bài hướng dẫn: Mục dưới
- **Xem phản hồi**: Cách làm: **T.Hợp phản hồi** (tất cả) hoặc chuột phải ▸ **Lịch sử phản hồi** (của bảng giá đang chọn); Bài hướng dẫn: Mục dưới
- **In bảng giá**: Cách làm: Chuột phải ▸ **In Bảng Giá**; Bài hướng dẫn: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Lấy giá khi bán hàng**: Cách làm: Phiếu bán hàng ▸ chuột phải cột trên lưới hàng hóa ▸ **Lấy giá từ bảng giá**; Bài hướng dẫn: BH-A03
- **Lấy giá khi mua hàng**: Cách làm: Phiếu mua hàng ▸ **Từ bảng giá**; Bài hướng dẫn: [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/)

### Ghi nhận phản hồi của khách hàng

Phản hồi là ghi chú nội bộ cho biết khách nghĩ gì về một bảng giá. Phản hồi **không** tự đổi giá.

**Bước 1 –** Bấm **Phản hồi** (hoặc chuột phải một dòng ▸ **Thêm phản hồi của khách hàng**). cửa sổ **PHẢN HỒI** mở ra.

**Bước 2 –** Nhập các trường ở bảng dưới.

**Bước 3 –** Bấm **Lưu lại**. Muốn sửa phản hồi, mở **T.Hợp phản hồi** hoặc **Lịch sử phản hồi** rồi nhấp đúp dòng phản hồi (cửa sổ **CẬP NHẬT PHẢN HỒI**, không đổi được **BẢNG GIÁ** và **NGƯỜI PHẢN HỒI**).

![Hình 3: PHẢN HỒI — biểu mẫu mới chưa nhập, chưa chọn bảng giá và chưa gửi/lưu.](/posts/2026-11-07-tl-e02-0-tong-quan-man-hinh-bang-gia-mua-ban/ui-20261026-tl-e02-phan-hoi-figure-03.png)

- **NGÀY PHẢN HỒI**: Ý nghĩa: Ngày khách phản hồi (bắt buộc)
- **BẢNG GIÁ**: Ý nghĩa: Bảng giá được phản hồi (bắt buộc)
- **PHƯƠNG THỨC LIÊN HỆ**: Ý nghĩa: Ví dụ gọi điện, email, gặp trực tiếp
- **NGƯỜI PHẢN HỒI**: Ý nghĩa: Ai phản hồi (bắt buộc)
- **NỘI DUNG PHẢN HỒI**: Ý nghĩa: Nội dung
- **ĐÁNH GIÁ**: Ý nghĩa: Gợi ý: **Giá cao**, **Giá chấp nhận**, **Không phản hồi**, **Hủy** (bắt buộc)
- **GHI CHÚ**: Ý nghĩa: Ghi chú thêm

Danh sách phản hồi có các cột: Ngày phản hồi, Bảng giá, Phương thức liên hệ, Người phản hồi, Nội dung, Đánh giá, Ghi chú, Người tạo, Thời gian tạo.

## 6. Giải thích các thông tin trên màn hình

Các trường của bảng giá được giải thích ở [HƯỚNG DẪN LẬP BẢNG GIÁ BÁN CHO KHÁCH HÀNG](/bai-viet/2026-11-07-tl-e02-1-huong-dan-lap-bang-gia-ban-cho-khach-hang/) (khách hàng) và [HƯỚNG DẪN LẬP BÁO GIÁ NHÀ CUNG CẤP VÀ TẢI FILE BÁO GIÁ CỦA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-e02-2-huong-dan-lap-bao-gia-nha-cung-cap-va-tai-file-bao-gia-cua-nha-cung-cap/) (nhà cung cấp). Quy tắc riêng của màn này:

- **Ai thấy bảng giá nào**: Quy tắc: Người dùng thường thấy bảng giá **Chung**, **Nhà cung cấp** và bảng giá gắn khách thuộc **nhóm khách hàng mình phụ trách**; quản trị cấp cao thấy tất cả
- **Lọc ngày**: Quy tắc: Theo **Ngày báo giá**, không theo ngày áp dụng
- **Lấy giá bán (phiếu bán hàng)**: Quy tắc: Thứ tự: (1) bảng giá riêng của khách, ngày áp dụng mới nhất không sau hôm nay; (2) bảng giá **Chung**; (3) giá xuất kho gần nhất của khách
- **Thành phẩm**: Quy tắc: Giá = giá hàng trơn tương ứng cộng giá gia công theo số mặt (tab **Y/c gia công**)
- **Nhóm khách hàng phụ trách**: Quy tắc: Cấu hình ở người dùng (sổ tay Hệ thống)

## 7. Kiểm tra sau khi thực hiện

Bạn biết hai loại bảng giá nằm ở đâu, ai thấy được, bảng giá được dùng thế nào khi bán / mua hàng, và cách ghi phản hồi, in bảng giá.

## 8. Những điều cần lưu ý

⚠️ Bảng giá nằm trong **cơ sở dữ liệu của tên miền đang đăng nhập**. Mỗi chi nhánh hệ thống chính thức có tên miền, dữ liệu và tài khoản riêng, không chuyển trong phiên. Nguồn danh sách/lấy giá không thêm bộ lọc chi nhánh chỉ mô tả phạm vi trong cùng dữ liệu đang mở, không phải dùng chung giá giữa các hệ thống hệ thống chính thức.

⚠️ **Sửa bảng giá = lưu lại toàn bộ dòng giá.** Khi bấm **Lưu lại** ở cửa sổ sửa, hệ thống xoá hết dòng giá cũ rồi ghi lại đúng những dòng đang hiện trên cửa sổ.

⚠️ Xoá chỉ do **người đã tạo** bảng giá thực hiện được (xem phần “Vướng mắc thường gặp”). Quyền **Xoá** còn tách theo loại: bảng giá khách hàng / chung dùng **Xoá (bán)**, báo giá nhà cung cấp dùng **Xoá (mua)**.

⚠️ Muốn đổi giá từ ngày mới: **Sao chép** bảng giá, đổi **NGÀY ÁP DỤNG** và đơn giá, **Lưu lại**. Bảng giá cũ giữ cho các phiếu cũ.

### "Bạn chỉ được xóa phiếu do mình tạo" 

Nguyên nhân: người bấm **Xóa** không phải người đã tạo bảng giá.
Cách xử lý: nhờ người tạo xoá, hoặc lập bảng giá mới thay thế.

### "Bạn không có quyền thêm bảng giá loại này." / "… cập nhật bảng giá loại này." / "… xóa bảng giá loại này." 

Nguyên nhân: thiếu quyền theo loại: bảng giá nhà cung cấp cần quyền có đuôi **(mua)**, bảng giá khách hàng / chung cần quyền **(bán)**.
Cách xử lý: nhờ quản trị cấp quyền đúng loại.

## 10. Câu hỏi thường gặp

**Tôi không thấy bảng giá của một khách?**
Kiểm tra khoảng ngày (lọc theo **Ngày báo giá**) và khách đó có thuộc nhóm khách hàng bạn phụ trách không.

**Cột Trạng thái luôn là Kích hoạt?**
cửa sổ lập bảng giá không có ô đổi trạng thái; bảng giá mới luôn **Kích hoạt**.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN LẬP BẢNG GIÁ BÁN CHO KHÁCH HÀNG](/bai-viet/2026-11-07-tl-e02-1-huong-dan-lap-bang-gia-ban-cho-khach-hang/) – Lập bảng giá bán cho khách hàng; [HƯỚNG DẪN LẬP BÁO GIÁ NHÀ CUNG CẤP VÀ TẢI FILE BÁO GIÁ CỦA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-e02-2-huong-dan-lap-bao-gia-nha-cung-cap-va-tai-file-bao-gia-cua-nha-cung-cap/) – Lập báo giá nhà cung cấp và tải file nhà cung cấp.

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN LẬP BẢNG GIÁ BÁN CHO KHÁCH HÀNG](/bai-viet/2026-11-07-tl-e02-1-huong-dan-lap-bang-gia-ban-cho-khach-hang/) – Lập bảng giá bán cho khách hàng
- [HƯỚNG DẪN LẬP BÁO GIÁ NHÀ CUNG CẤP VÀ TẢI FILE BÁO GIÁ CỦA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-e02-2-huong-dan-lap-bao-gia-nha-cung-cap-va-tai-file-bao-gia-cua-nha-cung-cap/) – Lập báo giá nhà cung cấp và tải file nhà cung cấp
- [HƯỚNG DẪN ĐIỀU CHỈNH GIÁ HÀNG LOẠT TRONG BẢNG GIÁ](/bai-viet/2026-11-07-tl-e02-3-huong-dan-dieu-chinh-gia-hang-loat-trong-bang-gia/) – Điều chỉnh giá hàng loạt
- BH-A03 – Phiếu bán hàng; [TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BẢNG GIÁ](/bai-viet/2026-11-07-bh-b11-0-tong-quan-man-hinh-thong-ke-doanh-so-bang-gia/) – Doanh số bảng giá; [HƯỚNG DẪN LẬP PHIẾU MUA HÀNG](/bai-viet/2026-11-07-mh-a03-1-huong-dan-lap-phieu-mua-hang/) – Lập phiếu mua hàng
- TL-C03 – Khách hàng; TL-B02 – Nhà cung cấp
