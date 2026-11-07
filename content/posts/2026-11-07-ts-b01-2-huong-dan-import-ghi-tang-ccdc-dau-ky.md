---
title: "HƯỚNG DẪN IMPORT GHI TĂNG CCDC ĐẦU KỲ"
date: "2026-11-07"
summary: "Nhập CCDC đầu kỳ từ mẫu và kiểm tra giá trị đã phân bổ trước khi chuyển sang vận hành."
module: "Tài sản và CCDC"
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

Nhập CCDC đầu kỳ từ mẫu và kiểm tra giá trị đã phân bổ trước khi chuyển sang vận hành.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: nhập CCDC đầu kỳ từ mẫu và kiểm tra giá trị đã phân bổ trước khi chuyển sang vận hành.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Danh sách CCDC**

## 3. Nhận biết màn hình

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Danh mục**, **Ghi tăng**, **Import ghi tăng**, **Xem**, **Chọn file Excel**, **Tải file mẫu**, **Hủy**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin và bảng chi tiết của cửa sổ. Khung  khoanh các nút ở cuối cửa sổ.

![Hình 1: Import CCDC đầu kỳ trước khi chọn file](/posts/2026-11-07-ts-b01-2-huong-dan-import-ghi-tang-ccdc-dau-ky/hinh-01-ccdc-import.png)

## 4. Trình tự công việc

Tải mẫu CCDC đầu kỳ → Chuẩn bị mã mới/mã trùng và số dư → Nạp/rà cột lưu và cột chỉ xem → Import → Đọc kết quả → Đối chiếu từng mã

## 5. Thực hiện trên phần mềm

1. Tải **file mẫu** của import CCDC; giữ hàng tiêu đề và nhập mỗi hồ sơ một dòng theo bảng phần “Giải thích các thông tin trên màn hình”. Xóa dòng ví dụ trước nạp. Mẫu cho một đối tượng phân bổ trên mỗi dòng, không dùng nhiều dòng cùng mã để biểu diễn nhiều đối tượng.
2. Kiểm tra mã/tên bắt buộc, số dư gốc/đã phân bổ, số kỳ và tài khoản. Các cột còn lại chỉ để bảng xem trước nêu ở phần “Giải thích các thông tin trên màn hình” không quyết định số lưu. Không bỏ trống trường cũ với ý định “giữ nguyên” khi import cập nhật vì các giá trị mặc định có thể ghi đè.
3. Chọn file Excel, đối chiếu bản xem trước và sửa ô cần thiết. Thiếu tiêu đề mã/tên thì file bị từ chối; thiếu mã/tên tại dòng thì dòng đó không được gửi. Chỉ số dòng hợp lệ chỉ kiểm tra mã/tên, chưa bảo đảm mọi số liệu nghiệp vụ đúng.
4. Kiểm tra mã trùng trước **Import**: mã chưa có tạo hồ sơ và phiếu ghi tăng; mã đang có cập nhật hồ sơ theo mã. Nếu file có thiết lập phân bổ, thiết lập cũ của phiếu ghi tăng mới nhất bị thay bằng thiết lập gửi lên; nếu không có thiết lập thì không xóa thiết lập cũ. Dòng trùng mã trong chính file được xử lý lần lượt, không được gộp các đối tượng.
5. Đọc tổng **tạo / cập nhật / bỏ qua / lỗi**. Dòng lỗi có thể tồn tại cùng kết quả của những dòng khác; không coi cả file thành công khi lỗi > 0. Giao diện hiện tổng đếm rồi đóng, chưa có bảng lỗi chi tiết theo dòng trong luồng hiện tại. Giữ file nguồn và liên hệ người phụ trách để xác định dòng lỗi trước nạp lại, tránh ghi đè lại những dòng đã đúng.
6. Đối chiếu từng nhóm mã mới/mã cập nhật trên danh sách và hồ sơ, nhất là số dư còn lại, số kỳ, tài khoản và thiết lập nhận chi phí. Không coi import là thao tác tạo các phiếu phân bổ lịch sử.

## 6. Giải thích các thông tin trên màn hình

