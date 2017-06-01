import {
  READ_INFO_TEXT,
  READ_TODOS_TO_SHOW,
} from 'readerTypes';
import { highlight } from './tagFunctions';

const readers = {
  [READ_INFO_TEXT](state) {
    const { list, todos } = state.data;

    const { allCount, checkedCount } = list.reduce(
      (acc, id) => ({
        allCount: acc.allCount + 1,
        checkedCount: acc.checkedCount + (todos[id].checked ? 1 : 0),
      }), {
        allCount: 0,
        checkedCount: 0,
      }
    );

    return highlight`Von insgesamt ${allCount} Todo(s) sind ${checkedCount} erledigt.`;
  },

  [READ_TODOS_TO_SHOW](state) {
    const { list, todos } = state.data;

    const { hideChecked, text } = state.ui.filter;

    let result = readTodos(list, todos);

    result = result
      .filter(filterTodosByChecked(hideChecked))
      .filter(filterTodosByText(text))
      .map(highlightTodoTitle(text));

    return result;
  },
};

function readTodos(list, todos) {
  return list.map((id) => {
    const todo = todos[id];
    return {
      id: id,
      title: todo.title,
      checked: todo.checked,
    };
  });
}

function filterTodosByChecked(hideChecked) {
  return (todo) =>
    // falls hideChecked true ist, darf diese Funktion nur für die Elemente true zurückliefern, für die checked auf
    // false steht
    !hideChecked || !todo.checked;
}

function filterTodosByText(text) {
  return (todo) =>
    todo.title.includes(text);
}

function highlightTodoTitle(text) {
  if (text) {
    return (todo) => {
      const normalParts = todo.title.split(text);
      const highlightParts = new Array(normalParts.length - 1).fill(text);
      return {
        id: todo.id,
        title: highlight(normalParts, ...highlightParts),
        checked: todo.checked,
      };
    };
  } else {
    return (todo) => todo;
  }
}

export default readers;
