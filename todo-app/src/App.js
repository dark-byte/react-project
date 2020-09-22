import React, {Component, useState} from 'react';
import './App.css';
import Form from './Components/Form'
import Cat from './Components/cat'

function App() {

  const[inputText, setInpText] = useState("");
  const[todos, setTodos] = useState([])

  return (
    <div className="appContainer">
      <header className="header">
        take notes {inputText}
      </header>
      <Form setInpText={setInpText} setTodos= {setTodos}/>
      <Cat/>
    </div>
  );
}


// function addCat({cat}){
//   return(
//     <li>
//       <p>{cat}</p>
//     </li>
//   )
  
// }

export default App;