- **Mã CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Bắt buộc, kiểu chữ; khóa đối chiếu để tạo mới hoặc cập nhật hồ sơ đang tồn tại.
- **Tên CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Bắt buộc, kiểu chữ; tên được ghi đè khi cập nhật trùng mã.
- **Loại CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Chữ; tên loại lưu trên công cụ. Không tự tạo danh mục loại qua cột này.
- **Nhóm CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Chữ; nhóm quản lý công cụ, có thể trống.
- **Ngày ghi tăng**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày Excel hoặc dd/MM/yyyy; trống/không đọc được thì yêu cầu gửi dùng ngày hiện tại. Đồng thời làm ngày bắt đầu phân bổ khi import.
- **Giá trị CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Số nguyên giá trị gốc; phải nhập đầy đủ vì file mẫu không có cột Đơn giá để tính thay.
- **Giá trị đã phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Số dư đã phân bổ đầu kỳ; trống được đọc thành 0.
- **Giá trị còn lại**: Ý nghĩa, cách nhập hoặc đối chiếu: Cột có trong file/xem trước nhưng không gửi khi lưu; hồ sơ tính từ Giá trị CCDC − Giá trị đã phân bổ.
- **ĐVT**: Ý nghĩa, cách nhập hoặc đối chiếu: Chữ; đơn vị tính của CCDC, có thể trống.
- **Số lượng ghi tăng**: Ý nghĩa, cách nhập hoặc đối chiếu: Số lượng công cụ; trống hoặc 0 được thay bằng 1 khi gửi.
- **Số lượng ghi giảm**: Ý nghĩa, cách nhập hoặc đối chiếu: Có trong file/xem trước nhưng không được gửi vào yêu cầu ghi tăng; không tạo phiếu ghi giảm.
- **Số lượng còn lại**: Ý nghĩa, cách nhập hoặc đối chiếu: Có trong file/xem trước nhưng không được gửi; không dùng cột này thay Số lượng ghi tăng.
- **Số kỳ phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Số nguyên; trống được đọc thành 0. Mức phân bổ kỳ được hệ thống tính giá trị / số kỳ nếu số kỳ > 0.
- **Số kỳ phân bổ còn lại**: Ý nghĩa, cách nhập hoặc đối chiếu: Có trong file/xem trước nhưng không được gửi; không thay thế Số kỳ phân bổ.
- **TK chờ phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Chữ, để trống dùng 242; giữ mã tài khoản dưới dạng text trong Excel.
- **Lý do ghi tăng**: Ý nghĩa, cách nhập hoặc đối chiếu: Chữ; trống dùng “Khai báo đầu kỳ”.
- **Mã đối tượng (PB)**: Ý nghĩa, cách nhập hoặc đối chiếu: Chữ; mã THCP cho một dòng thiết lập phân bổ của hồ sơ. Import không tra cứu/tự điền tên từ mã.
- **Tên đối tượng (PB)**: Ý nghĩa, cách nhập hoặc đối chiếu: Chữ; tên bên nhận chi phí, nhập kèm mã nếu có sử dụng THCP.
- **Tỷ lệ phân bổ (%)**: Ý nghĩa, cách nhập hoặc đối chiếu: Số; nếu có thiết lập phân bổ mà tỷ lệ trống/0 thì dùng 100%. Một dòng Excel chỉ gửi một đối tượng phân bổ.
- **TK chi phí (PB)**: Ý nghĩa, cách nhập hoặc đối chiếu: Chữ; tài khoản Nợ nhận chi phí khi tính phân bổ, không phải TK chờ phân bổ.
- **Khoản mục chi phí**: Ý nghĩa, cách nhập hoặc đối chiếu: Chữ; thông tin khoản mục lưu cùng thiết lập, có thể trống.
- **Mã thống kê**: Ý nghĩa, cách nhập hoặc đối chiếu: Chữ; thông tin thống kê lưu cùng thiết lập, có thể trống.

Các cột số nên nhập bằng giá trị số Excel, không dùng chuỗi có phân cách thập phân mơ hồ; bộ đọc bỏ ký tự ngoài chữ số, dấu chấm và dấu trừ nên có thể đọc sai chuỗi tiền định dạng theo địa phương. Dùng đúng file mẫu, giữ mã có số 0 đầu ở dạng text. Dòng trống toàn bộ bị bỏ; hàng đầu tiên là tiêu đề.

## 7. Kiểm tra sau khi thực hiện

Có tổng số hồ sơ tạo mới, cập nhật, bỏ qua và lỗi. Mã mới có hồ sơ/phiếu ghi tăng; mã trùng cập nhật hồ sơ hiện có. Số còn lại được tính từ giá trị gốc trừ số đã phân bổ đầu kỳ; chỉ chấp nhận kết quả sau đối chiếu từng mã và số dư với file nguồn.

## 8. Những điều cần lưu ý

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Không tìm thấy cột mã/tên**: Cách xử lý: Dùng lại đúng file mẫu, đặt tiêu đề ở hàng đầu; không chỉ đổi tên file.
- **Không có dòng hợp lệ**: Cách xử lý: Nhập đủ mã và tên, kiểm tra các dòng bị lọc khỏi payload.
- **Số tạo/cập nhật khác số dòng file**: Cách xử lý: Loại dòng trống/thiếu mã tên, tách mã mới và mã trùng để đối chiếu.
- **Kết quả có lỗi > 0**: Cách xử lý: Chưa xem cả file là hoàn tất; kiểm tra hồ sơ đã lưu và tìm dòng lỗi trước nạp lại. UI hiện chưa có bảng Errors chi tiết.
- **Số còn lại sau lưu khác ô file**: Cách xử lý: Ô còn lại không gửi; kiểm tra giá trị gốc và số đã phân bổ là hai đầu vào thật.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN DANH SÁCH CCDC](/bai-viet/2026-11-07-ts-b01-0-huong-dan-tong-quan-danh-sach-ccdc/)** — Tổng quan Danh sách CCDC.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN DANH SÁCH CCDC](/bai-viet/2026-11-07-ts-b01-0-huong-dan-tong-quan-danh-sach-ccdc/)** — Tổng quan Danh sách CCDC.
- **[HƯỚNG DẪN GHI TĂNG CÔNG CỤ DỤNG CỤ](/bai-viet/2026-11-07-ts-b01-1-huong-dan-ghi-tang-cong-cu-dung-cu/)** — Ghi tăng công cụ dụng cụ.
