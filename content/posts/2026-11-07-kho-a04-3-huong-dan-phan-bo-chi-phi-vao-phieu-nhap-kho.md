---
title: "HƯỚNG DẪN PHÂN BỔ CHI PHÍ VÀO PHIẾU NHẬP KHO"
date: "2026-11-07"
summary: "Chi phí phát sinh để đưa hàng về kho (vận chuyển, bốc xếp, phí cầu đường…) được cộng vào giá nhập của hàng hoá."
module: "Kho hàng"
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

Chi phí phát sinh để đưa hàng về kho (vận chuyển, bốc xếp, phí cầu đường…) được cộng vào **giá nhập** của hàng hoá. Trên ERP, chi phí này được ghi bằng **phiếu mua dịch vụ** ([HƯỚNG DẪN LẬP PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-1-huong-dan-lap-phieu-mua-dich-vu/)) rồi **phân bổ** vào từng dòng hàng của **phiếu nhập kho** ở tab **CHI PHÍ**.

Sau khi phân bổ và lưu phiếu nhập, **giá nhập** trên Sổ cái kho của từng mặt hàng tăng thêm phần chi phí được chia, nên **giá vốn** phản ánh đủ chi phí mua.

Hai nguồn chi phí:

- **Chứng từ chi phí**: phiếu mua dịch vụ đã lập (thường là cước vận chuyển của đơn vị vận tải).
- **Lấy chi phí của phiếu này**: các dòng **Là chi phí** nằm ngay trong phiếu nhập (lấy từ phiếu mua hàng).

> Các chức năng hiển thị tùy quyền tài khoản. Nội dung và ảnh được biên soạn từ bộ tài liệu hiện có; cần đối chiếu với màn hình đang sử dụng trước khi áp dụng.

## 1. Chuẩn bị trước khi thực hiện

- Có quyền **Phân bổ chi phí** và quyền **Thêm mới** / **Cập nhật** phiếu nhập kho.
- Phiếu nhập kho đang lập ([HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/)) hoặc đã lưu nhưng **chưa được chi tiền**.
- Chi phí cần phân bổ đã có **phiếu mua dịch vụ** trong chi nhánh ([HƯỚNG DẪN LẬP PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-1-huong-dan-lap-phieu-mua-dich-vu/)), còn số chưa phân bổ; hoặc phiếu nhập có dòng **Là chi phí**.

## 2. Mở chức năng

**Kho hàng → Phiếu nhập kho → Thêm mới (hoặc Sửa) → tab CHI PHÍ**

## 3. Nhận biết màn hình

**Tab CHI PHÍ trong cửa sổ phiếu nhập kho:**

![Hình 1: Tab CHI PHÍ của phiếu nhập kho](/posts/2026-11-07-kho-a04-3-huong-dan-phan-bo-chi-phi-vao-phieu-nhap-kho/hinh-01-tab-chi-phi.png)

- **Tab CHI PHÍ**: Ý nghĩa: Danh sách chứng từ chi phí dùng cho phiếu nhập này
- **Lưới chi phí**: Ý nghĩa: Mỗi dòng một chứng từ chi phí
- **Chứng từ chi phí**: Ý nghĩa: Chọn phiếu mua dịch vụ để thêm vào lưới
- **Phân bổ chi phí**: Ý nghĩa: Mở cửa sổ chia chi phí cho các dòng hàng
- **Lưu lại / Đóng**: Ý nghĩa: Lưu phiếu nhập / đóng không lưu

Các cột của lưới chi phí:

- **STT**: Ý nghĩa: Số thứ tự
- **Ngày phát sinh**: Ý nghĩa: Ngày của chứng từ chi phí
- **Mã phiếu**: Ý nghĩa: Mã phiếu mua dịch vụ (hoặc mã phiếu nhập với chi phí lấy từ chính phiếu)
- **Nhà cung cấp**: Ý nghĩa: NCC dịch vụ
- **Tổng chi phí**: Ý nghĩa: Tổng tiền chứng từ **trước VAT**
- **Lũy kế số đã phân bổ**: Ý nghĩa: Phần đã phân bổ vào các phiếu nhập khác trước đó
- **Số phân bổ lần này**: Ý nghĩa: **Nhập / sửa** – phần chi phí dùng cho phiếu nhập này
- **Thao tác**: Ý nghĩa: Nút thùng rác (bỏ chứng từ khỏi phiếu)

