import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";
import { useHistory } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn, userBookmarks } = useContext(UserContext);
  let history = useHistory();

  useEffect(() => { }, [userBookmarks]);

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
                <SignIn to={"/bookmarks"}>
                  Bookmarks
                  <BookmarkNumber>({userBookmarks?.length})</BookmarkNumber>
                </SignIn>
                <SignOut onClick={handleSignOut}>Sign Out</SignOut>
              </>
            ) : (
              <>
                <SignIn to={"/signin"}>Sign In</SignIn>
                <SignUp to={"/signup"}>Sign Up</SignUp>

              </>
            )}
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
  color: red;
  font-weight: bold;
  margin: 10px;
`;

export default Header;
