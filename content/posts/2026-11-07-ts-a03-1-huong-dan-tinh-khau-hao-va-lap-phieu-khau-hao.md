---
title: "HƯỚNG DẪN TÍNH KHẤU HAO VÀ LẬP PHIẾU KHẤU HAO"
date: "2026-11-07"
summary: "Tính khấu hao tháng, kiểm tra phân bổ và hạch toán trước lập phiếu."
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

Tính khấu hao tháng, kiểm tra phân bổ và hạch toán trước lập phiếu.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Đăng nhập đúng tên miền và tài khoản của chi nhánh cần xử lý; đối chiếu hồ sơ thuộc đơn vị đó.
- Hồ sơ tài sản đã có thông tin ghi tăng, mức khấu hao, ngày bắt đầu và phân bổ chi phí.
- Đối chiếu phiếu khấu hao đã có trong tháng/năm để tránh lập trùng; thống nhất kỳ và ngày hạch toán với kế toán.

## 2. Nhận biết màn hình

Từ danh sách chọn **Tính khấu hao**. Cửa sổ có kỳ tháng/năm, ngày hạch toán, diễn giải, **Tổng khấu hao tháng** và ba tab:

- **Tính khấu hao**: Dùng để làm gì: Đối chiếu khấu hao từng tài sản và phần chi phí hợp lý/không hợp lý.
- **Phân bổ**: Dùng để làm gì: Kiểm tra chi phí theo từng đối tượng, tài khoản và khoản mục.
- **Hạch toán**: Dùng để làm gì: Kiểm tra bút toán được cộng từ các dòng phân bổ.
- **Cất, Hủy**: Dùng để làm gì: Tạo phiếu hoặc đóng cửa sổ tính.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin và bảng chi tiết của cửa sổ. Khung  khoanh các nút ở cuối cửa sổ.

![Hình 1: Tab Tính khấu hao tự nạp theo kỳ, số tiền đã che, chưa Cất](/posts/2026-11-07-ts-a03-1-huong-dan-tinh-khau-hao-va-lap-phieu-khau-hao/hinh-01-ts-khau-hao-tinh.png)

![Hình 2: Tab Phân bổ của bản xem trước khấu hao, số tiền đã che](/posts/2026-11-07-ts-a03-1-huong-dan-tinh-khau-hao-va-lap-phieu-khau-hao/hinh-02-ts-khau-hao-phan-bo.png)

![Hình 3: Tab Hạch toán của bản xem trước khấu hao, số tiền đã che](/posts/2026-11-07-ts-a03-1-huong-dan-tinh-khau-hao-va-lap-phieu-khau-hao/hinh-03-ts-khau-hao-hach-toan.png)

## 3. Trình tự công việc

Chọn kỳ → Kiểm tra tài sản → Kiểm tra phân bổ → Kiểm tra hạch toán → Cất → Xem phiếu

### Bước 1 — Chọn kỳ và kiểm tra ngày hạch toán

Tại **Tính khấu hao**, chọn **Tháng** (1–12), **Năm** rồi đợi bảng tải xong. Bảng được tính tự động khi mở cửa sổ và mỗi lần đổi tháng/năm; không cần tìm nút tính riêng trong cửa sổ.

- Kiểm tra **Ngày hạch toán**: mặc định là ngày cuối tháng đang chọn. Nếu sửa ngày theo hồ sơ kế toán, kiểm tra lại sau mỗi lần đổi kỳ vì ngày sẽ được đưa về cuối tháng mới.
- Kiểm tra **Diễn giải** sau khi chốt kỳ; đổi tháng/năm cũng tạo lại diễn giải mặc định.
- cửa sổ này có một ô **Ngày hạch toán**; ngày chứng từ của phiếu được lấy cùng ngày khi lập phiếu.

### Bước 2 — Đối chiếu khấu hao từng tài sản

