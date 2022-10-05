import styled from "styled-components";
import SubmissionBox from "../Components/SubmissionBox";

const SubmitSpot = () => {
    return (
        <Wrapper>
            <Title>Submit-a-Spot</Title>
            <InnerWrapper>
                <StyledBody>
                    <BodyText>Montreal Sk8Spots© uses Google Street View to preview spots. If possible, point the viewer directly at the spot. When your Street View window looks good, copy and paste your URL from your address bar into the link submission.</BodyText>
                    <SubmissionBox />
                </StyledBody>
            </InnerWrapper>
        </Wrapper >
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 90vh;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1`
    text-align: center;
    margin: 40px;
`

const BodyText = styled.p`
    padding: 20px;
    padding-bottom: 0px;
    font-size: 16px;
    text-align: center;
`

const InnerWrapper = styled.div`
    width: 60vw;
    height: auto;
    box-shadow: 0px 0px 10px 1px lightgray;
    display: flex;
    justify-content: center;
`
const StyledBody = styled.div`
width: 75%;
`

export default SubmitSpot