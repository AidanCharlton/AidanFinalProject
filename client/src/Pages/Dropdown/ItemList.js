import React from "react";
import Map from "../Map";
import styled from "styled-components";
import { useEffect, useState } from "react";

const ItemList = () => {
    const [spots, setSpots] = useState()

    useEffect(() => {
        const getAllSpots = async () => {
            const reqSpots = await fetch('/spots');
            const data = await reqSpots.json();
            setSpots(data);
        }
        getAllSpots()

    }, [])

    return !spots ? <></> : (
        <>

        </>
    )
};



export default ItemList;