**Cửa sổ chọn chứng từ chi phí:** tiêu đề **CHỌN CHỨNG TỪ CHI PHÍ**, khoảng ngày mặc định **Hôm nay**, cột **Ngày mua hàng**, **Mã phiếu**, **Nhà cung cấp**, **Ghi chú**, **Tổng chi phí**, **Lũy kế số đã phân bổ**; tick chọn nhiều dòng; nút **Đồng ý** / **Hủy**.

**Cửa sổ phân bổ:**

![Hình 2: Cửa sổ PHÂN BỔ CHI PHÍ](/posts/2026-11-07-kho-a04-3-huong-dan-phan-bo-chi-phi-vao-phieu-nhap-kho/hinh-02-cua-so-phan-bo-chi-phi.png)

- **Ô cách phân bổ**: Ý nghĩa: **Tỷ lệ % theo số lượng** (mặc định), **Tỷ lệ % theo giá trị**, **Tự nhập %**, **Tự nhập giá trị**
- **Phân bổ**: Ý nghĩa: Tính chi phí cho từng dòng theo cách đã chọn
- **Tổng chi phí: (góc trên phải)**: Ý nghĩa: Tổng **Số phân bổ lần này** của tab CHI PHÍ – số cần chia
- **Lưới hàng**: Ý nghĩa: **Hàng hóa**, **Kiện**, **M³**, **Số lượng**, **Thành tiền**, **Tỷ lệ (%)**, **Chi phí (đ)** (kéo thanh cuộn ngang để thấy hai cột cuối), dòng **TỔNG CỘNG** – chỉ gồm dòng hàng **không** là chi phí
- **Đồng ý / Hủy**: Ý nghĩa: Ghi chi phí vào các dòng hàng / bỏ qua
- **Dòng chữ đỏ ở chân cửa sổ**: Ý nghĩa: Báo tổng chi phí chưa hợp lệ, ví dụ **Tổng chi phí: 0đ, không hợp lệ!** khi tab CHI PHÍ chưa có chứng từ

## 4. Trình tự công việc

Sơ đồ đường vào chức năng:

```text
Kho hàng
   ↓
Phiếu nhập kho → Thêm mới → Nhập mua hàng (hoặc Sửa phiếu)
   ↓
Tab CHI PHÍ → Chứng từ chi phí → Phân bổ chi phí
```

```text
cửa sổ phiếu nhập kho (thêm mới hoặc sửa) → tab CHI PHÍ
      ↓
Lấy nguồn chi phí:
   ├── Chứng từ chi phí → CHỌN CHỨNG TỪ CHI PHÍ → tick phiếu mua dịch vụ → Đồng ý
   └── Chuột phải lưới → Lấy chi phí của phiếu này (dòng "Là chi phí")
      ↓
Sửa "Số phân bổ lần này" nếu chỉ dùng một phần chi phí
      ↓
Phân bổ chi phí → chọn cách → Phân bổ → (Tự nhập: sửa từng dòng) → Đồng ý
      ↓
Tab HÀNG HÓA: cột Chi phí, Giá trị nhập cập nhật
      ↓
Lưu lại ── tổng chi phí dòng ≠ tổng số phân bổ? ──► phân bổ lại
      ↓
"Lưu thành công" → giá nhập trên sổ cái kho tăng · lũy kế phân bổ phiếu dịch vụ tăng
```

### Bước 1 – Mở tab CHI PHÍ

Trong cửa sổ phiếu nhập kho (đã nạp hàng từ phiếu mua – [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/), hoặc **Sửa** phiếu đã lưu), bấm tab **CHI PHÍ**. Chân cửa sổ đổi thành **Chứng từ chi phí** và **Phân bổ chi phí**.

⚠️ Lưới chi phí lúc mở chỉ thấy **STT**, **Ngày phát sinh**, **Mã phiếu**, **Nhà cung cấp**, **Thao tác** (Hình 1): cột **Nhà cung cấp** rộng nên **Tổng chi phí**, **Lũy kế số đã phân bổ**, **Số phân bổ lần này** nằm bên phải. Sau khi thêm chứng từ, **kéo thanh cuộn ngang ở đáy lưới** sang phải để thấy và sửa các cột này (không cần **Khôi phục bố cục**).

### Bước 2 – Thêm chứng từ chi phí

