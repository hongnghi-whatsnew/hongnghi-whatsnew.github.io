---
title: "HƯỚNG DẪN GHI NHẬN CHI PHÍ TRẢ TRƯỚC"
date: "2026-11-07"
summary: "Ghi nhận khoản chi phí trả trước cùng lịch phân bổ và các chứng từ nguồn."
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

Ghi nhận khoản chi phí trả trước cùng lịch phân bổ và các chứng từ nguồn.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: ghi nhận khoản chi phí trả trước cùng lịch phân bổ và các chứng từ nguồn.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Chi phí trả trước**

## 3. Nhận biết màn hình

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Import ghi tăng**, **Thêm chi phí trả trước**, **Xem**, **Tính phân bổ**, **Ghi giảm**, **Xóa**, **Ngừng phân bổ**, **Thêm dòng**, **Xóa hết dòng**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin và bảng chi tiết của cửa sổ. Khung  khoanh các nút ở cuối cửa sổ.

![Hình 1: cửa sổ thêm chi phí trả trước và thiết lập phân bổ chưa lưu](/posts/2026-11-07-ts-b05-1-huong-dan-ghi-nhan-chi-phi-tra-truoc/hinh-01-cptt-them-phan-bo.png)

![Hình 2: Tab Tập hợp chứng từ của chi phí trả trước chưa nhập](/posts/2026-11-07-ts-b05-1-huong-dan-ghi-nhan-chi-phi-tra-truoc/hinh-02-cptt-them-chung-tu.png)

## 4. Trình tự công việc

Khai chứng từ và nhận diện khoản chi phí → Nhập giá trị/số kỳ → Kiểm mức phân bổ → Khai đối tượng/tài khoản → Ghi nhận → Đối chiếu số dư

## 5. Thực hiện trên phần mềm

1. Nhập số CT ghi tăng, mã, tên khoản chi phí và ngày ghi nhận. Nhân bản hồ sơ sẽ để trống số CT/mã và đưa số đã phân bổ về 0; phải nhập nhận diện mới trước ghi nhận.
2. Nhập **Số tiền** giá trị gốc và **Số kỳ phân bổ**; kiểm tra mức PB hàng kỳ tự tính. Nhập số đã phân bổ đầu kỳ nếu có, đối chiếu **Số còn lại = Số tiền − Số đã phân bổ**.
3. Chọn ngày bắt đầu phân bổ và TK chờ phân bổ (mặc định 242). Nhập tham chiếu và lý do; kiểm tra **Ngừng phân bổ** đang đúng yêu cầu.
4. Trong **Thiết lập phân bổ**, chọn THCP, kiểm tra tên, tỷ lệ và TK chi phí mỗi dòng. Đối chiếu tổng tỷ lệ với phương án chia chi phí; không có bằng chứng bước lưu tự chặn tổng khác 100%.
5. Trong **Tập hợp chứng từ**, nhập ngày/số chứng từ, diễn giải, TK Nợ/Có và số tiền nguồn. Tổng bảng dùng đối chiếu; không tự cộng vào Số tiền đầu cửa sổ.
6. Kiểm tra số CT/mã/tên/ngày ghi nhận bắt buộc trước **Cất**. Ở chế độ Sửa, số tiền, số kỳ, số đã phân bổ và TK chờ phân bổ bị khóa; không sửa trực tiếp số dư. Đối chiếu hồ sơ cùng hai bảng chi tiết sau ghi nhận.

## 6. Giải thích các thông tin trên màn hình

