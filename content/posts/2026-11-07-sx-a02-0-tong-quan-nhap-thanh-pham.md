---
title: "TỔNG QUAN NHẬP THÀNH PHẨM"
date: "2026-11-07"
summary: "Theo dõi các phiếu nhận thành phẩm từng đợt, liên kết lệnh sản xuất, kho nhận và phí gia công; từ phiếu đã lưu mở in phiếu hoặc tem kiện."
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

Theo dõi các phiếu nhận thành phẩm từng đợt, liên kết lệnh sản xuất, kho nhận và phí gia công; từ phiếu đã lưu mở in phiếu hoặc tem kiện.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có lệnh đúng giấy/keo còn phần cần nhận (Chưa nhập/Đang nhập hoặc chưa có trạng thái).
- Có biên bản thực nhận, kho nhận và đơn giá phí gia công; xác định nguồn nhân lực/đối tượng THCP nếu cần theo dõi.
- Kiểm tra ngày nhận thuộc kỳ được phép ghi nhận; không lấy ngày lệnh thay ngày thực nhận.
- Mở đúng địa chỉ hệ thống của chi nhánh, dùng tài khoản được cấp cho đơn vị đó.

## 2. Mở chức năng

**Sản xuất giấy → Nhập thành phẩm**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![NHẬP THÀNH PHẨM - DANH SÁCH — bộ lọc và danh sách theo kỳ đang chọn; chỉ xem.](/posts/2026-11-07-sx-a02-0-tong-quan-nhap-thanh-pham/ui-20261026-sx-a02-ds-overview.png)

Danh sách **Nhập thành phẩm**, chọn khoảng ngày nghiệp vụ rồi mở Xem đúng mã. Các cột dùng để đọc chứng từ đã lưu:

- **STT**: Ý nghĩa và cách dùng: Số thứ tự hiển thị theo trang danh sách.
- **Thao tác**: Ý nghĩa và cách dùng: Các liên kết xử lý từng chứng từ theo quyền; không phải trạng thái của hồ sơ.
- **Ngày nhập**: Ý nghĩa và cách dùng: Ngày ghi nhận phiếu nhận thành phẩm, độc lập ngày lệnh nguồn.
- **Mã phiếu**: Ý nghĩa và cách dùng: Mã riêng của chứng từ đã lưu; không phải mã lệnh nguồn.
- **Loại phiếu**: Ý nghĩa và cách dùng: GIAY hoặc KEO theo nghiệp vụ đã chọn khi lập lệnh/nhập thành phẩm.
- **Từ lệnh**: Ý nghĩa và cách dùng: Mã lệnh sản xuất liên kết với phiếu; mở Xem để đối chiếu chi tiết và kho.
- **Tên kho nhập**: Ý nghĩa và cách dùng: Kho thực nhận thành phẩm của đợt nhập; phân biệt với KHO GC và kho nhận lại vật tư.
- **Đơn vị gia công**: Ý nghĩa và cách dùng: Tên đơn vị thực hiện của chứng từ; dùng phân biệt các đợt có cùng hàng.
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

1. Chọn khoảng **Ngày nhập**, đối chiếu Mã phiếu, Loại phiếu và Từ lệnh để nhận diện đúng đợt nhận thành phẩm.
2. Kiểm tra Tên kho nhập và Đơn vị gia công; mở Xem để đối chiếu hàng, ĐVT, lượng nhận, phí gia công và đối tượng THCP từng dòng.
3. Đối chiếu các lần nhập cùng lệnh để theo dõi còn thiếu; không dùng tổng một phiếu thay tổng hoàn thành lệnh.
4. Lập đợt nhận mới theo [LẬP NHẬP THÀNH PHẨM](/bai-viet/2026-11-07-sx-a02-1-lap-nhap-thanh-pham/). In phiếu nhập hoặc tem kiện từ menu đúng dòng theo [IN PHIẾU NHẬP THÀNH PHẨM VÀ TEM KIỆN](/bai-viet/2026-11-07-sx-a02-2-in-phieu-nhap-thanh-pham-va-tem-kien/); hai lựa chọn cho hai đầu ra khác nhau.

## 6. Giải thích các thông tin trên màn hình

- **STT**: Ý nghĩa và cách dùng: Số thứ tự hiển thị theo trang danh sách.
- **Thao tác**: Ý nghĩa và cách dùng: Các liên kết xử lý từng chứng từ theo quyền; không phải trạng thái của hồ sơ.
- **Ngày nhập**: Ý nghĩa và cách dùng: Ngày ghi nhận phiếu nhận thành phẩm, độc lập ngày lệnh nguồn.
- **Mã phiếu**: Ý nghĩa và cách dùng: Mã riêng của chứng từ đã lưu; không phải mã lệnh nguồn.
- **Loại phiếu**: Ý nghĩa và cách dùng: GIAY hoặc KEO theo nghiệp vụ đã chọn khi lập lệnh/nhập thành phẩm.
- **Từ lệnh**: Ý nghĩa và cách dùng: Mã lệnh sản xuất liên kết với phiếu; mở Xem để đối chiếu chi tiết và kho.
- **Tên kho nhập**: Ý nghĩa và cách dùng: Kho thực nhận thành phẩm của đợt nhập; phân biệt với KHO GC và kho nhận lại vật tư.
- **Đơn vị gia công**: Ý nghĩa và cách dùng: Tên đơn vị thực hiện của chứng từ; dùng phân biệt các đợt có cùng hàng.
- **Ghi chú**: Ý nghĩa và cách dùng: Nội dung đã lưu tại đầu chứng từ, hỗ trợ nhận diện đợt sản xuất/giao nhận.
- **Người tạo**: Ý nghĩa và cách dùng: Tài khoản/người đã lập bản ghi, không mặc nhiên là người giao hàng.
- **Ngày tạo**: Ý nghĩa và cách dùng: Thời điểm hệ thống tạo bản ghi; khác ngày nghiệp vụ của phiếu.
- **Người sửa**: Ý nghĩa và cách dùng: Người cập nhật bản ghi gần nhất; không phải người duyệt.
- **Ngày sửa**: Ý nghĩa và cách dùng: Thời điểm cập nhật gần nhất, không thay ngày nghiệp vụ.

## 7. Kiểm tra sau khi thực hiện

Xác định đúng mã phiếu, lệnh nguồn, kho và chi tiết của đợt nhận thành phẩm để đối chiếu tiến độ hoặc in.

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

- **[LẬP NHẬP THÀNH PHẨM](/bai-viet/2026-11-07-sx-a02-1-lap-nhap-thanh-pham/)** — Lập nhập thành phẩm.
- **[IN PHIẾU NHẬP THÀNH PHẨM VÀ TEM KIỆN](/bai-viet/2026-11-07-sx-a02-2-in-phieu-nhap-thanh-pham-va-tem-kien/)** — In phiếu nhập thành phẩm và tem kiện.
