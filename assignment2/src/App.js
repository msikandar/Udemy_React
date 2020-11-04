import React, {useState} from 'react';
import classes from './App.css';
import Validation from './ValidationComponent/Validation';
import Char from './CharComponent/Char';

function App() {
	const [value, setValue] = useState('');
	const inputHandler = (event) => {
		setValue(event.target.value);
	}
	let charlist = value.split('').map((ch, index) => {
		return <Char key={index} val={ch} id={index} clicked={()=>{deleteHandler(index)}}/>
	})
	const deleteHandler = (index) => {
		const text = value.split('');
		text.splice(index, 1);
		const updatedText = text.join('');
		setValue(updatedText);
	}
  return (
    <div className={classes.App}>
		  <input onChange={inputHandler} value={value}/>
		  <p>{value.length}</p>
		  <Validation length={value.length} />
		  {charlist}
    </div>
  );
}
export default App;
