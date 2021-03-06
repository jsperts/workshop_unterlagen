// Beispielimplementierung, es gibt auch andere Möglichkeiten
// Implementierung für ES5, Pseudoklassisch
(function () {
  'use strict';

  /* Subsystem functions: start */
  function getUserPermissions(user) {
    // query db to get user's permissions
    return ['read'];
  }

  function getGroupPermissions(group) {
    // query db to get group permissions
    return ['read', 'write'];
  }

  function getUserGroup(user) {
    // query db to get user's group
    return 'usersGroup';
  }
  /* Subsystem objects: end */

  /* Facade: start */
  var permissionsSystemPrototype = Object.create(Object.prototype, {
    getPermissionsFor: {
      writable: false,
      configurable: false,
      enumerable: false,
      value: function (user) {
        var userPermissions = getUserPermissions(user);
        var userGroup = getUserGroup(user);
        var groupPermissions = getGroupPermissions(userGroup);

        var permissions = userPermissions.concat(groupPermissions);
        return permissions;
      },
    },
  });
  /* Facade: end */

  // Nutzung
  var user = 'Max';
  var accessControl = Object.create(permissionsSystemPrototype);
  var userPermissions = accessControl.getPermissionsFor(user);

  console.log(userPermissions);
})();
