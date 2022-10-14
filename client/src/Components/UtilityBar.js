import React, { useContext } from "react";
import styled from "styled-components";
import '../CSS/Component.css'
import { FiBookmark } from "react-icons/fi";
import { UserContext } from "../Contexts/UserContext"

const UtilityBar = ({ spotId }) => {
    const { isLoggedIn, currentUser, userBookmarks, setUserBookmarks } = useContext(UserContext);

    const handleBookmarked = () => {
        let newBookmarks = userBookmarks
        if (!userBookmarks?.includes(spotId)) {
            newBookmarks = [...newBookmarks, spotId]
        } else {
            newBookmarks = newBookmarks.filter(spot => spot !== spotId)
        }
        setUserBookmarks(newBookmarks)
        const postBookmark = async () => {
            try {
                const response = await fetch('/bookmarks', {
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify([newBookmarks, currentUser.email]),
                })
                const res = await response.json()
                console.log(res)
            } catch (err) {
                console.error(`Error: ${err}`);
            }
        }
        postBookmark()
    }

    return (
        <ButtonWrapper>
            <ButtonBox style={!isLoggedIn ? { 'display': 'none' } : { 'display': 'block' }} disabled={!isLoggedIn} onClick={() => handleBookmarked()}>
                <FiBookmark className="bookmark"
                    style={userBookmarks?.includes(spotId) ? { 'fill': '#192168', 'color': '#192168' } : { 'fill': 'white' }} />
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


export default UtilityBar;
