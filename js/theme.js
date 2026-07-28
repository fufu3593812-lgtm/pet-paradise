// 主题系统
(function() {
  // 目前单色方案，后续可扩展
  var saved = localStorage.getItem('pet-theme');
  if (saved) document.body.setAttribute('data-theme', saved);

  window.setTheme = function(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('pet-theme', theme);
    document.querySelectorAll('.c-dot').forEach(function(el) {
      el.classList.toggle('active', el.getAttribute('data-theme') === theme);
    });
  };
})();
