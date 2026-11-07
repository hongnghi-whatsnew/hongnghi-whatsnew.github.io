---
title: "HƯỚNG DẪN THÊM, SỬA ĐỊNH MỨC"
date: "2026-11-07"
summary: "cửa sổ THÊM DANH ĐỊNH MỨC / CẬP NHẬT DANH ĐỊNH MỨC tạo hoặc sửa một định mức."
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

cửa sổ **THÊM DANH ĐỊNH MỨC** / **CẬP NHẬT DANH ĐỊNH MỨC** tạo hoặc sửa **một** định mức. cửa sổ gồm phần **thông tin chung** (mã, tên, tên in, gia công, nghiệp vụ) và ba tab chi tiết:

- **ĐỊNH MỨC - NGUYÊN LIỆU**: nguyên liệu tiêu hao, số lượng, đơn giá; chi phí tự tính.
- **ĐỊNH MỨC - NGUỒN LỰC**: chi phí nguồn lực.
- **ĐỊNH MỨC - CHI PHÍ KHÁC**: chi phí khác, kèm cờ **TÍNH CÔNG NỢ** và **TÍNH THEO S.M**.

Ý nghĩa của định mức và nơi dùng: [TỔNG QUAN MÀN HÌNH ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-0-tong-quan-man-hinh-dinh-muc/). Tạo nhanh từ định mức có sẵn: [HƯỚNG DẪN SAO CHÉP ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-2-huong-dan-sao-chep-dinh-muc/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- **Danh mục gia công** (TL-D01) đã có kiểu gia công cần chọn.
- **Nguyên liệu** (TL-D08) đã có và đang **Kích hoạt**, nếu định mức có nguyên liệu tiêu hao.
- **Nguồn nhân lực** và **Nội dung thu chi** (loại chi), nếu định mức có nguồn lực, chi phí khác (sổ tay Thiết lập, phần A).

## 2. Mở chức năng

**Hàng hoá → Định mức → Thêm mới** (hoặc **Sửa** ở cột Thao tác)

## 3. Nhận biết màn hình

Ảnh chụp **Gia Phúc / dev**, ngày **25/10/2026**. Khung  khoanh vùng thông tin/điều kiện; khung  khoanh nút cuối cửa sổ hoặc vùng danh sách. cửa sổ chưa lưu, tab trống và bộ lọc hiện tại được ghi rõ dưới mỗi ảnh; không dùng ảnh này làm bằng chứng đã kiểm thử lưu dữ liệu.

![Hình 1: Biểu mẫu định mức giấy minh họa: 1 kg nguyên liệu cho 1 kg đầu ra, đơn giá tham chiếu và chi phí 1.000, trước lưu.](/posts/2026-11-07-tl-d10-1-huong-dan-them-sua-dinh-muc/ui-20261027-fix-bom-giay-form.png)

Vùng đánh dấu trên ảnh này:

- **1**: Nội dung được đánh dấu: Mã/tên/tên in, gia công và nghiệp vụ Sản xuất giấy
- **2**: Nội dung được đánh dấu: SL1, đơn giá tham chiếu1000 và chi phí1000
- **3**: Nội dung được đánh dấu: Lưu lại; biểu mẫu trước lưu

- **MÃ ĐỊNH MỨC, TÊN ĐỊNH MỨC, TÊN IN**: Ý nghĩa: Mã, tên, tên in; bắt buộc
- **GIA CÔNG**: Ý nghĩa: Kiểu gia công của định mức; bắt buộc
- **GHI CHÚ, NGHIỆP VỤ**: Ý nghĩa: Ghi chú; nghiệp vụ để các màn khác lọc định mức
- **Ba tab chi tiết**: Ý nghĩa: **ĐỊNH MỨC - NGUYÊN LIỆU**, **ĐỊNH MỨC - NGUỒN LỰC**, **ĐỊNH MỨC - CHI PHÍ KHÁC**
- **Bảng nguyên liệu: NGUYÊN LIỆU, ĐVT, SL, ĐƠN GIÁ, CHI PHÍ, GHI CHÚ**: Ý nghĩa: Mỗi dòng một nguyên liệu; dấu cộng ở tiêu đề thêm dòng
- **Dòng TỔNG CỘNG**: Ý nghĩa: Tổng SL, tổng CHI PHÍ

![Hình 2: Tab Nguồn lực còn trống, chưa nhập chi phí](/posts/2026-11-07-tl-d10-1-huong-dan-them-sua-dinh-muc/hinh-02-tab-nguon-luc.png)

![Hình 3: Tab Chi phí khác còn trống, chưa nhập dòng](/posts/2026-11-07-tl-d10-1-huong-dan-them-sua-dinh-muc/hinh-03-tab-chi-phi-khac.png)

- **ĐỊNH MỨC - NGUYÊN LIỆU**: Cột: STT, NGUYÊN LIỆU, ĐVT, SL, ĐƠN GIÁ, CHI PHÍ, GHI CHÚ
- **ĐỊNH MỨC - NGUỒN LỰC**: Cột: STT, NGUỒN LỰC, CHI PHÍ, GHI CHÚ
- **ĐỊNH MỨC - CHI PHÍ KHÁC**: Cột: STT, CHI PHÍ KHÁC, CHI PHÍ, TÍNH CÔNG NỢ, TÍNH THEO S.M, GHI CHÚ

## 4. Trình tự công việc

```text
Thêm mới / Sửa
   ↓
Thông tin chung: MÃ, TÊN, TÊN IN, GIA CÔNG, NGHIỆP VỤ
   ↓
Tab NGUYÊN LIỆU: chọn nguyên liệu → ĐVT, ĐƠN GIÁ tự điền
                 CHI PHÍ = SL x ĐƠN GIÁ
Tab NGUỒN LỰC: chọn nguồn lực + CHI PHÍ
Tab CHI PHÍ KHÁC: chọn nội dung chi + CHI PHÍ + hai cờ
   ↓
Lưu lại → Định mức hiện ở danh sách → chọn được ở GIA CÔNG của Thành phẩm
```

### Bước 1 – Nhập thông tin chung

Nhập **MÃ ĐỊNH MỨC** (viết liền, không khoảng trắng, ít nhất 2 ký tự, không trùng), **TÊN ĐỊNH MỨC** (ít nhất 2 ký tự) và **TÊN IN** (bắt buộc, ví dụ *MELAMINE*). Mã và tên đi vào **mã, tên thành phẩm**, nên đặt theo quy ước công ty (ví dụ `MEL(EL)101S` – *MEL (EL) 101S*). Chọn **GIA CÔNG** trong danh mục gia công.

### Bước 2 – Chọn nghiệp vụ

Chọn **NGHIỆP VỤ** (có thể nhiều): *Sản xuất giấy*, *Sản xuất keo*, *Sản xuất ván tại kho*, *Sản xuất ván ngoài*. **Đây là điều kiện để các cửa sổ khác chọn được định mức**: thành phẩm chỉ thấy định mức có *Sản xuất ván tại kho* hoặc *Sản xuất ván ngoài*; nguyên liệu chỉ thấy định mức có *Sản xuất giấy* hoặc *Sản xuất keo*.

### Bước 3 – Khai báo nguyên liệu tiêu hao

Ở tab **ĐỊNH MỨC - NGUYÊN LIỆU**:

1. Ở ô **NGUYÊN LIỆU** của dòng trống, gõ mã hoặc tên rồi chọn nguyên liệu (chỉ nguyên liệu đang **Kích hoạt**).
2. **ĐVT** hiện theo đơn vị chính của nguyên liệu. **ĐƠN GIÁ** tự điền theo **giá vốn bình quân hiện tại** của nguyên liệu; nếu chưa có giá vốn thì lấy **Đơn giá** (giá nhập) khai báo ở nguyên liệu.
3. Nhập **SL** (số lượng tiêu hao). **CHI PHÍ** tự tính = **SL** x **ĐƠN GIÁ**. Sửa tay **ĐƠN GIÁ** cũng tính lại.
4. Xong một dòng, hệ thống tự thêm dòng trống. Muốn thêm hoặc bỏ dòng dùng dấu cộng ở tiêu đề / dấu trừ cuối dòng.

### Bước 4 – Khai báo nguồn lực và chi phí khác

- Tab **ĐỊNH MỨC - NGUỒN LỰC**: chọn **NGUỒN LỰC** (từ Nguồn nhân lực) và nhập **CHI PHÍ**.
- Tab **ĐỊNH MỨC - CHI PHÍ KHÁC**: chọn **CHI PHÍ KHÁC** (từ Nội dung thu chi loại chi), nhập **CHI PHÍ**, rồi tick:
  - **TÍNH CÔNG NỢ**: khoản được cộng vào **đơn giá gia công**; không tick thì chỉ ghi để tham khảo.
  - **TÍNH THEO S.M**: chi phí được **nhân với giá trị số mặt** (TL-D06) của dòng yêu cầu (hai mặt gấp đôi một mặt).

### Bước 5 – Kiểm tra tổng và Lưu

Xem dòng **TỔNG CỘNG** của từng tab. Bấm **Lưu lại**. Hệ thống **bỏ qua các dòng chưa chọn** nguyên liệu / nguồn lực / chi phí khác; không bắt buộc phải có dòng nào.

### Sửa định mức đã có

- Khi mở **Sửa** hoặc xem, **ĐƠN GIÁ** và **CHI PHÍ** của nguyên liệu hiện theo **giá vốn bình quân mới nhất** (giá đã lưu chỉ dùng khi chưa có giá vốn và giá nhập). Bấm **Lưu lại** là ghi luôn giá hiện ra.
- **Lưu lại ghi đè toàn bộ** ba tab theo nội dung cửa sổ: dòng bạn xoá sẽ mất.
- Đổi nguyên liệu của một dòng thì **ĐVT, ĐƠN GIÁ** của dòng đó lấy lại theo nguyên liệu mới.
- Muốn tạo bản gần giống: [HƯỚNG DẪN SAO CHÉP ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-2-huong-dan-sao-chep-dinh-muc/) (Sao chép).

## 6. Giải thích các thông tin trên màn hình

- **Mã định mức**: Ý nghĩa: Mã dùng ghép mã thành phẩm; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự, không khoảng trắng, không trùng
- **Tên định mức**: Ý nghĩa: Tên dùng ghép tên thành phẩm; Bắt buộc: Có; Lưu ý: Ít nhất 2 ký tự
- **Tên in**: Ý nghĩa: Tên in trên chứng từ; Bắt buộc: Có
- **Gia công**: Ý nghĩa: Kiểu gia công; Bắt buộc: Có; Lưu ý: Chọn từ Danh mục gia công
- **Ghi chú**: Ý nghĩa: Ghi chú tự do; Bắt buộc: Không
- **Nghiệp vụ**: Ý nghĩa: Sản xuất giấy, keo, ván tại kho, ván ngoài; Bắt buộc: Không; Lưu ý: Quyết định định mức có hiện ở cửa sổ khác
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng dùng; Lưu ý: Mặc định tick
- **Nguyên liệu**: Ý nghĩa: Nguyên liệu tiêu hao; Bắt buộc: Theo dòng; Lưu ý: Chỉ nguyên liệu Kích hoạt
- **ĐVT**: Ý nghĩa: Đơn vị chính của nguyên liệu; Bắt buộc: Tự điền; Lưu ý: Không sửa tay
- **SL**: Ý nghĩa: Số lượng tiêu hao; Bắt buộc: Theo dòng; Lưu ý: Tối đa 7 số lẻ
- **Đơn giá**: Ý nghĩa: Giá vốn bình quân, hoặc giá nhập; Bắt buộc: Tự điền; Lưu ý: Sửa tay được
- **Chi phí (nguyên liệu)**: Ý nghĩa: SL x Đơn giá; Bắt buộc: Tự tính; Lưu ý: Không sửa tay
- **Nguồn lực, Chi phí (nguồn lực)**: Ý nghĩa: Nguồn lực và chi phí; Bắt buộc: Theo dòng
- **Chi phí khác, Chi phí**: Ý nghĩa: Nội dung chi và số tiền; Bắt buộc: Theo dòng
- **Tính công nợ**: Ý nghĩa: Cộng vào đơn giá gia công; Bắt buộc: Không; Lưu ý: Mặc định không tick
- **Tính theo S.M**: Ý nghĩa: Nhân với giá trị số mặt; Bắt buộc: Không; Lưu ý: Mặc định không tick

## 7. Kiểm tra sau khi thực hiện

- Định mức hiện ở danh sách **ĐỊNH MỨC**; nếu đã chọn **NGHIỆP VỤ** thì chọn được ở **GIA CÔNG** của Thành phẩm (hướng dẫn của bộ phận phụ trách) hoặc Nguyên liệu ([HƯỚNG DẪN THÊM, SỬA NGUYÊN LIỆU](/bai-viet/2026-11-07-tl-d08-1-huong-dan-them-sua-nguyen-lieu/)).
- Ba tab chi tiết được lưu cùng định mức.

## 8. Những điều cần lưu ý

⚠️ **Không chọn NGHIỆP VỤ thì định mức không hiện ở cửa sổ Thành phẩm / Nguyên liệu.** Phần lớn định mức cũ chưa có nghiệp vụ; định mức mới nên gắn ngay.

⚠️ **Dấu cộng ở chân bảng** của tab **ĐỊNH MỨC - NGUỒN LỰC** và **ĐỊNH MỨC - CHI PHÍ KHÁC** thêm nhầm một dòng vào tab **NGUYÊN LIỆU**. Hãy dùng dấu cộng ở **tiêu đề** bảng.

⚠️ **Lưu lại ghi đè** toàn bộ nguyên liệu, nguồn lực, chi phí khác. Mở **Sửa**, đơn giá nguyên liệu đã đổi theo giá vốn hiện tại; xem kỹ trước khi lưu.

⚠️ Định mức đã gắn thành phẩm, nguyên liệu hoặc phiếu gia công mà bạn sửa nội dung sẽ ảnh hưởng đến các phiếu lập **sau** khi sửa. Cân nhắc **Sao chép** thành định mức mới thay vì sửa.

⚠️ Tiêu đề cửa sổ có chữ **DANH** (THÊM DANH ĐỊNH MỨC); đây là tên thật trên giao diện.

### "Mã đã tồn tại" 

Nguyên nhân: đã có định mức cùng mã (kể cả khác chữ hoa / thường).
Cách xử lý: đặt mã khác. Với **Sao chép**, bắt buộc đổi mã ([HƯỚNG DẪN SAO CHÉP ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-2-huong-dan-sao-chep-dinh-muc/)).

### "Nhập mã định mức" / "Mã định mức quá ngắn" / "Nhập tên định mức" / "Tên định mức quá ngắn" / "Nhập tên in" / "Vui lòng chọn gia công" 

Cách xử lý: nhập, chọn ô còn thiếu, mã và tên ít nhất 2 ký tự.

### "Mã không hợp lệ. Viết liền không dấu và không chứa kí tự đặc biệt." 

Nguyên nhân: mã có khoảng trắng.
Cách xử lý: viết liền, ví dụ `MEL(EL)101S`.

## 10. Câu hỏi thường gặp

**ĐƠN GIÁ trong định mức cứ đổi khi tôi mở lại?**
Đúng. Hệ thống luôn đưa **giá vốn bình quân mới nhất** của nguyên liệu vào cửa sổ; giá nhập chỉ dùng khi nguyên liệu chưa có giá vốn.

**Chi phí nguyên liệu có nằm trong đơn giá gia công không?**
Đơn giá gia công tại kho chỉ cộng **nguồn lực** và **chi phí khác** (dòng có tick **TÍNH CÔNG NỢ**). Nguyên liệu tính riêng theo xuất kho.

## 11. Công việc tiếp theo

**Tiếp theo:** hướng dẫn của bộ phận phụ trách – Hướng dẫn thêm, sửa thành phẩm (chọn định mức vừa tạo ở ô **GIA CÔNG**).

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-0-tong-quan-man-hinh-dinh-muc/) – Tổng quan màn hình Định mức
- [HƯỚNG DẪN SAO CHÉP ĐỊNH MỨC](/bai-viet/2026-11-07-tl-d10-2-huong-dan-sao-chep-dinh-muc/) – Sao chép định mức
- [TỔNG QUAN MÀN HÌNH DANH MỤC GIA CÔNG](/bai-viet/2026-11-07-tl-d01-0-tong-quan-man-hinh-danh-muc-gia-cong/) – Danh mục gia công
- [TỔNG QUAN MÀN HÌNH SỐ MẶT](/bai-viet/2026-11-07-tl-d06-0-tong-quan-man-hinh-so-mat/) – Số mặt (giá trị nhân của TÍNH THEO S.M)
- [TỔNG QUAN MÀN HÌNH NGUYÊN LIỆU](/bai-viet/2026-11-07-tl-d08-0-tong-quan-man-hinh-nguyen-lieu/) – Nguyên liệu
- hướng dẫn của bộ phận phụ trách – Thêm, sửa thành phẩm
