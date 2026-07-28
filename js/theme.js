// Theme system
(function() {
  var themes = ['mint', 'peach', 'grape', 'cream'];
  var saved = localStorage.getItem('pet-theme');
  if (saved && themes.indexOf(saved) !== -1) {
    document.body.setAttribute('data-theme', saved);
  }

  window.cycleTheme = function() {
    var current = document.body.getAttribute('data-theme') || 'mint';
    var idx = themes.indexOf(current);
    var next = themes[(idx + 1) % themes.length];
    document.body.setAttribute('data-theme', next);
    localStorage.setItem('pet-theme', next);
  };
})();
