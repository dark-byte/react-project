import React from 'react'

const Form = ({ setInpText, setTodo }) =>{

    const textChangeHandler = (e) =>{
        setInpText(e.target.value);
    };

    const btnHandler = (e) =>{
        e.preventDefault();
        console.log(e)
        setTodo.append()
    };

    return(
        <div className="Container">
            <form onSubmit={btnHandler} className="input">
                <input onChange={textChangeHandler} type="text" id="inp" placeholder="Enter Title" className="inp"/>
                <input type="submit" className="add" value="Add"/>
            </form>
        </div>
    );
}

export default Form;