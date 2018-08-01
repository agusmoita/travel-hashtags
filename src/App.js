import React, { Component } from 'react';
import './App.css';
import _ from 'lodash'
import argentina from './argentina';
import hashtags from './hashtags';
import travel from './travel';
import otros from './otros';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      argentina,
      hashtags,
      otros,
      travel
    };
  }

  obtener() {
    const hashtags = _(this.state.hashtags).shuffle().take(11).value();
    const argentina = _(this.state.argentina).shuffle().take(5).value();
    const travel = _(this.state.travel).shuffle().take(6).value();
    const otros = _(this.state.otros).shuffle().take(1).value();
    return _.join(_.concat(argentina, travel, otros, hashtags), ' ');
  }

  render() {
    return (
      <div className="App">
        <div className="hashtags-list">
          <p>{this.obtener()}</p>
        </div>
      </div>
    );
  }

}

export default App;
