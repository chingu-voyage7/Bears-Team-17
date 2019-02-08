import React, { Component } from 'react';

import Question from './question';

class App extends Component {
  componentDidMount() {
    fetch('/test')
    .then(res => res.json())
    .then(res => {
      this.setState({ testok: res.message });
    });
  }
  render() {
    return (
      <div className="App">
        <h2>Question Entry</h2>
        <div>
          <Question />
        </div>
      </div>
    );
  }
}

export default App;
