const initialState = {
  data: {
    list: [
      1,
      2,
      3,
    ],
    nextId: 4,
    todos: {
      1: {
        title: 'Übung 1 durchführen',
        checked: true,
      },
      2: {
        title: 'Übung 2 durchführen',
        checked: false,
      },
      3: {
        title: 'Übung 3 durchführen',
        checked: false,
      },
    },
  },
  ui: {
    filter: {
      hideChecked: false,
      text: '',
    },
    loading: false,
  },
};

export default initialState;
