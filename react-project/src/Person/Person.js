import React from 'react';

import './Person.css'

const person = (props) => {
return(
    <div className= "Person">
        <p onClick = {props.click}>Hey I am {props.name} and My age is {props.age}</p>
        <p>{props.children}</p>
        <input type="Text" onChange = {props.changed} value = {props.name} ></input>
    </div>
    
    )
};

export default person;

    

