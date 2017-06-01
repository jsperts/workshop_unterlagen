import React from 'react'
import PropTypes from 'prop-types'

import {
  ACTION_CHANGE_FILTER_CHECKED,
  ACTION_CHANGE_FILTER_TEXT,
  ACTION_DELETE_DUPLICATES,
  ACTION_NEW_TODO,
} from '../actionTypes'

function mainStyle(style) {
  return Object.assign({}, style, {
    display: 'flex',
    flexDirection: 'row',
  })
}

const innerStyle = {
  margin: '0 2em',
}

const TodoActions = ({
  actions,
  filterText,
  hideChecked,
  style = {},
}) => (
  <div
    className='form-inline'
    style={mainStyle(style)}
  >
    <button
      className='btn btn-default'
      onClick={() => actions[ACTION_NEW_TODO]()}
      style={innerStyle}
      type='button'
    >
      {'Neu'}
    </button>
    <div
      className='checkbox'
      style={innerStyle}
    >
      <label>
        <input
          checked={hideChecked}
          onChange={(event) => actions[ACTION_CHANGE_FILTER_CHECKED](event.target.checked)}
          type='checkbox'
        />
        {' Erledigte ausblenden'}
      </label>
    </div>
    <label
      style={innerStyle}
    >
      {'Filter: '}
      <input
        onChange={(event) => actions[ACTION_CHANGE_FILTER_TEXT](event.target.value)}
        type='text'
        value={filterText}
      />
    </label>
    <button
      className='btn btn-default'
      onClick={() => actions[ACTION_DELETE_DUPLICATES]()}
      style={innerStyle}
      type='button'
    >
      {'Duplikate entfernen'}
    </button>
  </div>
)
TodoActions.propTypes = {
  actions: PropTypes.object.isRequired,
  filterText: PropTypes.string.isRequired,
  hideChecked: PropTypes.bool.isRequired,
  style: PropTypes.object,
}

export default TodoActions
