---
title: "TỔNG QUAN MÀN HÌNH KẾT NỐI ĐỐI TÁC"
date: "2026-11-07"
summary: "Màn hình Kết nối đối tác khai báo công ty đối tác gia công mà hệ thống này trao đổi chứng từ gia công qua mạng (ví dụ Hồng Nghi và Gia Phúc, mỗi bên một hệ thống riêng)."
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

Màn hình **Kết nối đối tác** khai báo **công ty đối tác gia công** mà hệ thống này trao đổi chứng từ gia công qua mạng (ví dụ Hồng Nghi và Gia Phúc, mỗi bên một hệ thống riêng). Màn hình có hai phần:

- **MÃ ĐỐI TÁC CỦA TÔI**: Nội dung: Mã mà chi nhánh đang truy cập dùng để tự giới thiệu khi gửi dữ liệu sang đối tác (ví dụ `HN`, `GP`)
- **KẾT NỐI GIA CÔNG API - DANH SÁCH ĐỐI TÁC**: Nội dung: Từng đối tác: mã, tên, đơn vị gia công / khách hàng tương ứng, kho mặc định khi nhận dữ liệu

Màn hình này chỉ **khai báo danh mục**, không tự gửi dữ liệu. Chứng từ được gửi khi người dùng lưu **Phiếu yêu cầu gia công** loại **Ngoài (đồng bộ API)** (xem [HƯỚNG DẪN THIẾT LẬP ĐỒNG BỘ GIA CÔNG VỚI ĐỐI TÁC](/bai-viet/2026-11-07-tl-f01-1-huong-dan-thiet-lap-dong-bo-gia-cong-voi-doi-tac/)).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đã có **Đơn vị gia công** (TL-A03) hoặc **Khách hàng** (TL-C03) tương ứng với đối tác, và **Kho hàng** (TL-A09) nếu cần chọn kho mặc định.
- IT đã chuẩn bị đường kết nối kỹ thuật với đối tác (địa chỉ máy chủ và khoá bảo mật chung hai bên). Bài này không hướng dẫn phần kỹ thuật đó.

## 2. Mở chức năng

**Kết nối gia công API → Kết nối đối tác**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Hình 1: KẾT NỐI GIA CÔNG API - DANH SÁCH ĐỐI TÁC — chỉ xem; địa chỉ API đã che.](/posts/2026-11-07-tl-f01-0-tong-quan-man-hinh-ket-noi-doi-tac/ui-20261026-tl-f01-ds-figure-01.png)

- **Ô Mã đối tác của tôi và nút Lưu**: Chức năng: Khai mã của chi nhánh đang truy cập; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Tải lại**: Chức năng: Tải lại danh sách; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Thêm mới**: Chức năng: Mở cửa sổ **THÊM KẾT NỐI ĐỐI TÁC**; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Cột Thao tác**: Chức năng: **Sửa** \; Hướng dẫn: **Xóa**; Thông tin: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Trình chọn cột, Tìm kiếm…**: Chức năng: Ẩn / hiện cột, tìm, lọc; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)

**Các cột trên danh sách:**

- **STT, Thao tác**: Ý nghĩa: Số thứ tự; **Sửa** \; Thông tin: **Xóa** (hiện theo quyền)
- **Mã đối tác**: Ý nghĩa: Mã ngắn của đối tác, không trùng
- **Tên đối tác**: Ý nghĩa: Tên gọi
- **API Base URL**: Ý nghĩa: Địa chỉ gốc máy chủ của đối tác
- **Đơn vị gia công (vendor)**: Ý nghĩa: Có khi đối tác là bên **nhận gia công** của mình
- **Khách hàng**: Ý nghĩa: Có khi đối tác là **khách hàng** gửi gia công cho mình
- **Trạng thái**: Ý nghĩa: **Kích hoạt** hoặc **Ngưng sử dụng**
- **Ghi chú, Người tạo, Ngày tạo**: Ý nghĩa: Ghi chú; hệ thống tự ghi

Danh sách chỉ hiện đối tác của **chi nhánh đang truy cập**. Nhấp đúp một dòng mở cửa sổ **THÔNG TIN KẾT NỐI ĐỐI TÁC** (chỉ xem). Màn hình không có lọc ngày, không có xuất Excel.

## 4. Trình tự công việc

