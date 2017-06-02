import { createStore as reduxCreateStore } from 'redux'

function createStore({
  initialState,
  rootReducer,
}) {
  return reduxCreateStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
      serialize: {
        // allow symbols als action keys (normally we should avoid them because they're not serializable)
        replacer: (key, value) => {
          if (typeof value === 'symbol') return String(value)
          return value
        },
      },
    }),
  )
}

export default createStore