Tại tab **Tính khấu hao**, đối chiếu **Mã tài sản**, **Tên tài sản**, **Đơn vị sử dụng** với danh sách tài sản cần tính trong tháng. Kiểm tra **Giá trị KH tháng**, **Giá trị tính vào CP hợp lý**, **Giá trị tính vào CP không hợp lý** và các tổng cuối bảng.

**Tổng khấu hao tháng** ở đầu cửa sổ là tổng **Giá trị KH tháng** của các tài sản. Nếu thiếu tài sản, kiểm tra hồ sơ ghi tăng, ngày bắt đầu, mức khấu hao và giá trị còn lại trước khi lập phiếu; không thêm một dòng tài sản ngay trên bảng tính này.

### Bước 3 — Đối chiếu phân bổ theo từng tài sản

Chuyển tab **Phân bổ**, mở nhóm theo **Tên tài sản** và kiểm tra từng **Đối tượng phân bổ**, **Tên đối tượng phân bổ**, **Tỷ lệ %**, **TK chi phí**, **Khoản mục CP**, **Mã thống kê**.

Một tài sản có thể có nhiều dòng nhận chi phí. **Giá trị KH tháng** được nhắc lại ở mỗi dòng; cộng cột **Chi phí phân bổ** để đối chiếu mức khấu hao của tài sản, không cộng lặp **Giá trị KH tháng**. Tổng **Chi phí phân bổ** toàn bảng phải đối chiếu với **Tổng khấu hao tháng**.

Tỷ lệ lấy từ thiết lập phân bổ của hồ sơ ghi tăng; không sửa tỷ lệ hay tài khoản tại tab này. Nếu sai đối tượng/tài khoản, chọn **Hủy**, rà soát hồ sơ theo **[HƯỚNG DẪN GHI TĂNG TÀI SẢN CỐ ĐỊNH](/bai-viet/2026-11-07-ts-a01-1-huong-dan-ghi-tang-tai-san-co-dinh/)**, rồi mở lại kỳ để kiểm tra kết quả mới.

### Bước 4 — Đối chiếu hạch toán

Chuyển tab **Hạch toán**. Kiểm tra **TK Nợ** (chi phí), **TK Có** (khấu hao), **Khoản mục CP**, **Đơn vị / Đối tượng**, **Diễn giải** và **Số tiền**.

Các dòng phân bổ trùng bộ tài khoản, khoản mục và đối tượng được cộng thành một dòng hạch toán. Số dòng ở hai tab có thể khác nhau; đối chiếu tổng **Số tiền** với tổng **Chi phí phân bổ**, đồng thời kiểm tra đúng tài khoản và đối tượng. Nếu bảng phân bổ hoặc hạch toán rỗng trong khi có khấu hao, dừng lập phiếu để kiểm tra trước.

### Bước 5 — Lập phiếu và kiểm tra bản đã lưu

Chỉ chọn **Cất** sau khi ba bảng và kỳ/ngày đã khớp. Ghi lại số phiếu trong thông báo **Đã tạo phiếu khấu hao …**; mở **Xem** tại đúng dòng phiếu vừa tạo để đối chiếu ba tab của bản đã lưu, **Ngày hạch toán**, **Ngày chứng từ** và tổng tiền.

Kiểm tra lại hao mòn lũy kế, giá trị còn lại và thời gian còn lại của tài sản. Nếu cần tính lại phiếu đã có, chuyển sang **[HƯỚNG DẪN XÓA VÀ TÍNH LẠI PHIẾU KHẤU HAO](/bai-viet/2026-11-07-ts-a03-2-huong-dan-xoa-va-tinh-lai-phieu-khau-hao/)**; không lập lặp cùng kỳ.

## 5. Giải thích các thông tin trên màn hình

