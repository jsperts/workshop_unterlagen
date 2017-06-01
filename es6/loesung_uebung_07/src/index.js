import libClientMain from 'libClientMain';
import initialState from './initialState';
import eventHandlers from './eventHandlers';
import readers from './readers';

libClientMain({
  eventHandlers: eventHandlers,
  initialState: initialState,
  readers: readers,
});
