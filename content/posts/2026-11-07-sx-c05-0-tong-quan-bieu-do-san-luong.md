---
title: "TỔNG QUAN BIỂU ĐỒ SẢN LƯỢNG"
date: "2026-11-07"
summary: "So sánh sản lượng từ nhập gia công ván và nhập thành phẩm giấy/keo theo thời gian, hàng hóa, kho và các thuộc tính liên quan."
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

So sánh sản lượng từ nhập gia công ván và nhập thành phẩm giấy/keo theo thời gian, hàng hóa, kho và các thuộc tính liên quan. Cần tách nguồn/đơn vị trước so tổng.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có khoảng ngày nhập, tập hàng và đơn vị cần so sánh. Biết đang phân tích nhánh nhập ván hay giấy/keo để chọn khách hàng, số mặt, gia công thích hợp. Có báo cáo nhập chi tiết để đối chiếu một vài nhóm có biến động.
- hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; dùng đúng hệ thống của đơn vị, không chuyển chi nhánh trong cùng phiên.

## 2. Mở chức năng

**Thống kê sản xuất → Biểu đồ sản lượng**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![BIỂU ĐỒ SẢN LƯỢNG SẢN XUẤT — chưa có dữ liệu theo bộ lọc, chỉ xem.](/posts/2026-11-07-sx-c05-0-tong-quan-bieu-do-san-luong/ui-20261026-sx-c05-ds-filters.png)

Các nhóm số liệu và điều khiển được giải thích ở phần “Giải thích các thông tin trên màn hình”. Các cột là thông tin đọc từ chứng từ, không nhập bù số trên báo cáo.

Biểu đồ có bộ lọc, cách nhóm, chuỗi sản lượng và phân trang; không có nút xuất biểu đồ ở màn hiện tại. Ảnh đang ở backlog.

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

1. Chọn khoảng ngày nhập cần phân tích. Nếu so với yêu cầu gia công hoặc tỷ lệ lỗi, kiểm tra lại mốc ngày của hai màn vì biểu đồ lấy ngày nhập.
2. Chọn các bộ lọc khách hàng, hàng hóa, tiêu chuẩn, NCC, gia công, số mặt, kho gia công cần thiết. Kiểm tra tập lựa chọn sau áp dụng; các bộ lọc kết hợp cùng lúc nên có thể loại nhiều dữ liệu hơn dự kiến.
3. Chọn **Theo hàng hóa** khi cần phân biệt quy cách/đơn vị trước cộng sản lượng. Ở quy trình ván, Hàng hóa là hàng trơn đầu vào; ở giấy/keo là thành phẩm nhập. Không so trực tiếp tổng ván và kg giấy/keo như cùng đơn vị.
4. Chọn cách nhóm muốn phân tích. Với **Theo thời gian**, chọn **Ngày**, **Tuần**, **Tháng**, **Quý** hoặc **Năm**. Khi dùng Tuần, đọc nhãn tháng–tuần đang hiển thị, không ghép với tuần lịch khác quy ước.
5. Bật các chuỗi **SL Đạt**, **SL Lỗi**, **Sản Lượng** cần xem. Sản Lượng đã gồm hai phần đạt/lỗi; muốn xem phần lỗi phải bật SL Lỗi, không suy từ chuỗi mặc định.
6. Khi cần so theo chuỗi thời gian, ghi đúng nhãn kỳ và đối chiếu đủ các kỳ mong đợi; không mặc định nhóm không xuất hiện là sản lượng 0 hoặc các trang đã là một dãy thời gian đầy đủ theo thứ tự. Kiểm tra số nhóm mỗi trang và xem hết các trang của cùng bộ lọc. Một trang mặc định 12 nhóm không phải toàn bộ dữ liệu kỳ. Khi đổi bộ lọc mà trang hiện tại rỗng, quay trang đầu rồi kiểm tra lại.
7. Đối chiếu phiếu nhập chi tiết cùng ngày/hàng/kho trước kết luận biến động. Nhánh giấy không góp lỗi và không có khách hàng/số mặt/gia công như nhánh ván; bộ lọc theo các thuộc tính đó có thể làm thay đổi nguồn còn lại.

