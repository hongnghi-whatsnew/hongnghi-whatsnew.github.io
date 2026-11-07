---
title: "HƯỚNG DẪN ĐIỀU CHỈNH TÀI SẢN"
date: "2026-11-07"
summary: "Lập chứng từ điều chỉnh các giá trị hồ sơ tài sản theo số liệu đã duyệt."
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

Lập chứng từ điều chỉnh các giá trị hồ sơ tài sản theo số liệu đã duyệt.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Tài sản cần điều chỉnh đã có trong danh sách; chuẩn bị số hiện tại và toàn bộ số sau điều chỉnh theo hồ sơ đã duyệt.
- Có số chứng từ điều chỉnh chưa trùng, lý do và hai ngày hạch toán/chứng từ.
- Mỗi mã chỉ có một dòng trong phiếu; cần giữ căn cứ giá trị cũ vì xóa phiếu không hoàn lại.

## 2. Mở chức năng

**Tài sản & CCDC → Chứng từ tài sản**

## 3. Nhận biết màn hình

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Ghi tăng**, **Xem**, **Điều chỉnh**, **Thêm dòng**, **Hủy**, **Lưu**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin và bảng chi tiết của cửa sổ. Khung  khoanh các nút ở cuối cửa sổ.

![Hình 1: cửa sổ điều chỉnh tài sản chưa chọn tài sản và chưa lưu](/posts/2026-11-07-ts-a02-1-huong-dan-dieu-chinh-tai-san/hinh-01-ts-dieu-chinh.png)

## 4. Trình tự công việc

Nhập số/ngày/lý do phiếu → Chọn tài sản → Đọc giá trị hiện tại → Nhập giá trị mới → Kiểm tổng → Ghi nhận và đối chiếu hồ sơ

## 5. Thực hiện trên phần mềm

1. Nhập đủ **Lý do điều chỉnh**, **Ngày hạch toán**, **Ngày chứng từ**, **Số chứng từ**. Hai ngày mặc định ngày hiện tại; chọn lại đúng hồ sơ và số phiếu điều chỉnh chưa tồn tại.
2. Tại dòng có sẵn, chọn **Mã tài sản** để nạp tên, đơn vị và các giá trị hiện tại. Tên/đơn vị là ô chỉ đọc. Thêm dòng nếu điều chỉnh nhiều tài sản; mỗi mã chỉ được xuất hiện một lần trong cùng phiếu.
3. Lưu lại số hiện tại trong hồ sơ đối chiếu, rồi nhập **toàn bộ giá trị sau điều chỉnh** vào Nguyên giá, Giá trị tính khấu hao, Hao mòn lũy kế; không nhập phần chênh lệch. Giá trị còn lại tự tính khi đổi nguyên giá/hao mòn. Giá trị tính KH không tự đổi theo nguyên giá ở màn này.
4. Kiểm tra các dòng đã chọn mã thật, còn ít nhất một tài sản, không trùng mã và tổng tiền bằng tổng nguyên giá mới. **Lưu** sẽ tạo phiếu và cập nhật trực tiếp các giá trị tài sản; không có bước xem trước chênh lệch riêng trong luồng này.
5. Mở phiếu ở **Chứng từ → Phiếu điều chỉnh**, kiểm tra số dòng, tổng tiền và các mã; mở danh sách tài sản để đối chiếu giá trị mới với hồ sơ đã duyệt. Xóa phiếu sau đó không tự hoàn giá trị tài sản cũ.

## 6. Giải thích các thông tin trên màn hình

