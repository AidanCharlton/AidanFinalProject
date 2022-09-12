import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FormalName = ({ borough }) => {
  const [formalName, setFormalName] = useState();

  useEffect(() => {
    switch (borough) {
      case "west-island":
        setFormalName("West Island");
        break;
      case "saint-laurent":
        setFormalName("Saint-Laurent");
        break;
      case "ahuntsic":
        setFormalName("Ahuntsic-Cartierville");
        break;
      case "mtl-north":
        setFormalName("Montreal North");
        break;
      case "rdb":
        setFormalName("Riviere-des-Prairies—Pointe-aux-Trembles");
        break;
      case "dorval":
        setFormalName("Dorval");
        break;
      case "hampstead":
        setFormalName("Hampstead");
        break;
      case "tmr":
        setFormalName("Mount Royal");
        break;
      case "cdn":
        setFormalName("Côte-des-Neiges");
        break;
      case "park-extension":
        setFormalName("Park Extension");
        break;
      case "little-italy":
        setFormalName("Little Italy");
        break;
      case "rosemont":
        setFormalName("Rosemont-La Petite-Patrie");
        break;
      case "mtl-east":
        setFormalName("Montreal East");
        break;
      case "lachine":
        setFormalName("Lachine");
        break;
      case "mtl-west":
        setFormalName("Montreal West");
        break;
      case "ndg":
        setFormalName("Notre-Dame-de-Grâce");
        break;
      case "westmount":
        setFormalName("Westmount");
        break;
      case "downtown":
        setFormalName("Downtown");
        break;
      case "plateau":
        setFormalName("Le Plateau-Mont-Royal");
        break;
      case "south-west":
        setFormalName("Southwest");
        break;
      case "village":
        setFormalName("The Village");
        break;
      case "hochelaga":
        setFormalName("Hochelaga-Maisonneuve");
        break;
      case "old-port":
        setFormalName("Old Montreal");
      default:
        break;
    }
  }, [setFormalName, borough]);
  return <FormalTitle>{formalName}</FormalTitle>;
};

const FormalTitle = styled.h1`
  margin-top: 30px;
  padding-left: 20px;
  font-weight: 500;
  font-size: 25px;
  color: #192168;
  font-weight: 500;
`;

export default FormalName;
