---
title: "HƯỚNG DẪN IMPORT GHI TĂNG CHI PHÍ TRẢ TRƯỚC"
date: "2026-11-07"
summary: "Nạp hồ sơ chi phí trả trước từ mẫu Excel với số dư và thời gian phân bổ đã đối chiếu."
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

Nạp hồ sơ chi phí trả trước từ mẫu Excel với số dư và thời gian phân bổ đã đối chiếu.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: nạp hồ sơ chi phí trả trước từ mẫu Excel với số dư và thời gian phân bổ đã đối chiếu.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Chi phí trả trước**

## 3. Nhận biết màn hình

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Import ghi tăng**, **Thêm chi phí trả trước**, **Xem**, **Tính phân bổ**, **Ghi giảm**, **Xóa**, **Chọn file Excel**, **Tải file mẫu**, **Hủy**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin và bảng chi tiết của cửa sổ. Khung  khoanh các nút ở cuối cửa sổ.

![Hình 1: Import chi phí trả trước trước khi chọn file](/posts/2026-11-07-ts-b05-4-huong-dan-import-ghi-tang-chi-phi-tra-truoc/hinh-01-cptt-import.png)

## 4. Trình tự công việc

Tải mẫu chi phí trả trước → Chuẩn bị mã mới/mã cập nhật và số dư → Nạp/rà bảng xem trước → Import → Đọc kết quả → Đối chiếu hồ sơ

## 5. Thực hiện trên phần mềm

1. Tải **file mẫu** của import chi phí trả trước; giữ hàng tiêu đề và nhập mỗi hồ sơ một dòng theo bảng phần “Giải thích các thông tin trên màn hình”. Xóa dòng ví dụ trước nạp. Mẫu cho một đối tượng phân bổ trên mỗi dòng, không dùng nhiều dòng cùng mã để biểu diễn nhiều đối tượng.
2. Kiểm tra mã/tên bắt buộc, số dư gốc/đã phân bổ, số kỳ và tài khoản. Các cột còn lại chỉ để bảng xem trước nêu ở phần “Giải thích các thông tin trên màn hình” không quyết định số lưu. Không bỏ trống trường cũ với ý định “giữ nguyên” khi import cập nhật vì các giá trị mặc định có thể ghi đè.
3. Chọn file Excel, đối chiếu bản xem trước và sửa ô cần thiết. Thiếu tiêu đề mã/tên thì file bị từ chối; thiếu mã/tên tại dòng thì dòng đó không được gửi. Chỉ số dòng hợp lệ chỉ kiểm tra mã/tên, chưa bảo đảm mọi số liệu nghiệp vụ đúng.
4. Kiểm tra mã trùng trước **Import**: mã chưa có tạo hồ sơ và phiếu ghi tăng; mã đang có cập nhật hồ sơ theo mã. Nếu file có thiết lập phân bổ, thiết lập cũ của phiếu ghi tăng mới nhất bị thay bằng thiết lập gửi lên; nếu không có thiết lập thì không xóa thiết lập cũ. Dòng trùng mã trong chính file được xử lý lần lượt, không được gộp các đối tượng.
5. Đọc tổng **tạo / cập nhật / bỏ qua / lỗi**. Dòng lỗi có thể tồn tại cùng kết quả của những dòng khác; không coi cả file thành công khi lỗi > 0. Giao diện hiện tổng đếm rồi đóng, chưa có bảng lỗi chi tiết theo dòng trong luồng hiện tại. Giữ file nguồn và liên hệ người phụ trách để xác định dòng lỗi trước nạp lại, tránh ghi đè lại những dòng đã đúng.
6. Đối chiếu từng nhóm mã mới/mã cập nhật trên danh sách và hồ sơ, nhất là số dư còn lại, số kỳ, tài khoản và thiết lập nhận chi phí. Không coi import là thao tác tạo các phiếu phân bổ lịch sử.

## 6. Giải thích các thông tin trên màn hình

