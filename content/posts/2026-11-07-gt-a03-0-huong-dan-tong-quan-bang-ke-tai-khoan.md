---
title: "HƯỚNG DẪN TỔNG QUAN BẢNG KÊ TÀI KHOẢN"
date: "2026-11-07"
summary: "Đối chiếu chi phí đã ghi nhận, đã phân bổ và còn lại theo tài khoản."
module: "Giá thành"
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

Đối chiếu chi phí đã ghi nhận, đã phân bổ và còn lại theo tài khoản.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Xác định khoảng ngày bắt đầu các kỳ cần tra và đúng đơn vị. Có snapshot chi phí/giá thành của kỳ hoặc nguồn phát sinh để đối chiếu; biết đang dùng Chi tiết hay Gộp trước so tổng. Không cần tạo kết chuyển mới chỉ để xem báo cáo.

hệ thống chính thức mỗi chi nhánh có tên miền, cơ sở dữ liệu và tài khoản riêng; kiểm tra đúng hệ thống của đơn vị trước thao tác.

## 2. Mở chức năng

**Giá thành → Bảng kê tài khoản**

## 3. Nhận biết màn hình

Màn danh sách dùng để đối chiếu dữ liệu và mở các thao tác theo hồ sơ đã chọn.

Các nút chính của chức năng: Các nút tác nghiệp được mô tả tại phần “Thực hiện trên phần mềm”..

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin, bộ điều kiện hoặc thanh thao tác phía trên. Khung  khoanh bảng danh sách phía dưới.

![Hình 1: Bảng kê tài khoản tính giá thành, chế độ Chi tiết theo kỳ; số tiền đã che](/posts/2026-11-07-gt-a03-0-huong-dan-tong-quan-bang-ke-tai-khoan/hinh-01-gt-bang-ke.png)

## 4. Trình tự công việc

Chọn khoảng kỳ → Đọc Chi tiết theo kỳ → Xem phần phân bổ theo đối tượng → Đọc Gộp theo tài khoản → Đối chiếu nguồn và phần còn lại

## 5. Thực hiện trên phần mềm

1. Chọn khoảng ngày có kỳ tính giá thành cần đối chiếu.
2. Ở **Chi tiết theo kỳ**, đọc tài khoản và **Tồn cuối kỳ (chuyển kỳ sau)**; mở dòng để xem phân bổ theo đối tượng.
3. Chuyển **Gộp theo tài khoản** để đánh giá toàn khoảng ngày; đối chiếu **Tổng ghi nhận** và **Còn lại** với nguồn chi phí.
4. Dùng **Xuất Excel** hoặc **In** theo chế độ đang xem; thao tác xuất/in chung xem [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/), [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/).

## 6. Giải thích các thông tin trên màn hình

