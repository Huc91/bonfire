import React, { Component } from 'react';
import './App.css';

const data = {
    users: 0,
    firstTime: true,
    time: 0,
    firePower: 3
  };

const fire = {
  logPosition: {
      x: 0,
      y: 0
    },
  flameBound: {
    a: {
      x:0,
      y:0
    },
    b: {
      x:10,
      y:0
    },
    c: {
      x:10,
      y:10
    },
    d: {
      x:0,
      y:10
    }
  }
};

function Greeting(props){
  const first = props.first;
  const firstTime =
      <div className="Greeting">
        <h2>
          Hello,
        </h2>
        <img src={require("./img/tent.png")} alt="" />
        <h2>
          you’re welcome
        </h2>
      </div>
  const veteran = <img src={require("./img/tent.png")} alt="" />
  return (
    first ? firstTime : veteran
  );
}

function Time(props){
  return (<div className="Time"></div>);
}

class Fire extends Component {
  constructor(props){
    super(props);
    this.state = {fire: fire}
  }

  render() {
    return (
      <div className="Fire">
      </div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {data: data}
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">
          a bonfire story
        </h1>
        <Greeting first={this.state.data.firstTime} />
        <Time />
        <Fire />

      </div>
    );
  }
}

export default App;
