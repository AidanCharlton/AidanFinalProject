import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";
import { TbSkateboard } from "react-icons/tb";
import { FaCity } from "react-icons/fa";

const BoroughPage = () => {
  const [boroughSpots, setBoroughSpots] = useState();
  const { borough } = useParams();

  useEffect(() => {
    const fetchBorough = async () => {
      const reqSpots = await fetch(`/boroughs/${borough.toLowerCase()}`);
      const data = await reqSpots.json();
      setBoroughSpots(data?.data);
    };
    fetchBorough();
  }, [setBoroughSpots, borough]);

  return (
    <Wrapper>
      <TitleWrap>
        <h1>{borough}</h1>
      </TitleWrap>
      {!boroughSpots ? (
        <Spinner />
      ) : (
        <CardWrapper>
          {boroughSpots?.map((spot, key) => {
            return (
              <SpotCard to={`/borough/${spot._id}`} key={key}>
                <SpotName>{spot.name}</SpotName>
                <RightSide>
                  {spot.type === "Skatepark" ? (
                    <SpotType>Park</SpotType>
                  ) : (
                    <SpotType>{spot.type}</SpotType>
                  )}

                  {spot.type === "Street" ? (
                    <IconWrap>
                      <FaCity className="icon" />
                    </IconWrap>
                  ) : (
                    <IconWrap>
                      <TbSkateboard className="icon" />
                    </IconWrap>
                  )}
                </RightSide>
              </SpotCard>
            );
          })}
        </CardWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const TitleWrap = styled.div`
  display: flex;
  width: 700px;
  justify-content: center;
  padding: 20px;
`;

const CardWrapper = styled.div`
  max-width: 900px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const SpotCard = styled(Link)`
  color: #15133c;
  background-color: white;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  margin: 10px;
  padding: 5px;
  box-shadow: 0px 0px 1px 1px lightgray;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 2px 5px 1px lightgray;
  }
`;

const SpotName = styled.div`
  text-align: center;
  font-size: 20px;
  padding: 10px;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`;

const SpotType = styled.div`
  font-size: 14px;
  color: #ec994b;
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: right;
`;
export default BoroughPage;
