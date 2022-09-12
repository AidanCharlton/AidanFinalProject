import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterNav to={"/signin"}>Sign In</FooterNav>
      <FooterNav to={"/signup"}>Sign Up</FooterNav>
      <FooterNav>About</FooterNav>
      <FooterNav>Contact</FooterNav>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  padding: 0px;
  margin: 0px;
  width: 100vw;
  height: 70px;
  background-color: #192168;
  color: white;
`;

const FooterNav = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 12px;
  padding: 20px;
`;

export default Footer;
