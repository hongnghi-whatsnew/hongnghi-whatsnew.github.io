---
title: "TỔNG QUAN NHU CẦU NGUYÊN LIỆU CẦN"
date: "2026-11-07"
summary: "Đối chiếu nhu cầu sản xuất với tồn khả dụng và hàng chờ nhập để nhận biết nguyên liệu cần bổ sung."
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

Đối chiếu nhu cầu sản xuất với tồn khả dụng và hàng chờ nhập để nhận biết nguyên liệu cần bổ sung.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Biết mã/quy cách nguyên liệu cần rà và đơn đặt hàng còn chờ sản xuất; kiểm tra đúng hệ thống đơn vị. Chuẩn bị thông tin các lượng giữ và phiếu chờ nhập để giải trình chênh lệch tồn.
- hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; dùng đúng hệ thống của đơn vị, không chuyển chi nhánh trong cùng phiên.

## 2. Mở chức năng

**Thống kê sản xuất → Nhu cầu nguyên liệu cần**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![THỐNG KÊ - NHU CẦU NGUYÊN LIỆU — có dữ liệu và đã che vùng số liệu; chỉ xem.](/posts/2026-11-07-sx-c01-0-tong-quan-nhu-cau-nguyen-lieu-can/ui-20261026-sx-c01-ds-overview.png)

Các nhóm số liệu và điều khiển được giải thích ở phần “Giải thích các thông tin trên màn hình”. Các cột là thông tin đọc từ chứng từ, không nhập bù số trên báo cáo.

Ảnh đang ở backlog. Tìm/lọc/cột xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); chỉ xuất dữ liệu theo [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/) khi màn có nút và tài khoản có quyền.

## 4. Trình tự công việc

```text
Chốt nguồn và phạm vi báo cáo
       ↓
Kiểm tra mã hàng, đơn vị, ngày chứng từ
       ↓
Đọc các lượng/chỉ số theo phần “Giải thích các thông tin trên màn hình”
       ↓
Đối chiếu chứng từ nguồn và xử lý sai lệch
```

## 5. Thực hiện trên phần mềm

1. Xác định đúng hệ thống của đơn vị và thời điểm cần rà nhu cầu. Báo cáo phản ánh số hiện tại; không có bước chọn khoảng ngày để tái lập nhu cầu tại một ngày quá khứ.
2. Tìm đúng **Hàng hóa**, **Tiêu chuẩn**, **Dày**, **NCC**, **Loại hàng**. Khi nhiều quy cách gần giống, bật thêm Rộng/Dài/Đvt/Tấm-Kiện để kiểm tra trước đọc tồn.
3. So **SL cần sx** với **Tồn được xuất** và **SL còn thiếu**. Không dùng Tồn cuối làm lượng sẵn sàng cấp nếu đã có hàng giữ cho đơn khác/chuyển kho/gia công.
4. Đọc **Chờ nhập kho**, **Tồn dự kiến** để phân biệt phần đang chờ nhận với phần xuất được ngay. Một mã có tồn dự kiến đủ vẫn có thể còn thiếu so tồn xuất được hiện tại.
5. Truy lại đơn đặt hàng, phần đã yêu cầu/tất toán và chứng từ chờ nhập khi số nhu cầu hoặc tồn khác dự kiến. Sau khi nguồn được điều chỉnh, tải lại báo cáo để kiểm tra.
6. Khi chuyển kết quả cho người lập đề xuất, ghi thời điểm tải lại, mã/quy cách, Đvt, Tồn được xuất, SL cần sx, SL còn thiếu và chứng từ chờ nhận đã đối chiếu. Đây là số hiện tại, không phải chứng từ giữ chỗ hay lượng mua đã duyệt. Chỉ lập đề xuất mua/cấp vật tư sau khi chốt mã, đơn vị, nhu cầu và hàng chờ nhận. Nhóm **GỢI Ý** trống chưa đủ căn cứ quyết định lượng mua.

## 6. Giải thích các thông tin trên màn hình

