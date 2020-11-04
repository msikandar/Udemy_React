import React, {useState} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
	const [username, setusername] = useState({
		persons: [
		{name: 'max',age: '20'},
		{name: 'sik',age:'25'},
		{name:'manu',age:'23'}
	  ],
		otherState: 'other value'
	});

	const userNameChangedHandler = (event) => {
		console.log(username)
		setusername({
			persons: [
		{name: event.target.value,age: '20'},
		{name: 'sik',age:'25'},
		{name:'manu',age:'23'}
	  ],
			otherState: 'other value'
		});	
	}
	const addUserHandler = (data) => {
		console.log(data);
	};
	return (
		// event.target.value
	<div className="App">
	<UserInput changed={userNameChangedHandler} currentname=      {username.persons[0].name} submit ={(event) => addUserHandler(event.target.value)}/><br></br>
			
			{username.persons.map((p, index) => {
				return <UserOutput key ={index} userName={p.name} age={p.age}/>
			})}
	</div>
	);
}

export default App;