- **Số CT ghi tăng**: Ý nghĩa, cách nhập hoặc đối chiếu: Bắt buộc nhập số phiếu ghi tăng chi phí trả trước; mặc định trống.
- **Mã chi phí trả trước**: Ý nghĩa, cách nhập hoặc đối chiếu: Bắt buộc nhập mã duy nhất cho khoản chi phí; tạo mới bị chặn nếu mã đã tồn tại. Nhân bản xóa sẵn mã để nhập mã mới.
- **Số kỳ phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập số nguyên không âm; cửa sổ mới mặc định 2. Khi Sửa hồ sơ ô này chỉ xem.
- **Số tiền phân bổ hàng kỳ**: Ý nghĩa, cách nhập hoặc đối chiếu: Chỉ xem; cửa sổ tính làm tròn Số tiền / Số kỳ khi số kỳ > 0, nếu số kỳ = 0 thì mức này bằng 0.
- **Tên chi phí trả trước**: Ý nghĩa, cách nhập hoặc đối chiếu: Bắt buộc nhập tên khoản chi phí, ví dụ bảo hiểm/thuê trả trước; đọc cùng mã để phân biệt các đợt.
- **Số tiền**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập giá trị gốc không âm, mặc định 0; đổi số tiền tính lại PB hàng kỳ và số còn lại. Khi Sửa hồ sơ ô này chỉ xem.
- **TK chờ phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Chọn tài khoản theo dõi chi phí chờ phân bổ, mặc định 242; khi Sửa hồ sơ ô chọn bị khóa.
- **Ngày bắt đầu phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Mốc bắt đầu xét phân bổ; hồ sơ chỉ được tính khi ngày này không sau cuối tháng đang tính (trống vẫn được xét).
- **Ngày ghi nhận**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày ghi tăng chi phí trả trước trên hồ sơ; khi tạo mới bắt buộc chọn, mặc định hôm nay.
- **Số đã phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập số dư đã phân bổ trước thời điểm khai báo, mặc định 0, không âm; khi Sửa hồ sơ ô này chỉ xem.
- **Số còn lại**: Ý nghĩa, cách nhập hoặc đối chiếu: Chỉ xem, tự tính Số tiền − Số đã phân bổ. Không nhập số còn lại thay cho giá trị gốc.
- **Tham chiếu**: Ý nghĩa, cách nhập hoặc đối chiếu: Thông tin tham chiếu bằng chữ do người lập hồ sơ nhập, không tự tạo liên kết hay nhập chứng từ nguồn.
- **Lý do / diễn giải**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập nội dung ghi nhận khoản chi phí ở đầu phiếu; không bắt buộc theo cửa sổ hiện tại.
- **#**: Ý nghĩa, cách nhập hoặc đối chiếu: Số thứ tự dòng do giao diện hiển thị; không phải mã hồ sơ, không nhập.
- **Đối tượng phân bổ (THCP)**: Ý nghĩa, cách nhập hoặc đối chiếu: Chọn mã đối tượng tập hợp chi phí từ danh sách theo chi nhánh đang đăng nhập; chọn đối tượng sẽ điền mã và tên cho dòng nhận chi phí.
- **Tên đối tượng phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Tên bên nhận chi phí, được điền khi chọn THCP; có thể nhập phần tên của chi phí chung.
- **Tỷ lệ PB (%)**: Ý nghĩa, cách nhập hoặc đối chiếu: Tỷ lệ chia số phân bổ kỳ cho từng đối tượng, mặc định 100% ở dòng mới. Kiểm tra tổng tỷ lệ; tỷ lệ không dương trong bước tính được xử lý như 100%.
- **TK chi phí**: Ý nghĩa, cách nhập hoặc đối chiếu: Chọn tài khoản nhận chi phí của dòng phân bổ; được đưa sang TK Nợ khi tính phân bổ.
- **Khoản mục CP**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập khoản mục quản lý chi phí cho dòng thiết lập; là thông tin riêng với mã đối tượng và tài khoản.
- **Mã thống kê**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập mã thống kê bổ sung cho dòng thiết lập phân bổ khi đơn vị có sử dụng; có thể để trống.
- **Ngày chứng từ**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày của chứng từ nguồn hoặc phiếu điều chỉnh; nhập/chọn đúng ngày trên hồ sơ, độc lập với ngày hạch toán.
- **Số chứng từ**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập số chứng từ nguồn để truy vết dòng tập hợp; không phải Số CT ghi tăng ở đầu cửa sổ.
- **Diễn giải**: Ý nghĩa, cách nhập hoặc đối chiếu: Nội dung của từng dòng chứng từ nguồn; nhập theo chi phí phát sinh, không tự thay tên hồ sơ.
- **TK Nợ**: Ý nghĩa, cách nhập hoặc đối chiếu: Tài khoản Nợ trên dòng chứng từ nguồn; nhập/chọn theo chứng từ thực tế, không đồng nghĩa TK chi phí của thiết lập phân bổ.
- **TK Có**: Ý nghĩa, cách nhập hoặc đối chiếu: Tài khoản Có trên dòng chứng từ nguồn; nhập/chọn theo chứng từ thực tế.
- **Ngừng phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Ô chọn mặc định bỏ chọn; đánh dấu để tạm dừng xét phân bổ kỳ mới, không đảo chứng từ cũ.
- **Số tiền chứng từ nguồn**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập số tiền của từng dòng trong Tập hợp chứng từ; tổng bảng không tự thay Số tiền của hồ sơ đầu cửa sổ.