- **Loại hàng hóa (ẩn mặc định)**: Ý nghĩa, phạm vi và cách kiểm tra: Chỉ đọc; phân loại của mã có nhu cầu, dùng tách hàng trơn và các nguyên liệu trước khi cộng số lượng.
- **Hàng hóa**: Ý nghĩa, phạm vi và cách kiểm tra: Tên mã hàng đang cần cho sản xuất theo đơn hàng còn chờ; danh sách bắt đầu từ nhu cầu, không phải toàn bộ hàng trong danh mục hoặc toàn bộ hàng tồn.
- **Tiêu chuẩn**: Ý nghĩa, phạm vi và cách kiểm tra: Tiêu chuẩn của mã hàng, dùng phân biệt cùng tên nhưng khác yêu cầu chất lượng.
- **Dày**: Ý nghĩa, phạm vi và cách kiểm tra: Độ dày theo hồ sơ hàng có nhu cầu; cần khớp vật tư dự kiến cấp/mua.
- **Rộng / Dài (ẩn mặc định)**: Ý nghĩa, phạm vi và cách kiểm tra: Kích thước của hàng có nhu cầu, bật cột khi cần phân biệt quy cách; không phải số lượng còn thiếu.
- **NCC**: Ý nghĩa, phạm vi và cách kiểm tra: Thông tin nhà cung cấp gắn với mã hàng, giúp phân biệt nguồn/nhãn hàng; không có nghĩa báo cáo đã chọn nhà cung cấp cho đơn mua mới.
- **Loại hàng**: Ý nghĩa, phạm vi và cách kiểm tra: Tên loại hàng chi tiết của mã có nhu cầu, khác Loại hàng hóa.
- **M3 (ẩn mặc định)**: Ý nghĩa, phạm vi và cách kiểm tra: Thuộc tính thể tích của mã hàng; không phải tổng M3 cần mua. Không đọc cột này như SL M3 ở nhóm GỢI Ý.
- **Tấm/Kiện (ẩn mặc định)**: Ý nghĩa, phạm vi và cách kiểm tra: Quy đổi tấm trên một kiện của mã hàng; phải có căn cứ quy đổi trước so số tấm với số kiện.
- **Đvt (ẩn mặc định)**: Ý nghĩa, phạm vi và cách kiểm tra: Đơn vị của mã hàng dùng đọc các lượng tồn/nhu cầu. Kiểm tra đơn vị trước cộng các dòng khác loại.
- **Tồn cuối**: Ý nghĩa, phạm vi và cách kiểm tra: Tổng tồn hiện tại của mã hàng trong đơn vị; là số hiện tại, không phải tồn tại cuối một kỳ ngày do người dùng chọn.
- **Tồn được xuất**: Ý nghĩa, phạm vi và cách kiểm tra: Tồn hiện tại sau trừ khách đặt, bán chưa xuất, giữ chuyển kho và giữ gia công. Không tự trừ các phần giữ này lần thứ hai.
- **SL cần sx**: Ý nghĩa, phạm vi và cách kiểm tra: Nhu cầu còn phải tổ chức sản xuất từ các dòng đơn hàng chưa hết: phần hàng trơn còn lại và nguyên liệu của yêu cầu theo định mức/số mặt. Phần đã tất toán/đã yêu cầu được loại theo số còn lại.
- **SL còn thiếu**: Ý nghĩa, phạm vi và cách kiểm tra: Lớn hơn giữa SL cần sx − Tồn được xuất và 0. Không trừ thêm Chờ nhập kho trong cột này.
- **Chờ nhập kho**: Ý nghĩa, phạm vi và cách kiểm tra: Lượng chờ nhập tổng hợp từ các nghiệp vụ kho của đơn vị; chưa phải hàng thực có để xuất.
- **Tồn dự kiến**: Ý nghĩa, phạm vi và cách kiểm tra: Tồn được xuất cộng Chờ nhập kho. Dùng xem dự kiến sau nhận hàng, không thay cho tồn xuất được ngay.
- **SL / SL M3 / SL Kiện — nhóm GỢI Ý**: Ý nghĩa, phạm vi và cách kiểm tra: Các cột gợi ý lượng mua theo số lượng, M3 và kiện. Hiện chưa có dữ liệu gợi ý được trả cho các cột này; ô trống không phải kết luận đề nghị mua bằng 0.

