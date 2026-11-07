---
title: "LẬP LỆNH SẢN XUẤT GIẤY HOẶC KEO"
date: "2026-11-07"
summary: "Lập lệnh giấy hoặc keo gồm lượng yêu cầu, kho và nguyên liệu dùng cho từng mặt hàng; ghi rõ phí gia công trước theo dõi nhận thành phẩm."
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

Lập lệnh giấy hoặc keo gồm lượng yêu cầu, kho và nguyên liệu dùng cho từng mặt hàng; ghi rõ phí gia công trước theo dõi nhận thành phẩm.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có hàng theo nghiệp vụ giấy/keo, ĐVT và định mức nguyên vật liệu cần dùng.
- Đơn vị gia công đã gán kho gia công; xác định kho cấp khác kho gia công.
- Có lượng yêu cầu và phương án phí gia công; khi sửa/tất toán phải đối chiếu lượng đã nhập và nguyên liệu đã lưu.
- Mở đúng địa chỉ hệ thống của chi nhánh, dùng tài khoản được cấp cho đơn vị đó.

## 2. Mở chức năng

**Sản xuất giấy → Lệnh sản xuất**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![THÊM LỆNH SẢN XUẤT — thông tin đầu phiếu và bảng chi tiết trống, chưa lưu.](/posts/2026-11-07-sx-a01-1-lap-lenh-san-xuat-giay-hoac-keo/ui-20261026-sx-a01-giay-initial-order-dialog-giay.png)

![THÊM LỆNH SẢN XUẤT — thông tin đầu phiếu và bảng chi tiết trống, chưa lưu.](/posts/2026-11-07-sx-a01-1-lap-lenh-san-xuat-giay-hoac-keo/ui-20261026-sx-a01-keo-initial-order-dialog-keo.png)

Hộp **lập Lệnh sản xuất** gồm:

- **Thông tin đầu phiếu**: Ý nghĩa và cách dùng: Ngày nghiệp vụ, mã tự sinh và các kho/đơn vị liên quan; xem phần “Giải thích các thông tin trên màn hình” để biết ô nhập và ô chỉ đọc.
- **Bảng chi tiết**: Ý nghĩa và cách dùng: Từng dòng hàng cần sản xuất, gồm lượng yêu cầu, phí gia công và nút mở nguyên vật liệu riêng; nguyên liệu được kiểm tra trong cửa sổ chi tiết của dòng.
- **Kết quả cuối bảng**: Ý nghĩa và cách dùng: Tổng lượng yêu cầu, tổng tất toán và phí gia công.

## 4. Trình tự công việc

```text
Giấy/keo → đơn vị và kho → yêu cầu thành phẩm → nguyên liệu/lô → phí gia công → lưu lệnh → theo dõi nhận thành phẩm
```

## 5. Thực hiện trên phần mềm

1. Chọn nghiệp vụ **Sản xuất giấy** hoặc **Sản xuất keo** theo hàng cần làm. Nhập NGÀY SẢN XUẤT, chọn ĐƠN VỊ GIA CÔNG, kiểm tra KHO GC tự điền và chọn KHO XUẤT khác KHO GC.
2. Chọn THÀNH PHẨM của đúng nghiệp vụ, kiểm tra ĐVT chỉ đọc rồi nhập S.LƯỢNG yêu cầu. Hoàn thành mã hàng và lượng trước mở biểu tượng Chọn nguyên liệu.
3. Trong **C.TIẾT NGUYÊN VẬT LIỆU - SẢN XUẤT**, đối chiếu nguyên liệu lấy theo định mức. Lượng đủ được gợi ý bằng định mức × số lượng yêu cầu; kiểm tra lượng xuất không theo lô và chọn các lô nếu dùng. Xác nhận Đồng ý để đưa chi tiết về dòng lệnh.
4. Khi đã có nguyên liệu, ô hàng và S.LƯỢNG ở dòng lệnh bị khóa. Nếu chọn nhầm, dừng để xử lý đúng quan hệ nguyên liệu trước; không tự sửa số tổng ở cuối bảng.
5. Dùng **TÍNH CHI PHÍ** lấy gợi ý đơn giá cho các hàng đã chọn. Nút này nạp lại đơn giá của từng hàng, có thể thay đơn giá vừa điều chỉnh; kiểm tra lại tất cả các dòng sau khi bấm. Đối chiếu ĐƠN GIÁ phí gia công và PHÍ G/C = (S.LƯỢNG − T.TOÁN) × ĐƠN GIÁ, tổng chi phí và ghi chú theo phương án sản xuất.
6. Trước lưu kiểm tra ngày, đơn vị/kho, từng thành phẩm và nguyên liệu đã xác định. Sau lưu tìm đúng Mã lệnh tự sinh, mở Xem kiểm tra lượng và chi tiết nguyên liệu; chuyển lập nhập thành phẩm khi có hàng thực nhận.

