// Beispielimplementierung, es gibt auch andere möglichkeiten
(function(document) {
  'use strict';

  // Used for the Observer Pattern
  function Observable() {
    this._listeners = [];
  }

  Observable.prototype.observe = function(cb) {
    this._listeners.push(cb);
  };

  Observable.prototype.notify = function(data) {
    this._listeners.forEach(function(listener) {
      listener(data);
    });
  };

  /* Binder: start */
  function Binder(viewModel) {
    var dataBindings = document.querySelectorAll('[bind-data]');
    var functionBindings = document.querySelectorAll('[bind-func]');
    Array.prototype.forEach.call(dataBindings, function(dataBinding) {
      var addToDOM = (function addToDOM(dataBinding) {
        return function(data) {
          if (data) {
            var dataString = data.map(function(todo) {
              return '<li>' + todo + '</li>';
            }).join('');
            dataBinding.innerHTML = dataString;
          }
        }
      })(dataBinding);

      var bindWhat = dataBinding.getAttribute('bind-data');
      var value = viewModel[bindWhat];
      Object.defineProperty(viewModel, bindWhat, {
        get: function() {
          return value;
        },
        set: function(data) {
          // Set data in viewModel (implicit set, the getter returns the value)
          value = data;
          // Add data to DOM (we assume list here!)
          addToDOM(value);
        }
      });

      // add initial data to DOM
      addToDOM(value);

      // On change, take the value and pass it to viewModel
      dataBinding.addEventListener('change', function() {
        value = dataBinding.value;
      });
    });

    Array.prototype.forEach.call(functionBindings, function(functionBinding) {
      var bindWhat = functionBinding.getAttribute('bind-func');
      // On click call the bound function
      functionBinding.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        viewModel[bindWhat].call(viewModel);
      });
    });
  }

  /* Binder: end */

  /* Model: start */
  function TodoModel(todos) {
    this._todos = todos;
    this.todoAdded = new Observable();
  }

  TodoModel.prototype.addTodo = function(todo) {
    this._todos.push(todo);
    this.todoAdded.notify(todo);
  };

  TodoModel.prototype.getTodos = function() {
    return this._todos;
  };
  /* Model: end */

  /* ViewModel: start */
  function TodoViewModel(model) {
    var self = this;
    this._model = model;
    this.todosList = model.getTodos();
    model.todoAdded.observe(function(todos) {
      self.todosList = model.getTodos();
    });
    this.addTodo = function() {
      model.addTodo(this.todo);
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
