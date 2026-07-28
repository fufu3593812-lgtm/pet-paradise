// 主题点击
(function() {
  document.querySelectorAll('.c-dot').forEach(function(dot) {
    dot.addEventListener('click', function() {
      var theme = this.getAttribute('data-theme');
      if (theme) setTheme(theme);
    });
  });

  var current = document.body.getAttribute('data-theme') || 'default';
  document.querySelectorAll('.c-dot').forEach(function(el) {
    el.classList.toggle('active', el.getAttribute('data-theme') === current);
  });
})();
