import React,{Component} from 'react';

class Login extends Component{
	constructor(){
		super();
		this.state ={
			username:"",
			password:"",
		}
	}
	
	changeUserName(e){
		console.log(e);
		this.setState({username:e});
	}
	
	changePassword(e){
		console.log(e);
		this.setState({password:e});
	}
	
	alertLogin(){
		console.log(this.state);
		var{username,password}=this.state;
		alert(`username: ${username} password: ${password}`);
	}
	
	render(){
		
		return(
			<div className="Login">
				<input onChange={(e)=>{this.changeUserName(e.target.value)}} />
				<input onChange={(e)=>{this.changePassword(e.target.value)}} />
				<button onClick={()=>{this.alertLogin()}}>Login</button>
			</div>
		);
		
	}
	
	
}

export default Login;