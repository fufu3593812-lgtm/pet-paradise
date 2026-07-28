// Dot Diary Theme System
(function() {
  var themes = ['pink', 'blue', 'mint', 'black', 'red', 'purple'];
  var saved = localStorage.getItem('dot-theme');
  if (saved && themes.indexOf(saved) !== -1) {
    document.body.setAttribute('data-theme', saved);
  }

  window.setTheme = function(theme) {
    if (themes.indexOf(theme) === -1) return;
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('dot-theme', theme);
    // Update active dot
    document.querySelectorAll('.theme-dot').forEach(function(el) {
      el.classList.toggle('active', el.getAttribute('data-theme') === theme);
    });
  };

  window.cycleTheme = function() {
    var current = document.body.getAttribute('data-theme') || 'pink';
    var idx = themes.indexOf(current);
    var next = themes[(idx + 1) % themes.length];
    setTheme(next);
  };
})();
