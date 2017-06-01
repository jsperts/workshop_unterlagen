function saveToServer(data) {
  const dataForServer = prepareData(data);

  // url zum Speichern ist:
  // /data/save_todos
  // Datentype ist json
  // --> siehe https://github.com/github/fetch#post-json

  // Hier muss der fetch-Aufruf ergänzt werden
  // bitte beachten, dass dataForServer ein Objekt ist und erst noch nach JSON transformiert werden muss
}

function prepareData({ todos, list }) {
  // Rückgabewert solle ein Array sein (entsprechend zum Laden):
  // [{id: 1, title: 'foo', checked: false}, ...]

}

export default saveToServer;
