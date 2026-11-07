---
title: "TỔNG QUAN MÀN HÌNH BẢNG KÊ LÃI QUÁ HẠN"
date: "2026-11-07"
summary: "Màn hình Bảng kê lãi quá hạn dùng để lập, lưu và in bảng kê tính tiền lãi trên các khoản nợ quá hạn của một khách hàng."
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

Màn hình **Bảng kê lãi quá hạn** dùng để **lập, lưu và in bảng kê tính tiền lãi** trên các khoản nợ quá hạn của một khách hàng. Khi lập bảng kê, hệ thống lấy sẵn danh sách khoản nợ quá hạn của khách tại ngày bảng kê (như màn **Công nợ quá hạn**, [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ QUÁ HẠN](/bai-viet/2026-11-07-kt-c03-0-tong-quan-man-hinh-thong-ke-cong-no-qua-han/)), tính **tiền lãi** theo lãi suất bạn nhập, và in ra **BẢNG KÊ CHI TIẾT HÓA ĐƠN VÀ TIỀN LÃI QUÁ HẠN** gửi khách.

Bạn dùng màn hình này khi:

- Cần thông báo cho khách số tiền lãi phạt chậm thanh toán theo hợp đồng.
- Lưu lại các lần đã tính lãi để tra cứu.

Bảng kê **chỉ để thông báo**: lưu bảng kê **không** ghi tăng công nợ khách hàng, không tạo chứng từ kế toán.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Đang làm việc đúng **chi nhánh** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Khách hàng có khoản nợ quá hạn và tài khoản được phân **nhóm khách hàng** của khách đó (giống [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ QUÁ HẠN](/bai-viet/2026-11-07-kt-c03-0-tong-quan-man-hinh-thong-ke-cong-no-qua-han/)); nếu không, bảng kê không lấy được dòng nào.
- Đã thống nhất **lãi suất quá hạn** áp dụng (thường theo hợp đồng bán hàng).

## 2. Mở chức năng

**Thống kê công nợ → Bảng kê lãi quá hạn**

## 3. Nhận biết màn hình

![Hình 1: Màn hình BẢNG KÊ LÃI QUÁ HẠN - DANH SÁCH](/posts/2026-11-07-kt-c04-0-tong-quan-man-hinh-bang-ke-lai-qua-han/hinh-01-man-hinh-bang-ke-lai-qua-han.png)

Hình 1 chụp ngày 12/10/2026, khoảng **Hôm nay**, chưa có bảng kê nào (*Không có dữ liệu*, **TỔNG CỘNG: 0**).

- **Ô khoảng ngày**: Chức năng: Lọc theo **Ngày bảng kê**. Lần đầu là **Hôm nay**, lần sau nhớ lựa chọn gần nhất; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Tải lại**: Chức năng: Lấy lại danh sách
- **Nút Thêm mới**: Chức năng: Mở hộp thoại **THÊM MỚI - BẢNG KÊ LÃI QUÁ HẠN**; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Cột Thao tác**: Chức năng: **Sửa** / **Xóa** theo quyền; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Biểu tượng Xuất Excel, Trình chọn cột, Tìm kiếm…, hàng lọc**: Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/), [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Dòng tổng**: Chức năng: **TỔNG CỘNG** số bảng kê; tổng Tổng tiền lãi, Tổng tiền nợ

**Các cột trên lưới:** **STT**, **Thao tác**, **Ngày bảng kê**, **Mã bảng kê**, **MST**, **Tên khách hàng**, **Khách hàng** (tên rút gọn), **Lãi năm**, **Lãi**, **Tổng tiền lãi**, **Tổng tiền nợ**, **Ghi chú**, **Người tạo**, **Ngày tạo**, **Người sửa**, **Ngày sửa**.

**Nhấp đúp** một dòng hoặc chuột phải → **Xem lại** để mở bảng kê ở chế độ xem. Chuột phải → **In phiếu** để mở bản xem trước bảng kê ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)). Chuột phải còn có **Khôi phục bố cục** ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)).

![Hình 2: Hộp thoại THÊM MỚI - BẢNG KÊ LÃI QUÁ HẠN](/posts/2026-11-07-kt-c04-0-tong-quan-man-hinh-bang-ke-lai-qua-han/hinh-02-hop-thoai-them-moi-bang-ke.png)

