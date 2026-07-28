// 宠物乐园主题系统
(function() {
  var themes = ['pink', 'blue', 'mint', 'red', 'purple', 'black'];
  var saved = localStorage.getItem('pet-theme');
  if (saved && themes.indexOf(saved) !== -1) {
    document.body.setAttribute('data-theme', saved);
  }

  window.setTheme = function(theme) {
    if (themes.indexOf(theme) === -1) return;
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('pet-theme', theme);
    document.querySelectorAll('.t-dot').forEach(function(el) {
      el.classList.toggle('active', el.getAttribute('data-theme') === theme);
    });
  };
})();
