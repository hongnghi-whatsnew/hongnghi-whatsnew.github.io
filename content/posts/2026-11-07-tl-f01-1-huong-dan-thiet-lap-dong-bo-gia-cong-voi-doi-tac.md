---
title: "HƯỚNG DẪN THIẾT LẬP ĐỒNG BỘ GIA CÔNG VỚI ĐỐI TÁC"
date: "2026-11-07"
summary: "Hai công ty (ví dụ Hồng Nghi đặt gia công, Gia Phúc nhận gia công) dùng hai hệ thống riêng."
module: "Thiết lập danh mục"
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

Hai công ty (ví dụ Hồng Nghi đặt gia công, Gia Phúc nhận gia công) dùng **hai hệ thống riêng**. Sau khi thiết lập ở bài này, khi bên đặt lưu **phiếu yêu cầu gia công** loại **Ngoài (đồng bộ API)**, hệ thống tự gửi phiếu sang bên nhận, và bên nhận báo ngược khi nhập thành phẩm, không ai phải gõ lại phiếu của nhau.

Thiết lập là việc làm **một lần** và phải làm **ở cả hai bên**. Bài này nêu các việc thuộc nghiệp vụ và việc IT; các thao tác chi tiết của từng màn ở [TỔNG QUAN MÀN HÌNH KẾT NỐI ĐỐI TÁC](/bai-viet/2026-11-07-tl-f01-0-tong-quan-man-hinh-ket-noi-doi-tac/), [TỔNG QUAN MÀN HÌNH MAPPING HÀNG HÓA GIA CÔNG](/bai-viet/2026-11-07-tl-f02-0-tong-quan-man-hinh-mapping-hang-hoa-gia-cong/), [TỔNG QUAN MAPPING ĐỊNH MỨC GIA CÔNG](/bai-viet/2026-11-07-tl-f03-0-tong-quan-mapping-dinh-muc-gia-cong/).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Hai bên đã thống nhất: ai là bên **đặt** gia công, ai là bên **nhận**, mã mỗi bên (ví dụ `HN`, `GP`).
- Hai bên có thể truy cập máy chủ của nhau qua mạng; IT đã cấp khoá bảo mật chung **giống nhau ở hai bên** qua kênh riêng.
- Bên nhận đã có **loại hàng GỬI HÀNG** (mã `GUIHANG`) trong danh mục **Loại hàng** và các **Số mặt** mà bên đặt dùng.

## 2. Mở chức năng

**Kết nối gia công API → Kết nối đối tác**

## 3. Nhận biết màn hình

Các màn tham gia thiết lập:

- **Kết nối đối tác**: Việc: Khai mã của mình và đối tác; Bài: [TỔNG QUAN MÀN HÌNH KẾT NỐI ĐỐI TÁC](/bai-viet/2026-11-07-tl-f01-0-tong-quan-man-hinh-ket-noi-doi-tac/)
- **Mapping hàng hóa gia công**: Việc: Đổi mã hàng của đối tác sang mã hàng của mình; Bài: [TỔNG QUAN MÀN HÌNH MAPPING HÀNG HÓA GIA CÔNG](/bai-viet/2026-11-07-tl-f02-0-tong-quan-man-hinh-mapping-hang-hoa-gia-cong/)
- **Mapping định mức gia công**: Việc: Đổi tên định mức của đối tác sang định mức của mình; Bài: [TỔNG QUAN MAPPING ĐỊNH MỨC GIA CÔNG](/bai-viet/2026-11-07-tl-f03-0-tong-quan-mapping-dinh-muc-gia-cong/)
- **Phiếu yêu cầu gia công (Sản xuất)**: Việc: Tạo phiếu **Ngoài (đồng bộ API)**; nút **Đồng bộ từ API**; cột **Đồng bộ API**; Bài: Sổ tay Sản xuất