Hình 2 chụp ngày 12/10/2026 khi vừa chọn khách thử KH000021: hệ thống nạp 2 khoản nợ, cả hai **chưa đến hạn** (Số ngày quá hạn −29) nên **Số tiền nợ** và **Tiền lãi** bằng 0. Bảng kê này không lưu.

- Trường: **MÃ PHIẾU**; Ghi chú: Chỉ đọc; hiện **MÃ TẠO TỰ ĐỘNG**, mã sinh khi lưu
- Trường: **MÃ SỐ THUẾ**; Ghi chú: Chỉ đọc; tự điền theo khách hàng
- Trường: **KHÁCH HÀNG**; Bắt buộc: Có; Ghi chú: Hiển thị dạng "id, mã, tên" (ví dụ "8280, KH000021, …"); chỉ chọn được khi thêm mới
- Trường: **LÃI NĂM**; Ghi chú: Lãi suất quá hạn năm, mặc định **8%**
- Trường: **NGÀY BẢNG KÊ**; Bắt buộc: Có; Ghi chú: Mặc định hôm nay; ngày tính quá hạn
- Trường: **GHI CHÚ**; Ghi chú: Đổi **LÃI NĂM** thì tự ghi "Áp dụng mức lãi suất quá hạn …% /năm"
- Trường: **LÃI**; Ghi chú: Tỷ lệ áp dụng trên lãi năm, mặc định **100%**
- Trường: Lưới chi tiết; Ghi chú: Các khoản nợ quá hạn của khách (bảng dưới)
- Trường: **Lưu lại** / **Đóng**

**Cột lưới chi tiết:**

- **STT**: Ý nghĩa: Kéo biểu tượng đầu dòng để đổi thứ tự
- **Ngày hóa đơn**: Sửa được: Không; Ý nghĩa: Ngày phát sinh khoản nợ
- **Số hóa đơn**: Sửa được: Không; Ý nghĩa: Số hoá đơn / mã chứng từ
- **Số tiền TT.HĐ**: Sửa được: Không; Ý nghĩa: Số tiền của phiếu
- **Số tiền đã TT**: Sửa được: Không; Ý nghĩa: Phần đã thu phân bổ cho phiếu
- **Số tiền nợ**: Sửa được: Không; Ý nghĩa: Tổng tiền quá hạn còn nợ của phiếu
- **Thời hạn nợ**: Sửa được: Không; Ý nghĩa: Số ngày nợ của phiếu
- **Ngày bắt đầu tính lãi**: Sửa được: Có; Ý nghĩa: Mặc định = ngày đến hạn
- **Ngày tạm tính lãi**: Sửa được: Có; Ý nghĩa: Mặc định = ngày bảng kê
- **Số ngày quá hạn**: Sửa được: Không; Ý nghĩa: Tự tính lại khi đổi hai ngày trên
- **Tiền lãi**: Sửa được: Không; Ý nghĩa: phần “Giải thích các thông tin trên màn hình”
- **Tổng tiền nợ**: Sửa được: Không; Ý nghĩa: Số tiền nợ + Tiền lãi
- **Chú thích**: Sửa được: Có
- **Thao tác**: Ý nghĩa: Biểu tượng xoá dòng (thùng rác)

Lúc chụp Hình 2, lưới chi tiết **không hiện** bốn cột **Ngày hóa đơn**, **Số hóa đơn**, **Ngày bắt đầu tính lãi**, **Ngày tạm tính lãi** (bố cục lưới đã lưu). Bật lại bằng **Trình chọn cột** hoặc **Khôi phục bố cục** (chuột phải tiêu đề cột) trước khi sửa ngày tính lãi.

Chuột phải ô **Ngày bắt đầu tính lãi**, **Ngày tạm tính lãi** hoặc **Chú thích** → **Áp dụng cho những dòng dưới** để chép giá trị xuống các dòng phía dưới. Chuột phải tiêu đề cột có **Khôi phục bố cục**, **Trình chọn cột**.

*Hình 3 chưa có ảnh: khách thử chưa có khoản quá hạn nên tiền lãi bằng 0, chưa lưu bảng kê để in. Bổ sung khi có khách quá hạn.*

## 4. Trình tự công việc

```text
Công nợ quá hạn của khách (KT-C03.0)
                    ↓
Thêm mới → chọn Khách hàng + Ngày bảng kê → hệ thống nạp các khoản nợ
                    ↓
Nhập Lãi năm, Lãi → sửa ngày tính lãi (nếu cần) → Lưu lại
                    ↓
Danh sách bảng kê ──► In phiếu (GEN-06) → gửi khách
```

