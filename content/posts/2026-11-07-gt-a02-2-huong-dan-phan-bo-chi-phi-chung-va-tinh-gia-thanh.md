---
title: "HƯỚNG DẪN PHÂN BỔ CHI PHÍ CHUNG VÀ TÍNH GIÁ THÀNH"
date: "2026-11-07"
summary: "Phân bổ chi phí chung vào đối tượng và kiểm tra bảng giá thành của kỳ."
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

Phân bổ chi phí chung vào đối tượng và kiểm tra bảng giá thành của kỳ.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Đăng nhập đúng tên miền và tài khoản chi nhánh; kiểm tra tên kỳ và khoảng ngày cần tính.
- Kỳ đã lập với các đối tượng cần tính, chưa kết chuyển. Chi phí và sản lượng nguồn đã được rà soát.
- Đối chiếu gán đối tượng cho hàng hóa, tài khoản chi phí, các phiếu khấu hao/phân bổ liên quan và phương án phân bổ của kỳ.
- Ghi lại số liệu kỳ trước khi tính để đối chiếu ảnh hưởng sau thao tác, nhất là các thành phẩm gia công.

## 2. Nhận biết màn hình

![Giao diện danh sách trước thao tác — Gia Phúc/dev, 25/10/2026; chưa thực hiện tính, gán, xóa hoặc kết chuyển trong ảnh.](/posts/2026-11-07-gt-a02-2-huong-dan-phan-bo-chi-phi-chung-va-tinh-gia-thanh/hinh-01-danh-sach-truoc-thao-tac.png)

Cửa sổ **Tính giá thành sản xuất liên tục giản đơn** gồm hai bước:

- **PHÂN BỔ CHI PHÍ CHUNG**: Nội dung: Bảng Xác định chi phí phân bổ, Xem chứng từ nguồn, nút Phân bổ, bảng Kết quả phân bổ.
- **TÍNH GIÁ THÀNH**: Nội dung: Bảng giá thành tổng hợp và Giá thành theo thành phẩm nhóm theo đối tượng.
- **Tiếp theo, Quay lại**: Nội dung: Chuyển giữa hai bước.
- **Lưu, Hủy**: Nội dung: Kết thúc cửa sổ hoặc đóng; không thay cho thao tác hoàn tác dữ liệu đã phân bổ.

## 3. Trình tự công việc

Chọn kỳ → Đối chiếu nguồn → Chọn tiền, tiêu thức, đối tượng → Phân bổ
→ Kiểm tra kết quả → Tiếp theo → Kiểm tra giá thành → Lưu → Bàn giao kết chuyển

### Bước 1 — Đối chiếu chi phí được tổng hợp cho kỳ

Tại kỳ chưa kết chuyển, chọn **Xem → Tính giá thành**. Đối chiếu tên kỳ trên cửa sổ **Tính giá thành sản xuất liên tục giản đơn**. Chờ hết **Đang tải dữ liệu chi phí chung...** trước khi thao tác.

Cửa sổ tự tổng hợp và nạp chi phí của kỳ khi mở. Tại **Xác định chi phí phân bổ**, đối chiếu từng **Số tài khoản**, **Tên tài khoản**, **Tổng chi phí** và tổng cuối bảng. Nếu chi phí thiếu hoặc khác sổ đối chiếu, kiểm tra nguồn trước khi chọn Phân bổ.

Tại dòng tài khoản cần tra cứu, chọn **Xem** ở cột **Chi tiết chứng từ**. Cửa sổ **Chứng từ chi phí chung — TK …** cho biết **Ngày hạch toán**, **Số chứng từ**, **Loại chứng từ**, **Diễn giải**, **TK**, **Số tiền**. Dùng số chứng từ để đối chiếu hồ sơ nguồn, sau đó đóng cửa sổ chi tiết để trở lại phân bổ.

### Bước 2 — Chọn phần chi phí phân bổ lần này

Trên từng dòng chi phí chung, nhập **% Phân bổ lần này** từ 0 đến 100 hoặc nhập **Số phân bổ lần này**:

