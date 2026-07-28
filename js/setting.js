// 主题选择交互
(function() {
  document.querySelectorAll('.theme-dot').forEach(function(dot) {
    dot.addEventListener('click', function() {
      var theme = this.getAttribute('data-theme');
      if (theme) setTheme(theme);
    });
  });

  // 初始标记当前主题
  var current = document.body.getAttribute('data-theme') || 'pink';
  document.querySelectorAll('.theme-dot').forEach(function(el) {
    el.classList.toggle('active', el.getAttribute('data-theme') === current);
  });
})();
