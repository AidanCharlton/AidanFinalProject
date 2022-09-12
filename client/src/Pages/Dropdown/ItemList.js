import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { SkateSpotContext } from "../../Contexts/SkateSpotContext";
import { Link } from "react-router-dom";

const ItemList = () => {
    const { boroughs } = useContext(SkateSpotContext)
    return (
        <>
            <LinkDiv>
                {
                    boroughs.map((x) => {
                        return <LinkItem to={`/${x.toLowerCase()}`}>{x}</LinkItem>
                    })
                }
            </LinkDiv>
        </>
    )
}

const LinkDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: white;
    z-index: 100;
`

const LinkItem = styled(Link)`

`

export default ItemList