- Nhập tỷ lệ thì phần mềm tính số tiền làm tròn theo **Tổng chi phí** của dòng.
- Nhập số tiền thì phần mềm tính lại tỷ lệ; số tiền giới hạn trong khoảng từ 0 đến tổng chi phí.
- **Số chưa phân bổ** = **Tổng chi phí** trừ **Số phân bổ lần này**. Kiểm tra phần còn lại theo phương án phân bổ đã duyệt.

Ví dụ giả định dòng chi phí 10.000.000 đồng, phân bổ 80% thì số phân bổ là 8.000.000 đồng, số chưa phân bổ là 2.000.000 đồng. Ví dụ chỉ giải thích ô nhập; dùng số liệu hồ sơ của kỳ khi thao tác.

### Bước 3 — Chọn tiêu thức và tập đối tượng nhận chi phí

Ở **Tiêu thức phân bổ**, chọn theo phương án kế toán của từng khoản:

- **Hệ số (số mặt × số lượng)**: Cơ sở dùng để chia chi phí: Sản lượng quy đổi của các đối tượng trong tập được áp dụng.
- **Nguyên vật liệu trực tiếp**: Cơ sở dùng để chia chi phí: Chi phí NVL trực tiếp của các đối tượng được chọn.
- **Số lượng sản phẩm**: Cơ sở dùng để chia chi phí: Số lượng sản phẩm của các đối tượng được chọn.

Tại **Đối tượng THCP (🔍 chọn)**, chọn các mã nhận khoản chi phí đó. Không chọn mã nào nghĩa là **Tất cả** đối tượng của kỳ, không phải bỏ qua dòng chi phí. Kiểm tra lại danh sách mã được hiển thị sau khi đóng ô chọn.

Tiêu thức mặc định khi nạp có thể là **Hệ số (số mặt × số lượng)**; kiểm tra từng dòng thay vì mặc nhiên dùng cùng một tiêu thức cho toàn bộ tài khoản.

### Bước 4 — Phân bổ và kiểm tra kết quả theo tài khoản

Chọn **Phân bổ**, đợi hết **Đang phân bổ & tính giá thành, vui lòng đợi...**. Thao tác này tính và ghi kết quả của kỳ. Không dùng **Hủy** sau bước này với kỳ vọng trả dữ liệu về trước khi tính.

Tại **Kết quả phân bổ**, đối chiếu **Mã đối tượng THCP**, **Tên đối tượng THCP**, các cột **Tỷ lệ (%)**, **Số tiền** của từng tài khoản và **Tổng chi phí**. Các nhóm cột tài khoản phụ thuộc dữ liệu kỳ; không yêu cầu số cột phải giống kỳ trước.

- Đối chiếu số tiền nhận theo từng đối tượng với tập mã đã chọn ở bước 3.
- Đối chiếu tổng tiền từng tài khoản với số dự kiến phân bổ; rà soát chênh lệch làm tròn nếu chia nhiều đối tượng.
- Khi cơ sở của tiêu thức bằng 0, phần mềm xét tiếp sản lượng quy đổi rồi số lượng; nếu vẫn không có cơ sở, tỷ lệ và số phân bổ có thể bằng 0. Rà soát kỳ và sản lượng trước khi chuyển bước.

Nếu thay tỷ lệ, tiêu thức hoặc tập đối tượng, chọn **Phân bổ** lại để cập nhật kết quả; không chỉ sửa ô rồi chuyển sang bảng giá thành.

### Bước 5 — Kiểm tra hai bảng giá thành

Chọn **Tiếp theo**. Ở **Bảng giá thành**, kiểm tra từng mã, các khoản **NVL trực tiếp**, **Nhân công trực tiếp**, **Khấu hao**, **Chi phí mua ngoài**, **Chi phí khác**, **Tổng**, **Số lượng**, **Đơn giá thành**. Đối chiếu tổng với chi phí trực tiếp, chi phí đã phân bổ và các khoản giảm của đối tượng.

