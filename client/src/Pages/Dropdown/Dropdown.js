import React, {useState} from "react"
import styled from "styled-components"
import { useHistory, Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";


const Dropdown = () => {

    return (
        <div> 
            <Link to={'/home'}>
                <FiAlignJustify className="icon"/>
            </Link>       
        </div>  
    )
}

export default Dropdown