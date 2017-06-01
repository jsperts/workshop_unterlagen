import 'bootstrap/dist/css/bootstrap.min.css'
import './css/loading.css'

import React from 'react'
import ReactDOM from 'react-dom'
import createRootReducer from './util/createRootReducer'
import createStore from './store/createStore'
import defaultActions from './defaultActions'
import defaultEventHandlers from './defaultEventHandlers'
import defaultReaders from './defaultReaders'
import prepareActions from './util/prepareActions'

import { ACTION_INIT } from './actionTypes'

function initApp({
  actions = {},
  eventHandlers = {},
  initialState,
  readers = {},
}) {
  const preparedEventHandlers = Object.assign({}, defaultEventHandlers, eventHandlers)
  const rootReducer = createRootReducer(preparedEventHandlers)

  const store = createStore({
    initialState,
    rootReducer,
  })

  const preparedActions = prepareActions(store, Object.assign({}, defaultActions, actions))
  const preparedReaders = Object.assign({}, defaultReaders, readers)

  const rootNode = document.getElementById('root')

  function render(state) {
    const TodoMain = require('./components/TodoMain').default
    ReactDOM.render(
      <TodoMain
        actions={preparedActions}
        readers={preparedReaders}
        state={store.getState()}
      />,
      rootNode
    )
  }

  function renderError(error) {
    const RedBox = require('redbox-react').default

    ReactDOM.render(<RedBox error={error} />, rootNode)

    console.log('got error', error)
  }

  function renderWithCatch() {
    try {
      render()
    } catch (error) {
      renderError(error)
    }
  }

  if (module.hot) {
    // Development render functions

    // Setup hot module replacement
    module.hot.accept('./components/TodoMain', () =>
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(rootNode)
        renderWithCatch()
      }, 0)
    )

    renderWithCatch()

    store.subscribe(renderWithCatch)
  } else {
    render()

    store.subscribe(render)
  }

  setTimeout(() => preparedActions[ACTION_INIT](), 0)
}

export function updateRootReducer({
  store,
  rootReducer,
}) {
  store.replaceReducer(rootReducer)
}

export default initApp
