---
title: "LẬP NHẬP THÀNH PHẨM"
date: "2026-11-07"
summary: "Ghi nhận lượng giấy/keo thực nhận từ một lệnh vào kho nhập, cùng phí gia công, nguồn nhân lực và đối tượng tập hợp chi phí của đợt nhận."
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

Ghi nhận lượng giấy/keo thực nhận từ một lệnh vào kho nhập, cùng phí gia công, nguồn nhân lực và đối tượng tập hợp chi phí của đợt nhận.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có lệnh đúng giấy/keo còn phần cần nhận (Chưa nhập/Đang nhập hoặc chưa có trạng thái).
- Có biên bản thực nhận, kho nhận và đơn giá phí gia công; xác định nguồn nhân lực/đối tượng THCP nếu cần theo dõi.
- Kiểm tra ngày nhận thuộc kỳ được phép ghi nhận; không lấy ngày lệnh thay ngày thực nhận.
- Mở đúng địa chỉ hệ thống của chi nhánh, dùng tài khoản được cấp cho đơn vị đó.

## 2. Mở chức năng

**Sản xuất giấy → Nhập thành phẩm**

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ chọn lệnh sản xuất giấy kiểm tra thực tế SX00113353](/posts/2026-11-07-sx-a02-1-lap-nhap-thanh-pham/hinh-01-20261029-sx-a02-1-chon-lenh.png)

![Hình 2: Phiếu nhận 8 kg, đơn giá gia công 200 và phí 1.600 trước lưu](/posts/2026-11-07-sx-a02-1-lap-nhap-thanh-pham/hinh-02-20261029-sx-a02-1-truoc-luu.png)

![Hình 3: Phiếu NP00113354 đã lưu và liên kết lệnh SX00113353](/posts/2026-11-07-sx-a02-1-lap-nhap-thanh-pham/hinh-03-20261029-sx-a02-1-da-luu.png)

![Hình 4: Mở lại NP00113354 để đối chiếu 8 kg và phí gia công 1.600](/posts/2026-11-07-sx-a02-1-lap-nhap-thanh-pham/hinh-04-20261029-sx-a02-1-chi-tiet-da-luu.png)

Hộp **lập Nhập thành phẩm** gồm:

- **Thông tin đầu phiếu**: Ý nghĩa và cách dùng: Ngày nghiệp vụ, mã tự sinh và các kho/đơn vị liên quan; xem phần “Giải thích các thông tin trên màn hình” để biết ô nhập và ô chỉ đọc.
- **Bảng chi tiết**: Ý nghĩa và cách dùng: Từng dòng thành phẩm lấy từ lệnh chưa nhận đủ, với ĐVT, lượng nhận đợt này, đơn giá phí gia công và đối tượng THCP; không phải bảng nhóm nguyên liệu.
- **Kết quả cuối bảng**: Ý nghĩa và cách dùng: Tổng lượng và phí gia công của phiếu nhận.

## 4. Trình tự công việc

```text
Lệnh còn lượng nhận → ngày/kho nhận → lượng thực nhận → phí gia công và THCP → lưu → kiểm tra kho và tiến độ lệnh
```

## 5. Thực hiện trên phần mềm

Ví dụ đã thử: ở lệnh SX00113353 có gợi ý 10 kg, sửa **S.LƯỢNG** thành **8**, chọn kho thành phẩm kiểm tra thực tế, kiểm **PHÍ G/C = 1.600**, lưu và mở lại phiếu NP00113354. Mã phiếu nhập và mã lệnh nguồn là hai mã khác nhau.