## 5. Thực hiện trên phần mềm

- **Lập bảng kê**: Cách làm: **Thêm mới**; Bài hướng dẫn: Bước dưới
- **Xem lại bảng kê**: Cách làm: Nhấp đúp dòng / chuột phải → **Xem lại**
- **Sửa bảng kê**: Cách làm: **Sửa** ở cột **Thao tác**; Bài hướng dẫn: Bước dưới
- **Xoá bảng kê**: Cách làm: **Xóa** ở cột **Thao tác** → xác nhận; Bài hướng dẫn: [HƯỚNG DẪN THÊM MỚI, CẬP NHẬT, XOÁ DỮ LIỆU](/bai-viet/2026-11-07-gen-11-huong-dan-them-moi-cap-nhat-xoa-du-lieu/)
- **In bảng kê**: Cách làm: Chuột phải → **In phiếu**; Bài hướng dẫn: [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Xuất danh sách**: Cách làm: Biểu tượng **Xuất Excel**; Bài hướng dẫn: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)

### Lập bảng kê lãi quá hạn

**Bước 1 –** Bấm **Thêm mới**.

**Bước 2 –** Kiểm **NGÀY BẢNG KÊ** (mặc định hôm nay); đổi nếu cần **trước** khi chọn khách.

**Bước 3 –** Chọn **KHÁCH HÀNG**. Hệ thống điền **MÃ SỐ THUẾ** và nạp các khoản nợ của khách vào lưới chi tiết.

**Bước 4 –** Nhập **LÃI NĂM** (mặc định 8%, ví dụ đổi thành 10%) và **LÃI** (mặc định 100% — để nguyên nếu tính đủ). **Tiền lãi**, **Tổng tiền nợ** của mọi dòng tự tính lại.

**Bước 5 –** Nếu hợp đồng quy định ngày bắt đầu tính lãi khác ngày đến hạn, sửa **Ngày bắt đầu tính lãi** (dùng **Áp dụng cho những dòng dưới** để chép nhanh). Xoá dòng không tính lãi bằng biểu tượng xoá.

**Bước 6 –** Đối chiếu lại số ngày và tiền lãi sau sửa ngày: cần kiểm tra chênh lệch số ngày giữa lúc nạp, sửa và mở lại; không để ngày tạm tính trước ngày bắt đầu. Chốt quy ước với kế toán, chỉ bấm **Lưu lại** khi số ngày/tiền đã đúng. Hệ thống báo **Lưu thành công** và tải lại danh sách.

**Bước 7 –** Chuột phải dòng vừa lưu → **In phiếu** ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)).

### Sửa bảng kê

**Bước 1 –** Bấm **Sửa** ở dòng cần sửa; hộp thoại **CẬP NHẬT - BẢNG KÊ LÃI QUÁ HẠN** mở ra. **KHÁCH HÀNG** không đổi được.

**Bước 2 –** Sửa lãi suất, ngày tính lãi, chú thích; bấm **Lưu lại**.

⚠️ Đổi **NGÀY BẢNG KÊ** khi sửa sẽ **nạp lại toàn bộ** lưới chi tiết từ công nợ quá hạn tại ngày mới; các sửa tay trên lưới bị mất.

## 6. Giải thích các thông tin trên màn hình

**Số tiền nợ**

**Tổng tiền quá hạn** của phiếu tại ngày bảng kê ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ QUÁ HẠN](/bai-viet/2026-11-07-kt-c03-0-tong-quan-man-hinh-thong-ke-cong-no-qua-han/))

**Số ngày quá hạn (khi nạp)**

Ngày bảng kê − Ngày đến hạn

**Số ngày quá hạn (khi sửa ngày)**

Số ngày giữa **Ngày tạm tính lãi** và **Ngày bắt đầu tính lãi**, trừ 1

**Tiền lãi**

Số tiền nợ × Lãi năm × Số ngày quá hạn ÷ 365 × Lãi, làm tròn đến đồng

**Tổng tiền nợ (dòng)**

Số tiền nợ + Tiền lãi

**Tổng tiền lãi, Tổng tiền nợ (bảng kê)**

Cộng các dòng chi tiết; hệ thống tính lại khi lưu

Ví dụ: Số tiền nợ 100.000.000, Lãi năm 10%, Lãi 100%, quá hạn 30 ngày → Tiền lãi = 100.000.000 × 10% × 30 ÷ 365 × 100% ≈ 821.918.

