---
title: "TỔNG QUAN NHẬP VẬT TƯ"
date: "2026-11-07"
summary: "Tra cứu vật tư nhận lại từ sản xuất theo lệnh đã nhập thành phẩm, kho nhận và đợt nhận; phân biệt vật tư nhận lại với thành phẩm sản xuất."
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

Tra cứu vật tư nhận lại từ sản xuất theo lệnh đã nhập thành phẩm, kho nhận và đợt nhận; phân biệt vật tư nhận lại với thành phẩm sản xuất.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có lệnh Đã nhập và biên bản vật tư thực nhận lại từ sản xuất.
- Xác định kho nhận, ngày nhận, từng nguyên liệu, ĐVT và các lô nhận lại.
- Kiểm tra các nguyên liệu được nạp theo định mức của lệnh; dòng thành phẩm chỉ là nhóm.
- Mở đúng địa chỉ hệ thống của chi nhánh, dùng tài khoản được cấp cho đơn vị đó.

## 2. Mở chức năng

**Sản xuất giấy → Nhập vật tư**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![NHẬP VẬT TƯ - DANH SÁCH — bộ lọc và danh sách theo kỳ đang chọn; chỉ xem.](/posts/2026-11-07-sx-a03-0-tong-quan-nhap-vat-tu/ui-20261026-sx-a03-ds-overview.png)

Danh sách **Nhập vật tư**, chọn khoảng ngày nghiệp vụ rồi mở Xem đúng mã. Các cột dùng để đọc chứng từ đã lưu:

- **STT**: Ý nghĩa và cách dùng: Số thứ tự hiển thị theo trang danh sách.
- **Thao tác**: Ý nghĩa và cách dùng: Các liên kết xử lý từng chứng từ theo quyền; không phải trạng thái của hồ sơ.
- **Ngày nhập vật tư**: Ý nghĩa và cách dùng: Ngày ghi nhận vật tư nhận lại vào kho nhập, không phải ngày nhận thành phẩm.
- **Mã phiếu**: Ý nghĩa và cách dùng: Mã riêng của chứng từ đã lưu; không phải mã lệnh nguồn.
- **Từ lệnh**: Ý nghĩa và cách dùng: Mã lệnh sản xuất liên kết với phiếu; mở Xem để đối chiếu chi tiết và kho.
- **Tên kho nhập**: Ý nghĩa và cách dùng: Kho tiếp nhận vật tư nhận lại được ghi trên phiếu; phân biệt với kho nhận thành phẩm và KHO GC.
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

1. Chọn khoảng **Ngày nhập vật tư**, tìm Mã phiếu và Từ lệnh; kiểm tra Tên kho nhập và Tên đơn vị.
2. Mở Xem để phân biệt dòng thành phẩm làm nhóm và các nguyên liệu bên dưới; kiểm tra lượng không theo lô và SL LOT theo biên bản vật tư nhận lại.
3. Thêm phiếu nhận lại vật tư theo [LẬP NHẬP VẬT TƯ](/bai-viet/2026-11-07-sx-a03-1-lap-nhap-vat-tu/) từ lệnh ở trạng thái Đã nhập; đây là luồng vật tư, không dùng thay phiếu nhập thành phẩm.
4. In phiếu của đợt nhận lại đã lưu bằng menu **In Phiếu Nhập Vật Tư** theo [IN PHIẾU NHẬP VẬT TƯ](/bai-viet/2026-11-07-sx-a03-2-in-phieu-nhap-vat-tu/).

## 6. Giải thích các thông tin trên màn hình

- **STT**: Ý nghĩa và cách dùng: Số thứ tự hiển thị theo trang danh sách.
- **Thao tác**: Ý nghĩa và cách dùng: Các liên kết xử lý từng chứng từ theo quyền; không phải trạng thái của hồ sơ.
- **Ngày nhập vật tư**: Ý nghĩa và cách dùng: Ngày ghi nhận vật tư nhận lại vào kho nhập, không phải ngày nhận thành phẩm.
- **Mã phiếu**: Ý nghĩa và cách dùng: Mã riêng của chứng từ đã lưu; không phải mã lệnh nguồn.
- **Từ lệnh**: Ý nghĩa và cách dùng: Mã lệnh sản xuất liên kết với phiếu; mở Xem để đối chiếu chi tiết và kho.
- **Tên kho nhập**: Ý nghĩa và cách dùng: Kho tiếp nhận vật tư nhận lại được ghi trên phiếu; phân biệt với kho nhận thành phẩm và KHO GC.
- **Tên đơn vị**: Ý nghĩa và cách dùng: Đơn vị gia công gắn với lệnh nguồn của phiếu vật tư.
- **Ghi chú**: Ý nghĩa và cách dùng: Nội dung đã lưu tại đầu chứng từ, hỗ trợ nhận diện đợt sản xuất/giao nhận.
- **Người tạo**: Ý nghĩa và cách dùng: Tài khoản/người đã lập bản ghi, không mặc nhiên là người giao hàng.
- **Ngày tạo**: Ý nghĩa và cách dùng: Thời điểm hệ thống tạo bản ghi; khác ngày nghiệp vụ của phiếu.
- **Người sửa**: Ý nghĩa và cách dùng: Người cập nhật bản ghi gần nhất; không phải người duyệt.
- **Ngày sửa**: Ý nghĩa và cách dùng: Thời điểm cập nhật gần nhất, không thay ngày nghiệp vụ.

