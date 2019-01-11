import React,{Component} from 'react';

class ListTwo extends Component{
	
	constructor(){
		super();
		this.state={
			text:"",
			array:["Star Wars", "Lord of the Rings", "Mortal Engines", "Stars without Number"],
			display:["Star Wars", "Lord of the Rings", "Mortal Engines", "Stars without Number"],
			
		}
		this.onFilterChange = this.onFilterChange.bind(this);
	}
	
	onFilterChange(e){
		var{array}=this.state;
		var newArr = [];
		
		for(var i=0; i<array.length;i++){
			if(array[i].indexOf(e)>=0)newArr.push(array[i]);
		}
		
		this.setState({text:e,display:newArr});
	}
	
	render(){
		
		return(
			<div>
				<input onChange={(e)=>this.onFilterChange(e.target.value)} />
				{this.state.display.map((val, i)=>{return(<h2 key={i}>{val}</h2>)})}
			</div>
		);
		
	}
	
}

export default ListTwo;