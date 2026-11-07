---
title: "HƯỚNG DẪN LẬP VÀ ĐIỀU CHỈNH LỆNH CHUYỂN TIỀN NỘI BỘ"
date: "2026-11-07"
summary: "Lập lệnh khi rút tiền ngân hàng về quỹ, nộp tiền mặt vào ngân hàng hoặc chuyển giữa hai tài khoản của công ty."
module: "Kế toán"
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

Lập lệnh khi rút tiền ngân hàng về quỹ, nộp tiền mặt vào ngân hàng hoặc chuyển giữa hai tài khoản của công ty. Bài hướng dẫn chọn hai quỹ, khai báo phí, đổi quỹ chịu phí và điều chỉnh lệnh đã có. Lệnh làm thay đổi tồn quỹ ngay khi lưu.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Đang làm việc trên đúng hệ thống của đơn vị cần ghi nhận; hai quỹ cần chuyển đã có trong danh mục **Tài khoản, quỹ**.
- Chuẩn bị ngày chuyển, số tiền chuyển thực tế và nội dung thu / chi tương ứng. Nếu có phí, biết số phí và ngân hàng thực tế trừ phí ở tài khoản nào.
- Quỹ chi có đủ tồn cho khoản chuyển. Nếu quỹ chi chịu phí, cần đủ cả tiền chuyển và phí.
- Ngày chuyển thuộc khoảng thời gian chưa khóa sổ. Việc điều chỉnh số liệu đã chốt cần kế toán trưởng xử lý theo [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/).
- Khi sửa hoặc xóa, xem lại số tiền và các quỹ của lệnh cũ; quỹ thu cũ có thể cần đủ tồn để hoàn lại khoản đã nhận.

## 2. Mở chức năng

**Kế toán → Chuyển tiền nội bộ → Thêm mới / Sửa**

## 3. Nhận biết màn hình

cửa sổ **THÊM CHUYỂN TIỀN NỘI BỘ** và **CẬP NHẬT CHUYỂN TIỀN NỘI BỘ** có ba nhóm thông tin: khoản chuyển, phía chi / thu và phí chuyển khoản.

![Hình 1: Lệnh chuyển tiền có phí — ảnh tham chiếu UI Hồng Nghi/dev ngày 12/10/2026](/posts/2026-11-07-kt-a06-1-huong-dan-lap-va-dieu-chinh-lenh-chuyen-tien-noi-bo/hinh-01-lenh-chuyen-tien-co-phi.png)

- **NGÀY CHUYỂN, MÃ LỆNH, SỐ TIỀN**: Dùng để làm gì: Xác định ngày, mã và khoản tiền chuyển
- **CHI TỪ QUỸ, NỘI DUNG CHI, GHI CHÚ (CHI)**: Dùng để làm gì: Ghi nhận quỹ xuất tiền và lý do chi
- **THU VÀO QUỸ, NỘI DUNG THU, GHI CHÚ (THU)**: Dùng để làm gì: Ghi nhận quỹ nhận tiền và lý do thu
- **PHÍ CHUYỂN KHOẢN**: Dùng để làm gì: Hiện / ẩn nhóm phí
- **SỐ TIỀN (PHÍ), QUỸ CHỊU PHÍ, NỘI DUNG PHÍ, GHI CHÚ (PHÍ)**: Dùng để làm gì: Ghi nhận phí riêng; nút **Đổi quỹ** nằm cạnh quỹ chịu phí

## 4. Trình tự công việc

```text
Ngày chuyển, số tiền → Quỹ chi, nội dung chi → Quỹ thu, nội dung thu
      ↓
Có phí → Nhập phí → Kiểm tra quỹ chịu phí → Chọn nội dung phí
      ↓
Kiểm tra tiền chuyển và phí riêng → Lưu lại → Đối chiếu Tồn quỹ
      ↓
Cần điều chỉnh → Kiểm tra lệnh cũ → Sửa khoản sai → Đối chiếu lại
```

### Bước 1 – Xác định ngày và số tiền chuyển

Nhập **NGÀY CHUYỂN** theo chứng từ thực tế. Nhập **SỐ TIỀN** là khoản chuyển từ quỹ chi sang quỹ thu, chưa gộp phí. Số tiền chuyển phải từ 1 trở lên. **MÃ LỆNH** chỉ xem, để hệ thống tạo mã khi lập mới.

Ví dụ giả lập: chuyển 10.000.000 đồng từ tài khoản A sang tài khoản B, phí 11.000 đồng. Nhập **SỐ TIỀN** là 10.000.000; phí nhập riêng ở bước 3.

### Bước 2 – Chọn phía chi và phía thu

