import {
  READ_TODOS_TO_SHOW,
} from 'readerTypes';

const readers = {};
readers[READ_TODOS_TO_SHOW] = function (state) {
  const list = state.data.list;
  const todos = state.data.todos;

  const hideChecked = state.ui.filter.hideChecked;

  let result = readTodos(list, todos);

  result = result.filter(filterTodosByChecked(hideChecked));

  return result;
};

function readTodos(list, todos) {
  const result = [];

  // hier muss über __list__ iteriert werden und vollständige Objekte mit den Attributen id, title, checked
  // zu __result__ hinzugefügt werden
  // das Iterieren kann mit for..of geschehen

  return result;
}

function filterTodosByChecked(hideChecked) {
  return function (todo) {
    // der Parameter todo ist _ein_ todo und keine Liste von todos
    // d.h. diese Funktion wird für jedes Todo einzeln aufgerufen

    // falls hideChecked true ist, darf diese Funktion nur für die Elemente true zurückliefern, für die checked auf
    // false steht

    return true;
  };
}

export default readers;
