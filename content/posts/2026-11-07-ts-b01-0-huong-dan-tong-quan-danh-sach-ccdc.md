---
title: "HƯỚNG DẪN TỔNG QUAN DANH SÁCH CCDC"
date: "2026-11-07"
summary: "Theo dõi công cụ dụng cụ theo mã và đơn vị sử dụng, giá trị đã phân bổ/còn lại."
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

Theo dõi công cụ dụng cụ theo mã và đơn vị sử dụng, giá trị đã phân bổ/còn lại.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị dữ liệu nguồn tương ứng: theo dõi công cụ dụng cụ theo mã và đơn vị sử dụng, giá trị đã phân bổ/còn lại.
- Đối chiếu kỳ/ngày, mã hồ sơ và giá trị trước thao tác. Khi có quan hệ với khóa sổ hoặc kết chuyển, kiểm tra điều kiện ở phần “Những điều cần lưu ý”.

## 2. Mở chức năng

**Tài sản & CCDC → Danh sách CCDC**

## 3. Nhận biết màn hình

Màn danh sách dùng để đối chiếu dữ liệu và mở các thao tác theo hồ sơ đã chọn.

Các nút chính của chức năng: **Danh mục**, **Ghi tăng**, **Import ghi tăng**, **Xem**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin, bộ điều kiện hoặc thanh thao tác phía trên. Khung  khoanh bảng danh sách phía dưới.

![Hình 1: Danh sách theo công cụ dụng cụ hiện trống](/posts/2026-11-07-ts-b01-0-huong-dan-tong-quan-danh-sach-ccdc/hinh-01-ccdc-ds.png)

![Hình 2: Danh sách CCDC theo đơn vị sử dụng hiện trống](/posts/2026-11-07-ts-b01-0-huong-dan-tong-quan-danh-sach-ccdc/hinh-02-ccdc-ds-don-vi.png)

## 4. Trình tự công việc

Đọc Theo công cụ hoặc Theo đơn vị sử dụng → Đối chiếu số lượng/giá trị/số kỳ → Xem hồ sơ và phân bổ → Chọn bài xử lý phù hợp

## 5. Thực hiện trên phần mềm

1. Ở **Theo công cụ dụng cụ**, đọc mã/tên, loại/nhóm, ngày ghi tăng, số lượng, giá trị và số kỳ phân bổ.
2. Ở **Theo đơn vị sử dụng**, đối chiếu số lượng và giá trị của CCDC theo từng đơn vị.
3. Mở **Xem** để đối chiếu đơn vị sử dụng, thiết lập phân bổ và nguồn gốc; dùng bài ghi tăng hoặc import khi cần nhập hồ sơ.

- **Ghi tăng công cụ dụng cụ**: Bài hướng dẫn: [HƯỚNG DẪN GHI TĂNG CÔNG CỤ DỤNG CỤ](/bai-viet/2026-11-07-ts-b01-1-huong-dan-ghi-tang-cong-cu-dung-cu/)
- **Import ghi tăng CCDC đầu kỳ**: Bài hướng dẫn: [HƯỚNG DẪN IMPORT GHI TĂNG CCDC ĐẦU KỲ](/bai-viet/2026-11-07-ts-b01-2-huong-dan-import-ghi-tang-ccdc-dau-ky/)

## 6. Giải thích các thông tin trên màn hình