1. Chọn **CHI TỪ QUỸ** trước. Sau đó chọn **NỘI DUNG CHI** thuộc danh sách nội dung chi; ghi **GHI CHÚ (CHI)** để nhận biết khoản chuyển nếu cần.
2. Chọn **THU VÀO QUỸ** là quỹ nhận tiền thực tế. Ô này chỉ cho chọn sau khi đã chọn quỹ chi; quỹ thu phải khác quỹ chi.
3. Chọn **NỘI DUNG THU** thuộc danh sách nội dung thu. Ô này chỉ cho chọn sau khi có quỹ thu. Nhập **GHI CHÚ (THU)** nếu cần.

Các ô quỹ tìm theo mã hoặc tên quỹ; nội dung thu / chi tìm theo mã hoặc tên nội dung. Kiểm tra kỹ hai phía để tránh ghi ngược chiều tiền.

### Bước 3 – Khai báo phí chuyển khoản

Không có phí: để **PHÍ CHUYỂN KHOẢN** không được chọn.

Có phí:

1. Chọn **PHÍ CHUYỂN KHOẢN**, nhập **SỐ TIỀN (PHÍ)** từ 1 trở lên.
2. Kiểm tra **QUỸ CHỊU PHÍ**. Khi nhập phí dương mà chưa có quỹ chịu phí, hệ thống điền quỹ chi.
3. Nếu phí thực tế trừ ở quỹ còn lại, bấm nút **Đổi quỹ** (mũi tên vòng) cạnh ô. Hộp hỏi **Thay đổi quỹ chịu phí chuyển khoản** có **Tiếp tục** / **Không**. Chọn **Tiếp tục** để đổi giữa quỹ chi và quỹ thu; chọn **Không** để giữ nguyên.
4. Chọn **NỘI DUNG PHÍ** trong danh sách nội dung chi; nhập **GHI CHÚ (PHÍ)** nếu cần.

Chọn đủ hai quỹ và nhập phí dương trước khi thao tác với **QUỸ CHỊU PHÍ**. Quỹ chịu phí phải là một trong hai quỹ của lệnh.

⚠️ Nếu đổi **CHI TỪ QUỸ** hoặc **THU VÀO QUỸ** sau khi đã khai báo phí, kiểm tra lại **QUỸ CHỊU PHÍ**. Hệ thống không tự thay mọi giá trị phí theo hai quỹ mới.

### Bước 4 – Kiểm tra tác động tiền trước khi lưu

Với ví dụ chuyển 10.000.000 đồng, phí 11.000 đồng:

- **Quỹ chi A**: Quỹ A giảm: 10.011.000; Quỹ B tăng: 10.000.000
- **Quỹ thu B**: Quỹ A giảm: 10.000.000; Quỹ B tăng: 9.989.000

Khi quỹ thu chịu phí, tiền chuyển được cộng vào quỹ thu trước, sau đó mới trừ phí. Phí phải có đủ tồn ở quỹ chịu phí sau các bước chuyển tiền tương ứng.

Kiểm tra **NGÀY CHUYỂN**, chiều chuyển, hai nội dung thu / chi và nhóm phí, rồi **Lưu lại**. Xử lý các báo riêng ở phần “Vướng mắc thường gặp” nếu bị từ chối. Sau khi lưu, xem **Tồn quỹ** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)) để đối chiếu cả hai quỹ.

### Điều chỉnh một lệnh đã lập

Trong cửa sổ **CẬP NHẬT CHUYỂN TIỀN NỘI BỘ**, đối chiếu thông tin cũ với chứng từ trước khi thay đổi:

- Giảm số tiền, giữ nguyên quỹ thu: quỹ thu cũ cần đủ tồn cho phần tiền bị giảm.
- Đổi sang quỹ thu khác: quỹ thu cũ cần đủ tồn để hoàn lại toàn bộ số tiền chuyển cũ, sau khi phí cũ được hoàn lại nếu quỹ đó từng chịu phí.
- Đổi quỹ chi, quỹ thu hoặc phí: kiểm tra lại **QUỸ CHỊU PHÍ** và **NỘI DUNG PHÍ** trước khi lưu.
- Bỏ khoản phí đã ghi sai: bỏ chọn **PHÍ CHUYỂN KHOẢN**. Khi lưu, hệ thống đưa phí về 0 và xóa quỹ chịu phí, nội dung phí, ghi chú phí của lệnh. Không chỉ ẩn nhóm phí.

Sau điều chỉnh, đối chiếu tồn của các quỹ cũ và mới có liên quan. Không lập thêm một lệnh trùng để thay cho việc sửa lệnh đang có.

