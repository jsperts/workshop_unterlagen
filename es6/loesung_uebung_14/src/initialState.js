const initialState = {
  data: {
    list: [],
    nextId: undefined,
    todos: new Map(),
  },
  ui: {
    errorOccurred: undefined,
    filter: {
      hideChecked: false,
      text: '',
    },
    loading: false,
  },
};

export default initialState;
