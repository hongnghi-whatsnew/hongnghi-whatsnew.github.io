---
title: "TỔNG QUAN PHIẾU XUẤT HAO HỤT"
date: "2026-11-07"
summary: "Tra cứu phiếu xuất hao hụt và tổng giá trị hao hụt theo biên bản; kiểm tra lượng giảm tồn và phần giá trị còn thu hồi trên từng nguyên liệu."
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

Tra cứu phiếu xuất hao hụt và tổng giá trị hao hụt theo biên bản; kiểm tra lượng giảm tồn và phần giá trị còn thu hồi trên từng nguyên liệu.

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

![PHIẾU XUẤT HAO HỤT — danh sách hiện không có dữ liệu, chỉ xem.](/posts/2026-11-07-sx-a05-0-tong-quan-phieu-xuat-hao-hut/ui-20261026-sx-a05-ds-overview.png)

Danh sách **Phiếu xuất hao hụt**, chọn khoảng ngày nghiệp vụ rồi mở Xem đúng mã. Các cột dùng để đọc chứng từ đã lưu:

- **Ngày xuất**: Ý nghĩa và cách dùng: Ngày xuất hao hụt, xem chi tiết để kiểm tra cả giờ phát sinh.
- **Mã phiếu**: Ý nghĩa và cách dùng: Mã riêng của chứng từ đã lưu; không phải mã lệnh nguồn.
- **Lý do**: Ý nghĩa và cách dùng: Căn cứ ghi nhận hao hụt đã nhập ở đầu phiếu.
- **Tổng giá trị hao hụt**: Ý nghĩa và cách dùng: Tổng tiền hao hụt sau trừ giá trị còn lại của các dòng; không phải tổng số lượng mất.
- **Người tạo**: Ý nghĩa và cách dùng: Tài khoản/người đã lập bản ghi, không mặc nhiên là người giao hàng.
- **Ghi chú**: Ý nghĩa và cách dùng: Nội dung đã lưu tại đầu chứng từ, hỗ trợ nhận diện đợt sản xuất/giao nhận.
- **Chức năng**: Ý nghĩa và cách dùng: Sửa/Xóa cho đúng dòng phiếu, hiển thị theo quyền.

## 4. Trình tự công việc

```text
Chọn kỳ và mã → mở Xem → đối chiếu liên kết/chỉ tiêu → chọn đúng nghiệp vụ liên quan
```

## 5. Thực hiện trên phần mềm

1. Chọn khoảng **Ngày xuất**, tìm Mã phiếu hao hụt rồi đối chiếu Lý do, Người tạo và Tổng giá trị hao hụt.
2. Nhấp đúp mở Xem, kiểm tra Kho xuất và từng nguyên liệu: lượng, giá vốn, % giá trị còn lại và số tiền hao hụt.
3. Đối chiếu biên bản hao hụt và tồn kho; lượng xuất giảm toàn bộ theo phiếu, không chỉ phần tương ứng % mất giá trị.
4. Khi phát sinh biên bản mới, lập phiếu theo [LẬP PHIẾU XUẤT HAO HỤT](/bai-viet/2026-11-07-sx-a05-1-lap-phieu-xuat-hao-hut/). Sửa/xóa phiếu đã có cần đối chiếu ảnh hưởng tồn và chi phí trước thực hiện; không tạo thêm một phiếu xuất cho cùng lượng đã ghi hao hụt.

## 6. Giải thích các thông tin trên màn hình

- **Ngày xuất**: Ý nghĩa và cách dùng: Ngày xuất hao hụt, xem chi tiết để kiểm tra cả giờ phát sinh.
- **Mã phiếu**: Ý nghĩa và cách dùng: Mã riêng của chứng từ đã lưu; không phải mã lệnh nguồn.
- **Lý do**: Ý nghĩa và cách dùng: Căn cứ ghi nhận hao hụt đã nhập ở đầu phiếu.
- **Tổng giá trị hao hụt**: Ý nghĩa và cách dùng: Tổng tiền hao hụt sau trừ giá trị còn lại của các dòng; không phải tổng số lượng mất.
- **Người tạo**: Ý nghĩa và cách dùng: Tài khoản/người đã lập bản ghi, không mặc nhiên là người giao hàng.
- **Ghi chú**: Ý nghĩa và cách dùng: Nội dung đã lưu tại đầu chứng từ, hỗ trợ nhận diện đợt sản xuất/giao nhận.
- **Chức năng**: Ý nghĩa và cách dùng: Sửa/Xóa cho đúng dòng phiếu, hiển thị theo quyền.

## 7. Kiểm tra sau khi thực hiện

Xác định được phiếu hao hụt và số tiền theo biên bản; mở Xem để đối chiếu lượng xuất, giá vốn và giá trị thu hồi.

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

- **[LẬP PHIẾU XUẤT HAO HỤT](/bai-viet/2026-11-07-sx-a05-1-lap-phieu-xuat-hao-hut/)** — Lập phiếu xuất hao hụt.
