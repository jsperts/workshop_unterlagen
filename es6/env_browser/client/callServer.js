import {
  checkStatus,
  parseJSON,
} from './util/fetchUtil'

export function loadTodos() {
  return fetch('/data/load_todos')
    .then(checkStatus)
    .then(parseJSON)
}

export function loadTodosWithError() {
  return fetch('/data/load_todos_with_error')
    .then(checkStatus)
    .then(parseJSON)
}