```text
Khai mã của chính mình (MÃ ĐỐI TÁC CỦA TÔI)
      ↓
Thêm mới: khai đối tác (mã, tên, đơn vị gia công hoặc khách hàng, kho mặc định)
      ↓
Mapping hàng hóa (TL-F02) và mapping định mức (TL-F03) khi mã hai bên khác nhau
      ↓
Sản xuất: Phiếu yêu cầu gia công ▸ Ngoài (đồng bộ API) → gửi sang đối tác
```

## 5. Thực hiện trên phần mềm

- **Khai mã của mình**: Cách làm: Nhập vào **Mã đối tác của tôi** → **Lưu**; Bài hướng dẫn: Mục dưới
- **Khai đối tác**: Cách làm: **Thêm mới**; Bài hướng dẫn: Mục dưới, [HƯỚNG DẪN THIẾT LẬP ĐỒNG BỘ GIA CÔNG VỚI ĐỐI TÁC](/bai-viet/2026-11-07-tl-f01-1-huong-dan-thiet-lap-dong-bo-gia-cong-voi-doi-tac/)
- **Đổi thông tin đối tác**: Cách làm: **Sửa**; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Đối tác ngừng kết nối**: Cách làm: **Sửa** → bỏ tick **Kích hoạt**; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **Xoá đối tác**: Cách làm: **Xóa**; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)

### Khai Mã đối tác của tôi

Nhập mã vào ô **Mã đối tác của tôi** (gợi ý `vd: HN hoặc GP`), bấm **Lưu**. Hệ thống báo **Lưu cấu hình thành công**. Mã này lưu **theo chi nhánh đang truy cập**; đối tác dùng mã này để biết dữ liệu gửi từ đâu. Hệ thống gửi đi kèm mã này mỗi lần đồng bộ; chưa khai ở đây thì lấy mã mặc định do IT cài trên máy chủ.

### Khai một đối tác

![Hình 2: THÊM KẾT NỐI ĐỐI TÁC — API BASE URL/API SECRET tự điền đã che; chưa lưu.](/posts/2026-11-07-tl-f01-0-tong-quan-man-hinh-ket-noi-doi-tac/ui-20261026-tl-f01-form-figure-02.png)

- **MÃ ĐỐI TÁC, TÊN ĐỐI TÁC**: Ý nghĩa: Mã ngắn và tên (bắt buộc)
- **API BASE URL**: Ý nghĩa: Địa chỉ gốc máy chủ đối tác
- **API SECRET**: Ý nghĩa: Khoá bảo mật chung, ô ẩn ký tự
- **ĐƠN VỊ GIA CÔNG (nếu đối tác là bên nhận gia công của mình)**: Ý nghĩa: Chọn khi mình là bên **đặt** gia công
- **KHÁCH HÀNG (nếu đối tác là khách hàng gửi gia công cho mình)**: Ý nghĩa: Chọn khi mình là bên **nhận** gia công
- **KHO NHẬN GỬI, KHO XUẤT**: Ý nghĩa: Kho mặc định khi nhận dữ liệu
- **Kích hoạt (chân cửa sổ)**: Ý nghĩa: Tick = đang dùng

## 6. Giải thích các thông tin trên màn hình

- **Mã đối tác**: Ý nghĩa: Định danh đối tác; Bắt buộc: Có; Lưu ý: Viết liền, không khoảng trắng, **không trùng** đối tác khác; **phải trùng** mã mà IT khai ở đường kết nối kỹ thuật
- **Tên đối tác**: Ý nghĩa: Tên hiển thị; Bắt buộc: Có
- **API Base URL**: Ý nghĩa: Địa chỉ gốc; Bắt buộc: Có; Lưu ý: Chỉ nhập địa chỉ gốc, **không** thêm `/api` ở cuối
- **API Secret**: Ý nghĩa: Khoá bảo mật chung hai bên; Bắt buộc: Không; Lưu ý: **Hai bên phải cùng giá trị.** Khi sửa, để trống = giữ khoá cũ; hệ thống không hiển thị lại khoá đã lưu
- **Đơn vị gia công**: Ý nghĩa: Đối tác là bên nhận gia công; Bắt buộc: Không; Lưu ý: Bên **đặt** gia công bắt buộc khai để hệ thống biết gửi phiếu cho ai
- **Khách hàng**: Ý nghĩa: Đối tác là khách hàng; Bắt buộc: Không; Lưu ý: Bên **nhận** gia công khai
- **Kho nhận gửi, Kho xuất**: Ý nghĩa: Kho mặc định; Bắt buộc: Không; Lưu ý: Dùng khi tạo phiếu từ dữ liệu nhận về
- **Kích hoạt**: Ý nghĩa: Đang dùng / ngưng

