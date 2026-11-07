---
title: "TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ QUÁ HẠN"
date: "2026-11-07"
summary: "Màn hình Công nợ quá hạn liệt kê từng khoản nợ của khách hàng còn chưa thu đủ tính đến một ngày bạn chọn, tại chi nhánh đang làm việc, gom nhóm theo khách hàng."
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

Màn hình **Công nợ quá hạn** liệt kê **từng khoản nợ của khách hàng còn chưa thu đủ** tính đến **một ngày** bạn chọn, tại **chi nhánh đang làm việc**, gom nhóm theo khách hàng. Mỗi dòng là một phiếu xuất kho, phiếu bán dịch vụ hoặc khoản nợ cũ, kèm số đã thu, ngày đến hạn, số ngày quá hạn và **tuổi nợ** (01-15, 16-30, 31-45, 46-60, > 60 ngày).

Trên màn hình bạn còn:

- Đặt **thứ tự ưu tiên** thu cho từng phiếu.
- Ghi **lịch hẹn thanh toán** của khách và xem lại lịch sử hẹn.
- In **BẢNG KÊ CÔNG NỢ QUÁ HẠN** gửi khách hàng.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền như phần “Chuẩn bị trước khi thực hiện”.
- Tài khoản được phân **nhóm khách hàng** cần xem (do quản trị hệ thống thiết lập). Tài khoản chưa được phân nhóm nào sẽ thấy lưới trống.
- Đang làm việc đúng **chi nhánh** ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).
- Phiếu xuất kho / phiếu bán dịch vụ đã có **số ngày nợ** (thời hạn nợ) đúng.

## 2. Mở chức năng

**Thống kê công nợ → Công nợ quá hạn**

## 3. Nhận biết màn hình

![Hình 1: Màn hình THỐNG KÊ CÔNG NỢ QUÁ HẠN](/posts/2026-11-07-kt-c03-0-tong-quan-man-hinh-thong-ke-cong-no-qua-han/hinh-01-man-hinh-cong-no-qua-han.png)

Hình 1 chụp ngày 12/10/2026, lọc cột **KH** chứa "TEST_HDSD": khách thử có 2 khoản (XK00113310 354.240, BH00113312 324.000), cả hai **chưa đến hạn** (Số ngày quá hạn −29, xem phần “Những điều cần lưu ý”). Lúc chụp, bố cục lưới đã lưu **không còn nhóm theo KH** nên KH hiện thành cột thường.

- **Ô ngày**: Chức năng: Ngày tính quá hạn; mặc định **hôm nay**. Đổi ngày thì tải lại
- **Tải lại**: Chức năng: Lấy lại số liệu
- **Nút Hẹn thanh toán (xanh)**: Chức năng: Mở hộp thoại **THÊM LỊCH HẸN THANH TOÁN** (chưa chọn khách); Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Nút Lịch hẹn gần nhất (vàng)**: Chức năng: Mở **LỊCH HẸN THANH TOÁN GẦN NHẤT**: mỗi khách một lịch hẹn chưa thanh toán sớm nhất; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Vùng Kéo tiêu đề một cột vào đây…**: Chức năng: Kéo tiêu đề cột vào để nhóm; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Cột KH**: Chức năng: Tên rút gọn khách hàng. Mặc định lưới **nhóm theo KH** (mỗi khách một nhóm: số phiếu, tổng tiền, tổng quá hạn); nếu không thấy nhóm, kéo tiêu đề **KH** vào vùng  hoặc chuột phải tiêu đề cột → **Khôi phục bố cục**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/)
- **Nút Lưu lại và biểu tượng hoàn tác**: Chức năng: Lưu / bỏ các thay đổi ở cột **T.T ưu tiên**; mờ khi chưa sửa ô nào; Hướng dẫn: phần “Thực hiện trên phần mềm”
- **Biểu tượng Xuất Excel, Trình chọn cột**: Chức năng: Xuất Excel chỉ hiện khi có quyền **Xuất dữ liệu**; Hướng dẫn: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/), [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/)
- **Dòng tổng cuối lưới**: Chức năng: **TỔNG CỘNG: n** số phiếu, tổng các cột tiền

