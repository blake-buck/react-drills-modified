import React,{Component} from 'react';

class TypeToText extends Component{
	constructor(){
		super();
		this.state ={
			text:""
		}
	}
	
	textUpdate(e){
		this.setState({text:e});
	}
	
	render(){
		
		return(
			<div>
				<input onChange={ (e)=>{this.textUpdate(e.target.value)}}/>
				<h2>{this.state.text}</h2>
			</div>
		);
		
	}
	
}

export default TypeToText;