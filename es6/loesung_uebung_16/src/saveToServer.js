function saveToServer(data) {
  const dataForServer = prepareData(data);

  // url zum Speichern ist:
  // /data/save_todos
  // Datentype ist json
  // --> siehe https://github.com/github/fetch#post-json

  fetch('/data/save_todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataForServer),
  });
}

function prepareData({ todos, list }) {
  // Rückgabewert solle ein Array sein (entsprechend zum Laden):
  // [{id: 1, title: 'foo', checked: false}, ...]

  return list.map((id) => {
    const { title, checked } = todos.get(id);
    return {
      id,
      title,
      checked,
    };
  });
}

export default saveToServer;