## 6. Giải thích các thông tin trên màn hình

- **Khoảng ngày**: Ý nghĩa, phạm vi và cách kiểm tra: Lọc theo ngày nhập gia công (ván) hoặc ngày nhập thành phẩm (giấy/keo). Mốc mặc định ban đầu là hôm nay; luôn đọc khoảng thực đang hiển thị vì có lưu lựa chọn.
- **Khách hàng**: Ý nghĩa, phạm vi và cách kiểm tra: Chọn nhiều khách hàng để giới hạn dữ liệu. Phần nhập giấy không có liên kết khách hàng trong báo cáo này nên có thể không nằm trong tập sau lọc khách cụ thể.
- **Hàng hóa**: Ý nghĩa, phạm vi và cách kiểm tra: Chọn mã/nhóm hàng để giữ cùng đơn vị khi so sản lượng. Với nhập gia công ván, nhóm theo hàng trơn đầu vào; với nhập giấy/keo, nhóm theo thành phẩm nhập.
- **Tiêu chuẩn / NCC**: Ý nghĩa, phạm vi và cách kiểm tra: Lọc theo thuộc tính của hàng hóa dùng cho biểu đồ; giúp so cùng tiêu chuẩn/nguồn hàng, không phải bộ chọn đơn vị gia công thuê ngoài.
- **Gia công / Số mặt**: Ý nghĩa, phạm vi và cách kiểm tra: Lọc theo yêu cầu gia công và số mặt của nhánh nhập gia công. Nhánh nhập giấy không có các thông tin này trong dữ liệu biểu đồ.
- **Kho gia công**: Ý nghĩa, phạm vi và cách kiểm tra: Lọc kho gia công trên phiếu nguồn. Không phải kho nhập thành phẩm hay kho chuyển đến sau đó.
- **Cách nhóm**: Ý nghĩa, phạm vi và cách kiểm tra: Theo khách hàng, thời gian, hàng hóa, tiêu chuẩn, ncc, số mặt, gia công hoặc kho gia công. Mặc định Theo thời gian; mỗi lựa chọn đổi ý nghĩa một nhóm/cột trên biểu đồ.
- **Ngày / Tuần / Tháng / Quý / Năm**: Ý nghĩa, phạm vi và cách kiểm tra: Chỉ hiện khi Theo thời gian, mặc định Tháng. Tuần hiển thị theo nhóm tuần trong tháng; không mặc định là số tuần ISO xuyên tháng.
- **SL Đạt**: Ý nghĩa, phạm vi và cách kiểm tra: Bật để hiện lượng đạt: nhánh ván lấy SL dòng nhập, nhánh giấy/keo lấy SL thành phẩm nhập. Bật/tắt chỉ đổi chuỗi nhìn thấy.
- **SL Lỗi**: Ý nghĩa, phạm vi và cách kiểm tra: Bật để hiện số lỗi từ nhập gia công ván. Nhánh nhập giấy/keo góp 0 vào chuỗi lỗi này, không chứng minh sản xuất giấy không có hao hụt.
- **Sản Lượng**: Ý nghĩa, phạm vi và cách kiểm tra: Bật để hiện SL Đạt + SL Lỗi; được bật mặc định, hai chuỗi đạt/lỗi ban đầu chưa bật. Không cộng lại cả ba chuỗi vì Sản Lượng đã gồm đạt và lỗi.
- **Số nhóm mỗi trang / phân trang**: Ý nghĩa, phạm vi và cách kiểm tra: Mặc định 12 nhóm, điều chỉnh từ 1 đến 53; phải xem các trang còn lại. Nhóm không theo thời gian được xếp giảm theo SL đạt, không phải luôn theo tổng Sản Lượng.

