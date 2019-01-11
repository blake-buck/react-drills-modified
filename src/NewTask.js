import React from 'react';

class NewTask extends React.Component{
	constructor(props){
		super(props);
		this.state={
			input:""
		};
		
		this.handleAdd=this.handleAdd.bind(this);
	}
	
	handleInputChange(value){
		this.setState({input:value});
	}
	
	handleAdd(){
		this.props.add(this.state.input);
		this.setState({input:""});
	}
	
	render(){
		return(
			<div>
				<input value={this.state.input}
						placeholder="enter new task"
						onChange ={ (e) => this.handleInputChange(e.target.value)}
				/>
				<button onClick={this.handleAdd}>Add</button>
			</div>
		)
	}
}

export default NewTask;