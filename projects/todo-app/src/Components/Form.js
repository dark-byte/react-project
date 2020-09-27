import React from 'react'

function Form ({todos, inputText, setInpText, setTodos}){

    const textChangeHandler = (e) =>{
        setInpText(e.target.value);
        
    };

    const submitHandler = (e) =>{
        e.preventDefault();
        if(inputText){
            setTodos([...todos, {title: inputText, id: Math.random()},])
            setInpText("");
        }
    };
    return(
        <form className="input">
            <input 
            value={inputText} 
            onChange={textChangeHandler} 
            type="text" 
            id="inp" 
            placeholder="Enter Title" 
            className="inp"
            autoComplete="off"/>
            <input onClick={submitHandler} type="submit" className="add" value="add"/>
        </form>
    );
}

export default Form;