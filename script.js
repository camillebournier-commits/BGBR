/* TND Cabinet - menu mobile */

(function () {
  var bouton = document.querySelector('.burger');
  var menu = document.getElementById('menu');
  bouton.addEventListener('click', function () {
    var ouvert = menu.classList.toggle('ouvert');
    bouton.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
    bouton.setAttribute('aria-label', ouvert ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  menu.querySelectorAll('a').forEach(function (lien) {
    lien.addEventListener('click', function () {
      menu.classList.remove('ouvert');
      bouton.setAttribute('aria-expanded', 'false');
    });
  });

  // Texte repliable : visible sans JavaScript, replié dès que le script se charge
  document.querySelectorAll('.lire-plus').forEach(function (btn) {
    var cible = document.getElementById(btn.getAttribute('aria-controls'));
    if (!cible) return;
    var plier = function (replie) {
      cible.hidden = replie;
      btn.setAttribute('aria-expanded', replie ? 'false' : 'true');
      btn.textContent = replie ? "Lire l'histoire du cabinet" : 'Réduire';
    };
    btn.hidden = false;
    plier(true);
    btn.addEventListener('click', function () { plier(!cible.hidden); });
  });

  // Mobile : bouton de rendez-vous bilans collant quand celui du hero n'est plus visible
  var cta = document.getElementById('cta-mobile');
  var source = document.querySelector('.hero .btn-rdv');
  if (cta && source && 'IntersectionObserver' in window) {
    var lien = cta.querySelector('a');
    document.body.classList.add('avec-cta');
    new IntersectionObserver(function (entrees) {
      var cache = !entrees[0].isIntersecting && entrees[0].boundingClientRect.top < 0;
      cta.classList.toggle('visible', cache);
      cta.setAttribute('aria-hidden', cache ? 'false' : 'true');
      lien.tabIndex = cache ? 0 : -1;
    }).observe(source);
  }
})();