**Các cột trên lưới:**

- **KH**: Ý nghĩa: Tên rút gọn khách hàng; cột nhóm
- **Tên khách hàng, Mã khách hàng**: Ý nghĩa: Ẩn sẵn
- **Ngày phát sinh**: Ý nghĩa: Ngày xuất kho / ngày bán dịch vụ / ngày phát sinh nợ cũ
- **Số hoá đơn**: Ý nghĩa: Số hoá đơn ghi trên chi tiết phiếu xuất kho; không có thì là mã chứng từ
- **T.T ưu tiên**: Ý nghĩa: Thứ tự ưu tiên thu: **0. Thấp**, **1. Bình thường**, **2. Trung bình**, **3. Cao** — **sửa được**
- **Số tiền/phiếu**: Ý nghĩa: Tổng tiền của phiếu
- **Số ngày được nợ**: Ý nghĩa: Số ngày nợ trong danh mục khách hàng (hiện tại)
- **Thời hạn nợ/phiếu**: Ý nghĩa: Số ngày nợ ghi trên chính phiếu
- **Ngày đến hạn**: Ý nghĩa: Ngày phát sinh + Thời hạn nợ/phiếu
- **Số ngày quá hạn**: Ý nghĩa: Ngày chọn − Ngày đến hạn (âm là chưa đến hạn)
- **Đã thu/phiếu**: Ý nghĩa: Phần tiền đã thu được phân bổ cho phiếu (xem phần “Giải thích các thông tin trên màn hình”)
- **Quá hạn 01-15 ngày … Quá hạn > 60 ngày**: Ý nghĩa: Số còn nợ của phiếu, đặt vào cột theo **Số ngày quá hạn**
- **Tổng tiền quá hạn**: Ý nghĩa: Số còn nợ của phiếu nếu đã đến hạn

**Menu chuột phải trên một dòng** — **bấm chọn dòng trước** (dòng tô xám), rồi mới chuột phải; chưa chọn dòng thì menu không hiện:

![Hình 2: Menu chuột phải trên dòng công nợ quá hạn](/posts/2026-11-07-kt-c03-0-tong-quan-man-hinh-thong-ke-cong-no-qua-han/hinh-02-menu-chuot-phai.png)

Hình 2:  dòng đã chọn;  menu chuột phải.

- **Hiện tất cả chi tiết phiếu xuất / Ẩn tất cả chi tiết phiếu xuất**: Hiện ở: Dòng dữ liệu, tiêu đề cột; Chức năng: Mở / thu gọn mọi nhóm khách hàng (khi lưới đang nhóm theo KH)
- **Hẹn thanh toán**: Hiện ở: Dòng dữ liệu; Chức năng: Thêm lịch hẹn cho khách của dòng
- **Lịch sử hẹn thanh toán**: Hiện ở: Dòng dữ liệu; Chức năng: Mở **LỊCH SỬ HẸN THANH TOÁN** của khách
- **Bảng kê công nợ quá hạn**: Hiện ở: Dòng dữ liệu; Chức năng: Mở bản xem trước **BẢNG KÊ CÔNG NỢ QUÁ HẠN** của khách ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/))
- **Khôi phục bố cục**: Hiện ở: Tiêu đề cột; Chức năng: Đưa lưới về bố cục mặc định, có lại nhóm theo KH ([HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/))

⚠️ Chức năng lịch hẹn chưa có kết quả kiểm tra thực tế thành công: lịch sử 12/10 ghi lỗi **CẢNH BÁO 405** khi lưu; quan sát 05/11/2026 ghi **Lịch hẹn gần nhất** mở được nhưng không tải được do không tìm thấy tài nguyên. Không xem bảng trống là không có lịch hẹn; chưa dùng luồng này để xác nhận đã lưu hay đã thanh toán (xem phần “Vướng mắc thường gặp”).

