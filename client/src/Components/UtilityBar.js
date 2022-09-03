import React, { useState } from "react";
import styled from "styled-components";
import '../CSS/Component.css'
import { FiBookmark, FiHeart, FiSend } from "react-icons/fi";

const UtilityBar = ({ spotId }) => {

    const [isLiked, setIsLiked] = useState();
    const [isBookmarked, setIsBookmarked] = useState();


    return (
        <ButtonWrapper>
            <ButtonBox onClick={() => setIsBookmarked(!isBookmarked)}>
                <FiBookmark className="bookmark" style={isBookmarked ? { 'fill': 'black' } : { 'fill': 'white' }} />
            </ButtonBox>

            <ButtonBox onClick={() => setIsLiked(!isLiked)}>
                <FiHeart className="heart" style={isLiked ? { 'fill': 'red', 'color': 'red' } : { 'fill': 'white' }} />
            </ButtonBox>
        </ButtonWrapper>
    )
};

const ButtonWrapper = styled.div`
    width: 100px;
    padding: 10px 0px;
    display: flex;
    justify-content: space-around;
    
`

const ButtonBox = styled.button`
    border: none;
    background-color: white;
`

export default UtilityBar;
