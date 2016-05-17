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

function emptyTableBody(tableBody) {
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
}

function Table(model, elements) {
  const self = this;
  this._model = model;
  this._tableBody = elements.tableBody;
  this._sortAscending = elements.sortAscending;
  this._sortDescending = elements.sortDescending;
  this._tableContent = this._model.getSuperHeroes();

  this._model.superHeroAdded.observe(function() {
    self.render(self._model.getSuperHeroes());
  });

  this._sortAscending.addEventListener('click', function() {
    const sortedSuperHeroes = sortSuperHeroes(self._tableContent, true);
    self.render(sortedSuperHeroes);
  });
  this._sortDescending.addEventListener('click', function() {
    const sortedSuperHeroes = sortSuperHeroes(self._tableContent, false);
    self.render(sortedSuperHeroes);
  });
}

function createTableCell(value) {
  const td = document.createElement('td');
  td.textContent = value;
  return td;
}

function createTableRow(superHero) {
  const superHeroFields = ['superName', 'realName', 'actors'];
  const tr = document.createElement('tr');
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
  const superHeroes = this._model.getSuperHeroes();
  this.render(superHeroes);
};

export default Table;