## 7. Kiểm tra sau khi thực hiện

Xác định được phiếu vật tư đúng lệnh và kho; mở Xem để kiểm tra lượng/lô trước sửa, xóa hoặc in.

## 8. Những điều cần lưu ý

Chỉ nhập vật tư thực nhận lại tại kho nhập, phân biệt với nhận thành phẩm. Dòng thành phẩm làm nhóm không phải dòng được nhập kho như nguyên liệu.

**Kiểm tra lượng sau khi chọn lô:** Khi lập mới từ lệnh, các dòng nguyên liệu được nạp với lượng bằng 0; không tự có lượng cần nhận lại theo định mức. Sau khi xác nhận CHI TIẾT LÔ, S.LƯỢNG được tính lại từ lượng cơ sở đã nạp, nên có thể mất số không theo lô vừa gõ. Chọn và xác nhận lô trước, sau đó kiểm tra/nhập lại phần không theo lô theo biên bản; nếu mở và xác nhận lô lần nữa thì phải kiểm tra lại.

Ví dụ kiểm tra trên cùng một nguyên liệu và cùng ĐVT: biên bản ghi tổng 10, trong đó 4 theo lô và 6 không theo lô. Trước lưu phải thấy SL LOT = 4 và S.LƯỢNG = 6; nếu S.LƯỢNG về 0 sau chọn lô thì chưa đủ lượng để lưu theo biên bản. Đây là ví dụ đối chiếu số học, chưa phải kết quả thử trên ERP.

**Khi đổi kho:** Mở lại CHI TIẾT LÔ của từng dòng, kiểm tra lô thuộc đúng kho mới và xác nhận lại lượng thực tế. Không mặc định các lô đã chọn ở kho cũ tự được xóa hoặc thay thế. Nếu không đối chiếu được kho/lô, dừng lưu và chuyển người phụ trách kho kiểm tra.

## 9. Vướng mắc thường gặp

- **Không thấy lệnh nguồn**: Ý nghĩa và cách dùng: Danh sách chọn của Nhập vật tư lọc lệnh Đã nhập; kiểm tra mã, trạng thái và phạm vi tìm của cửa sổ chọn.
- **Thiếu Ngày nhập / Kho nhập**: Ý nghĩa và cách dùng: Chọn ngày nhận lại và kho nhận; các ô đơn vị/KHO GC phải được nạp đủ từ lệnh.
- **Vui lòng chọn hàng hoá khi mở lô**: Ý nghĩa và cách dùng: Kiểm tra dòng nguyên liệu được nạp từ lệnh; dòng nhóm thành phẩm không dùng để phân lô.
- **Lượng thay đổi sau chọn lô**: Ý nghĩa và cách dùng: Kiểm tra SL LOT đã cộng các lô và phần S.LƯỢNG tính lại; sửa về lượng thực nhận trước lưu.

## 10. Câu hỏi thường gặp

**Vì sao không thấy lệnh để nhận lại vật tư?** Danh sách chọn của luồng này lọc lệnh Đã nhập; đối chiếu trạng thái và khoảng tìm lệnh.

**Vì sao có dòng không nhập được?** Dòng thành phẩm làm nhóm là chỉ đọc; nhập tại các nguyên liệu bên dưới, mở rộng nhóm bằng mũi tên.

## 11. Công việc tiếp theo

In phiếu đã lưu theo [IN PHIẾU NHẬP VẬT TƯ](/bai-viet/2026-11-07-sx-a03-2-in-phieu-nhap-vat-tu/) và chuyển bộ phận kho đối chiếu lượng/lô thực tế.

## 12. Bài hướng dẫn liên quan

- **[LẬP NHẬP VẬT TƯ](/bai-viet/2026-11-07-sx-a03-1-lap-nhap-vat-tu/)** — Lập nhập vật tư.
- **[IN PHIẾU NHẬP VẬT TƯ](/bai-viet/2026-11-07-sx-a03-2-in-phieu-nhap-vat-tu/)** — In phiếu nhập vật tư.
