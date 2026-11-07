---
title: "HƯỚNG DẪN GHI TĂNG TÀI SẢN CỐ ĐỊNH"
date: "2026-11-07"
summary: "Ghi nhận tài sản và thiết lập khấu hao, phân bổ, nguồn gốc hình thành."
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

Ghi nhận tài sản và thiết lập khấu hao, phân bổ, nguồn gốc hình thành.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có loại tài sản và đơn vị sử dụng cần chọn; có tài khoản nguyên giá, khấu hao và phương án chi phí phân bổ.
- Có mã TSCĐ và số CT ghi tăng chưa trùng; chuẩn bị nguyên giá, hao mòn đã có, ngày bắt đầu và số tháng/năm sử dụng.
- Nếu lấy chứng từ nguồn gốc từ phiếu chi, xác định đúng phiếu và số tiền hình thành nguyên giá; chuẩn bị đối tượng THCP của đơn vị đang làm việc nếu cần phân bổ.

## 2. Mở chức năng

**Tài sản & CCDC → Danh sách tài sản cố định**

## 3. Nhận biết màn hình

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Danh mục**, **Chứng từ**, **Ghi tăng**, **Import ghi tăng**, **Điều chỉnh**, **Khai báo TSCĐ đầu kỳ**, **Xem**, **Không tính khấu hao**, **Giới hạn giá trị tính KH theo luật thuế TNDN**, **Thêm dòng**, **Xóa hết dòng**, **Chọn chứng từ**, **Hủy**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin và bảng chi tiết của cửa sổ. Khung  khoanh các nút ở cuối cửa sổ.

![Hình 1: cửa sổ ghi tăng tài sản và tab Thông tin khấu hao, chưa nhập và lưu](/posts/2026-11-07-ts-a01-1-huong-dan-ghi-tang-tai-san-co-dinh/hinh-01-ts-ghi-tang-khau-hao.png)

![Hình 2: Tab Thiết lập phân bổ của tài sản, chưa lưu](/posts/2026-11-07-ts-a01-1-huong-dan-ghi-tang-tai-san-co-dinh/hinh-02-ts-ghi-tang-phan-bo.png)

![Hình 3: Tab Nguồn gốc hình thành của tài sản, chưa lưu](/posts/2026-11-07-ts-a01-1-huong-dan-ghi-tang-tai-san-co-dinh/hinh-03-ts-ghi-tang-nguon-goc.png)

## 4. Trình tự công việc

Nhập nhận diện tài sản/chứng từ → Kiểm tài khoản và nguyên giá → Thiết lập khấu hao → Khai phân bổ/nguồn gốc → Ghi tăng → Đối chiếu hồ sơ và phiếu

## 5. Thực hiện trên phần mềm

1. Nhập sáu thông tin bắt buộc: **Số CT ghi tăng**, **Ngày ghi tăng**, **Loại tài sản**, **Mã tài sản**, **Đơn vị sử dụng**, **Tên tài sản**. Số CT và mã tài sản là hai định danh khác nhau; kiểm tra trùng trước khi lập.
2. Chọn loại tài sản rồi kiểm tra lại **TK nguyên giá**, **TK khấu hao** được gợi ý. Nhập **Nguyên giá**, kiểm tra **Giá trị tính khấu hao**: khi giá trị này đã được nhập riêng, thay nguyên giá không bảo đảm nó tiếp tục thay theo.
3. Khai **Ngày bắt đầu tính KH**, số **Thời gian sử dụng** và đơn vị Năm/Tháng. Đọc lại tỷ lệ tháng/năm, KH tháng/năm và **Giá trị còn lại** tự tính theo phần “Giải thích các thông tin trên màn hình”. Nếu tài sản không trích KH, chọn **Không tính khấu hao**; các tỷ lệ và mức KH thông thường về 0.
4. Nếu áp dụng giới hạn theo luật thuế, chọn đúng ô giới hạn và nhập hai giá trị theo luật theo căn cứ đã được người phụ trách duyệt. Hai ô này không được tự suy từ mức KH thông thường.
5. Trong **Thiết lập phân bổ**, chọn mã THCP nếu có, kiểm tra tên, tỷ lệ và TK Chi phí từng dòng. Dòng mới mặc định 100%; đối chiếu tổng tỷ lệ theo phương án trước ghi nhận. Dòng đầu tiên có mã THCP làm căn cứ xác định đối tượng chính.
6. Trong **Nguồn gốc hình thành**, chọn nguồn và nhập các chứng từ hình thành nguyên giá; hoặc **Chọn chứng từ** để lấy phiếu chi. Phiếu chi đã có trong bảng không được thêm lặp; số tiền, ngày, TK Có được lấy từ phiếu chi, TK Nợ lấy TK nguyên giá đang chọn. Kiểm tra lại tổng nguồn gốc với nguyên giá.
7. Trước **Ghi tăng**, sửa các ô bắt buộc còn thiếu, kiểm tra nguyên giá không âm, số CT không trùng và mã chưa tồn tại. Sau ghi nhận, mở lại tài sản cùng phiếu ghi tăng để đối chiếu mã, nguyên giá, hao mòn, phân bổ và chứng từ nguồn.

