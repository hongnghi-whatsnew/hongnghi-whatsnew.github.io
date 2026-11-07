---
title: "HƯỚNG DẪN XÓA VÀ TÍNH LẠI CHỨNG TỪ CHI PHÍ TRẢ TRƯỚC"
date: "2026-11-07"
summary: "Xử lý xóa hồ sơ, xóa/tính lại phân bổ hoặc xóa ghi giảm đúng loại chứng từ."
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

Xử lý xóa hồ sơ, xóa/tính lại phân bổ hoặc xóa ghi giảm đúng loại chứng từ.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: xử lý xóa hồ sơ, xóa/tính lại phân bổ hoặc xóa ghi giảm đúng loại chứng từ.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Chi phí trả trước**

## 3. Nhận biết màn hình

![Giao diện danh sách trước thao tác — Gia Phúc/dev, 25/10/2026; chưa thực hiện tính, gán, xóa hoặc kết chuyển trong ảnh.](/posts/2026-11-07-ts-b05-6-huong-dan-xoa-va-tinh-lai-chung-tu-chi-phi-tra-truoc/hinh-01-danh-sach-truoc-thao-tac.png)

Màn danh sách dùng để đối chiếu dữ liệu và mở các thao tác theo hồ sơ đã chọn.

Các nút chính của chức năng: **Import ghi tăng**, **Thêm chi phí trả trước**, **Xem**, **Tính phân bổ**, **Ghi giảm**, **Xóa**.

Chưa có ảnh xác minh; danh sách cảnh chụp ở cuối bài. Thao tác tìm/lọc danh sách chung xem [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); không suy từ nút hiển thị thành quyền đã được cấp.

## 4. Trình tự công việc

Xác định tab hồ sơ/phân bổ/ghi giảm → Ghi nhận số trước xóa → Kiểm chứng từ liên quan → Xóa đúng loại → Đối chiếu số dư và kết quả

## 5. Thực hiện trên phần mềm

1. Chọn đúng tab: hồ sơ, phân bổ hoặc ghi giảm. Đối chiếu mã khoản, số chứng từ, kỳ và tổng tiền trước thao tác.
2. Xóa hồ sơ chỉ khi không còn phiếu phân bổ/ghi giảm liên quan; xử lý các chứng từ nguồn theo trình tự kế toán đã chấp thuận.
3. Xóa phiếu phân bổ hoàn lại số đã phân bổ. Nếu đã vào kỳ giá thành kết chuyển, phải hủy kết chuyển và xử lý kỳ liên quan trước.
4. Tính lại phân bổ xóa phiếu cũ trước; tiếp tục [HƯỚNG DẪN TÍNH VÀ LẬP PHIẾU PHÂN BỔ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-2-huong-dan-tinh-va-lap-phieu-phan-bo-chi-phi-tra-truoc/) và kiểm tra phiếu mới. Xóa ghi giảm hoàn lại số ghi giảm.
5. Đối chiếu số đã phân bổ, số còn lại và danh sách phiếu sau cùng, tránh dừng ở trạng thái đã xóa nhưng chưa lập lại.

## 6. Giải thích các thông tin trên màn hình

- **Mã CP trả trước**: Ý nghĩa, cách nhập hoặc đối chiếu: Mã nhận diện duy nhất một khoản chi phí trả trước; cột chỉ xem, dùng đối chiếu hồ sơ với phân bổ và ghi giảm.
- **Tên CP trả trước**: Ý nghĩa, cách nhập hoặc đối chiếu: Tên khoản chi phí đã khai báo, đọc kèm mã để phân biệt những khoản cùng nội dung.
- **Ngày bắt đầu phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Mốc bắt đầu xét phân bổ; hồ sơ chỉ được tính khi ngày này không sau cuối tháng đang tính (trống vẫn được xét).
- **Ngày ghi nhận**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày ghi tăng chi phí trả trước trên hồ sơ; khi tạo mới bắt buộc chọn, mặc định hôm nay.
- **Số kỳ phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Số kỳ chia giá trị gốc; số kỳ > 0 là một điều kiện được tính. Không phải số kỳ còn lại tự giảm sau mỗi lần phân bổ.
- **Số tiền**: Ý nghĩa, cách nhập hoặc đối chiếu: Giá trị gốc của khoản chi phí trả trước, không phải riêng số phân bổ kỳ hiện tại; ở danh sách chỉ xem.
- **Số tiền PB hàng kỳ**: Ý nghĩa, cách nhập hoặc đối chiếu: Mức chi phí dự kiến phân bổ mỗi kỳ; khi tính lấy mức nhỏ hơn giữa số này và số còn lại, rồi chia theo thiết lập.
- **Số đã phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Lũy kế giá trị đã xử lý trên hồ sơ; ghi giảm cũng tăng số này. Đối chiếu cả phiếu phân bổ và ghi giảm khi kiểm tra.
- **Số còn lại**: Ý nghĩa, cách nhập hoặc đối chiếu: Phần giá trị chưa phân bổ/ghi giảm; tạo phiếu làm giảm số này, xóa phiếu liên quan sẽ hoàn lại.
- **TK chờ PB**: Ý nghĩa, cách nhập hoặc đối chiếu: Tài khoản đang theo dõi phần giá trị chờ phân bổ; dùng làm TK Có khi tính phân bổ, mặc định khai báo mới là 242.
- **Tình trạng**: Ý nghĩa, cách nhập hoặc đối chiếu: Trạng thái hiển thị của hồ sơ; dùng kiểm tra ngừng phân bổ/đã phân bổ hết cùng số còn lại, không nhập tại danh sách.
- **Tham chiếu**: Ý nghĩa, cách nhập hoặc đối chiếu: Thông tin tham chiếu bằng chữ do người lập hồ sơ nhập, không tự tạo liên kết hay nhập chứng từ nguồn.
- **Số CT**: Ý nghĩa, cách nhập hoặc đối chiếu: Số chứng từ của đúng tab đang xem; ghi tăng, điều chỉnh, phân bổ và ghi giảm là các loại phiếu khác nhau. Cột chỉ xem.
- **Tháng**: Ý nghĩa, cách nhập hoặc đối chiếu: Kỳ phân bổ theo tháng, giá trị 1–12. Danh sách chỉ xem; khi tính mới chọn tháng cần xử lý.
- **Năm**: Ý nghĩa, cách nhập hoặc đối chiếu: Năm của kỳ phân bổ, giới hạn 2000–2100 khi tính; đọc cùng Tháng để tránh xóa/tính lại nhầm kỳ.
- **Ngày phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày được ghi trên phiếu phân bổ; phân biệt với cặp tháng/năm dùng lấy dữ liệu tính.
- **Số dòng**: Ý nghĩa, cách nhập hoặc đối chiếu: Số dòng chi tiết của phiếu; một hồ sơ có thể chia nhiều đối tượng nên không mặc định bằng số hồ sơ.
- **Tổng tiền phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Tổng số tiền chi tiết đã lập trong phiếu; xóa phiếu hoàn lại phần đã phân bổ của các hồ sơ liên quan.
- **Ngày ghi giảm**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày ghi trên phiếu kết chuyển phần giá trị còn lại; khi lập mới mặc định hôm nay.
- **Lý do**: Ý nghĩa, cách nhập hoặc đối chiếu: Nội dung giải thích nghiệp vụ đã nhập trên phiếu; đọc trước khi điều chỉnh hoặc xóa, không phải số tiền điều chỉnh.
- **Tổng tiền ghi giảm**: Ý nghĩa, cách nhập hoặc đối chiếu: Tổng số tiền các dòng ghi giảm được ghi nhận; xóa phiếu hoàn lại số đã ghi giảm cho hồ sơ.

