import libClientMain from 'libClientMain';
import initialState from './initialState';
import readers from './readers';

libClientMain({
  initialState: initialState,
  readers: readers,
});
