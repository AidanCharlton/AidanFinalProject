import React, { useState, useContext } from "react";
import styled from "styled-components";
import '../CSS/Component.css'
import { FiBookmark, FiHeart } from "react-icons/fi";
import { SkateSpotContext } from "../Contexts/SkateSpotContext";
import MOCK_USER from '../constants'

const UtilityBar = ({ spotId }) => {
    const { bookmarkedSpots, setBookmarkedSpots, likedSpots, setLikedSpots } = useContext(SkateSpotContext);
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleBookmarked = () => {
        setIsBookmarked(!isBookmarked);
        if (!isBookmarked) {
            setBookmarkedSpots(prev => [...prev, spotId])
        } else {
            setBookmarkedSpots(prev => prev.filter(spot => spot !== spotId))
        }
        const postBookmark = async () => {
            try {
                const response = await fetch('/bookmarks', {
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(bookmarkedSpots)
                })
                const res = await response.json()
                console.log(res);
            } catch (err) {
                console.error(`Error: ${err}`);
            }
        }
        postBookmark()
    }

    const handleLike = () => {
        setIsLiked(!isLiked);
        if (!isLiked) {
            setLikedSpots(prev => [...prev, spotId])
        } else {
            setLikedSpots(prev => prev.filter(spot => spot !== spotId))
        }
        const updateLikes = async () => {
            try {
                const response = await fetch("/likes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(likedSpots),
                });
                const res = await response.json()
                console.log(res);
            } catch (err) {
                console.error(`Error: ${err}`);
            }
        }
        updateLikes()
    }

    return (
        <ButtonWrapper>
            <ButtonBox onClick={() => handleLike()}>
                <FiHeart className="heart" style={likedSpots.includes(spotId) ? { 'fill': '#af1e2d', 'color': '#af1e2d' } : { 'fill': 'white', 'color': '#af1e2d' }} />
                <Counter>{likedSpots.includes(spotId) ? '1' : '0'}</Counter>
            </ButtonBox>
            <ButtonBox onClick={() => handleBookmarked()}>
                <FiBookmark className="bookmark" style={bookmarkedSpots.includes(spotId) ? { 'fill': '#192168', 'color': '#192168' } : { 'fill': 'white' }} />
                <Counter>{bookmarkedSpots.includes(spotId) ? '1' : '0'}</Counter>
            </ButtonBox>
        </ButtonWrapper>
    )
};

const ButtonWrapper = styled.div`
    padding: 10px 0px;
    display: flex;
    justify-content: space-around;
    
`

const ButtonBox = styled.button`
    border: none;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Counter = styled.p`
    margin: 0px;
`

export default UtilityBar;