Danh sách lọc theo **Ngày bảng kê** trong khoảng ngày và **chi nhánh đang làm việc**, mới nhất ở trên. Mã bảng kê có ký hiệu **BK**.

## 7. Kiểm tra sau khi thực hiện

Bảng kê được lưu (mã **BK…**), xem lại và in được bất cứ lúc nào. Công nợ khách hàng **không** thay đổi.

## 8. Những điều cần lưu ý

⚠️ Tiền lãi trên bảng kê **không tự ghi vào công nợ**. Muốn thu lãi, lập chứng từ theo quy trình kế toán (phiếu thu / phiếu bán dịch vụ…).

⚠️ Lưới chi tiết có thể nạp cả khoản **chưa đến hạn** (Số ngày quá hạn âm, Số tiền nợ = 0, Tiền lãi = 0 — dù **Số tiền đã TT** nhỏ hơn **Số tiền TT.HĐ**). Xoá các dòng này trước khi lưu để bảng kê gọn.

⚠️ Giữa lưới chi tiết có thể hiện chữ *Không có dữ liệu* đè lên dù đã có dòng — bỏ qua, các dòng phía trên vẫn đúng.

⚠️ Số liệu nạp vào lúc lập là **ảnh chụp** tại thời điểm đó. Khách trả thêm tiền sau khi lưu, bảng kê **không** tự cập nhật.

⚠️ Chọn **NGÀY BẢNG KÊ trước**, rồi mới chọn **KHÁCH HÀNG**. Đổi ngày sau đó sẽ nạp lại toàn bộ chi tiết.

⚠️ Chỉ **người tạo** xoá được bảng kê, kể cả khi người khác có quyền **Xoá**.

### "Vui lòng chọn Khách hàng" / "Chọn ngày bảng kê" 

Nguyên nhân: bỏ trống trường bắt buộc.
Cách xử lý: chọn khách hàng, ngày bảng kê rồi bấm **Lưu lại**.

### Chọn khách hàng nhưng lưới chi tiết trống 

Nguyên nhân: khách không có nợ quá hạn tại ngày bảng kê; tài khoản chưa được phân nhóm khách hàng của khách; đang ở chi nhánh khác.
Cách xử lý: kiểm tra ở màn **Công nợ quá hạn** ([TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ QUÁ HẠN](/bai-viet/2026-11-07-kt-c03-0-tong-quan-man-hinh-thong-ke-cong-no-qua-han/)); liên hệ quản trị hệ thống phân nhóm khách hàng.

### "Bạn chỉ được xóa phiếu do mình tạo" 

Nguyên nhân: xoá bảng kê do người khác lập.
Cách xử lý: nhờ người lập xoá, hoặc liên hệ quản trị hệ thống.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: thiếu quyền **Truy cập** / **Thêm mới** / **Cập nhật** / **Xoá**.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Lãi năm và Lãi khác nhau thế nào?**
**Lãi năm** là lãi suất quá hạn theo năm (ví dụ 10%/năm). **Lãi** là tỷ lệ áp dụng trên lãi suất đó (ví dụ 150% nếu hợp đồng phạt gấp rưỡi). Để **Lãi** = 100% khi tính đúng lãi năm.

**Thêm dòng tay vào bảng kê được không?**
Không. Lưới chi tiết chỉ lấy các khoản từ công nợ quá hạn; bạn chỉ xoá dòng, sửa ngày tính lãi và chú thích.

**Sửa bảng kê có làm đổi tiền lãi đã in không?**
Có. Tiền lãi được tính lại khi lưu; bản in sau đó theo số mới.

## 11. Công việc tiếp theo

```text
Bảng kê lãi quá hạn → In phiếu → gửi khách → khách trả lãi → lập phiếu thu (KT-A03)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ QUÁ HẠN](/bai-viet/2026-11-07-kt-c03-0-tong-quan-man-hinh-thong-ke-cong-no-qua-han/) – Tổng quan màn hình thống kê Công nợ quá hạn
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/) – Tổng quan màn hình thống kê Công nợ khách hàng
- [TỔNG QUAN MÀN HÌNH HỢP ĐỒNG](/bai-viet/2026-11-07-bh-a01-0-tong-quan-man-hinh-hop-dong/) – Tổng quan màn hình Hợp đồng (bán hàng)
