import React,{Component} from 'react'

export default class userDetails extends Component {
    constructor(props){
        super(props);
        this.state ={
          userData :"",
        };
        
      }
    
 componentDidMount(){
    fetch("http://localhost:5000/profile",{
        method:"POST",
        crossDomain:true,
        headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers':'Content-Type'
        
         },
        body:JSON.stringify({
          token:window.localStorage.getItem("token"),
      }),
    }).then((res)=>res.json())
      .then((data)=>{
        console.log(data,"user Data");
        this.setState({userData:data.data})
      });

}

  
logOut=()=>{
    window.localStorage.clear();
    window.location.href = "./sign-in";
  }

  
    render() {
        return (
            <div>
             
             
             
                    Name:{this.state.userData.name}<br />
                        
                    Email:{this.state.userData.email}<br />

                    <button onClick = {this.logOut} className="btn btn-primary btn-block"> Log out</button>
                </div>
            
        );
    }
}

