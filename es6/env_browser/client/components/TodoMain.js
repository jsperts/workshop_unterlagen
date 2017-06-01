import React from 'react'
import PropTypes from 'prop-types'

import SpanWithHighlights from './SpanWithHighlights'
import TodoActions from './TodoActions'
import TodoList from './TodoList'
import {
  READ_TODOS_TO_SHOW,
  READ_INFO_TEXT,
} from '../readerTypes'

const mainStyle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}

const loadingStyle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '20pt',
  marginTop: '20px',
}

const actionStyle = {
  flex: '0 0 auto',
}

const listStyle = {
  flex: '1 1 auto',
}

const TodoMain = ({
  actions,
  readers,
  state,
}) => {
  const infoText = readers[READ_INFO_TEXT](state)
  const todosToShow = readers[READ_TODOS_TO_SHOW](state)

  if (state.ui.errorOccurred) {
    return (
      <div style={loadingStyle} >
        <p>
          Leider ist ein Fehler beim Laden der Daten aufgetreten.
        </p>
        <p>
          Bitte versuchen Sie es später erneut.
        </p>
        <p>
          Technische Details: {state.ui.errorOccurred.toString()}
        </p>
      </div>
    )
  } else if (state.ui.loading) {
    return (
      <div style={loadingStyle} >
        Loading
        <span className='glyphicon glyphicon-refresh anim-spin' />
      </div>
    )
  } else {
    return (
      <div style={mainStyle} >
        <TodoActions
          actions={actions}
          filterText={state.ui.filter.text}
          hideChecked={state.ui.filter.hideChecked}
          style={actionStyle}
        />
        <div>
          <SpanWithHighlights text={infoText} />
        </div>
        <TodoList
          actions={actions}
          style={listStyle}
          todos={todosToShow}
        />
      </div>
    )
  }
}

TodoMain.propTypes = {
  actions: PropTypes.object.isRequired,
  readers: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
}

export default TodoMain
