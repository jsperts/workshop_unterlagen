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

function emptyTableBody(tableBody) {
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
}

function Table(model, elements) {
  var self = this;
  this._model = model;
  this._tableBody = elements.tableBody;
  this._sortAscending = elements.sortAscending;
  this._sortDescending = elements.sortDescending;
  this._tableContent = this._model.getSuperHeroes();

  this._model.superHeroAdded.observe(function() {
    self.render(self._model.getSuperHeroes());
  });

  this._sortAscending.addEventListener('click', function() {
    var sortedSuperHeroes = sortSuperHeroes(self._tableContent, true);
    self.render(sortedSuperHeroes);
  });
  this._sortDescending.addEventListener('click', function() {
    var sortedSuperHeroes = sortSuperHeroes(self._tableContent, false);
    self.render(sortedSuperHeroes);
  });
}

function createTableCell(value) {
  var td = document.createElement('td');
  td.textContent = value;
  return td;
}

function createTableRow(superHero) {
  var superHeroFields = ['superName', 'realName', 'actors'];
  var tr = document.createElement('tr');
  superHeroFields.forEach(function(field) {
    tr.appendChild(createTableCell(superHero[field]));
  });
  return tr;
}

Table.prototype.render = function(superHeroes) {
  emptyTableBody(this._tableBody);
  superHeroes.forEach(function(superHero) {
    this._tableBody.appendChild(createTableRow(superHero));
  }, this);
};

Table.prototype.init = function() {
  var superHeroes = this._model.getSuperHeroes();
  this.render(superHeroes);
};

export default Table;
