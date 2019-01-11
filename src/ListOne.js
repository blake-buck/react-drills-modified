import React from 'react';

function ListOne(){
	var arr =["frick","frack","click","clack", "my doctor is a quack"];
	
	return(
		arr.map((val) => {
			return(<h2>{val}</h2>);
		})
	);
	
}

export default ListOne;