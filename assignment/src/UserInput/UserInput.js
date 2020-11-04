import React from 'react';

const UserIutput = (props) => {
	const inputStyle = {
		border: '2px solid red',
	}
	return (
		<>
		<input style={inputStyle} type='text' onChange={props.changed} value=          	{props.currentname}/>
		<button onClick={props.submit}>Submit</button>
		</>
	)}

export default  UserIutput;