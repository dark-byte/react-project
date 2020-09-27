import React from 'react'
import Todo from './Todo'


const TodoList = ({inputText, setTodos, todos})=>{

    // const del = (id)=>{
    //     setTodos(todos.filter(el => el.id !== id));
    // }

    // const edit = () =>{
    //     console.log("Editing componete to be created!")
    // }
    return(
        <ul id="listCont">
            {todos.map(todo =>(
                <li key={todo.id}><Todo
                    todos = {todos} 
                    todo = {todo}
                    setTodos= {setTodos}/>
                </li>
            ))}
        </ul>
    )   
}


export default TodoList;