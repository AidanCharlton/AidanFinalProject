import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState();
  const { isLoggedIn, setIsLoggedIn, userBookmarks, currentUser } =
    useContext(UserContext);
  let history = useHistory();

  const handleSignOut = () => {
    setIsLoggedIn(false);
    history.push("/");
  };

  return (
    <HigherWrap>
      <Wrapper>
        <InnerWrapper>
          <StyledHeader to="/">
            <HeaderTitle>Montreal Skate Spots</HeaderTitle>
          </StyledHeader>
          <LinkWrap>
            {isLoggedIn ? (
              <>
                <ArrowButton onClick={() => setOpenMenu(!openMenu)}>
                  {openMenu ? ">" : "<"}
                </ArrowButton>
                {openMenu ? (
                  <>
                    <Welcome>
                      Welcome, {currentUser.email.split("@")[0]}
                    </Welcome>
                    <SignIn to={"/bookmarks"}>
                      Bookmarks
                      <BookmarkNumber>({userBookmarks?.length})</BookmarkNumber>
                    </SignIn>
                    <SignOut onClick={handleSignOut}>Sign Out</SignOut>
                  </>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <>
                <ArrowButton onClick={() => setOpenMenu(!openMenu)}>
                  {openMenu ? ">" : "<"}
                </ArrowButton>
                {openMenu ? (
                  <>
                    <SignIn to={"/signin"}>Sign In</SignIn>
                    <SignUp to={"/signup"}>Sign Up</SignUp>
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
          </LinkWrap>
        </InnerWrapper>
      </Wrapper>
    </HigherWrap>
  );
};

const ArrowButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  margin-right: 10px;
  font-size: 30px;
  transition: 1s;
`;

const Welcome = styled.h1`
  color: white;
  font-size: 14px;
  margin-right: 20px;
`;

const Wrapper = styled.div``;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
`;

const HeaderTitle = styled.h1`
  color: white;
  @media only screen and (max-width: 650px) {
    font-size: 16px;
  }
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
  position: fixed;
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: center;
  padding: 0px 0px;
  align-items: center;
  background-color: #192168;
  opacity: 1;
`;

const SignIn = styled(Link)`
  color: white;
  text-decoration: none;
  transition: all 1s;
`;
const SignUp = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 20px;
`;

const SignOut = styled.button`
  margin-left: 20px;
  color: white;
  text-decoration: none;
  border: none;
  background-color: transparent;
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
`;

const BookmarkNumber = styled.span`
  color: #fbc4c4;
  font-weight: bold;
  margin: 5px;
`;

export default Header;
