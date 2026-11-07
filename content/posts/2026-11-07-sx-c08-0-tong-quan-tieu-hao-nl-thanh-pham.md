---
title: "TỔNG QUAN TIÊU HAO NL - THÀNH PHẨM"
date: "2026-11-07"
summary: "So sánh thành phẩm thực nhập trên một đơn vị nguyên liệu với định mức chuẩn để đánh giá năng suất."
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

So sánh thành phẩm thực nhập trên một đơn vị nguyên liệu với định mức chuẩn để đánh giá năng suất.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có phiếu nhập thành phẩm giấy/keo và nguyên liệu thực xuất liên kết trong khoảng cần rà. Có công thức định mức và đơn vị nguyên liệu/thành phẩm để đọc đúng chiều chỉ số. Không dùng báo cáo này thay bảng xuất vật tư toàn kho.
- hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; dùng đúng hệ thống của đơn vị, không chuyển chi nhánh trong cùng phiên.

## 2. Mở chức năng

**Thống kê sản xuất → Tiêu hao NL - thành phẩm**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![THỐNG KÊ TÌNH HÌNH TIÊU HAO NGUYÊN LIỆU - THÀNH PHẨM — chưa có dữ liệu theo bộ lọc, chỉ xem.](/posts/2026-11-07-sx-c08-0-tong-quan-tieu-hao-nl-thanh-pham/ui-20261026-sx-c08-ds-filters.png)

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

1. Chọn kỳ **ngày nhập thành phẩm**, sau đó chọn **Loại nguyên liệu**: Tất cả nguyên liệu (giấy + keo/hóa chất) hoặc Chỉ giấy nền. Nếu cần so toàn bộ vật tư xuất kho, phải đối chiếu thêm báo cáo vật tư vì màn này chỉ lấy nguyên liệu liên kết nhập thành phẩm.
2. Xác định từng cặp **Tên nguyên liệu – Tên thành phẩm**. Rà mã HN/NCC, định lượng, khổ rộng và hai cột Đvt trước so chỉ số; không đọc Định lượng như lượng đã tiêu hao.
3. Đối chiếu **Xuất trong kỳ** với nguyên liệu thực xuất của các phiếu nhập liên kết. Đối chiếu **Nhập trong kỳ** với sản lượng thành phẩm trong cùng ngày nhập.
4. Đọc **Chuẩn (BOM)** và **Thực tế (nhập kho)** theo chiều thành phẩm trên một đơn vị nguyên liệu. Ví dụ chỉ diễn giải tờ/kg nếu hai Đvt trên dòng đúng là tờ và kg.
5. Đọc **Chênh lệch** và **% Chênh lệch**: dương nghĩa năng suất cao hơn chuẩn, âm nghĩa thấp hơn. Nếu ô trống, rà định mức và lượng xuất mẫu số trước kết luận bằng 0 hoặc không tiêu hao.
6. Trước dùng **Chuẩn (BOM)** làm chuẩn nghiệp vụ, kiểm tra định mức của từng cặp thành phẩm–nguyên liệu và trạng thái kích hoạt. Hệ thống ưu tiên định mức kích hoạt nhưng có thể vẫn lấy định mức đã ngưng nếu không có lựa chọn ưu tiên hơn; không coi số Chuẩn xuất hiện là đã có định mức đang được duyệt.
7. Khi một thành phẩm có nhiều dòng nguyên liệu, không cộng lặp **Nhập trong kỳ** qua các dòng. Nếu kết quả khác dự kiến, kiểm tra định mức đang dùng, nguồn nguyên liệu thực xuất và tên/phân loại giấy nền; sửa nguồn theo quyền rồi tải lại báo cáo.

## 6. Giải thích các thông tin trên màn hình

