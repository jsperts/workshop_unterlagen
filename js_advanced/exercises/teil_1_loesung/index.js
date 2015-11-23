(function(document) {
  'use strict';

  var superHeroes = [{
    _id: 1,
    superName: 'Superman',
    realName: 'Clark Kent',
    actors: ['Christopher Reeve', 'Brandon Routh']
  }, {
    _id: 2,
    superName: 'Batman',
    realName: ' Bruce Wayne',
    actors: ['Michael Keaton', 'Christian Bale']
  }, {
    _id: 3,
    superName: 'Catwoman',
    realName: 'Selina Kyle',
    actors: ['Michelle Pfeiffer', 'Anne Hathaway']
  }, {
    _id: 4,
    superName: 'Hulk',
    realName: 'Bruce Banner',
    actors: ['Edward Norton', 'Mark Ruffalo']
  }];
  var superHeroFields = ['superName', 'realName', 'actors'];

  /* Table manipulation: start */
  function createTableCell(value) {
    var td = document.createElement('td');
    td.textContent = value;
    return td;
  }

  function createTableRow(superHero) {
    var tr = document.createElement('tr');
    superHeroFields.forEach(function(field) {
      tr.appendChild(createTableCell(superHero[field]));
    });
    return tr;
  }

  function emptyTableBody(tableBody) {
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }
  }

  function populateTableBody(superHeroes) {
    var superHeroesTableBody = document.getElementById('superHeroes');
    emptyTableBody(superHeroesTableBody);
    superHeroes.forEach(function(superHero) {
      superHeroesTableBody.appendChild(createTableRow(superHero));
    });
  }

  /* Table manipulation: end */

  function sortSuperHeroes(superHeroes, isAscending) {
    superHeroes.sort(function(firstHero, secondHero) {
      var firstSuperName = firstHero.superName.toLowerCase();
      var secondSuperName = secondHero.superName.toLocaleLowerCase();
      if (firstSuperName < secondSuperName) {
        return isAscending ? -1 : 1;
      } else if (firstSuperName > secondSuperName) {
        return isAscending ? 1 : -1;
      } else {
        return 0;
      }
    });
    return superHeroes;
  }

  function getInputFieldValues(fieldIds) {
    var res = {};
    fieldIds.forEach(function(fieldId) {
      res[fieldId] = document.getElementById(fieldId).value;
    });
    return res;
  }

  function resetInputFieldValues(fieldIds) {
    fieldIds.forEach(function(fieldId) {
      document.getElementById(fieldId).value = '';
    });
  }

  /* Listeners: start */
  function sortAscendingClicked(superHeroes) {
    var sortedSuperHeroes = sortSuperHeroes(superHeroes, true);
    populateTableBody(sortedSuperHeroes);
  }

  function sortDescendingClicked(superHeroes) {
    var sortedSuperHeroes = sortSuperHeroes(superHeroes, false);
    populateTableBody(sortedSuperHeroes);
  }

  function formSubmitted() {
    var fieldIds = ['superName', 'realName', 'actors'];
    var superHero = getInputFieldValues(fieldIds);
    // actors must be an array
    superHero.actors = superHero.actors.split(',');
    superHeroes.push(superHero);
    populateTableBody(superHeroes);
    resetInputFieldValues(fieldIds);
  }

  function registerListeners(superHeroes) {
    var sortAscending = document.getElementById('sortAscending');
    var sortDescending = document.getElementById('sortDescending');
    var superHeroForm = document.getElementById('addSuperHeroForm');

    sortAscending.addEventListener('click', function() {
      sortAscendingClicked(superHeroes);
    });

    sortDescending.addEventListener('click', function() {
      sortDescendingClicked(superHeroes);
    });

    superHeroForm.addEventListener('submit', function(event) {
      // Prevent the browser from sending the form
      event.preventDefault();
      formSubmitted(superHeroes);
    });
  }

  /* Listeners: end */

  function onDOMContentLoaded(superHeroes) {
    populateTableBody(superHeroes);
    registerListeners(superHeroes);
  }

  document.addEventListener('DOMContentLoaded', function() {
    onDOMContentLoaded(superHeroes);
  });
})(document);
