// Beispielimplementierung, es gibt auch andere Möglichkeiten
(function () {
  'use strict';

  /* Adapter: start */
  var serverCommunication = {
    getData: function () {
      var serverData = httpDummy.get();
      clientData = transform(serverData);
      return clientData;
    },
    updateData: function (clientData) {
      var serverData = transform(clientData);
      httpDummy.post(serverData);
    },
  };
  /* Adapter: end */

  // Nutzung
  var clientData = serverCommunication.getData();
  serverCommunication.updateData('data');
})();
