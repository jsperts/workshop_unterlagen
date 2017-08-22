// Beispielimplementierung, es gibt auch andere Möglichkeiten
(function (document) {
  'use strict';

  // Used for the Observer Pattern
  class Observable {
    constructor() {
      this.listeners = [];
    }

    observe(cb) {
      this.listeners.push(cb);
    }

    notify(data) {
      this.listeners.forEach((listener) => {
        listener(data);
      });
    }
  }

  /* Binder: start */
  function Binder(viewModel) {
    var dataBindingsInput = document.querySelectorAll('[bind-input]');
    var dataBindingsList = document.querySelectorAll('[bind-list]');
    var functionBindings = document.querySelectorAll('[bind-func]');
    Array.prototype.forEach.call(dataBindingsInput, function (dataBinding) {
      var bindWhat = dataBinding.getAttribute('bind-input');
      var value = viewModel[bindWhat];
      Object.defineProperty(viewModel, bindWhat, {
        get: function () {
          return value;
        },
        set: function (data) {
          // Set data in viewModel
          value = data;
          // value of input field should actually be changed here
          // ...but this case is not used in this example
        },
      });

      // On change, take the value and pass it to viewModel
      dataBinding.addEventListener('change', function () {
        value = dataBinding.value;
      });
    });

    Array.prototype.forEach.call(dataBindingsList, function (dataBinding) {
      var addToDOM = (function addToDOM(dataBinding) {
        return function (data) {
          if (data) {
            var dataString = data.map(function (todo) {
              // don't do this in production code, todo needs to be escaped
              return `<li>${todo}</li>`;
            }).join('');
            dataBinding.innerHTML = dataString;
          }
        };
      })(dataBinding);

      var bindWhat = dataBinding.getAttribute('bind-list');
      var value = viewModel[bindWhat];
      Object.defineProperty(viewModel, bindWhat, {
        get: function () {
          return value;
        },
        set: function (data) {
          // Set data in viewModel (implicit set, the getter returns the value)
          value = data;
          // Add data to DOM (we assume list here!)
          addToDOM(value);
        },
      });

      // add initial data to DOM
      addToDOM(value);
    });

    Array.prototype.forEach.call(functionBindings, function (functionBinding) {
      var bindWhat = functionBinding.getAttribute('bind-func');
      // On click call the bound function
      functionBinding.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        viewModel[bindWhat].call(viewModel);
      });
    });
  }
  /* Binder: end */

  /* Model: start */
  class TodoModel {
    constructor(todos) {
      this.todos = todos;
      this.todoAdded = new Observable();
    }

    addTodo(todo) {
      this.todos.push(todo);
      this.todoAdded.notify(todo);
    }

    getTodos() {
      return this.todos;
    }
  }
  /* Model: end */

  /* ViewModel: start */
  class TodoViewModel {
    constructor(model) {
      this.model = model;
      this.todosList = model.getTodos();
      model.todoAdded.observe(() => {
        this.todosList = model.getTodos();
      });
      this.addTodo = () => {
        model.addTodo(this.todo);
      };
    }
  }
  /* ViewModel: end */

  // Bootstrap
  (function bootstrap() {
    var model = new TodoModel(['a', 'b', 'c']);
    var viewModel = new TodoViewModel(model);
    new Binder(viewModel);
  })();
})(document);
