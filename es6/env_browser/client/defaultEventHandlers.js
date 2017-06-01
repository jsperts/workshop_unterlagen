import {
  FILTER_CHECKED_CHANGED,
  FILTER_TEXT_CHANGED,
  NEW_TODO_ADDED,
  TODO_CHECKED,
  TODO_TITLE_CHANGED,
  TODO_UNCHECKED,
} from './eventTypes'

const defaultEventHandlers = {
  [FILTER_CHECKED_CHANGED]: (state, value) => {
    return state
  },
  [FILTER_TEXT_CHANGED]: (state, value) => {
    return state
  },
  [NEW_TODO_ADDED]: (state) => {
    return state
  },
  [TODO_CHECKED]: (state) => {
    return state
  },
  [TODO_TITLE_CHANGED]: (state) => {
    return state
  },
  [TODO_UNCHECKED]: (state) => {
    return state
  },
  '@@redux/INIT': (state) => state,
}

export default defaultEventHandlers
