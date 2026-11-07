---
title: "LẬP NHẬP VẬT TƯ"
date: "2026-11-07"
summary: "Lập phiếu nhận lại nguyên vật liệu từ một lệnh ở trạng thái Đã nhập, xác định kho nhận và lượng vật tư không theo lô/theo lô thực nhận."
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

Lập phiếu nhận lại nguyên vật liệu từ một lệnh ở trạng thái Đã nhập, xác định kho nhận và lượng vật tư không theo lô/theo lô thực nhận.

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

![CHỌN LỆNH SẢN XUẤT — hộp chọn nguồn đang trống; chưa chọn lệnh, chưa lập phiếu.](/posts/2026-11-07-sx-a03-1-lap-nhap-vat-tu/ui-20261026-sx-a03-form-source-order.png)

Hộp **lập Nhập vật tư** gồm:

- **Thông tin đầu phiếu**: Ý nghĩa và cách dùng: Ngày nghiệp vụ, mã tự sinh và các kho/đơn vị liên quan; xem phần “Giải thích các thông tin trên màn hình” để biết ô nhập và ô chỉ đọc.
- **Bảng chi tiết**: Ý nghĩa và cách dùng: Các thành phẩm hoặc nguyên liệu thực hiện riêng cho chứng từ này; dòng nhóm vật tư khác dòng được nhập lượng.
- **Kết quả cuối bảng**: Ý nghĩa và cách dùng: Tổng các cột S.LƯỢNG và SL LOT.

## 4. Trình tự công việc

```text
Lệnh Đã nhập → vật tư nhận lại → kho/ngày nhập → lượng và lô thực nhận → lưu → đối chiếu kho
```

## 5. Thực hiện trên phần mềm

1. Chọn đúng lệnh trong **CHỌN LỆNH SẢN XUẤT**: cửa sổ chọn nhận lệnh **Đã nhập**. Kiểm tra Mã lệnh và đơn vị gia công theo biên bản nhận lại vật tư.
2. Đối chiếu ĐƠN VỊ GIA CÔNG và KHO GC chỉ đọc từ lệnh. Chọn NGÀY NHẬP VẬT TƯ và KHO NHẬP theo đợt giao nhận thực tế.
3. Mở nhóm thành phẩm bằng mũi tên, kiểm tra các nguyên liệu theo định mức của lệnh. Dòng thành phẩm là nhóm chỉ đọc; nhập ở các dòng vật tư, không cộng số nhóm vào lượng giao nhận.
4. Với hàng chỉ có lượng không theo lô, nhập S.LƯỢNG vật tư nhận lại theo biên bản. Với hàng có phần theo lô, xác nhận phần lô trước: bấm SL LOT để mở CHI TIẾT LÔ, chọn đúng lô và số lượng, xác nhận về phiếu. Khi trở về, kiểm tra và nhập lại phần S.LƯỢNG không theo lô theo biên bản nếu bị tính lại; xem ví dụ và thứ tự kiểm tra ở phần “Những điều cần lưu ý”.
5. Đối chiếu cả S.LƯỢNG và SL LOT từng vật tư, ghi chú và kho; không mặc định đã có lượng vì lệnh có lượng thành phẩm. Không dùng tổng cuối bảng thay kiểm tra từng hàng/ĐVT.
6. Sau lưu, tìm mã phiếu tự sinh, kiểm tra Từ lệnh, kho và các dòng vật tư; đối chiếu tăng tồn kho nhận lại. In chứng từ đã lưu theo [IN PHIẾU NHẬP VẬT TƯ](/bai-viet/2026-11-07-sx-a03-2-in-phieu-nhap-vat-tu/).

## 6. Giải thích các thông tin trên màn hình

- **NGÀY NHẬP VẬT TƯ**: Ý nghĩa và cách dùng: Bắt buộc chọn ngày nhập vật tư thực tế; phân biệt với ngày lệnh và ngày nhập thành phẩm.
- **ĐƠN VỊ GIA CÔNG / KHO GC**: Ý nghĩa và cách dùng: Bắt buộc có, lấy theo lệnh sản xuất và chỉ đọc. Nếu thông tin sai, đối chiếu lệnh nguồn, không gõ đè ở ô này.
- **MÃ PHIẾU**: Ý nghĩa và cách dùng: Chỉ đọc, mã phiếu tự sinh; khác mã lệnh nguồn ở cột Từ lệnh.
- **KHO NHẬP**: Ý nghĩa và cách dùng: Bắt buộc chọn kho nhập theo biên bản. Giá trị kho được gán cho các dòng vật tư của phiếu.
- **Dòng thành phẩm**: Ý nghĩa và cách dùng: Dòng nhóm lấy từ lệnh, chỉ để nhận diện vật tư thuộc thành phẩm nào; ô số lượng và hàng của dòng nhóm bị vô hiệu hóa. Dùng mũi tên để thu/mở các dòng vật tư bên dưới.
- **HÀNG HOÁ / ĐVT**: Ý nghĩa và cách dùng: Dòng nguyên vật liệu được lấy theo định mức gắn với thành phẩm của lệnh; tên hàng và ĐVT chỉ đọc. Không thêm hàng mới tùy ý trong bảng này.
- **S.LƯỢNG**: Ý nghĩa và cách dùng: Lượng nhập không phân theo lô trên dòng vật tư, cho nhập ở dòng chi tiết. Khi lập mới từ lệnh, dữ liệu khởi tạo vật tư bằng 0; nhập số thực tế, không suy lệnh đã có lượng nghĩa là vật tư cũng có lượng.
- **SL LOT**: Ý nghĩa và cách dùng: Chỉ đọc trên bảng; bấm để mở CHI TIẾT LÔ, chọn lô và lượng nhập. Sau xác nhận, tổng các lô được cộng vào SL LOT; S.LƯỢNG được tính lại max(0, lượng cơ sở đã nạp − SL LOT).
- **GHI CHÚ**: Ý nghĩa và cách dùng: Ghi diễn giải riêng cho phiếu hoặc dòng vật tư; dòng thành phẩm không cho sửa chú thích ở bảng này.
- **TỔNG CỘNG**: Ý nghĩa và cách dùng: Hai kết quả cộng các cột S.LƯỢNG và SL LOT của bảng, không phải ô nhập. Đối chiếu các dòng nhóm và dòng vật tư, không dùng tổng lẫn nhiều loại hàng/ĐVT thay biên bản.

## 7. Kiểm tra sau khi thực hiện

Có phiếu nhập vật tư liên kết lệnh và kho nhập, lượng không theo lô/theo lô đã ghi; đối chiếu tăng tồn ở kho nhận đúng đợt vật tư nhận lại.

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

- **[TỔNG QUAN NHẬP VẬT TƯ](/bai-viet/2026-11-07-sx-a03-0-tong-quan-nhap-vat-tu/)** — Tổng quan nhập vật tư.
- **[IN PHIẾU NHẬP VẬT TƯ](/bai-viet/2026-11-07-sx-a03-2-in-phieu-nhap-vat-tu/)** — In phiếu nhập vật tư.