- **Lý do điều chỉnh**: Ý nghĩa, cách nhập và quy tắc riêng: Bắt buộc nhập căn cứ điều chỉnh, mặc định trống; nội dung được lưu trên đầu phiếu.
- **Ngày hạch toán**: Ý nghĩa, cách nhập và quy tắc riêng: Bắt buộc chọn ngày ghi nhận điều chỉnh; mặc định ngày hiện tại, hiển thị dd/MM/yyyy.
- **Ngày chứng từ**: Ý nghĩa, cách nhập và quy tắc riêng: Bắt buộc chọn ngày chứng từ; mặc định ngày hiện tại, tách riêng Ngày hạch toán.
- **Số chứng từ**: Ý nghĩa, cách nhập và quy tắc riêng: Bắt buộc nhập, mặc định trống; duy nhất trong bảng phiếu điều chỉnh. Không tự sinh theo mã tài sản.
- **Mã tài sản**: Ý nghĩa, cách nhập và quy tắc riêng: Bắt buộc chọn TSCĐ có trong danh sách. Chọn mã sẽ nạp tên, đơn vị và bốn giá trị hiện hành lên dòng; mỗi tài sản chỉ xuất hiện một lần trong cùng phiếu.
- **Tên tài sản**: Ý nghĩa, cách nhập và quy tắc riêng: Chỉ đọc, tự điền theo mã đã chọn; chọn sai tài sản thì đổi mã, không sửa tên tại phiếu.
- **Đơn vị sử dụng**: Ý nghĩa, cách nhập và quy tắc riêng: Chỉ đọc trên cửa sổ, tự điền từ hồ sơ tài sản đang chọn.
- **Nguyên giá**: Ý nghĩa, cách nhập và quy tắc riêng: Ô nhập giá trị nguyên giá sau điều chỉnh, được nạp trước bằng nguyên giá hiện tại; nhập toàn bộ giá trị mới, không nhập riêng số chênh lệch.
- **Giá trị tính khấu hao**: Ý nghĩa, cách nhập và quy tắc riêng: Ô nhập cơ sở khấu hao sau điều chỉnh; nạp từ hồ sơ và lưu riêng với nguyên giá, không tự đi theo khi đổi nguyên giá trên dòng.
- **Hao mòn lũy kế**: Ý nghĩa, cách nhập và quy tắc riêng: Ô nhập tổng hao mòn sau điều chỉnh; nạp từ hồ sơ hiện tại, không phải số khấu hao phát sinh riêng trong kỳ.
- **Giá trị còn lại**: Ý nghĩa, cách nhập và quy tắc riêng: Chỉ đọc; khi đổi nguyên giá hoặc hao mòn sẽ tính lại bằng Nguyên giá − Hao mòn lũy kế.
- **Tổng tiền**: Ý nghĩa, cách nhập và quy tắc riêng: Chỉ đọc ở đầu/cuối phiếu, bằng tổng Nguyên giá các dòng sau điều chỉnh; không phải tổng chênh lệch.

## 7. Kiểm tra sau khi thực hiện

Theo luồng hiện tại, lưu một phiếu điều chỉnh gồm các dòng tài sản, tổng nguyên giá mới; đồng thời cập nhật nguyên giá, giá trị tính KH, hao mòn, giá trị còn lại trên hồ sơ. Phiếu không lưu ảnh chụp giá trị cũ để tự hoàn khi xóa.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Xóa phiếu không phục hồi số cũ; phải lưu căn cứ trước/sau và nhờ kế toán xác nhận cách sửa nếu nhập nhầm.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Thiếu thông tin bắt buộc**: Cách xử lý riêng: Điền Lý do, hai ngày và Số chứng từ; chọn mã tài sản thật cho từng dòng.
- **Phiếu điều chỉnh phải có ít nhất một tài sản**: Cách xử lý riêng: Giữ ít nhất một dòng đã chọn tài sản; không lưu bảng đã xóa hết dòng.
- **Trùng số chứng từ**: Cách xử lý riêng: Dùng số phiếu điều chỉnh khác theo hồ sơ; không nhập lại một phiếu đã có chỉ vì danh sách chưa tải lại.
- **Cùng tài sản xuất hiện nhiều dòng**: Cách xử lý riêng: Gộp thành một dòng với giá trị sau điều chỉnh; dữ liệu ràng buộc một tài sản một lần trong phiếu.
- **Giá trị mới sai vì nhập chênh lệch**: Cách xử lý riêng: Nguyên giá, cơ sở KH và hao mòn là số sau điều chỉnh; đối chiếu lại trước ghi nhận. Xóa phiếu không tự sửa sai số trên tài sản.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN CHỨNG TỪ TÀI SẢN](/bai-viet/2026-11-07-ts-a02-0-huong-dan-tong-quan-chung-tu-tai-san/)** — Tổng quan Chứng từ tài sản.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN CHỨNG TỪ TÀI SẢN](/bai-viet/2026-11-07-ts-a02-0-huong-dan-tong-quan-chung-tu-tai-san/)** — Tổng quan Chứng từ tài sản.
- **[HƯỚNG DẪN XÓA CHỨNG TỪ GHI TĂNG VÀ ĐIỀU CHỈNH TÀI SẢN](/bai-viet/2026-11-07-ts-a02-2-huong-dan-xoa-chung-tu-ghi-tang-va-dieu-chinh-tai-san/)** — Xóa chứng từ ghi tăng và điều chỉnh tài sản.
