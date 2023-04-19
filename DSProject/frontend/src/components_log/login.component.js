
import React, { Component } from 'react'

export default class Login extends Component {

  constructor(props){
    super(props)
    this.state ={
        email:"",
        password:""

    };
    this.handlesubmit_log = this.handlesubmit_log.bind(this);
  }

  handlesubmit_log(e){
    e.preventDefault();
    const {email,password} = this.state;
    console.log(email,password);
  
    fetch("http://localhost:5000/login",{
      method:"POST",
      crossDomain:true,
      headers:{
        'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers':'Content-Type'
      
       },
      body:JSON.stringify({
        email,
        password,
    }),
  }).then((res)=>res.json())
    .then((data)=>{
      
      console.log(data,"User Logged");
      if(data.status =="ok"){
        alert("Logging Successfull.");
        window.localStorage.setItem("token",data.data);
        window.localStorage.setItem("LoggedIn",true);
        window.location.href = "./userDetails";
      }
    })

  }
  render() {
    return (
      <form onSubmit={this.handlesubmit_log}>
        <h3>Log In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            required
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({email:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            required
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({password:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
           
              Remember me
            </label>
          </div>
         
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}
