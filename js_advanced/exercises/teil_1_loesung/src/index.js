(function(document) {
  'use strict';

  const superHeroesArray = [{
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
  const superHeroFields = ['superName', 'realName', 'actors'];

  /* Table manipulation: start */
  function createTableCell(value) {
    const td = document.createElement('td');
    td.textContent = value;
    return td;
  }

  function createTableRow(superHero) {
    const tr = document.createElement('tr');
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
    const superHeroesTableBody = document.getElementById('superHeroes');
    emptyTableBody(superHeroesTableBody);
    superHeroes.forEach(function(superHero) {
      superHeroesTableBody.appendChild(createTableRow(superHero));
    });
  }

  /* Table manipulation: end */

  function sortSuperHeroes(superHeroes, isAscending) {
    superHeroes.sort(function(firstHero, secondHero) {
      const firstSuperName = firstHero.superName.toLowerCase();
      const secondSuperName = secondHero.superName.toLocaleLowerCase();
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
    const res = {};
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
    const sortedSuperHeroes = sortSuperHeroes(superHeroes, true);
    populateTableBody(sortedSuperHeroes);
  }

  function sortDescendingClicked(superHeroes) {
    const sortedSuperHeroes = sortSuperHeroes(superHeroes, false);
    populateTableBody(sortedSuperHeroes);
  }

  function formSubmitted() {
    const fieldIds = ['superName', 'realName', 'actors'];
    const superHero = getInputFieldValues(fieldIds);
    // actors must be an array
    superHero.actors = superHero.actors.split(',');
    superHeroesArray.push(superHero);
    populateTableBody(superHeroesArray);
    resetInputFieldValues(fieldIds);
  }

  function registerListeners(superHeroes) {
    const sortAscending = document.getElementById('sortAscending');
    const sortDescending = document.getElementById('sortDescending');
    const superHeroForm = document.getElementById('addSuperHeroForm');

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
    onDOMContentLoaded(superHeroesArray);
  });
}(document));
