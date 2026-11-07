---
title: "HƯỚNG DẪN LẬP HỢP ĐỒNG BÁN HÀNG"
date: "2026-11-07"
summary: "Bài này hướng dẫn lập một hợp đồng với khách hàng trên màn hình Hợp đồng: nhập thông tin hợp đồng, soạn văn bản hợp đồng để in, và đánh dấu tình trạng gửi / nhận."
module: "Bán hàng"
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

Bài này hướng dẫn lập một hợp đồng với khách hàng trên màn hình **Hợp đồng**: nhập thông tin hợp đồng, soạn **văn bản hợp đồng** để in, và đánh dấu tình trạng gửi / nhận.

Bài cũng áp dụng khi:

- **Sửa** hợp đồng (cửa sổ **CẬP NHẬT HỢP ĐỒNG**), ví dụ đổi **TRẠNG THÁI** từ *Đã gửi* sang *Đã nhận*.
- **Sao Chép** một hợp đồng cũ: hệ thống mở cửa sổ **THÊM HỢP ĐỒNG** và chép sẵn **LOẠI HỢP ĐỒNG**, **Đ.DIỆN BÊN A** và **văn bản hợp đồng**.

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Truy cập** và **Thêm mới** của màn hình **Hợp đồng**.
- Khách hàng đã có trong danh mục.
- Chuẩn bị: số hợp đồng, loại hợp đồng, ngày ký, ngày hết hạn (nếu có), số ngày được nợ, người đại diện hai bên, nội dung văn bản hợp đồng.

## 2. Mở chức năng

**Bán hàng → Hợp đồng → Thêm mới**

## 3. Nhận biết màn hình

![Hình 1: Cửa sổ THÊM HỢP ĐỒNG](/posts/2026-11-07-bh-a01-1-huong-dan-lap-hop-dong-ban-hang/hinh-01-form-them-hop-dong.png)

- **LOẠI HỢP ĐỒNG**: Ý nghĩa: Bắt buộc. Chọn trong danh sách hoặc gõ loại khác
- **SỐ HỢP ĐỒNG**: Ý nghĩa: Bắt buộc, ít nhất 2 ký tự, không trùng hợp đồng đã có
- **KHÁCH HÀNG**: Ý nghĩa: Bắt buộc
- **THỜI GIAN NỢ**: Ý nghĩa: Bắt buộc, số ngày từ 0 đến 100
- **Đ.DIỆN BÊN A, Đ.DIỆN BÊN B**: Ý nghĩa: Người ký bên công ty / bên khách
- **NGÀY KÝ, HẾT HẠN**: Ý nghĩa: Ngày ký bắt buộc; hết hạn để trống nếu không thời hạn
- **LIÊN HỆ**: Ý nghĩa: Thông tin liên hệ
- **NHÂN VIÊN KD**: Ý nghĩa: Bắt buộc, mặc định là bạn
- **TRẠNG THÁI**: Ý nghĩa: Bắt buộc: **Chưa gửi** (mặc định) / **Đã gửi** / **Đã nhận**
- **GHI CHÚ**: Ý nghĩa: Ghi chú
- **Kích hoạt**: Ý nghĩa: Ô tick ở chân cửa sổ
- **Văn bản HĐ**: Ý nghĩa: Mở trình soạn văn bản hợp đồng
- **Lưu lại / Đóng**: Ý nghĩa: Lưu / đóng không lưu

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Bán hàng
   ↓
Hợp đồng
   ↓
Thêm mới
```

```text
Hợp đồng → Thêm mới (hoặc Sao Chép một hợp đồng cũ)
      ↓
Nhập loại, số hợp đồng, khách hàng, thời gian nợ, ngày ký, nhân viên KD
      ↓
Văn bản HĐ → soạn nội dung, chèn mã {0}…{13} → Lưu lại
      ↓
Lưu lại ── viền đỏ / "Mã đã tồn tại"? ──► sửa → Lưu lại
      ↓
