import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import Spinner from "../Components/Spinner";
import Streetview from "../Components/Streetview";
import UtilityBar from "../Components/UtilityBar";

const SpotPage = () => {
  const [singleSpot, setSingleSpot] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchSpot = async () => {
      const requestSpot = await fetch(`/spots/${id}`);
      const data = await requestSpot.json();
      setSingleSpot(data?.data);
    };
    fetchSpot();
  }, [setSingleSpot, id]);

  return (
    <SpotWrapper>
      {!singleSpot ? (
        <SpinWrap>
          <Spinner />
        </SpinWrap>
      ) : (
        <SpotWrapper>
          <SpotCard>
            <StyledText>{singleSpot.name}</StyledText>
            <Streetview singleSpot={singleSpot} />
            <UtilityBar spotId={id} />
            <GoBack to={`/borough/${singleSpot.borough}`}> Go Back</GoBack>
          </SpotCard>
        </SpotWrapper>
      )}
    </SpotWrapper>
  );
};

const GoBack = styled(Link)`
  text-decoration: none;
`;

const SpinWrap = styled.div`
  width: 100vw;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SpotWrapper = styled.div`
  margin-top: 30px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SpotCard = styled.div`
  background-color: white;
  padding: 20px;
  text-align: center;
  width: 800px;
  height: 600px;
  box-shadow: 0px 0px 10px 1px lightgray;
  @media only screen and (max-width: 1000px) {
    width: 600px;
  }
`;

const StyledText = styled.h1`
  font-size: 20px;
`;

export default SpotPage;