- **Kỳ**: Cách nhập / cách đọc và quy tắc: Chỉ đọc ở chế độ Chi tiết theo kỳ; nhóm dữ liệu theo kỳ tính giá thành. Bộ lọc khoảng ngày chọn kỳ theo ngày bắt đầu kỳ, không mặc định chọn tất cả kỳ giao với khoảng ngày.
- **Số tài khoản**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tài khoản chi phí đã ghi nhận/đưa vào giá thành. So đúng tài khoản chi tiết khi giải trình, không gộp 627 với các tài khoản con bằng tay.
- **Nội dung**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tên/nội dung tài khoản chi phí, không phải diễn giải một chứng từ cụ thể.
- **Tổng số tiền ghi nhận**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; ở Chi tiết gồm chi phí trực tiếp cộng số lớn hơn giữa phần quỹ chung của kỳ theo % phân bổ lần này và số chung thực tế đã phân bổ (để không làm số còn lại âm khi lệch snapshot/làm tròn); ở Gộp đọc nguồn phát sinh một lần trong khoảng ngày. Hai chế độ có cơ sở khác nhau.
- **Đã phân bổ**: Cách nhập / cách đọc và quy tắc: Chỉ đọc; tổng chi phí trực tiếp đã gắn THCP cộng chi phí chung thực tế phân bổ xuống THCP của tập kỳ chọn. Không chỉ riêng phần chi phí chung.
- **Tồn cuối kỳ (chuyển kỳ sau)**: Cách nhập / cách đọc và quy tắc: Chỉ đọc ở Chi tiết; phần chung của kỳ chưa phân bổ, tối thiểu 0. Không lấy toàn bộ quỹ chung nhân 100% rồi trừ nếu kỳ chỉ nhận một phần quỹ.
- **Mã đối tượng THCP**: Cách nhập / cách đọc và quy tắc: Chỉ đọc khi mở dòng tài khoản; đối tượng đã nhận chi phí của tài khoản đó.
- **Tên đối tượng THCP**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trong chi tiết; tên tương ứng đối tượng nhận chi phí, không phải tên hàng hóa.
- **Tỷ lệ (%)**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trong chi tiết theo kỳ; tỷ lệ phân bổ của đối tượng theo kết quả kỳ, không phải ô nhập lại tiêu thức phân bổ trên báo cáo.
- **Số tiền**: Cách nhập / cách đọc và quy tắc: Chỉ đọc trong chi tiết; chi phí tài khoản đã vào đối tượng. Đối chiếu tổng các đối tượng với Đã phân bổ của dòng tài khoản.
- **Còn lại**: Cách nhập / cách đọc và quy tắc: Chỉ đọc ở Gộp; phần chi phí nguồn còn chưa vào các kỳ thuộc phạm vi, không đồng nhất với cộng Tồn cuối kỳ của nhiều kỳ.
- **Tỷ trọng (%)**: Cách nhập / cách đọc và quy tắc: Chỉ đọc ở Gộp; số tiền đối tượng chia tổng Đã phân bổ của tài khoản nhân 100. Khác tỷ lệ phân bổ lần này của từng kỳ.

**Cách đọc hai chế độ:** Chi tiết theo kỳ dùng phần chi phí chung của kỳ theo tỷ lệ phân bổ lần này cộng phần trực tiếp; số chung chưa phân bổ hiển thị không âm. Gộp theo tài khoản đọc nguồn phát sinh một lần và đối chiếu chi phí đã vào các kỳ trong khoảng ngày. Không cộng các số tồn từng kỳ để thay cho Còn lại chế độ gộp.

## 7. Kiểm tra sau khi thực hiện

Có số liệu đối chiếu theo kỳ hoặc theo tài khoản, cùng chi tiết phân bổ cho đối tượng.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Không cộng cơ học tồn cuối nhiều kỳ vì có phần chi phí chuyển tiếp trùng; dùng chế độ Gộp cho toàn khoảng ngày.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

Các tình huống đối chiếu dưới đây chưa được chép như thông báo lỗi cố định:

- **Không thấy kỳ đã biết**: kiểm tra bộ lọc theo ngày bắt đầu kỳ và đúng đơn vị. Báo cáo không chỉ giới hạn kỳ đã kết chuyển; kỳ phải có snapshot chi phí tương ứng để có dòng số liệu.
- **Chi tiết và Gộp có số ghi nhận/còn lại khác nhau**: đối chiếu cơ sở hai chế độ ở phần “Giải thích các thông tin trên màn hình”. Không cộng phần tồn nhiều kỳ để ép khớp Còn lại chế độ gộp.

## 10. Câu hỏi thường gặp

**Vì sao cộng tồn từng kỳ khác Còn lại ở Gộp?** Chi tiết trình bày phần chi phí của từng kỳ; Gộp đọc nguồn gốc một lần trong khoảng ngày. Dùng Chi tiết để giải trình từng kỳ và Gộp để đối chiếu tổng phạm vi.

## 11. Công việc tiếp theo

Đối chiếu hồ sơ nguồn và chuyển kế toán phụ trách rà soát nếu số liệu không khớp.
