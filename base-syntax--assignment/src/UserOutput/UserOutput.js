import React from 'react'
import './UserOutput.css'

const UserOutput = (props) =>{
    return (
    <div className= "Output">
        <p>Hey My Name is {props.name}....</p>
        <p>I am a Game Developer Recently Learning React!!!!</p>
    </div>
    
    )
}


export default UserOutput;