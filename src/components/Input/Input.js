import React from 'react'
import './Input.css'

const Input = ({username,changeName}) => {
    return(
        <React.Fragment>
            <h2><label htmlFor="username">Enter a name</label></h2>
            <input id="username" name="username" autoComplete="off" type="text" onChange={changeName} value={username}></input>
            <hr></hr>
        </React.Fragment>
    );
}

export default Input