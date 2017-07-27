import {
  GOT_DATA,
  ADDED_DATA,
  DELETED_DATA,
  REQUEST_SENT,
  GOT_RESPONSE,
} from './events';

import {
  execGetRequest,
  execPostRequest,
  execDeleteRequest,
} from './helpers/execServerRequest';

const basePath = '/data';

export function getData() {
  return (dispatch) => {
    execGetRequest(basePath)
      .then((data) => {
        dispatch({ type: GOT_RESPONSE });

        dispatch({
          type: GOT_DATA,
          payload: data,
        });
      });
  }
}

export function addData(data) {
  return (dispatch) => {
    dispatch({ type: REQUEST_SENT });

    execPostRequest(basePath, data)
      .then((dataWithID) => {
        dispatch({ type: GOT_RESPONSE });

        dispatch({
          type: ADDED_DATA,
          payload: dataWithID,
        });
      });
  };
}

export function deleteData(id) {
  return (dispatch) => {
    dispatch({ type: REQUEST_SENT });

    const path = `${basePath}/${id}`;
    execDeleteRequest(path)
      .then(() => {
        dispatch({ type: GOT_RESPONSE });

        dispatch({
          type: DELETED_DATA,
          payload: id,
        });
      });
  };
}