## 7. Kiểm tra sau khi thực hiện

Tạo hồ sơ chi phí trả trước và phiếu ghi tăng cùng thông tin phân bổ/chứng từ nguồn.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Không lập lại khoản đã tồn tại dưới mã khác; đối chiếu tham chiếu chứng từ để tránh ghi nhận trùng.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Mã chi phí trả trước đã tồn tại**: Cách xử lý: Tra lại khoản đã có; nếu Nhân bản thì nhập mã mới cùng số CT mới trước Cất.
- **Thiếu số CT/mã/tên/ngày ghi nhận**: Cách xử lý: Điền đủ các ô bắt buộc; ngày bắt đầu phân bổ không thay ngày ghi nhận.
- **Không sửa được số tiền/số kỳ khi Sửa**: Cách xử lý: Các ô này bị khóa theo thiết kế cửa sổ, không phải lỗi quyền nhập ô. Dừng và thống nhất phương án thay đổi với nghiệp vụ, không dùng import để tự vượt khóa.

## 10. Câu hỏi thường gặp

**Tổng bảng chứng từ nguồn có tự cập nhật giá trị đầu hồ sơ không?** Không thấy luồng cộng ngược trong luồng hiện tại; nhập giá trị gốc và đối chiếu tổng nguồn riêng trước ghi nhận.

## 11. Công việc tiếp theo

- **[HƯỚNG DẪN TÍNH VÀ LẬP PHIẾU PHÂN BỔ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-2-huong-dan-tinh-va-lap-phieu-phan-bo-chi-phi-tra-truoc/)** — Tính và lập phiếu phân bổ chi phí trả trước.

## 12. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TÍNH VÀ LẬP PHIẾU PHÂN BỔ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-2-huong-dan-tinh-va-lap-phieu-phan-bo-chi-phi-tra-truoc/)** — Tính và lập phiếu phân bổ chi phí trả trước.
- **[HƯỚNG DẪN TỔNG QUAN CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-0-huong-dan-tong-quan-chi-phi-tra-truoc/)** — Tổng quan Chi phí trả trước.
- **[HƯỚNG DẪN GHI GIẢM CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-3-huong-dan-ghi-giam-chi-phi-tra-truoc/)** — Ghi giảm chi phí trả trước.
- **[HƯỚNG DẪN IMPORT GHI TĂNG CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-4-huong-dan-import-ghi-tang-chi-phi-tra-truoc/)** — Import ghi tăng chi phí trả trước.
- **[HƯỚNG DẪN NGỪNG VÀ TIẾP TỤC PHÂN BỔ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-5-huong-dan-ngung-va-tiep-tuc-phan-bo-chi-phi-tra-truoc/)** — Ngừng và tiếp tục phân bổ chi phí trả trước.
- **[HƯỚNG DẪN XÓA VÀ TÍNH LẠI CHỨNG TỪ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-6-huong-dan-xoa-va-tinh-lai-chung-tu-chi-phi-tra-truoc/)** — Xóa và tính lại chứng từ chi phí trả trước.
