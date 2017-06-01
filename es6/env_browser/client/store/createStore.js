import { createStore as reduxCreateStore } from 'redux'

function createStore({
  initialState,
  rootReducer,
}) {
  return reduxCreateStore(
    rootReducer,
    initialState,
  )
}

export default createStore
