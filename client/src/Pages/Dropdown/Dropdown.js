import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdown = ({ setOpenMenu, openMenu }) => {
  return (
    <div>
      <MenuButton onClick={() => setOpenMenu(!openMenu)}>
        {!openMenu ? (
          <IoIosArrowDown className="icon" />
        ) : (
          <IoIosArrowUp className="icon" />
        )}
      </MenuButton>
    </div>
  );
};
const MenuButton = styled.button`
  color: white;
  background: transparent;
  border: none;
`;

export default Dropdown;
