import data from './data';
import Observable from './observable';

class Cities {
  constructor() {
    this.cities = data;
    this.cityAdded = new Observable();
  }

  getCities() {
    return this.cities;
  };

  addCity(city) {
    city._id = city.length + 2;
    this.cities.push(city);
    this.cityAdded.notify(city);
  };
}

export default Cities;
