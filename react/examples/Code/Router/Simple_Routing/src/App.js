import React from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';

import About from './About';
import Home from './Home';
import Products from './Products';

function App() {
  return (<div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/about" component={About} />
      <Redirect to="/home" />
    </Switch>
  </div>);
}

export default App;
