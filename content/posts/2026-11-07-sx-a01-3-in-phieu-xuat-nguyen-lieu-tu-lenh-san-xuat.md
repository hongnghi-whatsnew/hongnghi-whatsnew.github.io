---
title: "IN PHIẾU XUẤT NGUYÊN LIỆU TỪ LỆNH SẢN XUẤT"
date: "2026-11-07"
summary: "In phiếu đề nghị cấp nguyên liệu của một lệnh giấy/keo đã lưu, dùng đối chiếu hàng, lượng và kho trước giao nhận; không tạo thêm nghiệp vụ xuất kho."
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

In phiếu đề nghị cấp nguyên liệu của một lệnh giấy/keo đã lưu, dùng đối chiếu hàng, lượng và kho trước giao nhận; không tạo thêm nghiệp vụ xuất kho.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có chứng từ **Lệnh sản xuất** đã lưu, kiểm tra được mã, ngày và các dòng hàng/lô.
- Mở đúng hệ thống của chi nhánh bằng tài khoản được cấp; đã xác nhận thông tin công ty, mẫu phiếu đề nghị và máy in cần dùng.
- Có phương án cấp nguyên liệu để đối chiếu từng hàng, ĐVT, lượng, lô và hai kho trên lệnh.

## 2. Mở chức năng

**Sản xuất giấy → Lệnh sản xuất**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![Menu In phiếu xuất nguyên liệu trên danh sách lệnh đã có, chỉ mở xem.](/posts/2026-11-07-sx-a01-3-in-phieu-xuat-nguyen-lieu-tu-lenh-san-xuat/ui-20261026-sx-a01-in-menu-print-menu.png)

![Xem trước PHIẾU ĐỀ NGHỊ XUẤT VẬT TƯ của lệnh SX00113074 — chưa in; số lượng theo metadata đã che.](/posts/2026-11-07-sx-a01-3-in-phieu-xuat-nguyen-lieu-tu-lenh-san-xuat/ui-20261026-sx-a01-in-xem-print-requisition.png)

Cửa sổ **xem trước bản in**, tách khỏi cửa sổ lập chứng từ. Menu ngữ cảnh của dòng mở đúng mã đã chọn; bảng dưới mô tả dữ liệu chỉ đọc cần kiểm tra.

- **Loại bản in**: Ý nghĩa và cách dùng: Menu In phiếu xuất nguyên liệu của lệnh mở bản **PHIẾU ĐỀ NGHỊ XUẤT VẬT TƯ**; không phải lập phiếu xuất vật tư mới.
- **Mã Phiếu / Ngày xuất**: Ý nghĩa và cách dùng: Mã lấy từ mã lệnh đã chọn, ngày in trên phiếu lấy ngày sản xuất của lệnh; không phải ngày thao tác bấm In.
- **Kho Xuất Vật Tư / Kho Sản xuất**: Ý nghĩa và cách dùng: Kho xuất và kho gia công lưu trên lệnh; kiểm tra chiều cấp nguyên liệu trước giao nhận.
- **Thành phẩm / TP - NGUYÊN LIỆU**: Ý nghĩa và cách dùng: Nhóm thành phẩm của lệnh và các nguyên liệu xuất; có thể có dòng từ phần không theo lô, lô đã chọn hoặc định mức.
- **ĐVT / SL / LOT**: Ý nghĩa và cách dùng: Đơn vị, lượng và lô của từng dòng nguyên liệu. Kiểm tra từng lô; không dùng tổng lượng nhiều nguyên liệu thay biên bản chi tiết.
- **CHÚ THÍCH / Lý do xuất**: Ý nghĩa và cách dùng: Chú thích dòng và ghi chú của lệnh được đưa vào mẫu, chỉ đọc tại cửa sổ in.

Ảnh minh họa chờ bổ sung; xem cách dùng máy in tại [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/).

## 4. Trình tự công việc

```text
Chọn đúng dòng đã lưu → menu in tương ứng → kiểm tra xem trước → chọn máy/khổ/số bản → kiểm tra phiếu đề nghị thực tế
```

## 5. Thực hiện trên phần mềm

1. Tìm đúng chứng từ tại **Lệnh sản xuất**, đối chiếu mã, ngày và loại giấy/keo, đơn vị gia công. Mở Xem khi cần đối chiếu chi tiết trước in.
2. Mở menu ngữ cảnh ngay trên dòng dữ liệu (nhấp chuột phải), chọn **In phiếu xuất nguyên liệu**. Lựa chọn gắn với dòng vừa mở menu, không phải toàn bộ các dòng đang lọc.
3. Chờ cửa sổ xem trước nạp đúng bản in. Kiểm tra tiêu đề, mã và ngày của chứng từ; nếu mở nhầm thì đóng, chọn lại đúng dòng.
4. Kiểm tra các thông tin ở phần “Giải thích các thông tin trên màn hình”, đặc biệt chiều kho, từng nguyên liệu, đơn vị tính, số lượng và lô. Nếu dữ liệu hoặc mẫu không khớp, dừng trước in để đối chiếu chứng từ/mẫu đang áp dụng.
5. Dùng nút in của cửa sổ xem trước, chọn máy/khổ giấy và số bản theo nhu cầu; xem cách in chung tại [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/). Đối chiếu số lượng từng dòng với chứng từ, không chỉ nhìn tổng cuối mẫu.
6. Kiểm tra phiếu đề nghị thực nhận từ máy in đúng mã, hàng, lượng, lô và đủ thông tin cần dùng; đóng xem trước bằng **Đóng**. Mở được xem trước chưa có nghĩa máy đã in thành công.

