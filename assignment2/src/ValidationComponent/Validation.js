import React from 'react';

const Validation = (props) => {
	let dis = null;
	if(props.length<=5){
		 dis = (
			<>
				<p>Text Too Short</p>
			</>		
		)
	}else {dis=(<>Text Long Enough</>)}
	return (
		<>
		{dis}
		</>
	
	);
	
}

export default Validation;