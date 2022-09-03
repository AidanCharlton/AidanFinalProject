import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";

const Dropdown = () => {
  return (
    <div>
      <MenuButton to={"/"}>
        <FiAlignJustify className="icon" />
      </MenuButton>
    </div>
  );
};
const MenuButton = styled(Link)`
  color: #f5eddc;
`;

export default Dropdown;
