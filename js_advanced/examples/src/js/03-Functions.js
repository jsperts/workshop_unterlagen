console.log('Übung 03: Funktionen START');

const obj = {
  foo() {
    console.log(this);
  }
};

const arr = [1, 2, 3];

arr.forEach(function(elem) {
  console.log(elem);
});

function greeting(prefix, name, suffix) {
  prefix = prefix || 'Hello';
  name = name || 'Max';
  suffix = suffix || '!';

  return prefix + ' ' + name + suffix;
}

console.log(greeting());
console.log(greeting('Hallo', 'Peter'));

console.log('Übung 03: Funktionen DONE');
