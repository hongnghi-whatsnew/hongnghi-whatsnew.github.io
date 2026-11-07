---
title: "IN PHIẾU XUẤT VẬT TƯ"
date: "2026-11-07"
summary: "In phiếu xuất cấp vật tư từ chứng từ đã lưu, đối chiếu mã phiếu, lệnh nguồn, kho và các dòng vật tư/lô trước giao nhận."
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

In phiếu xuất cấp vật tư từ chứng từ đã lưu, đối chiếu mã phiếu, lệnh nguồn, kho và các dòng vật tư/lô trước giao nhận.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có chứng từ **Xuất vật tư** đã lưu, kiểm tra được mã, ngày và các dòng hàng/lô.
- Mở đúng hệ thống của chi nhánh bằng tài khoản được cấp; đã xác nhận thông tin công ty, mẫu phiếu vật tư và máy in cần dùng.
- Có biên bản giao nhận để đối chiếu từng nguyên liệu, ĐVT, lượng và lô của phiếu vật tư.

## 2. Mở chức năng

**Sản xuất giấy → Xuất vật tư**

## 3. Nhận biết màn hình

Cửa sổ **xem trước bản in**, tách khỏi cửa sổ lập chứng từ. Menu ngữ cảnh của dòng mở đúng mã đã chọn; bảng dưới mô tả dữ liệu chỉ đọc cần kiểm tra.

- **Mã Phiếu xuất / Mã Lệnh SX**: Ý nghĩa và cách dùng: Mã phiếu xuất vật tư và mã lệnh nguồn; không nhầm mã lệnh với mã phiếu xuất.
- **Ngày xuất**: Ý nghĩa và cách dùng: Ngày xuất vật tư đã lưu trên chứng từ; khác thời điểm thao tác In.
- **Kho Xuất Vật Tư / Kho Sản xuất**: Ý nghĩa và cách dùng: Kho cấp và đơn vị gia công nhận vật tư trên phiếu; kiểm tra theo biên bản cấp phát.
- **Thành Phẩm / nguyên liệu**: Ý nghĩa và cách dùng: Các vật tư được nhóm theo thành phẩm của lệnh; mở Xem chứng từ nếu cần đối chiếu dữ liệu gốc.
- **SL / LOT / ĐVT**: Ý nghĩa và cách dùng: SL dòng in gồm lượng không theo lô và lượng theo lô; LOT là các lô xuất đã lưu. Đối chiếu riêng từng dòng vì dòng Tổng của mẫu có thể không gồm đủ phần theo lô.
- **Ghi chú / người in / thời gian in**: Ý nghĩa và cách dùng: Ghi chú phiếu, chú thích vật tư và người/thời điểm in đưa vào bản in; các thông tin chỉ đọc.

Ảnh minh họa chờ bổ sung; xem cách dùng máy in tại [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/).

### Menu và bản xem trước trên chứng từ có sẵn

Các ảnh sau được quan sát tại Gia Phúc/dev ngày 27/10/2026 bằng cách mở menu và xem trước trên chứng từ có sẵn. Không lập mới hoặc sửa chứng từ lịch sử, không gửi lệnh in ra máy in. Các ảnh này không chứng minh hoàn thành chuỗi kiểm tra thực tế SX00113353.

![Menu In Phiếu Xuất Vật Tư của phiếu có sẵn XV00110996.](/posts/2026-11-07-sx-a04-2-in-phieu-xuat-vat-tu/historical-20261027-sx-a04-in-menu-xv00110996.png)

- **1**: Nội dung trên ảnh: Mã XV00110996 và lệnh SX00110995.
- **2**: Nội dung trên ảnh: Menu In Phiếu Xuất Vật Tư.

![Xem trước Phiếu xuất vật tư XV00110996 từ lệnh SX00110995.](/posts/2026-11-07-sx-a04-2-in-phieu-xuat-vat-tu/historical-20261027-sx-a04-in-phieu-xv00110996.png)

