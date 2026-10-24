// Project filter on the home page
document.querySelectorAll('.filters button').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var f = btn.dataset.filter;
    document.querySelectorAll('.filters button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b === btn));
    });
    document.querySelectorAll('.entry').forEach(function (e) {
      e.hidden = f !== 'all' && e.dataset.cat !== f;
    });
  });
});

// Enlarge drawings on project pages
var viewer = document.querySelector('.viewer');
if (viewer && viewer.showModal) {
  var vImg = viewer.querySelector('img');
  var vCap = viewer.querySelector('.viewer-cap');
  document.querySelectorAll('.zoom').forEach(function (z) {
    z.addEventListener('click', function () {
      vImg.src = z.dataset.full;
      vImg.alt = z.dataset.caption || '';
      vCap.textContent = z.dataset.caption || '';
      viewer.showModal();
    });
  });
  viewer.addEventListener('click', function (e) {
    if (e.target === viewer || e.target === vImg) viewer.close();
  });
}
