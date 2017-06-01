import {
  READ_TODOS_TO_SHOW,
} from 'readerTypes';

const readers = {
  [READ_TODOS_TO_SHOW](state) {
    const { list, todos } = state.data;

    const { hideChecked } = state.ui.filter;

    let result = readTodos(list, todos);

    result = result.filter(filterTodosByChecked(hideChecked));

    return result;
  },
};

function readTodos(list, todos) {
  const result = [];

  // hier muss über __list__ iteriert werden und vollständige Objekte mit den Attributen id, title, checked
  // zu __result__ hinzugefügt werden
  // das Iterieren kann mit for..of geschehen

  for (const id of list) {
    const todo = todos[id];
    result.push({
      id: id,
      title: todo.title,
      checked: todo.checked,
    });
  }

  return result;
}

function filterTodosByChecked(hideChecked) {
  return function (todo) {
    // falls hideChecked true ist, darf diese Funktion nur für die Elemente true zurückliefern, für die checked auf
    // false steht

    if (hideChecked) {
      return !todo.checked;
    } else {
      return true;
    }
  };
}

export default readers;
