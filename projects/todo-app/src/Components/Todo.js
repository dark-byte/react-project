import React, {useState} from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'
import Edit from './Edit';
import Form from './Form';
import { render } from '@testing-library/react';


const Todo = ({input, todo, todos, setTodos}) =>{

    const[edit, setEdit] = useState([]);

    const deletehandler = ()=>{
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const editHandler = ()=>{
        render(
        <Form/>)
    }

    return(
        <div className="title-box" key={todo.key}>
            <p>{todo.title}</p>
            <div className="tools">
                <RiDeleteBin6Line className="item" onClick={deletehandler} />
                <FaRegEdit className="item" onClick={editHandler}/>
            </div>
        </div>
    )
}

export default Todo