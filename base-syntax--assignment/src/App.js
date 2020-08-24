import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    userName : "DukoDragon"
  }


  userNameChangeHandler = (event) => {
    this.setState({userName: event.target.value});

  }
  render(){
    return (
      <div className="App">
        <UserInput
        change = {this.userNameChangeHandler}
        currentName = {this.state.userName}
        ></UserInput>
        <UserOutput name = {this.state.userName}></UserOutput>
        
        <UserOutput name = 'Emett'></UserOutput>
      
      </div>
    );
  }
}

export default App;