- **Mã CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Mã duy nhất của một hồ sơ CCDC, dùng tìm đúng công cụ và đối chiếu các chứng từ liên quan; cột chỉ xem.
- **Tên CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Tên mô tả công cụ đã ghi tăng; đọc kèm mã để phân biệt công cụ có tên giống nhau; cột chỉ xem.
- **Loại CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Tên loại đã chọn từ danh mục khi ghi tăng; dùng phân loại công cụ và gợi ý TK chờ phân bổ trên cửa sổ.
- **Nhóm CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Nhóm quản lý nhập bằng chữ khi khai báo CCDC; khác với danh mục Loại CCDC.
- **ĐVT**: Ý nghĩa, cách nhập hoặc đối chiếu: Đơn vị đo số lượng CCDC, ví dụ Cái/Bộ; lấy từ hồ sơ, không phải đơn vị sử dụng.
- **Ngày ghi tăng**: Ý nghĩa, cách nhập hoặc đối chiếu: Ngày trên phiếu ghi tăng; cột chỉ xem. Khi lập mới, bắt buộc chọn ngày, mặc định ngày hiện tại.
- **Số lượng**: Ý nghĩa, cách nhập hoặc đối chiếu: Số lượng công cụ ghi tăng theo ĐVT; ở danh sách là số đã lưu, không chỉnh trực tiếp tại cột.
- **Giá trị CCDC**: Ý nghĩa, cách nhập hoặc đối chiếu: Tổng giá trị công cụ đã ghi nhận, không phải đơn giá; đọc cùng số đã phân bổ và số còn lại.
- **Giá trị đã phân bổ**: Ý nghĩa, cách nhập hoặc đối chiếu: Giá trị lũy kế đã phân bổ của CCDC, gồm số đầu kỳ và các phát sinh được ghi nhận; cột chỉ xem.
- **Giá trị còn lại**: Ý nghĩa, cách nhập hoặc đối chiếu: Giá trị CCDC còn chờ phân bổ; khi ghi tăng được tính bằng giá trị trừ giá trị đã phân bổ, thay đổi khi lập/xóa phiếu phân bổ.
- **Số kỳ PB**: Ý nghĩa, cách nhập hoặc đối chiếu: Số kỳ dùng tính mức phân bổ hàng kỳ; phải lớn hơn 0 để hồ sơ được đưa vào tính phân bổ.
- **PB hàng kỳ**: Ý nghĩa, cách nhập hoặc đối chiếu: Mức phân bổ một kỳ lưu trên hồ sơ; số thực tế một kỳ không vượt giá trị còn lại trước khi chia theo thiết lập.
- **TK chờ PB**: Ý nghĩa, cách nhập hoặc đối chiếu: Tài khoản đang theo dõi phần giá trị chờ phân bổ; dùng làm TK Có khi tính phân bổ, mặc định khai báo mới là 242.
- **Tình trạng**: Ý nghĩa, cách nhập hoặc đối chiếu: Trạng thái hiển thị của hồ sơ; dùng kiểm tra ngừng phân bổ/đã phân bổ hết cùng số còn lại, không nhập tại danh sách.
- **Đơn vị sử dụng**: Ý nghĩa, cách nhập hoặc đối chiếu: Đơn vị nhận sử dụng CCDC từ các dòng đơn vị của phiếu ghi tăng; không đồng nghĩa với đối tượng nhận phân bổ chi phí.

Các cột danh sách là kết quả chỉ xem; nhập hoặc sửa tại nghiệp vụ tương ứng. Luôn xác định đúng tab trước đọc số CT và tổng tiền.

## 7. Kiểm tra sau khi thực hiện

Có danh sách CCDC theo mã và đơn vị để đối chiếu trước phân bổ.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Giá trị còn lại và tình trạng quyết định CCDC có được đưa vào phân bổ; phải kiểm tra hồ sơ nguồn.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Không tải được danh sách CCDC**: Cách xử lý: Chưa đối chiếu được danh sách hiện tại; ghi nhận thông báo và tải lại trước chọn mã xử lý, không coi bảng trống là không có CCDC.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN GHI TĂNG CÔNG CỤ DỤNG CỤ](/bai-viet/2026-11-07-ts-b01-1-huong-dan-ghi-tang-cong-cu-dung-cu/)** — Ghi tăng công cụ dụng cụ.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN GHI TĂNG CÔNG CỤ DỤNG CỤ](/bai-viet/2026-11-07-ts-b01-1-huong-dan-ghi-tang-cong-cu-dung-cu/)** — Ghi tăng công cụ dụng cụ.
- **[HƯỚNG DẪN IMPORT GHI TĂNG CCDC ĐẦU KỲ](/bai-viet/2026-11-07-ts-b01-2-huong-dan-import-ghi-tang-ccdc-dau-ky/)** — Import ghi tăng CCDC đầu kỳ.
