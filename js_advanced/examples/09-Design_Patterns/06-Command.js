// Beispielimplementierung, es gibt auch andere möglichkeiten
(function() {
  'use strict';

  /* Receiver: start */
  var actionFunctions = {
    add: function(a, b) {
      return a + b;
    },
    sub: function(a, b) {
      return a - b;
    }
  };

  var calc = {
    history: [],
    sum: 0,
    execute: function(action, undoAction, value) {
      var command = null;
      if (action === 'undo') {
        command = this.history.pop();
        this.sum = command.undoAction(this.sum, command.value);
        console.log('Sum:', this.sum);
      } else {
        command = {
          action: actionFunctions[action],
          undoAction: actionFunctions[undoAction],
          value: value
        };
        this.history.push(command);

        this.sum = command.action(this.sum, command.value);
        console.log('Sum:', this.sum);
      }
    }
  };
  /* Receiver: end */

  /* Command: start */
  function Command(receiver, action, undoAction) {
    this.action = action;
    this.undoAction = undoAction;
    this.receiver = receiver;
  }

  Command.prototype.execute = function(value) {
    this.receiver.execute(this.action, this.undoAction, value);
  };
  /* Command: end */

  /* Client: start */
  var addCommand = new Command(calc, 'add', 'sub');
  var subCommand = new Command(calc, 'sub', 'add');
  var undoCommand = new Command(calc, 'undo');
  /* Client: end */

  /* Invoker: start */
  addCommand.execute(2);
  addCommand.execute(4);
  undoCommand.execute();
  /* Invoker: end */
})();