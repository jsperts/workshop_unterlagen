import data from './data';
import Observable from './helpers/observable';

class Cities {
  constructor() {
    this.cities = data;
    this.cityAdded = new Observable();
  }

  getCities() {
    return this.cities;
  }

  getCityById(id) {
    return this.cities.find((city) => city._id === id);
  };

  addCity(city) {
    this.cities.push(city);
    this.cityAdded.notify(city);
  }
}

export default Cities;
