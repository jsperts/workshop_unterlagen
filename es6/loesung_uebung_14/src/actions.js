import {
  ACTION_INIT,
} from 'actionTypes';

import {
  DATA_LOADED,
  ERROR_OCCURRED,
  LOADING_STARTED,
} from './customEvents';

import {
  loadTodos,
  loadTodosWithError,
} from 'callServer';

const actions = {
  [ACTION_INIT]: function (dispatchEvent) {
    // zum Start sollte der Event LOADING_STARTED erzeugt werden
    dispatchEvent(LOADING_STARTED);

    // hier müssen die todos vom Server geladen werden
    // loadTodos() liefert ein Promise zurück
    // bei Erfolg ist in then((data) => {})
    // das Ergebnis vorhanden

    loadTodos().then((data) => {
      // data hat folgendes Format:

      /*
      const exampleData = {
        nextId: 4, // in Produktivcode sollte eine bessere Möglichkeit gesucht werden, eindeutige Ids zu nutzen
                   // hier für unsere Übungszwecke reicht es aber aus
        todos: [
          {
            id: '3',
            title: 'foo',
            checked: false,
          },
          {
            id: '1',
            title: 'bar',
            checked: false,
          },
          {
            id: '2',
            title: 'baz',
            checked: true,
          },
        ],
      };

      // daraus muss dann die Struktur

      const exampleDataTransformed = {
        list: ['3', '1', '2'],
        nextId: 4,
        todos: {
          1: {
            title: 'bar',
            checked: false,
          },
          2: {
            title: 'baz',
            checked: true,
          },
          3: {
            title: 'foo',
            checked: false,
          },
        },
      };
      // erzeugt werden
      */

      const list = [];
      const todos = new Map();
      for (const todo of data.todos) {
        todos.set(todo.id, {
          title: todo.title,
          checked: todo.checked,
        });
        list.push(todo.id);
      }

      const dataTransformed = {
        list,
        nextId: data.nextId,
        todos,
      };

      // diese Daten können dann (immer noch im then des Promises) über ein neues Event in den Store übertragen werden:
      dispatchEvent(DATA_LOADED, dataTransformed);

      // dieses neue Event muss auch in customEvents.js eingetragen werden
      // in eventHandler.js müssen für die neuen Events entsprechende Handler implementiert werden
    }).catch((error) => {
        // optional kann noch ein Event ERROR_OCCURRED definiert werden, welches im Fehlerfall getriggert wird
        // der Fehler kann im state unter state.ui.errorOccurred hinterlegt werden
      dispatchEvent(ERROR_OCCURRED, error);
    });
  },
};

export default actions;
