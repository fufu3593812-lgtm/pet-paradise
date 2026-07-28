// Hatch page logic
(function() {
  var egg = document.getElementById('egg');
  var container = document.getElementById('eggContainer');
  var result = document.getElementById('hatchResult');
  var tapCount = 0;
  var hatching = false;

  // Demo pets
  var pets = [
    { name: '小薄荷', rarity: '普通', desc: '一只安静的小家伙，喜欢待在窗台上晒太阳' },
    { name: '棉花糖', rarity: '稀有', desc: '软绵绵的，摸起来像云朵一样' },
    { name: '星尘', rarity: '史诗', desc: '夜晚会发出微弱的光，像碎掉的星星' },
    { name: '小焰', rarity: '传说', desc: '据说是从火山口飘来的一团温柔的火' }
  ];

  container.addEventListener('click', function() {
    if (hatching) return;
    tapCount++;
    egg.classList.add('shaking');
    setTimeout(function() { egg.classList.remove('shaking'); }, 600);

    if (tapCount >= 5) {
      hatching = true;
      showResult();
    }
  });

  function showResult() {
    var pet = pets[Math.floor(Math.random() * pets.length)];
    document.querySelector('.result-name').textContent = pet.name;
    document.querySelector('.result-rarity').textContent = pet.rarity;
    document.querySelector('.result-desc').textContent = pet.desc;
    result.style.display = 'flex';
  }

  window.confirmHatch = function() {
    result.style.display = 'none';
    tapCount = 0;
    hatching = false;
    // TODO: save pet to storage
    alert('恭喜！' + document.querySelector('.result-name').textContent + ' 加入了你的家庭');
  };

  // Option cards
  document.querySelectorAll('.option-card').forEach(function(card) {
    card.addEventListener('click', function() {
      document.querySelectorAll('.option-card').forEach(function(c) { c.style.borderColor = ''; });
      card.style.borderColor = 'var(--accent)';
    });
  });
})();
