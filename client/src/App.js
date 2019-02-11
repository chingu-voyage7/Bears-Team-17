import React, { Component } from 'react';

import { Nav, NavItem } from './styled';
import EntryForm, { List } from './question';

class App extends Component {
  state = {
    menu: 0,
  };
  changeMenu = e => {
    console.log('change menu:', e.target.value);
    this.setState({menu: parseInt(e.target.value, 10)});
  };
  componentDidMount() {
    fetch('/test')
    .then(res => res.json())
    .then(res => {
      this.setState({ testok: res.message });
    });
  }
  renderPage = () => {
    switch(this.state.menu) {
      case 1:
        return (
          <div>
            <h2>Question Entry</h2>
            <div>
              <EntryForm />
            </div>
          </div>
        );
        // break;
      default:
        return (
          <div>
            <h2>Question List</h2>
            <div>
              <List />
            </div>
          </div>
        );
        // break;
    }
  }
  render() {
    const { menu: si } = this.state;
    return (
      <div className="App">
        <Nav>
          <NavItem onClick={this.changeMenu} value="0" selected={si===0} >List</NavItem>
          <NavItem onClick={this.changeMenu} value="1" selected={si===1}>Question</NavItem>
        </Nav>
        { this.renderPage() }
      </div>
    );
  }
}

export default App;
