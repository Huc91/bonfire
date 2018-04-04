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
// the Log class
// the log sprite is gonna be moved around
//so it should be connected to the mouse || finger
class Log extends Component{
  constructor(props){
    super(props);
    //the Log state
    this.state = {
      active: false
    }
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  //the Log should follow the cursor position
  //only if it's active
  //a click or tap activate it

  handleMouseDown(){
    this.setState({active: true})
  }
  handleMouseUp(){
    this.setState({active: false})
  }

  render() {
  const logPosition = {
    //center (-100)
    top: this.props.yPos - 100,
    left: this.props.xPos - 100
  }
  const fixPosition = {
    top: 400,
    left: 200
  }
  const burnPosition = {

  }

  return(
      <div
        className="Log"
        style={this.state.active ? logPosition : fixPosition}
        onMouseDown={(e) => this.handleMouseDown(e)}
        onMouseUp={(e) => this.handleMouseUp(e)}
      >
        <img
          id="wood-log"
          src={require("./img/log.svg")}
          alt=""
          draggable="false"
        />
        <p>
          {this.props.xPos} |
          {this.props.yPos}
        </p>
      </div>
    );
  }
}

//Contains Flame and Log Component
//what you need to do a fire? a Log and a Flame
class Fire extends Component {
  constructor(props){
    super(props);
  }

  render() {
    //pass the mouse position get from the App component
    //to the Log component
    return (

      <div className="Fire">
        <Flame />
        <Log
          xPos={this.props.xPos}
          yPos={this.props.yPos}
        />
      </div>
    );
  }
}
//inserting mouse position
//clientX
//clientY
class App extends Component {

  constructor(props){
    super(props);
    //the upper level state
    this.state = {
      mouseX: 0,
      mouseY: 0,
    }
    this.handleOnMouseMove = this.handleOnMouseMove.bind(this);
  }

  handleOnMouseMove(e){
    this.setState({
      mouseX: e.pageX,
      mouseY: e.pageY,
    })
    const mousePosition = this.state.mouseX + '|' + this.state.mouseY;
    console.log(mousePosition);
  }

  render() {
    //I'm gonna pass the mouse position to the Fire Component
    //that is gonna pass it to the Log Component
    return (
      <div className="App" onMouseMove={(e) => this.handleOnMouseMove(e)}>
        <h1 className="title">
          a bonfire story
        </h1>
        <Fire
          xPos={this.state.mouseX}
          yPos={this.state.mouseY}
        />
      </div>
    );
  }
}

export default App;
