import React from 'react';

const FunctionalToDo = (props) =>{
	return(
		props.list.map( (val, i)=>{return (	<h3 key={i}>{val}</h3>);} )
	)
}

export default FunctionalToDo;