import React from 'react';
const User =(props) => {
return(
    <div  style={{border: '7px solid'}}>
    <div>
<p>Username</p>
<input type="text" name="name" onChange={props.change} />
<p>Email</p>
<input type="email" name="email" onChange={props.change}/>
<p>Password</p>
<input type="password" name="password" onChange={props.change}/>
</div>
<button onClick={props.Add}>Click To confirm your sign up</button>
<button onClick={props.Page}>CreatAccount</button>

</div>
)
}

export default User;