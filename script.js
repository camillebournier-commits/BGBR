/* Cabinet BGBR - menu mobile */

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
})();