- **1**: Nội dung trên ảnh: Mã phiếu xuất và lệnh SX00110995.
- **2**: Nội dung trên ảnh: Bốn dòng vật tư và dòng tổng in hiện tại.

## 4. Trình tự công việc

```text
Chọn đúng dòng đã lưu → menu in tương ứng → kiểm tra xem trước → chọn máy/khổ/số bản → kiểm tra phiếu thực tế
```

## 5. Thực hiện trên phần mềm

1. Tìm đúng chứng từ tại **Xuất vật tư**, đối chiếu mã, ngày và lệnh nguồn, kho và đơn vị gia công. Mở Xem khi cần đối chiếu chi tiết trước in.
2. Mở menu ngữ cảnh ngay trên dòng dữ liệu (nhấp chuột phải), chọn **In Phiếu Xuất Vật Tư**. Lựa chọn gắn với dòng vừa mở menu, không phải toàn bộ các dòng đang lọc.
3. Chờ cửa sổ xem trước nạp đúng bản in. Kiểm tra tiêu đề, mã và ngày của chứng từ; nếu mở nhầm thì đóng, chọn lại đúng dòng.
4. Kiểm tra các thông tin ở phần “Giải thích các thông tin trên màn hình”, đặc biệt chiều kho, từng nguyên liệu, đơn vị tính, số lượng và lô. Nếu dữ liệu hoặc mẫu không khớp, dừng trước in để đối chiếu chứng từ/mẫu đang áp dụng.
5. Dùng nút in của cửa sổ xem trước, chọn máy/khổ giấy và số bản theo nhu cầu; xem cách in chung tại [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/). Đối chiếu dòng Tổng với cả S.LƯỢNG và SL LOT; không dùng riêng tổng in làm căn cứ xuất nếu còn lệch.
6. Kiểm tra phiếu thực nhận từ máy in đúng mã, hàng, lượng, lô và đủ thông tin cần dùng; đóng xem trước bằng **Đóng**. Mở được xem trước chưa có nghĩa máy đã in thành công.

## 6. Giải thích các thông tin trên màn hình

- **Mã Phiếu xuất / Mã Lệnh SX**: Ý nghĩa và cách dùng: Mã phiếu xuất vật tư và mã lệnh nguồn; không nhầm mã lệnh với mã phiếu xuất.
- **Ngày xuất**: Ý nghĩa và cách dùng: Ngày xuất vật tư đã lưu trên chứng từ; khác thời điểm thao tác In.
- **Kho Xuất Vật Tư / Kho Sản xuất**: Ý nghĩa và cách dùng: Kho cấp và đơn vị gia công nhận vật tư trên phiếu; kiểm tra theo biên bản cấp phát.
- **Thành Phẩm / nguyên liệu**: Ý nghĩa và cách dùng: Các vật tư được nhóm theo thành phẩm của lệnh; mở Xem chứng từ nếu cần đối chiếu dữ liệu gốc.
- **SL / LOT / ĐVT**: Ý nghĩa và cách dùng: SL dòng in gồm lượng không theo lô và lượng theo lô; LOT là các lô xuất đã lưu. Đối chiếu riêng từng dòng vì dòng Tổng của mẫu có thể không gồm đủ phần theo lô.
- **Ghi chú / người in / thời gian in**: Ý nghĩa và cách dùng: Ghi chú phiếu, chú thích vật tư và người/thời điểm in đưa vào bản in; các thông tin chỉ đọc.

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

- **[TỔNG QUAN XUẤT VẬT TƯ](/bai-viet/2026-11-07-sx-a04-0-tong-quan-xuat-vat-tu/)** — Tổng quan xuất vật tư.
- **[LẬP XUẤT VẬT TƯ](/bai-viet/2026-11-07-sx-a04-1-lap-xuat-vat-tu/)** — Lập xuất vật tư.
