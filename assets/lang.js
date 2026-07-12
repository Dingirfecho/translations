(function () {
  'use strict';

  var STORAGE_KEY = 'dudjom-site-lang';
  var buttons = document.querySelectorAll('.lang-toggle button[data-set-lang]');
  var body = document.body;

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'es') lang = 'en';
    body.classList.remove('lang-en', 'lang-es');
    body.classList.add('lang-' + lang);
    document.documentElement.setAttribute('lang', lang);
    buttons.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-set-lang') === lang);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-set-lang') === lang ? 'true' : 'false');
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  // Bind clicks
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-set-lang'));
    });
  });

  // Init: stored pref → browser pref → default English
  var stored = null;
  try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
  if (stored === 'en' || stored === 'es') {
    setLang(stored);
  } else {
    var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    setLang(nav.indexOf('es') === 0 ? 'es' : 'en');
  }

  // Smooth-scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href').slice(1);
      if (!id) return;
      var el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
