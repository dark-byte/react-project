import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'

const Todo = ({input, todo, todos, setTodos}) =>{

    const deletehandler = ()=>{
        setTodos(todos.filter(el => el.id !== todo.id))
    }


    return(
        <div className="title-box" key={todo.key}>
            <p>{todo.title}</p>
            <div className="tools">
                <RiDeleteBin6Line className="item" onClick={deletehandler} />
                <FaRegEdit className="item" />
            </div>
        </div>
    )
}

export default Todo