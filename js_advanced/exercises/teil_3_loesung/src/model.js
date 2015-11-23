import data from './data';
import Observable from './observable';

function Cities() {
  this._cities = data;
  this.cityAdded = new Observable();
}

Cities.prototype.getCities = function() {
  return this._cities;
};

Cities.prototype.addCity = function(city) {
  this._cities.push(city);
  this.cityAdded.notify(city);
};

export default Cities;
