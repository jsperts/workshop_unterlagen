import {
  ACTION_CHANGE_FILTER_CHECKED,
  ACTION_CHANGE_FILTER_TEXT,
  ACTION_CHANGE_TODO_TITLE,
  ACTION_CHECK_TODO,
  ACTION_DELETE_TODO,
  ACTION_DELETE_DUPLICATES,
  ACTION_INIT,
  ACTION_NEW_TODO,
  ACTION_UNCHECK_TODO,
} from './actionTypes'

import {
  DUPLICATES_DELETED,
  FILTER_CHECKED_CHANGED,
  FILTER_TEXT_CHANGED,
  NEW_TODO_ADDED,
  TODO_CHECKED,
  TODO_DELETED,
  TODO_TITLE_CHANGED,
  TODO_UNCHECKED,
} from './eventTypes'

const defaultActions = {
  [ACTION_CHANGE_FILTER_CHECKED]: (dispatchEvent, getState, value) => {
    dispatchEvent(FILTER_CHECKED_CHANGED, value)
  },
  [ACTION_CHANGE_FILTER_TEXT]: (dispatchEvent, getState, value) => {
    dispatchEvent(FILTER_TEXT_CHANGED, value)
  },
  [ACTION_CHANGE_TODO_TITLE]: (dispatchEvent, getState, value) => {
    dispatchEvent(TODO_TITLE_CHANGED, value)
  },
  [ACTION_CHECK_TODO]: (dispatchEvent, getState, value) => {
    dispatchEvent(TODO_CHECKED, value)
  },
  [ACTION_DELETE_TODO]: (dispatchEvent, getState, value) => {
    dispatchEvent(TODO_DELETED, value)
  },
  [ACTION_DELETE_DUPLICATES]: (dispatchEvent) => {
    dispatchEvent(DUPLICATES_DELETED)
  },
  [ACTION_UNCHECK_TODO]: (dispatchEvent, getState, value) => {
    dispatchEvent(TODO_UNCHECKED, value)
  },
  [ACTION_NEW_TODO]: (dispatchEvent) => {
    dispatchEvent(NEW_TODO_ADDED)
  },
  [ACTION_INIT]: (dispatchEvent) => {
    // do nothing
  },
}

export default defaultActions