1. Bấm **Chứng từ chi phí**. Cửa sổ **CHỌN CHỨNG TỪ CHI PHÍ** mở ra.
2. Đổi khoảng ngày cho chứa ngày của phiếu mua dịch vụ (mặc định hôm nay).
3. Tick các phiếu cần dùng, bấm **Đồng ý**.

Mỗi phiếu được thêm thành một dòng, **Số phân bổ lần này** = tổng chi phí trước VAT trừ phần đã phân bổ trước đó. Phiếu đã phân bổ hết hoặc đã có trong lưới sẽ không được thêm lại.

**Cách khác – chi phí nằm trong chính phiếu:** nếu phiếu mua hàng có dòng **Là chi phí** (ví dụ cước vận chuyển NCC tính chung hoá đơn), chuột phải vào vùng lưới → **Lấy chi phí của phiếu này**. Hệ thống cộng thành tiền trước VAT của các dòng đó thành một dòng chi phí. Không có dòng nào thì báo **Phiếu này không có chi phí để lấy.**

### Bước 3 – (Tuỳ chọn) Sửa số phân bổ lần này

Một phiếu dịch vụ dùng cho nhiều lần nhập (ví dụ một chuyến xe chở hàng của hai phiếu nhập): bấm ô **Số phân bổ lần này** và nhập phần dành cho phiếu này. Số phải **lớn hơn 0** và **không vượt** phần còn lại (Tổng chi phí − Lũy kế số đã phân bổ). Dòng lấy từ chính phiếu phải giữ **bằng** Tổng chi phí.

### Bước 4 – Phân bổ cho từng dòng hàng

1. Bấm **Phân bổ chi phí**. Cửa sổ **PHÂN BỔ CHI PHÍ** mở ra (Hình 2), góc trên phải hiện **Tổng chi phí:** cần chia. Nếu tab CHI PHÍ chưa có chứng từ, chân cửa sổ báo chữ đỏ **Tổng chi phí: 0đ, không hợp lệ!** – bấm **Hủy**, quay lại bước 2.
2. Chọn cách phân bổ:

- **Tỷ lệ % theo số lượng**: Hệ thống làm gì: Chia theo tỉ lệ Số lượng của từng dòng
- **Tỷ lệ % theo giá trị**: Hệ thống làm gì: Chia theo tỉ lệ Thành tiền của từng dòng
- **Tự nhập %**: Hệ thống làm gì: Bạn nhập **Tỷ lệ (%)** từng dòng, hệ thống tính **Chi phí (đ)**
- **Tự nhập giá trị**: Hệ thống làm gì: Bạn nhập **Chi phí (đ)** từng dòng, hệ thống tính **Tỷ lệ (%)**

3. Bấm **Phân bổ**  (với **Tự nhập %**: nhập tỷ lệ rồi bấm **Phân bổ**; với **Tự nhập giá trị**: nhập trực tiếp ô Chi phí).
4. Kiểm tra tổng cột **Chi phí (đ)** bằng **Tổng chi phí**. Chi phí từng dòng được **làm tròn tới đồng**, nên tổng có thể lệch 1–2 đồng: chuyển sang **Tự nhập giá trị** và sửa một dòng cho khớp.
5. Bấm **Đồng ý**. Nếu tổng chưa khớp, cửa sổ báo **Tổng <Chi phí> phân bổ cho các mặt hàng phải bằng <Tổng chi phí>**.

### Bước 5 – Kiểm tra tab HÀNG HÓA và lưu

1. Quay lại tab **HÀNG HÓA**: cột **Chi phí** của từng dòng đã có số, **Giá trị nhập** tăng tương ứng. Có thể sửa tay cột **Chi phí** (chuột phải → **Áp dụng cho những dòng dưới** để chép xuống).
2. Bấm **Lưu lại**.
   - Tổng cột **Chi phí** khác tổng **Số phân bổ lần này**: cảnh báo **Chi phí chưa được phân bổ hoặc số phân bổ chưa hợp lệ.** – làm lại bước 4.
   - Hợp lệ: **Lưu thành công**.

## 6. Giải thích các thông tin trên màn hình

