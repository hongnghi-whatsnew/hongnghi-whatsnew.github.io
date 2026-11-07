---
title: "IN PHIẾU NHẬP THÀNH PHẨM VÀ TEM KIỆN"
date: "2026-11-07"
summary: "Mở bản in phiếu nhập thành phẩm hoặc tem kiện từ đúng phiếu đã lưu, kiểm tra thông tin nhận hàng/kiện trước in và sử dụng."
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

Mở bản in phiếu nhập thành phẩm hoặc tem kiện từ đúng phiếu đã lưu, kiểm tra thông tin nhận hàng/kiện trước in và sử dụng.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có chứng từ **Nhập thành phẩm** đã lưu, kiểm tra được mã, ngày và các dòng hàng/lô.
- Mở đúng hệ thống của chi nhánh bằng tài khoản được cấp; đã xác nhận thông tin công ty, mẫu phiếu/tem và máy in cần dùng.
- Với tem kiện, đối chiếu đúng kiện, quy cách và lô trước in; với phiếu nhập thành phẩm, có biên bản thực nhận để đối chiếu từng dòng thành phẩm.

## 2. Mở chức năng

**Sản xuất giấy → Nhập thành phẩm**

## 3. Nhận biết màn hình

Cửa sổ **xem trước bản in**, tách khỏi cửa sổ lập chứng từ. Menu ngữ cảnh của dòng mở đúng mã đã chọn; bảng dưới mô tả dữ liệu chỉ đọc cần kiểm tra.

- **In phiếu nhập**: Ý nghĩa và cách dùng: Đầu ra PHIẾU NHẬP THÀNH PHẨM: Mã phiếu, Từ phiếu/lệnh, ngày nhận, đơn vị gia công, kho nhập và ghi chú.
- **SL NHẬP / ĐVT / SỐ LOT**: Ý nghĩa và cách dùng: Trên phiếu nhập là lượng nhận, đơn vị và lô từng thành phẩm đã lưu, kèm chú thích và tổng lượng; đối chiếu cùng phiếu nhận.
- **In tem kiện**: Ý nghĩa và cách dùng: Đầu ra tem cho dữ liệu chi tiết phiếu đã chọn; khác phiếu nhập. Không có bước nhập số lượng bản tem riêng trong cửa sổ đã đối chiếu.
- **hệ thống chính thức Name / hệ thống chính thức Dated**: Ý nghĩa và cách dùng: Tên hàng và ngày nhập thành phẩm đưa lên tem; kiểm tra với kiện cần dán.
- **Lot No / Quantity**: Ý nghĩa và cách dùng: Lô và số lượng lấy theo dòng chi tiết phiếu nhập; nếu lô trống/sai, dừng để đối chiếu dữ liệu lô, không tự viết lại trong bản in.
- **Size / thông tin công ty**: Ý nghĩa và cách dùng: Kiểm tra đúng quy cách, tên công ty, địa chỉ/liên hệ trên tem. Mẫu mặc định có nội dung cố định, không bảo đảm tự đổi theo hàng hoặc đơn vị đang làm việc.
- **Người in / thời gian in**: Ý nghĩa và cách dùng: Phiếu nhập có dữ liệu người và thời điểm thao tác in; khác người/ngày tạo chứng từ. Bản in chỉ đọc.

Ảnh minh họa chờ bổ sung; xem cách dùng máy in tại [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/).

### Menu và bản xem trước trên chứng từ có sẵn

Các ảnh sau được quan sát tại Gia Phúc/dev ngày 27/10/2026 bằng cách mở menu và xem trước trên chứng từ có sẵn. Không lập mới hoặc sửa chứng từ lịch sử, không gửi lệnh in ra máy in. Các ảnh này không chứng minh hoàn thành chuỗi kiểm tra thực tế SX00113353.

![Menu In phiếu nhập và In tem kiện từ phiếu NP00113018.](/posts/2026-11-07-sx-a02-2-in-phieu-nhap-thanh-pham-va-tem-kien/historical-20261027-sx-a02-in-menu-np00113018.png)

- **1**: Nội dung trên ảnh: Dòng phiếu NP00113018 từ lệnh SX00113017.
- **2**: Nội dung trên ảnh: Menu In phiếu nhập / In tem kiện.

