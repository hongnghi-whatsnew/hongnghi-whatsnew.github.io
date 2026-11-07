---
title: "IN PHIẾU NHẬP VẬT TƯ"
date: "2026-11-07"
summary: "In phiếu nhập lại vật tư từ chứng từ đã lưu, đối chiếu mã phiếu, lệnh nguồn, kho và các dòng vật tư/lô trước giao nhận."
module: "Sản xuất"
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

In phiếu nhập lại vật tư từ chứng từ đã lưu, đối chiếu mã phiếu, lệnh nguồn, kho và các dòng vật tư/lô trước giao nhận.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có chứng từ **Nhập vật tư** đã lưu, kiểm tra được mã, ngày và các dòng hàng/lô.
- Mở đúng hệ thống của chi nhánh bằng tài khoản được cấp; đã xác nhận thông tin công ty, mẫu phiếu vật tư và máy in cần dùng.
- Có biên bản giao nhận để đối chiếu từng nguyên liệu, ĐVT, lượng và lô của phiếu vật tư.

## 2. Mở chức năng

**Sản xuất giấy → Nhập vật tư**

## 3. Nhận biết màn hình

Cửa sổ **xem trước bản in**, tách khỏi cửa sổ lập chứng từ. Menu ngữ cảnh của dòng mở đúng mã đã chọn; bảng dưới mô tả dữ liệu chỉ đọc cần kiểm tra.

- **Mã Phiếu Nhập / Mã Lệnh SX**: Ý nghĩa và cách dùng: Mã phiếu nhập vật tư và mã lệnh nguồn đã lưu; phải đúng cả hai trước in.
- **Ngày tháng năm**: Ý nghĩa và cách dùng: Ngày nhập vật tư của chứng từ, không phải ngày in hiện tại.
- **Kho Sản xuất / Kho nhập Vật tư**: Ý nghĩa và cách dùng: Đơn vị gia công và kho nhận trên phiếu; kiểm tra nơi giao trả và nơi tiếp nhận.
- **Thành Phẩm / nguyên liệu**: Ý nghĩa và cách dùng: Mẫu nhóm các dòng vật tư theo thành phẩm của lệnh. Đọc các dòng nguyên liệu thực nhận, không nhập dữ liệu tại bản in.
- **SL / lô / ĐVT / chú thích**: Ý nghĩa và cách dùng: Dữ liệu lượng, lô nhập, đơn vị và diễn giải đã lưu; đối chiếu từng dòng với biên bản, không chỉ nhìn dòng Tổng.
- **Người in / thời gian in**: Ý nghĩa và cách dùng: Tên người hiện đang in và thời điểm mở bản in; không thay thông tin người lập phiếu.

Ảnh minh họa chờ bổ sung; xem cách dùng máy in tại [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/).

## 4. Trình tự công việc

```text
Chọn đúng dòng đã lưu → menu in tương ứng → kiểm tra xem trước → chọn máy/khổ/số bản → kiểm tra phiếu thực tế
```

## 5. Thực hiện trên phần mềm

1. Tìm đúng chứng từ tại **Nhập vật tư**, đối chiếu mã, ngày và lệnh nguồn, kho và đơn vị gia công. Mở Xem khi cần đối chiếu chi tiết trước in.
2. Mở menu ngữ cảnh ngay trên dòng dữ liệu (nhấp chuột phải), chọn **In Phiếu Nhập Vật Tư**. Lựa chọn gắn với dòng vừa mở menu, không phải toàn bộ các dòng đang lọc.
3. Chờ cửa sổ xem trước nạp đúng bản in. Kiểm tra tiêu đề, mã và ngày của chứng từ; nếu mở nhầm thì đóng, chọn lại đúng dòng.
4. Kiểm tra các thông tin ở phần “Giải thích các thông tin trên màn hình”, đặc biệt chiều kho, từng nguyên liệu, đơn vị tính, số lượng và lô. Nếu dữ liệu hoặc mẫu không khớp, dừng trước in để đối chiếu chứng từ/mẫu đang áp dụng.
5. Dùng nút in của cửa sổ xem trước, chọn máy/khổ giấy và số bản theo nhu cầu; xem cách in chung tại [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/). Đối chiếu số lượng từng dòng với chứng từ, không chỉ nhìn tổng cuối mẫu.
6. Kiểm tra phiếu thực nhận từ máy in đúng mã, hàng, lượng, lô và đủ thông tin cần dùng; đóng xem trước bằng **Đóng**. Mở được xem trước chưa có nghĩa máy đã in thành công.

## 6. Giải thích các thông tin trên màn hình