"Lưu thành công" → In phiếu (BH-A01.2) → gửi khách → Sửa trạng thái
```

### Bước 1 – Mở cửa sổ thêm mới

Vào **Bán hàng → Hợp đồng**, bấm **Thêm mới**. Cửa sổ **THÊM HỢP ĐỒNG** mở ra (Hình 1), **TRẠNG THÁI** mặc định *Chưa gửi*, **NHÂN VIÊN KD** là bạn.

Muốn dùng lại hợp đồng cũ: bấm **Sao Chép** ở dòng hợp đồng đó. Cửa sổ **THÊM HỢP ĐỒNG** mở ra với **LOẠI HỢP ĐỒNG**, **Đ.DIỆN BÊN A**  và văn bản hợp đồng  đã chép sẵn (Hình 2). **SỐ HỢP ĐỒNG**, **KHÁCH HÀNG**, **THỜI GIAN NỢ**, ngày ký… để trống, nhập mới; **TRẠNG THÁI** về *Chưa gửi*.

![Hình 2: Cửa sổ THÊM HỢP ĐỒNG mở bằng Sao Chép](/posts/2026-11-07-bh-a01-1-huong-dan-lap-hop-dong-ban-hang/hinh-02-sao-chep-hop-dong.png)

- **LOẠI HỢP ĐỒNG**: Sau khi Sao Chép: Chép từ hợp đồng gốc
- **Đ.DIỆN BÊN A**: Sau khi Sao Chép: Chép từ hợp đồng gốc
- **Văn bản HĐ**: Sau khi Sao Chép: Văn bản hợp đồng được chép, bấm để xem / sửa
- **SỐ HỢP ĐỒNG, KHÁCH HÀNG, THỜI GIAN NỢ**: Sau khi Sao Chép: Trống, phải nhập

### Bước 2 – Nhập thông tin hợp đồng

- **LOẠI HỢP ĐỒNG**: bấm vào ô, danh sách hiện ra: *Hợp đồng nguyên tắc*, *Hợp đồng kinh tế*, *Hợp đồng mua hàng*, *Phụ lục hợp đồng*. Có thể gõ loại khác.
- **SỐ HỢP ĐỒNG**: gõ số hợp đồng. Nếu số đã tồn tại, dưới ô báo **Mã đã tồn tại**.
- **THỜI GIAN NỢ**: số ngày được nợ (0–100).
- **Đ.DIỆN BÊN A**, **Đ.DIỆN BÊN B**: tên người ký.
- **NGÀY KÝ**, **HẾT HẠN**.
- **LIÊN HỆ**, **GHI CHÚ**: tuỳ chọn.
- **NHÂN VIÊN KD**: đổi nếu người phụ trách khác.
- **TRẠNG THÁI**: để *Chưa gửi* khi mới lập.
- **Kích hoạt** ⑪: mặc định đã tick. Không dùng việc bỏ tick để kết luận hợp đồng ngừng được lấy trên phiếu bán; đối chiếu ngày hết hạn và quy định quản lý hợp đồng ([TỔNG QUAN MÀN HÌNH HỢP ĐỒNG](/bai-viet/2026-11-07-bh-a01-0-tong-quan-man-hinh-hop-dong/)).

### Bước 3 – Soạn văn bản hợp đồng

1. Bấm **Văn bản HĐ** ⑫. Cửa sổ **NỘI DUNG HỢP ĐỒNG: <số hợp đồng>** mở ra với trình soạn thảo (thanh công cụ: kiểu đoạn *Chữ bình thường*, *font chữ*, *cỡ chữ*, đậm, nghiêng, gạch, căn lề, danh sách, liên kết, ảnh, bảng…) (Hình 3).
2. Soạn hoặc dán nội dung hợp đồng. Ở chỗ cần điền tự động, gõ mã trong ngoặc nhọn theo bảng dưới. Khi in, hệ thống thay mã bằng dữ liệu thật.
3. Bấm **Xem bản in mẫu** để xem thử (hộp thoại in của trình duyệt mở ra; mã chưa được thay).
4. Bấm **Lưu lại** để giữ nội dung, cửa sổ đóng lại.

- **{0}**: Được thay bằng: Thời gian nợ (số ngày)
- **{1}**: Được thay bằng: Số hợp đồng
- **{2}**: Được thay bằng: Ngày ký, dạng *ngày DD tháng MM năm YYYY*
- **{3}**: Được thay bằng: Tên công ty (chi nhánh đang làm việc)
- **{4}**: Được thay bằng: Địa chỉ chi nhánh
- **{5}**: Được thay bằng: Điện thoại chi nhánh
- **{6}**: Được thay bằng: Fax chi nhánh
- **{7}**: Được thay bằng: Email chi nhánh
- **{8}**: Được thay bằng: Mã số thuế chi nhánh
- **{9}**: Được thay bằng: Tên khách hàng
- **{10}**: Được thay bằng: Địa chỉ khách hàng
- **{11}**: Được thay bằng: Điện thoại khách hàng
- **{12}**: Được thay bằng: Mã số thuế khách hàng
- **{13}**: Được thay bằng: Đại diện bên B

![Hình 3: Cửa sổ NỘI DUNG HỢP ĐỒNG](/posts/2026-11-07-bh-a01-1-huong-dan-lap-hop-dong-ban-hang/hinh-03-noi-dung-hop-dong.png)

- **Thanh định dạng**: Ý nghĩa: Định dạng chữ, đoạn, chèn bảng / ảnh / liên kết
- **Vùng soạn văn bản**: Ý nghĩa: Nội dung hợp đồng, chèn mã {0}…{13}
- **Xem bản in mẫu**: Ý nghĩa: Mở hộp thoại in của trình duyệt với văn bản đang soạn (mã chưa thay)
- **Lưu lại / Đóng**: Ý nghĩa: Giữ nội dung vào hợp đồng đang mở / đóng không giữ

⚠️ Bấm **Lưu lại** trong cửa sổ văn bản **chưa** lưu hợp đồng. Phải bấm tiếp **Lưu lại** ở cửa sổ hợp đồng.

### Bước 4 – Lưu hợp đồng

Bấm **Lưu lại** ⑬.

- Thiếu thông tin: ô thiếu có viền đỏ. Bấm vào ô để xem lời nhắc: **Vui lòng chọn loại hợp đồng**, **Nhập số hợp đồng**, **Mã hợp đồng quá ngắn**, **Mã đã tồn tại**, **Vui lòng chọn khách hàng**, **Vui lòng thời gian công nợ**, **Công nợ cho phép từ 0 --> 100 ngày**, **Vui lòng chọn ngày ký**, **Vui lòng chọn nhân viên kinh**, **Vui lòng chọn tình trạng hợp đồng**.
- Hợp lệ: **Lưu thành công**, cửa sổ đóng, danh sách tải lại.

### Sửa hợp đồng

Bấm **Sửa** ở dòng hợp đồng → cửa sổ **CẬP NHẬT HỢP ĐỒNG**. Sửa thông tin (thường là **TRẠNG THÁI**, **HẾT HẠN**) rồi **Lưu lại**. Giữ nguyên số hợp đồng thì không bị báo trùng.

## 6. Giải thích các thông tin trên màn hình

- **Loại hợp đồng**: Ý nghĩa: Phân loại hợp đồng; Bắt buộc: Có; Lưu ý: Chọn hoặc gõ
- **Số hợp đồng**: Ý nghĩa: Số hợp đồng; Bắt buộc: Có; Lưu ý: ≥ 2 ký tự, không trùng (không phân biệt hoa/thường)
- **Khách hàng**: Ý nghĩa: Khách ký hợp đồng; Bắt buộc: Có
- **Thời gian nợ**: Ý nghĩa: Số ngày được nợ; Bắt buộc: Có; Lưu ý: 0–100; in vào văn bản qua mã {0}
- **Đ.diện bên A**: Ý nghĩa: Người ký bên công ty; Bắt buộc: Không
- **Đ.diện bên B**: Ý nghĩa: Người ký bên khách; Bắt buộc: Không; Lưu ý: In qua mã {13}
- **Ngày ký**: Ý nghĩa: Ngày ký hợp đồng; Bắt buộc: Có; Lưu ý: In qua mã {2}
- **Hết hạn**: Ý nghĩa: Ngày hết hiệu lực; Bắt buộc: Không; Lưu ý: Trống = không thời hạn. Hết hạn thì phiếu bán hàng không còn hiện số này
- **Liên hệ**: Ý nghĩa: Thông tin liên hệ; Bắt buộc: Không
- **Nhân viên KD**: Ý nghĩa: Người phụ trách; Bắt buộc: Có; Lưu ý: Mặc định người lập
- **Trạng thái**: Ý nghĩa: Chưa gửi / Đã gửi / Đã nhận; Bắt buộc: Có; Lưu ý: Khác *Đã nhận* thì phiếu bán hàng hiện số kèm trạng thái
- **Ghi chú**: Ý nghĩa: Ghi chú; Bắt buộc: Không
- **Kích hoạt**: Ý nghĩa: Đánh dấu hợp đồng đang dùng; Lưu ý: Mặc định đã tick
- **Văn bản HĐ**: Ý nghĩa: Nội dung văn bản để in; Bắt buộc: Không; Lưu ý: Có mã {0}…{13}

## 7. Kiểm tra sau khi thực hiện

- Hợp đồng hiện ở **HỢP ĐỒNG - DANH SÁCH** (khi khoảng ngày chứa ngày tạo).
- Phiếu bán hàng lập cho khách này tự hiện **SỐ HỢP ĐỒNG** (nếu là hợp đồng tạo gần nhất còn hạn).
- Tồn kho và công nợ không thay đổi.

## 8. Những điều cần lưu ý

⚠️ Mã trong văn bản phải gõ đúng dạng `{số}` (ngoặc nhọn, số từ 0 đến 13). Mã sai sẽ in nguyên văn.

⚠️ Thông tin công ty ({3}…{8}) lấy theo **chi nhánh đang làm việc lúc in**, không theo chi nhánh lập hợp đồng.

⚠️ Bấm **Đóng** không hỏi lại; dữ liệu đang nhập bị mất.

### Dưới ô SỐ HỢP ĐỒNG báo "Mã đã tồn tại" 

Nguyên nhân: đã có hợp đồng cùng số (kể cả khác chữ hoa / thường).
Cách xử lý: đổi số hợp đồng, hoặc tìm hợp đồng cũ để **Sửa**.

### Dưới ô THỜI GIAN NỢ báo "Công nợ cho phép từ 0 --> 100 ngày" 

Nguyên nhân: số ngày nợ ngoài khoảng 0–100.
Cách xử lý: nhập lại số ngày.

### Ô viền đỏ ở LOẠI HỢP ĐỒNG / KHÁCH HÀNG / NGÀY KÝ / NHÂN VIÊN KD / TRẠNG THÁI 

Nguyên nhân: thiếu trường bắt buộc.
Cách xử lý: nhập đủ rồi **Lưu lại**.

## 10. Câu hỏi thường gặp

**Sao Chép chép những gì?**
Chỉ **LOẠI HỢP ĐỒNG**, **Đ.DIỆN BÊN A** và văn bản hợp đồng. Khách hàng, số hợp đồng, ngày… phải nhập mới.

**Có cần soạn văn bản HĐ không?**
Không bắt buộc. Chỉ cần khi muốn in hợp đồng từ hệ thống.

## 11. Công việc tiếp theo

**Tiếp theo:** [HƯỚNG DẪN IN HỢP ĐỒNG](/bai-viet/2026-11-07-bh-a01-2-huong-dan-in-hop-dong/) – Hướng dẫn in hợp đồng; đính kèm bản scan hợp đồng đã ký ([HƯỚNG DẪN QUẢN LÝ FILE ĐÍNH KÈM](/bai-viet/2026-11-07-gen-12-huong-dan-quan-ly-file-dinh-kem/)).

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH HỢP ĐỒNG](/bai-viet/2026-11-07-bh-a01-0-tong-quan-man-hinh-hop-dong/) – Tổng quan màn hình Hợp đồng
- [HƯỚNG DẪN IN HỢP ĐỒNG](/bai-viet/2026-11-07-bh-a01-2-huong-dan-in-hop-dong/) – Hướng dẫn in hợp đồng
- [HƯỚNG DẪN LẬP PHIẾU BÁN HÀNG](/bai-viet/2026-11-07-bh-a03-1-huong-dan-lap-phieu-ban-hang/) – Hướng dẫn lập phiếu bán hàng
