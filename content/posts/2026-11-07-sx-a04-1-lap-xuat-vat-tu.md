---
title: "LẬP XUẤT VẬT TƯ"
date: "2026-11-07"
summary: "Lập phiếu cấp nguyên vật liệu cho lệnh chưa nhận thành phẩm, ghi riêng lượng không theo lô và các lô được xuất từ kho cấp."
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

Lập phiếu cấp nguyên vật liệu cho lệnh chưa nhận thành phẩm, ghi riêng lượng không theo lô và các lô được xuất từ kho cấp.

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

![CHỌN LỆNH SẢN XUẤT — cửa sổ chọn nguồn đang trống; chưa chọn lệnh, chưa lập phiếu.](/posts/2026-11-07-sx-a04-1-lap-xuat-vat-tu/ui-20261026-sx-a04-form-source-order.png)

Hộp **lập Xuất vật tư** gồm:

- **Thông tin đầu phiếu**: Ý nghĩa và cách dùng: Ngày nghiệp vụ, mã tự sinh và các kho/đơn vị liên quan; xem phần “Giải thích các thông tin trên màn hình” để biết ô nhập và ô chỉ đọc.
- **Bảng chi tiết**: Ý nghĩa và cách dùng: Các thành phẩm hoặc nguyên liệu thực hiện riêng cho chứng từ này; dòng nhóm vật tư khác dòng được nhập lượng.
- **Kết quả cuối bảng**: Ý nghĩa và cách dùng: Tổng các cột S.LƯỢNG và SL LOT.

## 4. Trình tự công việc

```text
Lệnh Chưa nhập → kho/ngày cấp → nguyên liệu và lô → đối chiếu tồn → lưu → kiểm tra lượng xuất
```

## 5. Thực hiện trên phần mềm

1. Chọn đúng lệnh trong **CHỌN LỆNH SẢN XUẤT**: cửa sổ chọn nhận lệnh **Chưa nhập hoặc chưa có trạng thái**. Kiểm tra Mã lệnh và đơn vị gia công theo biên bản cấp vật tư.
2. Đối chiếu ĐƠN VỊ GIA CÔNG và KHO GC chỉ đọc từ lệnh. Chọn NGÀY XUẤT VẬT TƯ và KHO XUẤT theo đợt giao nhận thực tế.
3. Mở nhóm thành phẩm bằng mũi tên, kiểm tra các nguyên liệu theo định mức của lệnh. Dòng thành phẩm là nhóm chỉ đọc; nhập ở các dòng vật tư, không cộng số nhóm vào lượng giao nhận.
4. Với hàng chỉ có lượng không theo lô, nhập S.LƯỢNG vật tư cấp theo biên bản. Với hàng có phần theo lô, xác nhận phần lô trước: bấm SL LOT để mở CHI TIẾT LÔ, chọn đúng lô và số lượng, xác nhận về phiếu. Khi trở về, kiểm tra và nhập lại phần S.LƯỢNG không theo lô theo biên bản nếu bị tính lại; xem ví dụ và thứ tự kiểm tra ở phần “Những điều cần lưu ý”.
5. Đối chiếu cả S.LƯỢNG và SL LOT từng vật tư, ghi chú và kho; không mặc định đã có lượng vì lệnh có lượng thành phẩm. Không dùng tổng cuối bảng thay kiểm tra từng hàng/ĐVT.
6. Sau lưu, tìm mã phiếu tự sinh, kiểm tra Từ lệnh, kho và các dòng vật tư; đối chiếu giảm tồn kho cấp vật tư. In chứng từ đã lưu theo [IN PHIẾU XUẤT VẬT TƯ](/bai-viet/2026-11-07-sx-a04-2-in-phieu-xuat-vat-tu/).

## 6. Giải thích các thông tin trên màn hình

- **NGÀY XUẤT VẬT TƯ**: Ý nghĩa và cách dùng: Bắt buộc chọn ngày xuất vật tư thực tế; phân biệt với ngày lệnh và ngày nhập thành phẩm.
- **ĐƠN VỊ GIA CÔNG / KHO GC**: Ý nghĩa và cách dùng: Bắt buộc có, lấy theo lệnh sản xuất và chỉ đọc. Nếu thông tin sai, đối chiếu lệnh nguồn, không gõ đè ở ô này.
- **MÃ PHIẾU XUẤT**: Ý nghĩa và cách dùng: Chỉ đọc, mã phiếu tự sinh; khác mã lệnh nguồn ở cột Từ lệnh.
- **KHO XUẤT**: Ý nghĩa và cách dùng: Bắt buộc chọn kho xuất theo biên bản. Giá trị kho được gán cho các dòng vật tư của phiếu.
- **Dòng thành phẩm**: Ý nghĩa và cách dùng: Dòng nhóm lấy từ lệnh, chỉ để nhận diện vật tư thuộc thành phẩm nào; ô số lượng và hàng của dòng nhóm bị vô hiệu hóa. Dùng mũi tên để thu/mở các dòng vật tư bên dưới.
- **HÀNG HOÁ / ĐVT**: Ý nghĩa và cách dùng: Dòng nguyên vật liệu được lấy theo định mức gắn với thành phẩm của lệnh; tên hàng và ĐVT chỉ đọc. Không thêm hàng mới tùy ý trong bảng này.
- **S.LƯỢNG**: Ý nghĩa và cách dùng: Lượng xuất không phân theo lô trên dòng vật tư, cho nhập ở dòng chi tiết. Khi lập mới từ lệnh, dữ liệu khởi tạo vật tư bằng 0; nhập số thực tế, không suy lệnh đã có lượng nghĩa là vật tư cũng có lượng.
- **SL LOT**: Ý nghĩa và cách dùng: Chỉ đọc trên bảng; bấm để mở CHI TIẾT LÔ, chọn lô và lượng xuất. Sau xác nhận, tổng các lô được cộng vào SL LOT; S.LƯỢNG được tính lại max(0, lượng cơ sở đã nạp − SL LOT).
- **GHI CHÚ**: Ý nghĩa và cách dùng: Ghi diễn giải riêng cho phiếu hoặc dòng vật tư; dòng thành phẩm không cho sửa chú thích ở bảng này.
- **TỔNG CỘNG**: Ý nghĩa và cách dùng: Hai kết quả cộng các cột S.LƯỢNG và SL LOT của bảng, không phải ô nhập. Đối chiếu các dòng nhóm và dòng vật tư, không dùng tổng lẫn nhiều loại hàng/ĐVT thay biên bản.

## 7. Kiểm tra sau khi thực hiện

Có phiếu xuất vật tư liên kết lệnh và kho xuất, các dòng cấp nguyên liệu/lô; đối chiếu giảm tồn kho cấp và lượng thực giao, không coi là đã nhận thành phẩm.

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

- **[TỔNG QUAN XUẤT VẬT TƯ](/bai-viet/2026-11-07-sx-a04-0-tong-quan-xuat-vat-tu/)** — Tổng quan xuất vật tư.
- **[IN PHIẾU XUẤT VẬT TƯ](/bai-viet/2026-11-07-sx-a04-2-in-phieu-xuat-vat-tu/)** — In phiếu xuất vật tư.
