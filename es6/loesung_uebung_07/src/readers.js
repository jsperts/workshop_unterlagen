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

    const { hideChecked } = state.ui.filter;

    let result = readTodos(list, todos);

    result = result.filter(filterTodosByChecked(hideChecked));

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

export default readers;
