---
title: "HƯỚNG DẪN LẬP BẢNG GIÁ BÁN CHO KHÁCH HÀNG"
date: "2026-11-07"
summary: "Bảng giá bán quyết định đơn giá tự điền ở phiếu bán hàng (Lấy giá từ bảng giá)."
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

Bảng giá bán quyết định **đơn giá tự điền** ở phiếu bán hàng (**Lấy giá từ bảng giá**). Mỗi bảng giá gồm phần thông tin chung và các dòng giá của từng hàng hóa. cửa sổ có **bốn tab** để nhập dòng giá theo bốn cách:

- **Theo quy cách**: Dùng khi: Ván trơn: nhiều khổ, nhiều độ dày; Cách nhập: Nhóm theo xuất xứ + tiêu chuẩn + loại hàng; cột là **khổ**, hàng là **độ dày**, mỗi ô là đơn giá
- **Theo loại ván**: Dùng khi: Ván trơn theo bố cục file báo giá gửi khách; Cách nhập: Nhóm theo xuất xứ + mã tiêu chuẩn + khổ; cột là **loại ván**, hàng là độ dày
- **Theo hàng hóa**: Dùng khi: Nhập từng hàng hóa cụ thể; Cách nhập: Bảng chọn hàng hóa + đơn giá
- **Y/c gia công**: Dùng khi: Thành phẩm có gia công melamine; Cách nhập: Bảng kiểu gia công + số mặt + đơn giá

Bài này có bảng con và ảnh hưởng đơn giá bán nên được tách thành bài riêng.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”, đã đọc [TỔNG QUAN MÀN HÌNH BẢNG GIÁ MUA BÁN](/bai-viet/2026-11-07-tl-e02-0-tong-quan-man-hinh-bang-gia-mua-ban/).
- Khách hàng đã có (TL-C03). Hàng hóa ván trơn đã có đủ theo tiêu chuẩn, xuất xứ, độ dày, khổ cần báo giá (TL-D09), vì hệ thống **khớp ô giá với hàng hóa** khi lưu.
- Muốn nhập tab **Y/c gia công**: **Danh mục gia công** đã có (TL-D01).

## 2. Mở chức năng

**Bảng giá / báo giá → Bảng giá mua bán → Thêm mới → BG Khách hàng**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![THÊM BẢNG GIÁ — tab Theo loại ván trống, chưa chọn khách hàng, chưa nhập giá/chưa lưu.](/posts/2026-11-07-tl-e02-1-huong-dan-lap-bang-gia-ban-cho-khach-hang/ui-20261026-tl-e02-kh-loai-van-customer-price-board-type-tab.png)

![THÊM BẢNG GIÁ — tab Theo hàng hóa trống, chưa chọn khách hàng, chưa nhập giá/chưa lưu.](/posts/2026-11-07-tl-e02-1-huong-dan-lap-bang-gia-ban-cho-khach-hang/ui-20261026-tl-e02-kh-hang-hoa-customer-price-item-tab.png)

![THÊM BẢNG GIÁ — tab Y/c gia công trống, chưa chọn khách hàng, chưa nhập giá/chưa lưu.](/posts/2026-11-07-tl-e02-1-huong-dan-lap-bang-gia-ban-cho-khach-hang/ui-20261026-tl-e02-kh-gia-cong-customer-price-processing-tab.png)

![Hình 1: THÊM BẢNG GIÁ — tab Theo quy cách trống, chưa chọn khách hàng, chưa nhập giá/chưa lưu.](/posts/2026-11-07-tl-e02-1-huong-dan-lap-bang-gia-ban-cho-khach-hang/ui-20261026-tl-e02-kh-customer-price-spec-tab.png)

