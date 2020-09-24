import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'


const Cat = ({title, color})=>{
    return(
        <div className="title-box">
            <p>Title 1</p>
            <div className="tools">
                <RiDeleteBin6Line className="item"/>
                <FaRegEdit className="item"/>
            </div>
       </div>
    );
}


export default Cat;