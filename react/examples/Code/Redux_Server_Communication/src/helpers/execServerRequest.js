import 'whatwg-fetch';

const commonOpts = {
  credentials: 'include', // send cookies
};

function prepareJSONData(data) {
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');

  const jsonOptions = {
    body: JSON.stringify(data),
    headers,
  };

  return jsonOptions;
}

function execRequest(path, opts) {
  return fetch(path, opts)
    .then((response) => {
      // status 200-299
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(new Error('Wrong server status'));
      }

    }, (e) => {
      console.log('Network error', e);
    })
    .catch((e) => {
      console.log('Server error', e);
    });
}

export function execGetRequest(path) {
  const opts = Object.assign({ method: 'GET' }, commonOpts);
  return execRequest(path, opts);
}

export function execPostRequest(path, data) {
  const opts = Object.assign({ method: 'POST' }, commonOpts, prepareJSONData(data));
  return execRequest(path, opts);
}

export function execDeleteRequest(path) {
  const opts = Object.assign({ method: 'DELETE' }, commonOpts);
  return execRequest(path, opts);
}
