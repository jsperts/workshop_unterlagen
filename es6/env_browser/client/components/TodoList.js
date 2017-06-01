import React from 'react'
import PropTypes from 'prop-types'

import SpanWithHighlights from './SpanWithHighlights'
import {
  ACTION_CHANGE_TODO_TITLE,
  ACTION_CHECK_TODO,
  ACTION_DELETE_TODO,
  ACTION_UNCHECK_TODO,
} from '../actionTypes'

function mainStyle(style) {
  return Object.assign({}, style, {})
}

const itemStyle = {
  display: 'flex',
  flexDirection: 'row',
}

const checkboxStyle = {
  marginRight: '1em',
}

const inputStyle = {
  minWidth: '400px',
}

const deleteStyle = {
  marginLeft: '1em',
}

function handleChangeTodoCheck(actions, id, value) {
  if (value) {
    actions[ACTION_CHECK_TODO](id)
  } else {
    actions[ACTION_UNCHECK_TODO](id)
  }
}

function TodoInput({ actions, todo }) {
  if (typeof todo.title === 'string' || todo.title.length === 1) {
    const title = typeof todo.title === 'string' ? todo.title : todo.title[0]
    return <input
      className='form-control'
      onChange={(event) => actions[ACTION_CHANGE_TODO_TITLE]({
        id: todo.id,
        title: event.target.value,
      })}
      style={inputStyle}
      type='text'
      value={title}
    />
  } else {
    return <SpanWithHighlights
      className='form-control'
      style={inputStyle}
      text={todo.title}
    />
  }
}
TodoInput.propTypes = {
  actions: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
}

const TodoList = ({
  actions,
  style = {},
  todos,
}) => (
  <div style={mainStyle(style)} >
    {
      todos.map((todo) => (
        <div
          key={todo.id}
          className='form-inline'
          style={itemStyle}
        >
          <div
            className='checkbox'
            style={checkboxStyle}
          >
            <input
              onChange={(event) => handleChangeTodoCheck(actions, todo.id, event.target.checked)}
              type='checkbox'
              checked={todo.checked}
            />
          </div>
          {TodoInput({ actions, todo })}
          <button
            className='close'
            onClick={() => actions[ACTION_DELETE_TODO](todo.id)}
            style={deleteStyle}
            type='button'
          >
            ×
          </button>
        </div>
      ))
    }
  </div>
)
TodoList.propTypes = {
  actions: PropTypes.object.isRequired,
  style: PropTypes.object,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TodoList
