---
title: "HƯỚNG DẪN GHI TĂNG CÔNG CỤ DỤNG CỤ"
date: "2026-11-07"
summary: "Ghi nhận CCDC cùng số kỳ phân bổ, đơn vị sử dụng và nguồn gốc hình thành."
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

Ghi nhận CCDC cùng số kỳ phân bổ, đơn vị sử dụng và nguồn gốc hình thành.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: ghi nhận CCDC cùng số kỳ phân bổ, đơn vị sử dụng và nguồn gốc hình thành.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Danh sách CCDC**

## 3. Nhận biết màn hình

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Danh mục**, **Ghi tăng**, **Import ghi tăng**, **Xem**, **Ngừng phân bổ**, **Thêm dòng**, **Xóa hết dòng**, **Hủy**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin và bảng chi tiết của cửa sổ. Khung  khoanh các nút ở cuối cửa sổ.

![Hình 1: cửa sổ ghi tăng CCDC, tab Đơn vị sử dụng chưa lưu](/posts/2026-11-07-ts-b01-1-huong-dan-ghi-tang-cong-cu-dung-cu/hinh-01-ccdc-ghi-tang-don-vi.png)

![Hình 2: Thiết lập phân bổ CCDC chưa lưu](/posts/2026-11-07-ts-b01-1-huong-dan-ghi-tang-cong-cu-dung-cu/hinh-02-ccdc-ghi-tang-phan-bo.png)

![Hình 3: Tab Mô tả chi tiết CCDC chưa nhập](/posts/2026-11-07-ts-b01-1-huong-dan-ghi-tang-cong-cu-dung-cu/hinh-03-ccdc-ghi-tang-mo-ta.png)

![Hình 4: Tab Nguồn gốc hình thành CCDC chưa nhập chứng từ](/posts/2026-11-07-ts-b01-1-huong-dan-ghi-tang-cong-cu-dung-cu/hinh-04-ccdc-ghi-tang-nguon-goc.png)

## 4. Trình tự công việc

Khai mã/ngày/loại công cụ → Nhập lượng và giá trị → Chọn số kỳ/tài khoản → Khai đơn vị và phân bổ → Ghi tăng → Đối chiếu hồ sơ/phiếu

## 5. Thực hiện trên phần mềm

1. Nhập số CT, ngày ghi tăng, mã và tên công cụ; chọn loại để kiểm tra tài khoản được gợi ý, nhập nhóm và ĐVT theo hồ sơ.
2. Nhập số lượng và đơn giá; kiểm tra thành tiền tự tính. Nếu nhập thành tiền trực tiếp, đối chiếu lại chứng từ nguồn trước nhập số kỳ. Kiểm tra PB hàng kỳ, số đã phân bổ đầu kỳ và số còn lại.
3. Chọn ngày bắt đầu phân bổ và TK chờ phân bổ. Chỉ đánh dấu **Ngừng phân bổ** nếu công cụ chưa được tính trong các kỳ tiếp theo; mặc định chưa chọn.
4. Tại **Đơn vị sử dụng**, chọn từng đơn vị và nhập số lượng giao; đối chiếu tổng số lượng với số lượng công cụ. Tại **Thiết lập phân bổ**, chọn THCP, kiểm tra tên, nhập tỷ lệ và TK chi phí từng dòng. Đối chiếu tổng tỷ lệ 100% theo phương án nghiệp vụ; không trông chờ hệ thống tự chặn tổng sai.
5. Tại **Nguồn gốc hình thành**, chọn nguồn gốc rồi nhập các chứng từ căn cứ và số tiền từng dòng. Tổng bảng nguồn gốc là số đối chiếu, không tự thay thành tiền ở đầu cửa sổ. Ô **Mô tả chi tiết** chưa được gửi khi lưu theo luồng hiện tại.
6. Trước **Ghi tăng**, kiểm tra bốn trường bắt buộc và mã chưa tồn tại. Khi sửa, các ô số lượng, đơn giá, giá trị, số kỳ, đã phân bổ và TK chờ phân bổ bị khóa; dùng [HƯỚNG DẪN ĐIỀU CHỈNH CCDC](/bai-viet/2026-11-07-ts-b02-1-huong-dan-dieu-chinh-ccdc/) nếu cần điều chỉnh số liệu. Đối chiếu lại đơn vị, thiết lập và chứng từ nguồn sau ghi nhận.

## 6. Giải thích các thông tin trên màn hình