Bảng thứ hai **Giá thành theo thành phẩm** được nhóm theo **Đối tượng THCP**. Trong từng nhóm, kiểm tra **Mã thành phẩm**, **Tên thành phẩm**, **Sản lượng**, **Hệ số**, **SL quy đổi**, **Giá thành**, **Đơn giá**. Bảng này cho biết giá thành từng thành phẩm cụ thể; dùng để kiểm tra thành phẩm có hệ số hoặc sản lượng khác nhau trong cùng đối tượng.

Nếu số lượng bằng 0 hoặc đơn giá bằng 0 ngoài dự kiến, rà soát nguồn sản lượng và gán đối tượng; không coi chỉ có tổng chi phí là đã đủ kết quả. Dùng **Quay lại** để rà soát tiêu thức/tỷ lệ rồi **Phân bổ** lại khi cần.

### Bước 6 — Kết thúc và bàn giao kết quả kỳ

Sau khi đối chiếu hai bảng, chọn **Lưu**. Đọc hộp **Thông báo** rồi chọn **Đóng**; trở về danh sách và kiểm tra lại kỳ, các tổng và trạng thái tính. Ghi lại tên kỳ, phạm vi ngày, tiêu thức và phần chưa phân bổ để người phụ trách kế toán đối chiếu.

**Lưu** kết thúc cửa sổ sau bước phân bổ; kết chuyển chi phí là luồng riêng ở **[HƯỚNG DẪN KẾT CHUYỂN CHI PHÍ GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-3-huong-dan-ket-chuyen-chi-phi-gia-thanh/)**. Nếu phát hiện sai sau tính, dừng bước kết chuyển để rà soát nguồn và tính lại kỳ; kỳ đã kết chuyển phải theo **[HƯỚNG DẪN HỦY KẾT CHUYỂN VÀ MỞ LẠI KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-4-huong-dan-huy-ket-chuyen-va-mo-lai-ky-tinh-gia-thanh/)** trước khi sửa.

## 5. Giải thích các thông tin trên màn hình

- **Số tài khoản, Tên tài khoản**: Cách dùng và đối chiếu: Dòng chi phí chung cần chọn phần phân bổ, tiêu thức và tập đối tượng riêng.
- **Tổng chi phí**: Cách dùng và đối chiếu: Giá trị chi phí của dòng tài khoản đã tổng hợp; dùng làm cơ sở tính số phân bổ lần này.
- **% Phân bổ lần này**: Cách dùng và đối chiếu: Tỷ lệ 0–100 trên tổng chi phí; nhập tỷ lệ tự tính số tiền.
- **Số phân bổ lần này**: Cách dùng và đối chiếu: Phần tiền đưa vào phân bổ; nhập số tiền tự tính lại tỷ lệ.
- **Số chưa phân bổ**: Cách dùng và đối chiếu: Tổng chi phí trừ số phân bổ lần này; cần theo dõi khi bàn giao kỳ.
- **Tiêu thức phân bổ**: Cách dùng và đối chiếu: Căn cứ chia phần tiền cho tập đối tượng đã chọn.
- **Đối tượng THCP (🔍 chọn)**: Cách dùng và đối chiếu: Tập đối tượng nhận chi phí của dòng; để trống hiển thị Tất cả.
- **Chi tiết chứng từ**: Cách dùng và đối chiếu: Nút Xem danh sách nguồn tạo nên chi phí chung của tài khoản.
- **Tỷ lệ (%), Số tiền trong Kết quả phân bổ**: Cách dùng và đối chiếu: Tỷ trọng và tiền nhận của đối tượng trong từng nhóm tài khoản; các cột sinh theo dữ liệu kỳ.
- **Tổng chi phí trong Kết quả phân bổ**: Cách dùng và đối chiếu: Tổng theo đối tượng; dùng cùng chi phí trực tiếp khi rà soát kết quả kỳ.
- **Mã thành phẩm, Tên thành phẩm tại Bảng giá thành**: Cách dùng và đối chiếu: Dòng tổng hợp của đối tượng; đối chiếu với nhóm Đối tượng THCP trong bảng thành phẩm bên dưới.
- **NVL trực tiếp, Nhân công trực tiếp, Khấu hao, Chi phí mua ngoài, Chi phí khác**: Cách dùng và đối chiếu: Các nhóm chi phí đưa vào giá thành; đối chiếu nguồn tài khoản và khoản giảm, không cộng lại khoản giảm lần thứ hai.
- **NVL gián tiếp, Nhân công gián tiếp**: Cách dùng và đối chiếu: Cột hiển thị trên bảng; khi không có giá trị, đối chiếu các nhóm chi phí và tổng thay vì tự điền bù.
- **Tổng, Số lượng, Đơn giá thành**: Cách dùng và đối chiếu: Tổng giá thành đối tượng và sản lượng; đơn giá = tổng / số lượng, làm tròn khi số lượng dương, bằng 0 khi không có sản lượng.
- **Sản lượng, Hệ số, SL quy đổi**: Cách dùng và đối chiếu: Cơ sở kiểm tra phần chi phí chia xuống từng mã thành phẩm; hệ số gia công phụ thuộc số mặt và dữ liệu giấy thực tế.
- **Giá thành, Đơn giá tại Giá thành theo thành phẩm**: Cách dùng và đối chiếu: Giá thành của mã cụ thể và giá thành / sản lượng; kiểm tra theo từng nhóm đối tượng.

