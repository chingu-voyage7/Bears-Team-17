import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  state = {
    testok: false,
  };
  componentDidMount() {
    fetch('/test')
    .then(res => res.json())
    .then(res => {
      this.setState({ testok: res.message });
    });
  }
  render() {
    const { testok } = this.state;
    return (
      <div className="App">
        <div>
          {testok
            ? <p>backend is responding</p>
            : <p>waiting for backend response</p>
          }
        </div>
        <div>
          <MyComponent />
        </div>
      </div>
    );
  }
}

export default App;