- **Số CT ghi tăng**: Ý nghĩa, cách nhập hoặc đối chiếu: Bắt buộc nhập số phiếu ghi tăng; cửa sổ mới để trống, không tự sinh tại ô này.
- **Ngày ghi tăng**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày trên phiếu ghi tăng; cột chỉ xem. Khi lập mới, bắt buộc chọn ngày, mặc định ngày hiện tại.
- **Nhóm CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Ô chữ nhập nhóm quản lý công cụ; không bắt buộc và không tự suy từ loại.
- **Số kỳ phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập số nguyên không âm, mặc định 0; > 0 mới phát sinh mức PB hàng kỳ. Khi Sửa hồ sơ, ô này chỉ xem; thay giá trị/số kỳ bằng phiếu điều chỉnh.
- **Mã CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Bắt buộc nhập mã riêng của công cụ; mã đang tồn tại bị từ chối khi tạo mới. Không dùng lại mã chỉ vì công cụ có cùng tên.
- **Loại CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Chọn loại từ danh mục; nếu loại có TK chờ phân bổ, tài khoản được gợi ý theo loại. Có thể thêm loại qua nút cạnh ô chọn.
- **TK chờ phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Chọn tài khoản chờ phân bổ, mặc định 242 hoặc gợi ý của loại. Khi Sửa hồ sơ, ô chọn bị khóa.
- **Số tiền PB hàng kỳ**: Ý nghĩa, cách nhập hoặc đối chiếu: Chỉ xem; cửa sổ tính làm tròn Giá trị CCDC / số kỳ khi số kỳ > 0, bằng 0 nếu số kỳ bằng 0.
- **Tên CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Bắt buộc nhập tên công cụ; dùng mô tả đủ để nhận diện cùng mã.
- **Lý do ghi tăng**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập nội dung giải thích việc đưa công cụ vào sử dụng; lưu tại đầu phiếu ghi tăng, không phải mô tả từng chứng từ nguồn.
- **Đơn vị tính**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập đơn vị đo số lượng, ví dụ Cái/Bộ; không bắt buộc theo cửa sổ hiện tại.
- **Số lượng**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập số lượng ghi tăng không âm, mặc định 1; đổi số lượng sẽ tính lại thành tiền. Khi Sửa hồ sơ, ô này chỉ xem.
- **Đơn giá**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập giá trị một đơn vị không âm, mặc định 0; đổi đơn giá sẽ tính lại thành tiền. Khi Sửa hồ sơ, ô này chỉ xem.
- **Thành tiền (Giá trị CCDC)**: Ý nghĩa, cách nhập hoặc đối chiếu: Tự tính và làm tròn từ số lượng × đơn giá khi hai ô này thay đổi; có thể nhập trực tiếp lúc ghi tăng, không nhận giá trị âm. Khi Sửa hồ sơ, ô này chỉ xem.
- **Ngày bắt đầu phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Mốc bắt đầu xét phân bổ; hồ sơ chỉ được tính khi ngày này không sau cuối tháng đang tính (trống vẫn được xét).
- **Giá trị đã phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập số đã phân bổ trước khi khai báo, mặc định 0, không âm; lúc Sửa hồ sơ ô này chỉ xem.
- **Giá trị còn lại**: Ý nghĩa, cách nhập hoặc đối chiếu: Chỉ xem; tự tính Giá trị CCDC − Giá trị đã phân bổ. Kiểm tra số này trước ghi tăng.
- **#**: Ý nghĩa, cách nhập hoặc đối chiếu: Số thứ tự dòng do giao diện hiển thị; không phải mã hồ sơ, không nhập.
- **Mã đơn vị**: Ý nghĩa, cách nhập hoặc đối chiếu: Chọn đơn vị từ danh mục Đơn vị sử dụng; lựa chọn điền cả mã và tên, sau đó nhập số lượng cho từng đơn vị.
- **Tên đơn vị**: Ý nghĩa, cách nhập hoặc đối chiếu: Tên đơn vị nhận sử dụng, điền theo đơn vị chọn; đối chiếu cùng mã và số lượng trong bảng đơn vị.
- **Đối tượng phân bổ (THCP)**: Ý nghĩa, cách nhập hoặc đối chiếu: Chọn mã đối tượng tập hợp chi phí từ danh sách theo chi nhánh đang đăng nhập; chọn đối tượng sẽ điền mã và tên cho dòng nhận chi phí.
- **Tên đối tượng**: Ý nghĩa, cách nhập hoặc đối chiếu: Tên bên nhận phân bổ; được điền khi chọn THCP và có thể nhập để mô tả chi phí chung.
- **Tỷ lệ phân bổ (%)**: Ý nghĩa, cách nhập hoặc đối chiếu: Tỷ lệ chia số phân bổ kỳ cho dòng này; dòng mới mặc định 100%. Đối chiếu tổng tỷ lệ trước ghi nhận; chưa có bằng chứng hệ thống tự chặn tổng khác 100%.
- **TK Chi phí**: Ý nghĩa, cách nhập hoặc đối chiếu: Chọn tài khoản nhận chi phí của dòng phân bổ; được đưa sang TK Nợ khi tính phân bổ.
- **Khoản mục chi phí**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập tên/mã khoản mục để lưu kèm dòng thiết lập phân bổ; không tự chọn TK chi phí thay cho người lập.
- **Mã thống kê**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập mã thống kê bổ sung cho dòng thiết lập phân bổ khi đơn vị có sử dụng; có thể để trống.
- **Nguồn gốc hình thành**: Ý nghĩa, cách nhập hoặc đối chiếu: Chọn hoặc nhập nguồn gốc, mặc định “Mua công cụ về dùng ngay”; là thông tin đầu phiếu, khác với bảng chứng từ nguồn bên dưới.
- **Ngày chứng từ**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày của chứng từ nguồn hoặc phiếu điều chỉnh; nhập/chọn đúng ngày trên hồ sơ, độc lập với ngày hạch toán.
- **Số chứng từ**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập số chứng từ nguồn để truy vết dòng tập hợp; không phải Số CT ghi tăng ở đầu cửa sổ.
- **Diễn giải**: Ý nghĩa, cách nhập hoặc đối chiếu: Nội dung của từng dòng chứng từ nguồn; nhập theo chi phí phát sinh, không tự thay tên hồ sơ.
- **TK Nợ**: Ý nghĩa, cách nhập hoặc đối chiếu: Tài khoản Nợ trên dòng chứng từ nguồn; nhập/chọn theo chứng từ thực tế, không đồng nghĩa TK chi phí của thiết lập phân bổ.
- **TK Có**: Ý nghĩa, cách nhập hoặc đối chiếu: Tài khoản Có trên dòng chứng từ nguồn; nhập/chọn theo chứng từ thực tế.
- **Số tiền**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhập số tiền riêng của từng dòng chứng từ nguồn; tổng các dòng hiển thị để đối chiếu với giá trị CCDC, không tự cộng vào thành tiền đầu cửa sổ.
- **Ngừng phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Ô chọn, mặc định bỏ chọn; đánh dấu để loại công cụ khỏi tính phân bổ kỳ mới. Không tự hoàn lại phiếu đã lập.