Khi mở chế độ **Sửa**, các ô nguyên giá, giá trị tính KH, tỷ lệ, thời gian sử dụng, hao mòn và lựa chọn KH bị khóa theo cửa sổ; không dùng màn này thay phiếu điều chỉnh giá trị.

## 6. Giải thích các thông tin trên màn hình

- **Số CT ghi tăng**: Ý nghĩa, cách nhập và quy tắc riêng: Bắt buộc nhập; mặc định trống. Số phiếu ghi tăng phải duy nhất, phân biệt với mã tài sản và số chứng từ nguồn gốc.
- **Ngày ghi tăng**: Ý nghĩa, cách nhập và quy tắc riêng: Bắt buộc; mặc định ngày hiện tại, nhập/chọn ngày ghi nhận tăng thực tế; hiển thị dd/MM/yyyy.
- **Loại tài sản**: Ý nghĩa, cách nhập và quy tắc riêng: Bắt buộc chọn tên loại từ danh mục; chọn loại có TK nguyên giá/TK khấu hao sẽ gợi ý lại hai tài khoản này.
- **Mã tài sản**: Ý nghĩa, cách nhập và quy tắc riêng: Bắt buộc nhập, mặc định trống; tối đa 50 ký tự theo bảng dữ liệu; duy nhất trong các tài sản chưa xóa.
- **Đơn vị sử dụng**: Ý nghĩa, cách nhập và quy tắc riêng: Bắt buộc chọn đơn vị từ danh mục Đơn vị sử dụng; lưu tên đơn vị vào hồ sơ tài sản.
- **Tên tài sản**: Ý nghĩa, cách nhập và quy tắc riêng: Bắt buộc nhập tên nhận biết tài sản; mặc định trống, dùng cùng mã để tìm và đối chiếu hồ sơ.
- **TK nguyên giá**: Ý nghĩa, cách nhập và quy tắc riêng: Chọn tài khoản ghi nhận nguyên giá; mặc định 2112 và có thể được gợi ý lại theo loại. Ô có dấu *; khi sửa hồ sơ ô bị khóa.
- **Nguyên giá**: Ý nghĩa, cách nhập và quy tắc riêng: Nhập nguyên giá, mặc định 0; hệ thống chặn số âm khi ghi tăng mới. Khi thay đổi, Giá trị tính khấu hao đi theo nếu đang bằng 0 hoặc bằng nguyên giá trước đó; khi sửa hồ sơ ô chỉ đọc.
- **Tỷ lệ tính KH tháng (%)**: Ý nghĩa, cách nhập và quy tắc riêng: Tự tính 100/số tháng sử dụng, làm tròn 4 số lẻ; có thể nhập tỷ lệ khác khi ghi tăng mới. Bị vô hiệu khi Không tính khấu hao, bị khóa khi sửa.
- **Tỷ lệ tính KH năm (%)**: Ý nghĩa, cách nhập và quy tắc riêng: Chỉ đọc, bằng tỷ lệ tháng × 12; không nhập trực tiếp.
- **TK khấu hao**: Ý nghĩa, cách nhập và quy tắc riêng: Chọn tài khoản khấu hao; mặc định 2141 và có thể được gợi ý lại theo loại. Ô có dấu *; khi sửa hồ sơ ô bị khóa.
- **Giá trị tính khấu hao**: Ý nghĩa, cách nhập và quy tắc riêng: Nhập cơ sở tính KH riêng nếu khác nguyên giá; mặc định 0, được đồng bộ theo nguyên giá trong điều kiện nêu trên. Khi sửa hồ sơ chỉ đọc.
- **Giá trị khấu hao tháng**: Ý nghĩa, cách nhập và quy tắc riêng: Chỉ đọc. Với tỷ lệ tự sinh: làm tròn Giá trị tính khấu hao / số tháng; nếu tự đổi tỷ lệ: làm tròn Giá trị tính khấu hao × tỷ lệ tháng / 100. Không tính KH thì bằng 0.
- **Giá trị khấu hao năm**: Ý nghĩa, cách nhập và quy tắc riêng: Chỉ đọc, bằng giá trị KH tháng × 12; Không tính KH thì bằng 0.
- **Giá trị tính KH theo luật**: Ý nghĩa, cách nhập và quy tắc riêng: Ô nhập riêng, mặc định 0; chỉ bật khi chọn Giới hạn giá trị tính KH theo luật thuế TNDN. Bỏ chọn đặt lại 0; khi sửa chỉ đọc. Căn cứ nghiệp vụ cần người duyệt xác nhận.
- **Giá trị KH tháng theo luật**: Ý nghĩa, cách nhập và quy tắc riêng: Ô nhập riêng, mặc định 0; chỉ bật khi chọn giới hạn theo luật, không có công thức tự điền trong hàm tính lại KH thông thường. Bỏ giới hạn đặt 0; khi sửa chỉ đọc.
- **Ngày bắt đầu tính KH**: Ý nghĩa, cách nhập và quy tắc riêng: Ngày bắt đầu khấu hao, mặc định ngày hiện tại; chọn theo hồ sơ đưa vào sử dụng, phân biệt với ngày ghi tăng.
- **Thời gian sử dụng**: Ý nghĩa, cách nhập và quy tắc riêng: Nhập số và chọn Năm/Tháng; mặc định 0 Năm. Năm được nhân 12 rồi làm tròn thành tháng; số âm/0 quy đổi thành 0, vì vậy phải kiểm tra để có mức KH mong muốn.
- **Hao mòn lũy kế**: Ý nghĩa, cách nhập và quy tắc riêng: Nhập hao mòn có trước lúc khai báo nếu có, mặc định 0; thay đổi sẽ tính lại giá trị còn lại. Khi sửa hồ sơ chỉ đọc.
- **Giá trị còn lại**: Ý nghĩa, cách nhập và quy tắc riêng: Chỉ đọc, tự tính Nguyên giá − Hao mòn lũy kế.
- **#**: Ý nghĩa, cách nhập và quy tắc riêng: Số thứ tự dòng phân bổ hoặc chứng từ nguồn gốc do màn hình đánh từ 1; không phải mã hồ sơ.
- **Mã đối tượng**: Ý nghĩa, cách nhập và quy tắc riêng: Chọn đối tượng tập hợp chi phí (THCP) trong danh sách tra cứu của chi nhánh hiện tại; chọn sẽ điền tên đối tượng. Dòng đầu tiên có mã đối tượng được dùng xác định đối tượng chính của tài sản.
- **Tên đối tượng**: Ý nghĩa, cách nhập và quy tắc riêng: Tự điền khi chọn mã THCP, đồng thời cho phép nhập tên để mô tả đối tượng/chi phí chung; không tự tạo mã THCP mới.
- **TK Chi phí**: Ý nghĩa, cách nhập và quy tắc riêng: Chọn tài khoản nhận chi phí khấu hao cho dòng phân bổ; dòng mới để trống, không suy từ gợi ý TK nguyên giá.
- **Khoản mục chi phí**: Ý nghĩa, cách nhập và quy tắc riêng: Nhập mã/nội dung khoản mục của dòng phân bổ theo phương án kế toán; dòng mới trống, không tự phát sinh từ mã tài sản.
- **Mã thống kê**: Ý nghĩa, cách nhập và quy tắc riêng: Thông tin thống kê bổ sung theo dòng phân bổ; nhập khi cần theo dõi, mặc định trống.
- **Nguồn gốc hình thành**: Ý nghĩa, cách nhập và quy tắc riêng: Chọn nguồn gốc tài sản; mặc định Mua mới. Bảng bên dưới tập hợp chứng từ hình thành nguyên giá.
- **Ngày chứng từ**: Ý nghĩa, cách nhập và quy tắc riêng: Ngày của từng chứng từ nguồn gốc; nhập tay hoặc lấy ngày chi từ phiếu chi đã chọn. Dòng nhập tay mới mặc định ngày hiện tại.
- **Số chứng từ**: Ý nghĩa, cách nhập và quy tắc riêng: Số chứng từ nguồn gốc của từng dòng, nhập tay hoặc lấy mã phiếu chi (dự phòng trường chứng từ); phân biệt Số CT ghi tăng ở đầu phiếu.
- **Diễn giải**: Ý nghĩa, cách nhập và quy tắc riêng: Nhập diễn giải nguồn gốc; chọn phiếu chi sẽ gợi ý nội dung chi hoặc trường chứng từ của phiếu chi.
- **TK Nợ**: Ý nghĩa, cách nhập và quy tắc riêng: Tài khoản Nợ của chứng từ nguồn gốc; khi chọn phiếu chi được điền từ TK nguyên giá đang chọn của tài sản.
- **TK Có**: Ý nghĩa, cách nhập và quy tắc riêng: Tài khoản Có của chứng từ nguồn gốc; khi chọn phiếu chi lấy số tài khoản quỹ/ngân hàng trên phiếu chi.
- **Không tính khấu hao**: Ý nghĩa, cách nhập và quy tắc riêng: Mặc định bỏ chọn; chọn sẽ đưa tỷ lệ tháng/năm và giá trị KH tháng/năm về 0. Lựa chọn bị khóa khi sửa hồ sơ.

