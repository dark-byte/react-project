import React from 'react'

const Edit = ({ todos, setTodos, InputText, setInpText, Edit, setEdit}) =>{

    const updateTodo = () =>{
            if(InputText){
                setTodos(prev => prev.map(item => (item.id === todos.id ? Edit : item)))
            }
    }

    const editBtnHandler = () =>{
        if(InputText){
            setEdit(InputText)
            updateTodo()
            setEdit(null)
    }}

    return(
        <div className="editCont">
            <input type="text" value= {InputText} className="input" onChange={(e) => setInpText(e.target.value)}/>
            <input type="submit" value="Update" className="input editBtn" onClick={editBtnHandler}/>
        </div>
    );
};

export default Edit;