---
title: "HƯỚNG DẪN TÍNH VÀ LẬP PHIẾU PHÂN BỔ CCDC"
date: "2026-11-07"
summary: "Tính phân bổ CCDC theo tháng, kiểm tra đối tượng và hạch toán trước ghi nhận."
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

Tính phân bổ CCDC theo tháng, kiểm tra đối tượng và hạch toán trước ghi nhận.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Đăng nhập đúng tên miền và tài khoản của chi nhánh cần xử lý; đối chiếu hồ sơ thuộc đơn vị đó.
- CCDC đã có hồ sơ ghi tăng, số kỳ, mức phân bổ, giá trị còn lại và thiết lập phân bổ chi phí.
- Kiểm tra kỳ đã có phiếu hay chưa; thống nhất tháng/năm và ngày phân bổ với kế toán trước khi tạo.

## 2. Nhận biết màn hình

Từ **Phân bổ chi phí CCDC** chọn **Tính phân bổ**. Cửa sổ **Tính phân bổ chi phí CCDC** có kỳ, ngày phân bổ, diễn giải, **Tổng phân bổ** và ba tab:

- **Tính phân bổ**: Dùng để làm gì: Xem một dòng tổng tiền cho mỗi CCDC.
- **Phân bổ**: Dùng để làm gì: Xem chi tiết chia chi phí theo CCDC, đối tượng và tài khoản.
- **Hạch toán**: Dùng để làm gì: Xem số tiền đã cộng theo tài khoản và đối tượng.
- **Thực hiện phân bổ, Hủy**: Dùng để làm gì: Tạo phiếu hoặc đóng cửa sổ tính.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin và bảng chi tiết của cửa sổ. Khung  khoanh các nút ở cuối cửa sổ.

![Hình 1: Tab Tính phân bổ khi chưa có CCDC trong kỳ](/posts/2026-11-07-ts-b03-1-huong-dan-tinh-va-lap-phieu-phan-bo-ccdc/hinh-01-ccdc-phan-bo-tinh.png)

![Hình 2: Tab Phân bổ CCDC chưa có dữ liệu](/posts/2026-11-07-ts-b03-1-huong-dan-tinh-va-lap-phieu-phan-bo-ccdc/hinh-02-ccdc-phan-bo-chi-tiet.png)

![Hình 3: Tab Hạch toán CCDC chưa có dữ liệu](/posts/2026-11-07-ts-b03-1-huong-dan-tinh-va-lap-phieu-phan-bo-ccdc/hinh-03-ccdc-phan-bo-hach-toan.png)

## 3. Trình tự công việc

Chọn kỳ → Kiểm tra CCDC → Kiểm tra phân bổ → Kiểm tra hạch toán
→ Thực hiện phân bổ → Xem phiếu và đối chiếu số dư

### Bước 1 — Chốt tháng/năm và ngày phân bổ

Tại **Tính phân bổ**, chọn **Tháng** (1–12), **Năm** (2000–2100) và đợi kết quả tải xong. Cửa sổ tự tính khi mở và khi đổi tháng/năm; không cần bấm thêm nút xem trước.

**Ngày phân bổ** mặc định là ngày cuối tháng đã chọn. Nếu điều chỉnh ngày, kiểm tra lại sau khi đổi kỳ vì ngày sẽ được đặt về cuối tháng mới. **Diễn giải** cũng trở lại nội dung mặc định khi đổi kỳ.

### Bước 2 — Đối chiếu từng CCDC ở tab Tính phân bổ

Kiểm tra **Mã CCDC**, **Tên CCDC**, **Số tiền phân bổ tháng**. Mỗi CCDC xuất hiện một dòng tổng; dòng **Tổng số** ở cuối đếm số CCDC, không đếm số đối tượng nhận chi phí.

Đối chiếu số tiền với hồ sơ ghi tăng và giá trị còn lại. Nếu một CCDC thiếu hoặc có mức khác dự kiến, rà soát ngày bắt đầu, trạng thái ngừng phân bổ, số kỳ, số tiền phân bổ hàng kỳ, giá trị còn lại và thiết lập tỷ lệ trước khi lập phiếu.

### Bước 3 — Kiểm tra cách chia chi phí ở tab Phân bổ

Chuyển **Phân bổ**, kiểm tra từng dòng theo **Mã CCDC**, **Đối tượng**, **Tên đối tượng**, **TK Nợ**, **TK Có**, **Số tiền phân bổ**.

Một CCDC chia nhiều đối tượng sẽ có nhiều dòng; dòng **Tổng số** tại tab này đếm dòng phân bổ. Cộng tiền các dòng cùng mã CCDC để đối chiếu **Số tiền phân bổ tháng** ở tab trước; đối chiếu tổng cuối bảng với **Tổng phân bổ** ở đầu cửa sổ.

