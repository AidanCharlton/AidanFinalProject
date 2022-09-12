import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
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
            <UtilityBar />
          </SpotCard>
        </SpotWrapper>
      )}
    </SpotWrapper>
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

const SpotWrapper = styled.div`
  margin-top: 30px;
  height: 100%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SpotCard = styled.div`
  background-color: white;
  padding: 20px;
  text-align: center;
  width: 800px;
  box-shadow: 0px 0px 10px 1px lightgray;
`;

const StyledText = styled.h1`
  font-size: 20px;
`;

export default SpotPage;

//database link: https://www.google.com/maps/@45.4830423,-73.5987933,3a,75y,100.29h,100.5t/data=!3m6!1e1!3m4!1sZgxbL89iJ96dqrqciLmaXg!2e0!7i16384!8i8192
//embeded link:   https://www.google.com/maps/embed?pb=!4v1661837324134!6m8!1m7!1sZgxbL89iJ96dqrqciLmaXg!2m2!1d 45.48304231825912!2d-73.5987932907826 !3f100.29!4f10.5!5f0.7820865974627469" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