![Xem trước Phiếu nhập thành phẩm NP00113018 từ lệnh SX00113017.](/posts/2026-11-07-sx-a02-2-in-phieu-nhap-thanh-pham-va-tem-kien/historical-20261027-sx-a02-in-phieu-np00113018.png)

- **1**: Nội dung trên ảnh: Ngày, kho, mã phiếu và lệnh nguồn trên bản xem trước.
- **2**: Nội dung trên ảnh: Dòng thành phẩm, số lượng nhập và cột SỐ LOT trống.

![Xem trước tem kiện mở từ NP00113018; trường Lot No đang trống.](/posts/2026-11-07-sx-a02-2-in-phieu-nhap-thanh-pham-va-tem-kien/historical-20261027-sx-a02-in-tem-np00113018.png)

- **1**: Nội dung trên ảnh: Các trường trên tem: tên, ngày, Lot No, Quantity và Size.
- **2**: Nội dung trên ảnh: Nội dung marketing có sẵn trong mẫu cần rà soát trước dùng.

## 4. Trình tự công việc

```text
Chọn đúng dòng đã lưu → menu in tương ứng → kiểm tra xem trước → chọn máy/khổ/số bản → kiểm tra phiếu hoặc tem thực tế
```

## 5. Thực hiện trên phần mềm

1. Tìm đúng chứng từ tại **Nhập thành phẩm**, đối chiếu mã, ngày và loại giấy/keo, đơn vị gia công. Mở Xem khi cần đối chiếu chi tiết trước in.
2. Mở menu ngữ cảnh ngay trên dòng dữ liệu (nhấp chuột phải), chọn **In phiếu nhập hoặc In tem kiện**. Lựa chọn gắn với dòng vừa mở menu, không phải toàn bộ các dòng đang lọc.
3. Nếu cần giấy giao nhận thì chọn In phiếu nhập; nếu cần nhãn dán thì chọn In tem kiện. Kiểm tra đúng đầu ra trước thao tác máy in.
4. Kiểm tra các thông tin ở phần “Giải thích các thông tin trên màn hình”, đặc biệt tên hàng, ngày, lô, lượng, Size và thông tin công ty trên từng tem; mẫu mặc định có nội dung cố định cần người phụ trách xác nhận. Nếu dữ liệu hoặc mẫu không khớp, dừng trước in để đối chiếu chứng từ/mẫu đang áp dụng.
5. Dùng nút in của cửa sổ xem trước, chọn máy/khổ giấy và số bản theo nhu cầu; xem cách in chung tại [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/). Đối chiếu số lượng từng dòng với chứng từ, không chỉ nhìn tổng cuối mẫu.
6. Kiểm tra giấy/tem thực nhận từ máy in đúng mã, hàng, lượng, lô và đủ thông tin cần dùng; đóng xem trước bằng **Đóng**. Mở được xem trước chưa có nghĩa máy đã in thành công.

## 6. Giải thích các thông tin trên màn hình

- **In phiếu nhập**: Ý nghĩa và cách dùng: Đầu ra PHIẾU NHẬP THÀNH PHẨM: Mã phiếu, Từ phiếu/lệnh, ngày nhận, đơn vị gia công, kho nhập và ghi chú.
- **SL NHẬP / ĐVT / SỐ LOT**: Ý nghĩa và cách dùng: Trên phiếu nhập là lượng nhận, đơn vị và lô từng thành phẩm đã lưu, kèm chú thích và tổng lượng; đối chiếu cùng phiếu nhận.
- **In tem kiện**: Ý nghĩa và cách dùng: Đầu ra tem cho dữ liệu chi tiết phiếu đã chọn; khác phiếu nhập. Không có bước nhập số lượng bản tem riêng trong cửa sổ đã đối chiếu.
- **hệ thống chính thức Name / hệ thống chính thức Dated**: Ý nghĩa và cách dùng: Tên hàng và ngày nhập thành phẩm đưa lên tem; kiểm tra với kiện cần dán.
- **Lot No / Quantity**: Ý nghĩa và cách dùng: Lô và số lượng lấy theo dòng chi tiết phiếu nhập; nếu lô trống/sai, dừng để đối chiếu dữ liệu lô, không tự viết lại trong bản in.
- **Size / thông tin công ty**: Ý nghĩa và cách dùng: Kiểm tra đúng quy cách, tên công ty, địa chỉ/liên hệ trên tem. Mẫu mặc định có nội dung cố định, không bảo đảm tự đổi theo hàng hoặc đơn vị đang làm việc.
- **Người in / thời gian in**: Ý nghĩa và cách dùng: Phiếu nhập có dữ liệu người và thời điểm thao tác in; khác người/ngày tạo chứng từ. Bản in chỉ đọc.

