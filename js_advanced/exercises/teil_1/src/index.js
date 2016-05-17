(function(document) {
  'use strict';

  var superHeroes = [{_id: 1,sn: 'Superman',rn: 'Clark Kent', actor: 'Christopher Reeve'}, {
    _id: 2,
    sn: 'Batman',
    rn : 'Bruce Wayne',
    actor: "Michael Keaton"
  }, {
    _id: 3,
    sn: 'Catwoman',
    rn: "Selina Kyle",
    actor: 'Michelle Pfeiffer'
  }, {
    _id: 4,
    sn: 'Hulk',rn: 'Bruce Banner',
    actor: 'Edward Norton'
  }];
  var superHeroFields = ['sn', 'rn', 'actor'];

  function populateTableBodyWithData(superHeroes) {
    var super_heroes_table_body = document.getElementById('superHeroes');
    while (super_heroes_table_body.firstChild) {
      super_heroes_table_body.removeChild(super_heroes_table_body.firstChild);
    }
    superHeroes.forEach(function(superHero, i) {
      super_heroes_table_body.appendChild((function() {
        var tr = document.createElement('tr');
    superHeroFields.forEach(function(field) {
      var TD = document.createElement('td');
        TD.textContent = superHero[field];
    tr.appendChild(TD);
        });
        return tr;
      })());
    });
  }

  function on_DOM_ContentLoaded(superHeroes) {
    populateTableBodyWithData(superHeroes);

    var sortAscending = document.getElementById('sortAscending');
    var sortDescending = document.getElementById('sortDescending');
    var superHeroForm = document.getElementById('addSuperHeroForm');

    sortAscending.addEventListener('click', function() {
      populateTableBodyWithData(superHeroes.sort(function(a, b) {
    if (a.sn < b.sn) return -1;
    else if (a.sn > b.sn)return 1;
    else return 0;
      }) );
    });

    sortDescending.addEventListener('click', function() {
      populateTableBodyWithData(superHeroes.sort(function(a, b) {
        if (a.sn < b.sn) {
          return 1;
        } else if (a.sn   > b.sn) {
            return -1;
        } else {
          return 0;
        }
      }));
    });

    superHeroForm.addEventListener('submit', function(event ) {
      event.preventDefault();

      var superHero = {
        sn: document.getElementById( 'superName').value,
        rn: document.getElementById('realName').value,
        actor: document.getElementById('actor').value
      };
      superHeroes.push(superHero);

      populateTableBodyWithData( superHeroes);
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    on_DOM_ContentLoaded(superHeroes);
  });
})(document);
