// Gemensam meny för alla sidor – ändra menyn HÄR, inte i varje HTML-fil.
// Inkluderas i sidans <header> där menyn ska synas:
//   <script src="scripts/nav.js"></script>
(function () {
  // Huvudmenyn – syns på alla sidor.
  var MAIN = [
    ['index.html', 'Home'],
    ['skottland.html', 'Skottland'],
    ['alsace.html', 'Alsace'],
    ['julbord.html', 'Julbord 2025'],
    ['julbord2026.html', 'Julbord 2026'],
    ['historik.html', 'Historik']
  ];

  // Undermenyer – visas på de sidor som finns i respektive lista.
  // "parent" markeras som aktiv i huvudmenyn. Grupper utan parent är
  // "hemliga" sidor som inte länkas från huvudmenyn.
  var SUB = [
    {
      parent: 'skottland.html',
      links: [
        ['skottland.html', 'Översikt'],
        ['goodtoknow.html', 'Good to know'],
        ['packlista.html', 'Packlista'],
        ['skottland_schema.html', 'Schema']
      ]
    },
    {
      parent: 'alsace.html',
      links: [
        ['alsace.html', 'Översikt'],
        ['alsace_schema.html', 'Schema']
      ]
    },
    {
      links: [
        ['projektshower.html', 'Schema'],
        ['orientering.html', 'Orienteringskarta'],
        ['poangtavla.html', 'Poängtavla']
      ]
    }
  ];

  // Aktuell sida, t.ex. "skottland.html" (GitHub Pages tillåter även /skottland).
  var here = decodeURIComponent(location.pathname.split('/').pop()) || 'index.html';
  if (here.indexOf('.') === -1) here += '.html';

  var group = null;
  for (var i = 0; i < SUB.length && !group; i++) {
    for (var j = 0; j < SUB[i].links.length; j++) {
      if (SUB[i].links[j][0] === here) { group = SUB[i]; break; }
    }
  }

  function render(links, active, cls) {
    var html = '<nav' + (cls ? ' class="' + cls + '"' : '') + '>';
    for (var k = 0; k < links.length; k++) {
      var href = links[k][0];
      html += '<a href="' + href + '"' +
        (href === active ? ' class="active"' : '') +
        (href === here ? ' aria-current="page"' : '') +
        '>' + links[k][1] + '</a>';
    }
    return html + '</nav>';
  }

  var html = render(MAIN, group && group.parent ? group.parent : here);
  if (group) html += render(group.links, here, 'subnav');

  var script = document.currentScript;
  script.insertAdjacentHTML('beforebegin', html);
  script.parentNode.removeChild(script);
})();
