import React from 'react';
import axios from 'axios';
import User from '../components/User.jsx'
import Product from './product.jsx';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            post: [],
        }
        this.change = this.change.bind(this)
        this.add = this.add.bind(this)
        this.page = this.newpage.bind(this)
        this.deleteProducts=this.deleteProducts.bind(this)

    }
    newpage() {
        var page = this.state.page
        var newchange = page === 0 ? 1 : 2
        this.setState({
            page: newchange,
           
        })
    }
    change(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    add() {
        var options = {
            username: this.state.name,
            email: this.state.email,
            password: this.state.password,
            productname: this.state.productname,
            description: this.state.description,
            image: this.state.image,

        }
        console.log(options)
        axios.post("/api/items/post", options).then((results) => {
            console.log(results)
        }).catch((err) => {
            console.log(err)
        })

    }
    deleteProducts(id){
        axios.delete(`/api/items/delete/${id}`).then(()=>{
            console.log('deleted')
            
        }).catch((err) => {console.log(err)});
    
    }

    componentDidMount() {
        axios.get("/api/items/get").then((results) => {
            console.log(results)
            this.setState({
                post: results.data
            })
        }).catch((err) => { consol.log(err) });
        
    }
    render() {

        var page = this.state.page

        return (
            <div>
                <div>
                    {page === 0 ? (
                        <User change={this.change.bind(this)} Add={this.add} Page={this.page} />
                    ) : <Product Add={this.add} change={this.change.bind(this)} data={this.state.post} deleteProducts={this.deleteProducts}/>

                    }</div>
            </div>
        )
    }
}

export default App