![Hình 3: Hộp thoại THÊM LỊCH HẸN THANH TOÁN](/posts/2026-11-07-kt-c03-0-tong-quan-man-hinh-thong-ke-cong-no-qua-han/hinh-03-hop-thoai-them-lich-hen.png)

- Trường: **HẸN NGÀY THANH TOÁN**; Bắt buộc: Có; Ghi chú: Mặc định hôm nay
- Trường: **KHÁCH HÀNG**; Bắt buộc: Có; Ghi chú: Điền sẵn khi mở từ chuột phải
- Trường: **NGƯỜI HỨA HẸN**; Bắt buộc: Có; Ghi chú: Người bên khách hứa trả
- Trường: **NỘI DUNG PHẢN HỒI**; Bắt buộc: Không
- Trường: **NGƯỜI NHẬN LỊCH HẸN**; Bắt buộc: Có; Ghi chú: Mặc định là bạn
- Trường: **SỐ TIỀN**; Bắt buộc: Không; Ghi chú: Số tiền khách hẹn trả
- Trường: Ô trạng thái; Bắt buộc: Có; Ghi chú: **Chờ thanh toán**, **Đã thanh toán**, **Không phản hồi**, **Hủy** — ô **không có nhãn**, nằm dưới **NGƯỜI NHẬN LỊCH HẸN**
- Trường: **GHI CHÚ**; Bắt buộc: Không
- Trường: **Lưu lại** / **Đóng**; Ghi chú: **Lưu lại** hiện báo **CẢNH BÁO 405** (xem phần “Vướng mắc thường gặp”)

![Hình 4: Hộp LỊCH HẸN THANH TOÁN GẦN NHẤT mở được nhưng chưa nạp dữ liệu do API báo lỗi](/posts/2026-11-07-kt-c03-0-tong-quan-man-hinh-thong-ke-cong-no-qua-han/hinh-04-hop-thoai-lich-hen-gan-nhat.png)

Ảnh Gia Phúc/dev ngày 05/11/2026. Khung  là tên hộp, khung  là bảng lịch hẹn. Khi chụp, hệ thống báo không tìm thấy tài nguyên API lịch hẹn gần nhất; bảng trống này không chứng minh không có lịch hẹn.

*Hình 4 chưa có ảnh: chưa lưu được lịch hẹn nào (lỗi 405, phần “Vướng mắc thường gặp”) nên hộp thoại chưa có dữ liệu để chụp. Bổ sung sau khi IT sửa lỗi.*

Lưới lịch hẹn có cột **STT**, **Hẹn thanh toán ngày**, **Khách hàng**, **Người hẹn trả**, **Nhân viên nhận**, **Nội dung**, **Số tiền**, **Trạng thái**, **Ghi chú**, **Người tạo**, **Thời gian tạo**. Nhấp đúp một dòng để mở **CẬP NHẬT LỊCH HẸN THANH TOÁN** (chỉ sửa được nội dung phản hồi, số tiền, trạng thái, ghi chú).

![Hình 5: Bản xem trước BẢNG KÊ CÔNG NỢ QUÁ HẠN](/posts/2026-11-07-kt-c03-0-tong-quan-man-hinh-thong-ke-cong-no-qua-han/hinh-05-xem-truoc-bang-ke-cong-no-qua-han.png)

Bảng kê mở đầu bằng **Căn cứ tình hình công nợ quá hạn chưa thanh toán của Quý Khách Hàng;**, **Chúng tôi thông báo đến:** (khách hàng), **Địa chỉ:**, rồi:

