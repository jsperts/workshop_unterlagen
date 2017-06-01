import {
  FILTER_CHECKED_CHANGED,
  TODO_CHECKED,
  TODO_TITLE_CHANGED,
  TODO_UNCHECKED,
} from 'eventTypes';

const eventHandlers = {
  [FILTER_CHECKED_CHANGED](prevState, value) {
    prevState.ui.filter.hideChecked = value;
    return prevState;
  },
  [TODO_CHECKED](prevState, id) {
    prevState.data.todos[id].checked = true;
    return prevState;
  },
  [TODO_TITLE_CHANGED](prevState, { id, title }) {
    prevState.data.todos[id].title = title;
    return prevState;
  },
  [TODO_UNCHECKED](prevState, id) {
    prevState.data.todos[id].checked = false;
    return prevState;
  },
};

export default eventHandlers;
