import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";
import FormalName from "../Components/FormalName";
import UtilityBar from "../Components/UtilityBar";
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
    <>
      {!boroughSpots ? (
        <SpinWrap>
          <Spinner />
        </SpinWrap>
      ) : (
        <Wrapper>
          <TitleWrap>
            <FormalName borough={borough} />
          </TitleWrap>
          <CardWrapper>
            {boroughSpots.length === 0 ? (
              <span style={{ textAlign: "center" }}>
                <TbSkateboard /> No spots to display in this area...yet{" "}
                <TbSkateboard />
              </span>
            ) : (
              boroughSpots?.map((spot, key) => {
                return (
                  <SpotCard key={key}>
                    <StyledLink to={`/borough/${spot._id}`}>
                      <InfoSide>
                        {spot.type === "Street" ? (
                          <IconWrap>
                            <FaCity className="icon" />
                          </IconWrap>
                        ) : (
                          <IconWrap>
                            <TbSkateboard className="icon" />
                          </IconWrap>
                        )}
                        {spot.type === "Skatepark" ? (
                          <SpotType>Park</SpotType>
                        ) : (
                          <SpotType>{spot.type}</SpotType>
                        )}
                      </InfoSide>
                      <NameWrapper>
                        <SpotName>{spot.name}</SpotName>
                      </NameWrapper>
                    </StyledLink>

                    <UtilityBar spotId={spot._id} />
                  </SpotCard>
                );
              })
            )}
          </CardWrapper>
        </Wrapper>
      )}
    </>
  );
};

const SpinWrap = styled.div`
  width: 100vw;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  overflow: hidden;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const TitleWrap = styled.div`
  display: flex;
  width: 900px;
  justify-content: center;
`;

const CardWrapper = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const SpotCard = styled.div`
  color: #15133c;
  background-color: white;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 100%;
  margin: 10px;
  padding: 5px;
  border: solid 1px black;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 0px 1px black;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  color: black;
  width: 100%;
`;

const SpotName = styled.div`
  font-size: 20px;
  padding: 10px;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 70px;
`;

const InfoSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  align-items: center;
  padding-left: 20px;
`;

const SpotType = styled.div`
  font-size: 15px;
  color: red;
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: right;
`;

export default BoroughPage;
