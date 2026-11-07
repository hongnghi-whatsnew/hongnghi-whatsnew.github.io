---
title: "HƯỚNG DẪN IN CHỨNG TỪ"
date: "2026-11-07"
summary: "Các phiếu trên Hồng Nghi ERP (phiếu nhập kho, phiếu xuất kho, phiếu bán hàng, phiếu thu, phiếu chi, hợp đồng, bảng lương…) được in qua cửa sổ xem trước khi in dùng chung."
module: "Thao tác chung"
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

Các phiếu trên Hồng Nghi ERP (phiếu nhập kho, phiếu xuất kho, phiếu bán hàng, phiếu thu, phiếu chi, hợp đồng, bảng lương…) được in qua **cửa sổ xem trước khi in** dùng chung. Cửa sổ này cho phép:

- Xem phiếu đúng như khi in ra giấy.
- In ra máy in.
- Xuất phiếu thành file **PDF**, **Excel**, **Word**… để gửi đi.
- Chọn **mẫu in** khác (nếu màn hình có nhiều mẫu).

Mỗi màn hình có một hoặc nhiều lệnh in riêng (ví dụ **In phiếu (có giá)**, **In phiếu (không giá)**, **In tem kiện**). Bài này hướng dẫn phần **dùng chung** của cửa sổ in; nội dung từng mẫu phiếu nằm ở bài in của từng màn.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Phiếu cần in **đã được lưu**.
- Đang làm việc đúng **chi nhánh** (tên công ty, mã số thuế, logo trên phiếu lấy theo chi nhánh – [HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Máy tính đã cài máy in (khi cần in ra giấy).

## 2. Mở chức năng

Màn hình danh sách chứng từ → **chuột phải** vào dòng phiếu → chọn lệnh in.

Ví dụ: **Nghiệp vụ → Kho hàng → Phiếu nhập kho** → chuột phải vào dòng phiếu → **In phiếu (có giá)**.

## 3. Nhận biết màn hình

![Hình 1: Lệnh in trong menu chuột phải (ví dụ Phiếu nhập kho)](/posts/2026-11-07-gen-06-huong-dan-in-chung-tu/hinh-01-menu-in-phieu.png)

![Hình 2: Cửa sổ xem trước khi in](/posts/2026-11-07-gen-06-huong-dan-in-chung-tu/hinh-02-cua-so-xem-truoc.png)

- **In**: Chức năng: In phiếu ra máy in (mở hộp in của trình duyệt)
- **Xuất**: Chức năng: Xuất phiếu ra file: PDF, Word, Excel, HTML…
- **Nút chuyển trang (Trang … của …)**: Chức năng: Xem phiếu nhiều trang
- **Tỷ lệ xem (100%) và chế độ xem (Trang đơn)**: Chức năng: Chỉnh cách xem trên màn hình, không ảnh hưởng bản in
- **Sửa mẫu**: Chức năng: Mở trình thiết kế mẫu in (chỉ hiện với người có quyền)
- **Đóng**: Chức năng: Đóng cửa sổ in
- **Vùng xem phiếu**: Chức năng: Phiếu như khi in ra giấy

Màn hình nào có thêm mẫu in phụ thì thanh công cụ có thêm nút **Mẫu in** (xem Bước 3).

## 4. Trình tự công việc

```text
Danh sách chứng từ → chuột phải vào dòng phiếu → lệnh In …
      ↓
Cửa sổ xem trước khi in (đợi phiếu hiện ra)
      ├── (Mẫu in → chọn mẫu khác) ──► phiếu vẽ lại theo mẫu mới
      ├── In ──► hộp in của trình duyệt → chọn máy in → In
      ├── Xuất ──► chọn định dạng (PDF / Excel / Word…) → tải file về
      └── Đóng
```

### Bước 1 – Mở cửa sổ in

Ở danh sách chứng từ, tìm phiếu cần in ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)). Bấm **chuột phải** vào dòng phiếu và chọn lệnh in (Hình 1), ví dụ **In phiếu (có giá)**.

Cửa sổ xem trước mở ra, phiếu hiện trong vùng xem  sau vài giây (Hình 2). Trên phiếu có thông tin công ty, logo của chi nhánh; một số mẫu (ví dụ đơn đặt hàng) ghi thêm người in và thời gian in ở góc trên phải.

### Bước 2 – Kiểm tra phiếu

Xem lại nội dung. Phiếu nhiều trang: dùng các nút chuyển trang. Chữ nhỏ: đổi tỷ lệ xem  (ví dụ **150%**).

### Bước 3 – Chọn mẫu in (nếu có)

Nếu thanh công cụ có nút **Mẫu in**: bấm nút, chọn mẫu trong danh sách. Mẫu đang dùng có dấu tick; **Mẫu mặc định** là mẫu chuẩn. Phiếu được vẽ lại theo mẫu vừa chọn. Nếu không có nút này, dùng mẫu đang hiện và bỏ qua bước chọn mẫu. Không tự kết luận hệ thống chỉ có một mẫu: nút cũng có thể không nạp được khi việc tải danh sách mẫu gặp lỗi.

Lựa chọn mẫu chỉ giữ trong lần mở cửa sổ này; đóng rồi mở lại sẽ về **Mẫu mặc định**.

### Bước 4 – In ra máy in

Bấm **In**. Hộp in của trình duyệt mở ra. Chọn máy in, số bản, khổ giấy, bấm **In** (**Print**).

### Bước 5 – Xuất phiếu ra file (khi cần gửi)

**Bước 5.1 –** Bấm **Xuất**, chọn định dạng trong danh sách (Hình 3): **Định dạng tệp PDF...**, **Tệp Microsoft Word...**, **Định dạng tệp Excel...**, **Định dạng tệp HTML...**…