## 6. Giải thích các thông tin trên màn hình

- **NGÀY SẢN XUẤT**: Ý nghĩa và cách dùng: Bắt buộc chọn ngày của lệnh, hiển thị dd/MM/yyyy. Đây là mốc ngày sản xuất dùng đối chiếu kỳ của lệnh, không thay ngày nhập thành phẩm sau này.
- **ĐƠN VỊ GIA CÔNG**: Ý nghĩa và cách dùng: Bắt buộc chọn đơn vị thực hiện; khi chọn hệ thống điền KHO GC theo đơn vị. Chỉ chọn lại được ở chế độ lập mới.
- **KHO GC**: Ý nghĩa và cách dùng: Kho sản xuất/gia công được lấy theo đơn vị, bắt buộc có và chỉ đọc. Nếu không có kho, kiểm tra thiết lập đơn vị thay vì nhập tùy ý tại ô này.
- **KHO XUẤT**: Ý nghĩa và cách dùng: Chọn kho cấp nguyên liệu; phải khác KHO GC. Chỉ được đổi khi lập mới; cần chọn trước khi xác định nguyên liệu/lô xuất.
- **MÃ LỆNH**: Ý nghĩa và cách dùng: Mã tự sinh, chỉ đọc; không gõ mã khi lập mới. Dùng mã để liên kết nhập thành phẩm và vật tư.
- **THÀNH PHẨM**: Ý nghĩa và cách dùng: Chọn hàng cần sản xuất; danh sách lọc theo nghiệp vụ giấy hoặc keo đã chọn. Khi dòng đã có nguyên liệu, ô chọn hàng bị khóa để giữ quan hệ nguyên liệu.
- **ĐVT**: Ý nghĩa và cách dùng: Đơn vị tính theo dòng hàng, chỉ đọc; kiểm tra trước nhập lượng vì không tùy đổi ĐVT trên dòng.
- **S.LƯỢNG**: Ý nghĩa và cách dùng: Số lượng yêu cầu của lệnh. Khi đã có chi tiết nguyên liệu thì bị khóa; xác định lượng trước khi mở chi tiết.
- **T.TOÁN**: Ý nghĩa và cách dùng: Số lượng không tiếp tục thực hiện, chỉ nhập trong Tất toán; giới hạn trên ô là S.LƯỢNG − số đã nhập. Không phải lượng thành phẩm đã nhận.
- **Biểu tượng Chọn nguyên liệu**: Ý nghĩa và cách dùng: Mở chi tiết nguyên vật liệu của dòng; phải chọn hàng, có số lượng, và có T.TOÁN khi đang tất toán. Dòng cũ không có nguyên liệu sẽ không mở để sửa/tất toán.
- **ĐƠN GIÁ / TÍNH CHI PHÍ**: Ý nghĩa và cách dùng: Đơn giá phí gia công của dòng. TÍNH CHI PHÍ lấy đơn giá gợi ý cho các hàng đã chọn; kiểm tra lại với phương án phí, không coi là giá vốn thành phẩm.
- **PHÍ G/C**: Ý nghĩa và cách dùng: Chỉ đọc, bằng (S.LƯỢNG − T.TOÁN) × ĐƠN GIÁ.
- **TỔNG CHI PHÍ**: Ý nghĩa và cách dùng: Chỉ đọc, cộng PHÍ G/C các dòng. Dòng Tổng ở cuối bảng cũng cộng số lượng yêu cầu, số tất toán và phí; không phải các trường nhập riêng.
- **GHI CHÚ**: Ý nghĩa và cách dùng: Nội dung bổ sung cho toàn lệnh; chú thích ở dòng mô tả riêng thành phẩm/nguyên liệu, lưu theo đúng cấp.

## 7. Kiểm tra sau khi thực hiện

Lệnh được lưu với mã tự sinh, các dòng yêu cầu, nguyên liệu và phí gia công. Đây là yêu cầu sản xuất, cần phiếu nhập thành phẩm để ghi nhận lượng thực nhận.

## 8. Những điều cần lưu ý

