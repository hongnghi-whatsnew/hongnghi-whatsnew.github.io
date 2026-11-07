---
title: "TỔNG QUAN LỆNH SẢN XUẤT GIẤY"
date: "2026-11-07"
summary: "Theo dõi các dòng lệnh sản xuất giấy/keo, số yêu cầu, tất toán, đã nhập, chưa nhập và chi phí."
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

Theo dõi các dòng lệnh sản xuất giấy/keo, số yêu cầu, tất toán, đã nhập, chưa nhập và chi phí.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Biết khoảng ngày lệnh, mã lệnh và loại giấy/keo cần rà. Có phiếu nhập thành phẩm liên kết và thông tin quy đổi của dòng để giải trình tiến độ; thống nhất đơn vị trước cộng lượng.
- hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; dùng đúng hệ thống của đơn vị, không chuyển chi nhánh trong cùng phiên.

## 2. Mở chức năng

**Thống kê sản xuất → Lệnh sản xuất giấy**

## 3. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![THỐNG KÊ - CHI TIẾT LỆNH SẢN XUẤT — chưa có dữ liệu theo bộ lọc, chỉ xem.](/posts/2026-11-07-sx-c06-0-tong-quan-lenh-san-xuat-giay/ui-20261026-sx-c06-ds-overview.png)

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

1. Chọn khoảng **ngày sản xuất trên lệnh**, tìm **Mã lệnh** cần theo dõi. Tách **Loại phiếu** giấy/keo trước tổng hợp; đối chiếu kho xuất, kho gia công và đơn vị gia công.
2. Rà từng **Thành phẩm**, **Đvt**, **Số lượng Y/c**. Một lệnh nhiều dòng không phải nhiều lệnh riêng; dùng mã lệnh và thành phẩm để đối chiếu.
3. Đọc **SL Tất toán**, **SL Đã nhập**, **SL Chưa nhập**. Phần tất toán là ngừng thực hiện, không tính như lượng thành phẩm đã nhập.
4. So **Trạng thái** với lượng còn phải làm sau tất toán và các phiếu nhập liên kết. Nếu có đơn vị quy đổi, kiểm tra quy đổi của lệnh/phiếu nhập trước kết luận số Chưa nhập sai hoặc nhập vượt.
5. Đối chiếu **Đơn giá**, **Chi phí** theo dòng lệnh với chứng từ lệnh; không dùng cột Chi phí để thay giá vốn thực tế của thành phẩm đã nhận.
6. Ghi mã lệnh/dòng còn chờ hoặc có sai lệch để xử lý tại chứng từ nguồn; tải lại báo cáo sau điều chỉnh. Báo cáo không thực hiện tất toán hoặc sửa lệnh ngay trên bảng.

## 6. Giải thích các thông tin trên màn hình

- **Ngày phát sinh**: Ý nghĩa, phạm vi và cách kiểm tra: Ngày sản xuất trên lệnh; khoảng ngày báo cáo lọc theo ngày lệnh, không theo ngày nhập thành phẩm.
- **Mã lệnh**: Ý nghĩa, phạm vi và cách kiểm tra: Mã lệnh sản xuất giấy/keo. Một lệnh có nhiều dòng thành phẩm, vì vậy số dòng không bằng số lệnh.
- **Loại phiếu**: Ý nghĩa, phạm vi và cách kiểm tra: Phân loại giấy/keo của lệnh; tên menu có chữ giấy nhưng phải tách Loại phiếu và Đvt trước cộng lượng.
- **Kho gia công**: Ý nghĩa, phạm vi và cách kiểm tra: Kho theo dõi quá trình gia công/sản xuất trên lệnh.
- **Kho xuất**: Ý nghĩa, phạm vi và cách kiểm tra: Kho vật tư nguồn của lệnh, khác kho gia công và kho nhận thành phẩm.
- **Đơn vị gia công**: Ý nghĩa, phạm vi và cách kiểm tra: Đơn vị thực hiện trên lệnh; dùng phân nhóm trách nhiệm, không tự suy là kho nhận thành phẩm.
- **Lý do sản xuất**: Ý nghĩa, phạm vi và cách kiểm tra: Ghi chú chung của lệnh, dùng giải trình mục đích sản xuất.
- **Thành phẩm**: Ý nghĩa, phạm vi và cách kiểm tra: Tên thành phẩm của từng dòng lệnh; cùng mã lệnh có thể nhiều thành phẩm.
- **Đvt**: Ý nghĩa, phạm vi và cách kiểm tra: Đơn vị dòng lệnh. Nếu phiếu nhập dùng quy đổi khác, phải kiểm tra quy đổi trước so các số tiến độ.
- **Số lượng Y/c**: Ý nghĩa, phạm vi và cách kiểm tra: Lượng dự kiến sản xuất của dòng lệnh trước tất toán.
- **SL Tất toán**: Ý nghĩa, phạm vi và cách kiểm tra: Phần không tiếp tục sản xuất của dòng lệnh, làm giảm lượng phải hoàn thành; không phải lượng đã nhận hoặc tiền đã thanh toán.
- **SL Đã nhập**: Ý nghĩa, phạm vi và cách kiểm tra: Tổng lượng thực nhập liên kết dòng lệnh được cập nhật từ phiếu nhập, gồm các lần nhập của lệnh.
- **SL Chưa nhập**: Ý nghĩa, phạm vi và cách kiểm tra: Số lượng Y/c − SL Tất toán − SL Đã nhập; các số trống tính 0. Báo cáo không ép về 0; cần rà đơn vị/quy đổi nếu khác tiến độ trạng thái.
- **Trạng thái**: Ý nghĩa, phạm vi và cách kiểm tra: Trạng thái nhập của từng dòng lệnh: Chưa nhập, Đang nhập hoặc Đã nhập. Đã nhập khi lượng nhận đạt lượng còn phải làm sau tất toán theo quy đổi của dòng; không có nghĩa đã kết chuyển giá thành.
- **Đơn giá**: Ý nghĩa, phạm vi và cách kiểm tra: Giá ghi trên dòng lệnh sản xuất, dùng đối chiếu chi phí dự kiến; không tự hiểu là đơn giá vốn chính thức.
- **Chi phí**: Ý nghĩa, phạm vi và cách kiểm tra: Thành tiền được ghi ở dòng lệnh; báo cáo đọc giá trị có sẵn, không tự tính lại chi phí từ lượng thực nhập.
- **Chú thích**: Ý nghĩa, phạm vi và cách kiểm tra: Diễn giải riêng của dòng thành phẩm, khác Lý do sản xuất chung của lệnh.
- **Người tạo / Thời gian tạo**: Ý nghĩa, phạm vi và cách kiểm tra: Người lập và thời điểm tạo lệnh, không phải người vận chuyển hay ngày lọc tiến độ.

