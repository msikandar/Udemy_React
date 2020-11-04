import React from 'react'; 
import charclass from './Char.css'
const Char = (props) => {
	// const style={
	// 	display: 'inline-block',
	// 	padding: '16px',
	// 	margin: '16px',
	// 	border: '1px solid black',
	// 	textAlign: 'center'
	// }
	return (
		<div className={charclass.Charcss} onClick={props.clicked}>
		{props.val}
		</div>
	);
}
export default Char;