## 7. Kiểm tra sau khi thực hiện

Có CCDC, phiếu ghi tăng và các dòng đơn vị/phân bổ/nguồn gốc.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Sửa giá trị đã phân bổ cần đối chiếu phiếu kỳ trước. Không mặc định tổng tỷ lệ luôn được phần mềm chuẩn hóa về 100%.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Mã CCDC đã tồn tại**: Cách xử lý: Tra lại hồ sơ theo mã. Nếu là công cụ cũ dùng Sửa/Điều chỉnh; nếu là công cụ khác phải cấp mã mới.
- **Thiếu số CT, mã, tên hoặc ngày ghi tăng**: Cách xử lý: Điền các ô bắt buộc trước Ghi tăng; số CT không được tự sinh trong cửa sổ này.
- **Giá trị CCDC không được âm**: Cách xử lý: Kiểm tra thành tiền nhập trực tiếp cùng số lượng/đơn giá; không dùng số âm như phiếu ghi giảm.

## 10. Câu hỏi thường gặp

**Tổng bảng chứng từ nguồn có tự cập nhật giá trị đầu hồ sơ không?** Không thấy luồng cộng ngược trong luồng hiện tại; nhập giá trị gốc và đối chiếu tổng nguồn riêng trước ghi nhận.

## 11. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN DANH SÁCH CCDC](/bai-viet/2026-11-07-ts-b01-0-huong-dan-tong-quan-danh-sach-ccdc/)** — Tổng quan Danh sách CCDC.

## 12. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN DANH SÁCH CCDC](/bai-viet/2026-11-07-ts-b01-0-huong-dan-tong-quan-danh-sach-ccdc/)** — Tổng quan Danh sách CCDC.
- **[HƯỚNG DẪN IMPORT GHI TĂNG CCDC ĐẦU KỲ](/bai-viet/2026-11-07-ts-b01-2-huong-dan-import-ghi-tang-ccdc-dau-ky/)** — Import ghi tăng CCDC đầu kỳ.
