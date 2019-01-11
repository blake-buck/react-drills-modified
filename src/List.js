import React from 'react';
import ToDo from './ToDo';

function List(props){
	console.log(props);
	let list = props.tasks.map( (val, i) =>{
		return(
			<ToDo key={i} task={val}/>
		)
	})
	
	return(
		<div>{list}</div>
	)
	
}

export default List;