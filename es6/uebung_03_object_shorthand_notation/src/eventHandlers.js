import {
  FILTER_CHECKED_CHANGED,
} from 'eventTypes';

const eventHandlers = {
  [FILTER_CHECKED_CHANGED](prevState, value) {
    // hier muss der Wert übernommen werden

    // idealerweise sollte prevState nicht geändert, sondern eine Kopie angelegt, modifiziert und zurückgeliefert werden
    // für die Übungszwecke hier reicht es aber, prevState zu ändern

    return prevState;
  },
};

export default eventHandlers;
