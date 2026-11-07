---
title: "TẤT TOÁN LỆNH SẢN XUẤT"
date: "2026-11-07"
summary: "Kết thúc phần số lượng của lệnh không tiếp tục sản xuất, đồng thời xử lý phần nguyên liệu/lô tương ứng."
module: "Sản xuất"
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

Kết thúc phần số lượng của lệnh không tiếp tục sản xuất, đồng thời xử lý phần nguyên liệu/lô tương ứng. Tất toán làm thay đổi số còn phải nhận và trạng thái lệnh.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có lệnh và danh sách phần không tiếp tục thực hiện, số đã nhập và nguyên liệu/lô cần tất toán.
- Đối chiếu phần được phép theo ĐVT/quy đổi của mỗi dòng; có căn cứ nghiệp vụ cho lượng kết thúc.
- Tài khoản cần hiển thị được liên kết Tất toán và có quyền ghi tất toán riêng ở phần “Chuẩn bị trước khi thực hiện”; không chỉ dựa vào thấy nút.
- Mở đúng địa chỉ hệ thống của chi nhánh; kỳ của lệnh còn cho phép cập nhật.

## 2. Mở chức năng

**Sản xuất giấy → Lệnh sản xuất**

## 3. Nhận biết màn hình

Ngày 29/10/2026 đã mở biểu mẫu tất toán lệnh kiểm tra thực tế **SX00113353** sau khi nhận 8/10 kg. Nhập **T.TOÁN = 2** cho thành phẩm, biểu mẫu tính phí gia công còn **1.600**; mở chi tiết nguyên liệu và nhập phần tương ứng. Khi bấm Lưu lại, máy chủ từ chối vì trường dữ liệu lô **lohangs** là bắt buộc. Đã đóng biểu mẫu chưa lưu; chưa có bằng chứng tất toán thành công, lệnh vẫn **Đang nhập**. Ảnh dưới đây chỉ minh họa thao tác trước lưu.

![Hình 1: Biểu mẫu tất toán 2 kg của lệnh yêu cầu 10 kg, đã nhận 8 kg; chưa lưu](/posts/2026-11-07-sx-a01-2-tat-toan-lenh-san-xuat/hinh-01-20261029-sx-a01-2-truoc-luu.png)

![Hình 2: Chi tiết nguyên liệu của phần tất toán trên dữ liệu kiểm tra thực tế; chưa lưu](/posts/2026-11-07-sx-a01-2-tat-toan-lenh-san-xuat/hinh-02-20261029-sx-a01-2-nguyen-lieu-tat-toan.png)

Hộp **TẤT TOÁN LỆNH SẢN XUẤT** gồm:

- **Thông tin đầu phiếu**: Ý nghĩa và cách dùng: Mã/ngày lệnh, đơn vị gia công và kho đã lưu.
- **Bảng chi tiết**: Ý nghĩa và cách dùng: Thành phẩm và T.TOÁN, mở nguyên liệu/lô từ từng dòng.
- **Kết quả cuối bảng**: Ý nghĩa và cách dùng: Tổng lượng yêu cầu, tổng tất toán và phí gia công.

## 4. Trình tự công việc

```text
Lệnh đã lưu → xác định phần không thực hiện → T.TOÁN thành phẩm → tất toán nguyên liệu/lô → lưu → đối chiếu còn phải nhận
```

## 5. Thực hiện trên phần mềm

1. Mở đúng **Mã lệnh**, đối chiếu số yêu cầu, đã nhập và phần không tiếp tục thực hiện theo từng thành phẩm. Không dùng Tất toán để thay lượng đã nhận thực tế.
2. Chọn **Tất toán** tại dòng lệnh. Nhập T.TOÁN là tổng lượng muốn kết thúc của dòng sau lần cập nhật này, gồm cả lượng đã tất toán trước đó nếu có; giới hạn ô là số yêu cầu trừ số đã nhập. Giữ đúng ĐVT vì phần cho phép còn chịu quy đổi của dòng khi ghi nhận.
3. Sau khi có số T.TOÁN, mở biểu tượng Chọn nguyên liệu. Kiểm tra nguyên liệu không theo lô và nguyên liệu theo lô, nhập phần tất toán tương ứng; trong bảng lô xác định đúng mã lô và lượng tất toán.
4. Bấm Đồng ý để đưa nguyên liệu về lệnh. Nếu dòng có lượng tất toán mà chưa có phần nguyên liệu được tất toán, hoàn thiện bảng nguyên liệu trước lưu. Khi đã ghi phần nguyên liệu, ô T.TOÁN thành phẩm có thể khóa; đối chiếu lại tại cửa sổ nguyên liệu.
5. Kiểm tra phí gia công được tính lại theo số yêu cầu sau loại phần tất toán và kiểm tra tổng lệnh. Lưu thao tác tất toán, rồi mở lại lệnh để đối chiếu phần còn chờ nhập và trạng thái mới.
6. Đã nhập có thể được xác định sau khi kết thúc toàn bộ phần còn lại bằng tất toán; không dùng riêng tên trạng thái làm bằng chứng đã nhận đủ số yêu cầu ban đầu.

