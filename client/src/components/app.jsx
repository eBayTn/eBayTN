import React from 'react';
import axios from 'axios';
import User from '../components/User.jsx'
import Product from './product.jsx';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page : 0
        }
        this.change = this.change.bind(this)
        this.add = this.add.bind(this)
        this.page = this.newpage.bind(this)

    }
    newpage() {
        var page = this.state.page
        var newchange = page === 0 ? 1 : 2
        this.setState({
            page: newchange
        })
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
            image : this.state.image,

        }
        console.log(options)
        axios.post("/api/items/post", options).then((results) => {
            console.log(results)
        }).catch((err) => {
            console.log(err)
        })
        
    }
    render() {
        var page = this.state.page

        return (
            <div>
           { page === 0 ? (
            <User  change={this.change.bind(this)} Add={this.add} Page={this.page} />
            ):<Product  Add={this.add}/>  
            
            }</div>
        )
    }
}

export default App