- **Mã Phiếu Nhập / Mã Lệnh SX**: Ý nghĩa và cách dùng: Mã phiếu nhập vật tư và mã lệnh nguồn đã lưu; phải đúng cả hai trước in.
- **Ngày tháng năm**: Ý nghĩa và cách dùng: Ngày nhập vật tư của chứng từ, không phải ngày in hiện tại.
- **Kho Sản xuất / Kho nhập Vật tư**: Ý nghĩa và cách dùng: Đơn vị gia công và kho nhận trên phiếu; kiểm tra nơi giao trả và nơi tiếp nhận.
- **Thành Phẩm / nguyên liệu**: Ý nghĩa và cách dùng: Mẫu nhóm các dòng vật tư theo thành phẩm của lệnh. Đọc các dòng nguyên liệu thực nhận, không nhập dữ liệu tại bản in.
- **SL / lô / ĐVT / chú thích**: Ý nghĩa và cách dùng: Dữ liệu lượng, lô nhập, đơn vị và diễn giải đã lưu; đối chiếu từng dòng với biên bản, không chỉ nhìn dòng Tổng.
- **Người in / thời gian in**: Ý nghĩa và cách dùng: Tên người hiện đang in và thời điểm mở bản in; không thay thông tin người lập phiếu.

## 7. Kiểm tra sau khi thực hiện

Có phiếu vật tư in ra đúng chứng từ và dữ liệu đã đối chiếu. Mở bản in không tạo phiếu nhập/xuất mới và không thay lượng hay giá trị đã lưu; đóng xem trước không phải thao tác ghi chứng từ.

## 8. Những điều cần lưu ý

Đối chiếu từng dòng vật tư và lô với phiếu đã lưu; nếu dòng Tổng không khớp biên bản, dừng xác định sai lệch trước giao nhận. Không sửa chứng từ chỉ để khớp tổng trên mẫu in.

## 9. Vướng mắc thường gặp

- **Mở nhầm phiếu**: Ý nghĩa và cách dùng: Đóng xem trước, tìm đúng mã và chọn lại menu tại chính dòng chứng từ vật tư đó.
- **Không tải được dữ liệu/mẫu**: Ý nghĩa và cách dùng: Ghi lại mã phiếu, tên lựa chọn in và thông báo; mở Xem kiểm tra chứng từ còn truy cập được, chuyển người hỗ trợ nếu mẫu không tải. Không lập lại chứng từ để xử lý lỗi in.
- **Nội dung phiếu không đúng**: Ý nghĩa và cách dùng: So từng mã nguyên liệu, ĐVT, lượng/lô, kho và tên công ty với chứng từ đã lưu và biên bản giao nhận. Nếu thông tin trên chứng từ đúng nhưng mẫu sai, chuyển người phụ trách mẫu; không sửa số liệu đã ghi chỉ để sửa bản in.
- **Xem trước có dữ liệu nhưng không có bản giấy**: Ý nghĩa và cách dùng: Kiểm tra đúng máy, khổ giấy và hàng đợi in; in lại từ cùng chứng từ sau xác định nguyên nhân, không tạo phiếu mới.

Lỗi chung về in: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/), [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**In lại có tạo thêm lượng nhập/xuất?** Không. Lựa chọn in đọc chứng từ đã lưu; không lập thêm một phiếu để lấy bản in mới.

**Có dùng riêng dòng Tổng làm căn cứ giao nhận?** Cần kiểm tra từng nguyên liệu, ĐVT và lô. Nếu tổng in khác dữ liệu đã lưu, dừng đối chiếu mẫu và phiếu trước sử dụng.

## 11. Công việc tiếp theo

Chuyển phiếu cho người giao/nhận kiểm tra ký theo quy trình sau khi đối chiếu đúng kho, từng nguyên liệu, ĐVT, lượng và lô. Nếu sai, đối chiếu chứng từ hoặc mẫu đang áp dụng trước in lại.

Sau khi sửa và lưu chứng từ, đóng bản xem trước cũ rồi mở lại từ đúng dòng để nạp lại dữ liệu. Kiểm tra lại ngày chứng từ và thời điểm mở bản in; không dùng bản xem trước đã mở trước lần sửa làm căn cứ giao nhận.

## 12. Bài hướng dẫn liên quan

- **[TỔNG QUAN NHẬP VẬT TƯ](/bai-viet/2026-11-07-sx-a03-0-tong-quan-nhap-vat-tu/)** — Tổng quan nhập vật tư.
- **[LẬP NHẬP VẬT TƯ](/bai-viet/2026-11-07-sx-a03-1-lap-nhap-vat-tu/)** — Lập nhập vật tư.