- **Mã CP trả trước**: Ý nghĩa, cách nhập hoặc đối chiếu: Bắt buộc, chữ; khóa đối chiếu hồ sơ để tạo mới hoặc ghi đè trùng mã.
- **Tên CP trả trước**: Ý nghĩa, cách nhập hoặc đối chiếu: Bắt buộc, chữ; tên của khoản chi phí đầu kỳ.
- **Ngày bắt đầu phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày Excel hoặc dd/MM/yyyy; trống/không đọc được thì dùng ngày ghi nhận.
- **Ngày ghi nhận**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày Excel hoặc dd/MM/yyyy; trống/không đọc được thì dùng ngày hiện tại khi gửi.
- **Số kỳ phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Số nguyên số kỳ chia giá trị gốc; trống đọc thành 0, không đủ điều kiện tính nếu số kỳ = 0.
- **Số tiền**: Ý nghĩa, cách nhập hoặc đối chiếu: Số nguyên giá trị gốc khoản chi phí; trống đọc thành 0.
- **Số tiền PB hàng kỳ**: Ý nghĩa, cách nhập hoặc đối chiếu: Số tiền dự kiến mỗi kỳ; trống hoặc 0 thì hệ thống tự chia Số tiền / Số kỳ nếu số kỳ > 0.
- **Số đã phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Số dư đã phân bổ đầu kỳ, trống đọc thành 0; cập nhật trùng mã sẽ ghi đè số hiện có.
- **Số còn lại**: Ý nghĩa, cách nhập hoặc đối chiếu: Có trong file/xem trước nhưng không gửi khi lưu; hệ thống tính Số tiền − Số đã phân bổ.
- **TK chờ phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Chữ, trống dùng 242; giữ tài khoản dưới dạng text trong Excel.
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

⚠️ Kiểm tra quy tắc trùng mã và phần số dư trước nhập hàng loạt; không lặp import khi chưa rõ kết quả lần trước.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Không tìm thấy cột mã/tên**: Cách xử lý: Dùng lại đúng file mẫu, đặt tiêu đề ở hàng đầu; không chỉ đổi tên file.
- **Không có dòng hợp lệ**: Cách xử lý: Nhập đủ mã và tên, kiểm tra các dòng bị lọc khỏi payload.
- **Số tạo/cập nhật khác số dòng file**: Cách xử lý: Loại dòng trống/thiếu mã tên, tách mã mới và mã trùng để đối chiếu.
- **Kết quả có lỗi > 0**: Cách xử lý: Chưa xem cả file là hoàn tất; kiểm tra hồ sơ đã lưu và tìm dòng lỗi trước nạp lại. UI hiện chưa có bảng Errors chi tiết.
- **Số còn lại sau lưu khác ô file**: Cách xử lý: Ô còn lại không gửi; kiểm tra giá trị gốc và số đã phân bổ là hai đầu vào thật.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN TÍNH VÀ LẬP PHIẾU PHÂN BỔ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-2-huong-dan-tinh-va-lap-phieu-phan-bo-chi-phi-tra-truoc/)** — Tính và lập phiếu phân bổ chi phí trả trước.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TÍNH VÀ LẬP PHIẾU PHÂN BỔ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-2-huong-dan-tinh-va-lap-phieu-phan-bo-chi-phi-tra-truoc/)** — Tính và lập phiếu phân bổ chi phí trả trước.
- **[HƯỚNG DẪN TỔNG QUAN CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-0-huong-dan-tong-quan-chi-phi-tra-truoc/)** — Tổng quan Chi phí trả trước.
- **[HƯỚNG DẪN GHI NHẬN CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-1-huong-dan-ghi-nhan-chi-phi-tra-truoc/)** — Ghi nhận chi phí trả trước.
- **[HƯỚNG DẪN GHI GIẢM CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-3-huong-dan-ghi-giam-chi-phi-tra-truoc/)** — Ghi giảm chi phí trả trước.
- **[HƯỚNG DẪN NGỪNG VÀ TIẾP TỤC PHÂN BỔ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-5-huong-dan-ngung-va-tiep-tuc-phan-bo-chi-phi-tra-truoc/)** — Ngừng và tiếp tục phân bổ chi phí trả trước.
- **[HƯỚNG DẪN XÓA VÀ TÍNH LẠI CHỨNG TỪ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-6-huong-dan-xoa-va-tinh-lai-chung-tu-chi-phi-tra-truoc/)** — Xóa và tính lại chứng từ chi phí trả trước.
