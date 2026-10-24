# Portfolio sinh viên Công nghệ thông tin phiên bản 2

Website HTML, CSS và JavaScript thuần, dùng màu chủ đạo #A8B5A0. Không cần cài thư viện hoặc chạy build.

## Mở website

Mở file index.html bằng Chrome hoặc Edge. Giữ nguyên các thư mục css, js, images bên cạnh index.html. Có thể dùng Live Server trong VS Code nếu đã cài sẵn.

## Những file bạn cần biết

- index.html: nội dung, hình ảnh, cấu trúc các phần.
- css/style.css: màu sắc, bố cục, giao diện điện thoại và giao diện tối.
- js/script.js: 3 chức năng tương tác, có chú thích tiếng Việt.
- HUONG-DAN-JAVASCRIPT.md: giải thích và bài tập thực hành JavaScript.
- images/: nơi đặt ảnh thật của bạn và ảnh dự án.

## Điền nội dung của bạn

1. Trong index.html, tìm các đoạn đặt trong dấu [...], thay bằng thông tin thật. Sửa cả tên trên banner và phần giới thiệu.
2. Điền tên trường, định hướng, học vấn, hoạt động, email và liên kết cá nhân.
3. Mục tiêu ngắn hạn và kỹ năng hiện là nội dung gợi ý theo môn học. Chỉnh lại cho đúng năng lực, mục tiêu của bạn.
4. Chứng chỉ / giải thưởng: ghi thông tin thật hoặc “Chưa có”.
5. Dự án được để sẵn 2 khung trống theo yêu cầu, chưa phải 2 dự án hoàn chỉnh để chấm điểm. Điền tên, mô tả, công nghệ và ảnh trước khi nộp. Nếu có link thì thêm link thật.
6. Thay tiêu đề trong thẻ title và meta description nếu muốn cá nhân hóa thêm.

Không có nút sửa trực tiếp trên website; chỉnh nội dung bằng trình soạn thảo rồi lưu và tải lại trang.

## Thêm ảnh đại diện

Lưu ảnh của bạn vào images/avatar.jpg. Tìm div có class avatar-placeholder, thay toàn bộ div đó bằng:

```html
<img src="images/avatar.jpg" alt="Ảnh chân dung của [Tên bạn]">
```

Giữ nguyên khối profile-frame bao quanh ảnh.

## Thêm ảnh và liên kết dự án

Lưu ảnh dự án vào images/project-01.jpg. Trong khối project-image của dự án thứ nhất, thay các span bằng:

```html
<img src="images/project-01.jpg" alt="Giao diện [Tên dự án]">
```

Dự án thứ hai làm tương tự với project-02.jpg. Thêm liên kết sau phần mô tả, ví dụ (thay địa chỉ mẫu trước khi dùng):

```html
<a class="text-link" href="https://dia-chi-du-an-cua-ban.example" target="_blank" rel="noopener noreferrer">Xem dự án ↗</a>
```

Để thêm dự án, sao chép toàn bộ một article có class project-card trong projects-grid rồi sửa nội dung. Ghi chú “Ý tưởng / Khó khăn / Điều học được” dùng thẻ details của HTML, không dùng JavaScript.

## Đổi màu

Đổi biến --sage ở đầu css/style.css. Các biến --sage-light, --sage-dark là các sắc độ phối cùng. Nếu đổi màu, kiểm tra lại khả năng đọc ở cả giao diện sáng và tối.

## Các chức năng

- Menu mobile: hiện ở màn hình rộng tối đa 800px; đóng khi chọn mục, bấm ra ngoài hoặc bấm Escape.
- Sáng/tối: nút mặt trăng/mặt trời ở góc phải; lưu lựa chọn bằng localStorage khi trình duyệt cho phép.
- Form liên hệ: kiểm tra trường trống và định dạng email; focus vào ô lỗi đầu tiên; cập nhật lỗi khi sửa.
- Form chỉ là thực hành JavaScript, không kết nối máy chủ, không gửi email hay lưu lời nhắn.

## Đối chiếu tiêu chí trước khi nộp