Lập lệnh và in phiếu đề nghị không thay cho việc kiểm tra phiếu xuất vật tư và lượng thành phẩm thực nhận. Sửa lệnh còn phải đáp ứng trạng thái Chưa nhập; tất toán là nghiệp vụ riêng.

**Kiểm tra nguyên liệu trước lưu:** Chọn đúng đơn vị, KHO GC, KHO XUẤT, hàng và lượng yêu cầu trước khi mở nguyên liệu. Nếu thay đơn vị/kho khi đang lập mới, mở lại từng dòng nguyên liệu/lô để đối chiếu kho và số lượng; không mặc định lô đã chọn tự chuyển đúng sang kho mới.

Trong chi tiết nguyên liệu, so riêng lượng không theo lô và SL LOT với định mức/phương án được duyệt. Xác nhận Đồng ý không chứng minh tổng nguyên liệu đã bằng lượng cần. Sau chọn lô, kiểm tra lại lượng không theo lô vì nó được tính lại theo lượng cần trừ tổng lô; không cộng trùng cùng một lượng vào cả hai phần. Nếu thiếu định mức, nguyên liệu hoặc số lượng chưa khớp hồ sơ, hoàn thiện/đối chiếu trước lưu.

## 9. Vướng mắc thường gặp

- **Thiếu Ngày sản xuất / Đơn vị gia công / Kho gia công**: Ý nghĩa và cách dùng: Chọn ngày và đơn vị hợp lệ; KHO GC lấy theo đơn vị nên nếu trống cần kiểm tra danh mục đơn vị, không điền tùy ý tại ô chỉ đọc.
- **Kho xuất không được trùng với kho gia công**: Ý nghĩa và cách dùng: Đối chiếu nơi cấp và nơi sản xuất, chọn kho xuất khác KHO GC trước khai nguyên liệu.
- **Vui lòng chọn hàng hoá / Vui lòng nhập số lượng**: Ý nghĩa và cách dùng: Chọn thành phẩm và nhập lượng yêu cầu trước mở chi tiết nguyên vật liệu.
- **Không có nguyên liệu để sửa**: Ý nghĩa và cách dùng: Dòng cũ chưa có nguyên liệu phù hợp để mở luồng sửa; kiểm tra định mức và nguyên liệu đã lưu của dòng, không tiếp tục bằng cách chỉ đổi tổng tiền.
- **Phiếu không còn Chưa nhập**: Ý nghĩa và cách dùng: Luồng Sửa bị chặn theo trạng thái lệnh; đối chiếu các lần nhập và phần tất toán, chọn nghiệp vụ đúng thay vì sửa yêu cầu ban đầu.
- **Bạn chỉ được xóa phiếu do mình tạo**: Ý nghĩa và cách dùng: Kiểm tra Người tạo của lệnh; chuyển người lập/người phụ trách xử lý theo quyền và quy trình.

## 10. Câu hỏi thường gặp

**Đã nhập có luôn nghĩa là nhận đủ số yêu cầu ban đầu?** Không. Tiến độ được tính sau trừ phần tất toán; mở dòng lệnh để xem số yêu cầu, đã nhận và tất toán.

**Vì sao không sửa được hàng hoặc S.LƯỢNG?** Dòng đã có chi tiết nguyên liệu được khóa để giữ liên kết; xác định lượng trước khai nguyên liệu. Luồng Sửa lệnh còn yêu cầu trạng thái Chưa nhập.

## 11. Công việc tiếp theo

Lập nhận thành phẩm theo [LẬP NHẬP THÀNH PHẨM](/bai-viet/2026-11-07-sx-a02-1-lap-nhap-thanh-pham/) khi có hàng thực nhận; phần không tiếp tục thực hiện theo [TẤT TOÁN LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-2-tat-toan-lenh-san-xuat/), in đề nghị nguyên liệu theo [IN PHIẾU XUẤT NGUYÊN LIỆU TỪ LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-3-in-phieu-xuat-nguyen-lieu-tu-lenh-san-xuat/).

## 12. Bài hướng dẫn liên quan

- **[TỔNG QUAN LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-0-tong-quan-lenh-san-xuat/)** — Tổng quan lệnh sản xuất.
- **[TẤT TOÁN LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-2-tat-toan-lenh-san-xuat/)** — Tất toán lệnh sản xuất.
- **[IN PHIẾU XUẤT NGUYÊN LIỆU TỪ LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-3-in-phieu-xuat-nguyen-lieu-tu-lenh-san-xuat/)** — In phiếu xuất nguyên liệu từ lệnh sản xuất.