- **Tháng, Năm**: Cách dùng và đối chiếu: Kỳ tính khấu hao; đổi kỳ sẽ tải lại số liệu và đặt lại diễn giải/ngày.
- **Ngày hạch toán**: Cách dùng và đối chiếu: Ngày ghi nhận của phiếu, mặc định cuối tháng; cũng được dùng làm ngày chứng từ khi lập.
- **Diễn giải**: Cách dùng và đối chiếu: Nội dung phiếu và dòng hạch toán; hoàn thiện sau khi chọn xong kỳ.
- **Tổng khấu hao tháng**: Cách dùng và đối chiếu: Tổng khấu hao của các tài sản, không phải tổng cột bị lặp trong tab phân bổ.
- **Mã tài sản, Tên tài sản, Loại tài sản, Đơn vị sử dụng**: Cách dùng và đối chiếu: Nhận diện tài sản và nơi sử dụng; đối chiếu hồ sơ ghi tăng.
- **Giá trị KH tháng**: Cách dùng và đối chiếu: Khấu hao của tài sản trong kỳ; có thể nhỏ hơn mức tháng khai báo do số ngày sử dụng hoặc giá trị còn lại.
- **Giá trị tính vào CP hợp lý, Giá trị tính vào CP không hợp lý**: Cách dùng và đối chiếu: Phần chi phí được tách theo thiết lập giới hạn; tổng hai phần đối chiếu khấu hao của tài sản.
- **Đối tượng phân bổ, Tên đối tượng phân bổ, Tỷ lệ %**: Cách dùng và đối chiếu: Các nơi nhận chi phí theo thiết lập phân bổ; một tài sản có thể nhiều dòng.
- **Chi phí phân bổ**: Cách dùng và đối chiếu: Số tiền thực nhận trên dòng; cộng theo tài sản và toàn bảng để đối chiếu.
- **TK chi phí, Khoản mục CP, Mã thống kê**: Cách dùng và đối chiếu: Thông tin phân loại chi phí lấy từ thiết lập/hồ sơ tài sản.
- **TK Nợ, TK Có**: Cách dùng và đối chiếu: Tài khoản chi phí và tài khoản khấu hao dùng trong hạch toán.
- **Số tiền, Đơn vị / Đối tượng**: Cách dùng và đối chiếu: Số tiền sau khi cộng các dòng cùng tài khoản, khoản mục và đối tượng.

Khấu hao được giới hạn theo số ngày sử dụng trong tháng và giá trị còn lại. Khi có nhiều dòng phân bổ hợp lệ, phần mềm chia theo tỷ trọng giữa các tỷ lệ dương và xử lý làm tròn theo lũy kế để tổng phân bổ khớp mức khấu hao. Ví dụ mức 1.000.000 đồng với hai tỷ lệ 30 và 70 chia thành 300.000 và 700.000 đồng. Không có dòng tỷ lệ dương thì dùng một dòng 100% theo thông tin tài sản. Các khoản phân loại hợp lý/không hợp lý cần kế toán đối chiếu theo hồ sơ.

## 6. Kiểm tra sau khi thực hiện

Phiếu đã lưu có số chứng từ, kỳ tháng/năm, chi tiết tài sản, phân bổ và hạch toán. Hao mòn lũy kế tăng, giá trị còn lại giảm theo khấu hao của từng tài sản; thời gian còn lại giảm một tháng, tối thiểu bằng 0. Kiểm tra bản đã lưu thay cho việc chỉ nhìn bảng xem trước.

## 7. Những điều cần lưu ý

⚠️ **Cất** tạo phiếu và thay đổi số dư tài sản. Kiểm tra tài khoản, đối tượng và các tổng trước khi thực hiện.

⚠️ Không cộng lặp **Giá trị KH tháng** trên tab **Phân bổ**. Một tài sản có nhiều nơi nhận chi phí vẫn chỉ có một mức khấu hao tháng.

⚠️ Đổi kỳ đặt lại ngày và diễn giải; kiểm tra lại trước **Cất**. Không lập phiếu thứ hai cho cùng tháng/năm.