1. Chọn **Sản xuất giấy** hoặc **Sản xuất keo**, rồi chọn đúng lệnh ở **CHỌN LỆNH SẢN XUẤT**. Danh sách chọn nhận lệnh Chưa nhập/Đang nhập hoặc chưa có trạng thái của nghiệp vụ tương ứng.
2. Kiểm tra ĐƠN VỊ GIA CÔNG và KHO GC được lấy từ lệnh; nhập NGÀY NHẬP thực tế, chọn KHO NHẬP. Kiểm tra NGUỒN NHÂN LỰC nếu đơn vị theo dõi chi phí theo nguồn.
3. Nếu chọn lại lệnh, kiểm tra lại toàn bộ bảng: các dòng sẽ được nạp lại từ lệnh vừa chọn, không giữ phần lượng/giá/ghi chú đang sửa ở bảng cũ. Đối chiếu hàng và ĐVT chỉ đọc. S.LƯỢNG gợi ý bằng yêu cầu trừ tất toán trừ đã nhập; sửa thành lượng thực nhận đợt này. Dòng ở trạng thái Đã nhập không được đưa vào từ lệnh.
4. Kiểm tra ĐƠN GIÁ phí gia công lấy từ lệnh, điều chỉnh theo hồ sơ nếu cần; đọc PHÍ G/C tự tính. ĐỐI TƯỢNG THCP được gợi ý từ hàng hóa khi dòng chưa có đối tượng; xác nhận lại từng dòng theo phương án tập hợp chi phí.
5. Nhập ghi chú, kiểm tra tổng lượng và tổng phí với biên bản. Không tìm các ô TẠO LOT/LOT/HSD trong cửa sổ hiện tại: các ô này chưa hiển thị, cần kiểm tra thông tin lô đã lưu bằng hồ sơ và bản in.
6. Sau ghi nhận mở đúng Mã phiếu và Từ lệnh, kiểm tra kho nhập, từng hàng và lượng. Đối chiếu tiến độ nhận thành phẩm của lệnh cùng các lần nhập trước; không coi phí gia công là toàn bộ giá vốn nhập.

## 6. Giải thích các thông tin trên màn hình

- **NGÀY NHẬP**: Ý nghĩa và cách dùng: Bắt buộc chọn ngày nhận thành phẩm, hiển thị dd/MM/yyyy; không mặc định dùng ngày sản xuất trên lệnh để thay ngày thực nhận.
- **ĐƠN VỊ GIA CÔNG / KHO GC**: Ý nghĩa và cách dùng: Bắt buộc có, lấy từ lệnh đã chọn và chỉ đọc; chọn sai đơn vị thì kiểm tra lại lệnh nguồn.
- **MÃ LỆNH trên cửa sổ**: Ý nghĩa và cách dùng: Ô này chỉ đọc và hiện mã tự sinh của phiếu nhập (nhãn hiện là MÃ LỆNH). Mã lệnh nguồn được xem ở cột Từ lệnh trên danh sách.
- **KHO NHẬP**: Ý nghĩa và cách dùng: Bắt buộc chọn kho thực nhận thành phẩm; thay kho áp dụng cho các dòng của phiếu.
- **NGUỒN NHÂN LỰC**: Ý nghĩa và cách dùng: Chọn nguồn nhân lực thực hiện từ danh mục nếu cần theo dõi; không có dấu bắt buộc trong cửa sổ đã đối chiếu.
- **THÀNH PHẨM / ĐVT**: Ý nghĩa và cách dùng: Lấy từ các dòng lệnh chưa Đã nhập, chỉ đọc trên bảng; không tự thay hàng hoặc ĐVT khi nhận.
- **S.LƯỢNG**: Ý nghĩa và cách dùng: Gợi ý phần chưa nhận = số yêu cầu − số tất toán − số đã nhập. Nhập lại đúng lượng thực nhận lần này, không mặc nhiên nhận hết lượng gợi ý.
- **ĐƠN GIÁ**: Ý nghĩa và cách dùng: Đơn giá phí gia công lấy từ lệnh, cho nhập lại trên phiếu. Đối chiếu theo thỏa thuận; không đồng nhất với giá vốn nhập kho.
- **PHÍ G/C**: Ý nghĩa và cách dùng: Chỉ đọc, bằng S.LƯỢNG × ĐƠN GIÁ. Tổng phí gia công và tổng lượng ở cuối bảng là kết quả cộng dòng.
- **ĐỐI TƯỢNG THCP**: Ý nghĩa và cách dùng: Chọn đối tượng tập hợp chi phí của từng dòng. Khi lập mới và chưa có lựa chọn, hệ thống gợi ý đối tượng đã gán cho hàng hóa; kiểm tra và đổi nếu phân công kỳ này khác.
- **GHI CHÚ**: Ý nghĩa và cách dùng: Ghi chú đầu phiếu theo đợt nhận; ghi chú dòng theo từng mặt hàng. Được sao chép chú thích từ lệnh khi lấy dữ liệu.
- **LOT / HSD / TẠO LOT**: Ý nghĩa và cách dùng: Các ô tạo/chọn lô và hạn sử dụng không được hiển thị trong mẫu cửa sổ đang đối chiếu; không hướng dẫn nhập tại đây. Thông tin lô trên bản in phải kiểm tra với hồ sơ đã lưu.

## 7. Kiểm tra sau khi thực hiện

