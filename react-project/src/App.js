import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    Person : [
      {name :"Tarun", age :25},
      {name : "Aplha", age : 23},
      {name :"Beta", age : 24 }
    ]
  }


  switchButtonHandler = (newname) => {
    // console.log("Button is clicked !!!!!")
    this.setState({
      Person : [
        {name : newname, age :25},
        {name : "Alpha", age : 23},
        {name :"Beta", age : 24 }
      ],
      
    })
 
  }

  changeHandler = (event) => {
    // console.log("Button is clicked !!!!!")
    this.setState({
      Person : [
        {name : "Tarun", age :25},
        {name : event.target.value, age : 23},
        {name :"Beta", age : 24 }
      ],
      
    })
  }

   render(){

    const styling = {
      backgroundColor : "Grey",
      font: "inherit",
      border:'3px soild blue',
      padding:'8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1> Hi, I am a React App Developer !!</h1>
        <button 
        style = {styling}
        onClick = {this.switchButtonHandler.bind(this,"DukoDragon")}> Switch Button</button>
        <Person 
          name = {this.state.Person[0].name} 
          age = {this.state.Person[0].age} />
        <Person 
          name = {this.state.Person[1].name} 
          age = {this.state.Person[1].age}
          click = {() => this.switchButtonHandler("Emett")}
          changed ={this.changeHandler} >Hobbies : Cleaning</Person>
        <Person 
          name = {this.state.Person[2].name} 
          age = {this.state.Person[2].age}/>
      </div>
      
      );
     
   }
  
}

export default App;

/* state = {
  Person : [
    {name :"Tarun", age :25},
    {name : "Diksha", age : 23},
    {name :"Nayan", age : 24 }
  ]
}

switchButtonHandler = () => {
  console.log("Button is clicked !!!!!")
  this.setState({
    Person : [
      {name :"Tarun Porwal", age :25},
      {name : "Diksha", age : 23},
      {name :"Nayan Paruthi", age : 24 }
    ]
  })

}
 */