### Xóa lệnh lập sai: điều kiện riêng

Ngoài quyền xóa, người thao tác phải là người tạo lệnh. Quỹ thu cũ phải đủ tồn để hoàn lại tiền nhận (phí cũ được hoàn trước nếu có). Ngày chuyển của lệnh không được nằm trong kỳ đã khóa. Lệnh xóa sẽ hoàn tiền về quỹ chi, hoàn phí về quỹ chịu phí và trừ khoản nhận khỏi quỹ thu; đối chiếu lại các quỹ sau thao tác.

## 6. Giải thích các thông tin trên màn hình

- **NGÀY CHUYỂN**: Bắt buộc: Có; Cách dùng / ràng buộc: Ngày chuyển thực tế; dùng để kiểm tra khóa sổ
- **MÃ LỆNH**: Bắt buộc: Tự tạo; Cách dùng / ràng buộc: Chỉ xem, chữ gợi ý **MÃ TẠO TỰ ĐỘNG** khi lập mới
- **SỐ TIỀN**: Bắt buộc: Có; Cách dùng / ràng buộc: Khoản chuyển, từ 1 trở lên; phí nhập riêng
- **CHI TỪ QUỸ**: Bắt buộc: Có; Cách dùng / ràng buộc: Quỹ xuất tiền; chọn trước các ô phụ thuộc
- **NỘI DUNG CHI**: Bắt buộc: Có; Cách dùng / ràng buộc: Nội dung loại chi
- **GHI CHÚ (CHI)**: Bắt buộc: Không; Cách dùng / ràng buộc: Diễn giải phía chi
- **THU VÀO QUỸ**: Bắt buộc: Có; Cách dùng / ràng buộc: Quỹ nhận, khác quỹ chi
- **NỘI DUNG THU**: Bắt buộc: Có; Cách dùng / ràng buộc: Nội dung loại thu
- **GHI CHÚ (THU)**: Bắt buộc: Không; Cách dùng / ràng buộc: Diễn giải phía thu
- **PHÍ CHUYỂN KHOẢN**: Bắt buộc: Không; Cách dùng / ràng buộc: Chọn khi lệnh có phí
- **SỐ TIỀN (PHÍ)**: Bắt buộc: Khi có phí; Cách dùng / ràng buộc: Từ 1 trở lên
- **QUỸ CHỊU PHÍ**: Bắt buộc: Khi có phí; Cách dùng / ràng buộc: Quỹ chi hoặc quỹ thu của cùng lệnh
- **NỘI DUNG PHÍ**: Bắt buộc: Khi có phí; Cách dùng / ràng buộc: Nội dung loại chi
- **GHI CHÚ (PHÍ)**: Bắt buộc: Không; Cách dùng / ràng buộc: Diễn giải phí; bị xóa khi bỏ chọn phí rồi lưu

## 7. Kiểm tra sau khi thực hiện

Lệnh mới có mã trên danh sách. Quỹ chi giảm số tiền chuyển, quỹ thu tăng số tiền chuyển; quỹ chịu phí giảm thêm khoản phí. Sửa lệnh cập nhật tồn theo thông tin mới, có hoàn lại ảnh hưởng cũ. Xóa lệnh hoàn lại ảnh hưởng của lệnh đó.

Lệnh chuyển ghi nhận tồn quỹ của công ty, không ghi nhận thanh toán công nợ khách hàng / nhà cung cấp.

## 8. Những điều cần lưu ý

⚠️ Một lệnh chuyển đã tự cộng / trừ hai quỹ; không lập thêm phiếu thu và phiếu chi cho cùng khoản chuyển để tránh ghi tiền hai lần.

⚠️ Không thay ngày giao dịch thực tế để né kỳ đã khóa. Trao đổi kế toán trưởng khi cần điều chỉnh số liệu của kỳ đã chốt.

⚠️ Không tự coi thay đổi trên **Tồn quỹ** là bằng chứng lệnh đã lên **Sổ chi tiết tài khoản** hoặc **Bảng cân đối phát sinh**. Việc ghi nhận vào sổ kế toán cần đối chiếu riêng với kế toán trưởng.

⚠️ Kiểm tra quỹ chịu phí sau mỗi lần đổi quỹ. Chọn một quỹ thứ ba không thuộc lệnh sẽ bị từ chối.

### "Quỹ thu phải khác quỹ chi" 

Nguyên nhân: hai phía chọn cùng quỹ.

Cách xử lý: chọn quỹ nhận thực tế khác quỹ chi.

### "Số tiền chuyển không hợp lệ" / "Phí chuyển khoản không hợp lệ" 