- **NGÀY BÁO GIÁ, NGÀY ÁP DỤNG**: Ý nghĩa: Ngày lập và ngày bắt đầu có hiệu lực
- **TÊN BẢNG GIÁ, MÃ BẢNG GIÁ**: Ý nghĩa: Tên tự nhập; mã tự cấp (**MÃ TẠO TỰ ĐỘNG**)
- **KHÁCH HÀNG**: Ý nghĩa: Chọn một hoặc nhiều khách. **Để trống = bảng giá chung**
- **Nút Đổi đối tượng (cạnh ô khách hàng)**: Ý nghĩa: Chuyển sang báo giá nhà cung cấp ([HƯỚNG DẪN LẬP BÁO GIÁ NHÀ CUNG CẤP VÀ TẢI FILE BÁO GIÁ CỦA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-e02-2-huong-dan-lap-bao-gia-nha-cung-cap-va-tai-file-bao-gia-cua-nha-cung-cap/))
- **Bốn tab**: Ý nghĩa: **Theo quy cách**, **Theo loại ván**, **Theo hàng hóa**, **Y/c gia công**
- **Chân hộp thoại**: Ý nghĩa: **Thêm nhóm** hoặc **Thêm một hàng** (đổi theo tab), **Thao tác**, **Lưu lại**, **Đóng**

Menu **Thao tác** thay đổi theo tab:

- **Theo quy cách**: Mục trong **Thao tác**: **Tải lên file Excel**, **Tải lên file NCC**, **Tải file mẫu**, **Điều chỉnh giá**
- **Theo loại ván**: Mục trong **Thao tác**: **Tải lên file gửi KH**, **Điều chỉnh giá**
- **Theo hàng hóa, Y/c gia công**: Mục trong **Thao tác**: **Tải lên file Excel**, **Tải file mẫu**, **Điều chỉnh giá**

**Hoàn tác điều chỉnh giá** chỉ hiện sau khi đã điều chỉnh. **Tải lên file NCC** dùng cho báo giá nhà cung cấp ([HƯỚNG DẪN LẬP BÁO GIÁ NHÀ CUNG CẤP VÀ TẢI FILE BÁO GIÁ CỦA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-e02-2-huong-dan-lap-bao-gia-nha-cung-cap-va-tai-file-bao-gia-cua-nha-cung-cap/)); **Điều chỉnh giá** xem [HƯỚNG DẪN ĐIỀU CHỈNH GIÁ HÀNG LOẠT TRONG BẢNG GIÁ](/bai-viet/2026-11-07-tl-e02-3-huong-dan-dieu-chinh-gia-hang-loat-trong-bang-gia/).

## 4. Trình tự công việc

```text
Thêm mới ▸ BG Khách hàng
      ↓
Nhập thông tin chung: ngày báo giá, tên, ngày áp dụng, khách hàng (hoặc để trống)
      ↓
Nhập dòng giá ở một trong 4 tab (hoặc tải file Excel)
      ↓
Lưu lại → hệ thống khớp từng ô giá với hàng hóa → ghi các dòng đã khớp
      ↓
Phiếu bán hàng: Lấy giá từ bảng giá
```

```text
Tab Theo quy cách                 Tab Theo loại ván
Nhóm: xuất xứ + tiêu chuẩn        Nhóm: xuất xứ + mã tiêu chuẩn + khổ
Cột: khổ (rộng × dài)             Cột: loại ván (MDF, LDF, MMR…)
Hàng: độ dày (mm)                 Hàng: độ dày (mm)
Ô: đơn giá                        Ô: đơn giá
```

### Phần thông tin chung

**Bước 1 –** Nhập **NGÀY BÁO GIÁ**, **TÊN BẢNG GIÁ**, **NGÀY ÁP DỤNG**. Chọn **KHÁCH HÀNG** (gõ tên hoặc mã để tìm; được chọn nhiều khách). Không chọn khách thì đây là **bảng giá chung**.

### Tab Theo quy cách

**Bước 2 –** Bấm **Thêm nhóm**. Ở đầu nhóm chọn **Xuất xứ** (gợi ý `DW, VECO…`, gõ thêm được), **Tiêu chuẩn** và **Loại hàng** (để trống = hàng thường).

**Bước 3 –** Bấm **+ Thêm khổ**, nhập **Chiều rộng (mm)** và **Chiều dài (mm)** hoặc bấm một chip ở **Chọn nhanh** (ví dụ 1220×2440), bấm **Thêm**. Muốn đổi khổ một cột: bấm tiêu đề cột. Bấm **×** cạnh tiêu đề để xoá cột (nhóm giữ ít nhất 1 cột).

