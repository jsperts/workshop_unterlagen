function createDispatchFunction(store) {
  return (eventType, value) => {
    store.dispatch({
      type: eventType,
      value,
    })
  }
}

function prepareActions(store, actions) {
  const dispatch = createDispatchFunction(store)

  const result = {}

  Object.getOwnPropertySymbols(actions).forEach((propSymbol) => {
    const action = actions[propSymbol]
    result[propSymbol] = (value) => {
      action(dispatch, store.getState.bind(store), value)
    }
  })

  return result
}

export default prepareActions
