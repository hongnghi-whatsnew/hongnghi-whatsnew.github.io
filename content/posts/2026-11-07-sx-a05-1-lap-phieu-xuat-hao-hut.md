---
title: "LẬP PHIẾU XUẤT HAO HỤT"
date: "2026-11-07"
summary: "Ghi nhận nguyên liệu hao hụt: giảm toàn bộ lượng đã khai tại kho xuất, tính giá trị hao hụt sau trừ giá trị còn thu hồi theo biên bản."
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

Ghi nhận nguyên liệu hao hụt: giảm toàn bộ lượng đã khai tại kho xuất, tính giá trị hao hụt sau trừ giá trị còn thu hồi theo biên bản.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có biên bản hao hụt xác định nguyên liệu, kho, lượng, ngày/giờ và tỷ lệ giá trị có thể thu hồi.
- Có căn cứ giá vốn được phép dùng và đối chiếu lượng tồn; chưa ghi phiếu xuất khác cho cùng lượng hao hụt.
- Kỳ phát sinh còn cho phép ghi nhận; chỉ người được phân quyền thực hiện Cất/Sửa/Xóa.
- Mở đúng địa chỉ hệ thống của chi nhánh, dùng tài khoản được cấp cho đơn vị đó.

## 2. Mở chức năng

**Sản xuất giấy → Phiếu xuất hao hụt**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

Hộp **lập Phiếu xuất hao hụt** gồm:

- **Thông tin đầu phiếu**: Ý nghĩa và cách dùng: Ngày nghiệp vụ, mã tự sinh và các kho/đơn vị liên quan; xem phần “Giải thích các thông tin trên màn hình” để biết ô nhập và ô chỉ đọc.
- **Bảng chi tiết**: Ý nghĩa và cách dùng: Mỗi dòng là một nguyên liệu hao hụt, có số lượng, giá vốn và tỷ lệ giá trị còn lại; không có dòng nhóm thành phẩm trong bảng này.
- **Kết quả cuối bảng**: Ý nghĩa và cách dùng: Thành tiền, giá trị còn lại, giá trị hao hụt và tổng hao hụt.

## 4. Trình tự công việc

```text
Biên bản hao hụt → kho/ngày → nguyên liệu và lượng → giá vốn và tỷ lệ thu hồi → Cất → kiểm tra giảm tồn/giá trị hao hụt
```

## 5. Thực hiện trên phần mềm

1. Chọn Ngày xuất và Kho xuất đúng biên bản hao hụt; ghi Lý do và Ghi chú để truy lại căn cứ. Mã phiếu để hệ thống tạo khi lưu.
2. Thêm dòng Hàng hóa / NVL, chọn đúng nguyên liệu, nhập lượng hao hụt thực tế > 0. Rời ô vừa sửa và kiểm tra giá trị đã hiện trên dòng trước Cất; xóa dòng nháp không sử dụng. Kiểm tra Đơn giá (giá vốn) được gợi ý; nếu bằng 0 hoặc không khớp căn cứ, xác định lại trước ghi nhận.
3. Nhập % còn lại theo phần giá trị có thể thu hồi: 0 là không còn giá trị, 100 là toàn bộ thành tiền còn giá trị. Đối chiếu tỷ lệ trong khoảng 0–100 với biên bản; đây không phải phần số lượng còn tồn.
4. Đọc Thành tiền, Giá trị còn lại, Giá trị hao hụt và Tổng giá trị hao hụt. Kiểm tra từng dòng đã có hàng và lượng dương; dòng thiếu hàng/lượng dương sẽ không được ghi nhận, dù còn hiển thị trên bảng.
5. Bấm **Cất** sau đối chiếu. Mở lại phiếu theo mã tự sinh, kiểm tra số tiền, kho và từng dòng; đối chiếu giảm tồn toàn bộ lượng xuất và số chi phí hao hụt. Không ghi thêm phiếu xuất riêng cho cùng lượng.

## 6. Giải thích các thông tin trên màn hình

- **Mã phiếu**: Ý nghĩa và cách dùng: Chỉ đọc, tự sinh khi lưu; chưa lưu hiện (tự sinh khi lưu). Không nhập số bằng tay.
- **Ngày xuất**: Ý nghĩa và cách dùng: Mặc định thời điểm hiện tại; chọn ngày/giờ phát sinh hao hụt, hiển thị dd/MM/yyyy HH:mm. Có dấu bắt buộc trên giao diện.
- **Kho xuất**: Ý nghĩa và cách dùng: Bắt buộc chọn kho bị giảm tồn; lấy danh sách kho của đơn vị đang làm việc. Lưu bị chặn nếu chưa chọn.
- **Lý do / Ghi chú đầu phiếu**: Ý nghĩa và cách dùng: Nhập căn cứ biên bản hao hụt và nội dung bổ sung; hai ô không có kiểm tra bắt buộc riêng trong luồng Cất.
- **Hàng hóa / NVL**: Ý nghĩa và cách dùng: Chọn nguyên liệu từ danh mục. Chọn hàng gợi ý Đơn giá theo giá vốn hiện hành (dự phòng đơn giá vốn, rồi 0). Không phải ô tạo hàng mới.
- **Số lượng**: Ý nghĩa và cách dùng: Nhập lượng hao hụt thực tế. Chỉ các dòng có hàng và lượng > 0 được ghi nhận; dòng lượng 0/âm hoặc chưa chọn hàng không được lưu.
- **Đơn giá (giá vốn)**: Ý nghĩa và cách dùng: Được gợi ý khi chọn hàng và cho sửa; mặc định dòng mới 0. Phải kiểm tra giá được duyệt trước ghi nhận giảm tồn.
- **% còn lại**: Ý nghĩa và cách dùng: Tỷ lệ giá trị có thể thu hồi, mặc định 0; không phải tỷ lệ lượng còn trong kho. Đối chiếu biên bản trong khoảng 0–100; chưa coi việc nhập ngoài khoảng là được hệ thống chặn.
- **Thành tiền**: Ý nghĩa và cách dùng: Chỉ đọc = làm tròn(Số lượng × Đơn giá).
- **Giá trị còn lại**: Ý nghĩa và cách dùng: Chỉ đọc = làm tròn(Thành tiền × % còn lại / 100).
- **Giá trị hao hụt**: Ý nghĩa và cách dùng: Chỉ đọc = Thành tiền − Giá trị còn lại; Tổng giá trị hao hụt bằng tổng các dòng.
- **Ghi chú dòng**: Ý nghĩa và cách dùng: Giải thích nguyên nhân/hiện trạng riêng của hàng, tách với lý do chung của phiếu.