**Bước 4 –** Bấm **+ Thêm độ dày**, nhập **Độ dày (mm)** ở ô đầu dòng, rồi nhập **đơn giá (đ)** vào từng ô khổ. **× Xóa dòng** xoá một độ dày; **× Xóa nhóm** xoá cả nhóm.

- **Đầu nhóm**: Ý nghĩa: **Xuất xứ**, **Tiêu chuẩn**, **Loại hàng**
- **Tiêu đề cột**: Ý nghĩa: Khổ rộng × dài (mm); bấm để sửa
- **Cột Độ dày**: Ý nghĩa: Độ dày mm của từng dòng
- **Ô giá**: Ý nghĩa: Đơn giá; **ô viền cam** = chưa khớp hàng hóa
- **+ Thêm độ dày, × Xóa nhóm**: Ý nghĩa: Chân nhóm

Bấm mũi tên ở đầu nhóm để thu gọn / mở nhóm; nhóm thu gọn hiện tóm tắt khổ và số dòng.

### Tab Theo loại ván

**Bước 5 –** Bấm **Thêm nhóm**, chọn **Xuất xứ**, **Mã tiêu chuẩn** (ví dụ E2, C2) và **Khổ** (ví dụ 1220x2440). Bấm nút thêm cột, chọn loại ván trong danh sách (chỉ hiện các loại ván có trong danh mục với đúng mã tiêu chuẩn của nhóm), rồi nhập độ dày và đơn giá như tab trước. Khi nhóm đã có giá thì ba ô đầu nhóm bị khoá.

Lưới này **độc lập** với tab **Theo quy cách**: sửa bên nào chỉ đổi bên đó.

### Tab Theo hàng hóa

**Bước 6 –** Bấm **Thêm một hàng**, chọn **Hàng hoá** (bảng chọn có mã, tên, đơn vị tính, quy cách, loại hàng), nhập **Đơn giá** và **Ghi chú**. Các cột **Đvt**, **Loại ván**, **Mã tiêu chuẩn**, **Dày**, **Rộng**, **Dài**, **Khổ**, **StandardSize** hiện theo hàng hóa đã chọn và không sửa được.

### Tab Y/c gia công

**Bước 7 –** Bấm **Thêm một hàng**, chọn **Gia công** (kiểu gia công), **Số mặt** (1 hoặc 2), **Đơn giá**, **Ghi chú**. Giá này được cộng vào giá thành phẩm khi bán (xem phần “Giải thích các thông tin trên màn hình”).

### Lưu và kiểm tra khớp hàng hóa

**Bước 8 –** Bấm **Lưu lại**. Với hai tab lưới, hệ thống kiểm tra rồi khớp từng ô giá với hàng hóa (theo tiêu chuẩn, xuất xứ, độ dày, khổ, loại hàng):

- Thiếu thông tin ở nhóm có giá: hệ thống nhắc, ví dụ **Nhóm 1: đã nhập đơn giá nhưng chưa chọn xuất xứ.**
- Có ô chưa khớp hoặc trùng hàng hóa: hộp xác nhận hỏi **Còn … ô giá chưa khớp được hàng hóa … Vẫn lưu … dòng hàng hóa đã khớp?** Bấm **Lưu** để chỉ ghi các dòng đã khớp, **Hủy** để quay lại sửa.
- Thành công: báo **Lưu thành công — đã thêm N dòng hàng hóa.** (thêm mới) hoặc **Lưu thành công — bảng giá có N dòng hàng hóa.** (sửa).

Thanh phía dưới hai tab lưới cho biết **Tổng: N ô giá** và số dòng hàng hóa sẽ thêm, số ô chưa khớp (sau lần bấm **Lưu lại** đầu tiên).

### Sửa và Sao chép

- **Sửa:** cửa sổ mở lại đúng dữ liệu đã lưu; các dòng ván trơn được gom lại thành nhóm ở tab **Theo quy cách**. Lưu lại sẽ **ghi lại toàn bộ** dòng giá theo những gì đang hiện (xem phần “Những điều cần lưu ý”).
- **Sao chép:** nạp sẵn khách hàng, các dòng giá và dòng gia công của bảng giá nguồn. **NGÀY BÁO GIÁ** và **NGÀY ÁP DỤNG** mặc định là hôm nay, **TÊN BẢNG GIÁ** và **GHI CHÚ** để trống: nhập lại. Mã cấp mới khi lưu.

