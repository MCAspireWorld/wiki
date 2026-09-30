// Кнопки «Телеграм» и «Магазин» в шапке (как на вики HolyWorld)
document$.subscribe(function () {
  var inner = document.querySelector(".md-header__inner");
  if (!inner || inner.querySelector(".aw-header-buttons")) return;
  var box = document.createElement("div");
  box.className = "aw-header-buttons";
  box.innerHTML =
    '<a class="aw-btn" href="https://t.me/AspireWorld" target="_blank" rel="noopener">Телеграм</a>' +
    '<a class="aw-btn aw-btn--primary" href="https://aspireworld.ru" target="_blank" rel="noopener">Магазин</a>';
  var source = inner.querySelector(".md-header__source");
  inner.insertBefore(box, source);
});
