import {
  FILTER_CHECKED_CHANGED,
  FILTER_TEXT_CHANGED,
  NEW_TODO_ADDED,
  TODO_CHECKED,
  TODO_DELETED,
  TODO_TITLE_CHANGED,
  TODO_UNCHECKED,
} from 'eventTypes';

import {
  DATA_LOADED,
  ERROR_OCCURRED,
  LOADING_STARTED,
} from './customEvents';

const eventHandlers = {
  [DATA_LOADED](prevState, value) {
    prevState.data = value;
    prevState.ui.loading = false;
    return prevState;
  },
  [ERROR_OCCURRED](prevState, value) {
    prevState.ui.errorOccurred = value;
    return prevState;
  },
  [FILTER_CHECKED_CHANGED](prevState, value) {
    prevState.ui.filter.hideChecked = value;
    return prevState;
  },
  [FILTER_TEXT_CHANGED](prevState, value) {
    prevState.ui.filter.text = value;
    return prevState;
  },
  [LOADING_STARTED](prevState) {
    prevState.ui.loading = true;
    return prevState;
  },
  [NEW_TODO_ADDED](prevState) {
    const id = prevState.data.nextId;
    prevState.data.nextId++;
    prevState.data.todos[id] = {
      checked: false,
      title: '',
    };
    prevState.data.list = [id, ...prevState.data.list];
    return prevState;
  },
  [TODO_DELETED](prevState, id) {
    delete prevState.data.todos[id];

    const listIndex = prevState.data.list.indexOf(id);
    prevState.data.list = [...prevState.data.list.slice(0, listIndex), ...prevState.data.list.slice(listIndex + 1)];

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