## 6. Giải thích các thông tin trên màn hình

- **Ngày báo giá**: Ý nghĩa: Ngày lập; Bắt buộc: Có; Lưu ý: Báo **Chọn ngày báo giá** nếu trống
- **Tên bảng giá**: Ý nghĩa: Tên gọi; Bắt buộc: Có; Lưu ý: Báo **Vui lòng nhập tên bảng giá** nếu trống
- **Mã bảng giá**: Ý nghĩa: Mã tự cấp; Lưu ý: **BG** + 8 chữ số
- **Ngày áp dụng**: Ý nghĩa: Ngày hiệu lực; Bắt buộc: Có; Lưu ý: Báo **Chọn ngày áp dụng** nếu trống
- **Khách hàng**: Ý nghĩa: Khách áp dụng; Bắt buộc: Không; Lưu ý: Trống = bảng giá chung
- **Ghi chú**: Ý nghĩa: Ghi chú chung; Bắt buộc: Không
- **Xuất xứ, Tiêu chuẩn, Loại hàng, Khổ, Độ dày**: Ý nghĩa: Khoá để khớp hàng hóa; Bắt buộc: Có khi ô đã có giá; Lưu ý: Thiếu thì không lưu được (xem phần “Thực hiện trên phần mềm”)
- **Đơn giá (ô giá)**: Ý nghĩa: Giá bán; Lưu ý: Nhập 0 hoặc xoá = ô để trống, bị bỏ qua
- **Gia công, Số mặt**: Ý nghĩa: Giá gia công melamine; Lưu ý: Dùng cho thành phẩm

**Cách phiếu bán hàng lấy giá:** (1) bảng giá riêng của khách có hiệu lực mới nhất; (2) nếu không có thì bảng giá **chung**; (3) nếu vẫn không có thì lấy giá xuất kho gần nhất của khách. Với thành phẩm, giá = giá của hàng trơn tương ứng + giá gia công theo số mặt của từng kiểu gia công trong định mức.

## 7. Kiểm tra sau khi thực hiện

- Bảng giá hiện ở danh sách với cột **Bảng giá** là **Khách hàng** (hoặc **Chung**).
- Phiếu bán hàng của các khách đã chọn lấy được giá từ ngày áp dụng.
- Mỗi ô giá thành một dòng hàng hóa; một hàng hóa chỉ có một dòng giá trong một bảng giá.

## 8. Những điều cần lưu ý

⚠️ **Chỉ dữ liệu của nhóm tab đang mở lúc bấm Lưu lại được ghi.** Đang ở **Theo quy cách** hoặc **Theo loại ván** thì hệ thống ghi dữ liệu hai lưới và **bỏ** bảng ở tab **Theo hàng hóa**; đang ở **Theo hàng hóa** hoặc **Y/c gia công** thì ghi bảng **Theo hàng hóa** và **bỏ** hai lưới. Luôn quay về đúng tab muốn lưu trước khi bấm **Lưu lại**, và không trộn hai cách nhập trong một lần lưu.

⚠️ Khi hai lưới cùng có giá cho một hàng hóa, giá ở tab **đang mở** được giữ.

⚠️ **Một hàng hóa chỉ có một giá trong một bảng giá.** Hai ô cùng khớp một hàng hóa thì chỉ giữ một.

⚠️ **Sửa = ghi lại toàn bộ.** Dòng giá đã xoá khỏi cửa sổ sẽ mất sau khi **Lưu lại**.

⚠️ Ô viền cam là ô **chưa khớp được hàng hóa** (khổ, độ dày hoặc tiêu chuẩn chưa có trong danh mục): để nguyên thì ô bị bỏ qua khi lưu.

⚠️ cửa sổ chỉ nhập **đơn giá** (chưa gồm thuế); bảng giá chưa có chỗ nhập **đơn giá có thuế**.

⚠️ Bảng giá **Chung** được dùng cho mọi khách chưa có bảng giá riêng; bảng giá riêng có hiệu lực của khách luôn được ưu tiên.

