import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form'
import TodoList from './Components/TodoList'


function App() {
  const[inputText, setInpText] = useState("");
  const[todos, setTodos] = useState([]);

  return (
    <div className="appContainer">
      <header className="header">
        <h1>take notes</h1>
      </header>

         <Form inputText = {inputText} 
          setInpText={setInpText} 
          todos = {todos} 
          setTodos= {setTodos}/>
         <TodoList inputText = {inputText} setTodos={setTodos} todos = {todos}/>  
    </div>
  );
}

export default App;