Cột **Đồng bộ API** hiện: **Đã đồng bộ** (chữ xanh), **Lỗi đồng bộ** (chữ đỏ, rê chuột xem lý do, kèm **Đồng bộ lại** nếu có quyền), **Chưa đồng bộ** (chữ cam).

Đã mở danh sách Kết nối đối tác và biểu mẫu mới. Biểu mẫu hiện có API Base URL và API Secret, các ánh xạ Đơn vị gia công, Khách hàng, Kho nhận gửi, Kho xuất, Kích hoạt. API Base URL chỉ nhập gốc server, không thêm /api. Đã xóa giá trị trình duyệt tự điền trong bản nháp trước chụp; không lưu secret, không thay mã đối tác, không cấp quyền hay thử gọi server. Giá trị mã HN đang hiện trên localhost Gia Phúc là cấu hình quan sát được, không phải giá trị khuyến nghị để sao chép.

![Cấu hình hiện tại, chỉ xem, không thay đổi mã đối tác hoặc kết nối](/posts/2026-11-07-tl-f01-1-huong-dan-thiet-lap-dong-bo-gia-cong-voi-doi-tac/hinh-01-20261030-tl-f01-1-danh-sach.png)

![Biểu mẫu mới, đã xóa giá trị trình duyệt tự điền, không lưu và không gọi API](/posts/2026-11-07-tl-f01-1-huong-dan-thiet-lap-dong-bo-gia-cong-voi-doi-tac/hinh-02-20261030-tl-f01-1-form-doi-tac.png)

## 4. Trình tự công việc

1. **Bên đặt (ví dụ HN):** lưu Phiếu yêu cầu gia công → Ngoài để gửi yêu cầu qua đồng bộ API.
2. **Bên nhận (ví dụ GP):** mở hộp thư Đồng bộ từ API, chọn Lấy dữ liệu để tạo Phiếu yêu cầu gia công và Phiếu nhập kho gửi hàng.
3. **Bên nhận:** lưu Phiếu nhập kho gia công thành phẩm để báo hoàn thành.
4. **Bên đặt:** nhận dòng Nhập thành phẩm rồi tạo Phiếu nhập kho gia công thành phẩm.
5. **Khi xóa phiếu ở một bên:** hệ thống gửi báo xóa; bên kia đánh dấu nhưng không xóa phiếu đã tạo.

```text
Thứ tự thiết lập (làm ở cả hai bên):
Mã đối tác của tôi → Thêm đối tác → (IT) đường kết nối kỹ thuật cùng mã + cùng khoá
   → Mapping hàng hóa / định mức nếu mã hai bên khác nhau → Kiểm tra bằng một phiếu thử
```

### Phía bên đặt gia công (ví dụ Hồng Nghi)

**Bước 1 –** Ở **Kết nối đối tác**, khai **Mã đối tác của tôi** (ví dụ `HN`) rồi **Lưu**.

**Bước 2 –** Thêm một đối tác: **MÃ ĐỐI TÁC** là mã bên nhận (ví dụ `GP`), chọn **ĐƠN VỊ GIA CÔNG** là đơn vị gia công đại diện cho bên nhận (bắt buộc để hệ thống biết gửi phiếu cho ai), **Kích hoạt**.

**Bước 3 –** IT khai đường kết nối kỹ thuật với bên nhận: cùng mã `GP`, địa chỉ máy chủ bên nhận, khoá bảo mật chung.

### Phía bên nhận gia công (ví dụ Gia Phúc)

**Bước 4 –** Ở **Kết nối đối tác**, khai **Mã đối tác của tôi** (ví dụ `GP`) rồi **Lưu**.

**Bước 5 –** Thêm đối tác: **MÃ ĐỐI TÁC** là mã bên đặt (ví dụ `HN`), chọn **KHÁCH HÀNG** là khách hàng đại diện cho bên đặt, chọn **KHO NHẬN GỬI** (kho hàng trơn chứa ván khách gửi) và **KHO XUẤT**. IT khai đường kết nối kỹ thuật ngược lại (mã `HN`, cùng khoá).

