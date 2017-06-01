const initialState = {
  data: {
    list: [],
    nextId: undefined,
    todos: {},
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
