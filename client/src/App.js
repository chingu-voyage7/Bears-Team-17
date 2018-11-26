import React, { Component } from 'react';

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
        {testok
          ? <p>backend is responding</p>
          : <p>waiting for backend response</p>
        }
      </div>
    );
  }
}

export default App;
