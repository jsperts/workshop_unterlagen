function createRootReducer(eventHandlers) {
  return (prevState, event) => {
    if (!eventHandlers.hasOwnProperty(event.type)) {
      console.error('unknown event', event.type)
      throw new Error('Unknown event/no event handler for: ' + event.type.toString())
    }
    const newState = eventHandlers[event.type](prevState, event.value)
    if (newState === undefined) {
      throw new Error('Event handler returned undefined instead of the new state. Did you forget a return statement?')
    }
    return newState
  }
}

export default createRootReducer