- **Ngày phát sinh**: Ý nghĩa: Ngày chứng từ chi phí; Lưu ý: Chỉ xem
- **Mã phiếu**: Ý nghĩa: Mã phiếu mua dịch vụ / phiếu nhập; Lưu ý: Chỉ xem
- **Nhà cung cấp**: Ý nghĩa: NCC dịch vụ; Lưu ý: Chỉ xem
- **Tổng chi phí**: Ý nghĩa: Tổng tiền chứng từ trước VAT; Lưu ý: Chỉ xem
- **Lũy kế số đã phân bổ**: Ý nghĩa: Đã phân bổ cho các phiếu nhập khác; Lưu ý: Chỉ xem
- **Số phân bổ lần này**: Ý nghĩa: Phần chi phí cho phiếu nhập này; Bắt buộc: Có; Lưu ý: > 0, ≤ Tổng − Lũy kế
- **Tỷ lệ (%)**: Ý nghĩa: Phần trăm chi phí của dòng hàng; Lưu ý: Sửa được khi chọn **Tự nhập %**
- **Chi phí (đ)**: Ý nghĩa: Số tiền chi phí của dòng hàng; Lưu ý: Sửa được khi chọn **Tự nhập giá trị**; ≥ 0
- **Chi phí (tab HÀNG HÓA)**: Ý nghĩa: Chi phí đã phân bổ cho dòng; Lưu ý: ≥ 0; tổng phải bằng tổng Số phân bổ lần này
- **Giá trị nhập**: Ý nghĩa: Số lượng × đơn giá × (1 − chiết khấu) + chi phí; Lưu ý: Tự tính

## 7. Kiểm tra sau khi thực hiện

- Phiếu nhập kho lưu kèm danh sách chứng từ chi phí và chi phí từng dòng hàng.
- **Giá nhập** trên Sổ cái kho của từng mặt hàng = đơn giá sau chiết khấu + chi phí dòng ÷ số lượng; giá vốn tính lại từ ngày nhập.
- **Lũy kế số đã phân bổ** của phiếu mua dịch vụ tăng; phần còn lại dùng được cho phiếu nhập khác.
- Công nợ NCC **không** thay đổi do phân bổ (công nợ dịch vụ đã ghi khi lưu phiếu mua dịch vụ).

## 8. Những điều cần lưu ý

⚠️ Với **Lấy chi phí của phiếu này**, cộng kiểm riêng các dòng Là chi phí trước VAT. Ghi chú nguồn cho thấy bộ đệm dòng có thể làm bỏ sót số cộng; nếu tổng gợi ý khác chứng từ, dừng và báo kế toán/IT. Không tạo thêm phiếu dịch vụ cho cùng khoản để bù số thiếu.

⚠️ **Chi phí phân bổ tính trước VAT.** Thuế VAT của phiếu dịch vụ không cộng vào giá nhập.

⚠️ Cửa sổ **CHỌN CHỨNG TỪ CHI PHÍ** hiện cột **Tổng chi phí** theo tổng tiền phiếu dịch vụ, còn số đưa vào phân bổ là tiền **trước VAT** – hai số có thể khác nhau.

⚠️ Một phiếu mua dịch vụ có thể chia cho nhiều phiếu nhập, nhưng **tổng các lần phân bổ không vượt** tổng tiền trước VAT của phiếu đó.

⚠️ Phân bổ chỉ chia cho dòng hàng **không** đánh dấu **Là chi phí**.

⚠️ Không sửa được phiếu nhập đã được chi tiền, nên cần phân bổ **trước khi** kế toán lập phiếu chi.

### "Chi phí chưa được phân bổ hoặc số phân bổ chưa hợp lệ." 

Nguyên nhân: tổng cột **Chi phí** ở tab HÀNG HÓA khác tổng **Số phân bổ lần này** ở tab CHI PHÍ (đã thêm chứng từ nhưng chưa phân bổ, hoặc sửa tay lệch).
Cách xử lý: bấm **Phân bổ chi phí** chia lại, hoặc sửa cột Chi phí cho khớp; bỏ chứng từ không dùng bằng biểu tượng thùng rác.

### Cửa sổ PHÂN BỔ CHI PHÍ báo "Tổng chi phí: 0đ, không hợp lệ!" 

Nguyên nhân: tab CHI PHÍ chưa có chứng từ chi phí (hoặc Số phân bổ lần này bằng 0).
Cách xử lý: bấm **Hủy**, thêm chứng từ bằng **Chứng từ chi phí** (bước 2) rồi mở lại **Phân bổ chi phí**.

### "Tổng <Chi phí> phân bổ cho các mặt hàng phải bằng <Tổng chi phí>" 