Số phân bổ của một đối tượng được tính từ tổng chi phí × tỷ lệ phân bổ lần này × phần cơ sở của đối tượng trong tập được chọn, sau đó làm tròn. Ví dụ phần phân bổ 8.000.000 đồng với hai đối tượng có cơ sở 1:3 chia thành 2.000.000 và 6.000.000 đồng.

Giá thành theo thành phẩm có phần NVL được gắn cho mã cụ thể và phần chia theo sản lượng quy đổi. Không lấy một đơn giá bình quân của đối tượng áp cho mọi mã nếu bảng chi tiết cho đơn giá khác nhau.

## 6. Kiểm tra sau khi thực hiện

Kỳ có kết quả phân bổ, bảng giá thành theo đối tượng và bảng theo từng thành phẩm; trạng thái chuyển sang đã tính theo luồng phân bổ. Kiểm tra lại số liệu từ kỳ sau khi đóng cửa sổ, rồi mới bàn giao bước kết chuyển.

## 7. Những điều cần lưu ý

⚠️ **Phân bổ** là thao tác ghi kết quả tính. **Hủy** hoặc **Quay lại** không phải nút hoàn tác lần tính đã thực hiện.

⚠️ Sau khi sửa tỷ lệ, tiêu thức hoặc tập đối tượng, phải **Phân bổ** lại để các bảng kết quả phản ánh lựa chọn mới.

⚠️ Không sửa chứng từ trong kỳ trong khi đang xử lý tính giá. Khi số liệu thay đổi, đối chiếu và tính lại trước bước kết chuyển.

⚠️ Kiểm tra riêng thành phẩm gia công và hồ sơ giá vốn liên quan sau tính. Không coi việc chưa kết chuyển là bằng chứng mọi giá vốn liên quan còn nguyên.

### "Kỳ đã kết chuyển. Vui lòng hủy phiếu kết chuyển trước khi Tính/Kết chuyển/Sửa/Xóa." 

Nguyên nhân: kỳ được chọn đã kết chuyển nên thao tác thay đổi số bị khóa.

Cách xử lý: nếu cần điều chỉnh kỳ, thực hiện đúng **[HƯỚNG DẪN HỦY KẾT CHUYỂN VÀ MỞ LẠI KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-4-huong-dan-huy-ket-chuyen-va-mo-lai-ky-tinh-gia-thanh/)**, sau đó rà soát dữ liệu và tính lại; không lập thêm kỳ trùng để tránh điều kiện khóa.

### "Vui lòng bấm "Phân bổ" ở bước 1 để phân bổ chi phí chung và tính giá thành trước khi lưu." 

Nguyên nhân: chưa có bước phân bổ/tính được ghi nhận trong cửa sổ.

