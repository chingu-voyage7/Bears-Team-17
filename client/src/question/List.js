import React from 'react'

import { getQuestions } from './actions';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
    this.refresh();
  }
  refresh() {
    getQuestions()
    .then(res => {
      if (res.success === true) {
        this.setState({ list: res.list });
      } else {
        this.setState({ list: [{ title: '', text: 'no questions yet' }] });
      }
    });
  }
  render () {
    const { list = [] } = this.state;
    const items = list.map((q, i) => <li key={i}>{q.title} - {q.text}</li>);
    return (
      <ul>
        {items}
      </ul>
    );
  }
}

export default List;
