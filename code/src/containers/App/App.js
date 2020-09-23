import React from 'react';
import './App.css';
import Output from '../../components/Output/Output'
import Input from '../../components/Input/Input'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            username: 'Tarun'
        }
    }
    
    changeNameHandler = (event) =>{
        this.setState({username:event.target.value});
    }
    render(){
      return (
        <div className="App">
          <Input username={this.state.username} changeName={this.changeNameHandler}/>
          <Output username={this.state.username}/>
        </div>
      );
    };
}

export default App;
