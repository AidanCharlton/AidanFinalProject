import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

import { SkateSpotContext } from "../Contexts/SkateSpotContext";
import Dropdown from "./Dropdown/Dropdown";

const Header = () => {
  const { boroughs, setBoroughs } = useContext(SkateSpotContext);

  useEffect(() => {
    const fetchBoroughs = async () => {
      try {
        const res = await fetch("/boroughs");
        const data = await res.json();
        if (!res.ok) {
          throw Error(`${res.status} ${res.statusText}`);
        }
        setBoroughs(data?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBoroughs();
  }, []);

  return !boroughs ? (
    <>loading</>
  ) : (
    <Wrapper>
      <StyledHeader to="/home">
        <FiHome className="icon" />
      </StyledHeader>
      <HeaderTitle>Montreal Skate Spots</HeaderTitle>
      <Dropdown />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 0px;
  padding: 0px;
  margin: 0px;
  background-color: white;
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #15133c;
  opacity: 1;
`;

const HeaderTitle = styled.h1`
  color: white;
`;

const StyledHeader = styled(Link)`
  text-decoration: none;
  color: #f5eddc;
`;

export default Header;
