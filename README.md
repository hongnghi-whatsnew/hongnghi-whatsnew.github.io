# Trang Thông báo tính năng mới — PM ERP

Website tĩnh thông báo các **tính năng mới của phần mềm PM ERP** (MDF Gia Phúc / Hồng Nghĩa).
Cập nhật hàng tuần; gửi 1 đường link cho nhân viên vào xem.

- **Công nghệ:** trang tĩnh tạo bằng **Node thuần** — **KHÔNG cần `npm install`**, không có `node_modules`.
- Mỗi bài viết = 1 file Markdown trong `content/posts/` + (tuỳ chọn) file đính kèm trong `public/posts/`.
- Hỗ trợ: **nhúng video YouTube**, **xem PDF trực tiếp** (Word/slide xuất ra PDF), hoặc bài chỉ có chữ.
- Kết quả build là HTML tĩnh trong `dist/`, deploy lên **IIS**.

> 📄 Hướng dẫn đăng bài hàng tuần (cho người vận hành): xem **HUONG-DAN-DANG-BAI.md**.

## Yêu cầu

- **Node.js 18+** (khuyến nghị 20). Kiểm tra: `node --version`.
- Không cần cài thư viện nào.

## Lệnh thường dùng

| Lệnh | Tác dụng |
|------|----------|
| `npm run dev` | Server xem thử tại http://localhost:4321, tự build lại khi sửa file |
| `npm run build` | Build ra thư mục `dist/` (HTML tĩnh để đưa lên IIS) |
| `npm run new-post` | Tạo nhanh khung một bài viết mới |

**Trang quản trị (Thêm / Sửa / Xoá bằng nút bấm):** sau khi chạy `npm run dev`, mở
**http://localhost:4321/admin**. Cho phép thêm/sửa/xoá bài và tải lên PDF/slide/file gốc;
mọi thay đổi ghi thẳng vào `content/posts/` + `public/posts/`. Trang này **chỉ chạy cục bộ**,
không nằm trong `dist/` nên không bao giờ bị deploy ra web thật. Xuất bản vẫn bằng `git push`.

Không dùng npm cũng được — chạy thẳng: `node build.mjs`, `node serve.mjs --watch`, `node scripts/new-post.mjs`.

## Cấu trúc dự án

```
mdf-whatsnew/
├─ build.mjs              # Bộ tạo trang (đọc Markdown -> ghi HTML ra dist/)
├─ serve.mjs              # Server xem thử cục bộ (+ --watch tự build lại) + trang /admin
├─ site.config.mjs        # Tên trang, tiêu đề, tên miền, tên công ty (sửa ở đây)
├─ content/posts/         # ⭐ MỖI BÀI VIẾT LÀ 1 FILE .md Ở ĐÂY
│  └─ _TEMPLATE.md        # Mẫu để tham khảo
├─ public/                # Copy nguyên trạng vào dist/
│  ├─ web.config          # Cấu hình IIS (MIME, URL sạch, cache, header, mật khẩu)
│  ├─ assets/             # styles.css + logo
│  └─ posts/<tên-bài>/    # File đính kèm (PDF, ảnh, file gốc) theo từng bài
├─ lib/                   # Mã nguồn nội bộ (markdown, frontmatter, template, tiện ích)
│  ├─ admin.mjs           # API Thêm/Sửa/Xoá cho trang quản trị (chỉ chạy local)
│  └─ admin-ui.html       # Giao diện trang /admin
├─ scripts/
│  ├─ new-post.mjs        # Tạo bài mới
│  └─ deploy.ps1          # Deploy lên IIS (Windows PowerShell)
└─ dist/                  # Kết quả build (KHÔNG commit; tạo lại bằng build)
```

## Frontmatter của bài viết

Phần đầu mỗi file `.md`, nằm giữa hai dấu `---`:

| Trường | Bắt buộc | Ý nghĩa |
|--------|----------|---------|
| `title` | ✅ | Tiêu đề |
| `date` | ✅ | Ngày đăng, dạng `YYYY-MM-DD` |
| `summary` | nên có | Tóm tắt ở trang danh sách |
| `mediaType` | ✅ | `video` \| `pdf` \| `slide` \| `none` |
| `youtubeId` | nếu video | 11 ký tự sau `watch?v=` |
| `pdfFile` | nếu pdf/slide | Vd `/posts/<tên-bài>/huong-dan.pdf` |
| `originalFile` | tuỳ chọn | File gốc cho nút tải về (Word/PPT) |
| `tags` | tuỳ chọn | Vd `["Báo cáo", "Công nợ"]` |
| `pinned` | tuỳ chọn | `true` để ghim lên đầu |
| `draft` | tuỳ chọn | `true` để tạm ẩn (không xuất bản) |

Nếu khai báo sai, lệnh `build` sẽ **báo lỗi rõ ràng** thay vì đăng bài hỏng.

## Triển khai lên IIS

1. Build: `node build.mjs` → tạo thư mục `dist/`.
2. Copy **toàn bộ** nội dung `dist/` vào thư mục site IIS (vd `D:\inetpub\mdf-whatsnew`).
   File `web.config` đã nằm sẵn trong `dist/`.
3. Hoặc dùng script tự động — sửa `$SitePath` trong `scripts/deploy.ps1` cho đúng, rồi chạy **trên máy chủ**:
   ```
   powershell -ExecutionPolicy Bypass -File scripts\deploy.ps1
   ```
   Script sẽ build → copy sang thư mục tạm → **đổi thư mục kiểu atomic** → giữ 3 bản backup để rollback.

### Tự động deploy khi `git push` (tuỳ chọn)

Cài **self-hosted runner** (GitHub Actions hoặc Azure DevOps) **ngay trên máy chủ IIS**,
cấu hình để mỗi lần push vào nhánh chính sẽ chạy `scripts/deploy.ps1`. Khi đó người vận
hành chỉ cần `git push` (Bước 5 trong HUONG-DAN-DANG-BAI.md) là web tự cập nhật.

## Bảo vệ bằng mật khẩu chung (IIS Basic Authentication)

Cách bảo vệ **toàn bộ** trang (kể cả file PDF/đính kèm) bằng **một mật khẩu dùng chung**:

1. **Server Manager** → Add Roles/Features → cài **Basic Authentication** cho IIS.
2. Tạo **một tài khoản Windows** dùng chung (vd `mdf-readonly`) kèm mật khẩu; cấp quyền **Read** trên thư mục site.
3. **IIS Manager** → chọn site → **Authentication**: **bật** Basic Authentication, **tắt** Anonymous Authentication.
   (Hoặc bỏ chú thích khối `<security>` trong `web.config` nếu section đã được mở khoá.)
4. **Bắt buộc dùng HTTPS** — `web.config` đã tự ép chuyển HTTP → HTTPS.
5. **Đổi mật khẩu** = đổi mật khẩu của tài khoản Windows đó.

> Nhược điểm: trình duyệt hiện **hộp đăng nhập mặc định** (không tuỳ biến giao diện). Ưu điểm:
> chặn được mọi file, cấu hình một lần, đổi mật khẩu một chỗ.

## Lưu ý & rủi ro

- **YouTube:** dùng chế độ "Không công khai". Nếu **mạng công ty chặn YouTube**, embed sẽ
  không hiện — khi đó nên tải MP4 lên máy chủ hoặc dùng PDF/slide cho bài đó.
- **PDF:** nên xuất gọn (**< ~5 MB**) để mở nhanh trên điện thoại và không làm phình repo.
- **Tên file đính kèm:** chữ thường, không dấu, không khoảng trắng (`huong-dan.pdf`).
- **HTTPS:** cần chứng chỉ hợp lệ cho `mdfgiaphuc.com`. Chỉ bật HSTS (trong `web.config`)
  **sau khi** HTTPS đã chạy ổn định.
- **Không** thêm Service Worker / PWA cho trang này — để bản cập nhật thứ Hai luôn hiện ngay.