## 7. Kiểm tra sau khi thực hiện

Có phiếu/tem in ra đúng chứng từ và dữ liệu đã đối chiếu. Mở bản in không tạo phiếu nhập/xuất mới và không thay lượng hay giá trị đã lưu; đóng xem trước không phải thao tác ghi chứng từ.

## 8. Những điều cần lưu ý

Phiếu nhập và tem kiện dùng hai mẫu khác nhau. Kiểm tra thông tin công ty, Size và lô trên tem trước dán; không mặc định nội dung tem sẽ tự đổi đúng theo mọi mặt hàng.

Sau khi chứng từ được sửa và lưu, đóng bản xem trước cũ và mở lại đúng **In phiếu nhập** hoặc **In tem kiện** từ chính dòng phiếu đó. Đối chiếu lại mã phiếu, lệnh nguồn, hàng, lượng và thông tin lô; ngày nhận là ngày của chứng từ, thời điểm mở bản in không thay ngày nhận. Không sửa số liệu nghiệp vụ để làm khớp chữ cố định trên mẫu tem.

Nếu Lot No trống hoặc Size/thông tin công ty chưa được xác nhận, dừng in tem để sử dụng thực tế và chuyển người phụ trách kiểm tra dữ liệu/mẫu. Bản xem trước lịch sử có trong bài chỉ minh họa trạng thái đã quan sát, chưa chứng minh tem đủ điều kiện dán lên kiện.

## 9. Vướng mắc thường gặp

- **Mở nhầm phiếu/tem**: Ý nghĩa và cách dùng: Đóng xem trước, tìm đúng mã và chọn lại menu tại chính dòng đó. Với Nhập thành phẩm phân biệt In phiếu nhập và In tem kiện.
- **Không tải được dữ liệu/mẫu**: Ý nghĩa và cách dùng: Ghi lại mã phiếu, tên lựa chọn in và thông báo; mở Xem kiểm tra chứng từ còn truy cập được, chuyển người hỗ trợ nếu mẫu không tải. Không lập lại chứng từ để xử lý lỗi in.
- **Nội dung tem hoặc phiếu không đúng**: Ý nghĩa và cách dùng: So từng mã hàng, lượng/lô, kho, tên công ty và quy cách với chứng từ/kiện. Nếu thông tin trên chứng từ đúng nhưng mẫu sai, chuyển người phụ trách mẫu; không sửa số liệu đã ghi chỉ để sửa bản in.
- **Xem trước có dữ liệu nhưng không có bản giấy**: Ý nghĩa và cách dùng: Kiểm tra đúng máy, khổ giấy và hàng đợi in; in lại từ cùng chứng từ sau xác định nguyên nhân, không tạo phiếu mới.

Lỗi chung về in: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/), [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**In lại có tạo thêm lượng nhập/xuất?** Không. Lựa chọn in đọc chứng từ đã lưu; không lập thêm một phiếu để lấy bản in mới.

**Vì sao tem có Size hoặc thông tin công ty không khớp?** Mẫu mặc định có phần nội dung cố định; người phụ trách phải xác nhận mẫu đúng trước sử dụng, không suy từ dữ liệu phiếu rằng mọi chữ trên tem đều thay theo hàng.

## 11. Công việc tiếp theo

Chuyển phiếu cho người giao/nhận kiểm tra ký theo quy trình; tem chỉ dùng dán kiện sau đối chiếu đúng hàng, lô, lượng và quy cách. Nếu sai, đối chiếu chứng từ hoặc mẫu đang áp dụng trước in lại.

## 12. Bài hướng dẫn liên quan

- **[TỔNG QUAN NHẬP THÀNH PHẨM](/bai-viet/2026-11-07-sx-a02-0-tong-quan-nhap-thanh-pham/)** — Tổng quan nhập thành phẩm.
- **[LẬP NHẬP THÀNH PHẨM](/bai-viet/2026-11-07-sx-a02-1-lap-nhap-thanh-pham/)** — Lập nhập thành phẩm.