**Cách tính / ý nghĩa số liệu:**

Mỗi nhóm cộng SL Đạt và SL Lỗi của các phiếu nhập thuộc bộ lọc. Sản Lượng = SL Đạt + SL Lỗi. Nhập gia công ván góp lượng đạt và lỗi; nhập thành phẩm giấy/keo góp lượng nhập vào đạt và 0 vào lỗi.

Ví dụ tính tay cho cùng một nhóm, cùng Đvt và bộ lọc, không phải kiểm tra thực tế ERP: SL Đạt 80 và SL Lỗi 20 thì Sản Lượng 100. Cộng cả ba chuỗi sẽ thành 200 do đếm lặp; khi lập bảng giải trình chỉ dùng 100 hoặc hai phần 80 + 20.

Biểu đồ không quy đổi các đơn vị khác nhau thành một đơn vị chung. Nhóm ngoài thời gian được xếp giảm theo SL Đạt và phân trang; phải đọc hết các trang trước tổng hợp.

## 7. Kiểm tra sau khi thực hiện

Có biểu đồ theo một chiều phân tích và các chuỗi đã bật trong cùng bộ lọc. Đọc đủ các trang để xác định nhóm tăng/giảm; xem biểu đồ không đổi chứng từ, định mức hoặc giá.

## 8. Những điều cần lưu ý

⚠️ Không cộng ba chuỗi vì trùng phần Sản Lượng. Không dùng lỗi bằng 0 ở nhánh giấy để kết luận không có hao hụt. Màn hiện không có nút xuất biểu đồ; không áp dụng hướng dẫn Xuất Excel cho màn này.

## 9. Vướng mắc thường gặp

Các tình huống đối chiếu:

- **Biểu đồ rỗng sau lọc khách/gia công/số mặt**: rà các bộ lọc đang kết hợp; nhánh giấy không có các thuộc tính này. Thử bỏ từng điều kiện để xác định nguồn bị loại.
- **Chỉ có Sản Lượng, không thấy đạt/lỗi**: hai chuỗi còn chưa bật; đánh dấu SL Đạt/SL Lỗi khi muốn xem riêng.
- **Trang hiện tại trống sau đổi bộ lọc**: quay trang đầu và kiểm tra số nhóm còn lại.
- **Tổng khác báo cáo Tỷ lệ hàng lỗi**: kiểm tra ngày nhập so ngày yêu cầu và định nghĩa SL đạt/nhập của hai màn trước so số.

## 10. Câu hỏi thường gặp

**Sản Lượng có phải sản lượng đạt không?** Không. Sản Lượng gồm đạt cộng lỗi.

**Chọn Theo hàng hóa có gộp cùng thành phẩm ở mọi quy trình không?** Nhánh ván nhóm theo hàng trơn đầu vào; nhánh giấy nhóm theo thành phẩm nhập. Cần tách nguồn và đơn vị khi so.

## 11. Công việc tiếp theo

Đối chiếu các chứng từ có chênh lệch và thống nhất với bộ phận kho/sản xuất/kế toán trước khi điều chỉnh.

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN NHẬP GIA CÔNG CHI TIẾT](/bai-viet/2026-11-07-sx-c02-0-tong-quan-nhap-gia-cong-chi-tiet/) — đối chiếu nhập gia công ván
- [TỔNG QUAN NHẬP THÀNH PHẨM GIẤY](/bai-viet/2026-11-07-sx-c07-0-tong-quan-nhap-thanh-pham-giay/) — đối chiếu nhập giấy/keo
- [TỔNG QUAN TỶ LỆ HÀNG LỖI](/bai-viet/2026-11-07-sx-c04-0-tong-quan-ty-le-hang-loi/) — phân biệt tỷ lệ lỗi và phạm vi ngày

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
