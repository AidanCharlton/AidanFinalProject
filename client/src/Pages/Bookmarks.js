import React, { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext"
import styled from "styled-components";
import Spinner from "../Components/Spinner";
import UtilityBar from "../Components/UtilityBar"
import Map from "./Map";
import { useEffect } from "react";
import { Link } from "react-router-dom";


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
                    <h1>Bookmarks</h1>
                    <Map bookmarks={bookmarks} />
                    <BookmarkWrapper>
                        {
                            bookmarks.map((spot, id) => {
                                return (
                                    <BookmarkArea key={id}>
                                        <Titles >
                                            <p>{spot.data.name}</p>
                                        </Titles>
                                        <UtilityWrapper>
                                            <StreetView to={`/borough/${spot.data.borough}/${spot.data._id}`}>Streetview</StreetView>
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

const StreetView = styled(Link)`
    text-decoration: none;
    align-self: center;
    justify-content: right;
    color: #192168;
`


export default Bookmarks