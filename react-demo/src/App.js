import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormattedDate from './components/FormattedDate';

function Welcome(props) {
  return <h1>Hello, {props.title}</h1>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      title: 'welcome react'
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome title={this.state.title}/>
        </header>
        <FormattedDate date={this.state.date} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