- Có header, navbar và banner; menu dẫn đúng section.
- Điền đầy đủ thông tin cá nhân và thay ảnh đại diện.
- Mục tiêu nghề nghiệp và kỹ năng đúng với bản thân.
- Hoàn thiện học vấn, hoạt động / kinh nghiệm.
- Có tối thiểu 2 dự án THẬT đủ tên, mô tả, công nghệ và ảnh; link nếu có.
- Điền chứng chỉ / giải thưởng / sở thích.
- Kiểm tra desktop, tablet và mobile; không có thanh cuộn ngang.
- Thử menu, sáng/tối và form bằng chuột lẫn bàn phím.
- Code tách HTML/CSS/JS; thư mục images rõ ràng.

Có semantic HTML, Flexbox/Grid, media queries, hover/transition/transform/animation và hỗ trợ giảm chuyển động. Điểm sáng tạo đề xuất: phong cách sổ tay xanh sage, minh họa code bằng HTML/CSS và nhật ký dự án. Điểm thực tế phụ thuộc bài hoàn thiện và đánh giá của giảng viên.


## Điều chỉnh theo bố cục tham khảo

Bản này tham khảo cách chia bố cục trong bài tling-port: menu bo tròn, banner ảnh lớn, nội dung dạng card, các ô sở thích mở rộng và chứng chỉ riêng. Màu chủ đạo vẫn là #A8B5A0. Nội dung, ảnh, thành tích và dự án của người trong bài tham khảo không được đưa vào bản này.

Bản đầu tiên vẫn được giữ riêng. Bạn có thể dùng bản này nếu thích bố cục hồ sơ cá nhân rõ ràng hơn.

Banner hiện có một khung ảnh riêng, ngoài ảnh ở phần giới thiệu. Để thay ảnh banner, lưu images/banner.jpg rồi thay toàn bộ div class="portrait-placeholder" (gồm SVG và chữ bên trong) bằng:

```html
<img src="images/banner.jpg" alt="Ảnh của [Tên bạn]">
```

Có thể dùng cùng một ảnh cho cả banner và phần giới thiệu bằng cách dùng cùng đường dẫn. Giữ nguyên khối hero-portrait bên ngoài.

Ba ô sở thích đang là chỗ trống để bạn điền; các biểu tượng chỉ là trang trí, không khẳng định đó là sở thích của bạn. Nếu chỉ muốn hai ô, xóa một article class="hobby-card" rồi sửa số cột .hobby-grid nếu cần.

JavaScript giữ nguyên 3 chức năng để dễ học. Phần sở thích mở rộng dùng details/summary của HTML, không cần thêm JS.

Bản một file portfolio-sage-v2-xem-ngay.html gộp CSS/JS bên trong, dùng để mở nhanh. Khi học và nộp bài, dùng thư mục tách file này theo tiêu chí tổ chức source.

## Kiểm tra đã thực hiện

Đã kiểm tra cú pháp JavaScript, đường dẫn nội bộ, các file đi kèm và logic menu, sáng/tối, form trên DOM mô phỏng. Chưa kiểm tra bố cục bằng trình duyệt vì quyền mở bản xem trước trước đó bị từ chối. Cần tự kiểm tra giao diện trên desktop, tablet và mobile trước khi nộp.


## Thông tin nghề nghiệp

Mục Hành trình đã được thay bằng Thông tin nghề nghiệp (id career) theo bố cục bài tham khảo: nội dung bên trái và bốn ảnh bên phải. Nội dung khác giữ nguyên theo HTML bạn đã cung cấp.

Để thêm ảnh, đặt các ảnh vào images/career-01.jpg đến career-04.jpg. Thay toàn bộ div class="career-photo" tương ứng bằng:

```html
<img class="career-photo" src="images/career-01.jpg" alt="Mô tả hoạt động thật trong ảnh">
```

Sửa figcaption bên dưới ảnh. Chưa có kinh nghiệm làm việc có thể viết về học tập và hoạt động thật của bạn. Phần này chỉ dùng HTML/CSS, không thêm JavaScript.
