---
title: "HƯỚNG DẪN TỔNG QUAN TÍNH KHẤU HAO"
date: "2026-11-07"
summary: "Tra cứu phiếu tính khấu hao và theo dõi số tiền khấu hao theo chứng từ."
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

Tra cứu phiếu tính khấu hao và theo dõi số tiền khấu hao theo chứng từ.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: tra cứu phiếu tính khấu hao và theo dõi số tiền khấu hao theo chứng từ.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Tính khấu hao**

## 3. Nhận biết màn hình

Màn danh sách dùng để đối chiếu dữ liệu và mở các thao tác theo hồ sơ đã chọn.

Các nút chính của chức năng: **Xuất Excel**, **Tính khấu hao**, **Xem**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin, bộ điều kiện hoặc thanh thao tác phía trên. Khung  khoanh bảng danh sách phía dưới.

![Hình 1: Danh sách phiếu khấu hao có sẵn, số tiền đã che](/posts/2026-11-07-ts-a03-0-huong-dan-tong-quan-tinh-khau-hao/hinh-01-ts-khau-hao-ds.png)

## 4. Trình tự công việc

Xác định số phiếu/kỳ → Xem tài sản, phân bổ và hạch toán → Chọn tính mới hoặc bài tính lại → Đối chiếu số phiếu và số dư

## 5. Thực hiện trên phần mềm

1. Xác định phiếu/kỳ cần kiểm tra từ số chứng từ và chi tiết Xem; đọc **Ngày hạch toán**, **Ngày chứng từ**, **Số chứng từ**, **Diễn giải**, **Số tiền**.
2. Chọn **Xem** để đối chiếu chi tiết tài sản, phân bổ và hạch toán.
3. Chọn **Tính khấu hao** theo [HƯỚNG DẪN TÍNH KHẤU HAO VÀ LẬP PHIẾU KHẤU HAO](/bai-viet/2026-11-07-ts-a03-1-huong-dan-tinh-khau-hao-va-lap-phieu-khau-hao/); việc xóa/tính lại thực hiện theo [HƯỚNG DẪN XÓA VÀ TÍNH LẠI PHIẾU KHẤU HAO](/bai-viet/2026-11-07-ts-a03-2-huong-dan-xoa-va-tinh-lai-phieu-khau-hao/).

- **Tính khấu hao và lập phiếu khấu hao**: Bài hướng dẫn: [HƯỚNG DẪN TÍNH KHẤU HAO VÀ LẬP PHIẾU KHẤU HAO](/bai-viet/2026-11-07-ts-a03-1-huong-dan-tinh-khau-hao-va-lap-phieu-khau-hao/)
- **Xóa và tính lại phiếu khấu hao**: Bài hướng dẫn: [HƯỚNG DẪN XÓA VÀ TÍNH LẠI PHIẾU KHẤU HAO](/bai-viet/2026-11-07-ts-a03-2-huong-dan-xoa-va-tinh-lai-phieu-khau-hao/)

## 6. Giải thích các thông tin trên màn hình

- **Ngày hạch toán**: Ý nghĩa, cách nhập và quy tắc riêng: Ngày hạch toán đã lưu trên phiếu khấu hao; cột chỉ đọc, hiển thị dd/MM/yyyy.
- **Ngày chứng từ**: Ý nghĩa, cách nhập và quy tắc riêng: Ngày chứng từ khấu hao đã lưu; cột chỉ đọc, phân biệt với tháng/năm tính KH trong chi tiết phiếu.
- **Số chứng từ**: Ý nghĩa, cách nhập và quy tắc riêng: Số phiếu KH đã lập; dùng mở Xem và nhận diện phiếu bị xóa. Tính lại không bảo đảm giữ số cũ vì tạo một phiếu mới.
- **Diễn giải**: Ý nghĩa, cách nhập và quy tắc riêng: Nội dung diễn giải lưu trên phiếu, dùng kiểm tra cùng kỳ và số chứng từ; không sửa trực tiếp tại danh sách.
- **Số tiền**: Ý nghĩa, cách nhập và quy tắc riêng: Tổng khấu hao của phiếu đã lưu; mở Xem để đối chiếu chi tiết TSCĐ, phân bổ và hạch toán. Dòng Tổng cuối danh sách cộng số tiền các phiếu.

## 7. Kiểm tra sau khi thực hiện

Có danh sách phiếu và dữ liệu đối chiếu khấu hao theo kỳ.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Khấu hao có liên quan kỳ giá thành đã kết chuyển không thể xóa trực tiếp; cần xử lý quan hệ kỳ trước.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

### "Không có dữ liệu để xuất." 

Nguyên nhân: danh sách hiện không có dòng để xuất.

Cách xử lý: kiểm tra bộ lọc và phiếu khấu hao đã lập; mở lại đúng danh sách có dữ liệu rồi xuất. Chỉ tính xem trước chưa tạo phiếu.

### "Xuất Excel thất bại." (Lỗi hệ thống)

Nguyên nhân: quá trình tạo hoặc tải tệp Excel gặp lỗi; thông báo này chưa chỉ ra nguyên nhân cụ thể.

Cách xử lý: giữ nguyên dữ liệu phiếu, ghi thông báo và thời điểm lỗi; thử xuất lại từ danh sách đã tải đủ. Nếu vẫn lỗi, gửi thông tin cho người quản trị, không sửa số liệu nghiệp vụ chỉ để xuất được tệp.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN TÍNH KHẤU HAO VÀ LẬP PHIẾU KHẤU HAO](/bai-viet/2026-11-07-ts-a03-1-huong-dan-tinh-khau-hao-va-lap-phieu-khau-hao/)** — Tính khấu hao và lập phiếu khấu hao.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TÍNH KHẤU HAO VÀ LẬP PHIẾU KHẤU HAO](/bai-viet/2026-11-07-ts-a03-1-huong-dan-tinh-khau-hao-va-lap-phieu-khau-hao/)** — Tính khấu hao và lập phiếu khấu hao.
- **[HƯỚNG DẪN XÓA VÀ TÍNH LẠI PHIẾU KHẤU HAO](/bai-viet/2026-11-07-ts-a03-2-huong-dan-xoa-va-tinh-lai-phieu-khau-hao/)** — Xóa và tính lại phiếu khấu hao.
