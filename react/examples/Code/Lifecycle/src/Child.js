import React, { Component } from 'react';

class Child extends Component {
  constructor() {
    super();
    console.log('constructor');
  }

  componentWillMount() {
    console.log('will mount');
  }

  render() {
    console.log('render');

    return <div>Data: {this.props.data}</div>;
  }

  componentDidMount() {
    console.log('did mount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('will receive props --', 'next Props:', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should update --', 'next Props:', nextProps, 'next State:', nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('will update --', 'next Props:', nextProps, 'next State:', nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('did update --', 'prev Props:', prevProps, 'prev State:', prevState);
  }

  componentWillUnmount() {
    console.log('will unmount');
  }
}

export default Child;
