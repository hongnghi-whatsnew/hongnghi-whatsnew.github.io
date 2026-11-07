---
title: "KẾT NỐI ỨNG DỤNG AMIS"
date: "2026-11-07"
summary: "Người quản trị tích hợp cung cấp cấu hình qua kênh được phép và phê duyệt chi nhánh/môi trường."
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

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

Người quản trị tích hợp cung cấp cấu hình qua kênh được phép và phê duyệt chi nhánh/môi trường.

## 2. Mở chức năng

**Kết nối AMIS → Kết nối ứng dụng AMIS**

## 3. Nhận biết màn hình

- **access_code**: Cách sử dụng: Mã truy cập do người quản trị tích hợp cung cấp. Không đưa giá trị thật vào ảnh hay tài liệu.
- **new_app_id**: Cách sử dụng: Mã ứng dụng mới theo cấu hình AMIS; đối chiếu giá trị người quản trị cung cấp.
- **org_company_code**: Cách sử dụng: Mã tổ chức kết nối; kiểm đúng môi trường và chi nhánh.
- **Kích hoạt**: Cách sử dụng: Chỉ bật sau khi cấu hình và phạm vi trao đổi đã được phê duyệt.

Đã mở đúng biểu mẫu từ menu bên trái Kết nối AMIS → Kết nối ứng dụng AMIS. Tìm kiếm nhanh AMIS chỉ trả các trang danh mục, chưa trả nút mở biểu mẫu này. Đã đối chiếu ba ô access_code, new_app_id, org_company_code, nút dán, nút Lấy host hiện tại, Kích hoạt và Lưu lại/Đóng. Ảnh không chứa mã truy cập hoặc mã ứng dụng thật. Không nhập mã, không nhấn lấy host, không lưu/kích hoạt và không gọi đồng bộ AMIS.

![Biểu mẫu kết nối ứng dụng AMIS chưa nhập thông tin bí mật](/posts/2026-11-07-tl-g01-0-ket-noi-ung-dung-amis/hinh-01-20261030-tl-g01-0-ket-noi-amis.png)

## 4. Trình tự công việc

Xác nhận hệ thống và cấu hình được cấp → mở Kết nối ứng dụng AMIS từ menu bên trái → nhập ba thông số → soát cấu hình → người được phân công lưu → kiểm tra trao đổi kiểm tra thực tế.

### Bước 1 — Chốt cấu hình đích

Xác nhận chi nhánh hiện tại và môi trường AMIS. Không trộn thông số sandbox với doanh nghiệp đang vận hành.

### Bước 2 — Nhập cấu hình được cấp

Nhập access_code, new_app_id và org_company_code theo bàn giao bảo mật. Các nút dán lấy nội dung clipboard; soát lại từng trường trước lưu. Nút Lấy host hiện tại cạnh org_company_code điền địa chỉ hệ thống ERP đang mở; chỉ dùng khi người quản trị xác nhận địa chỉ đó đúng cấu hình kết nối.

### Bước 3 — Xác minh kết nối

Sau khi người có thẩm quyền lưu cấu hình, kiểm kết quả trao đổi bằng dữ liệu thử. Thông báo **Lưu thành công.** chỉ chứng minh yêu cầu lưu trả thành công, không chứng minh mọi danh mục/chứng từ đã đồng bộ.

## 6. Giải thích các thông tin trên màn hình

- **access_code**: Cách sử dụng: Mã truy cập do người quản trị tích hợp cung cấp. Không đưa giá trị thật vào ảnh hay tài liệu.
- **new_app_id**: Cách sử dụng: Mã ứng dụng mới theo cấu hình AMIS; đối chiếu giá trị người quản trị cung cấp.
- **org_company_code**: Cách sử dụng: Mã tổ chức kết nối; kiểm đúng môi trường và chi nhánh.
- **Kích hoạt**: Cách sử dụng: Chỉ bật sau khi cấu hình và phạm vi trao đổi đã được phê duyệt.

## 7. Kiểm tra sau khi thực hiện

Đối chiếu lại bản ghi và liên kết theo đúng hệ thống chi nhánh đang truy cập. Kết quả mong đợi của thao tác được mô tả ở các bước trên; chưa có bằng chứng lưu/ghi thật của phiên này.

## 8. Những điều cần lưu ý

Cấu hình chứa thông tin truy cập. Không thử thay mã trên kết nối đang hoạt động để lấy ảnh. Phiên tài liệu không thực hiện lưu/kích hoạt kết nối.

### “Vui lòng nhập đủ thông tin.” 

Cách xử lý: Nhờ người quản trị cấp đủ cấu hình, không dùng mã ngẫu nhiên.

## 10. Công việc tiếp theo

Kiểm tra dữ liệu tại màn liên quan trước khi tiếp tục nghiệp vụ. [TỔNG QUAN NHÀ CUNG CẤP AMIS](/bai-viet/2026-11-07-tl-g02-0-tong-quan-nha-cung-cap-amis/); [TỔNG QUAN KHÁCH HÀNG AMIS](/bai-viet/2026-11-07-tl-g03-0-tong-quan-khach-hang-amis/); [TỔNG QUAN HÀNG HÓA AMIS](/bai-viet/2026-11-07-tl-g04-0-tong-quan-hang-hoa-amis/); [TỔNG QUAN TÀI KHOẢN NGÂN HÀNG AMIS](/bai-viet/2026-11-07-tl-g05-0-tong-quan-tai-khoan-ngan-hang-amis/).

## 11. Bài hướng dẫn liên quan

[TỔNG QUAN NHÀ CUNG CẤP AMIS](/bai-viet/2026-11-07-tl-g02-0-tong-quan-nha-cung-cap-amis/); [TỔNG QUAN KHÁCH HÀNG AMIS](/bai-viet/2026-11-07-tl-g03-0-tong-quan-khach-hang-amis/); [TỔNG QUAN HÀNG HÓA AMIS](/bai-viet/2026-11-07-tl-g04-0-tong-quan-hang-hoa-amis/); [TỔNG QUAN TÀI KHOẢN NGÂN HÀNG AMIS](/bai-viet/2026-11-07-tl-g05-0-tong-quan-tai-khoan-ngan-hang-amis/).
