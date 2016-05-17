import Observable from './observable';

const superHeroes = [{
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

function SuperHeroes() {
  this._superHeroes = superHeroes;
  this.superHeroAdded = new Observable(this);
}

SuperHeroes.prototype.getSuperHeroes = function() {
  return this._superHeroes;
};

SuperHeroes.prototype.addSuperHero = function(superHero) {
  superHero.actors = superHero.actors.split(',');
  this._superHeroes.push(superHero);
  this.superHeroAdded.notify(superHero);
};

export default SuperHeroes;