Các bảng này dùng để xem; không nhập lại tài khoản hay đối tượng tại đây. Khi **TK Nợ** trống hoặc số tiền không phù hợp hồ sơ, chọn **Hủy**, rà soát thiết lập phân bổ của hồ sơ ghi tăng theo **[HƯỚNG DẪN GHI TĂNG CÔNG CỤ DỤNG CỤ](/bai-viet/2026-11-07-ts-b01-1-huong-dan-ghi-tang-cong-cu-dung-cu/)**, rồi mở lại để tính trên dữ liệu đã sửa.

### Bước 4 — Đối chiếu bút toán ở tab Hạch toán

Chuyển **Hạch toán**, đối chiếu **TK Nợ**, **TK Có**, **Đối tượng**, **Số tiền**. Các dòng có cùng TK Nợ, TK Có và đối tượng được cộng vào một dòng. Vì vậy số dòng hạch toán có thể ít hơn số dòng phân bổ.

Tổng **Số tiền** phải khớp tổng tiền ở hai tab trước. Kiểm tra cả tài khoản và đối tượng nhận chi phí: các tổng giống nhau chưa đủ nếu đã gán sai nơi nhận.

### Bước 5 — Thực hiện phân bổ và kiểm tra phiếu

Khi kỳ, ngày, mã CCDC, tài khoản và số tiền đã khớp, chọn **Thực hiện phân bổ**. Nút bị vô hiệu khi đang tải, đang tạo phiếu hoặc không có dòng phân bổ.

Ghi lại số phiếu trong thông báo **Đã tạo phiếu phân bổ …**. Tại danh sách chọn **Xem** đúng phiếu vừa tạo; đối chiếu tháng/năm, **Ngày phân bổ**, tổng tiền và chi tiết tài khoản/đối tượng. Kiểm tra **Giá trị đã phân bổ** tăng và **Giá trị còn lại** giảm trên các hồ sơ liên quan.

Nếu cần tính lại kỳ đã có phiếu, dùng **[HƯỚNG DẪN XÓA VÀ TÍNH LẠI PHÂN BỔ CCDC](/bai-viet/2026-11-07-ts-b03-2-huong-dan-xoa-va-tinh-lai-phan-bo-ccdc/)** để xem điều kiện xóa và lập lại; không tạo lặp kỳ.

## 5. Giải thích các thông tin trên màn hình

- **Tháng, Năm**: Cách dùng và đối chiếu: Kỳ lựa chọn CCDC cần phân bổ; đổi kỳ tự tải số liệu mới.
- **Ngày phân bổ**: Cách dùng và đối chiếu: Ngày ghi trên phiếu, mặc định cuối tháng; chọn sau khi chốt kỳ.
- **Diễn giải**: Cách dùng và đối chiếu: Nội dung hiển thị khi tính và xem hạch toán; không dùng ô này thay cho kiểm tra phiếu đã lưu.
- **Tổng phân bổ**: Cách dùng và đối chiếu: Tổng tiền các dòng chi tiết, cũng là tổng ở tab Tính phân bổ.
- **Mã CCDC, Tên CCDC**: Cách dùng và đối chiếu: Dùng nhận diện và đối chiếu hồ sơ ghi tăng.
- **Số tiền phân bổ tháng**: Cách dùng và đối chiếu: Tổng tiền mọi dòng phân bổ của một CCDC trong kỳ, không phải luôn bằng mức khai trên hồ sơ.
- **Đối tượng, Tên đối tượng**: Cách dùng và đối chiếu: Nơi nhận chi phí theo thiết lập phân bổ; một CCDC có thể có nhiều nơi nhận.
- **TK Nợ**: Cách dùng và đối chiếu: Tài khoản chi phí từ thiết lập phân bổ; phải rà soát nếu trống.
- **TK Có**: Cách dùng và đối chiếu: Tài khoản chờ phân bổ của CCDC.
- **Số tiền phân bổ**: Cách dùng và đối chiếu: Phần tiền cho một dòng đối tượng/tài khoản.
- **Số tiền**: Cách dùng và đối chiếu: Tiền đã cộng theo TK Nợ, TK Có và đối tượng trong tab Hạch toán.

Phần mềm lấy mức cơ sở nhỏ hơn giữa **số tiền phân bổ hàng kỳ** và **giá trị còn lại**, sau đó chia theo từng tỷ lệ thiết lập và làm tròn từng dòng. Ví dụ mức cơ sở 1.000.000 đồng, tỷ lệ 30%/70% tạo 300.000/700.000 đồng; đây là ví dụ cách đọc, không phải dữ liệu thực tế.

CCDC chỉ được xét khi chưa xóa, chưa ngừng phân bổ, còn giá trị, số kỳ lớn hơn 0 và ngày bắt đầu không sau cuối tháng. Nếu ngày bắt đầu trống vẫn được xét. Tháng bắt đầu không chia mức cơ sở theo số ngày sử dụng như TSCĐ.

## 6. Kiểm tra sau khi thực hiện

Phiếu phân bổ có số chứng từ theo kỳ, ngày phân bổ, các dòng chi phí và tổng tiền. Giá trị đã phân bổ của mỗi CCDC tăng theo tổng tiền các dòng của mã đó; giá trị còn lại giảm tương ứng. Tổng tiền phiếu là tổng các dòng chi tiết.

## 7. Những điều cần lưu ý

