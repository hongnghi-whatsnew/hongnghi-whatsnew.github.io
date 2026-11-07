---
title: "HƯỚNG DẪN IMPORT GHI TĂNG TÀI SẢN CỐ ĐỊNH"
date: "2026-11-07"
summary: "Nạp danh sách tài sản từ mẫu Excel và đối chiếu từng dòng trước import."
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

Nạp danh sách tài sản từ mẫu Excel và đối chiếu từng dòng trước import.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Chuẩn bị file theo mẫu ghi tăng TSCĐ, ít nhất hai cột mã/tên và các số liệu đã được duyệt.
- Có danh sách mã đang có và bản đối chiếu trước import để phân biệt thêm/cập nhật; sao lưu căn cứ phân bổ nếu file sẽ ghi đè.
- Chốt cách ghi nhận tài sản đã hao mòn: số tháng sử dụng, phần còn lại và KH tháng; không dùng cột Giá trị còn lại như trường lưu độc lập.
- Với mã đã tồn tại, chỉ import sau khi người phụ trách chốt phương án cập nhật phân bổ: dòng hướng dẫn trên hộp nhập nói chỉ áp dụng phân bổ cho mã mới, nhưng luồng xử lý hiện tại có nhánh ghi đè phân bổ của mã trùng. Chưa có kiểm tra thực tế xác nhận trên phiên chạy; không dùng lời nhắc này làm cam kết giữ nguyên phân bổ cũ.

## 2. Mở chức năng

**Tài sản & CCDC → Danh sách tài sản cố định**

## 3. Nhận biết màn hình

Hộp thoại nghiệp vụ mở từ màn danh sách; gồm thông tin kỳ/hồ sơ và các bảng chi tiết được giải thích ở phần “Giải thích các thông tin trên màn hình”.

Các nút chính của chức năng: **Danh mục**, **Chứng từ**, **Ghi tăng**, **Import ghi tăng**, **Điều chỉnh**, **Khai báo TSCĐ đầu kỳ**, **Xem**, **Chọn file Excel**, **Tải file mẫu**, **Hủy**.

Ảnh chụp trên **Gia Phúc / dev**, ngày **25/10/2026**. Đây là ảnh giao diện; các cảnh chưa lưu và dữ liệu trống được ghi rõ ở chú thích.

Khung  khoanh vùng thông tin và bảng chi tiết của cửa sổ. Khung  khoanh các nút ở cuối cửa sổ.

![Hình 1: Import tài sản trước khi chọn file Excel](/posts/2026-11-07-ts-a01-2-huong-dan-import-ghi-tang-tai-san-co-dinh/hinh-01-ts-import-ghi-tang.png)

## 4. Trình tự công việc

Tải mẫu ghi tăng → Chuẩn bị mã mới/mã cập nhật và số dư → Nạp/rà bảng xem trước → Lưu → Đọc bộ đếm → Đối chiếu từng mã và phiếu

## 5. Thực hiện trên phần mềm

1. Chọn **Import ghi tăng → Tải file mẫu** để lấy `MAU_IMPORT_GHI_TANG_TSCD.xlsx`. Giữ dòng đầu làm tiêu đề; xem đủ các cột và quy tắc chuyển đổi tại phần “Giải thích các thông tin trên màn hình”. Đặc biệt nhập thời gian bằng **tháng** và dùng ô số Excel cho các cột tiền/tỷ lệ.
2. Tách rõ mã mới và mã đã có: **mã đã có sẽ cập nhật tài sản**, không tạo phiếu ghi tăng mới. Soát toàn bộ các cột của mã cập nhật vì số 0, ô trống và các mặc định của file có thể thay giá trị đã lưu. Không để lặp mã trong cùng file; các dòng được xử lý lần lượt, dòng sau có thể cập nhật lại mã vừa tạo/cập nhật ở dòng trước.
3. Chọn **Chọn file Excel**, kiểm tra các cột được nhận và bảng xem trước. File phải có hai tiêu đề Mã tài sản/Tên tài sản (hoặc bí danh được chấp nhận); dòng trắng được bỏ. Dòng thiếu mã hoặc tên không nằm trong số dòng hợp lệ để lưu, cần sửa trước nếu muốn nhập đủ hồ sơ.
4. Kiểm tra ngày, nguyên giá, hao mòn, KH tháng, tài khoản và dữ liệu phân bổ từng dòng; có thể sửa ô tại bảng xem trước. Không dựa vào riêng cột **Giá trị còn lại** để ghi nhận vì cột này chưa được truyền độc lập khi lưu. Đối chiếu công thức KH tháng và mặc định ở phần “Giải thích các thông tin trên màn hình”.
5. Chỉ lưu sau khi đối chiếu đủ dòng hợp lệ. Mã mới không có Số CT được sinh `GT-<Mã tài sản>`; số CT này vẫn phải không trùng. Theo luồng xử lý đã đối chiếu, mã trùng có dữ liệu phân bổ sẽ ghi đè các dòng phân bổ trên phiếu ghi tăng có ID lớn nhất của tài sản. Điều này mâu thuẫn lời nhắc chỉ áp dụng PB khi tạo mới trên hộp nhập; cần thử mã kiểm tra thực tế và duyệt phương án trước khi dùng cho mã đang có. Giữ bản đối chiếu phân bổ trước import.
6. Ghi lại số **tạo / cập nhật / bỏ qua / lỗi**. Hệ thống xử lý từng dòng và có thể trả thành công một phần. cửa sổ hiện chỉ đưa số lượng lên thông báo và đóng, không hiện danh sách lỗi từng dòng từ kết quả hệ thống; khi có lỗi, đối chiếu các mã ở danh sách và nhờ người hỗ trợ lấy chi tiết lỗi trước khi nhập lại.
7. Mở các mã mới/cập nhật và phiếu ghi tăng liên quan để kiểm tra số trước/sau; lưu file nguồn đã duyệt. Chỉ nhập lại các mã đã xác định cần sửa, vì nhập lại file cũng có thể ghi đè các tài sản đã thành công.

