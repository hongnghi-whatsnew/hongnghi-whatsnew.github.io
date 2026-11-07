---
title: "TỔNG QUAN TỶ LỆ HÀNG LỖI"
date: "2026-11-07"
summary: "Đánh giá lượng lỗi của thành phẩm ván theo các phiếu yêu cầu trong khoảng ngày."
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

Đánh giá lượng lỗi của thành phẩm ván theo các phiếu yêu cầu trong khoảng ngày.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Biết khoảng ngày yêu cầu và thành phẩm cần rà. Chuẩn bị phiếu yêu cầu/nhập đạt/lỗi liên kết; nhất là yêu cầu nhập nhiều đợt hoặc chỉ có lỗi. Thống nhất cách đọc tỷ lệ trước so với chỉ tiêu chất lượng khác.
- hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; dùng đúng hệ thống của đơn vị, không chuyển chi nhánh trong cùng phiên.

## 2. Mở chức năng

**Thống kê sản xuất → Tỷ lệ hàng lỗi**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![THỐNG KÊ TÌNH HÌNH XUẤT KHO — chưa có dữ liệu theo bộ lọc, chỉ xem.](/posts/2026-11-07-sx-c04-0-tong-quan-ty-le-hang-loi/ui-20261026-sx-c04-ds-overview.png)

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

1. Chọn khoảng **ngày yêu cầu gia công** cần phân tích. Tìm đúng **Mã thành phẩm**, **Tên thành phẩm**; báo cáo gộp các yêu cầu theo thành phẩm gốc.
2. Đọc **SL Y/C**, **SL đã nhập**, **SL lỗi** trước đọc tỷ lệ. Xác định có yêu cầu nào nhập nhiều lần hoặc chỉ có hàng lỗi để chọn hồ sơ cần kiểm tra.
3. Truy từng yêu cầu và các phiếu nhập liên kết để đối chiếu lượng yêu cầu sau tất toán, lượng nhập và lỗi. Không cộng lại SL Y/C qua nhiều lần nhập của cùng yêu cầu khi tự lập bảng giải trình.
4. Đọc **Tỷ lệ lỗi** theo công thức ở phần “Giải thích các thông tin trên màn hình”. Nếu SL đã nhập bằng 0 hoặc âm, tỷ lệ lớn bất thường hoặc khác biểu đồ sản lượng, dừng kết luận chất lượng và đối chiếu số nhập/lỗi của từng phiếu.
5. Chỉ so giữa các thành phẩm/kỳ sau khi đã thống nhất mẫu số, phạm vi ngày yêu cầu và đơn vị. Báo cáo này không ghi sửa số lỗi hay điều chỉnh phiếu.

## 6. Giải thích các thông tin trên màn hình

- **Mã thành phẩm**: Ý nghĩa, phạm vi và cách kiểm tra: Mã thành phẩm gốc trên yêu cầu; mỗi dòng báo cáo gộp theo thành phẩm, không phải từng mã hàng lỗi.
- **Tên thành phẩm**: Ý nghĩa, phạm vi và cách kiểm tra: Tên tương ứng mã gốc dùng đối chiếu yêu cầu và các lần nhập đạt/lỗi.
- **SL Y/C**: Ý nghĩa, phạm vi và cách kiểm tra: Tổng (lượng yêu cầu − tất toán) từ các yêu cầu trong khoảng ngày. Nếu một dòng yêu cầu nhập nhiều lần, cần đối chiếu yêu cầu gốc trước dùng tổng này vì có thể bị tính lặp theo các lần nhập.
- **SL đã nhập**: Ý nghĩa, phạm vi và cách kiểm tra: Trong báo cáo này tính bằng tổng (số lượng trên dòng nhập − số lượng lỗi). Đây là cách tính riêng của báo cáo; không mặc định bằng SL đạt ở Biểu đồ sản lượng.
- **SL lỗi**: Ý nghĩa, phạm vi và cách kiểm tra: Tổng số lượng lỗi từ các chi tiết nhập liên kết các yêu cầu được chọn; không phải số loại lỗi hoặc tỷ lệ lỗi nhập tay.
- **Tỷ lệ lỗi**: Ý nghĩa, phạm vi và cách kiểm tra: SL lỗi chia SL đã nhập, làm tròn tỷ số 3 chữ số rồi hiển thị %. Khi SL đã nhập bằng 0, phép tính dùng mẫu số 1; tỷ lệ này phải đối chiếu nguồn, không dùng như tỷ lệ lỗi trên tổng sản xuất.

