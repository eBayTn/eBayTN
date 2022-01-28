import React from 'react';
import axios from 'axios';
import User from '../components/User.jsx'
import Product from './product.jsx';
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
            username: this.state.name,
            email: this.state.email,
            password: this.state.password,

        }
        console.log(options)
        axios.post("/api/items/post", options).then((results) => {
            console.log(results)
        }).catch((err) => {
            console.log(err)
        })
        
    }
    render() {
        return (
            <div style={{border: '7px solid'}}>
            <User  change={this.change.bind(this)} Add={this.add}  />
< Product/>
</div>
        )
    }
}

export default App