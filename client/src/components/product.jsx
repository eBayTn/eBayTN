
import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url : ""
        }
        this.hundelChange = this.hundelChange.bind(this)
    }
    hundelChange(event) {
        this.setState({
            url : event.target.value
        })
        console.log(this.state.url)
    }
    render() {
        return (
            <div>
            <div style={{border: '7px solid'}}>
            <p>name of product</p>
            <p>description of product</p>
            <input onChange={(event)=>this.hundelChange(event)} name="image" />
            <button onClick={props.Add}>post</button>
            <img src={this.state.url} />
            </div>
            </div>
        );
    }
}

export default Product;