Nguyên nhân: tổng chi phí các dòng trong cửa sổ phân bổ chưa bằng tổng cần chia (thường lệch do làm tròn).
Cách xử lý: chọn **Tự nhập giá trị**, sửa một dòng cho tổng khớp, rồi **Đồng ý**.

### "<số dòng>. Số phân bổ lần này không được lớn <số>." / "… phải lớn hơn 0." / "… phải bằng <số>." 

Nguyên nhân: số phân bổ vượt phần còn lại, bằng 0, hoặc dòng chi phí lấy từ chính phiếu bị sửa khác tổng.
Cách xử lý: nhập lại trong giới hạn được báo.

### "CẢNH BÁO – Lỗi thêm: <mã phiếu>, Tổng chi phí phân bổ <số> > Tổng tiền (trước VAT) <số>." 

Nguyên nhân: phiếu dịch vụ đã được phân bổ ở phiếu nhập khác trong lúc bạn đang lập, tổng vượt tiền trước VAT.
Cách xử lý: mở lại cửa sổ, chọn lại chứng từ để lấy số còn lại mới.

### Không thấy tab CHI PHÍ 

Nguyên nhân: chưa có quyền **Phân bổ chi phí**.
Cách xử lý: liên hệ quản trị hệ thống.

### "Phiếu này không có chi phí để lấy." 

Nguyên nhân: phiếu nhập không có dòng **Là chi phí**, hoặc đã lấy rồi.
Cách xử lý: dùng **Chứng từ chi phí** để chọn phiếu mua dịch vụ.

## 10. Câu hỏi thường gặp

**Nên chọn cách phân bổ nào?**
Chi phí vận chuyển thường chia **theo số lượng** (hoặc theo khối, nhập **Tự nhập %**); chi phí như bảo hiểm thường chia **theo giá trị**. Theo quy định của kế toán.

**Phân bổ sau khi đã lưu phiếu nhập được không?**
Được, bấm **Sửa** phiếu nhập → tab **CHI PHÍ**, miễn là phiếu chưa được chi tiền.

**Bỏ một chứng từ chi phí đã phân bổ thì sao?**
Xoá dòng ở tab CHI PHÍ, rồi phân bổ lại cho tổng mới (hoặc đặt cột Chi phí về 0) trước khi lưu.

## 11. Công việc tiếp theo

```text
Phân bổ chi phí vào phiếu nhập kho
        ↓
Kiểm tra giá nhập: Sổ cái kho (KHO-A09.0) · Xuất nhập tồn (KHO-C07.0)
        ↓
In phiếu nhập có giá (KHO-A04.4)
```

**Tiếp theo:** [HƯỚNG DẪN IN PHIẾU NHẬP KHO VÀ TEM KIỆN](/bai-viet/2026-11-07-kho-a04-4-huong-dan-in-phieu-nhap-kho-va-tem-kien/) – Hướng dẫn in phiếu nhập kho và tem kiện.

## 12. Bài hướng dẫn liên quan

Xem thêm:

- [TỔNG QUAN MÀN HÌNH PHIẾU NHẬP KHO](/bai-viet/2026-11-07-kho-a04-0-tong-quan-man-hinh-phieu-nhap-kho/) – Tổng quan màn hình Phiếu nhập kho
- [HƯỚNG DẪN NHẬP KHO HÀNG MUA TỪ PHIẾU MUA HÀNG](/bai-viet/2026-11-07-huong-dan-nhap-kho-hang-mua/) – Hướng dẫn nhập kho hàng mua từ phiếu mua hàng
- [HƯỚNG DẪN LẬP PHIẾU MUA DỊCH VỤ](/bai-viet/2026-11-07-mh-a02-1-huong-dan-lap-phieu-mua-dich-vu/) – Hướng dẫn lập phiếu mua dịch vụ
- [TỔNG QUAN MÀN HÌNH SỔ CÁI KHO](/bai-viet/2026-11-07-kho-a09-0-tong-quan-man-hinh-so-cai-kho/) – Tổng quan màn hình Sổ cái kho
- [TỔNG QUAN MÀN HÌNH THỐNG KÊ XUẤT NHẬP TỒN](/bai-viet/2026-11-07-kho-c07-0-tong-quan-man-hinh-thong-ke-xuat-nhap-ton/) – Tổng quan màn hình Xuất nhập tồn
