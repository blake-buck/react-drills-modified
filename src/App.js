import React, { Component } from 'react';

import TypeToText from "./TypeToText.js";
import ListOne from "./ListOne.js";
import ListTwo from "./ListTwo.js";

import Login from "./Login.js";
import Image from "./Image.js";
import FunctionalToDo from './FunctionalToDo';

import List from "./List.js";
import ToDo from "./ToDo.js";
import NewTask from "./NewTask.js";
import './App.css';

class App extends Component {
	
	constructor(){
		super();
		this.state ={
			functionalArr:[],
			functionalInput:"",
			advancedArr:[],
		}
		this.updateAdvancedArr = this.updateAdvancedArr.bind(this);
	}
	
	updateFunInput(e){
		this.setState({functionalInput:e});
	}
	updateFunArr(){
		var newArr=this.state.functionalArr;
		newArr.push(this.state.functionalInput);
		this.setState({fucntionalArr:newArr});
	}
	
	updateAdvancedArr(task){
		var newArr = this.state.advancedArr;
		newArr.push(task);
		this.setState({advancedArr:newArr});
	}
	
  render() {
    return (
      <div>
        <h1>Type to Text</h1>
		<TypeToText />
		
		<h1>List Example</h1>
		<ListOne />
		
		<h1>Filter List</h1>
		<ListTwo />
		
		<h1>Login</h1>
		<Login />
		<h1>Image Example</h1>
		<Image imgSrc="https://www.themarysue.com/wp-content/uploads/2016/01/10-prints-Raymond-Swanland_SM_Codex_cover_A32.jpg"/>
		
		<h1>To-Do List</h1>
		<input onChange={(e)=>{this.updateFunInput(e.target.value)}} />
		<button onClick={() =>{this.updateFunArr()}}>Add</button>
		<FunctionalToDo list={this.state.functionalArr} />
		
		<h1>Pointless To-Do List</h1>
		<NewTask add={this.updateAdvancedArr} />
		<List tasks={this.state.advancedArr} />
		
		
		
		
		
      </div>
    );
  }
}

export default App;
