import React from 'react'

function Form ({todos, inputText, setInpText, setTodos}){

    const textChangeHandler = (e) =>{
        setInpText(e.target.value);
        
    };

    const btnHandler = (e) =>{
        e.preventDefault();
        setTodos([...todos, {title: inputText, id: Math.random()},])
        setInpText("");
    };
    return(
        <div className="Container">
            <form className="input">
                <input 
                value={inputText} 
                onChange={textChangeHandler} 
                type="text" 
                id="inp" 
                placeholder="Enter Title" 
                className="inp"
                autoComplete="off"/>
                <input onClick={btnHandler} type="submit" className="add" value="add"/>
            </form>
        </div>
    );
}

export default Form;