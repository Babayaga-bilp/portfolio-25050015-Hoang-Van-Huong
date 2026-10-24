// JAVASCRIPT CƠ BẢN — 3 chức năng, không cần thư viện.
// DOM: các phần tử HTML mà JavaScript có thể tìm và thay đổi.
// Event: sự kiện như click (bấm), input (nhập), submit (gửi form).

// 1. MENU ĐIỆN THOẠI
const menuButton = document.querySelector('#menu-toggle');
const menu = document.querySelector('#main-menu');

function closeMenu() {
  menu.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Mở menu');
}

menuButton.addEventListener('click', function () {
  // toggle: chưa có class thì thêm, có rồi thì bỏ. Kết quả là true hoặc false.
  const isOpen = menu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Đóng menu' : 'Mở menu');
});

// Bấm liên kết xong thì đóng menu để có thể đọc nội dung.
menu.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && menu.classList.contains('is-open')) {
    closeMenu();
    menuButton.focus();
  }
});

document.addEventListener('click', function (event) {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});

window.matchMedia('(min-width: 801px)').addEventListener('change', function (event) {
  if (event.matches) closeMenu();
});

// 2. CHUYỂN GIAO DIỆN SÁNG / TỐI
const themeButton = document.querySelector('#theme-toggle');
const themeIcon = document.querySelector('#theme-icon');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const isDark = theme === 'dark';
  themeButton.setAttribute('aria-pressed', String(isDark));
  themeButton.setAttribute('aria-label', isDark ? 'Bật giao diện sáng' : 'Bật giao diện tối');
  themeIcon.textContent = isDark ? '☀ Light' : '☾ Dark';
}

// localStorage lưu lựa chọn trong trình duyệt để lần sau vẫn giữ giao diện đó.
// try/catch giúp website vẫn chạy khi trình duyệt chặn lưu trữ.
try {
  const savedTheme = localStorage.getItem('portfolio-theme');
  applyTheme(savedTheme === 'dark' ? 'dark' : 'light');
} catch {
  applyTheme('light');
}

themeButton.addEventListener('click', function () {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  try {
    localStorage.setItem('portfolio-theme', nextTheme);
  } catch {
    // Không lưu được vẫn đổi giao diện cho lần xem hiện tại.
  }
});


// 4. MỞ / ĐÓNG CHI TIẾT SỞ THÍCH
const hobbyButtons =
  document.querySelectorAll('#hobbies .hobby-toggle');

hobbyButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    // Lấy id của phần nội dung được nút điều khiển.
    const contentId = button.getAttribute('aria-controls');
    const content = document.getElementById(contentId);

    // Kiểm tra nội dung đang mở hay đóng.
    const isExpanded =
      button.getAttribute('aria-expanded') === 'true';

    // Đang mở thì ẩn, đang đóng thì hiện.
    content.hidden = isExpanded;

    // Cập nhật trạng thái và chữ trên nút.
    button.setAttribute('aria-expanded', String(!isExpanded));
    button.textContent = isExpanded ? 'Chi tiết' : 'Thu gọn';
  });
});
// HIỆU ỨNG GÕ TÊN LẶP LẠI
(function () {
  const typingText = document.getElementById('typing-text');

  if (!typingText) return;

  // Giữ nguyên tên nếu người dùng bật giảm chuyển động.
  if (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return;
  }

  const characters = Array.from(typingText.textContent.trim());

  if (characters.length === 0) return;

  let index = 0;
  let isDeleting = false;

  typingText.textContent = '';

  function typeName() {
    if (!isDeleting) {
      // Hiện thêm một ký tự.
      index++;
      typingText.textContent = characters.slice(0, index).join('');

      if (index === characters.length) {
        isDeleting = true;
        setTimeout(typeName, 1500);
        return;
      }

      setTimeout(typeName, 100);
    } else {
      // Xóa bớt một ký tự.
      index--;
      typingText.textContent = characters.slice(0, index).join('');

      if (index === 0) {
        isDeleting = false;
        setTimeout(typeName, 500);
        return;
      }

      setTimeout(typeName, 60);
    }
  }

  setTimeout(typeName, 400);
})();
// THANH PHẦN TRĂM KỸ NĂNG
(function () {
  const skillRows = document.querySelectorAll('#skills .skill-row');

  function animateSkill(row) {
    const track = row.querySelector('.skill-track');
    const fill = row.querySelector('.skill-fill');
    const number = row.querySelector('.skill-percent');

    if (!track || !fill || !number) return;

    const target = Math.max(
      0,
      Math.min(100, Number(track.dataset.percent) || 0)
    );

    function update(value) {
      fill.style.width = value + '%';
      number.textContent = Math.round(value) + '%';
    }

    // Không chạy chuyển động nếu người dùng bật giảm chuyển động.
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      update(target);
      return;
    }

    const duration = 1500;
    let startTime = null;

    function frame(time) {
      if (startTime === null) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      update(target * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    }

    requestAnimationFrame(frame);
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateSkill(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    skillRows.forEach(function (row) {
      observer.observe(row);
    });
  } else {
    skillRows.forEach(animateSkill);
  }
})();