**Cách tính / ý nghĩa số liệu:**

SL Chưa nhập = (Số lượng Y/c hoặc 0) − (SL Tất toán hoặc 0) − (SL Đã nhập hoặc 0).

Trạng thái nhập dùng lượng còn phải thực hiện sau tất toán có tính quy đổi của dòng: nếu còn lượng phải nhận và chưa có nhận thì Chưa nhập; đã nhận một phần thì Đang nhập; đã đạt lượng cần nhận thì Đã nhập. Trường hợp tất toán hết có thể là Đã nhập dù không có nhận thêm. Phép trừ hiển thị Chưa nhập không tự nhân tỷ lệ quy đổi, nên phải rà đơn vị khi so với trạng thái.

Ví dụ tính tay để đọc sự khác nhau, không phải kiểm tra thực tế ERP: lệnh yêu cầu 100, tất toán 10, tỷ lệ quy đổi 2, đã nhập 180. Ngưỡng trạng thái là (100 − 10) × 2 = 180 nên có thể **Đã nhập**, trong khi cột SL Chưa nhập trừ trực tiếp 100 − 10 − 180 = −90. Không sửa lượng hoặc tất toán chỉ để ép cột về 0; đối chiếu hai Đvt và quy đổi với người phụ trách.

Chi phí lấy từ giá trị trên dòng lệnh, không phải phép tính lại trên báo cáo từ số thực nhập.

## 7. Kiểm tra sau khi thực hiện

Có danh sách dòng lệnh và lượng còn chờ nhập sau tất toán để theo dõi. Xác định được các lệnh cần xử lý nguồn hoặc nhập tiếp; tra cứu không thay đổi lệnh/phiếu nhập/giá.

## 8. Những điều cần lưu ý

⚠️ Ngày lệnh và ngày nhập có thể khác kỳ. Trạng thái Đã nhập là tiến độ lượng, không phải trạng thái tính hoặc kết chuyển giá thành. Nếu dùng quy đổi khác 1, số Chưa nhập và trạng thái phải được giải trình bằng chứng từ.

## 9. Vướng mắc thường gặp

Các tình huống đối chiếu:

- **Đã nhập nhưng SL Chưa nhập khác 0**: kiểm tra tỷ lệ quy đổi và đơn vị; trạng thái xét lượng đã quy đổi trong khi cột còn lại trừ lượng trực tiếp.
- **Không thấy lệnh có nhập trong kỳ**: bộ lọc lấy ngày lệnh; tìm ngày lệnh nguồn, không chỉ ngày nhập.
- **Tổng lượng lớn do gộp giấy/keo**: tách Loại phiếu và Đvt, không cộng các đơn vị khác nhau.

## 10. Câu hỏi thường gặp

**Đã nhập có nghĩa đã tính giá thành chưa?** Không. Đây là tiến độ nhận thành phẩm của dòng lệnh.

**SL Tất toán có cộng vào SL Đã nhập không?** Không. Tất toán giảm phần phải tiếp tục thực hiện, được đọc riêng với lượng nhập.

## 11. Công việc tiếp theo

Đối chiếu các chứng từ có chênh lệch và thống nhất với bộ phận kho/sản xuất/kế toán trước khi điều chỉnh.

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-0-tong-quan-lenh-san-xuat/) — lệnh sản xuất nguồn
- [TẤT TOÁN LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-2-tat-toan-lenh-san-xuat/) — tất toán lệnh
- [TỔNG QUAN NHẬP THÀNH PHẨM GIẤY](/bai-viet/2026-11-07-sx-c07-0-tong-quan-nhap-thanh-pham-giay/) — các lần nhập thành phẩm giấy/keo

Liên hệ nghiệp vụ: SX-A01–SX-A05 cho giấy/keo; SX-B01–SX-B03 cho ván; SX-C01–SX-C08 để đối chiếu tiến độ, sản lượng và tiêu hao.