### Cả hai bên

**Bước 6 –** Nếu mã hàng hai bên khác nhau: khai **Mapping hàng hóa gia công** ([TỔNG QUAN MÀN HÌNH MAPPING HÀNG HÓA GIA CÔNG](/bai-viet/2026-11-07-tl-f02-0-tong-quan-man-hinh-mapping-hang-hoa-gia-cong/), hoặc import [HƯỚNG DẪN IMPORT MAPPING HÀNG HÓA GIA CÔNG TỪ EXCEL](/bai-viet/2026-11-07-tl-f02-1-huong-dan-import-mapping-hang-hoa-gia-cong-tu-excel/)). Nên khai **mapping định mức** ([TỔNG QUAN MAPPING ĐỊNH MỨC GIA CÔNG](/bai-viet/2026-11-07-tl-f03-0-tong-quan-mapping-dinh-muc-gia-cong/)) để định mức tự điền đúng.

**Bước 7 –** Cấp quyền ở phần “Chuẩn bị trước khi thực hiện” cho người dùng liên quan.

### Kiểm tra bằng một phiếu thử

**Bước 8 –** Bên đặt tạo **Phiếu yêu cầu gia công ▸ Ngoài (đồng bộ API)** với đơn vị gia công là bên nhận, lưu. Cột **Đồng bộ API** chuyển **Đã đồng bộ** (có thể mất vài giây).

**Bước 9 –** Bên nhận mở **Phiếu yêu cầu gia công**, bấm **Đồng bộ từ API**, dòng loại **Yêu cầu gia công** (trạng thái **Chờ đồng bộ**) → **Lấy dữ liệu**; cửa sổ phiếu hiện sẵn dữ liệu → kiểm tra, bổ sung (kho gia công, định mức chưa khớp) → **Lưu lại**. Hệ thống tự lập **Phiếu nhập kho gửi hàng** cho ván khách gửi với đơn giá 0.

**Bước 10 –** Khi bên nhận lưu phiếu nhập thành phẩm, bên đặt thấy dòng loại **Nhập thành phẩm** trong **Đồng bộ từ API** và dùng nó tạo phiếu nhập thành phẩm của mình (xem sổ tay Sản xuất).

## 6. Giải thích các thông tin trên màn hình

- **Hướng đồng bộ**: Giải thích: **Hai chiều theo chứng từ**: yêu cầu đi từ bên đặt sang bên nhận; báo hoàn thành đi ngược lại; báo xoá đi cả hai chiều. **Danh mục (đối tác, mapping, hàng hóa) không tự đồng bộ**: mỗi bên tự khai
- **Chỉ phiếu loại Ngoài (đồng bộ API) được gửi**: Giải thích: Phiếu **Tại kho**, **Ngoài** thường không gửi
- **Phiếu nhận từ đối tác**: Giải thích: Không gửi ngược yêu cầu (tránh lặp vô hạn), chỉ báo hoàn thành / báo xoá
- **Trạng thái trên hộp thư**: Giải thích: **Chờ đồng bộ** (chưa lấy); sau khi lấy dữ liệu và lưu phiếu thì dòng được đánh dấu đã xử lý; **HN đã xóa phiếu gốc** khi bên đặt xoá phiếu
- **Cách đối chiếu phiếu**: Giải thích: Theo **mã phiếu gốc** của bên đặt; gửi lại cùng mã không tạo trùng (dòng còn chờ thì cập nhật, dòng đã xử lý thì giữ nguyên)
- **Khi nào gửi**: Giải thích: Mỗi lần lưu (thêm mới hoặc sửa) phiếu yêu cầu **Ngoài (đồng bộ API)**; mỗi lần xoá phiếu; mỗi lần bên nhận lưu phiếu nhập thành phẩm

## 7. Kiểm tra sau khi thực hiện

