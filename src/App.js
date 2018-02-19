import React, { Component } from 'react';
import './App.css';


function Flame(props){
  //right now i'm just gonna do something easy with an svg or an image
  //later I'll implement a moving lines (flames) animation
  return(
      <div className="Flame">
        <img src={require("./img/flame.svg")} alt="" />
      </div>
    );
}
//Log
class Log extends Component{
  constructor(props){
    super(props);
  }
  render() {
  return(
      <div className="Log" >
        <img
          id="wood-log"
          src={require("./img/log.svg")}
          alt=""
          />
      </div>
    );
  }
}

//Contains Flame and Log Component
class Fire extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (

      <div className="Fire">
        <Flame />
        <Log/>
      </div>
    );
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className="title">
          a bonfire story
        </h1>
        <Fire />
      </div>
    );
  }
}

export default App;