Các cột danh sách là kết quả chỉ xem; nhập hoặc sửa tại nghiệp vụ tương ứng. Luôn xác định đúng tab trước đọc số CT và tổng tiền.

## 7. Kiểm tra sau khi thực hiện

Xóa đúng hồ sơ/phiếu nếu đủ điều kiện, hoàn số theo loại phiếu đã xóa.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Từng loại xóa tác động khác nhau; không xử lý chỉ dựa trên việc nút đang hiện.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Hồ sơ đã có phiếu phân bổ hoặc ghi giảm nên không thể xóa**: Cách xử lý: Đối chiếu cả hai loại phiếu; chỉ đảo phát sinh theo phương án kế toán được duyệt rồi xóa hồ sơ.
- **Phiếu phân bổ đã vào kỳ giá thành kết chuyển**: Cách xử lý: Hủy phiếu kết chuyển và xóa kỳ liên quan theo yêu cầu hệ thống trước xóa phân bổ; không xóa hồ sơ gốc để bỏ qua liên kết.
- **Đóng hộp Tính lại sau xóa**: Cách xử lý: Phiếu cũ đã bị xóa; kiểm tra danh sách và lập lại kỳ theo [HƯỚNG DẪN TÍNH VÀ LẬP PHIẾU PHÂN BỔ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-2-huong-dan-tinh-va-lap-phieu-phan-bo-chi-phi-tra-truoc/) nếu cần khôi phục số phân bổ.

## 10. Câu hỏi thường gặp

**Đóng hộp sau khi chọn Tính lại có giữ phiếu cũ không?** Không. Luồng tính lại xóa phiếu cũ trước khi mở hộp tính; phải kiểm tra và lập phiếu mới nếu muốn kỳ có số liệu phân bổ.

## 11. Công việc tiếp theo

- **[HƯỚNG DẪN TÍNH VÀ LẬP PHIẾU PHÂN BỔ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-2-huong-dan-tinh-va-lap-phieu-phan-bo-chi-phi-tra-truoc/)** — Tính và lập phiếu phân bổ chi phí trả trước.

## 12. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TÍNH VÀ LẬP PHIẾU PHÂN BỔ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-2-huong-dan-tinh-va-lap-phieu-phan-bo-chi-phi-tra-truoc/)** — Tính và lập phiếu phân bổ chi phí trả trước.
- **[HƯỚNG DẪN TỔNG QUAN CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-0-huong-dan-tong-quan-chi-phi-tra-truoc/)** — Tổng quan Chi phí trả trước.
- **[HƯỚNG DẪN GHI NHẬN CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-1-huong-dan-ghi-nhan-chi-phi-tra-truoc/)** — Ghi nhận chi phí trả trước.
- **[HƯỚNG DẪN GHI GIẢM CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-3-huong-dan-ghi-giam-chi-phi-tra-truoc/)** — Ghi giảm chi phí trả trước.
- **[HƯỚNG DẪN IMPORT GHI TĂNG CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-4-huong-dan-import-ghi-tang-chi-phi-tra-truoc/)** — Import ghi tăng chi phí trả trước.
- **[HƯỚNG DẪN NGỪNG VÀ TIẾP TỤC PHÂN BỔ CHI PHÍ TRẢ TRƯỚC](/bai-viet/2026-11-07-ts-b05-5-huong-dan-ngung-va-tiep-tuc-phan-bo-chi-phi-tra-truoc/)** — Ngừng và tiếp tục phân bổ chi phí trả trước.
