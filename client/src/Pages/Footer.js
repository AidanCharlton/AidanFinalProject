import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterNav>Sign-In</FooterNav>
      <FooterNav>Submit</FooterNav>
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
  background-color: white;
  width: 100vw;
  height: 40px;
  background-color: #15133c;
  color: white;
`;

const FooterNav = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 12px;
  padding: 20px;
`;

export default Footer;
