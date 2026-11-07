---
title: "TỔNG QUAN XUẤT VẬT TƯ"
date: "2026-11-07"
summary: "Tra cứu vật tư đã cấp cho lệnh sản xuất theo ngày, kho xuất và đơn vị gia công; theo dõi chứng từ xuất đã lưu để đối chiếu kho và chi phí."
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

Tra cứu vật tư đã cấp cho lệnh sản xuất theo ngày, kho xuất và đơn vị gia công; theo dõi chứng từ xuất đã lưu để đối chiếu kho và chi phí.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có lệnh Chưa nhập/chưa có trạng thái và biên bản cấp nguyên liệu.
- Xác định kho cấp, ngày xuất, các nguyên liệu và lô; kiểm tra tồn đủ xuất tại đúng kho/lô.
- Kiểm tra quan hệ lệnh và kỳ giá thành trước sửa/xóa phiếu đã ghi.
- Mở đúng địa chỉ hệ thống của chi nhánh, dùng tài khoản được cấp cho đơn vị đó.

## 2. Mở chức năng

**Sản xuất giấy → Xuất vật tư**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![PHIẾU XUẤT VẬT TƯ - DANH SÁCH — không có dữ liệu theo ngày đang chọn, chỉ xem.](/posts/2026-11-07-sx-a04-0-tong-quan-xuat-vat-tu/ui-20261026-sx-a04-ds-overview.png)

Danh sách **Xuất vật tư**, chọn khoảng ngày nghiệp vụ rồi mở Xem đúng mã. Các cột dùng để đọc chứng từ đã lưu:

- **STT**: Ý nghĩa và cách dùng: Số thứ tự hiển thị theo trang danh sách.
- **Thao tác**: Ý nghĩa và cách dùng: Các liên kết xử lý từng chứng từ theo quyền; không phải trạng thái của hồ sơ.
- **Ngày xuất vật tư**: Ý nghĩa và cách dùng: Ngày ghi nhận cấp vật tư cho lệnh; dùng chọn khoảng ngày danh sách.
- **Mã phiếu**: Ý nghĩa và cách dùng: Mã riêng của chứng từ đã lưu; không phải mã lệnh nguồn.
- **Từ lệnh**: Ý nghĩa và cách dùng: Mã lệnh sản xuất liên kết với phiếu; mở Xem để đối chiếu chi tiết và kho.
- **Tên kho xuất**: Ý nghĩa và cách dùng: Kho cấp vật tư được ghi trên phiếu xuất; không phải KHO GC.
- **Tên đơn vị**: Ý nghĩa và cách dùng: Đơn vị gia công gắn với lệnh nguồn của phiếu vật tư.
- **Ghi chú**: Ý nghĩa và cách dùng: Nội dung đã lưu tại đầu chứng từ, hỗ trợ nhận diện đợt sản xuất/giao nhận.
- **Người tạo**: Ý nghĩa và cách dùng: Tài khoản/người đã lập bản ghi, không mặc nhiên là người giao hàng.
- **Ngày tạo**: Ý nghĩa và cách dùng: Thời điểm hệ thống tạo bản ghi; khác ngày nghiệp vụ của phiếu.
- **Người sửa**: Ý nghĩa và cách dùng: Người cập nhật bản ghi gần nhất; không phải người duyệt.
- **Ngày sửa**: Ý nghĩa và cách dùng: Thời điểm cập nhật gần nhất, không thay ngày nghiệp vụ.

## 4. Trình tự công việc

```text
Chọn kỳ và mã → mở Xem → đối chiếu liên kết/chỉ tiêu → chọn đúng nghiệp vụ liên quan
```

## 5. Thực hiện trên phần mềm

1. Chọn khoảng **Ngày xuất vật tư**, tìm Mã phiếu và Từ lệnh; kiểm tra Tên kho xuất và đơn vị nhận gia công.
2. Mở Xem để kiểm tra các nguyên liệu dưới từng nhóm thành phẩm, lượng không theo lô và SL LOT đã cấp.
3. Lập đợt cấp vật tư theo [LẬP XUẤT VẬT TƯ](/bai-viet/2026-11-07-sx-a04-1-lap-xuat-vat-tu/) từ lệnh Chưa nhập/chưa có trạng thái. Không nhầm với **In phiếu xuất nguyên liệu** của Lệnh sản xuất: đó là phiếu đề nghị, không phải thao tác lập phiếu xuất vật tư tại màn này.
4. In chứng từ xuất đã lưu theo [IN PHIẾU XUẤT VẬT TƯ](/bai-viet/2026-11-07-sx-a04-2-in-phieu-xuat-vat-tu/). Trước sửa/xóa đối chiếu kho, lô và kỳ giá thành liên quan; phiếu đã đi vào kỳ đã kết chuyển có thể bị chặn xóa.

## 6. Giải thích các thông tin trên màn hình