**Cách tính / ý nghĩa số liệu:**

Tồn được xuất = Tồn cuối − khách đặt − bán chưa xuất − giữ chuyển kho − giữ gia công.

Tồn dự kiến = Tồn được xuất + Chờ nhập kho. SL còn thiếu = max(SL cần sx − Tồn được xuất, 0).

Ví dụ tính tay, không phải kết quả kiểm tra thực tế ERP: cùng một mã/Đvt có Tồn cuối 100, tổng lượng giữ 30, SL cần sx 90 và Chờ nhập kho 40. Tồn được xuất = 70; SL còn thiếu = 20; Tồn dự kiến = 110. Hàng đang chờ nhận chưa cấp ngay được, vì vậy không đổi SL còn thiếu thành 0 chỉ vì tồn dự kiến đủ.

SL cần sx cộng phần hàng trơn còn chờ của đơn hàng với phần nguyên liệu theo định mức, số mặt và số yêu cầu còn lại. Không cộng thêm cùng một nhu cầu từ báo cáo đơn hàng nếu đã nằm trong số này.

## 7. Kiểm tra sau khi thực hiện

Xác định được nguyên liệu còn thiếu so tồn được xuất hiện tại, tách phần đang chờ nhập và phần cần xử lý nguồn/đề xuất bổ sung. Xem báo cáo không tự lập đơn mua hoặc phiếu xuất.

## 8. Những điều cần lưu ý

⚠️ Không dùng báo cáo này như ảnh chụp tồn quá khứ. Không cộng tổng khác đơn vị; nhóm GỢI Ý trống không có nghĩa không cần mua.

## 9. Vướng mắc thường gặp

Các tình huống đối chiếu:

- **Không thấy mã hàng đang có tồn**: danh sách chỉ lấy mã có nhu cầu còn chờ từ đơn hàng, không liệt kê toàn bộ kho. Rà phần tất toán/đã yêu cầu của đơn hàng.
- **Còn thiếu dù Tồn dự kiến đủ**: SL còn thiếu so với Tồn được xuất, chưa trừ lượng chờ nhập. Kiểm tra khả năng nhận hàng trước thời điểm cần cấp.
- **Nhóm GỢI Ý trống**: chưa có số gợi ý để đọc, không tự điền 0 hoặc coi là đề xuất mua đã được duyệt.

## 10. Câu hỏi thường gặp

**Có thể chọn tháng trước để xem nhu cầu tại cuối tháng không?** Màn này lấy dữ liệu hiện tại của đơn vị, không lọc một kỳ quá khứ.

**Vì sao Tồn cuối đủ mà vẫn thiếu?** Một phần tồn có thể đã giữ cho khách/chuyển kho/gia công; nhu cầu được so với Tồn được xuất.

## 11. Công việc tiếp theo

Đối chiếu các chứng từ có chênh lệch và thống nhất với bộ phận kho/sản xuất/kế toán trước khi điều chỉnh.

## 12. Bài hướng dẫn liên quan

- [LẬP YÊU CẦU GIA CÔNG TỪ PHIẾU ĐẶT HÀNG](/bai-viet/2026-11-07-sx-b02-5-lap-yeu-cau-gia-cong-tu-phieu-dat-hang/) — yêu cầu từ đơn đặt hàng
- [TỔNG QUAN PHIẾU XUẤT GIA CÔNG](/bai-viet/2026-11-07-sx-b01-0-tong-quan-phieu-xuat-gia-cong/) — hàng xuất đi gia công
- [TỔNG QUAN Y/C GIA CÔNG CHI TIẾT](/bai-viet/2026-11-07-sx-c03-0-tong-quan-y-c-gia-cong-chi-tiet/) — tiến độ yêu cầu gia công

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