## 7. Kiểm tra sau khi thực hiện

Tạo tài sản và phiếu ghi tăng cùng các dòng phân bổ/nguồn gốc theo thông tin đã khai.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Sửa hồ sơ có các lựa chọn bị vô hiệu hóa theo chế độ; không dùng sửa ghi tăng để thay thế điều chỉnh tài sản đã phát sinh.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Thiếu trường bắt buộc**: Cách xử lý riêng: Kiểm tra Số CT, Ngày ghi tăng, Loại, Mã tài sản, Đơn vị sử dụng, Tên tài sản; các trường này có đây là các thông tin bắt buộc.
- **Nguyên giá không được âm**: Cách xử lý riêng: Sửa nguyên giá theo hồ sơ nguồn; hệ thống kiểm tra khi tạo ghi tăng mới.
- **Trùng mã tài sản hoặc Số CT**: Cách xử lý riêng: Kiểm tra tài sản chưa xóa và phiếu ghi tăng đã có; không tự thêm lại cùng hồ sơ. Nếu đang cần sửa giá trị thì dùng đúng nghiệp vụ điều chỉnh.
- **Các chứng từ đã chọn đều có trong danh sách**: Cách xử lý riêng: Phiếu chi đã có trong bảng nguồn gốc; không cần chọn thêm, kiểm tra lại các dòng hiện hữu.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN DANH SÁCH TÀI SẢN CỐ ĐỊNH](/bai-viet/2026-11-07-ts-a01-0-huong-dan-tong-quan-danh-sach-tai-san-co-dinh/)** — Tổng quan Danh sách tài sản cố định.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN DANH SÁCH TÀI SẢN CỐ ĐỊNH](/bai-viet/2026-11-07-ts-a01-0-huong-dan-tong-quan-danh-sach-tai-san-co-dinh/)** — Tổng quan Danh sách tài sản cố định.
- **[HƯỚNG DẪN IMPORT GHI TĂNG TÀI SẢN CỐ ĐỊNH](/bai-viet/2026-11-07-ts-a01-2-huong-dan-import-ghi-tang-tai-san-co-dinh/)** — Import ghi tăng tài sản cố định.
