const version = 1;
const dbName = 'TodosDB';
const dbStore = 'todos';

const IDBTransactionModes = {
  'READ_ONLY': 'readonly',
  'READ_WRITE': 'readwrite'
};

const storeOptions = {
  keyPath: '_id',
  autoIncrement: true
};

function open(successCb, errorCb) {
  const request = indexedDB.open(dbName, version);

  request.addEventListener('success', onSuccess);
  request.addEventListener('error', onError);
  request.addEventListener('upgradeneeded', onUpgrade);

  function onSuccess(event) {
    const db = event.target.result;
    successCb(db)
  }

  function onError(event) {
    errorCb(event.target.error);
  }

  function onUpgrade(event) {
    const db = event.target.result;
    // Create store
    db.createObjectStore(dbStore, storeOptions);
  }
}

export function getAll(successCb, errorCb) {
  // Open DB
  open(openSuccess, openError);

  function openSuccess(db) {
    // Create transaction
    const transaction = db.transaction([dbStore], IDBTransactionModes.READ_ONLY);
    // Get object store from transaction
    const objectStore = transaction.objectStore(dbStore);

    const data = [];
    const request = objectStore.openCursor();

    request.addEventListener('success', onSuccess);
    request.addEventListener('error', onError);

    function onSuccess(event) {
      const cursor = event.target.result;

      if (cursor && cursor !== null) {
        data.push(cursor.value);
        cursor.continue();
      } else {
        db.close();
        successCb(data);
      }
    }

    function onError(event) {
      db.close();
      errorCb(event.target.error);
    }
  }

  function openError(error) {
    errorCb(error);
  }
}

export function getOne(key, successCb, errorCb) {
  open(openSuccess, openError);

  function openSuccess(db) {
    const transaction = db.transaction([dbStore], IDBTransactionModes.READ_ONLY);
    const objectStore = transaction.objectStore(dbStore);

    const request = objectStore.get(key);

    request.addEventListener('success', onSuccess);
    request.addEventListener('error', onError);

    function onSuccess(event) {
      db.close();
      successCb(event.target.result);
    }

    function onError(event) {
      db.close();
      errorCb(event.target.error);
    }
  }

  function openError(error) {
    errorCb(error);
  }
}

export function remove(key, successCb, errorCb) {
  open(openSuccess, openError);

  function openSuccess(db) {
    const transaction = db.transaction([dbStore], IDBTransactionModes.READ_WRITE);
    const objectStore = transaction.objectStore(dbStore);
    const request = objectStore.delete(key);

    request.addEventListener('success', onSuccess);
    request.addEventListener('error', onError);

    function onSuccess() {
      db.close();
      successCb();
    }

    function onError(event) {
      db.close();
      errorCb(event.target.error);
    }
  }

  function openError(error) {
    errorCb(error);
  }
}

export function add(data, successCb, errorCb) {
  open(openSuccess, openError);

  function openSuccess(db) {
    const transaction = db.transaction([dbStore], IDBTransactionModes.READ_WRITE);
    const objectStore = transaction.objectStore(dbStore);
    const request = objectStore.add(data);

    request.addEventListener('success', onSuccess);
    request.addEventListener('error', onError);

    function onSuccess(event) {
      db.close();
      successCb(event.target.result);
    }

    function onError(event) {
      db.close();
      errorCb(event.target.error);
    }
  }

  function openError(error) {
    errorCb(error);
  }
}

export function update(data, successCb, errorCb) {
  open(openSuccess, openError);

  function openSuccess(db) {
    const transaction = db.transaction([dbStore], IDBTransactionModes.READ_WRITE);
    const objectStore = transaction.objectStore(dbStore);
    const request = objectStore.put(data);

    request.addEventListener('success', onSuccess);
    request.addEventListener('error', onError);

    function onSuccess() {
      db.close();
      successCb();
    }

    function onError(event) {
      db.close();
      errorCb(event.target.error);
    }
  }

  function openError(error) {
    errorCb(error);
  }
}
