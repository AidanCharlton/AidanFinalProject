import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components"
import { SkateSpotContext } from "../Contexts/SkateSpotContext";

const Borough = () => {
    const {selectedBorough} = useContext(SkateSpotContext)
    const [boroughSpots, setBoroughSpots] = useState()
    
    useEffect(() => {
        const fetchSpots = async () => {
            const reqSpots = await fetch(`/boroughs/${selectedBorough.toLowerCase()}`)
            const data = await reqSpots.json();
            setBoroughSpots(data?.data)
        }
        fetchSpots()
    }, [setBoroughSpots, selectedBorough])
    return (
        <Wrapper>
            <h1>{selectedBorough}</h1>
            {
                boroughSpots?.map((x) => {
                    return (
                        <div>
                            <span>{x.name}</span>
                            <span> - {x.type}</span>
                        </div>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default Borough