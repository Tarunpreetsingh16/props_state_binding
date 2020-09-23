import React from 'react'
import './Output.css'

const Output = ({username}) => { //object destructuring
    return(
        <React.Fragment>
            <p>Hi, I am {username}. It was nice meeting you. Hope, to meet you again, soon!</p>
        </React.Fragment>
    );
}
export default Output