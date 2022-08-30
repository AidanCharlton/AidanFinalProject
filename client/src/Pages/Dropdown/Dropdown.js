import React, {useState} from "react"
import styled from "styled-components"
import { useHistory, Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";


const Dropdown = () => {

    return (
        <div> 
            <MenuButton to={'/home'}>
                <FiAlignJustify className="icon"/>
            </MenuButton>       
        </div>  
    )
}
const MenuButton = styled(Link)`
    color: #F5EDDC;
`

export default Dropdown