Cách xử lý: **Quay lại**, kiểm tra phần chi phí, tiêu thức và đối tượng, chọn **Phân bổ**, đợi kết quả rồi kiểm tra hai bảng trước **Lưu**.

### Có chi phí nhưng đối tượng nhận 0 đồng 

Nguyên nhân cần kiểm tra: tập mã chọn chưa đúng, tỷ lệ phân bổ bằng 0, hoặc không có cơ sở phân bổ/sản lượng phù hợp.

Cách xử lý: kiểm tra **% Phân bổ lần này**, **Đối tượng THCP (🔍 chọn)** và nguồn cơ sở tương ứng tiêu thức; xử lý nguồn sai rồi tính lại. Không tự sửa số trên bảng kết quả.

## 9. Câu hỏi thường gặp

**Để trống Đối tượng THCP có bỏ qua khoản chi phí không?** Không. Trống nghĩa là áp dụng cho tất cả đối tượng của kỳ. Muốn phân bổ một phần phải kiểm tra tỷ lệ hoặc số tiền của dòng.

**Sửa tỷ lệ xong bấm Tiếp theo có tự tính lại không?** Không. Chọn **Phân bổ** để tính và ghi lại kết quả rồi mới đối chiếu bảng giá thành.

**Bấm Hủy sau Phân bổ có bỏ kết quả đã tính không?** Không. Phân bổ đã gọi thao tác ghi; Hủy chỉ đóng cửa sổ. Kiểm tra lại kỳ trước khi thực hiện bước tiếp theo.

**Vì sao có hai bảng ở bước Tính giá thành?** Bảng đầu tổng hợp theo đối tượng; bảng dưới phân chi phí cho từng mã thành phẩm trong đối tượng, kèm sản lượng và hệ số để kiểm tra đơn giá riêng.

## 10. Công việc tiếp theo

- Đối chiếu chi phí/sản lượng còn sai trước khi kết chuyển.
- Dùng **[HƯỚNG DẪN KẾT CHUYỂN CHI PHÍ GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-3-huong-dan-ket-chuyen-chi-phi-gia-thanh/) — Kết chuyển chi phí giá thành** khi kết quả đã được kiểm tra.
- Nếu kỳ đã kết chuyển cần điều chỉnh, xem **[HƯỚNG DẪN HỦY KẾT CHUYỂN VÀ MỞ LẠI KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-4-huong-dan-huy-ket-chuyen-va-mo-lai-ky-tinh-gia-thanh/)**.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-0-huong-dan-tong-quan-tinh-gia-thanh/)** — Tổng quan Tính giá thành.
- **[HƯỚNG DẪN LẬP KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-1-huong-dan-lap-ky-tinh-gia-thanh/)** — Lập kỳ tính giá thành.
- **[HƯỚNG DẪN KẾT CHUYỂN CHI PHÍ GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-3-huong-dan-ket-chuyen-chi-phi-gia-thanh/)** — Kết chuyển chi phí giá thành.
- **[HƯỚNG DẪN HỦY KẾT CHUYỂN VÀ MỞ LẠI KỲ TÍNH GIÁ THÀNH](/bai-viet/2026-11-07-gt-a02-4-huong-dan-huy-ket-chuyen-va-mo-lai-ky-tinh-gia-thanh/)** — Hủy kết chuyển và mở lại kỳ tính giá thành.
- **[HƯỚNG DẪN GÁN HÀNG HÓA CHO ĐỐI TƯỢNG TẬP HỢP CHI PHÍ](/bai-viet/2026-11-07-gt-a04-1-huong-dan-gan-hang-hoa-cho-doi-tuong-tap-hop-chi-phi/)** — Gán hàng hóa cho đối tượng tập hợp chi phí.
- **[HƯỚNG DẪN GÁN ĐỐI TƯỢNG CHO HÀNG HÓA CÒN THIẾU](/bai-viet/2026-11-07-gt-a05-1-huong-dan-gan-doi-tuong-cho-hang-hoa-con-thieu/)** — Gán đối tượng cho hàng hóa còn thiếu.
