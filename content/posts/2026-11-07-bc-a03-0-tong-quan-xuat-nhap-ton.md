---
title: "TỔNG QUAN XUẤT NHẬP TỒN"
date: "2026-11-07"
summary: "Đối chiếu nhập, xuất, tồn theo kho và hàng hóa của các đơn vị, đồng thời xem lượng đang giữ / sắp về."
module: "Báo cáo"
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

Đối chiếu nhập, xuất, tồn theo kho và hàng hóa của các đơn vị, đồng thời xem lượng đang giữ / sắp về. Chọn cột, lọc: [HƯỚNG DẪN TÌM KIẾM, LỌC, SẮP XẾP, NHÓM, CHỌN CỘT VÀ LỌC THEO KHOẢNG NGÀY TRÊN DANH SÁCH](/bai-viet/2026-11-07-gen-04-huong-dan-tim-kiem-loc-sap-xep-nhom-chon-cot-va-loc-theo-khoang-ngay-tren-danh-sach/); xuất: [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Mở chức năng

**Báo cáo → Xuất nhập tồn** — `/bao-cao-gop/xuat-nhap-ton`

## 2. Nhận biết màn hình

Ảnh quan sát giao diện tại Gia Phúc/dev ngày 26/10/2026. Các ảnh biểu mẫu chưa lưu và danh sách có sẵn chỉ minh họa giao diện, không phải kết quả chạy thử nghiệp vụ.

![THỐNG KÊ XUẤT NHẬP TỒN — ngày, kho và thông tin hàng đang hiển thị, chỉ xem.](/posts/2026-11-07-bc-a03-0-tong-quan-xuat-nhap-ton/ui-20261026-bc-03-overview.png)

Một lưới chứa **Thông tin kho**, **Thông tin hàng hoá**, nhóm theo kỳ, **Tồn kho - Không theo thời gian**, **Hàng sắp về**. Các cột số lượng và giá trị nằm chung lưới. Bộ lọc trên cùng là khoảng ngày và **Tải lại**.

## 3. Trình tự công việc

Chốt kỳ/đơn vị/kho/hàng → Đọc phát sinh theo kỳ → Tách số hiện tại/chờ về → Đối chiếu giá trị → Bàn giao báo cáo

### Đối chiếu nhập, xuất và tồn theo kho/hàng

1. Chốt kỳ và phạm vi kho, hàng hóa, đơn vị cần so. Đây là báo cáo gộp; mở đúng hệ thống không có nghĩa chỉ nhìn dữ liệu của một đơn vị.
2. Chọn khoảng ngày và **Tải lại**. Giữ **Mã chi nhánh**, **Mã kho / Tên kho**, **Mã hàng hoá / Tên hàng hoá** để phân biệt dòng. Cùng hàng ở hai kho hoặc hai đơn vị không phải dòng trùng để xóa.
3. Đọc nhóm theo kỳ: **Tồn đầu**, **Tổng nhập**, **Tổng xuất**, **Tồn cuối**. Khi cần tìm chênh lệch, mở các cột phát sinh riêng tại phần “Giải thích các thông tin trên màn hình”; tổng nhập/xuất có thể gồm luồng ngoài cột đang nhìn thấy.
4. Kiểm tra đơn vị: số tấm, **Tấm/Kiện**, m³ và các số quy đổi không cộng lẫn. Đối chiếu quy cách trước khi so với phiếu kho hoặc báo cáo khác.
5. Tách **Tồn kho - Không theo thời gian** khỏi nhóm theo kỳ. **Tồn**, **Bán chưa xuất**, **Giữ gia công**, **Tồn cuối được xuất** là thông tin hiện tại; chọn một kỳ quá khứ không biến chúng thành số tại cuối kỳ đó.
6. Đọc **Hàng sắp về** riêng: mua hàng hoặc gia công chưa nhập không được cộng ngay vào tồn có thể xuất. Kiểm tra chứng từ chờ nhập/gia công ở sổ nghiệp vụ nếu cần truy nguyên.
7. Nếu tài khoản được xem giá vốn, mở cột giá trị cần đối chiếu. Dùng quy tắc từng cột tại phần “Giải thích các thông tin trên màn hình”, không lấy mọi số lượng nhân chung một đơn giá hiện hành để kết luận báo cáo sai.
8. Muốn truy chi tiết tại một đơn vị, dùng **[TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/) — Xuất nhập tồn** và bài thống kê tương ứng. Ghi lại kỳ, đơn vị, kho/hàng và nguồn số trước khi xuất bàn giao theo [HƯỚNG DẪN XUẤT EXCEL](/bai-viet/2026-11-07-gen-05-huong-dan-xuat-excel/); không sửa chứng từ từ kết quả gộp chưa đối chiếu.

## 5. Giải thích các thông tin trên màn hình

- **Tên kho / Mã kho / Mã chi nhánh**: Ý nghĩa / quy tắc: Phân biệt kho và đơn vị; cùng mã hàng tại hai kho là hai dòng.
- **Tên hàng hoá / Tên in / Nhà cung cấp / Mã hàng hoá**: Ý nghĩa / quy tắc: Thông tin định danh; các cột Tiêu chuẩn, Loại hàng, Gia công, Số mặt, Dày, Rộng, Dài, Đvt có thể ẩn.
- **m³ / SL M³ / Tấm/Kiện**: Ý nghĩa / quy tắc: Quy cách và quy đổi mặt hàng; không cộng lẫn số tấm, số kiện và thể tích.
- **Tồn đầu / Tồn cuối**: Ý nghĩa / quy tắc: Số lượng tồn ở mốc đầu / cuối kỳ từ các luồng nhập xuất có ảnh hưởng kho.
- **Tổng nhập**: Ý nghĩa / quy tắc: Cộng hàng gửi, điều chỉnh, nhập mua, khách trả, nhập chuyển, nhập vào kho gia công, thành phẩm / lỗi, nhập mượn / trả mượn và yêu cầu vào kho gia công.
- **Tổng xuất**: Ý nghĩa / quy tắc: Cộng xuất bán, trả NCC, chuyển, xuất gia công, hàng trơn / nguyên liệu nhập gia công, cho mượn / trả mượn và yêu cầu xuất.
- **Nhập mua / Nhập khách trả / Xuất bán / Xuất trả ncc**: Ý nghĩa / quy tắc: Số lượng từng luồng trong kỳ; các cột M3 mua/bán, SL Kiện mua/bán là số quy đổi tương ứng.
- **Hàng gửi / Điều chỉnh / Xuất chuyển / Nhập chuyển**: Ý nghĩa / quy tắc: Phát sinh từng loại trong kỳ; điều chỉnh có dấu theo nghiệp vụ.
- **Xuất gia công / Nhập gia công / Nhập gia công lỗi**: Ý nghĩa / quy tắc: Số lượng luồng gia công; không đồng nhất hàng đầu vào với thành phẩm đầu ra.
- **Xuất cho mượn / Nhập trả mượn / Nhập mượn / Xuất trả mượn**: Ý nghĩa / quy tắc: Bốn chiều mượn và hoàn trả trong kỳ.
- **Đơn giá vốn**: Ý nghĩa / quy tắc: Giá vốn hiện hành dùng cho các cột áp giá; phụ thuộc quyền xem vốn.
- **Giá trị Tồn đầu / Giá trị Tồn cuối**: Ý nghĩa / quy tắc: Tồn đầu/cuối × đơn giá tại mốc tương ứng; nếu không có giá mốc, sử dụng giá hiện hành.
- **Giá trị Tổng nhập / Giá trị Tổng xuất và từng loại**: Ý nghĩa / quy tắc: Theo cách định giá của từng luồng; nhập mua/khách trả từ sổ kho, xuất bán theo bình quân trước xuất, trả NCC theo giá xuất. Không lấy toàn bộ số lượng × một đơn giá hiện tại.
- **Tồn / Bán chưa xuất / Giữ gia công**: Ý nghĩa / quy tắc: Số hiện tại, không chịu khoảng ngày ở đầu màn.
- **Tồn cuối được xuất**: Ý nghĩa / quy tắc: Tồn hiện tại − khách đặt − bán chưa xuất − giữ chuyển kho − giữ gia công.
- **Hàng sắp về: Mua hàng / Gia công**: Ý nghĩa / quy tắc: Hàng mua và thành phẩm gia công chưa nhập; đây là chờ về, chưa phải tồn có thể xuất.

## 6. Kiểm tra sau khi thực hiện

Bảng hiển thị số liệu theo phạm vi đã chọn. Việc xem hoặc xuất báo cáo không tự tạo chứng từ và không ghi tăng / giảm số dư.

## 7. Những điều cần lưu ý

⚠️ Khoảng ngày không áp dụng cho nhóm **Tồn kho - Không theo thời gian**. Tổng nhập / xuất gồm luồng ngoài các cột đang mở nên có thể khác tổng các cột nhìn thấy. Giá trị có thể thay đổi sau điều chỉnh giá vốn; giữ đúng mốc đối chiếu.

## 8. Câu hỏi thường gặp

**Vì sao Tồn cuối và Tồn cuối được xuất khác nhau?** Tồn cuối theo kỳ, còn tồn được xuất dùng hiện tại và trừ các lượng giữ.

**Mở chi tiết nhập xuất ở đâu?** Dùng thống kê kho tương ứng; lưới báo cáo gộp hiện chỉ thêm menu đặt lại bố cục.

## 9. Công việc tiếp theo

Đối chiếu kết quả và lưu kỳ/phạm vi đã kiểm tra. [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/) — Xuất nhập tồn; [TỔNG QUAN TÀI CHÍNH](/bai-viet/2026-11-07-bc-b01-0-tong-quan-tai-chinh/).

## 10. Bài hướng dẫn liên quan

[TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/) — Xuất nhập tồn; [TỔNG QUAN TÀI CHÍNH](/bai-viet/2026-11-07-bc-b01-0-tong-quan-tai-chinh/).