## 6. Giải thích các thông tin trên màn hình

- **MÃ LỆNH / NGÀY SẢN XUẤT**: Ý nghĩa và cách dùng: Dữ liệu lệnh đang xử lý; kiểm tra mã trước tất toán. Tất toán cập nhật lệnh hiện có, không nhập một mã lệnh mới.
- **THÀNH PHẨM / ĐVT**: Ý nghĩa và cách dùng: Nhận diện từng dòng cần kết thúc theo ĐVT đã lưu; đối chiếu số đã nhập của chính dòng, không gộp khác mặt hàng.
- **S.LƯỢNG / đã nhập**: Ý nghĩa và cách dùng: Lượng yêu cầu và lượng đã nhận làm căn cứ phần còn có thể tất toán; không sửa số đã nhập để tăng mức cho phép.
- **T.TOÁN thành phẩm**: Ý nghĩa và cách dùng: Nhập tổng phần không thực hiện sau cập nhật, không phải lượng cộng thêm mỗi lần; ô chỉ mở ở chế độ Tất toán khi dòng có lượng. Giới hạn hiển thị là S.LƯỢNG trừ đã nhập; khi ghi còn kiểm tra mức theo quy đổi.
- **Nguyên liệu / ĐVT / lượng đủ**: Ý nghĩa và cách dùng: Thông tin theo chi tiết nguyên vật liệu của dòng, đối chiếu định mức và lượng đủ trước kết thúc.
- **T.TOÁN nguyên liệu**: Ý nghĩa và cách dùng: Phần nguyên liệu không theo lô cần kết thúc, không được âm; ô không cho nhập vượt lượng nguyên liệu không theo lô đang có.
- **SL LOT / tất toán lô**: Ý nghĩa và cách dùng: SL LOT hiển thị tổng lô đã chọn; mở chi tiết lô để phân định lượng tất toán từng lô. Lượng tất toán lô không được âm.
- **Đồng ý ở chi tiết nguyên liệu**: Ý nghĩa và cách dùng: Đưa các lượng nguyên liệu/lô về lệnh; chưa ghi nhận toàn bộ nghiệp vụ cho đến khi lưu lệnh.
- **PHÍ G/C / TỔNG CHI PHÍ**: Ý nghĩa và cách dùng: Kết quả tính theo lượng sau loại T.TOÁN: (S.LƯỢNG − T.TOÁN) × đơn giá, rồi cộng các dòng.
- **Trạng thái sau lưu**: Ý nghĩa và cách dùng: Được tính lại từ lượng đã nhập so với lượng yêu cầu sau tất toán; có thể chuyển Đã nhập khi không còn phần phải nhận, không chứng minh đã nhận đủ yêu cầu ban đầu.

## 7. Kiểm tra sau khi thực hiện

Lượng tất toán thành phẩm và nguyên liệu/lô được cập nhật trên lệnh, phí gia công và trạng thái được tính lại. Số đã nhập thành phẩm vẫn phải đối chiếu với các phiếu nhận, không dùng trạng thái sau tất toán thay biên bản nhận hàng.

## 8. Những điều cần lưu ý

Lập lệnh và in phiếu đề nghị không thay cho việc kiểm tra phiếu xuất vật tư và lượng thành phẩm thực nhận. Sửa lệnh còn phải đáp ứng trạng thái Chưa nhập; tất toán là nghiệp vụ riêng.

**Ví dụ tổng tất toán, hệ số quy đổi bằng 1:** Lệnh yêu cầu 20, đã nhận 8, đã tất toán 2. Nếu được duyệt kết thúc thêm 3 thì tổng T.TOÁN cần đối chiếu sau cập nhật là 5; phần còn chờ = 20 − 8 − 5 = 7, phí gia công tính trên 15. Không gõ 3 với ý định tự cộng vào 2 cũ. Đây là ví dụ số học để đọc trường, chưa phải kết quả thử thành công; khi ô bị khóa do đã có tất toán nguyên liệu, không tự xóa nguyên liệu để mở khóa.

