import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { SkateSpotContext } from "../Contexts/SkateSpotContext";
import Dropdown from "./Dropdown/Dropdown";

const Header = () => {
  const { boroughs, setBoroughs } = useContext(SkateSpotContext);
  const [openMenu, setOpenMenu] = useState();

  useEffect(() => {
    setOpenMenu(false);
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
  }, [setBoroughs]);

  return !boroughs ? (
    <>loading</>
  ) : (
    <HigherWrap>
      <Wrapper>
        <InnerWrapper>
          <StyledHeader to="/">
            <HeaderTitle>Montreal Skate Spots</HeaderTitle>
          </StyledHeader>
          <LinkWrap>
            <SignIn to={"/signup"}>Login</SignIn>
          </LinkWrap>
        </InnerWrapper>
      </Wrapper>
    </HigherWrap>
  );
};

const Wrapper = styled.div`
  position: sticky;
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: center;
  padding: 0px 0px;
  align-items: center;
  background-color: #192168;
  opacity: 1;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
`;

const HeaderTitle = styled.h1`
  color: white;
`;

const StyledHeader = styled(Link)`
  text-decoration: none;
  color: #f5eddc;
`;

const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
`;

const HigherWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const SignIn = styled(Link)`
  color: white;
  text-decoration: none;
`;

const SignUp = styled(Link)`
  padding: 20px;
  color: white;
  text-decoration: none;
`;

export default Header;
