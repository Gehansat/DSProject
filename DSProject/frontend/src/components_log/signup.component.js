import React, { Component,useState } from 'react';

export default class SignUp extends Component {
  constructor(props){
    super(props)
    this.state ={
        userType:"",
        name:"",
        email:"",
        password:""

    };
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  

  //handeling the submit function
  handlesubmit(e){
    e.preventDefault();
    const {userType,name,email,password} = this.state;
    console.log(userType,name,email,password);
    fetch("http://localhost:5000/register",{
      method:"POST",
      crossDomain:true,
      headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers':'Content-Type'
      
       },
      body:JSON.stringify({
        userType,
        name,
        email,
        password
    }),
  })
  // }).then((res)=>res.json())
  //   .then((data)=>{
  //     console.log(data,"userRegistered");
  //     if(data.state == "ok"){
  //       alert("User Registeration Successfull")
  //     } 
  //   })
  .then((res) => {
    console.log(res);
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error('User registration failed.');
    }
  })
  .then((data) => {
    console.log(data);
    if (data.status === "ok") {
      alert("User registration successful!");
    } else {
      throw new Error('User registration failed.');
    }
  })
  .catch((error) => {
    console.error(error);
    alert(error.message);
  });
          
  }



  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        
        <h3>Sign Up</h3>
        
        <div className='container'>
        Register As
          <div className='form-group'>
           
            <input
              type="radio"
               //name="UserType"
              value="User"
              checked={this.state.userType === 'User'}
              onChange={(e) => this.setState({userType:e.target.value})}
            />
           
            User
            <input
              type="radio"
              // name="UserType"
              value="Admin"
              required
              checked={this.state.userType === 'Admin'}
              onChange={(e) => this.setState({userType:e.target.value})}
            />
            Admin
          </div>
          </div>
          {/* <div className='form-group'> */}
          {/* { UserType == "Admin" ? ( */}
{/*            
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="SecretKey"
                onChange={(e) => this.setState({Secretkey:e.target.value})}
              />
            </div>
          //   */} 
          {/* }
         { ) : null} */}

          <div className='form-group'>
          <label>Name </label>
          <input
            type="text"
            required
            className="form-control"
            placeholder=" Name"
            onChange={(e)=>this.setState({name:e.target.value})}
          />
            
         </div>

         <div className='form-group'>
          <label>Email address</label>
          <input
            type="email"
            required
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>this.setState({email:e.target.value})}
          />
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input
            type="password"
            required
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>this.setState({password:e.target.value})}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}


