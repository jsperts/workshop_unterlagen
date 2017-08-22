// Beispielimplementierung, es gibt auch andere Möglichkeiten
// Implementierung mit ES6 Klassen
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
  class PermissionsSystem {
    constructor() {}
    getPermissionsFor(user) {
      var userPermissions = getUserPermissions(user);
      var userGroup = getUserGroup(user);
      var groupPermissions = getGroupPermissions(userGroup);

      var permissions = userPermissions.concat(groupPermissions);
      return permissions;
    }
  }
  /* Facade: end */

  // Nutzung
  const user = 'Max';
  const accessControl = new PermissionsSystem();
  const userPermissions = accessControl.getPermissionsFor(user);

  console.log(userPermissions);
})();