## 7. Kiểm tra sau khi thực hiện

- Đối tác hiện trong danh sách; chọn được ở cửa sổ **Mapping hàng hóa gia công** và **Mapping định mức gia công**.
- Hệ thống nhận ra dữ liệu đến từ đối tác này (theo mã đối tác) và biết gửi phiếu yêu cầu gia công cho đối tác nào (theo đơn vị gia công).

## 8. Những điều cần lưu ý

⚠️ **Khai báo ở đây không tự sang đối tác.** Mỗi bên (Hồng Nghi, Gia Phúc) phải tự khai đối tác của mình trên hệ thống của mình, với cùng khoá bảo mật.

⚠️ Mã đối tác phải **trùng đúng** với mã mà IT khai ở đường kết nối kỹ thuật. Đặt lệch mã thì đối tác bị từ chối ("Chưa cấu hình kết nối cho đối tác …").

⚠️ Đối tác **chỉ có API Base URL, không có Đơn vị gia công** ở bên đặt gia công: phiếu yêu cầu không biết gửi cho ai nên không được gửi.

⚠️ Không ghi khoá bảo mật vào ghi chú, email, tài liệu.

### "Mã đối tác đã tồn tại" 

Nguyên nhân: đã có đối tác cùng mã (mã đối tác duy nhất trên toàn hệ thống).
Cách xử lý: dùng mã khác hoặc sửa đối tác cũ.

### "Nhập mã đối tác (vd: GP)" / "Nhập tên đối tác" / "Nhập base URL của phần mềm đối tác" 

Nguyên nhân: để trống trường bắt buộc.
Cách xử lý: nhập đủ rồi **Lưu lại**.

### "Mã không hợp lệ. Viết liền không dấu và không chứa kí tự đặc biệt." 

Nguyên nhân: mã có khoảng trắng.
Cách xử lý: viết liền, ví dụ `GP`.

## 10. Câu hỏi thường gặp

**Đồng bộ này một chiều hay hai chiều?**
**Hai chiều theo từng chứng từ**, không phải đồng bộ danh mục: bên đặt gửi phiếu yêu cầu gia công sang bên nhận; bên nhận gửi ngược thông báo hoàn thành nhập thành phẩm; hai bên báo nhau khi xoá phiếu. Cấu hình ở màn này không tự chép sang bên kia (chi tiết [HƯỚNG DẪN THIẾT LẬP ĐỒNG BỘ GIA CÔNG VỚI ĐỐI TÁC](/bai-viet/2026-11-07-tl-f01-1-huong-dan-thiet-lap-dong-bo-gia-cong-voi-doi-tac/)).

**Sửa đối tác mà không muốn đổi khoá bảo mật?**
Để trống ô **API SECRET** khi sửa.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN THIẾT LẬP ĐỒNG BỘ GIA CÔNG VỚI ĐỐI TÁC](/bai-viet/2026-11-07-tl-f01-1-huong-dan-thiet-lap-dong-bo-gia-cong-voi-doi-tac/) – Thiết lập đồng bộ gia công với đối tác; [TỔNG QUAN MÀN HÌNH MAPPING HÀNG HÓA GIA CÔNG](/bai-viet/2026-11-07-tl-f02-0-tong-quan-man-hinh-mapping-hang-hoa-gia-cong/) – Mapping hàng hóa gia công.

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN THIẾT LẬP ĐỒNG BỘ GIA CÔNG VỚI ĐỐI TÁC](/bai-viet/2026-11-07-tl-f01-1-huong-dan-thiet-lap-dong-bo-gia-cong-voi-doi-tac/) – Thiết lập đồng bộ gia công với đối tác
- [TỔNG QUAN MÀN HÌNH MAPPING HÀNG HÓA GIA CÔNG](/bai-viet/2026-11-07-tl-f02-0-tong-quan-man-hinh-mapping-hang-hoa-gia-cong/) – Mapping hàng hóa gia công; [TỔNG QUAN MAPPING ĐỊNH MỨC GIA CÔNG](/bai-viet/2026-11-07-tl-f03-0-tong-quan-mapping-dinh-muc-gia-cong/) – Mapping định mức gia công
- TL-A03 – Đơn vị gia công; TL-C03 – Khách hàng; TL-A09 – Kho hàng
- Sổ tay Sản xuất – Phiếu yêu cầu gia công; Phiếu nhập kho gia công
