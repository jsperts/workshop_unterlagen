import data from './data';
import Observable from './helpers/observable';

function Cities() {
  this._cities = data;
  this.cityAdded = new Observable();
}

Cities.prototype.getCities = function() {
  return this._cities;
};

Cities.prototype.getCityById = function(id) {
  return this._cities.filter(function(city) {
    return city._id === id;
  })[0];
};

Cities.prototype.addCity = function(city) {
  this._cities.push(city);
  this.cityAdded.notify(city);
};

export default Cities;