Có phiếu nhập thành phẩm liên kết lệnh, các dòng lượng nhận, phí gia công và đối tượng THCP; lượng nhận ảnh hưởng tiến độ lệnh và nhập kho theo phiếu. Kiểm tra tồn/kho và tiến độ sau lưu.

## 8. Những điều cần lưu ý

Phí gia công trên phiếu là lượng × đơn giá, không phải toàn bộ giá vốn nhập kho. Kiểm tra phần chưa nhận và THCP trước lưu; không tự nhận hết chỉ vì lượng gợi ý có sẵn.

**Nhận theo đợt:** Đối chiếu từng dòng bằng cùng ĐVT của lệnh. Ví dụ số học: yêu cầu 10, đã tất toán 2 và đã nhập 3 thì còn gợi ý 5; nếu lần này thực nhận 4 thì nhập 4, không nhập 5 chỉ để nhận hết gợi ý. Ví dụ này độc lập với phiếu kiểm tra thực tế lịch sử ghi trong bài, chưa phải một lần thử ERP mới. Nếu lượng còn gợi ý bằng 0, âm hoặc khác hồ sơ, dừng kiểm tra lệnh, các phiếu nhập và tất toán trước khi ghi nhận. Không coi gợi ý là bằng chứng hệ thống sẽ chặn mọi trường hợp nhận vượt.

**Chọn lại lệnh và đối chiếu trước lưu:** Sau khi đổi lệnh, kiểm tra lại loại giấy/keo, đơn vị gia công, KHO GC, kho nhập, từng thành phẩm, lượng, đơn giá và THCP. Không mặc định lựa chọn hoặc dữ liệu vừa sửa ở bảng cũ được giữ. Tổng lượng của các hàng khác ĐVT không dùng làm tổng giao nhận chung; đối chiếu từng hàng/ĐVT với biên bản.

## 9. Vướng mắc thường gặp

- **Chọn ngày nhập / Vui lòng chọn kho nhập**: Ý nghĩa và cách dùng: Chọn ngày thực nhận và kho nhận; không đổi ngày tùy ý chỉ để vượt kiểm tra kỳ.
- **Thiếu Đơn vị gia công hoặc KHO GC**: Ý nghĩa và cách dùng: Hai ô lấy từ lệnh và chỉ đọc; kiểm tra đã chọn đúng lệnh có đủ thiết lập đơn vị/kho.
- **Không thấy lệnh hoặc dòng thành phẩm cần nhận**: Ý nghĩa và cách dùng: Kiểm tra giấy/keo, trạng thái Chưa nhập/Đang nhập và lượng còn sau tất toán. Dòng ở trạng thái Đã nhập không được đưa vào đợt nhận mới.
- **Không thấy LOT / HSD trên cửa sổ**: Ý nghĩa và cách dùng: Các ô này hiện không hiển thị; đối chiếu hồ sơ lô và bản in thay vì nhập vào trường không có.
- **Kỳ ghi nhận đã khóa sổ**: Ý nghĩa và cách dùng: Xác định lại ngày nghiệp vụ và chuyển người phụ trách kế toán; không đổi ngày sai thực tế để lưu.

## 10. Câu hỏi thường gặp

**Vì sao lượng gợi ý khác số yêu cầu trên lệnh?** Lượng còn nhận đã trừ số đã nhập và phần tất toán; đây là gợi ý cho lần nhập này, cần sửa theo thực nhận.

**PHÍ G/C có phải giá vốn thành phẩm?** Là phí gia công = lượng × đơn giá của phiếu; không dùng riêng số này làm toàn bộ giá vốn nhập kho.

## 11. Công việc tiếp theo

Đối chiếu tiến độ lệnh [TỔNG QUAN LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-0-tong-quan-lenh-san-xuat/); in phiếu/tem theo [IN PHIẾU NHẬP THÀNH PHẨM VÀ TEM KIỆN](/bai-viet/2026-11-07-sx-a02-2-in-phieu-nhap-thanh-pham-va-tem-kien/) khi đã kiểm tra dữ liệu nhận.

## 12. Bài hướng dẫn liên quan

- **[TỔNG QUAN NHẬP THÀNH PHẨM](/bai-viet/2026-11-07-sx-a02-0-tong-quan-nhap-thanh-pham/)** — Tổng quan nhập thành phẩm.
- **[IN PHIẾU NHẬP THÀNH PHẨM VÀ TEM KIỆN](/bai-viet/2026-11-07-sx-a02-2-in-phieu-nhap-thanh-pham-va-tem-kien/)** — In phiếu nhập thành phẩm và tem kiện.
