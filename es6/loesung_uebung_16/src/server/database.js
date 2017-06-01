class InMemoryDB {
  constructor() {
    this._data = JSON.parse(
      `[{"id":3,"title":"foo foo bar","checked":false},
{"id":1,"title":"bar foo","checked":true},
{"id":4,"title":"bar baz bar","checked":false},
{"id":2,"title":"bar foo","checked":true},
{"id":5,"title":"bar foo","checked":true},
{"id":6,"title":"baz bar foo bar","checked":false}]`
    );
  }

  load() {
    return {
      nextId: calcId(this._data),
      todos: this._data,
    };
  }

  save(data) {
    this._data = data;
  }
}

function calcId(todos) {
  const ids = todos.map((todo) => todo.id);
  const maxId = Math.max(0, ...ids);
  return maxId + 1;
}

export default InMemoryDB;