**Bước 5.2 –** Hộp tuỳ chọn của định dạng hiện ra (phạm vi trang, chất lượng…). Giữ mặc định và bấm **Đồng ý**.

**Bước 5.3 –** Kiểm tra file tải về tại vị trí trình duyệt đã chọn hoặc hộp lưu file; tên thư mục phụ thuộc cài đặt tải xuống của máy.

![Hình 3: Danh sách định dạng của nút Xuất](/posts/2026-11-07-gen-06-huong-dan-in-chung-tu/hinh-03-xuat-file.png)

### Bước 6 – Đóng cửa sổ in

Bấm **Đóng**  ở góc phải thanh công cụ.

## 6. Giải thích các thông tin trên màn hình

- **Tên công ty, mã số thuế, địa chỉ, điện thoại, logo**: Nguồn: Dữ liệu hệ thống hoặc nội dung mẫu in; Lưu ý: Sai thông tin công ty: kiểm tra chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)), báo IT nếu vẫn sai
- **Người in, thời gian in (một số mẫu)**: Nguồn: Tài khoản đang đăng nhập, giờ lúc mở cửa sổ in; Lưu ý: Tự động
- **Số tiền bằng chữ**: Nguồn: Hệ thống tự đổi từ tổng tiền; Lưu ý: Tự động
- **Nội dung phiếu**: Nguồn: Dữ liệu đã lưu của phiếu; Lưu ý: Sửa phiếu xong phải mở lại cửa sổ in để thấy nội dung mới

## 7. Kiểm tra sau khi thực hiện

- Phiếu được in ra giấy, hoặc có file PDF / Excel / Word tại vị trí tải xuống đã chọn và đã kiểm tra nội dung.
- Việc in **không** làm thay đổi dữ liệu phiếu.

## 8. Những điều cần lưu ý

⚠️ **Kiểm tra tên miền, đơn vị và nội dung mẫu trước khi in.** Một số mẫu có chữ cố định; không mặc định toàn bộ tên công ty, địa chỉ hoặc quy cách luôn đổi theo dữ liệu phiếu. Nếu lệch, dừng in để đối chiếu mẫu.

⚠️ Một số phiếu có bản **có giá** và **không giá**. Phiếu giao cho khách / nhà xe thường dùng bản **không giá**; chọn đúng lệnh in theo quy định nội bộ.

⚠️ Phiếu in là ảnh chụp dữ liệu **tại lúc mở cửa sổ in**. Sửa phiếu sau khi in thì bản giấy cũ không còn đúng – in lại và huỷ bản cũ.

⚠️ **Sửa mẫu** là thao tác quản lý mẫu dùng chung trên hệ thống; không dùng để sửa số liệu riêng của một phiếu. Chỉ người được giao quản lý mẫu thực hiện, xác nhận phạm vi áp dụng trước khi lưu mẫu.

### Cửa sổ in trắng, không hiện phiếu (Lỗi hệ thống)

Nguyên nhân: mạng chậm khi tải mẫu in / dữ liệu phiếu, hoặc mẫu in của màn đang lỗi.
Cách xử lý: chờ vài giây; bấm **Đóng** rồi mở lại. Vẫn trắng: chụp màn hình, ghi mã phiếu, gửi IT.

### Phiếu thiếu tên công ty / mã số thuế hoặc sai logo (Lỗi sử dụng hoặc lỗi hệ thống)

Kiểm tra: tên chi nhánh ở đầu menu bên trái.
Cách xử lý: đăng xuất, đăng nhập lại đúng địa chỉ chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)) rồi in lại. Vẫn thiếu: báo IT kiểm tra thông tin chi nhánh.

### Phiếu hiện chữ / dải thông báo "dùng thử" (Trial) trên trang (Lỗi hệ thống)

Nguyên nhân: hệ thống thiếu tệp bản quyền của bộ in.
Cách xử lý: báo IT.

### Bấm In nhưng không ra giấy 

Kiểm tra: đã chọn đúng máy in trong hộp in của trình duyệt chưa; máy in có bật, có giấy không.
Cách xử lý: chọn lại máy in; hoặc **Xuất** ra PDF rồi in file PDF.

### Không thấy nút Mẫu in 

Có thể chưa cấu hình mẫu phụ hoặc danh sách mẫu chưa tải được. Nếu bản xem trước đúng và đủ thông tin, dùng mẫu hiện tại; nếu cần mẫu được giao nhưng không thấy, ghi tên màn/mã phiếu và báo người quản lý mẫu.

## 10. Câu hỏi thường gặp

**In nhiều phiếu một lần được không?**
Cửa sổ in dùng chung chỉ in một phiếu mỗi lần. Một số màn có lệnh in gộp riêng – xem bài của màn đó.

**Có cần lưu ra PDF trước khi in không?**
Không. Bấm **In** là in thẳng. Xuất PDF chỉ khi cần gửi file.

**Chỉnh lề, khổ giấy ở đâu?**
Trong hộp in của trình duyệt (**Thêm cài đặt** / **More settings**). Bố cục phiếu do mẫu in quyết định.

## 11. Công việc tiếp theo

```text
In phiếu → ký, đóng dấu
   └──► Scan bản đã ký → đính kèm vào phiếu (GEN-12)
```

**Tiếp theo:** [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/) – Hướng dẫn thêm mới, cập nhật, xoá dữ liệu.

## 12. Bài hướng dẫn liên quan

- [HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/) – Hướng dẫn truy cập đúng hệ thống chi nhánh
- [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/) – Hướng dẫn tìm kiếm, lọc trên danh sách
- [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/) – Hướng dẫn xuất Excel
- [HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/) – Hướng dẫn quản lý file đính kèm
