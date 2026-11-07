---
title: "TỔNG QUAN LỆNH SẢN XUẤT"
date: "2026-11-07"
summary: "Đọc danh sách lệnh giấy/keo và tiến độ nhận thành phẩm; từ một lệnh đi tới lập mới, tất toán hoặc phiếu đề nghị xuất nguyên liệu."
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

Đọc danh sách lệnh giấy/keo và tiến độ nhận thành phẩm; từ một lệnh đi tới lập mới, tất toán hoặc phiếu đề nghị xuất nguyên liệu.

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

![LỆNH SẢN XUẤT - DANH SÁCH — năm 2026 có lệnh Giấy/Keo và trạng thái Đã nhập; chỉ xem, người tạo đã che.](/posts/2026-11-07-sx-a01-0-tong-quan-lenh-san-xuat/ui-20261026-sx-a01-ds-overview.png)

![THÔNG TIN LỆNH SẢN XUẤT — xem lệnh SX00113077, thành phẩm và số lượng; đơn giá/chi phí đã che.](/posts/2026-11-07-sx-a01-0-tong-quan-lenh-san-xuat/ui-20261026-sx-a01-xem-view-order.png)

Danh sách **Lệnh sản xuất**, chọn khoảng ngày nghiệp vụ rồi mở Xem đúng mã. Các cột dùng để đọc chứng từ đã lưu:

- **STT**: Ý nghĩa và cách dùng: Số thứ tự hiển thị theo trang danh sách.
- **Thao tác**: Ý nghĩa và cách dùng: Các liên kết xử lý từng chứng từ theo quyền; không phải trạng thái của hồ sơ.
- **Ngày sản xuất**: Ý nghĩa và cách dùng: Ngày của lệnh sản xuất dùng khi lấy danh sách theo khoảng ngày.
- **Mã lệnh**: Ý nghĩa và cách dùng: Mã lệnh sản xuất đã lưu, dùng tìm lệnh nguồn ở các phiếu nhập/xuất.
- **Loại phiếu**: Ý nghĩa và cách dùng: GIAY hoặc KEO theo nghiệp vụ đã chọn khi lập lệnh/nhập thành phẩm.
- **Đơn vị gia công**: Ý nghĩa và cách dùng: Tên đơn vị thực hiện của chứng từ; dùng phân biệt các đợt có cùng hàng.
- **Trạng thái**: Ý nghĩa và cách dùng: Tiến độ nhận thành phẩm: Chưa nhập, Đang nhập, Đã nhập. Tính từ số đã nhập và phần còn thực hiện sau tất toán; không phải trạng thái duyệt.
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

1. Xác định khoảng **Ngày sản xuất**, tìm **Mã lệnh**, kiểm tra Loại phiếu GIAY/KEO và Đơn vị gia công.
2. Mở Xem để đọc từng thành phẩm, lượng yêu cầu, lượng đã nhập, phần tất toán và chi tiết nguyên liệu. Trạng thái đầu lệnh được tổng hợp từ tiến độ các dòng.
3. Khi cần lập lệnh giấy/keo mới, xem [LẬP LỆNH SẢN XUẤT GIẤY HOẶC KEO](/bai-viet/2026-11-07-sx-a01-1-lap-lenh-san-xuat-giay-hoac-keo/). Lệnh chưa nhận đủ nhưng không tiếp tục phần còn lại thì dùng Tất toán theo [TẤT TOÁN LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-2-tat-toan-lenh-san-xuat/).
4. Khi cần giấy đề nghị cấp nguyên liệu, dùng menu trên dòng **In phiếu xuất nguyên liệu** theo [IN PHIẾU XUẤT NGUYÊN LIỆU TỪ LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-3-in-phieu-xuat-nguyen-lieu-tu-lenh-san-xuat/). Bản in này khác phiếu xuất vật tư riêng của SX-A04.
5. Chỉ sửa lệnh theo luồng cập nhật khi còn **Chưa nhập**. Xóa yêu cầu đúng người tạo; nếu báo còn quan hệ hoặc sai trạng thái, đối chiếu phiếu nhập/vật tư trước xử lý.

## 6. Giải thích các thông tin trên màn hình

- **STT**: Ý nghĩa và cách dùng: Số thứ tự hiển thị theo trang danh sách.
- **Thao tác**: Ý nghĩa và cách dùng: Các liên kết xử lý từng chứng từ theo quyền; không phải trạng thái của hồ sơ.
- **Ngày sản xuất**: Ý nghĩa và cách dùng: Ngày của lệnh sản xuất dùng khi lấy danh sách theo khoảng ngày.
- **Mã lệnh**: Ý nghĩa và cách dùng: Mã lệnh sản xuất đã lưu, dùng tìm lệnh nguồn ở các phiếu nhập/xuất.
- **Loại phiếu**: Ý nghĩa và cách dùng: GIAY hoặc KEO theo nghiệp vụ đã chọn khi lập lệnh/nhập thành phẩm.
- **Đơn vị gia công**: Ý nghĩa và cách dùng: Tên đơn vị thực hiện của chứng từ; dùng phân biệt các đợt có cùng hàng.
- **Trạng thái**: Ý nghĩa và cách dùng: Tiến độ nhận thành phẩm: Chưa nhập, Đang nhập, Đã nhập. Tính từ số đã nhập và phần còn thực hiện sau tất toán; không phải trạng thái duyệt.
- **Ghi chú**: Ý nghĩa và cách dùng: Nội dung đã lưu tại đầu chứng từ, hỗ trợ nhận diện đợt sản xuất/giao nhận.
- **Người tạo**: Ý nghĩa và cách dùng: Tài khoản/người đã lập bản ghi, không mặc nhiên là người giao hàng.
- **Ngày tạo**: Ý nghĩa và cách dùng: Thời điểm hệ thống tạo bản ghi; khác ngày nghiệp vụ của phiếu.
- **Người sửa**: Ý nghĩa và cách dùng: Người cập nhật bản ghi gần nhất; không phải người duyệt.
- **Ngày sửa**: Ý nghĩa và cách dùng: Thời điểm cập nhật gần nhất, không thay ngày nghiệp vụ.

## 7. Kiểm tra sau khi thực hiện

Xác định được đúng lệnh và số còn thực hiện sau các lần nhận/tất toán; từ danh sách mở đúng bài lập, tất toán hoặc in để tiếp tục.

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

- **[LẬP LỆNH SẢN XUẤT GIẤY HOẶC KEO](/bai-viet/2026-11-07-sx-a01-1-lap-lenh-san-xuat-giay-hoac-keo/)** — Lập lệnh sản xuất giấy hoặc keo.
- **[TẤT TOÁN LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-2-tat-toan-lenh-san-xuat/)** — Tất toán lệnh sản xuất.
- **[IN PHIẾU XUẤT NGUYÊN LIỆU TỪ LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-3-in-phieu-xuat-nguyen-lieu-tu-lenh-san-xuat/)** — In phiếu xuất nguyên liệu từ lệnh sản xuất.