## 6. Giải thích các thông tin trên màn hình

- **Loại bản in**: Ý nghĩa và cách dùng: Menu In phiếu xuất nguyên liệu của lệnh mở bản **PHIẾU ĐỀ NGHỊ XUẤT VẬT TƯ**; không phải lập phiếu xuất vật tư mới.
- **Mã Phiếu / Ngày xuất**: Ý nghĩa và cách dùng: Mã lấy từ mã lệnh đã chọn, ngày in trên phiếu lấy ngày sản xuất của lệnh; không phải ngày thao tác bấm In.
- **Kho Xuất Vật Tư / Kho Sản xuất**: Ý nghĩa và cách dùng: Kho xuất và kho gia công lưu trên lệnh; kiểm tra chiều cấp nguyên liệu trước giao nhận.
- **Thành phẩm / TP - NGUYÊN LIỆU**: Ý nghĩa và cách dùng: Nhóm thành phẩm của lệnh và các nguyên liệu xuất; có thể có dòng từ phần không theo lô, lô đã chọn hoặc định mức.
- **ĐVT / SL / LOT**: Ý nghĩa và cách dùng: Đơn vị, lượng và lô của từng dòng nguyên liệu. Kiểm tra từng lô; không dùng tổng lượng nhiều nguyên liệu thay biên bản chi tiết.
- **CHÚ THÍCH / Lý do xuất**: Ý nghĩa và cách dùng: Chú thích dòng và ghi chú của lệnh được đưa vào mẫu, chỉ đọc tại cửa sổ in.

## 7. Kiểm tra sau khi thực hiện

Có phiếu đề nghị xuất vật tư in ra đúng lệnh và dữ liệu đã đối chiếu. Mở bản in không tạo phiếu nhập/xuất mới và không thay lượng hay giá trị đã lưu; đóng xem trước không phải thao tác ghi chứng từ.

## 8. Những điều cần lưu ý

Bản in từ lệnh mang tiêu đề PHIẾU ĐỀ NGHỊ XUẤT VẬT TƯ; không dùng thay chứng từ xuất vật tư thực ghi nhận.

Sau khi lệnh được cập nhật và lưu, đóng bản xem trước cũ rồi mở lại từ đúng dòng lệnh để nạp lại dữ liệu. Đối chiếu ngày sản xuất trên lệnh với ngày in trên phiếu; ngày bấm In không thay ngày nghiệp vụ.

## 9. Vướng mắc thường gặp

- **Mở nhầm lệnh**: Ý nghĩa và cách dùng: Đóng xem trước, tìm đúng mã lệnh và chọn lại In phiếu xuất nguyên liệu tại chính dòng đó.
- **Không tải được dữ liệu/mẫu**: Ý nghĩa và cách dùng: Ghi lại mã phiếu, tên lựa chọn in và thông báo; mở Xem kiểm tra chứng từ còn truy cập được, chuyển người hỗ trợ nếu mẫu không tải. Không lập lại chứng từ để xử lý lỗi in.
- **Nội dung phiếu đề nghị không đúng**: Ý nghĩa và cách dùng: So mã lệnh, từng nguyên liệu, ĐVT, lượng/lô, hai kho và thông tin công ty với lệnh đã lưu. Nếu thông tin trên chứng từ đúng nhưng mẫu sai, chuyển người phụ trách mẫu; không sửa số liệu đã ghi chỉ để sửa bản in.
- **Xem trước có dữ liệu nhưng không có bản giấy**: Ý nghĩa và cách dùng: Kiểm tra đúng máy, khổ giấy và hàng đợi in; in lại từ cùng chứng từ sau xác định nguyên nhân, không tạo phiếu mới.

Lỗi chung về in: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/), [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**In lại có tạo thêm lượng nhập/xuất?** Không. Lựa chọn in đọc chứng từ đã lưu; không lập thêm một phiếu để lấy bản in mới.

**Menu in trên lệnh có phải phiếu xuất vật tư đã ghi?** Menu này in phiếu đề nghị theo lệnh. Muốn kiểm tra chứng từ cấp thực tế, xem Xuất vật tư SX-A04.

## 11. Công việc tiếp theo

Chuyển phiếu đề nghị cho người phụ trách cấp nguyên liệu kiểm tra theo quy trình. Đối chiếu chứng từ cấp thực tế tại [TỔNG QUAN XUẤT VẬT TƯ](/bai-viet/2026-11-07-sx-a04-0-tong-quan-xuat-vat-tu/); không lập thêm phiếu xuất chỉ vì cần in lại đề nghị.

## 12. Bài hướng dẫn liên quan

- **[TỔNG QUAN LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-0-tong-quan-lenh-san-xuat/)** — Tổng quan lệnh sản xuất.
- **[LẬP LỆNH SẢN XUẤT GIẤY HOẶC KEO](/bai-viet/2026-11-07-sx-a01-1-lap-lenh-san-xuat-giay-hoac-keo/)** — Lập lệnh sản xuất giấy hoặc keo.
- **[TẤT TOÁN LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-2-tat-toan-lenh-san-xuat/)** — Tất toán lệnh sản xuất.
