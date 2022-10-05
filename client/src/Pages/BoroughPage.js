import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";
import FormalName from "../Components/FormalName";
import UtilityBar from "../Components/UtilityBar";
import { TbSkateboard } from "react-icons/tb";
import { FaCity } from "react-icons/fa";
import { BsFillCloudRainHeavyFill } from "react-icons/bs";
import ParkMap from "../Components/ParkMap";

const BoroughPage = () => {
  const [boroughSpots, setBoroughSpots] = useState();
  const { borough } = useParams();

  useEffect(() => {
    const fetchBorough = async () => {
      if (borough === "parks") {
        const reqSpots = await fetch("/parks");
        const data = await reqSpots.json();
        setBoroughSpots(data?.data);
      } else if (borough === "all-spots") {
        const reqSpots = await fetch("/spots");
        const data = await reqSpots.json();
        setBoroughSpots(data?.data);
      } else {
        const reqSpots = await fetch(`/boroughs/${borough.toLowerCase()}`);
        const data = await reqSpots.json();
        setBoroughSpots(data?.data);
      }
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
          {boroughSpots.length === 0 ? (
            <NothingToDisplay>
              <span style={{ textAlign: "center", fontSize: "22px" }}>
                <BsFillCloudRainHeavyFill style={{ paddingRight: "20px" }} />
                <FormalName borough={borough} /> has no spots to display
              </span>
              <div>
                <Return style={{ textAlign: "center" }} to={"/"}>
                  Home
                </Return>
                <Return style={{ textAlign: "center" }} to={"/submit"}>
                  Submit a spot
                </Return>
              </div>
            </NothingToDisplay>
          ) : (
            <>
              <div style={{ 'padding': '10px' }}>
                <FormalName borough={borough} />
              </div>
              <InnerWrapper>
                <MapWrap>
                  <ParkMap parks={boroughSpots} />
                </MapWrap>
                <CardWrapper>
                  <div style={{ overflow: "scroll" }}>
                    {boroughSpots?.map((spot, key) => {
                      return (
                        <SpotCard key={key}>
                          <StyledLink
                            to={`/borough/${spot.borough}/${spot._id}`}
                          >
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
                    })}
                  </div>
                </CardWrapper>
              </InnerWrapper>
            </>
          )}
        </Wrapper>
      )}
    </>
  );
};

const NothingToDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px 1px lightgray;
  background-color: white;
  margin: 30px;
  padding: 20px;
  height: 200px;
  width: 500px;
`;

const Return = styled(Link)`
  text-decoration: none;
  padding: 20px;
  display: inline-block;
`;

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
  margin-bottom: 100px;
`;

const InnerWrapper = styled.div`
  width: 1200px;
  height: 800px;
  margin: 20px 0px 20px 0px;
  box-shadow: 0px 0px 10px 2px lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const MapWrap = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 30px;
  border-right: solid 2px lightgray;
`;

const CardWrapper = styled.div`
  width: auto;
  height: 705px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: scroll;
  padding-left: 20px;
`;

const SpotCard = styled.div`
  color: #15133c;
  background-color: white;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 500px;
  margin: 10px;
  padding: 0px;
  box-shadow: 0px 0px 5px 1px lightgray;
  transition: 0.5s;
  &:hover {
    box-shadow: 0px 0px 5px 1px gray;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  color: #192168;
  width: 100%;
`;

const SpotName = styled.div`
  font-size: 14px;
  padding: 0px;
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
  padding-left: 0px;
`;

const SpotType = styled.div`
  font-size: 15px;
  color: #af1e2d;
`;

const IconWrap = styled.div`
  display: flex;
  padding: 0px;
  margin: 0px;
`;

export default BoroughPage;