### "Không có tài sản nào để tính khấu hao trong tháng này." 

Nguyên nhân: bảng khấu hao không có tài sản trong kỳ chọn.

Cách xử lý: kiểm tra tháng/năm, ngày bắt đầu khấu hao, trạng thái không tính khấu hao, mức khấu hao tháng và giá trị còn lại trên hồ sơ tài sản. Chỉ lập phiếu khi kỳ có tài sản phù hợp.

### "Không tính được khấu hao." (Lỗi hệ thống)

Nguyên nhân: không tải được kết quả xem trước.

Cách xử lý: ghi lại kỳ và thông báo chi tiết, đóng cửa sổ rồi kiểm tra lại. Không dùng số còn hiển thị từ kỳ trước để lập phiếu cho kỳ mới; chuyển người quản trị nếu lỗi lặp lại.

### Có khấu hao nhưng tab Phân bổ hoặc Hạch toán không có dòng 

Nguyên nhân cần kiểm tra: dữ liệu phân bổ chưa tải được hoặc hồ sơ tài sản thiếu thiết lập phù hợp.

Cách xử lý: dừng **Cất**, mở lại để tải dữ liệu; nếu vẫn thiếu, đối chiếu thiết lập hồ sơ và báo người quản trị kèm kỳ, mã tài sản, tổng khấu hao.

## 9. Câu hỏi thường gặp

**Vì sao số dòng Hạch toán ít hơn Phân bổ?** Các dòng cùng TK Nợ, TK Có, khoản mục và đối tượng được cộng lại. Đối chiếu số tiền và đối tượng, không yêu cầu số dòng bằng nhau.

**Có sửa tỷ lệ trực tiếp ở bảng khấu hao được không?** Không. Rà soát thiết lập phân bổ trên hồ sơ ghi tăng, rồi tải lại kỳ để kiểm tra.

**Có cần nhập Ngày chứng từ riêng không?** Không có ô nhập riêng trên cửa sổ tính; khi lập phiếu, ngày chứng từ dùng cùng ngày hạch toán.

## 10. Công việc tiếp theo

- Đối chiếu hồ sơ tài sản theo **[HƯỚNG DẪN TỔNG QUAN DANH SÁCH TÀI SẢN CỐ ĐỊNH](/bai-viet/2026-11-07-ts-a01-0-huong-dan-tong-quan-danh-sach-tai-san-co-dinh/)**, lưu số phiếu để kế toán đối chiếu chi phí kỳ.
- Khi phải sửa kết quả đã lập, dùng **[HƯỚNG DẪN XÓA VÀ TÍNH LẠI PHIẾU KHẤU HAO](/bai-viet/2026-11-07-ts-a03-2-huong-dan-xoa-va-tinh-lai-phieu-khau-hao/) — Xóa và tính lại phiếu khấu hao**.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN DANH SÁCH TÀI SẢN CỐ ĐỊNH](/bai-viet/2026-11-07-ts-a01-0-huong-dan-tong-quan-danh-sach-tai-san-co-dinh/)** — Tổng quan Danh sách tài sản cố định.
- **[HƯỚNG DẪN GHI TĂNG TÀI SẢN CỐ ĐỊNH](/bai-viet/2026-11-07-ts-a01-1-huong-dan-ghi-tang-tai-san-co-dinh/)** — Ghi tăng tài sản cố định.
- **[HƯỚNG DẪN TỔNG QUAN TÍNH KHẤU HAO](/bai-viet/2026-11-07-ts-a03-0-huong-dan-tong-quan-tinh-khau-hao/)** — Tổng quan Tính khấu hao.
- **[HƯỚNG DẪN XÓA VÀ TÍNH LẠI PHIẾU KHẤU HAO](/bai-viet/2026-11-07-ts-a03-2-huong-dan-xoa-va-tinh-lai-phieu-khau-hao/)** — Xóa và tính lại phiếu khấu hao.
