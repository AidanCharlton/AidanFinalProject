import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const BoroughPage = () => {
    const [boroughSpots, setBoroughSpots] = useState()
    const { borough } = useParams()

    useEffect(() => {
        const fetchBorough = async () => {
            const reqSpots = await fetch(`/boroughs/${borough.toLowerCase()}`)
            const data = await reqSpots.json();
            setBoroughSpots(data?.data)
        }
        fetchBorough()
    }, setBoroughSpots)
    return (
        <Wrapper>
        <h1>{borough}</h1>
            {
                !boroughSpots ? <p>Loading</p> :
            <CardWrapper>    
            {
                boroughSpots?.map((spot, key) => {
                    return <SpotCard key={key}>
                                <SpotName>{spot.name}</SpotName>
                                <SpotType>{spot.type}</SpotType>
                            </SpotCard>
                })
            }
            </CardWrapper>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    overflow: hidden;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CardWrapper = styled.div`
    width: 600px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const SpotCard = styled(Link)`
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 20%;
    margin: 10px;
    padding: 5px;
    box-shadow: 0px 0px 1px 1px lightgray;
    transition: 0.3s;
    &:hover {
        box-shadow: 0px 2px 5px 1px lightgray;
    }
`

const SpotName = styled.span`
    text-align: center;
`

const SpotType = styled.span`
    font-size: 10px;
` 
export default BoroughPage