- **phần hướng dẫn bên dưới./**: Ghi chú: **Tính đến hết ngày** (ngày in), Quý Công ty đã quá hạn công nợ cần phải thanh toán
- **phần hướng dẫn bên dưới./ Cụ thể gồm các khoản sau:**: Ghi chú: Nhóm cột **THÔNG TIN ĐƠN HÀNG**: **STT**, **NGÀY PHÁT SINH**, **SỐ HĐ / MÃ PHIẾU**, **TUỔI NỢ** (số ngày nợ của phiếu), **NGÀY ĐẾN HẠN**, **QUÁ HẠN (NGÀY)**, **SỐ TIỀN PHIẾU**; nhóm cột **THỜI GIAN QUÁ HẠN**: **01-15 NGÀY**, **16-30 NGÀY**, **31-45 NGÀY**, **46-60 NGÀY** …; dòng **TỔNG CỘNG:**
- **phần hướng dẫn bên dưới./ và Bằng chữ:**: Ghi chú: **Quý Công ty vui lòng sắp xếp thanh toán số tiền công nợ quá hạn … Số tiền cần thanh toán là:**; khi chưa có khoản quá hạn in **Bằng chữ: Không đồng./**

Bản xem trước mở ở mức phóng to **130%** nên phần bên phải (cột quá hạn cuối, chỗ ký bên công ty) bị khuất: kéo thanh cuộn ngang hoặc giảm phóng to để xem đủ trước khi in.

## 4. Trình tự công việc

```text
Phiếu xuất kho / Phiếu bán dịch vụ (có số ngày nợ) + nợ cũ chuyển sang
                    ↓
Tiền đã thu (phiếu thu, cấn trừ, giảm giá trừ nợ, khách trả hàng)
phân bổ lần lượt cho từng khoản theo thứ tự ưu tiên
                    ↓
Công nợ quá hạn (theo ngày chọn)
├── Sửa T.T ưu tiên → Lưu lại
├── Hẹn thanh toán / Lịch hẹn gần nhất / Lịch sử hẹn thanh toán
├── Bảng kê công nợ quá hạn → in (GEN-06)
└── Xuất Excel (GEN-05)
```

## 5. Thực hiện trên phần mềm

- **Xem nợ quá hạn hôm nay**: Cách làm: Mở màn hình, chuột phải → **Hiện tất cả chi tiết phiếu xuất**
- **Xem nợ quá hạn tại ngày khác**: Cách làm: Chọn ngày ở ô
- **Đổi thứ tự ưu tiên thu**: Cách làm: Bấm ô **T.T ưu tiên**, chọn mức, bấm **Lưu lại**; Bài hướng dẫn: Bước dưới
- **Ghi lịch hẹn của khách**: Cách làm: Bấm chọn dòng, chuột phải → **Hẹn thanh toán** (đang lỗi 405, phần “Vướng mắc thường gặp”); Bài hướng dẫn: Bước dưới
- **Cập nhật kết quả hẹn**: Cách làm: Chưa xác nhận thực hiện được; đang chặn tải lịch hẹn gần nhất ngày 05/11/2026; Bài hướng dẫn: Xem phần “Vướng mắc thường gặp”
- **In bảng kê gửi khách**: Cách làm: Bấm chọn dòng, chuột phải → **Bảng kê công nợ quá hạn**; Bài hướng dẫn: Bước dưới, [HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)
- **Tính lãi quá hạn**: Cách làm: Màn **Bảng kê lãi quá hạn**; Bài hướng dẫn: [TỔNG QUAN MÀN HÌNH BẢNG KÊ LÃI QUÁ HẠN](/bai-viet/2026-11-07-kt-c04-0-tong-quan-man-hinh-bang-ke-lai-qua-han/)

### Đặt thứ tự ưu tiên thu cho phiếu

**Bước 1 –** Mở nhóm khách hàng cần sửa.

**Bước 2 –** Bấm vào ô **T.T ưu tiên** của phiếu, chọn **3. Cao** (hoặc mức khác). Có thể sửa nhiều ô trước khi lưu.

**Bước 3 –** Bấm **Lưu lại** trên thanh công cụ lưới.

**Bước 4 –** Hệ thống báo **Cập nhật thành công.** và tải lại lưới; số **Đã thu/phiếu** được phân bổ lại theo thứ tự mới.

### Ghi lịch hẹn thanh toán

**Bước 1 –** Bấm chọn dòng của khách (dòng tô xám), chuột phải → **Hẹn thanh toán** (hoặc bấm nút **Hẹn thanh toán** rồi chọn khách).

**Bước 2 –** Nhập **HẸN NGÀY THANH TOÁN**, **NGƯỜI HỨA HẸN**, **SỐ TIỀN**; ở ô trạng thái không nhãn (dưới **NGƯỜI NHẬN LỊCH HẸN**) chọn **Chờ thanh toán** (Hình 3).

**Bước 3 –** Chỉ coi lịch hẹn đã lưu khi tra lại được đúng khách, ngày hẹn, số tiền và trạng thái. Lần thử 12/10 báo **CẢNH BÁO 405**; chưa có kiểm tra thực tế lưu thành công hiện hành. Nếu báo lỗi, ghi nhận ở sổ theo dõi riêng và báo IT, không bấm lặp — xem phần “Vướng mắc thường gặp”.

**Bước 4 –** Khi khách trả hoặc lỡ hẹn, chỉ cập nhật trạng thái sau khi lịch hẹn nạp được và đã kiểm đúng hồ sơ. Quan sát 05/11 chưa nạp được **Lịch hẹn gần nhất**; dừng nhánh này và báo IT, không suy thành đã cập nhật.

### In bảng kê công nợ quá hạn gửi khách

**Bước 1 –** Để ô  là **ngày hôm nay** (bản in ghi "Tính đến hết ngày" theo ngày in, phần “Những điều cần lưu ý”).

**Bước 2 –** Lọc cột **KH** theo khách cần in, bấm chọn một dòng của khách.

**Bước 3 –** Chuột phải → **Bảng kê công nợ quá hạn**. Kiểm mục **2./** và **Bằng chữ** (Hình 5); giảm phóng to nếu phần bên phải bị khuất.

**Bước 4 –** Bấm **In** hoặc **Xuất** trên thanh công cụ bản xem trước ([HƯỚNG DẪN IN CHỨNG TỪ](/bai-viet/2026-11-07-gen-06-huong-dan-in-chung-tu/)), bấm **Đóng** để quay lại.

## 6. Giải thích các thông tin trên màn hình

**Khoản nợ được tính gồm:** phiếu xuất kho có khách hàng (trừ tiền hàng khách trả gắn đúng phiếu đó), phiếu bán dịch vụ, khoản nợ cũ đã nhập vào hệ thống, và phần nợ đầu kỳ còn lại chưa chia vào khoản nào. Chỉ lấy khoản có ngày phát sinh đến hết ngày chọn.

**Tiền đã thu của khách đến hết ngày chọn** gồm: phiếu thu (số thu + số giảm), phiếu cấn trừ, phiếu giảm giá hình thức **Trừ công nợ** đã được kế toán duyệt, hàng trả lại không gắn phiếu xuất kho cụ thể, số dư nợ đầu kỳ âm (khách ứng trước); **trừ** đi phiếu chi hoàn tiền cho khách có tính công nợ.

**Phân bổ (Đã thu/phiếu):** tổng tiền đã thu được trả dần cho các khoản theo thứ tự: **T.T ưu tiên** cao trước → **Ngày đến hạn** sớm trước → **Ngày phát sinh** → thứ tự lập phiếu. Phần nợ đầu kỳ còn lại chưa chia vào khoản nào luôn được trả **trước tiên**. Khoản nào đã được trả đủ thì không còn trên lưới.

- **Ngày đến hạn**: Cách tính: Ngày phát sinh + Thời hạn nợ/phiếu
- **Số ngày quá hạn**: Cách tính: Ngày chọn − Ngày đến hạn
- **Còn nợ của phiếu**: Cách tính: Số tiền/phiếu (đã trừ hàng trả gắn phiếu) − Đã thu/phiếu
- **Quá hạn 01-15 ngày**: Cách tính: Còn nợ, nếu Số ngày quá hạn từ **0** đến 15
- **Quá hạn 16-30 / 31-45 / 46-60 ngày**: Cách tính: Còn nợ, nếu Số ngày quá hạn trong khoảng tương ứng
- **Quá hạn > 60 ngày**: Cách tính: Còn nợ, nếu Số ngày quá hạn từ 61 trở lên
- **Tổng tiền quá hạn**: Cách tính: Còn nợ, nếu Số ngày quá hạn từ 0 trở lên

Lưới xếp theo tên khách hàng, ưu tiên cao trước, rồi ngày phát sinh, ngày đến hạn.

## 7. Kiểm tra sau khi thực hiện

Đối chiếu được các khoản còn nợ và tuổi nợ theo ngày chọn; xem bảng kê trước khi gửi khách. Lưu **T.T ưu tiên** là thao tác thay đổi dữ liệu, cần tải lại để kiểm tra mức đã lưu. Chưa xác nhận đã ghi hoặc cập nhật được lịch hẹn: quan sát 05/11 chưa tải được lịch hẹn gần nhất, không dùng bảng trống làm bằng chứng không có lịch hẹn.

## 8. Những điều cần lưu ý

⚠️ Lưới hiện cả các khoản **chưa đến hạn** nhưng còn nợ (Số ngày quá hạn âm): các cột quá hạn của dòng đó bằng 0. Lọc **Tổng tiền quá hạn** khác 0 nếu chỉ muốn xem nợ quá hạn.

⚠️ Khoản **đến hạn đúng ngày chọn** (Số ngày quá hạn = 0) đã được tính vào **Quá hạn 01-15 ngày**.

⚠️ **Đã thu/phiếu** là số **phân bổ**, không phải số khách ghi trả cho phiếu đó. Đổi **T.T ưu tiên** hoặc thu thêm tiền sẽ làm phân bổ thay đổi.

⚠️ Bạn chỉ thấy khách hàng thuộc **nhóm khách hàng được phân**, kể cả tài khoản quản trị.

⚠️ Bản in **BẢNG KÊ CÔNG NỢ QUÁ HẠN** ghi "Tính đến hết ngày" là **ngày in**, trong khi số liệu tính theo **ngày chọn** ở ô. Chọn ngày hôm nay trước khi in gửi khách.

⚠️ Sửa **T.T ưu tiên** chỉ có tác dụng với dòng **phiếu xuất kho** và khoản nợ cũ; dòng phiếu bán dịch vụ luôn ở mức thấp nhất.

### Lưới trống 

Nguyên nhân: tài khoản chưa được phân nhóm khách hàng; đang ở chi nhánh khác; khách đã trả đủ.
Cách xử lý: liên hệ quản trị hệ thống phân nhóm khách hàng; kiểm tra đúng tên miền và tài khoản chi nhánh ([HƯỚNG DẪN TRUY CẬP ĐÚNG HỆ THỐNG CHI NHÁNH](/bai-viet/2026-11-07-gen-02-huong-dan-truy-cap-dung-he-thong-chi-nhanh/)).

### "CẢNH BÁO 405" khi bấm Lưu lại lịch hẹn (Lỗi hệ thống)

![Hình 6: Thông báo CẢNH BÁO 405 khi lưu lịch hẹn thanh toán](/posts/2026-11-07-kt-c03-0-tong-quan-man-hinh-thong-ke-cong-no-qua-han/hinh-06-loi-405-luu-lich-hen.png)

Nguyên nhân: lỗi hệ thống ở chức năng lịch hẹn thanh toán (màn hình gọi sai địa chỉ dịch vụ lưu lịch hẹn) —  góc trên hiện **CẢNH BÁO 405** sau khi bấm  **Lưu lại**; lịch hẹn không được lưu. Lỗi này làm **Hẹn thanh toán**, **Lịch hẹn gần nhất**, **Lịch sử hẹn thanh toán** đều chưa dùng được. Bộ phận IT đã mở việc sửa.
Cách xử lý: báo bộ phận IT; trong lúc chờ, ghi lịch hẹn của khách ở sổ theo dõi riêng. Không bấm **Lưu lại** nhiều lần.

### Lịch hẹn gần nhất mở được nhưng bảng trống kèm báo không tìm thấy tài nguyên

Ghi nhận ngày 05/11/2026: đây là lỗi tải dữ liệu, không phải kết luận khách không có lịch hẹn. Ghi lại thời điểm và câu báo để IT kiểm tra, dùng sổ theo dõi riêng trong lúc chờ. Chưa xác nhận luồng thêm/sửa hoặc trạng thái đã hoạt động trở lại.

### Chuột phải không hiện menu 

Nguyên nhân: chưa bấm chọn dòng trước khi chuột phải.
Cách xử lý: bấm vào dòng của khách (dòng tô xám) rồi chuột phải lại.

### "Chọn ngày hẹn thanh toán" / "Vui lòng chọn khách hàng" / "Vui lòng cho biết ai là người hứa sẽ thanh toán" / "Vui lòng chọn người nhận lịch hẹn" / "Vui lòng cho biết trạng thái" 

Nguyên nhân: bỏ trống trường bắt buộc của lịch hẹn.
Cách xử lý: nhập đủ các trường, bấm **Lưu lại** lại.

### "Bạn không có quyền thực hiện chức năng này." 

Nguyên nhân: chưa có quyền **Truy cập** màn hình.
Cách xử lý: liên hệ quản trị hệ thống.

Lỗi hệ thống khác: xem [LỖI THƯỜNG GẶP VÀ CÁCH XỬ LÝ CHUNG](/bai-viet/2026-11-07-gen-07-loi-thuong-gap-va-cach-xu-ly-chung/).

## 10. Câu hỏi thường gặp

**Vì sao một phiếu đã được khách chuyển khoản vẫn còn trên lưới?**
Tiền thu được phân bổ theo thứ tự ưu tiên, không theo phiếu khách ghi. Nếu khách còn khoản ưu tiên cao hơn hoặc đến hạn sớm hơn, tiền được trả cho khoản đó trước. Đổi **T.T ưu tiên** nếu cần.

**Số ngày được nợ khác Thời hạn nợ/phiếu thế nào?**
**Số ngày được nợ** lấy từ danh mục khách hàng hiện tại. **Thời hạn nợ/phiếu** là số ngày nợ ghi trên phiếu lúc lập; ngày đến hạn tính theo số này.

**Lịch hẹn gần nhất hiện những gì?**
Theo thiết kế, mỗi khách hiện một lịch hẹn **chưa ở trạng thái Đã thanh toán** có ngày hẹn sớm nhất. Quan sát 05/11/2026 chưa nạp được dữ liệu; chưa xác nhận được kết quả này trên phiên chạy hiện hành.

## 11. Công việc tiếp theo

```text
Công nợ quá hạn → hẹn thanh toán → thu tiền (KT-A03)
               → khách không trả → Bảng kê lãi quá hạn (KT-C04.0)
```

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH BẢNG KÊ LÃI QUÁ HẠN](/bai-viet/2026-11-07-kt-c04-0-tong-quan-man-hinh-bang-ke-lai-qua-han/) – Tổng quan màn hình Bảng kê lãi quá hạn
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ CÔNG NỢ KHÁCH HÀNG](/bai-viet/2026-11-07-kt-c06-0-tong-quan-man-hinh-thong-ke-cong-no-khach-hang/) – Tổng quan màn hình thống kê Công nợ khách hàng
- [TỔNG QUAN MÀN HÌNH PHIẾU XUẤT KHO](/bai-viet/2026-11-07-kho-a05-0-tong-quan-man-hinh-phieu-xuat-kho/) – Tổng quan màn hình Phiếu xuất kho
- [TỔNG QUAN MÀN HÌNH PHIẾU BÁN DỊCH VỤ](/bai-viet/2026-11-07-bh-a06-0-tong-quan-man-hinh-phieu-ban-dich-vu/) – Tổng quan màn hình Phiếu bán dịch vụ
- [TỔNG QUAN MÀN HÌNH PHIẾU THU](/bai-viet/2026-11-07-kt-a03-0-tong-quan-man-hinh-phieu-thu/) – Tổng quan màn hình Phiếu thu