## 6. Giải thích các thông tin trên màn hình

- **Mã tài sản / Tên tài sản**: Ý nghĩa, cách nhập và quy tắc riêng: Hai cột tối thiểu phải nhận diện được; từng dòng cần đủ cả mã và tên sau bỏ khoảng trắng. Chỉ dòng đủ hai giá trị mới được gửi lên hệ thống.
- **Loại tài sản / Đơn vị sử dụng**: Ý nghĩa, cách nhập và quy tắc riêng: Nhập tên loại và tên đơn vị trên từng dòng. Đây là dữ liệu văn bản của hồ sơ nhập, không tạo danh mục loại/đơn vị mới.
- **Ngày ghi tăng**: Ý nghĩa, cách nhập và quy tắc riêng: Nhận ô ngày Excel hoặc chuỗi dd/MM/yyyy, dd-MM-yyyy; nếu không đọc được/để trống sẽ dùng thời điểm hiện tại, nên phải kiểm tra ở bảng xem trước.
- **Ngày bắt đầu tính KH**: Ý nghĩa, cách nhập và quy tắc riêng: Nhận định dạng ngày như Ngày ghi tăng; nếu trống/không đọc được sẽ dùng Ngày ghi tăng.
- **Thời gian sử dụng (Tháng)**: Ý nghĩa, cách nhập và quy tắc riêng: Nhập tổng số tháng, không nhập số năm; dùng tính tỷ lệ KH tháng = 100/số tháng (4 số lẻ).
- **Thời gian sử dụng còn lại (Tháng)**: Ý nghĩa, cách nhập và quy tắc riêng: Dùng khi tự tính KH tháng theo phần giá trị tính KH chưa hao mòn; không được gửi như một trường thời gian còn lại độc lập. Sau import phải kiểm tra lại số tháng tại danh sách.
- **Nguyên giá**: Ý nghĩa, cách nhập và quy tắc riêng: Số nguyên giá nhập cho tài sản. Chuỗi số bị loại ký tự ngoài chữ số và dấu trừ, nên dùng ô số Excel; không dùng chuỗi có phần thập phân.
- **Giá trị tính KH**: Ý nghĩa, cách nhập và quy tắc riêng: Cơ sở KH; nếu bằng 0 hoặc trống sẽ lấy Nguyên giá. Nhập rõ nếu muốn khác nguyên giá.
- **Hao mòn lũy kế**: Ý nghĩa, cách nhập và quy tắc riêng: Số hao mòn có trước lúc import, trống thành 0. Được dùng tính giá trị còn lại và tính KH theo số tháng còn lại.
- **Giá trị còn lại**: Ý nghĩa, cách nhập và quy tắc riêng: Cột có trong mẫu/xem trước nhưng không được chuyển thành trường riêng trong yêu cầu lưu hiện tại. Giá trị lưu được tính Nguyên giá − Hao mòn lũy kế; phải đối chiếu lại sau import.
- **Giá trị KH tháng**: Ý nghĩa, cách nhập và quy tắc riêng: Nếu nhập số > 0 thì dùng trực tiếp. Nếu không: có số tháng còn lại > 0 thì làm tròn max(0, Giá trị tính KH − Hao mòn lũy kế)/số tháng còn lại; còn lại dùng Giá trị tính KH/tổng số tháng (nếu > 0), không thì 0.
- **TK nguyên giá / TK khấu hao**: Ý nghĩa, cách nhập và quy tắc riêng: Nhập tài khoản từng tài sản; để trống lần lượt mặc định 2112 / 2141.
- **Tình trạng sử dụng**: Ý nghĩa, cách nhập và quy tắc riêng: Nhập nội dung tình trạng, để trống dùng Đang sử dụng.
- **Nguồn gốc**: Ý nghĩa, cách nhập và quy tắc riêng: Nhập nguồn hình thành, trống dùng Mua mới; import không kèm bảng chứng từ nguồn gốc.
- **Số CT**: Ý nghĩa, cách nhập và quy tắc riêng: Nếu mã tài sản mới và Số CT trống, hệ thống sinh GT-<Mã tài sản>. Nếu trùng mã tài sản hiện có thì cập nhật hồ sơ, không tạo phiếu ghi tăng mới.
- **Mã đối tượng (PB) / Tên đối tượng (PB)**: Ý nghĩa, cách nhập và quy tắc riêng: Thông tin đối tượng của tối đa một dòng phân bổ trên mỗi dòng tài sản nhập. Dữ liệu phân bổ còn được nhận khi chỉ có TK chi phí, khoản mục hoặc mã thống kê.
- **Tỷ lệ phân bổ (%)**: Ý nghĩa, cách nhập và quy tắc riêng: Tỷ lệ dòng phân bổ; trống hoặc bằng 0 được thay bằng 100 trong yêu cầu lưu.
- **TK chi phí (PB)**: Ý nghĩa, cách nhập và quy tắc riêng: Tài khoản nhận chi phí của dòng phân bổ; không mặc định từ TK nguyên giá/TK khấu hao.
- **Khoản mục chi phí / Mã thống kê**: Ý nghĩa, cách nhập và quy tắc riêng: Thông tin bổ sung của dòng phân bổ. Nếu trùng mã tài sản và có dữ liệu phân bổ, hệ thống ghi đè phân bổ trên phiếu ghi tăng hiện có.
- **Tạo / Cập nhật / Bỏ qua / Lỗi**: Ý nghĩa, cách nhập và quy tắc riêng: Số lượng kết quả hệ thống trả về. Có thể thành công một phần; không import lại toàn bộ file trước khi đối chiếu các mã đã tạo/cập nhật.