- Phiếu yêu cầu gia công ngoài của bên đặt tự có mặt ở bên nhận (qua hộp thư) mà không cần gõ lại.
- Bên nhận tự có các mã hàng **GỬI HÀNG** (giá vốn 0) và mapping tương ứng cho ván khách gửi.
- Bên đặt nhận được thông báo khi bên nhận nhập thành phẩm.

## 8. Những điều cần lưu ý

⚠️ **Phiếu cục bộ luôn được lưu** kể cả khi gửi sang đối tác lỗi. Phiếu báo **Lỗi đồng bộ** hoặc **Chưa đồng bộ** thì xử lý nguyên nhân rồi bấm **Đồng bộ lại**; hệ thống cũng tự thử lại nhiều lần.

⚠️ **Mã đối tác phải trùng ở ba nơi**: màn **Kết nối đối tác**, đường kết nối kỹ thuật do IT khai, và **Mã đối tác của tôi** của bên kia. Lệch mã thì bên nhận từ chối ("Chưa cấu hình kết nối cho đối tác …").

⚠️ **Khoá bảo mật phải giống nhau ở hai bên** (chữ ký hai chiều). Khoá khác thì mọi yêu cầu bị từ chối.

⚠️ Hệ thống **không đồng bộ định mức nguyên liệu**: mỗi bên tự tính theo định mức của mình. Chỉ **tên** định mức của bên gửi được gửi sang để bên nhận tự chọn định mức tương ứng.

⚠️ Bấm **Đồng bộ lại** khi phiếu không thuộc diện đồng bộ (không phải loại **Ngoài (đồng bộ API)**, phiếu do đối tác gửi tới, hoặc đối tác chưa được IT cấu hình để nhận) sẽ báo **Phiếu này không thuộc diện đồng bộ với đối tác, hoặc đối tác chưa được cấu hình để nhận.**

⚠️ Xoá phiếu ở một bên chỉ **báo** cho bên kia: dòng chờ chưa xử lý bị huỷ; phiếu bên kia đã tạo xong vẫn giữ nguyên, dòng hộp thư gắn cờ **HN đã xóa phiếu gốc** để người dùng tự kiểm tra.

⚠️ Không ghi khoá bảo mật vào tài liệu, tin nhắn hay ghi chú.

### "Chưa cấu hình kết nối cho đối tác '…'" (Lỗi hệ thống)

Nguyên nhân: bên nhận chưa khai đối tác (hoặc mã khác với mã bên gửi dùng).
Cách xử lý: ở **Kết nối đối tác** của bên nhận, khai đúng mã đối tác ([TỔNG QUAN MÀN HÌNH KẾT NỐI ĐỐI TÁC](/bai-viet/2026-11-07-tl-f01-0-tong-quan-man-hinh-ket-noi-doi-tac/)), IT kiểm tra đường kết nối kỹ thuật cùng mã.

### "Chưa có hàng hóa '…' ở hệ thống này để tạo mã gửi hàng. Vui lòng tạo hàng hóa gốc hoặc khai mapping (Thiết lập > Mapping hàng hóa gia công) rồi đồng bộ lại." 

Nguyên nhân: bên nhận bấm **Lấy dữ liệu** nhưng mã hàng bên gửi chưa có ở hệ thống mình và chưa có mapping.
Cách xử lý: tạo hàng hóa gốc hoặc khai mapping ([TỔNG QUAN MÀN HÌNH MAPPING HÀNG HÓA GIA CÔNG](/bai-viet/2026-11-07-tl-f02-0-tong-quan-man-hinh-mapping-hang-hoa-gia-cong/)), rồi bấm lại **Lấy dữ liệu**.

### "Chưa khai loại hàng 'GUIHANG' (GỬI HÀNG) ở hệ thống này (Thiết lập > Loại hàng)." 

Nguyên nhân: bên nhận chưa có loại hàng **GỬI HÀNG**.
Cách xử lý: tạo loại hàng mã `GUIHANG` ở danh mục **Loại hàng** (TL-D05).

### "Chưa có số mặt mã '…' ở hệ thống này (Thiết lập > Số mặt). Vui lòng khai rồi đồng bộ lại." 

