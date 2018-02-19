import React, { Component } from 'react';
import './App.css';

//the basical data
//number of users,
//if it's the first time that you're here,
// time elapsed from fire start,
//the fire power.
const data = {
    users: 0,
    firstTime: true,
    time: '00.00.00',
    firePower: 3
  };


//fire specific data. The position of the wood log and the rectangle
//that contains the flame. When the log in into the rectangle trigger the function.
const fire = {
  logPosition: {
      x: 0,
      y: 0,
      drag: false
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

//Flavor text to greet you. It happens only the first time

function Greeting(props){
  const first = props.first;
  //what to render if it's first time
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
  //what to render if you're a veteran
  const veteran = <div>
    <img src={require("./img/tent.png")} alt="" />
    <span>{props.users}</span>
    </div>
  return (
    first ? firstTime : veteran
  );
}


//time elapsed since the fire started, component
function Time(props){
  return (<div className="Time">
    {props.time}
  </div>);
}

//The Flame & the Log Component
//Flame
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
    //legacy
    this.dragS = this.props.dragS;
    this.dragE = this.props.dragE;
  }
  render() {
    console.log(this.dragS);
  return(
      <div className="Log" >
        <img
          id="wood-log"
          src={require("./img/log.svg")}
          alt=""
          draggable="true"
          //read on https://reactjs.org/docs/events.html
          //"Your event handlers will be passed
          //instances of SyntheticEvent,
          //a cross-browser wrapper around
          //the browser’s native event
          //If you find that you need the
          //underlying browser event for some reason,
          //simply use the nativeEvent attribute"
          //this means --> e.nativeEvent
          onDragStart={(e) => this.dragS(e.nativeEvent)}
          onDragEnd={this.dragE}
          />
      </div>
    );
  }
}

//Contains Flame and Log Component
class Fire extends Component {
  constructor(props){
    super(props);
    this.state = {fire: fire};
    this.dragS = this.dragS.bind(this);
    this.dragE = this.dragE.bind(this);
  }

  //drag methods that will work on the log
  // I did this to update this class (the Fire class) state
  dragS(ev){
    console.log('drag start');
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text", ev.target.id);
    var img = new Image();
    img.src = './img/flame.svg';
    ev.dataTransfer.setDragImage(img, 10, 10);
    this.setState({fire: 'yo'});
  }

  dragE(ev){
    console.log('drag end');
  }

  render() {
    return (

      <div className="Fire">
        <Flame />
        <Log
          dragS={this.dragS}
          dragE={this.dragE}
        />
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
        <Greeting first={this.state.data.firstTime} users={this.state.data.users}/>
        <Time time={this.state.data.time}/>
        <Fire />

      </div>
    );
  }
}

export default App;