**Đối chiếu nguyên liệu và đơn vị:** Kiểm tra lượng tất toán của từng nguyên liệu không theo lô và từng lô theo phương án được duyệt, không chỉ kiểm tra có một số dương. Nếu ĐVT/hệ số quy đổi khác 1 hoặc mức cho phép trên màn không khớp hồ sơ, dừng để người phụ trách xác nhận đơn vị và lượng trước lưu. Tất toán không thay phiếu nhập thành phẩm, phiếu nhận lại vật tư hoặc biên bản thu hồi.

## 9. Vướng mắc thường gặp

**Lưu tất toán bị báo `lohangs: The lohangs field is required.`**: lần thử trên SX00113353 bị chặn dù không có ô nhập lô trên màn đang dùng. Giữ nguyên chứng từ, gửi mã lệnh và thông báo cho IT kiểm tra luồng lô. Không coi số T.TOÁN đang hiển thị trong biểu mẫu là đã ghi nhận và không tự tạo lô thay thế để vượt lỗi.

- **Vui lòng nhập số lượng tất toán**: Ý nghĩa và cách dùng: Nhập T.TOÁN thành phẩm trước mở bảng nguyên liệu của dòng cần kết thúc.
- **Không có nguyên liệu để tất toán**: Ý nghĩa và cách dùng: Dòng đã lưu không có nguyên liệu phù hợp để mở; đối chiếu nguyên liệu/định mức đã gắn với lệnh trước tiếp tục.
- **Bạn chưa tất toán cho nguyên liệu**: Ý nghĩa và cách dùng: Dòng đã có lượng T.TOÁN nhưng chưa hoàn thiện lượng tất toán nguyên liệu/lô; mở lại bảng chi tiết và xác nhận phần cần kết thúc.
- **Số lượng tất toán không hợp lệ**: Ý nghĩa và cách dùng: Kiểm tra lượng nguyên liệu không theo lô và lượng tất toán theo lô không âm, không vượt phần thực tế có thể kết thúc.
- **Tất toán vượt mức cho phép**: Ý nghĩa và cách dùng: Đối chiếu số yêu cầu, hệ số quy đổi và số đã nhập của từng dòng; sửa lượng kết thúc theo phần được phép, không đổi số nhận để tăng giới hạn.
- **Thấy Tất toán nhưng không lưu được theo quyền**: Ý nghĩa và cách dùng: Nhờ quản trị kiểm tra cả quyền cập nhật để hiện liên kết và quyền tất toán để ghi nhận.

## 10. Câu hỏi thường gặp

**Đã nhập có luôn nghĩa là nhận đủ số yêu cầu ban đầu?** Không. Tiến độ được tính sau trừ phần tất toán; mở dòng lệnh để xem số yêu cầu, đã nhận và tất toán.

**Vì sao không sửa được hàng hoặc S.LƯỢNG?** Dòng đã có chi tiết nguyên liệu được khóa để giữ liên kết; xác định lượng trước khai nguyên liệu. Luồng Sửa lệnh còn yêu cầu trạng thái Chưa nhập.

## 11. Công việc tiếp theo

Sau khi lưu thành công, mở lại đúng lệnh, đối chiếu tổng T.TOÁN, số đã nhập, phần còn chờ và từng nguyên liệu/lô. Chỉ lập nhận phần còn thực nhận theo [LẬP NHẬP THÀNH PHẨM](/bai-viet/2026-11-07-sx-a02-1-lap-nhap-thanh-pham/); vật tư thực nhận lại theo [LẬP NHẬP VẬT TƯ](/bai-viet/2026-11-07-sx-a03-1-lap-nhap-vat-tu/) khi đủ điều kiện. Không coi tất toán là đã lập phiếu nhận lại vật tư.

## 12. Bài hướng dẫn liên quan

- **[TỔNG QUAN LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-0-tong-quan-lenh-san-xuat/)** — Tổng quan lệnh sản xuất.
- **[LẬP LỆNH SẢN XUẤT GIẤY HOẶC KEO](/bai-viet/2026-11-07-sx-a01-1-lap-lenh-san-xuat-giay-hoac-keo/)** — Lập lệnh sản xuất giấy hoặc keo.
- **[IN PHIẾU XUẤT NGUYÊN LIỆU TỪ LỆNH SẢN XUẤT](/bai-viet/2026-11-07-sx-a01-3-in-phieu-xuat-nguyen-lieu-tu-lenh-san-xuat/)** — In phiếu xuất nguyên liệu từ lệnh sản xuất.
