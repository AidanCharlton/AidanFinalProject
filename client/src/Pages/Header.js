import React, {useContext, useEffect} from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { SkateSpotContext } from "../Contexts/SkateSpotContext";
import Dropdown from "./Dropdown/Dropdown";

const Header = () => {
    const {boroughs, setBoroughs, selectedBorough, setSelectedBorough} = useContext(SkateSpotContext)

    useEffect(() => {
        const fetchBoroughs = async () => { 
            try {
                const res = await fetch('/boroughs');
                const data = await res.json();
                if (!res.ok) {
                    throw Error(`${res.status} ${res.statusText}`);
                }
                setBoroughs(data?.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchBoroughs()
    }, [])


    

    return !boroughs ? <>loading</> : (
        <Wrapper>
            <StyledHeader to='/home'>
                <h1>Montreal Spots</h1>
            </StyledHeader>
            <Dropdown   
                selectedBorough={selectedBorough}
                setSelectedBoroug={setSelectedBorough}
                boroughs={boroughs}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: sticky;
    top: 0px;
    padding: 0px;
    margin: 0px;
    background-color: white;
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: lightgray;
    opacity: 1;
`

const StyledHeader = styled(Link)`
    text-decoration: none;
`

export default Header