### "Nhóm 1: đã nhập đơn giá nhưng chưa chọn xuất xứ." 

Nguyên nhân: nhóm có ô giá nhưng thiếu khoá khớp hàng hóa. Các câu tương tự: **… chưa chọn tiêu chuẩn.**, **… có cột đã nhập đơn giá nhưng chưa chọn khổ (rộng × dài).**, **… có dòng đã nhập đơn giá nhưng chưa nhập độ dày.**, và với tab **Theo loại ván**: **… chưa chọn mã tiêu chuẩn.**, **… có cột loại ván không khớp danh mục tiêu chuẩn.**
Cách xử lý: bổ sung thông tin còn thiếu của nhóm được nêu rồi **Lưu lại**.

### "Có hàng hoá chưa xác định được đơn vị tính. Vui lòng chọn lại hàng hoá cho dòng đó." 

Nguyên nhân: tab **Theo hàng hóa** có dòng hàng hóa không có đơn vị tính.
Cách xử lý: chọn lại hàng hóa ở dòng đó (hoặc bổ sung đơn vị tính cho hàng hóa ở TL-D).

### "Khổ 1220×2440 đã có trong nhóm này." / "Kích thước phải là số nguyên lớn hơn 0 (mm)." / "Nhập cả chiều rộng và chiều dài." 

Nguyên nhân: khổ nhập trùng cột có sẵn, không phải số nguyên dương, hoặc thiếu một chiều.
Cách xử lý: nhập lại khổ.

## 10. Câu hỏi thường gặp

**Tôi nhập giá nhưng sau khi lưu thiếu mấy dòng?**
Các ô chưa khớp hàng hóa hoặc trùng hàng hóa bị bỏ qua. Xem hộp xác nhận trước khi lưu và ô viền cam.

**Hai tab Theo quy cách và Theo loại ván khác nhau gì?**
Cùng mô tả bảng giá ván trơn nhưng nhóm khác nhau (cột là khổ hoặc cột là loại ván). Chọn cách quen với file báo giá đang có; hai lưới độc lập.

**Làm sao đặt giá riêng cho một khách trên nền bảng giá chung?**
**Sao chép** bảng giá chung, chọn khách ở **KHÁCH HÀNG**, sửa các giá cần khác, **Lưu lại**.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN ĐIỀU CHỈNH GIÁ HÀNG LOẠT TRONG BẢNG GIÁ](/bai-viet/2026-11-07-tl-e02-3-huong-dan-dieu-chinh-gia-hang-loat-trong-bang-gia/) – Điều chỉnh giá hàng loạt; lập phiếu bán hàng (BH-A03) để kiểm tra việc lấy giá.

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH BẢNG GIÁ MUA BÁN](/bai-viet/2026-11-07-tl-e02-0-tong-quan-man-hinh-bang-gia-mua-ban/) – Tổng quan màn hình Bảng giá mua bán
- [HƯỚNG DẪN LẬP BÁO GIÁ NHÀ CUNG CẤP VÀ TẢI FILE BÁO GIÁ CỦA NHÀ CUNG CẤP](/bai-viet/2026-11-07-tl-e02-2-huong-dan-lap-bao-gia-nha-cung-cap-va-tai-file-bao-gia-cua-nha-cung-cap/) – Lập báo giá nhà cung cấp và tải file nhà cung cấp
- [HƯỚNG DẪN ĐIỀU CHỈNH GIÁ HÀNG LOẠT TRONG BẢNG GIÁ](/bai-viet/2026-11-07-tl-e02-3-huong-dan-dieu-chinh-gia-hang-loat-trong-bang-gia/) – Điều chỉnh giá hàng loạt
- TL-D09 – Hàng trơn; TL-C03 – Khách hàng; TL-D01 – Danh mục gia công
- BH-A03 – Phiếu bán hàng; [TỔNG QUAN MÀN HÌNH THỐNG KÊ DOANH SỐ BẢNG GIÁ](/bai-viet/2026-11-07-bh-b11-0-tong-quan-man-hinh-thong-ke-doanh-so-bang-gia/) – Doanh số bảng giá