- **Loại nguyên liệu**: Ý nghĩa, phạm vi và cách kiểm tra: Chọn Tất cả nguyên liệu (giấy + keo/hóa chất), mặc định, hoặc Chỉ giấy nền. Chỉ giấy nền là tập được hệ thống nhận diện từ thông tin tên hàng, cần rà tên nếu hàng giấy bị thiếu.
- **Khoảng ngày**: Ý nghĩa, phạm vi và cách kiểm tra: Kỳ ngày nhập thành phẩm liên kết nguyên liệu thực xuất; mặc định kỳ tháng đến hiện tại khi chưa có lựa chọn lưu. Không phải bộ lọc toàn bộ xuất vật tư trong kho theo ngày phiếu xuất.
- **Tên nguyên liệu**: Ý nghĩa, phạm vi và cách kiểm tra: Nguyên liệu thực xuất liên kết chi tiết nhập thành phẩm; mỗi dòng là một cặp nguyên liệu–thành phẩm trong kỳ.
- **Mã hàng HN**: Ý nghĩa, phạm vi và cách kiểm tra: Mã nội bộ nguyên liệu, thường hiển thị phần số bỏ tiền tố HN; không nhất thiết giống nguyên văn tên hàng.
- **Mã hàng NCC**: Ý nghĩa, phạm vi và cách kiểm tra: Mã phía nhà cung cấp được nhận diện từ tên/thông tin nguyên liệu, dùng phân biệt cùng mã HN nhưng khác nguồn.
- **Định lượng**: Ý nghĩa, phạm vi và cách kiểm tra: Định lượng của nguyên liệu, ưu tiên thông tin giấy trong tên, sau đó thuộc tính danh mục. Không phải lượng xuất trong kỳ.
- **Rộng**: Ý nghĩa, phạm vi và cách kiểm tra: Khổ rộng của nguyên liệu; với giấy nhận diện từ phần khổ trong tên hoặc thuộc tính danh mục, không phải chiều rộng của thành phẩm nhập.
- **Đvt — NGUYÊN LIỆU**: Ý nghĩa, phạm vi và cách kiểm tra: Đơn vị của nguyên liệu xuất dùng làm mẫu số các chỉ số năng suất; kiểm tra trước so với Đvt thành phẩm.
- **Xuất trong kỳ**: Ý nghĩa, phạm vi và cách kiểm tra: Tổng nguyên liệu thực xuất liên kết các chi tiết nhập trong kỳ, gộp theo cặp nguyên liệu–thành phẩm. Không phải toàn bộ lượng xuất kho của nguyên liệu cho mọi mục đích.
- **Tên thành phẩm**: Ý nghĩa, phạm vi và cách kiểm tra: Thành phẩm nhận trong kỳ gắn với nguyên liệu. Một thành phẩm dùng nhiều nguyên liệu sẽ có nhiều dòng.
- **Đvt — THÀNH PHẨM**: Ý nghĩa, phạm vi và cách kiểm tra: Đơn vị thành phẩm nhập, là tử số các chỉ số. Ví dụ tờ/kg chỉ đúng khi đơn vị thực tế là tờ và kg.
- **Nhập trong kỳ**: Ý nghĩa, phạm vi và cách kiểm tra: Tổng thành phẩm nhập của mã trong kỳ. Cùng số này có thể lặp lại ở nhiều dòng nguyên liệu; không cộng cột qua các nguyên liệu để tính tổng sản lượng.
- **Chuẩn (BOM)**: Ý nghĩa, phạm vi và cách kiểm tra: Sản lượng thành phẩm trên 1 Đvt nguyên liệu theo nghịch đảo định mức gốc. Thiếu định mức hoặc bằng 0 thì để trống, không hiểu là chuẩn bằng 0.
- **Thực tế (nhập kho)**: Ý nghĩa, phạm vi và cách kiểm tra: Nhập trong kỳ chia Xuất trong kỳ của cặp đang đọc; lượng xuất bằng 0 thì để trống. Là năng suất thành phẩm/nguyên liệu, không phải nguyên liệu cho 1 thành phẩm.
- **Chênh lệch (TT nhập kho − BOM)**: Ý nghĩa, phạm vi và cách kiểm tra: Thực tế trừ Chuẩn theo cùng đơn vị. Dương là nhiều thành phẩm hơn trên một đơn vị nguyên liệu; âm là ít hơn chuẩn.
- **% Chênh lệch (TT nhập kho − BOM)**: Ý nghĩa, phạm vi và cách kiểm tra: (Thực tế / Chuẩn − 1) × 100. Là phần trăm chênh so chuẩn, không phải tỷ lệ lỗi hoặc % hao hụt đã xuất kho; thiếu mẫu số/định mức thì trống.

