import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let deafaultTextColor = '#fff';

class Aggregate extends Component {
  render () {
    return (
      <div style={{width: "40%", display: 'inline-block'}}>
        <h2 style={{color: 'white'}}>number text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={{color: deafaultTextColor}}>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div style={{color: deafaultTextColor, width:"20%"}}>
        <img />
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
        </div>
    );
  }    
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
      </div>
    );
  }
}

export default App;
