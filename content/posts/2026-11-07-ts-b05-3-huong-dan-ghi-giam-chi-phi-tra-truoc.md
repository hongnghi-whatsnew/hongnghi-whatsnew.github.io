---
title: "HƯỚNG DẪN GHI GIẢM CHI PHÍ TRẢ TRƯỚC"
date: "2026-11-07"
summary: "Lập phiếu ghi giảm khoản chi phí trả trước theo giá trị còn lại đã kiểm tra."
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

Lập phiếu ghi giảm khoản chi phí trả trước theo giá trị còn lại đã kiểm tra.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: lập phiếu ghi giảm khoản chi phí trả trước theo giá trị còn lại đã kiểm tra.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Chi phí trả trước**

## 3. Nhận biết màn hình

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Import ghi tăng**, **Thêm chi phí trả trước**, **Xem**, **Tính phân bổ**, **Ghi giảm**, **Xóa**, **Thêm dòng**, **Hủy**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin và bảng chi tiết của cửa sổ. Khung  khoanh các nút ở cuối cửa sổ.

![Hình 1: cửa sổ ghi giảm chi phí trả trước chưa thêm dòng và chưa lưu](/posts/2026-11-07-ts-b05-3-huong-dan-ghi-giam-chi-phi-tra-truoc/hinh-01-cptt-ghi-giam-form.png)

## 4. Trình tự công việc

Nhập số/ngày/lý do ghi giảm → Chọn khoản còn giá trị → Kiểm số tiền và tài khoản → Ghi giảm → Đối chiếu phiếu và số dư

## 5. Thực hiện trên phần mềm

1. Nhập số chứng từ nếu đã cấp (có thể trống để hệ thống sinh), chọn ngày ghi giảm và lý do kết chuyển phần chi phí còn lại.
2. Thêm dòng và chọn khoản chi phí trả trước có **Còn lại > 0**. Kiểm tra mã/tên, số còn lại và TK Có tự lấy từ TK chờ PB của khoản đó (thiếu thì 242).
3. Chọn **TK Nợ (chi phí)**; nhập số ghi giảm > 0, không vượt số còn lại. Khi chọn khoản mà số tiền đang bằng 0, ô số tiền được điền bằng toàn bộ số còn lại; sửa lại nếu chỉ ghi giảm một phần.
5. Kiểm tra phiếu ghi giảm và hồ sơ: số đã phân bổ tăng theo số ghi giảm, còn lại giảm tương ứng; hết giá trị chuyển **Đã phân bổ hết**. Nếu cần đảo phiếu dùng [HƯỚNG DẪN XÓA VÀ TÍNH LẠI CHỨNG TỪ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-6-huong-dan-xoa-va-tinh-lai-chung-tu-chi-phi-tra-truoc/) để hoàn lại số đã ghi giảm.

## 6. Giải thích các thông tin trên màn hình

- **Số chứng từ**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập số phiếu ghi giảm nếu đã có; cho phép để trống để hệ thống sinh số khi lập phiếu.
- **Ngày ghi giảm**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày ghi trên phiếu kết chuyển phần giá trị còn lại; khi lập mới mặc định hôm nay.
- **Lý do**: Ý nghĩa, cách nhập hoặc đối chiếu: Nội dung giải thích nghiệp vụ đã nhập trên phiếu; đọc trước khi điều chỉnh hoặc xóa, không phải số tiền điều chỉnh.
- **#**: Ý nghĩa, cách nhập hoặc đối chiếu: Số thứ tự dòng do giao diện hiển thị; không phải mã hồ sơ, không nhập.
- **Chi phí trả trước**: Ý nghĩa, cách nhập hoặc đối chiếu: Chọn khoản có giá trị còn lại > 0; danh sách chọn đã loại các khoản không còn giá trị.
- **Tên**: Ý nghĩa, cách nhập hoặc đối chiếu: Tên khoản tự điền theo mã chi phí đã chọn; đối chiếu để tránh chọn sai đợt.
- **Còn lại**: Ý nghĩa, cách nhập hoặc đối chiếu: Chỉ xem số còn lại của khoản khi chọn; dùng làm giới hạn số tiền ghi giảm.
- **TK Nợ (chi phí)**: Ý nghĩa, cách nhập hoặc đối chiếu: Chọn tài khoản nhận chi phí do ghi giảm phần trả trước; dòng mới để trống, cần đối chiếu trước ghi nhận.
- **TK Có**: Ý nghĩa, cách nhập hoặc đối chiếu: Tự lấy TK chờ phân bổ của khoản được chọn, nếu thiếu dùng 242; kiểm tra và chọn lại nếu phương án hạch toán khác.
- **Số tiền ghi giảm**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập số > 0; khi chọn khoản, mặc định bằng số còn lại nếu ô đang 0. SQL giới hạn số ghi nhận bằng mức nhỏ hơn giữa số nhập và còn lại; cần đối chiếu số thực ghi nhận.

## 7. Kiểm tra sau khi thực hiện

Có phiếu ghi giảm và số giá trị còn lại cập nhật theo các dòng hợp lệ.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Phiếu phải có ít nhất một dòng hợp lệ. Không dùng ngừng phân bổ thay cho ghi giảm giá trị.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Chọn ít nhất một khoản và nhập số tiền ghi giảm**: Cách xử lý: Phải chọn khoản có còn lại và số tiền > 0; dòng chưa chọn khoản hoặc số tiền không dương bị lọc khỏi yêu cầu.
- **Số phiếu thực ghi nhận nhỏ hơn số đã nhập**: Cách xử lý: SQL giới hạn mỗi dòng theo còn lại; mở chi tiết phiếu và đối chiếu số thực ghi, không tiếp tục nhập thêm để bù khi chưa kiểm tra.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN TÍNH VÀ LẬP PHIẾU PHÂN BỔ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-2-huong-dan-tinh-va-lap-phieu-phan-bo-chi-phi-tra-truoc/)** — Tính và lập phiếu phân bổ chi phí trả trước.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TÍNH VÀ LẬP PHIẾU PHÂN BỔ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-2-huong-dan-tinh-va-lap-phieu-phan-bo-chi-phi-tra-truoc/)** — Tính và lập phiếu phân bổ chi phí trả trước.
- **[HƯỚNG DẪN TỔNG QUAN CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-0-huong-dan-tong-quan-chi-phi-tra-truoc/)** — Tổng quan Chi phí trả trước.
- **[HƯỚNG DẪN GHI NHẬN CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-1-huong-dan-ghi-nhan-chi-phi-tra-truoc/)** — Ghi nhận chi phí trả trước.
- **[HƯỚNG DẪN IMPORT GHI TĂNG CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-4-huong-dan-import-ghi-tang-chi-phi-tra-truoc/)** — Import ghi tăng chi phí trả trước.
- **[HƯỚNG DẪN NGỪNG VÀ TIẾP TỤC PHÂN BỔ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-5-huong-dan-ngung-va-tiep-tuc-phan-bo-chi-phi-tra-truoc/)** — Ngừng và tiếp tục phân bổ chi phí trả trước.
- **[HƯỚNG DẪN XÓA VÀ TÍNH LẠI CHỨNG TỪ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-6-huong-dan-xoa-va-tinh-lai-chung-tu-chi-phi-tra-truoc/)** — Xóa và tính lại chứng từ chi phí trả trước.
