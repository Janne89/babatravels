// Gemensam meny för alla sidor – ändra menyn HÄR, inte i varje HTML-fil.
// Inkluderas i sidans <header> där menyn ska synas (sökvägen relativt sidan):
//   <script src="assets/js/nav.js"></script>        (sidor i roten)
//   <script src="../assets/js/nav.js"></script>     (sidor i en evenemangsmapp)
// Alla sökvägar nedan är relativa till sajtens rot. En mapp ("skottland/")
// betyder mappens index.html.
(function () {
  // Huvudmenyn – syns på alla sidor. "TIDIGARE" blir en knapp som fäller ut
  // listan med tidigare evenemang.
  var TIDIGARE = 'TIDIGARE';
  var MAIN = [
    ['', 'Home'],
    ['skottland/', 'Skottland'],
    ['alsace/', 'Alsace'],
    ['julbord-2026/', 'Julbord 2026'],
    [TIDIGARE, 'Tidigare'],
    ['historik.html', 'Historik']
  ];

  // Tidigare evenemang – nyast först.
  var PAST = [
    ['projekt-shower/', 'Projekt Shower'],
    ['projekt-35/', 'Projekt 35'],
    ['julbord-2025/', 'Julbord 2025']
  ];

  // Undermenyer – visas på de sidor som finns i respektive lista.
  // "parent" är sidan som markeras som aktiv i menyn ovanför.
  // Sidor som bara finns här (t.ex. orientering) länkas inte från huvudmenyn.
  var SUB = [
    {
      parent: 'skottland/',
      links: [
        ['skottland/', 'Översikt'],
        ['skottland/good-to-know.html', 'Good to know'],
        ['skottland/packlista.html', 'Packlista'],
        ['skottland/schema.html', 'Schema']
      ]
    },
    {
      parent: 'alsace/',
      links: [
        ['alsace/', 'Översikt'],
        ['alsace/schema.html', 'Schema']
      ]
    },
    {
      parent: 'projekt-shower/',
      links: [
        ['projekt-shower/', 'Schema'],
        ['projekt-shower/orientering.html', 'Orienteringskarta'],
        ['projekt-shower/poangtavla.html', 'Poängtavla']
      ]
    }
  ];

  var script = document.currentScript;

  // Sajtens rot räknas ut från var nav.js ligger, så menyn funkar både på
  // GitHub Pages (/babatravels/...) och när filerna öppnas lokalt.
  var root = script.src.replace(/assets\/js\/nav\.js(\?.*)?$/, '');
  var local = location.protocol === 'file:';

  // Aktuell sida relativt roten, t.ex. "skottland/schema.html" eller "skottland/".
  var here = decodeURI(location.href.split(/[?#]/)[0]).slice(decodeURI(root).length);
  here = here.replace(/index\.html$/, '');

  function url(path) {
    // Lokalt öppnar en mapp-länk en fillista, så peka direkt på index.html.
    return root + path + (local && /(^|\/)$/.test(path) ? 'index.html' : '');
  }

  function find(links, path) {
    for (var k = 0; k < links.length; k++) {
      if (links[k][0] === path) return true;
    }
    return false;
  }

  var group = null;
  for (var i = 0; i < SUB.length && !group; i++) {
    if (find(SUB[i].links, here)) group = SUB[i];
  }

  // Sidan som ska vara markerad i huvudmenyn / tidigare-listan.
  var section = group ? group.parent : here;
  var mainActive = find(PAST, section) ? TIDIGARE : section;

  function render(links, active, attrs) {
    var html = '<nav' + (attrs || '') + '>';
    for (var k = 0; k < links.length; k++) {
      var path = links[k][0];
      var cls = path === active ? ' class="active"' : '';
      if (path === TIDIGARE) {
        html += '<a href="#" id="nav-past-toggle"' + cls +
          ' role="button" aria-expanded="false" aria-controls="nav-past">' +
          links[k][1] + ' ▾</a>';
        continue;
      }
      html += '<a href="' + url(path) + '"' + cls +
        (path === here ? ' aria-current="page"' : '') +
        '>' + links[k][1] + '</a>';
    }
    return html + '</nav>';
  }

  var html = render(MAIN, mainActive) +
    render(PAST, section, ' class="subnav" id="nav-past" style="display:none"');
  if (group) html += render(group.links, here, ' class="subnav"');

  script.insertAdjacentHTML('beforebegin', html);
  script.parentNode.removeChild(script);

  // Fäll ut/in listan med tidigare evenemang.
  var toggle = document.getElementById('nav-past-toggle');
  var past = document.getElementById('nav-past');
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    var open = past.style.display === 'none';
    past.style.display = open ? '' : 'none';
    toggle.setAttribute('aria-expanded', open);
    toggle.innerHTML = 'Tidigare ' + (open ? '▴' : '▾');
  });
})();
