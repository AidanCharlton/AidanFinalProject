import React, { useEffect, useState } from "react";
import "../CSS/BoroughPage.css";
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
              <span
                style={{
                  textAlign: "center",
                  fontSize: "24px",
                  color: "#192168",
                  paddingBottom: "10px",
                }}
              >
                <BsFillCloudRainHeavyFill />
                <FormalName borough={borough} />
                <span>has no spots to display</span>
              </span>
            </NothingToDisplay>
          ) : (
            <>
              <TitleWrapper>
                <FormalName borough={borough} />
              </TitleWrapper>
              <InnerWrapper>
                <MapWrap className="map-wrap">
                  <AltTitle>
                    <FormalName borough={borough} />
                  </AltTitle>
                  <ParkMap parks={boroughSpots} />
                </MapWrap>
                <CardWrapper className="card-wrapper">
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
                              <Tags>
                                <span style={{ color: "black" }}>
                                  {spot.borough} -
                                </span>
                                {spot.tags.sort().map((x, id) => {
                                  return <span key={id}> {x}</span>;
                                })}
                              </Tags>
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
          <LinkWrapper>
            <SubmitLink to={"/submit"}>Submit a Spot</SubmitLink>
            <BackHome to={"/"}>Back to Home</BackHome>
          </LinkWrapper>
        </Wrapper>
      )}
    </>
  );
};

const Tags = styled.p`
  font-size: 10px;
  padding-top: 10px;
  margin: 0px;
  color: #af1e2d;
`;

const AltTitle = styled.div`
  display: none;
`;

// Title
const TitleWrapper = styled.div`
  border-bottom: solid 2px lightgray;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Bottom Links
const LinkWrapper = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-around;
  border-top: solid 2px lightgray;
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const BackHome = styled(Link)`
  text-decoration: none;
  color: #192168;
  margin-top: 20px;
`;
const SubmitLink = styled(Link)`
  text-decoration: none;
  margin-top: 20px;
  color: #192168;
`;

// Nothing to Display

const NothingToDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px 1px lightgray;
  background-color: white;
  margin: 30px;
  padding: 40px;
  height: 120px;
  width: 400px;
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
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

const InnerWrapper = styled.div`
  width: 1120px;
  height: 700px;
  margin: 20px 0px 20px 0px;
  /* box-shadow: 0px 0px 10px 2px lightgray; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  @media only screen and (max-width: 1500px), screen and (max-height: 600px) {
    height: 600px;
    width: 80%;
  }
`;

const MapWrap = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 30px;
  border-right: solid 2px lightgray;
  max-height: 90%;
  @media only screen and (max-width: 1500px) {
    border: none;
    padding-right: 0px;
  }
`;

const CardWrapper = styled.div`
  height: 635px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: scroll;
  padding-left: 20px;
  margin-right: -10px;
  overflow: hidden;
  @media only screen and (max-width: 1500px), screen and (max-height: 600px) {
    display: none;
    height: 427px;
  }
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
    box-shadow: 0px 0px 1px 1px gray;
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
  font-size: 16px;
  padding: 0px;
  margin: 0px;
`;

const NameWrapper = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  justify-content: center;
  height: 50px;
`;

const InfoSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 45px;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  padding: 2px;
  background-color: whitesmoke;
  border-radius: 10px;
`;

const SpotType = styled.div`
  font-size: 10px;
  color: #af1e2d;
`;

const IconWrap = styled.div`
  display: flex;
  padding: 0px;
  margin: 0px;
`;

export default BoroughPage;
