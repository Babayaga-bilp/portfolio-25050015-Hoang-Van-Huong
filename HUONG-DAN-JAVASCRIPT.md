# Hiểu JavaScript trong portfolio của bạn

JavaScript (JS) khác Java. Trong bài này, HTML tạo nội dung, CSS tạo kiểu dáng, JavaScript phản hồi thao tác của người dùng. File cần mở khi học là js/script.js.

## Đọc những từ khóa trước

| Cú pháp | Hiểu đơn giản |
| --- | --- |
| const | Đặt tên cho một giá trị không cần gán lại |
| let | Đặt tên cho giá trị sẽ được gán lại |
| document | Trang HTML hiện tại |
| querySelector('#ten') | Tìm phần tử có id="ten" |
| querySelectorAll('a') | Tìm tất cả thẻ a |
| addEventListener | Chờ một loại sự kiện xảy ra |
| function | Một nhóm lệnh được đặt tên hoặc dùng làm hàm xử lý |
| classList | Danh sách class của một phần tử |
| textContent | Nội dung chữ của phần tử |
| if | Chỉ làm việc gì đó nếu điều kiện đúng |
| return | Trả về kết quả và dừng hàm hiện tại |
| === | So sánh bằng, không tự chuyển kiểu dữ liệu |
| ! | Đảo điều kiện đúng thành sai hoặc ngược lại |

DOM là cách trình duyệt biểu diễn các thẻ HTML thành phần tử để JavaScript tìm và thay đổi. Event là sự kiện như bấm chuột, nhập chữ, gửi form.

## 1. Menu trên điện thoại

Luồng hoạt động: bấm nút → JS thêm class is-open vào menu → CSS cho menu hiện ra. Bấm lần nữa → JS bỏ class đó → menu ẩn đi.

```js
const menuButton = document.querySelector('#menu-toggle');
const menu = document.querySelector('#main-menu');
```

Dòng đầu tìm nút có id menu-toggle. Dòng sau tìm thanh điều hướng có id main-menu. Dấu # nghĩa là chọn theo id, tương tự CSS.

```js
menuButton.addEventListener('click', function () {
  const isOpen = menu.classList.toggle('is-open');
});
```

Đây là bản rút gọn để học; file thật có thêm các thuộc tính hỗ trợ tiếp cận. addEventListener đăng ký hàm xử lý, không chạy hàm ngay. Khi bấm nút, toggle thêm hoặc bỏ class. Biến isOpen nhận true khi class có mặt, false khi class đã bị bỏ.

CSS liên quan:

```css
.nav { display: none; }
.nav.is-open { display: flex; }
```

Trong file thật, quy tắc này nằm trong media query max-width:800px, nên chỉ áp dụng trên màn hình nhỏ. Trên desktop, menu luôn hiện và nút mobile ẩn.

setAttribute cập nhật thuộc tính HTML. aria-expanded báo menu đang mở hay đóng cho công cụ đọc màn hình; aria-label đặt tên dễ hiểu cho nút chỉ có biểu tượng. Đây không phải lệnh tạo kiểu.

closeMenu là hàm dùng chung để đóng menu. Mỗi liên kết được gắn sự kiện click bằng forEach (lần lượt làm với từng phần tử). Escape, bấm ngoài menu và chuyển sang desktop cũng gọi hàm này. contains kiểm tra người dùng có bấm bên trong phần tử không. focus đưa tiêu điểm bàn phím về nút menu khi bấm Escape.

## 2. Chế độ sáng và tối

Luồng hoạt động: bấm nút → JS chọn tên giao diện mới → thêm thuộc tính data-theme lên html → CSS dùng bộ màu tương ứng.

```js
const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
```

Dấu ? : là toán tử điều kiện. Có thể đọc: “Nếu hiện tại là dark thì chọn light, ngược lại chọn dark”. Viết dài hơn sẽ là:

```js
let nextTheme;
if (currentTheme === 'dark') {
  nextTheme = 'light';
} else {
  nextTheme = 'dark';
}
```

Hàm applyTheme thực hiện 4 việc: đặt data-theme, kiểm tra có phải tối không, cập nhật tên/trạng thái nút và thay biểu tượng. document.documentElement chính là thẻ html.

CSS định nghĩa các biến màu ban đầu trong :root. Khi html có data-theme="dark", CSS ghi đè các biến đó. JS không cần đổi màu từng phần tử.