- **STT**: Ý nghĩa và cách dùng: Số thứ tự hiển thị theo trang danh sách.
- **Thao tác**: Ý nghĩa và cách dùng: Các liên kết xử lý từng chứng từ theo quyền; không phải trạng thái của hồ sơ.
- **Ngày xuất vật tư**: Ý nghĩa và cách dùng: Ngày ghi nhận cấp vật tư cho lệnh; dùng chọn khoảng ngày danh sách.
- **Mã phiếu**: Ý nghĩa và cách dùng: Mã riêng của chứng từ đã lưu; không phải mã lệnh nguồn.
- **Từ lệnh**: Ý nghĩa và cách dùng: Mã lệnh sản xuất liên kết với phiếu; mở Xem để đối chiếu chi tiết và kho.
- **Tên kho xuất**: Ý nghĩa và cách dùng: Kho cấp vật tư được ghi trên phiếu xuất; không phải KHO GC.
- **Tên đơn vị**: Ý nghĩa và cách dùng: Đơn vị gia công gắn với lệnh nguồn của phiếu vật tư.
- **Ghi chú**: Ý nghĩa và cách dùng: Nội dung đã lưu tại đầu chứng từ, hỗ trợ nhận diện đợt sản xuất/giao nhận.
- **Người tạo**: Ý nghĩa và cách dùng: Tài khoản/người đã lập bản ghi, không mặc nhiên là người giao hàng.
- **Ngày tạo**: Ý nghĩa và cách dùng: Thời điểm hệ thống tạo bản ghi; khác ngày nghiệp vụ của phiếu.
- **Người sửa**: Ý nghĩa và cách dùng: Người cập nhật bản ghi gần nhất; không phải người duyệt.
- **Ngày sửa**: Ý nghĩa và cách dùng: Thời điểm cập nhật gần nhất, không thay ngày nghiệp vụ.

## 7. Kiểm tra sau khi thực hiện

Xác định được phiếu vật tư đúng lệnh và kho; mở Xem để kiểm tra lượng/lô trước sửa, xóa hoặc in.

## 8. Những điều cần lưu ý

Xuất vật tư tác động tồn kho cấp; kiểm tra đúng kho và lô. Trước xóa, kiểm tra quan hệ kỳ giá thành đã kết chuyển, không thực hiện xóa dây chuyền để bỏ chặn.

**Kiểm tra lượng sau khi chọn lô:** Khi lập mới từ lệnh, các dòng nguyên liệu được nạp với lượng bằng 0; không tự có lượng cần cấp theo định mức. Sau khi xác nhận CHI TIẾT LÔ, S.LƯỢNG được tính lại từ lượng cơ sở đã nạp, nên có thể mất số không theo lô vừa gõ. Chọn và xác nhận lô trước, sau đó kiểm tra/nhập lại phần không theo lô theo biên bản; nếu mở và xác nhận lô lần nữa thì phải kiểm tra lại.

Ví dụ kiểm tra trên cùng một nguyên liệu và cùng ĐVT: biên bản ghi tổng 10, trong đó 4 theo lô và 6 không theo lô. Trước lưu phải thấy SL LOT = 4 và S.LƯỢNG = 6; nếu S.LƯỢNG về 0 sau chọn lô thì chưa đủ lượng để lưu theo biên bản. Đây là ví dụ đối chiếu số học, chưa phải kết quả thử trên ERP.

**Khi đổi kho:** Mở lại CHI TIẾT LÔ của từng dòng, kiểm tra lô thuộc đúng kho mới và xác nhận lại lượng thực tế. Không mặc định các lô đã chọn ở kho cũ tự được xóa hoặc thay thế. Nếu không đối chiếu được kho/lô, dừng lưu và chuyển người phụ trách kho kiểm tra.

## 9. Vướng mắc thường gặp

- **Không thấy lệnh nguồn**: Ý nghĩa và cách dùng: Cửa sổ chọn lọc lệnh Chưa nhập hoặc chưa có trạng thái; đối chiếu tiến độ và mã lệnh trước cấp vật tư.
- **Thiếu Ngày xuất / Kho xuất**: Ý nghĩa và cách dùng: Chọn ngày cấp và kho cấp thực tế; kiểm tra đơn vị/KHO GC đã nạp từ lệnh.
- **Lượng xuất không đủ tồn**: Ý nghĩa và cách dùng: Đối chiếu hàng, kho, lô và tồn có thể xuất, sửa lượng theo thực tế hoặc xử lý chứng từ nguồn còn thiếu; không chuyển kho tùy ý để bỏ qua kiểm tra.
- **Phiếu đã vào kỳ giá thành đã kết chuyển**: Ý nghĩa và cách dùng: Khi bị chặn xóa, ghi lại kỳ trong thông báo và chuyển người phụ trách duyệt phương án xử lý kết chuyển/kỳ. Không xóa tiếp các chứng từ liên quan để vượt chặn.

## 10. Câu hỏi thường gặp

**In từ lệnh có thay phiếu xuất vật tư này?** Không. Menu in ở lệnh tạo phiếu đề nghị xuất nguyên liệu; phiếu xuất vật tư có mã riêng và lượng xuất thực ghi nhận.

**Vì sao S.LƯỢNG đổi sau chọn lô?** Hệ thống cộng lượng lô và tính lại phần không theo lô từ lượng cơ sở trừ SL LOT, không để âm. Kiểm tra cả hai cột trước lưu.

## 11. Công việc tiếp theo

In phiếu đã lưu theo [IN PHIẾU XUẤT VẬT TƯ](/bai-viet/2026-11-07-sx-a04-2-in-phieu-xuat-vat-tu/) và chuyển bộ phận kho đối chiếu lượng/lô thực tế.

## 12. Bài hướng dẫn liên quan

- **[LẬP XUẤT VẬT TƯ](/bai-viet/2026-11-07-sx-a04-1-lap-xuat-vat-tu/)** — Lập xuất vật tư.
- **[IN PHIẾU XUẤT VẬT TƯ](/bai-viet/2026-11-07-sx-a04-2-in-phieu-xuat-vat-tu/)** — In phiếu xuất vật tư.