⚠️ **Thực hiện phân bổ** ghi phiếu và thay đổi số dư CCDC. Kiểm tra tổng tỷ lệ, tiền phân bổ và tài khoản trước khi thực hiện.

⚠️ Nếu không có thiết lập phân bổ, bảng có thể vẫn có tiền nhưng **TK Nợ** trống. Dừng lập phiếu để rà soát hồ sơ; không xem có dòng là đã đủ điều kiện nghiệp vụ.

⚠️ Tỷ lệ không dương có thể được tính như 100% cho từng dòng. Kiểm tra tỷ lệ trong hồ sơ; không dùng 0% để mong loại một dòng khỏi phân bổ.

⚠️ Đổi kỳ đặt lại ngày và diễn giải. Mỗi tháng/năm chỉ lập một phiếu đang tồn tại; điều chỉnh phiếu đã tính xem [HƯỚNG DẪN XÓA VÀ TÍNH LẠI PHÂN BỔ CCDC](/bai-viet/2026-11-07-ts-b03-2-huong-dan-xoa-va-tinh-lai-phan-bo-ccdc/).

### "Không có công cụ dụng cụ nào cần phân bổ trong kỳ này." 

Nguyên nhân: kỳ được chọn không có dòng CCDC đủ điều kiện phân bổ.

Cách xử lý: kiểm tra tháng/năm, ngày bắt đầu, ngừng phân bổ, số kỳ, giá trị còn lại và mức phân bổ hàng kỳ của hồ sơ cần tính. Không thay kỳ chỉ để làm nút thực hiện sáng lên.

### "Không tính được phân bổ." (Lỗi hệ thống)

Nguyên nhân: không tải được dữ liệu tính phân bổ.

Cách xử lý: ghi lại kỳ và thông báo chi tiết, đóng cửa sổ rồi mở lại; không lập phiếu từ kết quả cũ sau khi đổi kỳ bị lỗi. Báo người quản trị nếu còn lỗi.

### Có tiền phân bổ nhưng TK Nợ trống 

Nguyên nhân: CCDC có thể chưa có thiết lập phân bổ, hoặc thiết lập chưa điền tài khoản chi phí.

Cách xử lý: **Hủy**, rà soát thiết lập trong hồ sơ ghi tăng và mở lại kỳ để kiểm tra đủ tài khoản. Không tiếp tục chỉ vì tổng tiền khớp.

## 9. Câu hỏi thường gặp

**Tổng số ở hai tab đầu khác nhau có sai không?** Không nhất thiết. Tab Tính phân bổ đếm CCDC; tab Phân bổ đếm dòng nhận chi phí. Một CCDC chia hai đối tượng tạo hai dòng chi tiết.

**Có chia tiền tháng đầu theo số ngày sử dụng như tài sản cố định không?** Luồng CCDC lấy mức hàng kỳ và giá trị còn lại, sau đó chia theo tỷ lệ; không có bước chia theo số ngày trong tháng.

**Đổi Diễn giải có được lưu vào phiếu không?** Luồng tạo hiện chỉ gửi tháng, năm và ngày phân bổ, không gửi diễn giải đã sửa. Không dùng ô này làm nơi duy nhất lưu nội dung cần bàn giao; đối chiếu phiếu sau tạo.

## 10. Công việc tiếp theo

- Đối chiếu hồ sơ theo **[HƯỚNG DẪN TỔNG QUAN DANH SÁCH CCDC](/bai-viet/2026-11-07-ts-b01-0-huong-dan-tong-quan-danh-sach-ccdc/)**; bàn giao số phiếu và chi phí cho kế toán kỳ.
- Nếu cần sửa kết quả đã tạo, xem **[HƯỚNG DẪN XÓA VÀ TÍNH LẠI PHÂN BỔ CCDC](/bai-viet/2026-11-07-ts-b03-2-huong-dan-xoa-va-tinh-lai-phan-bo-ccdc/) — Xóa và tính lại phân bổ CCDC** trước khi thao tác.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN DANH SÁCH CCDC](/bai-viet/2026-11-07-ts-b01-0-huong-dan-tong-quan-danh-sach-ccdc/)** — Tổng quan Danh sách CCDC.
- **[HƯỚNG DẪN GHI TĂNG CÔNG CỤ DỤNG CỤ](/bai-viet/2026-11-07-ts-b01-1-huong-dan-ghi-tang-cong-cu-dung-cu/)** — Ghi tăng công cụ dụng cụ.
- **[HƯỚNG DẪN TỔNG QUAN PHÂN BỔ CHI PHÍ CCDC](/bai-viet/2026-11-07-ts-b03-0-huong-dan-tong-quan-phan-bo-chi-phi-ccdc/)** — Tổng quan Phân bổ chi phí CCDC.
- **[HƯỚNG DẪN XÓA VÀ TÍNH LẠI PHÂN BỔ CCDC](/bai-viet/2026-11-07-ts-b03-2-huong-dan-xoa-va-tinh-lai-phan-bo-ccdc/)** — Xóa và tính lại phân bổ CCDC.
