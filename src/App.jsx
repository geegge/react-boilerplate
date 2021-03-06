import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import HelloWorld from './components/shared/HelloWorld';
import Button from './components/shared/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HelloWorld title="Hello World" />
        <Button name="Button" />
      </div>
    );
  }
}

export default hot(module)(App);
