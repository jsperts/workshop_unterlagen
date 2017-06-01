import {
  ACTION_INIT,
} from 'actionTypes';

import {
  LOADING_STARTED,
} from './customEvents';

import {
  loadTodos,
  loadTodosWithError,
} from 'callServer';

const actions = {
  [ACTION_INIT]: function (dispatchEvent) {
    // zum Start sollte das Event LOADING_STARTED erzeugt werden
    dispatchEvent(LOADING_STARTED);

    // hier müssen die todos vom Server geladen werden
    // loadTodos() (oben bereits importiert) liefert ein Promise zurück
    // bei Erfolg ist in then((data) => {})
    // das Ergebnis vorhanden
    //
    // data hat folgendes Format:

    const exampleData = {
      nextId: 4, // in Produktivcode sollte eine bessere Möglichkeit gesucht werden, eindeutige Ids zu nutzen
                 // für unsere Übungszwecke reicht es aber aus
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

    // daraus muss dann folgende Struktur erzeugt werden

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

    // Diese Daten können dann (*immer noch im then des Promises*) über ein neues Event in den Store übertragen werden:

    dispatchEvent(DATA_LOADED, exampleDataTransformed);

    // Dieses neue Event muss auch in customEvents.js eingetragen werden
    // In eventHandler.js müssen für die neuen Events auch entsprechende Handler implementiert werden

    // optional kann noch ein Event ERROR_OCCURRED definiert werden (auch in customEvents.js), welches im Fehlerfall
    // getriggert wird
    //
    // Der Fehler kann im state unter state.ui.errorOccurred hinterlegt werden
    //
    // Zum Testen kann oben statt loadTodos() loadTodosWithError() verwendet werden
  },
};

export default actions;
