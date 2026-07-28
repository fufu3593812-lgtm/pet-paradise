// Setting page interactions
(function() {
  // Theme dot click
  document.querySelectorAll('.theme-dot').forEach(function(dot) {
    dot.addEventListener('click', function() {
      var theme = this.getAttribute('data-theme');
      if (theme) setTheme(theme);
    });
  });

  // Mark current theme dot as active on load
  var current = document.body.getAttribute('data-theme') || 'pink';
  document.querySelectorAll('.theme-dot').forEach(function(el) {
    el.classList.toggle('active', el.getAttribute('data-theme') === current);
  });
})();
