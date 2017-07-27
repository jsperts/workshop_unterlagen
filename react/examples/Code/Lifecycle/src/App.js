import React, { Component } from 'react';

import Child from './Child';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: 10,
      isVisible: true,
    };

    this.onToggleChild = this.onToggleChild.bind(this);
    this.onChangeDataToFive = this.onChangeDataToFive.bind(this);
    this.onChangeDataToTen = this.onChangeDataToTen.bind(this);
  }

  onToggleChild() {
    this.setState((state) => ({
      isVisible: !state.isVisible,
    }));
  }

  onChangeDataToFive() {
    this.setState({ data: 5 });
  }

  onChangeDataToTen() {
    this.setState({ data: 10 });
  }

  render() {
    return (<div>
      <div className="btn-group">
        <button type="button" className="btn btn-primary" onClick={this.onToggleChild}>Toggle Child</button>
        <button type="button" className="btn btn-primary" onClick={this.onChangeDataToFive}>Change to 5</button>
        <button type="button" className="btn btn-primary" onClick={this.onChangeDataToTen}>Change to 10</button>
      </div>
      { this.state.isVisible && <Child data={this.state.data} /> }
    </div>);
  }
}
export default App;
