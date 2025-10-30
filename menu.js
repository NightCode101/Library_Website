document.addEventListener('DOMContentLoaded', function () {
  var toggles = document.querySelectorAll('.menu-toggle');
  toggles.forEach(function (btn) {
    var navbar = btn.closest('.navbar');
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      navbar.classList.toggle('open');
    });
  });
});