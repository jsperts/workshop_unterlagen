import libClientMain from 'libClientMain';
import initialState from './initialState';
import actions from './actions';
import eventHandlers from './eventHandlers';
import readers from './readers';

libClientMain({
  actions,
  eventHandlers,
  initialState,
  readers,
});