Nguyên nhân: số tiền tương ứng nhỏ hơn 1.

Cách xử lý: nhập số tiền đúng chứng từ; nếu không có phí, bỏ chọn **PHÍ CHUYỂN KHOẢN**.

### "Vui lòng nhập số tiền chuyển khoản" 

Nguyên nhân: đã chọn có phí nhưng để trống **SỐ TIỀN (PHÍ)**. Câu nhắc của ô phí ghi như trên.

Cách xử lý: nhập phí thực tế hoặc bỏ chọn phí nếu không có.

### "Quỹ chịu phí phải thuộc quỹ thu hoặc chi" 

Nguyên nhân: quỹ chịu phí không còn là một trong hai quỹ của lệnh, thường sau khi thay quỹ.

Cách xử lý: kiểm tra hai quỹ và dùng **Đổi quỹ** để chọn lại quỹ thực tế chịu phí.

### Báo quỹ "không đủ tồn" 

Nguyên nhân: quỹ chi hoặc quỹ chịu phí không đủ tiền; khi sửa / xóa còn có thể do quỹ thu cũ không đủ tiền để hoàn lại.

Cách xử lý: đối chiếu quỹ được nêu trong thông báo tại [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/). Kiểm tra khoản chuyển, phí và chứng từ liên quan; không tạo chứng từ giả để bổ sung tồn.

### "Sổ kế toán đã được khoá trong thời gian này." 

Nguyên nhân: ngày chuyển thuộc kỳ đã khóa của đơn vị.

Cách xử lý: giữ đúng ngày thực tế, báo kế toán trưởng xử lý theo [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/).

### "Chỉ được xoá phiếu do mình tạo" 

Nguyên nhân: người xóa khác người tạo lệnh.

Cách xử lý: để người tạo xử lý; nếu không còn người phụ trách, báo kế toán trưởng / quản trị, không dùng tài khoản của người khác.

## 10. Câu hỏi thường gặp

**Bỏ chọn phí rồi lưu có giữ lại thông tin phí để lần sau dùng không?**

Không. Phí về 0; quỹ chịu phí, nội dung phí và ghi chú phí bị xóa khỏi lệnh.

**Đổi quỹ chi có tự chuyển phí sang quỹ chi mới không?**

Không nên mặc định như vậy. Hệ thống chỉ tự điền quỹ chi khi nhập phí dương và chưa có quỹ chịu phí. Luôn kiểm tra lại ô này sau khi đổi quỹ.

**Vì sao giảm tiền chuyển cũng bị báo thiếu tồn?**

Khoản giảm phải được trừ khỏi quỹ thu cũ. Nếu quỹ này đã dùng tiền, phần còn lại có thể không đủ để hoàn.

## 11. Công việc tiếp theo

Xem **Tồn quỹ** theo quỹ và ngày chuyển ([TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/)). Với tài khoản ngân hàng đã kết nối, đối chiếu số dư tại [TỔNG QUAN MÀN HÌNH ĐỐI CHIẾU SỐ DƯ CUỐI KỲ](/bai-viet/2026-11-07-kt-a07-0-tong-quan-man-hinh-doi-chieu-so-du-cuoi-ky/); chỉ xử lý khóa kỳ sau khi đã đối chiếu xong theo [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/).

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH CHUYỂN TIỀN NỘI BỘ](/bai-viet/2026-11-07-kt-a06-0-tong-quan-man-hinh-chuyen-tien-noi-bo/) – Tổng quan màn hình Chuyển tiền nội bộ.
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ TỒN QUỸ](/bai-viet/2026-11-07-kt-b02-0-tong-quan-man-hinh-thong-ke-ton-quy/) – Tổng quan màn hình thống kê Tồn quỹ.
- [TỔNG QUAN MÀN HÌNH ĐỐI CHIẾU SỐ DƯ CUỐI KỲ](/bai-viet/2026-11-07-kt-a07-0-tong-quan-man-hinh-doi-chieu-so-du-cuoi-ky/) – Tổng quan màn hình Đối chiếu số dư cuối kỳ.
- [HƯỚNG DẪN KHÓA VÀ MỞ LẠI KỲ KẾ TOÁN](/bai-viet/2026-11-07-kt-a01-2-huong-dan-khoa-va-mo-lai-ky-ke-toan/) – Hướng dẫn khóa và mở lại kỳ kế toán.
- [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/), [TỔNG QUAN MÀN HÌNH PHIẾU CHI](/bai-viet/2026-11-07-kt-a04-0-tong-quan-man-hinh-phieu-chi/) – Phiếu thu / Phiếu chi cho khoản thu chi với đối tượng bên ngoài.
