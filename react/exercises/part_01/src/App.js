import React from 'react';
import './App.css';

function App({ contacts }) {
  return (
    <div className="container">
      <header className="jumbotron">
        <h1>Contact Manager</h1>
      </header>
      <main>
        <nav className="navbar navbar-default">
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-form btn-group">
              <li className="btn-group">
                <button type="button" className="btn btn-default">
                  All
                </button>
              </li>
              <li className="btn-group">
                <button type="button" className="btn btn-default">
                  Business
                </button>
              </li>
              <li className="btn-group">
                <button type="button" className="btn btn-default">
                  Private
                </button>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-form navbar-right">
              <li>
                <button className="btn btn-default">Add</button>
              </li>
            </ul>
          </div>
        </nav>
        <form className="contact-form">
          <div className="row">
            <div className="col-xs-6">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="telephone">Telephone:</label>
                <input
                  type="text"
                  className="form-control"
                  name="telephone"
                  id="telephone"
                />
              </div>
            </div>
            <div className="col-xs-6">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="type">Type:</label>
                <select className="form-control" name="type" id="type">
                  {['Private', 'Business'].map(opt => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="btn-group">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
              <button type="button" className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </form>
        <div>
          <ul className="list-group">
            {contacts.map(contact => (
              <li key={contact.id} className="list-group-item">
                <div className="row">
                  <div className="col-xs-6">
                    <div>Name: {contact.name}</div>
                    <div>Tel.: {contact.tel}</div>
                  </div>
                  <div className="col-xs-6 text-right">
                    <div className="row">
                      <div className="col-xs-12">
                        <span className="glyphicon glyphicon-remove" />
                        <span className="glyphicon glyphicon-edit" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12">
                        <span className="glyphicon glyphicon-chevron-down" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-6">Email: {contact.email}</div>
                  <div className="col-xs-6">Type: {contact.type}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
