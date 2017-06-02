function createRootReducer(eventHandlers) {
  return (prevState, event) => {
    if (event.type === '@@INIT') {
      // ignore
      return prevState
    }
    if (!eventHandlers.hasOwnProperty(event.type)) {
      console.error('unknown event', event.type)
      throw new Error('Unknown event/no event handler for: ' + event.type.toString())
    }
    // clone the previous state to allow the reducer to change the state and still have diffs in the dev tools
    // normally the reducer shouldn't change the state but we allow this here to focus on the ES6 code in the excercises
    const prevStateClone = JSON.parse(JSON.stringify(prevState))
    const newState = eventHandlers[event.type](prevStateClone, event.value)
    if (newState === undefined) {
      throw new Error('Event handler returned undefined instead of the new state. Did you forget a return statement?')
    }
    return newState
  }
}

export default createRootReducer
