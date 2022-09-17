import React, { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext"
import styled from "styled-components";
import Spinner from "../Components/Spinner";
import UtilityBar from "../Components/UtilityBar"
import Map from "./Map";
import { useEffect } from "react";



const Bookmarks = () => {
    const { currentUser, userBookmarks } = useContext(UserContext);
    const [bookmarks, setBookmarks] = useState()
    useEffect(() => {
        const test = async () => {
            const promises = userBookmarks.map(bookmarkId => fetch(`/spots/${bookmarkId}`))
            const fetchedData = await Promise.all(promises)
            const jsons = await Promise.all(fetchedData.map(data => data.json()))
            setBookmarks(jsons)
        }
        test()
    }, [userBookmarks])

    return currentUser === undefined ? <Wrapper></Wrapper> : (
        <Wrapper>
            {bookmarks === undefined ? <Spinner /> : (
                <>
                    <Map bookmarks={bookmarks} />
                    <BookmarkWrapper>
                        {
                            bookmarks.map((spot, id) => {
                                return (
                                    <BookmarkArea key={id}>
                                        <Titles >
                                            <p>{id + 1}. {spot.data.name}</p>
                                        </Titles>
                                        <UtilityWrapper>
                                            <UtilityBar spotId={spot.data._id} />
                                        </UtilityWrapper>
                                    </BookmarkArea>
                                )
                            })
                        }
                    </BookmarkWrapper>

                </>
            )}
        </Wrapper>
    )
}

const BookmarkArea = styled.div`
    display: flex;
    justify-content: space-between;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 300px;
    margin-top: 40px;
`

const BookmarkWrapper = styled.ol`
    width: 600px;
    text-align: center;
    align-items: center;
    flex-direction: column;
`

const Titles = styled.div`
    display: flex;
    margin-bottom: 20px;
    padding: 0px;
    margin: 0px;
`

const UtilityWrapper = styled.div`
    display: flex;
    
`



export default Bookmarks