## 7. Kiểm tra sau khi thực hiện

Có mã phiếu hao hụt, các dòng lượng xuất và số tiền tính lại; toàn bộ lượng xuất làm giảm tồn, giá trị hao hụt bằng thành tiền trừ phần giá trị còn lại.

## 8. Những điều cần lưu ý

% còn lại chỉ là phần giá trị thu hồi: hệ thống vẫn giảm toàn bộ Số lượng trên dòng. Không lập thêm chứng từ xuất cho cùng lượng hao hụt đã ghi.

**Ví dụ đối chiếu giá trị:** Với cùng một nguyên liệu, số lượng 10 và giá vốn 20.000, thành tiền là 200.000. Nhập % còn lại = 25 thì giá trị còn lại là 50.000, giá trị hao hụt là 150.000; lượng xuất vẫn là 10. Nếu % còn lại = 0 thì hao hụt 200.000; nếu = 100 thì hao hụt 0 nhưng vẫn xuất lượng 10. Ví dụ số học này chưa phải kết quả kiểm thử trên ERP.

**Trước Cất:** Đối chiếu từng dòng có hàng, số lượng dương, giá vốn được duyệt và % còn lại trong khoảng 0–100. Xóa các dòng nháp không dùng; tổng đang hiển thị có thể chứa dòng sẽ bị loại khi lưu, nên phải mở lại phiếu để so tổng và số dòng thực ghi nhận. Nếu chưa khớp, dừng đối chiếu, không lập phiếu bổ sung chỉ để bù chênh lệch.

**Đơn vị và lô:** Bảng hao hụt hiện không có cột chọn ĐVT hoặc phân lô. Xác nhận đơn vị ghi lượng theo hồ sơ nguyên liệu trước nhập; nếu biên bản dùng đơn vị khác hoặc cần theo dõi lô cụ thể, chuyển người phụ trách kho xác nhận cách ghi nhận trước Cất, không tự suy có bước chọn lô trên cửa sổ này. Giá trị còn lại trên phiếu dùng để tính hao hụt; không coi con số đó là bằng chứng đã thu tiền hoặc đã nhập kho phế liệu.

## 9. Vướng mắc thường gặp

- **Vui lòng chọn kho xuất**: Ý nghĩa và cách dùng: Chọn đúng kho đang quản lý nguyên liệu hao hụt; đây là kho bị giảm toàn bộ lượng xuất.
- **Vui lòng nhập ít nhất 1 dòng hàng hóa có số lượng**: Ý nghĩa và cách dùng: Chọn hàng và nhập ít nhất một dòng lượng > 0. Kiểm tra các dòng lượng 0/âm vì chúng bị loại trước ghi nhận.
- **Giá vốn gợi ý bằng 0 hoặc không phù hợp**: Ý nghĩa và cách dùng: Đối chiếu giá vốn hiện hành và giá được phép dùng với người phụ trách trước Cất; không sửa kết quả chỉ đọc để làm khớp tổng.
- **Kỳ hao hụt đã khóa sổ**: Ý nghĩa và cách dùng: Kiểm tra ngày/giờ phiếu và kỳ bị khóa, chuyển người phụ trách kế toán xử lý đúng kỳ.

## 10. Câu hỏi thường gặp

**% còn lại có giữ lại một phần lượng trong kho?** Không. Hệ thống xuất toàn bộ số lượng dòng; tỷ lệ chỉ tính phần giá trị có thể thu hồi.

**Vì sao có dòng trên bảng nhưng không thấy sau lưu?** Chỉ dòng đã có hàng và lượng > 0 được ghi nhận. Soát và sửa các dòng thiếu trước Cất.

## 11. Công việc tiếp theo

Đối chiếu biên bản, tồn kho và chi phí hao hụt; lưu căn cứ theo đúng mã phiếu để xử lý sai lệch nếu có.

## 12. Bài hướng dẫn liên quan

- **[TỔNG QUAN PHIẾU XUẤT HAO HỤT](/bai-viet/2026-11-07-sx-a05-0-tong-quan-phieu-xuat-hao-hut/)** — Tổng quan phiếu xuất hao hụt.