**Cách tính / ý nghĩa số liệu:**

SL Y/C = tổng (SL yêu cầu − SL tất toán) trên các dòng liên kết nhập. SL đã nhập = tổng (SL nhập − SL lỗi). SL lỗi = tổng lỗi trên các chi tiết nhập liên kết.

Tỷ lệ lỗi = làm tròn [SL lỗi / SL đã nhập] đến 3 chữ số thập phân, rồi hiển thị phần trăm. Nếu SL đã nhập = 0 thì mẫu số dùng 1. Ví dụ tỷ số 0,125 hiển thị 12,5%.

Ví dụ tính tay theo công thức báo cáo, **không phải kết quả kiểm tra thực tế ERP**: một dòng nhập có SL nhập 100 và SL lỗi 10 thì SL đã nhập của báo cáo = 90; tỷ số 10/90 làm tròn 0,111, hiển thị 11,1%. Không diễn giải thành 10% trên tổng 100. Nếu một dòng yêu cầu 100 được nhập hai đợt, tổng SL Y/C có thể lặp thành 200 do liên kết; đối chiếu đơn nguồn trước dùng tổng.

Không đổi mẫu số thành SL yêu cầu hoặc tổng sản lượng để giải thích con số đang hiển thị. Trường hợp một yêu cầu nhập nhiều lần, phải rà tổng yêu cầu gốc trước dùng SL Y/C làm căn cứ.

## 7. Kiểm tra sau khi thực hiện

Có số tổng hợp theo thành phẩm của các yêu cầu trong khoảng chọn và danh sách trường hợp cần giải trình. Chưa dùng tỷ lệ đơn lẻ làm kết luận chất lượng khi mẫu số 0/âm hoặc nhập nhiều lần chưa được đối chiếu.

## 8. Những điều cần lưu ý

⚠️ Bộ lọc theo ngày yêu cầu, không theo ngày lỗi phát sinh. Tỷ lệ có mẫu số riêng và quy tắc dùng 1 khi mẫu số 0; không hiểu tỷ lệ này là lỗi chia tổng sản lượng. Không cộng/ lấy trung bình cộng các tỷ lệ để ra tỷ lệ chung.

## 9. Vướng mắc thường gặp

Các tình huống đối chiếu:

- **Tỷ lệ lỗi rất cao khi SL đã nhập = 0**: báo cáo dùng mẫu số 1. Kiểm tra các dòng chỉ có lỗi/định nghĩa SL nhập trước dùng số %.
- **SL Y/C lớn hơn tổng yêu cầu gốc**: kiểm tra cùng yêu cầu đã có nhiều phiếu nhập; tổng có thể lặp theo liên kết.
- **Số khác SL Đạt của Biểu đồ sản lượng**: hai màn có phạm vi ngày và cách tính khác nhau; đối chiếu công thức từng màn và phiếu trước so.

## 10. Câu hỏi thường gặp

**Tỷ lệ lỗi có phải SL lỗi chia tổng sản lượng không?** Không. Màn này chia cho SL đã nhập theo công thức riêng ở phần “Giải thích các thông tin trên màn hình”.

**Lọc tháng này có chỉ lấy lỗi nhập trong tháng không?** Không. Khoảng chọn theo ngày yêu cầu, các nhập liên kết góp số liệu tiến độ của yêu cầu.

## 11. Công việc tiếp theo

Đối chiếu các chứng từ có chênh lệch và thống nhất với bộ phận kho/sản xuất/kế toán trước khi điều chỉnh.

## 12. Bài hướng dẫn liên quan

[TỔNG QUAN TỶ LỆ HÀNG LỖI](/bai-viet/2026-11-07-sx-c04-0-tong-quan-ty-le-hang-loi/) — Tỷ lệ hàng lỗi.

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
