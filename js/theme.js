// 主题系统
(function() {
  var saved = localStorage.getItem('pet-theme');
  if (saved) document.body.setAttribute('data-theme', saved);

  window.setTheme = function(theme) {
    if (theme === 'default') {
      document.body.removeAttribute('data-theme');
    } else {
      document.body.setAttribute('data-theme', theme);
    }
    localStorage.setItem('pet-theme', theme);
    document.querySelectorAll('.c-dot').forEach(function(el) {
      el.classList.toggle('active', el.getAttribute('data-theme') === theme);
    });
  };

  // 初始化圆点高亮
  document.addEventListener('DOMContentLoaded', function() {
    var current = saved || 'default';
    document.querySelectorAll('.c-dot').forEach(function(el) {
      el.classList.toggle('active', el.getAttribute('data-theme') === current);
    });
  });
})();