## 7. Kiểm tra sau khi thực hiện

Theo luồng hiện tại, mã mới tạo tài sản và phiếu ghi tăng; mã đã có cập nhật hồ sơ, có dữ liệu phân bổ thì ghi đè phân bổ phiếu hiện có. Có thể có dòng thành công và dòng lỗi trong cùng lần nhập. Kiểm tra bộ đếm và từng mã trong danh sách, không chỉ dựa vào thông báo kết thúc.

Đây là kết quả dự kiến theo luồng hiện tại; chưa có kiểm tra thực tế xác nhận trên môi trường sử dụng.

## 8. Những điều cần lưu ý

⚠️ Không dùng file không đúng mẫu hoặc dữ liệu thật chưa được phê duyệt. Phải kiểm tra quy tắc trùng mã trên môi trường thử trước nhập hàng loạt.

⚠️ Khi kết quả không khớp, ghi lại mã hồ sơ, kỳ/ngày và số trước/sau để đối chiếu; không tiếp tục các bước tác động sổ khi chưa xác định được sai lệch.

## 9. Vướng mắc thường gặp

- **Không tìm thấy cột Mã tài sản và Tên tài sản**: Cách xử lý riêng: Dùng đúng mẫu ghi tăng TSCĐ, để tiêu đề ở dòng đầu, kiểm tra hai cột bắt buộc được nhận diện.
- **File rỗng / File không có dòng dữ liệu**: Cách xử lý riêng: Kiểm tra ngoài dòng tiêu đề còn có các dòng dữ liệu không trắng.
- **Không có dòng hợp lệ (cần Mã + Tên tài sản)**: Cách xử lý riêng: Điền cả mã và tên trên từng dòng cần gửi; việc có nguyên giá/ngày chưa đủ tạo dòng hợp lệ.
- **Không đọc được file Excel**: Cách xử lý riêng: Kiểm tra định dạng.xlsx và đọc lại file; đối chiếu bảng xem trước trước lưu.
- **Import có số lỗi > 0**: Cách xử lý riêng: Hệ thống xử lý từng dòng, các mã khác có thể đã được ghi nhận. Ghi lại bộ đếm, đối chiếu danh sách mã và nhờ người hỗ trợ lấy chi tiết lỗi của kết quả; cửa sổ chưa hiển thị lỗi từng dòng.
- **Số KH tháng/giá trị còn lại không giống file nguồn**: Cách xử lý riêng: Kiểm tra ưu tiên KH tháng > 0, công thức khi bỏ trống, kiểu ô số/ngày và Giá trị còn lại không truyền riêng trong yêu cầu lưu, theo phần “Giải thích các thông tin trên màn hình”.

## 10. Công việc tiếp theo

- **[HƯỚNG DẪN TỔNG QUAN DANH SÁCH TÀI SẢN CỐ ĐỊNH](/bai-viet/2026-11-07-ts-a01-0-huong-dan-tong-quan-danh-sach-tai-san-co-dinh/)** — Tổng quan Danh sách tài sản cố định.

## 11. Bài hướng dẫn liên quan

- **[HƯỚNG DẪN TỔNG QUAN DANH SÁCH TÀI SẢN CỐ ĐỊNH](/bai-viet/2026-11-07-ts-a01-0-huong-dan-tong-quan-danh-sach-tai-san-co-dinh/)** — Tổng quan Danh sách tài sản cố định.
- **[HƯỚNG DẪN GHI TĂNG TÀI SẢN CỐ ĐỊNH](/bai-viet/2026-11-07-ts-a01-1-huong-dan-ghi-tang-tai-san-co-dinh/)** — Ghi tăng tài sản cố định.
