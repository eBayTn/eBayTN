import React from 'react';
import axios from 'axios';
import User from '../components/User.jsx'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.change = this.change.bind(this)
        this.add = this.add.bind(this)
    }

    change(event) {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state[event.target.name])
    }
  
    add() {
        let options = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
           
        }
        console.log(options)
        
    }
    render() {
        return (
             <User change={this.change.bind(this)} Add={this.add} />

        )
    }
}

export default App