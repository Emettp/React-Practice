import React from 'react'


const UserInput = (props) =>{
    const CssStyling = {
        width: "auto",
        padding: "12px",
        marginTop:'15px',
        textAlign :'center',
        backgroundColor : "burlywood",
        border: '1px solid #ccc',
        borderRadius: '4px',
        resize: 'vertical',
        outline: '3px soild ',
        cursor: 'pointer'
    }
    return (
        <input 
        style = {CssStyling}
        type = 'Text' 
        onChange = {props.change} 
        value = {props.currentName}></input>
    )
}

export default UserInput;