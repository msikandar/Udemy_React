import React from 'react';

const UserOutput = (props) => {
	const style = {
		border: '1px solid black',
		margin: '10px'
	}
	return (
		<div style={style}>
		<p>username: {props.userName} <span> age: {props.age}  <button style={{marginLeft: '30px'}}>delete</button><button>Edit</button> </span></p>
		
		</div>
	)}

export default  UserOutput;