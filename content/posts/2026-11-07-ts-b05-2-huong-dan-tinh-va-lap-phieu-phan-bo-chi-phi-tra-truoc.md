---
title: "HƯỚNG DẪN TÍNH VÀ LẬP PHIẾU PHÂN BỔ CHI PHÍ TRẢ TRƯỚC"
date: "2026-11-07"
summary: "Tính phân bổ chi phí trả trước theo tháng, kiểm tra đối tượng và hạch toán trước ghi nhận."
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

Tính phân bổ chi phí trả trước theo tháng, kiểm tra đối tượng và hạch toán trước ghi nhận.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: tính phân bổ chi phí trả trước theo tháng, kiểm tra đối tượng và hạch toán trước ghi nhận.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Chi phí trả trước**

## 3. Nhận biết màn hình

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Import ghi tăng**, **Thêm chi phí trả trước**, **Xem**, **Tính phân bổ**, **Ghi giảm**, **Xóa**, **Hủy**, **Thực hiện phân bổ**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin và bảng chi tiết của cửa sổ. Khung  khoanh các nút ở cuối cửa sổ.

![Hình 1: Tab Tính phân bổ CPTT khi chưa có dữ liệu trong kỳ](/posts/2026-11-07-ts-b05-2-huong-dan-tinh-va-lap-phieu-phan-bo-chi-phi-tra-truoc/hinh-01-cptt-phan-bo-tinh.png)

![Hình 2: Tab Phân bổ CPTT chưa có dữ liệu](/posts/2026-11-07-ts-b05-2-huong-dan-tinh-va-lap-phieu-phan-bo-chi-phi-tra-truoc/hinh-02-cptt-phan-bo-chi-tiet.png)

![Hình 3: Tab Hạch toán CPTT chưa có dữ liệu](/posts/2026-11-07-ts-b05-2-huong-dan-tinh-va-lap-phieu-phan-bo-chi-phi-tra-truoc/hinh-03-cptt-phan-bo-hach-toan.png)

## 4. Trình tự công việc

Chọn kỳ/ngày phân bổ → Kiểm từng khoản chi phí → Đối chiếu phân bổ và hạch toán → Lập phiếu → Kiểm số dư sau lập

## 5. Thực hiện trên phần mềm

1. Chọn **Tính phân bổ**, xác định tháng/năm và đợi dữ liệu tải xong. Cửa sổ tự tính khi mở hoặc đổi kỳ; đổi kỳ cũng đặt ngày phân bổ về cuối tháng mới và diễn giải về mặc định. Kiểm tra lại ngày sau khi chốt kỳ.
2. Ở **Tính phân bổ**, kiểm tra từng mã và **Số tiền phân bổ tháng**; khi không có dòng, kiểm tra ngày bắt đầu, trạng thái ngừng và giá trị còn lại.
3. Ở **Phân bổ**, đối chiếu **Đối tượng**, **Tên đối tượng**, **TK Nợ**, **TK Có**, **Số tiền phân bổ**.
4. Ở **Hạch toán**, kiểm tra tổng tiền theo tài khoản và đối tượng; chỉ chọn **Thực hiện phân bổ** khi có dòng và số liệu hợp lệ.
5. Ghi lại số CT trong thông báo **Đã tạo phiếu phân bổ …**. Mở Xem đúng phiếu, đối chiếu kỳ/ngày, tổng tiền, tài khoản và đối tượng; kiểm tra số đã phân bổ tăng, số còn lại giảm theo tổng các dòng của từng khoản.

## 6. Giải thích các thông tin trên màn hình

- **Diễn giải**: Ý nghĩa, cách nhập hoặc đối chiếu: Nội dung ở cửa sổ tính/hạch toán; luồng tạo chỉ gửi tháng, năm và ngày phân bổ, không gửi diễn giải đã sửa. Không dùng ô này làm nơi duy nhất lưu nội dung cần bàn giao.
- **Tháng**: Ý nghĩa, cách nhập hoặc đối chiếu: Kỳ phân bổ theo tháng, giá trị 1–12. Danh sách chỉ xem; khi tính mới chọn tháng cần xử lý.
- **Năm**: Ý nghĩa, cách nhập hoặc đối chiếu: Năm của kỳ phân bổ, giới hạn 2000–2100 khi tính; đọc cùng Tháng để tránh xóa/tính lại nhầm kỳ.
- **Ngày phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày được ghi trên phiếu phân bổ; phân biệt với cặp tháng/năm dùng lấy dữ liệu tính.
- **Mã CP trả trước**: Ý nghĩa, cách nhập hoặc đối chiếu: Mã khoản chi phí đủ điều kiện trong kết quả tính; chỉ xem, không nhập thêm khoản tại bảng kết quả.
- **Tên CP trả trước**: Ý nghĩa, cách nhập hoặc đối chiếu: Tên khoản tương ứng với mã trên kết quả; chỉ xem.
- **Số tiền phân bổ tháng**: Ý nghĩa, cách nhập hoặc đối chiếu: Tổng số tiền kỳ của khoản sau khi tổng hợp các dòng đối tượng; chỉ xem, đối chiếu với số còn lại và mức PB hàng kỳ.
- **Đối tượng**: Ý nghĩa, cách nhập hoặc đối chiếu: Mã bên nhận chi phí lấy từ thiết lập của phiếu ghi tăng mới nhất; có thể trống nếu hồ sơ không có thiết lập.
- **Tên đối tượng**: Ý nghĩa, cách nhập hoặc đối chiếu: Tên bên nhận phân bổ đi cùng mã đối tượng; kết quả chỉ xem.
- **TK Nợ**: Ý nghĩa, cách nhập hoặc đối chiếu: Tài khoản chi phí của thiết lập phân bổ. Nếu chưa có thiết lập, kết quả để trống; hoàn thiện hồ sơ rồi tính lại trước lập phiếu.
- **TK Có**: Ý nghĩa, cách nhập hoặc đối chiếu: Tài khoản chờ phân bổ trên hồ sơ, dùng ghi giảm phần chờ phân bổ khi lập phiếu.
- **Số tiền phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Số tiền của từng dòng đối tượng sau chia tỷ lệ và làm tròn; chỉ xem.
- **Số tiền**: Ý nghĩa, cách nhập hoặc đối chiếu: Số tiền của dòng hạch toán được tổng hợp từ kết quả phân bổ; dùng đối chiếu tổng các bảng trước Lập phiếu.