Nguyên nhân: số mặt mà bên đặt dùng chưa có ở bên nhận.
Cách xử lý: khai **Số mặt** có cùng mã (TL-D06), rồi **Lấy dữ liệu** lại.

### "Chi tiết gia công thiếu 'masomat' (số mặt). …" (Lỗi hệ thống)

Nguyên nhân: phiếu gửi từ bản phần mềm cũ không kèm số mặt.
Cách xử lý: nhờ IT cập nhật phiên bản bên gửi, hoặc kiểm tra số mặt trên phiếu gốc.

### Cột **Đồng bộ API** báo **Lỗi đồng bộ** (Lỗi hệ thống)

Nguyên nhân: đối tác tắt máy / mất mạng / sai khoá / sai địa chỉ (rê chuột lên chữ **Lỗi đồng bộ** để xem lý do).
Cách xử lý: IT kiểm tra kết nối; bấm **Đồng bộ lại**.

## 10. Câu hỏi thường gặp

**Gửi đi rồi sửa phiếu có gửi lại không?**
Có: mỗi lần bên đặt **lưu** (cả khi sửa) phiếu loại **Ngoài (đồng bộ API)**, hệ thống gửi lại phiếu. Nếu bên nhận **chưa lấy dữ liệu** (dòng còn **Chờ đồng bộ**) thì dòng hộp thư được cập nhật theo bản mới nhất. Nếu bên nhận đã lấy dữ liệu và lưu phiếu thì **không ghi đè**: bản sửa không sang phiếu bên nhận, hãy báo trực tiếp cho bên nhận.

**Mapping hàng hóa tự sinh ra?**
Có. Khi bên nhận lấy dữ liệu, hệ thống tự tạo mã **GỬI HÀNG** và tự thêm một dòng mapping ghi chú "Tự động tạo từ phiếu yêu cầu gia công …" ([TỔNG QUAN MÀN HÌNH MAPPING HÀNG HÓA GIA CÔNG](/bai-viet/2026-11-07-tl-f02-0-tong-quan-man-hinh-mapping-hang-hoa-gia-cong/)).

## 11. Công việc tiếp theo

**Tiếp theo:** sổ tay Sản xuất: lập **Phiếu yêu cầu gia công ▸ Ngoài (đồng bộ API)**, **Đồng bộ từ API**, **Phiếu nhập kho gia công**.

## 12. Bài hướng dẫn liên quan

- [TỔNG QUAN MÀN HÌNH KẾT NỐI ĐỐI TÁC](/bai-viet/2026-11-07-tl-f01-0-tong-quan-man-hinh-ket-noi-doi-tac/) – Tổng quan màn hình Kết nối đối tác
- [TỔNG QUAN MÀN HÌNH MAPPING HÀNG HÓA GIA CÔNG](/bai-viet/2026-11-07-tl-f02-0-tong-quan-man-hinh-mapping-hang-hoa-gia-cong/) – Mapping hàng hóa gia công; [HƯỚNG DẪN IMPORT MAPPING HÀNG HÓA GIA CÔNG TỪ EXCEL](/bai-viet/2026-11-07-tl-f02-1-huong-dan-import-mapping-hang-hoa-gia-cong-tu-excel/) – Import mapping hàng hóa
- [TỔNG QUAN MAPPING ĐỊNH MỨC GIA CÔNG](/bai-viet/2026-11-07-tl-f03-0-tong-quan-mapping-dinh-muc-gia-cong/) – Mapping định mức gia công; [IMPORT MAPPING ĐỊNH MỨC GIA CÔNG TỪ EXCEL](/bai-viet/2026-11-07-tl-f03-1-import-mapping-dinh-muc-gia-cong-tu-excel/) – Import mapping định mức
- TL-D05 – Loại hàng; TL-D06 – Số mặt
- Sổ tay Sản xuất – Phiếu yêu cầu gia công; Phiếu nhập kho gia công