**Cách tính / ý nghĩa số liệu:**

Chuẩn (BOM) = 1 / định mức nguyên liệu gốc cho một đơn vị thành phẩm.

Thực tế (nhập kho) = Nhập trong kỳ / Xuất trong kỳ. Chênh lệch = Thực tế − Chuẩn. % Chênh lệch = (Thực tế / Chuẩn − 1) × 100.

Thiếu định mức hoặc định mức bằng 0 thì Chuẩn/chênh lệch để trống; Xuất trong kỳ bằng 0 thì Thực tế/chênh lệch để trống. Cùng một sản lượng thành phẩm được dùng cho từng nguyên liệu của nó; không cộng lặp Nhập trong kỳ.

## 7. Kiểm tra sau khi thực hiện

Có lượng xuất liên kết và sản lượng nhận theo từng cặp nguyên liệu–thành phẩm, cùng chênh lệch năng suất so định mức. Tra cứu không điều chỉnh định mức, không tự xuất hao hụt hoặc chốt giá thành.

## 8. Những điều cần lưu ý

⚠️ Nếu cùng mã nguyên liệu/thành phẩm có nhiều Đvt ở nguồn, phải quy về cùng đơn vị khi lập bảng đối chiếu. Luồng tổng hợp cộng số lượng và chọn một Đvt hiển thị, không tự bảo đảm đã quy đổi mọi dòng khác đơn vị; dừng kết luận năng suất cho nhóm chưa thống nhất đơn vị.

⚠️ Các chỉ số theo chiều thành phẩm trên một đơn vị nguyên liệu. Chênh lệch dương là năng suất cao hơn chuẩn, không tự gọi là tăng hao hụt. Nhập trong kỳ lặp qua các nguyên liệu, chỉ cộng một lần theo thành phẩm khi lập bảng tổng.

## 9. Vướng mắc thường gặp

Các tình huống đối chiếu:

- **Không thấy giấy khi chọn Chỉ giấy nền**: chuyển Tất cả để tìm mã, kiểm tra tên/thuộc tính nguyên liệu trước kết luận thiếu xuất.
- **Chuẩn hoặc chênh lệch trống**: kiểm tra định mức của đúng cặp và lượng nguyên liệu xuất; ô trống không phải 0.
- **Xuất trong kỳ khác tổng xuất vật tư của kho**: báo cáo lấy nguyên liệu liên kết phiếu nhập trong kỳ ngày nhập, không lấy mọi mục đích xuất kho.
- **Tổng Nhập trong kỳ bị tăng khi cộng nhiều dòng**: loại phần lặp theo thành phẩm trước cộng, không sửa số nhập nguồn để khớp tổng cộng sai.

- **Chuẩn có số dù định mức đã ngưng**: kiểm từng cặp nguyên liệu/thành phẩm, trạng thái và thứ tự định mức. Nhờ người quản lý định mức xác nhận căn cứ; không sửa chứng từ để ép khớp chuẩn.
- **Nguồn cùng hàng nhưng khác Đvt**: đối chiếu riêng theo đơn vị và quy đổi được duyệt; nhãn Đvt trên báo cáo không chứng minh mọi lượng đã quy đổi.

## 10. Câu hỏi thường gặp

**Chênh lệch dương có nghĩa dùng thừa nguyên liệu không?** Không theo chiều đang hiển thị. Dương nghĩa nhiều thành phẩm hơn trên 1 Đvt nguyên liệu so chuẩn.

**Một thành phẩm dùng ba nguyên liệu có được cộng Nhập trong kỳ cả ba dòng không?** Không. Sản lượng có thể lặp ở từng nguyên liệu, chỉ tính một lần theo thành phẩm.

## 11. Công việc tiếp theo

Đối chiếu các chứng từ có chênh lệch và thống nhất với bộ phận kho/sản xuất/kế toán trước khi điều chỉnh.

## 12. Bài hướng dẫn liên quan

[TỔNG QUAN TIÊU HAO NL - THÀNH PHẨM](/bai-viet/2026-11-07-sx-c08-0-tong-quan-tieu-hao-nl-thanh-pham/) — Tiêu hao NL - thành phẩm.

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