**Cách tính / quy tắc số liệu:** Chỉ lấy hồ sơ chưa xóa, không ngừng phân bổ, giá trị còn lại > 0, số kỳ > 0 và ngày bắt đầu không sau cuối tháng (ngày trống vẫn đủ điều kiện). Số phân bổ kỳ = nhỏ hơn giữa số PB hàng kỳ và giá trị còn lại. Có thiết lập thì lấy thiết lập của phiếu ghi tăng mới nhất, làm tròn số tiền phân bổ kỳ × tỷ lệ / 100 cho từng dòng. Tỷ lệ không dương được xử lý như 100%; không có thiết lập thì tạo một dòng toàn số tiền kỳ với TK Nợ trống. Cần kiểm tra tổng tỷ lệ và TK Nợ trước lập phiếu. Không có hệ số chia theo ngày trong tháng đầu như TSCĐ.

## 7. Kiểm tra sau khi thực hiện

Tạo phiếu phân bổ, chi tiết hạch toán và cập nhật giá trị đã phân bổ theo luồng xử lý.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Mỗi tháng/năm chỉ có một phiếu đang tồn tại. Thiếu TK Nợ hoặc tỷ lệ không hợp lý phải sửa thiết lập trước lập phiếu.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Không có chi phí trả trước nào cần phân bổ trong kỳ**: Cách xử lý: Kiểm tra từng khoản: chưa xóa, không ngừng, còn lại > 0, số kỳ > 0, ngày bắt đầu không sau cuối tháng và mức PB kỳ > 0.
- **Đã tồn tại phiếu phân bổ kỳ**: Cách xử lý: Đối chiếu phiếu hiện có; dùng luồng xóa/tính lại [HƯỚNG DẪN XÓA VÀ TÍNH LẠI CHỨNG TỪ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-6-huong-dan-xoa-va-tinh-lai-chung-tu-chi-phi-tra-truoc/) khi cần thay thế, không lập thêm phiếu cùng kỳ.
- **Kết quả thiếu TK Nợ hoặc tổng chia sai**: Cách xử lý: Kiểm tra thiết lập của phiếu ghi tăng mới nhất và tổng tỷ lệ; sửa dữ liệu nguồn rồi Tính toán lại trước Lập phiếu.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-0-huong-dan-tong-quan-chi-phi-tra-truoc/)** — Tổng quan Chi phí trả trước.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-0-huong-dan-tong-quan-chi-phi-tra-truoc/)** — Tổng quan Chi phí trả trước.
- **[HƯỚNG DẪN GHI NHẬN CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-1-huong-dan-ghi-nhan-chi-phi-tra-truoc/)** — Ghi nhận chi phí trả trước.
- **[HƯỚNG DẪN GHI GIẢM CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-3-huong-dan-ghi-giam-chi-phi-tra-truoc/)** — Ghi giảm chi phí trả trước.
- **[HƯỚNG DẪN IMPORT GHI TĂNG CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-4-huong-dan-import-ghi-tang-chi-phi-tra-truoc/)** — Import ghi tăng chi phí trả trước.
- **[HƯỚNG DẪN NGỪNG VÀ TIẾP TỤC PHÂN BỔ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-5-huong-dan-ngung-va-tiep-tuc-phan-bo-chi-phi-tra-truoc/)** — Ngừng và tiếp tục phân bổ chi phí trả trước.
- **[HƯỚNG DẪN XÓA VÀ TÍNH LẠI CHỨNG TỪ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-6-huong-dan-xoa-va-tinh-lai-chung-tu-chi-phi-tra-truoc/)** — Xóa và tính lại chứng từ chi phí trả trước.