localStorage.setItem lưu lựa chọn trên chính trình duyệt đang dùng; getItem đọc lại khi tải trang. Dữ liệu này không gửi lên máy chủ. try/catch xử lý trường hợp trình duyệt chặn lưu trữ: giao diện vẫn đổi nhưng lựa chọn có thể không được nhớ khi tải lại.

## 3. Kiểm tra form liên hệ

Luồng hoạt động: bấm nút → chặn tải lại trang → kiểm tra từng ô → hiện lỗi và focus ô sai đầu tiên, hoặc báo dữ liệu hợp lệ.

```js
contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
});
```

submit là sự kiện của form, có thể phát sinh khi bấm nút hoặc bấm Enter trong ô nhập. preventDefault chặn hành vi gửi form mặc định. Form có novalidate để JS tự kiểm tra và hiển thị lỗi tiếng Việt, thay vì dùng hộp báo lỗi mặc định của trình duyệt.

Mảng fields chứa 3 id: name, email, message. forEach lần lượt lấy từng ô bằng getElementById rồi gọi getError.

Hàm getError lấy field.value (giá trị người dùng nhập), rồi trim để bỏ khoảng trắng hai đầu. Ô chỉ có dấu cách được xem là trống. Nếu trống, trả về câu báo lỗi. Nếu là email, kiểm tra bằng mẫu sau:

```js
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

Đây là biểu thức chính quy đơn giản: phải có phần trước @, phần tên miền và dấu chấm, không chứa khoảng trắng hoặc thêm dấu @. Dấu ^ và $ yêu cầu kiểm tra toàn chuỗi; dấu + nghĩa là có ít nhất một ký tự; \s là khoảng trắng; \. là dấu chấm thật. test(value) trả về true nếu khớp. Dấu ! đảo lại: không khớp thì báo lỗi. Mẫu này đủ cho bài thực hành phổ thông, không xác minh hộp thư có tồn tại và không bao phủ mọi địa chỉ email đặc biệt.

Nếu không có lỗi, getError trả về '' (chuỗi rỗng). showError điền nội dung vào p báo lỗi ngay dưới ô tương ứng, rồi đặt aria-invalid để CSS đổi màu viền và công cụ đọc màn hình biết ô đó sai.

firstInvalidField bắt đầu bằng null, nghĩa là chưa có ô lỗi. Khi gặp lỗi đầu tiên, lưu ô đó. Sau khi kiểm tra hết, nếu có ô lỗi thì focus vào ô đó và return để dừng phần xử lý thành công.

Nếu mọi ô đúng, thông báo nói rõ dữ liệu hợp lệ nhưng chưa gửi đi. Code KHÔNG có chức năng gửi email.

Sự kiện input chạy khi nhập hoặc xóa ký tự. Code xóa thông báo kết quả cũ; với ô đã từng kiểm tra, lỗi được cập nhật ngay khi sửa. Như vậy website không giữ thông báo “hợp lệ” sau khi người dùng xóa dữ liệu.

## Phần nào không dùng JavaScript?

- Link menu tới section: HTML href="#...".
- Cuộn mượt: CSS scroll-behavior.
- Hover và chuyển động: CSS transition, transform, animation.
- Ghi chú dự án mở/đóng: HTML details/summary.
- Bố cục điện thoại: CSS media queries.

## Tự thực hành để hiểu

1. Thu nhỏ trình duyệt dưới 800px, mở menu và quan sát class is-open trong công cụ Inspect.
2. Đổi câu báo lỗi “Bạn hãy điền thông tin này nhé.” rồi thử gửi form rỗng.
3. Thử nhập email sai, sau đó sửa thành ban@example.com và xem lỗi biến mất.
4. Đổi biểu tượng trong applyTheme rồi bấm sáng/tối.
5. Tìm quy tắc html[data-theme="dark"] trong CSS và thay một màu nền.

Lưu file rồi tải lại trình duyệt sau mỗi thay đổi. Mỗi lần chỉ sửa một điều để biết chính xác đoạn code nào tạo ra thay đổi đó.

## Cách diễn giải khi thuyết trình

“Em dùng querySelector để lấy các phần tử từ DOM, addEventListener để xử lý sự kiện. Menu dùng classList.toggle để đổi class, còn CSS quyết định hiển thị. Nút sáng/tối đổi data-theme và lưu lựa chọn vào localStorage. Form dùng sự kiện submit, chặn hành vi mặc định, kiểm tra dữ liệu rồi hiển thị lỗi bằng textContent. Form hiện chỉ kiểm tra ở trình duyệt, chưa gửi email.”
