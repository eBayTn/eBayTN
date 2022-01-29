import React from 'react';
const Product = (props) => {
    return (
        <div>
            {props.data.map((elem, i) => {
                console.log(elem)
                return(
                    
                <div>
                <p>name of product</p>
                <input type="productname" name="productname" onChange={props.change} />
                <p>description</p>
                <input type="description" name="description" onChange={props.change} />
                <p>image</p>
                <input type="text" name="image" onChange={props.change} />
                <button onClick={props.Add}>add</button>
                <button onClick={()=>{props.deleteProducts(elem._id)}}>Delete</button>
                <div style={{border: '7px solid'}}>
                <h2>name:{elem.productname}</h2>
                <img src={elem.image}  width="293" height="130"/>
                </div>
            </div>
                )
            })}

        </div>
    )
}
export default Product;